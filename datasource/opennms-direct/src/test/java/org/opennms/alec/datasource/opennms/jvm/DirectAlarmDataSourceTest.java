/*******************************************************************************
 * This file is part of OpenNMS(R).
 *
 * Copyright (C) 2020 The OpenNMS Group, Inc.
 * OpenNMS(R) is Copyright (C) 1999-2020 The OpenNMS Group, Inc.
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

package org.opennms.alec.datasource.opennms.jvm;

import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;
import org.opennms.alec.datasource.common.inventory.ManagedObjectType;
import org.opennms.integration.api.v1.dao.AlarmDao;
import org.opennms.integration.api.v1.events.EventForwarder;
import org.opennms.integration.api.v1.model.Alarm;
import org.opennms.integration.api.v1.model.Node;
import org.opennms.integration.api.v1.model.Severity;

public class DirectAlarmDataSourceTest {


    private final AlarmDao mockAlarmDao = mock(AlarmDao.class);
    private final ScriptedInventoryService inventoryService = OpennmsDirectScriptedInventory.withDefaults();
    private final ApiMapper mockMapper = new ApiMapper(inventoryService);
    private final EventForwarder mockEventForwarder = mock(EventForwarder.class);
    private final DirectAlarmDatasource dac = new DirectAlarmDatasource(mockAlarmDao, mockEventForwarder, mockMapper);
    private final Alarm alarm = mock(Alarm.class);

    @Before
    public void setup() {
       when(mockAlarmDao.getAlarms()).thenReturn(Arrays.asList(alarm));
       dac.init();
    }


    @Test
    public void testNewOrUpdatedAlarmWhenAlarmIsASituation() {

        Node node = mock(Node.class);
        when(node.getForeignSource()).thenReturn("fs");
        when(node.getForeignId()).thenReturn("fi");
        when(node.getId()).thenReturn(100);

        Alarm alarm1 = mock(Alarm.class);
        when(alarm1.getId()).thenReturn(1);
        when(alarm1.isSituation()).thenReturn(true);
        when(alarm1.getReductionKey()).thenReturn("key");
        when(alarm1.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm1.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm1.getNode()).thenReturn(node);
        when(alarm1.getFirstEventTime()).thenReturn(new Date());
        when(alarm1.getLastEventTime()).thenReturn(new Date());
        dac.handleNewOrUpdatedAlarm(alarm1);
        assertTrue(true);
    }

    @Test
    public void testGetSituation() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.isSituation()).thenReturn(true);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getSituation(1).isPresent());
    }

    @Test
    public void testGetSituationNotFound() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.isSituation()).thenReturn(true);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getSituation(2).isEmpty());
    }

    @Test
    public void testGetAlarm() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getAlarm(1).isPresent());
    }

    @Test
    public void testGetAlarmNotFound() throws InterruptedException {
        when(alarm.getId()).thenReturn(1);
        when(alarm.getReductionKey()).thenReturn("key");
        when(alarm.getManagedObjectInstance()).thenReturn("test:1");
        when(alarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(alarm.getFirstEventTime()).thenReturn(new Date());
        when(alarm.getLastEventTime()).thenReturn(new Date());
        assertTrue(dac.getAlarm(2).isEmpty());
    }

    @Test
    public void testInitSkipsBulkLoadWhenAlarmCountExceedsCap() {
        AlarmDao cappedAlarmDao = mock(AlarmDao.class);
        when(cappedAlarmDao.getAlarmCount()).thenReturn(60_000L);
        DirectAlarmDatasource capped = new DirectAlarmDatasource(cappedAlarmDao, mockEventForwarder, mockMapper, 50_000L);
        capped.init();
        capped.waitUntilReady(); // must return immediately — initLock was released despite skipping load
        verify(cappedAlarmDao, never()).getAlarms();
    }

    @Test
    public void testInitFiltersClearedAlarmsAtStartup() throws InterruptedException {
        AlarmDao filteredAlarmDao = mock(AlarmDao.class);

        Alarm activeAlarm = mock(Alarm.class);
        when(activeAlarm.getId()).thenReturn(10);
        when(activeAlarm.getSeverity()).thenReturn(Severity.MAJOR);
        when(activeAlarm.getReductionKey()).thenReturn("active-key");
        when(activeAlarm.getManagedObjectInstance()).thenReturn("test:10");
        when(activeAlarm.getManagedObjectType()).thenReturn(ManagedObjectType.EntPhysicalEntity.getName());
        when(activeAlarm.getFirstEventTime()).thenReturn(new Date());
        when(activeAlarm.getLastEventTime()).thenReturn(new Date());

        Alarm clearedAlarm = mock(Alarm.class);
        when(clearedAlarm.getId()).thenReturn(11);
        when(clearedAlarm.getSeverity()).thenReturn(Severity.CLEARED);

        when(filteredAlarmDao.getAlarms()).thenReturn(Arrays.asList(activeAlarm, clearedAlarm));

        DirectAlarmDatasource filtered = new DirectAlarmDatasource(filteredAlarmDao, mockEventForwarder, mockMapper);
        filtered.init();

        assertTrue("active alarm must be in state", filtered.getAlarm(10).isPresent());
        assertTrue("cleared alarm must be filtered out at init", filtered.getAlarm(11).isEmpty());
    }
}
