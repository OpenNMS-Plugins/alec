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

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.not;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.Optional;

import org.junit.Before;
import org.junit.Test;

import com.fasterxml.jackson.databind.ObjectMapper;

public class ClaudeConfigReaderTest {

    private InMemoryKVStore kv;
    private ClaudeConfigReader reader;

    @Before
    public void setUp() {
        kv = new InMemoryKVStore();
        reader = new ClaudeConfigReader(kv, new ObjectMapper());
    }

    @Test
    public void readReturnsEmptyWhenConfigNotPersisted() {
        assertThat(reader.read().isPresent(), is(false));
    }

    @Test
    public void readReturnsEnabledTrueWithApiKey() {
        kv.put(ClaudeConfigReader.CONFIG_KEY,
                "{\"enabled\":true,\"apiKey\":\"sk-ant-real-key\"}",
                ClaudeConfigReader.CONFIG_CONTEXT);

        ClaudeConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertThat(c.isEnabled(), is(true));
        assertThat(c.hasApiKey(), is(true));
        assertThat(c.getApiKey(), equalTo("sk-ant-real-key"));
    }

    @Test
    public void readReturnsEnabledFalseAndEmptyKeyForFreshlyDisabledConfig() {
        // User unticked the box; the key was never sent. Server merge keeps key absent.
        kv.put(ClaudeConfigReader.CONFIG_KEY,
                "{\"enabled\":false,\"apiKey\":\"\"}",
                ClaudeConfigReader.CONFIG_CONTEXT);

        ClaudeConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertFalse(c.isEnabled());
        assertFalse(c.hasApiKey());
    }

    @Test
    public void readReturnsEmptyWhenJsonIsMalformed() {
        kv.put(ClaudeConfigReader.CONFIG_KEY,
                "not valid json",
                ClaudeConfigReader.CONFIG_CONTEXT);

        assertThat(reader.read().isPresent(), is(false));
    }

    @Test
    public void readToleratesMissingApiKeyField() {
        // The slice-1 server-side merge ensures apiKey is always present, but
        // older bundle versions might have omitted it. Default to empty.
        kv.put(ClaudeConfigReader.CONFIG_KEY,
                "{\"enabled\":true}",
                ClaudeConfigReader.CONFIG_CONTEXT);

        ClaudeConfigReader.Config c = reader.read().orElseThrow(AssertionError::new);
        assertTrue(c.isEnabled());
        assertFalse("missing apiKey field treated as empty", c.hasApiKey());
    }

    @Test
    public void configToStringNeverIncludesApiKey() {
        ClaudeConfigReader.Config c = new ClaudeConfigReader.Config(true, "sk-ant-leaktest");
        String s = c.toString();
        assertThat(s, not(containsString("sk-ant-leaktest")));
        assertThat(s, containsString("apiKeyPresent=true"));
    }

    // Sanity-check we're reading from the exact context+key features/ui writes to.
    // If KeyEnum.CLAUDE_CONFIG or ALECRestUtils.ALEC_CONFIG ever change, the
    // string constants in ClaudeConfigReader must change in lockstep.
    @Test
    public void contextAndKeyConstantsMatchSliceOneWriter() {
        // Hard-coded here on purpose — if features/ui changes its constants,
        // this test should fail and force someone to update both bundles.
        assertThat(ClaudeConfigReader.CONFIG_CONTEXT, equalTo("ALEC_CONFIG"));
        assertThat(ClaudeConfigReader.CONFIG_KEY, equalTo("CLAUDE_CONFIG"));

        // And reading from those exact strings should find what we put there.
        kv.put("CLAUDE_CONFIG", "{\"enabled\":true,\"apiKey\":\"k\"}", "ALEC_CONFIG");
        Optional<ClaudeConfigReader.Config> c = reader.read();
        assertTrue(c.isPresent());
    }
}
