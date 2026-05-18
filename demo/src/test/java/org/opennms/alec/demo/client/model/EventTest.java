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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.junit.Test;

public class EventTest {

    @Test
    public void bgpBackwardTransitionUsesAlecDemoUeiAndMajorSeverity() {
        Event e = Event.bgpBackwardTransition(5, "10.0.0.2", 65501);
        assertThat(e.getUei(), equalTo("uei.opennms.org/alec-demo/bgpBackwardTransition"));
        assertThat(e.getSeverity(), equalTo("MAJOR"));
        assertThat(e.getNodeid(), equalTo(5));
        Map<String, String> p = params(e);
        assertThat(p.get("peerIp"), equalTo("10.0.0.2"));
        assertThat(p.get("peerAsn"), equalTo("65501"));
        // oldState/newState convey the transition direction so the LLM (and human ops)
        // can tell which way the session moved.
        assertThat(p.get("oldState"), equalTo("Established"));
        assertThat(p.get("newState"), equalTo("Idle"));
    }

    @Test
    public void linkSaturationCarriesInterfaceAndUtilization() {
        Event e = Event.linkSaturation(7, "TenGigE0/0/0/2", 94);
        assertThat(e.getUei(), equalTo("uei.opennms.org/alec-demo/linkSaturation"));
        assertThat(e.getSeverity(), equalTo("MINOR"));
        Map<String, String> p = params(e);
        assertThat(p.get("ifName"), equalTo("TenGigE0/0/0/2"));
        assertThat(p.get("utilizationPct"), equalTo("94"));
        assertThat("threshold included so the LLM can reason about how far over the alarm fired",
                p.get("threshold"), equalTo("80"));
    }

    @Test
    public void cpuHighIsWarningSeverityWithPctAndThreshold() {
        Event e = Event.cpuHigh(3, 91);
        assertThat(e.getUei(), equalTo("uei.opennms.org/alec-demo/cpuHigh"));
        assertThat(e.getSeverity(), equalTo("WARNING"));
        Map<String, String> p = params(e);
        assertThat(p.get("utilizationPct"), equalTo("91"));
        assertThat(p.get("threshold"), equalTo("85"));
    }

    @Test
    public void opticalDegradeIncludesRxPowerAndLowThreshold() {
        Event e = Event.opticalDegrade(11, "TenGigE0/0/0/1", -19.5);
        assertThat(e.getUei(), equalTo("uei.opennms.org/alec-demo/opticalDegrade"));
        assertThat(e.getSeverity(), equalTo("MINOR"));
        Map<String, String> p = params(e);
        assertThat(p.get("ifName"), equalTo("TenGigE0/0/0/1"));
        // Format must be one-decimal so the alarm is human-readable, not scientific notation.
        assertThat(p.get("rxPowerDbm"), equalTo("-19.5"));
        assertThat(p.get("lowThresholdDbm"), equalTo("-18.0"));
    }

    @Test
    public void interfaceFlappingCarriesFlapCountAndWindow() {
        Event e = Event.interfaceFlapping(13, "TenGigE0/0/0/1", 7, 60);
        assertThat(e.getUei(), equalTo("uei.opennms.org/alec-demo/interfaceFlapping"));
        assertThat(e.getSeverity(), equalTo("MAJOR"));
        Map<String, String> p = params(e);
        assertThat(p.get("ifName"), equalTo("TenGigE0/0/0/1"));
        assertThat(p.get("flapCount"), equalTo("7"));
        assertThat(p.get("windowSeconds"), equalTo("60"));
    }

    @Test
    public void existingFactoriesUnchanged() {
        // Defensive: the slice-7 additions must not alter the existing
        // nodeDown/interfaceDown/genericAlarm factories that prior scenarios depend on.
        assertThat(Event.nodeDown(1).getUei(), equalTo("uei.opennms.org/nodes/nodeDown"));
        assertThat(Event.nodeDown(1).getSeverity(), equalTo("MAJOR"));
        assertThat(Event.interfaceDown(1, "1.2.3.4").getUei(),
                equalTo("uei.opennms.org/nodes/interfaceDown"));
        assertThat(Event.genericAlarm(1).getUei(), equalTo("uei.opennms.org/alarms/trigger"));
        // genericAlarm includes a random service UUID — we just check it's present, not its value.
        assertThat(params(Event.genericAlarm(1)).containsKey("service"), is(true));
    }

    private static Map<String, String> params(Event e) {
        return e.getParms().stream()
                .collect(Collectors.toMap(Event.Parameter::getParmName,
                        Event.Parameter::getValue,
                        (a, b) -> a));
    }

    // Quiet unused-import warning if maven-compiler-plugin treats it as such.
    @SuppressWarnings("unused")
    private static <T, R> Function<T, R> noop() {
        return null;
    }
}
