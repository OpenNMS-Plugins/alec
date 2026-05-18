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

public class ClaudeConfigImpl implements ClaudeConfig {

    private final boolean enabled;
    private final String apiKey;
    private final boolean clearApiKey;

    private ClaudeConfigImpl(Builder builder) {
        this.enabled = builder.enabled;
        this.apiKey = builder.apiKey;
        this.clearApiKey = builder.clearApiKey;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(ClaudeConfig copy) {
        Builder builder = new Builder();
        builder.enabled = copy.isEnabled();
        builder.apiKey = copy.getApiKey();
        builder.clearApiKey = copy.isClearApiKey();
        return builder;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
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
        private String apiKey;
        private boolean clearApiKey;

        private Builder() {
        }

        public Builder enabled(boolean val) {
            enabled = val;
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

        public ClaudeConfigImpl build() {
            return new ClaudeConfigImpl(this);
        }
    }

    @Override
    public String toString() {
        // Never include apiKey in toString — it ends up in log lines.
        return new StringJoiner(", ", ClaudeConfigImpl.class.getSimpleName() + "[", "]")
                .add("enabled=" + enabled)
                .add("apiKeyPresent=" + (apiKey != null && !apiKey.isEmpty()))
                .add("clearApiKey=" + clearApiKey)
                .toString();
    }
}
