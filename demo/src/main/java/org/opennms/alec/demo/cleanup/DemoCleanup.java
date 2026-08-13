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
import java.util.Set;
import java.util.stream.Collectors;

import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.client.model.Alarm;
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

    /**
     * Best-effort cleanup of demo-created resources. Returns true iff every
     * step succeeded and the state file is safe to delete; returns false if
     * any step failed (in which case the state file is intentionally kept so
     * the caller can retry targeted cleanup or escalate to a brute-force
     * pass).
     */
    public boolean cleanup() {
        LOG.info("Starting cleanup for scenario '{}' (foreignSource='{}')",
                state.getScenario(), state.getForeignSource());

        boolean allOk = true;

        // 1. Delete all UDLs (remove topology links first)
        for (int udlId : state.getUdlIds()) {
            try {
                client.deleteUDL(udlId);
            } catch (Exception e) {
                LOG.warn("Failed to delete UDL {}: {}", udlId, e.getMessage());
                allOk = false;
            }
        }

        // 2. Delete all nodes from requisition
        for (DemoState.NodeRecord node : state.getNodes()) {
            try {
                client.deleteNodeFromRequisition(state.getForeignSource(), node.getForeignId());
            } catch (Exception e) {
                LOG.warn("Failed to delete node {} from requisition: {}", node.getForeignId(), e.getMessage());
                allOk = false;
            }
        }

        // 3. Import requisition (to sync deletions — removes nodes from OpenNMS)
        try {
            client.importRequisition(state.getForeignSource());
        } catch (Exception e) {
            LOG.warn("Failed to import requisition after node deletion: {}", e.getMessage());
            allOk = false;
        }

        // 4. Delete the requisition and foreign source definition
        try {
            client.deleteRequisition(state.getForeignSource());
        } catch (Exception e) {
            LOG.warn("Failed to delete requisition: {}", e.getMessage());
            allOk = false;
        }
        try {
            client.deleteForeignSourceDefinition(state.getForeignSource());
        } catch (Exception e) {
            LOG.warn("Failed to delete foreign source definition: {}", e.getMessage());
            allOk = false;
        }

        // 5. Delete deployed nodes from database
        for (DemoState.NodeRecord node : state.getNodes()) {
            try {
                client.deleteNode(node.getNodeId());
            } catch (Exception e) {
                LOG.debug("Could not delete node {} from database (may already be removed): {}",
                        node.getNodeId(), e.getMessage());
                // Not fatal — the node may already have been removed by the requisition import.
            }
        }

        // 6. Clear alarms only for the demo's nodes — never touch alarms on
        //    unrelated OpenNMS nodes that may belong to actual operational use.
        Set<Integer> demoNodeIds = state.getNodes().stream()
                .map(DemoState.NodeRecord::getNodeId)
                .collect(Collectors.toSet());
        int alarmsCleared = 0;
        int alarmFailures = 0;
        for (Alarm alarm : client.getAlarms()) {
            if (alarm.getNodeId() == null || !demoNodeIds.contains(alarm.getNodeId())) {
                continue;
            }
            try {
                client.clearAlarm(alarm.getId());
                client.acknowledgeAlarm(alarm.getId());
                alarmsCleared++;
            } catch (Exception e) {
                LOG.warn("Failed to clear/ack demo alarm {} on node {}: {}",
                        alarm.getId(), alarm.getNodeId(), e.getMessage());
                alarmFailures++;
            }
        }
        LOG.info("Cleared {} demo alarm(s) ({} failure(s))", alarmsCleared, alarmFailures);
        if (alarmFailures > 0) {
            allOk = false;
        }

        // 7. Remove state file ONLY if everything above succeeded. If anything
        //    failed, leave the state file in place so the caller can retry
        //    targeted cleanup; otherwise demo resources can be stranded.
        if (allOk) {
            try {
                state.delete(stateFile);
                LOG.info("Removed state file: {}", stateFile);
            } catch (Exception e) {
                LOG.warn("Failed to remove state file: {}", e.getMessage());
                allOk = false;
            }
        } else {
            LOG.warn("Skipping state file deletion because earlier cleanup steps had failures; "
                    + "state file kept at {} so cleanup can be retried.", stateFile);
        }

        LOG.info("Cleanup complete (success={}).", allOk);
        return allOk;
    }
}
