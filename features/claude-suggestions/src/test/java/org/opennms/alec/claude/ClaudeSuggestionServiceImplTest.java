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

package org.opennms.alec.claude;

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
import java.util.HashSet;
import java.util.Set;

import org.junit.Test;
import org.opennms.alec.datasource.api.Alarm;
import org.opennms.alec.datasource.api.Severity;
import org.opennms.alec.datasource.api.Situation;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * No test in this class makes a network call. Coverage is split into:
 *
 * <ul>
 *   <li>{@code buildRequestBody*} — exercises the static request-body
 *       builder; pure JSON output, no I/O.</li>
 *   <li>{@code parseResponse*} — exercises the static response parser;
 *       fed hand-crafted JSON strings, no I/O.</li>
 *   <li>{@code requestSuggestions*} — exercises the public API's
 *       guardrails (null situation, empty key). All fail at the
 *       guardrail before any HTTP call is constructed.</li>
 * </ul>
 *
 * <strong>Policy:</strong> unit/integration tests in this module must
 * never require a real Anthropic API key. The "sk-ant-…" strings below
 * are literal fixtures only. Live-API exercise is a future opt-in IT
 * gated behind the demo-it Maven profile (see demo/README.md).
 */
public class ClaudeSuggestionServiceImplTest {

    private final ObjectMapper om = new ObjectMapper();

    // --- buildRequestBody ---

    @Test
    public void buildRequestBodyIncludesModelAndMaxTokens() throws IOException {
        String body = ClaudeSuggestionServiceImpl.buildRequestBody(stubSituation(), om);
        JsonNode root = om.readTree(body);
        assertThat(root.get("model").asText(), equalTo("claude-sonnet-4-6"));
        assertTrue("max_tokens present", root.get("max_tokens").asInt() > 0);
    }

    @Test
    public void buildRequestBodySystemPromptHasCacheControlEphemeral() throws IOException {
        // Prompt caching is meaningless if cache_control is missing — assert it explicitly.
        JsonNode root = om.readTree(ClaudeSuggestionServiceImpl.buildRequestBody(stubSituation(), om));
        JsonNode systemBlock = root.get("system").get(0);
        assertThat(systemBlock.get("type").asText(), equalTo("text"));
        assertThat(systemBlock.get("text").asText(),
                containsString("OpenNMS ALEC"));
        assertThat(systemBlock.get("cache_control").get("type").asText(),
                equalTo("ephemeral"));
    }

    @Test
    public void buildRequestBodyDeclaresToolWithCorrectSchema() throws IOException {
        JsonNode root = om.readTree(ClaudeSuggestionServiceImpl.buildRequestBody(stubSituation(), om));
        JsonNode tool = root.get("tools").get(0);
        assertThat(tool.get("name").asText(), equalTo("report_suggestions"));

        JsonNode schema = tool.get("input_schema");
        assertThat(schema.get("type").asText(), equalTo("object"));
        JsonNode props = schema.get("properties");

        JsonNode rootCauses = props.get("rootCauses");
        assertThat(rootCauses.get("type").asText(), equalTo("array"));
        assertThat("rootCauses capped at 3 — ticket says 'up to 3'",
                rootCauses.get("maxItems").asInt(), equalTo(3));

        JsonNode resolutions = props.get("resolutions");
        assertThat(resolutions.get("type").asText(), equalTo("array"));
        assertThat(resolutions.get("maxItems").asInt(), equalTo(3));

        Set<String> required = new HashSet<>();
        for (JsonNode r : schema.get("required")) required.add(r.asText());
        assertThat(required.contains("rootCauses"), is(true));
        assertThat(required.contains("resolutions"), is(true));
    }

    @Test
    public void buildRequestBodyForcesToolUseChoice() throws IOException {
        // tool_choice with type=tool + name=our-tool is what makes the model HAVE to
        // call our tool — without it the model could just return free text and our
        // injection defense disappears.
        JsonNode root = om.readTree(ClaudeSuggestionServiceImpl.buildRequestBody(stubSituation(), om));
        JsonNode tc = root.get("tool_choice");
        assertThat(tc.get("type").asText(), equalTo("tool"));
        assertThat(tc.get("name").asText(), equalTo("report_suggestions"));
    }

