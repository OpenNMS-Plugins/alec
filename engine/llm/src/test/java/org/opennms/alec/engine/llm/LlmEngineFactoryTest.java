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

package org.opennms.alec.engine.llm;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;

import org.junit.Before;
import org.junit.Test;

import com.codahale.metrics.MetricRegistry;
import com.fasterxml.jackson.databind.ObjectMapper;

public class LlmEngineFactoryTest {

    private static final long ONE_HOUR_MS = 3_600_000L;

    private LlmEngineFactory factory;

    @Before
    public void setUp() {
        factory = new LlmEngineFactory(new InMemoryKVStore(), new ObjectMapper());
    }

    @Test
    public void getNameReturnsLlm() {
        assertThat(factory.getName(), equalTo("llm"));
    }

    @Test
    public void getEngineFactoryReturnsSelf() {
        assertThat(factory.getEngineFactory(), is(factory));
    }

    @Test
    public void clusterFrequencyMsDefaultIsOneHour() {
        assertThat(factory.getClusterFrequencyMs(), equalTo(ONE_HOUR_MS));
    }

    @Test
    public void createEngineReturnsLlmClusterEngine() {
        assertNotNull(factory.createEngine(new MetricRegistry()));
        assertThat(factory.createEngine(new MetricRegistry()), instanceOf(LlmClusterEngine.class));
    }

    @Test
    public void clusterFrequencyDrivesRequestIntervalNotReconcileTick() {
        // The configured frequency throttles the LLM query interval, but the
        // engine reconciles at the (faster, capped) reconcile cadence so results
        // apply promptly — the two are decoupled.
        factory.setClusterFrequencyMs(ONE_HOUR_MS);
        LlmClusterEngine engine = factory.createEngine(new MetricRegistry());
        assertThat(engine.getClusterRequestIntervalMs(), equalTo(ONE_HOUR_MS));
        assertThat(engine.getTickResolutionMs(), equalTo(LlmClusterEngine.RECONCILE_INTERVAL_MS));
    }

    @Test
    public void reconcileTickNeverExceedsConfiguredFrequency() {
        // If the user picks a frequency below the reconcile interval, the engine
        // ticks at that faster frequency rather than the (larger) default.
        factory.setClusterFrequencyMs(10_000L);
        LlmClusterEngine engine = factory.createEngine(new MetricRegistry());
        assertThat(engine.getClusterRequestIntervalMs(), equalTo(10_000L));
        assertThat(engine.getTickResolutionMs(), equalTo(10_000L));
    }

    @Test
    public void setNullClusterPromptTreatedAsEmpty() {
        factory.setClusterPrompt(null);
        assertThat(factory.getClusterPrompt(), equalTo(""));
    }

    @Test
    public void setClusterPromptIsRetained() {
        factory.setClusterPrompt("custom prompt");
        assertThat(factory.getClusterPrompt(), equalTo("custom prompt"));
    }

    @Test
    public void getNameConfContainsFrequency() {
        factory.setClusterFrequencyMs(120_000L);
        assertThat(factory.getNameConf(), equalTo("llm[freq=120000ms]"));
    }

    @Test
    public void getParametersContainsEngineNameAndFrequency() {
        factory.setClusterFrequencyMs(300_000L);
        String params = factory.getParameters();
        assertThat(params, org.hamcrest.CoreMatchers.containsString("llm"));
        assertThat(params, org.hamcrest.CoreMatchers.containsString("300000"));
    }
}
