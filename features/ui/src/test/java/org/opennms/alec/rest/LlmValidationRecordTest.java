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

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.Test;
import org.opennms.alec.data.KeyEnum;
import org.opennms.alec.data.LlmConfig;
import org.opennms.alec.data.LlmConfigImpl;
import org.opennms.alec.data.LlmValidationRecord;
import org.opennms.integration.api.v1.distributed.KeyValueStore;

import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * ALEC-310: the validation record decides whether a configuration counts as
 * validated. It must match on endpoint (modulo trailing slash), model and the
 * key's hash — and nothing else.
 */
public class LlmValidationRecordTest {

    private static final String CTX = ALECRestUtils.ALEC_CONFIG;

    private final ObjectMapper mapper = new ObjectMapper();

    private static LlmConfig config(String url, String model, String key) {
        return LlmConfigImpl.newBuilder().baseUrl(url).model(model).apiKey(key).build();
    }

    @SuppressWarnings("unchecked")
    private KeyValueStore<String> storeWithRecord(String json) {
        KeyValueStore<String> kv = mock(KeyValueStore.class);
        when(kv.get(eq(KeyEnum.LLM_VALIDATION.toString()), eq(CTX)))
                .thenReturn(json == null ? Optional.empty() : Optional.of(json));
        return kv;
    }

    private static String record(String url, String model, String key) {
        return "{\"baseUrl\":\"" + url + "\",\"model\":\"" + model + "\",\"apiKeyHash\":\""
                + LlmValidationRecord.sha256(key) + "\",\"validatedAt\":1}";
    }

    @Test
    public void matchesTheExactValidatedCombination() {
        KeyValueStore<String> kv = storeWithRecord(record("http://10.0.0.137:8081/v1", "qwen3.5-4b", "sk-a"));
        assertThat(LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("http://10.0.0.137:8081/v1", "qwen3.5-4b", "sk-a")), is(true));
    }

    @Test
    public void trailingSlashOnTheEndpointDoesNotMatter() {
        KeyValueStore<String> kv = storeWithRecord(record("http://10.0.0.137:8081/v1", "qwen3.5-4b", "sk-a"));
        assertThat(LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("http://10.0.0.137:8081/v1/", "qwen3.5-4b", "sk-a")), is(true));
    }

    @Test
    public void aDifferentKeyModelOrEndpointIsNotValidated() {
        KeyValueStore<String> kv = storeWithRecord(record("http://10.0.0.137:8081/v1", "qwen3.5-4b", "sk-a"));
        assertThat("other key", LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("http://10.0.0.137:8081/v1", "qwen3.5-4b", "sk-b")), is(false));
        assertThat("other model", LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("http://10.0.0.137:8081/v1", "qwen3-14b", "sk-a")), is(false));
        assertThat("other endpoint", LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("https://api.openai.com/v1", "qwen3.5-4b", "sk-a")), is(false));
    }

    @Test
    public void aClearedKeyIsNeverValidated() {
        KeyValueStore<String> kv = storeWithRecord(record("http://10.0.0.137:8081/v1", "qwen3.5-4b", "sk-a"));
        assertThat(LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("http://10.0.0.137:8081/v1", "qwen3.5-4b", null)), is(false));
        assertThat(LlmValidationRecord.isValidated(kv, mapper, CTX,
                config("http://10.0.0.137:8081/v1", "qwen3.5-4b", "")), is(false));
    }

    @Test
    public void noRecordMalformedRecordOrNullConfigIsNotValidated() {
        assertThat(LlmValidationRecord.isValidated(storeWithRecord(null), mapper, CTX,
                config("u", "m", "k")), is(false));
        assertThat(LlmValidationRecord.isValidated(storeWithRecord("not json"), mapper, CTX,
                config("u", "m", "k")), is(false));
        assertThat(LlmValidationRecord.isValidated(storeWithRecord(record("u", "m", "k")), mapper, CTX,
                null), is(false));
    }

    @Test
    public void hashIsStableAndNeverTheKeyItself() {
        String h = LlmValidationRecord.sha256("sk-secret");
        assertThat(h.equals(LlmValidationRecord.sha256("sk-secret")), is(true));
        assertThat(h.length(), is(64));
        assertThat(h.contains("secret"), is(false));
    }
}
