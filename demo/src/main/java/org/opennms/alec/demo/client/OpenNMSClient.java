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

package org.opennms.alec.demo.client;

import static org.awaitility.Awaitility.await;

import java.time.Duration;
import java.util.Base64;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.opennms.alec.demo.client.model.Alarm;
import org.opennms.alec.demo.client.model.AlarmList;
import org.opennms.alec.demo.client.model.Event;
import org.opennms.alec.demo.client.model.NodeDef;
import org.opennms.alec.demo.client.model.SnmpInterfaceDef;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * REST client for OpenNMS.
 * Uses plain Jersey client + standalone ObjectMapper for JSON — avoids
 * jersey-media-json-jackson which has classpath issues in fat jars on Java 17.
 */
public class OpenNMSClient {

    private static final Logger LOG = LoggerFactory.getLogger(OpenNMSClient.class);

    private static final String REQUISITION_TEMPLATE =
            "<model-import foreign-source=\"%s\" xmlns=\"http://xmlns.opennms.org/xsd/config/model-import\"/>";

    private static final String UDL_TEMPLATE =
            "{\"node-id-a\": %d, \"node-id-z\": %d, " +
                    "\"component-label-a\": \"%s\", \"component-label-z\": \"%s\", " +
                    "\"link-id\": \"%s\", \"owner\": \"alec-demo\"}";

    private final String baseUrl;
    private final String authorizationHeader;
    private final ObjectMapper mapper = new ObjectMapper()
            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    private final Client client;

    public OpenNMSClient(String baseUrl, String username, String password) {
        this.baseUrl = baseUrl;
        this.authorizationHeader = "Basic " + Base64.getEncoder()
                .encodeToString((username + ":" + password).getBytes());
        this.client = ClientBuilder.newClient();
    }

    // --- Events ---

    public void sendEvent(Event event) {
        LOG.info("Sending event: {}", event);
        try {
            String json = mapper.writeValueAsString(event);
            Response response = postJson(restTarget().path("events"), json);
            requireSuccess("sendEvent", response);
        } catch (Exception e) {
            throw new RuntimeException("sendEvent failed", e);
        }
    }

    // --- Alarms ---

    public List<Alarm> getAlarms() {
        Response response = getBuilder(restTarget().path("alarms"))
                .accept(MediaType.APPLICATION_JSON)
                .get();
        requireSuccess("getAlarms", response);
        try {
            String body = response.readEntity(String.class);
            AlarmList alarmList = mapper.readValue(body, AlarmList.class);
            return alarmList.getAlarms();
        } catch (Exception e) {
            throw new RuntimeException("Failed to parse alarm list", e);
        }
    }

    public List<Alarm> getSituations() {
        return getAlarms().stream()
                .filter(Alarm::isSituation)
                .collect(Collectors.toList());
    }

    public List<Alarm> getActiveSituations() {
        return getSituations().stream()
                .filter(s -> !"CLEARED".equals(s.getSeverity()))
                .collect(Collectors.toList());
    }

    public void clearAlarm(int alarmId) {
        MultivaluedMap<String, String> form = new MultivaluedHashMap<>();
        form.put("clear", Collections.singletonList("true"));
        Response response = getBuilder(restTarget().path("alarms").path(String.valueOf(alarmId)))
                .put(Entity.form(form));
        requireSuccess("clearAlarm(" + alarmId + ")", response);
    }

    public void clearAllAlarms() {
        LOG.info("Clearing all alarms");
        getAlarms().forEach(alarm -> {
            try {
                clearAlarm(alarm.getId());
            } catch (Exception e) {
                LOG.warn("Failed to clear alarm {}: {}", alarm.getId(), e.getMessage());
            }
        });
    }

    public void acknowledgeAlarm(int alarmId) {
        MultivaluedMap<String, String> form = new MultivaluedHashMap<>();
        form.put("ack", Collections.singletonList("true"));
        Response response = getBuilder(restTarget().path("alarms").path(String.valueOf(alarmId)))
                .put(Entity.form(form));
        requireSuccess("acknowledgeAlarm(" + alarmId + ")", response);
    }

