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

public class SnmpInterfaceDef {
    private final int ifIndex;
    private final String ifDescr;
    private final int ifType;
    private final long ifSpeed;
    private final String ifAlias;

    public SnmpInterfaceDef(int ifIndex, String ifDescr) {
        this(ifIndex, ifDescr, 6, 1000000000L, ifDescr);
    }

    public SnmpInterfaceDef(int ifIndex, String ifDescr, int ifType, long ifSpeed, String ifAlias) {
        this.ifIndex = ifIndex;
        this.ifDescr = ifDescr;
        this.ifType = ifType;
        this.ifSpeed = ifSpeed;
        this.ifAlias = ifAlias;
    }

    public int getIfIndex() {
        return ifIndex;
    }

    public String getIfDescr() {
        return ifDescr;
    }

    public int getIfType() {
        return ifType;
    }

    public long getIfSpeed() {
        return ifSpeed;
    }

    public String getIfAlias() {
        return ifAlias;
    }

    public String toXml() {
        return "<snmpInterface ifIndex=\"" + ifIndex + "\">" +
                "<ifDescr>" + ifDescr + "</ifDescr>" +
                "<ifType>" + ifType + "</ifType>" +
                "<ifSpeed>" + ifSpeed + "</ifSpeed>" +
                "<ifAlias>" + ifAlias + "</ifAlias>" +
                "<ifAdminStatus>1</ifAdminStatus>" +
                "<ifOperStatus>1</ifOperStatus>" +
                "</snmpInterface>";
    }

    @Override
    public String toString() {
        return "SnmpInterfaceDef{ifIndex=" + ifIndex + ", ifDescr='" + ifDescr + "'}";
    }
}
