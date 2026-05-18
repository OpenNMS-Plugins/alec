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

import java.util.Optional;
import java.util.concurrent.CompletableFuture;

import javax.ws.rs.core.Response;

import org.opennms.alec.data.ClaudeConfig;
import org.opennms.alec.data.ClaudeConfigImpl;
import org.opennms.alec.data.ClaudeConfigStatus;
import org.opennms.alec.data.KeyEnum;
import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ClaudeRestImpl implements ClaudeRest {

    private static final Logger LOG = LoggerFactory.getLogger(ClaudeRestImpl.class);

    private final ObjectMapper objectMapper;
    private final KeyValueStore<String> kvStore;

    public ClaudeRestImpl(KeyValueStore<String> kvStore) {
        this.kvStore = kvStore;
        this.objectMapper = new ObjectMapper();
    }

    @Override
    public Response getConfiguration() {
        LOG.debug("Get Claude configuration");
        try {
            ClaudeConfig persisted = readPersisted().orElse(null);
            return Response.ok().entity(ClaudeConfigStatus.from(persisted)).build();
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
    }

    @Override
    public Response setConfiguration(ClaudeConfig request) {
        // Never log the request object as-is — it carries the API key.
        // ClaudeConfigImpl#toString masks it, but defend in depth anyway.
        LOG.debug("Set Claude configuration: enabled={}, providingNewKey={}, clearApiKey={}",
                request != null && request.isEnabled(),
                request != null && request.getApiKey() != null && !request.getApiKey().isEmpty(),
                request != null && request.isClearApiKey());

        if (request == null) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Missing request body").build();
        }

        try {
            ClaudeConfig existing = readPersisted().orElse(null);
            ClaudeConfig merged = merge(existing, request);
            // Validation: enabling the feature requires a stored key.
            if (merged.isEnabled() && (merged.getApiKey() == null || merged.getApiKey().isEmpty())) {
                return Response.status(Response.Status.BAD_REQUEST)
                        .entity("Cannot enable Claude integration without an API key")
                        .build();
            }
            persist(merged);
            return Response.ok().entity(ClaudeConfigStatus.from(merged)).build();
        } catch (JsonProcessingException e) {
            return ALECRestUtils.somethingWentWrong(e);
        }
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
     * </ul>
     */
    static ClaudeConfig merge(ClaudeConfig existing, ClaudeConfig request) {
        ClaudeConfigImpl.Builder builder = ClaudeConfigImpl.newBuilder();

        if (request.isClearApiKey()) {
            // Clearing the key disables Claude but preserves the user's
            // autoEvaluate preference so re-enabling later doesn't surprise
            // them with a different default.
            return builder
                    .enabled(false)
                    .autoEvaluate(request.isAutoEvaluate())
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
        return builder.build();
    }

    private Optional<ClaudeConfig> readPersisted() throws JsonProcessingException {
        Optional<String> raw = kvStore.get(KeyEnum.CLAUDE_CONFIG.toString(), ALECRestUtils.ALEC_CONFIG);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        return Optional.of(objectMapper.readValue(raw.get(), ClaudeConfigImpl.class));
    }

    private void persist(ClaudeConfig config) throws JsonProcessingException {
        CompletableFuture<Long> future = kvStore.putAsync(KeyEnum.CLAUDE_CONFIG.toString(),
                objectMapper.writeValueAsString(config),
                ALECRestUtils.ALEC_CONFIG);
        future.join();
    }
}
