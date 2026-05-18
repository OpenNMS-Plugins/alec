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

    private final List<SituationHandler> delegates;

    public CompositeSituationHandler(List<SituationHandler> delegates) {
        this.delegates = delegates == null ? Collections.emptyList() : delegates;
    }

    @Override
    public void onSituation(Situation situation) {
        for (SituationHandler h : new ArrayList<>(delegates)) {
            try {
                h.onSituation(situation);
            } catch (Exception e) {
                LOG.error("Error occurred on situation handler {}: {}", h, e.getMessage(), e);
            }
        }
    }

    @Override
    public void onSituationDeleted(String situationId) {
        for (SituationHandler h : new ArrayList<>(delegates)) {
            try {
                h.onSituationDeleted(situationId);
            } catch (Exception e) {
                LOG.error("Error occurred on situation handler {}: {}", h, e.getMessage(), e);
            }
        }
    }
}
