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
import static org.junit.Assert.assertThat;

import javax.ws.rs.core.Response;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class UsageRestImplTest {

    private UsageStore store;
    private UsageRestImpl rest;

    @Before
    public void setUp() {
        InMemoryKVStore kv = new InMemoryKVStore();
        store = new UsageStore(kv, new ObjectMapper());
        rest = new UsageRestImpl(store);
    }

    @Test
    public void returns200WithEmptyReportWhenNoUsageRecorded() {
        Response r = rest.getUsage(30);
        assertThat(r.getStatus(), equalTo(200));
        UsageReport report = (UsageReport) r.getEntity();
        assertThat(report.getDaysWindow(), equalTo(30));
        assertThat(report.getCalls(), equalTo(0L));
    }

    @Test
    public void returns200WithAggregatedRollupWhenUsageExists() {
        long now = System.currentTimeMillis();
        store.record(UsageRecord.newBuilder()
                .ts(now).success(true)
                .inputTokens(100).outputTokens(50).build());
        store.record(UsageRecord.newBuilder()
                .ts(now).success(false).build());

        Response r = rest.getUsage(30);
        UsageReport report = (UsageReport) r.getEntity();
        assertThat(report.getCalls(), equalTo(2L));
        assertThat(report.getSuccessfulCalls(), equalTo(1L));
        assertThat(report.getFailedCalls(), equalTo(1L));
        assertThat(report.getInputTokens(), equalTo(100L));
    }

    @Test
    public void clampHandlesEdgeCases() {
        // Server-side guardrail: a UI sending days=0 or a negative shouldn't blow up,
        // and asking for more than the retention horizon truncates to it.
        assertThat(UsageRestImpl.clamp(0), equalTo(UsageRestImpl.MIN_DAYS));
        assertThat(UsageRestImpl.clamp(-5), equalTo(UsageRestImpl.MIN_DAYS));
        assertThat(UsageRestImpl.clamp(30), equalTo(30));
        assertThat(UsageRestImpl.clamp(UsagePruner.RETENTION_DAYS), equalTo(UsagePruner.RETENTION_DAYS));
        assertThat(UsageRestImpl.clamp(UsagePruner.RETENTION_DAYS + 100),
                equalTo(UsagePruner.RETENTION_DAYS));
    }

    @Test
    public void getUsageReportsTheRequestedWindowInTheResponse() {
        Response r = rest.getUsage(7);
        UsageReport report = (UsageReport) r.getEntity();
        assertThat("daysWindow echoes the (clamped) request value",
                report.getDaysWindow(), equalTo(7));
    }
}
