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
import org.opennms.alec.data.ClaudeConfig;
import org.opennms.alec.data.ClaudeConfigImpl;

@RunWith(JUnit4.class)
public class ClaudeRestImplTest {

    @Test
    public void mergeAcceptsNewKeyWhenNoneExisted() {
        ClaudeConfig request = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-new")
                .build();
        ClaudeConfig merged = ClaudeRestImpl.merge(null, request);
        assertThat(merged.isEnabled(), is(true));
        assertThat(merged.getApiKey(), equalTo("sk-new"));
    }

    @Test
    public void mergePreservesExistingKeyWhenRequestKeyIsEmpty() {
        ClaudeConfig existing = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .build();
        ClaudeConfig request = ClaudeConfigImpl.newBuilder()
                .enabled(false)
                .build();
        ClaudeConfig merged = ClaudeRestImpl.merge(existing, request);
        assertThat("toggling enabled must not require resending the key",
                merged.getApiKey(), equalTo("sk-existing"));
        assertThat(merged.isEnabled(), is(false));
    }

    @Test
    public void mergePreservesExistingKeyWhenRequestKeyIsBlankString() {
        ClaudeConfig existing = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-existing")
                .build();
        ClaudeConfig request = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("")
                .build();
        ClaudeConfig merged = ClaudeRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), equalTo("sk-existing"));
    }

    @Test
    public void mergeReplacesExistingKeyWhenRequestProvidesNewOne() {
        ClaudeConfig existing = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .build();
        ClaudeConfig request = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-new")
                .build();
        ClaudeConfig merged = ClaudeRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), equalTo("sk-new"));
        assertThat(merged.isEnabled(), is(true));
    }

    @Test
    public void mergeWithClearApiKeyWipesKeyAndForcesDisabled() {
        ClaudeConfig existing = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-old")
                .build();
        // clearApiKey wins even if the request also tries to enable + supply a key.
        ClaudeConfig request = ClaudeConfigImpl.newBuilder()
                .enabled(true)
                .apiKey("sk-attempted-new")
                .clearApiKey(true)
                .build();
        ClaudeConfig merged = ClaudeRestImpl.merge(existing, request);
        assertThat(merged.getApiKey(), is(nullValue()));
        assertThat(merged.isEnabled(), is(false));
    }
}
