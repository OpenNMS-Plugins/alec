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

Pick a scenario with `--scenario NAME`; default is `linear-3`. Every scenario
goes through the same lifecycle (`setup → inject → verify → cleanup`) — the
table below summarizes what each one creates and what to expect.

| Name               | Topology                                          | Alarms injected                            | Situations expected |
|--------------------|---------------------------------------------------|--------------------------------------------|---------------------|
| `single`           | 1 router (Router-01)                              | 3 generic alarms on Router-01              | 1                   |
| `linear-3`         | 3 routers in a chain (Router-01 — Router-02 — Router-03) | 3 generic alarms each on Router-01 and Router-02 (6 total) | 2                   |
| `star-5`           | Core-Router-01 + 4 edge routers in a star         | 3 generic alarms on each of the 5 routers (15 total) | 5                   |
| `realistic-outage` | Edge-Router-East — Core-Router-01                 | Optical degrade → interface flap → BGP transition → link saturation → downstream flap (5 alarms total) | 2                   |

### `single`

Smallest valid scenario — one router, three identical generic alarms.
Demonstrates that ALEC clusters multiple alarms on the same node into a
single situation.

```bash
java -jar demo/target/alec-demo.jar run --scenario single
```

Expected: 1 situation containing all 3 alarms. Useful as a smoke test that
ALEC is correlating at all.

### `linear-3`

Three routers wired as a chain. Alarms are injected on the first two only,
to demonstrate per-node clustering without inflating the situation count.

```bash
java -jar demo/target/alec-demo.jar run --scenario linear-3
```

Expected: 2 situations (one per affected node). The third router stays
quiet — confirms ALEC isn't blindly clustering across the whole topology.

### `star-5`

Stress shape: a hub-and-spoke topology with five nodes. Useful for showing
DBSCAN's default-epsilon behavior at scale.

```bash
java -jar demo/target/alec-demo.jar run --scenario star-5
```

Expected: 5 situations (one per node). With default ALEC tuning, alarms on
different nodes don't cluster together even though they're injected
simultaneously — see [FINDINGS.md](./FINDINGS.md) for the math and the
tuned-weight alternative used in `engine/itest`.

### `realistic-outage` (ALEC-299)

The scenario designed for the Claude Root Cause Analysis path. Five alarms
across two nodes, all in a short window, telling a coherent ops story:
optical receive-power degrades on an edge router's uplink → that interface
starts flapping → the BGP service running over it drops → traffic shifts
to the backup link and saturates → the downstream node sees its own
interface flap as the topology re-converges.

```bash
java -jar demo/target/alec-demo.jar run --scenario realistic-outage
```

Expected: 2 situations. Open one in the OpenNMS UI → **AI Suggestions**
tab. With Claude enabled (see the configuration page), the tab populates
with up to three probable root causes and up to three possible
resolutions within ~5–30 seconds. With Claude disabled or no key set,
the tab shows the right empty-state message; the **Re-evaluate** button
on the tab can force an analysis on demand once the key is configured.

#### Zero-install expectations

The scenario uses OpenNMS Horizon's **built-in** event UEIs
(`threshold/lowThresholdExceeded`, `threshold/highThresholdExceeded`,
`nodes/nodeLostService`, `nodes/interfaceDown`) so it works on any
stock OpenNMS install — no `etc/events.d` step required.

### Optional: custom event definitions for richer descriptions

The demo also ships `src/main/resources/events/alec-demo.events.xml` with
hand-written `<descr>` blocks that include domain-specific framing
(e.g. "Possible causes: dirty connector, failing optic, bent or damaged
fiber"). If you install it, the custom-UEI factories
(`Event.opticalDegrade`, `Event.bgpBackwardTransition`,
`Event.linkSaturation`, `Event.interfaceFlapping`) become useful for crafting
your own scenarios:

```bash
cp demo/src/main/resources/events/alec-demo.events.xml \
   $OPENNMS_HOME/etc/events.d/

# Reference it from eventconf.xml (add this <event-file/> entry):
#   <event-file>events.d/alec-demo.events.xml</event-file>

$OPENNMS_HOME/bin/send-event.pl \
    uei.opennms.org/internal/reloadDaemonConfig -p 'daemonName Eventd'
```

Note: in OpenNMS Horizon installs that load eventconf from the database
(`<!-- Event conf files are loaded directly from DB -->` in eventconf.xml),
the `<event-file>` entry must be added through the OpenNMS admin UI or via
direct DB migration — copying the XML into `etc/events.d/` alone won't be
picked up.

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
