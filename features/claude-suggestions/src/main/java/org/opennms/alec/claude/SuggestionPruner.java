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
 * Scheduled task that drops suggestion records older than {@link #RETENTION_DAYS}
 * days. Runs once per day on a single-threaded scheduler.
 *
 * Lifecycle: blueprint calls {@link #start()} on bundle start and
 * {@link #stop()} on bundle stop.
 */
public class SuggestionPruner {

    static final int RETENTION_DAYS = 90;
    static final long PRUNE_INTERVAL_MILLIS = TimeUnit.HOURS.toMillis(24);
    // Run the first sweep on a short delay rather than immediately at startup,
    // so the bundle finishes wiring before we start hitting the KV store.
    static final long INITIAL_DELAY_MILLIS = TimeUnit.MINUTES.toMillis(5);

    private static final Logger LOG = LoggerFactory.getLogger(SuggestionPruner.class);

    private final SuggestionStore store;
    private final ScheduledExecutorService scheduler;
    private final boolean ownsScheduler;

    public SuggestionPruner(SuggestionStore store) {
        this(store, buildDefaultScheduler(), true);
    }

    // Visible for testing.
    SuggestionPruner(SuggestionStore store, ScheduledExecutorService scheduler, boolean ownsScheduler) {
        this.store = Objects.requireNonNull(store);
        this.scheduler = Objects.requireNonNull(scheduler);
        this.ownsScheduler = ownsScheduler;
    }

    /** Blueprint init-method. */
    public void start() {
        scheduler.scheduleAtFixedRate(this::runOnce,
                INITIAL_DELAY_MILLIS, PRUNE_INTERVAL_MILLIS, TimeUnit.MILLISECONDS);
    }

    /** Visible for testing — also exposed so an operator could trigger a manual sweep later. */
    int runOnce() {
        long cutoff = System.currentTimeMillis() - TimeUnit.DAYS.toMillis(RETENTION_DAYS);
        try {
            int deleted = store.pruneOlderThan(cutoff);
            if (deleted > 0) {
                LOG.info("Pruned {} Claude suggestion records older than {} days", deleted, RETENTION_DAYS);
            }
            return deleted;
        } catch (Exception e) {
            // Never let an exception kill the scheduler — log and let the next tick try again.
            LOG.error("Suggestion prune sweep failed: {}", e.getMessage(), e);
            return 0;
        }
    }

    /** Blueprint destroy-method. */
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
                Thread t = new Thread(r, "claude-suggestions-pruner-" + counter.incrementAndGet());
                t.setDaemon(true);
                return t;
            }
        };
        return Executors.newSingleThreadScheduledExecutor(tf);
    }
}
