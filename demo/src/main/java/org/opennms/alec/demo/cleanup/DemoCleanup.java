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

package org.opennms.alec.demo.cleanup;

import java.nio.file.Path;

import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.state.DemoState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DemoCleanup {

    private static final Logger LOG = LoggerFactory.getLogger(DemoCleanup.class);

    private final OpenNMSClient client;
    private final DemoState state;
    private final Path stateFile;

    public DemoCleanup(OpenNMSClient client, DemoState state, Path stateFile) {
        this.client = client;
        this.state = state;
        this.stateFile = stateFile;
    }

    public void cleanup() {
        LOG.info("Starting cleanup for scenario '{}' (foreignSource='{}')",
                state.getScenario(), state.getForeignSource());

        // 1. Delete all UDLs (remove topology links first)
        for (int udlId : state.getUdlIds()) {
            try {
                client.deleteUDL(udlId);
            } catch (Exception e) {
                LOG.warn("Failed to delete UDL {}: {}", udlId, e.getMessage());
            }
        }

        // 2. Delete all nodes from requisition
        for (DemoState.NodeRecord node : state.getNodes()) {
            try {
                client.deleteNodeFromRequisition(state.getForeignSource(), node.getForeignId());
            } catch (Exception e) {
                LOG.warn("Failed to delete node {} from requisition: {}", node.getForeignId(), e.getMessage());
            }
        }

        // 3. Import requisition (to sync deletions — removes nodes from OpenNMS)
        try {
            client.importRequisition(state.getForeignSource());
        } catch (Exception e) {
            LOG.warn("Failed to import requisition after node deletion: {}", e.getMessage());
        }

        // 4. Delete the requisition and foreign source definition
        try {
            client.deleteRequisition(state.getForeignSource());
        } catch (Exception e) {
            LOG.warn("Failed to delete requisition: {}", e.getMessage());
        }
        try {
            client.deleteForeignSourceDefinition(state.getForeignSource());
        } catch (Exception e) {
            LOG.warn("Failed to delete foreign source definition: {}", e.getMessage());
        }

        // 5. Delete deployed nodes from database
        for (DemoState.NodeRecord node : state.getNodes()) {
            try {
                client.deleteNode(node.getNodeId());
            } catch (Exception e) {
                LOG.debug("Could not delete node {} from database (may already be removed): {}",
                        node.getNodeId(), e.getMessage());
            }
        }

        // 6. Clear all alarms AFTER nodes are gone (prevents ALEC from re-correlating)
        try {
            client.clearAndAckAllAlarms();
        } catch (Exception e) {
            LOG.warn("Failed to clear alarms: {}", e.getMessage());
        }

        // 7. Remove state file
        try {
            state.delete(stateFile);
            LOG.info("Removed state file: {}", stateFile);
        } catch (Exception e) {
            LOG.warn("Failed to remove state file: {}", e.getMessage());
        }

        LOG.info("Cleanup complete.");
    }
}
