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

import java.time.Instant;
import java.time.ZoneOffset;
import java.util.Objects;

/**
 * Evaluates the shared LLM token budget against recorded usage. The budget is
 * "shared" because every LLM feature (root cause analysis and LLM-based
 * clustering) draws from the same daily/monthly token caps. Limits of 0 mean
 * unlimited. Periods are aligned to UTC (start of day / start of calendar
 * month) to match how the limits are described in the UI.
 */
public class TokenBudget {

    private final UsageStore usageStore;

    public TokenBudget(UsageStore usageStore) {
        this.usageStore = Objects.requireNonNull(usageStore);
    }

    /**
     * @param now          current time in epoch millis
     * @param dailyLimit   per-UTC-day token cap, 0 = unlimited
     * @param monthlyLimit per-calendar-month token cap, 0 = unlimited
     * @return a snapshot including current usage and whether requests are blocked
     */
    public BudgetStatus evaluate(long now, long dailyLimit, long monthlyLimit) {
        long dailyUsed = dailyLimit > 0 ? usageStore.tokensUsedSince(startOfUtcDay(now)) : 0;
        long monthlyUsed = monthlyLimit > 0 ? usageStore.tokensUsedSince(startOfUtcMonth(now)) : 0;
        boolean dailyExceeded = dailyLimit > 0 && dailyUsed >= dailyLimit;
        boolean monthlyExceeded = monthlyLimit > 0 && monthlyUsed >= monthlyLimit;
        String reason = null;
        if (dailyExceeded) {
            reason = "Daily LLM token budget reached (" + dailyUsed + " of " + dailyLimit
                    + "). LLM requests are paused until the next UTC day.";
        } else if (monthlyExceeded) {
            reason = "Monthly LLM token budget reached (" + monthlyUsed + " of " + monthlyLimit
                    + "). LLM requests are paused until the next month.";
        }
        return new BudgetStatus(dailyLimit, dailyUsed, monthlyLimit, monthlyUsed,
                dailyExceeded || monthlyExceeded, reason);
    }

    static long startOfUtcDay(long now) {
        return Instant.ofEpochMilli(now).atZone(ZoneOffset.UTC).toLocalDate()
                .atStartOfDay(ZoneOffset.UTC).toInstant().toEpochMilli();
    }

    static long startOfUtcMonth(long now) {
        return Instant.ofEpochMilli(now).atZone(ZoneOffset.UTC).toLocalDate()
                .withDayOfMonth(1).atStartOfDay(ZoneOffset.UTC).toInstant().toEpochMilli();
    }
}
