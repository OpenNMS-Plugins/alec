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

import java.util.Objects;
import java.util.Optional;

import javax.ws.rs.core.Response;

public class SuggestionsRestImpl implements SuggestionsRest {

    private final SuggestionStore store;

    public SuggestionsRestImpl(SuggestionStore store) {
        this.store = Objects.requireNonNull(store);
    }

    @Override
    public Response getSuggestion(String situationId) {
        if (situationId == null || situationId.isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("situationId is required")
                    .build();
        }
        Optional<SuggestionRecord> record = store.get(situationId);
        if (record.isEmpty()) {
            // 204 lets the UI poll without spamming the error log for
            // situations whose Claude call hasn't fired yet (or where the
            // feature is disabled — no record will ever appear).
            return Response.noContent().build();
        }
        return Response.ok().entity(record.get()).build();
    }
}
