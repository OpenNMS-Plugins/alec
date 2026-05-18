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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertFalse;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;

import com.fasterxml.jackson.databind.ObjectMapper;

public class ClaudeSituationHandlerTest {

    private InMemoryKVStore kv;
    private ClaudeConfigReader configReader;
    private SuggestionStore store;
    private UsageStore usageStore;
    private ClaudeSuggestionService service;
    private ClaudeSituationHandler handler;
    private long mockNow;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        ObjectMapper om = new ObjectMapper();
        configReader = new ClaudeConfigReader(kv, om);
        store = new SuggestionStore(kv, om);
        usageStore = new UsageStore(kv, om);
        service = mock(ClaudeSuggestionService.class);
        mockNow = 1_000L;
        handler = new ClaudeSituationHandler(configReader, service, store, usageStore, () -> mockNow);
    }

    // --- guardrails ---

    @Test
    public void nullSituationIsANoOp() {
        handler.onSituation(null);
        verify(service, never()).requestSuggestions(any(), any());
    }

    @Test
    public void storageKeyIsTheLongIdNotTheStringUuid() {
        // Regression for the front-end mismatch: TSituation.id in the UI is the
        // numeric long, so the handler must store under that exact value (as a
        // String for KV-store compatibility). Storing under situation.getId()
        // (a UUID-ish reduction-key string) silently 204s every UI lookup.
        writeConfig(true, "sk-ant-key");
        when(service.requestSuggestions(any(), eq("sk-ant-key")))
                .thenReturn(new CompletableFuture<>());

        Situation s = mock(Situation.class);
        when(s.getLongId()).thenReturn(42L);
        when(s.getId()).thenReturn("uei.opennms.org/alarms/situation:some-uuid");

        handler.onSituation(s);

        assertThat("stored under the long id, not the UUID",
                store.get("42").isPresent(), is(true));
        assertThat("uuid key is NOT used",
                store.get("uei.opennms.org/alarms/situation:some-uuid").isPresent(),
                is(false));
    }

    @Test
    public void skipsWhenNoConfigPersisted() {
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any());
        assertThat(store.get("1").isPresent(), is(false));
    }

    @Test
    public void skipsWhenConfigDisabledEvenWithApiKey() {
        writeConfig(false, "sk-ant-key");
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any());
        // Disabled = clean off-switch. We don't even leave a 'pending' breadcrumb.
        assertFalse(store.get("1").isPresent());
    }

    @Test
    public void skipsWhenConfigEnabledButApiKeyMissing() {
        writeConfig(true, "");
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any());
    }

    // --- existing-record gates ---

    @Test
    public void skipsWhenExistingRecordIsPending() {
        writeConfig(true, "sk-ant-key");
        store.putPending("1", 500L, ClaudeSuggestionServiceImpl.MODEL);
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any());
    }

    @Test
    public void skipsWhenExistingRecordIsReady() {
        writeConfig(true, "sk-ant-key");
        store.putReady("1", 500L, 600L, ClaudeSuggestionServiceImpl.MODEL,
                Arrays.asList("c"), Arrays.asList("r"));
        handler.onSituation(stubSituation(1L));
        verify(service, never()).requestSuggestions(any(), any());
    }

    @Test
    public void retriesWhenExistingRecordIsFailed() {
        writeConfig(true, "sk-ant-key");
        store.putFailed("1", 500L, 600L, ClaudeSuggestionServiceImpl.MODEL, "old error");
        when(service.requestSuggestions(any(), eq("sk-ant-key")))
                .thenReturn(new CompletableFuture<>()); // pending, never completes

        handler.onSituation(stubSituation(1L));

        verify(service).requestSuggestions(any(), eq("sk-ant-key"));
        // Pending record overwrites the previous failed one.
        SuggestionRecord r = store.get("1").orElseThrow();
        assertThat(r.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(r.getRequestedAt(), equalTo(1_000L));
    }

    // --- happy path: pending -> ready ---

    @Test
    public void writesPendingSynchronouslyAndThenReadyWhenServiceCompletes() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"))).thenReturn(future);

        // Step 1: pending appears immediately, before the future resolves.
        handler.onSituation(stubSituation(1L));
        SuggestionRecord pending = store.get("1").orElseThrow();
        assertThat(pending.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(pending.getRequestedAt(), equalTo(1_000L));
        assertThat(pending.getModel(), equalTo(ClaudeSuggestionServiceImpl.MODEL));

        // Step 2: simulate the service completing.
        mockNow = 1_500L;
        future.complete(new Suggestions(
                Arrays.asList("link saturation", "QoS misconfig"),
                Arrays.asList("check counters", "open vendor ticket"),
                Suggestions.TokenUsage.empty()));

        SuggestionRecord ready = store.get("1").orElseThrow();
        assertThat(ready.getStatus(), equalTo(SuggestionRecord.STATUS_READY));
        assertThat(ready.getRootCauses().size(), equalTo(2));
        assertThat(ready.getResolutions().size(), equalTo(2));
        assertThat(ready.getCompletedAt(), equalTo(1_500L));
        assertThat("requestedAt is preserved across the transition",
                ready.getRequestedAt(), equalTo(1_000L));
    }

    // --- failure path: pending -> failed ---

    @Test
    public void writesFailedWhenServiceFutureCompletesExceptionally() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"))).thenReturn(future);

        handler.onSituation(stubSituation(1L));
        mockNow = 1_500L;
        future.completeExceptionally(new ClaudeApiException("HTTP 401: invalid api key"));

        SuggestionRecord failed = store.get("1").orElseThrow();
        assertThat(failed.getStatus(), equalTo(SuggestionRecord.STATUS_FAILED));
        assertThat(failed.getError(), containsString("HTTP 401"));
        assertThat(failed.getCompletedAt(), equalTo(1_500L));
        assertThat(failed.getRootCauses().isEmpty(), is(true));
    }

    // --- usage recording on completion ---

    @Test
    public void recordsSuccessUsageRowOnReady() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"))).thenReturn(future);

        // Use real wall-clock for usage recording — UsageStore.aggregate filters
        // by ts vs System.currentTimeMillis(), so a 1970-era mockNow would fall
        // outside the 1-day window even immediately after writing it.
        mockNow = System.currentTimeMillis();
        handler.onSituation(stubSituation(1L));
        future.complete(new Suggestions(
                Arrays.asList("cause"),
                Arrays.asList("res"),
                new Suggestions.TokenUsage(200L, 50L, 100L, 20L)));

        UsageReport report = usageStore.aggregate(1);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getSuccessfulCalls(), equalTo(1L));
        assertThat(report.getFailedCalls(), equalTo(0L));
        assertThat(report.getInputTokens(), equalTo(200L));
        assertThat(report.getOutputTokens(), equalTo(50L));
        assertThat(report.getCacheReadInputTokens(), equalTo(100L));
        assertThat(report.getCacheCreationInputTokens(), equalTo(20L));
    }

    @Test
    public void recordsFailureUsageRowWithZeroTokens() {
        writeConfig(true, "sk-ant-key");
        CompletableFuture<Suggestions> future = new CompletableFuture<>();
        when(service.requestSuggestions(any(), eq("sk-ant-key"))).thenReturn(future);

        mockNow = System.currentTimeMillis();
        handler.onSituation(stubSituation(2L));
        future.completeExceptionally(new ClaudeApiException("timeout"));

        UsageReport report = usageStore.aggregate(1);
        assertThat(report.getCalls(), equalTo(1L));
        assertThat(report.getSuccessfulCalls(), equalTo(0L));
        assertThat(report.getFailedCalls(), equalTo(1L));
        assertThat("failure rows carry zero tokens", report.getTotalTokens(), equalTo(0L));
    }

    // --- helpers ---

    private void writeConfig(boolean enabled, String apiKey) {
        String json = "{\"enabled\":" + enabled + ",\"apiKey\":\"" + apiKey + "\"}";
        kv.put(ClaudeConfigReader.CONFIG_KEY, json, ClaudeConfigReader.CONFIG_CONTEXT);
    }

    private static Situation stubSituation(long longId) {
        Situation s = mock(Situation.class);
        when(s.getLongId()).thenReturn(longId);
        // getId is still mocked (with a UUID-shaped string) so any code that
        // logs or otherwise touches it gets something sensible, even though
        // the handler keys off getLongId now.
        when(s.getId()).thenReturn("uei.opennms.org/alarms/situation:test-" + longId);
        return s;
    }

    @SuppressWarnings("unused")
    private static <T> Optional<T> unused() {
        return Optional.empty();
    }
}
