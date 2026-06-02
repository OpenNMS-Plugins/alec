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
import java.util.Optional;

import javax.ws.rs.core.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LlmValidationRestImpl implements LlmValidationRest {

    private static final Logger LOG = LoggerFactory.getLogger(LlmValidationRestImpl.class);

    private final LlmSuggestionService suggestionService;
    private final LlmConfigReader configReader;

    public LlmValidationRestImpl(LlmSuggestionService suggestionService, LlmConfigReader configReader) {
        this.suggestionService = Objects.requireNonNull(suggestionService);
        this.configReader = Objects.requireNonNull(configReader);
    }

    @Override
    public Response validate(ValidationRequest request) {
        ValidationRequest req = request == null ? new ValidationRequest() : request;
        Optional<LlmConfigReader.Config> stored = configReader.read();

        // Each field: use what the form sent, else the persisted value, else the
        // built-in default. The key especially: a blank key means "use the one
        // already stored" so the UI can validate without re-sending the secret.
        String apiKey = firstNonBlank(req.getApiKey(), stored.map(LlmConfigReader.Config::getApiKey).orElse(""));
        String baseUrl = firstNonBlank(req.getBaseUrl(),
                stored.map(LlmConfigReader.Config::getBaseUrl).orElse(LlmConfigReader.DEFAULT_BASE_URL));
        String model = firstNonBlank(req.getModel(),
                stored.map(LlmConfigReader.Config::getModel).orElse(LlmConfigReader.DEFAULT_MODEL));

        // Never log the key; the result message is key-free by construction.
        LOG.debug("Validating LLM config: baseUrl={}, model={}, keyProvided={}",
                baseUrl, model, !apiKey.isEmpty());

        ValidationResult result = suggestionService.validate(apiKey, baseUrl, model);
        return Response.ok().entity(result).build();
    }

    private static String firstNonBlank(String a, String b) {
        if (a != null && !a.trim().isEmpty()) {
            return a.trim();
        }
        return b == null ? "" : b;
    }
}
