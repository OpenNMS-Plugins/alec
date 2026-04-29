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

package org.opennms.alec.demo.topology;

import java.io.IOException;
import java.nio.file.Path;
import java.time.Duration;

import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.client.model.NodeDef;
import org.opennms.alec.demo.client.model.SnmpInterfaceDef;
import org.opennms.alec.demo.state.DemoState;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RouterTopologyBuilder {

    private static final Logger LOG = LoggerFactory.getLogger(RouterTopologyBuilder.class);
    private static final Duration NODE_WAIT_TIMEOUT = Duration.ofMinutes(2);
    private static final int DEFAULT_INTERFACES = 4;
    private static final String IP_PREFIX = "10.0.";

    private final OpenNMSClient client;
    private final DemoState state;
    private final Path stateFile;
    private int ipCounter = 1;

    public RouterTopologyBuilder(OpenNMSClient client, DemoState state, Path stateFile) {
        this.client = client;
        this.state = state;
        this.stateFile = stateFile;
    }

    /**
     * Phase 1: Provision a node in OpenNMS (add to requisition, import, wait for nodeId).
     * SNMP interfaces are NOT created here — they must be created after the last import.
     */
    public int provisionRouter(String name) {
        String foreignSource = state.getForeignSource();
        String ip = nextIp();

        NodeDef node = new NodeDef(name, name).addIpAddress(ip);
        client.addNodeToRequisition(foreignSource, node);
        client.importRequisition(foreignSource);
        int nodeId = client.waitForNode(foreignSource, name, NODE_WAIT_TIMEOUT);

        state.addNode(name, nodeId, name, ip);
        saveState();
        LOG.info("Provisioned router {} (nodeId={}, ip={})", name, nodeId, ip);
        return nodeId;
    }

    /**
     * Phase 2: Create SNMP interfaces on a node. Must be called AFTER all nodes are
     * provisioned (after the last importRequisition), otherwise re-imports wipe them.
     */
    public void createSnmpInterfaces(String name, int nodeId, int numInterfaces) {
        for (int i = 0; i < numInterfaces; i++) {
            client.createSnmpInterface(nodeId, new SnmpInterfaceDef(i, name + "-if" + i));
        }
        LOG.info("Created {} SNMP interfaces on {} (nodeId={})", numInterfaces, name, nodeId);
    }

    public void createLink(int nodeIdA, int nodeIdZ, String labelA, String labelZ) {
        try {
            client.createUDL(nodeIdA, nodeIdZ, labelA, labelZ);
            int udlId = client.getUDLId(nodeIdA, nodeIdZ);
            if (udlId > 0) {
                state.addUDL(udlId);
                saveState();
            }
            LOG.info("Created link: node{}:{} <-> node{}:{}", nodeIdA, labelA, nodeIdZ, labelZ);
        } catch (Exception e) {
            LOG.warn("Failed to create UDL (node{}:{} <-> node{}:{}): {}",
                    nodeIdA, labelA, nodeIdZ, labelZ, e.getMessage());
            LOG.warn("Continuing without this link — topology will still work for alarm correlation");
        }
    }

    private void initRequisition() {
        String fs = state.getForeignSource();
        client.createForeignSourceDefinition(fs);
        client.createRequisition(fs);
    }

    public void buildLinearChain(String... routerNames) {
        LOG.info("Building linear chain: {}", String.join(" — ", routerNames));
        initRequisition();

        // Phase 1: Provision all nodes
        int[] nodeIds = new int[routerNames.length];
        for (int i = 0; i < routerNames.length; i++) {
            nodeIds[i] = provisionRouter(routerNames[i]);
        }

        // Phase 2: Create SNMP interfaces (safe now — no more imports)
        for (int i = 0; i < routerNames.length; i++) {
            createSnmpInterfaces(routerNames[i], nodeIds[i], DEFAULT_INTERFACES);
        }

        // Phase 3: Create links
        for (int i = 0; i < routerNames.length - 1; i++) {
            createLink(nodeIds[i], nodeIds[i + 1],
                    routerNames[i] + "-if1", routerNames[i + 1] + "-if0");
        }
    }

    public void buildStar(String hub, String... spokes) {
        LOG.info("Building star: hub={}, spokes={}", hub, String.join(", ", spokes));
        initRequisition();

        // Phase 1: Provision all nodes
        int hubInterfaces = Math.max(DEFAULT_INTERFACES, spokes.length);
        int hubNodeId = provisionRouter(hub);
        int[] spokeNodeIds = new int[spokes.length];
        for (int i = 0; i < spokes.length; i++) {
            spokeNodeIds[i] = provisionRouter(spokes[i]);
        }

        // Phase 2: Create SNMP interfaces (safe now — no more imports)
        createSnmpInterfaces(hub, hubNodeId, hubInterfaces);
        for (int i = 0; i < spokes.length; i++) {
            createSnmpInterfaces(spokes[i], spokeNodeIds[i], DEFAULT_INTERFACES);
        }

        // Phase 3: Create links
        for (int i = 0; i < spokes.length; i++) {
            createLink(hubNodeId, spokeNodeIds[i],
                    hub + "-if" + i, spokes[i] + "-if0");
        }
    }

    public void buildSingleRouter(String name) {
        LOG.info("Building single router: {}", name);
        initRequisition();
        int nodeId = provisionRouter(name);
        createSnmpInterfaces(name, nodeId, DEFAULT_INTERFACES);
    }

    private String nextIp() {
        int third = ipCounter / 254;
        int fourth = (ipCounter % 254) + 1;
        ipCounter++;
        return IP_PREFIX + third + "." + fourth;
    }

    private void saveState() {
        try {
            state.save(stateFile);
        } catch (IOException e) {
            LOG.warn("Failed to save state: {}", e.getMessage());
        }
    }
}
