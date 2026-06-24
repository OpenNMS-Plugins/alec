var ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function SE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pg = { exports: {} }, Jf = { exports: {} }, hg = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, EE = hg, Xf = Object.prototype.toString, Qf = function(e) {
  return function(o) {
    var r = Xf.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Ri(e) {
  return e = e.toLowerCase(), function(r) {
    return Qf(r) === e;
  };
}
function ep(e) {
  return Array.isArray(e);
}
function Nu(e) {
  return typeof e > "u";
}
function kE(e) {
  return e !== null && !Nu(e) && e.constructor !== null && !Nu(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var mg = Ri("ArrayBuffer");
function IE(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && mg(e.buffer), o;
}
function AE(e) {
  return typeof e == "string";
}
function TE(e) {
  return typeof e == "number";
}
function wg(e) {
  return e !== null && typeof e == "object";
}
function Eu(e) {
  if (Qf(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var xE = Ri("Date"), LE = Ri("File"), ME = Ri("Blob"), NE = Ri("FileList");
function tp(e) {
  return Xf.call(e) === "[object Function]";
}
function DE(e) {
  return wg(e) && tp(e.pipe);
}
function OE(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Xf.call(e) === o || tp(e.toString) && e.toString() === o);
}
var BE = Ri("URLSearchParams");
function RE(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function PE() {
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
function FE(e, o, r) {
  return np(o, function(a, u) {
    r && typeof a == "function" ? e[u] = EE(a, r) : e[u] = a;
  }), e;
}
function UE(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function WE(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function HE(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function zE(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function qE(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Nu(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var GE = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Dt = {
  isArray: ep,
  isArrayBuffer: mg,
  isBuffer: kE,
  isFormData: OE,
  isArrayBufferView: IE,
  isString: AE,
  isNumber: TE,
  isObject: wg,
  isPlainObject: Eu,
  isUndefined: Nu,
  isDate: xE,
  isFile: LE,
  isBlob: ME,
  isFunction: tp,
  isStream: DE,
  isURLSearchParams: BE,
  isStandardBrowserEnv: PE,
  forEach: np,
  merge: Nf,
  extend: FE,
  trim: RE,
  stripBOM: UE,
  inherits: WE,
  toFlatObject: HE,
  kindOf: Qf,
  kindOfTest: Ri,
  endsWith: zE,
  toArray: qE,
  isTypedArray: GE,
  isFileList: NE
}, cs = Dt;
function Dm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var vg = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (cs.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    cs.forEach(r, function(m, v) {
      m === null || typeof m > "u" || (cs.isArray(m) ? v = v + "[]" : m = [m], cs.forEach(m, function(y) {
        cs.isDate(y) ? y = y.toISOString() : cs.isObject(y) && (y = JSON.stringify(y)), u.push(Dm(v) + "=" + Dm(y));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, YE = Dt;
function Yu() {
  this.handlers = [];
}
Yu.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Yu.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Yu.prototype.forEach = function(o) {
  YE.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var jE = Yu, ZE = Dt, KE = function(o, r) {
  ZE.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, _g = Dt;
function Ps(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
_g.inherits(Ps, Error, {
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
var gg = Ps.prototype, $g = {};
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
  $g[e] = { value: e };
});
Object.defineProperties(Ps, $g);
Object.defineProperty(gg, "isAxiosError", { value: !0 });
Ps.from = function(e, o, r, s, a, u) {
  var c = Object.create(gg);
  return _g.toFlatObject(e, c, function(m) {
    return m !== Error.prototype;
  }), Ps.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Hs = Ps, yg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, lo = Dt;
function JE(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : lo.isDate(u) ? u.toISOString() : lo.isArrayBuffer(u) || lo.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (lo.isPlainObject(u) || lo.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), lo.forEach(u, function(m, v) {
        if (!lo.isUndefined(m)) {
          var g = c ? c + "." + v : v, y;
          if (m && !c && typeof m == "object") {
            if (lo.endsWith(v, "{}"))
              m = JSON.stringify(m);
            else if (lo.endsWith(v, "[]") && (y = lo.toArray(m))) {
              y.forEach(function(b) {
                !lo.isUndefined(b) && o.append(g, s(b));
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
var bg = JE, yd, Om;
function XE() {
  if (Om)
    return yd;
  Om = 1;
  var e = Hs;
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
function QE() {
  if (Bm)
    return bd;
  Bm = 1;
  var e = Dt;
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
var ek = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, tk = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, nk = ek, ok = tk, Cg = function(o, r) {
  return o && !nk(r) ? ok(o, r) : r;
}, Cd, Rm;
function rk() {
  if (Rm)
    return Cd;
  Rm = 1;
  var e = Dt, o = [
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
function ik() {
  if (Pm)
    return Vd;
  Pm = 1;
  var e = Dt;
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
var Sd, Fm;
function ju() {
  if (Fm)
    return Sd;
  Fm = 1;
  var e = Hs, o = Dt;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Sd = r, Sd;
}
var Ed, Um;
function sk() {
  return Um || (Um = 1, Ed = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Ed;
}
var kd, Wm;
function Hm() {
  if (Wm)
    return kd;
  Wm = 1;
  var e = Dt, o = XE(), r = QE(), s = vg, a = Cg, u = rk(), c = ik(), f = yg, m = Hs, v = ju(), g = sk();
  return kd = function(b) {
    return new Promise(function(N, F) {
      var M = b.data, E = b.headers, T = b.responseType, x;
      function U() {
        b.cancelToken && b.cancelToken.unsubscribe(x), b.signal && b.signal.removeEventListener("abort", x);
      }
      e.isFormData(M) && e.isStandardBrowserEnv() && delete E["Content-Type"];
      var A = new XMLHttpRequest();
      if (b.auth) {
        var P = b.auth.username || "", H = b.auth.password ? unescape(encodeURIComponent(b.auth.password)) : "";
        E.Authorization = "Basic " + btoa(P + ":" + H);
      }
      var K = a(b.baseURL, b.url);
      A.open(b.method.toUpperCase(), s(K, b.params, b.paramsSerializer), !0), A.timeout = b.timeout;
      function Me() {
        if (!!A) {
          var Ee = "getAllResponseHeaders" in A ? u(A.getAllResponseHeaders()) : null, He = !T || T === "text" || T === "json" ? A.responseText : A.response, Ge = {
            data: He,
            status: A.status,
            statusText: A.statusText,
            headers: Ee,
            config: b,
            request: A
          };
          o(function(Ze) {
            N(Ze), U();
          }, function(Ze) {
            F(Ze), U();
          }, Ge), A = null;
        }
      }
      if ("onloadend" in A ? A.onloadend = Me : A.onreadystatechange = function() {
        !A || A.readyState !== 4 || A.status === 0 && !(A.responseURL && A.responseURL.indexOf("file:") === 0) || setTimeout(Me);
      }, A.onabort = function() {
        !A || (F(new m("Request aborted", m.ECONNABORTED, b, A)), A = null);
      }, A.onerror = function() {
        F(new m("Network Error", m.ERR_NETWORK, b, A, A)), A = null;
      }, A.ontimeout = function() {
        var He = b.timeout ? "timeout of " + b.timeout + "ms exceeded" : "timeout exceeded", Ge = b.transitional || f;
        b.timeoutErrorMessage && (He = b.timeoutErrorMessage), F(new m(
          He,
          Ge.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
          b,
          A
        )), A = null;
      }, e.isStandardBrowserEnv()) {
        var pe = (b.withCredentials || c(K)) && b.xsrfCookieName ? r.read(b.xsrfCookieName) : void 0;
        pe && (E[b.xsrfHeaderName] = pe);
      }
      "setRequestHeader" in A && e.forEach(E, function(He, Ge) {
        typeof M > "u" && Ge.toLowerCase() === "content-type" ? delete E[Ge] : A.setRequestHeader(Ge, He);
      }), e.isUndefined(b.withCredentials) || (A.withCredentials = !!b.withCredentials), T && T !== "json" && (A.responseType = b.responseType), typeof b.onDownloadProgress == "function" && A.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && A.upload && A.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (x = function(Ee) {
        !A || (F(!Ee || Ee && Ee.type ? new v() : Ee), A.abort(), A = null);
      }, b.cancelToken && b.cancelToken.subscribe(x), b.signal && (b.signal.aborted ? x() : b.signal.addEventListener("abort", x))), M || (M = null);
      var Ae = g(K);
      if (Ae && ["http", "https", "file"].indexOf(Ae) === -1) {
        F(new m("Unsupported protocol " + Ae + ":", m.ERR_BAD_REQUEST, b));
        return;
      }
      A.send(M);
    });
  }, kd;
}
var Id, zm;
function ak() {
  return zm || (zm = 1, Id = null), Id;
}
var yt = Dt, qm = KE, Gm = Hs, lk = yg, uk = bg, ck = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ym(e, o) {
  !yt.isUndefined(e) && yt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function dk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Hm()), e;
}
function fk(e, o, r) {
  if (yt.isString(e))
    try {
      return (o || JSON.parse)(e), yt.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Zu = {
  transitional: lk,
  adapter: dk(),
  transformRequest: [function(o, r) {
    if (qm(r, "Accept"), qm(r, "Content-Type"), yt.isFormData(o) || yt.isArrayBuffer(o) || yt.isBuffer(o) || yt.isStream(o) || yt.isFile(o) || yt.isBlob(o))
      return o;
    if (yt.isArrayBufferView(o))
      return o.buffer;
    if (yt.isURLSearchParams(o))
      return Ym(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = yt.isObject(o), a = r && r["Content-Type"], u;
    if ((u = yt.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return uk(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return Ym(r, "application/json"), fk(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Zu.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && yt.isString(o) && o.length)
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
    FormData: ak()
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
yt.forEach(["delete", "get", "head"], function(o) {
  Zu.headers[o] = {};
});
yt.forEach(["post", "put", "patch"], function(o) {
  Zu.headers[o] = yt.merge(ck);
});
var op = Zu, pk = Dt, hk = op, mk = function(o, r, s) {
  var a = this || hk;
  return pk.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Ad, jm;
function Vg() {
  return jm || (jm = 1, Ad = function(o) {
    return !!(o && o.__CANCEL__);
  }), Ad;
}
var Zm = Dt, Td = mk, wk = Vg(), vk = op, _k = ju();
function xd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _k();
}
var gk = function(o) {
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
  var r = o.adapter || vk.adapter;
  return r(o).then(function(a) {
    return xd(o), a.data = Td.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return wk(a) || (xd(o), a && a.response && (a.response.data = Td.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, En = Dt, Sg = function(o, r) {
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
    var b = v[y] || u, B = b(y);
    En.isUndefined(B) && b !== m || (s[y] = B);
  }), s;
}, Ld, Km;
function Eg() {
  return Km || (Km = 1, Ld = {
    version: "0.27.2"
  }), Ld;
}
var $k = Eg().version, Ur = Hs, rp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  rp[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Jm = {};
rp.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + $k + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new Ur(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Ur.ERR_DEPRECATED
      );
    return r && !Jm[c] && (Jm[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function yk(e, o, r) {
  if (typeof e != "object")
    throw new Ur("options must be an object", Ur.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], m = f === void 0 || c(f, u, e);
      if (m !== !0)
        throw new Ur("option " + u + " must be " + m, Ur.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ur("Unknown option " + u, Ur.ERR_BAD_OPTION);
  }
}
var bk = {
  assertOptions: yk,
  validators: rp
}, kg = Dt, Ck = vg, Xm = jE, Qm = gk, Ku = Sg, Vk = Cg, Ig = bk, ds = Ig.validators;
function Fs(e) {
  this.defaults = e, this.interceptors = {
    request: new Xm(),
    response: new Xm()
  };
}
Fs.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ku(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Ig.assertOptions(s, {
    silentJSONParsing: ds.transitional(ds.boolean),
    forcedJSONParsing: ds.transitional(ds.boolean),
    clarifyTimeoutError: ds.transitional(ds.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(r) === !1 || (u = u && B.synchronous, a.unshift(B.fulfilled, B.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(B) {
    c.push(B.fulfilled, B.rejected);
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
Fs.prototype.getUri = function(o) {
  o = Ku(this.defaults, o);
  var r = Vk(o.baseURL, o.url);
  return Ck(r, o.params, o.paramsSerializer);
};
kg.forEach(["delete", "get", "head", "options"], function(o) {
  Fs.prototype[o] = function(r, s) {
    return this.request(Ku(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
kg.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Ku(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Fs.prototype[o] = r(), Fs.prototype[o + "Form"] = r(!0);
});
var Sk = Fs, Md, ew;
function Ek() {
  if (ew)
    return Md;
  ew = 1;
  var e = ju();
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
function kk() {
  return tw || (tw = 1, Nd = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Nd;
}
var Dd, nw;
function Ik() {
  if (nw)
    return Dd;
  nw = 1;
  var e = Dt;
  return Dd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Dd;
}
var ow = Dt, Ak = hg, ku = Sk, Tk = Sg, xk = op;
function Ag(e) {
  var o = new ku(e), r = Ak(ku.prototype.request, o);
  return ow.extend(r, ku.prototype, o), ow.extend(r, o), r.create = function(a) {
    return Ag(Tk(e, a));
  }, r;
}
var vn = Ag(xk);
vn.Axios = ku;
vn.CanceledError = ju();
vn.CancelToken = Ek();
vn.isCancel = Vg();
vn.VERSION = Eg().version;
vn.toFormData = bg;
vn.AxiosError = Hs;
vn.Cancel = vn.CanceledError;
vn.all = function(o) {
  return Promise.all(o);
};
vn.spread = kk();
vn.isAxiosError = Ik();
Jf.exports = vn;
Jf.exports.default = vn;
(function(e) {
  e.exports = Jf.exports;
})(pg);
const Tg = /* @__PURE__ */ SE(pg.exports), mr = Tg.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), bt = Tg.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
}), Lk = "/whoami", Mk = async () => {
  try {
    const e = await bt.get(Lk);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Lt = {
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
var Be = { exports: {} };
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", v = 500, g = "__lodash_placeholder__", y = 1, b = 2, B = 4, N = 1, F = 2, M = 1, E = 2, T = 4, x = 8, U = 16, A = 32, P = 64, H = 128, K = 256, Me = 512, pe = 30, Ae = "...", Ee = 800, He = 16, Ge = 1, $e = 2, Ze = 3, Xe = 1 / 0, ct = 9007199254740991, on = 17976931348623157e292, _n = 0 / 0, Ce = 4294967295, oa = Ce - 1, ra = Ce >>> 1, ia = [
      ["ary", H],
      ["bind", M],
      ["bindKey", E],
      ["curry", x],
      ["curryRight", U],
      ["flip", Me],
      ["partial", A],
      ["partialRight", P],
      ["rearg", K]
    ], Kn = "[object Arguments]", zt = "[object Array]", Mn = "[object AsyncFunction]", dt = "[object Boolean]", Nn = "[object Date]", Jn = "[object DOMException]", Ne = "[object Error]", vo = "[object Function]", Fe = "[object GeneratorFunction]", vt = "[object Map]", Te = "[object Number]", Dn = "[object Null]", Ct = "[object Object]", Ot = "[object Promise]", Po = "[object Proxy]", rn = "[object RegExp]", Vt = "[object Set]", Xn = "[object String]", _t = "[object Symbol]", Fo = "[object Undefined]", ft = "[object WeakMap]", Jr = "[object WeakSet]", Qn = "[object ArrayBuffer]", qt = "[object DataView]", _o = "[object Float32Array]", eo = "[object Float64Array]", Uo = "[object Int8Array]", Wo = "[object Int16Array]", Ho = "[object Int32Array]", go = "[object Uint8Array]", $o = "[object Uint8ClampedArray]", gn = "[object Uint16Array]", St = "[object Uint32Array]", wr = /\b__p \+= '';/g, Xr = /\b(__p \+=) '' \+/g, Qr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, zo = /&(?:amp|lt|gt|quot|#39);/g, vr = /[&<>"']/g, qo = RegExp(zo.source), Go = RegExp(vr.source), Gt = /<%-([\s\S]+?)%>/g, to = /<%([\s\S]+?)%>/g, Yo = /<%=([\s\S]+?)%>/g, _r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fi = /^\w*$/, ei = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yo = /[\\^$.*+?()[\]{}|]/g, ti = RegExp(yo.source), bo = /^\s+/, Ui = /\s/, Co = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Wi = /\{\n\/\* \[wrapped with (.+)\] \*/, Hi = /,? & /, Re = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, no = /[()=,{}\[\]\/\s]/, zi = /\\(\\)?/g, ni = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, jo = /\w*$/, he = /^[-+]0x[0-9a-f]+$/i, Y = /^0b[01]+$/i, te = /^\[object .+?Constructor\]$/, xe = /^0o[0-7]+$/i, Zo = /^(?:0|[1-9]\d*)$/, qi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Bt = /($^)/, oi = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Gi = "\\u0300-\\u036f", Yi = "\\ufe20-\\ufe2f", ri = "\\u20d0-\\u20ff", gr = Gi + Yi + ri, Vo = "\\u2700-\\u27bf", Ko = "a-z\\xdf-\\xf6\\xf8-\\xff", Jo = "\\xac\\xb1\\xd7\\xf7", oo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", So = "\\u2000-\\u206f", sn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ii = "A-Z\\xc0-\\xd6\\xd8-\\xde", si = "\\ufe0e\\ufe0f", $r = Jo + oo + So + sn, Xo = "['\u2019]", ji = "[" + Yt + "]", yr = "[" + $r + "]", Qo = "[" + gr + "]", hl = "\\d+", ml = "[" + Vo + "]", ai = "[" + Ko + "]", Zi = "[^" + Yt + $r + hl + Vo + Ko + ii + "]", q = "\\ud83c[\\udffb-\\udfff]", w = "(?:" + Qo + "|" + q + ")", S = "[^" + Yt + "]", z = "(?:\\ud83c[\\udde6-\\uddff]){2}", Z = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + ii + "]", me = "\\u200d", rt = "(?:" + ai + "|" + Zi + ")", Qe = "(?:" + re + "|" + Zi + ")", jt = "(?:" + Xo + "(?:d|ll|m|re|s|t|ve))?", an = "(?:" + Xo + "(?:D|LL|M|RE|S|T|VE))?", Ki = w + "?", gt = "[" + si + "]?", A0 = "(?:" + me + "(?:" + [S, z, Z].join("|") + ")" + gt + Ki + ")*", T0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", x0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", kp = gt + Ki + A0, L0 = "(?:" + [ml, z, Z].join("|") + ")" + kp, M0 = "(?:" + [S + Qo + "?", Qo, z, Z, ji].join("|") + ")", N0 = RegExp(Xo, "g"), D0 = RegExp(Qo, "g"), mc = RegExp(q + "(?=" + q + ")|" + M0 + kp, "g"), O0 = RegExp([
      re + "?" + ai + "+" + jt + "(?=" + [yr, re, "$"].join("|") + ")",
      Qe + "+" + an + "(?=" + [yr, re + rt, "$"].join("|") + ")",
      re + "?" + rt + "+" + jt,
      re + "+" + an,
      x0,
      T0,
      hl,
      L0
    ].join("|"), "g"), B0 = RegExp("[" + me + Yt + gr + si + "]"), R0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, P0 = [
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
    ], F0 = -1, ze = {};
    ze[_o] = ze[eo] = ze[Uo] = ze[Wo] = ze[Ho] = ze[go] = ze[$o] = ze[gn] = ze[St] = !0, ze[Kn] = ze[zt] = ze[Qn] = ze[dt] = ze[qt] = ze[Nn] = ze[Ne] = ze[vo] = ze[vt] = ze[Te] = ze[Ct] = ze[rn] = ze[Vt] = ze[Xn] = ze[ft] = !1;
    var Ue = {};
    Ue[Kn] = Ue[zt] = Ue[Qn] = Ue[qt] = Ue[dt] = Ue[Nn] = Ue[_o] = Ue[eo] = Ue[Uo] = Ue[Wo] = Ue[Ho] = Ue[vt] = Ue[Te] = Ue[Ct] = Ue[rn] = Ue[Vt] = Ue[Xn] = Ue[_t] = Ue[go] = Ue[$o] = Ue[gn] = Ue[St] = !0, Ue[Ne] = Ue[vo] = Ue[ft] = !1;
    var U0 = {
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
    }, W0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, H0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, z0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, q0 = parseFloat, G0 = parseInt, Ip = typeof ya == "object" && ya && ya.Object === Object && ya, Y0 = typeof self == "object" && self && self.Object === Object && self, Et = Ip || Y0 || Function("return this")(), wc = o && !o.nodeType && o, li = wc && !0 && e && !e.nodeType && e, Ap = li && li.exports === wc, vc = Ap && Ip.process, On = function() {
      try {
        var C = li && li.require && li.require("util").types;
        return C || vc && vc.binding && vc.binding("util");
      } catch {
      }
    }(), Tp = On && On.isArrayBuffer, xp = On && On.isDate, Lp = On && On.isMap, Mp = On && On.isRegExp, Np = On && On.isSet, Dp = On && On.isTypedArray;
    function $n(C, L, k) {
      switch (k.length) {
        case 0:
          return C.call(L);
        case 1:
          return C.call(L, k[0]);
        case 2:
          return C.call(L, k[0], k[1]);
        case 3:
          return C.call(L, k[0], k[1], k[2]);
      }
      return C.apply(L, k);
    }
    function j0(C, L, k, j) {
      for (var ie = -1, ke = C == null ? 0 : C.length; ++ie < ke; ) {
        var pt = C[ie];
        L(j, pt, k(pt), C);
      }
      return j;
    }
    function Bn(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length; ++k < j && L(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function Z0(C, L) {
      for (var k = C == null ? 0 : C.length; k-- && L(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function Op(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length; ++k < j; )
        if (!L(C[k], k, C))
          return !1;
      return !0;
    }
    function br(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length, ie = 0, ke = []; ++k < j; ) {
        var pt = C[k];
        L(pt, k, C) && (ke[ie++] = pt);
      }
      return ke;
    }
    function wl(C, L) {
      var k = C == null ? 0 : C.length;
      return !!k && Ji(C, L, 0) > -1;
    }
    function _c(C, L, k) {
      for (var j = -1, ie = C == null ? 0 : C.length; ++j < ie; )
        if (k(L, C[j]))
          return !0;
      return !1;
    }
    function Ye(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length, ie = Array(j); ++k < j; )
        ie[k] = L(C[k], k, C);
      return ie;
    }
    function Cr(C, L) {
      for (var k = -1, j = L.length, ie = C.length; ++k < j; )
        C[ie + k] = L[k];
      return C;
    }
    function gc(C, L, k, j) {
      var ie = -1, ke = C == null ? 0 : C.length;
      for (j && ke && (k = C[++ie]); ++ie < ke; )
        k = L(k, C[ie], ie, C);
      return k;
    }
    function K0(C, L, k, j) {
      var ie = C == null ? 0 : C.length;
      for (j && ie && (k = C[--ie]); ie--; )
        k = L(k, C[ie], ie, C);
      return k;
    }
    function $c(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length; ++k < j; )
        if (L(C[k], k, C))
          return !0;
      return !1;
    }
    var J0 = yc("length");
    function X0(C) {
      return C.split("");
    }
    function Q0(C) {
      return C.match(Re) || [];
    }
    function Bp(C, L, k) {
      var j;
      return k(C, function(ie, ke, pt) {
        if (L(ie, ke, pt))
          return j = ke, !1;
      }), j;
    }
    function vl(C, L, k, j) {
      for (var ie = C.length, ke = k + (j ? 1 : -1); j ? ke-- : ++ke < ie; )
        if (L(C[ke], ke, C))
          return ke;
      return -1;
    }
    function Ji(C, L, k) {
      return L === L ? d$(C, L, k) : vl(C, Rp, k);
    }
    function e$(C, L, k, j) {
      for (var ie = k - 1, ke = C.length; ++ie < ke; )
        if (j(C[ie], L))
          return ie;
      return -1;
    }
    function Rp(C) {
      return C !== C;
    }
    function Pp(C, L) {
      var k = C == null ? 0 : C.length;
      return k ? Cc(C, L) / k : _n;
    }
    function yc(C) {
      return function(L) {
        return L == null ? r : L[C];
      };
    }
    function bc(C) {
      return function(L) {
        return C == null ? r : C[L];
      };
    }
    function Fp(C, L, k, j, ie) {
      return ie(C, function(ke, pt, Pe) {
        k = j ? (j = !1, ke) : L(k, ke, pt, Pe);
      }), k;
    }
    function t$(C, L) {
      var k = C.length;
      for (C.sort(L); k--; )
        C[k] = C[k].value;
      return C;
    }
    function Cc(C, L) {
      for (var k, j = -1, ie = C.length; ++j < ie; ) {
        var ke = L(C[j]);
        ke !== r && (k = k === r ? ke : k + ke);
      }
      return k;
    }
    function Vc(C, L) {
      for (var k = -1, j = Array(C); ++k < C; )
        j[k] = L(k);
      return j;
    }
    function n$(C, L) {
      return Ye(L, function(k) {
        return [k, C[k]];
      });
    }
    function Up(C) {
      return C && C.slice(0, qp(C) + 1).replace(bo, "");
    }
    function yn(C) {
      return function(L) {
        return C(L);
      };
    }
    function Sc(C, L) {
      return Ye(L, function(k) {
        return C[k];
      });
    }
    function sa(C, L) {
      return C.has(L);
    }
    function Wp(C, L) {
      for (var k = -1, j = C.length; ++k < j && Ji(L, C[k], 0) > -1; )
        ;
      return k;
    }
    function Hp(C, L) {
      for (var k = C.length; k-- && Ji(L, C[k], 0) > -1; )
        ;
      return k;
    }
    function o$(C, L) {
      for (var k = C.length, j = 0; k--; )
        C[k] === L && ++j;
      return j;
    }
    var r$ = bc(U0), i$ = bc(W0);
    function s$(C) {
      return "\\" + z0[C];
    }
    function a$(C, L) {
      return C == null ? r : C[L];
    }
    function Xi(C) {
      return B0.test(C);
    }
    function l$(C) {
      return R0.test(C);
    }
    function u$(C) {
      for (var L, k = []; !(L = C.next()).done; )
        k.push(L.value);
      return k;
    }
    function Ec(C) {
      var L = -1, k = Array(C.size);
      return C.forEach(function(j, ie) {
        k[++L] = [ie, j];
      }), k;
    }
    function zp(C, L) {
      return function(k) {
        return C(L(k));
      };
    }
    function Vr(C, L) {
      for (var k = -1, j = C.length, ie = 0, ke = []; ++k < j; ) {
        var pt = C[k];
        (pt === L || pt === g) && (C[k] = g, ke[ie++] = k);
      }
      return ke;
    }
    function _l(C) {
      var L = -1, k = Array(C.size);
      return C.forEach(function(j) {
        k[++L] = j;
      }), k;
    }
    function c$(C) {
      var L = -1, k = Array(C.size);
      return C.forEach(function(j) {
        k[++L] = [j, j];
      }), k;
    }
    function d$(C, L, k) {
      for (var j = k - 1, ie = C.length; ++j < ie; )
        if (C[j] === L)
          return j;
      return -1;
    }
    function f$(C, L, k) {
      for (var j = k + 1; j--; )
        if (C[j] === L)
          return j;
      return j;
    }
    function Qi(C) {
      return Xi(C) ? h$(C) : J0(C);
    }
    function ro(C) {
      return Xi(C) ? m$(C) : X0(C);
    }
    function qp(C) {
      for (var L = C.length; L-- && Ui.test(C.charAt(L)); )
        ;
      return L;
    }
    var p$ = bc(H0);
    function h$(C) {
      for (var L = mc.lastIndex = 0; mc.test(C); )
        ++L;
      return L;
    }
    function m$(C) {
      return C.match(mc) || [];
    }
    function w$(C) {
      return C.match(O0) || [];
    }
    var v$ = function C(L) {
      L = L == null ? Et : es.defaults(Et.Object(), L, es.pick(Et, P0));
      var k = L.Array, j = L.Date, ie = L.Error, ke = L.Function, pt = L.Math, Pe = L.Object, kc = L.RegExp, _$ = L.String, Rn = L.TypeError, gl = k.prototype, g$ = ke.prototype, ts = Pe.prototype, $l = L["__core-js_shared__"], yl = g$.toString, De = ts.hasOwnProperty, $$ = 0, Gp = function() {
        var t = /[^.]+$/.exec($l && $l.keys && $l.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), bl = ts.toString, y$ = yl.call(Pe), b$ = Et._, C$ = kc(
        "^" + yl.call(De).replace(yo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Cl = Ap ? L.Buffer : r, Sr = L.Symbol, Vl = L.Uint8Array, Yp = Cl ? Cl.allocUnsafe : r, Sl = zp(Pe.getPrototypeOf, Pe), jp = Pe.create, Zp = ts.propertyIsEnumerable, El = gl.splice, Kp = Sr ? Sr.isConcatSpreadable : r, aa = Sr ? Sr.iterator : r, ui = Sr ? Sr.toStringTag : r, kl = function() {
        try {
          var t = hi(Pe, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), V$ = L.clearTimeout !== Et.clearTimeout && L.clearTimeout, S$ = j && j.now !== Et.Date.now && j.now, E$ = L.setTimeout !== Et.setTimeout && L.setTimeout, Il = pt.ceil, Al = pt.floor, Ic = Pe.getOwnPropertySymbols, k$ = Cl ? Cl.isBuffer : r, Jp = L.isFinite, I$ = gl.join, A$ = zp(Pe.keys, Pe), ht = pt.max, Rt = pt.min, T$ = j.now, x$ = L.parseInt, Xp = pt.random, L$ = gl.reverse, Ac = hi(L, "DataView"), la = hi(L, "Map"), Tc = hi(L, "Promise"), ns = hi(L, "Set"), ua = hi(L, "WeakMap"), ca = hi(Pe, "create"), Tl = ua && new ua(), os = {}, M$ = mi(Ac), N$ = mi(la), D$ = mi(Tc), O$ = mi(ns), B$ = mi(ua), xl = Sr ? Sr.prototype : r, da = xl ? xl.valueOf : r, Qp = xl ? xl.toString : r;
      function p(t) {
        if (et(t) && !ae(t) && !(t instanceof we)) {
          if (t instanceof Pn)
            return t;
          if (De.call(t, "__wrapped__"))
            return em(t);
        }
        return new Pn(t);
      }
      var rs = function() {
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
      function Ll() {
      }
      function Pn(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        escape: Gt,
        evaluate: to,
        interpolate: Yo,
        variable: "",
        imports: {
          _: p
        }
      }, p.prototype = Ll.prototype, p.prototype.constructor = p, Pn.prototype = rs(Ll.prototype), Pn.prototype.constructor = Pn;
      function we(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ce, this.__views__ = [];
      }
      function R$() {
        var t = new we(this.__wrapped__);
        return t.__actions__ = ln(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ln(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ln(this.__views__), t;
      }
      function P$() {
        if (this.__filtered__) {
          var t = new we(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function F$() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = ae(t), l = n < 0, d = i ? t.length : 0, h = Xy(0, d, this.__views__), _ = h.start, $ = h.end, V = $ - _, D = l ? $ : _ - 1, O = this.__iteratees__, R = O.length, G = 0, J = Rt(V, this.__takeCount__);
        if (!i || !l && d == V && J == V)
          return Ch(t, this.__actions__);
        var ne = [];
        e:
          for (; V-- && G < J; ) {
            D += n;
            for (var ue = -1, oe = t[D]; ++ue < R; ) {
              var fe = O[ue], ge = fe.iteratee, Vn = fe.type, Jt = ge(oe);
              if (Vn == $e)
                oe = Jt;
              else if (!Jt) {
                if (Vn == Ge)
                  continue e;
                break e;
              }
            }
            ne[G++] = oe;
          }
        return ne;
      }
      we.prototype = rs(Ll.prototype), we.prototype.constructor = we;
      function ci(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function U$() {
        this.__data__ = ca ? ca(null) : {}, this.size = 0;
      }
      function W$(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function H$(t) {
        var n = this.__data__;
        if (ca) {
          var i = n[t];
          return i === m ? r : i;
        }
        return De.call(n, t) ? n[t] : r;
      }
      function z$(t) {
        var n = this.__data__;
        return ca ? n[t] !== r : De.call(n, t);
      }
      function q$(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = ca && n === r ? m : n, this;
      }
      ci.prototype.clear = U$, ci.prototype.delete = W$, ci.prototype.get = H$, ci.prototype.has = z$, ci.prototype.set = q$;
      function er(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function G$() {
        this.__data__ = [], this.size = 0;
      }
      function Y$(t) {
        var n = this.__data__, i = Ml(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : El.call(n, i, 1), --this.size, !0;
      }
      function j$(t) {
        var n = this.__data__, i = Ml(n, t);
        return i < 0 ? r : n[i][1];
      }
      function Z$(t) {
        return Ml(this.__data__, t) > -1;
      }
      function K$(t, n) {
        var i = this.__data__, l = Ml(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      er.prototype.clear = G$, er.prototype.delete = Y$, er.prototype.get = j$, er.prototype.has = Z$, er.prototype.set = K$;
      function tr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function J$() {
        this.size = 0, this.__data__ = {
          hash: new ci(),
          map: new (la || er)(),
          string: new ci()
        };
      }
      function X$(t) {
        var n = ql(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Q$(t) {
        return ql(this, t).get(t);
      }
      function ey(t) {
        return ql(this, t).has(t);
      }
      function ty(t, n) {
        var i = ql(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      tr.prototype.clear = J$, tr.prototype.delete = X$, tr.prototype.get = Q$, tr.prototype.has = ey, tr.prototype.set = ty;
      function di(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new tr(); ++n < i; )
          this.add(t[n]);
      }
      function ny(t) {
        return this.__data__.set(t, m), this;
      }
      function oy(t) {
        return this.__data__.has(t);
      }
      di.prototype.add = di.prototype.push = ny, di.prototype.has = oy;
      function io(t) {
        var n = this.__data__ = new er(t);
        this.size = n.size;
      }
      function ry() {
        this.__data__ = new er(), this.size = 0;
      }
      function iy(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function sy(t) {
        return this.__data__.get(t);
      }
      function ay(t) {
        return this.__data__.has(t);
      }
      function ly(t, n) {
        var i = this.__data__;
        if (i instanceof er) {
          var l = i.__data__;
          if (!la || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new tr(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      io.prototype.clear = ry, io.prototype.delete = iy, io.prototype.get = sy, io.prototype.has = ay, io.prototype.set = ly;
      function eh(t, n) {
        var i = ae(t), l = !i && wi(t), d = !i && !l && Tr(t), h = !i && !l && !d && ls(t), _ = i || l || d || h, $ = _ ? Vc(t.length, _$) : [], V = $.length;
        for (var D in t)
          (n || De.call(t, D)) && !(_ && (D == "length" || d && (D == "offset" || D == "parent") || h && (D == "buffer" || D == "byteLength" || D == "byteOffset") || ir(D, V))) && $.push(D);
        return $;
      }
      function th(t) {
        var n = t.length;
        return n ? t[Uc(0, n - 1)] : r;
      }
      function uy(t, n) {
        return Gl(ln(t), fi(n, 0, t.length));
      }
      function cy(t) {
        return Gl(ln(t));
      }
      function xc(t, n, i) {
        (i !== r && !so(t[n], i) || i === r && !(n in t)) && nr(t, n, i);
      }
      function fa(t, n, i) {
        var l = t[n];
        (!(De.call(t, n) && so(l, i)) || i === r && !(n in t)) && nr(t, n, i);
      }
      function Ml(t, n) {
        for (var i = t.length; i--; )
          if (so(t[i][0], n))
            return i;
        return -1;
      }
      function dy(t, n, i, l) {
        return Er(t, function(d, h, _) {
          n(l, d, i(d), _);
        }), l;
      }
      function nh(t, n) {
        return t && ko(n, $t(n), t);
      }
      function fy(t, n) {
        return t && ko(n, cn(n), t);
      }
      function nr(t, n, i) {
        n == "__proto__" && kl ? kl(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Lc(t, n) {
        for (var i = -1, l = n.length, d = k(l), h = t == null; ++i < l; )
          d[i] = h ? r : fd(t, n[i]);
        return d;
      }
      function fi(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function Fn(t, n, i, l, d, h) {
        var _, $ = n & y, V = n & b, D = n & B;
        if (i && (_ = d ? i(t, l, d, h) : i(t)), _ !== r)
          return _;
        if (!Ke(t))
          return t;
        var O = ae(t);
        if (O) {
          if (_ = eb(t), !$)
            return ln(t, _);
        } else {
          var R = Pt(t), G = R == vo || R == Fe;
          if (Tr(t))
            return Eh(t, $);
          if (R == Ct || R == Kn || G && !d) {
            if (_ = V || G ? {} : qh(t), !$)
              return V ? Hy(t, fy(_, t)) : Wy(t, nh(_, t));
          } else {
            if (!Ue[R])
              return d ? t : {};
            _ = tb(t, R, $);
          }
        }
        h || (h = new io());
        var J = h.get(t);
        if (J)
          return J;
        h.set(t, _), $m(t) ? t.forEach(function(oe) {
          _.add(Fn(oe, n, i, oe, t, h));
        }) : _m(t) && t.forEach(function(oe, fe) {
          _.set(fe, Fn(oe, n, i, fe, t, h));
        });
        var ne = D ? V ? Xc : Jc : V ? cn : $t, ue = O ? r : ne(t);
        return Bn(ue || t, function(oe, fe) {
          ue && (fe = oe, oe = t[fe]), fa(_, fe, Fn(oe, n, i, fe, t, h));
        }), _;
      }
      function py(t) {
        var n = $t(t);
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
          throw new Rn(c);
        return ga(function() {
          t.apply(r, i);
        }, n);
      }
      function pa(t, n, i, l) {
        var d = -1, h = wl, _ = !0, $ = t.length, V = [], D = n.length;
        if (!$)
          return V;
        i && (n = Ye(n, yn(i))), l ? (h = _c, _ = !1) : n.length >= a && (h = sa, _ = !1, n = new di(n));
        e:
          for (; ++d < $; ) {
            var O = t[d], R = i == null ? O : i(O);
            if (O = l || O !== 0 ? O : 0, _ && R === R) {
              for (var G = D; G--; )
                if (n[G] === R)
                  continue e;
              V.push(O);
            } else
              h(n, R, l) || V.push(O);
          }
        return V;
      }
      var Er = xh(Eo), ih = xh(Nc, !0);
      function hy(t, n) {
        var i = !0;
        return Er(t, function(l, d, h) {
          return i = !!n(l, d, h), i;
        }), i;
      }
      function Nl(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], _ = n(h);
          if (_ != null && ($ === r ? _ === _ && !Cn(_) : i(_, $)))
            var $ = _, V = h;
        }
        return V;
      }
      function my(t, n, i, l) {
        var d = t.length;
        for (i = le(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : le(l), l < 0 && (l += d), l = i > l ? 0 : bm(l); i < l; )
          t[i++] = n;
        return t;
      }
      function sh(t, n) {
        var i = [];
        return Er(t, function(l, d, h) {
          n(l, d, h) && i.push(l);
        }), i;
      }
      function kt(t, n, i, l, d) {
        var h = -1, _ = t.length;
        for (i || (i = ob), d || (d = []); ++h < _; ) {
          var $ = t[h];
          n > 0 && i($) ? n > 1 ? kt($, n - 1, i, l, d) : Cr(d, $) : l || (d[d.length] = $);
        }
        return d;
      }
      var Mc = Lh(), ah = Lh(!0);
      function Eo(t, n) {
        return t && Mc(t, n, $t);
      }
      function Nc(t, n) {
        return t && ah(t, n, $t);
      }
      function Dl(t, n) {
        return br(n, function(i) {
          return sr(t[i]);
        });
      }
      function pi(t, n) {
        n = Ir(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[Io(n[i++])];
        return i && i == l ? t : r;
      }
      function lh(t, n, i) {
        var l = n(t);
        return ae(t) ? l : Cr(l, i(t));
      }
      function Zt(t) {
        return t == null ? t === r ? Fo : Dn : ui && ui in Pe(t) ? Jy(t) : cb(t);
      }
      function Dc(t, n) {
        return t > n;
      }
      function wy(t, n) {
        return t != null && De.call(t, n);
      }
      function vy(t, n) {
        return t != null && n in Pe(t);
      }
      function _y(t, n, i) {
        return t >= Rt(n, i) && t < ht(n, i);
      }
      function Oc(t, n, i) {
        for (var l = i ? _c : wl, d = t[0].length, h = t.length, _ = h, $ = k(h), V = 1 / 0, D = []; _--; ) {
          var O = t[_];
          _ && n && (O = Ye(O, yn(n))), V = Rt(O.length, V), $[_] = !i && (n || d >= 120 && O.length >= 120) ? new di(_ && O) : r;
        }
        O = t[0];
        var R = -1, G = $[0];
        e:
          for (; ++R < d && D.length < V; ) {
            var J = O[R], ne = n ? n(J) : J;
            if (J = i || J !== 0 ? J : 0, !(G ? sa(G, ne) : l(D, ne, i))) {
              for (_ = h; --_; ) {
                var ue = $[_];
                if (!(ue ? sa(ue, ne) : l(t[_], ne, i)))
                  continue e;
              }
              G && G.push(ne), D.push(J);
            }
          }
        return D;
      }
      function gy(t, n, i, l) {
        return Eo(t, function(d, h, _) {
          n(l, i(d), h, _);
        }), l;
      }
      function ha(t, n, i) {
        n = Ir(n, t), t = Zh(t, n);
        var l = t == null ? t : t[Io(Wn(n))];
        return l == null ? r : $n(l, t, i);
      }
      function uh(t) {
        return et(t) && Zt(t) == Kn;
      }
      function $y(t) {
        return et(t) && Zt(t) == Qn;
      }
      function yy(t) {
        return et(t) && Zt(t) == Nn;
      }
      function ma(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !et(t) && !et(n) ? t !== t && n !== n : by(t, n, i, l, ma, d);
      }
      function by(t, n, i, l, d, h) {
        var _ = ae(t), $ = ae(n), V = _ ? zt : Pt(t), D = $ ? zt : Pt(n);
        V = V == Kn ? Ct : V, D = D == Kn ? Ct : D;
        var O = V == Ct, R = D == Ct, G = V == D;
        if (G && Tr(t)) {
          if (!Tr(n))
            return !1;
          _ = !0, O = !1;
        }
        if (G && !O)
          return h || (h = new io()), _ || ls(t) ? Wh(t, n, i, l, d, h) : Zy(t, n, V, i, l, d, h);
        if (!(i & N)) {
          var J = O && De.call(t, "__wrapped__"), ne = R && De.call(n, "__wrapped__");
          if (J || ne) {
            var ue = J ? t.value() : t, oe = ne ? n.value() : n;
            return h || (h = new io()), d(ue, oe, i, l, h);
          }
        }
        return G ? (h || (h = new io()), Ky(t, n, i, l, d, h)) : !1;
      }
      function Cy(t) {
        return et(t) && Pt(t) == vt;
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
          var V = $[0], D = t[V], O = $[1];
          if (_ && $[2]) {
            if (D === r && !(V in t))
              return !1;
          } else {
            var R = new io();
            if (l)
              var G = l(D, O, V, t, n, R);
            if (!(G === r ? ma(O, D, N | F, l, R) : G))
              return !1;
          }
        }
        return !0;
      }
      function ch(t) {
        if (!Ke(t) || ib(t))
          return !1;
        var n = sr(t) ? C$ : te;
        return n.test(mi(t));
      }
      function Vy(t) {
        return et(t) && Zt(t) == rn;
      }
      function Sy(t) {
        return et(t) && Pt(t) == Vt;
      }
      function Ey(t) {
        return et(t) && Xl(t.length) && !!ze[Zt(t)];
      }
      function dh(t) {
        return typeof t == "function" ? t : t == null ? dn : typeof t == "object" ? ae(t) ? hh(t[0], t[1]) : ph(t) : Mm(t);
      }
      function Rc(t) {
        if (!_a(t))
          return A$(t);
        var n = [];
        for (var i in Pe(t))
          De.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function ky(t) {
        if (!Ke(t))
          return ub(t);
        var n = _a(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !De.call(t, l)) || i.push(l);
        return i;
      }
      function Pc(t, n) {
        return t < n;
      }
      function fh(t, n) {
        var i = -1, l = un(t) ? k(t.length) : [];
        return Er(t, function(d, h, _) {
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
        return nd(t) && Gh(n) ? Yh(Io(t), n) : function(i) {
          var l = fd(i, t);
          return l === r && l === n ? pd(i, t) : ma(n, l, N | F);
        };
      }
      function Ol(t, n, i, l, d) {
        t !== n && Mc(n, function(h, _) {
          if (d || (d = new io()), Ke(h))
            Iy(t, n, _, i, Ol, l, d);
          else {
            var $ = l ? l(rd(t, _), h, _ + "", t, n, d) : r;
            $ === r && ($ = h), xc(t, _, $);
          }
        }, cn);
      }
      function Iy(t, n, i, l, d, h, _) {
        var $ = rd(t, i), V = rd(n, i), D = _.get(V);
        if (D) {
          xc(t, i, D);
          return;
        }
        var O = h ? h($, V, i + "", t, n, _) : r, R = O === r;
        if (R) {
          var G = ae(V), J = !G && Tr(V), ne = !G && !J && ls(V);
          O = V, G || J || ne ? ae($) ? O = $ : it($) ? O = ln($) : J ? (R = !1, O = Eh(V, !0)) : ne ? (R = !1, O = kh(V, !0)) : O = [] : $a(V) || wi(V) ? (O = $, wi($) ? O = Cm($) : (!Ke($) || sr($)) && (O = qh(V))) : R = !1;
        }
        R && (_.set(V, O), d(O, V, l, h, _), _.delete(V)), xc(t, i, O);
      }
      function mh(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, ir(n, i) ? t[n] : r;
      }
      function wh(t, n, i) {
        n.length ? n = Ye(n, function(h) {
          return ae(h) ? function(_) {
            return pi(_, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [dn];
        var l = -1;
        n = Ye(n, yn(ee()));
        var d = fh(t, function(h, _, $) {
          var V = Ye(n, function(D) {
            return D(h);
          });
          return { criteria: V, index: ++l, value: h };
        });
        return t$(d, function(h, _) {
          return Uy(h, _, i);
        });
      }
      function Ay(t, n) {
        return vh(t, n, function(i, l) {
          return pd(t, l);
        });
      }
      function vh(t, n, i) {
        for (var l = -1, d = n.length, h = {}; ++l < d; ) {
          var _ = n[l], $ = pi(t, _);
          i($, _) && wa(h, Ir(_, t), $);
        }
        return h;
      }
      function Ty(t) {
        return function(n) {
          return pi(n, t);
        };
      }
      function Fc(t, n, i, l) {
        var d = l ? e$ : Ji, h = -1, _ = n.length, $ = t;
        for (t === n && (n = ln(n)), i && ($ = Ye(t, yn(i))); ++h < _; )
          for (var V = 0, D = n[h], O = i ? i(D) : D; (V = d($, O, V, l)) > -1; )
            $ !== t && El.call($, V, 1), El.call(t, V, 1);
        return t;
      }
      function _h(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== h) {
            var h = d;
            ir(d) ? El.call(t, d, 1) : zc(t, d);
          }
        }
        return t;
      }
      function Uc(t, n) {
        return t + Al(Xp() * (n - t + 1));
      }
      function xy(t, n, i, l) {
        for (var d = -1, h = ht(Il((n - t) / (i || 1)), 0), _ = k(h); h--; )
          _[l ? h : ++d] = t, t += i;
        return _;
      }
      function Wc(t, n) {
        var i = "";
        if (!t || n < 1 || n > ct)
          return i;
        do
          n % 2 && (i += t), n = Al(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function de(t, n) {
        return id(jh(t, n, dn), t + "");
      }
      function Ly(t) {
        return th(us(t));
      }
      function My(t, n) {
        var i = us(t);
        return Gl(i, fi(n, 0, i.length));
      }
      function wa(t, n, i, l) {
        if (!Ke(t))
          return t;
        n = Ir(n, t);
        for (var d = -1, h = n.length, _ = h - 1, $ = t; $ != null && ++d < h; ) {
          var V = Io(n[d]), D = i;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != _) {
            var O = $[V];
            D = l ? l(O, V, $) : r, D === r && (D = Ke(O) ? O : ir(n[d + 1]) ? [] : {});
          }
          fa($, V, D), $ = $[V];
        }
        return t;
      }
      var gh = Tl ? function(t, n) {
        return Tl.set(t, n), t;
      } : dn, Ny = kl ? function(t, n) {
        return kl(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: md(n),
          writable: !0
        });
      } : dn;
      function Dy(t) {
        return Gl(us(t));
      }
      function Un(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var h = k(d); ++l < d; )
          h[l] = t[l + n];
        return h;
      }
      function Oy(t, n) {
        var i;
        return Er(t, function(l, d, h) {
          return i = n(l, d, h), !i;
        }), !!i;
      }
      function Bl(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= ra) {
          for (; l < d; ) {
            var h = l + d >>> 1, _ = t[h];
            _ !== null && !Cn(_) && (i ? _ <= n : _ < n) ? l = h + 1 : d = h;
          }
          return d;
        }
        return Hc(t, n, dn, i);
      }
      function Hc(t, n, i, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        n = i(n);
        for (var _ = n !== n, $ = n === null, V = Cn(n), D = n === r; d < h; ) {
          var O = Al((d + h) / 2), R = i(t[O]), G = R !== r, J = R === null, ne = R === R, ue = Cn(R);
          if (_)
            var oe = l || ne;
          else
            D ? oe = ne && (l || G) : $ ? oe = ne && G && (l || !J) : V ? oe = ne && G && !J && (l || !ue) : J || ue ? oe = !1 : oe = l ? R <= n : R < n;
          oe ? d = O + 1 : h = O;
        }
        return Rt(h, oa);
      }
      function $h(t, n) {
        for (var i = -1, l = t.length, d = 0, h = []; ++i < l; ) {
          var _ = t[i], $ = n ? n(_) : _;
          if (!i || !so($, V)) {
            var V = $;
            h[d++] = _ === 0 ? 0 : _;
          }
        }
        return h;
      }
      function yh(t) {
        return typeof t == "number" ? t : Cn(t) ? _n : +t;
      }
      function bn(t) {
        if (typeof t == "string")
          return t;
        if (ae(t))
          return Ye(t, bn) + "";
        if (Cn(t))
          return Qp ? Qp.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Xe ? "-0" : n;
      }
      function kr(t, n, i) {
        var l = -1, d = wl, h = t.length, _ = !0, $ = [], V = $;
        if (i)
          _ = !1, d = _c;
        else if (h >= a) {
          var D = n ? null : Yy(t);
          if (D)
            return _l(D);
          _ = !1, d = sa, V = new di();
        } else
          V = n ? [] : $;
        e:
          for (; ++l < h; ) {
            var O = t[l], R = n ? n(O) : O;
            if (O = i || O !== 0 ? O : 0, _ && R === R) {
              for (var G = V.length; G--; )
                if (V[G] === R)
                  continue e;
              n && V.push(R), $.push(O);
            } else
              d(V, R, i) || (V !== $ && V.push(R), $.push(O));
          }
        return $;
      }
      function zc(t, n) {
        return n = Ir(n, t), t = Zh(t, n), t == null || delete t[Io(Wn(n))];
      }
      function bh(t, n, i, l) {
        return wa(t, n, i(pi(t, n)), l);
      }
      function Rl(t, n, i, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && n(t[h], h, t); )
          ;
        return i ? Un(t, l ? 0 : h, l ? h + 1 : d) : Un(t, l ? h + 1 : 0, l ? d : h);
      }
      function Ch(t, n) {
        var i = t;
        return i instanceof we && (i = i.value()), gc(n, function(l, d) {
          return d.func.apply(d.thisArg, Cr([l], d.args));
        }, i);
      }
      function qc(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? kr(t[0]) : [];
        for (var d = -1, h = k(l); ++d < l; )
          for (var _ = t[d], $ = -1; ++$ < l; )
            $ != d && (h[d] = pa(h[d] || _, t[$], n, i));
        return kr(kt(h, 1), n, i);
      }
      function Vh(t, n, i) {
        for (var l = -1, d = t.length, h = n.length, _ = {}; ++l < d; ) {
          var $ = l < h ? n[l] : r;
          i(_, t[l], $);
        }
        return _;
      }
      function Gc(t) {
        return it(t) ? t : [];
      }
      function Yc(t) {
        return typeof t == "function" ? t : dn;
      }
      function Ir(t, n) {
        return ae(t) ? t : nd(t, n) ? [t] : Qh(Le(t));
      }
      var By = de;
      function Ar(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Un(t, n, i);
      }
      var Sh = V$ || function(t) {
        return Et.clearTimeout(t);
      };
      function Eh(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Yp ? Yp(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function jc(t) {
        var n = new t.constructor(t.byteLength);
        return new Vl(n).set(new Vl(t)), n;
      }
      function Ry(t, n) {
        var i = n ? jc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function Py(t) {
        var n = new t.constructor(t.source, jo.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Fy(t) {
        return da ? Pe(da.call(t)) : {};
      }
      function kh(t, n) {
        var i = n ? jc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Ih(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, h = Cn(t), _ = n !== r, $ = n === null, V = n === n, D = Cn(n);
          if (!$ && !D && !h && t > n || h && _ && V && !$ && !D || l && _ && V || !i && V || !d)
            return 1;
          if (!l && !h && !D && t < n || D && i && d && !l && !h || $ && i && d || !_ && d || !V)
            return -1;
        }
        return 0;
      }
      function Uy(t, n, i) {
        for (var l = -1, d = t.criteria, h = n.criteria, _ = d.length, $ = i.length; ++l < _; ) {
          var V = Ih(d[l], h[l]);
          if (V) {
            if (l >= $)
              return V;
            var D = i[l];
            return V * (D == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ah(t, n, i, l) {
        for (var d = -1, h = t.length, _ = i.length, $ = -1, V = n.length, D = ht(h - _, 0), O = k(V + D), R = !l; ++$ < V; )
          O[$] = n[$];
        for (; ++d < _; )
          (R || d < h) && (O[i[d]] = t[d]);
        for (; D--; )
          O[$++] = t[d++];
        return O;
      }
      function Th(t, n, i, l) {
        for (var d = -1, h = t.length, _ = -1, $ = i.length, V = -1, D = n.length, O = ht(h - $, 0), R = k(O + D), G = !l; ++d < O; )
          R[d] = t[d];
        for (var J = d; ++V < D; )
          R[J + V] = n[V];
        for (; ++_ < $; )
          (G || d < h) && (R[J + i[_]] = t[d++]);
        return R;
      }
      function ln(t, n) {
        var i = -1, l = t.length;
        for (n || (n = k(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function ko(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var h = -1, _ = n.length; ++h < _; ) {
          var $ = n[h], V = l ? l(i[$], t[$], $, i, t) : r;
          V === r && (V = t[$]), d ? nr(i, $, V) : fa(i, $, V);
        }
        return i;
      }
      function Wy(t, n) {
        return ko(t, td(t), n);
      }
      function Hy(t, n) {
        return ko(t, Hh(t), n);
      }
      function Pl(t, n) {
        return function(i, l) {
          var d = ae(i) ? j0 : dy, h = n ? n() : {};
          return d(i, t, ee(l, 2), h);
        };
      }
      function is(t) {
        return de(function(n, i) {
          var l = -1, d = i.length, h = d > 1 ? i[d - 1] : r, _ = d > 2 ? i[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, _ && Kt(i[0], i[1], _) && (h = d < 3 ? r : h, d = 1), n = Pe(n); ++l < d; ) {
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
          if (!un(i))
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
      function zy(t, n, i) {
        var l = n & M, d = va(t);
        function h() {
          var _ = this && this !== Et && this instanceof h ? d : t;
          return _.apply(l ? i : this, arguments);
        }
        return h;
      }
      function Mh(t) {
        return function(n) {
          n = Le(n);
          var i = Xi(n) ? ro(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Ar(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function ss(t) {
        return function(n) {
          return gc(xm(Tm(n).replace(N0, "")), t, "");
        };
      }
      function va(t) {
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
          var i = rs(t.prototype), l = t.apply(i, n);
          return Ke(l) ? l : i;
        };
      }
      function qy(t, n, i) {
        var l = va(t);
        function d() {
          for (var h = arguments.length, _ = k(h), $ = h, V = as(d); $--; )
            _[$] = arguments[$];
          var D = h < 3 && _[0] !== V && _[h - 1] !== V ? [] : Vr(_, V);
          if (h -= D.length, h < i)
            return Rh(
              t,
              n,
              Fl,
              d.placeholder,
              r,
              _,
              D,
              r,
              r,
              i - h
            );
          var O = this && this !== Et && this instanceof d ? l : t;
          return $n(O, this, _);
        }
        return d;
      }
      function Nh(t) {
        return function(n, i, l) {
          var d = Pe(n);
          if (!un(n)) {
            var h = ee(i, 3);
            n = $t(n), i = function($) {
              return h(d[$], $, d);
            };
          }
          var _ = t(n, i, l);
          return _ > -1 ? d[h ? n[_] : _] : r;
        };
      }
      function Dh(t) {
        return rr(function(n) {
          var i = n.length, l = i, d = Pn.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var h = n[l];
            if (typeof h != "function")
              throw new Rn(c);
            if (d && !_ && zl(h) == "wrapper")
              var _ = new Pn([], !0);
          }
          for (l = _ ? l : i; ++l < i; ) {
            h = n[l];
            var $ = zl(h), V = $ == "wrapper" ? Qc(h) : r;
            V && od(V[0]) && V[1] == (H | x | A | K) && !V[4].length && V[9] == 1 ? _ = _[zl(V[0])].apply(_, V[3]) : _ = h.length == 1 && od(h) ? _[$]() : _.thru(h);
          }
          return function() {
            var D = arguments, O = D[0];
            if (_ && D.length == 1 && ae(O))
              return _.plant(O).value();
            for (var R = 0, G = i ? n[R].apply(this, D) : O; ++R < i; )
              G = n[R].call(this, G);
            return G;
          };
        });
      }
      function Fl(t, n, i, l, d, h, _, $, V, D) {
        var O = n & H, R = n & M, G = n & E, J = n & (x | U), ne = n & Me, ue = G ? r : va(t);
        function oe() {
          for (var fe = arguments.length, ge = k(fe), Vn = fe; Vn--; )
            ge[Vn] = arguments[Vn];
          if (J)
            var Jt = as(oe), Sn = o$(ge, Jt);
          if (l && (ge = Ah(ge, l, d, J)), h && (ge = Th(ge, h, _, J)), fe -= Sn, J && fe < D) {
            var st = Vr(ge, Jt);
            return Rh(
              t,
              n,
              Fl,
              oe.placeholder,
              i,
              ge,
              st,
              $,
              V,
              D - fe
            );
          }
          var ao = R ? i : this, lr = G ? ao[t] : t;
          return fe = ge.length, $ ? ge = db(ge, $) : ne && fe > 1 && ge.reverse(), O && V < fe && (ge.length = V), this && this !== Et && this instanceof oe && (lr = ue || va(lr)), lr.apply(ao, ge);
        }
        return oe;
      }
      function Oh(t, n) {
        return function(i, l) {
          return gy(i, t, n(l), {});
        };
      }
      function Ul(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = bn(i), l = bn(l)) : (i = yh(i), l = yh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Zc(t) {
        return rr(function(n) {
          return n = Ye(n, yn(ee())), de(function(i) {
            var l = this;
            return t(n, function(d) {
              return $n(d, l, i);
            });
          });
        });
      }
      function Wl(t, n) {
        n = n === r ? " " : bn(n);
        var i = n.length;
        if (i < 2)
          return i ? Wc(n, t) : n;
        var l = Wc(n, Il(t / Qi(n)));
        return Xi(n) ? Ar(ro(l), 0, t).join("") : l.slice(0, t);
      }
      function Gy(t, n, i, l) {
        var d = n & M, h = va(t);
        function _() {
          for (var $ = -1, V = arguments.length, D = -1, O = l.length, R = k(O + V), G = this && this !== Et && this instanceof _ ? h : t; ++D < O; )
            R[D] = l[D];
          for (; V--; )
            R[D++] = arguments[++$];
          return $n(G, d ? i : this, R);
        }
        return _;
      }
      function Bh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Kt(n, i, l) && (i = l = r), n = ar(n), i === r ? (i = n, n = 0) : i = ar(i), l = l === r ? n < i ? 1 : -1 : ar(l), xy(n, i, l, t);
        };
      }
      function Hl(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Hn(n), i = Hn(i)), t(n, i);
        };
      }
      function Rh(t, n, i, l, d, h, _, $, V, D) {
        var O = n & x, R = O ? _ : r, G = O ? r : _, J = O ? h : r, ne = O ? r : h;
        n |= O ? A : P, n &= ~(O ? P : A), n & T || (n &= ~(M | E));
        var ue = [
          t,
          n,
          d,
          J,
          R,
          ne,
          G,
          $,
          V,
          D
        ], oe = i.apply(r, ue);
        return od(t) && Kh(oe, ue), oe.placeholder = l, Jh(oe, t, n);
      }
      function Kc(t) {
        var n = pt[t];
        return function(i, l) {
          if (i = Hn(i), l = l == null ? 0 : Rt(le(l), 292), l && Jp(i)) {
            var d = (Le(i) + "e").split("e"), h = n(d[0] + "e" + (+d[1] + l));
            return d = (Le(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Yy = ns && 1 / _l(new ns([, -0]))[1] == Xe ? function(t) {
        return new ns(t);
      } : _d;
      function Ph(t) {
        return function(n) {
          var i = Pt(n);
          return i == vt ? Ec(n) : i == Vt ? c$(n) : n$(n, t(n));
        };
      }
      function or(t, n, i, l, d, h, _, $) {
        var V = n & E;
        if (!V && typeof t != "function")
          throw new Rn(c);
        var D = l ? l.length : 0;
        if (D || (n &= ~(A | P), l = d = r), _ = _ === r ? _ : ht(le(_), 0), $ = $ === r ? $ : le($), D -= d ? d.length : 0, n & P) {
          var O = l, R = d;
          l = d = r;
        }
        var G = V ? r : Qc(t), J = [
          t,
          n,
          i,
          l,
          d,
          O,
          R,
          h,
          _,
          $
        ];
        if (G && lb(J, G), t = J[0], n = J[1], i = J[2], l = J[3], d = J[4], $ = J[9] = J[9] === r ? V ? 0 : t.length : ht(J[9] - D, 0), !$ && n & (x | U) && (n &= ~(x | U)), !n || n == M)
          var ne = zy(t, n, i);
        else
          n == x || n == U ? ne = qy(t, n, $) : (n == A || n == (M | A)) && !d.length ? ne = Gy(t, n, i, l) : ne = Fl.apply(r, J);
        var ue = G ? gh : Kh;
        return Jh(ue(ne, J), t, n);
      }
      function Fh(t, n, i, l) {
        return t === r || so(t, ts[i]) && !De.call(l, i) ? n : t;
      }
      function Uh(t, n, i, l, d, h) {
        return Ke(t) && Ke(n) && (h.set(n, t), Ol(t, n, r, Uh, h), h.delete(n)), t;
      }
      function jy(t) {
        return $a(t) ? r : t;
      }
      function Wh(t, n, i, l, d, h) {
        var _ = i & N, $ = t.length, V = n.length;
        if ($ != V && !(_ && V > $))
          return !1;
        var D = h.get(t), O = h.get(n);
        if (D && O)
          return D == n && O == t;
        var R = -1, G = !0, J = i & F ? new di() : r;
        for (h.set(t, n), h.set(n, t); ++R < $; ) {
          var ne = t[R], ue = n[R];
          if (l)
            var oe = _ ? l(ue, ne, R, n, t, h) : l(ne, ue, R, t, n, h);
          if (oe !== r) {
            if (oe)
              continue;
            G = !1;
            break;
          }
          if (J) {
            if (!$c(n, function(fe, ge) {
              if (!sa(J, ge) && (ne === fe || d(ne, fe, i, l, h)))
                return J.push(ge);
            })) {
              G = !1;
              break;
            }
          } else if (!(ne === ue || d(ne, ue, i, l, h))) {
            G = !1;
            break;
          }
        }
        return h.delete(t), h.delete(n), G;
      }
      function Zy(t, n, i, l, d, h, _) {
        switch (i) {
          case qt:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Qn:
            return !(t.byteLength != n.byteLength || !h(new Vl(t), new Vl(n)));
          case dt:
          case Nn:
          case Te:
            return so(+t, +n);
          case Ne:
            return t.name == n.name && t.message == n.message;
          case rn:
          case Xn:
            return t == n + "";
          case vt:
            var $ = Ec;
          case Vt:
            var V = l & N;
            if ($ || ($ = _l), t.size != n.size && !V)
              return !1;
            var D = _.get(t);
            if (D)
              return D == n;
            l |= F, _.set(t, n);
            var O = Wh($(t), $(n), l, d, h, _);
            return _.delete(t), O;
          case _t:
            if (da)
              return da.call(t) == da.call(n);
        }
        return !1;
      }
      function Ky(t, n, i, l, d, h) {
        var _ = i & N, $ = Jc(t), V = $.length, D = Jc(n), O = D.length;
        if (V != O && !_)
          return !1;
        for (var R = V; R--; ) {
          var G = $[R];
          if (!(_ ? G in n : De.call(n, G)))
            return !1;
        }
        var J = h.get(t), ne = h.get(n);
        if (J && ne)
          return J == n && ne == t;
        var ue = !0;
        h.set(t, n), h.set(n, t);
        for (var oe = _; ++R < V; ) {
          G = $[R];
          var fe = t[G], ge = n[G];
          if (l)
            var Vn = _ ? l(ge, fe, G, n, t, h) : l(fe, ge, G, t, n, h);
          if (!(Vn === r ? fe === ge || d(fe, ge, i, l, h) : Vn)) {
            ue = !1;
            break;
          }
          oe || (oe = G == "constructor");
        }
        if (ue && !oe) {
          var Jt = t.constructor, Sn = n.constructor;
          Jt != Sn && "constructor" in t && "constructor" in n && !(typeof Jt == "function" && Jt instanceof Jt && typeof Sn == "function" && Sn instanceof Sn) && (ue = !1);
        }
        return h.delete(t), h.delete(n), ue;
      }
      function rr(t) {
        return id(jh(t, r, om), t + "");
      }
      function Jc(t) {
        return lh(t, $t, td);
      }
      function Xc(t) {
        return lh(t, cn, Hh);
      }
      var Qc = Tl ? function(t) {
        return Tl.get(t);
      } : _d;
      function zl(t) {
        for (var n = t.name + "", i = os[n], l = De.call(os, n) ? i.length : 0; l--; ) {
          var d = i[l], h = d.func;
          if (h == null || h == t)
            return d.name;
        }
        return n;
      }
      function as(t) {
        var n = De.call(p, "placeholder") ? p : t;
        return n.placeholder;
      }
      function ee() {
        var t = p.iteratee || wd;
        return t = t === wd ? dh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function ql(t, n) {
        var i = t.__data__;
        return rb(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function ed(t) {
        for (var n = $t(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Gh(d)];
        }
        return n;
      }
      function hi(t, n) {
        var i = a$(t, n);
        return ch(i) ? i : r;
      }
      function Jy(t) {
        var n = De.call(t, ui), i = t[ui];
        try {
          t[ui] = r;
          var l = !0;
        } catch {
        }
        var d = bl.call(t);
        return l && (n ? t[ui] = i : delete t[ui]), d;
      }
      var td = Ic ? function(t) {
        return t == null ? [] : (t = Pe(t), br(Ic(t), function(n) {
          return Zp.call(t, n);
        }));
      } : gd, Hh = Ic ? function(t) {
        for (var n = []; t; )
          Cr(n, td(t)), t = Sl(t);
        return n;
      } : gd, Pt = Zt;
      (Ac && Pt(new Ac(new ArrayBuffer(1))) != qt || la && Pt(new la()) != vt || Tc && Pt(Tc.resolve()) != Ot || ns && Pt(new ns()) != Vt || ua && Pt(new ua()) != ft) && (Pt = function(t) {
        var n = Zt(t), i = n == Ct ? t.constructor : r, l = i ? mi(i) : "";
        if (l)
          switch (l) {
            case M$:
              return qt;
            case N$:
              return vt;
            case D$:
              return Ot;
            case O$:
              return Vt;
            case B$:
              return ft;
          }
        return n;
      });
      function Xy(t, n, i) {
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
              n = Rt(n, t + _);
              break;
            case "takeRight":
              t = ht(t, n - _);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Qy(t) {
        var n = t.match(Wi);
        return n ? n[1].split(Hi) : [];
      }
      function zh(t, n, i) {
        n = Ir(n, t);
        for (var l = -1, d = n.length, h = !1; ++l < d; ) {
          var _ = Io(n[l]);
          if (!(h = t != null && i(t, _)))
            break;
          t = t[_];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && Xl(d) && ir(_, d) && (ae(t) || wi(t)));
      }
      function eb(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && De.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function qh(t) {
        return typeof t.constructor == "function" && !_a(t) ? rs(Sl(t)) : {};
      }
      function tb(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case Qn:
            return jc(t);
          case dt:
          case Nn:
            return new l(+t);
          case qt:
            return Ry(t, i);
          case _o:
          case eo:
          case Uo:
          case Wo:
          case Ho:
          case go:
          case $o:
          case gn:
          case St:
            return kh(t, i);
          case vt:
            return new l();
          case Te:
          case Xn:
            return new l(t);
          case rn:
            return Py(t);
          case Vt:
            return new l();
          case _t:
            return Fy(t);
        }
      }
      function nb(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Co, `{
/* [wrapped with ` + n + `] */
`);
      }
      function ob(t) {
        return ae(t) || wi(t) || !!(Kp && t && t[Kp]);
      }
      function ir(t, n) {
        var i = typeof t;
        return n = n == null ? ct : n, !!n && (i == "number" || i != "symbol" && Zo.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Kt(t, n, i) {
        if (!Ke(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? un(i) && ir(n, i.length) : l == "string" && n in i) ? so(i[n], t) : !1;
      }
      function nd(t, n) {
        if (ae(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Cn(t) ? !0 : Fi.test(t) || !_r.test(t) || n != null && t in Pe(n);
      }
      function rb(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function od(t) {
        var n = zl(t), i = p[n];
        if (typeof i != "function" || !(n in we.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Qc(i);
        return !!l && t === l[0];
      }
      function ib(t) {
        return !!Gp && Gp in t;
      }
      var sb = $l ? sr : $d;
      function _a(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || ts;
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
      function ab(t) {
        var n = Kl(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function lb(t, n) {
        var i = t[1], l = n[1], d = i | l, h = d < (M | E | H), _ = l == H && i == x || l == H && i == K && t[7].length <= n[8] || l == (H | K) && n[7].length <= n[8] && i == x;
        if (!(h || _))
          return t;
        l & M && (t[2] = n[2], d |= i & M ? 0 : T);
        var $ = n[3];
        if ($) {
          var V = t[3];
          t[3] = V ? Ah(V, $, n[4]) : $, t[4] = V ? Vr(t[3], g) : n[4];
        }
        return $ = n[5], $ && (V = t[5], t[5] = V ? Th(V, $, n[6]) : $, t[6] = V ? Vr(t[5], g) : n[6]), $ = n[7], $ && (t[7] = $), l & H && (t[8] = t[8] == null ? n[8] : Rt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function ub(t) {
        var n = [];
        if (t != null)
          for (var i in Pe(t))
            n.push(i);
        return n;
      }
      function cb(t) {
        return bl.call(t);
      }
      function jh(t, n, i) {
        return n = ht(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, h = ht(l.length - n, 0), _ = k(h); ++d < h; )
            _[d] = l[n + d];
          d = -1;
          for (var $ = k(n + 1); ++d < n; )
            $[d] = l[d];
          return $[n] = i(_), $n(t, this, $);
        };
      }
      function Zh(t, n) {
        return n.length < 2 ? t : pi(t, Un(n, 0, -1));
      }
      function db(t, n) {
        for (var i = t.length, l = Rt(n.length, i), d = ln(t); l--; ) {
          var h = n[l];
          t[l] = ir(h, i) ? d[h] : r;
        }
        return t;
      }
      function rd(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Kh = Xh(gh), ga = E$ || function(t, n) {
        return Et.setTimeout(t, n);
      }, id = Xh(Ny);
      function Jh(t, n, i) {
        var l = n + "";
        return id(t, nb(l, fb(Qy(l), i)));
      }
      function Xh(t) {
        var n = 0, i = 0;
        return function() {
          var l = T$(), d = He - (l - i);
          if (i = l, d > 0) {
            if (++n >= Ee)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Gl(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var h = Uc(i, d), _ = t[h];
          t[h] = t[i], t[i] = _;
        }
        return t.length = n, t;
      }
      var Qh = ab(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(ei, function(i, l, d, h) {
          n.push(d ? h.replace(zi, "$1") : l || i);
        }), n;
      });
      function Io(t) {
        if (typeof t == "string" || Cn(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Xe ? "-0" : n;
      }
      function mi(t) {
        if (t != null) {
          try {
            return yl.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function fb(t, n) {
        return Bn(ia, function(i) {
          var l = "_." + i[0];
          n & i[1] && !wl(t, l) && t.push(l);
        }), t.sort();
      }
      function em(t) {
        if (t instanceof we)
          return t.clone();
        var n = new Pn(t.__wrapped__, t.__chain__);
        return n.__actions__ = ln(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function pb(t, n, i) {
        (i ? Kt(t, n, i) : n === r) ? n = 1 : n = ht(le(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, h = 0, _ = k(Il(l / n)); d < l; )
          _[h++] = Un(t, d, d += n);
        return _;
      }
      function hb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var h = t[n];
          h && (d[l++] = h);
        }
        return d;
      }
      function mb() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = k(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Cr(ae(i) ? ln(i) : [i], kt(n, 1));
      }
      var wb = de(function(t, n) {
        return it(t) ? pa(t, kt(n, 1, it, !0)) : [];
      }), vb = de(function(t, n) {
        var i = Wn(n);
        return it(i) && (i = r), it(t) ? pa(t, kt(n, 1, it, !0), ee(i, 2)) : [];
      }), _b = de(function(t, n) {
        var i = Wn(n);
        return it(i) && (i = r), it(t) ? pa(t, kt(n, 1, it, !0), r, i) : [];
      });
      function gb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), Un(t, n < 0 ? 0 : n, l)) : [];
      }
      function $b(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), n = l - n, Un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function yb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3), !0, !0) : [];
      }
      function bb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3), !0) : [];
      }
      function Cb(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Kt(t, n, i) && (i = 0, l = d), my(t, n, i, l)) : [];
      }
      function tm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = ht(l + d, 0)), vl(t, ee(n, 3), d);
      }
      function nm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = le(i), d = i < 0 ? ht(l + d, 0) : Rt(d, l - 1)), vl(t, ee(n, 3), d, !0);
      }
      function om(t) {
        var n = t == null ? 0 : t.length;
        return n ? kt(t, 1) : [];
      }
      function Vb(t) {
        var n = t == null ? 0 : t.length;
        return n ? kt(t, Xe) : [];
      }
      function Sb(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : le(n), kt(t, n)) : [];
      }
      function Eb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function rm(t) {
        return t && t.length ? t[0] : r;
      }
      function kb(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = ht(l + d, 0)), Ji(t, n, d);
      }
      function Ib(t) {
        var n = t == null ? 0 : t.length;
        return n ? Un(t, 0, -1) : [];
      }
      var Ab = de(function(t) {
        var n = Ye(t, Gc);
        return n.length && n[0] === t[0] ? Oc(n) : [];
      }), Tb = de(function(t) {
        var n = Wn(t), i = Ye(t, Gc);
        return n === Wn(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Oc(i, ee(n, 2)) : [];
      }), xb = de(function(t) {
        var n = Wn(t), i = Ye(t, Gc);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Oc(i, r, n) : [];
      });
      function Lb(t, n) {
        return t == null ? "" : I$.call(t, n);
      }
      function Wn(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Mb(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = le(i), d = d < 0 ? ht(l + d, 0) : Rt(d, l - 1)), n === n ? f$(t, n, d) : vl(t, Rp, d, !0);
      }
      function Nb(t, n) {
        return t && t.length ? mh(t, le(n)) : r;
      }
      var Db = de(im);
      function im(t, n) {
        return t && t.length && n && n.length ? Fc(t, n) : t;
      }
      function Ob(t, n, i) {
        return t && t.length && n && n.length ? Fc(t, n, ee(i, 2)) : t;
      }
      function Bb(t, n, i) {
        return t && t.length && n && n.length ? Fc(t, n, r, i) : t;
      }
      var Rb = rr(function(t, n) {
        var i = t == null ? 0 : t.length, l = Lc(t, n);
        return _h(t, Ye(n, function(d) {
          return ir(d, i) ? +d : d;
        }).sort(Ih)), l;
      });
      function Pb(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], h = t.length;
        for (n = ee(n, 3); ++l < h; ) {
          var _ = t[l];
          n(_, l, t) && (i.push(_), d.push(l));
        }
        return _h(t, d), i;
      }
      function sd(t) {
        return t == null ? t : L$.call(t);
      }
      function Fb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Kt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : le(n), i = i === r ? l : le(i)), Un(t, n, i)) : [];
      }
      function Ub(t, n) {
        return Bl(t, n);
      }
      function Wb(t, n, i) {
        return Hc(t, n, ee(i, 2));
      }
      function Hb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Bl(t, n);
          if (l < i && so(t[l], n))
            return l;
        }
        return -1;
      }
      function zb(t, n) {
        return Bl(t, n, !0);
      }
      function qb(t, n, i) {
        return Hc(t, n, ee(i, 2), !0);
      }
      function Gb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Bl(t, n, !0) - 1;
          if (so(t[l], n))
            return l;
        }
        return -1;
      }
      function Yb(t) {
        return t && t.length ? $h(t) : [];
      }
      function jb(t, n) {
        return t && t.length ? $h(t, ee(n, 2)) : [];
      }
      function Zb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Un(t, 1, n) : [];
      }
      function Kb(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : le(n), Un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Jb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), n = l - n, Un(t, n < 0 ? 0 : n, l)) : [];
      }
      function Xb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3), !1, !0) : [];
      }
      function Qb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3)) : [];
      }
      var eC = de(function(t) {
        return kr(kt(t, 1, it, !0));
      }), tC = de(function(t) {
        var n = Wn(t);
        return it(n) && (n = r), kr(kt(t, 1, it, !0), ee(n, 2));
      }), nC = de(function(t) {
        var n = Wn(t);
        return n = typeof n == "function" ? n : r, kr(kt(t, 1, it, !0), r, n);
      });
      function oC(t) {
        return t && t.length ? kr(t) : [];
      }
      function rC(t, n) {
        return t && t.length ? kr(t, ee(n, 2)) : [];
      }
      function iC(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? kr(t, r, n) : [];
      }
      function ad(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = br(t, function(i) {
          if (it(i))
            return n = ht(i.length, n), !0;
        }), Vc(n, function(i) {
          return Ye(t, yc(i));
        });
      }
      function sm(t, n) {
        if (!(t && t.length))
          return [];
        var i = ad(t);
        return n == null ? i : Ye(i, function(l) {
          return $n(n, r, l);
        });
      }
      var sC = de(function(t, n) {
        return it(t) ? pa(t, n) : [];
      }), aC = de(function(t) {
        return qc(br(t, it));
      }), lC = de(function(t) {
        var n = Wn(t);
        return it(n) && (n = r), qc(br(t, it), ee(n, 2));
      }), uC = de(function(t) {
        var n = Wn(t);
        return n = typeof n == "function" ? n : r, qc(br(t, it), r, n);
      }), cC = de(ad);
      function dC(t, n) {
        return Vh(t || [], n || [], fa);
      }
      function fC(t, n) {
        return Vh(t || [], n || [], wa);
      }
      var pC = de(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, sm(t, i);
      });
      function am(t) {
        var n = p(t);
        return n.__chain__ = !0, n;
      }
      function hC(t, n) {
        return n(t), t;
      }
      function Yl(t, n) {
        return n(t);
      }
      var mC = rr(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Lc(h, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof we) || !ir(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Yl,
          args: [d],
          thisArg: r
        }), new Pn(l, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function wC() {
        return am(this);
      }
      function vC() {
        return new Pn(this.value(), this.__chain__);
      }
      function _C() {
        this.__values__ === r && (this.__values__ = ym(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function gC() {
        return this;
      }
      function $C(t) {
        for (var n, i = this; i instanceof Ll; ) {
          var l = em(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function yC() {
        var t = this.__wrapped__;
        if (t instanceof we) {
          var n = t;
          return this.__actions__.length && (n = new we(this)), n = n.reverse(), n.__actions__.push({
            func: Yl,
            args: [sd],
            thisArg: r
          }), new Pn(n, this.__chain__);
        }
        return this.thru(sd);
      }
      function bC() {
        return Ch(this.__wrapped__, this.__actions__);
      }
      var CC = Pl(function(t, n, i) {
        De.call(t, i) ? ++t[i] : nr(t, i, 1);
      });
      function VC(t, n, i) {
        var l = ae(t) ? Op : hy;
        return i && Kt(t, n, i) && (n = r), l(t, ee(n, 3));
      }
      function SC(t, n) {
        var i = ae(t) ? br : sh;
        return i(t, ee(n, 3));
      }
      var EC = Nh(tm), kC = Nh(nm);
      function IC(t, n) {
        return kt(jl(t, n), 1);
      }
      function AC(t, n) {
        return kt(jl(t, n), Xe);
      }
      function TC(t, n, i) {
        return i = i === r ? 1 : le(i), kt(jl(t, n), i);
      }
      function lm(t, n) {
        var i = ae(t) ? Bn : Er;
        return i(t, ee(n, 3));
      }
      function um(t, n) {
        var i = ae(t) ? Z0 : ih;
        return i(t, ee(n, 3));
      }
      var xC = Pl(function(t, n, i) {
        De.call(t, i) ? t[i].push(n) : nr(t, i, [n]);
      });
      function LC(t, n, i, l) {
        t = un(t) ? t : us(t), i = i && !l ? le(i) : 0;
        var d = t.length;
        return i < 0 && (i = ht(d + i, 0)), Ql(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Ji(t, n, i) > -1;
      }
      var MC = de(function(t, n, i) {
        var l = -1, d = typeof n == "function", h = un(t) ? k(t.length) : [];
        return Er(t, function(_) {
          h[++l] = d ? $n(n, _, i) : ha(_, n, i);
        }), h;
      }), NC = Pl(function(t, n, i) {
        nr(t, i, n);
      });
      function jl(t, n) {
        var i = ae(t) ? Ye : fh;
        return i(t, ee(n, 3));
      }
      function DC(t, n, i, l) {
        return t == null ? [] : (ae(n) || (n = n == null ? [] : [n]), i = l ? r : i, ae(i) || (i = i == null ? [] : [i]), wh(t, n, i));
      }
      var OC = Pl(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function BC(t, n, i) {
        var l = ae(t) ? gc : Fp, d = arguments.length < 3;
        return l(t, ee(n, 4), i, d, Er);
      }
      function RC(t, n, i) {
        var l = ae(t) ? K0 : Fp, d = arguments.length < 3;
        return l(t, ee(n, 4), i, d, ih);
      }
      function PC(t, n) {
        var i = ae(t) ? br : sh;
        return i(t, Jl(ee(n, 3)));
      }
      function FC(t) {
        var n = ae(t) ? th : Ly;
        return n(t);
      }
      function UC(t, n, i) {
        (i ? Kt(t, n, i) : n === r) ? n = 1 : n = le(n);
        var l = ae(t) ? uy : My;
        return l(t, n);
      }
      function WC(t) {
        var n = ae(t) ? cy : Dy;
        return n(t);
      }
      function HC(t) {
        if (t == null)
          return 0;
        if (un(t))
          return Ql(t) ? Qi(t) : t.length;
        var n = Pt(t);
        return n == vt || n == Vt ? t.size : Rc(t).length;
      }
      function zC(t, n, i) {
        var l = ae(t) ? $c : Oy;
        return i && Kt(t, n, i) && (n = r), l(t, ee(n, 3));
      }
      var qC = de(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Kt(t, n[0], n[1]) ? n = [] : i > 2 && Kt(n[0], n[1], n[2]) && (n = [n[0]]), wh(t, kt(n, 1), []);
      }), Zl = S$ || function() {
        return Et.Date.now();
      };
      function GC(t, n) {
        if (typeof n != "function")
          throw new Rn(c);
        return t = le(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function cm(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, or(t, H, r, r, r, r, n);
      }
      function dm(t, n) {
        var i;
        if (typeof n != "function")
          throw new Rn(c);
        return t = le(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var ld = de(function(t, n, i) {
        var l = M;
        if (i.length) {
          var d = Vr(i, as(ld));
          l |= A;
        }
        return or(t, l, n, i, d);
      }), fm = de(function(t, n, i) {
        var l = M | E;
        if (i.length) {
          var d = Vr(i, as(fm));
          l |= A;
        }
        return or(n, l, t, i, d);
      });
      function pm(t, n, i) {
        n = i ? r : n;
        var l = or(t, x, r, r, r, r, r, n);
        return l.placeholder = pm.placeholder, l;
      }
      function hm(t, n, i) {
        n = i ? r : n;
        var l = or(t, U, r, r, r, r, r, n);
        return l.placeholder = hm.placeholder, l;
      }
      function mm(t, n, i) {
        var l, d, h, _, $, V, D = 0, O = !1, R = !1, G = !0;
        if (typeof t != "function")
          throw new Rn(c);
        n = Hn(n) || 0, Ke(i) && (O = !!i.leading, R = "maxWait" in i, h = R ? ht(Hn(i.maxWait) || 0, n) : h, G = "trailing" in i ? !!i.trailing : G);
        function J(st) {
          var ao = l, lr = d;
          return l = d = r, D = st, _ = t.apply(lr, ao), _;
        }
        function ne(st) {
          return D = st, $ = ga(fe, n), O ? J(st) : _;
        }
        function ue(st) {
          var ao = st - V, lr = st - D, Nm = n - ao;
          return R ? Rt(Nm, h - lr) : Nm;
        }
        function oe(st) {
          var ao = st - V, lr = st - D;
          return V === r || ao >= n || ao < 0 || R && lr >= h;
        }
        function fe() {
          var st = Zl();
          if (oe(st))
            return ge(st);
          $ = ga(fe, ue(st));
        }
        function ge(st) {
          return $ = r, G && l ? J(st) : (l = d = r, _);
        }
        function Vn() {
          $ !== r && Sh($), D = 0, l = V = d = $ = r;
        }
        function Jt() {
          return $ === r ? _ : ge(Zl());
        }
        function Sn() {
          var st = Zl(), ao = oe(st);
          if (l = arguments, d = this, V = st, ao) {
            if ($ === r)
              return ne(V);
            if (R)
              return Sh($), $ = ga(fe, n), J(V);
          }
          return $ === r && ($ = ga(fe, n)), _;
        }
        return Sn.cancel = Vn, Sn.flush = Jt, Sn;
      }
      var YC = de(function(t, n) {
        return rh(t, 1, n);
      }), jC = de(function(t, n, i) {
        return rh(t, Hn(n) || 0, i);
      });
      function ZC(t) {
        return or(t, Me);
      }
      function Kl(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Rn(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], h = i.cache;
          if (h.has(d))
            return h.get(d);
          var _ = t.apply(this, l);
          return i.cache = h.set(d, _) || h, _;
        };
        return i.cache = new (Kl.Cache || tr)(), i;
      }
      Kl.Cache = tr;
      function Jl(t) {
        if (typeof t != "function")
          throw new Rn(c);
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
      function KC(t) {
        return dm(2, t);
      }
      var JC = By(function(t, n) {
        n = n.length == 1 && ae(n[0]) ? Ye(n[0], yn(ee())) : Ye(kt(n, 1), yn(ee()));
        var i = n.length;
        return de(function(l) {
          for (var d = -1, h = Rt(l.length, i); ++d < h; )
            l[d] = n[d].call(this, l[d]);
          return $n(t, this, l);
        });
      }), ud = de(function(t, n) {
        var i = Vr(n, as(ud));
        return or(t, A, r, n, i);
      }), wm = de(function(t, n) {
        var i = Vr(n, as(wm));
        return or(t, P, r, n, i);
      }), XC = rr(function(t, n) {
        return or(t, K, r, r, r, n);
      });
      function QC(t, n) {
        if (typeof t != "function")
          throw new Rn(c);
        return n = n === r ? n : le(n), de(t, n);
      }
      function eV(t, n) {
        if (typeof t != "function")
          throw new Rn(c);
        return n = n == null ? 0 : ht(le(n), 0), de(function(i) {
          var l = i[n], d = Ar(i, 0, n);
          return l && Cr(d, l), $n(t, this, d);
        });
      }
      function tV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Rn(c);
        return Ke(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), mm(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function nV(t) {
        return cm(t, 1);
      }
      function oV(t, n) {
        return ud(Yc(n), t);
      }
      function rV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return ae(t) ? t : [t];
      }
      function iV(t) {
        return Fn(t, B);
      }
      function sV(t, n) {
        return n = typeof n == "function" ? n : r, Fn(t, B, n);
      }
      function aV(t) {
        return Fn(t, y | B);
      }
      function lV(t, n) {
        return n = typeof n == "function" ? n : r, Fn(t, y | B, n);
      }
      function uV(t, n) {
        return n == null || oh(t, n, $t(n));
      }
      function so(t, n) {
        return t === n || t !== t && n !== n;
      }
      var cV = Hl(Dc), dV = Hl(function(t, n) {
        return t >= n;
      }), wi = uh(function() {
        return arguments;
      }()) ? uh : function(t) {
        return et(t) && De.call(t, "callee") && !Zp.call(t, "callee");
      }, ae = k.isArray, fV = Tp ? yn(Tp) : $y;
      function un(t) {
        return t != null && Xl(t.length) && !sr(t);
      }
      function it(t) {
        return et(t) && un(t);
      }
      function pV(t) {
        return t === !0 || t === !1 || et(t) && Zt(t) == dt;
      }
      var Tr = k$ || $d, hV = xp ? yn(xp) : yy;
      function mV(t) {
        return et(t) && t.nodeType === 1 && !$a(t);
      }
      function wV(t) {
        if (t == null)
          return !0;
        if (un(t) && (ae(t) || typeof t == "string" || typeof t.splice == "function" || Tr(t) || ls(t) || wi(t)))
          return !t.length;
        var n = Pt(t);
        if (n == vt || n == Vt)
          return !t.size;
        if (_a(t))
          return !Rc(t).length;
        for (var i in t)
          if (De.call(t, i))
            return !1;
        return !0;
      }
      function vV(t, n) {
        return ma(t, n);
      }
      function _V(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? ma(t, n, r, i) : !!l;
      }
      function cd(t) {
        if (!et(t))
          return !1;
        var n = Zt(t);
        return n == Ne || n == Jn || typeof t.message == "string" && typeof t.name == "string" && !$a(t);
      }
      function gV(t) {
        return typeof t == "number" && Jp(t);
      }
      function sr(t) {
        if (!Ke(t))
          return !1;
        var n = Zt(t);
        return n == vo || n == Fe || n == Mn || n == Po;
      }
      function vm(t) {
        return typeof t == "number" && t == le(t);
      }
      function Xl(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ct;
      }
      function Ke(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function et(t) {
        return t != null && typeof t == "object";
      }
      var _m = Lp ? yn(Lp) : Cy;
      function $V(t, n) {
        return t === n || Bc(t, n, ed(n));
      }
      function yV(t, n, i) {
        return i = typeof i == "function" ? i : r, Bc(t, n, ed(n), i);
      }
      function bV(t) {
        return gm(t) && t != +t;
      }
      function CV(t) {
        if (sb(t))
          throw new ie(u);
        return ch(t);
      }
      function VV(t) {
        return t === null;
      }
      function SV(t) {
        return t == null;
      }
      function gm(t) {
        return typeof t == "number" || et(t) && Zt(t) == Te;
      }
      function $a(t) {
        if (!et(t) || Zt(t) != Ct)
          return !1;
        var n = Sl(t);
        if (n === null)
          return !0;
        var i = De.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && yl.call(i) == y$;
      }
      var dd = Mp ? yn(Mp) : Vy;
      function EV(t) {
        return vm(t) && t >= -ct && t <= ct;
      }
      var $m = Np ? yn(Np) : Sy;
      function Ql(t) {
        return typeof t == "string" || !ae(t) && et(t) && Zt(t) == Xn;
      }
      function Cn(t) {
        return typeof t == "symbol" || et(t) && Zt(t) == _t;
      }
      var ls = Dp ? yn(Dp) : Ey;
      function kV(t) {
        return t === r;
      }
      function IV(t) {
        return et(t) && Pt(t) == ft;
      }
      function AV(t) {
        return et(t) && Zt(t) == Jr;
      }
      var TV = Hl(Pc), xV = Hl(function(t, n) {
        return t <= n;
      });
      function ym(t) {
        if (!t)
          return [];
        if (un(t))
          return Ql(t) ? ro(t) : ln(t);
        if (aa && t[aa])
          return u$(t[aa]());
        var n = Pt(t), i = n == vt ? Ec : n == Vt ? _l : us;
        return i(t);
      }
      function ar(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Hn(t), t === Xe || t === -Xe) {
          var n = t < 0 ? -1 : 1;
          return n * on;
        }
        return t === t ? t : 0;
      }
      function le(t) {
        var n = ar(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function bm(t) {
        return t ? fi(le(t), 0, Ce) : 0;
      }
      function Hn(t) {
        if (typeof t == "number")
          return t;
        if (Cn(t))
          return _n;
        if (Ke(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ke(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Up(t);
        var i = Y.test(t);
        return i || xe.test(t) ? G0(t.slice(2), i ? 2 : 8) : he.test(t) ? _n : +t;
      }
      function Cm(t) {
        return ko(t, cn(t));
      }
      function LV(t) {
        return t ? fi(le(t), -ct, ct) : t === 0 ? t : 0;
      }
      function Le(t) {
        return t == null ? "" : bn(t);
      }
      var MV = is(function(t, n) {
        if (_a(n) || un(n)) {
          ko(n, $t(n), t);
          return;
        }
        for (var i in n)
          De.call(n, i) && fa(t, i, n[i]);
      }), Vm = is(function(t, n) {
        ko(n, cn(n), t);
      }), eu = is(function(t, n, i, l) {
        ko(n, cn(n), t, l);
      }), NV = is(function(t, n, i, l) {
        ko(n, $t(n), t, l);
      }), DV = rr(Lc);
      function OV(t, n) {
        var i = rs(t);
        return n == null ? i : nh(i, n);
      }
      var BV = de(function(t, n) {
        t = Pe(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Kt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var h = n[i], _ = cn(h), $ = -1, V = _.length; ++$ < V; ) {
            var D = _[$], O = t[D];
            (O === r || so(O, ts[D]) && !De.call(t, D)) && (t[D] = h[D]);
          }
        return t;
      }), RV = de(function(t) {
        return t.push(r, Uh), $n(Sm, r, t);
      });
      function PV(t, n) {
        return Bp(t, ee(n, 3), Eo);
      }
      function FV(t, n) {
        return Bp(t, ee(n, 3), Nc);
      }
      function UV(t, n) {
        return t == null ? t : Mc(t, ee(n, 3), cn);
      }
      function WV(t, n) {
        return t == null ? t : ah(t, ee(n, 3), cn);
      }
      function HV(t, n) {
        return t && Eo(t, ee(n, 3));
      }
      function zV(t, n) {
        return t && Nc(t, ee(n, 3));
      }
      function qV(t) {
        return t == null ? [] : Dl(t, $t(t));
      }
      function GV(t) {
        return t == null ? [] : Dl(t, cn(t));
      }
      function fd(t, n, i) {
        var l = t == null ? r : pi(t, n);
        return l === r ? i : l;
      }
      function YV(t, n) {
        return t != null && zh(t, n, wy);
      }
      function pd(t, n) {
        return t != null && zh(t, n, vy);
      }
      var jV = Oh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = bl.call(n)), t[n] = i;
      }, md(dn)), ZV = Oh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = bl.call(n)), De.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, ee), KV = de(ha);
      function $t(t) {
        return un(t) ? eh(t) : Rc(t);
      }
      function cn(t) {
        return un(t) ? eh(t, !0) : ky(t);
      }
      function JV(t, n) {
        var i = {};
        return n = ee(n, 3), Eo(t, function(l, d, h) {
          nr(i, n(l, d, h), l);
        }), i;
      }
      function XV(t, n) {
        var i = {};
        return n = ee(n, 3), Eo(t, function(l, d, h) {
          nr(i, d, n(l, d, h));
        }), i;
      }
      var QV = is(function(t, n, i) {
        Ol(t, n, i);
      }), Sm = is(function(t, n, i, l) {
        Ol(t, n, i, l);
      }), eS = rr(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ye(n, function(h) {
          return h = Ir(h, t), l || (l = h.length > 1), h;
        }), ko(t, Xc(t), i), l && (i = Fn(i, y | b | B, jy));
        for (var d = n.length; d--; )
          zc(i, n[d]);
        return i;
      });
      function tS(t, n) {
        return Em(t, Jl(ee(n)));
      }
      var nS = rr(function(t, n) {
        return t == null ? {} : Ay(t, n);
      });
      function Em(t, n) {
        if (t == null)
          return {};
        var i = Ye(Xc(t), function(l) {
          return [l];
        });
        return n = ee(n), vh(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function oS(t, n, i) {
        n = Ir(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[Io(n[l])];
          h === r && (l = d, h = i), t = sr(h) ? h.call(t) : h;
        }
        return t;
      }
      function rS(t, n, i) {
        return t == null ? t : wa(t, n, i);
      }
      function iS(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : wa(t, n, i, l);
      }
      var km = Ph($t), Im = Ph(cn);
      function sS(t, n, i) {
        var l = ae(t), d = l || Tr(t) || ls(t);
        if (n = ee(n, 4), i == null) {
          var h = t && t.constructor;
          d ? i = l ? new h() : [] : Ke(t) ? i = sr(h) ? rs(Sl(t)) : {} : i = {};
        }
        return (d ? Bn : Eo)(t, function(_, $, V) {
          return n(i, _, $, V);
        }), i;
      }
      function aS(t, n) {
        return t == null ? !0 : zc(t, n);
      }
      function lS(t, n, i) {
        return t == null ? t : bh(t, n, Yc(i));
      }
      function uS(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : bh(t, n, Yc(i), l);
      }
      function us(t) {
        return t == null ? [] : Sc(t, $t(t));
      }
      function cS(t) {
        return t == null ? [] : Sc(t, cn(t));
      }
      function dS(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Hn(i), i = i === i ? i : 0), n !== r && (n = Hn(n), n = n === n ? n : 0), fi(Hn(t), n, i);
      }
      function fS(t, n, i) {
        return n = ar(n), i === r ? (i = n, n = 0) : i = ar(i), t = Hn(t), _y(t, n, i);
      }
      function pS(t, n, i) {
        if (i && typeof i != "boolean" && Kt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = ar(t), n === r ? (n = t, t = 0) : n = ar(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Xp();
          return Rt(t + d * (n - t + q0("1e-" + ((d + "").length - 1))), n);
        }
        return Uc(t, n);
      }
      var hS = ss(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Am(n) : n);
      });
      function Am(t) {
        return hd(Le(t).toLowerCase());
      }
      function Tm(t) {
        return t = Le(t), t && t.replace(qi, r$).replace(D0, "");
      }
      function mS(t, n, i) {
        t = Le(t), n = bn(n);
        var l = t.length;
        i = i === r ? l : fi(le(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function wS(t) {
        return t = Le(t), t && Go.test(t) ? t.replace(vr, i$) : t;
      }
      function vS(t) {
        return t = Le(t), t && ti.test(t) ? t.replace(yo, "\\$&") : t;
      }
      var _S = ss(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), gS = ss(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), $S = Mh("toLowerCase");
      function yS(t, n, i) {
        t = Le(t), n = le(n);
        var l = n ? Qi(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Wl(Al(d), i) + t + Wl(Il(d), i);
      }
      function bS(t, n, i) {
        t = Le(t), n = le(n);
        var l = n ? Qi(t) : 0;
        return n && l < n ? t + Wl(n - l, i) : t;
      }
      function CS(t, n, i) {
        t = Le(t), n = le(n);
        var l = n ? Qi(t) : 0;
        return n && l < n ? Wl(n - l, i) + t : t;
      }
      function VS(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), x$(Le(t).replace(bo, ""), n || 0);
      }
      function SS(t, n, i) {
        return (i ? Kt(t, n, i) : n === r) ? n = 1 : n = le(n), Wc(Le(t), n);
      }
      function ES() {
        var t = arguments, n = Le(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var kS = ss(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function IS(t, n, i) {
        return i && typeof i != "number" && Kt(t, n, i) && (n = i = r), i = i === r ? Ce : i >>> 0, i ? (t = Le(t), t && (typeof n == "string" || n != null && !dd(n)) && (n = bn(n), !n && Xi(t)) ? Ar(ro(t), 0, i) : t.split(n, i)) : [];
      }
      var AS = ss(function(t, n, i) {
        return t + (i ? " " : "") + hd(n);
      });
      function TS(t, n, i) {
        return t = Le(t), i = i == null ? 0 : fi(le(i), 0, t.length), n = bn(n), t.slice(i, i + n.length) == n;
      }
      function xS(t, n, i) {
        var l = p.templateSettings;
        i && Kt(t, n, i) && (n = r), t = Le(t), n = eu({}, n, l, Fh);
        var d = eu({}, n.imports, l.imports, Fh), h = $t(d), _ = Sc(d, h), $, V, D = 0, O = n.interpolate || Bt, R = "__p += '", G = kc(
          (n.escape || Bt).source + "|" + O.source + "|" + (O === Yo ? ni : Bt).source + "|" + (n.evaluate || Bt).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (De.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++F0 + "]") + `
`;
        t.replace(G, function(oe, fe, ge, Vn, Jt, Sn) {
          return ge || (ge = Vn), R += t.slice(D, Sn).replace(oi, s$), fe && ($ = !0, R += `' +
__e(` + fe + `) +
'`), Jt && (V = !0, R += `';
` + Jt + `;
__p += '`), ge && (R += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), D = Sn + oe.length, oe;
        }), R += `';
`;
        var ne = De.call(n, "variable") && n.variable;
        if (!ne)
          R = `with (obj) {
` + R + `
}
`;
        else if (no.test(ne))
          throw new ie(f);
        R = (V ? R.replace(wr, "") : R).replace(Xr, "$1").replace(Qr, "$1;"), R = "function(" + (ne || "obj") + `) {
` + (ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + R + `return __p
}`;
        var ue = Lm(function() {
          return ke(h, J + "return " + R).apply(r, _);
        });
        if (ue.source = R, cd(ue))
          throw ue;
        return ue;
      }
      function LS(t) {
        return Le(t).toLowerCase();
      }
      function MS(t) {
        return Le(t).toUpperCase();
      }
      function NS(t, n, i) {
        if (t = Le(t), t && (i || n === r))
          return Up(t);
        if (!t || !(n = bn(n)))
          return t;
        var l = ro(t), d = ro(n), h = Wp(l, d), _ = Hp(l, d) + 1;
        return Ar(l, h, _).join("");
      }
      function DS(t, n, i) {
        if (t = Le(t), t && (i || n === r))
          return t.slice(0, qp(t) + 1);
        if (!t || !(n = bn(n)))
          return t;
        var l = ro(t), d = Hp(l, ro(n)) + 1;
        return Ar(l, 0, d).join("");
      }
      function OS(t, n, i) {
        if (t = Le(t), t && (i || n === r))
          return t.replace(bo, "");
        if (!t || !(n = bn(n)))
          return t;
        var l = ro(t), d = Wp(l, ro(n));
        return Ar(l, d).join("");
      }
      function BS(t, n) {
        var i = pe, l = Ae;
        if (Ke(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? le(n.length) : i, l = "omission" in n ? bn(n.omission) : l;
        }
        t = Le(t);
        var h = t.length;
        if (Xi(t)) {
          var _ = ro(t);
          h = _.length;
        }
        if (i >= h)
          return t;
        var $ = i - Qi(l);
        if ($ < 1)
          return l;
        var V = _ ? Ar(_, 0, $).join("") : t.slice(0, $);
        if (d === r)
          return V + l;
        if (_ && ($ += V.length - $), dd(d)) {
          if (t.slice($).search(d)) {
            var D, O = V;
            for (d.global || (d = kc(d.source, Le(jo.exec(d)) + "g")), d.lastIndex = 0; D = d.exec(O); )
              var R = D.index;
            V = V.slice(0, R === r ? $ : R);
          }
        } else if (t.indexOf(bn(d), $) != $) {
          var G = V.lastIndexOf(d);
          G > -1 && (V = V.slice(0, G));
        }
        return V + l;
      }
      function RS(t) {
        return t = Le(t), t && qo.test(t) ? t.replace(zo, p$) : t;
      }
      var PS = ss(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), hd = Mh("toUpperCase");
      function xm(t, n, i) {
        return t = Le(t), n = i ? r : n, n === r ? l$(t) ? w$(t) : Q0(t) : t.match(n) || [];
      }
      var Lm = de(function(t, n) {
        try {
          return $n(t, r, n);
        } catch (i) {
          return cd(i) ? i : new ie(i);
        }
      }), FS = rr(function(t, n) {
        return Bn(n, function(i) {
          i = Io(i), nr(t, i, ld(t[i], t));
        }), t;
      });
      function US(t) {
        var n = t == null ? 0 : t.length, i = ee();
        return t = n ? Ye(t, function(l) {
          if (typeof l[1] != "function")
            throw new Rn(c);
          return [i(l[0]), l[1]];
        }) : [], de(function(l) {
          for (var d = -1; ++d < n; ) {
            var h = t[d];
            if ($n(h[0], this, l))
              return $n(h[1], this, l);
          }
        });
      }
      function WS(t) {
        return py(Fn(t, y));
      }
      function md(t) {
        return function() {
          return t;
        };
      }
      function HS(t, n) {
        return t == null || t !== t ? n : t;
      }
      var zS = Dh(), qS = Dh(!0);
      function dn(t) {
        return t;
      }
      function wd(t) {
        return dh(typeof t == "function" ? t : Fn(t, y));
      }
      function GS(t) {
        return ph(Fn(t, y));
      }
      function YS(t, n) {
        return hh(t, Fn(n, y));
      }
      var jS = de(function(t, n) {
        return function(i) {
          return ha(i, t, n);
        };
      }), ZS = de(function(t, n) {
        return function(i) {
          return ha(t, i, n);
        };
      });
      function vd(t, n, i) {
        var l = $t(n), d = Dl(n, l);
        i == null && !(Ke(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Dl(n, $t(n)));
        var h = !(Ke(i) && "chain" in i) || !!i.chain, _ = sr(t);
        return Bn(d, function($) {
          var V = n[$];
          t[$] = V, _ && (t.prototype[$] = function() {
            var D = this.__chain__;
            if (h || D) {
              var O = t(this.__wrapped__), R = O.__actions__ = ln(this.__actions__);
              return R.push({ func: V, args: arguments, thisArg: t }), O.__chain__ = D, O;
            }
            return V.apply(t, Cr([this.value()], arguments));
          });
        }), t;
      }
      function KS() {
        return Et._ === this && (Et._ = b$), this;
      }
      function _d() {
      }
      function JS(t) {
        return t = le(t), de(function(n) {
          return mh(n, t);
        });
      }
      var XS = Zc(Ye), QS = Zc(Op), eE = Zc($c);
      function Mm(t) {
        return nd(t) ? yc(Io(t)) : Ty(t);
      }
      function tE(t) {
        return function(n) {
          return t == null ? r : pi(t, n);
        };
      }
      var nE = Bh(), oE = Bh(!0);
      function gd() {
        return [];
      }
      function $d() {
        return !1;
      }
      function rE() {
        return {};
      }
      function iE() {
        return "";
      }
      function sE() {
        return !0;
      }
      function aE(t, n) {
        if (t = le(t), t < 1 || t > ct)
          return [];
        var i = Ce, l = Rt(t, Ce);
        n = ee(n), t -= Ce;
        for (var d = Vc(l, n); ++i < t; )
          n(i);
        return d;
      }
      function lE(t) {
        return ae(t) ? Ye(t, Io) : Cn(t) ? [t] : ln(Qh(Le(t)));
      }
      function uE(t) {
        var n = ++$$;
        return Le(t) + n;
      }
      var cE = Ul(function(t, n) {
        return t + n;
      }, 0), dE = Kc("ceil"), fE = Ul(function(t, n) {
        return t / n;
      }, 1), pE = Kc("floor");
      function hE(t) {
        return t && t.length ? Nl(t, dn, Dc) : r;
      }
      function mE(t, n) {
        return t && t.length ? Nl(t, ee(n, 2), Dc) : r;
      }
      function wE(t) {
        return Pp(t, dn);
      }
      function vE(t, n) {
        return Pp(t, ee(n, 2));
      }
      function _E(t) {
        return t && t.length ? Nl(t, dn, Pc) : r;
      }
      function gE(t, n) {
        return t && t.length ? Nl(t, ee(n, 2), Pc) : r;
      }
      var $E = Ul(function(t, n) {
        return t * n;
      }, 1), yE = Kc("round"), bE = Ul(function(t, n) {
        return t - n;
      }, 0);
      function CE(t) {
        return t && t.length ? Cc(t, dn) : 0;
      }
      function VE(t, n) {
        return t && t.length ? Cc(t, ee(n, 2)) : 0;
      }
      return p.after = GC, p.ary = cm, p.assign = MV, p.assignIn = Vm, p.assignInWith = eu, p.assignWith = NV, p.at = DV, p.before = dm, p.bind = ld, p.bindAll = FS, p.bindKey = fm, p.castArray = rV, p.chain = am, p.chunk = pb, p.compact = hb, p.concat = mb, p.cond = US, p.conforms = WS, p.constant = md, p.countBy = CC, p.create = OV, p.curry = pm, p.curryRight = hm, p.debounce = mm, p.defaults = BV, p.defaultsDeep = RV, p.defer = YC, p.delay = jC, p.difference = wb, p.differenceBy = vb, p.differenceWith = _b, p.drop = gb, p.dropRight = $b, p.dropRightWhile = yb, p.dropWhile = bb, p.fill = Cb, p.filter = SC, p.flatMap = IC, p.flatMapDeep = AC, p.flatMapDepth = TC, p.flatten = om, p.flattenDeep = Vb, p.flattenDepth = Sb, p.flip = ZC, p.flow = zS, p.flowRight = qS, p.fromPairs = Eb, p.functions = qV, p.functionsIn = GV, p.groupBy = xC, p.initial = Ib, p.intersection = Ab, p.intersectionBy = Tb, p.intersectionWith = xb, p.invert = jV, p.invertBy = ZV, p.invokeMap = MC, p.iteratee = wd, p.keyBy = NC, p.keys = $t, p.keysIn = cn, p.map = jl, p.mapKeys = JV, p.mapValues = XV, p.matches = GS, p.matchesProperty = YS, p.memoize = Kl, p.merge = QV, p.mergeWith = Sm, p.method = jS, p.methodOf = ZS, p.mixin = vd, p.negate = Jl, p.nthArg = JS, p.omit = eS, p.omitBy = tS, p.once = KC, p.orderBy = DC, p.over = XS, p.overArgs = JC, p.overEvery = QS, p.overSome = eE, p.partial = ud, p.partialRight = wm, p.partition = OC, p.pick = nS, p.pickBy = Em, p.property = Mm, p.propertyOf = tE, p.pull = Db, p.pullAll = im, p.pullAllBy = Ob, p.pullAllWith = Bb, p.pullAt = Rb, p.range = nE, p.rangeRight = oE, p.rearg = XC, p.reject = PC, p.remove = Pb, p.rest = QC, p.reverse = sd, p.sampleSize = UC, p.set = rS, p.setWith = iS, p.shuffle = WC, p.slice = Fb, p.sortBy = qC, p.sortedUniq = Yb, p.sortedUniqBy = jb, p.split = IS, p.spread = eV, p.tail = Zb, p.take = Kb, p.takeRight = Jb, p.takeRightWhile = Xb, p.takeWhile = Qb, p.tap = hC, p.throttle = tV, p.thru = Yl, p.toArray = ym, p.toPairs = km, p.toPairsIn = Im, p.toPath = lE, p.toPlainObject = Cm, p.transform = sS, p.unary = nV, p.union = eC, p.unionBy = tC, p.unionWith = nC, p.uniq = oC, p.uniqBy = rC, p.uniqWith = iC, p.unset = aS, p.unzip = ad, p.unzipWith = sm, p.update = lS, p.updateWith = uS, p.values = us, p.valuesIn = cS, p.without = sC, p.words = xm, p.wrap = oV, p.xor = aC, p.xorBy = lC, p.xorWith = uC, p.zip = cC, p.zipObject = dC, p.zipObjectDeep = fC, p.zipWith = pC, p.entries = km, p.entriesIn = Im, p.extend = Vm, p.extendWith = eu, vd(p, p), p.add = cE, p.attempt = Lm, p.camelCase = hS, p.capitalize = Am, p.ceil = dE, p.clamp = dS, p.clone = iV, p.cloneDeep = aV, p.cloneDeepWith = lV, p.cloneWith = sV, p.conformsTo = uV, p.deburr = Tm, p.defaultTo = HS, p.divide = fE, p.endsWith = mS, p.eq = so, p.escape = wS, p.escapeRegExp = vS, p.every = VC, p.find = EC, p.findIndex = tm, p.findKey = PV, p.findLast = kC, p.findLastIndex = nm, p.findLastKey = FV, p.floor = pE, p.forEach = lm, p.forEachRight = um, p.forIn = UV, p.forInRight = WV, p.forOwn = HV, p.forOwnRight = zV, p.get = fd, p.gt = cV, p.gte = dV, p.has = YV, p.hasIn = pd, p.head = rm, p.identity = dn, p.includes = LC, p.indexOf = kb, p.inRange = fS, p.invoke = KV, p.isArguments = wi, p.isArray = ae, p.isArrayBuffer = fV, p.isArrayLike = un, p.isArrayLikeObject = it, p.isBoolean = pV, p.isBuffer = Tr, p.isDate = hV, p.isElement = mV, p.isEmpty = wV, p.isEqual = vV, p.isEqualWith = _V, p.isError = cd, p.isFinite = gV, p.isFunction = sr, p.isInteger = vm, p.isLength = Xl, p.isMap = _m, p.isMatch = $V, p.isMatchWith = yV, p.isNaN = bV, p.isNative = CV, p.isNil = SV, p.isNull = VV, p.isNumber = gm, p.isObject = Ke, p.isObjectLike = et, p.isPlainObject = $a, p.isRegExp = dd, p.isSafeInteger = EV, p.isSet = $m, p.isString = Ql, p.isSymbol = Cn, p.isTypedArray = ls, p.isUndefined = kV, p.isWeakMap = IV, p.isWeakSet = AV, p.join = Lb, p.kebabCase = _S, p.last = Wn, p.lastIndexOf = Mb, p.lowerCase = gS, p.lowerFirst = $S, p.lt = TV, p.lte = xV, p.max = hE, p.maxBy = mE, p.mean = wE, p.meanBy = vE, p.min = _E, p.minBy = gE, p.stubArray = gd, p.stubFalse = $d, p.stubObject = rE, p.stubString = iE, p.stubTrue = sE, p.multiply = $E, p.nth = Nb, p.noConflict = KS, p.noop = _d, p.now = Zl, p.pad = yS, p.padEnd = bS, p.padStart = CS, p.parseInt = VS, p.random = pS, p.reduce = BC, p.reduceRight = RC, p.repeat = SS, p.replace = ES, p.result = oS, p.round = yE, p.runInContext = C, p.sample = FC, p.size = HC, p.snakeCase = kS, p.some = zC, p.sortedIndex = Ub, p.sortedIndexBy = Wb, p.sortedIndexOf = Hb, p.sortedLastIndex = zb, p.sortedLastIndexBy = qb, p.sortedLastIndexOf = Gb, p.startCase = AS, p.startsWith = TS, p.subtract = bE, p.sum = CE, p.sumBy = VE, p.template = xS, p.times = aE, p.toFinite = ar, p.toInteger = le, p.toLength = bm, p.toLower = LS, p.toNumber = Hn, p.toSafeInteger = LV, p.toString = Le, p.toUpper = MS, p.trim = NS, p.trimEnd = DS, p.trimStart = OS, p.truncate = BS, p.unescape = RS, p.uniqueId = uE, p.upperCase = PS, p.upperFirst = hd, p.each = lm, p.eachRight = um, p.first = rm, vd(p, function() {
        var t = {};
        return Eo(p, function(n, i) {
          De.call(p.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), p.VERSION = s, Bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        p[t].placeholder = p;
      }), Bn(["drop", "take"], function(t, n) {
        we.prototype[t] = function(i) {
          i = i === r ? 1 : ht(le(i), 0);
          var l = this.__filtered__ && !n ? new we(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Rt(i, l.__takeCount__) : l.__views__.push({
            size: Rt(i, Ce),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, we.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Bn(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ge || i == Ze;
        we.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: ee(d, 3),
            type: i
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), Bn(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        we.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Bn(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        we.prototype[t] = function() {
          return this.__filtered__ ? new we(this) : this[i](1);
        };
      }), we.prototype.compact = function() {
        return this.filter(dn);
      }, we.prototype.find = function(t) {
        return this.filter(t).head();
      }, we.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, we.prototype.invokeMap = de(function(t, n) {
        return typeof t == "function" ? new we(this) : this.map(function(i) {
          return ha(i, t, n);
        });
      }), we.prototype.reject = function(t) {
        return this.filter(Jl(ee(t)));
      }, we.prototype.slice = function(t, n) {
        t = le(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new we(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = le(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, we.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, we.prototype.toArray = function() {
        return this.take(Ce);
      }, Eo(we.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = p[l ? "take" + (n == "last" ? "Right" : "") : n], h = l || /^find/.test(n);
        !d || (p.prototype[n] = function() {
          var _ = this.__wrapped__, $ = l ? [1] : arguments, V = _ instanceof we, D = $[0], O = V || ae(_), R = function(fe) {
            var ge = d.apply(p, Cr([fe], $));
            return l && G ? ge[0] : ge;
          };
          O && i && typeof D == "function" && D.length != 1 && (V = O = !1);
          var G = this.__chain__, J = !!this.__actions__.length, ne = h && !G, ue = V && !J;
          if (!h && O) {
            _ = ue ? _ : new we(this);
            var oe = t.apply(_, $);
            return oe.__actions__.push({ func: Yl, args: [R], thisArg: r }), new Pn(oe, G);
          }
          return ne && ue ? t.apply(this, $) : (oe = this.thru(R), ne ? l ? oe.value()[0] : oe.value() : oe);
        });
      }), Bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = gl[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        p.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var h = this.value();
            return n.apply(ae(h) ? h : [], d);
          }
          return this[i](function(_) {
            return n.apply(ae(_) ? _ : [], d);
          });
        };
      }), Eo(we.prototype, function(t, n) {
        var i = p[n];
        if (i) {
          var l = i.name + "";
          De.call(os, l) || (os[l] = []), os[l].push({ name: n, func: i });
        }
      }), os[Fl(r, E).name] = [{
        name: "wrapper",
        func: r
      }], we.prototype.clone = R$, we.prototype.reverse = P$, we.prototype.value = F$, p.prototype.at = mC, p.prototype.chain = wC, p.prototype.commit = vC, p.prototype.next = _C, p.prototype.plant = $C, p.prototype.reverse = yC, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = bC, p.prototype.first = p.prototype.head, aa && (p.prototype[aa] = gC), p;
    }, es = v$();
    li ? ((li.exports = es)._ = es, wc._ = es) : Et._ = es;
  }).call(ya);
})(Be, Be.exports);
const Nk = "/alarms?_s=", Ju = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Dk = async (e, o) => {
  try {
    return (await bt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ju
    )).status === 204;
  } catch {
    return !1;
  }
}, xg = async (e, o) => {
  try {
    return (await bt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ju
    )).status === 204;
  } catch {
    return !1;
  }
}, Ok = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await mr.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Ju
    )).status == 204;
  } catch {
    return !1;
  }
}, Bk = async () => {
  try {
    const e = `${Nk}isSituation==true&limit=0`, o = await mr(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Rk = async (e) => {
  try {
    const o = e.join(",id=="), r = await mr(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Lg = async (e) => {
  try {
    const o = await mr(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, Pk = async (e) => {
  try {
    const o = await mr(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, Fk = async () => {
  try {
    const e = await mr("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Be.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Uk = async (e, o, r) => {
  try {
    return (await mr.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ju
    )).status == 204;
  } catch {
    return !1;
  }
}, Wk = async (e, o) => {
  try {
    return (await mr.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, Hk = async () => {
  try {
    const e = await mr.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Xu = "/alec", Mg = "/alec/engine/configuration", Ng = "/alec/llm/configuration", zk = "/alec/llm/validate", Dg = "/alec/llm/suggestions", qk = "/alec/llm/usage", Gk = "/alec/llm/budget", Og = "/alec/situation", Yk = async () => {
  try {
    const e = await bt.get(`${Mg}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, jk = async (e) => {
  try {
    return (await bt.post(Mg, e)).status === 200;
  } catch {
    return !1;
  }
}, Zk = async () => {
  try {
    const e = await bt.get(Ng);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Kk = async (e) => {
  try {
    const o = await bt.post(Ng, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Jk = async (e) => {
  try {
    const o = await bt.post(zk, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, Bg = async (e) => {
  try {
    const o = await bt.get(`${Dg}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, Xk = async (e) => {
  try {
    const o = await bt.post(
      `${Dg}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Qk = async (e = 30) => {
  try {
    const o = await bt.get(`${qk}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, eI = async () => {
  try {
    const e = await bt.get(Gk);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, Rg = async (e, o) => {
  try {
    const r = await bt.post(`${Xu}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == Lt.REJECTED.toLowerCase() && r.status === 200 && await xg(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, rw = async (e, o) => {
  try {
    return (await bt.delete(`${Xu}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Pg = async (e, o) => {
  try {
    return (await bt.put(`${Xu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, tI = async (e) => {
  try {
    return (await bt.post(Og, e)).status === 200;
  } catch {
    return !1;
  }
}, nI = async () => {
  try {
    return (await bt.post(`${Og}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, oI = async () => {
  try {
    return (await bt.post(`${Xu}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, rI = window.Pinia.defineStore, iI = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Gr = rI("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null,
    llmBudget: null
  }),
  actions: {
    async getUserRole() {
      const e = await Mk();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await Yk();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...iI,
        ...r,
        distanceMeasureName: o ? Lt.HELLINGER_OPTION : Lt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await jk(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await Zk();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const o = await Kk(e);
      return o ? (this.llmConfig = o, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const o = await Qk(e);
      return o && (this.llmUsage = o), o;
    },
    async getLLMBudget() {
      const e = await eI();
      return e && (this.llmBudget = e), e;
    }
  }
}), sI = window.Vue.defineComponent, iw = window.Vue.unref, aI = window.Vue.createElementVNode, lI = window.Vue.toDisplayString, uI = window.Vue.createTextVNode, sw = window.Vue.openBlock, aw = window.Vue.createElementBlock, cI = window.Vue.createCommentVNode, dI = window.Vue.resolveComponent, fI = window.Vue.createVNode, pI = window.Vue.pushScopeId, hI = window.Vue.popScopeId, mI = (e) => (pI("data-v-ecf6f9f2"), e = e(), hI(), e), wI = { class: "main" }, vI = {
  key: 0,
  class: "llm-budget-banner",
  "data-test": "llm-budget-banner",
  role: "alert"
}, _I = /* @__PURE__ */ mI(() => /* @__PURE__ */ aI("strong", null, "LLM requests paused.", -1)), gI = window.Vue.onMounted, $I = window.Vue.onUnmounted, lw = window.Vue.computed, yI = /* @__PURE__ */ sI({
  __name: "MainContainer",
  setup(e) {
    const o = Gr(), r = 5 * 60 * 1e3;
    let s;
    const a = lw(() => {
      var c;
      return ((c = o.llmBudget) == null ? void 0 : c.blocked) === !0;
    }), u = lw(() => {
      var c;
      return ((c = o.llmBudget) == null ? void 0 : c.reason) || "";
    });
    return gI(() => {
      o.getLLMBudget(), s = setInterval(() => o.getLLMBudget(), r);
    }), $I(() => {
      s && clearInterval(s);
    }), (c, f) => {
      const m = dI("router-view");
      return sw(), aw("div", wI, [
        iw(a) ? (sw(), aw("div", vI, [
          _I,
          uI(" " + lI(iw(u)) + " Raise the limit on the LLM Setup tab of the ALEC configuration to resume. ", 1)
        ])) : cI("", !0),
        fI(m)
      ]);
    };
  }
});
const Se = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, bI = /* @__PURE__ */ Se(yI, [["__scopeId", "data-v-ecf6f9f2"]]), CI = window.Vue.defineComponent, VI = window.Vue.openBlock, SI = window.Vue.createBlock, EI = /* @__PURE__ */ CI({
  __name: "App",
  setup(e) {
    return (o, r) => (VI(), SI(bI));
  }
});
const kI = window.Pinia.defineStore, wo = kI("situationsStore", {
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
      const e = await Fk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Bk();
      if (e) {
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = Be.exports.groupBy(o, "status"), a = [
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
        const s = await Lg(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await Rk(a);
          s.status = (r = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, s.alarms = Be.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (s) => {
          const a = await Pk(s);
          a && (r[s] = Be.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await Hk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), II = window.Vue.openBlock, AI = window.Vue.createElementBlock, TI = window.Vue.createElementVNode;
var xI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const LI = {}, MI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NI = /* @__PURE__ */ TI("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), DI = [
  NI
];
function OI(e, o) {
  return II(), AI("svg", MI, DI);
}
var Us = /* @__PURE__ */ xI(LI, [["render", OI]]);
var BI = Object.defineProperty, uw = Object.getOwnPropertySymbols, RI = Object.prototype.hasOwnProperty, PI = Object.prototype.propertyIsEnumerable, cw = (e, o, r) => o in e ? BI(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, dw = (e, o) => {
  for (var r in o || (o = {}))
    RI.call(o, r) && cw(e, r, o[r]);
  if (uw)
    for (var r of uw(o))
      PI.call(o, r) && cw(e, r, o[r]);
  return e;
};
const FI = window.Vue.defineComponent, UI = window.Vue.toRaw, Od = window.Vue.h;
var WI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const HI = {
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
}, zI = FI({
  props: HI,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = UI(this.icon);
    return this.$slots.default ? Od("span", { class: "feather-icon-container" }, [
      Od(this.$slots.default()[0], dw({
        class: o
      }, r))
    ]) : Od(s, dw({
      class: o
    }, r));
  }
});
var X = /* @__PURE__ */ WI(zI, [["__scopeId", "data-v-52cbf270"]]);
const qI = window.Vue.openBlock, GI = window.Vue.createElementBlock, YI = window.Vue.createElementVNode;
var jI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZI = {}, KI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JI = /* @__PURE__ */ YI("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), XI = [
  JI
];
function QI(e, o) {
  return qI(), GI("svg", KI, XI);
}
var Fg = /* @__PURE__ */ jI(ZI, [["render", QI]]);
function Oo(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function We(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function wt(e) {
  We(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function eA(e, o) {
  We(2, arguments);
  var r = wt(e), s = Oo(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function tA(e, o) {
  We(2, arguments);
  var r = wt(e).getTime(), s = Oo(o);
  return new Date(r + s);
}
var nA = {};
function zs() {
  return nA;
}
function fw(e, o) {
  var r, s, a, u, c, f, m, v;
  We(1, arguments);
  var g = zs(), y = Oo((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = wt(e), B = b.getDay(), N = (B < y ? 7 : 0) + B - y;
  return b.setDate(b.getDate() - N), b.setHours(0, 0, 0, 0), b;
}
function Df(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function pw(e) {
  We(1, arguments);
  var o = wt(e);
  return o.setHours(0, 0, 0, 0), o;
}
function oA(e, o) {
  We(2, arguments);
  var r = wt(e), s = wt(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Ug(e, o) {
  We(2, arguments);
  var r = pw(e), s = pw(o);
  return r.getTime() === s.getTime();
}
function rA(e) {
  return We(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function iA(e) {
  if (We(1, arguments), !rA(e) && typeof e != "number")
    return !1;
  var o = wt(e);
  return !isNaN(Number(o));
}
function sA(e, o) {
  We(2, arguments);
  var r = Oo(o);
  return tA(e, -r);
}
var aA = 864e5;
function lA(e) {
  We(1, arguments);
  var o = wt(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / aA) + 1;
}
function Du(e) {
  We(1, arguments);
  var o = 1, r = wt(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Wg(e) {
  We(1, arguments);
  var o = wt(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Du(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Du(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function uA(e) {
  We(1, arguments);
  var o = Wg(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Du(r);
  return s;
}
var cA = 6048e5;
function dA(e) {
  We(1, arguments);
  var o = wt(e), r = Du(o).getTime() - uA(o).getTime();
  return Math.round(r / cA) + 1;
}
function Ou(e, o) {
  var r, s, a, u, c, f, m, v;
  We(1, arguments);
  var g = zs(), y = Oo((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = wt(e), B = b.getUTCDay(), N = (B < y ? 7 : 0) + B - y;
  return b.setUTCDate(b.getUTCDate() - N), b.setUTCHours(0, 0, 0, 0), b;
}
function Hg(e, o) {
  var r, s, a, u, c, f, m, v;
  We(1, arguments);
  var g = wt(e), y = g.getUTCFullYear(), b = zs(), B = Oo((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = b.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var N = new Date(0);
  N.setUTCFullYear(y + 1, 0, B), N.setUTCHours(0, 0, 0, 0);
  var F = Ou(N, o), M = new Date(0);
  M.setUTCFullYear(y, 0, B), M.setUTCHours(0, 0, 0, 0);
  var E = Ou(M, o);
  return g.getTime() >= F.getTime() ? y + 1 : g.getTime() >= E.getTime() ? y : y - 1;
}
function fA(e, o) {
  var r, s, a, u, c, f, m, v;
  We(1, arguments);
  var g = zs(), y = Oo((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = Hg(e, o), B = new Date(0);
  B.setUTCFullYear(b, 0, y), B.setUTCHours(0, 0, 0, 0);
  var N = Ou(B, o);
  return N;
}
var pA = 6048e5;
function hA(e, o) {
  We(1, arguments);
  var r = wt(e), s = Ou(r, o).getTime() - fA(r, o).getTime();
  return Math.round(s / pA) + 1;
}
function Oe(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var mA = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), s = r > 0 ? r : 1 - r;
    return Oe(o === "yy" ? s % 100 : s, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : Oe(r + 1, 2);
  },
  d: function(e, o) {
    return Oe(e.getUTCDate(), o.length);
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
    return Oe(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return Oe(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return Oe(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return Oe(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, r - 3));
    return Oe(a, o.length);
  }
};
const xr = mA;
var fs = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wA = {
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
    return xr.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = Hg(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return Oe(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : Oe(u, o.length);
  },
  R: function(e, o) {
    var r = Wg(e);
    return Oe(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return Oe(r, o.length);
  },
  Q: function(e, o, r) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(s);
      case "QQ":
        return Oe(s, 2);
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
        return Oe(s, 2);
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
        return xr.M(e, o);
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
        return Oe(s + 1, 2);
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
    var a = hA(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, o.length);
  },
  I: function(e, o, r) {
    var s = dA(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : Oe(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : xr.d(e, o);
  },
  D: function(e, o, r) {
    var s = lA(e);
    return o === "Do" ? r.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : Oe(s, o.length);
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
        return Oe(u, 2);
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
        return Oe(u, o.length);
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
        return Oe(a, o.length);
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
    switch (s === 12 ? a = fs.noon : s === 0 ? a = fs.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = fs.evening : s >= 12 ? a = fs.afternoon : s >= 4 ? a = fs.morning : a = fs.night, o) {
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
    return xr.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : xr.H(e, o);
  },
  K: function(e, o, r) {
    var s = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : Oe(s, o.length);
  },
  k: function(e, o, r) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), o === "ko" ? r.ordinalNumber(s, {
      unit: "hour"
    }) : Oe(s, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : xr.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : xr.s(e, o);
  },
  S: function(e, o) {
    return xr.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return mw(u);
      case "XXXX":
      case "XX":
        return xi(u);
      case "XXXXX":
      case "XXX":
      default:
        return xi(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return mw(u);
      case "xxxx":
      case "xx":
        return xi(u);
      case "xxxxx":
      case "xxx":
      default:
        return xi(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + hw(u, ":");
      case "OOOO":
      default:
        return "GMT" + xi(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + hw(u, ":");
      case "zzzz":
      default:
        return "GMT" + xi(u, ":");
    }
  },
  t: function(e, o, r, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return Oe(u, o.length);
  },
  T: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTime();
    return Oe(u, o.length);
  }
};
function hw(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + Oe(u, 2);
}
function mw(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + Oe(Math.abs(e) / 60, 2);
  }
  return xi(e, o);
}
function xi(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = Oe(Math.floor(a / 60), 2), c = Oe(a % 60, 2);
  return s + u + r + c;
}
const vA = wA;
var ww = function(e, o) {
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
}, zg = function(e, o) {
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
}, _A = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return ww(e, o);
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
  return u.replace("{{date}}", ww(s, o)).replace("{{time}}", zg(a, o));
}, gA = {
  p: zg,
  P: _A
};
const $A = gA;
var yA = ["D", "DD"], bA = ["YY", "YYYY"];
function CA(e) {
  return yA.indexOf(e) !== -1;
}
function VA(e) {
  return bA.indexOf(e) !== -1;
}
function vw(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var SA = {
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
}, EA = function(e, o, r) {
  var s, a = SA[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const kA = EA;
function Bd(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var IA = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, AA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, TA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, xA = {
  date: Bd({
    formats: IA,
    defaultWidth: "full"
  }),
  time: Bd({
    formats: AA,
    defaultWidth: "full"
  }),
  dateTime: Bd({
    formats: TA,
    defaultWidth: "full"
  })
};
const LA = xA;
var MA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, NA = function(e, o, r, s) {
  return MA[e];
};
const DA = NA;
function ba(e) {
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
var OA = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, BA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, RA = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, PA = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, FA = {
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
}, UA = {
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
}, WA = function(e, o) {
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
}, HA = {
  ordinalNumber: WA,
  era: ba({
    values: OA,
    defaultWidth: "wide"
  }),
  quarter: ba({
    values: BA,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ba({
    values: RA,
    defaultWidth: "wide"
  }),
  day: ba({
    values: PA,
    defaultWidth: "wide"
  }),
  dayPeriod: ba({
    values: FA,
    defaultWidth: "wide",
    formattingValues: UA,
    defaultFormattingWidth: "wide"
  })
};
const zA = HA;
function Ca(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? GA(f, function(y) {
      return y.test(c);
    }) : qA(f, function(y) {
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
function qA(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function GA(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function YA(e) {
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
var jA = /^(\d+)(th|st|nd|rd)?/i, ZA = /\d+/i, KA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, JA = {
  any: [/^b/i, /^(a|c)/i]
}, XA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, QA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, eT = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, tT = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, nT = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, oT = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, rT = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, iT = {
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
}, sT = {
  ordinalNumber: YA({
    matchPattern: jA,
    parsePattern: ZA,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Ca({
    matchPatterns: KA,
    defaultMatchWidth: "wide",
    parsePatterns: JA,
    defaultParseWidth: "any"
  }),
  quarter: Ca({
    matchPatterns: XA,
    defaultMatchWidth: "wide",
    parsePatterns: QA,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ca({
    matchPatterns: eT,
    defaultMatchWidth: "wide",
    parsePatterns: tT,
    defaultParseWidth: "any"
  }),
  day: Ca({
    matchPatterns: nT,
    defaultMatchWidth: "wide",
    parsePatterns: oT,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ca({
    matchPatterns: rT,
    defaultMatchWidth: "any",
    parsePatterns: iT,
    defaultParseWidth: "any"
  })
};
const aT = sT;
var lT = {
  code: "en-US",
  formatDistance: kA,
  formatLong: LA,
  formatRelative: DA,
  localize: zA,
  match: aT,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const qg = lT;
var uT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, cT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, dT = /^'([^]*?)'?$/, fT = /''/g, pT = /[a-zA-Z]/;
function hT(e, o, r) {
  var s, a, u, c, f, m, v, g, y, b, B, N, F, M, E, T, x, U;
  We(2, arguments);
  var A = String(o), P = zs(), H = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : P.locale) !== null && s !== void 0 ? s : qg, K = Oo((u = (c = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (v = r.locale) === null || v === void 0 || (g = v.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : P.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = P.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(K >= 1 && K <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Me = Oo((B = (N = (F = (M = r == null ? void 0 : r.weekStartsOn) !== null && M !== void 0 ? M : r == null || (E = r.locale) === null || E === void 0 || (T = E.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && F !== void 0 ? F : P.weekStartsOn) !== null && N !== void 0 ? N : (x = P.locale) === null || x === void 0 || (U = x.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(Me >= 0 && Me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!H.localize)
    throw new RangeError("locale must contain localize property");
  if (!H.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var pe = wt(e);
  if (!iA(pe))
    throw new RangeError("Invalid time value");
  var Ae = Df(pe), Ee = sA(pe, Ae), He = {
    firstWeekContainsDate: K,
    weekStartsOn: Me,
    locale: H,
    _originalDate: pe
  }, Ge = A.match(cT).map(function($e) {
    var Ze = $e[0];
    if (Ze === "p" || Ze === "P") {
      var Xe = $A[Ze];
      return Xe($e, H.formatLong);
    }
    return $e;
  }).join("").match(uT).map(function($e) {
    if ($e === "''")
      return "'";
    var Ze = $e[0];
    if (Ze === "'")
      return mT($e);
    var Xe = vA[Ze];
    if (Xe)
      return !(r != null && r.useAdditionalWeekYearTokens) && VA($e) && vw($e, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && CA($e) && vw($e, o, String(e)), Xe(Ee, $e, H.localize, He);
    if (Ze.match(pT))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ze + "`");
    return $e;
  }).join("");
  return Ge;
}
function mT(e) {
  var o = e.match(dT);
  return o ? o[1].replace(fT, "'") : e;
}
function Gg(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function wT(e) {
  return Gg({}, e);
}
var _w = 1e3 * 60, Bu = 60 * 24, gw = Bu * 30, $w = Bu * 365;
function Qu(e, o, r) {
  var s, a, u;
  We(2, arguments);
  var c = zs(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : qg;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = oA(e, o);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var v = Gg(wT(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: m
  }), g, y;
  m > 0 ? (g = wt(o), y = wt(e)) : (g = wt(e), y = wt(o));
  var b = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), B;
  if (b === "floor")
    B = Math.floor;
  else if (b === "ceil")
    B = Math.ceil;
  else if (b === "round")
    B = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var N = y.getTime() - g.getTime(), F = N / _w, M = Df(y) - Df(g), E = (N - M) / _w, T = r == null ? void 0 : r.unit, x;
  if (T ? x = String(T) : F < 1 ? x = "second" : F < 60 ? x = "minute" : F < Bu ? x = "hour" : E < gw ? x = "day" : E < $w ? x = "month" : x = "year", x === "second") {
    var U = B(N / 1e3);
    return f.formatDistance("xSeconds", U, v);
  } else if (x === "minute") {
    var A = B(F);
    return f.formatDistance("xMinutes", A, v);
  } else if (x === "hour") {
    var P = B(F / 60);
    return f.formatDistance("xHours", P, v);
  } else if (x === "day") {
    var H = B(E / Bu);
    return f.formatDistance("xDays", H, v);
  } else if (x === "month") {
    var K = B(E / gw);
    return K === 12 && T !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", K, v);
  } else if (x === "year") {
    var Me = B(E / $w);
    return f.formatDistance("xYears", Me, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function vT(e, o, r) {
  We(2, arguments);
  var s = fw(e, r), a = fw(o, r);
  return s.getTime() === a.getTime();
}
function _T(e, o) {
  return We(1, arguments), vT(e, Date.now(), o);
}
function gT(e) {
  return We(1, arguments), Ug(e, Date.now());
}
function $T(e, o) {
  We(2, arguments);
  var r = Oo(o);
  return eA(e, -r);
}
function yT(e) {
  return We(1, arguments), Ug(e, $T(Date.now(), 1));
}
/*! @license DOMPurify 3.4.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.10/LICENSE */
function yw(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, s = Array(o); r < o; r++)
    s[r] = e[r];
  return s;
}
function bT(e) {
  if (Array.isArray(e))
    return e;
}
function CT(e, o) {
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
function VT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ST(e, o) {
  return bT(e) || CT(e, o) || ET(e, o) || VT();
}
function ET(e, o) {
  if (e) {
    if (typeof e == "string")
      return yw(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? yw(e, o) : void 0;
  }
}
const Yg = Object.entries, bw = Object.setPrototypeOf, kT = Object.isFrozen, IT = Object.getPrototypeOf, AT = Object.getOwnPropertyDescriptor;
let Mt = Object.freeze, Nt = Object.seal, ks = Object.create, jg = typeof Reflect < "u" && Reflect, Of = jg.apply, Bf = jg.construct;
Mt || (Mt = function(o) {
  return o;
});
Nt || (Nt = function(o) {
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
const Va = ut(Array.prototype.forEach), TT = ut(Array.prototype.lastIndexOf), Cw = ut(Array.prototype.pop), ps = ut(Array.prototype.push), xT = ut(Array.prototype.splice), Wr = Array.isArray, Za = ut(String.prototype.toLowerCase), Rd = ut(String.prototype.toString), Vw = ut(String.prototype.match), Sa = ut(String.prototype.replace), Sw = ut(String.prototype.indexOf), LT = ut(String.prototype.trim), MT = ut(Number.prototype.toString), NT = ut(Boolean.prototype.toString), Ew = typeof BigInt > "u" ? null : ut(BigInt.prototype.toString), kw = typeof Symbol > "u" ? null : ut(Symbol.prototype.toString), tn = ut(Object.prototype.hasOwnProperty), Ea = ut(Object.prototype.toString), Tt = ut(RegExp.prototype.test), vi = DT(TypeError);
function ut(e) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return Of(e, o, s);
  };
}
function DT(e) {
  return function() {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    return Bf(e, r);
  };
}
function ye(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Za;
  if (bw && bw(e, null), !Wr(o))
    return e;
  let s = o.length;
  for (; s--; ) {
    let a = o[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (kT(o) || (o[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function OT(e) {
  for (let o = 0; o < e.length; o++)
    tn(e, o) || (e[o] = null);
  return e;
}
function en(e) {
  const o = ks(null);
  for (const s of Yg(e)) {
    var r = ST(s, 2);
    const a = r[0], u = r[1];
    tn(e, a) && (Wr(u) ? o[a] = OT(u) : u && typeof u == "object" && u.constructor === Object ? o[a] = en(u) : o[a] = u);
  }
  return o;
}
function BT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return MT(e);
    case "boolean":
      return NT(e);
    case "bigint":
      return Ew ? Ew(e) : "0";
    case "symbol":
      return kw ? kw(e) : "Symbol()";
    case "undefined":
      return Ea(e);
    case "function":
    case "object": {
      if (e === null)
        return Ea(e);
      const o = e, r = Lo(o, "toString");
      if (typeof r == "function") {
        const s = r(o);
        return typeof s == "string" ? s : Ea(s);
      }
      return Ea(e);
    }
    default:
      return Ea(e);
  }
}
function Lo(e, o) {
  for (; e !== null; ) {
    const s = AT(e, o);
    if (s) {
      if (s.get)
        return ut(s.get);
      if (typeof s.value == "function")
        return ut(s.value);
    }
    e = IT(e);
  }
  function r() {
    return null;
  }
  return r;
}
function RT(e) {
  try {
    return Tt(e, ""), !0;
  } catch {
    return !1;
  }
}
const Iw = Mt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pd = Mt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fd = Mt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), PT = Mt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ud = Mt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), FT = Mt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Aw = Mt(["#text"]), Tw = Mt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Wd = Mt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), xw = Mt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), tu = Mt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), UT = Nt(/{{[\w\W]*|^[\w\W]*}}/g), WT = Nt(/<%[\w\W]*|^[\w\W]*%>/g), HT = Nt(/\${[\w\W]*/g), zT = Nt(/^data-[\-\w.\u00B7-\uFFFF]+$/), qT = Nt(/^aria-[\-\w]+$/), Lw = Nt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), GT = Nt(/^(?:\w+script|data):/i), YT = Nt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), jT = Nt(/^html$/i), ZT = Nt(/^[a-z][.\w]*(-[.\w]+)+$/i), Mw = Nt(/<[/\w!]/g), KT = Nt(/<[/\w]/g), JT = Nt(/<\/no(script|embed|frames)/i), XT = Nt(/\/>/i), Ao = {
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
}, QT = function() {
  return typeof window > "u" ? null : window;
}, e2 = function(o, r) {
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
}, Nw = function() {
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
}, Lr = function(o, r, s, a) {
  return tn(o, r) && Wr(o[r]) ? ye(a.base ? en(a.base) : {}, o[r], a.transform) : s;
};
function Zg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : QT();
  const o = (q) => Zg(q);
  if (o.version = "3.4.10", o.removed = [], !e || !e.document || e.document.nodeType !== Ao.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, m = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, y = e.trustedTypes, b = f.prototype, B = Lo(b, "cloneNode"), N = Lo(b, "remove"), F = Lo(b, "nextSibling"), M = Lo(b, "childNodes"), E = Lo(b, "parentNode"), T = Lo(b, "shadowRoot"), x = Lo(b, "attributes"), U = c && c.prototype ? Lo(c.prototype, "nodeType") : null, A = c && c.prototype ? Lo(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let P, H = "", K, Me = !1, pe = 0;
  const Ae = function() {
    if (pe > 0)
      throw vi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ee = function(w) {
    Ae(), pe++;
    try {
      return P.createHTML(w);
    } finally {
      pe--;
    }
  }, He = function(w) {
    Ae(), pe++;
    try {
      return P.createScriptURL(w);
    } finally {
      pe--;
    }
  }, Ge = function() {
    return Me || (K = e2(y, a), Me = !0), K;
  }, $e = r, Ze = $e.implementation, Xe = $e.createNodeIterator, ct = $e.createDocumentFragment, on = $e.getElementsByTagName, _n = s.importNode;
  let Ce = Nw();
  o.isSupported = typeof Yg == "function" && typeof E == "function" && Ze && Ze.createHTMLDocument !== void 0;
  const oa = UT, ra = WT, ia = HT, Kn = zT, zt = qT, Mn = GT, dt = YT, Nn = ZT;
  let Jn = Lw, Ne = null;
  const vo = ye({}, [...Iw, ...Pd, ...Fd, ...Ud, ...Aw]);
  let Fe = null;
  const vt = ye({}, [...Tw, ...Wd, ...xw, ...tu]);
  let Te = Object.seal(ks(null, {
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
  })), Dn = null, Ct = null;
  const Ot = Object.seal(ks(null, {
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
  let Po = !0, rn = !0, Vt = !1, Xn = !0, _t = !1, Fo = !0, ft = !1, Jr = !1, Qn = !1, qt = !1, _o = !1, eo = !1, Uo = !0, Wo = !1;
  const Ho = "user-content-";
  let go = !0, $o = !1, gn = {}, St = null;
  const wr = ye({}, [
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
  let Xr = null;
  const Qr = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let zo = null;
  const vr = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qo = "http://www.w3.org/1998/Math/MathML", Go = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml";
  let to = Gt, Yo = !1, _r = null;
  const Fi = ye({}, [qo, Go, Gt], Rd), ei = Mt(["mi", "mo", "mn", "ms", "mtext"]);
  let yo = ye({}, ei);
  const ti = Mt(["annotation-xml"]);
  let bo = ye({}, ti);
  const Ui = ye({}, ["title", "style", "font", "a", "script"]);
  let Co = null;
  const Wi = ["application/xhtml+xml", "text/html"], Hi = "text/html";
  let Re = null, no = null;
  const zi = r.createElement("form"), ni = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, jo = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (no && no === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = en(w), Co = Wi.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? Hi : w.PARSER_MEDIA_TYPE, Re = Co === "application/xhtml+xml" ? Rd : Za, Ne = Lr(w, "ALLOWED_TAGS", vo, {
      transform: Re
    }), Fe = Lr(w, "ALLOWED_ATTR", vt, {
      transform: Re
    }), _r = Lr(w, "ALLOWED_NAMESPACES", Fi, {
      transform: Rd
    }), zo = Lr(w, "ADD_URI_SAFE_ATTR", vr, {
      transform: Re,
      base: vr
    }), Xr = Lr(w, "ADD_DATA_URI_TAGS", Qr, {
      transform: Re,
      base: Qr
    }), St = Lr(w, "FORBID_CONTENTS", wr, {
      transform: Re
    }), Dn = Lr(w, "FORBID_TAGS", en({}), {
      transform: Re
    }), Ct = Lr(w, "FORBID_ATTR", en({}), {
      transform: Re
    }), gn = tn(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? en(w.USE_PROFILES) : w.USE_PROFILES : !1, Po = w.ALLOW_ARIA_ATTR !== !1, rn = w.ALLOW_DATA_ATTR !== !1, Vt = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Xn = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _t = w.SAFE_FOR_TEMPLATES || !1, Fo = w.SAFE_FOR_XML !== !1, ft = w.WHOLE_DOCUMENT || !1, qt = w.RETURN_DOM || !1, _o = w.RETURN_DOM_FRAGMENT || !1, eo = w.RETURN_TRUSTED_TYPE || !1, Qn = w.FORCE_BODY || !1, Uo = w.SANITIZE_DOM !== !1, Wo = w.SANITIZE_NAMED_PROPS || !1, go = w.KEEP_CONTENT !== !1, $o = w.IN_PLACE || !1, Jn = RT(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : Lw, to = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Gt, yo = tn(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? en(w.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, ei), bo = tn(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? en(w.HTML_INTEGRATION_POINTS) : ye({}, ti);
    const S = tn(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? en(w.CUSTOM_ELEMENT_HANDLING) : ks(null);
    if (Te = ks(null), tn(S, "tagNameCheck") && ni(S.tagNameCheck) && (Te.tagNameCheck = S.tagNameCheck), tn(S, "attributeNameCheck") && ni(S.attributeNameCheck) && (Te.attributeNameCheck = S.attributeNameCheck), tn(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), Nt(Te), _t && (rn = !1), _o && (qt = !0), gn && (Ne = ye({}, Aw), Fe = ks(null), gn.html === !0 && (ye(Ne, Iw), ye(Fe, Tw)), gn.svg === !0 && (ye(Ne, Pd), ye(Fe, Wd), ye(Fe, tu)), gn.svgFilters === !0 && (ye(Ne, Fd), ye(Fe, Wd), ye(Fe, tu)), gn.mathMl === !0 && (ye(Ne, Ud), ye(Fe, xw), ye(Fe, tu))), Ot.tagCheck = null, Ot.attributeCheck = null, tn(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Ot.tagCheck = w.ADD_TAGS : Wr(w.ADD_TAGS) && (Ne === vo && (Ne = en(Ne)), ye(Ne, w.ADD_TAGS, Re))), tn(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Ot.attributeCheck = w.ADD_ATTR : Wr(w.ADD_ATTR) && (Fe === vt && (Fe = en(Fe)), ye(Fe, w.ADD_ATTR, Re))), tn(w, "ADD_URI_SAFE_ATTR") && Wr(w.ADD_URI_SAFE_ATTR) && ye(zo, w.ADD_URI_SAFE_ATTR, Re), tn(w, "FORBID_CONTENTS") && Wr(w.FORBID_CONTENTS) && (St === wr && (St = en(St)), ye(St, w.FORBID_CONTENTS, Re)), tn(w, "ADD_FORBID_CONTENTS") && Wr(w.ADD_FORBID_CONTENTS) && (St === wr && (St = en(St)), ye(St, w.ADD_FORBID_CONTENTS, Re)), go && (Ne["#text"] = !0), ft && ye(Ne, ["html", "head", "body"]), Ne.table && (ye(Ne, ["tbody"]), delete Dn.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw vi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw vi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = P;
      P = w.TRUSTED_TYPES_POLICY;
      try {
        H = Ee("");
      } catch (Z) {
        throw P = z, Z;
      }
    } else
      w.TRUSTED_TYPES_POLICY === null ? (P = void 0, H = "") : (P === void 0 && (P = Ge()), P && typeof H == "string" && (H = Ee("")));
    (Ce.uponSanitizeElement.length > 0 || Ce.uponSanitizeAttribute.length > 0) && Ne === vo && (Ne = en(Ne)), Ce.uponSanitizeAttribute.length > 0 && Fe === vt && (Fe = en(Fe)), Mt && Mt(w), no = w;
  }, he = ye({}, [...Pd, ...Fd, ...PT]), Y = ye({}, [...Ud, ...FT]), te = function(w, S, z) {
    return S.namespaceURI === Gt ? w === "svg" : S.namespaceURI === qo ? w === "svg" && (z === "annotation-xml" || yo[z]) : Boolean(he[w]);
  }, xe = function(w, S, z) {
    return S.namespaceURI === Gt ? w === "math" : S.namespaceURI === Go ? w === "math" && bo[z] : Boolean(Y[w]);
  }, Zo = function(w, S, z) {
    return S.namespaceURI === Go && !bo[z] || S.namespaceURI === qo && !yo[z] ? !1 : !Y[w] && (Ui[w] || !he[w]);
  }, qi = function(w) {
    let S = E(w);
    (!S || !S.tagName) && (S = {
      namespaceURI: to,
      tagName: "template"
    });
    const z = Za(w.tagName), Z = Za(S.tagName);
    return _r[w.namespaceURI] ? w.namespaceURI === Go ? te(z, S, Z) : w.namespaceURI === qo ? xe(z, S, Z) : w.namespaceURI === Gt ? Zo(z, S, Z) : !!(Co === "application/xhtml+xml" && _r[w.namespaceURI]) : !1;
  }, Bt = function(w) {
    ps(o.removed, {
      element: w
    });
    try {
      E(w).removeChild(w);
    } catch {
      if (N(w), !E(w))
        throw vi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oi = function(w) {
    const S = M(w);
    if (S) {
      const Z = [];
      Va(S, (re) => {
        ps(Z, re);
      }), Va(Z, (re) => {
        try {
          N(re);
        } catch {
        }
      });
    }
    const z = x(w);
    if (z)
      for (let Z = z.length - 1; Z >= 0; --Z) {
        const re = z[Z], me = re && re.name;
        if (typeof me == "string")
          try {
            w.removeAttribute(me);
          } catch {
          }
      }
  }, Yt = function(w, S) {
    try {
      ps(o.removed, {
        attribute: S.getAttributeNode(w),
        from: S
      });
    } catch {
      ps(o.removed, {
        attribute: null,
        from: S
      });
    }
    if (S.removeAttribute(w), w === "is")
      if (qt || _o)
        try {
          Bt(S);
        } catch {
        }
      else
        try {
          S.setAttribute(w, "");
        } catch {
        }
  }, Gi = function(w) {
    const S = x(w);
    if (!!S)
      for (let z = S.length - 1; z >= 0; --z) {
        const Z = S[z], re = Z && Z.name;
        if (!(typeof re != "string" || Fe[Re(re)]))
          try {
            w.removeAttribute(re);
          } catch {
          }
      }
  }, Yi = function(w) {
    const S = [w];
    for (; S.length > 0; ) {
      const z = S.pop();
      (U ? U(z) : z.nodeType) === Ao.element && Gi(z);
      const re = M(z);
      if (re)
        for (let me = re.length - 1; me >= 0; --me)
          S.push(re[me]);
    }
  }, ri = function(w) {
    let S = null, z = null;
    if (Qn)
      w = "<remove></remove>" + w;
    else {
      const me = Vw(w, /^[\r\n\t ]+/);
      z = me && me[0];
    }
    Co === "application/xhtml+xml" && to === Gt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Z = P ? Ee(w) : w;
    if (to === Gt)
      try {
        S = new g().parseFromString(Z, Co);
      } catch {
      }
    if (!S || !S.documentElement) {
      S = Ze.createDocument(to, "template", null);
      try {
        S.documentElement.innerHTML = Yo ? H : Z;
      } catch {
      }
    }
    const re = S.body || S.documentElement;
    return w && z && re.insertBefore(r.createTextNode(z), re.childNodes[0] || null), to === Gt ? on.call(S, ft ? "html" : "body")[0] : ft ? S.documentElement : re;
  }, gr = function(w) {
    return Xe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Vo = function(w) {
    return w = Sa(w, oa, " "), w = Sa(w, ra, " "), w = Sa(w, ia, " "), w;
  }, Ko = function(w) {
    var S;
    w.normalize();
    const z = Xe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_TEXT | m.SHOW_COMMENT | m.SHOW_CDATA_SECTION | m.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let Z = z.nextNode();
    for (; Z; )
      Z.data = Vo(Z.data), Z = z.nextNode();
    const re = (S = w.querySelectorAll) === null || S === void 0 ? void 0 : S.call(w, "template");
    re && Va(re, (me) => {
      oo(me.content) && Ko(me.content);
    });
  }, Jo = function(w) {
    const S = A ? A(w) : null;
    return typeof S != "string" || Re(S) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== x(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== U(w) || w.childNodes !== M(w);
  }, oo = function(w) {
    if (!U || typeof w != "object" || w === null)
      return !1;
    try {
      return U(w) === Ao.documentFragment;
    } catch {
      return !1;
    }
  }, So = function(w) {
    if (!U || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof U(w) == "number";
    } catch {
      return !1;
    }
  };
  function sn(q, w, S) {
    q.length !== 0 && Va(q, (z) => {
      z.call(o, w, S, no);
    });
  }
  const ii = function(w, S) {
    return !!(Fo && w.hasChildNodes() && !So(w.firstElementChild) && Tt(Mw, w.textContent) && Tt(Mw, w.innerHTML) || Fo && w.namespaceURI === Gt && S === "style" && So(w.firstElementChild) || w.nodeType === Ao.processingInstruction || Fo && w.nodeType === Ao.comment && Tt(KT, w.data));
  }, si = function(w, S) {
    if (!Dn[S] && yr(S) && (Te.tagNameCheck instanceof RegExp && Tt(Te.tagNameCheck, S) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(S)))
      return !1;
    if (go && !St[S]) {
      const z = E(w), Z = M(w);
      if (Z && z) {
        const re = Z.length;
        for (let me = re - 1; me >= 0; --me) {
          const rt = $o ? Z[me] : B(Z[me], !0);
          z.insertBefore(rt, F(w));
        }
      }
    }
    return Bt(w), !0;
  }, $r = function(w) {
    if (sn(Ce.beforeSanitizeElements, w, null), Jo(w))
      return Bt(w), !0;
    const S = Re(A ? A(w) : w.nodeName);
    if (sn(Ce.uponSanitizeElement, w, {
      tagName: S,
      allowedTags: Ne
    }), ii(w, S))
      return Bt(w), !0;
    if (Dn[S] || !(Ot.tagCheck instanceof Function && Ot.tagCheck(S)) && !Ne[S])
      return si(w, S);
    if ((U ? U(w) : w.nodeType) === Ao.element && !qi(w) || (S === "noscript" || S === "noembed" || S === "noframes") && Tt(JT, w.innerHTML))
      return Bt(w), !0;
    if (_t && w.nodeType === Ao.text) {
      const Z = Vo(w.textContent);
      w.textContent !== Z && (ps(o.removed, {
        element: w.cloneNode()
      }), w.textContent = Z);
    }
    return sn(Ce.afterSanitizeElements, w, null), !1;
  }, Xo = function(w, S, z) {
    if (Ct[S] || Uo && (S === "id" || S === "name") && (z in r || z in zi))
      return !1;
    const Z = Fe[S] || Ot.attributeCheck instanceof Function && Ot.attributeCheck(S, w);
    if (!(rn && Tt(Kn, S))) {
      if (!(Po && Tt(zt, S))) {
        if (Z) {
          if (!zo[S]) {
            if (!Tt(Jn, Sa(z, dt, ""))) {
              if (!((S === "src" || S === "xlink:href" || S === "href") && w !== "script" && Sw(z, "data:") === 0 && Xr[w])) {
                if (!(Vt && !Tt(Mn, Sa(z, dt, "")))) {
                  if (z)
                    return !1;
                }
              }
            }
          }
        } else if (!(yr(w) && (Te.tagNameCheck instanceof RegExp && Tt(Te.tagNameCheck, w) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(w)) && (Te.attributeNameCheck instanceof RegExp && Tt(Te.attributeNameCheck, S) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(S, w)) || S === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && Tt(Te.tagNameCheck, z) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(z))))
          return !1;
      }
    }
    return !0;
  }, ji = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), yr = function(w) {
    return !ji[Za(w)] && Tt(Nn, w);
  }, Qo = function(w, S, z, Z) {
    if (P && typeof y == "object" && typeof y.getAttributeType == "function" && !z)
      switch (y.getAttributeType(w, S)) {
        case "TrustedHTML":
          return Ee(Z);
        case "TrustedScriptURL":
          return He(Z);
      }
    return Z;
  }, hl = function(w, S, z, Z) {
    try {
      z ? w.setAttributeNS(z, S, Z) : w.setAttribute(S, Z), Jo(w) ? Bt(w) : Cw(o.removed);
    } catch {
      Yt(S, w);
    }
  }, ml = function(w) {
    sn(Ce.beforeSanitizeAttributes, w, null);
    const S = w.attributes;
    if (!S || Jo(w))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Fe,
      forceKeepAttr: void 0
    };
    let Z = S.length;
    const re = Re(w.nodeName);
    for (; Z--; ) {
      const me = S[Z], rt = me.name, Qe = me.namespaceURI, jt = me.value, an = Re(rt), Ki = jt;
      let gt = rt === "value" ? Ki : LT(Ki);
      if (z.attrName = an, z.attrValue = gt, z.keepAttr = !0, z.forceKeepAttr = void 0, sn(Ce.uponSanitizeAttribute, w, z), gt = z.attrValue, Wo && (an === "id" || an === "name") && Sw(gt, Ho) !== 0 && (Yt(rt, w), gt = Ho + gt), Fo && Tt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, gt)) {
        Yt(rt, w);
        continue;
      }
      if (an === "attributename" && Vw(gt, "href")) {
        Yt(rt, w);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          Yt(rt, w);
          continue;
        }
        if (!Xn && Tt(XT, gt)) {
          Yt(rt, w);
          continue;
        }
        if (_t && (gt = Vo(gt)), !Xo(re, an, gt)) {
          Yt(rt, w);
          continue;
        }
        gt = Qo(re, an, Qe, gt), gt !== Ki && hl(w, rt, Qe, gt);
      }
    }
    sn(Ce.afterSanitizeAttributes, w, null);
  }, ai = function(w) {
    let S = null;
    const z = gr(w);
    for (sn(Ce.beforeSanitizeShadowDOM, w, null); S = z.nextNode(); )
      if (sn(Ce.uponSanitizeShadowNode, S, null), $r(S), ml(S), oo(S.content) && ai(S.content), (U ? U(S) : S.nodeType) === Ao.element) {
        const re = T(S);
        oo(re) && (Zi(re), ai(re));
      }
    sn(Ce.afterSanitizeShadowDOM, w, null);
  }, Zi = function(w) {
    const S = [{
      node: w,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const z = S.pop();
      if (z.shadow) {
        ai(z.shadow);
        continue;
      }
      const Z = z.node, me = (U ? U(Z) : Z.nodeType) === Ao.element, rt = M(Z);
      if (rt)
        for (let Qe = rt.length - 1; Qe >= 0; --Qe)
          S.push({
            node: rt[Qe],
            shadow: null
          });
      if (me) {
        const Qe = A ? A(Z) : null;
        if (typeof Qe == "string" && Re(Qe) === "template") {
          const jt = Z.content;
          oo(jt) && S.push({
            node: jt,
            shadow: null
          });
        }
      }
      if (me) {
        const Qe = T(Z);
        oo(Qe) && S.push({
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
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, z = null, Z = null, re = null;
    if (Yo = !q, Yo && (q = "<!-->"), typeof q != "string" && !So(q) && (q = BT(q), typeof q != "string"))
      throw vi("dirty is not a string, aborting");
    if (!o.isSupported)
      return q;
    Jr || jo(w), o.removed = [];
    const me = $o && typeof q != "string" && So(q);
    if (me) {
      const jt = A ? A(q) : q.nodeName;
      if (typeof jt == "string") {
        const an = Re(jt);
        if (!Ne[an] || Dn[an])
          throw vi("root node is forbidden and cannot be sanitized in-place");
      }
      if (Jo(q))
        throw vi("root node is clobbered and cannot be sanitized in-place");
      try {
        Zi(q);
      } catch (an) {
        throw oi(q), an;
      }
    } else if (So(q))
      S = ri("<!---->"), z = S.ownerDocument.importNode(q, !0), z.nodeType === Ao.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? S = z : S.appendChild(z), Zi(z);
    else {
      if (!qt && !_t && !ft && q.indexOf("<") === -1)
        return P && eo ? Ee(q) : q;
      if (S = ri(q), !S)
        return qt ? null : eo ? H : "";
    }
    S && Qn && Bt(S.firstChild);
    const rt = gr(me ? q : S);
    try {
      for (; Z = rt.nextNode(); )
        $r(Z), ml(Z), oo(Z.content) && ai(Z.content);
    } catch (jt) {
      throw me && oi(q), jt;
    }
    if (me)
      return Va(o.removed, (jt) => {
        jt.element && Yi(jt.element);
      }), _t && Ko(q), q;
    if (qt) {
      if (_t && Ko(S), _o)
        for (re = ct.call(S.ownerDocument); S.firstChild; )
          re.appendChild(S.firstChild);
      else
        re = S;
      return (Fe.shadowroot || Fe.shadowrootmode) && (re = _n.call(s, re, !0)), re;
    }
    let Qe = ft ? S.outerHTML : S.innerHTML;
    return ft && Ne["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Tt(jT, S.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + Qe), _t && (Qe = Vo(Qe)), P && eo ? Ee(Qe) : Qe;
  }, o.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jo(q), Jr = !0;
  }, o.clearConfig = function() {
    no = null, Jr = !1, P = K, H = "";
  }, o.isValidAttribute = function(q, w, S) {
    no || jo({});
    const z = Re(q), Z = Re(w);
    return Xo(z, Z, S);
  }, o.addHook = function(q, w) {
    typeof w == "function" && ps(Ce[q], w);
  }, o.removeHook = function(q, w) {
    if (w !== void 0) {
      const S = TT(Ce[q], w);
      return S === -1 ? void 0 : xT(Ce[q], S, 1)[0];
    }
    return Cw(Ce[q]);
  }, o.removeHooks = function(q) {
    Ce[q] = [];
  }, o.removeAllHooks = function() {
    Ce = Nw();
  }, o;
}
var t2 = Zg();
const Bo = (e) => {
  let o = "";
  if (e)
    try {
      o = hT(new Date(e), Lt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Kg = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), Jg = (e) => t2.sanitize(e), Xg = (e, o) => {
  const r = Kg(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > o ? "..." : "";
  return r.substring(0, o) + s;
}, n2 = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => gT(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => yT(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => _T(s.firstEventTime)
      );
      break;
  }
  return r;
}, o2 = window.Vue.defineComponent, kn = window.Vue.unref, Hd = window.Vue.normalizeClass, No = window.Vue.createElementVNode, _i = window.Vue.toDisplayString, Mr = window.Vue.openBlock, Nr = window.Vue.createElementBlock, ka = window.Vue.createCommentVNode, Dw = window.Vue.createVNode, Rf = window.Vue.createTextVNode, r2 = window.Vue.renderList, i2 = window.Vue.Fragment, s2 = window.Vue.pushScopeId, a2 = window.Vue.popScopeId, ip = (e) => (s2("data-v-aab1b2b8"), e = e(), a2(), e), l2 = { class: "content" }, u2 = { class: "title-row" }, c2 = { class: "title" }, d2 = ["title"], f2 = {
  key: 1,
  class: "accepted"
}, p2 = {
  key: 2,
  class: "rejected"
}, h2 = /* @__PURE__ */ ip(() => /* @__PURE__ */ No("span", { class: "info-title" }, " Duration: ", -1)), m2 = { key: 0 }, w2 = /* @__PURE__ */ ip(() => /* @__PURE__ */ No("span", { class: "info-title" }, " First Event: ", -1)), v2 = { class: "description" }, _2 = /* @__PURE__ */ ip(() => /* @__PURE__ */ No("hr", null, null, -1)), g2 = {
  key: 1,
  class: "count-info"
}, $2 = /* @__PURE__ */ Rf(" Alarms: "), y2 = { class: "info-title" }, b2 = window.Vue.onMounted, C2 = window.Vue.ref, V2 = /* @__PURE__ */ o2({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Lt.ACCEPTED, a = Lt.REJECTED, u = new Date().getTime(), c = () => {
      var m;
      o("situation-selected", (m = r.situationInfo) == null ? void 0 : m.id);
    }, f = C2("none");
    return b2(async () => {
      var v;
      if (((v = r.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const m = await Bg(r.situationInfo.id);
      m && m.status && (f.value = m.status);
    }), (m, v) => {
      var g, y, b;
      return Mr(), Nr("div", {
        onClick: c,
        class: Hd(["card", {
          rejected: r.situationInfo.status == kn(a)
        }])
      }, [
        No("div", {
          class: Hd(["severity-line", [`${(y = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
        }, null, 2),
        No("div", l2, [
          No("div", u2, [
            No("div", c2, "Situation " + _i((b = r.situationInfo) == null ? void 0 : b.id), 1),
            f.value !== "none" ? (Mr(), Nr("span", {
              key: 0,
              class: Hd(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + _i(f.value === "pending" ? "\u2026" : ""), 11, d2)) : ka("", !0),
            r.situationInfo.status == kn(s) ? (Mr(), Nr("div", f2, [
              Dw(kn(X), {
                icon: kn(Us),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : ka("", !0),
            r.situationInfo.status == kn(a) ? (Mr(), Nr("div", p2, [
              Dw(kn(X), {
                icon: kn(Fg),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : ka("", !0)
          ]),
          No("div", null, [
            h2,
            Rf(" " + _i(kn(Qu)(
              kn(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? ka("", !0) : (Mr(), Nr("div", m2, [
            w2,
            Rf(_i(kn(Bo)(r.situationInfo.firstEventTime)), 1)
          ])),
          No("div", v2, _i(kn(Xg)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          _2,
          r.situationInfo.relatedAlarms ? (Mr(), Nr("div", g2, [
            $2,
            No("span", y2, _i(r.situationInfo.relatedAlarms.length), 1)
          ])) : ka("", !0),
          (Mr(!0), Nr(i2, null, r2(kn(Be.exports.keys)(
            kn(Be.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (B) => (Mr(), Nr("div", {
            class: "info-title",
            key: B
          }, " - " + _i(B), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Qg = /* @__PURE__ */ Se(V2, [["__scopeId", "data-v-aab1b2b8"]]), S2 = window.Vue.openBlock, E2 = window.Vue.createElementBlock, k2 = window.Vue.createElementVNode;
var I2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const A2 = {}, T2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, x2 = /* @__PURE__ */ k2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), L2 = [
  x2
];
function M2(e, o) {
  return S2(), E2("svg", T2, L2);
}
var N2 = /* @__PURE__ */ I2(A2, [["render", M2]]);
const D2 = window.Vue.openBlock, O2 = window.Vue.createElementBlock, e1 = window.Vue.createElementVNode;
var B2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const R2 = {}, P2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, F2 = /* @__PURE__ */ e1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), U2 = /* @__PURE__ */ e1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), W2 = [
  F2,
  U2
];
function H2(e, o) {
  return D2(), O2("svg", P2, W2);
}
var z2 = /* @__PURE__ */ B2(R2, [["render", H2]]);
const q2 = window.Vue.openBlock, G2 = window.Vue.createElementBlock, Y2 = window.Vue.createElementVNode;
var j2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Z2 = {}, K2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, J2 = /* @__PURE__ */ Y2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), X2 = [
  J2
];
function Q2(e, o) {
  return q2(), G2("svg", K2, X2);
}
var ex = /* @__PURE__ */ j2(Z2, [["render", Q2]]);
const tx = window.Vue.openBlock, nx = window.Vue.createElementBlock, ox = window.Vue.createElementVNode;
var rx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ix = {}, sx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ax = /* @__PURE__ */ ox("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), lx = [
  ax
];
function ux(e, o) {
  return tx(), nx("svg", sx, lx);
}
var t1 = /* @__PURE__ */ rx(ix, [["render", ux]]);
const cx = window.Vue.defineComponent, Dr = window.Vue.unref, nu = window.Vue.normalizeClass, ou = window.Vue.createVNode, dx = window.Vue.openBlock, fx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const px = { class: "paginator" }, hx = /* @__PURE__ */ cx({
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
    return (a, u) => (dx(), fx("div", px, [
      ou(Dr(X), {
        icon: Dr(N2),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      ou(Dr(X), {
        icon: Dr(ex),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ou(Dr(X), {
        icon: Dr(t1),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ou(Dr(X), {
        icon: Dr(z2),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const mx = /* @__PURE__ */ Se(hx, [["__scopeId", "data-v-54e14a59"]]);
const be = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, wx = window.Vue.computed, ec = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = wx(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Oi = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Bi = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var vx = Object.defineProperty, _x = Object.defineProperties, gx = Object.getOwnPropertyDescriptors, Ow = Object.getOwnPropertySymbols, $x = Object.prototype.hasOwnProperty, yx = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? vx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Rw = (e, o) => {
  for (var r in o || (o = {}))
    $x.call(o, r) && Bw(e, r, o[r]);
  if (Ow)
    for (var r of Ow(o))
      yx.call(o, r) && Bw(e, r, o[r]);
  return e;
}, bx = (e, o) => _x(e, gx(o));
const Cx = window.Vue.defineComponent, Vx = window.Vue.h;
var Sx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ex = {
  center: {
    type: Boolean,
    default: !1
  }
}, kx = Cx({
  props: Ex,
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
        this.styles = bx(Rw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Bi(this.failsafe), this.failsafe = Oi(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Vx("div", {
        style: Rw({}, this.styles),
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
var Yr = /* @__PURE__ */ Sx(kx, [["__scopeId", "data-v-18e2a5db"]]);
const Ix = window.Vue.openBlock, Ax = window.Vue.createElementBlock, Tx = window.Vue.createElementVNode;
var xx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Lx = {}, Mx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Nx = /* @__PURE__ */ Tx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Dx = [
  Nx
];
function Ox(e, o) {
  return Ix(), Ax("svg", Mx, Dx);
}
var qs = /* @__PURE__ */ xx(Lx, [["render", Ox]]);
const Pw = window.Vue.computed, Bx = (e, o, r) => {
  const s = Pw(() => o.value.filter((u) => !u.disabled)), a = Pw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const Rx = window.Vue.openBlock, Px = window.Vue.createElementBlock, sp = window.Vue.createElementVNode;
var Fx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ux = {}, Wx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Hx = /* @__PURE__ */ sp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), zx = /* @__PURE__ */ sp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), qx = /* @__PURE__ */ sp("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Gx = [
  Hx,
  zx,
  qx
];
function Yx(e, o) {
  return Rx(), Px("svg", Wx, Gx);
}
var jx = /* @__PURE__ */ Fx(Ux, [["render", Yx]]), Zx = Object.defineProperty, Kx = Object.defineProperties, Jx = Object.getOwnPropertyDescriptors, Fw = Object.getOwnPropertySymbols, Xx = Object.prototype.hasOwnProperty, Qx = Object.prototype.propertyIsEnumerable, Uw = (e, o, r) => o in e ? Zx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, n1 = (e, o) => {
  for (var r in o || (o = {}))
    Xx.call(o, r) && Uw(e, r, o[r]);
  if (Fw)
    for (var r of Fw(o))
      Qx.call(o, r) && Uw(e, r, o[r]);
  return e;
}, o1 = (e, o) => Kx(e, Jx(o));
const Gs = window.Vue.defineComponent, ol = window.Vue.resolveComponent, Do = window.Vue.openBlock, As = window.Vue.createElementBlock, eL = window.Vue.createVNode, Ru = window.Vue.createBlock, tL = window.Vue.withModifiers, Ws = window.Vue.inject, rl = window.Vue.computed, nL = window.Vue.normalizeClass, hs = window.Vue.createElementVNode, Pu = window.Vue.toDisplayString, Iu = window.Vue.renderSlot, Ka = window.Vue.createCommentVNode, oL = window.Vue.withDirectives, rL = window.Vue.vShow, Pf = window.Vue.ref, Ww = window.Vue.toRef, Hw = window.Vue.nextTick, Ff = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ap = window.Vue.provide, zw = window.Vue.isRef, iL = window.Vue.onBeforeUnmount;
var ll = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sL = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, aL = Gs({
  props: sL,
  components: {
    FeatherIcon: X
  }
}), lL = ["title"];
function uL(e, o, r, s, a, u) {
  const c = ol("FeatherIcon");
  return Do(), As("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    eL(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, lL);
}
var cL = /* @__PURE__ */ ll(aL, [["render", uL], ["__scopeId", "data-v-4265058e"]]);
const dL = Gs({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return qs;
    }
  },
  components: {
    ActionIcon: cL
  }
});
function fL(e, o, r, s, a, u) {
  const c = ol("ActionIcon");
  return Do(), Ru(c, {
    onClick: o[0] || (o[0] = tL((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var pL = /* @__PURE__ */ ll(dL, [["render", fL]]);
const hL = Gs({
  computed: {
    errorIcon() {
      return jx;
    }
  },
  components: {
    FeatherIcon: X
  }
});
function mL(e, o, r, s, a, u) {
  const c = ol("FeatherIcon");
  return Do(), Ru(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var wL = /* @__PURE__ */ ll(hL, [["render", mL], ["__scopeId", "data-v-0b8faef3"]]);
const vL = {
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
}, _L = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, gL = Gs({
  emits: _L,
  props: vL,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Ws("wrapperOptions", {}), o = Ws("validationErrorMessage", !1), r = rl(() => e.error ? e.error : o && o.value ? o.value : !1);
    return o1(n1({}, e), { error: r });
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
    ClearIcon: pL,
    ErrorIcon: wL
  }
}), $L = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, yL = ["for"], bL = { class: "prefix" }, CL = { class: "post" };
function VL(e, o, r, s, a, u) {
  const c = ol("ClearIcon"), f = ol("ErrorIcon");
  return Do(), As("div", {
    class: nL(["feather-input-wrapper-container", e.containerCls])
  }, [
    hs("fieldset", $L, [
      hs("legend", null, Pu(e.label), 1)
    ]),
    hs("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Pu(e.label), 9, yL),
    hs("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      hs("div", bL, [
        Iu(e.$slots, "pre", {}, void 0, !0)
      ]),
      Iu(e.$slots, "default", {}, void 0, !0),
      hs("div", CL, [
        e.showClear && e.computedClearText ? (Do(), Ru(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ka("", !0),
        e.error ? (Do(), Ru(f, { key: 1 })) : Ka("", !0),
        Iu(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var tc = /* @__PURE__ */ ll(gL, [["render", VL], ["__scopeId", "data-v-4db296db"]]);
const SL = Gs({
  setup() {
    const e = Ws("subTextOptions", {}), o = Ws("validationErrorMessage", !1), r = rl(() => e.error ? e.error : o && o.value ? o.value : "");
    return o1(n1({}, e), { error: r });
  }
}), EL = { class: "feather-input-sub-text" }, kL = {
  key: 0,
  class: "feather-input-spacer"
}, IL = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, AL = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function TL(e, o, r, s, a, u) {
  return oL((Do(), As("div", EL, [
    !e.hint && !e.error.length ? (Do(), As("div", kL, "\xA0")) : Ka("", !0),
    e.hint && !e.error.length ? (Do(), As("div", IL, Pu(e.hint), 1)) : Ka("", !0),
    e.error.length > 0 ? (Do(), As("div", AL, Pu(e.error), 1)) : Ka("", !0),
    Iu(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [rL, !e.inline || e.hint || e.error.length]
  ]);
}
var Ys = /* @__PURE__ */ ll(SL, [["render", TL], ["__scopeId", "data-v-8e0ac99e"]]);
const xL = {
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
Gs({
  props: xL,
  setup(e) {
    const o = Ws("featherFormErrors", Pf([])), r = Ww(e, "errorList"), s = rl(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : o.value;
    }), a = Ww(e, "generalError"), u = (g) => {
      document.getElementById(g).focus();
    }, c = (g) => g.replace(/ \*$/, ""), f = Pf(), m = (g) => `${c(g.label)} - ${g.message}`, v = rl(() => (s.value.length && Hw(() => f.value.focus()), e.headingText(s.value)));
    return Ff(a, (g) => {
      g.length && Hw(() => f.value.focus());
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
const js = (e, o, r, s, a) => {
  const u = Ws("featherForm", !1);
  if (s && u && e.value) {
    const c = Pf("");
    ap("validationErrorMessage", c);
    const f = () => {
      if (a && zw(a) && a.value)
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
    return a && zw(a) && Ff(a, () => {
      u.runValidation();
    }), Ff(e, (g, y) => {
      g && u && u.register(g, v), y && u && u.deregister(y);
    }, { immediate: !0 }), iL(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Zs = (e) => ({
  inherittedAttrs: rl(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Ks = {
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
}, Js = (e) => {
  ap("subTextOptions", e);
}, nc = {
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
}, oc = (e) => {
  ap("wrapperOptions", e);
}, ru = window.Vue.ref, LL = window.Vue.watch, ML = window.Vue.watchEffect, qw = window.Vue.computed, zd = window.Vue.provide, r1 = (e, o, r, s, a) => {
  const u = ru([]), c = ru(), f = ru(), m = ru();
  ML(() => {
    if (!u.value.length)
      return;
    const E = u.value.map((T) => T.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[E.indexOf(e.value)]), !c.value && u.value.length) {
      let T = u.value.filter((x) => !x.disabled);
      T = T.length ? T : u.value, f.value = T[0], f.value.first = !0;
    }
  }), LL(c, (E, T) => {
    T && (T.checked = !1), E && (E.checked = !0);
  });
  const v = (E) => {
    E && E.disabled || (f.value && (f.value.first = !1), c.value !== E && (o("update:modelValue", E.value), c.value = E, E.focus()));
  }, g = qw(() => c.value || f.value), y = Bx(g, u, v), b = qw(() => be("feather-radio-group"));
  m.value = b.value;
  const { validate: B } = js(m, e, r, s, a);
  return zd("register", (E) => {
    u.value = [...u.value, E], m.value === b.value && (m.value = E.id);
  }), zd("select", v), zd("blur", (E) => {
    o("blur", E);
  }), {
    keydown: (E) => {
      switch (E.keyCode) {
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
    validate: B,
    firstElementId: m,
    groupId: b
  };
};
var NL = Object.defineProperty, DL = Object.defineProperties, OL = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, BL = Object.prototype.hasOwnProperty, RL = Object.prototype.propertyIsEnumerable, Yw = (e, o, r) => o in e ? NL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ms = (e, o) => {
  for (var r in o || (o = {}))
    BL.call(o, r) && Yw(e, r, o[r]);
  if (Gw)
    for (var r of Gw(o))
      RL.call(o, r) && Yw(e, r, o[r]);
  return e;
}, i1 = (e, o) => DL(e, OL(o));
const jr = window.Vue.defineComponent, Ja = window.Vue.inject, Fu = window.Vue.computed, Xa = window.Vue.ref, Zn = window.Vue.resolveComponent, xn = window.Vue.openBlock, ul = window.Vue.createElementBlock, s1 = window.Vue.normalizeClass, Ro = window.Vue.renderSlot, zr = window.Vue.createBlock, il = window.Vue.createCommentVNode, Uu = window.Vue.createElementVNode, PL = window.Vue.withModifiers, rc = window.Vue.createVNode, a1 = window.Vue.toRef, Uf = window.Vue.mergeProps, hr = window.Vue.withCtx, FL = window.Vue.h, UL = window.Vue.provide;
var Zr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WL = {
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
}, HL = jr({
  props: WL,
  setup(e) {
    const o = Ja("isCondensed", null), r = Fu(() => o || e.condensed), s = Xa(!1);
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
    FeatherRipple: Yr
  }
}), zL = ["aria-disabled"];
function qL(e, o, r, s, a, u) {
  const c = Zn("FeatherRipple");
  return xn(), ul("div", {
    class: s1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    Ro(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (xn(), zr(c, { key: 0 })) : il("", !0)
  ], 42, zL);
}
var ic = /* @__PURE__ */ Zr(HL, [["render", qL], ["__scopeId", "data-v-44d413dc"]]);
const GL = {
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
}, YL = jr({
  emits: ["delete"],
  props: GL,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: qs
    };
  },
  components: {
    FeatherIcon: X
  }
}), jL = { class: "chip-delete" }, ZL = ["aria-label", "aria-describedby"];
function KL(e, o, r, s, a, u) {
  const c = Zn("FeatherIcon");
  return xn(), ul("span", jL, [
    Uu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = PL((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      rc(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, ZL)
  ]);
}
var JL = /* @__PURE__ */ Zr(YL, [["render", KL], ["__scopeId", "data-v-4bae6cb4"]]);
const XL = jr({
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
}), QL = ["title"];
function eM(e, o, r, s, a, u) {
  return xn(), ul("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Ro(e.$slots, "default", {}, void 0, !0)
  ], 8, QL);
}
var sc = /* @__PURE__ */ Zr(XL, [["render", eM], ["__scopeId", "data-v-1a0445b2"]]);
const tM = {}, nM = {
  class: "chip-icon",
  role: "presentation"
};
function oM(e, o) {
  return xn(), ul("span", nM, [
    Ro(e.$slots, "default", {}, void 0, !0)
  ]);
}
var ac = /* @__PURE__ */ Zr(tM, [["render", oM], ["__scopeId", "data-v-2230176f"]]);
const jw = {
  delete: "Remove"
}, rM = jr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => jw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = ec(a1(e, "labels"), jw), s = Fu(() => be("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Ms({}, o.attrs);
    return e.disabled && delete u.onClick, i1(Ms({}, r), {
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
    Chip: ic,
    DeleteIcon: JL,
    Label: sc,
    PreIcon: ac
  }
}), iM = ["aria-disabled"];
function sM(e, o, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("DeleteIcon"), v = Zn("Chip");
  return xn(), zr(v, Uf(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: hr(() => [
      Uu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Uu("span", Uf(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (xn(), zr(c, { key: 0 }, {
            default: hr(() => [
              Ro(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : il("", !0),
          rc(f, { id: e.chipTextId }, {
            default: hr(() => [
              Ro(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, iM),
      e.canDelete ? (xn(), zr(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (g) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : il("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var aM = /* @__PURE__ */ Zr(rM, [["render", sM], ["__scopeId", "data-v-48b2704a"]]);
const lM = jr({
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
    Chip: ic,
    Label: sc,
    PreIcon: ac
  }
}), uM = ["aria-disabled"];
function cM(e, o, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("Chip");
  return xn(), zr(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: hr(() => [
      Uu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (xn(), zr(c, { key: 0 }, {
          default: hr(() => [
            Ro(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : il("", !0),
        rc(f, null, {
          default: hr(() => [
            Ro(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, uM)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var dM = /* @__PURE__ */ Zr(lM, [["render", cM], ["__scopeId", "data-v-3e0c4eba"]]);
const fM = jr({
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
    const o = Xa(!1), r = Xa(!1), s = Fu(() => be("chip-label-id")), a = Fu(() => o.value || r.value ? 0 : -1), u = Xa(), c = () => {
      u.value.$el.focus();
    }, f = Ja("register", (b) => {
    }), m = Ja("blur", (b) => {
    }), v = Ja("select", (b) => {
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
    Chip: ic,
    Label: sc,
    PreIcon: ac
  }
});
function pM(e, o, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("Chip");
  return xn(), zr(m, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: s1(["focus hover", { selected: e.checked }]),
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
    default: hr(() => [
      e.hasIcon ? (xn(), zr(c, { key: 0 }, {
        default: hr(() => [
          Ro(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : il("", !0),
      rc(f, { id: e.labelId }, {
        default: hr(() => [
          Ro(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var hM = /* @__PURE__ */ Zr(fM, [["render", pM], ["__scopeId", "data-v-bbcc2f70"]]);
const mM = {
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
}, Zw = jr({
  props: mM,
  setup() {
    return { format: Ja("chipListFormat", "") };
  },
  render() {
    const e = (o) => FL(o, Ms(Ms({}, this.$props), this.$attrs), Ms({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(aM) : this.format === "radio" ? e(hM) : e(dM);
  }
}), wM = {
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
}, vM = jr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: wM,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    UL("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = a1(e, "modelValue");
      return i1(Ms({
        attrs: {
          role: "radiogroup"
        }
      }, r1(c, o.emit, e.label, {}, Xa(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), _M = ["aria-label"];
function gM(e, o, r, s, a, u) {
  return xn(), ul("div", Uf(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Ro(e.$slots, "default", {}, void 0, !0)
  ], 16, _M);
}
var $M = /* @__PURE__ */ Zr(vM, [["render", gM], ["__scopeId", "data-v-1e06f41d"]]);
const yM = window.Vue.defineComponent, bM = window.Vue.normalizeClass, CM = window.Vue.openBlock, VM = window.Vue.createElementBlock, SM = window.Vue.createCommentVNode, EM = /* @__PURE__ */ yM({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (CM(), VM("span", {
      key: 0,
      class: bM(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : SM("", !0);
  }
});
const kM = /* @__PURE__ */ Se(EM, [["__scopeId", "data-v-e08880d6"]]), IM = window.Vue.defineComponent, Ia = window.Vue.unref, l1 = window.Vue.createTextVNode, qd = window.Vue.normalizeClass, Gd = window.Vue.withCtx, AM = window.Vue.createVNode, TM = window.Vue.renderList, xM = window.Vue.Fragment, iu = window.Vue.openBlock, LM = window.Vue.createElementBlock, Yd = window.Vue.createBlock, Kw = window.Vue.createCommentVNode, MM = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NM = /* @__PURE__ */ l1(" ALL "), Jw = window.Vue.ref, DM = window.Vue.watch, OM = window.Vue.computed, BM = window.Vue.reactive, RM = /* @__PURE__ */ IM({
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
    const r = e, s = Jw(!1), a = OM(() => Be.exports.keys(Be.exports.groupBy(r.alarms, r.property))), u = Jw(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), c = BM({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((g) => g !== "all"), u.value.includes(v) ? u.value = u.value.filter((g) => g !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return DM(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (v, g) => Ia(a).length > 0 ? (iu(), Yd(Ia($M), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: qd({ vertical: r.isVertical })
    }, {
      default: Gd(() => [
        AM(Ia(Zw), {
          class: qd({ clicked: u.value.includes("all") }),
          onClick: g[0] || (g[0] = (y) => f("all"))
        }, {
          default: Gd(() => [
            NM
          ]),
          _: 1
        }, 8, ["class"]),
        (iu(!0), LM(xM, null, TM(Ia(a), (y) => (iu(), Yd(Ia(Zw), {
          class: qd([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: (b) => f(y)
        }, {
          default: Gd(() => [
            e.property == "severity" ? (iu(), Yd(kM, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : Kw("", !0),
            l1(MM(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Kw("", !0);
  }
});
const PM = /* @__PURE__ */ Se(RM, [["__scopeId", "data-v-f000b5a0"]]);
const FM = window.Vue.watch, UM = window.Vue.onBeforeUnmount, WM = window.Vue.ref, HM = window.Vue.onMounted, zM = (e) => {
  const o = WM(!1);
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
  return HM(() => {
    const c = FM(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    UM(() => {
      c(), u();
    });
  }), o;
}, qM = window.Vue.watch, GM = window.Vue.onBeforeUnmount, YM = window.Vue.ref, jM = window.Vue.onMounted, ZM = (e, o) => {
  const r = YM(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return jM(() => {
    const c = qM(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    GM(() => {
      c(), u();
    });
  }), r;
}, KM = window.Vue.watch, JM = window.Vue.onBeforeUnmount, XM = window.Vue.ref, u1 = (e, o) => {
  const r = XM(!1);
  let s = !1;
  const a = (m) => {
    o(m), s = !1;
  };
  function u(m) {
    s || (requestAnimationFrame(() => a(m)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = KM([e, r], ([m, v], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", u, !0), v && m ? m.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return JM(() => {
    f(), c();
  }), r;
}, QM = window.Vue.defineComponent, ur = window.Vue.ref, Xw = window.Vue.toRef, eN = window.Vue.onMounted, tN = window.Vue.watch, Qw = window.Vue.computed, nN = window.Vue.nextTick, ev = window.Vue.openBlock, tv = window.Vue.createElementBlock, nv = window.Vue.renderSlot, oN = window.Vue.normalizeClass, rN = window.Vue.normalizeStyle, iN = window.Vue.createCommentVNode;
var sN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const aN = {
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
}, lN = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, uN = QM({
  emits: lN,
  props: aN,
  setup(e, o) {
    const r = ur(), s = ur(), a = Xw(e, "open"), u = Xw(e, "noExpand"), c = ur("auto"), f = ur(), m = ur(e.triggerId || be("feather-menu-trigger")), v = ur(be("feather-menu-dropdown")), g = ur(""), y = ur("");
    eN(() => {
      f.value = window;
    });
    const b = ur(!1), B = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), N = () => {
      if (!s.value)
        return;
      const A = r.value.getBoundingClientRect();
      b.value = !0, c.value = "auto", nN(() => {
        let { height: P, width: H } = s.value.getBoundingClientRect();
        const K = B(), Me = K.height, pe = K.width;
        e.fill && H < A.width ? (c.value = A.width + "px", H = A.width) : c.value = H + "px";
        let Ae = 0;
        Me - A.bottom < P && A.top >= P ? (Ae = A.top - P, e.cover && (Ae += A.height)) : (Ae = A.bottom, e.cover && (Ae -= A.height));
        let Ee = e.right ? A.right - H : A.left;
        !e.right && A.right >= H && pe - A.left < H && (Ee = A.right - H), e.right && A.right <= H && pe - A.left > H && (Ee = A.left), y.value = `${Ee}px`, g.value = `${Ae}px`, b.value = !1;
      });
    }, M = ZM(r, (A) => {
      o.emit("outside-click", A);
    }), E = zM(N), T = u1(f, N);
    tN([a, s], ([A, P]) => {
      A && P && N(), M.value = A, E.value = A, T.value = A;
    });
    const x = Qw(() => {
      const A = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return a.value && (A["aria-controls"] = v.value), u.value || (A["aria-expanded"] = a.value ? "true" : "false"), A;
    }), U = Qw(() => ({
      click: (A) => {
        o.emit("trigger-click", A);
      }
    }));
    return {
      positionTop: g,
      positionLeft: y,
      triggerId: m,
      triggerAttrs: x,
      triggerListeners: U,
      menuId: v,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: N,
      calculating: b
    };
  }
}), cN = ["data-ref-id"], dN = ["data-ref-id", "id"];
function fN(e, o, r, s, a, u) {
  return ev(), tv("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    nv(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (ev(), tv("div", {
      key: 0,
      class: oN(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: rN({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      nv(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, dN)) : iN("", !0)
  ], 8, cN);
}
var c1 = /* @__PURE__ */ sN(uN, [["render", fN], ["__scopeId", "data-v-f75af406"]]), pN = {
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
const hN = window.Vue.openBlock, mN = window.Vue.createElementBlock, wN = window.Vue.createElementVNode;
var vN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _N = {}, gN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $N = /* @__PURE__ */ wN("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), yN = [
  $N
];
function bN(e, o) {
  return hN(), mN("svg", gN, yN);
}
var CN = /* @__PURE__ */ vN(_N, [["render", bN]]);
const VN = window.Vue.openBlock, SN = window.Vue.createElementBlock, lp = window.Vue.createElementVNode;
var EN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const kN = {}, IN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AN = /* @__PURE__ */ lp("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), TN = /* @__PURE__ */ lp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), xN = /* @__PURE__ */ lp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), LN = [
  AN,
  TN,
  xN
];
function MN(e, o) {
  return VN(), SN("svg", IN, LN);
}
var NN = /* @__PURE__ */ EN(kN, [["render", MN]]);
const DN = window.Vue.openBlock, ON = window.Vue.createElementBlock, BN = window.Vue.createElementVNode;
var RN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const PN = {}, FN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UN = /* @__PURE__ */ BN("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), WN = [
  UN
];
function HN(e, o) {
  return DN(), ON("svg", FN, WN);
}
var cl = /* @__PURE__ */ RN(PN, [["render", HN]]);
const sl = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  r += parseInt(s.getPropertyValue("margin-top"), 10), r += parseInt(s.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
};
const ce = {
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
const zN = window.Vue.defineComponent, qN = window.Vue.openBlock, GN = window.Vue.createElementBlock, YN = window.Vue.normalizeClass, jN = window.Vue.pushScopeId, ZN = window.Vue.popScopeId, Wf = window.Vue.createElementVNode;
var KN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const JN = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, XN = {
  click: (e) => !0
}, QN = zN({
  emits: XN,
  props: JN,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), d1 = (e) => (jN("data-v-07e020f5"), e = e(), ZN(), e), eD = /* @__PURE__ */ d1(() => /* @__PURE__ */ Wf("div", { class: "track" }, null, -1)), tD = /* @__PURE__ */ d1(() => /* @__PURE__ */ Wf("div", { class: "switcher" }, [
  /* @__PURE__ */ Wf("div", { class: "switch-circle" })
], -1)), nD = [
  eD,
  tD
];
function oD(e, o, r, s, a, u) {
  return qN(), GN("div", {
    class: YN(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, nD, 2);
}
var rD = /* @__PURE__ */ KN(QN, [["render", oD], ["__scopeId", "data-v-07e020f5"]]), iD = Object.defineProperty, sD = Object.defineProperties, aD = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, lD = Object.prototype.hasOwnProperty, uD = Object.prototype.propertyIsEnumerable, rv = (e, o, r) => o in e ? iD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, iv = (e, o) => {
  for (var r in o || (o = {}))
    lD.call(o, r) && rv(e, r, o[r]);
  if (ov)
    for (var r of ov(o))
      uD.call(o, r) && rv(e, r, o[r]);
  return e;
}, sv = (e, o) => sD(e, aD(o));
const up = window.Vue.defineComponent, gi = window.Vue.h, cD = window.Vue.openBlock, dD = window.Vue.createElementBlock, fD = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var f1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const pD = {
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
}, hD = up({
  inheritAttrs: !1,
  props: pD,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = gi("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = gi("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = gi("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : gi(Yr);
    if (this.asLi)
      return gi("li", sv(iv({}, this.$attrs), {
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
    const u = gi("a", sv(iv({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return gi("li", {}, [u]);
  }
});
var dl = /* @__PURE__ */ f1(hD, [["__scopeId", "data-v-7c46b2b3"]]);
up({
  components: {
    FeatherListItem: dl
  }
});
const mD = {}, wD = { class: "feather-list" };
function vD(e, o) {
  return cD(), dD("ul", wD, [
    fD(e.$slots, "default", {}, void 0, !0)
  ]);
}
var cp = /* @__PURE__ */ f1(mD, [["render", vD], ["__scopeId", "data-v-941a1d50"]]);
const _D = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, gD = {
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
  emits: _D,
  props: gD,
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
      (e.keyCode === ce.SPACE || e.keyCode === ce.ENTER) && this.updateValue(), e.keyCode === ce.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: rD, FeatherListItem: dl }
});
var $D = Object.defineProperty, yD = Object.defineProperties, bD = Object.getOwnPropertyDescriptors, av = Object.getOwnPropertySymbols, CD = Object.prototype.hasOwnProperty, VD = Object.prototype.propertyIsEnumerable, lv = (e, o, r) => o in e ? $D(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ln = (e, o) => {
  for (var r in o || (o = {}))
    CD.call(o, r) && lv(e, r, o[r]);
  if (av)
    for (var r of av(o))
      VD.call(o, r) && lv(e, r, o[r]);
  return e;
}, SD = (e, o) => yD(e, bD(o));
const Xs = window.Vue.defineComponent, Ie = window.Vue.openBlock, mt = window.Vue.createElementBlock, mn = window.Vue.createElementVNode, mo = window.Vue.toDisplayString, jn = window.Vue.createCommentVNode, lt = window.Vue.resolveComponent, Yn = window.Vue.createBlock, Wt = window.Vue.withCtx, Ns = window.Vue.Fragment, Qa = window.Vue.renderList, wn = window.Vue.createVNode, dp = window.Vue.withModifiers, Ni = window.Vue.normalizeClass, Hf = window.Vue.renderSlot, p1 = window.Vue.createTextVNode, ED = window.Vue.pushScopeId, kD = window.Vue.popScopeId, h1 = window.Vue.reactive, m1 = window.Vue.nextTick, jd = window.Vue.markRaw, Zd = window.Vue.toRef, uv = window.Vue.computed, ID = window.Vue.toRefs, ms = window.Vue.ref, Kd = window.Vue.mergeProps, cv = window.Vue.toHandlers, su = window.Vue.withDirectives, au = window.Vue.vShow;
var lc = {
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
}, Pi = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const AD = Xs({
  mixins: [],
  props: Ln(Ln({
    text: {
      type: String,
      required: !0
    }
  }, lc), fp),
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
}), TD = {
  key: 0,
  class: "highlight"
}, xD = { key: 1 };
function LD(e, o, r, s, a, u) {
  return Ie(), mt("span", null, [
    mn("span", null, mo(e.beginning), 1),
    e.highlighted ? (Ie(), mt("span", TD, mo(e.highlighted), 1)) : jn("", !0),
    e.end ? (Ie(), mt("span", xD, mo(e.end), 1)) : jn("", !0)
  ]);
}
var w1 = /* @__PURE__ */ Pi(AD, [["render", LD], ["__scopeId", "data-v-8abe2492"]]);
const MD = Xs({
  emits: ["select", "deselect"],
  props: Ln(Ln({
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
  }, lc), fp),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        sl(o, r.$el);
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
    FeatherListItem: dl,
    Highlighter: w1
  }
}), ND = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function DD(e, o, r, s, a, u) {
  const c = lt("Highlighter"), f = lt("FeatherListItem"), m = lt("FeatherList");
  return Ie(), Yn(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Wt(() => [
      (Ie(!0), mt(Ns, null, Qa(e.items, (v, g) => (Ie(), mt(Ns, {
        key: v[e.textProp]
      }, [
        wn(f, {
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
          default: Wt(() => [
            wn(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (Ie(), mt("span", ND, mo(e.newLabel), 1)) : jn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (Ie(), mt("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : jn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var OD = /* @__PURE__ */ Pi(MD, [["render", DD], ["__scopeId", "data-v-f623434a"]]);
const BD = Xs({
  emits: ["select"],
  props: Ln(Ln({
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
  }, lc), fp),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        sl(o, r);
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
    Highlighter: w1
  }
}), RD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, PD = ["aria-multiselectable"], FD = { role: "row" }, UD = ["aria-selected", "onClick"], WD = ["id", "aria-selected"], HD = { key: 1 };
function zD(e, o, r, s, a, u) {
  const c = lt("Highlighter");
  return Ie(), mt("div", RD, [
    mn("table", {
      class: Ni(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      mn("thead", null, [
        mn("tr", FD, [
          (Ie(!0), mt(Ns, null, Qa(e.config, (f) => (Ie(), mt("th", {
            key: f.title
          }, mo(f.title), 1))), 128))
        ])
      ]),
      mn("tbody", null, [
        (Ie(!0), mt(Ns, null, Qa(e.items, (f, m) => (Ie(), mt("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Ni({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: dp((v) => e.select(f), ["stop"])
        }, [
          (Ie(!0), mt(Ns, null, Qa(e.config, (v, g) => (Ie(), mt("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Ni({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            v.prop === e.textProp ? (Ie(), Yn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Ie(), mt("p", HD, mo(f[v.prop]), 1))
          ], 10, WD))), 128))
        ], 10, UD))), 128))
      ])
    ], 10, PD)
  ], 512);
}
var qD = /* @__PURE__ */ Pi(BD, [["render", zD], ["__scopeId", "data-v-58c88fd1"]]);
const GD = Xs({
  components: {
    FeatherList: cp,
    FeatherListItem: dl
  }
});
function YD(e, o, r, s, a, u) {
  const c = lt("FeatherListItem"), f = lt("FeatherList");
  return Ie(), Yn(f, { class: "result-list" }, {
    default: Wt(() => [
      wn(c, { "as-li": "" }, {
        default: Wt(() => [
          Hf(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var jD = /* @__PURE__ */ Pi(GD, [["render", YD], ["__scopeId", "data-v-06b752c6"]]);
const ZD = Xs({
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
    Cancel: qs,
    BaseChip: ic,
    BaseChipLabel: sc,
    BaseChipPreIcon: ac
  }
});
function KD(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("BaseChipPreIcon"), m = lt("BaseChipLabel"), v = lt("Cancel"), g = lt("BaseChip");
  return Ie(), Yn(g, {
    class: Ni(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Wt(() => [
      e.showPreIcon ? (Ie(), Yn(f, { key: 0 }, {
        default: Wt(() => {
          var y, b;
          return [
            wn(c, {
              icon: (y = e.pre) == null ? void 0 : y.icon,
              title: (b = e.pre) == null ? void 0 : b.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : jn("", !0),
      wn(m, null, {
        default: Wt(() => [
          p1(mo(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? jn("", !0) : (Ie(), mt("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = dp((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
      }, [
        wn(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Wt(() => [
            wn(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var JD = /* @__PURE__ */ Pi(ZD, [["render", KD], ["__scopeId", "data-v-e0fc6ac0"]]);
const XD = {}, QD = (e) => (ED("data-v-aa720e06"), e = e(), kD(), e), eO = { class: "spinner-container" }, tO = /* @__PURE__ */ QD(() => /* @__PURE__ */ mn("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ mn("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), nO = [
  tO
];
function oO(e, o) {
  return Ie(), mt("div", eO, nO);
}
var rO = /* @__PURE__ */ Pi(XD, [["render", oO], ["__scopeId", "data-v-aa720e06"]]), uc = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(uc || {});
const v1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, iO = Ln(Ln(Ln({
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
    validator: (e) => !!uc[e]
  },
  labels: {
    type: Object,
    default: () => v1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, lc), Ks), nc), sO = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, aO = (e, o, r, s) => {
  if (r.toLowerCase() === uc.multi) {
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
}, lO = () => {
  const e = h1({
    row: -1
  }), o = (u) => {
    m1(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === ce.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ce.UP) {
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
}, uO = (e) => {
  const o = h1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    m1(() => {
      o.col = f, o.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === ce.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const m = o.row, v = o.col;
        a(), r(m + 1, v);
      }
      return !0;
    }
    if (c.keyCode === ce.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const m = o.row, v = o.col;
        a(), r(m - 1, v);
      }
      return !0;
    }
    if (c.keyCode === ce.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const m = o.col, v = o.row;
        a(), r(v, m + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const m = o.row;
        a(), r(m + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === ce.LEFT && o.row !== -1) {
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
    if (c.keyCode === ce.END && o.row !== -1) {
      c.preventDefault();
      const m = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : m, e.length - 1), !0;
    }
    if (c.keyCode === ce.HOME && o.row !== -1) {
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
}, cO = Xs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: sO,
  props: iO,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== uc.multi;
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
      return jd(CN);
    },
    minCharIcon() {
      return jd(NN);
    },
    dropdownIcon() {
      return jd(cl);
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
        sl(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          sl(this.inputRef, this.scrollContainer);
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
      r !== void 0 && (Bi(this.typingTimeout), this.typingTimeout = Oi(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ce.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ce.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), o();
        return;
      }
      if (e.keyCode === ce.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === ce.ENTER || e.keyCode === ce.SPACE || e.keyCode === ce.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === ce.ESCAPE) {
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === ce.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ce.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ce.DELETE || e.keyCode === ce.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), r(), o());
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
    const r = ec(Zd(e, "labels"), v1);
    Js(e), oc(e);
    let s;
    e.gridConfig ? s = uO(e.gridConfig) : s = lO();
    const a = Zd(e, "id"), u = uv(() => a.value ? a.value : be("feather-autocomplete-input")), { validate: c } = js(u, Zd(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: v, allowNew: g, type: y, minChar: b } = ID(e), B = ms(!1), N = ms(!1), F = ms(!1), M = ms(""), E = ms([]), T = ms(), x = uv(() => T.value), U = () => {
      B.value && !N.value && (M.value && M.value.length >= b.value && o.emit("search", M.value), b.value <= 0 && o.emit("search", M.value || ""), E.value = [], s.reset());
    }, A = aO({
      selectionLimit: f,
      selectionLimitReached: N,
      modelValue: m,
      textProp: v,
      allowNew: g,
      forceCloseResults: F,
      query: M,
      internalResults: E,
      input: x,
      emitSearch: U
    }, s, y.value, o.emit);
    return SD(Ln(Ln({}, r), Zs(o.attrs)), {
      query: M,
      internalResults: E,
      selectionLimitReached: N,
      forceCloseResults: F,
      hasFocus: B,
      strategy: A,
      emitSearch: U,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: T,
      incomingId: a,
      inputRef: x,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: tc,
    InputSubText: Ys,
    AutocompleteResults: OD,
    AutocompleteResultsGrid: qD,
    Chip: JD,
    MenuMessage: jD,
    FeatherIcon: X,
    FeatherMenu: c1,
    Spinner: rO
  }
}), dO = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, fO = ["id"], pO = { "data-ref-id": "feather-autocomplete-no-results" }, hO = { "data-ref-id": "feather-autocomplete-selection-limit" }, mO = { "data-ref-id": "feather-autocomplete-min-char" };
function wO(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("Chip"), m = lt("InputWrapper"), v = lt("AutocompleteResults"), g = lt("AutocompleteResultsGrid"), y = lt("MenuMessage"), b = lt("Spinner"), B = lt("FeatherMenu"), N = lt("InputSubText");
  return Ie(), mt("div", Kd(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    wn(B, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Ni(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Wt(({ attrs: F, on: M }) => [
        wn(m, Kd(Ln(Ln({}, F), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, cv(M), { ref: "scroll" }), {
          pre: Wt(() => [
            Hf(e.$slots, "pre", {}, () => [
              wn(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Wt(() => [
            wn(c, {
              icon: e.dropdownIcon,
              class: Ni(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Wt(() => [
            mn("div", {
              class: Ni(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              mn("div", dO, null, 512),
              mn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, mo(e.selectedDescribedByText), 9, fO),
              (Ie(!0), mt(Ns, null, Qa(e.modelValueList, (E, T) => su((Ie(), Yn(f, {
                key: E[e.textProp],
                role: "button",
                id: T === e.activeChipIndex ? e.activeChipId : null,
                focused: T === e.activeChipIndex,
                disabled: e.disabled,
                text: E[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(E),
                onDelete: (x) => e.removeFromValue(E)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [au, !e.singleSelect]
              ])), 128)),
              mn("textarea", Kd(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, cv(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Wt(() => [
        e.gridConfig ? jn("", !0) : su((Ie(), Yn(v, {
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
          [au, e.showResults]
        ]),
        e.gridConfig ? su((Ie(), Yn(g, {
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
          [au, e.showResults]
        ]) : jn("", !0),
        e.showNoResults ? (Ie(), Yn(y, { key: 2 }, {
          default: Wt(() => [
            mn("span", pO, mo(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : jn("", !0),
        e.showSelectionLimit ? (Ie(), Yn(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Wt(() => [
            wn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            mn("span", hO, mo(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : jn("", !0),
        e.minChar ? su((Ie(), Yn(y, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Wt(() => [
            wn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            mn("span", mO, [
              Hf(e.$slots, "min-char", {}, () => [
                p1(mo(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [au, e.showMinCharWarning]
        ]) : jn("", !0),
        e.showLoading ? (Ie(), Yn(b, { key: 5 })) : jn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    wn(N, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var vO = /* @__PURE__ */ Pi(cO, [["render", wO], ["__scopeId", "data-v-43a7e951"]]);
var _O = Object.defineProperty, gO = Object.defineProperties, $O = Object.getOwnPropertyDescriptors, dv = Object.getOwnPropertySymbols, yO = Object.prototype.hasOwnProperty, bO = Object.prototype.propertyIsEnumerable, fv = (e, o, r) => o in e ? _O(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Au = (e, o) => {
  for (var r in o || (o = {}))
    yO.call(o, r) && fv(e, r, o[r]);
  if (dv)
    for (var r of dv(o))
      bO.call(o, r) && fv(e, r, o[r]);
  return e;
}, _1 = (e, o) => gO(e, $O(o));
const g1 = window.Vue.defineComponent, CO = window.Vue.ref, el = window.Vue.computed, VO = window.Vue.reactive, pv = window.Vue.watch, Jd = window.Vue.inject, $1 = window.Vue.resolveComponent, zf = window.Vue.openBlock, y1 = window.Vue.createElementBlock, qr = window.Vue.createElementVNode, SO = window.Vue.createBlock, EO = window.Vue.createCommentVNode, b1 = window.Vue.renderSlot, kO = window.Vue.pushScopeId, IO = window.Vue.popScopeId, Xd = window.Vue.toRef, hv = window.Vue.mergeProps, AO = window.Vue.toDisplayString, TO = window.Vue.createVNode;
var C1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const xO = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, LO = g1({
  props: xO,
  setup(e) {
    const o = CO(), r = () => {
      o.value.focus();
    }, s = el(() => be("feather-radio-button")), a = VO({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = el(() => be("radio-label-id")), c = el(() => a.first || a.checked ? 0 : -1);
    pv(() => e.disabled, (y) => {
      a.disabled = y;
    }, { immediate: !0 }), pv(() => e.value, (y) => {
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
    FeatherRipple: Yr
  }
}), MO = (e) => (kO("data-v-24790cf0"), e = e(), IO(), e), NO = { class: "layout-container" }, DO = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], OO = { class: "radio hover focus" }, BO = /* @__PURE__ */ MO(() => /* @__PURE__ */ qr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ qr("svg", { class: "dot" }, [
    /* @__PURE__ */ qr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), RO = ["id"];
function PO(e, o, r, s, a, u) {
  const c = $1("feather-ripple");
  return zf(), y1("div", NO, [
    qr("div", {
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
      qr("div", OO, [
        BO,
        e.vm.disabled ? EO("", !0) : (zf(), SO(c, {
          key: 0,
          center: ""
        }))
      ]),
      qr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        b1(e.$slots, "default", {}, void 0, !0)
      ], 8, RO)
    ], 40, DO)
  ]);
}
var qf = /* @__PURE__ */ C1(LO, [["render", PO], ["__scopeId", "data-v-24790cf0"]]);
const FO = _1(Au({}, Ks), {
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
}), UO = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, WO = g1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: FO,
  emits: UO,
  setup(e, o) {
    Js(e);
    const r = Xd(e, "error"), s = Xd(e, "modelValue"), a = el(() => be("feather-input-description")), u = el(() => {
      const c = _1(Au({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Au(Au({
      descriptionId: a,
      attrs: u
    }, r1(s, o.emit, e.label, e.schema, Xd(e, "error"))), Zs(o.attrs));
  },
  components: {
    InputSubText: Ys
  }
}), HO = ["for"], zO = ["id"];
function qO(e, o, r, s, a, u) {
  const c = $1("InputSubText");
  return zf(), y1("div", hv(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    qr("label", {
      for: e.groupId,
      class: "group-label"
    }, AO(e.label), 9, HO),
    qr("div", hv(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      b1(e.$slots, "default", {}, void 0, !0)
    ], 16, zO),
    TO(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var V1 = /* @__PURE__ */ C1(WO, [["render", qO], ["__scopeId", "data-v-6775aeb9"]]);
const GO = window.Vue.defineComponent, YO = window.Vue.renderList, jO = window.Vue.Fragment, mv = window.Vue.openBlock, ZO = window.Vue.createElementBlock, KO = window.Vue.toDisplayString, JO = window.Vue.createTextVNode, wv = window.Vue.unref, vv = window.Vue.withCtx, XO = window.Vue.createVNode, QO = window.Vue.createBlock, eB = window.Vue.watch, tB = window.Vue.ref, nB = /* @__PURE__ */ GO({
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
    ], a = tB(r.preSelected || s[0].id);
    return eB(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (mv(), QO(wv(V1), {
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
      default: vv(() => [
        (mv(), ZO(jO, null, YO(s, (f) => XO(wv(qf), {
          value: f.id,
          key: f.id
        }, {
          default: vv(() => [
            JO(KO(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const oB = /* @__PURE__ */ Se(nB, [["__scopeId", "data-v-0363302c"]]);
var rB = Object.defineProperty, iB = Object.defineProperties, sB = Object.getOwnPropertyDescriptors, _v = Object.getOwnPropertySymbols, aB = Object.prototype.hasOwnProperty, lB = Object.prototype.propertyIsEnumerable, gv = (e, o, r) => o in e ? rB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Aa = (e, o) => {
  for (var r in o || (o = {}))
    aB.call(o, r) && gv(e, r, o[r]);
  if (_v)
    for (var r of _v(o))
      lB.call(o, r) && gv(e, r, o[r]);
  return e;
}, $v = (e, o) => iB(e, sB(o));
const uB = window.Vue.defineComponent, cB = window.Vue.inject, Ta = window.Vue.h;
var dB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fB = {
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
}, pB = uB({
  inheritAttrs: !1,
  props: fB,
  setup() {
    return { hasTooltip: cB("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const m = ["btn", "hover", "focus", f];
      return this.icon && (m.push("btn-icon"), m.push("btn-icon-table")), this.onColor && m.push("on-color"), m;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Aa({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Ta(Yr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Ta(o, $v(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ta(Yr, { center: !0 })
      ]);
    }
    const c = Ta("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ta(o, $v(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ve = /* @__PURE__ */ dB(pB, [["__scopeId", "data-v-702d1074"]]);
const hB = window.Vue.openBlock, mB = window.Vue.createElementBlock, wB = window.Vue.createElementVNode;
var vB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _B = {}, gB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $B = /* @__PURE__ */ wB("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), yB = [
  $B
];
function bB(e, o) {
  return hB(), mB("svg", gB, yB);
}
var CB = /* @__PURE__ */ vB(_B, [["render", bB]]);
const VB = window.Vue.openBlock, SB = window.Vue.createElementBlock, EB = window.Vue.createElementVNode;
var kB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const IB = {}, AB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, TB = /* @__PURE__ */ EB("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), xB = [
  TB
];
function LB(e, o) {
  return VB(), SB("svg", AB, xB);
}
var MB = /* @__PURE__ */ kB(IB, [["render", LB]]);
const NB = window.Vue.openBlock, DB = window.Vue.createElementBlock, OB = window.Vue.createElementVNode;
var BB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const RB = {}, PB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FB = /* @__PURE__ */ OB("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), UB = [
  FB
];
function WB(e, o) {
  return NB(), DB("svg", PB, UB);
}
var S1 = /* @__PURE__ */ BB(RB, [["render", WB]]);
const HB = window.Vue.defineComponent, To = window.Vue.unref, $i = window.Vue.createVNode, yv = window.Vue.toDisplayString, fr = window.Vue.createElementVNode, E1 = window.Vue.createTextVNode, bv = window.Vue.openBlock, Cv = window.Vue.createElementBlock, zB = window.Vue.createCommentVNode, qB = window.Vue.withCtx, GB = window.Vue.vShow, YB = window.Vue.normalizeClass, jB = window.Vue.withDirectives, ZB = window.Vue.Fragment, KB = window.Vue.pushScopeId, JB = window.Vue.popScopeId, k1 = (e) => (KB("data-v-d75ae1ee"), e = e(), JB(), e), XB = /* @__PURE__ */ E1(" Filters "), QB = { class: "count" }, eR = { class: "results" }, tR = { class: "total" }, nR = /* @__PURE__ */ E1(" Reset "), oR = /* @__PURE__ */ k1(() => /* @__PURE__ */ fr("div", { class: "title" }, "By Severities:", -1)), rR = /* @__PURE__ */ k1(() => /* @__PURE__ */ fr("div", { class: "title" }, "By Start Date:", -1)), yi = window.Vue.ref, iR = window.Vue.reactive, sR = window.Vue.markRaw, Vv = window.Vue.watch, aR = /* @__PURE__ */ HB({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = sR({
      FilterAlt: CB,
      ExpandLess: MB,
      ExpandMore: cl,
      Refresh: S1
    }), a = wo(), u = yi(r.isOpen), c = yi(["all"]), f = yi(1), m = yi(r.list), v = yi(!1), g = yi(0), y = yi(null), b = iR({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), B = () => {
      var P, H;
      r.saveFilters && a.filters && (a.filters.node && (b.nodeSelectedValue = a.filters.node), ((P = a.filters) == null ? void 0 : P.severities) && !((H = a.filters) != null && H.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, x());
    }, N = () => {
      b.nodes = a.nodes, b.results = a.nodes;
    };
    Vv(
      () => a.nodes,
      () => {
        N();
      }
    ), Vv(r, () => {
      m.value = r.list, B();
    });
    const F = (P) => {
      c.value = P, x();
    }, M = (P) => {
      f.value = P, x();
    }, E = (P) => {
      if (!P)
        return b.nodeSelectedValue = void 0, [];
      v.value = !0, b.results = b.nodes.filter((H) => H.label.toLowerCase().indexOf(P) > -1).map((H) => ({
        _text: H.label,
        id: H.id
      })), v.value = !1;
    }, T = () => {
      c.value = ["all"], f.value = 1, b.nodeSelectedValue = void 0, g.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), m.value = r.list;
    }, x = () => {
      g.value = 0;
      let P = r.list;
      b.nodeSelectedValue && b.nodeSelectedValue._text && (g.value++, r.isSituation ? P = P.map((H) => {
        if (H.relatedAlarms.filter(
          (pe) => {
            var Ae;
            return pe.nodeLabel === ((Ae = b.nodeSelectedValue) == null ? void 0 : Ae._text);
          }
        ).length > 0)
          return H;
      }).filter((H) => H) : P = P.filter(
        (H) => {
          var K;
          return H.nodeLabel === ((K = b.nodeSelectedValue) == null ? void 0 : K._text);
        }
      )), c.value.includes("all") || (g.value++, P = P.filter(
        (H) => c.value.includes(H.severity)
      )), f.value !== 1 && (g.value++, P = n2(
        f.value,
        P
      )), m.value = P, r.saveFilters && U(), o("filtered-list", P);
    }, U = () => {
      a.filters = {
        node: b.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, A = () => {
      u.value = !u.value;
    };
    return (P, H) => (bv(), Cv(ZB, null, [
      r.isOpen ? zB("", !0) : (bv(), Cv("div", {
        key: 0,
        class: "btn-filter",
        onClick: A
      }, [
        fr("div", null, [
          $i(To(X), {
            icon: To(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          XB,
          fr("span", QB, yv(g.value), 1)
        ]),
        $i(To(X), {
          icon: u.value ? To(s).ExpandLess : To(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      jB(fr("div", {
        class: YB(["filters", { collapsed: !r.isOpen }])
      }, [
        fr("div", eR, [
          fr("div", tR, "Results: " + yv(To(m).length), 1),
          $i(To(ve), {
            class: "btn-reset",
            onClick: T
          }, {
            default: qB(() => [
              $i(To(X), {
                icon: To(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              nR
            ]),
            _: 1
          })
        ]),
        fr("div", null, [
          $i(To(vO), {
            ref_key: "autocomplete",
            ref: y,
            label: "Search by node",
            loading: v.value,
            modelValue: b.nodeSelectedValue,
            "onUpdate:modelValue": [
              H[0] || (H[0] = (K) => b.nodeSelectedValue = K),
              x
            ],
            results: b.results,
            type: "single",
            onSearch: E
          }, null, 8, ["loading", "modelValue", "results"]),
          oR,
          $i(PM, {
            alarms: r.list,
            onSelectedOption: F,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          fr("div", null, [
            rR,
            $i(oB, {
              onFilterDateSelected: M,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [GB, u.value]
      ])
    ], 64));
  }
});
const Qs = /* @__PURE__ */ Se(aR, [["__scopeId", "data-v-d75ae1ee"]]), lR = window.Vue.openBlock, uR = window.Vue.createElementBlock, cR = window.Vue.createElementVNode;
var dR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fR = {}, pR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hR = /* @__PURE__ */ cR("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), mR = [
  hR
];
function wR(e, o) {
  return lR(), uR("svg", pR, mR);
}
var cc = /* @__PURE__ */ dR(fR, [["render", wR]]);
const vR = window.Vue.openBlock, _R = window.Vue.createElementBlock, I1 = window.Vue.createElementVNode;
var gR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $R = {}, yR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bR = /* @__PURE__ */ I1("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), CR = /* @__PURE__ */ I1("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), VR = [
  bR,
  CR
];
function SR(e, o) {
  return vR(), _R("svg", yR, VR);
}
var ER = /* @__PURE__ */ gR($R, [["render", SR]]);
const kR = window.Vue.openBlock, IR = window.Vue.createElementBlock, AR = window.Vue.createElementVNode;
var TR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const xR = {}, LR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MR = /* @__PURE__ */ AR("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), NR = [
  MR
];
function DR(e, o) {
  return kR(), IR("svg", LR, NR);
}
var OR = /* @__PURE__ */ TR(xR, [["render", DR]]);
const Kr = () => window.VRouter || I0;
const BR = window.Vue.openBlock, RR = window.Vue.createElementBlock, PR = window.Vue.pushScopeId, FR = window.Vue.popScopeId, Sv = window.Vue.createElementVNode;
var UR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const WR = {}, HR = (e) => (PR("data-v-2263be39"), e = e(), FR(), e), zR = { class: "spinner-container" }, qR = /* @__PURE__ */ HR(() => /* @__PURE__ */ Sv("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Sv("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), GR = [
  qR
];
function YR(e, o) {
  return BR(), RR("div", zR, GR);
}
var Ds = /* @__PURE__ */ UR(WR, [["render", YR], ["__scopeId", "data-v-2263be39"]]);
const jR = window.Vue.defineComponent, Qd = window.Vue.unref, ZR = window.Vue.createVNode, KR = window.Vue.createElementVNode, JR = window.Vue.withCtx, XR = window.Vue.openBlock, QR = window.Vue.createBlock, eP = window.Vue.pushScopeId, tP = window.Vue.popScopeId, nP = (e) => (eP("data-v-ca5ca6e3"), e = e(), tP(), e), oP = /* @__PURE__ */ nP(() => /* @__PURE__ */ KR("span", null, "New Situation", -1)), rP = window.Vue.markRaw, iP = /* @__PURE__ */ jR({
  __name: "NewSituationBtn",
  setup(e) {
    const o = Kr(), r = rP({
      Add: cc
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (XR(), QR(Qd(ve), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: JR(() => [
        ZR(Qd(X), {
          icon: Qd(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        oP
      ]),
      _: 1
    }));
  }
});
const A1 = /* @__PURE__ */ Se(iP, [["__scopeId", "data-v-ca5ca6e3"]]), sP = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", aP = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", lP = window.Vue.defineComponent, ws = window.Vue.unref, vs = window.Vue.openBlock, _s = window.Vue.createElementBlock, uP = window.Vue.createCommentVNode, T1 = window.Vue.createTextVNode, Ev = window.Vue.Fragment, x1 = window.Vue.createElementVNode, cP = window.Vue.pushScopeId, dP = window.Vue.popScopeId, fP = (e) => (cP("data-v-ad139137"), e = e(), dP(), e), pP = ["src"], hP = { class: "engine" }, mP = /* @__PURE__ */ T1(" ENGINE "), wP = {
  key: 0,
  class: "type"
}, vP = {
  key: 1,
  class: "type"
}, _P = /* @__PURE__ */ T1(" ENGINE "), gP = /* @__PURE__ */ fP(() => /* @__PURE__ */ x1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), kv = window.Vue.computed, $P = /* @__PURE__ */ lP({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = Kr(), r = Gr(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = kv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = kv(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == Lt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (vs(), _s("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      ws(a) ? (vs(), _s("img", {
        key: 0,
        src: ws(u) ? ws(aP) : ws(sP),
        class: "icon-type"
      }, null, 8, pP)) : uP("", !0),
      x1("div", hP, [
        ws(a) ? (vs(), _s(Ev, { key: 0 }, [
          mP,
          ws(u) ? (vs(), _s("div", wP, "CLUSTERING")) : (vs(), _s("div", vP, "DEEP LEARNING"))
        ], 64)) : (vs(), _s(Ev, { key: 1 }, [
          _P,
          gP
        ], 64))
      ])
    ]));
  }
});
const yP = /* @__PURE__ */ Se($P, [["__scopeId", "data-v-ad139137"]]);
const bP = {}, CP = window.Vue.openBlock, VP = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const SP = { class: "empty" };
function EP(e, o) {
  return CP(), VP("div", SP, "No results found.");
}
const ea = /* @__PURE__ */ Se(bP, [["render", EP], ["__scopeId", "data-v-2415ea97"]]), kP = window.Vue.defineComponent, Mo = window.Vue.createElementVNode, xa = window.Vue.unref, bi = window.Vue.createVNode, IP = window.Vue.withCtx, lu = window.Vue.toDisplayString, cr = window.Vue.openBlock, Ci = window.Vue.createElementBlock, Iv = window.Vue.createCommentVNode, Av = window.Vue.createBlock, AP = window.Vue.renderList, TP = window.Vue.Fragment, xP = window.Vue.pushScopeId, LP = window.Vue.popScopeId, L1 = (e) => (xP("data-v-c35fbcc6"), e = e(), LP(), e), MP = { class: "list-main" }, NP = { class: "header" }, DP = /* @__PURE__ */ L1(() => /* @__PURE__ */ Mo("h2", null, "Situation List", -1)), OP = { class: "link-btns" }, BP = /* @__PURE__ */ L1(() => /* @__PURE__ */ Mo("span", null, "View Unassociated Alarms", -1)), RP = { class: "content" }, PP = { class: "left-filters" }, FP = { class: "container" }, UP = { class: "autocomplete" }, WP = { key: 0 }, HP = { key: 1 }, zP = { key: 0 }, qP = { class: "situation-list" }, GP = {
  key: 0,
  class: "footer-pager"
}, YP = window.Vue.reactive, uu = window.Vue.ref, jP = window.Vue.watch, ZP = window.Vue.markRaw, KP = /* @__PURE__ */ kP({
  __name: "SituationList",
  setup(e) {
    const o = ZP({
      Add: cc,
      View: ER,
      Settings: OR
    }), r = Kr(), s = wo(), a = Gr();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = YP({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = uu(!0), m = uu(0), v = uu(1), g = uu(0), y = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    jP(
      () => s.situations,
      () => {
        f.value = !1, y(), F(s.situations);
      }
    );
    const b = (E) => {
      m.value = E, c.situations = c.allSituations[m.value];
    }, B = (E) => {
      r.push({
        name: "situationDetail",
        params: {
          id: E
        }
      });
    }, N = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, F = (E) => {
      g.value = E.length, c.allSituations = Be.exports.chunk(E, u);
      const T = E.map((x) => x.id);
      s.filteredSituations = T, m.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, M = (E) => {
      E.length ? F(E) : c.situations = [];
    };
    return (E, T) => {
      var x;
      return cr(), Ci("div", MP, [
        Mo("div", NP, [
          DP,
          Mo("div", OP, [
            bi(xa(ve), {
              class: "view-situation-btn",
              onClick: T[0] || (T[0] = () => N())
            }, {
              default: IP(() => [
                bi(xa(X), {
                  icon: xa(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                BP
              ]),
              _: 1
            }),
            bi(A1),
            bi(yP)
          ])
        ]),
        Mo("div", RP, [
          Mo("div", PP, [
            bi(Qs, {
              list: xa(s).situations,
              onFilteredList: M,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Mo("div", FP, [
            Mo("div", UP, [
              c.situations && c.situations.length ? (cr(), Ci("div", WP, " Result: " + lu((x = c.situations) == null ? void 0 : x.length) + " of " + lu(g.value), 1)) : Iv("", !0)
            ]),
            f.value ? (cr(), Av(xa(Ds), {
              key: 0,
              class: "spinner"
            })) : (cr(), Ci("div", HP, [
              c.situations && c.situations.length ? (cr(), Ci("div", zP, [
                Mo("div", qP, [
                  (cr(!0), Ci(TP, null, AP(c.situations, (U) => (cr(), Ci("div", {
                    class: "card",
                    key: U.id
                  }, [
                    bi(Qg, {
                      onClick: () => B(U.id),
                      "situation-info": U
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                g.value > u ? (cr(), Ci("div", GP, [
                  Mo("div", null, "Page: " + lu(m.value + 1) + " of " + lu(v.value), 1),
                  bi(mx, {
                    onGoToPage: b,
                    currentPage: m.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Iv("", !0)
              ])) : (cr(), Av(ea, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const JP = /* @__PURE__ */ Se(KP, [["__scopeId", "data-v-c35fbcc6"]]);
const cu = window.Vue.ref, XP = window.Vue.inject, QP = window.Vue.computed, e3 = window.Vue.onMounted, M1 = {
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
}, N1 = (e) => {
  const o = cu(!1), r = cu(), s = cu(e.controls), a = cu(e.id), u = () => {
    r.value && r.value.focus();
  }, c = XP("registerTab");
  e3(() => {
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
  const f = QP(() => ({
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
}, Tv = window.Vue.ref, t3 = window.Vue.toRef, n3 = window.Vue.watch, xv = window.Vue.provide, D1 = {
  prop: "modelValue",
  event: "update:modelValue"
}, O1 = {
  "update:modelValue": (e) => !0
}, B1 = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, R1 = (e, o) => {
  const r = t3(e, "modelValue"), s = Tv(e.modelValue), a = Tv([]);
  n3(r, (N) => {
    m(N);
  });
  const u = (N) => {
    N.preventDefault(), a.value.some((F, M) => F.tab && F.tab.el.contains(N.target) ? (f(M), m(M), !0) : !1);
  }, c = (N) => {
    if (((K) => K.shiftKey || K.ctrlKey || K.metaKey || K.altKey)(N))
      return;
    const M = N.keyCode, E = (K) => {
      K.stopPropagation(), K.preventDefault();
    }, T = a.value.filter((K) => K.tab && !K.tab.disabled), x = a.value.findIndex((K) => K.tab && K.tab.el.contains(document.activeElement));
    let U = x !== -1 ? x : s.value;
    const A = [ce.RIGHT], P = [ce.LEFT], H = [ce.ENTER, ce.SPACE];
    e.vertical && (A.push(ce.DOWN), P.push(ce.UP)), A.indexOf(M) > -1 ? (U++, U >= T.length && (U = 0), E(N), f(a.value.indexOf(T[U]))) : P.indexOf(M) > -1 && (U--, U < 0 && (U = T.length - 1), E(N), f(a.value.indexOf(T[U]))), H.indexOf(M) > -1 && m(U);
  }, f = (N) => {
    a.value.forEach(function(F, M) {
      N === M && F.tab && F.tab.focus();
    });
  }, m = (N) => {
    const F = a.value[N];
    !F || F.tab && F.tab.disabled || (a.value.forEach((M, E) => {
      M.tab && (M.tab.selected = N === E), M.panel && (M.panel.selected = N === E);
    }), s.value = N, o.emit("update:modelValue", N));
  };
  xv("registerTab", (N) => {
    const F = N.index;
    F > -1 && (a.value[F] = { ...a.value[F], tab: N }, a.value = [...a.value], y());
  }), xv("registerPanel", (N) => {
    const F = N.index;
    F > -1 && (a.value[F] = {
      ...a.value[F],
      panel: N
    }, a.value = [...a.value], y());
  });
  const y = () => {
    a.value.forEach(({ tab: N, panel: F }, M) => {
      if (F && N) {
        const E = N.id || be("tab"), T = N.controls || be("panel");
        N.controls = T, N.id = E, F.tab = E, F.id = T;
      }
      M === s.value && (F && (F.selected = !0), N && (N.selected = !0));
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
}, du = window.Vue.ref, o3 = window.Vue.inject, r3 = window.Vue.computed, i3 = window.Vue.onMounted, P1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, F1 = (e) => {
  const o = du(!1), r = du(), s = du(e.tab), a = du(e.id), u = o3("registerPanel");
  i3(() => {
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
  const c = r3(() => ({
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
}, pp = window.Vue.defineComponent, s3 = window.Vue.resolveComponent, hp = window.Vue.openBlock, mp = window.Vue.createElementBlock, tl = window.Vue.createElementVNode, U1 = window.Vue.mergeProps, Wu = window.Vue.renderSlot, a3 = window.Vue.createVNode, l3 = window.Vue.normalizeStyle, u3 = window.Vue.toHandlers, c3 = window.Vue.withDirectives, d3 = window.Vue.normalizeProps, f3 = window.Vue.guardReactiveProps, p3 = window.Vue.vShow;
var wp = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const h3 = M1, m3 = pp({
  props: h3,
  setup(e) {
    return N1(e);
  },
  components: {
    FeatherRipple: Yr
  }
}), w3 = { role: "presentation" }, v3 = { class: "tab-text" };
function _3(e, o, r, s, a, u) {
  const c = s3("FeatherRipple");
  return hp(), mp("li", w3, [
    tl("button", U1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      tl("span", v3, [
        Wu(e.$slots, "default", {}, void 0, !0)
      ]),
      a3(c)
    ], 16)
  ]);
}
var Os = /* @__PURE__ */ wp(m3, [["render", _3], ["__scopeId", "data-v-e6bb52b6"]]);
const g3 = B1, $3 = O1, y3 = pp({
  model: D1,
  emits: $3,
  props: g3,
  setup(e, o) {
    return R1(e, o);
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
}), b3 = { class: "feather-tab-container" }, C3 = { class: "tab-panels" };
function V3(e, o, r, s, a, u) {
  return hp(), mp("div", b3, [
    tl("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: l3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    tl("ul", U1(e.attrs, u3(e.listeners)), [
      Wu(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    tl("div", C3, [
      Wu(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var W1 = /* @__PURE__ */ wp(y3, [["render", V3], ["__scopeId", "data-v-27adffb9"]]);
const S3 = P1, E3 = pp({
  props: S3,
  setup(e) {
    return F1(e);
  }
});
function k3(e, o, r, s, a, u) {
  return c3((hp(), mp("div", d3(f3(e.attrs)), [
    Wu(e.$slots, "default")
  ], 16)), [
    [p3, e.selected]
  ]);
}
var Bs = /* @__PURE__ */ wp(E3, [["render", k3]]);
const I3 = window.Vue.defineComponent, A3 = window.Vue.toDisplayString, T3 = window.Vue.normalizeClass, x3 = window.Vue.openBlock, L3 = window.Vue.createElementBlock, M3 = window.Vue.createCommentVNode, N3 = /* @__PURE__ */ I3({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (x3(), L3("span", {
      key: 0,
      class: T3(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, A3(o.severity), 3)) : M3("", !0);
  }
});
const H1 = /* @__PURE__ */ Se(N3, [["__scopeId", "data-v-83c2cdce"]]), D3 = window.Vue.defineComponent, Lv = window.Vue.toDisplayString, Mv = window.Vue.createElementVNode, O3 = window.Vue.openBlock, B3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const R3 = { class: "box" }, P3 = { class: "label" }, F3 = { class: "date" }, U3 = /* @__PURE__ */ D3({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (O3(), B3("div", R3, [
      Mv("div", P3, Lv(o.label), 1),
      Mv("div", F3, Lv(o.info), 1)
    ]));
  }
});
const ef = /* @__PURE__ */ Se(U3, [["__scopeId", "data-v-b4afa751"]]), W3 = window.Vue.defineComponent, H3 = window.Vue.unref, z3 = window.Vue.renderList, q3 = window.Vue.Fragment, tf = window.Vue.openBlock, nf = window.Vue.createElementBlock, G3 = window.Vue.toDisplayString, Y3 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const j3 = { class: "alarms-list" }, Z3 = /* @__PURE__ */ W3({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (tf(), nf("div", j3, [
      (tf(!0), nf(q3, null, z3(H3(Be.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (tf(), nf("div", {
        class: Y3(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, G3(a.length), 3))), 128))
    ]));
  }
});
const K3 = /* @__PURE__ */ Se(Z3, [["__scopeId", "data-v-52d63440"]]), J3 = window.Vue.openBlock, X3 = window.Vue.createElementBlock, Q3 = window.Vue.createElementVNode;
var e4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const t4 = {}, n4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, o4 = /* @__PURE__ */ Q3("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), r4 = [
  o4
];
function i4(e, o) {
  return J3(), X3("svg", n4, r4);
}
var s4 = /* @__PURE__ */ e4(t4, [["render", i4]]);
const a4 = window.Vue.openBlock, l4 = window.Vue.createElementBlock, u4 = window.Vue.createStaticVNode;
var c4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const d4 = {}, f4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, p4 = /* @__PURE__ */ u4('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), h4 = [
  p4
];
function m4(e, o) {
  return a4(), l4("svg", f4, h4);
}
var Hu = /* @__PURE__ */ c4(d4, [["render", m4]]);
const w4 = window.Vue.defineComponent, uo = window.Vue.unref, of = window.Vue.createVNode, vp = window.Vue.createElementVNode, rf = window.Vue.withCtx, fu = window.Vue.openBlock, sf = window.Vue.createBlock, af = window.Vue.createCommentVNode, v4 = window.Vue.normalizeClass, _4 = window.Vue.createElementBlock, g4 = window.Vue.pushScopeId, $4 = window.Vue.popScopeId, _p = (e) => (g4("data-v-d9c6a479"), e = e(), $4(), e), y4 = /* @__PURE__ */ _p(() => /* @__PURE__ */ vp("span", null, "Acknowledge", -1)), b4 = /* @__PURE__ */ _p(() => /* @__PURE__ */ vp("span", null, "Escalate", -1)), C4 = /* @__PURE__ */ _p(() => /* @__PURE__ */ vp("span", null, "Clear", -1)), V4 = /* @__PURE__ */ w4({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = wo(), s = async (u) => {
      await Dk(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await Rg(
        o.situationId,
        Lt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await xg(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (fu(), _4("div", {
      class: v4(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? af("", !0) : (fu(), sf(uo(ve), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: rf(() => [
          of(uo(X), {
            icon: uo(Us),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          y4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (fu(), sf(uo(ve), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(uo(Lt).ESCALATE))
      }, {
        default: rf(() => [
          of(uo(X), {
            icon: uo(s4),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          b4
        ]),
        _: 1
      })) : af("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (fu(), sf(uo(ve), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(uo(Lt).CLEAR))
      }, {
        default: rf(() => [
          of(uo(X), {
            icon: uo(Hu),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          C4
        ]),
        _: 1
      })) : af("", !0)
    ], 2));
  }
});
const z1 = /* @__PURE__ */ Se(V4, [["__scopeId", "data-v-d9c6a479"]]);
var S4 = Object.defineProperty, E4 = Object.defineProperties, k4 = Object.getOwnPropertyDescriptors, Nv = Object.getOwnPropertySymbols, I4 = Object.prototype.hasOwnProperty, A4 = Object.prototype.propertyIsEnumerable, Dv = (e, o, r) => o in e ? S4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Gf = (e, o) => {
  for (var r in o || (o = {}))
    I4.call(o, r) && Dv(e, r, o[r]);
  if (Nv)
    for (var r of Nv(o))
      A4.call(o, r) && Dv(e, r, o[r]);
  return e;
}, q1 = (e, o) => E4(e, k4(o));
const G1 = window.Vue.defineComponent, T4 = window.Vue.inject, x4 = window.Vue.resolveComponent, lf = window.Vue.openBlock, Ov = window.Vue.createElementBlock, Ts = window.Vue.createElementVNode, L4 = window.Vue.createBlock, Bv = window.Vue.createCommentVNode, M4 = window.Vue.renderSlot, N4 = window.Vue.pushScopeId, D4 = window.Vue.popScopeId, uf = window.Vue.toRef, pu = window.Vue.computed, O4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var B4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const R4 = {
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
}, P4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, F4 = G1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: P4,
  props: R4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: T4("registerCheckbox", (o) => {
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
      (e.keyCode === ce.SPACE || e.keyCode === ce.ENTER) && this.updateValue(), e.keyCode === ce.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Yr
  }
}), U4 = (e) => (N4("data-v-a7af27e2"), e = e(), D4(), e), W4 = { class: "layout-container" }, H4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], z4 = { class: "checkbox hover focus" }, q4 = /* @__PURE__ */ U4(() => /* @__PURE__ */ Ts("div", { class: "box" }, [
  /* @__PURE__ */ Ts("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Ts("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Ts("div", { class: "indeterminate" })
], -1)), G4 = ["id", "for"];
function Y4(e, o, r, s, a, u) {
  const c = x4("feather-ripple");
  return lf(), Ov("div", W4, [
    Ts("div", {
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
      Ts("div", z4, [
        q4,
        e.disabled ? Bv("", !0) : (lf(), L4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Bv("", !0) : (lf(), Ov("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        M4(e.$slots, "default", {}, void 0, !0)
      ], 8, G4))
    ], 40, H4)
  ]);
}
var Di = /* @__PURE__ */ B4(F4, [["render", Y4], ["__scopeId", "data-v-a7af27e2"]]);
const j4 = q1(Gf({}, Ks), {
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
G1({
  props: j4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Js(e);
    const r = uf(e, "error"), s = pu(() => be("feather-checkbox-group")), a = pu(() => be("feather-input-description")), u = pu(() => be("feather-input-label")), c = pu(() => {
      const g = JSON.parse(JSON.stringify(o.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), q1(Gf({}, g), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = O4(s.value), { validate: m } = js(f, uf(e, "modelValue"), e.label, e.schema, uf(e, "error"));
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
    }, Zs(o.attrs));
  },
  components: {
    InputSubText: Ys
  }
});
const Z4 = window.Vue.openBlock, K4 = window.Vue.createElementBlock, Y1 = window.Vue.createElementVNode;
var J4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const X4 = {}, Q4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e8 = /* @__PURE__ */ Y1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), t8 = /* @__PURE__ */ Y1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), n8 = [
  e8,
  t8
];
function o8(e, o) {
  return Z4(), K4("svg", Q4, n8);
}
var r8 = /* @__PURE__ */ J4(X4, [["render", o8]]);
var i8 = Object.defineProperty, s8 = Object.defineProperties, a8 = Object.getOwnPropertyDescriptors, Rv = Object.getOwnPropertySymbols, l8 = Object.prototype.hasOwnProperty, u8 = Object.prototype.propertyIsEnumerable, Pv = (e, o, r) => o in e ? i8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xs = (e, o) => {
  for (var r in o || (o = {}))
    l8.call(o, r) && Pv(e, r, o[r]);
  if (Rv)
    for (var r of Rv(o))
      u8.call(o, r) && Pv(e, r, o[r]);
  return e;
}, j1 = (e, o) => s8(e, a8(o));
const c8 = window.Vue.defineComponent, cf = window.Vue.toRef, d8 = window.Vue.computed, Fv = window.Vue.resolveComponent, Uv = window.Vue.openBlock, Wv = window.Vue.createElementBlock, Hv = window.Vue.mergeProps, zv = window.Vue.createVNode, f8 = window.Vue.normalizeClass, qv = window.Vue.withCtx, p8 = window.Vue.createElementVNode, h8 = window.Vue.toDisplayString, m8 = window.Vue.createCommentVNode;
var w8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const v8 = j1(xs(xs({}, nc), Ks), {
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
}), _8 = {
  "update:modelValue": (e) => !0
}, g8 = c8({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: _8,
  props: v8,
  setup(e, o) {
    Js(e), oc(e);
    const r = cf(e, "id"), s = d8(() => r.value ? r.value : be("feather-textarea-label")), { validate: a } = js(s, cf(e, "modelValue"), e.label, e.schema, cf(e, "error"));
    return xs({
      inputId: s,
      incomingId: r,
      validate: a
    }, Zs(o.attrs));
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
      const e = xs({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), j1(xs(xs({}, e), this.listeners), {
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
    InputSubText: Ys,
    InputWrapper: tc
  }
}), $8 = ["maxlength"], y8 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function b8(e, o, r, s, a, u) {
  const c = Fv("InputWrapper"), f = Fv("InputSubText");
  return Uv(), Wv("div", Hv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    zv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: f8(["feather-textarea-content", e.contentCls])
    }, {
      default: qv(() => [
        p8("textarea", Hv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, $8)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    zv(f, { id: e.descriptionId }, {
      right: qv(() => [
        e.maxlength ? (Uv(), Wv("div", y8, h8(e.charCount), 1)) : m8("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var zu = /* @__PURE__ */ w8(g8, [["render", b8], ["__scopeId", "data-v-0648df5c"]]);
const C8 = window.Pinia.defineStore, dc = C8("appStore", {
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
}), V8 = window.Vue.defineComponent, Gv = window.Vue.toDisplayString, La = window.Vue.createElementVNode, Vi = window.Vue.unref, gs = window.Vue.openBlock, Yv = window.Vue.createBlock, Ma = window.Vue.createCommentVNode, jv = window.Vue.createVNode, hu = window.Vue.createElementBlock, S8 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const E8 = { class: "row" }, k8 = { class: "label" }, I8 = { class: "action-icons" }, A8 = { class: "icon-btn" }, T8 = {
  key: 0,
  class: "icon-btn"
}, x8 = {
  key: 1,
  class: "icon-btn"
}, L8 = {
  key: 0,
  class: "text"
}, M8 = window.Vue.watch, Zv = window.Vue.ref, N8 = /* @__PURE__ */ V8({
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
    const o = e, r = dc(), s = Zv(!1), a = Zv((m = o.memo) == null ? void 0 : m.body);
    M8(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await Wk(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Uk(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, g) => (gs(), hu("div", {
      class: S8([o.boxType === "small" ? "box-small" : "box"])
    }, [
      La("div", E8, [
        La("div", k8, Gv(e.label), 1),
        La("div", I8, [
          La("div", A8, [
            s.value ? Ma("", !0) : (gs(), Yv(Vi(X), {
              key: 0,
              icon: Vi(r8),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (gs(), hu("div", T8, [
            jv(Vi(X), {
              icon: Vi(Us),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ma("", !0),
          a.value && a.value != "" || s.value ? (gs(), hu("div", x8, [
            jv(Vi(X), {
              icon: Vi(qs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Ma("", !0)
        ])
      ]),
      La("div", null, [
        !s.value && a.value != null ? (gs(), hu("div", L8, Gv(a.value), 1)) : Ma("", !0),
        s.value ? (gs(), Yv(Vi(zu), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": g[0] || (g[0] = (y) => a.value = y),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Ma("", !0)
      ])
    ], 2));
  }
});
const qu = /* @__PURE__ */ Se(N8, [["__scopeId", "data-v-ee1264b5"]]), D8 = window.Vue.defineComponent, Or = window.Vue.unref, $s = window.Vue.createVNode, Na = window.Vue.toDisplayString, ho = window.Vue.createElementVNode, Kv = window.Vue.openBlock, Jv = window.Vue.createElementBlock, Xv = window.Vue.createCommentVNode, df = window.Vue.createTextVNode, O8 = window.Vue.pushScopeId, B8 = window.Vue.popScopeId, gp = (e) => (O8("data-v-b59dc239"), e = e(), B8(), e), R8 = {
  key: 0,
  class: "card"
}, P8 = { class: "row" }, F8 = {
  key: 0,
  class: "ack"
}, U8 = /* @__PURE__ */ gp(() => /* @__PURE__ */ ho("strong", null, " Duration: ", -1)), W8 = ["innerHTML"], H8 = /* @__PURE__ */ gp(() => /* @__PURE__ */ ho("strong", null, "First Event", -1)), z8 = /* @__PURE__ */ gp(() => /* @__PURE__ */ ho("strong", null, "Last Event", -1)), q8 = { class: "section memo-boxes" }, Qv = window.Vue.ref, G8 = window.Vue.watch, Y8 = /* @__PURE__ */ D8({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Qv(!1), a = Qv(r.alarm), u = new Date().getTime();
    G8(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (m) => {
      const v = await Lg(m);
      v && (a.value = v);
    };
    return (m, v) => {
      var g, y, b, B, N;
      return a.value ? (Kv(), Jv("div", R8, [
        ho("div", null, [
          ho("div", P8, [
            $s(Or(Di), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (F) => s.value = F),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            ho("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, Na(a.value.nodeLabel) + " - " + Na(a.value.id), 1),
            $s(H1, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Kv(), Jv("div", F8, [
              $s(Or(X), {
                icon: Or(Us),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Xv("", !0)
          ]),
          ho("div", null, [
            U8,
            df(" " + Na(Or(Qu)(Or(u), new Date(a.value.firstEventTime))), 1)
          ]),
          ho("div", {
            class: "description",
            innerHTML: Or(Jg)(a.value.description || "")
          }, null, 8, W8),
          ho("div", null, [
            H8,
            df(" - " + Na(Or(Bo)(a.value.firstEventTime)), 1)
          ]),
          ho("div", null, [
            z8,
            df(" - " + Na(Or(Bo)(a.value.lastEventTime)), 1)
          ]),
          ho("div", q8, [
            $s(qu, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (b = a.value) == null ? void 0 : b.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            $s(qu, {
              id: (B = a.value) == null ? void 0 : B.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (N = a.value) == null ? void 0 : N.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        $s(z1, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Xv("", !0);
    };
  }
});
const j8 = /* @__PURE__ */ Se(Y8, [["__scopeId", "data-v-b59dc239"]]), Z8 = window.Vue.openBlock, K8 = window.Vue.createElementBlock, Z1 = window.Vue.createElementVNode;
var J8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const X8 = {}, Q8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e5 = /* @__PURE__ */ Z1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), t5 = /* @__PURE__ */ Z1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), n5 = [
  e5,
  t5
];
function o5(e, o) {
  return Z8(), K8("svg", Q8, n5);
}
var Yf = /* @__PURE__ */ J8(X8, [["render", o5]]);
const r5 = window.Vue.watch, i5 = window.Vue.ref, s5 = window.Vue.onBeforeUnmount, K1 = (e) => {
  const o = i5(!1), r = (s) => {
    s.keyCode === ce.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return r5(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), s5(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, a5 = window.Vue.watch, J1 = (e) => {
  let o;
  a5(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, X1 = window.Vue.watch, Q1 = window.Vue.onBeforeUnmount, e0 = window.Vue.nextTick, l5 = window.Vue.onMounted, t0 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Gu = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, n0 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Q1(() => Gu(o, r)), l5(() => X1(e, (s) => {
    s ? e0(() => {
      o = t0(r);
    }) : Gu(o, r);
  }, { immediate: !0 }));
}, u5 = (e, o) => {
  let r;
  Q1(() => Gu(r, o.value ? o.value.offsetParent : !1)), X1([e, o], ([s, a]) => {
    s && a ? e0(() => {
      r = t0(a.offsetParent);
    }) : a && Gu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var c5 = Object.defineProperty, e_ = Object.getOwnPropertySymbols, d5 = Object.prototype.hasOwnProperty, f5 = Object.prototype.propertyIsEnumerable, t_ = (e, o, r) => o in e ? c5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, p5 = (e, o) => {
  for (var r in o || (o = {}))
    d5.call(o, r) && t_(e, r, o[r]);
  if (e_)
    for (var r of e_(o))
      f5.call(o, r) && t_(e, r, o[r]);
  return e;
};
const $p = window.Vue.defineComponent, nl = window.Vue.ref, h5 = window.Vue.nextTick, o0 = window.Vue.openBlock, r0 = window.Vue.createElementBlock, yp = window.Vue.createElementVNode, m5 = window.Vue.renderSlot, w5 = window.Vue.resolveComponent, v5 = window.Vue.normalizeClass, _5 = window.Vue.withModifiers, g5 = window.Vue.createVNode, n_ = window.Vue.toRef, o_ = window.Vue.computed, r_ = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var i0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, y5 = $p({
  props: $5,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = nl(), o = nl(!1), r = (g, y) => {
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
          const B = g;
          return B.type !== "hidden" && B.type !== "file";
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
      y && y.focus ? h5(() => {
        y.focus();
      }) : s(g);
    }, m = nl();
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
}), b5 = /* @__PURE__ */ yp("div", { tabindex: "0" }, null, -1), C5 = {
  class: "focus-trap-content",
  ref: "content"
}, V5 = /* @__PURE__ */ yp("div", { tabindex: "0" }, null, -1);
function S5(e, o, r, s, a, u) {
  return o0(), r0("div", null, [
    b5,
    yp("div", C5, [
      m5(e.$slots, "default")
    ], 512),
    V5
  ]);
}
var s0 = /* @__PURE__ */ i0(y5, [["render", S5]]);
const E5 = $p({
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
    icon: () => qs
  },
  components: {
    FeatherIcon: X
  }
}), k5 = ["aria-label"];
function I5(e, o, r, s, a, u) {
  const c = w5("FeatherIcon");
  return o0(), r0("a", {
    href: "#",
    class: v5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = _5((f) => e.$emit("close"), ["prevent"]))
  }, [
    g5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, k5);
}
var a0 = /* @__PURE__ */ i0(E5, [["render", I5], ["__scopeId", "data-v-fc0f3f00"]]);
const l0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, A5 = {
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
    default: () => l0,
    validator: (e) => !!e.title
  }
}, T5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
$p({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: T5,
  props: A5,
  setup(e, o) {
    const r = ec(n_(e, "labels"), l0), s = n_(e, "modelValue"), a = nl(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = o_(() => !!o.slots.footer), f = o_(() => be("dialog-header"));
    e.relative ? u5(s, a) : n0(s), J1(s), r_(K1(s), () => {
      u();
    });
    const m = nl(e.modelValue);
    return r_(m, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), p5({ close: u, hasFooter: c, headerId: f, element: a, shown: m }, r);
  },
  components: {
    FocusTrap: s0,
    DialogClose: a0
  }
});
var x5 = Object.defineProperty, i_ = Object.getOwnPropertySymbols, L5 = Object.prototype.hasOwnProperty, M5 = Object.prototype.propertyIsEnumerable, s_ = (e, o, r) => o in e ? x5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, fc = (e, o) => {
  for (var r in o || (o = {}))
    L5.call(o, r) && s_(e, r, o[r]);
  if (i_)
    for (var r of i_(o))
      M5.call(o, r) && s_(e, r, o[r]);
  return e;
};
const pc = window.Vue.defineComponent, a_ = window.Vue.toRef, l_ = window.Vue.watch, u_ = window.Vue.ref, c_ = window.Vue.resolveComponent, mu = window.Vue.openBlock, d_ = window.Vue.createBlock, N5 = window.Vue.Teleport, f_ = window.Vue.createElementBlock, ff = window.Vue.createVNode, p_ = window.Vue.Transition, pf = window.Vue.withCtx, h_ = window.Vue.createCommentVNode, D5 = window.Vue.withDirectives, O5 = window.Vue.normalizeStyle, B5 = window.Vue.normalizeClass, m_ = window.Vue.createElementVNode, R5 = window.Vue.renderSlot, P5 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var F5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const u0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, U5 = {
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
    default: () => u0,
    validator: (e) => !!e.title
  }
}, W5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, H5 = pc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: W5,
  props: U5,
  setup(e, o) {
    const r = ec(a_(e, "labels"), u0), s = a_(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    n0(s), J1(s), l_(K1(s), () => {
      a();
    });
    const u = u_(), c = u_(!1);
    return l_(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), fc({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: a0,
    FocusTrap: s0
  }
}), z5 = {
  key: 0,
  class: "drawer-container feather-styles"
}, q5 = {
  key: 0,
  class: "greyedOut"
}, G5 = ["aria-label"], Y5 = { class: "slot" };
function j5(e, o, r, s, a, u) {
  const c = c_("dialog-close"), f = c_("focus-trap");
  return mu(), d_(N5, { to: "body" }, [
    e.modelValue ? (mu(), f_("div", z5, [
      ff(p_, { name: "greyOutShim" }, {
        default: pf(() => [
          e.modelValue ? (mu(), f_("div", q5)) : h_("", !0)
        ]),
        _: 1
      }),
      ff(p_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (m) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (m) => e.shown = !1)
      }, {
        default: pf(() => [
          D5((mu(), d_(f, {
            enable: e.modelValue,
            style: O5({ width: e.width }),
            key: "sect",
            class: B5(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: pf(() => [
              m_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                m_("div", Y5, [
                  R5(e.$slots, "default", {}, void 0, !0)
                ]),
                ff(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, G5)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [P5, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : h_("", !0)
  ]);
}
var c0 = /* @__PURE__ */ F5(H5, [["render", j5], ["__scopeId", "data-v-0a36e1dc"]]);
const Z5 = fc({
  label: {
    type: String,
    required: !0
  }
}, M1);
pc({
  name: "DrawerTab",
  props: Z5,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Oi(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Bi(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return N1(e);
  },
  components: {
    FeatherRipple: Yr
  }
});
const K5 = fc({}, B1), J5 = O1;
pc({
  emits: J5,
  model: D1,
  props: K5,
  setup(e, o) {
    return R1(e, o);
  }
});
const X5 = fc({
  header: {
    type: String
  }
}, P1);
pc({
  name: "DrawerTabContent",
  props: X5,
  setup(e) {
    return F1(e);
  },
  directives: {
    MenuFocusLoop: pN
  }
});
const Q5 = window.Vue.defineComponent, d0 = window.Vue.createElementVNode, w_ = window.Vue.createVNode, eF = window.Vue.renderList, tF = window.Vue.Fragment, Da = window.Vue.openBlock, hf = window.Vue.createElementBlock, v_ = window.Vue.createBlock, nF = window.Vue.unref, oF = window.Vue.withCtx, rF = window.Vue.pushScopeId, iF = window.Vue.popScopeId, sF = (e) => (rF("data-v-37e146e7"), e = e(), iF(), e), aF = { class: "content" }, lF = /* @__PURE__ */ sF(() => /* @__PURE__ */ d0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), uF = {
  key: 0,
  class: "situation-list"
}, mf = window.Vue.ref, __ = window.Vue.watch, cF = /* @__PURE__ */ Q5({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = wo(), a = mf(r.visible), u = () => {
      let v = s.situations;
      r.situationId !== 0 && (v = s.situations.filter(
        (g) => g.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = mf(s.situations), f = mf(s.situations);
    __(r, () => {
      a.value = r.visible, u();
    }), __(
      () => s.situations,
      () => {
        u();
      }
    );
    const m = (v) => {
      f.value = v;
    };
    return (v, g) => (Da(), v_(nF(c0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (y) => a.value = y),
        g[1] || (g[1] = (y) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: oF(() => [
        d0("div", aF, [
          lF,
          w_(Qs, {
            list: c.value,
            isSituation: "",
            onFilteredList: m
          }, null, 8, ["list"]),
          f.value.length ? (Da(), hf("div", uF, [
            (Da(!0), hf(tF, null, eF(f.value, (y) => (Da(), hf("div", {
              class: "card",
              key: y.id
            }, [
              w_(Qg, {
                onClick: (b) => o("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Da(), v_(ea, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const f0 = /* @__PURE__ */ Se(cF, [["__scopeId", "data-v-37e146e7"]]), dF = window.Vue.defineComponent, g_ = window.Vue.normalizeClass, Is = window.Vue.createElementVNode, wu = window.Vue.unref, fF = window.Vue.createVNode, vu = window.Vue.toDisplayString, pF = window.Vue.createTextVNode, hF = window.Vue.openBlock, mF = window.Vue.createElementBlock, wF = window.Vue.pushScopeId, vF = window.Vue.popScopeId, _F = (e) => (wF("data-v-f3d99277"), e = e(), vF(), e), gF = { class: "alarmInfo" }, $F = { class: "alarm-title" }, yF = /* @__PURE__ */ _F(() => /* @__PURE__ */ Is("strong", null, " Duration: ", -1)), bF = { class: "description" }, CF = /* @__PURE__ */ dF({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (hF(), mF("div", {
      class: g_(["alarm", { selected: r.selected }])
    }, [
      Is("div", gF, [
        Is("div", {
          class: g_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        fF(wu(Di), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Is("div", $F, vu(e.alarm.nodeLabel) + " - " + vu(e.alarm.id), 1)
      ]),
      Is("div", null, [
        yF,
        pF(" " + vu(wu(Qu)(wu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Is("div", bF, vu(wu(Xg)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const bp = /* @__PURE__ */ Se(CF, [["__scopeId", "data-v-f3d99277"]]), VF = window.Vue.defineComponent, Tu = window.Vue.createElementVNode, ys = window.Vue.unref, SF = window.Vue.toDisplayString, $_ = window.Vue.withCtx, wf = window.Vue.createVNode, EF = window.Vue.renderList, kF = window.Vue.Fragment, Oa = window.Vue.openBlock, vf = window.Vue.createElementBlock, y_ = window.Vue.createBlock, IF = window.Vue.pushScopeId, AF = window.Vue.popScopeId, TF = (e) => (IF("data-v-35547098"), e = e(), AF(), e), xF = { class: "content" }, LF = { class: "header" }, MF = /* @__PURE__ */ TF(() => /* @__PURE__ */ Tu("h4", null, "ADD ALARMS", -1)), NF = {
  key: 0,
  class: "alarms-list"
}, _u = window.Vue.ref, b_ = window.Vue.watch, DF = /* @__PURE__ */ VF({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = wo(), a = _u(r.visible), u = _u([]), c = _u(["all"]), f = _u(s.unassignedAlarms);
    b_(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), b_(
      () => s.unassignedAlarms,
      () => {
        g();
      }
    );
    const m = (b) => {
      Be.exports.includes(u.value, b) ? Be.exports.remove(u.value, (B) => B === b) : u.value.push(b);
    }, v = () => {
      o("alarms-selected", u.value);
    }, g = () => {
      let b = s.unassignedAlarms;
      c.value.includes("all") || (b = b.filter(
        (B) => c.value.includes(B.severity)
      )), f.value = b;
    }, y = (b) => {
      f.value = b;
    };
    return (b, B) => (Oa(), y_(ys(c0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        B[0] || (B[0] = (N) => a.value = N),
        B[1] || (B[1] = (N) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: $_(() => [
        Tu("div", xF, [
          Tu("div", LF, [
            MF,
            wf(ys(ve), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: $_(() => [
                Tu("span", null, "Add " + SF(ys(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          wf(Qs, {
            list: ys(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (Oa(), vf("div", NF, [
            (Oa(!0), vf(kF, null, EF(f.value, (N) => (Oa(), vf("div", {
              class: "card",
              key: N.id
            }, [
              wf(bp, {
                selected: ys(Be.exports.includes)(ys(u), N.id),
                alarm: N,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Oa(), y_(ea, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const OF = /* @__PURE__ */ Se(DF, [["__scopeId", "data-v-35547098"]]), BF = window.Vue.openBlock, RF = window.Vue.createElementBlock, p0 = window.Vue.createElementVNode;
var PF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FF = {}, UF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WF = /* @__PURE__ */ p0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), HF = /* @__PURE__ */ p0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), zF = [
  WF,
  HF
];
function qF(e, o) {
  return BF(), RF("svg", UF, zF);
}
var C_ = /* @__PURE__ */ PF(FF, [["render", qF]]);
const GF = window.Vue.defineComponent, Tn = window.Vue.createElementVNode, Ft = window.Vue.unref, Xt = window.Vue.createVNode, Ba = window.Vue.withCtx, YF = window.Vue.renderList, V_ = window.Vue.Fragment, Ra = window.Vue.openBlock, gu = window.Vue.createElementBlock, jF = window.Vue.createBlock, ZF = window.Vue.pushScopeId, KF = window.Vue.popScopeId, ta = (e) => (ZF("data-v-76f75ba2"), e = e(), KF(), e), JF = { class: "container" }, XF = { class: "header" }, QF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("div", { class: "title" }, "Alarms", -1)), e6 = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Add Alarms", -1)), t6 = { class: "alarms-container" }, n6 = { class: "filters" }, o6 = { class: "list" }, r6 = { class: "row actions" }, i6 = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Clear", -1)), s6 = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Acknowledge", -1)), a6 = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Move", -1)), l6 = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Remove", -1)), u6 = { class: "section" }, c6 = {
  key: 0,
  class: "alarm-list"
}, $u = window.Vue.ref, d6 = window.Vue.watch, f6 = window.Vue.reactive, p6 = window.Vue.markRaw, h6 = /* @__PURE__ */ GF({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = p6({
      Add: cc,
      Delete: C_,
      MarkComplete: Hu,
      CheckCircle: Us,
      ExitToApp: Yf
    }), s = dc(), a = wo(), u = $u(!1), c = $u(["all"]), f = $u(!1), m = $u(!1), v = f6({
      selectedAlarms: [],
      alarms: o.alarms
    });
    d6(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const g = (x) => {
      v.selectedAlarms.includes(x) ? Be.exports.remove(v.selectedAlarms, (U) => U == x) : v.selectedAlarms.push(x);
    }, y = async (x) => {
      v.selectedAlarms.length ? (await Ok(v.selectedAlarms, x), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, b = () => v.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), B = async () => {
      b() && (await rw(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, N = async (x) => {
      b() && (await rw(
        o.situationId,
        v.selectedAlarms
      ) ? await F(x, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, F = async (x, U) => {
      U.length ? await Pg(x, U) ? a.getSituation(x) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, M = async (x) => {
      await F(o.situationId, x), m.value = !1;
    }, E = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, T = (x) => {
      v.alarms = x;
    };
    return (x, U) => (Ra(), gu(V_, null, [
      Tn("div", JF, [
        Tn("div", XF, [
          QF,
          Xt(Ft(ve), {
            class: "add-alarms-btn",
            onClick: U[0] || (U[0] = (A) => m.value = !0)
          }, {
            default: Ba(() => [
              Xt(Ft(X), {
                icon: Ft(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              e6
            ]),
            _: 1
          })
        ]),
        Tn("div", t6, [
          Tn("div", n6, [
            Xt(Qs, {
              list: o.alarms,
              onFilteredList: T,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Tn("div", o6, [
            Tn("div", r6, [
              Xt(Ft(Di), {
                modelValue: u.value,
                "onUpdate:modelValue": U[1] || (U[1] = (A) => u.value = A),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Xt(Ft(ve), {
                onClick: U[2] || (U[2] = () => y("clear"))
              }, {
                default: Ba(() => [
                  Xt(Ft(X), {
                    icon: Ft(Hu),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  i6
                ]),
                _: 1
              }),
              Xt(Ft(ve), {
                onClick: U[3] || (U[3] = () => y("ack"))
              }, {
                default: Ba(() => [
                  Xt(Ft(X), {
                    icon: Ft(Us),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  s6
                ]),
                _: 1
              }),
              Xt(Ft(ve), { onClick: E }, {
                default: Ba(() => [
                  Xt(Ft(X), {
                    icon: Ft(Yf),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  a6
                ]),
                _: 1
              }),
              Xt(Ft(ve), { onClick: B }, {
                default: Ba(() => [
                  Xt(Ft(X), {
                    icon: Ft(C_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  l6
                ]),
                _: 1
              })
            ]),
            Tn("div", u6, [
              v.alarms.length > 0 ? (Ra(), gu("div", c6, [
                (Ra(!0), gu(V_, null, YF(v.alarms, (A) => (Ra(), gu("div", {
                  key: A.id
                }, [
                  Xt(j8, {
                    alarm: A,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: g
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Ra(), jF(ea, { key: 1 }))
            ])
          ])
        ])
      ]),
      Xt(f0, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: N,
        onDrawerClosed: U[4] || (U[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Xt(OF, {
        visible: m.value,
        onAlarmsSelected: M,
        onDrawerAlarmsClosed: U[5] || (U[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const m6 = /* @__PURE__ */ Se(h6, [["__scopeId", "data-v-76f75ba2"]]), w6 = window.Vue.defineComponent, co = window.Vue.createVNode, In = window.Vue.unref, _f = window.Vue.normalizeClass, yu = window.Vue.toDisplayString, Pa = window.Vue.openBlock, Fa = window.Vue.createElementBlock, S_ = window.Vue.createCommentVNode, v6 = window.Vue.withCtx, Gn = window.Vue.createElementVNode, _6 = window.Vue.Fragment, g6 = window.Vue.pushScopeId, $6 = window.Vue.popScopeId, y6 = (e) => (g6("data-v-fafb3615"), e = e(), $6(), e), b6 = { class: "section" }, C6 = { class: "action-section" }, V6 = { class: "btn-row" }, S6 = { key: 0 }, E6 = { key: 1 }, k6 = {
  key: 0,
  class: "situation-detail"
}, I6 = { class: "situation-info" }, A6 = { class: "id" }, T6 = ["innerHTML"], x6 = /* @__PURE__ */ y6(() => /* @__PURE__ */ Gn("p", null, null, -1)), L6 = { class: "boxes" }, M6 = { class: "parameters" }, N6 = { class: "section memo-boxes" }, D6 = { key: 0 }, O6 = window.Vue.computed, E_ = window.Vue.ref, B6 = window.Vue.watch, R6 = /* @__PURE__ */ w6({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = dc(), s = wo(), a = Lt.REJECTED, u = E_(o.situationInfo.status), c = E_(o.situationInfo);
    B6(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = O6(
      () => {
        var v;
        return Jg(Kg(((v = c.value) == null ? void 0 : v.description) || ""));
      }
    ), m = async (v) => {
      var y;
      await Rg(
        (y = o.situationInfo) == null ? void 0 : y.id,
        v.toLowerCase()
      ) ? (u.value = v, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, g) => {
      var y, b, B, N, F, M, E, T, x, U, A, P;
      return Pa(), Fa(_6, null, [
        Gn("div", b6, [
          Gn("div", C6, [
            co(z1, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Gn("div", V6, [
              co(In(ve), {
                class: _f(["btn", { rejected: u.value == In(a) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = (H) => m(In(a)))
              }, {
                default: v6(() => [
                  co(In(X), {
                    icon: In(Fg),
                    "aria-hidden": "true",
                    class: _f(["icon reject", { rejected: u.value == In(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == In(a) ? (Pa(), Fa("span", S6, yu(In(a)), 1)) : (Pa(), Fa("span", E6, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Pa(), Fa("div", k6, [
            Gn("div", {
              class: _f(["severity-line", [`${(b = (y = c.value) == null ? void 0 : y.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            Gn("div", I6, [
              Gn("div", A6, [
                Gn("div", null, " Situation - " + yu((B = c.value) == null ? void 0 : B.id) + " - " + yu(c.value.alarms.length) + " alarm(s) affects " + yu(In(Be.exports.size)(In(Be.exports.groupBy)((N = c.value) == null ? void 0 : N.alarms, "nodeId"))) + " node(s) ", 1),
                co(H1, {
                  severity: (F = c.value) == null ? void 0 : F.severity
                }, null, 8, ["severity"])
              ]),
              Gn("span", {
                innerHTML: In(f),
                "data-test": "situation-description"
              }, null, 8, T6),
              x6,
              Gn("div", L6, [
                co(ef, {
                  label: "First Event",
                  info: In(Bo)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                co(ef, {
                  label: "Last Event",
                  info: In(Bo)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                co(ef, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Gn("div", M6, [
              co(K3, {
                alarms: (M = c.value) == null ? void 0 : M.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : S_("", !0),
          Gn("div", N6, [
            co(qu, {
              id: (E = c.value) == null ? void 0 : E.id,
              situationId: (T = c.value) == null ? void 0 : T.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (x = c.value) == null ? void 0 : x.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            co(qu, {
              id: (U = c.value) == null ? void 0 : U.id,
              situationId: (A = c.value) == null ? void 0 : A.id,
              label: "Journal Memo",
              type: "journal",
              memo: (P = c.value) == null ? void 0 : P.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Pa(), Fa("div", D6, [
          co(m6, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : S_("", !0)
      ], 64);
    };
  }
});
const P6 = /* @__PURE__ */ Se(R6, [["__scopeId", "data-v-fafb3615"]]);
var F6 = Object.defineProperty, U6 = Object.defineProperties, W6 = Object.getOwnPropertyDescriptors, k_ = Object.getOwnPropertySymbols, H6 = Object.prototype.hasOwnProperty, z6 = Object.prototype.propertyIsEnumerable, I_ = (e, o, r) => o in e ? F6(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, jf = (e, o) => {
  for (var r in o || (o = {}))
    H6.call(o, r) && I_(e, r, o[r]);
  if (k_)
    for (var r of k_(o))
      z6.call(o, r) && I_(e, r, o[r]);
  return e;
}, q6 = (e, o) => U6(e, W6(o));
const h0 = window.Vue.defineComponent, Li = window.Vue.resolveComponent, xu = window.Vue.openBlock, A_ = window.Vue.createBlock, Lu = window.Vue.mergeProps, Mi = window.Vue.withCtx, m0 = window.Vue.createElementBlock, G6 = window.Vue.Fragment, Y6 = window.Vue.renderList, j6 = window.Vue.createTextVNode, Z6 = window.Vue.toDisplayString, K6 = window.Vue.computed, T_ = window.Vue.toRef, Ua = window.Vue.createVNode, x_ = window.Vue.toHandlers, J6 = window.Vue.renderSlot, X6 = window.Vue.normalizeClass, Q6 = window.Vue.createElementVNode;
var w0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const e7 = h0({
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
        sl(o, this.$refs.list.$el);
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
    FeatherListItem: dl
  }
});
function t7(e, o, r, s, a, u) {
  const c = Li("FeatherListItem"), f = Li("FeatherList");
  return xu(), A_(f, Lu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Mi(() => [
      (xu(!0), m0(G6, null, Y6(e.options, (m, v) => (xu(), A_(c, {
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
        default: Mi(() => [
          j6(Z6(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var n7 = /* @__PURE__ */ w0(e7, [["render", t7], ["__scopeId", "data-v-eae820da"]]);
const o7 = q6(jf(jf({}, nc), Ks), {
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
}), r7 = {
  "update:modelValue": (e) => !0
}, i7 = h0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: r7,
  props: o7,
  setup(e, o) {
    Js(e), oc(e);
    const r = K6(() => be("feather-select-input")), { validate: s } = js(r, T_(e, "modelValue"), e.label, e.schema, T_(e, "error"));
    return jf({
      inputId: r,
      validate: s
    }, Zs(o.attrs));
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
    icon: () => cl
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
      if (e.keyCode === ce.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === ce.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === ce.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === ce.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === ce.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === ce.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Bi(this.delayTimeout), this.delayTimeout = Oi(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: tc,
    InputSubText: Ys,
    FeatherMenu: c1,
    List: n7,
    FeatherIcon: X
  }
});
function s7(e, o, r, s, a, u) {
  const c = Li("FeatherIcon"), f = Li("InputWrapper"), m = Li("List"), v = Li("FeatherMenu"), g = Li("InputSubText");
  return xu(), m0("div", Lu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ua(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Mi((y) => [
        Ua(f, Lu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, x_(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Mi(() => [
            J6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Mi(() => [
            Ua(c, {
              class: X6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Mi(() => [
            Q6("input", Lu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, x_(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Mi(() => [
        Ua(m, {
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
    Ua(g, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var a7 = /* @__PURE__ */ w0(i7, [["render", s7], ["__scopeId", "data-v-ecb32d90"]]);
const l7 = window.Vue.openBlock, u7 = window.Vue.createElementBlock, v0 = window.Vue.createElementVNode;
var c7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const d7 = {}, f7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, p7 = /* @__PURE__ */ v0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), h7 = /* @__PURE__ */ v0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), m7 = [
  p7,
  h7
];
function w7(e, o) {
  return l7(), u7("svg", f7, m7);
}
var v7 = /* @__PURE__ */ c7(d7, [["render", w7]]);
const Mu = window.Vue.openBlock, Zf = window.Vue.createElementBlock, _0 = window.Vue.createElementVNode, _7 = window.Vue.defineComponent, Si = window.Vue.ref, g7 = window.Vue.provide, L_ = window.Vue.computed, $7 = window.Vue.onUnmounted, M_ = window.Vue.toRef, y7 = window.Vue.resolveComponent, b7 = window.Vue.Fragment, C7 = window.Vue.createBlock, V7 = window.Vue.Teleport, N_ = window.Vue.createVNode, S7 = window.Vue.Transition, E7 = window.Vue.withCtx, k7 = window.Vue.normalizeClass, I7 = window.Vue.normalizeStyle, A7 = window.Vue.toDisplayString, T7 = window.Vue.createCommentVNode, x7 = window.Vue.renderSlot, gf = window.Vue.nextTick;
var g0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const L7 = {}, M7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, N7 = /* @__PURE__ */ _0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), D7 = [
  N7
];
function O7(e, o) {
  return Mu(), Zf("svg", M7, D7);
}
var B7 = /* @__PURE__ */ g0(L7, [["render", O7]]), xt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(xt || {}), pr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(pr || {});
const R7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(xt.top), a >= o.height + s && c.push(xt.bottom);
  const f = [];
  u >= o.width + s && f.push(xt.right), e.left >= o.width + s && f.push(xt.left);
  let m = [...f, ...c];
  return (r === xt.top || r === xt.bottom) && (m = [...c, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, P7 = (e, o, r, s, a = 28) => {
  if (e === xt.left || e === xt.right)
    return pr.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], m = u, v = c + o.width / 2, g = r.width - a, y = r.width / 2;
  return m >= y && v >= y && f.push(pr.center), v >= g && f.push(pr.left), m >= g && f.push(pr.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, F7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => xt.top
  },
  pointerAlignment: {
    type: String,
    default: () => pr.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, U7 = _7({
  props: F7,
  setup(e) {
    const o = Si(!1), r = Si(!1), s = be("feather-tooltip-trigger"), a = be("feather-tooltip"), u = "data-feather-tooltip";
    g7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Bi(c), o.value || (c = Oi(F, e.enterDelay));
    }, m = () => {
      Bi(c), c = Oi(M, e.exitDelay);
    }, v = (Ae) => {
      Ae.keyCode === ce.ESCAPE && (Ae.preventDefault(), M(!0));
    }, g = L_(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: v
    }, b = Si(document), B = u1(b, () => M(!0));
    $7(() => M(!0));
    const N = () => document.getElementById(a), F = () => {
      r.value = !1, o.value = !0, gf(() => {
        const Ae = N();
        pe(Ae), o.value = !1, gf(() => {
          r.value = !0, o.value = !0, B.value = !0;
        });
      });
    }, M = (Ae = !1) => {
      P.value = "", A.value = "", H.value = "", K.value = "", o.value = !1, Ae && (r.value = !1), B.value = !1;
    }, E = M_(e, "placement"), T = M_(e, "pointerAlignment"), x = 8, U = 24, A = Si(""), P = Si(""), H = Si(""), K = Si(""), Me = L_(() => K.value ? "p-" + K.value : !1), pe = (Ae) => {
      const Ee = document.querySelector(`[${u}=${s}]`);
      if (!Ee) {
        console.log("trigger not found");
        return;
      }
      gf(() => {
        const He = Ee.getBoundingClientRect(), Ge = Ae.getBoundingClientRect(), $e = R7(He, Ge, E.value, x), Ze = P7($e, He, Ge, T.value, U);
        H.value = Ze.toString(), K.value = $e.toString();
        let Xe = 0, ct = 0;
        if (($e === xt.left || $e === xt.right) && (Xe = He.top + He.height / 2 - Ge.height / 2, $e === xt.left && (ct = He.left - Ge.width - x), $e === xt.right && (ct = He.right)), $e === xt.top || $e === xt.bottom) {
          Xe = He.top - Ge.height - x, $e === xt.bottom && (Xe = He.bottom);
          const on = He.left + He.width / 2;
          switch (Ze) {
            case pr.center:
              ct = on - Ge.width / 2;
              break;
            case pr.left:
              ct = on - U;
              break;
            case pr.right:
              ct = on - Ge.width + U;
              break;
          }
        }
        A.value = Xe.toString() + "px", P.value = ct.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: y,
      show: o,
      animate: r,
      alignmentClass: H,
      placementClass: Me,
      top: A,
      left: P,
      tooltipID: a
    };
  },
  components: {
    Pointer: B7
  }
}), W7 = ["id"];
function H7(e, o, r, s, a, u) {
  const c = y7("Pointer");
  return Mu(), Zf(b7, null, [
    (Mu(), C7(V7, { to: "body" }, [
      N_(S7, { css: e.animate }, {
        default: E7(() => [
          e.show ? (Mu(), Zf("div", {
            key: 0,
            class: k7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: I7({ left: e.left, top: e.top })
          }, [
            _0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, A7(e.title), 9, W7),
            N_(c, { class: "tooltip-pointer" })
          ], 6)) : T7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    x7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var D_ = /* @__PURE__ */ g0(U7, [["render", H7], ["__scopeId", "data-v-3da6b22e"]]);
const z7 = window.Vue.defineComponent, $f = window.Vue.normalizeStyle, yf = window.Vue.createElementVNode, Wa = window.Vue.unref, O_ = window.Vue.toHandlers, B_ = window.Vue.mergeProps, R_ = window.Vue.withCtx, P_ = window.Vue.createVNode, q7 = window.Vue.renderList, G7 = window.Vue.Fragment, Ha = window.Vue.openBlock, za = window.Vue.createElementBlock, F_ = window.Vue.normalizeClass, U_ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Y7 = { class: "row" }, j7 = /* @__PURE__ */ z7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Ha(), za("div", Y7, [
      yf("div", {
        class: "line-gray",
        style: $f({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      P_(Wa(D_), {
        title: Wa(Bo)(e.alarm.firstEventTime)
      }, {
        default: R_(({ attrs: f, on: m }) => [
          yf("div", B_({ class: "circle" }, f, O_(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Ha(!0), za(G7, null, q7(o.events, (f, m) => (Ha(), za("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[m + 1] ? (Ha(), za("div", {
          key: 0,
          class: F_(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: $f({
            width: s(f.createTime, o.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : U_("", !0),
        P_(Wa(D_), {
          title: Wa(Bo)(e.alarm.firstEventTime)
        }, {
          default: R_(({ attrs: v, on: g }) => [
            o.events[m + 1] ? (Ha(), za("div", B_({ key: 0 }, v, O_(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : U_("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      yf("div", {
        class: F_(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: $f({
          width: s(e.events[e.events.length - 1].createTime, Wa(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const Z7 = /* @__PURE__ */ Se(j7, [["__scopeId", "data-v-6c43a557"]]), K7 = window.Vue.openBlock, J7 = window.Vue.createElementBlock, $0 = window.Vue.createElementVNode;
var X7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Q7 = {}, eU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tU = /* @__PURE__ */ $0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), nU = /* @__PURE__ */ $0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), oU = [
  tU,
  nU
];
function rU(e, o) {
  return K7(), J7("svg", eU, oU);
}
var iU = /* @__PURE__ */ X7(Q7, [["render", rU]]);
const sU = window.Vue.defineComponent, Kf = window.Vue.createElementVNode, aU = window.Vue.renderList, W_ = window.Vue.Fragment, bf = window.Vue.openBlock, Cf = window.Vue.createElementBlock, lU = window.Vue.normalizeClass, uU = window.Vue.unref, H_ = window.Vue.toDisplayString, cU = window.Vue.pushScopeId, dU = window.Vue.popScopeId, fU = (e) => (cU("data-v-2e087f7b"), e = e(), dU(), e), pU = /* @__PURE__ */ fU(() => /* @__PURE__ */ Kf("strong", null, "Events:", -1)), hU = /* @__PURE__ */ sU({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (bf(), Cf(W_, null, [
      pU,
      (bf(!0), Cf(W_, null, aU(o.events, (a) => (bf(), Cf("div", {
        class: "event-description",
        key: a.id
      }, [
        Kf("div", {
          class: lU(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Kf("div", null, H_(uU(Bo)(a.createTime)) + " - " + H_(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const mU = /* @__PURE__ */ Se(hU, [["__scopeId", "data-v-2e087f7b"]]), wU = window.Vue.defineComponent, vU = window.Vue.normalizeClass, An = window.Vue.createElementVNode, bs = window.Vue.toDisplayString, fn = window.Vue.unref, Cs = window.Vue.createVNode, y0 = window.Vue.createTextVNode, _U = window.Vue.renderList, z_ = window.Vue.Fragment, dr = window.Vue.openBlock, Ei = window.Vue.createElementBlock, q_ = window.Vue.createBlock, bu = window.Vue.createCommentVNode, gU = window.Vue.normalizeStyle, $U = window.Vue.pushScopeId, yU = window.Vue.popScopeId, bU = (e) => ($U("data-v-57b5ddda"), e = e(), yU(), e), CU = { class: "section detail" }, VU = { class: "id" }, SU = {
  key: 0,
  class: "section"
}, EU = /* @__PURE__ */ bU(() => /* @__PURE__ */ An("div", { class: "id" }, "Alarms", -1)), kU = { class: "action-btns" }, IU = { class: "zoom" }, AU = /* @__PURE__ */ y0(" Zoom "), TU = { class: "times" }, xU = {
  key: 0,
  class: "timeline-container"
}, LU = { class: "alarm-id" }, MU = {
  key: 0,
  class: "panel"
}, Br = window.Vue.ref, NU = window.Vue.watch, DU = /* @__PURE__ */ wU({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var U, A;
    const o = e, r = wo(), s = Br(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Br(a[0]), c = Br(o.width), f = Br(o.width), m = Br(new Date().getTime()), v = () => {
      var P, H;
      if (!o.situation.events) {
        const K = (H = (P = o.situation) == null ? void 0 : P.alarms) == null ? void 0 : H.map((Me) => Me.id);
        r.getEvents(o.situation.id, K);
      }
    };
    v();
    const g = () => (m.value = new Date().getTime(), c.value / (Number(m.value) - Number(b.value))), y = Br(o.situation.alarms), b = Br(
      ((A = Be.exports.minBy((U = o.situation) == null ? void 0 : U.alarms, "firstEventTime")) == null ? void 0 : A.firstEventTime) || new Date().getTime()
    ), B = Br(g());
    NU(o, () => {
      var P, H;
      b.value = ((H = Be.exports.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : H.firstEventTime) || new Date().getTime(), v(), c.value = f.value, B.value = g(), y.value = o.situation.alarms, u.value = a[0];
    });
    const N = (P) => {
      if ((P == null ? void 0 : P.id) === 1 && (y.value = o.situation.alarms), (P == null ? void 0 : P.id) === 2) {
        const H = Be.exports.groupBy(y.value, "severity"), K = [
          ...H.CRITICAL || [],
          ...H.MAJOR || [],
          ...H.MINOR || [],
          ...H.WARNING || [],
          ...H.NORMAL || [],
          ...H.CLEARED || [],
          ...H.INDETERMINATE || []
        ];
        y.value = K.filter((Me) => Me);
      }
      if ((P == null ? void 0 : P.id) === 3) {
        const H = Be.exports.reverse(
          Be.exports.sortBy(
            o.situation.alarms,
            (K) => Number(K.lastEventTime) - Number(K.firstEventTime)
          )
        );
        y.value = H;
      }
    }, F = () => {
      c.value += 100, B.value = g();
    }, M = () => {
      c.value -= 100, B.value = g();
    }, E = () => {
      c.value = f.value, B.value = g();
    }, T = (P) => {
      s.value = P;
    }, x = () => {
      s.value = 0;
    };
    return (P, H) => {
      var K, Me;
      return dr(), Ei(z_, null, [
        An("div", CU, [
          An("div", {
            class: vU(["severity-line", [`${(Me = (K = o.situation) == null ? void 0 : K.severity) == null ? void 0 : Me.toLowerCase()}-bg dark`]])
          }, null, 2),
          An("div", null, [
            An("div", VU, "Situation " + bs(o.situation.id), 1),
            An("div", null, " Duration: " + bs(fn(Qu)(m.value, new Date(b.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (dr(), Ei("div", SU, [
          EU,
          An("div", kU, [
            Cs(fn(a7), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                H[0] || (H[0] = (pe) => u.value = pe),
                N
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            An("div", IU, [
              AU,
              An("div", null, [
                Cs(fn(X), {
                  icon: fn(v7),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                Cs(fn(X), {
                  icon: fn(S1),
                  class: "zoom-icon",
                  onClick: E
                }, null, 8, ["icon"]),
                Cs(fn(X), {
                  icon: fn(iU),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (dr(), Ei("div", {
            key: 0,
            class: "alarms",
            style: gU({
              width: f.value + 50 + "px"
            })
          }, [
            An("div", TU, [
              An("div", null, bs(fn(Bo)(b.value)), 1),
              An("div", null, bs(fn(Bo)(m.value)), 1)
            ]),
            e.situation.events ? (dr(), Ei("div", xU, [
              (dr(!0), Ei(z_, null, _U(y.value, (pe) => (dr(), Ei("div", {
                class: "timeline",
                key: pe.id
              }, [
                An("div", LU, [
                  y0(bs(pe.nodeLabel) + " - " + bs(pe.id) + " ", 1),
                  s.value === pe.id ? (dr(), q_(fn(X), {
                    key: 0,
                    icon: fn(cl),
                    class: "zoom-icon expand",
                    onClick: x
                  }, null, 8, ["icon"])) : (dr(), q_(fn(X), {
                    key: 1,
                    icon: fn(t1),
                    class: "zoom-icon expand",
                    onClick: () => T(pe.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Cs(Z7, {
                  alarm: pe,
                  proportion: B.value,
                  "min-start": b.value,
                  events: o.situation.events[pe.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === pe.id ? (dr(), Ei("div", MU, [
                  Cs(mU, {
                    events: o.situation.events[pe.id]
                  }, null, 8, ["events"])
                ])) : bu("", !0)
              ]))), 128))
            ])) : bu("", !0)
          ], 4)) : bu("", !0)
        ])) : bu("", !0)
      ], 64);
    };
  }
});
const OU = /* @__PURE__ */ Se(DU, [["__scopeId", "data-v-57b5ddda"]]), BU = window.Vue.defineComponent, hn = window.Vue.createElementVNode, fo = window.Vue.unref, Ht = window.Vue.createTextVNode, Vs = window.Vue.withCtx, tt = window.Vue.openBlock, RU = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, Rr = window.Vue.createVNode, at = window.Vue.createElementBlock, PU = window.Vue.resolveComponent, ki = window.Vue.toDisplayString, G_ = window.Vue.renderList, Y_ = window.Vue.Fragment, FU = window.Vue.pushScopeId, UU = window.Vue.popScopeId, na = (e) => (FU("data-v-8418d0e3"), e = e(), UU(), e), WU = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, HU = { class: "header" }, zU = /* @__PURE__ */ na(() => /* @__PURE__ */ hn("h3", null, "AI Suggestions", -1)), qU = { class: "header-actions" }, GU = /* @__PURE__ */ Ht(" Re-evaluate "), YU = /* @__PURE__ */ Ht(" Refresh "), jU = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, ZU = /* @__PURE__ */ na(() => /* @__PURE__ */ hn("span", null, "Loading\u2026", -1)), KU = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, JU = /* @__PURE__ */ na(() => /* @__PURE__ */ hn("span", null, "Requesting a fresh analysis\u2026", -1)), XU = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, QU = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, e9 = /* @__PURE__ */ Ht(" The LLM integration is currently disabled. Enable it on the "), t9 = /* @__PURE__ */ Ht("configuration page"), n9 = /* @__PURE__ */ Ht(" to start generating suggestions for new situations. "), o9 = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, r9 = /* @__PURE__ */ Ht(" No API key is configured. Add one on the "), i9 = /* @__PURE__ */ Ht("configuration page"), s9 = /* @__PURE__ */ Ht(" to enable AI suggestions. "), a9 = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, l9 = /* @__PURE__ */ Ht(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), u9 = /* @__PURE__ */ na(() => /* @__PURE__ */ hn("strong", null, "Re-evaluate", -1)), c9 = /* @__PURE__ */ Ht(" above to trigger one now. "), d9 = [
  l9,
  u9,
  c9
], f9 = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, p9 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, h9 = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, m9 = { class: "failed-msg" }, w9 = /* @__PURE__ */ Ht(" The last LLM request failed: "), v9 = /* @__PURE__ */ Ht(" Retry "), _9 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, g9 = /* @__PURE__ */ Ht(" Could not load suggestions. Please retry. "), $9 = /* @__PURE__ */ Ht("Retry"), y9 = {
  key: 6,
  "data-test": "ai-ready"
}, b9 = {
  key: 0,
  class: "meta"
}, C9 = /* @__PURE__ */ Ht(" Generated by "), V9 = { class: "section" }, S9 = /* @__PURE__ */ na(() => /* @__PURE__ */ hn("h4", null, "Probable root causes", -1)), E9 = {
  key: 0,
  "data-test": "ai-root-causes"
}, k9 = {
  key: 1,
  class: "empty"
}, I9 = { class: "section" }, A9 = /* @__PURE__ */ na(() => /* @__PURE__ */ hn("h4", null, "Possible resolutions", -1)), T9 = {
  key: 0,
  "data-test": "ai-resolutions"
}, x9 = {
  key: 1,
  class: "empty"
}, Vf = window.Vue.computed, L9 = window.Vue.onBeforeUnmount, M9 = window.Vue.onMounted, Sf = window.Vue.ref, N9 = /* @__PURE__ */ BU({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = Gr(), s = Sf("loading"), a = Sf(null), u = Sf(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const T = await Bg(o.situationId);
      if (T === !1) {
        s.value = "error";
        return;
      }
      if (T === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = T, s.value = T.status;
    }, B = async () => {
      s.value = "loading", g(), await b(), y();
    }, N = async () => {
      u.value = null, s.value = "reanalyzing", g();
      const T = await Xk(o.situationId);
      if (T === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = T, s.value = T.status, y();
    };
    M9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await b(), y();
    }), L9(() => g());
    const F = Vf(() => {
      var T;
      return (T = a.value) != null && T.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), M = Vf(() => {
      const T = r.llmConfig;
      return !T || !T.enabled ? "disabled" : T.apiKeyPresent ? "not-yet-run" : "no-key";
    }), E = Vf(
      () => {
        var T, x;
        return ((T = r.llmConfig) == null ? void 0 : T.enabled) === !0 && ((x = r.llmConfig) == null ? void 0 : x.apiKeyPresent) === !0;
      }
    );
    return (T, x) => {
      var A;
      const U = PU("router-link");
      return tt(), at("div", WU, [
        hn("div", HU, [
          zU,
          hn("div", qU, [
            fo(E) ? (tt(), RU(fo(ve), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: N
            }, {
              default: Vs(() => [
                GU
              ]),
              _: 1
            }, 8, ["disabled"])) : Cu("", !0),
            Rr(fo(ve), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: B
            }, {
              default: Vs(() => [
                YU
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (tt(), at("div", jU, [
          Rr(fo(Ds)),
          ZU
        ])) : s.value === "reanalyzing" ? (tt(), at("div", KU, [
          Rr(fo(Ds)),
          JU
        ])) : s.value === "absent" ? (tt(), at("div", XU, [
          fo(M) === "disabled" ? (tt(), at("span", QU, [
            e9,
            Rr(U, { to: "/settings" }, {
              default: Vs(() => [
                t9
              ]),
              _: 1
            }),
            n9
          ])) : fo(M) === "no-key" ? (tt(), at("span", o9, [
            r9,
            Rr(U, { to: "/settings" }, {
              default: Vs(() => [
                i9
              ]),
              _: 1
            }),
            s9
          ])) : (tt(), at("span", a9, d9)),
          u.value ? (tt(), at("div", f9, ki(u.value), 1)) : Cu("", !0)
        ])) : s.value === "pending" ? (tt(), at("div", p9, [
          Rr(fo(Ds)),
          hn("span", null, " Analyzing alarms with the LLM\u2026 requested at " + ki(fo(F)) + ". ", 1)
        ])) : s.value === "failed" ? (tt(), at("div", h9, [
          hn("div", m9, [
            w9,
            hn("code", null, ki(((A = a.value) == null ? void 0 : A.error) || "unknown error"), 1)
          ]),
          Rr(fo(ve), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: B
          }, {
            default: Vs(() => [
              v9
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (tt(), at("div", _9, [
          g9,
          Rr(fo(ve), {
            secondary: "",
            onClick: B
          }, {
            default: Vs(() => [
              $9
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (tt(), at("div", y9, [
          a.value.completedAt ? (tt(), at("div", b9, [
            C9,
            hn("strong", null, ki(a.value.model), 1),
            Ht(" at " + ki(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Cu("", !0),
          hn("div", V9, [
            S9,
            a.value.rootCauses.length ? (tt(), at("ol", E9, [
              (tt(!0), at(Y_, null, G_(a.value.rootCauses, (P, H) => (tt(), at("li", {
                key: `cause-${H}`
              }, ki(P), 1))), 128))
            ])) : (tt(), at("div", k9, "No root causes returned."))
          ]),
          hn("div", I9, [
            A9,
            a.value.resolutions.length ? (tt(), at("ol", T9, [
              (tt(!0), at(Y_, null, G_(a.value.resolutions, (P, H) => (tt(), at("li", {
                key: `res-${H}`
              }, ki(P), 1))), 128))
            ])) : (tt(), at("div", x9, "No resolutions returned."))
          ])
        ])) : Cu("", !0)
      ]);
    };
  }
});
const D9 = /* @__PURE__ */ Se(N9, [["__scopeId", "data-v-8418d0e3"]]), O9 = window.Vue.openBlock, B9 = window.Vue.createElementBlock, R9 = window.Vue.createElementVNode;
var P9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F9 = {}, U9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W9 = /* @__PURE__ */ R9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), H9 = [
  W9
];
function z9(e, o) {
  return O9(), B9("svg", U9, H9);
}
var Rs = /* @__PURE__ */ P9(F9, [["render", z9]]);
const b0 = window.Vue.defineComponent, Ef = window.Vue.ref, q9 = window.Vue.toRef, kf = window.Vue.inject, j_ = window.Vue.watch, G9 = window.Vue.nextTick, Z_ = window.Vue.openBlock, K_ = window.Vue.createElementBlock, If = window.Vue.createElementVNode, Y9 = window.Vue.normalizeClass, J_ = window.Vue.renderSlot, X_ = window.Vue.createCommentVNode, Af = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var j9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Z9 = {
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
}, K9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, J9 = b0({
  emits: K9,
  props: Z9,
  setup(e, o) {
    const r = Ef(), s = Ef(!1), a = Ef(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = q9(e, "modelValue"), f = kf("queueSnackbar", !1), m = kf("unqueueSnackbar", !1), v = kf("nextSnackbar", () => {
    }), g = (F, M) => {
      let E, T, x = M;
      const U = () => {
        !E || (Bi(E), E = 0, x -= Date.now() - T);
      }, A = () => {
        E || (T = Date.now(), E = Oi(F, x));
      };
      return A(), { pause: U, resume: A };
    }, y = () => {
      s.value = !1, o.emit("closed"), v && v();
    }, b = (F) => {
      F.keyCode === ce.ESCAPE && (a.value = !1);
    }, B = () => {
      r.value.pause();
    }, N = () => {
      a.value && r.value.resume();
    };
    return j_(c, (F) => {
      F ? G9(() => {
        f === !1 ? a.value = F : f(u, a);
      }) : m === !1 ? a.value = F : m(u);
    }, { immediate: !0 }), j_(a, (F) => {
      F ? (s.value = !0, r.value = g(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), B());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: y,
      keyPressed: b,
      stopTimer: B,
      resumeTimer: N
    };
  }
}), X9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, Q9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, eW = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, tW = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function nW(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (Z_(), K_("div", X9, [
    If("div", {
      class: Y9(["feather-snackbar", {
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
      If("div", Q9, [
        e.contentShow ? (Z_(), K_("div", eW, [
          J_(e.$slots, "default", {}, void 0, !0)
        ])) : X_("", !0)
      ]),
      If("div", tW, [
        J_(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : X_("", !0);
}
var hc = /* @__PURE__ */ j9(J9, [["render", nW], ["__scopeId", "data-v-5cf64a62"]]);
const oW = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
b0({
  props: oW,
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
const rW = window.Vue.defineComponent, Je = window.Vue.unref, Ut = window.Vue.createVNode, al = window.Vue.createElementVNode, pn = window.Vue.withCtx, Ii = window.Vue.openBlock, Tf = window.Vue.createBlock, Q_ = window.Vue.createCommentVNode, fl = window.Vue.createTextVNode, Vu = window.Vue.createElementBlock, eg = window.Vue.toDisplayString, iW = window.Vue.pushScopeId, sW = window.Vue.popScopeId, Cp = (e) => (iW("data-v-9209a241"), e = e(), sW(), e), aW = { id: "cont" }, lW = { class: "btns-navigation" }, uW = /* @__PURE__ */ Cp(() => /* @__PURE__ */ al("span", null, "Situation List", -1)), cW = /* @__PURE__ */ Cp(() => /* @__PURE__ */ al("span", null, "Show Previous Situation ", -1)), dW = /* @__PURE__ */ Cp(() => /* @__PURE__ */ al("span", null, "Show Next Situation", -1)), fW = { key: 1 }, pW = {
  key: 0,
  class: "detail"
}, hW = /* @__PURE__ */ fl("Details"), mW = /* @__PURE__ */ fl("Metrics"), wW = /* @__PURE__ */ fl("AI Suggestions"), vW = {
  key: 1,
  class: "noSituation"
}, _W = /* @__PURE__ */ fl("dismiss"), Ai = window.Vue.ref, tg = window.Vue.watch, gW = window.Vue.onMounted, $W = window.VueRouter.useRoute, yW = /* @__PURE__ */ rW({
  __name: "SituationDetail",
  setup(e) {
    const o = Kr(), r = $W(), s = parseInt(r.params.id), a = Ai(s), u = wo(), c = dc(), f = Ai(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const m = Ai(), v = Ai(), g = Ai(!0), y = Ai(
      u.filteredSituations.findIndex((M) => M === a.value)
    ), b = Ai(!1);
    tg(
      () => u.situationDetail,
      () => {
        m.value = u.situationDetail, g.value = !1, u.getUnassignedAlarms();
      }
    ), gW(() => {
      var E;
      const M = ((E = document.getElementById("cont")) == null ? void 0 : E.getBoundingClientRect().width) || 1200;
      v.value = M - 90;
    });
    const B = () => {
      o.push({
        name: "situations"
      });
    }, N = (M) => {
      const E = y.value, T = u.filteredSituations[E + M];
      o.push({
        name: "situationDetail",
        params: {
          id: T
        }
      });
    };
    tg(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((M) => M == a.value);
    }), c.$subscribe((M, E) => {
      b.value = E.showError;
    });
    const F = (M) => {
      f.value = M || 0;
    };
    return (M, E) => (Ii(), Vu("div", aW, [
      al("div", lW, [
        Ut(Je(ve), {
          primary: "",
          onClick: E[0] || (E[0] = () => B())
        }, {
          default: pn(() => [
            Ut(Je(X), {
              icon: Je(Rs),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            uW
          ]),
          _: 1
        }),
        al("div", null, [
          Ut(Je(ve), {
            disabled: !Je(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: E[1] || (E[1] = () => N(-1))
          }, {
            default: pn(() => [
              Ut(Je(X), {
                icon: Je(Rs),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              cW
            ]),
            _: 1
          }, 8, ["disabled"]),
          Ut(Je(ve), {
            disabled: !Je(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: E[2] || (E[2] = () => N(1))
          }, {
            default: pn(() => [
              dW,
              Ut(Je(X), {
                icon: Je(Rs),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      g.value ? (Ii(), Tf(Je(Ds), {
        key: 0,
        class: "spinner"
      })) : (Ii(), Vu("div", fW, [
        m.value ? (Ii(), Vu("div", pW, [
          Ut(Je(W1), { "onUpdate:modelValue": F }, {
            tabs: pn(() => [
              Ut(Je(Os), null, {
                default: pn(() => [
                  hW
                ]),
                _: 1
              }),
              Ut(Je(Os), null, {
                default: pn(() => [
                  mW
                ]),
                _: 1
              }),
              Ut(Je(Os), { "data-test": "ai-suggestions-tab" }, {
                default: pn(() => [
                  wW
                ]),
                _: 1
              })
            ]),
            default: pn(() => [
              Ut(Je(Bs), { class: "panel" }, {
                default: pn(() => [
                  Ut(P6, { "situation-info": m.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Ut(Je(Bs), { class: "panel" }, {
                default: pn(() => [
                  v.value && f.value == 1 ? (Ii(), Tf(OU, {
                    key: 0,
                    situation: m.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Q_("", !0)
                ]),
                _: 1
              }),
              Ut(Je(Bs), { class: "panel" }, {
                default: pn(() => [
                  f.value == 2 ? (Ii(), Tf(D9, {
                    key: 0,
                    "situation-id": m.value.id
                  }, null, 8, ["situation-id"])) : Q_("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Ii(), Vu("div", vW, " Error. The situation " + eg(Je(s)) + " does not exist. ", 1))
      ])),
      Ut(Je(hc), {
        modelValue: b.value,
        "onUpdate:modelValue": E[4] || (E[4] = (T) => b.value = T),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: pn(() => [
          Ut(Je(ve), {
            onClick: E[3] || (E[3] = (T) => b.value = !1),
            text: ""
          }, {
            default: pn(() => [
              _W
            ]),
            _: 1
          })
        ]),
        default: pn(() => [
          fl(eg(Je(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const bW = /* @__PURE__ */ Se(yW, [["__scopeId", "data-v-9209a241"]]), CW = window.Vue.defineComponent, It = window.Vue.unref, zn = window.Vue.createVNode, nn = window.Vue.createElementVNode, Ss = window.Vue.withCtx, Es = window.Vue.openBlock, qa = window.Vue.createElementBlock, VW = window.Vue.createCommentVNode, SW = window.Vue.toDisplayString, Vp = window.Vue.createTextVNode, EW = window.Vue.normalizeClass, kW = window.Vue.renderList, IW = window.Vue.Fragment, AW = window.Vue.createBlock, TW = window.Vue.pushScopeId, xW = window.Vue.popScopeId, pl = (e) => (TW("data-v-00de2cfc"), e = e(), xW(), e), LW = { class: "container" }, MW = /* @__PURE__ */ pl(() => /* @__PURE__ */ nn("span", null, "Situation List", -1)), NW = /* @__PURE__ */ pl(() => /* @__PURE__ */ nn("h2", null, "New Situation", -1)), DW = { class: "form" }, OW = { class: "fields" }, BW = {
  key: 0,
  class: "errorList"
}, RW = { class: "footer" }, PW = /* @__PURE__ */ pl(() => /* @__PURE__ */ nn("span", null, "Clear", -1)), FW = /* @__PURE__ */ pl(() => /* @__PURE__ */ nn("span", null, "Add Situation", -1)), UW = { class: "alarm-column" }, WW = { class: "header-alarms" }, HW = /* @__PURE__ */ pl(() => /* @__PURE__ */ nn("h3", null, "Add Unassociated Alarms", -1)), zW = /* @__PURE__ */ Vp(" Total Alarms Added: "), qW = { class: "total" }, GW = { class: "list" }, YW = { class: "filters" }, jW = {
  key: 0,
  class: "alarms"
}, ZW = /* @__PURE__ */ Vp(" Error on creating new situation :( "), KW = /* @__PURE__ */ Vp("dismiss"), Pr = window.Vue.ref, JW = window.Vue.watch, XW = /* @__PURE__ */ CW({
  __name: "AddSituation",
  setup(e) {
    const o = Kr(), r = wo(), s = Pr(), a = Pr(""), u = Pr(), c = Pr(""), f = Pr([]), m = Pr(!1), v = Pr(), g = Pr(r.unassignedAlarms);
    g.value.length || r.getUnassignedAlarms(), JW(
      () => r.unassignedAlarms,
      () => {
        g.value = r.unassignedAlarms;
      }
    );
    const y = () => {
      o.push({
        name: "situations"
      });
    }, b = (E) => {
      m.value = !1, Be.exports.includes(f.value, E) ? Be.exports.remove(f.value, (T) => T === E) : f.value.push(E);
    }, B = () => {
      const E = "This field should not be empty";
      let T = !0;
      return s.value || (a.value = E, T = !1), u.value || (c.value = E, T = !1), f.value.length < 2 && (m.value = !0, T = !1), T;
    }, N = async () => {
      if (B()) {
        const E = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await tI(E) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, F = () => {
      s.value = "", u.value = "", f.value = [], g.value = r.unassignedAlarms;
    }, M = (E) => {
      g.value = E;
    };
    return (E, T) => (Es(), qa("div", LW, [
      zn(It(ve), {
        primary: "",
        onClick: T[0] || (T[0] = () => y()),
        class: "back-btn"
      }, {
        default: Ss(() => [
          zn(It(X), {
            icon: It(Rs),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          MW
        ]),
        _: 1
      }),
      NW,
      nn("div", DW, [
        nn("div", OW, [
          zn(It(zu), {
            modelValue: s.value,
            "onUpdate:modelValue": T[1] || (T[1] = (x) => s.value = x),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          zn(It(zu), {
            modelValue: u.value,
            "onUpdate:modelValue": T[2] || (T[2] = (x) => u.value = x),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          m.value ? (Es(), qa("div", BW, " You must add at least 2 alarms. ")) : VW("", !0),
          nn("div", RW, [
            zn(It(ve), {
              class: "btn",
              onClick: F
            }, {
              default: Ss(() => [
                zn(It(X), {
                  icon: It(qs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                PW
              ]),
              _: 1
            }),
            zn(It(ve), {
              class: "btn-add",
              onClick: N
            }, {
              default: Ss(() => [
                zn(It(X), {
                  icon: It(cc),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                FW
              ]),
              _: 1
            })
          ])
        ]),
        nn("div", UW, [
          nn("div", WW, [
            HW,
            nn("div", null, [
              nn("div", {
                class: EW(["totalAlarms", { errorList: m.value }])
              }, [
                zW,
                nn("span", qW, SW(It(f).length), 1)
              ], 2)
            ])
          ]),
          nn("div", GW, [
            nn("div", YW, [
              zn(Qs, {
                list: It(r).unassignedAlarms,
                onFilteredList: M,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            g.value.length ? (Es(), qa("div", jW, [
              (Es(!0), qa(IW, null, kW(g.value, (x) => (Es(), qa("div", {
                key: x.id,
                class: "alarm-card"
              }, [
                zn(bp, {
                  selected: It(Be.exports.includes)(It(f), x.id),
                  alarm: x,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Es(), AW(ea, { key: 1 }))
          ])
        ])
      ]),
      zn(It(hc), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (x) => v.value = x),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Ss(() => [
          zn(It(ve), {
            onClick: T[3] || (T[3] = (x) => v.value = !1),
            text: ""
          }, {
            default: Ss(() => [
              KW
            ]),
            _: 1
          })
        ]),
        default: Ss(() => [
          ZW
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const QW = /* @__PURE__ */ Se(XW, [["__scopeId", "data-v-00de2cfc"]]), eH = window.Vue.defineComponent, tH = window.Vue.createElementVNode, nH = window.Vue.createTextVNode, oH = window.Vue.unref, rH = window.Vue.withCtx, iH = window.Vue.createVNode, sH = window.Vue.Fragment, aH = window.Vue.openBlock, lH = window.Vue.createElementBlock, uH = window.Vue.pushScopeId, cH = window.Vue.popScopeId, dH = (e) => (uH("data-v-bcb7dcc6"), e = e(), cH(), e), fH = /* @__PURE__ */ dH(() => /* @__PURE__ */ tH("div", { class: "main" }, "Something bad is happening...", -1)), pH = /* @__PURE__ */ nH(" Reload "), hH = /* @__PURE__ */ eH({
  __name: "ErrorPage",
  setup(e) {
    const o = Kr(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (aH(), lH(sH, null, [
      fH,
      iH(oH(ve), {
        primary: "",
        onClick: r
      }, {
        default: rH(() => [
          pH
        ]),
        _: 1
      })
    ], 64));
  }
});
const mH = /* @__PURE__ */ Se(hH, [["__scopeId", "data-v-bcb7dcc6"]]), wH = window.Vue.defineComponent, Qt = window.Vue.unref, po = window.Vue.createVNode, Hr = window.Vue.createElementVNode, Ga = window.Vue.withCtx, Ti = window.Vue.openBlock, ng = window.Vue.createBlock, vH = window.Vue.renderList, _H = window.Vue.Fragment, Ya = window.Vue.createElementBlock, gH = window.Vue.toDisplayString, C0 = window.Vue.createTextVNode, $H = window.Vue.pushScopeId, yH = window.Vue.popScopeId, Sp = (e) => ($H("data-v-fbf68b2e"), e = e(), yH(), e), bH = { class: "container" }, CH = { class: "nav-btns" }, VH = /* @__PURE__ */ Sp(() => /* @__PURE__ */ Hr("span", null, "Situation List", -1)), SH = /* @__PURE__ */ Sp(() => /* @__PURE__ */ Hr("h2", null, "List Unassociated Alarms", -1)), EH = { class: "content" }, kH = { class: "filters" }, IH = { class: "list" }, AH = { class: "action-btns" }, TH = /* @__PURE__ */ Sp(() => /* @__PURE__ */ Hr("span", null, "Move", -1)), xH = { key: 1 }, LH = {
  key: 0,
  class: "alarms"
}, MH = /* @__PURE__ */ C0("dismiss"), Fr = window.Vue.ref, NH = window.Vue.watch, DH = window.Vue.markRaw, OH = /* @__PURE__ */ wH({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = DH({
      ArrowBack: Rs,
      ExitToApp: Yf
    }), r = Kr(), s = wo();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Fr([]), u = Fr([]), c = Fr(!1), f = Fr(!1), m = Fr(""), v = Fr(!1), g = Fr(!1), y = Fr(!0);
    NH(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, y.value = !1;
      }
    );
    const b = (T) => {
      Be.exports.includes(u.value, T) ? Be.exports.remove(u.value, (x) => x === T) : u.value.push(T);
    }, B = () => {
      c.value ? u.value = a.value.map((T) => T.id) : u.value = [];
    }, N = async (T) => {
      await Pg(T, u.value) ? s.getUnassignedAlarms() : (v.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, F = () => {
      r.push({
        name: "situations"
      });
    }, M = () => {
      u.value.length ? f.value = !0 : (v.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    }, E = (T) => {
      a.value = T;
    };
    return (T, x) => (Ti(), Ya("div", bH, [
      Hr("div", CH, [
        po(Qt(ve), {
          primary: "",
          onClick: x[0] || (x[0] = () => F())
        }, {
          default: Ga(() => [
            po(Qt(X), {
              icon: Qt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            VH
          ]),
          _: 1
        }),
        po(A1)
      ]),
      SH,
      Hr("div", EH, [
        Hr("div", kH, [
          po(Qs, {
            list: Qt(s).unassignedAlarms,
            onFilteredList: E,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Hr("div", IH, [
          Hr("div", AH, [
            po(Qt(Di), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                x[1] || (x[1] = (U) => c.value = U),
                B
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            po(Qt(ve), { onClick: M }, {
              default: Ga(() => [
                po(Qt(X), {
                  icon: Qt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                TH
              ]),
              _: 1
            })
          ]),
          y.value ? (Ti(), ng(Qt(Ds), {
            key: 0,
            class: "spinner"
          })) : (Ti(), Ya("div", xH, [
            Qt(a).length ? (Ti(), Ya("div", LH, [
              (Ti(!0), Ya(_H, null, vH(Qt(a), (U) => (Ti(), Ya("div", {
                key: U.id,
                class: "card"
              }, [
                po(bp, {
                  selected: Qt(Be.exports.includes)(Qt(u), U.id),
                  alarm: U,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ti(), ng(ea, { key: 1 }))
          ]))
        ])
      ]),
      po(f0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: N,
        onDrawerClosed: x[2] || (x[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      po(Qt(hc), {
        modelValue: v.value,
        "onUpdate:modelValue": x[4] || (x[4] = (U) => v.value = U),
        right: "",
        error: g.value,
        timeout: 6e3
      }, {
        button: Ga(() => [
          po(Qt(ve), {
            onClick: x[3] || (x[3] = (U) => v.value = !1),
            text: ""
          }, {
            default: Ga(() => [
              MH
            ]),
            _: 1
          })
        ]),
        default: Ga(() => [
          C0(gH(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const BH = /* @__PURE__ */ Se(OH, [["__scopeId", "data-v-fbf68b2e"]]), RH = window.Vue.defineComponent, xf = window.Vue.unref, PH = window.Vue.createVNode, FH = window.Vue.createElementVNode, UH = window.Vue.withCtx, WH = window.Vue.openBlock, HH = window.Vue.createBlock, zH = window.Vue.pushScopeId, qH = window.Vue.popScopeId, GH = (e) => (zH("data-v-17251e76"), e = e(), qH(), e), YH = /* @__PURE__ */ GH(() => /* @__PURE__ */ FH("span", null, "Situation List", -1)), jH = window.Vue.markRaw, ZH = /* @__PURE__ */ RH({
  __name: "SituationListBtn",
  setup(e) {
    const o = Kr(), r = jH({
      ArrowBack: Rs
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (WH(), HH(xf(ve), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: UH(() => [
        PH(xf(X), {
          icon: xf(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        YH
      ]),
      _: 1
    }));
  }
});
const KH = /* @__PURE__ */ Se(ZH, [["__scopeId", "data-v-17251e76"]]);
var JH = Object.defineProperty, XH = Object.defineProperties, QH = Object.getOwnPropertyDescriptors, og = Object.getOwnPropertySymbols, ez = Object.prototype.hasOwnProperty, tz = Object.prototype.propertyIsEnumerable, rg = (e, o, r) => o in e ? JH(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ls = (e, o) => {
  for (var r in o || (o = {}))
    ez.call(o, r) && rg(e, r, o[r]);
  if (og)
    for (var r of og(o))
      tz.call(o, r) && rg(e, r, o[r]);
  return e;
}, nz = (e, o) => XH(e, QH(o));
const oz = window.Vue.defineComponent, ig = window.Vue.toRef, rz = window.Vue.computed, iz = window.Vue.ref, sg = window.Vue.resolveComponent, ag = window.Vue.openBlock, lg = window.Vue.createElementBlock, ug = window.Vue.mergeProps, cg = window.Vue.createVNode, sz = window.Vue.normalizeClass, Su = window.Vue.withCtx, dg = window.Vue.renderSlot, az = window.Vue.createElementVNode, lz = window.Vue.toHandlers, uz = window.Vue.toDisplayString, cz = window.Vue.createCommentVNode, dz = Ls(Ls({
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
}, nc), Ks), fz = {
  "update:modelValue": (e) => !0
};
var pz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hz = oz({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: fz,
  props: dz,
  setup(e, o) {
    Js(e), oc(e);
    const r = ig(e, "id"), s = rz(() => r.value ? r.value : be("feather-input-label")), a = iz(), { validate: u } = js(s, a, e.label, e.schema, ig(e, "error"));
    return Ls({
      inputId: s,
      internalValue: a,
      validate: u
    }, Zs(o.attrs));
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
      const e = Ls({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), nz(Ls(Ls({}, e), this.listeners), {
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
    InputSubText: Ys,
    InputWrapper: tc
  }
}), mz = ["maxlength"], wz = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function vz(e, o, r, s, a, u) {
  const c = sg("InputWrapper"), f = sg("InputSubText");
  return ag(), lg("div", ug(e.inherittedAttrs, { class: "feather-input-container" }), [
    cg(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: sz(["feather-input-content", e.contentCls])
    }, {
      pre: Su(() => [
        dg(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Su(() => [
        dg(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Su(() => [
        az("input", ug(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, lz(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, mz)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    cg(f, { id: e.descriptionId }, {
      right: Su(() => [
        e.maxlength ? (ag(), lg("div", wz, uz(e.charCount), 1)) : cz("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var xo = /* @__PURE__ */ pz(hz, [["render", vz], ["__scopeId", "data-v-bf37b0d6"]]);
const _z = window.Vue.openBlock, gz = window.Vue.createElementBlock, Ep = window.Vue.createElementVNode;
var $z = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yz = {}, bz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Cz = /* @__PURE__ */ Ep("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), Vz = /* @__PURE__ */ Ep("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), Sz = /* @__PURE__ */ Ep("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ez = [
  Cz,
  Vz,
  Sz
];
function kz(e, o) {
  return _z(), gz("svg", bz, Ez);
}
var Iz = /* @__PURE__ */ $z(yz, [["render", kz]]);
const Az = window.Vue.openBlock, Tz = window.Vue.createElementBlock, V0 = window.Vue.createElementVNode;
var xz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Lz = {}, Mz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Nz = /* @__PURE__ */ V0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), Dz = /* @__PURE__ */ V0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), Oz = [
  Nz,
  Dz
];
function Bz(e, o) {
  return Az(), Tz("svg", Mz, Oz);
}
var Rz = /* @__PURE__ */ xz(Lz, [["render", Bz]]);
const S0 = [
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
], E0 = (e) => {
  const o = (e || "").toLowerCase();
  if (!!o)
    return S0.find((r) => r.matches.some((s) => o.includes(s)));
}, Pz = () => S0, Fz = (e) => {
  var o, r;
  return (r = (o = E0(e)) == null ? void 0 : o.models) != null ? r : [];
}, Uz = window.Vue.defineComponent, se = window.Vue.createVNode, I = window.Vue.createElementVNode, Q = window.Vue.createTextVNode, W = window.Vue.unref, nt = window.Vue.withCtx, qe = window.Vue.openBlock, ot = window.Vue.createElementBlock, At = window.Vue.createCommentVNode, je = window.Vue.toDisplayString, ja = window.Vue.Fragment, Lf = window.Vue.createBlock, fg = window.Vue.renderList, Wz = window.Vue.normalizeClass, Hz = window.Vue.pushScopeId, zz = window.Vue.popScopeId, _e = (e) => (Hz("data-v-857b932d"), e = e(), zz(), e), qz = { class: "container" }, Gz = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), Yz = /* @__PURE__ */ Q("Correlation Engine"), jz = /* @__PURE__ */ Q("LLM Root Cause Analysis"), Zz = /* @__PURE__ */ Q("LLM Setup"), Kz = { class: "section" }, Jz = { class: "title-row" }, Xz = { class: "title" }, Qz = /* @__PURE__ */ Q(" Choose the correlation engine that ALEC will use (see "), eq = ["href"], tq = /* @__PURE__ */ Q(" for more information): "), nq = ["aria-expanded"], oq = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, rq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("ul", null, [
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ I("strong", null, "Clustering"),
    /* @__PURE__ */ Q(" \u2014 the default engine. It runs the DBSCAN algorithm over recent alarms and groups them into a situation when they are close in both time and network topology. Tune how aggressively it groups with the Correlation variables below. ")
  ]),
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ I("strong", null, "Hellinger distance"),
    /* @__PURE__ */ Q(" \u2014 an optional, more refined way for the Clustering engine to measure how far apart two alarms are. Rather than a plain time/topology distance, it compares the statistical distribution of each alarm's surroundings, which helps separate unrelated alarms that merely happen to occur close together. Enable it with the checkbox; it adds two extra tuning variables (Hellinger w and bias). Only the Clustering engine supports it. ")
  ]),
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ I("strong", null, "LLM Based"),
    /* @__PURE__ */ Q(" \u2014 a future engine that would let a large language model drive correlation itself (coming soon). This is separate from "),
    /* @__PURE__ */ I("em", null, "LLM Root Cause Analysis"),
    /* @__PURE__ */ Q(" on the other tab, which explains the situations the Clustering engine already builds. ")
  ])
], -1)), iq = [
  rq
], sq = /* @__PURE__ */ Q("Clustering"), aq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "hellinger" }, [
  /* @__PURE__ */ I("strong", null, "Hellinger distance")
], -1)), lq = /* @__PURE__ */ Q(" LLM Based "), uq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), cq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, dq = { class: "title-row" }, fq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "title" }, "Correlation variables", -1)), pq = ["aria-expanded"], hq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, mq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Alpha (\u03B1)", -1)), wq = /* @__PURE__ */ Q(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), vq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Beta (\u03B2)", -1)), _q = /* @__PURE__ */ Q(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), gq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("code", null, "[0, 1]", -1)), $q = /* @__PURE__ */ Q(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), yq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Epsilon (\u03B5)", -1)), bq = /* @__PURE__ */ Q(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), Cq = { "data-test": "help-hellinger-w" }, Vq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Hellinger w", -1)), Sq = /* @__PURE__ */ Q(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), Eq = { "data-test": "help-hellinger-bias" }, kq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Hellinger bias", -1)), Iq = /* @__PURE__ */ Q(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), Aq = { class: "variables" }, Tq = {
  class: "section",
  "data-test": "llm-section"
}, xq = { class: "title-row" }, Lq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "title" }, "LLM Root Cause Analysis", -1)), Mq = ["aria-expanded"], Nq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-help" }, [
  /* @__PURE__ */ Q(" ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM), shown on each situation's "),
  /* @__PURE__ */ I("em", null, "AI Suggestions"),
  /* @__PURE__ */ Q(" tab. It uses the LLM configured on the "),
  /* @__PURE__ */ I("em", null, "LLM Setup"),
  /* @__PURE__ */ Q(" tab. ")
], -1)), Dq = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, Oq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("p", { class: "help-intro" }, [
  /* @__PURE__ */ Q(" When enabled, ALEC sends each new situation's alarms to the configured LLM and shows up to three probable root causes and resolutions on the situation's "),
  /* @__PURE__ */ I("em", null, "AI Suggestions"),
  /* @__PURE__ */ Q(" tab. ")
], -1)), Bq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("ul", null, [
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ I("em", null, "Automatically AI Evaluate new situations"),
    /* @__PURE__ */ Q(": when on, every new situation is analyzed as it is created; when off, analysis runs only when you click "),
    /* @__PURE__ */ I("em", null, "Re-evaluate"),
    /* @__PURE__ */ Q(" on a situation's AI Suggestions tab. ")
  ]),
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ Q(" Customize the "),
    /* @__PURE__ */ I("em", null, "System prompt"),
    /* @__PURE__ */ Q(" below to add site-specific context (topology, naming conventions, escalation policy). ")
  ]),
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ Q(" Requires a configured LLM \u2014 set the endpoint, model and API key on the "),
    /* @__PURE__ */ I("em", null, "LLM Setup"),
    /* @__PURE__ */ Q(" tab first. ")
  ])
], -1)), Rq = [
  Oq,
  Bq
], Pq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "LLM Enabled Root Cause Analysis", -1)), Fq = /* @__PURE__ */ Q(" Automatically AI Evaluate new situations "), Uq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, Wq = /* @__PURE__ */ Q(" No valid LLM is configured. Go to the "), Hq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "LLM Setup", -1)), zq = /* @__PURE__ */ Q(" tab and set an endpoint, model and API key first. "), qq = [
  Wq,
  Hq,
  zq
], Gq = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, Yq = { class: "llm-prompt-header" }, jq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-prompt-label" }, "System prompt", -1)), Zq = ["disabled"], Kq = /* @__PURE__ */ Q(" Reset to default "), Jq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), Xq = {
  class: "section",
  "data-test": "llm-setup-section"
}, Qq = { class: "title-row" }, eG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "title" }, "LLM Setup", -1)), tG = ["aria-expanded"], nG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-help" }, " Configure the LLM connection shared by ALEC's LLM features (root cause analysis and, later, LLM-based clustering). ALEC works with any OpenAI-compatible, API-enabled LLM \u2014 commercial or locally hosted \u2014 and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), oG = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-setup-help-popover"
}, rG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("ul", null, [
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ Q(" Point ALEC at any service exposing an OpenAI-compatible "),
    /* @__PURE__ */ I("code", null, "/chat/completions"),
    /* @__PURE__ */ Q(" API \u2014 a hosted provider (OpenAI, Anthropic, OpenRouter, \u2026) or a local server (LM Studio, Ollama, \u2026). The Endpoint and Model "),
    /* @__PURE__ */ I("em", null, "\u25BE"),
    /* @__PURE__ */ Q(" menus list common choices, but you can type any value. ")
  ]),
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ Q(" The model must support "),
    /* @__PURE__ */ I("em", null, "tool/function calling"),
    /* @__PURE__ */ Q(". Click "),
    /* @__PURE__ */ I("em", null, "Validate key"),
    /* @__PURE__ */ Q(" to confirm the endpoint, model and key work before saving. ")
  ]),
  /* @__PURE__ */ I("li", null, " The API key is stored on the OpenNMS server and never shown again. "),
  /* @__PURE__ */ I("li", null, [
    /* @__PURE__ */ Q(" Set an optional "),
    /* @__PURE__ */ I("em", null, "Daily"),
    /* @__PURE__ */ Q(" or "),
    /* @__PURE__ */ I("em", null, "Monthly token limit"),
    /* @__PURE__ */ Q(" to cap spend \u2014 when usage reaches a limit ALEC stops sending LLM requests until the period resets. 0 means no limit. ")
  ])
], -1)), iG = [
  rG
], sG = { class: "llm-field-block" }, aG = { class: "llm-field-header" }, lG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), uG = { class: "llm-field-actions" }, cG = ["disabled"], dG = /* @__PURE__ */ Q(" Reset to default "), fG = ["disabled"], pG = /* @__PURE__ */ Q(" Set as default "), hG = { class: "llm-combo" }, mG = ["aria-expanded"], wG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, vG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("li", { class: "llm-combo-hint" }, "Common providers \u2014 or type your own", -1)), _G = ["onClick"], gG = { class: "llm-combo-item-main" }, $G = { class: "llm-combo-item-sub" }, yG = { class: "llm-field-block" }, bG = { class: "llm-field-header" }, CG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-field-label" }, "Model", -1)), VG = { class: "llm-field-actions" }, SG = ["disabled"], EG = /* @__PURE__ */ Q(" Reset to default "), kG = ["disabled"], IG = /* @__PURE__ */ Q(" Set as default "), AG = { class: "llm-combo" }, TG = ["aria-expanded"], xG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, LG = { class: "llm-combo-hint" }, MG = ["onClick"], NG = { class: "llm-combo-item-main" }, DG = {
  key: 1,
  class: "llm-combo-hint"
}, OG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ Q(" Your API key must come from the same provider as the Endpoint above \u2014 an Anthropic key ("),
  /* @__PURE__ */ I("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ Q(") for "),
  /* @__PURE__ */ I("code", null, "api.anthropic.com"),
  /* @__PURE__ */ Q(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ I("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ Q(") for "),
  /* @__PURE__ */ I("code", null, "openrouter.ai"),
  /* @__PURE__ */ Q(", or an OpenAI key for "),
  /* @__PURE__ */ I("code", null, "api.openai.com"),
  /* @__PURE__ */ Q(". ")
], -1)), BG = { class: "llm-key-row" }, RG = /* @__PURE__ */ Q(" Clear Key "), PG = { class: "llm-validate-row" }, FG = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, UG = {
  key: 1,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, WG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), HG = {
  key: 2,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, zG = {
  class: "llm-field-block llm-limits",
  "data-test": "llm-token-limits"
}, qG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-field-label" }, "Token budget (0 = no limit)", -1)), GG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-prompt-help" }, " Caps total LLM tokens ALEC may consume. When a limit is reached, ALEC stops sending LLM requests until the day/month resets and warns on the main page. ", -1)), YG = { class: "variables" }, jG = {
  key: 3,
  class: "llm-usage",
  "data-test": "llm-usage"
}, ZG = { class: "usage-summary" }, KG = { class: "usage-label" }, JG = ["title"], XG = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, QG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Input", -1)), eY = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Output", -1)), tY = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Cache read", -1)), nY = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Cache create", -1)), oY = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Calls", -1)), rY = { class: "muted" }, iY = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Cache hit", -1)), sY = { class: "action-row" }, aY = /* @__PURE__ */ Q(" Close All Open Situations "), lY = /* @__PURE__ */ Q(" Re-Evaluate All Open Alarms "), uY = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", null, "Save Changes", -1)), cY = /* @__PURE__ */ Q("dismiss"), qn = window.Vue.computed, dY = window.Vue.markRaw, fY = window.Vue.onMounted, pY = window.Vue.onUnmounted, Ve = window.Vue.ref, hY = /* @__PURE__ */ Uz({
  __name: "AccountSettings",
  setup(e) {
    var eo, Uo, Wo, Ho, go, $o, gn, St, wr, Xr, Qr, zo, vr, qo, Go, Gt, to, Yo, _r, Fi, ei, yo, ti, bo, Ui, Co, Wi, Hi, Re, no, zi, ni, jo;
    const o = (he) => he >= 1e6 ? (he / 1e6).toFixed(1) + "M" : he >= 1e3 ? (he / 1e3).toFixed(1) + "K" : String(he), r = dY({
      MarkComplete: Hu,
      Help: Iz,
      Restore: Rz,
      ExpandMore: cl
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Gr(), u = Ve(((eo = a.engineInfo) == null ? void 0 : eo.engineName) || Lt.ENGINE_DBSCAN), c = Ve(
      a.engineInfo ? a.engineInfo.distanceMeasureName === Lt.HELLINGER_OPTION : !0
    ), f = Ve((Wo = (Uo = a.engineInfo) == null ? void 0 : Uo.alpha) != null ? Wo : s.alpha), m = Ve((go = (Ho = a.engineInfo) == null ? void 0 : Ho.beta) != null ? go : s.beta), v = Ve((gn = ($o = a.engineInfo) == null ? void 0 : $o.epsilon) != null ? gn : s.epsilon), g = Ve(
      (wr = (St = a.engineInfo) == null ? void 0 : St.hellingerW) != null ? wr : s.hellingerW
    ), y = Ve(
      (Qr = (Xr = a.engineInfo) == null ? void 0 : Xr.hellingerBias) != null ? Qr : s.hellingerBias
    ), b = qn(() => u.value === Lt.ENGINE_DBSCAN), B = qn(() => b.value && c.value), N = Ve((vr = (zo = a.llmConfig) == null ? void 0 : zo.enabled) != null ? vr : !1), F = Ve((Go = (qo = a.llmConfig) == null ? void 0 : qo.autoEvaluate) != null ? Go : !0), M = Ve((to = (Gt = a.llmConfig) == null ? void 0 : Gt.baseUrl) != null ? to : ""), E = Ve((_r = (Yo = a.llmConfig) == null ? void 0 : Yo.model) != null ? _r : ""), T = Ve((ei = (Fi = a.llmConfig) == null ? void 0 : Fi.defaultBaseUrl) != null ? ei : ""), x = Ve((ti = (yo = a.llmConfig) == null ? void 0 : yo.defaultModel) != null ? ti : ""), U = Ve((Ui = (bo = a.llmConfig) == null ? void 0 : bo.dailyTokenLimit) != null ? Ui : 0), A = Ve((Wi = (Co = a.llmConfig) == null ? void 0 : Co.monthlyTokenLimit) != null ? Wi : 0), P = Ve((Re = (Hi = a.llmConfig) == null ? void 0 : Hi.systemPrompt) != null ? Re : ""), H = Ve((zi = (no = a.llmConfig) == null ? void 0 : no.defaultSystemPrompt) != null ? zi : ""), K = qn(
      () => H.value.length > 0 && P.value.trim() !== H.value.trim()
    ), Me = () => {
      P.value = H.value;
    }, pe = qn(
      () => T.value.trim().length > 0 && M.value.trim() !== T.value.trim()
    ), Ae = qn(
      () => x.value.trim().length > 0 && E.value.trim() !== x.value.trim()
    ), Ee = qn(
      () => M.value.trim().length > 0 && M.value.trim() !== T.value.trim()
    ), He = qn(
      () => E.value.trim().length > 0 && E.value.trim() !== x.value.trim()
    ), Ge = () => {
      M.value = T.value;
    }, $e = () => {
      E.value = x.value;
    }, Ze = () => {
      T.value = M.value.trim();
    }, Xe = () => {
      x.value = E.value.trim();
    }, ct = Pz(), on = Ve(!1), _n = Ve(!1), Ce = qn(() => Fz(M.value)), oa = qn(() => E0(M.value)), ra = (he) => {
      M.value = he, on.value = !1;
    }, ia = (he) => {
      E.value = he, _n.value = !1;
    }, Kn = (he) => {
      const Y = he.target;
      (!Y || !Y.closest(".llm-combo")) && (on.value = !1, _n.value = !1);
    }, zt = Ve(""), Mn = Ve((jo = (ni = a.llmConfig) == null ? void 0 : ni.apiKeyPresent) != null ? jo : !1), dt = Ve(!1), Nn = Ve(!1), Jn = Ve(null), Ne = qn(
      () => zt.value.trim().length === 0 && (!Mn.value || dt.value)
    ), vo = async () => {
      Jn.value = null, Nn.value = !0;
      try {
        const he = {
          enabled: N.value,
          autoEvaluate: F.value,
          baseUrl: M.value.trim(),
          model: E.value.trim()
        }, Y = zt.value.trim();
        Y.length > 0 && (he.apiKey = Y), Jn.value = await Jk(he);
      } finally {
        Nn.value = !1;
      }
    }, Fe = qn(
      () => (!Mn.value || dt.value) && zt.value.trim().length === 0
    ), vt = qn(
      () => Fe.value || M.value.trim().length === 0 || E.value.trim().length === 0
    ), Te = () => {
      zt.value = "", dt.value = !0, Mn.value = !1, N.value = !1;
    }, Dn = Ve(!1), Ct = Ve(!1), Ot = Ve(!1), Po = Ve(!1), rn = Ve(!1), Vt = Ve(!1), Xn = Ve(""), _t = Ve(!1);
    fY(async () => {
      var he, Y;
      if (document.addEventListener("mousedown", Kn), a.llmConfig === null) {
        const te = await a.getLLMConfig();
        te && (N.value = te.enabled, F.value = te.autoEvaluate, M.value = te.baseUrl || "", E.value = te.model || "", T.value = te.defaultBaseUrl || "", x.value = te.defaultModel || "", U.value = (he = te.dailyTokenLimit) != null ? he : 0, A.value = (Y = te.monthlyTokenLimit) != null ? Y : 0, H.value = te.defaultSystemPrompt || "", P.value = te.systemPrompt || te.defaultSystemPrompt || "", Mn.value = te.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), pY(() => {
      document.removeEventListener("mousedown", Kn);
    });
    const Fo = () => {
      f.value = s.alpha, m.value = s.beta, v.value = s.epsilon, g.value = s.hellingerW, y.value = s.hellingerBias;
    }, ft = (he, Y) => {
      Xn.value = he, Vt.value = Y, rn.value = !0;
    }, Jr = () => {
      if (dt.value)
        return {
          enabled: !1,
          autoEvaluate: F.value,
          baseUrl: M.value.trim(),
          model: E.value.trim(),
          defaultBaseUrl: T.value.trim(),
          defaultModel: x.value.trim(),
          systemPrompt: P.value,
          dailyTokenLimit: Math.max(0, Number(U.value) || 0),
          monthlyTokenLimit: Math.max(0, Number(A.value) || 0),
          clearApiKey: !0
        };
      const he = zt.value.trim(), Y = {
        enabled: N.value,
        autoEvaluate: F.value,
        baseUrl: M.value.trim(),
        model: E.value.trim(),
        defaultBaseUrl: T.value.trim(),
        defaultModel: x.value.trim(),
        systemPrompt: P.value,
        dailyTokenLimit: Math.max(0, Number(U.value) || 0),
        monthlyTokenLimit: Math.max(0, Number(A.value) || 0)
      };
      return he.length > 0 && (Y.apiKey = he), Y;
    }, Qn = async () => {
      var qi, Bt, oi, Yt, Gi, Yi, ri, gr, Vo, Ko, Jo, oo, So, sn, ii, si, $r, Xo, ji, yr, Qo;
      const he = N.value && !dt.value, Y = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        M.value
      );
      if (he && !Y && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${M.value.trim()}, model ${E.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const te = {
        alpha: Number(f.value),
        beta: Number(m.value),
        epsilon: Number(v.value)
      };
      c.value && (te.hellingerW = Number(g.value), te.hellingerBias = Number(y.value));
      const xe = await a.setEngineInfo(
        u.value,
        c.value,
        te
      ), Zo = await a.setLLMConfig(Jr());
      Zo && (zt.value = "", dt.value = !1, Mn.value = (Bt = (qi = a.llmConfig) == null ? void 0 : qi.apiKeyPresent) != null ? Bt : !1, N.value = (Yt = (oi = a.llmConfig) == null ? void 0 : oi.enabled) != null ? Yt : !1, F.value = (Yi = (Gi = a.llmConfig) == null ? void 0 : Gi.autoEvaluate) != null ? Yi : !0, M.value = (gr = (ri = a.llmConfig) == null ? void 0 : ri.baseUrl) != null ? gr : "", E.value = (Ko = (Vo = a.llmConfig) == null ? void 0 : Vo.model) != null ? Ko : "", T.value = (oo = (Jo = a.llmConfig) == null ? void 0 : Jo.defaultBaseUrl) != null ? oo : "", x.value = (sn = (So = a.llmConfig) == null ? void 0 : So.defaultModel) != null ? sn : "", U.value = (si = (ii = a.llmConfig) == null ? void 0 : ii.dailyTokenLimit) != null ? si : 0, A.value = (Xo = ($r = a.llmConfig) == null ? void 0 : $r.monthlyTokenLimit) != null ? Xo : 0, (ji = a.llmConfig) != null && ji.defaultSystemPrompt && (H.value = a.llmConfig.defaultSystemPrompt), P.value = (Qo = (yr = a.llmConfig) == null ? void 0 : yr.systemPrompt) != null ? Qo : P.value, a.getLLMUsage(30)), xe && Zo ? (a.getEngineInfo(), ft("The settings were saved!", !1)) : ft(
        xe && !Zo ? "Engine settings saved, but LLM configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, qt = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const he = await nI();
      ft(
        he ? "All open situations were closed." : "Failed to close situations.",
        !he
      );
    }, _o = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const he = await oI();
      ft(
        he ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !he
      );
    };
    return (he, Y) => (qe(), ot(ja, null, [
      se(KH),
      I("div", qz, [
        Gz,
        se(W(W1), { "data-test": "config-tabs" }, {
          tabs: nt(() => [
            se(W(Os), { "data-test": "tab-engine" }, {
              default: nt(() => [
                Yz
              ]),
              _: 1
            }),
            se(W(Os), { "data-test": "tab-llm" }, {
              default: nt(() => [
                jz
              ]),
              _: 1
            }),
            se(W(Os), { "data-test": "tab-llm-setup" }, {
              default: nt(() => [
                Zz
              ]),
              _: 1
            })
          ]),
          default: nt(() => [
            se(W(Bs), { class: "config-panel" }, {
              default: nt(() => [
                I("div", Kz, [
                  I("div", Jz, [
                    I("div", Xz, [
                      Qz,
                      I("a", {
                        target: "_blank",
                        href: W(Lt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, eq),
                      tq
                    ]),
                    I("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Ct.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: Y[0] || (Y[0] = (te) => Ct.value = !Ct.value)
                    }, [
                      se(W(X), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, nq)
                  ]),
                  Ct.value ? (qe(), ot("div", oq, iq)) : At("", !0),
                  se(W(V1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": Y[2] || (Y[2] = (te) => u.value = te),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: nt(() => [
                      se(W(qf), {
                        class: "radio-item",
                        value: W(Lt).ENGINE_DBSCAN
                      }, {
                        default: nt(() => [
                          sq
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      se(W(Di), {
                        modelValue: c.value,
                        "onUpdate:modelValue": Y[1] || (Y[1] = (te) => c.value = te),
                        disabled: !W(b),
                        class: "checkbox"
                      }, {
                        default: nt(() => [
                          aq
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      se(W(qf), {
                        class: "radio-item",
                        value: W(Lt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: nt(() => [
                          lq
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      uq
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                W(b) ? (qe(), ot("div", cq, [
                  I("div", dq, [
                    fq,
                    I("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Dn.value,
                      "aria-label": "Show help for correlation variables",
                      "data-test": "variables-help",
                      onClick: Y[3] || (Y[3] = (te) => Dn.value = !Dn.value)
                    }, [
                      se(W(X), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, pq),
                    I("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: Fo
                    }, [
                      se(W(X), {
                        icon: W(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  Dn.value ? (qe(), ot("div", hq, [
                    I("ul", null, [
                      I("li", null, [
                        mq,
                        wq,
                        I("em", null, "Default: " + je(s.alpha), 1)
                      ]),
                      I("li", null, [
                        vq,
                        _q,
                        gq,
                        $q,
                        I("em", null, "Default: " + je(s.beta), 1)
                      ]),
                      I("li", null, [
                        yq,
                        bq,
                        I("em", null, "Default: " + je(s.epsilon), 1)
                      ]),
                      W(B) ? (qe(), ot(ja, { key: 0 }, [
                        I("li", Cq, [
                          Vq,
                          Sq,
                          I("em", null, "Default: " + je(s.hellingerW), 1)
                        ]),
                        I("li", Eq, [
                          kq,
                          Iq,
                          I("em", null, "Default: " + je(s.hellingerBias), 1)
                        ])
                      ], 64)) : At("", !0)
                    ])
                  ])) : At("", !0),
                  I("div", Aq, [
                    se(W(xo), {
                      modelValue: f.value,
                      "onUpdate:modelValue": Y[4] || (Y[4] = (te) => f.value = te),
                      type: "number",
                      label: "Alpha",
                      "data-test": "variable-alpha"
                    }, null, 8, ["modelValue"]),
                    se(W(xo), {
                      modelValue: m.value,
                      "onUpdate:modelValue": Y[5] || (Y[5] = (te) => m.value = te),
                      type: "number",
                      label: "Beta",
                      "data-test": "variable-beta"
                    }, null, 8, ["modelValue"]),
                    se(W(xo), {
                      modelValue: v.value,
                      "onUpdate:modelValue": Y[6] || (Y[6] = (te) => v.value = te),
                      type: "number",
                      label: "Epsilon",
                      "data-test": "variable-epsilon"
                    }, null, 8, ["modelValue"]),
                    W(B) ? (qe(), Lf(W(xo), {
                      key: 0,
                      modelValue: g.value,
                      "onUpdate:modelValue": Y[7] || (Y[7] = (te) => g.value = te),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : At("", !0),
                    W(B) ? (qe(), Lf(W(xo), {
                      key: 1,
                      modelValue: y.value,
                      "onUpdate:modelValue": Y[8] || (Y[8] = (te) => y.value = te),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : At("", !0)
                  ])
                ])) : At("", !0)
              ]),
              _: 1
            }),
            se(W(Bs), { class: "config-panel" }, {
              default: nt(() => [
                I("div", Tq, [
                  I("div", xq, [
                    Lq,
                    I("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Ot.value,
                      "aria-label": "How to get an API key",
                      "data-test": "llm-key-help",
                      onClick: Y[9] || (Y[9] = (te) => Ot.value = !Ot.value)
                    }, [
                      se(W(X), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Mq)
                  ]),
                  Nq,
                  Ot.value ? (qe(), ot("div", Dq, Rq)) : At("", !0),
                  se(W(Di), {
                    modelValue: N.value,
                    "onUpdate:modelValue": Y[10] || (Y[10] = (te) => N.value = te),
                    disabled: W(vt),
                    class: "checkbox",
                    "data-test": "llm-enabled"
                  }, {
                    default: nt(() => [
                      Pq
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"]),
                  se(W(Di), {
                    modelValue: F.value,
                    "onUpdate:modelValue": Y[11] || (Y[11] = (te) => F.value = te),
                    disabled: !N.value,
                    class: "checkbox sub-checkbox",
                    "data-test": "llm-auto-evaluate"
                  }, {
                    default: nt(() => [
                      Fq
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"]),
                  W(vt) ? (qe(), ot("div", Uq, qq)) : At("", !0),
                  I("div", Gq, [
                    I("div", Yq, [
                      jq,
                      I("button", {
                        type: "button",
                        class: "llm-prompt-reset",
                        disabled: !W(K),
                        "data-test": "llm-prompt-reset",
                        onClick: Me
                      }, [
                        se(W(X), {
                          icon: W(r).Restore,
                          class: "reset-inline-icon"
                        }, null, 8, ["icon"]),
                        Kq
                      ], 8, Zq)
                    ]),
                    Jq,
                    se(W(zu), {
                      modelValue: P.value,
                      "onUpdate:modelValue": Y[12] || (Y[12] = (te) => P.value = te),
                      label: "System prompt",
                      hideLabel: "",
                      rows: "12",
                      "data-test": "llm-system-prompt",
                      class: "llm-prompt-textarea"
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ]),
              _: 1
            }),
            se(W(Bs), { class: "config-panel" }, {
              default: nt(() => {
                var te;
                return [
                  I("div", Xq, [
                    I("div", Qq, [
                      eG,
                      I("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": Po.value,
                        "aria-label": "About the shared LLM connection",
                        "data-test": "llm-setup-help",
                        onClick: Y[13] || (Y[13] = (xe) => Po.value = !Po.value)
                      }, [
                        se(W(X), {
                          icon: W(r).Help
                        }, null, 8, ["icon"])
                      ], 8, tG)
                    ]),
                    nG,
                    Po.value ? (qe(), ot("div", oG, iG)) : At("", !0),
                    I("div", sG, [
                      I("div", aG, [
                        lG,
                        I("div", uG, [
                          I("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(pe),
                            "data-test": "llm-base-url-reset",
                            onClick: Ge
                          }, [
                            se(W(X), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            dG
                          ], 8, cG),
                          I("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(Ee),
                            "data-test": "llm-base-url-set-default",
                            onClick: Ze
                          }, [
                            se(W(X), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            pG
                          ], 8, fG)
                        ])
                      ]),
                      I("div", hG, [
                        se(W(xo), {
                          modelValue: M.value,
                          "onUpdate:modelValue": Y[14] || (Y[14] = (xe) => M.value = xe),
                          label: "Endpoint (OpenAI-compatible base URL)",
                          hideLabel: "",
                          "data-test": "llm-base-url",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        I("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": on.value,
                          "aria-label": "Show endpoint suggestions",
                          "data-test": "llm-base-url-suggest",
                          onClick: Y[15] || (Y[15] = (xe) => on.value = !on.value)
                        }, [
                          se(W(X), {
                            icon: W(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, mG),
                        on.value ? (qe(), ot("ul", wG, [
                          vG,
                          (qe(!0), ot(ja, null, fg(W(ct), (xe) => (qe(), ot("li", {
                            key: xe.baseUrl,
                            class: "llm-combo-item",
                            onClick: (Zo) => ra(xe.baseUrl)
                          }, [
                            I("span", gG, je(xe.name), 1),
                            I("span", $G, [
                              I("code", null, je(xe.baseUrl), 1),
                              Q(" \xB7 " + je(xe.keyHint), 1)
                            ])
                          ], 8, _G))), 128))
                        ])) : At("", !0)
                      ])
                    ]),
                    I("div", yG, [
                      I("div", bG, [
                        CG,
                        I("div", VG, [
                          I("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(Ae),
                            "data-test": "llm-model-reset",
                            onClick: $e
                          }, [
                            se(W(X), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            EG
                          ], 8, SG),
                          I("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(He),
                            "data-test": "llm-model-set-default",
                            onClick: Xe
                          }, [
                            se(W(X), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            IG
                          ], 8, kG)
                        ])
                      ]),
                      I("div", AG, [
                        se(W(xo), {
                          modelValue: E.value,
                          "onUpdate:modelValue": Y[16] || (Y[16] = (xe) => E.value = xe),
                          label: "Model",
                          hideLabel: "",
                          "data-test": "llm-model",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        I("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": _n.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: Y[17] || (Y[17] = (xe) => _n.value = !_n.value)
                        }, [
                          se(W(X), {
                            icon: W(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, TG),
                        _n.value ? (qe(), ot("ul", xG, [
                          W(Ce).length ? (qe(), ot(ja, { key: 0 }, [
                            I("li", LG, " Suggested for " + je((te = W(oa)) == null ? void 0 : te.name) + " \u2014 or type your own ", 1),
                            (qe(!0), ot(ja, null, fg(W(Ce), (xe) => (qe(), ot("li", {
                              key: xe.id,
                              class: "llm-combo-item",
                              onClick: (Zo) => ia(xe.id)
                            }, [
                              I("span", NG, [
                                I("code", null, je(xe.id), 1)
                              ])
                            ], 8, MG))), 128))
                          ], 64)) : (qe(), ot("li", DG, " No preset models for this endpoint \u2014 type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : At("", !0)
                      ])
                    ]),
                    OG,
                    I("div", BG, [
                      se(W(xo), {
                        modelValue: zt.value,
                        "onUpdate:modelValue": Y[18] || (Y[18] = (xe) => zt.value = xe),
                        type: "password",
                        autocomplete: "new-password",
                        label: Mn.value && !dt.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      Mn.value && !dt.value ? (qe(), Lf(W(ve), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: Te
                      }, {
                        default: nt(() => [
                          RG
                        ]),
                        _: 1
                      })) : At("", !0)
                    ]),
                    I("div", PG, [
                      se(W(ve), {
                        secondary: "",
                        disabled: Nn.value || W(Ne),
                        "data-test": "llm-validate-btn",
                        onClick: vo
                      }, {
                        default: nt(() => [
                          Q(je(Nn.value ? "Validating\u2026" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      W(Ne) ? (qe(), ot("span", FG, " Enter an API key to validate. ")) : Jn.value ? (qe(), ot("span", {
                        key: 1,
                        class: Wz(["llm-validate-result", Jn.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        se(W(X), {
                          icon: Jn.value.ok ? W(r).MarkComplete : W(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        Q(" " + je(Jn.value.message), 1)
                      ], 2)) : At("", !0)
                    ]),
                    Mn.value && !dt.value ? (qe(), ot("div", UG, [
                      se(W(X), {
                        icon: W(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      WG
                    ])) : At("", !0),
                    dt.value ? (qe(), ot("div", HG, " Stored API key will be removed on save. ")) : At("", !0),
                    I("div", zG, [
                      qG,
                      GG,
                      I("div", YG, [
                        se(W(xo), {
                          modelValue: U.value,
                          "onUpdate:modelValue": Y[19] || (Y[19] = (xe) => U.value = xe),
                          type: "number",
                          label: "Daily token limit",
                          "data-test": "llm-daily-limit"
                        }, null, 8, ["modelValue"]),
                        se(W(xo), {
                          modelValue: A.value,
                          "onUpdate:modelValue": Y[20] || (Y[20] = (xe) => A.value = xe),
                          type: "number",
                          label: "Monthly token limit",
                          "data-test": "llm-monthly-limit"
                        }, null, 8, ["modelValue"])
                      ])
                    ]),
                    W(a).llmUsage ? (qe(), ot("div", jG, [
                      I("div", ZG, [
                        I("span", KG, "Last " + je(W(a).llmUsage.daysWindow) + " days:", 1),
                        I("span", {
                          class: "usage-tokens",
                          title: `${W(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, je(o(W(a).llmUsage.totalTokens)) + " tokens ", 9, JG),
                        I("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: Y[21] || (Y[21] = (xe) => _t.value = !_t.value),
                          "data-test": "llm-usage-toggle"
                        }, je(_t.value ? "hide details" : "show details"), 1)
                      ]),
                      _t.value ? (qe(), ot("dl", XG, [
                        I("div", null, [
                          QG,
                          I("dd", null, je(o(W(a).llmUsage.inputTokens)), 1)
                        ]),
                        I("div", null, [
                          eY,
                          I("dd", null, je(o(W(a).llmUsage.outputTokens)), 1)
                        ]),
                        I("div", null, [
                          tY,
                          I("dd", null, je(o(W(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        I("div", null, [
                          nY,
                          I("dd", null, je(o(W(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        I("div", null, [
                          oY,
                          I("dd", null, [
                            Q(je(W(a).llmUsage.calls) + " ", 1),
                            I("span", rY, "(" + je(W(a).llmUsage.successfulCalls) + " ok / " + je(W(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        I("div", null, [
                          iY,
                          I("dd", null, je((W(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : At("", !0)
                    ])) : At("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        I("div", sY, [
          se(W(ve), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: qt
          }, {
            default: nt(() => [
              aY
            ]),
            _: 1
          }),
          se(W(ve), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: _o
          }, {
            default: nt(() => [
              lY
            ]),
            _: 1
          }),
          se(W(ve), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Qn
          }, {
            default: nt(() => [
              se(W(X), {
                icon: W(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              uY
            ]),
            _: 1
          })
        ]),
        se(W(hc), {
          modelValue: rn.value,
          "onUpdate:modelValue": Y[23] || (Y[23] = (te) => rn.value = te),
          right: "",
          error: Vt.value,
          timeout: 6e3
        }, {
          button: nt(() => [
            se(W(ve), {
              onClick: Y[22] || (Y[22] = (te) => rn.value = !1),
              text: ""
            }, {
              default: nt(() => [
                cY
              ]),
              _: 1
            })
          ]),
          default: nt(() => [
            Q(je(Xn.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const mY = /* @__PURE__ */ Se(hY, [["__scopeId", "data-v-857b932d"]]), wY = window.VueRouter.createRouter, vY = window.VueRouter.createWebHistory, _Y = async () => {
  const e = Gr();
  e.userId || await e.getUserRole();
}, k0 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || I0;
      await Gr().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => _Y(),
    component: JP
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: bW
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: QW
  },
  {
    path: "/error",
    name: "error",
    component: mH
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: BH
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await Gr().getEngineInfo();
    },
    component: mY
  }
], Mf = window.VRouter;
if (Mf) {
  const e = "Plugin-alecUiExtension", o = Mf.hasRoute(e) ? e : "Plugin";
  for (const r of k0) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Mf.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const I0 = wY({
  history: vY(),
  routes: k0
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = EI;
