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

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

/**
 * Outcome of a connectivity/credential check against the configured LLM
 * endpoint. {@code ok=true} means the provider accepted a probe request with
 * the given endpoint, model and key. {@code message} is human-readable and
 * safe to show in the UI — it never contains the API key.
 */
@JsonPropertyOrder({"ok", "message"})
public class ValidationResult {

    private final boolean ok;
    private final String message;

    public ValidationResult(boolean ok, String message) {
        this.ok = ok;
        this.message = message;
    }

    public static ValidationResult ok(String message) {
        return new ValidationResult(true, message);
    }

    public static ValidationResult fail(String message) {
        return new ValidationResult(false, message);
    }

    public boolean isOk() {
        return ok;
    }

    public String getMessage() {
        return message;
    }
}
