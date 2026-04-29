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

package org.opennms.alec.demo.verify;

import static org.awaitility.Awaitility.await;

import java.time.Duration;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.client.model.Alarm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SituationVerifier {

    private static final Logger LOG = LoggerFactory.getLogger(SituationVerifier.class);

    private final OpenNMSClient client;

    public SituationVerifier(OpenNMSClient client) {
        this.client = client;
    }

    public List<Alarm> waitForSituation(Duration timeout) {
        LOG.info("Waiting for at least 1 active situation (timeout: {}s)...", timeout.getSeconds());
        await().atMost(timeout.toMillis(), TimeUnit.MILLISECONDS)
                .pollInterval(5, TimeUnit.SECONDS)
                .until(() -> !client.getActiveSituations().isEmpty());
        List<Alarm> situations = client.getActiveSituations();
        LOG.info("Found {} active situation(s)", situations.size());
        return situations;
    }

    public List<Alarm> waitForSituations(int count, Duration timeout) {
        LOG.info("Waiting for at least {} active situations (timeout: {}s)...", count, timeout.getSeconds());
        await().atMost(timeout.toMillis(), TimeUnit.MILLISECONDS)
                .pollInterval(5, TimeUnit.SECONDS)
                .until(() -> client.getActiveSituations().size() >= count);
        List<Alarm> situations = client.getActiveSituations();
        LOG.info("Found {} active situation(s)", situations.size());
        return situations;
    }

    public String getSituationSummary() {
        List<Alarm> situations = client.getSituations();
        if (situations.isEmpty()) {
            return "No situations found.";
        }
        StringBuilder sb = new StringBuilder();
        sb.append("=== Situations Summary ===\n");
        for (int i = 0; i < situations.size(); i++) {
            Alarm sit = situations.get(i);
            sb.append(String.format("Situation %d: id=%d, severity=%s, reductionKey=%s\n",
                    i + 1, sit.getId(), sit.getSeverity(), sit.getReductionKey()));
            if (sit.getRelatedAlarms() != null) {
                sb.append(String.format("  Related alarms: %d\n", sit.getRelatedAlarms().size()));
                for (Alarm related : sit.getRelatedAlarms()) {
                    sb.append(String.format("    - id=%d, uei=%s, severity=%s, nodeId=%d\n",
                            related.getId(), related.getUei(), related.getSeverity(),
                            related.getNodeId()));
                }
            }
        }
        List<Alarm> active = client.getActiveSituations();
        sb.append(String.format("Total: %d situations (%d active)\n", situations.size(), active.size()));
        return sb.toString();
    }
}
