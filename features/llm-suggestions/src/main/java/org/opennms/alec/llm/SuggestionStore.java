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

import java.io.IOException;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import org.opennms.integration.api.v1.distributed.KeyValueStore;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Persistence wrapper around {@link KeyValueStore} for {@link SuggestionRecord}s.
 *
 * <ul>
 *   <li>Context: {@link #CONTEXT} — keyed by situation id.</li>
 *   <li>Status writes are idempotent: putReady/putFailed simply overwrite
 *       whatever was there. Callers must read first if they want to detect
 *       a stale write.</li>
 *   <li>{@link #pruneOlderThan(long)} scans the context and deletes records
 *       whose {@code requestedAt} is older than the cutoff. Used by
 *       {@link SuggestionPruner}.</li>
 * </ul>
 */
public class SuggestionStore {

    public static final String CONTEXT = "ALEC_LLM_SUGGESTIONS";

    private static final Logger LOG = LoggerFactory.getLogger(SuggestionStore.class);

    private final KeyValueStore<String> kvStore;
    private final ObjectMapper objectMapper;

    public SuggestionStore(KeyValueStore<String> kvStore, ObjectMapper objectMapper) {
        this.kvStore = Objects.requireNonNull(kvStore);
        this.objectMapper = Objects.requireNonNull(objectMapper);
    }

    public void putPending(String situationId, long requestedAt, String model) {
        SuggestionRecord record = SuggestionRecord.newBuilder()
                .situationId(situationId)
                .status(SuggestionRecord.STATUS_PENDING)
                .rootCauses(Collections.emptyList())
                .resolutions(Collections.emptyList())
                .requestedAt(requestedAt)
                .model(model)
                .build();
        write(situationId, record);
    }

    public void putReady(String situationId, long requestedAt, long completedAt,
                         String model, List<String> rootCauses, List<String> resolutions) {
        SuggestionRecord record = SuggestionRecord.newBuilder()
                .situationId(situationId)
                .status(SuggestionRecord.STATUS_READY)
                .rootCauses(rootCauses)
                .resolutions(resolutions)
                .requestedAt(requestedAt)
                .completedAt(completedAt)
                .model(model)
                .build();
        write(situationId, record);
    }

    public void putFailed(String situationId, long requestedAt, long completedAt,
                          String model, String error) {
        SuggestionRecord record = SuggestionRecord.newBuilder()
                .situationId(situationId)
                .status(SuggestionRecord.STATUS_FAILED)
                .rootCauses(Collections.emptyList())
                .resolutions(Collections.emptyList())
                .requestedAt(requestedAt)
                .completedAt(completedAt)
                .model(model)
                .error(error)
                .build();
        write(situationId, record);
    }

    public Optional<SuggestionRecord> get(String situationId) {
        Optional<String> raw = kvStore.get(situationId, CONTEXT);
        if (raw.isEmpty()) {
            return Optional.empty();
        }
        try {
            return Optional.of(objectMapper.readValue(raw.get(), SuggestionRecord.class));
        } catch (IOException e) {
            // Malformed record (e.g. schema mismatch from an older bundle version). Don't
            // crash the engine — drop it so the next save replaces it cleanly.
            LOG.warn("Failed to parse suggestion record for {}; dropping: {}", situationId, e.getMessage());
            kvStore.delete(situationId, CONTEXT);
            return Optional.empty();
        }
    }

    /**
     * Delete all records whose {@code requestedAt} is strictly older than the cutoff.
     *
     * @return number of records deleted
     */
    public int pruneOlderThan(long cutoffMillis) {
        Map<String, String> all = kvStore.enumerateContext(CONTEXT);
        if (all == null || all.isEmpty()) {
            return 0;
        }
        int deleted = 0;
        for (Map.Entry<String, String> entry : all.entrySet()) {
            try {
                SuggestionRecord record = objectMapper.readValue(entry.getValue(), SuggestionRecord.class);
                if (record.getRequestedAt() < cutoffMillis) {
                    kvStore.delete(entry.getKey(), CONTEXT);
                    deleted++;
                }
            } catch (IOException e) {
                // Unparseable record. Treat it the same way get() does — drop it.
                LOG.warn("Pruner dropping unparseable record at key {}: {}", entry.getKey(), e.getMessage());
                kvStore.delete(entry.getKey(), CONTEXT);
                deleted++;
            }
        }
        return deleted;
    }

    private void write(String situationId, SuggestionRecord record) {
        try {
            kvStore.put(situationId, objectMapper.writeValueAsString(record), CONTEXT);
        } catch (JsonProcessingException e) {
            // Shouldn't happen — record is fully built and serializable. Log and continue.
            LOG.error("Failed to serialize suggestion record for {}: {}", situationId, e.getMessage(), e);
        }
    }
}
