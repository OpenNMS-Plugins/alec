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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThanOrEqualTo;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.common.ImmutableAlarm;
import org.opennms.alec.driver.test.MockInventoryType;
import org.opennms.alec.driver.test.TestDriver;
import org.opennms.alec.engine.dbscan.AlarmInSpaceAndTimeDistanceMeasureFactory;
import org.opennms.alec.engine.dbscan.AlarmInSpaceTimeDistanceMeasure;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.DBScanEngineFactory;

/**
 * Verifies the ALEC-297 fix: alarms on different devices with no topology path
 * between them now cluster under default DBScan parameters, because the no-path
 * spatial distance penalty is configurable (default 100, comparable to typical
 * graph diameters) instead of {@link Integer#MAX_VALUE}.
 *
 * <p>Before ALEC-297 the same scenario required epsilon &gt;= 1e10 to cluster.
 */
public class CrossDeviceCorrelationIT {

    private List<Alarm> twoAlarmsOnTwoDevices() {
        long t = 60_000L;
        return Arrays.asList(
                ImmutableAlarm.newBuilder()
                        .setId("a1")
                        .setTime(t)
                        .setInventoryObjectType(MockInventoryType.DEVICE.getType())
                        .setInventoryObjectId("device-1")
                        .build(),
                ImmutableAlarm.newBuilder()
                        .setId("a2")
                        .setTime(t + 1000L)
                        .setInventoryObjectType(MockInventoryType.DEVICE.getType())
                        .setInventoryObjectId("device-2")
                        .build());
    }

    private TestDriver driverWithEpsilonAndNoPathDistance(double epsilon, double noPathDistance) {
        AlarmInSpaceAndTimeDistanceMeasureFactory measureFactory =
                new AlarmInSpaceAndTimeDistanceMeasureFactory();
        measureFactory.setNoPathDistance(noPathDistance);
        DBScanEngineFactory factory = new DBScanEngineFactory(
                DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                epsilon,
                "alarminspaceandtimedistance",
                measureFactory,
                Collections.singletonMap("alarminspaceandtimedistance", measureFactory));
        return TestDriver.builder()
                .withEngineFactory(factory)
                .build();
    }

    @Test
    public void crossDeviceAlarmsClusterAtDefaultParameters() {
        List<Alarm> alarms = twoAlarmsOnTwoDevices();

        List<Situation> situations = driverWithEpsilonAndNoPathDistance(
                AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON,
                AlarmInSpaceTimeDistanceMeasure.DEFAULT_NO_PATH_DISTANCE).run(alarms);

        int alarmsInSituations = situations.stream()
                .mapToInt(s -> s.getAlarms().size())
                .sum();
        assertThat(
                "With default DBScan parameters (epsilon=100, noPathDistance=100), "
                        + "two alarms ~1s apart on different devices should cluster.",
                alarmsInSituations, greaterThanOrEqualTo(2));
    }

    @Test
    public void largeNoPathDistance_preservesPreFixBehaviour() {
        List<Alarm> alarms = twoAlarmsOnTwoDevices();

        List<Situation> situations = driverWithEpsilonAndNoPathDistance(
                AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON,
                Integer.MAX_VALUE).run(alarms);

        int alarmsInSituations = situations.stream()
                .mapToInt(s -> s.getAlarms().size())
                .sum();
        assertThat(
                "With noPathDistance set to Integer.MAX_VALUE (the pre-fix value), "
                        + "the alarms should NOT cluster at default epsilon — operators "
                        + "who depend on the old behaviour can opt into it explicitly.",
                alarmsInSituations, org.hamcrest.Matchers.equalTo(0));
    }
}
