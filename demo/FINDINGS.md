# ALEC Demo — Investigation Findings

This document captures findings from investigating why the demo produces one
situation per device instead of a single cross-device situation when alarms
occur simultaneously on topologically adjacent routers.

## TL;DR

The demo **works as expected** against default ALEC configuration. The default
ALEC parameters do not cluster alarms across distinct but directly connected
nodes. This is not a bug in the demo — it is default ALEC behavior. Fixing it
requires either tuning the DBSCAN `epsilon` parameter or reducing the UDL edge
weight. Attempts to reconfigure `epsilon` at runtime (via cfg file, Karaf Config
Admin, blueprint default change + KAR redeploy) did not successfully change the
running engine's behavior in our environment — the engine continued to use the
compiled-in defaults.

## The Distance Formula

ALEC's DBSCAN engine uses this distance metric between two alarms:

```
distance = alpha * (beta * |t1 - t2| / 1000 / 60 + (1 - beta) * spatialDistance / DEFAULT_WEIGHT)
```

Source: `engine/dbscan/src/main/java/org/opennms/alec/engine/dbscan/AlarmInSpaceTimeDistanceMeasure.java`

| Constant        | Value         | Meaning                                   |
|-----------------|---------------|-------------------------------------------|
| `alpha`         | 144.47117699  | Overall scaling                           |
| `beta`          | 0.55257784    | Time/space weighting (0 = pure space, 1 = pure time) |
| `DEFAULT_WEIGHT`| 100           | Spatial distance normalizer               |
| `epsilon`       | 100           | DBSCAN cluster radius                     |

## Why 5 Situations for `star-5`

In the star-5 topology:
- 5 node vertices (Core + 4 Edge routers)
- 4 UDL links, each of which creates a `NodeLink` intermediate vertex
- Shortest path from Core → NodeLink → Edge-Router-01 = 2 hops × weight 100 =
  **spatial distance 200**

For simultaneous alarms (`|t1 - t2| ≈ 0`) on adjacent nodes:

```
distance = 144.47 * (0.55 * 0 + 0.45 * 200 / 100)
         = 144.47 * 0.8949
         ≈ 129.3
```

Since `129.3 > epsilon(100)`, they do **not** cluster. Each node's 3 alarms
(distance 0 from each other on the same vertex) form a separate cluster,
producing 5 situations.

## Confirmed via ALEC Graph Export

`opennms-alec:export-graph dbscan /tmp/alec-graph.graphml` confirmed:
- 5 node vertices correctly linked by 4 NodeLink intermediate vertices
- 8 peer reference edges with `weight=100` each
- Node criteria (`alec-demo:Core-Router-01`, etc.) match between vertex IDs and
  alarm inventory IDs

The topology is correctly represented in ALEC's graph. The problem is purely
the clustering parameters.

## What Did Not Work

We tried several approaches to change the effective `epsilon` on the running
engine. None demonstrably changed ALEC's clustering behavior:

### 1. Config file (`etc/org.opennms.alec.engine.dbscan.cfg`)
Wrote `epsilon=200` and `epsilon=500` to this file. `config:list` in Karaf
reflected the updated values, but with `BundleLocation: ?` (meaning the config
was unbound — not associated with the ALEC bundle). The engine continued
producing 5 situations.

### 2. Karaf `config:edit` / `config:update`
Same result — unbound PID. Engine unchanged.

### 3. Blueprint default change (`blueprint.xml`)
Changed the default from `epsilon=100` to `epsilon=200` in
`engine/dbscan/src/main/resources/OSGI-INF/blueprint/blueprint.xml`, rebuilt
the KAR via `mvn package -pl assembly/kar -am -DskipTests`, and deployed the
new KAR. Still 5 situations. The KAR's cached copy (bundle622 in Karaf data
cache) did contain the new default, but the running engine's behavior was
unchanged.

