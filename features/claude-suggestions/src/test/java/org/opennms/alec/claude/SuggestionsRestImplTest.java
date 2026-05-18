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

import java.util.Arrays;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class SuggestionsRestImplTest {

    private SuggestionStore store;
    private SuggestionsRestImpl rest;

    @Before
    public void setUp() {
        InMemoryKVStore kv = new InMemoryKVStore();
        store = new SuggestionStore(kv, new ObjectMapper());
        rest = new SuggestionsRestImpl(store);
    }

    @Test
    public void returnsBadRequestOnNullSituationId() {
        Response r = rest.getSuggestion(null);
        assertThat(r.getStatus(), equalTo(400));
    }

    @Test
    public void returnsBadRequestOnEmptySituationId() {
        Response r = rest.getSuggestion("");
        assertThat(r.getStatus(), equalTo(400));
    }

    @Test
    public void returnsNoContentWhenNoRecordExistsYet() {
        Response r = rest.getSuggestion("sit-unknown");
        // 204 (not 404) so the UI can poll without flooding error logs while
        // the feature is disabled or the Claude call is still pending.
        assertThat(r.getStatus(), equalTo(204));
    }

    @Test
    public void returnsRecordBodyWhenPresent() {
        store.putReady("sit-1", 100L, 200L, "claude-sonnet-4-6",
                Arrays.asList("c1", "c2"), Arrays.asList("r1"));
        Response r = rest.getSuggestion("sit-1");
        assertThat(r.getStatus(), equalTo(200));
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat(body.getStatus(), equalTo(SuggestionRecord.STATUS_READY));
        assertThat(body.getRootCauses().size(), equalTo(2));
        assertThat(body.getResolutions().size(), equalTo(1));
    }

    @Test
    public void returnsPendingRecordWithStatusPending() {
        store.putPending("sit-2", 100L, "claude-sonnet-4-6");
        Response r = rest.getSuggestion("sit-2");
        assertThat(r.getStatus(), equalTo(200));
        SuggestionRecord body = (SuggestionRecord) r.getEntity();
        assertThat("pending records are still surfaced — UI shows a spinner",
                body.getStatus(), equalTo(SuggestionRecord.STATUS_PENDING));
        assertThat(body.getCompletedAt() == null, is(true));
    }
}
