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

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Returns Claude-generated suggestions for a specific situation. Sits on the
 * same {@code @Path("alec/claude")} root as the slice-1 configuration endpoint
 * in features/ui — JAX-RS routes between them by sub-path, no collision.
 */
@Path("alec/claude")
@Produces({MediaType.APPLICATION_JSON})
@Consumes({MediaType.APPLICATION_JSON})
public interface SuggestionsRest {

    /**
     * @return 200 with {@link SuggestionRecord} body if present (any status),
     *         204 No Content when no record exists yet (UI polls and waits)
     */
    @GET
    @Path("/suggestions/{situationId}")
    Response getSuggestion(@PathParam("situationId") String situationId);

    /**
     * Force a fresh Claude analysis for the given situation, bypassing the
     * handler's "skip if already pending/ready" guard. Used by the Re-evaluate
     * button on the AI Suggestions tab.
     *
     * @return 202 Accepted with the new pending {@link SuggestionRecord}
     *         body (callers poll {@link #getSuggestion} to see completion),
     *         404 if no situation with that id exists,
     *         400 if Claude integration is disabled or no API key is set
     */
    @POST
    @Path("/suggestions/{situationId}/reanalyze")
    Response reanalyze(@PathParam("situationId") String situationId);
}
