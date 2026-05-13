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

package org.opennms.alec.demo.client.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Event {
    private String uei;
    private String severity;
    private Integer nodeid;
    private final List<Parameter> parms = new ArrayList<>();

    public static Event nodeDown(int nodeId) {
        return new Event()
                .setUei("uei.opennms.org/nodes/nodeDown")
                .setNodeid(nodeId)
                .setSeverity("MAJOR");
    }

    public static Event interfaceDown(int nodeId, String ipAddress) {
        return new Event()
                .setUei("uei.opennms.org/nodes/interfaceDown")
                .setNodeid(nodeId)
                .setSeverity("MINOR")
                .addParm(new Parameter("ipaddr", ipAddress));
    }

    public static Event genericAlarm(int nodeId) {
        return new Event()
                .setUei("uei.opennms.org/alarms/trigger")
                .setNodeid(nodeId)
                .setSeverity("MAJOR")
                .addParm(new Parameter("node", Integer.toString(nodeId)))
                .addParm(new Parameter("service", "service." + UUID.randomUUID()));
    }

    public String getUei() {
        return uei;
    }

    public Event setUei(String uei) {
        this.uei = uei;
        return this;
    }

    public String getSeverity() {
        return severity;
    }

    public Event setSeverity(String severity) {
        this.severity = severity;
        return this;
    }

    public Integer getNodeid() {
        return nodeid;
    }

    public Event setNodeid(Integer nodeid) {
        this.nodeid = nodeid;
        return this;
    }

    public Event addParm(Parameter parm) {
        parms.add(parm);
        return this;
    }

    public List<Parameter> getParms() {
        return parms;
    }

    @Override
    public String toString() {
        return "Event{uei='" + uei + "', severity='" + severity + "', nodeid=" + nodeid + '}';
    }

    public static class Parameter {
        private final String parmName;
        private final String value;

        public Parameter(String parmName, String value) {
            this.parmName = parmName;
            this.value = value;
        }

        public String getParmName() {
            return parmName;
        }

        public String getValue() {
            return value;
        }
    }
}
