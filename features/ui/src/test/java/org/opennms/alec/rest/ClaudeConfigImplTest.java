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
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.data.ClaudeConfig;
import org.opennms.alec.data.ClaudeConfigImpl;
import org.opennms.alec.data.ClaudeConfigStatus;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(JUnit4.class)
public class ClaudeConfigImplTest {

    private ObjectMapper objectMapper;

    @Before
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void persistedJsonRoundtripsAllFields() throws JsonProcessingException {
        ClaudeConfig original = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-ant-test-12345")
                .build();
        String json = objectMapper.writeValueAsString(original);

        ClaudeConfig roundtripped = objectMapper.readValue(json, ClaudeConfigImpl.class);
        assertThat(roundtripped.isEnabled(), is(true));
        assertThat(roundtripped.getApiKey(), equalTo("sk-ant-test-12345"));
        assertThat(roundtripped.isClearApiKey(), is(false));
    }

    @Test
    public void toStringNeverIncludesApiKey() {
        ClaudeConfig config = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-ant-supersecret-value")
                .build();
        String rendered = config.toString();
        assertThat("toString must not leak the API key",
                rendered.contains("sk-ant-supersecret-value"), is(false));
        assertThat("toString should mark the key as present",
                rendered.contains("apiKeyPresent=true"), is(true));
    }

    @Test
    public void statusFromNullConfigReportsDisabledAndAbsent() {
        ClaudeConfigStatus status = ClaudeConfigStatus.from(null);
        assertThat(status.isEnabled(), is(false));
        assertThat(status.isApiKeyPresent(), is(false));
    }

    @Test
    public void statusFromConfigWithKeyReportsKeyPresentButNeverExposesIt() throws JsonProcessingException {
        ClaudeConfig config = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-ant-secret")
                .build();
        ClaudeConfigStatus status = ClaudeConfigStatus.from(config);
        assertThat(status.isEnabled(), is(true));
        assertThat(status.isApiKeyPresent(), is(true));

        // The serialized status response must not carry the key value under any name.
        String json = objectMapper.writeValueAsString(status);
        assertThat("status JSON must not leak the key value",
                json.contains("sk-ant-secret"), is(false));
        assertThat("status JSON must not contain an apiKey field at all",
                json.contains("apiKey\""), is(false));
    }

    @Test
    public void statusFromConfigWithEmptyKeyReportsKeyAbsent() {
        ClaudeConfig config = ClaudeConfigImpl.newBuilder()
                .enabled(false)
                .apiKey("")
                .build();
        ClaudeConfigStatus status = ClaudeConfigStatus.from(config);
        assertThat(status.isApiKeyPresent(), is(false));
    }

    @Test
    public void deserializeIgnoresUnknownFields() throws JsonProcessingException {
        // Persisted JSON from a future version may include fields we don't know
        // about yet (e.g. a model selector); we must tolerate them.
        String json = "{\"enabled\":true,\"apiKey\":\"k\",\"futureField\":\"x\"}";
        ClaudeConfig config = objectMapper.readValue(json, ClaudeConfigImpl.class);
        assertThat(config.isEnabled(), is(true));
        assertThat(config.getApiKey(), equalTo("k"));
    }
}
