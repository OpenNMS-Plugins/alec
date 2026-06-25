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

package org.opennms.alec.engine.llm;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.math3.ml.clustering.Cluster;
import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.engine.cluster.AlarmInSpaceTime;
import org.opennms.alec.engine.cluster.CEVertex;

import com.codahale.metrics.MetricRegistry;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Unit tests for {@link LlmClusterEngine}. No network calls are made; coverage
 * focuses on the static/package-private methods that contain non-trivial logic.
 */
public class LlmClusterEngineTest {

    private static final String MODEL = "anthropic/claude-sonnet-4-6";
    private final ObjectMapper om = new ObjectMapper();
    private InMemoryKVStore kvStore;
    private LlmClusterEngine engine;

    @Before
    public void setUp() {
        kvStore = new InMemoryKVStore();
        engine = new LlmClusterEngine(new MetricRegistry(), kvStore, om, null);
    }

    // -------------------------------------------------------------------------
    // chatCompletionsUrl
    // -------------------------------------------------------------------------

    @Test
    public void chatCompletionsUrlAppendsPath() {
        assertThat(LlmClusterEngine.chatCompletionsUrl("https://api.example.com/v1"),
                equalTo("https://api.example.com/v1/chat/completions"));
    }

    @Test
    public void chatCompletionsUrlToleratesTrailingSlash() {
        assertThat(LlmClusterEngine.chatCompletionsUrl("https://api.example.com/v1/"),
                equalTo("https://api.example.com/v1/chat/completions"));
    }

    // -------------------------------------------------------------------------
    // buildRequestBody
    // -------------------------------------------------------------------------