    public void clearAndAckAllAlarms() {
        LOG.info("Clearing and acknowledging all alarms");
        List<Alarm> alarms = getAlarms();
        for (Alarm alarm : alarms) {
            try {
                clearAlarm(alarm.getId());
            } catch (Exception e) {
                LOG.debug("Failed to clear alarm {}: {}", alarm.getId(), e.getMessage());
            }
            try {
                acknowledgeAlarm(alarm.getId());
            } catch (Exception e) {
                LOG.debug("Failed to ack alarm {}: {}", alarm.getId(), e.getMessage());
            }
        }
        // Second pass — situations may only clear after their related alarms are cleared
        List<Alarm> remaining = getAlarms().stream()
                .filter(a -> !"CLEARED".equals(a.getSeverity()))
                .collect(Collectors.toList());
        for (Alarm alarm : remaining) {
            try {
                clearAlarm(alarm.getId());
                acknowledgeAlarm(alarm.getId());
            } catch (Exception e) {
                LOG.debug("Failed to clear remaining alarm {}: {}", alarm.getId(), e.getMessage());
            }
        }
        LOG.info("Cleared {} alarms ({} needed second pass)", alarms.size(), remaining.size());
    }

    // --- Foreign Source Definitions ---

    private static final String FOREIGN_SOURCE_DEF_TEMPLATE =
            "<foreign-source name=\"%s\" xmlns=\"http://xmlns.opennms.org/xsd/config/foreign-source\">" +
                    "<scan-interval>0</scan-interval>" +
                    "<detectors/>" +
                    "<policies/>" +
                    "</foreign-source>";

    public void createForeignSourceDefinition(String foreignSource) {
        LOG.info("Creating foreign source definition (no detectors): {}", foreignSource);
        Response response = postXml(restTarget().path("foreignSources"),
                String.format(FOREIGN_SOURCE_DEF_TEMPLATE, foreignSource));
        requireSuccess("createForeignSourceDefinition", response);
    }

    public void deleteForeignSourceDefinition(String foreignSource) {
        LOG.info("Deleting foreign source definition: {}", foreignSource);
        try {
            getBuilder(restTarget().path("foreignSources").path(foreignSource)).delete();
        } catch (Exception e) {
            LOG.debug("Failed to delete foreign source definition: {}", e.getMessage());
        }
        try {
            getBuilder(restTarget().path("foreignSources").path("deployed").path(foreignSource)).delete();
        } catch (Exception e) {
            LOG.debug("Failed to delete deployed foreign source definition: {}", e.getMessage());
        }
    }

    // --- Requisitions ---

    public void createRequisition(String foreignSource) {
        LOG.info("Creating requisition: {}", foreignSource);
        Response response = postXml(restTarget().path("requisitions"),
                String.format(REQUISITION_TEMPLATE, foreignSource));
        requireSuccess("createRequisition", response);
    }

    public void addNodeToRequisition(String foreignSource, NodeDef node) {
        LOG.info("Adding node {} to requisition {}", node.getForeignId(), foreignSource);
        Response response = postXml(
                restTarget().path("requisitions").path(foreignSource).path("nodes"),
                node.toRequisitionXml());
        requireSuccess("addNodeToRequisition", response);
    }

    public void importRequisition(String foreignSource) {
        LOG.info("Importing requisition: {}", foreignSource);
        Response response = getBuilder(restTarget().path("requisitions").path(foreignSource).path("import"))
                .put(Entity.entity("", MediaType.APPLICATION_JSON_TYPE));
        requireSuccess("importRequisition", response);
    }

    public void deleteNodeFromRequisition(String foreignSource, String foreignId) {
        LOG.info("Deleting node {} from requisition {}", foreignId, foreignSource);
        Response response = getBuilder(
                restTarget().path("requisitions").path(foreignSource).path("nodes").path(foreignId))
                .delete();
        requireSuccess("deleteNodeFromRequisition", response);
    }

    public void deleteRequisition(String foreignSource) {
        LOG.info("Deleting requisition: {}", foreignSource);
        // Delete pending
        try {
            getBuilder(restTarget().path("requisitions").path(foreignSource)).delete();
        } catch (Exception e) {
            LOG.warn("Failed to delete pending requisition: {}", e.getMessage());
        }
        // Delete deployed
        try {
            getBuilder(restTarget().path("requisitions").path("deployed").path(foreignSource)).delete();
        } catch (Exception e) {
            LOG.warn("Failed to delete deployed requisition: {}", e.getMessage());
        }
    }

    // --- Nodes ---

