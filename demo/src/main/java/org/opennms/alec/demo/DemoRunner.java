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

package org.opennms.alec.demo;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.Duration;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.opennms.alec.demo.cleanup.DemoCleanup;
import org.opennms.alec.demo.client.OpenNMSClient;
import org.opennms.alec.demo.client.model.Alarm;
import org.opennms.alec.demo.inject.AlarmInjector;
import org.opennms.alec.demo.state.DemoState;
import org.opennms.alec.demo.topology.RouterTopologyBuilder;
import org.opennms.alec.demo.verify.SituationVerifier;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DemoRunner {

    private static final Logger LOG = LoggerFactory.getLogger(DemoRunner.class);

    private static final String DEFAULT_URL = "http://localhost:8980/opennms";
    private static final String DEFAULT_USER = "admin";
    private static final String DEFAULT_PASSWORD = "admin";
    private static final String DEFAULT_STATE_FILE = "./demo-state.json";
    private static final String DEFAULT_SCENARIO = "linear-3";
    private static final String DEFAULT_FOREIGN_SOURCE = "alec-demo";
    private static final Duration SITUATION_TIMEOUT = Duration.ofMinutes(5);

    public static void main(String[] args) {
        if (args.length == 0) {
            printUsage();
            System.exit(1);
        }

        String command = args[0];
        String url = getArg(args, "--url", DEFAULT_URL);
        String user = getArg(args, "--user", DEFAULT_USER);
        String password = getArg(args, "--password", DEFAULT_PASSWORD);
        String stateFilePath = getArg(args, "--state", DEFAULT_STATE_FILE);
        String scenario = getArg(args, "--scenario", DEFAULT_SCENARIO);

        Path stateFile = Paths.get(stateFilePath);
        OpenNMSClient client = new OpenNMSClient(url, user, password);

        try {
            switch (command) {
                case "setup":
                    doSetup(client, stateFile, scenario);
                    break;
                case "inject":
                    doInject(client, stateFile);
                    break;
                case "verify":
                    doVerify(client, stateFile);
                    break;
                case "cleanup":
                    doCleanup(client, stateFile);
                    break;
                case "nuke":
                    doNuke(client, stateFile);
                    break;
                case "run":
                    doRun(client, stateFile, scenario);
                    break;
                default:
                    System.err.println("Unknown command: " + command);
                    printUsage();
                    System.exit(1);
            }
        } catch (Exception e) {
            LOG.error("Command '{}' failed: {}", command, e.getMessage());
            System.err.println("ERROR: " + e.getMessage());
            e.printStackTrace(System.err);
            System.exit(1);
        }
    }

    static void doSetup(OpenNMSClient client, Path stateFile, String scenario) throws IOException {
        DemoState state = new DemoState(DEFAULT_FOREIGN_SOURCE, scenario);
        RouterTopologyBuilder topology = new RouterTopologyBuilder(client, state, stateFile);

        LOG.info("Setting up scenario: {}", scenario);
        switch (scenario) {
            case "linear-3":
                topology.buildLinearChain("Router-01", "Router-02", "Router-03");
                break;
            case "star-5":
                topology.buildStar("Core-Router-01", "Edge-Router-01", "Edge-Router-02",
                        "Edge-Router-03", "Edge-Router-04");
                break;
            case "single":
                topology.buildSingleRouter("Router-01");
                break;
            default:
                throw new IllegalArgumentException("Unknown scenario: " + scenario +
                        ". Available: linear-3, star-5, single");
        }

        state.save(stateFile);
        LOG.info("Setup complete. State saved to {}", stateFile);
        LOG.info("Created {} nodes, {} links", state.getNodes().size(), state.getUdlIds().size());
    }

    static void doInject(OpenNMSClient client, Path stateFile) throws IOException {
        DemoState state = loadState(stateFile);
        AlarmInjector injector = new AlarmInjector(client, state);

        LOG.info("Injecting alarms for scenario: {}", state.getScenario());
        switch (state.getScenario()) {
            case "linear-3":
                injector.injectLinearChainFailure();
                break;
            case "star-5":
                injector.injectStarFailure();
                break;
            case "single":
                injector.injectSingleRouterFailure();
                break;
            default:
                throw new IllegalArgumentException("Unknown scenario: " + state.getScenario());
        }

        LOG.info("Alarm injection complete. Waiting for alarms to be processed...");
        injector.waitForAlarms(expectedAlarmCount(state.getScenario()), Duration.ofMinutes(1));
    }

    /**
     * Total alarms each scenario injects (must match {@link AlarmInjector}).
     * Centralised so {@code waitForAlarms} doesn't race the rest of the
     * scenario's alarms on its way to verification.
     */
    static int expectedAlarmCount(String scenario) {
        switch (scenario) {
            case "single":
                return 3;
            case "linear-3":
                return 6;     // 3 alarms on each of 2 nodes
            case "star-5":
                return 15;    // 3 alarms on each of 5 nodes (hub + 4 spokes)
            default:
                throw new IllegalArgumentException("Unknown scenario: " + scenario);
        }
    }

    static void doVerify(OpenNMSClient client, Path stateFile) throws IOException {
        DemoState state = loadState(stateFile);
        Set<Integer> demoNodeIds = state.getNodes().stream()
                .map(DemoState.NodeRecord::getNodeId)
                .collect(Collectors.toSet());
        SituationVerifier verifier = new SituationVerifier(client);
        List<Alarm> situations = verifier.waitForSituation(demoNodeIds, SITUATION_TIMEOUT);
        System.out.println(verifier.getSituationSummary(demoNodeIds));
        LOG.info("Verification complete: {} situation(s) found involving demo nodes", situations.size());
    }

    static void doCleanup(OpenNMSClient client, Path stateFile) throws IOException {
        DemoState state = loadState(stateFile);
        boolean ok = new DemoCleanup(client, state, stateFile).cleanup();
        if (!ok) {
            throw new RuntimeException("Cleanup did not complete cleanly — see logs above; "
                    + "state file kept at " + stateFile + " for retry.");
        }
    }

    static void doNuke(OpenNMSClient client, Path stateFile) {
        LOG.info("Nuking all demo resources for foreign source '{}'", DEFAULT_FOREIGN_SOURCE);

        // If state file exists, attempt targeted cleanup first. If it succeeds
        // completely, we're done. If it partially fails (returns false), we
        // continue to the brute-force pass below — partial cleanup is exactly
        // when nuke needs to do its work.
        if (DemoState.exists(stateFile)) {
            try {
                DemoState state = DemoState.load(stateFile);
                boolean ok = new DemoCleanup(client, state, stateFile).cleanup();
                if (ok) {
                    LOG.info("Cleaned up using state file");
                    return;
                }
                LOG.warn("Targeted cleanup did not complete cleanly; running brute-force pass.");
            } catch (Exception e) {
                LOG.warn("State file cleanup failed, falling back to brute-force: {}", e.getMessage());
            }
        }

        // Brute-force: delete requisition + foreign source first (removes nodes), then clear alarms
        try {
            client.deleteRequisition(DEFAULT_FOREIGN_SOURCE);
        } catch (Exception e) {
            LOG.warn("Failed to delete requisition: {}", e.getMessage());
        }
        try {
            client.deleteForeignSourceDefinition(DEFAULT_FOREIGN_SOURCE);
        } catch (Exception e) {
            LOG.warn("Failed to delete foreign source definition: {}", e.getMessage());
        }

        try {
            client.clearAndAckAllAlarms();
        } catch (Exception e) {
            LOG.warn("Failed to clear alarms: {}", e.getMessage());
        }

        // Delete state file if it exists
        try {
            java.nio.file.Files.deleteIfExists(stateFile);
        } catch (Exception e) {
            LOG.warn("Failed to delete state file: {}", e.getMessage());
        }

        LOG.info("Nuke complete.");
    }

    static void doRun(OpenNMSClient client, Path stateFile, String scenario) throws IOException {
        try {
            doSetup(client, stateFile, scenario);
            doInject(client, stateFile);
            doVerify(client, stateFile);
        } finally {
            if (DemoState.exists(stateFile)) {
                doCleanup(client, stateFile);
            }
        }
    }

    private static DemoState loadState(Path stateFile) throws IOException {
        if (!DemoState.exists(stateFile)) {
            throw new IllegalStateException("State file not found: " + stateFile +
                    ". Run 'setup' first.");
        }
        return DemoState.load(stateFile);
    }

    private static String getArg(String[] args, String flag, String defaultValue) {
        List<String> argList = Arrays.asList(args);
        int idx = argList.indexOf(flag);
        if (idx >= 0 && idx + 1 < argList.size()) {
            return argList.get(idx + 1);
        }
        return defaultValue;
    }

    private static void printUsage() {
        System.out.println("ALEC Demo Runner");
        System.out.println();
        System.out.println("Usage: java -jar alec-demo.jar <command> [options]");
        System.out.println();
        System.out.println("Commands:");
        System.out.println("  setup    Create router topology in OpenNMS");
        System.out.println("  inject   Send alarm events");
        System.out.println("  verify   Check for situations created by ALEC");
        System.out.println("  cleanup  Remove all demo resources (requires state file)");
        System.out.println("  nuke     Force-remove all demo resources (works without state file)");
        System.out.println("  run      Full cycle: setup -> inject -> verify -> cleanup");
        System.out.println();
        System.out.println("Options:");
        System.out.println("  --url       OpenNMS base URL (default: " + DEFAULT_URL + ")");
        System.out.println("  --user      Username (default: " + DEFAULT_USER + ")");
        System.out.println("  --password  Password (default: " + DEFAULT_PASSWORD + ")");
        System.out.println("  --state     State file path (default: " + DEFAULT_STATE_FILE + ")");
        System.out.println("  --scenario  Scenario name (default: " + DEFAULT_SCENARIO + ")");
        System.out.println();
        System.out.println("Scenarios:");
        System.out.println("  linear-3   3 routers in a chain (Router-01 — Router-02 — Router-03)");
        System.out.println("  star-5     Core router + 4 edge routers in a star topology");
        System.out.println("  single     1 router, 3 generic alarms");
    }
}
