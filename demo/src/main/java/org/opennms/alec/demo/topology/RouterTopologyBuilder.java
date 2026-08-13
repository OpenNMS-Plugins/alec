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
        client.createUDL(nodeIdA, nodeIdZ, labelA, labelZ);
        int udlId = lookupUdlIdWithRetry(nodeIdA, nodeIdZ);
        if (udlId <= 0) {
            // The UDL was POSTed (no exception above) but cannot be located via
            // the v2 list call — refuse to silently lose track of it. The
            // caller almost certainly wants to know, because cleanup keys off
            // udlIds in DemoState; without an id the link cannot be deleted.
            throw new RuntimeException("UDL was created but could not be located via v2 API after retries; "
                    + "topology state would be incomplete for cleanup. node" + nodeIdA + ":" + labelA
                    + " <-> node" + nodeIdZ + ":" + labelZ);
        }
        state.addUDL(udlId);
        saveState();
        LOG.info("Created link: node{}:{} <-> node{}:{} (udlId={})", nodeIdA, labelA, nodeIdZ, labelZ, udlId);
    }

    private int lookupUdlIdWithRetry(int nodeIdA, int nodeIdZ) {
        int attempts = 5;
        long backoffMs = 200L;
        Exception lastError = null;
        for (int i = 0; i < attempts; i++) {
            try {
                int id = client.getUDLId(nodeIdA, nodeIdZ);
                if (id > 0) {
                    return id;
                }
            } catch (Exception e) {
                lastError = e;
            }
            try {
                Thread.sleep(backoffMs);
            } catch (InterruptedException ie) {
                Thread.currentThread().interrupt();
                return -1;
            }
            backoffMs *= 2;
        }
        if (lastError != null) {
            LOG.warn("UDL lookup failed after {} attempts: {}", attempts, lastError.getMessage());
        }
        return -1;
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

    /**
     * Two isolated pairs (island A: llm-a1 ↔ llm-a2, island B: llm-b1 ↔ llm-b2)
     * plus one completely isolated router (llm-c1). Designed for the LLM clustering
     * scenario where alarms on island A should form one situation, alarms on island B
     * a second situation, and alarms on llm-c1 remain uncorrelated noise.
     */
    public void buildLlmClustering() {
        LOG.info("Building LLM clustering topology: 2 isolated pairs + 1 isolated node");
        initRequisition();

        String a1 = "llm-a1", a2 = "llm-a2", b1 = "llm-b1", b2 = "llm-b2", c1 = "llm-c1";

        // Phase 1: provision all 5 nodes
        int idA1 = provisionRouter(a1);
        int idA2 = provisionRouter(a2);
        int idB1 = provisionRouter(b1);
        int idB2 = provisionRouter(b2);
        int idC1 = provisionRouter(c1);

        // Phase 2: SNMP interfaces (after all imports)
        createSnmpInterfaces(a1, idA1, DEFAULT_INTERFACES);
        createSnmpInterfaces(a2, idA2, DEFAULT_INTERFACES);
        createSnmpInterfaces(b1, idB1, DEFAULT_INTERFACES);
        createSnmpInterfaces(b2, idB2, DEFAULT_INTERFACES);
        createSnmpInterfaces(c1, idC1, DEFAULT_INTERFACES);

        // Phase 3: links — only within each island; c1 has no links
        createLink(idA1, idA2, a1 + "-if0", a2 + "-if0");
        createLink(idB1, idB2, b1 + "-if0", b2 + "-if0");
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
            // Failing to persist state means cleanup will be unable to
            // identify what we created — the demo could provision nodes/
            // links and never be able to remove them. Fail loudly so the
            // caller can fix the path before more resources are created.
            throw new RuntimeException("Failed to persist demo state to " + stateFile
                    + " — refusing to continue creating resources we cannot record.", e);
        }
    }
}
