const Ve = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, yS = {}, bS = window.Vue.resolveComponent, CS = window.Vue.createVNode, VS = window.Vue.openBlock, ES = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const SS = { class: "main" };
function IS(e, o) {
  const r = bS("router-view");
  return VS(), ES("div", SS, [
    CS(r)
  ]);
}
const kS = /* @__PURE__ */ Ve(yS, [["render", IS], ["__scopeId", "data-v-5d32d140"]]), AS = window.Vue.defineComponent, TS = window.Vue.openBlock, xS = window.Vue.createBlock, LS = /* @__PURE__ */ AS({
  __name: "App",
  setup(e) {
    return (o, r) => (TS(), xS(kS));
  }
});
var wa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function MS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ug = { exports: {} }, Jf = { exports: {} }, cg = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, NS = cg, Xf = Object.prototype.toString, Qf = function(e) {
  return function(o) {
    var r = Xf.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function xi(e) {
  return e = e.toLowerCase(), function(r) {
    return Qf(r) === e;
  };
}
function ep(e) {
  return Array.isArray(e);
}
function Mu(e) {
  return typeof e > "u";
}
function DS(e) {
  return e !== null && !Mu(e) && e.constructor !== null && !Mu(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var dg = xi("ArrayBuffer");
function OS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && dg(e.buffer), o;
}
function BS(e) {
  return typeof e == "string";
}
function RS(e) {
  return typeof e == "number";
}
function fg(e) {
  return e !== null && typeof e == "object";
}
function Eu(e) {
  if (Qf(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var PS = xi("Date"), FS = xi("File"), US = xi("Blob"), WS = xi("FileList");
function tp(e) {
  return Xf.call(e) === "[object Function]";
}
function HS(e) {
  return fg(e) && tp(e.pipe);
}
function zS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Xf.call(e) === o || tp(e.toString) && e.toString() === o);
}
var qS = xi("URLSearchParams");
function GS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function YS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function np(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), ep(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Nf() {
  var e = {};
  function o(a, u) {
    Eu(e[u]) && Eu(a) ? e[u] = Nf(e[u], a) : Eu(a) ? e[u] = Nf({}, a) : ep(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    np(arguments[r], o);
  return e;
}
function jS(e, o, r) {
  return np(o, function(a, u) {
    r && typeof a == "function" ? e[u] = NS(a, r) : e[u] = a;
  }), e;
}
function ZS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function KS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function JS(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function XS(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function QS(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Mu(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var eI = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), xt = {
  isArray: ep,
  isArrayBuffer: dg,
  isBuffer: DS,
  isFormData: zS,
  isArrayBufferView: OS,
  isString: BS,
  isNumber: RS,
  isObject: fg,
  isPlainObject: Eu,
  isUndefined: Mu,
  isDate: PS,
  isFile: FS,
  isBlob: US,
  isFunction: tp,
  isStream: HS,
  isURLSearchParams: qS,
  isStandardBrowserEnv: YS,
  forEach: np,
  merge: Nf,
  extend: jS,
  trim: GS,
  stripBOM: ZS,
  inherits: KS,
  toFlatObject: JS,
  kindOf: Qf,
  kindOfTest: xi,
  endsWith: XS,
  toArray: QS,
  isTypedArray: eI,
  isFileList: WS
}, ss = xt;
function Dm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var pg = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (ss.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    ss.forEach(r, function(m, v) {
      m === null || typeof m > "u" || (ss.isArray(m) ? v = v + "[]" : m = [m], ss.forEach(m, function(y) {
        ss.isDate(y) ? y = y.toISOString() : ss.isObject(y) && (y = JSON.stringify(y)), u.push(Dm(v) + "=" + Dm(y));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, tI = xt;
function Gu() {
  this.handlers = [];
}
Gu.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Gu.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Gu.prototype.forEach = function(o) {
  tI.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var nI = Gu, oI = xt, rI = function(o, r) {
  oI.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, hg = xt;
function Ms(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
hg.inherits(Ms, Error, {
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
var mg = Ms.prototype, wg = {};
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
  wg[e] = { value: e };
});
Object.defineProperties(Ms, wg);
Object.defineProperty(mg, "isAxiosError", { value: !0 });
Ms.from = function(e, o, r, s, a, u) {
  var c = Object.create(mg);
  return hg.toFlatObject(e, c, function(m) {
    return m !== Error.prototype;
  }), Ms.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Bs = Ms, vg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, oo = xt;
function iI(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : oo.isDate(u) ? u.toISOString() : oo.isArrayBuffer(u) || oo.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (oo.isPlainObject(u) || oo.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), oo.forEach(u, function(m, v) {
        if (!oo.isUndefined(m)) {
          var g = c ? c + "." + v : v, y;
          if (m && !c && typeof m == "object") {
            if (oo.endsWith(v, "{}"))
              m = JSON.stringify(m);
            else if (oo.endsWith(v, "[]") && (y = oo.toArray(m))) {
              y.forEach(function(b) {
                !oo.isUndefined(b) && o.append(g, s(b));
              });
              return;
            }
          }
          a(m, g);
        }
      }), r.pop();
    } else
      o.append(c, s(u));
  }
  return a(e), o;
}
var _g = iI, yd, Om;
function sI() {
  if (Om)
    return yd;
  Om = 1;
  var e = Bs;
  return yd = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, yd;
}
var bd, Bm;
function aI() {
  if (Bm)
    return bd;
  Bm = 1;
  var e = xt;
  return bd = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, c, f, m) {
        var v = [];
        v.push(s + "=" + encodeURIComponent(a)), e.isNumber(u) && v.push("expires=" + new Date(u).toGMTString()), e.isString(c) && v.push("path=" + c), e.isString(f) && v.push("domain=" + f), m === !0 && v.push("secure"), document.cookie = v.join("; ");
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
  }(), bd;
}
var lI = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, uI = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, cI = lI, dI = uI, gg = function(o, r) {
  return o && !cI(r) ? dI(o, r) : r;
}, Cd, Rm;
function fI() {
  if (Rm)
    return Cd;
  Rm = 1;
  var e = xt, o = [
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
  return Cd = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Cd;
}
var Vd, Pm;
function pI() {
  if (Pm)
    return Vd;
  Pm = 1;
  var e = xt;
  return Vd = e.isStandardBrowserEnv() ? function() {
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
      var m = e.isString(f) ? u(f) : f;
      return m.protocol === a.protocol && m.host === a.host;
    };
  }() : function() {
    return function() {
      return !0;
    };
  }(), Vd;
}
var Ed, Fm;
function Yu() {
  if (Fm)
    return Ed;
  Fm = 1;
  var e = Bs, o = xt;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Ed = r, Ed;
}
var Sd, Um;
function hI() {
  return Um || (Um = 1, Sd = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Sd;
}
var Id, Wm;
function Hm() {
  if (Wm)
    return Id;
  Wm = 1;
  var e = xt, o = sI(), r = aI(), s = pg, a = gg, u = fI(), c = pI(), f = vg, m = Bs, v = Yu(), g = hI();
  return Id = function(b) {
    return new Promise(function(O, R) {
      var B = b.data, S = b.headers, A = b.responseType, T;
      function P() {
        b.cancelToken && b.cancelToken.unsubscribe(T), b.signal && b.signal.removeEventListener("abort", T);
      }
      e.isFormData(B) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var k = new XMLHttpRequest();
      if (b.auth) {
        var U = b.auth.username || "", W = b.auth.password ? unescape(encodeURIComponent(b.auth.password)) : "";
        S.Authorization = "Basic " + btoa(U + ":" + W);
      }
      var K = a(b.baseURL, b.url);
      k.open(b.method.toUpperCase(), s(K, b.params, b.paramsSerializer), !0), k.timeout = b.timeout;
      function Me() {
        if (!!k) {
          var Ee = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, We = !A || A === "text" || A === "json" ? k.responseText : k.response, ze = {
            data: We,
            status: k.status,
            statusText: k.statusText,
            headers: Ee,
            config: b,
            request: k
          };
          o(function(Ze) {
            O(Ze), P();
          }, function(Ze) {
            R(Ze), P();
          }, ze), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = Me : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(Me);
      }, k.onabort = function() {
        !k || (R(new m("Request aborted", m.ECONNABORTED, b, k)), k = null);
      }, k.onerror = function() {
        R(new m("Network Error", m.ERR_NETWORK, b, k, k)), k = null;
      }, k.ontimeout = function() {
        var We = b.timeout ? "timeout of " + b.timeout + "ms exceeded" : "timeout exceeded", ze = b.transitional || f;
        b.timeoutErrorMessage && (We = b.timeoutErrorMessage), R(new m(
          We,
          ze.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          b,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var pe = (b.withCredentials || c(K)) && b.xsrfCookieName ? r.read(b.xsrfCookieName) : void 0;
        pe && (S[b.xsrfHeaderName] = pe);
      }
      "setRequestHeader" in k && e.forEach(S, function(We, ze) {
        typeof B > "u" && ze.toLowerCase() === "content-type" ? delete S[ze] : k.setRequestHeader(ze, We);
      }), e.isUndefined(b.withCredentials) || (k.withCredentials = !!b.withCredentials), A && A !== "json" && (k.responseType = b.responseType), typeof b.onDownloadProgress == "function" && k.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (T = function(Ee) {
        !k || (R(!Ee || Ee && Ee.type ? new v() : Ee), k.abort(), k = null);
      }, b.cancelToken && b.cancelToken.subscribe(T), b.signal && (b.signal.aborted ? T() : b.signal.addEventListener("abort", T))), B || (B = null);
      var Ae = g(K);
      if (Ae && ["http", "https", "file"].indexOf(Ae) === -1) {
        R(new m("Unsupported protocol " + Ae + ":", m.ERR_BAD_REQUEST, b));
        return;
      }
      k.send(B);
    });
  }, Id;
}
var kd, zm;
function mI() {
  return zm || (zm = 1, kd = null), kd;
}
var _t = xt, qm = rI, Gm = Bs, wI = vg, vI = _g, _I = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ym(e, o) {
  !_t.isUndefined(e) && _t.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function gI() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Hm()), e;
}
function $I(e, o, r) {
  if (_t.isString(e))
    try {
      return (o || JSON.parse)(e), _t.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var ju = {
  transitional: wI,
  adapter: gI(),
  transformRequest: [function(o, r) {
    if (qm(r, "Accept"), qm(r, "Content-Type"), _t.isFormData(o) || _t.isArrayBuffer(o) || _t.isBuffer(o) || _t.isStream(o) || _t.isFile(o) || _t.isBlob(o))
      return o;
    if (_t.isArrayBufferView(o))
      return o.buffer;
    if (_t.isURLSearchParams(o))
      return Ym(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = _t.isObject(o), a = r && r["Content-Type"], u;
    if ((u = _t.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return vI(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return Ym(r, "application/json"), $I(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || ju.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && _t.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Gm.from(c, Gm.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: mI()
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
_t.forEach(["delete", "get", "head"], function(o) {
  ju.headers[o] = {};
});
_t.forEach(["post", "put", "patch"], function(o) {
  ju.headers[o] = _t.merge(_I);
});
var op = ju, yI = xt, bI = op, CI = function(o, r, s) {
  var a = this || bI;
  return yI.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Ad, jm;
function $g() {
  return jm || (jm = 1, Ad = function(o) {
    return !!(o && o.__CANCEL__);
  }), Ad;
}
var Zm = xt, Td = CI, VI = $g(), EI = op, SI = Yu();
function xd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new SI();
}
var II = function(o) {
  xd(o), o.headers = o.headers || {}, o.data = Td.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = Zm.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), Zm.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || EI.adapter;
  return r(o).then(function(a) {
    return xd(o), a.data = Td.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return VI(a) || (xd(o), a && a.response && (a.response.data = Td.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, En = xt, yg = function(o, r) {
  r = r || {};
  var s = {};
  function a(g, y) {
    return En.isPlainObject(g) && En.isPlainObject(y) ? En.merge(g, y) : En.isPlainObject(y) ? En.merge({}, y) : En.isArray(y) ? y.slice() : y;
  }
  function u(g) {
    if (En.isUndefined(r[g])) {
      if (!En.isUndefined(o[g]))
        return a(void 0, o[g]);
    } else
      return a(o[g], r[g]);
  }
  function c(g) {
    if (!En.isUndefined(r[g]))
      return a(void 0, r[g]);
  }
  function f(g) {
    if (En.isUndefined(r[g])) {
      if (!En.isUndefined(o[g]))
        return a(void 0, o[g]);
    } else
      return a(void 0, r[g]);
  }
  function m(g) {
    if (g in r)
      return a(o[g], r[g]);
    if (g in o)
      return a(void 0, o[g]);
  }
  var v = {
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
    validateStatus: m
  };
  return En.forEach(Object.keys(o).concat(Object.keys(r)), function(y) {
    var b = v[y] || u, D = b(y);
    En.isUndefined(D) && b !== m || (s[y] = D);
  }), s;
}, Ld, Km;
function bg() {
  return Km || (Km = 1, Ld = {
    version: "0.27.2"
  }), Ld;
}
var kI = bg().version, Lr = Bs, rp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  rp[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Jm = {};
rp.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + kI + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new Lr(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Lr.ERR_DEPRECATED
      );
    return r && !Jm[c] && (Jm[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function AI(e, o, r) {
  if (typeof e != "object")
    throw new Lr("options must be an object", Lr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], m = f === void 0 || c(f, u, e);
      if (m !== !0)
        throw new Lr("option " + u + " must be " + m, Lr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Lr("Unknown option " + u, Lr.ERR_BAD_OPTION);
  }
}
var TI = {
  assertOptions: AI,
  validators: rp
}, Cg = xt, xI = pg, Xm = nI, Qm = II, Zu = yg, LI = gg, Vg = TI, as = Vg.validators;
function Ns(e) {
  this.defaults = e, this.interceptors = {
    request: new Xm(),
    response: new Xm()
  };
}
Ns.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Zu(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Vg.assertOptions(s, {
    silentJSONParsing: as.transitional(as.boolean),
    forcedJSONParsing: as.transitional(as.boolean),
    clarifyTimeoutError: as.transitional(as.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(D) {
    typeof D.runWhen == "function" && D.runWhen(r) === !1 || (u = u && D.synchronous, a.unshift(D.fulfilled, D.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(D) {
    c.push(D.fulfilled, D.rejected);
  });
  var f;
  if (!u) {
    var m = [Qm, void 0];
    for (Array.prototype.unshift.apply(m, a), m = m.concat(c), f = Promise.resolve(r); m.length; )
      f = f.then(m.shift(), m.shift());
    return f;
  }
  for (var v = r; a.length; ) {
    var g = a.shift(), y = a.shift();
    try {
      v = g(v);
    } catch (b) {
      y(b);
      break;
    }
  }
  try {
    f = Qm(v);
  } catch (b) {
    return Promise.reject(b);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
Ns.prototype.getUri = function(o) {
  o = Zu(this.defaults, o);
  var r = LI(o.baseURL, o.url);
  return xI(r, o.params, o.paramsSerializer);
};
Cg.forEach(["delete", "get", "head", "options"], function(o) {
  Ns.prototype[o] = function(r, s) {
    return this.request(Zu(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Cg.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Zu(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Ns.prototype[o] = r(), Ns.prototype[o + "Form"] = r(!0);
});
var MI = Ns, Md, ew;
function NI() {
  if (ew)
    return Md;
  ew = 1;
  var e = Yu();
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
      var c, f = new Promise(function(m) {
        a.subscribe(m), c = m;
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
  }, Md = o, Md;
}
var Nd, tw;
function DI() {
  return tw || (tw = 1, Nd = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Nd;
}
var Dd, nw;
function OI() {
  if (nw)
    return Dd;
  nw = 1;
  var e = xt;
  return Dd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Dd;
}
var ow = xt, BI = cg, Su = MI, RI = yg, PI = op;
function Eg(e) {
  var o = new Su(e), r = BI(Su.prototype.request, o);
  return ow.extend(r, Su.prototype, o), ow.extend(r, o), r.create = function(a) {
    return Eg(RI(e, a));
  }, r;
}
var wn = Eg(PI);
wn.Axios = Su;
wn.CanceledError = Yu();
wn.CancelToken = NI();
wn.isCancel = $g();
wn.VERSION = bg().version;
wn.toFormData = _g;
wn.AxiosError = Bs;
wn.Cancel = wn.CanceledError;
wn.all = function(o) {
  return Promise.all(o);
};
wn.spread = DI();
wn.isAxiosError = OI();
Jf.exports = wn;
Jf.exports.default = wn;
(function(e) {
  e.exports = Jf.exports;
})(ug);
const Sg = /* @__PURE__ */ MS(ug.exports), sr = Sg.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Lt = Sg.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var Oe = { exports: {} };
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", v = 500, g = "__lodash_placeholder__", y = 1, b = 2, D = 4, O = 1, R = 2, B = 1, S = 2, A = 4, T = 8, P = 16, k = 32, U = 64, W = 128, K = 256, Me = 512, pe = 30, Ae = "...", Ee = 800, We = 16, ze = 1, _e = 2, Ze = 3, Xe = 1 / 0, qe = 9007199254740991, nn = 17976931348623157e292, Mo = 0 / 0, Se = 4294967295, Js = Se - 1, Xs = Se >>> 1, Mi = [
      ["ary", W],
      ["bind", B],
      ["bindKey", S],
      ["curry", T],
      ["curryRight", P],
      ["flip", Me],
      ["partial", k],
      ["partialRight", U],
      ["rearg", K]
    ], gt = "[object Arguments]", Ht = "[object Array]", on = "[object AsyncFunction]", vn = "[object Boolean]", rn = "[object Date]", Ur = "[object DOMException]", Be = "[object Error]", fo = "[object Function]", Re = "[object GeneratorFunction]", $t = "[object Map]", ye = "[object Number]", Ln = "[object Null]", yt = "[object Object]", Mt = "[object Promise]", Wr = "[object Proxy]", Mn = "[object RegExp]", ct = "[object Set]", po = "[object String]", dt = "[object Symbol]", No = "[object Undefined]", zt = "[object WeakMap]", Hr = "[object WeakSet]", jn = "[object ArrayBuffer]", Nt = "[object DataView]", Zn = "[object Float32Array]", Kn = "[object Float64Array]", Do = "[object Int8Array]", Oo = "[object Int16Array]", Bo = "[object Int32Array]", ho = "[object Uint8Array]", mo = "[object Uint8ClampedArray]", _n = "[object Uint16Array]", bt = "[object Uint32Array]", ar = /\b__p \+= '';/g, zr = /\b(__p \+=) '' \+/g, qr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ro = /&(?:amp|lt|gt|quot|#39);/g, lr = /[&<>"']/g, Po = RegExp(Ro.source), Fo = RegExp(lr.source), qt = /<%-([\s\S]+?)%>/g, Jn = /<%([\s\S]+?)%>/g, Uo = /<%=([\s\S]+?)%>/g, ur = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ni = /^\w*$/, Gr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wo = /[\\^$.*+?()[\]{}|]/g, Yr = RegExp(wo.source), vo = /^\s+/, Di = /\s/, _o = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Oi = /\{\n\/\* \[wrapped with (.+)\] \*/, re = /,? & /, G = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ge = /[()=,{}\[\]\/\s]/, Ce = /\\(\\)?/g, go = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Wo = /\w*$/, jr = /^[-+]0x[0-9a-f]+$/i, Zr = /^0b[01]+$/i, Bi = /^\[object .+?Constructor\]$/, Ri = /^0o[0-7]+$/i, Pi = /^(?:0|[1-9]\d*)$/, Fi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Dt = /($^)/, Kr = /['\n\r\u2028\u2029\\]/g, Gt = "\\ud800-\\udfff", Ui = "\\u0300-\\u036f", Wi = "\\ufe20-\\ufe2f", Jr = "\\u20d0-\\u20ff", cr = Ui + Wi + Jr, $o = "\\u2700-\\u27bf", Ho = "a-z\\xdf-\\xf6\\xf8-\\xff", zo = "\\xac\\xb1\\xd7\\xf7", dr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Xr = "\\u2000-\\u206f", Xn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", dl = "A-Z\\xc0-\\xd6\\xd8-\\xde", fl = "\\ufe0e\\ufe0f", Qs = zo + dr + Xr + Xn, Hi = "['\u2019]", hc = "[" + Gt + "]", ea = "[" + Qs + "]", zi = "[" + cr + "]", pl = "\\d+", hl = "[" + $o + "]", Qr = "[" + Ho + "]", qi = "[^" + Gt + Qs + pl + $o + Ho + dl + "]", q = "\\ud83c[\\udffb-\\udfff]", w = "(?:" + zi + "|" + q + ")", E = "[^" + Gt + "]", z = "(?:\\ud83c[\\udde6-\\uddff]){2}", Z = "[\\ud800-\\udbff][\\udc00-\\udfff]", ne = "[" + dl + "]", he = "\\u200d", nt = "(?:" + Qr + "|" + qi + ")", Qe = "(?:" + ne + "|" + qi + ")", Yt = "(?:" + Hi + "(?:d|ll|m|re|s|t|ve))?", sn = "(?:" + Hi + "(?:D|LL|M|RE|S|T|VE))?", Gi = w + "?", wt = "[" + fl + "]?", E0 = "(?:" + he + "(?:" + [E, z, Z].join("|") + ")" + wt + Gi + ")*", S0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", I0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ip = wt + Gi + E0, k0 = "(?:" + [hl, z, Z].join("|") + ")" + Ip, A0 = "(?:" + [E + zi + "?", zi, z, Z, hc].join("|") + ")", T0 = RegExp(Hi, "g"), x0 = RegExp(zi, "g"), mc = RegExp(q + "(?=" + q + ")|" + A0 + Ip, "g"), L0 = RegExp([
      ne + "?" + Qr + "+" + Yt + "(?=" + [ea, ne, "$"].join("|") + ")",
      Qe + "+" + sn + "(?=" + [ea, ne + nt, "$"].join("|") + ")",
      ne + "?" + nt + "+" + Yt,
      ne + "+" + sn,
      I0,
      S0,
      pl,
      k0
    ].join("|"), "g"), M0 = RegExp("[" + he + Gt + cr + fl + "]"), N0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, D0 = [
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
    ], O0 = -1, He = {};
    He[Zn] = He[Kn] = He[Do] = He[Oo] = He[Bo] = He[ho] = He[mo] = He[_n] = He[bt] = !0, He[gt] = He[Ht] = He[jn] = He[vn] = He[Nt] = He[rn] = He[Be] = He[fo] = He[$t] = He[ye] = He[yt] = He[Mn] = He[ct] = He[po] = He[zt] = !1;
    var Fe = {};
    Fe[gt] = Fe[Ht] = Fe[jn] = Fe[Nt] = Fe[vn] = Fe[rn] = Fe[Zn] = Fe[Kn] = Fe[Do] = Fe[Oo] = Fe[Bo] = Fe[$t] = Fe[ye] = Fe[yt] = Fe[Mn] = Fe[ct] = Fe[po] = Fe[dt] = Fe[ho] = Fe[mo] = Fe[_n] = Fe[bt] = !0, Fe[Be] = Fe[fo] = Fe[zt] = !1;
    var B0 = {
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
    }, R0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, P0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, F0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, U0 = parseFloat, W0 = parseInt, kp = typeof wa == "object" && wa && wa.Object === Object && wa, H0 = typeof self == "object" && self && self.Object === Object && self, Ct = kp || H0 || Function("return this")(), wc = o && !o.nodeType && o, ei = wc && !0 && e && !e.nodeType && e, Ap = ei && ei.exports === wc, vc = Ap && kp.process, Nn = function() {
      try {
        var C = ei && ei.require && ei.require("util").types;
        return C || vc && vc.binding && vc.binding("util");
      } catch {
      }
    }(), Tp = Nn && Nn.isArrayBuffer, xp = Nn && Nn.isDate, Lp = Nn && Nn.isMap, Mp = Nn && Nn.isRegExp, Np = Nn && Nn.isSet, Dp = Nn && Nn.isTypedArray;
    function gn(C, x, I) {
      switch (I.length) {
        case 0:
          return C.call(x);
        case 1:
          return C.call(x, I[0]);
        case 2:
          return C.call(x, I[0], I[1]);
        case 3:
          return C.call(x, I[0], I[1], I[2]);
      }
      return C.apply(x, I);
    }
    function z0(C, x, I, j) {
      for (var ie = -1, Ie = C == null ? 0 : C.length; ++ie < Ie; ) {
        var ft = C[ie];
        x(j, ft, I(ft), C);
      }
      return j;
    }
    function Dn(C, x) {
      for (var I = -1, j = C == null ? 0 : C.length; ++I < j && x(C[I], I, C) !== !1; )
        ;
      return C;
    }
    function q0(C, x) {
      for (var I = C == null ? 0 : C.length; I-- && x(C[I], I, C) !== !1; )
        ;
      return C;
    }
    function Op(C, x) {
      for (var I = -1, j = C == null ? 0 : C.length; ++I < j; )
        if (!x(C[I], I, C))
          return !1;
      return !0;
    }
    function fr(C, x) {
      for (var I = -1, j = C == null ? 0 : C.length, ie = 0, Ie = []; ++I < j; ) {
        var ft = C[I];
        x(ft, I, C) && (Ie[ie++] = ft);
      }
      return Ie;
    }
    function ml(C, x) {
      var I = C == null ? 0 : C.length;
      return !!I && Yi(C, x, 0) > -1;
    }
    function _c(C, x, I) {
      for (var j = -1, ie = C == null ? 0 : C.length; ++j < ie; )
        if (I(x, C[j]))
          return !0;
      return !1;
    }
    function Ge(C, x) {
      for (var I = -1, j = C == null ? 0 : C.length, ie = Array(j); ++I < j; )
        ie[I] = x(C[I], I, C);
      return ie;
    }
    function pr(C, x) {
      for (var I = -1, j = x.length, ie = C.length; ++I < j; )
        C[ie + I] = x[I];
      return C;
    }
    function gc(C, x, I, j) {
      var ie = -1, Ie = C == null ? 0 : C.length;
      for (j && Ie && (I = C[++ie]); ++ie < Ie; )
        I = x(I, C[ie], ie, C);
      return I;
    }
    function G0(C, x, I, j) {
      var ie = C == null ? 0 : C.length;
      for (j && ie && (I = C[--ie]); ie--; )
        I = x(I, C[ie], ie, C);
      return I;
    }
    function $c(C, x) {
      for (var I = -1, j = C == null ? 0 : C.length; ++I < j; )
        if (x(C[I], I, C))
          return !0;
      return !1;
    }
    var Y0 = yc("length");
    function j0(C) {
      return C.split("");
    }
    function Z0(C) {
      return C.match(G) || [];
    }
    function Bp(C, x, I) {
      var j;
      return I(C, function(ie, Ie, ft) {
        if (x(ie, Ie, ft))
          return j = Ie, !1;
      }), j;
    }
    function wl(C, x, I, j) {
      for (var ie = C.length, Ie = I + (j ? 1 : -1); j ? Ie-- : ++Ie < ie; )
        if (x(C[Ie], Ie, C))
          return Ie;
      return -1;
    }
    function Yi(C, x, I) {
      return x === x ? a$(C, x, I) : wl(C, Rp, I);
    }
    function K0(C, x, I, j) {
      for (var ie = I - 1, Ie = C.length; ++ie < Ie; )
        if (j(C[ie], x))
          return ie;
      return -1;
    }
    function Rp(C) {
      return C !== C;
    }
    function Pp(C, x) {
      var I = C == null ? 0 : C.length;
      return I ? Cc(C, x) / I : Mo;
    }
    function yc(C) {
      return function(x) {
        return x == null ? r : x[C];
      };
    }
    function bc(C) {
      return function(x) {
        return C == null ? r : C[x];
      };
    }
    function Fp(C, x, I, j, ie) {
      return ie(C, function(Ie, ft, Pe) {
        I = j ? (j = !1, Ie) : x(I, Ie, ft, Pe);
      }), I;
    }
    function J0(C, x) {
      var I = C.length;
      for (C.sort(x); I--; )
        C[I] = C[I].value;
      return C;
    }
    function Cc(C, x) {
      for (var I, j = -1, ie = C.length; ++j < ie; ) {
        var Ie = x(C[j]);
        Ie !== r && (I = I === r ? Ie : I + Ie);
      }
      return I;
    }
    function Vc(C, x) {
      for (var I = -1, j = Array(C); ++I < C; )
        j[I] = x(I);
      return j;
    }
    function X0(C, x) {
      return Ge(x, function(I) {
        return [I, C[I]];
      });
    }
    function Up(C) {
      return C && C.slice(0, qp(C) + 1).replace(vo, "");
    }
    function $n(C) {
      return function(x) {
        return C(x);
      };
    }
    function Ec(C, x) {
      return Ge(x, function(I) {
        return C[I];
      });
    }
    function ta(C, x) {
      return C.has(x);
    }
    function Wp(C, x) {
      for (var I = -1, j = C.length; ++I < j && Yi(x, C[I], 0) > -1; )
        ;
      return I;
    }
    function Hp(C, x) {
      for (var I = C.length; I-- && Yi(x, C[I], 0) > -1; )
        ;
      return I;
    }
    function Q0(C, x) {
      for (var I = C.length, j = 0; I--; )
        C[I] === x && ++j;
      return j;
    }
    var e$ = bc(B0), t$ = bc(R0);
    function n$(C) {
      return "\\" + F0[C];
    }
    function o$(C, x) {
      return C == null ? r : C[x];
    }
    function ji(C) {
      return M0.test(C);
    }
    function r$(C) {
      return N0.test(C);
    }
    function i$(C) {
      for (var x, I = []; !(x = C.next()).done; )
        I.push(x.value);
      return I;
    }
    function Sc(C) {
      var x = -1, I = Array(C.size);
      return C.forEach(function(j, ie) {
        I[++x] = [ie, j];
      }), I;
    }
    function zp(C, x) {
      return function(I) {
        return C(x(I));
      };
    }
    function hr(C, x) {
      for (var I = -1, j = C.length, ie = 0, Ie = []; ++I < j; ) {
        var ft = C[I];
        (ft === x || ft === g) && (C[I] = g, Ie[ie++] = I);
      }
      return Ie;
    }
    function vl(C) {
      var x = -1, I = Array(C.size);
      return C.forEach(function(j) {
        I[++x] = j;
      }), I;
    }
    function s$(C) {
      var x = -1, I = Array(C.size);
      return C.forEach(function(j) {
        I[++x] = [j, j];
      }), I;
    }
    function a$(C, x, I) {
      for (var j = I - 1, ie = C.length; ++j < ie; )
        if (C[j] === x)
          return j;
      return -1;
    }
    function l$(C, x, I) {
      for (var j = I + 1; j--; )
        if (C[j] === x)
          return j;
      return j;
    }
    function Zi(C) {
      return ji(C) ? c$(C) : Y0(C);
    }
    function Qn(C) {
      return ji(C) ? d$(C) : j0(C);
    }
    function qp(C) {
      for (var x = C.length; x-- && Di.test(C.charAt(x)); )
        ;
      return x;
    }
    var u$ = bc(P0);
    function c$(C) {
      for (var x = mc.lastIndex = 0; mc.test(C); )
        ++x;
      return x;
    }
    function d$(C) {
      return C.match(mc) || [];
    }
    function f$(C) {
      return C.match(L0) || [];
    }
    var p$ = function C(x) {
      x = x == null ? Ct : Ki.defaults(Ct.Object(), x, Ki.pick(Ct, D0));
      var I = x.Array, j = x.Date, ie = x.Error, Ie = x.Function, ft = x.Math, Pe = x.Object, Ic = x.RegExp, h$ = x.String, On = x.TypeError, _l = I.prototype, m$ = Ie.prototype, Ji = Pe.prototype, gl = x["__core-js_shared__"], $l = m$.toString, Ne = Ji.hasOwnProperty, w$ = 0, Gp = function() {
        var t = /[^.]+$/.exec(gl && gl.keys && gl.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), yl = Ji.toString, v$ = $l.call(Pe), _$ = Ct._, g$ = Ic(
        "^" + $l.call(Ne).replace(wo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), bl = Ap ? x.Buffer : r, mr = x.Symbol, Cl = x.Uint8Array, Yp = bl ? bl.allocUnsafe : r, Vl = zp(Pe.getPrototypeOf, Pe), jp = Pe.create, Zp = Ji.propertyIsEnumerable, El = _l.splice, Kp = mr ? mr.isConcatSpreadable : r, na = mr ? mr.iterator : r, ti = mr ? mr.toStringTag : r, Sl = function() {
        try {
          var t = si(Pe, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), $$ = x.clearTimeout !== Ct.clearTimeout && x.clearTimeout, y$ = j && j.now !== Ct.Date.now && j.now, b$ = x.setTimeout !== Ct.setTimeout && x.setTimeout, Il = ft.ceil, kl = ft.floor, kc = Pe.getOwnPropertySymbols, C$ = bl ? bl.isBuffer : r, Jp = x.isFinite, V$ = _l.join, E$ = zp(Pe.keys, Pe), pt = ft.max, Ot = ft.min, S$ = j.now, I$ = x.parseInt, Xp = ft.random, k$ = _l.reverse, Ac = si(x, "DataView"), oa = si(x, "Map"), Tc = si(x, "Promise"), Xi = si(x, "Set"), ra = si(x, "WeakMap"), ia = si(Pe, "create"), Al = ra && new ra(), Qi = {}, A$ = ai(Ac), T$ = ai(oa), x$ = ai(Tc), L$ = ai(Xi), M$ = ai(ra), Tl = mr ? mr.prototype : r, sa = Tl ? Tl.valueOf : r, Qp = Tl ? Tl.toString : r;
      function p(t) {
        if (et(t) && !se(t) && !(t instanceof me)) {
          if (t instanceof Bn)
            return t;
          if (Ne.call(t, "__wrapped__"))
            return em(t);
        }
        return new Bn(t);
      }
      var es = function() {
        function t() {
        }
        return function(n) {
          if (!Ke(n))
            return {};
          if (jp)
            return jp(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function xl() {
      }
      function Bn(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        escape: qt,
        evaluate: Jn,
        interpolate: Uo,
        variable: "",
        imports: {
          _: p
        }
      }, p.prototype = xl.prototype, p.prototype.constructor = p, Bn.prototype = es(xl.prototype), Bn.prototype.constructor = Bn;
      function me(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Se, this.__views__ = [];
      }
      function N$() {
        var t = new me(this.__wrapped__);
        return t.__actions__ = an(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = an(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = an(this.__views__), t;
      }
      function D$() {
        if (this.__filtered__) {
          var t = new me(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function O$() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = se(t), l = n < 0, d = i ? t.length : 0, h = jy(0, d, this.__views__), _ = h.start, $ = h.end, V = $ - _, M = l ? $ : _ - 1, N = this.__iteratees__, F = N.length, Y = 0, J = Ot(V, this.__takeCount__);
        if (!i || !l && d == V && J == V)
          return Ch(t, this.__actions__);
        var ee = [];
        e:
          for (; V-- && Y < J; ) {
            M += n;
            for (var le = -1, te = t[M]; ++le < F; ) {
              var fe = N[le], ve = fe.iteratee, Cn = fe.type, Kt = ve(te);
              if (Cn == _e)
                te = Kt;
              else if (!Kt) {
                if (Cn == ze)
                  continue e;
                break e;
              }
            }
            ee[Y++] = te;
          }
        return ee;
      }
      me.prototype = es(xl.prototype), me.prototype.constructor = me;
      function ni(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function B$() {
        this.__data__ = ia ? ia(null) : {}, this.size = 0;
      }
      function R$(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function P$(t) {
        var n = this.__data__;
        if (ia) {
          var i = n[t];
          return i === m ? r : i;
        }
        return Ne.call(n, t) ? n[t] : r;
      }
      function F$(t) {
        var n = this.__data__;
        return ia ? n[t] !== r : Ne.call(n, t);
      }
      function U$(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = ia && n === r ? m : n, this;
      }
      ni.prototype.clear = B$, ni.prototype.delete = R$, ni.prototype.get = P$, ni.prototype.has = F$, ni.prototype.set = U$;
      function qo(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function W$() {
        this.__data__ = [], this.size = 0;
      }
      function H$(t) {
        var n = this.__data__, i = Ll(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : El.call(n, i, 1), --this.size, !0;
      }
      function z$(t) {
        var n = this.__data__, i = Ll(n, t);
        return i < 0 ? r : n[i][1];
      }
      function q$(t) {
        return Ll(this.__data__, t) > -1;
      }
      function G$(t, n) {
        var i = this.__data__, l = Ll(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      qo.prototype.clear = W$, qo.prototype.delete = H$, qo.prototype.get = z$, qo.prototype.has = q$, qo.prototype.set = G$;
      function Go(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Y$() {
        this.size = 0, this.__data__ = {
          hash: new ni(),
          map: new (oa || qo)(),
          string: new ni()
        };
      }
      function j$(t) {
        var n = zl(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Z$(t) {
        return zl(this, t).get(t);
      }
      function K$(t) {
        return zl(this, t).has(t);
      }
      function J$(t, n) {
        var i = zl(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      Go.prototype.clear = Y$, Go.prototype.delete = j$, Go.prototype.get = Z$, Go.prototype.has = K$, Go.prototype.set = J$;
      function oi(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Go(); ++n < i; )
          this.add(t[n]);
      }
      function X$(t) {
        return this.__data__.set(t, m), this;
      }
      function Q$(t) {
        return this.__data__.has(t);
      }
      oi.prototype.add = oi.prototype.push = X$, oi.prototype.has = Q$;
      function eo(t) {
        var n = this.__data__ = new qo(t);
        this.size = n.size;
      }
      function ey() {
        this.__data__ = new qo(), this.size = 0;
      }
      function ty(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function ny(t) {
        return this.__data__.get(t);
      }
      function oy(t) {
        return this.__data__.has(t);
      }
      function ry(t, n) {
        var i = this.__data__;
        if (i instanceof qo) {
          var l = i.__data__;
          if (!oa || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new Go(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      eo.prototype.clear = ey, eo.prototype.delete = ty, eo.prototype.get = ny, eo.prototype.has = oy, eo.prototype.set = ry;
      function eh(t, n) {
        var i = se(t), l = !i && li(t), d = !i && !l && $r(t), h = !i && !l && !d && rs(t), _ = i || l || d || h, $ = _ ? Vc(t.length, h$) : [], V = $.length;
        for (var M in t)
          (n || Ne.call(t, M)) && !(_ && (M == "length" || d && (M == "offset" || M == "parent") || h && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Ko(M, V))) && $.push(M);
        return $;
      }
      function th(t) {
        var n = t.length;
        return n ? t[Uc(0, n - 1)] : r;
      }
      function iy(t, n) {
        return ql(an(t), ri(n, 0, t.length));
      }
      function sy(t) {
        return ql(an(t));
      }
      function xc(t, n, i) {
        (i !== r && !to(t[n], i) || i === r && !(n in t)) && Yo(t, n, i);
      }
      function aa(t, n, i) {
        var l = t[n];
        (!(Ne.call(t, n) && to(l, i)) || i === r && !(n in t)) && Yo(t, n, i);
      }
      function Ll(t, n) {
        for (var i = t.length; i--; )
          if (to(t[i][0], n))
            return i;
        return -1;
      }
      function ay(t, n, i, l) {
        return wr(t, function(d, h, _) {
          n(l, d, i(d), _);
        }), l;
      }
      function nh(t, n) {
        return t && bo(n, vt(n), t);
      }
      function ly(t, n) {
        return t && bo(n, un(n), t);
      }
      function Yo(t, n, i) {
        n == "__proto__" && Sl ? Sl(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Lc(t, n) {
        for (var i = -1, l = n.length, d = I(l), h = t == null; ++i < l; )
          d[i] = h ? r : fd(t, n[i]);
        return d;
      }
      function ri(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function Rn(t, n, i, l, d, h) {
        var _, $ = n & y, V = n & b, M = n & D;
        if (i && (_ = d ? i(t, l, d, h) : i(t)), _ !== r)
          return _;
        if (!Ke(t))
          return t;
        var N = se(t);
        if (N) {
          if (_ = Ky(t), !$)
            return an(t, _);
        } else {
          var F = Bt(t), Y = F == fo || F == Re;
          if ($r(t))
            return Sh(t, $);
          if (F == yt || F == gt || Y && !d) {
            if (_ = V || Y ? {} : qh(t), !$)
              return V ? Py(t, ly(_, t)) : Ry(t, nh(_, t));
          } else {
            if (!Fe[F])
              return d ? t : {};
            _ = Jy(t, F, $);
          }
        }
        h || (h = new eo());
        var J = h.get(t);
        if (J)
          return J;
        h.set(t, _), $m(t) ? t.forEach(function(te) {
          _.add(Rn(te, n, i, te, t, h));
        }) : _m(t) && t.forEach(function(te, fe) {
          _.set(fe, Rn(te, n, i, fe, t, h));
        });
        var ee = M ? V ? Xc : Jc : V ? un : vt, le = N ? r : ee(t);
        return Dn(le || t, function(te, fe) {
          le && (fe = te, te = t[fe]), aa(_, fe, Rn(te, n, i, fe, t, h));
        }), _;
      }
      function uy(t) {
        var n = vt(t);
        return function(i) {
          return oh(i, t, n);
        };
      }
      function oh(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = Pe(t); l--; ) {
          var d = i[l], h = n[d], _ = t[d];
          if (_ === r && !(d in t) || !h(_))
            return !1;
        }
        return !0;
      }
      function rh(t, n, i) {
        if (typeof t != "function")
          throw new On(c);
        return ha(function() {
          t.apply(r, i);
        }, n);
      }
      function la(t, n, i, l) {
        var d = -1, h = ml, _ = !0, $ = t.length, V = [], M = n.length;
        if (!$)
          return V;
        i && (n = Ge(n, $n(i))), l ? (h = _c, _ = !1) : n.length >= a && (h = ta, _ = !1, n = new oi(n));
        e:
          for (; ++d < $; ) {
            var N = t[d], F = i == null ? N : i(N);
            if (N = l || N !== 0 ? N : 0, _ && F === F) {
              for (var Y = M; Y--; )
                if (n[Y] === F)
                  continue e;
              V.push(N);
            } else
              h(n, F, l) || V.push(N);
          }
        return V;
      }
      var wr = xh(yo), ih = xh(Nc, !0);
      function cy(t, n) {
        var i = !0;
        return wr(t, function(l, d, h) {
          return i = !!n(l, d, h), i;
        }), i;
      }
      function Ml(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], _ = n(h);
          if (_ != null && ($ === r ? _ === _ && !bn(_) : i(_, $)))
            var $ = _, V = h;
        }
        return V;
      }
      function dy(t, n, i, l) {
        var d = t.length;
        for (i = ae(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : ae(l), l < 0 && (l += d), l = i > l ? 0 : bm(l); i < l; )
          t[i++] = n;
        return t;
      }
      function sh(t, n) {
        var i = [];
        return wr(t, function(l, d, h) {
          n(l, d, h) && i.push(l);
        }), i;
      }
      function Vt(t, n, i, l, d) {
        var h = -1, _ = t.length;
        for (i || (i = Qy), d || (d = []); ++h < _; ) {
          var $ = t[h];
          n > 0 && i($) ? n > 1 ? Vt($, n - 1, i, l, d) : pr(d, $) : l || (d[d.length] = $);
        }
        return d;
      }
      var Mc = Lh(), ah = Lh(!0);
      function yo(t, n) {
        return t && Mc(t, n, vt);
      }
      function Nc(t, n) {
        return t && ah(t, n, vt);
      }
      function Nl(t, n) {
        return fr(n, function(i) {
          return Jo(t[i]);
        });
      }
      function ii(t, n) {
        n = _r(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[Co(n[i++])];
        return i && i == l ? t : r;
      }
      function lh(t, n, i) {
        var l = n(t);
        return se(t) ? l : pr(l, i(t));
      }
      function jt(t) {
        return t == null ? t === r ? No : Ln : ti && ti in Pe(t) ? Yy(t) : sb(t);
      }
      function Dc(t, n) {
        return t > n;
      }
      function fy(t, n) {
        return t != null && Ne.call(t, n);
      }
      function py(t, n) {
        return t != null && n in Pe(t);
      }
      function hy(t, n, i) {
        return t >= Ot(n, i) && t < pt(n, i);
      }
      function Oc(t, n, i) {
        for (var l = i ? _c : ml, d = t[0].length, h = t.length, _ = h, $ = I(h), V = 1 / 0, M = []; _--; ) {
          var N = t[_];
          _ && n && (N = Ge(N, $n(n))), V = Ot(N.length, V), $[_] = !i && (n || d >= 120 && N.length >= 120) ? new oi(_ && N) : r;
        }
        N = t[0];
        var F = -1, Y = $[0];
        e:
          for (; ++F < d && M.length < V; ) {
            var J = N[F], ee = n ? n(J) : J;
            if (J = i || J !== 0 ? J : 0, !(Y ? ta(Y, ee) : l(M, ee, i))) {
              for (_ = h; --_; ) {
                var le = $[_];
                if (!(le ? ta(le, ee) : l(t[_], ee, i)))
                  continue e;
              }
              Y && Y.push(ee), M.push(J);
            }
          }
        return M;
      }
      function my(t, n, i, l) {
        return yo(t, function(d, h, _) {
          n(l, i(d), h, _);
        }), l;
      }
      function ua(t, n, i) {
        n = _r(n, t), t = Zh(t, n);
        var l = t == null ? t : t[Co(Fn(n))];
        return l == null ? r : gn(l, t, i);
      }
      function uh(t) {
        return et(t) && jt(t) == gt;
      }
      function wy(t) {
        return et(t) && jt(t) == jn;
      }
      function vy(t) {
        return et(t) && jt(t) == rn;
      }
      function ca(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !et(t) && !et(n) ? t !== t && n !== n : _y(t, n, i, l, ca, d);
      }
      function _y(t, n, i, l, d, h) {
        var _ = se(t), $ = se(n), V = _ ? Ht : Bt(t), M = $ ? Ht : Bt(n);
        V = V == gt ? yt : V, M = M == gt ? yt : M;
        var N = V == yt, F = M == yt, Y = V == M;
        if (Y && $r(t)) {
          if (!$r(n))
            return !1;
          _ = !0, N = !1;
        }
        if (Y && !N)
          return h || (h = new eo()), _ || rs(t) ? Wh(t, n, i, l, d, h) : qy(t, n, V, i, l, d, h);
        if (!(i & O)) {
          var J = N && Ne.call(t, "__wrapped__"), ee = F && Ne.call(n, "__wrapped__");
          if (J || ee) {
            var le = J ? t.value() : t, te = ee ? n.value() : n;
            return h || (h = new eo()), d(le, te, i, l, h);
          }
        }
        return Y ? (h || (h = new eo()), Gy(t, n, i, l, d, h)) : !1;
      }
      function gy(t) {
        return et(t) && Bt(t) == $t;
      }
      function Bc(t, n, i, l) {
        var d = i.length, h = d, _ = !l;
        if (t == null)
          return !h;
        for (t = Pe(t); d--; ) {
          var $ = i[d];
          if (_ && $[2] ? $[1] !== t[$[0]] : !($[0] in t))
            return !1;
        }
        for (; ++d < h; ) {
          $ = i[d];
          var V = $[0], M = t[V], N = $[1];
          if (_ && $[2]) {
            if (M === r && !(V in t))
              return !1;
          } else {
            var F = new eo();
            if (l)
              var Y = l(M, N, V, t, n, F);
            if (!(Y === r ? ca(N, M, O | R, l, F) : Y))
              return !1;
          }
        }
        return !0;
      }
      function ch(t) {
        if (!Ke(t) || tb(t))
          return !1;
        var n = Jo(t) ? g$ : Bi;
        return n.test(ai(t));
      }
      function $y(t) {
        return et(t) && jt(t) == Mn;
      }
      function yy(t) {
        return et(t) && Bt(t) == ct;
      }
      function by(t) {
        return et(t) && Jl(t.length) && !!He[jt(t)];
      }
      function dh(t) {
        return typeof t == "function" ? t : t == null ? cn : typeof t == "object" ? se(t) ? hh(t[0], t[1]) : ph(t) : Mm(t);
      }
      function Rc(t) {
        if (!pa(t))
          return E$(t);
        var n = [];
        for (var i in Pe(t))
          Ne.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function Cy(t) {
        if (!Ke(t))
          return ib(t);
        var n = pa(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !Ne.call(t, l)) || i.push(l);
        return i;
      }
      function Pc(t, n) {
        return t < n;
      }
      function fh(t, n) {
        var i = -1, l = ln(t) ? I(t.length) : [];
        return wr(t, function(d, h, _) {
          l[++i] = n(d, h, _);
        }), l;
      }
      function ph(t) {
        var n = ed(t);
        return n.length == 1 && n[0][2] ? Yh(n[0][0], n[0][1]) : function(i) {
          return i === t || Bc(i, t, n);
        };
      }
      function hh(t, n) {
        return nd(t) && Gh(n) ? Yh(Co(t), n) : function(i) {
          var l = fd(i, t);
          return l === r && l === n ? pd(i, t) : ca(n, l, O | R);
        };
      }
      function Dl(t, n, i, l, d) {
        t !== n && Mc(n, function(h, _) {
          if (d || (d = new eo()), Ke(h))
            Vy(t, n, _, i, Dl, l, d);
          else {
            var $ = l ? l(rd(t, _), h, _ + "", t, n, d) : r;
            $ === r && ($ = h), xc(t, _, $);
          }
        }, un);
      }
      function Vy(t, n, i, l, d, h, _) {
        var $ = rd(t, i), V = rd(n, i), M = _.get(V);
        if (M) {
          xc(t, i, M);
          return;
        }
        var N = h ? h($, V, i + "", t, n, _) : r, F = N === r;
        if (F) {
          var Y = se(V), J = !Y && $r(V), ee = !Y && !J && rs(V);
          N = V, Y || J || ee ? se($) ? N = $ : ot($) ? N = an($) : J ? (F = !1, N = Sh(V, !0)) : ee ? (F = !1, N = Ih(V, !0)) : N = [] : ma(V) || li(V) ? (N = $, li($) ? N = Cm($) : (!Ke($) || Jo($)) && (N = qh(V))) : F = !1;
        }
        F && (_.set(V, N), d(N, V, l, h, _), _.delete(V)), xc(t, i, N);
      }
      function mh(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, Ko(n, i) ? t[n] : r;
      }
      function wh(t, n, i) {
        n.length ? n = Ge(n, function(h) {
          return se(h) ? function(_) {
            return ii(_, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [cn];
        var l = -1;
        n = Ge(n, $n(Q()));
        var d = fh(t, function(h, _, $) {
          var V = Ge(n, function(M) {
            return M(h);
          });
          return { criteria: V, index: ++l, value: h };
        });
        return J0(d, function(h, _) {
          return By(h, _, i);
        });
      }
      function Ey(t, n) {
        return vh(t, n, function(i, l) {
          return pd(t, l);
        });
      }
      function vh(t, n, i) {
        for (var l = -1, d = n.length, h = {}; ++l < d; ) {
          var _ = n[l], $ = ii(t, _);
          i($, _) && da(h, _r(_, t), $);
        }
        return h;
      }
      function Sy(t) {
        return function(n) {
          return ii(n, t);
        };
      }
      function Fc(t, n, i, l) {
        var d = l ? K0 : Yi, h = -1, _ = n.length, $ = t;
        for (t === n && (n = an(n)), i && ($ = Ge(t, $n(i))); ++h < _; )
          for (var V = 0, M = n[h], N = i ? i(M) : M; (V = d($, N, V, l)) > -1; )
            $ !== t && El.call($, V, 1), El.call(t, V, 1);
        return t;
      }
      function _h(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== h) {
            var h = d;
            Ko(d) ? El.call(t, d, 1) : zc(t, d);
          }
        }
        return t;
      }
      function Uc(t, n) {
        return t + kl(Xp() * (n - t + 1));
      }
      function Iy(t, n, i, l) {
        for (var d = -1, h = pt(Il((n - t) / (i || 1)), 0), _ = I(h); h--; )
          _[l ? h : ++d] = t, t += i;
        return _;
      }
      function Wc(t, n) {
        var i = "";
        if (!t || n < 1 || n > qe)
          return i;
        do
          n % 2 && (i += t), n = kl(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function ce(t, n) {
        return id(jh(t, n, cn), t + "");
      }
      function ky(t) {
        return th(is(t));
      }
      function Ay(t, n) {
        var i = is(t);
        return ql(i, ri(n, 0, i.length));
      }
      function da(t, n, i, l) {
        if (!Ke(t))
          return t;
        n = _r(n, t);
        for (var d = -1, h = n.length, _ = h - 1, $ = t; $ != null && ++d < h; ) {
          var V = Co(n[d]), M = i;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != _) {
            var N = $[V];
            M = l ? l(N, V, $) : r, M === r && (M = Ke(N) ? N : Ko(n[d + 1]) ? [] : {});
          }
          aa($, V, M), $ = $[V];
        }
        return t;
      }
      var gh = Al ? function(t, n) {
        return Al.set(t, n), t;
      } : cn, Ty = Sl ? function(t, n) {
        return Sl(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: md(n),
          writable: !0
        });
      } : cn;
      function xy(t) {
        return ql(is(t));
      }
      function Pn(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var h = I(d); ++l < d; )
          h[l] = t[l + n];
        return h;
      }
      function Ly(t, n) {
        var i;
        return wr(t, function(l, d, h) {
          return i = n(l, d, h), !i;
        }), !!i;
      }
      function Ol(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= Xs) {
          for (; l < d; ) {
            var h = l + d >>> 1, _ = t[h];
            _ !== null && !bn(_) && (i ? _ <= n : _ < n) ? l = h + 1 : d = h;
          }
          return d;
        }
        return Hc(t, n, cn, i);
      }
      function Hc(t, n, i, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        n = i(n);
        for (var _ = n !== n, $ = n === null, V = bn(n), M = n === r; d < h; ) {
          var N = kl((d + h) / 2), F = i(t[N]), Y = F !== r, J = F === null, ee = F === F, le = bn(F);
          if (_)
            var te = l || ee;
          else
            M ? te = ee && (l || Y) : $ ? te = ee && Y && (l || !J) : V ? te = ee && Y && !J && (l || !le) : J || le ? te = !1 : te = l ? F <= n : F < n;
          te ? d = N + 1 : h = N;
        }
        return Ot(h, Js);
      }
      function $h(t, n) {
        for (var i = -1, l = t.length, d = 0, h = []; ++i < l; ) {
          var _ = t[i], $ = n ? n(_) : _;
          if (!i || !to($, V)) {
            var V = $;
            h[d++] = _ === 0 ? 0 : _;
          }
        }
        return h;
      }
      function yh(t) {
        return typeof t == "number" ? t : bn(t) ? Mo : +t;
      }
      function yn(t) {
        if (typeof t == "string")
          return t;
        if (se(t))
          return Ge(t, yn) + "";
        if (bn(t))
          return Qp ? Qp.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Xe ? "-0" : n;
      }
      function vr(t, n, i) {
        var l = -1, d = ml, h = t.length, _ = !0, $ = [], V = $;
        if (i)
          _ = !1, d = _c;
        else if (h >= a) {
          var M = n ? null : Hy(t);
          if (M)
            return vl(M);
          _ = !1, d = ta, V = new oi();
        } else
          V = n ? [] : $;
        e:
          for (; ++l < h; ) {
            var N = t[l], F = n ? n(N) : N;
            if (N = i || N !== 0 ? N : 0, _ && F === F) {
              for (var Y = V.length; Y--; )
                if (V[Y] === F)
                  continue e;
              n && V.push(F), $.push(N);
            } else
              d(V, F, i) || (V !== $ && V.push(F), $.push(N));
          }
        return $;
      }
      function zc(t, n) {
        return n = _r(n, t), t = Zh(t, n), t == null || delete t[Co(Fn(n))];
      }
      function bh(t, n, i, l) {
        return da(t, n, i(ii(t, n)), l);
      }
      function Bl(t, n, i, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && n(t[h], h, t); )
          ;
        return i ? Pn(t, l ? 0 : h, l ? h + 1 : d) : Pn(t, l ? h + 1 : 0, l ? d : h);
      }
      function Ch(t, n) {
        var i = t;
        return i instanceof me && (i = i.value()), gc(n, function(l, d) {
          return d.func.apply(d.thisArg, pr([l], d.args));
        }, i);
      }
      function qc(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? vr(t[0]) : [];
        for (var d = -1, h = I(l); ++d < l; )
          for (var _ = t[d], $ = -1; ++$ < l; )
            $ != d && (h[d] = la(h[d] || _, t[$], n, i));
        return vr(Vt(h, 1), n, i);
      }
      function Vh(t, n, i) {
        for (var l = -1, d = t.length, h = n.length, _ = {}; ++l < d; ) {
          var $ = l < h ? n[l] : r;
          i(_, t[l], $);
        }
        return _;
      }
      function Gc(t) {
        return ot(t) ? t : [];
      }
      function Yc(t) {
        return typeof t == "function" ? t : cn;
      }
      function _r(t, n) {
        return se(t) ? t : nd(t, n) ? [t] : Qh(Te(t));
      }
      var My = ce;
      function gr(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Pn(t, n, i);
      }
      var Eh = $$ || function(t) {
        return Ct.clearTimeout(t);
      };
      function Sh(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Yp ? Yp(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function jc(t) {
        var n = new t.constructor(t.byteLength);
        return new Cl(n).set(new Cl(t)), n;
      }
      function Ny(t, n) {
        var i = n ? jc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function Dy(t) {
        var n = new t.constructor(t.source, Wo.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Oy(t) {
        return sa ? Pe(sa.call(t)) : {};
      }
      function Ih(t, n) {
        var i = n ? jc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function kh(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, h = bn(t), _ = n !== r, $ = n === null, V = n === n, M = bn(n);
          if (!$ && !M && !h && t > n || h && _ && V && !$ && !M || l && _ && V || !i && V || !d)
            return 1;
          if (!l && !h && !M && t < n || M && i && d && !l && !h || $ && i && d || !_ && d || !V)
            return -1;
        }
        return 0;
      }
      function By(t, n, i) {
        for (var l = -1, d = t.criteria, h = n.criteria, _ = d.length, $ = i.length; ++l < _; ) {
          var V = kh(d[l], h[l]);
          if (V) {
            if (l >= $)
              return V;
            var M = i[l];
            return V * (M == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ah(t, n, i, l) {
        for (var d = -1, h = t.length, _ = i.length, $ = -1, V = n.length, M = pt(h - _, 0), N = I(V + M), F = !l; ++$ < V; )
          N[$] = n[$];
        for (; ++d < _; )
          (F || d < h) && (N[i[d]] = t[d]);
        for (; M--; )
          N[$++] = t[d++];
        return N;
      }
      function Th(t, n, i, l) {
        for (var d = -1, h = t.length, _ = -1, $ = i.length, V = -1, M = n.length, N = pt(h - $, 0), F = I(N + M), Y = !l; ++d < N; )
          F[d] = t[d];
        for (var J = d; ++V < M; )
          F[J + V] = n[V];
        for (; ++_ < $; )
          (Y || d < h) && (F[J + i[_]] = t[d++]);
        return F;
      }
      function an(t, n) {
        var i = -1, l = t.length;
        for (n || (n = I(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function bo(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var h = -1, _ = n.length; ++h < _; ) {
          var $ = n[h], V = l ? l(i[$], t[$], $, i, t) : r;
          V === r && (V = t[$]), d ? Yo(i, $, V) : aa(i, $, V);
        }
        return i;
      }
      function Ry(t, n) {
        return bo(t, td(t), n);
      }
      function Py(t, n) {
        return bo(t, Hh(t), n);
      }
      function Rl(t, n) {
        return function(i, l) {
          var d = se(i) ? z0 : ay, h = n ? n() : {};
          return d(i, t, Q(l, 2), h);
        };
      }
      function ts(t) {
        return ce(function(n, i) {
          var l = -1, d = i.length, h = d > 1 ? i[d - 1] : r, _ = d > 2 ? i[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, _ && Zt(i[0], i[1], _) && (h = d < 3 ? r : h, d = 1), n = Pe(n); ++l < d; ) {
            var $ = i[l];
            $ && t(n, $, l, h);
          }
          return n;
        });
      }
      function xh(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!ln(i))
            return t(i, l);
          for (var d = i.length, h = n ? d : -1, _ = Pe(i); (n ? h-- : ++h < d) && l(_[h], h, _) !== !1; )
            ;
          return i;
        };
      }
      function Lh(t) {
        return function(n, i, l) {
          for (var d = -1, h = Pe(n), _ = l(n), $ = _.length; $--; ) {
            var V = _[t ? $ : ++d];
            if (i(h[V], V, h) === !1)
              break;
          }
          return n;
        };
      }
      function Fy(t, n, i) {
        var l = n & B, d = fa(t);
        function h() {
          var _ = this && this !== Ct && this instanceof h ? d : t;
          return _.apply(l ? i : this, arguments);
        }
        return h;
      }
      function Mh(t) {
        return function(n) {
          n = Te(n);
          var i = ji(n) ? Qn(n) : r, l = i ? i[0] : n.charAt(0), d = i ? gr(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function ns(t) {
        return function(n) {
          return gc(xm(Tm(n).replace(T0, "")), t, "");
        };
      }
      function fa(t) {
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
          var i = es(t.prototype), l = t.apply(i, n);
          return Ke(l) ? l : i;
        };
      }
      function Uy(t, n, i) {
        var l = fa(t);
        function d() {
          for (var h = arguments.length, _ = I(h), $ = h, V = os(d); $--; )
            _[$] = arguments[$];
          var M = h < 3 && _[0] !== V && _[h - 1] !== V ? [] : hr(_, V);
          if (h -= M.length, h < i)
            return Rh(
              t,
              n,
              Pl,
              d.placeholder,
              r,
              _,
              M,
              r,
              r,
              i - h
            );
          var N = this && this !== Ct && this instanceof d ? l : t;
          return gn(N, this, _);
        }
        return d;
      }
      function Nh(t) {
        return function(n, i, l) {
          var d = Pe(n);
          if (!ln(n)) {
            var h = Q(i, 3);
            n = vt(n), i = function($) {
              return h(d[$], $, d);
            };
          }
          var _ = t(n, i, l);
          return _ > -1 ? d[h ? n[_] : _] : r;
        };
      }
      function Dh(t) {
        return Zo(function(n) {
          var i = n.length, l = i, d = Bn.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var h = n[l];
            if (typeof h != "function")
              throw new On(c);
            if (d && !_ && Hl(h) == "wrapper")
              var _ = new Bn([], !0);
          }
          for (l = _ ? l : i; ++l < i; ) {
            h = n[l];
            var $ = Hl(h), V = $ == "wrapper" ? Qc(h) : r;
            V && od(V[0]) && V[1] == (W | T | k | K) && !V[4].length && V[9] == 1 ? _ = _[Hl(V[0])].apply(_, V[3]) : _ = h.length == 1 && od(h) ? _[$]() : _.thru(h);
          }
          return function() {
            var M = arguments, N = M[0];
            if (_ && M.length == 1 && se(N))
              return _.plant(N).value();
            for (var F = 0, Y = i ? n[F].apply(this, M) : N; ++F < i; )
              Y = n[F].call(this, Y);
            return Y;
          };
        });
      }
      function Pl(t, n, i, l, d, h, _, $, V, M) {
        var N = n & W, F = n & B, Y = n & S, J = n & (T | P), ee = n & Me, le = Y ? r : fa(t);
        function te() {
          for (var fe = arguments.length, ve = I(fe), Cn = fe; Cn--; )
            ve[Cn] = arguments[Cn];
          if (J)
            var Kt = os(te), Vn = Q0(ve, Kt);
          if (l && (ve = Ah(ve, l, d, J)), h && (ve = Th(ve, h, _, J)), fe -= Vn, J && fe < M) {
            var rt = hr(ve, Kt);
            return Rh(
              t,
              n,
              Pl,
              te.placeholder,
              i,
              ve,
              rt,
              $,
              V,
              M - fe
            );
          }
          var no = F ? i : this, Qo = Y ? no[t] : t;
          return fe = ve.length, $ ? ve = ab(ve, $) : ee && fe > 1 && ve.reverse(), N && V < fe && (ve.length = V), this && this !== Ct && this instanceof te && (Qo = le || fa(Qo)), Qo.apply(no, ve);
        }
        return te;
      }
      function Oh(t, n) {
        return function(i, l) {
          return my(i, t, n(l), {});
        };
      }
      function Fl(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = yn(i), l = yn(l)) : (i = yh(i), l = yh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Zc(t) {
        return Zo(function(n) {
          return n = Ge(n, $n(Q())), ce(function(i) {
            var l = this;
            return t(n, function(d) {
              return gn(d, l, i);
            });
          });
        });
      }
      function Ul(t, n) {
        n = n === r ? " " : yn(n);
        var i = n.length;
        if (i < 2)
          return i ? Wc(n, t) : n;
        var l = Wc(n, Il(t / Zi(n)));
        return ji(n) ? gr(Qn(l), 0, t).join("") : l.slice(0, t);
      }
      function Wy(t, n, i, l) {
        var d = n & B, h = fa(t);
        function _() {
          for (var $ = -1, V = arguments.length, M = -1, N = l.length, F = I(N + V), Y = this && this !== Ct && this instanceof _ ? h : t; ++M < N; )
            F[M] = l[M];
          for (; V--; )
            F[M++] = arguments[++$];
          return gn(Y, d ? i : this, F);
        }
        return _;
      }
      function Bh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Zt(n, i, l) && (i = l = r), n = Xo(n), i === r ? (i = n, n = 0) : i = Xo(i), l = l === r ? n < i ? 1 : -1 : Xo(l), Iy(n, i, l, t);
        };
      }
      function Wl(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Un(n), i = Un(i)), t(n, i);
        };
      }
      function Rh(t, n, i, l, d, h, _, $, V, M) {
        var N = n & T, F = N ? _ : r, Y = N ? r : _, J = N ? h : r, ee = N ? r : h;
        n |= N ? k : U, n &= ~(N ? U : k), n & A || (n &= ~(B | S));
        var le = [
          t,
          n,
          d,
          J,
          F,
          ee,
          Y,
          $,
          V,
          M
        ], te = i.apply(r, le);
        return od(t) && Kh(te, le), te.placeholder = l, Jh(te, t, n);
      }
      function Kc(t) {
        var n = ft[t];
        return function(i, l) {
          if (i = Un(i), l = l == null ? 0 : Ot(ae(l), 292), l && Jp(i)) {
            var d = (Te(i) + "e").split("e"), h = n(d[0] + "e" + (+d[1] + l));
            return d = (Te(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Hy = Xi && 1 / vl(new Xi([, -0]))[1] == Xe ? function(t) {
        return new Xi(t);
      } : _d;
      function Ph(t) {
        return function(n) {
          var i = Bt(n);
          return i == $t ? Sc(n) : i == ct ? s$(n) : X0(n, t(n));
        };
      }
      function jo(t, n, i, l, d, h, _, $) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new On(c);
        var M = l ? l.length : 0;
        if (M || (n &= ~(k | U), l = d = r), _ = _ === r ? _ : pt(ae(_), 0), $ = $ === r ? $ : ae($), M -= d ? d.length : 0, n & U) {
          var N = l, F = d;
          l = d = r;
        }
        var Y = V ? r : Qc(t), J = [
          t,
          n,
          i,
          l,
          d,
          N,
          F,
          h,
          _,
          $
        ];
        if (Y && rb(J, Y), t = J[0], n = J[1], i = J[2], l = J[3], d = J[4], $ = J[9] = J[9] === r ? V ? 0 : t.length : pt(J[9] - M, 0), !$ && n & (T | P) && (n &= ~(T | P)), !n || n == B)
          var ee = Fy(t, n, i);
        else
          n == T || n == P ? ee = Uy(t, n, $) : (n == k || n == (B | k)) && !d.length ? ee = Wy(t, n, i, l) : ee = Pl.apply(r, J);
        var le = Y ? gh : Kh;
        return Jh(le(ee, J), t, n);
      }
      function Fh(t, n, i, l) {
        return t === r || to(t, Ji[i]) && !Ne.call(l, i) ? n : t;
      }
      function Uh(t, n, i, l, d, h) {
        return Ke(t) && Ke(n) && (h.set(n, t), Dl(t, n, r, Uh, h), h.delete(n)), t;
      }
      function zy(t) {
        return ma(t) ? r : t;
      }
      function Wh(t, n, i, l, d, h) {
        var _ = i & O, $ = t.length, V = n.length;
        if ($ != V && !(_ && V > $))
          return !1;
        var M = h.get(t), N = h.get(n);
        if (M && N)
          return M == n && N == t;
        var F = -1, Y = !0, J = i & R ? new oi() : r;
        for (h.set(t, n), h.set(n, t); ++F < $; ) {
          var ee = t[F], le = n[F];
          if (l)
            var te = _ ? l(le, ee, F, n, t, h) : l(ee, le, F, t, n, h);
          if (te !== r) {
            if (te)
              continue;
            Y = !1;
            break;
          }
          if (J) {
            if (!$c(n, function(fe, ve) {
              if (!ta(J, ve) && (ee === fe || d(ee, fe, i, l, h)))
                return J.push(ve);
            })) {
              Y = !1;
              break;
            }
          } else if (!(ee === le || d(ee, le, i, l, h))) {
            Y = !1;
            break;
          }
        }
        return h.delete(t), h.delete(n), Y;
      }
      function qy(t, n, i, l, d, h, _) {
        switch (i) {
          case Nt:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case jn:
            return !(t.byteLength != n.byteLength || !h(new Cl(t), new Cl(n)));
          case vn:
          case rn:
          case ye:
            return to(+t, +n);
          case Be:
            return t.name == n.name && t.message == n.message;
          case Mn:
          case po:
            return t == n + "";
          case $t:
            var $ = Sc;
          case ct:
            var V = l & O;
            if ($ || ($ = vl), t.size != n.size && !V)
              return !1;
            var M = _.get(t);
            if (M)
              return M == n;
            l |= R, _.set(t, n);
            var N = Wh($(t), $(n), l, d, h, _);
            return _.delete(t), N;
          case dt:
            if (sa)
              return sa.call(t) == sa.call(n);
        }
        return !1;
      }
      function Gy(t, n, i, l, d, h) {
        var _ = i & O, $ = Jc(t), V = $.length, M = Jc(n), N = M.length;
        if (V != N && !_)
          return !1;
        for (var F = V; F--; ) {
          var Y = $[F];
          if (!(_ ? Y in n : Ne.call(n, Y)))
            return !1;
        }
        var J = h.get(t), ee = h.get(n);
        if (J && ee)
          return J == n && ee == t;
        var le = !0;
        h.set(t, n), h.set(n, t);
        for (var te = _; ++F < V; ) {
          Y = $[F];
          var fe = t[Y], ve = n[Y];
          if (l)
            var Cn = _ ? l(ve, fe, Y, n, t, h) : l(fe, ve, Y, t, n, h);
          if (!(Cn === r ? fe === ve || d(fe, ve, i, l, h) : Cn)) {
            le = !1;
            break;
          }
          te || (te = Y == "constructor");
        }
        if (le && !te) {
          var Kt = t.constructor, Vn = n.constructor;
          Kt != Vn && "constructor" in t && "constructor" in n && !(typeof Kt == "function" && Kt instanceof Kt && typeof Vn == "function" && Vn instanceof Vn) && (le = !1);
        }
        return h.delete(t), h.delete(n), le;
      }
      function Zo(t) {
        return id(jh(t, r, om), t + "");
      }
      function Jc(t) {
        return lh(t, vt, td);
      }
      function Xc(t) {
        return lh(t, un, Hh);
      }
      var Qc = Al ? function(t) {
        return Al.get(t);
      } : _d;
      function Hl(t) {
        for (var n = t.name + "", i = Qi[n], l = Ne.call(Qi, n) ? i.length : 0; l--; ) {
          var d = i[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return n;
      }
      function os(t) {
        var n = Ne.call(p, "placeholder") ? p : t;
        return n.placeholder;
      }
      function Q() {
        var t = p.iteratee || wd;
        return t = t === wd ? dh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function zl(t, n) {
        var i = t.__data__;
        return eb(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function ed(t) {
        for (var n = vt(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Gh(d)];
        }
        return n;
      }
      function si(t, n) {
        var i = o$(t, n);
        return ch(i) ? i : r;
      }
      function Yy(t) {
        var n = Ne.call(t, ti), i = t[ti];
        try {
          t[ti] = r;
          var l = !0;
        } catch {
        }
        var d = yl.call(t);
        return l && (n ? t[ti] = i : delete t[ti]), d;
      }
      var td = kc ? function(t) {
        return t == null ? [] : (t = Pe(t), fr(kc(t), function(n) {
          return Zp.call(t, n);
        }));
      } : gd, Hh = kc ? function(t) {
        for (var n = []; t; )
          pr(n, td(t)), t = Vl(t);
        return n;
      } : gd, Bt = jt;
      (Ac && Bt(new Ac(new ArrayBuffer(1))) != Nt || oa && Bt(new oa()) != $t || Tc && Bt(Tc.resolve()) != Mt || Xi && Bt(new Xi()) != ct || ra && Bt(new ra()) != zt) && (Bt = function(t) {
        var n = jt(t), i = n == yt ? t.constructor : r, l = i ? ai(i) : "";
        if (l)
          switch (l) {
            case A$:
              return Nt;
            case T$:
              return $t;
            case x$:
              return Mt;
            case L$:
              return ct;
            case M$:
              return zt;
          }
        return n;
      });
      function jy(t, n, i) {
        for (var l = -1, d = i.length; ++l < d; ) {
          var h = i[l], _ = h.size;
          switch (h.type) {
            case "drop":
              t += _;
              break;
            case "dropRight":
              n -= _;
              break;
            case "take":
              n = Ot(n, t + _);
              break;
            case "takeRight":
              t = pt(t, n - _);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Zy(t) {
        var n = t.match(Oi);
        return n ? n[1].split(re) : [];
      }
      function zh(t, n, i) {
        n = _r(n, t);
        for (var l = -1, d = n.length, h = !1; ++l < d; ) {
          var _ = Co(n[l]);
          if (!(h = t != null && i(t, _)))
            break;
          t = t[_];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && Jl(d) && Ko(_, d) && (se(t) || li(t)));
      }
      function Ky(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && Ne.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function qh(t) {
        return typeof t.constructor == "function" && !pa(t) ? es(Vl(t)) : {};
      }
      function Jy(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case jn:
            return jc(t);
          case vn:
          case rn:
            return new l(+t);
          case Nt:
            return Ny(t, i);
          case Zn:
          case Kn:
          case Do:
          case Oo:
          case Bo:
          case ho:
          case mo:
          case _n:
          case bt:
            return Ih(t, i);
          case $t:
            return new l();
          case ye:
          case po:
            return new l(t);
          case Mn:
            return Dy(t);
          case ct:
            return new l();
          case dt:
            return Oy(t);
        }
      }
      function Xy(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(_o, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Qy(t) {
        return se(t) || li(t) || !!(Kp && t && t[Kp]);
      }
      function Ko(t, n) {
        var i = typeof t;
        return n = n == null ? qe : n, !!n && (i == "number" || i != "symbol" && Pi.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Zt(t, n, i) {
        if (!Ke(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? ln(i) && Ko(n, i.length) : l == "string" && n in i) ? to(i[n], t) : !1;
      }
      function nd(t, n) {
        if (se(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || bn(t) ? !0 : Ni.test(t) || !ur.test(t) || n != null && t in Pe(n);
      }
      function eb(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function od(t) {
        var n = Hl(t), i = p[n];
        if (typeof i != "function" || !(n in me.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Qc(i);
        return !!l && t === l[0];
      }
      function tb(t) {
        return !!Gp && Gp in t;
      }
      var nb = gl ? Jo : $d;
      function pa(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || Ji;
        return t === i;
      }
      function Gh(t) {
        return t === t && !Ke(t);
      }
      function Yh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in Pe(i));
        };
      }
      function ob(t) {
        var n = Zl(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function rb(t, n) {
        var i = t[1], l = n[1], d = i | l, h = d < (B | S | W), _ = l == W && i == T || l == W && i == K && t[7].length <= n[8] || l == (W | K) && n[7].length <= n[8] && i == T;
        if (!(h || _))
          return t;
        l & B && (t[2] = n[2], d |= i & B ? 0 : A);
        var $ = n[3];
        if ($) {
          var V = t[3];
          t[3] = V ? Ah(V, $, n[4]) : $, t[4] = V ? hr(t[3], g) : n[4];
        }
        return $ = n[5], $ && (V = t[5], t[5] = V ? Th(V, $, n[6]) : $, t[6] = V ? hr(t[5], g) : n[6]), $ = n[7], $ && (t[7] = $), l & W && (t[8] = t[8] == null ? n[8] : Ot(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function ib(t) {
        var n = [];
        if (t != null)
          for (var i in Pe(t))
            n.push(i);
        return n;
      }
      function sb(t) {
        return yl.call(t);
      }
      function jh(t, n, i) {
        return n = pt(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, h = pt(l.length - n, 0), _ = I(h); ++d < h; )
            _[d] = l[n + d];
          d = -1;
          for (var $ = I(n + 1); ++d < n; )
            $[d] = l[d];
          return $[n] = i(_), gn(t, this, $);
        };
      }
      function Zh(t, n) {
        return n.length < 2 ? t : ii(t, Pn(n, 0, -1));
      }
      function ab(t, n) {
        for (var i = t.length, l = Ot(n.length, i), d = an(t); l--; ) {
          var h = n[l];
          t[l] = Ko(h, i) ? d[h] : r;
        }
        return t;
      }
      function rd(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Kh = Xh(gh), ha = b$ || function(t, n) {
        return Ct.setTimeout(t, n);
      }, id = Xh(Ty);
      function Jh(t, n, i) {
        var l = n + "";
        return id(t, Xy(l, lb(Zy(l), i)));
      }
      function Xh(t) {
        var n = 0, i = 0;
        return function() {
          var l = S$(), d = We - (l - i);
          if (i = l, d > 0) {
            if (++n >= Ee)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function ql(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var h = Uc(i, d), _ = t[h];
          t[h] = t[i], t[i] = _;
        }
        return t.length = n, t;
      }
      var Qh = ob(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Gr, function(i, l, d, h) {
          n.push(d ? h.replace(Ce, "$1") : l || i);
        }), n;
      });
      function Co(t) {
        if (typeof t == "string" || bn(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Xe ? "-0" : n;
      }
      function ai(t) {
        if (t != null) {
          try {
            return $l.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function lb(t, n) {
        return Dn(Mi, function(i) {
          var l = "_." + i[0];
          n & i[1] && !ml(t, l) && t.push(l);
        }), t.sort();
      }
      function em(t) {
        if (t instanceof me)
          return t.clone();
        var n = new Bn(t.__wrapped__, t.__chain__);
        return n.__actions__ = an(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function ub(t, n, i) {
        (i ? Zt(t, n, i) : n === r) ? n = 1 : n = pt(ae(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, h = 0, _ = I(Il(l / n)); d < l; )
          _[h++] = Pn(t, d, d += n);
        return _;
      }
      function cb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var h = t[n];
          h && (d[l++] = h);
        }
        return d;
      }
      function db() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = I(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return pr(se(i) ? an(i) : [i], Vt(n, 1));
      }
      var fb = ce(function(t, n) {
        return ot(t) ? la(t, Vt(n, 1, ot, !0)) : [];
      }), pb = ce(function(t, n) {
        var i = Fn(n);
        return ot(i) && (i = r), ot(t) ? la(t, Vt(n, 1, ot, !0), Q(i, 2)) : [];
      }), hb = ce(function(t, n) {
        var i = Fn(n);
        return ot(i) && (i = r), ot(t) ? la(t, Vt(n, 1, ot, !0), r, i) : [];
      });
      function mb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : ae(n), Pn(t, n < 0 ? 0 : n, l)) : [];
      }
      function wb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : ae(n), n = l - n, Pn(t, 0, n < 0 ? 0 : n)) : [];
      }
      function vb(t, n) {
        return t && t.length ? Bl(t, Q(n, 3), !0, !0) : [];
      }
      function _b(t, n) {
        return t && t.length ? Bl(t, Q(n, 3), !0) : [];
      }
      function gb(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Zt(t, n, i) && (i = 0, l = d), dy(t, n, i, l)) : [];
      }
      function tm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : ae(i);
        return d < 0 && (d = pt(l + d, 0)), wl(t, Q(n, 3), d);
      }
      function nm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = ae(i), d = i < 0 ? pt(l + d, 0) : Ot(d, l - 1)), wl(t, Q(n, 3), d, !0);
      }
      function om(t) {
        var n = t == null ? 0 : t.length;
        return n ? Vt(t, 1) : [];
      }
      function $b(t) {
        var n = t == null ? 0 : t.length;
        return n ? Vt(t, Xe) : [];
      }
      function yb(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : ae(n), Vt(t, n)) : [];
      }
      function bb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function rm(t) {
        return t && t.length ? t[0] : r;
      }
      function Cb(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : ae(i);
        return d < 0 && (d = pt(l + d, 0)), Yi(t, n, d);
      }
      function Vb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Pn(t, 0, -1) : [];
      }
      var Eb = ce(function(t) {
        var n = Ge(t, Gc);
        return n.length && n[0] === t[0] ? Oc(n) : [];
      }), Sb = ce(function(t) {
        var n = Fn(t), i = Ge(t, Gc);
        return n === Fn(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Oc(i, Q(n, 2)) : [];
      }), Ib = ce(function(t) {
        var n = Fn(t), i = Ge(t, Gc);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Oc(i, r, n) : [];
      });
      function kb(t, n) {
        return t == null ? "" : V$.call(t, n);
      }
      function Fn(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Ab(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = ae(i), d = d < 0 ? pt(l + d, 0) : Ot(d, l - 1)), n === n ? l$(t, n, d) : wl(t, Rp, d, !0);
      }
      function Tb(t, n) {
        return t && t.length ? mh(t, ae(n)) : r;
      }
      var xb = ce(im);
      function im(t, n) {
        return t && t.length && n && n.length ? Fc(t, n) : t;
      }
      function Lb(t, n, i) {
        return t && t.length && n && n.length ? Fc(t, n, Q(i, 2)) : t;
      }
      function Mb(t, n, i) {
        return t && t.length && n && n.length ? Fc(t, n, r, i) : t;
      }
      var Nb = Zo(function(t, n) {
        var i = t == null ? 0 : t.length, l = Lc(t, n);
        return _h(t, Ge(n, function(d) {
          return Ko(d, i) ? +d : d;
        }).sort(kh)), l;
      });
      function Db(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], h = t.length;
        for (n = Q(n, 3); ++l < h; ) {
          var _ = t[l];
          n(_, l, t) && (i.push(_), d.push(l));
        }
        return _h(t, d), i;
      }
      function sd(t) {
        return t == null ? t : k$.call(t);
      }
      function Ob(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Zt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : ae(n), i = i === r ? l : ae(i)), Pn(t, n, i)) : [];
      }
      function Bb(t, n) {
        return Ol(t, n);
      }
      function Rb(t, n, i) {
        return Hc(t, n, Q(i, 2));
      }
      function Pb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Ol(t, n);
          if (l < i && to(t[l], n))
            return l;
        }
        return -1;
      }
      function Fb(t, n) {
        return Ol(t, n, !0);
      }
      function Ub(t, n, i) {
        return Hc(t, n, Q(i, 2), !0);
      }
      function Wb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Ol(t, n, !0) - 1;
          if (to(t[l], n))
            return l;
        }
        return -1;
      }
      function Hb(t) {
        return t && t.length ? $h(t) : [];
      }
      function zb(t, n) {
        return t && t.length ? $h(t, Q(n, 2)) : [];
      }
      function qb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Pn(t, 1, n) : [];
      }
      function Gb(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : ae(n), Pn(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Yb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : ae(n), n = l - n, Pn(t, n < 0 ? 0 : n, l)) : [];
      }
      function jb(t, n) {
        return t && t.length ? Bl(t, Q(n, 3), !1, !0) : [];
      }
      function Zb(t, n) {
        return t && t.length ? Bl(t, Q(n, 3)) : [];
      }
      var Kb = ce(function(t) {
        return vr(Vt(t, 1, ot, !0));
      }), Jb = ce(function(t) {
        var n = Fn(t);
        return ot(n) && (n = r), vr(Vt(t, 1, ot, !0), Q(n, 2));
      }), Xb = ce(function(t) {
        var n = Fn(t);
        return n = typeof n == "function" ? n : r, vr(Vt(t, 1, ot, !0), r, n);
      });
      function Qb(t) {
        return t && t.length ? vr(t) : [];
      }
      function eC(t, n) {
        return t && t.length ? vr(t, Q(n, 2)) : [];
      }
      function tC(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? vr(t, r, n) : [];
      }
      function ad(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = fr(t, function(i) {
          if (ot(i))
            return n = pt(i.length, n), !0;
        }), Vc(n, function(i) {
          return Ge(t, yc(i));
        });
      }
      function sm(t, n) {
        if (!(t && t.length))
          return [];
        var i = ad(t);
        return n == null ? i : Ge(i, function(l) {
          return gn(n, r, l);
        });
      }
      var nC = ce(function(t, n) {
        return ot(t) ? la(t, n) : [];
      }), oC = ce(function(t) {
        return qc(fr(t, ot));
      }), rC = ce(function(t) {
        var n = Fn(t);
        return ot(n) && (n = r), qc(fr(t, ot), Q(n, 2));
      }), iC = ce(function(t) {
        var n = Fn(t);
        return n = typeof n == "function" ? n : r, qc(fr(t, ot), r, n);
      }), sC = ce(ad);
      function aC(t, n) {
        return Vh(t || [], n || [], aa);
      }
      function lC(t, n) {
        return Vh(t || [], n || [], da);
      }
      var uC = ce(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, sm(t, i);
      });
      function am(t) {
        var n = p(t);
        return n.__chain__ = !0, n;
      }
      function cC(t, n) {
        return n(t), t;
      }
      function Gl(t, n) {
        return n(t);
      }
      var dC = Zo(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Lc(h, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof me) || !Ko(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Gl,
          args: [d],
          thisArg: r
        }), new Bn(l, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function fC() {
        return am(this);
      }
      function pC() {
        return new Bn(this.value(), this.__chain__);
      }
      function hC() {
        this.__values__ === r && (this.__values__ = ym(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function mC() {
        return this;
      }
      function wC(t) {
        for (var n, i = this; i instanceof xl; ) {
          var l = em(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function vC() {
        var t = this.__wrapped__;
        if (t instanceof me) {
          var n = t;
          return this.__actions__.length && (n = new me(this)), n = n.reverse(), n.__actions__.push({
            func: Gl,
            args: [sd],
            thisArg: r
          }), new Bn(n, this.__chain__);
        }
        return this.thru(sd);
      }
      function _C() {
        return Ch(this.__wrapped__, this.__actions__);
      }
      var gC = Rl(function(t, n, i) {
        Ne.call(t, i) ? ++t[i] : Yo(t, i, 1);
      });
      function $C(t, n, i) {
        var l = se(t) ? Op : cy;
        return i && Zt(t, n, i) && (n = r), l(t, Q(n, 3));
      }
      function yC(t, n) {
        var i = se(t) ? fr : sh;
        return i(t, Q(n, 3));
      }
      var bC = Nh(tm), CC = Nh(nm);
      function VC(t, n) {
        return Vt(Yl(t, n), 1);
      }
      function EC(t, n) {
        return Vt(Yl(t, n), Xe);
      }
      function SC(t, n, i) {
        return i = i === r ? 1 : ae(i), Vt(Yl(t, n), i);
      }
      function lm(t, n) {
        var i = se(t) ? Dn : wr;
        return i(t, Q(n, 3));
      }
      function um(t, n) {
        var i = se(t) ? q0 : ih;
        return i(t, Q(n, 3));
      }
      var IC = Rl(function(t, n, i) {
        Ne.call(t, i) ? t[i].push(n) : Yo(t, i, [n]);
      });
      function kC(t, n, i, l) {
        t = ln(t) ? t : is(t), i = i && !l ? ae(i) : 0;
        var d = t.length;
        return i < 0 && (i = pt(d + i, 0)), Xl(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Yi(t, n, i) > -1;
      }
      var AC = ce(function(t, n, i) {
        var l = -1, d = typeof n == "function", h = ln(t) ? I(t.length) : [];
        return wr(t, function(_) {
          h[++l] = d ? gn(n, _, i) : ua(_, n, i);
        }), h;
      }), TC = Rl(function(t, n, i) {
        Yo(t, i, n);
      });
      function Yl(t, n) {
        var i = se(t) ? Ge : fh;
        return i(t, Q(n, 3));
      }
      function xC(t, n, i, l) {
        return t == null ? [] : (se(n) || (n = n == null ? [] : [n]), i = l ? r : i, se(i) || (i = i == null ? [] : [i]), wh(t, n, i));
      }
      var LC = Rl(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function MC(t, n, i) {
        var l = se(t) ? gc : Fp, d = arguments.length < 3;
        return l(t, Q(n, 4), i, d, wr);
      }
      function NC(t, n, i) {
        var l = se(t) ? G0 : Fp, d = arguments.length < 3;
        return l(t, Q(n, 4), i, d, ih);
      }
      function DC(t, n) {
        var i = se(t) ? fr : sh;
        return i(t, Kl(Q(n, 3)));
      }
      function OC(t) {
        var n = se(t) ? th : ky;
        return n(t);
      }
      function BC(t, n, i) {
        (i ? Zt(t, n, i) : n === r) ? n = 1 : n = ae(n);
        var l = se(t) ? iy : Ay;
        return l(t, n);
      }
      function RC(t) {
        var n = se(t) ? sy : xy;
        return n(t);
      }
      function PC(t) {
        if (t == null)
          return 0;
        if (ln(t))
          return Xl(t) ? Zi(t) : t.length;
        var n = Bt(t);
        return n == $t || n == ct ? t.size : Rc(t).length;
      }
      function FC(t, n, i) {
        var l = se(t) ? $c : Ly;
        return i && Zt(t, n, i) && (n = r), l(t, Q(n, 3));
      }
      var UC = ce(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Zt(t, n[0], n[1]) ? n = [] : i > 2 && Zt(n[0], n[1], n[2]) && (n = [n[0]]), wh(t, Vt(n, 1), []);
      }), jl = y$ || function() {
        return Ct.Date.now();
      };
      function WC(t, n) {
        if (typeof n != "function")
          throw new On(c);
        return t = ae(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function cm(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, jo(t, W, r, r, r, r, n);
      }
      function dm(t, n) {
        var i;
        if (typeof n != "function")
          throw new On(c);
        return t = ae(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var ld = ce(function(t, n, i) {
        var l = B;
        if (i.length) {
          var d = hr(i, os(ld));
          l |= k;
        }
        return jo(t, l, n, i, d);
      }), fm = ce(function(t, n, i) {
        var l = B | S;
        if (i.length) {
          var d = hr(i, os(fm));
          l |= k;
        }
        return jo(n, l, t, i, d);
      });
      function pm(t, n, i) {
        n = i ? r : n;
        var l = jo(t, T, r, r, r, r, r, n);
        return l.placeholder = pm.placeholder, l;
      }
      function hm(t, n, i) {
        n = i ? r : n;
        var l = jo(t, P, r, r, r, r, r, n);
        return l.placeholder = hm.placeholder, l;
      }
      function mm(t, n, i) {
        var l, d, h, _, $, V, M = 0, N = !1, F = !1, Y = !0;
        if (typeof t != "function")
          throw new On(c);
        n = Un(n) || 0, Ke(i) && (N = !!i.leading, F = "maxWait" in i, h = F ? pt(Un(i.maxWait) || 0, n) : h, Y = "trailing" in i ? !!i.trailing : Y);
        function J(rt) {
          var no = l, Qo = d;
          return l = d = r, M = rt, _ = t.apply(Qo, no), _;
        }
        function ee(rt) {
          return M = rt, $ = ha(fe, n), N ? J(rt) : _;
        }
        function le(rt) {
          var no = rt - V, Qo = rt - M, Nm = n - no;
          return F ? Ot(Nm, h - Qo) : Nm;
        }
        function te(rt) {
          var no = rt - V, Qo = rt - M;
          return V === r || no >= n || no < 0 || F && Qo >= h;
        }
        function fe() {
          var rt = jl();
          if (te(rt))
            return ve(rt);
          $ = ha(fe, le(rt));
        }
        function ve(rt) {
          return $ = r, Y && l ? J(rt) : (l = d = r, _);
        }
        function Cn() {
          $ !== r && Eh($), M = 0, l = V = d = $ = r;
        }
        function Kt() {
          return $ === r ? _ : ve(jl());
        }
        function Vn() {
          var rt = jl(), no = te(rt);
          if (l = arguments, d = this, V = rt, no) {
            if ($ === r)
              return ee(V);
            if (F)
              return Eh($), $ = ha(fe, n), J(V);
          }
          return $ === r && ($ = ha(fe, n)), _;
        }
        return Vn.cancel = Cn, Vn.flush = Kt, Vn;
      }
      var HC = ce(function(t, n) {
        return rh(t, 1, n);
      }), zC = ce(function(t, n, i) {
        return rh(t, Un(n) || 0, i);
      });
      function qC(t) {
        return jo(t, Me);
      }
      function Zl(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new On(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], h = i.cache;
          if (h.has(d))
            return h.get(d);
          var _ = t.apply(this, l);
          return i.cache = h.set(d, _) || h, _;
        };
        return i.cache = new (Zl.Cache || Go)(), i;
      }
      Zl.Cache = Go;
      function Kl(t) {
        if (typeof t != "function")
          throw new On(c);
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
      function GC(t) {
        return dm(2, t);
      }
      var YC = My(function(t, n) {
        n = n.length == 1 && se(n[0]) ? Ge(n[0], $n(Q())) : Ge(Vt(n, 1), $n(Q()));
        var i = n.length;
        return ce(function(l) {
          for (var d = -1, h = Ot(l.length, i); ++d < h; )
            l[d] = n[d].call(this, l[d]);
          return gn(t, this, l);
        });
      }), ud = ce(function(t, n) {
        var i = hr(n, os(ud));
        return jo(t, k, r, n, i);
      }), wm = ce(function(t, n) {
        var i = hr(n, os(wm));
        return jo(t, U, r, n, i);
      }), jC = Zo(function(t, n) {
        return jo(t, K, r, r, r, n);
      });
      function ZC(t, n) {
        if (typeof t != "function")
          throw new On(c);
        return n = n === r ? n : ae(n), ce(t, n);
      }
      function KC(t, n) {
        if (typeof t != "function")
          throw new On(c);
        return n = n == null ? 0 : pt(ae(n), 0), ce(function(i) {
          var l = i[n], d = gr(i, 0, n);
          return l && pr(d, l), gn(t, this, d);
        });
      }
      function JC(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new On(c);
        return Ke(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), mm(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function XC(t) {
        return cm(t, 1);
      }
      function QC(t, n) {
        return ud(Yc(n), t);
      }
      function eV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return se(t) ? t : [t];
      }
      function tV(t) {
        return Rn(t, D);
      }
      function nV(t, n) {
        return n = typeof n == "function" ? n : r, Rn(t, D, n);
      }
      function oV(t) {
        return Rn(t, y | D);
      }
      function rV(t, n) {
        return n = typeof n == "function" ? n : r, Rn(t, y | D, n);
      }
      function iV(t, n) {
        return n == null || oh(t, n, vt(n));
      }
      function to(t, n) {
        return t === n || t !== t && n !== n;
      }
      var sV = Wl(Dc), aV = Wl(function(t, n) {
        return t >= n;
      }), li = uh(function() {
        return arguments;
      }()) ? uh : function(t) {
        return et(t) && Ne.call(t, "callee") && !Zp.call(t, "callee");
      }, se = I.isArray, lV = Tp ? $n(Tp) : wy;
      function ln(t) {
        return t != null && Jl(t.length) && !Jo(t);
      }
      function ot(t) {
        return et(t) && ln(t);
      }
      function uV(t) {
        return t === !0 || t === !1 || et(t) && jt(t) == vn;
      }
      var $r = C$ || $d, cV = xp ? $n(xp) : vy;
      function dV(t) {
        return et(t) && t.nodeType === 1 && !ma(t);
      }
      function fV(t) {
        if (t == null)
          return !0;
        if (ln(t) && (se(t) || typeof t == "string" || typeof t.splice == "function" || $r(t) || rs(t) || li(t)))
          return !t.length;
        var n = Bt(t);
        if (n == $t || n == ct)
          return !t.size;
        if (pa(t))
          return !Rc(t).length;
        for (var i in t)
          if (Ne.call(t, i))
            return !1;
        return !0;
      }
      function pV(t, n) {
        return ca(t, n);
      }
      function hV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? ca(t, n, r, i) : !!l;
      }
      function cd(t) {
        if (!et(t))
          return !1;
        var n = jt(t);
        return n == Be || n == Ur || typeof t.message == "string" && typeof t.name == "string" && !ma(t);
      }
      function mV(t) {
        return typeof t == "number" && Jp(t);
      }
      function Jo(t) {
        if (!Ke(t))
          return !1;
        var n = jt(t);
        return n == fo || n == Re || n == on || n == Wr;
      }
      function vm(t) {
        return typeof t == "number" && t == ae(t);
      }
      function Jl(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= qe;
      }
      function Ke(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function et(t) {
        return t != null && typeof t == "object";
      }
      var _m = Lp ? $n(Lp) : gy;
      function wV(t, n) {
        return t === n || Bc(t, n, ed(n));
      }
      function vV(t, n, i) {
        return i = typeof i == "function" ? i : r, Bc(t, n, ed(n), i);
      }
      function _V(t) {
        return gm(t) && t != +t;
      }
      function gV(t) {
        if (nb(t))
          throw new ie(u);
        return ch(t);
      }
      function $V(t) {
        return t === null;
      }
      function yV(t) {
        return t == null;
      }
      function gm(t) {
        return typeof t == "number" || et(t) && jt(t) == ye;
      }
      function ma(t) {
        if (!et(t) || jt(t) != yt)
          return !1;
        var n = Vl(t);
        if (n === null)
          return !0;
        var i = Ne.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && $l.call(i) == v$;
      }
      var dd = Mp ? $n(Mp) : $y;
      function bV(t) {
        return vm(t) && t >= -qe && t <= qe;
      }
      var $m = Np ? $n(Np) : yy;
      function Xl(t) {
        return typeof t == "string" || !se(t) && et(t) && jt(t) == po;
      }
      function bn(t) {
        return typeof t == "symbol" || et(t) && jt(t) == dt;
      }
      var rs = Dp ? $n(Dp) : by;
      function CV(t) {
        return t === r;
      }
      function VV(t) {
        return et(t) && Bt(t) == zt;
      }
      function EV(t) {
        return et(t) && jt(t) == Hr;
      }
      var SV = Wl(Pc), IV = Wl(function(t, n) {
        return t <= n;
      });
      function ym(t) {
        if (!t)
          return [];
        if (ln(t))
          return Xl(t) ? Qn(t) : an(t);
        if (na && t[na])
          return i$(t[na]());
        var n = Bt(t), i = n == $t ? Sc : n == ct ? vl : is;
        return i(t);
      }
      function Xo(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Un(t), t === Xe || t === -Xe) {
          var n = t < 0 ? -1 : 1;
          return n * nn;
        }
        return t === t ? t : 0;
      }
      function ae(t) {
        var n = Xo(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function bm(t) {
        return t ? ri(ae(t), 0, Se) : 0;
      }
      function Un(t) {
        if (typeof t == "number")
          return t;
        if (bn(t))
          return Mo;
        if (Ke(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ke(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Up(t);
        var i = Zr.test(t);
        return i || Ri.test(t) ? W0(t.slice(2), i ? 2 : 8) : jr.test(t) ? Mo : +t;
      }
      function Cm(t) {
        return bo(t, un(t));
      }
      function kV(t) {
        return t ? ri(ae(t), -qe, qe) : t === 0 ? t : 0;
      }
      function Te(t) {
        return t == null ? "" : yn(t);
      }
      var AV = ts(function(t, n) {
        if (pa(n) || ln(n)) {
          bo(n, vt(n), t);
          return;
        }
        for (var i in n)
          Ne.call(n, i) && aa(t, i, n[i]);
      }), Vm = ts(function(t, n) {
        bo(n, un(n), t);
      }), Ql = ts(function(t, n, i, l) {
        bo(n, un(n), t, l);
      }), TV = ts(function(t, n, i, l) {
        bo(n, vt(n), t, l);
      }), xV = Zo(Lc);
      function LV(t, n) {
        var i = es(t);
        return n == null ? i : nh(i, n);
      }
      var MV = ce(function(t, n) {
        t = Pe(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Zt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var h = n[i], _ = un(h), $ = -1, V = _.length; ++$ < V; ) {
            var M = _[$], N = t[M];
            (N === r || to(N, Ji[M]) && !Ne.call(t, M)) && (t[M] = h[M]);
          }
        return t;
      }), NV = ce(function(t) {
        return t.push(r, Uh), gn(Em, r, t);
      });
      function DV(t, n) {
        return Bp(t, Q(n, 3), yo);
      }
      function OV(t, n) {
        return Bp(t, Q(n, 3), Nc);
      }
      function BV(t, n) {
        return t == null ? t : Mc(t, Q(n, 3), un);
      }
      function RV(t, n) {
        return t == null ? t : ah(t, Q(n, 3), un);
      }
      function PV(t, n) {
        return t && yo(t, Q(n, 3));
      }
      function FV(t, n) {
        return t && Nc(t, Q(n, 3));
      }
      function UV(t) {
        return t == null ? [] : Nl(t, vt(t));
      }
      function WV(t) {
        return t == null ? [] : Nl(t, un(t));
      }
      function fd(t, n, i) {
        var l = t == null ? r : ii(t, n);
        return l === r ? i : l;
      }
      function HV(t, n) {
        return t != null && zh(t, n, fy);
      }
      function pd(t, n) {
        return t != null && zh(t, n, py);
      }
      var zV = Oh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = yl.call(n)), t[n] = i;
      }, md(cn)), qV = Oh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = yl.call(n)), Ne.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, Q), GV = ce(ua);
      function vt(t) {
        return ln(t) ? eh(t) : Rc(t);
      }
      function un(t) {
        return ln(t) ? eh(t, !0) : Cy(t);
      }
      function YV(t, n) {
        var i = {};
        return n = Q(n, 3), yo(t, function(l, d, h) {
          Yo(i, n(l, d, h), l);
        }), i;
      }
      function jV(t, n) {
        var i = {};
        return n = Q(n, 3), yo(t, function(l, d, h) {
          Yo(i, d, n(l, d, h));
        }), i;
      }
      var ZV = ts(function(t, n, i) {
        Dl(t, n, i);
      }), Em = ts(function(t, n, i, l) {
        Dl(t, n, i, l);
      }), KV = Zo(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ge(n, function(h) {
          return h = _r(h, t), l || (l = h.length > 1), h;
        }), bo(t, Xc(t), i), l && (i = Rn(i, y | b | D, zy));
        for (var d = n.length; d--; )
          zc(i, n[d]);
        return i;
      });
      function JV(t, n) {
        return Sm(t, Kl(Q(n)));
      }
      var XV = Zo(function(t, n) {
        return t == null ? {} : Ey(t, n);
      });
      function Sm(t, n) {
        if (t == null)
          return {};
        var i = Ge(Xc(t), function(l) {
          return [l];
        });
        return n = Q(n), vh(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function QV(t, n, i) {
        n = _r(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[Co(n[l])];
          h === r && (l = d, h = i), t = Jo(h) ? h.call(t) : h;
        }
        return t;
      }
      function eE(t, n, i) {
        return t == null ? t : da(t, n, i);
      }
      function tE(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : da(t, n, i, l);
      }
      var Im = Ph(vt), km = Ph(un);
      function nE(t, n, i) {
        var l = se(t), d = l || $r(t) || rs(t);
        if (n = Q(n, 4), i == null) {
          var h = t && t.constructor;
          d ? i = l ? new h() : [] : Ke(t) ? i = Jo(h) ? es(Vl(t)) : {} : i = {};
        }
        return (d ? Dn : yo)(t, function(_, $, V) {
          return n(i, _, $, V);
        }), i;
      }
      function oE(t, n) {
        return t == null ? !0 : zc(t, n);
      }
      function rE(t, n, i) {
        return t == null ? t : bh(t, n, Yc(i));
      }
      function iE(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : bh(t, n, Yc(i), l);
      }
      function is(t) {
        return t == null ? [] : Ec(t, vt(t));
      }
      function sE(t) {
        return t == null ? [] : Ec(t, un(t));
      }
      function aE(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Un(i), i = i === i ? i : 0), n !== r && (n = Un(n), n = n === n ? n : 0), ri(Un(t), n, i);
      }
      function lE(t, n, i) {
        return n = Xo(n), i === r ? (i = n, n = 0) : i = Xo(i), t = Un(t), hy(t, n, i);
      }
      function uE(t, n, i) {
        if (i && typeof i != "boolean" && Zt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Xo(t), n === r ? (n = t, t = 0) : n = Xo(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Xp();
          return Ot(t + d * (n - t + U0("1e-" + ((d + "").length - 1))), n);
        }
        return Uc(t, n);
      }
      var cE = ns(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Am(n) : n);
      });
      function Am(t) {
        return hd(Te(t).toLowerCase());
      }
      function Tm(t) {
        return t = Te(t), t && t.replace(Fi, e$).replace(x0, "");
      }
      function dE(t, n, i) {
        t = Te(t), n = yn(n);
        var l = t.length;
        i = i === r ? l : ri(ae(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function fE(t) {
        return t = Te(t), t && Fo.test(t) ? t.replace(lr, t$) : t;
      }
      function pE(t) {
        return t = Te(t), t && Yr.test(t) ? t.replace(wo, "\\$&") : t;
      }
      var hE = ns(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), mE = ns(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), wE = Mh("toLowerCase");
      function vE(t, n, i) {
        t = Te(t), n = ae(n);
        var l = n ? Zi(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Ul(kl(d), i) + t + Ul(Il(d), i);
      }
      function _E(t, n, i) {
        t = Te(t), n = ae(n);
        var l = n ? Zi(t) : 0;
        return n && l < n ? t + Ul(n - l, i) : t;
      }
      function gE(t, n, i) {
        t = Te(t), n = ae(n);
        var l = n ? Zi(t) : 0;
        return n && l < n ? Ul(n - l, i) + t : t;
      }
      function $E(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), I$(Te(t).replace(vo, ""), n || 0);
      }
      function yE(t, n, i) {
        return (i ? Zt(t, n, i) : n === r) ? n = 1 : n = ae(n), Wc(Te(t), n);
      }
      function bE() {
        var t = arguments, n = Te(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var CE = ns(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function VE(t, n, i) {
        return i && typeof i != "number" && Zt(t, n, i) && (n = i = r), i = i === r ? Se : i >>> 0, i ? (t = Te(t), t && (typeof n == "string" || n != null && !dd(n)) && (n = yn(n), !n && ji(t)) ? gr(Qn(t), 0, i) : t.split(n, i)) : [];
      }
      var EE = ns(function(t, n, i) {
        return t + (i ? " " : "") + hd(n);
      });
      function SE(t, n, i) {
        return t = Te(t), i = i == null ? 0 : ri(ae(i), 0, t.length), n = yn(n), t.slice(i, i + n.length) == n;
      }
      function IE(t, n, i) {
        var l = p.templateSettings;
        i && Zt(t, n, i) && (n = r), t = Te(t), n = Ql({}, n, l, Fh);
        var d = Ql({}, n.imports, l.imports, Fh), h = vt(d), _ = Ec(d, h), $, V, M = 0, N = n.interpolate || Dt, F = "__p += '", Y = Ic(
          (n.escape || Dt).source + "|" + N.source + "|" + (N === Uo ? go : Dt).source + "|" + (n.evaluate || Dt).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (Ne.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++O0 + "]") + `
`;
        t.replace(Y, function(te, fe, ve, Cn, Kt, Vn) {
          return ve || (ve = Cn), F += t.slice(M, Vn).replace(Kr, n$), fe && ($ = !0, F += `' +
__e(` + fe + `) +
'`), Kt && (V = !0, F += `';
` + Kt + `;
__p += '`), ve && (F += `' +
((__t = (` + ve + `)) == null ? '' : __t) +
'`), M = Vn + te.length, te;
        }), F += `';
`;
        var ee = Ne.call(n, "variable") && n.variable;
        if (!ee)
          F = `with (obj) {
` + F + `
}
`;
        else if (ge.test(ee))
          throw new ie(f);
        F = (V ? F.replace(ar, "") : F).replace(zr, "$1").replace(qr, "$1;"), F = "function(" + (ee || "obj") + `) {
` + (ee ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var le = Lm(function() {
          return Ie(h, J + "return " + F).apply(r, _);
        });
        if (le.source = F, cd(le))
          throw le;
        return le;
      }
      function kE(t) {
        return Te(t).toLowerCase();
      }
      function AE(t) {
        return Te(t).toUpperCase();
      }
      function TE(t, n, i) {
        if (t = Te(t), t && (i || n === r))
          return Up(t);
        if (!t || !(n = yn(n)))
          return t;
        var l = Qn(t), d = Qn(n), h = Wp(l, d), _ = Hp(l, d) + 1;
        return gr(l, h, _).join("");
      }
      function xE(t, n, i) {
        if (t = Te(t), t && (i || n === r))
          return t.slice(0, qp(t) + 1);
        if (!t || !(n = yn(n)))
          return t;
        var l = Qn(t), d = Hp(l, Qn(n)) + 1;
        return gr(l, 0, d).join("");
      }
      function LE(t, n, i) {
        if (t = Te(t), t && (i || n === r))
          return t.replace(vo, "");
        if (!t || !(n = yn(n)))
          return t;
        var l = Qn(t), d = Wp(l, Qn(n));
        return gr(l, d).join("");
      }
      function ME(t, n) {
        var i = pe, l = Ae;
        if (Ke(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? ae(n.length) : i, l = "omission" in n ? yn(n.omission) : l;
        }
        t = Te(t);
        var h = t.length;
        if (ji(t)) {
          var _ = Qn(t);
          h = _.length;
        }
        if (i >= h)
          return t;
        var $ = i - Zi(l);
        if ($ < 1)
          return l;
        var V = _ ? gr(_, 0, $).join("") : t.slice(0, $);
        if (d === r)
          return V + l;
        if (_ && ($ += V.length - $), dd(d)) {
          if (t.slice($).search(d)) {
            var M, N = V;
            for (d.global || (d = Ic(d.source, Te(Wo.exec(d)) + "g")), d.lastIndex = 0; M = d.exec(N); )
              var F = M.index;
            V = V.slice(0, F === r ? $ : F);
          }
        } else if (t.indexOf(yn(d), $) != $) {
          var Y = V.lastIndexOf(d);
          Y > -1 && (V = V.slice(0, Y));
        }
        return V + l;
      }
      function NE(t) {
        return t = Te(t), t && Po.test(t) ? t.replace(Ro, u$) : t;
      }
      var DE = ns(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), hd = Mh("toUpperCase");
      function xm(t, n, i) {
        return t = Te(t), n = i ? r : n, n === r ? r$(t) ? f$(t) : Z0(t) : t.match(n) || [];
      }
      var Lm = ce(function(t, n) {
        try {
          return gn(t, r, n);
        } catch (i) {
          return cd(i) ? i : new ie(i);
        }
      }), OE = Zo(function(t, n) {
        return Dn(n, function(i) {
          i = Co(i), Yo(t, i, ld(t[i], t));
        }), t;
      });
      function BE(t) {
        var n = t == null ? 0 : t.length, i = Q();
        return t = n ? Ge(t, function(l) {
          if (typeof l[1] != "function")
            throw new On(c);
          return [i(l[0]), l[1]];
        }) : [], ce(function(l) {
          for (var d = -1; ++d < n; ) {
            var h = t[d];
            if (gn(h[0], this, l))
              return gn(h[1], this, l);
          }
        });
      }
      function RE(t) {
        return uy(Rn(t, y));
      }
      function md(t) {
        return function() {
          return t;
        };
      }
      function PE(t, n) {
        return t == null || t !== t ? n : t;
      }
      var FE = Dh(), UE = Dh(!0);
      function cn(t) {
        return t;
      }
      function wd(t) {
        return dh(typeof t == "function" ? t : Rn(t, y));
      }
      function WE(t) {
        return ph(Rn(t, y));
      }
      function HE(t, n) {
        return hh(t, Rn(n, y));
      }
      var zE = ce(function(t, n) {
        return function(i) {
          return ua(i, t, n);
        };
      }), qE = ce(function(t, n) {
        return function(i) {
          return ua(t, i, n);
        };
      });
      function vd(t, n, i) {
        var l = vt(n), d = Nl(n, l);
        i == null && !(Ke(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Nl(n, vt(n)));
        var h = !(Ke(i) && "chain" in i) || !!i.chain, _ = Jo(t);
        return Dn(d, function($) {
          var V = n[$];
          t[$] = V, _ && (t.prototype[$] = function() {
            var M = this.__chain__;
            if (h || M) {
              var N = t(this.__wrapped__), F = N.__actions__ = an(this.__actions__);
              return F.push({ func: V, args: arguments, thisArg: t }), N.__chain__ = M, N;
            }
            return V.apply(t, pr([this.value()], arguments));
          });
        }), t;
      }
      function GE() {
        return Ct._ === this && (Ct._ = _$), this;
      }
      function _d() {
      }
      function YE(t) {
        return t = ae(t), ce(function(n) {
          return mh(n, t);
        });
      }
      var jE = Zc(Ge), ZE = Zc(Op), KE = Zc($c);
      function Mm(t) {
        return nd(t) ? yc(Co(t)) : Sy(t);
      }
      function JE(t) {
        return function(n) {
          return t == null ? r : ii(t, n);
        };
      }
      var XE = Bh(), QE = Bh(!0);
      function gd() {
        return [];
      }
      function $d() {
        return !1;
      }
      function eS() {
        return {};
      }
      function tS() {
        return "";
      }
      function nS() {
        return !0;
      }
      function oS(t, n) {
        if (t = ae(t), t < 1 || t > qe)
          return [];
        var i = Se, l = Ot(t, Se);
        n = Q(n), t -= Se;
        for (var d = Vc(l, n); ++i < t; )
          n(i);
        return d;
      }
      function rS(t) {
        return se(t) ? Ge(t, Co) : bn(t) ? [t] : an(Qh(Te(t)));
      }
      function iS(t) {
        var n = ++w$;
        return Te(t) + n;
      }
      var sS = Fl(function(t, n) {
        return t + n;
      }, 0), aS = Kc("ceil"), lS = Fl(function(t, n) {
        return t / n;
      }, 1), uS = Kc("floor");
      function cS(t) {
        return t && t.length ? Ml(t, cn, Dc) : r;
      }
      function dS(t, n) {
        return t && t.length ? Ml(t, Q(n, 2), Dc) : r;
      }
      function fS(t) {
        return Pp(t, cn);
      }
      function pS(t, n) {
        return Pp(t, Q(n, 2));
      }
      function hS(t) {
        return t && t.length ? Ml(t, cn, Pc) : r;
      }
      function mS(t, n) {
        return t && t.length ? Ml(t, Q(n, 2), Pc) : r;
      }
      var wS = Fl(function(t, n) {
        return t * n;
      }, 1), vS = Kc("round"), _S = Fl(function(t, n) {
        return t - n;
      }, 0);
      function gS(t) {
        return t && t.length ? Cc(t, cn) : 0;
      }
      function $S(t, n) {
        return t && t.length ? Cc(t, Q(n, 2)) : 0;
      }
      return p.after = WC, p.ary = cm, p.assign = AV, p.assignIn = Vm, p.assignInWith = Ql, p.assignWith = TV, p.at = xV, p.before = dm, p.bind = ld, p.bindAll = OE, p.bindKey = fm, p.castArray = eV, p.chain = am, p.chunk = ub, p.compact = cb, p.concat = db, p.cond = BE, p.conforms = RE, p.constant = md, p.countBy = gC, p.create = LV, p.curry = pm, p.curryRight = hm, p.debounce = mm, p.defaults = MV, p.defaultsDeep = NV, p.defer = HC, p.delay = zC, p.difference = fb, p.differenceBy = pb, p.differenceWith = hb, p.drop = mb, p.dropRight = wb, p.dropRightWhile = vb, p.dropWhile = _b, p.fill = gb, p.filter = yC, p.flatMap = VC, p.flatMapDeep = EC, p.flatMapDepth = SC, p.flatten = om, p.flattenDeep = $b, p.flattenDepth = yb, p.flip = qC, p.flow = FE, p.flowRight = UE, p.fromPairs = bb, p.functions = UV, p.functionsIn = WV, p.groupBy = IC, p.initial = Vb, p.intersection = Eb, p.intersectionBy = Sb, p.intersectionWith = Ib, p.invert = zV, p.invertBy = qV, p.invokeMap = AC, p.iteratee = wd, p.keyBy = TC, p.keys = vt, p.keysIn = un, p.map = Yl, p.mapKeys = YV, p.mapValues = jV, p.matches = WE, p.matchesProperty = HE, p.memoize = Zl, p.merge = ZV, p.mergeWith = Em, p.method = zE, p.methodOf = qE, p.mixin = vd, p.negate = Kl, p.nthArg = YE, p.omit = KV, p.omitBy = JV, p.once = GC, p.orderBy = xC, p.over = jE, p.overArgs = YC, p.overEvery = ZE, p.overSome = KE, p.partial = ud, p.partialRight = wm, p.partition = LC, p.pick = XV, p.pickBy = Sm, p.property = Mm, p.propertyOf = JE, p.pull = xb, p.pullAll = im, p.pullAllBy = Lb, p.pullAllWith = Mb, p.pullAt = Nb, p.range = XE, p.rangeRight = QE, p.rearg = jC, p.reject = DC, p.remove = Db, p.rest = ZC, p.reverse = sd, p.sampleSize = BC, p.set = eE, p.setWith = tE, p.shuffle = RC, p.slice = Ob, p.sortBy = UC, p.sortedUniq = Hb, p.sortedUniqBy = zb, p.split = VE, p.spread = KC, p.tail = qb, p.take = Gb, p.takeRight = Yb, p.takeRightWhile = jb, p.takeWhile = Zb, p.tap = cC, p.throttle = JC, p.thru = Gl, p.toArray = ym, p.toPairs = Im, p.toPairsIn = km, p.toPath = rS, p.toPlainObject = Cm, p.transform = nE, p.unary = XC, p.union = Kb, p.unionBy = Jb, p.unionWith = Xb, p.uniq = Qb, p.uniqBy = eC, p.uniqWith = tC, p.unset = oE, p.unzip = ad, p.unzipWith = sm, p.update = rE, p.updateWith = iE, p.values = is, p.valuesIn = sE, p.without = nC, p.words = xm, p.wrap = QC, p.xor = oC, p.xorBy = rC, p.xorWith = iC, p.zip = sC, p.zipObject = aC, p.zipObjectDeep = lC, p.zipWith = uC, p.entries = Im, p.entriesIn = km, p.extend = Vm, p.extendWith = Ql, vd(p, p), p.add = sS, p.attempt = Lm, p.camelCase = cE, p.capitalize = Am, p.ceil = aS, p.clamp = aE, p.clone = tV, p.cloneDeep = oV, p.cloneDeepWith = rV, p.cloneWith = nV, p.conformsTo = iV, p.deburr = Tm, p.defaultTo = PE, p.divide = lS, p.endsWith = dE, p.eq = to, p.escape = fE, p.escapeRegExp = pE, p.every = $C, p.find = bC, p.findIndex = tm, p.findKey = DV, p.findLast = CC, p.findLastIndex = nm, p.findLastKey = OV, p.floor = uS, p.forEach = lm, p.forEachRight = um, p.forIn = BV, p.forInRight = RV, p.forOwn = PV, p.forOwnRight = FV, p.get = fd, p.gt = sV, p.gte = aV, p.has = HV, p.hasIn = pd, p.head = rm, p.identity = cn, p.includes = kC, p.indexOf = Cb, p.inRange = lE, p.invoke = GV, p.isArguments = li, p.isArray = se, p.isArrayBuffer = lV, p.isArrayLike = ln, p.isArrayLikeObject = ot, p.isBoolean = uV, p.isBuffer = $r, p.isDate = cV, p.isElement = dV, p.isEmpty = fV, p.isEqual = pV, p.isEqualWith = hV, p.isError = cd, p.isFinite = mV, p.isFunction = Jo, p.isInteger = vm, p.isLength = Jl, p.isMap = _m, p.isMatch = wV, p.isMatchWith = vV, p.isNaN = _V, p.isNative = gV, p.isNil = yV, p.isNull = $V, p.isNumber = gm, p.isObject = Ke, p.isObjectLike = et, p.isPlainObject = ma, p.isRegExp = dd, p.isSafeInteger = bV, p.isSet = $m, p.isString = Xl, p.isSymbol = bn, p.isTypedArray = rs, p.isUndefined = CV, p.isWeakMap = VV, p.isWeakSet = EV, p.join = kb, p.kebabCase = hE, p.last = Fn, p.lastIndexOf = Ab, p.lowerCase = mE, p.lowerFirst = wE, p.lt = SV, p.lte = IV, p.max = cS, p.maxBy = dS, p.mean = fS, p.meanBy = pS, p.min = hS, p.minBy = mS, p.stubArray = gd, p.stubFalse = $d, p.stubObject = eS, p.stubString = tS, p.stubTrue = nS, p.multiply = wS, p.nth = Tb, p.noConflict = GE, p.noop = _d, p.now = jl, p.pad = vE, p.padEnd = _E, p.padStart = gE, p.parseInt = $E, p.random = uE, p.reduce = MC, p.reduceRight = NC, p.repeat = yE, p.replace = bE, p.result = QV, p.round = vS, p.runInContext = C, p.sample = OC, p.size = PC, p.snakeCase = CE, p.some = FC, p.sortedIndex = Bb, p.sortedIndexBy = Rb, p.sortedIndexOf = Pb, p.sortedLastIndex = Fb, p.sortedLastIndexBy = Ub, p.sortedLastIndexOf = Wb, p.startCase = EE, p.startsWith = SE, p.subtract = _S, p.sum = gS, p.sumBy = $S, p.template = IE, p.times = oS, p.toFinite = Xo, p.toInteger = ae, p.toLength = bm, p.toLower = kE, p.toNumber = Un, p.toSafeInteger = kV, p.toString = Te, p.toUpper = AE, p.trim = TE, p.trimEnd = xE, p.trimStart = LE, p.truncate = ME, p.unescape = NE, p.uniqueId = iS, p.upperCase = DE, p.upperFirst = hd, p.each = lm, p.eachRight = um, p.first = rm, vd(p, function() {
        var t = {};
        return yo(p, function(n, i) {
          Ne.call(p.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), p.VERSION = s, Dn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        p[t].placeholder = p;
      }), Dn(["drop", "take"], function(t, n) {
        me.prototype[t] = function(i) {
          i = i === r ? 1 : pt(ae(i), 0);
          var l = this.__filtered__ && !n ? new me(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Ot(i, l.__takeCount__) : l.__views__.push({
            size: Ot(i, Se),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, me.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Dn(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == ze || i == Ze;
        me.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: Q(d, 3),
            type: i
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), Dn(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        me.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Dn(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        me.prototype[t] = function() {
          return this.__filtered__ ? new me(this) : this[i](1);
        };
      }), me.prototype.compact = function() {
        return this.filter(cn);
      }, me.prototype.find = function(t) {
        return this.filter(t).head();
      }, me.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, me.prototype.invokeMap = ce(function(t, n) {
        return typeof t == "function" ? new me(this) : this.map(function(i) {
          return ua(i, t, n);
        });
      }), me.prototype.reject = function(t) {
        return this.filter(Kl(Q(t)));
      }, me.prototype.slice = function(t, n) {
        t = ae(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new me(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = ae(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, me.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, me.prototype.toArray = function() {
        return this.take(Se);
      }, yo(me.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = p[l ? "take" + (n == "last" ? "Right" : "") : n], h = l || /^find/.test(n);
        !d || (p.prototype[n] = function() {
          var _ = this.__wrapped__, $ = l ? [1] : arguments, V = _ instanceof me, M = $[0], N = V || se(_), F = function(fe) {
            var ve = d.apply(p, pr([fe], $));
            return l && Y ? ve[0] : ve;
          };
          N && i && typeof M == "function" && M.length != 1 && (V = N = !1);
          var Y = this.__chain__, J = !!this.__actions__.length, ee = h && !Y, le = V && !J;
          if (!h && N) {
            _ = le ? _ : new me(this);
            var te = t.apply(_, $);
            return te.__actions__.push({ func: Gl, args: [F], thisArg: r }), new Bn(te, Y);
          }
          return ee && le ? t.apply(this, $) : (te = this.thru(F), ee ? l ? te.value()[0] : te.value() : te);
        });
      }), Dn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = _l[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        p.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var h = this.value();
            return n.apply(se(h) ? h : [], d);
          }
          return this[i](function(_) {
            return n.apply(se(_) ? _ : [], d);
          });
        };
      }), yo(me.prototype, function(t, n) {
        var i = p[n];
        if (i) {
          var l = i.name + "";
          Ne.call(Qi, l) || (Qi[l] = []), Qi[l].push({ name: n, func: i });
        }
      }), Qi[Pl(r, S).name] = [{
        name: "wrapper",
        func: r
      }], me.prototype.clone = N$, me.prototype.reverse = D$, me.prototype.value = O$, p.prototype.at = dC, p.prototype.chain = fC, p.prototype.commit = pC, p.prototype.next = hC, p.prototype.plant = wC, p.prototype.reverse = vC, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = _C, p.prototype.first = p.prototype.head, na && (p.prototype[na] = mC), p;
    }, Ki = p$();
    ei ? ((ei.exports = Ki)._ = Ki, wc._ = Ki) : Ct._ = Ki;
  }).call(wa);
})(Oe, Oe.exports);
const FI = "/alarms?_s=", Ku = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, UI = async (e, o) => {
  try {
    return (await Lt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ku
    )).status === 204;
  } catch {
    return !1;
  }
}, Ig = async (e, o) => {
  try {
    return (await Lt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ku
    )).status === 204;
  } catch {
    return !1;
  }
}, WI = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await sr.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ku
    )).status == 204;
  } catch {
    return !1;
  }
}, HI = async () => {
  try {
    const e = `${FI}isSituation==true&limit=0`, o = await sr(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, zI = async (e) => {
  try {
    const o = e.join(",id=="), r = await sr(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, kg = async (e) => {
  try {
    const o = await sr(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, qI = async (e) => {
  try {
    const o = await sr(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, GI = async () => {
  try {
    const e = await sr("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Oe.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, YI = async (e, o, r) => {
  try {
    return (await sr.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ku
    )).status == 204;
  } catch {
    return !1;
  }
}, jI = async (e, o) => {
  try {
    return (await sr.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, ZI = async () => {
  try {
    const e = await sr.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, KI = window.Pinia.defineStore, co = KI("situationsStore", {
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
      const e = await GI();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await HI();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = Oe.exports.groupBy(o, "status"), a = [
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
        const s = await kg(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await zI(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = Oe.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await qI(s);
          a && (r[s] = Oe.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await ZI();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), JI = window.Vue.openBlock, XI = window.Vue.createElementBlock, QI = window.Vue.createElementVNode;
var ek = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tk = {}, nk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ok = /* @__PURE__ */ QI("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), rk = [
  ok
];
function ik(e, o) {
  return JI(), XI("svg", nk, rk);
}
var Ds = /* @__PURE__ */ ek(tk, [["render", ik]]);
var sk = Object.defineProperty, rw = Object.getOwnPropertySymbols, ak = Object.prototype.hasOwnProperty, lk = Object.prototype.propertyIsEnumerable, iw = (e, o, r) => o in e ? sk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, sw = (e, o) => {
  for (var r in o || (o = {}))
    ak.call(o, r) && iw(e, r, o[r]);
  if (rw)
    for (var r of rw(o))
      lk.call(o, r) && iw(e, r, o[r]);
  return e;
};
const uk = window.Vue.defineComponent, ck = window.Vue.toRaw, Od = window.Vue.h;
var dk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fk = {
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
}, pk = uk({
  props: fk,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = ck(this.icon);
    return this.$slots.default ? Od("span", { class: "feather-icon-container" }, [
      Od(this.$slots.default()[0], sw({
        class: o
      }, r))
    ]) : Od(s, sw({
      class: o
    }, r));
  }
});
var X = /* @__PURE__ */ dk(pk, [["__scopeId", "data-v-52cbf270"]]);
const hk = window.Vue.openBlock, mk = window.Vue.createElementBlock, wk = window.Vue.createElementVNode;
var vk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _k = {}, gk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $k = /* @__PURE__ */ wk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), yk = [
  $k
];
function bk(e, o) {
  return hk(), mk("svg", gk, yk);
}
var Ag = /* @__PURE__ */ vk(_k, [["render", bk]]);
const kt = {
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
function To(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ue(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function mt(e) {
  Ue(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ck(e, o) {
  Ue(2, arguments);
  var r = mt(e), s = To(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function Vk(e, o) {
  Ue(2, arguments);
  var r = mt(e).getTime(), s = To(o);
  return new Date(r + s);
}
var Ek = {};
function Rs() {
  return Ek;
}
function aw(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = Rs(), y = To((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = mt(e), D = b.getDay(), O = (D < y ? 7 : 0) + D - y;
  return b.setDate(b.getDate() - O), b.setHours(0, 0, 0, 0), b;
}
function Df(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function lw(e) {
  Ue(1, arguments);
  var o = mt(e);
  return o.setHours(0, 0, 0, 0), o;
}
function Sk(e, o) {
  Ue(2, arguments);
  var r = mt(e), s = mt(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Tg(e, o) {
  Ue(2, arguments);
  var r = lw(e), s = lw(o);
  return r.getTime() === s.getTime();
}
function Ik(e) {
  return Ue(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function kk(e) {
  if (Ue(1, arguments), !Ik(e) && typeof e != "number")
    return !1;
  var o = mt(e);
  return !isNaN(Number(o));
}
function Ak(e, o) {
  Ue(2, arguments);
  var r = To(o);
  return Vk(e, -r);
}
var Tk = 864e5;
function xk(e) {
  Ue(1, arguments);
  var o = mt(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / Tk) + 1;
}
function Nu(e) {
  Ue(1, arguments);
  var o = 1, r = mt(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function xg(e) {
  Ue(1, arguments);
  var o = mt(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Nu(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Nu(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function Lk(e) {
  Ue(1, arguments);
  var o = xg(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Nu(r);
  return s;
}
var Mk = 6048e5;
function Nk(e) {
  Ue(1, arguments);
  var o = mt(e), r = Nu(o).getTime() - Lk(o).getTime();
  return Math.round(r / Mk) + 1;
}
function Du(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = Rs(), y = To((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = mt(e), D = b.getUTCDay(), O = (D < y ? 7 : 0) + D - y;
  return b.setUTCDate(b.getUTCDate() - O), b.setUTCHours(0, 0, 0, 0), b;
}
function Lg(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = mt(e), y = g.getUTCFullYear(), b = Rs(), D = To((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = b.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(D >= 1 && D <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = new Date(0);
  O.setUTCFullYear(y + 1, 0, D), O.setUTCHours(0, 0, 0, 0);
  var R = Du(O, o), B = new Date(0);
  B.setUTCFullYear(y, 0, D), B.setUTCHours(0, 0, 0, 0);
  var S = Du(B, o);
  return g.getTime() >= R.getTime() ? y + 1 : g.getTime() >= S.getTime() ? y : y - 1;
}
function Dk(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = Rs(), y = To((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = Lg(e, o), D = new Date(0);
  D.setUTCFullYear(b, 0, y), D.setUTCHours(0, 0, 0, 0);
  var O = Du(D, o);
  return O;
}
var Ok = 6048e5;
function Bk(e, o) {
  Ue(1, arguments);
  var r = mt(e), s = Du(r, o).getTime() - Dk(r, o).getTime();
  return Math.round(s / Ok) + 1;
}
function De(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var Rk = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return De(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : De(r + 1, 2);
  },
  d: function(e, o) {
    return De(e.getUTCDate(), o.length);
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
    return De(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return De(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return De(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return De(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return De(a, o.length);
  }
};
const yr = Rk;
var ls = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Pk = {
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
    return yr.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = Lg(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return De(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : De(u, o.length);
  },
  R: function(e, o) {
    var r = xg(e);
    return De(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return De(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return De(s, 2);
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
        return De(s, 2);
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
        return yr.M(e, o);
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
        return De(s + 1, 2);
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
    var a = Bk(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : De(a, o.length);
  },
  I: function(e, o, r) {
    var s = Nk(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : De(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : yr.d(e, o);
  },
  D: function(e, o, r) {
    var s = xk(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : De(s, o.length);
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
        return De(u, 2);
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
        return De(u, o.length);
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
        return De(a, o.length);
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
    switch (s === 12 ? a = ls.noon : s === 0 ? a = ls.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = ls.evening : s >= 12 ? a = ls.afternoon : s >= 4 ? a = ls.morning : a = ls.night, o) {
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
    return yr.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : yr.H(e, o);
  },
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : De(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : De(s, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : yr.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : yr.s(e, o);
  },
  S: function(e, o) {
    return yr.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return cw(u);
      case "XXXX":
      case "XX":
        return Ci(u);
      case "XXXXX":
      case "XXX":
      default:
        return Ci(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return cw(u);
      case "xxxx":
      case "xx":
        return Ci(u);
      case "xxxxx":
      case "xxx":
      default:
        return Ci(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + uw(u, ":");
      case "OOOO":
      default:
        return "GMT" + Ci(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + uw(u, ":");
      case "zzzz":
      default:
        return "GMT" + Ci(u, ":");
    }
  },
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return De(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return De(u, o.length);
  }
};
function uw(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + De(u, 2);
}
function cw(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + De(Math.abs(e) / 60, 2);
  }
  return Ci(e, o);
}
function Ci(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = De(Math.floor(a / 60), 2), c = De(a % 60, 2);
  return s + u + r + c;
}
const Fk = Pk;
var dw = function(e, o) {
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
}, Mg = function(e, o) {
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
}, Uk = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return dw(e, o);
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
  return u.replace("{{date}}", dw(s, o)).replace("{{time}}", Mg(a, o));
}, Wk = {
  p: Mg,
  P: Uk
};
const Hk = Wk;
var zk = ["D", "DD"], qk = ["YY", "YYYY"];
function Gk(e) {
  return zk.indexOf(e) !== -1;
}
function Yk(e) {
  return qk.indexOf(e) !== -1;
}
function fw(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var jk = {
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
}, Zk = function(e, o, r) {
  var s, a = jk[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const Kk = Zk;
function Bd(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var Jk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Xk = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Qk = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eA = {
  date: Bd({
    formats: Jk,
    defaultWidth: "full"
  }),
  time: Bd({
    formats: Xk,
    defaultWidth: "full"
  }),
  dateTime: Bd({
    formats: Qk,
    defaultWidth: "full"
  })
};
const tA = eA;
var nA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, oA = function(e, o, r, s) {
  return nA[e];
};
const rA = oA;
function va(e) {
  return function(o, r) {
    var s = r != null && r.context ? String(r.context) : "standalone", a;
    if (s === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, m = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[m] || e.values[f];
    }
    var v = e.argumentCallback ? e.argumentCallback(o) : o;
    return a[v];
  };
}
var iA = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, sA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, aA = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, lA = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, uA = {
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
}, cA = {
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
}, dA = function(e, o) {
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
}, fA = {
  ordinalNumber: dA,
  era: va({
    values: iA,
    defaultWidth: "wide"
  }),
  quarter: va({
    values: sA,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: va({
    values: aA,
    defaultWidth: "wide"
  }),
  day: va({
    values: lA,
    defaultWidth: "wide"
  }),
  dayPeriod: va({
    values: uA,
    defaultWidth: "wide",
    formattingValues: cA,
    defaultFormattingWidth: "wide"
  })
};
const pA = fA;
function _a(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? mA(f, function(y) {
      return y.test(c);
    }) : hA(f, function(y) {
      return y.test(c);
    }), v;
    v = e.valueCallback ? e.valueCallback(m) : m, v = r.valueCallback ? r.valueCallback(v) : v;
    var g = o.slice(c.length);
    return {
      value: v,
      rest: g
    };
  };
}
function hA(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function mA(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function wA(e) {
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
var vA = /^(\d+)(th|st|nd|rd)?/i, _A = /\d+/i, gA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $A = {
  any: [/^b/i, /^(a|c)/i]
}, yA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, bA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, CA = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, VA = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, EA = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, SA = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, IA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, kA = {
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
}, AA = {
  ordinalNumber: wA({
    matchPattern: vA,
    parsePattern: _A,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: _a({
    matchPatterns: gA,
    defaultMatchWidth: "wide",
    parsePatterns: $A,
    defaultParseWidth: "any"
  }),
  quarter: _a({
    matchPatterns: yA,
    defaultMatchWidth: "wide",
    parsePatterns: bA,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: _a({
    matchPatterns: CA,
    defaultMatchWidth: "wide",
    parsePatterns: VA,
    defaultParseWidth: "any"
  }),
  day: _a({
    matchPatterns: EA,
    defaultMatchWidth: "wide",
    parsePatterns: SA,
    defaultParseWidth: "any"
  }),
  dayPeriod: _a({
    matchPatterns: IA,
    defaultMatchWidth: "any",
    parsePatterns: kA,
    defaultParseWidth: "any"
  })
};
const TA = AA;
var xA = {
  code: "en-US",
  formatDistance: Kk,
  formatLong: tA,
  formatRelative: rA,
  localize: pA,
  match: TA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ng = xA;
var LA = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, MA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, NA = /^'([^]*?)'?$/, DA = /''/g, OA = /[a-zA-Z]/;
function BA(e, o, r) {
  var s, a, u, c, f, m, v, g, y, b, D, O, R, B, S, A, T, P;
  Ue(2, arguments);
  var k = String(o), U = Rs(), W = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : U.locale) !== null && s !== void 0 ? s : Ng, K = To((u = (c = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (v = r.locale) === null || v === void 0 || (g = v.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : U.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = U.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(K >= 1 && K <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Me = To((D = (O = (R = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (S = r.locale) === null || S === void 0 || (A = S.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && R !== void 0 ? R : U.weekStartsOn) !== null && O !== void 0 ? O : (T = U.locale) === null || T === void 0 || (P = T.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && D !== void 0 ? D : 0);
  if (!(Me >= 0 && Me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!W.localize)
    throw new RangeError("locale must contain localize property");
  if (!W.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var pe = mt(e);
  if (!kk(pe))
    throw new RangeError("Invalid time value");
  var Ae = Df(pe), Ee = Ak(pe, Ae), We = {
    firstWeekContainsDate: K,
    weekStartsOn: Me,
    locale: W,
    _originalDate: pe
  }, ze = k.match(MA).map(function(_e) {
    var Ze = _e[0];
    if (Ze === "p" || Ze === "P") {
      var Xe = Hk[Ze];
      return Xe(_e, W.formatLong);
    }
    return _e;
  }).join("").match(LA).map(function(_e) {
    if (_e === "''")
      return "'";
    var Ze = _e[0];
    if (Ze === "'")
      return RA(_e);
    var Xe = Fk[Ze];
    if (Xe)
      return !(r != null && r.useAdditionalWeekYearTokens) && Yk(_e) && fw(_e, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && Gk(_e) && fw(_e, o, String(e)), Xe(Ee, _e, W.localize, We);
    if (Ze.match(OA))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ze + "`");
    return _e;
  }).join("");
  return ze;
}
function RA(e) {
  var o = e.match(NA);
  return o ? o[1].replace(DA, "'") : e;
}
function Dg(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function PA(e) {
  return Dg({}, e);
}
var pw = 1e3 * 60, Ou = 60 * 24, hw = Ou * 30, mw = Ou * 365;
function Ju(e, o, r) {
  var s, a, u;
  Ue(2, arguments);
  var c = Rs(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : Ng;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = Sk(e, o);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var v = Dg(PA(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: m
  }), g, y;
  m > 0 ? (g = mt(o), y = mt(e)) : (g = mt(e), y = mt(o));
  var b = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), D;
  if (b === "floor")
    D = Math.floor;
  else if (b === "ceil")
    D = Math.ceil;
  else if (b === "round")
    D = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var O = y.getTime() - g.getTime(), R = O / pw, B = Df(y) - Df(g), S = (O - B) / pw, A = r == null ? void 0 : r.unit, T;
  if (A ? T = String(A) : R < 1 ? T = "second" : R < 60 ? T = "minute" : R < Ou ? T = "hour" : S < hw ? T = "day" : S < mw ? T = "month" : T = "year", T === "second") {
    var P = D(O / 1e3);
    return f.formatDistance("xSeconds", P, v);
  } else if (T === "minute") {
    var k = D(R);
    return f.formatDistance("xMinutes", k, v);
  } else if (T === "hour") {
    var U = D(R / 60);
    return f.formatDistance("xHours", U, v);
  } else if (T === "day") {
    var W = D(S / Ou);
    return f.formatDistance("xDays", W, v);
  } else if (T === "month") {
    var K = D(S / hw);
    return K === 12 && A !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", K, v);
  } else if (T === "year") {
    var Me = D(S / mw);
    return f.formatDistance("xYears", Me, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function FA(e, o, r) {
  Ue(2, arguments);
  var s = aw(e, r), a = aw(o, r);
  return s.getTime() === a.getTime();
}
function UA(e, o) {
  return Ue(1, arguments), FA(e, Date.now(), o);
}
function WA(e) {
  return Ue(1, arguments), Tg(e, Date.now());
}
function HA(e, o) {
  Ue(2, arguments);
  var r = To(o);
  return Ck(e, -r);
}
function zA(e) {
  return Ue(1, arguments), Tg(e, HA(Date.now(), 1));
}
/*! @license DOMPurify 3.4.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.10/LICENSE */
function ww(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, s = Array(o); r < o; r++)
    s[r] = e[r];
  return s;
}
function qA(e) {
  if (Array.isArray(e))
    return e;
}
function GA(e, o) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var s, a, u, c, f = [], m = !0, v = !1;
    try {
      if (u = (r = r.call(e)).next, o !== 0)
        for (; !(m = (s = u.call(r)).done) && (f.push(s.value), f.length !== o); m = !0)
          ;
    } catch (g) {
      v = !0, a = g;
    } finally {
      try {
        if (!m && r.return != null && (c = r.return(), Object(c) !== c))
          return;
      } finally {
        if (v)
          throw a;
      }
    }
    return f;
  }
}
function YA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jA(e, o) {
  return qA(e) || GA(e, o) || ZA(e, o) || YA();
}
function ZA(e, o) {
  if (e) {
    if (typeof e == "string")
      return ww(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ww(e, o) : void 0;
  }
}
const Og = Object.entries, vw = Object.setPrototypeOf, KA = Object.isFrozen, JA = Object.getPrototypeOf, XA = Object.getOwnPropertyDescriptor;
let At = Object.freeze, Tt = Object.seal, Cs = Object.create, Bg = typeof Reflect < "u" && Reflect, Of = Bg.apply, Bf = Bg.construct;
At || (At = function(o) {
  return o;
});
Tt || (Tt = function(o) {
  return o;
});
Of || (Of = function(o, r) {
  for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
    a[u - 2] = arguments[u];
  return o.apply(r, a);
});
Bf || (Bf = function(o) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return new o(...s);
});
const ga = ut(Array.prototype.forEach), QA = ut(Array.prototype.lastIndexOf), _w = ut(Array.prototype.pop), us = ut(Array.prototype.push), eT = ut(Array.prototype.splice), Mr = Array.isArray, za = ut(String.prototype.toLowerCase), Rd = ut(String.prototype.toString), gw = ut(String.prototype.match), $a = ut(String.prototype.replace), $w = ut(String.prototype.indexOf), tT = ut(String.prototype.trim), nT = ut(Number.prototype.toString), oT = ut(Boolean.prototype.toString), yw = typeof BigInt > "u" ? null : ut(BigInt.prototype.toString), bw = typeof Symbol > "u" ? null : ut(Symbol.prototype.toString), en = ut(Object.prototype.hasOwnProperty), ya = ut(Object.prototype.toString), St = ut(RegExp.prototype.test), ui = rT(TypeError);
function ut(e) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return Of(e, o, s);
  };
}
function rT(e) {
  return function() {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    return Bf(e, r);
  };
}
function $e(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : za;
  if (vw && vw(e, null), !Mr(o))
    return e;
  let s = o.length;
  for (; s--; ) {
    let a = o[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (KA(o) || (o[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function iT(e) {
  for (let o = 0; o < e.length; o++)
    en(e, o) || (e[o] = null);
  return e;
}
function Qt(e) {
  const o = Cs(null);
  for (const s of Og(e)) {
    var r = jA(s, 2);
    const a = r[0], u = r[1];
    en(e, a) && (Mr(u) ? o[a] = iT(u) : u && typeof u == "object" && u.constructor === Object ? o[a] = Qt(u) : o[a] = u);
  }
  return o;
}
function sT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return nT(e);
    case "boolean":
      return oT(e);
    case "bigint":
      return yw ? yw(e) : "0";
    case "symbol":
      return bw ? bw(e) : "Symbol()";
    case "undefined":
      return ya(e);
    case "function":
    case "object": {
      if (e === null)
        return ya(e);
      const o = e, r = So(o, "toString");
      if (typeof r == "function") {
        const s = r(o);
        return typeof s == "string" ? s : ya(s);
      }
      return ya(e);
    }
    default:
      return ya(e);
  }
}
function So(e, o) {
  for (; e !== null; ) {
    const s = XA(e, o);
    if (s) {
      if (s.get)
        return ut(s.get);
      if (typeof s.value == "function")
        return ut(s.value);
    }
    e = JA(e);
  }
  function r() {
    return null;
  }
  return r;
}
function aT(e) {
  try {
    return St(e, ""), !0;
  } catch {
    return !1;
  }
}
const Cw = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pd = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fd = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lT = At(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ud = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), uT = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vw = At(["#text"]), Ew = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Wd = At(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sw = At(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), eu = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cT = Tt(/{{[\w\W]*|^[\w\W]*}}/g), dT = Tt(/<%[\w\W]*|^[\w\W]*%>/g), fT = Tt(/\${[\w\W]*/g), pT = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), hT = Tt(/^aria-[\-\w]+$/), Iw = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), mT = Tt(/^(?:\w+script|data):/i), wT = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), vT = Tt(/^html$/i), _T = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), kw = Tt(/<[/\w!]/g), gT = Tt(/<[/\w]/g), $T = Tt(/<\/no(script|embed|frames)/i), yT = Tt(/\/>/i), Vo = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, bT = function() {
  return typeof window > "u" ? null : window;
}, CT = function(o, r) {
  if (typeof o != "object" || typeof o.createPolicy != "function")
    return null;
  let s = null;
  const a = "data-tt-policy-suffix";
  r && r.hasAttribute(a) && (s = r.getAttribute(a));
  const u = "dompurify" + (s ? "#" + s : "");
  try {
    return o.createPolicy(u, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
}, Aw = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, br = function(o, r, s, a) {
  return en(o, r) && Mr(o[r]) ? $e(a.base ? Qt(a.base) : {}, o[r], a.transform) : s;
};
function Rg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bT();
  const o = (q) => Rg(q);
  if (o.version = "3.4.10", o.removed = [], !e || !e.document || e.document.nodeType !== Vo.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, m = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, y = e.trustedTypes, b = f.prototype, D = So(b, "cloneNode"), O = So(b, "remove"), R = So(b, "nextSibling"), B = So(b, "childNodes"), S = So(b, "parentNode"), A = So(b, "shadowRoot"), T = So(b, "attributes"), P = c && c.prototype ? So(c.prototype, "nodeType") : null, k = c && c.prototype ? So(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let U, W = "", K, Me = !1, pe = 0;
  const Ae = function() {
    if (pe > 0)
      throw ui('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ee = function(w) {
    Ae(), pe++;
    try {
      return U.createHTML(w);
    } finally {
      pe--;
    }
  }, We = function(w) {
    Ae(), pe++;
    try {
      return U.createScriptURL(w);
    } finally {
      pe--;
    }
  }, ze = function() {
    return Me || (K = CT(y, a), Me = !0), K;
  }, _e = r, Ze = _e.implementation, Xe = _e.createNodeIterator, qe = _e.createDocumentFragment, nn = _e.getElementsByTagName, Mo = s.importNode;
  let Se = Aw();
  o.isSupported = typeof Og == "function" && typeof S == "function" && Ze && Ze.createHTMLDocument !== void 0;
  const Js = cT, Xs = dT, Mi = fT, gt = pT, Ht = hT, on = mT, vn = wT, rn = _T;
  let Ur = Iw, Be = null;
  const fo = $e({}, [...Cw, ...Pd, ...Fd, ...Ud, ...Vw]);
  let Re = null;
  const $t = $e({}, [...Ew, ...Wd, ...Sw, ...eu]);
  let ye = Object.seal(Cs(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), Ln = null, yt = null;
  const Mt = Object.seal(Cs(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Wr = !0, Mn = !0, ct = !1, po = !0, dt = !1, No = !0, zt = !1, Hr = !1, jn = !1, Nt = !1, Zn = !1, Kn = !1, Do = !0, Oo = !1;
  const Bo = "user-content-";
  let ho = !0, mo = !1, _n = {}, bt = null;
  const ar = $e({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let zr = null;
  const qr = $e({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ro = null;
  const lr = $e({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Po = "http://www.w3.org/1998/Math/MathML", Fo = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let Jn = qt, Uo = !1, ur = null;
  const Ni = $e({}, [Po, Fo, qt], Rd), Gr = At(["mi", "mo", "mn", "ms", "mtext"]);
  let wo = $e({}, Gr);
  const Yr = At(["annotation-xml"]);
  let vo = $e({}, Yr);
  const Di = $e({}, ["title", "style", "font", "a", "script"]);
  let _o = null;
  const Oi = ["application/xhtml+xml", "text/html"], re = "text/html";
  let G = null, ge = null;
  const Ce = r.createElement("form"), go = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, Wo = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ge && ge === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = Qt(w), _o = Oi.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? re : w.PARSER_MEDIA_TYPE, G = _o === "application/xhtml+xml" ? Rd : za, Be = br(w, "ALLOWED_TAGS", fo, {
      transform: G
    }), Re = br(w, "ALLOWED_ATTR", $t, {
      transform: G
    }), ur = br(w, "ALLOWED_NAMESPACES", Ni, {
      transform: Rd
    }), Ro = br(w, "ADD_URI_SAFE_ATTR", lr, {
      transform: G,
      base: lr
    }), zr = br(w, "ADD_DATA_URI_TAGS", qr, {
      transform: G,
      base: qr
    }), bt = br(w, "FORBID_CONTENTS", ar, {
      transform: G
    }), Ln = br(w, "FORBID_TAGS", Qt({}), {
      transform: G
    }), yt = br(w, "FORBID_ATTR", Qt({}), {
      transform: G
    }), _n = en(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Qt(w.USE_PROFILES) : w.USE_PROFILES : !1, Wr = w.ALLOW_ARIA_ATTR !== !1, Mn = w.ALLOW_DATA_ATTR !== !1, ct = w.ALLOW_UNKNOWN_PROTOCOLS || !1, po = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, dt = w.SAFE_FOR_TEMPLATES || !1, No = w.SAFE_FOR_XML !== !1, zt = w.WHOLE_DOCUMENT || !1, Nt = w.RETURN_DOM || !1, Zn = w.RETURN_DOM_FRAGMENT || !1, Kn = w.RETURN_TRUSTED_TYPE || !1, jn = w.FORCE_BODY || !1, Do = w.SANITIZE_DOM !== !1, Oo = w.SANITIZE_NAMED_PROPS || !1, ho = w.KEEP_CONTENT !== !1, mo = w.IN_PLACE || !1, Ur = aT(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Iw, Jn = typeof w.NAMESPACE == "string" ? w.NAMESPACE : qt, wo = en(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Qt(w.MATHML_TEXT_INTEGRATION_POINTS) : $e({}, Gr), vo = en(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? Qt(w.HTML_INTEGRATION_POINTS) : $e({}, Yr);
    const E = en(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? Qt(w.CUSTOM_ELEMENT_HANDLING) : Cs(null);
    if (ye = Cs(null), en(E, "tagNameCheck") && go(E.tagNameCheck) && (ye.tagNameCheck = E.tagNameCheck), en(E, "attributeNameCheck") && go(E.attributeNameCheck) && (ye.attributeNameCheck = E.attributeNameCheck), en(E, "allowCustomizedBuiltInElements") && typeof E.allowCustomizedBuiltInElements == "boolean" && (ye.allowCustomizedBuiltInElements = E.allowCustomizedBuiltInElements), Tt(ye), dt && (Mn = !1), Zn && (Nt = !0), _n && (Be = $e({}, Vw), Re = Cs(null), _n.html === !0 && ($e(Be, Cw), $e(Re, Ew)), _n.svg === !0 && ($e(Be, Pd), $e(Re, Wd), $e(Re, eu)), _n.svgFilters === !0 && ($e(Be, Fd), $e(Re, Wd), $e(Re, eu)), _n.mathMl === !0 && ($e(Be, Ud), $e(Re, Sw), $e(Re, eu))), Mt.tagCheck = null, Mt.attributeCheck = null, en(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Mt.tagCheck = w.ADD_TAGS : Mr(w.ADD_TAGS) && (Be === fo && (Be = Qt(Be)), $e(Be, w.ADD_TAGS, G))), en(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Mt.attributeCheck = w.ADD_ATTR : Mr(w.ADD_ATTR) && (Re === $t && (Re = Qt(Re)), $e(Re, w.ADD_ATTR, G))), en(w, "ADD_URI_SAFE_ATTR") && Mr(w.ADD_URI_SAFE_ATTR) && $e(Ro, w.ADD_URI_SAFE_ATTR, G), en(w, "FORBID_CONTENTS") && Mr(w.FORBID_CONTENTS) && (bt === ar && (bt = Qt(bt)), $e(bt, w.FORBID_CONTENTS, G)), en(w, "ADD_FORBID_CONTENTS") && Mr(w.ADD_FORBID_CONTENTS) && (bt === ar && (bt = Qt(bt)), $e(bt, w.ADD_FORBID_CONTENTS, G)), ho && (Be["#text"] = !0), zt && $e(Be, ["html", "head", "body"]), Be.table && ($e(Be, ["tbody"]), delete Ln.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw ui('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw ui('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = U;
      U = w.TRUSTED_TYPES_POLICY;
      try {
        W = Ee("");
      } catch (Z) {
        throw U = z, Z;
      }
    } else
      w.TRUSTED_TYPES_POLICY === null ? (U = void 0, W = "") : (U === void 0 && (U = ze()), U && typeof W == "string" && (W = Ee("")));
    (Se.uponSanitizeElement.length > 0 || Se.uponSanitizeAttribute.length > 0) && Be === fo && (Be = Qt(Be)), Se.uponSanitizeAttribute.length > 0 && Re === $t && (Re = Qt(Re)), At && At(w), ge = w;
  }, jr = $e({}, [...Pd, ...Fd, ...lT]), Zr = $e({}, [...Ud, ...uT]), Bi = function(w, E, z) {
    return E.namespaceURI === qt ? w === "svg" : E.namespaceURI === Po ? w === "svg" && (z === "annotation-xml" || wo[z]) : Boolean(jr[w]);
  }, Ri = function(w, E, z) {
    return E.namespaceURI === qt ? w === "math" : E.namespaceURI === Fo ? w === "math" && vo[z] : Boolean(Zr[w]);
  }, Pi = function(w, E, z) {
    return E.namespaceURI === Fo && !vo[z] || E.namespaceURI === Po && !wo[z] ? !1 : !Zr[w] && (Di[w] || !jr[w]);
  }, Fi = function(w) {
    let E = S(w);
    (!E || !E.tagName) && (E = {
      namespaceURI: Jn,
      tagName: "template"
    });
    const z = za(w.tagName), Z = za(E.tagName);
    return ur[w.namespaceURI] ? w.namespaceURI === Fo ? Bi(z, E, Z) : w.namespaceURI === Po ? Ri(z, E, Z) : w.namespaceURI === qt ? Pi(z, E, Z) : !!(_o === "application/xhtml+xml" && ur[w.namespaceURI]) : !1;
  }, Dt = function(w) {
    us(o.removed, {
      element: w
    });
    try {
      S(w).removeChild(w);
    } catch {
      if (O(w), !S(w))
        throw ui("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Kr = function(w) {
    const E = B(w);
    if (E) {
      const Z = [];
      ga(E, (ne) => {
        us(Z, ne);
      }), ga(Z, (ne) => {
        try {
          O(ne);
        } catch {
        }
      });
    }
    const z = T(w);
    if (z)
      for (let Z = z.length - 1; Z >= 0; --Z) {
        const ne = z[Z], he = ne && ne.name;
        if (typeof he == "string")
          try {
            w.removeAttribute(he);
          } catch {
          }
      }
  }, Gt = function(w, E) {
    try {
      us(o.removed, {
        attribute: E.getAttributeNode(w),
        from: E
      });
    } catch {
      us(o.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(w), w === "is")
      if (Nt || Zn)
        try {
          Dt(E);
        } catch {
        }
      else
        try {
          E.setAttribute(w, "");
        } catch {
        }
  }, Ui = function(w) {
    const E = T(w);
    if (!!E)
      for (let z = E.length - 1; z >= 0; --z) {
        const Z = E[z], ne = Z && Z.name;
        if (!(typeof ne != "string" || Re[G(ne)]))
          try {
            w.removeAttribute(ne);
          } catch {
          }
      }
  }, Wi = function(w) {
    const E = [w];
    for (; E.length > 0; ) {
      const z = E.pop();
      (P ? P(z) : z.nodeType) === Vo.element && Ui(z);
      const ne = B(z);
      if (ne)
        for (let he = ne.length - 1; he >= 0; --he)
          E.push(ne[he]);
    }
  }, Jr = function(w) {
    let E = null, z = null;
    if (jn)
      w = "<remove></remove>" + w;
    else {
      const he = gw(w, /^[\r\n\t ]+/);
      z = he && he[0];
    }
    _o === "application/xhtml+xml" && Jn === qt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Z = U ? Ee(w) : w;
    if (Jn === qt)
      try {
        E = new g().parseFromString(Z, _o);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = Ze.createDocument(Jn, "template", null);
      try {
        E.documentElement.innerHTML = Uo ? W : Z;
      } catch {
      }
    }
    const ne = E.body || E.documentElement;
    return w && z && ne.insertBefore(r.createTextNode(z), ne.childNodes[0] || null), Jn === qt ? nn.call(E, zt ? "html" : "body")[0] : zt ? E.documentElement : ne;
  }, cr = function(w) {
    return Xe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, $o = function(w) {
    return w = $a(w, Js, " "), w = $a(w, Xs, " "), w = $a(w, Mi, " "), w;
  }, Ho = function(w) {
    var E;
    w.normalize();
    const z = Xe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_TEXT | m.SHOW_COMMENT | m.SHOW_CDATA_SECTION | m.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = z.nextNode();
    for (; Z; )
      Z.data = $o(Z.data), Z = z.nextNode();
    const ne = (E = w.querySelectorAll) === null || E === void 0 ? void 0 : E.call(w, "template");
    ne && ga(ne, (he) => {
      dr(he.content) && Ho(he.content);
    });
  }, zo = function(w) {
    const E = k ? k(w) : null;
    return typeof E != "string" || G(E) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== T(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== P(w) || w.childNodes !== B(w);
  }, dr = function(w) {
    if (!P || typeof w != "object" || w === null)
      return !1;
    try {
      return P(w) === Vo.documentFragment;
    } catch {
      return !1;
    }
  }, Xr = function(w) {
    if (!P || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof P(w) == "number";
    } catch {
      return !1;
    }
  };
  function Xn(q, w, E) {
    q.length !== 0 && ga(q, (z) => {
      z.call(o, w, E, ge);
    });
  }
  const dl = function(w, E) {
    return !!(No && w.hasChildNodes() && !Xr(w.firstElementChild) && St(kw, w.textContent) && St(kw, w.innerHTML) || No && w.namespaceURI === qt && E === "style" && Xr(w.firstElementChild) || w.nodeType === Vo.processingInstruction || No && w.nodeType === Vo.comment && St(gT, w.data));
  }, fl = function(w, E) {
    if (!Ln[E] && ea(E) && (ye.tagNameCheck instanceof RegExp && St(ye.tagNameCheck, E) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(E)))
      return !1;
    if (ho && !bt[E]) {
      const z = S(w), Z = B(w);
      if (Z && z) {
        const ne = Z.length;
        for (let he = ne - 1; he >= 0; --he) {
          const nt = mo ? Z[he] : D(Z[he], !0);
          z.insertBefore(nt, R(w));
        }
      }
    }
    return Dt(w), !0;
  }, Qs = function(w) {
    if (Xn(Se.beforeSanitizeElements, w, null), zo(w))
      return Dt(w), !0;
    const E = G(k ? k(w) : w.nodeName);
    if (Xn(Se.uponSanitizeElement, w, {
      tagName: E,
      allowedTags: Be
    }), dl(w, E))
      return Dt(w), !0;
    if (Ln[E] || !(Mt.tagCheck instanceof Function && Mt.tagCheck(E)) && !Be[E])
      return fl(w, E);
    if ((P ? P(w) : w.nodeType) === Vo.element && !Fi(w) || (E === "noscript" || E === "noembed" || E === "noframes") && St($T, w.innerHTML))
      return Dt(w), !0;
    if (dt && w.nodeType === Vo.text) {
      const Z = $o(w.textContent);
      w.textContent !== Z && (us(o.removed, {
        element: w.cloneNode()
      }), w.textContent = Z);
    }
    return Xn(Se.afterSanitizeElements, w, null), !1;
  }, Hi = function(w, E, z) {
    if (yt[E] || Do && (E === "id" || E === "name") && (z in r || z in Ce))
      return !1;
    const Z = Re[E] || Mt.attributeCheck instanceof Function && Mt.attributeCheck(E, w);
    if (!(Mn && St(gt, E))) {
      if (!(Wr && St(Ht, E))) {
        if (Z) {
          if (!Ro[E]) {
            if (!St(Ur, $a(z, vn, ""))) {
              if (!((E === "src" || E === "xlink:href" || E === "href") && w !== "script" && $w(z, "data:") === 0 && zr[w])) {
                if (!(ct && !St(on, $a(z, vn, "")))) {
                  if (z)
                    return !1;
                }
              }
            }
          }
        } else if (!(ea(w) && (ye.tagNameCheck instanceof RegExp && St(ye.tagNameCheck, w) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(w)) && (ye.attributeNameCheck instanceof RegExp && St(ye.attributeNameCheck, E) || ye.attributeNameCheck instanceof Function && ye.attributeNameCheck(E, w)) || E === "is" && ye.allowCustomizedBuiltInElements && (ye.tagNameCheck instanceof RegExp && St(ye.tagNameCheck, z) || ye.tagNameCheck instanceof Function && ye.tagNameCheck(z))))
          return !1;
      }
    }
    return !0;
  }, hc = $e({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), ea = function(w) {
    return !hc[za(w)] && St(rn, w);
  }, zi = function(w, E, z, Z) {
    if (U && typeof y == "object" && typeof y.getAttributeType == "function" && !z)
      switch (y.getAttributeType(w, E)) {
        case "TrustedHTML":
          return Ee(Z);
        case "TrustedScriptURL":
          return We(Z);
      }
    return Z;
  }, pl = function(w, E, z, Z) {
    try {
      z ? w.setAttributeNS(z, E, Z) : w.setAttribute(E, Z), zo(w) ? Dt(w) : _w(o.removed);
    } catch {
      Gt(E, w);
    }
  }, hl = function(w) {
    Xn(Se.beforeSanitizeAttributes, w, null);
    const E = w.attributes;
    if (!E || zo(w))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let Z = E.length;
    const ne = G(w.nodeName);
    for (; Z--; ) {
      const he = E[Z], nt = he.name, Qe = he.namespaceURI, Yt = he.value, sn = G(nt), Gi = Yt;
      let wt = nt === "value" ? Gi : tT(Gi);
      if (z.attrName = sn, z.attrValue = wt, z.keepAttr = !0, z.forceKeepAttr = void 0, Xn(Se.uponSanitizeAttribute, w, z), wt = z.attrValue, Oo && (sn === "id" || sn === "name") && $w(wt, Bo) !== 0 && (Gt(nt, w), wt = Bo + wt), No && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, wt)) {
        Gt(nt, w);
        continue;
      }
      if (sn === "attributename" && gw(wt, "href")) {
        Gt(nt, w);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          Gt(nt, w);
          continue;
        }
        if (!po && St(yT, wt)) {
          Gt(nt, w);
          continue;
        }
        if (dt && (wt = $o(wt)), !Hi(ne, sn, wt)) {
          Gt(nt, w);
          continue;
        }
        wt = zi(ne, sn, Qe, wt), wt !== Gi && pl(w, nt, Qe, wt);
      }
    }
    Xn(Se.afterSanitizeAttributes, w, null);
  }, Qr = function(w) {
    let E = null;
    const z = cr(w);
    for (Xn(Se.beforeSanitizeShadowDOM, w, null); E = z.nextNode(); )
      if (Xn(Se.uponSanitizeShadowNode, E, null), Qs(E), hl(E), dr(E.content) && Qr(E.content), (P ? P(E) : E.nodeType) === Vo.element) {
        const ne = A(E);
        dr(ne) && (qi(ne), Qr(ne));
      }
    Xn(Se.afterSanitizeShadowDOM, w, null);
  }, qi = function(w) {
    const E = [{
      node: w,
      shadow: null
    }];
    for (; E.length > 0; ) {
      const z = E.pop();
      if (z.shadow) {
        Qr(z.shadow);
        continue;
      }
      const Z = z.node, he = (P ? P(Z) : Z.nodeType) === Vo.element, nt = B(Z);
      if (nt)
        for (let Qe = nt.length - 1; Qe >= 0; --Qe)
          E.push({
            node: nt[Qe],
            shadow: null
          });
      if (he) {
        const Qe = k ? k(Z) : null;
        if (typeof Qe == "string" && G(Qe) === "template") {
          const Yt = Z.content;
          dr(Yt) && E.push({
            node: Yt,
            shadow: null
          });
        }
      }
      if (he) {
        const Qe = A(Z);
        dr(Qe) && E.push({
          node: null,
          shadow: Qe
        }, {
          node: Qe,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(q) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, z = null, Z = null, ne = null;
    if (Uo = !q, Uo && (q = "<!-->"), typeof q != "string" && !Xr(q) && (q = sT(q), typeof q != "string"))
      throw ui("dirty is not a string, aborting");
    if (!o.isSupported)
      return q;
    Hr || Wo(w), o.removed = [];
    const he = mo && typeof q != "string" && Xr(q);
    if (he) {
      const Yt = k ? k(q) : q.nodeName;
      if (typeof Yt == "string") {
        const sn = G(Yt);
        if (!Be[sn] || Ln[sn])
          throw ui("root node is forbidden and cannot be sanitized in-place");
      }
      if (zo(q))
        throw ui("root node is clobbered and cannot be sanitized in-place");
      try {
        qi(q);
      } catch (sn) {
        throw Kr(q), sn;
      }
    } else if (Xr(q))
      E = Jr("<!---->"), z = E.ownerDocument.importNode(q, !0), z.nodeType === Vo.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? E = z : E.appendChild(z), qi(z);
    else {
      if (!Nt && !dt && !zt && q.indexOf("<") === -1)
        return U && Kn ? Ee(q) : q;
      if (E = Jr(q), !E)
        return Nt ? null : Kn ? W : "";
    }
    E && jn && Dt(E.firstChild);
    const nt = cr(he ? q : E);
    try {
      for (; Z = nt.nextNode(); )
        Qs(Z), hl(Z), dr(Z.content) && Qr(Z.content);
    } catch (Yt) {
      throw he && Kr(q), Yt;
    }
    if (he)
      return ga(o.removed, (Yt) => {
        Yt.element && Wi(Yt.element);
      }), dt && Ho(q), q;
    if (Nt) {
      if (dt && Ho(E), Zn)
        for (ne = qe.call(E.ownerDocument); E.firstChild; )
          ne.appendChild(E.firstChild);
      else
        ne = E;
      return (Re.shadowroot || Re.shadowrootmode) && (ne = Mo.call(s, ne, !0)), ne;
    }
    let Qe = zt ? E.outerHTML : E.innerHTML;
    return zt && Be["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && St(vT, E.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + Qe), dt && (Qe = $o(Qe)), U && Kn ? Ee(Qe) : Qe;
  }, o.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Wo(q), Hr = !0;
  }, o.clearConfig = function() {
    ge = null, Hr = !1, U = K, W = "";
  }, o.isValidAttribute = function(q, w, E) {
    ge || Wo({});
    const z = G(q), Z = G(w);
    return Hi(z, Z, E);
  }, o.addHook = function(q, w) {
    typeof w == "function" && us(Se[q], w);
  }, o.removeHook = function(q, w) {
    if (w !== void 0) {
      const E = QA(Se[q], w);
      return E === -1 ? void 0 : eT(Se[q], E, 1)[0];
    }
    return _w(Se[q]);
  }, o.removeHooks = function(q) {
    Se[q] = [];
  }, o.removeAllHooks = function() {
    Se = Aw();
  }, o;
}
var VT = Rg();
const xo = (e) => {
  let o = "";
  if (e)
    try {
      o = BA(new Date(e), kt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Pg = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), Fg = (e) => VT.sanitize(e), Ug = (e, o) => {
  const r = Pg(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > o ? "..." : "";
  return r.substring(0, o) + s;
}, ET = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => WA(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => zA(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => UA(s.firstEventTime)
      );
      break;
  }
  return r;
}, Xu = "/alec", Wg = "/alec/engine/configuration", Hg = "/alec/llm/configuration", ST = "/alec/llm/validate", zg = "/alec/llm/suggestions", IT = "/alec/llm/usage", qg = "/alec/situation", kT = async () => {
  try {
    const e = await Lt.get(`${Wg}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, AT = async (e) => {
  try {
    return (await Lt.post(Wg, e)).status === 200;
  } catch {
    return !1;
  }
}, TT = async () => {
  try {
    const e = await Lt.get(Hg);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, xT = async (e) => {
  try {
    const o = await Lt.post(Hg, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, LT = async (e) => {
  try {
    const o = await Lt.post(ST, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, Gg = async (e) => {
  try {
    const o = await Lt.get(`${zg}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, MT = async (e) => {
  try {
    const o = await Lt.post(
      `${zg}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, NT = async (e = 30) => {
  try {
    const o = await Lt.get(`${IT}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Yg = async (e, o) => {
  try {
    const r = await Lt.post(`${Xu}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == kt.REJECTED.toLowerCase() && r.status === 200 && await Ig(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Tw = async (e, o) => {
  try {
    return (await Lt.delete(`${Xu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, jg = async (e, o) => {
  try {
    return (await Lt.put(`${Xu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, DT = async (e) => {
  try {
    return (await Lt.post(qg, e)).status === 200;
  } catch {
    return !1;
  }
}, OT = async () => {
  try {
    return (await Lt.post(`${qg}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, BT = async () => {
  try {
    return (await Lt.post(`${Xu}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, RT = window.Vue.defineComponent, Sn = window.Vue.unref, Hd = window.Vue.normalizeClass, ko = window.Vue.createElementVNode, ci = window.Vue.toDisplayString, Cr = window.Vue.openBlock, Vr = window.Vue.createElementBlock, ba = window.Vue.createCommentVNode, xw = window.Vue.createVNode, Rf = window.Vue.createTextVNode, PT = window.Vue.renderList, FT = window.Vue.Fragment, UT = window.Vue.pushScopeId, WT = window.Vue.popScopeId, ip = (e) => (UT("data-v-aab1b2b8"), e = e(), WT(), e), HT = { class: "content" }, zT = { class: "title-row" }, qT = { class: "title" }, GT = ["title"], YT = {
  key: 1,
  class: "accepted"
}, jT = {
  key: 2,
  class: "rejected"
}, ZT = /* @__PURE__ */ ip(() => /* @__PURE__ */ ko("span", { class: "info-title" }, " Duration: ", -1)), KT = { key: 0 }, JT = /* @__PURE__ */ ip(() => /* @__PURE__ */ ko("span", { class: "info-title" }, " First Event: ", -1)), XT = { class: "description" }, QT = /* @__PURE__ */ ip(() => /* @__PURE__ */ ko("hr", null, null, -1)), e2 = {
  key: 1,
  class: "count-info"
}, t2 = /* @__PURE__ */ Rf(" Alarms: "), n2 = { class: "info-title" }, o2 = window.Vue.onMounted, r2 = window.Vue.ref, i2 = /* @__PURE__ */ RT({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = kt.ACCEPTED, a = kt.REJECTED, u = new Date().getTime(), c = () => {
      var m;
      o("situation-selected", (m = r.situationInfo) == null ? void 0 : m.id);
    }, f = r2("none");
    return o2(async () => {
      var v;
      if (((v = r.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const m = await Gg(r.situationInfo.id);
      m && m.status && (f.value = m.status);
    }), (m, v) => {
      var g, y, b;
      return Cr(), Vr("div", {
        onClick: c,
        class: Hd(["card", {
          rejected: r.situationInfo.status == Sn(a)
        }])
      }, [
        ko("div", {
          class: Hd(["severity-line", [`${(y = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
        }, null, 2),
        ko("div", HT, [
          ko("div", zT, [
            ko("div", qT, "Situation " + ci((b = r.situationInfo) == null ? void 0 : b.id), 1),
            f.value !== "none" ? (Cr(), Vr("span", {
              key: 0,
              class: Hd(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + ci(f.value === "pending" ? "\u2026" : ""), 11, GT)) : ba("", !0),
            r.situationInfo.status == Sn(s) ? (Cr(), Vr("div", YT, [
              xw(Sn(X), {
                icon: Sn(Ds),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : ba("", !0),
            r.situationInfo.status == Sn(a) ? (Cr(), Vr("div", jT, [
              xw(Sn(X), {
                icon: Sn(Ag),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : ba("", !0)
          ]),
          ko("div", null, [
            ZT,
            Rf(" " + ci(Sn(Ju)(
              Sn(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? ba("", !0) : (Cr(), Vr("div", KT, [
            JT,
            Rf(ci(Sn(xo)(r.situationInfo.firstEventTime)), 1)
          ])),
          ko("div", XT, ci(Sn(Ug)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          QT,
          r.situationInfo.relatedAlarms ? (Cr(), Vr("div", e2, [
            t2,
            ko("span", n2, ci(r.situationInfo.relatedAlarms.length), 1)
          ])) : ba("", !0),
          (Cr(!0), Vr(FT, null, PT(Sn(Oe.exports.keys)(
            Sn(Oe.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (D) => (Cr(), Vr("div", {
            class: "info-title",
            key: D
          }, " - " + ci(D), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Zg = /* @__PURE__ */ Ve(i2, [["__scopeId", "data-v-aab1b2b8"]]), s2 = window.Vue.openBlock, a2 = window.Vue.createElementBlock, l2 = window.Vue.createElementVNode;
var u2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const c2 = {}, d2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, f2 = /* @__PURE__ */ l2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), p2 = [
  f2
];
function h2(e, o) {
  return s2(), a2("svg", d2, p2);
}
var m2 = /* @__PURE__ */ u2(c2, [["render", h2]]);
const w2 = window.Vue.openBlock, v2 = window.Vue.createElementBlock, Kg = window.Vue.createElementVNode;
var _2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const g2 = {}, $2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, y2 = /* @__PURE__ */ Kg("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), b2 = /* @__PURE__ */ Kg("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), C2 = [
  y2,
  b2
];
function V2(e, o) {
  return w2(), v2("svg", $2, C2);
}
var E2 = /* @__PURE__ */ _2(g2, [["render", V2]]);
const S2 = window.Vue.openBlock, I2 = window.Vue.createElementBlock, k2 = window.Vue.createElementVNode;
var A2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const T2 = {}, x2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L2 = /* @__PURE__ */ k2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), M2 = [
  L2
];
function N2(e, o) {
  return S2(), I2("svg", x2, M2);
}
var D2 = /* @__PURE__ */ A2(T2, [["render", N2]]);
const O2 = window.Vue.openBlock, B2 = window.Vue.createElementBlock, R2 = window.Vue.createElementVNode;
var P2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F2 = {}, U2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W2 = /* @__PURE__ */ R2("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), H2 = [
  W2
];
function z2(e, o) {
  return O2(), B2("svg", U2, H2);
}
var Jg = /* @__PURE__ */ P2(F2, [["render", z2]]);
const q2 = window.Vue.defineComponent, Er = window.Vue.unref, tu = window.Vue.normalizeClass, nu = window.Vue.createVNode, G2 = window.Vue.openBlock, Y2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const j2 = { class: "paginator" }, Z2 = /* @__PURE__ */ q2({
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
    return (a, u) => (G2(), Y2("div", j2, [
      nu(Er(X), {
        icon: Er(m2),
        "aria-hidden": "true",
        class: tu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      nu(Er(X), {
        icon: Er(D2),
        "aria-hidden": "true",
        class: tu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      nu(Er(X), {
        icon: Er(Jg),
        "aria-hidden": "true",
        class: tu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      nu(Er(X), {
        icon: Er(E2),
        "aria-hidden": "true",
        class: tu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const K2 = /* @__PURE__ */ Ve(Z2, [["__scopeId", "data-v-54e14a59"]]);
const be = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, J2 = window.Vue.computed, Qu = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = J2(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const ki = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Ai = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var X2 = Object.defineProperty, Q2 = Object.defineProperties, ex = Object.getOwnPropertyDescriptors, Lw = Object.getOwnPropertySymbols, tx = Object.prototype.hasOwnProperty, nx = Object.prototype.propertyIsEnumerable, Mw = (e, o, r) => o in e ? X2(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Nw = (e, o) => {
  for (var r in o || (o = {}))
    tx.call(o, r) && Mw(e, r, o[r]);
  if (Lw)
    for (var r of Lw(o))
      nx.call(o, r) && Mw(e, r, o[r]);
  return e;
}, ox = (e, o) => Q2(e, ex(o));
const rx = window.Vue.defineComponent, ix = window.Vue.h;
var sx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ax = {
  center: {
    type: Boolean,
    default: !1
  }
}, lx = rx({
  props: ax,
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
        this.styles = ox(Nw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Ai(this.failsafe), this.failsafe = ki(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return ix("div", {
        style: Nw({}, this.styles),
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
var Br = /* @__PURE__ */ sx(lx, [["__scopeId", "data-v-18e2a5db"]]);
const ux = window.Vue.openBlock, cx = window.Vue.createElementBlock, dx = window.Vue.createElementVNode;
var fx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const px = {}, hx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mx = /* @__PURE__ */ dx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), wx = [
  mx
];
function vx(e, o) {
  return ux(), cx("svg", hx, wx);
}
var Ps = /* @__PURE__ */ fx(px, [["render", vx]]);
const Dw = window.Vue.computed, _x = (e, o, r) => {
  const s = Dw(() => o.value.filter((u) => !u.disabled)), a = Dw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const gx = window.Vue.openBlock, $x = window.Vue.createElementBlock, sp = window.Vue.createElementVNode;
var yx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bx = {}, Cx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Vx = /* @__PURE__ */ sp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ex = /* @__PURE__ */ sp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Sx = /* @__PURE__ */ sp("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Ix = [
  Vx,
  Ex,
  Sx
];
function kx(e, o) {
  return gx(), $x("svg", Cx, Ix);
}
var Ax = /* @__PURE__ */ yx(bx, [["render", kx]]), Tx = Object.defineProperty, xx = Object.defineProperties, Lx = Object.getOwnPropertyDescriptors, Ow = Object.getOwnPropertySymbols, Mx = Object.prototype.hasOwnProperty, Nx = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? Tx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xg = (e, o) => {
  for (var r in o || (o = {}))
    Mx.call(o, r) && Bw(e, r, o[r]);
  if (Ow)
    for (var r of Ow(o))
      Nx.call(o, r) && Bw(e, r, o[r]);
  return e;
}, Qg = (e, o) => xx(e, Lx(o));
const Fs = window.Vue.defineComponent, el = window.Vue.resolveComponent, Ao = window.Vue.openBlock, Es = window.Vue.createElementBlock, Dx = window.Vue.createVNode, Bu = window.Vue.createBlock, Ox = window.Vue.withModifiers, Os = window.Vue.inject, tl = window.Vue.computed, Bx = window.Vue.normalizeClass, cs = window.Vue.createElementVNode, Ru = window.Vue.toDisplayString, Iu = window.Vue.renderSlot, qa = window.Vue.createCommentVNode, Rx = window.Vue.withDirectives, Px = window.Vue.vShow, Pf = window.Vue.ref, Rw = window.Vue.toRef, Pw = window.Vue.nextTick, Ff = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ap = window.Vue.provide, Fw = window.Vue.isRef, Fx = window.Vue.onBeforeUnmount;
var il = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ux = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, Wx = Fs({
  props: Ux,
  components: {
    FeatherIcon: X
  }
}), Hx = ["title"];
function zx(e, o, r, s, a, u) {
  const c = el("FeatherIcon");
  return Ao(), Es("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Dx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, Hx);
}
var qx = /* @__PURE__ */ il(Wx, [["render", zx], ["__scopeId", "data-v-4265058e"]]);
const Gx = Fs({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Ps;
    }
  },
  components: {
    ActionIcon: qx
  }
});
function Yx(e, o, r, s, a, u) {
  const c = el("ActionIcon");
  return Ao(), Bu(c, {
    onClick: o[0] || (o[0] = Ox((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var jx = /* @__PURE__ */ il(Gx, [["render", Yx]]);
const Zx = Fs({
  computed: {
    errorIcon() {
      return Ax;
    }
  },
  components: {
    FeatherIcon: X
  }
});
function Kx(e, o, r, s, a, u) {
  const c = el("FeatherIcon");
  return Ao(), Bu(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Jx = /* @__PURE__ */ il(Zx, [["render", Kx], ["__scopeId", "data-v-0b8faef3"]]);
const Xx = {
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
}, Qx = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, eL = Fs({
  emits: Qx,
  props: Xx,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Os("wrapperOptions", {}), o = Os("validationErrorMessage", !1), r = tl(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Qg(Xg({}, e), { error: r });
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
    ClearIcon: jx,
    ErrorIcon: Jx
  }
}), tL = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, nL = ["for"], oL = { class: "prefix" }, rL = { class: "post" };
function iL(e, o, r, s, a, u) {
  const c = el("ClearIcon"), f = el("ErrorIcon");
  return Ao(), Es("div", {
    class: Bx(["feather-input-wrapper-container", e.containerCls])
  }, [
    cs("fieldset", tL, [
      cs("legend", null, Ru(e.label), 1)
    ]),
    cs("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ru(e.label), 9, nL),
    cs("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      cs("div", oL, [
        Iu(e.$slots, "pre", {}, void 0, !0)
      ]),
      Iu(e.$slots, "default", {}, void 0, !0),
      cs("div", rL, [
        e.showClear && e.computedClearText ? (Ao(), Bu(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : qa("", !0),
        e.error ? (Ao(), Bu(f, { key: 1 })) : qa("", !0),
        Iu(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var ec = /* @__PURE__ */ il(eL, [["render", iL], ["__scopeId", "data-v-4db296db"]]);
const sL = Fs({
  setup() {
    const e = Os("subTextOptions", {}), o = Os("validationErrorMessage", !1), r = tl(() => e.error ? e.error : o && o.value ? o.value : "");
    return Qg(Xg({}, e), { error: r });
  }
}), aL = { class: "feather-input-sub-text" }, lL = {
  key: 0,
  class: "feather-input-spacer"
}, uL = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, cL = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function dL(e, o, r, s, a, u) {
  return Rx((Ao(), Es("div", aL, [
    !e.hint && !e.error.length ? (Ao(), Es("div", lL, "\xA0")) : qa("", !0),
    e.hint && !e.error.length ? (Ao(), Es("div", uL, Ru(e.hint), 1)) : qa("", !0),
    e.error.length > 0 ? (Ao(), Es("div", cL, Ru(e.error), 1)) : qa("", !0),
    Iu(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [Px, !e.inline || e.hint || e.error.length]
  ]);
}
var Us = /* @__PURE__ */ il(sL, [["render", dL], ["__scopeId", "data-v-8e0ac99e"]]);
const fL = {
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
Fs({
  props: fL,
  setup(e) {
    const o = Os("featherFormErrors", Pf([])), r = Rw(e, "errorList"), s = tl(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : o.value;
    }), a = Rw(e, "generalError"), u = (g) => {
      document.getElementById(g).focus();
    }, c = (g) => g.replace(/ \*$/, ""), f = Pf(), m = (g) => `${c(g.label)} - ${g.message}`, v = tl(() => (s.value.length && Pw(() => f.value.focus()), e.headingText(s.value)));
    return Ff(a, (g) => {
      g.length && Pw(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: v,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: m
    };
  }
});
const Ws = (e, o, r, s, a) => {
  const u = Os("featherForm", !1);
  if (s && u && e.value) {
    const c = Pf("");
    ap("validationErrorMessage", c);
    const f = () => {
      if (a && Fw(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return s.validateSync(o.value), c.value = "", { success: !0 };
      } catch (g) {
        const y = g;
        return c.value = y.errors[0], {
          success: !1,
          message: y.errors[0],
          inputId: e.value,
          label: r
        };
      }
    }, v = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && Fw(a) && Ff(a, () => {
      u.runValidation();
    }), Ff(e, (g, y) => {
      g && u && u.register(g, v), y && u && u.deregister(y);
    }, { immediate: !0 }), Fx(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Hs = (e) => ({
  inherittedAttrs: tl(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), zs = {
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
}, qs = (e) => {
  ap("subTextOptions", e);
}, tc = {
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
}, nc = (e) => {
  ap("wrapperOptions", e);
}, ou = window.Vue.ref, pL = window.Vue.watch, hL = window.Vue.watchEffect, Uw = window.Vue.computed, zd = window.Vue.provide, e1 = (e, o, r, s, a) => {
  const u = ou([]), c = ou(), f = ou(), m = ou();
  hL(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((A) => A.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let A = u.value.filter((T) => !T.disabled);
      A = A.length ? A : u.value, f.value = A[0], f.value.first = !0;
    }
  }), pL(c, (S, A) => {
    A && (A.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, g = Uw(() => c.value || f.value), y = _x(g, u, v), b = Uw(() => be("feather-radio-group"));
  m.value = b.value;
  const { validate: D } = Ws(m, e, r, s, a);
  return zd("register", (S) => {
    u.value = [...u.value, S], m.value === b.value && (m.value = S.id);
  }), zd("select", v), zd("blur", (S) => {
    o("blur", S);
  }), {
    keydown: (S) => {
      switch (S.keyCode) {
        case 13:
        case 32:
          c.value ? v(c.value) : f.value && v(f.value);
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
    validate: D,
    firstElementId: m,
    groupId: b
  };
};
var mL = Object.defineProperty, wL = Object.defineProperties, vL = Object.getOwnPropertyDescriptors, Ww = Object.getOwnPropertySymbols, _L = Object.prototype.hasOwnProperty, gL = Object.prototype.propertyIsEnumerable, Hw = (e, o, r) => o in e ? mL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, As = (e, o) => {
  for (var r in o || (o = {}))
    _L.call(o, r) && Hw(e, r, o[r]);
  if (Ww)
    for (var r of Ww(o))
      gL.call(o, r) && Hw(e, r, o[r]);
  return e;
}, t1 = (e, o) => wL(e, vL(o));
const Rr = window.Vue.defineComponent, Ga = window.Vue.inject, Pu = window.Vue.computed, Ya = window.Vue.ref, Yn = window.Vue.resolveComponent, Tn = window.Vue.openBlock, sl = window.Vue.createElementBlock, n1 = window.Vue.normalizeClass, Lo = window.Vue.renderSlot, Dr = window.Vue.createBlock, nl = window.Vue.createCommentVNode, Fu = window.Vue.createElementVNode, $L = window.Vue.withModifiers, oc = window.Vue.createVNode, o1 = window.Vue.toRef, Uf = window.Vue.mergeProps, ir = window.Vue.withCtx, yL = window.Vue.h, bL = window.Vue.provide;
var Pr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const CL = {
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
}, VL = Rr({
  props: CL,
  setup(e) {
    const o = Ga("isCondensed", null), r = Pu(() => o || e.condensed), s = Ya(!1);
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
    FeatherRipple: Br
  }
}), EL = ["aria-disabled"];
function SL(e, o, r, s, a, u) {
  const c = Yn("FeatherRipple");
  return Tn(), sl("div", {
    class: n1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Lo(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Tn(), Dr(c, { key: 0 })) : nl("", !0)
  ], 42, EL);
}
var rc = /* @__PURE__ */ Pr(VL, [["render", SL], ["__scopeId", "data-v-44d413dc"]]);
const IL = {
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
}, kL = Rr({
  emits: ["delete"],
  props: IL,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: Ps
    };
  },
  components: {
    FeatherIcon: X
  }
}), AL = { class: "chip-delete" }, TL = ["aria-label", "aria-describedby"];
function xL(e, o, r, s, a, u) {
  const c = Yn("FeatherIcon");
  return Tn(), sl("span", AL, [
    Fu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = $L((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      oc(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, TL)
  ]);
}
var LL = /* @__PURE__ */ Pr(kL, [["render", xL], ["__scopeId", "data-v-4bae6cb4"]]);
const ML = Rr({
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
}), NL = ["title"];
function DL(e, o, r, s, a, u) {
  return Tn(), sl("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Lo(e.$slots, "default", {}, void 0, !0)
  ], 8, NL);
}
var ic = /* @__PURE__ */ Pr(ML, [["render", DL], ["__scopeId", "data-v-1a0445b2"]]);
const OL = {}, BL = {
  class: "chip-icon",
  role: "presentation"
};
function RL(e, o) {
  return Tn(), sl("span", BL, [
    Lo(e.$slots, "default", {}, void 0, !0)
  ]);
}
var sc = /* @__PURE__ */ Pr(OL, [["render", RL], ["__scopeId", "data-v-2230176f"]]);
const zw = {
  delete: "Remove"
}, PL = Rr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => zw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Qu(o1(e, "labels"), zw), s = Pu(() => be("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = As({}, o.attrs);
    return e.disabled && delete u.onClick, t1(As({}, r), {
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
    Chip: rc,
    DeleteIcon: LL,
    Label: ic,
    PreIcon: sc
  }
}), FL = ["aria-disabled"];
function UL(e, o, r, s, a, u) {
  const c = Yn("PreIcon"), f = Yn("Label"), m = Yn("DeleteIcon"), v = Yn("Chip");
  return Tn(), Dr(v, Uf(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: ir(() => [
      Fu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Fu("span", Uf(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Tn(), Dr(c, { key: 0 }, {
            default: ir(() => [
              Lo(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : nl("", !0),
          oc(f, { id: e.chipTextId }, {
            default: ir(() => [
              Lo(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, FL),
      e.canDelete ? (Tn(), Dr(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (g) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : nl("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var WL = /* @__PURE__ */ Pr(PL, [["render", UL], ["__scopeId", "data-v-48b2704a"]]);
const HL = Rr({
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
    Chip: rc,
    Label: ic,
    PreIcon: sc
  }
}), zL = ["aria-disabled"];
function qL(e, o, r, s, a, u) {
  const c = Yn("PreIcon"), f = Yn("Label"), m = Yn("Chip");
  return Tn(), Dr(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: ir(() => [
      Fu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Tn(), Dr(c, { key: 0 }, {
          default: ir(() => [
            Lo(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : nl("", !0),
        oc(f, null, {
          default: ir(() => [
            Lo(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, zL)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var GL = /* @__PURE__ */ Pr(HL, [["render", qL], ["__scopeId", "data-v-3e0c4eba"]]);
const YL = Rr({
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
    const o = Ya(!1), r = Ya(!1), s = Pu(() => be("chip-label-id")), a = Pu(() => o.value || r.value ? 0 : -1), u = Ya(), c = () => {
      u.value.$el.focus();
    }, f = Ga("register", (b) => {
    }), m = Ga("blur", (b) => {
    }), v = Ga("select", (b) => {
    }), g = {
      first: o,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(g), {
      labelId: s,
      tabindex: a,
      first: o,
      blur: m,
      click: () => {
        v(g);
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
    Chip: rc,
    Label: ic,
    PreIcon: sc
  }
});
function jL(e, o, r, s, a, u) {
  const c = Yn("PreIcon"), f = Yn("Label"), m = Yn("Chip");
  return Tn(), Dr(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: n1(["focus hover", { selected: e.checked }]),
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
    default: ir(() => [
      e.hasIcon ? (Tn(), Dr(c, { key: 0 }, {
        default: ir(() => [
          Lo(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : nl("", !0),
      oc(f, { id: e.labelId }, {
        default: ir(() => [
          Lo(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var ZL = /* @__PURE__ */ Pr(YL, [["render", jL], ["__scopeId", "data-v-bbcc2f70"]]);
const KL = {
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
}, qw = Rr({
  props: KL,
  setup() {
    return { format: Ga("chipListFormat", "") };
  },
  render() {
    const e = (o) => yL(o, As(As({}, this.$props), this.$attrs), As({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(WL) : this.format === "radio" ? e(ZL) : e(GL);
  }
}), JL = {
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
}, XL = Rr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: JL,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    bL("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = o1(e, "modelValue");
      return t1(As({
        attrs: {
          role: "radiogroup"
        }
      }, e1(c, o.emit, e.label, {}, Ya(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), QL = ["aria-label"];
function eM(e, o, r, s, a, u) {
  return Tn(), sl("div", Uf(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Lo(e.$slots, "default", {}, void 0, !0)
  ], 16, QL);
}
var tM = /* @__PURE__ */ Pr(XL, [["render", eM], ["__scopeId", "data-v-1e06f41d"]]);
const nM = window.Vue.defineComponent, oM = window.Vue.normalizeClass, rM = window.Vue.openBlock, iM = window.Vue.createElementBlock, sM = window.Vue.createCommentVNode, aM = /* @__PURE__ */ nM({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (rM(), iM("span", {
      key: 0,
      class: oM(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : sM("", !0);
  }
});
const lM = /* @__PURE__ */ Ve(aM, [["__scopeId", "data-v-e08880d6"]]), uM = window.Vue.defineComponent, Ca = window.Vue.unref, r1 = window.Vue.createTextVNode, qd = window.Vue.normalizeClass, Gd = window.Vue.withCtx, cM = window.Vue.createVNode, dM = window.Vue.renderList, fM = window.Vue.Fragment, ru = window.Vue.openBlock, pM = window.Vue.createElementBlock, Yd = window.Vue.createBlock, Gw = window.Vue.createCommentVNode, hM = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const mM = /* @__PURE__ */ r1(" ALL "), Yw = window.Vue.ref, wM = window.Vue.watch, vM = window.Vue.computed, _M = window.Vue.reactive, gM = /* @__PURE__ */ uM({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: o }) {
    var m;
    const r = e, s = Yw(!1), a = vM(() => Oe.exports.keys(Oe.exports.groupBy(r.alarms, r.property))), u = Yw(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), c = _M({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((g) => g !== "all"), u.value.includes(v) ? u.value = u.value.filter((g) => g !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return wM(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (v, g) => Ca(a).length > 0 ? (ru(), Yd(Ca(tM), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: qd({ vertical: r.isVertical })
    }, {
      default: Gd(() => [
        cM(Ca(qw), {
          class: qd({ clicked: u.value.includes("all") }),
          onClick: g[0] || (g[0] = (y) => f("all"))
        }, {
          default: Gd(() => [
            mM
          ]),
          _: 1
        }, 8, ["class"]),
        (ru(!0), pM(fM, null, dM(Ca(a), (y) => (ru(), Yd(Ca(qw), {
          class: qd([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: (b) => f(y)
        }, {
          default: Gd(() => [
            e.property == "severity" ? (ru(), Yd(lM, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : Gw("", !0),
            r1(hM(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Gw("", !0);
  }
});
const $M = /* @__PURE__ */ Ve(gM, [["__scopeId", "data-v-f000b5a0"]]);
const yM = window.Vue.watch, bM = window.Vue.onBeforeUnmount, CM = window.Vue.ref, VM = window.Vue.onMounted, EM = (e) => {
  const o = CM(!1);
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
  return VM(() => {
    const c = yM(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    bM(() => {
      c(), u();
    });
  }), o;
}, SM = window.Vue.watch, IM = window.Vue.onBeforeUnmount, kM = window.Vue.ref, AM = window.Vue.onMounted, TM = (e, o) => {
  const r = kM(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return AM(() => {
    const c = SM(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    IM(() => {
      c(), u();
    });
  }), r;
}, xM = window.Vue.watch, LM = window.Vue.onBeforeUnmount, MM = window.Vue.ref, i1 = (e, o) => {
  const r = MM(!1);
  let s = !1;
  const a = (m) => {
    o(m), s = !1;
  };
  function u(m) {
    s || (requestAnimationFrame(() => a(m)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = xM([e, r], ([m, v], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", u, !0), v && m ? m.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return LM(() => {
    f(), c();
  }), r;
}, NM = window.Vue.defineComponent, er = window.Vue.ref, jw = window.Vue.toRef, DM = window.Vue.onMounted, OM = window.Vue.watch, Zw = window.Vue.computed, BM = window.Vue.nextTick, Kw = window.Vue.openBlock, Jw = window.Vue.createElementBlock, Xw = window.Vue.renderSlot, RM = window.Vue.normalizeClass, PM = window.Vue.normalizeStyle, FM = window.Vue.createCommentVNode;
var UM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WM = {
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
}, HM = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, zM = NM({
  emits: HM,
  props: WM,
  setup(e, o) {
    const r = er(), s = er(), a = jw(e, "open"), u = jw(e, "noExpand"), c = er("auto"), f = er(), m = er(e.triggerId || be("feather-menu-trigger")), v = er(be("feather-menu-dropdown")), g = er(""), y = er("");
    DM(() => {
      f.value = window;
    });
    const b = er(!1), D = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), O = () => {
      if (!s.value)
        return;
      const k = r.value.getBoundingClientRect();
      b.value = !0, c.value = "auto", BM(() => {
        let { height: U, width: W } = s.value.getBoundingClientRect();
        const K = D(), Me = K.height, pe = K.width;
        e.fill && W < k.width ? (c.value = k.width + "px", W = k.width) : c.value = W + "px";
        let Ae = 0;
        Me - k.bottom < U && k.top >= U ? (Ae = k.top - U, e.cover && (Ae += k.height)) : (Ae = k.bottom, e.cover && (Ae -= k.height));
        let Ee = e.right ? k.right - W : k.left;
        !e.right && k.right >= W && pe - k.left < W && (Ee = k.right - W), e.right && k.right <= W && pe - k.left > W && (Ee = k.left), y.value = `${Ee}px`, g.value = `${Ae}px`, b.value = !1;
      });
    }, B = TM(r, (k) => {
      o.emit("outside-click", k);
    }), S = EM(O), A = i1(f, O);
    OM([a, s], ([k, U]) => {
      k && U && O(), B.value = k, S.value = k, A.value = k;
    });
    const T = Zw(() => {
      const k = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = v.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), P = Zw(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: g,
      positionLeft: y,
      triggerId: m,
      triggerAttrs: T,
      triggerListeners: P,
      menuId: v,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: O,
      calculating: b
    };
  }
}), qM = ["data-ref-id"], GM = ["data-ref-id", "id"];
function YM(e, o, r, s, a, u) {
  return Kw(), Jw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Xw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Kw(), Jw("div", {
      key: 0,
      class: RM(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: PM({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Xw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, GM)) : FM("", !0)
  ], 8, qM);
}
var s1 = /* @__PURE__ */ UM(zM, [["render", YM], ["__scopeId", "data-v-f75af406"]]), jM = {
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
const ZM = window.Vue.openBlock, KM = window.Vue.createElementBlock, JM = window.Vue.createElementVNode;
var XM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QM = {}, eN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tN = /* @__PURE__ */ JM("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), nN = [
  tN
];
function oN(e, o) {
  return ZM(), KM("svg", eN, nN);
}
var rN = /* @__PURE__ */ XM(QM, [["render", oN]]);
const iN = window.Vue.openBlock, sN = window.Vue.createElementBlock, lp = window.Vue.createElementVNode;
var aN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lN = {}, uN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cN = /* @__PURE__ */ lp("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), dN = /* @__PURE__ */ lp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), fN = /* @__PURE__ */ lp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), pN = [
  cN,
  dN,
  fN
];
function hN(e, o) {
  return iN(), sN("svg", uN, pN);
}
var mN = /* @__PURE__ */ aN(lN, [["render", hN]]);
const wN = window.Vue.openBlock, vN = window.Vue.createElementBlock, _N = window.Vue.createElementVNode;
var gN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $N = {}, yN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bN = /* @__PURE__ */ _N("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), CN = [
  bN
];
function VN(e, o) {
  return wN(), vN("svg", yN, CN);
}
var al = /* @__PURE__ */ gN($N, [["render", VN]]);
const ol = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
};
const ue = {
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
const EN = window.Vue.defineComponent, SN = window.Vue.openBlock, IN = window.Vue.createElementBlock, kN = window.Vue.normalizeClass, AN = window.Vue.pushScopeId, TN = window.Vue.popScopeId, Wf = window.Vue.createElementVNode;
var xN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const LN = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, MN = {
  click: (e) => !0
}, NN = EN({
  emits: MN,
  props: LN,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), a1 = (e) => (AN("data-v-07e020f5"), e = e(), TN(), e), DN = /* @__PURE__ */ a1(() => /* @__PURE__ */ Wf("div", { class: "track" }, null, -1)), ON = /* @__PURE__ */ a1(() => /* @__PURE__ */ Wf("div", { class: "switcher" }, [
  /* @__PURE__ */ Wf("div", { class: "switch-circle" })
], -1)), BN = [
  DN,
  ON
];
function RN(e, o, r, s, a, u) {
  return SN(), IN("div", {
    class: kN(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, BN, 2);
}
var PN = /* @__PURE__ */ xN(NN, [["render", RN], ["__scopeId", "data-v-07e020f5"]]), FN = Object.defineProperty, UN = Object.defineProperties, WN = Object.getOwnPropertyDescriptors, Qw = Object.getOwnPropertySymbols, HN = Object.prototype.hasOwnProperty, zN = Object.prototype.propertyIsEnumerable, ev = (e, o, r) => o in e ? FN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, tv = (e, o) => {
  for (var r in o || (o = {}))
    HN.call(o, r) && ev(e, r, o[r]);
  if (Qw)
    for (var r of Qw(o))
      zN.call(o, r) && ev(e, r, o[r]);
  return e;
}, nv = (e, o) => UN(e, WN(o));
const up = window.Vue.defineComponent, di = window.Vue.h, qN = window.Vue.openBlock, GN = window.Vue.createElementBlock, YN = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var l1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const jN = {
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
}, ZN = up({
  inheritAttrs: !1,
  props: jN,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = di("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = di("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = di("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : di(Br);
    if (this.asLi)
      return di("li", nv(tv({}, this.$attrs), {
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
    const u = di("a", nv(tv({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return di("li", {}, [u]);
  }
});
var ll = /* @__PURE__ */ l1(ZN, [["__scopeId", "data-v-7c46b2b3"]]);
up({
  components: {
    FeatherListItem: ll
  }
});
const KN = {}, JN = { class: "feather-list" };
function XN(e, o) {
  return qN(), GN("ul", JN, [
    YN(e.$slots, "default", {}, void 0, !0)
  ]);
}
var cp = /* @__PURE__ */ l1(KN, [["render", XN], ["__scopeId", "data-v-941a1d50"]]);
const QN = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, eD = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
up({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: QN,
  props: eD,
  computed: {
    labelId() {
      return be("switch-label");
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
      (e.keyCode === ue.SPACE || e.keyCode === ue.ENTER) && this.updateValue(), e.keyCode === ue.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: PN, FeatherListItem: ll }
});
var tD = Object.defineProperty, nD = Object.defineProperties, oD = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, rD = Object.prototype.hasOwnProperty, iD = Object.prototype.propertyIsEnumerable, rv = (e, o, r) => o in e ? tD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xn = (e, o) => {
  for (var r in o || (o = {}))
    rD.call(o, r) && rv(e, r, o[r]);
  if (ov)
    for (var r of ov(o))
      iD.call(o, r) && rv(e, r, o[r]);
  return e;
}, sD = (e, o) => nD(e, oD(o));
const Gs = window.Vue.defineComponent, ke = window.Vue.openBlock, ht = window.Vue.createElementBlock, hn = window.Vue.createElementVNode, uo = window.Vue.toDisplayString, Gn = window.Vue.createCommentVNode, lt = window.Vue.resolveComponent, qn = window.Vue.createBlock, Ut = window.Vue.withCtx, Ts = window.Vue.Fragment, ja = window.Vue.renderList, mn = window.Vue.createVNode, dp = window.Vue.withModifiers, Si = window.Vue.normalizeClass, Hf = window.Vue.renderSlot, u1 = window.Vue.createTextVNode, aD = window.Vue.pushScopeId, lD = window.Vue.popScopeId, c1 = window.Vue.reactive, d1 = window.Vue.nextTick, jd = window.Vue.markRaw, Zd = window.Vue.toRef, iv = window.Vue.computed, uD = window.Vue.toRefs, ds = window.Vue.ref, Kd = window.Vue.mergeProps, sv = window.Vue.toHandlers, iu = window.Vue.withDirectives, su = window.Vue.vShow;
var ac = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, fp = {
  query: {
    type: String
  }
}, Li = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cD = Gs({
  mixins: [],
  props: xn(xn({
    text: {
      type: String,
      required: !0
    }
  }, ac), fp),
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
}), dD = {
  key: 0,
  class: "highlight"
}, fD = { key: 1 };
function pD(e, o, r, s, a, u) {
  return ke(), ht("span", null, [
    hn("span", null, uo(e.beginning), 1),
    e.highlighted ? (ke(), ht("span", dD, uo(e.highlighted), 1)) : Gn("", !0),
    e.end ? (ke(), ht("span", fD, uo(e.end), 1)) : Gn("", !0)
  ]);
}
var f1 = /* @__PURE__ */ Li(cD, [["render", pD], ["__scopeId", "data-v-8abe2492"]]);
const hD = Gs({
  emits: ["select", "deselect"],
  props: xn(xn({
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
  }, ac), fp),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        ol(o, r.$el);
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
    FeatherList: cp,
    FeatherListItem: ll,
    Highlighter: f1
  }
}), mD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function wD(e, o, r, s, a, u) {
  const c = lt("Highlighter"), f = lt("FeatherListItem"), m = lt("FeatherList");
  return ke(), qn(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Ut(() => [
      (ke(!0), ht(Ts, null, ja(e.items, (v, g) => (ke(), ht(Ts, {
        key: v[e.textProp]
      }, [
        mn(f, {
          "as-li": "",
          id: e.getId(g),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(g),
          selected: e.isSelected(v),
          onClick: dp((y) => e.select(v), ["stop"])
        }, {
          default: Ut(() => [
            mn(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (ke(), ht("span", mD, uo(e.newLabel), 1)) : Gn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (ke(), ht("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Gn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var vD = /* @__PURE__ */ Li(hD, [["render", wD], ["__scopeId", "data-v-f623434a"]]);
const _D = Gs({
  emits: ["select"],
  props: xn(xn({
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
  }, ac), fp),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        ol(o, r);
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
    Highlighter: f1
  }
}), gD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, $D = ["aria-multiselectable"], yD = { role: "row" }, bD = ["aria-selected", "onClick"], CD = ["id", "aria-selected"], VD = { key: 1 };
function ED(e, o, r, s, a, u) {
  const c = lt("Highlighter");
  return ke(), ht("div", gD, [
    hn("table", {
      class: Si(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      hn("thead", null, [
        hn("tr", yD, [
          (ke(!0), ht(Ts, null, ja(e.config, (f) => (ke(), ht("th", {
            key: f.title
          }, uo(f.title), 1))), 128))
        ])
      ]),
      hn("tbody", null, [
        (ke(!0), ht(Ts, null, ja(e.items, (f, m) => (ke(), ht("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Si({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: dp((v) => e.select(f), ["stop"])
        }, [
          (ke(!0), ht(Ts, null, ja(e.config, (v, g) => (ke(), ht("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Si({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            v.prop === e.textProp ? (ke(), qn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (ke(), ht("p", VD, uo(f[v.prop]), 1))
          ], 10, CD))), 128))
        ], 10, bD))), 128))
      ])
    ], 10, $D)
  ], 512);
}
var SD = /* @__PURE__ */ Li(_D, [["render", ED], ["__scopeId", "data-v-58c88fd1"]]);
const ID = Gs({
  components: {
    FeatherList: cp,
    FeatherListItem: ll
  }
});
function kD(e, o, r, s, a, u) {
  const c = lt("FeatherListItem"), f = lt("FeatherList");
  return ke(), qn(f, { class: "result-list" }, {
    default: Ut(() => [
      mn(c, { "as-li": "" }, {
        default: Ut(() => [
          Hf(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var AD = /* @__PURE__ */ Li(ID, [["render", kD], ["__scopeId", "data-v-06b752c6"]]);
const TD = Gs({
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
    FeatherIcon: X,
    Cancel: Ps,
    BaseChip: rc,
    BaseChipLabel: ic,
    BaseChipPreIcon: sc
  }
});
function xD(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("BaseChipPreIcon"), m = lt("BaseChipLabel"), v = lt("Cancel"), g = lt("BaseChip");
  return ke(), qn(g, {
    class: Si(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Ut(() => [
      e.showPreIcon ? (ke(), qn(f, { key: 0 }, {
        default: Ut(() => {
          var y, b;
          return [
            mn(c, {
              icon: (y = e.pre) == null ? void 0 : y.icon,
              title: (b = e.pre) == null ? void 0 : b.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Gn("", !0),
      mn(m, null, {
        default: Ut(() => [
          u1(uo(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Gn("", !0) : (ke(), ht("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = dp((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
      }, [
        mn(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Ut(() => [
            mn(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var LD = /* @__PURE__ */ Li(TD, [["render", xD], ["__scopeId", "data-v-e0fc6ac0"]]);
const MD = {}, ND = (e) => (aD("data-v-aa720e06"), e = e(), lD(), e), DD = { class: "spinner-container" }, OD = /* @__PURE__ */ ND(() => /* @__PURE__ */ hn("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ hn("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), BD = [
  OD
];
function RD(e, o) {
  return ke(), ht("div", DD, BD);
}
var PD = /* @__PURE__ */ Li(MD, [["render", RD], ["__scopeId", "data-v-aa720e06"]]), lc = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(lc || {});
const p1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, FD = xn(xn(xn({
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
    validator: (e) => !!lc[e]
  },
  labels: {
    type: Object,
    default: () => p1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, ac), zs), tc), UD = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, WD = (e, o, r, s) => {
  if (r.toLowerCase() === lc.multi) {
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
        if (u.value && u.value.filter((v) => v[e.textProp.value] === f[e.textProp.value]).length)
          return;
        const m = u.value ? [...u.value, f] : [f];
        s("update:modelValue", m), c(m);
      },
      removeItem(f) {
        const m = u.value.findIndex((v) => {
          if (f[e.textProp.value] === v[e.textProp.value])
            return !0;
        });
        debugger;
        if (m > -1) {
          const v = u.value.slice(0);
          v.splice(m, 1), s("update:modelValue", v), c(v), e.input.value.focus();
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
}, HD = () => {
  const e = c1({
    row: -1
  }), o = (u) => {
    d1(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === ue.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ue.UP) {
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
}, zD = (e) => {
  const o = c1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    d1(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === ue.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const m = o.row, v = o.col;
        a(), r(m + 1, v);
      }
      return !0;
    }
    if (c.keyCode === ue.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const m = o.row, v = o.col;
        a(), r(m - 1, v);
      }
      return !0;
    }
    if (c.keyCode === ue.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const m = o.col, v = o.row;
        a(), r(v, m + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const m = o.row;
        a(), r(m + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === ue.LEFT && o.row !== -1) {
      if (c.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const m = o.row;
        a(), r(m - 1, e.length - 1);
      } else if (o.col > 0) {
        const m = o.col, v = o.row;
        a(), r(v, m - 1);
      }
      return !0;
    }
    if (c.keyCode === ue.END && o.row !== -1) {
      c.preventDefault();
      const m = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : m, e.length - 1), !0;
    }
    if (c.keyCode === ue.HOME && o.row !== -1) {
      c.preventDefault();
      const m = o.row;
      return a(), r(c.ctrlKey ? 0 : m, 0), !0;
    }
    return !1;
  }, a = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: a, handleKeyPress: s, active: o, first: () => {
    a(), r(0, 0);
  } };
}, qD = Gs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: UD,
  props: FD,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== lc.multi;
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
      return be("result-item");
    },
    minCharWarningId() {
      return be("min-char-warning");
    },
    subTextId() {
      return be("feather-autocomplete-description");
    },
    resultsId() {
      return be("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return be("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return jd(rN);
    },
    minCharIcon() {
      return jd(mN);
    },
    dropdownIcon() {
      return jd(al);
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
        ol(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ol(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = be("active-chip"), this.activeChipId;
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
      r !== void 0 && (Ai(this.typingTimeout), this.typingTimeout = ki(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ue.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ue.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === ue.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === ue.ENTER || e.keyCode === ue.SPACE || e.keyCode === ue.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === ue.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === ue.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ue.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ue.DELETE || e.keyCode === ue.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = Qu(Zd(e, "labels"), p1);
    qs(e), nc(e);
    let s;
    e.gridConfig ? s = zD(e.gridConfig) : s = HD();
    const a = Zd(e, "id"), u = iv(() => a.value ? a.value : be("feather-autocomplete-input")), { validate: c } = Ws(u, Zd(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: v, allowNew: g, type: y, minChar: b } = uD(e), D = ds(!1), O = ds(!1), R = ds(!1), B = ds(""), S = ds([]), A = ds(), T = iv(() => A.value), P = () => {
      D.value && !O.value && (B.value && B.value.length >= b.value && o.emit("search", B.value), b.value <= 0 && o.emit("search", B.value || ""), S.value = [], s.reset());
    }, k = WD({
      selectionLimit: f,
      selectionLimitReached: O,
      modelValue: m,
      textProp: v,
      allowNew: g,
      forceCloseResults: R,
      query: B,
      internalResults: S,
      input: T,
      emitSearch: P
    }, s, y.value, o.emit);
    return sD(xn(xn({}, r), Hs(o.attrs)), {
      query: B,
      internalResults: S,
      selectionLimitReached: O,
      forceCloseResults: R,
      hasFocus: D,
      strategy: k,
      emitSearch: P,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: A,
      incomingId: a,
      inputRef: T,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: ec,
    InputSubText: Us,
    AutocompleteResults: vD,
    AutocompleteResultsGrid: SD,
    Chip: LD,
    MenuMessage: AD,
    FeatherIcon: X,
    FeatherMenu: s1,
    Spinner: PD
  }
}), GD = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, YD = ["id"], jD = { "data-ref-id": "feather-autocomplete-no-results" }, ZD = { "data-ref-id": "feather-autocomplete-selection-limit" }, KD = { "data-ref-id": "feather-autocomplete-min-char" };
function JD(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("Chip"), m = lt("InputWrapper"), v = lt("AutocompleteResults"), g = lt("AutocompleteResultsGrid"), y = lt("MenuMessage"), b = lt("Spinner"), D = lt("FeatherMenu"), O = lt("InputSubText");
  return ke(), ht("div", Kd(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    mn(D, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Si(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Ut(({ attrs: R, on: B }) => [
        mn(m, Kd(xn(xn({}, R), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, sv(B), { ref: "scroll" }), {
          pre: Ut(() => [
            Hf(e.$slots, "pre", {}, () => [
              mn(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Ut(() => [
            mn(c, {
              icon: e.dropdownIcon,
              class: Si(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Ut(() => [
            hn("div", {
              class: Si(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              hn("div", GD, null, 512),
              hn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, uo(e.selectedDescribedByText), 9, YD),
              (ke(!0), ht(Ts, null, ja(e.modelValueList, (S, A) => iu((ke(), qn(f, {
                key: S[e.textProp],
                role: "button",
                id: A === e.activeChipIndex ? e.activeChipId : null,
                focused: A === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (T) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [su, !e.singleSelect]
              ])), 128)),
              hn("textarea", Kd(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, sv(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Ut(() => [
        e.gridConfig ? Gn("", !0) : iu((ke(), qn(v, {
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
          [su, e.showResults]
        ]),
        e.gridConfig ? iu((ke(), qn(g, {
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
          [su, e.showResults]
        ]) : Gn("", !0),
        e.showNoResults ? (ke(), qn(y, { key: 2 }, {
          default: Ut(() => [
            hn("span", jD, uo(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Gn("", !0),
        e.showSelectionLimit ? (ke(), qn(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Ut(() => [
            mn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            hn("span", ZD, uo(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Gn("", !0),
        e.minChar ? iu((ke(), qn(y, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Ut(() => [
            mn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            hn("span", KD, [
              Hf(e.$slots, "min-char", {}, () => [
                u1(uo(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [su, e.showMinCharWarning]
        ]) : Gn("", !0),
        e.showLoading ? (ke(), qn(b, { key: 5 })) : Gn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    mn(O, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var XD = /* @__PURE__ */ Li(qD, [["render", JD], ["__scopeId", "data-v-43a7e951"]]);
var QD = Object.defineProperty, eO = Object.defineProperties, tO = Object.getOwnPropertyDescriptors, av = Object.getOwnPropertySymbols, nO = Object.prototype.hasOwnProperty, oO = Object.prototype.propertyIsEnumerable, lv = (e, o, r) => o in e ? QD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ku = (e, o) => {
  for (var r in o || (o = {}))
    nO.call(o, r) && lv(e, r, o[r]);
  if (av)
    for (var r of av(o))
      oO.call(o, r) && lv(e, r, o[r]);
  return e;
}, h1 = (e, o) => eO(e, tO(o));
const m1 = window.Vue.defineComponent, rO = window.Vue.ref, Za = window.Vue.computed, iO = window.Vue.reactive, uv = window.Vue.watch, Jd = window.Vue.inject, w1 = window.Vue.resolveComponent, zf = window.Vue.openBlock, v1 = window.Vue.createElementBlock, Or = window.Vue.createElementVNode, sO = window.Vue.createBlock, aO = window.Vue.createCommentVNode, _1 = window.Vue.renderSlot, lO = window.Vue.pushScopeId, uO = window.Vue.popScopeId, Xd = window.Vue.toRef, cv = window.Vue.mergeProps, cO = window.Vue.toDisplayString, dO = window.Vue.createVNode;
var g1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fO = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, pO = m1({
  props: fO,
  setup(e) {
    const o = rO(), r = () => {
      o.value.focus();
    }, s = Za(() => be("feather-radio-button")), a = iO({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Za(() => be("radio-label-id")), c = Za(() => a.first || a.checked ? 0 : -1);
    uv(() => e.disabled, (y) => {
      a.disabled = y;
    }, { immediate: !0 }), uv(() => e.value, (y) => {
      a.value = y;
    }, { immediate: !0 });
    const f = Jd("register", (y) => {
    }), m = Jd("blur", (y) => {
    }), v = Jd("select", (y) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: m,
      click: () => {
        v(a);
      },
      input: o,
      id: s
    };
  },
  components: {
    FeatherRipple: Br
  }
}), hO = (e) => (lO("data-v-24790cf0"), e = e(), uO(), e), mO = { class: "layout-container" }, wO = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], vO = { class: "radio hover focus" }, _O = /* @__PURE__ */ hO(() => /* @__PURE__ */ Or("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Or("svg", { class: "dot" }, [
    /* @__PURE__ */ Or("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), gO = ["id"];
function $O(e, o, r, s, a, u) {
  const c = w1("feather-ripple");
  return zf(), v1("div", mO, [
    Or("div", {
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
      Or("div", vO, [
        _O,
        e.vm.disabled ? aO("", !0) : (zf(), sO(c, {
          key: 0,
          center: ""
        }))
      ]),
      Or("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        _1(e.$slots, "default", {}, void 0, !0)
      ], 8, gO)
    ], 40, wO)
  ]);
}
var qf = /* @__PURE__ */ g1(pO, [["render", $O], ["__scopeId", "data-v-24790cf0"]]);
const yO = h1(ku({}, zs), {
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
}), bO = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, CO = m1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: yO,
  emits: bO,
  setup(e, o) {
    qs(e);
    const r = Xd(e, "error"), s = Xd(e, "modelValue"), a = Za(() => be("feather-input-description")), u = Za(() => {
      const c = h1(ku({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return ku(ku({
      descriptionId: a,
      attrs: u
    }, e1(s, o.emit, e.label, e.schema, Xd(e, "error"))), Hs(o.attrs));
  },
  components: {
    InputSubText: Us
  }
}), VO = ["for"], EO = ["id"];
function SO(e, o, r, s, a, u) {
  const c = w1("InputSubText");
  return zf(), v1("div", cv(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Or("label", {
      for: e.groupId,
      class: "group-label"
    }, cO(e.label), 9, VO),
    Or("div", cv(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      _1(e.$slots, "default", {}, void 0, !0)
    ], 16, EO),
    dO(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var $1 = /* @__PURE__ */ g1(CO, [["render", SO], ["__scopeId", "data-v-6775aeb9"]]);
const IO = window.Vue.defineComponent, kO = window.Vue.renderList, AO = window.Vue.Fragment, dv = window.Vue.openBlock, TO = window.Vue.createElementBlock, xO = window.Vue.toDisplayString, LO = window.Vue.createTextVNode, fv = window.Vue.unref, pv = window.Vue.withCtx, MO = window.Vue.createVNode, NO = window.Vue.createBlock, DO = window.Vue.watch, OO = window.Vue.ref, BO = /* @__PURE__ */ IO({
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
    ], a = OO(r.preSelected || s[0].id);
    return DO(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (dv(), NO(fv($1), {
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
      default: pv(() => [
        (dv(), TO(AO, null, kO(s, (f) => MO(fv(qf), {
          value: f.id,
          key: f.id
        }, {
          default: pv(() => [
            LO(xO(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const RO = /* @__PURE__ */ Ve(BO, [["__scopeId", "data-v-0363302c"]]);
var PO = Object.defineProperty, FO = Object.defineProperties, UO = Object.getOwnPropertyDescriptors, hv = Object.getOwnPropertySymbols, WO = Object.prototype.hasOwnProperty, HO = Object.prototype.propertyIsEnumerable, mv = (e, o, r) => o in e ? PO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Va = (e, o) => {
  for (var r in o || (o = {}))
    WO.call(o, r) && mv(e, r, o[r]);
  if (hv)
    for (var r of hv(o))
      HO.call(o, r) && mv(e, r, o[r]);
  return e;
}, wv = (e, o) => FO(e, UO(o));
const zO = window.Vue.defineComponent, qO = window.Vue.inject, Ea = window.Vue.h;
var GO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const YO = {
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
}, jO = zO({
  inheritAttrs: !1,
  props: YO,
  setup() {
    return { hasTooltip: qO("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Va({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Ea(Br);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Ea(o, wv(Va(Va({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ea(Br, { center: !0 })
      ]);
    }
    const c = Ea("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ea(o, wv(Va(Va({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var we = /* @__PURE__ */ GO(jO, [["__scopeId", "data-v-702d1074"]]);
const ZO = window.Vue.openBlock, KO = window.Vue.createElementBlock, JO = window.Vue.createElementVNode;
var XO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QO = {}, eB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tB = /* @__PURE__ */ JO("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), nB = [
  tB
];
function oB(e, o) {
  return ZO(), KO("svg", eB, nB);
}
var rB = /* @__PURE__ */ XO(QO, [["render", oB]]);
const iB = window.Vue.openBlock, sB = window.Vue.createElementBlock, aB = window.Vue.createElementVNode;
var lB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uB = {}, cB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dB = /* @__PURE__ */ aB("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), fB = [
  dB
];
function pB(e, o) {
  return iB(), sB("svg", cB, fB);
}
var hB = /* @__PURE__ */ lB(uB, [["render", pB]]);
const mB = window.Vue.openBlock, wB = window.Vue.createElementBlock, vB = window.Vue.createElementVNode;
var _B = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gB = {}, $B = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yB = /* @__PURE__ */ vB("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), bB = [
  yB
];
function CB(e, o) {
  return mB(), wB("svg", $B, bB);
}
var y1 = /* @__PURE__ */ _B(gB, [["render", CB]]);
const VB = window.Vue.defineComponent, Eo = window.Vue.unref, fi = window.Vue.createVNode, vv = window.Vue.toDisplayString, or = window.Vue.createElementVNode, b1 = window.Vue.createTextVNode, _v = window.Vue.openBlock, gv = window.Vue.createElementBlock, EB = window.Vue.createCommentVNode, SB = window.Vue.withCtx, IB = window.Vue.vShow, kB = window.Vue.normalizeClass, AB = window.Vue.withDirectives, TB = window.Vue.Fragment, xB = window.Vue.pushScopeId, LB = window.Vue.popScopeId, C1 = (e) => (xB("data-v-d75ae1ee"), e = e(), LB(), e), MB = /* @__PURE__ */ b1(" Filters "), NB = { class: "count" }, DB = { class: "results" }, OB = { class: "total" }, BB = /* @__PURE__ */ b1(" Reset "), RB = /* @__PURE__ */ C1(() => /* @__PURE__ */ or("div", { class: "title" }, "By Severities:", -1)), PB = /* @__PURE__ */ C1(() => /* @__PURE__ */ or("div", { class: "title" }, "By Start Date:", -1)), pi = window.Vue.ref, FB = window.Vue.reactive, UB = window.Vue.markRaw, $v = window.Vue.watch, WB = /* @__PURE__ */ VB({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = UB({
      FilterAlt: rB,
      ExpandLess: hB,
      ExpandMore: al,
      Refresh: y1
    }), a = co(), u = pi(r.isOpen), c = pi(["all"]), f = pi(1), m = pi(r.list), v = pi(!1), g = pi(0), y = pi(null), b = FB({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), D = () => {
      var U, W;
      r.saveFilters && a.filters && (a.filters.node && (b.nodeSelectedValue = a.filters.node), ((U = a.filters) == null ? void 0 : U.severities) && !((W = a.filters) != null && W.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, T());
    }, O = () => {
      b.nodes = a.nodes, b.results = a.nodes;
    };
    $v(
      () => a.nodes,
      () => {
        O();
      }
    ), $v(r, () => {
      m.value = r.list, D();
    });
    const R = (U) => {
      c.value = U, T();
    }, B = (U) => {
      f.value = U, T();
    }, S = (U) => {
      if (!U)
        return b.nodeSelectedValue = void 0, [];
      v.value = !0, b.results = b.nodes.filter((W) => W.label.toLowerCase().indexOf(U) > -1).map((W) => ({
        _text: W.label,
        id: W.id
      })), v.value = !1;
    }, A = () => {
      c.value = ["all"], f.value = 1, b.nodeSelectedValue = void 0, g.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), m.value = r.list;
    }, T = () => {
      g.value = 0;
      let U = r.list;
      b.nodeSelectedValue && b.nodeSelectedValue._text && (g.value++, r.isSituation ? U = U.map((W) => {
        if (W.relatedAlarms.filter(
          (pe) => {
            var Ae;
            return pe.nodeLabel === ((Ae = b.nodeSelectedValue) == null ? void 0 : Ae._text);
          }
        ).length > 0)
          return W;
      }).filter((W) => W) : U = U.filter(
        (W) => {
          var K;
          return W.nodeLabel === ((K = b.nodeSelectedValue) == null ? void 0 : K._text);
        }
      )), c.value.includes("all") || (g.value++, U = U.filter(
        (W) => c.value.includes(W.severity)
      )), f.value !== 1 && (g.value++, U = ET(
        f.value,
        U
      )), m.value = U, r.saveFilters && P(), o("filtered-list", U);
    }, P = () => {
      a.filters = {
        node: b.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, k = () => {
      u.value = !u.value;
    };
    return (U, W) => (_v(), gv(TB, null, [
      r.isOpen ? EB("", !0) : (_v(), gv("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        or("div", null, [
          fi(Eo(X), {
            icon: Eo(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          MB,
          or("span", NB, vv(g.value), 1)
        ]),
        fi(Eo(X), {
          icon: u.value ? Eo(s).ExpandLess : Eo(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      AB(or("div", {
        class: kB(["filters", { collapsed: !r.isOpen }])
      }, [
        or("div", DB, [
          or("div", OB, "Results: " + vv(Eo(m).length), 1),
          fi(Eo(we), {
            class: "btn-reset",
            onClick: A
          }, {
            default: SB(() => [
              fi(Eo(X), {
                icon: Eo(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              BB
            ]),
            _: 1
          })
        ]),
        or("div", null, [
          fi(Eo(XD), {
            ref_key: "autocomplete",
            ref: y,
            label: "Search by node",
            loading: v.value,
            modelValue: b.nodeSelectedValue,
            "onUpdate:modelValue": [
              W[0] || (W[0] = (K) => b.nodeSelectedValue = K),
              T
            ],
            results: b.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          RB,
          fi($M, {
            alarms: r.list,
            onSelectedOption: R,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          or("div", null, [
            PB,
            fi(RO, {
              onFilterDateSelected: B,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [IB, u.value]
      ])
    ], 64));
  }
});
const Ys = /* @__PURE__ */ Ve(WB, [["__scopeId", "data-v-d75ae1ee"]]), HB = window.Vue.openBlock, zB = window.Vue.createElementBlock, qB = window.Vue.createElementVNode;
var GB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const YB = {}, jB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ZB = /* @__PURE__ */ qB("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), KB = [
  ZB
];
function JB(e, o) {
  return HB(), zB("svg", jB, KB);
}
var uc = /* @__PURE__ */ GB(YB, [["render", JB]]);
const XB = window.Vue.openBlock, QB = window.Vue.createElementBlock, V1 = window.Vue.createElementVNode;
var eR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tR = {}, nR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oR = /* @__PURE__ */ V1("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), rR = /* @__PURE__ */ V1("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), iR = [
  oR,
  rR
];
function sR(e, o) {
  return XB(), QB("svg", nR, iR);
}
var aR = /* @__PURE__ */ eR(tR, [["render", sR]]);
const lR = window.Vue.openBlock, uR = window.Vue.createElementBlock, cR = window.Vue.createElementVNode;
var dR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fR = {}, pR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hR = /* @__PURE__ */ cR("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), mR = [
  hR
];
function wR(e, o) {
  return lR(), uR("svg", pR, mR);
}
var vR = /* @__PURE__ */ dR(fR, [["render", wR]]);
const Fr = () => window.VRouter || V0;
const _R = window.Vue.openBlock, gR = window.Vue.createElementBlock, $R = window.Vue.pushScopeId, yR = window.Vue.popScopeId, yv = window.Vue.createElementVNode;
var bR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const CR = {}, VR = (e) => ($R("data-v-2263be39"), e = e(), yR(), e), ER = { class: "spinner-container" }, SR = /* @__PURE__ */ VR(() => /* @__PURE__ */ yv("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ yv("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), IR = [
  SR
];
function kR(e, o) {
  return _R(), gR("div", ER, IR);
}
var xs = /* @__PURE__ */ bR(CR, [["render", kR], ["__scopeId", "data-v-2263be39"]]);
const AR = window.Vue.defineComponent, Qd = window.Vue.unref, TR = window.Vue.createVNode, xR = window.Vue.createElementVNode, LR = window.Vue.withCtx, MR = window.Vue.openBlock, NR = window.Vue.createBlock, DR = window.Vue.pushScopeId, OR = window.Vue.popScopeId, BR = (e) => (DR("data-v-ca5ca6e3"), e = e(), OR(), e), RR = /* @__PURE__ */ BR(() => /* @__PURE__ */ xR("span", null, "New Situation", -1)), PR = window.Vue.markRaw, FR = /* @__PURE__ */ AR({
  __name: "NewSituationBtn",
  setup(e) {
    const o = Fr(), r = PR({
      Add: uc
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (MR(), NR(Qd(we), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: LR(() => [
        TR(Qd(X), {
          icon: Qd(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        RR
      ]),
      _: 1
    }));
  }
});
const E1 = /* @__PURE__ */ Ve(FR, [["__scopeId", "data-v-ca5ca6e3"]]), UR = "/whoami", WR = async () => {
  try {
    const e = await Lt.get(UR);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, HR = window.Pinia.defineStore, zR = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Ti = HR("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await WR();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await kT();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...zR,
        ...r,
        distanceMeasureName: o ? kt.HELLINGER_OPTION : kt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await AT(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await TT();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const o = await xT(e);
      return o ? (this.llmConfig = o, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const o = await NT(e);
      return o && (this.llmUsage = o), o;
    }
  }
}), qR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", GR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", YR = window.Vue.defineComponent, fs = window.Vue.unref, ps = window.Vue.openBlock, hs = window.Vue.createElementBlock, jR = window.Vue.createCommentVNode, S1 = window.Vue.createTextVNode, bv = window.Vue.Fragment, I1 = window.Vue.createElementVNode, ZR = window.Vue.pushScopeId, KR = window.Vue.popScopeId, JR = (e) => (ZR("data-v-ad139137"), e = e(), KR(), e), XR = ["src"], QR = { class: "engine" }, eP = /* @__PURE__ */ S1(" ENGINE "), tP = {
  key: 0,
  class: "type"
}, nP = {
  key: 1,
  class: "type"
}, oP = /* @__PURE__ */ S1(" ENGINE "), rP = /* @__PURE__ */ JR(() => /* @__PURE__ */ I1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Cv = window.Vue.computed, iP = /* @__PURE__ */ YR({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = Fr(), r = Ti(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = Cv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = Cv(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == kt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (ps(), hs("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      fs(a) ? (ps(), hs("img", {
        key: 0,
        src: fs(u) ? fs(GR) : fs(qR),
        class: "icon-type"
      }, null, 8, XR)) : jR("", !0),
      I1("div", QR, [
        fs(a) ? (ps(), hs(bv, { key: 0 }, [
          eP,
          fs(u) ? (ps(), hs("div", tP, "CLUSTERING")) : (ps(), hs("div", nP, "DEEP LEARNING"))
        ], 64)) : (ps(), hs(bv, { key: 1 }, [
          oP,
          rP
        ], 64))
      ])
    ]));
  }
});
const sP = /* @__PURE__ */ Ve(iP, [["__scopeId", "data-v-ad139137"]]);
const aP = {}, lP = window.Vue.openBlock, uP = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const cP = { class: "empty" };
function dP(e, o) {
  return lP(), uP("div", cP, "No results found.");
}
const js = /* @__PURE__ */ Ve(aP, [["render", dP], ["__scopeId", "data-v-2415ea97"]]), fP = window.Vue.defineComponent, Io = window.Vue.createElementVNode, Sa = window.Vue.unref, hi = window.Vue.createVNode, pP = window.Vue.withCtx, au = window.Vue.toDisplayString, tr = window.Vue.openBlock, mi = window.Vue.createElementBlock, Vv = window.Vue.createCommentVNode, Ev = window.Vue.createBlock, hP = window.Vue.renderList, mP = window.Vue.Fragment, wP = window.Vue.pushScopeId, vP = window.Vue.popScopeId, k1 = (e) => (wP("data-v-c35fbcc6"), e = e(), vP(), e), _P = { class: "list-main" }, gP = { class: "header" }, $P = /* @__PURE__ */ k1(() => /* @__PURE__ */ Io("h2", null, "Situation List", -1)), yP = { class: "link-btns" }, bP = /* @__PURE__ */ k1(() => /* @__PURE__ */ Io("span", null, "View Unassociated Alarms", -1)), CP = { class: "content" }, VP = { class: "left-filters" }, EP = { class: "container" }, SP = { class: "autocomplete" }, IP = { key: 0 }, kP = { key: 1 }, AP = { key: 0 }, TP = { class: "situation-list" }, xP = {
  key: 0,
  class: "footer-pager"
}, LP = window.Vue.reactive, lu = window.Vue.ref, MP = window.Vue.watch, NP = window.Vue.markRaw, DP = /* @__PURE__ */ fP({
  __name: "SituationList",
  setup(e) {
    const o = NP({
      Add: uc,
      View: aR,
      Settings: vR
    }), r = Fr(), s = co(), a = Ti();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = LP({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = lu(!0), m = lu(0), v = lu(1), g = lu(0), y = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    MP(
      () => s.situations,
      () => {
        f.value = !1, y(), R(s.situations);
      }
    );
    const b = (S) => {
      m.value = S, c.situations = c.allSituations[m.value];
    }, D = (S) => {
      r.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, O = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, R = (S) => {
      g.value = S.length, c.allSituations = Oe.exports.chunk(S, u);
      const A = S.map((T) => T.id);
      s.filteredSituations = A, m.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, B = (S) => {
      S.length ? R(S) : c.situations = [];
    };
    return (S, A) => {
      var T;
      return tr(), mi("div", _P, [
        Io("div", gP, [
          $P,
          Io("div", yP, [
            hi(Sa(we), {
              class: "view-situation-btn",
              onClick: A[0] || (A[0] = () => O())
            }, {
              default: pP(() => [
                hi(Sa(X), {
                  icon: Sa(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                bP
              ]),
              _: 1
            }),
            hi(E1),
            hi(sP)
          ])
        ]),
        Io("div", CP, [
          Io("div", VP, [
            hi(Ys, {
              list: Sa(s).situations,
              onFilteredList: B,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Io("div", EP, [
            Io("div", SP, [
              c.situations && c.situations.length ? (tr(), mi("div", IP, " Result: " + au((T = c.situations) == null ? void 0 : T.length) + " of " + au(g.value), 1)) : Vv("", !0)
            ]),
            f.value ? (tr(), Ev(Sa(xs), {
              key: 0,
              class: "spinner"
            })) : (tr(), mi("div", kP, [
              c.situations && c.situations.length ? (tr(), mi("div", AP, [
                Io("div", TP, [
                  (tr(!0), mi(mP, null, hP(c.situations, (P) => (tr(), mi("div", {
                    class: "card",
                    key: P.id
                  }, [
                    hi(Zg, {
                      onClick: () => D(P.id),
                      "situation-info": P
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                g.value > u ? (tr(), mi("div", xP, [
                  Io("div", null, "Page: " + au(m.value + 1) + " of " + au(v.value), 1),
                  hi(K2, {
                    onGoToPage: b,
                    currentPage: m.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Vv("", !0)
              ])) : (tr(), Ev(js, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const OP = /* @__PURE__ */ Ve(DP, [["__scopeId", "data-v-c35fbcc6"]]);
const uu = window.Vue.ref, BP = window.Vue.inject, RP = window.Vue.computed, PP = window.Vue.onMounted, A1 = {
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
}, T1 = (e) => {
  const o = uu(!1), r = uu(), s = uu(e.controls), a = uu(e.id), u = () => {
    r.value && r.value.focus();
  }, c = BP("registerTab");
  PP(() => {
    if (r.value && c) {
      const m = r.value.parentElement, v = m && m.parentElement ? m.parentElement : void 0, g = Array.from(v ? v.children : []).filter((b) => b.querySelectorAll("[role=tab]").length), y = m ? g.indexOf(m) : -1;
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
  const f = RP(() => ({
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
}, Sv = window.Vue.ref, FP = window.Vue.toRef, UP = window.Vue.watch, Iv = window.Vue.provide, x1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, L1 = {
  "update:modelValue": (e) => !0
}, M1 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, N1 = (e, o) => {
  const r = FP(e, "modelValue"), s = Sv(e.modelValue), a = Sv([]);
  UP(r, (O) => {
    m(O);
  });
  const u = (O) => {
    O.preventDefault(), a.value.some((R, B) => R.tab && R.tab.el.contains(O.target) ? (f(B), m(B), !0) : !1);
  }, c = (O) => {
    if (((K) => K.shiftKey || K.ctrlKey || K.metaKey || K.altKey)(O))
      return;
    const B = O.keyCode, S = (K) => {
      K.stopPropagation(), K.preventDefault();
    }, A = a.value.filter((K) => K.tab && !K.tab.disabled), T = a.value.findIndex((K) => K.tab && K.tab.el.contains(document.activeElement));
    let P = T !== -1 ? T : s.value;
    const k = [ue.RIGHT], U = [ue.LEFT], W = [ue.ENTER, ue.SPACE];
    e.vertical && (k.push(ue.DOWN), U.push(ue.UP)), k.indexOf(B) > -1 ? (P++, P >= A.length && (P = 0), S(O), f(a.value.indexOf(A[P]))) : U.indexOf(B) > -1 && (P--, P < 0 && (P = A.length - 1), S(O), f(a.value.indexOf(A[P]))), W.indexOf(B) > -1 && m(P);
  }, f = (O) => {
    a.value.forEach(function(R, B) {
      O === B && R.tab && R.tab.focus();
    });
  }, m = (O) => {
    const R = a.value[O];
    !R || R.tab && R.tab.disabled || (a.value.forEach((B, S) => {
      B.tab && (B.tab.selected = O === S), B.panel && (B.panel.selected = O === S);
    }), s.value = O, o.emit("update:modelValue", O));
  };
  Iv("registerTab", (O) => {
    const R = O.index;
    R > -1 && (a.value[R] = { ...a.value[R], tab: O }, a.value = [...a.value], y());
  }), Iv("registerPanel", (O) => {
    const R = O.index;
    R > -1 && (a.value[R] = {
      ...a.value[R],
      panel: O
    }, a.value = [...a.value], y());
  });
  const y = () => {
    a.value.forEach(({ tab: O, panel: R }, B) => {
      if (R && O) {
        const S = O.id || be("tab"), A = O.controls || be("panel");
        O.controls = A, O.id = S, R.tab = S, R.id = A;
      }
      B === s.value && (R && (R.selected = !0), O && (O.selected = !0));
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
}, cu = window.Vue.ref, WP = window.Vue.inject, HP = window.Vue.computed, zP = window.Vue.onMounted, D1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, O1 = (e) => {
  const o = cu(!1), r = cu(), s = cu(e.tab), a = cu(e.id), u = WP("registerPanel");
  zP(() => {
    if (u) {
      const f = r.value, m = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(m ? m.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: s,
        el: r.value,
        index: v
      });
    }
  });
  const c = HP(() => ({
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
}, pp = window.Vue.defineComponent, qP = window.Vue.resolveComponent, hp = window.Vue.openBlock, mp = window.Vue.createElementBlock, Ka = window.Vue.createElementVNode, B1 = window.Vue.mergeProps, Uu = window.Vue.renderSlot, GP = window.Vue.createVNode, YP = window.Vue.normalizeStyle, jP = window.Vue.toHandlers, ZP = window.Vue.withDirectives, KP = window.Vue.normalizeProps, JP = window.Vue.guardReactiveProps, XP = window.Vue.vShow;
var wp = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QP = A1, e3 = pp({
  props: QP,
  setup(e) {
    return T1(e);
  },
  components: {
    FeatherRipple: Br
  }
}), t3 = { role: "presentation" }, n3 = { class: "tab-text" };
function o3(e, o, r, s, a, u) {
  const c = qP("FeatherRipple");
  return hp(), mp("li", t3, [
    Ka("button", B1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Ka("span", n3, [
        Uu(e.$slots, "default", {}, void 0, !0)
      ]),
      GP(c)
    ], 16)
  ]);
}
var Ja = /* @__PURE__ */ wp(e3, [["render", o3], ["__scopeId", "data-v-e6bb52b6"]]);
const r3 = M1, i3 = L1, s3 = pp({
  model: x1,
  emits: i3,
  props: r3,
  setup(e, o) {
    return N1(e, o);
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
}), a3 = { class: "feather-tab-container" }, l3 = { class: "tab-panels" };
function u3(e, o, r, s, a, u) {
  return hp(), mp("div", a3, [
    Ka("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: YP({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Ka("ul", B1(e.attrs, jP(e.listeners)), [
      Uu(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Ka("div", l3, [
      Uu(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var R1 = /* @__PURE__ */ wp(s3, [["render", u3], ["__scopeId", "data-v-27adffb9"]]);
const c3 = D1, d3 = pp({
  props: c3,
  setup(e) {
    return O1(e);
  }
});
function f3(e, o, r, s, a, u) {
  return ZP((hp(), mp("div", KP(JP(e.attrs)), [
    Uu(e.$slots, "default")
  ], 16)), [
    [XP, e.selected]
  ]);
}
var Xa = /* @__PURE__ */ wp(d3, [["render", f3]]);
const p3 = window.Vue.defineComponent, h3 = window.Vue.toDisplayString, m3 = window.Vue.normalizeClass, w3 = window.Vue.openBlock, v3 = window.Vue.createElementBlock, _3 = window.Vue.createCommentVNode, g3 = /* @__PURE__ */ p3({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (w3(), v3("span", {
      key: 0,
      class: m3(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, h3(o.severity), 3)) : _3("", !0);
  }
});
const P1 = /* @__PURE__ */ Ve(g3, [["__scopeId", "data-v-83c2cdce"]]), $3 = window.Vue.defineComponent, kv = window.Vue.toDisplayString, Av = window.Vue.createElementVNode, y3 = window.Vue.openBlock, b3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const C3 = { class: "box" }, V3 = { class: "label" }, E3 = { class: "date" }, S3 = /* @__PURE__ */ $3({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (y3(), b3("div", C3, [
      Av("div", V3, kv(o.label), 1),
      Av("div", E3, kv(o.info), 1)
    ]));
  }
});
const ef = /* @__PURE__ */ Ve(S3, [["__scopeId", "data-v-b4afa751"]]), I3 = window.Vue.defineComponent, k3 = window.Vue.unref, A3 = window.Vue.renderList, T3 = window.Vue.Fragment, tf = window.Vue.openBlock, nf = window.Vue.createElementBlock, x3 = window.Vue.toDisplayString, L3 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const M3 = { class: "alarms-list" }, N3 = /* @__PURE__ */ I3({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (tf(), nf("div", M3, [
      (tf(!0), nf(T3, null, A3(k3(Oe.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (tf(), nf("div", {
        class: L3(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, x3(a.length), 3))), 128))
    ]));
  }
});
const D3 = /* @__PURE__ */ Ve(N3, [["__scopeId", "data-v-52d63440"]]), O3 = window.Vue.openBlock, B3 = window.Vue.createElementBlock, R3 = window.Vue.createElementVNode;
var P3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F3 = {}, U3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W3 = /* @__PURE__ */ R3("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), H3 = [
  W3
];
function z3(e, o) {
  return O3(), B3("svg", U3, H3);
}
var q3 = /* @__PURE__ */ P3(F3, [["render", z3]]);
const G3 = window.Vue.openBlock, Y3 = window.Vue.createElementBlock, j3 = window.Vue.createStaticVNode;
var Z3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const K3 = {}, J3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X3 = /* @__PURE__ */ j3('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), Q3 = [
  X3
];
function e4(e, o) {
  return G3(), Y3("svg", J3, Q3);
}
var Wu = /* @__PURE__ */ Z3(K3, [["render", e4]]);
const t4 = window.Vue.defineComponent, ro = window.Vue.unref, of = window.Vue.createVNode, vp = window.Vue.createElementVNode, rf = window.Vue.withCtx, du = window.Vue.openBlock, sf = window.Vue.createBlock, af = window.Vue.createCommentVNode, n4 = window.Vue.normalizeClass, o4 = window.Vue.createElementBlock, r4 = window.Vue.pushScopeId, i4 = window.Vue.popScopeId, _p = (e) => (r4("data-v-d9c6a479"), e = e(), i4(), e), s4 = /* @__PURE__ */ _p(() => /* @__PURE__ */ vp("span", null, "Acknowledge", -1)), a4 = /* @__PURE__ */ _p(() => /* @__PURE__ */ vp("span", null, "Escalate", -1)), l4 = /* @__PURE__ */ _p(() => /* @__PURE__ */ vp("span", null, "Clear", -1)), u4 = /* @__PURE__ */ t4({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = co(), s = async (u) => {
      await UI(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await Yg(
        o.situationId,
        kt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Ig(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (du(), o4("div", {
      class: n4(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? af("", !0) : (du(), sf(ro(we), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: rf(() => [
          of(ro(X), {
            icon: ro(Ds),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          s4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (du(), sf(ro(we), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(ro(kt).ESCALATE))
      }, {
        default: rf(() => [
          of(ro(X), {
            icon: ro(q3),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          a4
        ]),
        _: 1
      })) : af("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (du(), sf(ro(we), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(ro(kt).CLEAR))
      }, {
        default: rf(() => [
          of(ro(X), {
            icon: ro(Wu),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          l4
        ]),
        _: 1
      })) : af("", !0)
    ], 2));
  }
});
const F1 = /* @__PURE__ */ Ve(u4, [["__scopeId", "data-v-d9c6a479"]]);
var c4 = Object.defineProperty, d4 = Object.defineProperties, f4 = Object.getOwnPropertyDescriptors, Tv = Object.getOwnPropertySymbols, p4 = Object.prototype.hasOwnProperty, h4 = Object.prototype.propertyIsEnumerable, xv = (e, o, r) => o in e ? c4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Gf = (e, o) => {
  for (var r in o || (o = {}))
    p4.call(o, r) && xv(e, r, o[r]);
  if (Tv)
    for (var r of Tv(o))
      h4.call(o, r) && xv(e, r, o[r]);
  return e;
}, U1 = (e, o) => d4(e, f4(o));
const W1 = window.Vue.defineComponent, m4 = window.Vue.inject, w4 = window.Vue.resolveComponent, lf = window.Vue.openBlock, Lv = window.Vue.createElementBlock, Ss = window.Vue.createElementVNode, v4 = window.Vue.createBlock, Mv = window.Vue.createCommentVNode, _4 = window.Vue.renderSlot, g4 = window.Vue.pushScopeId, $4 = window.Vue.popScopeId, uf = window.Vue.toRef, fu = window.Vue.computed, y4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var b4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const C4 = {
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
}, V4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, E4 = W1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: V4,
  props: C4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: m4("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : be("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : be("checkbox-label");
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
      (e.keyCode === ue.SPACE || e.keyCode === ue.ENTER) && this.updateValue(), e.keyCode === ue.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Br
  }
}), S4 = (e) => (g4("data-v-a7af27e2"), e = e(), $4(), e), I4 = { class: "layout-container" }, k4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], A4 = { class: "checkbox hover focus" }, T4 = /* @__PURE__ */ S4(() => /* @__PURE__ */ Ss("div", { class: "box" }, [
  /* @__PURE__ */ Ss("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Ss("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Ss("div", { class: "indeterminate" })
], -1)), x4 = ["id", "for"];
function L4(e, o, r, s, a, u) {
  const c = w4("feather-ripple");
  return lf(), Lv("div", I4, [
    Ss("div", {
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
      Ss("div", A4, [
        T4,
        e.disabled ? Mv("", !0) : (lf(), v4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Mv("", !0) : (lf(), Lv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        _4(e.$slots, "default", {}, void 0, !0)
      ], 8, x4))
    ], 40, k4)
  ]);
}
var Ii = /* @__PURE__ */ b4(E4, [["render", L4], ["__scopeId", "data-v-a7af27e2"]]);
const M4 = U1(Gf({}, zs), {
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
W1({
  props: M4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    qs(e);
    const r = uf(e, "error"), s = fu(() => be("feather-checkbox-group")), a = fu(() => be("feather-input-description")), u = fu(() => be("feather-input-label")), c = fu(() => {
      const g = JSON.parse(JSON.stringify(o.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), U1(Gf({}, g), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = y4(s.value), { validate: m } = Ws(f, uf(e, "modelValue"), e.label, e.schema, uf(e, "error"));
    return Gf({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: m,
      registerCheckbox: (g) => {
        g && f.value === s.value && (f.value = g);
      }
    }, Hs(o.attrs));
  },
  components: {
    InputSubText: Us
  }
});
const N4 = window.Vue.openBlock, D4 = window.Vue.createElementBlock, H1 = window.Vue.createElementVNode;
var O4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const B4 = {}, R4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P4 = /* @__PURE__ */ H1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), F4 = /* @__PURE__ */ H1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), U4 = [
  P4,
  F4
];
function W4(e, o) {
  return N4(), D4("svg", R4, U4);
}
var H4 = /* @__PURE__ */ O4(B4, [["render", W4]]);
var z4 = Object.defineProperty, q4 = Object.defineProperties, G4 = Object.getOwnPropertyDescriptors, Nv = Object.getOwnPropertySymbols, Y4 = Object.prototype.hasOwnProperty, j4 = Object.prototype.propertyIsEnumerable, Dv = (e, o, r) => o in e ? z4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Is = (e, o) => {
  for (var r in o || (o = {}))
    Y4.call(o, r) && Dv(e, r, o[r]);
  if (Nv)
    for (var r of Nv(o))
      j4.call(o, r) && Dv(e, r, o[r]);
  return e;
}, z1 = (e, o) => q4(e, G4(o));
const Z4 = window.Vue.defineComponent, cf = window.Vue.toRef, K4 = window.Vue.computed, Ov = window.Vue.resolveComponent, Bv = window.Vue.openBlock, Rv = window.Vue.createElementBlock, Pv = window.Vue.mergeProps, Fv = window.Vue.createVNode, J4 = window.Vue.normalizeClass, Uv = window.Vue.withCtx, X4 = window.Vue.createElementVNode, Q4 = window.Vue.toDisplayString, e8 = window.Vue.createCommentVNode;
var t8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const n8 = z1(Is(Is({}, tc), zs), {
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
}), o8 = {
  "update:modelValue": (e) => !0
}, r8 = Z4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: o8,
  props: n8,
  setup(e, o) {
    qs(e), nc(e);
    const r = cf(e, "id"), s = K4(() => r.value ? r.value : be("feather-textarea-label")), { validate: a } = Ws(s, cf(e, "modelValue"), e.label, e.schema, cf(e, "error"));
    return Is({
      inputId: s,
      incomingId: r,
      validate: a
    }, Hs(o.attrs));
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
      return be("feather-textarea-description");
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
      const e = Is({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), z1(Is(Is({}, e), this.listeners), {
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
    InputSubText: Us,
    InputWrapper: ec
  }
}), i8 = ["maxlength"], s8 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function a8(e, o, r, s, a, u) {
  const c = Ov("InputWrapper"), f = Ov("InputSubText");
  return Bv(), Rv("div", Pv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Fv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: J4(["feather-textarea-content", e.contentCls])
    }, {
      default: Uv(() => [
        X4("textarea", Pv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, i8)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Fv(f, { id: e.descriptionId }, {
      right: Uv(() => [
        e.maxlength ? (Bv(), Rv("div", s8, Q4(e.charCount), 1)) : e8("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Hu = /* @__PURE__ */ t8(r8, [["render", a8], ["__scopeId", "data-v-0648df5c"]]);
const l8 = window.Pinia.defineStore, cc = l8("appStore", {
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
}), u8 = window.Vue.defineComponent, Wv = window.Vue.toDisplayString, Ia = window.Vue.createElementVNode, wi = window.Vue.unref, ms = window.Vue.openBlock, Hv = window.Vue.createBlock, ka = window.Vue.createCommentVNode, zv = window.Vue.createVNode, pu = window.Vue.createElementBlock, c8 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const d8 = { class: "row" }, f8 = { class: "label" }, p8 = { class: "action-icons" }, h8 = { class: "icon-btn" }, m8 = {
  key: 0,
  class: "icon-btn"
}, w8 = {
  key: 1,
  class: "icon-btn"
}, v8 = {
  key: 0,
  class: "text"
}, _8 = window.Vue.watch, qv = window.Vue.ref, g8 = /* @__PURE__ */ u8({
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
    var m;
    const o = e, r = cc(), s = qv(!1), a = qv((m = o.memo) == null ? void 0 : m.body);
    _8(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await jI(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await YI(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, g) => (ms(), pu("div", {
      class: c8([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Ia("div", d8, [
        Ia("div", f8, Wv(e.label), 1),
        Ia("div", p8, [
          Ia("div", h8, [
            s.value ? ka("", !0) : (ms(), Hv(wi(X), {
              key: 0,
              icon: wi(H4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (ms(), pu("div", m8, [
            zv(wi(X), {
              icon: wi(Ds),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : ka("", !0),
          a.value && a.value != "" || s.value ? (ms(), pu("div", w8, [
            zv(wi(X), {
              icon: wi(Ps),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : ka("", !0)
        ])
      ]),
      Ia("div", null, [
        !s.value && a.value != null ? (ms(), pu("div", v8, Wv(a.value), 1)) : ka("", !0),
        s.value ? (ms(), Hv(wi(Hu), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": g[0] || (g[0] = (y) => a.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : ka("", !0)
      ])
    ], 2));
  }
});
const zu = /* @__PURE__ */ Ve(g8, [["__scopeId", "data-v-ee1264b5"]]), $8 = window.Vue.defineComponent, Sr = window.Vue.unref, ws = window.Vue.createVNode, Aa = window.Vue.toDisplayString, lo = window.Vue.createElementVNode, Gv = window.Vue.openBlock, Yv = window.Vue.createElementBlock, jv = window.Vue.createCommentVNode, df = window.Vue.createTextVNode, y8 = window.Vue.pushScopeId, b8 = window.Vue.popScopeId, gp = (e) => (y8("data-v-b59dc239"), e = e(), b8(), e), C8 = {
  key: 0,
  class: "card"
}, V8 = { class: "row" }, E8 = {
  key: 0,
  class: "ack"
}, S8 = /* @__PURE__ */ gp(() => /* @__PURE__ */ lo("strong", null, " Duration: ", -1)), I8 = ["innerHTML"], k8 = /* @__PURE__ */ gp(() => /* @__PURE__ */ lo("strong", null, "First Event", -1)), A8 = /* @__PURE__ */ gp(() => /* @__PURE__ */ lo("strong", null, "Last Event", -1)), T8 = { class: "section memo-boxes" }, Zv = window.Vue.ref, x8 = window.Vue.watch, L8 = /* @__PURE__ */ $8({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Zv(!1), a = Zv(r.alarm), u = new Date().getTime();
    x8(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (m) => {
      const v = await kg(m);
      v && (a.value = v);
    };
    return (m, v) => {
      var g, y, b, D, O;
      return a.value ? (Gv(), Yv("div", C8, [
        lo("div", null, [
          lo("div", V8, [
            ws(Sr(Ii), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (R) => s.value = R),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            lo("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, Aa(a.value.nodeLabel) + " - " + Aa(a.value.id), 1),
            ws(P1, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Gv(), Yv("div", E8, [
              ws(Sr(X), {
                icon: Sr(Ds),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : jv("", !0)
          ]),
          lo("div", null, [
            S8,
            df(" " + Aa(Sr(Ju)(Sr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          lo("div", {
            class: "description",
            innerHTML: Sr(Fg)(a.value.description || "")
          }, null, 8, I8),
          lo("div", null, [
            k8,
            df(" - " + Aa(Sr(xo)(a.value.firstEventTime)), 1)
          ]),
          lo("div", null, [
            A8,
            df(" - " + Aa(Sr(xo)(a.value.lastEventTime)), 1)
          ]),
          lo("div", T8, [
            ws(zu, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (b = a.value) == null ? void 0 : b.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ws(zu, {
              id: (D = a.value) == null ? void 0 : D.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (O = a.value) == null ? void 0 : O.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ws(F1, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : jv("", !0);
    };
  }
});
const M8 = /* @__PURE__ */ Ve(L8, [["__scopeId", "data-v-b59dc239"]]), N8 = window.Vue.openBlock, D8 = window.Vue.createElementBlock, q1 = window.Vue.createElementVNode;
var O8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const B8 = {}, R8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P8 = /* @__PURE__ */ q1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), F8 = /* @__PURE__ */ q1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), U8 = [
  P8,
  F8
];
function W8(e, o) {
  return N8(), D8("svg", R8, U8);
}
var Yf = /* @__PURE__ */ O8(B8, [["render", W8]]);
const H8 = window.Vue.watch, z8 = window.Vue.ref, q8 = window.Vue.onBeforeUnmount, G1 = (e) => {
  const o = z8(!1), r = (s) => {
    s.keyCode === ue.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return H8(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), q8(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, G8 = window.Vue.watch, Y1 = (e) => {
  let o;
  G8(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, j1 = window.Vue.watch, Z1 = window.Vue.onBeforeUnmount, K1 = window.Vue.nextTick, Y8 = window.Vue.onMounted, J1 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, qu = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, X1 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Z1(() => qu(o, r)), Y8(() => j1(e, (s) => {
    s ? K1(() => {
      o = J1(r);
    }) : qu(o, r);
  }, { immediate: !0 }));
}, j8 = (e, o) => {
  let r;
  Z1(() => qu(r, o.value ? o.value.offsetParent : !1)), j1([e, o], ([s, a]) => {
    s && a ? K1(() => {
      r = J1(a.offsetParent);
    }) : a && qu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var Z8 = Object.defineProperty, Kv = Object.getOwnPropertySymbols, K8 = Object.prototype.hasOwnProperty, J8 = Object.prototype.propertyIsEnumerable, Jv = (e, o, r) => o in e ? Z8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, X8 = (e, o) => {
  for (var r in o || (o = {}))
    K8.call(o, r) && Jv(e, r, o[r]);
  if (Kv)
    for (var r of Kv(o))
      J8.call(o, r) && Jv(e, r, o[r]);
  return e;
};
const $p = window.Vue.defineComponent, Qa = window.Vue.ref, Q8 = window.Vue.nextTick, Q1 = window.Vue.openBlock, e0 = window.Vue.createElementBlock, yp = window.Vue.createElementVNode, e5 = window.Vue.renderSlot, t5 = window.Vue.resolveComponent, n5 = window.Vue.normalizeClass, o5 = window.Vue.withModifiers, r5 = window.Vue.createVNode, Xv = window.Vue.toRef, Qv = window.Vue.computed, e_ = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var t0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const i5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, s5 = $p({
  props: i5,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Qa(), o = Qa(!1), r = (g, y) => {
      let b = g.compareDocumentPosition(y);
      if (b === 2)
        return "before";
      if (b === 4)
        return "after";
      if (b === 10 || b === 12)
        return "parent";
    }, s = (g) => {
      for (var y = 0; y < g.childNodes.length; y++) {
        var b = g.childNodes[y];
        if (u(b) || s(b))
          return !0;
      }
      return !1;
    }, a = (g) => {
      for (var y = g.childNodes.length - 1; y >= 0; y--) {
        var b = g.childNodes[y];
        if (u(b) || a(b))
          return !0;
      }
      return !1;
    }, u = (g) => c(g) ? (o.value = !0, g.focus && g.focus(), o.value = !1, document.activeElement === g) : !1, c = (g) => {
      if (g.tabIndex > 0 || g.tabIndex === 0 && g.getAttribute("tabIndex") !== null)
        return !0;
      const y = g;
      if (y.disabled || y.tabIndex === -1)
        return !1;
      switch (g.nodeName) {
        case "A":
          const b = g;
          return !!b.href && b.rel !== "ignore";
        case "INPUT":
          const D = g;
          return D.type !== "hidden" && D.type !== "file";
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
        case "IFRAME":
          return !0;
        default:
          return !1;
      }
    }, f = (g) => {
      const y = g.querySelector("[first-focus]");
      y && y.focus ? Q8(() => {
        y.focus();
      }) : s(g);
    }, m = Qa();
    return {
      trapFocus: () => {
        o.value || setTimeout(() => {
          var g = document.activeElement;
          if (e.value.contains(g)) {
            m.value = g;
            return;
          } else {
            switch (r(e.value, g)) {
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
            m.value = document.activeElement;
          }
        }, 0);
      },
      content: e,
      ignoreUtilFocusChanges: o,
      attemptToFocusFirst: f,
      focusLastDescendant: a,
      focusFirstDescendant: s,
      isFocusable: c,
      lastFocus: m
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
}), a5 = /* @__PURE__ */ yp("div", { tabindex: "0" }, null, -1), l5 = {
  class: "focus-trap-content",
  ref: "content"
}, u5 = /* @__PURE__ */ yp("div", { tabindex: "0" }, null, -1);
function c5(e, o, r, s, a, u) {
  return Q1(), e0("div", null, [
    a5,
    yp("div", l5, [
      e5(e.$slots, "default")
    ], 512),
    u5
  ]);
}
var n0 = /* @__PURE__ */ t0(s5, [["render", c5]]);
const d5 = $p({
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
    icon: () => Ps
  },
  components: {
    FeatherIcon: X
  }
}), f5 = ["aria-label"];
function p5(e, o, r, s, a, u) {
  const c = t5("FeatherIcon");
  return Q1(), e0("a", {
    href: "#",
    class: n5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = o5((f) => e.$emit("close"), ["prevent"]))
  }, [
    r5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, f5);
}
var o0 = /* @__PURE__ */ t0(d5, [["render", p5], ["__scopeId", "data-v-fc0f3f00"]]);
const r0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, h5 = {
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
    default: () => r0,
    validator: (e) => !!e.title
  }
}, m5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
$p({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: m5,
  props: h5,
  setup(e, o) {
    const r = Qu(Xv(e, "labels"), r0), s = Xv(e, "modelValue"), a = Qa(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = Qv(() => !!o.slots.footer), f = Qv(() => be("dialog-header"));
    e.relative ? j8(s, a) : X1(s), Y1(s), e_(G1(s), () => {
      u();
    });
    const m = Qa(e.modelValue);
    return e_(m, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), X8({ close: u, hasFooter: c, headerId: f, element: a, shown: m }, r);
  },
  components: {
    FocusTrap: n0,
    DialogClose: o0
  }
});
var w5 = Object.defineProperty, t_ = Object.getOwnPropertySymbols, v5 = Object.prototype.hasOwnProperty, _5 = Object.prototype.propertyIsEnumerable, n_ = (e, o, r) => o in e ? w5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, dc = (e, o) => {
  for (var r in o || (o = {}))
    v5.call(o, r) && n_(e, r, o[r]);
  if (t_)
    for (var r of t_(o))
      _5.call(o, r) && n_(e, r, o[r]);
  return e;
};
const fc = window.Vue.defineComponent, o_ = window.Vue.toRef, r_ = window.Vue.watch, i_ = window.Vue.ref, s_ = window.Vue.resolveComponent, hu = window.Vue.openBlock, a_ = window.Vue.createBlock, g5 = window.Vue.Teleport, l_ = window.Vue.createElementBlock, ff = window.Vue.createVNode, u_ = window.Vue.Transition, pf = window.Vue.withCtx, c_ = window.Vue.createCommentVNode, $5 = window.Vue.withDirectives, y5 = window.Vue.normalizeStyle, b5 = window.Vue.normalizeClass, d_ = window.Vue.createElementVNode, C5 = window.Vue.renderSlot, V5 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var E5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const i0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, S5 = {
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
    default: () => i0,
    validator: (e) => !!e.title
  }
}, I5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, k5 = fc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: I5,
  props: S5,
  setup(e, o) {
    const r = Qu(o_(e, "labels"), i0), s = o_(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    X1(s), Y1(s), r_(G1(s), () => {
      a();
    });
    const u = i_(), c = i_(!1);
    return r_(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), dc({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: o0,
    FocusTrap: n0
  }
}), A5 = {
  key: 0,
  class: "drawer-container feather-styles"
}, T5 = {
  key: 0,
  class: "greyedOut"
}, x5 = ["aria-label"], L5 = { class: "slot" };
function M5(e, o, r, s, a, u) {
  const c = s_("dialog-close"), f = s_("focus-trap");
  return hu(), a_(g5, { to: "body" }, [
    e.modelValue ? (hu(), l_("div", A5, [
      ff(u_, { name: "greyOutShim" }, {
        default: pf(() => [
          e.modelValue ? (hu(), l_("div", T5)) : c_("", !0)
        ]),
        _: 1
      }),
      ff(u_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (m) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (m) => e.shown = !1)
      }, {
        default: pf(() => [
          $5((hu(), a_(f, {
            enable: e.modelValue,
            style: y5({ width: e.width }),
            key: "sect",
            class: b5(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: pf(() => [
              d_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                d_("div", L5, [
                  C5(e.$slots, "default", {}, void 0, !0)
                ]),
                ff(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, x5)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [V5, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : c_("", !0)
  ]);
}
var s0 = /* @__PURE__ */ E5(k5, [["render", M5], ["__scopeId", "data-v-0a36e1dc"]]);
const N5 = dc({
  label: {
    type: String,
    required: !0
  }
}, A1);
fc({
  name: "DrawerTab",
  props: N5,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = ki(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Ai(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return T1(e);
  },
  components: {
    FeatherRipple: Br
  }
});
const D5 = dc({}, M1), O5 = L1;
fc({
  emits: O5,
  model: x1,
  props: D5,
  setup(e, o) {
    return N1(e, o);
  }
});
const B5 = dc({
  header: {
    type: String
  }
}, D1);
fc({
  name: "DrawerTabContent",
  props: B5,
  setup(e) {
    return O1(e);
  },
  directives: {
    MenuFocusLoop: jM
  }
});
const R5 = window.Vue.defineComponent, a0 = window.Vue.createElementVNode, f_ = window.Vue.createVNode, P5 = window.Vue.renderList, F5 = window.Vue.Fragment, Ta = window.Vue.openBlock, hf = window.Vue.createElementBlock, p_ = window.Vue.createBlock, U5 = window.Vue.unref, W5 = window.Vue.withCtx, H5 = window.Vue.pushScopeId, z5 = window.Vue.popScopeId, q5 = (e) => (H5("data-v-37e146e7"), e = e(), z5(), e), G5 = { class: "content" }, Y5 = /* @__PURE__ */ q5(() => /* @__PURE__ */ a0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), j5 = {
  key: 0,
  class: "situation-list"
}, mf = window.Vue.ref, h_ = window.Vue.watch, Z5 = /* @__PURE__ */ R5({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = co(), a = mf(r.visible), u = () => {
      let v = s.situations;
      r.situationId !== 0 && (v = s.situations.filter(
        (g) => g.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = mf(s.situations), f = mf(s.situations);
    h_(r, () => {
      a.value = r.visible, u();
    }), h_(
      () => s.situations,
      () => {
        u();
      }
    );
    const m = (v) => {
      f.value = v;
    };
    return (v, g) => (Ta(), p_(U5(s0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (y) => a.value = y),
        g[1] || (g[1] = (y) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: W5(() => [
        a0("div", G5, [
          Y5,
          f_(Ys, {
            list: c.value,
            isSituation: "",
            onFilteredList: m
          }, null, 8, ["list"]),
          f.value.length ? (Ta(), hf("div", j5, [
            (Ta(!0), hf(F5, null, P5(f.value, (y) => (Ta(), hf("div", {
              class: "card",
              key: y.id
            }, [
              f_(Zg, {
                onClick: (b) => o("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Ta(), p_(js, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const l0 = /* @__PURE__ */ Ve(Z5, [["__scopeId", "data-v-37e146e7"]]), K5 = window.Vue.defineComponent, m_ = window.Vue.normalizeClass, Vs = window.Vue.createElementVNode, mu = window.Vue.unref, J5 = window.Vue.createVNode, wu = window.Vue.toDisplayString, X5 = window.Vue.createTextVNode, Q5 = window.Vue.openBlock, eF = window.Vue.createElementBlock, tF = window.Vue.pushScopeId, nF = window.Vue.popScopeId, oF = (e) => (tF("data-v-f3d99277"), e = e(), nF(), e), rF = { class: "alarmInfo" }, iF = { class: "alarm-title" }, sF = /* @__PURE__ */ oF(() => /* @__PURE__ */ Vs("strong", null, " Duration: ", -1)), aF = { class: "description" }, lF = /* @__PURE__ */ K5({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (Q5(), eF("div", {
      class: m_(["alarm", { selected: r.selected }])
    }, [
      Vs("div", rF, [
        Vs("div", {
          class: m_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        J5(mu(Ii), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Vs("div", iF, wu(e.alarm.nodeLabel) + " - " + wu(e.alarm.id), 1)
      ]),
      Vs("div", null, [
        sF,
        X5(" " + wu(mu(Ju)(mu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Vs("div", aF, wu(mu(Ug)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const bp = /* @__PURE__ */ Ve(lF, [["__scopeId", "data-v-f3d99277"]]), uF = window.Vue.defineComponent, Au = window.Vue.createElementVNode, vs = window.Vue.unref, cF = window.Vue.toDisplayString, w_ = window.Vue.withCtx, wf = window.Vue.createVNode, dF = window.Vue.renderList, fF = window.Vue.Fragment, xa = window.Vue.openBlock, vf = window.Vue.createElementBlock, v_ = window.Vue.createBlock, pF = window.Vue.pushScopeId, hF = window.Vue.popScopeId, mF = (e) => (pF("data-v-35547098"), e = e(), hF(), e), wF = { class: "content" }, vF = { class: "header" }, _F = /* @__PURE__ */ mF(() => /* @__PURE__ */ Au("h4", null, "ADD ALARMS", -1)), gF = {
  key: 0,
  class: "alarms-list"
}, vu = window.Vue.ref, __ = window.Vue.watch, $F = /* @__PURE__ */ uF({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = co(), a = vu(r.visible), u = vu([]), c = vu(["all"]), f = vu(s.unassignedAlarms);
    __(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), __(
      () => s.unassignedAlarms,
      () => {
        g();
      }
    );
    const m = (b) => {
      Oe.exports.includes(u.value, b) ? Oe.exports.remove(u.value, (D) => D === b) : u.value.push(b);
    }, v = () => {
      o("alarms-selected", u.value);
    }, g = () => {
      let b = s.unassignedAlarms;
      c.value.includes("all") || (b = b.filter(
        (D) => c.value.includes(D.severity)
      )), f.value = b;
    }, y = (b) => {
      f.value = b;
    };
    return (b, D) => (xa(), v_(vs(s0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        D[0] || (D[0] = (O) => a.value = O),
        D[1] || (D[1] = (O) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: w_(() => [
        Au("div", wF, [
          Au("div", vF, [
            _F,
            wf(vs(we), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: w_(() => [
                Au("span", null, "Add " + cF(vs(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          wf(Ys, {
            list: vs(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (xa(), vf("div", gF, [
            (xa(!0), vf(fF, null, dF(f.value, (O) => (xa(), vf("div", {
              class: "card",
              key: O.id
            }, [
              wf(bp, {
                selected: vs(Oe.exports.includes)(vs(u), O.id),
                alarm: O,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (xa(), v_(js, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const yF = /* @__PURE__ */ Ve($F, [["__scopeId", "data-v-35547098"]]), bF = window.Vue.openBlock, CF = window.Vue.createElementBlock, u0 = window.Vue.createElementVNode;
var VF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EF = {}, SF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, IF = /* @__PURE__ */ u0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), kF = /* @__PURE__ */ u0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), AF = [
  IF,
  kF
];
function TF(e, o) {
  return bF(), CF("svg", SF, AF);
}
var g_ = /* @__PURE__ */ VF(EF, [["render", TF]]);
const xF = window.Vue.defineComponent, An = window.Vue.createElementVNode, Rt = window.Vue.unref, Jt = window.Vue.createVNode, La = window.Vue.withCtx, LF = window.Vue.renderList, $_ = window.Vue.Fragment, Ma = window.Vue.openBlock, _u = window.Vue.createElementBlock, MF = window.Vue.createBlock, NF = window.Vue.pushScopeId, DF = window.Vue.popScopeId, Zs = (e) => (NF("data-v-76f75ba2"), e = e(), DF(), e), OF = { class: "container" }, BF = { class: "header" }, RF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ An("div", { class: "title" }, "Alarms", -1)), PF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ An("span", null, "Add Alarms", -1)), FF = { class: "alarms-container" }, UF = { class: "filters" }, WF = { class: "list" }, HF = { class: "row actions" }, zF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ An("span", null, "Clear", -1)), qF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ An("span", null, "Acknowledge", -1)), GF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ An("span", null, "Move", -1)), YF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ An("span", null, "Remove", -1)), jF = { class: "section" }, ZF = {
  key: 0,
  class: "alarm-list"
}, gu = window.Vue.ref, KF = window.Vue.watch, JF = window.Vue.reactive, XF = window.Vue.markRaw, QF = /* @__PURE__ */ xF({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = XF({
      Add: uc,
      Delete: g_,
      MarkComplete: Wu,
      CheckCircle: Ds,
      ExitToApp: Yf
    }), s = cc(), a = co(), u = gu(!1), c = gu(["all"]), f = gu(!1), m = gu(!1), v = JF({
      selectedAlarms: [],
      alarms: o.alarms
    });
    KF(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const g = (T) => {
      v.selectedAlarms.includes(T) ? Oe.exports.remove(v.selectedAlarms, (P) => P == T) : v.selectedAlarms.push(T);
    }, y = async (T) => {
      v.selectedAlarms.length ? (await WI(v.selectedAlarms, T), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, b = () => v.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), D = async () => {
      b() && (await Tw(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, O = async (T) => {
      b() && (await Tw(
        o.situationId,
        v.selectedAlarms
      ) ? await R(T, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, R = async (T, P) => {
      P.length ? await jg(T, P) ? a.getSituation(T) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, B = async (T) => {
      await R(o.situationId, T), m.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, A = (T) => {
      v.alarms = T;
    };
    return (T, P) => (Ma(), _u($_, null, [
      An("div", OF, [
        An("div", BF, [
          RF,
          Jt(Rt(we), {
            class: "add-alarms-btn",
            onClick: P[0] || (P[0] = (k) => m.value = !0)
          }, {
            default: La(() => [
              Jt(Rt(X), {
                icon: Rt(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              PF
            ]),
            _: 1
          })
        ]),
        An("div", FF, [
          An("div", UF, [
            Jt(Ys, {
              list: o.alarms,
              onFilteredList: A,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          An("div", WF, [
            An("div", HF, [
              Jt(Rt(Ii), {
                modelValue: u.value,
                "onUpdate:modelValue": P[1] || (P[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Jt(Rt(we), {
                onClick: P[2] || (P[2] = () => y("clear"))
              }, {
                default: La(() => [
                  Jt(Rt(X), {
                    icon: Rt(Wu),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  zF
                ]),
                _: 1
              }),
              Jt(Rt(we), {
                onClick: P[3] || (P[3] = () => y("ack"))
              }, {
                default: La(() => [
                  Jt(Rt(X), {
                    icon: Rt(Ds),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  qF
                ]),
                _: 1
              }),
              Jt(Rt(we), { onClick: S }, {
                default: La(() => [
                  Jt(Rt(X), {
                    icon: Rt(Yf),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  GF
                ]),
                _: 1
              }),
              Jt(Rt(we), { onClick: D }, {
                default: La(() => [
                  Jt(Rt(X), {
                    icon: Rt(g_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  YF
                ]),
                _: 1
              })
            ]),
            An("div", jF, [
              v.alarms.length > 0 ? (Ma(), _u("div", ZF, [
                (Ma(!0), _u($_, null, LF(v.alarms, (k) => (Ma(), _u("div", {
                  key: k.id
                }, [
                  Jt(M8, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: g
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Ma(), MF(js, { key: 1 }))
            ])
          ])
        ])
      ]),
      Jt(l0, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: P[4] || (P[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Jt(yF, {
        visible: m.value,
        onAlarmsSelected: B,
        onDrawerAlarmsClosed: P[5] || (P[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const e6 = /* @__PURE__ */ Ve(QF, [["__scopeId", "data-v-76f75ba2"]]), t6 = window.Vue.defineComponent, io = window.Vue.createVNode, In = window.Vue.unref, _f = window.Vue.normalizeClass, $u = window.Vue.toDisplayString, Na = window.Vue.openBlock, Da = window.Vue.createElementBlock, y_ = window.Vue.createCommentVNode, n6 = window.Vue.withCtx, zn = window.Vue.createElementVNode, o6 = window.Vue.Fragment, r6 = window.Vue.pushScopeId, i6 = window.Vue.popScopeId, s6 = (e) => (r6("data-v-fafb3615"), e = e(), i6(), e), a6 = { class: "section" }, l6 = { class: "action-section" }, u6 = { class: "btn-row" }, c6 = { key: 0 }, d6 = { key: 1 }, f6 = {
  key: 0,
  class: "situation-detail"
}, p6 = { class: "situation-info" }, h6 = { class: "id" }, m6 = ["innerHTML"], w6 = /* @__PURE__ */ s6(() => /* @__PURE__ */ zn("p", null, null, -1)), v6 = { class: "boxes" }, _6 = { class: "parameters" }, g6 = { class: "section memo-boxes" }, $6 = { key: 0 }, y6 = window.Vue.computed, b_ = window.Vue.ref, b6 = window.Vue.watch, C6 = /* @__PURE__ */ t6({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = cc(), s = co(), a = kt.REJECTED, u = b_(o.situationInfo.status), c = b_(o.situationInfo);
    b6(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = y6(
      () => {
        var v;
        return Fg(Pg(((v = c.value) == null ? void 0 : v.description) || ""));
      }
    ), m = async (v) => {
      var y;
      await Yg(
        (y = o.situationInfo) == null ? void 0 : y.id,
        v.toLowerCase()
      ) ? (u.value = v, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, g) => {
      var y, b, D, O, R, B, S, A, T, P, k, U;
      return Na(), Da(o6, null, [
        zn("div", a6, [
          zn("div", l6, [
            io(F1, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            zn("div", u6, [
              io(In(we), {
                class: _f(["btn", { rejected: u.value == In(a) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = (W) => m(In(a)))
              }, {
                default: n6(() => [
                  io(In(X), {
                    icon: In(Ag),
                    "aria-hidden": "true",
                    class: _f(["icon reject", { rejected: u.value == In(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == In(a) ? (Na(), Da("span", c6, $u(In(a)), 1)) : (Na(), Da("span", d6, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Na(), Da("div", f6, [
            zn("div", {
              class: _f(["severity-line", [`${(b = (y = c.value) == null ? void 0 : y.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            zn("div", p6, [
              zn("div", h6, [
                zn("div", null, " Situation - " + $u((D = c.value) == null ? void 0 : D.id) + " - " + $u(c.value.alarms.length) + " alarm(s) affects " + $u(In(Oe.exports.size)(In(Oe.exports.groupBy)((O = c.value) == null ? void 0 : O.alarms, "nodeId"))) + " node(s) ", 1),
                io(P1, {
                  severity: (R = c.value) == null ? void 0 : R.severity
                }, null, 8, ["severity"])
              ]),
              zn("span", {
                innerHTML: In(f),
                "data-test": "situation-description"
              }, null, 8, m6),
              w6,
              zn("div", v6, [
                io(ef, {
                  label: "First Event",
                  info: In(xo)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                io(ef, {
                  label: "Last Event",
                  info: In(xo)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                io(ef, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            zn("div", _6, [
              io(D3, {
                alarms: (B = c.value) == null ? void 0 : B.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : y_("", !0),
          zn("div", g6, [
            io(zu, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (A = c.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = c.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            io(zu, {
              id: (P = c.value) == null ? void 0 : P.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (U = c.value) == null ? void 0 : U.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Na(), Da("div", $6, [
          io(e6, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : y_("", !0)
      ], 64);
    };
  }
});
const V6 = /* @__PURE__ */ Ve(C6, [["__scopeId", "data-v-fafb3615"]]);
var E6 = Object.defineProperty, S6 = Object.defineProperties, I6 = Object.getOwnPropertyDescriptors, C_ = Object.getOwnPropertySymbols, k6 = Object.prototype.hasOwnProperty, A6 = Object.prototype.propertyIsEnumerable, V_ = (e, o, r) => o in e ? E6(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, jf = (e, o) => {
  for (var r in o || (o = {}))
    k6.call(o, r) && V_(e, r, o[r]);
  if (C_)
    for (var r of C_(o))
      A6.call(o, r) && V_(e, r, o[r]);
  return e;
}, T6 = (e, o) => S6(e, I6(o));
const c0 = window.Vue.defineComponent, Vi = window.Vue.resolveComponent, Tu = window.Vue.openBlock, E_ = window.Vue.createBlock, xu = window.Vue.mergeProps, Ei = window.Vue.withCtx, d0 = window.Vue.createElementBlock, x6 = window.Vue.Fragment, L6 = window.Vue.renderList, M6 = window.Vue.createTextVNode, N6 = window.Vue.toDisplayString, D6 = window.Vue.computed, S_ = window.Vue.toRef, Oa = window.Vue.createVNode, I_ = window.Vue.toHandlers, O6 = window.Vue.renderSlot, B6 = window.Vue.normalizeClass, R6 = window.Vue.createElementVNode;
var f0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const P6 = c0({
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
      return be("feather-select-active");
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
        ol(o, this.$refs.list.$el);
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
    FeatherList: cp,
    FeatherListItem: ll
  }
});
function F6(e, o, r, s, a, u) {
  const c = Vi("FeatherListItem"), f = Vi("FeatherList");
  return Tu(), E_(f, xu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Ei(() => [
      (Tu(!0), d0(x6, null, L6(e.options, (m, v) => (Tu(), E_(c, {
        key: m[e.textProp],
        "as-li": "",
        id: e.getId(v),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(v),
        selected: e.isSelected(v),
        onClick: (g) => e.select(m)
      }, {
        default: Ei(() => [
          M6(N6(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var U6 = /* @__PURE__ */ f0(P6, [["render", F6], ["__scopeId", "data-v-eae820da"]]);
const W6 = T6(jf(jf({}, tc), zs), {
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
}), H6 = {
  "update:modelValue": (e) => !0
}, z6 = c0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: H6,
  props: W6,
  setup(e, o) {
    qs(e), nc(e);
    const r = D6(() => be("feather-select-input")), { validate: s } = Ws(r, S_(e, "modelValue"), e.label, e.schema, S_(e, "error"));
    return jf({
      inputId: r,
      validate: s
    }, Hs(o.attrs));
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
      return be("feather-select-description");
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
    icon: () => al
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
      if (e.keyCode === ue.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === ue.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === ue.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === ue.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === ue.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === ue.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Ai(this.delayTimeout), this.delayTimeout = ki(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: ec,
    InputSubText: Us,
    FeatherMenu: s1,
    List: U6,
    FeatherIcon: X
  }
});
function q6(e, o, r, s, a, u) {
  const c = Vi("FeatherIcon"), f = Vi("InputWrapper"), m = Vi("List"), v = Vi("FeatherMenu"), g = Vi("InputSubText");
  return Tu(), d0("div", xu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Oa(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Ei((y) => [
        Oa(f, xu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, I_(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Ei(() => [
            O6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Ei(() => [
            Oa(c, {
              class: B6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Ei(() => [
            R6("input", xu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, I_(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Ei(() => [
        Oa(m, {
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
    Oa(g, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var G6 = /* @__PURE__ */ f0(z6, [["render", q6], ["__scopeId", "data-v-ecb32d90"]]);
const Y6 = window.Vue.openBlock, j6 = window.Vue.createElementBlock, p0 = window.Vue.createElementVNode;
var Z6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const K6 = {}, J6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X6 = /* @__PURE__ */ p0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), Q6 = /* @__PURE__ */ p0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), e7 = [
  X6,
  Q6
];
function t7(e, o) {
  return Y6(), j6("svg", J6, e7);
}
var n7 = /* @__PURE__ */ Z6(K6, [["render", t7]]);
const Lu = window.Vue.openBlock, Zf = window.Vue.createElementBlock, h0 = window.Vue.createElementVNode, o7 = window.Vue.defineComponent, vi = window.Vue.ref, r7 = window.Vue.provide, k_ = window.Vue.computed, i7 = window.Vue.onUnmounted, A_ = window.Vue.toRef, s7 = window.Vue.resolveComponent, a7 = window.Vue.Fragment, l7 = window.Vue.createBlock, u7 = window.Vue.Teleport, T_ = window.Vue.createVNode, c7 = window.Vue.Transition, d7 = window.Vue.withCtx, f7 = window.Vue.normalizeClass, p7 = window.Vue.normalizeStyle, h7 = window.Vue.toDisplayString, m7 = window.Vue.createCommentVNode, w7 = window.Vue.renderSlot, gf = window.Vue.nextTick;
var m0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const v7 = {}, _7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, g7 = /* @__PURE__ */ h0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), $7 = [
  g7
];
function y7(e, o) {
  return Lu(), Zf("svg", _7, $7);
}
var b7 = /* @__PURE__ */ m0(v7, [["render", y7]]), It = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(It || {}), rr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(rr || {});
const C7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(It.top), a >= o.height + s && c.push(It.bottom);
  const f = [];
  u >= o.width + s && f.push(It.right), e.left >= o.width + s && f.push(It.left);
  let m = [...f, ...c];
  return (r === It.top || r === It.bottom) && (m = [...c, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, V7 = (e, o, r, s, a = 28) => {
  if (e === It.left || e === It.right)
    return rr.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], m = u, v = c + o.width / 2, g = r.width - a, y = r.width / 2;
  return m >= y && v >= y && f.push(rr.center), v >= g && f.push(rr.left), m >= g && f.push(rr.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, E7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => It.top
  },
  pointerAlignment: {
    type: String,
    default: () => rr.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, S7 = o7({
  props: E7,
  setup(e) {
    const o = vi(!1), r = vi(!1), s = be("feather-tooltip-trigger"), a = be("feather-tooltip"), u = "data-feather-tooltip";
    r7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Ai(c), o.value || (c = ki(R, e.enterDelay));
    }, m = () => {
      Ai(c), c = ki(B, e.exitDelay);
    }, v = (Ae) => {
      Ae.keyCode === ue.ESCAPE && (Ae.preventDefault(), B(!0));
    }, g = k_(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: v
    }, b = vi(document), D = i1(b, () => B(!0));
    i7(() => B(!0));
    const O = () => document.getElementById(a), R = () => {
      r.value = !1, o.value = !0, gf(() => {
        const Ae = O();
        pe(Ae), o.value = !1, gf(() => {
          r.value = !0, o.value = !0, D.value = !0;
        });
      });
    }, B = (Ae = !1) => {
      U.value = "", k.value = "", W.value = "", K.value = "", o.value = !1, Ae && (r.value = !1), D.value = !1;
    }, S = A_(e, "placement"), A = A_(e, "pointerAlignment"), T = 8, P = 24, k = vi(""), U = vi(""), W = vi(""), K = vi(""), Me = k_(() => K.value ? "p-" + K.value : !1), pe = (Ae) => {
      const Ee = document.querySelector(`[${u}=${s}]`);
      if (!Ee) {
        console.log("trigger not found");
        return;
      }
      gf(() => {
        const We = Ee.getBoundingClientRect(), ze = Ae.getBoundingClientRect(), _e = C7(We, ze, S.value, T), Ze = V7(_e, We, ze, A.value, P);
        W.value = Ze.toString(), K.value = _e.toString();
        let Xe = 0, qe = 0;
        if ((_e === It.left || _e === It.right) && (Xe = We.top + We.height / 2 - ze.height / 2, _e === It.left && (qe = We.left - ze.width - T), _e === It.right && (qe = We.right)), _e === It.top || _e === It.bottom) {
          Xe = We.top - ze.height - T, _e === It.bottom && (Xe = We.bottom);
          const nn = We.left + We.width / 2;
          switch (Ze) {
            case rr.center:
              qe = nn - ze.width / 2;
              break;
            case rr.left:
              qe = nn - P;
              break;
            case rr.right:
              qe = nn - ze.width + P;
              break;
          }
        }
        k.value = Xe.toString() + "px", U.value = qe.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: y,
      show: o,
      animate: r,
      alignmentClass: W,
      placementClass: Me,
      top: k,
      left: U,
      tooltipID: a
    };
  },
  components: {
    Pointer: b7
  }
}), I7 = ["id"];
function k7(e, o, r, s, a, u) {
  const c = s7("Pointer");
  return Lu(), Zf(a7, null, [
    (Lu(), l7(u7, { to: "body" }, [
      T_(c7, { css: e.animate }, {
        default: d7(() => [
          e.show ? (Lu(), Zf("div", {
            key: 0,
            class: f7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: p7({ left: e.left, top: e.top })
          }, [
            h0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, h7(e.title), 9, I7),
            T_(c, { class: "tooltip-pointer" })
          ], 6)) : m7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    w7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var x_ = /* @__PURE__ */ m0(S7, [["render", k7], ["__scopeId", "data-v-3da6b22e"]]);
const A7 = window.Vue.defineComponent, $f = window.Vue.normalizeStyle, yf = window.Vue.createElementVNode, Ba = window.Vue.unref, L_ = window.Vue.toHandlers, M_ = window.Vue.mergeProps, N_ = window.Vue.withCtx, D_ = window.Vue.createVNode, T7 = window.Vue.renderList, x7 = window.Vue.Fragment, Ra = window.Vue.openBlock, Pa = window.Vue.createElementBlock, O_ = window.Vue.normalizeClass, B_ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const L7 = { class: "row" }, M7 = /* @__PURE__ */ A7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Ra(), Pa("div", L7, [
      yf("div", {
        class: "line-gray",
        style: $f({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      D_(Ba(x_), {
        title: Ba(xo)(e.alarm.firstEventTime)
      }, {
        default: N_(({ attrs: f, on: m }) => [
          yf("div", M_({ class: "circle" }, f, L_(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Ra(!0), Pa(x7, null, T7(o.events, (f, m) => (Ra(), Pa("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[m + 1] ? (Ra(), Pa("div", {
          key: 0,
          class: O_(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: $f({
            width: s(f.createTime, o.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : B_("", !0),
        D_(Ba(x_), {
          title: Ba(xo)(e.alarm.firstEventTime)
        }, {
          default: N_(({ attrs: v, on: g }) => [
            o.events[m + 1] ? (Ra(), Pa("div", M_({ key: 0 }, v, L_(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : B_("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      yf("div", {
        class: O_(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: $f({
          width: s(e.events[e.events.length - 1].createTime, Ba(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const N7 = /* @__PURE__ */ Ve(M7, [["__scopeId", "data-v-6c43a557"]]), D7 = window.Vue.openBlock, O7 = window.Vue.createElementBlock, w0 = window.Vue.createElementVNode;
var B7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const R7 = {}, P7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, F7 = /* @__PURE__ */ w0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), U7 = /* @__PURE__ */ w0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), W7 = [
  F7,
  U7
];
function H7(e, o) {
  return D7(), O7("svg", P7, W7);
}
var z7 = /* @__PURE__ */ B7(R7, [["render", H7]]);
const q7 = window.Vue.defineComponent, Kf = window.Vue.createElementVNode, G7 = window.Vue.renderList, R_ = window.Vue.Fragment, bf = window.Vue.openBlock, Cf = window.Vue.createElementBlock, Y7 = window.Vue.normalizeClass, j7 = window.Vue.unref, P_ = window.Vue.toDisplayString, Z7 = window.Vue.pushScopeId, K7 = window.Vue.popScopeId, J7 = (e) => (Z7("data-v-2e087f7b"), e = e(), K7(), e), X7 = /* @__PURE__ */ J7(() => /* @__PURE__ */ Kf("strong", null, "Events:", -1)), Q7 = /* @__PURE__ */ q7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (bf(), Cf(R_, null, [
      X7,
      (bf(!0), Cf(R_, null, G7(o.events, (a) => (bf(), Cf("div", {
        class: "event-description",
        key: a.id
      }, [
        Kf("div", {
          class: Y7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Kf("div", null, P_(j7(xo)(a.createTime)) + " - " + P_(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const eU = /* @__PURE__ */ Ve(Q7, [["__scopeId", "data-v-2e087f7b"]]), tU = window.Vue.defineComponent, nU = window.Vue.normalizeClass, kn = window.Vue.createElementVNode, _s = window.Vue.toDisplayString, dn = window.Vue.unref, gs = window.Vue.createVNode, v0 = window.Vue.createTextVNode, oU = window.Vue.renderList, F_ = window.Vue.Fragment, nr = window.Vue.openBlock, _i = window.Vue.createElementBlock, U_ = window.Vue.createBlock, yu = window.Vue.createCommentVNode, rU = window.Vue.normalizeStyle, iU = window.Vue.pushScopeId, sU = window.Vue.popScopeId, aU = (e) => (iU("data-v-57b5ddda"), e = e(), sU(), e), lU = { class: "section detail" }, uU = { class: "id" }, cU = {
  key: 0,
  class: "section"
}, dU = /* @__PURE__ */ aU(() => /* @__PURE__ */ kn("div", { class: "id" }, "Alarms", -1)), fU = { class: "action-btns" }, pU = { class: "zoom" }, hU = /* @__PURE__ */ v0(" Zoom "), mU = { class: "times" }, wU = {
  key: 0,
  class: "timeline-container"
}, vU = { class: "alarm-id" }, _U = {
  key: 0,
  class: "panel"
}, Ir = window.Vue.ref, gU = window.Vue.watch, $U = /* @__PURE__ */ tU({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var P, k;
    const o = e, r = co(), s = Ir(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Ir(a[0]), c = Ir(o.width), f = Ir(o.width), m = Ir(new Date().getTime()), v = () => {
      var U, W;
      if (!o.situation.events) {
        const K = (W = (U = o.situation) == null ? void 0 : U.alarms) == null ? void 0 : W.map((Me) => Me.id);
        r.getEvents(o.situation.id, K);
      }
    };
    v();
    const g = () => (m.value = new Date().getTime(), c.value / (Number(m.value) - Number(b.value))), y = Ir(o.situation.alarms), b = Ir(
      ((k = Oe.exports.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), D = Ir(g());
    gU(o, () => {
      var U, W;
      b.value = ((W = Oe.exports.minBy((U = o.situation) == null ? void 0 : U.alarms, "firstEventTime")) == null ? void 0 : W.firstEventTime) || new Date().getTime(), v(), c.value = f.value, D.value = g(), y.value = o.situation.alarms, u.value = a[0];
    });
    const O = (U) => {
      if ((U == null ? void 0 : U.id) === 1 && (y.value = o.situation.alarms), (U == null ? void 0 : U.id) === 2) {
        const W = Oe.exports.groupBy(y.value, "severity"), K = [
          ...W.CRITICAL || [],
          ...W.MAJOR || [],
          ...W.MINOR || [],
          ...W.WARNING || [],
          ...W.NORMAL || [],
          ...W.CLEARED || [],
          ...W.INDETERMINATE || []
        ];
        y.value = K.filter((Me) => Me);
      }
      if ((U == null ? void 0 : U.id) === 3) {
        const W = Oe.exports.reverse(
          Oe.exports.sortBy(
            o.situation.alarms,
            (K) => Number(K.lastEventTime) - Number(K.firstEventTime)
          )
        );
        y.value = W;
      }
    }, R = () => {
      c.value += 100, D.value = g();
    }, B = () => {
      c.value -= 100, D.value = g();
    }, S = () => {
      c.value = f.value, D.value = g();
    }, A = (U) => {
      s.value = U;
    }, T = () => {
      s.value = 0;
    };
    return (U, W) => {
      var K, Me;
      return nr(), _i(F_, null, [
        kn("div", lU, [
          kn("div", {
            class: nU(["severity-line", [`${(Me = (K = o.situation) == null ? void 0 : K.severity) == null ? void 0 : Me.toLowerCase()}-bg dark`]])
          }, null, 2),
          kn("div", null, [
            kn("div", uU, "Situation " + _s(o.situation.id), 1),
            kn("div", null, " Duration: " + _s(dn(Ju)(m.value, new Date(b.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (nr(), _i("div", cU, [
          dU,
          kn("div", fU, [
            gs(dn(G6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                W[0] || (W[0] = (pe) => u.value = pe),
                O
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            kn("div", pU, [
              hU,
              kn("div", null, [
                gs(dn(X), {
                  icon: dn(n7),
                  class: "zoom-icon",
                  onClick: R
                }, null, 8, ["icon"]),
                gs(dn(X), {
                  icon: dn(y1),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                gs(dn(X), {
                  icon: dn(z7),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (nr(), _i("div", {
            key: 0,
            class: "alarms",
            style: rU({
              width: f.value + 50 + "px"
            })
          }, [
            kn("div", mU, [
              kn("div", null, _s(dn(xo)(b.value)), 1),
              kn("div", null, _s(dn(xo)(m.value)), 1)
            ]),
            e.situation.events ? (nr(), _i("div", wU, [
              (nr(!0), _i(F_, null, oU(y.value, (pe) => (nr(), _i("div", {
                class: "timeline",
                key: pe.id
              }, [
                kn("div", vU, [
                  v0(_s(pe.nodeLabel) + " - " + _s(pe.id) + " ", 1),
                  s.value === pe.id ? (nr(), U_(dn(X), {
                    key: 0,
                    icon: dn(al),
                    class: "zoom-icon expand",
                    onClick: T
                  }, null, 8, ["icon"])) : (nr(), U_(dn(X), {
                    key: 1,
                    icon: dn(Jg),
                    class: "zoom-icon expand",
                    onClick: () => A(pe.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                gs(N7, {
                  alarm: pe,
                  proportion: D.value,
                  "min-start": b.value,
                  events: o.situation.events[pe.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === pe.id ? (nr(), _i("div", _U, [
                  gs(eU, {
                    events: o.situation.events[pe.id]
                  }, null, 8, ["events"])
                ])) : yu("", !0)
              ]))), 128))
            ])) : yu("", !0)
          ], 4)) : yu("", !0)
        ])) : yu("", !0)
      ], 64);
    };
  }
});
const yU = /* @__PURE__ */ Ve($U, [["__scopeId", "data-v-57b5ddda"]]), bU = window.Vue.defineComponent, pn = window.Vue.createElementVNode, so = window.Vue.unref, Wt = window.Vue.createTextVNode, $s = window.Vue.withCtx, tt = window.Vue.openBlock, CU = window.Vue.createBlock, bu = window.Vue.createCommentVNode, kr = window.Vue.createVNode, it = window.Vue.createElementBlock, VU = window.Vue.resolveComponent, gi = window.Vue.toDisplayString, W_ = window.Vue.renderList, H_ = window.Vue.Fragment, EU = window.Vue.pushScopeId, SU = window.Vue.popScopeId, Ks = (e) => (EU("data-v-8418d0e3"), e = e(), SU(), e), IU = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, kU = { class: "header" }, AU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("h3", null, "AI Suggestions", -1)), TU = { class: "header-actions" }, xU = /* @__PURE__ */ Wt(" Re-evaluate "), LU = /* @__PURE__ */ Wt(" Refresh "), MU = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, NU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("span", null, "Loading\u2026", -1)), DU = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, OU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("span", null, "Requesting a fresh analysis\u2026", -1)), BU = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, RU = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, PU = /* @__PURE__ */ Wt(" The LLM integration is currently disabled. Enable it on the "), FU = /* @__PURE__ */ Wt("configuration page"), UU = /* @__PURE__ */ Wt(" to start generating suggestions for new situations. "), WU = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, HU = /* @__PURE__ */ Wt(" No API key is configured. Add one on the "), zU = /* @__PURE__ */ Wt("configuration page"), qU = /* @__PURE__ */ Wt(" to enable AI suggestions. "), GU = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, YU = /* @__PURE__ */ Wt(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), jU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("strong", null, "Re-evaluate", -1)), ZU = /* @__PURE__ */ Wt(" above to trigger one now. "), KU = [
  YU,
  jU,
  ZU
], JU = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, XU = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, QU = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, e9 = { class: "failed-msg" }, t9 = /* @__PURE__ */ Wt(" The last LLM request failed: "), n9 = /* @__PURE__ */ Wt(" Retry "), o9 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, r9 = /* @__PURE__ */ Wt(" Could not load suggestions. Please retry. "), i9 = /* @__PURE__ */ Wt("Retry"), s9 = {
  key: 6,
  "data-test": "ai-ready"
}, a9 = {
  key: 0,
  class: "meta"
}, l9 = /* @__PURE__ */ Wt(" Generated by "), u9 = { class: "section" }, c9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("h4", null, "Probable root causes", -1)), d9 = {
  key: 0,
  "data-test": "ai-root-causes"
}, f9 = {
  key: 1,
  class: "empty"
}, p9 = { class: "section" }, h9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("h4", null, "Possible resolutions", -1)), m9 = {
  key: 0,
  "data-test": "ai-resolutions"
}, w9 = {
  key: 1,
  class: "empty"
}, Vf = window.Vue.computed, v9 = window.Vue.onBeforeUnmount, _9 = window.Vue.onMounted, Ef = window.Vue.ref, g9 = /* @__PURE__ */ bU({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = Ti(), s = Ef("loading"), a = Ef(null), u = Ef(null), c = 5e3, f = 5 * 60 * 1e3;
    let m = null, v = 0;
    const g = () => {
      m !== null && (clearInterval(m), m = null);
    }, y = () => {
      s.value === "pending" && m === null && (v = Date.now(), m = setInterval(async () => {
        if (Date.now() - v > f) {
          g();
          return;
        }
        await b(), s.value !== "pending" && g();
      }, c));
    }, b = async () => {
      const A = await Gg(o.situationId);
      if (A === !1) {
        s.value = "error";
        return;
      }
      if (A === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = A, s.value = A.status;
    }, D = async () => {
      s.value = "loading", g(), await b(), y();
    }, O = async () => {
      u.value = null, s.value = "reanalyzing", g();
      const A = await MT(o.situationId);
      if (A === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = A, s.value = A.status, y();
    };
    _9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await b(), y();
    }), v9(() => g());
    const R = Vf(() => {
      var A;
      return (A = a.value) != null && A.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), B = Vf(() => {
      const A = r.llmConfig;
      return !A || !A.enabled ? "disabled" : A.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = Vf(
      () => {
        var A, T;
        return ((A = r.llmConfig) == null ? void 0 : A.enabled) === !0 && ((T = r.llmConfig) == null ? void 0 : T.apiKeyPresent) === !0;
      }
    );
    return (A, T) => {
      var k;
      const P = VU("router-link");
      return tt(), it("div", IU, [
        pn("div", kU, [
          AU,
          pn("div", TU, [
            so(S) ? (tt(), CU(so(we), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: O
            }, {
              default: $s(() => [
                xU
              ]),
              _: 1
            }, 8, ["disabled"])) : bu("", !0),
            kr(so(we), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: D
            }, {
              default: $s(() => [
                LU
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (tt(), it("div", MU, [
          kr(so(xs)),
          NU
        ])) : s.value === "reanalyzing" ? (tt(), it("div", DU, [
          kr(so(xs)),
          OU
        ])) : s.value === "absent" ? (tt(), it("div", BU, [
          so(B) === "disabled" ? (tt(), it("span", RU, [
            PU,
            kr(P, { to: "/settings" }, {
              default: $s(() => [
                FU
              ]),
              _: 1
            }),
            UU
          ])) : so(B) === "no-key" ? (tt(), it("span", WU, [
            HU,
            kr(P, { to: "/settings" }, {
              default: $s(() => [
                zU
              ]),
              _: 1
            }),
            qU
          ])) : (tt(), it("span", GU, KU)),
          u.value ? (tt(), it("div", JU, gi(u.value), 1)) : bu("", !0)
        ])) : s.value === "pending" ? (tt(), it("div", XU, [
          kr(so(xs)),
          pn("span", null, " Analyzing alarms with the LLM\u2026 requested at " + gi(so(R)) + ". ", 1)
        ])) : s.value === "failed" ? (tt(), it("div", QU, [
          pn("div", e9, [
            t9,
            pn("code", null, gi(((k = a.value) == null ? void 0 : k.error) || "unknown error"), 1)
          ]),
          kr(so(we), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: D
          }, {
            default: $s(() => [
              n9
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (tt(), it("div", o9, [
          r9,
          kr(so(we), {
            secondary: "",
            onClick: D
          }, {
            default: $s(() => [
              i9
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (tt(), it("div", s9, [
          a.value.completedAt ? (tt(), it("div", a9, [
            l9,
            pn("strong", null, gi(a.value.model), 1),
            Wt(" at " + gi(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : bu("", !0),
          pn("div", u9, [
            c9,
            a.value.rootCauses.length ? (tt(), it("ol", d9, [
              (tt(!0), it(H_, null, W_(a.value.rootCauses, (U, W) => (tt(), it("li", {
                key: `cause-${W}`
              }, gi(U), 1))), 128))
            ])) : (tt(), it("div", f9, "No root causes returned."))
          ]),
          pn("div", p9, [
            h9,
            a.value.resolutions.length ? (tt(), it("ol", m9, [
              (tt(!0), it(H_, null, W_(a.value.resolutions, (U, W) => (tt(), it("li", {
                key: `res-${W}`
              }, gi(U), 1))), 128))
            ])) : (tt(), it("div", w9, "No resolutions returned."))
          ])
        ])) : bu("", !0)
      ]);
    };
  }
});
const $9 = /* @__PURE__ */ Ve(g9, [["__scopeId", "data-v-8418d0e3"]]), y9 = window.Vue.openBlock, b9 = window.Vue.createElementBlock, C9 = window.Vue.createElementVNode;
var V9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const E9 = {}, S9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, I9 = /* @__PURE__ */ C9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), k9 = [
  I9
];
function A9(e, o) {
  return y9(), b9("svg", S9, k9);
}
var Ls = /* @__PURE__ */ V9(E9, [["render", A9]]);
const _0 = window.Vue.defineComponent, Sf = window.Vue.ref, T9 = window.Vue.toRef, If = window.Vue.inject, z_ = window.Vue.watch, x9 = window.Vue.nextTick, q_ = window.Vue.openBlock, G_ = window.Vue.createElementBlock, kf = window.Vue.createElementVNode, L9 = window.Vue.normalizeClass, Y_ = window.Vue.renderSlot, j_ = window.Vue.createCommentVNode, Af = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var M9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const N9 = {
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
}, D9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, O9 = _0({
  emits: D9,
  props: N9,
  setup(e, o) {
    const r = Sf(), s = Sf(!1), a = Sf(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = T9(e, "modelValue"), f = If("queueSnackbar", !1), m = If("unqueueSnackbar", !1), v = If("nextSnackbar", () => {
    }), g = (R, B) => {
      let S, A, T = B;
      const P = () => {
        !S || (Ai(S), S = 0, T -= Date.now() - A);
      }, k = () => {
        S || (A = Date.now(), S = ki(R, T));
      };
      return k(), { pause: P, resume: k };
    }, y = () => {
      s.value = !1, o.emit("closed"), v && v();
    }, b = (R) => {
      R.keyCode === ue.ESCAPE && (a.value = !1);
    }, D = () => {
      r.value.pause();
    }, O = () => {
      a.value && r.value.resume();
    };
    return z_(c, (R) => {
      R ? x9(() => {
        f === !1 ? a.value = R : f(u, a);
      }) : m === !1 ? a.value = R : m(u);
    }, { immediate: !0 }), z_(a, (R) => {
      R ? (s.value = !0, r.value = g(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), D());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: y,
      keyPressed: b,
      stopTimer: D,
      resumeTimer: O
    };
  }
}), B9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, R9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, P9 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, F9 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function U9(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (q_(), G_("div", B9, [
    kf("div", {
      class: L9(["feather-snackbar", {
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
      kf("div", R9, [
        e.contentShow ? (q_(), G_("div", P9, [
          Y_(e.$slots, "default", {}, void 0, !0)
        ])) : j_("", !0)
      ]),
      kf("div", F9, [
        Y_(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : j_("", !0);
}
var pc = /* @__PURE__ */ M9(O9, [["render", U9], ["__scopeId", "data-v-5cf64a62"]]);
const W9 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
_0({
  props: W9,
  setup() {
    let e, o = [];
    const r = () => {
      e && (e.val.value = !0);
    }, s = (c, f) => {
      const m = { id: c, val: f };
      e ? o.push(m) : (e = m, r());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : o = o.filter((f) => f.id != c);
    }, u = () => {
      o.length ? (e = o.shift(), r()) : e = void 0;
    };
    return Af("queueSnackbar", s), Af("unqueueSnackbar", a), Af("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const H9 = window.Vue.defineComponent, Je = window.Vue.unref, Pt = window.Vue.createVNode, rl = window.Vue.createElementVNode, fn = window.Vue.withCtx, $i = window.Vue.openBlock, Tf = window.Vue.createBlock, Z_ = window.Vue.createCommentVNode, ul = window.Vue.createTextVNode, Cu = window.Vue.createElementBlock, K_ = window.Vue.toDisplayString, z9 = window.Vue.pushScopeId, q9 = window.Vue.popScopeId, Cp = (e) => (z9("data-v-a30cdd9d"), e = e(), q9(), e), G9 = { id: "cont" }, Y9 = { class: "btns-navigation" }, j9 = /* @__PURE__ */ Cp(() => /* @__PURE__ */ rl("span", null, "Situation List", -1)), Z9 = /* @__PURE__ */ Cp(() => /* @__PURE__ */ rl("span", null, "Show Previous Situation ", -1)), K9 = /* @__PURE__ */ Cp(() => /* @__PURE__ */ rl("span", null, "Show Next Situation", -1)), J9 = { key: 1 }, X9 = {
  key: 0,
  class: "detail"
}, Q9 = /* @__PURE__ */ ul("Details"), eW = /* @__PURE__ */ ul("Metrics"), tW = /* @__PURE__ */ ul("AI Suggestions"), nW = {
  key: 1,
  class: "noSituation"
}, oW = /* @__PURE__ */ ul("dismiss"), yi = window.Vue.ref, J_ = window.Vue.watch, rW = window.Vue.onMounted, iW = window.VueRouter.useRoute, sW = /* @__PURE__ */ H9({
  __name: "SituationDetail",
  setup(e) {
    const o = Fr(), r = iW(), s = parseInt(r.params.id), a = yi(s), u = co(), c = cc(), f = yi(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const m = yi(), v = yi(), g = yi(!0), y = yi(
      u.filteredSituations.findIndex((B) => B === a.value)
    ), b = yi(!1);
    J_(
      () => u.situationDetail,
      () => {
        m.value = u.situationDetail, g.value = !1, u.getUnassignedAlarms();
      }
    ), rW(() => {
      var S;
      const B = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = B - 90;
    });
    const D = () => {
      o.push({
        name: "situations"
      });
    }, O = (B) => {
      const S = y.value, A = u.filteredSituations[S + B];
      o.push({
        name: "situationDetail",
        params: {
          id: A
        }
      });
    };
    J_(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((B) => B == a.value);
    }), c.$subscribe((B, S) => {
      b.value = S.showError;
    });
    const R = (B) => {
      f.value = B || 0;
    };
    return (B, S) => ($i(), Cu("div", G9, [
      rl("div", Y9, [
        Pt(Je(we), {
          primary: "",
          onClick: S[0] || (S[0] = () => D())
        }, {
          default: fn(() => [
            Pt(Je(X), {
              icon: Je(Ls),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            j9
          ]),
          _: 1
        }),
        rl("div", null, [
          Pt(Je(we), {
            disabled: !Je(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => O(-1))
          }, {
            default: fn(() => [
              Pt(Je(X), {
                icon: Je(Ls),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              Z9
            ]),
            _: 1
          }, 8, ["disabled"]),
          Pt(Je(we), {
            disabled: !Je(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => O(1))
          }, {
            default: fn(() => [
              K9,
              Pt(Je(X), {
                icon: Je(Ls),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      g.value ? ($i(), Tf(Je(xs), {
        key: 0,
        class: "spinner"
      })) : ($i(), Cu("div", J9, [
        m.value ? ($i(), Cu("div", X9, [
          Pt(Je(R1), { "onUpdate:modelValue": R }, {
            tabs: fn(() => [
              Pt(Je(Ja), null, {
                default: fn(() => [
                  Q9
                ]),
                _: 1
              }),
              Pt(Je(Ja), null, {
                default: fn(() => [
                  eW
                ]),
                _: 1
              }),
              Pt(Je(Ja), { "data-test": "ai-suggestions-tab" }, {
                default: fn(() => [
                  tW
                ]),
                _: 1
              })
            ]),
            default: fn(() => [
              Pt(Je(Xa), { class: "panel" }, {
                default: fn(() => [
                  Pt(V6, { "situation-info": m.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Pt(Je(Xa), { class: "panel" }, {
                default: fn(() => [
                  v.value && f.value == 1 ? ($i(), Tf(yU, {
                    key: 0,
                    situation: m.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Z_("", !0)
                ]),
                _: 1
              }),
              Pt(Je(Xa), { class: "panel" }, {
                default: fn(() => [
                  f.value == 2 ? ($i(), Tf($9, {
                    key: m.value.id,
                    "situation-id": m.value.id
                  }, null, 8, ["situation-id"])) : Z_("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : ($i(), Cu("div", nW, " Error. The situation " + K_(Je(s)) + " does not exist. ", 1))
      ])),
      Pt(Je(pc), {
        modelValue: b.value,
        "onUpdate:modelValue": S[4] || (S[4] = (A) => b.value = A),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: fn(() => [
          Pt(Je(we), {
            onClick: S[3] || (S[3] = (A) => b.value = !1),
            text: ""
          }, {
            default: fn(() => [
              oW
            ]),
            _: 1
          })
        ]),
        default: fn(() => [
          ul(K_(Je(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const aW = /* @__PURE__ */ Ve(sW, [["__scopeId", "data-v-a30cdd9d"]]), lW = window.Vue.defineComponent, Et = window.Vue.unref, Wn = window.Vue.createVNode, tn = window.Vue.createElementVNode, ys = window.Vue.withCtx, bs = window.Vue.openBlock, Fa = window.Vue.createElementBlock, uW = window.Vue.createCommentVNode, cW = window.Vue.toDisplayString, Vp = window.Vue.createTextVNode, dW = window.Vue.normalizeClass, fW = window.Vue.renderList, pW = window.Vue.Fragment, hW = window.Vue.createBlock, mW = window.Vue.pushScopeId, wW = window.Vue.popScopeId, cl = (e) => (mW("data-v-00de2cfc"), e = e(), wW(), e), vW = { class: "container" }, _W = /* @__PURE__ */ cl(() => /* @__PURE__ */ tn("span", null, "Situation List", -1)), gW = /* @__PURE__ */ cl(() => /* @__PURE__ */ tn("h2", null, "New Situation", -1)), $W = { class: "form" }, yW = { class: "fields" }, bW = {
  key: 0,
  class: "errorList"
}, CW = { class: "footer" }, VW = /* @__PURE__ */ cl(() => /* @__PURE__ */ tn("span", null, "Clear", -1)), EW = /* @__PURE__ */ cl(() => /* @__PURE__ */ tn("span", null, "Add Situation", -1)), SW = { class: "alarm-column" }, IW = { class: "header-alarms" }, kW = /* @__PURE__ */ cl(() => /* @__PURE__ */ tn("h3", null, "Add Unassociated Alarms", -1)), AW = /* @__PURE__ */ Vp(" Total Alarms Added: "), TW = { class: "total" }, xW = { class: "list" }, LW = { class: "filters" }, MW = {
  key: 0,
  class: "alarms"
}, NW = /* @__PURE__ */ Vp(" Error on creating new situation :( "), DW = /* @__PURE__ */ Vp("dismiss"), Ar = window.Vue.ref, OW = window.Vue.watch, BW = /* @__PURE__ */ lW({
  __name: "AddSituation",
  setup(e) {
    const o = Fr(), r = co(), s = Ar(), a = Ar(""), u = Ar(), c = Ar(""), f = Ar([]), m = Ar(!1), v = Ar(), g = Ar(r.unassignedAlarms);
    g.value.length || r.getUnassignedAlarms(), OW(
      () => r.unassignedAlarms,
      () => {
        g.value = r.unassignedAlarms;
      }
    );
    const y = () => {
      o.push({
        name: "situations"
      });
    }, b = (S) => {
      m.value = !1, Oe.exports.includes(f.value, S) ? Oe.exports.remove(f.value, (A) => A === S) : f.value.push(S);
    }, D = () => {
      const S = "This field should not be empty";
      let A = !0;
      return s.value || (a.value = S, A = !1), u.value || (c.value = S, A = !1), f.value.length < 2 && (m.value = !0, A = !1), A;
    }, O = async () => {
      if (D()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await DT(S) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, R = () => {
      s.value = "", u.value = "", f.value = [], g.value = r.unassignedAlarms;
    }, B = (S) => {
      g.value = S;
    };
    return (S, A) => (bs(), Fa("div", vW, [
      Wn(Et(we), {
        primary: "",
        onClick: A[0] || (A[0] = () => y()),
        class: "back-btn"
      }, {
        default: ys(() => [
          Wn(Et(X), {
            icon: Et(Ls),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          _W
        ]),
        _: 1
      }),
      gW,
      tn("div", $W, [
        tn("div", yW, [
          Wn(Et(Hu), {
            modelValue: s.value,
            "onUpdate:modelValue": A[1] || (A[1] = (T) => s.value = T),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Wn(Et(Hu), {
            modelValue: u.value,
            "onUpdate:modelValue": A[2] || (A[2] = (T) => u.value = T),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          m.value ? (bs(), Fa("div", bW, " You must add at least 2 alarms. ")) : uW("", !0),
          tn("div", CW, [
            Wn(Et(we), {
              class: "btn",
              onClick: R
            }, {
              default: ys(() => [
                Wn(Et(X), {
                  icon: Et(Ps),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                VW
              ]),
              _: 1
            }),
            Wn(Et(we), {
              class: "btn-add",
              onClick: O
            }, {
              default: ys(() => [
                Wn(Et(X), {
                  icon: Et(uc),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                EW
              ]),
              _: 1
            })
          ])
        ]),
        tn("div", SW, [
          tn("div", IW, [
            kW,
            tn("div", null, [
              tn("div", {
                class: dW(["totalAlarms", { errorList: m.value }])
              }, [
                AW,
                tn("span", TW, cW(Et(f).length), 1)
              ], 2)
            ])
          ]),
          tn("div", xW, [
            tn("div", LW, [
              Wn(Ys, {
                list: Et(r).unassignedAlarms,
                onFilteredList: B,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            g.value.length ? (bs(), Fa("div", MW, [
              (bs(!0), Fa(pW, null, fW(g.value, (T) => (bs(), Fa("div", {
                key: T.id,
                class: "alarm-card"
              }, [
                Wn(bp, {
                  selected: Et(Oe.exports.includes)(Et(f), T.id),
                  alarm: T,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (bs(), hW(js, { key: 1 }))
          ])
        ])
      ]),
      Wn(Et(pc), {
        modelValue: v.value,
        "onUpdate:modelValue": A[4] || (A[4] = (T) => v.value = T),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: ys(() => [
          Wn(Et(we), {
            onClick: A[3] || (A[3] = (T) => v.value = !1),
            text: ""
          }, {
            default: ys(() => [
              DW
            ]),
            _: 1
          })
        ]),
        default: ys(() => [
          NW
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const RW = /* @__PURE__ */ Ve(BW, [["__scopeId", "data-v-00de2cfc"]]), PW = window.Vue.defineComponent, FW = window.Vue.createElementVNode, UW = window.Vue.createTextVNode, WW = window.Vue.unref, HW = window.Vue.withCtx, zW = window.Vue.createVNode, qW = window.Vue.Fragment, GW = window.Vue.openBlock, YW = window.Vue.createElementBlock, jW = window.Vue.pushScopeId, ZW = window.Vue.popScopeId, KW = (e) => (jW("data-v-bcb7dcc6"), e = e(), ZW(), e), JW = /* @__PURE__ */ KW(() => /* @__PURE__ */ FW("div", { class: "main" }, "Something bad is happening...", -1)), XW = /* @__PURE__ */ UW(" Reload "), QW = /* @__PURE__ */ PW({
  __name: "ErrorPage",
  setup(e) {
    const o = Fr(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (GW(), YW(qW, null, [
      JW,
      zW(WW(we), {
        primary: "",
        onClick: r
      }, {
        default: HW(() => [
          XW
        ]),
        _: 1
      })
    ], 64));
  }
});
const eH = /* @__PURE__ */ Ve(QW, [["__scopeId", "data-v-bcb7dcc6"]]), tH = window.Vue.defineComponent, Xt = window.Vue.unref, ao = window.Vue.createVNode, Nr = window.Vue.createElementVNode, Ua = window.Vue.withCtx, bi = window.Vue.openBlock, X_ = window.Vue.createBlock, nH = window.Vue.renderList, oH = window.Vue.Fragment, Wa = window.Vue.createElementBlock, rH = window.Vue.toDisplayString, g0 = window.Vue.createTextVNode, iH = window.Vue.pushScopeId, sH = window.Vue.popScopeId, Ep = (e) => (iH("data-v-fbf68b2e"), e = e(), sH(), e), aH = { class: "container" }, lH = { class: "nav-btns" }, uH = /* @__PURE__ */ Ep(() => /* @__PURE__ */ Nr("span", null, "Situation List", -1)), cH = /* @__PURE__ */ Ep(() => /* @__PURE__ */ Nr("h2", null, "List Unassociated Alarms", -1)), dH = { class: "content" }, fH = { class: "filters" }, pH = { class: "list" }, hH = { class: "action-btns" }, mH = /* @__PURE__ */ Ep(() => /* @__PURE__ */ Nr("span", null, "Move", -1)), wH = { key: 1 }, vH = {
  key: 0,
  class: "alarms"
}, _H = /* @__PURE__ */ g0("dismiss"), Tr = window.Vue.ref, gH = window.Vue.watch, $H = window.Vue.markRaw, yH = /* @__PURE__ */ tH({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = $H({
      ArrowBack: Ls,
      ExitToApp: Yf
    }), r = Fr(), s = co();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Tr([]), u = Tr([]), c = Tr(!1), f = Tr(!1), m = Tr(""), v = Tr(!1), g = Tr(!1), y = Tr(!0);
    gH(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, y.value = !1;
      }
    );
    const b = (A) => {
      Oe.exports.includes(u.value, A) ? Oe.exports.remove(u.value, (T) => T === A) : u.value.push(A);
    }, D = () => {
      c.value ? u.value = a.value.map((A) => A.id) : u.value = [];
    }, O = async (A) => {
      await jg(A, u.value) ? s.getUnassignedAlarms() : (v.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, R = () => {
      r.push({
        name: "situations"
      });
    }, B = () => {
      u.value.length ? f.value = !0 : (v.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    }, S = (A) => {
      a.value = A;
    };
    return (A, T) => (bi(), Wa("div", aH, [
      Nr("div", lH, [
        ao(Xt(we), {
          primary: "",
          onClick: T[0] || (T[0] = () => R())
        }, {
          default: Ua(() => [
            ao(Xt(X), {
              icon: Xt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            uH
          ]),
          _: 1
        }),
        ao(E1)
      ]),
      cH,
      Nr("div", dH, [
        Nr("div", fH, [
          ao(Ys, {
            list: Xt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Nr("div", pH, [
          Nr("div", hH, [
            ao(Xt(Ii), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                T[1] || (T[1] = (P) => c.value = P),
                D
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            ao(Xt(we), { onClick: B }, {
              default: Ua(() => [
                ao(Xt(X), {
                  icon: Xt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                mH
              ]),
              _: 1
            })
          ]),
          y.value ? (bi(), X_(Xt(xs), {
            key: 0,
            class: "spinner"
          })) : (bi(), Wa("div", wH, [
            Xt(a).length ? (bi(), Wa("div", vH, [
              (bi(!0), Wa(oH, null, nH(Xt(a), (P) => (bi(), Wa("div", {
                key: P.id,
                class: "card"
              }, [
                ao(bp, {
                  selected: Xt(Oe.exports.includes)(Xt(u), P.id),
                  alarm: P,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (bi(), X_(js, { key: 1 }))
          ]))
        ])
      ]),
      ao(l0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: T[2] || (T[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      ao(Xt(pc), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (P) => v.value = P),
        right: "",
        error: g.value,
        timeout: 6e3
      }, {
        button: Ua(() => [
          ao(Xt(we), {
            onClick: T[3] || (T[3] = (P) => v.value = !1),
            text: ""
          }, {
            default: Ua(() => [
              _H
            ]),
            _: 1
          })
        ]),
        default: Ua(() => [
          g0(rH(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const bH = /* @__PURE__ */ Ve(yH, [["__scopeId", "data-v-fbf68b2e"]]), CH = window.Vue.defineComponent, xf = window.Vue.unref, VH = window.Vue.createVNode, EH = window.Vue.createElementVNode, SH = window.Vue.withCtx, IH = window.Vue.openBlock, kH = window.Vue.createBlock, AH = window.Vue.pushScopeId, TH = window.Vue.popScopeId, xH = (e) => (AH("data-v-17251e76"), e = e(), TH(), e), LH = /* @__PURE__ */ xH(() => /* @__PURE__ */ EH("span", null, "Situation List", -1)), MH = window.Vue.markRaw, NH = /* @__PURE__ */ CH({
  __name: "SituationListBtn",
  setup(e) {
    const o = Fr(), r = MH({
      ArrowBack: Ls
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (IH(), kH(xf(we), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: SH(() => [
        VH(xf(X), {
          icon: xf(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        LH
      ]),
      _: 1
    }));
  }
});
const DH = /* @__PURE__ */ Ve(NH, [["__scopeId", "data-v-17251e76"]]);
var OH = Object.defineProperty, BH = Object.defineProperties, RH = Object.getOwnPropertyDescriptors, Q_ = Object.getOwnPropertySymbols, PH = Object.prototype.hasOwnProperty, FH = Object.prototype.propertyIsEnumerable, eg = (e, o, r) => o in e ? OH(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ks = (e, o) => {
  for (var r in o || (o = {}))
    PH.call(o, r) && eg(e, r, o[r]);
  if (Q_)
    for (var r of Q_(o))
      FH.call(o, r) && eg(e, r, o[r]);
  return e;
}, UH = (e, o) => BH(e, RH(o));
const WH = window.Vue.defineComponent, tg = window.Vue.toRef, HH = window.Vue.computed, zH = window.Vue.ref, ng = window.Vue.resolveComponent, og = window.Vue.openBlock, rg = window.Vue.createElementBlock, ig = window.Vue.mergeProps, sg = window.Vue.createVNode, qH = window.Vue.normalizeClass, Vu = window.Vue.withCtx, ag = window.Vue.renderSlot, GH = window.Vue.createElementVNode, YH = window.Vue.toHandlers, jH = window.Vue.toDisplayString, ZH = window.Vue.createCommentVNode, KH = ks(ks({
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
}, tc), zs), JH = {
  "update:modelValue": (e) => !0
};
var XH = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QH = WH({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: JH,
  props: KH,
  setup(e, o) {
    qs(e), nc(e);
    const r = tg(e, "id"), s = HH(() => r.value ? r.value : be("feather-input-label")), a = zH(), { validate: u } = Ws(s, a, e.label, e.schema, tg(e, "error"));
    return ks({
      inputId: s,
      internalValue: a,
      validate: u
    }, Hs(o.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return be("feather-input-description");
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
      const e = ks({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), UH(ks(ks({}, e), this.listeners), {
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
    InputSubText: Us,
    InputWrapper: ec
  }
}), ez = ["maxlength"], tz = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function nz(e, o, r, s, a, u) {
  const c = ng("InputWrapper"), f = ng("InputSubText");
  return og(), rg("div", ig(e.inherittedAttrs, { class: "feather-input-container" }), [
    sg(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: qH(["feather-input-content", e.contentCls])
    }, {
      pre: Vu(() => [
        ag(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Vu(() => [
        ag(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Vu(() => [
        GH("input", ig(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, YH(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, ez)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    sg(f, { id: e.descriptionId }, {
      right: Vu(() => [
        e.maxlength ? (og(), rg("div", tz, jH(e.charCount), 1)) : ZH("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var xr = /* @__PURE__ */ XH(QH, [["render", nz], ["__scopeId", "data-v-bf37b0d6"]]);
const oz = window.Vue.openBlock, rz = window.Vue.createElementBlock, Sp = window.Vue.createElementVNode;
var iz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sz = {}, az = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lz = /* @__PURE__ */ Sp("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), uz = /* @__PURE__ */ Sp("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), cz = /* @__PURE__ */ Sp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), dz = [
  lz,
  uz,
  cz
];
function fz(e, o) {
  return oz(), rz("svg", az, dz);
}
var pz = /* @__PURE__ */ iz(sz, [["render", fz]]);
const hz = window.Vue.openBlock, mz = window.Vue.createElementBlock, $0 = window.Vue.createElementVNode;
var wz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const vz = {}, _z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, gz = /* @__PURE__ */ $0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), $z = /* @__PURE__ */ $0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), yz = [
  gz,
  $z
];
function bz(e, o) {
  return hz(), mz("svg", _z, yz);
}
var Cz = /* @__PURE__ */ wz(vz, [["render", bz]]);
const y0 = [
  {
    name: "Anthropic (Claude)",
    baseUrl: "https://api.anthropic.com/v1/",
    matches: ["api.anthropic.com"],
    keyHint: "sk-ant-\u2026 key",
    models: [
      { id: "claude-opus-4-8", tier: "advanced" },
      { id: "claude-sonnet-4-6", tier: "balanced" },
      { id: "claude-haiku-4-5", tier: "economy" }
    ]
  },
  {
    name: "OpenAI",
    baseUrl: "https://api.openai.com/v1",
    matches: ["api.openai.com"],
    keyHint: "sk-\u2026 key",
    models: [
      { id: "gpt-4o", tier: "advanced" },
      { id: "o4-mini", tier: "balanced" },
      { id: "gpt-4o-mini", tier: "economy" }
    ]
  },
  {
    name: "OpenRouter",
    baseUrl: "https://openrouter.ai/api/v1",
    matches: ["openrouter.ai"],
    keyHint: "sk-or-\u2026 key",
    models: [
      { id: "anthropic/claude-opus-4.1", tier: "advanced" },
      { id: "openai/gpt-4o", tier: "advanced" },
      { id: "anthropic/claude-sonnet-4.6", tier: "balanced" },
      { id: "google/gemini-2.5-flash", tier: "economy" },
      { id: "meta-llama/llama-3.3-70b-instruct", tier: "economy" }
    ]
  },
  {
    name: "LM Studio",
    baseUrl: "http://127.0.0.1:1234/v1",
    matches: ["127.0.0.1:1234", "localhost:1234"],
    keyHint: "any non-empty value (ignored by the server)",
    local: !0,
    models: []
  },
  {
    name: "Ollama",
    baseUrl: "http://127.0.0.1:11434/v1",
    matches: [":11434"],
    keyHint: "any non-empty value (ignored by the server)",
    local: !0,
    models: []
  }
], b0 = (e) => {
  const o = (e || "").toLowerCase();
  if (!!o)
    return y0.find((r) => r.matches.some((s) => o.includes(s)));
}, Vz = () => y0, Ez = (e) => {
  var o, r;
  return (r = (o = b0(e)) == null ? void 0 : o.models) != null ? r : [];
}, Sz = window.Vue.defineComponent, de = window.Vue.createVNode, L = window.Vue.createElementVNode, oe = window.Vue.createTextVNode, H = window.Vue.unref, at = window.Vue.withCtx, Ye = window.Vue.openBlock, st = window.Vue.createElementBlock, Ft = window.Vue.createCommentVNode, je = window.Vue.toDisplayString, Ha = window.Vue.Fragment, Lf = window.Vue.createBlock, lg = window.Vue.renderList, Iz = window.Vue.normalizeClass, kz = window.Vue.pushScopeId, Az = window.Vue.popScopeId, Le = (e) => (kz("data-v-44b4fabb"), e = e(), Az(), e), Tz = { class: "container" }, xz = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), Lz = /* @__PURE__ */ oe("Correlation Engine"), Mz = /* @__PURE__ */ oe("LLM Root Cause Analysis"), Nz = { class: "section" }, Dz = { class: "title-row" }, Oz = { class: "title" }, Bz = /* @__PURE__ */ oe(" Choose the correlation engine that ALEC will use (see "), Rz = ["href"], Pz = /* @__PURE__ */ oe(" for more information): "), Fz = ["aria-expanded"], Uz = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, Wz = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "Clustering"),
    /* @__PURE__ */ oe(" \u2014 the default engine. It runs the DBSCAN algorithm over recent alarms and groups them into a situation when they are close in both time and network topology. Tune how aggressively it groups with the Correlation variables below. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "Hellinger distance"),
    /* @__PURE__ */ oe(" \u2014 an optional, more refined way for the Clustering engine to measure how far apart two alarms are. Rather than a plain time/topology distance, it compares the statistical distribution of each alarm's surroundings, which helps separate unrelated alarms that merely happen to occur close together. Enable it with the checkbox; it adds two extra tuning variables (Hellinger w and bias). Only the Clustering engine supports it. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "LLM Based"),
    /* @__PURE__ */ oe(" \u2014 a future engine that would let a large language model drive correlation itself (coming soon). This is separate from "),
    /* @__PURE__ */ L("em", null, "LLM Root Cause Analysis"),
    /* @__PURE__ */ oe(" on the other tab, which explains the situations the Clustering engine already builds. ")
  ])
], -1)), Hz = [
  Wz
], zz = /* @__PURE__ */ oe("Clustering"), qz = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", { class: "hellinger" }, [
  /* @__PURE__ */ L("strong", null, "Hellinger distance")
], -1)), Gz = /* @__PURE__ */ oe(" LLM Based "), Yz = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), jz = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, Zz = { class: "title-row" }, Kz = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", { class: "title" }, "Correlation variables", -1)), Jz = ["aria-expanded"], Xz = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, Qz = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("strong", null, "Alpha (\u03B1)", -1)), eq = /* @__PURE__ */ oe(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), tq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("strong", null, "Beta (\u03B2)", -1)), nq = /* @__PURE__ */ oe(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), oq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("code", null, "[0, 1]", -1)), rq = /* @__PURE__ */ oe(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), iq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("strong", null, "Epsilon (\u03B5)", -1)), sq = /* @__PURE__ */ oe(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), aq = { "data-test": "help-hellinger-w" }, lq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("strong", null, "Hellinger w", -1)), uq = /* @__PURE__ */ oe(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), cq = { "data-test": "help-hellinger-bias" }, dq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("strong", null, "Hellinger bias", -1)), fq = /* @__PURE__ */ oe(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), pq = { class: "variables" }, hq = {
  class: "section",
  "data-test": "llm-section"
}, mq = { class: "title-row" }, wq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", { class: "title" }, "LLM Root Cause Analysis", -1)), vq = ["aria-expanded"], _q = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", { class: "llm-help" }, " ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM). It works with any OpenAI-compatible, API-enabled LLM \u2014 commercial or locally hosted \u2014 and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), gq = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, $q = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("p", { class: "help-intro" }, [
  /* @__PURE__ */ oe(" ALEC sends each new situation to the model you configure and shows the suggested root causes and resolutions on the situation's "),
  /* @__PURE__ */ L("em", null, "AI Suggestions"),
  /* @__PURE__ */ oe(" tab. ")
], -1)), yq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ oe(" Works with any service that exposes an OpenAI-compatible "),
    /* @__PURE__ */ L("code", null, "/chat/completions"),
    /* @__PURE__ */ oe(" API \u2014 a hosted provider (OpenAI, Anthropic, OpenRouter, \u2026) or a local server (LM Studio, Ollama, \u2026). The Endpoint and Model "),
    /* @__PURE__ */ L("em", null, "\u25BE"),
    /* @__PURE__ */ oe(" menus list common choices. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ oe(" The model must support "),
    /* @__PURE__ */ L("em", null, "tool/function calling"),
    /* @__PURE__ */ oe(". Use "),
    /* @__PURE__ */ L("em", null, "Validate key"),
    /* @__PURE__ */ oe(" to confirm the endpoint, model and key work before saving. ")
  ]),
  /* @__PURE__ */ L("li", null, " The API key is stored on the OpenNMS server and never shown again. Hosted providers bill per token; local models are free. ")
], -1)), bq = [
  $q,
  yq
], Cq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("strong", null, "LLM Enabled Root Cause Analysis", -1)), Vq = /* @__PURE__ */ oe(" Automatically AI Evaluate new situations "), Eq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, Sq = { class: "llm-field-block" }, Iq = { class: "llm-field-header" }, kq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), Aq = { class: "llm-field-actions" }, Tq = ["disabled"], xq = /* @__PURE__ */ oe(" Reset to default "), Lq = ["disabled"], Mq = /* @__PURE__ */ oe(" Set as default "), Nq = { class: "llm-combo" }, Dq = ["aria-expanded"], Oq = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, Bq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("li", { class: "llm-combo-hint" }, "Common providers \u2014 or type your own", -1)), Rq = ["onClick"], Pq = { class: "llm-combo-item-main" }, Fq = { class: "llm-combo-item-sub" }, Uq = { class: "llm-field-block" }, Wq = { class: "llm-field-header" }, Hq = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Model", -1)), zq = { class: "llm-field-actions" }, qq = ["disabled"], Gq = /* @__PURE__ */ oe(" Reset to default "), Yq = ["disabled"], jq = /* @__PURE__ */ oe(" Set as default "), Zq = { class: "llm-combo" }, Kq = ["aria-expanded"], Jq = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, Xq = { class: "llm-combo-hint" }, Qq = ["onClick"], eG = { class: "llm-combo-item-main" }, tG = {
  key: 1,
  class: "llm-combo-hint"
}, nG = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, oG = { class: "llm-prompt-header" }, rG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("span", { class: "llm-prompt-label" }, "System prompt", -1)), iG = ["disabled"], sG = /* @__PURE__ */ oe(" Reset to default "), aG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), lG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ oe(" Your API key must come from the same provider as the Endpoint above \u2014 an Anthropic key ("),
  /* @__PURE__ */ L("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ oe(") for "),
  /* @__PURE__ */ L("code", null, "api.anthropic.com"),
  /* @__PURE__ */ oe(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ L("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ oe(") for "),
  /* @__PURE__ */ L("code", null, "openrouter.ai"),
  /* @__PURE__ */ oe(", or an OpenAI key for "),
  /* @__PURE__ */ L("code", null, "api.openai.com"),
  /* @__PURE__ */ oe(". ")
], -1)), uG = { class: "llm-key-row" }, cG = /* @__PURE__ */ oe(" Clear Key "), dG = { class: "llm-validate-row" }, fG = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, pG = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, hG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), mG = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, wG = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, vG = { class: "usage-summary" }, _G = { class: "usage-label" }, gG = ["title"], $G = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, yG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("dt", null, "Input", -1)), bG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("dt", null, "Output", -1)), CG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("dt", null, "Cache read", -1)), VG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("dt", null, "Cache create", -1)), EG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("dt", null, "Calls", -1)), SG = { class: "muted" }, IG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("dt", null, "Cache hit", -1)), kG = { class: "action-row" }, AG = /* @__PURE__ */ oe(" Close All Open Situations "), TG = /* @__PURE__ */ oe(" Re-Evaluate All Open Alarms "), xG = /* @__PURE__ */ Le(() => /* @__PURE__ */ L("span", null, "Save Changes", -1)), LG = /* @__PURE__ */ oe("dismiss"), Hn = window.Vue.computed, MG = window.Vue.markRaw, NG = window.Vue.onMounted, DG = window.Vue.onUnmounted, xe = window.Vue.ref, OG = /* @__PURE__ */ Sz({
  __name: "AccountSettings",
  setup(e) {
    var Nt, Zn, Kn, Do, Oo, Bo, ho, mo, _n, bt, ar, zr, qr, Ro, lr, Po, Fo, qt, Jn, Uo, ur, Ni, Gr, wo, Yr, vo, Di, _o, Oi;
    const o = (re) => re >= 1e6 ? (re / 1e6).toFixed(1) + "M" : re >= 1e3 ? (re / 1e3).toFixed(1) + "K" : String(re), r = MG({
      MarkComplete: Wu,
      Help: pz,
      Restore: Cz,
      ExpandMore: al
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Ti(), u = xe(((Nt = a.engineInfo) == null ? void 0 : Nt.engineName) || kt.ENGINE_DBSCAN), c = xe(
      a.engineInfo ? a.engineInfo.distanceMeasureName === kt.HELLINGER_OPTION : !0
    ), f = xe((Kn = (Zn = a.engineInfo) == null ? void 0 : Zn.alpha) != null ? Kn : s.alpha), m = xe((Oo = (Do = a.engineInfo) == null ? void 0 : Do.beta) != null ? Oo : s.beta), v = xe((ho = (Bo = a.engineInfo) == null ? void 0 : Bo.epsilon) != null ? ho : s.epsilon), g = xe(
      (_n = (mo = a.engineInfo) == null ? void 0 : mo.hellingerW) != null ? _n : s.hellingerW
    ), y = xe(
      (ar = (bt = a.engineInfo) == null ? void 0 : bt.hellingerBias) != null ? ar : s.hellingerBias
    ), b = Hn(() => u.value === kt.ENGINE_DBSCAN), D = Hn(() => b.value && c.value), O = xe(a.llmConfig !== null), R = xe((qr = (zr = a.llmConfig) == null ? void 0 : zr.enabled) != null ? qr : !1), B = xe((lr = (Ro = a.llmConfig) == null ? void 0 : Ro.autoEvaluate) != null ? lr : !0), S = xe((Fo = (Po = a.llmConfig) == null ? void 0 : Po.baseUrl) != null ? Fo : ""), A = xe((Jn = (qt = a.llmConfig) == null ? void 0 : qt.model) != null ? Jn : ""), T = xe((ur = (Uo = a.llmConfig) == null ? void 0 : Uo.defaultBaseUrl) != null ? ur : ""), P = xe((Gr = (Ni = a.llmConfig) == null ? void 0 : Ni.defaultModel) != null ? Gr : ""), k = xe((Yr = (wo = a.llmConfig) == null ? void 0 : wo.systemPrompt) != null ? Yr : ""), U = xe((Di = (vo = a.llmConfig) == null ? void 0 : vo.defaultSystemPrompt) != null ? Di : ""), W = Hn(
      () => U.value.length > 0 && k.value.trim() !== U.value.trim()
    ), K = () => {
      k.value = U.value;
    }, Me = Hn(
      () => T.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), pe = Hn(
      () => P.value.trim().length > 0 && A.value.trim() !== P.value.trim()
    ), Ae = Hn(
      () => S.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), Ee = Hn(
      () => A.value.trim().length > 0 && A.value.trim() !== P.value.trim()
    ), We = () => {
      S.value = T.value;
    }, ze = () => {
      A.value = P.value;
    }, _e = () => {
      T.value = S.value.trim();
    }, Ze = () => {
      P.value = A.value.trim();
    }, Xe = Vz(), qe = xe(!1), nn = xe(!1), Mo = Hn(() => Ez(S.value)), Se = Hn(() => b0(S.value)), Js = (re) => {
      S.value = re, qe.value = !1;
    }, Xs = (re) => {
      A.value = re, nn.value = !1;
    }, Mi = (re) => {
      const G = re.target;
      (!G || !G.closest(".llm-combo")) && (qe.value = !1, nn.value = !1);
    }, gt = xe(""), Ht = xe((Oi = (_o = a.llmConfig) == null ? void 0 : _o.apiKeyPresent) != null ? Oi : !1), on = xe(!1), vn = xe(!1), rn = xe(null), Ur = Hn(
      () => gt.value.trim().length === 0 && (!Ht.value || on.value)
    ), Be = async () => {
      rn.value = null, vn.value = !0;
      try {
        const re = {
          enabled: R.value,
          autoEvaluate: B.value,
          baseUrl: S.value.trim(),
          model: A.value.trim()
        }, G = gt.value.trim();
        G.length > 0 && (re.apiKey = G), rn.value = await LT(re);
      } finally {
        vn.value = !1;
      }
    }, fo = Hn(
      () => (!Ht.value || on.value) && gt.value.trim().length === 0
    ), Re = Hn(
      () => fo.value || S.value.trim().length === 0 || A.value.trim().length === 0
    ), $t = () => {
      gt.value = "", on.value = !0, Ht.value = !1, R.value = !1;
    }, ye = xe(!1), Ln = xe(!1), yt = xe(!1), Mt = xe(!1), Wr = xe(!1), Mn = xe(""), ct = xe(!1);
    NG(async () => {
      if (document.addEventListener("mousedown", Mi), a.llmConfig === null) {
        const re = await a.getLLMConfig();
        re && (O.value = !0, R.value = re.enabled, B.value = re.autoEvaluate, S.value = re.baseUrl || "", A.value = re.model || "", T.value = re.defaultBaseUrl || "", P.value = re.defaultModel || "", U.value = re.defaultSystemPrompt || "", k.value = re.systemPrompt || re.defaultSystemPrompt || "", Ht.value = re.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), DG(() => {
      document.removeEventListener("mousedown", Mi);
    });
    const po = () => {
      f.value = s.alpha, m.value = s.beta, v.value = s.epsilon, g.value = s.hellingerW, y.value = s.hellingerBias;
    }, dt = (re, G) => {
      Mn.value = re, Wr.value = G, Mt.value = !0;
    }, No = () => {
      if (on.value)
        return {
          enabled: !1,
          autoEvaluate: B.value,
          baseUrl: S.value.trim(),
          model: A.value.trim(),
          defaultBaseUrl: T.value.trim(),
          defaultModel: P.value.trim(),
          systemPrompt: k.value,
          clearApiKey: !0
        };
      const re = gt.value.trim(), G = {
        enabled: R.value,
        autoEvaluate: B.value,
        baseUrl: S.value.trim(),
        model: A.value.trim(),
        defaultBaseUrl: T.value.trim(),
        defaultModel: P.value.trim(),
        systemPrompt: k.value
      };
      return re.length > 0 && (G.apiKey = re), G;
    }, zt = async () => {
      var Wo, jr, Zr, Bi, Ri, Pi, Fi, Dt, Kr, Gt, Ui, Wi, Jr, cr, $o, Ho, zo;
      const re = R.value && !on.value, G = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        S.value
      );
      if (re && !G && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${S.value.trim()}, model ${A.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const ge = {
        alpha: Number(f.value),
        beta: Number(m.value),
        epsilon: Number(v.value)
      };
      c.value && (ge.hellingerW = Number(g.value), ge.hellingerBias = Number(y.value));
      const Ce = await a.setEngineInfo(
        u.value,
        c.value,
        ge
      ), go = O.value ? await a.setLLMConfig(No()) : !0;
      O.value && go && (gt.value = "", on.value = !1, Ht.value = (jr = (Wo = a.llmConfig) == null ? void 0 : Wo.apiKeyPresent) != null ? jr : !1, R.value = (Bi = (Zr = a.llmConfig) == null ? void 0 : Zr.enabled) != null ? Bi : !1, B.value = (Pi = (Ri = a.llmConfig) == null ? void 0 : Ri.autoEvaluate) != null ? Pi : !0, S.value = (Dt = (Fi = a.llmConfig) == null ? void 0 : Fi.baseUrl) != null ? Dt : "", A.value = (Gt = (Kr = a.llmConfig) == null ? void 0 : Kr.model) != null ? Gt : "", T.value = (Wi = (Ui = a.llmConfig) == null ? void 0 : Ui.defaultBaseUrl) != null ? Wi : "", P.value = (cr = (Jr = a.llmConfig) == null ? void 0 : Jr.defaultModel) != null ? cr : "", ($o = a.llmConfig) != null && $o.defaultSystemPrompt && (U.value = a.llmConfig.defaultSystemPrompt), k.value = (zo = (Ho = a.llmConfig) == null ? void 0 : Ho.systemPrompt) != null ? zo : k.value, a.getLLMUsage(30)), Ce && go ? (a.getEngineInfo(), dt("The settings were saved!", !1)) : dt(
        Ce && !go ? "Engine settings saved, but the LLM configuration was rejected \u2014 enabling the integration requires an endpoint URL, a model and an API key." : "Error on saving the settings",
        !0
      );
    }, Hr = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const re = await OT();
      dt(
        re ? "All open situations were closed." : "Failed to close situations.",
        !re
      );
    }, jn = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const re = await BT();
      dt(
        re ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !re
      );
    };
    return (re, G) => (Ye(), st(Ha, null, [
      de(DH),
      L("div", Tz, [
        xz,
        de(H(R1), { "data-test": "config-tabs" }, {
          tabs: at(() => [
            de(H(Ja), { "data-test": "tab-engine" }, {
              default: at(() => [
                Lz
              ]),
              _: 1
            }),
            de(H(Ja), { "data-test": "tab-llm" }, {
              default: at(() => [
                Mz
              ]),
              _: 1
            })
          ]),
          default: at(() => [
            de(H(Xa), { class: "config-panel" }, {
              default: at(() => [
                L("div", Nz, [
                  L("div", Dz, [
                    L("div", Oz, [
                      Bz,
                      L("a", {
                        target: "_blank",
                        href: H(kt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, Rz),
                      Pz
                    ]),
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Ln.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: G[0] || (G[0] = (ge) => Ln.value = !Ln.value)
                    }, [
                      de(H(X), {
                        icon: H(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Fz)
                  ]),
                  Ln.value ? (Ye(), st("div", Uz, Hz)) : Ft("", !0),
                  de(H($1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": G[2] || (G[2] = (ge) => u.value = ge),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: at(() => [
                      de(H(qf), {
                        class: "radio-item",
                        value: H(kt).ENGINE_DBSCAN
                      }, {
                        default: at(() => [
                          zz
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      de(H(Ii), {
                        modelValue: c.value,
                        "onUpdate:modelValue": G[1] || (G[1] = (ge) => c.value = ge),
                        disabled: !H(b),
                        class: "checkbox"
                      }, {
                        default: at(() => [
                          qz
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      de(H(qf), {
                        class: "radio-item",
                        value: H(kt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: at(() => [
                          Gz
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      Yz
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                H(b) ? (Ye(), st("div", jz, [
                  L("div", Zz, [
                    Kz,
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": ye.value,
                      "aria-label": "Show help for correlation variables",
                      "data-test": "variables-help",
                      onClick: G[3] || (G[3] = (ge) => ye.value = !ye.value)
                    }, [
                      de(H(X), {
                        icon: H(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Jz),
                    L("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: po
                    }, [
                      de(H(X), {
                        icon: H(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  ye.value ? (Ye(), st("div", Xz, [
                    L("ul", null, [
                      L("li", null, [
                        Qz,
                        eq,
                        L("em", null, "Default: " + je(s.alpha), 1)
                      ]),
                      L("li", null, [
                        tq,
                        nq,
                        oq,
                        rq,
                        L("em", null, "Default: " + je(s.beta), 1)
                      ]),
                      L("li", null, [
                        iq,
                        sq,
                        L("em", null, "Default: " + je(s.epsilon), 1)
                      ]),
                      H(D) ? (Ye(), st(Ha, { key: 0 }, [
                        L("li", aq, [
                          lq,
                          uq,
                          L("em", null, "Default: " + je(s.hellingerW), 1)
                        ]),
                        L("li", cq, [
                          dq,
                          fq,
                          L("em", null, "Default: " + je(s.hellingerBias), 1)
                        ])
                      ], 64)) : Ft("", !0)
                    ])
                  ])) : Ft("", !0),
                  L("div", pq, [
                    de(H(xr), {
                      modelValue: f.value,
                      "onUpdate:modelValue": G[4] || (G[4] = (ge) => f.value = ge),
                      type: "number",
                      label: "Alpha",
                      "data-test": "variable-alpha"
                    }, null, 8, ["modelValue"]),
                    de(H(xr), {
                      modelValue: m.value,
                      "onUpdate:modelValue": G[5] || (G[5] = (ge) => m.value = ge),
                      type: "number",
                      label: "Beta",
                      "data-test": "variable-beta"
                    }, null, 8, ["modelValue"]),
                    de(H(xr), {
                      modelValue: v.value,
                      "onUpdate:modelValue": G[6] || (G[6] = (ge) => v.value = ge),
                      type: "number",
                      label: "Epsilon",
                      "data-test": "variable-epsilon"
                    }, null, 8, ["modelValue"]),
                    H(D) ? (Ye(), Lf(H(xr), {
                      key: 0,
                      modelValue: g.value,
                      "onUpdate:modelValue": G[7] || (G[7] = (ge) => g.value = ge),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : Ft("", !0),
                    H(D) ? (Ye(), Lf(H(xr), {
                      key: 1,
                      modelValue: y.value,
                      "onUpdate:modelValue": G[8] || (G[8] = (ge) => y.value = ge),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : Ft("", !0)
                  ])
                ])) : Ft("", !0)
              ]),
              _: 1
            }),
            de(H(Xa), { class: "config-panel" }, {
              default: at(() => {
                var ge;
                return [
                  L("div", hq, [
                    L("div", mq, [
                      wq,
                      L("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": yt.value,
                        "aria-label": "How to get an API key",
                        "data-test": "llm-key-help",
                        onClick: G[9] || (G[9] = (Ce) => yt.value = !yt.value)
                      }, [
                        de(H(X), {
                          icon: H(r).Help
                        }, null, 8, ["icon"])
                      ], 8, vq)
                    ]),
                    _q,
                    yt.value ? (Ye(), st("div", gq, bq)) : Ft("", !0),
                    de(H(Ii), {
                      modelValue: R.value,
                      "onUpdate:modelValue": G[10] || (G[10] = (Ce) => R.value = Ce),
                      disabled: H(Re) && !R.value,
                      class: "checkbox",
                      "data-test": "llm-enabled"
                    }, {
                      default: at(() => [
                        Cq
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    de(H(Ii), {
                      modelValue: B.value,
                      "onUpdate:modelValue": G[11] || (G[11] = (Ce) => B.value = Ce),
                      disabled: !R.value,
                      class: "checkbox sub-checkbox",
                      "data-test": "llm-auto-evaluate"
                    }, {
                      default: at(() => [
                        Vq
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    H(Re) ? (Ye(), st("div", Eq, " Enter an endpoint, model and API key to enable. ")) : Ft("", !0),
                    L("div", Sq, [
                      L("div", Iq, [
                        kq,
                        L("div", Aq, [
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !H(Me),
                            "data-test": "llm-base-url-reset",
                            onClick: We
                          }, [
                            de(H(X), {
                              icon: H(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            xq
                          ], 8, Tq),
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !H(Ae),
                            "data-test": "llm-base-url-set-default",
                            onClick: _e
                          }, [
                            de(H(X), {
                              icon: H(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Mq
                          ], 8, Lq)
                        ])
                      ]),
                      L("div", Nq, [
                        de(H(xr), {
                          modelValue: S.value,
                          "onUpdate:modelValue": G[12] || (G[12] = (Ce) => S.value = Ce),
                          label: "Endpoint (OpenAI-compatible base URL)",
                          hideLabel: "",
                          "data-test": "llm-base-url",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        L("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": qe.value,
                          "aria-label": "Show endpoint suggestions",
                          "data-test": "llm-base-url-suggest",
                          onClick: G[13] || (G[13] = (Ce) => qe.value = !qe.value)
                        }, [
                          de(H(X), {
                            icon: H(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, Dq),
                        qe.value ? (Ye(), st("ul", Oq, [
                          Bq,
                          (Ye(!0), st(Ha, null, lg(H(Xe), (Ce) => (Ye(), st("li", {
                            key: Ce.baseUrl,
                            class: "llm-combo-item",
                            onClick: (go) => Js(Ce.baseUrl)
                          }, [
                            L("span", Pq, je(Ce.name), 1),
                            L("span", Fq, [
                              L("code", null, je(Ce.baseUrl), 1),
                              oe(" \xB7 " + je(Ce.keyHint), 1)
                            ])
                          ], 8, Rq))), 128))
                        ])) : Ft("", !0)
                      ])
                    ]),
                    L("div", Uq, [
                      L("div", Wq, [
                        Hq,
                        L("div", zq, [
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !H(pe),
                            "data-test": "llm-model-reset",
                            onClick: ze
                          }, [
                            de(H(X), {
                              icon: H(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Gq
                          ], 8, qq),
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !H(Ee),
                            "data-test": "llm-model-set-default",
                            onClick: Ze
                          }, [
                            de(H(X), {
                              icon: H(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            jq
                          ], 8, Yq)
                        ])
                      ]),
                      L("div", Zq, [
                        de(H(xr), {
                          modelValue: A.value,
                          "onUpdate:modelValue": G[14] || (G[14] = (Ce) => A.value = Ce),
                          label: "Model",
                          hideLabel: "",
                          "data-test": "llm-model",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        L("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": nn.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: G[15] || (G[15] = (Ce) => nn.value = !nn.value)
                        }, [
                          de(H(X), {
                            icon: H(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, Kq),
                        nn.value ? (Ye(), st("ul", Jq, [
                          H(Mo).length ? (Ye(), st(Ha, { key: 0 }, [
                            L("li", Xq, " Suggested for " + je((ge = H(Se)) == null ? void 0 : ge.name) + " \u2014 or type your own ", 1),
                            (Ye(!0), st(Ha, null, lg(H(Mo), (Ce) => (Ye(), st("li", {
                              key: Ce.id,
                              class: "llm-combo-item",
                              onClick: (go) => Xs(Ce.id)
                            }, [
                              L("span", eG, [
                                L("code", null, je(Ce.id), 1)
                              ])
                            ], 8, Qq))), 128))
                          ], 64)) : (Ye(), st("li", tG, " No preset models for this endpoint \u2014 type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : Ft("", !0)
                      ])
                    ]),
                    L("div", nG, [
                      L("div", oG, [
                        rG,
                        L("button", {
                          type: "button",
                          class: "llm-prompt-reset",
                          disabled: !H(W),
                          "data-test": "llm-prompt-reset",
                          onClick: K
                        }, [
                          de(H(X), {
                            icon: H(r).Restore,
                            class: "reset-inline-icon"
                          }, null, 8, ["icon"]),
                          sG
                        ], 8, iG)
                      ]),
                      aG,
                      de(H(Hu), {
                        modelValue: k.value,
                        "onUpdate:modelValue": G[16] || (G[16] = (Ce) => k.value = Ce),
                        label: "System prompt",
                        hideLabel: "",
                        rows: "12",
                        "data-test": "llm-system-prompt",
                        class: "llm-prompt-textarea"
                      }, null, 8, ["modelValue"])
                    ]),
                    lG,
                    L("div", uG, [
                      de(H(xr), {
                        modelValue: gt.value,
                        "onUpdate:modelValue": G[17] || (G[17] = (Ce) => gt.value = Ce),
                        type: "password",
                        autocomplete: "new-password",
                        label: Ht.value && !on.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      Ht.value && !on.value ? (Ye(), Lf(H(we), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: $t
                      }, {
                        default: at(() => [
                          cG
                        ]),
                        _: 1
                      })) : Ft("", !0)
                    ]),
                    L("div", dG, [
                      de(H(we), {
                        secondary: "",
                        disabled: vn.value || H(Ur),
                        "data-test": "llm-validate-btn",
                        onClick: Be
                      }, {
                        default: at(() => [
                          oe(je(vn.value ? "Validating\u2026" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      H(Ur) ? (Ye(), st("span", fG, " Enter an API key to validate. ")) : rn.value ? (Ye(), st("span", {
                        key: 1,
                        class: Iz(["llm-validate-result", rn.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        de(H(X), {
                          icon: rn.value.ok ? H(r).MarkComplete : H(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        oe(" " + je(rn.value.message), 1)
                      ], 2)) : Ft("", !0)
                    ]),
                    Ht.value && !on.value ? (Ye(), st("div", pG, [
                      de(H(X), {
                        icon: H(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      hG
                    ])) : Ft("", !0),
                    on.value ? (Ye(), st("div", mG, " Stored API key will be removed on save. ")) : Ft("", !0),
                    H(a).llmUsage ? (Ye(), st("div", wG, [
                      L("div", vG, [
                        L("span", _G, "Last " + je(H(a).llmUsage.daysWindow) + " days:", 1),
                        L("span", {
                          class: "usage-tokens",
                          title: `${H(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, je(o(H(a).llmUsage.totalTokens)) + " tokens ", 9, gG),
                        L("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: G[18] || (G[18] = (Ce) => ct.value = !ct.value),
                          "data-test": "llm-usage-toggle"
                        }, je(ct.value ? "hide details" : "show details"), 1)
                      ]),
                      ct.value ? (Ye(), st("dl", $G, [
                        L("div", null, [
                          yG,
                          L("dd", null, je(o(H(a).llmUsage.inputTokens)), 1)
                        ]),
                        L("div", null, [
                          bG,
                          L("dd", null, je(o(H(a).llmUsage.outputTokens)), 1)
                        ]),
                        L("div", null, [
                          CG,
                          L("dd", null, je(o(H(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        L("div", null, [
                          VG,
                          L("dd", null, je(o(H(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        L("div", null, [
                          EG,
                          L("dd", null, [
                            oe(je(H(a).llmUsage.calls) + " ", 1),
                            L("span", SG, "(" + je(H(a).llmUsage.successfulCalls) + " ok / " + je(H(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        L("div", null, [
                          IG,
                          L("dd", null, je((H(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : Ft("", !0)
                    ])) : Ft("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        L("div", kG, [
          de(H(we), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Hr
          }, {
            default: at(() => [
              AG
            ]),
            _: 1
          }),
          de(H(we), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: jn
          }, {
            default: at(() => [
              TG
            ]),
            _: 1
          }),
          de(H(we), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: zt
          }, {
            default: at(() => [
              de(H(X), {
                icon: H(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              xG
            ]),
            _: 1
          })
        ]),
        de(H(pc), {
          modelValue: Mt.value,
          "onUpdate:modelValue": G[20] || (G[20] = (ge) => Mt.value = ge),
          right: "",
          error: Wr.value,
          timeout: 6e3
        }, {
          button: at(() => [
            de(H(we), {
              onClick: G[19] || (G[19] = (ge) => Mt.value = !1),
              text: ""
            }, {
              default: at(() => [
                LG
              ]),
              _: 1
            })
          ]),
          default: at(() => [
            oe(je(Mn.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const BG = /* @__PURE__ */ Ve(OG, [["__scopeId", "data-v-44b4fabb"]]), RG = window.VueRouter.createRouter, PG = window.VueRouter.createWebHistory, FG = async () => {
  const e = Ti();
  e.userId || await e.getUserRole();
}, C0 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || V0;
      await Ti().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => FG(),
    component: OP
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: aW
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: RW
  },
  {
    path: "/error",
    name: "error",
    component: eH
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: bH
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await Ti().getEngineInfo();
    },
    component: BG
  }
], Mf = window.VRouter;
if (Mf) {
  const e = "Plugin-alecUiExtension", o = Mf.hasRoute(e) ? e : "Plugin";
  for (const r of C0) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Mf.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const V0 = RG({
  history: PG(),
  routes: C0
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = LS;