    @Test
    public void buildRequestBodyEmbedsSituationAndAlarmDetails() throws IOException {
        Situation s = stubSituation();
        JsonNode root = om.readTree(ClaudeSuggestionServiceImpl.buildRequestBody(s, om));
        String userContent = root.get("messages").get(0).get("content").asText();

        assertThat(userContent, containsString("sit-42"));
        assertThat(userContent, containsString("MAJOR"));
        // Alarm summary + description must reach the model — that's the whole point.
        assertThat(userContent, containsString("link down"));
        assertThat(userContent, containsString("GigabitEthernet 1/0/24"));
        // Untrusted-data hint helps the model treat alarm payloads as content,
        // not instructions — defense in depth alongside the tool-use schema.
        assertThat(userContent, containsString("untrusted"));
    }

    // --- renderSituationForPrompt ---

    @Test
    public void renderSituationToleratesNullAlarmSetAndNullFields() {
        Situation s = mock(Situation.class);
        when(s.getId()).thenReturn("sit-empty");
        when(s.getSeverity()).thenReturn(null);
        when(s.getAlarms()).thenReturn(null);

        String rendered = ClaudeSuggestionServiceImpl.renderSituationForPrompt(s);
        assertThat(rendered, containsString("sit-empty"));
        assertThat(rendered, containsString("Alarm count: 0"));
    }

    // --- parseResponse ---

    @Test
    public void parseResponseExtractsToolUseInputAndUsage() throws IOException {
        String json = "{"
                + "\"type\":\"message\","
                + "\"content\":[{"
                + "  \"type\":\"tool_use\","
                + "  \"name\":\"report_suggestions\","
                + "  \"input\":{"
                + "    \"rootCauses\":[\"link saturation\",\"misconfigured QoS\"],"
                + "    \"resolutions\":[\"check interface counters\",\"verify QoS policy\",\"open ticket for vendor\"]"
                + "  }"
                + "}],"
                + "\"usage\":{"
                + "  \"input_tokens\":1234,"
                + "  \"output_tokens\":78,"
                + "  \"cache_read_input_tokens\":1000,"
                + "  \"cache_creation_input_tokens\":234"
                + "}"
                + "}";
        Suggestions s = ClaudeSuggestionServiceImpl.parseResponse(json, om);
        assertThat(s.getRootCauses(), equalTo(Arrays.asList("link saturation", "misconfigured QoS")));
        assertThat(s.getResolutions().size(), equalTo(3));
        assertThat(s.getUsage().getInputTokens(), equalTo(1234L));
        assertThat(s.getUsage().getOutputTokens(), equalTo(78L));
        assertThat(s.getUsage().getCacheReadInputTokens(), equalTo(1000L));
        assertThat(s.getUsage().getCacheCreationInputTokens(), equalTo(234L));
    }

    @Test
    public void parseResponseSkipsNonToolUseContentBlocks() throws IOException {
        // The model can return mixed content (e.g. a leading text block).
        // We should find the tool_use anyway.
        String json = "{"
                + "\"content\":[{"
                + "  \"type\":\"text\",\"text\":\"Some preamble Claude added.\"},"
                + "{"
                + "  \"type\":\"tool_use\",\"name\":\"report_suggestions\","
                + "  \"input\":{\"rootCauses\":[\"x\"],\"resolutions\":[\"y\"]}"
                + "}]}";
        Suggestions s = ClaudeSuggestionServiceImpl.parseResponse(json, om);
        assertThat(s.getRootCauses(), equalTo(Arrays.asList("x")));
        assertThat(s.getResolutions(), equalTo(Arrays.asList("y")));
    }

    @Test
    public void parseResponseThrowsOnAnthropicErrorEnvelope() {
        String json = "{\"type\":\"error\",\"error\":{\"type\":\"authentication_error\","
                + "\"message\":\"invalid x-api-key\"}}";
        ClaudeApiException ex = expectThrows(ClaudeApiException.class,
                () -> ClaudeSuggestionServiceImpl.parseResponse(json, om));
        assertThat(ex.getMessage(), containsString("authentication_error"));
        assertThat(ex.getMessage(), containsString("invalid x-api-key"));
    }

    @Test
    public void parseResponseThrowsWhenToolUseBlockMissing() {
        // The response is structurally valid but doesn't include our tool_use block.
        String json = "{\"content\":[{\"type\":\"text\",\"text\":\"just text\"}]}";
        ClaudeApiException ex = expectThrows(ClaudeApiException.class,
                () -> ClaudeSuggestionServiceImpl.parseResponse(json, om));
        assertThat(ex.getMessage(), containsString("tool_use"));
    }

    @Test
    public void parseResponseThrowsWhenContentArrayMissing() {
        ClaudeApiException ex = expectThrows(ClaudeApiException.class,
                () -> ClaudeSuggestionServiceImpl.parseResponse("{\"id\":\"msg_1\"}", om));
        assertThat(ex.getMessage(), containsString("content"));
    }

