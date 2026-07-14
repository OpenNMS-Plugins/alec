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

    // --- Realistic ops scenarios (ALEC-299 slice 7) ---
    //
    // These produce alarms whose attached parameters describe a believable
    // network fault. The descriptions in the alarm itself only render richly
    // when OpenNMS has the matching event definitions installed (see
    // demo/src/main/resources/events/alec-demo.events.xml); without that file
    // the alarm still flows and carries the parameters, but the human/LLM-
    // facing description text falls back to the generic UEI label.

    private static final String UEI_BASE = "uei.opennms.org/alec-demo/";

    public static Event bgpBackwardTransition(int nodeId, String peerIp, int peerAsn) {
        return new Event()
                .setUei(UEI_BASE + "bgpBackwardTransition")
                .setNodeid(nodeId)
                .setSeverity("MAJOR")
                .addParm(new Parameter("peerIp", peerIp))
                .addParm(new Parameter("peerAsn", Integer.toString(peerAsn)))
                .addParm(new Parameter("oldState", "Established"))
                .addParm(new Parameter("newState", "Idle"));
    }

    public static Event linkSaturation(int nodeId, String ifName, int utilizationPct) {
        return new Event()
                .setUei(UEI_BASE + "linkSaturation")
                .setNodeid(nodeId)
                .setSeverity("MINOR")
                .addParm(new Parameter("ifName", ifName))
                .addParm(new Parameter("utilizationPct", Integer.toString(utilizationPct)))
                .addParm(new Parameter("threshold", "80"));
    }

    public static Event cpuHigh(int nodeId, int utilizationPct) {
        return new Event()
                .setUei(UEI_BASE + "cpuHigh")
                .setNodeid(nodeId)
                .setSeverity("WARNING")
                .addParm(new Parameter("utilizationPct", Integer.toString(utilizationPct)))
                .addParm(new Parameter("threshold", "85"));
    }

    public static Event opticalDegrade(int nodeId, String ifName, double rxPowerDbm) {
        return new Event()
                .setUei(UEI_BASE + "opticalDegrade")
                .setNodeid(nodeId)
                .setSeverity("MINOR")
                .addParm(new Parameter("ifName", ifName))
                .addParm(new Parameter("rxPowerDbm", String.format("%.1f", rxPowerDbm)))
                .addParm(new Parameter("lowThresholdDbm", "-18.0"));
    }

    public static Event interfaceFlapping(int nodeId, String ifName, int flapCount, int windowSeconds) {
        return new Event()
                .setUei(UEI_BASE + "interfaceFlapping")
                .setNodeid(nodeId)
                .setSeverity("MAJOR")
                .addParm(new Parameter("ifName", ifName))
                .addParm(new Parameter("flapCount", Integer.toString(flapCount)))
                .addParm(new Parameter("windowSeconds", Integer.toString(windowSeconds)));
    }

    // --- Built-in OpenNMS UEIs (no events file install required) ---
    //
    // These map to event definitions that ship with OpenNMS Horizon out of
    // the box, so the alarms they produce have rich, parameter-substituted
    // descriptions regardless of whether alec-demo.events.xml is installed.
    // Parameter names below are the standard ones OpenNMS's stock event
    // templates reference (label, ds, value, threshold, service).

    /**
     * Standard OpenNMS threshold-exceeded-low event. Stock description
     * template: "Low threshold exceeded for %parm[ds]% (current %parm[value]%,
     * threshold %parm[threshold]%) on interface %parm[label]%..."
     */
    public static Event lowThresholdExceeded(int nodeId, String ifLabel, String ds,
                                              double value, double threshold) {
        return new Event()
                .setUei("uei.opennms.org/threshold/lowThresholdExceeded")
                .setNodeid(nodeId)
                .setSeverity("MINOR")
                .addParm(new Parameter("label", ifLabel))
                .addParm(new Parameter("ifLabel", ifLabel))
                .addParm(new Parameter("ds", ds))
                .addParm(new Parameter("value", String.format("%.2f", value)))
                .addParm(new Parameter("threshold", String.format("%.2f", threshold)));
    }

    /**
     * Standard OpenNMS threshold-exceeded-high event. Stock description
     * template substitutes the same parameters as the low variant.
     */
    public static Event highThresholdExceeded(int nodeId, String ifLabel, String ds,
                                               double value, double threshold) {
        return new Event()
                .setUei("uei.opennms.org/threshold/highThresholdExceeded")
                .setNodeid(nodeId)
                .setSeverity("MINOR")
                .addParm(new Parameter("label", ifLabel))
                .addParm(new Parameter("ifLabel", ifLabel))
                .addParm(new Parameter("ds", ds))
                .addParm(new Parameter("value", String.format("%.2f", value)))
                .addParm(new Parameter("threshold", String.format("%.2f", threshold)));
    }

    /**
     * Standard OpenNMS service-lost event. Stock description template:
     * "A %parm[service]% outage was identified on interface %interface% on
     * node %nodelabel%..."
     */
    public static Event lostService(int nodeId, String service) {
        return new Event()
                .setUei("uei.opennms.org/nodes/nodeLostService")
                .setNodeid(nodeId)
                .setSeverity("MAJOR")
                .addParm(new Parameter("service", service));
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
