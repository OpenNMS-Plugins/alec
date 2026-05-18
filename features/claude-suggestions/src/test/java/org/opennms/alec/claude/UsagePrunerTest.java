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
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.mockito.ArgumentCaptor;

import com.fasterxml.jackson.databind.ObjectMapper;

public class UsagePrunerTest {

    @Test
    public void runOnceCallsStoreWithRetentionCutoff() {
        UsageStore store = mock(UsageStore.class);
        when(store.pruneOlderThan(org.mockito.ArgumentMatchers.anyLong())).thenReturn(0);
        UsagePruner pruner = new UsagePruner(store, mock(ScheduledExecutorService.class), false);

        long before = System.currentTimeMillis();
        pruner.runOnce();
        long after = System.currentTimeMillis();

        ArgumentCaptor<Long> cutoff = ArgumentCaptor.forClass(Long.class);
        verify(store).pruneOlderThan(cutoff.capture());
        long retention = TimeUnit.DAYS.toMillis(UsagePruner.RETENTION_DAYS);
        assertThat("cutoff is roughly now-90d",
                cutoff.getValue() >= before - retention
                        && cutoff.getValue() <= after - retention,
                is(true));
    }

    @Test
    public void runOnceSwallowsExceptions() {
        UsageStore store = mock(UsageStore.class);
        doThrow(new RuntimeException("kv exploded")).when(store)
                .pruneOlderThan(org.mockito.ArgumentMatchers.anyLong());
        UsagePruner pruner = new UsagePruner(store, mock(ScheduledExecutorService.class), false);
        assertThat(pruner.runOnce(), equalTo(0));
    }

    @Test
    public void startSchedulesAtFixedRate() {
        UsageStore store = mock(UsageStore.class);
        ScheduledExecutorService sched = mock(ScheduledExecutorService.class);
        UsagePruner pruner = new UsagePruner(store, sched, false);

        pruner.start();

        verify(sched).scheduleAtFixedRate(
                org.mockito.ArgumentMatchers.any(Runnable.class),
                org.mockito.ArgumentMatchers.eq(UsagePruner.INITIAL_DELAY_MILLIS),
                org.mockito.ArgumentMatchers.eq(UsagePruner.PRUNE_INTERVAL_MILLIS),
                org.mockito.ArgumentMatchers.eq(TimeUnit.MILLISECONDS));
    }

    @Test
    public void endToEndPruneAgainstRealStore() {
        InMemoryKVStore kv = new InMemoryKVStore();
        UsageStore store = new UsageStore(kv, new ObjectMapper());
        long now = System.currentTimeMillis();
        long old = now - TimeUnit.DAYS.toMillis(UsagePruner.RETENTION_DAYS + 10);
        long fresh = now - TimeUnit.HOURS.toMillis(1);

        store.record(UsageRecord.newBuilder().ts(old).success(true).build());
        store.record(UsageRecord.newBuilder().ts(fresh).success(true).build());

        UsagePruner pruner = new UsagePruner(store, mock(ScheduledExecutorService.class), false);
        assertThat(pruner.runOnce(), equalTo(1));
        // Aggregate the maximum window so we'd see the old row if it were still there.
        assertThat(store.aggregate(UsagePruner.RETENTION_DAYS).getCalls(), equalTo(1L));
    }
}
