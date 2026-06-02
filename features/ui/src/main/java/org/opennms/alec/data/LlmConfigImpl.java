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

package org.opennms.alec.data;

import java.util.StringJoiner;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class LlmConfigImpl implements LlmConfig {

    /**
     * Defaults must stay in sync with LlmConfigReader in the llm-suggestions
     * bundle. OpenRouter speaks the OpenAI-compatible wire format and routes to
     * a Claude model by default.
     */
    public static final String DEFAULT_BASE_URL = "https://openrouter.ai/api/v1";
    public static final String DEFAULT_MODEL = "anthropic/claude-sonnet-4.6";

    private final boolean enabled;
    private final boolean autoEvaluate;
    private final String baseUrl;
    private final String model;
    private final String apiKey;
    private final boolean clearApiKey;

    private LlmConfigImpl(Builder builder) {
        this.enabled = builder.enabled;
        this.autoEvaluate = builder.autoEvaluate;
        this.baseUrl = builder.baseUrl;
        this.model = builder.model;
        this.apiKey = builder.apiKey;
        this.clearApiKey = builder.clearApiKey;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(LlmConfig copy) {
        Builder builder = new Builder();
        builder.enabled = copy.isEnabled();
        builder.autoEvaluate = copy.isAutoEvaluate();
        builder.baseUrl = copy.getBaseUrl();
        builder.model = copy.getModel();
        builder.apiKey = copy.getApiKey();
        builder.clearApiKey = copy.isClearApiKey();
        return builder;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }

    @Override
    public boolean isAutoEvaluate() {
        return autoEvaluate;
    }

    @Override
    public String getBaseUrl() {
        return baseUrl;
    }

    @Override
    public String getModel() {
        return model;
    }

    @Override
    public String getApiKey() {
        return apiKey;
    }

    @Override
    public boolean isClearApiKey() {
        return clearApiKey;
    }

    @JsonPOJOBuilder(withPrefix = "")
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private boolean enabled;
        /**
         * Default true so existing config records (persisted before the field
         * was added) keep their previous behavior — auto-evaluate every new
         * situation. Jackson would otherwise initialize this to false and
         * silently flip every existing installation into manual-only mode on
         * the first deserialization.
         */
        private boolean autoEvaluate = true;
        // Default so config records persisted before these fields existed (and
        // POST bodies that omit them) resolve to the OpenRouter + Claude target
        // rather than null.
        private String baseUrl = DEFAULT_BASE_URL;
        private String model = DEFAULT_MODEL;
        private String apiKey;
        private boolean clearApiKey;

        private Builder() {
        }

        public Builder enabled(boolean val) {
            enabled = val;
            return this;
        }

        public Builder autoEvaluate(boolean val) {
            autoEvaluate = val;
            return this;
        }

        public Builder baseUrl(String val) {
            // Treat blank as "use the default" so the UI clearing the field
            // doesn't persist an empty endpoint.
            baseUrl = (val == null || val.trim().isEmpty()) ? DEFAULT_BASE_URL : val.trim();
            return this;
        }

        public Builder model(String val) {
            model = (val == null || val.trim().isEmpty()) ? DEFAULT_MODEL : val.trim();
            return this;
        }

        public Builder apiKey(String val) {
            apiKey = val;
            return this;
        }

        public Builder clearApiKey(boolean val) {
            clearApiKey = val;
            return this;
        }

        public LlmConfigImpl build() {
            return new LlmConfigImpl(this);
        }
    }

    @Override
    public String toString() {
        // Never include apiKey in toString — it ends up in log lines.
        return new StringJoiner(", ", LlmConfigImpl.class.getSimpleName() + "[", "]")
                .add("enabled=" + enabled)
                .add("autoEvaluate=" + autoEvaluate)
                .add("baseUrl=" + baseUrl)
                .add("model=" + model)
                .add("apiKeyPresent=" + (apiKey != null && !apiKey.isEmpty()))
                .add("clearApiKey=" + clearApiKey)
                .toString();
    }
}
