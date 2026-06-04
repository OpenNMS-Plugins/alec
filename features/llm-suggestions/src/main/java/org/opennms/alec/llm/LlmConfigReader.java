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

package org.opennms.alec.llm;

import java.io.IOException;
import java.util.Objects;
import java.util.Optional;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Bundle-local reader for the slice-1 LLM config record persisted by
 * features/ui at context {@value #CONFIG_CONTEXT} key {@value #CONFIG_KEY}.
 *
 * Kept deliberately thin (just the two fields we need) so this bundle does
 * not depend on features/ui — that would create a cycle, since features/ui
 * will eventually want to depend on this bundle for the suggestions REST
 * endpoint.
 *
 * Reads fresh from the KV store on every call. The config can change at
 * runtime via the REST endpoint, and any caching here would mean a stale
 * "enabled" flag could keep firing requests against a revoked API key.
 */
public class LlmConfigReader {

    // Magic strings — must match KeyEnum.LLM_CONFIG#toString() and
    // ALECRestUtils.ALEC_CONFIG in the features/ui bundle. If those change,
    // the corresponding constants here must change in lockstep.
    static final String CONFIG_KEY = "LLM_CONFIG";
    static final String CONFIG_CONTEXT = "ALEC_CONFIG";

    // Defaults applied when a persisted config leaves baseUrl/model blank.
    // OpenRouter speaks the OpenAI-compatible wire format and can route to a
    // Claude model out of the box. Must match the defaults in features/ui
    // LlmConfigImpl.
    static final String DEFAULT_BASE_URL = "https://openrouter.ai/api/v1";
    static final String DEFAULT_MODEL = "anthropic/claude-sonnet-4.6";

    private static final Logger LOG = LoggerFactory.getLogger(LlmConfigReader.class);

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;

    public LlmConfigReader(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    /**
     * @return the current config, or empty if no config has been written yet
     *         or the persisted record is malformed
     */
    public Optional<Config> read() {
        Optional<String> raw = kvStore.get(CONFIG_KEY, CONFIG_CONTEXT);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        try {
            JsonNode node = objectMapper.readTree(raw.get());
            boolean enabled = node.path("enabled").asBoolean(false);
            // Older config records (persisted before the field was added)
            // default autoEvaluate to true so they keep the original automatic
            // behavior. Explicit false in the JSON disables auto-eval.
            boolean autoEvaluate = node.path("autoEvaluate").asBoolean(true);
            String apiKey = node.path("apiKey").asText("");
            String baseUrl = blankToDefault(node.path("baseUrl").asText(""), DEFAULT_BASE_URL);
            String model = blankToDefault(node.path("model").asText(""), DEFAULT_MODEL);
            // Older config records (persisted before the prompt was configurable)
            // leave this blank; fall back to the built-in default.
            String systemPrompt = blankToDefault(node.path("systemPrompt").asText(""),
                    LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT);
            return Optional.of(new Config(enabled, autoEvaluate, apiKey, baseUrl, model, systemPrompt));
        } catch (IOException e) {
            LOG.warn("Malformed LLM config at {}/{}: {}", CONFIG_CONTEXT, CONFIG_KEY, e.getMessage());
            return Optional.empty();
        }
    }

    private static String blankToDefault(String value, String fallback) {
        return value == null || value.trim().isEmpty() ? fallback : value.trim();
    }

    /** Snapshot of the fields the handler cares about. */
    public static final class Config {
        private final boolean enabled;
        private final boolean autoEvaluate;
        private final String apiKey;
        private final String baseUrl;
        private final String model;
        private final String systemPrompt;

        public Config(boolean enabled, boolean autoEvaluate, String apiKey, String baseUrl, String model,
                      String systemPrompt) {
            this.enabled = enabled;
            this.autoEvaluate = autoEvaluate;
            this.apiKey = apiKey == null ? "" : apiKey;
            this.baseUrl = blankToDefault(baseUrl, DEFAULT_BASE_URL);
            this.model = blankToDefault(model, DEFAULT_MODEL);
            this.systemPrompt = blankToDefault(systemPrompt,
                    LlmSuggestionServiceImpl.DEFAULT_SYSTEM_PROMPT);
        }

        public boolean isEnabled() {
            return enabled;
        }

        /**
         * When false, {@link LlmSituationHandler#onSituation} short-
         * circuits — no automatic analysis on new situations. The Re-evaluate
         * REST path bypasses this flag intentionally.
         */
        public boolean isAutoEvaluate() {
            return autoEvaluate;
        }

        public String getApiKey() {
            return apiKey;
        }

        public boolean hasApiKey() {
            return !apiKey.isEmpty();
        }

        /** OpenAI-compatible API base URL, never blank (falls back to default). */
        public String getBaseUrl() {
            return baseUrl;
        }

        /** Model identifier to request, never blank (falls back to default). */
        public String getModel() {
            return model;
        }

        /** System prompt framing the analysis, never blank (falls back to default). */
        public String getSystemPrompt() {
            return systemPrompt;
        }

        @Override
        public String toString() {
            // Never include the API key in toString — it ends up in log lines.
            return "Config[enabled=" + enabled
                    + ", autoEvaluate=" + autoEvaluate
                    + ", apiKeyPresent=" + hasApiKey()
                    + ", baseUrl=" + baseUrl
                    + ", model=" + model + "]";
        }
    }
}
