const se = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, OC = {}, PC = window.Vue.resolveComponent, RC = window.Vue.createVNode, FC = window.Vue.openBlock, UC = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const WC = { class: "main" };
function qC(e, o) {
  const r = PC("router-view");
  return FC(), UC("div", WC, [
    RC(r)
  ]);
}
const HC = /* @__PURE__ */ se(OC, [["render", qC], ["__scopeId", "data-v-5d32d140"]]), zC = window.Vue.defineComponent, YC = window.Vue.openBlock, GC = window.Vue.createBlock, jC = /* @__PURE__ */ zC({
  __name: "App",
  setup(e) {
    return (o, r) => (YC(), GC(HC));
  }
});
var Zo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ZC(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jv = { exports: {} }, Tc = { exports: {} }, Zv = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, KC = Zv, Bc = Object.prototype.toString, Dc = function(e) {
  return function(o) {
    var r = Bc.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Er(e) {
  return e = e.toLowerCase(), function(r) {
    return Dc(r) === e;
  };
}
function Lc(e) {
  return Array.isArray(e);
}
function fa(e) {
  return typeof e > "u";
}
function JC(e) {
  return e !== null && !fa(e) && e.constructor !== null && !fa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Kv = Er("ArrayBuffer");
function XC(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && Kv(e.buffer), o;
}
function QC(e) {
  return typeof e == "string";
}
function eS(e) {
  return typeof e == "number";
}
function Jv(e) {
  return e !== null && typeof e == "object";
}
function oa(e) {
  if (Dc(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var tS = Er("Date"), nS = Er("File"), rS = Er("Blob"), oS = Er("FileList");
function Mc(e) {
  return Bc.call(e) === "[object Function]";
}
function iS(e) {
  return Jv(e) && Mc(e.pipe);
}
function sS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Bc.call(e) === o || Mc(e.toString) && e.toString() === o);
}
var aS = Er("URLSearchParams");
function lS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function uS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Nc(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Lc(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function wc() {
  var e = {};
  function o(a, u) {
    oa(e[u]) && oa(a) ? e[u] = wc(e[u], a) : oa(a) ? e[u] = wc({}, a) : Lc(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    Nc(arguments[r], o);
  return e;
}
function cS(e, o, r) {
  return Nc(o, function(a, u) {
    r && typeof a == "function" ? e[u] = KC(a, r) : e[u] = a;
  }), e;
}
function dS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function fS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function hS(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function pS(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function wS(e) {
  if (!e)
    return null;
  var o = e.length;
  if (fa(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var vS = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), qe = {
  isArray: Lc,
  isArrayBuffer: Kv,
  isBuffer: JC,
  isFormData: sS,
  isArrayBufferView: XC,
  isString: QC,
  isNumber: eS,
  isObject: Jv,
  isPlainObject: oa,
  isUndefined: fa,
  isDate: tS,
  isFile: nS,
  isBlob: rS,
  isFunction: Mc,
  isStream: iS,
  isURLSearchParams: aS,
  isStandardBrowserEnv: uS,
  forEach: Nc,
  merge: wc,
  extend: cS,
  trim: lS,
  stripBOM: dS,
  inherits: fS,
  toFlatObject: hS,
  kindOf: Dc,
  kindOfTest: Er,
  endsWith: pS,
  toArray: wS,
  isTypedArray: vS,
  isFileList: oS
}, Hr = qe;
function Hh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Xv = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (Hr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    Hr.forEach(r, function(w, m) {
      w === null || typeof w > "u" || (Hr.isArray(w) ? m = m + "[]" : w = [w], Hr.forEach(w, function(y) {
        Hr.isDate(y) ? y = y.toISOString() : Hr.isObject(y) && (y = JSON.stringify(y)), u.push(Hh(m) + "=" + Hh(y));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, mS = qe;
function Ca() {
  this.handlers = [];
}
Ca.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Ca.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Ca.prototype.forEach = function(o) {
  mS.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var _S = Ca, gS = qe, $S = function(o, r) {
  gS.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, Qv = qe;
function fo(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Qv.inherits(fo, Error, {
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
var em = fo.prototype, tm = {};
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
  tm[e] = { value: e };
});
Object.defineProperties(fo, tm);
Object.defineProperty(em, "isAxiosError", { value: !0 });
fo.from = function(e, o, r, s, a, u) {
  var c = Object.create(em);
  return Qv.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), fo.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var mo = fo, nm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ht = qe;
function yS(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : Ht.isDate(u) ? u.toISOString() : Ht.isArrayBuffer(u) || Ht.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (Ht.isPlainObject(u) || Ht.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), Ht.forEach(u, function(w, m) {
        if (!Ht.isUndefined(w)) {
          var _ = c ? c + "." + m : m, y;
          if (w && !c && typeof w == "object") {
            if (Ht.endsWith(m, "{}"))
              w = JSON.stringify(w);
            else if (Ht.endsWith(m, "[]") && (y = Ht.toArray(w))) {
              y.forEach(function($) {
                !Ht.isUndefined($) && o.append(_, s($));
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
var rm = yS, du, zh;
function VS() {
  if (zh)
    return du;
  zh = 1;
  var e = mo;
  return du = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, du;
}
var fu, Yh;
function bS() {
  if (Yh)
    return fu;
  Yh = 1;
  var e = qe;
  return fu = e.isStandardBrowserEnv() ? function() {
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
  }(), fu;
}
var CS = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, SS = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, ES = CS, IS = SS, om = function(o, r) {
  return o && !ES(r) ? IS(o, r) : r;
}, hu, Gh;
function kS() {
  if (Gh)
    return hu;
  Gh = 1;
  var e = qe, o = [
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
  return hu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(m) {
      if (f = m.indexOf(":"), u = e.trim(m.substr(0, f)).toLowerCase(), c = e.trim(m.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, hu;
}
var pu, jh;
function xS() {
  if (jh)
    return pu;
  jh = 1;
  var e = qe;
  return pu = e.isStandardBrowserEnv() ? function() {
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
  }(), pu;
}
var wu, Zh;
function Sa() {
  if (Zh)
    return wu;
  Zh = 1;
  var e = mo, o = qe;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), wu = r, wu;
}
var vu, Kh;
function AS() {
  return Kh || (Kh = 1, vu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), vu;
}
var mu, Jh;
function Xh() {
  if (Jh)
    return mu;
  Jh = 1;
  var e = qe, o = VS(), r = bS(), s = Xv, a = om, u = kS(), c = xS(), f = nm, w = mo, m = Sa(), _ = AS();
  return mu = function($) {
    return new Promise(function(D, N) {
      var M = $.data, S = $.headers, L = $.responseType, A;
      function O() {
        $.cancelToken && $.cancelToken.unsubscribe(A), $.signal && $.signal.removeEventListener("abort", A);
      }
      e.isFormData(M) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var k = new XMLHttpRequest();
      if ($.auth) {
        var F = $.auth.username || "", R = $.auth.password ? unescape(encodeURIComponent($.auth.password)) : "";
        S.Authorization = "Basic " + btoa(F + ":" + R);
      }
      var q = a($.baseURL, $.url);
      k.open($.method.toUpperCase(), s(q, $.params, $.paramsSerializer), !0), k.timeout = $.timeout;
      function ge() {
        if (!!k) {
          var Ve = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, Ce = !L || L === "text" || L === "json" ? k.responseText : k.response, ke = {
            data: Ce,
            status: k.status,
            statusText: k.statusText,
            headers: Ve,
            config: $,
            request: k
          };
          o(function(Oe) {
            D(Oe), O();
          }, function(Oe) {
            N(Oe), O();
          }, ke), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = ge : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(ge);
      }, k.onabort = function() {
        !k || (N(new w("Request aborted", w.ECONNABORTED, $, k)), k = null);
      }, k.onerror = function() {
        N(new w("Network Error", w.ERR_NETWORK, $, k, k)), k = null;
      }, k.ontimeout = function() {
        var Ce = $.timeout ? "timeout of " + $.timeout + "ms exceeded" : "timeout exceeded", ke = $.transitional || f;
        $.timeoutErrorMessage && (Ce = $.timeoutErrorMessage), N(new w(
          Ce,
          ke.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          $,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var de = ($.withCredentials || c(q)) && $.xsrfCookieName ? r.read($.xsrfCookieName) : void 0;
        de && (S[$.xsrfHeaderName] = de);
      }
      "setRequestHeader" in k && e.forEach(S, function(Ce, ke) {
        typeof M > "u" && ke.toLowerCase() === "content-type" ? delete S[ke] : k.setRequestHeader(ke, Ce);
      }), e.isUndefined($.withCredentials) || (k.withCredentials = !!$.withCredentials), L && L !== "json" && (k.responseType = $.responseType), typeof $.onDownloadProgress == "function" && k.addEventListener("progress", $.onDownloadProgress), typeof $.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", $.onUploadProgress), ($.cancelToken || $.signal) && (A = function(Ve) {
        !k || (N(!Ve || Ve && Ve.type ? new m() : Ve), k.abort(), k = null);
      }, $.cancelToken && $.cancelToken.subscribe(A), $.signal && ($.signal.aborted ? A() : $.signal.addEventListener("abort", A))), M || (M = null);
      var me = _(q);
      if (me && ["http", "https", "file"].indexOf(me) === -1) {
        N(new w("Unsupported protocol " + me + ":", w.ERR_BAD_REQUEST, $));
        return;
      }
      k.send(M);
    });
  }, mu;
}
var _u, Qh;
function TS() {
  return Qh || (Qh = 1, _u = null), _u;
}
var Me = qe, ep = $S, tp = mo, BS = nm, DS = rm, LS = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function np(e, o) {
  !Me.isUndefined(e) && Me.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function MS() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Xh()), e;
}
function NS(e, o, r) {
  if (Me.isString(e))
    try {
      return (o || JSON.parse)(e), Me.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Ea = {
  transitional: BS,
  adapter: MS(),
  transformRequest: [function(o, r) {
    if (ep(r, "Accept"), ep(r, "Content-Type"), Me.isFormData(o) || Me.isArrayBuffer(o) || Me.isBuffer(o) || Me.isStream(o) || Me.isFile(o) || Me.isBlob(o))
      return o;
    if (Me.isArrayBufferView(o))
      return o.buffer;
    if (Me.isURLSearchParams(o))
      return np(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = Me.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Me.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return DS(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return np(r, "application/json"), NS(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ea.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Me.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? tp.from(c, tp.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: TS()
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
Me.forEach(["delete", "get", "head"], function(o) {
  Ea.headers[o] = {};
});
Me.forEach(["post", "put", "patch"], function(o) {
  Ea.headers[o] = Me.merge(LS);
});
var Oc = Ea, OS = qe, PS = Oc, RS = function(o, r, s) {
  var a = this || PS;
  return OS.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, gu, rp;
function im() {
  return rp || (rp = 1, gu = function(o) {
    return !!(o && o.__CANCEL__);
  }), gu;
}
var op = qe, $u = RS, FS = im(), US = Oc, WS = Sa();
function yu(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new WS();
}
var qS = function(o) {
  yu(o), o.headers = o.headers || {}, o.data = $u.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = op.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), op.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || US.adapter;
  return r(o).then(function(a) {
    return yu(o), a.data = $u.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return FS(a) || (yu(o), a && a.response && (a.response.data = $u.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, vt = qe, sm = function(o, r) {
  r = r || {};
  var s = {};
  function a(_, y) {
    return vt.isPlainObject(_) && vt.isPlainObject(y) ? vt.merge(_, y) : vt.isPlainObject(y) ? vt.merge({}, y) : vt.isArray(y) ? y.slice() : y;
  }
  function u(_) {
    if (vt.isUndefined(r[_])) {
      if (!vt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!vt.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (vt.isUndefined(r[_])) {
      if (!vt.isUndefined(o[_]))
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
  return vt.forEach(Object.keys(o).concat(Object.keys(r)), function(y) {
    var $ = m[y] || u, T = $(y);
    vt.isUndefined(T) && $ !== w || (s[y] = T);
  }), s;
}, Vu, ip;
function am() {
  return ip || (ip = 1, Vu = {
    version: "0.27.2"
  }), Vu;
}
var HS = am().version, qn = mo, Pc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  Pc[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var sp = {};
Pc.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + HS + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new qn(
        a(c, " has been removed" + (r ? " in " + r : "")),
        qn.ERR_DEPRECATED
      );
    return r && !sp[c] && (sp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function zS(e, o, r) {
  if (typeof e != "object")
    throw new qn("options must be an object", qn.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new qn("option " + u + " must be " + w, qn.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new qn("Unknown option " + u, qn.ERR_BAD_OPTION);
  }
}
var YS = {
  assertOptions: zS,
  validators: Pc
}, lm = qe, GS = Xv, ap = _S, lp = qS, Ia = sm, jS = om, um = YS, zr = um.validators;
function ho(e) {
  this.defaults = e, this.interceptors = {
    request: new ap(),
    response: new ap()
  };
}
ho.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ia(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && um.assertOptions(s, {
    silentJSONParsing: zr.transitional(zr.boolean),
    forcedJSONParsing: zr.transitional(zr.boolean),
    clarifyTimeoutError: zr.transitional(zr.boolean)
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
    var w = [lp, void 0];
    for (Array.prototype.unshift.apply(w, a), w = w.concat(c), f = Promise.resolve(r); w.length; )
      f = f.then(w.shift(), w.shift());
    return f;
  }
  for (var m = r; a.length; ) {
    var _ = a.shift(), y = a.shift();
    try {
      m = _(m);
    } catch ($) {
      y($);
      break;
    }
  }
  try {
    f = lp(m);
  } catch ($) {
    return Promise.reject($);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
ho.prototype.getUri = function(o) {
  o = Ia(this.defaults, o);
  var r = jS(o.baseURL, o.url);
  return GS(r, o.params, o.paramsSerializer);
};
lm.forEach(["delete", "get", "head", "options"], function(o) {
  ho.prototype[o] = function(r, s) {
    return this.request(Ia(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
lm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Ia(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  ho.prototype[o] = r(), ho.prototype[o + "Form"] = r(!0);
});
var ZS = ho, bu, up;
function KS() {
  if (up)
    return bu;
  up = 1;
  var e = Sa();
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
  }, bu = o, bu;
}
var Cu, cp;
function JS() {
  return cp || (cp = 1, Cu = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Cu;
}
var Su, dp;
function XS() {
  if (dp)
    return Su;
  dp = 1;
  var e = qe;
  return Su = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Su;
}
var fp = qe, QS = Zv, ia = ZS, eE = sm, tE = Oc;
function cm(e) {
  var o = new ia(e), r = QS(ia.prototype.request, o);
  return fp.extend(r, ia.prototype, o), fp.extend(r, o), r.create = function(a) {
    return cm(eE(e, a));
  }, r;
}
var ut = cm(tE);
ut.Axios = ia;
ut.CanceledError = Sa();
ut.CancelToken = KS();
ut.isCancel = im();
ut.VERSION = am().version;
ut.toFormData = rm;
ut.AxiosError = mo;
ut.Cancel = ut.CanceledError;
ut.all = function(o) {
  return Promise.all(o);
};
ut.spread = JS();
ut.isAxiosError = XS();
Tc.exports = ut;
Tc.exports.default = ut;
(function(e) {
  e.exports = Tc.exports;
})(jv);
const dm = /* @__PURE__ */ ZC(jv.exports), En = dm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), In = dm.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var ce = { exports: {} };
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", m = 500, _ = "__lodash_placeholder__", y = 1, $ = 2, T = 4, D = 1, N = 2, M = 1, S = 2, L = 4, A = 8, O = 16, k = 32, F = 64, R = 128, q = 256, ge = 512, de = 30, me = "...", Ve = 800, Ce = 16, ke = 1, he = 2, Oe = 3, Pe = 1 / 0, je = 9007199254740991, Eo = 17976931348623157e292, Ui = 0 / 0, Jt = 4294967295, Z_ = Jt - 1, K_ = Jt >>> 1, J_ = [
      ["ary", R],
      ["bind", M],
      ["bindKey", S],
      ["curry", A],
      ["curryRight", O],
      ["flip", ge],
      ["partial", k],
      ["partialRight", F],
      ["rearg", q]
    ], kr = "[object Arguments]", Wi = "[object Array]", X_ = "[object AsyncFunction]", Io = "[object Boolean]", ko = "[object Date]", Q_ = "[object DOMException]", qi = "[object Error]", Hi = "[object Function]", fd = "[object GeneratorFunction]", Pt = "[object Map]", xo = "[object Number]", eg = "[object Null]", un = "[object Object]", hd = "[object Promise]", tg = "[object Proxy]", Ao = "[object RegExp]", Rt = "[object Set]", To = "[object String]", zi = "[object Symbol]", ng = "[object Undefined]", Bo = "[object WeakMap]", rg = "[object WeakSet]", Do = "[object ArrayBuffer]", xr = "[object DataView]", Ha = "[object Float32Array]", za = "[object Float64Array]", Ya = "[object Int8Array]", Ga = "[object Int16Array]", ja = "[object Int32Array]", Za = "[object Uint8Array]", Ka = "[object Uint8ClampedArray]", Ja = "[object Uint16Array]", Xa = "[object Uint32Array]", og = /\b__p \+= '';/g, ig = /\b(__p \+=) '' \+/g, sg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, pd = /&(?:amp|lt|gt|quot|#39);/g, wd = /[&<>"']/g, ag = RegExp(pd.source), lg = RegExp(wd.source), ug = /<%-([\s\S]+?)%>/g, cg = /<%([\s\S]+?)%>/g, vd = /<%=([\s\S]+?)%>/g, dg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, fg = /^\w*$/, hg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qa = /[\\^$.*+?()[\]{}|]/g, pg = RegExp(Qa.source), el = /^\s+/, wg = /\s/, vg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, mg = /\{\n\/\* \[wrapped with (.+)\] \*/, _g = /,? & /, gg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $g = /[()=,{}\[\]\/\s]/, yg = /\\(\\)?/g, Vg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, md = /\w*$/, bg = /^[-+]0x[0-9a-f]+$/i, Cg = /^0b[01]+$/i, Sg = /^\[object .+?Constructor\]$/, Eg = /^0o[0-7]+$/i, Ig = /^(?:0|[1-9]\d*)$/, kg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yi = /($^)/, xg = /['\n\r\u2028\u2029\\]/g, Gi = "\\ud800-\\udfff", Ag = "\\u0300-\\u036f", Tg = "\\ufe20-\\ufe2f", Bg = "\\u20d0-\\u20ff", _d = Ag + Tg + Bg, gd = "\\u2700-\\u27bf", $d = "a-z\\xdf-\\xf6\\xf8-\\xff", Dg = "\\xac\\xb1\\xd7\\xf7", Lg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Mg = "\\u2000-\\u206f", Ng = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", yd = "A-Z\\xc0-\\xd6\\xd8-\\xde", Vd = "\\ufe0e\\ufe0f", bd = Dg + Lg + Mg + Ng, tl = "['\u2019]", Og = "[" + Gi + "]", Cd = "[" + bd + "]", ji = "[" + _d + "]", Sd = "\\d+", Pg = "[" + gd + "]", Ed = "[" + $d + "]", Id = "[^" + Gi + bd + Sd + gd + $d + yd + "]", nl = "\\ud83c[\\udffb-\\udfff]", Rg = "(?:" + ji + "|" + nl + ")", kd = "[^" + Gi + "]", rl = "(?:\\ud83c[\\udde6-\\uddff]){2}", ol = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ar = "[" + yd + "]", xd = "\\u200d", Ad = "(?:" + Ed + "|" + Id + ")", Fg = "(?:" + Ar + "|" + Id + ")", Td = "(?:" + tl + "(?:d|ll|m|re|s|t|ve))?", Bd = "(?:" + tl + "(?:D|LL|M|RE|S|T|VE))?", Dd = Rg + "?", Ld = "[" + Vd + "]?", Ug = "(?:" + xd + "(?:" + [kd, rl, ol].join("|") + ")" + Ld + Dd + ")*", Wg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", qg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Md = Ld + Dd + Ug, Hg = "(?:" + [Pg, rl, ol].join("|") + ")" + Md, zg = "(?:" + [kd + ji + "?", ji, rl, ol, Og].join("|") + ")", Yg = RegExp(tl, "g"), Gg = RegExp(ji, "g"), il = RegExp(nl + "(?=" + nl + ")|" + zg + Md, "g"), jg = RegExp([
      Ar + "?" + Ed + "+" + Td + "(?=" + [Cd, Ar, "$"].join("|") + ")",
      Fg + "+" + Bd + "(?=" + [Cd, Ar + Ad, "$"].join("|") + ")",
      Ar + "?" + Ad + "+" + Td,
      Ar + "+" + Bd,
      qg,
      Wg,
      Sd,
      Hg
    ].join("|"), "g"), Zg = RegExp("[" + xd + Gi + _d + Vd + "]"), Kg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Jg = [
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
    ], Xg = -1, _e = {};
    _e[Ha] = _e[za] = _e[Ya] = _e[Ga] = _e[ja] = _e[Za] = _e[Ka] = _e[Ja] = _e[Xa] = !0, _e[kr] = _e[Wi] = _e[Do] = _e[Io] = _e[xr] = _e[ko] = _e[qi] = _e[Hi] = _e[Pt] = _e[xo] = _e[un] = _e[Ao] = _e[Rt] = _e[To] = _e[Bo] = !1;
    var we = {};
    we[kr] = we[Wi] = we[Do] = we[xr] = we[Io] = we[ko] = we[Ha] = we[za] = we[Ya] = we[Ga] = we[ja] = we[Pt] = we[xo] = we[un] = we[Ao] = we[Rt] = we[To] = we[zi] = we[Za] = we[Ka] = we[Ja] = we[Xa] = !0, we[qi] = we[Hi] = we[Bo] = !1;
    var Qg = {
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
    }, e1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, t1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, n1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, r1 = parseFloat, o1 = parseInt, Nd = typeof Zo == "object" && Zo && Zo.Object === Object && Zo, i1 = typeof self == "object" && self && self.Object === Object && self, Re = Nd || i1 || Function("return this")(), sl = o && !o.nodeType && o, Xn = sl && !0 && e && !e.nodeType && e, Od = Xn && Xn.exports === sl, al = Od && Nd.process, bt = function() {
      try {
        var V = Xn && Xn.require && Xn.require("util").types;
        return V || al && al.binding && al.binding("util");
      } catch {
      }
    }(), Pd = bt && bt.isArrayBuffer, Rd = bt && bt.isDate, Fd = bt && bt.isMap, Ud = bt && bt.isRegExp, Wd = bt && bt.isSet, qd = bt && bt.isTypedArray;
    function ct(V, E, C) {
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
    function s1(V, E, C, U) {
      for (var j = -1, re = V == null ? 0 : V.length; ++j < re; ) {
        var Ae = V[j];
        E(U, Ae, C(Ae), V);
      }
      return U;
    }
    function Ct(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function a1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function Hd(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function kn(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = 0, re = []; ++C < U; ) {
        var Ae = V[C];
        E(Ae, C, V) && (re[j++] = Ae);
      }
      return re;
    }
    function Zi(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && Tr(V, E, 0) > -1;
    }
    function ll(V, E, C) {
      for (var U = -1, j = V == null ? 0 : V.length; ++U < j; )
        if (C(E, V[U]))
          return !0;
      return !1;
    }
    function $e(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = Array(U); ++C < U; )
        j[C] = E(V[C], C, V);
      return j;
    }
    function xn(V, E) {
      for (var C = -1, U = E.length, j = V.length; ++C < U; )
        V[j + C] = E[C];
      return V;
    }
    function ul(V, E, C, U) {
      var j = -1, re = V == null ? 0 : V.length;
      for (U && re && (C = V[++j]); ++j < re; )
        C = E(C, V[j], j, V);
      return C;
    }
    function l1(V, E, C, U) {
      var j = V == null ? 0 : V.length;
      for (U && j && (C = V[--j]); j--; )
        C = E(C, V[j], j, V);
      return C;
    }
    function cl(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var u1 = dl("length");
    function c1(V) {
      return V.split("");
    }
    function d1(V) {
      return V.match(gg) || [];
    }
    function zd(V, E, C) {
      var U;
      return C(V, function(j, re, Ae) {
        if (E(j, re, Ae))
          return U = re, !1;
      }), U;
    }
    function Ki(V, E, C, U) {
      for (var j = V.length, re = C + (U ? 1 : -1); U ? re-- : ++re < j; )
        if (E(V[re], re, V))
          return re;
      return -1;
    }
    function Tr(V, E, C) {
      return E === E ? b1(V, E, C) : Ki(V, Yd, C);
    }
    function f1(V, E, C, U) {
      for (var j = C - 1, re = V.length; ++j < re; )
        if (U(V[j], E))
          return j;
      return -1;
    }
    function Yd(V) {
      return V !== V;
    }
    function Gd(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? hl(V, E) / C : Ui;
    }
    function dl(V) {
      return function(E) {
        return E == null ? r : E[V];
      };
    }
    function fl(V) {
      return function(E) {
        return V == null ? r : V[E];
      };
    }
    function jd(V, E, C, U, j) {
      return j(V, function(re, Ae, pe) {
        C = U ? (U = !1, re) : E(C, re, Ae, pe);
      }), C;
    }
    function h1(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function hl(V, E) {
      for (var C, U = -1, j = V.length; ++U < j; ) {
        var re = E(V[U]);
        re !== r && (C = C === r ? re : C + re);
      }
      return C;
    }
    function pl(V, E) {
      for (var C = -1, U = Array(V); ++C < V; )
        U[C] = E(C);
      return U;
    }
    function p1(V, E) {
      return $e(E, function(C) {
        return [C, V[C]];
      });
    }
    function Zd(V) {
      return V && V.slice(0, Qd(V) + 1).replace(el, "");
    }
    function dt(V) {
      return function(E) {
        return V(E);
      };
    }
    function wl(V, E) {
      return $e(E, function(C) {
        return V[C];
      });
    }
    function Lo(V, E) {
      return V.has(E);
    }
    function Kd(V, E) {
      for (var C = -1, U = V.length; ++C < U && Tr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function Jd(V, E) {
      for (var C = V.length; C-- && Tr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function w1(V, E) {
      for (var C = V.length, U = 0; C--; )
        V[C] === E && ++U;
      return U;
    }
    var v1 = fl(Qg), m1 = fl(e1);
    function _1(V) {
      return "\\" + n1[V];
    }
    function g1(V, E) {
      return V == null ? r : V[E];
    }
    function Br(V) {
      return Zg.test(V);
    }
    function $1(V) {
      return Kg.test(V);
    }
    function y1(V) {
      for (var E, C = []; !(E = V.next()).done; )
        C.push(E.value);
      return C;
    }
    function vl(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U, j) {
        C[++E] = [j, U];
      }), C;
    }
    function Xd(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function An(V, E) {
      for (var C = -1, U = V.length, j = 0, re = []; ++C < U; ) {
        var Ae = V[C];
        (Ae === E || Ae === _) && (V[C] = _, re[j++] = C);
      }
      return re;
    }
    function Ji(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function V1(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function b1(V, E, C) {
      for (var U = C - 1, j = V.length; ++U < j; )
        if (V[U] === E)
          return U;
      return -1;
    }
    function C1(V, E, C) {
      for (var U = C + 1; U--; )
        if (V[U] === E)
          return U;
      return U;
    }
    function Dr(V) {
      return Br(V) ? E1(V) : u1(V);
    }
    function Ft(V) {
      return Br(V) ? I1(V) : c1(V);
    }
    function Qd(V) {
      for (var E = V.length; E-- && wg.test(V.charAt(E)); )
        ;
      return E;
    }
    var S1 = fl(t1);
    function E1(V) {
      for (var E = il.lastIndex = 0; il.test(V); )
        ++E;
      return E;
    }
    function I1(V) {
      return V.match(il) || [];
    }
    function k1(V) {
      return V.match(jg) || [];
    }
    var x1 = function V(E) {
      E = E == null ? Re : Lr.defaults(Re.Object(), E, Lr.pick(Re, Jg));
      var C = E.Array, U = E.Date, j = E.Error, re = E.Function, Ae = E.Math, pe = E.Object, ml = E.RegExp, A1 = E.String, St = E.TypeError, Xi = C.prototype, T1 = re.prototype, Mr = pe.prototype, Qi = E["__core-js_shared__"], es = T1.toString, le = Mr.hasOwnProperty, B1 = 0, ef = function() {
        var t = /[^.]+$/.exec(Qi && Qi.keys && Qi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), ts = Mr.toString, D1 = es.call(pe), L1 = Re._, M1 = ml(
        "^" + es.call(le).replace(Qa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ns = Od ? E.Buffer : r, Tn = E.Symbol, rs = E.Uint8Array, tf = ns ? ns.allocUnsafe : r, os = Xd(pe.getPrototypeOf, pe), nf = pe.create, rf = Mr.propertyIsEnumerable, is = Xi.splice, of = Tn ? Tn.isConcatSpreadable : r, Mo = Tn ? Tn.iterator : r, Qn = Tn ? Tn.toStringTag : r, ss = function() {
        try {
          var t = or(pe, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), N1 = E.clearTimeout !== Re.clearTimeout && E.clearTimeout, O1 = U && U.now !== Re.Date.now && U.now, P1 = E.setTimeout !== Re.setTimeout && E.setTimeout, as = Ae.ceil, ls = Ae.floor, _l = pe.getOwnPropertySymbols, R1 = ns ? ns.isBuffer : r, sf = E.isFinite, F1 = Xi.join, U1 = Xd(pe.keys, pe), Te = Ae.max, He = Ae.min, W1 = U.now, q1 = E.parseInt, af = Ae.random, H1 = Xi.reverse, gl = or(E, "DataView"), No = or(E, "Map"), $l = or(E, "Promise"), Nr = or(E, "Set"), Oo = or(E, "WeakMap"), Po = or(pe, "create"), us = Oo && new Oo(), Or = {}, z1 = ir(gl), Y1 = ir(No), G1 = ir($l), j1 = ir(Nr), Z1 = ir(Oo), cs = Tn ? Tn.prototype : r, Ro = cs ? cs.valueOf : r, lf = cs ? cs.toString : r;
      function h(t) {
        if (be(t) && !Z(t) && !(t instanceof te)) {
          if (t instanceof Et)
            return t;
          if (le.call(t, "__wrapped__"))
            return uh(t);
        }
        return new Et(t);
      }
      var Pr = function() {
        function t() {
        }
        return function(n) {
          if (!ye(n))
            return {};
          if (nf)
            return nf(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function ds() {
      }
      function Et(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: ug,
        evaluate: cg,
        interpolate: vd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = ds.prototype, h.prototype.constructor = h, Et.prototype = Pr(ds.prototype), Et.prototype.constructor = Et;
      function te(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Jt, this.__views__ = [];
      }
      function K1() {
        var t = new te(this.__wrapped__);
        return t.__actions__ = tt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = tt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = tt(this.__views__), t;
      }
      function J1() {
        if (this.__filtered__) {
          var t = new te(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function X1() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = Z(t), l = n < 0, d = i ? t.length : 0, p = c$(0, d, this.__views__), v = p.start, g = p.end, b = g - v, I = l ? g : v - 1, x = this.__iteratees__, B = x.length, P = 0, W = He(b, this.__takeCount__);
        if (!i || !l && d == b && W == b)
          return Bf(t, this.__actions__);
        var z = [];
        e:
          for (; b-- && P < W; ) {
            I += n;
            for (var J = -1, Y = t[I]; ++J < B; ) {
              var ee = x[J], ne = ee.iteratee, pt = ee.type, Je = ne(Y);
              if (pt == he)
                Y = Je;
              else if (!Je) {
                if (pt == ke)
                  continue e;
                break e;
              }
            }
            z[P++] = Y;
          }
        return z;
      }
      te.prototype = Pr(ds.prototype), te.prototype.constructor = te;
      function er(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Q1() {
        this.__data__ = Po ? Po(null) : {}, this.size = 0;
      }
      function e0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function t0(t) {
        var n = this.__data__;
        if (Po) {
          var i = n[t];
          return i === w ? r : i;
        }
        return le.call(n, t) ? n[t] : r;
      }
      function n0(t) {
        var n = this.__data__;
        return Po ? n[t] !== r : le.call(n, t);
      }
      function r0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = Po && n === r ? w : n, this;
      }
      er.prototype.clear = Q1, er.prototype.delete = e0, er.prototype.get = t0, er.prototype.has = n0, er.prototype.set = r0;
      function cn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function o0() {
        this.__data__ = [], this.size = 0;
      }
      function i0(t) {
        var n = this.__data__, i = fs(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : is.call(n, i, 1), --this.size, !0;
      }
      function s0(t) {
        var n = this.__data__, i = fs(n, t);
        return i < 0 ? r : n[i][1];
      }
      function a0(t) {
        return fs(this.__data__, t) > -1;
      }
      function l0(t, n) {
        var i = this.__data__, l = fs(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      cn.prototype.clear = o0, cn.prototype.delete = i0, cn.prototype.get = s0, cn.prototype.has = a0, cn.prototype.set = l0;
      function dn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function u0() {
        this.size = 0, this.__data__ = {
          hash: new er(),
          map: new (No || cn)(),
          string: new er()
        };
      }
      function c0(t) {
        var n = Cs(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function d0(t) {
        return Cs(this, t).get(t);
      }
      function f0(t) {
        return Cs(this, t).has(t);
      }
      function h0(t, n) {
        var i = Cs(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      dn.prototype.clear = u0, dn.prototype.delete = c0, dn.prototype.get = d0, dn.prototype.has = f0, dn.prototype.set = h0;
      function tr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new dn(); ++n < i; )
          this.add(t[n]);
      }
      function p0(t) {
        return this.__data__.set(t, w), this;
      }
      function w0(t) {
        return this.__data__.has(t);
      }
      tr.prototype.add = tr.prototype.push = p0, tr.prototype.has = w0;
      function Ut(t) {
        var n = this.__data__ = new cn(t);
        this.size = n.size;
      }
      function v0() {
        this.__data__ = new cn(), this.size = 0;
      }
      function m0(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function _0(t) {
        return this.__data__.get(t);
      }
      function g0(t) {
        return this.__data__.has(t);
      }
      function $0(t, n) {
        var i = this.__data__;
        if (i instanceof cn) {
          var l = i.__data__;
          if (!No || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new dn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      Ut.prototype.clear = v0, Ut.prototype.delete = m0, Ut.prototype.get = _0, Ut.prototype.has = g0, Ut.prototype.set = $0;
      function uf(t, n) {
        var i = Z(t), l = !i && sr(t), d = !i && !l && Nn(t), p = !i && !l && !d && Wr(t), v = i || l || d || p, g = v ? pl(t.length, A1) : [], b = g.length;
        for (var I in t)
          (n || le.call(t, I)) && !(v && (I == "length" || d && (I == "offset" || I == "parent") || p && (I == "buffer" || I == "byteLength" || I == "byteOffset") || wn(I, b))) && g.push(I);
        return g;
      }
      function cf(t) {
        var n = t.length;
        return n ? t[Tl(0, n - 1)] : r;
      }
      function y0(t, n) {
        return Ss(tt(t), nr(n, 0, t.length));
      }
      function V0(t) {
        return Ss(tt(t));
      }
      function yl(t, n, i) {
        (i !== r && !Wt(t[n], i) || i === r && !(n in t)) && fn(t, n, i);
      }
      function Fo(t, n, i) {
        var l = t[n];
        (!(le.call(t, n) && Wt(l, i)) || i === r && !(n in t)) && fn(t, n, i);
      }
      function fs(t, n) {
        for (var i = t.length; i--; )
          if (Wt(t[i][0], n))
            return i;
        return -1;
      }
      function b0(t, n, i, l) {
        return Bn(t, function(d, p, v) {
          n(l, d, i(d), v);
        }), l;
      }
      function df(t, n) {
        return t && Qt(n, Le(n), t);
      }
      function C0(t, n) {
        return t && Qt(n, rt(n), t);
      }
      function fn(t, n, i) {
        n == "__proto__" && ss ? ss(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Vl(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? r : nu(t, n[i]);
        return d;
      }
      function nr(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function It(t, n, i, l, d, p) {
        var v, g = n & y, b = n & $, I = n & T;
        if (i && (v = d ? i(t, l, d, p) : i(t)), v !== r)
          return v;
        if (!ye(t))
          return t;
        var x = Z(t);
        if (x) {
          if (v = f$(t), !g)
            return tt(t, v);
        } else {
          var B = ze(t), P = B == Hi || B == fd;
          if (Nn(t))
            return Mf(t, g);
          if (B == un || B == kr || P && !d) {
            if (v = b || P ? {} : eh(t), !g)
              return b ? t$(t, C0(v, t)) : e$(t, df(v, t));
          } else {
            if (!we[B])
              return d ? t : {};
            v = h$(t, B, g);
          }
        }
        p || (p = new Ut());
        var W = p.get(t);
        if (W)
          return W;
        p.set(t, v), xh(t) ? t.forEach(function(Y) {
          v.add(It(Y, n, i, Y, t, p));
        }) : Ih(t) && t.forEach(function(Y, ee) {
          v.set(ee, It(Y, n, i, ee, t, p));
        });
        var z = I ? b ? Wl : Ul : b ? rt : Le, J = x ? r : z(t);
        return Ct(J || t, function(Y, ee) {
          J && (ee = Y, Y = t[ee]), Fo(v, ee, It(Y, n, i, ee, t, p));
        }), v;
      }
      function S0(t) {
        var n = Le(t);
        return function(i) {
          return ff(i, t, n);
        };
      }
      function ff(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = pe(t); l--; ) {
          var d = i[l], p = n[d], v = t[d];
          if (v === r && !(d in t) || !p(v))
            return !1;
        }
        return !0;
      }
      function hf(t, n, i) {
        if (typeof t != "function")
          throw new St(c);
        return Go(function() {
          t.apply(r, i);
        }, n);
      }
      function Uo(t, n, i, l) {
        var d = -1, p = Zi, v = !0, g = t.length, b = [], I = n.length;
        if (!g)
          return b;
        i && (n = $e(n, dt(i))), l ? (p = ll, v = !1) : n.length >= a && (p = Lo, v = !1, n = new tr(n));
        e:
          for (; ++d < g; ) {
            var x = t[d], B = i == null ? x : i(x);
            if (x = l || x !== 0 ? x : 0, v && B === B) {
              for (var P = I; P--; )
                if (n[P] === B)
                  continue e;
              b.push(x);
            } else
              p(n, B, l) || b.push(x);
          }
        return b;
      }
      var Bn = Ff(Xt), pf = Ff(Cl, !0);
      function E0(t, n) {
        var i = !0;
        return Bn(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function hs(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], v = n(p);
          if (v != null && (g === r ? v === v && !ht(v) : i(v, g)))
            var g = v, b = p;
        }
        return b;
      }
      function I0(t, n, i, l) {
        var d = t.length;
        for (i = K(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : K(l), l < 0 && (l += d), l = i > l ? 0 : Th(l); i < l; )
          t[i++] = n;
        return t;
      }
      function wf(t, n) {
        var i = [];
        return Bn(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function Fe(t, n, i, l, d) {
        var p = -1, v = t.length;
        for (i || (i = w$), d || (d = []); ++p < v; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? Fe(g, n - 1, i, l, d) : xn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var bl = Uf(), vf = Uf(!0);
      function Xt(t, n) {
        return t && bl(t, n, Le);
      }
      function Cl(t, n) {
        return t && vf(t, n, Le);
      }
      function ps(t, n) {
        return kn(n, function(i) {
          return vn(t[i]);
        });
      }
      function rr(t, n) {
        n = Ln(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[en(n[i++])];
        return i && i == l ? t : r;
      }
      function mf(t, n, i) {
        var l = n(t);
        return Z(t) ? l : xn(l, i(t));
      }
      function Ze(t) {
        return t == null ? t === r ? ng : eg : Qn && Qn in pe(t) ? u$(t) : V$(t);
      }
      function Sl(t, n) {
        return t > n;
      }
      function k0(t, n) {
        return t != null && le.call(t, n);
      }
      function x0(t, n) {
        return t != null && n in pe(t);
      }
      function A0(t, n, i) {
        return t >= He(n, i) && t < Te(n, i);
      }
      function El(t, n, i) {
        for (var l = i ? ll : Zi, d = t[0].length, p = t.length, v = p, g = C(p), b = 1 / 0, I = []; v--; ) {
          var x = t[v];
          v && n && (x = $e(x, dt(n))), b = He(x.length, b), g[v] = !i && (n || d >= 120 && x.length >= 120) ? new tr(v && x) : r;
        }
        x = t[0];
        var B = -1, P = g[0];
        e:
          for (; ++B < d && I.length < b; ) {
            var W = x[B], z = n ? n(W) : W;
            if (W = i || W !== 0 ? W : 0, !(P ? Lo(P, z) : l(I, z, i))) {
              for (v = p; --v; ) {
                var J = g[v];
                if (!(J ? Lo(J, z) : l(t[v], z, i)))
                  continue e;
              }
              P && P.push(z), I.push(W);
            }
          }
        return I;
      }
      function T0(t, n, i, l) {
        return Xt(t, function(d, p, v) {
          n(l, i(d), p, v);
        }), l;
      }
      function Wo(t, n, i) {
        n = Ln(n, t), t = oh(t, n);
        var l = t == null ? t : t[en(xt(n))];
        return l == null ? r : ct(l, t, i);
      }
      function _f(t) {
        return be(t) && Ze(t) == kr;
      }
      function B0(t) {
        return be(t) && Ze(t) == Do;
      }
      function D0(t) {
        return be(t) && Ze(t) == ko;
      }
      function qo(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !be(t) && !be(n) ? t !== t && n !== n : L0(t, n, i, l, qo, d);
      }
      function L0(t, n, i, l, d, p) {
        var v = Z(t), g = Z(n), b = v ? Wi : ze(t), I = g ? Wi : ze(n);
        b = b == kr ? un : b, I = I == kr ? un : I;
        var x = b == un, B = I == un, P = b == I;
        if (P && Nn(t)) {
          if (!Nn(n))
            return !1;
          v = !0, x = !1;
        }
        if (P && !x)
          return p || (p = new Ut()), v || Wr(t) ? Jf(t, n, i, l, d, p) : a$(t, n, b, i, l, d, p);
        if (!(i & D)) {
          var W = x && le.call(t, "__wrapped__"), z = B && le.call(n, "__wrapped__");
          if (W || z) {
            var J = W ? t.value() : t, Y = z ? n.value() : n;
            return p || (p = new Ut()), d(J, Y, i, l, p);
          }
        }
        return P ? (p || (p = new Ut()), l$(t, n, i, l, d, p)) : !1;
      }
      function M0(t) {
        return be(t) && ze(t) == Pt;
      }
      function Il(t, n, i, l) {
        var d = i.length, p = d, v = !l;
        if (t == null)
          return !p;
        for (t = pe(t); d--; ) {
          var g = i[d];
          if (v && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = i[d];
          var b = g[0], I = t[b], x = g[1];
          if (v && g[2]) {
            if (I === r && !(b in t))
              return !1;
          } else {
            var B = new Ut();
            if (l)
              var P = l(I, x, b, t, n, B);
            if (!(P === r ? qo(x, I, D | N, l, B) : P))
              return !1;
          }
        }
        return !0;
      }
      function gf(t) {
        if (!ye(t) || m$(t))
          return !1;
        var n = vn(t) ? M1 : Sg;
        return n.test(ir(t));
      }
      function N0(t) {
        return be(t) && Ze(t) == Ao;
      }
      function O0(t) {
        return be(t) && ze(t) == Rt;
      }
      function P0(t) {
        return be(t) && Ts(t.length) && !!_e[Ze(t)];
      }
      function $f(t) {
        return typeof t == "function" ? t : t == null ? ot : typeof t == "object" ? Z(t) ? bf(t[0], t[1]) : Vf(t) : Wh(t);
      }
      function kl(t) {
        if (!Yo(t))
          return U1(t);
        var n = [];
        for (var i in pe(t))
          le.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function R0(t) {
        if (!ye(t))
          return y$(t);
        var n = Yo(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !le.call(t, l)) || i.push(l);
        return i;
      }
      function xl(t, n) {
        return t < n;
      }
      function yf(t, n) {
        var i = -1, l = nt(t) ? C(t.length) : [];
        return Bn(t, function(d, p, v) {
          l[++i] = n(d, p, v);
        }), l;
      }
      function Vf(t) {
        var n = Hl(t);
        return n.length == 1 && n[0][2] ? nh(n[0][0], n[0][1]) : function(i) {
          return i === t || Il(i, t, n);
        };
      }
      function bf(t, n) {
        return Yl(t) && th(n) ? nh(en(t), n) : function(i) {
          var l = nu(i, t);
          return l === r && l === n ? ru(i, t) : qo(n, l, D | N);
        };
      }
      function ws(t, n, i, l, d) {
        t !== n && bl(n, function(p, v) {
          if (d || (d = new Ut()), ye(p))
            F0(t, n, v, i, ws, l, d);
          else {
            var g = l ? l(jl(t, v), p, v + "", t, n, d) : r;
            g === r && (g = p), yl(t, v, g);
          }
        }, rt);
      }
      function F0(t, n, i, l, d, p, v) {
        var g = jl(t, i), b = jl(n, i), I = v.get(b);
        if (I) {
          yl(t, i, I);
          return;
        }
        var x = p ? p(g, b, i + "", t, n, v) : r, B = x === r;
        if (B) {
          var P = Z(b), W = !P && Nn(b), z = !P && !W && Wr(b);
          x = b, P || W || z ? Z(g) ? x = g : Se(g) ? x = tt(g) : W ? (B = !1, x = Mf(b, !0)) : z ? (B = !1, x = Nf(b, !0)) : x = [] : jo(b) || sr(b) ? (x = g, sr(g) ? x = Bh(g) : (!ye(g) || vn(g)) && (x = eh(b))) : B = !1;
        }
        B && (v.set(b, x), d(x, b, l, p, v), v.delete(b)), yl(t, i, x);
      }
      function Cf(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, wn(n, i) ? t[n] : r;
      }
      function Sf(t, n, i) {
        n.length ? n = $e(n, function(p) {
          return Z(p) ? function(v) {
            return rr(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [ot];
        var l = -1;
        n = $e(n, dt(H()));
        var d = yf(t, function(p, v, g) {
          var b = $e(n, function(I) {
            return I(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return h1(d, function(p, v) {
          return Q0(p, v, i);
        });
      }
      function U0(t, n) {
        return Ef(t, n, function(i, l) {
          return ru(t, l);
        });
      }
      function Ef(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var v = n[l], g = rr(t, v);
          i(g, v) && Ho(p, Ln(v, t), g);
        }
        return p;
      }
      function W0(t) {
        return function(n) {
          return rr(n, t);
        };
      }
      function Al(t, n, i, l) {
        var d = l ? f1 : Tr, p = -1, v = n.length, g = t;
        for (t === n && (n = tt(n)), i && (g = $e(t, dt(i))); ++p < v; )
          for (var b = 0, I = n[p], x = i ? i(I) : I; (b = d(g, x, b, l)) > -1; )
            g !== t && is.call(g, b, 1), is.call(t, b, 1);
        return t;
      }
      function If(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            wn(d) ? is.call(t, d, 1) : Ll(t, d);
          }
        }
        return t;
      }
      function Tl(t, n) {
        return t + ls(af() * (n - t + 1));
      }
      function q0(t, n, i, l) {
        for (var d = -1, p = Te(as((n - t) / (i || 1)), 0), v = C(p); p--; )
          v[l ? p : ++d] = t, t += i;
        return v;
      }
      function Bl(t, n) {
        var i = "";
        if (!t || n < 1 || n > je)
          return i;
        do
          n % 2 && (i += t), n = ls(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function Q(t, n) {
        return Zl(rh(t, n, ot), t + "");
      }
      function H0(t) {
        return cf(qr(t));
      }
      function z0(t, n) {
        var i = qr(t);
        return Ss(i, nr(n, 0, i.length));
      }
      function Ho(t, n, i, l) {
        if (!ye(t))
          return t;
        n = Ln(n, t);
        for (var d = -1, p = n.length, v = p - 1, g = t; g != null && ++d < p; ) {
          var b = en(n[d]), I = i;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != v) {
            var x = g[b];
            I = l ? l(x, b, g) : r, I === r && (I = ye(x) ? x : wn(n[d + 1]) ? [] : {});
          }
          Fo(g, b, I), g = g[b];
        }
        return t;
      }
      var kf = us ? function(t, n) {
        return us.set(t, n), t;
      } : ot, Y0 = ss ? function(t, n) {
        return ss(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: iu(n),
          writable: !0
        });
      } : ot;
      function G0(t) {
        return Ss(qr(t));
      }
      function kt(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function j0(t, n) {
        var i;
        return Bn(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function vs(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= K_) {
          for (; l < d; ) {
            var p = l + d >>> 1, v = t[p];
            v !== null && !ht(v) && (i ? v <= n : v < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return Dl(t, n, ot, i);
      }
      function Dl(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var v = n !== n, g = n === null, b = ht(n), I = n === r; d < p; ) {
          var x = ls((d + p) / 2), B = i(t[x]), P = B !== r, W = B === null, z = B === B, J = ht(B);
          if (v)
            var Y = l || z;
          else
            I ? Y = z && (l || P) : g ? Y = z && P && (l || !W) : b ? Y = z && P && !W && (l || !J) : W || J ? Y = !1 : Y = l ? B <= n : B < n;
          Y ? d = x + 1 : p = x;
        }
        return He(p, Z_);
      }
      function xf(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var v = t[i], g = n ? n(v) : v;
          if (!i || !Wt(g, b)) {
            var b = g;
            p[d++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function Af(t) {
        return typeof t == "number" ? t : ht(t) ? Ui : +t;
      }
      function ft(t) {
        if (typeof t == "string")
          return t;
        if (Z(t))
          return $e(t, ft) + "";
        if (ht(t))
          return lf ? lf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Pe ? "-0" : n;
      }
      function Dn(t, n, i) {
        var l = -1, d = Zi, p = t.length, v = !0, g = [], b = g;
        if (i)
          v = !1, d = ll;
        else if (p >= a) {
          var I = n ? null : i$(t);
          if (I)
            return Ji(I);
          v = !1, d = Lo, b = new tr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var x = t[l], B = n ? n(x) : x;
            if (x = i || x !== 0 ? x : 0, v && B === B) {
              for (var P = b.length; P--; )
                if (b[P] === B)
                  continue e;
              n && b.push(B), g.push(x);
            } else
              d(b, B, i) || (b !== g && b.push(B), g.push(x));
          }
        return g;
      }
      function Ll(t, n) {
        return n = Ln(n, t), t = oh(t, n), t == null || delete t[en(xt(n))];
      }
      function Tf(t, n, i, l) {
        return Ho(t, n, i(rr(t, n)), l);
      }
      function ms(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? kt(t, l ? 0 : p, l ? p + 1 : d) : kt(t, l ? p + 1 : 0, l ? d : p);
      }
      function Bf(t, n) {
        var i = t;
        return i instanceof te && (i = i.value()), ul(n, function(l, d) {
          return d.func.apply(d.thisArg, xn([l], d.args));
        }, i);
      }
      function Ml(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Dn(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var v = t[d], g = -1; ++g < l; )
            g != d && (p[d] = Uo(p[d] || v, t[g], n, i));
        return Dn(Fe(p, 1), n, i);
      }
      function Df(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, v = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          i(v, t[l], g);
        }
        return v;
      }
      function Nl(t) {
        return Se(t) ? t : [];
      }
      function Ol(t) {
        return typeof t == "function" ? t : ot;
      }
      function Ln(t, n) {
        return Z(t) ? t : Yl(t, n) ? [t] : lh(ae(t));
      }
      var Z0 = Q;
      function Mn(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : kt(t, n, i);
      }
      var Lf = N1 || function(t) {
        return Re.clearTimeout(t);
      };
      function Mf(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = tf ? tf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function Pl(t) {
        var n = new t.constructor(t.byteLength);
        return new rs(n).set(new rs(t)), n;
      }
      function K0(t, n) {
        var i = n ? Pl(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function J0(t) {
        var n = new t.constructor(t.source, md.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function X0(t) {
        return Ro ? pe(Ro.call(t)) : {};
      }
      function Nf(t, n) {
        var i = n ? Pl(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Of(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = ht(t), v = n !== r, g = n === null, b = n === n, I = ht(n);
          if (!g && !I && !p && t > n || p && v && b && !g && !I || l && v && b || !i && b || !d)
            return 1;
          if (!l && !p && !I && t < n || I && i && d && !l && !p || g && i && d || !v && d || !b)
            return -1;
        }
        return 0;
      }
      function Q0(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, v = d.length, g = i.length; ++l < v; ) {
          var b = Of(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var I = i[l];
            return b * (I == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Pf(t, n, i, l) {
        for (var d = -1, p = t.length, v = i.length, g = -1, b = n.length, I = Te(p - v, 0), x = C(b + I), B = !l; ++g < b; )
          x[g] = n[g];
        for (; ++d < v; )
          (B || d < p) && (x[i[d]] = t[d]);
        for (; I--; )
          x[g++] = t[d++];
        return x;
      }
      function Rf(t, n, i, l) {
        for (var d = -1, p = t.length, v = -1, g = i.length, b = -1, I = n.length, x = Te(p - g, 0), B = C(x + I), P = !l; ++d < x; )
          B[d] = t[d];
        for (var W = d; ++b < I; )
          B[W + b] = n[b];
        for (; ++v < g; )
          (P || d < p) && (B[W + i[v]] = t[d++]);
        return B;
      }
      function tt(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function Qt(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, v = n.length; ++p < v; ) {
          var g = n[p], b = l ? l(i[g], t[g], g, i, t) : r;
          b === r && (b = t[g]), d ? fn(i, g, b) : Fo(i, g, b);
        }
        return i;
      }
      function e$(t, n) {
        return Qt(t, zl(t), n);
      }
      function t$(t, n) {
        return Qt(t, Xf(t), n);
      }
      function _s(t, n) {
        return function(i, l) {
          var d = Z(i) ? s1 : b0, p = n ? n() : {};
          return d(i, t, H(l, 2), p);
        };
      }
      function Rr(t) {
        return Q(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, v = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, v && Ke(i[0], i[1], v) && (p = d < 3 ? r : p, d = 1), n = pe(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function Ff(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!nt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, v = pe(i); (n ? p-- : ++p < d) && l(v[p], p, v) !== !1; )
            ;
          return i;
        };
      }
      function Uf(t) {
        return function(n, i, l) {
          for (var d = -1, p = pe(n), v = l(n), g = v.length; g--; ) {
            var b = v[t ? g : ++d];
            if (i(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function n$(t, n, i) {
        var l = n & M, d = zo(t);
        function p() {
          var v = this && this !== Re && this instanceof p ? d : t;
          return v.apply(l ? i : this, arguments);
        }
        return p;
      }
      function Wf(t) {
        return function(n) {
          n = ae(n);
          var i = Br(n) ? Ft(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Mn(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Fr(t) {
        return function(n) {
          return ul(Fh(Rh(n).replace(Yg, "")), t, "");
        };
      }
      function zo(t) {
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
          var i = Pr(t.prototype), l = t.apply(i, n);
          return ye(l) ? l : i;
        };
      }
      function r$(t, n, i) {
        var l = zo(t);
        function d() {
          for (var p = arguments.length, v = C(p), g = p, b = Ur(d); g--; )
            v[g] = arguments[g];
          var I = p < 3 && v[0] !== b && v[p - 1] !== b ? [] : An(v, b);
          if (p -= I.length, p < i)
            return Gf(
              t,
              n,
              gs,
              d.placeholder,
              r,
              v,
              I,
              r,
              r,
              i - p
            );
          var x = this && this !== Re && this instanceof d ? l : t;
          return ct(x, this, v);
        }
        return d;
      }
      function qf(t) {
        return function(n, i, l) {
          var d = pe(n);
          if (!nt(n)) {
            var p = H(i, 3);
            n = Le(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var v = t(n, i, l);
          return v > -1 ? d[p ? n[v] : v] : r;
        };
      }
      function Hf(t) {
        return pn(function(n) {
          var i = n.length, l = i, d = Et.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new St(c);
            if (d && !v && bs(p) == "wrapper")
              var v = new Et([], !0);
          }
          for (l = v ? l : i; ++l < i; ) {
            p = n[l];
            var g = bs(p), b = g == "wrapper" ? ql(p) : r;
            b && Gl(b[0]) && b[1] == (R | A | k | q) && !b[4].length && b[9] == 1 ? v = v[bs(b[0])].apply(v, b[3]) : v = p.length == 1 && Gl(p) ? v[g]() : v.thru(p);
          }
          return function() {
            var I = arguments, x = I[0];
            if (v && I.length == 1 && Z(x))
              return v.plant(x).value();
            for (var B = 0, P = i ? n[B].apply(this, I) : x; ++B < i; )
              P = n[B].call(this, P);
            return P;
          };
        });
      }
      function gs(t, n, i, l, d, p, v, g, b, I) {
        var x = n & R, B = n & M, P = n & S, W = n & (A | O), z = n & ge, J = P ? r : zo(t);
        function Y() {
          for (var ee = arguments.length, ne = C(ee), pt = ee; pt--; )
            ne[pt] = arguments[pt];
          if (W)
            var Je = Ur(Y), wt = w1(ne, Je);
          if (l && (ne = Pf(ne, l, d, W)), p && (ne = Rf(ne, p, v, W)), ee -= wt, W && ee < I) {
            var Ee = An(ne, Je);
            return Gf(
              t,
              n,
              gs,
              Y.placeholder,
              i,
              ne,
              Ee,
              g,
              b,
              I - ee
            );
          }
          var qt = B ? i : this, _n = P ? qt[t] : t;
          return ee = ne.length, g ? ne = b$(ne, g) : z && ee > 1 && ne.reverse(), x && b < ee && (ne.length = b), this && this !== Re && this instanceof Y && (_n = J || zo(_n)), _n.apply(qt, ne);
        }
        return Y;
      }
      function zf(t, n) {
        return function(i, l) {
          return T0(i, t, n(l), {});
        };
      }
      function $s(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = ft(i), l = ft(l)) : (i = Af(i), l = Af(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Rl(t) {
        return pn(function(n) {
          return n = $e(n, dt(H())), Q(function(i) {
            var l = this;
            return t(n, function(d) {
              return ct(d, l, i);
            });
          });
        });
      }
      function ys(t, n) {
        n = n === r ? " " : ft(n);
        var i = n.length;
        if (i < 2)
          return i ? Bl(n, t) : n;
        var l = Bl(n, as(t / Dr(n)));
        return Br(n) ? Mn(Ft(l), 0, t).join("") : l.slice(0, t);
      }
      function o$(t, n, i, l) {
        var d = n & M, p = zo(t);
        function v() {
          for (var g = -1, b = arguments.length, I = -1, x = l.length, B = C(x + b), P = this && this !== Re && this instanceof v ? p : t; ++I < x; )
            B[I] = l[I];
          for (; b--; )
            B[I++] = arguments[++g];
          return ct(P, d ? i : this, B);
        }
        return v;
      }
      function Yf(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Ke(n, i, l) && (i = l = r), n = mn(n), i === r ? (i = n, n = 0) : i = mn(i), l = l === r ? n < i ? 1 : -1 : mn(l), q0(n, i, l, t);
        };
      }
      function Vs(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = At(n), i = At(i)), t(n, i);
        };
      }
      function Gf(t, n, i, l, d, p, v, g, b, I) {
        var x = n & A, B = x ? v : r, P = x ? r : v, W = x ? p : r, z = x ? r : p;
        n |= x ? k : F, n &= ~(x ? F : k), n & L || (n &= ~(M | S));
        var J = [
          t,
          n,
          d,
          W,
          B,
          z,
          P,
          g,
          b,
          I
        ], Y = i.apply(r, J);
        return Gl(t) && ih(Y, J), Y.placeholder = l, sh(Y, t, n);
      }
      function Fl(t) {
        var n = Ae[t];
        return function(i, l) {
          if (i = At(i), l = l == null ? 0 : He(K(l), 292), l && sf(i)) {
            var d = (ae(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (ae(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var i$ = Nr && 1 / Ji(new Nr([, -0]))[1] == Pe ? function(t) {
        return new Nr(t);
      } : lu;
      function jf(t) {
        return function(n) {
          var i = ze(n);
          return i == Pt ? vl(n) : i == Rt ? V1(n) : p1(n, t(n));
        };
      }
      function hn(t, n, i, l, d, p, v, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new St(c);
        var I = l ? l.length : 0;
        if (I || (n &= ~(k | F), l = d = r), v = v === r ? v : Te(K(v), 0), g = g === r ? g : K(g), I -= d ? d.length : 0, n & F) {
          var x = l, B = d;
          l = d = r;
        }
        var P = b ? r : ql(t), W = [
          t,
          n,
          i,
          l,
          d,
          x,
          B,
          p,
          v,
          g
        ];
        if (P && $$(W, P), t = W[0], n = W[1], i = W[2], l = W[3], d = W[4], g = W[9] = W[9] === r ? b ? 0 : t.length : Te(W[9] - I, 0), !g && n & (A | O) && (n &= ~(A | O)), !n || n == M)
          var z = n$(t, n, i);
        else
          n == A || n == O ? z = r$(t, n, g) : (n == k || n == (M | k)) && !d.length ? z = o$(t, n, i, l) : z = gs.apply(r, W);
        var J = P ? kf : ih;
        return sh(J(z, W), t, n);
      }
      function Zf(t, n, i, l) {
        return t === r || Wt(t, Mr[i]) && !le.call(l, i) ? n : t;
      }
      function Kf(t, n, i, l, d, p) {
        return ye(t) && ye(n) && (p.set(n, t), ws(t, n, r, Kf, p), p.delete(n)), t;
      }
      function s$(t) {
        return jo(t) ? r : t;
      }
      function Jf(t, n, i, l, d, p) {
        var v = i & D, g = t.length, b = n.length;
        if (g != b && !(v && b > g))
          return !1;
        var I = p.get(t), x = p.get(n);
        if (I && x)
          return I == n && x == t;
        var B = -1, P = !0, W = i & N ? new tr() : r;
        for (p.set(t, n), p.set(n, t); ++B < g; ) {
          var z = t[B], J = n[B];
          if (l)
            var Y = v ? l(J, z, B, n, t, p) : l(z, J, B, t, n, p);
          if (Y !== r) {
            if (Y)
              continue;
            P = !1;
            break;
          }
          if (W) {
            if (!cl(n, function(ee, ne) {
              if (!Lo(W, ne) && (z === ee || d(z, ee, i, l, p)))
                return W.push(ne);
            })) {
              P = !1;
              break;
            }
          } else if (!(z === J || d(z, J, i, l, p))) {
            P = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), P;
      }
      function a$(t, n, i, l, d, p, v) {
        switch (i) {
          case xr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Do:
            return !(t.byteLength != n.byteLength || !p(new rs(t), new rs(n)));
          case Io:
          case ko:
          case xo:
            return Wt(+t, +n);
          case qi:
            return t.name == n.name && t.message == n.message;
          case Ao:
          case To:
            return t == n + "";
          case Pt:
            var g = vl;
          case Rt:
            var b = l & D;
            if (g || (g = Ji), t.size != n.size && !b)
              return !1;
            var I = v.get(t);
            if (I)
              return I == n;
            l |= N, v.set(t, n);
            var x = Jf(g(t), g(n), l, d, p, v);
            return v.delete(t), x;
          case zi:
            if (Ro)
              return Ro.call(t) == Ro.call(n);
        }
        return !1;
      }
      function l$(t, n, i, l, d, p) {
        var v = i & D, g = Ul(t), b = g.length, I = Ul(n), x = I.length;
        if (b != x && !v)
          return !1;
        for (var B = b; B--; ) {
          var P = g[B];
          if (!(v ? P in n : le.call(n, P)))
            return !1;
        }
        var W = p.get(t), z = p.get(n);
        if (W && z)
          return W == n && z == t;
        var J = !0;
        p.set(t, n), p.set(n, t);
        for (var Y = v; ++B < b; ) {
          P = g[B];
          var ee = t[P], ne = n[P];
          if (l)
            var pt = v ? l(ne, ee, P, n, t, p) : l(ee, ne, P, t, n, p);
          if (!(pt === r ? ee === ne || d(ee, ne, i, l, p) : pt)) {
            J = !1;
            break;
          }
          Y || (Y = P == "constructor");
        }
        if (J && !Y) {
          var Je = t.constructor, wt = n.constructor;
          Je != wt && "constructor" in t && "constructor" in n && !(typeof Je == "function" && Je instanceof Je && typeof wt == "function" && wt instanceof wt) && (J = !1);
        }
        return p.delete(t), p.delete(n), J;
      }
      function pn(t) {
        return Zl(rh(t, r, fh), t + "");
      }
      function Ul(t) {
        return mf(t, Le, zl);
      }
      function Wl(t) {
        return mf(t, rt, Xf);
      }
      var ql = us ? function(t) {
        return us.get(t);
      } : lu;
      function bs(t) {
        for (var n = t.name + "", i = Or[n], l = le.call(Or, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function Ur(t) {
        var n = le.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function H() {
        var t = h.iteratee || su;
        return t = t === su ? $f : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Cs(t, n) {
        var i = t.__data__;
        return v$(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function Hl(t) {
        for (var n = Le(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, th(d)];
        }
        return n;
      }
      function or(t, n) {
        var i = g1(t, n);
        return gf(i) ? i : r;
      }
      function u$(t) {
        var n = le.call(t, Qn), i = t[Qn];
        try {
          t[Qn] = r;
          var l = !0;
        } catch {
        }
        var d = ts.call(t);
        return l && (n ? t[Qn] = i : delete t[Qn]), d;
      }
      var zl = _l ? function(t) {
        return t == null ? [] : (t = pe(t), kn(_l(t), function(n) {
          return rf.call(t, n);
        }));
      } : uu, Xf = _l ? function(t) {
        for (var n = []; t; )
          xn(n, zl(t)), t = os(t);
        return n;
      } : uu, ze = Ze;
      (gl && ze(new gl(new ArrayBuffer(1))) != xr || No && ze(new No()) != Pt || $l && ze($l.resolve()) != hd || Nr && ze(new Nr()) != Rt || Oo && ze(new Oo()) != Bo) && (ze = function(t) {
        var n = Ze(t), i = n == un ? t.constructor : r, l = i ? ir(i) : "";
        if (l)
          switch (l) {
            case z1:
              return xr;
            case Y1:
              return Pt;
            case G1:
              return hd;
            case j1:
              return Rt;
            case Z1:
              return Bo;
          }
        return n;
      });
      function c$(t, n, i) {
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
              n = He(n, t + v);
              break;
            case "takeRight":
              t = Te(t, n - v);
              break;
          }
        }
        return { start: t, end: n };
      }
      function d$(t) {
        var n = t.match(mg);
        return n ? n[1].split(_g) : [];
      }
      function Qf(t, n, i) {
        n = Ln(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var v = en(n[l]);
          if (!(p = t != null && i(t, v)))
            break;
          t = t[v];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Ts(d) && wn(v, d) && (Z(t) || sr(t)));
      }
      function f$(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && le.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function eh(t) {
        return typeof t.constructor == "function" && !Yo(t) ? Pr(os(t)) : {};
      }
      function h$(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case Do:
            return Pl(t);
          case Io:
          case ko:
            return new l(+t);
          case xr:
            return K0(t, i);
          case Ha:
          case za:
          case Ya:
          case Ga:
          case ja:
          case Za:
          case Ka:
          case Ja:
          case Xa:
            return Nf(t, i);
          case Pt:
            return new l();
          case xo:
          case To:
            return new l(t);
          case Ao:
            return J0(t);
          case Rt:
            return new l();
          case zi:
            return X0(t);
        }
      }
      function p$(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(vg, `{
/* [wrapped with ` + n + `] */
`);
      }
      function w$(t) {
        return Z(t) || sr(t) || !!(of && t && t[of]);
      }
      function wn(t, n) {
        var i = typeof t;
        return n = n == null ? je : n, !!n && (i == "number" || i != "symbol" && Ig.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Ke(t, n, i) {
        if (!ye(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? nt(i) && wn(n, i.length) : l == "string" && n in i) ? Wt(i[n], t) : !1;
      }
      function Yl(t, n) {
        if (Z(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || ht(t) ? !0 : fg.test(t) || !dg.test(t) || n != null && t in pe(n);
      }
      function v$(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Gl(t) {
        var n = bs(t), i = h[n];
        if (typeof i != "function" || !(n in te.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = ql(i);
        return !!l && t === l[0];
      }
      function m$(t) {
        return !!ef && ef in t;
      }
      var _$ = Qi ? vn : cu;
      function Yo(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || Mr;
        return t === i;
      }
      function th(t) {
        return t === t && !ye(t);
      }
      function nh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in pe(i));
        };
      }
      function g$(t) {
        var n = xs(t, function(l) {
          return i.size === m && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function $$(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (M | S | R), v = l == R && i == A || l == R && i == q && t[7].length <= n[8] || l == (R | q) && n[7].length <= n[8] && i == A;
        if (!(p || v))
          return t;
        l & M && (t[2] = n[2], d |= i & M ? 0 : L);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? Pf(b, g, n[4]) : g, t[4] = b ? An(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? Rf(b, g, n[6]) : g, t[6] = b ? An(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & R && (t[8] = t[8] == null ? n[8] : He(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function y$(t) {
        var n = [];
        if (t != null)
          for (var i in pe(t))
            n.push(i);
        return n;
      }
      function V$(t) {
        return ts.call(t);
      }
      function rh(t, n, i) {
        return n = Te(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = Te(l.length - n, 0), v = C(p); ++d < p; )
            v[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(v), ct(t, this, g);
        };
      }
      function oh(t, n) {
        return n.length < 2 ? t : rr(t, kt(n, 0, -1));
      }
      function b$(t, n) {
        for (var i = t.length, l = He(n.length, i), d = tt(t); l--; ) {
          var p = n[l];
          t[l] = wn(p, i) ? d[p] : r;
        }
        return t;
      }
      function jl(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var ih = ah(kf), Go = P1 || function(t, n) {
        return Re.setTimeout(t, n);
      }, Zl = ah(Y0);
      function sh(t, n, i) {
        var l = n + "";
        return Zl(t, p$(l, C$(d$(l), i)));
      }
      function ah(t) {
        var n = 0, i = 0;
        return function() {
          var l = W1(), d = Ce - (l - i);
          if (i = l, d > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Ss(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = Tl(i, d), v = t[p];
          t[p] = t[i], t[i] = v;
        }
        return t.length = n, t;
      }
      var lh = g$(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(hg, function(i, l, d, p) {
          n.push(d ? p.replace(yg, "$1") : l || i);
        }), n;
      });
      function en(t) {
        if (typeof t == "string" || ht(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Pe ? "-0" : n;
      }
      function ir(t) {
        if (t != null) {
          try {
            return es.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function C$(t, n) {
        return Ct(J_, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Zi(t, l) && t.push(l);
        }), t.sort();
      }
      function uh(t) {
        if (t instanceof te)
          return t.clone();
        var n = new Et(t.__wrapped__, t.__chain__);
        return n.__actions__ = tt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function S$(t, n, i) {
        (i ? Ke(t, n, i) : n === r) ? n = 1 : n = Te(K(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, v = C(as(l / n)); d < l; )
          v[p++] = kt(t, d, d += n);
        return v;
      }
      function E$(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function I$() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return xn(Z(i) ? tt(i) : [i], Fe(n, 1));
      }
      var k$ = Q(function(t, n) {
        return Se(t) ? Uo(t, Fe(n, 1, Se, !0)) : [];
      }), x$ = Q(function(t, n) {
        var i = xt(n);
        return Se(i) && (i = r), Se(t) ? Uo(t, Fe(n, 1, Se, !0), H(i, 2)) : [];
      }), A$ = Q(function(t, n) {
        var i = xt(n);
        return Se(i) && (i = r), Se(t) ? Uo(t, Fe(n, 1, Se, !0), r, i) : [];
      });
      function T$(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), kt(t, n < 0 ? 0 : n, l)) : [];
      }
      function B$(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), n = l - n, kt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function D$(t, n) {
        return t && t.length ? ms(t, H(n, 3), !0, !0) : [];
      }
      function L$(t, n) {
        return t && t.length ? ms(t, H(n, 3), !0) : [];
      }
      function M$(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Ke(t, n, i) && (i = 0, l = d), I0(t, n, i, l)) : [];
      }
      function ch(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : K(i);
        return d < 0 && (d = Te(l + d, 0)), Ki(t, H(n, 3), d);
      }
      function dh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = K(i), d = i < 0 ? Te(l + d, 0) : He(d, l - 1)), Ki(t, H(n, 3), d, !0);
      }
      function fh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Fe(t, 1) : [];
      }
      function N$(t) {
        var n = t == null ? 0 : t.length;
        return n ? Fe(t, Pe) : [];
      }
      function O$(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : K(n), Fe(t, n)) : [];
      }
      function P$(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function hh(t) {
        return t && t.length ? t[0] : r;
      }
      function R$(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : K(i);
        return d < 0 && (d = Te(l + d, 0)), Tr(t, n, d);
      }
      function F$(t) {
        var n = t == null ? 0 : t.length;
        return n ? kt(t, 0, -1) : [];
      }
      var U$ = Q(function(t) {
        var n = $e(t, Nl);
        return n.length && n[0] === t[0] ? El(n) : [];
      }), W$ = Q(function(t) {
        var n = xt(t), i = $e(t, Nl);
        return n === xt(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? El(i, H(n, 2)) : [];
      }), q$ = Q(function(t) {
        var n = xt(t), i = $e(t, Nl);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? El(i, r, n) : [];
      });
      function H$(t, n) {
        return t == null ? "" : F1.call(t, n);
      }
      function xt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function z$(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = K(i), d = d < 0 ? Te(l + d, 0) : He(d, l - 1)), n === n ? C1(t, n, d) : Ki(t, Yd, d, !0);
      }
      function Y$(t, n) {
        return t && t.length ? Cf(t, K(n)) : r;
      }
      var G$ = Q(ph);
      function ph(t, n) {
        return t && t.length && n && n.length ? Al(t, n) : t;
      }
      function j$(t, n, i) {
        return t && t.length && n && n.length ? Al(t, n, H(i, 2)) : t;
      }
      function Z$(t, n, i) {
        return t && t.length && n && n.length ? Al(t, n, r, i) : t;
      }
      var K$ = pn(function(t, n) {
        var i = t == null ? 0 : t.length, l = Vl(t, n);
        return If(t, $e(n, function(d) {
          return wn(d, i) ? +d : d;
        }).sort(Of)), l;
      });
      function J$(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = H(n, 3); ++l < p; ) {
          var v = t[l];
          n(v, l, t) && (i.push(v), d.push(l));
        }
        return If(t, d), i;
      }
      function Kl(t) {
        return t == null ? t : H1.call(t);
      }
      function X$(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Ke(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : K(n), i = i === r ? l : K(i)), kt(t, n, i)) : [];
      }
      function Q$(t, n) {
        return vs(t, n);
      }
      function ey(t, n, i) {
        return Dl(t, n, H(i, 2));
      }
      function ty(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = vs(t, n);
          if (l < i && Wt(t[l], n))
            return l;
        }
        return -1;
      }
      function ny(t, n) {
        return vs(t, n, !0);
      }
      function ry(t, n, i) {
        return Dl(t, n, H(i, 2), !0);
      }
      function oy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = vs(t, n, !0) - 1;
          if (Wt(t[l], n))
            return l;
        }
        return -1;
      }
      function iy(t) {
        return t && t.length ? xf(t) : [];
      }
      function sy(t, n) {
        return t && t.length ? xf(t, H(n, 2)) : [];
      }
      function ay(t) {
        var n = t == null ? 0 : t.length;
        return n ? kt(t, 1, n) : [];
      }
      function ly(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : K(n), kt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function uy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), n = l - n, kt(t, n < 0 ? 0 : n, l)) : [];
      }
      function cy(t, n) {
        return t && t.length ? ms(t, H(n, 3), !1, !0) : [];
      }
      function dy(t, n) {
        return t && t.length ? ms(t, H(n, 3)) : [];
      }
      var fy = Q(function(t) {
        return Dn(Fe(t, 1, Se, !0));
      }), hy = Q(function(t) {
        var n = xt(t);
        return Se(n) && (n = r), Dn(Fe(t, 1, Se, !0), H(n, 2));
      }), py = Q(function(t) {
        var n = xt(t);
        return n = typeof n == "function" ? n : r, Dn(Fe(t, 1, Se, !0), r, n);
      });
      function wy(t) {
        return t && t.length ? Dn(t) : [];
      }
      function vy(t, n) {
        return t && t.length ? Dn(t, H(n, 2)) : [];
      }
      function my(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Dn(t, r, n) : [];
      }
      function Jl(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = kn(t, function(i) {
          if (Se(i))
            return n = Te(i.length, n), !0;
        }), pl(n, function(i) {
          return $e(t, dl(i));
        });
      }
      function wh(t, n) {
        if (!(t && t.length))
          return [];
        var i = Jl(t);
        return n == null ? i : $e(i, function(l) {
          return ct(n, r, l);
        });
      }
      var _y = Q(function(t, n) {
        return Se(t) ? Uo(t, n) : [];
      }), gy = Q(function(t) {
        return Ml(kn(t, Se));
      }), $y = Q(function(t) {
        var n = xt(t);
        return Se(n) && (n = r), Ml(kn(t, Se), H(n, 2));
      }), yy = Q(function(t) {
        var n = xt(t);
        return n = typeof n == "function" ? n : r, Ml(kn(t, Se), r, n);
      }), Vy = Q(Jl);
      function by(t, n) {
        return Df(t || [], n || [], Fo);
      }
      function Cy(t, n) {
        return Df(t || [], n || [], Ho);
      }
      var Sy = Q(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, wh(t, i);
      });
      function vh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function Ey(t, n) {
        return n(t), t;
      }
      function Es(t, n) {
        return n(t);
      }
      var Iy = pn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Vl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof te) || !wn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Es,
          args: [d],
          thisArg: r
        }), new Et(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function ky() {
        return vh(this);
      }
      function xy() {
        return new Et(this.value(), this.__chain__);
      }
      function Ay() {
        this.__values__ === r && (this.__values__ = Ah(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function Ty() {
        return this;
      }
      function By(t) {
        for (var n, i = this; i instanceof ds; ) {
          var l = uh(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function Dy() {
        var t = this.__wrapped__;
        if (t instanceof te) {
          var n = t;
          return this.__actions__.length && (n = new te(this)), n = n.reverse(), n.__actions__.push({
            func: Es,
            args: [Kl],
            thisArg: r
          }), new Et(n, this.__chain__);
        }
        return this.thru(Kl);
      }
      function Ly() {
        return Bf(this.__wrapped__, this.__actions__);
      }
      var My = _s(function(t, n, i) {
        le.call(t, i) ? ++t[i] : fn(t, i, 1);
      });
      function Ny(t, n, i) {
        var l = Z(t) ? Hd : E0;
        return i && Ke(t, n, i) && (n = r), l(t, H(n, 3));
      }
      function Oy(t, n) {
        var i = Z(t) ? kn : wf;
        return i(t, H(n, 3));
      }
      var Py = qf(ch), Ry = qf(dh);
      function Fy(t, n) {
        return Fe(Is(t, n), 1);
      }
      function Uy(t, n) {
        return Fe(Is(t, n), Pe);
      }
      function Wy(t, n, i) {
        return i = i === r ? 1 : K(i), Fe(Is(t, n), i);
      }
      function mh(t, n) {
        var i = Z(t) ? Ct : Bn;
        return i(t, H(n, 3));
      }
      function _h(t, n) {
        var i = Z(t) ? a1 : pf;
        return i(t, H(n, 3));
      }
      var qy = _s(function(t, n, i) {
        le.call(t, i) ? t[i].push(n) : fn(t, i, [n]);
      });
      function Hy(t, n, i, l) {
        t = nt(t) ? t : qr(t), i = i && !l ? K(i) : 0;
        var d = t.length;
        return i < 0 && (i = Te(d + i, 0)), Bs(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Tr(t, n, i) > -1;
      }
      var zy = Q(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = nt(t) ? C(t.length) : [];
        return Bn(t, function(v) {
          p[++l] = d ? ct(n, v, i) : Wo(v, n, i);
        }), p;
      }), Yy = _s(function(t, n, i) {
        fn(t, i, n);
      });
      function Is(t, n) {
        var i = Z(t) ? $e : yf;
        return i(t, H(n, 3));
      }
      function Gy(t, n, i, l) {
        return t == null ? [] : (Z(n) || (n = n == null ? [] : [n]), i = l ? r : i, Z(i) || (i = i == null ? [] : [i]), Sf(t, n, i));
      }
      var jy = _s(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Zy(t, n, i) {
        var l = Z(t) ? ul : jd, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, Bn);
      }
      function Ky(t, n, i) {
        var l = Z(t) ? l1 : jd, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, pf);
      }
      function Jy(t, n) {
        var i = Z(t) ? kn : wf;
        return i(t, As(H(n, 3)));
      }
      function Xy(t) {
        var n = Z(t) ? cf : H0;
        return n(t);
      }
      function Qy(t, n, i) {
        (i ? Ke(t, n, i) : n === r) ? n = 1 : n = K(n);
        var l = Z(t) ? y0 : z0;
        return l(t, n);
      }
      function eV(t) {
        var n = Z(t) ? V0 : G0;
        return n(t);
      }
      function tV(t) {
        if (t == null)
          return 0;
        if (nt(t))
          return Bs(t) ? Dr(t) : t.length;
        var n = ze(t);
        return n == Pt || n == Rt ? t.size : kl(t).length;
      }
      function nV(t, n, i) {
        var l = Z(t) ? cl : j0;
        return i && Ke(t, n, i) && (n = r), l(t, H(n, 3));
      }
      var rV = Q(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Ke(t, n[0], n[1]) ? n = [] : i > 2 && Ke(n[0], n[1], n[2]) && (n = [n[0]]), Sf(t, Fe(n, 1), []);
      }), ks = O1 || function() {
        return Re.Date.now();
      };
      function oV(t, n) {
        if (typeof n != "function")
          throw new St(c);
        return t = K(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function gh(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, hn(t, R, r, r, r, r, n);
      }
      function $h(t, n) {
        var i;
        if (typeof n != "function")
          throw new St(c);
        return t = K(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var Xl = Q(function(t, n, i) {
        var l = M;
        if (i.length) {
          var d = An(i, Ur(Xl));
          l |= k;
        }
        return hn(t, l, n, i, d);
      }), yh = Q(function(t, n, i) {
        var l = M | S;
        if (i.length) {
          var d = An(i, Ur(yh));
          l |= k;
        }
        return hn(n, l, t, i, d);
      });
      function Vh(t, n, i) {
        n = i ? r : n;
        var l = hn(t, A, r, r, r, r, r, n);
        return l.placeholder = Vh.placeholder, l;
      }
      function bh(t, n, i) {
        n = i ? r : n;
        var l = hn(t, O, r, r, r, r, r, n);
        return l.placeholder = bh.placeholder, l;
      }
      function Ch(t, n, i) {
        var l, d, p, v, g, b, I = 0, x = !1, B = !1, P = !0;
        if (typeof t != "function")
          throw new St(c);
        n = At(n) || 0, ye(i) && (x = !!i.leading, B = "maxWait" in i, p = B ? Te(At(i.maxWait) || 0, n) : p, P = "trailing" in i ? !!i.trailing : P);
        function W(Ee) {
          var qt = l, _n = d;
          return l = d = r, I = Ee, v = t.apply(_n, qt), v;
        }
        function z(Ee) {
          return I = Ee, g = Go(ee, n), x ? W(Ee) : v;
        }
        function J(Ee) {
          var qt = Ee - b, _n = Ee - I, qh = n - qt;
          return B ? He(qh, p - _n) : qh;
        }
        function Y(Ee) {
          var qt = Ee - b, _n = Ee - I;
          return b === r || qt >= n || qt < 0 || B && _n >= p;
        }
        function ee() {
          var Ee = ks();
          if (Y(Ee))
            return ne(Ee);
          g = Go(ee, J(Ee));
        }
        function ne(Ee) {
          return g = r, P && l ? W(Ee) : (l = d = r, v);
        }
        function pt() {
          g !== r && Lf(g), I = 0, l = b = d = g = r;
        }
        function Je() {
          return g === r ? v : ne(ks());
        }
        function wt() {
          var Ee = ks(), qt = Y(Ee);
          if (l = arguments, d = this, b = Ee, qt) {
            if (g === r)
              return z(b);
            if (B)
              return Lf(g), g = Go(ee, n), W(b);
          }
          return g === r && (g = Go(ee, n)), v;
        }
        return wt.cancel = pt, wt.flush = Je, wt;
      }
      var iV = Q(function(t, n) {
        return hf(t, 1, n);
      }), sV = Q(function(t, n, i) {
        return hf(t, At(n) || 0, i);
      });
      function aV(t) {
        return hn(t, ge);
      }
      function xs(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new St(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var v = t.apply(this, l);
          return i.cache = p.set(d, v) || p, v;
        };
        return i.cache = new (xs.Cache || dn)(), i;
      }
      xs.Cache = dn;
      function As(t) {
        if (typeof t != "function")
          throw new St(c);
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
      function lV(t) {
        return $h(2, t);
      }
      var uV = Z0(function(t, n) {
        n = n.length == 1 && Z(n[0]) ? $e(n[0], dt(H())) : $e(Fe(n, 1), dt(H()));
        var i = n.length;
        return Q(function(l) {
          for (var d = -1, p = He(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return ct(t, this, l);
        });
      }), Ql = Q(function(t, n) {
        var i = An(n, Ur(Ql));
        return hn(t, k, r, n, i);
      }), Sh = Q(function(t, n) {
        var i = An(n, Ur(Sh));
        return hn(t, F, r, n, i);
      }), cV = pn(function(t, n) {
        return hn(t, q, r, r, r, n);
      });
      function dV(t, n) {
        if (typeof t != "function")
          throw new St(c);
        return n = n === r ? n : K(n), Q(t, n);
      }
      function fV(t, n) {
        if (typeof t != "function")
          throw new St(c);
        return n = n == null ? 0 : Te(K(n), 0), Q(function(i) {
          var l = i[n], d = Mn(i, 0, n);
          return l && xn(d, l), ct(t, this, d);
        });
      }
      function hV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new St(c);
        return ye(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Ch(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function pV(t) {
        return gh(t, 1);
      }
      function wV(t, n) {
        return Ql(Ol(n), t);
      }
      function vV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Z(t) ? t : [t];
      }
      function mV(t) {
        return It(t, T);
      }
      function _V(t, n) {
        return n = typeof n == "function" ? n : r, It(t, T, n);
      }
      function gV(t) {
        return It(t, y | T);
      }
      function $V(t, n) {
        return n = typeof n == "function" ? n : r, It(t, y | T, n);
      }
      function yV(t, n) {
        return n == null || ff(t, n, Le(n));
      }
      function Wt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var VV = Vs(Sl), bV = Vs(function(t, n) {
        return t >= n;
      }), sr = _f(function() {
        return arguments;
      }()) ? _f : function(t) {
        return be(t) && le.call(t, "callee") && !rf.call(t, "callee");
      }, Z = C.isArray, CV = Pd ? dt(Pd) : B0;
      function nt(t) {
        return t != null && Ts(t.length) && !vn(t);
      }
      function Se(t) {
        return be(t) && nt(t);
      }
      function SV(t) {
        return t === !0 || t === !1 || be(t) && Ze(t) == Io;
      }
      var Nn = R1 || cu, EV = Rd ? dt(Rd) : D0;
      function IV(t) {
        return be(t) && t.nodeType === 1 && !jo(t);
      }
      function kV(t) {
        if (t == null)
          return !0;
        if (nt(t) && (Z(t) || typeof t == "string" || typeof t.splice == "function" || Nn(t) || Wr(t) || sr(t)))
          return !t.length;
        var n = ze(t);
        if (n == Pt || n == Rt)
          return !t.size;
        if (Yo(t))
          return !kl(t).length;
        for (var i in t)
          if (le.call(t, i))
            return !1;
        return !0;
      }
      function xV(t, n) {
        return qo(t, n);
      }
      function AV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? qo(t, n, r, i) : !!l;
      }
      function eu(t) {
        if (!be(t))
          return !1;
        var n = Ze(t);
        return n == qi || n == Q_ || typeof t.message == "string" && typeof t.name == "string" && !jo(t);
      }
      function TV(t) {
        return typeof t == "number" && sf(t);
      }
      function vn(t) {
        if (!ye(t))
          return !1;
        var n = Ze(t);
        return n == Hi || n == fd || n == X_ || n == tg;
      }
      function Eh(t) {
        return typeof t == "number" && t == K(t);
      }
      function Ts(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= je;
      }
      function ye(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function be(t) {
        return t != null && typeof t == "object";
      }
      var Ih = Fd ? dt(Fd) : M0;
      function BV(t, n) {
        return t === n || Il(t, n, Hl(n));
      }
      function DV(t, n, i) {
        return i = typeof i == "function" ? i : r, Il(t, n, Hl(n), i);
      }
      function LV(t) {
        return kh(t) && t != +t;
      }
      function MV(t) {
        if (_$(t))
          throw new j(u);
        return gf(t);
      }
      function NV(t) {
        return t === null;
      }
      function OV(t) {
        return t == null;
      }
      function kh(t) {
        return typeof t == "number" || be(t) && Ze(t) == xo;
      }
      function jo(t) {
        if (!be(t) || Ze(t) != un)
          return !1;
        var n = os(t);
        if (n === null)
          return !0;
        var i = le.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && es.call(i) == D1;
      }
      var tu = Ud ? dt(Ud) : N0;
      function PV(t) {
        return Eh(t) && t >= -je && t <= je;
      }
      var xh = Wd ? dt(Wd) : O0;
      function Bs(t) {
        return typeof t == "string" || !Z(t) && be(t) && Ze(t) == To;
      }
      function ht(t) {
        return typeof t == "symbol" || be(t) && Ze(t) == zi;
      }
      var Wr = qd ? dt(qd) : P0;
      function RV(t) {
        return t === r;
      }
      function FV(t) {
        return be(t) && ze(t) == Bo;
      }
      function UV(t) {
        return be(t) && Ze(t) == rg;
      }
      var WV = Vs(xl), qV = Vs(function(t, n) {
        return t <= n;
      });
      function Ah(t) {
        if (!t)
          return [];
        if (nt(t))
          return Bs(t) ? Ft(t) : tt(t);
        if (Mo && t[Mo])
          return y1(t[Mo]());
        var n = ze(t), i = n == Pt ? vl : n == Rt ? Ji : qr;
        return i(t);
      }
      function mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = At(t), t === Pe || t === -Pe) {
          var n = t < 0 ? -1 : 1;
          return n * Eo;
        }
        return t === t ? t : 0;
      }
      function K(t) {
        var n = mn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Th(t) {
        return t ? nr(K(t), 0, Jt) : 0;
      }
      function At(t) {
        if (typeof t == "number")
          return t;
        if (ht(t))
          return Ui;
        if (ye(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = ye(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Zd(t);
        var i = Cg.test(t);
        return i || Eg.test(t) ? o1(t.slice(2), i ? 2 : 8) : bg.test(t) ? Ui : +t;
      }
      function Bh(t) {
        return Qt(t, rt(t));
      }
      function HV(t) {
        return t ? nr(K(t), -je, je) : t === 0 ? t : 0;
      }
      function ae(t) {
        return t == null ? "" : ft(t);
      }
      var zV = Rr(function(t, n) {
        if (Yo(n) || nt(n)) {
          Qt(n, Le(n), t);
          return;
        }
        for (var i in n)
          le.call(n, i) && Fo(t, i, n[i]);
      }), Dh = Rr(function(t, n) {
        Qt(n, rt(n), t);
      }), Ds = Rr(function(t, n, i, l) {
        Qt(n, rt(n), t, l);
      }), YV = Rr(function(t, n, i, l) {
        Qt(n, Le(n), t, l);
      }), GV = pn(Vl);
      function jV(t, n) {
        var i = Pr(t);
        return n == null ? i : df(i, n);
      }
      var ZV = Q(function(t, n) {
        t = pe(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Ke(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], v = rt(p), g = -1, b = v.length; ++g < b; ) {
            var I = v[g], x = t[I];
            (x === r || Wt(x, Mr[I]) && !le.call(t, I)) && (t[I] = p[I]);
          }
        return t;
      }), KV = Q(function(t) {
        return t.push(r, Kf), ct(Lh, r, t);
      });
      function JV(t, n) {
        return zd(t, H(n, 3), Xt);
      }
      function XV(t, n) {
        return zd(t, H(n, 3), Cl);
      }
      function QV(t, n) {
        return t == null ? t : bl(t, H(n, 3), rt);
      }
      function eb(t, n) {
        return t == null ? t : vf(t, H(n, 3), rt);
      }
      function tb(t, n) {
        return t && Xt(t, H(n, 3));
      }
      function nb(t, n) {
        return t && Cl(t, H(n, 3));
      }
      function rb(t) {
        return t == null ? [] : ps(t, Le(t));
      }
      function ob(t) {
        return t == null ? [] : ps(t, rt(t));
      }
      function nu(t, n, i) {
        var l = t == null ? r : rr(t, n);
        return l === r ? i : l;
      }
      function ib(t, n) {
        return t != null && Qf(t, n, k0);
      }
      function ru(t, n) {
        return t != null && Qf(t, n, x0);
      }
      var sb = zf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = ts.call(n)), t[n] = i;
      }, iu(ot)), ab = zf(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = ts.call(n)), le.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, H), lb = Q(Wo);
      function Le(t) {
        return nt(t) ? uf(t) : kl(t);
      }
      function rt(t) {
        return nt(t) ? uf(t, !0) : R0(t);
      }
      function ub(t, n) {
        var i = {};
        return n = H(n, 3), Xt(t, function(l, d, p) {
          fn(i, n(l, d, p), l);
        }), i;
      }
      function cb(t, n) {
        var i = {};
        return n = H(n, 3), Xt(t, function(l, d, p) {
          fn(i, d, n(l, d, p));
        }), i;
      }
      var db = Rr(function(t, n, i) {
        ws(t, n, i);
      }), Lh = Rr(function(t, n, i, l) {
        ws(t, n, i, l);
      }), fb = pn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = $e(n, function(p) {
          return p = Ln(p, t), l || (l = p.length > 1), p;
        }), Qt(t, Wl(t), i), l && (i = It(i, y | $ | T, s$));
        for (var d = n.length; d--; )
          Ll(i, n[d]);
        return i;
      });
      function hb(t, n) {
        return Mh(t, As(H(n)));
      }
      var pb = pn(function(t, n) {
        return t == null ? {} : U0(t, n);
      });
      function Mh(t, n) {
        if (t == null)
          return {};
        var i = $e(Wl(t), function(l) {
          return [l];
        });
        return n = H(n), Ef(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function wb(t, n, i) {
        n = Ln(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[en(n[l])];
          p === r && (l = d, p = i), t = vn(p) ? p.call(t) : p;
        }
        return t;
      }
      function vb(t, n, i) {
        return t == null ? t : Ho(t, n, i);
      }
      function mb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Ho(t, n, i, l);
      }
      var Nh = jf(Le), Oh = jf(rt);
      function _b(t, n, i) {
        var l = Z(t), d = l || Nn(t) || Wr(t);
        if (n = H(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : ye(t) ? i = vn(p) ? Pr(os(t)) : {} : i = {};
        }
        return (d ? Ct : Xt)(t, function(v, g, b) {
          return n(i, v, g, b);
        }), i;
      }
      function gb(t, n) {
        return t == null ? !0 : Ll(t, n);
      }
      function $b(t, n, i) {
        return t == null ? t : Tf(t, n, Ol(i));
      }
      function yb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Tf(t, n, Ol(i), l);
      }
      function qr(t) {
        return t == null ? [] : wl(t, Le(t));
      }
      function Vb(t) {
        return t == null ? [] : wl(t, rt(t));
      }
      function bb(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = At(i), i = i === i ? i : 0), n !== r && (n = At(n), n = n === n ? n : 0), nr(At(t), n, i);
      }
      function Cb(t, n, i) {
        return n = mn(n), i === r ? (i = n, n = 0) : i = mn(i), t = At(t), A0(t, n, i);
      }
      function Sb(t, n, i) {
        if (i && typeof i != "boolean" && Ke(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = mn(t), n === r ? (n = t, t = 0) : n = mn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = af();
          return He(t + d * (n - t + r1("1e-" + ((d + "").length - 1))), n);
        }
        return Tl(t, n);
      }
      var Eb = Fr(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Ph(n) : n);
      });
      function Ph(t) {
        return ou(ae(t).toLowerCase());
      }
      function Rh(t) {
        return t = ae(t), t && t.replace(kg, v1).replace(Gg, "");
      }
      function Ib(t, n, i) {
        t = ae(t), n = ft(n);
        var l = t.length;
        i = i === r ? l : nr(K(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function kb(t) {
        return t = ae(t), t && lg.test(t) ? t.replace(wd, m1) : t;
      }
      function xb(t) {
        return t = ae(t), t && pg.test(t) ? t.replace(Qa, "\\$&") : t;
      }
      var Ab = Fr(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), Tb = Fr(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), Bb = Wf("toLowerCase");
      function Db(t, n, i) {
        t = ae(t), n = K(n);
        var l = n ? Dr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return ys(ls(d), i) + t + ys(as(d), i);
      }
      function Lb(t, n, i) {
        t = ae(t), n = K(n);
        var l = n ? Dr(t) : 0;
        return n && l < n ? t + ys(n - l, i) : t;
      }
      function Mb(t, n, i) {
        t = ae(t), n = K(n);
        var l = n ? Dr(t) : 0;
        return n && l < n ? ys(n - l, i) + t : t;
      }
      function Nb(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), q1(ae(t).replace(el, ""), n || 0);
      }
      function Ob(t, n, i) {
        return (i ? Ke(t, n, i) : n === r) ? n = 1 : n = K(n), Bl(ae(t), n);
      }
      function Pb() {
        var t = arguments, n = ae(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var Rb = Fr(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function Fb(t, n, i) {
        return i && typeof i != "number" && Ke(t, n, i) && (n = i = r), i = i === r ? Jt : i >>> 0, i ? (t = ae(t), t && (typeof n == "string" || n != null && !tu(n)) && (n = ft(n), !n && Br(t)) ? Mn(Ft(t), 0, i) : t.split(n, i)) : [];
      }
      var Ub = Fr(function(t, n, i) {
        return t + (i ? " " : "") + ou(n);
      });
      function Wb(t, n, i) {
        return t = ae(t), i = i == null ? 0 : nr(K(i), 0, t.length), n = ft(n), t.slice(i, i + n.length) == n;
      }
      function qb(t, n, i) {
        var l = h.templateSettings;
        i && Ke(t, n, i) && (n = r), t = ae(t), n = Ds({}, n, l, Zf);
        var d = Ds({}, n.imports, l.imports, Zf), p = Le(d), v = wl(d, p), g, b, I = 0, x = n.interpolate || Yi, B = "__p += '", P = ml(
          (n.escape || Yi).source + "|" + x.source + "|" + (x === vd ? Vg : Yi).source + "|" + (n.evaluate || Yi).source + "|$",
          "g"
        ), W = "//# sourceURL=" + (le.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Xg + "]") + `
`;
        t.replace(P, function(Y, ee, ne, pt, Je, wt) {
          return ne || (ne = pt), B += t.slice(I, wt).replace(xg, _1), ee && (g = !0, B += `' +
__e(` + ee + `) +
'`), Je && (b = !0, B += `';
` + Je + `;
__p += '`), ne && (B += `' +
((__t = (` + ne + `)) == null ? '' : __t) +
'`), I = wt + Y.length, Y;
        }), B += `';
`;
        var z = le.call(n, "variable") && n.variable;
        if (!z)
          B = `with (obj) {
` + B + `
}
`;
        else if ($g.test(z))
          throw new j(f);
        B = (b ? B.replace(og, "") : B).replace(ig, "$1").replace(sg, "$1;"), B = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
        var J = Uh(function() {
          return re(p, W + "return " + B).apply(r, v);
        });
        if (J.source = B, eu(J))
          throw J;
        return J;
      }
      function Hb(t) {
        return ae(t).toLowerCase();
      }
      function zb(t) {
        return ae(t).toUpperCase();
      }
      function Yb(t, n, i) {
        if (t = ae(t), t && (i || n === r))
          return Zd(t);
        if (!t || !(n = ft(n)))
          return t;
        var l = Ft(t), d = Ft(n), p = Kd(l, d), v = Jd(l, d) + 1;
        return Mn(l, p, v).join("");
      }
      function Gb(t, n, i) {
        if (t = ae(t), t && (i || n === r))
          return t.slice(0, Qd(t) + 1);
        if (!t || !(n = ft(n)))
          return t;
        var l = Ft(t), d = Jd(l, Ft(n)) + 1;
        return Mn(l, 0, d).join("");
      }
      function jb(t, n, i) {
        if (t = ae(t), t && (i || n === r))
          return t.replace(el, "");
        if (!t || !(n = ft(n)))
          return t;
        var l = Ft(t), d = Kd(l, Ft(n));
        return Mn(l, d).join("");
      }
      function Zb(t, n) {
        var i = de, l = me;
        if (ye(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? K(n.length) : i, l = "omission" in n ? ft(n.omission) : l;
        }
        t = ae(t);
        var p = t.length;
        if (Br(t)) {
          var v = Ft(t);
          p = v.length;
        }
        if (i >= p)
          return t;
        var g = i - Dr(l);
        if (g < 1)
          return l;
        var b = v ? Mn(v, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (v && (g += b.length - g), tu(d)) {
          if (t.slice(g).search(d)) {
            var I, x = b;
            for (d.global || (d = ml(d.source, ae(md.exec(d)) + "g")), d.lastIndex = 0; I = d.exec(x); )
              var B = I.index;
            b = b.slice(0, B === r ? g : B);
          }
        } else if (t.indexOf(ft(d), g) != g) {
          var P = b.lastIndexOf(d);
          P > -1 && (b = b.slice(0, P));
        }
        return b + l;
      }
      function Kb(t) {
        return t = ae(t), t && ag.test(t) ? t.replace(pd, S1) : t;
      }
      var Jb = Fr(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), ou = Wf("toUpperCase");
      function Fh(t, n, i) {
        return t = ae(t), n = i ? r : n, n === r ? $1(t) ? k1(t) : d1(t) : t.match(n) || [];
      }
      var Uh = Q(function(t, n) {
        try {
          return ct(t, r, n);
        } catch (i) {
          return eu(i) ? i : new j(i);
        }
      }), Xb = pn(function(t, n) {
        return Ct(n, function(i) {
          i = en(i), fn(t, i, Xl(t[i], t));
        }), t;
      });
      function Qb(t) {
        var n = t == null ? 0 : t.length, i = H();
        return t = n ? $e(t, function(l) {
          if (typeof l[1] != "function")
            throw new St(c);
          return [i(l[0]), l[1]];
        }) : [], Q(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (ct(p[0], this, l))
              return ct(p[1], this, l);
          }
        });
      }
      function eC(t) {
        return S0(It(t, y));
      }
      function iu(t) {
        return function() {
          return t;
        };
      }
      function tC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var nC = Hf(), rC = Hf(!0);
      function ot(t) {
        return t;
      }
      function su(t) {
        return $f(typeof t == "function" ? t : It(t, y));
      }
      function oC(t) {
        return Vf(It(t, y));
      }
      function iC(t, n) {
        return bf(t, It(n, y));
      }
      var sC = Q(function(t, n) {
        return function(i) {
          return Wo(i, t, n);
        };
      }), aC = Q(function(t, n) {
        return function(i) {
          return Wo(t, i, n);
        };
      });
      function au(t, n, i) {
        var l = Le(n), d = ps(n, l);
        i == null && !(ye(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = ps(n, Le(n)));
        var p = !(ye(i) && "chain" in i) || !!i.chain, v = vn(t);
        return Ct(d, function(g) {
          var b = n[g];
          t[g] = b, v && (t.prototype[g] = function() {
            var I = this.__chain__;
            if (p || I) {
              var x = t(this.__wrapped__), B = x.__actions__ = tt(this.__actions__);
              return B.push({ func: b, args: arguments, thisArg: t }), x.__chain__ = I, x;
            }
            return b.apply(t, xn([this.value()], arguments));
          });
        }), t;
      }
      function lC() {
        return Re._ === this && (Re._ = L1), this;
      }
      function lu() {
      }
      function uC(t) {
        return t = K(t), Q(function(n) {
          return Cf(n, t);
        });
      }
      var cC = Rl($e), dC = Rl(Hd), fC = Rl(cl);
      function Wh(t) {
        return Yl(t) ? dl(en(t)) : W0(t);
      }
      function hC(t) {
        return function(n) {
          return t == null ? r : rr(t, n);
        };
      }
      var pC = Yf(), wC = Yf(!0);
      function uu() {
        return [];
      }
      function cu() {
        return !1;
      }
      function vC() {
        return {};
      }
      function mC() {
        return "";
      }
      function _C() {
        return !0;
      }
      function gC(t, n) {
        if (t = K(t), t < 1 || t > je)
          return [];
        var i = Jt, l = He(t, Jt);
        n = H(n), t -= Jt;
        for (var d = pl(l, n); ++i < t; )
          n(i);
        return d;
      }
      function $C(t) {
        return Z(t) ? $e(t, en) : ht(t) ? [t] : tt(lh(ae(t)));
      }
      function yC(t) {
        var n = ++B1;
        return ae(t) + n;
      }
      var VC = $s(function(t, n) {
        return t + n;
      }, 0), bC = Fl("ceil"), CC = $s(function(t, n) {
        return t / n;
      }, 1), SC = Fl("floor");
      function EC(t) {
        return t && t.length ? hs(t, ot, Sl) : r;
      }
      function IC(t, n) {
        return t && t.length ? hs(t, H(n, 2), Sl) : r;
      }
      function kC(t) {
        return Gd(t, ot);
      }
      function xC(t, n) {
        return Gd(t, H(n, 2));
      }
      function AC(t) {
        return t && t.length ? hs(t, ot, xl) : r;
      }
      function TC(t, n) {
        return t && t.length ? hs(t, H(n, 2), xl) : r;
      }
      var BC = $s(function(t, n) {
        return t * n;
      }, 1), DC = Fl("round"), LC = $s(function(t, n) {
        return t - n;
      }, 0);
      function MC(t) {
        return t && t.length ? hl(t, ot) : 0;
      }
      function NC(t, n) {
        return t && t.length ? hl(t, H(n, 2)) : 0;
      }
      return h.after = oV, h.ary = gh, h.assign = zV, h.assignIn = Dh, h.assignInWith = Ds, h.assignWith = YV, h.at = GV, h.before = $h, h.bind = Xl, h.bindAll = Xb, h.bindKey = yh, h.castArray = vV, h.chain = vh, h.chunk = S$, h.compact = E$, h.concat = I$, h.cond = Qb, h.conforms = eC, h.constant = iu, h.countBy = My, h.create = jV, h.curry = Vh, h.curryRight = bh, h.debounce = Ch, h.defaults = ZV, h.defaultsDeep = KV, h.defer = iV, h.delay = sV, h.difference = k$, h.differenceBy = x$, h.differenceWith = A$, h.drop = T$, h.dropRight = B$, h.dropRightWhile = D$, h.dropWhile = L$, h.fill = M$, h.filter = Oy, h.flatMap = Fy, h.flatMapDeep = Uy, h.flatMapDepth = Wy, h.flatten = fh, h.flattenDeep = N$, h.flattenDepth = O$, h.flip = aV, h.flow = nC, h.flowRight = rC, h.fromPairs = P$, h.functions = rb, h.functionsIn = ob, h.groupBy = qy, h.initial = F$, h.intersection = U$, h.intersectionBy = W$, h.intersectionWith = q$, h.invert = sb, h.invertBy = ab, h.invokeMap = zy, h.iteratee = su, h.keyBy = Yy, h.keys = Le, h.keysIn = rt, h.map = Is, h.mapKeys = ub, h.mapValues = cb, h.matches = oC, h.matchesProperty = iC, h.memoize = xs, h.merge = db, h.mergeWith = Lh, h.method = sC, h.methodOf = aC, h.mixin = au, h.negate = As, h.nthArg = uC, h.omit = fb, h.omitBy = hb, h.once = lV, h.orderBy = Gy, h.over = cC, h.overArgs = uV, h.overEvery = dC, h.overSome = fC, h.partial = Ql, h.partialRight = Sh, h.partition = jy, h.pick = pb, h.pickBy = Mh, h.property = Wh, h.propertyOf = hC, h.pull = G$, h.pullAll = ph, h.pullAllBy = j$, h.pullAllWith = Z$, h.pullAt = K$, h.range = pC, h.rangeRight = wC, h.rearg = cV, h.reject = Jy, h.remove = J$, h.rest = dV, h.reverse = Kl, h.sampleSize = Qy, h.set = vb, h.setWith = mb, h.shuffle = eV, h.slice = X$, h.sortBy = rV, h.sortedUniq = iy, h.sortedUniqBy = sy, h.split = Fb, h.spread = fV, h.tail = ay, h.take = ly, h.takeRight = uy, h.takeRightWhile = cy, h.takeWhile = dy, h.tap = Ey, h.throttle = hV, h.thru = Es, h.toArray = Ah, h.toPairs = Nh, h.toPairsIn = Oh, h.toPath = $C, h.toPlainObject = Bh, h.transform = _b, h.unary = pV, h.union = fy, h.unionBy = hy, h.unionWith = py, h.uniq = wy, h.uniqBy = vy, h.uniqWith = my, h.unset = gb, h.unzip = Jl, h.unzipWith = wh, h.update = $b, h.updateWith = yb, h.values = qr, h.valuesIn = Vb, h.without = _y, h.words = Fh, h.wrap = wV, h.xor = gy, h.xorBy = $y, h.xorWith = yy, h.zip = Vy, h.zipObject = by, h.zipObjectDeep = Cy, h.zipWith = Sy, h.entries = Nh, h.entriesIn = Oh, h.extend = Dh, h.extendWith = Ds, au(h, h), h.add = VC, h.attempt = Uh, h.camelCase = Eb, h.capitalize = Ph, h.ceil = bC, h.clamp = bb, h.clone = mV, h.cloneDeep = gV, h.cloneDeepWith = $V, h.cloneWith = _V, h.conformsTo = yV, h.deburr = Rh, h.defaultTo = tC, h.divide = CC, h.endsWith = Ib, h.eq = Wt, h.escape = kb, h.escapeRegExp = xb, h.every = Ny, h.find = Py, h.findIndex = ch, h.findKey = JV, h.findLast = Ry, h.findLastIndex = dh, h.findLastKey = XV, h.floor = SC, h.forEach = mh, h.forEachRight = _h, h.forIn = QV, h.forInRight = eb, h.forOwn = tb, h.forOwnRight = nb, h.get = nu, h.gt = VV, h.gte = bV, h.has = ib, h.hasIn = ru, h.head = hh, h.identity = ot, h.includes = Hy, h.indexOf = R$, h.inRange = Cb, h.invoke = lb, h.isArguments = sr, h.isArray = Z, h.isArrayBuffer = CV, h.isArrayLike = nt, h.isArrayLikeObject = Se, h.isBoolean = SV, h.isBuffer = Nn, h.isDate = EV, h.isElement = IV, h.isEmpty = kV, h.isEqual = xV, h.isEqualWith = AV, h.isError = eu, h.isFinite = TV, h.isFunction = vn, h.isInteger = Eh, h.isLength = Ts, h.isMap = Ih, h.isMatch = BV, h.isMatchWith = DV, h.isNaN = LV, h.isNative = MV, h.isNil = OV, h.isNull = NV, h.isNumber = kh, h.isObject = ye, h.isObjectLike = be, h.isPlainObject = jo, h.isRegExp = tu, h.isSafeInteger = PV, h.isSet = xh, h.isString = Bs, h.isSymbol = ht, h.isTypedArray = Wr, h.isUndefined = RV, h.isWeakMap = FV, h.isWeakSet = UV, h.join = H$, h.kebabCase = Ab, h.last = xt, h.lastIndexOf = z$, h.lowerCase = Tb, h.lowerFirst = Bb, h.lt = WV, h.lte = qV, h.max = EC, h.maxBy = IC, h.mean = kC, h.meanBy = xC, h.min = AC, h.minBy = TC, h.stubArray = uu, h.stubFalse = cu, h.stubObject = vC, h.stubString = mC, h.stubTrue = _C, h.multiply = BC, h.nth = Y$, h.noConflict = lC, h.noop = lu, h.now = ks, h.pad = Db, h.padEnd = Lb, h.padStart = Mb, h.parseInt = Nb, h.random = Sb, h.reduce = Zy, h.reduceRight = Ky, h.repeat = Ob, h.replace = Pb, h.result = wb, h.round = DC, h.runInContext = V, h.sample = Xy, h.size = tV, h.snakeCase = Rb, h.some = nV, h.sortedIndex = Q$, h.sortedIndexBy = ey, h.sortedIndexOf = ty, h.sortedLastIndex = ny, h.sortedLastIndexBy = ry, h.sortedLastIndexOf = oy, h.startCase = Ub, h.startsWith = Wb, h.subtract = LC, h.sum = MC, h.sumBy = NC, h.template = qb, h.times = gC, h.toFinite = mn, h.toInteger = K, h.toLength = Th, h.toLower = Hb, h.toNumber = At, h.toSafeInteger = HV, h.toString = ae, h.toUpper = zb, h.trim = Yb, h.trimEnd = Gb, h.trimStart = jb, h.truncate = Zb, h.unescape = Kb, h.uniqueId = yC, h.upperCase = Jb, h.upperFirst = ou, h.each = mh, h.eachRight = _h, h.first = hh, au(h, function() {
        var t = {};
        return Xt(h, function(n, i) {
          le.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Ct(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Ct(["drop", "take"], function(t, n) {
        te.prototype[t] = function(i) {
          i = i === r ? 1 : Te(K(i), 0);
          var l = this.__filtered__ && !n ? new te(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = He(i, l.__takeCount__) : l.__views__.push({
            size: He(i, Jt),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, te.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Ct(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == ke || i == Oe;
        te.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: H(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Ct(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        te.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Ct(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        te.prototype[t] = function() {
          return this.__filtered__ ? new te(this) : this[i](1);
        };
      }), te.prototype.compact = function() {
        return this.filter(ot);
      }, te.prototype.find = function(t) {
        return this.filter(t).head();
      }, te.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, te.prototype.invokeMap = Q(function(t, n) {
        return typeof t == "function" ? new te(this) : this.map(function(i) {
          return Wo(i, t, n);
        });
      }), te.prototype.reject = function(t) {
        return this.filter(As(H(t)));
      }, te.prototype.slice = function(t, n) {
        t = K(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new te(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = K(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, te.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, te.prototype.toArray = function() {
        return this.take(Jt);
      }, Xt(te.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var v = this.__wrapped__, g = l ? [1] : arguments, b = v instanceof te, I = g[0], x = b || Z(v), B = function(ee) {
            var ne = d.apply(h, xn([ee], g));
            return l && P ? ne[0] : ne;
          };
          x && i && typeof I == "function" && I.length != 1 && (b = x = !1);
          var P = this.__chain__, W = !!this.__actions__.length, z = p && !P, J = b && !W;
          if (!p && x) {
            v = J ? v : new te(this);
            var Y = t.apply(v, g);
            return Y.__actions__.push({ func: Es, args: [B], thisArg: r }), new Et(Y, P);
          }
          return z && J ? t.apply(this, g) : (Y = this.thru(B), z ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), Ct(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Xi[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), Xt(te.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          le.call(Or, l) || (Or[l] = []), Or[l].push({ name: n, func: i });
        }
      }), Or[gs(r, S).name] = [{
        name: "wrapper",
        func: r
      }], te.prototype.clone = K1, te.prototype.reverse = J1, te.prototype.value = X1, h.prototype.at = Iy, h.prototype.chain = ky, h.prototype.commit = xy, h.prototype.next = Ay, h.prototype.plant = By, h.prototype.reverse = Dy, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Ly, h.prototype.first = h.prototype.head, Mo && (h.prototype[Mo] = Ty), h;
    }, Lr = x1();
    Xn ? ((Xn.exports = Lr)._ = Lr, sl._ = Lr) : Re._ = Lr;
  }).call(Zo);
})(ce, ce.exports);
const nE = "/alarms?_s=", ka = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, rE = async (e, o) => {
  try {
    return (await In.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      ka
    )).status === 204;
  } catch {
    return !1;
  }
}, fm = async (e, o) => {
  try {
    return (await In.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      ka
    )).status === 204;
  } catch {
    return !1;
  }
}, oE = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await En.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      ka
    )).status == 204;
  } catch {
    return !1;
  }
}, iE = async () => {
  try {
    const e = `${nE}isSituation==true&limit=0`, o = await En(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, sE = async (e) => {
  try {
    const o = e.join(",id=="), r = await En(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, hm = async (e) => {
  try {
    const o = await En(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, aE = async (e) => {
  try {
    const o = await En(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, lE = async () => {
  try {
    const e = await En("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => ce.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, uE = async (e, o, r) => {
  try {
    return (await En.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      ka
    )).status == 204;
  } catch {
    return !1;
  }
}, cE = async (e, o) => {
  try {
    return (await En.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, dE = async () => {
  try {
    const e = await En.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, fE = window.Pinia.defineStore, Kt = fE("situationsStore", {
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
      const e = await lE();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await iE();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = ce.exports.groupBy(o, "status"), a = [
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
        const s = await hm(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await sE(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = ce.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await aE(s);
          a && (r[s] = ce.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await dE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), hE = window.Vue.openBlock, pE = window.Vue.createElementBlock, wE = window.Vue.createElementVNode;
var vE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mE = {}, _E = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gE = /* @__PURE__ */ wE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), $E = [
  gE
];
function yE(e, o) {
  return hE(), pE("svg", _E, $E);
}
var po = /* @__PURE__ */ vE(mE, [["render", yE]]);
var VE = Object.defineProperty, hp = Object.getOwnPropertySymbols, bE = Object.prototype.hasOwnProperty, CE = Object.prototype.propertyIsEnumerable, pp = (e, o, r) => o in e ? VE(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, wp = (e, o) => {
  for (var r in o || (o = {}))
    bE.call(o, r) && pp(e, r, o[r]);
  if (hp)
    for (var r of hp(o))
      CE.call(o, r) && pp(e, r, o[r]);
  return e;
};
const SE = window.Vue.defineComponent, EE = window.Vue.toRaw, Eu = window.Vue.h;
var IE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kE = {
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
}, xE = SE({
  props: kE,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = EE(this.icon);
    return this.$slots.default ? Eu("span", { class: "feather-icon-container" }, [
      Eu(this.$slots.default()[0], wp({
        class: o
      }, r))
    ]) : Eu(s, wp({
      class: o
    }, r));
  }
});
var G = /* @__PURE__ */ IE(xE, [["__scopeId", "data-v-52cbf270"]]);
const AE = window.Vue.openBlock, TE = window.Vue.createElementBlock, BE = window.Vue.createElementVNode;
var DE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const LE = {}, ME = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NE = /* @__PURE__ */ BE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), OE = [
  NE
];
function PE(e, o) {
  return AE(), TE("svg", ME, OE);
}
var pm = /* @__PURE__ */ DE(LE, [["render", PE]]);
const Ne = {
  URL_DOCUMENTATION: "https://docs.opennms.com/alec/3.0.4-SNAPSHOT/reference/engines/introduction.html",
  ENGINE_DBSCAN: "dbscan",
  ENGINE_DEEP_LEARNING: "cluster",
  HELLINGER_OPTION: "hellinger",
  SPACE_DISTANCE_OPTION: "alarminspaceandtimedistance",
  DATE_FORMAT: "d/M/y HH:mm:ss",
  ACCEPTED: "ACCEPTED",
  REJECTED: "REJECTED",
  ESCALATE: "escalate",
  CLEAR: "clear"
};
function sn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function ve(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function De(e) {
  ve(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function RE(e, o) {
  ve(2, arguments);
  var r = De(e), s = sn(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function FE(e, o) {
  ve(2, arguments);
  var r = De(e).getTime(), s = sn(o);
  return new Date(r + s);
}
var UE = {};
function _o() {
  return UE;
}
function vp(e, o) {
  var r, s, a, u, c, f, w, m;
  ve(1, arguments);
  var _ = _o(), y = sn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var $ = De(e), T = $.getDay(), D = (T < y ? 7 : 0) + T - y;
  return $.setDate($.getDate() - D), $.setHours(0, 0, 0, 0), $;
}
function vc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function mp(e) {
  ve(1, arguments);
  var o = De(e);
  return o.setHours(0, 0, 0, 0), o;
}
function WE(e, o) {
  ve(2, arguments);
  var r = De(e), s = De(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function wm(e, o) {
  ve(2, arguments);
  var r = mp(e), s = mp(o);
  return r.getTime() === s.getTime();
}
function qE(e) {
  return ve(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function HE(e) {
  if (ve(1, arguments), !qE(e) && typeof e != "number")
    return !1;
  var o = De(e);
  return !isNaN(Number(o));
}
function zE(e, o) {
  ve(2, arguments);
  var r = sn(o);
  return FE(e, -r);
}
var YE = 864e5;
function GE(e) {
  ve(1, arguments);
  var o = De(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / YE) + 1;
}
function ha(e) {
  ve(1, arguments);
  var o = 1, r = De(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function vm(e) {
  ve(1, arguments);
  var o = De(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = ha(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = ha(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function jE(e) {
  ve(1, arguments);
  var o = vm(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = ha(r);
  return s;
}
var ZE = 6048e5;
function KE(e) {
  ve(1, arguments);
  var o = De(e), r = ha(o).getTime() - jE(o).getTime();
  return Math.round(r / ZE) + 1;
}
function pa(e, o) {
  var r, s, a, u, c, f, w, m;
  ve(1, arguments);
  var _ = _o(), y = sn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var $ = De(e), T = $.getUTCDay(), D = (T < y ? 7 : 0) + T - y;
  return $.setUTCDate($.getUTCDate() - D), $.setUTCHours(0, 0, 0, 0), $;
}
function mm(e, o) {
  var r, s, a, u, c, f, w, m;
  ve(1, arguments);
  var _ = De(e), y = _.getUTCFullYear(), $ = _o(), T = sn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : $.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = $.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = new Date(0);
  D.setUTCFullYear(y + 1, 0, T), D.setUTCHours(0, 0, 0, 0);
  var N = pa(D, o), M = new Date(0);
  M.setUTCFullYear(y, 0, T), M.setUTCHours(0, 0, 0, 0);
  var S = pa(M, o);
  return _.getTime() >= N.getTime() ? y + 1 : _.getTime() >= S.getTime() ? y : y - 1;
}
function JE(e, o) {
  var r, s, a, u, c, f, w, m;
  ve(1, arguments);
  var _ = _o(), y = sn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), $ = mm(e, o), T = new Date(0);
  T.setUTCFullYear($, 0, y), T.setUTCHours(0, 0, 0, 0);
  var D = pa(T, o);
  return D;
}
var XE = 6048e5;
function QE(e, o) {
  ve(1, arguments);
  var r = De(e), s = pa(r, o).getTime() - JE(r, o).getTime();
  return Math.round(s / XE) + 1;
}
function ue(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var eI = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return ue(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : ue(r + 1, 2);
  },
  d: function(e, o) {
    return ue(e.getUTCDate(), o.length);
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
    return ue(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return ue(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return ue(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return ue(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return ue(a, o.length);
  }
};
const On = eI;
var Yr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, tI = {
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
    return On.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = mm(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return ue(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ue(u, o.length);
  },
  R: function(e, o) {
    var r = vm(e);
    return ue(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return ue(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return ue(s, 2);
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
        return ue(s, 2);
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
        return On.M(e, o);
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
        return ue(s + 1, 2);
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
    var a = QE(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ue(a, o.length);
  },
  I: function(e, o, r) {
    var s = KE(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : ue(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : On.d(e, o);
  },
  D: function(e, o, r) {
    var s = GE(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : ue(s, o.length);
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
        return ue(u, 2);
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
        return ue(u, o.length);
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
        return ue(a, o.length);
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
    switch (s === 12 ? a = Yr.noon : s === 0 ? a = Yr.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = Yr.evening : s >= 12 ? a = Yr.afternoon : s >= 4 ? a = Yr.morning : a = Yr.night, o) {
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
    return On.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : On.H(e, o);
  },
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ue(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : ue(s, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : On.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : On.s(e, o);
  },
  S: function(e, o) {
    return On.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return gp(u);
      case "XXXX":
      case "XX":
        return $r(u);
      case "XXXXX":
      case "XXX":
      default:
        return $r(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return gp(u);
      case "xxxx":
      case "xx":
        return $r(u);
      case "xxxxx":
      case "xxx":
      default:
        return $r(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + _p(u, ":");
      case "OOOO":
      default:
        return "GMT" + $r(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + _p(u, ":");
      case "zzzz":
      default:
        return "GMT" + $r(u, ":");
    }
  },
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return ue(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return ue(u, o.length);
  }
};
function _p(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + ue(u, 2);
}
function gp(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ue(Math.abs(e) / 60, 2);
  }
  return $r(e, o);
}
function $r(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = ue(Math.floor(a / 60), 2), c = ue(a % 60, 2);
  return s + u + r + c;
}
const nI = tI;
var $p = function(e, o) {
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
}, _m = function(e, o) {
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
}, rI = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return $p(e, o);
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
  return u.replace("{{date}}", $p(s, o)).replace("{{time}}", _m(a, o));
}, oI = {
  p: _m,
  P: rI
};
const iI = oI;
var sI = ["D", "DD"], aI = ["YY", "YYYY"];
function lI(e) {
  return sI.indexOf(e) !== -1;
}
function uI(e) {
  return aI.indexOf(e) !== -1;
}
function yp(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var cI = {
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
}, dI = function(e, o, r) {
  var s, a = cI[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const fI = dI;
function Iu(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var hI = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, pI = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wI = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, vI = {
  date: Iu({
    formats: hI,
    defaultWidth: "full"
  }),
  time: Iu({
    formats: pI,
    defaultWidth: "full"
  }),
  dateTime: Iu({
    formats: wI,
    defaultWidth: "full"
  })
};
const mI = vI;
var _I = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, gI = function(e, o, r, s) {
  return _I[e];
};
const $I = gI;
function Ko(e) {
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
var yI = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, VI = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, bI = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, CI = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, SI = {
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
}, EI = {
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
}, II = function(e, o) {
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
}, kI = {
  ordinalNumber: II,
  era: Ko({
    values: yI,
    defaultWidth: "wide"
  }),
  quarter: Ko({
    values: VI,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ko({
    values: bI,
    defaultWidth: "wide"
  }),
  day: Ko({
    values: CI,
    defaultWidth: "wide"
  }),
  dayPeriod: Ko({
    values: SI,
    defaultWidth: "wide",
    formattingValues: EI,
    defaultFormattingWidth: "wide"
  })
};
const xI = kI;
function Jo(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? TI(f, function(y) {
      return y.test(c);
    }) : AI(f, function(y) {
      return y.test(c);
    }), m;
    m = e.valueCallback ? e.valueCallback(w) : w, m = r.valueCallback ? r.valueCallback(m) : m;
    var _ = o.slice(c.length);
    return {
      value: m,
      rest: _
    };
  };
}
function AI(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function TI(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function BI(e) {
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
var DI = /^(\d+)(th|st|nd|rd)?/i, LI = /\d+/i, MI = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, NI = {
  any: [/^b/i, /^(a|c)/i]
}, OI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, PI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, RI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, FI = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, UI = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, WI = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, qI = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, HI = {
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
}, zI = {
  ordinalNumber: BI({
    matchPattern: DI,
    parsePattern: LI,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Jo({
    matchPatterns: MI,
    defaultMatchWidth: "wide",
    parsePatterns: NI,
    defaultParseWidth: "any"
  }),
  quarter: Jo({
    matchPatterns: OI,
    defaultMatchWidth: "wide",
    parsePatterns: PI,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Jo({
    matchPatterns: RI,
    defaultMatchWidth: "wide",
    parsePatterns: FI,
    defaultParseWidth: "any"
  }),
  day: Jo({
    matchPatterns: UI,
    defaultMatchWidth: "wide",
    parsePatterns: WI,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jo({
    matchPatterns: qI,
    defaultMatchWidth: "any",
    parsePatterns: HI,
    defaultParseWidth: "any"
  })
};
const YI = zI;
var GI = {
  code: "en-US",
  formatDistance: fI,
  formatLong: mI,
  formatRelative: $I,
  localize: xI,
  match: YI,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const gm = GI;
var jI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ZI = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, KI = /^'([^]*?)'?$/, JI = /''/g, XI = /[a-zA-Z]/;
function QI(e, o, r) {
  var s, a, u, c, f, w, m, _, y, $, T, D, N, M, S, L, A, O;
  ve(2, arguments);
  var k = String(o), F = _o(), R = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : F.locale) !== null && s !== void 0 ? s : gm, q = sn((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (m = r.locale) === null || m === void 0 || (_ = m.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : F.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = F.locale) === null || y === void 0 || ($ = y.options) === null || $ === void 0 ? void 0 : $.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(q >= 1 && q <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ge = sn((T = (D = (N = (M = r == null ? void 0 : r.weekStartsOn) !== null && M !== void 0 ? M : r == null || (S = r.locale) === null || S === void 0 || (L = S.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && N !== void 0 ? N : F.weekStartsOn) !== null && D !== void 0 ? D : (A = F.locale) === null || A === void 0 || (O = A.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!(ge >= 0 && ge <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = De(e);
  if (!HE(de))
    throw new RangeError("Invalid time value");
  var me = vc(de), Ve = zE(de, me), Ce = {
    firstWeekContainsDate: q,
    weekStartsOn: ge,
    locale: R,
    _originalDate: de
  }, ke = k.match(ZI).map(function(he) {
    var Oe = he[0];
    if (Oe === "p" || Oe === "P") {
      var Pe = iI[Oe];
      return Pe(he, R.formatLong);
    }
    return he;
  }).join("").match(jI).map(function(he) {
    if (he === "''")
      return "'";
    var Oe = he[0];
    if (Oe === "'")
      return e2(he);
    var Pe = nI[Oe];
    if (Pe)
      return !(r != null && r.useAdditionalWeekYearTokens) && uI(he) && yp(he, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && lI(he) && yp(he, o, String(e)), Pe(Ve, he, R.localize, Ce);
    if (Oe.match(XI))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Oe + "`");
    return he;
  }).join("");
  return ke;
}
function e2(e) {
  var o = e.match(KI);
  return o ? o[1].replace(JI, "'") : e;
}
function $m(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function t2(e) {
  return $m({}, e);
}
var Vp = 1e3 * 60, wa = 60 * 24, bp = wa * 30, Cp = wa * 365;
function xa(e, o, r) {
  var s, a, u;
  ve(2, arguments);
  var c = _o(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : gm;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = WE(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var m = $m(t2(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, y;
  w > 0 ? (_ = De(o), y = De(e)) : (_ = De(e), y = De(o));
  var $ = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if ($ === "floor")
    T = Math.floor;
  else if ($ === "ceil")
    T = Math.ceil;
  else if ($ === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var D = y.getTime() - _.getTime(), N = D / Vp, M = vc(y) - vc(_), S = (D - M) / Vp, L = r == null ? void 0 : r.unit, A;
  if (L ? A = String(L) : N < 1 ? A = "second" : N < 60 ? A = "minute" : N < wa ? A = "hour" : S < bp ? A = "day" : S < Cp ? A = "month" : A = "year", A === "second") {
    var O = T(D / 1e3);
    return f.formatDistance("xSeconds", O, m);
  } else if (A === "minute") {
    var k = T(N);
    return f.formatDistance("xMinutes", k, m);
  } else if (A === "hour") {
    var F = T(N / 60);
    return f.formatDistance("xHours", F, m);
  } else if (A === "day") {
    var R = T(S / wa);
    return f.formatDistance("xDays", R, m);
  } else if (A === "month") {
    var q = T(S / bp);
    return q === 12 && L !== "month" ? f.formatDistance("xYears", 1, m) : f.formatDistance("xMonths", q, m);
  } else if (A === "year") {
    var ge = T(S / Cp);
    return f.formatDistance("xYears", ge, m);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function n2(e, o, r) {
  ve(2, arguments);
  var s = vp(e, r), a = vp(o, r);
  return s.getTime() === a.getTime();
}
function r2(e, o) {
  return ve(1, arguments), n2(e, Date.now(), o);
}
function o2(e) {
  return ve(1, arguments), wm(e, Date.now());
}
function i2(e, o) {
  ve(2, arguments);
  var r = sn(o);
  return RE(e, -r);
}
function s2(e) {
  return ve(1, arguments), wm(e, i2(Date.now(), 1));
}
const an = (e) => {
  let o = "";
  if (e)
    try {
      o = QI(new Date(e), Ne.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, ym = (e, o) => {
  const r = e.length > o ? "..." : "";
  return e.replace(/(<([^>]+)>)/gi, "").substring(0, o) + r;
}, a2 = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => o2(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => s2(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => r2(s.firstEventTime)
      );
      break;
  }
  return r;
}, l2 = window.Vue.defineComponent, mt = window.Vue.unref, Sp = window.Vue.normalizeClass, rn = window.Vue.createElementVNode, Gr = window.Vue.toDisplayString, Ep = window.Vue.createVNode, ar = window.Vue.openBlock, lr = window.Vue.createElementBlock, Ls = window.Vue.createCommentVNode, mc = window.Vue.createTextVNode, u2 = window.Vue.renderList, c2 = window.Vue.Fragment, d2 = window.Vue.pushScopeId, f2 = window.Vue.popScopeId, Rc = (e) => (d2("data-v-fb22b492"), e = e(), f2(), e), h2 = { class: "content" }, p2 = { class: "title-row" }, w2 = { class: "title" }, v2 = {
  key: 0,
  class: "accepted"
}, m2 = {
  key: 1,
  class: "rejected"
}, _2 = /* @__PURE__ */ Rc(() => /* @__PURE__ */ rn("span", { class: "info-title" }, " Duration: ", -1)), g2 = { key: 0 }, $2 = /* @__PURE__ */ Rc(() => /* @__PURE__ */ rn("span", { class: "info-title" }, " First Event: ", -1)), y2 = { class: "description" }, V2 = /* @__PURE__ */ Rc(() => /* @__PURE__ */ rn("hr", null, null, -1)), b2 = {
  key: 1,
  class: "count-info"
}, C2 = /* @__PURE__ */ mc(" Alarms: "), S2 = { class: "info-title" }, E2 = /* @__PURE__ */ l2({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Ne.ACCEPTED, a = Ne.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, w) => {
      var m, _, y;
      return ar(), lr("div", {
        onClick: c,
        class: Sp(["card", {
          rejected: r.situationInfo.status == mt(a)
        }])
      }, [
        rn("div", {
          class: Sp(["severity-line", [`${(_ = (m = r.situationInfo) == null ? void 0 : m.severity) == null ? void 0 : _.toLowerCase()}-bg dark`]])
        }, null, 2),
        rn("div", h2, [
          rn("div", p2, [
            rn("div", w2, "Situation " + Gr((y = r.situationInfo) == null ? void 0 : y.id), 1),
            r.situationInfo.status == mt(s) ? (ar(), lr("div", v2, [
              Ep(mt(G), {
                icon: mt(po),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ls("", !0),
            r.situationInfo.status == mt(a) ? (ar(), lr("div", m2, [
              Ep(mt(G), {
                icon: mt(pm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ls("", !0)
          ]),
          rn("div", null, [
            _2,
            mc(" " + Gr(mt(xa)(
              mt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Ls("", !0) : (ar(), lr("div", g2, [
            $2,
            mc(Gr(mt(an)(r.situationInfo.firstEventTime)), 1)
          ])),
          rn("div", y2, Gr(mt(ym)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          V2,
          r.situationInfo.relatedAlarms ? (ar(), lr("div", b2, [
            C2,
            rn("span", S2, Gr(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ls("", !0),
          (ar(!0), lr(c2, null, u2(mt(ce.exports.keys)(
            mt(ce.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), ($) => (ar(), lr("div", {
            class: "info-title",
            key: $
          }, " - " + Gr($), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Vm = /* @__PURE__ */ se(E2, [["__scopeId", "data-v-fb22b492"]]), I2 = window.Vue.openBlock, k2 = window.Vue.createElementBlock, x2 = window.Vue.createElementVNode;
var A2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const T2 = {}, B2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D2 = /* @__PURE__ */ x2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), L2 = [
  D2
];
function M2(e, o) {
  return I2(), k2("svg", B2, L2);
}
var N2 = /* @__PURE__ */ A2(T2, [["render", M2]]);
const O2 = window.Vue.openBlock, P2 = window.Vue.createElementBlock, bm = window.Vue.createElementVNode;
var R2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F2 = {}, U2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W2 = /* @__PURE__ */ bm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), q2 = /* @__PURE__ */ bm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), H2 = [
  W2,
  q2
];
function z2(e, o) {
  return O2(), P2("svg", U2, H2);
}
var Y2 = /* @__PURE__ */ R2(F2, [["render", z2]]);
const G2 = window.Vue.openBlock, j2 = window.Vue.createElementBlock, Z2 = window.Vue.createElementVNode;
var K2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const J2 = {}, X2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Q2 = /* @__PURE__ */ Z2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), ek = [
  Q2
];
function tk(e, o) {
  return G2(), j2("svg", X2, ek);
}
var nk = /* @__PURE__ */ K2(J2, [["render", tk]]);
const rk = window.Vue.openBlock, ok = window.Vue.createElementBlock, ik = window.Vue.createElementVNode;
var sk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ak = {}, lk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uk = /* @__PURE__ */ ik("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), ck = [
  uk
];
function dk(e, o) {
  return rk(), ok("svg", lk, ck);
}
var Cm = /* @__PURE__ */ sk(ak, [["render", dk]]);
const fk = window.Vue.defineComponent, Pn = window.Vue.unref, Ms = window.Vue.normalizeClass, Ns = window.Vue.createVNode, hk = window.Vue.openBlock, pk = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const wk = { class: "paginator" }, vk = /* @__PURE__ */ fk({
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
    return (a, u) => (hk(), pk("div", wk, [
      Ns(Pn(G), {
        icon: Pn(N2),
        "aria-hidden": "true",
        class: Ms(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Ns(Pn(G), {
        icon: Pn(nk),
        "aria-hidden": "true",
        class: Ms(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Ns(Pn(G), {
        icon: Pn(Cm),
        "aria-hidden": "true",
        class: Ms(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Ns(Pn(G), {
        icon: Pn(Y2),
        "aria-hidden": "true",
        class: Ms(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const mk = /* @__PURE__ */ se(vk, [["__scopeId", "data-v-40758818"]]);
const ie = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, _k = window.Vue.computed, Aa = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = _k(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Cr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Sr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var gk = Object.defineProperty, $k = Object.defineProperties, yk = Object.getOwnPropertyDescriptors, Ip = Object.getOwnPropertySymbols, Vk = Object.prototype.hasOwnProperty, bk = Object.prototype.propertyIsEnumerable, kp = (e, o, r) => o in e ? gk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xp = (e, o) => {
  for (var r in o || (o = {}))
    Vk.call(o, r) && kp(e, r, o[r]);
  if (Ip)
    for (var r of Ip(o))
      bk.call(o, r) && kp(e, r, o[r]);
  return e;
}, Ck = (e, o) => $k(e, yk(o));
const Sk = window.Vue.defineComponent, Ek = window.Vue.h;
var Ik = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kk = {
  center: {
    type: Boolean,
    default: !1
  }
}, xk = Sk({
  props: kk,
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
        this.styles = Ck(xp({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Sr(this.failsafe), this.failsafe = Cr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Ek("div", {
        style: xp({}, this.styles),
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
var jn = /* @__PURE__ */ Ik(xk, [["__scopeId", "data-v-18e2a5db"]]);
const Ak = window.Vue.openBlock, Tk = window.Vue.createElementBlock, Bk = window.Vue.createElementVNode;
var Dk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Lk = {}, Mk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Nk = /* @__PURE__ */ Bk("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Ok = [
  Nk
];
function Pk(e, o) {
  return Ak(), Tk("svg", Mk, Ok);
}
var go = /* @__PURE__ */ Dk(Lk, [["render", Pk]]);
const Ap = window.Vue.computed, Rk = (e, o, r) => {
  const s = Ap(() => o.value.filter((u) => !u.disabled)), a = Ap(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const Fk = window.Vue.openBlock, Uk = window.Vue.createElementBlock, Fc = window.Vue.createElementVNode;
var Wk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qk = {}, Hk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zk = /* @__PURE__ */ Fc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Yk = /* @__PURE__ */ Fc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Gk = /* @__PURE__ */ Fc("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), jk = [
  zk,
  Yk,
  Gk
];
function Zk(e, o) {
  return Fk(), Uk("svg", Hk, jk);
}
var Kk = /* @__PURE__ */ Wk(qk, [["render", Zk]]), Jk = Object.defineProperty, Xk = Object.defineProperties, Qk = Object.getOwnPropertyDescriptors, Tp = Object.getOwnPropertySymbols, ex = Object.prototype.hasOwnProperty, tx = Object.prototype.propertyIsEnumerable, Bp = (e, o, r) => o in e ? Jk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Sm = (e, o) => {
  for (var r in o || (o = {}))
    ex.call(o, r) && Bp(e, r, o[r]);
  if (Tp)
    for (var r of Tp(o))
      tx.call(o, r) && Bp(e, r, o[r]);
  return e;
}, Em = (e, o) => Xk(e, Qk(o));
const $o = window.Vue.defineComponent, Ei = window.Vue.resolveComponent, on = window.Vue.openBlock, io = window.Vue.createElementBlock, nx = window.Vue.createVNode, va = window.Vue.createBlock, rx = window.Vue.withModifiers, wo = window.Vue.inject, Ii = window.Vue.computed, ox = window.Vue.normalizeClass, jr = window.Vue.createElementVNode, ma = window.Vue.toDisplayString, sa = window.Vue.renderSlot, gi = window.Vue.createCommentVNode, ix = window.Vue.withDirectives, sx = window.Vue.vShow, _c = window.Vue.ref, Dp = window.Vue.toRef, Lp = window.Vue.nextTick, gc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Uc = window.Vue.provide, Mp = window.Vue.isRef, ax = window.Vue.onBeforeUnmount;
var Ti = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lx = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, ux = $o({
  props: lx,
  components: {
    FeatherIcon: G
  }
}), cx = ["title"];
function dx(e, o, r, s, a, u) {
  const c = Ei("FeatherIcon");
  return on(), io("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    nx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, cx);
}
var fx = /* @__PURE__ */ Ti(ux, [["render", dx], ["__scopeId", "data-v-4265058e"]]);
const hx = $o({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return go;
    }
  },
  components: {
    ActionIcon: fx
  }
});
function px(e, o, r, s, a, u) {
  const c = Ei("ActionIcon");
  return on(), va(c, {
    onClick: o[0] || (o[0] = rx((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var wx = /* @__PURE__ */ Ti(hx, [["render", px]]);
const vx = $o({
  computed: {
    errorIcon() {
      return Kk;
    }
  },
  components: {
    FeatherIcon: G
  }
});
function mx(e, o, r, s, a, u) {
  const c = Ei("FeatherIcon");
  return on(), va(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var _x = /* @__PURE__ */ Ti(vx, [["render", mx], ["__scopeId", "data-v-0b8faef3"]]);
const gx = {
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
}, $x = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, yx = $o({
  emits: $x,
  props: gx,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = wo("wrapperOptions", {}), o = wo("validationErrorMessage", !1), r = Ii(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Em(Sm({}, e), { error: r });
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
    ClearIcon: wx,
    ErrorIcon: _x
  }
}), Vx = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, bx = ["for"], Cx = { class: "prefix" }, Sx = { class: "post" };
function Ex(e, o, r, s, a, u) {
  const c = Ei("ClearIcon"), f = Ei("ErrorIcon");
  return on(), io("div", {
    class: ox(["feather-input-wrapper-container", e.containerCls])
  }, [
    jr("fieldset", Vx, [
      jr("legend", null, ma(e.label), 1)
    ]),
    jr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, ma(e.label), 9, bx),
    jr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      jr("div", Cx, [
        sa(e.$slots, "pre", {}, void 0, !0)
      ]),
      sa(e.$slots, "default", {}, void 0, !0),
      jr("div", Sx, [
        e.showClear && e.computedClearText ? (on(), va(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : gi("", !0),
        e.error ? (on(), va(f, { key: 1 })) : gi("", !0),
        sa(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Wc = /* @__PURE__ */ Ti(yx, [["render", Ex], ["__scopeId", "data-v-4db296db"]]);
const Ix = $o({
  setup() {
    const e = wo("subTextOptions", {}), o = wo("validationErrorMessage", !1), r = Ii(() => e.error ? e.error : o && o.value ? o.value : "");
    return Em(Sm({}, e), { error: r });
  }
}), kx = { class: "feather-input-sub-text" }, xx = {
  key: 0,
  class: "feather-input-spacer"
}, Ax = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, Tx = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function Bx(e, o, r, s, a, u) {
  return ix((on(), io("div", kx, [
    !e.hint && !e.error.length ? (on(), io("div", xx, "\xA0")) : gi("", !0),
    e.hint && !e.error.length ? (on(), io("div", Ax, ma(e.hint), 1)) : gi("", !0),
    e.error.length > 0 ? (on(), io("div", Tx, ma(e.error), 1)) : gi("", !0),
    sa(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [sx, !e.inline || e.hint || e.error.length]
  ]);
}
var Bi = /* @__PURE__ */ Ti(Ix, [["render", Bx], ["__scopeId", "data-v-8e0ac99e"]]);
const Dx = {
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
$o({
  props: Dx,
  setup(e) {
    const o = wo("featherFormErrors", _c([])), r = Dp(e, "errorList"), s = Ii(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = Dp(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = _c(), w = (_) => `${c(_.label)} - ${_.message}`, m = Ii(() => (s.value.length && Lp(() => f.value.focus()), e.headingText(s.value)));
    return gc(a, (_) => {
      _.length && Lp(() => f.value.focus());
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
const Di = (e, o, r, s, a) => {
  const u = wo("featherForm", !1);
  if (s && u && e.value) {
    const c = _c("");
    Uc("validationErrorMessage", c);
    const f = () => {
      if (a && Mp(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return s.validateSync(o.value), c.value = "", { success: !0 };
      } catch (_) {
        const y = _;
        return c.value = y.errors[0], {
          success: !1,
          message: y.errors[0],
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
    return a && Mp(a) && gc(a, () => {
      u.runValidation();
    }), gc(e, (_, y) => {
      _ && u && u.register(_, m), y && u && u.deregister(y);
    }, { immediate: !0 }), ax(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Li = (e) => ({
  inherittedAttrs: Ii(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Mi = {
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
}, Ni = (e) => {
  Uc("subTextOptions", e);
}, qc = {
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
}, Hc = (e) => {
  Uc("wrapperOptions", e);
}, Os = window.Vue.ref, Lx = window.Vue.watch, Mx = window.Vue.watchEffect, Np = window.Vue.computed, ku = window.Vue.provide, Im = (e, o, r, s, a) => {
  const u = Os([]), c = Os(), f = Os(), w = Os();
  Mx(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((L) => L.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let L = u.value.filter((A) => !A.disabled);
      L = L.length ? L : u.value, f.value = L[0], f.value.first = !0;
    }
  }), Lx(c, (S, L) => {
    L && (L.checked = !1), S && (S.checked = !0);
  });
  const m = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = Np(() => c.value || f.value), y = Rk(_, u, m), $ = Np(() => ie("feather-radio-group"));
  w.value = $.value;
  const { validate: T } = Di(w, e, r, s, a);
  return ku("register", (S) => {
    u.value = [...u.value, S], w.value === $.value && (w.value = S.id);
  }), ku("select", m), ku("blur", (S) => {
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
          y.selectNext();
          break;
        case 37:
        case 38:
          y.selectPrevious();
          break;
      }
    },
    ...y,
    focus: () => {
      c.value && c.value.focus();
    },
    validate: T,
    firstElementId: w,
    groupId: $
  };
};
var Nx = Object.defineProperty, Ox = Object.defineProperties, Px = Object.getOwnPropertyDescriptors, Op = Object.getOwnPropertySymbols, Rx = Object.prototype.hasOwnProperty, Fx = Object.prototype.propertyIsEnumerable, Pp = (e, o, r) => o in e ? Nx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, lo = (e, o) => {
  for (var r in o || (o = {}))
    Rx.call(o, r) && Pp(e, r, o[r]);
  if (Op)
    for (var r of Op(o))
      Fx.call(o, r) && Pp(e, r, o[r]);
  return e;
}, km = (e, o) => Ox(e, Px(o));
const Zn = window.Vue.defineComponent, $i = window.Vue.inject, _a = window.Vue.computed, yi = window.Vue.ref, Ot = window.Vue.resolveComponent, yt = window.Vue.openBlock, Oi = window.Vue.createElementBlock, xm = window.Vue.normalizeClass, ln = window.Vue.renderSlot, Yn = window.Vue.createBlock, ki = window.Vue.createCommentVNode, ga = window.Vue.createElementVNode, Ux = window.Vue.withModifiers, Ta = window.Vue.createVNode, Am = window.Vue.toRef, $c = window.Vue.mergeProps, Sn = window.Vue.withCtx, Wx = window.Vue.h, qx = window.Vue.provide;
var Kn = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Hx = {
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
}, zx = Zn({
  props: Hx,
  setup(e) {
    const o = $i("isCondensed", null), r = _a(() => o || e.condensed), s = yi(!1);
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
    FeatherRipple: jn
  }
}), Yx = ["aria-disabled"];
function Gx(e, o, r, s, a, u) {
  const c = Ot("FeatherRipple");
  return yt(), Oi("div", {
    class: xm(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    ln(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (yt(), Yn(c, { key: 0 })) : ki("", !0)
  ], 42, Yx);
}
var Ba = /* @__PURE__ */ Kn(zx, [["render", Gx], ["__scopeId", "data-v-44d413dc"]]);
const jx = {
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
}, Zx = Zn({
  emits: ["delete"],
  props: jx,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: go
    };
  },
  components: {
    FeatherIcon: G
  }
}), Kx = { class: "chip-delete" }, Jx = ["aria-label", "aria-describedby"];
function Xx(e, o, r, s, a, u) {
  const c = Ot("FeatherIcon");
  return yt(), Oi("span", Kx, [
    ga("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = Ux((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Ta(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, Jx)
  ]);
}
var Qx = /* @__PURE__ */ Kn(Zx, [["render", Xx], ["__scopeId", "data-v-4bae6cb4"]]);
const eA = Zn({
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
}), tA = ["title"];
function nA(e, o, r, s, a, u) {
  return yt(), Oi("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    ln(e.$slots, "default", {}, void 0, !0)
  ], 8, tA);
}
var Da = /* @__PURE__ */ Kn(eA, [["render", nA], ["__scopeId", "data-v-1a0445b2"]]);
const rA = {}, oA = {
  class: "chip-icon",
  role: "presentation"
};
function iA(e, o) {
  return yt(), Oi("span", oA, [
    ln(e.$slots, "default", {}, void 0, !0)
  ]);
}
var La = /* @__PURE__ */ Kn(rA, [["render", iA], ["__scopeId", "data-v-2230176f"]]);
const Rp = {
  delete: "Remove"
}, sA = Zn({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Rp
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Aa(Am(e, "labels"), Rp), s = _a(() => ie("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = lo({}, o.attrs);
    return e.disabled && delete u.onClick, km(lo({}, r), {
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
    Chip: Ba,
    DeleteIcon: Qx,
    Label: Da,
    PreIcon: La
  }
}), aA = ["aria-disabled"];
function lA(e, o, r, s, a, u) {
  const c = Ot("PreIcon"), f = Ot("Label"), w = Ot("DeleteIcon"), m = Ot("Chip");
  return yt(), Yn(m, $c(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Sn(() => [
      ga("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        ga("span", $c(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (yt(), Yn(c, { key: 0 }, {
            default: Sn(() => [
              ln(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ki("", !0),
          Ta(f, { id: e.chipTextId }, {
            default: Sn(() => [
              ln(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, aA),
      e.canDelete ? (yt(), Yn(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ki("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var uA = /* @__PURE__ */ Kn(sA, [["render", lA], ["__scopeId", "data-v-48b2704a"]]);
const cA = Zn({
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
    Chip: Ba,
    Label: Da,
    PreIcon: La
  }
}), dA = ["aria-disabled"];
function fA(e, o, r, s, a, u) {
  const c = Ot("PreIcon"), f = Ot("Label"), w = Ot("Chip");
  return yt(), Yn(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Sn(() => [
      ga("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (yt(), Yn(c, { key: 0 }, {
          default: Sn(() => [
            ln(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ki("", !0),
        Ta(f, null, {
          default: Sn(() => [
            ln(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, dA)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var hA = /* @__PURE__ */ Kn(cA, [["render", fA], ["__scopeId", "data-v-3e0c4eba"]]);
const pA = Zn({
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
    const o = yi(!1), r = yi(!1), s = _a(() => ie("chip-label-id")), a = _a(() => o.value || r.value ? 0 : -1), u = yi(), c = () => {
      u.value.$el.focus();
    }, f = $i("register", ($) => {
    }), w = $i("blur", ($) => {
    }), m = $i("select", ($) => {
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
    Chip: Ba,
    Label: Da,
    PreIcon: La
  }
});
function wA(e, o, r, s, a, u) {
  const c = Ot("PreIcon"), f = Ot("Label"), w = Ot("Chip");
  return yt(), Yn(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: xm(["focus hover", { selected: e.checked }]),
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
    default: Sn(() => [
      e.hasIcon ? (yt(), Yn(c, { key: 0 }, {
        default: Sn(() => [
          ln(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ki("", !0),
      Ta(f, { id: e.labelId }, {
        default: Sn(() => [
          ln(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var vA = /* @__PURE__ */ Kn(pA, [["render", wA], ["__scopeId", "data-v-bbcc2f70"]]);
const mA = {
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
}, Fp = Zn({
  props: mA,
  setup() {
    return { format: $i("chipListFormat", "") };
  },
  render() {
    const e = (o) => Wx(o, lo(lo({}, this.$props), this.$attrs), lo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(uA) : this.format === "radio" ? e(vA) : e(hA);
  }
}), _A = {
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
}, gA = Zn({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: _A,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    qx("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = Am(e, "modelValue");
      return km(lo({
        attrs: {
          role: "radiogroup"
        }
      }, Im(c, o.emit, e.label, {}, yi(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), $A = ["aria-label"];
function yA(e, o, r, s, a, u) {
  return yt(), Oi("div", $c(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    ln(e.$slots, "default", {}, void 0, !0)
  ], 16, $A);
}
var VA = /* @__PURE__ */ Kn(gA, [["render", yA], ["__scopeId", "data-v-1e06f41d"]]);
const bA = window.Vue.defineComponent, CA = window.Vue.normalizeClass, SA = window.Vue.openBlock, EA = window.Vue.createElementBlock, IA = window.Vue.createCommentVNode, kA = /* @__PURE__ */ bA({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (SA(), EA("span", {
      key: 0,
      class: CA(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : IA("", !0);
  }
});
const xA = /* @__PURE__ */ se(kA, [["__scopeId", "data-v-e08880d6"]]), AA = window.Vue.defineComponent, Xo = window.Vue.unref, Tm = window.Vue.createTextVNode, xu = window.Vue.normalizeClass, Au = window.Vue.withCtx, TA = window.Vue.createVNode, BA = window.Vue.renderList, DA = window.Vue.Fragment, Ps = window.Vue.openBlock, LA = window.Vue.createElementBlock, Tu = window.Vue.createBlock, Up = window.Vue.createCommentVNode, MA = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NA = /* @__PURE__ */ Tm(" ALL "), Wp = window.Vue.ref, OA = window.Vue.watch, PA = window.Vue.computed, RA = window.Vue.reactive, FA = /* @__PURE__ */ AA({
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
    const r = e, s = Wp(!1), a = PA(() => ce.exports.keys(ce.exports.groupBy(r.alarms, r.property))), u = Wp(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = RA({
      alarms: r.alarms
    }), f = (m) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(m) ? u.value = u.value.filter((_) => _ !== m) : u.value.push(m), (m === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return OA(r, () => {
      var m;
      u.value = (m = r.preSelected) != null && m.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (m, _) => Xo(a).length > 0 ? (Ps(), Tu(Xo(VA), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: xu({ vertical: r.isVertical })
    }, {
      default: Au(() => [
        TA(Xo(Fp), {
          class: xu({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = (y) => f("all"))
        }, {
          default: Au(() => [
            NA
          ]),
          _: 1
        }, 8, ["class"]),
        (Ps(!0), LA(DA, null, BA(Xo(a), (y) => (Ps(), Tu(Xo(Fp), {
          class: xu([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: ($) => f(y)
        }, {
          default: Au(() => [
            e.property == "severity" ? (Ps(), Tu(xA, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : Up("", !0),
            Tm(MA(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Up("", !0);
  }
});
const UA = /* @__PURE__ */ se(FA, [["__scopeId", "data-v-d83b0f85"]]);
const WA = window.Vue.watch, qA = window.Vue.onBeforeUnmount, HA = window.Vue.ref, zA = window.Vue.onMounted, YA = (e) => {
  const o = HA(!1);
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
  return zA(() => {
    const c = WA(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    qA(() => {
      c(), u();
    });
  }), o;
}, GA = window.Vue.watch, jA = window.Vue.onBeforeUnmount, ZA = window.Vue.ref, KA = window.Vue.onMounted, JA = (e, o) => {
  const r = ZA(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((m) => m && m.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return KA(() => {
    const c = GA(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    jA(() => {
      c(), u();
    });
  }), r;
}, XA = window.Vue.watch, QA = window.Vue.onBeforeUnmount, eT = window.Vue.ref, Bm = (e, o) => {
  const r = eT(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = XA([e, r], ([w, m], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), m && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return QA(() => {
    f(), c();
  }), r;
}, tT = window.Vue.defineComponent, gn = window.Vue.ref, qp = window.Vue.toRef, nT = window.Vue.onMounted, rT = window.Vue.watch, Hp = window.Vue.computed, oT = window.Vue.nextTick, zp = window.Vue.openBlock, Yp = window.Vue.createElementBlock, Gp = window.Vue.renderSlot, iT = window.Vue.normalizeClass, sT = window.Vue.normalizeStyle, aT = window.Vue.createCommentVNode;
var lT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uT = {
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
}, cT = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, dT = tT({
  emits: cT,
  props: uT,
  setup(e, o) {
    const r = gn(), s = gn(), a = qp(e, "open"), u = qp(e, "noExpand"), c = gn("auto"), f = gn(), w = gn(e.triggerId || ie("feather-menu-trigger")), m = gn(ie("feather-menu-dropdown")), _ = gn(""), y = gn("");
    nT(() => {
      f.value = window;
    });
    const $ = gn(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), D = () => {
      if (!s.value)
        return;
      const k = r.value.getBoundingClientRect();
      $.value = !0, c.value = "auto", oT(() => {
        let { height: F, width: R } = s.value.getBoundingClientRect();
        const q = T(), ge = q.height, de = q.width;
        e.fill && R < k.width ? (c.value = k.width + "px", R = k.width) : c.value = R + "px";
        let me = 0;
        ge - k.bottom < F && k.top >= F ? (me = k.top - F, e.cover && (me += k.height)) : (me = k.bottom, e.cover && (me -= k.height));
        let Ve = e.right ? k.right - R : k.left;
        !e.right && k.right >= R && de - k.left < R && (Ve = k.right - R), e.right && k.right <= R && de - k.left > R && (Ve = k.left), y.value = `${Ve}px`, _.value = `${me}px`, $.value = !1;
      });
    }, M = JA(r, (k) => {
      o.emit("outside-click", k);
    }), S = YA(D), L = Bm(f, D);
    rT([a, s], ([k, F]) => {
      k && F && D(), M.value = k, S.value = k, L.value = k;
    });
    const A = Hp(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = m.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), O = Hp(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: _,
      positionLeft: y,
      triggerId: w,
      triggerAttrs: A,
      triggerListeners: O,
      menuId: m,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: D,
      calculating: $
    };
  }
}), fT = ["data-ref-id"], hT = ["data-ref-id", "id"];
function pT(e, o, r, s, a, u) {
  return zp(), Yp("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Gp(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (zp(), Yp("div", {
      key: 0,
      class: iT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: sT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Gp(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, hT)) : aT("", !0)
  ], 8, fT);
}
var Dm = /* @__PURE__ */ lT(dT, [["render", pT], ["__scopeId", "data-v-f75af406"]]), wT = {
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
const vT = window.Vue.openBlock, mT = window.Vue.createElementBlock, _T = window.Vue.createElementVNode;
var gT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $T = {}, yT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VT = /* @__PURE__ */ _T("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), bT = [
  VT
];
function CT(e, o) {
  return vT(), mT("svg", yT, bT);
}
var ST = /* @__PURE__ */ gT($T, [["render", CT]]);
const ET = window.Vue.openBlock, IT = window.Vue.createElementBlock, zc = window.Vue.createElementVNode;
var kT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const xT = {}, AT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TT = /* @__PURE__ */ zc("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), BT = /* @__PURE__ */ zc("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), DT = /* @__PURE__ */ zc("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), LT = [
  TT,
  BT,
  DT
];
function MT(e, o) {
  return ET(), IT("svg", AT, LT);
}
var NT = /* @__PURE__ */ kT(xT, [["render", MT]]);
const OT = window.Vue.openBlock, PT = window.Vue.createElementBlock, RT = window.Vue.createElementVNode;
var FT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const UT = {}, WT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, qT = /* @__PURE__ */ RT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), HT = [
  qT
];
function zT(e, o) {
  return OT(), PT("svg", WT, HT);
}
var Ma = /* @__PURE__ */ FT(UT, [["render", zT]]);
const xi = function(e, o) {
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
const YT = window.Vue.defineComponent, GT = window.Vue.openBlock, jT = window.Vue.createElementBlock, ZT = window.Vue.normalizeClass, KT = window.Vue.pushScopeId, JT = window.Vue.popScopeId, yc = window.Vue.createElementVNode;
var XT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, eB = {
  click: (e) => !0
}, tB = YT({
  emits: eB,
  props: QT,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), Lm = (e) => (KT("data-v-07e020f5"), e = e(), JT(), e), nB = /* @__PURE__ */ Lm(() => /* @__PURE__ */ yc("div", { class: "track" }, null, -1)), rB = /* @__PURE__ */ Lm(() => /* @__PURE__ */ yc("div", { class: "switcher" }, [
  /* @__PURE__ */ yc("div", { class: "switch-circle" })
], -1)), oB = [
  nB,
  rB
];
function iB(e, o, r, s, a, u) {
  return GT(), jT("div", {
    class: ZT(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, oB, 2);
}
var sB = /* @__PURE__ */ XT(tB, [["render", iB], ["__scopeId", "data-v-07e020f5"]]), aB = Object.defineProperty, lB = Object.defineProperties, uB = Object.getOwnPropertyDescriptors, jp = Object.getOwnPropertySymbols, cB = Object.prototype.hasOwnProperty, dB = Object.prototype.propertyIsEnumerable, Zp = (e, o, r) => o in e ? aB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Kp = (e, o) => {
  for (var r in o || (o = {}))
    cB.call(o, r) && Zp(e, r, o[r]);
  if (jp)
    for (var r of jp(o))
      dB.call(o, r) && Zp(e, r, o[r]);
  return e;
}, Jp = (e, o) => lB(e, uB(o));
const Yc = window.Vue.defineComponent, ur = window.Vue.h, fB = window.Vue.openBlock, hB = window.Vue.createElementBlock, pB = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var Mm = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const wB = {
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
}, vB = Yc({
  inheritAttrs: !1,
  props: wB,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = ur("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = ur("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = ur("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : ur(jn);
    if (this.asLi)
      return ur("li", Jp(Kp({}, this.$attrs), {
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
    const u = ur("a", Jp(Kp({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return ur("li", {}, [u]);
  }
});
var Pi = /* @__PURE__ */ Mm(vB, [["__scopeId", "data-v-7c46b2b3"]]);
Yc({
  components: {
    FeatherListItem: Pi
  }
});
const mB = {}, _B = { class: "feather-list" };
function gB(e, o) {
  return fB(), hB("ul", _B, [
    pB(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Gc = /* @__PURE__ */ Mm(mB, [["render", gB], ["__scopeId", "data-v-941a1d50"]]);
const $B = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, yB = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Yc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $B,
  props: yB,
  computed: {
    labelId() {
      return ie("switch-label");
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
  components: { SwitchRender: sB, FeatherListItem: Pi }
});
var VB = Object.defineProperty, bB = Object.defineProperties, CB = Object.getOwnPropertyDescriptors, Xp = Object.getOwnPropertySymbols, SB = Object.prototype.hasOwnProperty, EB = Object.prototype.propertyIsEnumerable, Qp = (e, o, r) => o in e ? VB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Vt = (e, o) => {
  for (var r in o || (o = {}))
    SB.call(o, r) && Qp(e, r, o[r]);
  if (Xp)
    for (var r of Xp(o))
      EB.call(o, r) && Qp(e, r, o[r]);
  return e;
}, IB = (e, o) => bB(e, CB(o));
const yo = window.Vue.defineComponent, oe = window.Vue.openBlock, Be = window.Vue.createElementBlock, at = window.Vue.createElementVNode, Zt = window.Vue.toDisplayString, Nt = window.Vue.createCommentVNode, xe = window.Vue.resolveComponent, Mt = window.Vue.createBlock, Ge = window.Vue.withCtx, uo = window.Vue.Fragment, Vi = window.Vue.renderList, lt = window.Vue.createVNode, jc = window.Vue.withModifiers, br = window.Vue.normalizeClass, Vc = window.Vue.renderSlot, Nm = window.Vue.createTextVNode, kB = window.Vue.pushScopeId, xB = window.Vue.popScopeId, Om = window.Vue.reactive, Pm = window.Vue.nextTick, Bu = window.Vue.markRaw, Du = window.Vue.toRef, ew = window.Vue.computed, AB = window.Vue.toRefs, Zr = window.Vue.ref, Lu = window.Vue.mergeProps, tw = window.Vue.toHandlers, Rs = window.Vue.withDirectives, Fs = window.Vue.vShow;
var Na = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Zc = {
  query: {
    type: String
  }
}, Ir = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const TB = yo({
  mixins: [],
  props: Vt(Vt({
    text: {
      type: String,
      required: !0
    }
  }, Na), Zc),
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
}), BB = {
  key: 0,
  class: "highlight"
}, DB = { key: 1 };
function LB(e, o, r, s, a, u) {
  return oe(), Be("span", null, [
    at("span", null, Zt(e.beginning), 1),
    e.highlighted ? (oe(), Be("span", BB, Zt(e.highlighted), 1)) : Nt("", !0),
    e.end ? (oe(), Be("span", DB, Zt(e.end), 1)) : Nt("", !0)
  ]);
}
var Rm = /* @__PURE__ */ Ir(TB, [["render", LB], ["__scopeId", "data-v-8abe2492"]]);
const MB = yo({
  emits: ["select", "deselect"],
  props: Vt(Vt({
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
  }, Na), Zc),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        xi(o, r.$el);
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
    FeatherList: Gc,
    FeatherListItem: Pi,
    Highlighter: Rm
  }
}), NB = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function OB(e, o, r, s, a, u) {
  const c = xe("Highlighter"), f = xe("FeatherListItem"), w = xe("FeatherList");
  return oe(), Mt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ge(() => [
      (oe(!0), Be(uo, null, Vi(e.items, (m, _) => (oe(), Be(uo, {
        key: m[e.textProp]
      }, [
        lt(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(m),
          highlighted: e.isActive(_),
          selected: e.isSelected(m),
          onClick: jc((y) => e.select(m), ["stop"])
        }, {
          default: Ge(() => [
            lt(c, {
              highlight: e.highlight,
              query: e.query,
              text: m[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            m._new ? (oe(), Be("span", NB, Zt(e.newLabel), 1)) : Nt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && m._new ? (oe(), Be("li", {
          role: "presentation",
          key: m[e.textProp] + "hr",
          class: "hr"
        })) : Nt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var PB = /* @__PURE__ */ Ir(MB, [["render", OB], ["__scopeId", "data-v-f623434a"]]);
const RB = yo({
  emits: ["select"],
  props: Vt(Vt({
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
  }, Na), Zc),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        xi(o, r);
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
    Highlighter: Rm
  }
}), FB = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, UB = ["aria-multiselectable"], WB = { role: "row" }, qB = ["aria-selected", "onClick"], HB = ["id", "aria-selected"], zB = { key: 1 };
function YB(e, o, r, s, a, u) {
  const c = xe("Highlighter");
  return oe(), Be("div", FB, [
    at("table", {
      class: br(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      at("thead", null, [
        at("tr", WB, [
          (oe(!0), Be(uo, null, Vi(e.config, (f) => (oe(), Be("th", {
            key: f.title
          }, Zt(f.title), 1))), 128))
        ])
      ]),
      at("tbody", null, [
        (oe(!0), Be(uo, null, Vi(e.items, (f, w) => (oe(), Be("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: br({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: jc((m) => e.select(f), ["stop"])
        }, [
          (oe(!0), Be(uo, null, Vi(e.config, (m, _) => (oe(), Be("td", {
            key: f[e.textProp] + m.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: br({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            m.prop === e.textProp ? (oe(), Mt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[m.prop]
            }, null, 8, ["highlight", "query", "text"])) : (oe(), Be("p", zB, Zt(f[m.prop]), 1))
          ], 10, HB))), 128))
        ], 10, qB))), 128))
      ])
    ], 10, UB)
  ], 512);
}
var GB = /* @__PURE__ */ Ir(RB, [["render", YB], ["__scopeId", "data-v-58c88fd1"]]);
const jB = yo({
  components: {
    FeatherList: Gc,
    FeatherListItem: Pi
  }
});
function ZB(e, o, r, s, a, u) {
  const c = xe("FeatherListItem"), f = xe("FeatherList");
  return oe(), Mt(f, { class: "result-list" }, {
    default: Ge(() => [
      lt(c, { "as-li": "" }, {
        default: Ge(() => [
          Vc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var KB = /* @__PURE__ */ Ir(jB, [["render", ZB], ["__scopeId", "data-v-06b752c6"]]);
const JB = yo({
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
    Cancel: go,
    BaseChip: Ba,
    BaseChipLabel: Da,
    BaseChipPreIcon: La
  }
});
function XB(e, o, r, s, a, u) {
  const c = xe("FeatherIcon"), f = xe("BaseChipPreIcon"), w = xe("BaseChipLabel"), m = xe("Cancel"), _ = xe("BaseChip");
  return oe(), Mt(_, {
    class: br(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Ge(() => [
      e.showPreIcon ? (oe(), Mt(f, { key: 0 }, {
        default: Ge(() => {
          var y, $;
          return [
            lt(c, {
              icon: (y = e.pre) == null ? void 0 : y.icon,
              title: ($ = e.pre) == null ? void 0 : $.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Nt("", !0),
      lt(w, null, {
        default: Ge(() => [
          Nm(Zt(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Nt("", !0) : (oe(), Be("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = jc((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
      }, [
        lt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Ge(() => [
            lt(m)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var QB = /* @__PURE__ */ Ir(JB, [["render", XB], ["__scopeId", "data-v-e0fc6ac0"]]);
const eD = {}, tD = (e) => (kB("data-v-aa720e06"), e = e(), xB(), e), nD = { class: "spinner-container" }, rD = /* @__PURE__ */ tD(() => /* @__PURE__ */ at("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ at("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), oD = [
  rD
];
function iD(e, o) {
  return oe(), Be("div", nD, oD);
}
var sD = /* @__PURE__ */ Ir(eD, [["render", iD], ["__scopeId", "data-v-aa720e06"]]), Oa = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Oa || {});
const Fm = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, aD = Vt(Vt(Vt({
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
    validator: (e) => !!Oa[e]
  },
  labels: {
    type: Object,
    default: () => Fm
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Na), Mi), qc), lD = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, uD = (e, o, r, s) => {
  if (r.toLowerCase() === Oa.multi) {
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
}, cD = () => {
  const e = Om({
    row: -1
  }), o = (u) => {
    Pm(() => {
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
}, dD = (e) => {
  const o = Om({
    row: -1,
    col: -1
  }), r = (c, f) => {
    Pm(() => {
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
}, fD = yo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: lD,
  props: aD,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Oa.multi;
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
      return ie("result-item");
    },
    minCharWarningId() {
      return ie("min-char-warning");
    },
    subTextId() {
      return ie("feather-autocomplete-description");
    },
    resultsId() {
      return ie("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ie("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Bu(ST);
    },
    minCharIcon() {
      return Bu(NT);
    },
    dropdownIcon() {
      return Bu(Ma);
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
        xi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          xi(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = ie("active-chip"), this.activeChipId;
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
      r !== void 0 && (Sr(this.typingTimeout), this.typingTimeout = Cr(() => {
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
    const r = Aa(Du(e, "labels"), Fm);
    Ni(e), Hc(e);
    let s;
    e.gridConfig ? s = dD(e.gridConfig) : s = cD();
    const a = Du(e, "id"), u = ew(() => a.value ? a.value : ie("feather-autocomplete-input")), { validate: c } = Di(u, Du(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: m, allowNew: _, type: y, minChar: $ } = AB(e), T = Zr(!1), D = Zr(!1), N = Zr(!1), M = Zr(""), S = Zr([]), L = Zr(), A = ew(() => L.value), O = () => {
      T.value && !D.value && (M.value && M.value.length >= $.value && o.emit("search", M.value), $.value <= 0 && o.emit("search", M.value || ""), S.value = [], s.reset());
    }, k = uD({
      selectionLimit: f,
      selectionLimitReached: D,
      modelValue: w,
      textProp: m,
      allowNew: _,
      forceCloseResults: N,
      query: M,
      internalResults: S,
      input: A,
      emitSearch: O
    }, s, y.value, o.emit);
    return IB(Vt(Vt({}, r), Li(o.attrs)), {
      query: M,
      internalResults: S,
      selectionLimitReached: D,
      forceCloseResults: N,
      hasFocus: T,
      strategy: k,
      emitSearch: O,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: L,
      incomingId: a,
      inputRef: A,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Wc,
    InputSubText: Bi,
    AutocompleteResults: PB,
    AutocompleteResultsGrid: GB,
    Chip: QB,
    MenuMessage: KB,
    FeatherIcon: G,
    FeatherMenu: Dm,
    Spinner: sD
  }
}), hD = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, pD = ["id"], wD = { "data-ref-id": "feather-autocomplete-no-results" }, vD = { "data-ref-id": "feather-autocomplete-selection-limit" }, mD = { "data-ref-id": "feather-autocomplete-min-char" };
function _D(e, o, r, s, a, u) {
  const c = xe("FeatherIcon"), f = xe("Chip"), w = xe("InputWrapper"), m = xe("AutocompleteResults"), _ = xe("AutocompleteResultsGrid"), y = xe("MenuMessage"), $ = xe("Spinner"), T = xe("FeatherMenu"), D = xe("InputSubText");
  return oe(), Be("div", Lu(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    lt(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: br(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ge(({ attrs: N, on: M }) => [
        lt(w, Lu(Vt(Vt({}, N), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, tw(M), { ref: "scroll" }), {
          pre: Ge(() => [
            Vc(e.$slots, "pre", {}, () => [
              lt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ge(() => [
            lt(c, {
              icon: e.dropdownIcon,
              class: br(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ge(() => [
            at("div", {
              class: br(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              at("div", hD, null, 512),
              at("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, Zt(e.selectedDescribedByText), 9, pD),
              (oe(!0), Be(uo, null, Vi(e.modelValueList, (S, L) => Rs((oe(), Mt(f, {
                key: S[e.textProp],
                role: "button",
                id: L === e.activeChipIndex ? e.activeChipId : null,
                focused: L === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (A) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Fs, !e.singleSelect]
              ])), 128)),
              at("textarea", Lu(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, tw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ge(() => [
        e.gridConfig ? Nt("", !0) : Rs((oe(), Mt(m, {
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
          [Fs, e.showResults]
        ]),
        e.gridConfig ? Rs((oe(), Mt(_, {
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
          [Fs, e.showResults]
        ]) : Nt("", !0),
        e.showNoResults ? (oe(), Mt(y, { key: 2 }, {
          default: Ge(() => [
            at("span", wD, Zt(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Nt("", !0),
        e.showSelectionLimit ? (oe(), Mt(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ge(() => [
            lt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            at("span", vD, Zt(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Nt("", !0),
        e.minChar ? Rs((oe(), Mt(y, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Ge(() => [
            lt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            at("span", mD, [
              Vc(e.$slots, "min-char", {}, () => [
                Nm(Zt(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Fs, e.showMinCharWarning]
        ]) : Nt("", !0),
        e.showLoading ? (oe(), Mt($, { key: 5 })) : Nt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    lt(D, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var gD = /* @__PURE__ */ Ir(fD, [["render", _D], ["__scopeId", "data-v-43a7e951"]]);
var $D = Object.defineProperty, yD = Object.defineProperties, VD = Object.getOwnPropertyDescriptors, nw = Object.getOwnPropertySymbols, bD = Object.prototype.hasOwnProperty, CD = Object.prototype.propertyIsEnumerable, rw = (e, o, r) => o in e ? $D(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, aa = (e, o) => {
  for (var r in o || (o = {}))
    bD.call(o, r) && rw(e, r, o[r]);
  if (nw)
    for (var r of nw(o))
      CD.call(o, r) && rw(e, r, o[r]);
  return e;
}, Um = (e, o) => yD(e, VD(o));
const Wm = window.Vue.defineComponent, SD = window.Vue.ref, bi = window.Vue.computed, ED = window.Vue.reactive, ow = window.Vue.watch, Mu = window.Vue.inject, qm = window.Vue.resolveComponent, bc = window.Vue.openBlock, Hm = window.Vue.createElementBlock, Gn = window.Vue.createElementVNode, ID = window.Vue.createBlock, kD = window.Vue.createCommentVNode, zm = window.Vue.renderSlot, xD = window.Vue.pushScopeId, AD = window.Vue.popScopeId, Nu = window.Vue.toRef, iw = window.Vue.mergeProps, TD = window.Vue.toDisplayString, BD = window.Vue.createVNode;
var Ym = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DD = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, LD = Wm({
  props: DD,
  setup(e) {
    const o = SD(), r = () => {
      o.value.focus();
    }, s = bi(() => ie("feather-radio-button")), a = ED({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = bi(() => ie("radio-label-id")), c = bi(() => a.first || a.checked ? 0 : -1);
    ow(() => e.disabled, (y) => {
      a.disabled = y;
    }, { immediate: !0 }), ow(() => e.value, (y) => {
      a.value = y;
    }, { immediate: !0 });
    const f = Mu("register", (y) => {
    }), w = Mu("blur", (y) => {
    }), m = Mu("select", (y) => {
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
    FeatherRipple: jn
  }
}), MD = (e) => (xD("data-v-24790cf0"), e = e(), AD(), e), ND = { class: "layout-container" }, OD = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], PD = { class: "radio hover focus" }, RD = /* @__PURE__ */ MD(() => /* @__PURE__ */ Gn("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Gn("svg", { class: "dot" }, [
    /* @__PURE__ */ Gn("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), FD = ["id"];
function UD(e, o, r, s, a, u) {
  const c = qm("feather-ripple");
  return bc(), Hm("div", ND, [
    Gn("div", {
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
      Gn("div", PD, [
        RD,
        e.vm.disabled ? kD("", !0) : (bc(), ID(c, {
          key: 0,
          center: ""
        }))
      ]),
      Gn("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        zm(e.$slots, "default", {}, void 0, !0)
      ], 8, FD)
    ], 40, OD)
  ]);
}
var Cc = /* @__PURE__ */ Ym(LD, [["render", UD], ["__scopeId", "data-v-24790cf0"]]);
const WD = Um(aa({}, Mi), {
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
}), qD = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, HD = Wm({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: WD,
  emits: qD,
  setup(e, o) {
    Ni(e);
    const r = Nu(e, "error"), s = Nu(e, "modelValue"), a = bi(() => ie("feather-input-description")), u = bi(() => {
      const c = Um(aa({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return aa(aa({
      descriptionId: a,
      attrs: u
    }, Im(s, o.emit, e.label, e.schema, Nu(e, "error"))), Li(o.attrs));
  },
  components: {
    InputSubText: Bi
  }
}), zD = ["for"], YD = ["id"];
function GD(e, o, r, s, a, u) {
  const c = qm("InputSubText");
  return bc(), Hm("div", iw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Gn("label", {
      for: e.groupId,
      class: "group-label"
    }, TD(e.label), 9, zD),
    Gn("div", iw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      zm(e.$slots, "default", {}, void 0, !0)
    ], 16, YD),
    BD(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var Gm = /* @__PURE__ */ Ym(HD, [["render", GD], ["__scopeId", "data-v-6775aeb9"]]);
const jD = window.Vue.defineComponent, ZD = window.Vue.renderList, KD = window.Vue.Fragment, sw = window.Vue.openBlock, JD = window.Vue.createElementBlock, XD = window.Vue.toDisplayString, QD = window.Vue.createTextVNode, aw = window.Vue.unref, lw = window.Vue.withCtx, eL = window.Vue.createVNode, tL = window.Vue.createBlock, nL = window.Vue.watch, rL = window.Vue.ref, oL = /* @__PURE__ */ jD({
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
    ], a = rL(r.preSelected || s[0].id);
    return nL(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (sw(), tL(aw(Gm), {
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
      default: lw(() => [
        (sw(), JD(KD, null, ZD(s, (f) => eL(aw(Cc), {
          value: f.id,
          key: f.id
        }, {
          default: lw(() => [
            QD(XD(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const iL = /* @__PURE__ */ se(oL, [["__scopeId", "data-v-0363302c"]]);
var sL = Object.defineProperty, aL = Object.defineProperties, lL = Object.getOwnPropertyDescriptors, uw = Object.getOwnPropertySymbols, uL = Object.prototype.hasOwnProperty, cL = Object.prototype.propertyIsEnumerable, cw = (e, o, r) => o in e ? sL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Qo = (e, o) => {
  for (var r in o || (o = {}))
    uL.call(o, r) && cw(e, r, o[r]);
  if (uw)
    for (var r of uw(o))
      cL.call(o, r) && cw(e, r, o[r]);
  return e;
}, dw = (e, o) => aL(e, lL(o));
const dL = window.Vue.defineComponent, fL = window.Vue.inject, ei = window.Vue.h;
var hL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pL = {
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
}, wL = dL({
  inheritAttrs: !1,
  props: pL,
  setup() {
    return { hasTooltip: fL("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Qo({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = ei(jn);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), ei(o, dw(Qo(Qo({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ei(jn, { center: !0 })
      ]);
    }
    const c = ei("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ei(o, dw(Qo(Qo({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var fe = /* @__PURE__ */ hL(wL, [["__scopeId", "data-v-702d1074"]]);
const vL = window.Vue.openBlock, mL = window.Vue.createElementBlock, _L = window.Vue.createElementVNode;
var gL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $L = {}, yL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VL = /* @__PURE__ */ _L("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), bL = [
  VL
];
function CL(e, o) {
  return vL(), mL("svg", yL, bL);
}
var SL = /* @__PURE__ */ gL($L, [["render", CL]]);
const EL = window.Vue.openBlock, IL = window.Vue.createElementBlock, kL = window.Vue.createElementVNode;
var xL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AL = {}, TL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, BL = /* @__PURE__ */ kL("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), DL = [
  BL
];
function LL(e, o) {
  return EL(), IL("svg", TL, DL);
}
var ML = /* @__PURE__ */ xL(AL, [["render", LL]]);
const NL = window.Vue.openBlock, OL = window.Vue.createElementBlock, PL = window.Vue.createElementVNode;
var RL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FL = {}, UL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WL = /* @__PURE__ */ PL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), qL = [
  WL
];
function HL(e, o) {
  return NL(), OL("svg", UL, qL);
}
var jm = /* @__PURE__ */ RL(FL, [["render", HL]]);
const zL = window.Vue.defineComponent, tn = window.Vue.unref, cr = window.Vue.createVNode, fw = window.Vue.toDisplayString, bn = window.Vue.createElementVNode, Zm = window.Vue.createTextVNode, hw = window.Vue.openBlock, pw = window.Vue.createElementBlock, YL = window.Vue.createCommentVNode, GL = window.Vue.withCtx, jL = window.Vue.vShow, ZL = window.Vue.normalizeClass, KL = window.Vue.withDirectives, JL = window.Vue.Fragment, XL = window.Vue.pushScopeId, QL = window.Vue.popScopeId, Km = (e) => (XL("data-v-b1dc2670"), e = e(), QL(), e), eM = /* @__PURE__ */ Zm(" Filters "), tM = { class: "count" }, nM = { class: "results" }, rM = { class: "total" }, oM = /* @__PURE__ */ Zm(" Reset "), iM = /* @__PURE__ */ Km(() => /* @__PURE__ */ bn("div", { class: "title" }, "By Severities:", -1)), sM = /* @__PURE__ */ Km(() => /* @__PURE__ */ bn("div", { class: "title" }, "By Start Date:", -1)), dr = window.Vue.ref, aM = window.Vue.reactive, lM = window.Vue.markRaw, ww = window.Vue.watch, uM = /* @__PURE__ */ zL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = lM({
      FilterAlt: SL,
      ExpandLess: ML,
      ExpandMore: Ma,
      Refresh: jm
    }), a = Kt(), u = dr(r.isOpen), c = dr(["all"]), f = dr(1), w = dr(r.list), m = dr(!1), _ = dr(0), y = dr(null), $ = aM({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var F, R;
      r.saveFilters && a.filters && (a.filters.node && ($.nodeSelectedValue = a.filters.node), ((F = a.filters) == null ? void 0 : F.severities) && !((R = a.filters) != null && R.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, A());
    }, D = () => {
      $.nodes = a.nodes, $.results = a.nodes;
    };
    ww(
      () => a.nodes,
      () => {
        D();
      }
    ), ww(r, () => {
      w.value = r.list, T();
    });
    const N = (F) => {
      c.value = F, A();
    }, M = (F) => {
      f.value = F, A();
    }, S = (F) => {
      if (!F)
        return $.nodeSelectedValue = void 0, [];
      m.value = !0, $.results = $.nodes.filter((R) => R.label.toLowerCase().indexOf(F) > -1).map((R) => ({
        _text: R.label,
        id: R.id
      })), m.value = !1;
    }, L = () => {
      c.value = ["all"], f.value = 1, $.nodeSelectedValue = void 0, _.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), w.value = r.list;
    }, A = () => {
      _.value = 0;
      let F = r.list;
      $.nodeSelectedValue && $.nodeSelectedValue._text && (_.value++, r.isSituation ? F = F.map((R) => {
        if (R.relatedAlarms.filter(
          (de) => {
            var me;
            return de.nodeLabel === ((me = $.nodeSelectedValue) == null ? void 0 : me._text);
          }
        ).length > 0)
          return R;
      }).filter((R) => R) : F = F.filter(
        (R) => {
          var q;
          return R.nodeLabel === ((q = $.nodeSelectedValue) == null ? void 0 : q._text);
        }
      )), c.value.includes("all") || (_.value++, F = F.filter(
        (R) => c.value.includes(R.severity)
      )), f.value !== 1 && (_.value++, F = a2(
        f.value,
        F
      )), w.value = F, r.saveFilters && O(), o("filtered-list", F);
    }, O = () => {
      a.filters = {
        node: $.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, k = () => {
      u.value = !u.value;
    };
    return (F, R) => (hw(), pw(JL, null, [
      r.isOpen ? YL("", !0) : (hw(), pw("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        bn("div", null, [
          cr(tn(G), {
            icon: tn(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          eM,
          bn("span", tM, fw(_.value), 1)
        ]),
        cr(tn(G), {
          icon: u.value ? tn(s).ExpandLess : tn(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      KL(bn("div", {
        class: ZL(["filters", { collapsed: !r.isOpen }])
      }, [
        bn("div", nM, [
          bn("div", rM, "Results: " + fw(tn(w).length), 1),
          cr(tn(fe), {
            class: "btn-reset",
            onClick: L
          }, {
            default: GL(() => [
              cr(tn(G), {
                icon: tn(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              oM
            ]),
            _: 1
          })
        ]),
        bn("div", null, [
          cr(tn(gD), {
            ref_key: "autocomplete",
            ref: y,
            label: "Search by node",
            loading: m.value,
            modelValue: $.nodeSelectedValue,
            "onUpdate:modelValue": [
              R[0] || (R[0] = (q) => $.nodeSelectedValue = q),
              A
            ],
            results: $.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          iM,
          cr(UA, {
            alarms: r.list,
            onSelectedOption: N,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          bn("div", null, [
            sM,
            cr(iL, {
              onFilterDateSelected: M,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [jL, u.value]
      ])
    ], 64));
  }
});
const Vo = /* @__PURE__ */ se(uM, [["__scopeId", "data-v-b1dc2670"]]), cM = window.Vue.openBlock, dM = window.Vue.createElementBlock, fM = window.Vue.createElementVNode;
var hM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pM = {}, wM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vM = /* @__PURE__ */ fM("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), mM = [
  vM
];
function _M(e, o) {
  return cM(), dM("svg", wM, mM);
}
var Pa = /* @__PURE__ */ hM(pM, [["render", _M]]);
const gM = window.Vue.openBlock, $M = window.Vue.createElementBlock, Jm = window.Vue.createElementVNode;
var yM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VM = {}, bM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CM = /* @__PURE__ */ Jm("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), SM = /* @__PURE__ */ Jm("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), EM = [
  CM,
  SM
];
function IM(e, o) {
  return gM(), $M("svg", bM, EM);
}
var kM = /* @__PURE__ */ yM(VM, [["render", IM]]);
const xM = window.Vue.openBlock, AM = window.Vue.createElementBlock, TM = window.Vue.createElementVNode;
var BM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DM = {}, LM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MM = /* @__PURE__ */ TM("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), NM = [
  MM
];
function OM(e, o) {
  return xM(), AM("svg", LM, NM);
}
var PM = /* @__PURE__ */ BM(DM, [["render", OM]]);
const Jn = () => window.VRouter || j_;
const RM = window.Vue.openBlock, FM = window.Vue.createElementBlock, UM = window.Vue.pushScopeId, WM = window.Vue.popScopeId, vw = window.Vue.createElementVNode;
var qM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const HM = {}, zM = (e) => (UM("data-v-2263be39"), e = e(), WM(), e), YM = { class: "spinner-container" }, GM = /* @__PURE__ */ zM(() => /* @__PURE__ */ vw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), jM = [
  GM
];
function ZM(e, o) {
  return RM(), FM("div", YM, jM);
}
var Kc = /* @__PURE__ */ qM(HM, [["render", ZM], ["__scopeId", "data-v-2263be39"]]);
const KM = window.Vue.defineComponent, Ou = window.Vue.unref, JM = window.Vue.createVNode, XM = window.Vue.createElementVNode, QM = window.Vue.withCtx, eN = window.Vue.openBlock, tN = window.Vue.createBlock, nN = window.Vue.pushScopeId, rN = window.Vue.popScopeId, oN = (e) => (nN("data-v-fba500de"), e = e(), rN(), e), iN = /* @__PURE__ */ oN(() => /* @__PURE__ */ XM("span", null, "New Situation", -1)), sN = window.Vue.markRaw, aN = /* @__PURE__ */ KM({
  __name: "NewSituationBtn",
  setup(e) {
    const o = Jn(), r = sN({
      Add: Pa
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (eN(), tN(Ou(fe), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: QM(() => [
        JM(Ou(G), {
          icon: Ou(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        iN
      ]),
      _: 1
    }));
  }
});
const Xm = /* @__PURE__ */ se(aN, [["__scopeId", "data-v-fba500de"]]), lN = "/whoami", uN = async () => {
  try {
    const e = await In.get(lN);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Jc = "/alec", Qm = "/alec/engine/configuration", cN = "/alec/situation", dN = async () => {
  try {
    const e = await In.get(`${Qm}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, fN = async (e) => {
  try {
    return (await In.post(Qm, e)).status === 200;
  } catch {
    return !1;
  }
}, e_ = async (e, o) => {
  try {
    const r = await In.post(`${Jc}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == Ne.REJECTED.toLowerCase() && r.status === 200 && await fm(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, mw = async (e, o) => {
  try {
    return (await In.delete(`${Jc}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, t_ = async (e, o) => {
  try {
    return (await In.put(`${Jc}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, hN = async (e) => {
  try {
    return (await In.post(cN, e)).status === 200;
  } catch {
    return !1;
  }
}, pN = window.Pinia.defineStore, wN = {
  alpha: 144.47117699,
  beta: 0.55257784,
  epsilon: 100
}, vo = pN("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null
  }),
  actions: {
    async getUserRole() {
      const e = await uN();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await dN();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o) {
      const r = {
        ...wN,
        distanceMeasureName: o ? Ne.HELLINGER_OPTION : Ne.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return await fN(r) ? (this.engineInfo = r, !0) : !1;
    }
  }
}), vN = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", mN = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", _N = window.Vue.defineComponent, Us = window.Vue.unref, _w = window.Vue.createElementVNode, Pu = window.Vue.openBlock, Ru = window.Vue.createElementBlock, gN = window.Vue.createCommentVNode, $N = window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const yN = {
  key: 0,
  class: "info-engine"
}, VN = ["src"], bN = /* @__PURE__ */ $N(" ENGINE "), CN = {
  key: 0,
  class: "type"
}, SN = {
  key: 1,
  class: "type"
}, EN = window.Vue.watch, IN = window.Vue.ref, kN = /* @__PURE__ */ _N({
  __name: "ConfigurationInfo",
  setup(e) {
    var u;
    const o = Jn(), r = vo(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = IN(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == Ne.ENGINE_DBSCAN
    );
    return EN(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == Ne.ENGINE_DBSCAN;
      }
    ), (c, f) => Us(r).engineInfo && Us(r).engineInfo.engineName ? (Pu(), Ru("div", yN, [
      _w("img", {
        src: a.value ? Us(mN) : Us(vN),
        class: "icon-type"
      }, null, 8, VN),
      _w("div", {
        class: "engine",
        onClick: s
      }, [
        bN,
        a.value ? (Pu(), Ru("div", CN, "CLUSTERING")) : (Pu(), Ru("div", SN, "DEEP LEARNING"))
      ])
    ])) : gN("", !0);
  }
});
const xN = /* @__PURE__ */ se(kN, [["__scopeId", "data-v-9a6c1414"]]);
const AN = {}, TN = window.Vue.openBlock, BN = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const DN = { class: "empty" };
function LN(e, o) {
  return TN(), BN("div", DN, "No results found.");
}
const bo = /* @__PURE__ */ se(AN, [["render", LN], ["__scopeId", "data-v-725433ac"]]), MN = window.Vue.defineComponent, nn = window.Vue.createElementVNode, ti = window.Vue.unref, fr = window.Vue.createVNode, NN = window.Vue.withCtx, Ws = window.Vue.toDisplayString, $n = window.Vue.openBlock, hr = window.Vue.createElementBlock, gw = window.Vue.createCommentVNode, $w = window.Vue.createBlock, ON = window.Vue.renderList, PN = window.Vue.Fragment, RN = window.Vue.pushScopeId, FN = window.Vue.popScopeId, n_ = (e) => (RN("data-v-2675e2f8"), e = e(), FN(), e), UN = { class: "list-main" }, WN = { class: "header" }, qN = /* @__PURE__ */ n_(() => /* @__PURE__ */ nn("h2", null, "Situation List", -1)), HN = { class: "link-btns" }, zN = /* @__PURE__ */ n_(() => /* @__PURE__ */ nn("span", null, "View Unassociated Alarms", -1)), YN = { class: "content" }, GN = { class: "left-filters" }, jN = { class: "container" }, ZN = { class: "autocomplete" }, KN = { key: 0 }, JN = { key: 1 }, XN = { key: 0 }, QN = { class: "situation-list" }, eO = {
  key: 0,
  class: "footer-pager"
}, tO = window.Vue.reactive, qs = window.Vue.ref, nO = window.Vue.watch, rO = window.Vue.markRaw, oO = /* @__PURE__ */ MN({
  __name: "SituationList",
  setup(e) {
    const o = rO({
      Add: Pa,
      View: kM,
      Settings: PM
    }), r = Jn(), s = Kt(), a = vo();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = tO({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = qs(!0), w = qs(0), m = qs(1), _ = qs(0), y = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    nO(
      () => s.situations,
      () => {
        f.value = !1, y(), N(s.situations);
      }
    );
    const $ = (S) => {
      w.value = S, c.situations = c.allSituations[w.value];
    }, T = (S) => {
      r.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, D = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, N = (S) => {
      _.value = S.length, c.allSituations = ce.exports.chunk(S, u);
      const L = S.map((A) => A.id);
      s.filteredSituations = L, w.value = 0, c.situations = c.allSituations[0], m.value = c.allSituations.length;
    }, M = (S) => {
      S.length ? N(S) : c.situations = [];
    };
    return (S, L) => {
      var A;
      return $n(), hr("div", UN, [
        nn("div", WN, [
          qN,
          nn("div", HN, [
            fr(ti(fe), {
              class: "view-situation-btn",
              onClick: L[0] || (L[0] = () => D())
            }, {
              default: NN(() => [
                fr(ti(G), {
                  icon: ti(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                zN
              ]),
              _: 1
            }),
            fr(Xm),
            fr(xN)
          ])
        ]),
        nn("div", YN, [
          nn("div", GN, [
            fr(Vo, {
              list: ti(s).situations,
              onFilteredList: M,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          nn("div", jN, [
            nn("div", ZN, [
              c.situations && c.situations.length ? ($n(), hr("div", KN, " Result: " + Ws((A = c.situations) == null ? void 0 : A.length) + " of " + Ws(_.value), 1)) : gw("", !0)
            ]),
            f.value ? ($n(), $w(ti(Kc), {
              key: 0,
              class: "spinner"
            })) : ($n(), hr("div", JN, [
              c.situations && c.situations.length ? ($n(), hr("div", XN, [
                nn("div", QN, [
                  ($n(!0), hr(PN, null, ON(c.situations, (O) => ($n(), hr("div", {
                    class: "card",
                    key: O.id
                  }, [
                    fr(Vm, {
                      onClick: () => T(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? ($n(), hr("div", eO, [
                  nn("div", null, "Page: " + Ws(w.value + 1) + " of " + Ws(m.value), 1),
                  fr(mk, {
                    onGoToPage: $,
                    currentPage: w.value,
                    totalPages: m.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : gw("", !0)
              ])) : ($n(), $w(bo, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const iO = /* @__PURE__ */ se(oO, [["__scopeId", "data-v-2675e2f8"]]);
const Hs = window.Vue.ref, sO = window.Vue.inject, aO = window.Vue.computed, lO = window.Vue.onMounted, r_ = {
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
}, o_ = (e) => {
  const o = Hs(!1), r = Hs(), s = Hs(e.controls), a = Hs(e.id), u = () => {
    r.value && r.value.focus();
  }, c = sO("registerTab");
  lO(() => {
    if (r.value && c) {
      const w = r.value.parentElement, m = w && w.parentElement ? w.parentElement : void 0, _ = Array.from(m ? m.children : []).filter(($) => $.querySelectorAll("[role=tab]").length), y = w ? _.indexOf(w) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: o,
        id: a,
        controls: s,
        index: y
      });
    }
  });
  const f = aO(() => ({
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
}, yw = window.Vue.ref, uO = window.Vue.toRef, cO = window.Vue.watch, Vw = window.Vue.provide, i_ = {
  prop: "modelValue",
  event: "update:modelValue"
}, s_ = {
  "update:modelValue": (e) => !0
}, a_ = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, l_ = (e, o) => {
  const r = uO(e, "modelValue"), s = yw(e.modelValue), a = yw([]);
  cO(r, (D) => {
    w(D);
  });
  const u = (D) => {
    D.preventDefault(), a.value.some((N, M) => N.tab && N.tab.el.contains(D.target) ? (f(M), w(M), !0) : !1);
  }, c = (D) => {
    if (((q) => q.shiftKey || q.ctrlKey || q.metaKey || q.altKey)(D))
      return;
    const M = D.keyCode, S = (q) => {
      q.stopPropagation(), q.preventDefault();
    }, L = a.value.filter((q) => q.tab && !q.tab.disabled), A = a.value.findIndex((q) => q.tab && q.tab.el.contains(document.activeElement));
    let O = A !== -1 ? A : s.value;
    const k = [X.RIGHT], F = [X.LEFT], R = [X.ENTER, X.SPACE];
    e.vertical && (k.push(X.DOWN), F.push(X.UP)), k.indexOf(M) > -1 ? (O++, O >= L.length && (O = 0), S(D), f(a.value.indexOf(L[O]))) : F.indexOf(M) > -1 && (O--, O < 0 && (O = L.length - 1), S(D), f(a.value.indexOf(L[O]))), R.indexOf(M) > -1 && w(O);
  }, f = (D) => {
    a.value.forEach(function(N, M) {
      D === M && N.tab && N.tab.focus();
    });
  }, w = (D) => {
    const N = a.value[D];
    !N || N.tab && N.tab.disabled || (a.value.forEach((M, S) => {
      M.tab && (M.tab.selected = D === S), M.panel && (M.panel.selected = D === S);
    }), s.value = D, o.emit("update:modelValue", D));
  };
  Vw("registerTab", (D) => {
    const N = D.index;
    N > -1 && (a.value[N] = { ...a.value[N], tab: D }, a.value = [...a.value], y());
  }), Vw("registerPanel", (D) => {
    const N = D.index;
    N > -1 && (a.value[N] = {
      ...a.value[N],
      panel: D
    }, a.value = [...a.value], y());
  });
  const y = () => {
    a.value.forEach(({ tab: D, panel: N }, M) => {
      if (N && D) {
        const S = D.id || ie("tab"), L = D.controls || ie("panel");
        D.controls = L, D.id = S, N.tab = S, N.id = L;
      }
      M === s.value && (N && (N.selected = !0), D && (D.selected = !0));
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
}, zs = window.Vue.ref, dO = window.Vue.inject, fO = window.Vue.computed, hO = window.Vue.onMounted, u_ = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, c_ = (e) => {
  const o = zs(!1), r = zs(), s = zs(e.tab), a = zs(e.id), u = dO("registerPanel");
  hO(() => {
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
  const c = fO(() => ({
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
}, Xc = window.Vue.defineComponent, pO = window.Vue.resolveComponent, Qc = window.Vue.openBlock, ed = window.Vue.createElementBlock, Ci = window.Vue.createElementVNode, d_ = window.Vue.mergeProps, $a = window.Vue.renderSlot, wO = window.Vue.createVNode, vO = window.Vue.normalizeStyle, mO = window.Vue.toHandlers, _O = window.Vue.withDirectives, gO = window.Vue.normalizeProps, $O = window.Vue.guardReactiveProps, yO = window.Vue.vShow;
var td = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VO = r_, bO = Xc({
  props: VO,
  setup(e) {
    return o_(e);
  },
  components: {
    FeatherRipple: jn
  }
}), CO = { role: "presentation" }, SO = { class: "tab-text" };
function EO(e, o, r, s, a, u) {
  const c = pO("FeatherRipple");
  return Qc(), ed("li", CO, [
    Ci("button", d_(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Ci("span", SO, [
        $a(e.$slots, "default", {}, void 0, !0)
      ]),
      wO(c)
    ], 16)
  ]);
}
var bw = /* @__PURE__ */ td(bO, [["render", EO], ["__scopeId", "data-v-e6bb52b6"]]);
const IO = a_, kO = s_, xO = Xc({
  model: i_,
  emits: kO,
  props: IO,
  setup(e, o) {
    return l_(e, o);
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
}), AO = { class: "feather-tab-container" }, TO = { class: "tab-panels" };
function BO(e, o, r, s, a, u) {
  return Qc(), ed("div", AO, [
    Ci("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: vO({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Ci("ul", d_(e.attrs, mO(e.listeners)), [
      $a(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Ci("div", TO, [
      $a(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var DO = /* @__PURE__ */ td(xO, [["render", BO], ["__scopeId", "data-v-27adffb9"]]);
const LO = u_, MO = Xc({
  props: LO,
  setup(e) {
    return c_(e);
  }
});
function NO(e, o, r, s, a, u) {
  return _O((Qc(), ed("div", gO($O(e.attrs)), [
    $a(e.$slots, "default")
  ], 16)), [
    [yO, e.selected]
  ]);
}
var Cw = /* @__PURE__ */ td(MO, [["render", NO]]);
const OO = window.Vue.defineComponent, PO = window.Vue.toDisplayString, RO = window.Vue.normalizeClass, FO = window.Vue.openBlock, UO = window.Vue.createElementBlock, WO = window.Vue.createCommentVNode, qO = /* @__PURE__ */ OO({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (FO(), UO("span", {
      key: 0,
      class: RO(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, PO(o.severity), 3)) : WO("", !0);
  }
});
const f_ = /* @__PURE__ */ se(qO, [["__scopeId", "data-v-83c2cdce"]]), HO = window.Vue.defineComponent, Sw = window.Vue.toDisplayString, Ew = window.Vue.createElementVNode, zO = window.Vue.openBlock, YO = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const GO = { class: "box" }, jO = { class: "label" }, ZO = { class: "date" }, KO = /* @__PURE__ */ HO({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (zO(), YO("div", GO, [
      Ew("div", jO, Sw(o.label), 1),
      Ew("div", ZO, Sw(o.info), 1)
    ]));
  }
});
const Fu = /* @__PURE__ */ se(KO, [["__scopeId", "data-v-b4afa751"]]), JO = window.Vue.defineComponent, XO = window.Vue.unref, QO = window.Vue.renderList, e3 = window.Vue.Fragment, Uu = window.Vue.openBlock, Wu = window.Vue.createElementBlock, t3 = window.Vue.toDisplayString, n3 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const r3 = { class: "alarms-list" }, o3 = /* @__PURE__ */ JO({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Uu(), Wu("div", r3, [
      (Uu(!0), Wu(e3, null, QO(XO(ce.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (Uu(), Wu("div", {
        class: n3(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, t3(a.length), 3))), 128))
    ]));
  }
});
const i3 = /* @__PURE__ */ se(o3, [["__scopeId", "data-v-52d63440"]]), s3 = window.Vue.openBlock, a3 = window.Vue.createElementBlock, l3 = window.Vue.createElementVNode;
var u3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const c3 = {}, d3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, f3 = /* @__PURE__ */ l3("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), h3 = [
  f3
];
function p3(e, o) {
  return s3(), a3("svg", d3, h3);
}
var w3 = /* @__PURE__ */ u3(c3, [["render", p3]]);
const v3 = window.Vue.openBlock, m3 = window.Vue.createElementBlock, _3 = window.Vue.createStaticVNode;
var g3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $3 = {}, y3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, V3 = /* @__PURE__ */ _3('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), b3 = [
  V3
];
function C3(e, o) {
  return v3(), m3("svg", y3, b3);
}
var ya = /* @__PURE__ */ g3($3, [["render", C3]]);
const S3 = window.Vue.defineComponent, zt = window.Vue.unref, qu = window.Vue.createVNode, nd = window.Vue.createElementVNode, Hu = window.Vue.withCtx, Ys = window.Vue.openBlock, zu = window.Vue.createBlock, Yu = window.Vue.createCommentVNode, E3 = window.Vue.normalizeClass, I3 = window.Vue.createElementBlock, k3 = window.Vue.pushScopeId, x3 = window.Vue.popScopeId, rd = (e) => (k3("data-v-e073070b"), e = e(), x3(), e), A3 = /* @__PURE__ */ rd(() => /* @__PURE__ */ nd("span", null, "Acknowledge", -1)), T3 = /* @__PURE__ */ rd(() => /* @__PURE__ */ nd("span", null, "Escalate", -1)), B3 = /* @__PURE__ */ rd(() => /* @__PURE__ */ nd("span", null, "Clear", -1)), D3 = /* @__PURE__ */ S3({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = Kt(), s = async (u) => {
      await rE(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await e_(
        o.situationId,
        Ne.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await fm(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (Ys(), I3("div", {
      class: E3(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Yu("", !0) : (Ys(), zu(zt(fe), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Hu(() => [
          qu(zt(G), {
            icon: zt(po),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          A3
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Ys(), zu(zt(fe), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(zt(Ne).ESCALATE))
      }, {
        default: Hu(() => [
          qu(zt(G), {
            icon: zt(w3),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          T3
        ]),
        _: 1
      })) : Yu("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Ys(), zu(zt(fe), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(zt(Ne).CLEAR))
      }, {
        default: Hu(() => [
          qu(zt(G), {
            icon: zt(ya),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          B3
        ]),
        _: 1
      })) : Yu("", !0)
    ], 2));
  }
});
const h_ = /* @__PURE__ */ se(D3, [["__scopeId", "data-v-e073070b"]]);
var L3 = Object.defineProperty, M3 = Object.defineProperties, N3 = Object.getOwnPropertyDescriptors, Iw = Object.getOwnPropertySymbols, O3 = Object.prototype.hasOwnProperty, P3 = Object.prototype.propertyIsEnumerable, kw = (e, o, r) => o in e ? L3(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Sc = (e, o) => {
  for (var r in o || (o = {}))
    O3.call(o, r) && kw(e, r, o[r]);
  if (Iw)
    for (var r of Iw(o))
      P3.call(o, r) && kw(e, r, o[r]);
  return e;
}, p_ = (e, o) => M3(e, N3(o));
const w_ = window.Vue.defineComponent, R3 = window.Vue.inject, F3 = window.Vue.resolveComponent, Gu = window.Vue.openBlock, xw = window.Vue.createElementBlock, so = window.Vue.createElementVNode, U3 = window.Vue.createBlock, Aw = window.Vue.createCommentVNode, W3 = window.Vue.renderSlot, q3 = window.Vue.pushScopeId, H3 = window.Vue.popScopeId, ju = window.Vue.toRef, Gs = window.Vue.computed, z3 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var Y3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const G3 = {
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
}, j3 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, Z3 = w_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: j3,
  props: G3,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: R3("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ie("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ie("checkbox-label");
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
    FeatherRipple: jn
  }
}), K3 = (e) => (q3("data-v-a7af27e2"), e = e(), H3(), e), J3 = { class: "layout-container" }, X3 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], Q3 = { class: "checkbox hover focus" }, eP = /* @__PURE__ */ K3(() => /* @__PURE__ */ so("div", { class: "box" }, [
  /* @__PURE__ */ so("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ so("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ so("div", { class: "indeterminate" })
], -1)), tP = ["id", "for"];
function nP(e, o, r, s, a, u) {
  const c = F3("feather-ripple");
  return Gu(), xw("div", J3, [
    so("div", {
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
      so("div", Q3, [
        eP,
        e.disabled ? Aw("", !0) : (Gu(), U3(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Aw("", !0) : (Gu(), xw("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        W3(e.$slots, "default", {}, void 0, !0)
      ], 8, tP))
    ], 40, X3)
  ]);
}
var Ri = /* @__PURE__ */ Y3(Z3, [["render", nP], ["__scopeId", "data-v-a7af27e2"]]);
const rP = p_(Sc({}, Mi), {
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
w_({
  props: rP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Ni(e);
    const r = ju(e, "error"), s = Gs(() => ie("feather-checkbox-group")), a = Gs(() => ie("feather-input-description")), u = Gs(() => ie("feather-input-label")), c = Gs(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), p_(Sc({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = z3(s.value), { validate: w } = Di(f, ju(e, "modelValue"), e.label, e.schema, ju(e, "error"));
    return Sc({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, Li(o.attrs));
  },
  components: {
    InputSubText: Bi
  }
});
const oP = window.Vue.openBlock, iP = window.Vue.createElementBlock, v_ = window.Vue.createElementVNode;
var sP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const aP = {}, lP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uP = /* @__PURE__ */ v_("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), cP = /* @__PURE__ */ v_("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), dP = [
  uP,
  cP
];
function fP(e, o) {
  return oP(), iP("svg", lP, dP);
}
var hP = /* @__PURE__ */ sP(aP, [["render", fP]]);
var pP = Object.defineProperty, wP = Object.defineProperties, vP = Object.getOwnPropertyDescriptors, Tw = Object.getOwnPropertySymbols, mP = Object.prototype.hasOwnProperty, _P = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? pP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ao = (e, o) => {
  for (var r in o || (o = {}))
    mP.call(o, r) && Bw(e, r, o[r]);
  if (Tw)
    for (var r of Tw(o))
      _P.call(o, r) && Bw(e, r, o[r]);
  return e;
}, m_ = (e, o) => wP(e, vP(o));
const gP = window.Vue.defineComponent, Zu = window.Vue.toRef, $P = window.Vue.computed, Dw = window.Vue.resolveComponent, Lw = window.Vue.openBlock, Mw = window.Vue.createElementBlock, Nw = window.Vue.mergeProps, Ow = window.Vue.createVNode, yP = window.Vue.normalizeClass, Pw = window.Vue.withCtx, VP = window.Vue.createElementVNode, bP = window.Vue.toDisplayString, CP = window.Vue.createCommentVNode;
var SP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EP = m_(ao(ao({}, qc), Mi), {
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
}), IP = {
  "update:modelValue": (e) => !0
}, kP = gP({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: IP,
  props: EP,
  setup(e, o) {
    Ni(e), Hc(e);
    const r = Zu(e, "id"), s = $P(() => r.value ? r.value : ie("feather-textarea-label")), { validate: a } = Di(s, Zu(e, "modelValue"), e.label, e.schema, Zu(e, "error"));
    return ao({
      inputId: s,
      incomingId: r,
      validate: a
    }, Li(o.attrs));
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
      return ie("feather-textarea-description");
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
      const e = ao({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), m_(ao(ao({}, e), this.listeners), {
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
    InputSubText: Bi,
    InputWrapper: Wc
  }
}), xP = ["maxlength"], AP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function TP(e, o, r, s, a, u) {
  const c = Dw("InputWrapper"), f = Dw("InputSubText");
  return Lw(), Mw("div", Nw(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Ow(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: yP(["feather-textarea-content", e.contentCls])
    }, {
      default: Pw(() => [
        VP("textarea", Nw(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, xP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Ow(f, { id: e.descriptionId }, {
      right: Pw(() => [
        e.maxlength ? (Lw(), Mw("div", AP, bP(e.charCount), 1)) : CP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Ec = /* @__PURE__ */ SP(kP, [["render", TP], ["__scopeId", "data-v-0648df5c"]]);
const BP = window.Pinia.defineStore, Ra = BP("appStore", {
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
}), DP = window.Vue.defineComponent, Rw = window.Vue.toDisplayString, ni = window.Vue.createElementVNode, pr = window.Vue.unref, Kr = window.Vue.openBlock, Fw = window.Vue.createBlock, ri = window.Vue.createCommentVNode, Uw = window.Vue.createVNode, js = window.Vue.createElementBlock, LP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const MP = { class: "row" }, NP = { class: "label" }, OP = { class: "action-icons" }, PP = { class: "icon-btn" }, RP = {
  key: 0,
  class: "icon-btn"
}, FP = {
  key: 1,
  class: "icon-btn"
}, UP = {
  key: 0,
  class: "text"
}, WP = window.Vue.watch, Ww = window.Vue.ref, qP = /* @__PURE__ */ DP({
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
    const o = e, r = Ra(), s = Ww(!1), a = Ww((w = o.memo) == null ? void 0 : w.body);
    WP(o, () => {
      var m;
      a.value = (m = o.memo) == null ? void 0 : m.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await cE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await uE(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (m, _) => (Kr(), js("div", {
      class: LP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ni("div", MP, [
        ni("div", NP, Rw(e.label), 1),
        ni("div", OP, [
          ni("div", PP, [
            s.value ? ri("", !0) : (Kr(), Fw(pr(G), {
              key: 0,
              icon: pr(hP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (Kr(), js("div", RP, [
            Uw(pr(G), {
              icon: pr(po),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : ri("", !0),
          a.value && a.value != "" || s.value ? (Kr(), js("div", FP, [
            Uw(pr(G), {
              icon: pr(go),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : ri("", !0)
        ])
      ]),
      ni("div", null, [
        !s.value && a.value != null ? (Kr(), js("div", UP, Rw(a.value), 1)) : ri("", !0),
        s.value ? (Kr(), Fw(pr(Ec), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = (y) => a.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : ri("", !0)
      ])
    ], 2));
  }
});
const Va = /* @__PURE__ */ se(qP, [["__scopeId", "data-v-3f44e250"]]), HP = window.Vue.defineComponent, wr = window.Vue.unref, Jr = window.Vue.createVNode, oi = window.Vue.toDisplayString, jt = window.Vue.createElementVNode, qw = window.Vue.openBlock, Hw = window.Vue.createElementBlock, zw = window.Vue.createCommentVNode, Ku = window.Vue.createTextVNode, zP = window.Vue.pushScopeId, YP = window.Vue.popScopeId, od = (e) => (zP("data-v-02d1e7f0"), e = e(), YP(), e), GP = {
  key: 0,
  class: "card"
}, jP = { class: "row" }, ZP = {
  key: 0,
  class: "ack"
}, KP = /* @__PURE__ */ od(() => /* @__PURE__ */ jt("strong", null, " Duration: ", -1)), JP = ["innerHTML"], XP = /* @__PURE__ */ od(() => /* @__PURE__ */ jt("strong", null, "First Event", -1)), QP = /* @__PURE__ */ od(() => /* @__PURE__ */ jt("strong", null, "Last Event", -1)), e4 = { class: "section memo-boxes" }, Yw = window.Vue.ref, t4 = window.Vue.watch, n4 = /* @__PURE__ */ HP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Yw(!1), a = Yw(r.alarm), u = new Date().getTime();
    t4(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const m = await hm(w);
      m && (a.value = m);
    };
    return (w, m) => {
      var _, y, $, T, D;
      return a.value ? (qw(), Hw("div", GP, [
        jt("div", null, [
          jt("div", jP, [
            Jr(wr(Ri), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                m[0] || (m[0] = (N) => s.value = N),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            jt("div", {
              class: "title",
              onClick: m[1] || (m[1] = () => {
                s.value = !s.value, c();
              })
            }, oi(a.value.nodeLabel) + " - " + oi(a.value.id), 1),
            Jr(f_, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (qw(), Hw("div", ZP, [
              Jr(wr(G), {
                icon: wr(po),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : zw("", !0)
          ]),
          jt("div", null, [
            KP,
            Ku(" " + oi(wr(xa)(wr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          jt("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, JP),
          jt("div", null, [
            XP,
            Ku(" - " + oi(wr(an)(a.value.firstEventTime)), 1)
          ]),
          jt("div", null, [
            QP,
            Ku(" - " + oi(wr(an)(a.value.lastEventTime)), 1)
          ]),
          jt("div", e4, [
            Jr(Va, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: ($ = a.value) == null ? void 0 : $.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Jr(Va, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (D = a.value) == null ? void 0 : D.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Jr(h_, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : zw("", !0);
    };
  }
});
const r4 = /* @__PURE__ */ se(n4, [["__scopeId", "data-v-02d1e7f0"]]), o4 = window.Vue.openBlock, i4 = window.Vue.createElementBlock, __ = window.Vue.createElementVNode;
var s4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const a4 = {}, l4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, u4 = /* @__PURE__ */ __("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), c4 = /* @__PURE__ */ __("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), d4 = [
  u4,
  c4
];
function f4(e, o) {
  return o4(), i4("svg", l4, d4);
}
var Ic = /* @__PURE__ */ s4(a4, [["render", f4]]);
const h4 = window.Vue.watch, p4 = window.Vue.ref, w4 = window.Vue.onBeforeUnmount, g_ = (e) => {
  const o = p4(!1), r = (s) => {
    s.keyCode === X.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return h4(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), w4(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, v4 = window.Vue.watch, $_ = (e) => {
  let o;
  v4(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, y_ = window.Vue.watch, V_ = window.Vue.onBeforeUnmount, b_ = window.Vue.nextTick, m4 = window.Vue.onMounted, C_ = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, ba = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, S_ = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  V_(() => ba(o, r)), m4(() => y_(e, (s) => {
    s ? b_(() => {
      o = C_(r);
    }) : ba(o, r);
  }, { immediate: !0 }));
}, _4 = (e, o) => {
  let r;
  V_(() => ba(r, o.value ? o.value.offsetParent : !1)), y_([e, o], ([s, a]) => {
    s && a ? b_(() => {
      r = C_(a.offsetParent);
    }) : a && ba(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var g4 = Object.defineProperty, Gw = Object.getOwnPropertySymbols, $4 = Object.prototype.hasOwnProperty, y4 = Object.prototype.propertyIsEnumerable, jw = (e, o, r) => o in e ? g4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, V4 = (e, o) => {
  for (var r in o || (o = {}))
    $4.call(o, r) && jw(e, r, o[r]);
  if (Gw)
    for (var r of Gw(o))
      y4.call(o, r) && jw(e, r, o[r]);
  return e;
};
const id = window.Vue.defineComponent, Si = window.Vue.ref, b4 = window.Vue.nextTick, E_ = window.Vue.openBlock, I_ = window.Vue.createElementBlock, sd = window.Vue.createElementVNode, C4 = window.Vue.renderSlot, S4 = window.Vue.resolveComponent, E4 = window.Vue.normalizeClass, I4 = window.Vue.withModifiers, k4 = window.Vue.createVNode, Zw = window.Vue.toRef, Kw = window.Vue.computed, Jw = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var k_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const x4 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, A4 = id({
  props: x4,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Si(), o = Si(!1), r = (_, y) => {
      let $ = _.compareDocumentPosition(y);
      if ($ === 2)
        return "before";
      if ($ === 4)
        return "after";
      if ($ === 10 || $ === 12)
        return "parent";
    }, s = (_) => {
      for (var y = 0; y < _.childNodes.length; y++) {
        var $ = _.childNodes[y];
        if (u($) || s($))
          return !0;
      }
      return !1;
    }, a = (_) => {
      for (var y = _.childNodes.length - 1; y >= 0; y--) {
        var $ = _.childNodes[y];
        if (u($) || a($))
          return !0;
      }
      return !1;
    }, u = (_) => c(_) ? (o.value = !0, _.focus && _.focus(), o.value = !1, document.activeElement === _) : !1, c = (_) => {
      if (_.tabIndex > 0 || _.tabIndex === 0 && _.getAttribute("tabIndex") !== null)
        return !0;
      const y = _;
      if (y.disabled || y.tabIndex === -1)
        return !1;
      switch (_.nodeName) {
        case "A":
          const $ = _;
          return !!$.href && $.rel !== "ignore";
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
      const y = _.querySelector("[first-focus]");
      y && y.focus ? b4(() => {
        y.focus();
      }) : s(_);
    }, w = Si();
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
}), T4 = /* @__PURE__ */ sd("div", { tabindex: "0" }, null, -1), B4 = {
  class: "focus-trap-content",
  ref: "content"
}, D4 = /* @__PURE__ */ sd("div", { tabindex: "0" }, null, -1);
function L4(e, o, r, s, a, u) {
  return E_(), I_("div", null, [
    T4,
    sd("div", B4, [
      C4(e.$slots, "default")
    ], 512),
    D4
  ]);
}
var x_ = /* @__PURE__ */ k_(A4, [["render", L4]]);
const M4 = id({
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
    icon: () => go
  },
  components: {
    FeatherIcon: G
  }
}), N4 = ["aria-label"];
function O4(e, o, r, s, a, u) {
  const c = S4("FeatherIcon");
  return E_(), I_("a", {
    href: "#",
    class: E4(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = I4((f) => e.$emit("close"), ["prevent"]))
  }, [
    k4(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, N4);
}
var A_ = /* @__PURE__ */ k_(M4, [["render", O4], ["__scopeId", "data-v-fc0f3f00"]]);
const T_ = {
  title: "REQUIRED",
  close: "Close Dialog"
}, P4 = {
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
    default: () => T_,
    validator: (e) => !!e.title
  }
}, R4 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
id({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: R4,
  props: P4,
  setup(e, o) {
    const r = Aa(Zw(e, "labels"), T_), s = Zw(e, "modelValue"), a = Si(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = Kw(() => !!o.slots.footer), f = Kw(() => ie("dialog-header"));
    e.relative ? _4(s, a) : S_(s), $_(s), Jw(g_(s), () => {
      u();
    });
    const w = Si(e.modelValue);
    return Jw(w, (m) => {
      m ? o.emit("shown") : o.emit("hidden");
    }), V4({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: x_,
    DialogClose: A_
  }
});
var F4 = Object.defineProperty, Xw = Object.getOwnPropertySymbols, U4 = Object.prototype.hasOwnProperty, W4 = Object.prototype.propertyIsEnumerable, Qw = (e, o, r) => o in e ? F4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Fa = (e, o) => {
  for (var r in o || (o = {}))
    U4.call(o, r) && Qw(e, r, o[r]);
  if (Xw)
    for (var r of Xw(o))
      W4.call(o, r) && Qw(e, r, o[r]);
  return e;
};
const Ua = window.Vue.defineComponent, ev = window.Vue.toRef, tv = window.Vue.watch, nv = window.Vue.ref, rv = window.Vue.resolveComponent, Zs = window.Vue.openBlock, ov = window.Vue.createBlock, q4 = window.Vue.Teleport, iv = window.Vue.createElementBlock, Ju = window.Vue.createVNode, sv = window.Vue.Transition, Xu = window.Vue.withCtx, av = window.Vue.createCommentVNode, H4 = window.Vue.withDirectives, z4 = window.Vue.normalizeStyle, Y4 = window.Vue.normalizeClass, lv = window.Vue.createElementVNode, G4 = window.Vue.renderSlot, j4 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var Z4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const B_ = {
  title: "REQUIRED",
  close: "Close Dialog"
}, K4 = {
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
    default: () => B_,
    validator: (e) => !!e.title
  }
}, J4 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, X4 = Ua({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: J4,
  props: K4,
  setup(e, o) {
    const r = Aa(ev(e, "labels"), B_), s = ev(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    S_(s), $_(s), tv(g_(s), () => {
      a();
    });
    const u = nv(), c = nv(!1);
    return tv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), Fa({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: A_,
    FocusTrap: x_
  }
}), Q4 = {
  key: 0,
  class: "drawer-container feather-styles"
}, eR = {
  key: 0,
  class: "greyedOut"
}, tR = ["aria-label"], nR = { class: "slot" };
function rR(e, o, r, s, a, u) {
  const c = rv("dialog-close"), f = rv("focus-trap");
  return Zs(), ov(q4, { to: "body" }, [
    e.modelValue ? (Zs(), iv("div", Q4, [
      Ju(sv, { name: "greyOutShim" }, {
        default: Xu(() => [
          e.modelValue ? (Zs(), iv("div", eR)) : av("", !0)
        ]),
        _: 1
      }),
      Ju(sv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: Xu(() => [
          H4((Zs(), ov(f, {
            enable: e.modelValue,
            style: z4({ width: e.width }),
            key: "sect",
            class: Y4(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Xu(() => [
              lv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                lv("div", nR, [
                  G4(e.$slots, "default", {}, void 0, !0)
                ]),
                Ju(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, tR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [j4, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : av("", !0)
  ]);
}
var D_ = /* @__PURE__ */ Z4(X4, [["render", rR], ["__scopeId", "data-v-0a36e1dc"]]);
const oR = Fa({
  label: {
    type: String,
    required: !0
  }
}, r_);
Ua({
  name: "DrawerTab",
  props: oR,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Cr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Sr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return o_(e);
  },
  components: {
    FeatherRipple: jn
  }
});
const iR = Fa({}, a_), sR = s_;
Ua({
  emits: sR,
  model: i_,
  props: iR,
  setup(e, o) {
    return l_(e, o);
  }
});
const aR = Fa({
  header: {
    type: String
  }
}, u_);
Ua({
  name: "DrawerTabContent",
  props: aR,
  setup(e) {
    return c_(e);
  },
  directives: {
    MenuFocusLoop: wT
  }
});
const lR = window.Vue.defineComponent, L_ = window.Vue.createElementVNode, uv = window.Vue.createVNode, uR = window.Vue.renderList, cR = window.Vue.Fragment, ii = window.Vue.openBlock, Qu = window.Vue.createElementBlock, cv = window.Vue.createBlock, dR = window.Vue.unref, fR = window.Vue.withCtx, hR = window.Vue.pushScopeId, pR = window.Vue.popScopeId, wR = (e) => (hR("data-v-c7c65659"), e = e(), pR(), e), vR = { class: "content" }, mR = /* @__PURE__ */ wR(() => /* @__PURE__ */ L_("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), _R = {
  key: 0,
  class: "situation-list"
}, ec = window.Vue.ref, dv = window.Vue.watch, gR = /* @__PURE__ */ lR({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = Kt(), a = ec(r.visible), u = () => {
      let m = s.situations;
      r.situationId !== 0 && (m = s.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = m, f.value = m;
    }, c = ec(s.situations), f = ec(s.situations);
    dv(r, () => {
      a.value = r.visible, u();
    }), dv(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (m) => {
      f.value = m;
    };
    return (m, _) => (ii(), cv(dR(D_), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = (y) => a.value = y),
        _[1] || (_[1] = (y) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: fR(() => [
        L_("div", vR, [
          mR,
          uv(Vo, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (ii(), Qu("div", _R, [
            (ii(!0), Qu(cR, null, uR(f.value, (y) => (ii(), Qu("div", {
              class: "card",
              key: y.id
            }, [
              uv(Vm, {
                onClick: ($) => o("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (ii(), cv(bo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const M_ = /* @__PURE__ */ se(gR, [["__scopeId", "data-v-c7c65659"]]), $R = window.Vue.defineComponent, fv = window.Vue.normalizeClass, oo = window.Vue.createElementVNode, Ks = window.Vue.unref, yR = window.Vue.createVNode, Js = window.Vue.toDisplayString, VR = window.Vue.createTextVNode, bR = window.Vue.openBlock, CR = window.Vue.createElementBlock, SR = window.Vue.pushScopeId, ER = window.Vue.popScopeId, IR = (e) => (SR("data-v-e1e9b696"), e = e(), ER(), e), kR = { class: "alarmInfo" }, xR = { class: "alarm-title" }, AR = /* @__PURE__ */ IR(() => /* @__PURE__ */ oo("strong", null, " Duration: ", -1)), TR = { class: "description" }, BR = /* @__PURE__ */ $R({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (bR(), CR("div", {
      class: fv(["alarm", { selected: r.selected }])
    }, [
      oo("div", kR, [
        oo("div", {
          class: fv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        yR(Ks(Ri), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        oo("div", xR, Js(e.alarm.nodeLabel) + " - " + Js(e.alarm.id), 1)
      ]),
      oo("div", null, [
        AR,
        VR(" " + Js(Ks(xa)(Ks(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      oo("div", TR, Js(Ks(ym)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const ad = /* @__PURE__ */ se(BR, [["__scopeId", "data-v-e1e9b696"]]), DR = window.Vue.defineComponent, la = window.Vue.createElementVNode, Xr = window.Vue.unref, LR = window.Vue.toDisplayString, hv = window.Vue.withCtx, tc = window.Vue.createVNode, MR = window.Vue.renderList, NR = window.Vue.Fragment, si = window.Vue.openBlock, nc = window.Vue.createElementBlock, pv = window.Vue.createBlock, OR = window.Vue.pushScopeId, PR = window.Vue.popScopeId, RR = (e) => (OR("data-v-4bc80d4b"), e = e(), PR(), e), FR = { class: "content" }, UR = { class: "header" }, WR = /* @__PURE__ */ RR(() => /* @__PURE__ */ la("h4", null, "ADD ALARMS", -1)), qR = {
  key: 0,
  class: "alarms-list"
}, Xs = window.Vue.ref, wv = window.Vue.watch, HR = /* @__PURE__ */ DR({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = Kt(), a = Xs(r.visible), u = Xs([]), c = Xs(["all"]), f = Xs(s.unassignedAlarms);
    wv(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), wv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = ($) => {
      ce.exports.includes(u.value, $) ? ce.exports.remove(u.value, (T) => T === $) : u.value.push($);
    }, m = () => {
      o("alarms-selected", u.value);
    }, _ = () => {
      let $ = s.unassignedAlarms;
      c.value.includes("all") || ($ = $.filter(
        (T) => c.value.includes(T.severity)
      )), f.value = $;
    }, y = ($) => {
      f.value = $;
    };
    return ($, T) => (si(), pv(Xr(D_), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (D) => a.value = D),
        T[1] || (T[1] = (D) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: hv(() => [
        la("div", FR, [
          la("div", UR, [
            WR,
            tc(Xr(fe), {
              class: "add-alarms-btn",
              onClick: m
            }, {
              default: hv(() => [
                la("span", null, "Add " + LR(Xr(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          tc(Vo, {
            list: Xr(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (si(), nc("div", qR, [
            (si(!0), nc(NR, null, MR(f.value, (D) => (si(), nc("div", {
              class: "card",
              key: D.id
            }, [
              tc(ad, {
                selected: Xr(ce.exports.includes)(Xr(u), D.id),
                alarm: D,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (si(), pv(bo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const zR = /* @__PURE__ */ se(HR, [["__scopeId", "data-v-4bc80d4b"]]), YR = window.Vue.openBlock, GR = window.Vue.createElementBlock, N_ = window.Vue.createElementVNode;
var jR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZR = {}, KR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JR = /* @__PURE__ */ N_("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), XR = /* @__PURE__ */ N_("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), QR = [
  JR,
  XR
];
function e8(e, o) {
  return YR(), GR("svg", KR, QR);
}
var vv = /* @__PURE__ */ jR(ZR, [["render", e8]]);
const t8 = window.Vue.defineComponent, $t = window.Vue.createElementVNode, Ye = window.Vue.unref, Xe = window.Vue.createVNode, ai = window.Vue.withCtx, n8 = window.Vue.renderList, mv = window.Vue.Fragment, li = window.Vue.openBlock, Qs = window.Vue.createElementBlock, r8 = window.Vue.createBlock, o8 = window.Vue.pushScopeId, i8 = window.Vue.popScopeId, Co = (e) => (o8("data-v-524b0835"), e = e(), i8(), e), s8 = { class: "container" }, a8 = { class: "header" }, l8 = /* @__PURE__ */ Co(() => /* @__PURE__ */ $t("div", { class: "title" }, "Alarms", -1)), u8 = /* @__PURE__ */ Co(() => /* @__PURE__ */ $t("span", null, "Add Alarms", -1)), c8 = { class: "alarms-container" }, d8 = { class: "filters" }, f8 = { class: "list" }, h8 = { class: "row actions" }, p8 = /* @__PURE__ */ Co(() => /* @__PURE__ */ $t("span", null, "Clear", -1)), w8 = /* @__PURE__ */ Co(() => /* @__PURE__ */ $t("span", null, "Acknowledge", -1)), v8 = /* @__PURE__ */ Co(() => /* @__PURE__ */ $t("span", null, "Move", -1)), m8 = /* @__PURE__ */ Co(() => /* @__PURE__ */ $t("span", null, "Remove", -1)), _8 = { class: "section" }, g8 = {
  key: 0,
  class: "alarm-list"
}, ea = window.Vue.ref, $8 = window.Vue.watch, y8 = window.Vue.reactive, V8 = window.Vue.markRaw, b8 = /* @__PURE__ */ t8({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = V8({
      Add: Pa,
      Delete: vv,
      MarkComplete: ya,
      CheckCircle: po,
      ExitToApp: Ic
    }), s = Ra(), a = Kt(), u = ea(!1), c = ea(["all"]), f = ea(!1), w = ea(!1), m = y8({
      selectedAlarms: [],
      alarms: o.alarms
    });
    $8(o, () => {
      c.value = ["all"], m.alarms = o.alarms, m.selectedAlarms = [], u.value = !1;
    });
    const _ = (A) => {
      m.selectedAlarms.includes(A) ? ce.exports.remove(m.selectedAlarms, (O) => O == A) : m.selectedAlarms.push(A);
    }, y = async (A) => {
      m.selectedAlarms.length ? (await oE(m.selectedAlarms, A), a.getSituation(o.situationId), m.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, $ = () => m.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : m.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      $() && (await mw(
        o.situationId,
        m.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, D = async (A) => {
      $() && (await mw(
        o.situationId,
        m.selectedAlarms
      ) ? await N(A, m.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, N = async (A, O) => {
      O.length ? await t_(A, O) ? a.getSituation(A) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, M = async (A) => {
      await N(o.situationId, A), w.value = !1;
    }, S = () => {
      m.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, L = (A) => {
      m.alarms = A;
    };
    return (A, O) => (li(), Qs(mv, null, [
      $t("div", s8, [
        $t("div", a8, [
          l8,
          Xe(Ye(fe), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (k) => w.value = !0)
          }, {
            default: ai(() => [
              Xe(Ye(G), {
                icon: Ye(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              u8
            ]),
            _: 1
          })
        ]),
        $t("div", c8, [
          $t("div", d8, [
            Xe(Vo, {
              list: o.alarms,
              onFilteredList: L,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          $t("div", f8, [
            $t("div", h8, [
              Xe(Ye(Ri), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Xe(Ye(fe), {
                onClick: O[2] || (O[2] = () => y("clear"))
              }, {
                default: ai(() => [
                  Xe(Ye(G), {
                    icon: Ye(ya),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  p8
                ]),
                _: 1
              }),
              Xe(Ye(fe), {
                onClick: O[3] || (O[3] = () => y("ack"))
              }, {
                default: ai(() => [
                  Xe(Ye(G), {
                    icon: Ye(po),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  w8
                ]),
                _: 1
              }),
              Xe(Ye(fe), { onClick: S }, {
                default: ai(() => [
                  Xe(Ye(G), {
                    icon: Ye(Ic),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  v8
                ]),
                _: 1
              }),
              Xe(Ye(fe), { onClick: T }, {
                default: ai(() => [
                  Xe(Ye(G), {
                    icon: Ye(vv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  m8
                ]),
                _: 1
              })
            ]),
            $t("div", _8, [
              m.alarms.length > 0 ? (li(), Qs("div", g8, [
                (li(!0), Qs(mv, null, n8(m.alarms, (k) => (li(), Qs("div", {
                  key: k.id
                }, [
                  Xe(r4, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (li(), r8(bo, { key: 1 }))
            ])
          ])
        ])
      ]),
      Xe(M_, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Xe(zR, {
        visible: w.value,
        onAlarmsSelected: M,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const C8 = /* @__PURE__ */ se(b8, [["__scopeId", "data-v-524b0835"]]), S8 = window.Vue.defineComponent, Yt = window.Vue.createVNode, Tt = window.Vue.unref, rc = window.Vue.normalizeClass, ta = window.Vue.toDisplayString, ui = window.Vue.openBlock, ci = window.Vue.createElementBlock, _v = window.Vue.createCommentVNode, E8 = window.Vue.withCtx, Lt = window.Vue.createElementVNode, I8 = window.Vue.Fragment, k8 = window.Vue.pushScopeId, x8 = window.Vue.popScopeId, A8 = (e) => (k8("data-v-eab7334d"), e = e(), x8(), e), T8 = { class: "section" }, B8 = { class: "action-section" }, D8 = { class: "btn-row" }, L8 = { key: 0 }, M8 = { key: 1 }, N8 = {
  key: 0,
  class: "situation-detail"
}, O8 = { class: "situation-info" }, P8 = { class: "id" }, R8 = ["innerHTML"], F8 = /* @__PURE__ */ A8(() => /* @__PURE__ */ Lt("p", null, null, -1)), U8 = { class: "boxes" }, W8 = { class: "parameters" }, q8 = { class: "section memo-boxes" }, H8 = { key: 0 }, gv = window.Vue.ref, z8 = window.Vue.watch, Y8 = /* @__PURE__ */ S8({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = Ra(), s = Kt(), a = Ne.REJECTED, u = gv(o.situationInfo.status), c = gv(o.situationInfo);
    z8(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = async (w) => {
      var _;
      await e_(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, m) => {
      var _, y, $, T, D, N, M, S, L, A, O, k;
      return ui(), ci(I8, null, [
        Lt("div", T8, [
          Lt("div", B8, [
            Yt(h_, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Lt("div", D8, [
              Yt(Tt(fe), {
                class: rc(["btn", { rejected: u.value == Tt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (F) => f(Tt(a)))
              }, {
                default: E8(() => [
                  Yt(Tt(G), {
                    icon: Tt(pm),
                    "aria-hidden": "true",
                    class: rc(["icon reject", { rejected: u.value == Tt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Tt(a) ? (ui(), ci("span", L8, ta(Tt(a)), 1)) : (ui(), ci("span", M8, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (ui(), ci("div", N8, [
            Lt("div", {
              class: rc(["severity-line", [`${(y = (_ = c.value) == null ? void 0 : _.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            Lt("div", O8, [
              Lt("div", P8, [
                Lt("div", null, " Situation - " + ta(($ = c.value) == null ? void 0 : $.id) + " - " + ta(c.value.alarms.length) + " alarm(s) affects " + ta(Tt(ce.exports.size)(Tt(ce.exports.groupBy)((T = c.value) == null ? void 0 : T.alarms, "nodeId"))) + " node(s) ", 1),
                Yt(f_, {
                  severity: (D = c.value) == null ? void 0 : D.severity
                }, null, 8, ["severity"])
              ]),
              Lt("span", {
                innerHTML: c.value.description
              }, null, 8, R8),
              F8,
              Lt("div", U8, [
                Yt(Fu, {
                  label: "First Event",
                  info: Tt(an)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                Yt(Fu, {
                  label: "Last Event",
                  info: Tt(an)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                Yt(Fu, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Lt("div", W8, [
              Yt(i3, {
                alarms: (N = c.value) == null ? void 0 : N.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : _v("", !0),
          Lt("div", q8, [
            Yt(Va, {
              id: (M = c.value) == null ? void 0 : M.id,
              situationId: (S = c.value) == null ? void 0 : S.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (L = c.value) == null ? void 0 : L.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Yt(Va, {
              id: (A = c.value) == null ? void 0 : A.id,
              situationId: (O = c.value) == null ? void 0 : O.id,
              label: "Journal Memo",
              type: "journal",
              memo: (k = c.value) == null ? void 0 : k.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (ui(), ci("div", H8, [
          Yt(C8, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : _v("", !0)
      ], 64);
    };
  }
});
const G8 = /* @__PURE__ */ se(Y8, [["__scopeId", "data-v-eab7334d"]]);
var j8 = Object.defineProperty, Z8 = Object.defineProperties, K8 = Object.getOwnPropertyDescriptors, $v = Object.getOwnPropertySymbols, J8 = Object.prototype.hasOwnProperty, X8 = Object.prototype.propertyIsEnumerable, yv = (e, o, r) => o in e ? j8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, kc = (e, o) => {
  for (var r in o || (o = {}))
    J8.call(o, r) && yv(e, r, o[r]);
  if ($v)
    for (var r of $v(o))
      X8.call(o, r) && yv(e, r, o[r]);
  return e;
}, Q8 = (e, o) => Z8(e, K8(o));
const O_ = window.Vue.defineComponent, yr = window.Vue.resolveComponent, ua = window.Vue.openBlock, Vv = window.Vue.createBlock, ca = window.Vue.mergeProps, Vr = window.Vue.withCtx, P_ = window.Vue.createElementBlock, e5 = window.Vue.Fragment, t5 = window.Vue.renderList, n5 = window.Vue.createTextVNode, r5 = window.Vue.toDisplayString, o5 = window.Vue.computed, bv = window.Vue.toRef, di = window.Vue.createVNode, Cv = window.Vue.toHandlers, i5 = window.Vue.renderSlot, s5 = window.Vue.normalizeClass, a5 = window.Vue.createElementVNode;
var R_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const l5 = O_({
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
      return ie("feather-select-active");
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
        xi(o, this.$refs.list.$el);
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
    FeatherList: Gc,
    FeatherListItem: Pi
  }
});
function u5(e, o, r, s, a, u) {
  const c = yr("FeatherListItem"), f = yr("FeatherList");
  return ua(), Vv(f, ca(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Vr(() => [
      (ua(!0), P_(e5, null, t5(e.options, (w, m) => (ua(), Vv(c, {
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
        default: Vr(() => [
          n5(r5(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var c5 = /* @__PURE__ */ R_(l5, [["render", u5], ["__scopeId", "data-v-eae820da"]]);
const d5 = Q8(kc(kc({}, qc), Mi), {
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
}), f5 = {
  "update:modelValue": (e) => !0
}, h5 = O_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: f5,
  props: d5,
  setup(e, o) {
    Ni(e), Hc(e);
    const r = o5(() => ie("feather-select-input")), { validate: s } = Di(r, bv(e, "modelValue"), e.label, e.schema, bv(e, "error"));
    return kc({
      inputId: r,
      validate: s
    }, Li(o.attrs));
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
      return ie("feather-select-description");
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
    icon: () => Ma
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
      Sr(this.delayTimeout), this.delayTimeout = Cr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Wc,
    InputSubText: Bi,
    FeatherMenu: Dm,
    List: c5,
    FeatherIcon: G
  }
});
function p5(e, o, r, s, a, u) {
  const c = yr("FeatherIcon"), f = yr("InputWrapper"), w = yr("List"), m = yr("FeatherMenu"), _ = yr("InputSubText");
  return ua(), P_("div", ca(e.inherittedAttrs, { class: "feather-select-container" }), [
    di(m, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Vr((y) => [
        di(f, ca({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, Cv(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Vr(() => [
            i5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Vr(() => [
            di(c, {
              class: s5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Vr(() => [
            a5("input", ca(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Cv(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Vr(() => [
        di(w, {
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
    di(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var w5 = /* @__PURE__ */ R_(h5, [["render", p5], ["__scopeId", "data-v-ecb32d90"]]);
const v5 = window.Vue.openBlock, m5 = window.Vue.createElementBlock, F_ = window.Vue.createElementVNode;
var _5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const g5 = {}, $5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, y5 = /* @__PURE__ */ F_("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), V5 = /* @__PURE__ */ F_("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), b5 = [
  y5,
  V5
];
function C5(e, o) {
  return v5(), m5("svg", $5, b5);
}
var S5 = /* @__PURE__ */ _5(g5, [["render", C5]]);
const da = window.Vue.openBlock, xc = window.Vue.createElementBlock, U_ = window.Vue.createElementVNode, E5 = window.Vue.defineComponent, vr = window.Vue.ref, I5 = window.Vue.provide, Sv = window.Vue.computed, k5 = window.Vue.onUnmounted, Ev = window.Vue.toRef, x5 = window.Vue.resolveComponent, A5 = window.Vue.Fragment, T5 = window.Vue.createBlock, B5 = window.Vue.Teleport, Iv = window.Vue.createVNode, D5 = window.Vue.Transition, L5 = window.Vue.withCtx, M5 = window.Vue.normalizeClass, N5 = window.Vue.normalizeStyle, O5 = window.Vue.toDisplayString, P5 = window.Vue.createCommentVNode, R5 = window.Vue.renderSlot, oc = window.Vue.nextTick;
var W_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F5 = {}, U5 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, W5 = /* @__PURE__ */ U_("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), q5 = [
  W5
];
function H5(e, o) {
  return da(), xc("svg", U5, q5);
}
var z5 = /* @__PURE__ */ W_(F5, [["render", H5]]), We = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(We || {}), Cn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Cn || {});
const Y5 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(We.top), a >= o.height + s && c.push(We.bottom);
  const f = [];
  u >= o.width + s && f.push(We.right), e.left >= o.width + s && f.push(We.left);
  let w = [...f, ...c];
  return (r === We.top || r === We.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, G5 = (e, o, r, s, a = 28) => {
  if (e === We.left || e === We.right)
    return Cn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, m = c + o.width / 2, _ = r.width - a, y = r.width / 2;
  return w >= y && m >= y && f.push(Cn.center), m >= _ && f.push(Cn.left), w >= _ && f.push(Cn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, j5 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => We.top
  },
  pointerAlignment: {
    type: String,
    default: () => Cn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Z5 = E5({
  props: j5,
  setup(e) {
    const o = vr(!1), r = vr(!1), s = ie("feather-tooltip-trigger"), a = ie("feather-tooltip"), u = "data-feather-tooltip";
    I5("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Sr(c), o.value || (c = Cr(N, e.enterDelay));
    }, w = () => {
      Sr(c), c = Cr(M, e.exitDelay);
    }, m = (me) => {
      me.keyCode === X.ESCAPE && (me.preventDefault(), M(!0));
    }, _ = Sv(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: m
    }, $ = vr(document), T = Bm($, () => M(!0));
    k5(() => M(!0));
    const D = () => document.getElementById(a), N = () => {
      r.value = !1, o.value = !0, oc(() => {
        const me = D();
        de(me), o.value = !1, oc(() => {
          r.value = !0, o.value = !0, T.value = !0;
        });
      });
    }, M = (me = !1) => {
      F.value = "", k.value = "", R.value = "", q.value = "", o.value = !1, me && (r.value = !1), T.value = !1;
    }, S = Ev(e, "placement"), L = Ev(e, "pointerAlignment"), A = 8, O = 24, k = vr(""), F = vr(""), R = vr(""), q = vr(""), ge = Sv(() => q.value ? "p-" + q.value : !1), de = (me) => {
      const Ve = document.querySelector(`[${u}=${s}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      oc(() => {
        const Ce = Ve.getBoundingClientRect(), ke = me.getBoundingClientRect(), he = Y5(Ce, ke, S.value, A), Oe = G5(he, Ce, ke, L.value, O);
        R.value = Oe.toString(), q.value = he.toString();
        let Pe = 0, je = 0;
        if ((he === We.left || he === We.right) && (Pe = Ce.top + Ce.height / 2 - ke.height / 2, he === We.left && (je = Ce.left - ke.width - A), he === We.right && (je = Ce.right)), he === We.top || he === We.bottom) {
          Pe = Ce.top - ke.height - A, he === We.bottom && (Pe = Ce.bottom);
          const Eo = Ce.left + Ce.width / 2;
          switch (Oe) {
            case Cn.center:
              je = Eo - ke.width / 2;
              break;
            case Cn.left:
              je = Eo - O;
              break;
            case Cn.right:
              je = Eo - ke.width + O;
              break;
          }
        }
        k.value = Pe.toString() + "px", F.value = je.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: y,
      show: o,
      animate: r,
      alignmentClass: R,
      placementClass: ge,
      top: k,
      left: F,
      tooltipID: a
    };
  },
  components: {
    Pointer: z5
  }
}), K5 = ["id"];
function J5(e, o, r, s, a, u) {
  const c = x5("Pointer");
  return da(), xc(A5, null, [
    (da(), T5(B5, { to: "body" }, [
      Iv(D5, { css: e.animate }, {
        default: L5(() => [
          e.show ? (da(), xc("div", {
            key: 0,
            class: M5(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: N5({ left: e.left, top: e.top })
          }, [
            U_("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, O5(e.title), 9, K5),
            Iv(c, { class: "tooltip-pointer" })
          ], 6)) : P5("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    R5(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var kv = /* @__PURE__ */ W_(Z5, [["render", J5], ["__scopeId", "data-v-3da6b22e"]]);
const X5 = window.Vue.defineComponent, ic = window.Vue.normalizeStyle, sc = window.Vue.createElementVNode, fi = window.Vue.unref, xv = window.Vue.toHandlers, Av = window.Vue.mergeProps, Tv = window.Vue.withCtx, Bv = window.Vue.createVNode, Q5 = window.Vue.renderList, e7 = window.Vue.Fragment, hi = window.Vue.openBlock, pi = window.Vue.createElementBlock, Dv = window.Vue.normalizeClass, Lv = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const t7 = { class: "row" }, n7 = /* @__PURE__ */ X5({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (hi(), pi("div", t7, [
      sc("div", {
        class: "line-gray",
        style: ic({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Bv(fi(kv), {
        title: fi(an)(e.alarm.firstEventTime)
      }, {
        default: Tv(({ attrs: f, on: w }) => [
          sc("div", Av({ class: "circle" }, f, xv(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (hi(!0), pi(e7, null, Q5(o.events, (f, w) => (hi(), pi("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (hi(), pi("div", {
          key: 0,
          class: Dv(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: ic({
            width: s(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Lv("", !0),
        Bv(fi(kv), {
          title: fi(an)(e.alarm.firstEventTime)
        }, {
          default: Tv(({ attrs: m, on: _ }) => [
            o.events[w + 1] ? (hi(), pi("div", Av({ key: 0 }, m, xv(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Lv("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      sc("div", {
        class: Dv(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: ic({
          width: s(e.events[e.events.length - 1].createTime, fi(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const r7 = /* @__PURE__ */ se(n7, [["__scopeId", "data-v-3341d12d"]]), o7 = window.Vue.openBlock, i7 = window.Vue.createElementBlock, q_ = window.Vue.createElementVNode;
var s7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const a7 = {}, l7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, u7 = /* @__PURE__ */ q_("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), c7 = /* @__PURE__ */ q_("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), d7 = [
  u7,
  c7
];
function f7(e, o) {
  return o7(), i7("svg", l7, d7);
}
var h7 = /* @__PURE__ */ s7(a7, [["render", f7]]);
const p7 = window.Vue.defineComponent, Ac = window.Vue.createElementVNode, w7 = window.Vue.renderList, Mv = window.Vue.Fragment, ac = window.Vue.openBlock, lc = window.Vue.createElementBlock, v7 = window.Vue.normalizeClass, m7 = window.Vue.unref, Nv = window.Vue.toDisplayString, _7 = window.Vue.pushScopeId, g7 = window.Vue.popScopeId, $7 = (e) => (_7("data-v-2e087f7b"), e = e(), g7(), e), y7 = /* @__PURE__ */ $7(() => /* @__PURE__ */ Ac("strong", null, "Events:", -1)), V7 = /* @__PURE__ */ p7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (ac(), lc(Mv, null, [
      y7,
      (ac(!0), lc(Mv, null, w7(o.events, (a) => (ac(), lc("div", {
        class: "event-description",
        key: a.id
      }, [
        Ac("div", {
          class: v7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Ac("div", null, Nv(m7(an)(a.createTime)) + " - " + Nv(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const b7 = /* @__PURE__ */ se(V7, [["__scopeId", "data-v-2e087f7b"]]), C7 = window.Vue.defineComponent, S7 = window.Vue.normalizeClass, gt = window.Vue.createElementVNode, Qr = window.Vue.toDisplayString, it = window.Vue.unref, eo = window.Vue.createVNode, H_ = window.Vue.createTextVNode, E7 = window.Vue.renderList, Ov = window.Vue.Fragment, yn = window.Vue.openBlock, mr = window.Vue.createElementBlock, Pv = window.Vue.createBlock, na = window.Vue.createCommentVNode, I7 = window.Vue.normalizeStyle, k7 = window.Vue.pushScopeId, x7 = window.Vue.popScopeId, A7 = (e) => (k7("data-v-01717d0d"), e = e(), x7(), e), T7 = { class: "section detail" }, B7 = { class: "id" }, D7 = {
  key: 0,
  class: "section"
}, L7 = /* @__PURE__ */ A7(() => /* @__PURE__ */ gt("div", { class: "id" }, "Alarms", -1)), M7 = { class: "action-btns" }, N7 = { class: "zoom" }, O7 = /* @__PURE__ */ H_(" Zoom "), P7 = { class: "times" }, R7 = {
  key: 0,
  class: "timeline-container"
}, F7 = { class: "alarm-id" }, U7 = {
  key: 0,
  class: "panel"
}, Rn = window.Vue.ref, W7 = window.Vue.watch, q7 = /* @__PURE__ */ C7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, k;
    const o = e, r = Kt(), s = Rn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Rn(a[0]), c = Rn(o.width), f = Rn(o.width), w = Rn(new Date().getTime()), m = () => {
      var F, R;
      if (!o.situation.events) {
        const q = (R = (F = o.situation) == null ? void 0 : F.alarms) == null ? void 0 : R.map((ge) => ge.id);
        r.getEvents(o.situation.id, q);
      }
    };
    m();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number($.value))), y = Rn(o.situation.alarms), $ = Rn(
      ((k = ce.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), T = Rn(_());
    W7(o, () => {
      var F, R;
      $.value = ((R = ce.exports.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : R.firstEventTime) || new Date().getTime(), m(), c.value = f.value, T.value = _(), y.value = o.situation.alarms, u.value = a[0];
    });
    const D = (F) => {
      if ((F == null ? void 0 : F.id) === 1 && (y.value = o.situation.alarms), (F == null ? void 0 : F.id) === 2) {
        const R = ce.exports.groupBy(y.value, "severity"), q = [
          ...R.CRITICAL || [],
          ...R.MAJOR || [],
          ...R.MINOR || [],
          ...R.WARNING || [],
          ...R.NORMAL || [],
          ...R.CLEARED || [],
          ...R.INDETERMINATE || []
        ];
        y.value = q.filter((ge) => ge);
      }
      if ((F == null ? void 0 : F.id) === 3) {
        const R = ce.exports.reverse(
          ce.exports.sortBy(
            o.situation.alarms,
            (q) => Number(q.lastEventTime) - Number(q.firstEventTime)
          )
        );
        y.value = R;
      }
    }, N = () => {
      c.value += 100, T.value = _();
    }, M = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, L = (F) => {
      s.value = F;
    }, A = () => {
      s.value = 0;
    };
    return (F, R) => {
      var q, ge;
      return yn(), mr(Ov, null, [
        gt("div", T7, [
          gt("div", {
            class: S7(["severity-line", [`${(ge = (q = o.situation) == null ? void 0 : q.severity) == null ? void 0 : ge.toLowerCase()}-bg dark`]])
          }, null, 2),
          gt("div", null, [
            gt("div", B7, "Situation " + Qr(o.situation.id), 1),
            gt("div", null, " Duration: " + Qr(it(xa)(w.value, new Date($.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (yn(), mr("div", D7, [
          L7,
          gt("div", M7, [
            eo(it(w5), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                R[0] || (R[0] = (de) => u.value = de),
                D
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            gt("div", N7, [
              O7,
              gt("div", null, [
                eo(it(G), {
                  icon: it(S5),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"]),
                eo(it(G), {
                  icon: it(jm),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                eo(it(G), {
                  icon: it(h7),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (yn(), mr("div", {
            key: 0,
            class: "alarms",
            style: I7({
              width: f.value + 50 + "px"
            })
          }, [
            gt("div", P7, [
              gt("div", null, Qr(it(an)($.value)), 1),
              gt("div", null, Qr(it(an)(w.value)), 1)
            ]),
            e.situation.events ? (yn(), mr("div", R7, [
              (yn(!0), mr(Ov, null, E7(y.value, (de) => (yn(), mr("div", {
                class: "timeline",
                key: de.id
              }, [
                gt("div", F7, [
                  H_(Qr(de.nodeLabel) + " - " + Qr(de.id) + " ", 1),
                  s.value === de.id ? (yn(), Pv(it(G), {
                    key: 0,
                    icon: it(Ma),
                    class: "zoom-icon expand",
                    onClick: A
                  }, null, 8, ["icon"])) : (yn(), Pv(it(G), {
                    key: 1,
                    icon: it(Cm),
                    class: "zoom-icon expand",
                    onClick: () => L(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                eo(r7, {
                  alarm: de,
                  proportion: T.value,
                  "min-start": $.value,
                  events: o.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === de.id ? (yn(), mr("div", U7, [
                  eo(b7, {
                    events: o.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : na("", !0)
              ]))), 128))
            ])) : na("", !0)
          ], 4)) : na("", !0)
        ])) : na("", !0)
      ], 64);
    };
  }
});
const H7 = /* @__PURE__ */ se(q7, [["__scopeId", "data-v-01717d0d"]]), z7 = window.Vue.openBlock, Y7 = window.Vue.createElementBlock, G7 = window.Vue.createElementVNode;
var j7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Z7 = {}, K7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, J7 = /* @__PURE__ */ G7("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), X7 = [
  J7
];
function Q7(e, o) {
  return z7(), Y7("svg", K7, X7);
}
var co = /* @__PURE__ */ j7(Z7, [["render", Q7]]);
const z_ = window.Vue.defineComponent, uc = window.Vue.ref, e6 = window.Vue.toRef, cc = window.Vue.inject, Rv = window.Vue.watch, t6 = window.Vue.nextTick, Fv = window.Vue.openBlock, Uv = window.Vue.createElementBlock, dc = window.Vue.createElementVNode, n6 = window.Vue.normalizeClass, Wv = window.Vue.renderSlot, qv = window.Vue.createCommentVNode, fc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var r6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const o6 = {
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
}, i6 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, s6 = z_({
  emits: i6,
  props: o6,
  setup(e, o) {
    const r = uc(), s = uc(!1), a = uc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = e6(e, "modelValue"), f = cc("queueSnackbar", !1), w = cc("unqueueSnackbar", !1), m = cc("nextSnackbar", () => {
    }), _ = (N, M) => {
      let S, L, A = M;
      const O = () => {
        !S || (Sr(S), S = 0, A -= Date.now() - L);
      }, k = () => {
        S || (L = Date.now(), S = Cr(N, A));
      };
      return k(), { pause: O, resume: k };
    }, y = () => {
      s.value = !1, o.emit("closed"), m && m();
    }, $ = (N) => {
      N.keyCode === X.ESCAPE && (a.value = !1);
    }, T = () => {
      r.value.pause();
    }, D = () => {
      a.value && r.value.resume();
    };
    return Rv(c, (N) => {
      N ? t6(() => {
        f === !1 ? a.value = N : f(u, a);
      }) : w === !1 ? a.value = N : w(u);
    }, { immediate: !0 }), Rv(a, (N) => {
      N ? (s.value = !0, r.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), T());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: y,
      keyPressed: $,
      stopTimer: T,
      resumeTimer: D
    };
  }
}), a6 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, l6 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, u6 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, c6 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function d6(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (Fv(), Uv("div", a6, [
    dc("div", {
      class: n6(["feather-snackbar", {
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
      dc("div", l6, [
        e.contentShow ? (Fv(), Uv("div", u6, [
          Wv(e.$slots, "default", {}, void 0, !0)
        ])) : qv("", !0)
      ]),
      dc("div", c6, [
        Wv(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : qv("", !0);
}
var Wa = /* @__PURE__ */ r6(s6, [["render", d6], ["__scopeId", "data-v-5cf64a62"]]);
const f6 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
z_({
  props: f6,
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
    return fc("queueSnackbar", s), fc("unqueueSnackbar", a), fc("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const h6 = window.Vue.defineComponent, Ie = window.Vue.unref, st = window.Vue.createVNode, Ai = window.Vue.createElementVNode, Bt = window.Vue.withCtx, to = window.Vue.openBlock, Hv = window.Vue.createBlock, p6 = window.Vue.createCommentVNode, qa = window.Vue.createTextVNode, ra = window.Vue.createElementBlock, zv = window.Vue.toDisplayString, w6 = window.Vue.pushScopeId, v6 = window.Vue.popScopeId, ld = (e) => (w6("data-v-1f2913d3"), e = e(), v6(), e), m6 = { id: "cont" }, _6 = { class: "btns-navigation" }, g6 = /* @__PURE__ */ ld(() => /* @__PURE__ */ Ai("span", null, "Situation List", -1)), $6 = /* @__PURE__ */ ld(() => /* @__PURE__ */ Ai("span", null, "Show Previous Situation ", -1)), y6 = /* @__PURE__ */ ld(() => /* @__PURE__ */ Ai("span", null, "Show Next Situation", -1)), V6 = { key: 1 }, b6 = {
  key: 0,
  class: "detail"
}, C6 = /* @__PURE__ */ qa("Details"), S6 = /* @__PURE__ */ qa("Metrics"), E6 = {
  key: 1,
  class: "noSituation"
}, I6 = /* @__PURE__ */ qa("dismiss"), _r = window.Vue.ref, Yv = window.Vue.watch, k6 = window.Vue.onMounted, x6 = window.VueRouter.useRoute, A6 = /* @__PURE__ */ h6({
  __name: "SituationDetail",
  setup(e) {
    const o = Jn(), r = x6(), s = parseInt(r.params.id), a = _r(s), u = Kt(), c = Ra(), f = _r(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = _r(), m = _r(), _ = _r(!0), y = _r(
      u.filteredSituations.findIndex((M) => M === a.value)
    ), $ = _r(!1);
    Yv(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), k6(() => {
      var S;
      const M = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      m.value = M - 90;
    });
    const T = () => {
      o.push({
        name: "situations"
      });
    }, D = (M) => {
      const S = y.value, L = u.filteredSituations[S + M];
      o.push({
        name: "situationDetail",
        params: {
          id: L
        }
      });
    };
    Yv(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((M) => M == a.value);
    }), c.$subscribe((M, S) => {
      $.value = S.showError;
    });
    const N = (M) => {
      f.value = M || 0;
    };
    return (M, S) => (to(), ra("div", m6, [
      Ai("div", _6, [
        st(Ie(fe), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: Bt(() => [
            st(Ie(G), {
              icon: Ie(co),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            g6
          ]),
          _: 1
        }),
        Ai("div", null, [
          st(Ie(fe), {
            disabled: !Ie(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => D(-1))
          }, {
            default: Bt(() => [
              st(Ie(G), {
                icon: Ie(co),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              $6
            ]),
            _: 1
          }, 8, ["disabled"]),
          st(Ie(fe), {
            disabled: !Ie(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => D(1))
          }, {
            default: Bt(() => [
              y6,
              st(Ie(G), {
                icon: Ie(co),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (to(), Hv(Ie(Kc), {
        key: 0,
        class: "spinner"
      })) : (to(), ra("div", V6, [
        w.value ? (to(), ra("div", b6, [
          st(Ie(DO), { "onUpdate:modelValue": N }, {
            tabs: Bt(() => [
              st(Ie(bw), null, {
                default: Bt(() => [
                  C6
                ]),
                _: 1
              }),
              st(Ie(bw), null, {
                default: Bt(() => [
                  S6
                ]),
                _: 1
              })
            ]),
            default: Bt(() => [
              st(Ie(Cw), { class: "panel" }, {
                default: Bt(() => [
                  st(G8, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              st(Ie(Cw), { class: "panel" }, {
                default: Bt(() => [
                  m.value && f.value == 1 ? (to(), Hv(H7, {
                    key: 0,
                    situation: w.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : p6("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (to(), ra("div", E6, " Error. The situation " + zv(Ie(s)) + " does not exist. ", 1))
      ])),
      st(Ie(Wa), {
        modelValue: $.value,
        "onUpdate:modelValue": S[4] || (S[4] = (L) => $.value = L),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Bt(() => [
          st(Ie(fe), {
            onClick: S[3] || (S[3] = (L) => $.value = !1),
            text: ""
          }, {
            default: Bt(() => [
              I6
            ]),
            _: 1
          })
        ]),
        default: Bt(() => [
          qa(zv(Ie(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const T6 = /* @__PURE__ */ se(A6, [["__scopeId", "data-v-1f2913d3"]]), B6 = window.Vue.defineComponent, Ue = window.Vue.unref, Dt = window.Vue.createVNode, et = window.Vue.createElementVNode, no = window.Vue.withCtx, ro = window.Vue.openBlock, wi = window.Vue.createElementBlock, D6 = window.Vue.createCommentVNode, L6 = window.Vue.toDisplayString, ud = window.Vue.createTextVNode, M6 = window.Vue.normalizeClass, N6 = window.Vue.renderList, O6 = window.Vue.Fragment, P6 = window.Vue.createBlock, R6 = window.Vue.pushScopeId, F6 = window.Vue.popScopeId, Fi = (e) => (R6("data-v-1a57a9f3"), e = e(), F6(), e), U6 = { class: "container" }, W6 = /* @__PURE__ */ Fi(() => /* @__PURE__ */ et("span", null, "Situation List", -1)), q6 = /* @__PURE__ */ Fi(() => /* @__PURE__ */ et("h2", null, "New Situation", -1)), H6 = { class: "form" }, z6 = { class: "fields" }, Y6 = {
  key: 0,
  class: "errorList"
}, G6 = { class: "footer" }, j6 = /* @__PURE__ */ Fi(() => /* @__PURE__ */ et("span", null, "Clear", -1)), Z6 = /* @__PURE__ */ Fi(() => /* @__PURE__ */ et("span", null, "Add Situation", -1)), K6 = { class: "alarm-column" }, J6 = { class: "header-alarms" }, X6 = /* @__PURE__ */ Fi(() => /* @__PURE__ */ et("h3", null, "Add Unassociated Alarms", -1)), Q6 = /* @__PURE__ */ ud(" Total Alarms Added: "), eF = { class: "total" }, tF = { class: "list" }, nF = { class: "filters" }, rF = {
  key: 0,
  class: "alarms"
}, oF = /* @__PURE__ */ ud(" Error on creating new situation :( "), iF = /* @__PURE__ */ ud("dismiss"), Fn = window.Vue.ref, sF = window.Vue.watch, aF = /* @__PURE__ */ B6({
  __name: "AddSituation",
  setup(e) {
    const o = Jn(), r = Kt(), s = Fn(), a = Fn(""), u = Fn(), c = Fn(""), f = Fn([]), w = Fn(!1), m = Fn(), _ = Fn(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), sF(
      () => r.unassignedAlarms,
      () => {
        _.value = r.unassignedAlarms;
      }
    );
    const y = () => {
      o.push({
        name: "situations"
      });
    }, $ = (S) => {
      w.value = !1, ce.exports.includes(f.value, S) ? ce.exports.remove(f.value, (L) => L === S) : f.value.push(S);
    }, T = () => {
      const S = "This field should not be empty";
      let L = !0;
      return s.value || (a.value = S, L = !1), u.value || (c.value = S, L = !1), f.value.length < 2 && (w.value = !0, L = !1), L;
    }, D = async () => {
      if (T()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await hN(S) ? o.push({
          name: "situations"
        }) : m.value = !0;
      }
    }, N = () => {
      s.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, M = (S) => {
      _.value = S;
    };
    return (S, L) => (ro(), wi("div", U6, [
      Dt(Ue(fe), {
        primary: "",
        onClick: L[0] || (L[0] = () => y()),
        class: "back-btn"
      }, {
        default: no(() => [
          Dt(Ue(G), {
            icon: Ue(co),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          W6
        ]),
        _: 1
      }),
      q6,
      et("div", H6, [
        et("div", z6, [
          Dt(Ue(Ec), {
            modelValue: s.value,
            "onUpdate:modelValue": L[1] || (L[1] = (A) => s.value = A),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Dt(Ue(Ec), {
            modelValue: u.value,
            "onUpdate:modelValue": L[2] || (L[2] = (A) => u.value = A),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (ro(), wi("div", Y6, " You must add at least 2 alarms. ")) : D6("", !0),
          et("div", G6, [
            Dt(Ue(fe), {
              class: "btn",
              onClick: N
            }, {
              default: no(() => [
                Dt(Ue(G), {
                  icon: Ue(go),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                j6
              ]),
              _: 1
            }),
            Dt(Ue(fe), {
              class: "btn-add",
              onClick: D
            }, {
              default: no(() => [
                Dt(Ue(G), {
                  icon: Ue(Pa),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                Z6
              ]),
              _: 1
            })
          ])
        ]),
        et("div", K6, [
          et("div", J6, [
            X6,
            et("div", null, [
              et("div", {
                class: M6(["totalAlarms", { errorList: w.value }])
              }, [
                Q6,
                et("span", eF, L6(Ue(f).length), 1)
              ], 2)
            ])
          ]),
          et("div", tF, [
            et("div", nF, [
              Dt(Vo, {
                list: Ue(r).unassignedAlarms,
                onFilteredList: M,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (ro(), wi("div", rF, [
              (ro(!0), wi(O6, null, N6(_.value, (A) => (ro(), wi("div", {
                key: A.id,
                class: "alarm-card"
              }, [
                Dt(ad, {
                  selected: Ue(ce.exports.includes)(Ue(f), A.id),
                  alarm: A,
                  onSelectedAlarm: $
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (ro(), P6(bo, { key: 1 }))
          ])
        ])
      ]),
      Dt(Ue(Wa), {
        modelValue: m.value,
        "onUpdate:modelValue": L[4] || (L[4] = (A) => m.value = A),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: no(() => [
          Dt(Ue(fe), {
            onClick: L[3] || (L[3] = (A) => m.value = !1),
            text: ""
          }, {
            default: no(() => [
              iF
            ]),
            _: 1
          })
        ]),
        default: no(() => [
          oF
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const lF = /* @__PURE__ */ se(aF, [["__scopeId", "data-v-1a57a9f3"]]), uF = window.Vue.defineComponent, cF = window.Vue.createElementVNode, dF = window.Vue.createTextVNode, fF = window.Vue.unref, hF = window.Vue.withCtx, pF = window.Vue.createVNode, wF = window.Vue.Fragment, vF = window.Vue.openBlock, mF = window.Vue.createElementBlock, _F = window.Vue.pushScopeId, gF = window.Vue.popScopeId, $F = (e) => (_F("data-v-bcb7dcc6"), e = e(), gF(), e), yF = /* @__PURE__ */ $F(() => /* @__PURE__ */ cF("div", { class: "main" }, "Something bad is happening...", -1)), VF = /* @__PURE__ */ dF(" Reload "), bF = /* @__PURE__ */ uF({
  __name: "ErrorPage",
  setup(e) {
    const o = Jn(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (vF(), mF(wF, null, [
      yF,
      pF(fF(fe), {
        primary: "",
        onClick: r
      }, {
        default: hF(() => [
          VF
        ]),
        _: 1
      })
    ], 64));
  }
});
const CF = /* @__PURE__ */ se(bF, [["__scopeId", "data-v-bcb7dcc6"]]), SF = window.Vue.defineComponent, Qe = window.Vue.unref, Gt = window.Vue.createVNode, Hn = window.Vue.createElementVNode, vi = window.Vue.withCtx, gr = window.Vue.openBlock, Gv = window.Vue.createBlock, EF = window.Vue.renderList, IF = window.Vue.Fragment, mi = window.Vue.createElementBlock, kF = window.Vue.toDisplayString, Y_ = window.Vue.createTextVNode, xF = window.Vue.pushScopeId, AF = window.Vue.popScopeId, cd = (e) => (xF("data-v-6078e4ad"), e = e(), AF(), e), TF = { class: "container" }, BF = { class: "nav-btns" }, DF = /* @__PURE__ */ cd(() => /* @__PURE__ */ Hn("span", null, "Situation List", -1)), LF = /* @__PURE__ */ cd(() => /* @__PURE__ */ Hn("h2", null, "List Unassociated Alarms", -1)), MF = { class: "content" }, NF = { class: "filters" }, OF = { class: "list" }, PF = { class: "action-btns" }, RF = /* @__PURE__ */ cd(() => /* @__PURE__ */ Hn("span", null, "Move", -1)), FF = { key: 1 }, UF = {
  key: 0,
  class: "alarms"
}, WF = /* @__PURE__ */ Y_("dismiss"), Un = window.Vue.ref, qF = window.Vue.watch, HF = window.Vue.markRaw, zF = /* @__PURE__ */ SF({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = HF({
      ArrowBack: co,
      ExitToApp: Ic
    }), r = Jn(), s = Kt();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Un([]), u = Un([]), c = Un(!1), f = Un(!1), w = Un(""), m = Un(!1), _ = Un(!1), y = Un(!0);
    qF(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, y.value = !1;
      }
    );
    const $ = (L) => {
      ce.exports.includes(u.value, L) ? ce.exports.remove(u.value, (A) => A === L) : u.value.push(L);
    }, T = () => {
      c.value ? u.value = a.value.map((L) => L.id) : u.value = [];
    }, D = async (L) => {
      await t_(L, u.value) ? s.getUnassignedAlarms() : (m.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, N = () => {
      r.push({
        name: "situations"
      });
    }, M = () => {
      u.value.length ? f.value = !0 : (m.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (L) => {
      a.value = L;
    };
    return (L, A) => (gr(), mi("div", TF, [
      Hn("div", BF, [
        Gt(Qe(fe), {
          primary: "",
          onClick: A[0] || (A[0] = () => N())
        }, {
          default: vi(() => [
            Gt(Qe(G), {
              icon: Qe(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            DF
          ]),
          _: 1
        }),
        Gt(Xm)
      ]),
      LF,
      Hn("div", MF, [
        Hn("div", NF, [
          Gt(Vo, {
            list: Qe(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Hn("div", OF, [
          Hn("div", PF, [
            Gt(Qe(Ri), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                A[1] || (A[1] = (O) => c.value = O),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            Gt(Qe(fe), { onClick: M }, {
              default: vi(() => [
                Gt(Qe(G), {
                  icon: Qe(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                RF
              ]),
              _: 1
            })
          ]),
          y.value ? (gr(), Gv(Qe(Kc), {
            key: 0,
            class: "spinner"
          })) : (gr(), mi("div", FF, [
            Qe(a).length ? (gr(), mi("div", UF, [
              (gr(!0), mi(IF, null, EF(Qe(a), (O) => (gr(), mi("div", {
                key: O.id,
                class: "card"
              }, [
                Gt(ad, {
                  selected: Qe(ce.exports.includes)(Qe(u), O.id),
                  alarm: O,
                  onSelectedAlarm: $
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (gr(), Gv(bo, { key: 1 }))
          ]))
        ])
      ]),
      Gt(M_, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: A[2] || (A[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      Gt(Qe(Wa), {
        modelValue: m.value,
        "onUpdate:modelValue": A[4] || (A[4] = (O) => m.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: vi(() => [
          Gt(Qe(fe), {
            onClick: A[3] || (A[3] = (O) => m.value = !1),
            text: ""
          }, {
            default: vi(() => [
              WF
            ]),
            _: 1
          })
        ]),
        default: vi(() => [
          Y_(kF(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const YF = /* @__PURE__ */ se(zF, [["__scopeId", "data-v-6078e4ad"]]), GF = window.Vue.defineComponent, hc = window.Vue.unref, jF = window.Vue.createVNode, ZF = window.Vue.createElementVNode, KF = window.Vue.withCtx, JF = window.Vue.openBlock, XF = window.Vue.createBlock, QF = window.Vue.pushScopeId, e9 = window.Vue.popScopeId, t9 = (e) => (QF("data-v-17251e76"), e = e(), e9(), e), n9 = /* @__PURE__ */ t9(() => /* @__PURE__ */ ZF("span", null, "Situation List", -1)), r9 = window.Vue.markRaw, o9 = /* @__PURE__ */ GF({
  __name: "SituationListBtn",
  setup(e) {
    const o = Jn(), r = r9({
      ArrowBack: co
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (JF(), XF(hc(fe), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: KF(() => [
        jF(hc(G), {
          icon: hc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        n9
      ]),
      _: 1
    }));
  }
});
const i9 = /* @__PURE__ */ se(o9, [["__scopeId", "data-v-17251e76"]]), s9 = window.Vue.defineComponent, Vn = window.Vue.createVNode, zn = window.Vue.createElementVNode, _t = window.Vue.unref, So = window.Vue.createTextVNode, Wn = window.Vue.withCtx, a9 = window.Vue.toDisplayString, l9 = window.Vue.Fragment, u9 = window.Vue.openBlock, c9 = window.Vue.createElementBlock, d9 = window.Vue.pushScopeId, f9 = window.Vue.popScopeId, dd = (e) => (d9("data-v-552399ef"), e = e(), f9(), e), h9 = { class: "container" }, p9 = /* @__PURE__ */ dd(() => /* @__PURE__ */ zn("h3", null, "Configuration Page", -1)), w9 = { class: "section" }, v9 = { class: "title" }, m9 = /* @__PURE__ */ So(" Choose the correlation engine that ALEC will use (see "), _9 = ["href"], g9 = /* @__PURE__ */ So(" for more information): "), $9 = /* @__PURE__ */ So("Clustering"), y9 = /* @__PURE__ */ dd(() => /* @__PURE__ */ zn("div", { class: "hellinger" }, [
  /* @__PURE__ */ zn("strong", null, "Hellinger distance")
], -1)), V9 = /* @__PURE__ */ So("Deep Learning"), b9 = /* @__PURE__ */ dd(() => /* @__PURE__ */ zn("span", null, "Save Changes", -1)), C9 = /* @__PURE__ */ So("dismiss"), S9 = window.Vue.markRaw, _i = window.Vue.ref, E9 = /* @__PURE__ */ s9({
  __name: "AccountSettings",
  setup(e) {
    var m, _;
    const o = S9({
      MarkComplete: ya
    }), r = vo(), s = _i(((m = r.engineInfo) == null ? void 0 : m.engineName) || Ne.ENGINE_DBSCAN), a = _i(
      ((_ = r.engineInfo) == null ? void 0 : _.distanceMeasureName) === Ne.HELLINGER_OPTION
    ), u = _i(!1), c = _i(!1), f = _i(""), w = async () => {
      const y = await r.setEngineInfo(
        s.value,
        a.value
      );
      u.value = !0, y ? (r.getEngineInfo(), f.value = "The settings were saved!", c.value = !1) : (f.value = "Error on saving the settings", c.value = !0);
    };
    return (y, $) => (u9(), c9(l9, null, [
      Vn(i9),
      zn("div", h9, [
        p9,
        zn("div", w9, [
          zn("div", v9, [
            m9,
            zn("a", {
              target: "_blank",
              href: _t(Ne).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, _9),
            g9
          ]),
          Vn(_t(Gm), {
            vertical: "",
            modelValue: s.value,
            "onUpdate:modelValue": $[1] || ($[1] = (T) => s.value = T),
            label: "",
            hideLabel: ""
          }, {
            default: Wn(() => [
              Vn(_t(Cc), {
                class: "radio-item",
                value: _t(Ne).ENGINE_DBSCAN
              }, {
                default: Wn(() => [
                  $9
                ]),
                _: 1
              }, 8, ["value"]),
              Vn(_t(Ri), {
                modelValue: a.value,
                "onUpdate:modelValue": $[0] || ($[0] = (T) => a.value = T),
                disabled: s.value !== _t(Ne).ENGINE_DBSCAN,
                class: "checkbox"
              }, {
                default: Wn(() => [
                  y9
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Vn(_t(Cc), {
                class: "radio-item",
                value: _t(Ne).ENGINE_DEEP_LEARNING
              }, {
                default: Wn(() => [
                  V9
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        Vn(_t(fe), {
          primary: "",
          class: "save-btn",
          onClick: w
        }, {
          default: Wn(() => [
            Vn(_t(G), {
              icon: _t(o).MarkComplete,
              class: "icon"
            }, null, 8, ["icon"]),
            b9
          ]),
          _: 1
        }),
        Vn(_t(Wa), {
          modelValue: u.value,
          "onUpdate:modelValue": $[3] || ($[3] = (T) => u.value = T),
          right: "",
          error: c.value,
          timeout: 6e3
        }, {
          button: Wn(() => [
            Vn(_t(fe), {
              onClick: $[2] || ($[2] = (T) => u.value = !1),
              text: ""
            }, {
              default: Wn(() => [
                C9
              ]),
              _: 1
            })
          ]),
          default: Wn(() => [
            So(a9(f.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const I9 = /* @__PURE__ */ se(E9, [["__scopeId", "data-v-552399ef"]]), k9 = window.VueRouter.createRouter, x9 = window.VueRouter.createWebHistory, A9 = async () => {
  const e = vo();
  e.userId || await e.getUserRole();
}, G_ = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || j_;
      await vo().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => A9(),
    component: iO
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: T6
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: lF
  },
  {
    path: "/error",
    name: "error",
    component: CF
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: YF
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await vo().getEngineInfo();
    },
    component: I9
  }
], pc = window.VRouter;
if (pc) {
  const e = "Plugin-alecUiExtension", o = pc.hasRoute(e) ? e : "Plugin";
  for (const r of G_) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    pc.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const j_ = k9({
  history: x9(),
  routes: G_
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = jC;
