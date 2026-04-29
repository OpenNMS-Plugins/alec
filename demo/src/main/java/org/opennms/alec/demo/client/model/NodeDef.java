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

package org.opennms.alec.demo.client.model;

import java.util.ArrayList;
import java.util.List;

public class NodeDef {
    private final String foreignId;
    private final String label;
    private final List<String> ipAddresses = new ArrayList<>();

    public NodeDef(String foreignId, String label) {
        this.foreignId = foreignId;
        this.label = label;
    }

    public NodeDef addIpAddress(String ip) {
        ipAddresses.add(ip);
        return this;
    }

    public String getForeignId() {
        return foreignId;
    }

    public String getLabel() {
        return label;
    }

    public List<String> getIpAddresses() {
        return ipAddresses;
    }

    public String toRequisitionXml() {
        StringBuilder sb = new StringBuilder();
        sb.append("<node foreign-id=\"").append(foreignId)
                .append("\" node-label=\"").append(label)
                .append("\" xmlns=\"http://xmlns.opennms.org/xsd/config/model-import\">");
        for (String ip : ipAddresses) {
            sb.append("<interface ip-addr=\"").append(ip).append("\" snmp-primary=\"P\"/>");
        }
        sb.append("</node>");
        return sb.toString();
    }

    @Override
    public String toString() {
        return "NodeDef{foreignId='" + foreignId + "', label='" + label + "', ips=" + ipAddresses + '}';
    }
}
