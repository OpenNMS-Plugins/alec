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
import java.util.concurrent.atomic.AtomicLong;

import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.driver.test.MockInventoryType;

/**
 * Creates realistic MIB-II alarm patterns for router scenarios.
 *
 * Alarm IDs are auto-generated to avoid collisions across calls.
 * All timestamps are in milliseconds.
 */
public class MibIIAlarms {

    private final AtomicLong idGenerator = new AtomicLong(1);

    /** nodeDown alarm on the router's DEVICE inventory object. */
    public Alarm nodeDown(String routerName, long timestampMs) {
        return ImmutableAlarm.newBuilder()
                .setId("nodeDown-" + routerName + "-" + idGenerator.getAndIncrement())
                .setInventoryObjectType(MockInventoryType.DEVICE.getType())
                .setInventoryObjectId(routerName)
                .setTime(timestampMs)
                .setFirstTime(timestampMs)
                .setSeverity(Severity.MAJOR)
                .setSummary("Node " + routerName + " is down")
                .setDescription("nodeDown alarm for " + routerName)
                .build();
    }

    /** interfaceDown alarm on a specific router port. */
    public Alarm interfaceDown(String routerName, int ifIndex, long timestampMs) {
        String portId = RouterTopology.portId(routerName, ifIndex);
        return ImmutableAlarm.newBuilder()
                .setId("ifDown-" + portId + "-" + idGenerator.getAndIncrement())
                .setInventoryObjectType(MockInventoryType.PORT.getType())
                .setInventoryObjectId(portId)
                .setTime(timestampMs)
                .setFirstTime(timestampMs)
                .setSeverity(Severity.MINOR)
                .setSummary("Interface " + portId + " is down")
                .setDescription("interfaceDown alarm for " + portId)
                .build();
    }

    /**
     * Link failure: generates ifDown alarms on both ends of a link.
     * Returns 2 alarms (one per side).
     */
    public List<Alarm> linkDown(String routerA, int ifIndexA, String routerB, int ifIndexB, long timestampMs) {
        List<Alarm> alarms = new ArrayList<>(2);
        alarms.add(interfaceDown(routerA, ifIndexA, timestampMs));
        alarms.add(interfaceDown(routerB, ifIndexB, timestampMs + 500)); // 500ms stagger
        return alarms;
    }

    /**
     * All interfaces down on a router, staggered by 1 second each.
     * Simulates a cascading failure where all ports go down after a node issue.
     */
    public List<Alarm> allInterfacesDown(String routerName, int numInterfaces, long baseTimestampMs) {
        List<Alarm> alarms = new ArrayList<>(numInterfaces);
        for (int i = 0; i < numInterfaces; i++) {
            alarms.add(interfaceDown(routerName, i, baseTimestampMs + (i * 1000L)));
        }
        return alarms;
    }

    /**
     * Full router failure: nodeDown + all interfaces down within a tight time window.
     */
    public List<Alarm> routerFailure(String routerName, int numInterfaces, long timestampMs) {
        List<Alarm> alarms = new ArrayList<>();
        alarms.add(nodeDown(routerName, timestampMs));
        alarms.addAll(allInterfacesDown(routerName, numInterfaces, timestampMs + 1000));
        return alarms;
    }
}
