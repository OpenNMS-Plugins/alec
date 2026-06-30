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

package org.opennms.alec.rest;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.ChatRequest;
import org.opennms.alec.data.ChatResponse;
import org.opennms.alec.data.LlmConfig;
import org.opennms.alec.data.LlmConfigImpl;
import org.opennms.alec.data.LlmConfigStatus;
import org.opennms.alec.data.KeyEnum;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

public class LlmRestImpl implements LlmRest {

    private static final Logger LOG = LoggerFactory.getLogger(LlmRestImpl.class);

    private static final String CHAT_COMPLETIONS_PATH = "/chat/completions";
    private static final String CHAT_SYSTEM_PROMPT =
            "You are an OpenNMS monitoring assistant embedded in the OpenNMS web interface. "
            + "Answer concisely and focus on the operational context the user has provided. "
            + "When the user asks about nodes, alarms, or situations, use the page context "
            + "to give a relevant answer. If you are unsure, say so.";
    private static final int CHAT_MAX_TOKENS = 1024;

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;
    private final HttpClient httpClient;

    public LlmRestImpl(KeyValueStore<String> kvStore) {
        this.kvStore = kvStore;
        this.objectMapper = new ObjectMapper();
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
    }

    @Override
    public Response getConfiguration() {
        LOG.debug("Get LLM configuration");
        try {
            LlmConfig persisted = readPersisted().orElse(null);
            return Response.ok().entity(LlmConfigStatus.from(persisted)).build();
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response setConfiguration(LlmConfig request) {
        // Never log the request object as-is — it carries the API key.
        // LlmConfigImpl#toString masks it, but defend in depth anyway.
        LOG.debug("Set LLM configuration: enabled={}, providingNewKey={}, clearApiKey={}",
                request != null && request.isEnabled(),
                request != null && request.getApiKey() != null && !request.getApiKey().isEmpty(),
                request != null && request.isClearApiKey());

        if (request == null) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Missing request body").build();
        }

        try {
            LlmConfig existing = readPersisted().orElse(null);
            LlmConfig merged = merge(existing, request);
            // Validation: enabling the feature requires a stored key.
            if (merged.isEnabled() && (merged.getApiKey() == null || merged.getApiKey().isEmpty())) {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity("Cannot enable LLM integration without an API key")
                        .build();
            }
            persist(merged);
            return Response.ok().entity(LlmConfigStatus.from(merged)).build();
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response chat(ChatRequest request) {
        if (request == null || request.getQuestion() == null || request.getQuestion().isBlank()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Missing question").build();
        }
        LlmConfig config;
        try {
            config = readPersisted().orElse(null);
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
        if (config == null || !config.isEnabled()
                || config.getApiKey() == null || config.getApiKey().isEmpty()) {
            return Response.status(Response.Status.SERVICE_UNAVAILABLE)
                    .entity("LLM is not configured or not enabled. "
                            + "Configure it under Plugins → ALEC → LLM Setup.")
                    .build();
        }

        String model = config.getModel() != null && !config.getModel().isEmpty()
                ? config.getModel() : "gpt-4o-mini";
        String baseUrl = config.getBaseUrl() != null && !config.getBaseUrl().isEmpty()
                ? config.getBaseUrl() : "https://api.openai.com/v1";
        String url = baseUrl.endsWith("/")
                ? baseUrl.substring(0, baseUrl.length() - 1) + CHAT_COMPLETIONS_PATH
                : baseUrl + CHAT_COMPLETIONS_PATH;

        try {
            String body = buildChatBody(model, request.getQuestion(), request.getPageContext());
            HttpRequest httpReq = HttpRequest.newBuilder()
                    .uri(URI.create(url))
                    .timeout(Duration.ofSeconds(60))
                    .header("Authorization", "Bearer " + config.getApiKey())
                    .header("Content-Type", "application/json")
                    .header("X-Title", "OpenNMS ALEC")
                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();
            HttpResponse<String> resp = httpClient.send(httpReq, HttpResponse.BodyHandlers.ofString());
            if (resp.statusCode() < 200 || resp.statusCode() >= 300) {
                LOG.warn("LLM chat returned HTTP {}", resp.statusCode());
                return Response.status(Response.Status.BAD_GATEWAY)
                        .entity("LLM provider returned HTTP " + resp.statusCode()).build();
            }
            String answer = extractAnswer(resp.body());
            return Response.ok().entity(new ChatResponse(answer)).build();
        } catch (IOException | InterruptedException e) {
            LOG.warn("LLM chat request failed", e);
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    private String buildChatBody(String model, String question, String pageContext) throws IOException {
        ObjectNode root = objectMapper.createObjectNode();
        root.put("model", model);
        root.put("max_tokens", CHAT_MAX_TOKENS);
        ArrayNode messages = root.putArray("messages");
        messages.addObject().put("role", "system").put("content", CHAT_SYSTEM_PROMPT);
        String userContent = (pageContext != null && !pageContext.isBlank())
                ? "Page context: " + pageContext + "\n\n" + question
                : question;
        messages.addObject().put("role", "user").put("content", userContent);
        return objectMapper.writeValueAsString(root);
    }

    private String extractAnswer(String responseBody) throws IOException {
        JsonNode root = objectMapper.readTree(responseBody);
        JsonNode content = root.path("choices").path(0).path("message").path("content");
        return content.isMissingNode() ? "(no response)" : content.asText();
    }

    /**
     * Merge a POST request onto the persisted record. Rules:
     * <ul>
     *   <li>{@code clearApiKey=true} wipes the stored key (and forces enabled=false).</li>
     *   <li>A non-empty {@code apiKey} in the request replaces the stored key.</li>
     *   <li>An empty/null {@code apiKey} leaves the stored key untouched — UI can
     *       toggle the enabled flag without re-sending the secret.</li>
     *   <li>{@code autoEvaluate} is carried through from the request (the UI
     *       always sends the current checkbox state, so we trust it directly).</li>
     *   <li>{@code baseUrl} and {@code model} are likewise carried through from
     *       the request, persisted as-is (blank stays blank — no shipped default).</li>
     *   <li>{@code defaultBaseUrl} and {@code defaultModel} (the operator's
     *       recorded per-field defaults, set via the UI's "Set as default") are
     *       carried through from the request as well.</li>
     * </ul>
     */
    static LlmConfig merge(LlmConfig existing, LlmConfig request) {
        LlmConfigImpl.Builder builder = LlmConfigImpl.newBuilder();

        if (request.isClearApiKey()) {
            // Clearing the key disables the integration but preserves the user's
            // autoEvaluate / endpoint / model preferences (and recorded defaults)
            // so re-enabling later doesn't surprise them.
            return builder
                    .enabled(false)
                    .autoEvaluate(request.isAutoEvaluate())
                    .baseUrl(request.getBaseUrl())
                    .model(request.getModel())
                    .defaultBaseUrl(request.getDefaultBaseUrl())
                    .defaultModel(request.getDefaultModel())
                    .systemPrompt(request.getSystemPrompt())
                    .dailyTokenLimit(request.getDailyTokenLimit())
                    .monthlyTokenLimit(request.getMonthlyTokenLimit())
                    .apiKey(null)
                    .build();
        }

        String requestKey = request.getApiKey();
        if (requestKey != null && !requestKey.isEmpty()) {
            builder.apiKey(requestKey);
        } else if (existing != null) {
            builder.apiKey(existing.getApiKey());
        }
        builder.enabled(request.isEnabled());
        builder.autoEvaluate(request.isAutoEvaluate());
        // baseUrl/model/defaults/systemPrompt/token-limits come straight from the
        // request — the UI always submits the current form values.
        builder.baseUrl(request.getBaseUrl());
        builder.model(request.getModel());
        builder.defaultBaseUrl(request.getDefaultBaseUrl());
        builder.defaultModel(request.getDefaultModel());
        builder.systemPrompt(request.getSystemPrompt());
        builder.dailyTokenLimit(request.getDailyTokenLimit());
        builder.monthlyTokenLimit(request.getMonthlyTokenLimit());
        return builder.build();
    }

    private Optional<LlmConfig> readPersisted() throws JsonProcessingException {
        Optional<String> raw = kvStore.get(KeyEnum.LLM_CONFIG.toString(), ALECRestUtils.ALEC_CONFIG);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(objectMapper.readValue(raw.get(), LlmConfigImpl.class));
    }

    private void persist(LlmConfig config) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.LLM_CONFIG.toString(),
                objectMapper.writeValueAsString(config),
                ALECRestUtils.ALEC_CONFIG);
        future.join();
    }
}
