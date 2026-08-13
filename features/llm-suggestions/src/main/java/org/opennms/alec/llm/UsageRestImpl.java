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

import java.util.Objects;

import javax.ws.rs.core.Response;

public class UsageRestImpl implements UsageRest {

    static final int MIN_DAYS = 1;

    private final UsageStore store;
    private final LlmConfigReader configReader;
    private final TokenBudget tokenBudget;

    public UsageRestImpl(UsageStore store, LlmConfigReader configReader) {
        this.store = Objects.requireNonNull(store);
        this.configReader = Objects.requireNonNull(configReader);
        this.tokenBudget = new TokenBudget(store);
    }

    @Override
    public Response getUsage(int days) {
        int clamped = clamp(days);
        UsageReport report = store.aggregate(clamped);
        return Response.ok().entity(report).build();
    }

    @Override
    public Response getBudget() {
        // Limits come from the persisted config (0/unlimited when nothing saved).
        long dailyLimit = configReader.read().map(LlmConfigReader.Config::getDailyTokenLimit).orElse(0L);
        long monthlyLimit = configReader.read().map(LlmConfigReader.Config::getMonthlyTokenLimit).orElse(0L);
        BudgetStatus status = tokenBudget.evaluate(System.currentTimeMillis(), dailyLimit, monthlyLimit);
        return Response.ok().entity(status).build();
    }

    /**
     * Clamp the requested window to {@code [MIN_DAYS, RETENTION_DAYS]}.
     * Asking for more than the retention window is allowed but truncated —
     * we'd just be reading more empty space, no real records exist past
     * that horizon since the pruner runs daily.
     */
    static int clamp(int days) {
        if (days < MIN_DAYS) {
            return MIN_DAYS;
        }
        if (days > UsagePruner.RETENTION_DAYS) {
            return UsagePruner.RETENTION_DAYS;
        }
        return days;
    }
}