    @Test
    public void parseResponseGivesEmptyUsageWhenBlockMissing() throws IOException {
        String json = "{\"content\":[{\"type\":\"tool_use\",\"name\":\"report_suggestions\","
                + "\"input\":{\"rootCauses\":[],\"resolutions\":[]}}]}";
        Suggestions s = ClaudeSuggestionServiceImpl.parseResponse(json, om);
        assertThat(s.getUsage().getInputTokens(), equalTo(0L));
        assertThat(s.getUsage().getOutputTokens(), equalTo(0L));
    }

    // --- requestSuggestions guardrails ---

    @Test
    public void requestSuggestionsRejectsNullSituationWithFailedFuture() throws Exception {
        ClaudeSuggestionServiceImpl svc = newServiceForGuardrails();
        try {
            Throwable cause = futureCause(svc.requestSuggestions(null, "sk-x"));
            assertThat(cause, instanceOfMatcher(ClaudeApiException.class));
        } finally {
            svc.shutdown();
        }
    }

    @Test
    public void requestSuggestionsRejectsEmptyApiKeyWithFailedFuture() throws Exception {
        ClaudeSuggestionServiceImpl svc = newServiceForGuardrails();
        try {
            Throwable cause = futureCause(svc.requestSuggestions(stubSituation(), ""));
            assertThat(cause, instanceOfMatcher(ClaudeApiException.class));
            assertThat(cause.getMessage(), containsString("API key"));
        } finally {
            svc.shutdown();
        }
    }

    // --- helpers ---

    private static ClaudeSuggestionServiceImpl newServiceForGuardrails() {
        // We never let these tests reach the network — guardrails fail fast above
        // the HTTP layer. A dummy executor is fine.
        return new ClaudeSuggestionServiceImpl(
                new okhttp3.OkHttpClient(),
                new ObjectMapper(),
                java.util.concurrent.Executors.newSingleThreadExecutor(),
                /*maxConcurrent=*/ 1,
                /*ownsExecutor=*/ true);
    }

    private static Throwable futureCause(java.util.concurrent.CompletableFuture<?> f) {
        try {
            f.get(2, java.util.concurrent.TimeUnit.SECONDS);
            fail("expected future to fail");
            return null;
        } catch (java.util.concurrent.ExecutionException ee) {
            return ee.getCause();
        } catch (Exception e) {
            return e;
        }
    }

    @FunctionalInterface
    interface ThrowingRunnable {
        void run() throws Exception;
    }

    /**
     * Mimics JUnit5 / JUnit 4.13's assertThrows for our 4.12 baseline.
     */
    @SuppressWarnings("unchecked")
    private static <T extends Throwable> T expectThrows(Class<T> expected, ThrowingRunnable runnable) {
        try {
            runnable.run();
        } catch (Throwable t) {
            if (!expected.isInstance(t)) {
                fail("Expected " + expected.getName() + " but caught " + t.getClass().getName()
                        + ": " + t.getMessage());
            }
            return (T) t;
        }
        fail("Expected " + expected.getName() + " but nothing was thrown");
        return null; // unreachable
    }

    private static <T> org.hamcrest.Matcher<Object> instanceOfMatcher(Class<T> type) {
        return new org.hamcrest.BaseMatcher<>() {
            @Override
            public boolean matches(Object item) {
                return item != null && type.isInstance(item);
            }

            @Override
            public void describeTo(org.hamcrest.Description description) {
                description.appendText("instance of " + type.getName());
            }
        };
    }

    private static Situation stubSituation() {
        Alarm a = mock(Alarm.class);
        when(a.getId()).thenReturn("alarm-1");
        when(a.getTime()).thenReturn(1716000000000L); // 2024-05-18T03:00:00Z
        when(a.getSeverity()).thenReturn(Severity.MAJOR);
        when(a.getInventoryObjectType()).thenReturn("SnmpInterface");
        when(a.getInventoryObjectId()).thenReturn("GigabitEthernet 1/0/24");
        when(a.getSummary()).thenReturn("link down");
        when(a.getDescription()).thenReturn("Interface flapped 3x in last 30s");

        Situation s = mock(Situation.class);
        when(s.getId()).thenReturn("sit-42");
        when(s.getSeverity()).thenReturn(Severity.MAJOR);
        Set<Alarm> alarms = new HashSet<>();
        alarms.add(a);
        when(s.getAlarms()).thenReturn(alarms);
        assertNotNull(s);
        return s;
    }
}
