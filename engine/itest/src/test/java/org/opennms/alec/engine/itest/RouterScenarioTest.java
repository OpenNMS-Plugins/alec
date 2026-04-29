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

import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertThat;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.InventoryObject;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.driver.test.TestDriver;
import org.opennms.alec.engine.dbscan.AlarmInSpaceAndTimeDistanceMeasureFactory;
import org.opennms.alec.engine.dbscan.AlarmInSpaceTimeDistanceMeasure;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;

/**
 * Scenario-based tests for DBSCAN clustering with realistic MIB-II router topologies.
 *
 * These tests validate that ALEC correctly groups related alarms into situations
 * based on spatio-temporal proximity in a network graph.
 */
public class RouterScenarioTest {

    private static final long T0 = 1700000000000L; // Fixed base timestamp

    private TestDriver driver;
    private MibIIAlarms alarms;

    @Before
    public void setUp() {
        DBScanEngineFactory factory = new DBScanEngineFactory(
                DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON,
                "",
                new AlarmInSpaceAndTimeDistanceMeasureFactory(),
                Collections.emptyMap());
        driver = TestDriver.builder()
                .withEngineFactory(factory)
                .build();
        alarms = new MibIIAlarms();
        Thread.currentThread().setName("ALEC Driver Tick -- engine");
    }

    /**
     * Single router with nodeDown + 3 interfaceDown alarms at nearly the same time.
     * All alarms are on the same device or its child ports — should produce 1 situation.
     */
    @Test
    public void singleRouterFailure() {
        List<InventoryObject> inventory = RouterTopology.singleRouter("R1");

        List<Alarm> alarmList = new ArrayList<>();
        alarmList.addAll(alarms.routerFailure("R1", 3, T0));

        List<Situation> situations = driver.run(alarmList, inventory);

        assertThat("Single router failure should produce exactly 1 situation",
                situations, hasSize(1));

        Set<String> alarmIds = getAlarmIds(situations.get(0));
        assertThat("Situation should contain all 4 alarms (1 nodeDown + 3 ifDown)",
                alarmIds, hasSize(4));
    }

    /**
     * 3-router chain: R1 — R2 — R3.
     * Link failure between R1 and R2 (ifDown on both ends of the link).
     * The two alarms are on adjacent ports connected by a link — should be 1 situation.
     */
    @Test
    public void linkFailureBetweenAdjacentRouters() {
        List<InventoryObject> inventory = RouterTopology.linearChain("R1", "R2", "R3");

        // Link between R1 and R2 uses: R1-if1 <-> R2-if0
        List<Alarm> alarmList = alarms.linkDown("R1", 1, "R2", 0, T0);

        List<Situation> situations = driver.run(alarmList, inventory);

        assertThat("Adjacent link failure should produce exactly 1 situation",
                situations, hasSize(1));
        assertThat("Situation should contain both ifDown alarms",
                getAlarmIds(situations.get(0)), hasSize(2));
    }

    /**
     * 3-router chain: R1 — R2 — R3.
     * Two independent link failures: R1-R2 link down and R2-R3 link down, 10 minutes apart.
     * Each link failure produces 2 correlated alarms (one per end).
     * The two failures should NOT be merged because of the temporal gap.
     *
     * Note: ALEC ignores clusters with fewer than 2 alarms, so isolated single-alarm
     * failures do not produce situations. We use link failures (2 alarms each) to
     * ensure both clusters meet the minimum size.
     */
    @Test
    public void independentLinkFailuresAreNotMerged() {
        List<InventoryObject> inventory = RouterTopology.linearChain("R1", "R2", "R3");

        List<Alarm> alarmList = new ArrayList<>();
        // Link failure between R1-R2 at T0
        alarmList.addAll(alarms.linkDown("R1", 1, "R2", 0, T0));
        // Independent link failure between R2-R3, 10 minutes later
        alarmList.addAll(alarms.linkDown("R2", 1, "R3", 0, T0 + 600_000));

        List<Situation> situations = driver.run(alarmList, inventory);

        assertThat("Two temporally separated link failures should produce 2 situations",
                situations, hasSize(2));
    }

    /**
     * 5-router star: HUB connected to S1, S2, S3, S4.
     * HUB goes down, then all 4 spoke interfaces detect down within seconds.
     * All alarms are on the hub or its directly connected ports — 1 situation.
     */
    @Test
    public void cascadingStarFailure() {
        List<InventoryObject> inventory = RouterTopology.star("HUB", "S1", "S2", "S3", "S4");

        List<Alarm> alarmList = new ArrayList<>();
        alarmList.add(alarms.nodeDown("HUB", T0));
        // Each spoke detects ifDown on its port connected to the hub (port 0)
        for (int i = 0; i < 4; i++) {
            alarmList.add(alarms.interfaceDown("S" + (i + 1), 0, T0 + 2000 + (i * 500L)));
        }

        List<Situation> situations = driver.run(alarmList, inventory);

        assertThat("Cascading star failure should produce exactly 1 situation",
                situations, hasSize(1));
        assertThat("Situation should contain all 5 alarms (1 hub nodeDown + 4 spoke ifDown)",
                getAlarmIds(situations.get(0)), hasSize(5));
    }

    /**
     * 5-router chain: R1 — R2 — R3 — R4 — R5.
     * Link failure at each end of the chain at the same time:
     * R1-R2 link down and R4-R5 link down, simultaneously.
     * The two failures are 3 hops apart — spatial distance should prevent
     * clustering even though they happen at the same time.
     */
    @Test
    public void simultaneousDistantLinkFailuresAreNotMerged() {
        List<InventoryObject> inventory = RouterTopology.linearChain("R1", "R2", "R3", "R4", "R5");

        List<Alarm> alarmList = new ArrayList<>();
        // Link failure between R1-R2
        alarmList.addAll(alarms.linkDown("R1", 1, "R2", 0, T0));
        // Simultaneous link failure between R4-R5
        alarmList.addAll(alarms.linkDown("R4", 1, "R5", 0, T0));

        List<Situation> situations = driver.run(alarmList, inventory);

        // Each link failure should be its own situation
        assertThat("Spatially distant simultaneous link failures should produce 2 situations",
                situations, hasSize(2));
    }

    private static Set<String> getAlarmIds(Situation situation) {
        return situation.getAlarms().stream()
                .map(Alarm::getId)
                .collect(Collectors.toSet());
    }
}
