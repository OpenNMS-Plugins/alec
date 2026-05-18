const ue = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, iS = {}, sS = window.Vue.resolveComponent, aS = window.Vue.createVNode, lS = window.Vue.openBlock, uS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const cS = { class: "main" };
function dS(e, o) {
  const r = sS("router-view");
  return lS(), uS("div", cS, [
    aS(r)
  ]);
}
const fS = /* @__PURE__ */ ue(iS, [["render", dS], ["__scopeId", "data-v-5d32d140"]]), hS = window.Vue.defineComponent, pS = window.Vue.openBlock, wS = window.Vue.createBlock, vS = /* @__PURE__ */ hS({
  __name: "App",
  setup(e) {
    return (o, r) => (pS(), wS(fS));
  }
});
var ii = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pm = { exports: {} }, qc = { exports: {} }, wm = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, _S = wm, Hc = Object.prototype.toString, zc = function(e) {
  return function(o) {
    var r = Hc.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Ar(e) {
  return e = e.toLowerCase(), function(r) {
    return zc(r) === e;
  };
}
function Yc(e) {
  return Array.isArray(e);
}
function $a(e) {
  return typeof e > "u";
}
function gS(e) {
  return e !== null && !$a(e) && e.constructor !== null && !$a(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var vm = Ar("ArrayBuffer");
function $S(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && vm(e.buffer), o;
}
function yS(e) {
  return typeof e == "string";
}
function VS(e) {
  return typeof e == "number";
}
function mm(e) {
  return e !== null && typeof e == "object";
}
function fa(e) {
  if (zc(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var bS = Ar("Date"), CS = Ar("File"), SS = Ar("Blob"), ES = Ar("FileList");
function Gc(e) {
  return Hc.call(e) === "[object Function]";
}
function IS(e) {
  return mm(e) && Gc(e.pipe);
}
function kS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Hc.call(e) === o || Gc(e.toString) && e.toString() === o);
}
var xS = Ar("URLSearchParams");
function AS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function BS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function jc(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Yc(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Ic() {
  var e = {};
  function o(a, u) {
    fa(e[u]) && fa(a) ? e[u] = Ic(e[u], a) : fa(a) ? e[u] = Ic({}, a) : Yc(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    jc(arguments[r], o);
  return e;
}
function TS(e, o, r) {
  return jc(o, function(a, u) {
    r && typeof a == "function" ? e[u] = _S(a, r) : e[u] = a;
  }), e;
}
function DS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function NS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function LS(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function MS(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function OS(e) {
  if (!e)
    return null;
  var o = e.length;
  if ($a(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var PS = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ge = {
  isArray: Yc,
  isArrayBuffer: vm,
  isBuffer: gS,
  isFormData: kS,
  isArrayBufferView: $S,
  isString: yS,
  isNumber: VS,
  isObject: mm,
  isPlainObject: fa,
  isUndefined: $a,
  isDate: bS,
  isFile: CS,
  isBlob: SS,
  isFunction: Gc,
  isStream: IS,
  isURLSearchParams: xS,
  isStandardBrowserEnv: BS,
  forEach: jc,
  merge: Ic,
  extend: TS,
  trim: AS,
  stripBOM: DS,
  inherits: NS,
  toFlatObject: LS,
  kindOf: zc,
  kindOfTest: Ar,
  endsWith: MS,
  toArray: OS,
  isTypedArray: PS,
  isFileList: ES
}, jr = Ge;
function Xh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var _m = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (jr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    jr.forEach(r, function(w, m) {
      w === null || typeof w > "u" || (jr.isArray(w) ? m = m + "[]" : w = [w], jr.forEach(w, function($) {
        jr.isDate($) ? $ = $.toISOString() : jr.isObject($) && ($ = JSON.stringify($)), u.push(Xh(m) + "=" + Xh($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, RS = Ge;
function Ta() {
  this.handlers = [];
}
Ta.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Ta.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Ta.prototype.forEach = function(o) {
  RS.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var FS = Ta, US = Ge, WS = function(o, r) {
  US.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, gm = Ge;
function go(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
gm.inherits(go, Error, {
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
var $m = go.prototype, ym = {};
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
  ym[e] = { value: e };
});
Object.defineProperties(go, ym);
Object.defineProperty($m, "isAxiosError", { value: !0 });
go.from = function(e, o, r, s, a, u) {
  var c = Object.create($m);
  return gm.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), go.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Co = go, Vm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jt = Ge;
function qS(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : jt.isDate(u) ? u.toISOString() : jt.isArrayBuffer(u) || jt.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (jt.isPlainObject(u) || jt.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), jt.forEach(u, function(w, m) {
        if (!jt.isUndefined(w)) {
          var _ = c ? c + "." + m : m, $;
          if (w && !c && typeof w == "object") {
            if (jt.endsWith(m, "{}"))
              w = JSON.stringify(w);
            else if (jt.endsWith(m, "[]") && ($ = jt.toArray(w))) {
              $.forEach(function(y) {
                !jt.isUndefined(y) && o.append(_, s(y));
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
var bm = qS, bu, Qh;
function HS() {
  if (Qh)
    return bu;
  Qh = 1;
  var e = Co;
  return bu = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, bu;
}
var Cu, ep;
function zS() {
  if (ep)
    return Cu;
  ep = 1;
  var e = Ge;
  return Cu = e.isStandardBrowserEnv() ? function() {
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
  }(), Cu;
}
var YS = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, GS = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, jS = YS, ZS = GS, Cm = function(o, r) {
  return o && !jS(r) ? ZS(o, r) : r;
}, Su, tp;
function KS() {
  if (tp)
    return Su;
  tp = 1;
  var e = Ge, o = [
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
  return Su = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(m) {
      if (f = m.indexOf(":"), u = e.trim(m.substr(0, f)).toLowerCase(), c = e.trim(m.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Su;
}
var Eu, np;
function JS() {
  if (np)
    return Eu;
  np = 1;
  var e = Ge;
  return Eu = e.isStandardBrowserEnv() ? function() {
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
  }(), Eu;
}
var Iu, rp;
function Da() {
  if (rp)
    return Iu;
  rp = 1;
  var e = Co, o = Ge;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Iu = r, Iu;
}
var ku, op;
function XS() {
  return op || (op = 1, ku = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), ku;
}
var xu, ip;
function sp() {
  if (ip)
    return xu;
  ip = 1;
  var e = Ge, o = HS(), r = zS(), s = _m, a = Cm, u = KS(), c = JS(), f = Vm, w = Co, m = Da(), _ = XS();
  return xu = function(y) {
    return new Promise(function(B, M) {
      var L = y.data, S = y.headers, N = y.responseType, A;
      function O() {
        y.cancelToken && y.cancelToken.unsubscribe(A), y.signal && y.signal.removeEventListener("abort", A);
      }
      e.isFormData(L) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var I = new XMLHttpRequest();
      if (y.auth) {
        var F = y.auth.username || "", P = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(F + ":" + P);
      }
      var q = a(y.baseURL, y.url);
      I.open(y.method.toUpperCase(), s(q, y.params, y.paramsSerializer), !0), I.timeout = y.timeout;
      function ge() {
        if (!!I) {
          var be = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, Se = !N || N === "text" || N === "json" ? I.responseText : I.response, Ie = {
            data: Se,
            status: I.status,
            statusText: I.statusText,
            headers: be,
            config: y,
            request: I
          };
          o(function(Ne) {
            B(Ne), O();
          }, function(Ne) {
            M(Ne), O();
          }, Ie), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = ge : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout(ge);
      }, I.onabort = function() {
        !I || (M(new w("Request aborted", w.ECONNABORTED, y, I)), I = null);
      }, I.onerror = function() {
        M(new w("Network Error", w.ERR_NETWORK, y, I, I)), I = null;
      }, I.ontimeout = function() {
        var Se = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ie = y.transitional || f;
        y.timeoutErrorMessage && (Se = y.timeoutErrorMessage), M(new w(
          Se,
          Ie.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var se = (y.withCredentials || c(q)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        se && (S[y.xsrfHeaderName] = se);
      }
      "setRequestHeader" in I && e.forEach(S, function(Se, Ie) {
        typeof L > "u" && Ie.toLowerCase() === "content-type" ? delete S[Ie] : I.setRequestHeader(Ie, Se);
      }), e.isUndefined(y.withCredentials) || (I.withCredentials = !!y.withCredentials), N && N !== "json" && (I.responseType = y.responseType), typeof y.onDownloadProgress == "function" && I.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (A = function(be) {
        !I || (M(!be || be && be.type ? new m() : be), I.abort(), I = null);
      }, y.cancelToken && y.cancelToken.subscribe(A), y.signal && (y.signal.aborted ? A() : y.signal.addEventListener("abort", A))), L || (L = null);
      var me = _(q);
      if (me && ["http", "https", "file"].indexOf(me) === -1) {
        M(new w("Unsupported protocol " + me + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      I.send(L);
    });
  }, xu;
}
var Au, ap;
function QS() {
  return ap || (ap = 1, Au = null), Au;
}
var Ue = Ge, lp = WS, up = Co, eE = Vm, tE = bm, nE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cp(e, o) {
  !Ue.isUndefined(e) && Ue.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function rE() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = sp()), e;
}
function oE(e, o, r) {
  if (Ue.isString(e))
    try {
      return (o || JSON.parse)(e), Ue.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Na = {
  transitional: eE,
  adapter: rE(),
  transformRequest: [function(o, r) {
    if (lp(r, "Accept"), lp(r, "Content-Type"), Ue.isFormData(o) || Ue.isArrayBuffer(o) || Ue.isBuffer(o) || Ue.isStream(o) || Ue.isFile(o) || Ue.isBlob(o))
      return o;
    if (Ue.isArrayBufferView(o))
      return o.buffer;
    if (Ue.isURLSearchParams(o))
      return cp(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Ue.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Ue.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return tE(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return cp(r, "application/json"), oE(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Na.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Ue.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? up.from(c, up.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: QS()
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
Ue.forEach(["delete", "get", "head"], function(o) {
  Na.headers[o] = {};
});
Ue.forEach(["post", "put", "patch"], function(o) {
  Na.headers[o] = Ue.merge(nE);
});
var Zc = Na, iE = Ge, sE = Zc, aE = function(o, r, s) {
  var a = this || sE;
  return iE.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Bu, dp;
function Sm() {
  return dp || (dp = 1, Bu = function(o) {
    return !!(o && o.__CANCEL__);
  }), Bu;
}
var fp = Ge, Tu = aE, lE = Sm(), uE = Zc, cE = Da();
function Du(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new cE();
}
var dE = function(o) {
  Du(o), o.headers = o.headers || {}, o.data = Tu.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = fp.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), fp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || uE.adapter;
  return r(o).then(function(a) {
    return Du(o), a.data = Tu.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return lE(a) || (Du(o), a && a.response && (a.response.data = Tu.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, yt = Ge, Em = function(o, r) {
  r = r || {};
  var s = {};
  function a(_, $) {
    return yt.isPlainObject(_) && yt.isPlainObject($) ? yt.merge(_, $) : yt.isPlainObject($) ? yt.merge({}, $) : yt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (yt.isUndefined(r[_])) {
      if (!yt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!yt.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (yt.isUndefined(r[_])) {
      if (!yt.isUndefined(o[_]))
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
  return yt.forEach(Object.keys(o).concat(Object.keys(r)), function($) {
    var y = m[$] || u, T = y($);
    yt.isUndefined(T) && y !== w || (s[$] = T);
  }), s;
}, Nu, hp;
function Im() {
  return hp || (hp = 1, Nu = {
    version: "0.27.2"
  }), Nu;
}
var fE = Im().version, jn = Co, Kc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  Kc[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var pp = {};
Kc.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + fE + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new jn(
        a(c, " has been removed" + (r ? " in " + r : "")),
        jn.ERR_DEPRECATED
      );
    return r && !pp[c] && (pp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function hE(e, o, r) {
  if (typeof e != "object")
    throw new jn("options must be an object", jn.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new jn("option " + u + " must be " + w, jn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new jn("Unknown option " + u, jn.ERR_BAD_OPTION);
  }
}
var pE = {
  assertOptions: hE,
  validators: Kc
}, km = Ge, wE = _m, wp = FS, vp = dE, La = Em, vE = Cm, xm = pE, Zr = xm.validators;
function $o(e) {
  this.defaults = e, this.interceptors = {
    request: new wp(),
    response: new wp()
  };
}
$o.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = La(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && xm.assertOptions(s, {
    silentJSONParsing: Zr.transitional(Zr.boolean),
    forcedJSONParsing: Zr.transitional(Zr.boolean),
    clarifyTimeoutError: Zr.transitional(Zr.boolean)
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
    var w = [vp, void 0];
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
    f = vp(m);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
$o.prototype.getUri = function(o) {
  o = La(this.defaults, o);
  var r = vE(o.baseURL, o.url);
  return wE(r, o.params, o.paramsSerializer);
};
km.forEach(["delete", "get", "head", "options"], function(o) {
  $o.prototype[o] = function(r, s) {
    return this.request(La(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
km.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(La(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  $o.prototype[o] = r(), $o.prototype[o + "Form"] = r(!0);
});
var mE = $o, Lu, mp;
function _E() {
  if (mp)
    return Lu;
  mp = 1;
  var e = Da();
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
  }, Lu = o, Lu;
}
var Mu, _p;
function gE() {
  return _p || (_p = 1, Mu = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Mu;
}
var Ou, gp;
function $E() {
  if (gp)
    return Ou;
  gp = 1;
  var e = Ge;
  return Ou = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Ou;
}
var $p = Ge, yE = wm, ha = mE, VE = Em, bE = Zc;
function Am(e) {
  var o = new ha(e), r = yE(ha.prototype.request, o);
  return $p.extend(r, ha.prototype, o), $p.extend(r, o), r.create = function(a) {
    return Am(VE(e, a));
  }, r;
}
var ht = Am(bE);
ht.Axios = ha;
ht.CanceledError = Da();
ht.CancelToken = _E();
ht.isCancel = Sm();
ht.VERSION = Im().version;
ht.toFormData = bm;
ht.AxiosError = Co;
ht.Cancel = ht.CanceledError;
ht.all = function(o) {
  return Promise.all(o);
};
ht.spread = gE();
ht.isAxiosError = $E();
qc.exports = ht;
qc.exports.default = ht;
(function(e) {
  e.exports = qc.exports;
})(pm);
const Bm = /* @__PURE__ */ mS(pm.exports), Dn = Bm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), tn = Bm.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var ve = { exports: {} };
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", m = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, B = 1, M = 2, L = 1, S = 2, N = 4, A = 8, O = 16, I = 32, F = 64, P = 128, q = 256, ge = 512, se = 30, me = "...", be = 800, Se = 16, Ie = 1, ce = 2, Ne = 3, de = 1 / 0, Q = 9007199254740991, ke = 17976931348623157e292, Gi = 0 / 0, on = 4294967295, mg = on - 1, _g = on >>> 1, gg = [
      ["ary", P],
      ["bind", L],
      ["bindKey", S],
      ["curry", A],
      ["curryRight", O],
      ["flip", ge],
      ["partial", I],
      ["partialRight", F],
      ["rearg", q]
    ], Tr = "[object Arguments]", ji = "[object Array]", $g = "[object AsyncFunction]", Oo = "[object Boolean]", Po = "[object Date]", yg = "[object DOMException]", Zi = "[object Error]", Ki = "[object Function]", $d = "[object GeneratorFunction]", Wt = "[object Map]", Ro = "[object Number]", Vg = "[object Null]", mn = "[object Object]", yd = "[object Promise]", bg = "[object Proxy]", Fo = "[object RegExp]", qt = "[object Set]", Uo = "[object String]", Ji = "[object Symbol]", Cg = "[object Undefined]", Wo = "[object WeakMap]", Sg = "[object WeakSet]", qo = "[object ArrayBuffer]", Dr = "[object DataView]", nl = "[object Float32Array]", rl = "[object Float64Array]", ol = "[object Int8Array]", il = "[object Int16Array]", sl = "[object Int32Array]", al = "[object Uint8Array]", ll = "[object Uint8ClampedArray]", ul = "[object Uint16Array]", cl = "[object Uint32Array]", Eg = /\b__p \+= '';/g, Ig = /\b(__p \+=) '' \+/g, kg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Vd = /&(?:amp|lt|gt|quot|#39);/g, bd = /[&<>"']/g, xg = RegExp(Vd.source), Ag = RegExp(bd.source), Bg = /<%-([\s\S]+?)%>/g, Tg = /<%([\s\S]+?)%>/g, Cd = /<%=([\s\S]+?)%>/g, Dg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ng = /^\w*$/, Lg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dl = /[\\^$.*+?()[\]{}|]/g, Mg = RegExp(dl.source), fl = /^\s+/, Og = /\s/, Pg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Rg = /\{\n\/\* \[wrapped with (.+)\] \*/, Fg = /,? & /, Ug = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Wg = /[()=,{}\[\]\/\s]/, qg = /\\(\\)?/g, Hg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Sd = /\w*$/, zg = /^[-+]0x[0-9a-f]+$/i, Yg = /^0b[01]+$/i, Gg = /^\[object .+?Constructor\]$/, jg = /^0o[0-7]+$/i, Zg = /^(?:0|[1-9]\d*)$/, Kg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Xi = /($^)/, Jg = /['\n\r\u2028\u2029\\]/g, Qi = "\\ud800-\\udfff", Xg = "\\u0300-\\u036f", Qg = "\\ufe20-\\ufe2f", e1 = "\\u20d0-\\u20ff", Ed = Xg + Qg + e1, Id = "\\u2700-\\u27bf", kd = "a-z\\xdf-\\xf6\\xf8-\\xff", t1 = "\\xac\\xb1\\xd7\\xf7", n1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", r1 = "\\u2000-\\u206f", o1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ad = "\\ufe0e\\ufe0f", Bd = t1 + n1 + r1 + o1, hl = "['\u2019]", i1 = "[" + Qi + "]", Td = "[" + Bd + "]", es = "[" + Ed + "]", Dd = "\\d+", s1 = "[" + Id + "]", Nd = "[" + kd + "]", Ld = "[^" + Qi + Bd + Dd + Id + kd + xd + "]", pl = "\\ud83c[\\udffb-\\udfff]", a1 = "(?:" + es + "|" + pl + ")", Md = "[^" + Qi + "]", wl = "(?:\\ud83c[\\udde6-\\uddff]){2}", vl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Nr = "[" + xd + "]", Od = "\\u200d", Pd = "(?:" + Nd + "|" + Ld + ")", l1 = "(?:" + Nr + "|" + Ld + ")", Rd = "(?:" + hl + "(?:d|ll|m|re|s|t|ve))?", Fd = "(?:" + hl + "(?:D|LL|M|RE|S|T|VE))?", Ud = a1 + "?", Wd = "[" + Ad + "]?", u1 = "(?:" + Od + "(?:" + [Md, wl, vl].join("|") + ")" + Wd + Ud + ")*", c1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", d1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", qd = Wd + Ud + u1, f1 = "(?:" + [s1, wl, vl].join("|") + ")" + qd, h1 = "(?:" + [Md + es + "?", es, wl, vl, i1].join("|") + ")", p1 = RegExp(hl, "g"), w1 = RegExp(es, "g"), ml = RegExp(pl + "(?=" + pl + ")|" + h1 + qd, "g"), v1 = RegExp([
      Nr + "?" + Nd + "+" + Rd + "(?=" + [Td, Nr, "$"].join("|") + ")",
      l1 + "+" + Fd + "(?=" + [Td, Nr + Pd, "$"].join("|") + ")",
      Nr + "?" + Pd + "+" + Rd,
      Nr + "+" + Fd,
      d1,
      c1,
      Dd,
      f1
    ].join("|"), "g"), m1 = RegExp("[" + Od + Qi + Ed + Ad + "]"), _1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, g1 = [
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
    ], $1 = -1, Ce = {};
    Ce[nl] = Ce[rl] = Ce[ol] = Ce[il] = Ce[sl] = Ce[al] = Ce[ll] = Ce[ul] = Ce[cl] = !0, Ce[Tr] = Ce[ji] = Ce[qo] = Ce[Oo] = Ce[Dr] = Ce[Po] = Ce[Zi] = Ce[Ki] = Ce[Wt] = Ce[Ro] = Ce[mn] = Ce[Fo] = Ce[qt] = Ce[Uo] = Ce[Wo] = !1;
    var ye = {};
    ye[Tr] = ye[ji] = ye[qo] = ye[Dr] = ye[Oo] = ye[Po] = ye[nl] = ye[rl] = ye[ol] = ye[il] = ye[sl] = ye[Wt] = ye[Ro] = ye[mn] = ye[Fo] = ye[qt] = ye[Uo] = ye[Ji] = ye[al] = ye[ll] = ye[ul] = ye[cl] = !0, ye[Zi] = ye[Ki] = ye[Wo] = !1;
    var y1 = {
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
    }, V1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, b1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, C1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, S1 = parseFloat, E1 = parseInt, Hd = typeof ii == "object" && ii && ii.Object === Object && ii, I1 = typeof self == "object" && self && self.Object === Object && self, qe = Hd || I1 || Function("return this")(), _l = o && !o.nodeType && o, nr = _l && !0 && e && !e.nodeType && e, zd = nr && nr.exports === _l, gl = zd && Hd.process, It = function() {
      try {
        var V = nr && nr.require && nr.require("util").types;
        return V || gl && gl.binding && gl.binding("util");
      } catch {
      }
    }(), Yd = It && It.isArrayBuffer, Gd = It && It.isDate, jd = It && It.isMap, Zd = It && It.isRegExp, Kd = It && It.isSet, Jd = It && It.isTypedArray;
    function wt(V, E, C) {
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
    function k1(V, E, C, U) {
      for (var j = -1, ae = V == null ? 0 : V.length; ++j < ae; ) {
        var Me = V[j];
        E(U, Me, C(Me), V);
      }
      return U;
    }
    function kt(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function x1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function Xd(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function Nn(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = 0, ae = []; ++C < U; ) {
        var Me = V[C];
        E(Me, C, V) && (ae[j++] = Me);
      }
      return ae;
    }
    function ts(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && Lr(V, E, 0) > -1;
    }
    function $l(V, E, C) {
      for (var U = -1, j = V == null ? 0 : V.length; ++U < j; )
        if (C(E, V[U]))
          return !0;
      return !1;
    }
    function Ee(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = Array(U); ++C < U; )
        j[C] = E(V[C], C, V);
      return j;
    }
    function Ln(V, E) {
      for (var C = -1, U = E.length, j = V.length; ++C < U; )
        V[j + C] = E[C];
      return V;
    }
    function yl(V, E, C, U) {
      var j = -1, ae = V == null ? 0 : V.length;
      for (U && ae && (C = V[++j]); ++j < ae; )
        C = E(C, V[j], j, V);
      return C;
    }
    function A1(V, E, C, U) {
      var j = V == null ? 0 : V.length;
      for (U && j && (C = V[--j]); j--; )
        C = E(C, V[j], j, V);
      return C;
    }
    function Vl(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var B1 = bl("length");
    function T1(V) {
      return V.split("");
    }
    function D1(V) {
      return V.match(Ug) || [];
    }
    function Qd(V, E, C) {
      var U;
      return C(V, function(j, ae, Me) {
        if (E(j, ae, Me))
          return U = ae, !1;
      }), U;
    }
    function ns(V, E, C, U) {
      for (var j = V.length, ae = C + (U ? 1 : -1); U ? ae-- : ++ae < j; )
        if (E(V[ae], ae, V))
          return ae;
      return -1;
    }
    function Lr(V, E, C) {
      return E === E ? z1(V, E, C) : ns(V, ef, C);
    }
    function N1(V, E, C, U) {
      for (var j = C - 1, ae = V.length; ++j < ae; )
        if (U(V[j], E))
          return j;
      return -1;
    }
    function ef(V) {
      return V !== V;
    }
    function tf(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? Sl(V, E) / C : Gi;
    }
    function bl(V) {
      return function(E) {
        return E == null ? r : E[V];
      };
    }
    function Cl(V) {
      return function(E) {
        return V == null ? r : V[E];
      };
    }
    function nf(V, E, C, U, j) {
      return j(V, function(ae, Me, $e) {
        C = U ? (U = !1, ae) : E(C, ae, Me, $e);
      }), C;
    }
    function L1(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function Sl(V, E) {
      for (var C, U = -1, j = V.length; ++U < j; ) {
        var ae = E(V[U]);
        ae !== r && (C = C === r ? ae : C + ae);
      }
      return C;
    }
    function El(V, E) {
      for (var C = -1, U = Array(V); ++C < V; )
        U[C] = E(C);
      return U;
    }
    function M1(V, E) {
      return Ee(E, function(C) {
        return [C, V[C]];
      });
    }
    function rf(V) {
      return V && V.slice(0, lf(V) + 1).replace(fl, "");
    }
    function vt(V) {
      return function(E) {
        return V(E);
      };
    }
    function Il(V, E) {
      return Ee(E, function(C) {
        return V[C];
      });
    }
    function Ho(V, E) {
      return V.has(E);
    }
    function of(V, E) {
      for (var C = -1, U = V.length; ++C < U && Lr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function sf(V, E) {
      for (var C = V.length; C-- && Lr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function O1(V, E) {
      for (var C = V.length, U = 0; C--; )
        V[C] === E && ++U;
      return U;
    }
    var P1 = Cl(y1), R1 = Cl(V1);
    function F1(V) {
      return "\\" + C1[V];
    }
    function U1(V, E) {
      return V == null ? r : V[E];
    }
    function Mr(V) {
      return m1.test(V);
    }
    function W1(V) {
      return _1.test(V);
    }
    function q1(V) {
      for (var E, C = []; !(E = V.next()).done; )
        C.push(E.value);
      return C;
    }
    function kl(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U, j) {
        C[++E] = [j, U];
      }), C;
    }
    function af(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function Mn(V, E) {
      for (var C = -1, U = V.length, j = 0, ae = []; ++C < U; ) {
        var Me = V[C];
        (Me === E || Me === _) && (V[C] = _, ae[j++] = C);
      }
      return ae;
    }
    function rs(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function H1(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function z1(V, E, C) {
      for (var U = C - 1, j = V.length; ++U < j; )
        if (V[U] === E)
          return U;
      return -1;
    }
    function Y1(V, E, C) {
      for (var U = C + 1; U--; )
        if (V[U] === E)
          return U;
      return U;
    }
    function Or(V) {
      return Mr(V) ? j1(V) : B1(V);
    }
    function Ht(V) {
      return Mr(V) ? Z1(V) : T1(V);
    }
    function lf(V) {
      for (var E = V.length; E-- && Og.test(V.charAt(E)); )
        ;
      return E;
    }
    var G1 = Cl(b1);
    function j1(V) {
      for (var E = ml.lastIndex = 0; ml.test(V); )
        ++E;
      return E;
    }
    function Z1(V) {
      return V.match(ml) || [];
    }
    function K1(V) {
      return V.match(v1) || [];
    }
    var J1 = function V(E) {
      E = E == null ? qe : Pr.defaults(qe.Object(), E, Pr.pick(qe, g1));
      var C = E.Array, U = E.Date, j = E.Error, ae = E.Function, Me = E.Math, $e = E.Object, xl = E.RegExp, X1 = E.String, xt = E.TypeError, os = C.prototype, Q1 = ae.prototype, Rr = $e.prototype, is = E["__core-js_shared__"], ss = Q1.toString, pe = Rr.hasOwnProperty, e0 = 0, uf = function() {
        var t = /[^.]+$/.exec(is && is.keys && is.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), as = Rr.toString, t0 = ss.call($e), n0 = qe._, r0 = xl(
        "^" + ss.call(pe).replace(dl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ls = zd ? E.Buffer : r, On = E.Symbol, us = E.Uint8Array, cf = ls ? ls.allocUnsafe : r, cs = af($e.getPrototypeOf, $e), df = $e.create, ff = Rr.propertyIsEnumerable, ds = os.splice, hf = On ? On.isConcatSpreadable : r, zo = On ? On.iterator : r, rr = On ? On.toStringTag : r, fs = function() {
        try {
          var t = lr($e, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), o0 = E.clearTimeout !== qe.clearTimeout && E.clearTimeout, i0 = U && U.now !== qe.Date.now && U.now, s0 = E.setTimeout !== qe.setTimeout && E.setTimeout, hs = Me.ceil, ps = Me.floor, Al = $e.getOwnPropertySymbols, a0 = ls ? ls.isBuffer : r, pf = E.isFinite, l0 = os.join, u0 = af($e.keys, $e), Oe = Me.max, je = Me.min, c0 = U.now, d0 = E.parseInt, wf = Me.random, f0 = os.reverse, Bl = lr(E, "DataView"), Yo = lr(E, "Map"), Tl = lr(E, "Promise"), Fr = lr(E, "Set"), Go = lr(E, "WeakMap"), jo = lr($e, "create"), ws = Go && new Go(), Ur = {}, h0 = ur(Bl), p0 = ur(Yo), w0 = ur(Tl), v0 = ur(Fr), m0 = ur(Go), vs = On ? On.prototype : r, Zo = vs ? vs.valueOf : r, vf = vs ? vs.toString : r;
      function h(t) {
        if (Ae(t) && !Z(t) && !(t instanceof ne)) {
          if (t instanceof At)
            return t;
          if (pe.call(t, "__wrapped__"))
            return mh(t);
        }
        return new At(t);
      }
      var Wr = function() {
        function t() {
        }
        return function(n) {
          if (!xe(n))
            return {};
          if (df)
            return df(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function ms() {
      }
      function At(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: Bg,
        evaluate: Tg,
        interpolate: Cd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = ms.prototype, h.prototype.constructor = h, At.prototype = Wr(ms.prototype), At.prototype.constructor = At;
      function ne(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = on, this.__views__ = [];
      }
      function _0() {
        var t = new ne(this.__wrapped__);
        return t.__actions__ = it(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = it(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = it(this.__views__), t;
      }
      function g0() {
        if (this.__filtered__) {
          var t = new ne(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function $0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = Z(t), l = n < 0, d = i ? t.length : 0, p = T$(0, d, this.__views__), v = p.start, g = p.end, b = g - v, k = l ? g : v - 1, x = this.__iteratees__, D = x.length, R = 0, W = je(b, this.__takeCount__);
        if (!i || !l && d == b && W == b)
          return Ff(t, this.__actions__);
        var z = [];
        e:
          for (; b-- && R < W; ) {
            k += n;
            for (var J = -1, Y = t[k]; ++J < D; ) {
              var te = x[J], re = te.iteratee, gt = te.type, tt = re(Y);
              if (gt == ce)
                Y = tt;
              else if (!tt) {
                if (gt == Ie)
                  continue e;
                break e;
              }
            }
            z[R++] = Y;
          }
        return z;
      }
      ne.prototype = Wr(ms.prototype), ne.prototype.constructor = ne;
      function or(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function y0() {
        this.__data__ = jo ? jo(null) : {}, this.size = 0;
      }
      function V0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function b0(t) {
        var n = this.__data__;
        if (jo) {
          var i = n[t];
          return i === w ? r : i;
        }
        return pe.call(n, t) ? n[t] : r;
      }
      function C0(t) {
        var n = this.__data__;
        return jo ? n[t] !== r : pe.call(n, t);
      }
      function S0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = jo && n === r ? w : n, this;
      }
      or.prototype.clear = y0, or.prototype.delete = V0, or.prototype.get = b0, or.prototype.has = C0, or.prototype.set = S0;
      function _n(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function E0() {
        this.__data__ = [], this.size = 0;
      }
      function I0(t) {
        var n = this.__data__, i = _s(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : ds.call(n, i, 1), --this.size, !0;
      }
      function k0(t) {
        var n = this.__data__, i = _s(n, t);
        return i < 0 ? r : n[i][1];
      }
      function x0(t) {
        return _s(this.__data__, t) > -1;
      }
      function A0(t, n) {
        var i = this.__data__, l = _s(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      _n.prototype.clear = E0, _n.prototype.delete = I0, _n.prototype.get = k0, _n.prototype.has = x0, _n.prototype.set = A0;
      function gn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function B0() {
        this.size = 0, this.__data__ = {
          hash: new or(),
          map: new (Yo || _n)(),
          string: new or()
        };
      }
      function T0(t) {
        var n = As(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function D0(t) {
        return As(this, t).get(t);
      }
      function N0(t) {
        return As(this, t).has(t);
      }
      function L0(t, n) {
        var i = As(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      gn.prototype.clear = B0, gn.prototype.delete = T0, gn.prototype.get = D0, gn.prototype.has = N0, gn.prototype.set = L0;
      function ir(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new gn(); ++n < i; )
          this.add(t[n]);
      }
      function M0(t) {
        return this.__data__.set(t, w), this;
      }
      function O0(t) {
        return this.__data__.has(t);
      }
      ir.prototype.add = ir.prototype.push = M0, ir.prototype.has = O0;
      function zt(t) {
        var n = this.__data__ = new _n(t);
        this.size = n.size;
      }
      function P0() {
        this.__data__ = new _n(), this.size = 0;
      }
      function R0(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function F0(t) {
        return this.__data__.get(t);
      }
      function U0(t) {
        return this.__data__.has(t);
      }
      function W0(t, n) {
        var i = this.__data__;
        if (i instanceof _n) {
          var l = i.__data__;
          if (!Yo || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new gn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      zt.prototype.clear = P0, zt.prototype.delete = R0, zt.prototype.get = F0, zt.prototype.has = U0, zt.prototype.set = W0;
      function mf(t, n) {
        var i = Z(t), l = !i && cr(t), d = !i && !l && Wn(t), p = !i && !l && !d && Yr(t), v = i || l || d || p, g = v ? El(t.length, X1) : [], b = g.length;
        for (var k in t)
          (n || pe.call(t, k)) && !(v && (k == "length" || d && (k == "offset" || k == "parent") || p && (k == "buffer" || k == "byteLength" || k == "byteOffset") || bn(k, b))) && g.push(k);
        return g;
      }
      function _f(t) {
        var n = t.length;
        return n ? t[ql(0, n - 1)] : r;
      }
      function q0(t, n) {
        return Bs(it(t), sr(n, 0, t.length));
      }
      function H0(t) {
        return Bs(it(t));
      }
      function Dl(t, n, i) {
        (i !== r && !Yt(t[n], i) || i === r && !(n in t)) && $n(t, n, i);
      }
      function Ko(t, n, i) {
        var l = t[n];
        (!(pe.call(t, n) && Yt(l, i)) || i === r && !(n in t)) && $n(t, n, i);
      }
      function _s(t, n) {
        for (var i = t.length; i--; )
          if (Yt(t[i][0], n))
            return i;
        return -1;
      }
      function z0(t, n, i, l) {
        return Pn(t, function(d, p, v) {
          n(l, d, i(d), v);
        }), l;
      }
      function gf(t, n) {
        return t && an(n, Fe(n), t);
      }
      function Y0(t, n) {
        return t && an(n, at(n), t);
      }
      function $n(t, n, i) {
        n == "__proto__" && fs ? fs(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Nl(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? r : pu(t, n[i]);
        return d;
      }
      function sr(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function Bt(t, n, i, l, d, p) {
        var v, g = n & $, b = n & y, k = n & T;
        if (i && (v = d ? i(t, l, d, p) : i(t)), v !== r)
          return v;
        if (!xe(t))
          return t;
        var x = Z(t);
        if (x) {
          if (v = N$(t), !g)
            return it(t, v);
        } else {
          var D = Ze(t), R = D == Ki || D == $d;
          if (Wn(t))
            return qf(t, g);
          if (D == mn || D == Tr || R && !d) {
            if (v = b || R ? {} : lh(t), !g)
              return b ? b$(t, Y0(v, t)) : V$(t, gf(v, t));
          } else {
            if (!ye[D])
              return d ? t : {};
            v = L$(t, D, g);
          }
        }
        p || (p = new zt());
        var W = p.get(t);
        if (W)
          return W;
        p.set(t, v), Oh(t) ? t.forEach(function(Y) {
          v.add(Bt(Y, n, i, Y, t, p));
        }) : Lh(t) && t.forEach(function(Y, te) {
          v.set(te, Bt(Y, n, i, te, t, p));
        });
        var z = k ? b ? eu : Ql : b ? at : Fe, J = x ? r : z(t);
        return kt(J || t, function(Y, te) {
          J && (te = Y, Y = t[te]), Ko(v, te, Bt(Y, n, i, te, t, p));
        }), v;
      }
      function G0(t) {
        var n = Fe(t);
        return function(i) {
          return $f(i, t, n);
        };
      }
      function $f(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = $e(t); l--; ) {
          var d = i[l], p = n[d], v = t[d];
          if (v === r && !(d in t) || !p(v))
            return !1;
        }
        return !0;
      }
      function yf(t, n, i) {
        if (typeof t != "function")
          throw new xt(c);
        return ri(function() {
          t.apply(r, i);
        }, n);
      }
      function Jo(t, n, i, l) {
        var d = -1, p = ts, v = !0, g = t.length, b = [], k = n.length;
        if (!g)
          return b;
        i && (n = Ee(n, vt(i))), l ? (p = $l, v = !1) : n.length >= a && (p = Ho, v = !1, n = new ir(n));
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
      var Pn = jf(sn), Vf = jf(Ml, !0);
      function j0(t, n) {
        var i = !0;
        return Pn(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function gs(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], v = n(p);
          if (v != null && (g === r ? v === v && !_t(v) : i(v, g)))
            var g = v, b = p;
        }
        return b;
      }
      function Z0(t, n, i, l) {
        var d = t.length;
        for (i = K(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : K(l), l < 0 && (l += d), l = i > l ? 0 : Rh(l); i < l; )
          t[i++] = n;
        return t;
      }
      function bf(t, n) {
        var i = [];
        return Pn(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function He(t, n, i, l, d) {
        var p = -1, v = t.length;
        for (i || (i = O$), d || (d = []); ++p < v; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? He(g, n - 1, i, l, d) : Ln(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var Ll = Zf(), Cf = Zf(!0);
      function sn(t, n) {
        return t && Ll(t, n, Fe);
      }
      function Ml(t, n) {
        return t && Cf(t, n, Fe);
      }
      function $s(t, n) {
        return Nn(n, function(i) {
          return Cn(t[i]);
        });
      }
      function ar(t, n) {
        n = Fn(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[ln(n[i++])];
        return i && i == l ? t : r;
      }
      function Sf(t, n, i) {
        var l = n(t);
        return Z(t) ? l : Ln(l, i(t));
      }
      function Qe(t) {
        return t == null ? t === r ? Cg : Vg : rr && rr in $e(t) ? B$(t) : H$(t);
      }
      function Ol(t, n) {
        return t > n;
      }
      function K0(t, n) {
        return t != null && pe.call(t, n);
      }
      function J0(t, n) {
        return t != null && n in $e(t);
      }
      function X0(t, n, i) {
        return t >= je(n, i) && t < Oe(n, i);
      }
      function Pl(t, n, i) {
        for (var l = i ? $l : ts, d = t[0].length, p = t.length, v = p, g = C(p), b = 1 / 0, k = []; v--; ) {
          var x = t[v];
          v && n && (x = Ee(x, vt(n))), b = je(x.length, b), g[v] = !i && (n || d >= 120 && x.length >= 120) ? new ir(v && x) : r;
        }
        x = t[0];
        var D = -1, R = g[0];
        e:
          for (; ++D < d && k.length < b; ) {
            var W = x[D], z = n ? n(W) : W;
            if (W = i || W !== 0 ? W : 0, !(R ? Ho(R, z) : l(k, z, i))) {
              for (v = p; --v; ) {
                var J = g[v];
                if (!(J ? Ho(J, z) : l(t[v], z, i)))
                  continue e;
              }
              R && R.push(z), k.push(W);
            }
          }
        return k;
      }
      function Q0(t, n, i, l) {
        return sn(t, function(d, p, v) {
          n(l, i(d), p, v);
        }), l;
      }
      function Xo(t, n, i) {
        n = Fn(n, t), t = fh(t, n);
        var l = t == null ? t : t[ln(Dt(n))];
        return l == null ? r : wt(l, t, i);
      }
      function Ef(t) {
        return Ae(t) && Qe(t) == Tr;
      }
      function e$(t) {
        return Ae(t) && Qe(t) == qo;
      }
      function t$(t) {
        return Ae(t) && Qe(t) == Po;
      }
      function Qo(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Ae(t) && !Ae(n) ? t !== t && n !== n : n$(t, n, i, l, Qo, d);
      }
      function n$(t, n, i, l, d, p) {
        var v = Z(t), g = Z(n), b = v ? ji : Ze(t), k = g ? ji : Ze(n);
        b = b == Tr ? mn : b, k = k == Tr ? mn : k;
        var x = b == mn, D = k == mn, R = b == k;
        if (R && Wn(t)) {
          if (!Wn(n))
            return !1;
          v = !0, x = !1;
        }
        if (R && !x)
          return p || (p = new zt()), v || Yr(t) ? ih(t, n, i, l, d, p) : x$(t, n, b, i, l, d, p);
        if (!(i & B)) {
          var W = x && pe.call(t, "__wrapped__"), z = D && pe.call(n, "__wrapped__");
          if (W || z) {
            var J = W ? t.value() : t, Y = z ? n.value() : n;
            return p || (p = new zt()), d(J, Y, i, l, p);
          }
        }
        return R ? (p || (p = new zt()), A$(t, n, i, l, d, p)) : !1;
      }
      function r$(t) {
        return Ae(t) && Ze(t) == Wt;
      }
      function Rl(t, n, i, l) {
        var d = i.length, p = d, v = !l;
        if (t == null)
          return !p;
        for (t = $e(t); d--; ) {
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
            var D = new zt();
            if (l)
              var R = l(k, x, b, t, n, D);
            if (!(R === r ? Qo(x, k, B | M, l, D) : R))
              return !1;
          }
        }
        return !0;
      }
      function If(t) {
        if (!xe(t) || R$(t))
          return !1;
        var n = Cn(t) ? r0 : Gg;
        return n.test(ur(t));
      }
      function o$(t) {
        return Ae(t) && Qe(t) == Fo;
      }
      function i$(t) {
        return Ae(t) && Ze(t) == qt;
      }
      function s$(t) {
        return Ae(t) && Os(t.length) && !!Ce[Qe(t)];
      }
      function kf(t) {
        return typeof t == "function" ? t : t == null ? lt : typeof t == "object" ? Z(t) ? Bf(t[0], t[1]) : Af(t) : Kh(t);
      }
      function Fl(t) {
        if (!ni(t))
          return u0(t);
        var n = [];
        for (var i in $e(t))
          pe.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function a$(t) {
        if (!xe(t))
          return q$(t);
        var n = ni(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !pe.call(t, l)) || i.push(l);
        return i;
      }
      function Ul(t, n) {
        return t < n;
      }
      function xf(t, n) {
        var i = -1, l = st(t) ? C(t.length) : [];
        return Pn(t, function(d, p, v) {
          l[++i] = n(d, p, v);
        }), l;
      }
      function Af(t) {
        var n = nu(t);
        return n.length == 1 && n[0][2] ? ch(n[0][0], n[0][1]) : function(i) {
          return i === t || Rl(i, t, n);
        };
      }
      function Bf(t, n) {
        return ou(t) && uh(n) ? ch(ln(t), n) : function(i) {
          var l = pu(i, t);
          return l === r && l === n ? wu(i, t) : Qo(n, l, B | M);
        };
      }
      function ys(t, n, i, l, d) {
        t !== n && Ll(n, function(p, v) {
          if (d || (d = new zt()), xe(p))
            l$(t, n, v, i, ys, l, d);
          else {
            var g = l ? l(su(t, v), p, v + "", t, n, d) : r;
            g === r && (g = p), Dl(t, v, g);
          }
        }, at);
      }
      function l$(t, n, i, l, d, p, v) {
        var g = su(t, i), b = su(n, i), k = v.get(b);
        if (k) {
          Dl(t, i, k);
          return;
        }
        var x = p ? p(g, b, i + "", t, n, v) : r, D = x === r;
        if (D) {
          var R = Z(b), W = !R && Wn(b), z = !R && !W && Yr(b);
          x = b, R || W || z ? Z(g) ? x = g : Be(g) ? x = it(g) : W ? (D = !1, x = qf(b, !0)) : z ? (D = !1, x = Hf(b, !0)) : x = [] : oi(b) || cr(b) ? (x = g, cr(g) ? x = Fh(g) : (!xe(g) || Cn(g)) && (x = lh(b))) : D = !1;
        }
        D && (v.set(b, x), d(x, b, l, p, v), v.delete(b)), Dl(t, i, x);
      }
      function Tf(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, bn(n, i) ? t[n] : r;
      }
      function Df(t, n, i) {
        n.length ? n = Ee(n, function(p) {
          return Z(p) ? function(v) {
            return ar(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [lt];
        var l = -1;
        n = Ee(n, vt(H()));
        var d = xf(t, function(p, v, g) {
          var b = Ee(n, function(k) {
            return k(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return L1(d, function(p, v) {
          return y$(p, v, i);
        });
      }
      function u$(t, n) {
        return Nf(t, n, function(i, l) {
          return wu(t, l);
        });
      }
      function Nf(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var v = n[l], g = ar(t, v);
          i(g, v) && ei(p, Fn(v, t), g);
        }
        return p;
      }
      function c$(t) {
        return function(n) {
          return ar(n, t);
        };
      }
      function Wl(t, n, i, l) {
        var d = l ? N1 : Lr, p = -1, v = n.length, g = t;
        for (t === n && (n = it(n)), i && (g = Ee(t, vt(i))); ++p < v; )
          for (var b = 0, k = n[p], x = i ? i(k) : k; (b = d(g, x, b, l)) > -1; )
            g !== t && ds.call(g, b, 1), ds.call(t, b, 1);
        return t;
      }
      function Lf(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            bn(d) ? ds.call(t, d, 1) : Yl(t, d);
          }
        }
        return t;
      }
      function ql(t, n) {
        return t + ps(wf() * (n - t + 1));
      }
      function d$(t, n, i, l) {
        for (var d = -1, p = Oe(hs((n - t) / (i || 1)), 0), v = C(p); p--; )
          v[l ? p : ++d] = t, t += i;
        return v;
      }
      function Hl(t, n) {
        var i = "";
        if (!t || n < 1 || n > Q)
          return i;
        do
          n % 2 && (i += t), n = ps(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function ee(t, n) {
        return au(dh(t, n, lt), t + "");
      }
      function f$(t) {
        return _f(Gr(t));
      }
      function h$(t, n) {
        var i = Gr(t);
        return Bs(i, sr(n, 0, i.length));
      }
      function ei(t, n, i, l) {
        if (!xe(t))
          return t;
        n = Fn(n, t);
        for (var d = -1, p = n.length, v = p - 1, g = t; g != null && ++d < p; ) {
          var b = ln(n[d]), k = i;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != v) {
            var x = g[b];
            k = l ? l(x, b, g) : r, k === r && (k = xe(x) ? x : bn(n[d + 1]) ? [] : {});
          }
          Ko(g, b, k), g = g[b];
        }
        return t;
      }
      var Mf = ws ? function(t, n) {
        return ws.set(t, n), t;
      } : lt, p$ = fs ? function(t, n) {
        return fs(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: mu(n),
          writable: !0
        });
      } : lt;
      function w$(t) {
        return Bs(Gr(t));
      }
      function Tt(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function v$(t, n) {
        var i;
        return Pn(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function Vs(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= _g) {
          for (; l < d; ) {
            var p = l + d >>> 1, v = t[p];
            v !== null && !_t(v) && (i ? v <= n : v < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return zl(t, n, lt, i);
      }
      function zl(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var v = n !== n, g = n === null, b = _t(n), k = n === r; d < p; ) {
          var x = ps((d + p) / 2), D = i(t[x]), R = D !== r, W = D === null, z = D === D, J = _t(D);
          if (v)
            var Y = l || z;
          else
            k ? Y = z && (l || R) : g ? Y = z && R && (l || !W) : b ? Y = z && R && !W && (l || !J) : W || J ? Y = !1 : Y = l ? D <= n : D < n;
          Y ? d = x + 1 : p = x;
        }
        return je(p, mg);
      }
      function Of(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var v = t[i], g = n ? n(v) : v;
          if (!i || !Yt(g, b)) {
            var b = g;
            p[d++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function Pf(t) {
        return typeof t == "number" ? t : _t(t) ? Gi : +t;
      }
      function mt(t) {
        if (typeof t == "string")
          return t;
        if (Z(t))
          return Ee(t, mt) + "";
        if (_t(t))
          return vf ? vf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -de ? "-0" : n;
      }
      function Rn(t, n, i) {
        var l = -1, d = ts, p = t.length, v = !0, g = [], b = g;
        if (i)
          v = !1, d = $l;
        else if (p >= a) {
          var k = n ? null : I$(t);
          if (k)
            return rs(k);
          v = !1, d = Ho, b = new ir();
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
      function Yl(t, n) {
        return n = Fn(n, t), t = fh(t, n), t == null || delete t[ln(Dt(n))];
      }
      function Rf(t, n, i, l) {
        return ei(t, n, i(ar(t, n)), l);
      }
      function bs(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Tt(t, l ? 0 : p, l ? p + 1 : d) : Tt(t, l ? p + 1 : 0, l ? d : p);
      }
      function Ff(t, n) {
        var i = t;
        return i instanceof ne && (i = i.value()), yl(n, function(l, d) {
          return d.func.apply(d.thisArg, Ln([l], d.args));
        }, i);
      }
      function Gl(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Rn(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var v = t[d], g = -1; ++g < l; )
            g != d && (p[d] = Jo(p[d] || v, t[g], n, i));
        return Rn(He(p, 1), n, i);
      }
      function Uf(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, v = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          i(v, t[l], g);
        }
        return v;
      }
      function jl(t) {
        return Be(t) ? t : [];
      }
      function Zl(t) {
        return typeof t == "function" ? t : lt;
      }
      function Fn(t, n) {
        return Z(t) ? t : ou(t, n) ? [t] : vh(fe(t));
      }
      var m$ = ee;
      function Un(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Tt(t, n, i);
      }
      var Wf = o0 || function(t) {
        return qe.clearTimeout(t);
      };
      function qf(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = cf ? cf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function Kl(t) {
        var n = new t.constructor(t.byteLength);
        return new us(n).set(new us(t)), n;
      }
      function _$(t, n) {
        var i = n ? Kl(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function g$(t) {
        var n = new t.constructor(t.source, Sd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function $$(t) {
        return Zo ? $e(Zo.call(t)) : {};
      }
      function Hf(t, n) {
        var i = n ? Kl(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function zf(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = _t(t), v = n !== r, g = n === null, b = n === n, k = _t(n);
          if (!g && !k && !p && t > n || p && v && b && !g && !k || l && v && b || !i && b || !d)
            return 1;
          if (!l && !p && !k && t < n || k && i && d && !l && !p || g && i && d || !v && d || !b)
            return -1;
        }
        return 0;
      }
      function y$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, v = d.length, g = i.length; ++l < v; ) {
          var b = zf(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var k = i[l];
            return b * (k == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Yf(t, n, i, l) {
        for (var d = -1, p = t.length, v = i.length, g = -1, b = n.length, k = Oe(p - v, 0), x = C(b + k), D = !l; ++g < b; )
          x[g] = n[g];
        for (; ++d < v; )
          (D || d < p) && (x[i[d]] = t[d]);
        for (; k--; )
          x[g++] = t[d++];
        return x;
      }
      function Gf(t, n, i, l) {
        for (var d = -1, p = t.length, v = -1, g = i.length, b = -1, k = n.length, x = Oe(p - g, 0), D = C(x + k), R = !l; ++d < x; )
          D[d] = t[d];
        for (var W = d; ++b < k; )
          D[W + b] = n[b];
        for (; ++v < g; )
          (R || d < p) && (D[W + i[v]] = t[d++]);
        return D;
      }
      function it(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function an(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, v = n.length; ++p < v; ) {
          var g = n[p], b = l ? l(i[g], t[g], g, i, t) : r;
          b === r && (b = t[g]), d ? $n(i, g, b) : Ko(i, g, b);
        }
        return i;
      }
      function V$(t, n) {
        return an(t, ru(t), n);
      }
      function b$(t, n) {
        return an(t, sh(t), n);
      }
      function Cs(t, n) {
        return function(i, l) {
          var d = Z(i) ? k1 : z0, p = n ? n() : {};
          return d(i, t, H(l, 2), p);
        };
      }
      function qr(t) {
        return ee(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, v = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, v && et(i[0], i[1], v) && (p = d < 3 ? r : p, d = 1), n = $e(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function jf(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!st(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, v = $e(i); (n ? p-- : ++p < d) && l(v[p], p, v) !== !1; )
            ;
          return i;
        };
      }
      function Zf(t) {
        return function(n, i, l) {
          for (var d = -1, p = $e(n), v = l(n), g = v.length; g--; ) {
            var b = v[t ? g : ++d];
            if (i(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function C$(t, n, i) {
        var l = n & L, d = ti(t);
        function p() {
          var v = this && this !== qe && this instanceof p ? d : t;
          return v.apply(l ? i : this, arguments);
        }
        return p;
      }
      function Kf(t) {
        return function(n) {
          n = fe(n);
          var i = Mr(n) ? Ht(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Un(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Hr(t) {
        return function(n) {
          return yl(jh(Gh(n).replace(p1, "")), t, "");
        };
      }
      function ti(t) {
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
          var i = Wr(t.prototype), l = t.apply(i, n);
          return xe(l) ? l : i;
        };
      }
      function S$(t, n, i) {
        var l = ti(t);
        function d() {
          for (var p = arguments.length, v = C(p), g = p, b = zr(d); g--; )
            v[g] = arguments[g];
          var k = p < 3 && v[0] !== b && v[p - 1] !== b ? [] : Mn(v, b);
          if (p -= k.length, p < i)
            return th(
              t,
              n,
              Ss,
              d.placeholder,
              r,
              v,
              k,
              r,
              r,
              i - p
            );
          var x = this && this !== qe && this instanceof d ? l : t;
          return wt(x, this, v);
        }
        return d;
      }
      function Jf(t) {
        return function(n, i, l) {
          var d = $e(n);
          if (!st(n)) {
            var p = H(i, 3);
            n = Fe(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var v = t(n, i, l);
          return v > -1 ? d[p ? n[v] : v] : r;
        };
      }
      function Xf(t) {
        return Vn(function(n) {
          var i = n.length, l = i, d = At.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new xt(c);
            if (d && !v && xs(p) == "wrapper")
              var v = new At([], !0);
          }
          for (l = v ? l : i; ++l < i; ) {
            p = n[l];
            var g = xs(p), b = g == "wrapper" ? tu(p) : r;
            b && iu(b[0]) && b[1] == (P | A | I | q) && !b[4].length && b[9] == 1 ? v = v[xs(b[0])].apply(v, b[3]) : v = p.length == 1 && iu(p) ? v[g]() : v.thru(p);
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
      function Ss(t, n, i, l, d, p, v, g, b, k) {
        var x = n & P, D = n & L, R = n & S, W = n & (A | O), z = n & ge, J = R ? r : ti(t);
        function Y() {
          for (var te = arguments.length, re = C(te), gt = te; gt--; )
            re[gt] = arguments[gt];
          if (W)
            var tt = zr(Y), $t = O1(re, tt);
          if (l && (re = Yf(re, l, d, W)), p && (re = Gf(re, p, v, W)), te -= $t, W && te < k) {
            var Te = Mn(re, tt);
            return th(
              t,
              n,
              Ss,
              Y.placeholder,
              i,
              re,
              Te,
              g,
              b,
              k - te
            );
          }
          var Gt = D ? i : this, En = R ? Gt[t] : t;
          return te = re.length, g ? re = z$(re, g) : z && te > 1 && re.reverse(), x && b < te && (re.length = b), this && this !== qe && this instanceof Y && (En = J || ti(En)), En.apply(Gt, re);
        }
        return Y;
      }
      function Qf(t, n) {
        return function(i, l) {
          return Q0(i, t, n(l), {});
        };
      }
      function Es(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = mt(i), l = mt(l)) : (i = Pf(i), l = Pf(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Jl(t) {
        return Vn(function(n) {
          return n = Ee(n, vt(H())), ee(function(i) {
            var l = this;
            return t(n, function(d) {
              return wt(d, l, i);
            });
          });
        });
      }
      function Is(t, n) {
        n = n === r ? " " : mt(n);
        var i = n.length;
        if (i < 2)
          return i ? Hl(n, t) : n;
        var l = Hl(n, hs(t / Or(n)));
        return Mr(n) ? Un(Ht(l), 0, t).join("") : l.slice(0, t);
      }
      function E$(t, n, i, l) {
        var d = n & L, p = ti(t);
        function v() {
          for (var g = -1, b = arguments.length, k = -1, x = l.length, D = C(x + b), R = this && this !== qe && this instanceof v ? p : t; ++k < x; )
            D[k] = l[k];
          for (; b--; )
            D[k++] = arguments[++g];
          return wt(R, d ? i : this, D);
        }
        return v;
      }
      function eh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && et(n, i, l) && (i = l = r), n = Sn(n), i === r ? (i = n, n = 0) : i = Sn(i), l = l === r ? n < i ? 1 : -1 : Sn(l), d$(n, i, l, t);
        };
      }
      function ks(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Nt(n), i = Nt(i)), t(n, i);
        };
      }
      function th(t, n, i, l, d, p, v, g, b, k) {
        var x = n & A, D = x ? v : r, R = x ? r : v, W = x ? p : r, z = x ? r : p;
        n |= x ? I : F, n &= ~(x ? F : I), n & N || (n &= ~(L | S));
        var J = [
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
        ], Y = i.apply(r, J);
        return iu(t) && hh(Y, J), Y.placeholder = l, ph(Y, t, n);
      }
      function Xl(t) {
        var n = Me[t];
        return function(i, l) {
          if (i = Nt(i), l = l == null ? 0 : je(K(l), 292), l && pf(i)) {
            var d = (fe(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (fe(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var I$ = Fr && 1 / rs(new Fr([, -0]))[1] == de ? function(t) {
        return new Fr(t);
      } : $u;
      function nh(t) {
        return function(n) {
          var i = Ze(n);
          return i == Wt ? kl(n) : i == qt ? H1(n) : M1(n, t(n));
        };
      }
      function yn(t, n, i, l, d, p, v, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new xt(c);
        var k = l ? l.length : 0;
        if (k || (n &= ~(I | F), l = d = r), v = v === r ? v : Oe(K(v), 0), g = g === r ? g : K(g), k -= d ? d.length : 0, n & F) {
          var x = l, D = d;
          l = d = r;
        }
        var R = b ? r : tu(t), W = [
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
        if (R && W$(W, R), t = W[0], n = W[1], i = W[2], l = W[3], d = W[4], g = W[9] = W[9] === r ? b ? 0 : t.length : Oe(W[9] - k, 0), !g && n & (A | O) && (n &= ~(A | O)), !n || n == L)
          var z = C$(t, n, i);
        else
          n == A || n == O ? z = S$(t, n, g) : (n == I || n == (L | I)) && !d.length ? z = E$(t, n, i, l) : z = Ss.apply(r, W);
        var J = R ? Mf : hh;
        return ph(J(z, W), t, n);
      }
      function rh(t, n, i, l) {
        return t === r || Yt(t, Rr[i]) && !pe.call(l, i) ? n : t;
      }
      function oh(t, n, i, l, d, p) {
        return xe(t) && xe(n) && (p.set(n, t), ys(t, n, r, oh, p), p.delete(n)), t;
      }
      function k$(t) {
        return oi(t) ? r : t;
      }
      function ih(t, n, i, l, d, p) {
        var v = i & B, g = t.length, b = n.length;
        if (g != b && !(v && b > g))
          return !1;
        var k = p.get(t), x = p.get(n);
        if (k && x)
          return k == n && x == t;
        var D = -1, R = !0, W = i & M ? new ir() : r;
        for (p.set(t, n), p.set(n, t); ++D < g; ) {
          var z = t[D], J = n[D];
          if (l)
            var Y = v ? l(J, z, D, n, t, p) : l(z, J, D, t, n, p);
          if (Y !== r) {
            if (Y)
              continue;
            R = !1;
            break;
          }
          if (W) {
            if (!Vl(n, function(te, re) {
              if (!Ho(W, re) && (z === te || d(z, te, i, l, p)))
                return W.push(re);
            })) {
              R = !1;
              break;
            }
          } else if (!(z === J || d(z, J, i, l, p))) {
            R = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), R;
      }
      function x$(t, n, i, l, d, p, v) {
        switch (i) {
          case Dr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case qo:
            return !(t.byteLength != n.byteLength || !p(new us(t), new us(n)));
          case Oo:
          case Po:
          case Ro:
            return Yt(+t, +n);
          case Zi:
            return t.name == n.name && t.message == n.message;
          case Fo:
          case Uo:
            return t == n + "";
          case Wt:
            var g = kl;
          case qt:
            var b = l & B;
            if (g || (g = rs), t.size != n.size && !b)
              return !1;
            var k = v.get(t);
            if (k)
              return k == n;
            l |= M, v.set(t, n);
            var x = ih(g(t), g(n), l, d, p, v);
            return v.delete(t), x;
          case Ji:
            if (Zo)
              return Zo.call(t) == Zo.call(n);
        }
        return !1;
      }
      function A$(t, n, i, l, d, p) {
        var v = i & B, g = Ql(t), b = g.length, k = Ql(n), x = k.length;
        if (b != x && !v)
          return !1;
        for (var D = b; D--; ) {
          var R = g[D];
          if (!(v ? R in n : pe.call(n, R)))
            return !1;
        }
        var W = p.get(t), z = p.get(n);
        if (W && z)
          return W == n && z == t;
        var J = !0;
        p.set(t, n), p.set(n, t);
        for (var Y = v; ++D < b; ) {
          R = g[D];
          var te = t[R], re = n[R];
          if (l)
            var gt = v ? l(re, te, R, n, t, p) : l(te, re, R, t, n, p);
          if (!(gt === r ? te === re || d(te, re, i, l, p) : gt)) {
            J = !1;
            break;
          }
          Y || (Y = R == "constructor");
        }
        if (J && !Y) {
          var tt = t.constructor, $t = n.constructor;
          tt != $t && "constructor" in t && "constructor" in n && !(typeof tt == "function" && tt instanceof tt && typeof $t == "function" && $t instanceof $t) && (J = !1);
        }
        return p.delete(t), p.delete(n), J;
      }
      function Vn(t) {
        return au(dh(t, r, $h), t + "");
      }
      function Ql(t) {
        return Sf(t, Fe, ru);
      }
      function eu(t) {
        return Sf(t, at, sh);
      }
      var tu = ws ? function(t) {
        return ws.get(t);
      } : $u;
      function xs(t) {
        for (var n = t.name + "", i = Ur[n], l = pe.call(Ur, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function zr(t) {
        var n = pe.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function H() {
        var t = h.iteratee || _u;
        return t = t === _u ? kf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function As(t, n) {
        var i = t.__data__;
        return P$(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function nu(t) {
        for (var n = Fe(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, uh(d)];
        }
        return n;
      }
      function lr(t, n) {
        var i = U1(t, n);
        return If(i) ? i : r;
      }
      function B$(t) {
        var n = pe.call(t, rr), i = t[rr];
        try {
          t[rr] = r;
          var l = !0;
        } catch {
        }
        var d = as.call(t);
        return l && (n ? t[rr] = i : delete t[rr]), d;
      }
      var ru = Al ? function(t) {
        return t == null ? [] : (t = $e(t), Nn(Al(t), function(n) {
          return ff.call(t, n);
        }));
      } : yu, sh = Al ? function(t) {
        for (var n = []; t; )
          Ln(n, ru(t)), t = cs(t);
        return n;
      } : yu, Ze = Qe;
      (Bl && Ze(new Bl(new ArrayBuffer(1))) != Dr || Yo && Ze(new Yo()) != Wt || Tl && Ze(Tl.resolve()) != yd || Fr && Ze(new Fr()) != qt || Go && Ze(new Go()) != Wo) && (Ze = function(t) {
        var n = Qe(t), i = n == mn ? t.constructor : r, l = i ? ur(i) : "";
        if (l)
          switch (l) {
            case h0:
              return Dr;
            case p0:
              return Wt;
            case w0:
              return yd;
            case v0:
              return qt;
            case m0:
              return Wo;
          }
        return n;
      });
      function T$(t, n, i) {
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
              n = je(n, t + v);
              break;
            case "takeRight":
              t = Oe(t, n - v);
              break;
          }
        }
        return { start: t, end: n };
      }
      function D$(t) {
        var n = t.match(Rg);
        return n ? n[1].split(Fg) : [];
      }
      function ah(t, n, i) {
        n = Fn(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var v = ln(n[l]);
          if (!(p = t != null && i(t, v)))
            break;
          t = t[v];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Os(d) && bn(v, d) && (Z(t) || cr(t)));
      }
      function N$(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && pe.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function lh(t) {
        return typeof t.constructor == "function" && !ni(t) ? Wr(cs(t)) : {};
      }
      function L$(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case qo:
            return Kl(t);
          case Oo:
          case Po:
            return new l(+t);
          case Dr:
            return _$(t, i);
          case nl:
          case rl:
          case ol:
          case il:
          case sl:
          case al:
          case ll:
          case ul:
          case cl:
            return Hf(t, i);
          case Wt:
            return new l();
          case Ro:
          case Uo:
            return new l(t);
          case Fo:
            return g$(t);
          case qt:
            return new l();
          case Ji:
            return $$(t);
        }
      }
      function M$(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Pg, `{
/* [wrapped with ` + n + `] */
`);
      }
      function O$(t) {
        return Z(t) || cr(t) || !!(hf && t && t[hf]);
      }
      function bn(t, n) {
        var i = typeof t;
        return n = n == null ? Q : n, !!n && (i == "number" || i != "symbol" && Zg.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function et(t, n, i) {
        if (!xe(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? st(i) && bn(n, i.length) : l == "string" && n in i) ? Yt(i[n], t) : !1;
      }
      function ou(t, n) {
        if (Z(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || _t(t) ? !0 : Ng.test(t) || !Dg.test(t) || n != null && t in $e(n);
      }
      function P$(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function iu(t) {
        var n = xs(t), i = h[n];
        if (typeof i != "function" || !(n in ne.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = tu(i);
        return !!l && t === l[0];
      }
      function R$(t) {
        return !!uf && uf in t;
      }
      var F$ = is ? Cn : Vu;
      function ni(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || Rr;
        return t === i;
      }
      function uh(t) {
        return t === t && !xe(t);
      }
      function ch(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in $e(i));
        };
      }
      function U$(t) {
        var n = Ls(t, function(l) {
          return i.size === m && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function W$(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (L | S | P), v = l == P && i == A || l == P && i == q && t[7].length <= n[8] || l == (P | q) && n[7].length <= n[8] && i == A;
        if (!(p || v))
          return t;
        l & L && (t[2] = n[2], d |= i & L ? 0 : N);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? Yf(b, g, n[4]) : g, t[4] = b ? Mn(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? Gf(b, g, n[6]) : g, t[6] = b ? Mn(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & P && (t[8] = t[8] == null ? n[8] : je(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function q$(t) {
        var n = [];
        if (t != null)
          for (var i in $e(t))
            n.push(i);
        return n;
      }
      function H$(t) {
        return as.call(t);
      }
      function dh(t, n, i) {
        return n = Oe(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = Oe(l.length - n, 0), v = C(p); ++d < p; )
            v[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(v), wt(t, this, g);
        };
      }
      function fh(t, n) {
        return n.length < 2 ? t : ar(t, Tt(n, 0, -1));
      }
      function z$(t, n) {
        for (var i = t.length, l = je(n.length, i), d = it(t); l--; ) {
          var p = n[l];
          t[l] = bn(p, i) ? d[p] : r;
        }
        return t;
      }
      function su(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var hh = wh(Mf), ri = s0 || function(t, n) {
        return qe.setTimeout(t, n);
      }, au = wh(p$);
      function ph(t, n, i) {
        var l = n + "";
        return au(t, M$(l, Y$(D$(l), i)));
      }
      function wh(t) {
        var n = 0, i = 0;
        return function() {
          var l = c0(), d = Se - (l - i);
          if (i = l, d > 0) {
            if (++n >= be)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Bs(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = ql(i, d), v = t[p];
          t[p] = t[i], t[i] = v;
        }
        return t.length = n, t;
      }
      var vh = U$(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Lg, function(i, l, d, p) {
          n.push(d ? p.replace(qg, "$1") : l || i);
        }), n;
      });
      function ln(t) {
        if (typeof t == "string" || _t(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -de ? "-0" : n;
      }
      function ur(t) {
        if (t != null) {
          try {
            return ss.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Y$(t, n) {
        return kt(gg, function(i) {
          var l = "_." + i[0];
          n & i[1] && !ts(t, l) && t.push(l);
        }), t.sort();
      }
      function mh(t) {
        if (t instanceof ne)
          return t.clone();
        var n = new At(t.__wrapped__, t.__chain__);
        return n.__actions__ = it(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function G$(t, n, i) {
        (i ? et(t, n, i) : n === r) ? n = 1 : n = Oe(K(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, v = C(hs(l / n)); d < l; )
          v[p++] = Tt(t, d, d += n);
        return v;
      }
      function j$(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function Z$() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Ln(Z(i) ? it(i) : [i], He(n, 1));
      }
      var K$ = ee(function(t, n) {
        return Be(t) ? Jo(t, He(n, 1, Be, !0)) : [];
      }), J$ = ee(function(t, n) {
        var i = Dt(n);
        return Be(i) && (i = r), Be(t) ? Jo(t, He(n, 1, Be, !0), H(i, 2)) : [];
      }), X$ = ee(function(t, n) {
        var i = Dt(n);
        return Be(i) && (i = r), Be(t) ? Jo(t, He(n, 1, Be, !0), r, i) : [];
      });
      function Q$(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), Tt(t, n < 0 ? 0 : n, l)) : [];
      }
      function ey(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), n = l - n, Tt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function ty(t, n) {
        return t && t.length ? bs(t, H(n, 3), !0, !0) : [];
      }
      function ny(t, n) {
        return t && t.length ? bs(t, H(n, 3), !0) : [];
      }
      function ry(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && et(t, n, i) && (i = 0, l = d), Z0(t, n, i, l)) : [];
      }
      function _h(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : K(i);
        return d < 0 && (d = Oe(l + d, 0)), ns(t, H(n, 3), d);
      }
      function gh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = K(i), d = i < 0 ? Oe(l + d, 0) : je(d, l - 1)), ns(t, H(n, 3), d, !0);
      }
      function $h(t) {
        var n = t == null ? 0 : t.length;
        return n ? He(t, 1) : [];
      }
      function oy(t) {
        var n = t == null ? 0 : t.length;
        return n ? He(t, de) : [];
      }
      function iy(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : K(n), He(t, n)) : [];
      }
      function sy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function yh(t) {
        return t && t.length ? t[0] : r;
      }
      function ay(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : K(i);
        return d < 0 && (d = Oe(l + d, 0)), Lr(t, n, d);
      }
      function ly(t) {
        var n = t == null ? 0 : t.length;
        return n ? Tt(t, 0, -1) : [];
      }
      var uy = ee(function(t) {
        var n = Ee(t, jl);
        return n.length && n[0] === t[0] ? Pl(n) : [];
      }), cy = ee(function(t) {
        var n = Dt(t), i = Ee(t, jl);
        return n === Dt(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Pl(i, H(n, 2)) : [];
      }), dy = ee(function(t) {
        var n = Dt(t), i = Ee(t, jl);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Pl(i, r, n) : [];
      });
      function fy(t, n) {
        return t == null ? "" : l0.call(t, n);
      }
      function Dt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function hy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = K(i), d = d < 0 ? Oe(l + d, 0) : je(d, l - 1)), n === n ? Y1(t, n, d) : ns(t, ef, d, !0);
      }
      function py(t, n) {
        return t && t.length ? Tf(t, K(n)) : r;
      }
      var wy = ee(Vh);
      function Vh(t, n) {
        return t && t.length && n && n.length ? Wl(t, n) : t;
      }
      function vy(t, n, i) {
        return t && t.length && n && n.length ? Wl(t, n, H(i, 2)) : t;
      }
      function my(t, n, i) {
        return t && t.length && n && n.length ? Wl(t, n, r, i) : t;
      }
      var _y = Vn(function(t, n) {
        var i = t == null ? 0 : t.length, l = Nl(t, n);
        return Lf(t, Ee(n, function(d) {
          return bn(d, i) ? +d : d;
        }).sort(zf)), l;
      });
      function gy(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = H(n, 3); ++l < p; ) {
          var v = t[l];
          n(v, l, t) && (i.push(v), d.push(l));
        }
        return Lf(t, d), i;
      }
      function lu(t) {
        return t == null ? t : f0.call(t);
      }
      function $y(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && et(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : K(n), i = i === r ? l : K(i)), Tt(t, n, i)) : [];
      }
      function yy(t, n) {
        return Vs(t, n);
      }
      function Vy(t, n, i) {
        return zl(t, n, H(i, 2));
      }
      function by(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Vs(t, n);
          if (l < i && Yt(t[l], n))
            return l;
        }
        return -1;
      }
      function Cy(t, n) {
        return Vs(t, n, !0);
      }
      function Sy(t, n, i) {
        return zl(t, n, H(i, 2), !0);
      }
      function Ey(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Vs(t, n, !0) - 1;
          if (Yt(t[l], n))
            return l;
        }
        return -1;
      }
      function Iy(t) {
        return t && t.length ? Of(t) : [];
      }
      function ky(t, n) {
        return t && t.length ? Of(t, H(n, 2)) : [];
      }
      function xy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Tt(t, 1, n) : [];
      }
      function Ay(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : K(n), Tt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function By(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), n = l - n, Tt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Ty(t, n) {
        return t && t.length ? bs(t, H(n, 3), !1, !0) : [];
      }
      function Dy(t, n) {
        return t && t.length ? bs(t, H(n, 3)) : [];
      }
      var Ny = ee(function(t) {
        return Rn(He(t, 1, Be, !0));
      }), Ly = ee(function(t) {
        var n = Dt(t);
        return Be(n) && (n = r), Rn(He(t, 1, Be, !0), H(n, 2));
      }), My = ee(function(t) {
        var n = Dt(t);
        return n = typeof n == "function" ? n : r, Rn(He(t, 1, Be, !0), r, n);
      });
      function Oy(t) {
        return t && t.length ? Rn(t) : [];
      }
      function Py(t, n) {
        return t && t.length ? Rn(t, H(n, 2)) : [];
      }
      function Ry(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Rn(t, r, n) : [];
      }
      function uu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Nn(t, function(i) {
          if (Be(i))
            return n = Oe(i.length, n), !0;
        }), El(n, function(i) {
          return Ee(t, bl(i));
        });
      }
      function bh(t, n) {
        if (!(t && t.length))
          return [];
        var i = uu(t);
        return n == null ? i : Ee(i, function(l) {
          return wt(n, r, l);
        });
      }
      var Fy = ee(function(t, n) {
        return Be(t) ? Jo(t, n) : [];
      }), Uy = ee(function(t) {
        return Gl(Nn(t, Be));
      }), Wy = ee(function(t) {
        var n = Dt(t);
        return Be(n) && (n = r), Gl(Nn(t, Be), H(n, 2));
      }), qy = ee(function(t) {
        var n = Dt(t);
        return n = typeof n == "function" ? n : r, Gl(Nn(t, Be), r, n);
      }), Hy = ee(uu);
      function zy(t, n) {
        return Uf(t || [], n || [], Ko);
      }
      function Yy(t, n) {
        return Uf(t || [], n || [], ei);
      }
      var Gy = ee(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, bh(t, i);
      });
      function Ch(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function jy(t, n) {
        return n(t), t;
      }
      function Ts(t, n) {
        return n(t);
      }
      var Zy = Vn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Nl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ne) || !bn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Ts,
          args: [d],
          thisArg: r
        }), new At(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function Ky() {
        return Ch(this);
      }
      function Jy() {
        return new At(this.value(), this.__chain__);
      }
      function Xy() {
        this.__values__ === r && (this.__values__ = Ph(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function Qy() {
        return this;
      }
      function eV(t) {
        for (var n, i = this; i instanceof ms; ) {
          var l = mh(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function tV() {
        var t = this.__wrapped__;
        if (t instanceof ne) {
          var n = t;
          return this.__actions__.length && (n = new ne(this)), n = n.reverse(), n.__actions__.push({
            func: Ts,
            args: [lu],
            thisArg: r
          }), new At(n, this.__chain__);
        }
        return this.thru(lu);
      }
      function nV() {
        return Ff(this.__wrapped__, this.__actions__);
      }
      var rV = Cs(function(t, n, i) {
        pe.call(t, i) ? ++t[i] : $n(t, i, 1);
      });
      function oV(t, n, i) {
        var l = Z(t) ? Xd : j0;
        return i && et(t, n, i) && (n = r), l(t, H(n, 3));
      }
      function iV(t, n) {
        var i = Z(t) ? Nn : bf;
        return i(t, H(n, 3));
      }
      var sV = Jf(_h), aV = Jf(gh);
      function lV(t, n) {
        return He(Ds(t, n), 1);
      }
      function uV(t, n) {
        return He(Ds(t, n), de);
      }
      function cV(t, n, i) {
        return i = i === r ? 1 : K(i), He(Ds(t, n), i);
      }
      function Sh(t, n) {
        var i = Z(t) ? kt : Pn;
        return i(t, H(n, 3));
      }
      function Eh(t, n) {
        var i = Z(t) ? x1 : Vf;
        return i(t, H(n, 3));
      }
      var dV = Cs(function(t, n, i) {
        pe.call(t, i) ? t[i].push(n) : $n(t, i, [n]);
      });
      function fV(t, n, i, l) {
        t = st(t) ? t : Gr(t), i = i && !l ? K(i) : 0;
        var d = t.length;
        return i < 0 && (i = Oe(d + i, 0)), Ps(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Lr(t, n, i) > -1;
      }
      var hV = ee(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = st(t) ? C(t.length) : [];
        return Pn(t, function(v) {
          p[++l] = d ? wt(n, v, i) : Xo(v, n, i);
        }), p;
      }), pV = Cs(function(t, n, i) {
        $n(t, i, n);
      });
      function Ds(t, n) {
        var i = Z(t) ? Ee : xf;
        return i(t, H(n, 3));
      }
      function wV(t, n, i, l) {
        return t == null ? [] : (Z(n) || (n = n == null ? [] : [n]), i = l ? r : i, Z(i) || (i = i == null ? [] : [i]), Df(t, n, i));
      }
      var vV = Cs(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function mV(t, n, i) {
        var l = Z(t) ? yl : nf, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, Pn);
      }
      function _V(t, n, i) {
        var l = Z(t) ? A1 : nf, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, Vf);
      }
      function gV(t, n) {
        var i = Z(t) ? Nn : bf;
        return i(t, Ms(H(n, 3)));
      }
      function $V(t) {
        var n = Z(t) ? _f : f$;
        return n(t);
      }
      function yV(t, n, i) {
        (i ? et(t, n, i) : n === r) ? n = 1 : n = K(n);
        var l = Z(t) ? q0 : h$;
        return l(t, n);
      }
      function VV(t) {
        var n = Z(t) ? H0 : w$;
        return n(t);
      }
      function bV(t) {
        if (t == null)
          return 0;
        if (st(t))
          return Ps(t) ? Or(t) : t.length;
        var n = Ze(t);
        return n == Wt || n == qt ? t.size : Fl(t).length;
      }
      function CV(t, n, i) {
        var l = Z(t) ? Vl : v$;
        return i && et(t, n, i) && (n = r), l(t, H(n, 3));
      }
      var SV = ee(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && et(t, n[0], n[1]) ? n = [] : i > 2 && et(n[0], n[1], n[2]) && (n = [n[0]]), Df(t, He(n, 1), []);
      }), Ns = i0 || function() {
        return qe.Date.now();
      };
      function EV(t, n) {
        if (typeof n != "function")
          throw new xt(c);
        return t = K(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Ih(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, yn(t, P, r, r, r, r, n);
      }
      function kh(t, n) {
        var i;
        if (typeof n != "function")
          throw new xt(c);
        return t = K(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var cu = ee(function(t, n, i) {
        var l = L;
        if (i.length) {
          var d = Mn(i, zr(cu));
          l |= I;
        }
        return yn(t, l, n, i, d);
      }), xh = ee(function(t, n, i) {
        var l = L | S;
        if (i.length) {
          var d = Mn(i, zr(xh));
          l |= I;
        }
        return yn(n, l, t, i, d);
      });
      function Ah(t, n, i) {
        n = i ? r : n;
        var l = yn(t, A, r, r, r, r, r, n);
        return l.placeholder = Ah.placeholder, l;
      }
      function Bh(t, n, i) {
        n = i ? r : n;
        var l = yn(t, O, r, r, r, r, r, n);
        return l.placeholder = Bh.placeholder, l;
      }
      function Th(t, n, i) {
        var l, d, p, v, g, b, k = 0, x = !1, D = !1, R = !0;
        if (typeof t != "function")
          throw new xt(c);
        n = Nt(n) || 0, xe(i) && (x = !!i.leading, D = "maxWait" in i, p = D ? Oe(Nt(i.maxWait) || 0, n) : p, R = "trailing" in i ? !!i.trailing : R);
        function W(Te) {
          var Gt = l, En = d;
          return l = d = r, k = Te, v = t.apply(En, Gt), v;
        }
        function z(Te) {
          return k = Te, g = ri(te, n), x ? W(Te) : v;
        }
        function J(Te) {
          var Gt = Te - b, En = Te - k, Jh = n - Gt;
          return D ? je(Jh, p - En) : Jh;
        }
        function Y(Te) {
          var Gt = Te - b, En = Te - k;
          return b === r || Gt >= n || Gt < 0 || D && En >= p;
        }
        function te() {
          var Te = Ns();
          if (Y(Te))
            return re(Te);
          g = ri(te, J(Te));
        }
        function re(Te) {
          return g = r, R && l ? W(Te) : (l = d = r, v);
        }
        function gt() {
          g !== r && Wf(g), k = 0, l = b = d = g = r;
        }
        function tt() {
          return g === r ? v : re(Ns());
        }
        function $t() {
          var Te = Ns(), Gt = Y(Te);
          if (l = arguments, d = this, b = Te, Gt) {
            if (g === r)
              return z(b);
            if (D)
              return Wf(g), g = ri(te, n), W(b);
          }
          return g === r && (g = ri(te, n)), v;
        }
        return $t.cancel = gt, $t.flush = tt, $t;
      }
      var IV = ee(function(t, n) {
        return yf(t, 1, n);
      }), kV = ee(function(t, n, i) {
        return yf(t, Nt(n) || 0, i);
      });
      function xV(t) {
        return yn(t, ge);
      }
      function Ls(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new xt(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var v = t.apply(this, l);
          return i.cache = p.set(d, v) || p, v;
        };
        return i.cache = new (Ls.Cache || gn)(), i;
      }
      Ls.Cache = gn;
      function Ms(t) {
        if (typeof t != "function")
          throw new xt(c);
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
      function AV(t) {
        return kh(2, t);
      }
      var BV = m$(function(t, n) {
        n = n.length == 1 && Z(n[0]) ? Ee(n[0], vt(H())) : Ee(He(n, 1), vt(H()));
        var i = n.length;
        return ee(function(l) {
          for (var d = -1, p = je(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return wt(t, this, l);
        });
      }), du = ee(function(t, n) {
        var i = Mn(n, zr(du));
        return yn(t, I, r, n, i);
      }), Dh = ee(function(t, n) {
        var i = Mn(n, zr(Dh));
        return yn(t, F, r, n, i);
      }), TV = Vn(function(t, n) {
        return yn(t, q, r, r, r, n);
      });
      function DV(t, n) {
        if (typeof t != "function")
          throw new xt(c);
        return n = n === r ? n : K(n), ee(t, n);
      }
      function NV(t, n) {
        if (typeof t != "function")
          throw new xt(c);
        return n = n == null ? 0 : Oe(K(n), 0), ee(function(i) {
          var l = i[n], d = Un(i, 0, n);
          return l && Ln(d, l), wt(t, this, d);
        });
      }
      function LV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new xt(c);
        return xe(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Th(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function MV(t) {
        return Ih(t, 1);
      }
      function OV(t, n) {
        return du(Zl(n), t);
      }
      function PV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Z(t) ? t : [t];
      }
      function RV(t) {
        return Bt(t, T);
      }
      function FV(t, n) {
        return n = typeof n == "function" ? n : r, Bt(t, T, n);
      }
      function UV(t) {
        return Bt(t, $ | T);
      }
      function WV(t, n) {
        return n = typeof n == "function" ? n : r, Bt(t, $ | T, n);
      }
      function qV(t, n) {
        return n == null || $f(t, n, Fe(n));
      }
      function Yt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var HV = ks(Ol), zV = ks(function(t, n) {
        return t >= n;
      }), cr = Ef(function() {
        return arguments;
      }()) ? Ef : function(t) {
        return Ae(t) && pe.call(t, "callee") && !ff.call(t, "callee");
      }, Z = C.isArray, YV = Yd ? vt(Yd) : e$;
      function st(t) {
        return t != null && Os(t.length) && !Cn(t);
      }
      function Be(t) {
        return Ae(t) && st(t);
      }
      function GV(t) {
        return t === !0 || t === !1 || Ae(t) && Qe(t) == Oo;
      }
      var Wn = a0 || Vu, jV = Gd ? vt(Gd) : t$;
      function ZV(t) {
        return Ae(t) && t.nodeType === 1 && !oi(t);
      }
      function KV(t) {
        if (t == null)
          return !0;
        if (st(t) && (Z(t) || typeof t == "string" || typeof t.splice == "function" || Wn(t) || Yr(t) || cr(t)))
          return !t.length;
        var n = Ze(t);
        if (n == Wt || n == qt)
          return !t.size;
        if (ni(t))
          return !Fl(t).length;
        for (var i in t)
          if (pe.call(t, i))
            return !1;
        return !0;
      }
      function JV(t, n) {
        return Qo(t, n);
      }
      function XV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? Qo(t, n, r, i) : !!l;
      }
      function fu(t) {
        if (!Ae(t))
          return !1;
        var n = Qe(t);
        return n == Zi || n == yg || typeof t.message == "string" && typeof t.name == "string" && !oi(t);
      }
      function QV(t) {
        return typeof t == "number" && pf(t);
      }
      function Cn(t) {
        if (!xe(t))
          return !1;
        var n = Qe(t);
        return n == Ki || n == $d || n == $g || n == bg;
      }
      function Nh(t) {
        return typeof t == "number" && t == K(t);
      }
      function Os(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Q;
      }
      function xe(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Ae(t) {
        return t != null && typeof t == "object";
      }
      var Lh = jd ? vt(jd) : r$;
      function eb(t, n) {
        return t === n || Rl(t, n, nu(n));
      }
      function tb(t, n, i) {
        return i = typeof i == "function" ? i : r, Rl(t, n, nu(n), i);
      }
      function nb(t) {
        return Mh(t) && t != +t;
      }
      function rb(t) {
        if (F$(t))
          throw new j(u);
        return If(t);
      }
      function ob(t) {
        return t === null;
      }
      function ib(t) {
        return t == null;
      }
      function Mh(t) {
        return typeof t == "number" || Ae(t) && Qe(t) == Ro;
      }
      function oi(t) {
        if (!Ae(t) || Qe(t) != mn)
          return !1;
        var n = cs(t);
        if (n === null)
          return !0;
        var i = pe.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && ss.call(i) == t0;
      }
      var hu = Zd ? vt(Zd) : o$;
      function sb(t) {
        return Nh(t) && t >= -Q && t <= Q;
      }
      var Oh = Kd ? vt(Kd) : i$;
      function Ps(t) {
        return typeof t == "string" || !Z(t) && Ae(t) && Qe(t) == Uo;
      }
      function _t(t) {
        return typeof t == "symbol" || Ae(t) && Qe(t) == Ji;
      }
      var Yr = Jd ? vt(Jd) : s$;
      function ab(t) {
        return t === r;
      }
      function lb(t) {
        return Ae(t) && Ze(t) == Wo;
      }
      function ub(t) {
        return Ae(t) && Qe(t) == Sg;
      }
      var cb = ks(Ul), db = ks(function(t, n) {
        return t <= n;
      });
      function Ph(t) {
        if (!t)
          return [];
        if (st(t))
          return Ps(t) ? Ht(t) : it(t);
        if (zo && t[zo])
          return q1(t[zo]());
        var n = Ze(t), i = n == Wt ? kl : n == qt ? rs : Gr;
        return i(t);
      }
      function Sn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Nt(t), t === de || t === -de) {
          var n = t < 0 ? -1 : 1;
          return n * ke;
        }
        return t === t ? t : 0;
      }
      function K(t) {
        var n = Sn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Rh(t) {
        return t ? sr(K(t), 0, on) : 0;
      }
      function Nt(t) {
        if (typeof t == "number")
          return t;
        if (_t(t))
          return Gi;
        if (xe(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = xe(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = rf(t);
        var i = Yg.test(t);
        return i || jg.test(t) ? E1(t.slice(2), i ? 2 : 8) : zg.test(t) ? Gi : +t;
      }
      function Fh(t) {
        return an(t, at(t));
      }
      function fb(t) {
        return t ? sr(K(t), -Q, Q) : t === 0 ? t : 0;
      }
      function fe(t) {
        return t == null ? "" : mt(t);
      }
      var hb = qr(function(t, n) {
        if (ni(n) || st(n)) {
          an(n, Fe(n), t);
          return;
        }
        for (var i in n)
          pe.call(n, i) && Ko(t, i, n[i]);
      }), Uh = qr(function(t, n) {
        an(n, at(n), t);
      }), Rs = qr(function(t, n, i, l) {
        an(n, at(n), t, l);
      }), pb = qr(function(t, n, i, l) {
        an(n, Fe(n), t, l);
      }), wb = Vn(Nl);
      function vb(t, n) {
        var i = Wr(t);
        return n == null ? i : gf(i, n);
      }
      var mb = ee(function(t, n) {
        t = $e(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && et(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], v = at(p), g = -1, b = v.length; ++g < b; ) {
            var k = v[g], x = t[k];
            (x === r || Yt(x, Rr[k]) && !pe.call(t, k)) && (t[k] = p[k]);
          }
        return t;
      }), _b = ee(function(t) {
        return t.push(r, oh), wt(Wh, r, t);
      });
      function gb(t, n) {
        return Qd(t, H(n, 3), sn);
      }
      function $b(t, n) {
        return Qd(t, H(n, 3), Ml);
      }
      function yb(t, n) {
        return t == null ? t : Ll(t, H(n, 3), at);
      }
      function Vb(t, n) {
        return t == null ? t : Cf(t, H(n, 3), at);
      }
      function bb(t, n) {
        return t && sn(t, H(n, 3));
      }
      function Cb(t, n) {
        return t && Ml(t, H(n, 3));
      }
      function Sb(t) {
        return t == null ? [] : $s(t, Fe(t));
      }
      function Eb(t) {
        return t == null ? [] : $s(t, at(t));
      }
      function pu(t, n, i) {
        var l = t == null ? r : ar(t, n);
        return l === r ? i : l;
      }
      function Ib(t, n) {
        return t != null && ah(t, n, K0);
      }
      function wu(t, n) {
        return t != null && ah(t, n, J0);
      }
      var kb = Qf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = as.call(n)), t[n] = i;
      }, mu(lt)), xb = Qf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = as.call(n)), pe.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, H), Ab = ee(Xo);
      function Fe(t) {
        return st(t) ? mf(t) : Fl(t);
      }
      function at(t) {
        return st(t) ? mf(t, !0) : a$(t);
      }
      function Bb(t, n) {
        var i = {};
        return n = H(n, 3), sn(t, function(l, d, p) {
          $n(i, n(l, d, p), l);
        }), i;
      }
      function Tb(t, n) {
        var i = {};
        return n = H(n, 3), sn(t, function(l, d, p) {
          $n(i, d, n(l, d, p));
        }), i;
      }
      var Db = qr(function(t, n, i) {
        ys(t, n, i);
      }), Wh = qr(function(t, n, i, l) {
        ys(t, n, i, l);
      }), Nb = Vn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ee(n, function(p) {
          return p = Fn(p, t), l || (l = p.length > 1), p;
        }), an(t, eu(t), i), l && (i = Bt(i, $ | y | T, k$));
        for (var d = n.length; d--; )
          Yl(i, n[d]);
        return i;
      });
      function Lb(t, n) {
        return qh(t, Ms(H(n)));
      }
      var Mb = Vn(function(t, n) {
        return t == null ? {} : u$(t, n);
      });
      function qh(t, n) {
        if (t == null)
          return {};
        var i = Ee(eu(t), function(l) {
          return [l];
        });
        return n = H(n), Nf(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Ob(t, n, i) {
        n = Fn(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[ln(n[l])];
          p === r && (l = d, p = i), t = Cn(p) ? p.call(t) : p;
        }
        return t;
      }
      function Pb(t, n, i) {
        return t == null ? t : ei(t, n, i);
      }
      function Rb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : ei(t, n, i, l);
      }
      var Hh = nh(Fe), zh = nh(at);
      function Fb(t, n, i) {
        var l = Z(t), d = l || Wn(t) || Yr(t);
        if (n = H(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : xe(t) ? i = Cn(p) ? Wr(cs(t)) : {} : i = {};
        }
        return (d ? kt : sn)(t, function(v, g, b) {
          return n(i, v, g, b);
        }), i;
      }
      function Ub(t, n) {
        return t == null ? !0 : Yl(t, n);
      }
      function Wb(t, n, i) {
        return t == null ? t : Rf(t, n, Zl(i));
      }
      function qb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Rf(t, n, Zl(i), l);
      }
      function Gr(t) {
        return t == null ? [] : Il(t, Fe(t));
      }
      function Hb(t) {
        return t == null ? [] : Il(t, at(t));
      }
      function zb(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Nt(i), i = i === i ? i : 0), n !== r && (n = Nt(n), n = n === n ? n : 0), sr(Nt(t), n, i);
      }
      function Yb(t, n, i) {
        return n = Sn(n), i === r ? (i = n, n = 0) : i = Sn(i), t = Nt(t), X0(t, n, i);
      }
      function Gb(t, n, i) {
        if (i && typeof i != "boolean" && et(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Sn(t), n === r ? (n = t, t = 0) : n = Sn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = wf();
          return je(t + d * (n - t + S1("1e-" + ((d + "").length - 1))), n);
        }
        return ql(t, n);
      }
      var jb = Hr(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Yh(n) : n);
      });
      function Yh(t) {
        return vu(fe(t).toLowerCase());
      }
      function Gh(t) {
        return t = fe(t), t && t.replace(Kg, P1).replace(w1, "");
      }
      function Zb(t, n, i) {
        t = fe(t), n = mt(n);
        var l = t.length;
        i = i === r ? l : sr(K(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function Kb(t) {
        return t = fe(t), t && Ag.test(t) ? t.replace(bd, R1) : t;
      }
      function Jb(t) {
        return t = fe(t), t && Mg.test(t) ? t.replace(dl, "\\$&") : t;
      }
      var Xb = Hr(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), Qb = Hr(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), eC = Kf("toLowerCase");
      function tC(t, n, i) {
        t = fe(t), n = K(n);
        var l = n ? Or(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Is(ps(d), i) + t + Is(hs(d), i);
      }
      function nC(t, n, i) {
        t = fe(t), n = K(n);
        var l = n ? Or(t) : 0;
        return n && l < n ? t + Is(n - l, i) : t;
      }
      function rC(t, n, i) {
        t = fe(t), n = K(n);
        var l = n ? Or(t) : 0;
        return n && l < n ? Is(n - l, i) + t : t;
      }
      function oC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), d0(fe(t).replace(fl, ""), n || 0);
      }
      function iC(t, n, i) {
        return (i ? et(t, n, i) : n === r) ? n = 1 : n = K(n), Hl(fe(t), n);
      }
      function sC() {
        var t = arguments, n = fe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var aC = Hr(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function lC(t, n, i) {
        return i && typeof i != "number" && et(t, n, i) && (n = i = r), i = i === r ? on : i >>> 0, i ? (t = fe(t), t && (typeof n == "string" || n != null && !hu(n)) && (n = mt(n), !n && Mr(t)) ? Un(Ht(t), 0, i) : t.split(n, i)) : [];
      }
      var uC = Hr(function(t, n, i) {
        return t + (i ? " " : "") + vu(n);
      });
      function cC(t, n, i) {
        return t = fe(t), i = i == null ? 0 : sr(K(i), 0, t.length), n = mt(n), t.slice(i, i + n.length) == n;
      }
      function dC(t, n, i) {
        var l = h.templateSettings;
        i && et(t, n, i) && (n = r), t = fe(t), n = Rs({}, n, l, rh);
        var d = Rs({}, n.imports, l.imports, rh), p = Fe(d), v = Il(d, p), g, b, k = 0, x = n.interpolate || Xi, D = "__p += '", R = xl(
          (n.escape || Xi).source + "|" + x.source + "|" + (x === Cd ? Hg : Xi).source + "|" + (n.evaluate || Xi).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (pe.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++$1 + "]") + `
`;
        t.replace(R, function(Y, te, re, gt, tt, $t) {
          return re || (re = gt), D += t.slice(k, $t).replace(Jg, F1), te && (g = !0, D += `' +
__e(` + te + `) +
'`), tt && (b = !0, D += `';
` + tt + `;
__p += '`), re && (D += `' +
((__t = (` + re + `)) == null ? '' : __t) +
'`), k = $t + Y.length, Y;
        }), D += `';
`;
        var z = pe.call(n, "variable") && n.variable;
        if (!z)
          D = `with (obj) {
` + D + `
}
`;
        else if (Wg.test(z))
          throw new j(f);
        D = (b ? D.replace(Eg, "") : D).replace(Ig, "$1").replace(kg, "$1;"), D = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var J = Zh(function() {
          return ae(p, W + "return " + D).apply(r, v);
        });
        if (J.source = D, fu(J))
          throw J;
        return J;
      }
      function fC(t) {
        return fe(t).toLowerCase();
      }
      function hC(t) {
        return fe(t).toUpperCase();
      }
      function pC(t, n, i) {
        if (t = fe(t), t && (i || n === r))
          return rf(t);
        if (!t || !(n = mt(n)))
          return t;
        var l = Ht(t), d = Ht(n), p = of(l, d), v = sf(l, d) + 1;
        return Un(l, p, v).join("");
      }
      function wC(t, n, i) {
        if (t = fe(t), t && (i || n === r))
          return t.slice(0, lf(t) + 1);
        if (!t || !(n = mt(n)))
          return t;
        var l = Ht(t), d = sf(l, Ht(n)) + 1;
        return Un(l, 0, d).join("");
      }
      function vC(t, n, i) {
        if (t = fe(t), t && (i || n === r))
          return t.replace(fl, "");
        if (!t || !(n = mt(n)))
          return t;
        var l = Ht(t), d = of(l, Ht(n));
        return Un(l, d).join("");
      }
      function mC(t, n) {
        var i = se, l = me;
        if (xe(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? K(n.length) : i, l = "omission" in n ? mt(n.omission) : l;
        }
        t = fe(t);
        var p = t.length;
        if (Mr(t)) {
          var v = Ht(t);
          p = v.length;
        }
        if (i >= p)
          return t;
        var g = i - Or(l);
        if (g < 1)
          return l;
        var b = v ? Un(v, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (v && (g += b.length - g), hu(d)) {
          if (t.slice(g).search(d)) {
            var k, x = b;
            for (d.global || (d = xl(d.source, fe(Sd.exec(d)) + "g")), d.lastIndex = 0; k = d.exec(x); )
              var D = k.index;
            b = b.slice(0, D === r ? g : D);
          }
        } else if (t.indexOf(mt(d), g) != g) {
          var R = b.lastIndexOf(d);
          R > -1 && (b = b.slice(0, R));
        }
        return b + l;
      }
      function _C(t) {
        return t = fe(t), t && xg.test(t) ? t.replace(Vd, G1) : t;
      }
      var gC = Hr(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), vu = Kf("toUpperCase");
      function jh(t, n, i) {
        return t = fe(t), n = i ? r : n, n === r ? W1(t) ? K1(t) : D1(t) : t.match(n) || [];
      }
      var Zh = ee(function(t, n) {
        try {
          return wt(t, r, n);
        } catch (i) {
          return fu(i) ? i : new j(i);
        }
      }), $C = Vn(function(t, n) {
        return kt(n, function(i) {
          i = ln(i), $n(t, i, cu(t[i], t));
        }), t;
      });
      function yC(t) {
        var n = t == null ? 0 : t.length, i = H();
        return t = n ? Ee(t, function(l) {
          if (typeof l[1] != "function")
            throw new xt(c);
          return [i(l[0]), l[1]];
        }) : [], ee(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (wt(p[0], this, l))
              return wt(p[1], this, l);
          }
        });
      }
      function VC(t) {
        return G0(Bt(t, $));
      }
      function mu(t) {
        return function() {
          return t;
        };
      }
      function bC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var CC = Xf(), SC = Xf(!0);
      function lt(t) {
        return t;
      }
      function _u(t) {
        return kf(typeof t == "function" ? t : Bt(t, $));
      }
      function EC(t) {
        return Af(Bt(t, $));
      }
      function IC(t, n) {
        return Bf(t, Bt(n, $));
      }
      var kC = ee(function(t, n) {
        return function(i) {
          return Xo(i, t, n);
        };
      }), xC = ee(function(t, n) {
        return function(i) {
          return Xo(t, i, n);
        };
      });
      function gu(t, n, i) {
        var l = Fe(n), d = $s(n, l);
        i == null && !(xe(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = $s(n, Fe(n)));
        var p = !(xe(i) && "chain" in i) || !!i.chain, v = Cn(t);
        return kt(d, function(g) {
          var b = n[g];
          t[g] = b, v && (t.prototype[g] = function() {
            var k = this.__chain__;
            if (p || k) {
              var x = t(this.__wrapped__), D = x.__actions__ = it(this.__actions__);
              return D.push({ func: b, args: arguments, thisArg: t }), x.__chain__ = k, x;
            }
            return b.apply(t, Ln([this.value()], arguments));
          });
        }), t;
      }
      function AC() {
        return qe._ === this && (qe._ = n0), this;
      }
      function $u() {
      }
      function BC(t) {
        return t = K(t), ee(function(n) {
          return Tf(n, t);
        });
      }
      var TC = Jl(Ee), DC = Jl(Xd), NC = Jl(Vl);
      function Kh(t) {
        return ou(t) ? bl(ln(t)) : c$(t);
      }
      function LC(t) {
        return function(n) {
          return t == null ? r : ar(t, n);
        };
      }
      var MC = eh(), OC = eh(!0);
      function yu() {
        return [];
      }
      function Vu() {
        return !1;
      }
      function PC() {
        return {};
      }
      function RC() {
        return "";
      }
      function FC() {
        return !0;
      }
      function UC(t, n) {
        if (t = K(t), t < 1 || t > Q)
          return [];
        var i = on, l = je(t, on);
        n = H(n), t -= on;
        for (var d = El(l, n); ++i < t; )
          n(i);
        return d;
      }
      function WC(t) {
        return Z(t) ? Ee(t, ln) : _t(t) ? [t] : it(vh(fe(t)));
      }
      function qC(t) {
        var n = ++e0;
        return fe(t) + n;
      }
      var HC = Es(function(t, n) {
        return t + n;
      }, 0), zC = Xl("ceil"), YC = Es(function(t, n) {
        return t / n;
      }, 1), GC = Xl("floor");
      function jC(t) {
        return t && t.length ? gs(t, lt, Ol) : r;
      }
      function ZC(t, n) {
        return t && t.length ? gs(t, H(n, 2), Ol) : r;
      }
      function KC(t) {
        return tf(t, lt);
      }
      function JC(t, n) {
        return tf(t, H(n, 2));
      }
      function XC(t) {
        return t && t.length ? gs(t, lt, Ul) : r;
      }
      function QC(t, n) {
        return t && t.length ? gs(t, H(n, 2), Ul) : r;
      }
      var eS = Es(function(t, n) {
        return t * n;
      }, 1), tS = Xl("round"), nS = Es(function(t, n) {
        return t - n;
      }, 0);
      function rS(t) {
        return t && t.length ? Sl(t, lt) : 0;
      }
      function oS(t, n) {
        return t && t.length ? Sl(t, H(n, 2)) : 0;
      }
      return h.after = EV, h.ary = Ih, h.assign = hb, h.assignIn = Uh, h.assignInWith = Rs, h.assignWith = pb, h.at = wb, h.before = kh, h.bind = cu, h.bindAll = $C, h.bindKey = xh, h.castArray = PV, h.chain = Ch, h.chunk = G$, h.compact = j$, h.concat = Z$, h.cond = yC, h.conforms = VC, h.constant = mu, h.countBy = rV, h.create = vb, h.curry = Ah, h.curryRight = Bh, h.debounce = Th, h.defaults = mb, h.defaultsDeep = _b, h.defer = IV, h.delay = kV, h.difference = K$, h.differenceBy = J$, h.differenceWith = X$, h.drop = Q$, h.dropRight = ey, h.dropRightWhile = ty, h.dropWhile = ny, h.fill = ry, h.filter = iV, h.flatMap = lV, h.flatMapDeep = uV, h.flatMapDepth = cV, h.flatten = $h, h.flattenDeep = oy, h.flattenDepth = iy, h.flip = xV, h.flow = CC, h.flowRight = SC, h.fromPairs = sy, h.functions = Sb, h.functionsIn = Eb, h.groupBy = dV, h.initial = ly, h.intersection = uy, h.intersectionBy = cy, h.intersectionWith = dy, h.invert = kb, h.invertBy = xb, h.invokeMap = hV, h.iteratee = _u, h.keyBy = pV, h.keys = Fe, h.keysIn = at, h.map = Ds, h.mapKeys = Bb, h.mapValues = Tb, h.matches = EC, h.matchesProperty = IC, h.memoize = Ls, h.merge = Db, h.mergeWith = Wh, h.method = kC, h.methodOf = xC, h.mixin = gu, h.negate = Ms, h.nthArg = BC, h.omit = Nb, h.omitBy = Lb, h.once = AV, h.orderBy = wV, h.over = TC, h.overArgs = BV, h.overEvery = DC, h.overSome = NC, h.partial = du, h.partialRight = Dh, h.partition = vV, h.pick = Mb, h.pickBy = qh, h.property = Kh, h.propertyOf = LC, h.pull = wy, h.pullAll = Vh, h.pullAllBy = vy, h.pullAllWith = my, h.pullAt = _y, h.range = MC, h.rangeRight = OC, h.rearg = TV, h.reject = gV, h.remove = gy, h.rest = DV, h.reverse = lu, h.sampleSize = yV, h.set = Pb, h.setWith = Rb, h.shuffle = VV, h.slice = $y, h.sortBy = SV, h.sortedUniq = Iy, h.sortedUniqBy = ky, h.split = lC, h.spread = NV, h.tail = xy, h.take = Ay, h.takeRight = By, h.takeRightWhile = Ty, h.takeWhile = Dy, h.tap = jy, h.throttle = LV, h.thru = Ts, h.toArray = Ph, h.toPairs = Hh, h.toPairsIn = zh, h.toPath = WC, h.toPlainObject = Fh, h.transform = Fb, h.unary = MV, h.union = Ny, h.unionBy = Ly, h.unionWith = My, h.uniq = Oy, h.uniqBy = Py, h.uniqWith = Ry, h.unset = Ub, h.unzip = uu, h.unzipWith = bh, h.update = Wb, h.updateWith = qb, h.values = Gr, h.valuesIn = Hb, h.without = Fy, h.words = jh, h.wrap = OV, h.xor = Uy, h.xorBy = Wy, h.xorWith = qy, h.zip = Hy, h.zipObject = zy, h.zipObjectDeep = Yy, h.zipWith = Gy, h.entries = Hh, h.entriesIn = zh, h.extend = Uh, h.extendWith = Rs, gu(h, h), h.add = HC, h.attempt = Zh, h.camelCase = jb, h.capitalize = Yh, h.ceil = zC, h.clamp = zb, h.clone = RV, h.cloneDeep = UV, h.cloneDeepWith = WV, h.cloneWith = FV, h.conformsTo = qV, h.deburr = Gh, h.defaultTo = bC, h.divide = YC, h.endsWith = Zb, h.eq = Yt, h.escape = Kb, h.escapeRegExp = Jb, h.every = oV, h.find = sV, h.findIndex = _h, h.findKey = gb, h.findLast = aV, h.findLastIndex = gh, h.findLastKey = $b, h.floor = GC, h.forEach = Sh, h.forEachRight = Eh, h.forIn = yb, h.forInRight = Vb, h.forOwn = bb, h.forOwnRight = Cb, h.get = pu, h.gt = HV, h.gte = zV, h.has = Ib, h.hasIn = wu, h.head = yh, h.identity = lt, h.includes = fV, h.indexOf = ay, h.inRange = Yb, h.invoke = Ab, h.isArguments = cr, h.isArray = Z, h.isArrayBuffer = YV, h.isArrayLike = st, h.isArrayLikeObject = Be, h.isBoolean = GV, h.isBuffer = Wn, h.isDate = jV, h.isElement = ZV, h.isEmpty = KV, h.isEqual = JV, h.isEqualWith = XV, h.isError = fu, h.isFinite = QV, h.isFunction = Cn, h.isInteger = Nh, h.isLength = Os, h.isMap = Lh, h.isMatch = eb, h.isMatchWith = tb, h.isNaN = nb, h.isNative = rb, h.isNil = ib, h.isNull = ob, h.isNumber = Mh, h.isObject = xe, h.isObjectLike = Ae, h.isPlainObject = oi, h.isRegExp = hu, h.isSafeInteger = sb, h.isSet = Oh, h.isString = Ps, h.isSymbol = _t, h.isTypedArray = Yr, h.isUndefined = ab, h.isWeakMap = lb, h.isWeakSet = ub, h.join = fy, h.kebabCase = Xb, h.last = Dt, h.lastIndexOf = hy, h.lowerCase = Qb, h.lowerFirst = eC, h.lt = cb, h.lte = db, h.max = jC, h.maxBy = ZC, h.mean = KC, h.meanBy = JC, h.min = XC, h.minBy = QC, h.stubArray = yu, h.stubFalse = Vu, h.stubObject = PC, h.stubString = RC, h.stubTrue = FC, h.multiply = eS, h.nth = py, h.noConflict = AC, h.noop = $u, h.now = Ns, h.pad = tC, h.padEnd = nC, h.padStart = rC, h.parseInt = oC, h.random = Gb, h.reduce = mV, h.reduceRight = _V, h.repeat = iC, h.replace = sC, h.result = Ob, h.round = tS, h.runInContext = V, h.sample = $V, h.size = bV, h.snakeCase = aC, h.some = CV, h.sortedIndex = yy, h.sortedIndexBy = Vy, h.sortedIndexOf = by, h.sortedLastIndex = Cy, h.sortedLastIndexBy = Sy, h.sortedLastIndexOf = Ey, h.startCase = uC, h.startsWith = cC, h.subtract = nS, h.sum = rS, h.sumBy = oS, h.template = dC, h.times = UC, h.toFinite = Sn, h.toInteger = K, h.toLength = Rh, h.toLower = fC, h.toNumber = Nt, h.toSafeInteger = fb, h.toString = fe, h.toUpper = hC, h.trim = pC, h.trimEnd = wC, h.trimStart = vC, h.truncate = mC, h.unescape = _C, h.uniqueId = qC, h.upperCase = gC, h.upperFirst = vu, h.each = Sh, h.eachRight = Eh, h.first = yh, gu(h, function() {
        var t = {};
        return sn(h, function(n, i) {
          pe.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, kt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), kt(["drop", "take"], function(t, n) {
        ne.prototype[t] = function(i) {
          i = i === r ? 1 : Oe(K(i), 0);
          var l = this.__filtered__ && !n ? new ne(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = je(i, l.__takeCount__) : l.__views__.push({
            size: je(i, on),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ne.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), kt(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ie || i == Ne;
        ne.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: H(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), kt(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        ne.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), kt(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        ne.prototype[t] = function() {
          return this.__filtered__ ? new ne(this) : this[i](1);
        };
      }), ne.prototype.compact = function() {
        return this.filter(lt);
      }, ne.prototype.find = function(t) {
        return this.filter(t).head();
      }, ne.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ne.prototype.invokeMap = ee(function(t, n) {
        return typeof t == "function" ? new ne(this) : this.map(function(i) {
          return Xo(i, t, n);
        });
      }), ne.prototype.reject = function(t) {
        return this.filter(Ms(H(t)));
      }, ne.prototype.slice = function(t, n) {
        t = K(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new ne(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = K(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, ne.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ne.prototype.toArray = function() {
        return this.take(on);
      }, sn(ne.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var v = this.__wrapped__, g = l ? [1] : arguments, b = v instanceof ne, k = g[0], x = b || Z(v), D = function(te) {
            var re = d.apply(h, Ln([te], g));
            return l && R ? re[0] : re;
          };
          x && i && typeof k == "function" && k.length != 1 && (b = x = !1);
          var R = this.__chain__, W = !!this.__actions__.length, z = p && !R, J = b && !W;
          if (!p && x) {
            v = J ? v : new ne(this);
            var Y = t.apply(v, g);
            return Y.__actions__.push({ func: Ts, args: [D], thisArg: r }), new At(Y, R);
          }
          return z && J ? t.apply(this, g) : (Y = this.thru(D), z ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), kt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = os[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), sn(ne.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          pe.call(Ur, l) || (Ur[l] = []), Ur[l].push({ name: n, func: i });
        }
      }), Ur[Ss(r, S).name] = [{
        name: "wrapper",
        func: r
      }], ne.prototype.clone = _0, ne.prototype.reverse = g0, ne.prototype.value = $0, h.prototype.at = Zy, h.prototype.chain = Ky, h.prototype.commit = Jy, h.prototype.next = Xy, h.prototype.plant = eV, h.prototype.reverse = tV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = nV, h.prototype.first = h.prototype.head, zo && (h.prototype[zo] = Qy), h;
    }, Pr = J1();
    nr ? ((nr.exports = Pr)._ = Pr, _l._ = Pr) : qe._ = Pr;
  }).call(ii);
})(ve, ve.exports);
const CE = "/alarms?_s=", Ma = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, SE = async (e, o) => {
  try {
    return (await tn.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ma
    )).status === 204;
  } catch {
    return !1;
  }
}, Tm = async (e, o) => {
  try {
    return (await tn.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ma
    )).status === 204;
  } catch {
    return !1;
  }
}, EE = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Dn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ma
    )).status == 204;
  } catch {
    return !1;
  }
}, IE = async () => {
  try {
    const e = `${CE}isSituation==true&limit=0`, o = await Dn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, kE = async (e) => {
  try {
    const o = e.join(",id=="), r = await Dn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Dm = async (e) => {
  try {
    const o = await Dn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, xE = async (e) => {
  try {
    const o = await Dn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, AE = async () => {
  try {
    const e = await Dn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => ve.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, BE = async (e, o, r) => {
  try {
    return (await Dn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ma
    )).status == 204;
  } catch {
    return !1;
  }
}, TE = async (e, o) => {
  try {
    return (await Dn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, DE = async () => {
  try {
    const e = await Dn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, NE = window.Pinia.defineStore, nn = NE("situationsStore", {
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
      const e = await AE();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await IE();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = ve.exports.groupBy(o, "status"), a = [
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
        const s = await Dm(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await kE(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = ve.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await xE(s);
          a && (r[s] = ve.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await DE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), LE = window.Vue.openBlock, ME = window.Vue.createElementBlock, OE = window.Vue.createElementVNode;
var PE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RE = {}, FE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UE = /* @__PURE__ */ OE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), WE = [
  UE
];
function qE(e, o) {
  return LE(), ME("svg", FE, WE);
}
var yo = /* @__PURE__ */ PE(RE, [["render", qE]]);
var HE = Object.defineProperty, yp = Object.getOwnPropertySymbols, zE = Object.prototype.hasOwnProperty, YE = Object.prototype.propertyIsEnumerable, Vp = (e, o, r) => o in e ? HE(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, bp = (e, o) => {
  for (var r in o || (o = {}))
    zE.call(o, r) && Vp(e, r, o[r]);
  if (yp)
    for (var r of yp(o))
      YE.call(o, r) && Vp(e, r, o[r]);
  return e;
};
const GE = window.Vue.defineComponent, jE = window.Vue.toRaw, Pu = window.Vue.h;
var ZE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const KE = {
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
}, JE = GE({
  props: KE,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = jE(this.icon);
    return this.$slots.default ? Pu("span", { class: "feather-icon-container" }, [
      Pu(this.$slots.default()[0], bp({
        class: o
      }, r))
    ]) : Pu(s, bp({
      class: o
    }, r));
  }
});
var G = /* @__PURE__ */ ZE(JE, [["__scopeId", "data-v-52cbf270"]]);
const XE = window.Vue.openBlock, QE = window.Vue.createElementBlock, e2 = window.Vue.createElementVNode;
var t2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const n2 = {}, r2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, o2 = /* @__PURE__ */ e2("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), i2 = [
  o2
];
function s2(e, o) {
  return XE(), QE("svg", r2, i2);
}
var Nm = /* @__PURE__ */ t2(n2, [["render", s2]]);
const We = {
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
function pn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ve(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Re(e) {
  Ve(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function a2(e, o) {
  Ve(2, arguments);
  var r = Re(e), s = pn(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function l2(e, o) {
  Ve(2, arguments);
  var r = Re(e).getTime(), s = pn(o);
  return new Date(r + s);
}
var u2 = {};
function So() {
  return u2;
}
function Cp(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = So(), $ = pn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Re(e), T = y.getDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - B), y.setHours(0, 0, 0, 0), y;
}
function kc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Sp(e) {
  Ve(1, arguments);
  var o = Re(e);
  return o.setHours(0, 0, 0, 0), o;
}
function c2(e, o) {
  Ve(2, arguments);
  var r = Re(e), s = Re(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Lm(e, o) {
  Ve(2, arguments);
  var r = Sp(e), s = Sp(o);
  return r.getTime() === s.getTime();
}
function d2(e) {
  return Ve(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function f2(e) {
  if (Ve(1, arguments), !d2(e) && typeof e != "number")
    return !1;
  var o = Re(e);
  return !isNaN(Number(o));
}
function h2(e, o) {
  Ve(2, arguments);
  var r = pn(o);
  return l2(e, -r);
}
var p2 = 864e5;
function w2(e) {
  Ve(1, arguments);
  var o = Re(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / p2) + 1;
}
function ya(e) {
  Ve(1, arguments);
  var o = 1, r = Re(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Mm(e) {
  Ve(1, arguments);
  var o = Re(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = ya(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = ya(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function v2(e) {
  Ve(1, arguments);
  var o = Mm(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = ya(r);
  return s;
}
var m2 = 6048e5;
function _2(e) {
  Ve(1, arguments);
  var o = Re(e), r = ya(o).getTime() - v2(o).getTime();
  return Math.round(r / m2) + 1;
}
function Va(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = So(), $ = pn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Re(e), T = y.getUTCDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - B), y.setUTCHours(0, 0, 0, 0), y;
}
function Om(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = Re(e), $ = _.getUTCFullYear(), y = So(), T = pn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = new Date(0);
  B.setUTCFullYear($ + 1, 0, T), B.setUTCHours(0, 0, 0, 0);
  var M = Va(B, o), L = new Date(0);
  L.setUTCFullYear($, 0, T), L.setUTCHours(0, 0, 0, 0);
  var S = Va(L, o);
  return _.getTime() >= M.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function g2(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = So(), $ = pn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Om(e, o), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var B = Va(T, o);
  return B;
}
var $2 = 6048e5;
function y2(e, o) {
  Ve(1, arguments);
  var r = Re(e), s = Va(r, o).getTime() - g2(r, o).getTime();
  return Math.round(s / $2) + 1;
}
function we(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var V2 = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return we(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : we(r + 1, 2);
  },
  d: function(e, o) {
    return we(e.getUTCDate(), o.length);
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
    return we(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return we(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return we(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return we(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return we(a, o.length);
  }
};
const qn = V2;
var Kr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, b2 = {
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
    return qn.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = Om(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return we(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : we(u, o.length);
  },
  R: function(e, o) {
    var r = Mm(e);
    return we(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return we(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return we(s, 2);
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
        return we(s, 2);
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
        return qn.M(e, o);
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
        return we(s + 1, 2);
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
    var a = y2(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : we(a, o.length);
  },
  I: function(e, o, r) {
    var s = _2(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : we(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : qn.d(e, o);
  },
  D: function(e, o, r) {
    var s = w2(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : we(s, o.length);
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
        return we(u, 2);
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
        return we(u, o.length);
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
        return we(a, o.length);
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
    switch (s === 12 ? a = Kr.noon : s === 0 ? a = Kr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = Kr.evening : s >= 12 ? a = Kr.afternoon : s >= 4 ? a = Kr.morning : a = Kr.night, o) {
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
    return qn.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : qn.H(e, o);
  },
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : we(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : we(s, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : qn.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : qn.s(e, o);
  },
  S: function(e, o) {
    return qn.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Ip(u);
      case "XXXX":
      case "XX":
        return Cr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Cr(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Ip(u);
      case "xxxx":
      case "xx":
        return Cr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Cr(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ep(u, ":");
      case "OOOO":
      default:
        return "GMT" + Cr(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ep(u, ":");
      case "zzzz":
      default:
        return "GMT" + Cr(u, ":");
    }
  },
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return we(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return we(u, o.length);
  }
};
function Ep(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + we(u, 2);
}
function Ip(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + we(Math.abs(e) / 60, 2);
  }
  return Cr(e, o);
}
function Cr(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = we(Math.floor(a / 60), 2), c = we(a % 60, 2);
  return s + u + r + c;
}
const C2 = b2;
var kp = function(e, o) {
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
}, Pm = function(e, o) {
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
}, S2 = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return kp(e, o);
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
  return u.replace("{{date}}", kp(s, o)).replace("{{time}}", Pm(a, o));
}, E2 = {
  p: Pm,
  P: S2
};
const I2 = E2;
var k2 = ["D", "DD"], x2 = ["YY", "YYYY"];
function A2(e) {
  return k2.indexOf(e) !== -1;
}
function B2(e) {
  return x2.indexOf(e) !== -1;
}
function xp(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var T2 = {
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
}, D2 = function(e, o, r) {
  var s, a = T2[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const N2 = D2;
function Ru(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var L2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, M2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, O2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, P2 = {
  date: Ru({
    formats: L2,
    defaultWidth: "full"
  }),
  time: Ru({
    formats: M2,
    defaultWidth: "full"
  }),
  dateTime: Ru({
    formats: O2,
    defaultWidth: "full"
  })
};
const R2 = P2;
var F2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, U2 = function(e, o, r, s) {
  return F2[e];
};
const W2 = U2;
function si(e) {
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
var q2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, H2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, z2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Y2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, G2 = {
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
}, j2 = {
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
}, Z2 = function(e, o) {
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
}, K2 = {
  ordinalNumber: Z2,
  era: si({
    values: q2,
    defaultWidth: "wide"
  }),
  quarter: si({
    values: H2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: si({
    values: z2,
    defaultWidth: "wide"
  }),
  day: si({
    values: Y2,
    defaultWidth: "wide"
  }),
  dayPeriod: si({
    values: G2,
    defaultWidth: "wide",
    formattingValues: j2,
    defaultFormattingWidth: "wide"
  })
};
const J2 = K2;
function ai(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? Q2(f, function($) {
      return $.test(c);
    }) : X2(f, function($) {
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
function X2(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function Q2(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function eI(e) {
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
var tI = /^(\d+)(th|st|nd|rd)?/i, nI = /\d+/i, rI = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, oI = {
  any: [/^b/i, /^(a|c)/i]
}, iI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, sI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, aI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, lI = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, uI = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, cI = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, dI = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, fI = {
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
}, hI = {
  ordinalNumber: eI({
    matchPattern: tI,
    parsePattern: nI,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: ai({
    matchPatterns: rI,
    defaultMatchWidth: "wide",
    parsePatterns: oI,
    defaultParseWidth: "any"
  }),
  quarter: ai({
    matchPatterns: iI,
    defaultMatchWidth: "wide",
    parsePatterns: sI,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: ai({
    matchPatterns: aI,
    defaultMatchWidth: "wide",
    parsePatterns: lI,
    defaultParseWidth: "any"
  }),
  day: ai({
    matchPatterns: uI,
    defaultMatchWidth: "wide",
    parsePatterns: cI,
    defaultParseWidth: "any"
  }),
  dayPeriod: ai({
    matchPatterns: dI,
    defaultMatchWidth: "any",
    parsePatterns: fI,
    defaultParseWidth: "any"
  })
};
const pI = hI;
var wI = {
  code: "en-US",
  formatDistance: N2,
  formatLong: R2,
  formatRelative: W2,
  localize: J2,
  match: pI,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Rm = wI;
var vI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, mI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, _I = /^'([^]*?)'?$/, gI = /''/g, $I = /[a-zA-Z]/;
function yI(e, o, r) {
  var s, a, u, c, f, w, m, _, $, y, T, B, M, L, S, N, A, O;
  Ve(2, arguments);
  var I = String(o), F = So(), P = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : F.locale) !== null && s !== void 0 ? s : Rm, q = pn((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (m = r.locale) === null || m === void 0 || (_ = m.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : F.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = F.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(q >= 1 && q <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ge = pn((T = (B = (M = (L = r == null ? void 0 : r.weekStartsOn) !== null && L !== void 0 ? L : r == null || (S = r.locale) === null || S === void 0 || (N = S.options) === null || N === void 0 ? void 0 : N.weekStartsOn) !== null && M !== void 0 ? M : F.weekStartsOn) !== null && B !== void 0 ? B : (A = F.locale) === null || A === void 0 || (O = A.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!(ge >= 0 && ge <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var se = Re(e);
  if (!f2(se))
    throw new RangeError("Invalid time value");
  var me = kc(se), be = h2(se, me), Se = {
    firstWeekContainsDate: q,
    weekStartsOn: ge,
    locale: P,
    _originalDate: se
  }, Ie = I.match(mI).map(function(ce) {
    var Ne = ce[0];
    if (Ne === "p" || Ne === "P") {
      var de = I2[Ne];
      return de(ce, P.formatLong);
    }
    return ce;
  }).join("").match(vI).map(function(ce) {
    if (ce === "''")
      return "'";
    var Ne = ce[0];
    if (Ne === "'")
      return VI(ce);
    var de = C2[Ne];
    if (de)
      return !(r != null && r.useAdditionalWeekYearTokens) && B2(ce) && xp(ce, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && A2(ce) && xp(ce, o, String(e)), de(be, ce, P.localize, Se);
    if (Ne.match($I))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ne + "`");
    return ce;
  }).join("");
  return Ie;
}
function VI(e) {
  var o = e.match(_I);
  return o ? o[1].replace(gI, "'") : e;
}
function Fm(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function bI(e) {
  return Fm({}, e);
}
var Ap = 1e3 * 60, ba = 60 * 24, Bp = ba * 30, Tp = ba * 365;
function Oa(e, o, r) {
  var s, a, u;
  Ve(2, arguments);
  var c = So(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : Rm;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = c2(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var m = Fm(bI(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = Re(o), $ = Re(e)) : (_ = Re(e), $ = Re(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if (y === "floor")
    T = Math.floor;
  else if (y === "ceil")
    T = Math.ceil;
  else if (y === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var B = $.getTime() - _.getTime(), M = B / Ap, L = kc($) - kc(_), S = (B - L) / Ap, N = r == null ? void 0 : r.unit, A;
  if (N ? A = String(N) : M < 1 ? A = "second" : M < 60 ? A = "minute" : M < ba ? A = "hour" : S < Bp ? A = "day" : S < Tp ? A = "month" : A = "year", A === "second") {
    var O = T(B / 1e3);
    return f.formatDistance("xSeconds", O, m);
  } else if (A === "minute") {
    var I = T(M);
    return f.formatDistance("xMinutes", I, m);
  } else if (A === "hour") {
    var F = T(M / 60);
    return f.formatDistance("xHours", F, m);
  } else if (A === "day") {
    var P = T(S / ba);
    return f.formatDistance("xDays", P, m);
  } else if (A === "month") {
    var q = T(S / Bp);
    return q === 12 && N !== "month" ? f.formatDistance("xYears", 1, m) : f.formatDistance("xMonths", q, m);
  } else if (A === "year") {
    var ge = T(S / Tp);
    return f.formatDistance("xYears", ge, m);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function CI(e, o, r) {
  Ve(2, arguments);
  var s = Cp(e, r), a = Cp(o, r);
  return s.getTime() === a.getTime();
}
function SI(e, o) {
  return Ve(1, arguments), CI(e, Date.now(), o);
}
function EI(e) {
  return Ve(1, arguments), Lm(e, Date.now());
}
function II(e, o) {
  Ve(2, arguments);
  var r = pn(o);
  return a2(e, -r);
}
function kI(e) {
  return Ve(1, arguments), Lm(e, II(Date.now(), 1));
}
const wn = (e) => {
  let o = "";
  if (e)
    try {
      o = yI(new Date(e), We.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Um = (e, o) => {
  const s = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), a = s.length > o ? "..." : "";
  return s.substring(0, o) + a;
}, xI = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => EI(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => kI(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => SI(s.firstEventTime)
      );
      break;
  }
  return r;
}, AI = window.Vue.defineComponent, Vt = window.Vue.unref, Dp = window.Vue.normalizeClass, fn = window.Vue.createElementVNode, Jr = window.Vue.toDisplayString, Np = window.Vue.createVNode, dr = window.Vue.openBlock, fr = window.Vue.createElementBlock, Fs = window.Vue.createCommentVNode, xc = window.Vue.createTextVNode, BI = window.Vue.renderList, TI = window.Vue.Fragment, DI = window.Vue.pushScopeId, NI = window.Vue.popScopeId, Jc = (e) => (DI("data-v-fb22b492"), e = e(), NI(), e), LI = { class: "content" }, MI = { class: "title-row" }, OI = { class: "title" }, PI = {
  key: 0,
  class: "accepted"
}, RI = {
  key: 1,
  class: "rejected"
}, FI = /* @__PURE__ */ Jc(() => /* @__PURE__ */ fn("span", { class: "info-title" }, " Duration: ", -1)), UI = { key: 0 }, WI = /* @__PURE__ */ Jc(() => /* @__PURE__ */ fn("span", { class: "info-title" }, " First Event: ", -1)), qI = { class: "description" }, HI = /* @__PURE__ */ Jc(() => /* @__PURE__ */ fn("hr", null, null, -1)), zI = {
  key: 1,
  class: "count-info"
}, YI = /* @__PURE__ */ xc(" Alarms: "), GI = { class: "info-title" }, jI = /* @__PURE__ */ AI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = We.ACCEPTED, a = We.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, w) => {
      var m, _, $;
      return dr(), fr("div", {
        onClick: c,
        class: Dp(["card", {
          rejected: r.situationInfo.status == Vt(a)
        }])
      }, [
        fn("div", {
          class: Dp(["severity-line", [`${(_ = (m = r.situationInfo) == null ? void 0 : m.severity) == null ? void 0 : _.toLowerCase()}-bg dark`]])
        }, null, 2),
        fn("div", LI, [
          fn("div", MI, [
            fn("div", OI, "Situation " + Jr(($ = r.situationInfo) == null ? void 0 : $.id), 1),
            r.situationInfo.status == Vt(s) ? (dr(), fr("div", PI, [
              Np(Vt(G), {
                icon: Vt(yo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Fs("", !0),
            r.situationInfo.status == Vt(a) ? (dr(), fr("div", RI, [
              Np(Vt(G), {
                icon: Vt(Nm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Fs("", !0)
          ]),
          fn("div", null, [
            FI,
            xc(" " + Jr(Vt(Oa)(
              Vt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Fs("", !0) : (dr(), fr("div", UI, [
            WI,
            xc(Jr(Vt(wn)(r.situationInfo.firstEventTime)), 1)
          ])),
          fn("div", qI, Jr(Vt(Um)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          HI,
          r.situationInfo.relatedAlarms ? (dr(), fr("div", zI, [
            YI,
            fn("span", GI, Jr(r.situationInfo.relatedAlarms.length), 1)
          ])) : Fs("", !0),
          (dr(!0), fr(TI, null, BI(Vt(ve.exports.keys)(
            Vt(ve.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (dr(), fr("div", {
            class: "info-title",
            key: y
          }, " - " + Jr(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Wm = /* @__PURE__ */ ue(jI, [["__scopeId", "data-v-fb22b492"]]), ZI = window.Vue.openBlock, KI = window.Vue.createElementBlock, JI = window.Vue.createElementVNode;
var XI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QI = {}, ek = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tk = /* @__PURE__ */ JI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), nk = [
  tk
];
function rk(e, o) {
  return ZI(), KI("svg", ek, nk);
}
var ok = /* @__PURE__ */ XI(QI, [["render", rk]]);
const ik = window.Vue.openBlock, sk = window.Vue.createElementBlock, qm = window.Vue.createElementVNode;
var ak = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lk = {}, uk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ck = /* @__PURE__ */ qm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), dk = /* @__PURE__ */ qm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), fk = [
  ck,
  dk
];
function hk(e, o) {
  return ik(), sk("svg", uk, fk);
}
var pk = /* @__PURE__ */ ak(lk, [["render", hk]]);
const wk = window.Vue.openBlock, vk = window.Vue.createElementBlock, mk = window.Vue.createElementVNode;
var _k = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gk = {}, $k = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yk = /* @__PURE__ */ mk("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), Vk = [
  yk
];
function bk(e, o) {
  return wk(), vk("svg", $k, Vk);
}
var Ck = /* @__PURE__ */ _k(gk, [["render", bk]]);
const Sk = window.Vue.openBlock, Ek = window.Vue.createElementBlock, Ik = window.Vue.createElementVNode;
var kk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const xk = {}, Ak = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Bk = /* @__PURE__ */ Ik("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), Tk = [
  Bk
];
function Dk(e, o) {
  return Sk(), Ek("svg", Ak, Tk);
}
var Hm = /* @__PURE__ */ kk(xk, [["render", Dk]]);
const Nk = window.Vue.defineComponent, Hn = window.Vue.unref, Us = window.Vue.normalizeClass, Ws = window.Vue.createVNode, Lk = window.Vue.openBlock, Mk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Ok = { class: "paginator" }, Pk = /* @__PURE__ */ Nk({
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
    return (a, u) => (Lk(), Mk("div", Ok, [
      Ws(Hn(G), {
        icon: Hn(ok),
        "aria-hidden": "true",
        class: Us(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Ws(Hn(G), {
        icon: Hn(Ck),
        "aria-hidden": "true",
        class: Us(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Ws(Hn(G), {
        icon: Hn(Hm),
        "aria-hidden": "true",
        class: Us(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Ws(Hn(G), {
        icon: Hn(pk),
        "aria-hidden": "true",
        class: Us(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Rk = /* @__PURE__ */ ue(Pk, [["__scopeId", "data-v-40758818"]]);
const oe = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, Fk = window.Vue.computed, Pa = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = Fk(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const kr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, xr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Uk = Object.defineProperty, Wk = Object.defineProperties, qk = Object.getOwnPropertyDescriptors, Lp = Object.getOwnPropertySymbols, Hk = Object.prototype.hasOwnProperty, zk = Object.prototype.propertyIsEnumerable, Mp = (e, o, r) => o in e ? Uk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Op = (e, o) => {
  for (var r in o || (o = {}))
    Hk.call(o, r) && Mp(e, r, o[r]);
  if (Lp)
    for (var r of Lp(o))
      zk.call(o, r) && Mp(e, r, o[r]);
  return e;
}, Yk = (e, o) => Wk(e, qk(o));
const Gk = window.Vue.defineComponent, jk = window.Vue.h;
var Zk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Kk = {
  center: {
    type: Boolean,
    default: !1
  }
}, Jk = Gk({
  props: Kk,
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
        this.styles = Yk(Op({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, xr(this.failsafe), this.failsafe = kr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return jk("div", {
        style: Op({}, this.styles),
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
var Xn = /* @__PURE__ */ Zk(Jk, [["__scopeId", "data-v-18e2a5db"]]);
const Xk = window.Vue.openBlock, Qk = window.Vue.createElementBlock, ex = window.Vue.createElementVNode;
var tx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nx = {}, rx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ox = /* @__PURE__ */ ex("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), ix = [
  ox
];
function sx(e, o) {
  return Xk(), Qk("svg", rx, ix);
}
var Eo = /* @__PURE__ */ tx(nx, [["render", sx]]);
const Pp = window.Vue.computed, ax = (e, o, r) => {
  const s = Pp(() => o.value.filter((u) => !u.disabled)), a = Pp(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const lx = window.Vue.openBlock, ux = window.Vue.createElementBlock, Xc = window.Vue.createElementVNode;
var cx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dx = {}, fx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hx = /* @__PURE__ */ Xc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), px = /* @__PURE__ */ Xc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), wx = /* @__PURE__ */ Xc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), vx = [
  hx,
  px,
  wx
];
function mx(e, o) {
  return lx(), ux("svg", fx, vx);
}
var _x = /* @__PURE__ */ cx(dx, [["render", mx]]), gx = Object.defineProperty, $x = Object.defineProperties, yx = Object.getOwnPropertyDescriptors, Rp = Object.getOwnPropertySymbols, Vx = Object.prototype.hasOwnProperty, bx = Object.prototype.propertyIsEnumerable, Fp = (e, o, r) => o in e ? gx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, zm = (e, o) => {
  for (var r in o || (o = {}))
    Vx.call(o, r) && Fp(e, r, o[r]);
  if (Rp)
    for (var r of Rp(o))
      bx.call(o, r) && Fp(e, r, o[r]);
  return e;
}, Ym = (e, o) => $x(e, yx(o));
const Io = window.Vue.defineComponent, Oi = window.Vue.resolveComponent, hn = window.Vue.openBlock, fo = window.Vue.createElementBlock, Cx = window.Vue.createVNode, Ca = window.Vue.createBlock, Sx = window.Vue.withModifiers, Vo = window.Vue.inject, Pi = window.Vue.computed, Ex = window.Vue.normalizeClass, Xr = window.Vue.createElementVNode, Sa = window.Vue.toDisplayString, pa = window.Vue.renderSlot, Ai = window.Vue.createCommentVNode, Ix = window.Vue.withDirectives, kx = window.Vue.vShow, Ac = window.Vue.ref, Up = window.Vue.toRef, Wp = window.Vue.nextTick, Bc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Qc = window.Vue.provide, qp = window.Vue.isRef, xx = window.Vue.onBeforeUnmount;
var Wi = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ax = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, Bx = Io({
  props: Ax,
  components: {
    FeatherIcon: G
  }
}), Tx = ["title"];
function Dx(e, o, r, s, a, u) {
  const c = Oi("FeatherIcon");
  return hn(), fo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Cx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, Tx);
}
var Nx = /* @__PURE__ */ Wi(Bx, [["render", Dx], ["__scopeId", "data-v-4265058e"]]);
const Lx = Io({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Eo;
    }
  },
  components: {
    ActionIcon: Nx
  }
});
function Mx(e, o, r, s, a, u) {
  const c = Oi("ActionIcon");
  return hn(), Ca(c, {
    onClick: o[0] || (o[0] = Sx((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Ox = /* @__PURE__ */ Wi(Lx, [["render", Mx]]);
const Px = Io({
  computed: {
    errorIcon() {
      return _x;
    }
  },
  components: {
    FeatherIcon: G
  }
});
function Rx(e, o, r, s, a, u) {
  const c = Oi("FeatherIcon");
  return hn(), Ca(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Fx = /* @__PURE__ */ Wi(Px, [["render", Rx], ["__scopeId", "data-v-0b8faef3"]]);
const Ux = {
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
}, Wx = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, qx = Io({
  emits: Wx,
  props: Ux,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Vo("wrapperOptions", {}), o = Vo("validationErrorMessage", !1), r = Pi(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Ym(zm({}, e), { error: r });
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
    ClearIcon: Ox,
    ErrorIcon: Fx
  }
}), Hx = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, zx = ["for"], Yx = { class: "prefix" }, Gx = { class: "post" };
function jx(e, o, r, s, a, u) {
  const c = Oi("ClearIcon"), f = Oi("ErrorIcon");
  return hn(), fo("div", {
    class: Ex(["feather-input-wrapper-container", e.containerCls])
  }, [
    Xr("fieldset", Hx, [
      Xr("legend", null, Sa(e.label), 1)
    ]),
    Xr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Sa(e.label), 9, zx),
    Xr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      Xr("div", Yx, [
        pa(e.$slots, "pre", {}, void 0, !0)
      ]),
      pa(e.$slots, "default", {}, void 0, !0),
      Xr("div", Gx, [
        e.showClear && e.computedClearText ? (hn(), Ca(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ai("", !0),
        e.error ? (hn(), Ca(f, { key: 1 })) : Ai("", !0),
        pa(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Ra = /* @__PURE__ */ Wi(qx, [["render", jx], ["__scopeId", "data-v-4db296db"]]);
const Zx = Io({
  setup() {
    const e = Vo("subTextOptions", {}), o = Vo("validationErrorMessage", !1), r = Pi(() => e.error ? e.error : o && o.value ? o.value : "");
    return Ym(zm({}, e), { error: r });
  }
}), Kx = { class: "feather-input-sub-text" }, Jx = {
  key: 0,
  class: "feather-input-spacer"
}, Xx = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, Qx = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function eA(e, o, r, s, a, u) {
  return Ix((hn(), fo("div", Kx, [
    !e.hint && !e.error.length ? (hn(), fo("div", Jx, "\xA0")) : Ai("", !0),
    e.hint && !e.error.length ? (hn(), fo("div", Xx, Sa(e.hint), 1)) : Ai("", !0),
    e.error.length > 0 ? (hn(), fo("div", Qx, Sa(e.error), 1)) : Ai("", !0),
    pa(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [kx, !e.inline || e.hint || e.error.length]
  ]);
}
var ko = /* @__PURE__ */ Wi(Zx, [["render", eA], ["__scopeId", "data-v-8e0ac99e"]]);
const tA = {
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
Io({
  props: tA,
  setup(e) {
    const o = Vo("featherFormErrors", Ac([])), r = Up(e, "errorList"), s = Pi(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = Up(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = Ac(), w = (_) => `${c(_.label)} - ${_.message}`, m = Pi(() => (s.value.length && Wp(() => f.value.focus()), e.headingText(s.value)));
    return Bc(a, (_) => {
      _.length && Wp(() => f.value.focus());
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
const xo = (e, o, r, s, a) => {
  const u = Vo("featherForm", !1);
  if (s && u && e.value) {
    const c = Ac("");
    Qc("validationErrorMessage", c);
    const f = () => {
      if (a && qp(a) && a.value)
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
    return a && qp(a) && Bc(a, () => {
      u.runValidation();
    }), Bc(e, (_, $) => {
      _ && u && u.register(_, m), $ && u && u.deregister($);
    }, { immediate: !0 }), xx(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Ao = (e) => ({
  inherittedAttrs: Pi(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Bo = {
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
}, To = (e) => {
  Qc("subTextOptions", e);
}, Fa = {
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
}, Ua = (e) => {
  Qc("wrapperOptions", e);
}, qs = window.Vue.ref, nA = window.Vue.watch, rA = window.Vue.watchEffect, Hp = window.Vue.computed, Fu = window.Vue.provide, Gm = (e, o, r, s, a) => {
  const u = qs([]), c = qs(), f = qs(), w = qs();
  rA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((N) => N.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let N = u.value.filter((A) => !A.disabled);
      N = N.length ? N : u.value, f.value = N[0], f.value.first = !0;
    }
  }), nA(c, (S, N) => {
    N && (N.checked = !1), S && (S.checked = !0);
  });
  const m = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = Hp(() => c.value || f.value), $ = ax(_, u, m), y = Hp(() => oe("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = xo(w, e, r, s, a);
  return Fu("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), Fu("select", m), Fu("blur", (S) => {
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
var oA = Object.defineProperty, iA = Object.defineProperties, sA = Object.getOwnPropertyDescriptors, zp = Object.getOwnPropertySymbols, aA = Object.prototype.hasOwnProperty, lA = Object.prototype.propertyIsEnumerable, Yp = (e, o, r) => o in e ? oA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, vo = (e, o) => {
  for (var r in o || (o = {}))
    aA.call(o, r) && Yp(e, r, o[r]);
  if (zp)
    for (var r of zp(o))
      lA.call(o, r) && Yp(e, r, o[r]);
  return e;
}, jm = (e, o) => iA(e, sA(o));
const Qn = window.Vue.defineComponent, Bi = window.Vue.inject, Ea = window.Vue.computed, Ti = window.Vue.ref, Ut = window.Vue.resolveComponent, St = window.Vue.openBlock, qi = window.Vue.createElementBlock, Zm = window.Vue.normalizeClass, vn = window.Vue.renderSlot, Kn = window.Vue.createBlock, Ri = window.Vue.createCommentVNode, Ia = window.Vue.createElementVNode, uA = window.Vue.withModifiers, Wa = window.Vue.createVNode, Km = window.Vue.toRef, Tc = window.Vue.mergeProps, Tn = window.Vue.withCtx, cA = window.Vue.h, dA = window.Vue.provide;
var er = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fA = {
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
}, hA = Qn({
  props: fA,
  setup(e) {
    const o = Bi("isCondensed", null), r = Ea(() => o || e.condensed), s = Ti(!1);
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
    FeatherRipple: Xn
  }
}), pA = ["aria-disabled"];
function wA(e, o, r, s, a, u) {
  const c = Ut("FeatherRipple");
  return St(), qi("div", {
    class: Zm(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    vn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (St(), Kn(c, { key: 0 })) : Ri("", !0)
  ], 42, pA);
}
var qa = /* @__PURE__ */ er(hA, [["render", wA], ["__scopeId", "data-v-44d413dc"]]);
const vA = {
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
}, mA = Qn({
  emits: ["delete"],
  props: vA,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: Eo
    };
  },
  components: {
    FeatherIcon: G
  }
}), _A = { class: "chip-delete" }, gA = ["aria-label", "aria-describedby"];
function $A(e, o, r, s, a, u) {
  const c = Ut("FeatherIcon");
  return St(), qi("span", _A, [
    Ia("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = uA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Wa(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, gA)
  ]);
}
var yA = /* @__PURE__ */ er(mA, [["render", $A], ["__scopeId", "data-v-4bae6cb4"]]);
const VA = Qn({
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
}), bA = ["title"];
function CA(e, o, r, s, a, u) {
  return St(), qi("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    vn(e.$slots, "default", {}, void 0, !0)
  ], 8, bA);
}
var Ha = /* @__PURE__ */ er(VA, [["render", CA], ["__scopeId", "data-v-1a0445b2"]]);
const SA = {}, EA = {
  class: "chip-icon",
  role: "presentation"
};
function IA(e, o) {
  return St(), qi("span", EA, [
    vn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var za = /* @__PURE__ */ er(SA, [["render", IA], ["__scopeId", "data-v-2230176f"]]);
const Gp = {
  delete: "Remove"
}, kA = Qn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Gp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Pa(Km(e, "labels"), Gp), s = Ea(() => oe("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = vo({}, o.attrs);
    return e.disabled && delete u.onClick, jm(vo({}, r), {
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
    Chip: qa,
    DeleteIcon: yA,
    Label: Ha,
    PreIcon: za
  }
}), xA = ["aria-disabled"];
function AA(e, o, r, s, a, u) {
  const c = Ut("PreIcon"), f = Ut("Label"), w = Ut("DeleteIcon"), m = Ut("Chip");
  return St(), Kn(m, Tc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Tn(() => [
      Ia("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Ia("span", Tc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (St(), Kn(c, { key: 0 }, {
            default: Tn(() => [
              vn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Ri("", !0),
          Wa(f, { id: e.chipTextId }, {
            default: Tn(() => [
              vn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, xA),
      e.canDelete ? (St(), Kn(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Ri("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var BA = /* @__PURE__ */ er(kA, [["render", AA], ["__scopeId", "data-v-48b2704a"]]);
const TA = Qn({
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
    Chip: qa,
    Label: Ha,
    PreIcon: za
  }
}), DA = ["aria-disabled"];
function NA(e, o, r, s, a, u) {
  const c = Ut("PreIcon"), f = Ut("Label"), w = Ut("Chip");
  return St(), Kn(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Tn(() => [
      Ia("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (St(), Kn(c, { key: 0 }, {
          default: Tn(() => [
            vn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Ri("", !0),
        Wa(f, null, {
          default: Tn(() => [
            vn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, DA)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var LA = /* @__PURE__ */ er(TA, [["render", NA], ["__scopeId", "data-v-3e0c4eba"]]);
const MA = Qn({
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
    const o = Ti(!1), r = Ti(!1), s = Ea(() => oe("chip-label-id")), a = Ea(() => o.value || r.value ? 0 : -1), u = Ti(), c = () => {
      u.value.$el.focus();
    }, f = Bi("register", (y) => {
    }), w = Bi("blur", (y) => {
    }), m = Bi("select", (y) => {
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
    Chip: qa,
    Label: Ha,
    PreIcon: za
  }
});
function OA(e, o, r, s, a, u) {
  const c = Ut("PreIcon"), f = Ut("Label"), w = Ut("Chip");
  return St(), Kn(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: Zm(["focus hover", { selected: e.checked }]),
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
    default: Tn(() => [
      e.hasIcon ? (St(), Kn(c, { key: 0 }, {
        default: Tn(() => [
          vn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Ri("", !0),
      Wa(f, { id: e.labelId }, {
        default: Tn(() => [
          vn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var PA = /* @__PURE__ */ er(MA, [["render", OA], ["__scopeId", "data-v-bbcc2f70"]]);
const RA = {
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
}, jp = Qn({
  props: RA,
  setup() {
    return { format: Bi("chipListFormat", "") };
  },
  render() {
    const e = (o) => cA(o, vo(vo({}, this.$props), this.$attrs), vo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(BA) : this.format === "radio" ? e(PA) : e(LA);
  }
}), FA = {
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
}, UA = Qn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: FA,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    dA("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = Km(e, "modelValue");
      return jm(vo({
        attrs: {
          role: "radiogroup"
        }
      }, Gm(c, o.emit, e.label, {}, Ti(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), WA = ["aria-label"];
function qA(e, o, r, s, a, u) {
  return St(), qi("div", Tc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    vn(e.$slots, "default", {}, void 0, !0)
  ], 16, WA);
}
var HA = /* @__PURE__ */ er(UA, [["render", qA], ["__scopeId", "data-v-1e06f41d"]]);
const zA = window.Vue.defineComponent, YA = window.Vue.normalizeClass, GA = window.Vue.openBlock, jA = window.Vue.createElementBlock, ZA = window.Vue.createCommentVNode, KA = /* @__PURE__ */ zA({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (GA(), jA("span", {
      key: 0,
      class: YA(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : ZA("", !0);
  }
});
const JA = /* @__PURE__ */ ue(KA, [["__scopeId", "data-v-e08880d6"]]), XA = window.Vue.defineComponent, li = window.Vue.unref, Jm = window.Vue.createTextVNode, Uu = window.Vue.normalizeClass, Wu = window.Vue.withCtx, QA = window.Vue.createVNode, eB = window.Vue.renderList, tB = window.Vue.Fragment, Hs = window.Vue.openBlock, nB = window.Vue.createElementBlock, qu = window.Vue.createBlock, Zp = window.Vue.createCommentVNode, rB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oB = /* @__PURE__ */ Jm(" ALL "), Kp = window.Vue.ref, iB = window.Vue.watch, sB = window.Vue.computed, aB = window.Vue.reactive, lB = /* @__PURE__ */ XA({
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
    const r = e, s = Kp(!1), a = sB(() => ve.exports.keys(ve.exports.groupBy(r.alarms, r.property))), u = Kp(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = aB({
      alarms: r.alarms
    }), f = (m) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(m) ? u.value = u.value.filter((_) => _ !== m) : u.value.push(m), (m === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return iB(r, () => {
      var m;
      u.value = (m = r.preSelected) != null && m.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (m, _) => li(a).length > 0 ? (Hs(), qu(li(HA), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Uu({ vertical: r.isVertical })
    }, {
      default: Wu(() => [
        QA(li(jp), {
          class: Uu({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: Wu(() => [
            oB
          ]),
          _: 1
        }, 8, ["class"]),
        (Hs(!0), nB(tB, null, eB(li(a), ($) => (Hs(), qu(li(jp), {
          class: Uu([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: Wu(() => [
            e.property == "severity" ? (Hs(), qu(JA, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : Zp("", !0),
            Jm(rB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Zp("", !0);
  }
});
const uB = /* @__PURE__ */ ue(lB, [["__scopeId", "data-v-d83b0f85"]]);
const cB = window.Vue.watch, dB = window.Vue.onBeforeUnmount, fB = window.Vue.ref, hB = window.Vue.onMounted, pB = (e) => {
  const o = fB(!1);
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
  return hB(() => {
    const c = cB(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    dB(() => {
      c(), u();
    });
  }), o;
}, wB = window.Vue.watch, vB = window.Vue.onBeforeUnmount, mB = window.Vue.ref, _B = window.Vue.onMounted, gB = (e, o) => {
  const r = mB(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((m) => m && m.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return _B(() => {
    const c = wB(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    vB(() => {
      c(), u();
    });
  }), r;
}, $B = window.Vue.watch, yB = window.Vue.onBeforeUnmount, VB = window.Vue.ref, Xm = (e, o) => {
  const r = VB(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = $B([e, r], ([w, m], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), m && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return yB(() => {
    f(), c();
  }), r;
}, bB = window.Vue.defineComponent, In = window.Vue.ref, Jp = window.Vue.toRef, CB = window.Vue.onMounted, SB = window.Vue.watch, Xp = window.Vue.computed, EB = window.Vue.nextTick, Qp = window.Vue.openBlock, ew = window.Vue.createElementBlock, tw = window.Vue.renderSlot, IB = window.Vue.normalizeClass, kB = window.Vue.normalizeStyle, xB = window.Vue.createCommentVNode;
var AB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const BB = {
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
}, TB = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, DB = bB({
  emits: TB,
  props: BB,
  setup(e, o) {
    const r = In(), s = In(), a = Jp(e, "open"), u = Jp(e, "noExpand"), c = In("auto"), f = In(), w = In(e.triggerId || oe("feather-menu-trigger")), m = In(oe("feather-menu-dropdown")), _ = In(""), $ = In("");
    CB(() => {
      f.value = window;
    });
    const y = In(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), B = () => {
      if (!s.value)
        return;
      const I = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", EB(() => {
        let { height: F, width: P } = s.value.getBoundingClientRect();
        const q = T(), ge = q.height, se = q.width;
        e.fill && P < I.width ? (c.value = I.width + "px", P = I.width) : c.value = P + "px";
        let me = 0;
        ge - I.bottom < F && I.top >= F ? (me = I.top - F, e.cover && (me += I.height)) : (me = I.bottom, e.cover && (me -= I.height));
        let be = e.right ? I.right - P : I.left;
        !e.right && I.right >= P && se - I.left < P && (be = I.right - P), e.right && I.right <= P && se - I.left > P && (be = I.left), $.value = `${be}px`, _.value = `${me}px`, y.value = !1;
      });
    }, L = gB(r, (I) => {
      o.emit("outside-click", I);
    }), S = pB(B), N = Xm(f, B);
    SB([a, s], ([I, F]) => {
      I && F && B(), L.value = I, S.value = I, N.value = I;
    });
    const A = Xp(() => {
      const I = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = m.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), O = Xp(() => ({
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
}), NB = ["data-ref-id"], LB = ["data-ref-id", "id"];
function MB(e, o, r, s, a, u) {
  return Qp(), ew("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    tw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Qp(), ew("div", {
      key: 0,
      class: IB(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: kB({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      tw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, LB)) : xB("", !0)
  ], 8, NB);
}
var Qm = /* @__PURE__ */ AB(DB, [["render", MB], ["__scopeId", "data-v-f75af406"]]), OB = {
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
const PB = window.Vue.openBlock, RB = window.Vue.createElementBlock, FB = window.Vue.createElementVNode;
var UB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WB = {}, qB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HB = /* @__PURE__ */ FB("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), zB = [
  HB
];
function YB(e, o) {
  return PB(), RB("svg", qB, zB);
}
var GB = /* @__PURE__ */ UB(WB, [["render", YB]]);
const jB = window.Vue.openBlock, ZB = window.Vue.createElementBlock, ed = window.Vue.createElementVNode;
var KB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const JB = {}, XB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, QB = /* @__PURE__ */ ed("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), eT = /* @__PURE__ */ ed("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), tT = /* @__PURE__ */ ed("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), nT = [
  QB,
  eT,
  tT
];
function rT(e, o) {
  return jB(), ZB("svg", XB, nT);
}
var oT = /* @__PURE__ */ KB(JB, [["render", rT]]);
const iT = window.Vue.openBlock, sT = window.Vue.createElementBlock, aT = window.Vue.createElementVNode;
var lT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uT = {}, cT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dT = /* @__PURE__ */ aT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), fT = [
  dT
];
function hT(e, o) {
  return iT(), sT("svg", cT, fT);
}
var Ya = /* @__PURE__ */ lT(uT, [["render", hT]]);
const Fi = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
};
const X = {
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
const pT = window.Vue.defineComponent, wT = window.Vue.openBlock, vT = window.Vue.createElementBlock, mT = window.Vue.normalizeClass, _T = window.Vue.pushScopeId, gT = window.Vue.popScopeId, Dc = window.Vue.createElementVNode;
var $T = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, VT = {
  click: (e) => !0
}, bT = pT({
  emits: VT,
  props: yT,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), e_ = (e) => (_T("data-v-07e020f5"), e = e(), gT(), e), CT = /* @__PURE__ */ e_(() => /* @__PURE__ */ Dc("div", { class: "track" }, null, -1)), ST = /* @__PURE__ */ e_(() => /* @__PURE__ */ Dc("div", { class: "switcher" }, [
  /* @__PURE__ */ Dc("div", { class: "switch-circle" })
], -1)), ET = [
  CT,
  ST
];
function IT(e, o, r, s, a, u) {
  return wT(), vT("div", {
    class: mT(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, ET, 2);
}
var kT = /* @__PURE__ */ $T(bT, [["render", IT], ["__scopeId", "data-v-07e020f5"]]), xT = Object.defineProperty, AT = Object.defineProperties, BT = Object.getOwnPropertyDescriptors, nw = Object.getOwnPropertySymbols, TT = Object.prototype.hasOwnProperty, DT = Object.prototype.propertyIsEnumerable, rw = (e, o, r) => o in e ? xT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ow = (e, o) => {
  for (var r in o || (o = {}))
    TT.call(o, r) && rw(e, r, o[r]);
  if (nw)
    for (var r of nw(o))
      DT.call(o, r) && rw(e, r, o[r]);
  return e;
}, iw = (e, o) => AT(e, BT(o));
const td = window.Vue.defineComponent, hr = window.Vue.h, NT = window.Vue.openBlock, LT = window.Vue.createElementBlock, MT = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var t_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OT = {
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
}, PT = td({
  inheritAttrs: !1,
  props: OT,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = hr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = hr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = hr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : hr(Xn);
    if (this.asLi)
      return hr("li", iw(ow({}, this.$attrs), {
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
    const u = hr("a", iw(ow({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return hr("li", {}, [u]);
  }
});
var Hi = /* @__PURE__ */ t_(PT, [["__scopeId", "data-v-7c46b2b3"]]);
td({
  components: {
    FeatherListItem: Hi
  }
});
const RT = {}, FT = { class: "feather-list" };
function UT(e, o) {
  return NT(), LT("ul", FT, [
    MT(e.$slots, "default", {}, void 0, !0)
  ]);
}
var nd = /* @__PURE__ */ t_(RT, [["render", UT], ["__scopeId", "data-v-941a1d50"]]);
const WT = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, qT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
td({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: WT,
  props: qT,
  computed: {
    labelId() {
      return oe("switch-label");
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
      (e.keyCode === X.SPACE || e.keyCode === X.ENTER) && this.updateValue(), e.keyCode === X.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: kT, FeatherListItem: Hi }
});
var HT = Object.defineProperty, zT = Object.defineProperties, YT = Object.getOwnPropertyDescriptors, sw = Object.getOwnPropertySymbols, GT = Object.prototype.hasOwnProperty, jT = Object.prototype.propertyIsEnumerable, aw = (e, o, r) => o in e ? HT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Et = (e, o) => {
  for (var r in o || (o = {}))
    GT.call(o, r) && aw(e, r, o[r]);
  if (sw)
    for (var r of sw(o))
      jT.call(o, r) && aw(e, r, o[r]);
  return e;
}, ZT = (e, o) => zT(e, YT(o));
const Do = window.Vue.defineComponent, le = window.Vue.openBlock, Pe = window.Vue.createElementBlock, dt = window.Vue.createElementVNode, en = window.Vue.toDisplayString, Ft = window.Vue.createCommentVNode, Le = window.Vue.resolveComponent, Rt = window.Vue.createBlock, Xe = window.Vue.withCtx, mo = window.Vue.Fragment, Di = window.Vue.renderList, ft = window.Vue.createVNode, rd = window.Vue.withModifiers, Ir = window.Vue.normalizeClass, Nc = window.Vue.renderSlot, n_ = window.Vue.createTextVNode, KT = window.Vue.pushScopeId, JT = window.Vue.popScopeId, r_ = window.Vue.reactive, o_ = window.Vue.nextTick, Hu = window.Vue.markRaw, zu = window.Vue.toRef, lw = window.Vue.computed, XT = window.Vue.toRefs, Qr = window.Vue.ref, Yu = window.Vue.mergeProps, uw = window.Vue.toHandlers, zs = window.Vue.withDirectives, Ys = window.Vue.vShow;
var Ga = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, od = {
  query: {
    type: String
  }
}, Br = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QT = Do({
  mixins: [],
  props: Et(Et({
    text: {
      type: String,
      required: !0
    }
  }, Ga), od),
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
}), eD = {
  key: 0,
  class: "highlight"
}, tD = { key: 1 };
function nD(e, o, r, s, a, u) {
  return le(), Pe("span", null, [
    dt("span", null, en(e.beginning), 1),
    e.highlighted ? (le(), Pe("span", eD, en(e.highlighted), 1)) : Ft("", !0),
    e.end ? (le(), Pe("span", tD, en(e.end), 1)) : Ft("", !0)
  ]);
}
var i_ = /* @__PURE__ */ Br(QT, [["render", nD], ["__scopeId", "data-v-8abe2492"]]);
const rD = Do({
  emits: ["select", "deselect"],
  props: Et(Et({
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
  }, Ga), od),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        Fi(o, r.$el);
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
    FeatherList: nd,
    FeatherListItem: Hi,
    Highlighter: i_
  }
}), oD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function iD(e, o, r, s, a, u) {
  const c = Le("Highlighter"), f = Le("FeatherListItem"), w = Le("FeatherList");
  return le(), Rt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Xe(() => [
      (le(!0), Pe(mo, null, Di(e.items, (m, _) => (le(), Pe(mo, {
        key: m[e.textProp]
      }, [
        ft(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(m),
          highlighted: e.isActive(_),
          selected: e.isSelected(m),
          onClick: rd(($) => e.select(m), ["stop"])
        }, {
          default: Xe(() => [
            ft(c, {
              highlight: e.highlight,
              query: e.query,
              text: m[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            m._new ? (le(), Pe("span", oD, en(e.newLabel), 1)) : Ft("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && m._new ? (le(), Pe("li", {
          role: "presentation",
          key: m[e.textProp] + "hr",
          class: "hr"
        })) : Ft("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var sD = /* @__PURE__ */ Br(rD, [["render", iD], ["__scopeId", "data-v-f623434a"]]);
const aD = Do({
  emits: ["select"],
  props: Et(Et({
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
  }, Ga), od),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        Fi(o, r);
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
    Highlighter: i_
  }
}), lD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, uD = ["aria-multiselectable"], cD = { role: "row" }, dD = ["aria-selected", "onClick"], fD = ["id", "aria-selected"], hD = { key: 1 };
function pD(e, o, r, s, a, u) {
  const c = Le("Highlighter");
  return le(), Pe("div", lD, [
    dt("table", {
      class: Ir(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      dt("thead", null, [
        dt("tr", cD, [
          (le(!0), Pe(mo, null, Di(e.config, (f) => (le(), Pe("th", {
            key: f.title
          }, en(f.title), 1))), 128))
        ])
      ]),
      dt("tbody", null, [
        (le(!0), Pe(mo, null, Di(e.items, (f, w) => (le(), Pe("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Ir({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: rd((m) => e.select(f), ["stop"])
        }, [
          (le(!0), Pe(mo, null, Di(e.config, (m, _) => (le(), Pe("td", {
            key: f[e.textProp] + m.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Ir({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            m.prop === e.textProp ? (le(), Rt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[m.prop]
            }, null, 8, ["highlight", "query", "text"])) : (le(), Pe("p", hD, en(f[m.prop]), 1))
          ], 10, fD))), 128))
        ], 10, dD))), 128))
      ])
    ], 10, uD)
  ], 512);
}
var wD = /* @__PURE__ */ Br(aD, [["render", pD], ["__scopeId", "data-v-58c88fd1"]]);
const vD = Do({
  components: {
    FeatherList: nd,
    FeatherListItem: Hi
  }
});
function mD(e, o, r, s, a, u) {
  const c = Le("FeatherListItem"), f = Le("FeatherList");
  return le(), Rt(f, { class: "result-list" }, {
    default: Xe(() => [
      ft(c, { "as-li": "" }, {
        default: Xe(() => [
          Nc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var _D = /* @__PURE__ */ Br(vD, [["render", mD], ["__scopeId", "data-v-06b752c6"]]);
const gD = Do({
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
    Cancel: Eo,
    BaseChip: qa,
    BaseChipLabel: Ha,
    BaseChipPreIcon: za
  }
});
function $D(e, o, r, s, a, u) {
  const c = Le("FeatherIcon"), f = Le("BaseChipPreIcon"), w = Le("BaseChipLabel"), m = Le("Cancel"), _ = Le("BaseChip");
  return le(), Rt(_, {
    class: Ir(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Xe(() => [
      e.showPreIcon ? (le(), Rt(f, { key: 0 }, {
        default: Xe(() => {
          var $, y;
          return [
            ft(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Ft("", !0),
      ft(w, null, {
        default: Xe(() => [
          n_(en(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Ft("", !0) : (le(), Pe("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = rd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        ft(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Xe(() => [
            ft(m)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var yD = /* @__PURE__ */ Br(gD, [["render", $D], ["__scopeId", "data-v-e0fc6ac0"]]);
const VD = {}, bD = (e) => (KT("data-v-aa720e06"), e = e(), JT(), e), CD = { class: "spinner-container" }, SD = /* @__PURE__ */ bD(() => /* @__PURE__ */ dt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ dt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), ED = [
  SD
];
function ID(e, o) {
  return le(), Pe("div", CD, ED);
}
var kD = /* @__PURE__ */ Br(VD, [["render", ID], ["__scopeId", "data-v-aa720e06"]]), ja = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(ja || {});
const s_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, xD = Et(Et(Et({
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
    validator: (e) => !!ja[e]
  },
  labels: {
    type: Object,
    default: () => s_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Ga), Bo), Fa), AD = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, BD = (e, o, r, s) => {
  if (r.toLowerCase() === ja.multi) {
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
}, TD = () => {
  const e = r_({
    row: -1
  }), o = (u) => {
    o_(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === X.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === X.UP) {
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
}, DD = (e) => {
  const o = r_({
    row: -1,
    col: -1
  }), r = (c, f) => {
    o_(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === X.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const w = o.row, m = o.col;
        a(), r(w + 1, m);
      }
      return !0;
    }
    if (c.keyCode === X.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, m = o.col;
        a(), r(w - 1, m);
      }
      return !0;
    }
    if (c.keyCode === X.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const w = o.col, m = o.row;
        a(), r(m, w + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const w = o.row;
        a(), r(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === X.LEFT && o.row !== -1) {
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
    if (c.keyCode === X.END && o.row !== -1) {
      c.preventDefault();
      const w = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === X.HOME && o.row !== -1) {
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
}, ND = Do({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: AD,
  props: xD,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== ja.multi;
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
      return oe("result-item");
    },
    minCharWarningId() {
      return oe("min-char-warning");
    },
    subTextId() {
      return oe("feather-autocomplete-description");
    },
    resultsId() {
      return oe("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return oe("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Hu(GB);
    },
    minCharIcon() {
      return Hu(oT);
    },
    dropdownIcon() {
      return Hu(Ya);
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
        Fi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          Fi(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = oe("active-chip"), this.activeChipId;
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
      r !== void 0 && (xr(this.typingTimeout), this.typingTimeout = kr(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === X.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === X.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === X.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === X.ENTER || e.keyCode === X.SPACE || e.keyCode === X.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === X.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === X.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === X.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === X.DELETE || e.keyCode === X.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = Pa(zu(e, "labels"), s_);
    To(e), Ua(e);
    let s;
    e.gridConfig ? s = DD(e.gridConfig) : s = TD();
    const a = zu(e, "id"), u = lw(() => a.value ? a.value : oe("feather-autocomplete-input")), { validate: c } = xo(u, zu(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: m, allowNew: _, type: $, minChar: y } = XT(e), T = Qr(!1), B = Qr(!1), M = Qr(!1), L = Qr(""), S = Qr([]), N = Qr(), A = lw(() => N.value), O = () => {
      T.value && !B.value && (L.value && L.value.length >= y.value && o.emit("search", L.value), y.value <= 0 && o.emit("search", L.value || ""), S.value = [], s.reset());
    }, I = BD({
      selectionLimit: f,
      selectionLimitReached: B,
      modelValue: w,
      textProp: m,
      allowNew: _,
      forceCloseResults: M,
      query: L,
      internalResults: S,
      input: A,
      emitSearch: O
    }, s, $.value, o.emit);
    return ZT(Et(Et({}, r), Ao(o.attrs)), {
      query: L,
      internalResults: S,
      selectionLimitReached: B,
      forceCloseResults: M,
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
    InputWrapper: Ra,
    InputSubText: ko,
    AutocompleteResults: sD,
    AutocompleteResultsGrid: wD,
    Chip: yD,
    MenuMessage: _D,
    FeatherIcon: G,
    FeatherMenu: Qm,
    Spinner: kD
  }
}), LD = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, MD = ["id"], OD = { "data-ref-id": "feather-autocomplete-no-results" }, PD = { "data-ref-id": "feather-autocomplete-selection-limit" }, RD = { "data-ref-id": "feather-autocomplete-min-char" };
function FD(e, o, r, s, a, u) {
  const c = Le("FeatherIcon"), f = Le("Chip"), w = Le("InputWrapper"), m = Le("AutocompleteResults"), _ = Le("AutocompleteResultsGrid"), $ = Le("MenuMessage"), y = Le("Spinner"), T = Le("FeatherMenu"), B = Le("InputSubText");
  return le(), Pe("div", Yu(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    ft(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Ir(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Xe(({ attrs: M, on: L }) => [
        ft(w, Yu(Et(Et({}, M), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, uw(L), { ref: "scroll" }), {
          pre: Xe(() => [
            Nc(e.$slots, "pre", {}, () => [
              ft(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Xe(() => [
            ft(c, {
              icon: e.dropdownIcon,
              class: Ir(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Xe(() => [
            dt("div", {
              class: Ir(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              dt("div", LD, null, 512),
              dt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, en(e.selectedDescribedByText), 9, MD),
              (le(!0), Pe(mo, null, Di(e.modelValueList, (S, N) => zs((le(), Rt(f, {
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
                [Ys, !e.singleSelect]
              ])), 128)),
              dt("textarea", Yu(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, uw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Xe(() => [
        e.gridConfig ? Ft("", !0) : zs((le(), Rt(m, {
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
          [Ys, e.showResults]
        ]),
        e.gridConfig ? zs((le(), Rt(_, {
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
          [Ys, e.showResults]
        ]) : Ft("", !0),
        e.showNoResults ? (le(), Rt($, { key: 2 }, {
          default: Xe(() => [
            dt("span", OD, en(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Ft("", !0),
        e.showSelectionLimit ? (le(), Rt($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Xe(() => [
            ft(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            dt("span", PD, en(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Ft("", !0),
        e.minChar ? zs((le(), Rt($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Xe(() => [
            ft(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            dt("span", RD, [
              Nc(e.$slots, "min-char", {}, () => [
                n_(en(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Ys, e.showMinCharWarning]
        ]) : Ft("", !0),
        e.showLoading ? (le(), Rt(y, { key: 5 })) : Ft("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    ft(B, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var UD = /* @__PURE__ */ Br(ND, [["render", FD], ["__scopeId", "data-v-43a7e951"]]);
var WD = Object.defineProperty, qD = Object.defineProperties, HD = Object.getOwnPropertyDescriptors, cw = Object.getOwnPropertySymbols, zD = Object.prototype.hasOwnProperty, YD = Object.prototype.propertyIsEnumerable, dw = (e, o, r) => o in e ? WD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, wa = (e, o) => {
  for (var r in o || (o = {}))
    zD.call(o, r) && dw(e, r, o[r]);
  if (cw)
    for (var r of cw(o))
      YD.call(o, r) && dw(e, r, o[r]);
  return e;
}, a_ = (e, o) => qD(e, HD(o));
const l_ = window.Vue.defineComponent, GD = window.Vue.ref, Ni = window.Vue.computed, jD = window.Vue.reactive, fw = window.Vue.watch, Gu = window.Vue.inject, u_ = window.Vue.resolveComponent, Lc = window.Vue.openBlock, c_ = window.Vue.createElementBlock, Jn = window.Vue.createElementVNode, ZD = window.Vue.createBlock, KD = window.Vue.createCommentVNode, d_ = window.Vue.renderSlot, JD = window.Vue.pushScopeId, XD = window.Vue.popScopeId, ju = window.Vue.toRef, hw = window.Vue.mergeProps, QD = window.Vue.toDisplayString, eN = window.Vue.createVNode;
var f_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tN = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, nN = l_({
  props: tN,
  setup(e) {
    const o = GD(), r = () => {
      o.value.focus();
    }, s = Ni(() => oe("feather-radio-button")), a = jD({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Ni(() => oe("radio-label-id")), c = Ni(() => a.first || a.checked ? 0 : -1);
    fw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), fw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = Gu("register", ($) => {
    }), w = Gu("blur", ($) => {
    }), m = Gu("select", ($) => {
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
    FeatherRipple: Xn
  }
}), rN = (e) => (JD("data-v-24790cf0"), e = e(), XD(), e), oN = { class: "layout-container" }, iN = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], sN = { class: "radio hover focus" }, aN = /* @__PURE__ */ rN(() => /* @__PURE__ */ Jn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Jn("svg", { class: "dot" }, [
    /* @__PURE__ */ Jn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), lN = ["id"];
function uN(e, o, r, s, a, u) {
  const c = u_("feather-ripple");
  return Lc(), c_("div", oN, [
    Jn("div", {
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
      Jn("div", sN, [
        aN,
        e.vm.disabled ? KD("", !0) : (Lc(), ZD(c, {
          key: 0,
          center: ""
        }))
      ]),
      Jn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        d_(e.$slots, "default", {}, void 0, !0)
      ], 8, lN)
    ], 40, iN)
  ]);
}
var Mc = /* @__PURE__ */ f_(nN, [["render", uN], ["__scopeId", "data-v-24790cf0"]]);
const cN = a_(wa({}, Bo), {
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
}), dN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, fN = l_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: cN,
  emits: dN,
  setup(e, o) {
    To(e);
    const r = ju(e, "error"), s = ju(e, "modelValue"), a = Ni(() => oe("feather-input-description")), u = Ni(() => {
      const c = a_(wa({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return wa(wa({
      descriptionId: a,
      attrs: u
    }, Gm(s, o.emit, e.label, e.schema, ju(e, "error"))), Ao(o.attrs));
  },
  components: {
    InputSubText: ko
  }
}), hN = ["for"], pN = ["id"];
function wN(e, o, r, s, a, u) {
  const c = u_("InputSubText");
  return Lc(), c_("div", hw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Jn("label", {
      for: e.groupId,
      class: "group-label"
    }, QD(e.label), 9, hN),
    Jn("div", hw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      d_(e.$slots, "default", {}, void 0, !0)
    ], 16, pN),
    eN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var h_ = /* @__PURE__ */ f_(fN, [["render", wN], ["__scopeId", "data-v-6775aeb9"]]);
const vN = window.Vue.defineComponent, mN = window.Vue.renderList, _N = window.Vue.Fragment, pw = window.Vue.openBlock, gN = window.Vue.createElementBlock, $N = window.Vue.toDisplayString, yN = window.Vue.createTextVNode, ww = window.Vue.unref, vw = window.Vue.withCtx, VN = window.Vue.createVNode, bN = window.Vue.createBlock, CN = window.Vue.watch, SN = window.Vue.ref, EN = /* @__PURE__ */ vN({
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
    ], a = SN(r.preSelected || s[0].id);
    return CN(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (pw(), bN(ww(h_), {
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
      default: vw(() => [
        (pw(), gN(_N, null, mN(s, (f) => VN(ww(Mc), {
          value: f.id,
          key: f.id
        }, {
          default: vw(() => [
            yN($N(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const IN = /* @__PURE__ */ ue(EN, [["__scopeId", "data-v-0363302c"]]);
var kN = Object.defineProperty, xN = Object.defineProperties, AN = Object.getOwnPropertyDescriptors, mw = Object.getOwnPropertySymbols, BN = Object.prototype.hasOwnProperty, TN = Object.prototype.propertyIsEnumerable, _w = (e, o, r) => o in e ? kN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ui = (e, o) => {
  for (var r in o || (o = {}))
    BN.call(o, r) && _w(e, r, o[r]);
  if (mw)
    for (var r of mw(o))
      TN.call(o, r) && _w(e, r, o[r]);
  return e;
}, gw = (e, o) => xN(e, AN(o));
const DN = window.Vue.defineComponent, NN = window.Vue.inject, ci = window.Vue.h;
var LN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const MN = {
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
}, ON = DN({
  inheritAttrs: !1,
  props: MN,
  setup() {
    return { hasTooltip: NN("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = ui({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = ci(Xn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), ci(o, gw(ui(ui({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ci(Xn, { center: !0 })
      ]);
    }
    const c = ci("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ci(o, gw(ui(ui({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var he = /* @__PURE__ */ LN(ON, [["__scopeId", "data-v-702d1074"]]);
const PN = window.Vue.openBlock, RN = window.Vue.createElementBlock, FN = window.Vue.createElementVNode;
var UN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WN = {}, qN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HN = /* @__PURE__ */ FN("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), zN = [
  HN
];
function YN(e, o) {
  return PN(), RN("svg", qN, zN);
}
var GN = /* @__PURE__ */ UN(WN, [["render", YN]]);
const jN = window.Vue.openBlock, ZN = window.Vue.createElementBlock, KN = window.Vue.createElementVNode;
var JN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XN = {}, QN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eL = /* @__PURE__ */ KN("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), tL = [
  eL
];
function nL(e, o) {
  return jN(), ZN("svg", QN, tL);
}
var rL = /* @__PURE__ */ JN(XN, [["render", nL]]);
const oL = window.Vue.openBlock, iL = window.Vue.createElementBlock, sL = window.Vue.createElementVNode;
var aL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lL = {}, uL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cL = /* @__PURE__ */ sL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), dL = [
  cL
];
function fL(e, o) {
  return oL(), iL("svg", uL, dL);
}
var p_ = /* @__PURE__ */ aL(lL, [["render", fL]]);
const hL = window.Vue.defineComponent, un = window.Vue.unref, pr = window.Vue.createVNode, $w = window.Vue.toDisplayString, An = window.Vue.createElementVNode, w_ = window.Vue.createTextVNode, yw = window.Vue.openBlock, Vw = window.Vue.createElementBlock, pL = window.Vue.createCommentVNode, wL = window.Vue.withCtx, vL = window.Vue.vShow, mL = window.Vue.normalizeClass, _L = window.Vue.withDirectives, gL = window.Vue.Fragment, $L = window.Vue.pushScopeId, yL = window.Vue.popScopeId, v_ = (e) => ($L("data-v-b1dc2670"), e = e(), yL(), e), VL = /* @__PURE__ */ w_(" Filters "), bL = { class: "count" }, CL = { class: "results" }, SL = { class: "total" }, EL = /* @__PURE__ */ w_(" Reset "), IL = /* @__PURE__ */ v_(() => /* @__PURE__ */ An("div", { class: "title" }, "By Severities:", -1)), kL = /* @__PURE__ */ v_(() => /* @__PURE__ */ An("div", { class: "title" }, "By Start Date:", -1)), wr = window.Vue.ref, xL = window.Vue.reactive, AL = window.Vue.markRaw, bw = window.Vue.watch, BL = /* @__PURE__ */ hL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = AL({
      FilterAlt: GN,
      ExpandLess: rL,
      ExpandMore: Ya,
      Refresh: p_
    }), a = nn(), u = wr(r.isOpen), c = wr(["all"]), f = wr(1), w = wr(r.list), m = wr(!1), _ = wr(0), $ = wr(null), y = xL({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var F, P;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((F = a.filters) == null ? void 0 : F.severities) && !((P = a.filters) != null && P.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, A());
    }, B = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    bw(
      () => a.nodes,
      () => {
        B();
      }
    ), bw(r, () => {
      w.value = r.list, T();
    });
    const M = (F) => {
      c.value = F, A();
    }, L = (F) => {
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
          (se) => {
            var me;
            return se.nodeLabel === ((me = y.nodeSelectedValue) == null ? void 0 : me._text);
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
      )), f.value !== 1 && (_.value++, F = xI(
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
    return (F, P) => (yw(), Vw(gL, null, [
      r.isOpen ? pL("", !0) : (yw(), Vw("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        An("div", null, [
          pr(un(G), {
            icon: un(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          VL,
          An("span", bL, $w(_.value), 1)
        ]),
        pr(un(G), {
          icon: u.value ? un(s).ExpandLess : un(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      _L(An("div", {
        class: mL(["filters", { collapsed: !r.isOpen }])
      }, [
        An("div", CL, [
          An("div", SL, "Results: " + $w(un(w).length), 1),
          pr(un(he), {
            class: "btn-reset",
            onClick: N
          }, {
            default: wL(() => [
              pr(un(G), {
                icon: un(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              EL
            ]),
            _: 1
          })
        ]),
        An("div", null, [
          pr(un(UD), {
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
          IL,
          pr(uB, {
            alarms: r.list,
            onSelectedOption: M,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          An("div", null, [
            kL,
            pr(IN, {
              onFilterDateSelected: L,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [vL, u.value]
      ])
    ], 64));
  }
});
const No = /* @__PURE__ */ ue(BL, [["__scopeId", "data-v-b1dc2670"]]), TL = window.Vue.openBlock, DL = window.Vue.createElementBlock, NL = window.Vue.createElementVNode;
var LL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ML = {}, OL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PL = /* @__PURE__ */ NL("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), RL = [
  PL
];
function FL(e, o) {
  return TL(), DL("svg", OL, RL);
}
var Za = /* @__PURE__ */ LL(ML, [["render", FL]]);
const UL = window.Vue.openBlock, WL = window.Vue.createElementBlock, m_ = window.Vue.createElementVNode;
var qL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const HL = {}, zL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YL = /* @__PURE__ */ m_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), GL = /* @__PURE__ */ m_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), jL = [
  YL,
  GL
];
function ZL(e, o) {
  return UL(), WL("svg", zL, jL);
}
var KL = /* @__PURE__ */ qL(HL, [["render", ZL]]);
const JL = window.Vue.openBlock, XL = window.Vue.createElementBlock, QL = window.Vue.createElementVNode;
var eM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tM = {}, nM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rM = /* @__PURE__ */ QL("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), oM = [
  rM
];
function iM(e, o) {
  return JL(), XL("svg", nM, oM);
}
var sM = /* @__PURE__ */ eM(tM, [["render", iM]]);
const tr = () => window.VRouter || vg;
const aM = window.Vue.openBlock, lM = window.Vue.createElementBlock, uM = window.Vue.pushScopeId, cM = window.Vue.popScopeId, Cw = window.Vue.createElementVNode;
var dM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fM = {}, hM = (e) => (uM("data-v-2263be39"), e = e(), cM(), e), pM = { class: "spinner-container" }, wM = /* @__PURE__ */ hM(() => /* @__PURE__ */ Cw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Cw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), vM = [
  wM
];
function mM(e, o) {
  return aM(), lM("div", pM, vM);
}
var id = /* @__PURE__ */ dM(fM, [["render", mM], ["__scopeId", "data-v-2263be39"]]);
const _M = window.Vue.defineComponent, Zu = window.Vue.unref, gM = window.Vue.createVNode, $M = window.Vue.createElementVNode, yM = window.Vue.withCtx, VM = window.Vue.openBlock, bM = window.Vue.createBlock, CM = window.Vue.pushScopeId, SM = window.Vue.popScopeId, EM = (e) => (CM("data-v-fba500de"), e = e(), SM(), e), IM = /* @__PURE__ */ EM(() => /* @__PURE__ */ $M("span", null, "New Situation", -1)), kM = window.Vue.markRaw, xM = /* @__PURE__ */ _M({
  __name: "NewSituationBtn",
  setup(e) {
    const o = tr(), r = kM({
      Add: Za
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (VM(), bM(Zu(he), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: yM(() => [
        gM(Zu(G), {
          icon: Zu(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        IM
      ]),
      _: 1
    }));
  }
});
const __ = /* @__PURE__ */ ue(xM, [["__scopeId", "data-v-fba500de"]]), AM = "/whoami", BM = async () => {
  try {
    const e = await tn.get(AM);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Ka = "/alec", g_ = "/alec/engine/configuration", $_ = "/alec/situation", TM = async () => {
  try {
    const e = await tn.get(`${g_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, DM = async (e) => {
  try {
    return (await tn.post(g_, e)).status === 200;
  } catch {
    return !1;
  }
}, y_ = async (e, o) => {
  try {
    const r = await tn.post(`${Ka}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == We.REJECTED.toLowerCase() && r.status === 200 && await Tm(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Sw = async (e, o) => {
  try {
    return (await tn.delete(`${Ka}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, V_ = async (e, o) => {
  try {
    return (await tn.put(`${Ka}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, NM = async (e) => {
  try {
    return (await tn.post($_, e)).status === 200;
  } catch {
    return !1;
  }
}, LM = async () => {
  try {
    return (await tn.post(`${$_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, MM = async () => {
  try {
    return (await tn.post(`${Ka}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, OM = window.Pinia.defineStore, PM = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, bo = OM("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await BM();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await TM();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...PM,
        ...r,
        distanceMeasureName: o ? We.HELLINGER_OPTION : We.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await DM(s) ? (this.engineInfo = s, !0) : !1;
    }
  }
}), RM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", FM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", UM = window.Vue.defineComponent, Gs = window.Vue.unref, Ew = window.Vue.createElementVNode, Ku = window.Vue.openBlock, Ju = window.Vue.createElementBlock, WM = window.Vue.createCommentVNode, qM = window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const HM = {
  key: 0,
  class: "info-engine"
}, zM = ["src"], YM = /* @__PURE__ */ qM(" ENGINE "), GM = {
  key: 0,
  class: "type"
}, jM = {
  key: 1,
  class: "type"
}, ZM = window.Vue.watch, KM = window.Vue.ref, JM = /* @__PURE__ */ UM({
  __name: "ConfigurationInfo",
  setup(e) {
    var u;
    const o = tr(), r = bo(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = KM(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == We.ENGINE_DBSCAN
    );
    return ZM(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == We.ENGINE_DBSCAN;
      }
    ), (c, f) => Gs(r).engineInfo && Gs(r).engineInfo.engineName ? (Ku(), Ju("div", HM, [
      Ew("img", {
        src: a.value ? Gs(FM) : Gs(RM),
        class: "icon-type"
      }, null, 8, zM),
      Ew("div", {
        class: "engine",
        onClick: s
      }, [
        YM,
        a.value ? (Ku(), Ju("div", GM, "CLUSTERING")) : (Ku(), Ju("div", jM, "DEEP LEARNING"))
      ])
    ])) : WM("", !0);
  }
});
const XM = /* @__PURE__ */ ue(JM, [["__scopeId", "data-v-9a6c1414"]]);
const QM = {}, e3 = window.Vue.openBlock, t3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const n3 = { class: "empty" };
function r3(e, o) {
  return e3(), t3("div", n3, "No results found.");
}
const Lo = /* @__PURE__ */ ue(QM, [["render", r3], ["__scopeId", "data-v-725433ac"]]), o3 = window.Vue.defineComponent, dn = window.Vue.createElementVNode, di = window.Vue.unref, vr = window.Vue.createVNode, i3 = window.Vue.withCtx, js = window.Vue.toDisplayString, kn = window.Vue.openBlock, mr = window.Vue.createElementBlock, Iw = window.Vue.createCommentVNode, kw = window.Vue.createBlock, s3 = window.Vue.renderList, a3 = window.Vue.Fragment, l3 = window.Vue.pushScopeId, u3 = window.Vue.popScopeId, b_ = (e) => (l3("data-v-2675e2f8"), e = e(), u3(), e), c3 = { class: "list-main" }, d3 = { class: "header" }, f3 = /* @__PURE__ */ b_(() => /* @__PURE__ */ dn("h2", null, "Situation List", -1)), h3 = { class: "link-btns" }, p3 = /* @__PURE__ */ b_(() => /* @__PURE__ */ dn("span", null, "View Unassociated Alarms", -1)), w3 = { class: "content" }, v3 = { class: "left-filters" }, m3 = { class: "container" }, _3 = { class: "autocomplete" }, g3 = { key: 0 }, $3 = { key: 1 }, y3 = { key: 0 }, V3 = { class: "situation-list" }, b3 = {
  key: 0,
  class: "footer-pager"
}, C3 = window.Vue.reactive, Zs = window.Vue.ref, S3 = window.Vue.watch, E3 = window.Vue.markRaw, I3 = /* @__PURE__ */ o3({
  __name: "SituationList",
  setup(e) {
    const o = E3({
      Add: Za,
      View: KL,
      Settings: sM
    }), r = tr(), s = nn(), a = bo();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = C3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = Zs(!0), w = Zs(0), m = Zs(1), _ = Zs(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    S3(
      () => s.situations,
      () => {
        f.value = !1, $(), M(s.situations);
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
    }, M = (S) => {
      _.value = S.length, c.allSituations = ve.exports.chunk(S, u);
      const N = S.map((A) => A.id);
      s.filteredSituations = N, w.value = 0, c.situations = c.allSituations[0], m.value = c.allSituations.length;
    }, L = (S) => {
      S.length ? M(S) : c.situations = [];
    };
    return (S, N) => {
      var A;
      return kn(), mr("div", c3, [
        dn("div", d3, [
          f3,
          dn("div", h3, [
            vr(di(he), {
              class: "view-situation-btn",
              onClick: N[0] || (N[0] = () => B())
            }, {
              default: i3(() => [
                vr(di(G), {
                  icon: di(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                p3
              ]),
              _: 1
            }),
            vr(__),
            vr(XM)
          ])
        ]),
        dn("div", w3, [
          dn("div", v3, [
            vr(No, {
              list: di(s).situations,
              onFilteredList: L,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          dn("div", m3, [
            dn("div", _3, [
              c.situations && c.situations.length ? (kn(), mr("div", g3, " Result: " + js((A = c.situations) == null ? void 0 : A.length) + " of " + js(_.value), 1)) : Iw("", !0)
            ]),
            f.value ? (kn(), kw(di(id), {
              key: 0,
              class: "spinner"
            })) : (kn(), mr("div", $3, [
              c.situations && c.situations.length ? (kn(), mr("div", y3, [
                dn("div", V3, [
                  (kn(!0), mr(a3, null, s3(c.situations, (O) => (kn(), mr("div", {
                    class: "card",
                    key: O.id
                  }, [
                    vr(Wm, {
                      onClick: () => T(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (kn(), mr("div", b3, [
                  dn("div", null, "Page: " + js(w.value + 1) + " of " + js(m.value), 1),
                  vr(Rk, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: m.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Iw("", !0)
              ])) : (kn(), kw(Lo, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const k3 = /* @__PURE__ */ ue(I3, [["__scopeId", "data-v-2675e2f8"]]);
const Ks = window.Vue.ref, x3 = window.Vue.inject, A3 = window.Vue.computed, B3 = window.Vue.onMounted, C_ = {
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
}, S_ = (e) => {
  const o = Ks(!1), r = Ks(), s = Ks(e.controls), a = Ks(e.id), u = () => {
    r.value && r.value.focus();
  }, c = x3("registerTab");
  B3(() => {
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
  const f = A3(() => ({
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
}, xw = window.Vue.ref, T3 = window.Vue.toRef, D3 = window.Vue.watch, Aw = window.Vue.provide, E_ = {
  prop: "modelValue",
  event: "update:modelValue"
}, I_ = {
  "update:modelValue": (e) => !0
}, k_ = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, x_ = (e, o) => {
  const r = T3(e, "modelValue"), s = xw(e.modelValue), a = xw([]);
  D3(r, (B) => {
    w(B);
  });
  const u = (B) => {
    B.preventDefault(), a.value.some((M, L) => M.tab && M.tab.el.contains(B.target) ? (f(L), w(L), !0) : !1);
  }, c = (B) => {
    if (((q) => q.shiftKey || q.ctrlKey || q.metaKey || q.altKey)(B))
      return;
    const L = B.keyCode, S = (q) => {
      q.stopPropagation(), q.preventDefault();
    }, N = a.value.filter((q) => q.tab && !q.tab.disabled), A = a.value.findIndex((q) => q.tab && q.tab.el.contains(document.activeElement));
    let O = A !== -1 ? A : s.value;
    const I = [X.RIGHT], F = [X.LEFT], P = [X.ENTER, X.SPACE];
    e.vertical && (I.push(X.DOWN), F.push(X.UP)), I.indexOf(L) > -1 ? (O++, O >= N.length && (O = 0), S(B), f(a.value.indexOf(N[O]))) : F.indexOf(L) > -1 && (O--, O < 0 && (O = N.length - 1), S(B), f(a.value.indexOf(N[O]))), P.indexOf(L) > -1 && w(O);
  }, f = (B) => {
    a.value.forEach(function(M, L) {
      B === L && M.tab && M.tab.focus();
    });
  }, w = (B) => {
    const M = a.value[B];
    !M || M.tab && M.tab.disabled || (a.value.forEach((L, S) => {
      L.tab && (L.tab.selected = B === S), L.panel && (L.panel.selected = B === S);
    }), s.value = B, o.emit("update:modelValue", B));
  };
  Aw("registerTab", (B) => {
    const M = B.index;
    M > -1 && (a.value[M] = { ...a.value[M], tab: B }, a.value = [...a.value], $());
  }), Aw("registerPanel", (B) => {
    const M = B.index;
    M > -1 && (a.value[M] = {
      ...a.value[M],
      panel: B
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: B, panel: M }, L) => {
      if (M && B) {
        const S = B.id || oe("tab"), N = B.controls || oe("panel");
        B.controls = N, B.id = S, M.tab = S, M.id = N;
      }
      L === s.value && (M && (M.selected = !0), B && (B.selected = !0));
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
}, Js = window.Vue.ref, N3 = window.Vue.inject, L3 = window.Vue.computed, M3 = window.Vue.onMounted, A_ = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, B_ = (e) => {
  const o = Js(!1), r = Js(), s = Js(e.tab), a = Js(e.id), u = N3("registerPanel");
  M3(() => {
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
  const c = L3(() => ({
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
}, sd = window.Vue.defineComponent, O3 = window.Vue.resolveComponent, ad = window.Vue.openBlock, ld = window.Vue.createElementBlock, Li = window.Vue.createElementVNode, T_ = window.Vue.mergeProps, ka = window.Vue.renderSlot, P3 = window.Vue.createVNode, R3 = window.Vue.normalizeStyle, F3 = window.Vue.toHandlers, U3 = window.Vue.withDirectives, W3 = window.Vue.normalizeProps, q3 = window.Vue.guardReactiveProps, H3 = window.Vue.vShow;
var ud = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const z3 = C_, Y3 = sd({
  props: z3,
  setup(e) {
    return S_(e);
  },
  components: {
    FeatherRipple: Xn
  }
}), G3 = { role: "presentation" }, j3 = { class: "tab-text" };
function Z3(e, o, r, s, a, u) {
  const c = O3("FeatherRipple");
  return ad(), ld("li", G3, [
    Li("button", T_(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Li("span", j3, [
        ka(e.$slots, "default", {}, void 0, !0)
      ]),
      P3(c)
    ], 16)
  ]);
}
var Bw = /* @__PURE__ */ ud(Y3, [["render", Z3], ["__scopeId", "data-v-e6bb52b6"]]);
const K3 = k_, J3 = I_, X3 = sd({
  model: E_,
  emits: J3,
  props: K3,
  setup(e, o) {
    return x_(e, o);
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
}), Q3 = { class: "feather-tab-container" }, eO = { class: "tab-panels" };
function tO(e, o, r, s, a, u) {
  return ad(), ld("div", Q3, [
    Li("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: R3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Li("ul", T_(e.attrs, F3(e.listeners)), [
      ka(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Li("div", eO, [
      ka(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var nO = /* @__PURE__ */ ud(X3, [["render", tO], ["__scopeId", "data-v-27adffb9"]]);
const rO = A_, oO = sd({
  props: rO,
  setup(e) {
    return B_(e);
  }
});
function iO(e, o, r, s, a, u) {
  return U3((ad(), ld("div", W3(q3(e.attrs)), [
    ka(e.$slots, "default")
  ], 16)), [
    [H3, e.selected]
  ]);
}
var Tw = /* @__PURE__ */ ud(oO, [["render", iO]]);
const sO = window.Vue.defineComponent, aO = window.Vue.toDisplayString, lO = window.Vue.normalizeClass, uO = window.Vue.openBlock, cO = window.Vue.createElementBlock, dO = window.Vue.createCommentVNode, fO = /* @__PURE__ */ sO({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (uO(), cO("span", {
      key: 0,
      class: lO(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, aO(o.severity), 3)) : dO("", !0);
  }
});
const D_ = /* @__PURE__ */ ue(fO, [["__scopeId", "data-v-83c2cdce"]]), hO = window.Vue.defineComponent, Dw = window.Vue.toDisplayString, Nw = window.Vue.createElementVNode, pO = window.Vue.openBlock, wO = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const vO = { class: "box" }, mO = { class: "label" }, _O = { class: "date" }, gO = /* @__PURE__ */ hO({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (pO(), wO("div", vO, [
      Nw("div", mO, Dw(o.label), 1),
      Nw("div", _O, Dw(o.info), 1)
    ]));
  }
});
const Xu = /* @__PURE__ */ ue(gO, [["__scopeId", "data-v-b4afa751"]]), $O = window.Vue.defineComponent, yO = window.Vue.unref, VO = window.Vue.renderList, bO = window.Vue.Fragment, Qu = window.Vue.openBlock, ec = window.Vue.createElementBlock, CO = window.Vue.toDisplayString, SO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const EO = { class: "alarms-list" }, IO = /* @__PURE__ */ $O({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Qu(), ec("div", EO, [
      (Qu(!0), ec(bO, null, VO(yO(ve.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Qu(), ec("div", {
        class: SO(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, CO(a.length), 3))), 128))
    ]));
  }
});
const kO = /* @__PURE__ */ ue(IO, [["__scopeId", "data-v-52d63440"]]), xO = window.Vue.openBlock, AO = window.Vue.createElementBlock, BO = window.Vue.createElementVNode;
var TO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DO = {}, NO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LO = /* @__PURE__ */ BO("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), MO = [
  LO
];
function OO(e, o) {
  return xO(), AO("svg", NO, MO);
}
var PO = /* @__PURE__ */ TO(DO, [["render", OO]]);
const RO = window.Vue.openBlock, FO = window.Vue.createElementBlock, UO = window.Vue.createStaticVNode;
var WO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qO = {}, HO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zO = /* @__PURE__ */ UO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), YO = [
  zO
];
function GO(e, o) {
  return RO(), FO("svg", HO, YO);
}
var xa = /* @__PURE__ */ WO(qO, [["render", GO]]);
const jO = window.Vue.defineComponent, Zt = window.Vue.unref, tc = window.Vue.createVNode, cd = window.Vue.createElementVNode, nc = window.Vue.withCtx, Xs = window.Vue.openBlock, rc = window.Vue.createBlock, oc = window.Vue.createCommentVNode, ZO = window.Vue.normalizeClass, KO = window.Vue.createElementBlock, JO = window.Vue.pushScopeId, XO = window.Vue.popScopeId, dd = (e) => (JO("data-v-e073070b"), e = e(), XO(), e), QO = /* @__PURE__ */ dd(() => /* @__PURE__ */ cd("span", null, "Acknowledge", -1)), e4 = /* @__PURE__ */ dd(() => /* @__PURE__ */ cd("span", null, "Escalate", -1)), t4 = /* @__PURE__ */ dd(() => /* @__PURE__ */ cd("span", null, "Clear", -1)), n4 = /* @__PURE__ */ jO({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = nn(), s = async (u) => {
      await SE(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await y_(
        o.situationId,
        We.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Tm(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (Xs(), KO("div", {
      class: ZO(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? oc("", !0) : (Xs(), rc(Zt(he), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: nc(() => [
          tc(Zt(G), {
            icon: Zt(yo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          QO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Xs(), rc(Zt(he), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(Zt(We).ESCALATE))
      }, {
        default: nc(() => [
          tc(Zt(G), {
            icon: Zt(PO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          e4
        ]),
        _: 1
      })) : oc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Xs(), rc(Zt(he), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(Zt(We).CLEAR))
      }, {
        default: nc(() => [
          tc(Zt(G), {
            icon: Zt(xa),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          t4
        ]),
        _: 1
      })) : oc("", !0)
    ], 2));
  }
});
const N_ = /* @__PURE__ */ ue(n4, [["__scopeId", "data-v-e073070b"]]);
var r4 = Object.defineProperty, o4 = Object.defineProperties, i4 = Object.getOwnPropertyDescriptors, Lw = Object.getOwnPropertySymbols, s4 = Object.prototype.hasOwnProperty, a4 = Object.prototype.propertyIsEnumerable, Mw = (e, o, r) => o in e ? r4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Oc = (e, o) => {
  for (var r in o || (o = {}))
    s4.call(o, r) && Mw(e, r, o[r]);
  if (Lw)
    for (var r of Lw(o))
      a4.call(o, r) && Mw(e, r, o[r]);
  return e;
}, L_ = (e, o) => o4(e, i4(o));
const M_ = window.Vue.defineComponent, l4 = window.Vue.inject, u4 = window.Vue.resolveComponent, ic = window.Vue.openBlock, Ow = window.Vue.createElementBlock, ho = window.Vue.createElementVNode, c4 = window.Vue.createBlock, Pw = window.Vue.createCommentVNode, d4 = window.Vue.renderSlot, f4 = window.Vue.pushScopeId, h4 = window.Vue.popScopeId, sc = window.Vue.toRef, Qs = window.Vue.computed, p4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var w4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const v4 = {
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
}, m4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, _4 = M_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: m4,
  props: v4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: l4("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : oe("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : oe("checkbox-label");
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
      (e.keyCode === X.SPACE || e.keyCode === X.ENTER) && this.updateValue(), e.keyCode === X.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Xn
  }
}), g4 = (e) => (f4("data-v-a7af27e2"), e = e(), h4(), e), $4 = { class: "layout-container" }, y4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], V4 = { class: "checkbox hover focus" }, b4 = /* @__PURE__ */ g4(() => /* @__PURE__ */ ho("div", { class: "box" }, [
  /* @__PURE__ */ ho("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ ho("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ ho("div", { class: "indeterminate" })
], -1)), C4 = ["id", "for"];
function S4(e, o, r, s, a, u) {
  const c = u4("feather-ripple");
  return ic(), Ow("div", $4, [
    ho("div", {
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
      ho("div", V4, [
        b4,
        e.disabled ? Pw("", !0) : (ic(), c4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Pw("", !0) : (ic(), Ow("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        d4(e.$slots, "default", {}, void 0, !0)
      ], 8, C4))
    ], 40, y4)
  ]);
}
var zi = /* @__PURE__ */ w4(_4, [["render", S4], ["__scopeId", "data-v-a7af27e2"]]);
const E4 = L_(Oc({}, Bo), {
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
M_({
  props: E4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    To(e);
    const r = sc(e, "error"), s = Qs(() => oe("feather-checkbox-group")), a = Qs(() => oe("feather-input-description")), u = Qs(() => oe("feather-input-label")), c = Qs(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), L_(Oc({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = p4(s.value), { validate: w } = xo(f, sc(e, "modelValue"), e.label, e.schema, sc(e, "error"));
    return Oc({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, Ao(o.attrs));
  },
  components: {
    InputSubText: ko
  }
});
const I4 = window.Vue.openBlock, k4 = window.Vue.createElementBlock, O_ = window.Vue.createElementVNode;
var x4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const A4 = {}, B4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, T4 = /* @__PURE__ */ O_("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), D4 = /* @__PURE__ */ O_("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), N4 = [
  T4,
  D4
];
function L4(e, o) {
  return I4(), k4("svg", B4, N4);
}
var M4 = /* @__PURE__ */ x4(A4, [["render", L4]]);
var O4 = Object.defineProperty, P4 = Object.defineProperties, R4 = Object.getOwnPropertyDescriptors, Rw = Object.getOwnPropertySymbols, F4 = Object.prototype.hasOwnProperty, U4 = Object.prototype.propertyIsEnumerable, Fw = (e, o, r) => o in e ? O4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, po = (e, o) => {
  for (var r in o || (o = {}))
    F4.call(o, r) && Fw(e, r, o[r]);
  if (Rw)
    for (var r of Rw(o))
      U4.call(o, r) && Fw(e, r, o[r]);
  return e;
}, P_ = (e, o) => P4(e, R4(o));
const W4 = window.Vue.defineComponent, ac = window.Vue.toRef, q4 = window.Vue.computed, Uw = window.Vue.resolveComponent, Ww = window.Vue.openBlock, qw = window.Vue.createElementBlock, Hw = window.Vue.mergeProps, zw = window.Vue.createVNode, H4 = window.Vue.normalizeClass, Yw = window.Vue.withCtx, z4 = window.Vue.createElementVNode, Y4 = window.Vue.toDisplayString, G4 = window.Vue.createCommentVNode;
var j4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Z4 = P_(po(po({}, Fa), Bo), {
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
}), K4 = {
  "update:modelValue": (e) => !0
}, J4 = W4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: K4,
  props: Z4,
  setup(e, o) {
    To(e), Ua(e);
    const r = ac(e, "id"), s = q4(() => r.value ? r.value : oe("feather-textarea-label")), { validate: a } = xo(s, ac(e, "modelValue"), e.label, e.schema, ac(e, "error"));
    return po({
      inputId: s,
      incomingId: r,
      validate: a
    }, Ao(o.attrs));
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
      return oe("feather-textarea-description");
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
      const e = po({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), P_(po(po({}, e), this.listeners), {
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
    InputSubText: ko,
    InputWrapper: Ra
  }
}), X4 = ["maxlength"], Q4 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function eP(e, o, r, s, a, u) {
  const c = Uw("InputWrapper"), f = Uw("InputSubText");
  return Ww(), qw("div", Hw(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    zw(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: H4(["feather-textarea-content", e.contentCls])
    }, {
      default: Yw(() => [
        z4("textarea", Hw(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, X4)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    zw(f, { id: e.descriptionId }, {
      right: Yw(() => [
        e.maxlength ? (Ww(), qw("div", Q4, Y4(e.charCount), 1)) : G4("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Pc = /* @__PURE__ */ j4(J4, [["render", eP], ["__scopeId", "data-v-0648df5c"]]);
const tP = window.Pinia.defineStore, Ja = tP("appStore", {
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
}), nP = window.Vue.defineComponent, Gw = window.Vue.toDisplayString, fi = window.Vue.createElementVNode, _r = window.Vue.unref, eo = window.Vue.openBlock, jw = window.Vue.createBlock, hi = window.Vue.createCommentVNode, Zw = window.Vue.createVNode, ea = window.Vue.createElementBlock, rP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oP = { class: "row" }, iP = { class: "label" }, sP = { class: "action-icons" }, aP = { class: "icon-btn" }, lP = {
  key: 0,
  class: "icon-btn"
}, uP = {
  key: 1,
  class: "icon-btn"
}, cP = {
  key: 0,
  class: "text"
}, dP = window.Vue.watch, Kw = window.Vue.ref, fP = /* @__PURE__ */ nP({
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
    const o = e, r = Ja(), s = Kw(!1), a = Kw((w = o.memo) == null ? void 0 : w.body);
    dP(o, () => {
      var m;
      a.value = (m = o.memo) == null ? void 0 : m.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await TE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await BE(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (m, _) => (eo(), ea("div", {
      class: rP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      fi("div", oP, [
        fi("div", iP, Gw(e.label), 1),
        fi("div", sP, [
          fi("div", aP, [
            s.value ? hi("", !0) : (eo(), jw(_r(G), {
              key: 0,
              icon: _r(M4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (eo(), ea("div", lP, [
            Zw(_r(G), {
              icon: _r(yo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : hi("", !0),
          a.value && a.value != "" || s.value ? (eo(), ea("div", uP, [
            Zw(_r(G), {
              icon: _r(Eo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : hi("", !0)
        ])
      ]),
      fi("div", null, [
        !s.value && a.value != null ? (eo(), ea("div", cP, Gw(a.value), 1)) : hi("", !0),
        s.value ? (eo(), jw(_r(Pc), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : hi("", !0)
      ])
    ], 2));
  }
});
const Aa = /* @__PURE__ */ ue(fP, [["__scopeId", "data-v-3f44e250"]]), hP = window.Vue.defineComponent, gr = window.Vue.unref, to = window.Vue.createVNode, pi = window.Vue.toDisplayString, Qt = window.Vue.createElementVNode, Jw = window.Vue.openBlock, Xw = window.Vue.createElementBlock, Qw = window.Vue.createCommentVNode, lc = window.Vue.createTextVNode, pP = window.Vue.pushScopeId, wP = window.Vue.popScopeId, fd = (e) => (pP("data-v-02d1e7f0"), e = e(), wP(), e), vP = {
  key: 0,
  class: "card"
}, mP = { class: "row" }, _P = {
  key: 0,
  class: "ack"
}, gP = /* @__PURE__ */ fd(() => /* @__PURE__ */ Qt("strong", null, " Duration: ", -1)), $P = ["innerHTML"], yP = /* @__PURE__ */ fd(() => /* @__PURE__ */ Qt("strong", null, "First Event", -1)), VP = /* @__PURE__ */ fd(() => /* @__PURE__ */ Qt("strong", null, "Last Event", -1)), bP = { class: "section memo-boxes" }, ev = window.Vue.ref, CP = window.Vue.watch, SP = /* @__PURE__ */ hP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = ev(!1), a = ev(r.alarm), u = new Date().getTime();
    CP(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const m = await Dm(w);
      m && (a.value = m);
    };
    return (w, m) => {
      var _, $, y, T, B;
      return a.value ? (Jw(), Xw("div", vP, [
        Qt("div", null, [
          Qt("div", mP, [
            to(gr(zi), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                m[0] || (m[0] = (M) => s.value = M),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Qt("div", {
              class: "title",
              onClick: m[1] || (m[1] = () => {
                s.value = !s.value, c();
              })
            }, pi(a.value.nodeLabel) + " - " + pi(a.value.id), 1),
            to(D_, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Jw(), Xw("div", _P, [
              to(gr(G), {
                icon: gr(yo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Qw("", !0)
          ]),
          Qt("div", null, [
            gP,
            lc(" " + pi(gr(Oa)(gr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          Qt("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, $P),
          Qt("div", null, [
            yP,
            lc(" - " + pi(gr(wn)(a.value.firstEventTime)), 1)
          ]),
          Qt("div", null, [
            VP,
            lc(" - " + pi(gr(wn)(a.value.lastEventTime)), 1)
          ]),
          Qt("div", bP, [
            to(Aa, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            to(Aa, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (B = a.value) == null ? void 0 : B.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        to(N_, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Qw("", !0);
    };
  }
});
const EP = /* @__PURE__ */ ue(SP, [["__scopeId", "data-v-02d1e7f0"]]), IP = window.Vue.openBlock, kP = window.Vue.createElementBlock, R_ = window.Vue.createElementVNode;
var xP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AP = {}, BP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TP = /* @__PURE__ */ R_("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), DP = /* @__PURE__ */ R_("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), NP = [
  TP,
  DP
];
function LP(e, o) {
  return IP(), kP("svg", BP, NP);
}
var Rc = /* @__PURE__ */ xP(AP, [["render", LP]]);
const MP = window.Vue.watch, OP = window.Vue.ref, PP = window.Vue.onBeforeUnmount, F_ = (e) => {
  const o = OP(!1), r = (s) => {
    s.keyCode === X.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return MP(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), PP(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, RP = window.Vue.watch, U_ = (e) => {
  let o;
  RP(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, W_ = window.Vue.watch, q_ = window.Vue.onBeforeUnmount, H_ = window.Vue.nextTick, FP = window.Vue.onMounted, z_ = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Ba = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, Y_ = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  q_(() => Ba(o, r)), FP(() => W_(e, (s) => {
    s ? H_(() => {
      o = z_(r);
    }) : Ba(o, r);
  }, { immediate: !0 }));
}, UP = (e, o) => {
  let r;
  q_(() => Ba(r, o.value ? o.value.offsetParent : !1)), W_([e, o], ([s, a]) => {
    s && a ? H_(() => {
      r = z_(a.offsetParent);
    }) : a && Ba(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var WP = Object.defineProperty, tv = Object.getOwnPropertySymbols, qP = Object.prototype.hasOwnProperty, HP = Object.prototype.propertyIsEnumerable, nv = (e, o, r) => o in e ? WP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, zP = (e, o) => {
  for (var r in o || (o = {}))
    qP.call(o, r) && nv(e, r, o[r]);
  if (tv)
    for (var r of tv(o))
      HP.call(o, r) && nv(e, r, o[r]);
  return e;
};
const hd = window.Vue.defineComponent, Mi = window.Vue.ref, YP = window.Vue.nextTick, G_ = window.Vue.openBlock, j_ = window.Vue.createElementBlock, pd = window.Vue.createElementVNode, GP = window.Vue.renderSlot, jP = window.Vue.resolveComponent, ZP = window.Vue.normalizeClass, KP = window.Vue.withModifiers, JP = window.Vue.createVNode, rv = window.Vue.toRef, ov = window.Vue.computed, iv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Z_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XP = {
  enable: {
    type: Boolean,
    required: !0
  }
}, QP = hd({
  props: XP,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Mi(), o = Mi(!1), r = (_, $) => {
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
      $ && $.focus ? YP(() => {
        $.focus();
      }) : s(_);
    }, w = Mi();
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
}), eR = /* @__PURE__ */ pd("div", { tabindex: "0" }, null, -1), tR = {
  class: "focus-trap-content",
  ref: "content"
}, nR = /* @__PURE__ */ pd("div", { tabindex: "0" }, null, -1);
function rR(e, o, r, s, a, u) {
  return G_(), j_("div", null, [
    eR,
    pd("div", tR, [
      GP(e.$slots, "default")
    ], 512),
    nR
  ]);
}
var K_ = /* @__PURE__ */ Z_(QP, [["render", rR]]);
const oR = hd({
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
    icon: () => Eo
  },
  components: {
    FeatherIcon: G
  }
}), iR = ["aria-label"];
function sR(e, o, r, s, a, u) {
  const c = jP("FeatherIcon");
  return G_(), j_("a", {
    href: "#",
    class: ZP(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = KP((f) => e.$emit("close"), ["prevent"]))
  }, [
    JP(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, iR);
}
var J_ = /* @__PURE__ */ Z_(oR, [["render", sR], ["__scopeId", "data-v-fc0f3f00"]]);
const X_ = {
  title: "REQUIRED",
  close: "Close Dialog"
}, aR = {
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
    default: () => X_,
    validator: (e) => !!e.title
  }
}, lR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
hd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: lR,
  props: aR,
  setup(e, o) {
    const r = Pa(rv(e, "labels"), X_), s = rv(e, "modelValue"), a = Mi(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = ov(() => !!o.slots.footer), f = ov(() => oe("dialog-header"));
    e.relative ? UP(s, a) : Y_(s), U_(s), iv(F_(s), () => {
      u();
    });
    const w = Mi(e.modelValue);
    return iv(w, (m) => {
      m ? o.emit("shown") : o.emit("hidden");
    }), zP({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: K_,
    DialogClose: J_
  }
});
var uR = Object.defineProperty, sv = Object.getOwnPropertySymbols, cR = Object.prototype.hasOwnProperty, dR = Object.prototype.propertyIsEnumerable, av = (e, o, r) => o in e ? uR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xa = (e, o) => {
  for (var r in o || (o = {}))
    cR.call(o, r) && av(e, r, o[r]);
  if (sv)
    for (var r of sv(o))
      dR.call(o, r) && av(e, r, o[r]);
  return e;
};
const Qa = window.Vue.defineComponent, lv = window.Vue.toRef, uv = window.Vue.watch, cv = window.Vue.ref, dv = window.Vue.resolveComponent, ta = window.Vue.openBlock, fv = window.Vue.createBlock, fR = window.Vue.Teleport, hv = window.Vue.createElementBlock, uc = window.Vue.createVNode, pv = window.Vue.Transition, cc = window.Vue.withCtx, wv = window.Vue.createCommentVNode, hR = window.Vue.withDirectives, pR = window.Vue.normalizeStyle, wR = window.Vue.normalizeClass, vv = window.Vue.createElementVNode, vR = window.Vue.renderSlot, mR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var _R = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Q_ = {
  title: "REQUIRED",
  close: "Close Dialog"
}, gR = {
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
    default: () => Q_,
    validator: (e) => !!e.title
  }
}, $R = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, yR = Qa({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $R,
  props: gR,
  setup(e, o) {
    const r = Pa(lv(e, "labels"), Q_), s = lv(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    Y_(s), U_(s), uv(F_(s), () => {
      a();
    });
    const u = cv(), c = cv(!1);
    return uv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), Xa({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: J_,
    FocusTrap: K_
  }
}), VR = {
  key: 0,
  class: "drawer-container feather-styles"
}, bR = {
  key: 0,
  class: "greyedOut"
}, CR = ["aria-label"], SR = { class: "slot" };
function ER(e, o, r, s, a, u) {
  const c = dv("dialog-close"), f = dv("focus-trap");
  return ta(), fv(fR, { to: "body" }, [
    e.modelValue ? (ta(), hv("div", VR, [
      uc(pv, { name: "greyOutShim" }, {
        default: cc(() => [
          e.modelValue ? (ta(), hv("div", bR)) : wv("", !0)
        ]),
        _: 1
      }),
      uc(pv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: cc(() => [
          hR((ta(), fv(f, {
            enable: e.modelValue,
            style: pR({ width: e.width }),
            key: "sect",
            class: wR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: cc(() => [
              vv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                vv("div", SR, [
                  vR(e.$slots, "default", {}, void 0, !0)
                ]),
                uc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, CR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [mR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : wv("", !0)
  ]);
}
var eg = /* @__PURE__ */ _R(yR, [["render", ER], ["__scopeId", "data-v-0a36e1dc"]]);
const IR = Xa({
  label: {
    type: String,
    required: !0
  }
}, C_);
Qa({
  name: "DrawerTab",
  props: IR,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = kr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      xr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return S_(e);
  },
  components: {
    FeatherRipple: Xn
  }
});
const kR = Xa({}, k_), xR = I_;
Qa({
  emits: xR,
  model: E_,
  props: kR,
  setup(e, o) {
    return x_(e, o);
  }
});
const AR = Xa({
  header: {
    type: String
  }
}, A_);
Qa({
  name: "DrawerTabContent",
  props: AR,
  setup(e) {
    return B_(e);
  },
  directives: {
    MenuFocusLoop: OB
  }
});
const BR = window.Vue.defineComponent, tg = window.Vue.createElementVNode, mv = window.Vue.createVNode, TR = window.Vue.renderList, DR = window.Vue.Fragment, wi = window.Vue.openBlock, dc = window.Vue.createElementBlock, _v = window.Vue.createBlock, NR = window.Vue.unref, LR = window.Vue.withCtx, MR = window.Vue.pushScopeId, OR = window.Vue.popScopeId, PR = (e) => (MR("data-v-c7c65659"), e = e(), OR(), e), RR = { class: "content" }, FR = /* @__PURE__ */ PR(() => /* @__PURE__ */ tg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), UR = {
  key: 0,
  class: "situation-list"
}, fc = window.Vue.ref, gv = window.Vue.watch, WR = /* @__PURE__ */ BR({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = nn(), a = fc(r.visible), u = () => {
      let m = s.situations;
      r.situationId !== 0 && (m = s.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = m, f.value = m;
    }, c = fc(s.situations), f = fc(s.situations);
    gv(r, () => {
      a.value = r.visible, u();
    }), gv(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (m) => {
      f.value = m;
    };
    return (m, _) => (wi(), _v(NR(eg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: LR(() => [
        tg("div", RR, [
          FR,
          mv(No, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (wi(), dc("div", UR, [
            (wi(!0), dc(DR, null, TR(f.value, ($) => (wi(), dc("div", {
              class: "card",
              key: $.id
            }, [
              mv(Wm, {
                onClick: (y) => o("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (wi(), _v(Lo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const ng = /* @__PURE__ */ ue(WR, [["__scopeId", "data-v-c7c65659"]]), qR = window.Vue.defineComponent, $v = window.Vue.normalizeClass, co = window.Vue.createElementVNode, na = window.Vue.unref, HR = window.Vue.createVNode, ra = window.Vue.toDisplayString, zR = window.Vue.createTextVNode, YR = window.Vue.openBlock, GR = window.Vue.createElementBlock, jR = window.Vue.pushScopeId, ZR = window.Vue.popScopeId, KR = (e) => (jR("data-v-e1e9b696"), e = e(), ZR(), e), JR = { class: "alarmInfo" }, XR = { class: "alarm-title" }, QR = /* @__PURE__ */ KR(() => /* @__PURE__ */ co("strong", null, " Duration: ", -1)), e8 = { class: "description" }, t8 = /* @__PURE__ */ qR({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (YR(), GR("div", {
      class: $v(["alarm", { selected: r.selected }])
    }, [
      co("div", JR, [
        co("div", {
          class: $v(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        HR(na(zi), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        co("div", XR, ra(e.alarm.nodeLabel) + " - " + ra(e.alarm.id), 1)
      ]),
      co("div", null, [
        QR,
        zR(" " + ra(na(Oa)(na(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      co("div", e8, ra(na(Um)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const wd = /* @__PURE__ */ ue(t8, [["__scopeId", "data-v-e1e9b696"]]), n8 = window.Vue.defineComponent, va = window.Vue.createElementVNode, no = window.Vue.unref, r8 = window.Vue.toDisplayString, yv = window.Vue.withCtx, hc = window.Vue.createVNode, o8 = window.Vue.renderList, i8 = window.Vue.Fragment, vi = window.Vue.openBlock, pc = window.Vue.createElementBlock, Vv = window.Vue.createBlock, s8 = window.Vue.pushScopeId, a8 = window.Vue.popScopeId, l8 = (e) => (s8("data-v-4bc80d4b"), e = e(), a8(), e), u8 = { class: "content" }, c8 = { class: "header" }, d8 = /* @__PURE__ */ l8(() => /* @__PURE__ */ va("h4", null, "ADD ALARMS", -1)), f8 = {
  key: 0,
  class: "alarms-list"
}, oa = window.Vue.ref, bv = window.Vue.watch, h8 = /* @__PURE__ */ n8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = nn(), a = oa(r.visible), u = oa([]), c = oa(["all"]), f = oa(s.unassignedAlarms);
    bv(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), bv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      ve.exports.includes(u.value, y) ? ve.exports.remove(u.value, (T) => T === y) : u.value.push(y);
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
    return (y, T) => (vi(), Vv(no(eg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (B) => a.value = B),
        T[1] || (T[1] = (B) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: yv(() => [
        va("div", u8, [
          va("div", c8, [
            d8,
            hc(no(he), {
              class: "add-alarms-btn",
              onClick: m
            }, {
              default: yv(() => [
                va("span", null, "Add " + r8(no(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          hc(No, {
            list: no(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (vi(), pc("div", f8, [
            (vi(!0), pc(i8, null, o8(f.value, (B) => (vi(), pc("div", {
              class: "card",
              key: B.id
            }, [
              hc(wd, {
                selected: no(ve.exports.includes)(no(u), B.id),
                alarm: B,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (vi(), Vv(Lo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const p8 = /* @__PURE__ */ ue(h8, [["__scopeId", "data-v-4bc80d4b"]]), w8 = window.Vue.openBlock, v8 = window.Vue.createElementBlock, rg = window.Vue.createElementVNode;
var m8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _8 = {}, g8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $8 = /* @__PURE__ */ rg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), y8 = /* @__PURE__ */ rg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), V8 = [
  $8,
  y8
];
function b8(e, o) {
  return w8(), v8("svg", g8, V8);
}
var Cv = /* @__PURE__ */ m8(_8, [["render", b8]]);
const C8 = window.Vue.defineComponent, Ct = window.Vue.createElementVNode, Ke = window.Vue.unref, nt = window.Vue.createVNode, mi = window.Vue.withCtx, S8 = window.Vue.renderList, Sv = window.Vue.Fragment, _i = window.Vue.openBlock, ia = window.Vue.createElementBlock, E8 = window.Vue.createBlock, I8 = window.Vue.pushScopeId, k8 = window.Vue.popScopeId, Mo = (e) => (I8("data-v-524b0835"), e = e(), k8(), e), x8 = { class: "container" }, A8 = { class: "header" }, B8 = /* @__PURE__ */ Mo(() => /* @__PURE__ */ Ct("div", { class: "title" }, "Alarms", -1)), T8 = /* @__PURE__ */ Mo(() => /* @__PURE__ */ Ct("span", null, "Add Alarms", -1)), D8 = { class: "alarms-container" }, N8 = { class: "filters" }, L8 = { class: "list" }, M8 = { class: "row actions" }, O8 = /* @__PURE__ */ Mo(() => /* @__PURE__ */ Ct("span", null, "Clear", -1)), P8 = /* @__PURE__ */ Mo(() => /* @__PURE__ */ Ct("span", null, "Acknowledge", -1)), R8 = /* @__PURE__ */ Mo(() => /* @__PURE__ */ Ct("span", null, "Move", -1)), F8 = /* @__PURE__ */ Mo(() => /* @__PURE__ */ Ct("span", null, "Remove", -1)), U8 = { class: "section" }, W8 = {
  key: 0,
  class: "alarm-list"
}, sa = window.Vue.ref, q8 = window.Vue.watch, H8 = window.Vue.reactive, z8 = window.Vue.markRaw, Y8 = /* @__PURE__ */ C8({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = z8({
      Add: Za,
      Delete: Cv,
      MarkComplete: xa,
      CheckCircle: yo,
      ExitToApp: Rc
    }), s = Ja(), a = nn(), u = sa(!1), c = sa(["all"]), f = sa(!1), w = sa(!1), m = H8({
      selectedAlarms: [],
      alarms: o.alarms
    });
    q8(o, () => {
      c.value = ["all"], m.alarms = o.alarms, m.selectedAlarms = [], u.value = !1;
    });
    const _ = (A) => {
      m.selectedAlarms.includes(A) ? ve.exports.remove(m.selectedAlarms, (O) => O == A) : m.selectedAlarms.push(A);
    }, $ = async (A) => {
      m.selectedAlarms.length ? (await EE(m.selectedAlarms, A), a.getSituation(o.situationId), m.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => m.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : m.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await Sw(
        o.situationId,
        m.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, B = async (A) => {
      y() && (await Sw(
        o.situationId,
        m.selectedAlarms
      ) ? await M(A, m.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, M = async (A, O) => {
      O.length ? await V_(A, O) ? a.getSituation(A) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, L = async (A) => {
      await M(o.situationId, A), w.value = !1;
    }, S = () => {
      m.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, N = (A) => {
      m.alarms = A;
    };
    return (A, O) => (_i(), ia(Sv, null, [
      Ct("div", x8, [
        Ct("div", A8, [
          B8,
          nt(Ke(he), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (I) => w.value = !0)
          }, {
            default: mi(() => [
              nt(Ke(G), {
                icon: Ke(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              T8
            ]),
            _: 1
          })
        ]),
        Ct("div", D8, [
          Ct("div", N8, [
            nt(No, {
              list: o.alarms,
              onFilteredList: N,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Ct("div", L8, [
            Ct("div", M8, [
              nt(Ke(zi), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              nt(Ke(he), {
                onClick: O[2] || (O[2] = () => $("clear"))
              }, {
                default: mi(() => [
                  nt(Ke(G), {
                    icon: Ke(xa),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  O8
                ]),
                _: 1
              }),
              nt(Ke(he), {
                onClick: O[3] || (O[3] = () => $("ack"))
              }, {
                default: mi(() => [
                  nt(Ke(G), {
                    icon: Ke(yo),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  P8
                ]),
                _: 1
              }),
              nt(Ke(he), { onClick: S }, {
                default: mi(() => [
                  nt(Ke(G), {
                    icon: Ke(Rc),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  R8
                ]),
                _: 1
              }),
              nt(Ke(he), { onClick: T }, {
                default: mi(() => [
                  nt(Ke(G), {
                    icon: Ke(Cv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  F8
                ]),
                _: 1
              })
            ]),
            Ct("div", U8, [
              m.alarms.length > 0 ? (_i(), ia("div", W8, [
                (_i(!0), ia(Sv, null, S8(m.alarms, (I) => (_i(), ia("div", {
                  key: I.id
                }, [
                  nt(EP, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (_i(), E8(Lo, { key: 1 }))
            ])
          ])
        ])
      ]),
      nt(ng, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      nt(p8, {
        visible: w.value,
        onAlarmsSelected: L,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const G8 = /* @__PURE__ */ ue(Y8, [["__scopeId", "data-v-524b0835"]]), j8 = window.Vue.defineComponent, Kt = window.Vue.createVNode, Lt = window.Vue.unref, wc = window.Vue.normalizeClass, aa = window.Vue.toDisplayString, gi = window.Vue.openBlock, $i = window.Vue.createElementBlock, Ev = window.Vue.createCommentVNode, Z8 = window.Vue.withCtx, Pt = window.Vue.createElementVNode, K8 = window.Vue.Fragment, J8 = window.Vue.pushScopeId, X8 = window.Vue.popScopeId, Q8 = (e) => (J8("data-v-eab7334d"), e = e(), X8(), e), e5 = { class: "section" }, t5 = { class: "action-section" }, n5 = { class: "btn-row" }, r5 = { key: 0 }, o5 = { key: 1 }, i5 = {
  key: 0,
  class: "situation-detail"
}, s5 = { class: "situation-info" }, a5 = { class: "id" }, l5 = ["innerHTML"], u5 = /* @__PURE__ */ Q8(() => /* @__PURE__ */ Pt("p", null, null, -1)), c5 = { class: "boxes" }, d5 = { class: "parameters" }, f5 = { class: "section memo-boxes" }, h5 = { key: 0 }, Iv = window.Vue.ref, p5 = window.Vue.watch, w5 = /* @__PURE__ */ j8({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = Ja(), s = nn(), a = We.REJECTED, u = Iv(o.situationInfo.status), c = Iv(o.situationInfo);
    p5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = async (w) => {
      var _;
      await y_(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, m) => {
      var _, $, y, T, B, M, L, S, N, A, O, I;
      return gi(), $i(K8, null, [
        Pt("div", e5, [
          Pt("div", t5, [
            Kt(N_, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Pt("div", n5, [
              Kt(Lt(he), {
                class: wc(["btn", { rejected: u.value == Lt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (F) => f(Lt(a)))
              }, {
                default: Z8(() => [
                  Kt(Lt(G), {
                    icon: Lt(Nm),
                    "aria-hidden": "true",
                    class: wc(["icon reject", { rejected: u.value == Lt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Lt(a) ? (gi(), $i("span", r5, aa(Lt(a)), 1)) : (gi(), $i("span", o5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (gi(), $i("div", i5, [
            Pt("div", {
              class: wc(["severity-line", [`${($ = (_ = c.value) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
            }, null, 2),
            Pt("div", s5, [
              Pt("div", a5, [
                Pt("div", null, " Situation - " + aa((y = c.value) == null ? void 0 : y.id) + " - " + aa(c.value.alarms.length) + " alarm(s) affects " + aa(Lt(ve.exports.size)(Lt(ve.exports.groupBy)((T = c.value) == null ? void 0 : T.alarms, "nodeId"))) + " node(s) ", 1),
                Kt(D_, {
                  severity: (B = c.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              Pt("span", {
                innerHTML: c.value.description
              }, null, 8, l5),
              u5,
              Pt("div", c5, [
                Kt(Xu, {
                  label: "First Event",
                  info: Lt(wn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                Kt(Xu, {
                  label: "Last Event",
                  info: Lt(wn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                Kt(Xu, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Pt("div", d5, [
              Kt(kO, {
                alarms: (M = c.value) == null ? void 0 : M.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Ev("", !0),
          Pt("div", f5, [
            Kt(Aa, {
              id: (L = c.value) == null ? void 0 : L.id,
              situationId: (S = c.value) == null ? void 0 : S.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (N = c.value) == null ? void 0 : N.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Kt(Aa, {
              id: (A = c.value) == null ? void 0 : A.id,
              situationId: (O = c.value) == null ? void 0 : O.id,
              label: "Journal Memo",
              type: "journal",
              memo: (I = c.value) == null ? void 0 : I.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (gi(), $i("div", h5, [
          Kt(G8, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Ev("", !0)
      ], 64);
    };
  }
});
const v5 = /* @__PURE__ */ ue(w5, [["__scopeId", "data-v-eab7334d"]]);
var m5 = Object.defineProperty, _5 = Object.defineProperties, g5 = Object.getOwnPropertyDescriptors, kv = Object.getOwnPropertySymbols, $5 = Object.prototype.hasOwnProperty, y5 = Object.prototype.propertyIsEnumerable, xv = (e, o, r) => o in e ? m5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Fc = (e, o) => {
  for (var r in o || (o = {}))
    $5.call(o, r) && xv(e, r, o[r]);
  if (kv)
    for (var r of kv(o))
      y5.call(o, r) && xv(e, r, o[r]);
  return e;
}, V5 = (e, o) => _5(e, g5(o));
const og = window.Vue.defineComponent, Sr = window.Vue.resolveComponent, ma = window.Vue.openBlock, Av = window.Vue.createBlock, _a = window.Vue.mergeProps, Er = window.Vue.withCtx, ig = window.Vue.createElementBlock, b5 = window.Vue.Fragment, C5 = window.Vue.renderList, S5 = window.Vue.createTextVNode, E5 = window.Vue.toDisplayString, I5 = window.Vue.computed, Bv = window.Vue.toRef, yi = window.Vue.createVNode, Tv = window.Vue.toHandlers, k5 = window.Vue.renderSlot, x5 = window.Vue.normalizeClass, A5 = window.Vue.createElementVNode;
var sg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const B5 = og({
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
      return oe("feather-select-active");
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
        Fi(o, this.$refs.list.$el);
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
    FeatherList: nd,
    FeatherListItem: Hi
  }
});
function T5(e, o, r, s, a, u) {
  const c = Sr("FeatherListItem"), f = Sr("FeatherList");
  return ma(), Av(f, _a(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Er(() => [
      (ma(!0), ig(b5, null, C5(e.options, (w, m) => (ma(), Av(c, {
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
        default: Er(() => [
          S5(E5(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var D5 = /* @__PURE__ */ sg(B5, [["render", T5], ["__scopeId", "data-v-eae820da"]]);
const N5 = V5(Fc(Fc({}, Fa), Bo), {
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
}), L5 = {
  "update:modelValue": (e) => !0
}, M5 = og({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: L5,
  props: N5,
  setup(e, o) {
    To(e), Ua(e);
    const r = I5(() => oe("feather-select-input")), { validate: s } = xo(r, Bv(e, "modelValue"), e.label, e.schema, Bv(e, "error"));
    return Fc({
      inputId: r,
      validate: s
    }, Ao(o.attrs));
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
      return oe("feather-select-description");
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
    icon: () => Ya
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
      if (e.keyCode === X.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === X.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === X.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === X.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === X.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === X.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      xr(this.delayTimeout), this.delayTimeout = kr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Ra,
    InputSubText: ko,
    FeatherMenu: Qm,
    List: D5,
    FeatherIcon: G
  }
});
function O5(e, o, r, s, a, u) {
  const c = Sr("FeatherIcon"), f = Sr("InputWrapper"), w = Sr("List"), m = Sr("FeatherMenu"), _ = Sr("InputSubText");
  return ma(), ig("div", _a(e.inherittedAttrs, { class: "feather-select-container" }), [
    yi(m, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Er(($) => [
        yi(f, _a({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, Tv($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Er(() => [
            k5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Er(() => [
            yi(c, {
              class: x5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Er(() => [
            A5("input", _a(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Tv(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Er(() => [
        yi(w, {
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
    yi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var P5 = /* @__PURE__ */ sg(M5, [["render", O5], ["__scopeId", "data-v-ecb32d90"]]);
const R5 = window.Vue.openBlock, F5 = window.Vue.createElementBlock, ag = window.Vue.createElementVNode;
var U5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const W5 = {}, q5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, H5 = /* @__PURE__ */ ag("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), z5 = /* @__PURE__ */ ag("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Y5 = [
  H5,
  z5
];
function G5(e, o) {
  return R5(), F5("svg", q5, Y5);
}
var j5 = /* @__PURE__ */ U5(W5, [["render", G5]]);
const ga = window.Vue.openBlock, Uc = window.Vue.createElementBlock, lg = window.Vue.createElementVNode, Z5 = window.Vue.defineComponent, $r = window.Vue.ref, K5 = window.Vue.provide, Dv = window.Vue.computed, J5 = window.Vue.onUnmounted, Nv = window.Vue.toRef, X5 = window.Vue.resolveComponent, Q5 = window.Vue.Fragment, e7 = window.Vue.createBlock, t7 = window.Vue.Teleport, Lv = window.Vue.createVNode, n7 = window.Vue.Transition, r7 = window.Vue.withCtx, o7 = window.Vue.normalizeClass, i7 = window.Vue.normalizeStyle, s7 = window.Vue.toDisplayString, a7 = window.Vue.createCommentVNode, l7 = window.Vue.renderSlot, vc = window.Vue.nextTick;
var ug = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const u7 = {}, c7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, d7 = /* @__PURE__ */ lg("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), f7 = [
  d7
];
function h7(e, o) {
  return ga(), Uc("svg", c7, f7);
}
var p7 = /* @__PURE__ */ ug(u7, [["render", h7]]), Ye = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Ye || {}), Bn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Bn || {});
const w7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Ye.top), a >= o.height + s && c.push(Ye.bottom);
  const f = [];
  u >= o.width + s && f.push(Ye.right), e.left >= o.width + s && f.push(Ye.left);
  let w = [...f, ...c];
  return (r === Ye.top || r === Ye.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, v7 = (e, o, r, s, a = 28) => {
  if (e === Ye.left || e === Ye.right)
    return Bn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, m = c + o.width / 2, _ = r.width - a, $ = r.width / 2;
  return w >= $ && m >= $ && f.push(Bn.center), m >= _ && f.push(Bn.left), w >= _ && f.push(Bn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, m7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Ye.top
  },
  pointerAlignment: {
    type: String,
    default: () => Bn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, _7 = Z5({
  props: m7,
  setup(e) {
    const o = $r(!1), r = $r(!1), s = oe("feather-tooltip-trigger"), a = oe("feather-tooltip"), u = "data-feather-tooltip";
    K5("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      xr(c), o.value || (c = kr(M, e.enterDelay));
    }, w = () => {
      xr(c), c = kr(L, e.exitDelay);
    }, m = (me) => {
      me.keyCode === X.ESCAPE && (me.preventDefault(), L(!0));
    }, _ = Dv(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: m
    }, y = $r(document), T = Xm(y, () => L(!0));
    J5(() => L(!0));
    const B = () => document.getElementById(a), M = () => {
      r.value = !1, o.value = !0, vc(() => {
        const me = B();
        se(me), o.value = !1, vc(() => {
          r.value = !0, o.value = !0, T.value = !0;
        });
      });
    }, L = (me = !1) => {
      F.value = "", I.value = "", P.value = "", q.value = "", o.value = !1, me && (r.value = !1), T.value = !1;
    }, S = Nv(e, "placement"), N = Nv(e, "pointerAlignment"), A = 8, O = 24, I = $r(""), F = $r(""), P = $r(""), q = $r(""), ge = Dv(() => q.value ? "p-" + q.value : !1), se = (me) => {
      const be = document.querySelector(`[${u}=${s}]`);
      if (!be) {
        console.log("trigger not found");
        return;
      }
      vc(() => {
        const Se = be.getBoundingClientRect(), Ie = me.getBoundingClientRect(), ce = w7(Se, Ie, S.value, A), Ne = v7(ce, Se, Ie, N.value, O);
        P.value = Ne.toString(), q.value = ce.toString();
        let de = 0, Q = 0;
        if ((ce === Ye.left || ce === Ye.right) && (de = Se.top + Se.height / 2 - Ie.height / 2, ce === Ye.left && (Q = Se.left - Ie.width - A), ce === Ye.right && (Q = Se.right)), ce === Ye.top || ce === Ye.bottom) {
          de = Se.top - Ie.height - A, ce === Ye.bottom && (de = Se.bottom);
          const ke = Se.left + Se.width / 2;
          switch (Ne) {
            case Bn.center:
              Q = ke - Ie.width / 2;
              break;
            case Bn.left:
              Q = ke - O;
              break;
            case Bn.right:
              Q = ke - Ie.width + O;
              break;
          }
        }
        I.value = de.toString() + "px", F.value = Q.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: o,
      animate: r,
      alignmentClass: P,
      placementClass: ge,
      top: I,
      left: F,
      tooltipID: a
    };
  },
  components: {
    Pointer: p7
  }
}), g7 = ["id"];
function $7(e, o, r, s, a, u) {
  const c = X5("Pointer");
  return ga(), Uc(Q5, null, [
    (ga(), e7(t7, { to: "body" }, [
      Lv(n7, { css: e.animate }, {
        default: r7(() => [
          e.show ? (ga(), Uc("div", {
            key: 0,
            class: o7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: i7({ left: e.left, top: e.top })
          }, [
            lg("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, s7(e.title), 9, g7),
            Lv(c, { class: "tooltip-pointer" })
          ], 6)) : a7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    l7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var Mv = /* @__PURE__ */ ug(_7, [["render", $7], ["__scopeId", "data-v-3da6b22e"]]);
const y7 = window.Vue.defineComponent, mc = window.Vue.normalizeStyle, _c = window.Vue.createElementVNode, Vi = window.Vue.unref, Ov = window.Vue.toHandlers, Pv = window.Vue.mergeProps, Rv = window.Vue.withCtx, Fv = window.Vue.createVNode, V7 = window.Vue.renderList, b7 = window.Vue.Fragment, bi = window.Vue.openBlock, Ci = window.Vue.createElementBlock, Uv = window.Vue.normalizeClass, Wv = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const C7 = { class: "row" }, S7 = /* @__PURE__ */ y7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (bi(), Ci("div", C7, [
      _c("div", {
        class: "line-gray",
        style: mc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Fv(Vi(Mv), {
        title: Vi(wn)(e.alarm.firstEventTime)
      }, {
        default: Rv(({ attrs: f, on: w }) => [
          _c("div", Pv({ class: "circle" }, f, Ov(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (bi(!0), Ci(b7, null, V7(o.events, (f, w) => (bi(), Ci("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (bi(), Ci("div", {
          key: 0,
          class: Uv(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: mc({
            width: s(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Wv("", !0),
        Fv(Vi(Mv), {
          title: Vi(wn)(e.alarm.firstEventTime)
        }, {
          default: Rv(({ attrs: m, on: _ }) => [
            o.events[w + 1] ? (bi(), Ci("div", Pv({ key: 0 }, m, Ov(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Wv("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      _c("div", {
        class: Uv(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: mc({
          width: s(e.events[e.events.length - 1].createTime, Vi(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const E7 = /* @__PURE__ */ ue(S7, [["__scopeId", "data-v-3341d12d"]]), I7 = window.Vue.openBlock, k7 = window.Vue.createElementBlock, cg = window.Vue.createElementVNode;
var x7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const A7 = {}, B7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, T7 = /* @__PURE__ */ cg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), D7 = /* @__PURE__ */ cg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), N7 = [
  T7,
  D7
];
function L7(e, o) {
  return I7(), k7("svg", B7, N7);
}
var M7 = /* @__PURE__ */ x7(A7, [["render", L7]]);
const O7 = window.Vue.defineComponent, Wc = window.Vue.createElementVNode, P7 = window.Vue.renderList, qv = window.Vue.Fragment, gc = window.Vue.openBlock, $c = window.Vue.createElementBlock, R7 = window.Vue.normalizeClass, F7 = window.Vue.unref, Hv = window.Vue.toDisplayString, U7 = window.Vue.pushScopeId, W7 = window.Vue.popScopeId, q7 = (e) => (U7("data-v-2e087f7b"), e = e(), W7(), e), H7 = /* @__PURE__ */ q7(() => /* @__PURE__ */ Wc("strong", null, "Events:", -1)), z7 = /* @__PURE__ */ O7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (gc(), $c(qv, null, [
      H7,
      (gc(!0), $c(qv, null, P7(o.events, (a) => (gc(), $c("div", {
        class: "event-description",
        key: a.id
      }, [
        Wc("div", {
          class: R7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Wc("div", null, Hv(F7(wn)(a.createTime)) + " - " + Hv(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const Y7 = /* @__PURE__ */ ue(z7, [["__scopeId", "data-v-2e087f7b"]]), G7 = window.Vue.defineComponent, j7 = window.Vue.normalizeClass, bt = window.Vue.createElementVNode, ro = window.Vue.toDisplayString, ut = window.Vue.unref, oo = window.Vue.createVNode, dg = window.Vue.createTextVNode, Z7 = window.Vue.renderList, zv = window.Vue.Fragment, xn = window.Vue.openBlock, yr = window.Vue.createElementBlock, Yv = window.Vue.createBlock, la = window.Vue.createCommentVNode, K7 = window.Vue.normalizeStyle, J7 = window.Vue.pushScopeId, X7 = window.Vue.popScopeId, Q7 = (e) => (J7("data-v-01717d0d"), e = e(), X7(), e), e6 = { class: "section detail" }, t6 = { class: "id" }, n6 = {
  key: 0,
  class: "section"
}, r6 = /* @__PURE__ */ Q7(() => /* @__PURE__ */ bt("div", { class: "id" }, "Alarms", -1)), o6 = { class: "action-btns" }, i6 = { class: "zoom" }, s6 = /* @__PURE__ */ dg(" Zoom "), a6 = { class: "times" }, l6 = {
  key: 0,
  class: "timeline-container"
}, u6 = { class: "alarm-id" }, c6 = {
  key: 0,
  class: "panel"
}, zn = window.Vue.ref, d6 = window.Vue.watch, f6 = /* @__PURE__ */ G7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, I;
    const o = e, r = nn(), s = zn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = zn(a[0]), c = zn(o.width), f = zn(o.width), w = zn(new Date().getTime()), m = () => {
      var F, P;
      if (!o.situation.events) {
        const q = (P = (F = o.situation) == null ? void 0 : F.alarms) == null ? void 0 : P.map((ge) => ge.id);
        r.getEvents(o.situation.id, q);
      }
    };
    m();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = zn(o.situation.alarms), y = zn(
      ((I = ve.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), T = zn(_());
    d6(o, () => {
      var F, P;
      y.value = ((P = ve.exports.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : P.firstEventTime) || new Date().getTime(), m(), c.value = f.value, T.value = _(), $.value = o.situation.alarms, u.value = a[0];
    });
    const B = (F) => {
      if ((F == null ? void 0 : F.id) === 1 && ($.value = o.situation.alarms), (F == null ? void 0 : F.id) === 2) {
        const P = ve.exports.groupBy($.value, "severity"), q = [
          ...P.CRITICAL || [],
          ...P.MAJOR || [],
          ...P.MINOR || [],
          ...P.WARNING || [],
          ...P.NORMAL || [],
          ...P.CLEARED || [],
          ...P.INDETERMINATE || []
        ];
        $.value = q.filter((ge) => ge);
      }
      if ((F == null ? void 0 : F.id) === 3) {
        const P = ve.exports.reverse(
          ve.exports.sortBy(
            o.situation.alarms,
            (q) => Number(q.lastEventTime) - Number(q.firstEventTime)
          )
        );
        $.value = P;
      }
    }, M = () => {
      c.value += 100, T.value = _();
    }, L = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, N = (F) => {
      s.value = F;
    }, A = () => {
      s.value = 0;
    };
    return (F, P) => {
      var q, ge;
      return xn(), yr(zv, null, [
        bt("div", e6, [
          bt("div", {
            class: j7(["severity-line", [`${(ge = (q = o.situation) == null ? void 0 : q.severity) == null ? void 0 : ge.toLowerCase()}-bg dark`]])
          }, null, 2),
          bt("div", null, [
            bt("div", t6, "Situation " + ro(o.situation.id), 1),
            bt("div", null, " Duration: " + ro(ut(Oa)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (xn(), yr("div", n6, [
          r6,
          bt("div", o6, [
            oo(ut(P5), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                P[0] || (P[0] = (se) => u.value = se),
                B
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            bt("div", i6, [
              s6,
              bt("div", null, [
                oo(ut(G), {
                  icon: ut(j5),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                oo(ut(G), {
                  icon: ut(p_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                oo(ut(G), {
                  icon: ut(M7),
                  class: "zoom-icon",
                  onClick: L
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (xn(), yr("div", {
            key: 0,
            class: "alarms",
            style: K7({
              width: f.value + 50 + "px"
            })
          }, [
            bt("div", a6, [
              bt("div", null, ro(ut(wn)(y.value)), 1),
              bt("div", null, ro(ut(wn)(w.value)), 1)
            ]),
            e.situation.events ? (xn(), yr("div", l6, [
              (xn(!0), yr(zv, null, Z7($.value, (se) => (xn(), yr("div", {
                class: "timeline",
                key: se.id
              }, [
                bt("div", u6, [
                  dg(ro(se.nodeLabel) + " - " + ro(se.id) + " ", 1),
                  s.value === se.id ? (xn(), Yv(ut(G), {
                    key: 0,
                    icon: ut(Ya),
                    class: "zoom-icon expand",
                    onClick: A
                  }, null, 8, ["icon"])) : (xn(), Yv(ut(G), {
                    key: 1,
                    icon: ut(Hm),
                    class: "zoom-icon expand",
                    onClick: () => N(se.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                oo(E7, {
                  alarm: se,
                  proportion: T.value,
                  "min-start": y.value,
                  events: o.situation.events[se.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === se.id ? (xn(), yr("div", c6, [
                  oo(Y7, {
                    events: o.situation.events[se.id]
                  }, null, 8, ["events"])
                ])) : la("", !0)
              ]))), 128))
            ])) : la("", !0)
          ], 4)) : la("", !0)
        ])) : la("", !0)
      ], 64);
    };
  }
});
const h6 = /* @__PURE__ */ ue(f6, [["__scopeId", "data-v-01717d0d"]]), p6 = window.Vue.openBlock, w6 = window.Vue.createElementBlock, v6 = window.Vue.createElementVNode;
var m6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _6 = {}, g6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $6 = /* @__PURE__ */ v6("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), y6 = [
  $6
];
function V6(e, o) {
  return p6(), w6("svg", g6, y6);
}
var _o = /* @__PURE__ */ m6(_6, [["render", V6]]);
const fg = window.Vue.defineComponent, yc = window.Vue.ref, b6 = window.Vue.toRef, Vc = window.Vue.inject, Gv = window.Vue.watch, C6 = window.Vue.nextTick, jv = window.Vue.openBlock, Zv = window.Vue.createElementBlock, bc = window.Vue.createElementVNode, S6 = window.Vue.normalizeClass, Kv = window.Vue.renderSlot, Jv = window.Vue.createCommentVNode, Cc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var E6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const I6 = {
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
}, k6 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, x6 = fg({
  emits: k6,
  props: I6,
  setup(e, o) {
    const r = yc(), s = yc(!1), a = yc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = b6(e, "modelValue"), f = Vc("queueSnackbar", !1), w = Vc("unqueueSnackbar", !1), m = Vc("nextSnackbar", () => {
    }), _ = (M, L) => {
      let S, N, A = L;
      const O = () => {
        !S || (xr(S), S = 0, A -= Date.now() - N);
      }, I = () => {
        S || (N = Date.now(), S = kr(M, A));
      };
      return I(), { pause: O, resume: I };
    }, $ = () => {
      s.value = !1, o.emit("closed"), m && m();
    }, y = (M) => {
      M.keyCode === X.ESCAPE && (a.value = !1);
    }, T = () => {
      r.value.pause();
    }, B = () => {
      a.value && r.value.resume();
    };
    return Gv(c, (M) => {
      M ? C6(() => {
        f === !1 ? a.value = M : f(u, a);
      }) : w === !1 ? a.value = M : w(u);
    }, { immediate: !0 }), Gv(a, (M) => {
      M ? (s.value = !0, r.value = _(() => {
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
}), A6 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, B6 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, T6 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, D6 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function N6(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (jv(), Zv("div", A6, [
    bc("div", {
      class: S6(["feather-snackbar", {
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
      bc("div", B6, [
        e.contentShow ? (jv(), Zv("div", T6, [
          Kv(e.$slots, "default", {}, void 0, !0)
        ])) : Jv("", !0)
      ]),
      bc("div", D6, [
        Kv(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Jv("", !0);
}
var el = /* @__PURE__ */ E6(x6, [["render", N6], ["__scopeId", "data-v-5cf64a62"]]);
const L6 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
fg({
  props: L6,
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
    return Cc("queueSnackbar", s), Cc("unqueueSnackbar", a), Cc("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const M6 = window.Vue.defineComponent, De = window.Vue.unref, ct = window.Vue.createVNode, Ui = window.Vue.createElementVNode, Mt = window.Vue.withCtx, io = window.Vue.openBlock, Xv = window.Vue.createBlock, O6 = window.Vue.createCommentVNode, tl = window.Vue.createTextVNode, ua = window.Vue.createElementBlock, Qv = window.Vue.toDisplayString, P6 = window.Vue.pushScopeId, R6 = window.Vue.popScopeId, vd = (e) => (P6("data-v-1f2913d3"), e = e(), R6(), e), F6 = { id: "cont" }, U6 = { class: "btns-navigation" }, W6 = /* @__PURE__ */ vd(() => /* @__PURE__ */ Ui("span", null, "Situation List", -1)), q6 = /* @__PURE__ */ vd(() => /* @__PURE__ */ Ui("span", null, "Show Previous Situation ", -1)), H6 = /* @__PURE__ */ vd(() => /* @__PURE__ */ Ui("span", null, "Show Next Situation", -1)), z6 = { key: 1 }, Y6 = {
  key: 0,
  class: "detail"
}, G6 = /* @__PURE__ */ tl("Details"), j6 = /* @__PURE__ */ tl("Metrics"), Z6 = {
  key: 1,
  class: "noSituation"
}, K6 = /* @__PURE__ */ tl("dismiss"), Vr = window.Vue.ref, em = window.Vue.watch, J6 = window.Vue.onMounted, X6 = window.VueRouter.useRoute, Q6 = /* @__PURE__ */ M6({
  __name: "SituationDetail",
  setup(e) {
    const o = tr(), r = X6(), s = parseInt(r.params.id), a = Vr(s), u = nn(), c = Ja(), f = Vr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Vr(), m = Vr(), _ = Vr(!0), $ = Vr(
      u.filteredSituations.findIndex((L) => L === a.value)
    ), y = Vr(!1);
    em(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), J6(() => {
      var S;
      const L = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      m.value = L - 90;
    });
    const T = () => {
      o.push({
        name: "situations"
      });
    }, B = (L) => {
      const S = $.value, N = u.filteredSituations[S + L];
      o.push({
        name: "situationDetail",
        params: {
          id: N
        }
      });
    };
    em(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((L) => L == a.value);
    }), c.$subscribe((L, S) => {
      y.value = S.showError;
    });
    const M = (L) => {
      f.value = L || 0;
    };
    return (L, S) => (io(), ua("div", F6, [
      Ui("div", U6, [
        ct(De(he), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: Mt(() => [
            ct(De(G), {
              icon: De(_o),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            W6
          ]),
          _: 1
        }),
        Ui("div", null, [
          ct(De(he), {
            disabled: !De(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => B(-1))
          }, {
            default: Mt(() => [
              ct(De(G), {
                icon: De(_o),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              q6
            ]),
            _: 1
          }, 8, ["disabled"]),
          ct(De(he), {
            disabled: !De(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => B(1))
          }, {
            default: Mt(() => [
              H6,
              ct(De(G), {
                icon: De(_o),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (io(), Xv(De(id), {
        key: 0,
        class: "spinner"
      })) : (io(), ua("div", z6, [
        w.value ? (io(), ua("div", Y6, [
          ct(De(nO), { "onUpdate:modelValue": M }, {
            tabs: Mt(() => [
              ct(De(Bw), null, {
                default: Mt(() => [
                  G6
                ]),
                _: 1
              }),
              ct(De(Bw), null, {
                default: Mt(() => [
                  j6
                ]),
                _: 1
              })
            ]),
            default: Mt(() => [
              ct(De(Tw), { class: "panel" }, {
                default: Mt(() => [
                  ct(v5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              ct(De(Tw), { class: "panel" }, {
                default: Mt(() => [
                  m.value && f.value == 1 ? (io(), Xv(h6, {
                    key: 0,
                    situation: w.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : O6("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (io(), ua("div", Z6, " Error. The situation " + Qv(De(s)) + " does not exist. ", 1))
      ])),
      ct(De(el), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (N) => y.value = N),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Mt(() => [
          ct(De(he), {
            onClick: S[3] || (S[3] = (N) => y.value = !1),
            text: ""
          }, {
            default: Mt(() => [
              K6
            ]),
            _: 1
          })
        ]),
        default: Mt(() => [
          tl(Qv(De(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const eF = /* @__PURE__ */ ue(Q6, [["__scopeId", "data-v-1f2913d3"]]), tF = window.Vue.defineComponent, ze = window.Vue.unref, Ot = window.Vue.createVNode, ot = window.Vue.createElementVNode, so = window.Vue.withCtx, ao = window.Vue.openBlock, Si = window.Vue.createElementBlock, nF = window.Vue.createCommentVNode, rF = window.Vue.toDisplayString, md = window.Vue.createTextVNode, oF = window.Vue.normalizeClass, iF = window.Vue.renderList, sF = window.Vue.Fragment, aF = window.Vue.createBlock, lF = window.Vue.pushScopeId, uF = window.Vue.popScopeId, Yi = (e) => (lF("data-v-1a57a9f3"), e = e(), uF(), e), cF = { class: "container" }, dF = /* @__PURE__ */ Yi(() => /* @__PURE__ */ ot("span", null, "Situation List", -1)), fF = /* @__PURE__ */ Yi(() => /* @__PURE__ */ ot("h2", null, "New Situation", -1)), hF = { class: "form" }, pF = { class: "fields" }, wF = {
  key: 0,
  class: "errorList"
}, vF = { class: "footer" }, mF = /* @__PURE__ */ Yi(() => /* @__PURE__ */ ot("span", null, "Clear", -1)), _F = /* @__PURE__ */ Yi(() => /* @__PURE__ */ ot("span", null, "Add Situation", -1)), gF = { class: "alarm-column" }, $F = { class: "header-alarms" }, yF = /* @__PURE__ */ Yi(() => /* @__PURE__ */ ot("h3", null, "Add Unassociated Alarms", -1)), VF = /* @__PURE__ */ md(" Total Alarms Added: "), bF = { class: "total" }, CF = { class: "list" }, SF = { class: "filters" }, EF = {
  key: 0,
  class: "alarms"
}, IF = /* @__PURE__ */ md(" Error on creating new situation :( "), kF = /* @__PURE__ */ md("dismiss"), Yn = window.Vue.ref, xF = window.Vue.watch, AF = /* @__PURE__ */ tF({
  __name: "AddSituation",
  setup(e) {
    const o = tr(), r = nn(), s = Yn(), a = Yn(""), u = Yn(), c = Yn(""), f = Yn([]), w = Yn(!1), m = Yn(), _ = Yn(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), xF(
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
      w.value = !1, ve.exports.includes(f.value, S) ? ve.exports.remove(f.value, (N) => N === S) : f.value.push(S);
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
        await NM(S) ? o.push({
          name: "situations"
        }) : m.value = !0;
      }
    }, M = () => {
      s.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, L = (S) => {
      _.value = S;
    };
    return (S, N) => (ao(), Si("div", cF, [
      Ot(ze(he), {
        primary: "",
        onClick: N[0] || (N[0] = () => $()),
        class: "back-btn"
      }, {
        default: so(() => [
          Ot(ze(G), {
            icon: ze(_o),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          dF
        ]),
        _: 1
      }),
      fF,
      ot("div", hF, [
        ot("div", pF, [
          Ot(ze(Pc), {
            modelValue: s.value,
            "onUpdate:modelValue": N[1] || (N[1] = (A) => s.value = A),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Ot(ze(Pc), {
            modelValue: u.value,
            "onUpdate:modelValue": N[2] || (N[2] = (A) => u.value = A),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (ao(), Si("div", wF, " You must add at least 2 alarms. ")) : nF("", !0),
          ot("div", vF, [
            Ot(ze(he), {
              class: "btn",
              onClick: M
            }, {
              default: so(() => [
                Ot(ze(G), {
                  icon: ze(Eo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                mF
              ]),
              _: 1
            }),
            Ot(ze(he), {
              class: "btn-add",
              onClick: B
            }, {
              default: so(() => [
                Ot(ze(G), {
                  icon: ze(Za),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                _F
              ]),
              _: 1
            })
          ])
        ]),
        ot("div", gF, [
          ot("div", $F, [
            yF,
            ot("div", null, [
              ot("div", {
                class: oF(["totalAlarms", { errorList: w.value }])
              }, [
                VF,
                ot("span", bF, rF(ze(f).length), 1)
              ], 2)
            ])
          ]),
          ot("div", CF, [
            ot("div", SF, [
              Ot(No, {
                list: ze(r).unassignedAlarms,
                onFilteredList: L,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (ao(), Si("div", EF, [
              (ao(!0), Si(sF, null, iF(_.value, (A) => (ao(), Si("div", {
                key: A.id,
                class: "alarm-card"
              }, [
                Ot(wd, {
                  selected: ze(ve.exports.includes)(ze(f), A.id),
                  alarm: A,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (ao(), aF(Lo, { key: 1 }))
          ])
        ])
      ]),
      Ot(ze(el), {
        modelValue: m.value,
        "onUpdate:modelValue": N[4] || (N[4] = (A) => m.value = A),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: so(() => [
          Ot(ze(he), {
            onClick: N[3] || (N[3] = (A) => m.value = !1),
            text: ""
          }, {
            default: so(() => [
              kF
            ]),
            _: 1
          })
        ]),
        default: so(() => [
          IF
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const BF = /* @__PURE__ */ ue(AF, [["__scopeId", "data-v-1a57a9f3"]]), TF = window.Vue.defineComponent, DF = window.Vue.createElementVNode, NF = window.Vue.createTextVNode, LF = window.Vue.unref, MF = window.Vue.withCtx, OF = window.Vue.createVNode, PF = window.Vue.Fragment, RF = window.Vue.openBlock, FF = window.Vue.createElementBlock, UF = window.Vue.pushScopeId, WF = window.Vue.popScopeId, qF = (e) => (UF("data-v-bcb7dcc6"), e = e(), WF(), e), HF = /* @__PURE__ */ qF(() => /* @__PURE__ */ DF("div", { class: "main" }, "Something bad is happening...", -1)), zF = /* @__PURE__ */ NF(" Reload "), YF = /* @__PURE__ */ TF({
  __name: "ErrorPage",
  setup(e) {
    const o = tr(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (RF(), FF(PF, null, [
      HF,
      OF(LF(he), {
        primary: "",
        onClick: r
      }, {
        default: MF(() => [
          zF
        ]),
        _: 1
      })
    ], 64));
  }
});
const GF = /* @__PURE__ */ ue(YF, [["__scopeId", "data-v-bcb7dcc6"]]), jF = window.Vue.defineComponent, rt = window.Vue.unref, Jt = window.Vue.createVNode, Zn = window.Vue.createElementVNode, Ei = window.Vue.withCtx, br = window.Vue.openBlock, tm = window.Vue.createBlock, ZF = window.Vue.renderList, KF = window.Vue.Fragment, Ii = window.Vue.createElementBlock, JF = window.Vue.toDisplayString, hg = window.Vue.createTextVNode, XF = window.Vue.pushScopeId, QF = window.Vue.popScopeId, _d = (e) => (XF("data-v-6078e4ad"), e = e(), QF(), e), e9 = { class: "container" }, t9 = { class: "nav-btns" }, n9 = /* @__PURE__ */ _d(() => /* @__PURE__ */ Zn("span", null, "Situation List", -1)), r9 = /* @__PURE__ */ _d(() => /* @__PURE__ */ Zn("h2", null, "List Unassociated Alarms", -1)), o9 = { class: "content" }, i9 = { class: "filters" }, s9 = { class: "list" }, a9 = { class: "action-btns" }, l9 = /* @__PURE__ */ _d(() => /* @__PURE__ */ Zn("span", null, "Move", -1)), u9 = { key: 1 }, c9 = {
  key: 0,
  class: "alarms"
}, d9 = /* @__PURE__ */ hg("dismiss"), Gn = window.Vue.ref, f9 = window.Vue.watch, h9 = window.Vue.markRaw, p9 = /* @__PURE__ */ jF({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = h9({
      ArrowBack: _o,
      ExitToApp: Rc
    }), r = tr(), s = nn();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Gn([]), u = Gn([]), c = Gn(!1), f = Gn(!1), w = Gn(""), m = Gn(!1), _ = Gn(!1), $ = Gn(!0);
    f9(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (N) => {
      ve.exports.includes(u.value, N) ? ve.exports.remove(u.value, (A) => A === N) : u.value.push(N);
    }, T = () => {
      c.value ? u.value = a.value.map((N) => N.id) : u.value = [];
    }, B = async (N) => {
      await V_(N, u.value) ? s.getUnassignedAlarms() : (m.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, M = () => {
      r.push({
        name: "situations"
      });
    }, L = () => {
      u.value.length ? f.value = !0 : (m.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (N) => {
      a.value = N;
    };
    return (N, A) => (br(), Ii("div", e9, [
      Zn("div", t9, [
        Jt(rt(he), {
          primary: "",
          onClick: A[0] || (A[0] = () => M())
        }, {
          default: Ei(() => [
            Jt(rt(G), {
              icon: rt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            n9
          ]),
          _: 1
        }),
        Jt(__)
      ]),
      r9,
      Zn("div", o9, [
        Zn("div", i9, [
          Jt(No, {
            list: rt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Zn("div", s9, [
          Zn("div", a9, [
            Jt(rt(zi), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                A[1] || (A[1] = (O) => c.value = O),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Jt(rt(he), { onClick: L }, {
              default: Ei(() => [
                Jt(rt(G), {
                  icon: rt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                l9
              ]),
              _: 1
            })
          ]),
          $.value ? (br(), tm(rt(id), {
            key: 0,
            class: "spinner"
          })) : (br(), Ii("div", u9, [
            rt(a).length ? (br(), Ii("div", c9, [
              (br(!0), Ii(KF, null, ZF(rt(a), (O) => (br(), Ii("div", {
                key: O.id,
                class: "card"
              }, [
                Jt(wd, {
                  selected: rt(ve.exports.includes)(rt(u), O.id),
                  alarm: O,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (br(), tm(Lo, { key: 1 }))
          ]))
        ])
      ]),
      Jt(ng, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: A[2] || (A[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      Jt(rt(el), {
        modelValue: m.value,
        "onUpdate:modelValue": A[4] || (A[4] = (O) => m.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: Ei(() => [
          Jt(rt(he), {
            onClick: A[3] || (A[3] = (O) => m.value = !1),
            text: ""
          }, {
            default: Ei(() => [
              d9
            ]),
            _: 1
          })
        ]),
        default: Ei(() => [
          hg(JF(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const w9 = /* @__PURE__ */ ue(p9, [["__scopeId", "data-v-6078e4ad"]]), v9 = window.Vue.defineComponent, Sc = window.Vue.unref, m9 = window.Vue.createVNode, _9 = window.Vue.createElementVNode, g9 = window.Vue.withCtx, $9 = window.Vue.openBlock, y9 = window.Vue.createBlock, V9 = window.Vue.pushScopeId, b9 = window.Vue.popScopeId, C9 = (e) => (V9("data-v-17251e76"), e = e(), b9(), e), S9 = /* @__PURE__ */ C9(() => /* @__PURE__ */ _9("span", null, "Situation List", -1)), E9 = window.Vue.markRaw, I9 = /* @__PURE__ */ v9({
  __name: "SituationListBtn",
  setup(e) {
    const o = tr(), r = E9({
      ArrowBack: _o
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => ($9(), y9(Sc(he), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: g9(() => [
        m9(Sc(G), {
          icon: Sc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        S9
      ]),
      _: 1
    }));
  }
});
const k9 = /* @__PURE__ */ ue(I9, [["__scopeId", "data-v-17251e76"]]);
var x9 = Object.defineProperty, A9 = Object.defineProperties, B9 = Object.getOwnPropertyDescriptors, nm = Object.getOwnPropertySymbols, T9 = Object.prototype.hasOwnProperty, D9 = Object.prototype.propertyIsEnumerable, rm = (e, o, r) => o in e ? x9(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, wo = (e, o) => {
  for (var r in o || (o = {}))
    T9.call(o, r) && rm(e, r, o[r]);
  if (nm)
    for (var r of nm(o))
      D9.call(o, r) && rm(e, r, o[r]);
  return e;
}, N9 = (e, o) => A9(e, B9(o));
const L9 = window.Vue.defineComponent, om = window.Vue.toRef, M9 = window.Vue.computed, O9 = window.Vue.ref, im = window.Vue.resolveComponent, sm = window.Vue.openBlock, am = window.Vue.createElementBlock, lm = window.Vue.mergeProps, um = window.Vue.createVNode, P9 = window.Vue.normalizeClass, ca = window.Vue.withCtx, cm = window.Vue.renderSlot, R9 = window.Vue.createElementVNode, F9 = window.Vue.toHandlers, U9 = window.Vue.toDisplayString, W9 = window.Vue.createCommentVNode, q9 = wo(wo({
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
}, Fa), Bo), H9 = {
  "update:modelValue": (e) => !0
};
var z9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Y9 = L9({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: H9,
  props: q9,
  setup(e, o) {
    To(e), Ua(e);
    const r = om(e, "id"), s = M9(() => r.value ? r.value : oe("feather-input-label")), a = O9(), { validate: u } = xo(s, a, e.label, e.schema, om(e, "error"));
    return wo({
      inputId: s,
      internalValue: a,
      validate: u
    }, Ao(o.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return oe("feather-input-description");
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
      const e = wo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), N9(wo(wo({}, e), this.listeners), {
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
    InputSubText: ko,
    InputWrapper: Ra
  }
}), G9 = ["maxlength"], j9 = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function Z9(e, o, r, s, a, u) {
  const c = im("InputWrapper"), f = im("InputSubText");
  return sm(), am("div", lm(e.inherittedAttrs, { class: "feather-input-container" }), [
    um(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: P9(["feather-input-content", e.contentCls])
    }, {
      pre: ca(() => [
        cm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: ca(() => [
        cm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: ca(() => [
        R9("input", lm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, F9(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, G9)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    um(f, { id: e.descriptionId }, {
      right: ca(() => [
        e.maxlength ? (sm(), am("div", j9, U9(e.charCount), 1)) : W9("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var ki = /* @__PURE__ */ z9(Y9, [["render", Z9], ["__scopeId", "data-v-bf37b0d6"]]);
const K9 = window.Vue.openBlock, J9 = window.Vue.createElementBlock, gd = window.Vue.createElementVNode;
var X9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Q9 = {}, eU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tU = /* @__PURE__ */ gd("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), nU = /* @__PURE__ */ gd("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), rU = /* @__PURE__ */ gd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), oU = [
  tU,
  nU,
  rU
];
function iU(e, o) {
  return K9(), J9("svg", eU, oU);
}
var sU = /* @__PURE__ */ X9(Q9, [["render", iU]]);
const aU = window.Vue.openBlock, lU = window.Vue.createElementBlock, pg = window.Vue.createElementVNode;
var uU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cU = {}, dU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fU = /* @__PURE__ */ pg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), hU = /* @__PURE__ */ pg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), pU = [
  fU,
  hU
];
function wU(e, o) {
  return aU(), lU("svg", dU, pU);
}
var vU = /* @__PURE__ */ uU(cU, [["render", wU]]);
const mU = window.Vue.defineComponent, Je = window.Vue.createVNode, ie = window.Vue.createElementVNode, _e = window.Vue.unref, pt = window.Vue.createTextVNode, cn = window.Vue.withCtx, lo = window.Vue.toDisplayString, dm = window.Vue.Fragment, uo = window.Vue.openBlock, da = window.Vue.createElementBlock, xi = window.Vue.createCommentVNode, fm = window.Vue.createBlock, _U = window.Vue.pushScopeId, gU = window.Vue.popScopeId, rn = (e) => (_U("data-v-4f394ca3"), e = e(), gU(), e), $U = { class: "container" }, yU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), VU = { class: "section" }, bU = { class: "title" }, CU = /* @__PURE__ */ pt(" Choose the correlation engine that ALEC will use (see "), SU = ["href"], EU = /* @__PURE__ */ pt(" for more information): "), IU = /* @__PURE__ */ pt("Clustering"), kU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("div", { class: "hellinger" }, [
  /* @__PURE__ */ ie("strong", null, "Hellinger distance")
], -1)), xU = /* @__PURE__ */ pt(" LLM Based "), AU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), BU = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, TU = { class: "title-row" }, DU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("div", { class: "title" }, "Correlation variables", -1)), NU = ["aria-expanded"], LU = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, MU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("strong", null, "Alpha (\u03B1)", -1)), OU = /* @__PURE__ */ pt(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), PU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("strong", null, "Beta (\u03B2)", -1)), RU = /* @__PURE__ */ pt(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), FU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("code", null, "[0, 1]", -1)), UU = /* @__PURE__ */ pt(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), WU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("strong", null, "Epsilon (\u03B5)", -1)), qU = /* @__PURE__ */ pt(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), HU = { "data-test": "help-hellinger-w" }, zU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("strong", null, "Hellinger w", -1)), YU = /* @__PURE__ */ pt(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), GU = { "data-test": "help-hellinger-bias" }, jU = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("strong", null, "Hellinger bias", -1)), ZU = /* @__PURE__ */ pt(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), KU = { class: "variables" }, JU = { class: "action-row" }, XU = /* @__PURE__ */ pt(" Close All Open Situations "), QU = /* @__PURE__ */ pt(" Re-Evaluate All Open Alarms "), eW = /* @__PURE__ */ rn(() => /* @__PURE__ */ ie("span", null, "Save Changes", -1)), tW = /* @__PURE__ */ pt("dismiss"), hm = window.Vue.computed, nW = window.Vue.markRaw, Xt = window.Vue.ref, rW = /* @__PURE__ */ mU({
  __name: "AccountSettings",
  setup(e) {
    var F, P, q, ge, se, me, be, Se, Ie, ce, Ne;
    const o = nW({
      MarkComplete: xa,
      Help: sU,
      Restore: vU
    }), r = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, s = bo(), a = Xt(((F = s.engineInfo) == null ? void 0 : F.engineName) || We.ENGINE_DBSCAN), u = Xt(
      s.engineInfo ? s.engineInfo.distanceMeasureName === We.HELLINGER_OPTION : !0
    ), c = Xt((q = (P = s.engineInfo) == null ? void 0 : P.alpha) != null ? q : r.alpha), f = Xt((se = (ge = s.engineInfo) == null ? void 0 : ge.beta) != null ? se : r.beta), w = Xt((be = (me = s.engineInfo) == null ? void 0 : me.epsilon) != null ? be : r.epsilon), m = Xt(
      (Ie = (Se = s.engineInfo) == null ? void 0 : Se.hellingerW) != null ? Ie : r.hellingerW
    ), _ = Xt(
      (Ne = (ce = s.engineInfo) == null ? void 0 : ce.hellingerBias) != null ? Ne : r.hellingerBias
    ), $ = hm(() => a.value === We.ENGINE_DBSCAN), y = hm(() => $.value && u.value), T = Xt(!1), B = Xt(!1), M = Xt(!1), L = Xt(""), S = () => {
      c.value = r.alpha, f.value = r.beta, w.value = r.epsilon, m.value = r.hellingerW, _.value = r.hellingerBias;
    }, N = (de, Q) => {
      L.value = de, M.value = Q, B.value = !0;
    }, A = async () => {
      const de = {
        alpha: Number(c.value),
        beta: Number(f.value),
        epsilon: Number(w.value)
      };
      u.value && (de.hellingerW = Number(m.value), de.hellingerBias = Number(_.value)), await s.setEngineInfo(
        a.value,
        u.value,
        de
      ) ? (s.getEngineInfo(), N("The settings were saved!", !1)) : N("Error on saving the settings", !0);
    }, O = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const de = await LM();
      N(
        de ? "All open situations were closed." : "Failed to close situations.",
        !de
      );
    }, I = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const de = await MM();
      N(
        de ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !de
      );
    };
    return (de, Q) => (uo(), da(dm, null, [
      Je(k9),
      ie("div", $U, [
        yU,
        ie("div", VU, [
          ie("div", bU, [
            CU,
            ie("a", {
              target: "_blank",
              href: _e(We).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, SU),
            EU
          ]),
          Je(_e(h_), {
            vertical: "",
            modelValue: a.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (ke) => a.value = ke),
            label: "",
            hideLabel: ""
          }, {
            default: cn(() => [
              Je(_e(Mc), {
                class: "radio-item",
                value: _e(We).ENGINE_DBSCAN
              }, {
                default: cn(() => [
                  IU
                ]),
                _: 1
              }, 8, ["value"]),
              Je(_e(zi), {
                modelValue: u.value,
                "onUpdate:modelValue": Q[0] || (Q[0] = (ke) => u.value = ke),
                disabled: !_e($),
                class: "checkbox"
              }, {
                default: cn(() => [
                  kU
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Je(_e(Mc), {
                class: "radio-item",
                value: _e(We).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: cn(() => [
                  xU
                ]),
                _: 1
              }, 8, ["value"]),
              AU
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _e($) ? (uo(), da("div", BU, [
          ie("div", TU, [
            DU,
            ie("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": T.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: Q[2] || (Q[2] = (ke) => T.value = !T.value)
            }, [
              Je(_e(G), {
                icon: _e(o).Help
              }, null, 8, ["icon"])
            ], 8, NU),
            ie("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: S
            }, [
              Je(_e(G), {
                icon: _e(o).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          T.value ? (uo(), da("div", LU, [
            ie("ul", null, [
              ie("li", null, [
                MU,
                OU,
                ie("em", null, "Default: " + lo(r.alpha), 1)
              ]),
              ie("li", null, [
                PU,
                RU,
                FU,
                UU,
                ie("em", null, "Default: " + lo(r.beta), 1)
              ]),
              ie("li", null, [
                WU,
                qU,
                ie("em", null, "Default: " + lo(r.epsilon), 1)
              ]),
              _e(y) ? (uo(), da(dm, { key: 0 }, [
                ie("li", HU, [
                  zU,
                  YU,
                  ie("em", null, "Default: " + lo(r.hellingerW), 1)
                ]),
                ie("li", GU, [
                  jU,
                  ZU,
                  ie("em", null, "Default: " + lo(r.hellingerBias), 1)
                ])
              ], 64)) : xi("", !0)
            ])
          ])) : xi("", !0),
          ie("div", KU, [
            Je(_e(ki), {
              modelValue: c.value,
              "onUpdate:modelValue": Q[3] || (Q[3] = (ke) => c.value = ke),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Je(_e(ki), {
              modelValue: f.value,
              "onUpdate:modelValue": Q[4] || (Q[4] = (ke) => f.value = ke),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Je(_e(ki), {
              modelValue: w.value,
              "onUpdate:modelValue": Q[5] || (Q[5] = (ke) => w.value = ke),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            _e(y) ? (uo(), fm(_e(ki), {
              key: 0,
              modelValue: m.value,
              "onUpdate:modelValue": Q[6] || (Q[6] = (ke) => m.value = ke),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : xi("", !0),
            _e(y) ? (uo(), fm(_e(ki), {
              key: 1,
              modelValue: _.value,
              "onUpdate:modelValue": Q[7] || (Q[7] = (ke) => _.value = ke),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : xi("", !0)
          ])
        ])) : xi("", !0),
        ie("div", JU, [
          Je(_e(he), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: O
          }, {
            default: cn(() => [
              XU
            ]),
            _: 1
          }),
          Je(_e(he), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: I
          }, {
            default: cn(() => [
              QU
            ]),
            _: 1
          }),
          Je(_e(he), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: A
          }, {
            default: cn(() => [
              Je(_e(G), {
                icon: _e(o).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              eW
            ]),
            _: 1
          })
        ]),
        Je(_e(el), {
          modelValue: B.value,
          "onUpdate:modelValue": Q[9] || (Q[9] = (ke) => B.value = ke),
          right: "",
          error: M.value,
          timeout: 6e3
        }, {
          button: cn(() => [
            Je(_e(he), {
              onClick: Q[8] || (Q[8] = (ke) => B.value = !1),
              text: ""
            }, {
              default: cn(() => [
                tW
              ]),
              _: 1
            })
          ]),
          default: cn(() => [
            pt(lo(L.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const oW = /* @__PURE__ */ ue(rW, [["__scopeId", "data-v-4f394ca3"]]), iW = window.VueRouter.createRouter, sW = window.VueRouter.createWebHistory, aW = async () => {
  const e = bo();
  e.userId || await e.getUserRole();
}, wg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || vg;
      await bo().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => aW(),
    component: k3
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: eF
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: BF
  },
  {
    path: "/error",
    name: "error",
    component: GF
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: w9
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await bo().getEngineInfo();
    },
    component: oW
  }
], Ec = window.VRouter;
if (Ec) {
  const e = "Plugin-alecUiExtension", o = Ec.hasRoute(e) ? e : "Plugin";
  for (const r of wg) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Ec.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const vg = iW({
  history: sW(),
  routes: wg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = vS;
