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
 * GET response shape for the Claude configuration endpoint.
 *
 * Deliberately separate from {@link ClaudeConfig} so the actual API key value
 * cannot accidentally be serialized into a response — only its presence is
 * reported.
 */
@JsonPropertyOrder({"enabled", "autoEvaluate", "apiKeyPresent"})
public class ClaudeConfigStatus {

    private final boolean enabled;
    private final boolean autoEvaluate;
    private final boolean apiKeyPresent;

    public ClaudeConfigStatus(boolean enabled, boolean autoEvaluate, boolean apiKeyPresent) {
        this.enabled = enabled;
        this.autoEvaluate = autoEvaluate;
        this.apiKeyPresent = apiKeyPresent;
    }

    public static ClaudeConfigStatus from(ClaudeConfig config) {
        if (config == null) {
            // Auto-evaluate defaults to true so a user enabling Claude for the
            // first time gets the automatic-suggestions-on-new-situations
            // behavior without an extra checkbox click.
            return new ClaudeConfigStatus(false, true, false);
        }
        String key = config.getApiKey();
        return new ClaudeConfigStatus(
                config.isEnabled(),
                config.isAutoEvaluate(),
                key != null && !key.isEmpty());
    }

    public boolean isEnabled() {
        return enabled;
    }

    public boolean isAutoEvaluate() {
        return autoEvaluate;
    }

    public boolean isApiKeyPresent() {
        return apiKeyPresent;
    }
}
