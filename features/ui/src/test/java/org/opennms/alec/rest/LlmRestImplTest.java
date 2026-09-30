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

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.junit.Assert.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.data.LlmConfig;
import org.opennms.alec.data.LlmConfigImpl;

@RunWith(JUnit4.class)
public class LlmRestImplTest {

    @Test
    public void mergeAcceptsNewKeyWhenNoneExisted() {
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-new")
                .build();
        LlmConfig merged = LlmRestImpl.merge(null, request);
        assertThat(merged.isEnabled(), is(true));
        assertThat(merged.getApiKey(), equalTo("sk-new"));
    }

    @Test
    public void mergePreservesExistingKeyWhenRequestKeyIsEmpty() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat("toggling enabled must not require resending the key",
                merged.getApiKey(), equalTo("sk-existing"));
        assertThat(merged.isEnabled(), is(false));
    }

    @Test
    public void mergePreservesExistingKeyWhenRequestKeyIsBlankString() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), equalTo("sk-existing"));
    }

    @Test
    public void mergeReplacesExistingKeyWhenRequestProvidesNewOne() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-new")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), equalTo("sk-new"));
        assertThat(merged.isEnabled(), is(true));
    }

    @Test
    public void mergeWithClearApiKeyWipesKeyAndForcesDisabled() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .build();
        // clearApiKey wins even if the request also tries to enable + supply a key.
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-attempted-new")
                .clearApiKey(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), is(nullValue()));
        assertThat(merged.isEnabled(), is(false));
    }

    @Test
    public void mergePartialRequestPreservesEndpointModelAndPrompt() {
        // A partial POST like {"enabled":true} must not silently wipe the
        // stored endpoint/model/prompt/defaults.
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(false)
                .apiKey("sk-existing")
                .baseUrl("https://api.example/v1")
                .model("some/model")
                .defaultBaseUrl("https://default.example/v1")
                .defaultModel("default/model")
                .systemPrompt("Tuned prompt.")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder() // nothing set but enabled
                .enabled(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getBaseUrl(), equalTo("https://api.example/v1"));
        assertThat(merged.getModel(), equalTo("some/model"));
        assertThat(merged.getDefaultBaseUrl(), equalTo("https://default.example/v1"));
        assertThat(merged.getDefaultModel(), equalTo("default/model"));
        assertThat(merged.getSystemPrompt(), equalTo("Tuned prompt."));
        assertThat(merged.getApiKey(), equalTo("sk-existing"));
        assertThat(merged.isEnabled(), is(true));
    }

    @Test
    public void mergeExplicitEmptyStringStillClearsAField() {
        // Explicitly sending "" is a deliberate clear — only ABSENT fields are
        // preserved.
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .apiKey("sk-existing")
                .baseUrl("https://api.example/v1")
                .model("some/model")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .baseUrl("")
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getBaseUrl(), equalTo(""));
        assertThat("omitted field still preserved", merged.getModel(), equalTo("some/model"));
    }

    @Test
    public void mergeNormalizesBlankPromptToDefaultAndNullsToBlank() {
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .systemPrompt("   ")
                .build();
        LlmConfig merged = LlmRestImpl.merge(null, request);
        assertThat(merged.getSystemPrompt(), equalTo(LlmConfigImpl.DEFAULT_SYSTEM_PROMPT));
        // Never-set string fields come out blank, not null — persisted records
        // always carry concrete values.
        assertThat(merged.getBaseUrl(), equalTo(""));
        assertThat(merged.getModel(), equalTo(""));
        assertThat(merged.getDefaultBaseUrl(), equalTo(""));
        assertThat(merged.getDefaultModel(), equalTo(""));
    }

    @Test
    public void mergeTrimsApiKeyPasteArtifacts() {
        // A key pasted with a trailing newline must never reach the KV store —
        // OkHttp's rejection message for an illegal header char embeds the key.
        LlmConfig request = LlmConfigImpl.newBuilder()
                .enabled(false)
                .apiKey("sk-new\n")
                .build();
        LlmConfig merged = LlmRestImpl.merge(null, request);
        assertThat(merged.getApiKey(), equalTo("sk-new"));
    }

    // --- ALEC-310: enabling requires the validated combination ---

    private static final String URL = "http://10.0.0.137:8081/v1";
    private static final String MODEL = "qwen3.5-4b";

    private static String record(String key) {
        return "{\"baseUrl\":\"" + URL + "\",\"model\":\"" + MODEL + "\",\"apiKeyHash\":\""
                + org.opennms.alec.data.LlmValidationRecord.sha256(key) + "\"}";
    }

    @SuppressWarnings("unchecked")
    private static org.opennms.integration.api.v1.distributed.KeyValueStore<String> store(String configJson,
                                                                                            String recordJson) {
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv =
                org.mockito.Mockito.mock(org.opennms.integration.api.v1.distributed.KeyValueStore.class);
        org.mockito.Mockito.when(kv.get(org.mockito.ArgumentMatchers.eq(org.opennms.alec.data.KeyEnum.LLM_CONFIG.toString()),
                        org.mockito.ArgumentMatchers.eq(ALECRestUtils.ALEC_CONFIG)))
                .thenReturn(java.util.Optional.ofNullable(configJson));
        org.mockito.Mockito.when(kv.get(org.mockito.ArgumentMatchers.eq(org.opennms.alec.data.KeyEnum.LLM_VALIDATION.toString()),
                        org.mockito.ArgumentMatchers.eq(ALECRestUtils.ALEC_CONFIG)))
                .thenReturn(java.util.Optional.ofNullable(recordJson));
        org.mockito.Mockito.when(kv.putAsync(org.mockito.ArgumentMatchers.anyString(),
                        org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString()))
                .thenReturn(java.util.concurrent.CompletableFuture.completedFuture(1L));
        return kv;
    }

    private static LlmConfig request(boolean enabled, String key) {
        return LlmConfigImpl.newBuilder().enabled(enabled).baseUrl(URL).model(MODEL).apiKey(key).build();
    }

    @Test
    public void enablingWithoutAValidationRecordIsRejectedAndNothingIsPersisted() {
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(null, null);
        LlmRestImpl rest = new LlmRestImpl(kv);
        try (javax.ws.rs.core.Response resp = rest.setConfiguration(request(true, "sk-typed"))) {
            assertThat(resp.getStatus(), is(400));
            assertThat(((String) resp.getEntity()).contains("not been validated"), is(true));
        }
        org.mockito.Mockito.verify(kv, org.mockito.Mockito.never()).putAsync(
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString(),
                org.mockito.ArgumentMatchers.anyString());
    }

    @Test
    public void enablingWithAMatchingValidationRecordIsAcceptedAndReportedValidated() {
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(null, record("sk-typed"));
        LlmRestImpl rest = new LlmRestImpl(kv);
        try (javax.ws.rs.core.Response resp = rest.setConfiguration(request(true, "sk-typed"))) {
            assertThat(resp.getStatus(), is(200));
            org.opennms.alec.data.LlmConfigStatus status = (org.opennms.alec.data.LlmConfigStatus) resp.getEntity();
            assertThat(status.isEnabled(), is(true));
            assertThat(status.isValidated(), is(true));
        }
    }

    @Test
    public void aRecordForAnotherKeyDoesNotValidateTheStoredKey() {
        // The key being saved differs from the one that was probed.
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(null, record("sk-other"));
        LlmRestImpl rest = new LlmRestImpl(kv);
        try (javax.ws.rs.core.Response resp = rest.setConfiguration(request(true, "sk-typed"))) {
            assertThat(resp.getStatus(), is(400));
        }
    }

    @Test
    public void savingDisabledNeedsNoValidationAndReportsNotValidated() {
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(null, null);
        LlmRestImpl rest = new LlmRestImpl(kv);
        try (javax.ws.rs.core.Response resp = rest.setConfiguration(request(false, "sk-typed"))) {
            assertThat(resp.getStatus(), is(200));
            assertThat(((org.opennms.alec.data.LlmConfigStatus) resp.getEntity()).isValidated(), is(false));
        }
        org.mockito.Mockito.verify(kv).putAsync(
                org.mockito.ArgumentMatchers.eq(org.opennms.alec.data.KeyEnum.LLM_CONFIG.toString()),
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.eq(ALECRestUtils.ALEC_CONFIG));
    }

    @Test
    public void clearingTheKeyDeletesTheValidationRecordAndReportsNotValidated() throws Exception {
        String stored = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(request(true, "sk-stored"));
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(stored, record("sk-stored"));
        LlmRestImpl rest = new LlmRestImpl(kv);
        LlmConfig clear = LlmConfigImpl.newBuilder().enabled(true).baseUrl(URL).model(MODEL).clearApiKey(true).build();
        try (javax.ws.rs.core.Response resp = rest.setConfiguration(clear)) {
            assertThat(resp.getStatus(), is(200));
            org.opennms.alec.data.LlmConfigStatus status = (org.opennms.alec.data.LlmConfigStatus) resp.getEntity();
            assertThat(status.isEnabled(), is(false));
            assertThat(status.isApiKeyPresent(), is(false));
            assertThat("the memory of the old key's validation goes with the key",
                    status.isValidated(), is(false));
        }
        org.mockito.Mockito.verify(kv).delete(
                org.mockito.ArgumentMatchers.eq(org.opennms.alec.data.KeyEnum.LLM_VALIDATION.toString()),
                org.mockito.ArgumentMatchers.eq(ALECRestUtils.ALEC_CONFIG));
    }

    private static org.opennms.integration.api.v1.distributed.KeyValueStore<String> storeWithEngine(
            String engineName, String configJson, String recordJson) {
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(configJson, recordJson);
        org.mockito.Mockito.when(kv.get(org.mockito.ArgumentMatchers.eq(org.opennms.alec.data.KeyEnum.ENGINE.toString()),
                        org.mockito.ArgumentMatchers.eq(ALECRestUtils.ALEC_CONFIG)))
                .thenReturn(java.util.Optional.of("{\"engineName\":\"" + engineName + "\"}"));
        return kv;
    }

    private static void assertRejectedUntouched(org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv,
                                                LlmConfig request, String reason) {
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(kv).setConfiguration(request)) {
            assertThat(resp.getStatus(), is(400));
            assertThat(((String) resp.getEntity()).contains(reason), is(true));
        }
        org.mockito.Mockito.verify(kv, org.mockito.Mockito.never()).putAsync(
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString(),
                org.mockito.ArgumentMatchers.anyString());
        org.mockito.Mockito.verify(kv, org.mockito.Mockito.never()).delete(
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString());
    }

    @Test
    public void clearingTheKeyIsRejectedWhileTheLlmEngineIsSelected() throws Exception {
        String stored = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(request(false, "sk-stored"));
        LlmConfig clear = LlmConfigImpl.newBuilder().baseUrl(URL).model(MODEL).clearApiKey(true).build();
        assertRejectedUntouched(storeWithEngine("llm", stored, record("sk-stored")), clear, "cleared");
    }

    @Test
    public void anUnvalidatedKeyIsRejectedWhileTheLlmEngineIsSelected() throws Exception {
        // Root Cause Analysis off, so only the engine rule can refuse it.
        String stored = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(request(false, "sk-stored"));
        assertRejectedUntouched(storeWithEngine("llm", stored, record("sk-stored")),
                request(false, "sk-never-probed"), "not validated");
    }

    @Test
    public void aValidatedKeyIsAcceptedWhileTheLlmEngineIsSelected() throws Exception {
        String stored = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(request(false, "sk-stored"));
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv =
                storeWithEngine("llm", stored, record("sk-new"));
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(kv).setConfiguration(request(false, "sk-new"))) {
            assertThat(resp.getStatus(), is(200));
        }
    }

    @Test
    public void anotherEngineLeavesClearingAndUnvalidatedSavesAlone() throws Exception {
        String stored = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(request(false, "sk-stored"));
        LlmConfig clear = LlmConfigImpl.newBuilder().baseUrl(URL).model(MODEL).clearApiKey(true).build();
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(storeWithEngine("dbscan", stored, record("sk-stored")))
                .setConfiguration(clear)) {
            assertThat(resp.getStatus(), is(200));
        }
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(storeWithEngine("dbscan", stored, record("sk-stored")))
                .setConfiguration(request(false, "sk-never-probed"))) {
            assertThat(resp.getStatus(), is(200));
        }
    }

    @Test
    public void savingWithoutClearingLeavesTheValidationRecordAlone() {
        org.opennms.integration.api.v1.distributed.KeyValueStore<String> kv = store(null, record("sk-typed"));
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(kv).setConfiguration(request(false, "sk-typed"))) {
            assertThat(resp.getStatus(), is(200));
        }
        org.mockito.Mockito.verify(kv, org.mockito.Mockito.never()).delete(
                org.mockito.ArgumentMatchers.anyString(), org.mockito.ArgumentMatchers.anyString());
    }

    @Test
    public void getReportsWhetherTheStoredConfigIsValidated() throws Exception {
        String stored = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(request(false, "sk-stored"));
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(store(stored, record("sk-stored"))).getConfiguration()) {
            assertThat(((org.opennms.alec.data.LlmConfigStatus) resp.getEntity()).isValidated(), is(true));
        }
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(store(stored, null)).getConfiguration()) {
            assertThat(((org.opennms.alec.data.LlmConfigStatus) resp.getEntity()).isValidated(), is(false));
        }
        try (javax.ws.rs.core.Response resp = new LlmRestImpl(store(null, record("sk-stored"))).getConfiguration()) {
            assertThat("nothing stored → not validated",
                    ((org.opennms.alec.data.LlmConfigStatus) resp.getEntity()).isValidated(), is(false));
        }
    }

    @Test
    public void mergeClearApiKeyPreservesStoredFieldsWhenRequestOmitsThem() {
        LlmConfig existing = LlmConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .baseUrl("https://api.example/v1")
                .model("some/model")
                .build();
        LlmConfig request = LlmConfigImpl.newBuilder()
                .clearApiKey(true)
                .build();
        LlmConfig merged = LlmRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), is(nullValue()));
        assertThat(merged.isEnabled(), is(false));
        assertThat(merged.getBaseUrl(), equalTo("https://api.example/v1"));
        assertThat(merged.getModel(), equalTo("some/model"));
    }
}