    public int waitForNode(String foreignSource, String foreignId, Duration timeout) {
        String criteria = foreignSource + ":" + foreignId;
        LOG.info("Waiting for node {}...", criteria);
        WebTarget target = restTarget().path("nodes").path(criteria);
        await().atMost(timeout.toMillis(), TimeUnit.MILLISECONDS)
                .pollInterval(3, TimeUnit.SECONDS)
                .ignoreExceptions()
                .until(() -> Response.Status.Family.SUCCESSFUL.equals(
                        getBuilder(target).get().getStatusInfo().getFamily()));
        try {
            Response response = getBuilder(target).accept(MediaType.APPLICATION_JSON).get();
            String body = response.readEntity(String.class);
            JsonNode json = mapper.readTree(body);
            int nodeId = Integer.parseInt(json.get("id").asText());
            LOG.info("Node {} has ID {}", criteria, nodeId);
            return nodeId;
        } catch (Exception e) {
            throw new RuntimeException("Failed to get node ID for " + criteria, e);
        }
    }

    public void deleteNode(int nodeId) {
        LOG.info("Deleting node {}", nodeId);
        Response response = getBuilder(restTarget().path("nodes").path(String.valueOf(nodeId))).delete();
        requireSuccess("deleteNode(" + nodeId + ")", response);
    }

    // --- SNMP Interfaces ---

    public void createSnmpInterface(int nodeId, SnmpInterfaceDef iface) {
        LOG.debug("Creating SNMP interface {} on node {}", iface.getIfDescr(), nodeId);
        Response response = postXml(
                restTarget().path("nodes").path(String.valueOf(nodeId)).path("snmpinterfaces"),
                iface.toXml());
        // Tolerate 500 from unique constraint — provisioning scan may have already created it
        if (response.getStatus() == 500) {
            LOG.debug("SNMP interface {} already exists on node {} (provisioning scan), skipping",
                    iface.getIfDescr(), nodeId);
            return;
        }
        requireSuccess("createSnmpInterface", response);
    }

    // --- User Defined Links ---

    public void createUDL(int nodeIdA, int nodeIdZ, String labelA, String labelZ) {
        String linkId = "n" + nodeIdA + ":" + labelA + "->n" + nodeIdZ + ":" + labelZ;
        LOG.info("Creating UDL: {}", linkId);
        String json = String.format(UDL_TEMPLATE, nodeIdA, nodeIdZ, labelA, labelZ, linkId);
        Response response = postJson(v2Target().path("userdefinedlinks"), json);
        requireSuccess("createUDL", response);
    }

    @SuppressWarnings("unchecked")
    public int getUDLId(int nodeIdA, int nodeIdZ) {
        try {
            Response response = getBuilder(v2Target().path("userdefinedlinks"))
                    .accept(MediaType.APPLICATION_JSON).get();
            String body = response.readEntity(String.class);
            Map<String, Object> jsonBody = mapper.readValue(body, Map.class);
            List<Map<String, Object>> udls = (List<Map<String, Object>>) jsonBody.get("user_defined_link");
            if (udls != null) {
                for (Map<String, Object> udl : udls) {
                    Number a = (Number) udl.get("node-id-a");
                    Number z = (Number) udl.get("node-id-z");
                    if (a != null && z != null && a.intValue() == nodeIdA && z.intValue() == nodeIdZ) {
                        return ((Number) udl.get("db-id")).intValue();
                    }
                }
            }
        } catch (Exception e) {
            LOG.warn("Failed to find UDL between {} and {}: {}", nodeIdA, nodeIdZ, e.getMessage());
        }
        return -1;
    }

    public void deleteUDL(int udlId) {
        LOG.info("Deleting UDL {}", udlId);
        Response response = getBuilder(v2Target().path("userdefinedlinks").path(String.valueOf(udlId))).delete();
        requireSuccess("deleteUDL(" + udlId + ")", response);
    }

    // --- Internal helpers ---

    private WebTarget restTarget() {
        return client.target(baseUrl).path("rest");
    }

    private WebTarget v2Target() {
        return client.target(baseUrl).path("api").path("v2");
    }

    private Invocation.Builder getBuilder(WebTarget target) {
        return target.request().header("Authorization", authorizationHeader);
    }

    private Response postJson(WebTarget target, String json) {
        return getBuilder(target).post(Entity.entity(json, MediaType.APPLICATION_JSON_TYPE));
    }

    private Response postXml(WebTarget target, String xml) {
        return getBuilder(target).post(Entity.xml(xml));
    }

    private void requireSuccess(String operation, Response response) {
        if (!Response.Status.Family.SUCCESSFUL.equals(response.getStatusInfo().getFamily())) {
            String body = "";
            try {
                body = response.readEntity(String.class);
            } catch (Exception ignored) {
            }
            throw new RuntimeException(String.format("%s failed with HTTP %d: %s",
                    operation, response.getStatus(), body));
        }
    }
}
