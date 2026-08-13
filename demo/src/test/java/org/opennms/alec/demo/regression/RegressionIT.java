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

package org.opennms.alec.demo.regression;

import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.junit.Assert.assertThat;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.demo.cleanup.DemoCleanup;
import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.client.model.Alarm;
import org.opennms.alec.demo.inject.AlarmInjector;
import org.opennms.alec.demo.state.DemoState;
import org.opennms.alec.demo.topology.RouterTopologyBuilder;
import org.opennms.alec.demo.verify.SituationVerifier;

/**
 * Integration tests requiring a running OpenNMS+ALEC instance.
 * Run with: mvn verify -pl demo -Dopennms.url=http://localhost:8980/opennms
 */
public class RegressionIT {

    private static final Duration SITUATION_TIMEOUT = Duration.ofMinutes(5);

    private OpenNMSClient client;
    private DemoState state;
    private Path stateFile;

    @Before
    public void setUp() {
        String url = System.getProperty("opennms.url", "http://localhost:8980/opennms");
        String username = System.getProperty("opennms.username", "admin");
        String password = System.getProperty("opennms.password", "admin");
        client = new OpenNMSClient(url, username, password);
        stateFile = Paths.get("target", "regression-state.json");
    }

    @After
    public void tearDown() {
        if (state != null) {
            // Don't swallow cleanup failures: if cleanup leaves demo
            // resources behind, the next test on this shared OpenNMS will
            // observe a polluted environment. Failing fast forces the
            // operator (or a follow-up nuke run) to fix the leftovers
            // before more tests pile up on top of them.
            boolean ok = new DemoCleanup(client, state, stateFile).cleanup();
            if (!ok) {
                throw new IllegalStateException(
                        "Demo cleanup did not complete cleanly; see earlier WARN logs. "
                        + "Re-run with the cleanup or nuke command before the next test.");
            }
        }
    }

    private static Set<Integer> demoNodeIds(DemoState s) {
        return s.getNodes().stream()
                .map(DemoState.NodeRecord::getNodeId)
                .collect(Collectors.toSet());
    }

    @Test
    public void linearChainProducesSituation() throws Exception {
        state = new DemoState("alec-regression-linear", "linear-3");
        RouterTopologyBuilder topology = new RouterTopologyBuilder(client, state, stateFile);
        topology.buildLinearChain("Router-01", "Router-02", "Router-03");
        state.save(stateFile);

        AlarmInjector injector = new AlarmInjector(client, state);
        injector.injectLinearChainFailure();
        // linear-3 injects 3 alarms on each of 2 nodes — wait for all 6 so
        // the situation count below is checked against the final state, not
        // a partial mid-injection snapshot.
        injector.waitForAlarms(6, Duration.ofMinutes(1));

        SituationVerifier verifier = new SituationVerifier(client);
        List<Alarm> situations = verifier.waitForSituation(demoNodeIds(state), SITUATION_TIMEOUT);
        assertThat("linear-3 should produce at least 1 situation involving demo nodes",
                situations, hasSize(greaterThanOrEqualTo(1)));
    }

    @Test
    public void starTopologyProducesSituation() throws Exception {
        state = new DemoState("alec-regression-star", "star-5");
        RouterTopologyBuilder topology = new RouterTopologyBuilder(client, state, stateFile);
        topology.buildStar("Core-Router-01", "Edge-Router-01", "Edge-Router-02",
                "Edge-Router-03", "Edge-Router-04");
        state.save(stateFile);

        AlarmInjector injector = new AlarmInjector(client, state);
        injector.injectStarFailure();
        // star-5 injects 3 alarms on each of 5 nodes (hub + 4 spokes) = 15.
        injector.waitForAlarms(15, Duration.ofMinutes(1));

        SituationVerifier verifier = new SituationVerifier(client);
        List<Alarm> situations = verifier.waitForSituation(demoNodeIds(state), SITUATION_TIMEOUT);
        assertThat("star-5 should produce at least 1 situation involving demo nodes",
                situations, hasSize(greaterThanOrEqualTo(1)));
    }

    @Test
    public void singleRouterProducesSituation() throws Exception {
        state = new DemoState("alec-regression-single", "single");
        RouterTopologyBuilder topology = new RouterTopologyBuilder(client, state, stateFile);
        topology.buildSingleRouter("Router-01");
        state.save(stateFile);

        AlarmInjector injector = new AlarmInjector(client, state);
        injector.injectSingleRouterFailure();
        injector.waitForAlarms(3, Duration.ofMinutes(1));

        SituationVerifier verifier = new SituationVerifier(client);
        List<Alarm> situations = verifier.waitForSituation(demoNodeIds(state), SITUATION_TIMEOUT);
        assertThat("single should produce at least 1 situation involving demo nodes",
                situations, hasSize(greaterThanOrEqualTo(1)));
    }
}
