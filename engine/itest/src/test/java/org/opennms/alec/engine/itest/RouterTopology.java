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

package org.opennms.alec.engine.itest;

import java.util.ArrayList;
import java.util.List;

import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.InventoryObjectPeerEndpoint;
import org.opennms.alec.datasource.common.ImmutableInventoryObject;
import org.opennms.alec.datasource.common.ImmutableInventoryObjectPeerRef;
import org.opennms.alec.driver.test.MockInventoryType;

/**
 * Builds realistic MIB-II router topologies for testing DBSCAN clustering.
 *
 * Each router is a DEVICE with multiple PORT children (representing SNMP interfaces).
 * Adjacent routers are connected via LINK objects with peer relations between their ports.
 *
 * Edge weights are tuned so that adjacent routers are close enough for DBSCAN to cluster
 * (total path < ~117 for default epsilon=100, alpha=144.47, beta=0.55) while routers
 * separated by 3+ hops are far enough apart to remain in separate situations.
 *
 * With PARENT_WEIGHT=10 and PEER_WEIGHT=20:
 * - Adjacent ports via link: 20+20 = 40 (clusters easily)
 * - 2 hops (R1→R2→R3): ~100 (borderline)
 * - 3+ hops: >140 (won't cluster at same time)
 * - 3+ hops with temporal gap: even larger (definitely separate)
 */
public class RouterTopology {

    private static final int DEFAULT_INTERFACES_PER_ROUTER = 4;

    // Weights tuned for default DBSCAN parameters (alpha=144.47, beta=0.55, epsilon=100).
    // Distance formula: d = alpha * (beta * |t1-t2|/60000 + (1-beta) * spatialDist/100)
    // Adjacent ports via link: 40+40 = 80 → d = 144.47 * 0.45 * 0.8 = 52 (clusters)
    // 2 hops (through 1 intermediate router): ~220 → d = 144.47 * 0.45 * 2.2 = 143 (separate)
    static final long PARENT_WEIGHT = 10;
    static final long PEER_WEIGHT = 40;

    /**
     * Single router with N SNMP interfaces.
     */
    public static List<InventoryObject> singleRouter(String name) {
        return singleRouter(name, DEFAULT_INTERFACES_PER_ROUTER);
    }

    public static List<InventoryObject> singleRouter(String name, int numInterfaces) {
        List<InventoryObject> inventory = new ArrayList<>();
        addRouter(inventory, name, numInterfaces);
        return inventory;
    }

    /**
     * Linear chain of routers: R1 — R2 — R3 — ...
     * Each adjacent pair is connected via a link between their ports.
     * Port 1 on router[i] connects to port 0 on router[i+1].
     */
    public static List<InventoryObject> linearChain(String... names) {
        if (names.length < 2) {
            throw new IllegalArgumentException("Chain requires at least 2 routers");
        }
        List<InventoryObject> inventory = new ArrayList<>();
        for (String name : names) {
            addRouter(inventory, name, DEFAULT_INTERFACES_PER_ROUTER);
        }
        for (int i = 0; i < names.length - 1; i++) {
            addLink(inventory, names[i], 1, names[i + 1], 0);
        }
        return inventory;
    }

    /**
     * Star topology: one hub router connected to N spoke routers.
     * Hub port i connects to spoke[i] port 0.
     */
    public static List<InventoryObject> star(String hub, String... spokes) {
        int hubInterfaces = Math.max(DEFAULT_INTERFACES_PER_ROUTER, spokes.length);
        List<InventoryObject> inventory = new ArrayList<>();
        addRouter(inventory, hub, hubInterfaces);
        for (int i = 0; i < spokes.length; i++) {
            addRouter(inventory, spokes[i], DEFAULT_INTERFACES_PER_ROUTER);
            addLink(inventory, hub, i, spokes[i], 0);
        }
        return inventory;
    }

    /**
     * Ring topology: R1 — R2 — R3 — ... — RN — R1.
     */
    public static List<InventoryObject> ring(String... names) {
        if (names.length < 3) {
            throw new IllegalArgumentException("Ring requires at least 3 routers");
        }
        List<InventoryObject> inventory = new ArrayList<>();
        for (String name : names) {
            addRouter(inventory, name, DEFAULT_INTERFACES_PER_ROUTER);
        }
        for (int i = 0; i < names.length; i++) {
            int next = (i + 1) % names.length;
            addLink(inventory, names[i], 1, names[next], 0);
        }
        return inventory;
    }

    private static void addRouter(List<InventoryObject> inventory, String name, int numInterfaces) {
        inventory.add(ImmutableInventoryObject.newBuilder()
                .setType(MockInventoryType.DEVICE.getType())
                .setId(name)
                .build());
        for (int i = 0; i < numInterfaces; i++) {
            inventory.add(ImmutableInventoryObject.newBuilder()
                    .setType(MockInventoryType.PORT.getType())
                    .setId(portId(name, i))
                    .setParentType(MockInventoryType.DEVICE.getType())
                    .setParentId(name)
                    .setWeightToParent(PARENT_WEIGHT)
                    .build());
        }
    }

    private static void addLink(List<InventoryObject> inventory,
                                String routerA, int ifIndexA,
                                String routerB, int ifIndexB) {
        String portA = portId(routerA, ifIndexA);
        String portB = portId(routerB, ifIndexB);
        String linkId = portA + "___" + portB;
        inventory.add(ImmutableInventoryObject.newBuilder()
                .setType(MockInventoryType.LINK.getType())
                .setId(linkId)
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setType(MockInventoryType.PORT.getType())
                        .setId(portA)
                        .setEndpoint(InventoryObjectPeerEndpoint.A)
                        .setWeight(PEER_WEIGHT)
                        .build())
                .addPeer(ImmutableInventoryObjectPeerRef.newBuilder()
                        .setType(MockInventoryType.PORT.getType())
                        .setId(portB)
                        .setEndpoint(InventoryObjectPeerEndpoint.Z)
                        .setWeight(PEER_WEIGHT)
                        .build())
                .build());
    }

    /** Canonical port ID for a router interface. */
    public static String portId(String routerName, int ifIndex) {
        return routerName + "-if" + ifIndex;
    }
}
