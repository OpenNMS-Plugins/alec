# ALEC Demo & Regression Harness

Demonstrates ALEC alarm correlation against a live OpenNMS instance by creating
fake router topologies, injecting alarms, and verifying that ALEC creates
situations.

## Quick Start

```bash
# 1. Build
mvn package -pl demo -am -DskipTests

# 2. Run the full demo (setup -> inject -> verify -> cleanup)
java -jar demo/target/alec-demo.jar run --scenario star-5
```

## What To Expect

With **default ALEC configuration**, the current behavior is:

| Scenario           | Alarms Injected           | Situations Created | Meaning                                             |
|--------------------|---------------------------|--------------------|-----------------------------------------------------|
| `single`           | 3 alarms on Router-01     | **1**              | All 3 alarms grouped into one situation             |
| `linear-3`         | 3 alarms on each of 2 routers (6 total) | **2**   | Each node's alarms grouped separately               |
| `star-5`           | 3 alarms on each of 5 routers (15 total) | **5**  | Each node's alarms grouped separately               |
| `realistic-outage` | 5 correlated alarms (optical / flap / BGP / saturation) across 2 routers | **2** | Realistic ops scenario for exercising the Claude suggestion path (ALEC-299) |

### Why one situation per node (not cross-node)?

ALEC's DBSCAN engine uses default `epsilon=100` as the clustering radius. Each
User-Defined Link (UDL) introduces an intermediate vertex in the ALEC graph,
so adjacent nodes are **2 hops apart** in the correlation graph, each hop
weighted 100 (total spatial distance 200).

The computed distance between simultaneous alarms on adjacent nodes works out to
~129, which **exceeds the default epsilon of 100**. So alarms on different
nodes do not cluster together by default, even if they happen simultaneously
on directly connected routers.

This is expected, documented ALEC default behavior. For details on why
reconfiguring epsilon at runtime did not change this, see
[FINDINGS.md](./FINDINGS.md).

### Demo takeaway

The demo successfully shows that **ALEC is correlating alarms**:
- Multiple alarms on the same node are grouped into a single situation
- The diagnostic text for each situation lists the alarm count, time span, and
  vertex count
- Situations are automatically created without explicit configuration

Cross-node correlation (combining alarms from topologically adjacent but
distinct devices) is a **known default-limitation** and can be tuned later.
See [FINDINGS.md](./FINDINGS.md) for proposed fixes.

## Commands

```bash
# Show help
java -jar demo/target/alec-demo.jar

# Step-by-step
java -jar demo/target/alec-demo.jar setup   --scenario star-5
java -jar demo/target/alec-demo.jar inject
java -jar demo/target/alec-demo.jar verify
java -jar demo/target/alec-demo.jar cleanup

# Full cycle (setup -> inject -> verify -> cleanup)
java -jar demo/target/alec-demo.jar run --scenario linear-3

# Force cleanup (works even without state file)
java -jar demo/target/alec-demo.jar nuke
```

## Options

| Flag         | Default                            | Description                |
|--------------|------------------------------------|----------------------------|
| `--url`      | `http://localhost:8980/opennms`    | OpenNMS base URL           |
| `--user`     | `admin`                            | OpenNMS username           |
| `--password` | `admin`                            | OpenNMS password           |
| `--state`    | `./demo-state.json`                | State file for cleanup     |
| `--scenario` | `linear-3`                         | Scenario name              |

## Scenarios

| Name               | Topology                                          | Alarms                                    |
|--------------------|---------------------------------------------------|-------------------------------------------|
| `linear-3`         | 3 routers in a chain (Router-01 — Router-02 — Router-03) | 3 generic alarms on Router-01 and Router-02 each |
| `star-5`           | Core-Router-01 + 4 edge routers in a star         | 3 generic alarms on each of the 5 routers |
| `single`           | 1 router (Router-01)                              | 3 generic alarms on Router-01             |
| `realistic-outage` | Edge-Router-East — Core-Router-01                 | Optical degrade → interface flap → BGP transition → link saturation → downstream flap (5 alarms total) |

