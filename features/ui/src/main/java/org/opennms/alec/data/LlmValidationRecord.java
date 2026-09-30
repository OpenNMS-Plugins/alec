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

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Optional;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * The endpoint/model/key combination that last passed "Validate key", as
 * written by the llm-suggestions bundle's validate endpoint
 * ({@code LlmValidationRecordStore}). Read-only on this side: the REST
 * endpoints that persist the LLM configuration and the engine choice compare
 * it against what is being saved to decide whether an LLM feature may be
 * enabled, so a configuration can only be "validated" by an actual probe —
 * never by the UI asserting it.
 * <p>
 * Only the SHA-256 of the key is recorded, so a changed key (or a cleared one)
 * no longer matches without a second copy of the secret existing anywhere.
 */
public final class LlmValidationRecord {

    private static final Logger LOG = LoggerFactory.getLogger(LlmValidationRecord.class);

    private final String baseUrl;
    private final String model;
    private final String apiKeyHash;

    LlmValidationRecord(String baseUrl, String model, String apiKeyHash) {
        this.baseUrl = normalizeUrl(baseUrl);
        this.model = model == null ? "" : model.trim();
        this.apiKeyHash = apiKeyHash == null ? "" : apiKeyHash;
    }

    /**
     * @return the persisted record, or empty when nothing has been validated
     *         yet or the record is malformed
     */
    public static Optional<LlmValidationRecord> read(KeyValueStore<String> kvStore, ObjectMapper objectMapper,
                                                     String context) {
        Optional<String> raw = kvStore.get(KeyEnum.LLM_VALIDATION.toString(), context);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        try {
            JsonNode node = objectMapper.readTree(raw.get());
            return Optional.of(new LlmValidationRecord(
                    node.path("baseUrl").asText(""),
                    node.path("model").asText(""),
                    node.path("apiKeyHash").asText("")));
        } catch (IOException e) {
            // The record carries no secret (a hash only), so the class name is
            // all that is worth logging.
            LOG.warn("Malformed LLM validation record: {}", e.getClass().getSimpleName());
            return Optional.empty();
        }
    }

    /**
     * @return true when {@code config} is exactly the combination that was
     *         validated: same endpoint (modulo trailing slashes), same model
     *         and the same key
     */
    public boolean matches(LlmConfig config) {
        if (config == null || apiKeyHash.isEmpty()) {
            return false;
        }
        return baseUrl.equals(normalizeUrl(config.getBaseUrl()))
                && model.equals(config.getModel() == null ? "" : config.getModel().trim())
                && apiKeyHash.equals(sha256(config.getApiKey()));
    }

    /** Convenience: is {@code config} validated according to the stored record? */
    public static boolean isValidated(KeyValueStore<String> kvStore, ObjectMapper objectMapper,
                                      String context, LlmConfig config) {
        return read(kvStore, objectMapper, context).map(r -> r.matches(config)).orElse(false);
    }

    /** Must match LlmValidationRecordStore#normalizeUrl in llm-suggestions. */
    static String normalizeUrl(String url) {
        String s = url == null ? "" : url.trim();
        while (s.endsWith("/")) {
            s = s.substring(0, s.length() - 1);
        }
        return s;
    }

    /** Must match LlmValidationRecordStore#sha256 in llm-suggestions. */
    public static String sha256(String value) {
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
