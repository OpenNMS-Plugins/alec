const ce = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, nS = {}, rS = window.Vue.resolveComponent, oS = window.Vue.createVNode, iS = window.Vue.openBlock, sS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const aS = { class: "main" };
function lS(e, o) {
  const r = rS("router-view");
  return iS(), sS("div", aS, [
    oS(r)
  ]);
}
const uS = /* @__PURE__ */ ce(nS, [["render", lS], ["__scopeId", "data-v-5d32d140"]]), cS = window.Vue.defineComponent, dS = window.Vue.openBlock, fS = window.Vue.createBlock, hS = /* @__PURE__ */ cS({
  __name: "App",
  setup(e) {
    return (o, r) => (dS(), fS(uS));
  }
});
var ri = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dm = { exports: {} }, Wc = { exports: {} }, fm = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, wS = fm, qc = Object.prototype.toString, Hc = function(e) {
  return function(o) {
    var r = qc.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function xr(e) {
  return e = e.toLowerCase(), function(r) {
    return Hc(r) === e;
  };
}
function zc(e) {
  return Array.isArray(e);
}
function va(e) {
  return typeof e > "u";
}
function vS(e) {
  return e !== null && !va(e) && e.constructor !== null && !va(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var hm = xr("ArrayBuffer");
function mS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && hm(e.buffer), o;
}
function _S(e) {
  return typeof e == "string";
}
function gS(e) {
  return typeof e == "number";
}
function pm(e) {
  return e !== null && typeof e == "object";
}
function la(e) {
  if (Hc(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var $S = xr("Date"), yS = xr("File"), VS = xr("Blob"), bS = xr("FileList");
function Yc(e) {
  return qc.call(e) === "[object Function]";
}
function CS(e) {
  return pm(e) && Yc(e.pipe);
}
function SS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || qc.call(e) === o || Yc(e.toString) && e.toString() === o);
}
var ES = xr("URLSearchParams");
function IS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function kS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Gc(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), zc(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Ec() {
  var e = {};
  function o(a, u) {
    la(e[u]) && la(a) ? e[u] = Ec(e[u], a) : la(a) ? e[u] = Ec({}, a) : zc(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Gc(arguments[r], o);
  return e;
}
function xS(e, o, r) {
  return Gc(o, function(a, u) {
    r && typeof a == "function" ? e[u] = wS(a, r) : e[u] = a;
  }), e;
}
function AS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function BS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function TS(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function DS(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function NS(e) {
  if (!e)
    return null;
  var o = e.length;
  if (va(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var LS = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), ze = {
  isArray: zc,
  isArrayBuffer: hm,
  isBuffer: vS,
  isFormData: SS,
  isArrayBufferView: mS,
  isString: _S,
  isNumber: gS,
  isObject: pm,
  isPlainObject: la,
  isUndefined: va,
  isDate: $S,
  isFile: yS,
  isBlob: VS,
  isFunction: Yc,
  isStream: CS,
  isURLSearchParams: ES,
  isStandardBrowserEnv: kS,
  forEach: Gc,
  merge: Ec,
  extend: xS,
  trim: IS,
  stripBOM: AS,
  inherits: BS,
  toFlatObject: TS,
  kindOf: Hc,
  kindOfTest: xr,
  endsWith: DS,
  toArray: NS,
  isTypedArray: LS,
  isFileList: bS
}, Gr = ze;
function Jh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var wm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (Gr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    Gr.forEach(r, function(w, m) {
      w === null || typeof w > "u" || (Gr.isArray(w) ? m = m + "[]" : w = [w], Gr.forEach(w, function($) {
        Gr.isDate($) ? $ = $.toISOString() : Gr.isObject($) && ($ = JSON.stringify($)), u.push(Jh(m) + "=" + Jh($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, MS = ze;
function ka() {
  this.handlers = [];
}
ka.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
ka.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
ka.prototype.forEach = function(o) {
  MS.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var OS = ka, PS = ze, RS = function(o, r) {
  PS.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, vm = ze;
function vo(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
vm.inherits(vo, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var mm = vo.prototype, _m = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(e) {
  _m[e] = { value: e };
});
Object.defineProperties(vo, _m);
Object.defineProperty(mm, "isAxiosError", { value: !0 });
vo.from = function(e, o, r, s, a, u) {
  var c = Object.create(mm);
  return vm.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), vo.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var yo = vo, gm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Gt = ze;
function FS(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : Gt.isDate(u) ? u.toISOString() : Gt.isArrayBuffer(u) || Gt.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (Gt.isPlainObject(u) || Gt.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), Gt.forEach(u, function(w, m) {
        if (!Gt.isUndefined(w)) {
          var _ = c ? c + "." + m : m, $;
          if (w && !c && typeof w == "object") {
            if (Gt.endsWith(m, "{}"))
              w = JSON.stringify(w);
            else if (Gt.endsWith(m, "[]") && ($ = Gt.toArray(w))) {
              $.forEach(function(y) {
                !Gt.isUndefined(y) && o.append(_, s(y));
              });
              return;
            }
          }
          a(w, _);
        }
      }), r.pop();
    } else
      o.append(c, s(u));
  }
  return a(e), o;
}
var $m = FS, gu, Xh;
function US() {
  if (Xh)
    return gu;
  Xh = 1;
  var e = yo;
  return gu = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, gu;
}
var $u, Qh;
function WS() {
  if (Qh)
    return $u;
  Qh = 1;
  var e = ze;
  return $u = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, c, f, w) {
        var m = [];
        m.push(s + "=" + encodeURIComponent(a)), e.isNumber(u) && m.push("expires=" + new Date(u).toGMTString()), e.isString(c) && m.push("path=" + c), e.isString(f) && m.push("domain=" + f), w === !0 && m.push("secure"), document.cookie = m.join("; ");
      },
      read: function(s) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + s + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
      },
      remove: function(s) {
        this.write(s, "", Date.now() - 864e5);
      }
    };
  }() : function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }(), $u;
}
var qS = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, HS = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, zS = qS, YS = HS, ym = function(o, r) {
  return o && !zS(r) ? YS(o, r) : r;
}, yu, ep;
function GS() {
  if (ep)
    return yu;
  ep = 1;
  var e = ze, o = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  return yu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(m) {
      if (f = m.indexOf(":"), u = e.trim(m.substr(0, f)).toLowerCase(), c = e.trim(m.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, yu;
}
var Vu, tp;
function jS() {
  if (tp)
    return Vu;
  tp = 1;
  var e = ze;
  return Vu = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), a;
    function u(c) {
      var f = c;
      return r && (s.setAttribute("href", f), f = s.href), s.setAttribute("href", f), {
        href: s.href,
        protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
        host: s.host,
        search: s.search ? s.search.replace(/^\?/, "") : "",
        hash: s.hash ? s.hash.replace(/^#/, "") : "",
        hostname: s.hostname,
        port: s.port,
        pathname: s.pathname.charAt(0) === "/" ? s.pathname : "/" + s.pathname
      };
    }
    return a = u(window.location.href), function(f) {
      var w = e.isString(f) ? u(f) : f;
      return w.protocol === a.protocol && w.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Vu;
}
var bu, np;
function xa() {
  if (np)
    return bu;
  np = 1;
  var e = yo, o = ze;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), bu = r, bu;
}
var Cu, rp;
function ZS() {
  return rp || (rp = 1, Cu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Cu;
}
var Su, op;
function ip() {
  if (op)
    return Su;
  op = 1;
  var e = ze, o = US(), r = WS(), s = wm, a = ym, u = GS(), c = jS(), f = gm, w = yo, m = xa(), _ = ZS();
  return Su = function(y) {
    return new Promise(function(B, L) {
      var M = y.data, S = y.headers, N = y.responseType, A;
      function O() {
        y.cancelToken && y.cancelToken.unsubscribe(A), y.signal && y.signal.removeEventListener("abort", A);
      }
      e.isFormData(M) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var I = new XMLHttpRequest();
      if (y.auth) {
        var F = y.auth.username || "", P = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(F + ":" + P);
      }
      var q = a(y.baseURL, y.url);
      I.open(y.method.toUpperCase(), s(q, y.params, y.paramsSerializer), !0), I.timeout = y.timeout;
      function ve() {
        if (!!I) {
          var K = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, oe = !N || N === "text" || N === "json" ? I.responseText : I.response, Ae = {
            data: oe,
            status: I.status,
            statusText: I.statusText,
            headers: K,
            config: y,
            request: I
          };
          o(function(Re) {
            B(Re), O();
          }, function(Re) {
            L(Re), O();
          }, Ae), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = ve : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(ve);
      }, I.onabort = function() {
        !I || (L(new w("Request aborted", w.ECONNABORTED, y, I)), I = null);
      }, I.onerror = function() {
        L(new w("Network Error", w.ERR_NETWORK, y, I, I)), I = null;
      }, I.ontimeout = function() {
        var oe = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ae = y.transitional || f;
        y.timeoutErrorMessage && (oe = y.timeoutErrorMessage), L(new w(
          oe,
          Ae.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var ae = (y.withCredentials || c(q)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        ae && (S[y.xsrfHeaderName] = ae);
      }
      "setRequestHeader" in I && e.forEach(S, function(oe, Ae) {
        typeof M > "u" && Ae.toLowerCase() === "content-type" ? delete S[Ae] : I.setRequestHeader(Ae, oe);
      }), e.isUndefined(y.withCredentials) || (I.withCredentials = !!y.withCredentials), N && N !== "json" && (I.responseType = y.responseType), typeof y.onDownloadProgress == "function" && I.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (A = function(K) {
        !I || (L(!K || K && K.type ? new m() : K), I.abort(), I = null);
      }, y.cancelToken && y.cancelToken.subscribe(A), y.signal && (y.signal.aborted ? A() : y.signal.addEventListener("abort", A))), M || (M = null);
      var re = _(q);
      if (re && ["http", "https", "file"].indexOf(re) === -1) {
        L(new w("Unsupported protocol " + re + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      I.send(M);
    });
  }, Su;
}
var Eu, sp;
function KS() {
  return sp || (sp = 1, Eu = null), Eu;
}
var Oe = ze, ap = RS, lp = yo, JS = gm, XS = $m, QS = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function up(e, o) {
  !Oe.isUndefined(e) && Oe.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function eE() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = ip()), e;
}
function tE(e, o, r) {
  if (Oe.isString(e))
    try {
      return (o || JSON.parse)(e), Oe.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Aa = {
  transitional: JS,
  adapter: eE(),
  transformRequest: [function(o, r) {
    if (ap(r, "Accept"), ap(r, "Content-Type"), Oe.isFormData(o) || Oe.isArrayBuffer(o) || Oe.isBuffer(o) || Oe.isStream(o) || Oe.isFile(o) || Oe.isBlob(o))
      return o;
    if (Oe.isArrayBufferView(o))
      return o.buffer;
    if (Oe.isURLSearchParams(o))
      return up(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Oe.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Oe.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return XS(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return up(r, "application/json"), tE(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Aa.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Oe.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? lp.from(c, lp.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: KS()
  },
  validateStatus: function(o) {
    return o >= 200 && o < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Oe.forEach(["delete", "get", "head"], function(o) {
  Aa.headers[o] = {};
});
Oe.forEach(["post", "put", "patch"], function(o) {
  Aa.headers[o] = Oe.merge(QS);
});
var jc = Aa, nE = ze, rE = jc, oE = function(o, r, s) {
  var a = this || rE;
  return nE.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Iu, cp;
function Vm() {
  return cp || (cp = 1, Iu = function(o) {
    return !!(o && o.__CANCEL__);
  }), Iu;
}
var dp = ze, ku = oE, iE = Vm(), sE = jc, aE = xa();
function xu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new aE();
}
var lE = function(o) {
  xu(o), o.headers = o.headers || {}, o.data = ku.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = dp.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), dp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || sE.adapter;
  return r(o).then(function(a) {
    return xu(o), a.data = ku.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return iE(a) || (xu(o), a && a.response && (a.response.data = ku.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, gt = ze, bm = function(o, r) {
  r = r || {};
  var s = {};
  function a(_, $) {
    return gt.isPlainObject(_) && gt.isPlainObject($) ? gt.merge(_, $) : gt.isPlainObject($) ? gt.merge({}, $) : gt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (gt.isUndefined(r[_])) {
      if (!gt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!gt.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (gt.isUndefined(r[_])) {
      if (!gt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(void 0, r[_]);
  }
  function w(_) {
    if (_ in r)
      return a(o[_], r[_]);
    if (_ in o)
      return a(void 0, o[_]);
  }
  var m = {
    url: c,
    method: c,
    data: c,
    baseURL: f,
    transformRequest: f,
    transformResponse: f,
    paramsSerializer: f,
    timeout: f,
    timeoutMessage: f,
    withCredentials: f,
    adapter: f,
    responseType: f,
    xsrfCookieName: f,
    xsrfHeaderName: f,
    onUploadProgress: f,
    onDownloadProgress: f,
    decompress: f,
    maxContentLength: f,
    maxBodyLength: f,
    beforeRedirect: f,
    transport: f,
    httpAgent: f,
    httpsAgent: f,
    cancelToken: f,
    socketPath: f,
    responseEncoding: f,
    validateStatus: w
  };
  return gt.forEach(Object.keys(o).concat(Object.keys(r)), function($) {
    var y = m[$] || u, T = y($);
    gt.isUndefined(T) && y !== w || (s[$] = T);
  }), s;
}, Au, fp;
function Cm() {
  return fp || (fp = 1, Au = {
    version: "0.27.2"
  }), Au;
}
var uE = Cm().version, Gn = yo, Zc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  Zc[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var hp = {};
Zc.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + uE + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new Gn(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Gn.ERR_DEPRECATED
      );
    return r && !hp[c] && (hp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function cE(e, o, r) {
  if (typeof e != "object")
    throw new Gn("options must be an object", Gn.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new Gn("option " + u + " must be " + w, Gn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Gn("Unknown option " + u, Gn.ERR_BAD_OPTION);
  }
}
var dE = {
  assertOptions: cE,
  validators: Zc
}, Sm = ze, fE = wm, pp = OS, wp = lE, Ba = bm, hE = ym, Em = dE, jr = Em.validators;
function mo(e) {
  this.defaults = e, this.interceptors = {
    request: new pp(),
    response: new pp()
  };
}
mo.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ba(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Em.assertOptions(s, {
    silentJSONParsing: jr.transitional(jr.boolean),
    forcedJSONParsing: jr.transitional(jr.boolean),
    clarifyTimeoutError: jr.transitional(jr.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(T) {
    typeof T.runWhen == "function" && T.runWhen(r) === !1 || (u = u && T.synchronous, a.unshift(T.fulfilled, T.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(T) {
    c.push(T.fulfilled, T.rejected);
  });
  var f;
  if (!u) {
    var w = [wp, void 0];
    for (Array.prototype.unshift.apply(w, a), w = w.concat(c), f = Promise.resolve(r); w.length; )
      f = f.then(w.shift(), w.shift());
    return f;
  }
  for (var m = r; a.length; ) {
    var _ = a.shift(), $ = a.shift();
    try {
      m = _(m);
    } catch (y) {
      $(y);
      break;
    }
  }
  try {
    f = wp(m);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
mo.prototype.getUri = function(o) {
  o = Ba(this.defaults, o);
  var r = hE(o.baseURL, o.url);
  return fE(r, o.params, o.paramsSerializer);
};
Sm.forEach(["delete", "get", "head", "options"], function(o) {
  mo.prototype[o] = function(r, s) {
    return this.request(Ba(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Sm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Ba(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  mo.prototype[o] = r(), mo.prototype[o + "Form"] = r(!0);
});
var pE = mo, Bu, vp;
function wE() {
  if (vp)
    return Bu;
  vp = 1;
  var e = xa();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var s;
    this.promise = new Promise(function(c) {
      s = c;
    });
    var a = this;
    this.promise.then(function(u) {
      if (!!a._listeners) {
        var c, f = a._listeners.length;
        for (c = 0; c < f; c++)
          a._listeners[c](u);
        a._listeners = null;
      }
    }), this.promise.then = function(u) {
      var c, f = new Promise(function(w) {
        a.subscribe(w), c = w;
      }).then(u);
      return f.cancel = function() {
        a.unsubscribe(c);
      }, f;
    }, r(function(c) {
      a.reason || (a.reason = new e(c), s(a.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, o.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(s);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, o.source = function() {
    var s, a = new o(function(c) {
      s = c;
    });
    return {
      token: a,
      cancel: s
    };
  }, Bu = o, Bu;
}
var Tu, mp;
function vE() {
  return mp || (mp = 1, Tu = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Tu;
}
var Du, _p;
function mE() {
  if (_p)
    return Du;
  _p = 1;
  var e = ze;
  return Du = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Du;
}
var gp = ze, _E = fm, ua = pE, gE = bm, $E = jc;
function Im(e) {
  var o = new ua(e), r = _E(ua.prototype.request, o);
  return gp.extend(r, ua.prototype, o), gp.extend(r, o), r.create = function(a) {
    return Im(gE(e, a));
  }, r;
}
var ft = Im($E);
ft.Axios = ua;
ft.CanceledError = xa();
ft.CancelToken = wE();
ft.isCancel = Vm();
ft.VERSION = Cm().version;
ft.toFormData = $m;
ft.AxiosError = yo;
ft.Cancel = ft.CanceledError;
ft.all = function(o) {
  return Promise.all(o);
};
ft.spread = vE();
ft.isAxiosError = mE();
Wc.exports = ft;
Wc.exports.default = ft;
(function(e) {
  e.exports = Wc.exports;
})(dm);
const km = /* @__PURE__ */ pS(dm.exports), Bn = km.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Qt = km.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var we = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, o) {
  (function() {
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", m = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, B = 1, L = 2, M = 1, S = 2, N = 4, A = 8, O = 16, I = 32, F = 64, P = 128, q = 256, ve = 512, ae = 30, re = "...", K = 800, oe = 16, Ae = 1, me = 2, Re = 3, Fe = 1 / 0, Je = 9007199254740991, No = 17976931348623157e292, qi = 0 / 0, tn = 4294967295, pg = tn - 1, wg = tn >>> 1, vg = [
      ["ary", P],
      ["bind", M],
      ["bindKey", S],
      ["curry", A],
      ["curryRight", O],
      ["flip", ve],
      ["partial", I],
      ["partialRight", F],
      ["rearg", q]
    ], Br = "[object Arguments]", Hi = "[object Array]", mg = "[object AsyncFunction]", Lo = "[object Boolean]", Mo = "[object Date]", _g = "[object DOMException]", zi = "[object Error]", Yi = "[object Function]", gd = "[object GeneratorFunction]", Ut = "[object Map]", Oo = "[object Number]", gg = "[object Null]", pn = "[object Object]", $d = "[object Promise]", $g = "[object Proxy]", Po = "[object RegExp]", Wt = "[object Set]", Ro = "[object String]", Gi = "[object Symbol]", yg = "[object Undefined]", Fo = "[object WeakMap]", Vg = "[object WeakSet]", Uo = "[object ArrayBuffer]", Tr = "[object DataView]", Xa = "[object Float32Array]", Qa = "[object Float64Array]", el = "[object Int8Array]", tl = "[object Int16Array]", nl = "[object Int32Array]", rl = "[object Uint8Array]", ol = "[object Uint8ClampedArray]", il = "[object Uint16Array]", sl = "[object Uint32Array]", bg = /\b__p \+= '';/g, Cg = /\b(__p \+=) '' \+/g, Sg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, yd = /&(?:amp|lt|gt|quot|#39);/g, Vd = /[&<>"']/g, Eg = RegExp(yd.source), Ig = RegExp(Vd.source), kg = /<%-([\s\S]+?)%>/g, xg = /<%([\s\S]+?)%>/g, bd = /<%=([\s\S]+?)%>/g, Ag = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bg = /^\w*$/, Tg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, al = /[\\^$.*+?()[\]{}|]/g, Dg = RegExp(al.source), ll = /^\s+/, Ng = /\s/, Lg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Mg = /\{\n\/\* \[wrapped with (.+)\] \*/, Og = /,? & /, Pg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Rg = /[()=,{}\[\]\/\s]/, Fg = /\\(\\)?/g, Ug = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Cd = /\w*$/, Wg = /^[-+]0x[0-9a-f]+$/i, qg = /^0b[01]+$/i, Hg = /^\[object .+?Constructor\]$/, zg = /^0o[0-7]+$/i, Yg = /^(?:0|[1-9]\d*)$/, Gg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ji = /($^)/, jg = /['\n\r\u2028\u2029\\]/g, Zi = "\\ud800-\\udfff", Zg = "\\u0300-\\u036f", Kg = "\\ufe20-\\ufe2f", Jg = "\\u20d0-\\u20ff", Sd = Zg + Kg + Jg, Ed = "\\u2700-\\u27bf", Id = "a-z\\xdf-\\xf6\\xf8-\\xff", Xg = "\\xac\\xb1\\xd7\\xf7", Qg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", e1 = "\\u2000-\\u206f", t1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", kd = "A-Z\\xc0-\\xd6\\xd8-\\xde", xd = "\\ufe0e\\ufe0f", Ad = Xg + Qg + e1 + t1, ul = "['\u2019]", n1 = "[" + Zi + "]", Bd = "[" + Ad + "]", Ki = "[" + Sd + "]", Td = "\\d+", r1 = "[" + Ed + "]", Dd = "[" + Id + "]", Nd = "[^" + Zi + Ad + Td + Ed + Id + kd + "]", cl = "\\ud83c[\\udffb-\\udfff]", o1 = "(?:" + Ki + "|" + cl + ")", Ld = "[^" + Zi + "]", dl = "(?:\\ud83c[\\udde6-\\uddff]){2}", fl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Dr = "[" + kd + "]", Md = "\\u200d", Od = "(?:" + Dd + "|" + Nd + ")", i1 = "(?:" + Dr + "|" + Nd + ")", Pd = "(?:" + ul + "(?:d|ll|m|re|s|t|ve))?", Rd = "(?:" + ul + "(?:D|LL|M|RE|S|T|VE))?", Fd = o1 + "?", Ud = "[" + xd + "]?", s1 = "(?:" + Md + "(?:" + [Ld, dl, fl].join("|") + ")" + Ud + Fd + ")*", a1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", l1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Wd = Ud + Fd + s1, u1 = "(?:" + [r1, dl, fl].join("|") + ")" + Wd, c1 = "(?:" + [Ld + Ki + "?", Ki, dl, fl, n1].join("|") + ")", d1 = RegExp(ul, "g"), f1 = RegExp(Ki, "g"), hl = RegExp(cl + "(?=" + cl + ")|" + c1 + Wd, "g"), h1 = RegExp([
      Dr + "?" + Dd + "+" + Pd + "(?=" + [Bd, Dr, "$"].join("|") + ")",
      i1 + "+" + Rd + "(?=" + [Bd, Dr + Od, "$"].join("|") + ")",
      Dr + "?" + Od + "+" + Pd,
      Dr + "+" + Rd,
      l1,
      a1,
      Td,
      u1
    ].join("|"), "g"), p1 = RegExp("[" + Md + Zi + Sd + xd + "]"), w1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, v1 = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], m1 = -1, Ve = {};
    Ve[Xa] = Ve[Qa] = Ve[el] = Ve[tl] = Ve[nl] = Ve[rl] = Ve[ol] = Ve[il] = Ve[sl] = !0, Ve[Br] = Ve[Hi] = Ve[Uo] = Ve[Lo] = Ve[Tr] = Ve[Mo] = Ve[zi] = Ve[Yi] = Ve[Ut] = Ve[Oo] = Ve[pn] = Ve[Po] = Ve[Wt] = Ve[Ro] = Ve[Fo] = !1;
    var ge = {};
    ge[Br] = ge[Hi] = ge[Uo] = ge[Tr] = ge[Lo] = ge[Mo] = ge[Xa] = ge[Qa] = ge[el] = ge[tl] = ge[nl] = ge[Ut] = ge[Oo] = ge[pn] = ge[Po] = ge[Wt] = ge[Ro] = ge[Gi] = ge[rl] = ge[ol] = ge[il] = ge[sl] = !0, ge[zi] = ge[Yi] = ge[Fo] = !1;
    var _1 = {
      \u00C0: "A",
      \u00C1: "A",
      \u00C2: "A",
      \u00C3: "A",
      \u00C4: "A",
      \u00C5: "A",
      \u00E0: "a",
      \u00E1: "a",
      \u00E2: "a",
      \u00E3: "a",
      \u00E4: "a",
      \u00E5: "a",
      \u00C7: "C",
      \u00E7: "c",
      \u00D0: "D",
      \u00F0: "d",
      \u00C8: "E",
      \u00C9: "E",
      \u00CA: "E",
      \u00CB: "E",
      \u00E8: "e",
      \u00E9: "e",
      \u00EA: "e",
      \u00EB: "e",
      \u00CC: "I",
      \u00CD: "I",
      \u00CE: "I",
      \u00CF: "I",
      \u00EC: "i",
      \u00ED: "i",
      \u00EE: "i",
      \u00EF: "i",
      \u00D1: "N",
      \u00F1: "n",
      \u00D2: "O",
      \u00D3: "O",
      \u00D4: "O",
      \u00D5: "O",
      \u00D6: "O",
      \u00D8: "O",
      \u00F2: "o",
      \u00F3: "o",
      \u00F4: "o",
      \u00F5: "o",
      \u00F6: "o",
      \u00F8: "o",
      \u00D9: "U",
      \u00DA: "U",
      \u00DB: "U",
      \u00DC: "U",
      \u00F9: "u",
      \u00FA: "u",
      \u00FB: "u",
      \u00FC: "u",
      \u00DD: "Y",
      \u00FD: "y",
      \u00FF: "y",
      \u00C6: "Ae",
      \u00E6: "ae",
      \u00DE: "Th",
      \u00FE: "th",
      \u00DF: "ss",
      \u0100: "A",
      \u0102: "A",
      \u0104: "A",
      \u0101: "a",
      \u0103: "a",
      \u0105: "a",
      \u0106: "C",
      \u0108: "C",
      \u010A: "C",
      \u010C: "C",
      \u0107: "c",
      \u0109: "c",
      \u010B: "c",
      \u010D: "c",
      \u010E: "D",
      \u0110: "D",
      \u010F: "d",
      \u0111: "d",
      \u0112: "E",
      \u0114: "E",
      \u0116: "E",
      \u0118: "E",
      \u011A: "E",
      \u0113: "e",
      \u0115: "e",
      \u0117: "e",
      \u0119: "e",
      \u011B: "e",
      \u011C: "G",
      \u011E: "G",
      \u0120: "G",
      \u0122: "G",
      \u011D: "g",
      \u011F: "g",
      \u0121: "g",
      \u0123: "g",
      \u0124: "H",
      \u0126: "H",
      \u0125: "h",
      \u0127: "h",
      \u0128: "I",
      \u012A: "I",
      \u012C: "I",
      \u012E: "I",
      \u0130: "I",
      \u0129: "i",
      \u012B: "i",
      \u012D: "i",
      \u012F: "i",
      \u0131: "i",
      \u0134: "J",
      \u0135: "j",
      \u0136: "K",
      \u0137: "k",
      \u0138: "k",
      \u0139: "L",
      \u013B: "L",
      \u013D: "L",
      \u013F: "L",
      \u0141: "L",
      \u013A: "l",
      \u013C: "l",
      \u013E: "l",
      \u0140: "l",
      \u0142: "l",
      \u0143: "N",
      \u0145: "N",
      \u0147: "N",
      \u014A: "N",
      \u0144: "n",
      \u0146: "n",
      \u0148: "n",
      \u014B: "n",
      \u014C: "O",
      \u014E: "O",
      \u0150: "O",
      \u014D: "o",
      \u014F: "o",
      \u0151: "o",
      \u0154: "R",
      \u0156: "R",
      \u0158: "R",
      \u0155: "r",
      \u0157: "r",
      \u0159: "r",
      \u015A: "S",
      \u015C: "S",
      \u015E: "S",
      \u0160: "S",
      \u015B: "s",
      \u015D: "s",
      \u015F: "s",
      \u0161: "s",
      \u0162: "T",
      \u0164: "T",
      \u0166: "T",
      \u0163: "t",
      \u0165: "t",
      \u0167: "t",
      \u0168: "U",
      \u016A: "U",
      \u016C: "U",
      \u016E: "U",
      \u0170: "U",
      \u0172: "U",
      \u0169: "u",
      \u016B: "u",
      \u016D: "u",
      \u016F: "u",
      \u0171: "u",
      \u0173: "u",
      \u0174: "W",
      \u0175: "w",
      \u0176: "Y",
      \u0177: "y",
      \u0178: "Y",
      \u0179: "Z",
      \u017B: "Z",
      \u017D: "Z",
      \u017A: "z",
      \u017C: "z",
      \u017E: "z",
      \u0132: "IJ",
      \u0133: "ij",
      \u0152: "Oe",
      \u0153: "oe",
      \u0149: "'n",
      \u017F: "s"
    }, g1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, $1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, y1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, V1 = parseFloat, b1 = parseInt, qd = typeof ri == "object" && ri && ri.Object === Object && ri, C1 = typeof self == "object" && self && self.Object === Object && self, Ue = qd || C1 || Function("return this")(), pl = o && !o.nodeType && o, tr = pl && !0 && e && !e.nodeType && e, Hd = tr && tr.exports === pl, wl = Hd && qd.process, St = function() {
      try {
        var V = tr && tr.require && tr.require("util").types;
        return V || wl && wl.binding && wl.binding("util");
      } catch {
      }
    }(), zd = St && St.isArrayBuffer, Yd = St && St.isDate, Gd = St && St.isMap, jd = St && St.isRegExp, Zd = St && St.isSet, Kd = St && St.isTypedArray;
    function ht(V, E, C) {
      switch (C.length) {
        case 0:
          return V.call(E);
        case 1:
          return V.call(E, C[0]);
        case 2:
          return V.call(E, C[0], C[1]);
        case 3:
          return V.call(E, C[0], C[1], C[2]);
      }
      return V.apply(E, C);
    }
    function S1(V, E, C, U) {
      for (var j = -1, le = V == null ? 0 : V.length; ++j < le; ) {
        var Te = V[j];
        E(U, Te, C(Te), V);
      }
      return U;
    }
    function Et(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function E1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function Jd(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function Dn(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = 0, le = []; ++C < U; ) {
        var Te = V[C];
        E(Te, C, V) && (le[j++] = Te);
      }
      return le;
    }
    function Ji(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && Nr(V, E, 0) > -1;
    }
    function vl(V, E, C) {
      for (var U = -1, j = V == null ? 0 : V.length; ++U < j; )
        if (C(E, V[U]))
          return !0;
      return !1;
    }
    function be(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = Array(U); ++C < U; )
        j[C] = E(V[C], C, V);
      return j;
    }
    function Nn(V, E) {
      for (var C = -1, U = E.length, j = V.length; ++C < U; )
        V[j + C] = E[C];
      return V;
    }
    function ml(V, E, C, U) {
      var j = -1, le = V == null ? 0 : V.length;
      for (U && le && (C = V[++j]); ++j < le; )
        C = E(C, V[j], j, V);
      return C;
    }
    function I1(V, E, C, U) {
      var j = V == null ? 0 : V.length;
      for (U && j && (C = V[--j]); j--; )
        C = E(C, V[j], j, V);
      return C;
    }
    function _l(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var k1 = gl("length");
    function x1(V) {
      return V.split("");
    }
    function A1(V) {
      return V.match(Pg) || [];
    }
    function Xd(V, E, C) {
      var U;
      return C(V, function(j, le, Te) {
        if (E(j, le, Te))
          return U = le, !1;
      }), U;
    }
    function Xi(V, E, C, U) {
      for (var j = V.length, le = C + (U ? 1 : -1); U ? le-- : ++le < j; )
        if (E(V[le], le, V))
          return le;
      return -1;
    }
    function Nr(V, E, C) {
      return E === E ? W1(V, E, C) : Xi(V, Qd, C);
    }
    function B1(V, E, C, U) {
      for (var j = C - 1, le = V.length; ++j < le; )
        if (U(V[j], E))
          return j;
      return -1;
    }
    function Qd(V) {
      return V !== V;
    }
    function ef(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? yl(V, E) / C : qi;
    }
    function gl(V) {
      return function(E) {
        return E == null ? r : E[V];
      };
    }
    function $l(V) {
      return function(E) {
        return V == null ? r : V[E];
      };
    }
    function tf(V, E, C, U, j) {
      return j(V, function(le, Te, _e) {
        C = U ? (U = !1, le) : E(C, le, Te, _e);
      }), C;
    }
    function T1(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function yl(V, E) {
      for (var C, U = -1, j = V.length; ++U < j; ) {
        var le = E(V[U]);
        le !== r && (C = C === r ? le : C + le);
      }
      return C;
    }
    function Vl(V, E) {
      for (var C = -1, U = Array(V); ++C < V; )
        U[C] = E(C);
      return U;
    }
    function D1(V, E) {
      return be(E, function(C) {
        return [C, V[C]];
      });
    }
    function nf(V) {
      return V && V.slice(0, af(V) + 1).replace(ll, "");
    }
    function pt(V) {
      return function(E) {
        return V(E);
      };
    }
    function bl(V, E) {
      return be(E, function(C) {
        return V[C];
      });
    }
    function Wo(V, E) {
      return V.has(E);
    }
    function rf(V, E) {
      for (var C = -1, U = V.length; ++C < U && Nr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function of(V, E) {
      for (var C = V.length; C-- && Nr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function N1(V, E) {
      for (var C = V.length, U = 0; C--; )
        V[C] === E && ++U;
      return U;
    }
    var L1 = $l(_1), M1 = $l(g1);
    function O1(V) {
      return "\\" + y1[V];
    }
    function P1(V, E) {
      return V == null ? r : V[E];
    }
    function Lr(V) {
      return p1.test(V);
    }
    function R1(V) {
      return w1.test(V);
    }
    function F1(V) {
      for (var E, C = []; !(E = V.next()).done; )
        C.push(E.value);
      return C;
    }
    function Cl(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U, j) {
        C[++E] = [j, U];
      }), C;
    }
    function sf(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function Ln(V, E) {
      for (var C = -1, U = V.length, j = 0, le = []; ++C < U; ) {
        var Te = V[C];
        (Te === E || Te === _) && (V[C] = _, le[j++] = C);
      }
      return le;
    }
    function Qi(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function U1(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function W1(V, E, C) {
      for (var U = C - 1, j = V.length; ++U < j; )
        if (V[U] === E)
          return U;
      return -1;
    }
    function q1(V, E, C) {
      for (var U = C + 1; U--; )
        if (V[U] === E)
          return U;
      return U;
    }
    function Mr(V) {
      return Lr(V) ? z1(V) : k1(V);
    }
    function qt(V) {
      return Lr(V) ? Y1(V) : x1(V);
    }
    function af(V) {
      for (var E = V.length; E-- && Ng.test(V.charAt(E)); )
        ;
      return E;
    }
    var H1 = $l($1);
    function z1(V) {
      for (var E = hl.lastIndex = 0; hl.test(V); )
        ++E;
      return E;
    }
    function Y1(V) {
      return V.match(hl) || [];
    }
    function G1(V) {
      return V.match(h1) || [];
    }
    var j1 = function V(E) {
      E = E == null ? Ue : Or.defaults(Ue.Object(), E, Or.pick(Ue, v1));
      var C = E.Array, U = E.Date, j = E.Error, le = E.Function, Te = E.Math, _e = E.Object, Sl = E.RegExp, Z1 = E.String, It = E.TypeError, es = C.prototype, K1 = le.prototype, Pr = _e.prototype, ts = E["__core-js_shared__"], ns = K1.toString, he = Pr.hasOwnProperty, J1 = 0, lf = function() {
        var t = /[^.]+$/.exec(ts && ts.keys && ts.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), rs = Pr.toString, X1 = ns.call(_e), Q1 = Ue._, e0 = Sl(
        "^" + ns.call(he).replace(al, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), os = Hd ? E.Buffer : r, Mn = E.Symbol, is = E.Uint8Array, uf = os ? os.allocUnsafe : r, ss = sf(_e.getPrototypeOf, _e), cf = _e.create, df = Pr.propertyIsEnumerable, as = es.splice, ff = Mn ? Mn.isConcatSpreadable : r, qo = Mn ? Mn.iterator : r, nr = Mn ? Mn.toStringTag : r, ls = function() {
        try {
          var t = ar(_e, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), t0 = E.clearTimeout !== Ue.clearTimeout && E.clearTimeout, n0 = U && U.now !== Ue.Date.now && U.now, r0 = E.setTimeout !== Ue.setTimeout && E.setTimeout, us = Te.ceil, cs = Te.floor, El = _e.getOwnPropertySymbols, o0 = os ? os.isBuffer : r, hf = E.isFinite, i0 = es.join, s0 = sf(_e.keys, _e), De = Te.max, Ye = Te.min, a0 = U.now, l0 = E.parseInt, pf = Te.random, u0 = es.reverse, Il = ar(E, "DataView"), Ho = ar(E, "Map"), kl = ar(E, "Promise"), Rr = ar(E, "Set"), zo = ar(E, "WeakMap"), Yo = ar(_e, "create"), ds = zo && new zo(), Fr = {}, c0 = lr(Il), d0 = lr(Ho), f0 = lr(kl), h0 = lr(Rr), p0 = lr(zo), fs = Mn ? Mn.prototype : r, Go = fs ? fs.valueOf : r, wf = fs ? fs.toString : r;
      function h(t) {
        if (Ee(t) && !Z(t) && !(t instanceof ne)) {
          if (t instanceof kt)
            return t;
          if (he.call(t, "__wrapped__"))
            return vh(t);
        }
        return new kt(t);
      }
      var Ur = function() {
        function t() {
        }
        return function(n) {
          if (!Ce(n))
            return {};
          if (cf)
            return cf(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function hs() {
      }
      function kt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: kg,
        evaluate: xg,
        interpolate: bd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = hs.prototype, h.prototype.constructor = h, kt.prototype = Ur(hs.prototype), kt.prototype.constructor = kt;
      function ne(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = tn, this.__views__ = [];
      }
      function w0() {
        var t = new ne(this.__wrapped__);
        return t.__actions__ = ot(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ot(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ot(this.__views__), t;
      }
      function v0() {
        if (this.__filtered__) {
          var t = new ne(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function m0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = Z(t), l = n < 0, d = i ? t.length : 0, p = x$(0, d, this.__views__), v = p.start, g = p.end, b = g - v, k = l ? g : v - 1, x = this.__iteratees__, D = x.length, R = 0, W = Ye(b, this.__takeCount__);
        if (!i || !l && d == b && W == b)
          return Rf(t, this.__actions__);
        var z = [];
        e:
          for (; b-- && R < W; ) {
            k += n;
            for (var X = -1, Y = t[k]; ++X < D; ) {
              var te = x[X], ie = te.iteratee, mt = te.type, et = ie(Y);
              if (mt == me)
                Y = et;
              else if (!et) {
                if (mt == Ae)
                  continue e;
                break e;
              }
            }
            z[R++] = Y;
          }
        return z;
      }
      ne.prototype = Ur(hs.prototype), ne.prototype.constructor = ne;
      function rr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function _0() {
        this.__data__ = Yo ? Yo(null) : {}, this.size = 0;
      }
      function g0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function $0(t) {
        var n = this.__data__;
        if (Yo) {
          var i = n[t];
          return i === w ? r : i;
        }
        return he.call(n, t) ? n[t] : r;
      }
      function y0(t) {
        var n = this.__data__;
        return Yo ? n[t] !== r : he.call(n, t);
      }
      function V0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = Yo && n === r ? w : n, this;
      }
      rr.prototype.clear = _0, rr.prototype.delete = g0, rr.prototype.get = $0, rr.prototype.has = y0, rr.prototype.set = V0;
      function wn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function b0() {
        this.__data__ = [], this.size = 0;
      }
      function C0(t) {
        var n = this.__data__, i = ps(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : as.call(n, i, 1), --this.size, !0;
      }
      function S0(t) {
        var n = this.__data__, i = ps(n, t);
        return i < 0 ? r : n[i][1];
      }
      function E0(t) {
        return ps(this.__data__, t) > -1;
      }
      function I0(t, n) {
        var i = this.__data__, l = ps(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      wn.prototype.clear = b0, wn.prototype.delete = C0, wn.prototype.get = S0, wn.prototype.has = E0, wn.prototype.set = I0;
      function vn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function k0() {
        this.size = 0, this.__data__ = {
          hash: new rr(),
          map: new (Ho || wn)(),
          string: new rr()
        };
      }
      function x0(t) {
        var n = Es(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function A0(t) {
        return Es(this, t).get(t);
      }
      function B0(t) {
        return Es(this, t).has(t);
      }
      function T0(t, n) {
        var i = Es(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      vn.prototype.clear = k0, vn.prototype.delete = x0, vn.prototype.get = A0, vn.prototype.has = B0, vn.prototype.set = T0;
      function or(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new vn(); ++n < i; )
          this.add(t[n]);
      }
      function D0(t) {
        return this.__data__.set(t, w), this;
      }
      function N0(t) {
        return this.__data__.has(t);
      }
      or.prototype.add = or.prototype.push = D0, or.prototype.has = N0;
      function Ht(t) {
        var n = this.__data__ = new wn(t);
        this.size = n.size;
      }
      function L0() {
        this.__data__ = new wn(), this.size = 0;
      }
      function M0(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function O0(t) {
        return this.__data__.get(t);
      }
      function P0(t) {
        return this.__data__.has(t);
      }
      function R0(t, n) {
        var i = this.__data__;
        if (i instanceof wn) {
          var l = i.__data__;
          if (!Ho || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new vn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      Ht.prototype.clear = L0, Ht.prototype.delete = M0, Ht.prototype.get = O0, Ht.prototype.has = P0, Ht.prototype.set = R0;
      function vf(t, n) {
        var i = Z(t), l = !i && ur(t), d = !i && !l && Un(t), p = !i && !l && !d && zr(t), v = i || l || d || p, g = v ? Vl(t.length, Z1) : [], b = g.length;
        for (var k in t)
          (n || he.call(t, k)) && !(v && (k == "length" || d && (k == "offset" || k == "parent") || p && (k == "buffer" || k == "byteLength" || k == "byteOffset") || $n(k, b))) && g.push(k);
        return g;
      }
      function mf(t) {
        var n = t.length;
        return n ? t[Rl(0, n - 1)] : r;
      }
      function F0(t, n) {
        return Is(ot(t), ir(n, 0, t.length));
      }
      function U0(t) {
        return Is(ot(t));
      }
      function xl(t, n, i) {
        (i !== r && !zt(t[n], i) || i === r && !(n in t)) && mn(t, n, i);
      }
      function jo(t, n, i) {
        var l = t[n];
        (!(he.call(t, n) && zt(l, i)) || i === r && !(n in t)) && mn(t, n, i);
      }
      function ps(t, n) {
        for (var i = t.length; i--; )
          if (zt(t[i][0], n))
            return i;
        return -1;
      }
      function W0(t, n, i, l) {
        return On(t, function(d, p, v) {
          n(l, d, i(d), v);
        }), l;
      }
      function _f(t, n) {
        return t && rn(n, Me(n), t);
      }
      function q0(t, n) {
        return t && rn(n, st(n), t);
      }
      function mn(t, n, i) {
        n == "__proto__" && ls ? ls(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Al(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? r : cu(t, n[i]);
        return d;
      }
      function ir(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function xt(t, n, i, l, d, p) {
        var v, g = n & $, b = n & y, k = n & T;
        if (i && (v = d ? i(t, l, d, p) : i(t)), v !== r)
          return v;
        if (!Ce(t))
          return t;
        var x = Z(t);
        if (x) {
          if (v = B$(t), !g)
            return ot(t, v);
        } else {
          var D = Ge(t), R = D == Yi || D == gd;
          if (Un(t))
            return Wf(t, g);
          if (D == pn || D == Br || R && !d) {
            if (v = b || R ? {} : ah(t), !g)
              return b ? $$(t, q0(v, t)) : g$(t, _f(v, t));
          } else {
            if (!ge[D])
              return d ? t : {};
            v = T$(t, D, g);
          }
        }
        p || (p = new Ht());
        var W = p.get(t);
        if (W)
          return W;
        p.set(t, v), Mh(t) ? t.forEach(function(Y) {
          v.add(xt(Y, n, i, Y, t, p));
        }) : Nh(t) && t.forEach(function(Y, te) {
          v.set(te, xt(Y, n, i, te, t, p));
        });
        var z = k ? b ? Kl : Zl : b ? st : Me, X = x ? r : z(t);
        return Et(X || t, function(Y, te) {
          X && (te = Y, Y = t[te]), jo(v, te, xt(Y, n, i, te, t, p));
        }), v;
      }
      function H0(t) {
        var n = Me(t);
        return function(i) {
          return gf(i, t, n);
        };
      }
      function gf(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = _e(t); l--; ) {
          var d = i[l], p = n[d], v = t[d];
          if (v === r && !(d in t) || !p(v))
            return !1;
        }
        return !0;
      }
      function $f(t, n, i) {
        if (typeof t != "function")
          throw new It(c);
        return ti(function() {
          t.apply(r, i);
        }, n);
      }
      function Zo(t, n, i, l) {
        var d = -1, p = Ji, v = !0, g = t.length, b = [], k = n.length;
        if (!g)
          return b;
        i && (n = be(n, pt(i))), l ? (p = vl, v = !1) : n.length >= a && (p = Wo, v = !1, n = new or(n));
        e:
          for (; ++d < g; ) {
            var x = t[d], D = i == null ? x : i(x);
            if (x = l || x !== 0 ? x : 0, v && D === D) {
              for (var R = k; R--; )
                if (n[R] === D)
                  continue e;
              b.push(x);
            } else
              p(n, D, l) || b.push(x);
          }
        return b;
      }
      var On = Gf(nn), yf = Gf(Tl, !0);
      function z0(t, n) {
        var i = !0;
        return On(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function ws(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], v = n(p);
          if (v != null && (g === r ? v === v && !vt(v) : i(v, g)))
            var g = v, b = p;
        }
        return b;
      }
      function Y0(t, n, i, l) {
        var d = t.length;
        for (i = J(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : J(l), l < 0 && (l += d), l = i > l ? 0 : Ph(l); i < l; )
          t[i++] = n;
        return t;
      }
      function Vf(t, n) {
        var i = [];
        return On(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function We(t, n, i, l, d) {
        var p = -1, v = t.length;
        for (i || (i = N$), d || (d = []); ++p < v; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? We(g, n - 1, i, l, d) : Nn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var Bl = jf(), bf = jf(!0);
      function nn(t, n) {
        return t && Bl(t, n, Me);
      }
      function Tl(t, n) {
        return t && bf(t, n, Me);
      }
      function vs(t, n) {
        return Dn(n, function(i) {
          return yn(t[i]);
        });
      }
      function sr(t, n) {
        n = Rn(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[on(n[i++])];
        return i && i == l ? t : r;
      }
      function Cf(t, n, i) {
        var l = n(t);
        return Z(t) ? l : Nn(l, i(t));
      }
      function Xe(t) {
        return t == null ? t === r ? yg : gg : nr && nr in _e(t) ? k$(t) : U$(t);
      }
      function Dl(t, n) {
        return t > n;
      }
      function G0(t, n) {
        return t != null && he.call(t, n);
      }
      function j0(t, n) {
        return t != null && n in _e(t);
      }
      function Z0(t, n, i) {
        return t >= Ye(n, i) && t < De(n, i);
      }
      function Nl(t, n, i) {
        for (var l = i ? vl : Ji, d = t[0].length, p = t.length, v = p, g = C(p), b = 1 / 0, k = []; v--; ) {
          var x = t[v];
          v && n && (x = be(x, pt(n))), b = Ye(x.length, b), g[v] = !i && (n || d >= 120 && x.length >= 120) ? new or(v && x) : r;
        }
        x = t[0];
        var D = -1, R = g[0];
        e:
          for (; ++D < d && k.length < b; ) {
            var W = x[D], z = n ? n(W) : W;
            if (W = i || W !== 0 ? W : 0, !(R ? Wo(R, z) : l(k, z, i))) {
              for (v = p; --v; ) {
                var X = g[v];
                if (!(X ? Wo(X, z) : l(t[v], z, i)))
                  continue e;
              }
              R && R.push(z), k.push(W);
            }
          }
        return k;
      }
      function K0(t, n, i, l) {
        return nn(t, function(d, p, v) {
          n(l, i(d), p, v);
        }), l;
      }
      function Ko(t, n, i) {
        n = Rn(n, t), t = dh(t, n);
        var l = t == null ? t : t[on(Bt(n))];
        return l == null ? r : ht(l, t, i);
      }
      function Sf(t) {
        return Ee(t) && Xe(t) == Br;
      }
      function J0(t) {
        return Ee(t) && Xe(t) == Uo;
      }
      function X0(t) {
        return Ee(t) && Xe(t) == Mo;
      }
      function Jo(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Ee(t) && !Ee(n) ? t !== t && n !== n : Q0(t, n, i, l, Jo, d);
      }
      function Q0(t, n, i, l, d, p) {
        var v = Z(t), g = Z(n), b = v ? Hi : Ge(t), k = g ? Hi : Ge(n);
        b = b == Br ? pn : b, k = k == Br ? pn : k;
        var x = b == pn, D = k == pn, R = b == k;
        if (R && Un(t)) {
          if (!Un(n))
            return !1;
          v = !0, x = !1;
        }
        if (R && !x)
          return p || (p = new Ht()), v || zr(t) ? oh(t, n, i, l, d, p) : E$(t, n, b, i, l, d, p);
        if (!(i & B)) {
          var W = x && he.call(t, "__wrapped__"), z = D && he.call(n, "__wrapped__");
          if (W || z) {
            var X = W ? t.value() : t, Y = z ? n.value() : n;
            return p || (p = new Ht()), d(X, Y, i, l, p);
          }
        }
        return R ? (p || (p = new Ht()), I$(t, n, i, l, d, p)) : !1;
      }
      function e$(t) {
        return Ee(t) && Ge(t) == Ut;
      }
      function Ll(t, n, i, l) {
        var d = i.length, p = d, v = !l;
        if (t == null)
          return !p;
        for (t = _e(t); d--; ) {
          var g = i[d];
          if (v && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = i[d];
          var b = g[0], k = t[b], x = g[1];
          if (v && g[2]) {
            if (k === r && !(b in t))
              return !1;
          } else {
            var D = new Ht();
            if (l)
              var R = l(k, x, b, t, n, D);
            if (!(R === r ? Jo(x, k, B | L, l, D) : R))
              return !1;
          }
        }
        return !0;
      }
      function Ef(t) {
        if (!Ce(t) || M$(t))
          return !1;
        var n = yn(t) ? e0 : Hg;
        return n.test(lr(t));
      }
      function t$(t) {
        return Ee(t) && Xe(t) == Po;
      }
      function n$(t) {
        return Ee(t) && Ge(t) == Wt;
      }
      function r$(t) {
        return Ee(t) && Ds(t.length) && !!Ve[Xe(t)];
      }
      function If(t) {
        return typeof t == "function" ? t : t == null ? at : typeof t == "object" ? Z(t) ? Af(t[0], t[1]) : xf(t) : Zh(t);
      }
      function Ml(t) {
        if (!ei(t))
          return s0(t);
        var n = [];
        for (var i in _e(t))
          he.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function o$(t) {
        if (!Ce(t))
          return F$(t);
        var n = ei(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !he.call(t, l)) || i.push(l);
        return i;
      }
      function Ol(t, n) {
        return t < n;
      }
      function kf(t, n) {
        var i = -1, l = it(t) ? C(t.length) : [];
        return On(t, function(d, p, v) {
          l[++i] = n(d, p, v);
        }), l;
      }
      function xf(t) {
        var n = Xl(t);
        return n.length == 1 && n[0][2] ? uh(n[0][0], n[0][1]) : function(i) {
          return i === t || Ll(i, t, n);
        };
      }
      function Af(t, n) {
        return eu(t) && lh(n) ? uh(on(t), n) : function(i) {
          var l = cu(i, t);
          return l === r && l === n ? du(i, t) : Jo(n, l, B | L);
        };
      }
      function ms(t, n, i, l, d) {
        t !== n && Bl(n, function(p, v) {
          if (d || (d = new Ht()), Ce(p))
            i$(t, n, v, i, ms, l, d);
          else {
            var g = l ? l(nu(t, v), p, v + "", t, n, d) : r;
            g === r && (g = p), xl(t, v, g);
          }
        }, st);
      }
      function i$(t, n, i, l, d, p, v) {
        var g = nu(t, i), b = nu(n, i), k = v.get(b);
        if (k) {
          xl(t, i, k);
          return;
        }
        var x = p ? p(g, b, i + "", t, n, v) : r, D = x === r;
        if (D) {
          var R = Z(b), W = !R && Un(b), z = !R && !W && zr(b);
          x = b, R || W || z ? Z(g) ? x = g : Ie(g) ? x = ot(g) : W ? (D = !1, x = Wf(b, !0)) : z ? (D = !1, x = qf(b, !0)) : x = [] : ni(b) || ur(b) ? (x = g, ur(g) ? x = Rh(g) : (!Ce(g) || yn(g)) && (x = ah(b))) : D = !1;
        }
        D && (v.set(b, x), d(x, b, l, p, v), v.delete(b)), xl(t, i, x);
      }
      function Bf(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, $n(n, i) ? t[n] : r;
      }
      function Tf(t, n, i) {
        n.length ? n = be(n, function(p) {
          return Z(p) ? function(v) {
            return sr(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [at];
        var l = -1;
        n = be(n, pt(H()));
        var d = kf(t, function(p, v, g) {
          var b = be(n, function(k) {
            return k(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return T1(d, function(p, v) {
          return _$(p, v, i);
        });
      }
      function s$(t, n) {
        return Df(t, n, function(i, l) {
          return du(t, l);
        });
      }
      function Df(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var v = n[l], g = sr(t, v);
          i(g, v) && Xo(p, Rn(v, t), g);
        }
        return p;
      }
      function a$(t) {
        return function(n) {
          return sr(n, t);
        };
      }
      function Pl(t, n, i, l) {
        var d = l ? B1 : Nr, p = -1, v = n.length, g = t;
        for (t === n && (n = ot(n)), i && (g = be(t, pt(i))); ++p < v; )
          for (var b = 0, k = n[p], x = i ? i(k) : k; (b = d(g, x, b, l)) > -1; )
            g !== t && as.call(g, b, 1), as.call(t, b, 1);
        return t;
      }
      function Nf(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            $n(d) ? as.call(t, d, 1) : Wl(t, d);
          }
        }
        return t;
      }
      function Rl(t, n) {
        return t + cs(pf() * (n - t + 1));
      }
      function l$(t, n, i, l) {
        for (var d = -1, p = De(us((n - t) / (i || 1)), 0), v = C(p); p--; )
          v[l ? p : ++d] = t, t += i;
        return v;
      }
      function Fl(t, n) {
        var i = "";
        if (!t || n < 1 || n > Je)
          return i;
        do
          n % 2 && (i += t), n = cs(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function ee(t, n) {
        return ru(ch(t, n, at), t + "");
      }
      function u$(t) {
        return mf(Yr(t));
      }
      function c$(t, n) {
        var i = Yr(t);
        return Is(i, ir(n, 0, i.length));
      }
      function Xo(t, n, i, l) {
        if (!Ce(t))
          return t;
        n = Rn(n, t);
        for (var d = -1, p = n.length, v = p - 1, g = t; g != null && ++d < p; ) {
          var b = on(n[d]), k = i;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != v) {
            var x = g[b];
            k = l ? l(x, b, g) : r, k === r && (k = Ce(x) ? x : $n(n[d + 1]) ? [] : {});
          }
          jo(g, b, k), g = g[b];
        }
        return t;
      }
      var Lf = ds ? function(t, n) {
        return ds.set(t, n), t;
      } : at, d$ = ls ? function(t, n) {
        return ls(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: hu(n),
          writable: !0
        });
      } : at;
      function f$(t) {
        return Is(Yr(t));
      }
      function At(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function h$(t, n) {
        var i;
        return On(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function _s(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= wg) {
          for (; l < d; ) {
            var p = l + d >>> 1, v = t[p];
            v !== null && !vt(v) && (i ? v <= n : v < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return Ul(t, n, at, i);
      }
      function Ul(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var v = n !== n, g = n === null, b = vt(n), k = n === r; d < p; ) {
          var x = cs((d + p) / 2), D = i(t[x]), R = D !== r, W = D === null, z = D === D, X = vt(D);
          if (v)
            var Y = l || z;
          else
            k ? Y = z && (l || R) : g ? Y = z && R && (l || !W) : b ? Y = z && R && !W && (l || !X) : W || X ? Y = !1 : Y = l ? D <= n : D < n;
          Y ? d = x + 1 : p = x;
        }
        return Ye(p, pg);
      }
      function Mf(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var v = t[i], g = n ? n(v) : v;
          if (!i || !zt(g, b)) {
            var b = g;
            p[d++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function Of(t) {
        return typeof t == "number" ? t : vt(t) ? qi : +t;
      }
      function wt(t) {
        if (typeof t == "string")
          return t;
        if (Z(t))
          return be(t, wt) + "";
        if (vt(t))
          return wf ? wf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Fe ? "-0" : n;
      }
      function Pn(t, n, i) {
        var l = -1, d = Ji, p = t.length, v = !0, g = [], b = g;
        if (i)
          v = !1, d = vl;
        else if (p >= a) {
          var k = n ? null : C$(t);
          if (k)
            return Qi(k);
          v = !1, d = Wo, b = new or();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var x = t[l], D = n ? n(x) : x;
            if (x = i || x !== 0 ? x : 0, v && D === D) {
              for (var R = b.length; R--; )
                if (b[R] === D)
                  continue e;
              n && b.push(D), g.push(x);
            } else
              d(b, D, i) || (b !== g && b.push(D), g.push(x));
          }
        return g;
      }
      function Wl(t, n) {
        return n = Rn(n, t), t = dh(t, n), t == null || delete t[on(Bt(n))];
      }
      function Pf(t, n, i, l) {
        return Xo(t, n, i(sr(t, n)), l);
      }
      function gs(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? At(t, l ? 0 : p, l ? p + 1 : d) : At(t, l ? p + 1 : 0, l ? d : p);
      }
      function Rf(t, n) {
        var i = t;
        return i instanceof ne && (i = i.value()), ml(n, function(l, d) {
          return d.func.apply(d.thisArg, Nn([l], d.args));
        }, i);
      }
      function ql(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Pn(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var v = t[d], g = -1; ++g < l; )
            g != d && (p[d] = Zo(p[d] || v, t[g], n, i));
        return Pn(We(p, 1), n, i);
      }
      function Ff(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, v = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          i(v, t[l], g);
        }
        return v;
      }
      function Hl(t) {
        return Ie(t) ? t : [];
      }
      function zl(t) {
        return typeof t == "function" ? t : at;
      }
      function Rn(t, n) {
        return Z(t) ? t : eu(t, n) ? [t] : wh(de(t));
      }
      var p$ = ee;
      function Fn(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : At(t, n, i);
      }
      var Uf = t0 || function(t) {
        return Ue.clearTimeout(t);
      };
      function Wf(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = uf ? uf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function Yl(t) {
        var n = new t.constructor(t.byteLength);
        return new is(n).set(new is(t)), n;
      }
      function w$(t, n) {
        var i = n ? Yl(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function v$(t) {
        var n = new t.constructor(t.source, Cd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function m$(t) {
        return Go ? _e(Go.call(t)) : {};
      }
      function qf(t, n) {
        var i = n ? Yl(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Hf(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = vt(t), v = n !== r, g = n === null, b = n === n, k = vt(n);
          if (!g && !k && !p && t > n || p && v && b && !g && !k || l && v && b || !i && b || !d)
            return 1;
          if (!l && !p && !k && t < n || k && i && d && !l && !p || g && i && d || !v && d || !b)
            return -1;
        }
        return 0;
      }
      function _$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, v = d.length, g = i.length; ++l < v; ) {
          var b = Hf(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var k = i[l];
            return b * (k == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function zf(t, n, i, l) {
        for (var d = -1, p = t.length, v = i.length, g = -1, b = n.length, k = De(p - v, 0), x = C(b + k), D = !l; ++g < b; )
          x[g] = n[g];
        for (; ++d < v; )
          (D || d < p) && (x[i[d]] = t[d]);
        for (; k--; )
          x[g++] = t[d++];
        return x;
      }
      function Yf(t, n, i, l) {
        for (var d = -1, p = t.length, v = -1, g = i.length, b = -1, k = n.length, x = De(p - g, 0), D = C(x + k), R = !l; ++d < x; )
          D[d] = t[d];
        for (var W = d; ++b < k; )
          D[W + b] = n[b];
        for (; ++v < g; )
          (R || d < p) && (D[W + i[v]] = t[d++]);
        return D;
      }
      function ot(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function rn(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, v = n.length; ++p < v; ) {
          var g = n[p], b = l ? l(i[g], t[g], g, i, t) : r;
          b === r && (b = t[g]), d ? mn(i, g, b) : jo(i, g, b);
        }
        return i;
      }
      function g$(t, n) {
        return rn(t, Ql(t), n);
      }
      function $$(t, n) {
        return rn(t, ih(t), n);
      }
      function $s(t, n) {
        return function(i, l) {
          var d = Z(i) ? S1 : W0, p = n ? n() : {};
          return d(i, t, H(l, 2), p);
        };
      }
      function Wr(t) {
        return ee(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, v = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, v && Qe(i[0], i[1], v) && (p = d < 3 ? r : p, d = 1), n = _e(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function Gf(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!it(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, v = _e(i); (n ? p-- : ++p < d) && l(v[p], p, v) !== !1; )
            ;
          return i;
        };
      }
      function jf(t) {
        return function(n, i, l) {
          for (var d = -1, p = _e(n), v = l(n), g = v.length; g--; ) {
            var b = v[t ? g : ++d];
            if (i(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function y$(t, n, i) {
        var l = n & M, d = Qo(t);
        function p() {
          var v = this && this !== Ue && this instanceof p ? d : t;
          return v.apply(l ? i : this, arguments);
        }
        return p;
      }
      function Zf(t) {
        return function(n) {
          n = de(n);
          var i = Lr(n) ? qt(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Fn(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function qr(t) {
        return function(n) {
          return ml(Gh(Yh(n).replace(d1, "")), t, "");
        };
      }
      function Qo(t) {
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return new t();
            case 1:
              return new t(n[0]);
            case 2:
              return new t(n[0], n[1]);
            case 3:
              return new t(n[0], n[1], n[2]);
            case 4:
              return new t(n[0], n[1], n[2], n[3]);
            case 5:
              return new t(n[0], n[1], n[2], n[3], n[4]);
            case 6:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5]);
            case 7:
              return new t(n[0], n[1], n[2], n[3], n[4], n[5], n[6]);
          }
          var i = Ur(t.prototype), l = t.apply(i, n);
          return Ce(l) ? l : i;
        };
      }
      function V$(t, n, i) {
        var l = Qo(t);
        function d() {
          for (var p = arguments.length, v = C(p), g = p, b = Hr(d); g--; )
            v[g] = arguments[g];
          var k = p < 3 && v[0] !== b && v[p - 1] !== b ? [] : Ln(v, b);
          if (p -= k.length, p < i)
            return eh(
              t,
              n,
              ys,
              d.placeholder,
              r,
              v,
              k,
              r,
              r,
              i - p
            );
          var x = this && this !== Ue && this instanceof d ? l : t;
          return ht(x, this, v);
        }
        return d;
      }
      function Kf(t) {
        return function(n, i, l) {
          var d = _e(n);
          if (!it(n)) {
            var p = H(i, 3);
            n = Me(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var v = t(n, i, l);
          return v > -1 ? d[p ? n[v] : v] : r;
        };
      }
      function Jf(t) {
        return gn(function(n) {
          var i = n.length, l = i, d = kt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new It(c);
            if (d && !v && Ss(p) == "wrapper")
              var v = new kt([], !0);
          }
          for (l = v ? l : i; ++l < i; ) {
            p = n[l];
            var g = Ss(p), b = g == "wrapper" ? Jl(p) : r;
            b && tu(b[0]) && b[1] == (P | A | I | q) && !b[4].length && b[9] == 1 ? v = v[Ss(b[0])].apply(v, b[3]) : v = p.length == 1 && tu(p) ? v[g]() : v.thru(p);
          }
          return function() {
            var k = arguments, x = k[0];
            if (v && k.length == 1 && Z(x))
              return v.plant(x).value();
            for (var D = 0, R = i ? n[D].apply(this, k) : x; ++D < i; )
              R = n[D].call(this, R);
            return R;
          };
        });
      }
      function ys(t, n, i, l, d, p, v, g, b, k) {
        var x = n & P, D = n & M, R = n & S, W = n & (A | O), z = n & ve, X = R ? r : Qo(t);
        function Y() {
          for (var te = arguments.length, ie = C(te), mt = te; mt--; )
            ie[mt] = arguments[mt];
          if (W)
            var et = Hr(Y), _t = N1(ie, et);
          if (l && (ie = zf(ie, l, d, W)), p && (ie = Yf(ie, p, v, W)), te -= _t, W && te < k) {
            var ke = Ln(ie, et);
            return eh(
              t,
              n,
              ys,
              Y.placeholder,
              i,
              ie,
              ke,
              g,
              b,
              k - te
            );
          }
          var Yt = D ? i : this, bn = R ? Yt[t] : t;
          return te = ie.length, g ? ie = W$(ie, g) : z && te > 1 && ie.reverse(), x && b < te && (ie.length = b), this && this !== Ue && this instanceof Y && (bn = X || Qo(bn)), bn.apply(Yt, ie);
        }
        return Y;
      }
      function Xf(t, n) {
        return function(i, l) {
          return K0(i, t, n(l), {});
        };
      }
      function Vs(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = wt(i), l = wt(l)) : (i = Of(i), l = Of(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Gl(t) {
        return gn(function(n) {
          return n = be(n, pt(H())), ee(function(i) {
            var l = this;
            return t(n, function(d) {
              return ht(d, l, i);
            });
          });
        });
      }
      function bs(t, n) {
        n = n === r ? " " : wt(n);
        var i = n.length;
        if (i < 2)
          return i ? Fl(n, t) : n;
        var l = Fl(n, us(t / Mr(n)));
        return Lr(n) ? Fn(qt(l), 0, t).join("") : l.slice(0, t);
      }
      function b$(t, n, i, l) {
        var d = n & M, p = Qo(t);
        function v() {
          for (var g = -1, b = arguments.length, k = -1, x = l.length, D = C(x + b), R = this && this !== Ue && this instanceof v ? p : t; ++k < x; )
            D[k] = l[k];
          for (; b--; )
            D[k++] = arguments[++g];
          return ht(R, d ? i : this, D);
        }
        return v;
      }
      function Qf(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Qe(n, i, l) && (i = l = r), n = Vn(n), i === r ? (i = n, n = 0) : i = Vn(i), l = l === r ? n < i ? 1 : -1 : Vn(l), l$(n, i, l, t);
        };
      }
      function Cs(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Tt(n), i = Tt(i)), t(n, i);
        };
      }
      function eh(t, n, i, l, d, p, v, g, b, k) {
        var x = n & A, D = x ? v : r, R = x ? r : v, W = x ? p : r, z = x ? r : p;
        n |= x ? I : F, n &= ~(x ? F : I), n & N || (n &= ~(M | S));
        var X = [
          t,
          n,
          d,
          W,
          D,
          z,
          R,
          g,
          b,
          k
        ], Y = i.apply(r, X);
        return tu(t) && fh(Y, X), Y.placeholder = l, hh(Y, t, n);
      }
      function jl(t) {
        var n = Te[t];
        return function(i, l) {
          if (i = Tt(i), l = l == null ? 0 : Ye(J(l), 292), l && hf(i)) {
            var d = (de(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (de(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var C$ = Rr && 1 / Qi(new Rr([, -0]))[1] == Fe ? function(t) {
        return new Rr(t);
      } : vu;
      function th(t) {
        return function(n) {
          var i = Ge(n);
          return i == Ut ? Cl(n) : i == Wt ? U1(n) : D1(n, t(n));
        };
      }
      function _n(t, n, i, l, d, p, v, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new It(c);
        var k = l ? l.length : 0;
        if (k || (n &= ~(I | F), l = d = r), v = v === r ? v : De(J(v), 0), g = g === r ? g : J(g), k -= d ? d.length : 0, n & F) {
          var x = l, D = d;
          l = d = r;
        }
        var R = b ? r : Jl(t), W = [
          t,
          n,
          i,
          l,
          d,
          x,
          D,
          p,
          v,
          g
        ];
        if (R && R$(W, R), t = W[0], n = W[1], i = W[2], l = W[3], d = W[4], g = W[9] = W[9] === r ? b ? 0 : t.length : De(W[9] - k, 0), !g && n & (A | O) && (n &= ~(A | O)), !n || n == M)
          var z = y$(t, n, i);
        else
          n == A || n == O ? z = V$(t, n, g) : (n == I || n == (M | I)) && !d.length ? z = b$(t, n, i, l) : z = ys.apply(r, W);
        var X = R ? Lf : fh;
        return hh(X(z, W), t, n);
      }
      function nh(t, n, i, l) {
        return t === r || zt(t, Pr[i]) && !he.call(l, i) ? n : t;
      }
      function rh(t, n, i, l, d, p) {
        return Ce(t) && Ce(n) && (p.set(n, t), ms(t, n, r, rh, p), p.delete(n)), t;
      }
      function S$(t) {
        return ni(t) ? r : t;
      }
      function oh(t, n, i, l, d, p) {
        var v = i & B, g = t.length, b = n.length;
        if (g != b && !(v && b > g))
          return !1;
        var k = p.get(t), x = p.get(n);
        if (k && x)
          return k == n && x == t;
        var D = -1, R = !0, W = i & L ? new or() : r;
        for (p.set(t, n), p.set(n, t); ++D < g; ) {
          var z = t[D], X = n[D];
          if (l)
            var Y = v ? l(X, z, D, n, t, p) : l(z, X, D, t, n, p);
          if (Y !== r) {
            if (Y)
              continue;
            R = !1;
            break;
          }
          if (W) {
            if (!_l(n, function(te, ie) {
              if (!Wo(W, ie) && (z === te || d(z, te, i, l, p)))
                return W.push(ie);
            })) {
              R = !1;
              break;
            }
          } else if (!(z === X || d(z, X, i, l, p))) {
            R = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), R;
      }
      function E$(t, n, i, l, d, p, v) {
        switch (i) {
          case Tr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Uo:
            return !(t.byteLength != n.byteLength || !p(new is(t), new is(n)));
          case Lo:
          case Mo:
          case Oo:
            return zt(+t, +n);
          case zi:
            return t.name == n.name && t.message == n.message;
          case Po:
          case Ro:
            return t == n + "";
          case Ut:
            var g = Cl;
          case Wt:
            var b = l & B;
            if (g || (g = Qi), t.size != n.size && !b)
              return !1;
            var k = v.get(t);
            if (k)
              return k == n;
            l |= L, v.set(t, n);
            var x = oh(g(t), g(n), l, d, p, v);
            return v.delete(t), x;
          case Gi:
            if (Go)
              return Go.call(t) == Go.call(n);
        }
        return !1;
      }
      function I$(t, n, i, l, d, p) {
        var v = i & B, g = Zl(t), b = g.length, k = Zl(n), x = k.length;
        if (b != x && !v)
          return !1;
        for (var D = b; D--; ) {
          var R = g[D];
          if (!(v ? R in n : he.call(n, R)))
            return !1;
        }
        var W = p.get(t), z = p.get(n);
        if (W && z)
          return W == n && z == t;
        var X = !0;
        p.set(t, n), p.set(n, t);
        for (var Y = v; ++D < b; ) {
          R = g[D];
          var te = t[R], ie = n[R];
          if (l)
            var mt = v ? l(ie, te, R, n, t, p) : l(te, ie, R, t, n, p);
          if (!(mt === r ? te === ie || d(te, ie, i, l, p) : mt)) {
            X = !1;
            break;
          }
          Y || (Y = R == "constructor");
        }
        if (X && !Y) {
          var et = t.constructor, _t = n.constructor;
          et != _t && "constructor" in t && "constructor" in n && !(typeof et == "function" && et instanceof et && typeof _t == "function" && _t instanceof _t) && (X = !1);
        }
        return p.delete(t), p.delete(n), X;
      }
      function gn(t) {
        return ru(ch(t, r, gh), t + "");
      }
      function Zl(t) {
        return Cf(t, Me, Ql);
      }
      function Kl(t) {
        return Cf(t, st, ih);
      }
      var Jl = ds ? function(t) {
        return ds.get(t);
      } : vu;
      function Ss(t) {
        for (var n = t.name + "", i = Fr[n], l = he.call(Fr, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function Hr(t) {
        var n = he.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function H() {
        var t = h.iteratee || pu;
        return t = t === pu ? If : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Es(t, n) {
        var i = t.__data__;
        return L$(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function Xl(t) {
        for (var n = Me(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, lh(d)];
        }
        return n;
      }
      function ar(t, n) {
        var i = P1(t, n);
        return Ef(i) ? i : r;
      }
      function k$(t) {
        var n = he.call(t, nr), i = t[nr];
        try {
          t[nr] = r;
          var l = !0;
        } catch {
        }
        var d = rs.call(t);
        return l && (n ? t[nr] = i : delete t[nr]), d;
      }
      var Ql = El ? function(t) {
        return t == null ? [] : (t = _e(t), Dn(El(t), function(n) {
          return df.call(t, n);
        }));
      } : mu, ih = El ? function(t) {
        for (var n = []; t; )
          Nn(n, Ql(t)), t = ss(t);
        return n;
      } : mu, Ge = Xe;
      (Il && Ge(new Il(new ArrayBuffer(1))) != Tr || Ho && Ge(new Ho()) != Ut || kl && Ge(kl.resolve()) != $d || Rr && Ge(new Rr()) != Wt || zo && Ge(new zo()) != Fo) && (Ge = function(t) {
        var n = Xe(t), i = n == pn ? t.constructor : r, l = i ? lr(i) : "";
        if (l)
          switch (l) {
            case c0:
              return Tr;
            case d0:
              return Ut;
            case f0:
              return $d;
            case h0:
              return Wt;
            case p0:
              return Fo;
          }
        return n;
      });
      function x$(t, n, i) {
        for (var l = -1, d = i.length; ++l < d; ) {
          var p = i[l], v = p.size;
          switch (p.type) {
            case "drop":
              t += v;
              break;
            case "dropRight":
              n -= v;
              break;
            case "take":
              n = Ye(n, t + v);
              break;
            case "takeRight":
              t = De(t, n - v);
              break;
          }
        }
        return { start: t, end: n };
      }
      function A$(t) {
        var n = t.match(Mg);
        return n ? n[1].split(Og) : [];
      }
      function sh(t, n, i) {
        n = Rn(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var v = on(n[l]);
          if (!(p = t != null && i(t, v)))
            break;
          t = t[v];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Ds(d) && $n(v, d) && (Z(t) || ur(t)));
      }
      function B$(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && he.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function ah(t) {
        return typeof t.constructor == "function" && !ei(t) ? Ur(ss(t)) : {};
      }
      function T$(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case Uo:
            return Yl(t);
          case Lo:
          case Mo:
            return new l(+t);
          case Tr:
            return w$(t, i);
          case Xa:
          case Qa:
          case el:
          case tl:
          case nl:
          case rl:
          case ol:
          case il:
          case sl:
            return qf(t, i);
          case Ut:
            return new l();
          case Oo:
          case Ro:
            return new l(t);
          case Po:
            return v$(t);
          case Wt:
            return new l();
          case Gi:
            return m$(t);
        }
      }
      function D$(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Lg, `{
/* [wrapped with ` + n + `] */
`);
      }
      function N$(t) {
        return Z(t) || ur(t) || !!(ff && t && t[ff]);
      }
      function $n(t, n) {
        var i = typeof t;
        return n = n == null ? Je : n, !!n && (i == "number" || i != "symbol" && Yg.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Qe(t, n, i) {
        if (!Ce(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? it(i) && $n(n, i.length) : l == "string" && n in i) ? zt(i[n], t) : !1;
      }
      function eu(t, n) {
        if (Z(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || vt(t) ? !0 : Bg.test(t) || !Ag.test(t) || n != null && t in _e(n);
      }
      function L$(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function tu(t) {
        var n = Ss(t), i = h[n];
        if (typeof i != "function" || !(n in ne.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Jl(i);
        return !!l && t === l[0];
      }
      function M$(t) {
        return !!lf && lf in t;
      }
      var O$ = ts ? yn : _u;
      function ei(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || Pr;
        return t === i;
      }
      function lh(t) {
        return t === t && !Ce(t);
      }
      function uh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in _e(i));
        };
      }
      function P$(t) {
        var n = Bs(t, function(l) {
          return i.size === m && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function R$(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (M | S | P), v = l == P && i == A || l == P && i == q && t[7].length <= n[8] || l == (P | q) && n[7].length <= n[8] && i == A;
        if (!(p || v))
          return t;
        l & M && (t[2] = n[2], d |= i & M ? 0 : N);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? zf(b, g, n[4]) : g, t[4] = b ? Ln(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? Yf(b, g, n[6]) : g, t[6] = b ? Ln(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & P && (t[8] = t[8] == null ? n[8] : Ye(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function F$(t) {
        var n = [];
        if (t != null)
          for (var i in _e(t))
            n.push(i);
        return n;
      }
      function U$(t) {
        return rs.call(t);
      }
      function ch(t, n, i) {
        return n = De(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = De(l.length - n, 0), v = C(p); ++d < p; )
            v[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(v), ht(t, this, g);
        };
      }
      function dh(t, n) {
        return n.length < 2 ? t : sr(t, At(n, 0, -1));
      }
      function W$(t, n) {
        for (var i = t.length, l = Ye(n.length, i), d = ot(t); l--; ) {
          var p = n[l];
          t[l] = $n(p, i) ? d[p] : r;
        }
        return t;
      }
      function nu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var fh = ph(Lf), ti = r0 || function(t, n) {
        return Ue.setTimeout(t, n);
      }, ru = ph(d$);
      function hh(t, n, i) {
        var l = n + "";
        return ru(t, D$(l, q$(A$(l), i)));
      }
      function ph(t) {
        var n = 0, i = 0;
        return function() {
          var l = a0(), d = oe - (l - i);
          if (i = l, d > 0) {
            if (++n >= K)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Is(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = Rl(i, d), v = t[p];
          t[p] = t[i], t[i] = v;
        }
        return t.length = n, t;
      }
      var wh = P$(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Tg, function(i, l, d, p) {
          n.push(d ? p.replace(Fg, "$1") : l || i);
        }), n;
      });
      function on(t) {
        if (typeof t == "string" || vt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Fe ? "-0" : n;
      }
      function lr(t) {
        if (t != null) {
          try {
            return ns.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function q$(t, n) {
        return Et(vg, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Ji(t, l) && t.push(l);
        }), t.sort();
      }
      function vh(t) {
        if (t instanceof ne)
          return t.clone();
        var n = new kt(t.__wrapped__, t.__chain__);
        return n.__actions__ = ot(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function H$(t, n, i) {
        (i ? Qe(t, n, i) : n === r) ? n = 1 : n = De(J(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, v = C(us(l / n)); d < l; )
          v[p++] = At(t, d, d += n);
        return v;
      }
      function z$(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function Y$() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Nn(Z(i) ? ot(i) : [i], We(n, 1));
      }
      var G$ = ee(function(t, n) {
        return Ie(t) ? Zo(t, We(n, 1, Ie, !0)) : [];
      }), j$ = ee(function(t, n) {
        var i = Bt(n);
        return Ie(i) && (i = r), Ie(t) ? Zo(t, We(n, 1, Ie, !0), H(i, 2)) : [];
      }), Z$ = ee(function(t, n) {
        var i = Bt(n);
        return Ie(i) && (i = r), Ie(t) ? Zo(t, We(n, 1, Ie, !0), r, i) : [];
      });
      function K$(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : J(n), At(t, n < 0 ? 0 : n, l)) : [];
      }
      function J$(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : J(n), n = l - n, At(t, 0, n < 0 ? 0 : n)) : [];
      }
      function X$(t, n) {
        return t && t.length ? gs(t, H(n, 3), !0, !0) : [];
      }
      function Q$(t, n) {
        return t && t.length ? gs(t, H(n, 3), !0) : [];
      }
      function ey(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Qe(t, n, i) && (i = 0, l = d), Y0(t, n, i, l)) : [];
      }
      function mh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : J(i);
        return d < 0 && (d = De(l + d, 0)), Xi(t, H(n, 3), d);
      }
      function _h(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = J(i), d = i < 0 ? De(l + d, 0) : Ye(d, l - 1)), Xi(t, H(n, 3), d, !0);
      }
      function gh(t) {
        var n = t == null ? 0 : t.length;
        return n ? We(t, 1) : [];
      }
      function ty(t) {
        var n = t == null ? 0 : t.length;
        return n ? We(t, Fe) : [];
      }
      function ny(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : J(n), We(t, n)) : [];
      }
      function ry(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function $h(t) {
        return t && t.length ? t[0] : r;
      }
      function oy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : J(i);
        return d < 0 && (d = De(l + d, 0)), Nr(t, n, d);
      }
      function iy(t) {
        var n = t == null ? 0 : t.length;
        return n ? At(t, 0, -1) : [];
      }
      var sy = ee(function(t) {
        var n = be(t, Hl);
        return n.length && n[0] === t[0] ? Nl(n) : [];
      }), ay = ee(function(t) {
        var n = Bt(t), i = be(t, Hl);
        return n === Bt(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Nl(i, H(n, 2)) : [];
      }), ly = ee(function(t) {
        var n = Bt(t), i = be(t, Hl);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Nl(i, r, n) : [];
      });
      function uy(t, n) {
        return t == null ? "" : i0.call(t, n);
      }
      function Bt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function cy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = J(i), d = d < 0 ? De(l + d, 0) : Ye(d, l - 1)), n === n ? q1(t, n, d) : Xi(t, Qd, d, !0);
      }
      function dy(t, n) {
        return t && t.length ? Bf(t, J(n)) : r;
      }
      var fy = ee(yh);
      function yh(t, n) {
        return t && t.length && n && n.length ? Pl(t, n) : t;
      }
      function hy(t, n, i) {
        return t && t.length && n && n.length ? Pl(t, n, H(i, 2)) : t;
      }
      function py(t, n, i) {
        return t && t.length && n && n.length ? Pl(t, n, r, i) : t;
      }
      var wy = gn(function(t, n) {
        var i = t == null ? 0 : t.length, l = Al(t, n);
        return Nf(t, be(n, function(d) {
          return $n(d, i) ? +d : d;
        }).sort(Hf)), l;
      });
      function vy(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = H(n, 3); ++l < p; ) {
          var v = t[l];
          n(v, l, t) && (i.push(v), d.push(l));
        }
        return Nf(t, d), i;
      }
      function ou(t) {
        return t == null ? t : u0.call(t);
      }
      function my(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Qe(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : J(n), i = i === r ? l : J(i)), At(t, n, i)) : [];
      }
      function _y(t, n) {
        return _s(t, n);
      }
      function gy(t, n, i) {
        return Ul(t, n, H(i, 2));
      }
      function $y(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = _s(t, n);
          if (l < i && zt(t[l], n))
            return l;
        }
        return -1;
      }
      function yy(t, n) {
        return _s(t, n, !0);
      }
      function Vy(t, n, i) {
        return Ul(t, n, H(i, 2), !0);
      }
      function by(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = _s(t, n, !0) - 1;
          if (zt(t[l], n))
            return l;
        }
        return -1;
      }
      function Cy(t) {
        return t && t.length ? Mf(t) : [];
      }
      function Sy(t, n) {
        return t && t.length ? Mf(t, H(n, 2)) : [];
      }
      function Ey(t) {
        var n = t == null ? 0 : t.length;
        return n ? At(t, 1, n) : [];
      }
      function Iy(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : J(n), At(t, 0, n < 0 ? 0 : n)) : [];
      }
      function ky(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : J(n), n = l - n, At(t, n < 0 ? 0 : n, l)) : [];
      }
      function xy(t, n) {
        return t && t.length ? gs(t, H(n, 3), !1, !0) : [];
      }
      function Ay(t, n) {
        return t && t.length ? gs(t, H(n, 3)) : [];
      }
      var By = ee(function(t) {
        return Pn(We(t, 1, Ie, !0));
      }), Ty = ee(function(t) {
        var n = Bt(t);
        return Ie(n) && (n = r), Pn(We(t, 1, Ie, !0), H(n, 2));
      }), Dy = ee(function(t) {
        var n = Bt(t);
        return n = typeof n == "function" ? n : r, Pn(We(t, 1, Ie, !0), r, n);
      });
      function Ny(t) {
        return t && t.length ? Pn(t) : [];
      }
      function Ly(t, n) {
        return t && t.length ? Pn(t, H(n, 2)) : [];
      }
      function My(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Pn(t, r, n) : [];
      }
      function iu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Dn(t, function(i) {
          if (Ie(i))
            return n = De(i.length, n), !0;
        }), Vl(n, function(i) {
          return be(t, gl(i));
        });
      }
      function Vh(t, n) {
        if (!(t && t.length))
          return [];
        var i = iu(t);
        return n == null ? i : be(i, function(l) {
          return ht(n, r, l);
        });
      }
      var Oy = ee(function(t, n) {
        return Ie(t) ? Zo(t, n) : [];
      }), Py = ee(function(t) {
        return ql(Dn(t, Ie));
      }), Ry = ee(function(t) {
        var n = Bt(t);
        return Ie(n) && (n = r), ql(Dn(t, Ie), H(n, 2));
      }), Fy = ee(function(t) {
        var n = Bt(t);
        return n = typeof n == "function" ? n : r, ql(Dn(t, Ie), r, n);
      }), Uy = ee(iu);
      function Wy(t, n) {
        return Ff(t || [], n || [], jo);
      }
      function qy(t, n) {
        return Ff(t || [], n || [], Xo);
      }
      var Hy = ee(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, Vh(t, i);
      });
      function bh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function zy(t, n) {
        return n(t), t;
      }
      function ks(t, n) {
        return n(t);
      }
      var Yy = gn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Al(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ne) || !$n(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: ks,
          args: [d],
          thisArg: r
        }), new kt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function Gy() {
        return bh(this);
      }
      function jy() {
        return new kt(this.value(), this.__chain__);
      }
      function Zy() {
        this.__values__ === r && (this.__values__ = Oh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function Ky() {
        return this;
      }
      function Jy(t) {
        for (var n, i = this; i instanceof hs; ) {
          var l = vh(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function Xy() {
        var t = this.__wrapped__;
        if (t instanceof ne) {
          var n = t;
          return this.__actions__.length && (n = new ne(this)), n = n.reverse(), n.__actions__.push({
            func: ks,
            args: [ou],
            thisArg: r
          }), new kt(n, this.__chain__);
        }
        return this.thru(ou);
      }
      function Qy() {
        return Rf(this.__wrapped__, this.__actions__);
      }
      var eV = $s(function(t, n, i) {
        he.call(t, i) ? ++t[i] : mn(t, i, 1);
      });
      function tV(t, n, i) {
        var l = Z(t) ? Jd : z0;
        return i && Qe(t, n, i) && (n = r), l(t, H(n, 3));
      }
      function nV(t, n) {
        var i = Z(t) ? Dn : Vf;
        return i(t, H(n, 3));
      }
      var rV = Kf(mh), oV = Kf(_h);
      function iV(t, n) {
        return We(xs(t, n), 1);
      }
      function sV(t, n) {
        return We(xs(t, n), Fe);
      }
      function aV(t, n, i) {
        return i = i === r ? 1 : J(i), We(xs(t, n), i);
      }
      function Ch(t, n) {
        var i = Z(t) ? Et : On;
        return i(t, H(n, 3));
      }
      function Sh(t, n) {
        var i = Z(t) ? E1 : yf;
        return i(t, H(n, 3));
      }
      var lV = $s(function(t, n, i) {
        he.call(t, i) ? t[i].push(n) : mn(t, i, [n]);
      });
      function uV(t, n, i, l) {
        t = it(t) ? t : Yr(t), i = i && !l ? J(i) : 0;
        var d = t.length;
        return i < 0 && (i = De(d + i, 0)), Ns(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Nr(t, n, i) > -1;
      }
      var cV = ee(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = it(t) ? C(t.length) : [];
        return On(t, function(v) {
          p[++l] = d ? ht(n, v, i) : Ko(v, n, i);
        }), p;
      }), dV = $s(function(t, n, i) {
        mn(t, i, n);
      });
      function xs(t, n) {
        var i = Z(t) ? be : kf;
        return i(t, H(n, 3));
      }
      function fV(t, n, i, l) {
        return t == null ? [] : (Z(n) || (n = n == null ? [] : [n]), i = l ? r : i, Z(i) || (i = i == null ? [] : [i]), Tf(t, n, i));
      }
      var hV = $s(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function pV(t, n, i) {
        var l = Z(t) ? ml : tf, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, On);
      }
      function wV(t, n, i) {
        var l = Z(t) ? I1 : tf, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, yf);
      }
      function vV(t, n) {
        var i = Z(t) ? Dn : Vf;
        return i(t, Ts(H(n, 3)));
      }
      function mV(t) {
        var n = Z(t) ? mf : u$;
        return n(t);
      }
      function _V(t, n, i) {
        (i ? Qe(t, n, i) : n === r) ? n = 1 : n = J(n);
        var l = Z(t) ? F0 : c$;
        return l(t, n);
      }
      function gV(t) {
        var n = Z(t) ? U0 : f$;
        return n(t);
      }
      function $V(t) {
        if (t == null)
          return 0;
        if (it(t))
          return Ns(t) ? Mr(t) : t.length;
        var n = Ge(t);
        return n == Ut || n == Wt ? t.size : Ml(t).length;
      }
      function yV(t, n, i) {
        var l = Z(t) ? _l : h$;
        return i && Qe(t, n, i) && (n = r), l(t, H(n, 3));
      }
      var VV = ee(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Qe(t, n[0], n[1]) ? n = [] : i > 2 && Qe(n[0], n[1], n[2]) && (n = [n[0]]), Tf(t, We(n, 1), []);
      }), As = n0 || function() {
        return Ue.Date.now();
      };
      function bV(t, n) {
        if (typeof n != "function")
          throw new It(c);
        return t = J(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Eh(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, _n(t, P, r, r, r, r, n);
      }
      function Ih(t, n) {
        var i;
        if (typeof n != "function")
          throw new It(c);
        return t = J(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var su = ee(function(t, n, i) {
        var l = M;
        if (i.length) {
          var d = Ln(i, Hr(su));
          l |= I;
        }
        return _n(t, l, n, i, d);
      }), kh = ee(function(t, n, i) {
        var l = M | S;
        if (i.length) {
          var d = Ln(i, Hr(kh));
          l |= I;
        }
        return _n(n, l, t, i, d);
      });
      function xh(t, n, i) {
        n = i ? r : n;
        var l = _n(t, A, r, r, r, r, r, n);
        return l.placeholder = xh.placeholder, l;
      }
      function Ah(t, n, i) {
        n = i ? r : n;
        var l = _n(t, O, r, r, r, r, r, n);
        return l.placeholder = Ah.placeholder, l;
      }
      function Bh(t, n, i) {
        var l, d, p, v, g, b, k = 0, x = !1, D = !1, R = !0;
        if (typeof t != "function")
          throw new It(c);
        n = Tt(n) || 0, Ce(i) && (x = !!i.leading, D = "maxWait" in i, p = D ? De(Tt(i.maxWait) || 0, n) : p, R = "trailing" in i ? !!i.trailing : R);
        function W(ke) {
          var Yt = l, bn = d;
          return l = d = r, k = ke, v = t.apply(bn, Yt), v;
        }
        function z(ke) {
          return k = ke, g = ti(te, n), x ? W(ke) : v;
        }
        function X(ke) {
          var Yt = ke - b, bn = ke - k, Kh = n - Yt;
          return D ? Ye(Kh, p - bn) : Kh;
        }
        function Y(ke) {
          var Yt = ke - b, bn = ke - k;
          return b === r || Yt >= n || Yt < 0 || D && bn >= p;
        }
        function te() {
          var ke = As();
          if (Y(ke))
            return ie(ke);
          g = ti(te, X(ke));
        }
        function ie(ke) {
          return g = r, R && l ? W(ke) : (l = d = r, v);
        }
        function mt() {
          g !== r && Uf(g), k = 0, l = b = d = g = r;
        }
        function et() {
          return g === r ? v : ie(As());
        }
        function _t() {
          var ke = As(), Yt = Y(ke);
          if (l = arguments, d = this, b = ke, Yt) {
            if (g === r)
              return z(b);
            if (D)
              return Uf(g), g = ti(te, n), W(b);
          }
          return g === r && (g = ti(te, n)), v;
        }
        return _t.cancel = mt, _t.flush = et, _t;
      }
      var CV = ee(function(t, n) {
        return $f(t, 1, n);
      }), SV = ee(function(t, n, i) {
        return $f(t, Tt(n) || 0, i);
      });
      function EV(t) {
        return _n(t, ve);
      }
      function Bs(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new It(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var v = t.apply(this, l);
          return i.cache = p.set(d, v) || p, v;
        };
        return i.cache = new (Bs.Cache || vn)(), i;
      }
      Bs.Cache = vn;
      function Ts(t) {
        if (typeof t != "function")
          throw new It(c);
        return function() {
          var n = arguments;
          switch (n.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, n[0]);
            case 2:
              return !t.call(this, n[0], n[1]);
            case 3:
              return !t.call(this, n[0], n[1], n[2]);
          }
          return !t.apply(this, n);
        };
      }
      function IV(t) {
        return Ih(2, t);
      }
      var kV = p$(function(t, n) {
        n = n.length == 1 && Z(n[0]) ? be(n[0], pt(H())) : be(We(n, 1), pt(H()));
        var i = n.length;
        return ee(function(l) {
          for (var d = -1, p = Ye(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return ht(t, this, l);
        });
      }), au = ee(function(t, n) {
        var i = Ln(n, Hr(au));
        return _n(t, I, r, n, i);
      }), Th = ee(function(t, n) {
        var i = Ln(n, Hr(Th));
        return _n(t, F, r, n, i);
      }), xV = gn(function(t, n) {
        return _n(t, q, r, r, r, n);
      });
      function AV(t, n) {
        if (typeof t != "function")
          throw new It(c);
        return n = n === r ? n : J(n), ee(t, n);
      }
      function BV(t, n) {
        if (typeof t != "function")
          throw new It(c);
        return n = n == null ? 0 : De(J(n), 0), ee(function(i) {
          var l = i[n], d = Fn(i, 0, n);
          return l && Nn(d, l), ht(t, this, d);
        });
      }
      function TV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new It(c);
        return Ce(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Bh(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function DV(t) {
        return Eh(t, 1);
      }
      function NV(t, n) {
        return au(zl(n), t);
      }
      function LV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Z(t) ? t : [t];
      }
      function MV(t) {
        return xt(t, T);
      }
      function OV(t, n) {
        return n = typeof n == "function" ? n : r, xt(t, T, n);
      }
      function PV(t) {
        return xt(t, $ | T);
      }
      function RV(t, n) {
        return n = typeof n == "function" ? n : r, xt(t, $ | T, n);
      }
      function FV(t, n) {
        return n == null || gf(t, n, Me(n));
      }
      function zt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var UV = Cs(Dl), WV = Cs(function(t, n) {
        return t >= n;
      }), ur = Sf(function() {
        return arguments;
      }()) ? Sf : function(t) {
        return Ee(t) && he.call(t, "callee") && !df.call(t, "callee");
      }, Z = C.isArray, qV = zd ? pt(zd) : J0;
      function it(t) {
        return t != null && Ds(t.length) && !yn(t);
      }
      function Ie(t) {
        return Ee(t) && it(t);
      }
      function HV(t) {
        return t === !0 || t === !1 || Ee(t) && Xe(t) == Lo;
      }
      var Un = o0 || _u, zV = Yd ? pt(Yd) : X0;
      function YV(t) {
        return Ee(t) && t.nodeType === 1 && !ni(t);
      }
      function GV(t) {
        if (t == null)
          return !0;
        if (it(t) && (Z(t) || typeof t == "string" || typeof t.splice == "function" || Un(t) || zr(t) || ur(t)))
          return !t.length;
        var n = Ge(t);
        if (n == Ut || n == Wt)
          return !t.size;
        if (ei(t))
          return !Ml(t).length;
        for (var i in t)
          if (he.call(t, i))
            return !1;
        return !0;
      }
      function jV(t, n) {
        return Jo(t, n);
      }
      function ZV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? Jo(t, n, r, i) : !!l;
      }
      function lu(t) {
        if (!Ee(t))
          return !1;
        var n = Xe(t);
        return n == zi || n == _g || typeof t.message == "string" && typeof t.name == "string" && !ni(t);
      }
      function KV(t) {
        return typeof t == "number" && hf(t);
      }
      function yn(t) {
        if (!Ce(t))
          return !1;
        var n = Xe(t);
        return n == Yi || n == gd || n == mg || n == $g;
      }
      function Dh(t) {
        return typeof t == "number" && t == J(t);
      }
      function Ds(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Je;
      }
      function Ce(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Ee(t) {
        return t != null && typeof t == "object";
      }
      var Nh = Gd ? pt(Gd) : e$;
      function JV(t, n) {
        return t === n || Ll(t, n, Xl(n));
      }
      function XV(t, n, i) {
        return i = typeof i == "function" ? i : r, Ll(t, n, Xl(n), i);
      }
      function QV(t) {
        return Lh(t) && t != +t;
      }
      function eb(t) {
        if (O$(t))
          throw new j(u);
        return Ef(t);
      }
      function tb(t) {
        return t === null;
      }
      function nb(t) {
        return t == null;
      }
      function Lh(t) {
        return typeof t == "number" || Ee(t) && Xe(t) == Oo;
      }
      function ni(t) {
        if (!Ee(t) || Xe(t) != pn)
          return !1;
        var n = ss(t);
        if (n === null)
          return !0;
        var i = he.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && ns.call(i) == X1;
      }
      var uu = jd ? pt(jd) : t$;
      function rb(t) {
        return Dh(t) && t >= -Je && t <= Je;
      }
      var Mh = Zd ? pt(Zd) : n$;
      function Ns(t) {
        return typeof t == "string" || !Z(t) && Ee(t) && Xe(t) == Ro;
      }
      function vt(t) {
        return typeof t == "symbol" || Ee(t) && Xe(t) == Gi;
      }
      var zr = Kd ? pt(Kd) : r$;
      function ob(t) {
        return t === r;
      }
      function ib(t) {
        return Ee(t) && Ge(t) == Fo;
      }
      function sb(t) {
        return Ee(t) && Xe(t) == Vg;
      }
      var ab = Cs(Ol), lb = Cs(function(t, n) {
        return t <= n;
      });
      function Oh(t) {
        if (!t)
          return [];
        if (it(t))
          return Ns(t) ? qt(t) : ot(t);
        if (qo && t[qo])
          return F1(t[qo]());
        var n = Ge(t), i = n == Ut ? Cl : n == Wt ? Qi : Yr;
        return i(t);
      }
      function Vn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Tt(t), t === Fe || t === -Fe) {
          var n = t < 0 ? -1 : 1;
          return n * No;
        }
        return t === t ? t : 0;
      }
      function J(t) {
        var n = Vn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Ph(t) {
        return t ? ir(J(t), 0, tn) : 0;
      }
      function Tt(t) {
        if (typeof t == "number")
          return t;
        if (vt(t))
          return qi;
        if (Ce(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ce(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = nf(t);
        var i = qg.test(t);
        return i || zg.test(t) ? b1(t.slice(2), i ? 2 : 8) : Wg.test(t) ? qi : +t;
      }
      function Rh(t) {
        return rn(t, st(t));
      }
      function ub(t) {
        return t ? ir(J(t), -Je, Je) : t === 0 ? t : 0;
      }
      function de(t) {
        return t == null ? "" : wt(t);
      }
      var cb = Wr(function(t, n) {
        if (ei(n) || it(n)) {
          rn(n, Me(n), t);
          return;
        }
        for (var i in n)
          he.call(n, i) && jo(t, i, n[i]);
      }), Fh = Wr(function(t, n) {
        rn(n, st(n), t);
      }), Ls = Wr(function(t, n, i, l) {
        rn(n, st(n), t, l);
      }), db = Wr(function(t, n, i, l) {
        rn(n, Me(n), t, l);
      }), fb = gn(Al);
      function hb(t, n) {
        var i = Ur(t);
        return n == null ? i : _f(i, n);
      }
      var pb = ee(function(t, n) {
        t = _e(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Qe(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], v = st(p), g = -1, b = v.length; ++g < b; ) {
            var k = v[g], x = t[k];
            (x === r || zt(x, Pr[k]) && !he.call(t, k)) && (t[k] = p[k]);
          }
        return t;
      }), wb = ee(function(t) {
        return t.push(r, rh), ht(Uh, r, t);
      });
      function vb(t, n) {
        return Xd(t, H(n, 3), nn);
      }
      function mb(t, n) {
        return Xd(t, H(n, 3), Tl);
      }
      function _b(t, n) {
        return t == null ? t : Bl(t, H(n, 3), st);
      }
      function gb(t, n) {
        return t == null ? t : bf(t, H(n, 3), st);
      }
      function $b(t, n) {
        return t && nn(t, H(n, 3));
      }
      function yb(t, n) {
        return t && Tl(t, H(n, 3));
      }
      function Vb(t) {
        return t == null ? [] : vs(t, Me(t));
      }
      function bb(t) {
        return t == null ? [] : vs(t, st(t));
      }
      function cu(t, n, i) {
        var l = t == null ? r : sr(t, n);
        return l === r ? i : l;
      }
      function Cb(t, n) {
        return t != null && sh(t, n, G0);
      }
      function du(t, n) {
        return t != null && sh(t, n, j0);
      }
      var Sb = Xf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = rs.call(n)), t[n] = i;
      }, hu(at)), Eb = Xf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = rs.call(n)), he.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, H), Ib = ee(Ko);
      function Me(t) {
        return it(t) ? vf(t) : Ml(t);
      }
      function st(t) {
        return it(t) ? vf(t, !0) : o$(t);
      }
      function kb(t, n) {
        var i = {};
        return n = H(n, 3), nn(t, function(l, d, p) {
          mn(i, n(l, d, p), l);
        }), i;
      }
      function xb(t, n) {
        var i = {};
        return n = H(n, 3), nn(t, function(l, d, p) {
          mn(i, d, n(l, d, p));
        }), i;
      }
      var Ab = Wr(function(t, n, i) {
        ms(t, n, i);
      }), Uh = Wr(function(t, n, i, l) {
        ms(t, n, i, l);
      }), Bb = gn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = be(n, function(p) {
          return p = Rn(p, t), l || (l = p.length > 1), p;
        }), rn(t, Kl(t), i), l && (i = xt(i, $ | y | T, S$));
        for (var d = n.length; d--; )
          Wl(i, n[d]);
        return i;
      });
      function Tb(t, n) {
        return Wh(t, Ts(H(n)));
      }
      var Db = gn(function(t, n) {
        return t == null ? {} : s$(t, n);
      });
      function Wh(t, n) {
        if (t == null)
          return {};
        var i = be(Kl(t), function(l) {
          return [l];
        });
        return n = H(n), Df(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Nb(t, n, i) {
        n = Rn(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[on(n[l])];
          p === r && (l = d, p = i), t = yn(p) ? p.call(t) : p;
        }
        return t;
      }
      function Lb(t, n, i) {
        return t == null ? t : Xo(t, n, i);
      }
      function Mb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Xo(t, n, i, l);
      }
      var qh = th(Me), Hh = th(st);
      function Ob(t, n, i) {
        var l = Z(t), d = l || Un(t) || zr(t);
        if (n = H(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : Ce(t) ? i = yn(p) ? Ur(ss(t)) : {} : i = {};
        }
        return (d ? Et : nn)(t, function(v, g, b) {
          return n(i, v, g, b);
        }), i;
      }
      function Pb(t, n) {
        return t == null ? !0 : Wl(t, n);
      }
      function Rb(t, n, i) {
        return t == null ? t : Pf(t, n, zl(i));
      }
      function Fb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Pf(t, n, zl(i), l);
      }
      function Yr(t) {
        return t == null ? [] : bl(t, Me(t));
      }
      function Ub(t) {
        return t == null ? [] : bl(t, st(t));
      }
      function Wb(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Tt(i), i = i === i ? i : 0), n !== r && (n = Tt(n), n = n === n ? n : 0), ir(Tt(t), n, i);
      }
      function qb(t, n, i) {
        return n = Vn(n), i === r ? (i = n, n = 0) : i = Vn(i), t = Tt(t), Z0(t, n, i);
      }
      function Hb(t, n, i) {
        if (i && typeof i != "boolean" && Qe(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Vn(t), n === r ? (n = t, t = 0) : n = Vn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = pf();
          return Ye(t + d * (n - t + V1("1e-" + ((d + "").length - 1))), n);
        }
        return Rl(t, n);
      }
      var zb = qr(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? zh(n) : n);
      });
      function zh(t) {
        return fu(de(t).toLowerCase());
      }
      function Yh(t) {
        return t = de(t), t && t.replace(Gg, L1).replace(f1, "");
      }
      function Yb(t, n, i) {
        t = de(t), n = wt(n);
        var l = t.length;
        i = i === r ? l : ir(J(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function Gb(t) {
        return t = de(t), t && Ig.test(t) ? t.replace(Vd, M1) : t;
      }
      function jb(t) {
        return t = de(t), t && Dg.test(t) ? t.replace(al, "\\$&") : t;
      }
      var Zb = qr(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), Kb = qr(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), Jb = Zf("toLowerCase");
      function Xb(t, n, i) {
        t = de(t), n = J(n);
        var l = n ? Mr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return bs(cs(d), i) + t + bs(us(d), i);
      }
      function Qb(t, n, i) {
        t = de(t), n = J(n);
        var l = n ? Mr(t) : 0;
        return n && l < n ? t + bs(n - l, i) : t;
      }
      function eC(t, n, i) {
        t = de(t), n = J(n);
        var l = n ? Mr(t) : 0;
        return n && l < n ? bs(n - l, i) + t : t;
      }
      function tC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), l0(de(t).replace(ll, ""), n || 0);
      }
      function nC(t, n, i) {
        return (i ? Qe(t, n, i) : n === r) ? n = 1 : n = J(n), Fl(de(t), n);
      }
      function rC() {
        var t = arguments, n = de(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var oC = qr(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function iC(t, n, i) {
        return i && typeof i != "number" && Qe(t, n, i) && (n = i = r), i = i === r ? tn : i >>> 0, i ? (t = de(t), t && (typeof n == "string" || n != null && !uu(n)) && (n = wt(n), !n && Lr(t)) ? Fn(qt(t), 0, i) : t.split(n, i)) : [];
      }
      var sC = qr(function(t, n, i) {
        return t + (i ? " " : "") + fu(n);
      });
      function aC(t, n, i) {
        return t = de(t), i = i == null ? 0 : ir(J(i), 0, t.length), n = wt(n), t.slice(i, i + n.length) == n;
      }
      function lC(t, n, i) {
        var l = h.templateSettings;
        i && Qe(t, n, i) && (n = r), t = de(t), n = Ls({}, n, l, nh);
        var d = Ls({}, n.imports, l.imports, nh), p = Me(d), v = bl(d, p), g, b, k = 0, x = n.interpolate || ji, D = "__p += '", R = Sl(
          (n.escape || ji).source + "|" + x.source + "|" + (x === bd ? Ug : ji).source + "|" + (n.evaluate || ji).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (he.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++m1 + "]") + `
`;
        t.replace(R, function(Y, te, ie, mt, et, _t) {
          return ie || (ie = mt), D += t.slice(k, _t).replace(jg, O1), te && (g = !0, D += `' +
__e(` + te + `) +
'`), et && (b = !0, D += `';
` + et + `;
__p += '`), ie && (D += `' +
((__t = (` + ie + `)) == null ? '' : __t) +
'`), k = _t + Y.length, Y;
        }), D += `';
`;
        var z = he.call(n, "variable") && n.variable;
        if (!z)
          D = `with (obj) {
` + D + `
}
`;
        else if (Rg.test(z))
          throw new j(f);
        D = (b ? D.replace(bg, "") : D).replace(Cg, "$1").replace(Sg, "$1;"), D = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var X = jh(function() {
          return le(p, W + "return " + D).apply(r, v);
        });
        if (X.source = D, lu(X))
          throw X;
        return X;
      }
      function uC(t) {
        return de(t).toLowerCase();
      }
      function cC(t) {
        return de(t).toUpperCase();
      }
      function dC(t, n, i) {
        if (t = de(t), t && (i || n === r))
          return nf(t);
        if (!t || !(n = wt(n)))
          return t;
        var l = qt(t), d = qt(n), p = rf(l, d), v = of(l, d) + 1;
        return Fn(l, p, v).join("");
      }
      function fC(t, n, i) {
        if (t = de(t), t && (i || n === r))
          return t.slice(0, af(t) + 1);
        if (!t || !(n = wt(n)))
          return t;
        var l = qt(t), d = of(l, qt(n)) + 1;
        return Fn(l, 0, d).join("");
      }
      function hC(t, n, i) {
        if (t = de(t), t && (i || n === r))
          return t.replace(ll, "");
        if (!t || !(n = wt(n)))
          return t;
        var l = qt(t), d = rf(l, qt(n));
        return Fn(l, d).join("");
      }
      function pC(t, n) {
        var i = ae, l = re;
        if (Ce(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? J(n.length) : i, l = "omission" in n ? wt(n.omission) : l;
        }
        t = de(t);
        var p = t.length;
        if (Lr(t)) {
          var v = qt(t);
          p = v.length;
        }
        if (i >= p)
          return t;
        var g = i - Mr(l);
        if (g < 1)
          return l;
        var b = v ? Fn(v, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (v && (g += b.length - g), uu(d)) {
          if (t.slice(g).search(d)) {
            var k, x = b;
            for (d.global || (d = Sl(d.source, de(Cd.exec(d)) + "g")), d.lastIndex = 0; k = d.exec(x); )
              var D = k.index;
            b = b.slice(0, D === r ? g : D);
          }
        } else if (t.indexOf(wt(d), g) != g) {
          var R = b.lastIndexOf(d);
          R > -1 && (b = b.slice(0, R));
        }
        return b + l;
      }
      function wC(t) {
        return t = de(t), t && Eg.test(t) ? t.replace(yd, H1) : t;
      }
      var vC = qr(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), fu = Zf("toUpperCase");
      function Gh(t, n, i) {
        return t = de(t), n = i ? r : n, n === r ? R1(t) ? G1(t) : A1(t) : t.match(n) || [];
      }
      var jh = ee(function(t, n) {
        try {
          return ht(t, r, n);
        } catch (i) {
          return lu(i) ? i : new j(i);
        }
      }), mC = gn(function(t, n) {
        return Et(n, function(i) {
          i = on(i), mn(t, i, su(t[i], t));
        }), t;
      });
      function _C(t) {
        var n = t == null ? 0 : t.length, i = H();
        return t = n ? be(t, function(l) {
          if (typeof l[1] != "function")
            throw new It(c);
          return [i(l[0]), l[1]];
        }) : [], ee(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (ht(p[0], this, l))
              return ht(p[1], this, l);
          }
        });
      }
      function gC(t) {
        return H0(xt(t, $));
      }
      function hu(t) {
        return function() {
          return t;
        };
      }
      function $C(t, n) {
        return t == null || t !== t ? n : t;
      }
      var yC = Jf(), VC = Jf(!0);
      function at(t) {
        return t;
      }
      function pu(t) {
        return If(typeof t == "function" ? t : xt(t, $));
      }
      function bC(t) {
        return xf(xt(t, $));
      }
      function CC(t, n) {
        return Af(t, xt(n, $));
      }
      var SC = ee(function(t, n) {
        return function(i) {
          return Ko(i, t, n);
        };
      }), EC = ee(function(t, n) {
        return function(i) {
          return Ko(t, i, n);
        };
      });
      function wu(t, n, i) {
        var l = Me(n), d = vs(n, l);
        i == null && !(Ce(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = vs(n, Me(n)));
        var p = !(Ce(i) && "chain" in i) || !!i.chain, v = yn(t);
        return Et(d, function(g) {
          var b = n[g];
          t[g] = b, v && (t.prototype[g] = function() {
            var k = this.__chain__;
            if (p || k) {
              var x = t(this.__wrapped__), D = x.__actions__ = ot(this.__actions__);
              return D.push({ func: b, args: arguments, thisArg: t }), x.__chain__ = k, x;
            }
            return b.apply(t, Nn([this.value()], arguments));
          });
        }), t;
      }
      function IC() {
        return Ue._ === this && (Ue._ = Q1), this;
      }
      function vu() {
      }
      function kC(t) {
        return t = J(t), ee(function(n) {
          return Bf(n, t);
        });
      }
      var xC = Gl(be), AC = Gl(Jd), BC = Gl(_l);
      function Zh(t) {
        return eu(t) ? gl(on(t)) : a$(t);
      }
      function TC(t) {
        return function(n) {
          return t == null ? r : sr(t, n);
        };
      }
      var DC = Qf(), NC = Qf(!0);
      function mu() {
        return [];
      }
      function _u() {
        return !1;
      }
      function LC() {
        return {};
      }
      function MC() {
        return "";
      }
      function OC() {
        return !0;
      }
      function PC(t, n) {
        if (t = J(t), t < 1 || t > Je)
          return [];
        var i = tn, l = Ye(t, tn);
        n = H(n), t -= tn;
        for (var d = Vl(l, n); ++i < t; )
          n(i);
        return d;
      }
      function RC(t) {
        return Z(t) ? be(t, on) : vt(t) ? [t] : ot(wh(de(t)));
      }
      function FC(t) {
        var n = ++J1;
        return de(t) + n;
      }
      var UC = Vs(function(t, n) {
        return t + n;
      }, 0), WC = jl("ceil"), qC = Vs(function(t, n) {
        return t / n;
      }, 1), HC = jl("floor");
      function zC(t) {
        return t && t.length ? ws(t, at, Dl) : r;
      }
      function YC(t, n) {
        return t && t.length ? ws(t, H(n, 2), Dl) : r;
      }
      function GC(t) {
        return ef(t, at);
      }
      function jC(t, n) {
        return ef(t, H(n, 2));
      }
      function ZC(t) {
        return t && t.length ? ws(t, at, Ol) : r;
      }
      function KC(t, n) {
        return t && t.length ? ws(t, H(n, 2), Ol) : r;
      }
      var JC = Vs(function(t, n) {
        return t * n;
      }, 1), XC = jl("round"), QC = Vs(function(t, n) {
        return t - n;
      }, 0);
      function eS(t) {
        return t && t.length ? yl(t, at) : 0;
      }
      function tS(t, n) {
        return t && t.length ? yl(t, H(n, 2)) : 0;
      }
      return h.after = bV, h.ary = Eh, h.assign = cb, h.assignIn = Fh, h.assignInWith = Ls, h.assignWith = db, h.at = fb, h.before = Ih, h.bind = su, h.bindAll = mC, h.bindKey = kh, h.castArray = LV, h.chain = bh, h.chunk = H$, h.compact = z$, h.concat = Y$, h.cond = _C, h.conforms = gC, h.constant = hu, h.countBy = eV, h.create = hb, h.curry = xh, h.curryRight = Ah, h.debounce = Bh, h.defaults = pb, h.defaultsDeep = wb, h.defer = CV, h.delay = SV, h.difference = G$, h.differenceBy = j$, h.differenceWith = Z$, h.drop = K$, h.dropRight = J$, h.dropRightWhile = X$, h.dropWhile = Q$, h.fill = ey, h.filter = nV, h.flatMap = iV, h.flatMapDeep = sV, h.flatMapDepth = aV, h.flatten = gh, h.flattenDeep = ty, h.flattenDepth = ny, h.flip = EV, h.flow = yC, h.flowRight = VC, h.fromPairs = ry, h.functions = Vb, h.functionsIn = bb, h.groupBy = lV, h.initial = iy, h.intersection = sy, h.intersectionBy = ay, h.intersectionWith = ly, h.invert = Sb, h.invertBy = Eb, h.invokeMap = cV, h.iteratee = pu, h.keyBy = dV, h.keys = Me, h.keysIn = st, h.map = xs, h.mapKeys = kb, h.mapValues = xb, h.matches = bC, h.matchesProperty = CC, h.memoize = Bs, h.merge = Ab, h.mergeWith = Uh, h.method = SC, h.methodOf = EC, h.mixin = wu, h.negate = Ts, h.nthArg = kC, h.omit = Bb, h.omitBy = Tb, h.once = IV, h.orderBy = fV, h.over = xC, h.overArgs = kV, h.overEvery = AC, h.overSome = BC, h.partial = au, h.partialRight = Th, h.partition = hV, h.pick = Db, h.pickBy = Wh, h.property = Zh, h.propertyOf = TC, h.pull = fy, h.pullAll = yh, h.pullAllBy = hy, h.pullAllWith = py, h.pullAt = wy, h.range = DC, h.rangeRight = NC, h.rearg = xV, h.reject = vV, h.remove = vy, h.rest = AV, h.reverse = ou, h.sampleSize = _V, h.set = Lb, h.setWith = Mb, h.shuffle = gV, h.slice = my, h.sortBy = VV, h.sortedUniq = Cy, h.sortedUniqBy = Sy, h.split = iC, h.spread = BV, h.tail = Ey, h.take = Iy, h.takeRight = ky, h.takeRightWhile = xy, h.takeWhile = Ay, h.tap = zy, h.throttle = TV, h.thru = ks, h.toArray = Oh, h.toPairs = qh, h.toPairsIn = Hh, h.toPath = RC, h.toPlainObject = Rh, h.transform = Ob, h.unary = DV, h.union = By, h.unionBy = Ty, h.unionWith = Dy, h.uniq = Ny, h.uniqBy = Ly, h.uniqWith = My, h.unset = Pb, h.unzip = iu, h.unzipWith = Vh, h.update = Rb, h.updateWith = Fb, h.values = Yr, h.valuesIn = Ub, h.without = Oy, h.words = Gh, h.wrap = NV, h.xor = Py, h.xorBy = Ry, h.xorWith = Fy, h.zip = Uy, h.zipObject = Wy, h.zipObjectDeep = qy, h.zipWith = Hy, h.entries = qh, h.entriesIn = Hh, h.extend = Fh, h.extendWith = Ls, wu(h, h), h.add = UC, h.attempt = jh, h.camelCase = zb, h.capitalize = zh, h.ceil = WC, h.clamp = Wb, h.clone = MV, h.cloneDeep = PV, h.cloneDeepWith = RV, h.cloneWith = OV, h.conformsTo = FV, h.deburr = Yh, h.defaultTo = $C, h.divide = qC, h.endsWith = Yb, h.eq = zt, h.escape = Gb, h.escapeRegExp = jb, h.every = tV, h.find = rV, h.findIndex = mh, h.findKey = vb, h.findLast = oV, h.findLastIndex = _h, h.findLastKey = mb, h.floor = HC, h.forEach = Ch, h.forEachRight = Sh, h.forIn = _b, h.forInRight = gb, h.forOwn = $b, h.forOwnRight = yb, h.get = cu, h.gt = UV, h.gte = WV, h.has = Cb, h.hasIn = du, h.head = $h, h.identity = at, h.includes = uV, h.indexOf = oy, h.inRange = qb, h.invoke = Ib, h.isArguments = ur, h.isArray = Z, h.isArrayBuffer = qV, h.isArrayLike = it, h.isArrayLikeObject = Ie, h.isBoolean = HV, h.isBuffer = Un, h.isDate = zV, h.isElement = YV, h.isEmpty = GV, h.isEqual = jV, h.isEqualWith = ZV, h.isError = lu, h.isFinite = KV, h.isFunction = yn, h.isInteger = Dh, h.isLength = Ds, h.isMap = Nh, h.isMatch = JV, h.isMatchWith = XV, h.isNaN = QV, h.isNative = eb, h.isNil = nb, h.isNull = tb, h.isNumber = Lh, h.isObject = Ce, h.isObjectLike = Ee, h.isPlainObject = ni, h.isRegExp = uu, h.isSafeInteger = rb, h.isSet = Mh, h.isString = Ns, h.isSymbol = vt, h.isTypedArray = zr, h.isUndefined = ob, h.isWeakMap = ib, h.isWeakSet = sb, h.join = uy, h.kebabCase = Zb, h.last = Bt, h.lastIndexOf = cy, h.lowerCase = Kb, h.lowerFirst = Jb, h.lt = ab, h.lte = lb, h.max = zC, h.maxBy = YC, h.mean = GC, h.meanBy = jC, h.min = ZC, h.minBy = KC, h.stubArray = mu, h.stubFalse = _u, h.stubObject = LC, h.stubString = MC, h.stubTrue = OC, h.multiply = JC, h.nth = dy, h.noConflict = IC, h.noop = vu, h.now = As, h.pad = Xb, h.padEnd = Qb, h.padStart = eC, h.parseInt = tC, h.random = Hb, h.reduce = pV, h.reduceRight = wV, h.repeat = nC, h.replace = rC, h.result = Nb, h.round = XC, h.runInContext = V, h.sample = mV, h.size = $V, h.snakeCase = oC, h.some = yV, h.sortedIndex = _y, h.sortedIndexBy = gy, h.sortedIndexOf = $y, h.sortedLastIndex = yy, h.sortedLastIndexBy = Vy, h.sortedLastIndexOf = by, h.startCase = sC, h.startsWith = aC, h.subtract = QC, h.sum = eS, h.sumBy = tS, h.template = lC, h.times = PC, h.toFinite = Vn, h.toInteger = J, h.toLength = Ph, h.toLower = uC, h.toNumber = Tt, h.toSafeInteger = ub, h.toString = de, h.toUpper = cC, h.trim = dC, h.trimEnd = fC, h.trimStart = hC, h.truncate = pC, h.unescape = wC, h.uniqueId = FC, h.upperCase = vC, h.upperFirst = fu, h.each = Ch, h.eachRight = Sh, h.first = $h, wu(h, function() {
        var t = {};
        return nn(h, function(n, i) {
          he.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Et(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Et(["drop", "take"], function(t, n) {
        ne.prototype[t] = function(i) {
          i = i === r ? 1 : De(J(i), 0);
          var l = this.__filtered__ && !n ? new ne(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ye(i, l.__takeCount__) : l.__views__.push({
            size: Ye(i, tn),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ne.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Et(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ae || i == Re;
        ne.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: H(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Et(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        ne.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Et(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        ne.prototype[t] = function() {
          return this.__filtered__ ? new ne(this) : this[i](1);
        };
      }), ne.prototype.compact = function() {
        return this.filter(at);
      }, ne.prototype.find = function(t) {
        return this.filter(t).head();
      }, ne.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ne.prototype.invokeMap = ee(function(t, n) {
        return typeof t == "function" ? new ne(this) : this.map(function(i) {
          return Ko(i, t, n);
        });
      }), ne.prototype.reject = function(t) {
        return this.filter(Ts(H(t)));
      }, ne.prototype.slice = function(t, n) {
        t = J(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new ne(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = J(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, ne.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ne.prototype.toArray = function() {
        return this.take(tn);
      }, nn(ne.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var v = this.__wrapped__, g = l ? [1] : arguments, b = v instanceof ne, k = g[0], x = b || Z(v), D = function(te) {
            var ie = d.apply(h, Nn([te], g));
            return l && R ? ie[0] : ie;
          };
          x && i && typeof k == "function" && k.length != 1 && (b = x = !1);
          var R = this.__chain__, W = !!this.__actions__.length, z = p && !R, X = b && !W;
          if (!p && x) {
            v = X ? v : new ne(this);
            var Y = t.apply(v, g);
            return Y.__actions__.push({ func: ks, args: [D], thisArg: r }), new kt(Y, R);
          }
          return z && X ? t.apply(this, g) : (Y = this.thru(D), z ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), Et(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = es[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(Z(p) ? p : [], d);
          }
          return this[i](function(v) {
            return n.apply(Z(v) ? v : [], d);
          });
        };
      }), nn(ne.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          he.call(Fr, l) || (Fr[l] = []), Fr[l].push({ name: n, func: i });
        }
      }), Fr[ys(r, S).name] = [{
        name: "wrapper",
        func: r
      }], ne.prototype.clone = w0, ne.prototype.reverse = v0, ne.prototype.value = m0, h.prototype.at = Yy, h.prototype.chain = Gy, h.prototype.commit = jy, h.prototype.next = Zy, h.prototype.plant = Jy, h.prototype.reverse = Xy, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Qy, h.prototype.first = h.prototype.head, qo && (h.prototype[qo] = Ky), h;
    }, Or = j1();
    tr ? ((tr.exports = Or)._ = Or, pl._ = Or) : Ue._ = Or;
  }).call(ri);
})(we, we.exports);
const yE = "/alarms?_s=", Ta = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, VE = async (e, o) => {
  try {
    return (await Qt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ta
    )).status === 204;
  } catch {
    return !1;
  }
}, xm = async (e, o) => {
  try {
    return (await Qt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ta
    )).status === 204;
  } catch {
    return !1;
  }
}, bE = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Bn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ta
    )).status == 204;
  } catch {
    return !1;
  }
}, CE = async () => {
  try {
    const e = `${yE}isSituation==true&limit=0`, o = await Bn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, SE = async (e) => {
  try {
    const o = e.join(",id=="), r = await Bn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Am = async (e) => {
  try {
    const o = await Bn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, EE = async (e) => {
  try {
    const o = await Bn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, IE = async () => {
  try {
    const e = await Bn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => we.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, kE = async (e, o, r) => {
  try {
    return (await Bn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ta
    )).status == 204;
  } catch {
    return !1;
  }
}, xE = async (e, o) => {
  try {
    return (await Bn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, AE = async () => {
  try {
    const e = await Bn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, BE = window.Pinia.defineStore, en = BE("situationsStore", {
  state: () => ({
    situations: [],
    selectedSituation: -1,
    situationDetail: null,
    filteredSituations: [],
    nodes: [],
    filters: null,
    unassignedAlarms: []
  }),
  actions: {
    async getNodes() {
      this.nodes = [];
      const e = await IE();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await CE();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = we.exports.groupBy(o, "status"), a = [
          ...o.filter(
            (u) => u.status !== "REJECTED" && u.status !== "ACCEPTED"
          ),
          ...r.ACCEPTED || []
        ];
        this.situations = a;
      } else
        this.situations = [];
    },
    async getSituation(e) {
      var o, r;
      if (e) {
        const s = await Am(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await SE(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = we.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await EE(s);
          a && (r[s] = we.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await AE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), TE = window.Vue.openBlock, DE = window.Vue.createElementBlock, NE = window.Vue.createElementVNode;
var LE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ME = {}, OE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PE = /* @__PURE__ */ NE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), RE = [
  PE
];
function FE(e, o) {
  return TE(), DE("svg", OE, RE);
}
var _o = /* @__PURE__ */ LE(ME, [["render", FE]]);
var UE = Object.defineProperty, $p = Object.getOwnPropertySymbols, WE = Object.prototype.hasOwnProperty, qE = Object.prototype.propertyIsEnumerable, yp = (e, o, r) => o in e ? UE(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Vp = (e, o) => {
  for (var r in o || (o = {}))
    WE.call(o, r) && yp(e, r, o[r]);
  if ($p)
    for (var r of $p(o))
      qE.call(o, r) && yp(e, r, o[r]);
  return e;
};
const HE = window.Vue.defineComponent, zE = window.Vue.toRaw, Nu = window.Vue.h;
var YE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const GE = {
  icon: {
    type: Object,
    required: !1
  },
  flex: {
    type: Boolean,
    default: !1
  },
  title: {
    type: String,
    required: !1
  }
}, jE = HE({
  props: GE,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = zE(this.icon);
    return this.$slots.default ? Nu("span", { class: "feather-icon-container" }, [
      Nu(this.$slots.default()[0], Vp({
        class: o
      }, r))
    ]) : Nu(s, Vp({
      class: o
    }, r));
  }
});
var G = /* @__PURE__ */ YE(jE, [["__scopeId", "data-v-52cbf270"]]);
const ZE = window.Vue.openBlock, KE = window.Vue.createElementBlock, JE = window.Vue.createElementVNode;
var XE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QE = {}, e2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, t2 = /* @__PURE__ */ JE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), n2 = [
  t2
];
function r2(e, o) {
  return ZE(), KE("svg", e2, n2);
}
var Bm = /* @__PURE__ */ XE(QE, [["render", r2]]);
const Pe = {
  URL_DOCUMENTATION: "https://docs.opennms.com/alec/3.0.4-SNAPSHOT/reference/engines/introduction.html",
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  ENGINE_LLM: "llm",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
};
function dn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function ye(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Le(e) {
  ye(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function o2(e, o) {
  ye(2, arguments);
  var r = Le(e), s = dn(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function i2(e, o) {
  ye(2, arguments);
  var r = Le(e).getTime(), s = dn(o);
  return new Date(r + s);
}
var s2 = {};
function Vo() {
  return s2;
}
function bp(e, o) {
  var r, s, a, u, c, f, w, m;
  ye(1, arguments);
  var _ = Vo(), $ = dn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Le(e), T = y.getDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - B), y.setHours(0, 0, 0, 0), y;
}
function Ic(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Cp(e) {
  ye(1, arguments);
  var o = Le(e);
  return o.setHours(0, 0, 0, 0), o;
}
function a2(e, o) {
  ye(2, arguments);
  var r = Le(e), s = Le(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Tm(e, o) {
  ye(2, arguments);
  var r = Cp(e), s = Cp(o);
  return r.getTime() === s.getTime();
}
function l2(e) {
  return ye(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function u2(e) {
  if (ye(1, arguments), !l2(e) && typeof e != "number")
    return !1;
  var o = Le(e);
  return !isNaN(Number(o));
}
function c2(e, o) {
  ye(2, arguments);
  var r = dn(o);
  return i2(e, -r);
}
var d2 = 864e5;
function f2(e) {
  ye(1, arguments);
  var o = Le(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / d2) + 1;
}
function ma(e) {
  ye(1, arguments);
  var o = 1, r = Le(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Dm(e) {
  ye(1, arguments);
  var o = Le(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = ma(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = ma(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function h2(e) {
  ye(1, arguments);
  var o = Dm(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = ma(r);
  return s;
}
var p2 = 6048e5;
function w2(e) {
  ye(1, arguments);
  var o = Le(e), r = ma(o).getTime() - h2(o).getTime();
  return Math.round(r / p2) + 1;
}
function _a(e, o) {
  var r, s, a, u, c, f, w, m;
  ye(1, arguments);
  var _ = Vo(), $ = dn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Le(e), T = y.getUTCDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - B), y.setUTCHours(0, 0, 0, 0), y;
}
function Nm(e, o) {
  var r, s, a, u, c, f, w, m;
  ye(1, arguments);
  var _ = Le(e), $ = _.getUTCFullYear(), y = Vo(), T = dn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = new Date(0);
  B.setUTCFullYear($ + 1, 0, T), B.setUTCHours(0, 0, 0, 0);
  var L = _a(B, o), M = new Date(0);
  M.setUTCFullYear($, 0, T), M.setUTCHours(0, 0, 0, 0);
  var S = _a(M, o);
  return _.getTime() >= L.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function v2(e, o) {
  var r, s, a, u, c, f, w, m;
  ye(1, arguments);
  var _ = Vo(), $ = dn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Nm(e, o), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var B = _a(T, o);
  return B;
}
var m2 = 6048e5;
function _2(e, o) {
  ye(1, arguments);
  var r = Le(e), s = _a(r, o).getTime() - v2(r, o).getTime();
  return Math.round(s / m2) + 1;
}
function pe(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var g2 = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return pe(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : pe(r + 1, 2);
  },
  d: function(e, o) {
    return pe(e.getUTCDate(), o.length);
  },
  a: function(e, o) {
    var r = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(e, o) {
    return pe(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return pe(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return pe(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return pe(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return pe(a, o.length);
  }
};
const Wn = g2;
var Zr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $2 = {
  G: function(e, o, r) {
    var s = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(s, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(s, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(s, {
          width: "wide"
        });
    }
  },
  y: function(e, o, r) {
    if (o === "yo") {
      var s = e.getUTCFullYear(), a = s > 0 ? s : 1 - s;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return Wn.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = Nm(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return pe(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : pe(u, o.length);
  },
  R: function(e, o) {
    var r = Dm(e);
    return pe(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return pe(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return pe(s, 2);
      case "Qo":
        return r.ordinalNumber(s, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(s);
      case "qq":
        return pe(s, 2);
      case "qo":
        return r.ordinalNumber(s, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, o, r) {
    var s = e.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return Wn.M(e, o);
      case "Mo":
        return r.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(s, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, o, r) {
    var s = e.getUTCMonth();
    switch (o) {
      case "L":
        return String(s + 1);
      case "LL":
        return pe(s + 1, 2);
      case "Lo":
        return r.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(s, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, o, r, s) {
    var a = _2(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : pe(a, o.length);
  },
  I: function(e, o, r) {
    var s = w2(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : pe(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Wn.d(e, o);
  },
  D: function(e, o, r) {
    var s = f2(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : pe(s, o.length);
  },
  E: function(e, o, r) {
    var s = e.getUTCDay();
    switch (o) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, o, r, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(u);
      case "ee":
        return pe(u, 2);
      case "eo":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(e, o, r, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(u);
      case "cc":
        return pe(u, o.length);
      case "co":
        return r.ordinalNumber(u, {
          unit: "day"
        });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(e, o, r) {
    var s = e.getUTCDay(), a = s === 0 ? 7 : s;
    switch (o) {
      case "i":
        return String(a);
      case "ii":
        return pe(a, o.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(s, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, o, r) {
    var s = e.getUTCHours(), a = s / 12 >= 1 ? "pm" : "am";
    switch (o) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(e, o, r) {
    var s = e.getUTCHours(), a;
    switch (s === 12 ? a = Zr.noon : s === 0 ? a = Zr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(e, o, r) {
    var s = e.getUTCHours(), a;
    switch (s >= 17 ? a = Zr.evening : s >= 12 ? a = Zr.afternoon : s >= 4 ? a = Zr.morning : a = Zr.night, o) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(e, o, r) {
    if (o === "ho") {
      var s = e.getUTCHours() % 12;
      return s === 0 && (s = 12), r.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return Wn.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Wn.H(e, o);
  },
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : pe(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : pe(s, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : Wn.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Wn.s(e, o);
  },
  S: function(e, o) {
    return Wn.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Ep(u);
      case "XXXX":
      case "XX":
        return br(u);
      case "XXXXX":
      case "XXX":
      default:
        return br(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Ep(u);
      case "xxxx":
      case "xx":
        return br(u);
      case "xxxxx":
      case "xxx":
      default:
        return br(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Sp(u, ":");
      case "OOOO":
      default:
        return "GMT" + br(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Sp(u, ":");
      case "zzzz":
      default:
        return "GMT" + br(u, ":");
    }
  },
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return pe(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return pe(u, o.length);
  }
};
function Sp(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + pe(u, 2);
}
function Ep(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + pe(Math.abs(e) / 60, 2);
  }
  return br(e, o);
}
function br(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = pe(Math.floor(a / 60), 2), c = pe(a % 60, 2);
  return s + u + r + c;
}
const y2 = $2;
var Ip = function(e, o) {
  switch (e) {
    case "P":
      return o.date({
        width: "short"
      });
    case "PP":
      return o.date({
        width: "medium"
      });
    case "PPP":
      return o.date({
        width: "long"
      });
    case "PPPP":
    default:
      return o.date({
        width: "full"
      });
  }
}, Lm = function(e, o) {
  switch (e) {
    case "p":
      return o.time({
        width: "short"
      });
    case "pp":
      return o.time({
        width: "medium"
      });
    case "ppp":
      return o.time({
        width: "long"
      });
    case "pppp":
    default:
      return o.time({
        width: "full"
      });
  }
}, V2 = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Ip(e, o);
  var u;
  switch (s) {
    case "P":
      u = o.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = o.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = o.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = o.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", Ip(s, o)).replace("{{time}}", Lm(a, o));
}, b2 = {
  p: Lm,
  P: V2
};
const C2 = b2;
var S2 = ["D", "DD"], E2 = ["YY", "YYYY"];
function I2(e) {
  return S2.indexOf(e) !== -1;
}
function k2(e) {
  return E2.indexOf(e) !== -1;
}
function kp(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var x2 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, A2 = function(e, o, r) {
  var s, a = x2[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const B2 = A2;
function Lu(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var T2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, D2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, N2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, L2 = {
  date: Lu({
    formats: T2,
    defaultWidth: "full"
  }),
  time: Lu({
    formats: D2,
    defaultWidth: "full"
  }),
  dateTime: Lu({
    formats: N2,
    defaultWidth: "full"
  })
};
const M2 = L2;
var O2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, P2 = function(e, o, r, s) {
  return O2[e];
};
const R2 = P2;
function oi(e) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, w = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[w] || e.values[f];
    }
    var m = e.argumentCallback ? e.argumentCallback(o) : o;
    return a[m];
  };
}
var F2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, U2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, W2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, q2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, H2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, z2 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Y2 = function(e, o) {
  var r = Number(e), s = r % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, G2 = {
  ordinalNumber: Y2,
  era: oi({
    values: F2,
    defaultWidth: "wide"
  }),
  quarter: oi({
    values: U2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: oi({
    values: W2,
    defaultWidth: "wide"
  }),
  day: oi({
    values: q2,
    defaultWidth: "wide"
  }),
  dayPeriod: oi({
    values: H2,
    defaultWidth: "wide",
    formattingValues: z2,
    defaultFormattingWidth: "wide"
  })
};
const j2 = G2;
function ii(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? K2(f, function($) {
      return $.test(c);
    }) : Z2(f, function($) {
      return $.test(c);
    }), m;
    m = e.valueCallback ? e.valueCallback(w) : w, m = r.valueCallback ? r.valueCallback(m) : m;
    var _ = o.slice(c.length);
    return {
      value: m,
      rest: _
    };
  };
}
function Z2(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function K2(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function J2(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = o.match(e.matchPattern);
    if (!s)
      return null;
    var a = s[0], u = o.match(e.parsePattern);
    if (!u)
      return null;
    var c = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    c = r.valueCallback ? r.valueCallback(c) : c;
    var f = o.slice(a.length);
    return {
      value: c,
      rest: f
    };
  };
}
var X2 = /^(\d+)(th|st|nd|rd)?/i, Q2 = /\d+/i, eI = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, tI = {
  any: [/^b/i, /^(a|c)/i]
}, nI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, oI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, iI = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, sI = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, aI = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, lI = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, uI = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, cI = {
  ordinalNumber: J2({
    matchPattern: X2,
    parsePattern: Q2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ii({
    matchPatterns: eI,
    defaultMatchWidth: "wide",
    parsePatterns: tI,
    defaultParseWidth: "any"
  }),
  quarter: ii({
    matchPatterns: nI,
    defaultMatchWidth: "wide",
    parsePatterns: rI,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ii({
    matchPatterns: oI,
    defaultMatchWidth: "wide",
    parsePatterns: iI,
    defaultParseWidth: "any"
  }),
  day: ii({
    matchPatterns: sI,
    defaultMatchWidth: "wide",
    parsePatterns: aI,
    defaultParseWidth: "any"
  }),
  dayPeriod: ii({
    matchPatterns: lI,
    defaultMatchWidth: "any",
    parsePatterns: uI,
    defaultParseWidth: "any"
  })
};
const dI = cI;
var fI = {
  code: "en-US",
  formatDistance: B2,
  formatLong: M2,
  formatRelative: R2,
  localize: j2,
  match: dI,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Mm = fI;
var hI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, wI = /^'([^]*?)'?$/, vI = /''/g, mI = /[a-zA-Z]/;
function _I(e, o, r) {
  var s, a, u, c, f, w, m, _, $, y, T, B, L, M, S, N, A, O;
  ye(2, arguments);
  var I = String(o), F = Vo(), P = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : F.locale) !== null && s !== void 0 ? s : Mm, q = dn((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (m = r.locale) === null || m === void 0 || (_ = m.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : F.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = F.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(q >= 1 && q <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ve = dn((T = (B = (L = (M = r == null ? void 0 : r.weekStartsOn) !== null && M !== void 0 ? M : r == null || (S = r.locale) === null || S === void 0 || (N = S.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && L !== void 0 ? L : F.weekStartsOn) !== null && B !== void 0 ? B : (A = F.locale) === null || A === void 0 || (O = A.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!(ve >= 0 && ve <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var ae = Le(e);
  if (!u2(ae))
    throw new RangeError("Invalid time value");
  var re = Ic(ae), K = c2(ae, re), oe = {
    firstWeekContainsDate: q,
    weekStartsOn: ve,
    locale: P,
    _originalDate: ae
  }, Ae = I.match(pI).map(function(me) {
    var Re = me[0];
    if (Re === "p" || Re === "P") {
      var Fe = C2[Re];
      return Fe(me, P.formatLong);
    }
    return me;
  }).join("").match(hI).map(function(me) {
    if (me === "''")
      return "'";
    var Re = me[0];
    if (Re === "'")
      return gI(me);
    var Fe = y2[Re];
    if (Fe)
      return !(r != null && r.useAdditionalWeekYearTokens) && k2(me) && kp(me, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && I2(me) && kp(me, o, String(e)), Fe(K, me, P.localize, oe);
    if (Re.match(mI))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Re + "`");
    return me;
  }).join("");
  return Ae;
}
function gI(e) {
  var o = e.match(wI);
  return o ? o[1].replace(vI, "'") : e;
}
function Om(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function $I(e) {
  return Om({}, e);
}
var xp = 1e3 * 60, ga = 60 * 24, Ap = ga * 30, Bp = ga * 365;
function Da(e, o, r) {
  var s, a, u;
  ye(2, arguments);
  var c = Vo(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : Mm;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = a2(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var m = Om($I(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = Le(o), $ = Le(e)) : (_ = Le(e), $ = Le(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if (y === "floor")
    T = Math.floor;
  else if (y === "ceil")
    T = Math.ceil;
  else if (y === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var B = $.getTime() - _.getTime(), L = B / xp, M = Ic($) - Ic(_), S = (B - M) / xp, N = r == null ? void 0 : r.unit, A;
  if (N ? A = String(N) : L < 1 ? A = "second" : L < 60 ? A = "minute" : L < ga ? A = "hour" : S < Ap ? A = "day" : S < Bp ? A = "month" : A = "year", A === "second") {
    var O = T(B / 1e3);
    return f.formatDistance("xSeconds", O, m);
  } else if (A === "minute") {
    var I = T(L);
    return f.formatDistance("xMinutes", I, m);
  } else if (A === "hour") {
    var F = T(L / 60);
    return f.formatDistance("xHours", F, m);
  } else if (A === "day") {
    var P = T(S / ga);
    return f.formatDistance("xDays", P, m);
  } else if (A === "month") {
    var q = T(S / Ap);
    return q === 12 && N !== "month" ? f.formatDistance("xYears", 1, m) : f.formatDistance("xMonths", q, m);
  } else if (A === "year") {
    var ve = T(S / Bp);
    return f.formatDistance("xYears", ve, m);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function yI(e, o, r) {
  ye(2, arguments);
  var s = bp(e, r), a = bp(o, r);
  return s.getTime() === a.getTime();
}
function VI(e, o) {
  return ye(1, arguments), yI(e, Date.now(), o);
}
function bI(e) {
  return ye(1, arguments), Tm(e, Date.now());
}
function CI(e, o) {
  ye(2, arguments);
  var r = dn(o);
  return o2(e, -r);
}
function SI(e) {
  return ye(1, arguments), Tm(e, CI(Date.now(), 1));
}
const fn = (e) => {
  let o = "";
  if (e)
    try {
      o = _I(new Date(e), Pe.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Pm = (e, o) => {
  const r = e.length > o ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, EI = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => bI(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => SI(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => VI(s.firstEventTime)
      );
      break;
  }
  return r;
}, II = window.Vue.defineComponent, $t = window.Vue.unref, Tp = window.Vue.normalizeClass, un = window.Vue.createElementVNode, Kr = window.Vue.toDisplayString, Dp = window.Vue.createVNode, cr = window.Vue.openBlock, dr = window.Vue.createElementBlock, Ms = window.Vue.createCommentVNode, kc = window.Vue.createTextVNode, kI = window.Vue.renderList, xI = window.Vue.Fragment, AI = window.Vue.pushScopeId, BI = window.Vue.popScopeId, Kc = (e) => (AI("data-v-fb22b492"), e = e(), BI(), e), TI = { class: "content" }, DI = { class: "title-row" }, NI = { class: "title" }, LI = {
  key: 0,
  class: "accepted"
}, MI = {
  key: 1,
  class: "rejected"
}, OI = /* @__PURE__ */ Kc(() => /* @__PURE__ */ un("span", { class: "info-title" }, " Duration: ", -1)), PI = { key: 0 }, RI = /* @__PURE__ */ Kc(() => /* @__PURE__ */ un("span", { class: "info-title" }, " First Event: ", -1)), FI = { class: "description" }, UI = /* @__PURE__ */ Kc(() => /* @__PURE__ */ un("hr", null, null, -1)), WI = {
  key: 1,
  class: "count-info"
}, qI = /* @__PURE__ */ kc(" Alarms: "), HI = { class: "info-title" }, zI = /* @__PURE__ */ II({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Pe.ACCEPTED, a = Pe.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, w) => {
      var m, _, $;
      return cr(), dr("div", {
        onClick: c,
        class: Tp(["card", {
          rejected: r.situationInfo.status == $t(a)
        }])
      }, [
        un("div", {
          class: Tp(["severity-line", [`${(_ = (m = r.situationInfo) == null ? void 0 : m.severity) == null ? void 0 : _.toLowerCase()}-bg dark`]])
        }, null, 2),
        un("div", TI, [
          un("div", DI, [
            un("div", NI, "Situation " + Kr(($ = r.situationInfo) == null ? void 0 : $.id), 1),
            r.situationInfo.status == $t(s) ? (cr(), dr("div", LI, [
              Dp($t(G), {
                icon: $t(_o),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ms("", !0),
            r.situationInfo.status == $t(a) ? (cr(), dr("div", MI, [
              Dp($t(G), {
                icon: $t(Bm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ms("", !0)
          ]),
          un("div", null, [
            OI,
            kc(" " + Kr($t(Da)(
              $t(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Ms("", !0) : (cr(), dr("div", PI, [
            RI,
            kc(Kr($t(fn)(r.situationInfo.firstEventTime)), 1)
          ])),
          un("div", FI, Kr($t(Pm)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          UI,
          r.situationInfo.relatedAlarms ? (cr(), dr("div", WI, [
            qI,
            un("span", HI, Kr(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ms("", !0),
          (cr(!0), dr(xI, null, kI($t(we.exports.keys)(
            $t(we.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (cr(), dr("div", {
            class: "info-title",
            key: y
          }, " - " + Kr(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Rm = /* @__PURE__ */ ce(zI, [["__scopeId", "data-v-fb22b492"]]), YI = window.Vue.openBlock, GI = window.Vue.createElementBlock, jI = window.Vue.createElementVNode;
var ZI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KI = {}, JI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XI = /* @__PURE__ */ jI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), QI = [
  XI
];
function ek(e, o) {
  return YI(), GI("svg", JI, QI);
}
var tk = /* @__PURE__ */ ZI(KI, [["render", ek]]);
const nk = window.Vue.openBlock, rk = window.Vue.createElementBlock, Fm = window.Vue.createElementVNode;
var ok = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ik = {}, sk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ak = /* @__PURE__ */ Fm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), lk = /* @__PURE__ */ Fm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), uk = [
  ak,
  lk
];
function ck(e, o) {
  return nk(), rk("svg", sk, uk);
}
var dk = /* @__PURE__ */ ok(ik, [["render", ck]]);
const fk = window.Vue.openBlock, hk = window.Vue.createElementBlock, pk = window.Vue.createElementVNode;
var wk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const vk = {}, mk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, _k = /* @__PURE__ */ pk("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), gk = [
  _k
];
function $k(e, o) {
  return fk(), hk("svg", mk, gk);
}
var yk = /* @__PURE__ */ wk(vk, [["render", $k]]);
const Vk = window.Vue.openBlock, bk = window.Vue.createElementBlock, Ck = window.Vue.createElementVNode;
var Sk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ek = {}, Ik = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kk = /* @__PURE__ */ Ck("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), xk = [
  kk
];
function Ak(e, o) {
  return Vk(), bk("svg", Ik, xk);
}
var Um = /* @__PURE__ */ Sk(Ek, [["render", Ak]]);
const Bk = window.Vue.defineComponent, qn = window.Vue.unref, Os = window.Vue.normalizeClass, Ps = window.Vue.createVNode, Tk = window.Vue.openBlock, Dk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Nk = { class: "paginator" }, Lk = /* @__PURE__ */ Bk({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: o }) {
    const r = e, s = (a) => {
      a >= 0 && a <= r.totalPages - 1 && o("go-to-page", a);
    };
    return (a, u) => (Tk(), Dk("div", Nk, [
      Ps(qn(G), {
        icon: qn(tk),
        "aria-hidden": "true",
        class: Os(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Ps(qn(G), {
        icon: qn(yk),
        "aria-hidden": "true",
        class: Os(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Ps(qn(G), {
        icon: qn(Um),
        "aria-hidden": "true",
        class: Os(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Ps(qn(G), {
        icon: qn(dk),
        "aria-hidden": "true",
        class: Os(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Mk = /* @__PURE__ */ ce(Lk, [["__scopeId", "data-v-40758818"]]);
const se = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, Ok = window.Vue.computed, Na = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = Ok(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Ir = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, kr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Pk = Object.defineProperty, Rk = Object.defineProperties, Fk = Object.getOwnPropertyDescriptors, Np = Object.getOwnPropertySymbols, Uk = Object.prototype.hasOwnProperty, Wk = Object.prototype.propertyIsEnumerable, Lp = (e, o, r) => o in e ? Pk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Mp = (e, o) => {
  for (var r in o || (o = {}))
    Uk.call(o, r) && Lp(e, r, o[r]);
  if (Np)
    for (var r of Np(o))
      Wk.call(o, r) && Lp(e, r, o[r]);
  return e;
}, qk = (e, o) => Rk(e, Fk(o));
const Hk = window.Vue.defineComponent, zk = window.Vue.h;
var Yk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Gk = {
  center: {
    type: Boolean,
    default: !1
  }
}, jk = Hk({
  props: Gk,
  data() {
    return {
      pressed: !1,
      active: !1,
      styles: {},
      failsafe: -1
    };
  },
  computed: {
    parent() {
      return this.$el.parentNode;
    }
  },
  methods: {
    onClick(e) {
      this.pressed = !1, this.active = !1, requestAnimationFrame(() => {
        const { clientWidth: o, clientHeight: r } = this.parent, s = Math.round(Math.max(o, r));
        let a = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), c = e.pageY, f = e.pageX;
          a = {
            top: `${c - u.top - s / 2 - document.documentElement.scrollTop}px`,
            left: `${f - u.left - s / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = qk(Mp({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, kr(this.failsafe), this.failsafe = Ir(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return zk("div", {
        style: Mp({}, this.styles),
        class: ["ripple", { active: this.active, center: this.center }],
        onTransitionEnd: () => {
          this.pressed = !1, this.active = !1;
        },
        onTransitionCancel: () => {
          this.pressed = !1, this.active = !1;
        }
      });
  },
  mounted() {
    this.parent.addEventListener("click", this.onClick);
    const e = window.getComputedStyle(this.parent);
    this.parent.style.overflow = "hidden", !(e.position === "relative" || e.position === "absolute" || e.position === "fixed") && (this.parent.style.position = "relative");
  },
  unmounted() {
    this.parent.removeEventListener("click", this.onClick);
  }
});
var Jn = /* @__PURE__ */ Yk(jk, [["__scopeId", "data-v-18e2a5db"]]);
const Zk = window.Vue.openBlock, Kk = window.Vue.createElementBlock, Jk = window.Vue.createElementVNode;
var Xk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Qk = {}, ex = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tx = /* @__PURE__ */ Jk("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), nx = [
  tx
];
function rx(e, o) {
  return Zk(), Kk("svg", ex, nx);
}
var bo = /* @__PURE__ */ Xk(Qk, [["render", rx]]);
const Op = window.Vue.computed, ox = (e, o, r) => {
  const s = Op(() => o.value.filter((u) => !u.disabled)), a = Op(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const ix = window.Vue.openBlock, sx = window.Vue.createElementBlock, Jc = window.Vue.createElementVNode;
var ax = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lx = {}, ux = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cx = /* @__PURE__ */ Jc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), dx = /* @__PURE__ */ Jc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), fx = /* @__PURE__ */ Jc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), hx = [
  cx,
  dx,
  fx
];
function px(e, o) {
  return ix(), sx("svg", ux, hx);
}
var wx = /* @__PURE__ */ ax(lx, [["render", px]]), vx = Object.defineProperty, mx = Object.defineProperties, _x = Object.getOwnPropertyDescriptors, Pp = Object.getOwnPropertySymbols, gx = Object.prototype.hasOwnProperty, $x = Object.prototype.propertyIsEnumerable, Rp = (e, o, r) => o in e ? vx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Wm = (e, o) => {
  for (var r in o || (o = {}))
    gx.call(o, r) && Rp(e, r, o[r]);
  if (Pp)
    for (var r of Pp(o))
      $x.call(o, r) && Rp(e, r, o[r]);
  return e;
}, qm = (e, o) => mx(e, _x(o));
const Co = window.Vue.defineComponent, Di = window.Vue.resolveComponent, cn = window.Vue.openBlock, lo = window.Vue.createElementBlock, yx = window.Vue.createVNode, $a = window.Vue.createBlock, Vx = window.Vue.withModifiers, go = window.Vue.inject, Ni = window.Vue.computed, bx = window.Vue.normalizeClass, Jr = window.Vue.createElementVNode, ya = window.Vue.toDisplayString, ca = window.Vue.renderSlot, Ei = window.Vue.createCommentVNode, Cx = window.Vue.withDirectives, Sx = window.Vue.vShow, xc = window.Vue.ref, Fp = window.Vue.toRef, Up = window.Vue.nextTick, Ac = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Xc = window.Vue.provide, Wp = window.Vue.isRef, Ex = window.Vue.onBeforeUnmount;
var Pi = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ix = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, kx = Co({
  props: Ix,
  components: {
    FeatherIcon: G
  }
}), xx = ["title"];
function Ax(e, o, r, s, a, u) {
  const c = Di("FeatherIcon");
  return cn(), lo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    yx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, xx);
}
var Bx = /* @__PURE__ */ Pi(kx, [["render", Ax], ["__scopeId", "data-v-4265058e"]]);
const Tx = Co({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return bo;
    }
  },
  components: {
    ActionIcon: Bx
  }
});
function Dx(e, o, r, s, a, u) {
  const c = Di("ActionIcon");
  return cn(), $a(c, {
    onClick: o[0] || (o[0] = Vx((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Nx = /* @__PURE__ */ Pi(Tx, [["render", Dx]]);
const Lx = Co({
  computed: {
    errorIcon() {
      return wx;
    }
  },
  components: {
    FeatherIcon: G
  }
});
function Mx(e, o, r, s, a, u) {
  const c = Di("FeatherIcon");
  return cn(), $a(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Ox = /* @__PURE__ */ Pi(Lx, [["render", Mx], ["__scopeId", "data-v-0b8faef3"]]);
const Px = {
  for: {
    type: String,
    required: !0
  },
  focused: {
    type: Boolean,
    default: !1
  },
  showClear: {
    type: Boolean,
    default: !1
  },
  clearText: {
    type: String
  },
  raised: {
    type: Boolean,
    default: !1
  }
}, Rx = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, Fx = Co({
  emits: Rx,
  props: Px,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = go("wrapperOptions", {}), o = go("validationErrorMessage", !1), r = Ni(() => e.error ? e.error : o && o.value ? o.value : !1);
    return qm(Wm({}, e), { error: r });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((o) => o.children && o.children.length !== 0) !== -1;
    },
    containerCls() {
      const e = [];
      return this.hideLabel && e.push("hide-label"), this.raised && e.push("raised"), this.focused && e.push("focused"), this.error && e.push("error"), this.background && e.push("background"), this.disabled && e.push("disabled"), this.inline && e.push("inline"), this.hasPre && e.push("has-prefix"), e;
    }
  },
  methods: {
    handleWrapperClick(e) {
      this.disabled || this.$emit("wrapper-click", e);
    }
  },
  mounted() {
    const e = this.$el.querySelector(".prefix");
    if (e) {
      const o = { childList: !0, subtree: !0 }, r = () => {
        const s = this.$el.querySelector(".prefix");
        this.prefixWidth = s ? s.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(e, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: Nx,
    ErrorIcon: Ox
  }
}), Ux = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Wx = ["for"], qx = { class: "prefix" }, Hx = { class: "post" };
function zx(e, o, r, s, a, u) {
  const c = Di("ClearIcon"), f = Di("ErrorIcon");
  return cn(), lo("div", {
    class: bx(["feather-input-wrapper-container", e.containerCls])
  }, [
    Jr("fieldset", Ux, [
      Jr("legend", null, ya(e.label), 1)
    ]),
    Jr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, ya(e.label), 9, Wx),
    Jr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      Jr("div", qx, [
        ca(e.$slots, "pre", {}, void 0, !0)
      ]),
      ca(e.$slots, "default", {}, void 0, !0),
      Jr("div", Hx, [
        e.showClear && e.computedClearText ? (cn(), $a(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ei("", !0),
        e.error ? (cn(), $a(f, { key: 1 })) : Ei("", !0),
        ca(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var La = /* @__PURE__ */ Pi(Fx, [["render", zx], ["__scopeId", "data-v-4db296db"]]);
const Yx = Co({
  setup() {
    const e = go("subTextOptions", {}), o = go("validationErrorMessage", !1), r = Ni(() => e.error ? e.error : o && o.value ? o.value : "");
    return qm(Wm({}, e), { error: r });
  }
}), Gx = { class: "feather-input-sub-text" }, jx = {
  key: 0,
  class: "feather-input-spacer"
}, Zx = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, Kx = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function Jx(e, o, r, s, a, u) {
  return Cx((cn(), lo("div", Gx, [
    !e.hint && !e.error.length ? (cn(), lo("div", jx, "\xA0")) : Ei("", !0),
    e.hint && !e.error.length ? (cn(), lo("div", Zx, ya(e.hint), 1)) : Ei("", !0),
    e.error.length > 0 ? (cn(), lo("div", Kx, ya(e.error), 1)) : Ei("", !0),
    ca(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [Sx, !e.inline || e.hint || e.error.length]
  ]);
}
var So = /* @__PURE__ */ Pi(Yx, [["render", Jx], ["__scopeId", "data-v-8e0ac99e"]]);
const Xx = {
  headingText: {
    type: Function,
    default: (e) => e.length && e.length === 1 ? "1 error" : `${e.length} errors`
  },
  errorList: {
    type: Array,
    default: () => []
  },
  generalError: {
    type: String,
    default: ""
  }
};
Co({
  props: Xx,
  setup(e) {
    const o = go("featherFormErrors", xc([])), r = Fp(e, "errorList"), s = Ni(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = Fp(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = xc(), w = (_) => `${c(_.label)} - ${_.message}`, m = Ni(() => (s.value.length && Up(() => f.value.focus()), e.headingText(s.value)));
    return Ac(a, (_) => {
      _.length && Up(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: m,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const Eo = (e, o, r, s, a) => {
  const u = go("featherForm", !1);
  if (s && u && e.value) {
    const c = xc("");
    Xc("validationErrorMessage", c);
    const f = () => {
      if (a && Wp(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return s.validateSync(o.value), c.value = "", { success: !0 };
      } catch (_) {
        const $ = _;
        return c.value = $.errors[0], {
          success: !1,
          message: $.errors[0],
          inputId: e.value,
          label: r
        };
      }
    }, m = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && Wp(a) && Ac(a, () => {
      u.runValidation();
    }), Ac(e, (_, $) => {
      _ && u && u.register(_, m), $ && u && u.deregister($);
    }, { immediate: !0 }), Ex(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Io = (e) => ({
  inherittedAttrs: Ni(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), ko = {
  hint: {
    type: String
  },
  error: {
    type: String
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, xo = (e) => {
  Xc("subTextOptions", e);
}, Ma = {
  label: {
    type: String,
    required: !0
  },
  error: {
    type: String
  },
  clear: {
    type: String,
    default: ""
  },
  background: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  hideLabel: {
    type: Boolean,
    default: !1
  }
}, Oa = (e) => {
  Xc("wrapperOptions", e);
}, Rs = window.Vue.ref, Qx = window.Vue.watch, eA = window.Vue.watchEffect, qp = window.Vue.computed, Mu = window.Vue.provide, Hm = (e, o, r, s, a) => {
  const u = Rs([]), c = Rs(), f = Rs(), w = Rs();
  eA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((N) => N.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let N = u.value.filter((A) => !A.disabled);
      N = N.length ? N : u.value, f.value = N[0], f.value.first = !0;
    }
  }), Qx(c, (S, N) => {
    N && (N.checked = !1), S && (S.checked = !0);
  });
  const m = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = qp(() => c.value || f.value), $ = ox(_, u, m), y = qp(() => se("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = Eo(w, e, r, s, a);
  return Mu("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), Mu("select", m), Mu("blur", (S) => {
    o("blur", S);
  }), {
    keydown: (S) => {
      switch (S.keyCode) {
        case 13:
        case 32:
          c.value ? m(c.value) : f.value && m(f.value);
          break;
        case 40:
        case 39:
          $.selectNext();
          break;
        case 37:
        case 38:
          $.selectPrevious();
          break;
      }
    },
    ...$,
    focus: () => {
      c.value && c.value.focus();
    },
    validate: T,
    firstElementId: w,
    groupId: y
  };
};
var tA = Object.defineProperty, nA = Object.defineProperties, rA = Object.getOwnPropertyDescriptors, Hp = Object.getOwnPropertySymbols, oA = Object.prototype.hasOwnProperty, iA = Object.prototype.propertyIsEnumerable, zp = (e, o, r) => o in e ? tA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ho = (e, o) => {
  for (var r in o || (o = {}))
    oA.call(o, r) && zp(e, r, o[r]);
  if (Hp)
    for (var r of Hp(o))
      iA.call(o, r) && zp(e, r, o[r]);
  return e;
}, zm = (e, o) => nA(e, rA(o));
const Xn = window.Vue.defineComponent, Ii = window.Vue.inject, Va = window.Vue.computed, ki = window.Vue.ref, Rt = window.Vue.resolveComponent, bt = window.Vue.openBlock, Ri = window.Vue.createElementBlock, Ym = window.Vue.normalizeClass, hn = window.Vue.renderSlot, Zn = window.Vue.createBlock, Li = window.Vue.createCommentVNode, ba = window.Vue.createElementVNode, sA = window.Vue.withModifiers, Pa = window.Vue.createVNode, Gm = window.Vue.toRef, Bc = window.Vue.mergeProps, An = window.Vue.withCtx, aA = window.Vue.h, lA = window.Vue.provide;
var Qn = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  clickable: {
    type: Boolean,
    default: !1
  }
}, cA = Xn({
  props: uA,
  setup(e) {
    const o = Ii("isCondensed", null), r = Va(() => o || e.condensed), s = ki(!1);
    return {
      focused: s,
      handleFocus: () => {
        s.value = !0;
      },
      handleBlur: () => {
        s.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: Jn
  }
}), dA = ["aria-disabled"];
function fA(e, o, r, s, a, u) {
  const c = Rt("FeatherRipple");
  return bt(), Ri("div", {
    class: Ym(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    hn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (bt(), Zn(c, { key: 0 })) : Li("", !0)
  ], 42, dA);
}
var Ra = /* @__PURE__ */ Qn(cA, [["render", fA], ["__scopeId", "data-v-44d413dc"]]);
const hA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  textId: {
    type: String,
    required: !0
  },
  label: {
    type: String,
    required: !0
  }
}, pA = Xn({
  emits: ["delete"],
  props: hA,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: bo
    };
  },
  components: {
    FeatherIcon: G
  }
}), wA = { class: "chip-delete" }, vA = ["aria-label", "aria-describedby"];
function mA(e, o, r, s, a, u) {
  const c = Rt("FeatherIcon");
  return bt(), Ri("span", wA, [
    ba("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = sA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Pa(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, vA)
  ]);
}
var _A = /* @__PURE__ */ Qn(pA, [["render", mA], ["__scopeId", "data-v-4bae6cb4"]]);
const gA = Xn({
  data() {
    return {
      titleText: void 0
    };
  },
  methods: {
    ellipsisActive() {
      return this.$refs.container.offsetWidth < this.$refs.container.scrollWidth;
    },
    updateTitle() {
      this.titleText = this.ellipsisActive() ? this.$refs.container.textContent : void 0;
    }
  },
  mounted() {
    this.updateTitle();
  },
  beforeUpdate() {
    this.updateTitle();
  }
}), $A = ["title"];
function yA(e, o, r, s, a, u) {
  return bt(), Ri("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    hn(e.$slots, "default", {}, void 0, !0)
  ], 8, $A);
}
var Fa = /* @__PURE__ */ Qn(gA, [["render", yA], ["__scopeId", "data-v-1a0445b2"]]);
const VA = {}, bA = {
  class: "chip-icon",
  role: "presentation"
};
function CA(e, o) {
  return bt(), Ri("span", bA, [
    hn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ua = /* @__PURE__ */ Qn(VA, [["render", CA], ["__scopeId", "data-v-2230176f"]]);
const Yp = {
  delete: "Remove"
}, SA = Xn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Yp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Na(Gm(e, "labels"), Yp), s = Va(() => se("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = ho({}, o.attrs);
    return e.disabled && delete u.onClick, zm(ho({}, r), {
      chipTextId: s,
      handleClick: a,
      attrs: u
    });
  },
  computed: {
    chipTextAttrs() {
      return this.canClick ? {
        role: "button",
        tabindex: "0"
      } : {};
    },
    canDelete() {
      return !!this.$attrs.onDelete && !this.disabled;
    },
    canClick() {
      return !!this.$attrs.onClick && !this.disabled;
    },
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ra,
    DeleteIcon: _A,
    Label: Fa,
    PreIcon: Ua
  }
}), EA = ["aria-disabled"];
function IA(e, o, r, s, a, u) {
  const c = Rt("PreIcon"), f = Rt("Label"), w = Rt("DeleteIcon"), m = Rt("Chip");
  return bt(), Zn(m, Bc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: An(() => [
      ba("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        ba("span", Bc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (bt(), Zn(c, { key: 0 }, {
            default: An(() => [
              hn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Li("", !0),
          Pa(f, { id: e.chipTextId }, {
            default: An(() => [
              hn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, EA),
      e.canDelete ? (bt(), Zn(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Li("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var kA = /* @__PURE__ */ Qn(SA, [["render", IA], ["__scopeId", "data-v-48b2704a"]]);
const xA = Xn({
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ra,
    Label: Fa,
    PreIcon: Ua
  }
}), AA = ["aria-disabled"];
function BA(e, o, r, s, a, u) {
  const c = Rt("PreIcon"), f = Rt("Label"), w = Rt("Chip");
  return bt(), Zn(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: An(() => [
      ba("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (bt(), Zn(c, { key: 0 }, {
          default: An(() => [
            hn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Li("", !0),
        Pa(f, null, {
          default: An(() => [
            hn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, AA)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var TA = /* @__PURE__ */ Qn(xA, [["render", BA], ["__scopeId", "data-v-3e0c4eba"]]);
const DA = Xn({
  props: {
    value: {
      type: [String, Object, Number, Array],
      required: !0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const o = ki(!1), r = ki(!1), s = Va(() => se("chip-label-id")), a = Va(() => o.value || r.value ? 0 : -1), u = ki(), c = () => {
      u.value.$el.focus();
    }, f = Ii("register", (y) => {
    }), w = Ii("blur", (y) => {
    }), m = Ii("select", (y) => {
    }), _ = {
      first: o,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(_), {
      labelId: s,
      tabindex: a,
      first: o,
      blur: w,
      click: () => {
        m(_);
      },
      input: u,
      checked: r
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((o) => o.children && o.children.length !== 0 || typeof o.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ra,
    Label: Fa,
    PreIcon: Ua
  }
});
function NA(e, o, r, s, a, u) {
  const c = Rt("PreIcon"), f = Rt("Label"), w = Rt("Chip");
  return bt(), Zn(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: Ym(["focus hover", { selected: e.checked }]),
    role: "radio",
    ref: "input",
    "aria-checked": e.checked ? "true" : "false",
    "aria-disabled": e.disabled,
    "aria-labelledby": e.labelId,
    tabindex: e.tabindex,
    onClick: e.click,
    "allow-click": !e.disabled,
    onBlur: e.blur
  }, {
    default: An(() => [
      e.hasIcon ? (bt(), Zn(c, { key: 0 }, {
        default: An(() => [
          hn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Li("", !0),
      Pa(f, { id: e.labelId }, {
        default: An(() => [
          hn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var LA = /* @__PURE__ */ Qn(DA, [["render", NA], ["__scopeId", "data-v-bbcc2f70"]]);
const MA = {
  disabled: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object
  },
  condensed: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Object, Number, Array, Boolean]
  }
}, Gp = Xn({
  props: MA,
  setup() {
    return { format: Ii("chipListFormat", "") };
  },
  render() {
    const e = (o) => aA(o, ho(ho({}, this.$props), this.$attrs), ho({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(kA) : this.format === "radio" ? e(LA) : e(TA);
  }
}), OA = {
  label: {
    type: String,
    required: !0
  },
  mode: {
    type: String,
    default: "list",
    validator: (e) => ["list", "radio", "single"].indexOf(e) !== -1
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  condensed: {
    type: Boolean,
    default: !1
  }
}, PA = Xn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: OA,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    lA("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = Gm(e, "modelValue");
      return zm(ho({
        attrs: {
          role: "radiogroup"
        }
      }, Hm(c, o.emit, e.label, {}, ki(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), RA = ["aria-label"];
function FA(e, o, r, s, a, u) {
  return bt(), Ri("div", Bc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    hn(e.$slots, "default", {}, void 0, !0)
  ], 16, RA);
}
var UA = /* @__PURE__ */ Qn(PA, [["render", FA], ["__scopeId", "data-v-1e06f41d"]]);
const WA = window.Vue.defineComponent, qA = window.Vue.normalizeClass, HA = window.Vue.openBlock, zA = window.Vue.createElementBlock, YA = window.Vue.createCommentVNode, GA = /* @__PURE__ */ WA({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (HA(), zA("span", {
      key: 0,
      class: qA(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : YA("", !0);
  }
});
const jA = /* @__PURE__ */ ce(GA, [["__scopeId", "data-v-e08880d6"]]), ZA = window.Vue.defineComponent, si = window.Vue.unref, jm = window.Vue.createTextVNode, Ou = window.Vue.normalizeClass, Pu = window.Vue.withCtx, KA = window.Vue.createVNode, JA = window.Vue.renderList, XA = window.Vue.Fragment, Fs = window.Vue.openBlock, QA = window.Vue.createElementBlock, Ru = window.Vue.createBlock, jp = window.Vue.createCommentVNode, eB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const tB = /* @__PURE__ */ jm(" ALL "), Zp = window.Vue.ref, nB = window.Vue.watch, rB = window.Vue.computed, oB = window.Vue.reactive, iB = /* @__PURE__ */ ZA({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: o }) {
    var w;
    const r = e, s = Zp(!1), a = rB(() => we.exports.keys(we.exports.groupBy(r.alarms, r.property))), u = Zp(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = oB({
      alarms: r.alarms
    }), f = (m) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(m) ? u.value = u.value.filter((_) => _ !== m) : u.value.push(m), (m === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return nB(r, () => {
      var m;
      u.value = (m = r.preSelected) != null && m.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (m, _) => si(a).length > 0 ? (Fs(), Ru(si(UA), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Ou({ vertical: r.isVertical })
    }, {
      default: Pu(() => [
        KA(si(Gp), {
          class: Ou({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: Pu(() => [
            tB
          ]),
          _: 1
        }, 8, ["class"]),
        (Fs(!0), QA(XA, null, JA(si(a), ($) => (Fs(), Ru(si(Gp), {
          class: Ou([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: Pu(() => [
            e.property == "severity" ? (Fs(), Ru(jA, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : jp("", !0),
            jm(eB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : jp("", !0);
  }
});
const sB = /* @__PURE__ */ ce(iB, [["__scopeId", "data-v-d83b0f85"]]);
const aB = window.Vue.watch, lB = window.Vue.onBeforeUnmount, uB = window.Vue.ref, cB = window.Vue.onMounted, dB = (e) => {
  const o = uB(!1);
  let r = !1;
  const s = (c) => {
    e(c), r = !1;
  };
  function a(c) {
    r || (requestAnimationFrame(() => s(c)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", a);
  };
  return cB(() => {
    const c = aB(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    lB(() => {
      c(), u();
    });
  }), o;
}, fB = window.Vue.watch, hB = window.Vue.onBeforeUnmount, pB = window.Vue.ref, wB = window.Vue.onMounted, vB = (e, o) => {
  const r = pB(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((m) => m && m.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return wB(() => {
    const c = fB(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    hB(() => {
      c(), u();
    });
  }), r;
}, mB = window.Vue.watch, _B = window.Vue.onBeforeUnmount, gB = window.Vue.ref, Zm = (e, o) => {
  const r = gB(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = mB([e, r], ([w, m], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), m && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return _B(() => {
    f(), c();
  }), r;
}, $B = window.Vue.defineComponent, Cn = window.Vue.ref, Kp = window.Vue.toRef, yB = window.Vue.onMounted, VB = window.Vue.watch, Jp = window.Vue.computed, bB = window.Vue.nextTick, Xp = window.Vue.openBlock, Qp = window.Vue.createElementBlock, ew = window.Vue.renderSlot, CB = window.Vue.normalizeClass, SB = window.Vue.normalizeStyle, EB = window.Vue.createCommentVNode;
var IB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kB = {
  open: {
    type: Boolean,
    default: !1
  },
  noExpand: {
    type: Boolean,
    default: !1
  },
  cover: {
    type: Boolean,
    default: !1
  },
  right: {
    type: Boolean,
    default: !1
  },
  hasFocus: {
    type: Boolean,
    default: !1
  },
  dataRefId: {
    type: String,
    default: "feather-menu"
  },
  fill: {
    type: Boolean,
    default: !1
  },
  triggerId: {
    type: String
  }
}, xB = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, AB = $B({
  emits: xB,
  props: kB,
  setup(e, o) {
    const r = Cn(), s = Cn(), a = Kp(e, "open"), u = Kp(e, "noExpand"), c = Cn("auto"), f = Cn(), w = Cn(e.triggerId || se("feather-menu-trigger")), m = Cn(se("feather-menu-dropdown")), _ = Cn(""), $ = Cn("");
    yB(() => {
      f.value = window;
    });
    const y = Cn(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), B = () => {
      if (!s.value)
        return;
      const I = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", bB(() => {
        let { height: F, width: P } = s.value.getBoundingClientRect();
        const q = T(), ve = q.height, ae = q.width;
        e.fill && P < I.width ? (c.value = I.width + "px", P = I.width) : c.value = P + "px";
        let re = 0;
        ve - I.bottom < F && I.top >= F ? (re = I.top - F, e.cover && (re += I.height)) : (re = I.bottom, e.cover && (re -= I.height));
        let K = e.right ? I.right - P : I.left;
        !e.right && I.right >= P && ae - I.left < P && (K = I.right - P), e.right && I.right <= P && ae - I.left > P && (K = I.left), $.value = `${K}px`, _.value = `${re}px`, y.value = !1;
      });
    }, M = vB(r, (I) => {
      o.emit("outside-click", I);
    }), S = dB(B), N = Zm(f, B);
    VB([a, s], ([I, F]) => {
      I && F && B(), M.value = I, S.value = I, N.value = I;
    });
    const A = Jp(() => {
      const I = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = m.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), O = Jp(() => ({
      click: (I) => {
        o.emit("trigger-click", I);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: A,
      triggerListeners: O,
      menuId: m,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: B,
      calculating: y
    };
  }
}), BB = ["data-ref-id"], TB = ["data-ref-id", "id"];
function DB(e, o, r, s, a, u) {
  return Xp(), Qp("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    ew(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Xp(), Qp("div", {
      key: 0,
      class: CB(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: SB({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      ew(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, TB)) : EB("", !0)
  ], 8, BB);
}
var Km = /* @__PURE__ */ IB(AB, [["render", DB], ["__scopeId", "data-v-f75af406"]]), NB = {
  mounted(e, o) {
    e.addEventListener("keydown", o.dir.contentKeyPressed);
  },
  unmounted(e, o) {
    e.removeEventListener("keydown", o.dir.contentKeyPressed);
  },
  contentKeyPressed(e) {
    const o = e.currentTarget.querySelectorAll("li a");
    let r = [].indexOf.call(o, e.target);
    if (!(r < 0)) {
      switch (e.keyCode) {
        case 40:
          r++, r === o.length && (r = 0);
          break;
        case 38:
          r--, r === -1 && (r = o.length - 1);
          break;
        default:
          return;
      }
      e.preventDefault(), o[r].focus();
    }
  }
};
const LB = window.Vue.openBlock, MB = window.Vue.createElementBlock, OB = window.Vue.createElementVNode;
var PB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RB = {}, FB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UB = /* @__PURE__ */ OB("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), WB = [
  UB
];
function qB(e, o) {
  return LB(), MB("svg", FB, WB);
}
var HB = /* @__PURE__ */ PB(RB, [["render", qB]]);
const zB = window.Vue.openBlock, YB = window.Vue.createElementBlock, Qc = window.Vue.createElementVNode;
var GB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const jB = {}, ZB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KB = /* @__PURE__ */ Qc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), JB = /* @__PURE__ */ Qc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), XB = /* @__PURE__ */ Qc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), QB = [
  KB,
  JB,
  XB
];
function eT(e, o) {
  return zB(), YB("svg", ZB, QB);
}
var tT = /* @__PURE__ */ GB(jB, [["render", eT]]);
const nT = window.Vue.openBlock, rT = window.Vue.createElementBlock, oT = window.Vue.createElementVNode;
var iT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sT = {}, aT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lT = /* @__PURE__ */ oT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), uT = [
  lT
];
function cT(e, o) {
  return nT(), rT("svg", aT, uT);
}
var Wa = /* @__PURE__ */ iT(sT, [["render", cT]]);
const Mi = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
};
const Q = {
  PAGEUP: 33,
  PAGEDOWN: 34,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  HOME: 36,
  END: 35,
  ENTER: 13,
  SPACE: 32,
  ESCAPE: 27,
  BACKSPACE: 8,
  DELETE: 46
};
const dT = window.Vue.defineComponent, fT = window.Vue.openBlock, hT = window.Vue.createElementBlock, pT = window.Vue.normalizeClass, wT = window.Vue.pushScopeId, vT = window.Vue.popScopeId, Tc = window.Vue.createElementVNode;
var mT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _T = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, gT = {
  click: (e) => !0
}, $T = dT({
  emits: gT,
  props: _T,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Jm = (e) => (wT("data-v-07e020f5"), e = e(), vT(), e), yT = /* @__PURE__ */ Jm(() => /* @__PURE__ */ Tc("div", { class: "track" }, null, -1)), VT = /* @__PURE__ */ Jm(() => /* @__PURE__ */ Tc("div", { class: "switcher" }, [
  /* @__PURE__ */ Tc("div", { class: "switch-circle" })
], -1)), bT = [
  yT,
  VT
];
function CT(e, o, r, s, a, u) {
  return fT(), hT("div", {
    class: pT(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, bT, 2);
}
var ST = /* @__PURE__ */ mT($T, [["render", CT], ["__scopeId", "data-v-07e020f5"]]), ET = Object.defineProperty, IT = Object.defineProperties, kT = Object.getOwnPropertyDescriptors, tw = Object.getOwnPropertySymbols, xT = Object.prototype.hasOwnProperty, AT = Object.prototype.propertyIsEnumerable, nw = (e, o, r) => o in e ? ET(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, rw = (e, o) => {
  for (var r in o || (o = {}))
    xT.call(o, r) && nw(e, r, o[r]);
  if (tw)
    for (var r of tw(o))
      AT.call(o, r) && nw(e, r, o[r]);
  return e;
}, ow = (e, o) => IT(e, kT(o));
const ed = window.Vue.defineComponent, fr = window.Vue.h, BT = window.Vue.openBlock, TT = window.Vue.createElementBlock, DT = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Xm = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const NT = {
  asLi: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  selected: {
    type: Boolean,
    default: !1
  },
  highlighted: {
    type: Boolean,
    default: !1
  }
}, LT = ed({
  inheritAttrs: !1,
  props: NT,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = fr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = fr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = fr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : fr(Jn);
    if (this.asLi)
      return fr("li", ow(rw({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, r, s, a]);
    const u = fr("a", ow(rw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return fr("li", {}, [u]);
  }
});
var Fi = /* @__PURE__ */ Xm(LT, [["__scopeId", "data-v-7c46b2b3"]]);
ed({
  components: {
    FeatherListItem: Fi
  }
});
const MT = {}, OT = { class: "feather-list" };
function PT(e, o) {
  return BT(), TT("ul", OT, [
    DT(e.$slots, "default", {}, void 0, !0)
  ]);
}
var td = /* @__PURE__ */ Xm(MT, [["render", PT], ["__scopeId", "data-v-941a1d50"]]);
const RT = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, FT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
ed({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: RT,
  props: FT,
  computed: {
    labelId() {
      return se("switch-label");
    }
  },
  methods: {
    focus() {
      this.$refs.input.$el.focus();
    },
    updateValue() {
      this.disabled || this.$emit("update:modelValue", !this.modelValue);
    },
    click(e) {
      this.focus(), this.updateValue(), this.$emit("click", e);
    },
    keydown(e) {
      (e.keyCode === Q.SPACE || e.keyCode === Q.ENTER) && this.updateValue(), e.keyCode === Q.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: ST, FeatherListItem: Fi }
});
var UT = Object.defineProperty, WT = Object.defineProperties, qT = Object.getOwnPropertyDescriptors, iw = Object.getOwnPropertySymbols, HT = Object.prototype.hasOwnProperty, zT = Object.prototype.propertyIsEnumerable, sw = (e, o, r) => o in e ? UT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ct = (e, o) => {
  for (var r in o || (o = {}))
    HT.call(o, r) && sw(e, r, o[r]);
  if (iw)
    for (var r of iw(o))
      zT.call(o, r) && sw(e, r, o[r]);
  return e;
}, YT = (e, o) => WT(e, qT(o));
const Ao = window.Vue.defineComponent, ue = window.Vue.openBlock, Ne = window.Vue.createElementBlock, ct = window.Vue.createElementVNode, Xt = window.Vue.toDisplayString, Pt = window.Vue.createCommentVNode, Be = window.Vue.resolveComponent, Ot = window.Vue.createBlock, Ke = window.Vue.withCtx, po = window.Vue.Fragment, xi = window.Vue.renderList, dt = window.Vue.createVNode, nd = window.Vue.withModifiers, Er = window.Vue.normalizeClass, Dc = window.Vue.renderSlot, Qm = window.Vue.createTextVNode, GT = window.Vue.pushScopeId, jT = window.Vue.popScopeId, e_ = window.Vue.reactive, t_ = window.Vue.nextTick, Fu = window.Vue.markRaw, Uu = window.Vue.toRef, aw = window.Vue.computed, ZT = window.Vue.toRefs, Xr = window.Vue.ref, Wu = window.Vue.mergeProps, lw = window.Vue.toHandlers, Us = window.Vue.withDirectives, Ws = window.Vue.vShow;
var qa = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, rd = {
  query: {
    type: String
  }
}, Ar = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KT = Ao({
  mixins: [],
  props: Ct(Ct({
    text: {
      type: String,
      required: !0
    }
  }, qa), rd),
  computed: {
    index() {
      if (this.query && this.query.length === 0)
        return -1;
      if (this.query && this.highlight)
        switch (this.highlight.toLowerCase()) {
          case "ignore-case":
            return this.text.toLowerCase().indexOf(this.query.toLowerCase());
          default:
            return -1;
        }
      return -1;
    },
    beginning() {
      return this.index === -1 ? this.text : this.text.slice(0, this.index);
    },
    highlighted() {
      if (!(this.index === -1 || !this.query))
        return this.text.slice(this.index, this.index + this.query.length);
    },
    end() {
      if (!(this.index === -1 || !this.query))
        return this.text.slice(this.index + this.query.length);
    }
  }
}), JT = {
  key: 0,
  class: "highlight"
}, XT = { key: 1 };
function QT(e, o, r, s, a, u) {
  return ue(), Ne("span", null, [
    ct("span", null, Xt(e.beginning), 1),
    e.highlighted ? (ue(), Ne("span", JT, Xt(e.highlighted), 1)) : Pt("", !0),
    e.end ? (ue(), Ne("span", XT, Xt(e.end), 1)) : Pt("", !0)
  ]);
}
var n_ = /* @__PURE__ */ Ar(KT, [["render", QT], ["__scopeId", "data-v-8abe2492"]]);
const eD = Ao({
  emits: ["select", "deselect"],
  props: Ct(Ct({
    activeId: {
      type: String,
      required: !0
    },
    activeIndex: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    newLabel: {
      type: String,
      default: "new"
    }
  }, qa), rd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        Mi(o, r.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const o = this.value;
      return o && o.length ? o.some((s) => s[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeIndex === e;
    },
    getId(e) {
      return e === this.activeIndex ? this.activeId : null;
    },
    select(e) {
      this.$emit(this.isSelected(e) ? "deselect" : "select", e);
    }
  },
  components: {
    FeatherList: td,
    FeatherListItem: Fi,
    Highlighter: n_
  }
}), tD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function nD(e, o, r, s, a, u) {
  const c = Be("Highlighter"), f = Be("FeatherListItem"), w = Be("FeatherList");
  return ue(), Ot(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ke(() => [
      (ue(!0), Ne(po, null, xi(e.items, (m, _) => (ue(), Ne(po, {
        key: m[e.textProp]
      }, [
        dt(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(m),
          highlighted: e.isActive(_),
          selected: e.isSelected(m),
          onClick: nd(($) => e.select(m), ["stop"])
        }, {
          default: Ke(() => [
            dt(c, {
              highlight: e.highlight,
              query: e.query,
              text: m[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            m._new ? (ue(), Ne("span", tD, Xt(e.newLabel), 1)) : Pt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && m._new ? (ue(), Ne("li", {
          role: "presentation",
          key: m[e.textProp] + "hr",
          class: "hr"
        })) : Pt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var rD = /* @__PURE__ */ Ar(eD, [["render", nD], ["__scopeId", "data-v-f623434a"]]);
const oD = Ao({
  emits: ["select"],
  props: Ct(Ct({
    activeId: {
      type: String,
      required: !0
    },
    activeRow: {
      type: Number,
      required: !0
    },
    activeCol: {
      type: Number,
      required: !0
    },
    items: {
      type: Array,
      required: !0
    },
    value: {
      type: [Array, Object],
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    single: {
      type: Boolean,
      default: !1
    },
    config: {
      type: Array,
      required: !0
    }
  }, qa), rd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        Mi(o, r);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((e, o) => e.align && e.align.toLowerCase() === "right" ? `tr${o + 1}` : e.align && e.align.toLowerCase() === "center" ? `tc${o + 1}` : `tl${o + 1}`);
    }
  },
  methods: {
    isSelected(e) {
      const o = this.value;
      return this.value && this.value.length ? o.some((s) => s[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeRow === e;
    },
    isActiveCell(e, o) {
      return this.activeRow === e && this.activeCol === o;
    },
    getId(e, o) {
      return e === this.activeRow && this.activeCol === o ? this.activeId : "";
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    Highlighter: n_
  }
}), iD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, sD = ["aria-multiselectable"], aD = { role: "row" }, lD = ["aria-selected", "onClick"], uD = ["id", "aria-selected"], cD = { key: 1 };
function dD(e, o, r, s, a, u) {
  const c = Be("Highlighter");
  return ue(), Ne("div", iD, [
    ct("table", {
      class: Er(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      ct("thead", null, [
        ct("tr", aD, [
          (ue(!0), Ne(po, null, xi(e.config, (f) => (ue(), Ne("th", {
            key: f.title
          }, Xt(f.title), 1))), 128))
        ])
      ]),
      ct("tbody", null, [
        (ue(!0), Ne(po, null, xi(e.items, (f, w) => (ue(), Ne("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Er({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: nd((m) => e.select(f), ["stop"])
        }, [
          (ue(!0), Ne(po, null, xi(e.config, (m, _) => (ue(), Ne("td", {
            key: f[e.textProp] + m.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Er({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            m.prop === e.textProp ? (ue(), Ot(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[m.prop]
            }, null, 8, ["highlight", "query", "text"])) : (ue(), Ne("p", cD, Xt(f[m.prop]), 1))
          ], 10, uD))), 128))
        ], 10, lD))), 128))
      ])
    ], 10, sD)
  ], 512);
}
var fD = /* @__PURE__ */ Ar(oD, [["render", dD], ["__scopeId", "data-v-58c88fd1"]]);
const hD = Ao({
  components: {
    FeatherList: td,
    FeatherListItem: Fi
  }
});
function pD(e, o, r, s, a, u) {
  const c = Be("FeatherListItem"), f = Be("FeatherList");
  return ue(), Ot(f, { class: "result-list" }, {
    default: Ke(() => [
      dt(c, { "as-li": "" }, {
        default: Ke(() => [
          Dc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var wD = /* @__PURE__ */ Ar(hD, [["render", pD], ["__scopeId", "data-v-06b752c6"]]);
const vD = Ao({
  name: "Chip",
  emits: ["delete"],
  props: {
    focused: {
      type: Boolean,
      default: !1
    },
    removeLabel: {
      type: String,
      required: !0
    },
    text: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    pre: {
      type: Object
    }
  },
  computed: {
    showPreIcon() {
      return this.pre && this.pre.icon && this.pre.title;
    }
  },
  methods: {
    handleClick() {
      this.$emit("delete");
    }
  },
  components: {
    FeatherIcon: G,
    Cancel: bo,
    BaseChip: Ra,
    BaseChipLabel: Fa,
    BaseChipPreIcon: Ua
  }
});
function mD(e, o, r, s, a, u) {
  const c = Be("FeatherIcon"), f = Be("BaseChipPreIcon"), w = Be("BaseChipLabel"), m = Be("Cancel"), _ = Be("BaseChip");
  return ue(), Ot(_, {
    class: Er(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Ke(() => [
      e.showPreIcon ? (ue(), Ot(f, { key: 0 }, {
        default: Ke(() => {
          var $, y;
          return [
            dt(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Pt("", !0),
      dt(w, null, {
        default: Ke(() => [
          Qm(Xt(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Pt("", !0) : (ue(), Ne("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = nd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        dt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Ke(() => [
            dt(m)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var _D = /* @__PURE__ */ Ar(vD, [["render", mD], ["__scopeId", "data-v-e0fc6ac0"]]);
const gD = {}, $D = (e) => (GT("data-v-aa720e06"), e = e(), jT(), e), yD = { class: "spinner-container" }, VD = /* @__PURE__ */ $D(() => /* @__PURE__ */ ct("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ ct("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), bD = [
  VD
];
function CD(e, o) {
  return ue(), Ne("div", yD, bD);
}
var SD = /* @__PURE__ */ Ar(gD, [["render", CD], ["__scopeId", "data-v-aa720e06"]]), Ha = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Ha || {});
const r_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, ED = Ct(Ct(Ct({
  id: {
    type: String
  },
  modelValue: {
    type: [Array, Object]
  },
  results: {
    type: Array,
    default: () => []
  },
  textProp: {
    type: String,
    default: "_text"
  },
  loading: {
    type: Boolean,
    default: !1
  },
  minChar: {
    type: Number,
    default: 0
  },
  allowNew: {
    type: Boolean,
    default: !1
  },
  selectionLimit: {
    type: Number
  },
  newMatcher: {
    type: Function,
    default: (e, o, r) => e[r.textProp].toString().toLowerCase() === o.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (e) => !!Ha[e]
  },
  labels: {
    type: Object,
    default: () => r_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, qa), ko), Ma), ID = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, kD = (e, o, r, s) => {
  if (r.toLowerCase() === Ha.multi) {
    const u = e.modelValue, c = (f) => {
      e.selectionLimit.value && f.length >= e.selectionLimit.value ? e.selectionLimitReached.value = !0 : e.selectionLimitReached.value = !1;
    };
    return {
      getInitialText() {
        return "";
      },
      handleModelValueChange(f) {
        f && f.length && c(f);
      },
      hasValue() {
        return !!(u.value && u.value.length);
      },
      selectItem(f) {
        if (u.value && u.value.filter((m) => m[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const w = u.value ? [...u.value, f] : [f];
        s("update:modelValue", w), c(w);
      },
      removeItem(f) {
        const w = u.value.findIndex((m) => {
          if (f[e.textProp.value] === m[e.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const m = u.value.slice(0);
          m.splice(w, 1), s("update:modelValue", m), c(m), e.input.value.focus();
        }
      },
      clickedItem() {
        e.query.value = "", e.emitSearch();
      },
      handleInputBlur() {
      }
    };
  }
  const a = e.modelValue;
  return {
    getInitialText() {
      return a.value ? a.value[e.textProp.value] : "";
    },
    handleModelValueChange() {
      e.query.value = this.getInitialText();
    },
    hasValue() {
      return !!a.value;
    },
    selectItem(u) {
      o.active.row = -1, e.forceCloseResults.value = !0, u && u._new && e.allowNew ? s("new", u._new) : s("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const u = e.internalResults.value[o.active.row];
        u && u._new && e.allowNew ? s("new", u._new) : s("update:modelValue", u);
      }
    }
  };
}, xD = () => {
  const e = e_({
    row: -1
  }), o = (u) => {
    t_(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === Q.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === Q.UP) {
      if (u.preventDefault(), e.row === 0)
        s();
      else if (e.row > 0) {
        const f = e.row;
        s(), o(f - 1);
      }
      return !0;
    }
    return !1;
  }, s = () => {
    e.row = -1;
  };
  return { reset: s, handleKeyPress: r, active: e, first: () => {
    e.row = 0;
  } };
}, AD = (e) => {
  const o = e_({
    row: -1,
    col: -1
  }), r = (c, f) => {
    t_(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === Q.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const w = o.row, m = o.col;
        a(), r(w + 1, m);
      }
      return !0;
    }
    if (c.keyCode === Q.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, m = o.col;
        a(), r(w - 1, m);
      }
      return !0;
    }
    if (c.keyCode === Q.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const w = o.col, m = o.row;
        a(), r(m, w + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const w = o.row;
        a(), r(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === Q.LEFT && o.row !== -1) {
      if (c.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        a(), r(w - 1, e.length - 1);
      } else if (o.col > 0) {
        const w = o.col, m = o.row;
        a(), r(m, w - 1);
      }
      return !0;
    }
    if (c.keyCode === Q.END && o.row !== -1) {
      c.preventDefault();
      const w = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === Q.HOME && o.row !== -1) {
      c.preventDefault();
      const w = o.row;
      return a(), r(c.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, a = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: a, handleKeyPress: s, active: o, first: () => {
    a(), r(0, 0);
  } };
}, BD = Ao({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: ID,
  props: ED,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Ha.multi;
    },
    raised() {
      return this.hasValue || this.hasFocus;
    },
    hasValue() {
      var e;
      return (e = this.strategy) == null ? void 0 : e.hasValue();
    },
    showMenu() {
      return (this.showResults || this.showNoResults || this.showLoading || this.showSelectionLimit || this.showMinCharWarning) && !this.disabled;
    },
    showResults() {
      return this.forceCloseResults || this.selectionLimitReached || this.showMinCharWarning ? !1 : !!(this.hasFocus && this.internalResults && this.internalResults.length && !this.loading);
    },
    showNoResults() {
      return !this.forceCloseResults && this.hasFocus && !this.selectionLimitReached && this.internalResults && this.internalResults.length === 0 && this.query && this.query.length > 0 && this.query.length >= this.minChar && !this.loading;
    },
    showSelectionLimit() {
      return !this.forceCloseResults && this.hasFocus && this.selectionLimitReached && !this.loading;
    },
    showLoading() {
      return this.hasFocus && this.loading;
    },
    showMinCharWarning() {
      return this.minChar > 0 && !this.selectionLimitReached && !this.loading && this.hasFocus && this.query.length < this.minChar;
    },
    resultItemId() {
      return se("result-item");
    },
    minCharWarningId() {
      return se("min-char-warning");
    },
    subTextId() {
      return se("feather-autocomplete-description");
    },
    resultsId() {
      return se("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return se("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Fu(HB);
    },
    minCharIcon() {
      return Fu(tT);
    },
    dropdownIcon() {
      return Fu(Wa);
    },
    inputAttrs() {
      const e = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let o = "";
      return this.activeChipIndex > -1 && (o = this.activeChipId), this.active.row > -1 && this.showResults && (o = this.resultItemId), this.minChar && e.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": e.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": o,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-autocomplete": "list",
        autocomplete: "off",
        readonly: !!this.disabled,
        tabindex: this.disabled ? -1 : 0,
        "aria-controls": this.showResults ? this.resultsId : "",
        "aria-invalid": this.$attrs["aria-invalid"] === "true" || !!this.error
      };
    },
    inputListeners() {
      return {
        input: this.handleTextInput,
        blur: this.handleInputBlur,
        focus: this.handleInputFocus,
        click: this.handleInputEnter,
        keydown: this.handleInputKeyDown
      };
    },
    comboxBoxAttrs() {
      return {
        role: "combobox",
        "aria-expanded": this.showResults ? "true" : "false",
        "aria-haspopup": this.gridConfig ? "grid" : "listbox",
        "aria-owns": this.resultsId,
        "aria-label": this.label
      };
    },
    scrollContainer() {
      return this.$refs.scroll.$el.querySelector(".feather-input-wrapper");
    },
    computedMinCharText() {
      return this.minCharLabel ? this.minCharLabel.replace("${min}", this.minChar.toString()) : "";
    },
    selectedDescribedByText() {
      return this.modelValue && this.modelValue.length ? this.modelValue.map((o) => o[this.textProp]).join(", ") : "";
    },
    allowNewEnabled() {
      return this.singleSelect && this.allowNew;
    },
    modelValueList() {
      return this.singleSelect ? [] : this.modelValue;
    }
  },
  watch: {
    activeChipIndex(e) {
      e && this.genActiveChipId(), e > -1 && this.scrollContainer && this.$nextTick(() => {
        Mi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Mi(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(e), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(e) {
      e && e.length > 0 && this.selectFirst(), this.forceCloseResults = !1, e && e.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (e.some((r) => this.newMatcher(r, this.query, this)) || (e = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...e
      ])), this.internalResults = e;
    },
    showResults(e) {
      const o = this.$refs.menu;
      e && o.calculatePosition && o.calculatePosition();
    },
    selectionLimitReached(e) {
      e && this.setAlert(this.selectionLimitLabel);
    }
  },
  methods: {
    getPre(e) {
      return e._pre;
    },
    genActiveChipId() {
      return this.activeChipId = se("active-chip"), this.activeChipId;
    },
    setAlert(e) {
      const o = this.$refs.alert;
      o.textContent = e, setTimeout(() => {
        o.textContent = "";
      }, 100);
    },
    handleClear() {
      this.query = "", this.inputRef.focus(), this.emitSearch(), this.$emit("update:modelValue", void 0);
    },
    handleInputFocus() {
      this.disabled || (this.adjustTextArea(), !this.hasFocus && (this.hasFocus = !0, this.modelValue && this.singleSelect && this.inputRef.select()));
    },
    handleInputEnter() {
      this.handleInputFocus(), this.emitSearch();
    },
    handleTextInput(e) {
      this.adjustTextArea();
      const r = e.target.value;
      r !== void 0 && (kr(this.typingTimeout), this.typingTimeout = Ir(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === Q.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === Q.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === Q.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === Q.ENTER || e.keyCode === Q.SPACE || e.keyCode === Q.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === Q.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === Q.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === Q.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === Q.DELETE || e.keyCode === Q.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
      }
    },
    handleTriggerClick() {
      this.disabled || (this.inputRef.focus(), this.handleDropdownIconClick());
    },
    handleInputBlur() {
      this.validate(), this.strategy.handleInputBlur(), (this.forceCloseResults || !this.showMenu) && this.handleOutsideClick();
    },
    handleOutsideClick() {
      this.hasFocus = !1, this.forceCloseResults = !1, this.activeChipIndex = -1, this.resetResultIndex(), this.query = this.strategy.getInitialText(), this.internalResults = [], this.adjustTextArea();
    },
    clickedItem(e) {
      this.selectItem(e), this.internalResults = [], this.inputRef.focus(), this.strategy.clickedItem();
    },
    selectItem(e) {
      this.strategy.selectItem(e), this.adjustTextArea();
    },
    removeFromValue(e) {
      this.strategy.removeItem(e);
    },
    handleDropdownIconClick() {
      if (this.showMenu) {
        this.forceCloseResults = !0;
        return;
      }
      this.forceCloseResults || this.emitSearch();
    },
    adjustTextArea() {
      const e = this.inputRef;
      !e || (e.style.height = "1.625rem", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = e.getBoundingClientRect().width, r = e.parentElement;
        e.scrollWidth <= e.clientWidth && r && o < r.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, o) {
    const r = Na(Uu(e, "labels"), r_);
    xo(e), Oa(e);
    let s;
    e.gridConfig ? s = AD(e.gridConfig) : s = xD();
    const a = Uu(e, "id"), u = aw(() => a.value ? a.value : se("feather-autocomplete-input")), { validate: c } = Eo(u, Uu(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: m, allowNew: _, type: $, minChar: y } = ZT(e), T = Xr(!1), B = Xr(!1), L = Xr(!1), M = Xr(""), S = Xr([]), N = Xr(), A = aw(() => N.value), O = () => {
      T.value && !B.value && (M.value && M.value.length >= y.value && o.emit("search", M.value), y.value <= 0 && o.emit("search", M.value || ""), S.value = [], s.reset());
    }, I = kD({
      selectionLimit: f,
      selectionLimitReached: B,
      modelValue: w,
      textProp: m,
      allowNew: _,
      forceCloseResults: L,
      query: M,
      internalResults: S,
      input: A,
      emitSearch: O
    }, s, $.value, o.emit);
    return YT(Ct(Ct({}, r), Io(o.attrs)), {
      query: M,
      internalResults: S,
      selectionLimitReached: B,
      forceCloseResults: L,
      hasFocus: T,
      strategy: I,
      emitSearch: O,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: N,
      incomingId: a,
      inputRef: A,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: La,
    InputSubText: So,
    AutocompleteResults: rD,
    AutocompleteResultsGrid: fD,
    Chip: _D,
    MenuMessage: wD,
    FeatherIcon: G,
    FeatherMenu: Km,
    Spinner: SD
  }
}), TD = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, DD = ["id"], ND = { "data-ref-id": "feather-autocomplete-no-results" }, LD = { "data-ref-id": "feather-autocomplete-selection-limit" }, MD = { "data-ref-id": "feather-autocomplete-min-char" };
function OD(e, o, r, s, a, u) {
  const c = Be("FeatherIcon"), f = Be("Chip"), w = Be("InputWrapper"), m = Be("AutocompleteResults"), _ = Be("AutocompleteResultsGrid"), $ = Be("MenuMessage"), y = Be("Spinner"), T = Be("FeatherMenu"), B = Be("InputSubText");
  return ue(), Ne("div", Wu(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    dt(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Er(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ke(({ attrs: L, on: M }) => [
        dt(w, Wu(Ct(Ct({}, L), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, lw(M), { ref: "scroll" }), {
          pre: Ke(() => [
            Dc(e.$slots, "pre", {}, () => [
              dt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ke(() => [
            dt(c, {
              icon: e.dropdownIcon,
              class: Er(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ke(() => [
            ct("div", {
              class: Er(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              ct("div", TD, null, 512),
              ct("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Xt(e.selectedDescribedByText), 9, DD),
              (ue(!0), Ne(po, null, xi(e.modelValueList, (S, N) => Us((ue(), Ot(f, {
                key: S[e.textProp],
                role: "button",
                id: N === e.activeChipIndex ? e.activeChipId : null,
                focused: N === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (A) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Ws, !e.singleSelect]
              ])), 128)),
              ct("textarea", Wu(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, lw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ke(() => [
        e.gridConfig ? Pt("", !0) : Us((ue(), Ot(m, {
          key: 0,
          items: e.internalResults,
          value: e.modelValue,
          "text-prop": e.textProp,
          activeId: e.resultItemId,
          activeIndex: e.active.row,
          "aria-label": e.label,
          onSelect: e.clickedItem,
          onDeselect: e.removeFromValue,
          class: "autocomplete-results",
          id: e.resultsId,
          single: e.singleSelect,
          "new-label": e.newLabel,
          highlight: e.highlight,
          query: e.query,
          ref: "results"
        }, null, 8, ["items", "value", "text-prop", "activeId", "activeIndex", "aria-label", "onSelect", "onDeselect", "id", "single", "new-label", "highlight", "query"])), [
          [Ws, e.showResults]
        ]),
        e.gridConfig ? Us((ue(), Ot(_, {
          key: 1,
          items: e.internalResults,
          value: e.modelValue,
          "text-prop": e.textProp,
          config: e.gridConfig,
          activeId: e.resultItemId,
          activeRow: e.active.row,
          activeCol: e.active.col,
          "aria-label": e.label,
          onSelect: e.clickedItem,
          class: "autocomplete-results",
          id: e.resultsId,
          single: e.singleSelect,
          highlight: e.highlight,
          query: e.query
        }, null, 8, ["items", "value", "text-prop", "config", "activeId", "activeRow", "activeCol", "aria-label", "onSelect", "id", "single", "highlight", "query"])), [
          [Ws, e.showResults]
        ]) : Pt("", !0),
        e.showNoResults ? (ue(), Ot($, { key: 2 }, {
          default: Ke(() => [
            ct("span", ND, Xt(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Pt("", !0),
        e.showSelectionLimit ? (ue(), Ot($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ke(() => [
            dt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", LD, Xt(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Pt("", !0),
        e.minChar ? Us((ue(), Ot($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Ke(() => [
            dt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            ct("span", MD, [
              Dc(e.$slots, "min-char", {}, () => [
                Qm(Xt(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Ws, e.showMinCharWarning]
        ]) : Pt("", !0),
        e.showLoading ? (ue(), Ot(y, { key: 5 })) : Pt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    dt(B, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var PD = /* @__PURE__ */ Ar(BD, [["render", OD], ["__scopeId", "data-v-43a7e951"]]);
var RD = Object.defineProperty, FD = Object.defineProperties, UD = Object.getOwnPropertyDescriptors, uw = Object.getOwnPropertySymbols, WD = Object.prototype.hasOwnProperty, qD = Object.prototype.propertyIsEnumerable, cw = (e, o, r) => o in e ? RD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, da = (e, o) => {
  for (var r in o || (o = {}))
    WD.call(o, r) && cw(e, r, o[r]);
  if (uw)
    for (var r of uw(o))
      qD.call(o, r) && cw(e, r, o[r]);
  return e;
}, o_ = (e, o) => FD(e, UD(o));
const i_ = window.Vue.defineComponent, HD = window.Vue.ref, Ai = window.Vue.computed, zD = window.Vue.reactive, dw = window.Vue.watch, qu = window.Vue.inject, s_ = window.Vue.resolveComponent, Nc = window.Vue.openBlock, a_ = window.Vue.createElementBlock, Kn = window.Vue.createElementVNode, YD = window.Vue.createBlock, GD = window.Vue.createCommentVNode, l_ = window.Vue.renderSlot, jD = window.Vue.pushScopeId, ZD = window.Vue.popScopeId, Hu = window.Vue.toRef, fw = window.Vue.mergeProps, KD = window.Vue.toDisplayString, JD = window.Vue.createVNode;
var u_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XD = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, QD = i_({
  props: XD,
  setup(e) {
    const o = HD(), r = () => {
      o.value.focus();
    }, s = Ai(() => se("feather-radio-button")), a = zD({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Ai(() => se("radio-label-id")), c = Ai(() => a.first || a.checked ? 0 : -1);
    dw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), dw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = qu("register", ($) => {
    }), w = qu("blur", ($) => {
    }), m = qu("select", ($) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: w,
      click: () => {
        m(a);
      },
      input: o,
      id: s
    };
  },
  components: {
    FeatherRipple: Jn
  }
}), eN = (e) => (jD("data-v-24790cf0"), e = e(), ZD(), e), tN = { class: "layout-container" }, nN = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], rN = { class: "radio hover focus" }, oN = /* @__PURE__ */ eN(() => /* @__PURE__ */ Kn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Kn("svg", { class: "dot" }, [
    /* @__PURE__ */ Kn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), iN = ["id"];
function sN(e, o, r, s, a, u) {
  const c = s_("feather-ripple");
  return Nc(), a_("div", tN, [
    Kn("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: e.id,
      "aria-checked": e.vm.checked ? "true" : "false",
      "aria-disabled": e.vm.disabled ? "true" : "false",
      "aria-labelledby": e.labelId,
      tabindex: e.tabindex,
      onClick: o[0] || (o[0] = (...f) => e.click && e.click(...f)),
      onBlur: o[1] || (o[1] = (...f) => e.blur && e.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      Kn("div", rN, [
        oN,
        e.vm.disabled ? GD("", !0) : (Nc(), YD(c, {
          key: 0,
          center: ""
        }))
      ]),
      Kn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        l_(e.$slots, "default", {}, void 0, !0)
      ], 8, iN)
    ], 40, nN)
  ]);
}
var Lc = /* @__PURE__ */ u_(QD, [["render", sN], ["__scopeId", "data-v-24790cf0"]]);
const aN = o_(da({}, ko), {
  label: {
    type: String,
    required: !0
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object, Date, Function]
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
}), lN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, uN = i_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: aN,
  emits: lN,
  setup(e, o) {
    xo(e);
    const r = Hu(e, "error"), s = Hu(e, "modelValue"), a = Ai(() => se("feather-input-description")), u = Ai(() => {
      const c = o_(da({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return da(da({
      descriptionId: a,
      attrs: u
    }, Hm(s, o.emit, e.label, e.schema, Hu(e, "error"))), Io(o.attrs));
  },
  components: {
    InputSubText: So
  }
}), cN = ["for"], dN = ["id"];
function fN(e, o, r, s, a, u) {
  const c = s_("InputSubText");
  return Nc(), a_("div", fw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Kn("label", {
      for: e.groupId,
      class: "group-label"
    }, KD(e.label), 9, cN),
    Kn("div", fw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      l_(e.$slots, "default", {}, void 0, !0)
    ], 16, dN),
    JD(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var c_ = /* @__PURE__ */ u_(uN, [["render", fN], ["__scopeId", "data-v-6775aeb9"]]);
const hN = window.Vue.defineComponent, pN = window.Vue.renderList, wN = window.Vue.Fragment, hw = window.Vue.openBlock, vN = window.Vue.createElementBlock, mN = window.Vue.toDisplayString, _N = window.Vue.createTextVNode, pw = window.Vue.unref, ww = window.Vue.withCtx, gN = window.Vue.createVNode, $N = window.Vue.createBlock, yN = window.Vue.watch, VN = window.Vue.ref, bN = /* @__PURE__ */ hN({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: o }) {
    const r = e, s = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], a = VN(r.preSelected || s[0].id);
    return yN(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (hw(), $N(pw(c_), {
      label: "",
      modelValue: a.value,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (f) => a.value = f),
        c[1] || (c[1] = (f) => o("filter-date-selected", a.value))
      ],
      vertical: "",
      hodeLabel: "",
      class: "radio-dates"
    }, {
      default: ww(() => [
        (hw(), vN(wN, null, pN(s, (f) => gN(pw(Lc), {
          value: f.id,
          key: f.id
        }, {
          default: ww(() => [
            _N(mN(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const CN = /* @__PURE__ */ ce(bN, [["__scopeId", "data-v-0363302c"]]);
var SN = Object.defineProperty, EN = Object.defineProperties, IN = Object.getOwnPropertyDescriptors, vw = Object.getOwnPropertySymbols, kN = Object.prototype.hasOwnProperty, xN = Object.prototype.propertyIsEnumerable, mw = (e, o, r) => o in e ? SN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ai = (e, o) => {
  for (var r in o || (o = {}))
    kN.call(o, r) && mw(e, r, o[r]);
  if (vw)
    for (var r of vw(o))
      xN.call(o, r) && mw(e, r, o[r]);
  return e;
}, _w = (e, o) => EN(e, IN(o));
const AN = window.Vue.defineComponent, BN = window.Vue.inject, li = window.Vue.h;
var TN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DN = {
  primary: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  secondary: {
    type: Boolean,
    default: !1
  },
  icon: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  asAnchor: {
    type: Boolean,
    default: !1
  },
  onColor: {
    type: Boolean,
    default: !1
  }
}, NN = AN({
  inheritAttrs: !1,
  props: DN,
  setup() {
    return { hasTooltip: BN("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = ai({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = li(Jn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), li(o, _w(ai(ai({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : li(Jn, { center: !0 })
      ]);
    }
    const c = li("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return li(o, _w(ai(ai({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var fe = /* @__PURE__ */ TN(NN, [["__scopeId", "data-v-702d1074"]]);
const LN = window.Vue.openBlock, MN = window.Vue.createElementBlock, ON = window.Vue.createElementVNode;
var PN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RN = {}, FN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UN = /* @__PURE__ */ ON("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), WN = [
  UN
];
function qN(e, o) {
  return LN(), MN("svg", FN, WN);
}
var HN = /* @__PURE__ */ PN(RN, [["render", qN]]);
const zN = window.Vue.openBlock, YN = window.Vue.createElementBlock, GN = window.Vue.createElementVNode;
var jN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZN = {}, KN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JN = /* @__PURE__ */ GN("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), XN = [
  JN
];
function QN(e, o) {
  return zN(), YN("svg", KN, XN);
}
var eL = /* @__PURE__ */ jN(ZN, [["render", QN]]);
const tL = window.Vue.openBlock, nL = window.Vue.createElementBlock, rL = window.Vue.createElementVNode;
var oL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const iL = {}, sL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, aL = /* @__PURE__ */ rL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), lL = [
  aL
];
function uL(e, o) {
  return tL(), nL("svg", sL, lL);
}
var d_ = /* @__PURE__ */ oL(iL, [["render", uL]]);
const cL = window.Vue.defineComponent, sn = window.Vue.unref, hr = window.Vue.createVNode, gw = window.Vue.toDisplayString, kn = window.Vue.createElementVNode, f_ = window.Vue.createTextVNode, $w = window.Vue.openBlock, yw = window.Vue.createElementBlock, dL = window.Vue.createCommentVNode, fL = window.Vue.withCtx, hL = window.Vue.vShow, pL = window.Vue.normalizeClass, wL = window.Vue.withDirectives, vL = window.Vue.Fragment, mL = window.Vue.pushScopeId, _L = window.Vue.popScopeId, h_ = (e) => (mL("data-v-b1dc2670"), e = e(), _L(), e), gL = /* @__PURE__ */ f_(" Filters "), $L = { class: "count" }, yL = { class: "results" }, VL = { class: "total" }, bL = /* @__PURE__ */ f_(" Reset "), CL = /* @__PURE__ */ h_(() => /* @__PURE__ */ kn("div", { class: "title" }, "By Severities:", -1)), SL = /* @__PURE__ */ h_(() => /* @__PURE__ */ kn("div", { class: "title" }, "By Start Date:", -1)), pr = window.Vue.ref, EL = window.Vue.reactive, IL = window.Vue.markRaw, Vw = window.Vue.watch, kL = /* @__PURE__ */ cL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = IL({
      FilterAlt: HN,
      ExpandLess: eL,
      ExpandMore: Wa,
      Refresh: d_
    }), a = en(), u = pr(r.isOpen), c = pr(["all"]), f = pr(1), w = pr(r.list), m = pr(!1), _ = pr(0), $ = pr(null), y = EL({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var F, P;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((F = a.filters) == null ? void 0 : F.severities) && !((P = a.filters) != null && P.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, A());
    }, B = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Vw(
      () => a.nodes,
      () => {
        B();
      }
    ), Vw(r, () => {
      w.value = r.list, T();
    });
    const L = (F) => {
      c.value = F, A();
    }, M = (F) => {
      f.value = F, A();
    }, S = (F) => {
      if (!F)
        return y.nodeSelectedValue = void 0, [];
      m.value = !0, y.results = y.nodes.filter((P) => P.label.toLowerCase().indexOf(F) > -1).map((P) => ({
        _text: P.label,
        id: P.id
      })), m.value = !1;
    }, N = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), w.value = r.list;
    }, A = () => {
      _.value = 0;
      let F = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, r.isSituation ? F = F.map((P) => {
        if (P.relatedAlarms.filter(
          (ae) => {
            var re;
            return ae.nodeLabel === ((re = y.nodeSelectedValue) == null ? void 0 : re._text);
          }
        ).length > 0)
          return P;
      }).filter((P) => P) : F = F.filter(
        (P) => {
          var q;
          return P.nodeLabel === ((q = y.nodeSelectedValue) == null ? void 0 : q._text);
        }
      )), c.value.includes("all") || (_.value++, F = F.filter(
        (P) => c.value.includes(P.severity)
      )), f.value !== 1 && (_.value++, F = EI(
        f.value,
        F
      )), w.value = F, r.saveFilters && O(), o("filtered-list", F);
    }, O = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, I = () => {
      u.value = !u.value;
    };
    return (F, P) => ($w(), yw(vL, null, [
      r.isOpen ? dL("", !0) : ($w(), yw("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        kn("div", null, [
          hr(sn(G), {
            icon: sn(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          gL,
          kn("span", $L, gw(_.value), 1)
        ]),
        hr(sn(G), {
          icon: u.value ? sn(s).ExpandLess : sn(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      wL(kn("div", {
        class: pL(["filters", { collapsed: !r.isOpen }])
      }, [
        kn("div", yL, [
          kn("div", VL, "Results: " + gw(sn(w).length), 1),
          hr(sn(fe), {
            class: "btn-reset",
            onClick: N
          }, {
            default: fL(() => [
              hr(sn(G), {
                icon: sn(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              bL
            ]),
            _: 1
          })
        ]),
        kn("div", null, [
          hr(sn(PD), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: m.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              P[0] || (P[0] = (q) => y.nodeSelectedValue = q),
              A
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          CL,
          hr(sB, {
            alarms: r.list,
            onSelectedOption: L,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          kn("div", null, [
            SL,
            hr(CN, {
              onFilterDateSelected: M,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [hL, u.value]
      ])
    ], 64));
  }
});
const Bo = /* @__PURE__ */ ce(kL, [["__scopeId", "data-v-b1dc2670"]]), xL = window.Vue.openBlock, AL = window.Vue.createElementBlock, BL = window.Vue.createElementVNode;
var TL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DL = {}, NL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LL = /* @__PURE__ */ BL("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), ML = [
  LL
];
function OL(e, o) {
  return xL(), AL("svg", NL, ML);
}
var za = /* @__PURE__ */ TL(DL, [["render", OL]]);
const PL = window.Vue.openBlock, RL = window.Vue.createElementBlock, p_ = window.Vue.createElementVNode;
var FL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const UL = {}, WL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qL = /* @__PURE__ */ p_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), HL = /* @__PURE__ */ p_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), zL = [
  qL,
  HL
];
function YL(e, o) {
  return PL(), RL("svg", WL, zL);
}
var GL = /* @__PURE__ */ FL(UL, [["render", YL]]);
const jL = window.Vue.openBlock, ZL = window.Vue.createElementBlock, KL = window.Vue.createElementVNode;
var JL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XL = {}, QL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eM = /* @__PURE__ */ KL("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), tM = [
  eM
];
function nM(e, o) {
  return jL(), ZL("svg", QL, tM);
}
var rM = /* @__PURE__ */ JL(XL, [["render", nM]]);
const er = () => window.VRouter || hg;
const oM = window.Vue.openBlock, iM = window.Vue.createElementBlock, sM = window.Vue.pushScopeId, aM = window.Vue.popScopeId, bw = window.Vue.createElementVNode;
var lM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uM = {}, cM = (e) => (sM("data-v-2263be39"), e = e(), aM(), e), dM = { class: "spinner-container" }, fM = /* @__PURE__ */ cM(() => /* @__PURE__ */ bw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ bw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), hM = [
  fM
];
function pM(e, o) {
  return oM(), iM("div", dM, hM);
}
var od = /* @__PURE__ */ lM(uM, [["render", pM], ["__scopeId", "data-v-2263be39"]]);
const wM = window.Vue.defineComponent, zu = window.Vue.unref, vM = window.Vue.createVNode, mM = window.Vue.createElementVNode, _M = window.Vue.withCtx, gM = window.Vue.openBlock, $M = window.Vue.createBlock, yM = window.Vue.pushScopeId, VM = window.Vue.popScopeId, bM = (e) => (yM("data-v-fba500de"), e = e(), VM(), e), CM = /* @__PURE__ */ bM(() => /* @__PURE__ */ mM("span", null, "New Situation", -1)), SM = window.Vue.markRaw, EM = /* @__PURE__ */ wM({
  __name: "NewSituationBtn",
  setup(e) {
    const o = er(), r = SM({
      Add: za
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (gM(), $M(zu(fe), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: _M(() => [
        vM(zu(G), {
          icon: zu(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        CM
      ]),
      _: 1
    }));
  }
});
const w_ = /* @__PURE__ */ ce(EM, [["__scopeId", "data-v-fba500de"]]), IM = "/whoami", kM = async () => {
  try {
    const e = await Qt.get(IM);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Ya = "/alec", v_ = "/alec/engine/configuration", m_ = "/alec/situation", xM = async () => {
  try {
    const e = await Qt.get(`${v_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, AM = async (e) => {
  try {
    return (await Qt.post(v_, e)).status === 200;
  } catch {
    return !1;
  }
}, __ = async (e, o) => {
  try {
    const r = await Qt.post(`${Ya}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == Pe.REJECTED.toLowerCase() && r.status === 200 && await xm(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Cw = async (e, o) => {
  try {
    return (await Qt.delete(`${Ya}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, g_ = async (e, o) => {
  try {
    return (await Qt.put(`${Ya}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, BM = async (e) => {
  try {
    return (await Qt.post(m_, e)).status === 200;
  } catch {
    return !1;
  }
}, TM = async () => {
  try {
    return (await Qt.post(`${m_}/closeAll`)).status === 200;
  } catch {
    return !1;
  }
}, DM = async () => {
  try {
    return (await Qt.post(`${Ya}/engine/reEvaluate`)).status === 200;
  } catch {
    return !1;
  }
}, NM = window.Pinia.defineStore, LM = {
  alpha: 144.47117699,
  beta: 0.55257784,
  epsilon: 100
}, $o = NM("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await kM();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await xM();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...LM,
        ...r,
        distanceMeasureName: o ? Pe.HELLINGER_OPTION : Pe.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return await AM(s) ? (this.engineInfo = s, !0) : !1;
    }
  }
}), MM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", OM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", PM = window.Vue.defineComponent, qs = window.Vue.unref, Sw = window.Vue.createElementVNode, Yu = window.Vue.openBlock, Gu = window.Vue.createElementBlock, RM = window.Vue.createCommentVNode, FM = window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UM = {
  key: 0,
  class: "info-engine"
}, WM = ["src"], qM = /* @__PURE__ */ FM(" ENGINE "), HM = {
  key: 0,
  class: "type"
}, zM = {
  key: 1,
  class: "type"
}, YM = window.Vue.watch, GM = window.Vue.ref, jM = /* @__PURE__ */ PM({
  __name: "ConfigurationInfo",
  setup(e) {
    var u;
    const o = er(), r = $o(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = GM(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == Pe.ENGINE_DBSCAN
    );
    return YM(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == Pe.ENGINE_DBSCAN;
      }
    ), (c, f) => qs(r).engineInfo && qs(r).engineInfo.engineName ? (Yu(), Gu("div", UM, [
      Sw("img", {
        src: a.value ? qs(OM) : qs(MM),
        class: "icon-type"
      }, null, 8, WM),
      Sw("div", {
        class: "engine",
        onClick: s
      }, [
        qM,
        a.value ? (Yu(), Gu("div", HM, "CLUSTERING")) : (Yu(), Gu("div", zM, "DEEP LEARNING"))
      ])
    ])) : RM("", !0);
  }
});
const ZM = /* @__PURE__ */ ce(jM, [["__scopeId", "data-v-9a6c1414"]]);
const KM = {}, JM = window.Vue.openBlock, XM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const QM = { class: "empty" };
function e3(e, o) {
  return JM(), XM("div", QM, "No results found.");
}
const To = /* @__PURE__ */ ce(KM, [["render", e3], ["__scopeId", "data-v-725433ac"]]), t3 = window.Vue.defineComponent, ln = window.Vue.createElementVNode, ui = window.Vue.unref, wr = window.Vue.createVNode, n3 = window.Vue.withCtx, Hs = window.Vue.toDisplayString, Sn = window.Vue.openBlock, vr = window.Vue.createElementBlock, Ew = window.Vue.createCommentVNode, Iw = window.Vue.createBlock, r3 = window.Vue.renderList, o3 = window.Vue.Fragment, i3 = window.Vue.pushScopeId, s3 = window.Vue.popScopeId, $_ = (e) => (i3("data-v-2675e2f8"), e = e(), s3(), e), a3 = { class: "list-main" }, l3 = { class: "header" }, u3 = /* @__PURE__ */ $_(() => /* @__PURE__ */ ln("h2", null, "Situation List", -1)), c3 = { class: "link-btns" }, d3 = /* @__PURE__ */ $_(() => /* @__PURE__ */ ln("span", null, "View Unassociated Alarms", -1)), f3 = { class: "content" }, h3 = { class: "left-filters" }, p3 = { class: "container" }, w3 = { class: "autocomplete" }, v3 = { key: 0 }, m3 = { key: 1 }, _3 = { key: 0 }, g3 = { class: "situation-list" }, $3 = {
  key: 0,
  class: "footer-pager"
}, y3 = window.Vue.reactive, zs = window.Vue.ref, V3 = window.Vue.watch, b3 = window.Vue.markRaw, C3 = /* @__PURE__ */ t3({
  __name: "SituationList",
  setup(e) {
    const o = b3({
      Add: za,
      View: GL,
      Settings: rM
    }), r = er(), s = en(), a = $o();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = y3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = zs(!0), w = zs(0), m = zs(1), _ = zs(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    V3(
      () => s.situations,
      () => {
        f.value = !1, $(), L(s.situations);
      }
    );
    const y = (S) => {
      w.value = S, c.situations = c.allSituations[w.value];
    }, T = (S) => {
      r.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, B = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, L = (S) => {
      _.value = S.length, c.allSituations = we.exports.chunk(S, u);
      const N = S.map((A) => A.id);
      s.filteredSituations = N, w.value = 0, c.situations = c.allSituations[0], m.value = c.allSituations.length;
    }, M = (S) => {
      S.length ? L(S) : c.situations = [];
    };
    return (S, N) => {
      var A;
      return Sn(), vr("div", a3, [
        ln("div", l3, [
          u3,
          ln("div", c3, [
            wr(ui(fe), {
              class: "view-situation-btn",
              onClick: N[0] || (N[0] = () => B())
            }, {
              default: n3(() => [
                wr(ui(G), {
                  icon: ui(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                d3
              ]),
              _: 1
            }),
            wr(w_),
            wr(ZM)
          ])
        ]),
        ln("div", f3, [
          ln("div", h3, [
            wr(Bo, {
              list: ui(s).situations,
              onFilteredList: M,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          ln("div", p3, [
            ln("div", w3, [
              c.situations && c.situations.length ? (Sn(), vr("div", v3, " Result: " + Hs((A = c.situations) == null ? void 0 : A.length) + " of " + Hs(_.value), 1)) : Ew("", !0)
            ]),
            f.value ? (Sn(), Iw(ui(od), {
              key: 0,
              class: "spinner"
            })) : (Sn(), vr("div", m3, [
              c.situations && c.situations.length ? (Sn(), vr("div", _3, [
                ln("div", g3, [
                  (Sn(!0), vr(o3, null, r3(c.situations, (O) => (Sn(), vr("div", {
                    class: "card",
                    key: O.id
                  }, [
                    wr(Rm, {
                      onClick: () => T(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Sn(), vr("div", $3, [
                  ln("div", null, "Page: " + Hs(w.value + 1) + " of " + Hs(m.value), 1),
                  wr(Mk, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: m.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Ew("", !0)
              ])) : (Sn(), Iw(To, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const S3 = /* @__PURE__ */ ce(C3, [["__scopeId", "data-v-2675e2f8"]]);
const Ys = window.Vue.ref, E3 = window.Vue.inject, I3 = window.Vue.computed, k3 = window.Vue.onMounted, y_ = {
  id: {
    type: String
  },
  controls: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, V_ = (e) => {
  const o = Ys(!1), r = Ys(), s = Ys(e.controls), a = Ys(e.id), u = () => {
    r.value && r.value.focus();
  }, c = E3("registerTab");
  k3(() => {
    if (r.value && c) {
      const w = r.value.parentElement, m = w && w.parentElement ? w.parentElement : void 0, _ = Array.from(m ? m.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), $ = w ? _.indexOf(w) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: o,
        id: a,
        controls: s,
        index: $
      });
    }
  });
  const f = I3(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: a.value,
    "aria-selected": o.value,
    "aria-controls": s.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: f,
    tab: r
  };
}, kw = window.Vue.ref, x3 = window.Vue.toRef, A3 = window.Vue.watch, xw = window.Vue.provide, b_ = {
  prop: "modelValue",
  event: "update:modelValue"
}, C_ = {
  "update:modelValue": (e) => !0
}, S_ = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, E_ = (e, o) => {
  const r = x3(e, "modelValue"), s = kw(e.modelValue), a = kw([]);
  A3(r, (B) => {
    w(B);
  });
  const u = (B) => {
    B.preventDefault(), a.value.some((L, M) => L.tab && L.tab.el.contains(B.target) ? (f(M), w(M), !0) : !1);
  }, c = (B) => {
    if (((q) => q.shiftKey || q.ctrlKey || q.metaKey || q.altKey)(B))
      return;
    const M = B.keyCode, S = (q) => {
      q.stopPropagation(), q.preventDefault();
    }, N = a.value.filter((q) => q.tab && !q.tab.disabled), A = a.value.findIndex((q) => q.tab && q.tab.el.contains(document.activeElement));
    let O = A !== -1 ? A : s.value;
    const I = [Q.RIGHT], F = [Q.LEFT], P = [Q.ENTER, Q.SPACE];
    e.vertical && (I.push(Q.DOWN), F.push(Q.UP)), I.indexOf(M) > -1 ? (O++, O >= N.length && (O = 0), S(B), f(a.value.indexOf(N[O]))) : F.indexOf(M) > -1 && (O--, O < 0 && (O = N.length - 1), S(B), f(a.value.indexOf(N[O]))), P.indexOf(M) > -1 && w(O);
  }, f = (B) => {
    a.value.forEach(function(L, M) {
      B === M && L.tab && L.tab.focus();
    });
  }, w = (B) => {
    const L = a.value[B];
    !L || L.tab && L.tab.disabled || (a.value.forEach((M, S) => {
      M.tab && (M.tab.selected = B === S), M.panel && (M.panel.selected = B === S);
    }), s.value = B, o.emit("update:modelValue", B));
  };
  xw("registerTab", (B) => {
    const L = B.index;
    L > -1 && (a.value[L] = { ...a.value[L], tab: B }, a.value = [...a.value], $());
  }), xw("registerPanel", (B) => {
    const L = B.index;
    L > -1 && (a.value[L] = {
      ...a.value[L],
      panel: B
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: B, panel: L }, M) => {
      if (L && B) {
        const S = B.id || se("tab"), N = B.controls || se("panel");
        B.controls = N, B.id = S, L.tab = S, L.id = N;
      }
      M === s.value && (L && (L.selected = !0), B && (B.selected = !0));
    });
  };
  return {
    listeners: {
      click: u,
      keydown: c
    },
    attrs: {
      role: "tablist"
    },
    selected: s,
    pairs: a
  };
}, Gs = window.Vue.ref, B3 = window.Vue.inject, T3 = window.Vue.computed, D3 = window.Vue.onMounted, I_ = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, k_ = (e) => {
  const o = Gs(!1), r = Gs(), s = Gs(e.tab), a = Gs(e.id), u = B3("registerPanel");
  D3(() => {
    if (u) {
      const f = r.value, w = f && f.parentElement ? f.parentElement : void 0, m = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: m
      });
    }
  });
  const c = T3(() => ({
    role: "tabpanel",
    id: a.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": s.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: c,
    panel: r
  };
}, id = window.Vue.defineComponent, N3 = window.Vue.resolveComponent, sd = window.Vue.openBlock, ad = window.Vue.createElementBlock, Bi = window.Vue.createElementVNode, x_ = window.Vue.mergeProps, Ca = window.Vue.renderSlot, L3 = window.Vue.createVNode, M3 = window.Vue.normalizeStyle, O3 = window.Vue.toHandlers, P3 = window.Vue.withDirectives, R3 = window.Vue.normalizeProps, F3 = window.Vue.guardReactiveProps, U3 = window.Vue.vShow;
var ld = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const W3 = y_, q3 = id({
  props: W3,
  setup(e) {
    return V_(e);
  },
  components: {
    FeatherRipple: Jn
  }
}), H3 = { role: "presentation" }, z3 = { class: "tab-text" };
function Y3(e, o, r, s, a, u) {
  const c = N3("FeatherRipple");
  return sd(), ad("li", H3, [
    Bi("button", x_(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Bi("span", z3, [
        Ca(e.$slots, "default", {}, void 0, !0)
      ]),
      L3(c)
    ], 16)
  ]);
}
var Aw = /* @__PURE__ */ ld(q3, [["render", Y3], ["__scopeId", "data-v-e6bb52b6"]]);
const G3 = S_, j3 = C_, Z3 = id({
  model: b_,
  emits: j3,
  props: G3,
  setup(e, o) {
    return E_(e, o);
  },
  data: () => ({
    transform: "",
    durationNumber: 250,
    width: "1px",
    ro: void 0
  }),
  watch: {
    selected() {
      this.updateSlider();
    },
    pairs: {
      handler(e) {
        e && e.length && this.ro && e.forEach((o) => {
          o.tab && this.ro.observe(o.tab.el);
        });
      },
      immediate: !0
    }
  },
  computed: {
    duration() {
      return `${this.durationNumber}ms`;
    }
  },
  methods: {
    updateSlider() {
      this.$refs.slider.getBoundingClientRect().width < 5 ? this.durationNumber = 0 : this.durationNumber = 250, this.$nextTick(() => {
        const e = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - e.left, s = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${s}px)`;
      });
    }
  },
  mounted() {
    this.updateSlider(), this.ro = new ResizeObserver(() => {
      this.updateSlider();
    });
  },
  unmounted() {
    this.ro.disconnect();
  }
}), K3 = { class: "feather-tab-container" }, J3 = { class: "tab-panels" };
function X3(e, o, r, s, a, u) {
  return sd(), ad("div", K3, [
    Bi("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: M3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Bi("ul", x_(e.attrs, O3(e.listeners)), [
      Ca(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Bi("div", J3, [
      Ca(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var Q3 = /* @__PURE__ */ ld(Z3, [["render", X3], ["__scopeId", "data-v-27adffb9"]]);
const eO = I_, tO = id({
  props: eO,
  setup(e) {
    return k_(e);
  }
});
function nO(e, o, r, s, a, u) {
  return P3((sd(), ad("div", R3(F3(e.attrs)), [
    Ca(e.$slots, "default")
  ], 16)), [
    [U3, e.selected]
  ]);
}
var Bw = /* @__PURE__ */ ld(tO, [["render", nO]]);
const rO = window.Vue.defineComponent, oO = window.Vue.toDisplayString, iO = window.Vue.normalizeClass, sO = window.Vue.openBlock, aO = window.Vue.createElementBlock, lO = window.Vue.createCommentVNode, uO = /* @__PURE__ */ rO({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (sO(), aO("span", {
      key: 0,
      class: iO(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, oO(o.severity), 3)) : lO("", !0);
  }
});
const A_ = /* @__PURE__ */ ce(uO, [["__scopeId", "data-v-83c2cdce"]]), cO = window.Vue.defineComponent, Tw = window.Vue.toDisplayString, Dw = window.Vue.createElementVNode, dO = window.Vue.openBlock, fO = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const hO = { class: "box" }, pO = { class: "label" }, wO = { class: "date" }, vO = /* @__PURE__ */ cO({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (dO(), fO("div", hO, [
      Dw("div", pO, Tw(o.label), 1),
      Dw("div", wO, Tw(o.info), 1)
    ]));
  }
});
const ju = /* @__PURE__ */ ce(vO, [["__scopeId", "data-v-b4afa751"]]), mO = window.Vue.defineComponent, _O = window.Vue.unref, gO = window.Vue.renderList, $O = window.Vue.Fragment, Zu = window.Vue.openBlock, Ku = window.Vue.createElementBlock, yO = window.Vue.toDisplayString, VO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const bO = { class: "alarms-list" }, CO = /* @__PURE__ */ mO({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Zu(), Ku("div", bO, [
      (Zu(!0), Ku($O, null, gO(_O(we.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Zu(), Ku("div", {
        class: VO(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, yO(a.length), 3))), 128))
    ]));
  }
});
const SO = /* @__PURE__ */ ce(CO, [["__scopeId", "data-v-52d63440"]]), EO = window.Vue.openBlock, IO = window.Vue.createElementBlock, kO = window.Vue.createElementVNode;
var xO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AO = {}, BO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TO = /* @__PURE__ */ kO("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), DO = [
  TO
];
function NO(e, o) {
  return EO(), IO("svg", BO, DO);
}
var LO = /* @__PURE__ */ xO(AO, [["render", NO]]);
const MO = window.Vue.openBlock, OO = window.Vue.createElementBlock, PO = window.Vue.createStaticVNode;
var RO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FO = {}, UO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WO = /* @__PURE__ */ PO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), qO = [
  WO
];
function HO(e, o) {
  return MO(), OO("svg", UO, qO);
}
var Sa = /* @__PURE__ */ RO(FO, [["render", HO]]);
const zO = window.Vue.defineComponent, jt = window.Vue.unref, Ju = window.Vue.createVNode, ud = window.Vue.createElementVNode, Xu = window.Vue.withCtx, js = window.Vue.openBlock, Qu = window.Vue.createBlock, ec = window.Vue.createCommentVNode, YO = window.Vue.normalizeClass, GO = window.Vue.createElementBlock, jO = window.Vue.pushScopeId, ZO = window.Vue.popScopeId, cd = (e) => (jO("data-v-e073070b"), e = e(), ZO(), e), KO = /* @__PURE__ */ cd(() => /* @__PURE__ */ ud("span", null, "Acknowledge", -1)), JO = /* @__PURE__ */ cd(() => /* @__PURE__ */ ud("span", null, "Escalate", -1)), XO = /* @__PURE__ */ cd(() => /* @__PURE__ */ ud("span", null, "Clear", -1)), QO = /* @__PURE__ */ zO({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = en(), s = async (u) => {
      await VE(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await __(
        o.situationId,
        Pe.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await xm(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (js(), GO("div", {
      class: YO(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? ec("", !0) : (js(), Qu(jt(fe), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Xu(() => [
          Ju(jt(G), {
            icon: jt(_o),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          KO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (js(), Qu(jt(fe), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(jt(Pe).ESCALATE))
      }, {
        default: Xu(() => [
          Ju(jt(G), {
            icon: jt(LO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          JO
        ]),
        _: 1
      })) : ec("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (js(), Qu(jt(fe), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(jt(Pe).CLEAR))
      }, {
        default: Xu(() => [
          Ju(jt(G), {
            icon: jt(Sa),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          XO
        ]),
        _: 1
      })) : ec("", !0)
    ], 2));
  }
});
const B_ = /* @__PURE__ */ ce(QO, [["__scopeId", "data-v-e073070b"]]);
var e4 = Object.defineProperty, t4 = Object.defineProperties, n4 = Object.getOwnPropertyDescriptors, Nw = Object.getOwnPropertySymbols, r4 = Object.prototype.hasOwnProperty, o4 = Object.prototype.propertyIsEnumerable, Lw = (e, o, r) => o in e ? e4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Mc = (e, o) => {
  for (var r in o || (o = {}))
    r4.call(o, r) && Lw(e, r, o[r]);
  if (Nw)
    for (var r of Nw(o))
      o4.call(o, r) && Lw(e, r, o[r]);
  return e;
}, T_ = (e, o) => t4(e, n4(o));
const D_ = window.Vue.defineComponent, i4 = window.Vue.inject, s4 = window.Vue.resolveComponent, tc = window.Vue.openBlock, Mw = window.Vue.createElementBlock, uo = window.Vue.createElementVNode, a4 = window.Vue.createBlock, Ow = window.Vue.createCommentVNode, l4 = window.Vue.renderSlot, u4 = window.Vue.pushScopeId, c4 = window.Vue.popScopeId, nc = window.Vue.toRef, Zs = window.Vue.computed, d4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var f4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const h4 = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  },
  indeterminate: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String
  },
  noFocus: {
    type: Boolean,
    default: !1
  }
}, p4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, w4 = D_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: p4,
  props: h4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: i4("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : se("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : se("checkbox-label");
    }
  },
  watch: {
    indeterminate: {
      handler(e) {
        this.$emit("update:modelValue", void 0), this.$emit("indeterminate", e);
      }
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    updateValue() {
      this.disabled || (this.indeterminate ? (this.$emit("update:modelValue", !0), this.$emit("indeterminate", !1)) : (this.$emit("update:modelValue", !this.modelValue), this.$emit("indeterminate", !1)));
    },
    click(e) {
      this.focus(), this.updateValue(), this.$emit("click", e);
    },
    keydown(e) {
      (e.keyCode === Q.SPACE || e.keyCode === Q.ENTER) && this.updateValue(), e.keyCode === Q.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Jn
  }
}), v4 = (e) => (u4("data-v-a7af27e2"), e = e(), c4(), e), m4 = { class: "layout-container" }, _4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], g4 = { class: "checkbox hover focus" }, $4 = /* @__PURE__ */ v4(() => /* @__PURE__ */ uo("div", { class: "box" }, [
  /* @__PURE__ */ uo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ uo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ uo("div", { class: "indeterminate" })
], -1)), y4 = ["id", "for"];
function V4(e, o, r, s, a, u) {
  const c = s4("feather-ripple");
  return tc(), Mw("div", m4, [
    uo("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: o[0] || (o[0] = (...f) => e.click && e.click(...f)),
      onKeydown: o[1] || (o[1] = (...f) => e.keydown && e.keydown(...f)),
      "aria-checked": e.modelValue ? "true" : e.indeterminate ? "mixed" : "false",
      "aria-disabled": e.disabled,
      "aria-labelledby": e.labelId,
      "aria-label": e.label,
      id: e.inputId,
      tabindex: e.noFocus ? -1 : 0,
      ref: "input",
      role: "checkbox",
      "data-ref-id": "feather-checkbox"
    }, [
      uo("div", g4, [
        $4,
        e.disabled ? Ow("", !0) : (tc(), a4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Ow("", !0) : (tc(), Mw("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        l4(e.$slots, "default", {}, void 0, !0)
      ], 8, y4))
    ], 40, _4)
  ]);
}
var Ui = /* @__PURE__ */ f4(w4, [["render", V4], ["__scopeId", "data-v-a7af27e2"]]);
const b4 = T_(Mc({}, ko), {
  modelValue: {
    type: [Array, Object],
    required: !1
  },
  label: {
    type: String,
    required: !0
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  }
});
D_({
  props: b4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    xo(e);
    const r = nc(e, "error"), s = Zs(() => se("feather-checkbox-group")), a = Zs(() => se("feather-input-description")), u = Zs(() => se("feather-input-label")), c = Zs(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), T_(Mc({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = d4(s.value), { validate: w } = Eo(f, nc(e, "modelValue"), e.label, e.schema, nc(e, "error"));
    return Mc({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, Io(o.attrs));
  },
  components: {
    InputSubText: So
  }
});
const C4 = window.Vue.openBlock, S4 = window.Vue.createElementBlock, N_ = window.Vue.createElementVNode;
var E4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const I4 = {}, k4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, x4 = /* @__PURE__ */ N_("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), A4 = /* @__PURE__ */ N_("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), B4 = [
  x4,
  A4
];
function T4(e, o) {
  return C4(), S4("svg", k4, B4);
}
var D4 = /* @__PURE__ */ E4(I4, [["render", T4]]);
var N4 = Object.defineProperty, L4 = Object.defineProperties, M4 = Object.getOwnPropertyDescriptors, Pw = Object.getOwnPropertySymbols, O4 = Object.prototype.hasOwnProperty, P4 = Object.prototype.propertyIsEnumerable, Rw = (e, o, r) => o in e ? N4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, co = (e, o) => {
  for (var r in o || (o = {}))
    O4.call(o, r) && Rw(e, r, o[r]);
  if (Pw)
    for (var r of Pw(o))
      P4.call(o, r) && Rw(e, r, o[r]);
  return e;
}, L_ = (e, o) => L4(e, M4(o));
const R4 = window.Vue.defineComponent, rc = window.Vue.toRef, F4 = window.Vue.computed, Fw = window.Vue.resolveComponent, Uw = window.Vue.openBlock, Ww = window.Vue.createElementBlock, qw = window.Vue.mergeProps, Hw = window.Vue.createVNode, U4 = window.Vue.normalizeClass, zw = window.Vue.withCtx, W4 = window.Vue.createElementVNode, q4 = window.Vue.toDisplayString, H4 = window.Vue.createCommentVNode;
var z4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Y4 = L_(co(co({}, Ma), ko), {
  modelValue: {
    type: String
  },
  maxlength: {
    type: Number,
    required: !1,
    default: 0
  },
  auto: {
    type: Boolean,
    default: !1
  },
  schema: {
    type: Object,
    required: !1
  },
  id: {
    type: String,
    required: !1
  }
}), G4 = {
  "update:modelValue": (e) => !0
}, j4 = R4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: G4,
  props: Y4,
  setup(e, o) {
    xo(e), Oa(e);
    const r = rc(e, "id"), s = F4(() => r.value ? r.value : se("feather-textarea-label")), { validate: a } = Eo(s, rc(e, "modelValue"), e.label, e.schema, rc(e, "error"));
    return co({
      inputId: s,
      incomingId: r,
      validate: a
    }, Io(o.attrs));
  },
  data() {
    return {
      focused: !1,
      internalValue: "",
      initialHeight: 0
    };
  },
  computed: {
    descriptionId() {
      return se("feather-textarea-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const e = [];
      return this.error && e.push("error"), this.disabled && e.push("disabled"), this.focused && e.push("focused"), e;
    },
    isRaised() {
      return !!(this.internalValue || this.focused);
    },
    attrs() {
      const e = co({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), L_(co(co({}, e), this.listeners), {
        class: "",
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (e["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
    },
    listeners() {
      return {
        onFocus: (e) => {
          this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(e);
        },
        onBlur: (e) => {
          this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(e);
        },
        onInput: (e) => {
          this.adjustTextArea(), this.handleInput(e);
        }
      };
    },
    charCount() {
      return `${this.internalValue && this.internalValue.length || "0"} / ${this.maxlength}`;
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(e) {
        this.adjustTextArea(), this.internalValue = e;
      }
    },
    internalValue: {
      immediate: !0,
      handler(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    handleClear() {
      this.internalValue = "", this.focus();
    },
    handleWrapperClick() {
      this.$refs.input.focus();
    },
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.validate(), this.focused = !1;
    },
    handleInput(e) {
      this.internalValue = e.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    adjustTextArea() {
      if (!this.auto)
        return;
      const e = this.$refs.input;
      !e || (e.style.height = "12px", e.style.flexBasis = "40px", e.style.whiteSpace = "nowrap", this.$nextTick(() => {
        const o = e.getBoundingClientRect().width;
        e.scrollWidth <= e.clientWidth && o < e.parentElement.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight < this.initialHeight ? this.initialHeight : e.scrollHeight}px`;
        });
      }));
    }
  },
  mounted() {
    const e = this.$refs.input;
    this.initialHeight = e.getBoundingClientRect().height;
  },
  components: {
    InputSubText: So,
    InputWrapper: La
  }
}), Z4 = ["maxlength"], K4 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function J4(e, o, r, s, a, u) {
  const c = Fw("InputWrapper"), f = Fw("InputSubText");
  return Uw(), Ww("div", qw(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Hw(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: U4(["feather-textarea-content", e.contentCls])
    }, {
      default: zw(() => [
        W4("textarea", qw(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, Z4)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Hw(f, { id: e.descriptionId }, {
      right: zw(() => [
        e.maxlength ? (Uw(), Ww("div", K4, q4(e.charCount), 1)) : H4("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Oc = /* @__PURE__ */ z4(j4, [["render", J4], ["__scopeId", "data-v-0648df5c"]]);
const X4 = window.Pinia.defineStore, Ga = X4("appStore", {
  state: () => ({
    showError: !1,
    errorMessage: ""
  }),
  actions: {
    showErrorMsg(e) {
      this.showError = !0, this.errorMessage = e, setTimeout(() => {
        this.showError = !1, this.errorMessage = "";
      }, 1800);
    }
  }
}), Q4 = window.Vue.defineComponent, Yw = window.Vue.toDisplayString, ci = window.Vue.createElementVNode, mr = window.Vue.unref, Qr = window.Vue.openBlock, Gw = window.Vue.createBlock, di = window.Vue.createCommentVNode, jw = window.Vue.createVNode, Ks = window.Vue.createElementBlock, eP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const tP = { class: "row" }, nP = { class: "label" }, rP = { class: "action-icons" }, oP = { class: "icon-btn" }, iP = {
  key: 0,
  class: "icon-btn"
}, sP = {
  key: 1,
  class: "icon-btn"
}, aP = {
  key: 0,
  class: "text"
}, lP = window.Vue.watch, Zw = window.Vue.ref, uP = /* @__PURE__ */ Q4({
  __name: "MemoBox",
  props: {
    id: null,
    label: null,
    memo: null,
    type: null,
    situationId: null,
    boxType: null
  },
  setup(e) {
    var w;
    const o = e, r = Ga(), s = Zw(!1), a = Zw((w = o.memo) == null ? void 0 : w.body);
    lP(o, () => {
      var m;
      a.value = (m = o.memo) == null ? void 0 : m.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await xE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await kE(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (m, _) => (Qr(), Ks("div", {
      class: eP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ci("div", tP, [
        ci("div", nP, Yw(e.label), 1),
        ci("div", rP, [
          ci("div", oP, [
            s.value ? di("", !0) : (Qr(), Gw(mr(G), {
              key: 0,
              icon: mr(D4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (Qr(), Ks("div", iP, [
            jw(mr(G), {
              icon: mr(_o),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : di("", !0),
          a.value && a.value != "" || s.value ? (Qr(), Ks("div", sP, [
            jw(mr(G), {
              icon: mr(bo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : di("", !0)
        ])
      ]),
      ci("div", null, [
        !s.value && a.value != null ? (Qr(), Ks("div", aP, Yw(a.value), 1)) : di("", !0),
        s.value ? (Qr(), Gw(mr(Oc), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : di("", !0)
      ])
    ], 2));
  }
});
const Ea = /* @__PURE__ */ ce(uP, [["__scopeId", "data-v-3f44e250"]]), cP = window.Vue.defineComponent, _r = window.Vue.unref, eo = window.Vue.createVNode, fi = window.Vue.toDisplayString, Jt = window.Vue.createElementVNode, Kw = window.Vue.openBlock, Jw = window.Vue.createElementBlock, Xw = window.Vue.createCommentVNode, oc = window.Vue.createTextVNode, dP = window.Vue.pushScopeId, fP = window.Vue.popScopeId, dd = (e) => (dP("data-v-02d1e7f0"), e = e(), fP(), e), hP = {
  key: 0,
  class: "card"
}, pP = { class: "row" }, wP = {
  key: 0,
  class: "ack"
}, vP = /* @__PURE__ */ dd(() => /* @__PURE__ */ Jt("strong", null, " Duration: ", -1)), mP = ["innerHTML"], _P = /* @__PURE__ */ dd(() => /* @__PURE__ */ Jt("strong", null, "First Event", -1)), gP = /* @__PURE__ */ dd(() => /* @__PURE__ */ Jt("strong", null, "Last Event", -1)), $P = { class: "section memo-boxes" }, Qw = window.Vue.ref, yP = window.Vue.watch, VP = /* @__PURE__ */ cP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Qw(!1), a = Qw(r.alarm), u = new Date().getTime();
    yP(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const m = await Am(w);
      m && (a.value = m);
    };
    return (w, m) => {
      var _, $, y, T, B;
      return a.value ? (Kw(), Jw("div", hP, [
        Jt("div", null, [
          Jt("div", pP, [
            eo(_r(Ui), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                m[0] || (m[0] = (L) => s.value = L),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Jt("div", {
              class: "title",
              onClick: m[1] || (m[1] = () => {
                s.value = !s.value, c();
              })
            }, fi(a.value.nodeLabel) + " - " + fi(a.value.id), 1),
            eo(A_, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Kw(), Jw("div", wP, [
              eo(_r(G), {
                icon: _r(_o),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Xw("", !0)
          ]),
          Jt("div", null, [
            vP,
            oc(" " + fi(_r(Da)(_r(u), new Date(a.value.firstEventTime))), 1)
          ]),
          Jt("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, mP),
          Jt("div", null, [
            _P,
            oc(" - " + fi(_r(fn)(a.value.firstEventTime)), 1)
          ]),
          Jt("div", null, [
            gP,
            oc(" - " + fi(_r(fn)(a.value.lastEventTime)), 1)
          ]),
          Jt("div", $P, [
            eo(Ea, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            eo(Ea, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (B = a.value) == null ? void 0 : B.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        eo(B_, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Xw("", !0);
    };
  }
});
const bP = /* @__PURE__ */ ce(VP, [["__scopeId", "data-v-02d1e7f0"]]), CP = window.Vue.openBlock, SP = window.Vue.createElementBlock, M_ = window.Vue.createElementVNode;
var EP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const IP = {}, kP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xP = /* @__PURE__ */ M_("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), AP = /* @__PURE__ */ M_("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), BP = [
  xP,
  AP
];
function TP(e, o) {
  return CP(), SP("svg", kP, BP);
}
var Pc = /* @__PURE__ */ EP(IP, [["render", TP]]);
const DP = window.Vue.watch, NP = window.Vue.ref, LP = window.Vue.onBeforeUnmount, O_ = (e) => {
  const o = NP(!1), r = (s) => {
    s.keyCode === Q.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return DP(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), LP(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, MP = window.Vue.watch, P_ = (e) => {
  let o;
  MP(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, R_ = window.Vue.watch, F_ = window.Vue.onBeforeUnmount, U_ = window.Vue.nextTick, OP = window.Vue.onMounted, W_ = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Ia = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, q_ = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  F_(() => Ia(o, r)), OP(() => R_(e, (s) => {
    s ? U_(() => {
      o = W_(r);
    }) : Ia(o, r);
  }, { immediate: !0 }));
}, PP = (e, o) => {
  let r;
  F_(() => Ia(r, o.value ? o.value.offsetParent : !1)), R_([e, o], ([s, a]) => {
    s && a ? U_(() => {
      r = W_(a.offsetParent);
    }) : a && Ia(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var RP = Object.defineProperty, ev = Object.getOwnPropertySymbols, FP = Object.prototype.hasOwnProperty, UP = Object.prototype.propertyIsEnumerable, tv = (e, o, r) => o in e ? RP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, WP = (e, o) => {
  for (var r in o || (o = {}))
    FP.call(o, r) && tv(e, r, o[r]);
  if (ev)
    for (var r of ev(o))
      UP.call(o, r) && tv(e, r, o[r]);
  return e;
};
const fd = window.Vue.defineComponent, Ti = window.Vue.ref, qP = window.Vue.nextTick, H_ = window.Vue.openBlock, z_ = window.Vue.createElementBlock, hd = window.Vue.createElementVNode, HP = window.Vue.renderSlot, zP = window.Vue.resolveComponent, YP = window.Vue.normalizeClass, GP = window.Vue.withModifiers, jP = window.Vue.createVNode, nv = window.Vue.toRef, rv = window.Vue.computed, ov = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Y_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZP = {
  enable: {
    type: Boolean,
    required: !0
  }
}, KP = fd({
  props: ZP,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Ti(), o = Ti(!1), r = (_, $) => {
      let y = _.compareDocumentPosition($);
      if (y === 2)
        return "before";
      if (y === 4)
        return "after";
      if (y === 10 || y === 12)
        return "parent";
    }, s = (_) => {
      for (var $ = 0; $ < _.childNodes.length; $++) {
        var y = _.childNodes[$];
        if (u(y) || s(y))
          return !0;
      }
      return !1;
    }, a = (_) => {
      for (var $ = _.childNodes.length - 1; $ >= 0; $--) {
        var y = _.childNodes[$];
        if (u(y) || a(y))
          return !0;
      }
      return !1;
    }, u = (_) => c(_) ? (o.value = !0, _.focus && _.focus(), o.value = !1, document.activeElement === _) : !1, c = (_) => {
      if (_.tabIndex > 0 || _.tabIndex === 0 && _.getAttribute("tabIndex") !== null)
        return !0;
      const $ = _;
      if ($.disabled || $.tabIndex === -1)
        return !1;
      switch (_.nodeName) {
        case "A":
          const y = _;
          return !!y.href && y.rel !== "ignore";
        case "INPUT":
          const T = _;
          return T.type !== "hidden" && T.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (_) => {
      const $ = _.querySelector("[first-focus]");
      $ && $.focus ? qP(() => {
        $.focus();
      }) : s(_);
    }, w = Ti();
    return {
      trapFocus: () => {
        o.value || setTimeout(() => {
          var _ = document.activeElement;
          if (e.value.contains(_)) {
            w.value = _;
            return;
          } else {
            switch (r(e.value, _)) {
              case "before":
                a(e.value);
                break;
              case "after":
                s(e.value);
                break;
              case "parent":
                f(e.value);
                break;
            }
            w.value = document.activeElement;
          }
        }, 0);
      },
      content: e,
      ignoreUtilFocusChanges: o,
      attemptToFocusFirst: f,
      focusLastDescendant: a,
      focusFirstDescendant: s,
      isFocusable: c,
      lastFocus: w
    };
  },
  computed: {
    ready() {
      return this.rendered && this.enable;
    }
  },
  watch: {
    ready: {
      immediate: !0,
      handler: "enableTrap"
    }
  },
  methods: {
    enableTrap(e) {
      e ? this.addFocusTrapEvents() : this.removeFocusTrapEvents();
    },
    addFocusTrapEvents() {
      document.addEventListener("blur", this.trapFocus, !0), this.content ? this.attemptToFocusFirst(this.content) : this.$nextTick(() => {
        this.content && this.attemptToFocusFirst(this.content);
      });
    },
    removeFocusTrapEvents() {
      typeof document < "u" && document.removeEventListener("blur", this.trapFocus, !0);
    }
  },
  mounted() {
    this.rendered = !0;
  },
  beforeUnmount() {
    this.removeFocusTrapEvents();
  }
}), JP = /* @__PURE__ */ hd("div", { tabindex: "0" }, null, -1), XP = {
  class: "focus-trap-content",
  ref: "content"
}, QP = /* @__PURE__ */ hd("div", { tabindex: "0" }, null, -1);
function eR(e, o, r, s, a, u) {
  return H_(), z_("div", null, [
    JP,
    hd("div", XP, [
      HP(e.$slots, "default")
    ], 512),
    QP
  ]);
}
var G_ = /* @__PURE__ */ Y_(KP, [["render", eR]]);
const tR = fd({
  emits: ["close"],
  props: {
    closeText: {
      type: String,
      required: !0
    },
    small: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    icon: () => bo
  },
  components: {
    FeatherIcon: G
  }
}), nR = ["aria-label"];
function rR(e, o, r, s, a, u) {
  const c = zP("FeatherIcon");
  return H_(), z_("a", {
    href: "#",
    class: YP(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = GP((f) => e.$emit("close"), ["prevent"]))
  }, [
    jP(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, nR);
}
var j_ = /* @__PURE__ */ Y_(tR, [["render", rR], ["__scopeId", "data-v-fc0f3f00"]]);
const Z_ = {
  title: "REQUIRED",
  close: "Close Dialog"
}, oR = {
  modelValue: {
    type: Boolean
  },
  relative: {
    type: Boolean,
    default: !1
  },
  hideTitle: {
    type: Boolean,
    default: !1
  },
  hideClose: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object,
    default: () => Z_,
    validator: (e) => !!e.title
  }
}, iR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
fd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: iR,
  props: oR,
  setup(e, o) {
    const r = Na(nv(e, "labels"), Z_), s = nv(e, "modelValue"), a = Ti(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = rv(() => !!o.slots.footer), f = rv(() => se("dialog-header"));
    e.relative ? PP(s, a) : q_(s), P_(s), ov(O_(s), () => {
      u();
    });
    const w = Ti(e.modelValue);
    return ov(w, (m) => {
      m ? o.emit("shown") : o.emit("hidden");
    }), WP({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: G_,
    DialogClose: j_
  }
});
var sR = Object.defineProperty, iv = Object.getOwnPropertySymbols, aR = Object.prototype.hasOwnProperty, lR = Object.prototype.propertyIsEnumerable, sv = (e, o, r) => o in e ? sR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ja = (e, o) => {
  for (var r in o || (o = {}))
    aR.call(o, r) && sv(e, r, o[r]);
  if (iv)
    for (var r of iv(o))
      lR.call(o, r) && sv(e, r, o[r]);
  return e;
};
const Za = window.Vue.defineComponent, av = window.Vue.toRef, lv = window.Vue.watch, uv = window.Vue.ref, cv = window.Vue.resolveComponent, Js = window.Vue.openBlock, dv = window.Vue.createBlock, uR = window.Vue.Teleport, fv = window.Vue.createElementBlock, ic = window.Vue.createVNode, hv = window.Vue.Transition, sc = window.Vue.withCtx, pv = window.Vue.createCommentVNode, cR = window.Vue.withDirectives, dR = window.Vue.normalizeStyle, fR = window.Vue.normalizeClass, wv = window.Vue.createElementVNode, hR = window.Vue.renderSlot, pR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var wR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const K_ = {
  title: "REQUIRED",
  close: "Close Dialog"
}, vR = {
  modelValue: {
    type: Boolean,
    default: !1,
    required: !0
  },
  width: {
    type: String,
    default: "auto",
    validator: (e) => e === "auto" ? !0 : /(\d*)(px|%|em|vw)/.test(e)
  },
  left: {
    type: Boolean,
    default: !1
  },
  labels: {
    type: Object,
    default: () => K_,
    validator: (e) => !!e.title
  }
}, mR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, _R = Za({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: mR,
  props: vR,
  setup(e, o) {
    const r = Na(av(e, "labels"), K_), s = av(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    q_(s), P_(s), lv(O_(s), () => {
      a();
    });
    const u = uv(), c = uv(!1);
    return lv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), ja({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: j_,
    FocusTrap: G_
  }
}), gR = {
  key: 0,
  class: "drawer-container feather-styles"
}, $R = {
  key: 0,
  class: "greyedOut"
}, yR = ["aria-label"], VR = { class: "slot" };
function bR(e, o, r, s, a, u) {
  const c = cv("dialog-close"), f = cv("focus-trap");
  return Js(), dv(uR, { to: "body" }, [
    e.modelValue ? (Js(), fv("div", gR, [
      ic(hv, { name: "greyOutShim" }, {
        default: sc(() => [
          e.modelValue ? (Js(), fv("div", $R)) : pv("", !0)
        ]),
        _: 1
      }),
      ic(hv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: sc(() => [
          cR((Js(), dv(f, {
            enable: e.modelValue,
            style: dR({ width: e.width }),
            key: "sect",
            class: fR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: sc(() => [
              wv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                wv("div", VR, [
                  hR(e.$slots, "default", {}, void 0, !0)
                ]),
                ic(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, yR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [pR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : pv("", !0)
  ]);
}
var J_ = /* @__PURE__ */ wR(_R, [["render", bR], ["__scopeId", "data-v-0a36e1dc"]]);
const CR = ja({
  label: {
    type: String,
    required: !0
  }
}, y_);
Za({
  name: "DrawerTab",
  props: CR,
  data() {
    return {
      showLabel: !1,
      showLabelTimeout: 0
    };
  },
  watch: {
    selected(e) {
      e && this.mouseLeave();
    }
  },
  methods: {
    mouseEnter() {
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Ir(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      kr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return V_(e);
  },
  components: {
    FeatherRipple: Jn
  }
});
const SR = ja({}, S_), ER = C_;
Za({
  emits: ER,
  model: b_,
  props: SR,
  setup(e, o) {
    return E_(e, o);
  }
});
const IR = ja({
  header: {
    type: String
  }
}, I_);
Za({
  name: "DrawerTabContent",
  props: IR,
  setup(e) {
    return k_(e);
  },
  directives: {
    MenuFocusLoop: NB
  }
});
const kR = window.Vue.defineComponent, X_ = window.Vue.createElementVNode, vv = window.Vue.createVNode, xR = window.Vue.renderList, AR = window.Vue.Fragment, hi = window.Vue.openBlock, ac = window.Vue.createElementBlock, mv = window.Vue.createBlock, BR = window.Vue.unref, TR = window.Vue.withCtx, DR = window.Vue.pushScopeId, NR = window.Vue.popScopeId, LR = (e) => (DR("data-v-c7c65659"), e = e(), NR(), e), MR = { class: "content" }, OR = /* @__PURE__ */ LR(() => /* @__PURE__ */ X_("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), PR = {
  key: 0,
  class: "situation-list"
}, lc = window.Vue.ref, _v = window.Vue.watch, RR = /* @__PURE__ */ kR({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = en(), a = lc(r.visible), u = () => {
      let m = s.situations;
      r.situationId !== 0 && (m = s.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = m, f.value = m;
    }, c = lc(s.situations), f = lc(s.situations);
    _v(r, () => {
      a.value = r.visible, u();
    }), _v(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (m) => {
      f.value = m;
    };
    return (m, _) => (hi(), mv(BR(J_), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: TR(() => [
        X_("div", MR, [
          OR,
          vv(Bo, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (hi(), ac("div", PR, [
            (hi(!0), ac(AR, null, xR(f.value, ($) => (hi(), ac("div", {
              class: "card",
              key: $.id
            }, [
              vv(Rm, {
                onClick: (y) => o("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (hi(), mv(To, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Q_ = /* @__PURE__ */ ce(RR, [["__scopeId", "data-v-c7c65659"]]), FR = window.Vue.defineComponent, gv = window.Vue.normalizeClass, ao = window.Vue.createElementVNode, Xs = window.Vue.unref, UR = window.Vue.createVNode, Qs = window.Vue.toDisplayString, WR = window.Vue.createTextVNode, qR = window.Vue.openBlock, HR = window.Vue.createElementBlock, zR = window.Vue.pushScopeId, YR = window.Vue.popScopeId, GR = (e) => (zR("data-v-e1e9b696"), e = e(), YR(), e), jR = { class: "alarmInfo" }, ZR = { class: "alarm-title" }, KR = /* @__PURE__ */ GR(() => /* @__PURE__ */ ao("strong", null, " Duration: ", -1)), JR = { class: "description" }, XR = /* @__PURE__ */ FR({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (qR(), HR("div", {
      class: gv(["alarm", { selected: r.selected }])
    }, [
      ao("div", jR, [
        ao("div", {
          class: gv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        UR(Xs(Ui), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        ao("div", ZR, Qs(e.alarm.nodeLabel) + " - " + Qs(e.alarm.id), 1)
      ]),
      ao("div", null, [
        KR,
        WR(" " + Qs(Xs(Da)(Xs(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      ao("div", JR, Qs(Xs(Pm)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const pd = /* @__PURE__ */ ce(XR, [["__scopeId", "data-v-e1e9b696"]]), QR = window.Vue.defineComponent, fa = window.Vue.createElementVNode, to = window.Vue.unref, e8 = window.Vue.toDisplayString, $v = window.Vue.withCtx, uc = window.Vue.createVNode, t8 = window.Vue.renderList, n8 = window.Vue.Fragment, pi = window.Vue.openBlock, cc = window.Vue.createElementBlock, yv = window.Vue.createBlock, r8 = window.Vue.pushScopeId, o8 = window.Vue.popScopeId, i8 = (e) => (r8("data-v-4bc80d4b"), e = e(), o8(), e), s8 = { class: "content" }, a8 = { class: "header" }, l8 = /* @__PURE__ */ i8(() => /* @__PURE__ */ fa("h4", null, "ADD ALARMS", -1)), u8 = {
  key: 0,
  class: "alarms-list"
}, ea = window.Vue.ref, Vv = window.Vue.watch, c8 = /* @__PURE__ */ QR({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = en(), a = ea(r.visible), u = ea([]), c = ea(["all"]), f = ea(s.unassignedAlarms);
    Vv(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Vv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      we.exports.includes(u.value, y) ? we.exports.remove(u.value, (T) => T === y) : u.value.push(y);
    }, m = () => {
      o("alarms-selected", u.value);
    }, _ = () => {
      let y = s.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (T) => c.value.includes(T.severity)
      )), f.value = y;
    }, $ = (y) => {
      f.value = y;
    };
    return (y, T) => (pi(), yv(to(J_), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (B) => a.value = B),
        T[1] || (T[1] = (B) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: $v(() => [
        fa("div", s8, [
          fa("div", a8, [
            l8,
            uc(to(fe), {
              class: "add-alarms-btn",
              onClick: m
            }, {
              default: $v(() => [
                fa("span", null, "Add " + e8(to(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          uc(Bo, {
            list: to(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (pi(), cc("div", u8, [
            (pi(!0), cc(n8, null, t8(f.value, (B) => (pi(), cc("div", {
              class: "card",
              key: B.id
            }, [
              uc(pd, {
                selected: to(we.exports.includes)(to(u), B.id),
                alarm: B,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (pi(), yv(To, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const d8 = /* @__PURE__ */ ce(c8, [["__scopeId", "data-v-4bc80d4b"]]), f8 = window.Vue.openBlock, h8 = window.Vue.createElementBlock, eg = window.Vue.createElementVNode;
var p8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const w8 = {}, v8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, m8 = /* @__PURE__ */ eg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), _8 = /* @__PURE__ */ eg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), g8 = [
  m8,
  _8
];
function $8(e, o) {
  return f8(), h8("svg", v8, g8);
}
var bv = /* @__PURE__ */ p8(w8, [["render", $8]]);
const y8 = window.Vue.defineComponent, Vt = window.Vue.createElementVNode, je = window.Vue.unref, tt = window.Vue.createVNode, wi = window.Vue.withCtx, V8 = window.Vue.renderList, Cv = window.Vue.Fragment, vi = window.Vue.openBlock, ta = window.Vue.createElementBlock, b8 = window.Vue.createBlock, C8 = window.Vue.pushScopeId, S8 = window.Vue.popScopeId, Do = (e) => (C8("data-v-524b0835"), e = e(), S8(), e), E8 = { class: "container" }, I8 = { class: "header" }, k8 = /* @__PURE__ */ Do(() => /* @__PURE__ */ Vt("div", { class: "title" }, "Alarms", -1)), x8 = /* @__PURE__ */ Do(() => /* @__PURE__ */ Vt("span", null, "Add Alarms", -1)), A8 = { class: "alarms-container" }, B8 = { class: "filters" }, T8 = { class: "list" }, D8 = { class: "row actions" }, N8 = /* @__PURE__ */ Do(() => /* @__PURE__ */ Vt("span", null, "Clear", -1)), L8 = /* @__PURE__ */ Do(() => /* @__PURE__ */ Vt("span", null, "Acknowledge", -1)), M8 = /* @__PURE__ */ Do(() => /* @__PURE__ */ Vt("span", null, "Move", -1)), O8 = /* @__PURE__ */ Do(() => /* @__PURE__ */ Vt("span", null, "Remove", -1)), P8 = { class: "section" }, R8 = {
  key: 0,
  class: "alarm-list"
}, na = window.Vue.ref, F8 = window.Vue.watch, U8 = window.Vue.reactive, W8 = window.Vue.markRaw, q8 = /* @__PURE__ */ y8({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = W8({
      Add: za,
      Delete: bv,
      MarkComplete: Sa,
      CheckCircle: _o,
      ExitToApp: Pc
    }), s = Ga(), a = en(), u = na(!1), c = na(["all"]), f = na(!1), w = na(!1), m = U8({
      selectedAlarms: [],
      alarms: o.alarms
    });
    F8(o, () => {
      c.value = ["all"], m.alarms = o.alarms, m.selectedAlarms = [], u.value = !1;
    });
    const _ = (A) => {
      m.selectedAlarms.includes(A) ? we.exports.remove(m.selectedAlarms, (O) => O == A) : m.selectedAlarms.push(A);
    }, $ = async (A) => {
      m.selectedAlarms.length ? (await bE(m.selectedAlarms, A), a.getSituation(o.situationId), m.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => m.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : m.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await Cw(
        o.situationId,
        m.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, B = async (A) => {
      y() && (await Cw(
        o.situationId,
        m.selectedAlarms
      ) ? await L(A, m.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, L = async (A, O) => {
      O.length ? await g_(A, O) ? a.getSituation(A) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, M = async (A) => {
      await L(o.situationId, A), w.value = !1;
    }, S = () => {
      m.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, N = (A) => {
      m.alarms = A;
    };
    return (A, O) => (vi(), ta(Cv, null, [
      Vt("div", E8, [
        Vt("div", I8, [
          k8,
          tt(je(fe), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (I) => w.value = !0)
          }, {
            default: wi(() => [
              tt(je(G), {
                icon: je(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              x8
            ]),
            _: 1
          })
        ]),
        Vt("div", A8, [
          Vt("div", B8, [
            tt(Bo, {
              list: o.alarms,
              onFilteredList: N,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Vt("div", T8, [
            Vt("div", D8, [
              tt(je(Ui), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              tt(je(fe), {
                onClick: O[2] || (O[2] = () => $("clear"))
              }, {
                default: wi(() => [
                  tt(je(G), {
                    icon: je(Sa),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  N8
                ]),
                _: 1
              }),
              tt(je(fe), {
                onClick: O[3] || (O[3] = () => $("ack"))
              }, {
                default: wi(() => [
                  tt(je(G), {
                    icon: je(_o),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  L8
                ]),
                _: 1
              }),
              tt(je(fe), { onClick: S }, {
                default: wi(() => [
                  tt(je(G), {
                    icon: je(Pc),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  M8
                ]),
                _: 1
              }),
              tt(je(fe), { onClick: T }, {
                default: wi(() => [
                  tt(je(G), {
                    icon: je(bv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  O8
                ]),
                _: 1
              })
            ]),
            Vt("div", P8, [
              m.alarms.length > 0 ? (vi(), ta("div", R8, [
                (vi(!0), ta(Cv, null, V8(m.alarms, (I) => (vi(), ta("div", {
                  key: I.id
                }, [
                  tt(bP, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (vi(), b8(To, { key: 1 }))
            ])
          ])
        ])
      ]),
      tt(Q_, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      tt(d8, {
        visible: w.value,
        onAlarmsSelected: M,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const H8 = /* @__PURE__ */ ce(q8, [["__scopeId", "data-v-524b0835"]]), z8 = window.Vue.defineComponent, Zt = window.Vue.createVNode, Dt = window.Vue.unref, dc = window.Vue.normalizeClass, ra = window.Vue.toDisplayString, mi = window.Vue.openBlock, _i = window.Vue.createElementBlock, Sv = window.Vue.createCommentVNode, Y8 = window.Vue.withCtx, Mt = window.Vue.createElementVNode, G8 = window.Vue.Fragment, j8 = window.Vue.pushScopeId, Z8 = window.Vue.popScopeId, K8 = (e) => (j8("data-v-eab7334d"), e = e(), Z8(), e), J8 = { class: "section" }, X8 = { class: "action-section" }, Q8 = { class: "btn-row" }, e5 = { key: 0 }, t5 = { key: 1 }, n5 = {
  key: 0,
  class: "situation-detail"
}, r5 = { class: "situation-info" }, o5 = { class: "id" }, i5 = ["innerHTML"], s5 = /* @__PURE__ */ K8(() => /* @__PURE__ */ Mt("p", null, null, -1)), a5 = { class: "boxes" }, l5 = { class: "parameters" }, u5 = { class: "section memo-boxes" }, c5 = { key: 0 }, Ev = window.Vue.ref, d5 = window.Vue.watch, f5 = /* @__PURE__ */ z8({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = Ga(), s = en(), a = Pe.REJECTED, u = Ev(o.situationInfo.status), c = Ev(o.situationInfo);
    d5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = async (w) => {
      var _;
      await __(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, m) => {
      var _, $, y, T, B, L, M, S, N, A, O, I;
      return mi(), _i(G8, null, [
        Mt("div", J8, [
          Mt("div", X8, [
            Zt(B_, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Mt("div", Q8, [
              Zt(Dt(fe), {
                class: dc(["btn", { rejected: u.value == Dt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (F) => f(Dt(a)))
              }, {
                default: Y8(() => [
                  Zt(Dt(G), {
                    icon: Dt(Bm),
                    "aria-hidden": "true",
                    class: dc(["icon reject", { rejected: u.value == Dt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Dt(a) ? (mi(), _i("span", e5, ra(Dt(a)), 1)) : (mi(), _i("span", t5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (mi(), _i("div", n5, [
            Mt("div", {
              class: dc(["severity-line", [`${($ = (_ = c.value) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
            }, null, 2),
            Mt("div", r5, [
              Mt("div", o5, [
                Mt("div", null, " Situation - " + ra((y = c.value) == null ? void 0 : y.id) + " - " + ra(c.value.alarms.length) + " alarm(s) affects " + ra(Dt(we.exports.size)(Dt(we.exports.groupBy)((T = c.value) == null ? void 0 : T.alarms, "nodeId"))) + " node(s) ", 1),
                Zt(A_, {
                  severity: (B = c.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              Mt("span", {
                innerHTML: c.value.description
              }, null, 8, i5),
              s5,
              Mt("div", a5, [
                Zt(ju, {
                  label: "First Event",
                  info: Dt(fn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                Zt(ju, {
                  label: "Last Event",
                  info: Dt(fn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                Zt(ju, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Mt("div", l5, [
              Zt(SO, {
                alarms: (L = c.value) == null ? void 0 : L.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Sv("", !0),
          Mt("div", u5, [
            Zt(Ea, {
              id: (M = c.value) == null ? void 0 : M.id,
              situationId: (S = c.value) == null ? void 0 : S.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (N = c.value) == null ? void 0 : N.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Zt(Ea, {
              id: (A = c.value) == null ? void 0 : A.id,
              situationId: (O = c.value) == null ? void 0 : O.id,
              label: "Journal Memo",
              type: "journal",
              memo: (I = c.value) == null ? void 0 : I.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (mi(), _i("div", c5, [
          Zt(H8, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Sv("", !0)
      ], 64);
    };
  }
});
const h5 = /* @__PURE__ */ ce(f5, [["__scopeId", "data-v-eab7334d"]]);
var p5 = Object.defineProperty, w5 = Object.defineProperties, v5 = Object.getOwnPropertyDescriptors, Iv = Object.getOwnPropertySymbols, m5 = Object.prototype.hasOwnProperty, _5 = Object.prototype.propertyIsEnumerable, kv = (e, o, r) => o in e ? p5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Rc = (e, o) => {
  for (var r in o || (o = {}))
    m5.call(o, r) && kv(e, r, o[r]);
  if (Iv)
    for (var r of Iv(o))
      _5.call(o, r) && kv(e, r, o[r]);
  return e;
}, g5 = (e, o) => w5(e, v5(o));
const tg = window.Vue.defineComponent, Cr = window.Vue.resolveComponent, ha = window.Vue.openBlock, xv = window.Vue.createBlock, pa = window.Vue.mergeProps, Sr = window.Vue.withCtx, ng = window.Vue.createElementBlock, $5 = window.Vue.Fragment, y5 = window.Vue.renderList, V5 = window.Vue.createTextVNode, b5 = window.Vue.toDisplayString, C5 = window.Vue.computed, Av = window.Vue.toRef, gi = window.Vue.createVNode, Bv = window.Vue.toHandlers, S5 = window.Vue.renderSlot, E5 = window.Vue.normalizeClass, I5 = window.Vue.createElementVNode;
var rg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const k5 = tg({
  inheritAttrs: !0,
  emits: ["select"],
  props: {
    label: {
      type: String,
      required: !0
    },
    options: {
      type: Array,
      default: () => []
    },
    textProp: {
      type: String,
      default: "_text"
    },
    activeIndex: {
      type: Number,
      required: !0
    }
  },
  computed: {
    activeId() {
      return se("feather-select-active");
    },
    listAttrs() {
      return {
        tabindex: -1,
        role: "listbox",
        "aria-label": this.label,
        "aria-activedescendant": this.activeId
      };
    }
  },
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        Mi(o, this.$refs.list.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      return this.activeIndex === e;
    },
    getId(e) {
      return e === this.activeIndex ? this.activeId : null;
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    FeatherList: td,
    FeatherListItem: Fi
  }
});
function x5(e, o, r, s, a, u) {
  const c = Cr("FeatherListItem"), f = Cr("FeatherList");
  return ha(), xv(f, pa(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Sr(() => [
      (ha(!0), ng($5, null, y5(e.options, (w, m) => (ha(), xv(c, {
        key: w[e.textProp],
        "as-li": "",
        id: e.getId(m),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(m),
        selected: e.isSelected(m),
        onClick: (_) => e.select(w)
      }, {
        default: Sr(() => [
          V5(b5(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var A5 = /* @__PURE__ */ rg(k5, [["render", x5], ["__scopeId", "data-v-eae820da"]]);
const B5 = g5(Rc(Rc({}, Ma), ko), {
  modelValue: {
    type: Object,
    required: !1
  },
  textProp: {
    type: String,
    default: "_text"
  },
  options: {
    type: Array,
    default: () => []
  },
  schema: {
    type: Object,
    required: !1
  }
}), T5 = {
  "update:modelValue": (e) => !0
}, D5 = tg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: T5,
  props: B5,
  setup(e, o) {
    xo(e), Oa(e);
    const r = C5(() => se("feather-select-input")), { validate: s } = Eo(r, Av(e, "modelValue"), e.label, e.schema, Av(e, "error"));
    return Rc({
      inputId: r,
      validate: s
    }, Io(o.attrs));
  },
  data() {
    return {
      hasFocus: !1,
      showMenu: !1,
      charsSoFar: "",
      internalValue: this.modelValue,
      delayTimeout: -1
    };
  },
  computed: {
    showClear() {
      return !!this.modelValue;
    },
    subTextId() {
      return se("feather-select-description");
    },
    inputAttrs() {
      return {
        id: this.inputId,
        "aria-haspopup": "listbox",
        "aria-invalid": this.$attrs["aria-invalid"] || !!this.error,
        value: this.valueText,
        readonly: !0,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (this.$attrs["aria-describedby"] || "").split(" ").concat([this.subTextId]).filter(Boolean).join(" ")
      };
    },
    inputListeners() {
      return {
        focus: this.handleInputFocus,
        blur: this.handleInputBlur,
        keydown: this.handleKeyDown
      };
    },
    raised() {
      return !!this.internalValue || this.hasFocus;
    },
    valueText() {
      return this.internalValue && this.internalValue[this.textProp] ? this.internalValue[this.textProp] : "";
    },
    activeIndex() {
      if (this.internalValue && this.internalValue[this.textProp]) {
        const e = this.internalValue, o = this.options.filter((r) => r[this.textProp] === e[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => Wa
  },
  watch: {
    showMenu(e) {
      e ? (this.internalValue || this.select(this.options[0]), this.$nextTick(() => {
        this.$refs.input.focus();
      })) : this.emitSelection();
    },
    modelValue(e) {
      this.internalValue = e;
    }
  },
  methods: {
    closeMenu() {
      this.showMenu = !1, this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handleClear() {
      this.handleSelect(void 0), this.emitSelection();
    },
    handleInputFocus() {
      this.disabled || this.hasFocus || (this.hasFocus = !0);
    },
    handleInputBlur() {
      this.hasFocus && !this.showMenu && (this.hasFocus = !1, this.validate());
    },
    handleTriggerClick() {
      this.disabled || (this.showMenu = !0, this.hasFocus = !0);
    },
    handleOutsideClick() {
      this.showMenu = !1, this.hasFocus = !1;
    },
    handleSelect(e) {
      this.select(e), this.showMenu = !1, this.$refs.input.focus();
    },
    select(e) {
      this.internalValue = e;
    },
    emitSelection() {
      this.$emit("update:modelValue", this.internalValue);
    },
    handleKeyDown(e) {
      if (e.keyCode === Q.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === Q.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === Q.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === Q.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === Q.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === Q.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      kr(this.delayTimeout), this.delayTimeout = Ir(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: La,
    InputSubText: So,
    FeatherMenu: Km,
    List: A5,
    FeatherIcon: G
  }
});
function N5(e, o, r, s, a, u) {
  const c = Cr("FeatherIcon"), f = Cr("InputWrapper"), w = Cr("List"), m = Cr("FeatherMenu"), _ = Cr("InputSubText");
  return ha(), ng("div", pa(e.inherittedAttrs, { class: "feather-select-container" }), [
    gi(m, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Sr(($) => [
        gi(f, pa({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, Bv($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Sr(() => [
            S5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Sr(() => [
            gi(c, {
              class: E5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Sr(() => [
            I5("input", pa(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Bv(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Sr(() => [
        gi(w, {
          ref: "list",
          "data-ref-id": "feather-select-list",
          label: e.label,
          options: e.options,
          "text-prop": e.textProp,
          "active-index": e.activeIndex,
          onSelect: e.handleSelect,
          onKeydown: e.handleKeyDown
        }, null, 8, ["label", "options", "text-prop", "active-index", "onSelect", "onKeydown"])
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick"]),
    gi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var L5 = /* @__PURE__ */ rg(D5, [["render", N5], ["__scopeId", "data-v-ecb32d90"]]);
const M5 = window.Vue.openBlock, O5 = window.Vue.createElementBlock, og = window.Vue.createElementVNode;
var P5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const R5 = {}, F5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, U5 = /* @__PURE__ */ og("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), W5 = /* @__PURE__ */ og("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), q5 = [
  U5,
  W5
];
function H5(e, o) {
  return M5(), O5("svg", F5, q5);
}
var z5 = /* @__PURE__ */ P5(R5, [["render", H5]]);
const wa = window.Vue.openBlock, Fc = window.Vue.createElementBlock, ig = window.Vue.createElementVNode, Y5 = window.Vue.defineComponent, gr = window.Vue.ref, G5 = window.Vue.provide, Tv = window.Vue.computed, j5 = window.Vue.onUnmounted, Dv = window.Vue.toRef, Z5 = window.Vue.resolveComponent, K5 = window.Vue.Fragment, J5 = window.Vue.createBlock, X5 = window.Vue.Teleport, Nv = window.Vue.createVNode, Q5 = window.Vue.Transition, e7 = window.Vue.withCtx, t7 = window.Vue.normalizeClass, n7 = window.Vue.normalizeStyle, r7 = window.Vue.toDisplayString, o7 = window.Vue.createCommentVNode, i7 = window.Vue.renderSlot, fc = window.Vue.nextTick;
var sg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const s7 = {}, a7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, l7 = /* @__PURE__ */ ig("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), u7 = [
  l7
];
function c7(e, o) {
  return wa(), Fc("svg", a7, u7);
}
var d7 = /* @__PURE__ */ sg(s7, [["render", c7]]), He = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(He || {}), xn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(xn || {});
const f7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(He.top), a >= o.height + s && c.push(He.bottom);
  const f = [];
  u >= o.width + s && f.push(He.right), e.left >= o.width + s && f.push(He.left);
  let w = [...f, ...c];
  return (r === He.top || r === He.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, h7 = (e, o, r, s, a = 28) => {
  if (e === He.left || e === He.right)
    return xn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, m = c + o.width / 2, _ = r.width - a, $ = r.width / 2;
  return w >= $ && m >= $ && f.push(xn.center), m >= _ && f.push(xn.left), w >= _ && f.push(xn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, p7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => He.top
  },
  pointerAlignment: {
    type: String,
    default: () => xn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, w7 = Y5({
  props: p7,
  setup(e) {
    const o = gr(!1), r = gr(!1), s = se("feather-tooltip-trigger"), a = se("feather-tooltip"), u = "data-feather-tooltip";
    G5("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      kr(c), o.value || (c = Ir(L, e.enterDelay));
    }, w = () => {
      kr(c), c = Ir(M, e.exitDelay);
    }, m = (re) => {
      re.keyCode === Q.ESCAPE && (re.preventDefault(), M(!0));
    }, _ = Tv(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: m
    }, y = gr(document), T = Zm(y, () => M(!0));
    j5(() => M(!0));
    const B = () => document.getElementById(a), L = () => {
      r.value = !1, o.value = !0, fc(() => {
        const re = B();
        ae(re), o.value = !1, fc(() => {
          r.value = !0, o.value = !0, T.value = !0;
        });
      });
    }, M = (re = !1) => {
      F.value = "", I.value = "", P.value = "", q.value = "", o.value = !1, re && (r.value = !1), T.value = !1;
    }, S = Dv(e, "placement"), N = Dv(e, "pointerAlignment"), A = 8, O = 24, I = gr(""), F = gr(""), P = gr(""), q = gr(""), ve = Tv(() => q.value ? "p-" + q.value : !1), ae = (re) => {
      const K = document.querySelector(`[${u}=${s}]`);
      if (!K) {
        console.log("trigger not found");
        return;
      }
      fc(() => {
        const oe = K.getBoundingClientRect(), Ae = re.getBoundingClientRect(), me = f7(oe, Ae, S.value, A), Re = h7(me, oe, Ae, N.value, O);
        P.value = Re.toString(), q.value = me.toString();
        let Fe = 0, Je = 0;
        if ((me === He.left || me === He.right) && (Fe = oe.top + oe.height / 2 - Ae.height / 2, me === He.left && (Je = oe.left - Ae.width - A), me === He.right && (Je = oe.right)), me === He.top || me === He.bottom) {
          Fe = oe.top - Ae.height - A, me === He.bottom && (Fe = oe.bottom);
          const No = oe.left + oe.width / 2;
          switch (Re) {
            case xn.center:
              Je = No - Ae.width / 2;
              break;
            case xn.left:
              Je = No - O;
              break;
            case xn.right:
              Je = No - Ae.width + O;
              break;
          }
        }
        I.value = Fe.toString() + "px", F.value = Je.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: o,
      animate: r,
      alignmentClass: P,
      placementClass: ve,
      top: I,
      left: F,
      tooltipID: a
    };
  },
  components: {
    Pointer: d7
  }
}), v7 = ["id"];
function m7(e, o, r, s, a, u) {
  const c = Z5("Pointer");
  return wa(), Fc(K5, null, [
    (wa(), J5(X5, { to: "body" }, [
      Nv(Q5, { css: e.animate }, {
        default: e7(() => [
          e.show ? (wa(), Fc("div", {
            key: 0,
            class: t7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: n7({ left: e.left, top: e.top })
          }, [
            ig("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, r7(e.title), 9, v7),
            Nv(c, { class: "tooltip-pointer" })
          ], 6)) : o7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    i7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Lv = /* @__PURE__ */ sg(w7, [["render", m7], ["__scopeId", "data-v-3da6b22e"]]);
const _7 = window.Vue.defineComponent, hc = window.Vue.normalizeStyle, pc = window.Vue.createElementVNode, $i = window.Vue.unref, Mv = window.Vue.toHandlers, Ov = window.Vue.mergeProps, Pv = window.Vue.withCtx, Rv = window.Vue.createVNode, g7 = window.Vue.renderList, $7 = window.Vue.Fragment, yi = window.Vue.openBlock, Vi = window.Vue.createElementBlock, Fv = window.Vue.normalizeClass, Uv = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const y7 = { class: "row" }, V7 = /* @__PURE__ */ _7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (yi(), Vi("div", y7, [
      pc("div", {
        class: "line-gray",
        style: hc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Rv($i(Lv), {
        title: $i(fn)(e.alarm.firstEventTime)
      }, {
        default: Pv(({ attrs: f, on: w }) => [
          pc("div", Ov({ class: "circle" }, f, Mv(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (yi(!0), Vi($7, null, g7(o.events, (f, w) => (yi(), Vi("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (yi(), Vi("div", {
          key: 0,
          class: Fv(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: hc({
            width: s(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Uv("", !0),
        Rv($i(Lv), {
          title: $i(fn)(e.alarm.firstEventTime)
        }, {
          default: Pv(({ attrs: m, on: _ }) => [
            o.events[w + 1] ? (yi(), Vi("div", Ov({ key: 0 }, m, Mv(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Uv("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      pc("div", {
        class: Fv(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: hc({
          width: s(e.events[e.events.length - 1].createTime, $i(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const b7 = /* @__PURE__ */ ce(V7, [["__scopeId", "data-v-3341d12d"]]), C7 = window.Vue.openBlock, S7 = window.Vue.createElementBlock, ag = window.Vue.createElementVNode;
var E7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const I7 = {}, k7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, x7 = /* @__PURE__ */ ag("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), A7 = /* @__PURE__ */ ag("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), B7 = [
  x7,
  A7
];
function T7(e, o) {
  return C7(), S7("svg", k7, B7);
}
var D7 = /* @__PURE__ */ E7(I7, [["render", T7]]);
const N7 = window.Vue.defineComponent, Uc = window.Vue.createElementVNode, L7 = window.Vue.renderList, Wv = window.Vue.Fragment, wc = window.Vue.openBlock, vc = window.Vue.createElementBlock, M7 = window.Vue.normalizeClass, O7 = window.Vue.unref, qv = window.Vue.toDisplayString, P7 = window.Vue.pushScopeId, R7 = window.Vue.popScopeId, F7 = (e) => (P7("data-v-2e087f7b"), e = e(), R7(), e), U7 = /* @__PURE__ */ F7(() => /* @__PURE__ */ Uc("strong", null, "Events:", -1)), W7 = /* @__PURE__ */ N7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (wc(), vc(Wv, null, [
      U7,
      (wc(!0), vc(Wv, null, L7(o.events, (a) => (wc(), vc("div", {
        class: "event-description",
        key: a.id
      }, [
        Uc("div", {
          class: M7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Uc("div", null, qv(O7(fn)(a.createTime)) + " - " + qv(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const q7 = /* @__PURE__ */ ce(W7, [["__scopeId", "data-v-2e087f7b"]]), H7 = window.Vue.defineComponent, z7 = window.Vue.normalizeClass, yt = window.Vue.createElementVNode, no = window.Vue.toDisplayString, lt = window.Vue.unref, ro = window.Vue.createVNode, lg = window.Vue.createTextVNode, Y7 = window.Vue.renderList, Hv = window.Vue.Fragment, En = window.Vue.openBlock, $r = window.Vue.createElementBlock, zv = window.Vue.createBlock, oa = window.Vue.createCommentVNode, G7 = window.Vue.normalizeStyle, j7 = window.Vue.pushScopeId, Z7 = window.Vue.popScopeId, K7 = (e) => (j7("data-v-01717d0d"), e = e(), Z7(), e), J7 = { class: "section detail" }, X7 = { class: "id" }, Q7 = {
  key: 0,
  class: "section"
}, e6 = /* @__PURE__ */ K7(() => /* @__PURE__ */ yt("div", { class: "id" }, "Alarms", -1)), t6 = { class: "action-btns" }, n6 = { class: "zoom" }, r6 = /* @__PURE__ */ lg(" Zoom "), o6 = { class: "times" }, i6 = {
  key: 0,
  class: "timeline-container"
}, s6 = { class: "alarm-id" }, a6 = {
  key: 0,
  class: "panel"
}, Hn = window.Vue.ref, l6 = window.Vue.watch, u6 = /* @__PURE__ */ H7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, I;
    const o = e, r = en(), s = Hn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Hn(a[0]), c = Hn(o.width), f = Hn(o.width), w = Hn(new Date().getTime()), m = () => {
      var F, P;
      if (!o.situation.events) {
        const q = (P = (F = o.situation) == null ? void 0 : F.alarms) == null ? void 0 : P.map((ve) => ve.id);
        r.getEvents(o.situation.id, q);
      }
    };
    m();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = Hn(o.situation.alarms), y = Hn(
      ((I = we.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), T = Hn(_());
    l6(o, () => {
      var F, P;
      y.value = ((P = we.exports.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : P.firstEventTime) || new Date().getTime(), m(), c.value = f.value, T.value = _(), $.value = o.situation.alarms, u.value = a[0];
    });
    const B = (F) => {
      if ((F == null ? void 0 : F.id) === 1 && ($.value = o.situation.alarms), (F == null ? void 0 : F.id) === 2) {
        const P = we.exports.groupBy($.value, "severity"), q = [
          ...P.CRITICAL || [],
          ...P.MAJOR || [],
          ...P.MINOR || [],
          ...P.WARNING || [],
          ...P.NORMAL || [],
          ...P.CLEARED || [],
          ...P.INDETERMINATE || []
        ];
        $.value = q.filter((ve) => ve);
      }
      if ((F == null ? void 0 : F.id) === 3) {
        const P = we.exports.reverse(
          we.exports.sortBy(
            o.situation.alarms,
            (q) => Number(q.lastEventTime) - Number(q.firstEventTime)
          )
        );
        $.value = P;
      }
    }, L = () => {
      c.value += 100, T.value = _();
    }, M = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, N = (F) => {
      s.value = F;
    }, A = () => {
      s.value = 0;
    };
    return (F, P) => {
      var q, ve;
      return En(), $r(Hv, null, [
        yt("div", J7, [
          yt("div", {
            class: z7(["severity-line", [`${(ve = (q = o.situation) == null ? void 0 : q.severity) == null ? void 0 : ve.toLowerCase()}-bg dark`]])
          }, null, 2),
          yt("div", null, [
            yt("div", X7, "Situation " + no(o.situation.id), 1),
            yt("div", null, " Duration: " + no(lt(Da)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (En(), $r("div", Q7, [
          e6,
          yt("div", t6, [
            ro(lt(L5), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                P[0] || (P[0] = (ae) => u.value = ae),
                B
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            yt("div", n6, [
              r6,
              yt("div", null, [
                ro(lt(G), {
                  icon: lt(z5),
                  class: "zoom-icon",
                  onClick: L
                }, null, 8, ["icon"]),
                ro(lt(G), {
                  icon: lt(d_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                ro(lt(G), {
                  icon: lt(D7),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (En(), $r("div", {
            key: 0,
            class: "alarms",
            style: G7({
              width: f.value + 50 + "px"
            })
          }, [
            yt("div", o6, [
              yt("div", null, no(lt(fn)(y.value)), 1),
              yt("div", null, no(lt(fn)(w.value)), 1)
            ]),
            e.situation.events ? (En(), $r("div", i6, [
              (En(!0), $r(Hv, null, Y7($.value, (ae) => (En(), $r("div", {
                class: "timeline",
                key: ae.id
              }, [
                yt("div", s6, [
                  lg(no(ae.nodeLabel) + " - " + no(ae.id) + " ", 1),
                  s.value === ae.id ? (En(), zv(lt(G), {
                    key: 0,
                    icon: lt(Wa),
                    class: "zoom-icon expand",
                    onClick: A
                  }, null, 8, ["icon"])) : (En(), zv(lt(G), {
                    key: 1,
                    icon: lt(Um),
                    class: "zoom-icon expand",
                    onClick: () => N(ae.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                ro(b7, {
                  alarm: ae,
                  proportion: T.value,
                  "min-start": y.value,
                  events: o.situation.events[ae.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === ae.id ? (En(), $r("div", a6, [
                  ro(q7, {
                    events: o.situation.events[ae.id]
                  }, null, 8, ["events"])
                ])) : oa("", !0)
              ]))), 128))
            ])) : oa("", !0)
          ], 4)) : oa("", !0)
        ])) : oa("", !0)
      ], 64);
    };
  }
});
const c6 = /* @__PURE__ */ ce(u6, [["__scopeId", "data-v-01717d0d"]]), d6 = window.Vue.openBlock, f6 = window.Vue.createElementBlock, h6 = window.Vue.createElementVNode;
var p6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const w6 = {}, v6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, m6 = /* @__PURE__ */ h6("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), _6 = [
  m6
];
function g6(e, o) {
  return d6(), f6("svg", v6, _6);
}
var wo = /* @__PURE__ */ p6(w6, [["render", g6]]);
const ug = window.Vue.defineComponent, mc = window.Vue.ref, $6 = window.Vue.toRef, _c = window.Vue.inject, Yv = window.Vue.watch, y6 = window.Vue.nextTick, Gv = window.Vue.openBlock, jv = window.Vue.createElementBlock, gc = window.Vue.createElementVNode, V6 = window.Vue.normalizeClass, Zv = window.Vue.renderSlot, Kv = window.Vue.createCommentVNode, $c = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var b6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const C6 = {
  modelValue: {
    type: Boolean,
    default: !1
  },
  center: {
    type: Boolean,
    default: !1
  },
  timeout: {
    type: Number,
    default: 4e3
  },
  error: {
    type: Boolean,
    default: !1
  }
}, S6 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, E6 = ug({
  emits: S6,
  props: C6,
  setup(e, o) {
    const r = mc(), s = mc(!1), a = mc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = $6(e, "modelValue"), f = _c("queueSnackbar", !1), w = _c("unqueueSnackbar", !1), m = _c("nextSnackbar", () => {
    }), _ = (L, M) => {
      let S, N, A = M;
      const O = () => {
        !S || (kr(S), S = 0, A -= Date.now() - N);
      }, I = () => {
        S || (N = Date.now(), S = Ir(L, A));
      };
      return I(), { pause: O, resume: I };
    }, $ = () => {
      s.value = !1, o.emit("closed"), m && m();
    }, y = (L) => {
      L.keyCode === Q.ESCAPE && (a.value = !1);
    }, T = () => {
      r.value.pause();
    }, B = () => {
      a.value && r.value.resume();
    };
    return Yv(c, (L) => {
      L ? y6(() => {
        f === !1 ? a.value = L : f(u, a);
      }) : w === !1 ? a.value = L : w(u);
    }, { immediate: !0 }), Yv(a, (L) => {
      L ? (s.value = !0, r.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), T());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: $,
      keyPressed: y,
      stopTimer: T,
      resumeTimer: B
    };
  }
}), I6 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, k6 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, x6 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, A6 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function B6(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (Gv(), jv("div", I6, [
    gc("div", {
      class: V6(["feather-snackbar", {
        "fade-in": e.internalValue,
        "fade-out": e.contentShow && !e.internalValue,
        center: e.center,
        error: e.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: o[0] || (o[0] = (...c) => e.closed && e.closed(...c)),
      onKeydown: o[1] || (o[1] = (...c) => e.keyPressed && e.keyPressed(...c)),
      onMouseover: o[2] || (o[2] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onMouseleave: o[3] || (o[3] = (...c) => e.resumeTimer && e.resumeTimer(...c)),
      onFocusin: o[4] || (o[4] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onFocusout: o[5] || (o[5] = (...c) => e.resumeTimer && e.resumeTimer(...c))
    }, [
      gc("div", k6, [
        e.contentShow ? (Gv(), jv("div", x6, [
          Zv(e.$slots, "default", {}, void 0, !0)
        ])) : Kv("", !0)
      ]),
      gc("div", A6, [
        Zv(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Kv("", !0);
}
var Ka = /* @__PURE__ */ b6(E6, [["render", B6], ["__scopeId", "data-v-5cf64a62"]]);
const T6 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
ug({
  props: T6,
  setup() {
    let e, o = [];
    const r = () => {
      e && (e.val.value = !0);
    }, s = (c, f) => {
      const w = { id: c, val: f };
      e ? o.push(w) : (e = w, r());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : o = o.filter((f) => f.id != c);
    }, u = () => {
      o.length ? (e = o.shift(), r()) : e = void 0;
    };
    return $c("queueSnackbar", s), $c("unqueueSnackbar", a), $c("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const D6 = window.Vue.defineComponent, xe = window.Vue.unref, ut = window.Vue.createVNode, Oi = window.Vue.createElementVNode, Nt = window.Vue.withCtx, oo = window.Vue.openBlock, Jv = window.Vue.createBlock, N6 = window.Vue.createCommentVNode, Ja = window.Vue.createTextVNode, ia = window.Vue.createElementBlock, Xv = window.Vue.toDisplayString, L6 = window.Vue.pushScopeId, M6 = window.Vue.popScopeId, wd = (e) => (L6("data-v-1f2913d3"), e = e(), M6(), e), O6 = { id: "cont" }, P6 = { class: "btns-navigation" }, R6 = /* @__PURE__ */ wd(() => /* @__PURE__ */ Oi("span", null, "Situation List", -1)), F6 = /* @__PURE__ */ wd(() => /* @__PURE__ */ Oi("span", null, "Show Previous Situation ", -1)), U6 = /* @__PURE__ */ wd(() => /* @__PURE__ */ Oi("span", null, "Show Next Situation", -1)), W6 = { key: 1 }, q6 = {
  key: 0,
  class: "detail"
}, H6 = /* @__PURE__ */ Ja("Details"), z6 = /* @__PURE__ */ Ja("Metrics"), Y6 = {
  key: 1,
  class: "noSituation"
}, G6 = /* @__PURE__ */ Ja("dismiss"), yr = window.Vue.ref, Qv = window.Vue.watch, j6 = window.Vue.onMounted, Z6 = window.VueRouter.useRoute, K6 = /* @__PURE__ */ D6({
  __name: "SituationDetail",
  setup(e) {
    const o = er(), r = Z6(), s = parseInt(r.params.id), a = yr(s), u = en(), c = Ga(), f = yr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = yr(), m = yr(), _ = yr(!0), $ = yr(
      u.filteredSituations.findIndex((M) => M === a.value)
    ), y = yr(!1);
    Qv(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), j6(() => {
      var S;
      const M = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      m.value = M - 90;
    });
    const T = () => {
      o.push({
        name: "situations"
      });
    }, B = (M) => {
      const S = $.value, N = u.filteredSituations[S + M];
      o.push({
        name: "situationDetail",
        params: {
          id: N
        }
      });
    };
    Qv(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((M) => M == a.value);
    }), c.$subscribe((M, S) => {
      y.value = S.showError;
    });
    const L = (M) => {
      f.value = M || 0;
    };
    return (M, S) => (oo(), ia("div", O6, [
      Oi("div", P6, [
        ut(xe(fe), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: Nt(() => [
            ut(xe(G), {
              icon: xe(wo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            R6
          ]),
          _: 1
        }),
        Oi("div", null, [
          ut(xe(fe), {
            disabled: !xe(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => B(-1))
          }, {
            default: Nt(() => [
              ut(xe(G), {
                icon: xe(wo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              F6
            ]),
            _: 1
          }, 8, ["disabled"]),
          ut(xe(fe), {
            disabled: !xe(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => B(1))
          }, {
            default: Nt(() => [
              U6,
              ut(xe(G), {
                icon: xe(wo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (oo(), Jv(xe(od), {
        key: 0,
        class: "spinner"
      })) : (oo(), ia("div", W6, [
        w.value ? (oo(), ia("div", q6, [
          ut(xe(Q3), { "onUpdate:modelValue": L }, {
            tabs: Nt(() => [
              ut(xe(Aw), null, {
                default: Nt(() => [
                  H6
                ]),
                _: 1
              }),
              ut(xe(Aw), null, {
                default: Nt(() => [
                  z6
                ]),
                _: 1
              })
            ]),
            default: Nt(() => [
              ut(xe(Bw), { class: "panel" }, {
                default: Nt(() => [
                  ut(h5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ut(xe(Bw), { class: "panel" }, {
                default: Nt(() => [
                  m.value && f.value == 1 ? (oo(), Jv(c6, {
                    key: 0,
                    situation: w.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : N6("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (oo(), ia("div", Y6, " Error. The situation " + Xv(xe(s)) + " does not exist. ", 1))
      ])),
      ut(xe(Ka), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (N) => y.value = N),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Nt(() => [
          ut(xe(fe), {
            onClick: S[3] || (S[3] = (N) => y.value = !1),
            text: ""
          }, {
            default: Nt(() => [
              G6
            ]),
            _: 1
          })
        ]),
        default: Nt(() => [
          Ja(Xv(xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const J6 = /* @__PURE__ */ ce(K6, [["__scopeId", "data-v-1f2913d3"]]), X6 = window.Vue.defineComponent, qe = window.Vue.unref, Lt = window.Vue.createVNode, rt = window.Vue.createElementVNode, io = window.Vue.withCtx, so = window.Vue.openBlock, bi = window.Vue.createElementBlock, Q6 = window.Vue.createCommentVNode, eF = window.Vue.toDisplayString, vd = window.Vue.createTextVNode, tF = window.Vue.normalizeClass, nF = window.Vue.renderList, rF = window.Vue.Fragment, oF = window.Vue.createBlock, iF = window.Vue.pushScopeId, sF = window.Vue.popScopeId, Wi = (e) => (iF("data-v-1a57a9f3"), e = e(), sF(), e), aF = { class: "container" }, lF = /* @__PURE__ */ Wi(() => /* @__PURE__ */ rt("span", null, "Situation List", -1)), uF = /* @__PURE__ */ Wi(() => /* @__PURE__ */ rt("h2", null, "New Situation", -1)), cF = { class: "form" }, dF = { class: "fields" }, fF = {
  key: 0,
  class: "errorList"
}, hF = { class: "footer" }, pF = /* @__PURE__ */ Wi(() => /* @__PURE__ */ rt("span", null, "Clear", -1)), wF = /* @__PURE__ */ Wi(() => /* @__PURE__ */ rt("span", null, "Add Situation", -1)), vF = { class: "alarm-column" }, mF = { class: "header-alarms" }, _F = /* @__PURE__ */ Wi(() => /* @__PURE__ */ rt("h3", null, "Add Unassociated Alarms", -1)), gF = /* @__PURE__ */ vd(" Total Alarms Added: "), $F = { class: "total" }, yF = { class: "list" }, VF = { class: "filters" }, bF = {
  key: 0,
  class: "alarms"
}, CF = /* @__PURE__ */ vd(" Error on creating new situation :( "), SF = /* @__PURE__ */ vd("dismiss"), zn = window.Vue.ref, EF = window.Vue.watch, IF = /* @__PURE__ */ X6({
  __name: "AddSituation",
  setup(e) {
    const o = er(), r = en(), s = zn(), a = zn(""), u = zn(), c = zn(""), f = zn([]), w = zn(!1), m = zn(), _ = zn(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), EF(
      () => r.unassignedAlarms,
      () => {
        _.value = r.unassignedAlarms;
      }
    );
    const $ = () => {
      o.push({
        name: "situations"
      });
    }, y = (S) => {
      w.value = !1, we.exports.includes(f.value, S) ? we.exports.remove(f.value, (N) => N === S) : f.value.push(S);
    }, T = () => {
      const S = "This field should not be empty";
      let N = !0;
      return s.value || (a.value = S, N = !1), u.value || (c.value = S, N = !1), f.value.length < 2 && (w.value = !0, N = !1), N;
    }, B = async () => {
      if (T()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await BM(S) ? o.push({
          name: "situations"
        }) : m.value = !0;
      }
    }, L = () => {
      s.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, M = (S) => {
      _.value = S;
    };
    return (S, N) => (so(), bi("div", aF, [
      Lt(qe(fe), {
        primary: "",
        onClick: N[0] || (N[0] = () => $()),
        class: "back-btn"
      }, {
        default: io(() => [
          Lt(qe(G), {
            icon: qe(wo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          lF
        ]),
        _: 1
      }),
      uF,
      rt("div", cF, [
        rt("div", dF, [
          Lt(qe(Oc), {
            modelValue: s.value,
            "onUpdate:modelValue": N[1] || (N[1] = (A) => s.value = A),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Lt(qe(Oc), {
            modelValue: u.value,
            "onUpdate:modelValue": N[2] || (N[2] = (A) => u.value = A),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (so(), bi("div", fF, " You must add at least 2 alarms. ")) : Q6("", !0),
          rt("div", hF, [
            Lt(qe(fe), {
              class: "btn",
              onClick: L
            }, {
              default: io(() => [
                Lt(qe(G), {
                  icon: qe(bo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                pF
              ]),
              _: 1
            }),
            Lt(qe(fe), {
              class: "btn-add",
              onClick: B
            }, {
              default: io(() => [
                Lt(qe(G), {
                  icon: qe(za),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                wF
              ]),
              _: 1
            })
          ])
        ]),
        rt("div", vF, [
          rt("div", mF, [
            _F,
            rt("div", null, [
              rt("div", {
                class: tF(["totalAlarms", { errorList: w.value }])
              }, [
                gF,
                rt("span", $F, eF(qe(f).length), 1)
              ], 2)
            ])
          ]),
          rt("div", yF, [
            rt("div", VF, [
              Lt(Bo, {
                list: qe(r).unassignedAlarms,
                onFilteredList: M,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (so(), bi("div", bF, [
              (so(!0), bi(rF, null, nF(_.value, (A) => (so(), bi("div", {
                key: A.id,
                class: "alarm-card"
              }, [
                Lt(pd, {
                  selected: qe(we.exports.includes)(qe(f), A.id),
                  alarm: A,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (so(), oF(To, { key: 1 }))
          ])
        ])
      ]),
      Lt(qe(Ka), {
        modelValue: m.value,
        "onUpdate:modelValue": N[4] || (N[4] = (A) => m.value = A),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: io(() => [
          Lt(qe(fe), {
            onClick: N[3] || (N[3] = (A) => m.value = !1),
            text: ""
          }, {
            default: io(() => [
              SF
            ]),
            _: 1
          })
        ]),
        default: io(() => [
          CF
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const kF = /* @__PURE__ */ ce(IF, [["__scopeId", "data-v-1a57a9f3"]]), xF = window.Vue.defineComponent, AF = window.Vue.createElementVNode, BF = window.Vue.createTextVNode, TF = window.Vue.unref, DF = window.Vue.withCtx, NF = window.Vue.createVNode, LF = window.Vue.Fragment, MF = window.Vue.openBlock, OF = window.Vue.createElementBlock, PF = window.Vue.pushScopeId, RF = window.Vue.popScopeId, FF = (e) => (PF("data-v-bcb7dcc6"), e = e(), RF(), e), UF = /* @__PURE__ */ FF(() => /* @__PURE__ */ AF("div", { class: "main" }, "Something bad is happening...", -1)), WF = /* @__PURE__ */ BF(" Reload "), qF = /* @__PURE__ */ xF({
  __name: "ErrorPage",
  setup(e) {
    const o = er(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (MF(), OF(LF, null, [
      UF,
      NF(TF(fe), {
        primary: "",
        onClick: r
      }, {
        default: DF(() => [
          WF
        ]),
        _: 1
      })
    ], 64));
  }
});
const HF = /* @__PURE__ */ ce(qF, [["__scopeId", "data-v-bcb7dcc6"]]), zF = window.Vue.defineComponent, nt = window.Vue.unref, Kt = window.Vue.createVNode, jn = window.Vue.createElementVNode, Ci = window.Vue.withCtx, Vr = window.Vue.openBlock, em = window.Vue.createBlock, YF = window.Vue.renderList, GF = window.Vue.Fragment, Si = window.Vue.createElementBlock, jF = window.Vue.toDisplayString, cg = window.Vue.createTextVNode, ZF = window.Vue.pushScopeId, KF = window.Vue.popScopeId, md = (e) => (ZF("data-v-6078e4ad"), e = e(), KF(), e), JF = { class: "container" }, XF = { class: "nav-btns" }, QF = /* @__PURE__ */ md(() => /* @__PURE__ */ jn("span", null, "Situation List", -1)), e9 = /* @__PURE__ */ md(() => /* @__PURE__ */ jn("h2", null, "List Unassociated Alarms", -1)), t9 = { class: "content" }, n9 = { class: "filters" }, r9 = { class: "list" }, o9 = { class: "action-btns" }, i9 = /* @__PURE__ */ md(() => /* @__PURE__ */ jn("span", null, "Move", -1)), s9 = { key: 1 }, a9 = {
  key: 0,
  class: "alarms"
}, l9 = /* @__PURE__ */ cg("dismiss"), Yn = window.Vue.ref, u9 = window.Vue.watch, c9 = window.Vue.markRaw, d9 = /* @__PURE__ */ zF({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = c9({
      ArrowBack: wo,
      ExitToApp: Pc
    }), r = er(), s = en();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Yn([]), u = Yn([]), c = Yn(!1), f = Yn(!1), w = Yn(""), m = Yn(!1), _ = Yn(!1), $ = Yn(!0);
    u9(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (N) => {
      we.exports.includes(u.value, N) ? we.exports.remove(u.value, (A) => A === N) : u.value.push(N);
    }, T = () => {
      c.value ? u.value = a.value.map((N) => N.id) : u.value = [];
    }, B = async (N) => {
      await g_(N, u.value) ? s.getUnassignedAlarms() : (m.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, L = () => {
      r.push({
        name: "situations"
      });
    }, M = () => {
      u.value.length ? f.value = !0 : (m.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (N) => {
      a.value = N;
    };
    return (N, A) => (Vr(), Si("div", JF, [
      jn("div", XF, [
        Kt(nt(fe), {
          primary: "",
          onClick: A[0] || (A[0] = () => L())
        }, {
          default: Ci(() => [
            Kt(nt(G), {
              icon: nt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            QF
          ]),
          _: 1
        }),
        Kt(w_)
      ]),
      e9,
      jn("div", t9, [
        jn("div", n9, [
          Kt(Bo, {
            list: nt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        jn("div", r9, [
          jn("div", o9, [
            Kt(nt(Ui), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                A[1] || (A[1] = (O) => c.value = O),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Kt(nt(fe), { onClick: M }, {
              default: Ci(() => [
                Kt(nt(G), {
                  icon: nt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                i9
              ]),
              _: 1
            })
          ]),
          $.value ? (Vr(), em(nt(od), {
            key: 0,
            class: "spinner"
          })) : (Vr(), Si("div", s9, [
            nt(a).length ? (Vr(), Si("div", a9, [
              (Vr(!0), Si(GF, null, YF(nt(a), (O) => (Vr(), Si("div", {
                key: O.id,
                class: "card"
              }, [
                Kt(pd, {
                  selected: nt(we.exports.includes)(nt(u), O.id),
                  alarm: O,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Vr(), em(To, { key: 1 }))
          ]))
        ])
      ]),
      Kt(Q_, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: A[2] || (A[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      Kt(nt(Ka), {
        modelValue: m.value,
        "onUpdate:modelValue": A[4] || (A[4] = (O) => m.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: Ci(() => [
          Kt(nt(fe), {
            onClick: A[3] || (A[3] = (O) => m.value = !1),
            text: ""
          }, {
            default: Ci(() => [
              l9
            ]),
            _: 1
          })
        ]),
        default: Ci(() => [
          cg(jF(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const f9 = /* @__PURE__ */ ce(d9, [["__scopeId", "data-v-6078e4ad"]]), h9 = window.Vue.defineComponent, yc = window.Vue.unref, p9 = window.Vue.createVNode, w9 = window.Vue.createElementVNode, v9 = window.Vue.withCtx, m9 = window.Vue.openBlock, _9 = window.Vue.createBlock, g9 = window.Vue.pushScopeId, $9 = window.Vue.popScopeId, y9 = (e) => (g9("data-v-17251e76"), e = e(), $9(), e), V9 = /* @__PURE__ */ y9(() => /* @__PURE__ */ w9("span", null, "Situation List", -1)), b9 = window.Vue.markRaw, C9 = /* @__PURE__ */ h9({
  __name: "SituationListBtn",
  setup(e) {
    const o = er(), r = b9({
      ArrowBack: wo
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (m9(), _9(yc(fe), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: v9(() => [
        p9(yc(G), {
          icon: yc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        V9
      ]),
      _: 1
    }));
  }
});
const S9 = /* @__PURE__ */ ce(C9, [["__scopeId", "data-v-17251e76"]]);
var E9 = Object.defineProperty, I9 = Object.defineProperties, k9 = Object.getOwnPropertyDescriptors, tm = Object.getOwnPropertySymbols, x9 = Object.prototype.hasOwnProperty, A9 = Object.prototype.propertyIsEnumerable, nm = (e, o, r) => o in e ? E9(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, fo = (e, o) => {
  for (var r in o || (o = {}))
    x9.call(o, r) && nm(e, r, o[r]);
  if (tm)
    for (var r of tm(o))
      A9.call(o, r) && nm(e, r, o[r]);
  return e;
}, B9 = (e, o) => I9(e, k9(o));
const T9 = window.Vue.defineComponent, rm = window.Vue.toRef, D9 = window.Vue.computed, N9 = window.Vue.ref, om = window.Vue.resolveComponent, im = window.Vue.openBlock, sm = window.Vue.createElementBlock, am = window.Vue.mergeProps, lm = window.Vue.createVNode, L9 = window.Vue.normalizeClass, sa = window.Vue.withCtx, um = window.Vue.renderSlot, M9 = window.Vue.createElementVNode, O9 = window.Vue.toHandlers, P9 = window.Vue.toDisplayString, R9 = window.Vue.createCommentVNode, F9 = fo(fo({
  type: {
    type: String,
    default: "text"
  },
  modelValue: {
    type: [String, Number]
  },
  maxlength: {
    type: Number,
    required: !1,
    default: 0
  },
  schema: {
    type: Object,
    required: !1
  },
  id: {
    type: String,
    required: !1
  }
}, Ma), ko), U9 = {
  "update:modelValue": (e) => !0
};
var W9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const q9 = T9({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: U9,
  props: F9,
  setup(e, o) {
    xo(e), Oa(e);
    const r = rm(e, "id"), s = D9(() => r.value ? r.value : se("feather-input-label")), a = N9(), { validate: u } = Eo(s, a, e.label, e.schema, rm(e, "error"));
    return fo({
      inputId: s,
      internalValue: a,
      validate: u
    }, Io(o.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return se("feather-input-description");
    },
    showClear() {
      return !!(this.internalValue && this.internalValue.length > 0);
    },
    contentCls() {
      const e = [];
      return this.error && e.push("error"), this.disabled && e.push("disabled"), this.focused && e.push("focused"), e;
    },
    isRaised() {
      return this.type === "number" ? !!(this.internalValue !== void 0 && this.internalValue !== null || this.focused) : !!(this.internalValue || this.focused);
    },
    attrs() {
      const e = fo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), B9(fo(fo({}, e), this.listeners), {
        class: "",
        type: this.type,
        id: this.inputId,
        name: this.inputId,
        disabled: this.disabled,
        "aria-disabled": this.disabled,
        "aria-describedby": (e["aria-describedby"] || "").split(" ").concat([this.descriptionId]).filter(Boolean).join(" "),
        value: this.internalValue
      });
    },
    listeners() {
      return {
        onFocus: (e) => {
          this.handleFocus(), this.$attrs.onFocus && this.$attrs.onFocus(e);
        },
        onBlur: (e) => {
          this.validate(), this.handleBlur(), this.$attrs.onBlur && this.$attrs.onBlur(e);
        },
        onInput: (e) => {
          this.handleInput(e);
        }
      };
    },
    charCount() {
      return `${this.internalValue && this.internalValue.length || "0"} / ${this.maxlength}`;
    }
  },
  watch: {
    modelValue: {
      immediate: !0,
      handler(e) {
        this.internalValue = e;
      }
    },
    internalValue: {
      immediate: !0,
      handler(e) {
        this.$emit("update:modelValue", e);
      }
    }
  },
  methods: {
    handleClear() {
      this.internalValue = "", this.focus();
    },
    handleWrapperClick() {
      this.$refs.input.focus();
    },
    handleFocus() {
      this.focused = !0;
    },
    handleBlur() {
      this.focused = !1;
    },
    handleInput(e) {
      this.internalValue = e.target.value, this.$emit("update:modelValue", this.internalValue);
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  },
  components: {
    InputSubText: So,
    InputWrapper: La
  }
}), H9 = ["maxlength"], z9 = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function Y9(e, o, r, s, a, u) {
  const c = om("InputWrapper"), f = om("InputSubText");
  return im(), sm("div", am(e.inherittedAttrs, { class: "feather-input-container" }), [
    lm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: L9(["feather-input-content", e.contentCls])
    }, {
      pre: sa(() => [
        um(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: sa(() => [
        um(e.$slots, "post", {}, void 0, !0)
      ]),
      default: sa(() => [
        M9("input", am(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, O9(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, H9)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    lm(f, { id: e.descriptionId }, {
      right: sa(() => [
        e.maxlength ? (im(), sm("div", z9, P9(e.charCount), 1)) : R9("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Vc = /* @__PURE__ */ W9(q9, [["render", Y9], ["__scopeId", "data-v-bf37b0d6"]]);
const G9 = window.Vue.openBlock, j9 = window.Vue.createElementBlock, _d = window.Vue.createElementVNode;
var Z9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const K9 = {}, J9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X9 = /* @__PURE__ */ _d("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), Q9 = /* @__PURE__ */ _d("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), eU = /* @__PURE__ */ _d("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), tU = [
  X9,
  Q9,
  eU
];
function nU(e, o) {
  return G9(), j9("svg", J9, tU);
}
var rU = /* @__PURE__ */ Z9(K9, [["render", nU]]);
const oU = window.Vue.openBlock, iU = window.Vue.createElementBlock, dg = window.Vue.createElementVNode;
var sU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const aU = {}, lU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uU = /* @__PURE__ */ dg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), cU = /* @__PURE__ */ dg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), dU = [
  uU,
  cU
];
function fU(e, o) {
  return oU(), iU("svg", lU, dU);
}
var hU = /* @__PURE__ */ sU(aU, [["render", fU]]);
const pU = window.Vue.defineComponent, Ze = window.Vue.createVNode, $e = window.Vue.createElementVNode, Se = window.Vue.unref, Ft = window.Vue.createTextVNode, an = window.Vue.withCtx, aa = window.Vue.toDisplayString, bc = window.Vue.openBlock, Cc = window.Vue.createElementBlock, cm = window.Vue.createCommentVNode, wU = window.Vue.Fragment, vU = window.Vue.pushScopeId, mU = window.Vue.popScopeId, Tn = (e) => (vU("data-v-12a6606f"), e = e(), mU(), e), _U = { class: "container" }, gU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), $U = { class: "section" }, yU = { class: "title" }, VU = /* @__PURE__ */ Ft(" Choose the correlation engine that ALEC will use (see "), bU = ["href"], CU = /* @__PURE__ */ Ft(" for more information): "), SU = /* @__PURE__ */ Ft("Clustering"), EU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("div", { class: "hellinger" }, [
  /* @__PURE__ */ $e("strong", null, "Hellinger distance")
], -1)), IU = /* @__PURE__ */ Ft(" LLM Based "), kU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), xU = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, AU = { class: "title-row" }, BU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("div", { class: "title" }, "Correlation variables", -1)), TU = ["aria-expanded"], DU = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, NU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("strong", null, "Alpha (\u03B1)", -1)), LU = /* @__PURE__ */ Ft(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), MU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("strong", null, "Beta (\u03B2)", -1)), OU = /* @__PURE__ */ Ft(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), PU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("code", null, "[0, 1]", -1)), RU = /* @__PURE__ */ Ft(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), FU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("strong", null, "Epsilon (\u03B5)", -1)), UU = /* @__PURE__ */ Ft(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), WU = { class: "variables" }, qU = { class: "action-row" }, HU = /* @__PURE__ */ Ft(" Close All Open Situations "), zU = /* @__PURE__ */ Ft(" Re-Evaluate All Open Alarms "), YU = /* @__PURE__ */ Tn(() => /* @__PURE__ */ $e("span", null, "Save Changes", -1)), GU = /* @__PURE__ */ Ft("dismiss"), jU = window.Vue.computed, ZU = window.Vue.markRaw, In = window.Vue.ref, KU = /* @__PURE__ */ pU({
  __name: "AccountSettings",
  setup(e) {
    var A, O, I, F, P, q, ve, ae;
    const o = ZU({
      MarkComplete: Sa,
      Help: rU,
      Restore: hU
    }), r = {
      alpha: 144.47117699,
      beta: 0.55257784,
      epsilon: 100
    }, s = $o(), a = In(((A = s.engineInfo) == null ? void 0 : A.engineName) || Pe.ENGINE_DBSCAN), u = In(
      ((O = s.engineInfo) == null ? void 0 : O.distanceMeasureName) === Pe.HELLINGER_OPTION
    ), c = In((F = (I = s.engineInfo) == null ? void 0 : I.alpha) != null ? F : r.alpha), f = In((q = (P = s.engineInfo) == null ? void 0 : P.beta) != null ? q : r.beta), w = In((ae = (ve = s.engineInfo) == null ? void 0 : ve.epsilon) != null ? ae : r.epsilon), m = jU(() => a.value === Pe.ENGINE_DBSCAN), _ = In(!1), $ = In(!1), y = In(!1), T = In(""), B = () => {
      c.value = r.alpha, f.value = r.beta, w.value = r.epsilon;
    }, L = (re, K) => {
      T.value = re, y.value = K, $.value = !0;
    }, M = async () => {
      await s.setEngineInfo(
        a.value,
        u.value,
        {
          alpha: Number(c.value),
          beta: Number(f.value),
          epsilon: Number(w.value)
        }
      ) ? (s.getEngineInfo(), L("The settings were saved!", !1)) : L("Error on saving the settings", !0);
    }, S = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const re = await TM();
      L(
        re ? "All open situations were closed." : "Failed to close situations.",
        !re
      );
    }, N = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const re = await DM();
      L(
        re ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !re
      );
    };
    return (re, K) => (bc(), Cc(wU, null, [
      Ze(S9),
      $e("div", _U, [
        gU,
        $e("div", $U, [
          $e("div", yU, [
            VU,
            $e("a", {
              target: "_blank",
              href: Se(Pe).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, bU),
            CU
          ]),
          Ze(Se(c_), {
            vertical: "",
            modelValue: a.value,
            "onUpdate:modelValue": K[1] || (K[1] = (oe) => a.value = oe),
            label: "",
            hideLabel: ""
          }, {
            default: an(() => [
              Ze(Se(Lc), {
                class: "radio-item",
                value: Se(Pe).ENGINE_DBSCAN
              }, {
                default: an(() => [
                  SU
                ]),
                _: 1
              }, 8, ["value"]),
              Ze(Se(Ui), {
                modelValue: u.value,
                "onUpdate:modelValue": K[0] || (K[0] = (oe) => u.value = oe),
                disabled: !Se(m),
                class: "checkbox"
              }, {
                default: an(() => [
                  EU
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Ze(Se(Lc), {
                class: "radio-item",
                value: Se(Pe).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: an(() => [
                  IU
                ]),
                _: 1
              }, 8, ["value"]),
              kU
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Se(m) ? (bc(), Cc("div", xU, [
          $e("div", AU, [
            BU,
            $e("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": _.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: K[2] || (K[2] = (oe) => _.value = !_.value)
            }, [
              Ze(Se(G), {
                icon: Se(o).Help
              }, null, 8, ["icon"])
            ], 8, TU),
            $e("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: B
            }, [
              Ze(Se(G), {
                icon: Se(o).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          _.value ? (bc(), Cc("div", DU, [
            $e("ul", null, [
              $e("li", null, [
                NU,
                LU,
                $e("em", null, "Default: " + aa(r.alpha), 1)
              ]),
              $e("li", null, [
                MU,
                OU,
                PU,
                RU,
                $e("em", null, "Default: " + aa(r.beta), 1)
              ]),
              $e("li", null, [
                FU,
                UU,
                $e("em", null, "Default: " + aa(r.epsilon), 1)
              ])
            ])
          ])) : cm("", !0),
          $e("div", WU, [
            Ze(Se(Vc), {
              modelValue: c.value,
              "onUpdate:modelValue": K[3] || (K[3] = (oe) => c.value = oe),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Ze(Se(Vc), {
              modelValue: f.value,
              "onUpdate:modelValue": K[4] || (K[4] = (oe) => f.value = oe),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Ze(Se(Vc), {
              modelValue: w.value,
              "onUpdate:modelValue": K[5] || (K[5] = (oe) => w.value = oe),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"])
          ])
        ])) : cm("", !0),
        $e("div", qU, [
          Ze(Se(fe), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: S
          }, {
            default: an(() => [
              HU
            ]),
            _: 1
          }),
          Ze(Se(fe), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: N
          }, {
            default: an(() => [
              zU
            ]),
            _: 1
          }),
          Ze(Se(fe), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: M
          }, {
            default: an(() => [
              Ze(Se(G), {
                icon: Se(o).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              YU
            ]),
            _: 1
          })
        ]),
        Ze(Se(Ka), {
          modelValue: $.value,
          "onUpdate:modelValue": K[7] || (K[7] = (oe) => $.value = oe),
          right: "",
          error: y.value,
          timeout: 6e3
        }, {
          button: an(() => [
            Ze(Se(fe), {
              onClick: K[6] || (K[6] = (oe) => $.value = !1),
              text: ""
            }, {
              default: an(() => [
                GU
              ]),
              _: 1
            })
          ]),
          default: an(() => [
            Ft(aa(T.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const JU = /* @__PURE__ */ ce(KU, [["__scopeId", "data-v-12a6606f"]]), XU = window.VueRouter.createRouter, QU = window.VueRouter.createWebHistory, eW = async () => {
  const e = $o();
  e.userId || await e.getUserRole();
}, fg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || hg;
      await $o().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => eW(),
    component: S3
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: J6
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: kF
  },
  {
    path: "/error",
    name: "error",
    component: HF
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: f9
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await $o().getEngineInfo();
    },
    component: JU
  }
], Sc = window.VRouter;
if (Sc) {
  const e = "Plugin-alecUiExtension", o = Sc.hasRoute(e) ? e : "Plugin";
  for (const r of fg) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Sc.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const hg = XU({
  history: QU(),
  routes: fg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = hS;