### 4. Clearing Karaf bundle cache + redeploy
Removed bundles 615–634 from `data/cache/`, removed `data/kar/opennms-alec-plugin/`,
and redeployed. Features did not auto-reinstall; feature installation via
`feature:install alec-opennms-standalone` was required. Still 5 situations.

### 5. Karaf feature operations
- `feature:restart alec-opennms-standalone` → command not found
- `feature:uninstall alec-opennms-standalone` → hung indefinitely
- `bundle:restart` on ALEC bundles → broke the UI and required full OpenNMS
  restart

## What Likely Works (Untested)

### Option A: Reduce UDL edge weight (preferred)
Change `PORT_LINK_WEIGHT` in `datasource/opennms-direct/src/main/resources/inventory.groovy`
from `100` to `40`. This is a Groovy script and may be reloadable without a
KAR rebuild.

With `PORT_LINK_WEIGHT=40`:
- 2-hop spatial distance = 2 × 40 = 80
- distance = 144.47 × 0.45 × 80/100 ≈ **52** < epsilon(100) → clusters ✓
- 4-hop spatial distance (edge-to-edge through hub) = 4 × 40 = 160
- distance = 144.47 × 0.45 × 160/100 ≈ **104** > epsilon(100) → does not
  cluster (good — prevents over-aggregation)

This would give correct cross-node correlation for directly connected routers
without needing any OSGi configuration changes.

### Option B: Clean OpenNMS + ALEC reinstall
Stop OpenNMS, delete `data/cache`, `data/kar`, `data/generated-bundles`, and
`data/tmp` entirely, place the modified KAR in `deploy/`, and start OpenNMS.
This guarantees the new blueprint defaults are loaded, but is heavy-handed.

### Option C: Fresh configuration via `cfg` file at first boot
The `update-strategy="reload"` semantics on the blueprint PID likely only work
correctly if the config file is present **before** the bundle first activates.
If the file is written after ALEC is already running, the bundle may not
re-resolve the configuration.

## Engine-Level Tests Work

The engine-level tests in `engine/itest/src/test/java/org/opennms/alec/engine/itest/`
**do** demonstrate cross-node correlation — they use tuned weights
(`PARENT_WEIGHT=10`, `PEER_WEIGHT=40`, not the ALEC production defaults of 100)
that bring the computed distance below `epsilon=100`.

```bash
mvn test -pl engine/itest -Dtest=RouterScenarioTest
```

These tests are a good reference implementation for what cross-node correlation
should look like.

## Recommended Path Forward

For making cross-node correlation work in the live demo:

1. Try Option A (reduce `PORT_LINK_WEIGHT` in `inventory.groovy`) first — it is
   the lowest-risk change.
2. If the Groovy script is not reloaded at runtime, rebuild and redeploy ALEC
   with the weight change in place.
3. Verify against the `star-5` scenario; expect **1 situation with 15 alarms**
   instead of 5 situations with 3 alarms each.

## References

- `engine/dbscan/src/main/java/org/opennms/alec/engine/dbscan/DBScanEngine.java`
  — engine constructor; `DEFAULT_ALPHA`, `DEFAULT_BETA`
- `engine/dbscan/src/main/java/org/opennms/alec/engine/dbscan/AlarmInSpaceTimeDistanceMeasure.java`
  — distance formula
- `engine/dbscan/src/main/resources/OSGI-INF/blueprint/blueprint.xml`
  — blueprint defaults (`epsilon=100`)
- `engine/cluster/src/main/java/org/opennms/alec/engine/cluster/AbstractClusterEngine.java`
  — Dijkstra shortest path via `DijkstraSolvableGraph`
- `datasource/opennms-direct/src/main/resources/inventory.groovy`
  — edge weight constants (`PORT_LINK_WEIGHT=100`)
- `engine/itest/src/test/java/org/opennms/alec/engine/itest/RouterTopology.java`
  — reference topology with working cross-node correlation
