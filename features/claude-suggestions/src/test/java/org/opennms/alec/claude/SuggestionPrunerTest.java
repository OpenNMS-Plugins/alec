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
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.mockito.ArgumentCaptor;

import com.fasterxml.jackson.databind.ObjectMapper;

public class SuggestionPrunerTest {

    @Test
    public void runOnceCallsStoreWithRetentionCutoff() {
        SuggestionStore store = mock(SuggestionStore.class);
        when(store.pruneOlderThan(org.mockito.ArgumentMatchers.anyLong())).thenReturn(0);
        SuggestionPruner pruner = new SuggestionPruner(store, mock(ScheduledExecutorService.class), false);

        long before = System.currentTimeMillis();
        pruner.runOnce();
        long after = System.currentTimeMillis();

        ArgumentCaptor<Long> cutoff = ArgumentCaptor.forClass(Long.class);
        verify(store).pruneOlderThan(cutoff.capture());
        long expectedCutoff = TimeUnit.DAYS.toMillis(SuggestionPruner.RETENTION_DAYS);
        assertThat("cutoff is roughly now-90d",
                cutoff.getValue() >= before - expectedCutoff
                        && cutoff.getValue() <= after - expectedCutoff,
                is(true));
    }

    @Test
    public void runOnceSwallowsExceptionsSoSchedulerKeepsRunning() {
        SuggestionStore store = mock(SuggestionStore.class);
        doThrow(new RuntimeException("kv exploded")).when(store)
                .pruneOlderThan(org.mockito.ArgumentMatchers.anyLong());
        SuggestionPruner pruner = new SuggestionPruner(store, mock(ScheduledExecutorService.class), false);

        // Must not throw — the daily scheduler depends on the runnable returning normally.
        int deleted = pruner.runOnce();
        assertThat(deleted, equalTo(0));
    }

    @Test
    public void runOnceDeletesRealOldRecordsViaRealStore() {
        // End-to-end check against the in-memory KV: write old + recent records
        // and confirm the pruner removes only the old ones.
        InMemoryKVStore kv = new InMemoryKVStore();
        ObjectMapper om = new ObjectMapper();
        SuggestionStore store = new SuggestionStore(kv, om);

        long now = System.currentTimeMillis();
        long old = now - TimeUnit.DAYS.toMillis(SuggestionPruner.RETENTION_DAYS + 5);
        long fresh = now - TimeUnit.DAYS.toMillis(1);

        store.putReady("old", old, old + 1, "m",
                Arrays.asList("c"), Arrays.asList("r"));
        store.putReady("fresh", fresh, fresh + 1, "m",
                Arrays.asList("c"), Arrays.asList("r"));

        SuggestionPruner pruner = new SuggestionPruner(store, mock(ScheduledExecutorService.class), false);
        int deleted = pruner.runOnce();

        assertThat(deleted, equalTo(1));
        assertThat(store.get("old").isPresent(), is(false));
        assertThat(store.get("fresh").isPresent(), is(true));
    }

    @Test
    public void startSchedulesAtFixedRate() {
        SuggestionStore store = mock(SuggestionStore.class);
        ScheduledExecutorService sched = mock(ScheduledExecutorService.class);
        SuggestionPruner pruner = new SuggestionPruner(store, sched, false);

        pruner.start();

        verify(sched).scheduleAtFixedRate(
                org.mockito.ArgumentMatchers.any(Runnable.class),
                org.mockito.ArgumentMatchers.eq(SuggestionPruner.INITIAL_DELAY_MILLIS),
                org.mockito.ArgumentMatchers.eq(SuggestionPruner.PRUNE_INTERVAL_MILLIS),
                org.mockito.ArgumentMatchers.eq(TimeUnit.MILLISECONDS));
    }

    @Test
    public void stopShutsDownOwnedSchedulerOnly() {
        SuggestionStore store = mock(SuggestionStore.class);

        // Case 1: we own the scheduler — stop() should shutdown.
        ScheduledExecutorService ownedSched = Executors.newSingleThreadScheduledExecutor();
        SuggestionPruner ownedPruner = new SuggestionPruner(store, ownedSched, true);
        ownedPruner.stop();
        assertThat(ownedSched.isShutdown(), is(true));

        // Case 2: we don't own it (caller will manage lifecycle) — stop() leaves it alone.
        ScheduledExecutorService externalSched = mock(ScheduledExecutorService.class);
        SuggestionPruner externalPruner = new SuggestionPruner(store, externalSched, false);
        externalPruner.stop();
        verify(externalSched, never()).shutdown();
    }
}