### Realistic Outage Scenario (ALEC-299)

`realistic-outage` simulates the timeline of a real incident — an edge
router's uplink optic degrades, the interface starts flapping, BGP transitions
to Idle, traffic shifts to the backup link which saturates, and the
downstream node sees its own interface flap as the topology re-converges.

This scenario produces alarms with **rich descriptive parameters**
(interface name, peer IP, optical receive power, utilization percentage, …)
designed to give the Claude integration meaningful context to reason about.

**For full-fidelity descriptions** (so Claude sees richly templated text
instead of generic OpenNMS fallback strings), install the event definitions
that ship with the demo:

```bash
# On the OpenNMS host:
cp demo/src/main/resources/events/alec-demo.events.xml \
   $OPENNMS_HOME/etc/events.d/

# Reference it from eventconf.xml (add this <event-file/> entry):
#   <event-file>events.d/alec-demo.events.xml</event-file>

# Reload eventd:
$OPENNMS_HOME/bin/send-event.pl \
    uei.opennms.org/internal/reloadDaemonConfig -p 'daemonName Eventd'
```

Without the event file, the demo still works and ALEC still groups the
alarms into situations, but the descriptions Claude sees will be generic
"event uei.opennms.org/alec-demo/... received" strings — the LLM has little
to work with and its suggestions will be correspondingly vague.

## Cleanup

- **`cleanup`** — Uses the state file (`demo-state.json`) to remove exactly what
  was created: UDLs, nodes, requisition, then clears alarms. Requires the state
  file to exist.
- **`nuke`** — If a state file exists, uses it for targeted cleanup (same as
  `cleanup`). Otherwise falls back to brute-force: deletes the `alec-demo`
  requisition and clears all alarms. Works even if setup crashed mid-way or the
  state file is missing.

After a failed run, use `nuke` first, then retry:

```bash
java -jar demo/target/alec-demo.jar nuke
java -jar demo/target/alec-demo.jar setup --scenario linear-3
```

## State File

Setup saves a `demo-state.json` tracking all created resources (node IDs,
UDL IDs, foreign source). This allows cleanup to remove exactly what was
created. The state is saved incrementally — after each router is provisioned —
so cleanup works even if setup crashes partway through.

## Topology

Each scenario creates:
- **Nodes** via the OpenNMS requisition API
- **SNMP interfaces** (MIB-II ifTable) on each node
- **User Defined Links (UDLs)** connecting interfaces between adjacent nodes

SNMP interfaces are created after all nodes are provisioned to prevent
requisition re-imports from wiping them. UDL component-labels match the SNMP
interface `ifDescr` values so the topology is correctly represented in both the
OpenNMS topology view and ALEC's correlation graph.

## Regression Tests (Integration)

`RegressionIT` requires a live OpenNMS+ALEC instance, so it is **not** bound
to the default `verify` lifecycle (CI pipelines won't try to run it). Activate
the `demo-it` profile to opt in:

```bash
mvn verify -pl demo -am -Pdemo-it \
    -Dopennms.url=http://localhost:8980/opennms \
    -Dopennms.username=admin \
    -Dopennms.password=admin
```

## Engine-Level Tests (No OpenNMS Needed)

Unit tests in `engine/itest` validate DBSCAN clustering with synthetic
topologies — no running OpenNMS required. These tests use **tuned weights**
(not the ALEC defaults) so they demonstrate cross-node correlation working
correctly:

```bash
mvn test -pl engine/itest -Dtest=RouterScenarioTest
```

See [FINDINGS.md](./FINDINGS.md) for the relationship between the tuned
weights used in the engine tests and the default weights used by the live
OpenNMS+ALEC deployment.

# Other Tips

To Start / Stop OpenNMS:
 cd dev/opennms/target/opennms-36.0.0-SNAPSHOT
 ./bin/opennms stop
 ./bin/opennms start

Remember the default OpenNMS URL:
http://localhost:8980/opennms
