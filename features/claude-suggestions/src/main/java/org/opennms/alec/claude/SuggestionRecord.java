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

import java.util.Collections;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

/**
 * What we persist per situation under context ALEC_CLAUDE_SUGGESTIONS,
 * keyed by situationId. Three states:
 *
 * <ul>
 *   <li>{@code pending} — written synchronously when the handler decides to
 *       fire a Claude request. {@code completedAt} is null.</li>
 *   <li>{@code ready} — request succeeded. {@code rootCauses} + {@code resolutions}
 *       carry the model's output; {@code error} is null.</li>
 *   <li>{@code failed} — request failed (timeout, HTTP error, malformed response,
 *       in-flight cap). {@code error} carries a short human-readable reason;
 *       {@code rootCauses} + {@code resolutions} are empty.</li>
 * </ul>
 */
@JsonDeserialize(builder = SuggestionRecord.Builder.class)
@JsonPropertyOrder({"situationId", "status", "rootCauses", "resolutions",
        "requestedAt", "completedAt", "error", "model"})
public final class SuggestionRecord {

    public static final String STATUS_PENDING = "pending";
    public static final String STATUS_READY = "ready";
    public static final String STATUS_FAILED = "failed";

    private final String situationId;
    private final String status;
    private final List<String> rootCauses;
    private final List<String> resolutions;
    private final long requestedAt;
    private final Long completedAt;
    private final String error;
    private final String model;

    private SuggestionRecord(Builder b) {
        this.situationId = b.situationId;
        this.status = b.status;
        this.rootCauses = b.rootCauses == null ? Collections.emptyList() : List.copyOf(b.rootCauses);
        this.resolutions = b.resolutions == null ? Collections.emptyList() : List.copyOf(b.resolutions);
        this.requestedAt = b.requestedAt;
        this.completedAt = b.completedAt;
        this.error = b.error;
        this.model = b.model;
    }

    public String getSituationId() {
        return situationId;
    }

    public String getStatus() {
        return status;
    }

    public List<String> getRootCauses() {
        return rootCauses;
    }

    public List<String> getResolutions() {
        return resolutions;
    }

    public long getRequestedAt() {
        return requestedAt;
    }

    public Long getCompletedAt() {
        return completedAt;
    }

    public String getError() {
        return error;
    }

    public String getModel() {
        return model;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    @com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder(withPrefix = "")
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private String situationId;
        private String status;
        private List<String> rootCauses;
        private List<String> resolutions;
        private long requestedAt;
        private Long completedAt;
        private String error;
        private String model;

        private Builder() {
        }

        public Builder situationId(String v) {
            situationId = v;
            return this;
        }

        public Builder status(String v) {
            status = v;
            return this;
        }

        public Builder rootCauses(List<String> v) {
            rootCauses = v;
            return this;
        }

        public Builder resolutions(List<String> v) {
            resolutions = v;
            return this;
        }

        public Builder requestedAt(long v) {
            requestedAt = v;
            return this;
        }

        public Builder completedAt(Long v) {
            completedAt = v;
            return this;
        }

        public Builder error(String v) {
            error = v;
            return this;
        }

        public Builder model(String v) {
            model = v;
            return this;
        }

        public SuggestionRecord build() {
            return new SuggestionRecord(this);
        }
    }
}
