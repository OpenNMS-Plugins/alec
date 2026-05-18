/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2026 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2026 The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is a registered trademark of The OpenNMS Group, Inc.
 *
 * OpenNMS(R) is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * OpenNMS(R) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with OpenNMS(R).  If not, see:
 *      http://www.gnu.org/licenses/
 *
 * For more information contact:
 *     OpenNMS(R) Licensing <license@opennms.org>
 *     http://www.opennms.org/
 *     http://www.opennms.com/
 *******************************************************************************/

package org.opennms.alec.claude;

import java.util.Objects;
import java.util.Optional;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Bridges DBSCAN (and any other engine) to {@link ClaudeSuggestionService}.
 * Registered as an OSGi SituationHandler with service property
 * {@code role=engine-listener} so {@code CompositeSituationHandler} picks
 * it up automatically — see slice 2.
 *
 * Behavior on {@link #onSituation(Situation)}:
 * <ol>
 *   <li>Read the current Claude config from KV (fresh, not cached).</li>
 *   <li>If disabled or no API key: no-op. We never publish into the KV store
 *       in this state — disabling the feature is a clean off-switch.</li>
 *   <li>Look up any existing record for the situation. Skip if status is
 *       {@code pending} (a call is in-flight) or {@code ready} (we already
 *       have a result). Only fire when no record exists or the previous
 *       attempt was {@code failed}.</li>
 *   <li>Write a {@code pending} record synchronously (microseconds — just
 *       JSON serialization + KV put), then submit the LLM call to the
 *       service's own executor. Returns immediately — the engine thread
 *       never blocks on Claude latency.</li>
 *   <li>On completion, write {@code ready} or {@code failed}.</li>
 * </ol>
 *
 * Updates to existing situations (which AbstractClusterEngine also routes
 * through onSituation) intentionally do NOT re-trigger a Claude call. Slice 4
 * is first-fire-only; richer behavior (refresh-on-significant-change) is a
 * future ticket.
 */
public class ClaudeSituationHandler implements SituationHandler {

    private static final Logger LOG = LoggerFactory.getLogger(ClaudeSituationHandler.class);

    private final ClaudeConfigReader configReader;
    private final ClaudeSuggestionService suggestionService;
    private final SuggestionStore store;
    private final UsageStore usageStore;
    private final TimeSource timeSource;

    public ClaudeSituationHandler(ClaudeConfigReader configReader,
                                  ClaudeSuggestionService suggestionService,
                                  SuggestionStore store,
                                  UsageStore usageStore) {
        this(configReader, suggestionService, store, usageStore, System::currentTimeMillis);
    }

    // Visible for testing — lets the test inject deterministic timestamps.
    ClaudeSituationHandler(ClaudeConfigReader configReader,
                           ClaudeSuggestionService suggestionService,
                           SuggestionStore store,
                           UsageStore usageStore,
                           TimeSource timeSource) {
        this.configReader = Objects.requireNonNull(configReader);
        this.suggestionService = Objects.requireNonNull(suggestionService);
        this.store = Objects.requireNonNull(store);
        this.usageStore = Objects.requireNonNull(usageStore);
        this.timeSource = Objects.requireNonNull(timeSource);
    }

    /**
     * KV-store key for a situation. We deliberately use the numeric long ID
     * (not the String UUID returned by {@link Situation#getId()}) because the
     * front-end's {@code TSituation.id} is the numeric long, and the REST
     * endpoint receives that value as the path parameter. Storing under the
     * UUID would silently 204 every front-end lookup — see ALEC-299 fixes.
     */
    static String keyFor(Situation situation) {
        return String.valueOf(situation.getLongId());
    }

    @Override
    public void onSituation(Situation situation) {
        if (situation == null) {
            return;
        }
        final String situationId = keyFor(situation);

        Optional<ClaudeConfigReader.Config> maybeConfig = configReader.read();
        if (maybeConfig.isEmpty()) {
            return;
        }
        ClaudeConfigReader.Config config = maybeConfig.get();
        if (!config.isEnabled() || !config.hasApiKey()) {
            return;
        }

        Optional<SuggestionRecord> existing = store.get(situationId);
        if (existing.isPresent()) {
            String status = existing.get().getStatus();
            if (SuggestionRecord.STATUS_PENDING.equals(status)
                    || SuggestionRecord.STATUS_READY.equals(status)) {
                return;
            }
            // status == failed → fall through and retry once
        }

        analyzeAndStore(situation, situationId, config);
    }

    /**
     * Force a fresh analysis, bypassing the "skip if already pending/ready"
     * guard {@link #onSituation} uses. Called by the {@code /reanalyze} REST
     * endpoint when a user clicks Re-evaluate.
     */
    public void forceReanalyze(Situation situation) {
        if (situation == null) {
            return;
        }
        final String situationId = keyFor(situation);
        Optional<ClaudeConfigReader.Config> maybeConfig = configReader.read();
        if (maybeConfig.isEmpty()) {
            return;
        }
        ClaudeConfigReader.Config config = maybeConfig.get();
        if (!config.isEnabled() || !config.hasApiKey()) {
            return;
        }
        analyzeAndStore(situation, situationId, config);
    }

    private void analyzeAndStore(Situation situation, String situationId,
                                 ClaudeConfigReader.Config config) {
        final long requestedAt = timeSource.now();
        store.putPending(situationId, requestedAt, ClaudeSuggestionServiceImpl.MODEL);

        suggestionService.requestSuggestions(situation, config.getApiKey())
                .whenComplete((suggestions, error) -> {
                    long completedAt = timeSource.now();
                    if (error != null) {
                        // unwrap CompletionException so error.getMessage is the real reason
                        Throwable cause = error.getCause() != null ? error.getCause() : error;
                        String reason = cause.getMessage() == null
                                ? cause.getClass().getSimpleName()
                                : cause.getMessage();
                        LOG.warn("Claude suggestion failed for situation {}: {}", situationId, reason);
                        store.putFailed(situationId, requestedAt, completedAt,
                                ClaudeSuggestionServiceImpl.MODEL, reason);
                        // Record the failed attempt too — call count and success rate matter
                        // for the dashboard even when no tokens were billed.
                        usageStore.record(UsageRecord.newBuilder()
                                .ts(completedAt)
                                .situationId(situationId)
                                .model(ClaudeSuggestionServiceImpl.MODEL)
                                .success(false)
                                .build());
                        return;
                    }
                    store.putReady(situationId, requestedAt, completedAt,
                            ClaudeSuggestionServiceImpl.MODEL,
                            suggestions.getRootCauses(),
                            suggestions.getResolutions());
                    Suggestions.TokenUsage u = suggestions.getUsage();
                    usageStore.record(UsageRecord.newBuilder()
                            .ts(completedAt)
                            .situationId(situationId)
                            .model(ClaudeSuggestionServiceImpl.MODEL)
                            .success(true)
                            .inputTokens(u.getInputTokens())
                            .outputTokens(u.getOutputTokens())
                            .cacheReadInputTokens(u.getCacheReadInputTokens())
                            .cacheCreationInputTokens(u.getCacheCreationInputTokens())
                            .build());
                });
    }

    @Override
    public void onSituationDeleted(String situationId) {
        // No action in slice 4 — we keep the historical suggestion record so the
        // UI can still show "AI suggestions for this closed situation" if asked.
        // Pruning by age handles eventual cleanup (SuggestionPruner).
    }

    @FunctionalInterface
    interface TimeSource {
        long now();
    }
}
