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

package org.opennms.alec.datasource.common;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.junit.Test;
import org.opennms.alec.datasource.api.Situation;
import org.opennms.alec.datasource.api.SituationHandler;

public class CompositeSituationHandlerTest {

    private static class RecordingHandler implements SituationHandler {
        final List<Situation> received = new ArrayList<>();
        final List<String> deleted = new ArrayList<>();

        @Override
        public void onSituation(Situation s) {
            received.add(s);
        }

        @Override
        public void onSituationDeleted(String id) {
            deleted.add(id);
        }
    }

    private static class ThrowingHandler implements SituationHandler {
        final AtomicInteger calls = new AtomicInteger();

        @Override
        public void onSituation(Situation s) {
            calls.incrementAndGet();
            throw new RuntimeException("boom");
        }

        @Override
        public void onSituationDeleted(String id) {
            calls.incrementAndGet();
            throw new RuntimeException("boom");
        }
    }

    private static Situation stubSituation() {
        return ImmutableSituation.newBuilder().setId("sit-1").setCreationTime(0L).build();
    }

    @Test
    public void forwardsOnSituationToEveryDelegate() {
        RecordingHandler a = new RecordingHandler();
        RecordingHandler b = new RecordingHandler();
        CompositeSituationHandler composite = new CompositeSituationHandler(Arrays.asList(a, b));

        Situation s = stubSituation();
        composite.onSituation(s);

        assertEquals(1, a.received.size());
        assertEquals(1, b.received.size());
        assertEquals("sit-1", a.received.get(0).getId());
    }

    @Test
    public void forwardsOnSituationDeletedToEveryDelegate() {
        RecordingHandler a = new RecordingHandler();
        RecordingHandler b = new RecordingHandler();
        CompositeSituationHandler composite = new CompositeSituationHandler(Arrays.asList(a, b));

        composite.onSituationDeleted("sit-99");

        assertEquals(Arrays.asList("sit-99"), a.deleted);
        assertEquals(Arrays.asList("sit-99"), b.deleted);
    }

    @Test
    public void aDelegateThrowingDoesNotStopRemainingDelegates() {
        ThrowingHandler bad = new ThrowingHandler();
        RecordingHandler good = new RecordingHandler();
        // Bad handler comes FIRST in the list — it must not short-circuit the loop.
        CompositeSituationHandler composite = new CompositeSituationHandler(Arrays.asList(bad, good));

        composite.onSituation(stubSituation());
        assertEquals("bad handler invoked", 1, bad.calls.get());
        assertEquals("good handler still received the callback after bad threw",
                1, good.received.size());

        composite.onSituationDeleted("sit-2");
        assertEquals("bad handler invoked for delete too", 2, bad.calls.get());
        assertEquals("good handler still received the delete callback",
                Arrays.asList("sit-2"), good.deleted);
    }

    @Test
    public void nullDelegateListIsTreatedAsNoOp() {
        CompositeSituationHandler composite = new CompositeSituationHandler(null);
        // No exception, no observable effect — we can only assert that these calls don't throw.
        composite.onSituation(stubSituation());
        composite.onSituationDeleted("anything");
    }

    @Test
    public void emptyDelegateListIsANoOp() {
        CompositeSituationHandler composite = new CompositeSituationHandler(new ArrayList<>());
        composite.onSituation(stubSituation());
        composite.onSituationDeleted("anything");
    }

    @Test
    public void liveListMutationsAreVisibleOnNextCallback() {
        // Simulates the OSGi reference-list contract: the underlying list is held
        // by reference, and additions made after construction take effect on the
        // very next callback.
        List<SituationHandler> live = new ArrayList<>();
        RecordingHandler initial = new RecordingHandler();
        live.add(initial);
        CompositeSituationHandler composite = new CompositeSituationHandler(live);

        composite.onSituation(stubSituation());
        assertEquals(1, initial.received.size());

        RecordingHandler lateJoiner = new RecordingHandler();
        live.add(lateJoiner);

        composite.onSituation(stubSituation());
        assertEquals("initial keeps receiving", 2, initial.received.size());
        assertTrue("late joiner picked up the next callback", lateJoiner.received.size() == 1);
    }
}
