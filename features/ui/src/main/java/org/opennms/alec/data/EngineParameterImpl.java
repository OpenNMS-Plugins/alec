package org.opennms.alec.data;

import java.util.Optional;
import java.util.StringJoiner;

import org.opennms.alec.engine.dbscan.AlarmInSpaceTimeDistanceMeasure;
import org.opennms.alec.engine.dbscan.DBScanEngine;
import org.opennms.alec.engine.dbscan.HellingerDistanceMeasure;
import org.opennms.alec.engine.deeplearning.DeepLearningEngineConf;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;

public class EngineParameterImpl implements EngineParameter {

    public static final String DBSCAN = "dbscan";
    public static final String HELLINGER = "hellinger";
    private final Double alpha;
    private final Double beta;
    private final Double epsilon;
    private final Double hellingerW;
    private final Double hellingerBias;
    private final String distanceMeasureName;
    private final String engineName;
    private final String remoteUri;
    private final String token;
    private final boolean remote;
    // LLM-based clustering (engineName "llm"): how often to ask the LLM to
    // re-cluster, and the operator-editable clustering prompt. Null when unset.
    private final Integer clusterFrequencyMs;
    private final String clusterPrompt;

    private EngineParameterImpl(Builder builder) {
        alpha = builder.alpha;
        beta = builder.beta;
        epsilon = builder.epsilon;
        hellingerW = builder.hellingerW;
        hellingerBias = builder.hellingerBias;
        distanceMeasureName = builder.distanceMeasureName;
        clusterFrequencyMs = builder.clusterFrequencyMs;
        clusterPrompt = builder.clusterPrompt;
        engineName = builder.engineName;
        remoteUri = builder.remoteUri;
        token = builder.token;
        remote = builder.remote;
    }

    public static Builder newBuilder() {
        return new Builder();
    }

    public static Builder newBuilder(EngineParameter copy) {
        Builder builder = new Builder();
        builder.alpha = copy.getAlpha();
        builder.beta = copy.getBeta();
        builder.epsilon = copy.getEpsilon();
        builder.hellingerW = copy.getHellingerW();
        builder.hellingerBias = copy.getHellingerBias();
        builder.distanceMeasureName = copy.getDistanceMeasureName();
        builder.engineName = copy.getEngineName();
        builder.remoteUri = copy.getRemoteUri();
        builder.token = copy.getToken();
        builder.remote = copy.isRemote();
        builder.clusterFrequencyMs = copy.getClusterFrequencyMs();
        builder.clusterPrompt = copy.getClusterPrompt();
        return builder;
    }

    @Override
    public Double getAlpha() {
        if (Optional.ofNullable(alpha).isEmpty()) {
            if (DBSCAN.equals(getEngineName())) {
                return DBScanEngine.DEFAULT_ALPHA;
            }
            return null;
        } else {
            return alpha;
        }
    }

    @Override
    public Double getBeta() {
        if (Optional.ofNullable(beta).isEmpty()) {
            if (DBSCAN.equals(getEngineName())) {
                return DBScanEngine.DEFAULT_BETA;
            }
            return null;
        } else {
            return beta;
        }
    }

    @Override
    public Double getEpsilon() {
        if (Optional.ofNullable(epsilon).isEmpty()) {
            switch (getDistanceMeasureName()) {
                case "hellinger":
                    return HellingerDistanceMeasure.DEFAULT_EPSILON;
                case "alarminspacetime":
                    return AlarmInSpaceTimeDistanceMeasure.DEFAULT_EPSILON;
                default:
                    if (engineName.equals("deeplearning")) {
                        return DeepLearningEngineConf.DEFAULT_EPSILON;
                    }
                    return null;
            }
        } else {
            return epsilon;
        }
    }

    @Override
    public Double getHellingerW() {
        if (Optional.ofNullable(hellingerW).isEmpty()) {
            if (HELLINGER.equals(getDistanceMeasureName())) {
                return HellingerDistanceMeasure.DEFAULT_W;
            }
            return null;
        }
        return hellingerW;
    }

    @Override
    public Double getHellingerBias() {
        if (Optional.ofNullable(hellingerBias).isEmpty()) {
            if (HELLINGER.equals(getDistanceMeasureName())) {
                return HellingerDistanceMeasure.DEFAULT_BIAS;
            }
            return null;
        }
        return hellingerBias;
    }

    @Override
    public String getDistanceMeasureName() {
        if (Optional.ofNullable(distanceMeasureName).isEmpty()) {
            if (DBSCAN.equals(engineName)) {
                return DBScanEngine.DEFAULT_DISTANCE_MEASURE;
            }
            return "";
        } else {
            return distanceMeasureName;
        }
    }

    @Override
    public String getEngineName() {
        return engineName;
    }

    public String getRemoteUri() {
        return remoteUri;
    }

    @Override
    public String getToken() {
        return token;
    }

    @Override
    public boolean isRemote() {
        return remote;
    }

    @Override
    public Integer getClusterFrequencyMs() {
        return clusterFrequencyMs;
    }

    @Override
    public String getClusterPrompt() {
        return clusterPrompt;
    }

    /**
     * The {@link JsonIgnoreProperties} is intentional: persisted JSON in the
     * KV store may contain fields added by future versions (e.g. ALEC-297's
     * {@code noPathDistance}) and we must be able to deserialize it instead
     * of failing the bundle startup with an "Unrecognized field" error.
     */
    @JsonPOJOBuilder(withPrefix = "")
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private Double alpha;
        private Double beta;
        private Double epsilon;
        private Double hellingerW;
        private Double hellingerBias;
        private String distanceMeasureName;
        private String engineName;
        private String remoteUri;
        private String token;
        private boolean remote;
        private Integer clusterFrequencyMs;
        private String clusterPrompt;

        private Builder() {
        }

        public static Builder newBuilder() {
            return new Builder();
        }

        public Builder alpha(Double val) {
            alpha = val;
            return this;
        }

        public Builder beta(Double val) {
            beta = val;
            return this;
        }

        public Builder epsilon(Double val) {
            epsilon = val;
            return this;
        }

        public Builder hellingerW(Double val) {
            hellingerW = val;
            return this;
        }

        public Builder hellingerBias(Double val) {
            hellingerBias = val;
            return this;
        }

        public Builder distanceMeasureName(String val) {
            distanceMeasureName = val;
            return this;
        }

        public Builder engineName(String val) {
            engineName = val;
            return this;
        }

        public Builder remoteUri(String val) {
            remoteUri = val;
            return this;
        }

        public Builder token(String val) {
            token = val;
            return this;
        }

        public Builder remote(boolean val) {
            remote = val;
            return this;
        }

        public Builder clusterFrequencyMs(Integer val) {
            clusterFrequencyMs = val;
            return this;
        }

        public Builder clusterPrompt(String val) {
            clusterPrompt = val;
            return this;
        }

        public EngineParameterImpl build() {
            return new EngineParameterImpl(this);
        }
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", EngineParameterImpl.class.getSimpleName() + "[", "]")
                .add("alpha=" + alpha)
                .add("beta=" + beta)
                .add("epsilon=" + epsilon)
                .add("hellingerW=" + hellingerW)
                .add("hellingerBias=" + hellingerBias)
                .add("distanceMeasureName='" + distanceMeasureName + "'")
                .add("engineName='" + engineName + "'")
                .add("remoteUri='" + remoteUri + "'")
                .add("token='" + token + "'")
                .add("remote=" + remote)
                .toString();
    }
}
