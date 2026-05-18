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

    private InMemoryKVStore kv;
    private SuggestionStore store;
    private SituationDatasource datasource;
    private ClaudeSituationHandler handler;
    private ClaudeConfigReader configReader;
    private SuggestionsRestImpl rest;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        store = new SuggestionStore(kv, new ObjectMapper());
        datasource = mock(SituationDatasource.class);
        handler = mock(ClaudeSituationHandler.class);
        configReader = new ClaudeConfigReader(kv, new ObjectMapper());
        rest = new SuggestionsRestImpl(store, datasource, handler, configReader);
    }

    private void writeEnabledConfig() {
        kv.put(ClaudeConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-ant-key\"}",
                ClaudeConfigReader.CONFIG_CONTEXT);
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
    public void getReturnsNoContentWhenNoRecordExistsYet() {
        Response r = rest.getSuggestion("42");
        // 204 (not 404) so the UI can poll without flooding error logs while
        // the feature is disabled or the Claude call is still pending.
        assertThat(r.getStatus(), equalTo(204));
    }

    @Test
    public void getReturnsRecordBodyWhenPresent() {
        store.putReady("1", 100L, 200L, "claude-sonnet-4-6",
                Arrays.asList("c1", "c2"), Arrays.asList("r1"));
        Response r = rest.getSuggestion("1");
        assertThat(r.getStatus(), equalTo(200));
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat(body.getStatus(), equalTo(SuggestionRecord.STATUS_READY));
        assertThat(body.getRootCauses().size(), equalTo(2));
        assertThat(body.getResolutions().size(), equalTo(1));
    }

    @Test
    public void getReturnsPendingRecordWithStatusPending() {
        store.putPending("2", 100L, "claude-sonnet-4-6");
        Response r = rest.getSuggestion("2");
        assertThat(r.getStatus(), equalTo(200));
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat("pending records are still surfaced — UI shows a spinner",
                body.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(body.getCompletedAt() == null, is(true));
    }

    // --- POST /suggestions/{id}/reanalyze ---

    @Test
    public void reanalyzeReturnsBadRequestWhenIntegrationIsDisabled() throws Exception {
        // No config persisted = disabled. Don't make the user wait for a
        // spinner that'll never resolve — fail fast.
        Response r = rest.reanalyze("1");
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
        Situation s = mock(Situation.class);
        when(s.getLongId()).thenReturn(7L);
        when(datasource.getSituation(7)).thenReturn(Optional.of(s));
        // Simulate the handler's synchronous pending write — that's what the
        // 202 body should reflect, so the UI immediately knows we're working.
        org.mockito.Mockito.doAnswer(inv -> {
            store.putPending("7", 1L, "claude-sonnet-4-6");
            return null;
        }).when(handler).forceReanalyze(s);

        Response r = rest.reanalyze("7");
        assertThat(r.getStatus(), equalTo(202));
        verify(handler).forceReanalyze(s);
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat(body.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
    }
}
