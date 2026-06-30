const y = window.Vue.defineComponent, e = window.Vue.createElementVNode, c = window.Vue.openBlock, r = window.Vue.createElementBlock, g = window.Vue.createCommentVNode, b = window.Vue.normalizeClass, C = window.Vue.renderList, L = window.Vue.Fragment, k = window.Vue.vModelText, x = window.Vue.withDirectives, A = window.Vue.Transition, E = window.Vue.withCtx, T = window.Vue.createVNode, M = window.Vue.pushScopeId, S = window.Vue.popScopeId, _ = (i) => (M("data-v-7a753642"), i = i(), S(), i), I = { class: "alec-chatbot" }, N = ["aria-label"], O = {
  key: 0,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "22",
  height: "22"
}, z = /* @__PURE__ */ _(() => /* @__PURE__ */ e("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" }, null, -1)), B = [
  z
], H = {
  key: 1,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "20",
  height: "20"
}, D = /* @__PURE__ */ _(() => /* @__PURE__ */ e("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }, null, -1)), $ = [
  D
], q = {
  key: 0,
  class: "alec-chatbot__panel",
  role: "dialog",
  "aria-label": "ALEC Assistant"
}, P = /* @__PURE__ */ _(() => /* @__PURE__ */ e("span", { class: "alec-chatbot__title" }, "ALEC Assistant", -1)), j = ["innerHTML"], F = {
  key: 0,
  class: "alec-chatbot__message alec-chatbot__message--assistant"
}, K = /* @__PURE__ */ _(() => /* @__PURE__ */ e("span", { class: "alec-chatbot__bubble alec-chatbot__bubble--loading" }, [
  /* @__PURE__ */ e("span", { class: "alec-chatbot__dot" }),
  /* @__PURE__ */ e("span", { class: "alec-chatbot__dot" }),
  /* @__PURE__ */ e("span", { class: "alec-chatbot__dot" })
], -1)), U = [
  K
], J = { class: "alec-chatbot__input-row" }, R = ["disabled"], W = ["disabled"], G = /* @__PURE__ */ _(() => /* @__PURE__ */ e("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  width: "18",
  height: "18"
}, [
  /* @__PURE__ */ e("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" })
], -1)), Q = [
  G
], p = window.Vue.ref, X = window.Vue.reactive, Y = window.Vue.nextTick, Z = /* @__PURE__ */ y({
  __name: "ChatbotOverlay",
  setup(i) {
    const s = p(!1), a = p(""), n = p(!1), u = p(null), d = X([
      {
        role: "assistant",
        content: "Hi! I'm the ALEC Assistant. I can answer questions about your OpenNMS environment \u2014 alarms, nodes, situations, and what's happening right now. What would you like to know?"
      }
    ]), w = () => {
      s.value = !s.value;
    }, f = () => {
      const t = window.location.href, l = t.match(/\/node\/detail\/(\d+)/);
      if (l)
        return `Viewing node detail page for node ID ${l[1]}`;
      const o = t.match(/\/alarm\/detail\/(\d+)/);
      return o ? `Viewing alarm detail for alarm ID ${o[1]}` : t.match(/#\/situations/) ? "Viewing the Situations list" : t.match(/#\/alarms/) ? "Viewing the Alarms list" : t.match(/topology/) ? "Viewing the Topology map" : t.match(/plugins\/alec/) ? "Viewing the ALEC plugin configuration page" : `Current URL: ${t}`;
    }, v = async () => {
      await Y(), u.value && (u.value.scrollTop = u.value.scrollHeight);
    }, m = async () => {
      var l;
      const t = a.value.trim();
      if (!(!t || n.value)) {
        a.value = "", d.push({ role: "user", content: t }), n.value = !0, await v();
        try {
          const o = await fetch("/opennms/rest/alec/llm/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ question: t, pageContext: f() })
          });
          if (o.status === 503)
            d.push({
              role: "assistant",
              content: "LLM is not configured. Please set up the LLM integration under **Plugins \u2192 ALEC \u2192 LLM Setup**."
            });
          else if (!o.ok)
            d.push({ role: "assistant", content: `Error ${o.status} \u2014 please try again.` });
          else {
            const h = await o.json();
            d.push({ role: "assistant", content: (l = h.answer) != null ? l : "(empty response)" });
          }
        } catch {
          d.push({ role: "assistant", content: "Network error \u2014 please try again." });
        } finally {
          n.value = !1, await v();
        }
      }
    }, V = (t) => {
      t.key === "Enter" && !t.shiftKey && (t.preventDefault(), m());
    };
    return (t, l) => (c(), r("div", I, [
      e("button", {
        class: b(["alec-chatbot__fab", { "alec-chatbot__fab--open": s.value }]),
        "aria-label": s.value ? "Close ALEC Assistant" : "Open ALEC Assistant",
        onClick: w
      }, [
        s.value ? (c(), r("svg", H, $)) : (c(), r("svg", O, B))
      ], 10, N),
      T(A, { name: "alec-slide" }, {
        default: E(() => [
          s.value ? (c(), r("div", q, [
            e("div", { class: "alec-chatbot__header" }, [
              P,
              e("button", {
                class: "alec-chatbot__close",
                "aria-label": "Close",
                onClick: w
              }, "\u2715")
            ]),
            e("div", {
              class: "alec-chatbot__messages",
              ref_key: "messageList",
              ref: u
            }, [
              (c(!0), r(L, null, C(d, (o, h) => (c(), r("div", {
                key: h,
                class: b(["alec-chatbot__message", `alec-chatbot__message--${o.role}`])
              }, [
                e("span", {
                  class: "alec-chatbot__bubble",
                  innerHTML: o.content.replace(/\n/g, "<br>")
                }, null, 8, j)
              ], 2))), 128)),
              n.value ? (c(), r("div", F, U)) : g("", !0)
            ], 512),
            e("div", J, [
              x(e("textarea", {
                "onUpdate:modelValue": l[0] || (l[0] = (o) => a.value = o),
                class: "alec-chatbot__input",
                placeholder: "Ask about nodes, alarms, situations\u2026",
                rows: "2",
                disabled: n.value,
                onKeydown: V
              }, null, 40, R), [
                [k, a.value]
              ]),
              e("button", {
                class: "alec-chatbot__send",
                disabled: n.value || !a.value.trim(),
                "aria-label": "Send",
                onClick: m
              }, Q, 8, W)
            ])
          ])) : g("", !0)
        ]),
        _: 1
      })
    ]));
  }
});
const ee = (i, s) => {
  const a = i.__vccOpts || i;
  for (const [n, u] of s)
    a[n] = u;
  return a;
}, ae = /* @__PURE__ */ ee(Z, [["__scopeId", "data-v-7a753642"]]);
export {
  ae as default
};
