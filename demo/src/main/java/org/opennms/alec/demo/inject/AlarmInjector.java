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

package org.opennms.alec.demo.inject;

import static org.awaitility.Awaitility.await;

import java.time.Duration;
import java.util.Set;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.client.model.Event;
import org.opennms.alec.demo.state.DemoState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AlarmInjector {

    private static final Logger LOG = LoggerFactory.getLogger(AlarmInjector.class);

    private final OpenNMSClient client;
    private final DemoState state;

    public AlarmInjector(OpenNMSClient client, DemoState state) {
        this.client = client;
        this.state = state;
    }

    public void injectNodeDown(int nodeId) {
        LOG.info("Injecting nodeDown on node {}", nodeId);
        client.sendEvent(Event.nodeDown(nodeId));
    }

    public void injectInterfaceDown(int nodeId, String ipAddress) {
        LOG.info("Injecting interfaceDown on node {} ip {}", nodeId, ipAddress);
        client.sendEvent(Event.interfaceDown(nodeId, ipAddress));
    }

    public void injectGenericAlarms(int nodeId, int count) {
        LOG.info("Injecting {} generic alarms on node {}", count, nodeId);
        for (int i = 0; i < count; i++) {
            client.sendEvent(Event.genericAlarm(nodeId));
        }
    }

    public void injectLinkDown(int nodeIdA, String ipA, int nodeIdB, String ipB) {
        LOG.info("Injecting link failure: node{}({}) <-> node{}({})", nodeIdA, ipA, nodeIdB, ipB);
        client.sendEvent(Event.interfaceDown(nodeIdA, ipA));
        client.sendEvent(Event.interfaceDown(nodeIdB, ipB));
    }

    /**
     * Waits for at least {@code expectedCount} alarms whose {@code nodeId} matches
     * one of the nodes recorded in the demo state. Other alarms in the system
     * (operational, from prior runs, etc.) are not counted; this prevents the
     * wait from completing immediately on a non-empty OpenNMS instance.
     */
    public void waitForAlarms(int expectedCount, Duration timeout) {
        Set<Integer> demoNodeIds = state.getNodes().stream()
                .map(DemoState.NodeRecord::getNodeId)
                .collect(Collectors.toSet());
        LOG.info("Waiting for at least {} alarms on demo nodes {} (timeout: {}s)...",
                expectedCount, demoNodeIds, timeout.getSeconds());
        await().atMost(timeout.toMillis(), TimeUnit.MILLISECONDS)
                .pollInterval(3, TimeUnit.SECONDS)
                .until(() -> countAlarmsOnDemoNodes(demoNodeIds) >= expectedCount);
        LOG.info("Found {} alarms on demo nodes", countAlarmsOnDemoNodes(demoNodeIds));
    }

    private long countAlarmsOnDemoNodes(Set<Integer> demoNodeIds) {
        return client.getAlarms().stream()
                .filter(a -> a.getNodeId() != null && demoNodeIds.contains(a.getNodeId()))
                .count();
    }

    public void injectLinearChainFailure() {
        LOG.info("Injecting alarms for linear chain scenario");
        if (state.getNodes().size() < 2) {
            throw new IllegalStateException("Linear chain requires at least 2 nodes");
        }
        // Inject generic alarms on the first two nodes to trigger correlation
        DemoState.NodeRecord nodeA = state.getNodes().get(0);
        DemoState.NodeRecord nodeB = state.getNodes().get(1);
        injectGenericAlarms(nodeA.getNodeId(), 3);
        injectGenericAlarms(nodeB.getNodeId(), 3);
    }

    public void injectStarFailure() {
        LOG.info("Injecting alarms for star scenario (hub failure)");
        if (state.getNodes().isEmpty()) {
            throw new IllegalStateException("Star topology requires at least 1 node");
        }
        // Hub is the first node — inject alarms on hub and all spokes
        for (DemoState.NodeRecord node : state.getNodes()) {
            injectGenericAlarms(node.getNodeId(), 3);
        }
    }

    public void injectSingleRouterFailure() {
        LOG.info("Injecting alarms for single router scenario");
        if (state.getNodes().isEmpty()) {
            throw new IllegalStateException("Requires at least 1 node");
        }
        DemoState.NodeRecord node = state.getNodes().get(0);
        injectGenericAlarms(node.getNodeId(), 3);
    }

    /**
     * A realistic correlated outage suitable for exercising the Claude
     * suggestion path (ALEC-299). Simulates the timeline of a real incident:
     * <ol>
     *   <li>An optical receive-power degradation on an edge router's uplink</li>
     *   <li>The uplink interface starts flapping</li>
     *   <li>The BGP session over that interface transitions to Idle</li>
     *   <li>Traffic shifts to the secondary uplink, which now saturates</li>
     *   <li>The downstream node sees its own uplink flap as the topology re-converges</li>
     * </ol>
     * Five alarms across two nodes, all in a short window — enough alarms for
     * DBSCAN to cluster, enough context for an LLM to reason about cause.
     *
     * Uses OpenNMS Horizon's built-in event UEIs (lowThresholdExceeded,
     * highThresholdExceeded, nodeLostService, interfaceDown) so the demo
     * works out of the box — no need to install alec-demo.events.xml.
     * Their stock description templates substitute the parameters we attach
     * (interface label, datasource, value, threshold, service), giving the
     * LLM enough context to reason about cause without custom event defs.
     *
     * Requires the demo topology to have at least 2 nodes.
     */
    public void injectRealisticOutage() {
        LOG.info("Injecting realistic correlated outage scenario");
        if (state.getNodes().size() < 2) {
            throw new IllegalStateException("Realistic outage requires at least 2 nodes");
        }
        DemoState.NodeRecord edge = state.getNodes().get(0);
        DemoState.NodeRecord downstream = state.getNodes().get(1);

        // 1. Optical degrade: rx-power below threshold on the edge uplink
        client.sendEvent(Event.lowThresholdExceeded(
                edge.getNodeId(), "TenGigE0/0/0/1", "rxPowerDbm", -19.5, -18.0));
        // 2. Interface starts flapping — sent as a stock interfaceDown
        client.sendEvent(Event.interfaceDown(edge.getNodeId(), "10.0.0.1"));
        // 3. BGP service drops as the peering session goes down
        client.sendEvent(Event.lostService(edge.getNodeId(), "BGP"));
        // 4. Backup uplink saturates as traffic shifts
        client.sendEvent(Event.highThresholdExceeded(
                edge.getNodeId(), "TenGigE0/0/0/2", "ifInOctets", 94.0, 80.0));
        // 5. Downstream node sees its own interface flap as the path re-converges
        client.sendEvent(Event.interfaceDown(downstream.getNodeId(), "10.0.0.2"));
    }
}
