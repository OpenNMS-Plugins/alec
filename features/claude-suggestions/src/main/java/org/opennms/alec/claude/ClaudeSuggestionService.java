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

import java.util.concurrent.CompletableFuture;

import org.opennms.alec.datasource.api.Situation;

/**
 * Asks Claude for diagnostic suggestions about a given Situation.
 *
 * Implementations must be non-blocking from the caller's perspective —
 * situation creation cannot wait on a multi-second LLM round-trip. The
 * returned future completes exceptionally on network errors, HTTP errors,
 * rate-limit rejections, or malformed responses.
 */
public interface ClaudeSuggestionService {

    /**
     * Submit a suggestion request for the given situation.
     *
     * @param situation the situation to analyze
     * @param apiKey    the Anthropic API key (server-side, never logged)
     * @return future completing with the suggestions, or completing
     *         exceptionally on any failure
     */
    CompletableFuture<Suggestions> requestSuggestions(Situation situation, String apiKey);
}
