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

package org.opennms.alec.demo.state;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

@JsonIgnoreProperties(ignoreUnknown = true)
public class DemoState {

    private static final ObjectMapper MAPPER = new ObjectMapper()
            .enable(SerializationFeature.INDENT_OUTPUT);

    private String foreignSource;
    private String scenario;
    private long startTime;
    private List<NodeRecord> nodes = new ArrayList<>();
    private List<Integer> udlIds = new ArrayList<>();

    public DemoState() {
    }

    public DemoState(String foreignSource, String scenario) {
        this.foreignSource = foreignSource;
        this.scenario = scenario;
        this.startTime = System.currentTimeMillis();
    }

    public void addNode(String foreignId, int nodeId, String label, String ipAddress) {
        nodes.add(new NodeRecord(foreignId, nodeId, label, ipAddress));
    }

    public void addUDL(int udlId) {
        udlIds.add(udlId);
    }

    public void save(Path file) throws IOException {
        MAPPER.writeValue(file.toFile(), this);
    }

    public static DemoState load(Path file) throws IOException {
        return MAPPER.readValue(file.toFile(), DemoState.class);
    }

    public static boolean exists(Path file) {
        return Files.exists(file);
    }

    public void delete(Path file) throws IOException {
        Files.deleteIfExists(file);
    }

    // --- Getters/setters for Jackson ---

    public String getForeignSource() {
        return foreignSource;
    }

    public void setForeignSource(String foreignSource) {
        this.foreignSource = foreignSource;
    }

    public String getScenario() {
        return scenario;
    }

    public void setScenario(String scenario) {
        this.scenario = scenario;
    }

    public long getStartTime() {
        return startTime;
    }

    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }

    public List<NodeRecord> getNodes() {
        return nodes;
    }

    public void setNodes(List<NodeRecord> nodes) {
        this.nodes = nodes;
    }

    public List<Integer> getUdlIds() {
        return udlIds;
    }

    public void setUdlIds(List<Integer> udlIds) {
        this.udlIds = udlIds;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class NodeRecord {
        private String foreignId;
        private int nodeId;
        private String label;
        private String ipAddress;

        public NodeRecord() {
        }

        public NodeRecord(String foreignId, int nodeId, String label, String ipAddress) {
            this.foreignId = foreignId;
            this.nodeId = nodeId;
            this.label = label;
            this.ipAddress = ipAddress;
        }

        public String getForeignId() {
            return foreignId;
        }

        public void setForeignId(String foreignId) {
            this.foreignId = foreignId;
        }

        public int getNodeId() {
            return nodeId;
        }

        public void setNodeId(int nodeId) {
            this.nodeId = nodeId;
        }

        public String getLabel() {
            return label;
        }

        public void setLabel(String label) {
            this.label = label;
        }

        public String getIpAddress() {
            return ipAddress;
        }

        public void setIpAddress(String ipAddress) {
            this.ipAddress = ipAddress;
        }

        @Override
        public String toString() {
            return "Node{foreignId='" + foreignId + "', nodeId=" + nodeId +
                    ", label='" + label + "', ip='" + ipAddress + "'}";
        }
    }

    @Override
    public String toString() {
        return "DemoState{foreignSource='" + foreignSource + "', scenario='" + scenario +
                "', nodes=" + nodes.size() + ", udls=" + udlIds.size() + '}';
    }
}
