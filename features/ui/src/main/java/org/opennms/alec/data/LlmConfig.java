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
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * Persisted + POST-body form of the LLM integration configuration.
 *
 * The apiKey field is the actual secret. It travels server&rarr;KV-store
 * and client&rarr;server (POST), but is never written into a GET response —
 * the REST layer projects to {@link LlmConfigStatus} on the way out so
 * the key never leaves the OpenNMS host once stored.
 *
 * clearApiKey is a transient POST-only flag that asks the server to wipe any
 * persisted key; it is not persisted itself.
 */
@JsonDeserialize(builder = LlmConfigImpl.Builder.class)
@JsonPropertyOrder({"enabled", "autoEvaluate", "baseUrl", "model", "apiKey", "clearApiKey"})
public interface LlmConfig {
    boolean isEnabled();

    /**
     * When true (the default), the SituationHandler fires an LLM analysis
     * automatically for every new situation. When false, no automatic
     * analysis runs — the user must click the Re-evaluate button on the AI
     * Suggestions tab to trigger one per situation.
     */
    boolean isAutoEvaluate();

    /**
     * OpenAI-compatible API base URL the suggestion client posts to (it appends
     * {@code /chat/completions}). Defaults to OpenRouter. Lets operators point
     * at OpenAI, Anthropic's compatibility endpoint, a local model server, etc.
     */
    String getBaseUrl();

    /**
     * Model identifier to request, e.g. {@code anthropic/claude-sonnet-4.6} or
     * {@code openai/gpt-4o}. The exact form depends on the chosen provider.
     */
    String getModel();

    String getApiKey();

    boolean isClearApiKey();
}
