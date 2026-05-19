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

package org.opennms.alec.datasource.common;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Fan-out SituationHandler that forwards each callback to a list of delegates.
 *
 * The engine ({@code AbstractClusterEngine#registerSituationHandler}) only
 * holds a single handler slot, so we layer this composite on top to let
 * multiple bundles subscribe to new/updated/deleted situations without
 * displacing each other.
 *
 * Per-delegate exceptions are logged but do not stop the remaining delegates
 * — same isolation semantics as {@link HandlerRegistry}, so a misbehaving
 * subscriber can't block the core situation-processing path.
 *
 * The delegate list reference is held live (not snapshotted at construction)
 * so an OSGi-managed reference-list can be passed in directly and have its
 * additions/removals picked up on the next callback. Each callback snapshots
 * the list locally to avoid {@link java.util.ConcurrentModificationException}
 * during iteration.
 */
public class CompositeSituationHandler implements SituationHandler {
    private static final Logger LOG = LoggerFactory.getLogger(CompositeSituationHandler.class);

    /**
     * Always invoked first (pre-existing engine processing path); not part of
     * the dynamic OSGi reference-list. Null is allowed for the legacy
     * single-arg constructor used by tests.
     */
    private final SituationHandler primary;

    /**
     * Held by REFERENCE — typically an OSGi reference-list. Handlers that
     * register AFTER this composite is constructed must still be invoked on
     * the next callback, which is why we don't copy at construction time.
     * The per-callback snapshot via {@code new ArrayList<>(...)} is the only
     * defensive copy, and it's there to avoid {@link java.util.ConcurrentModificationException}
     * during iteration, not to freeze membership.
     */
    private final List<SituationHandler> dynamicDelegates;

    /**
     * Two-arg form for the Driver case: a known primary handler that should
     * always fire, plus a live list of dynamic delegates injected from OSGi.
     * Use this constructor when membership of {@code dynamicDelegates} can
     * change after construction (e.g. blueprint reference-lists).
     */
    public CompositeSituationHandler(SituationHandler primary, List<SituationHandler> dynamicDelegates) {
        this.primary = primary;
        this.dynamicDelegates = dynamicDelegates == null ? Collections.emptyList() : dynamicDelegates;
    }

    /**
     * Single-list constructor preserved for callers that already pass a fully
     * assembled list. The list is still held by reference so live mutations
     * propagate.
     */
    public CompositeSituationHandler(List<SituationHandler> delegates) {
        this(null, delegates);
    }

    @Override
    public void onSituation(Situation situation) {
        List<SituationHandler> snapshot = new ArrayList<>(dynamicDelegates);
        if (LOG.isDebugEnabled()) {
            LOG.debug("CompositeSituationHandler.onSituation: primary={}, dynamicDelegates.size={}{}",
                    primary != null,
                    snapshot.size(),
                    snapshot.isEmpty() ? "" : " " + snapshot);
        }
        if (primary != null) {
            try {
                primary.onSituation(situation);
            } catch (Exception e) {
                LOG.error("Error occurred on primary situation handler {}: {}", primary, e.getMessage(), e);
            }
        }
        for (SituationHandler h : snapshot) {
            try {
                h.onSituation(situation);
            } catch (Exception e) {
                LOG.error("Error occurred on situation handler {}: {}", h, e.getMessage(), e);
            }
        }
    }

    @Override
    public void onSituationDeleted(String situationId) {
        if (primary != null) {
            try {
                primary.onSituationDeleted(situationId);
            } catch (Exception e) {
                LOG.error("Error occurred on primary situation handler {}: {}", primary, e.getMessage(), e);
            }
        }
        for (SituationHandler h : new ArrayList<>(dynamicDelegates)) {
            try {
                h.onSituationDeleted(situationId);
            } catch (Exception e) {
                LOG.error("Error occurred on situation handler {}: {}", h, e.getMessage(), e);
            }
        }
    }
}
