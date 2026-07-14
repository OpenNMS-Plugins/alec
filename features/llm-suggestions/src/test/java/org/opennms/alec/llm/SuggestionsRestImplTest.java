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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationDatasource;

import com.fasterxml.jackson.databind.ObjectMapper;

public class SuggestionsRestImplTest {

    /**
     * The UI's TSituation.id is the numeric long row id, so the REST path
     * param is a number. The handler stores under getId() (a stable UUID).
     * The REST layer must resolve longId -> Situation -> getId() before
     * looking up the KV record. These constants pin the mapping the tests
     * mock so failures surface clearly.
     */
    private static final int LONG_ID_1 = 1;
    private static final String UUID_1 = "uei.opennms.org/alarms/situation:test-uuid-1";
    private static final int LONG_ID_7 = 7;
    private static final String UUID_7 = "uei.opennms.org/alarms/situation:test-uuid-7";

    private InMemoryKVStore kv;
    private SuggestionStore store;
    private SituationDatasource datasource;
    private LlmSituationHandler handler;
    private LlmConfigReader configReader;
    private SuggestionsRestImpl rest;

    @Before
    public void setUp() throws Exception {
        kv = new InMemoryKVStore();
        store = new SuggestionStore(kv, new ObjectMapper());
        datasource = mock(SituationDatasource.class);
        handler = mock(LlmSituationHandler.class);
        configReader = new LlmConfigReader(kv, new ObjectMapper());
        rest = new SuggestionsRestImpl(store, datasource, handler, configReader);

        // Default situation mappings: longId 1 <-> uuid 1, longId 7 <-> uuid 7.
        // Individual tests can override via when(datasource.getSituation(...)).
        Situation s1 = mock(Situation.class);
        when(s1.getId()).thenReturn(UUID_1);
        when(datasource.getSituation(LONG_ID_1)).thenReturn(Optional.of(s1));
        Situation s7 = mock(Situation.class);
        when(s7.getId()).thenReturn(UUID_7);
        when(datasource.getSituation(LONG_ID_7)).thenReturn(Optional.of(s7));
    }

    private void writeEnabledConfig() {
        kv.put(LlmConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-ant-key\"}",
                LlmConfigReader.CONFIG_CONTEXT);
    }

    // --- GET /suggestions/{id} ---

    @Test
    public void getReturnsBadRequestOnNullSituationId() {
        Response r = rest.getSuggestion(null);
        assertThat(r.getStatus(), equalTo(400));
    }

    @Test
    public void getReturnsBadRequestOnEmptySituationId() {
        Response r = rest.getSuggestion("");
        assertThat(r.getStatus(), equalTo(400));
    }

    @Test
    public void getReturnsNoContentWhenLongIdResolvesButNoRecord() {
        // Situation exists in the datasource (longId -> uuid mapping works) but
        // the handler hasn't fired yet — UI keeps polling.
        Response r = rest.getSuggestion(String.valueOf(LONG_ID_1));
        assertThat(r.getStatus(), equalTo(204));
    }

    @Test
    public void getReturnsNoContentWhenLongIdDoesNotResolveToSituation() throws Exception {
        // Unknown long id: datasource returns empty. Treat the same as
        // "no record yet" — the UI polls; surfacing a 404 would only
        // produce spurious browser console noise.
        when(datasource.getSituation(999)).thenReturn(Optional.empty());
        Response r = rest.getSuggestion("999");
        assertThat(r.getStatus(), equalTo(204));
    }

    @Test
    public void getResolvesLongIdToUuidAndReturnsRecord() {
        store.putReady(UUID_1, 100L, 200L, "anthropic/claude-sonnet-4.6",
                Arrays.asList("c1", "c2"), Arrays.asList("r1"));

        Response r = rest.getSuggestion(String.valueOf(LONG_ID_1));
        assertThat(r.getStatus(), equalTo(200));
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat(body.getStatus(), equalTo(SuggestionRecord.STATUS_READY));
        assertThat(body.getRootCauses().size(), equalTo(2));
        assertThat(body.getResolutions().size(), equalTo(1));
    }

    @Test
    public void getReturnsPendingRecordWithStatusPending() {
        store.putPending(UUID_7, 100L, "anthropic/claude-sonnet-4.6");
        Response r = rest.getSuggestion(String.valueOf(LONG_ID_7));
        assertThat(r.getStatus(), equalTo(200));
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat("pending records are still surfaced — UI shows a spinner",
                body.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(body.getCompletedAt() == null, is(true));
    }

    @Test
    public void getAcceptsUuidLikePathParamAsFallback() {
        // Belt-and-suspenders: if the UI ever sends the UUID directly instead
        // of the numeric long id, the endpoint should still find the record.
        store.putReady(UUID_1, 100L, 200L, "anthropic/claude-sonnet-4.6",
                Arrays.asList("c"), Arrays.asList("r"));
        Response r = rest.getSuggestion(UUID_1);
        assertThat(r.getStatus(), equalTo(200));
    }

    // --- POST /suggestions/{id}/reanalyze ---

    @Test
    public void reanalyzeReturnsBadRequestWhenIntegrationIsDisabled() throws Exception {
        Response r = rest.reanalyze(String.valueOf(LONG_ID_1));
        assertThat(r.getStatus(), equalTo(400));
        verify(handler, never()).forceReanalyze(any());
    }

    @Test
    public void reanalyzeReturnsBadRequestForNonNumericId() throws Exception {
        writeEnabledConfig();
        Response r = rest.reanalyze("not-a-number");
        assertThat(r.getStatus(), equalTo(400));
        verify(handler, never()).forceReanalyze(any());
    }

    @Test
    public void reanalyzeReturns404WhenSituationDoesNotExist() throws Exception {
        writeEnabledConfig();
        when(datasource.getSituation(99)).thenReturn(Optional.empty());

        Response r = rest.reanalyze("99");
        assertThat(r.getStatus(), equalTo(404));
        verify(handler, never()).forceReanalyze(any());
    }

    @Test
    public void reanalyzeForcesHandlerAndReturns202WithPendingBody() throws Exception {
        writeEnabledConfig();
        // Simulate handler.forceReanalyze writing the pending record under
        // the situation's UUID — that's what the real handler does via keyFor.
        org.mockito.Mockito.doAnswer(inv -> {
            store.putPending(UUID_7, 1L, "anthropic/claude-sonnet-4.6");
            return null;
        }).when(handler).forceReanalyze(any());

        Response r = rest.reanalyze(String.valueOf(LONG_ID_7));
        assertThat(r.getStatus(), equalTo(202));
        verify(handler).forceReanalyze(any());
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat(body.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
    }
}
