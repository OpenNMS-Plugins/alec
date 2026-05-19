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

import javax.ws.rs.core.Response;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SuggestionsRestImpl implements SuggestionsRest {

    private static final Logger LOG = LoggerFactory.getLogger(SuggestionsRestImpl.class);

    private final SuggestionStore store;
    private final SituationDatasource situationDatasource;
    private final ClaudeSituationHandler handler;
    private final ClaudeConfigReader configReader;

    public SuggestionsRestImpl(SuggestionStore store,
                               SituationDatasource situationDatasource,
                               ClaudeSituationHandler handler,
                               ClaudeConfigReader configReader) {
        this.store = Objects.requireNonNull(store);
        this.situationDatasource = Objects.requireNonNull(situationDatasource);
        this.handler = Objects.requireNonNull(handler);
        this.configReader = Objects.requireNonNull(configReader);
    }

    @Override
    public Response getSuggestion(String situationId) {
        if (situationId == null || situationId.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("situationId is required")
                    .build();
        }
        // The UI sends the numeric long ID (TSituation.id is the OpenNMS
        // alarm row id). The handler stores under the situation's UUID
        // reduction-key (because longId is 0 at engine-emit time). So we
        // resolve longId -> situation -> getId() before the KV lookup.
        String storageKey = resolveStorageKey(situationId);
        if (storageKey == null) {
            // 204 not 404: a situation whose suggestion record doesn't exist
            // looks the same as a stale long-id lookup to the polling UI.
            return Response.noContent().build();
        }
        Optional<SuggestionRecord> record = store.get(storageKey);
        if (record.isEmpty()) {
            return Response.noContent().build();
        }
        return Response.ok().entity(record.get()).build();
    }

    /**
     * Map the front-end's numeric long id to the storage key (the situation's
     * UUID-shaped reduction key). Returns null if the path parameter isn't a
     * numeric long, or no situation with that id exists.
     */
    private String resolveStorageKey(String longIdParam) {
        int numericId;
        try {
            numericId = Integer.parseInt(longIdParam);
        } catch (NumberFormatException e) {
            // Caller might already be passing a UUID-shaped key — use it as-is.
            // (Defense-in-depth in case the UI ever sends the UUID directly.)
            return longIdParam;
        }
        try {
            Optional<Situation> maybe = situationDatasource.getSituation(numericId);
            return maybe.map(ClaudeSituationHandler::keyFor).orElse(null);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return null;
        }
    }

    @Override
    public Response reanalyze(String situationId) {
        if (situationId == null || situationId.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("situationId is required")
                    .build();
        }
        int numericId;
        try {
            numericId = Integer.parseInt(situationId);
        } catch (NumberFormatException e) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("situationId must be a numeric long id")
                    .build();
        }

        // Surface a clear 400 if the feature is off, so the UI doesn't show a
        // confusing "pending" spinner that never resolves.
        Optional<ClaudeConfigReader.Config> config = configReader.read();
        if (config.isEmpty() || !config.get().isEnabled() || !config.get().hasApiKey()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Claude integration is not enabled — set an API key and enable on the configuration page")
                    .build();
        }

        Situation situation;
        try {
            Optional<Situation> maybe = situationDatasource.getSituation(numericId);
            if (maybe.isEmpty()) {
                return Response.status(Response.Status.NOT_FOUND)
                        .entity("No situation found with id " + situationId)
                        .build();
            }
            situation = maybe.get();
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            LOG.warn("Interrupted while loading situation {}", situationId);
            return Response.serverError()
                    .entity("Interrupted while loading situation " + situationId)
                    .build();
        }

        LOG.info("Re-evaluation requested for situation {}", situationId);
        handler.forceReanalyze(situation);
        // Return the pending record that forceReanalyze wrote synchronously
        // so the UI can immediately show the spinner state without an extra
        // round-trip. Use the situation's storage key (UUID), not the path
        // parameter (the long id), so this matches what the handler stored.
        Optional<SuggestionRecord> pending = store.get(ClaudeSituationHandler.keyFor(situation));
        return Response.status(Response.Status.ACCEPTED)
                .entity(pending.orElse(null))
                .build();
    }
}
