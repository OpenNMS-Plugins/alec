package org.opennms.alec.data;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(builder = EngineParameterImpl.Builder.class)
@JsonPropertyOrder({"engineName", "distanceMeasureName", "alpha", "beta", "epsilon",
        "hellingerW", "hellingerBias", "remoteUri", "token", "remote",
        "clusterFrequencyMs", "clusterPrompt"})
public interface EngineParameter {
    Double getAlpha();

    Double getBeta();

    Double getEpsilon();

    Double getHellingerW();

    Double getHellingerBias();

    String getDistanceMeasureName();

    String getEngineName();

    String getRemoteUri();

    String getToken();

    boolean isRemote();

    /**
     * For the LLM-based clustering engine ({@code engineName == "llm"}): how
     * often, in milliseconds, ALEC asks the LLM to re-cluster alarms. Null for
     * other engines.
     */
    Integer getClusterFrequencyMs();

    /**
     * For the LLM-based clustering engine: the operator-editable prompt that
     * frames the clustering request. Blank/null means the engine uses its
     * built-in default. Null for other engines.
     */
    String getClusterPrompt();
}
