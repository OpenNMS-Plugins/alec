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

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

/**
 * Records which endpoint/model/key combination last passed "Validate key".
 * <p>
 * The record is the server's own memory of a successful probe — the UI cannot
 * assert it. The configuration endpoint (features/ui, {@code LlmRestImpl}) and
 * the engine endpoint compare the record against the configuration being saved
 * to decide whether the LLM features may be enabled. The key itself is never
 * stored here: only its SHA-256, enough to tell "the key that was validated"
 * from "some other key" without keeping a second copy of the secret.
 */
public class LlmValidationRecordStore {

    // Magic strings — must match KeyEnum.LLM_VALIDATION#toString() and
    // ALECRestUtils.ALEC_CONFIG in the features/ui bundle (see LlmConfigReader
    // for the same arrangement with the config record).
    static final String RECORD_KEY = "LLM_VALIDATION";
    static final String RECORD_CONTEXT = "ALEC_CONFIG";

    private static final Logger LOG = LoggerFactory.getLogger(LlmValidationRecordStore.class);

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;

    public LlmValidationRecordStore(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    /**
     * Remember that {@code baseUrl}/{@code model}/{@code apiKey} passed a probe.
     * Replaces any previous record: exactly one combination is "validated".
     */
    public void record(String baseUrl, String model, String apiKey) {
        ObjectNode node = objectMapper.createObjectNode();
        node.put("baseUrl", normalizeUrl(baseUrl));
        node.put("model", model == null ? "" : model.trim());
        node.put("apiKeyHash", sha256(apiKey));
        node.put("validatedAt", System.currentTimeMillis());
        try {
            kvStore.putAsync(RECORD_KEY, objectMapper.writeValueAsString(node), RECORD_CONTEXT).join();
        } catch (JsonProcessingException e) {
            // Nothing in the node is user-controlled free text except the URL
            // and model id, so the message is safe to log.
            LOG.warn("Could not persist the LLM validation record: {}", e.getOriginalMessage());
        }
    }

    /** Endpoint normalization for the record: trim + drop trailing slashes. */
    static String normalizeUrl(String url) {
        String s = url == null ? "" : url.trim();
        while (s.endsWith("/")) {
            s = s.substring(0, s.length() - 1);
        }
        return s;
    }

    /** Hex SHA-256 of the key; "" for a blank key. Must match features/ui. */
    static String sha256(String value) {
        if (value == null || value.isEmpty()) {
            return "";
        }
        try {
            byte[] digest = MessageDigest.getInstance("SHA-256")
                    .digest(value.getBytes(StandardCharsets.UTF_8));
            StringBuilder hex = new StringBuilder(digest.length * 2);
            for (byte b : digest) {
                hex.append(String.format("%02x", b));
            }
            return hex.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException("SHA-256 is mandatory on every JVM", e);
        }
    }
}
