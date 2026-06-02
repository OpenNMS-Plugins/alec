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

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

/**
 * GET response shape for the LLM configuration endpoint.
 *
 * Deliberately separate from {@link LlmConfig} so the actual API key value
 * cannot accidentally be serialized into a response — only its presence is
 * reported.
 */
@JsonPropertyOrder({"enabled", "autoEvaluate", "baseUrl", "model", "apiKeyPresent"})
public class LlmConfigStatus {

    private final boolean enabled;
    private final boolean autoEvaluate;
    private final String baseUrl;
    private final String model;
    private final boolean apiKeyPresent;

    public LlmConfigStatus(boolean enabled, boolean autoEvaluate, String baseUrl, String model,
                           boolean apiKeyPresent) {
        this.enabled = enabled;
        this.autoEvaluate = autoEvaluate;
        this.baseUrl = baseUrl;
        this.model = model;
        this.apiKeyPresent = apiKeyPresent;
    }

    public static LlmConfigStatus from(LlmConfig config) {
        if (config == null) {
            // Auto-evaluate defaults to true so a user enabling the integration
            // for the first time gets the automatic-suggestions-on-new-situations
            // behavior without an extra checkbox click. baseUrl/model surface the
            // defaults so the config form can pre-populate them.
            return new LlmConfigStatus(false, true,
                    LlmConfigImpl.DEFAULT_BASE_URL, LlmConfigImpl.DEFAULT_MODEL, false);
        }
        String key = config.getApiKey();
        return new LlmConfigStatus(
                config.isEnabled(),
                config.isAutoEvaluate(),
                config.getBaseUrl(),
                config.getModel(),
                key != null && !key.isEmpty());
    }

    public boolean isEnabled() {
        return enabled;
    }

    public boolean isAutoEvaluate() {
        return autoEvaluate;
    }

    public String getBaseUrl() {
        return baseUrl;
    }

    public String getModel() {
        return model;
    }

    public boolean isApiKeyPresent() {
        return apiKeyPresent;
    }
}
