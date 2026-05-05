/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2019 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2019 The OpenNMS Group, Inc.
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

package org.opennms.alec.engine.dbscan;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.lessThan;
import static org.hamcrest.number.IsCloseTo.closeTo;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.opennms.alec.datasource.api.InventoryObject.DEFAULT_WEIGHT;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.opennms.alec.engine.cluster.AbstractClusterEngine;

public class AlarmInSpaceTimeDistanceMeasureTest {

    @Test
    public void canEvaluateDistanceFunction() {

        double minTimeDeltaMs = 0;
        double maxTimeDeltaMs = TimeUnit.MINUTES.toMillis(2);
        double timeDeltaMsStep = TimeUnit.SECONDS.toMillis(5);

        double minSpatialDistance = 0;
        double maxSpatialDistance = 5 * DEFAULT_WEIGHT;
        double spatialDistanceStep = maxSpatialDistance / 10;

        System.out.printf("Alpha: %.4f, Beta: %.4f, Epsilon: %.4f\n", DBScanEngine.DEFAULT_ALPHA, DBScanEngine.DEFAULT_BETA, AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON);
        System.out.println("timeDeltaSecs,spatialDistance,distance,ok");
        for (double y = minSpatialDistance; y < maxSpatialDistance; y += spatialDistanceStep) {
            for (double x = minTimeDeltaMs; x <= maxTimeDeltaMs; x += timeDeltaMsStep) {
                double val = eval(x,y);
                System.out.printf("%.2f,%.2f,%.2f,%s\n", x / 1000, y, val, val <= AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON);
            }
        }
    }

    double eval(double timeDeltaMs, double spatialDistance) {
        final AbstractClusterEngine clusterEngine = mock(AbstractClusterEngine.class);
        final AlarmInSpaceTimeDistanceMeasure alarmInSpaceTimeDistanceMeasure = new AlarmInSpaceTimeDistanceMeasure(clusterEngine, DBScanEngine.DEFAULT_ALPHA, DBScanEngine.DEFAULT_BETA);
        return alarmInSpaceTimeDistanceMeasure.compute(0, timeDeltaMs, spatialDistance);
    }

    @Test
    public void noPathBetweenVerticesUsesConfiguredNoPathDistance() {
        // ALEC-297: when the spatial calculator returns Integer.MAX_VALUE
        // (the no-path sentinel), the measure must substitute the configured
        // noPathDistance instead — otherwise no realistic epsilon ever clusters
        // alarms across devices.
        final AbstractClusterEngine clusterEngine = mock(AbstractClusterEngine.class);
        when(clusterEngine.getSpatialDistanceBetween(1L, 2L))
                .thenReturn((double) Integer.MAX_VALUE);

        final AlarmInSpaceTimeDistanceMeasure measure = new AlarmInSpaceTimeDistanceMeasure(
                clusterEngine,
                DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                100d);

        // a/b structure: [time, vertexId, firstTime]
        double distance = measure.compute(new double[]{0d, 1d, 0d}, new double[]{1000d, 2d, 1000d});

        // With noPathDistance=100 and 1s time delta, distance ~= 66.
        // Critically: < default epsilon (100). Pre-fix this would have been ~10^9.
        assertThat(distance, lessThan(AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON));
        assertThat(distance, closeTo(65.96d, 1d));
    }

    @Test
    public void noPathBetweenVerticesWithLargePenalty_preservesOldBehaviour() {
        // Operators who rely on the pre-fix "cross-device alarms never cluster"
        // behaviour can opt back into it by setting noPathDistance to a very large
        // value (e.g. Integer.MAX_VALUE).
        final AbstractClusterEngine clusterEngine = mock(AbstractClusterEngine.class);
        when(clusterEngine.getSpatialDistanceBetween(1L, 2L))
                .thenReturn((double) Integer.MAX_VALUE);

        final AlarmInSpaceTimeDistanceMeasure measure = new AlarmInSpaceTimeDistanceMeasure(
                clusterEngine,
                DBScanEngine.DEFAULT_ALPHA,
                DBScanEngine.DEFAULT_BETA,
                Integer.MAX_VALUE);

        double distance = measure.compute(new double[]{0d, 1d, 0d}, new double[]{1000d, 2d, 1000d});

        // Distance dwarfs default epsilon (100) — alarms remain unclustered.
        assertThat(distance > 1e8, org.hamcrest.Matchers.equalTo(true));
    }
}
