const de = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
}, ES = {}, IS = window.Vue.resolveComponent, xS = window.Vue.createVNode, AS = window.Vue.openBlock, BS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TS = { class: "main" };
function LS(e, r) {
  const o = IS("router-view");
  return AS(), BS("div", TS, [
    xS(o)
  ]);
}
const MS = /* @__PURE__ */ de(ES, [["render", LS], ["__scopeId", "data-v-5d32d140"]]), DS = window.Vue.defineComponent, NS = window.Vue.openBlock, OS = window.Vue.createBlock, PS = /* @__PURE__ */ DS({
  __name: "App",
  setup(e) {
    return (r, o) => (NS(), OS(MS));
  }
});
var Pi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function RS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Um = { exports: {} }, yd = { exports: {} }, Wm = function(r, o) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return r.apply(o, a);
  };
}, FS = Wm, Vd = Object.prototype.toString, bd = function(e) {
  return function(r) {
    var o = Vd.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function so(e) {
  return e = e.toLowerCase(), function(o) {
    return bd(o) === e;
  };
}
function Cd(e) {
  return Array.isArray(e);
}
function el(e) {
  return typeof e > "u";
}
function US(e) {
  return e !== null && !el(e) && e.constructor !== null && !el(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var qm = so("ArrayBuffer");
function WS(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && qm(e.buffer), r;
}
function qS(e) {
  return typeof e == "string";
}
function HS(e) {
  return typeof e == "number";
}
function Hm(e) {
  return e !== null && typeof e == "object";
}
function Ya(e) {
  if (bd(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var zS = so("Date"), YS = so("File"), GS = so("Blob"), jS = so("FileList");
function Sd(e) {
  return Vd.call(e) === "[object Function]";
}
function ZS(e) {
  return Hm(e) && Sd(e.pipe);
}
function KS(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Vd.call(e) === r || Sd(e.toString) && e.toString() === r);
}
var JS = so("URLSearchParams");
function XS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function QS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function kd(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Cd(e))
      for (var o = 0, s = e.length; o < s; o++)
        r.call(null, e[o], o, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.call(null, e[a], a, e);
}
function id() {
  var e = {};
  function r(a, u) {
    Ya(e[u]) && Ya(a) ? e[u] = id(e[u], a) : Ya(a) ? e[u] = id({}, a) : Cd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var o = 0, s = arguments.length; o < s; o++)
    kd(arguments[o], r);
  return e;
}
function e2(e, r, o) {
  return kd(r, function(a, u) {
    o && typeof a == "function" ? e[u] = FS(a, o) : e[u] = a;
  }), e;
}
function t2(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function n2(e, r, o, s) {
  e.prototype = Object.create(r.prototype, s), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function r2(e, r, o) {
  var s, a, u, c = {};
  r = r || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (r[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function o2(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var s = e.indexOf(r, o);
  return s !== -1 && s === o;
}
function i2(e) {
  if (!e)
    return null;
  var r = e.length;
  if (el(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var s2 = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), nt = {
  isArray: Cd,
  isArrayBuffer: qm,
  isBuffer: US,
  isFormData: KS,
  isArrayBufferView: WS,
  isString: qS,
  isNumber: HS,
  isObject: Hm,
  isPlainObject: Ya,
  isUndefined: el,
  isDate: zS,
  isFile: YS,
  isBlob: GS,
  isFunction: Sd,
  isStream: ZS,
  isURLSearchParams: JS,
  isStandardBrowserEnv: QS,
  forEach: kd,
  merge: id,
  extend: e2,
  trim: XS,
  stripBOM: t2,
  inherits: n2,
  toFlatObject: r2,
  kindOf: bd,
  kindOfTest: so,
  endsWith: o2,
  toArray: i2,
  isTypedArray: s2,
  isFileList: jS
}, To = nt;
function Ep(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var zm = function(r, o, s) {
  if (!o)
    return r;
  var a;
  if (s)
    a = s(o);
  else if (To.isURLSearchParams(o))
    a = o.toString();
  else {
    var u = [];
    To.forEach(o, function(w, v) {
      w === null || typeof w > "u" || (To.isArray(w) ? v = v + "[]" : w = [w], To.forEach(w, function($) {
        To.isDate($) ? $ = $.toISOString() : To.isObject($) && ($ = JSON.stringify($)), u.push(Ep(v) + "=" + Ep($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = r.indexOf("#");
    c !== -1 && (r = r.slice(0, c)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}, a2 = nt;
function fl() {
  this.handlers = [];
}
fl.prototype.use = function(r, o, s) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
fl.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
fl.prototype.forEach = function(r) {
  a2.forEach(this.handlers, function(s) {
    s !== null && r(s);
  });
};
var l2 = fl, u2 = nt, c2 = function(r, o) {
  u2.forEach(r, function(a, u) {
    u !== o && u.toUpperCase() === o.toUpperCase() && (r[o] = a, delete r[u]);
  });
}, Ym = nt;
function ri(e, r, o, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), s && (this.request = s), a && (this.response = a);
}
Ym.inherits(ri, Error, {
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
var Gm = ri.prototype, jm = {};
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
  jm[e] = { value: e };
});
Object.defineProperties(ri, jm);
Object.defineProperty(Gm, "isAxiosError", { value: !0 });
ri.from = function(e, r, o, s, a, u) {
  var c = Object.create(Gm);
  return Ym.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), ri.call(c, e.message, r, o, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var ai = ri, Zm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dn = nt;
function d2(e, r) {
  r = r || new FormData();
  var o = [];
  function s(u) {
    return u === null ? "" : dn.isDate(u) ? u.toISOString() : dn.isArrayBuffer(u) || dn.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (dn.isPlainObject(u) || dn.isArray(u)) {
      if (o.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      o.push(u), dn.forEach(u, function(w, v) {
        if (!dn.isUndefined(w)) {
          var _ = c ? c + "." + v : v, $;
          if (w && !c && typeof w == "object") {
            if (dn.endsWith(v, "{}"))
              w = JSON.stringify(w);
            else if (dn.endsWith(v, "[]") && ($ = dn.toArray(w))) {
              $.forEach(function(y) {
                !dn.isUndefined(y) && r.append(_, s(y));
              });
              return;
            }
          }
          a(w, _);
        }
      }), o.pop();
    } else
      r.append(c, s(u));
  }
  return a(e), r;
}
var Km = d2, Ku, Ip;
function f2() {
  if (Ip)
    return Ku;
  Ip = 1;
  var e = ai;
  return Ku = function(o, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? o(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ku;
}
var Ju, xp;
function h2() {
  if (xp)
    return Ju;
  xp = 1;
  var e = nt;
  return Ju = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(s, a, u, c, f, w) {
        var v = [];
        v.push(s + "=" + encodeURIComponent(a)), e.isNumber(u) && v.push("expires=" + new Date(u).toGMTString()), e.isString(c) && v.push("path=" + c), e.isString(f) && v.push("domain=" + f), w === !0 && v.push("secure"), document.cookie = v.join("; ");
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
  }(), Ju;
}
var p2 = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, w2 = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, v2 = p2, m2 = w2, Jm = function(r, o) {
  return r && !v2(o) ? m2(r, o) : o;
}, Xu, Ap;
function _2() {
  if (Ap)
    return Xu;
  Ap = 1;
  var e = nt, r = [
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
  return Xu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && r.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Xu;
}
var Qu, Bp;
function g2() {
  if (Bp)
    return Qu;
  Bp = 1;
  var e = nt;
  return Qu = e.isStandardBrowserEnv() ? function() {
    var o = /(msie|trident)/i.test(navigator.userAgent), s = document.createElement("a"), a;
    function u(c) {
      var f = c;
      return o && (s.setAttribute("href", f), f = s.href), s.setAttribute("href", f), {
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
  }(), Qu;
}
var ec, Tp;
function hl() {
  if (Tp)
    return ec;
  Tp = 1;
  var e = ai, r = nt;
  function o(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), ec = o, ec;
}
var tc, Lp;
function $2() {
  return Lp || (Lp = 1, tc = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), tc;
}
var nc, Mp;
function Dp() {
  if (Mp)
    return nc;
  Mp = 1;
  var e = nt, r = f2(), o = h2(), s = zm, a = Jm, u = _2(), c = g2(), f = Zm, w = ai, v = hl(), _ = $2();
  return nc = function(y) {
    return new Promise(function(L, N) {
      var D = y.data, S = y.headers, x = y.responseType, I;
      function P() {
        y.cancelToken && y.cancelToken.unsubscribe(I), y.signal && y.signal.removeEventListener("abort", I);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var R = y.auth.username || "", O = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(R + ":" + O);
      }
      var z = a(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), s(z, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function fe() {
        if (!!k) {
          var Ce = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, Ae = !x || x === "text" || x === "json" ? k.responseText : k.response, Se = {
            data: Ae,
            status: k.status,
            statusText: k.statusText,
            headers: Ce,
            config: y,
            request: k
          };
          r(function(Me) {
            L(Me), P();
          }, function(Me) {
            N(Me), P();
          }, Se), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = fe : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(fe);
      }, k.onabort = function() {
        !k || (N(new w("Request aborted", w.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        N(new w("Network Error", w.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var Ae = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Se = y.transitional || f;
        y.timeoutErrorMessage && (Ae = y.timeoutErrorMessage), N(new w(
          Ae,
          Se.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var he = (y.withCredentials || c(z)) && y.xsrfCookieName ? o.read(y.xsrfCookieName) : void 0;
        he && (S[y.xsrfHeaderName] = he);
      }
      "setRequestHeader" in k && e.forEach(S, function(Ae, Se) {
        typeof D > "u" && Se.toLowerCase() === "content-type" ? delete S[Se] : k.setRequestHeader(Se, Ae);
      }), e.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), x && x !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (I = function(Ce) {
        !k || (N(!Ce || Ce && Ce.type ? new v() : Ce), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(I), y.signal && (y.signal.aborted ? I() : y.signal.addEventListener("abort", I))), D || (D = null);
      var $e = _(z);
      if ($e && ["http", "https", "file"].indexOf($e) === -1) {
        N(new w("Unsupported protocol " + $e + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(D);
    });
  }, nc;
}
var rc, Np;
function y2() {
  return Np || (Np = 1, rc = null), rc;
}
var Ke = nt, Op = c2, Pp = ai, V2 = Zm, b2 = Km, C2 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Rp(e, r) {
  !Ke.isUndefined(e) && Ke.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function S2() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Dp()), e;
}
function k2(e, r, o) {
  if (Ke.isString(e))
    try {
      return (r || JSON.parse)(e), Ke.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (o || JSON.stringify)(e);
}
var pl = {
  transitional: V2,
  adapter: S2(),
  transformRequest: [function(r, o) {
    if (Op(o, "Accept"), Op(o, "Content-Type"), Ke.isFormData(r) || Ke.isArrayBuffer(r) || Ke.isBuffer(r) || Ke.isStream(r) || Ke.isFile(r) || Ke.isBlob(r))
      return r;
    if (Ke.isArrayBufferView(r))
      return r.buffer;
    if (Ke.isURLSearchParams(r))
      return Rp(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var s = Ke.isObject(r), a = o && o["Content-Type"], u;
    if ((u = Ke.isFileList(r)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return b2(u ? { "files[]": r } : r, c && new c());
    } else if (s || a === "application/json")
      return Rp(o, "application/json"), k2(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || pl.transitional, s = o && o.silentJSONParsing, a = o && o.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Ke.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Pp.from(c, Pp.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: y2()
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
Ke.forEach(["delete", "get", "head"], function(r) {
  pl.headers[r] = {};
});
Ke.forEach(["post", "put", "patch"], function(r) {
  pl.headers[r] = Ke.merge(C2);
});
var Ed = pl, E2 = nt, I2 = Ed, x2 = function(r, o, s) {
  var a = this || I2;
  return E2.forEach(s, function(c) {
    r = c.call(a, r, o);
  }), r;
}, oc, Fp;
function Xm() {
  return Fp || (Fp = 1, oc = function(r) {
    return !!(r && r.__CANCEL__);
  }), oc;
}
var Up = nt, ic = x2, A2 = Xm(), B2 = Ed, T2 = hl();
function sc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new T2();
}
var L2 = function(r) {
  sc(r), r.headers = r.headers || {}, r.data = ic.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Up.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Up.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete r.headers[a];
    }
  );
  var o = r.adapter || B2.adapter;
  return o(r).then(function(a) {
    return sc(r), a.data = ic.call(
      r,
      a.data,
      a.headers,
      r.transformResponse
    ), a;
  }, function(a) {
    return A2(a) || (sc(r), a && a.response && (a.response.data = ic.call(
      r,
      a.response.data,
      a.response.headers,
      r.transformResponse
    ))), Promise.reject(a);
  });
}, Ot = nt, Qm = function(r, o) {
  o = o || {};
  var s = {};
  function a(_, $) {
    return Ot.isPlainObject(_) && Ot.isPlainObject($) ? Ot.merge(_, $) : Ot.isPlainObject($) ? Ot.merge({}, $) : Ot.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (Ot.isUndefined(o[_])) {
      if (!Ot.isUndefined(r[_]))
        return a(void 0, r[_]);
    } else
      return a(r[_], o[_]);
  }
  function c(_) {
    if (!Ot.isUndefined(o[_]))
      return a(void 0, o[_]);
  }
  function f(_) {
    if (Ot.isUndefined(o[_])) {
      if (!Ot.isUndefined(r[_]))
        return a(void 0, r[_]);
    } else
      return a(void 0, o[_]);
  }
  function w(_) {
    if (_ in o)
      return a(r[_], o[_]);
    if (_ in r)
      return a(void 0, r[_]);
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
    validateStatus: w
  };
  return Ot.forEach(Object.keys(r).concat(Object.keys(o)), function($) {
    var y = v[$] || u, T = y($);
    Ot.isUndefined(T) && y !== w || (s[$] = T);
  }), s;
}, ac, Wp;
function e_() {
  return Wp || (Wp = 1, ac = {
    version: "0.27.2"
  }), ac;
}
var M2 = e_().version, mr = ai, Id = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Id[e] = function(s) {
    return typeof s === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var qp = {};
Id.transitional = function(r, o, s) {
  function a(u, c) {
    return "[Axios v" + M2 + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (r === !1)
      throw new mr(
        a(c, " has been removed" + (o ? " in " + o : "")),
        mr.ERR_DEPRECATED
      );
    return o && !qp[c] && (qp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(u, c, f) : !0;
  };
};
function D2(e, r, o) {
  if (typeof e != "object")
    throw new mr("options must be an object", mr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = r[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new mr("option " + u + " must be " + w, mr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new mr("Unknown option " + u, mr.ERR_BAD_OPTION);
  }
}
var N2 = {
  assertOptions: D2,
  validators: Id
}, t_ = nt, O2 = zm, Hp = l2, zp = L2, wl = Qm, P2 = Jm, n_ = N2, Lo = n_.validators;
function oi(e) {
  this.defaults = e, this.interceptors = {
    request: new Hp(),
    response: new Hp()
  };
}
oi.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = wl(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var s = o.transitional;
  s !== void 0 && n_.assertOptions(s, {
    silentJSONParsing: Lo.transitional(Lo.boolean),
    forcedJSONParsing: Lo.transitional(Lo.boolean),
    clarifyTimeoutError: Lo.transitional(Lo.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(T) {
    typeof T.runWhen == "function" && T.runWhen(o) === !1 || (u = u && T.synchronous, a.unshift(T.fulfilled, T.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(T) {
    c.push(T.fulfilled, T.rejected);
  });
  var f;
  if (!u) {
    var w = [zp, void 0];
    for (Array.prototype.unshift.apply(w, a), w = w.concat(c), f = Promise.resolve(o); w.length; )
      f = f.then(w.shift(), w.shift());
    return f;
  }
  for (var v = o; a.length; ) {
    var _ = a.shift(), $ = a.shift();
    try {
      v = _(v);
    } catch (y) {
      $(y);
      break;
    }
  }
  try {
    f = zp(v);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
oi.prototype.getUri = function(r) {
  r = wl(this.defaults, r);
  var o = P2(r.baseURL, r.url);
  return O2(o, r.params, r.paramsSerializer);
};
t_.forEach(["delete", "get", "head", "options"], function(r) {
  oi.prototype[r] = function(o, s) {
    return this.request(wl(s || {}, {
      method: r,
      url: o,
      data: (s || {}).data
    }));
  };
});
t_.forEach(["post", "put", "patch"], function(r) {
  function o(s) {
    return function(u, c, f) {
      return this.request(wl(f || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  oi.prototype[r] = o(), oi.prototype[r + "Form"] = o(!0);
});
var R2 = oi, lc, Yp;
function F2() {
  if (Yp)
    return lc;
  Yp = 1;
  var e = hl();
  function r(o) {
    if (typeof o != "function")
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
    }, o(function(c) {
      a.reason || (a.reason = new e(c), s(a.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : this._listeners = [s];
  }, r.prototype.unsubscribe = function(s) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(s);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, r.source = function() {
    var s, a = new r(function(c) {
      s = c;
    });
    return {
      token: a,
      cancel: s
    };
  }, lc = r, lc;
}
var uc, Gp;
function U2() {
  return Gp || (Gp = 1, uc = function(r) {
    return function(s) {
      return r.apply(null, s);
    };
  }), uc;
}
var cc, jp;
function W2() {
  if (jp)
    return cc;
  jp = 1;
  var e = nt;
  return cc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, cc;
}
var Zp = nt, q2 = Wm, Ga = R2, H2 = Qm, z2 = Ed;
function r_(e) {
  var r = new Ga(e), o = q2(Ga.prototype.request, r);
  return Zp.extend(o, Ga.prototype, r), Zp.extend(o, r), o.create = function(a) {
    return r_(H2(e, a));
  }, o;
}
var At = r_(z2);
At.Axios = Ga;
At.CanceledError = hl();
At.CancelToken = F2();
At.isCancel = Xm();
At.VERSION = e_().version;
At.toFormData = Km;
At.AxiosError = ai;
At.Cancel = At.CanceledError;
At.all = function(r) {
  return Promise.all(r);
};
At.spread = U2();
At.isAxiosError = W2();
yd.exports = At;
yd.exports.default = At;
(function(e) {
  e.exports = yd.exports;
})(Um);
const o_ = /* @__PURE__ */ RS(Um.exports), zn = o_.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), rt = o_.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var ge = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(e, r) {
  (function() {
    var o, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, L = 1, N = 2, D = 1, S = 2, x = 4, I = 8, P = 16, k = 32, R = 64, O = 128, z = 256, fe = 512, he = 30, $e = "...", Ce = 800, Ae = 16, Se = 1, ce = 2, Me = 3, We = 1 / 0, je = 9007199254740991, gn = 17976931348623157e292, lo = 0 / 0, ot = 4294967295, Dl = ot - 1, Nl = ot >>> 1, Ol = [
      ["ary", O],
      ["bind", D],
      ["bindKey", S],
      ["curry", I],
      ["curryRight", P],
      ["flip", fe],
      ["partial", k],
      ["partialRight", R],
      ["rearg", z]
    ], Yn = "[object Arguments]", Sr = "[object Array]", Ss = "[object AsyncFunction]", Gn = "[object Boolean]", jn = "[object Date]", ks = "[object DOMException]", kr = "[object Error]", Er = "[object Function]", yi = "[object GeneratorFunction]", _t = "[object Map]", Zn = "[object Number]", Es = "[object Null]", zt = "[object Object]", Vi = "[object Promise]", Is = "[object Proxy]", Kn = "[object RegExp]", gt = "[object Set]", Jn = "[object String]", Ir = "[object Symbol]", xs = "[object Undefined]", Xn = "[object WeakMap]", As = "[object WeakSet]", ee = "[object ArrayBuffer]", Y = "[object DataView]", oe = "[object Float32Array]", uo = "[object Float64Array]", co = "[object Int8Array]", fo = "[object Int16Array]", ho = "[object Int32Array]", po = "[object Uint8Array]", wo = "[object Uint8ClampedArray]", vo = "[object Uint16Array]", mo = "[object Uint32Array]", Bs = /\b__p \+= '';/g, Ts = /\b(__p \+=) '' \+/g, Kg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Jd = /&(?:amp|lt|gt|quot|#39);/g, Xd = /[&<>"']/g, Jg = RegExp(Jd.source), Xg = RegExp(Xd.source), Qg = /<%-([\s\S]+?)%>/g, e1 = /<%([\s\S]+?)%>/g, Qd = /<%=([\s\S]+?)%>/g, t1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n1 = /^\w*$/, r1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pl = /[\\^$.*+?()[\]{}|]/g, o1 = RegExp(Pl.source), Rl = /^\s+/, i1 = /\s/, s1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, a1 = /\{\n\/\* \[wrapped with (.+)\] \*/, l1 = /,? & /, u1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, c1 = /[()=,{}\[\]\/\s]/, d1 = /\\(\\)?/g, f1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ef = /\w*$/, h1 = /^[-+]0x[0-9a-f]+$/i, p1 = /^0b[01]+$/i, w1 = /^\[object .+?Constructor\]$/, v1 = /^0o[0-7]+$/i, m1 = /^(?:0|[1-9]\d*)$/, _1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ls = /($^)/, g1 = /['\n\r\u2028\u2029\\]/g, Ms = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", y1 = "\\ufe20-\\ufe2f", V1 = "\\u20d0-\\u20ff", tf = $1 + y1 + V1, nf = "\\u2700-\\u27bf", rf = "a-z\\xdf-\\xf6\\xf8-\\xff", b1 = "\\xac\\xb1\\xd7\\xf7", C1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", S1 = "\\u2000-\\u206f", k1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", of = "A-Z\\xc0-\\xd6\\xd8-\\xde", sf = "\\ufe0e\\ufe0f", af = b1 + C1 + S1 + k1, Fl = "['\u2019]", E1 = "[" + Ms + "]", lf = "[" + af + "]", Ds = "[" + tf + "]", uf = "\\d+", I1 = "[" + nf + "]", cf = "[" + rf + "]", df = "[^" + Ms + af + uf + nf + rf + of + "]", Ul = "\\ud83c[\\udffb-\\udfff]", x1 = "(?:" + Ds + "|" + Ul + ")", ff = "[^" + Ms + "]", Wl = "(?:\\ud83c[\\udde6-\\uddff]){2}", ql = "[\\ud800-\\udbff][\\udc00-\\udfff]", _o = "[" + of + "]", hf = "\\u200d", pf = "(?:" + cf + "|" + df + ")", A1 = "(?:" + _o + "|" + df + ")", wf = "(?:" + Fl + "(?:d|ll|m|re|s|t|ve))?", vf = "(?:" + Fl + "(?:D|LL|M|RE|S|T|VE))?", mf = x1 + "?", _f = "[" + sf + "]?", B1 = "(?:" + hf + "(?:" + [ff, Wl, ql].join("|") + ")" + _f + mf + ")*", T1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", L1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", gf = _f + mf + B1, M1 = "(?:" + [I1, Wl, ql].join("|") + ")" + gf, D1 = "(?:" + [ff + Ds + "?", Ds, Wl, ql, E1].join("|") + ")", N1 = RegExp(Fl, "g"), O1 = RegExp(Ds, "g"), Hl = RegExp(Ul + "(?=" + Ul + ")|" + D1 + gf, "g"), P1 = RegExp([
      _o + "?" + cf + "+" + wf + "(?=" + [lf, _o, "$"].join("|") + ")",
      A1 + "+" + vf + "(?=" + [lf, _o + pf, "$"].join("|") + ")",
      _o + "?" + pf + "+" + wf,
      _o + "+" + vf,
      L1,
      T1,
      uf,
      M1
    ].join("|"), "g"), R1 = RegExp("[" + hf + Ms + tf + sf + "]"), F1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, U1 = [
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
    ], W1 = -1, ke = {};
    ke[oe] = ke[uo] = ke[co] = ke[fo] = ke[ho] = ke[po] = ke[wo] = ke[vo] = ke[mo] = !0, ke[Yn] = ke[Sr] = ke[ee] = ke[Gn] = ke[Y] = ke[jn] = ke[kr] = ke[Er] = ke[_t] = ke[Zn] = ke[zt] = ke[Kn] = ke[gt] = ke[Jn] = ke[Xn] = !1;
    var Ve = {};
    Ve[Yn] = Ve[Sr] = Ve[ee] = Ve[Y] = Ve[Gn] = Ve[jn] = Ve[oe] = Ve[uo] = Ve[co] = Ve[fo] = Ve[ho] = Ve[_t] = Ve[Zn] = Ve[zt] = Ve[Kn] = Ve[gt] = Ve[Jn] = Ve[Ir] = Ve[po] = Ve[wo] = Ve[vo] = Ve[mo] = !0, Ve[kr] = Ve[Er] = Ve[Xn] = !1;
    var q1 = {
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
    }, H1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, z1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Y1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, G1 = parseFloat, j1 = parseInt, $f = typeof Pi == "object" && Pi && Pi.Object === Object && Pi, Z1 = typeof self == "object" && self && self.Object === Object && self, Je = $f || Z1 || Function("return this")(), zl = r && !r.nodeType && r, xr = zl && !0 && e && !e.nodeType && e, yf = xr && xr.exports === zl, Yl = yf && $f.process, Yt = function() {
      try {
        var V = xr && xr.require && xr.require("util").types;
        return V || Yl && Yl.binding && Yl.binding("util");
      } catch {
      }
    }(), Vf = Yt && Yt.isArrayBuffer, bf = Yt && Yt.isDate, Cf = Yt && Yt.isMap, Sf = Yt && Yt.isRegExp, kf = Yt && Yt.isSet, Ef = Yt && Yt.isTypedArray;
    function Bt(V, E, C) {
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
    function K1(V, E, C, W) {
      for (var J = -1, pe = V == null ? 0 : V.length; ++J < pe; ) {
        var He = V[J];
        E(W, He, C(He), V);
      }
      return W;
    }
    function Gt(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length; ++C < W && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function J1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function If(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length; ++C < W; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function Qn(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length, J = 0, pe = []; ++C < W; ) {
        var He = V[C];
        E(He, C, V) && (pe[J++] = He);
      }
      return pe;
    }
    function Ns(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && go(V, E, 0) > -1;
    }
    function Gl(V, E, C) {
      for (var W = -1, J = V == null ? 0 : V.length; ++W < J; )
        if (C(E, V[W]))
          return !0;
      return !1;
    }
    function xe(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length, J = Array(W); ++C < W; )
        J[C] = E(V[C], C, V);
      return J;
    }
    function er(V, E) {
      for (var C = -1, W = E.length, J = V.length; ++C < W; )
        V[J + C] = E[C];
      return V;
    }
    function jl(V, E, C, W) {
      var J = -1, pe = V == null ? 0 : V.length;
      for (W && pe && (C = V[++J]); ++J < pe; )
        C = E(C, V[J], J, V);
      return C;
    }
    function X1(V, E, C, W) {
      var J = V == null ? 0 : V.length;
      for (W && J && (C = V[--J]); J--; )
        C = E(C, V[J], J, V);
      return C;
    }
    function Zl(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length; ++C < W; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var Q1 = Kl("length");
    function e0(V) {
      return V.split("");
    }
    function t0(V) {
      return V.match(u1) || [];
    }
    function xf(V, E, C) {
      var W;
      return C(V, function(J, pe, He) {
        if (E(J, pe, He))
          return W = pe, !1;
      }), W;
    }
    function Os(V, E, C, W) {
      for (var J = V.length, pe = C + (W ? 1 : -1); W ? pe-- : ++pe < J; )
        if (E(V[pe], pe, V))
          return pe;
      return -1;
    }
    function go(V, E, C) {
      return E === E ? h0(V, E, C) : Os(V, Af, C);
    }
    function n0(V, E, C, W) {
      for (var J = C - 1, pe = V.length; ++J < pe; )
        if (W(V[J], E))
          return J;
      return -1;
    }
    function Af(V) {
      return V !== V;
    }
    function Bf(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? Xl(V, E) / C : lo;
    }
    function Kl(V) {
      return function(E) {
        return E == null ? o : E[V];
      };
    }
    function Jl(V) {
      return function(E) {
        return V == null ? o : V[E];
      };
    }
    function Tf(V, E, C, W, J) {
      return J(V, function(pe, He, ye) {
        C = W ? (W = !1, pe) : E(C, pe, He, ye);
      }), C;
    }
    function r0(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function Xl(V, E) {
      for (var C, W = -1, J = V.length; ++W < J; ) {
        var pe = E(V[W]);
        pe !== o && (C = C === o ? pe : C + pe);
      }
      return C;
    }
    function Ql(V, E) {
      for (var C = -1, W = Array(V); ++C < V; )
        W[C] = E(C);
      return W;
    }
    function o0(V, E) {
      return xe(E, function(C) {
        return [C, V[C]];
      });
    }
    function Lf(V) {
      return V && V.slice(0, Of(V) + 1).replace(Rl, "");
    }
    function Tt(V) {
      return function(E) {
        return V(E);
      };
    }
    function eu(V, E) {
      return xe(E, function(C) {
        return V[C];
      });
    }
    function bi(V, E) {
      return V.has(E);
    }
    function Mf(V, E) {
      for (var C = -1, W = V.length; ++C < W && go(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function Df(V, E) {
      for (var C = V.length; C-- && go(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function i0(V, E) {
      for (var C = V.length, W = 0; C--; )
        V[C] === E && ++W;
      return W;
    }
    var s0 = Jl(q1), a0 = Jl(H1);
    function l0(V) {
      return "\\" + Y1[V];
    }
    function u0(V, E) {
      return V == null ? o : V[E];
    }
    function $o(V) {
      return R1.test(V);
    }
    function c0(V) {
      return F1.test(V);
    }
    function d0(V) {
      for (var E, C = []; !(E = V.next()).done; )
        C.push(E.value);
      return C;
    }
    function tu(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(W, J) {
        C[++E] = [J, W];
      }), C;
    }
    function Nf(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function tr(V, E) {
      for (var C = -1, W = V.length, J = 0, pe = []; ++C < W; ) {
        var He = V[C];
        (He === E || He === _) && (V[C] = _, pe[J++] = C);
      }
      return pe;
    }
    function Ps(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(W) {
        C[++E] = W;
      }), C;
    }
    function f0(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(W) {
        C[++E] = [W, W];
      }), C;
    }
    function h0(V, E, C) {
      for (var W = C - 1, J = V.length; ++W < J; )
        if (V[W] === E)
          return W;
      return -1;
    }
    function p0(V, E, C) {
      for (var W = C + 1; W--; )
        if (V[W] === E)
          return W;
      return W;
    }
    function yo(V) {
      return $o(V) ? v0(V) : Q1(V);
    }
    function an(V) {
      return $o(V) ? m0(V) : e0(V);
    }
    function Of(V) {
      for (var E = V.length; E-- && i1.test(V.charAt(E)); )
        ;
      return E;
    }
    var w0 = Jl(z1);
    function v0(V) {
      for (var E = Hl.lastIndex = 0; Hl.test(V); )
        ++E;
      return E;
    }
    function m0(V) {
      return V.match(Hl) || [];
    }
    function _0(V) {
      return V.match(P1) || [];
    }
    var g0 = function V(E) {
      E = E == null ? Je : Vo.defaults(Je.Object(), E, Vo.pick(Je, U1));
      var C = E.Array, W = E.Date, J = E.Error, pe = E.Function, He = E.Math, ye = E.Object, nu = E.RegExp, $0 = E.String, jt = E.TypeError, Rs = C.prototype, y0 = pe.prototype, bo = ye.prototype, Fs = E["__core-js_shared__"], Us = y0.toString, me = bo.hasOwnProperty, V0 = 0, Pf = function() {
        var t = /[^.]+$/.exec(Fs && Fs.keys && Fs.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Ws = bo.toString, b0 = Us.call(ye), C0 = Je._, S0 = nu(
        "^" + Us.call(me).replace(Pl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), qs = yf ? E.Buffer : o, nr = E.Symbol, Hs = E.Uint8Array, Rf = qs ? qs.allocUnsafe : o, zs = Nf(ye.getPrototypeOf, ye), Ff = ye.create, Uf = bo.propertyIsEnumerable, Ys = Rs.splice, Wf = nr ? nr.isConcatSpreadable : o, Ci = nr ? nr.iterator : o, Ar = nr ? nr.toStringTag : o, Gs = function() {
        try {
          var t = Dr(ye, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), k0 = E.clearTimeout !== Je.clearTimeout && E.clearTimeout, E0 = W && W.now !== Je.Date.now && W.now, I0 = E.setTimeout !== Je.setTimeout && E.setTimeout, js = He.ceil, Zs = He.floor, ru = ye.getOwnPropertySymbols, x0 = qs ? qs.isBuffer : o, qf = E.isFinite, A0 = Rs.join, B0 = Nf(ye.keys, ye), ze = He.max, it = He.min, T0 = W.now, L0 = E.parseInt, Hf = He.random, M0 = Rs.reverse, ou = Dr(E, "DataView"), Si = Dr(E, "Map"), iu = Dr(E, "Promise"), Co = Dr(E, "Set"), ki = Dr(E, "WeakMap"), Ei = Dr(ye, "create"), Ks = ki && new ki(), So = {}, D0 = Nr(ou), N0 = Nr(Si), O0 = Nr(iu), P0 = Nr(Co), R0 = Nr(ki), Js = nr ? nr.prototype : o, Ii = Js ? Js.valueOf : o, zf = Js ? Js.toString : o;
      function h(t) {
        if (De(t) && !X(t) && !(t instanceof se)) {
          if (t instanceof Zt)
            return t;
          if (me.call(t, "__wrapped__"))
            return Yh(t);
        }
        return new Zt(t);
      }
      var ko = function() {
        function t() {
        }
        return function(n) {
          if (!Be(n))
            return {};
          if (Ff)
            return Ff(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = o, i;
        };
      }();
      function Xs() {
      }
      function Zt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: Qg,
        evaluate: e1,
        interpolate: Qd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Xs.prototype, h.prototype.constructor = h, Zt.prototype = ko(Xs.prototype), Zt.prototype.constructor = Zt;
      function se(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ot, this.__views__ = [];
      }
      function F0() {
        var t = new se(this.__wrapped__);
        return t.__actions__ = $t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = $t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = $t(this.__views__), t;
      }
      function U0() {
        if (this.__filtered__) {
          var t = new se(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function W0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = X(t), l = n < 0, d = i ? t.length : 0, p = ey(0, d, this.__views__), m = p.start, g = p.end, b = g - m, A = l ? g : m - 1, B = this.__iteratees__, M = B.length, F = 0, H = it(b, this.__takeCount__);
        if (!i || !l && d == b && H == b)
          return wh(t, this.__actions__);
        var Z = [];
        e:
          for (; b-- && F < H; ) {
            A += n;
            for (var te = -1, K = t[A]; ++te < M; ) {
              var ie = B[te], le = ie.iteratee, Dt = ie.type, ht = le(K);
              if (Dt == ce)
                K = ht;
              else if (!ht) {
                if (Dt == Se)
                  continue e;
                break e;
              }
            }
            Z[F++] = K;
          }
        return Z;
      }
      se.prototype = ko(Xs.prototype), se.prototype.constructor = se;
      function Br(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function q0() {
        this.__data__ = Ei ? Ei(null) : {}, this.size = 0;
      }
      function H0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function z0(t) {
        var n = this.__data__;
        if (Ei) {
          var i = n[t];
          return i === w ? o : i;
        }
        return me.call(n, t) ? n[t] : o;
      }
      function Y0(t) {
        var n = this.__data__;
        return Ei ? n[t] !== o : me.call(n, t);
      }
      function G0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = Ei && n === o ? w : n, this;
      }
      Br.prototype.clear = q0, Br.prototype.delete = H0, Br.prototype.get = z0, Br.prototype.has = Y0, Br.prototype.set = G0;
      function An(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function j0() {
        this.__data__ = [], this.size = 0;
      }
      function Z0(t) {
        var n = this.__data__, i = Qs(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Ys.call(n, i, 1), --this.size, !0;
      }
      function K0(t) {
        var n = this.__data__, i = Qs(n, t);
        return i < 0 ? o : n[i][1];
      }
      function J0(t) {
        return Qs(this.__data__, t) > -1;
      }
      function X0(t, n) {
        var i = this.__data__, l = Qs(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      An.prototype.clear = j0, An.prototype.delete = Z0, An.prototype.get = K0, An.prototype.has = J0, An.prototype.set = X0;
      function Bn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Q0() {
        this.size = 0, this.__data__ = {
          hash: new Br(),
          map: new (Si || An)(),
          string: new Br()
        };
      }
      function e$(t) {
        var n = da(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function t$(t) {
        return da(this, t).get(t);
      }
      function n$(t) {
        return da(this, t).has(t);
      }
      function r$(t, n) {
        var i = da(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      Bn.prototype.clear = Q0, Bn.prototype.delete = e$, Bn.prototype.get = t$, Bn.prototype.has = n$, Bn.prototype.set = r$;
      function Tr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Bn(); ++n < i; )
          this.add(t[n]);
      }
      function o$(t) {
        return this.__data__.set(t, w), this;
      }
      function i$(t) {
        return this.__data__.has(t);
      }
      Tr.prototype.add = Tr.prototype.push = o$, Tr.prototype.has = i$;
      function ln(t) {
        var n = this.__data__ = new An(t);
        this.size = n.size;
      }
      function s$() {
        this.__data__ = new An(), this.size = 0;
      }
      function a$(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function l$(t) {
        return this.__data__.get(t);
      }
      function u$(t) {
        return this.__data__.has(t);
      }
      function c$(t, n) {
        var i = this.__data__;
        if (i instanceof An) {
          var l = i.__data__;
          if (!Si || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new Bn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      ln.prototype.clear = s$, ln.prototype.delete = a$, ln.prototype.get = l$, ln.prototype.has = u$, ln.prototype.set = c$;
      function Yf(t, n) {
        var i = X(t), l = !i && Or(t), d = !i && !l && ar(t), p = !i && !l && !d && Ao(t), m = i || l || d || p, g = m ? Ql(t.length, $0) : [], b = g.length;
        for (var A in t)
          (n || me.call(t, A)) && !(m && (A == "length" || d && (A == "offset" || A == "parent") || p && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Dn(A, b))) && g.push(A);
        return g;
      }
      function Gf(t) {
        var n = t.length;
        return n ? t[vu(0, n - 1)] : o;
      }
      function d$(t, n) {
        return fa($t(t), Lr(n, 0, t.length));
      }
      function f$(t) {
        return fa($t(t));
      }
      function su(t, n, i) {
        (i !== o && !un(t[n], i) || i === o && !(n in t)) && Tn(t, n, i);
      }
      function xi(t, n, i) {
        var l = t[n];
        (!(me.call(t, n) && un(l, i)) || i === o && !(n in t)) && Tn(t, n, i);
      }
      function Qs(t, n) {
        for (var i = t.length; i--; )
          if (un(t[i][0], n))
            return i;
        return -1;
      }
      function h$(t, n, i, l) {
        return rr(t, function(d, p, m) {
          n(l, d, i(d), m);
        }), l;
      }
      function jf(t, n) {
        return t && yn(n, Ze(n), t);
      }
      function p$(t, n) {
        return t && yn(n, Vt(n), t);
      }
      function Tn(t, n, i) {
        n == "__proto__" && Gs ? Gs(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function au(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? o : Uu(t, n[i]);
        return d;
      }
      function Lr(t, n, i) {
        return t === t && (i !== o && (t = t <= i ? t : i), n !== o && (t = t >= n ? t : n)), t;
      }
      function Kt(t, n, i, l, d, p) {
        var m, g = n & $, b = n & y, A = n & T;
        if (i && (m = d ? i(t, l, d, p) : i(t)), m !== o)
          return m;
        if (!Be(t))
          return t;
        var B = X(t);
        if (B) {
          if (m = ny(t), !g)
            return $t(t, m);
        } else {
          var M = st(t), F = M == Er || M == yi;
          if (ar(t))
            return _h(t, g);
          if (M == zt || M == Yn || F && !d) {
            if (m = b || F ? {} : Oh(t), !g)
              return b ? z$(t, p$(m, t)) : H$(t, jf(m, t));
          } else {
            if (!Ve[M])
              return d ? t : {};
            m = ry(t, M, g);
          }
        }
        p || (p = new ln());
        var H = p.get(t);
        if (H)
          return H;
        p.set(t, m), fp(t) ? t.forEach(function(K) {
          m.add(Kt(K, n, i, K, t, p));
        }) : cp(t) && t.forEach(function(K, ie) {
          m.set(ie, Kt(K, n, i, ie, t, p));
        });
        var Z = A ? b ? Eu : ku : b ? Vt : Ze, te = B ? o : Z(t);
        return Gt(te || t, function(K, ie) {
          te && (ie = K, K = t[ie]), xi(m, ie, Kt(K, n, i, ie, t, p));
        }), m;
      }
      function w$(t) {
        var n = Ze(t);
        return function(i) {
          return Zf(i, t, n);
        };
      }
      function Zf(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = ye(t); l--; ) {
          var d = i[l], p = n[d], m = t[d];
          if (m === o && !(d in t) || !p(m))
            return !1;
        }
        return !0;
      }
      function Kf(t, n, i) {
        if (typeof t != "function")
          throw new jt(c);
        return Ni(function() {
          t.apply(o, i);
        }, n);
      }
      function Ai(t, n, i, l) {
        var d = -1, p = Ns, m = !0, g = t.length, b = [], A = n.length;
        if (!g)
          return b;
        i && (n = xe(n, Tt(i))), l ? (p = Gl, m = !1) : n.length >= a && (p = bi, m = !1, n = new Tr(n));
        e:
          for (; ++d < g; ) {
            var B = t[d], M = i == null ? B : i(B);
            if (B = l || B !== 0 ? B : 0, m && M === M) {
              for (var F = A; F--; )
                if (n[F] === M)
                  continue e;
              b.push(B);
            } else
              p(n, M, l) || b.push(B);
          }
        return b;
      }
      var rr = bh($n), Jf = bh(uu, !0);
      function v$(t, n) {
        var i = !0;
        return rr(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function ea(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === o ? m === m && !Mt(m) : i(m, g)))
            var g = m, b = p;
        }
        return b;
      }
      function m$(t, n, i, l) {
        var d = t.length;
        for (i = Q(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === o || l > d ? d : Q(l), l < 0 && (l += d), l = i > l ? 0 : pp(l); i < l; )
          t[i++] = n;
        return t;
      }
      function Xf(t, n) {
        var i = [];
        return rr(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function Xe(t, n, i, l, d) {
        var p = -1, m = t.length;
        for (i || (i = iy), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? Xe(g, n - 1, i, l, d) : er(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var lu = Ch(), Qf = Ch(!0);
      function $n(t, n) {
        return t && lu(t, n, Ze);
      }
      function uu(t, n) {
        return t && Qf(t, n, Ze);
      }
      function ta(t, n) {
        return Qn(n, function(i) {
          return Nn(t[i]);
        });
      }
      function Mr(t, n) {
        n = ir(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[Vn(n[i++])];
        return i && i == l ? t : o;
      }
      function eh(t, n, i) {
        var l = n(t);
        return X(t) ? l : er(l, i(t));
      }
      function dt(t) {
        return t == null ? t === o ? xs : Es : Ar && Ar in ye(t) ? Q$(t) : fy(t);
      }
      function cu(t, n) {
        return t > n;
      }
      function _$(t, n) {
        return t != null && me.call(t, n);
      }
      function g$(t, n) {
        return t != null && n in ye(t);
      }
      function $$(t, n, i) {
        return t >= it(n, i) && t < ze(n, i);
      }
      function du(t, n, i) {
        for (var l = i ? Gl : Ns, d = t[0].length, p = t.length, m = p, g = C(p), b = 1 / 0, A = []; m--; ) {
          var B = t[m];
          m && n && (B = xe(B, Tt(n))), b = it(B.length, b), g[m] = !i && (n || d >= 120 && B.length >= 120) ? new Tr(m && B) : o;
        }
        B = t[0];
        var M = -1, F = g[0];
        e:
          for (; ++M < d && A.length < b; ) {
            var H = B[M], Z = n ? n(H) : H;
            if (H = i || H !== 0 ? H : 0, !(F ? bi(F, Z) : l(A, Z, i))) {
              for (m = p; --m; ) {
                var te = g[m];
                if (!(te ? bi(te, Z) : l(t[m], Z, i)))
                  continue e;
              }
              F && F.push(Z), A.push(H);
            }
          }
        return A;
      }
      function y$(t, n, i, l) {
        return $n(t, function(d, p, m) {
          n(l, i(d), p, m);
        }), l;
      }
      function Bi(t, n, i) {
        n = ir(n, t), t = Uh(t, n);
        var l = t == null ? t : t[Vn(Xt(n))];
        return l == null ? o : Bt(l, t, i);
      }
      function th(t) {
        return De(t) && dt(t) == Yn;
      }
      function V$(t) {
        return De(t) && dt(t) == ee;
      }
      function b$(t) {
        return De(t) && dt(t) == jn;
      }
      function Ti(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !De(t) && !De(n) ? t !== t && n !== n : C$(t, n, i, l, Ti, d);
      }
      function C$(t, n, i, l, d, p) {
        var m = X(t), g = X(n), b = m ? Sr : st(t), A = g ? Sr : st(n);
        b = b == Yn ? zt : b, A = A == Yn ? zt : A;
        var B = b == zt, M = A == zt, F = b == A;
        if (F && ar(t)) {
          if (!ar(n))
            return !1;
          m = !0, B = !1;
        }
        if (F && !B)
          return p || (p = new ln()), m || Ao(t) ? Mh(t, n, i, l, d, p) : J$(t, n, b, i, l, d, p);
        if (!(i & L)) {
          var H = B && me.call(t, "__wrapped__"), Z = M && me.call(n, "__wrapped__");
          if (H || Z) {
            var te = H ? t.value() : t, K = Z ? n.value() : n;
            return p || (p = new ln()), d(te, K, i, l, p);
          }
        }
        return F ? (p || (p = new ln()), X$(t, n, i, l, d, p)) : !1;
      }
      function S$(t) {
        return De(t) && st(t) == _t;
      }
      function fu(t, n, i, l) {
        var d = i.length, p = d, m = !l;
        if (t == null)
          return !p;
        for (t = ye(t); d--; ) {
          var g = i[d];
          if (m && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = i[d];
          var b = g[0], A = t[b], B = g[1];
          if (m && g[2]) {
            if (A === o && !(b in t))
              return !1;
          } else {
            var M = new ln();
            if (l)
              var F = l(A, B, b, t, n, M);
            if (!(F === o ? Ti(B, A, L | N, l, M) : F))
              return !1;
          }
        }
        return !0;
      }
      function nh(t) {
        if (!Be(t) || ay(t))
          return !1;
        var n = Nn(t) ? S0 : w1;
        return n.test(Nr(t));
      }
      function k$(t) {
        return De(t) && dt(t) == Kn;
      }
      function E$(t) {
        return De(t) && st(t) == gt;
      }
      function I$(t) {
        return De(t) && _a(t.length) && !!ke[dt(t)];
      }
      function rh(t) {
        return typeof t == "function" ? t : t == null ? bt : typeof t == "object" ? X(t) ? sh(t[0], t[1]) : ih(t) : Sp(t);
      }
      function hu(t) {
        if (!Di(t))
          return B0(t);
        var n = [];
        for (var i in ye(t))
          me.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function x$(t) {
        if (!Be(t))
          return dy(t);
        var n = Di(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !me.call(t, l)) || i.push(l);
        return i;
      }
      function pu(t, n) {
        return t < n;
      }
      function oh(t, n) {
        var i = -1, l = yt(t) ? C(t.length) : [];
        return rr(t, function(d, p, m) {
          l[++i] = n(d, p, m);
        }), l;
      }
      function ih(t) {
        var n = xu(t);
        return n.length == 1 && n[0][2] ? Rh(n[0][0], n[0][1]) : function(i) {
          return i === t || fu(i, t, n);
        };
      }
      function sh(t, n) {
        return Bu(t) && Ph(n) ? Rh(Vn(t), n) : function(i) {
          var l = Uu(i, t);
          return l === o && l === n ? Wu(i, t) : Ti(n, l, L | N);
        };
      }
      function na(t, n, i, l, d) {
        t !== n && lu(n, function(p, m) {
          if (d || (d = new ln()), Be(p))
            A$(t, n, m, i, na, l, d);
          else {
            var g = l ? l(Lu(t, m), p, m + "", t, n, d) : o;
            g === o && (g = p), su(t, m, g);
          }
        }, Vt);
      }
      function A$(t, n, i, l, d, p, m) {
        var g = Lu(t, i), b = Lu(n, i), A = m.get(b);
        if (A) {
          su(t, i, A);
          return;
        }
        var B = p ? p(g, b, i + "", t, n, m) : o, M = B === o;
        if (M) {
          var F = X(b), H = !F && ar(b), Z = !F && !H && Ao(b);
          B = b, F || H || Z ? X(g) ? B = g : Pe(g) ? B = $t(g) : H ? (M = !1, B = _h(b, !0)) : Z ? (M = !1, B = gh(b, !0)) : B = [] : Oi(b) || Or(b) ? (B = g, Or(g) ? B = wp(g) : (!Be(g) || Nn(g)) && (B = Oh(b))) : M = !1;
        }
        M && (m.set(b, B), d(B, b, l, p, m), m.delete(b)), su(t, i, B);
      }
      function ah(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, Dn(n, i) ? t[n] : o;
      }
      function lh(t, n, i) {
        n.length ? n = xe(n, function(p) {
          return X(p) ? function(m) {
            return Mr(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [bt];
        var l = -1;
        n = xe(n, Tt(G()));
        var d = oh(t, function(p, m, g) {
          var b = xe(n, function(A) {
            return A(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return r0(d, function(p, m) {
          return q$(p, m, i);
        });
      }
      function B$(t, n) {
        return uh(t, n, function(i, l) {
          return Wu(t, l);
        });
      }
      function uh(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = Mr(t, m);
          i(g, m) && Li(p, ir(m, t), g);
        }
        return p;
      }
      function T$(t) {
        return function(n) {
          return Mr(n, t);
        };
      }
      function wu(t, n, i, l) {
        var d = l ? n0 : go, p = -1, m = n.length, g = t;
        for (t === n && (n = $t(n)), i && (g = xe(t, Tt(i))); ++p < m; )
          for (var b = 0, A = n[p], B = i ? i(A) : A; (b = d(g, B, b, l)) > -1; )
            g !== t && Ys.call(g, b, 1), Ys.call(t, b, 1);
        return t;
      }
      function ch(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            Dn(d) ? Ys.call(t, d, 1) : gu(t, d);
          }
        }
        return t;
      }
      function vu(t, n) {
        return t + Zs(Hf() * (n - t + 1));
      }
      function L$(t, n, i, l) {
        for (var d = -1, p = ze(js((n - t) / (i || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += i;
        return m;
      }
      function mu(t, n) {
        var i = "";
        if (!t || n < 1 || n > je)
          return i;
        do
          n % 2 && (i += t), n = Zs(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function re(t, n) {
        return Mu(Fh(t, n, bt), t + "");
      }
      function M$(t) {
        return Gf(Bo(t));
      }
      function D$(t, n) {
        var i = Bo(t);
        return fa(i, Lr(n, 0, i.length));
      }
      function Li(t, n, i, l) {
        if (!Be(t))
          return t;
        n = ir(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var b = Vn(n[d]), A = i;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != m) {
            var B = g[b];
            A = l ? l(B, b, g) : o, A === o && (A = Be(B) ? B : Dn(n[d + 1]) ? [] : {});
          }
          xi(g, b, A), g = g[b];
        }
        return t;
      }
      var dh = Ks ? function(t, n) {
        return Ks.set(t, n), t;
      } : bt, N$ = Gs ? function(t, n) {
        return Gs(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Hu(n),
          writable: !0
        });
      } : bt;
      function O$(t) {
        return fa(Bo(t));
      }
      function Jt(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function P$(t, n) {
        var i;
        return rr(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function ra(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= Nl) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !Mt(m) && (i ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return _u(t, n, bt, i);
      }
      function _u(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, g = n === null, b = Mt(n), A = n === o; d < p; ) {
          var B = Zs((d + p) / 2), M = i(t[B]), F = M !== o, H = M === null, Z = M === M, te = Mt(M);
          if (m)
            var K = l || Z;
          else
            A ? K = Z && (l || F) : g ? K = Z && F && (l || !H) : b ? K = Z && F && !H && (l || !te) : H || te ? K = !1 : K = l ? M <= n : M < n;
          K ? d = B + 1 : p = B;
        }
        return it(p, Dl);
      }
      function fh(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var m = t[i], g = n ? n(m) : m;
          if (!i || !un(g, b)) {
            var b = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function hh(t) {
        return typeof t == "number" ? t : Mt(t) ? lo : +t;
      }
      function Lt(t) {
        if (typeof t == "string")
          return t;
        if (X(t))
          return xe(t, Lt) + "";
        if (Mt(t))
          return zf ? zf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -We ? "-0" : n;
      }
      function or(t, n, i) {
        var l = -1, d = Ns, p = t.length, m = !0, g = [], b = g;
        if (i)
          m = !1, d = Gl;
        else if (p >= a) {
          var A = n ? null : Z$(t);
          if (A)
            return Ps(A);
          m = !1, d = bi, b = new Tr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var B = t[l], M = n ? n(B) : B;
            if (B = i || B !== 0 ? B : 0, m && M === M) {
              for (var F = b.length; F--; )
                if (b[F] === M)
                  continue e;
              n && b.push(M), g.push(B);
            } else
              d(b, M, i) || (b !== g && b.push(M), g.push(B));
          }
        return g;
      }
      function gu(t, n) {
        return n = ir(n, t), t = Uh(t, n), t == null || delete t[Vn(Xt(n))];
      }
      function ph(t, n, i, l) {
        return Li(t, n, i(Mr(t, n)), l);
      }
      function oa(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Jt(t, l ? 0 : p, l ? p + 1 : d) : Jt(t, l ? p + 1 : 0, l ? d : p);
      }
      function wh(t, n) {
        var i = t;
        return i instanceof se && (i = i.value()), jl(n, function(l, d) {
          return d.func.apply(d.thisArg, er([l], d.args));
        }, i);
      }
      function $u(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? or(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = Ai(p[d] || m, t[g], n, i));
        return or(Xe(p, 1), n, i);
      }
      function vh(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : o;
          i(m, t[l], g);
        }
        return m;
      }
      function yu(t) {
        return Pe(t) ? t : [];
      }
      function Vu(t) {
        return typeof t == "function" ? t : bt;
      }
      function ir(t, n) {
        return X(t) ? t : Bu(t, n) ? [t] : zh(ve(t));
      }
      var R$ = re;
      function sr(t, n, i) {
        var l = t.length;
        return i = i === o ? l : i, !n && i >= l ? t : Jt(t, n, i);
      }
      var mh = k0 || function(t) {
        return Je.clearTimeout(t);
      };
      function _h(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Rf ? Rf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function bu(t) {
        var n = new t.constructor(t.byteLength);
        return new Hs(n).set(new Hs(t)), n;
      }
      function F$(t, n) {
        var i = n ? bu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function U$(t) {
        var n = new t.constructor(t.source, ef.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function W$(t) {
        return Ii ? ye(Ii.call(t)) : {};
      }
      function gh(t, n) {
        var i = n ? bu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function $h(t, n) {
        if (t !== n) {
          var i = t !== o, l = t === null, d = t === t, p = Mt(t), m = n !== o, g = n === null, b = n === n, A = Mt(n);
          if (!g && !A && !p && t > n || p && m && b && !g && !A || l && m && b || !i && b || !d)
            return 1;
          if (!l && !p && !A && t < n || A && i && d && !l && !p || g && i && d || !m && d || !b)
            return -1;
        }
        return 0;
      }
      function q$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = i.length; ++l < m; ) {
          var b = $h(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var A = i[l];
            return b * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function yh(t, n, i, l) {
        for (var d = -1, p = t.length, m = i.length, g = -1, b = n.length, A = ze(p - m, 0), B = C(b + A), M = !l; ++g < b; )
          B[g] = n[g];
        for (; ++d < m; )
          (M || d < p) && (B[i[d]] = t[d]);
        for (; A--; )
          B[g++] = t[d++];
        return B;
      }
      function Vh(t, n, i, l) {
        for (var d = -1, p = t.length, m = -1, g = i.length, b = -1, A = n.length, B = ze(p - g, 0), M = C(B + A), F = !l; ++d < B; )
          M[d] = t[d];
        for (var H = d; ++b < A; )
          M[H + b] = n[b];
        for (; ++m < g; )
          (F || d < p) && (M[H + i[m]] = t[d++]);
        return M;
      }
      function $t(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function yn(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var g = n[p], b = l ? l(i[g], t[g], g, i, t) : o;
          b === o && (b = t[g]), d ? Tn(i, g, b) : xi(i, g, b);
        }
        return i;
      }
      function H$(t, n) {
        return yn(t, Au(t), n);
      }
      function z$(t, n) {
        return yn(t, Dh(t), n);
      }
      function ia(t, n) {
        return function(i, l) {
          var d = X(i) ? K1 : h$, p = n ? n() : {};
          return d(i, t, G(l, 2), p);
        };
      }
      function Eo(t) {
        return re(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : o, m = d > 2 ? i[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : o, m && ft(i[0], i[1], m) && (p = d < 3 ? o : p, d = 1), n = ye(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function bh(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!yt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, m = ye(i); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function Ch(t) {
        return function(n, i, l) {
          for (var d = -1, p = ye(n), m = l(n), g = m.length; g--; ) {
            var b = m[t ? g : ++d];
            if (i(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function Y$(t, n, i) {
        var l = n & D, d = Mi(t);
        function p() {
          var m = this && this !== Je && this instanceof p ? d : t;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function Sh(t) {
        return function(n) {
          n = ve(n);
          var i = $o(n) ? an(n) : o, l = i ? i[0] : n.charAt(0), d = i ? sr(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Io(t) {
        return function(n) {
          return jl(bp(Vp(n).replace(N1, "")), t, "");
        };
      }
      function Mi(t) {
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
          var i = ko(t.prototype), l = t.apply(i, n);
          return Be(l) ? l : i;
        };
      }
      function G$(t, n, i) {
        var l = Mi(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, b = xo(d); g--; )
            m[g] = arguments[g];
          var A = p < 3 && m[0] !== b && m[p - 1] !== b ? [] : tr(m, b);
          if (p -= A.length, p < i)
            return Ah(
              t,
              n,
              sa,
              d.placeholder,
              o,
              m,
              A,
              o,
              o,
              i - p
            );
          var B = this && this !== Je && this instanceof d ? l : t;
          return Bt(B, this, m);
        }
        return d;
      }
      function kh(t) {
        return function(n, i, l) {
          var d = ye(n);
          if (!yt(n)) {
            var p = G(i, 3);
            n = Ze(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var m = t(n, i, l);
          return m > -1 ? d[p ? n[m] : m] : o;
        };
      }
      function Eh(t) {
        return Mn(function(n) {
          var i = n.length, l = i, d = Zt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new jt(c);
            if (d && !m && ca(p) == "wrapper")
              var m = new Zt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var g = ca(p), b = g == "wrapper" ? Iu(p) : o;
            b && Tu(b[0]) && b[1] == (O | I | k | z) && !b[4].length && b[9] == 1 ? m = m[ca(b[0])].apply(m, b[3]) : m = p.length == 1 && Tu(p) ? m[g]() : m.thru(p);
          }
          return function() {
            var A = arguments, B = A[0];
            if (m && A.length == 1 && X(B))
              return m.plant(B).value();
            for (var M = 0, F = i ? n[M].apply(this, A) : B; ++M < i; )
              F = n[M].call(this, F);
            return F;
          };
        });
      }
      function sa(t, n, i, l, d, p, m, g, b, A) {
        var B = n & O, M = n & D, F = n & S, H = n & (I | P), Z = n & fe, te = F ? o : Mi(t);
        function K() {
          for (var ie = arguments.length, le = C(ie), Dt = ie; Dt--; )
            le[Dt] = arguments[Dt];
          if (H)
            var ht = xo(K), Nt = i0(le, ht);
          if (l && (le = yh(le, l, d, H)), p && (le = Vh(le, p, m, H)), ie -= Nt, H && ie < A) {
            var Re = tr(le, ht);
            return Ah(
              t,
              n,
              sa,
              K.placeholder,
              i,
              le,
              Re,
              g,
              b,
              A - ie
            );
          }
          var cn = M ? i : this, Pn = F ? cn[t] : t;
          return ie = le.length, g ? le = hy(le, g) : Z && ie > 1 && le.reverse(), B && b < ie && (le.length = b), this && this !== Je && this instanceof K && (Pn = te || Mi(Pn)), Pn.apply(cn, le);
        }
        return K;
      }
      function Ih(t, n) {
        return function(i, l) {
          return y$(i, t, n(l), {});
        };
      }
      function aa(t, n) {
        return function(i, l) {
          var d;
          if (i === o && l === o)
            return n;
          if (i !== o && (d = i), l !== o) {
            if (d === o)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = Lt(i), l = Lt(l)) : (i = hh(i), l = hh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Cu(t) {
        return Mn(function(n) {
          return n = xe(n, Tt(G())), re(function(i) {
            var l = this;
            return t(n, function(d) {
              return Bt(d, l, i);
            });
          });
        });
      }
      function la(t, n) {
        n = n === o ? " " : Lt(n);
        var i = n.length;
        if (i < 2)
          return i ? mu(n, t) : n;
        var l = mu(n, js(t / yo(n)));
        return $o(n) ? sr(an(l), 0, t).join("") : l.slice(0, t);
      }
      function j$(t, n, i, l) {
        var d = n & D, p = Mi(t);
        function m() {
          for (var g = -1, b = arguments.length, A = -1, B = l.length, M = C(B + b), F = this && this !== Je && this instanceof m ? p : t; ++A < B; )
            M[A] = l[A];
          for (; b--; )
            M[A++] = arguments[++g];
          return Bt(F, d ? i : this, M);
        }
        return m;
      }
      function xh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && ft(n, i, l) && (i = l = o), n = On(n), i === o ? (i = n, n = 0) : i = On(i), l = l === o ? n < i ? 1 : -1 : On(l), L$(n, i, l, t);
        };
      }
      function ua(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Qt(n), i = Qt(i)), t(n, i);
        };
      }
      function Ah(t, n, i, l, d, p, m, g, b, A) {
        var B = n & I, M = B ? m : o, F = B ? o : m, H = B ? p : o, Z = B ? o : p;
        n |= B ? k : R, n &= ~(B ? R : k), n & x || (n &= ~(D | S));
        var te = [
          t,
          n,
          d,
          H,
          M,
          Z,
          F,
          g,
          b,
          A
        ], K = i.apply(o, te);
        return Tu(t) && Wh(K, te), K.placeholder = l, qh(K, t, n);
      }
      function Su(t) {
        var n = He[t];
        return function(i, l) {
          if (i = Qt(i), l = l == null ? 0 : it(Q(l), 292), l && qf(i)) {
            var d = (ve(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (ve(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Z$ = Co && 1 / Ps(new Co([, -0]))[1] == We ? function(t) {
        return new Co(t);
      } : Gu;
      function Bh(t) {
        return function(n) {
          var i = st(n);
          return i == _t ? tu(n) : i == gt ? f0(n) : o0(n, t(n));
        };
      }
      function Ln(t, n, i, l, d, p, m, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new jt(c);
        var A = l ? l.length : 0;
        if (A || (n &= ~(k | R), l = d = o), m = m === o ? m : ze(Q(m), 0), g = g === o ? g : Q(g), A -= d ? d.length : 0, n & R) {
          var B = l, M = d;
          l = d = o;
        }
        var F = b ? o : Iu(t), H = [
          t,
          n,
          i,
          l,
          d,
          B,
          M,
          p,
          m,
          g
        ];
        if (F && cy(H, F), t = H[0], n = H[1], i = H[2], l = H[3], d = H[4], g = H[9] = H[9] === o ? b ? 0 : t.length : ze(H[9] - A, 0), !g && n & (I | P) && (n &= ~(I | P)), !n || n == D)
          var Z = Y$(t, n, i);
        else
          n == I || n == P ? Z = G$(t, n, g) : (n == k || n == (D | k)) && !d.length ? Z = j$(t, n, i, l) : Z = sa.apply(o, H);
        var te = F ? dh : Wh;
        return qh(te(Z, H), t, n);
      }
      function Th(t, n, i, l) {
        return t === o || un(t, bo[i]) && !me.call(l, i) ? n : t;
      }
      function Lh(t, n, i, l, d, p) {
        return Be(t) && Be(n) && (p.set(n, t), na(t, n, o, Lh, p), p.delete(n)), t;
      }
      function K$(t) {
        return Oi(t) ? o : t;
      }
      function Mh(t, n, i, l, d, p) {
        var m = i & L, g = t.length, b = n.length;
        if (g != b && !(m && b > g))
          return !1;
        var A = p.get(t), B = p.get(n);
        if (A && B)
          return A == n && B == t;
        var M = -1, F = !0, H = i & N ? new Tr() : o;
        for (p.set(t, n), p.set(n, t); ++M < g; ) {
          var Z = t[M], te = n[M];
          if (l)
            var K = m ? l(te, Z, M, n, t, p) : l(Z, te, M, t, n, p);
          if (K !== o) {
            if (K)
              continue;
            F = !1;
            break;
          }
          if (H) {
            if (!Zl(n, function(ie, le) {
              if (!bi(H, le) && (Z === ie || d(Z, ie, i, l, p)))
                return H.push(le);
            })) {
              F = !1;
              break;
            }
          } else if (!(Z === te || d(Z, te, i, l, p))) {
            F = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), F;
      }
      function J$(t, n, i, l, d, p, m) {
        switch (i) {
          case Y:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case ee:
            return !(t.byteLength != n.byteLength || !p(new Hs(t), new Hs(n)));
          case Gn:
          case jn:
          case Zn:
            return un(+t, +n);
          case kr:
            return t.name == n.name && t.message == n.message;
          case Kn:
          case Jn:
            return t == n + "";
          case _t:
            var g = tu;
          case gt:
            var b = l & L;
            if (g || (g = Ps), t.size != n.size && !b)
              return !1;
            var A = m.get(t);
            if (A)
              return A == n;
            l |= N, m.set(t, n);
            var B = Mh(g(t), g(n), l, d, p, m);
            return m.delete(t), B;
          case Ir:
            if (Ii)
              return Ii.call(t) == Ii.call(n);
        }
        return !1;
      }
      function X$(t, n, i, l, d, p) {
        var m = i & L, g = ku(t), b = g.length, A = ku(n), B = A.length;
        if (b != B && !m)
          return !1;
        for (var M = b; M--; ) {
          var F = g[M];
          if (!(m ? F in n : me.call(n, F)))
            return !1;
        }
        var H = p.get(t), Z = p.get(n);
        if (H && Z)
          return H == n && Z == t;
        var te = !0;
        p.set(t, n), p.set(n, t);
        for (var K = m; ++M < b; ) {
          F = g[M];
          var ie = t[F], le = n[F];
          if (l)
            var Dt = m ? l(le, ie, F, n, t, p) : l(ie, le, F, t, n, p);
          if (!(Dt === o ? ie === le || d(ie, le, i, l, p) : Dt)) {
            te = !1;
            break;
          }
          K || (K = F == "constructor");
        }
        if (te && !K) {
          var ht = t.constructor, Nt = n.constructor;
          ht != Nt && "constructor" in t && "constructor" in n && !(typeof ht == "function" && ht instanceof ht && typeof Nt == "function" && Nt instanceof Nt) && (te = !1);
        }
        return p.delete(t), p.delete(n), te;
      }
      function Mn(t) {
        return Mu(Fh(t, o, Zh), t + "");
      }
      function ku(t) {
        return eh(t, Ze, Au);
      }
      function Eu(t) {
        return eh(t, Vt, Dh);
      }
      var Iu = Ks ? function(t) {
        return Ks.get(t);
      } : Gu;
      function ca(t) {
        for (var n = t.name + "", i = So[n], l = me.call(So, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function xo(t) {
        var n = me.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function G() {
        var t = h.iteratee || zu;
        return t = t === zu ? rh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function da(t, n) {
        var i = t.__data__;
        return sy(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function xu(t) {
        for (var n = Ze(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Ph(d)];
        }
        return n;
      }
      function Dr(t, n) {
        var i = u0(t, n);
        return nh(i) ? i : o;
      }
      function Q$(t) {
        var n = me.call(t, Ar), i = t[Ar];
        try {
          t[Ar] = o;
          var l = !0;
        } catch {
        }
        var d = Ws.call(t);
        return l && (n ? t[Ar] = i : delete t[Ar]), d;
      }
      var Au = ru ? function(t) {
        return t == null ? [] : (t = ye(t), Qn(ru(t), function(n) {
          return Uf.call(t, n);
        }));
      } : ju, Dh = ru ? function(t) {
        for (var n = []; t; )
          er(n, Au(t)), t = zs(t);
        return n;
      } : ju, st = dt;
      (ou && st(new ou(new ArrayBuffer(1))) != Y || Si && st(new Si()) != _t || iu && st(iu.resolve()) != Vi || Co && st(new Co()) != gt || ki && st(new ki()) != Xn) && (st = function(t) {
        var n = dt(t), i = n == zt ? t.constructor : o, l = i ? Nr(i) : "";
        if (l)
          switch (l) {
            case D0:
              return Y;
            case N0:
              return _t;
            case O0:
              return Vi;
            case P0:
              return gt;
            case R0:
              return Xn;
          }
        return n;
      });
      function ey(t, n, i) {
        for (var l = -1, d = i.length; ++l < d; ) {
          var p = i[l], m = p.size;
          switch (p.type) {
            case "drop":
              t += m;
              break;
            case "dropRight":
              n -= m;
              break;
            case "take":
              n = it(n, t + m);
              break;
            case "takeRight":
              t = ze(t, n - m);
              break;
          }
        }
        return { start: t, end: n };
      }
      function ty(t) {
        var n = t.match(a1);
        return n ? n[1].split(l1) : [];
      }
      function Nh(t, n, i) {
        n = ir(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = Vn(n[l]);
          if (!(p = t != null && i(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && _a(d) && Dn(m, d) && (X(t) || Or(t)));
      }
      function ny(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && me.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function Oh(t) {
        return typeof t.constructor == "function" && !Di(t) ? ko(zs(t)) : {};
      }
      function ry(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case ee:
            return bu(t);
          case Gn:
          case jn:
            return new l(+t);
          case Y:
            return F$(t, i);
          case oe:
          case uo:
          case co:
          case fo:
          case ho:
          case po:
          case wo:
          case vo:
          case mo:
            return gh(t, i);
          case _t:
            return new l();
          case Zn:
          case Jn:
            return new l(t);
          case Kn:
            return U$(t);
          case gt:
            return new l();
          case Ir:
            return W$(t);
        }
      }
      function oy(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(s1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function iy(t) {
        return X(t) || Or(t) || !!(Wf && t && t[Wf]);
      }
      function Dn(t, n) {
        var i = typeof t;
        return n = n == null ? je : n, !!n && (i == "number" || i != "symbol" && m1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function ft(t, n, i) {
        if (!Be(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? yt(i) && Dn(n, i.length) : l == "string" && n in i) ? un(i[n], t) : !1;
      }
      function Bu(t, n) {
        if (X(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Mt(t) ? !0 : n1.test(t) || !t1.test(t) || n != null && t in ye(n);
      }
      function sy(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Tu(t) {
        var n = ca(t), i = h[n];
        if (typeof i != "function" || !(n in se.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Iu(i);
        return !!l && t === l[0];
      }
      function ay(t) {
        return !!Pf && Pf in t;
      }
      var ly = Fs ? Nn : Zu;
      function Di(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || bo;
        return t === i;
      }
      function Ph(t) {
        return t === t && !Be(t);
      }
      function Rh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== o || t in ye(i));
        };
      }
      function uy(t) {
        var n = va(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function cy(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (D | S | O), m = l == O && i == I || l == O && i == z && t[7].length <= n[8] || l == (O | z) && n[7].length <= n[8] && i == I;
        if (!(p || m))
          return t;
        l & D && (t[2] = n[2], d |= i & D ? 0 : x);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? yh(b, g, n[4]) : g, t[4] = b ? tr(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? Vh(b, g, n[6]) : g, t[6] = b ? tr(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & O && (t[8] = t[8] == null ? n[8] : it(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function dy(t) {
        var n = [];
        if (t != null)
          for (var i in ye(t))
            n.push(i);
        return n;
      }
      function fy(t) {
        return Ws.call(t);
      }
      function Fh(t, n, i) {
        return n = ze(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = ze(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(m), Bt(t, this, g);
        };
      }
      function Uh(t, n) {
        return n.length < 2 ? t : Mr(t, Jt(n, 0, -1));
      }
      function hy(t, n) {
        for (var i = t.length, l = it(n.length, i), d = $t(t); l--; ) {
          var p = n[l];
          t[l] = Dn(p, i) ? d[p] : o;
        }
        return t;
      }
      function Lu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Wh = Hh(dh), Ni = I0 || function(t, n) {
        return Je.setTimeout(t, n);
      }, Mu = Hh(N$);
      function qh(t, n, i) {
        var l = n + "";
        return Mu(t, oy(l, py(ty(l), i)));
      }
      function Hh(t) {
        var n = 0, i = 0;
        return function() {
          var l = T0(), d = Ae - (l - i);
          if (i = l, d > 0) {
            if (++n >= Ce)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function fa(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === o ? l : n; ++i < n; ) {
          var p = vu(i, d), m = t[p];
          t[p] = t[i], t[i] = m;
        }
        return t.length = n, t;
      }
      var zh = uy(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(r1, function(i, l, d, p) {
          n.push(d ? p.replace(d1, "$1") : l || i);
        }), n;
      });
      function Vn(t) {
        if (typeof t == "string" || Mt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -We ? "-0" : n;
      }
      function Nr(t) {
        if (t != null) {
          try {
            return Us.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function py(t, n) {
        return Gt(Ol, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Ns(t, l) && t.push(l);
        }), t.sort();
      }
      function Yh(t) {
        if (t instanceof se)
          return t.clone();
        var n = new Zt(t.__wrapped__, t.__chain__);
        return n.__actions__ = $t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function wy(t, n, i) {
        (i ? ft(t, n, i) : n === o) ? n = 1 : n = ze(Q(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(js(l / n)); d < l; )
          m[p++] = Jt(t, d, d += n);
        return m;
      }
      function vy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function my() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return er(X(i) ? $t(i) : [i], Xe(n, 1));
      }
      var _y = re(function(t, n) {
        return Pe(t) ? Ai(t, Xe(n, 1, Pe, !0)) : [];
      }), gy = re(function(t, n) {
        var i = Xt(n);
        return Pe(i) && (i = o), Pe(t) ? Ai(t, Xe(n, 1, Pe, !0), G(i, 2)) : [];
      }), $y = re(function(t, n) {
        var i = Xt(n);
        return Pe(i) && (i = o), Pe(t) ? Ai(t, Xe(n, 1, Pe, !0), o, i) : [];
      });
      function yy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : Q(n), Jt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Vy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : Q(n), n = l - n, Jt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function by(t, n) {
        return t && t.length ? oa(t, G(n, 3), !0, !0) : [];
      }
      function Cy(t, n) {
        return t && t.length ? oa(t, G(n, 3), !0) : [];
      }
      function Sy(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && ft(t, n, i) && (i = 0, l = d), m$(t, n, i, l)) : [];
      }
      function Gh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : Q(i);
        return d < 0 && (d = ze(l + d, 0)), Os(t, G(n, 3), d);
      }
      function jh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== o && (d = Q(i), d = i < 0 ? ze(l + d, 0) : it(d, l - 1)), Os(t, G(n, 3), d, !0);
      }
      function Zh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xe(t, 1) : [];
      }
      function ky(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xe(t, We) : [];
      }
      function Ey(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === o ? 1 : Q(n), Xe(t, n)) : [];
      }
      function Iy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function Kh(t) {
        return t && t.length ? t[0] : o;
      }
      function xy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : Q(i);
        return d < 0 && (d = ze(l + d, 0)), go(t, n, d);
      }
      function Ay(t) {
        var n = t == null ? 0 : t.length;
        return n ? Jt(t, 0, -1) : [];
      }
      var By = re(function(t) {
        var n = xe(t, yu);
        return n.length && n[0] === t[0] ? du(n) : [];
      }), Ty = re(function(t) {
        var n = Xt(t), i = xe(t, yu);
        return n === Xt(i) ? n = o : i.pop(), i.length && i[0] === t[0] ? du(i, G(n, 2)) : [];
      }), Ly = re(function(t) {
        var n = Xt(t), i = xe(t, yu);
        return n = typeof n == "function" ? n : o, n && i.pop(), i.length && i[0] === t[0] ? du(i, o, n) : [];
      });
      function My(t, n) {
        return t == null ? "" : A0.call(t, n);
      }
      function Xt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function Dy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== o && (d = Q(i), d = d < 0 ? ze(l + d, 0) : it(d, l - 1)), n === n ? p0(t, n, d) : Os(t, Af, d, !0);
      }
      function Ny(t, n) {
        return t && t.length ? ah(t, Q(n)) : o;
      }
      var Oy = re(Jh);
      function Jh(t, n) {
        return t && t.length && n && n.length ? wu(t, n) : t;
      }
      function Py(t, n, i) {
        return t && t.length && n && n.length ? wu(t, n, G(i, 2)) : t;
      }
      function Ry(t, n, i) {
        return t && t.length && n && n.length ? wu(t, n, o, i) : t;
      }
      var Fy = Mn(function(t, n) {
        var i = t == null ? 0 : t.length, l = au(t, n);
        return ch(t, xe(n, function(d) {
          return Dn(d, i) ? +d : d;
        }).sort($h)), l;
      });
      function Uy(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = G(n, 3); ++l < p; ) {
          var m = t[l];
          n(m, l, t) && (i.push(m), d.push(l));
        }
        return ch(t, d), i;
      }
      function Du(t) {
        return t == null ? t : M0.call(t);
      }
      function Wy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && ft(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : Q(n), i = i === o ? l : Q(i)), Jt(t, n, i)) : [];
      }
      function qy(t, n) {
        return ra(t, n);
      }
      function Hy(t, n, i) {
        return _u(t, n, G(i, 2));
      }
      function zy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = ra(t, n);
          if (l < i && un(t[l], n))
            return l;
        }
        return -1;
      }
      function Yy(t, n) {
        return ra(t, n, !0);
      }
      function Gy(t, n, i) {
        return _u(t, n, G(i, 2), !0);
      }
      function jy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = ra(t, n, !0) - 1;
          if (un(t[l], n))
            return l;
        }
        return -1;
      }
      function Zy(t) {
        return t && t.length ? fh(t) : [];
      }
      function Ky(t, n) {
        return t && t.length ? fh(t, G(n, 2)) : [];
      }
      function Jy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Jt(t, 1, n) : [];
      }
      function Xy(t, n, i) {
        return t && t.length ? (n = i || n === o ? 1 : Q(n), Jt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Qy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : Q(n), n = l - n, Jt(t, n < 0 ? 0 : n, l)) : [];
      }
      function eV(t, n) {
        return t && t.length ? oa(t, G(n, 3), !1, !0) : [];
      }
      function tV(t, n) {
        return t && t.length ? oa(t, G(n, 3)) : [];
      }
      var nV = re(function(t) {
        return or(Xe(t, 1, Pe, !0));
      }), rV = re(function(t) {
        var n = Xt(t);
        return Pe(n) && (n = o), or(Xe(t, 1, Pe, !0), G(n, 2));
      }), oV = re(function(t) {
        var n = Xt(t);
        return n = typeof n == "function" ? n : o, or(Xe(t, 1, Pe, !0), o, n);
      });
      function iV(t) {
        return t && t.length ? or(t) : [];
      }
      function sV(t, n) {
        return t && t.length ? or(t, G(n, 2)) : [];
      }
      function aV(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? or(t, o, n) : [];
      }
      function Nu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Qn(t, function(i) {
          if (Pe(i))
            return n = ze(i.length, n), !0;
        }), Ql(n, function(i) {
          return xe(t, Kl(i));
        });
      }
      function Xh(t, n) {
        if (!(t && t.length))
          return [];
        var i = Nu(t);
        return n == null ? i : xe(i, function(l) {
          return Bt(n, o, l);
        });
      }
      var lV = re(function(t, n) {
        return Pe(t) ? Ai(t, n) : [];
      }), uV = re(function(t) {
        return $u(Qn(t, Pe));
      }), cV = re(function(t) {
        var n = Xt(t);
        return Pe(n) && (n = o), $u(Qn(t, Pe), G(n, 2));
      }), dV = re(function(t) {
        var n = Xt(t);
        return n = typeof n == "function" ? n : o, $u(Qn(t, Pe), o, n);
      }), fV = re(Nu);
      function hV(t, n) {
        return vh(t || [], n || [], xi);
      }
      function pV(t, n) {
        return vh(t || [], n || [], Li);
      }
      var wV = re(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : o;
        return i = typeof i == "function" ? (t.pop(), i) : o, Xh(t, i);
      });
      function Qh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function vV(t, n) {
        return n(t), t;
      }
      function ha(t, n) {
        return n(t);
      }
      var mV = Mn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return au(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof se) || !Dn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: ha,
          args: [d],
          thisArg: o
        }), new Zt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function _V() {
        return Qh(this);
      }
      function gV() {
        return new Zt(this.value(), this.__chain__);
      }
      function $V() {
        this.__values__ === o && (this.__values__ = hp(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function yV() {
        return this;
      }
      function VV(t) {
        for (var n, i = this; i instanceof Xs; ) {
          var l = Yh(i);
          l.__index__ = 0, l.__values__ = o, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function bV() {
        var t = this.__wrapped__;
        if (t instanceof se) {
          var n = t;
          return this.__actions__.length && (n = new se(this)), n = n.reverse(), n.__actions__.push({
            func: ha,
            args: [Du],
            thisArg: o
          }), new Zt(n, this.__chain__);
        }
        return this.thru(Du);
      }
      function CV() {
        return wh(this.__wrapped__, this.__actions__);
      }
      var SV = ia(function(t, n, i) {
        me.call(t, i) ? ++t[i] : Tn(t, i, 1);
      });
      function kV(t, n, i) {
        var l = X(t) ? If : v$;
        return i && ft(t, n, i) && (n = o), l(t, G(n, 3));
      }
      function EV(t, n) {
        var i = X(t) ? Qn : Xf;
        return i(t, G(n, 3));
      }
      var IV = kh(Gh), xV = kh(jh);
      function AV(t, n) {
        return Xe(pa(t, n), 1);
      }
      function BV(t, n) {
        return Xe(pa(t, n), We);
      }
      function TV(t, n, i) {
        return i = i === o ? 1 : Q(i), Xe(pa(t, n), i);
      }
      function ep(t, n) {
        var i = X(t) ? Gt : rr;
        return i(t, G(n, 3));
      }
      function tp(t, n) {
        var i = X(t) ? J1 : Jf;
        return i(t, G(n, 3));
      }
      var LV = ia(function(t, n, i) {
        me.call(t, i) ? t[i].push(n) : Tn(t, i, [n]);
      });
      function MV(t, n, i, l) {
        t = yt(t) ? t : Bo(t), i = i && !l ? Q(i) : 0;
        var d = t.length;
        return i < 0 && (i = ze(d + i, 0)), ga(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && go(t, n, i) > -1;
      }
      var DV = re(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = yt(t) ? C(t.length) : [];
        return rr(t, function(m) {
          p[++l] = d ? Bt(n, m, i) : Bi(m, n, i);
        }), p;
      }), NV = ia(function(t, n, i) {
        Tn(t, i, n);
      });
      function pa(t, n) {
        var i = X(t) ? xe : oh;
        return i(t, G(n, 3));
      }
      function OV(t, n, i, l) {
        return t == null ? [] : (X(n) || (n = n == null ? [] : [n]), i = l ? o : i, X(i) || (i = i == null ? [] : [i]), lh(t, n, i));
      }
      var PV = ia(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function RV(t, n, i) {
        var l = X(t) ? jl : Tf, d = arguments.length < 3;
        return l(t, G(n, 4), i, d, rr);
      }
      function FV(t, n, i) {
        var l = X(t) ? X1 : Tf, d = arguments.length < 3;
        return l(t, G(n, 4), i, d, Jf);
      }
      function UV(t, n) {
        var i = X(t) ? Qn : Xf;
        return i(t, ma(G(n, 3)));
      }
      function WV(t) {
        var n = X(t) ? Gf : M$;
        return n(t);
      }
      function qV(t, n, i) {
        (i ? ft(t, n, i) : n === o) ? n = 1 : n = Q(n);
        var l = X(t) ? d$ : D$;
        return l(t, n);
      }
      function HV(t) {
        var n = X(t) ? f$ : O$;
        return n(t);
      }
      function zV(t) {
        if (t == null)
          return 0;
        if (yt(t))
          return ga(t) ? yo(t) : t.length;
        var n = st(t);
        return n == _t || n == gt ? t.size : hu(t).length;
      }
      function YV(t, n, i) {
        var l = X(t) ? Zl : P$;
        return i && ft(t, n, i) && (n = o), l(t, G(n, 3));
      }
      var GV = re(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && ft(t, n[0], n[1]) ? n = [] : i > 2 && ft(n[0], n[1], n[2]) && (n = [n[0]]), lh(t, Xe(n, 1), []);
      }), wa = E0 || function() {
        return Je.Date.now();
      };
      function jV(t, n) {
        if (typeof n != "function")
          throw new jt(c);
        return t = Q(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function np(t, n, i) {
        return n = i ? o : n, n = t && n == null ? t.length : n, Ln(t, O, o, o, o, o, n);
      }
      function rp(t, n) {
        var i;
        if (typeof n != "function")
          throw new jt(c);
        return t = Q(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = o), i;
        };
      }
      var Ou = re(function(t, n, i) {
        var l = D;
        if (i.length) {
          var d = tr(i, xo(Ou));
          l |= k;
        }
        return Ln(t, l, n, i, d);
      }), op = re(function(t, n, i) {
        var l = D | S;
        if (i.length) {
          var d = tr(i, xo(op));
          l |= k;
        }
        return Ln(n, l, t, i, d);
      });
      function ip(t, n, i) {
        n = i ? o : n;
        var l = Ln(t, I, o, o, o, o, o, n);
        return l.placeholder = ip.placeholder, l;
      }
      function sp(t, n, i) {
        n = i ? o : n;
        var l = Ln(t, P, o, o, o, o, o, n);
        return l.placeholder = sp.placeholder, l;
      }
      function ap(t, n, i) {
        var l, d, p, m, g, b, A = 0, B = !1, M = !1, F = !0;
        if (typeof t != "function")
          throw new jt(c);
        n = Qt(n) || 0, Be(i) && (B = !!i.leading, M = "maxWait" in i, p = M ? ze(Qt(i.maxWait) || 0, n) : p, F = "trailing" in i ? !!i.trailing : F);
        function H(Re) {
          var cn = l, Pn = d;
          return l = d = o, A = Re, m = t.apply(Pn, cn), m;
        }
        function Z(Re) {
          return A = Re, g = Ni(ie, n), B ? H(Re) : m;
        }
        function te(Re) {
          var cn = Re - b, Pn = Re - A, kp = n - cn;
          return M ? it(kp, p - Pn) : kp;
        }
        function K(Re) {
          var cn = Re - b, Pn = Re - A;
          return b === o || cn >= n || cn < 0 || M && Pn >= p;
        }
        function ie() {
          var Re = wa();
          if (K(Re))
            return le(Re);
          g = Ni(ie, te(Re));
        }
        function le(Re) {
          return g = o, F && l ? H(Re) : (l = d = o, m);
        }
        function Dt() {
          g !== o && mh(g), A = 0, l = b = d = g = o;
        }
        function ht() {
          return g === o ? m : le(wa());
        }
        function Nt() {
          var Re = wa(), cn = K(Re);
          if (l = arguments, d = this, b = Re, cn) {
            if (g === o)
              return Z(b);
            if (M)
              return mh(g), g = Ni(ie, n), H(b);
          }
          return g === o && (g = Ni(ie, n)), m;
        }
        return Nt.cancel = Dt, Nt.flush = ht, Nt;
      }
      var ZV = re(function(t, n) {
        return Kf(t, 1, n);
      }), KV = re(function(t, n, i) {
        return Kf(t, Qt(n) || 0, i);
      });
      function JV(t) {
        return Ln(t, fe);
      }
      function va(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new jt(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return i.cache = p.set(d, m) || p, m;
        };
        return i.cache = new (va.Cache || Bn)(), i;
      }
      va.Cache = Bn;
      function ma(t) {
        if (typeof t != "function")
          throw new jt(c);
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
      function XV(t) {
        return rp(2, t);
      }
      var QV = R$(function(t, n) {
        n = n.length == 1 && X(n[0]) ? xe(n[0], Tt(G())) : xe(Xe(n, 1), Tt(G()));
        var i = n.length;
        return re(function(l) {
          for (var d = -1, p = it(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return Bt(t, this, l);
        });
      }), Pu = re(function(t, n) {
        var i = tr(n, xo(Pu));
        return Ln(t, k, o, n, i);
      }), lp = re(function(t, n) {
        var i = tr(n, xo(lp));
        return Ln(t, R, o, n, i);
      }), eb = Mn(function(t, n) {
        return Ln(t, z, o, o, o, n);
      });
      function tb(t, n) {
        if (typeof t != "function")
          throw new jt(c);
        return n = n === o ? n : Q(n), re(t, n);
      }
      function nb(t, n) {
        if (typeof t != "function")
          throw new jt(c);
        return n = n == null ? 0 : ze(Q(n), 0), re(function(i) {
          var l = i[n], d = sr(i, 0, n);
          return l && er(d, l), Bt(t, this, d);
        });
      }
      function rb(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new jt(c);
        return Be(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), ap(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function ob(t) {
        return np(t, 1);
      }
      function ib(t, n) {
        return Pu(Vu(n), t);
      }
      function sb() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return X(t) ? t : [t];
      }
      function ab(t) {
        return Kt(t, T);
      }
      function lb(t, n) {
        return n = typeof n == "function" ? n : o, Kt(t, T, n);
      }
      function ub(t) {
        return Kt(t, $ | T);
      }
      function cb(t, n) {
        return n = typeof n == "function" ? n : o, Kt(t, $ | T, n);
      }
      function db(t, n) {
        return n == null || Zf(t, n, Ze(n));
      }
      function un(t, n) {
        return t === n || t !== t && n !== n;
      }
      var fb = ua(cu), hb = ua(function(t, n) {
        return t >= n;
      }), Or = th(function() {
        return arguments;
      }()) ? th : function(t) {
        return De(t) && me.call(t, "callee") && !Uf.call(t, "callee");
      }, X = C.isArray, pb = Vf ? Tt(Vf) : V$;
      function yt(t) {
        return t != null && _a(t.length) && !Nn(t);
      }
      function Pe(t) {
        return De(t) && yt(t);
      }
      function wb(t) {
        return t === !0 || t === !1 || De(t) && dt(t) == Gn;
      }
      var ar = x0 || Zu, vb = bf ? Tt(bf) : b$;
      function mb(t) {
        return De(t) && t.nodeType === 1 && !Oi(t);
      }
      function _b(t) {
        if (t == null)
          return !0;
        if (yt(t) && (X(t) || typeof t == "string" || typeof t.splice == "function" || ar(t) || Ao(t) || Or(t)))
          return !t.length;
        var n = st(t);
        if (n == _t || n == gt)
          return !t.size;
        if (Di(t))
          return !hu(t).length;
        for (var i in t)
          if (me.call(t, i))
            return !1;
        return !0;
      }
      function gb(t, n) {
        return Ti(t, n);
      }
      function $b(t, n, i) {
        i = typeof i == "function" ? i : o;
        var l = i ? i(t, n) : o;
        return l === o ? Ti(t, n, o, i) : !!l;
      }
      function Ru(t) {
        if (!De(t))
          return !1;
        var n = dt(t);
        return n == kr || n == ks || typeof t.message == "string" && typeof t.name == "string" && !Oi(t);
      }
      function yb(t) {
        return typeof t == "number" && qf(t);
      }
      function Nn(t) {
        if (!Be(t))
          return !1;
        var n = dt(t);
        return n == Er || n == yi || n == Ss || n == Is;
      }
      function up(t) {
        return typeof t == "number" && t == Q(t);
      }
      function _a(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= je;
      }
      function Be(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function De(t) {
        return t != null && typeof t == "object";
      }
      var cp = Cf ? Tt(Cf) : S$;
      function Vb(t, n) {
        return t === n || fu(t, n, xu(n));
      }
      function bb(t, n, i) {
        return i = typeof i == "function" ? i : o, fu(t, n, xu(n), i);
      }
      function Cb(t) {
        return dp(t) && t != +t;
      }
      function Sb(t) {
        if (ly(t))
          throw new J(u);
        return nh(t);
      }
      function kb(t) {
        return t === null;
      }
      function Eb(t) {
        return t == null;
      }
      function dp(t) {
        return typeof t == "number" || De(t) && dt(t) == Zn;
      }
      function Oi(t) {
        if (!De(t) || dt(t) != zt)
          return !1;
        var n = zs(t);
        if (n === null)
          return !0;
        var i = me.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Us.call(i) == b0;
      }
      var Fu = Sf ? Tt(Sf) : k$;
      function Ib(t) {
        return up(t) && t >= -je && t <= je;
      }
      var fp = kf ? Tt(kf) : E$;
      function ga(t) {
        return typeof t == "string" || !X(t) && De(t) && dt(t) == Jn;
      }
      function Mt(t) {
        return typeof t == "symbol" || De(t) && dt(t) == Ir;
      }
      var Ao = Ef ? Tt(Ef) : I$;
      function xb(t) {
        return t === o;
      }
      function Ab(t) {
        return De(t) && st(t) == Xn;
      }
      function Bb(t) {
        return De(t) && dt(t) == As;
      }
      var Tb = ua(pu), Lb = ua(function(t, n) {
        return t <= n;
      });
      function hp(t) {
        if (!t)
          return [];
        if (yt(t))
          return ga(t) ? an(t) : $t(t);
        if (Ci && t[Ci])
          return d0(t[Ci]());
        var n = st(t), i = n == _t ? tu : n == gt ? Ps : Bo;
        return i(t);
      }
      function On(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Qt(t), t === We || t === -We) {
          var n = t < 0 ? -1 : 1;
          return n * gn;
        }
        return t === t ? t : 0;
      }
      function Q(t) {
        var n = On(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function pp(t) {
        return t ? Lr(Q(t), 0, ot) : 0;
      }
      function Qt(t) {
        if (typeof t == "number")
          return t;
        if (Mt(t))
          return lo;
        if (Be(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Be(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Lf(t);
        var i = p1.test(t);
        return i || v1.test(t) ? j1(t.slice(2), i ? 2 : 8) : h1.test(t) ? lo : +t;
      }
      function wp(t) {
        return yn(t, Vt(t));
      }
      function Mb(t) {
        return t ? Lr(Q(t), -je, je) : t === 0 ? t : 0;
      }
      function ve(t) {
        return t == null ? "" : Lt(t);
      }
      var Db = Eo(function(t, n) {
        if (Di(n) || yt(n)) {
          yn(n, Ze(n), t);
          return;
        }
        for (var i in n)
          me.call(n, i) && xi(t, i, n[i]);
      }), vp = Eo(function(t, n) {
        yn(n, Vt(n), t);
      }), $a = Eo(function(t, n, i, l) {
        yn(n, Vt(n), t, l);
      }), Nb = Eo(function(t, n, i, l) {
        yn(n, Ze(n), t, l);
      }), Ob = Mn(au);
      function Pb(t, n) {
        var i = ko(t);
        return n == null ? i : jf(i, n);
      }
      var Rb = re(function(t, n) {
        t = ye(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : o;
        for (d && ft(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], m = Vt(p), g = -1, b = m.length; ++g < b; ) {
            var A = m[g], B = t[A];
            (B === o || un(B, bo[A]) && !me.call(t, A)) && (t[A] = p[A]);
          }
        return t;
      }), Fb = re(function(t) {
        return t.push(o, Lh), Bt(mp, o, t);
      });
      function Ub(t, n) {
        return xf(t, G(n, 3), $n);
      }
      function Wb(t, n) {
        return xf(t, G(n, 3), uu);
      }
      function qb(t, n) {
        return t == null ? t : lu(t, G(n, 3), Vt);
      }
      function Hb(t, n) {
        return t == null ? t : Qf(t, G(n, 3), Vt);
      }
      function zb(t, n) {
        return t && $n(t, G(n, 3));
      }
      function Yb(t, n) {
        return t && uu(t, G(n, 3));
      }
      function Gb(t) {
        return t == null ? [] : ta(t, Ze(t));
      }
      function jb(t) {
        return t == null ? [] : ta(t, Vt(t));
      }
      function Uu(t, n, i) {
        var l = t == null ? o : Mr(t, n);
        return l === o ? i : l;
      }
      function Zb(t, n) {
        return t != null && Nh(t, n, _$);
      }
      function Wu(t, n) {
        return t != null && Nh(t, n, g$);
      }
      var Kb = Ih(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Ws.call(n)), t[n] = i;
      }, Hu(bt)), Jb = Ih(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Ws.call(n)), me.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, G), Xb = re(Bi);
      function Ze(t) {
        return yt(t) ? Yf(t) : hu(t);
      }
      function Vt(t) {
        return yt(t) ? Yf(t, !0) : x$(t);
      }
      function Qb(t, n) {
        var i = {};
        return n = G(n, 3), $n(t, function(l, d, p) {
          Tn(i, n(l, d, p), l);
        }), i;
      }
      function eC(t, n) {
        var i = {};
        return n = G(n, 3), $n(t, function(l, d, p) {
          Tn(i, d, n(l, d, p));
        }), i;
      }
      var tC = Eo(function(t, n, i) {
        na(t, n, i);
      }), mp = Eo(function(t, n, i, l) {
        na(t, n, i, l);
      }), nC = Mn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = xe(n, function(p) {
          return p = ir(p, t), l || (l = p.length > 1), p;
        }), yn(t, Eu(t), i), l && (i = Kt(i, $ | y | T, K$));
        for (var d = n.length; d--; )
          gu(i, n[d]);
        return i;
      });
      function rC(t, n) {
        return _p(t, ma(G(n)));
      }
      var oC = Mn(function(t, n) {
        return t == null ? {} : B$(t, n);
      });
      function _p(t, n) {
        if (t == null)
          return {};
        var i = xe(Eu(t), function(l) {
          return [l];
        });
        return n = G(n), uh(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function iC(t, n, i) {
        n = ir(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = o); ++l < d; ) {
          var p = t == null ? o : t[Vn(n[l])];
          p === o && (l = d, p = i), t = Nn(p) ? p.call(t) : p;
        }
        return t;
      }
      function sC(t, n, i) {
        return t == null ? t : Li(t, n, i);
      }
      function aC(t, n, i, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Li(t, n, i, l);
      }
      var gp = Bh(Ze), $p = Bh(Vt);
      function lC(t, n, i) {
        var l = X(t), d = l || ar(t) || Ao(t);
        if (n = G(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : Be(t) ? i = Nn(p) ? ko(zs(t)) : {} : i = {};
        }
        return (d ? Gt : $n)(t, function(m, g, b) {
          return n(i, m, g, b);
        }), i;
      }
      function uC(t, n) {
        return t == null ? !0 : gu(t, n);
      }
      function cC(t, n, i) {
        return t == null ? t : ph(t, n, Vu(i));
      }
      function dC(t, n, i, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : ph(t, n, Vu(i), l);
      }
      function Bo(t) {
        return t == null ? [] : eu(t, Ze(t));
      }
      function fC(t) {
        return t == null ? [] : eu(t, Vt(t));
      }
      function hC(t, n, i) {
        return i === o && (i = n, n = o), i !== o && (i = Qt(i), i = i === i ? i : 0), n !== o && (n = Qt(n), n = n === n ? n : 0), Lr(Qt(t), n, i);
      }
      function pC(t, n, i) {
        return n = On(n), i === o ? (i = n, n = 0) : i = On(i), t = Qt(t), $$(t, n, i);
      }
      function wC(t, n, i) {
        if (i && typeof i != "boolean" && ft(t, n, i) && (n = i = o), i === o && (typeof n == "boolean" ? (i = n, n = o) : typeof t == "boolean" && (i = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = On(t), n === o ? (n = t, t = 0) : n = On(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Hf();
          return it(t + d * (n - t + G1("1e-" + ((d + "").length - 1))), n);
        }
        return vu(t, n);
      }
      var vC = Io(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? yp(n) : n);
      });
      function yp(t) {
        return qu(ve(t).toLowerCase());
      }
      function Vp(t) {
        return t = ve(t), t && t.replace(_1, s0).replace(O1, "");
      }
      function mC(t, n, i) {
        t = ve(t), n = Lt(n);
        var l = t.length;
        i = i === o ? l : Lr(Q(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function _C(t) {
        return t = ve(t), t && Xg.test(t) ? t.replace(Xd, a0) : t;
      }
      function gC(t) {
        return t = ve(t), t && o1.test(t) ? t.replace(Pl, "\\$&") : t;
      }
      var $C = Io(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), yC = Io(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), VC = Sh("toLowerCase");
      function bC(t, n, i) {
        t = ve(t), n = Q(n);
        var l = n ? yo(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return la(Zs(d), i) + t + la(js(d), i);
      }
      function CC(t, n, i) {
        t = ve(t), n = Q(n);
        var l = n ? yo(t) : 0;
        return n && l < n ? t + la(n - l, i) : t;
      }
      function SC(t, n, i) {
        t = ve(t), n = Q(n);
        var l = n ? yo(t) : 0;
        return n && l < n ? la(n - l, i) + t : t;
      }
      function kC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), L0(ve(t).replace(Rl, ""), n || 0);
      }
      function EC(t, n, i) {
        return (i ? ft(t, n, i) : n === o) ? n = 1 : n = Q(n), mu(ve(t), n);
      }
      function IC() {
        var t = arguments, n = ve(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var xC = Io(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function AC(t, n, i) {
        return i && typeof i != "number" && ft(t, n, i) && (n = i = o), i = i === o ? ot : i >>> 0, i ? (t = ve(t), t && (typeof n == "string" || n != null && !Fu(n)) && (n = Lt(n), !n && $o(t)) ? sr(an(t), 0, i) : t.split(n, i)) : [];
      }
      var BC = Io(function(t, n, i) {
        return t + (i ? " " : "") + qu(n);
      });
      function TC(t, n, i) {
        return t = ve(t), i = i == null ? 0 : Lr(Q(i), 0, t.length), n = Lt(n), t.slice(i, i + n.length) == n;
      }
      function LC(t, n, i) {
        var l = h.templateSettings;
        i && ft(t, n, i) && (n = o), t = ve(t), n = $a({}, n, l, Th);
        var d = $a({}, n.imports, l.imports, Th), p = Ze(d), m = eu(d, p), g, b, A = 0, B = n.interpolate || Ls, M = "__p += '", F = nu(
          (n.escape || Ls).source + "|" + B.source + "|" + (B === Qd ? f1 : Ls).source + "|" + (n.evaluate || Ls).source + "|$",
          "g"
        ), H = "//# sourceURL=" + (me.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++W1 + "]") + `
`;
        t.replace(F, function(K, ie, le, Dt, ht, Nt) {
          return le || (le = Dt), M += t.slice(A, Nt).replace(g1, l0), ie && (g = !0, M += `' +
__e(` + ie + `) +
'`), ht && (b = !0, M += `';
` + ht + `;
__p += '`), le && (M += `' +
((__t = (` + le + `)) == null ? '' : __t) +
'`), A = Nt + K.length, K;
        }), M += `';
`;
        var Z = me.call(n, "variable") && n.variable;
        if (!Z)
          M = `with (obj) {
` + M + `
}
`;
        else if (c1.test(Z))
          throw new J(f);
        M = (b ? M.replace(Bs, "") : M).replace(Ts, "$1").replace(Kg, "$1;"), M = "function(" + (Z || "obj") + `) {
` + (Z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + M + `return __p
}`;
        var te = Cp(function() {
          return pe(p, H + "return " + M).apply(o, m);
        });
        if (te.source = M, Ru(te))
          throw te;
        return te;
      }
      function MC(t) {
        return ve(t).toLowerCase();
      }
      function DC(t) {
        return ve(t).toUpperCase();
      }
      function NC(t, n, i) {
        if (t = ve(t), t && (i || n === o))
          return Lf(t);
        if (!t || !(n = Lt(n)))
          return t;
        var l = an(t), d = an(n), p = Mf(l, d), m = Df(l, d) + 1;
        return sr(l, p, m).join("");
      }
      function OC(t, n, i) {
        if (t = ve(t), t && (i || n === o))
          return t.slice(0, Of(t) + 1);
        if (!t || !(n = Lt(n)))
          return t;
        var l = an(t), d = Df(l, an(n)) + 1;
        return sr(l, 0, d).join("");
      }
      function PC(t, n, i) {
        if (t = ve(t), t && (i || n === o))
          return t.replace(Rl, "");
        if (!t || !(n = Lt(n)))
          return t;
        var l = an(t), d = Mf(l, an(n));
        return sr(l, d).join("");
      }
      function RC(t, n) {
        var i = he, l = $e;
        if (Be(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? Q(n.length) : i, l = "omission" in n ? Lt(n.omission) : l;
        }
        t = ve(t);
        var p = t.length;
        if ($o(t)) {
          var m = an(t);
          p = m.length;
        }
        if (i >= p)
          return t;
        var g = i - yo(l);
        if (g < 1)
          return l;
        var b = m ? sr(m, 0, g).join("") : t.slice(0, g);
        if (d === o)
          return b + l;
        if (m && (g += b.length - g), Fu(d)) {
          if (t.slice(g).search(d)) {
            var A, B = b;
            for (d.global || (d = nu(d.source, ve(ef.exec(d)) + "g")), d.lastIndex = 0; A = d.exec(B); )
              var M = A.index;
            b = b.slice(0, M === o ? g : M);
          }
        } else if (t.indexOf(Lt(d), g) != g) {
          var F = b.lastIndexOf(d);
          F > -1 && (b = b.slice(0, F));
        }
        return b + l;
      }
      function FC(t) {
        return t = ve(t), t && Jg.test(t) ? t.replace(Jd, w0) : t;
      }
      var UC = Io(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), qu = Sh("toUpperCase");
      function bp(t, n, i) {
        return t = ve(t), n = i ? o : n, n === o ? c0(t) ? _0(t) : t0(t) : t.match(n) || [];
      }
      var Cp = re(function(t, n) {
        try {
          return Bt(t, o, n);
        } catch (i) {
          return Ru(i) ? i : new J(i);
        }
      }), WC = Mn(function(t, n) {
        return Gt(n, function(i) {
          i = Vn(i), Tn(t, i, Ou(t[i], t));
        }), t;
      });
      function qC(t) {
        var n = t == null ? 0 : t.length, i = G();
        return t = n ? xe(t, function(l) {
          if (typeof l[1] != "function")
            throw new jt(c);
          return [i(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (Bt(p[0], this, l))
              return Bt(p[1], this, l);
          }
        });
      }
      function HC(t) {
        return w$(Kt(t, $));
      }
      function Hu(t) {
        return function() {
          return t;
        };
      }
      function zC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var YC = Eh(), GC = Eh(!0);
      function bt(t) {
        return t;
      }
      function zu(t) {
        return rh(typeof t == "function" ? t : Kt(t, $));
      }
      function jC(t) {
        return ih(Kt(t, $));
      }
      function ZC(t, n) {
        return sh(t, Kt(n, $));
      }
      var KC = re(function(t, n) {
        return function(i) {
          return Bi(i, t, n);
        };
      }), JC = re(function(t, n) {
        return function(i) {
          return Bi(t, i, n);
        };
      });
      function Yu(t, n, i) {
        var l = Ze(n), d = ta(n, l);
        i == null && !(Be(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = ta(n, Ze(n)));
        var p = !(Be(i) && "chain" in i) || !!i.chain, m = Nn(t);
        return Gt(d, function(g) {
          var b = n[g];
          t[g] = b, m && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (p || A) {
              var B = t(this.__wrapped__), M = B.__actions__ = $t(this.__actions__);
              return M.push({ func: b, args: arguments, thisArg: t }), B.__chain__ = A, B;
            }
            return b.apply(t, er([this.value()], arguments));
          });
        }), t;
      }
      function XC() {
        return Je._ === this && (Je._ = C0), this;
      }
      function Gu() {
      }
      function QC(t) {
        return t = Q(t), re(function(n) {
          return ah(n, t);
        });
      }
      var eS = Cu(xe), tS = Cu(If), nS = Cu(Zl);
      function Sp(t) {
        return Bu(t) ? Kl(Vn(t)) : T$(t);
      }
      function rS(t) {
        return function(n) {
          return t == null ? o : Mr(t, n);
        };
      }
      var oS = xh(), iS = xh(!0);
      function ju() {
        return [];
      }
      function Zu() {
        return !1;
      }
      function sS() {
        return {};
      }
      function aS() {
        return "";
      }
      function lS() {
        return !0;
      }
      function uS(t, n) {
        if (t = Q(t), t < 1 || t > je)
          return [];
        var i = ot, l = it(t, ot);
        n = G(n), t -= ot;
        for (var d = Ql(l, n); ++i < t; )
          n(i);
        return d;
      }
      function cS(t) {
        return X(t) ? xe(t, Vn) : Mt(t) ? [t] : $t(zh(ve(t)));
      }
      function dS(t) {
        var n = ++V0;
        return ve(t) + n;
      }
      var fS = aa(function(t, n) {
        return t + n;
      }, 0), hS = Su("ceil"), pS = aa(function(t, n) {
        return t / n;
      }, 1), wS = Su("floor");
      function vS(t) {
        return t && t.length ? ea(t, bt, cu) : o;
      }
      function mS(t, n) {
        return t && t.length ? ea(t, G(n, 2), cu) : o;
      }
      function _S(t) {
        return Bf(t, bt);
      }
      function gS(t, n) {
        return Bf(t, G(n, 2));
      }
      function $S(t) {
        return t && t.length ? ea(t, bt, pu) : o;
      }
      function yS(t, n) {
        return t && t.length ? ea(t, G(n, 2), pu) : o;
      }
      var VS = aa(function(t, n) {
        return t * n;
      }, 1), bS = Su("round"), CS = aa(function(t, n) {
        return t - n;
      }, 0);
      function SS(t) {
        return t && t.length ? Xl(t, bt) : 0;
      }
      function kS(t, n) {
        return t && t.length ? Xl(t, G(n, 2)) : 0;
      }
      return h.after = jV, h.ary = np, h.assign = Db, h.assignIn = vp, h.assignInWith = $a, h.assignWith = Nb, h.at = Ob, h.before = rp, h.bind = Ou, h.bindAll = WC, h.bindKey = op, h.castArray = sb, h.chain = Qh, h.chunk = wy, h.compact = vy, h.concat = my, h.cond = qC, h.conforms = HC, h.constant = Hu, h.countBy = SV, h.create = Pb, h.curry = ip, h.curryRight = sp, h.debounce = ap, h.defaults = Rb, h.defaultsDeep = Fb, h.defer = ZV, h.delay = KV, h.difference = _y, h.differenceBy = gy, h.differenceWith = $y, h.drop = yy, h.dropRight = Vy, h.dropRightWhile = by, h.dropWhile = Cy, h.fill = Sy, h.filter = EV, h.flatMap = AV, h.flatMapDeep = BV, h.flatMapDepth = TV, h.flatten = Zh, h.flattenDeep = ky, h.flattenDepth = Ey, h.flip = JV, h.flow = YC, h.flowRight = GC, h.fromPairs = Iy, h.functions = Gb, h.functionsIn = jb, h.groupBy = LV, h.initial = Ay, h.intersection = By, h.intersectionBy = Ty, h.intersectionWith = Ly, h.invert = Kb, h.invertBy = Jb, h.invokeMap = DV, h.iteratee = zu, h.keyBy = NV, h.keys = Ze, h.keysIn = Vt, h.map = pa, h.mapKeys = Qb, h.mapValues = eC, h.matches = jC, h.matchesProperty = ZC, h.memoize = va, h.merge = tC, h.mergeWith = mp, h.method = KC, h.methodOf = JC, h.mixin = Yu, h.negate = ma, h.nthArg = QC, h.omit = nC, h.omitBy = rC, h.once = XV, h.orderBy = OV, h.over = eS, h.overArgs = QV, h.overEvery = tS, h.overSome = nS, h.partial = Pu, h.partialRight = lp, h.partition = PV, h.pick = oC, h.pickBy = _p, h.property = Sp, h.propertyOf = rS, h.pull = Oy, h.pullAll = Jh, h.pullAllBy = Py, h.pullAllWith = Ry, h.pullAt = Fy, h.range = oS, h.rangeRight = iS, h.rearg = eb, h.reject = UV, h.remove = Uy, h.rest = tb, h.reverse = Du, h.sampleSize = qV, h.set = sC, h.setWith = aC, h.shuffle = HV, h.slice = Wy, h.sortBy = GV, h.sortedUniq = Zy, h.sortedUniqBy = Ky, h.split = AC, h.spread = nb, h.tail = Jy, h.take = Xy, h.takeRight = Qy, h.takeRightWhile = eV, h.takeWhile = tV, h.tap = vV, h.throttle = rb, h.thru = ha, h.toArray = hp, h.toPairs = gp, h.toPairsIn = $p, h.toPath = cS, h.toPlainObject = wp, h.transform = lC, h.unary = ob, h.union = nV, h.unionBy = rV, h.unionWith = oV, h.uniq = iV, h.uniqBy = sV, h.uniqWith = aV, h.unset = uC, h.unzip = Nu, h.unzipWith = Xh, h.update = cC, h.updateWith = dC, h.values = Bo, h.valuesIn = fC, h.without = lV, h.words = bp, h.wrap = ib, h.xor = uV, h.xorBy = cV, h.xorWith = dV, h.zip = fV, h.zipObject = hV, h.zipObjectDeep = pV, h.zipWith = wV, h.entries = gp, h.entriesIn = $p, h.extend = vp, h.extendWith = $a, Yu(h, h), h.add = fS, h.attempt = Cp, h.camelCase = vC, h.capitalize = yp, h.ceil = hS, h.clamp = hC, h.clone = ab, h.cloneDeep = ub, h.cloneDeepWith = cb, h.cloneWith = lb, h.conformsTo = db, h.deburr = Vp, h.defaultTo = zC, h.divide = pS, h.endsWith = mC, h.eq = un, h.escape = _C, h.escapeRegExp = gC, h.every = kV, h.find = IV, h.findIndex = Gh, h.findKey = Ub, h.findLast = xV, h.findLastIndex = jh, h.findLastKey = Wb, h.floor = wS, h.forEach = ep, h.forEachRight = tp, h.forIn = qb, h.forInRight = Hb, h.forOwn = zb, h.forOwnRight = Yb, h.get = Uu, h.gt = fb, h.gte = hb, h.has = Zb, h.hasIn = Wu, h.head = Kh, h.identity = bt, h.includes = MV, h.indexOf = xy, h.inRange = pC, h.invoke = Xb, h.isArguments = Or, h.isArray = X, h.isArrayBuffer = pb, h.isArrayLike = yt, h.isArrayLikeObject = Pe, h.isBoolean = wb, h.isBuffer = ar, h.isDate = vb, h.isElement = mb, h.isEmpty = _b, h.isEqual = gb, h.isEqualWith = $b, h.isError = Ru, h.isFinite = yb, h.isFunction = Nn, h.isInteger = up, h.isLength = _a, h.isMap = cp, h.isMatch = Vb, h.isMatchWith = bb, h.isNaN = Cb, h.isNative = Sb, h.isNil = Eb, h.isNull = kb, h.isNumber = dp, h.isObject = Be, h.isObjectLike = De, h.isPlainObject = Oi, h.isRegExp = Fu, h.isSafeInteger = Ib, h.isSet = fp, h.isString = ga, h.isSymbol = Mt, h.isTypedArray = Ao, h.isUndefined = xb, h.isWeakMap = Ab, h.isWeakSet = Bb, h.join = My, h.kebabCase = $C, h.last = Xt, h.lastIndexOf = Dy, h.lowerCase = yC, h.lowerFirst = VC, h.lt = Tb, h.lte = Lb, h.max = vS, h.maxBy = mS, h.mean = _S, h.meanBy = gS, h.min = $S, h.minBy = yS, h.stubArray = ju, h.stubFalse = Zu, h.stubObject = sS, h.stubString = aS, h.stubTrue = lS, h.multiply = VS, h.nth = Ny, h.noConflict = XC, h.noop = Gu, h.now = wa, h.pad = bC, h.padEnd = CC, h.padStart = SC, h.parseInt = kC, h.random = wC, h.reduce = RV, h.reduceRight = FV, h.repeat = EC, h.replace = IC, h.result = iC, h.round = bS, h.runInContext = V, h.sample = WV, h.size = zV, h.snakeCase = xC, h.some = YV, h.sortedIndex = qy, h.sortedIndexBy = Hy, h.sortedIndexOf = zy, h.sortedLastIndex = Yy, h.sortedLastIndexBy = Gy, h.sortedLastIndexOf = jy, h.startCase = BC, h.startsWith = TC, h.subtract = CS, h.sum = SS, h.sumBy = kS, h.template = LC, h.times = uS, h.toFinite = On, h.toInteger = Q, h.toLength = pp, h.toLower = MC, h.toNumber = Qt, h.toSafeInteger = Mb, h.toString = ve, h.toUpper = DC, h.trim = NC, h.trimEnd = OC, h.trimStart = PC, h.truncate = RC, h.unescape = FC, h.uniqueId = dS, h.upperCase = UC, h.upperFirst = qu, h.each = ep, h.eachRight = tp, h.first = Kh, Yu(h, function() {
        var t = {};
        return $n(h, function(n, i) {
          me.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Gt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Gt(["drop", "take"], function(t, n) {
        se.prototype[t] = function(i) {
          i = i === o ? 1 : ze(Q(i), 0);
          var l = this.__filtered__ && !n ? new se(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = it(i, l.__takeCount__) : l.__views__.push({
            size: it(i, ot),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, se.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Gt(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Se || i == Me;
        se.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: G(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Gt(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        se.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Gt(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        se.prototype[t] = function() {
          return this.__filtered__ ? new se(this) : this[i](1);
        };
      }), se.prototype.compact = function() {
        return this.filter(bt);
      }, se.prototype.find = function(t) {
        return this.filter(t).head();
      }, se.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, se.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new se(this) : this.map(function(i) {
          return Bi(i, t, n);
        });
      }), se.prototype.reject = function(t) {
        return this.filter(ma(G(t)));
      }, se.prototype.slice = function(t, n) {
        t = Q(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new se(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== o && (n = Q(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, se.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, se.prototype.toArray = function() {
        return this.take(ot);
      }, $n(se.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, b = m instanceof se, A = g[0], B = b || X(m), M = function(ie) {
            var le = d.apply(h, er([ie], g));
            return l && F ? le[0] : le;
          };
          B && i && typeof A == "function" && A.length != 1 && (b = B = !1);
          var F = this.__chain__, H = !!this.__actions__.length, Z = p && !F, te = b && !H;
          if (!p && B) {
            m = te ? m : new se(this);
            var K = t.apply(m, g);
            return K.__actions__.push({ func: ha, args: [M], thisArg: o }), new Zt(K, F);
          }
          return Z && te ? t.apply(this, g) : (K = this.thru(M), Z ? l ? K.value()[0] : K.value() : K);
        });
      }), Gt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Rs[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(X(p) ? p : [], d);
          }
          return this[i](function(m) {
            return n.apply(X(m) ? m : [], d);
          });
        };
      }), $n(se.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          me.call(So, l) || (So[l] = []), So[l].push({ name: n, func: i });
        }
      }), So[sa(o, S).name] = [{
        name: "wrapper",
        func: o
      }], se.prototype.clone = F0, se.prototype.reverse = U0, se.prototype.value = W0, h.prototype.at = mV, h.prototype.chain = _V, h.prototype.commit = gV, h.prototype.next = $V, h.prototype.plant = VV, h.prototype.reverse = bV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = CV, h.prototype.first = h.prototype.head, Ci && (h.prototype[Ci] = yV), h;
    }, Vo = g0();
    xr ? ((xr.exports = Vo)._ = Vo, zl._ = Vo) : Je._ = Vo;
  }).call(Pi);
})(ge, ge.exports);
const Y2 = "/alarms?_s=", vl = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, G2 = async (e, r) => {
  try {
    return (await rt.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      vl
    )).status === 204;
  } catch {
    return !1;
  }
}, i_ = async (e, r) => {
  try {
    return (await rt.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      vl
    )).status === 204;
  } catch {
    return !1;
  }
}, j2 = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await zn.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      vl
    )).status == 204;
  } catch {
    return !1;
  }
}, Z2 = async () => {
  try {
    const e = `${Y2}isSituation==true&limit=0`, r = await zn(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, K2 = async (e) => {
  try {
    const r = e.join(",id=="), o = await zn(`/alarms?_s=id==${r}&limit==0`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, s_ = async (e) => {
  try {
    const r = await zn(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, J2 = async (e) => {
  try {
    const r = await zn(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, X2 = async () => {
  try {
    const e = await zn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => ge.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Q2 = async (e, r, o) => {
  try {
    return (await zn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      vl
    )).status == 204;
  } catch {
    return !1;
  }
}, ek = async (e, r) => {
  try {
    return (await zn.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, tk = async () => {
  try {
    const e = await zn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, nk = window.Pinia.defineStore, _n = nk("situationsStore", {
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
      const e = await X2();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Z2();
      if (e) {
        const r = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = r.map((u) => u.id);
        const o = ge.exports.groupBy(r, "status"), a = [
          ...r.filter(
            (u) => u.status !== "REJECTED" && u.status !== "ACCEPTED"
          ),
          ...o.ACCEPTED || []
        ];
        this.situations = a;
      } else
        this.situations = [];
    },
    async getSituation(e) {
      var r, o;
      if (e) {
        const s = await s_(e);
        if (s) {
          const a = (r = s.relatedAlarms) == null ? void 0 : r.map((f) => f.id), c = await K2(a);
          s.status = (o = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : o.value, s.alarms = ge.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, r) {
      const o = {};
      await Promise.all(
        r.map(async (s) => {
          const a = await J2(s);
          a && (o[s] = ge.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await tk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), rk = window.Vue.openBlock, ok = window.Vue.createElementBlock, ik = window.Vue.createElementVNode;
var sk = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ak = {}, lk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uk = /* @__PURE__ */ ik("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), ck = [
  uk
];
function dk(e, r) {
  return rk(), ok("svg", lk, ck);
}
var ii = /* @__PURE__ */ sk(ak, [["render", dk]]);
var fk = Object.defineProperty, Kp = Object.getOwnPropertySymbols, hk = Object.prototype.hasOwnProperty, pk = Object.prototype.propertyIsEnumerable, Jp = (e, r, o) => r in e ? fk(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Xp = (e, r) => {
  for (var o in r || (r = {}))
    hk.call(r, o) && Jp(e, o, r[o]);
  if (Kp)
    for (var o of Kp(r))
      pk.call(r, o) && Jp(e, o, r[o]);
  return e;
};
const wk = window.Vue.defineComponent, vk = window.Vue.toRaw, dc = window.Vue.h;
var mk = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const _k = {
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
}, gk = wk({
  props: _k,
  render() {
    const e = this.$attrs, r = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, o = {};
    r["feather-icon"] = !0, this.flex && (r["feather-icon-flex"] = !0), this.title ? (o["aria-label"] = this.title, o["aria-hidden"] = "false") : o["aria-hidden"] = "true", o.focusable = "false", o.role = "img";
    let s = vk(this.icon);
    return this.$slots.default ? dc("span", { class: "feather-icon-container" }, [
      dc(this.$slots.default()[0], Xp({
        class: r
      }, o))
    ]) : dc(s, Xp({
      class: r
    }, o));
  }
});
var j = /* @__PURE__ */ mk(gk, [["__scopeId", "data-v-52cbf270"]]);
const $k = window.Vue.openBlock, yk = window.Vue.createElementBlock, Vk = window.Vue.createElementVNode;
var bk = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Ck = {}, Sk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kk = /* @__PURE__ */ Vk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Ek = [
  kk
];
function Ik(e, r) {
  return $k(), yk("svg", Sk, Ek);
}
var a_ = /* @__PURE__ */ bk(Ck, [["render", Ik]]);
const tt = {
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
function En(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var r = Number(e);
  return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
}
function be(e, r) {
  if (r.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + r.length + " present");
}
function Ge(e) {
  be(1, arguments);
  var r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || r === "[object Number]" ? new Date(e) : ((typeof e == "string" || r === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function xk(e, r) {
  be(2, arguments);
  var o = Ge(e), s = En(r);
  return isNaN(s) ? new Date(NaN) : (s && o.setDate(o.getDate() + s), o);
}
function Ak(e, r) {
  be(2, arguments);
  var o = Ge(e).getTime(), s = En(r);
  return new Date(o + s);
}
var Bk = {};
function li() {
  return Bk;
}
function Qp(e, r) {
  var o, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = li(), $ = En((o = (s = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ge(e), T = y.getDay(), L = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - L), y.setHours(0, 0, 0, 0), y;
}
function sd(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function ew(e) {
  be(1, arguments);
  var r = Ge(e);
  return r.setHours(0, 0, 0, 0), r;
}
function Tk(e, r) {
  be(2, arguments);
  var o = Ge(e), s = Ge(r), a = o.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function l_(e, r) {
  be(2, arguments);
  var o = ew(e), s = ew(r);
  return o.getTime() === s.getTime();
}
function Lk(e) {
  return be(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Mk(e) {
  if (be(1, arguments), !Lk(e) && typeof e != "number")
    return !1;
  var r = Ge(e);
  return !isNaN(Number(r));
}
function Dk(e, r) {
  be(2, arguments);
  var o = En(r);
  return Ak(e, -o);
}
var Nk = 864e5;
function Ok(e) {
  be(1, arguments);
  var r = Ge(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var s = r.getTime(), a = o - s;
  return Math.floor(a / Nk) + 1;
}
function tl(e) {
  be(1, arguments);
  var r = 1, o = Ge(e), s = o.getUTCDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setUTCDate(o.getUTCDate() - a), o.setUTCHours(0, 0, 0, 0), o;
}
function u_(e) {
  be(1, arguments);
  var r = Ge(e), o = r.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(o + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = tl(s), u = new Date(0);
  u.setUTCFullYear(o, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = tl(u);
  return r.getTime() >= a.getTime() ? o + 1 : r.getTime() >= c.getTime() ? o : o - 1;
}
function Pk(e) {
  be(1, arguments);
  var r = u_(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var s = tl(o);
  return s;
}
var Rk = 6048e5;
function Fk(e) {
  be(1, arguments);
  var r = Ge(e), o = tl(r).getTime() - Pk(r).getTime();
  return Math.round(o / Rk) + 1;
}
function nl(e, r) {
  var o, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = li(), $ = En((o = (s = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ge(e), T = y.getUTCDay(), L = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - L), y.setUTCHours(0, 0, 0, 0), y;
}
function c_(e, r) {
  var o, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = Ge(e), $ = _.getUTCFullYear(), y = li(), T = En((o = (s = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var L = new Date(0);
  L.setUTCFullYear($ + 1, 0, T), L.setUTCHours(0, 0, 0, 0);
  var N = nl(L, r), D = new Date(0);
  D.setUTCFullYear($, 0, T), D.setUTCHours(0, 0, 0, 0);
  var S = nl(D, r);
  return _.getTime() >= N.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function Uk(e, r) {
  var o, s, a, u, c, f, w, v;
  be(1, arguments);
  var _ = li(), $ = En((o = (s = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), y = c_(e, r), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var L = nl(T, r);
  return L;
}
var Wk = 6048e5;
function qk(e, r) {
  be(1, arguments);
  var o = Ge(e), s = nl(o, r).getTime() - Uk(o, r).getTime();
  return Math.round(s / Wk) + 1;
}
function _e(e, r) {
  for (var o = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < r; )
    s = "0" + s;
  return o + s;
}
var Hk = {
  y: function(e, r) {
    var o = e.getUTCFullYear(), s = o > 0 ? o : 1 - o;
    return _e(r === "yy" ? s % 100 : s, r.length);
  },
  M: function(e, r) {
    var o = e.getUTCMonth();
    return r === "M" ? String(o + 1) : _e(o + 1, 2);
  },
  d: function(e, r) {
    return _e(e.getUTCDate(), r.length);
  },
  a: function(e, r) {
    var o = e.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return o.toUpperCase();
      case "aaa":
        return o;
      case "aaaaa":
        return o[0];
      case "aaaa":
      default:
        return o === "am" ? "a.m." : "p.m.";
    }
  },
  h: function(e, r) {
    return _e(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function(e, r) {
    return _e(e.getUTCHours(), r.length);
  },
  m: function(e, r) {
    return _e(e.getUTCMinutes(), r.length);
  },
  s: function(e, r) {
    return _e(e.getUTCSeconds(), r.length);
  },
  S: function(e, r) {
    var o = r.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, o - 3));
    return _e(a, r.length);
  }
};
const lr = Hk;
var Mo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zk = {
  G: function(e, r, o) {
    var s = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(s, {
          width: "abbreviated"
        });
      case "GGGGG":
        return o.era(s, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return o.era(s, {
          width: "wide"
        });
    }
  },
  y: function(e, r, o) {
    if (r === "yo") {
      var s = e.getUTCFullYear(), a = s > 0 ? s : 1 - s;
      return o.ordinalNumber(a, {
        unit: "year"
      });
    }
    return lr.y(e, r);
  },
  Y: function(e, r, o, s) {
    var a = c_(e, s), u = a > 0 ? a : 1 - a;
    if (r === "YY") {
      var c = u % 100;
      return _e(c, 2);
    }
    return r === "Yo" ? o.ordinalNumber(u, {
      unit: "year"
    }) : _e(u, r.length);
  },
  R: function(e, r) {
    var o = u_(e);
    return _e(o, r.length);
  },
  u: function(e, r) {
    var o = e.getUTCFullYear();
    return _e(o, r.length);
  },
  Q: function(e, r, o) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(s);
      case "QQ":
        return _e(s, 2);
      case "Qo":
        return o.ordinalNumber(s, {
          unit: "quarter"
        });
      case "QQQ":
        return o.quarter(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(s, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, r, o) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(s);
      case "qq":
        return _e(s, 2);
      case "qo":
        return o.ordinalNumber(s, {
          unit: "quarter"
        });
      case "qqq":
        return o.quarter(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(s, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, r, o) {
    var s = e.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return lr.M(e, r);
      case "Mo":
        return o.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "MMM":
        return o.month(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return o.month(s, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, r, o) {
    var s = e.getUTCMonth();
    switch (r) {
      case "L":
        return String(s + 1);
      case "LL":
        return _e(s + 1, 2);
      case "Lo":
        return o.ordinalNumber(s + 1, {
          unit: "month"
        });
      case "LLL":
        return o.month(s, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return o.month(s, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(s, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, r, o, s) {
    var a = qk(e, s);
    return r === "wo" ? o.ordinalNumber(a, {
      unit: "week"
    }) : _e(a, r.length);
  },
  I: function(e, r, o) {
    var s = Fk(e);
    return r === "Io" ? o.ordinalNumber(s, {
      unit: "week"
    }) : _e(s, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : lr.d(e, r);
  },
  D: function(e, r, o) {
    var s = Ok(e);
    return r === "Do" ? o.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : _e(s, r.length);
  },
  E: function(e, r, o) {
    var s = e.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return o.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(s, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return o.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, r, o, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(u);
      case "ee":
        return _e(u, 2);
      case "eo":
        return o.ordinalNumber(u, {
          unit: "day"
        });
      case "eee":
        return o.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return o.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return o.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return o.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function(e, r, o, s) {
    var a = e.getUTCDay(), u = (a - s.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(u);
      case "cc":
        return _e(u, r.length);
      case "co":
        return o.ordinalNumber(u, {
          unit: "day"
        });
      case "ccc":
        return o.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return o.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return o.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function(e, r, o) {
    var s = e.getUTCDay(), a = s === 0 ? 7 : s;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return _e(a, r.length);
      case "io":
        return o.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return o.day(s, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return o.day(s, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return o.day(s, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return o.day(s, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, r, o) {
    var s = e.getUTCHours(), a = s / 12 >= 1 ? "pm" : "am";
    switch (r) {
      case "a":
      case "aa":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function(e, r, o) {
    var s = e.getUTCHours(), a;
    switch (s === 12 ? a = Mo.noon : s === 0 ? a = Mo.midnight : a = s / 12 >= 1 ? "pm" : "am", r) {
      case "b":
      case "bb":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function(e, r, o) {
    var s = e.getUTCHours(), a;
    switch (s >= 17 ? a = Mo.evening : s >= 12 ? a = Mo.afternoon : s >= 4 ? a = Mo.morning : a = Mo.night, r) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function(e, r, o) {
    if (r === "ho") {
      var s = e.getUTCHours() % 12;
      return s === 0 && (s = 12), o.ordinalNumber(s, {
        unit: "hour"
      });
    }
    return lr.h(e, r);
  },
  H: function(e, r, o) {
    return r === "Ho" ? o.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : lr.H(e, r);
  },
  K: function(e, r, o) {
    var s = e.getUTCHours() % 12;
    return r === "Ko" ? o.ordinalNumber(s, {
      unit: "hour"
    }) : _e(s, r.length);
  },
  k: function(e, r, o) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), r === "ko" ? o.ordinalNumber(s, {
      unit: "hour"
    }) : _e(s, r.length);
  },
  m: function(e, r, o) {
    return r === "mo" ? o.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : lr.m(e, r);
  },
  s: function(e, r, o) {
    return r === "so" ? o.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : lr.s(e, r);
  },
  S: function(e, r) {
    return lr.S(e, r);
  },
  X: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (r) {
      case "X":
        return nw(u);
      case "XXXX":
      case "XX":
        return Xr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Xr(u, ":");
    }
  },
  x: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "x":
        return nw(u);
      case "xxxx":
      case "xx":
        return Xr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Xr(u, ":");
    }
  },
  O: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + tw(u, ":");
      case "OOOO":
      default:
        return "GMT" + Xr(u, ":");
    }
  },
  z: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + tw(u, ":");
      case "zzzz":
      default:
        return "GMT" + Xr(u, ":");
    }
  },
  t: function(e, r, o, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return _e(u, r.length);
  },
  T: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTime();
    return _e(u, r.length);
  }
};
function tw(e, r) {
  var o = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return o + String(a);
  var c = r || "";
  return o + String(a) + c + _e(u, 2);
}
function nw(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + _e(Math.abs(e) / 60, 2);
  }
  return Xr(e, r);
}
function Xr(e, r) {
  var o = r || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = _e(Math.floor(a / 60), 2), c = _e(a % 60, 2);
  return s + u + o + c;
}
const Yk = zk;
var rw = function(e, r) {
  switch (e) {
    case "P":
      return r.date({
        width: "short"
      });
    case "PP":
      return r.date({
        width: "medium"
      });
    case "PPP":
      return r.date({
        width: "long"
      });
    case "PPPP":
    default:
      return r.date({
        width: "full"
      });
  }
}, d_ = function(e, r) {
  switch (e) {
    case "p":
      return r.time({
        width: "short"
      });
    case "pp":
      return r.time({
        width: "medium"
      });
    case "ppp":
      return r.time({
        width: "long"
      });
    case "pppp":
    default:
      return r.time({
        width: "full"
      });
  }
}, Gk = function(e, r) {
  var o = e.match(/(P+)(p+)?/) || [], s = o[1], a = o[2];
  if (!a)
    return rw(e, r);
  var u;
  switch (s) {
    case "P":
      u = r.dateTime({
        width: "short"
      });
      break;
    case "PP":
      u = r.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      u = r.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      u = r.dateTime({
        width: "full"
      });
      break;
  }
  return u.replace("{{date}}", rw(s, r)).replace("{{time}}", d_(a, r));
}, jk = {
  p: d_,
  P: Gk
};
const Zk = jk;
var Kk = ["D", "DD"], Jk = ["YY", "YYYY"];
function Xk(e) {
  return Kk.indexOf(e) !== -1;
}
function Qk(e) {
  return Jk.indexOf(e) !== -1;
}
function ow(e, r, o) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var eE = {
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
}, tE = function(e, r, o) {
  var s, a = eE[e];
  return typeof a == "string" ? s = a : r === 1 ? s = a.one : s = a.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + s : s + " ago" : s;
};
const nE = tE;
function fc(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, s = e.formats[o] || e.formats[e.defaultWidth];
    return s;
  };
}
var rE = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, oE = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, iE = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, sE = {
  date: fc({
    formats: rE,
    defaultWidth: "full"
  }),
  time: fc({
    formats: oE,
    defaultWidth: "full"
  }),
  dateTime: fc({
    formats: iE,
    defaultWidth: "full"
  })
};
const aE = sE;
var lE = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, uE = function(e, r, o, s) {
  return lE[e];
};
const cE = uE;
function Ri(e) {
  return function(r, o) {
    var s = o != null && o.context ? String(o.context) : "standalone", a;
    if (s === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = o != null && o.width ? String(o.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, w = o != null && o.width ? String(o.width) : e.defaultWidth;
      a = e.values[w] || e.values[f];
    }
    var v = e.argumentCallback ? e.argumentCallback(r) : r;
    return a[v];
  };
}
var dE = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, fE = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, hE = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, pE = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, wE = {
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
}, vE = {
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
}, mE = function(e, r) {
  var o = Number(e), s = o % 100;
  if (s > 20 || s < 10)
    switch (s % 10) {
      case 1:
        return o + "st";
      case 2:
        return o + "nd";
      case 3:
        return o + "rd";
    }
  return o + "th";
}, _E = {
  ordinalNumber: mE,
  era: Ri({
    values: dE,
    defaultWidth: "wide"
  }),
  quarter: Ri({
    values: fE,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Ri({
    values: hE,
    defaultWidth: "wide"
  }),
  day: Ri({
    values: pE,
    defaultWidth: "wide"
  }),
  dayPeriod: Ri({
    values: wE,
    defaultWidth: "wide",
    formattingValues: vE,
    defaultFormattingWidth: "wide"
  })
};
const gE = _E;
function Fi(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = o.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = r.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? yE(f, function($) {
      return $.test(c);
    }) : $E(f, function($) {
      return $.test(c);
    }), v;
    v = e.valueCallback ? e.valueCallback(w) : w, v = o.valueCallback ? o.valueCallback(v) : v;
    var _ = r.slice(c.length);
    return {
      value: v,
      rest: _
    };
  };
}
function $E(e, r) {
  for (var o in e)
    if (e.hasOwnProperty(o) && r(e[o]))
      return o;
}
function yE(e, r) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o]))
      return o;
}
function VE(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.match(e.matchPattern);
    if (!s)
      return null;
    var a = s[0], u = r.match(e.parsePattern);
    if (!u)
      return null;
    var c = e.valueCallback ? e.valueCallback(u[0]) : u[0];
    c = o.valueCallback ? o.valueCallback(c) : c;
    var f = r.slice(a.length);
    return {
      value: c,
      rest: f
    };
  };
}
var bE = /^(\d+)(th|st|nd|rd)?/i, CE = /\d+/i, SE = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kE = {
  any: [/^b/i, /^(a|c)/i]
}, EE = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, IE = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, xE = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, AE = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, BE = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, TE = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, LE = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ME = {
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
}, DE = {
  ordinalNumber: VE({
    matchPattern: bE,
    parsePattern: CE,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Fi({
    matchPatterns: SE,
    defaultMatchWidth: "wide",
    parsePatterns: kE,
    defaultParseWidth: "any"
  }),
  quarter: Fi({
    matchPatterns: EE,
    defaultMatchWidth: "wide",
    parsePatterns: IE,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Fi({
    matchPatterns: xE,
    defaultMatchWidth: "wide",
    parsePatterns: AE,
    defaultParseWidth: "any"
  }),
  day: Fi({
    matchPatterns: BE,
    defaultMatchWidth: "wide",
    parsePatterns: TE,
    defaultParseWidth: "any"
  }),
  dayPeriod: Fi({
    matchPatterns: LE,
    defaultMatchWidth: "any",
    parsePatterns: ME,
    defaultParseWidth: "any"
  })
};
const NE = DE;
var OE = {
  code: "en-US",
  formatDistance: nE,
  formatLong: aE,
  formatRelative: cE,
  localize: gE,
  match: NE,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const f_ = OE;
var PE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, RE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, FE = /^'([^]*?)'?$/, UE = /''/g, WE = /[a-zA-Z]/;
function qE(e, r, o) {
  var s, a, u, c, f, w, v, _, $, y, T, L, N, D, S, x, I, P;
  be(2, arguments);
  var k = String(r), R = li(), O = (s = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : R.locale) !== null && s !== void 0 ? s : f_, z = En((u = (c = (f = (w = o == null ? void 0 : o.firstWeekContainsDate) !== null && w !== void 0 ? w : o == null || (v = o.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : R.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = R.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var fe = En((T = (L = (N = (D = o == null ? void 0 : o.weekStartsOn) !== null && D !== void 0 ? D : o == null || (S = o.locale) === null || S === void 0 || (x = S.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && N !== void 0 ? N : R.weekStartsOn) !== null && L !== void 0 ? L : (I = R.locale) === null || I === void 0 || (P = I.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!(fe >= 0 && fe <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = Ge(e);
  if (!Mk(he))
    throw new RangeError("Invalid time value");
  var $e = sd(he), Ce = Dk(he, $e), Ae = {
    firstWeekContainsDate: z,
    weekStartsOn: fe,
    locale: O,
    _originalDate: he
  }, Se = k.match(RE).map(function(ce) {
    var Me = ce[0];
    if (Me === "p" || Me === "P") {
      var We = Zk[Me];
      return We(ce, O.formatLong);
    }
    return ce;
  }).join("").match(PE).map(function(ce) {
    if (ce === "''")
      return "'";
    var Me = ce[0];
    if (Me === "'")
      return HE(ce);
    var We = Yk[Me];
    if (We)
      return !(o != null && o.useAdditionalWeekYearTokens) && Qk(ce) && ow(ce, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && Xk(ce) && ow(ce, r, String(e)), We(Ce, ce, O.localize, Ae);
    if (Me.match(WE))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Me + "`");
    return ce;
  }).join("");
  return Se;
}
function HE(e) {
  var r = e.match(FE);
  return r ? r[1].replace(UE, "'") : e;
}
function h_(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function zE(e) {
  return h_({}, e);
}
var iw = 1e3 * 60, rl = 60 * 24, sw = rl * 30, aw = rl * 365;
function ml(e, r, o) {
  var s, a, u;
  be(2, arguments);
  var c = li(), f = (s = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : f_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = Tk(e, r);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = h_(zE(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = Ge(r), $ = Ge(e)) : (_ = Ge(e), $ = Ge(r));
  var y = String((u = o == null ? void 0 : o.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if (y === "floor")
    T = Math.floor;
  else if (y === "ceil")
    T = Math.ceil;
  else if (y === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var L = $.getTime() - _.getTime(), N = L / iw, D = sd($) - sd(_), S = (L - D) / iw, x = o == null ? void 0 : o.unit, I;
  if (x ? I = String(x) : N < 1 ? I = "second" : N < 60 ? I = "minute" : N < rl ? I = "hour" : S < sw ? I = "day" : S < aw ? I = "month" : I = "year", I === "second") {
    var P = T(L / 1e3);
    return f.formatDistance("xSeconds", P, v);
  } else if (I === "minute") {
    var k = T(N);
    return f.formatDistance("xMinutes", k, v);
  } else if (I === "hour") {
    var R = T(N / 60);
    return f.formatDistance("xHours", R, v);
  } else if (I === "day") {
    var O = T(S / rl);
    return f.formatDistance("xDays", O, v);
  } else if (I === "month") {
    var z = T(S / sw);
    return z === 12 && x !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", z, v);
  } else if (I === "year") {
    var fe = T(S / aw);
    return f.formatDistance("xYears", fe, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function YE(e, r, o) {
  be(2, arguments);
  var s = Qp(e, o), a = Qp(r, o);
  return s.getTime() === a.getTime();
}
function GE(e, r) {
  return be(1, arguments), YE(e, Date.now(), r);
}
function jE(e) {
  return be(1, arguments), l_(e, Date.now());
}
function ZE(e, r) {
  be(2, arguments);
  var o = En(r);
  return xk(e, -o);
}
function KE(e) {
  return be(1, arguments), l_(e, ZE(Date.now(), 1));
}
const In = (e) => {
  let r = "";
  if (e)
    try {
      r = qE(new Date(e), tt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, p_ = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), w_ = (e, r) => {
  const o = p_(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = o.length > r ? "..." : "";
  return o.substring(0, r) + s;
}, JE = (e, r) => {
  let o = r;
  switch (e) {
    case 2:
      o = o.filter(
        (s) => jE(s.firstEventTime)
      );
      break;
    case 3:
      o = o.filter(
        (s) => KE(s.firstEventTime)
      );
      break;
    case 4:
      o = o.filter(
        (s) => GE(s.firstEventTime)
      );
      break;
  }
  return o;
}, _l = "/alec", v_ = "/alec/engine/configuration", m_ = "/alec/llm/configuration", XE = "/alec/llm/validate", __ = "/alec/llm/suggestions", QE = "/alec/llm/usage", g_ = "/alec/situation", eI = async () => {
  try {
    const e = await rt.get(`${v_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, tI = async (e) => {
  try {
    return (await rt.post(v_, e)).status === 200;
  } catch {
    return !1;
  }
}, nI = async () => {
  try {
    const e = await rt.get(m_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, rI = async (e) => {
  try {
    const r = await rt.post(m_, e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, oI = async (e) => {
  try {
    const r = await rt.post(XE, e);
    return r.status === 200 ? r.data : { ok: !1, message: `Unexpected response (HTTP ${r.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, $_ = async (e) => {
  try {
    const r = await rt.get(`${__}/${e}`);
    return r.status === 200 ? r.data : r.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, iI = async (e) => {
  try {
    const r = await rt.post(
      `${__}/${e}/reanalyze`
    );
    return r.status === 202 || r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, sI = async (e = 30) => {
  try {
    const r = await rt.get(`${QE}?days=${e}`);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, y_ = async (e, r) => {
  try {
    const o = await rt.post(`${_l}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return r == tt.REJECTED.toLowerCase() && o.status === 200 && await i_(e, "clear"), o.status === 200;
  } catch {
    return !1;
  }
}, lw = async (e, r) => {
  try {
    return (await rt.delete(`${_l}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, V_ = async (e, r) => {
  try {
    return (await rt.put(`${_l}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, aI = async (e) => {
  try {
    return (await rt.post(g_, e)).status === 200;
  } catch {
    return !1;
  }
}, lI = async () => {
  try {
    return (await rt.post(`${g_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, uI = async () => {
  try {
    return (await rt.post(`${_l}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, cI = window.Vue.defineComponent, Pt = window.Vue.unref, hc = window.Vue.normalizeClass, Sn = window.Vue.createElementVNode, Pr = window.Vue.toDisplayString, ur = window.Vue.openBlock, cr = window.Vue.createElementBlock, Ui = window.Vue.createCommentVNode, uw = window.Vue.createVNode, ad = window.Vue.createTextVNode, dI = window.Vue.renderList, fI = window.Vue.Fragment, hI = window.Vue.pushScopeId, pI = window.Vue.popScopeId, xd = (e) => (hI("data-v-2682849b"), e = e(), pI(), e), wI = { class: "content" }, vI = { class: "title-row" }, mI = { class: "title" }, _I = ["title"], gI = {
  key: 1,
  class: "accepted"
}, $I = {
  key: 2,
  class: "rejected"
}, yI = /* @__PURE__ */ xd(() => /* @__PURE__ */ Sn("span", { class: "info-title" }, " Duration: ", -1)), VI = { key: 0 }, bI = /* @__PURE__ */ xd(() => /* @__PURE__ */ Sn("span", { class: "info-title" }, " First Event: ", -1)), CI = { class: "description" }, SI = /* @__PURE__ */ xd(() => /* @__PURE__ */ Sn("hr", null, null, -1)), kI = {
  key: 1,
  class: "count-info"
}, EI = /* @__PURE__ */ ad(" Alarms: "), II = { class: "info-title" }, xI = window.Vue.onMounted, AI = window.Vue.ref, BI = /* @__PURE__ */ cI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: r }) {
    const o = e, s = tt.ACCEPTED, a = tt.REJECTED, u = new Date().getTime(), c = () => {
      var w;
      r("situation-selected", (w = o.situationInfo) == null ? void 0 : w.id);
    }, f = AI("none");
    return xI(async () => {
      var v;
      if (((v = o.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const w = await $_(o.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return ur(), cr("div", {
        onClick: c,
        class: hc(["card", {
          rejected: o.situationInfo.status == Pt(a)
        }])
      }, [
        Sn("div", {
          class: hc(["severity-line", [`${($ = (_ = o.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        Sn("div", wI, [
          Sn("div", vI, [
            Sn("div", mI, "Situation " + Pr((y = o.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (ur(), cr("span", {
              key: 0,
              class: hc(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Pr(f.value === "pending" ? "\u2026" : ""), 11, _I)) : Ui("", !0),
            o.situationInfo.status == Pt(s) ? (ur(), cr("div", gI, [
              uw(Pt(j), {
                icon: Pt(ii),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ui("", !0),
            o.situationInfo.status == Pt(a) ? (ur(), cr("div", $I, [
              uw(Pt(j), {
                icon: Pt(a_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ui("", !0)
          ]),
          Sn("div", null, [
            yI,
            ad(" " + Pr(Pt(ml)(
              Pt(u),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Ui("", !0) : (ur(), cr("div", VI, [
            bI,
            ad(Pr(Pt(In)(o.situationInfo.firstEventTime)), 1)
          ])),
          Sn("div", CI, Pr(Pt(w_)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          SI,
          o.situationInfo.relatedAlarms ? (ur(), cr("div", kI, [
            EI,
            Sn("span", II, Pr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Ui("", !0),
          (ur(!0), cr(fI, null, dI(Pt(ge.exports.keys)(
            Pt(ge.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (T) => (ur(), cr("div", {
            class: "info-title",
            key: T
          }, " - " + Pr(T), 1))), 128))
        ])
      ], 2);
    };
  }
});
const b_ = /* @__PURE__ */ de(BI, [["__scopeId", "data-v-2682849b"]]), TI = window.Vue.openBlock, LI = window.Vue.createElementBlock, MI = window.Vue.createElementVNode;
var DI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const NI = {}, OI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PI = /* @__PURE__ */ MI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), RI = [
  PI
];
function FI(e, r) {
  return TI(), LI("svg", OI, RI);
}
var UI = /* @__PURE__ */ DI(NI, [["render", FI]]);
const WI = window.Vue.openBlock, qI = window.Vue.createElementBlock, C_ = window.Vue.createElementVNode;
var HI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const zI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GI = /* @__PURE__ */ C_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), jI = /* @__PURE__ */ C_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), ZI = [
  GI,
  jI
];
function KI(e, r) {
  return WI(), qI("svg", YI, ZI);
}
var JI = /* @__PURE__ */ HI(zI, [["render", KI]]);
const XI = window.Vue.openBlock, QI = window.Vue.createElementBlock, ex = window.Vue.createElementVNode;
var tx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const nx = {}, rx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ox = /* @__PURE__ */ ex("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), ix = [
  ox
];
function sx(e, r) {
  return XI(), QI("svg", rx, ix);
}
var ax = /* @__PURE__ */ tx(nx, [["render", sx]]);
const lx = window.Vue.openBlock, ux = window.Vue.createElementBlock, cx = window.Vue.createElementVNode;
var dx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const fx = {}, hx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, px = /* @__PURE__ */ cx("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), wx = [
  px
];
function vx(e, r) {
  return lx(), ux("svg", hx, wx);
}
var S_ = /* @__PURE__ */ dx(fx, [["render", vx]]);
const mx = window.Vue.defineComponent, dr = window.Vue.unref, ya = window.Vue.normalizeClass, Va = window.Vue.createVNode, _x = window.Vue.openBlock, gx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $x = { class: "paginator" }, yx = /* @__PURE__ */ mx({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: r }) {
    const o = e, s = (a) => {
      a >= 0 && a <= o.totalPages - 1 && r("go-to-page", a);
    };
    return (a, u) => (_x(), gx("div", $x, [
      Va(dr(j), {
        icon: dr(UI),
        "aria-hidden": "true",
        class: ya(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Va(dr(j), {
        icon: dr(ax),
        "aria-hidden": "true",
        class: ya(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Va(dr(j), {
        icon: dr(S_),
        "aria-hidden": "true",
        class: ya(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Va(dr(j), {
        icon: dr(JI),
        "aria-hidden": "true",
        class: ya(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Vx = /* @__PURE__ */ de(yx, [["__scopeId", "data-v-40758818"]]);
const ue = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, bx = window.Vue.computed, gl = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((s) => {
    o[`${s}Label`] = bx(() => e.value[s] ? e.value[s] : r[s]);
  }), o;
};
const ro = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, oo = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Cx = Object.defineProperty, Sx = Object.defineProperties, kx = Object.getOwnPropertyDescriptors, cw = Object.getOwnPropertySymbols, Ex = Object.prototype.hasOwnProperty, Ix = Object.prototype.propertyIsEnumerable, dw = (e, r, o) => r in e ? Cx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, fw = (e, r) => {
  for (var o in r || (r = {}))
    Ex.call(r, o) && dw(e, o, r[o]);
  if (cw)
    for (var o of cw(r))
      Ix.call(r, o) && dw(e, o, r[o]);
  return e;
}, xx = (e, r) => Sx(e, kx(r));
const Ax = window.Vue.defineComponent, Bx = window.Vue.h;
var Tx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Lx = {
  center: {
    type: Boolean,
    default: !1
  }
}, Mx = Ax({
  props: Lx,
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
        const { clientWidth: r, clientHeight: o } = this.parent, s = Math.round(Math.max(r, o));
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
        this.styles = xx(fw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, oo(this.failsafe), this.failsafe = ro(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Bx("div", {
        style: fw({}, this.styles),
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
var yr = /* @__PURE__ */ Tx(Mx, [["__scopeId", "data-v-18e2a5db"]]);
const Dx = window.Vue.openBlock, Nx = window.Vue.createElementBlock, Ox = window.Vue.createElementVNode;
var Px = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Rx = {}, Fx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Ux = /* @__PURE__ */ Ox("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Wx = [
  Ux
];
function qx(e, r) {
  return Dx(), Nx("svg", Fx, Wx);
}
var ui = /* @__PURE__ */ Px(Rx, [["render", qx]]);
const hw = window.Vue.computed, Hx = (e, r, o) => {
  const s = hw(() => r.value.filter((u) => !u.disabled)), a = hw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? o(s.value[s.value.length - 1]) : o(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? o(s.value[0]) : o(s.value[a.value + 1]));
    }
  };
};
const zx = window.Vue.openBlock, Yx = window.Vue.createElementBlock, Ad = window.Vue.createElementVNode;
var Gx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const jx = {}, Zx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Kx = /* @__PURE__ */ Ad("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Jx = /* @__PURE__ */ Ad("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Xx = /* @__PURE__ */ Ad("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Qx = [
  Kx,
  Jx,
  Xx
];
function eA(e, r) {
  return zx(), Yx("svg", Zx, Qx);
}
var tA = /* @__PURE__ */ Gx(jx, [["render", eA]]), nA = Object.defineProperty, rA = Object.defineProperties, oA = Object.getOwnPropertyDescriptors, pw = Object.getOwnPropertySymbols, iA = Object.prototype.hasOwnProperty, sA = Object.prototype.propertyIsEnumerable, ww = (e, r, o) => r in e ? nA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, k_ = (e, r) => {
  for (var o in r || (r = {}))
    iA.call(r, o) && ww(e, o, r[o]);
  if (pw)
    for (var o of pw(r))
      sA.call(r, o) && ww(e, o, r[o]);
  return e;
}, E_ = (e, r) => rA(e, oA(r));
const ci = window.Vue.defineComponent, ws = window.Vue.resolveComponent, kn = window.Vue.openBlock, Zo = window.Vue.createElementBlock, aA = window.Vue.createVNode, ol = window.Vue.createBlock, lA = window.Vue.withModifiers, si = window.Vue.inject, vs = window.Vue.computed, uA = window.Vue.normalizeClass, Do = window.Vue.createElementVNode, il = window.Vue.toDisplayString, ja = window.Vue.renderSlot, ls = window.Vue.createCommentVNode, cA = window.Vue.withDirectives, dA = window.Vue.vShow, ld = window.Vue.ref, vw = window.Vue.toRef, mw = window.Vue.nextTick, ud = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Bd = window.Vue.provide, _w = window.Vue.isRef, fA = window.Vue.onBeforeUnmount;
var $s = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const hA = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, pA = ci({
  props: hA,
  components: {
    FeatherIcon: j
  }
}), wA = ["title"];
function vA(e, r, o, s, a, u) {
  const c = ws("FeatherIcon");
  return kn(), Zo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    aA(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, wA);
}
var mA = /* @__PURE__ */ $s(pA, [["render", vA], ["__scopeId", "data-v-4265058e"]]);
const _A = ci({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return ui;
    }
  },
  components: {
    ActionIcon: mA
  }
});
function gA(e, r, o, s, a, u) {
  const c = ws("ActionIcon");
  return kn(), ol(c, {
    onClick: r[0] || (r[0] = lA((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var $A = /* @__PURE__ */ $s(_A, [["render", gA]]);
const yA = ci({
  computed: {
    errorIcon() {
      return tA;
    }
  },
  components: {
    FeatherIcon: j
  }
});
function VA(e, r, o, s, a, u) {
  const c = ws("FeatherIcon");
  return kn(), ol(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var bA = /* @__PURE__ */ $s(yA, [["render", VA], ["__scopeId", "data-v-0b8faef3"]]);
const CA = {
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
}, SA = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, kA = ci({
  emits: SA,
  props: CA,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = si("wrapperOptions", {}), r = si("validationErrorMessage", !1), o = vs(() => e.error ? e.error : r && r.value ? r.value : !1);
    return E_(k_({}, e), { error: o });
  },
  computed: {
    computedClearText() {
      return this.clearText ? this.clearText : this.clear ? this.clear : "";
    },
    inputId() {
      return this.for;
    },
    hasPre() {
      return this.$slots.pre && this.$slots.pre().findIndex((r) => r.children && r.children.length !== 0) !== -1;
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
      const r = { childList: !0, subtree: !0 }, o = () => {
        const s = this.$el.querySelector(".prefix");
        this.prefixWidth = s ? s.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(o), this.prefixObserver.observe(e, r), o();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: $A,
    ErrorIcon: bA
  }
}), EA = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, IA = ["for"], xA = { class: "prefix" }, AA = { class: "post" };
function BA(e, r, o, s, a, u) {
  const c = ws("ClearIcon"), f = ws("ErrorIcon");
  return kn(), Zo("div", {
    class: uA(["feather-input-wrapper-container", e.containerCls])
  }, [
    Do("fieldset", EA, [
      Do("legend", null, il(e.label), 1)
    ]),
    Do("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, il(e.label), 9, IA),
    Do("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      Do("div", xA, [
        ja(e.$slots, "pre", {}, void 0, !0)
      ]),
      ja(e.$slots, "default", {}, void 0, !0),
      Do("div", AA, [
        e.showClear && e.computedClearText ? (kn(), ol(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : ls("", !0),
        e.error ? (kn(), ol(f, { key: 1 })) : ls("", !0),
        ja(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var $l = /* @__PURE__ */ $s(kA, [["render", BA], ["__scopeId", "data-v-4db296db"]]);
const TA = ci({
  setup() {
    const e = si("subTextOptions", {}), r = si("validationErrorMessage", !1), o = vs(() => e.error ? e.error : r && r.value ? r.value : "");
    return E_(k_({}, e), { error: o });
  }
}), LA = { class: "feather-input-sub-text" }, MA = {
  key: 0,
  class: "feather-input-spacer"
}, DA = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, NA = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function OA(e, r, o, s, a, u) {
  return cA((kn(), Zo("div", LA, [
    !e.hint && !e.error.length ? (kn(), Zo("div", MA, "\xA0")) : ls("", !0),
    e.hint && !e.error.length ? (kn(), Zo("div", DA, il(e.hint), 1)) : ls("", !0),
    e.error.length > 0 ? (kn(), Zo("div", NA, il(e.error), 1)) : ls("", !0),
    ja(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [dA, !e.inline || e.hint || e.error.length]
  ]);
}
var di = /* @__PURE__ */ $s(TA, [["render", OA], ["__scopeId", "data-v-8e0ac99e"]]);
const PA = {
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
ci({
  props: PA,
  setup(e) {
    const r = si("featherFormErrors", ld([])), o = vw(e, "errorList"), s = vs(() => {
      var _;
      return (_ = o.value) != null && _.length ? o.value : r.value;
    }), a = vw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = ld(), w = (_) => `${c(_.label)} - ${_.message}`, v = vs(() => (s.value.length && mw(() => f.value.focus()), e.headingText(s.value)));
    return ud(a, (_) => {
      _.length && mw(() => f.value.focus());
    }), {
      errors: s,
      errorsHeading: v,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const fi = (e, r, o, s, a) => {
  const u = si("featherForm", !1);
  if (s && u && e.value) {
    const c = ld("");
    Bd("validationErrorMessage", c);
    const f = () => {
      if (a && _w(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: o
        };
      try {
        return s.validateSync(r.value), c.value = "", { success: !0 };
      } catch (_) {
        const $ = _;
        return c.value = $.errors[0], {
          success: !1,
          message: $.errors[0],
          inputId: e.value,
          label: o
        };
      }
    }, v = {
      clear: () => {
        c.value = "";
      },
      validate: f
    };
    return a && _w(a) && ud(a, () => {
      u.runValidation();
    }), ud(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), fA(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, hi = (e) => ({
  inherittedAttrs: vs(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), pi = {
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
}, wi = (e) => {
  Bd("subTextOptions", e);
}, yl = {
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
}, Vl = (e) => {
  Bd("wrapperOptions", e);
}, ba = window.Vue.ref, RA = window.Vue.watch, FA = window.Vue.watchEffect, gw = window.Vue.computed, pc = window.Vue.provide, I_ = (e, r, o, s, a) => {
  const u = ba([]), c = ba(), f = ba(), w = ba();
  FA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((x) => x.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let x = u.value.filter((I) => !I.disabled);
      x = x.length ? x : u.value, f.value = x[0], f.value.first = !0;
    }
  }), RA(c, (S, x) => {
    x && (x.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (r("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = gw(() => c.value || f.value), $ = Hx(_, u, v), y = gw(() => ue("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = fi(w, e, o, s, a);
  return pc("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), pc("select", v), pc("blur", (S) => {
    r("blur", S);
  }), {
    keydown: (S) => {
      switch (S.keyCode) {
        case 13:
        case 32:
          c.value ? v(c.value) : f.value && v(f.value);
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
var UA = Object.defineProperty, WA = Object.defineProperties, qA = Object.getOwnPropertyDescriptors, $w = Object.getOwnPropertySymbols, HA = Object.prototype.hasOwnProperty, zA = Object.prototype.propertyIsEnumerable, yw = (e, r, o) => r in e ? UA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Qo = (e, r) => {
  for (var o in r || (r = {}))
    HA.call(r, o) && yw(e, o, r[o]);
  if ($w)
    for (var o of $w(r))
      zA.call(r, o) && yw(e, o, r[o]);
  return e;
}, x_ = (e, r) => WA(e, qA(r));
const Vr = window.Vue.defineComponent, us = window.Vue.inject, sl = window.Vue.computed, cs = window.Vue.ref, sn = window.Vue.resolveComponent, qt = window.Vue.openBlock, ys = window.Vue.createElementBlock, A_ = window.Vue.normalizeClass, xn = window.Vue.renderSlot, gr = window.Vue.createBlock, ms = window.Vue.createCommentVNode, al = window.Vue.createElementVNode, YA = window.Vue.withModifiers, bl = window.Vue.createVNode, B_ = window.Vue.toRef, cd = window.Vue.mergeProps, Hn = window.Vue.withCtx, GA = window.Vue.h, jA = window.Vue.provide;
var br = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ZA = {
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
}, KA = Vr({
  props: ZA,
  setup(e) {
    const r = us("isCondensed", null), o = sl(() => r || e.condensed), s = cs(!1);
    return {
      focused: s,
      handleFocus: () => {
        s.value = !0;
      },
      handleBlur: () => {
        s.value = !1;
      },
      isCondensed: o
    };
  },
  components: {
    FeatherRipple: yr
  }
}), JA = ["aria-disabled"];
function XA(e, r, o, s, a, u) {
  const c = sn("FeatherRipple");
  return qt(), ys("div", {
    class: A_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    xn(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (qt(), gr(c, { key: 0 })) : ms("", !0)
  ], 42, JA);
}
var Cl = /* @__PURE__ */ br(KA, [["render", XA], ["__scopeId", "data-v-44d413dc"]]);
const QA = {
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
}, eB = Vr({
  emits: ["delete"],
  props: QA,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: ui
    };
  },
  components: {
    FeatherIcon: j
  }
}), tB = { class: "chip-delete" }, nB = ["aria-label", "aria-describedby"];
function rB(e, r, o, s, a, u) {
  const c = sn("FeatherIcon");
  return qt(), ys("span", tB, [
    al("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = YA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      bl(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, nB)
  ]);
}
var oB = /* @__PURE__ */ br(eB, [["render", rB], ["__scopeId", "data-v-4bae6cb4"]]);
const iB = Vr({
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
}), sB = ["title"];
function aB(e, r, o, s, a, u) {
  return qt(), ys("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    xn(e.$slots, "default", {}, void 0, !0)
  ], 8, sB);
}
var Sl = /* @__PURE__ */ br(iB, [["render", aB], ["__scopeId", "data-v-1a0445b2"]]);
const lB = {}, uB = {
  class: "chip-icon",
  role: "presentation"
};
function cB(e, r) {
  return qt(), ys("span", uB, [
    xn(e.$slots, "default", {}, void 0, !0)
  ]);
}
var kl = /* @__PURE__ */ br(lB, [["render", cB], ["__scopeId", "data-v-2230176f"]]);
const Vw = {
  delete: "Remove"
}, dB = Vr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Vw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = gl(B_(e, "labels"), Vw), s = sl(() => ue("chip-text")), a = () => {
      e.disabled || r.emit("click");
    }, u = Qo({}, r.attrs);
    return e.disabled && delete u.onClick, x_(Qo({}, o), {
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
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Cl,
    DeleteIcon: oB,
    Label: Sl,
    PreIcon: kl
  }
}), fB = ["aria-disabled"];
function hB(e, r, o, s, a, u) {
  const c = sn("PreIcon"), f = sn("Label"), w = sn("DeleteIcon"), v = sn("Chip");
  return qt(), gr(v, cd(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Hn(() => [
      al("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        al("span", cd(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (qt(), gr(c, { key: 0 }, {
            default: Hn(() => [
              xn(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : ms("", !0),
          bl(f, { id: e.chipTextId }, {
            default: Hn(() => [
              xn(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, fB),
      e.canDelete ? (qt(), gr(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : ms("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var pB = /* @__PURE__ */ br(dB, [["render", hB], ["__scopeId", "data-v-48b2704a"]]);
const wB = Vr({
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
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Cl,
    Label: Sl,
    PreIcon: kl
  }
}), vB = ["aria-disabled"];
function mB(e, r, o, s, a, u) {
  const c = sn("PreIcon"), f = sn("Label"), w = sn("Chip");
  return qt(), gr(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Hn(() => [
      al("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (qt(), gr(c, { key: 0 }, {
          default: Hn(() => [
            xn(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : ms("", !0),
        bl(f, null, {
          default: Hn(() => [
            xn(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, vB)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var _B = /* @__PURE__ */ br(wB, [["render", mB], ["__scopeId", "data-v-3e0c4eba"]]);
const gB = Vr({
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
    const r = cs(!1), o = cs(!1), s = sl(() => ue("chip-label-id")), a = sl(() => r.value || o.value ? 0 : -1), u = cs(), c = () => {
      u.value.$el.focus();
    }, f = us("register", (y) => {
    }), w = us("blur", (y) => {
    }), v = us("select", (y) => {
    }), _ = {
      first: r,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: o
    };
    return f(_), {
      labelId: s,
      tabindex: a,
      first: r,
      blur: w,
      click: () => {
        v(_);
      },
      input: u,
      checked: o
    };
  },
  computed: {
    hasIcon() {
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Cl,
    Label: Sl,
    PreIcon: kl
  }
});
function $B(e, r, o, s, a, u) {
  const c = sn("PreIcon"), f = sn("Label"), w = sn("Chip");
  return qt(), gr(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: A_(["focus hover", { selected: e.checked }]),
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
    default: Hn(() => [
      e.hasIcon ? (qt(), gr(c, { key: 0 }, {
        default: Hn(() => [
          xn(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : ms("", !0),
      bl(f, { id: e.labelId }, {
        default: Hn(() => [
          xn(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var yB = /* @__PURE__ */ br(gB, [["render", $B], ["__scopeId", "data-v-bbcc2f70"]]);
const VB = {
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
}, bw = Vr({
  props: VB,
  setup() {
    return { format: us("chipListFormat", "") };
  },
  render() {
    const e = (r) => GA(r, Qo(Qo({}, this.$props), this.$attrs), Qo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(pB) : this.format === "radio" ? e(yB) : e(_B);
  }
}), bB = {
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
}, CB = Vr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: bB,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    jA("chipListFormat", o);
    const s = o === "single";
    if (o === "radio") {
      const c = B_(e, "modelValue");
      return x_(Qo({
        attrs: {
          role: "radiogroup"
        }
      }, I_(c, r.emit, e.label, {}, cs(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), SB = ["aria-label"];
function kB(e, r, o, s, a, u) {
  return qt(), ys("div", cd(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    xn(e.$slots, "default", {}, void 0, !0)
  ], 16, SB);
}
var EB = /* @__PURE__ */ br(CB, [["render", kB], ["__scopeId", "data-v-1e06f41d"]]);
const IB = window.Vue.defineComponent, xB = window.Vue.normalizeClass, AB = window.Vue.openBlock, BB = window.Vue.createElementBlock, TB = window.Vue.createCommentVNode, LB = /* @__PURE__ */ IB({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, s) => r != null && r.severity ? (AB(), BB("span", {
      key: 0,
      class: xB(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : TB("", !0);
  }
});
const MB = /* @__PURE__ */ de(LB, [["__scopeId", "data-v-e08880d6"]]), DB = window.Vue.defineComponent, Wi = window.Vue.unref, T_ = window.Vue.createTextVNode, wc = window.Vue.normalizeClass, vc = window.Vue.withCtx, NB = window.Vue.createVNode, OB = window.Vue.renderList, PB = window.Vue.Fragment, Ca = window.Vue.openBlock, RB = window.Vue.createElementBlock, mc = window.Vue.createBlock, Cw = window.Vue.createCommentVNode, FB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UB = /* @__PURE__ */ T_(" ALL "), Sw = window.Vue.ref, WB = window.Vue.watch, qB = window.Vue.computed, HB = window.Vue.reactive, zB = /* @__PURE__ */ DB({
  __name: "ChipListByProperty",
  props: {
    alarms: null,
    property: null,
    preSelected: null,
    isVertical: { type: Boolean }
  },
  emits: ["selected-option"],
  setup(e, { emit: r }) {
    var w;
    const o = e, s = Sw(!1), a = qB(() => ge.exports.keys(ge.exports.groupBy(o.alarms, o.property))), u = Sw(
      (w = o.preSelected) != null && w.length ? o.preSelected : ["all"]
    ), c = HB({
      alarms: o.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), r("selected-option", u.value);
    };
    return WB(o, () => {
      var v;
      u.value = (v = o.preSelected) != null && v.length ? o.preSelected : ["all"], c.alarms = o.alarms, s.value = !1;
    }), (v, _) => Wi(a).length > 0 ? (Ca(), mc(Wi(EB), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: wc({ vertical: o.isVertical })
    }, {
      default: vc(() => [
        NB(Wi(bw), {
          class: wc({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: vc(() => [
            UB
          ]),
          _: 1
        }, 8, ["class"]),
        (Ca(!0), RB(PB, null, OB(Wi(a), ($) => (Ca(), mc(Wi(bw), {
          class: wc([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: vc(() => [
            e.property == "severity" ? (Ca(), mc(MB, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : Cw("", !0),
            T_(FB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Cw("", !0);
  }
});
const YB = /* @__PURE__ */ de(zB, [["__scopeId", "data-v-d83b0f85"]]);
const GB = window.Vue.watch, jB = window.Vue.onBeforeUnmount, ZB = window.Vue.ref, KB = window.Vue.onMounted, JB = (e) => {
  const r = ZB(!1);
  let o = !1;
  const s = (c) => {
    e(c), o = !1;
  };
  function a(c) {
    o || (requestAnimationFrame(() => s(c)), o = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", a);
  };
  return KB(() => {
    const c = GB(r, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    jB(() => {
      c(), u();
    });
  }), r;
}, XB = window.Vue.watch, QB = window.Vue.onBeforeUnmount, eT = window.Vue.ref, tT = window.Vue.onMounted, nT = (e, r) => {
  const o = eT(!1), s = (c) => {
    c.target === window && r(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || r(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return tT(() => {
    const c = XB(o, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    QB(() => {
      c(), u();
    });
  }), o;
}, rT = window.Vue.watch, oT = window.Vue.onBeforeUnmount, iT = window.Vue.ref, L_ = (e, r) => {
  const o = iT(!1);
  let s = !1;
  const a = (w) => {
    r(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = rT([e, o], ([w, v], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), v && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return oT(() => {
    f(), c();
  }), o;
}, sT = window.Vue.defineComponent, Rn = window.Vue.ref, kw = window.Vue.toRef, aT = window.Vue.onMounted, lT = window.Vue.watch, Ew = window.Vue.computed, uT = window.Vue.nextTick, Iw = window.Vue.openBlock, xw = window.Vue.createElementBlock, Aw = window.Vue.renderSlot, cT = window.Vue.normalizeClass, dT = window.Vue.normalizeStyle, fT = window.Vue.createCommentVNode;
var hT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const pT = {
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
}, wT = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, vT = sT({
  emits: wT,
  props: pT,
  setup(e, r) {
    const o = Rn(), s = Rn(), a = kw(e, "open"), u = kw(e, "noExpand"), c = Rn("auto"), f = Rn(), w = Rn(e.triggerId || ue("feather-menu-trigger")), v = Rn(ue("feather-menu-dropdown")), _ = Rn(""), $ = Rn("");
    aT(() => {
      f.value = window;
    });
    const y = Rn(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), L = () => {
      if (!s.value)
        return;
      const k = o.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", uT(() => {
        let { height: R, width: O } = s.value.getBoundingClientRect();
        const z = T(), fe = z.height, he = z.width;
        e.fill && O < k.width ? (c.value = k.width + "px", O = k.width) : c.value = O + "px";
        let $e = 0;
        fe - k.bottom < R && k.top >= R ? ($e = k.top - R, e.cover && ($e += k.height)) : ($e = k.bottom, e.cover && ($e -= k.height));
        let Ce = e.right ? k.right - O : k.left;
        !e.right && k.right >= O && he - k.left < O && (Ce = k.right - O), e.right && k.right <= O && he - k.left > O && (Ce = k.left), $.value = `${Ce}px`, _.value = `${$e}px`, y.value = !1;
      });
    }, D = nT(o, (k) => {
      r.emit("outside-click", k);
    }), S = JB(L), x = L_(f, L);
    lT([a, s], ([k, R]) => {
      k && R && L(), D.value = k, S.value = k, x.value = k;
    });
    const I = Ew(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = v.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), P = Ew(() => ({
      click: (k) => {
        r.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: I,
      triggerListeners: P,
      menuId: v,
      menu: s,
      menuWidth: c,
      root: o,
      calculatePosition: L,
      calculating: y
    };
  }
}), mT = ["data-ref-id"], _T = ["data-ref-id", "id"];
function gT(e, r, o, s, a, u) {
  return Iw(), xw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Aw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Iw(), xw("div", {
      key: 0,
      class: cT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: dT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Aw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, _T)) : fT("", !0)
  ], 8, mT);
}
var M_ = /* @__PURE__ */ hT(vT, [["render", gT], ["__scopeId", "data-v-f75af406"]]), $T = {
  mounted(e, r) {
    e.addEventListener("keydown", r.dir.contentKeyPressed);
  },
  unmounted(e, r) {
    e.removeEventListener("keydown", r.dir.contentKeyPressed);
  },
  contentKeyPressed(e) {
    const r = e.currentTarget.querySelectorAll("li a");
    let o = [].indexOf.call(r, e.target);
    if (!(o < 0)) {
      switch (e.keyCode) {
        case 40:
          o++, o === r.length && (o = 0);
          break;
        case 38:
          o--, o === -1 && (o = r.length - 1);
          break;
        default:
          return;
      }
      e.preventDefault(), r[o].focus();
    }
  }
};
const yT = window.Vue.openBlock, VT = window.Vue.createElementBlock, bT = window.Vue.createElementVNode;
var CT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ST = {}, kT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ET = /* @__PURE__ */ bT("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), IT = [
  ET
];
function xT(e, r) {
  return yT(), VT("svg", kT, IT);
}
var AT = /* @__PURE__ */ CT(ST, [["render", xT]]);
const BT = window.Vue.openBlock, TT = window.Vue.createElementBlock, Td = window.Vue.createElementVNode;
var LT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const MT = {}, DT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NT = /* @__PURE__ */ Td("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), OT = /* @__PURE__ */ Td("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), PT = /* @__PURE__ */ Td("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), RT = [
  NT,
  OT,
  PT
];
function FT(e, r) {
  return BT(), TT("svg", DT, RT);
}
var UT = /* @__PURE__ */ LT(MT, [["render", FT]]);
const WT = window.Vue.openBlock, qT = window.Vue.createElementBlock, HT = window.Vue.createElementVNode;
var zT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const YT = {}, GT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jT = /* @__PURE__ */ HT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ZT = [
  jT
];
function KT(e, r) {
  return WT(), qT("svg", GT, ZT);
}
var El = /* @__PURE__ */ zT(YT, [["render", KT]]);
const _s = function(e, r) {
  if (!e || !r)
    return;
  let o = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  o += parseInt(s.getPropertyValue("margin-top"), 10), o += parseInt(s.getPropertyValue("margin-bottom"), 10), r.scrollTop = e.offsetTop - r.getBoundingClientRect().height + o;
};
const ne = {
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
const JT = window.Vue.defineComponent, XT = window.Vue.openBlock, QT = window.Vue.createElementBlock, eL = window.Vue.normalizeClass, tL = window.Vue.pushScopeId, nL = window.Vue.popScopeId, dd = window.Vue.createElementVNode;
var rL = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const oL = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, iL = {
  click: (e) => !0
}, sL = JT({
  emits: iL,
  props: oL,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), D_ = (e) => (tL("data-v-07e020f5"), e = e(), nL(), e), aL = /* @__PURE__ */ D_(() => /* @__PURE__ */ dd("div", { class: "track" }, null, -1)), lL = /* @__PURE__ */ D_(() => /* @__PURE__ */ dd("div", { class: "switcher" }, [
  /* @__PURE__ */ dd("div", { class: "switch-circle" })
], -1)), uL = [
  aL,
  lL
];
function cL(e, r, o, s, a, u) {
  return XT(), QT("div", {
    class: eL(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, uL, 2);
}
var dL = /* @__PURE__ */ rL(sL, [["render", cL], ["__scopeId", "data-v-07e020f5"]]), fL = Object.defineProperty, hL = Object.defineProperties, pL = Object.getOwnPropertyDescriptors, Bw = Object.getOwnPropertySymbols, wL = Object.prototype.hasOwnProperty, vL = Object.prototype.propertyIsEnumerable, Tw = (e, r, o) => r in e ? fL(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Lw = (e, r) => {
  for (var o in r || (r = {}))
    wL.call(r, o) && Tw(e, o, r[o]);
  if (Bw)
    for (var o of Bw(r))
      vL.call(r, o) && Tw(e, o, r[o]);
  return e;
}, Mw = (e, r) => hL(e, pL(r));
const Ld = window.Vue.defineComponent, Rr = window.Vue.h, mL = window.Vue.openBlock, _L = window.Vue.createElementBlock, gL = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var N_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const $L = {
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
}, yL = Ld({
  inheritAttrs: !1,
  props: $L,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Rr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = Rr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Rr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Rr(yr);
    if (this.asLi)
      return Rr("li", Mw(Lw({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, o, s, a]);
    const u = Rr("a", Mw(Lw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, s, a]);
    return Rr("li", {}, [u]);
  }
});
var Vs = /* @__PURE__ */ N_(yL, [["__scopeId", "data-v-7c46b2b3"]]);
Ld({
  components: {
    FeatherListItem: Vs
  }
});
const VL = {}, bL = { class: "feather-list" };
function CL(e, r) {
  return mL(), _L("ul", bL, [
    gL(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Md = /* @__PURE__ */ N_(VL, [["render", CL], ["__scopeId", "data-v-941a1d50"]]);
const SL = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, kL = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
Ld({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: SL,
  props: kL,
  computed: {
    labelId() {
      return ue("switch-label");
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
      (e.keyCode === ne.SPACE || e.keyCode === ne.ENTER) && this.updateValue(), e.keyCode === ne.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: dL, FeatherListItem: Vs }
});
var EL = Object.defineProperty, IL = Object.defineProperties, xL = Object.getOwnPropertyDescriptors, Dw = Object.getOwnPropertySymbols, AL = Object.prototype.hasOwnProperty, BL = Object.prototype.propertyIsEnumerable, Nw = (e, r, o) => r in e ? EL(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Ht = (e, r) => {
  for (var o in r || (r = {}))
    AL.call(r, o) && Nw(e, o, r[o]);
  if (Dw)
    for (var o of Dw(r))
      BL.call(r, o) && Nw(e, o, r[o]);
  return e;
}, TL = (e, r) => IL(e, xL(r));
const vi = window.Vue.defineComponent, we = window.Vue.openBlock, Ye = window.Vue.createElementBlock, It = window.Vue.createElementVNode, mn = window.Vue.toDisplayString, on = window.Vue.createCommentVNode, qe = window.Vue.resolveComponent, rn = window.Vue.createBlock, ut = window.Vue.withCtx, ei = window.Vue.Fragment, ds = window.Vue.renderList, xt = window.Vue.createVNode, Dd = window.Vue.withModifiers, to = window.Vue.normalizeClass, fd = window.Vue.renderSlot, O_ = window.Vue.createTextVNode, LL = window.Vue.pushScopeId, ML = window.Vue.popScopeId, P_ = window.Vue.reactive, R_ = window.Vue.nextTick, _c = window.Vue.markRaw, gc = window.Vue.toRef, Ow = window.Vue.computed, DL = window.Vue.toRefs, No = window.Vue.ref, $c = window.Vue.mergeProps, Pw = window.Vue.toHandlers, Sa = window.Vue.withDirectives, ka = window.Vue.vShow;
var Il = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Nd = {
  query: {
    type: String
  }
}, ao = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const NL = vi({
  mixins: [],
  props: Ht(Ht({
    text: {
      type: String,
      required: !0
    }
  }, Il), Nd),
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
}), OL = {
  key: 0,
  class: "highlight"
}, PL = { key: 1 };
function RL(e, r, o, s, a, u) {
  return we(), Ye("span", null, [
    It("span", null, mn(e.beginning), 1),
    e.highlighted ? (we(), Ye("span", OL, mn(e.highlighted), 1)) : on("", !0),
    e.end ? (we(), Ye("span", PL, mn(e.end), 1)) : on("", !0)
  ]);
}
var F_ = /* @__PURE__ */ ao(NL, [["render", RL], ["__scopeId", "data-v-8abe2492"]]);
const FL = vi({
  emits: ["select", "deselect"],
  props: Ht(Ht({
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
  }, Il), Nd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        _s(r, o.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const r = this.value;
      return r && r.length ? r.some((s) => s[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    FeatherList: Md,
    FeatherListItem: Vs,
    Highlighter: F_
  }
}), UL = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function WL(e, r, o, s, a, u) {
  const c = qe("Highlighter"), f = qe("FeatherListItem"), w = qe("FeatherList");
  return we(), rn(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: ut(() => [
      (we(!0), Ye(ei, null, ds(e.items, (v, _) => (we(), Ye(ei, {
        key: v[e.textProp]
      }, [
        xt(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(_),
          selected: e.isSelected(v),
          onClick: Dd(($) => e.select(v), ["stop"])
        }, {
          default: ut(() => [
            xt(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (we(), Ye("span", UL, mn(e.newLabel), 1)) : on("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (we(), Ye("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : on("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var qL = /* @__PURE__ */ ao(FL, [["render", WL], ["__scopeId", "data-v-f623434a"]]);
const HL = vi({
  emits: ["select"],
  props: Ht(Ht({
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
  }, Il), Nd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        _s(r, o);
      });
    }
  },
  computed: {
    cls() {
      return this.config.map((e, r) => e.align && e.align.toLowerCase() === "right" ? `tr${r + 1}` : e.align && e.align.toLowerCase() === "center" ? `tc${r + 1}` : `tl${r + 1}`);
    }
  },
  methods: {
    isSelected(e) {
      const r = this.value;
      return this.value && this.value.length ? r.some((s) => s[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
    },
    isActive(e) {
      return this.activeRow === e;
    },
    isActiveCell(e, r) {
      return this.activeRow === e && this.activeCol === r;
    },
    getId(e, r) {
      return e === this.activeRow && this.activeCol === r ? this.activeId : "";
    },
    select(e) {
      this.$emit("select", e);
    }
  },
  components: {
    Highlighter: F_
  }
}), zL = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, YL = ["aria-multiselectable"], GL = { role: "row" }, jL = ["aria-selected", "onClick"], ZL = ["id", "aria-selected"], KL = { key: 1 };
function JL(e, r, o, s, a, u) {
  const c = qe("Highlighter");
  return we(), Ye("div", zL, [
    It("table", {
      class: to(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      It("thead", null, [
        It("tr", GL, [
          (we(!0), Ye(ei, null, ds(e.config, (f) => (we(), Ye("th", {
            key: f.title
          }, mn(f.title), 1))), 128))
        ])
      ]),
      It("tbody", null, [
        (we(!0), Ye(ei, null, ds(e.items, (f, w) => (we(), Ye("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: to({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: Dd((v) => e.select(f), ["stop"])
        }, [
          (we(!0), Ye(ei, null, ds(e.config, (v, _) => (we(), Ye("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: to({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (we(), rn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (we(), Ye("p", KL, mn(f[v.prop]), 1))
          ], 10, ZL))), 128))
        ], 10, jL))), 128))
      ])
    ], 10, YL)
  ], 512);
}
var XL = /* @__PURE__ */ ao(HL, [["render", JL], ["__scopeId", "data-v-58c88fd1"]]);
const QL = vi({
  components: {
    FeatherList: Md,
    FeatherListItem: Vs
  }
});
function eM(e, r, o, s, a, u) {
  const c = qe("FeatherListItem"), f = qe("FeatherList");
  return we(), rn(f, { class: "result-list" }, {
    default: ut(() => [
      xt(c, { "as-li": "" }, {
        default: ut(() => [
          fd(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var tM = /* @__PURE__ */ ao(QL, [["render", eM], ["__scopeId", "data-v-06b752c6"]]);
const nM = vi({
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
    FeatherIcon: j,
    Cancel: ui,
    BaseChip: Cl,
    BaseChipLabel: Sl,
    BaseChipPreIcon: kl
  }
});
function rM(e, r, o, s, a, u) {
  const c = qe("FeatherIcon"), f = qe("BaseChipPreIcon"), w = qe("BaseChipLabel"), v = qe("Cancel"), _ = qe("BaseChip");
  return we(), rn(_, {
    class: to(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: ut(() => [
      e.showPreIcon ? (we(), rn(f, { key: 0 }, {
        default: ut(() => {
          var $, y;
          return [
            xt(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : on("", !0),
      xt(w, null, {
        default: ut(() => [
          O_(mn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? on("", !0) : (we(), Ye("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = Dd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        xt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: ut(() => [
            xt(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var oM = /* @__PURE__ */ ao(nM, [["render", rM], ["__scopeId", "data-v-e0fc6ac0"]]);
const iM = {}, sM = (e) => (LL("data-v-aa720e06"), e = e(), ML(), e), aM = { class: "spinner-container" }, lM = /* @__PURE__ */ sM(() => /* @__PURE__ */ It("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ It("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), uM = [
  lM
];
function cM(e, r) {
  return we(), Ye("div", aM, uM);
}
var dM = /* @__PURE__ */ ao(iM, [["render", cM], ["__scopeId", "data-v-aa720e06"]]), xl = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(xl || {});
const U_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, fM = Ht(Ht(Ht({
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
    default: (e, r, o) => e[o.textProp].toString().toLowerCase() === r.toLowerCase()
  },
  type: {
    type: String,
    required: !0,
    validator: (e) => !!xl[e]
  },
  labels: {
    type: Object,
    default: () => U_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Il), pi), yl), hM = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, pM = (e, r, o, s) => {
  if (o.toLowerCase() === xl.multi) {
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
        const w = u.value ? [...u.value, f] : [f];
        s("update:modelValue", w), c(w);
      },
      removeItem(f) {
        const w = u.value.findIndex((v) => {
          if (f[e.textProp.value] === v[e.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const v = u.value.slice(0);
          v.splice(w, 1), s("update:modelValue", v), c(v), e.input.value.focus();
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
      r.active.row = -1, e.forceCloseResults.value = !0, u && u._new && e.allowNew ? s("new", u._new) : s("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (r.active.row > -1) {
        const u = e.internalResults.value[r.active.row];
        u && u._new && e.allowNew ? s("new", u._new) : s("update:modelValue", u);
      }
    }
  };
}, wM = () => {
  const e = P_({
    row: -1
  }), r = (u) => {
    R_(() => {
      e.row = u;
    });
  }, o = (u, c) => {
    if (u.keyCode === ne.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), r(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), r(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ne.UP) {
      if (u.preventDefault(), e.row === 0)
        s();
      else if (e.row > 0) {
        const f = e.row;
        s(), r(f - 1);
      }
      return !0;
    }
    return !1;
  }, s = () => {
    e.row = -1;
  };
  return { reset: s, handleKeyPress: o, active: e, first: () => {
    e.row = 0;
  } };
}, vM = (e) => {
  const r = P_({
    row: -1,
    col: -1
  }), o = (c, f) => {
    R_(() => {
      r.col = f, r.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === ne.DOWN) {
      if (c.preventDefault(), r.row === -1)
        a(), o(0, 0);
      else if (r.row + 1 <= f.length - 1) {
        const w = r.row, v = r.col;
        a(), o(w + 1, v);
      }
      return !0;
    }
    if (c.keyCode === ne.UP) {
      if (c.preventDefault(), r.row === 0)
        a();
      else if (r.row > 0) {
        const w = r.row, v = r.col;
        a(), o(w - 1, v);
      }
      return !0;
    }
    if (c.keyCode === ne.RIGHT && r.row !== -1) {
      if (c.preventDefault(), r.col + 1 <= e.length - 1) {
        const w = r.col, v = r.row;
        a(), o(v, w + 1);
      } else if (r.col <= e.length - 1 && r.row + 1 <= f.length - 1) {
        const w = r.row;
        a(), o(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === ne.LEFT && r.row !== -1) {
      if (c.preventDefault(), r.col === 0 && r.row === 0)
        return !0;
      if (r.col === 0 && r.row > 0) {
        const w = r.row;
        a(), o(w - 1, e.length - 1);
      } else if (r.col > 0) {
        const w = r.col, v = r.row;
        a(), o(v, w - 1);
      }
      return !0;
    }
    if (c.keyCode === ne.END && r.row !== -1) {
      c.preventDefault();
      const w = r.row;
      return a(), o(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === ne.HOME && r.row !== -1) {
      c.preventDefault();
      const w = r.row;
      return a(), o(c.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, a = () => {
    r.row = -1, r.col = -1;
  };
  return { reset: a, handleKeyPress: s, active: r, first: () => {
    a(), o(0, 0);
  } };
}, mM = vi({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: hM,
  props: fM,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== xl.multi;
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
      return ue("result-item");
    },
    minCharWarningId() {
      return ue("min-char-warning");
    },
    subTextId() {
      return ue("feather-autocomplete-description");
    },
    resultsId() {
      return ue("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ue("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return _c(AT);
    },
    minCharIcon() {
      return _c(UT);
    },
    dropdownIcon() {
      return _c(El);
    },
    inputAttrs() {
      const e = [this.selectedDescriptionId, this.subTextId].filter(Boolean);
      let r = "";
      return this.activeChipIndex > -1 && (r = this.activeChipId), this.active.row > -1 && this.showResults && (r = this.resultItemId), this.minChar && e.push(this.minCharWarningId), {
        id: this.inputId,
        "aria-describedby": e.join(" "),
        "aria-busy": this.loading,
        "aria-activedescendant": r,
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
      return this.modelValue && this.modelValue.length ? this.modelValue.map((r) => r[this.textProp]).join(", ") : "";
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
        _s(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          _s(this.inputRef, this.scrollContainer);
        }), this.strategy.handleModelValueChange(e), this.hasFocus || this.adjustTextArea();
      },
      immediate: !0
    },
    results(e) {
      e && e.length > 0 && this.selectFirst(), this.forceCloseResults = !1, e && e.length === 0 && this.query && this.query.length > 0 && !this.allowNewEnabled && this.setAlert(this.noResultsLabel), this.allowNewEnabled && this.query.length && (e.some((o) => this.newMatcher(o, this.query, this)) || (e = [
        {
          [this.textProp]: this.query,
          _new: this.query
        },
        ...e
      ])), this.internalResults = e;
    },
    showResults(e) {
      const r = this.$refs.menu;
      e && r.calculatePosition && r.calculatePosition();
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
      return this.activeChipId = ue("active-chip"), this.activeChipId;
    },
    setAlert(e) {
      const r = this.$refs.alert;
      r.textContent = e, setTimeout(() => {
        r.textContent = "";
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
      const o = e.target.value;
      o !== void 0 && (oo(this.typingTimeout), this.typingTimeout = ro(() => {
        this.query = o, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const r = () => {
        this.activeChipIndex = -1;
      }, o = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ne.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        r(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ne.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), r();
        return;
      }
      if (e.keyCode === ne.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === ne.ENTER || e.keyCode === ne.SPACE || e.keyCode === ne.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === ne.ESCAPE) {
        this.forceCloseResults = !0, o(), r();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === ne.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (o(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (o(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ne.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (o(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (o(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ne.DELETE || e.keyCode === ne.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), o(), r());
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
        const r = e.getBoundingClientRect().width, o = e.parentElement;
        e.scrollWidth <= e.clientWidth && o && r < o.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
          e.style.height = `${e.scrollHeight}px`;
        });
      }));
    }
  },
  setup(e, r) {
    const o = gl(gc(e, "labels"), U_);
    wi(e), Vl(e);
    let s;
    e.gridConfig ? s = vM(e.gridConfig) : s = wM();
    const a = gc(e, "id"), u = Ow(() => a.value ? a.value : ue("feather-autocomplete-input")), { validate: c } = fi(u, gc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = DL(e), T = No(!1), L = No(!1), N = No(!1), D = No(""), S = No([]), x = No(), I = Ow(() => x.value), P = () => {
      T.value && !L.value && (D.value && D.value.length >= y.value && r.emit("search", D.value), y.value <= 0 && r.emit("search", D.value || ""), S.value = [], s.reset());
    }, k = pM({
      selectionLimit: f,
      selectionLimitReached: L,
      modelValue: w,
      textProp: v,
      allowNew: _,
      forceCloseResults: N,
      query: D,
      internalResults: S,
      input: I,
      emitSearch: P
    }, s, $.value, r.emit);
    return TL(Ht(Ht({}, o), hi(r.attrs)), {
      query: D,
      internalResults: S,
      selectionLimitReached: L,
      forceCloseResults: N,
      hasFocus: T,
      strategy: k,
      emitSearch: P,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: x,
      incomingId: a,
      inputRef: I,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: $l,
    InputSubText: di,
    AutocompleteResults: qL,
    AutocompleteResultsGrid: XL,
    Chip: oM,
    MenuMessage: tM,
    FeatherIcon: j,
    FeatherMenu: M_,
    Spinner: dM
  }
}), _M = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, gM = ["id"], $M = { "data-ref-id": "feather-autocomplete-no-results" }, yM = { "data-ref-id": "feather-autocomplete-selection-limit" }, VM = { "data-ref-id": "feather-autocomplete-min-char" };
function bM(e, r, o, s, a, u) {
  const c = qe("FeatherIcon"), f = qe("Chip"), w = qe("InputWrapper"), v = qe("AutocompleteResults"), _ = qe("AutocompleteResultsGrid"), $ = qe("MenuMessage"), y = qe("Spinner"), T = qe("FeatherMenu"), L = qe("InputSubText");
  return we(), Ye("div", $c(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    xt(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: to(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: ut(({ attrs: N, on: D }) => [
        xt(w, $c(Ht(Ht({}, N), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Pw(D), { ref: "scroll" }), {
          pre: ut(() => [
            fd(e.$slots, "pre", {}, () => [
              xt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: ut(() => [
            xt(c, {
              icon: e.dropdownIcon,
              class: to(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: ut(() => [
            It("div", {
              class: to(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              It("div", _M, null, 512),
              It("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, mn(e.selectedDescribedByText), 9, gM),
              (we(!0), Ye(ei, null, ds(e.modelValueList, (S, x) => Sa((we(), rn(f, {
                key: S[e.textProp],
                role: "button",
                id: x === e.activeChipIndex ? e.activeChipId : null,
                focused: x === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (I) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [ka, !e.singleSelect]
              ])), 128)),
              It("textarea", $c(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Pw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: ut(() => [
        e.gridConfig ? on("", !0) : Sa((we(), rn(v, {
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
          [ka, e.showResults]
        ]),
        e.gridConfig ? Sa((we(), rn(_, {
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
          [ka, e.showResults]
        ]) : on("", !0),
        e.showNoResults ? (we(), rn($, { key: 2 }, {
          default: ut(() => [
            It("span", $M, mn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : on("", !0),
        e.showSelectionLimit ? (we(), rn($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: ut(() => [
            xt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            It("span", yM, mn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : on("", !0),
        e.minChar ? Sa((we(), rn($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: ut(() => [
            xt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            It("span", VM, [
              fd(e.$slots, "min-char", {}, () => [
                O_(mn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [ka, e.showMinCharWarning]
        ]) : on("", !0),
        e.showLoading ? (we(), rn(y, { key: 5 })) : on("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    xt(L, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var CM = /* @__PURE__ */ ao(mM, [["render", bM], ["__scopeId", "data-v-43a7e951"]]);
var SM = Object.defineProperty, kM = Object.defineProperties, EM = Object.getOwnPropertyDescriptors, Rw = Object.getOwnPropertySymbols, IM = Object.prototype.hasOwnProperty, xM = Object.prototype.propertyIsEnumerable, Fw = (e, r, o) => r in e ? SM(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Za = (e, r) => {
  for (var o in r || (r = {}))
    IM.call(r, o) && Fw(e, o, r[o]);
  if (Rw)
    for (var o of Rw(r))
      xM.call(r, o) && Fw(e, o, r[o]);
  return e;
}, W_ = (e, r) => kM(e, EM(r));
const q_ = window.Vue.defineComponent, AM = window.Vue.ref, fs = window.Vue.computed, BM = window.Vue.reactive, Uw = window.Vue.watch, yc = window.Vue.inject, H_ = window.Vue.resolveComponent, hd = window.Vue.openBlock, z_ = window.Vue.createElementBlock, $r = window.Vue.createElementVNode, TM = window.Vue.createBlock, LM = window.Vue.createCommentVNode, Y_ = window.Vue.renderSlot, MM = window.Vue.pushScopeId, DM = window.Vue.popScopeId, Vc = window.Vue.toRef, Ww = window.Vue.mergeProps, NM = window.Vue.toDisplayString, OM = window.Vue.createVNode;
var G_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const PM = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, RM = q_({
  props: PM,
  setup(e) {
    const r = AM(), o = () => {
      r.value.focus();
    }, s = fs(() => ue("feather-radio-button")), a = BM({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = fs(() => ue("radio-label-id")), c = fs(() => a.first || a.checked ? 0 : -1);
    Uw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Uw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = yc("register", ($) => {
    }), w = yc("blur", ($) => {
    }), v = yc("select", ($) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: w,
      click: () => {
        v(a);
      },
      input: r,
      id: s
    };
  },
  components: {
    FeatherRipple: yr
  }
}), FM = (e) => (MM("data-v-24790cf0"), e = e(), DM(), e), UM = { class: "layout-container" }, WM = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], qM = { class: "radio hover focus" }, HM = /* @__PURE__ */ FM(() => /* @__PURE__ */ $r("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ $r("svg", { class: "dot" }, [
    /* @__PURE__ */ $r("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), zM = ["id"];
function YM(e, r, o, s, a, u) {
  const c = H_("feather-ripple");
  return hd(), z_("div", UM, [
    $r("div", {
      class: "feather-radio",
      role: "radio",
      ref: "input",
      id: e.id,
      "aria-checked": e.vm.checked ? "true" : "false",
      "aria-disabled": e.vm.disabled ? "true" : "false",
      "aria-labelledby": e.labelId,
      tabindex: e.tabindex,
      onClick: r[0] || (r[0] = (...f) => e.click && e.click(...f)),
      onBlur: r[1] || (r[1] = (...f) => e.blur && e.blur(...f)),
      "data-ref-id": "feather-radio"
    }, [
      $r("div", qM, [
        HM,
        e.vm.disabled ? LM("", !0) : (hd(), TM(c, {
          key: 0,
          center: ""
        }))
      ]),
      $r("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        Y_(e.$slots, "default", {}, void 0, !0)
      ], 8, zM)
    ], 40, WM)
  ]);
}
var pd = /* @__PURE__ */ G_(RM, [["render", YM], ["__scopeId", "data-v-24790cf0"]]);
const GM = W_(Za({}, pi), {
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
}), jM = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, ZM = q_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: GM,
  emits: jM,
  setup(e, r) {
    wi(e);
    const o = Vc(e, "error"), s = Vc(e, "modelValue"), a = fs(() => ue("feather-input-description")), u = fs(() => {
      const c = W_(Za({}, r.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!o.value), c;
    });
    return Za(Za({
      descriptionId: a,
      attrs: u
    }, I_(s, r.emit, e.label, e.schema, Vc(e, "error"))), hi(r.attrs));
  },
  components: {
    InputSubText: di
  }
}), KM = ["for"], JM = ["id"];
function XM(e, r, o, s, a, u) {
  const c = H_("InputSubText");
  return hd(), z_("div", Ww(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    $r("label", {
      for: e.groupId,
      class: "group-label"
    }, NM(e.label), 9, KM),
    $r("div", Ww(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      Y_(e.$slots, "default", {}, void 0, !0)
    ], 16, JM),
    OM(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var j_ = /* @__PURE__ */ G_(ZM, [["render", XM], ["__scopeId", "data-v-6775aeb9"]]);
const QM = window.Vue.defineComponent, eD = window.Vue.renderList, tD = window.Vue.Fragment, qw = window.Vue.openBlock, nD = window.Vue.createElementBlock, rD = window.Vue.toDisplayString, oD = window.Vue.createTextVNode, Hw = window.Vue.unref, zw = window.Vue.withCtx, iD = window.Vue.createVNode, sD = window.Vue.createBlock, aD = window.Vue.watch, lD = window.Vue.ref, uD = /* @__PURE__ */ QM({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: r }) {
    const o = e, s = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], a = lD(o.preSelected || s[0].id);
    return aD(o, () => {
      o.preSelected && (a.value = o.preSelected);
    }), (u, c) => (qw(), sD(Hw(j_), {
      label: "",
      modelValue: a.value,
      "onUpdate:modelValue": [
        c[0] || (c[0] = (f) => a.value = f),
        c[1] || (c[1] = (f) => r("filter-date-selected", a.value))
      ],
      vertical: "",
      hodeLabel: "",
      class: "radio-dates"
    }, {
      default: zw(() => [
        (qw(), nD(tD, null, eD(s, (f) => iD(Hw(pd), {
          value: f.id,
          key: f.id
        }, {
          default: zw(() => [
            oD(rD(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const cD = /* @__PURE__ */ de(uD, [["__scopeId", "data-v-0363302c"]]);
var dD = Object.defineProperty, fD = Object.defineProperties, hD = Object.getOwnPropertyDescriptors, Yw = Object.getOwnPropertySymbols, pD = Object.prototype.hasOwnProperty, wD = Object.prototype.propertyIsEnumerable, Gw = (e, r, o) => r in e ? dD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, qi = (e, r) => {
  for (var o in r || (r = {}))
    pD.call(r, o) && Gw(e, o, r[o]);
  if (Yw)
    for (var o of Yw(r))
      wD.call(r, o) && Gw(e, o, r[o]);
  return e;
}, jw = (e, r) => fD(e, hD(r));
const vD = window.Vue.defineComponent, mD = window.Vue.inject, Hi = window.Vue.h;
var _D = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const gD = {
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
}, $D = vD({
  inheritAttrs: !1,
  props: gD,
  setup() {
    return { hasTooltip: mD("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, r = this.asAnchor ? "a" : "button", o = {}, s = qi({}, this.$attrs);
    o.attrs = s || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    o.class = [this.$attrs.class].concat(a), this.$slots.icon && o.class.push("has-icon");
    let u = Hi(yr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), Hi(r, jw(qi(qi({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Hi(yr, { center: !0 })
      ]);
    }
    const c = Hi("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Hi(r, jw(qi(qi({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ae = /* @__PURE__ */ _D($D, [["__scopeId", "data-v-702d1074"]]);
const yD = window.Vue.openBlock, VD = window.Vue.createElementBlock, bD = window.Vue.createElementVNode;
var CD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const SD = {}, kD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ED = /* @__PURE__ */ bD("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), ID = [
  ED
];
function xD(e, r) {
  return yD(), VD("svg", kD, ID);
}
var AD = /* @__PURE__ */ CD(SD, [["render", xD]]);
const BD = window.Vue.openBlock, TD = window.Vue.createElementBlock, LD = window.Vue.createElementVNode;
var MD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const DD = {}, ND = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, OD = /* @__PURE__ */ LD("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), PD = [
  OD
];
function RD(e, r) {
  return BD(), TD("svg", ND, PD);
}
var FD = /* @__PURE__ */ MD(DD, [["render", RD]]);
const UD = window.Vue.openBlock, WD = window.Vue.createElementBlock, qD = window.Vue.createElementVNode;
var HD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const zD = {}, YD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GD = /* @__PURE__ */ qD("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), jD = [
  GD
];
function ZD(e, r) {
  return UD(), WD("svg", YD, jD);
}
var Z_ = /* @__PURE__ */ HD(zD, [["render", ZD]]);
const KD = window.Vue.defineComponent, bn = window.Vue.unref, Fr = window.Vue.createVNode, Zw = window.Vue.toDisplayString, Wn = window.Vue.createElementVNode, K_ = window.Vue.createTextVNode, Kw = window.Vue.openBlock, Jw = window.Vue.createElementBlock, JD = window.Vue.createCommentVNode, XD = window.Vue.withCtx, QD = window.Vue.vShow, eN = window.Vue.normalizeClass, tN = window.Vue.withDirectives, nN = window.Vue.Fragment, rN = window.Vue.pushScopeId, oN = window.Vue.popScopeId, J_ = (e) => (rN("data-v-b1dc2670"), e = e(), oN(), e), iN = /* @__PURE__ */ K_(" Filters "), sN = { class: "count" }, aN = { class: "results" }, lN = { class: "total" }, uN = /* @__PURE__ */ K_(" Reset "), cN = /* @__PURE__ */ J_(() => /* @__PURE__ */ Wn("div", { class: "title" }, "By Severities:", -1)), dN = /* @__PURE__ */ J_(() => /* @__PURE__ */ Wn("div", { class: "title" }, "By Start Date:", -1)), Ur = window.Vue.ref, fN = window.Vue.reactive, hN = window.Vue.markRaw, Xw = window.Vue.watch, pN = /* @__PURE__ */ KD({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: r }) {
    const o = e, s = hN({
      FilterAlt: AD,
      ExpandLess: FD,
      ExpandMore: El,
      Refresh: Z_
    }), a = _n(), u = Ur(o.isOpen), c = Ur(["all"]), f = Ur(1), w = Ur(o.list), v = Ur(!1), _ = Ur(0), $ = Ur(null), y = fN({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var R, O;
      o.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((R = a.filters) == null ? void 0 : R.severities) && !((O = a.filters) != null && O.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, I());
    }, L = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Xw(
      () => a.nodes,
      () => {
        L();
      }
    ), Xw(o, () => {
      w.value = o.list, T();
    });
    const N = (R) => {
      c.value = R, I();
    }, D = (R) => {
      f.value = R, I();
    }, S = (R) => {
      if (!R)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((O) => O.label.toLowerCase().indexOf(R) > -1).map((O) => ({
        _text: O.label,
        id: O.id
      })), v.value = !1;
    }, x = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, r("filtered-list", o.list), o.isOpen || (u.value = !1), o.saveFilters && (a.filters = null), w.value = o.list;
    }, I = () => {
      _.value = 0;
      let R = o.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, o.isSituation ? R = R.map((O) => {
        if (O.relatedAlarms.filter(
          (he) => {
            var $e;
            return he.nodeLabel === (($e = y.nodeSelectedValue) == null ? void 0 : $e._text);
          }
        ).length > 0)
          return O;
      }).filter((O) => O) : R = R.filter(
        (O) => {
          var z;
          return O.nodeLabel === ((z = y.nodeSelectedValue) == null ? void 0 : z._text);
        }
      )), c.value.includes("all") || (_.value++, R = R.filter(
        (O) => c.value.includes(O.severity)
      )), f.value !== 1 && (_.value++, R = JE(
        f.value,
        R
      )), w.value = R, o.saveFilters && P(), r("filtered-list", R);
    }, P = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, k = () => {
      u.value = !u.value;
    };
    return (R, O) => (Kw(), Jw(nN, null, [
      o.isOpen ? JD("", !0) : (Kw(), Jw("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        Wn("div", null, [
          Fr(bn(j), {
            icon: bn(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          iN,
          Wn("span", sN, Zw(_.value), 1)
        ]),
        Fr(bn(j), {
          icon: u.value ? bn(s).ExpandLess : bn(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      tN(Wn("div", {
        class: eN(["filters", { collapsed: !o.isOpen }])
      }, [
        Wn("div", aN, [
          Wn("div", lN, "Results: " + Zw(bn(w).length), 1),
          Fr(bn(ae), {
            class: "btn-reset",
            onClick: x
          }, {
            default: XD(() => [
              Fr(bn(j), {
                icon: bn(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              uN
            ]),
            _: 1
          })
        ]),
        Wn("div", null, [
          Fr(bn(CM), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              O[0] || (O[0] = (z) => y.nodeSelectedValue = z),
              I
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          cN,
          Fr(YB, {
            alarms: o.list,
            onSelectedOption: N,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Wn("div", null, [
            dN,
            Fr(cD, {
              onFilterDateSelected: D,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [QD, u.value]
      ])
    ], 64));
  }
});
const mi = /* @__PURE__ */ de(pN, [["__scopeId", "data-v-b1dc2670"]]), wN = window.Vue.openBlock, vN = window.Vue.createElementBlock, mN = window.Vue.createElementVNode;
var _N = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const gN = {}, $N = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yN = /* @__PURE__ */ mN("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), VN = [
  yN
];
function bN(e, r) {
  return wN(), vN("svg", $N, VN);
}
var Al = /* @__PURE__ */ _N(gN, [["render", bN]]);
const CN = window.Vue.openBlock, SN = window.Vue.createElementBlock, X_ = window.Vue.createElementVNode;
var kN = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const EN = {}, IN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xN = /* @__PURE__ */ X_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), AN = /* @__PURE__ */ X_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), BN = [
  xN,
  AN
];
function TN(e, r) {
  return CN(), SN("svg", IN, BN);
}
var LN = /* @__PURE__ */ kN(EN, [["render", TN]]);
const MN = window.Vue.openBlock, DN = window.Vue.createElementBlock, NN = window.Vue.createElementVNode;
var ON = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const PN = {}, RN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FN = /* @__PURE__ */ NN("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), UN = [
  FN
];
function WN(e, r) {
  return MN(), DN("svg", RN, UN);
}
var qN = /* @__PURE__ */ ON(PN, [["render", WN]]);
const Cr = () => window.VRouter || Zg;
const HN = window.Vue.openBlock, zN = window.Vue.createElementBlock, YN = window.Vue.pushScopeId, GN = window.Vue.popScopeId, Qw = window.Vue.createElementVNode;
var jN = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ZN = {}, KN = (e) => (YN("data-v-2263be39"), e = e(), GN(), e), JN = { class: "spinner-container" }, XN = /* @__PURE__ */ KN(() => /* @__PURE__ */ Qw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Qw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), QN = [
  XN
];
function e3(e, r) {
  return HN(), zN("div", JN, QN);
}
var ti = /* @__PURE__ */ jN(ZN, [["render", e3], ["__scopeId", "data-v-2263be39"]]);
const t3 = window.Vue.defineComponent, bc = window.Vue.unref, n3 = window.Vue.createVNode, r3 = window.Vue.createElementVNode, o3 = window.Vue.withCtx, i3 = window.Vue.openBlock, s3 = window.Vue.createBlock, a3 = window.Vue.pushScopeId, l3 = window.Vue.popScopeId, u3 = (e) => (a3("data-v-fba500de"), e = e(), l3(), e), c3 = /* @__PURE__ */ u3(() => /* @__PURE__ */ r3("span", null, "New Situation", -1)), d3 = window.Vue.markRaw, f3 = /* @__PURE__ */ t3({
  __name: "NewSituationBtn",
  setup(e) {
    const r = Cr(), o = d3({
      Add: Al
    }), s = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (a, u) => (i3(), s3(bc(ae), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: o3(() => [
        n3(bc(j), {
          icon: bc(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        c3
      ]),
      _: 1
    }));
  }
});
const Q_ = /* @__PURE__ */ de(f3, [["__scopeId", "data-v-fba500de"]]), h3 = "/whoami", p3 = async () => {
  try {
    const e = await rt.get(h3);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, w3 = window.Pinia.defineStore, v3 = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, io = w3("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await p3();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await eI();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, r, o) {
      const s = {
        ...v3,
        ...o,
        distanceMeasureName: r ? tt.HELLINGER_OPTION : tt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return r || (s.hellingerW = null, s.hellingerBias = null), await tI(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await nI();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const r = await rI(e);
      return r ? (this.llmConfig = r, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const r = await sI(e);
      return r && (this.llmUsage = r), r;
    }
  }
}), m3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", _3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", g3 = window.Vue.defineComponent, Oo = window.Vue.unref, Po = window.Vue.openBlock, Ro = window.Vue.createElementBlock, $3 = window.Vue.createCommentVNode, eg = window.Vue.createTextVNode, ev = window.Vue.Fragment, tg = window.Vue.createElementVNode, y3 = window.Vue.pushScopeId, V3 = window.Vue.popScopeId, b3 = (e) => (y3("data-v-b87e4e5c"), e = e(), V3(), e), C3 = ["src"], S3 = { class: "engine" }, k3 = /* @__PURE__ */ eg(" ENGINE "), E3 = {
  key: 0,
  class: "type"
}, I3 = {
  key: 1,
  class: "type"
}, x3 = /* @__PURE__ */ eg(" ENGINE "), A3 = /* @__PURE__ */ b3(() => /* @__PURE__ */ tg("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), tv = window.Vue.computed, B3 = /* @__PURE__ */ g3({
  __name: "ConfigurationInfo",
  setup(e) {
    const r = Cr(), o = io(), s = () => {
      r.push({
        name: "settings"
      });
    }, a = tv(() => {
      var c;
      return !!((c = o.engineInfo) != null && c.engineName);
    }), u = tv(
      () => {
        var c;
        return ((c = o.engineInfo) == null ? void 0 : c.engineName) == tt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (Po(), Ro("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      Oo(a) ? (Po(), Ro("img", {
        key: 0,
        src: Oo(u) ? Oo(_3) : Oo(m3),
        class: "icon-type"
      }, null, 8, C3)) : $3("", !0),
      tg("div", S3, [
        Oo(a) ? (Po(), Ro(ev, { key: 0 }, [
          k3,
          Oo(u) ? (Po(), Ro("div", E3, "CLUSTERING")) : (Po(), Ro("div", I3, "DEEP LEARNING"))
        ], 64)) : (Po(), Ro(ev, { key: 1 }, [
          x3,
          A3
        ], 64))
      ])
    ]));
  }
});
const T3 = /* @__PURE__ */ de(B3, [["__scopeId", "data-v-b87e4e5c"]]);
const L3 = {}, M3 = window.Vue.openBlock, D3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const N3 = { class: "empty" };
function O3(e, r) {
  return M3(), D3("div", N3, "No results found.");
}
const _i = /* @__PURE__ */ de(L3, [["render", O3], ["__scopeId", "data-v-725433ac"]]), P3 = window.Vue.defineComponent, Cn = window.Vue.createElementVNode, zi = window.Vue.unref, Wr = window.Vue.createVNode, R3 = window.Vue.withCtx, Ea = window.Vue.toDisplayString, Fn = window.Vue.openBlock, qr = window.Vue.createElementBlock, nv = window.Vue.createCommentVNode, rv = window.Vue.createBlock, F3 = window.Vue.renderList, U3 = window.Vue.Fragment, W3 = window.Vue.pushScopeId, q3 = window.Vue.popScopeId, ng = (e) => (W3("data-v-2675e2f8"), e = e(), q3(), e), H3 = { class: "list-main" }, z3 = { class: "header" }, Y3 = /* @__PURE__ */ ng(() => /* @__PURE__ */ Cn("h2", null, "Situation List", -1)), G3 = { class: "link-btns" }, j3 = /* @__PURE__ */ ng(() => /* @__PURE__ */ Cn("span", null, "View Unassociated Alarms", -1)), Z3 = { class: "content" }, K3 = { class: "left-filters" }, J3 = { class: "container" }, X3 = { class: "autocomplete" }, Q3 = { key: 0 }, eO = { key: 1 }, tO = { key: 0 }, nO = { class: "situation-list" }, rO = {
  key: 0,
  class: "footer-pager"
}, oO = window.Vue.reactive, Ia = window.Vue.ref, iO = window.Vue.watch, sO = window.Vue.markRaw, aO = /* @__PURE__ */ P3({
  __name: "SituationList",
  setup(e) {
    const r = sO({
      Add: Al,
      View: LN,
      Settings: qN
    }), o = Cr(), s = _n(), a = io();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = oO({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = Ia(!0), w = Ia(0), v = Ia(1), _ = Ia(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    iO(
      () => s.situations,
      () => {
        f.value = !1, $(), N(s.situations);
      }
    );
    const y = (S) => {
      w.value = S, c.situations = c.allSituations[w.value];
    }, T = (S) => {
      o.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, L = () => {
      o.push({
        name: "viewUnassignedAlarms"
      });
    }, N = (S) => {
      _.value = S.length, c.allSituations = ge.exports.chunk(S, u);
      const x = S.map((I) => I.id);
      s.filteredSituations = x, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, D = (S) => {
      S.length ? N(S) : c.situations = [];
    };
    return (S, x) => {
      var I;
      return Fn(), qr("div", H3, [
        Cn("div", z3, [
          Y3,
          Cn("div", G3, [
            Wr(zi(ae), {
              class: "view-situation-btn",
              onClick: x[0] || (x[0] = () => L())
            }, {
              default: R3(() => [
                Wr(zi(j), {
                  icon: zi(r).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                j3
              ]),
              _: 1
            }),
            Wr(Q_),
            Wr(T3)
          ])
        ]),
        Cn("div", Z3, [
          Cn("div", K3, [
            Wr(mi, {
              list: zi(s).situations,
              onFilteredList: D,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Cn("div", J3, [
            Cn("div", X3, [
              c.situations && c.situations.length ? (Fn(), qr("div", Q3, " Result: " + Ea((I = c.situations) == null ? void 0 : I.length) + " of " + Ea(_.value), 1)) : nv("", !0)
            ]),
            f.value ? (Fn(), rv(zi(ti), {
              key: 0,
              class: "spinner"
            })) : (Fn(), qr("div", eO, [
              c.situations && c.situations.length ? (Fn(), qr("div", tO, [
                Cn("div", nO, [
                  (Fn(!0), qr(U3, null, F3(c.situations, (P) => (Fn(), qr("div", {
                    class: "card",
                    key: P.id
                  }, [
                    Wr(b_, {
                      onClick: () => T(P.id),
                      "situation-info": P
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Fn(), qr("div", rO, [
                  Cn("div", null, "Page: " + Ea(w.value + 1) + " of " + Ea(v.value), 1),
                  Wr(Vx, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : nv("", !0)
              ])) : (Fn(), rv(_i, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const lO = /* @__PURE__ */ de(aO, [["__scopeId", "data-v-2675e2f8"]]);
const xa = window.Vue.ref, uO = window.Vue.inject, cO = window.Vue.computed, dO = window.Vue.onMounted, rg = {
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
}, og = (e) => {
  const r = xa(!1), o = xa(), s = xa(e.controls), a = xa(e.id), u = () => {
    o.value && o.value.focus();
  }, c = uO("registerTab");
  dO(() => {
    if (o.value && c) {
      const w = o.value.parentElement, v = w && w.parentElement ? w.parentElement : void 0, _ = Array.from(v ? v.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), $ = w ? _.indexOf(w) : -1;
      c({
        el: o.value,
        focus: u,
        disabled: e.disabled,
        selected: r,
        id: a,
        controls: s,
        index: $
      });
    }
  });
  const f = cO(() => ({
    role: "tab",
    ref: "tab",
    tabindex: r.value ? 0 : -1,
    id: a.value,
    "aria-selected": r.value,
    "aria-controls": s.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: r,
    attrs: f,
    tab: o
  };
}, ov = window.Vue.ref, fO = window.Vue.toRef, hO = window.Vue.watch, iv = window.Vue.provide, ig = {
  prop: "modelValue",
  event: "update:modelValue"
}, sg = {
  "update:modelValue": (e) => !0
}, ag = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, lg = (e, r) => {
  const o = fO(e, "modelValue"), s = ov(e.modelValue), a = ov([]);
  hO(o, (L) => {
    w(L);
  });
  const u = (L) => {
    L.preventDefault(), a.value.some((N, D) => N.tab && N.tab.el.contains(L.target) ? (f(D), w(D), !0) : !1);
  }, c = (L) => {
    if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(L))
      return;
    const D = L.keyCode, S = (z) => {
      z.stopPropagation(), z.preventDefault();
    }, x = a.value.filter((z) => z.tab && !z.tab.disabled), I = a.value.findIndex((z) => z.tab && z.tab.el.contains(document.activeElement));
    let P = I !== -1 ? I : s.value;
    const k = [ne.RIGHT], R = [ne.LEFT], O = [ne.ENTER, ne.SPACE];
    e.vertical && (k.push(ne.DOWN), R.push(ne.UP)), k.indexOf(D) > -1 ? (P++, P >= x.length && (P = 0), S(L), f(a.value.indexOf(x[P]))) : R.indexOf(D) > -1 && (P--, P < 0 && (P = x.length - 1), S(L), f(a.value.indexOf(x[P]))), O.indexOf(D) > -1 && w(P);
  }, f = (L) => {
    a.value.forEach(function(N, D) {
      L === D && N.tab && N.tab.focus();
    });
  }, w = (L) => {
    const N = a.value[L];
    !N || N.tab && N.tab.disabled || (a.value.forEach((D, S) => {
      D.tab && (D.tab.selected = L === S), D.panel && (D.panel.selected = L === S);
    }), s.value = L, r.emit("update:modelValue", L));
  };
  iv("registerTab", (L) => {
    const N = L.index;
    N > -1 && (a.value[N] = { ...a.value[N], tab: L }, a.value = [...a.value], $());
  }), iv("registerPanel", (L) => {
    const N = L.index;
    N > -1 && (a.value[N] = {
      ...a.value[N],
      panel: L
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: L, panel: N }, D) => {
      if (N && L) {
        const S = L.id || ue("tab"), x = L.controls || ue("panel");
        L.controls = x, L.id = S, N.tab = S, N.id = x;
      }
      D === s.value && (N && (N.selected = !0), L && (L.selected = !0));
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
}, Aa = window.Vue.ref, pO = window.Vue.inject, wO = window.Vue.computed, vO = window.Vue.onMounted, ug = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, cg = (e) => {
  const r = Aa(!1), o = Aa(), s = Aa(e.tab), a = Aa(e.id), u = pO("registerPanel");
  vO(() => {
    if (u) {
      const f = o.value, w = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: r,
        id: a,
        tab: s,
        el: o.value,
        index: v
      });
    }
  });
  const c = wO(() => ({
    role: "tabpanel",
    id: a.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": r.value,
    "aria-labelledby": s.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: r,
    attrs: c,
    panel: o
  };
}, Od = window.Vue.defineComponent, mO = window.Vue.resolveComponent, Pd = window.Vue.openBlock, Rd = window.Vue.createElementBlock, hs = window.Vue.createElementVNode, dg = window.Vue.mergeProps, ll = window.Vue.renderSlot, _O = window.Vue.createVNode, gO = window.Vue.normalizeStyle, $O = window.Vue.toHandlers, yO = window.Vue.withDirectives, VO = window.Vue.normalizeProps, bO = window.Vue.guardReactiveProps, CO = window.Vue.vShow;
var Fd = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const SO = rg, kO = Od({
  props: SO,
  setup(e) {
    return og(e);
  },
  components: {
    FeatherRipple: yr
  }
}), EO = { role: "presentation" }, IO = { class: "tab-text" };
function xO(e, r, o, s, a, u) {
  const c = mO("FeatherRipple");
  return Pd(), Rd("li", EO, [
    hs("button", dg(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      hs("span", IO, [
        ll(e.$slots, "default", {}, void 0, !0)
      ]),
      _O(c)
    ], 16)
  ]);
}
var Cc = /* @__PURE__ */ Fd(kO, [["render", xO], ["__scopeId", "data-v-e6bb52b6"]]);
const AO = ag, BO = sg, TO = Od({
  model: ig,
  emits: BO,
  props: AO,
  setup(e, r) {
    return lg(e, r);
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
        e && e.length && this.ro && e.forEach((r) => {
          r.tab && this.ro.observe(r.tab.el);
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
        const e = this.$el.getBoundingClientRect(), r = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), o = r.left - e.left, s = r.height - 2;
        this.width = `${r.width}px`, this.transform = `translateX(${o}px) translateY(${s}px)`;
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
}), LO = { class: "feather-tab-container" }, MO = { class: "tab-panels" };
function DO(e, r, o, s, a, u) {
  return Pd(), Rd("div", LO, [
    hs("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: gO({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    hs("ul", dg(e.attrs, $O(e.listeners)), [
      ll(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    hs("div", MO, [
      ll(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var NO = /* @__PURE__ */ Fd(TO, [["render", DO], ["__scopeId", "data-v-27adffb9"]]);
const OO = ug, PO = Od({
  props: OO,
  setup(e) {
    return cg(e);
  }
});
function RO(e, r, o, s, a, u) {
  return yO((Pd(), Rd("div", VO(bO(e.attrs)), [
    ll(e.$slots, "default")
  ], 16)), [
    [CO, e.selected]
  ]);
}
var Sc = /* @__PURE__ */ Fd(PO, [["render", RO]]);
const FO = window.Vue.defineComponent, UO = window.Vue.toDisplayString, WO = window.Vue.normalizeClass, qO = window.Vue.openBlock, HO = window.Vue.createElementBlock, zO = window.Vue.createCommentVNode, YO = /* @__PURE__ */ FO({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, s) => r != null && r.severity ? (qO(), HO("span", {
      key: 0,
      class: WO(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, UO(r.severity), 3)) : zO("", !0);
  }
});
const fg = /* @__PURE__ */ de(YO, [["__scopeId", "data-v-83c2cdce"]]), GO = window.Vue.defineComponent, sv = window.Vue.toDisplayString, av = window.Vue.createElementVNode, jO = window.Vue.openBlock, ZO = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const KO = { class: "box" }, JO = { class: "label" }, XO = { class: "date" }, QO = /* @__PURE__ */ GO({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (jO(), ZO("div", KO, [
      av("div", JO, sv(r.label), 1),
      av("div", XO, sv(r.info), 1)
    ]));
  }
});
const kc = /* @__PURE__ */ de(QO, [["__scopeId", "data-v-b4afa751"]]), e4 = window.Vue.defineComponent, t4 = window.Vue.unref, n4 = window.Vue.renderList, r4 = window.Vue.Fragment, Ec = window.Vue.openBlock, Ic = window.Vue.createElementBlock, o4 = window.Vue.toDisplayString, i4 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const s4 = { class: "alarms-list" }, a4 = /* @__PURE__ */ e4({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (Ec(), Ic("div", s4, [
      (Ec(!0), Ic(r4, null, n4(t4(ge.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (a, u) => (Ec(), Ic("div", {
        class: i4(["alarm-count", [`${u.toString().toLowerCase()}-color`, r.size]]),
        key: u
      }, o4(a.length), 3))), 128))
    ]));
  }
});
const l4 = /* @__PURE__ */ de(a4, [["__scopeId", "data-v-52d63440"]]), u4 = window.Vue.openBlock, c4 = window.Vue.createElementBlock, d4 = window.Vue.createElementVNode;
var f4 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const h4 = {}, p4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, w4 = /* @__PURE__ */ d4("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), v4 = [
  w4
];
function m4(e, r) {
  return u4(), c4("svg", p4, v4);
}
var _4 = /* @__PURE__ */ f4(h4, [["render", m4]]);
const g4 = window.Vue.openBlock, $4 = window.Vue.createElementBlock, y4 = window.Vue.createStaticVNode;
var V4 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const b4 = {}, C4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S4 = /* @__PURE__ */ y4('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), k4 = [
  S4
];
function E4(e, r) {
  return g4(), $4("svg", C4, k4);
}
var ul = /* @__PURE__ */ V4(b4, [["render", E4]]);
const I4 = window.Vue.defineComponent, fn = window.Vue.unref, xc = window.Vue.createVNode, Ud = window.Vue.createElementVNode, Ac = window.Vue.withCtx, Ba = window.Vue.openBlock, Bc = window.Vue.createBlock, Tc = window.Vue.createCommentVNode, x4 = window.Vue.normalizeClass, A4 = window.Vue.createElementBlock, B4 = window.Vue.pushScopeId, T4 = window.Vue.popScopeId, Wd = (e) => (B4("data-v-e073070b"), e = e(), T4(), e), L4 = /* @__PURE__ */ Wd(() => /* @__PURE__ */ Ud("span", null, "Acknowledge", -1)), M4 = /* @__PURE__ */ Wd(() => /* @__PURE__ */ Ud("span", null, "Escalate", -1)), D4 = /* @__PURE__ */ Wd(() => /* @__PURE__ */ Ud("span", null, "Clear", -1)), N4 = /* @__PURE__ */ I4({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const r = e, o = _n(), s = async (u) => {
      await G2(r.alarm.id, u) && o.getSituation(r.situationId), r.isSituation && await y_(
        r.situationId,
        tt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await i_(r.alarm.id, u) && o.getSituation(r.situationId);
    };
    return (u, c) => (Ba(), A4("div", {
      class: x4(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Tc("", !0) : (Ba(), Bc(fn(ae), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Ac(() => [
          xc(fn(j), {
            icon: fn(ii),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          L4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Ba(), Bc(fn(ae), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(fn(tt).ESCALATE))
      }, {
        default: Ac(() => [
          xc(fn(j), {
            icon: fn(_4),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          M4
        ]),
        _: 1
      })) : Tc("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Ba(), Bc(fn(ae), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(fn(tt).CLEAR))
      }, {
        default: Ac(() => [
          xc(fn(j), {
            icon: fn(ul),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          D4
        ]),
        _: 1
      })) : Tc("", !0)
    ], 2));
  }
});
const hg = /* @__PURE__ */ de(N4, [["__scopeId", "data-v-e073070b"]]);
var O4 = Object.defineProperty, P4 = Object.defineProperties, R4 = Object.getOwnPropertyDescriptors, lv = Object.getOwnPropertySymbols, F4 = Object.prototype.hasOwnProperty, U4 = Object.prototype.propertyIsEnumerable, uv = (e, r, o) => r in e ? O4(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, wd = (e, r) => {
  for (var o in r || (r = {}))
    F4.call(r, o) && uv(e, o, r[o]);
  if (lv)
    for (var o of lv(r))
      U4.call(r, o) && uv(e, o, r[o]);
  return e;
}, pg = (e, r) => P4(e, R4(r));
const wg = window.Vue.defineComponent, W4 = window.Vue.inject, q4 = window.Vue.resolveComponent, Lc = window.Vue.openBlock, cv = window.Vue.createElementBlock, Ko = window.Vue.createElementVNode, H4 = window.Vue.createBlock, dv = window.Vue.createCommentVNode, z4 = window.Vue.renderSlot, Y4 = window.Vue.pushScopeId, G4 = window.Vue.popScopeId, Mc = window.Vue.toRef, Ta = window.Vue.computed, j4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var Z4 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const K4 = {
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
}, J4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, X4 = wg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: J4,
  props: K4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: W4("registerCheckbox", (r) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : ue("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ue("checkbox-label");
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
      (e.keyCode === ne.SPACE || e.keyCode === ne.ENTER) && this.updateValue(), e.keyCode === ne.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: yr
  }
}), Q4 = (e) => (Y4("data-v-a7af27e2"), e = e(), G4(), e), eP = { class: "layout-container" }, tP = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], nP = { class: "checkbox hover focus" }, rP = /* @__PURE__ */ Q4(() => /* @__PURE__ */ Ko("div", { class: "box" }, [
  /* @__PURE__ */ Ko("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Ko("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Ko("div", { class: "indeterminate" })
], -1)), oP = ["id", "for"];
function iP(e, r, o, s, a, u) {
  const c = q4("feather-ripple");
  return Lc(), cv("div", eP, [
    Ko("div", {
      class: "feather-checkbox feather-form-input feather-checkbox-table",
      onClick: r[0] || (r[0] = (...f) => e.click && e.click(...f)),
      onKeydown: r[1] || (r[1] = (...f) => e.keydown && e.keydown(...f)),
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
      Ko("div", nP, [
        rP,
        e.disabled ? dv("", !0) : (Lc(), H4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? dv("", !0) : (Lc(), cv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        z4(e.$slots, "default", {}, void 0, !0)
      ], 8, oP))
    ], 40, tP)
  ]);
}
var no = /* @__PURE__ */ Z4(X4, [["render", iP], ["__scopeId", "data-v-a7af27e2"]]);
const sP = pg(wd({}, pi), {
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
wg({
  props: sP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    wi(e);
    const o = Mc(e, "error"), s = Ta(() => ue("feather-checkbox-group")), a = Ta(() => ue("feather-input-description")), u = Ta(() => ue("feather-input-label")), c = Ta(() => {
      const _ = JSON.parse(JSON.stringify(r.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!o.value), pg(wd({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = j4(s.value), { validate: w } = fi(f, Mc(e, "modelValue"), e.label, e.schema, Mc(e, "error"));
    return wd({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, hi(r.attrs));
  },
  components: {
    InputSubText: di
  }
});
const aP = window.Vue.openBlock, lP = window.Vue.createElementBlock, vg = window.Vue.createElementVNode;
var uP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const cP = {}, dP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fP = /* @__PURE__ */ vg("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), hP = /* @__PURE__ */ vg("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), pP = [
  fP,
  hP
];
function wP(e, r) {
  return aP(), lP("svg", dP, pP);
}
var vP = /* @__PURE__ */ uP(cP, [["render", wP]]);
var mP = Object.defineProperty, _P = Object.defineProperties, gP = Object.getOwnPropertyDescriptors, fv = Object.getOwnPropertySymbols, $P = Object.prototype.hasOwnProperty, yP = Object.prototype.propertyIsEnumerable, hv = (e, r, o) => r in e ? mP(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Jo = (e, r) => {
  for (var o in r || (r = {}))
    $P.call(r, o) && hv(e, o, r[o]);
  if (fv)
    for (var o of fv(r))
      yP.call(r, o) && hv(e, o, r[o]);
  return e;
}, mg = (e, r) => _P(e, gP(r));
const VP = window.Vue.defineComponent, Dc = window.Vue.toRef, bP = window.Vue.computed, pv = window.Vue.resolveComponent, wv = window.Vue.openBlock, vv = window.Vue.createElementBlock, mv = window.Vue.mergeProps, _v = window.Vue.createVNode, CP = window.Vue.normalizeClass, gv = window.Vue.withCtx, SP = window.Vue.createElementVNode, kP = window.Vue.toDisplayString, EP = window.Vue.createCommentVNode;
var IP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const xP = mg(Jo(Jo({}, yl), pi), {
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
}), AP = {
  "update:modelValue": (e) => !0
}, BP = VP({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: AP,
  props: xP,
  setup(e, r) {
    wi(e), Vl(e);
    const o = Dc(e, "id"), s = bP(() => o.value ? o.value : ue("feather-textarea-label")), { validate: a } = fi(s, Dc(e, "modelValue"), e.label, e.schema, Dc(e, "error"));
    return Jo({
      inputId: s,
      incomingId: o,
      validate: a
    }, hi(r.attrs));
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
      return ue("feather-textarea-description");
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
      const e = Jo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), mg(Jo(Jo({}, e), this.listeners), {
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
        const r = e.getBoundingClientRect().width;
        e.scrollWidth <= e.clientWidth && r < e.parentElement.getBoundingClientRect().width ? e.style.whiteSpace = "nowrap" : (e.style.whiteSpace = "normal", e.style.flexBasis = "100%"), this.$nextTick(() => {
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
    InputSubText: di,
    InputWrapper: $l
  }
}), TP = ["maxlength"], LP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function MP(e, r, o, s, a, u) {
  const c = pv("InputWrapper"), f = pv("InputSubText");
  return wv(), vv("div", mv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    _v(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: CP(["feather-textarea-content", e.contentCls])
    }, {
      default: gv(() => [
        SP("textarea", mv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, TP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    _v(f, { id: e.descriptionId }, {
      right: gv(() => [
        e.maxlength ? (wv(), vv("div", LP, kP(e.charCount), 1)) : EP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var vd = /* @__PURE__ */ IP(BP, [["render", MP], ["__scopeId", "data-v-0648df5c"]]);
const DP = window.Pinia.defineStore, Bl = DP("appStore", {
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
}), NP = window.Vue.defineComponent, $v = window.Vue.toDisplayString, Yi = window.Vue.createElementVNode, Hr = window.Vue.unref, Fo = window.Vue.openBlock, yv = window.Vue.createBlock, Gi = window.Vue.createCommentVNode, Vv = window.Vue.createVNode, La = window.Vue.createElementBlock, OP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const PP = { class: "row" }, RP = { class: "label" }, FP = { class: "action-icons" }, UP = { class: "icon-btn" }, WP = {
  key: 0,
  class: "icon-btn"
}, qP = {
  key: 1,
  class: "icon-btn"
}, HP = {
  key: 0,
  class: "text"
}, zP = window.Vue.watch, bv = window.Vue.ref, YP = /* @__PURE__ */ NP({
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
    const r = e, o = Bl(), s = bv(!1), a = bv((w = r.memo) == null ? void 0 : w.body);
    zP(r, () => {
      var v;
      a.value = (v = r.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await ek(r.id, r.type) ? a.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Q2(r.id, r.type, a.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (v, _) => (Fo(), La("div", {
      class: OP([r.boxType === "small" ? "box-small" : "box"])
    }, [
      Yi("div", PP, [
        Yi("div", RP, $v(e.label), 1),
        Yi("div", FP, [
          Yi("div", UP, [
            s.value ? Gi("", !0) : (Fo(), yv(Hr(j), {
              key: 0,
              icon: Hr(vP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (Fo(), La("div", WP, [
            Vv(Hr(j), {
              icon: Hr(ii),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Gi("", !0),
          a.value && a.value != "" || s.value ? (Fo(), La("div", qP, [
            Vv(Hr(j), {
              icon: Hr(ui),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Gi("", !0)
        ])
      ]),
      Yi("div", null, [
        !s.value && a.value != null ? (Fo(), La("div", HP, $v(a.value), 1)) : Gi("", !0),
        s.value ? (Fo(), yv(Hr(vd), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Gi("", !0)
      ])
    ], 2));
  }
});
const cl = /* @__PURE__ */ de(YP, [["__scopeId", "data-v-3f44e250"]]), GP = window.Vue.defineComponent, zr = window.Vue.unref, Uo = window.Vue.createVNode, ji = window.Vue.toDisplayString, vn = window.Vue.createElementVNode, Cv = window.Vue.openBlock, Sv = window.Vue.createElementBlock, kv = window.Vue.createCommentVNode, Nc = window.Vue.createTextVNode, jP = window.Vue.pushScopeId, ZP = window.Vue.popScopeId, qd = (e) => (jP("data-v-02d1e7f0"), e = e(), ZP(), e), KP = {
  key: 0,
  class: "card"
}, JP = { class: "row" }, XP = {
  key: 0,
  class: "ack"
}, QP = /* @__PURE__ */ qd(() => /* @__PURE__ */ vn("strong", null, " Duration: ", -1)), e8 = ["innerHTML"], t8 = /* @__PURE__ */ qd(() => /* @__PURE__ */ vn("strong", null, "First Event", -1)), n8 = /* @__PURE__ */ qd(() => /* @__PURE__ */ vn("strong", null, "Last Event", -1)), r8 = { class: "section memo-boxes" }, Ev = window.Vue.ref, o8 = window.Vue.watch, i8 = /* @__PURE__ */ GP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, s = Ev(!1), a = Ev(o.alarm), u = new Date().getTime();
    o8(o, () => {
      a.value = o.alarm, s.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const c = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (w) => {
      const v = await s_(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, T, L;
      return a.value ? (Cv(), Sv("div", KP, [
        vn("div", null, [
          vn("div", JP, [
            Uo(zr(no), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (N) => s.value = N),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            vn("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, ji(a.value.nodeLabel) + " - " + ji(a.value.id), 1),
            Uo(fg, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Cv(), Sv("div", XP, [
              Uo(zr(j), {
                icon: zr(ii),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : kv("", !0)
          ]),
          vn("div", null, [
            QP,
            Nc(" " + ji(zr(ml)(zr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          vn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, e8),
          vn("div", null, [
            t8,
            Nc(" - " + ji(zr(In)(a.value.firstEventTime)), 1)
          ]),
          vn("div", null, [
            n8,
            Nc(" - " + ji(zr(In)(a.value.lastEventTime)), 1)
          ]),
          vn("div", r8, [
            Uo(cl, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Uo(cl, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (L = a.value) == null ? void 0 : L.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Uo(hg, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : kv("", !0);
    };
  }
});
const s8 = /* @__PURE__ */ de(i8, [["__scopeId", "data-v-02d1e7f0"]]), a8 = window.Vue.openBlock, l8 = window.Vue.createElementBlock, _g = window.Vue.createElementVNode;
var u8 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const c8 = {}, d8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, f8 = /* @__PURE__ */ _g("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), h8 = /* @__PURE__ */ _g("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), p8 = [
  f8,
  h8
];
function w8(e, r) {
  return a8(), l8("svg", d8, p8);
}
var md = /* @__PURE__ */ u8(c8, [["render", w8]]);
const v8 = window.Vue.watch, m8 = window.Vue.ref, _8 = window.Vue.onBeforeUnmount, gg = (e) => {
  const r = m8(!1), o = (s) => {
    s.keyCode === ne.ESCAPE && (s.preventDefault(), r.value = !r.value);
  };
  return v8(e, (s) => {
    s ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), _8(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, g8 = window.Vue.watch, $g = (e) => {
  let r;
  g8(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, yg = window.Vue.watch, Vg = window.Vue.onBeforeUnmount, bg = window.Vue.nextTick, $8 = window.Vue.onMounted, Cg = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, dl = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, Sg = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  Vg(() => dl(r, o)), $8(() => yg(e, (s) => {
    s ? bg(() => {
      r = Cg(o);
    }) : dl(r, o);
  }, { immediate: !0 }));
}, y8 = (e, r) => {
  let o;
  Vg(() => dl(o, r.value ? r.value.offsetParent : !1)), yg([e, r], ([s, a]) => {
    s && a ? bg(() => {
      o = Cg(a.offsetParent);
    }) : a && dl(o, a.offsetParent);
  }, {
    immediate: !0
  });
};
var V8 = Object.defineProperty, Iv = Object.getOwnPropertySymbols, b8 = Object.prototype.hasOwnProperty, C8 = Object.prototype.propertyIsEnumerable, xv = (e, r, o) => r in e ? V8(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, S8 = (e, r) => {
  for (var o in r || (r = {}))
    b8.call(r, o) && xv(e, o, r[o]);
  if (Iv)
    for (var o of Iv(r))
      C8.call(r, o) && xv(e, o, r[o]);
  return e;
};
const Hd = window.Vue.defineComponent, ps = window.Vue.ref, k8 = window.Vue.nextTick, kg = window.Vue.openBlock, Eg = window.Vue.createElementBlock, zd = window.Vue.createElementVNode, E8 = window.Vue.renderSlot, I8 = window.Vue.resolveComponent, x8 = window.Vue.normalizeClass, A8 = window.Vue.withModifiers, B8 = window.Vue.createVNode, Av = window.Vue.toRef, Bv = window.Vue.computed, Tv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Ig = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const T8 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, L8 = Hd({
  props: T8,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = ps(), r = ps(!1), o = (_, $) => {
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
    }, u = (_) => c(_) ? (r.value = !0, _.focus && _.focus(), r.value = !1, document.activeElement === _) : !1, c = (_) => {
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
      $ && $.focus ? k8(() => {
        $.focus();
      }) : s(_);
    }, w = ps();
    return {
      trapFocus: () => {
        r.value || setTimeout(() => {
          var _ = document.activeElement;
          if (e.value.contains(_)) {
            w.value = _;
            return;
          } else {
            switch (o(e.value, _)) {
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
      ignoreUtilFocusChanges: r,
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
}), M8 = /* @__PURE__ */ zd("div", { tabindex: "0" }, null, -1), D8 = {
  class: "focus-trap-content",
  ref: "content"
}, N8 = /* @__PURE__ */ zd("div", { tabindex: "0" }, null, -1);
function O8(e, r, o, s, a, u) {
  return kg(), Eg("div", null, [
    M8,
    zd("div", D8, [
      E8(e.$slots, "default")
    ], 512),
    N8
  ]);
}
var xg = /* @__PURE__ */ Ig(L8, [["render", O8]]);
const P8 = Hd({
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
    icon: () => ui
  },
  components: {
    FeatherIcon: j
  }
}), R8 = ["aria-label"];
function F8(e, r, o, s, a, u) {
  const c = I8("FeatherIcon");
  return kg(), Eg("a", {
    href: "#",
    class: x8(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = A8((f) => e.$emit("close"), ["prevent"]))
  }, [
    B8(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, R8);
}
var Ag = /* @__PURE__ */ Ig(P8, [["render", F8], ["__scopeId", "data-v-fc0f3f00"]]);
const Bg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, U8 = {
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
    default: () => Bg,
    validator: (e) => !!e.title
  }
}, W8 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Hd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: W8,
  props: U8,
  setup(e, r) {
    const o = gl(Av(e, "labels"), Bg), s = Av(e, "modelValue"), a = ps(), u = () => {
      r.emit("update:modelValue", !1);
    }, c = Bv(() => !!r.slots.footer), f = Bv(() => ue("dialog-header"));
    e.relative ? y8(s, a) : Sg(s), $g(s), Tv(gg(s), () => {
      u();
    });
    const w = ps(e.modelValue);
    return Tv(w, (v) => {
      v ? r.emit("shown") : r.emit("hidden");
    }), S8({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, o);
  },
  components: {
    FocusTrap: xg,
    DialogClose: Ag
  }
});
var q8 = Object.defineProperty, Lv = Object.getOwnPropertySymbols, H8 = Object.prototype.hasOwnProperty, z8 = Object.prototype.propertyIsEnumerable, Mv = (e, r, o) => r in e ? q8(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Tl = (e, r) => {
  for (var o in r || (r = {}))
    H8.call(r, o) && Mv(e, o, r[o]);
  if (Lv)
    for (var o of Lv(r))
      z8.call(r, o) && Mv(e, o, r[o]);
  return e;
};
const Ll = window.Vue.defineComponent, Dv = window.Vue.toRef, Nv = window.Vue.watch, Ov = window.Vue.ref, Pv = window.Vue.resolveComponent, Ma = window.Vue.openBlock, Rv = window.Vue.createBlock, Y8 = window.Vue.Teleport, Fv = window.Vue.createElementBlock, Oc = window.Vue.createVNode, Uv = window.Vue.Transition, Pc = window.Vue.withCtx, Wv = window.Vue.createCommentVNode, G8 = window.Vue.withDirectives, j8 = window.Vue.normalizeStyle, Z8 = window.Vue.normalizeClass, qv = window.Vue.createElementVNode, K8 = window.Vue.renderSlot, J8 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var X8 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Tg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, Q8 = {
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
    default: () => Tg,
    validator: (e) => !!e.title
  }
}, eR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, tR = Ll({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: eR,
  props: Q8,
  setup(e, r) {
    const o = gl(Dv(e, "labels"), Tg), s = Dv(e, "modelValue"), a = () => {
      r.emit("update:modelValue", !1);
    };
    Sg(s), $g(s), Nv(gg(s), () => {
      a();
    });
    const u = Ov(), c = Ov(!1);
    return Nv(c, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), Tl({ close: a, shown: c, isShown: s, element: u }, o);
  },
  components: {
    DialogClose: Ag,
    FocusTrap: xg
  }
}), nR = {
  key: 0,
  class: "drawer-container feather-styles"
}, rR = {
  key: 0,
  class: "greyedOut"
}, oR = ["aria-label"], iR = { class: "slot" };
function sR(e, r, o, s, a, u) {
  const c = Pv("dialog-close"), f = Pv("focus-trap");
  return Ma(), Rv(Y8, { to: "body" }, [
    e.modelValue ? (Ma(), Fv("div", nR, [
      Oc(Uv, { name: "greyOutShim" }, {
        default: Pc(() => [
          e.modelValue ? (Ma(), Fv("div", rR)) : Wv("", !0)
        ]),
        _: 1
      }),
      Oc(Uv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (w) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (w) => e.shown = !1)
      }, {
        default: Pc(() => [
          G8((Ma(), Rv(f, {
            enable: e.modelValue,
            style: j8({ width: e.width }),
            key: "sect",
            class: Z8(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Pc(() => [
              qv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                qv("div", iR, [
                  K8(e.$slots, "default", {}, void 0, !0)
                ]),
                Oc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, oR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [J8, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Wv("", !0)
  ]);
}
var Lg = /* @__PURE__ */ X8(tR, [["render", sR], ["__scopeId", "data-v-0a36e1dc"]]);
const aR = Tl({
  label: {
    type: String,
    required: !0
  }
}, rg);
Ll({
  name: "DrawerTab",
  props: aR,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = ro(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      oo(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return og(e);
  },
  components: {
    FeatherRipple: yr
  }
});
const lR = Tl({}, ag), uR = sg;
Ll({
  emits: uR,
  model: ig,
  props: lR,
  setup(e, r) {
    return lg(e, r);
  }
});
const cR = Tl({
  header: {
    type: String
  }
}, ug);
Ll({
  name: "DrawerTabContent",
  props: cR,
  setup(e) {
    return cg(e);
  },
  directives: {
    MenuFocusLoop: $T
  }
});
const dR = window.Vue.defineComponent, Mg = window.Vue.createElementVNode, Hv = window.Vue.createVNode, fR = window.Vue.renderList, hR = window.Vue.Fragment, Zi = window.Vue.openBlock, Rc = window.Vue.createElementBlock, zv = window.Vue.createBlock, pR = window.Vue.unref, wR = window.Vue.withCtx, vR = window.Vue.pushScopeId, mR = window.Vue.popScopeId, _R = (e) => (vR("data-v-c7c65659"), e = e(), mR(), e), gR = { class: "content" }, $R = /* @__PURE__ */ _R(() => /* @__PURE__ */ Mg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), yR = {
  key: 0,
  class: "situation-list"
}, Fc = window.Vue.ref, Yv = window.Vue.watch, VR = /* @__PURE__ */ dR({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, s = _n(), a = Fc(o.visible), u = () => {
      let v = s.situations;
      o.situationId !== 0 && (v = s.situations.filter(
        (_) => _.id != o.situationId
      )), c.value = v, f.value = v;
    }, c = Fc(s.situations), f = Fc(s.situations);
    Yv(o, () => {
      a.value = o.visible, u();
    }), Yv(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (Zi(), zv(pR(Lg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: wR(() => [
        Mg("div", gR, [
          $R,
          Hv(mi, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Zi(), Rc("div", yR, [
            (Zi(!0), Rc(hR, null, fR(f.value, ($) => (Zi(), Rc("div", {
              class: "card",
              key: $.id
            }, [
              Hv(b_, {
                onClick: (y) => r("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Zi(), zv(_i, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Dg = /* @__PURE__ */ de(VR, [["__scopeId", "data-v-c7c65659"]]), bR = window.Vue.defineComponent, Gv = window.Vue.normalizeClass, jo = window.Vue.createElementVNode, Da = window.Vue.unref, CR = window.Vue.createVNode, Na = window.Vue.toDisplayString, SR = window.Vue.createTextVNode, kR = window.Vue.openBlock, ER = window.Vue.createElementBlock, IR = window.Vue.pushScopeId, xR = window.Vue.popScopeId, AR = (e) => (IR("data-v-e1e9b696"), e = e(), xR(), e), BR = { class: "alarmInfo" }, TR = { class: "alarm-title" }, LR = /* @__PURE__ */ AR(() => /* @__PURE__ */ jo("strong", null, " Duration: ", -1)), MR = { class: "description" }, DR = /* @__PURE__ */ bR({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, s = new Date().getTime();
    return (a, u) => (kR(), ER("div", {
      class: Gv(["alarm", { selected: o.selected }])
    }, [
      jo("div", BR, [
        jo("div", {
          class: Gv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        CR(Da(no), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        jo("div", TR, Na(e.alarm.nodeLabel) + " - " + Na(e.alarm.id), 1)
      ]),
      jo("div", null, [
        LR,
        SR(" " + Na(Da(ml)(Da(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      jo("div", MR, Na(Da(w_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Yd = /* @__PURE__ */ de(DR, [["__scopeId", "data-v-e1e9b696"]]), NR = window.Vue.defineComponent, Ka = window.Vue.createElementVNode, Wo = window.Vue.unref, OR = window.Vue.toDisplayString, jv = window.Vue.withCtx, Uc = window.Vue.createVNode, PR = window.Vue.renderList, RR = window.Vue.Fragment, Ki = window.Vue.openBlock, Wc = window.Vue.createElementBlock, Zv = window.Vue.createBlock, FR = window.Vue.pushScopeId, UR = window.Vue.popScopeId, WR = (e) => (FR("data-v-4bc80d4b"), e = e(), UR(), e), qR = { class: "content" }, HR = { class: "header" }, zR = /* @__PURE__ */ WR(() => /* @__PURE__ */ Ka("h4", null, "ADD ALARMS", -1)), YR = {
  key: 0,
  class: "alarms-list"
}, Oa = window.Vue.ref, Kv = window.Vue.watch, GR = /* @__PURE__ */ NR({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: r }) {
    const o = e, s = _n(), a = Oa(o.visible), u = Oa([]), c = Oa(["all"]), f = Oa(s.unassignedAlarms);
    Kv(o, () => {
      a.value = o.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Kv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      ge.exports.includes(u.value, y) ? ge.exports.remove(u.value, (T) => T === y) : u.value.push(y);
    }, v = () => {
      r("alarms-selected", u.value);
    }, _ = () => {
      let y = s.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (T) => c.value.includes(T.severity)
      )), f.value = y;
    }, $ = (y) => {
      f.value = y;
    };
    return (y, T) => (Ki(), Zv(Wo(Lg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (L) => a.value = L),
        T[1] || (T[1] = (L) => r("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: jv(() => [
        Ka("div", qR, [
          Ka("div", HR, [
            zR,
            Uc(Wo(ae), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: jv(() => [
                Ka("span", null, "Add " + OR(Wo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Uc(mi, {
            list: Wo(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (Ki(), Wc("div", YR, [
            (Ki(!0), Wc(RR, null, PR(f.value, (L) => (Ki(), Wc("div", {
              class: "card",
              key: L.id
            }, [
              Uc(Yd, {
                selected: Wo(ge.exports.includes)(Wo(u), L.id),
                alarm: L,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Ki(), Zv(_i, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const jR = /* @__PURE__ */ de(GR, [["__scopeId", "data-v-4bc80d4b"]]), ZR = window.Vue.openBlock, KR = window.Vue.createElementBlock, Ng = window.Vue.createElementVNode;
var JR = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const XR = {}, QR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e5 = /* @__PURE__ */ Ng("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), t5 = /* @__PURE__ */ Ng("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), n5 = [
  e5,
  t5
];
function r5(e, r) {
  return ZR(), KR("svg", QR, n5);
}
var Jv = /* @__PURE__ */ JR(XR, [["render", r5]]);
const o5 = window.Vue.defineComponent, Wt = window.Vue.createElementVNode, at = window.Vue.unref, pt = window.Vue.createVNode, Ji = window.Vue.withCtx, i5 = window.Vue.renderList, Xv = window.Vue.Fragment, Xi = window.Vue.openBlock, Pa = window.Vue.createElementBlock, s5 = window.Vue.createBlock, a5 = window.Vue.pushScopeId, l5 = window.Vue.popScopeId, gi = (e) => (a5("data-v-524b0835"), e = e(), l5(), e), u5 = { class: "container" }, c5 = { class: "header" }, d5 = /* @__PURE__ */ gi(() => /* @__PURE__ */ Wt("div", { class: "title" }, "Alarms", -1)), f5 = /* @__PURE__ */ gi(() => /* @__PURE__ */ Wt("span", null, "Add Alarms", -1)), h5 = { class: "alarms-container" }, p5 = { class: "filters" }, w5 = { class: "list" }, v5 = { class: "row actions" }, m5 = /* @__PURE__ */ gi(() => /* @__PURE__ */ Wt("span", null, "Clear", -1)), _5 = /* @__PURE__ */ gi(() => /* @__PURE__ */ Wt("span", null, "Acknowledge", -1)), g5 = /* @__PURE__ */ gi(() => /* @__PURE__ */ Wt("span", null, "Move", -1)), $5 = /* @__PURE__ */ gi(() => /* @__PURE__ */ Wt("span", null, "Remove", -1)), y5 = { class: "section" }, V5 = {
  key: 0,
  class: "alarm-list"
}, Ra = window.Vue.ref, b5 = window.Vue.watch, C5 = window.Vue.reactive, S5 = window.Vue.markRaw, k5 = /* @__PURE__ */ o5({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = S5({
      Add: Al,
      Delete: Jv,
      MarkComplete: ul,
      CheckCircle: ii,
      ExitToApp: md
    }), s = Bl(), a = _n(), u = Ra(!1), c = Ra(["all"]), f = Ra(!1), w = Ra(!1), v = C5({
      selectedAlarms: [],
      alarms: r.alarms
    });
    b5(r, () => {
      c.value = ["all"], v.alarms = r.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (I) => {
      v.selectedAlarms.includes(I) ? ge.exports.remove(v.selectedAlarms, (P) => P == I) : v.selectedAlarms.push(I);
    }, $ = async (I) => {
      v.selectedAlarms.length ? (await j2(v.selectedAlarms, I), a.getSituation(r.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === r.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await lw(
        r.situationId,
        v.selectedAlarms
      ) ? a.getSituation(r.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, L = async (I) => {
      y() && (await lw(
        r.situationId,
        v.selectedAlarms
      ) ? await N(I, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, N = async (I, P) => {
      P.length ? await V_(I, P) ? a.getSituation(I) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, D = async (I) => {
      await N(r.situationId, I), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, x = (I) => {
      v.alarms = I;
    };
    return (I, P) => (Xi(), Pa(Xv, null, [
      Wt("div", u5, [
        Wt("div", c5, [
          d5,
          pt(at(ae), {
            class: "add-alarms-btn",
            onClick: P[0] || (P[0] = (k) => w.value = !0)
          }, {
            default: Ji(() => [
              pt(at(j), {
                icon: at(o).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              f5
            ]),
            _: 1
          })
        ]),
        Wt("div", h5, [
          Wt("div", p5, [
            pt(mi, {
              list: r.alarms,
              onFilteredList: x,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Wt("div", w5, [
            Wt("div", v5, [
              pt(at(no), {
                modelValue: u.value,
                "onUpdate:modelValue": P[1] || (P[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              pt(at(ae), {
                onClick: P[2] || (P[2] = () => $("clear"))
              }, {
                default: Ji(() => [
                  pt(at(j), {
                    icon: at(ul),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  m5
                ]),
                _: 1
              }),
              pt(at(ae), {
                onClick: P[3] || (P[3] = () => $("ack"))
              }, {
                default: Ji(() => [
                  pt(at(j), {
                    icon: at(ii),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  _5
                ]),
                _: 1
              }),
              pt(at(ae), { onClick: S }, {
                default: Ji(() => [
                  pt(at(j), {
                    icon: at(md),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  g5
                ]),
                _: 1
              }),
              pt(at(ae), { onClick: T }, {
                default: Ji(() => [
                  pt(at(j), {
                    icon: at(Jv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  $5
                ]),
                _: 1
              })
            ]),
            Wt("div", y5, [
              v.alarms.length > 0 ? (Xi(), Pa("div", V5, [
                (Xi(!0), Pa(Xv, null, i5(v.alarms, (k) => (Xi(), Pa("div", {
                  key: k.id
                }, [
                  pt(s8, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": r.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Xi(), s5(_i, { key: 1 }))
            ])
          ])
        ])
      ]),
      pt(Dg, {
        situationId: r.situationId,
        visible: f.value,
        onSituationSelected: L,
        onDrawerClosed: P[4] || (P[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      pt(jR, {
        visible: w.value,
        onAlarmsSelected: D,
        onDrawerAlarmsClosed: P[5] || (P[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const E5 = /* @__PURE__ */ de(k5, [["__scopeId", "data-v-524b0835"]]), I5 = window.Vue.defineComponent, hn = window.Vue.createVNode, Rt = window.Vue.unref, qc = window.Vue.normalizeClass, Fa = window.Vue.toDisplayString, Qi = window.Vue.openBlock, es = window.Vue.createElementBlock, Qv = window.Vue.createCommentVNode, x5 = window.Vue.withCtx, nn = window.Vue.createElementVNode, A5 = window.Vue.Fragment, B5 = window.Vue.pushScopeId, T5 = window.Vue.popScopeId, L5 = (e) => (B5("data-v-e980d1e2"), e = e(), T5(), e), M5 = { class: "section" }, D5 = { class: "action-section" }, N5 = { class: "btn-row" }, O5 = { key: 0 }, P5 = { key: 1 }, R5 = {
  key: 0,
  class: "situation-detail"
}, F5 = { class: "situation-info" }, U5 = { class: "id" }, W5 = ["innerHTML"], q5 = /* @__PURE__ */ L5(() => /* @__PURE__ */ nn("p", null, null, -1)), H5 = { class: "boxes" }, z5 = { class: "parameters" }, Y5 = { class: "section memo-boxes" }, G5 = { key: 0 }, j5 = window.Vue.computed, em = window.Vue.ref, Z5 = window.Vue.watch, K5 = /* @__PURE__ */ I5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = Bl(), s = _n(), a = tt.REJECTED, u = em(r.situationInfo.status), c = em(r.situationInfo);
    Z5(r, () => {
      u.value = r.situationInfo.status || "", c.value = r.situationInfo;
    });
    const f = j5(
      () => {
        var v;
        return p_(((v = c.value) == null ? void 0 : v.description) || "");
      }
    ), w = async (v) => {
      var $;
      await y_(
        ($ = r.situationInfo) == null ? void 0 : $.id,
        v.toLowerCase()
      ) ? (u.value = v, s.getSituation(r.situationInfo.id)) : o.showErrorMsg("Error on rejecting the situation");
    };
    return (v, _) => {
      var $, y, T, L, N, D, S, x, I, P, k, R;
      return Qi(), es(A5, null, [
        nn("div", M5, [
          nn("div", D5, [
            hn(hg, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            nn("div", N5, [
              hn(Rt(ae), {
                class: qc(["btn", { rejected: u.value == Rt(a) }]),
                "data-test": "btn-reject",
                onClick: _[0] || (_[0] = (O) => w(Rt(a)))
              }, {
                default: x5(() => [
                  hn(Rt(j), {
                    icon: Rt(a_),
                    "aria-hidden": "true",
                    class: qc(["icon reject", { rejected: u.value == Rt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Rt(a) ? (Qi(), es("span", O5, Fa(Rt(a)), 1)) : (Qi(), es("span", P5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Qi(), es("div", R5, [
            nn("div", {
              class: qc(["severity-line", [`${(y = ($ = c.value) == null ? void 0 : $.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            nn("div", F5, [
              nn("div", U5, [
                nn("div", null, " Situation - " + Fa((T = c.value) == null ? void 0 : T.id) + " - " + Fa(c.value.alarms.length) + " alarm(s) affects " + Fa(Rt(ge.exports.size)(Rt(ge.exports.groupBy)((L = c.value) == null ? void 0 : L.alarms, "nodeId"))) + " node(s) ", 1),
                hn(fg, {
                  severity: (N = c.value) == null ? void 0 : N.severity
                }, null, 8, ["severity"])
              ]),
              nn("span", {
                innerHTML: Rt(f),
                "data-test": "situation-description"
              }, null, 8, W5),
              q5,
              nn("div", H5, [
                hn(kc, {
                  label: "First Event",
                  info: Rt(In)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                hn(kc, {
                  label: "Last Event",
                  info: Rt(In)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                hn(kc, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            nn("div", z5, [
              hn(l4, {
                alarms: (D = c.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Qv("", !0),
          nn("div", Y5, [
            hn(cl, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (x = c.value) == null ? void 0 : x.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (I = c.value) == null ? void 0 : I.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            hn(cl, {
              id: (P = c.value) == null ? void 0 : P.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (R = c.value) == null ? void 0 : R.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Qi(), es("div", G5, [
          hn(E5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Qv("", !0)
      ], 64);
    };
  }
});
const J5 = /* @__PURE__ */ de(K5, [["__scopeId", "data-v-e980d1e2"]]);
var X5 = Object.defineProperty, Q5 = Object.defineProperties, e6 = Object.getOwnPropertyDescriptors, tm = Object.getOwnPropertySymbols, t6 = Object.prototype.hasOwnProperty, n6 = Object.prototype.propertyIsEnumerable, nm = (e, r, o) => r in e ? X5(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, _d = (e, r) => {
  for (var o in r || (r = {}))
    t6.call(r, o) && nm(e, o, r[o]);
  if (tm)
    for (var o of tm(r))
      n6.call(r, o) && nm(e, o, r[o]);
  return e;
}, r6 = (e, r) => Q5(e, e6(r));
const Og = window.Vue.defineComponent, Qr = window.Vue.resolveComponent, Ja = window.Vue.openBlock, rm = window.Vue.createBlock, Xa = window.Vue.mergeProps, eo = window.Vue.withCtx, Pg = window.Vue.createElementBlock, o6 = window.Vue.Fragment, i6 = window.Vue.renderList, s6 = window.Vue.createTextVNode, a6 = window.Vue.toDisplayString, l6 = window.Vue.computed, om = window.Vue.toRef, ts = window.Vue.createVNode, im = window.Vue.toHandlers, u6 = window.Vue.renderSlot, c6 = window.Vue.normalizeClass, d6 = window.Vue.createElementVNode;
var Rg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const f6 = Og({
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
      return ue("feather-select-active");
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
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e];
        _s(r, this.$refs.list.$el);
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
    FeatherList: Md,
    FeatherListItem: Vs
  }
});
function h6(e, r, o, s, a, u) {
  const c = Qr("FeatherListItem"), f = Qr("FeatherList");
  return Ja(), rm(f, Xa(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: eo(() => [
      (Ja(!0), Pg(o6, null, i6(e.options, (w, v) => (Ja(), rm(c, {
        key: w[e.textProp],
        "as-li": "",
        id: e.getId(v),
        role: "option",
        tabindex: "-1",
        class: "result-item",
        "aria-selected": e.isSelected(v),
        selected: e.isSelected(v),
        onClick: (_) => e.select(w)
      }, {
        default: eo(() => [
          s6(a6(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var p6 = /* @__PURE__ */ Rg(f6, [["render", h6], ["__scopeId", "data-v-eae820da"]]);
const w6 = r6(_d(_d({}, yl), pi), {
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
}), v6 = {
  "update:modelValue": (e) => !0
}, m6 = Og({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: v6,
  props: w6,
  setup(e, r) {
    wi(e), Vl(e);
    const o = l6(() => ue("feather-select-input")), { validate: s } = fi(o, om(e, "modelValue"), e.label, e.schema, om(e, "error"));
    return _d({
      inputId: o,
      validate: s
    }, hi(r.attrs));
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
      return ue("feather-select-description");
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
        const e = this.internalValue, r = this.options.filter((o) => o[this.textProp] === e[this.textProp]);
        if (r && r.length)
          return this.options.indexOf(r[0]);
      }
      return -1;
    },
    icon: () => El
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
      if (e.keyCode === ne.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === ne.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === ne.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === ne.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === ne.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === ne.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const r = String.fromCharCode(e.keyCode);
        this.charsSoFar += r, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      oo(this.delayTimeout), this.delayTimeout = ro(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: $l,
    InputSubText: di,
    FeatherMenu: M_,
    List: p6,
    FeatherIcon: j
  }
});
function _6(e, r, o, s, a, u) {
  const c = Qr("FeatherIcon"), f = Qr("InputWrapper"), w = Qr("List"), v = Qr("FeatherMenu"), _ = Qr("InputSubText");
  return Ja(), Pg("div", Xa(e.inherittedAttrs, { class: "feather-select-container" }), [
    ts(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: eo(($) => [
        ts(f, Xa({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, im($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: eo(() => [
            u6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: eo(() => [
            ts(c, {
              class: c6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: eo(() => [
            d6("input", Xa(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, im(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: eo(() => [
        ts(w, {
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
    ts(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var g6 = /* @__PURE__ */ Rg(m6, [["render", _6], ["__scopeId", "data-v-ecb32d90"]]);
const $6 = window.Vue.openBlock, y6 = window.Vue.createElementBlock, Fg = window.Vue.createElementVNode;
var V6 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const b6 = {}, C6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S6 = /* @__PURE__ */ Fg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), k6 = /* @__PURE__ */ Fg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), E6 = [
  S6,
  k6
];
function I6(e, r) {
  return $6(), y6("svg", C6, E6);
}
var x6 = /* @__PURE__ */ V6(b6, [["render", I6]]);
const Qa = window.Vue.openBlock, gd = window.Vue.createElementBlock, Ug = window.Vue.createElementVNode, A6 = window.Vue.defineComponent, Yr = window.Vue.ref, B6 = window.Vue.provide, sm = window.Vue.computed, T6 = window.Vue.onUnmounted, am = window.Vue.toRef, L6 = window.Vue.resolveComponent, M6 = window.Vue.Fragment, D6 = window.Vue.createBlock, N6 = window.Vue.Teleport, lm = window.Vue.createVNode, O6 = window.Vue.Transition, P6 = window.Vue.withCtx, R6 = window.Vue.normalizeClass, F6 = window.Vue.normalizeStyle, U6 = window.Vue.toDisplayString, W6 = window.Vue.createCommentVNode, q6 = window.Vue.renderSlot, Hc = window.Vue.nextTick;
var Wg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const H6 = {}, z6 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Y6 = /* @__PURE__ */ Ug("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), G6 = [
  Y6
];
function j6(e, r) {
  return Qa(), gd("svg", z6, G6);
}
var Z6 = /* @__PURE__ */ Wg(H6, [["render", j6]]), et = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(et || {}), qn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(qn || {});
const K6 = (e, r, o, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= r.height + s && c.push(et.top), a >= r.height + s && c.push(et.bottom);
  const f = [];
  u >= r.width + s && f.push(et.right), e.left >= r.width + s && f.push(et.left);
  let w = [...f, ...c];
  return (o === et.top || o === et.bottom) && (w = [...c, ...f]), w.indexOf(o) > -1 ? o : w.length ? w[0] : o;
}, J6 = (e, r, o, s, a = 28) => {
  if (e === et.left || e === et.right)
    return qn.center;
  const u = r.left + r.width / 2, c = window.innerWidth - r.right, f = [], w = u, v = c + r.width / 2, _ = o.width - a, $ = o.width / 2;
  return w >= $ && v >= $ && f.push(qn.center), v >= _ && f.push(qn.left), w >= _ && f.push(qn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, X6 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => et.top
  },
  pointerAlignment: {
    type: String,
    default: () => qn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Q6 = A6({
  props: X6,
  setup(e) {
    const r = Yr(!1), o = Yr(!1), s = ue("feather-tooltip-trigger"), a = ue("feather-tooltip"), u = "data-feather-tooltip";
    B6("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      oo(c), r.value || (c = ro(N, e.enterDelay));
    }, w = () => {
      oo(c), c = ro(D, e.exitDelay);
    }, v = ($e) => {
      $e.keyCode === ne.ESCAPE && ($e.preventDefault(), D(!0));
    }, _ = sm(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = Yr(document), T = L_(y, () => D(!0));
    T6(() => D(!0));
    const L = () => document.getElementById(a), N = () => {
      o.value = !1, r.value = !0, Hc(() => {
        const $e = L();
        he($e), r.value = !1, Hc(() => {
          o.value = !0, r.value = !0, T.value = !0;
        });
      });
    }, D = ($e = !1) => {
      R.value = "", k.value = "", O.value = "", z.value = "", r.value = !1, $e && (o.value = !1), T.value = !1;
    }, S = am(e, "placement"), x = am(e, "pointerAlignment"), I = 8, P = 24, k = Yr(""), R = Yr(""), O = Yr(""), z = Yr(""), fe = sm(() => z.value ? "p-" + z.value : !1), he = ($e) => {
      const Ce = document.querySelector(`[${u}=${s}]`);
      if (!Ce) {
        console.log("trigger not found");
        return;
      }
      Hc(() => {
        const Ae = Ce.getBoundingClientRect(), Se = $e.getBoundingClientRect(), ce = K6(Ae, Se, S.value, I), Me = J6(ce, Ae, Se, x.value, P);
        O.value = Me.toString(), z.value = ce.toString();
        let We = 0, je = 0;
        if ((ce === et.left || ce === et.right) && (We = Ae.top + Ae.height / 2 - Se.height / 2, ce === et.left && (je = Ae.left - Se.width - I), ce === et.right && (je = Ae.right)), ce === et.top || ce === et.bottom) {
          We = Ae.top - Se.height - I, ce === et.bottom && (We = Ae.bottom);
          const gn = Ae.left + Ae.width / 2;
          switch (Me) {
            case qn.center:
              je = gn - Se.width / 2;
              break;
            case qn.left:
              je = gn - P;
              break;
            case qn.right:
              je = gn - Se.width + P;
              break;
          }
        }
        k.value = We.toString() + "px", R.value = je.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: r,
      animate: o,
      alignmentClass: O,
      placementClass: fe,
      top: k,
      left: R,
      tooltipID: a
    };
  },
  components: {
    Pointer: Z6
  }
}), e7 = ["id"];
function t7(e, r, o, s, a, u) {
  const c = L6("Pointer");
  return Qa(), gd(M6, null, [
    (Qa(), D6(N6, { to: "body" }, [
      lm(O6, { css: e.animate }, {
        default: P6(() => [
          e.show ? (Qa(), gd("div", {
            key: 0,
            class: R6(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: F6({ left: e.left, top: e.top })
          }, [
            Ug("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, U6(e.title), 9, e7),
            lm(c, { class: "tooltip-pointer" })
          ], 6)) : W6("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    q6(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var um = /* @__PURE__ */ Wg(Q6, [["render", t7], ["__scopeId", "data-v-3da6b22e"]]);
const n7 = window.Vue.defineComponent, zc = window.Vue.normalizeStyle, Yc = window.Vue.createElementVNode, ns = window.Vue.unref, cm = window.Vue.toHandlers, dm = window.Vue.mergeProps, fm = window.Vue.withCtx, hm = window.Vue.createVNode, r7 = window.Vue.renderList, o7 = window.Vue.Fragment, rs = window.Vue.openBlock, os = window.Vue.createElementBlock, pm = window.Vue.normalizeClass, wm = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const i7 = { class: "row" }, s7 = /* @__PURE__ */ n7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * r.proportion : 0, a = (u) => u ? (Number(u) - Number(r.minStart)) * r.proportion : 0;
    return (u, c) => (rs(), os("div", i7, [
      Yc("div", {
        class: "line-gray",
        style: zc({
          width: a(r.events[0].createTime) + "px"
        })
      }, null, 4),
      hm(ns(um), {
        title: ns(In)(e.alarm.firstEventTime)
      }, {
        default: fm(({ attrs: f, on: w }) => [
          Yc("div", dm({ class: "circle" }, f, cm(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (rs(!0), os(o7, null, r7(r.events, (f, w) => (rs(), os("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[w + 1] ? (rs(), os("div", {
          key: 0,
          class: pm(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: zc({
            width: s(f.createTime, r.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : wm("", !0),
        hm(ns(um), {
          title: ns(In)(e.alarm.firstEventTime)
        }, {
          default: fm(({ attrs: v, on: _ }) => [
            r.events[w + 1] ? (rs(), os("div", dm({ key: 0 }, v, cm(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : wm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Yc("div", {
        class: pm(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: zc({
          width: s(e.events[e.events.length - 1].createTime, ns(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const a7 = /* @__PURE__ */ de(s7, [["__scopeId", "data-v-3341d12d"]]), l7 = window.Vue.openBlock, u7 = window.Vue.createElementBlock, qg = window.Vue.createElementVNode;
var c7 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const d7 = {}, f7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, h7 = /* @__PURE__ */ qg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), p7 = /* @__PURE__ */ qg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), w7 = [
  h7,
  p7
];
function v7(e, r) {
  return l7(), u7("svg", f7, w7);
}
var m7 = /* @__PURE__ */ c7(d7, [["render", v7]]);
const _7 = window.Vue.defineComponent, $d = window.Vue.createElementVNode, g7 = window.Vue.renderList, vm = window.Vue.Fragment, Gc = window.Vue.openBlock, jc = window.Vue.createElementBlock, $7 = window.Vue.normalizeClass, y7 = window.Vue.unref, mm = window.Vue.toDisplayString, V7 = window.Vue.pushScopeId, b7 = window.Vue.popScopeId, C7 = (e) => (V7("data-v-2e087f7b"), e = e(), b7(), e), S7 = /* @__PURE__ */ C7(() => /* @__PURE__ */ $d("strong", null, "Events:", -1)), k7 = /* @__PURE__ */ _7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (Gc(), jc(vm, null, [
      S7,
      (Gc(!0), jc(vm, null, g7(r.events, (a) => (Gc(), jc("div", {
        class: "event-description",
        key: a.id
      }, [
        $d("div", {
          class: $7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        $d("div", null, mm(y7(In)(a.createTime)) + " - " + mm(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const E7 = /* @__PURE__ */ de(k7, [["__scopeId", "data-v-2e087f7b"]]), I7 = window.Vue.defineComponent, x7 = window.Vue.normalizeClass, Ut = window.Vue.createElementVNode, qo = window.Vue.toDisplayString, Ct = window.Vue.unref, Ho = window.Vue.createVNode, Hg = window.Vue.createTextVNode, A7 = window.Vue.renderList, _m = window.Vue.Fragment, Un = window.Vue.openBlock, Gr = window.Vue.createElementBlock, gm = window.Vue.createBlock, Ua = window.Vue.createCommentVNode, B7 = window.Vue.normalizeStyle, T7 = window.Vue.pushScopeId, L7 = window.Vue.popScopeId, M7 = (e) => (T7("data-v-01717d0d"), e = e(), L7(), e), D7 = { class: "section detail" }, N7 = { class: "id" }, O7 = {
  key: 0,
  class: "section"
}, P7 = /* @__PURE__ */ M7(() => /* @__PURE__ */ Ut("div", { class: "id" }, "Alarms", -1)), R7 = { class: "action-btns" }, F7 = { class: "zoom" }, U7 = /* @__PURE__ */ Hg(" Zoom "), W7 = { class: "times" }, q7 = {
  key: 0,
  class: "timeline-container"
}, H7 = { class: "alarm-id" }, z7 = {
  key: 0,
  class: "panel"
}, fr = window.Vue.ref, Y7 = window.Vue.watch, G7 = /* @__PURE__ */ I7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var P, k;
    const r = e, o = _n(), s = fr(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = fr(a[0]), c = fr(r.width), f = fr(r.width), w = fr(new Date().getTime()), v = () => {
      var R, O;
      if (!r.situation.events) {
        const z = (O = (R = r.situation) == null ? void 0 : R.alarms) == null ? void 0 : O.map((fe) => fe.id);
        o.getEvents(r.situation.id, z);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = fr(r.situation.alarms), y = fr(
      ((k = ge.exports.minBy((P = r.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), T = fr(_());
    Y7(r, () => {
      var R, O;
      y.value = ((O = ge.exports.minBy((R = r.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || new Date().getTime(), v(), c.value = f.value, T.value = _(), $.value = r.situation.alarms, u.value = a[0];
    });
    const L = (R) => {
      if ((R == null ? void 0 : R.id) === 1 && ($.value = r.situation.alarms), (R == null ? void 0 : R.id) === 2) {
        const O = ge.exports.groupBy($.value, "severity"), z = [
          ...O.CRITICAL || [],
          ...O.MAJOR || [],
          ...O.MINOR || [],
          ...O.WARNING || [],
          ...O.NORMAL || [],
          ...O.CLEARED || [],
          ...O.INDETERMINATE || []
        ];
        $.value = z.filter((fe) => fe);
      }
      if ((R == null ? void 0 : R.id) === 3) {
        const O = ge.exports.reverse(
          ge.exports.sortBy(
            r.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        $.value = O;
      }
    }, N = () => {
      c.value += 100, T.value = _();
    }, D = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, x = (R) => {
      s.value = R;
    }, I = () => {
      s.value = 0;
    };
    return (R, O) => {
      var z, fe;
      return Un(), Gr(_m, null, [
        Ut("div", D7, [
          Ut("div", {
            class: x7(["severity-line", [`${(fe = (z = r.situation) == null ? void 0 : z.severity) == null ? void 0 : fe.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ut("div", null, [
            Ut("div", N7, "Situation " + qo(r.situation.id), 1),
            Ut("div", null, " Duration: " + qo(Ct(ml)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Un(), Gr("div", O7, [
          P7,
          Ut("div", R7, [
            Ho(Ct(g6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                O[0] || (O[0] = (he) => u.value = he),
                L
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ut("div", F7, [
              U7,
              Ut("div", null, [
                Ho(Ct(j), {
                  icon: Ct(x6),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"]),
                Ho(Ct(j), {
                  icon: Ct(Z_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                Ho(Ct(j), {
                  icon: Ct(m7),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Un(), Gr("div", {
            key: 0,
            class: "alarms",
            style: B7({
              width: f.value + 50 + "px"
            })
          }, [
            Ut("div", W7, [
              Ut("div", null, qo(Ct(In)(y.value)), 1),
              Ut("div", null, qo(Ct(In)(w.value)), 1)
            ]),
            e.situation.events ? (Un(), Gr("div", q7, [
              (Un(!0), Gr(_m, null, A7($.value, (he) => (Un(), Gr("div", {
                class: "timeline",
                key: he.id
              }, [
                Ut("div", H7, [
                  Hg(qo(he.nodeLabel) + " - " + qo(he.id) + " ", 1),
                  s.value === he.id ? (Un(), gm(Ct(j), {
                    key: 0,
                    icon: Ct(El),
                    class: "zoom-icon expand",
                    onClick: I
                  }, null, 8, ["icon"])) : (Un(), gm(Ct(j), {
                    key: 1,
                    icon: Ct(S_),
                    class: "zoom-icon expand",
                    onClick: () => x(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Ho(a7, {
                  alarm: he,
                  proportion: T.value,
                  "min-start": y.value,
                  events: r.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === he.id ? (Un(), Gr("div", z7, [
                  Ho(E7, {
                    events: r.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Ua("", !0)
              ]))), 128))
            ])) : Ua("", !0)
          ], 4)) : Ua("", !0)
        ])) : Ua("", !0)
      ], 64);
    };
  }
});
const j7 = /* @__PURE__ */ de(G7, [["__scopeId", "data-v-01717d0d"]]), Z7 = window.Vue.defineComponent, Et = window.Vue.createElementVNode, pn = window.Vue.unref, ct = window.Vue.createTextVNode, zo = window.Vue.withCtx, Ne = window.Vue.openBlock, K7 = window.Vue.createBlock, Wa = window.Vue.createCommentVNode, hr = window.Vue.createVNode, Fe = window.Vue.createElementBlock, J7 = window.Vue.resolveComponent, jr = window.Vue.toDisplayString, $m = window.Vue.renderList, ym = window.Vue.Fragment, X7 = window.Vue.pushScopeId, Q7 = window.Vue.popScopeId, $i = (e) => (X7("data-v-3e9f0cbf"), e = e(), Q7(), e), eF = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, tF = { class: "header" }, nF = /* @__PURE__ */ $i(() => /* @__PURE__ */ Et("h3", null, "AI Suggestions", -1)), rF = { class: "header-actions" }, oF = /* @__PURE__ */ ct(" Re-evaluate "), iF = /* @__PURE__ */ ct(" Refresh "), sF = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, aF = /* @__PURE__ */ $i(() => /* @__PURE__ */ Et("span", null, "Loading\u2026", -1)), lF = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, uF = /* @__PURE__ */ $i(() => /* @__PURE__ */ Et("span", null, "Requesting a fresh analysis\u2026", -1)), cF = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, dF = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, fF = /* @__PURE__ */ ct(" The LLM integration is currently disabled. Enable it on the "), hF = /* @__PURE__ */ ct("configuration page"), pF = /* @__PURE__ */ ct(" to start generating suggestions for new situations. "), wF = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, vF = /* @__PURE__ */ ct(" No API key is configured. Add one on the "), mF = /* @__PURE__ */ ct("configuration page"), _F = /* @__PURE__ */ ct(" to enable AI suggestions. "), gF = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, $F = /* @__PURE__ */ ct(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), yF = /* @__PURE__ */ $i(() => /* @__PURE__ */ Et("strong", null, "Re-evaluate", -1)), VF = /* @__PURE__ */ ct(" above to trigger one now. "), bF = [
  $F,
  yF,
  VF
], CF = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, SF = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, kF = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, EF = { class: "failed-msg" }, IF = /* @__PURE__ */ ct(" The last LLM request failed: "), xF = /* @__PURE__ */ ct(" Retry "), AF = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, BF = /* @__PURE__ */ ct(" Could not load suggestions. Please retry. "), TF = /* @__PURE__ */ ct("Retry"), LF = {
  key: 6,
  "data-test": "ai-ready"
}, MF = {
  key: 0,
  class: "meta"
}, DF = /* @__PURE__ */ ct(" Generated by "), NF = { class: "section" }, OF = /* @__PURE__ */ $i(() => /* @__PURE__ */ Et("h4", null, "Probable root causes", -1)), PF = {
  key: 0,
  "data-test": "ai-root-causes"
}, RF = {
  key: 1,
  class: "empty"
}, FF = { class: "section" }, UF = /* @__PURE__ */ $i(() => /* @__PURE__ */ Et("h4", null, "Possible resolutions", -1)), WF = {
  key: 0,
  "data-test": "ai-resolutions"
}, qF = {
  key: 1,
  class: "empty"
}, Zc = window.Vue.computed, HF = window.Vue.onBeforeUnmount, zF = window.Vue.onMounted, Kc = window.Vue.ref, YF = /* @__PURE__ */ Z7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const r = e, o = io(), s = Kc("loading"), a = Kc(null), u = Kc(null), c = 5e3, f = 5 * 60 * 1e3;
    let w = null, v = 0;
    const _ = () => {
      w !== null && (clearInterval(w), w = null);
    }, $ = () => {
      s.value === "pending" && w === null && (v = Date.now(), w = setInterval(async () => {
        if (Date.now() - v > f) {
          _();
          return;
        }
        await y(), s.value !== "pending" && _();
      }, c));
    }, y = async () => {
      const x = await $_(r.situationId);
      if (x === !1) {
        s.value = "error";
        return;
      }
      if (x === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = x, s.value = x.status;
    }, T = async () => {
      s.value = "loading", _(), await y(), $();
    }, L = async () => {
      u.value = null, s.value = "reanalyzing", _();
      const x = await iI(r.situationId);
      if (x === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await o.getLLMConfig();
        return;
      }
      a.value = x, s.value = x.status, $();
    };
    zF(async () => {
      o.llmConfig === null && await o.getLLMConfig(), await y(), $();
    }), HF(() => _());
    const N = Zc(() => {
      var x;
      return (x = a.value) != null && x.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), D = Zc(() => {
      const x = o.llmConfig;
      return !x || !x.enabled ? "disabled" : x.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = Zc(
      () => {
        var x, I;
        return ((x = o.llmConfig) == null ? void 0 : x.enabled) === !0 && ((I = o.llmConfig) == null ? void 0 : I.apiKeyPresent) === !0;
      }
    );
    return (x, I) => {
      var k;
      const P = J7("router-link");
      return Ne(), Fe("div", eF, [
        Et("div", tF, [
          nF,
          Et("div", rF, [
            pn(S) ? (Ne(), K7(pn(ae), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: L
            }, {
              default: zo(() => [
                oF
              ]),
              _: 1
            }, 8, ["disabled"])) : Wa("", !0),
            hr(pn(ae), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: T
            }, {
              default: zo(() => [
                iF
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (Ne(), Fe("div", sF, [
          hr(pn(ti)),
          aF
        ])) : s.value === "reanalyzing" ? (Ne(), Fe("div", lF, [
          hr(pn(ti)),
          uF
        ])) : s.value === "absent" ? (Ne(), Fe("div", cF, [
          pn(D) === "disabled" ? (Ne(), Fe("span", dF, [
            fF,
            hr(P, { to: "/settings" }, {
              default: zo(() => [
                hF
              ]),
              _: 1
            }),
            pF
          ])) : pn(D) === "no-key" ? (Ne(), Fe("span", wF, [
            vF,
            hr(P, { to: "/settings" }, {
              default: zo(() => [
                mF
              ]),
              _: 1
            }),
            _F
          ])) : (Ne(), Fe("span", gF, bF)),
          u.value ? (Ne(), Fe("div", CF, jr(u.value), 1)) : Wa("", !0)
        ])) : s.value === "pending" ? (Ne(), Fe("div", SF, [
          hr(pn(ti)),
          Et("span", null, " Analyzing alarms with the LLM\u2026 requested at " + jr(pn(N)) + ". ", 1)
        ])) : s.value === "failed" ? (Ne(), Fe("div", kF, [
          Et("div", EF, [
            IF,
            Et("code", null, jr(((k = a.value) == null ? void 0 : k.error) || "unknown error"), 1)
          ]),
          hr(pn(ae), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: T
          }, {
            default: zo(() => [
              xF
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (Ne(), Fe("div", AF, [
          BF,
          hr(pn(ae), {
            secondary: "",
            onClick: T
          }, {
            default: zo(() => [
              TF
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (Ne(), Fe("div", LF, [
          a.value.completedAt ? (Ne(), Fe("div", MF, [
            DF,
            Et("strong", null, jr(a.value.model), 1),
            ct(" at " + jr(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Wa("", !0),
          Et("div", NF, [
            OF,
            a.value.rootCauses.length ? (Ne(), Fe("ol", PF, [
              (Ne(!0), Fe(ym, null, $m(a.value.rootCauses, (R, O) => (Ne(), Fe("li", {
                key: `cause-${O}`
              }, jr(R), 1))), 128))
            ])) : (Ne(), Fe("div", RF, "No root causes returned."))
          ]),
          Et("div", FF, [
            UF,
            a.value.resolutions.length ? (Ne(), Fe("ol", WF, [
              (Ne(!0), Fe(ym, null, $m(a.value.resolutions, (R, O) => (Ne(), Fe("li", {
                key: `res-${O}`
              }, jr(R), 1))), 128))
            ])) : (Ne(), Fe("div", qF, "No resolutions returned."))
          ])
        ])) : Wa("", !0)
      ]);
    };
  }
});
const GF = /* @__PURE__ */ de(YF, [["__scopeId", "data-v-3e9f0cbf"]]), jF = window.Vue.openBlock, ZF = window.Vue.createElementBlock, KF = window.Vue.createElementVNode;
var JF = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const XF = {}, QF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e9 = /* @__PURE__ */ KF("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), t9 = [
  e9
];
function n9(e, r) {
  return jF(), ZF("svg", QF, t9);
}
var ni = /* @__PURE__ */ JF(XF, [["render", n9]]);
const zg = window.Vue.defineComponent, Jc = window.Vue.ref, r9 = window.Vue.toRef, Xc = window.Vue.inject, Vm = window.Vue.watch, o9 = window.Vue.nextTick, bm = window.Vue.openBlock, Cm = window.Vue.createElementBlock, Qc = window.Vue.createElementVNode, i9 = window.Vue.normalizeClass, Sm = window.Vue.renderSlot, km = window.Vue.createCommentVNode, ed = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var s9 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const a9 = {
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
}, l9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, u9 = zg({
  emits: l9,
  props: a9,
  setup(e, r) {
    const o = Jc(), s = Jc(!1), a = Jc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = r9(e, "modelValue"), f = Xc("queueSnackbar", !1), w = Xc("unqueueSnackbar", !1), v = Xc("nextSnackbar", () => {
    }), _ = (N, D) => {
      let S, x, I = D;
      const P = () => {
        !S || (oo(S), S = 0, I -= Date.now() - x);
      }, k = () => {
        S || (x = Date.now(), S = ro(N, I));
      };
      return k(), { pause: P, resume: k };
    }, $ = () => {
      s.value = !1, r.emit("closed"), v && v();
    }, y = (N) => {
      N.keyCode === ne.ESCAPE && (a.value = !1);
    }, T = () => {
      o.value.pause();
    }, L = () => {
      a.value && o.value.resume();
    };
    return Vm(c, (N) => {
      N ? o9(() => {
        f === !1 ? a.value = N : f(u, a);
      }) : w === !1 ? a.value = N : w(u);
    }, { immediate: !0 }), Vm(a, (N) => {
      N ? (s.value = !0, o.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (r.emit("update:modelValue", !1), T());
    }), {
      hideTimeout: o,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: $,
      keyPressed: y,
      stopTimer: T,
      resumeTimer: L
    };
  }
}), c9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, d9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, f9 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, h9 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function p9(e, r, o, s, a, u) {
  return e.modelValue || e.contentShow ? (bm(), Cm("div", c9, [
    Qc("div", {
      class: i9(["feather-snackbar", {
        "fade-in": e.internalValue,
        "fade-out": e.contentShow && !e.internalValue,
        center: e.center,
        error: e.error
      }]),
      "data-ref-id": "feather-snackbar",
      onAnimationend: r[0] || (r[0] = (...c) => e.closed && e.closed(...c)),
      onKeydown: r[1] || (r[1] = (...c) => e.keyPressed && e.keyPressed(...c)),
      onMouseover: r[2] || (r[2] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onMouseleave: r[3] || (r[3] = (...c) => e.resumeTimer && e.resumeTimer(...c)),
      onFocusin: r[4] || (r[4] = (...c) => e.stopTimer && e.stopTimer(...c)),
      onFocusout: r[5] || (r[5] = (...c) => e.resumeTimer && e.resumeTimer(...c))
    }, [
      Qc("div", d9, [
        e.contentShow ? (bm(), Cm("div", f9, [
          Sm(e.$slots, "default", {}, void 0, !0)
        ])) : km("", !0)
      ]),
      Qc("div", h9, [
        Sm(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : km("", !0);
}
var Ml = /* @__PURE__ */ s9(u9, [["render", p9], ["__scopeId", "data-v-5cf64a62"]]);
const w9 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
zg({
  props: w9,
  setup() {
    let e, r = [];
    const o = () => {
      e && (e.val.value = !0);
    }, s = (c, f) => {
      const w = { id: c, val: f };
      e ? r.push(w) : (e = w, o());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : r = r.filter((f) => f.id != c);
    }, u = () => {
      r.length ? (e = r.shift(), o()) : e = void 0;
    };
    return ed("queueSnackbar", s), ed("unqueueSnackbar", a), ed("nextSnackbar", u), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const v9 = window.Vue.defineComponent, Te = window.Vue.unref, lt = window.Vue.createVNode, gs = window.Vue.createElementVNode, St = window.Vue.withCtx, Zr = window.Vue.openBlock, td = window.Vue.createBlock, Em = window.Vue.createCommentVNode, bs = window.Vue.createTextVNode, qa = window.Vue.createElementBlock, Im = window.Vue.toDisplayString, m9 = window.Vue.pushScopeId, _9 = window.Vue.popScopeId, Gd = (e) => (m9("data-v-a5b2d880"), e = e(), _9(), e), g9 = { id: "cont" }, $9 = { class: "btns-navigation" }, y9 = /* @__PURE__ */ Gd(() => /* @__PURE__ */ gs("span", null, "Situation List", -1)), V9 = /* @__PURE__ */ Gd(() => /* @__PURE__ */ gs("span", null, "Show Previous Situation ", -1)), b9 = /* @__PURE__ */ Gd(() => /* @__PURE__ */ gs("span", null, "Show Next Situation", -1)), C9 = { key: 1 }, S9 = {
  key: 0,
  class: "detail"
}, k9 = /* @__PURE__ */ bs("Details"), E9 = /* @__PURE__ */ bs("Metrics"), I9 = /* @__PURE__ */ bs("AI Suggestions"), x9 = {
  key: 1,
  class: "noSituation"
}, A9 = /* @__PURE__ */ bs("dismiss"), Kr = window.Vue.ref, xm = window.Vue.watch, B9 = window.Vue.onMounted, T9 = window.VueRouter.useRoute, L9 = /* @__PURE__ */ v9({
  __name: "SituationDetail",
  setup(e) {
    const r = Cr(), o = T9(), s = parseInt(o.params.id), a = Kr(s), u = _n(), c = Bl(), f = Kr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Kr(), v = Kr(), _ = Kr(!0), $ = Kr(
      u.filteredSituations.findIndex((D) => D === a.value)
    ), y = Kr(!1);
    xm(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), B9(() => {
      var S;
      const D = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = D - 90;
    });
    const T = () => {
      r.push({
        name: "situations"
      });
    }, L = (D) => {
      const S = $.value, x = u.filteredSituations[S + D];
      r.push({
        name: "situationDetail",
        params: {
          id: x
        }
      });
    };
    xm(o, () => {
      a.value = parseInt(o.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((D) => D == a.value);
    }), c.$subscribe((D, S) => {
      y.value = S.showError;
    });
    const N = (D) => {
      f.value = D || 0;
    };
    return (D, S) => (Zr(), qa("div", g9, [
      gs("div", $9, [
        lt(Te(ae), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: St(() => [
            lt(Te(j), {
              icon: Te(ni),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            y9
          ]),
          _: 1
        }),
        gs("div", null, [
          lt(Te(ae), {
            disabled: !Te(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => L(-1))
          }, {
            default: St(() => [
              lt(Te(j), {
                icon: Te(ni),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              V9
            ]),
            _: 1
          }, 8, ["disabled"]),
          lt(Te(ae), {
            disabled: !Te(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => L(1))
          }, {
            default: St(() => [
              b9,
              lt(Te(j), {
                icon: Te(ni),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (Zr(), td(Te(ti), {
        key: 0,
        class: "spinner"
      })) : (Zr(), qa("div", C9, [
        w.value ? (Zr(), qa("div", S9, [
          lt(Te(NO), { "onUpdate:modelValue": N }, {
            tabs: St(() => [
              lt(Te(Cc), null, {
                default: St(() => [
                  k9
                ]),
                _: 1
              }),
              lt(Te(Cc), null, {
                default: St(() => [
                  E9
                ]),
                _: 1
              }),
              lt(Te(Cc), { "data-test": "ai-suggestions-tab" }, {
                default: St(() => [
                  I9
                ]),
                _: 1
              })
            ]),
            default: St(() => [
              lt(Te(Sc), { class: "panel" }, {
                default: St(() => [
                  lt(J5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              lt(Te(Sc), { class: "panel" }, {
                default: St(() => [
                  v.value && f.value == 1 ? (Zr(), td(j7, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Em("", !0)
                ]),
                _: 1
              }),
              lt(Te(Sc), { class: "panel" }, {
                default: St(() => [
                  f.value == 2 ? (Zr(), td(GF, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : Em("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Zr(), qa("div", x9, " Error. The situation " + Im(Te(s)) + " does not exist. ", 1))
      ])),
      lt(Te(Ml), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (x) => y.value = x),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: St(() => [
          lt(Te(ae), {
            onClick: S[3] || (S[3] = (x) => y.value = !1),
            text: ""
          }, {
            default: St(() => [
              A9
            ]),
            _: 1
          })
        ]),
        default: St(() => [
          bs(Im(Te(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const M9 = /* @__PURE__ */ de(L9, [["__scopeId", "data-v-a5b2d880"]]), D9 = window.Vue.defineComponent, Qe = window.Vue.unref, en = window.Vue.createVNode, mt = window.Vue.createElementVNode, Yo = window.Vue.withCtx, Go = window.Vue.openBlock, is = window.Vue.createElementBlock, N9 = window.Vue.createCommentVNode, O9 = window.Vue.toDisplayString, jd = window.Vue.createTextVNode, P9 = window.Vue.normalizeClass, R9 = window.Vue.renderList, F9 = window.Vue.Fragment, U9 = window.Vue.createBlock, W9 = window.Vue.pushScopeId, q9 = window.Vue.popScopeId, Cs = (e) => (W9("data-v-1a57a9f3"), e = e(), q9(), e), H9 = { class: "container" }, z9 = /* @__PURE__ */ Cs(() => /* @__PURE__ */ mt("span", null, "Situation List", -1)), Y9 = /* @__PURE__ */ Cs(() => /* @__PURE__ */ mt("h2", null, "New Situation", -1)), G9 = { class: "form" }, j9 = { class: "fields" }, Z9 = {
  key: 0,
  class: "errorList"
}, K9 = { class: "footer" }, J9 = /* @__PURE__ */ Cs(() => /* @__PURE__ */ mt("span", null, "Clear", -1)), X9 = /* @__PURE__ */ Cs(() => /* @__PURE__ */ mt("span", null, "Add Situation", -1)), Q9 = { class: "alarm-column" }, eU = { class: "header-alarms" }, tU = /* @__PURE__ */ Cs(() => /* @__PURE__ */ mt("h3", null, "Add Unassociated Alarms", -1)), nU = /* @__PURE__ */ jd(" Total Alarms Added: "), rU = { class: "total" }, oU = { class: "list" }, iU = { class: "filters" }, sU = {
  key: 0,
  class: "alarms"
}, aU = /* @__PURE__ */ jd(" Error on creating new situation :( "), lU = /* @__PURE__ */ jd("dismiss"), pr = window.Vue.ref, uU = window.Vue.watch, cU = /* @__PURE__ */ D9({
  __name: "AddSituation",
  setup(e) {
    const r = Cr(), o = _n(), s = pr(), a = pr(""), u = pr(), c = pr(""), f = pr([]), w = pr(!1), v = pr(), _ = pr(o.unassignedAlarms);
    _.value.length || o.getUnassignedAlarms(), uU(
      () => o.unassignedAlarms,
      () => {
        _.value = o.unassignedAlarms;
      }
    );
    const $ = () => {
      r.push({
        name: "situations"
      });
    }, y = (S) => {
      w.value = !1, ge.exports.includes(f.value, S) ? ge.exports.remove(f.value, (x) => x === S) : f.value.push(S);
    }, T = () => {
      const S = "This field should not be empty";
      let x = !0;
      return s.value || (a.value = S, x = !1), u.value || (c.value = S, x = !1), f.value.length < 2 && (w.value = !0, x = !1), x;
    }, L = async () => {
      if (T()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await aI(S) ? r.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, N = () => {
      s.value = "", u.value = "", f.value = [], _.value = o.unassignedAlarms;
    }, D = (S) => {
      _.value = S;
    };
    return (S, x) => (Go(), is("div", H9, [
      en(Qe(ae), {
        primary: "",
        onClick: x[0] || (x[0] = () => $()),
        class: "back-btn"
      }, {
        default: Yo(() => [
          en(Qe(j), {
            icon: Qe(ni),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          z9
        ]),
        _: 1
      }),
      Y9,
      mt("div", G9, [
        mt("div", j9, [
          en(Qe(vd), {
            modelValue: s.value,
            "onUpdate:modelValue": x[1] || (x[1] = (I) => s.value = I),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          en(Qe(vd), {
            modelValue: u.value,
            "onUpdate:modelValue": x[2] || (x[2] = (I) => u.value = I),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (Go(), is("div", Z9, " You must add at least 2 alarms. ")) : N9("", !0),
          mt("div", K9, [
            en(Qe(ae), {
              class: "btn",
              onClick: N
            }, {
              default: Yo(() => [
                en(Qe(j), {
                  icon: Qe(ui),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                J9
              ]),
              _: 1
            }),
            en(Qe(ae), {
              class: "btn-add",
              onClick: L
            }, {
              default: Yo(() => [
                en(Qe(j), {
                  icon: Qe(Al),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                X9
              ]),
              _: 1
            })
          ])
        ]),
        mt("div", Q9, [
          mt("div", eU, [
            tU,
            mt("div", null, [
              mt("div", {
                class: P9(["totalAlarms", { errorList: w.value }])
              }, [
                nU,
                mt("span", rU, O9(Qe(f).length), 1)
              ], 2)
            ])
          ]),
          mt("div", oU, [
            mt("div", iU, [
              en(mi, {
                list: Qe(o).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (Go(), is("div", sU, [
              (Go(!0), is(F9, null, R9(_.value, (I) => (Go(), is("div", {
                key: I.id,
                class: "alarm-card"
              }, [
                en(Yd, {
                  selected: Qe(ge.exports.includes)(Qe(f), I.id),
                  alarm: I,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Go(), U9(_i, { key: 1 }))
          ])
        ])
      ]),
      en(Qe(Ml), {
        modelValue: v.value,
        "onUpdate:modelValue": x[4] || (x[4] = (I) => v.value = I),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Yo(() => [
          en(Qe(ae), {
            onClick: x[3] || (x[3] = (I) => v.value = !1),
            text: ""
          }, {
            default: Yo(() => [
              lU
            ]),
            _: 1
          })
        ]),
        default: Yo(() => [
          aU
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const dU = /* @__PURE__ */ de(cU, [["__scopeId", "data-v-1a57a9f3"]]), fU = window.Vue.defineComponent, hU = window.Vue.createElementVNode, pU = window.Vue.createTextVNode, wU = window.Vue.unref, vU = window.Vue.withCtx, mU = window.Vue.createVNode, _U = window.Vue.Fragment, gU = window.Vue.openBlock, $U = window.Vue.createElementBlock, yU = window.Vue.pushScopeId, VU = window.Vue.popScopeId, bU = (e) => (yU("data-v-bcb7dcc6"), e = e(), VU(), e), CU = /* @__PURE__ */ bU(() => /* @__PURE__ */ hU("div", { class: "main" }, "Something bad is happening...", -1)), SU = /* @__PURE__ */ pU(" Reload "), kU = /* @__PURE__ */ fU({
  __name: "ErrorPage",
  setup(e) {
    const r = Cr(), o = () => {
      r.push({ name: "situations" });
    };
    return (s, a) => (gU(), $U(_U, null, [
      CU,
      mU(wU(ae), {
        primary: "",
        onClick: o
      }, {
        default: vU(() => [
          SU
        ]),
        _: 1
      })
    ], 64));
  }
});
const EU = /* @__PURE__ */ de(kU, [["__scopeId", "data-v-bcb7dcc6"]]), IU = window.Vue.defineComponent, wt = window.Vue.unref, wn = window.Vue.createVNode, _r = window.Vue.createElementVNode, ss = window.Vue.withCtx, Jr = window.Vue.openBlock, Am = window.Vue.createBlock, xU = window.Vue.renderList, AU = window.Vue.Fragment, as = window.Vue.createElementBlock, BU = window.Vue.toDisplayString, Yg = window.Vue.createTextVNode, TU = window.Vue.pushScopeId, LU = window.Vue.popScopeId, Zd = (e) => (TU("data-v-6078e4ad"), e = e(), LU(), e), MU = { class: "container" }, DU = { class: "nav-btns" }, NU = /* @__PURE__ */ Zd(() => /* @__PURE__ */ _r("span", null, "Situation List", -1)), OU = /* @__PURE__ */ Zd(() => /* @__PURE__ */ _r("h2", null, "List Unassociated Alarms", -1)), PU = { class: "content" }, RU = { class: "filters" }, FU = { class: "list" }, UU = { class: "action-btns" }, WU = /* @__PURE__ */ Zd(() => /* @__PURE__ */ _r("span", null, "Move", -1)), qU = { key: 1 }, HU = {
  key: 0,
  class: "alarms"
}, zU = /* @__PURE__ */ Yg("dismiss"), wr = window.Vue.ref, YU = window.Vue.watch, GU = window.Vue.markRaw, jU = /* @__PURE__ */ IU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = GU({
      ArrowBack: ni,
      ExitToApp: md
    }), o = Cr(), s = _n();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = wr([]), u = wr([]), c = wr(!1), f = wr(!1), w = wr(""), v = wr(!1), _ = wr(!1), $ = wr(!0);
    YU(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (x) => {
      ge.exports.includes(u.value, x) ? ge.exports.remove(u.value, (I) => I === x) : u.value.push(x);
    }, T = () => {
      c.value ? u.value = a.value.map((x) => x.id) : u.value = [];
    }, L = async (x) => {
      await V_(x, u.value) ? s.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, N = () => {
      o.push({
        name: "situations"
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (x) => {
      a.value = x;
    };
    return (x, I) => (Jr(), as("div", MU, [
      _r("div", DU, [
        wn(wt(ae), {
          primary: "",
          onClick: I[0] || (I[0] = () => N())
        }, {
          default: ss(() => [
            wn(wt(j), {
              icon: wt(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NU
          ]),
          _: 1
        }),
        wn(Q_)
      ]),
      OU,
      _r("div", PU, [
        _r("div", RU, [
          wn(mi, {
            list: wt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        _r("div", FU, [
          _r("div", UU, [
            wn(wt(no), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                I[1] || (I[1] = (P) => c.value = P),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            wn(wt(ae), { onClick: D }, {
              default: ss(() => [
                wn(wt(j), {
                  icon: wt(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                WU
              ]),
              _: 1
            })
          ]),
          $.value ? (Jr(), Am(wt(ti), {
            key: 0,
            class: "spinner"
          })) : (Jr(), as("div", qU, [
            wt(a).length ? (Jr(), as("div", HU, [
              (Jr(!0), as(AU, null, xU(wt(a), (P) => (Jr(), as("div", {
                key: P.id,
                class: "card"
              }, [
                wn(Yd, {
                  selected: wt(ge.exports.includes)(wt(u), P.id),
                  alarm: P,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Jr(), Am(_i, { key: 1 }))
          ]))
        ])
      ]),
      wn(Dg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: L,
        onDrawerClosed: I[2] || (I[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      wn(wt(Ml), {
        modelValue: v.value,
        "onUpdate:modelValue": I[4] || (I[4] = (P) => v.value = P),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: ss(() => [
          wn(wt(ae), {
            onClick: I[3] || (I[3] = (P) => v.value = !1),
            text: ""
          }, {
            default: ss(() => [
              zU
            ]),
            _: 1
          })
        ]),
        default: ss(() => [
          Yg(BU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const ZU = /* @__PURE__ */ de(jU, [["__scopeId", "data-v-6078e4ad"]]), KU = window.Vue.defineComponent, nd = window.Vue.unref, JU = window.Vue.createVNode, XU = window.Vue.createElementVNode, QU = window.Vue.withCtx, eW = window.Vue.openBlock, tW = window.Vue.createBlock, nW = window.Vue.pushScopeId, rW = window.Vue.popScopeId, oW = (e) => (nW("data-v-17251e76"), e = e(), rW(), e), iW = /* @__PURE__ */ oW(() => /* @__PURE__ */ XU("span", null, "Situation List", -1)), sW = window.Vue.markRaw, aW = /* @__PURE__ */ KU({
  __name: "SituationListBtn",
  setup(e) {
    const r = Cr(), o = sW({
      ArrowBack: ni
    }), s = () => {
      r.push({
        name: "situations"
      });
    };
    return (a, u) => (eW(), tW(nd(ae), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: QU(() => [
        JU(nd(j), {
          icon: nd(o).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        iW
      ]),
      _: 1
    }));
  }
});
const lW = /* @__PURE__ */ de(aW, [["__scopeId", "data-v-17251e76"]]);
var uW = Object.defineProperty, cW = Object.defineProperties, dW = Object.getOwnPropertyDescriptors, Bm = Object.getOwnPropertySymbols, fW = Object.prototype.hasOwnProperty, hW = Object.prototype.propertyIsEnumerable, Tm = (e, r, o) => r in e ? uW(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Xo = (e, r) => {
  for (var o in r || (r = {}))
    fW.call(r, o) && Tm(e, o, r[o]);
  if (Bm)
    for (var o of Bm(r))
      hW.call(r, o) && Tm(e, o, r[o]);
  return e;
}, pW = (e, r) => cW(e, dW(r));
const wW = window.Vue.defineComponent, Lm = window.Vue.toRef, vW = window.Vue.computed, mW = window.Vue.ref, Mm = window.Vue.resolveComponent, Dm = window.Vue.openBlock, Nm = window.Vue.createElementBlock, Om = window.Vue.mergeProps, Pm = window.Vue.createVNode, _W = window.Vue.normalizeClass, Ha = window.Vue.withCtx, Rm = window.Vue.renderSlot, gW = window.Vue.createElementVNode, $W = window.Vue.toHandlers, yW = window.Vue.toDisplayString, VW = window.Vue.createCommentVNode, bW = Xo(Xo({
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
}, yl), pi), CW = {
  "update:modelValue": (e) => !0
};
var SW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const kW = wW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: CW,
  props: bW,
  setup(e, r) {
    wi(e), Vl(e);
    const o = Lm(e, "id"), s = vW(() => o.value ? o.value : ue("feather-input-label")), a = mW(), { validate: u } = fi(s, a, e.label, e.schema, Lm(e, "error"));
    return Xo({
      inputId: s,
      internalValue: a,
      validate: u
    }, hi(r.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return ue("feather-input-description");
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
      const e = Xo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), pW(Xo(Xo({}, e), this.listeners), {
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
    InputSubText: di,
    InputWrapper: $l
  }
}), EW = ["maxlength"], IW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function xW(e, r, o, s, a, u) {
  const c = Mm("InputWrapper"), f = Mm("InputSubText");
  return Dm(), Nm("div", Om(e.inherittedAttrs, { class: "feather-input-container" }), [
    Pm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: _W(["feather-input-content", e.contentCls])
    }, {
      pre: Ha(() => [
        Rm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Ha(() => [
        Rm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Ha(() => [
        gW("input", Om(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, $W(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, EW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Pm(f, { id: e.descriptionId }, {
      right: Ha(() => [
        e.maxlength ? (Dm(), Nm("div", IW, yW(e.charCount), 1)) : VW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var vr = /* @__PURE__ */ SW(kW, [["render", xW], ["__scopeId", "data-v-bf37b0d6"]]);
const AW = window.Vue.openBlock, BW = window.Vue.createElementBlock, Kd = window.Vue.createElementVNode;
var TW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const LW = {}, MW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DW = /* @__PURE__ */ Kd("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), NW = /* @__PURE__ */ Kd("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), OW = /* @__PURE__ */ Kd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), PW = [
  DW,
  NW,
  OW
];
function RW(e, r) {
  return AW(), BW("svg", MW, PW);
}
var FW = /* @__PURE__ */ TW(LW, [["render", RW]]);
const UW = window.Vue.openBlock, WW = window.Vue.createElementBlock, Gg = window.Vue.createElementVNode;
var qW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const HW = {}, zW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YW = /* @__PURE__ */ Gg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), GW = /* @__PURE__ */ Gg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), jW = [
  YW,
  GW
];
function ZW(e, r) {
  return UW(), WW("svg", zW, jW);
}
var KW = /* @__PURE__ */ qW(HW, [["render", ZW]]);
const JW = window.Vue.defineComponent, Ee = window.Vue.createVNode, U = window.Vue.createElementVNode, q = window.Vue.unref, Ie = window.Vue.createTextVNode, kt = window.Vue.withCtx, vt = window.Vue.openBlock, tn = window.Vue.createElementBlock, Ft = window.Vue.createCommentVNode, rd = window.Vue.createBlock, Ue = window.Vue.toDisplayString, XW = window.Vue.normalizeClass, Fm = window.Vue.Fragment, QW = window.Vue.createStaticVNode, eq = window.Vue.pushScopeId, tq = window.Vue.popScopeId, Le = (e) => (eq("data-v-9f5e2258"), e = e(), tq(), e), nq = { class: "container" }, rq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), oq = { class: "section" }, iq = { class: "title" }, sq = /* @__PURE__ */ Ie(" Choose the correlation engine that ALEC will use (see "), aq = ["href"], lq = /* @__PURE__ */ Ie(" for more information): "), uq = /* @__PURE__ */ Ie("Clustering"), cq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", { class: "hellinger" }, [
  /* @__PURE__ */ U("strong", null, "Hellinger distance")
], -1)), dq = /* @__PURE__ */ Ie(" LLM Based "), fq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), hq = {
  class: "section",
  "data-test": "llm-section"
}, pq = { class: "title-row" }, wq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", { class: "title" }, "LLM Root Cause Analysis", -1)), vq = ["aria-expanded"], mq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", { class: "llm-help" }, " When a new situation is created, ALEC asks a large language model to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. ALEC talks to any OpenAI-compatible API \u2014 the defaults below use OpenRouter (which can route to Claude, GPT, Gemini and others). The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), _q = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, gq = /* @__PURE__ */ QW('<strong data-v-9f5e2258>How to get an API key:</strong><ol data-v-9f5e2258><li data-v-9f5e2258> Pick a provider that exposes an OpenAI-compatible <code data-v-9f5e2258>/chat/completions</code> endpoint \u2014 <a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer" data-v-9f5e2258>OpenRouter</a> (the default, one key for many models), OpenAI, or Anthropic&#39;s compatibility endpoint. </li><li data-v-9f5e2258> Create an API key in that provider&#39;s dashboard and add a payment method if it requires one. </li><li data-v-9f5e2258> Set <em data-v-9f5e2258>Endpoint</em> to the provider&#39;s base URL (ALEC appends <code data-v-9f5e2258>/chat/completions</code>) and <em data-v-9f5e2258>Model</em> to a model the provider offers, e.g. <code data-v-9f5e2258>anthropic/claude-sonnet-4.6</code> or <code data-v-9f5e2258>openai/gpt-4o</code>. </li><li data-v-9f5e2258> Paste the key into the field below and click <em data-v-9f5e2258>Save Changes</em>. The key is stored on the OpenNMS server; it is never returned to the browser after saving. </li></ol><p class="pricing-hint" data-v-9f5e2258> Cost depends on the provider and model you choose. A single situation analysis is typically a few hundred tokens. Track 30-day usage in the panel below after you save. </p>', 3), $q = [
  gq
], yq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("strong", null, "LLM Enabled Root Cause Analysis", -1)), Vq = /* @__PURE__ */ Ie(" Automatically AI Evaluate new situations "), bq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", { class: "caption-inline" }, " When off, new situations are not analyzed automatically \u2014 click Re-evaluate on the AI Suggestions tab to trigger an analysis on demand. ", -1)), Cq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, Sq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ Ie(" Your API key must come from the same provider as the Endpoint above \u2014 an OpenRouter key ("),
  /* @__PURE__ */ U("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ Ie(") for "),
  /* @__PURE__ */ U("code", null, "openrouter.ai"),
  /* @__PURE__ */ Ie(", an Anthropic key ("),
  /* @__PURE__ */ U("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ Ie(") for "),
  /* @__PURE__ */ U("code", null, "api.anthropic.com"),
  /* @__PURE__ */ Ie(", an OpenAI key for "),
  /* @__PURE__ */ U("code", null, "api.openai.com"),
  /* @__PURE__ */ Ie(". ")
], -1)), kq = { class: "llm-key-row" }, Eq = /* @__PURE__ */ Ie(" Clear Key "), Iq = { class: "llm-validate-row" }, xq = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, Aq = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, Bq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), Tq = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, Lq = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, Mq = { class: "usage-summary" }, Dq = { class: "usage-label" }, Nq = ["title"], Oq = ["title"], Pq = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, Rq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("dt", null, "Input", -1)), Fq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("dt", null, "Output", -1)), Uq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("dt", null, "Cache read", -1)), Wq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("dt", null, "Cache create", -1)), qq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("dt", null, "Calls", -1)), Hq = { class: "muted" }, zq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("dt", null, "Cache hit", -1)), Yq = { class: "pricing-note" }, Gq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, jq = { class: "title-row" }, Zq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("div", { class: "title" }, "Correlation variables", -1)), Kq = ["aria-expanded"], Jq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, Xq = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("strong", null, "Alpha (\u03B1)", -1)), Qq = /* @__PURE__ */ Ie(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), eH = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("strong", null, "Beta (\u03B2)", -1)), tH = /* @__PURE__ */ Ie(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), nH = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("code", null, "[0, 1]", -1)), rH = /* @__PURE__ */ Ie(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), oH = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("strong", null, "Epsilon (\u03B5)", -1)), iH = /* @__PURE__ */ Ie(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), sH = { "data-test": "help-hellinger-w" }, aH = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("strong", null, "Hellinger w", -1)), lH = /* @__PURE__ */ Ie(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), uH = { "data-test": "help-hellinger-bias" }, cH = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("strong", null, "Hellinger bias", -1)), dH = /* @__PURE__ */ Ie(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), fH = { class: "variables" }, hH = { class: "action-row" }, pH = /* @__PURE__ */ Ie(" Close All Open Situations "), wH = /* @__PURE__ */ Ie(" Re-Evaluate All Open Alarms "), vH = /* @__PURE__ */ Le(() => /* @__PURE__ */ U("span", null, "Save Changes", -1)), mH = /* @__PURE__ */ Ie("dismiss"), za = window.Vue.computed, _H = window.Vue.markRaw, gH = window.Vue.onMounted, Oe = window.Vue.ref, $H = /* @__PURE__ */ JW({
  __name: "AccountSettings",
  setup(e) {
    var Sr, Ss, Gn, jn, ks, kr, Er, yi, _t, Zn, Es, zt, Vi, Is, Kn, gt, Jn, Ir, xs, Xn, As;
    const r = (ee) => ee >= 1e6 ? (ee / 1e6).toFixed(1) + "M" : ee >= 1e3 ? (ee / 1e3).toFixed(1) + "K" : String(ee), o = (ee) => ee < 0.01 ? "~$0.00" : "~$" + ee.toFixed(2), s = _H({
      MarkComplete: ul,
      Help: FW,
      Restore: KW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = io(), c = Oe(((Sr = u.engineInfo) == null ? void 0 : Sr.engineName) || tt.ENGINE_DBSCAN), f = Oe(
      u.engineInfo ? u.engineInfo.distanceMeasureName === tt.HELLINGER_OPTION : !0
    ), w = Oe((Gn = (Ss = u.engineInfo) == null ? void 0 : Ss.alpha) != null ? Gn : a.alpha), v = Oe((ks = (jn = u.engineInfo) == null ? void 0 : jn.beta) != null ? ks : a.beta), _ = Oe((Er = (kr = u.engineInfo) == null ? void 0 : kr.epsilon) != null ? Er : a.epsilon), $ = Oe(
      (_t = (yi = u.engineInfo) == null ? void 0 : yi.hellingerW) != null ? _t : a.hellingerW
    ), y = Oe(
      (Es = (Zn = u.engineInfo) == null ? void 0 : Zn.hellingerBias) != null ? Es : a.hellingerBias
    ), T = za(() => c.value === tt.ENGINE_DBSCAN), L = za(() => T.value && f.value), N = Oe((Vi = (zt = u.llmConfig) == null ? void 0 : zt.enabled) != null ? Vi : !1), D = Oe((Kn = (Is = u.llmConfig) == null ? void 0 : Is.autoEvaluate) != null ? Kn : !0), S = "https://openrouter.ai/api/v1", x = "anthropic/claude-sonnet-4.6", I = Oe((Jn = (gt = u.llmConfig) == null ? void 0 : gt.baseUrl) != null ? Jn : S), P = Oe((xs = (Ir = u.llmConfig) == null ? void 0 : Ir.model) != null ? xs : x), k = Oe(""), R = Oe((As = (Xn = u.llmConfig) == null ? void 0 : Xn.apiKeyPresent) != null ? As : !1), O = Oe(!1), z = Oe(!1), fe = Oe(null), he = za(
      () => k.value.trim().length === 0 && (!R.value || O.value)
    ), $e = async () => {
      fe.value = null, z.value = !0;
      try {
        const ee = {
          enabled: N.value,
          autoEvaluate: D.value,
          baseUrl: I.value.trim(),
          model: P.value.trim()
        }, Y = k.value.trim();
        Y.length > 0 && (ee.apiKey = Y), fe.value = await oI(ee);
      } finally {
        z.value = !1;
      }
    }, Ce = za(
      () => (!R.value || O.value) && k.value.trim().length === 0
    ), Ae = () => {
      k.value = "", O.value = !0, R.value = !1, N.value = !1;
    }, Se = Oe(!1), ce = Oe(!1), Me = Oe(!1), We = Oe(!1), je = Oe(""), gn = Oe(!1);
    gH(async () => {
      if (u.llmConfig === null) {
        const ee = await u.getLLMConfig();
        ee && (N.value = ee.enabled, D.value = ee.autoEvaluate, I.value = ee.baseUrl || S, P.value = ee.model || x, R.value = ee.apiKeyPresent);
      }
      await u.getLLMUsage(30);
    });
    const lo = () => {
      w.value = a.alpha, v.value = a.beta, _.value = a.epsilon, $.value = a.hellingerW, y.value = a.hellingerBias;
    }, ot = (ee, Y) => {
      je.value = ee, We.value = Y, Me.value = !0;
    }, Dl = () => {
      if (O.value)
        return {
          enabled: !1,
          autoEvaluate: D.value,
          baseUrl: I.value.trim(),
          model: P.value.trim(),
          clearApiKey: !0
        };
      const ee = k.value.trim(), Y = {
        enabled: N.value,
        autoEvaluate: D.value,
        baseUrl: I.value.trim(),
        model: P.value.trim()
      };
      return ee.length > 0 && (Y.apiKey = ee), Y;
    }, Nl = async () => {
      var uo, co, fo, ho, po, wo, vo, mo, Bs, Ts;
      const ee = {
        alpha: Number(w.value),
        beta: Number(v.value),
        epsilon: Number(_.value)
      };
      f.value && (ee.hellingerW = Number($.value), ee.hellingerBias = Number(y.value));
      const Y = await u.setEngineInfo(
        c.value,
        f.value,
        ee
      ), oe = await u.setLLMConfig(Dl());
      oe && (k.value = "", O.value = !1, R.value = (co = (uo = u.llmConfig) == null ? void 0 : uo.apiKeyPresent) != null ? co : !1, N.value = (ho = (fo = u.llmConfig) == null ? void 0 : fo.enabled) != null ? ho : !1, D.value = (wo = (po = u.llmConfig) == null ? void 0 : po.autoEvaluate) != null ? wo : !0, I.value = (mo = (vo = u.llmConfig) == null ? void 0 : vo.baseUrl) != null ? mo : S, P.value = (Ts = (Bs = u.llmConfig) == null ? void 0 : Bs.model) != null ? Ts : x, u.getLLMUsage(30)), Y && oe ? (u.getEngineInfo(), ot("The settings were saved!", !1)) : ot(
        Y && !oe ? "Engine settings saved, but LLM configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, Ol = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const ee = await lI();
      ot(
        ee ? "All open situations were closed." : "Failed to close situations.",
        !ee
      );
    }, Yn = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const ee = await uI();
      ot(
        ee ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !ee
      );
    };
    return (ee, Y) => (vt(), tn(Fm, null, [
      Ee(lW),
      U("div", nq, [
        rq,
        U("div", oq, [
          U("div", iq, [
            sq,
            U("a", {
              target: "_blank",
              href: q(tt).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, aq),
            lq
          ]),
          Ee(q(j_), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": Y[1] || (Y[1] = (oe) => c.value = oe),
            label: "",
            hideLabel: ""
          }, {
            default: kt(() => [
              Ee(q(pd), {
                class: "radio-item",
                value: q(tt).ENGINE_DBSCAN
              }, {
                default: kt(() => [
                  uq
                ]),
                _: 1
              }, 8, ["value"]),
              Ee(q(no), {
                modelValue: f.value,
                "onUpdate:modelValue": Y[0] || (Y[0] = (oe) => f.value = oe),
                disabled: !q(T),
                class: "checkbox"
              }, {
                default: kt(() => [
                  cq
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Ee(q(pd), {
                class: "radio-item",
                value: q(tt).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: kt(() => [
                  dq
                ]),
                _: 1
              }, 8, ["value"]),
              fq
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        U("div", hq, [
          U("div", pq, [
            wq,
            U("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": ce.value,
              "aria-label": "How to get an API key",
              "data-test": "llm-key-help",
              onClick: Y[2] || (Y[2] = (oe) => ce.value = !ce.value)
            }, [
              Ee(q(j), {
                icon: q(s).Help
              }, null, 8, ["icon"])
            ], 8, vq)
          ]),
          mq,
          ce.value ? (vt(), tn("div", _q, $q)) : Ft("", !0),
          Ee(q(no), {
            modelValue: N.value,
            "onUpdate:modelValue": Y[3] || (Y[3] = (oe) => N.value = oe),
            disabled: q(Ce),
            class: "checkbox",
            "data-test": "llm-enabled"
          }, {
            default: kt(() => [
              yq
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          Ee(q(no), {
            modelValue: D.value,
            "onUpdate:modelValue": Y[4] || (Y[4] = (oe) => D.value = oe),
            disabled: !N.value,
            class: "checkbox sub-checkbox",
            "data-test": "llm-auto-evaluate"
          }, {
            default: kt(() => [
              Vq,
              bq
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          q(Ce) ? (vt(), tn("div", Cq, " Enter an API key to enable. ")) : Ft("", !0),
          Ee(q(vr), {
            modelValue: I.value,
            "onUpdate:modelValue": Y[5] || (Y[5] = (oe) => I.value = oe),
            label: "Endpoint (OpenAI-compatible base URL)",
            "data-test": "llm-base-url",
            class: "llm-text-input"
          }, null, 8, ["modelValue"]),
          Ee(q(vr), {
            modelValue: P.value,
            "onUpdate:modelValue": Y[6] || (Y[6] = (oe) => P.value = oe),
            label: "Model",
            "data-test": "llm-model",
            class: "llm-text-input"
          }, null, 8, ["modelValue"]),
          Sq,
          U("div", kq, [
            Ee(q(vr), {
              modelValue: k.value,
              "onUpdate:modelValue": Y[7] || (Y[7] = (oe) => k.value = oe),
              type: "password",
              autocomplete: "new-password",
              label: R.value && !O.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
              "data-test": "llm-api-key",
              class: "llm-key-input"
            }, null, 8, ["modelValue", "label"]),
            R.value && !O.value ? (vt(), rd(q(ae), {
              key: 0,
              secondary: "",
              "data-test": "llm-clear-key",
              onClick: Ae
            }, {
              default: kt(() => [
                Eq
              ]),
              _: 1
            })) : Ft("", !0)
          ]),
          U("div", Iq, [
            Ee(q(ae), {
              secondary: "",
              disabled: z.value || q(he),
              "data-test": "llm-validate-btn",
              onClick: $e
            }, {
              default: kt(() => [
                Ie(Ue(z.value ? "Validating\u2026" : "Validate key"), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            q(he) ? (vt(), tn("span", xq, " Enter an API key to validate. ")) : fe.value ? (vt(), tn("span", {
              key: 1,
              class: XW(["llm-validate-result", fe.value.ok ? "is-ok" : "is-error"]),
              "data-test": "llm-validate-result"
            }, [
              Ee(q(j), {
                icon: fe.value.ok ? q(s).MarkComplete : q(s).Help,
                class: "result-icon"
              }, null, 8, ["icon"]),
              Ie(" " + Ue(fe.value.message), 1)
            ], 2)) : Ft("", !0)
          ]),
          R.value && !O.value ? (vt(), tn("div", Aq, [
            Ee(q(j), {
              icon: q(s).MarkComplete,
              class: "saved-icon"
            }, null, 8, ["icon"]),
            Bq
          ])) : Ft("", !0),
          O.value ? (vt(), tn("div", Tq, " Stored API key will be removed on save. ")) : Ft("", !0),
          q(u).llmUsage ? (vt(), tn("div", Lq, [
            U("div", Mq, [
              U("span", Dq, "Last " + Ue(q(u).llmUsage.daysWindow) + " days:", 1),
              U("span", {
                class: "usage-tokens",
                title: `${q(u).llmUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "llm-usage-tokens"
              }, Ue(r(q(u).llmUsage.totalTokens)) + " tokens ", 9, Nq),
              U("span", {
                class: "usage-cost",
                title: q(u).llmUsage.pricingNote,
                "data-test": "llm-usage-cost"
              }, " (" + Ue(o(q(u).llmUsage.estimatedCostUsd)) + ") ", 9, Oq),
              U("button", {
                type: "button",
                class: "usage-toggle",
                onClick: Y[8] || (Y[8] = (oe) => gn.value = !gn.value),
                "data-test": "llm-usage-toggle"
              }, Ue(gn.value ? "hide details" : "show details"), 1)
            ]),
            gn.value ? (vt(), tn("dl", Pq, [
              U("div", null, [
                Rq,
                U("dd", null, Ue(r(q(u).llmUsage.inputTokens)), 1)
              ]),
              U("div", null, [
                Fq,
                U("dd", null, Ue(r(q(u).llmUsage.outputTokens)), 1)
              ]),
              U("div", null, [
                Uq,
                U("dd", null, Ue(r(q(u).llmUsage.cacheReadInputTokens)), 1)
              ]),
              U("div", null, [
                Wq,
                U("dd", null, Ue(r(q(u).llmUsage.cacheCreationInputTokens)), 1)
              ]),
              U("div", null, [
                qq,
                U("dd", null, [
                  Ie(Ue(q(u).llmUsage.calls) + " ", 1),
                  U("span", Hq, "(" + Ue(q(u).llmUsage.successfulCalls) + " ok / " + Ue(q(u).llmUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              U("div", null, [
                zq,
                U("dd", null, Ue((q(u).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              U("div", Yq, Ue(q(u).llmUsage.pricingNote), 1)
            ])) : Ft("", !0)
          ])) : Ft("", !0)
        ]),
        q(T) ? (vt(), tn("div", Gq, [
          U("div", jq, [
            Zq,
            U("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": Se.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: Y[9] || (Y[9] = (oe) => Se.value = !Se.value)
            }, [
              Ee(q(j), {
                icon: q(s).Help
              }, null, 8, ["icon"])
            ], 8, Kq),
            U("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: lo
            }, [
              Ee(q(j), {
                icon: q(s).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          Se.value ? (vt(), tn("div", Jq, [
            U("ul", null, [
              U("li", null, [
                Xq,
                Qq,
                U("em", null, "Default: " + Ue(a.alpha), 1)
              ]),
              U("li", null, [
                eH,
                tH,
                nH,
                rH,
                U("em", null, "Default: " + Ue(a.beta), 1)
              ]),
              U("li", null, [
                oH,
                iH,
                U("em", null, "Default: " + Ue(a.epsilon), 1)
              ]),
              q(L) ? (vt(), tn(Fm, { key: 0 }, [
                U("li", sH, [
                  aH,
                  lH,
                  U("em", null, "Default: " + Ue(a.hellingerW), 1)
                ]),
                U("li", uH, [
                  cH,
                  dH,
                  U("em", null, "Default: " + Ue(a.hellingerBias), 1)
                ])
              ], 64)) : Ft("", !0)
            ])
          ])) : Ft("", !0),
          U("div", fH, [
            Ee(q(vr), {
              modelValue: w.value,
              "onUpdate:modelValue": Y[10] || (Y[10] = (oe) => w.value = oe),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Ee(q(vr), {
              modelValue: v.value,
              "onUpdate:modelValue": Y[11] || (Y[11] = (oe) => v.value = oe),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Ee(q(vr), {
              modelValue: _.value,
              "onUpdate:modelValue": Y[12] || (Y[12] = (oe) => _.value = oe),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            q(L) ? (vt(), rd(q(vr), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": Y[13] || (Y[13] = (oe) => $.value = oe),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Ft("", !0),
            q(L) ? (vt(), rd(q(vr), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": Y[14] || (Y[14] = (oe) => y.value = oe),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Ft("", !0)
          ])
        ])) : Ft("", !0),
        U("div", hH, [
          Ee(q(ae), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Ol
          }, {
            default: kt(() => [
              pH
            ]),
            _: 1
          }),
          Ee(q(ae), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Yn
          }, {
            default: kt(() => [
              wH
            ]),
            _: 1
          }),
          Ee(q(ae), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Nl
          }, {
            default: kt(() => [
              Ee(q(j), {
                icon: q(s).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              vH
            ]),
            _: 1
          })
        ]),
        Ee(q(Ml), {
          modelValue: Me.value,
          "onUpdate:modelValue": Y[16] || (Y[16] = (oe) => Me.value = oe),
          right: "",
          error: We.value,
          timeout: 6e3
        }, {
          button: kt(() => [
            Ee(q(ae), {
              onClick: Y[15] || (Y[15] = (oe) => Me.value = !1),
              text: ""
            }, {
              default: kt(() => [
                mH
              ]),
              _: 1
            })
          ]),
          default: kt(() => [
            Ie(Ue(je.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const yH = /* @__PURE__ */ de($H, [["__scopeId", "data-v-9f5e2258"]]), VH = window.VueRouter.createRouter, bH = window.VueRouter.createWebHistory, CH = async () => {
  const e = io();
  e.userId || await e.getUserRole();
}, jg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || Zg;
      await io().getUserRole(), r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => CH(),
    component: lO
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: M9
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: dU
  },
  {
    path: "/error",
    name: "error",
    component: EU
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: ZU
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await io().getEngineInfo();
    },
    component: yH
  }
], od = window.VRouter;
if (od) {
  const e = "Plugin-alecUiExtension", r = od.hasRoute(e) ? e : "Plugin";
  for (const o of jg) {
    const { path: s, name: a, component: u, beforeEnter: c } = o;
    od.addRoute(r, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const Zg = VH({
  history: bH(),
  routes: jg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = PS;