    @Test
    public void buildRequestBodyForcesToolChoice() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("tool_choice").asText(), equalTo("required"));
    }

    @Test
    public void buildRequestBodyDeclaresGroupAlarmsTool() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        JsonNode toolName = root.path("tools").get(0).path("function").path("name");
        assertThat(toolName.asText(), equalTo(LlmClusterEngine.TOOL_NAME));
    }

    @Test
    public void buildRequestBodyIncludesAlarmIdInUserMessage() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("alarm-xyz", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        String userContent = root.path("messages").get(1).path("content").asText();
        assertThat(userContent, containsString("alarm-xyz"));
    }

    @Test
    public void buildRequestBodyIncludesModelName() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("model").asText(), equalTo(MODEL));
    }

    @Test
    public void buildRequestBodySetsMaxTokens() throws IOException {
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engine.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("max_tokens").asInt(), equalTo(LlmClusterEngine.MAX_TOKENS));
    }

    // -------------------------------------------------------------------------
    // parseResponse
    // -------------------------------------------------------------------------

    @Test
    public void parseResponseExtractsSingleCluster() throws IOException {
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2);

        String json = groupAlarmsResponse("[\"alarm-1\",\"alarm-2\"]");
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);

        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    @Test
    public void parseResponseExtractsTwoClusters() throws IOException {
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        AlarmInSpaceTime a3 = makeAlarm("alarm-3", 3L);
        AlarmInSpaceTime a4 = makeAlarm("alarm-4", 4L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2, a3, a4);

        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[{\\\"alarm_ids\\\":[\\\"alarm-1\\\",\\\"alarm-2\\\"]},"
                + "{\\\"alarm_ids\\\":[\\\"alarm-3\\\",\\\"alarm-4\\\"]}]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);

        assertThat(clusters.size(), equalTo(2));
    }

    @Test
    public void parseResponseReturnsEmptyListForEmptyGroups() throws IOException {
        Map<String, AlarmInSpaceTime> alarmsById = new HashMap<>();
        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);
        assertThat(clusters.size(), equalTo(0));
    }

    @Test
    public void parseResponseSkipsUnknownAlarmIds() throws IOException {
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1);

        // Response references alarm-99 which isn't in the map
        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"{\\\"groups\\\":[{\\\"alarm_ids\\\":[\\\"alarm-1\\\",\\\"alarm-99\\\"]}]}\"}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);

        // Only alarm-1 is found; group has 1 point but is still added (engine accepts any non-empty cluster)
        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(1));
    }

    @Test
    public void parseResponseThrowsOnMissingToolCalls() {
        Map<String, AlarmInSpaceTime> alarmsById = new HashMap<>();
        String json = "{\"choices\":[{\"message\":{\"content\":\"plain text\"}}]}";
        try {
            LlmClusterEngine.parseResponse(json, alarmsById, om);
            fail("Expected IOException for missing tool_calls");
        } catch (IOException e) {
            assertThat(e.getMessage(), containsString("tool_calls"));
        }
    }

    @Test
    public void parseResponseThrowsOnMissingChoices() {
        Map<String, AlarmInSpaceTime> alarmsById = new HashMap<>();
        String json = "{\"model\":\"x\"}";
        try {
            LlmClusterEngine.parseResponse(json, alarmsById, om);
            fail("Expected IOException for missing choices");
        } catch (IOException e) {
            assertThat(e.getMessage(), containsString("choices"));
        }
    }

    @Test
    public void parseResponseHandlesArgumentsAsJsonObject() throws IOException {
        // Some providers return arguments as a pre-parsed object rather than a string
        AlarmInSpaceTime a1 = makeAlarm("alarm-1", 1L);
        AlarmInSpaceTime a2 = makeAlarm("alarm-2", 2L);
        Map<String, AlarmInSpaceTime> alarmsById = alarmsMap(a1, a2);

        String json = "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":{\"groups\":[{\"alarm_ids\":[\"alarm-1\",\"alarm-2\"]}]}}}]}}]}";
        List<Cluster<AlarmInSpaceTime>> clusters = LlmClusterEngine.parseResponse(json, alarmsById, om);
        assertThat(clusters.size(), equalTo(1));
        assertThat(clusters.get(0).getPoints().size(), equalTo(2));
    }

    // -------------------------------------------------------------------------
    // LlmConfig (inner class) — constructed directly
    // -------------------------------------------------------------------------

    @Test
    public void llmConfigStoresFields() {
        LlmClusterEngine.LlmConfig cfg =
                new LlmClusterEngine.LlmConfig("key", "https://api.example.com", "model-x", 1000L, 5000L);
        assertThat(cfg.apiKey, equalTo("key"));
        assertThat(cfg.baseUrl, equalTo("https://api.example.com"));
        assertThat(cfg.model, equalTo("model-x"));
        assertThat(cfg.dailyTokenLimit, equalTo(1000L));
        assertThat(cfg.monthlyTokenLimit, equalTo(5000L));
    }

    // -------------------------------------------------------------------------
    // Default prompt fallback
    // -------------------------------------------------------------------------

    @Test
    public void nullPromptFallsBackToDefault() throws IOException {
        LlmClusterEngine engineWithNullPrompt =
                new LlmClusterEngine(new MetricRegistry(), kvStore, om, null);
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engineWithNullPrompt.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        String sysContent = root.path("messages").get(0).path("content").asText();
        assertThat(sysContent, containsString("group_alarms"));
    }

    @Test
    public void blankPromptFallsBackToDefault() throws IOException {
        LlmClusterEngine engineWithBlankPrompt =
                new LlmClusterEngine(new MetricRegistry(), kvStore, om, "   ");
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engineWithBlankPrompt.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        String sysContent = root.path("messages").get(0).path("content").asText();
        // Default prompt contains "group_alarms" tool name reference
        assertThat(sysContent, containsString("group_alarms"));
    }

    @Test
    public void customPromptIsUsed() throws IOException {
        LlmClusterEngine engineWithCustomPrompt =
                new LlmClusterEngine(new MetricRegistry(), kvStore, om, "MY_CUSTOM_PROMPT");
        AlarmInSpaceTime ait = makeAlarm("a1", 1L);
        String body = engineWithCustomPrompt.buildRequestBody(Collections.singletonList(ait), MODEL, om);
        JsonNode root = om.readTree(body);
        String sysContent = root.path("messages").get(0).path("content").asText();
        assertThat(sysContent, equalTo("MY_CUSTOM_PROMPT"));
    }

    // -------------------------------------------------------------------------
    // Helpers
    // -------------------------------------------------------------------------

    private static AlarmInSpaceTime makeAlarm(String id, long nodeId) {
        CEVertex v = mock(CEVertex.class);
        when(v.getNumericId()).thenReturn(nodeId);
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn(id);
        when(a.getTime()).thenReturn(1_000L);
        when(a.getFirstTime()).thenReturn(1_000L);
        return new AlarmInSpaceTime(v, a);
    }

    private static Map<String, AlarmInSpaceTime> alarmsMap(AlarmInSpaceTime... alarms) {
        Map<String, AlarmInSpaceTime> map = new HashMap<>();
        for (AlarmInSpaceTime a : alarms) {
            map.put(a.getAlarm().getId(), a);
        }
        return map;
    }

    /**
     * Build a minimal valid group_alarms response JSON with the arguments as a
     * JSON-encoded string (the OpenAI wire format).
     */
    private static String groupAlarmsResponse(String alarmIdsJsonArray) {
        String args = "{\\\"groups\\\":[{\\\"alarm_ids\\\":" + alarmIdsJsonArray.replace("\"", "\\\"") + "}]}";
        return "{"
                + "\"choices\":[{\"message\":{\"tool_calls\":[{\"function\":{\"name\":\"group_alarms\","
                + "\"arguments\":\"" + args + "\"}}]}}]}";
    }
}
