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

/**
 * Snapshot of the shared LLM token budget: the configured daily/monthly limits
 * (0 = unlimited), how many tokens have been used in the current UTC day and
 * month, and whether ALEC is currently blocked from issuing LLM requests.
 * Serialized to the UI (GET alec/llm/budget) so the main page can warn the user.
 */
public class BudgetStatus {
    private final long dailyLimit;
    private final long dailyUsed;
    private final long monthlyLimit;
    private final long monthlyUsed;
    private final boolean blocked;
    private final String reason;

    public BudgetStatus(long dailyLimit, long dailyUsed, long monthlyLimit, long monthlyUsed,
                        boolean blocked, String reason) {
        this.dailyLimit = dailyLimit;
        this.dailyUsed = dailyUsed;
        this.monthlyLimit = monthlyLimit;
        this.monthlyUsed = monthlyUsed;
        this.blocked = blocked;
        this.reason = reason;
    }

    public long getDailyLimit() {
        return dailyLimit;
    }

    public long getDailyUsed() {
        return dailyUsed;
    }

    public long getMonthlyLimit() {
        return monthlyLimit;
    }

    public long getMonthlyUsed() {
        return monthlyUsed;
    }

    public boolean isBlocked() {
        return blocked;
    }

    /** Human-readable reason when {@link #isBlocked()} is true; otherwise null. */
    public String getReason() {
        return reason;
    }
}
