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

package org.opennms.alec.llm;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class SuggestionStoreTest {

    private InMemoryKVStore kv;
    private ObjectMapper om;
    private SuggestionStore store;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        om = new ObjectMapper();
        store = new SuggestionStore(kv, om);
    }

    // --- putPending / putReady / putFailed shape + round-trip ---

    @Test
    public void putPendingPersistsCorrectShape() throws Exception {
        store.putPending("sit-1", 1000L, "anthropic/claude-sonnet-4.6");

        String raw = kv.get("sit-1", SuggestionStore.CONTEXT).orElseThrow();
        JsonNode node = om.readTree(raw);
        assertThat(node.get("situationId").asText(), equalTo("sit-1"));
        assertThat(node.get("status").asText(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(node.get("requestedAt").asLong(), equalTo(1000L));
        assertThat("completedAt absent or null while pending",
                node.get("completedAt") == null || node.get("completedAt").isNull(), is(true));
        assertThat(node.get("model").asText(), equalTo("anthropic/claude-sonnet-4.6"));
    }

    @Test
    public void putReadyCarriesArraysAndCompletedAt() {
        store.putReady("sit-2", 1000L, 1500L, "anthropic/claude-sonnet-4.6",
                Arrays.asList("cause A", "cause B"),
                Arrays.asList("res A"));

        SuggestionRecord rec = store.get("sit-2").orElseThrow();
        assertThat(rec.getStatus(), equalTo(SuggestionRecord.STATUS_READY));
        assertThat(rec.getRootCauses(), equalTo(Arrays.asList("cause A", "cause B")));
        assertThat(rec.getResolutions(), equalTo(Arrays.asList("res A")));
        assertThat(rec.getCompletedAt(), equalTo(1500L));
        assertThat(rec.getError(), is((String) null));
    }

    @Test
    public void putFailedCarriesErrorAndEmptyArrays() {
        store.putFailed("sit-3", 1000L, 1200L, "anthropic/claude-sonnet-4.6", "Timeout after 30s");

        SuggestionRecord rec = store.get("sit-3").orElseThrow();
        assertThat(rec.getStatus(), equalTo(SuggestionRecord.STATUS_FAILED));
        assertThat(rec.getError(), equalTo("Timeout after 30s"));
        assertThat(rec.getRootCauses().isEmpty(), is(true));
        assertThat(rec.getResolutions().isEmpty(), is(true));
    }

    @Test
    public void getReturnsEmptyForUnknownSituation() {
        assertThat(store.get("nope").isPresent(), is(false));
    }

    // --- malformed-record handling ---

    @Test
    public void getDropsMalformedRecordsSoTheyDontJamFutureWrites() {
        kv.put("sit-bad", "{this is not valid json", SuggestionStore.CONTEXT);
        assertThat(store.get("sit-bad").isPresent(), is(false));
        // The malformed value should have been removed so the next put won't be confused.
        assertThat(kv.get("sit-bad", SuggestionStore.CONTEXT).isPresent(), is(false));
    }

    // --- prune ---

    @Test
    public void pruneDeletesRecordsOlderThanCutoff() {
        store.putReady("old", 100L, 200L, "m",
                Arrays.asList("a"), Arrays.asList("b"));
        store.putReady("middle", 500L, 600L, "m",
                Arrays.asList("a"), Arrays.asList("b"));
        store.putReady("recent", 1000L, 1100L, "m",
                Arrays.asList("a"), Arrays.asList("b"));

        int deleted = store.pruneOlderThan(700L);
        assertThat("only 'old' and 'middle' are older than cutoff 700", deleted, equalTo(2));
        assertThat(store.get("old").isPresent(), is(false));
        assertThat(store.get("middle").isPresent(), is(false));
        assertThat(store.get("recent").isPresent(), is(true));
    }

    @Test
    public void pruneDropsUnparseableRecordsRegardlessOfAge() {
        // Junk record gets dropped during a prune sweep even if we can't read its requestedAt —
        // we'd never be able to surface it to the UI anyway.
        kv.put("junk", "not json", SuggestionStore.CONTEXT);
        store.putReady("recent", 1000L, 1100L, "m",
                Arrays.asList("a"), Arrays.asList("b"));

        int deleted = store.pruneOlderThan(500L);
        assertThat("junk dropped; recent kept", deleted, equalTo(1));
        assertThat(kv.get("junk", SuggestionStore.CONTEXT).isPresent(), is(false));
    }

    @Test
    public void pruneIsANoOpOnEmptyContext() {
        assertThat(store.pruneOlderThan(System.currentTimeMillis()), equalTo(0));
    }

    // --- forward-compat: record carries unknown fields without crashing ---

    @Test
    public void recordDeserializerIgnoresUnknownFields() throws Exception {
        // Future versions may add fields (e.g. cost estimate, version markers).
        // Round-tripping must tolerate them so the bundle starts after a downgrade.
        String json = "{\"situationId\":\"x\",\"status\":\"ready\",\"requestedAt\":1,"
                + "\"futureField\":\"whatever\",\"costUsd\":0.42}";
        SuggestionRecord rec = om.readValue(json, SuggestionRecord.class);
        assertThat(rec.getSituationId(), equalTo("x"));
        assertThat(rec.getStatus(), equalTo("ready"));
        assertTrue(rec.getRootCauses().isEmpty());
    }

}
