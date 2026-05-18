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
 * Persisted + POST-body form of the Claude integration configuration.
 *
 * The apiKey field is the actual secret. It travels server&rarr;KV-store
 * and client&rarr;server (POST), but is never written into a GET response —
 * the REST layer projects to {@link ClaudeConfigStatus} on the way out so
 * the key never leaves the OpenNMS host once stored.
 *
 * clearApiKey is a transient POST-only flag that asks the server to wipe any
 * persisted key; it is not persisted itself.
 */
@JsonDeserialize(builder = ClaudeConfigImpl.Builder.class)
@JsonPropertyOrder({"enabled", "apiKey", "clearApiKey"})
public interface ClaudeConfig {
    boolean isEnabled();

    String getApiKey();

    boolean isClearApiKey();
}
