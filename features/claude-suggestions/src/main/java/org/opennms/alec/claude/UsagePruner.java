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
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Daily prune of UsageRecord rows older than {@link #RETENTION_DAYS} days.
 *
 * <p>The retention window deliberately exceeds the default 30-day rollup so
 * we have headroom to expose longer views (60/90-day) later without
 * re-architecting. Mirrors {@link SuggestionPruner}'s lifecycle: blueprint
 * init/destroy hooks, single-thread scheduler, exception-swallowing run loop.
 */
public class UsagePruner {

    static final int RETENTION_DAYS = 90;
    static final long PRUNE_INTERVAL_MILLIS = TimeUnit.HOURS.toMillis(24);
    static final long INITIAL_DELAY_MILLIS = TimeUnit.MINUTES.toMillis(5);

    private static final Logger LOG = LoggerFactory.getLogger(UsagePruner.class);

    private final UsageStore store;
    private final ScheduledExecutorService scheduler;
    private final boolean ownsScheduler;

    public UsagePruner(UsageStore store) {
        this(store, buildDefaultScheduler(), true);
    }

    UsagePruner(UsageStore store, ScheduledExecutorService scheduler, boolean ownsScheduler) {
        this.store = Objects.requireNonNull(store);
        this.scheduler = Objects.requireNonNull(scheduler);
        this.ownsScheduler = ownsScheduler;
    }

    public void start() {
        scheduler.scheduleAtFixedRate(this::runOnce,
                INITIAL_DELAY_MILLIS, PRUNE_INTERVAL_MILLIS, TimeUnit.MILLISECONDS);
    }

    int runOnce() {
        long cutoff = System.currentTimeMillis() - TimeUnit.DAYS.toMillis(RETENTION_DAYS);
        try {
            int deleted = store.pruneOlderThan(cutoff);
            if (deleted > 0) {
                LOG.info("Pruned {} Claude usage rows older than {} days", deleted, RETENTION_DAYS);
            }
            return deleted;
        } catch (Exception e) {
            LOG.error("Usage prune sweep failed: {}", e.getMessage(), e);
            return 0;
        }
    }

    public void stop() {
        if (!ownsScheduler) {
            return;
        }
        scheduler.shutdown();
        try {
            if (!scheduler.awaitTermination(5, TimeUnit.SECONDS)) {
                scheduler.shutdownNow();
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            scheduler.shutdownNow();
        }
    }

    private static ScheduledExecutorService buildDefaultScheduler() {
        ThreadFactory tf = new ThreadFactory() {
            private final AtomicInteger counter = new AtomicInteger(0);

            @Override
            public Thread newThread(Runnable r) {
                Thread t = new Thread(r, "claude-usage-pruner-" + counter.incrementAndGet());
                t.setDaemon(true);
                return t;
            }
        };
        return Executors.newSingleThreadScheduledExecutor(tf);
    }
}
