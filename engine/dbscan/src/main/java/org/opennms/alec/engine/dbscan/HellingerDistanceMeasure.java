/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2018 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2018 The OpenNMS Group, Inc.
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

import static org.opennms.alec.datasource.api.InventoryObject.DEFAULT_WEIGHT;

import java.util.Objects;

import org.apache.commons.math3.exception.DimensionMismatchException;
import org.opennms.alec.engine.api.DistanceMeasure;
import org.opennms.alec.engine.cluster.SpatialDistanceCalculator;

public class HellingerDistanceMeasure implements DistanceMeasure {
    // Keep in sync with the blueprint default (blueprint.xml epsilon=150) and
    // the UI's ENGINE_DEFAULTS — this constant is the server-side fallback when
    // a REST save omits epsilon, so the three sources must agree.
    public static final double  DEFAULT_EPSILON = 150d;
    public static final double  DEFAULT_W = 4851.28d;
    public static final double  DEFAULT_BIAS = -1986.00d;

    private final SpatialDistanceCalculator spatialDistanceCalculator;
    private final double alpha;
    private final double beta;
    private final double w;
    private final double bias;

    public HellingerDistanceMeasure(SpatialDistanceCalculator SpatialDistanceCalculator, double alpha, double beta) {
        this(SpatialDistanceCalculator, alpha, beta, DEFAULT_W, DEFAULT_BIAS);
    }

    public HellingerDistanceMeasure(SpatialDistanceCalculator SpatialDistanceCalculator, double alpha, double beta,
                                    double w, double bias) {
        this.spatialDistanceCalculator = Objects.requireNonNull(SpatialDistanceCalculator);
        this.alpha = alpha;
        this.beta = beta;
        this.w = w;
        this.bias = bias;
    }

    @Override
    public double compute(double[] a, double[] b) throws DimensionMismatchException {
        final double timeA = a[0];
        final double timeB = b[0];
        final double firstTimeA = a[2];
        final double firstTimeB = b[2];
        final long vertexIdA = (long) a[1];
        final long vertexIdB = (long) b[1];

        double spatialDistance = 0;
        if (vertexIdA != vertexIdB) {
            spatialDistance = spatialDistanceCalculator.getSpatialDistanceBetween(vertexIdA, vertexIdB);
            if (spatialDistance == 0) {
                // No path
                spatialDistance = Integer.MAX_VALUE;
            }
        }

        final double distance = compute(timeA, timeB, firstTimeA, firstTimeB, spatialDistance);

        return distance;
    }

    @Override
    public double compute(double timeA, double timeB, double firstTimeA, double firstTimeB, double spatialDistance) {
        double var_a = Math.pow(((timeA - firstTimeA) * w) + bias, 2);
        double mean_a = 0.5 * (timeA + firstTimeA);
        double var_b = Math.pow(((timeB - firstTimeB) * w) + bias, 2);
        double mean_b = 0.5 * (timeB + firstTimeB);
        double var_sum = var_a + var_b;
        double eps_for_grad_sqrt = 1.0e-32;
        final double hellinger;
        if (var_sum == 0) {
            // Both variances are zero (possible when (Δt·w)+bias lands on 0 for
            // both alarms — e.g. first-occurrence alarms with a zero bias). The
            // general formula would compute 0/0 = NaN, and NaN comparisons make
            // Commons Math DBSCAN silently stop clustering. Two point masses:
            // Hellinger distance is 0 when they coincide, 1 otherwise.
            hellinger = mean_a == mean_b ? 0d : 1d;
        } else {
            hellinger = Math.sqrt(1 - Math.sqrt((2 * Math.sqrt(var_a) * Math.sqrt(var_b)) / var_sum) * Math.exp(-0.25 * Math.pow(mean_a - mean_b, 2) / var_sum) + eps_for_grad_sqrt);
        }

        return alpha * (beta * (Math.abs(timeA - timeB) / 1000d / 60d) + (1 - beta) * spatialDistance / DEFAULT_WEIGHT) * (1 + hellinger);
    }

    @Override
    public double getAlpha() {
        return alpha;
    }

    @Override
    public double getBeta() {
        return beta;
    }

    public double getW() {
        return w;
    }

    public double getBias() {
        return bias;
    }

    @Override
    public String getName() {
        return "hellinger";
    }
}
