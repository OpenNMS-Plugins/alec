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
import java.util.concurrent.TimeUnit;

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

    public void waitForAlarms(int expectedCount, Duration timeout) {
        LOG.info("Waiting for at least {} alarms (timeout: {}s)...", expectedCount, timeout.getSeconds());
        await().atMost(timeout.toMillis(), TimeUnit.MILLISECONDS)
                .pollInterval(3, TimeUnit.SECONDS)
                .until(() -> client.getAlarms().size() >= expectedCount);
        LOG.info("Found {} alarms", client.getAlarms().size());
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
}
