const Ee = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, yS = {}, bS = window.Vue.resolveComponent, CS = window.Vue.createVNode, VS = window.Vue.openBlock, ES = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const SS = { class: "main" };
function kS(e, o) {
  const r = bS("router-view");
  return VS(), ES("div", SS, [
    CS(r)
  ]);
}
const IS = /* @__PURE__ */ Ee(yS, [["render", kS], ["__scopeId", "data-v-5d32d140"]]), AS = window.Vue.defineComponent, TS = window.Vue.openBlock, xS = window.Vue.createBlock, LS = /* @__PURE__ */ AS({
  __name: "App",
  setup(e) {
    return (o, r) => (TS(), xS(IS));
  }
});
var ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
function Ri(e) {
  return e = e.toLowerCase(), function(r) {
    return Qf(r) === e;
  };
}
function eh(e) {
  return Array.isArray(e);
}
function Nu(e) {
  return typeof e > "u";
}
function DS(e) {
  return e !== null && !Nu(e) && e.constructor !== null && !Nu(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var dg = Ri("ArrayBuffer");
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
function Su(e) {
  if (Qf(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var PS = Ri("Date"), FS = Ri("File"), US = Ri("Blob"), WS = Ri("FileList");
function th(e) {
  return Xf.call(e) === "[object Function]";
}
function HS(e) {
  return fg(e) && th(e.pipe);
}
function zS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Xf.call(e) === o || th(e.toString) && e.toString() === o);
}
var qS = Ri("URLSearchParams");
function GS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function YS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function nh(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), eh(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Nf() {
  var e = {};
  function o(a, u) {
    Su(e[u]) && Su(a) ? e[u] = Nf(e[u], a) : Su(a) ? e[u] = Nf({}, a) : eh(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    nh(arguments[r], o);
  return e;
}
function jS(e, o, r) {
  return nh(o, function(a, u) {
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
  if (Nu(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var ek = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Nt = {
  isArray: eh,
  isArrayBuffer: dg,
  isBuffer: DS,
  isFormData: zS,
  isArrayBufferView: OS,
  isString: BS,
  isNumber: RS,
  isObject: fg,
  isPlainObject: Su,
  isUndefined: Nu,
  isDate: PS,
  isFile: FS,
  isBlob: US,
  isFunction: th,
  isStream: HS,
  isURLSearchParams: qS,
  isStandardBrowserEnv: YS,
  forEach: nh,
  merge: Nf,
  extend: jS,
  trim: GS,
  stripBOM: ZS,
  inherits: KS,
  toFlatObject: JS,
  kindOf: Qf,
  kindOfTest: Ri,
  endsWith: XS,
  toArray: QS,
  isTypedArray: ek,
  isFileList: WS
}, cs = Nt;
function Dm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var hg = function(o, r, s) {
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
}, tk = Nt;
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
  tk.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var nk = Yu, ok = Nt, rk = function(o, r) {
  ok.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, pg = Nt;
function Ps(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
pg.inherits(Ps, Error, {
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
var mg = Ps.prototype, wg = {};
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
Object.defineProperties(Ps, wg);
Object.defineProperty(mg, "isAxiosError", { value: !0 });
Ps.from = function(e, o, r, s, a, u) {
  var c = Object.create(mg);
  return pg.toFlatObject(e, c, function(m) {
    return m !== Error.prototype;
  }), Ps.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Hs = Ps, vg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, lo = Nt;
function ik(e, o) {
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
var _g = ik, yd, Om;
function sk() {
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
function ak() {
  if (Bm)
    return bd;
  Bm = 1;
  var e = Nt;
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
var lk = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, uk = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, ck = lk, dk = uk, gg = function(o, r) {
  return o && !ck(r) ? dk(o, r) : r;
}, Cd, Rm;
function fk() {
  if (Rm)
    return Cd;
  Rm = 1;
  var e = Nt, o = [
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
function hk() {
  if (Pm)
    return Vd;
  Pm = 1;
  var e = Nt;
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
function ju() {
  if (Fm)
    return Ed;
  Fm = 1;
  var e = Hs, o = Nt;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Ed = r, Ed;
}
var Sd, Um;
function pk() {
  return Um || (Um = 1, Sd = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Sd;
}
var kd, Wm;
function Hm() {
  if (Wm)
    return kd;
  Wm = 1;
  var e = Nt, o = sk(), r = ak(), s = hg, a = gg, u = fk(), c = hk(), f = vg, m = Hs, v = ju(), g = pk();
  return kd = function(b) {
    return new Promise(function(N, F) {
      var M = b.data, S = b.headers, T = b.responseType, x;
      function U() {
        b.cancelToken && b.cancelToken.unsubscribe(x), b.signal && b.signal.removeEventListener("abort", x);
      }
      e.isFormData(M) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var A = new XMLHttpRequest();
      if (b.auth) {
        var P = b.auth.username || "", H = b.auth.password ? unescape(encodeURIComponent(b.auth.password)) : "";
        S.Authorization = "Basic " + btoa(P + ":" + H);
      }
      var K = a(b.baseURL, b.url);
      A.open(b.method.toUpperCase(), s(K, b.params, b.paramsSerializer), !0), A.timeout = b.timeout;
      function Me() {
        if (!!A) {
          var Se = "getAllResponseHeaders" in A ? u(A.getAllResponseHeaders()) : null, He = !T || T === "text" || T === "json" ? A.responseText : A.response, Ge = {
            data: He,
            status: A.status,
            statusText: A.statusText,
            headers: Se,
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
        var he = (b.withCredentials || c(K)) && b.xsrfCookieName ? r.read(b.xsrfCookieName) : void 0;
        he && (S[b.xsrfHeaderName] = he);
      }
      "setRequestHeader" in A && e.forEach(S, function(He, Ge) {
        typeof M > "u" && Ge.toLowerCase() === "content-type" ? delete S[Ge] : A.setRequestHeader(Ge, He);
      }), e.isUndefined(b.withCredentials) || (A.withCredentials = !!b.withCredentials), T && T !== "json" && (A.responseType = b.responseType), typeof b.onDownloadProgress == "function" && A.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && A.upload && A.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (x = function(Se) {
        !A || (F(!Se || Se && Se.type ? new v() : Se), A.abort(), A = null);
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
function mk() {
  return zm || (zm = 1, Id = null), Id;
}
var yt = Nt, qm = rk, Gm = Hs, wk = vg, vk = _g, _k = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ym(e, o) {
  !yt.isUndefined(e) && yt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function gk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Hm()), e;
}
function $k(e, o, r) {
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
  transitional: wk,
  adapter: gk(),
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
      return vk(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return Ym(r, "application/json"), $k(o);
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
    FormData: mk()
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
  Zu.headers[o] = yt.merge(_k);
});
var oh = Zu, yk = Nt, bk = oh, Ck = function(o, r, s) {
  var a = this || bk;
  return yk.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Ad, jm;
function $g() {
  return jm || (jm = 1, Ad = function(o) {
    return !!(o && o.__CANCEL__);
  }), Ad;
}
var Zm = Nt, Td = Ck, Vk = $g(), Ek = oh, Sk = ju();
function xd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Sk();
}
var kk = function(o) {
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
  var r = o.adapter || Ek.adapter;
  return r(o).then(function(a) {
    return xd(o), a.data = Td.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return Vk(a) || (xd(o), a && a.response && (a.response.data = Td.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, Sn = Nt, yg = function(o, r) {
  r = r || {};
  var s = {};
  function a(g, y) {
    return Sn.isPlainObject(g) && Sn.isPlainObject(y) ? Sn.merge(g, y) : Sn.isPlainObject(y) ? Sn.merge({}, y) : Sn.isArray(y) ? y.slice() : y;
  }
  function u(g) {
    if (Sn.isUndefined(r[g])) {
      if (!Sn.isUndefined(o[g]))
        return a(void 0, o[g]);
    } else
      return a(o[g], r[g]);
  }
  function c(g) {
    if (!Sn.isUndefined(r[g]))
      return a(void 0, r[g]);
  }
  function f(g) {
    if (Sn.isUndefined(r[g])) {
      if (!Sn.isUndefined(o[g]))
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
  return Sn.forEach(Object.keys(o).concat(Object.keys(r)), function(y) {
    var b = v[y] || u, B = b(y);
    Sn.isUndefined(B) && b !== m || (s[y] = B);
  }), s;
}, Ld, Km;
function bg() {
  return Km || (Km = 1, Ld = {
    version: "0.27.2"
  }), Ld;
}
var Ik = bg().version, Ur = Hs, rh = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  rh[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var Jm = {};
rh.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + Ik + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
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
function Ak(e, o, r) {
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
var Tk = {
  assertOptions: Ak,
  validators: rh
}, Cg = Nt, xk = hg, Xm = nk, Qm = kk, Ku = yg, Lk = gg, Vg = Tk, ds = Vg.validators;
function Fs(e) {
  this.defaults = e, this.interceptors = {
    request: new Xm(),
    response: new Xm()
  };
}
Fs.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ku(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Vg.assertOptions(s, {
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
  var r = Lk(o.baseURL, o.url);
  return xk(r, o.params, o.paramsSerializer);
};
Cg.forEach(["delete", "get", "head", "options"], function(o) {
  Fs.prototype[o] = function(r, s) {
    return this.request(Ku(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Cg.forEach(["post", "put", "patch"], function(o) {
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
var Mk = Fs, Md, ew;
function Nk() {
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
function Dk() {
  return tw || (tw = 1, Nd = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Nd;
}
var Dd, nw;
function Ok() {
  if (nw)
    return Dd;
  nw = 1;
  var e = Nt;
  return Dd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Dd;
}
var ow = Nt, Bk = cg, ku = Mk, Rk = yg, Pk = oh;
function Eg(e) {
  var o = new ku(e), r = Bk(ku.prototype.request, o);
  return ow.extend(r, ku.prototype, o), ow.extend(r, o), r.create = function(a) {
    return Eg(Rk(e, a));
  }, r;
}
var vn = Eg(Pk);
vn.Axios = ku;
vn.CanceledError = ju();
vn.CancelToken = Nk();
vn.isCancel = $g();
vn.VERSION = bg().version;
vn.toFormData = _g;
vn.AxiosError = Hs;
vn.Cancel = vn.CanceledError;
vn.all = function(o) {
  return Promise.all(o);
};
vn.spread = Dk();
vn.isAxiosError = Ok();
Jf.exports = vn;
Jf.exports.default = vn;
(function(e) {
  e.exports = Jf.exports;
})(ug);
const Sg = /* @__PURE__ */ MS(ug.exports), mr = Sg.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Dt = Sg.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", v = 500, g = "__lodash_placeholder__", y = 1, b = 2, B = 4, N = 1, F = 2, M = 1, S = 2, T = 4, x = 8, U = 16, A = 32, P = 64, H = 128, K = 256, Me = 512, he = 30, Ae = "...", Se = 800, He = 16, Ge = 1, $e = 2, Ze = 3, Xe = 1 / 0, ct = 9007199254740991, on = 17976931348623157e292, _n = 0 / 0, Ce = 4294967295, oa = Ce - 1, ra = Ce >>> 1, ia = [
      ["ary", H],
      ["bind", M],
      ["bindKey", S],
      ["curry", x],
      ["curryRight", U],
      ["flip", Me],
      ["partial", A],
      ["partialRight", P],
      ["rearg", K]
    ], Kn = "[object Arguments]", zt = "[object Array]", Mn = "[object AsyncFunction]", dt = "[object Boolean]", Nn = "[object Date]", Jn = "[object DOMException]", Ne = "[object Error]", vo = "[object Function]", Fe = "[object GeneratorFunction]", vt = "[object Map]", Te = "[object Number]", Dn = "[object Null]", bt = "[object Object]", Ot = "[object Promise]", Po = "[object Proxy]", rn = "[object RegExp]", Ct = "[object Set]", Xn = "[object String]", _t = "[object Symbol]", Fo = "[object Undefined]", ft = "[object WeakMap]", Kr = "[object WeakSet]", Qn = "[object ArrayBuffer]", qt = "[object DataView]", _o = "[object Float32Array]", eo = "[object Float64Array]", Uo = "[object Int8Array]", Wo = "[object Int16Array]", Ho = "[object Int32Array]", go = "[object Uint8Array]", $o = "[object Uint8ClampedArray]", gn = "[object Uint16Array]", Vt = "[object Uint32Array]", wr = /\b__p \+= '';/g, Jr = /\b(__p \+=) '' \+/g, Xr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, zo = /&(?:amp|lt|gt|quot|#39);/g, vr = /[&<>"']/g, qo = RegExp(zo.source), Go = RegExp(vr.source), Gt = /<%-([\s\S]+?)%>/g, to = /<%([\s\S]+?)%>/g, Yo = /<%=([\s\S]+?)%>/g, _r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fi = /^\w*$/, Qr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yo = /[\\^$.*+?()[\]{}|]/g, ei = RegExp(yo.source), bo = /^\s+/, Ui = /\s/, Co = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Wi = /\{\n\/\* \[wrapped with (.+)\] \*/, Hi = /,? & /, Re = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, no = /[()=,{}\[\]\/\s]/, zi = /\\(\\)?/g, ti = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, jo = /\w*$/, pe = /^[-+]0x[0-9a-f]+$/i, Y = /^0b[01]+$/i, te = /^\[object .+?Constructor\]$/, xe = /^0o[0-7]+$/i, Zo = /^(?:0|[1-9]\d*)$/, qi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Bt = /($^)/, ni = /['\n\r\u2028\u2029\\]/g, Yt = "\\ud800-\\udfff", Gi = "\\u0300-\\u036f", Yi = "\\ufe20-\\ufe2f", oi = "\\u20d0-\\u20ff", gr = Gi + Yi + oi, Vo = "\\u2700-\\u27bf", Ko = "a-z\\xdf-\\xf6\\xf8-\\xff", Jo = "\\xac\\xb1\\xd7\\xf7", oo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Eo = "\\u2000-\\u206f", sn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ri = "A-Z\\xc0-\\xd6\\xd8-\\xde", ii = "\\ufe0e\\ufe0f", $r = Jo + oo + Eo + sn, Xo = "['\u2019]", ji = "[" + Yt + "]", yr = "[" + $r + "]", Qo = "[" + gr + "]", pl = "\\d+", ml = "[" + Vo + "]", si = "[" + Ko + "]", Zi = "[^" + Yt + $r + pl + Vo + Ko + ri + "]", q = "\\ud83c[\\udffb-\\udfff]", w = "(?:" + Qo + "|" + q + ")", E = "[^" + Yt + "]", z = "(?:\\ud83c[\\udde6-\\uddff]){2}", Z = "[\\ud800-\\udbff][\\udc00-\\udfff]", re = "[" + ri + "]", me = "\\u200d", rt = "(?:" + si + "|" + Zi + ")", Qe = "(?:" + re + "|" + Zi + ")", jt = "(?:" + Xo + "(?:d|ll|m|re|s|t|ve))?", an = "(?:" + Xo + "(?:D|LL|M|RE|S|T|VE))?", Ki = w + "?", gt = "[" + ii + "]?", E0 = "(?:" + me + "(?:" + [E, z, Z].join("|") + ")" + gt + Ki + ")*", S0 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", k0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", kh = gt + Ki + E0, I0 = "(?:" + [ml, z, Z].join("|") + ")" + kh, A0 = "(?:" + [E + Qo + "?", Qo, z, Z, ji].join("|") + ")", T0 = RegExp(Xo, "g"), x0 = RegExp(Qo, "g"), mc = RegExp(q + "(?=" + q + ")|" + A0 + kh, "g"), L0 = RegExp([
      re + "?" + si + "+" + jt + "(?=" + [yr, re, "$"].join("|") + ")",
      Qe + "+" + an + "(?=" + [yr, re + rt, "$"].join("|") + ")",
      re + "?" + rt + "+" + jt,
      re + "+" + an,
      k0,
      S0,
      pl,
      I0
    ].join("|"), "g"), M0 = RegExp("[" + me + Yt + gr + ii + "]"), N0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, D0 = [
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
    ], O0 = -1, ze = {};
    ze[_o] = ze[eo] = ze[Uo] = ze[Wo] = ze[Ho] = ze[go] = ze[$o] = ze[gn] = ze[Vt] = !0, ze[Kn] = ze[zt] = ze[Qn] = ze[dt] = ze[qt] = ze[Nn] = ze[Ne] = ze[vo] = ze[vt] = ze[Te] = ze[bt] = ze[rn] = ze[Ct] = ze[Xn] = ze[ft] = !1;
    var Ue = {};
    Ue[Kn] = Ue[zt] = Ue[Qn] = Ue[qt] = Ue[dt] = Ue[Nn] = Ue[_o] = Ue[eo] = Ue[Uo] = Ue[Wo] = Ue[Ho] = Ue[vt] = Ue[Te] = Ue[bt] = Ue[rn] = Ue[Ct] = Ue[Xn] = Ue[_t] = Ue[go] = Ue[$o] = Ue[gn] = Ue[Vt] = !0, Ue[Ne] = Ue[vo] = Ue[ft] = !1;
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
    }, U0 = parseFloat, W0 = parseInt, Ih = typeof ya == "object" && ya && ya.Object === Object && ya, H0 = typeof self == "object" && self && self.Object === Object && self, Et = Ih || H0 || Function("return this")(), wc = o && !o.nodeType && o, ai = wc && !0 && e && !e.nodeType && e, Ah = ai && ai.exports === wc, vc = Ah && Ih.process, On = function() {
      try {
        var C = ai && ai.require && ai.require("util").types;
        return C || vc && vc.binding && vc.binding("util");
      } catch {
      }
    }(), Th = On && On.isArrayBuffer, xh = On && On.isDate, Lh = On && On.isMap, Mh = On && On.isRegExp, Nh = On && On.isSet, Dh = On && On.isTypedArray;
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
    function z0(C, L, k, j) {
      for (var ie = -1, ke = C == null ? 0 : C.length; ++ie < ke; ) {
        var ht = C[ie];
        L(j, ht, k(ht), C);
      }
      return j;
    }
    function Bn(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length; ++k < j && L(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function q0(C, L) {
      for (var k = C == null ? 0 : C.length; k-- && L(C[k], k, C) !== !1; )
        ;
      return C;
    }
    function Oh(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length; ++k < j; )
        if (!L(C[k], k, C))
          return !1;
      return !0;
    }
    function br(C, L) {
      for (var k = -1, j = C == null ? 0 : C.length, ie = 0, ke = []; ++k < j; ) {
        var ht = C[k];
        L(ht, k, C) && (ke[ie++] = ht);
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
    function G0(C, L, k, j) {
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
    var Y0 = yc("length");
    function j0(C) {
      return C.split("");
    }
    function Z0(C) {
      return C.match(Re) || [];
    }
    function Bh(C, L, k) {
      var j;
      return k(C, function(ie, ke, ht) {
        if (L(ie, ke, ht))
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
      return L === L ? a$(C, L, k) : vl(C, Rh, k);
    }
    function K0(C, L, k, j) {
      for (var ie = k - 1, ke = C.length; ++ie < ke; )
        if (j(C[ie], L))
          return ie;
      return -1;
    }
    function Rh(C) {
      return C !== C;
    }
    function Ph(C, L) {
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
    function Fh(C, L, k, j, ie) {
      return ie(C, function(ke, ht, Pe) {
        k = j ? (j = !1, ke) : L(k, ke, ht, Pe);
      }), k;
    }
    function J0(C, L) {
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
    function X0(C, L) {
      return Ye(L, function(k) {
        return [k, C[k]];
      });
    }
    function Uh(C) {
      return C && C.slice(0, qh(C) + 1).replace(bo, "");
    }
    function yn(C) {
      return function(L) {
        return C(L);
      };
    }
    function Ec(C, L) {
      return Ye(L, function(k) {
        return C[k];
      });
    }
    function sa(C, L) {
      return C.has(L);
    }
    function Wh(C, L) {
      for (var k = -1, j = C.length; ++k < j && Ji(L, C[k], 0) > -1; )
        ;
      return k;
    }
    function Hh(C, L) {
      for (var k = C.length; k-- && Ji(L, C[k], 0) > -1; )
        ;
      return k;
    }
    function Q0(C, L) {
      for (var k = C.length, j = 0; k--; )
        C[k] === L && ++j;
      return j;
    }
    var e$ = bc(B0), t$ = bc(R0);
    function n$(C) {
      return "\\" + F0[C];
    }
    function o$(C, L) {
      return C == null ? r : C[L];
    }
    function Xi(C) {
      return M0.test(C);
    }
    function r$(C) {
      return N0.test(C);
    }
    function i$(C) {
      for (var L, k = []; !(L = C.next()).done; )
        k.push(L.value);
      return k;
    }
    function Sc(C) {
      var L = -1, k = Array(C.size);
      return C.forEach(function(j, ie) {
        k[++L] = [ie, j];
      }), k;
    }
    function zh(C, L) {
      return function(k) {
        return C(L(k));
      };
    }
    function Vr(C, L) {
      for (var k = -1, j = C.length, ie = 0, ke = []; ++k < j; ) {
        var ht = C[k];
        (ht === L || ht === g) && (C[k] = g, ke[ie++] = k);
      }
      return ke;
    }
    function _l(C) {
      var L = -1, k = Array(C.size);
      return C.forEach(function(j) {
        k[++L] = j;
      }), k;
    }
    function s$(C) {
      var L = -1, k = Array(C.size);
      return C.forEach(function(j) {
        k[++L] = [j, j];
      }), k;
    }
    function a$(C, L, k) {
      for (var j = k - 1, ie = C.length; ++j < ie; )
        if (C[j] === L)
          return j;
      return -1;
    }
    function l$(C, L, k) {
      for (var j = k + 1; j--; )
        if (C[j] === L)
          return j;
      return j;
    }
    function Qi(C) {
      return Xi(C) ? c$(C) : Y0(C);
    }
    function ro(C) {
      return Xi(C) ? d$(C) : j0(C);
    }
    function qh(C) {
      for (var L = C.length; L-- && Ui.test(C.charAt(L)); )
        ;
      return L;
    }
    var u$ = bc(P0);
    function c$(C) {
      for (var L = mc.lastIndex = 0; mc.test(C); )
        ++L;
      return L;
    }
    function d$(C) {
      return C.match(mc) || [];
    }
    function f$(C) {
      return C.match(L0) || [];
    }
    var h$ = function C(L) {
      L = L == null ? Et : es.defaults(Et.Object(), L, es.pick(Et, D0));
      var k = L.Array, j = L.Date, ie = L.Error, ke = L.Function, ht = L.Math, Pe = L.Object, kc = L.RegExp, p$ = L.String, Rn = L.TypeError, gl = k.prototype, m$ = ke.prototype, ts = Pe.prototype, $l = L["__core-js_shared__"], yl = m$.toString, De = ts.hasOwnProperty, w$ = 0, Gh = function() {
        var t = /[^.]+$/.exec($l && $l.keys && $l.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), bl = ts.toString, v$ = yl.call(Pe), _$ = Et._, g$ = kc(
        "^" + yl.call(De).replace(yo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Cl = Ah ? L.Buffer : r, Er = L.Symbol, Vl = L.Uint8Array, Yh = Cl ? Cl.allocUnsafe : r, El = zh(Pe.getPrototypeOf, Pe), jh = Pe.create, Zh = ts.propertyIsEnumerable, Sl = gl.splice, Kh = Er ? Er.isConcatSpreadable : r, aa = Er ? Er.iterator : r, li = Er ? Er.toStringTag : r, kl = function() {
        try {
          var t = hi(Pe, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), $$ = L.clearTimeout !== Et.clearTimeout && L.clearTimeout, y$ = j && j.now !== Et.Date.now && j.now, b$ = L.setTimeout !== Et.setTimeout && L.setTimeout, Il = ht.ceil, Al = ht.floor, Ic = Pe.getOwnPropertySymbols, C$ = Cl ? Cl.isBuffer : r, Jh = L.isFinite, V$ = gl.join, E$ = zh(Pe.keys, Pe), pt = ht.max, Rt = ht.min, S$ = j.now, k$ = L.parseInt, Xh = ht.random, I$ = gl.reverse, Ac = hi(L, "DataView"), la = hi(L, "Map"), Tc = hi(L, "Promise"), ns = hi(L, "Set"), ua = hi(L, "WeakMap"), ca = hi(Pe, "create"), Tl = ua && new ua(), os = {}, A$ = pi(Ac), T$ = pi(la), x$ = pi(Tc), L$ = pi(ns), M$ = pi(ua), xl = Er ? Er.prototype : r, da = xl ? xl.valueOf : r, Qh = xl ? xl.toString : r;
      function h(t) {
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
          if (jh)
            return jh(n);
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
      h.templateSettings = {
        escape: Gt,
        evaluate: to,
        interpolate: Yo,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Ll.prototype, h.prototype.constructor = h, Pn.prototype = rs(Ll.prototype), Pn.prototype.constructor = Pn;
      function we(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ce, this.__views__ = [];
      }
      function N$() {
        var t = new we(this.__wrapped__);
        return t.__actions__ = ln(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ln(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ln(this.__views__), t;
      }
      function D$() {
        if (this.__filtered__) {
          var t = new we(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function O$() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = ae(t), l = n < 0, d = i ? t.length : 0, p = jy(0, d, this.__views__), _ = p.start, $ = p.end, V = $ - _, D = l ? $ : _ - 1, O = this.__iteratees__, R = O.length, G = 0, J = Rt(V, this.__takeCount__);
        if (!i || !l && d == V && J == V)
          return Cp(t, this.__actions__);
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
      function ui(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function B$() {
        this.__data__ = ca ? ca(null) : {}, this.size = 0;
      }
      function R$(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function P$(t) {
        var n = this.__data__;
        if (ca) {
          var i = n[t];
          return i === m ? r : i;
        }
        return De.call(n, t) ? n[t] : r;
      }
      function F$(t) {
        var n = this.__data__;
        return ca ? n[t] !== r : De.call(n, t);
      }
      function U$(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = ca && n === r ? m : n, this;
      }
      ui.prototype.clear = B$, ui.prototype.delete = R$, ui.prototype.get = P$, ui.prototype.has = F$, ui.prototype.set = U$;
      function er(t) {
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
        var n = this.__data__, i = Ml(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Sl.call(n, i, 1), --this.size, !0;
      }
      function z$(t) {
        var n = this.__data__, i = Ml(n, t);
        return i < 0 ? r : n[i][1];
      }
      function q$(t) {
        return Ml(this.__data__, t) > -1;
      }
      function G$(t, n) {
        var i = this.__data__, l = Ml(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      er.prototype.clear = W$, er.prototype.delete = H$, er.prototype.get = z$, er.prototype.has = q$, er.prototype.set = G$;
      function tr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Y$() {
        this.size = 0, this.__data__ = {
          hash: new ui(),
          map: new (la || er)(),
          string: new ui()
        };
      }
      function j$(t) {
        var n = ql(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function Z$(t) {
        return ql(this, t).get(t);
      }
      function K$(t) {
        return ql(this, t).has(t);
      }
      function J$(t, n) {
        var i = ql(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      tr.prototype.clear = Y$, tr.prototype.delete = j$, tr.prototype.get = Z$, tr.prototype.has = K$, tr.prototype.set = J$;
      function ci(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new tr(); ++n < i; )
          this.add(t[n]);
      }
      function X$(t) {
        return this.__data__.set(t, m), this;
      }
      function Q$(t) {
        return this.__data__.has(t);
      }
      ci.prototype.add = ci.prototype.push = X$, ci.prototype.has = Q$;
      function io(t) {
        var n = this.__data__ = new er(t);
        this.size = n.size;
      }
      function ey() {
        this.__data__ = new er(), this.size = 0;
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
        if (i instanceof er) {
          var l = i.__data__;
          if (!la || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new tr(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      io.prototype.clear = ey, io.prototype.delete = ty, io.prototype.get = ny, io.prototype.has = oy, io.prototype.set = ry;
      function ep(t, n) {
        var i = ae(t), l = !i && mi(t), d = !i && !l && Tr(t), p = !i && !l && !d && ls(t), _ = i || l || d || p, $ = _ ? Vc(t.length, p$) : [], V = $.length;
        for (var D in t)
          (n || De.call(t, D)) && !(_ && (D == "length" || d && (D == "offset" || D == "parent") || p && (D == "buffer" || D == "byteLength" || D == "byteOffset") || ir(D, V))) && $.push(D);
        return $;
      }
      function tp(t) {
        var n = t.length;
        return n ? t[Uc(0, n - 1)] : r;
      }
      function iy(t, n) {
        return Gl(ln(t), di(n, 0, t.length));
      }
      function sy(t) {
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
      function ay(t, n, i, l) {
        return Sr(t, function(d, p, _) {
          n(l, d, i(d), _);
        }), l;
      }
      function np(t, n) {
        return t && ko(n, $t(n), t);
      }
      function ly(t, n) {
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
        for (var i = -1, l = n.length, d = k(l), p = t == null; ++i < l; )
          d[i] = p ? r : fd(t, n[i]);
        return d;
      }
      function di(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function Fn(t, n, i, l, d, p) {
        var _, $ = n & y, V = n & b, D = n & B;
        if (i && (_ = d ? i(t, l, d, p) : i(t)), _ !== r)
          return _;
        if (!Ke(t))
          return t;
        var O = ae(t);
        if (O) {
          if (_ = Ky(t), !$)
            return ln(t, _);
        } else {
          var R = Pt(t), G = R == vo || R == Fe;
          if (Tr(t))
            return Sp(t, $);
          if (R == bt || R == Kn || G && !d) {
            if (_ = V || G ? {} : qp(t), !$)
              return V ? Py(t, ly(_, t)) : Ry(t, np(_, t));
          } else {
            if (!Ue[R])
              return d ? t : {};
            _ = Jy(t, R, $);
          }
        }
        p || (p = new io());
        var J = p.get(t);
        if (J)
          return J;
        p.set(t, _), $m(t) ? t.forEach(function(oe) {
          _.add(Fn(oe, n, i, oe, t, p));
        }) : _m(t) && t.forEach(function(oe, fe) {
          _.set(fe, Fn(oe, n, i, fe, t, p));
        });
        var ne = D ? V ? Xc : Jc : V ? cn : $t, ue = O ? r : ne(t);
        return Bn(ue || t, function(oe, fe) {
          ue && (fe = oe, oe = t[fe]), fa(_, fe, Fn(oe, n, i, fe, t, p));
        }), _;
      }
      function uy(t) {
        var n = $t(t);
        return function(i) {
          return op(i, t, n);
        };
      }
      function op(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = Pe(t); l--; ) {
          var d = i[l], p = n[d], _ = t[d];
          if (_ === r && !(d in t) || !p(_))
            return !1;
        }
        return !0;
      }
      function rp(t, n, i) {
        if (typeof t != "function")
          throw new Rn(c);
        return ga(function() {
          t.apply(r, i);
        }, n);
      }
      function ha(t, n, i, l) {
        var d = -1, p = wl, _ = !0, $ = t.length, V = [], D = n.length;
        if (!$)
          return V;
        i && (n = Ye(n, yn(i))), l ? (p = _c, _ = !1) : n.length >= a && (p = sa, _ = !1, n = new ci(n));
        e:
          for (; ++d < $; ) {
            var O = t[d], R = i == null ? O : i(O);
            if (O = l || O !== 0 ? O : 0, _ && R === R) {
              for (var G = D; G--; )
                if (n[G] === R)
                  continue e;
              V.push(O);
            } else
              p(n, R, l) || V.push(O);
          }
        return V;
      }
      var Sr = xp(So), ip = xp(Nc, !0);
      function cy(t, n) {
        var i = !0;
        return Sr(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function Nl(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], _ = n(p);
          if (_ != null && ($ === r ? _ === _ && !Cn(_) : i(_, $)))
            var $ = _, V = p;
        }
        return V;
      }
      function dy(t, n, i, l) {
        var d = t.length;
        for (i = le(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : le(l), l < 0 && (l += d), l = i > l ? 0 : bm(l); i < l; )
          t[i++] = n;
        return t;
      }
      function sp(t, n) {
        var i = [];
        return Sr(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function St(t, n, i, l, d) {
        var p = -1, _ = t.length;
        for (i || (i = Qy), d || (d = []); ++p < _; ) {
          var $ = t[p];
          n > 0 && i($) ? n > 1 ? St($, n - 1, i, l, d) : Cr(d, $) : l || (d[d.length] = $);
        }
        return d;
      }
      var Mc = Lp(), ap = Lp(!0);
      function So(t, n) {
        return t && Mc(t, n, $t);
      }
      function Nc(t, n) {
        return t && ap(t, n, $t);
      }
      function Dl(t, n) {
        return br(n, function(i) {
          return sr(t[i]);
        });
      }
      function fi(t, n) {
        n = Ir(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[Io(n[i++])];
        return i && i == l ? t : r;
      }
      function lp(t, n, i) {
        var l = n(t);
        return ae(t) ? l : Cr(l, i(t));
      }
      function Zt(t) {
        return t == null ? t === r ? Fo : Dn : li && li in Pe(t) ? Yy(t) : sb(t);
      }
      function Dc(t, n) {
        return t > n;
      }
      function fy(t, n) {
        return t != null && De.call(t, n);
      }
      function hy(t, n) {
        return t != null && n in Pe(t);
      }
      function py(t, n, i) {
        return t >= Rt(n, i) && t < pt(n, i);
      }
      function Oc(t, n, i) {
        for (var l = i ? _c : wl, d = t[0].length, p = t.length, _ = p, $ = k(p), V = 1 / 0, D = []; _--; ) {
          var O = t[_];
          _ && n && (O = Ye(O, yn(n))), V = Rt(O.length, V), $[_] = !i && (n || d >= 120 && O.length >= 120) ? new ci(_ && O) : r;
        }
        O = t[0];
        var R = -1, G = $[0];
        e:
          for (; ++R < d && D.length < V; ) {
            var J = O[R], ne = n ? n(J) : J;
            if (J = i || J !== 0 ? J : 0, !(G ? sa(G, ne) : l(D, ne, i))) {
              for (_ = p; --_; ) {
                var ue = $[_];
                if (!(ue ? sa(ue, ne) : l(t[_], ne, i)))
                  continue e;
              }
              G && G.push(ne), D.push(J);
            }
          }
        return D;
      }
      function my(t, n, i, l) {
        return So(t, function(d, p, _) {
          n(l, i(d), p, _);
        }), l;
      }
      function pa(t, n, i) {
        n = Ir(n, t), t = Zp(t, n);
        var l = t == null ? t : t[Io(Wn(n))];
        return l == null ? r : $n(l, t, i);
      }
      function up(t) {
        return et(t) && Zt(t) == Kn;
      }
      function wy(t) {
        return et(t) && Zt(t) == Qn;
      }
      function vy(t) {
        return et(t) && Zt(t) == Nn;
      }
      function ma(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !et(t) && !et(n) ? t !== t && n !== n : _y(t, n, i, l, ma, d);
      }
      function _y(t, n, i, l, d, p) {
        var _ = ae(t), $ = ae(n), V = _ ? zt : Pt(t), D = $ ? zt : Pt(n);
        V = V == Kn ? bt : V, D = D == Kn ? bt : D;
        var O = V == bt, R = D == bt, G = V == D;
        if (G && Tr(t)) {
          if (!Tr(n))
            return !1;
          _ = !0, O = !1;
        }
        if (G && !O)
          return p || (p = new io()), _ || ls(t) ? Wp(t, n, i, l, d, p) : qy(t, n, V, i, l, d, p);
        if (!(i & N)) {
          var J = O && De.call(t, "__wrapped__"), ne = R && De.call(n, "__wrapped__");
          if (J || ne) {
            var ue = J ? t.value() : t, oe = ne ? n.value() : n;
            return p || (p = new io()), d(ue, oe, i, l, p);
          }
        }
        return G ? (p || (p = new io()), Gy(t, n, i, l, d, p)) : !1;
      }
      function gy(t) {
        return et(t) && Pt(t) == vt;
      }
      function Bc(t, n, i, l) {
        var d = i.length, p = d, _ = !l;
        if (t == null)
          return !p;
        for (t = Pe(t); d--; ) {
          var $ = i[d];
          if (_ && $[2] ? $[1] !== t[$[0]] : !($[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
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
      function cp(t) {
        if (!Ke(t) || tb(t))
          return !1;
        var n = sr(t) ? g$ : te;
        return n.test(pi(t));
      }
      function $y(t) {
        return et(t) && Zt(t) == rn;
      }
      function yy(t) {
        return et(t) && Pt(t) == Ct;
      }
      function by(t) {
        return et(t) && Xl(t.length) && !!ze[Zt(t)];
      }
      function dp(t) {
        return typeof t == "function" ? t : t == null ? dn : typeof t == "object" ? ae(t) ? pp(t[0], t[1]) : hp(t) : Mm(t);
      }
      function Rc(t) {
        if (!_a(t))
          return E$(t);
        var n = [];
        for (var i in Pe(t))
          De.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function Cy(t) {
        if (!Ke(t))
          return ib(t);
        var n = _a(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !De.call(t, l)) || i.push(l);
        return i;
      }
      function Pc(t, n) {
        return t < n;
      }
      function fp(t, n) {
        var i = -1, l = un(t) ? k(t.length) : [];
        return Sr(t, function(d, p, _) {
          l[++i] = n(d, p, _);
        }), l;
      }
      function hp(t) {
        var n = ed(t);
        return n.length == 1 && n[0][2] ? Yp(n[0][0], n[0][1]) : function(i) {
          return i === t || Bc(i, t, n);
        };
      }
      function pp(t, n) {
        return nd(t) && Gp(n) ? Yp(Io(t), n) : function(i) {
          var l = fd(i, t);
          return l === r && l === n ? hd(i, t) : ma(n, l, N | F);
        };
      }
      function Ol(t, n, i, l, d) {
        t !== n && Mc(n, function(p, _) {
          if (d || (d = new io()), Ke(p))
            Vy(t, n, _, i, Ol, l, d);
          else {
            var $ = l ? l(rd(t, _), p, _ + "", t, n, d) : r;
            $ === r && ($ = p), xc(t, _, $);
          }
        }, cn);
      }
      function Vy(t, n, i, l, d, p, _) {
        var $ = rd(t, i), V = rd(n, i), D = _.get(V);
        if (D) {
          xc(t, i, D);
          return;
        }
        var O = p ? p($, V, i + "", t, n, _) : r, R = O === r;
        if (R) {
          var G = ae(V), J = !G && Tr(V), ne = !G && !J && ls(V);
          O = V, G || J || ne ? ae($) ? O = $ : it($) ? O = ln($) : J ? (R = !1, O = Sp(V, !0)) : ne ? (R = !1, O = kp(V, !0)) : O = [] : $a(V) || mi(V) ? (O = $, mi($) ? O = Cm($) : (!Ke($) || sr($)) && (O = qp(V))) : R = !1;
        }
        R && (_.set(V, O), d(O, V, l, p, _), _.delete(V)), xc(t, i, O);
      }
      function mp(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, ir(n, i) ? t[n] : r;
      }
      function wp(t, n, i) {
        n.length ? n = Ye(n, function(p) {
          return ae(p) ? function(_) {
            return fi(_, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [dn];
        var l = -1;
        n = Ye(n, yn(ee()));
        var d = fp(t, function(p, _, $) {
          var V = Ye(n, function(D) {
            return D(p);
          });
          return { criteria: V, index: ++l, value: p };
        });
        return J0(d, function(p, _) {
          return By(p, _, i);
        });
      }
      function Ey(t, n) {
        return vp(t, n, function(i, l) {
          return hd(t, l);
        });
      }
      function vp(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var _ = n[l], $ = fi(t, _);
          i($, _) && wa(p, Ir(_, t), $);
        }
        return p;
      }
      function Sy(t) {
        return function(n) {
          return fi(n, t);
        };
      }
      function Fc(t, n, i, l) {
        var d = l ? K0 : Ji, p = -1, _ = n.length, $ = t;
        for (t === n && (n = ln(n)), i && ($ = Ye(t, yn(i))); ++p < _; )
          for (var V = 0, D = n[p], O = i ? i(D) : D; (V = d($, O, V, l)) > -1; )
            $ !== t && Sl.call($, V, 1), Sl.call(t, V, 1);
        return t;
      }
      function _p(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            ir(d) ? Sl.call(t, d, 1) : zc(t, d);
          }
        }
        return t;
      }
      function Uc(t, n) {
        return t + Al(Xh() * (n - t + 1));
      }
      function ky(t, n, i, l) {
        for (var d = -1, p = pt(Il((n - t) / (i || 1)), 0), _ = k(p); p--; )
          _[l ? p : ++d] = t, t += i;
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
        return id(jp(t, n, dn), t + "");
      }
      function Iy(t) {
        return tp(us(t));
      }
      function Ay(t, n) {
        var i = us(t);
        return Gl(i, di(n, 0, i.length));
      }
      function wa(t, n, i, l) {
        if (!Ke(t))
          return t;
        n = Ir(n, t);
        for (var d = -1, p = n.length, _ = p - 1, $ = t; $ != null && ++d < p; ) {
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
      var gp = Tl ? function(t, n) {
        return Tl.set(t, n), t;
      } : dn, Ty = kl ? function(t, n) {
        return kl(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: md(n),
          writable: !0
        });
      } : dn;
      function xy(t) {
        return Gl(us(t));
      }
      function Un(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = k(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function Ly(t, n) {
        var i;
        return Sr(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function Bl(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= ra) {
          for (; l < d; ) {
            var p = l + d >>> 1, _ = t[p];
            _ !== null && !Cn(_) && (i ? _ <= n : _ < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return Hc(t, n, dn, i);
      }
      function Hc(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var _ = n !== n, $ = n === null, V = Cn(n), D = n === r; d < p; ) {
          var O = Al((d + p) / 2), R = i(t[O]), G = R !== r, J = R === null, ne = R === R, ue = Cn(R);
          if (_)
            var oe = l || ne;
          else
            D ? oe = ne && (l || G) : $ ? oe = ne && G && (l || !J) : V ? oe = ne && G && !J && (l || !ue) : J || ue ? oe = !1 : oe = l ? R <= n : R < n;
          oe ? d = O + 1 : p = O;
        }
        return Rt(p, oa);
      }
      function $p(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var _ = t[i], $ = n ? n(_) : _;
          if (!i || !so($, V)) {
            var V = $;
            p[d++] = _ === 0 ? 0 : _;
          }
        }
        return p;
      }
      function yp(t) {
        return typeof t == "number" ? t : Cn(t) ? _n : +t;
      }
      function bn(t) {
        if (typeof t == "string")
          return t;
        if (ae(t))
          return Ye(t, bn) + "";
        if (Cn(t))
          return Qh ? Qh.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Xe ? "-0" : n;
      }
      function kr(t, n, i) {
        var l = -1, d = wl, p = t.length, _ = !0, $ = [], V = $;
        if (i)
          _ = !1, d = _c;
        else if (p >= a) {
          var D = n ? null : Hy(t);
          if (D)
            return _l(D);
          _ = !1, d = sa, V = new ci();
        } else
          V = n ? [] : $;
        e:
          for (; ++l < p; ) {
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
        return n = Ir(n, t), t = Zp(t, n), t == null || delete t[Io(Wn(n))];
      }
      function bp(t, n, i, l) {
        return wa(t, n, i(fi(t, n)), l);
      }
      function Rl(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Un(t, l ? 0 : p, l ? p + 1 : d) : Un(t, l ? p + 1 : 0, l ? d : p);
      }
      function Cp(t, n) {
        var i = t;
        return i instanceof we && (i = i.value()), gc(n, function(l, d) {
          return d.func.apply(d.thisArg, Cr([l], d.args));
        }, i);
      }
      function qc(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? kr(t[0]) : [];
        for (var d = -1, p = k(l); ++d < l; )
          for (var _ = t[d], $ = -1; ++$ < l; )
            $ != d && (p[d] = ha(p[d] || _, t[$], n, i));
        return kr(St(p, 1), n, i);
      }
      function Vp(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, _ = {}; ++l < d; ) {
          var $ = l < p ? n[l] : r;
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
        return ae(t) ? t : nd(t, n) ? [t] : Qp(Le(t));
      }
      var My = de;
      function Ar(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Un(t, n, i);
      }
      var Ep = $$ || function(t) {
        return Et.clearTimeout(t);
      };
      function Sp(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Yh ? Yh(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function jc(t) {
        var n = new t.constructor(t.byteLength);
        return new Vl(n).set(new Vl(t)), n;
      }
      function Ny(t, n) {
        var i = n ? jc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function Dy(t) {
        var n = new t.constructor(t.source, jo.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Oy(t) {
        return da ? Pe(da.call(t)) : {};
      }
      function kp(t, n) {
        var i = n ? jc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Ip(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = Cn(t), _ = n !== r, $ = n === null, V = n === n, D = Cn(n);
          if (!$ && !D && !p && t > n || p && _ && V && !$ && !D || l && _ && V || !i && V || !d)
            return 1;
          if (!l && !p && !D && t < n || D && i && d && !l && !p || $ && i && d || !_ && d || !V)
            return -1;
        }
        return 0;
      }
      function By(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, _ = d.length, $ = i.length; ++l < _; ) {
          var V = Ip(d[l], p[l]);
          if (V) {
            if (l >= $)
              return V;
            var D = i[l];
            return V * (D == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Ap(t, n, i, l) {
        for (var d = -1, p = t.length, _ = i.length, $ = -1, V = n.length, D = pt(p - _, 0), O = k(V + D), R = !l; ++$ < V; )
          O[$] = n[$];
        for (; ++d < _; )
          (R || d < p) && (O[i[d]] = t[d]);
        for (; D--; )
          O[$++] = t[d++];
        return O;
      }
      function Tp(t, n, i, l) {
        for (var d = -1, p = t.length, _ = -1, $ = i.length, V = -1, D = n.length, O = pt(p - $, 0), R = k(O + D), G = !l; ++d < O; )
          R[d] = t[d];
        for (var J = d; ++V < D; )
          R[J + V] = n[V];
        for (; ++_ < $; )
          (G || d < p) && (R[J + i[_]] = t[d++]);
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
        for (var p = -1, _ = n.length; ++p < _; ) {
          var $ = n[p], V = l ? l(i[$], t[$], $, i, t) : r;
          V === r && (V = t[$]), d ? nr(i, $, V) : fa(i, $, V);
        }
        return i;
      }
      function Ry(t, n) {
        return ko(t, td(t), n);
      }
      function Py(t, n) {
        return ko(t, Hp(t), n);
      }
      function Pl(t, n) {
        return function(i, l) {
          var d = ae(i) ? z0 : ay, p = n ? n() : {};
          return d(i, t, ee(l, 2), p);
        };
      }
      function is(t) {
        return de(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, _ = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, _ && Kt(i[0], i[1], _) && (p = d < 3 ? r : p, d = 1), n = Pe(n); ++l < d; ) {
            var $ = i[l];
            $ && t(n, $, l, p);
          }
          return n;
        });
      }
      function xp(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!un(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, _ = Pe(i); (n ? p-- : ++p < d) && l(_[p], p, _) !== !1; )
            ;
          return i;
        };
      }
      function Lp(t) {
        return function(n, i, l) {
          for (var d = -1, p = Pe(n), _ = l(n), $ = _.length; $--; ) {
            var V = _[t ? $ : ++d];
            if (i(p[V], V, p) === !1)
              break;
          }
          return n;
        };
      }
      function Fy(t, n, i) {
        var l = n & M, d = va(t);
        function p() {
          var _ = this && this !== Et && this instanceof p ? d : t;
          return _.apply(l ? i : this, arguments);
        }
        return p;
      }
      function Mp(t) {
        return function(n) {
          n = Le(n);
          var i = Xi(n) ? ro(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Ar(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function ss(t) {
        return function(n) {
          return gc(xm(Tm(n).replace(T0, "")), t, "");
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
      function Uy(t, n, i) {
        var l = va(t);
        function d() {
          for (var p = arguments.length, _ = k(p), $ = p, V = as(d); $--; )
            _[$] = arguments[$];
          var D = p < 3 && _[0] !== V && _[p - 1] !== V ? [] : Vr(_, V);
          if (p -= D.length, p < i)
            return Rp(
              t,
              n,
              Fl,
              d.placeholder,
              r,
              _,
              D,
              r,
              r,
              i - p
            );
          var O = this && this !== Et && this instanceof d ? l : t;
          return $n(O, this, _);
        }
        return d;
      }
      function Np(t) {
        return function(n, i, l) {
          var d = Pe(n);
          if (!un(n)) {
            var p = ee(i, 3);
            n = $t(n), i = function($) {
              return p(d[$], $, d);
            };
          }
          var _ = t(n, i, l);
          return _ > -1 ? d[p ? n[_] : _] : r;
        };
      }
      function Dp(t) {
        return rr(function(n) {
          var i = n.length, l = i, d = Pn.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Rn(c);
            if (d && !_ && zl(p) == "wrapper")
              var _ = new Pn([], !0);
          }
          for (l = _ ? l : i; ++l < i; ) {
            p = n[l];
            var $ = zl(p), V = $ == "wrapper" ? Qc(p) : r;
            V && od(V[0]) && V[1] == (H | x | A | K) && !V[4].length && V[9] == 1 ? _ = _[zl(V[0])].apply(_, V[3]) : _ = p.length == 1 && od(p) ? _[$]() : _.thru(p);
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
      function Fl(t, n, i, l, d, p, _, $, V, D) {
        var O = n & H, R = n & M, G = n & S, J = n & (x | U), ne = n & Me, ue = G ? r : va(t);
        function oe() {
          for (var fe = arguments.length, ge = k(fe), Vn = fe; Vn--; )
            ge[Vn] = arguments[Vn];
          if (J)
            var Jt = as(oe), En = Q0(ge, Jt);
          if (l && (ge = Ap(ge, l, d, J)), p && (ge = Tp(ge, p, _, J)), fe -= En, J && fe < D) {
            var st = Vr(ge, Jt);
            return Rp(
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
          return fe = ge.length, $ ? ge = ab(ge, $) : ne && fe > 1 && ge.reverse(), O && V < fe && (ge.length = V), this && this !== Et && this instanceof oe && (lr = ue || va(lr)), lr.apply(ao, ge);
        }
        return oe;
      }
      function Op(t, n) {
        return function(i, l) {
          return my(i, t, n(l), {});
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
            typeof i == "string" || typeof l == "string" ? (i = bn(i), l = bn(l)) : (i = yp(i), l = yp(l)), d = t(i, l);
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
      function Wy(t, n, i, l) {
        var d = n & M, p = va(t);
        function _() {
          for (var $ = -1, V = arguments.length, D = -1, O = l.length, R = k(O + V), G = this && this !== Et && this instanceof _ ? p : t; ++D < O; )
            R[D] = l[D];
          for (; V--; )
            R[D++] = arguments[++$];
          return $n(G, d ? i : this, R);
        }
        return _;
      }
      function Bp(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Kt(n, i, l) && (i = l = r), n = ar(n), i === r ? (i = n, n = 0) : i = ar(i), l = l === r ? n < i ? 1 : -1 : ar(l), ky(n, i, l, t);
        };
      }
      function Hl(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Hn(n), i = Hn(i)), t(n, i);
        };
      }
      function Rp(t, n, i, l, d, p, _, $, V, D) {
        var O = n & x, R = O ? _ : r, G = O ? r : _, J = O ? p : r, ne = O ? r : p;
        n |= O ? A : P, n &= ~(O ? P : A), n & T || (n &= ~(M | S));
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
        return od(t) && Kp(oe, ue), oe.placeholder = l, Jp(oe, t, n);
      }
      function Kc(t) {
        var n = ht[t];
        return function(i, l) {
          if (i = Hn(i), l = l == null ? 0 : Rt(le(l), 292), l && Jh(i)) {
            var d = (Le(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (Le(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Hy = ns && 1 / _l(new ns([, -0]))[1] == Xe ? function(t) {
        return new ns(t);
      } : _d;
      function Pp(t) {
        return function(n) {
          var i = Pt(n);
          return i == vt ? Sc(n) : i == Ct ? s$(n) : X0(n, t(n));
        };
      }
      function or(t, n, i, l, d, p, _, $) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new Rn(c);
        var D = l ? l.length : 0;
        if (D || (n &= ~(A | P), l = d = r), _ = _ === r ? _ : pt(le(_), 0), $ = $ === r ? $ : le($), D -= d ? d.length : 0, n & P) {
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
          p,
          _,
          $
        ];
        if (G && rb(J, G), t = J[0], n = J[1], i = J[2], l = J[3], d = J[4], $ = J[9] = J[9] === r ? V ? 0 : t.length : pt(J[9] - D, 0), !$ && n & (x | U) && (n &= ~(x | U)), !n || n == M)
          var ne = Fy(t, n, i);
        else
          n == x || n == U ? ne = Uy(t, n, $) : (n == A || n == (M | A)) && !d.length ? ne = Wy(t, n, i, l) : ne = Fl.apply(r, J);
        var ue = G ? gp : Kp;
        return Jp(ue(ne, J), t, n);
      }
      function Fp(t, n, i, l) {
        return t === r || so(t, ts[i]) && !De.call(l, i) ? n : t;
      }
      function Up(t, n, i, l, d, p) {
        return Ke(t) && Ke(n) && (p.set(n, t), Ol(t, n, r, Up, p), p.delete(n)), t;
      }
      function zy(t) {
        return $a(t) ? r : t;
      }
      function Wp(t, n, i, l, d, p) {
        var _ = i & N, $ = t.length, V = n.length;
        if ($ != V && !(_ && V > $))
          return !1;
        var D = p.get(t), O = p.get(n);
        if (D && O)
          return D == n && O == t;
        var R = -1, G = !0, J = i & F ? new ci() : r;
        for (p.set(t, n), p.set(n, t); ++R < $; ) {
          var ne = t[R], ue = n[R];
          if (l)
            var oe = _ ? l(ue, ne, R, n, t, p) : l(ne, ue, R, t, n, p);
          if (oe !== r) {
            if (oe)
              continue;
            G = !1;
            break;
          }
          if (J) {
            if (!$c(n, function(fe, ge) {
              if (!sa(J, ge) && (ne === fe || d(ne, fe, i, l, p)))
                return J.push(ge);
            })) {
              G = !1;
              break;
            }
          } else if (!(ne === ue || d(ne, ue, i, l, p))) {
            G = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), G;
      }
      function qy(t, n, i, l, d, p, _) {
        switch (i) {
          case qt:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Qn:
            return !(t.byteLength != n.byteLength || !p(new Vl(t), new Vl(n)));
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
            var $ = Sc;
          case Ct:
            var V = l & N;
            if ($ || ($ = _l), t.size != n.size && !V)
              return !1;
            var D = _.get(t);
            if (D)
              return D == n;
            l |= F, _.set(t, n);
            var O = Wp($(t), $(n), l, d, p, _);
            return _.delete(t), O;
          case _t:
            if (da)
              return da.call(t) == da.call(n);
        }
        return !1;
      }
      function Gy(t, n, i, l, d, p) {
        var _ = i & N, $ = Jc(t), V = $.length, D = Jc(n), O = D.length;
        if (V != O && !_)
          return !1;
        for (var R = V; R--; ) {
          var G = $[R];
          if (!(_ ? G in n : De.call(n, G)))
            return !1;
        }
        var J = p.get(t), ne = p.get(n);
        if (J && ne)
          return J == n && ne == t;
        var ue = !0;
        p.set(t, n), p.set(n, t);
        for (var oe = _; ++R < V; ) {
          G = $[R];
          var fe = t[G], ge = n[G];
          if (l)
            var Vn = _ ? l(ge, fe, G, n, t, p) : l(fe, ge, G, t, n, p);
          if (!(Vn === r ? fe === ge || d(fe, ge, i, l, p) : Vn)) {
            ue = !1;
            break;
          }
          oe || (oe = G == "constructor");
        }
        if (ue && !oe) {
          var Jt = t.constructor, En = n.constructor;
          Jt != En && "constructor" in t && "constructor" in n && !(typeof Jt == "function" && Jt instanceof Jt && typeof En == "function" && En instanceof En) && (ue = !1);
        }
        return p.delete(t), p.delete(n), ue;
      }
      function rr(t) {
        return id(jp(t, r, om), t + "");
      }
      function Jc(t) {
        return lp(t, $t, td);
      }
      function Xc(t) {
        return lp(t, cn, Hp);
      }
      var Qc = Tl ? function(t) {
        return Tl.get(t);
      } : _d;
      function zl(t) {
        for (var n = t.name + "", i = os[n], l = De.call(os, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function as(t) {
        var n = De.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function ee() {
        var t = h.iteratee || wd;
        return t = t === wd ? dp : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function ql(t, n) {
        var i = t.__data__;
        return eb(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function ed(t) {
        for (var n = $t(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Gp(d)];
        }
        return n;
      }
      function hi(t, n) {
        var i = o$(t, n);
        return cp(i) ? i : r;
      }
      function Yy(t) {
        var n = De.call(t, li), i = t[li];
        try {
          t[li] = r;
          var l = !0;
        } catch {
        }
        var d = bl.call(t);
        return l && (n ? t[li] = i : delete t[li]), d;
      }
      var td = Ic ? function(t) {
        return t == null ? [] : (t = Pe(t), br(Ic(t), function(n) {
          return Zh.call(t, n);
        }));
      } : gd, Hp = Ic ? function(t) {
        for (var n = []; t; )
          Cr(n, td(t)), t = El(t);
        return n;
      } : gd, Pt = Zt;
      (Ac && Pt(new Ac(new ArrayBuffer(1))) != qt || la && Pt(new la()) != vt || Tc && Pt(Tc.resolve()) != Ot || ns && Pt(new ns()) != Ct || ua && Pt(new ua()) != ft) && (Pt = function(t) {
        var n = Zt(t), i = n == bt ? t.constructor : r, l = i ? pi(i) : "";
        if (l)
          switch (l) {
            case A$:
              return qt;
            case T$:
              return vt;
            case x$:
              return Ot;
            case L$:
              return Ct;
            case M$:
              return ft;
          }
        return n;
      });
      function jy(t, n, i) {
        for (var l = -1, d = i.length; ++l < d; ) {
          var p = i[l], _ = p.size;
          switch (p.type) {
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
              t = pt(t, n - _);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Zy(t) {
        var n = t.match(Wi);
        return n ? n[1].split(Hi) : [];
      }
      function zp(t, n, i) {
        n = Ir(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var _ = Io(n[l]);
          if (!(p = t != null && i(t, _)))
            break;
          t = t[_];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Xl(d) && ir(_, d) && (ae(t) || mi(t)));
      }
      function Ky(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && De.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function qp(t) {
        return typeof t.constructor == "function" && !_a(t) ? rs(El(t)) : {};
      }
      function Jy(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case Qn:
            return jc(t);
          case dt:
          case Nn:
            return new l(+t);
          case qt:
            return Ny(t, i);
          case _o:
          case eo:
          case Uo:
          case Wo:
          case Ho:
          case go:
          case $o:
          case gn:
          case Vt:
            return kp(t, i);
          case vt:
            return new l();
          case Te:
          case Xn:
            return new l(t);
          case rn:
            return Dy(t);
          case Ct:
            return new l();
          case _t:
            return Oy(t);
        }
      }
      function Xy(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Co, `{
/* [wrapped with ` + n + `] */
`);
      }
      function Qy(t) {
        return ae(t) || mi(t) || !!(Kh && t && t[Kh]);
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
      function eb(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function od(t) {
        var n = zl(t), i = h[n];
        if (typeof i != "function" || !(n in we.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Qc(i);
        return !!l && t === l[0];
      }
      function tb(t) {
        return !!Gh && Gh in t;
      }
      var nb = $l ? sr : $d;
      function _a(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || ts;
        return t === i;
      }
      function Gp(t) {
        return t === t && !Ke(t);
      }
      function Yp(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in Pe(i));
        };
      }
      function ob(t) {
        var n = Kl(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function rb(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (M | S | H), _ = l == H && i == x || l == H && i == K && t[7].length <= n[8] || l == (H | K) && n[7].length <= n[8] && i == x;
        if (!(p || _))
          return t;
        l & M && (t[2] = n[2], d |= i & M ? 0 : T);
        var $ = n[3];
        if ($) {
          var V = t[3];
          t[3] = V ? Ap(V, $, n[4]) : $, t[4] = V ? Vr(t[3], g) : n[4];
        }
        return $ = n[5], $ && (V = t[5], t[5] = V ? Tp(V, $, n[6]) : $, t[6] = V ? Vr(t[5], g) : n[6]), $ = n[7], $ && (t[7] = $), l & H && (t[8] = t[8] == null ? n[8] : Rt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function ib(t) {
        var n = [];
        if (t != null)
          for (var i in Pe(t))
            n.push(i);
        return n;
      }
      function sb(t) {
        return bl.call(t);
      }
      function jp(t, n, i) {
        return n = pt(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = pt(l.length - n, 0), _ = k(p); ++d < p; )
            _[d] = l[n + d];
          d = -1;
          for (var $ = k(n + 1); ++d < n; )
            $[d] = l[d];
          return $[n] = i(_), $n(t, this, $);
        };
      }
      function Zp(t, n) {
        return n.length < 2 ? t : fi(t, Un(n, 0, -1));
      }
      function ab(t, n) {
        for (var i = t.length, l = Rt(n.length, i), d = ln(t); l--; ) {
          var p = n[l];
          t[l] = ir(p, i) ? d[p] : r;
        }
        return t;
      }
      function rd(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Kp = Xp(gp), ga = b$ || function(t, n) {
        return Et.setTimeout(t, n);
      }, id = Xp(Ty);
      function Jp(t, n, i) {
        var l = n + "";
        return id(t, Xy(l, lb(Zy(l), i)));
      }
      function Xp(t) {
        var n = 0, i = 0;
        return function() {
          var l = S$(), d = He - (l - i);
          if (i = l, d > 0) {
            if (++n >= Se)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Gl(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = Uc(i, d), _ = t[p];
          t[p] = t[i], t[i] = _;
        }
        return t.length = n, t;
      }
      var Qp = ob(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Qr, function(i, l, d, p) {
          n.push(d ? p.replace(zi, "$1") : l || i);
        }), n;
      });
      function Io(t) {
        if (typeof t == "string" || Cn(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Xe ? "-0" : n;
      }
      function pi(t) {
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
      function lb(t, n) {
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
      function ub(t, n, i) {
        (i ? Kt(t, n, i) : n === r) ? n = 1 : n = pt(le(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, _ = k(Il(l / n)); d < l; )
          _[p++] = Un(t, d, d += n);
        return _;
      }
      function cb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function db() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = k(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Cr(ae(i) ? ln(i) : [i], St(n, 1));
      }
      var fb = de(function(t, n) {
        return it(t) ? ha(t, St(n, 1, it, !0)) : [];
      }), hb = de(function(t, n) {
        var i = Wn(n);
        return it(i) && (i = r), it(t) ? ha(t, St(n, 1, it, !0), ee(i, 2)) : [];
      }), pb = de(function(t, n) {
        var i = Wn(n);
        return it(i) && (i = r), it(t) ? ha(t, St(n, 1, it, !0), r, i) : [];
      });
      function mb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), Un(t, n < 0 ? 0 : n, l)) : [];
      }
      function wb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), n = l - n, Un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function vb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3), !0, !0) : [];
      }
      function _b(t, n) {
        return t && t.length ? Rl(t, ee(n, 3), !0) : [];
      }
      function gb(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Kt(t, n, i) && (i = 0, l = d), dy(t, n, i, l)) : [];
      }
      function tm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = pt(l + d, 0)), vl(t, ee(n, 3), d);
      }
      function nm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = le(i), d = i < 0 ? pt(l + d, 0) : Rt(d, l - 1)), vl(t, ee(n, 3), d, !0);
      }
      function om(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, 1) : [];
      }
      function $b(t) {
        var n = t == null ? 0 : t.length;
        return n ? St(t, Xe) : [];
      }
      function yb(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : le(n), St(t, n)) : [];
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
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = pt(l + d, 0)), Ji(t, n, d);
      }
      function Vb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Un(t, 0, -1) : [];
      }
      var Eb = de(function(t) {
        var n = Ye(t, Gc);
        return n.length && n[0] === t[0] ? Oc(n) : [];
      }), Sb = de(function(t) {
        var n = Wn(t), i = Ye(t, Gc);
        return n === Wn(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Oc(i, ee(n, 2)) : [];
      }), kb = de(function(t) {
        var n = Wn(t), i = Ye(t, Gc);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Oc(i, r, n) : [];
      });
      function Ib(t, n) {
        return t == null ? "" : V$.call(t, n);
      }
      function Wn(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Ab(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = le(i), d = d < 0 ? pt(l + d, 0) : Rt(d, l - 1)), n === n ? l$(t, n, d) : vl(t, Rh, d, !0);
      }
      function Tb(t, n) {
        return t && t.length ? mp(t, le(n)) : r;
      }
      var xb = de(im);
      function im(t, n) {
        return t && t.length && n && n.length ? Fc(t, n) : t;
      }
      function Lb(t, n, i) {
        return t && t.length && n && n.length ? Fc(t, n, ee(i, 2)) : t;
      }
      function Mb(t, n, i) {
        return t && t.length && n && n.length ? Fc(t, n, r, i) : t;
      }
      var Nb = rr(function(t, n) {
        var i = t == null ? 0 : t.length, l = Lc(t, n);
        return _p(t, Ye(n, function(d) {
          return ir(d, i) ? +d : d;
        }).sort(Ip)), l;
      });
      function Db(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = ee(n, 3); ++l < p; ) {
          var _ = t[l];
          n(_, l, t) && (i.push(_), d.push(l));
        }
        return _p(t, d), i;
      }
      function sd(t) {
        return t == null ? t : I$.call(t);
      }
      function Ob(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Kt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : le(n), i = i === r ? l : le(i)), Un(t, n, i)) : [];
      }
      function Bb(t, n) {
        return Bl(t, n);
      }
      function Rb(t, n, i) {
        return Hc(t, n, ee(i, 2));
      }
      function Pb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Bl(t, n);
          if (l < i && so(t[l], n))
            return l;
        }
        return -1;
      }
      function Fb(t, n) {
        return Bl(t, n, !0);
      }
      function Ub(t, n, i) {
        return Hc(t, n, ee(i, 2), !0);
      }
      function Wb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Bl(t, n, !0) - 1;
          if (so(t[l], n))
            return l;
        }
        return -1;
      }
      function Hb(t) {
        return t && t.length ? $p(t) : [];
      }
      function zb(t, n) {
        return t && t.length ? $p(t, ee(n, 2)) : [];
      }
      function qb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Un(t, 1, n) : [];
      }
      function Gb(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : le(n), Un(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Yb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), n = l - n, Un(t, n < 0 ? 0 : n, l)) : [];
      }
      function jb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3), !1, !0) : [];
      }
      function Zb(t, n) {
        return t && t.length ? Rl(t, ee(n, 3)) : [];
      }
      var Kb = de(function(t) {
        return kr(St(t, 1, it, !0));
      }), Jb = de(function(t) {
        var n = Wn(t);
        return it(n) && (n = r), kr(St(t, 1, it, !0), ee(n, 2));
      }), Xb = de(function(t) {
        var n = Wn(t);
        return n = typeof n == "function" ? n : r, kr(St(t, 1, it, !0), r, n);
      });
      function Qb(t) {
        return t && t.length ? kr(t) : [];
      }
      function eC(t, n) {
        return t && t.length ? kr(t, ee(n, 2)) : [];
      }
      function tC(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? kr(t, r, n) : [];
      }
      function ad(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = br(t, function(i) {
          if (it(i))
            return n = pt(i.length, n), !0;
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
      var nC = de(function(t, n) {
        return it(t) ? ha(t, n) : [];
      }), oC = de(function(t) {
        return qc(br(t, it));
      }), rC = de(function(t) {
        var n = Wn(t);
        return it(n) && (n = r), qc(br(t, it), ee(n, 2));
      }), iC = de(function(t) {
        var n = Wn(t);
        return n = typeof n == "function" ? n : r, qc(br(t, it), r, n);
      }), sC = de(ad);
      function aC(t, n) {
        return Vp(t || [], n || [], fa);
      }
      function lC(t, n) {
        return Vp(t || [], n || [], wa);
      }
      var uC = de(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, sm(t, i);
      });
      function am(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function cC(t, n) {
        return n(t), t;
      }
      function Yl(t, n) {
        return n(t);
      }
      var dC = rr(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Lc(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof we) || !ir(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Yl,
          args: [d],
          thisArg: r
        }), new Pn(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function fC() {
        return am(this);
      }
      function hC() {
        return new Pn(this.value(), this.__chain__);
      }
      function pC() {
        this.__values__ === r && (this.__values__ = ym(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function mC() {
        return this;
      }
      function wC(t) {
        for (var n, i = this; i instanceof Ll; ) {
          var l = em(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function vC() {
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
      function _C() {
        return Cp(this.__wrapped__, this.__actions__);
      }
      var gC = Pl(function(t, n, i) {
        De.call(t, i) ? ++t[i] : nr(t, i, 1);
      });
      function $C(t, n, i) {
        var l = ae(t) ? Oh : cy;
        return i && Kt(t, n, i) && (n = r), l(t, ee(n, 3));
      }
      function yC(t, n) {
        var i = ae(t) ? br : sp;
        return i(t, ee(n, 3));
      }
      var bC = Np(tm), CC = Np(nm);
      function VC(t, n) {
        return St(jl(t, n), 1);
      }
      function EC(t, n) {
        return St(jl(t, n), Xe);
      }
      function SC(t, n, i) {
        return i = i === r ? 1 : le(i), St(jl(t, n), i);
      }
      function lm(t, n) {
        var i = ae(t) ? Bn : Sr;
        return i(t, ee(n, 3));
      }
      function um(t, n) {
        var i = ae(t) ? q0 : ip;
        return i(t, ee(n, 3));
      }
      var kC = Pl(function(t, n, i) {
        De.call(t, i) ? t[i].push(n) : nr(t, i, [n]);
      });
      function IC(t, n, i, l) {
        t = un(t) ? t : us(t), i = i && !l ? le(i) : 0;
        var d = t.length;
        return i < 0 && (i = pt(d + i, 0)), Ql(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Ji(t, n, i) > -1;
      }
      var AC = de(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = un(t) ? k(t.length) : [];
        return Sr(t, function(_) {
          p[++l] = d ? $n(n, _, i) : pa(_, n, i);
        }), p;
      }), TC = Pl(function(t, n, i) {
        nr(t, i, n);
      });
      function jl(t, n) {
        var i = ae(t) ? Ye : fp;
        return i(t, ee(n, 3));
      }
      function xC(t, n, i, l) {
        return t == null ? [] : (ae(n) || (n = n == null ? [] : [n]), i = l ? r : i, ae(i) || (i = i == null ? [] : [i]), wp(t, n, i));
      }
      var LC = Pl(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function MC(t, n, i) {
        var l = ae(t) ? gc : Fh, d = arguments.length < 3;
        return l(t, ee(n, 4), i, d, Sr);
      }
      function NC(t, n, i) {
        var l = ae(t) ? G0 : Fh, d = arguments.length < 3;
        return l(t, ee(n, 4), i, d, ip);
      }
      function DC(t, n) {
        var i = ae(t) ? br : sp;
        return i(t, Jl(ee(n, 3)));
      }
      function OC(t) {
        var n = ae(t) ? tp : Iy;
        return n(t);
      }
      function BC(t, n, i) {
        (i ? Kt(t, n, i) : n === r) ? n = 1 : n = le(n);
        var l = ae(t) ? iy : Ay;
        return l(t, n);
      }
      function RC(t) {
        var n = ae(t) ? sy : xy;
        return n(t);
      }
      function PC(t) {
        if (t == null)
          return 0;
        if (un(t))
          return Ql(t) ? Qi(t) : t.length;
        var n = Pt(t);
        return n == vt || n == Ct ? t.size : Rc(t).length;
      }
      function FC(t, n, i) {
        var l = ae(t) ? $c : Ly;
        return i && Kt(t, n, i) && (n = r), l(t, ee(n, 3));
      }
      var UC = de(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Kt(t, n[0], n[1]) ? n = [] : i > 2 && Kt(n[0], n[1], n[2]) && (n = [n[0]]), wp(t, St(n, 1), []);
      }), Zl = y$ || function() {
        return Et.Date.now();
      };
      function WC(t, n) {
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
        var l = M | S;
        if (i.length) {
          var d = Vr(i, as(fm));
          l |= A;
        }
        return or(n, l, t, i, d);
      });
      function hm(t, n, i) {
        n = i ? r : n;
        var l = or(t, x, r, r, r, r, r, n);
        return l.placeholder = hm.placeholder, l;
      }
      function pm(t, n, i) {
        n = i ? r : n;
        var l = or(t, U, r, r, r, r, r, n);
        return l.placeholder = pm.placeholder, l;
      }
      function mm(t, n, i) {
        var l, d, p, _, $, V, D = 0, O = !1, R = !1, G = !0;
        if (typeof t != "function")
          throw new Rn(c);
        n = Hn(n) || 0, Ke(i) && (O = !!i.leading, R = "maxWait" in i, p = R ? pt(Hn(i.maxWait) || 0, n) : p, G = "trailing" in i ? !!i.trailing : G);
        function J(st) {
          var ao = l, lr = d;
          return l = d = r, D = st, _ = t.apply(lr, ao), _;
        }
        function ne(st) {
          return D = st, $ = ga(fe, n), O ? J(st) : _;
        }
        function ue(st) {
          var ao = st - V, lr = st - D, Nm = n - ao;
          return R ? Rt(Nm, p - lr) : Nm;
        }
        function oe(st) {
          var ao = st - V, lr = st - D;
          return V === r || ao >= n || ao < 0 || R && lr >= p;
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
          $ !== r && Ep($), D = 0, l = V = d = $ = r;
        }
        function Jt() {
          return $ === r ? _ : ge(Zl());
        }
        function En() {
          var st = Zl(), ao = oe(st);
          if (l = arguments, d = this, V = st, ao) {
            if ($ === r)
              return ne(V);
            if (R)
              return Ep($), $ = ga(fe, n), J(V);
          }
          return $ === r && ($ = ga(fe, n)), _;
        }
        return En.cancel = Vn, En.flush = Jt, En;
      }
      var HC = de(function(t, n) {
        return rp(t, 1, n);
      }), zC = de(function(t, n, i) {
        return rp(t, Hn(n) || 0, i);
      });
      function qC(t) {
        return or(t, Me);
      }
      function Kl(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Rn(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var _ = t.apply(this, l);
          return i.cache = p.set(d, _) || p, _;
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
      function GC(t) {
        return dm(2, t);
      }
      var YC = My(function(t, n) {
        n = n.length == 1 && ae(n[0]) ? Ye(n[0], yn(ee())) : Ye(St(n, 1), yn(ee()));
        var i = n.length;
        return de(function(l) {
          for (var d = -1, p = Rt(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return $n(t, this, l);
        });
      }), ud = de(function(t, n) {
        var i = Vr(n, as(ud));
        return or(t, A, r, n, i);
      }), wm = de(function(t, n) {
        var i = Vr(n, as(wm));
        return or(t, P, r, n, i);
      }), jC = rr(function(t, n) {
        return or(t, K, r, r, r, n);
      });
      function ZC(t, n) {
        if (typeof t != "function")
          throw new Rn(c);
        return n = n === r ? n : le(n), de(t, n);
      }
      function KC(t, n) {
        if (typeof t != "function")
          throw new Rn(c);
        return n = n == null ? 0 : pt(le(n), 0), de(function(i) {
          var l = i[n], d = Ar(i, 0, n);
          return l && Cr(d, l), $n(t, this, d);
        });
      }
      function JC(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Rn(c);
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
        return ae(t) ? t : [t];
      }
      function tV(t) {
        return Fn(t, B);
      }
      function nV(t, n) {
        return n = typeof n == "function" ? n : r, Fn(t, B, n);
      }
      function oV(t) {
        return Fn(t, y | B);
      }
      function rV(t, n) {
        return n = typeof n == "function" ? n : r, Fn(t, y | B, n);
      }
      function iV(t, n) {
        return n == null || op(t, n, $t(n));
      }
      function so(t, n) {
        return t === n || t !== t && n !== n;
      }
      var sV = Hl(Dc), aV = Hl(function(t, n) {
        return t >= n;
      }), mi = up(function() {
        return arguments;
      }()) ? up : function(t) {
        return et(t) && De.call(t, "callee") && !Zh.call(t, "callee");
      }, ae = k.isArray, lV = Th ? yn(Th) : wy;
      function un(t) {
        return t != null && Xl(t.length) && !sr(t);
      }
      function it(t) {
        return et(t) && un(t);
      }
      function uV(t) {
        return t === !0 || t === !1 || et(t) && Zt(t) == dt;
      }
      var Tr = C$ || $d, cV = xh ? yn(xh) : vy;
      function dV(t) {
        return et(t) && t.nodeType === 1 && !$a(t);
      }
      function fV(t) {
        if (t == null)
          return !0;
        if (un(t) && (ae(t) || typeof t == "string" || typeof t.splice == "function" || Tr(t) || ls(t) || mi(t)))
          return !t.length;
        var n = Pt(t);
        if (n == vt || n == Ct)
          return !t.size;
        if (_a(t))
          return !Rc(t).length;
        for (var i in t)
          if (De.call(t, i))
            return !1;
        return !0;
      }
      function hV(t, n) {
        return ma(t, n);
      }
      function pV(t, n, i) {
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
      function mV(t) {
        return typeof t == "number" && Jh(t);
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
      var _m = Lh ? yn(Lh) : gy;
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
        return cp(t);
      }
      function $V(t) {
        return t === null;
      }
      function yV(t) {
        return t == null;
      }
      function gm(t) {
        return typeof t == "number" || et(t) && Zt(t) == Te;
      }
      function $a(t) {
        if (!et(t) || Zt(t) != bt)
          return !1;
        var n = El(t);
        if (n === null)
          return !0;
        var i = De.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && yl.call(i) == v$;
      }
      var dd = Mh ? yn(Mh) : $y;
      function bV(t) {
        return vm(t) && t >= -ct && t <= ct;
      }
      var $m = Nh ? yn(Nh) : yy;
      function Ql(t) {
        return typeof t == "string" || !ae(t) && et(t) && Zt(t) == Xn;
      }
      function Cn(t) {
        return typeof t == "symbol" || et(t) && Zt(t) == _t;
      }
      var ls = Dh ? yn(Dh) : by;
      function CV(t) {
        return t === r;
      }
      function VV(t) {
        return et(t) && Pt(t) == ft;
      }
      function EV(t) {
        return et(t) && Zt(t) == Kr;
      }
      var SV = Hl(Pc), kV = Hl(function(t, n) {
        return t <= n;
      });
      function ym(t) {
        if (!t)
          return [];
        if (un(t))
          return Ql(t) ? ro(t) : ln(t);
        if (aa && t[aa])
          return i$(t[aa]());
        var n = Pt(t), i = n == vt ? Sc : n == Ct ? _l : us;
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
        return t ? di(le(t), 0, Ce) : 0;
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
        t = Uh(t);
        var i = Y.test(t);
        return i || xe.test(t) ? W0(t.slice(2), i ? 2 : 8) : pe.test(t) ? _n : +t;
      }
      function Cm(t) {
        return ko(t, cn(t));
      }
      function IV(t) {
        return t ? di(le(t), -ct, ct) : t === 0 ? t : 0;
      }
      function Le(t) {
        return t == null ? "" : bn(t);
      }
      var AV = is(function(t, n) {
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
      }), TV = is(function(t, n, i, l) {
        ko(n, $t(n), t, l);
      }), xV = rr(Lc);
      function LV(t, n) {
        var i = rs(t);
        return n == null ? i : np(i, n);
      }
      var MV = de(function(t, n) {
        t = Pe(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Kt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], _ = cn(p), $ = -1, V = _.length; ++$ < V; ) {
            var D = _[$], O = t[D];
            (O === r || so(O, ts[D]) && !De.call(t, D)) && (t[D] = p[D]);
          }
        return t;
      }), NV = de(function(t) {
        return t.push(r, Up), $n(Em, r, t);
      });
      function DV(t, n) {
        return Bh(t, ee(n, 3), So);
      }
      function OV(t, n) {
        return Bh(t, ee(n, 3), Nc);
      }
      function BV(t, n) {
        return t == null ? t : Mc(t, ee(n, 3), cn);
      }
      function RV(t, n) {
        return t == null ? t : ap(t, ee(n, 3), cn);
      }
      function PV(t, n) {
        return t && So(t, ee(n, 3));
      }
      function FV(t, n) {
        return t && Nc(t, ee(n, 3));
      }
      function UV(t) {
        return t == null ? [] : Dl(t, $t(t));
      }
      function WV(t) {
        return t == null ? [] : Dl(t, cn(t));
      }
      function fd(t, n, i) {
        var l = t == null ? r : fi(t, n);
        return l === r ? i : l;
      }
      function HV(t, n) {
        return t != null && zp(t, n, fy);
      }
      function hd(t, n) {
        return t != null && zp(t, n, hy);
      }
      var zV = Op(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = bl.call(n)), t[n] = i;
      }, md(dn)), qV = Op(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = bl.call(n)), De.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, ee), GV = de(pa);
      function $t(t) {
        return un(t) ? ep(t) : Rc(t);
      }
      function cn(t) {
        return un(t) ? ep(t, !0) : Cy(t);
      }
      function YV(t, n) {
        var i = {};
        return n = ee(n, 3), So(t, function(l, d, p) {
          nr(i, n(l, d, p), l);
        }), i;
      }
      function jV(t, n) {
        var i = {};
        return n = ee(n, 3), So(t, function(l, d, p) {
          nr(i, d, n(l, d, p));
        }), i;
      }
      var ZV = is(function(t, n, i) {
        Ol(t, n, i);
      }), Em = is(function(t, n, i, l) {
        Ol(t, n, i, l);
      }), KV = rr(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ye(n, function(p) {
          return p = Ir(p, t), l || (l = p.length > 1), p;
        }), ko(t, Xc(t), i), l && (i = Fn(i, y | b | B, zy));
        for (var d = n.length; d--; )
          zc(i, n[d]);
        return i;
      });
      function JV(t, n) {
        return Sm(t, Jl(ee(n)));
      }
      var XV = rr(function(t, n) {
        return t == null ? {} : Ey(t, n);
      });
      function Sm(t, n) {
        if (t == null)
          return {};
        var i = Ye(Xc(t), function(l) {
          return [l];
        });
        return n = ee(n), vp(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function QV(t, n, i) {
        n = Ir(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[Io(n[l])];
          p === r && (l = d, p = i), t = sr(p) ? p.call(t) : p;
        }
        return t;
      }
      function eE(t, n, i) {
        return t == null ? t : wa(t, n, i);
      }
      function tE(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : wa(t, n, i, l);
      }
      var km = Pp($t), Im = Pp(cn);
      function nE(t, n, i) {
        var l = ae(t), d = l || Tr(t) || ls(t);
        if (n = ee(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : Ke(t) ? i = sr(p) ? rs(El(t)) : {} : i = {};
        }
        return (d ? Bn : So)(t, function(_, $, V) {
          return n(i, _, $, V);
        }), i;
      }
      function oE(t, n) {
        return t == null ? !0 : zc(t, n);
      }
      function rE(t, n, i) {
        return t == null ? t : bp(t, n, Yc(i));
      }
      function iE(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : bp(t, n, Yc(i), l);
      }
      function us(t) {
        return t == null ? [] : Ec(t, $t(t));
      }
      function sE(t) {
        return t == null ? [] : Ec(t, cn(t));
      }
      function aE(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Hn(i), i = i === i ? i : 0), n !== r && (n = Hn(n), n = n === n ? n : 0), di(Hn(t), n, i);
      }
      function lE(t, n, i) {
        return n = ar(n), i === r ? (i = n, n = 0) : i = ar(i), t = Hn(t), py(t, n, i);
      }
      function uE(t, n, i) {
        if (i && typeof i != "boolean" && Kt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = ar(t), n === r ? (n = t, t = 0) : n = ar(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Xh();
          return Rt(t + d * (n - t + U0("1e-" + ((d + "").length - 1))), n);
        }
        return Uc(t, n);
      }
      var cE = ss(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Am(n) : n);
      });
      function Am(t) {
        return pd(Le(t).toLowerCase());
      }
      function Tm(t) {
        return t = Le(t), t && t.replace(qi, e$).replace(x0, "");
      }
      function dE(t, n, i) {
        t = Le(t), n = bn(n);
        var l = t.length;
        i = i === r ? l : di(le(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function fE(t) {
        return t = Le(t), t && Go.test(t) ? t.replace(vr, t$) : t;
      }
      function hE(t) {
        return t = Le(t), t && ei.test(t) ? t.replace(yo, "\\$&") : t;
      }
      var pE = ss(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), mE = ss(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), wE = Mp("toLowerCase");
      function vE(t, n, i) {
        t = Le(t), n = le(n);
        var l = n ? Qi(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Wl(Al(d), i) + t + Wl(Il(d), i);
      }
      function _E(t, n, i) {
        t = Le(t), n = le(n);
        var l = n ? Qi(t) : 0;
        return n && l < n ? t + Wl(n - l, i) : t;
      }
      function gE(t, n, i) {
        t = Le(t), n = le(n);
        var l = n ? Qi(t) : 0;
        return n && l < n ? Wl(n - l, i) + t : t;
      }
      function $E(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), k$(Le(t).replace(bo, ""), n || 0);
      }
      function yE(t, n, i) {
        return (i ? Kt(t, n, i) : n === r) ? n = 1 : n = le(n), Wc(Le(t), n);
      }
      function bE() {
        var t = arguments, n = Le(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var CE = ss(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function VE(t, n, i) {
        return i && typeof i != "number" && Kt(t, n, i) && (n = i = r), i = i === r ? Ce : i >>> 0, i ? (t = Le(t), t && (typeof n == "string" || n != null && !dd(n)) && (n = bn(n), !n && Xi(t)) ? Ar(ro(t), 0, i) : t.split(n, i)) : [];
      }
      var EE = ss(function(t, n, i) {
        return t + (i ? " " : "") + pd(n);
      });
      function SE(t, n, i) {
        return t = Le(t), i = i == null ? 0 : di(le(i), 0, t.length), n = bn(n), t.slice(i, i + n.length) == n;
      }
      function kE(t, n, i) {
        var l = h.templateSettings;
        i && Kt(t, n, i) && (n = r), t = Le(t), n = eu({}, n, l, Fp);
        var d = eu({}, n.imports, l.imports, Fp), p = $t(d), _ = Ec(d, p), $, V, D = 0, O = n.interpolate || Bt, R = "__p += '", G = kc(
          (n.escape || Bt).source + "|" + O.source + "|" + (O === Yo ? ti : Bt).source + "|" + (n.evaluate || Bt).source + "|$",
          "g"
        ), J = "//# sourceURL=" + (De.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++O0 + "]") + `
`;
        t.replace(G, function(oe, fe, ge, Vn, Jt, En) {
          return ge || (ge = Vn), R += t.slice(D, En).replace(ni, n$), fe && ($ = !0, R += `' +
__e(` + fe + `) +
'`), Jt && (V = !0, R += `';
` + Jt + `;
__p += '`), ge && (R += `' +
((__t = (` + ge + `)) == null ? '' : __t) +
'`), D = En + oe.length, oe;
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
        R = (V ? R.replace(wr, "") : R).replace(Jr, "$1").replace(Xr, "$1;"), R = "function(" + (ne || "obj") + `) {
` + (ne ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + R + `return __p
}`;
        var ue = Lm(function() {
          return ke(p, J + "return " + R).apply(r, _);
        });
        if (ue.source = R, cd(ue))
          throw ue;
        return ue;
      }
      function IE(t) {
        return Le(t).toLowerCase();
      }
      function AE(t) {
        return Le(t).toUpperCase();
      }
      function TE(t, n, i) {
        if (t = Le(t), t && (i || n === r))
          return Uh(t);
        if (!t || !(n = bn(n)))
          return t;
        var l = ro(t), d = ro(n), p = Wh(l, d), _ = Hh(l, d) + 1;
        return Ar(l, p, _).join("");
      }
      function xE(t, n, i) {
        if (t = Le(t), t && (i || n === r))
          return t.slice(0, qh(t) + 1);
        if (!t || !(n = bn(n)))
          return t;
        var l = ro(t), d = Hh(l, ro(n)) + 1;
        return Ar(l, 0, d).join("");
      }
      function LE(t, n, i) {
        if (t = Le(t), t && (i || n === r))
          return t.replace(bo, "");
        if (!t || !(n = bn(n)))
          return t;
        var l = ro(t), d = Wh(l, ro(n));
        return Ar(l, d).join("");
      }
      function ME(t, n) {
        var i = he, l = Ae;
        if (Ke(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? le(n.length) : i, l = "omission" in n ? bn(n.omission) : l;
        }
        t = Le(t);
        var p = t.length;
        if (Xi(t)) {
          var _ = ro(t);
          p = _.length;
        }
        if (i >= p)
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
      function NE(t) {
        return t = Le(t), t && qo.test(t) ? t.replace(zo, u$) : t;
      }
      var DE = ss(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), pd = Mp("toUpperCase");
      function xm(t, n, i) {
        return t = Le(t), n = i ? r : n, n === r ? r$(t) ? f$(t) : Z0(t) : t.match(n) || [];
      }
      var Lm = de(function(t, n) {
        try {
          return $n(t, r, n);
        } catch (i) {
          return cd(i) ? i : new ie(i);
        }
      }), OE = rr(function(t, n) {
        return Bn(n, function(i) {
          i = Io(i), nr(t, i, ld(t[i], t));
        }), t;
      });
      function BE(t) {
        var n = t == null ? 0 : t.length, i = ee();
        return t = n ? Ye(t, function(l) {
          if (typeof l[1] != "function")
            throw new Rn(c);
          return [i(l[0]), l[1]];
        }) : [], de(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if ($n(p[0], this, l))
              return $n(p[1], this, l);
          }
        });
      }
      function RE(t) {
        return uy(Fn(t, y));
      }
      function md(t) {
        return function() {
          return t;
        };
      }
      function PE(t, n) {
        return t == null || t !== t ? n : t;
      }
      var FE = Dp(), UE = Dp(!0);
      function dn(t) {
        return t;
      }
      function wd(t) {
        return dp(typeof t == "function" ? t : Fn(t, y));
      }
      function WE(t) {
        return hp(Fn(t, y));
      }
      function HE(t, n) {
        return pp(t, Fn(n, y));
      }
      var zE = de(function(t, n) {
        return function(i) {
          return pa(i, t, n);
        };
      }), qE = de(function(t, n) {
        return function(i) {
          return pa(t, i, n);
        };
      });
      function vd(t, n, i) {
        var l = $t(n), d = Dl(n, l);
        i == null && !(Ke(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Dl(n, $t(n)));
        var p = !(Ke(i) && "chain" in i) || !!i.chain, _ = sr(t);
        return Bn(d, function($) {
          var V = n[$];
          t[$] = V, _ && (t.prototype[$] = function() {
            var D = this.__chain__;
            if (p || D) {
              var O = t(this.__wrapped__), R = O.__actions__ = ln(this.__actions__);
              return R.push({ func: V, args: arguments, thisArg: t }), O.__chain__ = D, O;
            }
            return V.apply(t, Cr([this.value()], arguments));
          });
        }), t;
      }
      function GE() {
        return Et._ === this && (Et._ = _$), this;
      }
      function _d() {
      }
      function YE(t) {
        return t = le(t), de(function(n) {
          return mp(n, t);
        });
      }
      var jE = Zc(Ye), ZE = Zc(Oh), KE = Zc($c);
      function Mm(t) {
        return nd(t) ? yc(Io(t)) : Sy(t);
      }
      function JE(t) {
        return function(n) {
          return t == null ? r : fi(t, n);
        };
      }
      var XE = Bp(), QE = Bp(!0);
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
        if (t = le(t), t < 1 || t > ct)
          return [];
        var i = Ce, l = Rt(t, Ce);
        n = ee(n), t -= Ce;
        for (var d = Vc(l, n); ++i < t; )
          n(i);
        return d;
      }
      function rS(t) {
        return ae(t) ? Ye(t, Io) : Cn(t) ? [t] : ln(Qp(Le(t)));
      }
      function iS(t) {
        var n = ++w$;
        return Le(t) + n;
      }
      var sS = Ul(function(t, n) {
        return t + n;
      }, 0), aS = Kc("ceil"), lS = Ul(function(t, n) {
        return t / n;
      }, 1), uS = Kc("floor");
      function cS(t) {
        return t && t.length ? Nl(t, dn, Dc) : r;
      }
      function dS(t, n) {
        return t && t.length ? Nl(t, ee(n, 2), Dc) : r;
      }
      function fS(t) {
        return Ph(t, dn);
      }
      function hS(t, n) {
        return Ph(t, ee(n, 2));
      }
      function pS(t) {
        return t && t.length ? Nl(t, dn, Pc) : r;
      }
      function mS(t, n) {
        return t && t.length ? Nl(t, ee(n, 2), Pc) : r;
      }
      var wS = Ul(function(t, n) {
        return t * n;
      }, 1), vS = Kc("round"), _S = Ul(function(t, n) {
        return t - n;
      }, 0);
      function gS(t) {
        return t && t.length ? Cc(t, dn) : 0;
      }
      function $S(t, n) {
        return t && t.length ? Cc(t, ee(n, 2)) : 0;
      }
      return h.after = WC, h.ary = cm, h.assign = AV, h.assignIn = Vm, h.assignInWith = eu, h.assignWith = TV, h.at = xV, h.before = dm, h.bind = ld, h.bindAll = OE, h.bindKey = fm, h.castArray = eV, h.chain = am, h.chunk = ub, h.compact = cb, h.concat = db, h.cond = BE, h.conforms = RE, h.constant = md, h.countBy = gC, h.create = LV, h.curry = hm, h.curryRight = pm, h.debounce = mm, h.defaults = MV, h.defaultsDeep = NV, h.defer = HC, h.delay = zC, h.difference = fb, h.differenceBy = hb, h.differenceWith = pb, h.drop = mb, h.dropRight = wb, h.dropRightWhile = vb, h.dropWhile = _b, h.fill = gb, h.filter = yC, h.flatMap = VC, h.flatMapDeep = EC, h.flatMapDepth = SC, h.flatten = om, h.flattenDeep = $b, h.flattenDepth = yb, h.flip = qC, h.flow = FE, h.flowRight = UE, h.fromPairs = bb, h.functions = UV, h.functionsIn = WV, h.groupBy = kC, h.initial = Vb, h.intersection = Eb, h.intersectionBy = Sb, h.intersectionWith = kb, h.invert = zV, h.invertBy = qV, h.invokeMap = AC, h.iteratee = wd, h.keyBy = TC, h.keys = $t, h.keysIn = cn, h.map = jl, h.mapKeys = YV, h.mapValues = jV, h.matches = WE, h.matchesProperty = HE, h.memoize = Kl, h.merge = ZV, h.mergeWith = Em, h.method = zE, h.methodOf = qE, h.mixin = vd, h.negate = Jl, h.nthArg = YE, h.omit = KV, h.omitBy = JV, h.once = GC, h.orderBy = xC, h.over = jE, h.overArgs = YC, h.overEvery = ZE, h.overSome = KE, h.partial = ud, h.partialRight = wm, h.partition = LC, h.pick = XV, h.pickBy = Sm, h.property = Mm, h.propertyOf = JE, h.pull = xb, h.pullAll = im, h.pullAllBy = Lb, h.pullAllWith = Mb, h.pullAt = Nb, h.range = XE, h.rangeRight = QE, h.rearg = jC, h.reject = DC, h.remove = Db, h.rest = ZC, h.reverse = sd, h.sampleSize = BC, h.set = eE, h.setWith = tE, h.shuffle = RC, h.slice = Ob, h.sortBy = UC, h.sortedUniq = Hb, h.sortedUniqBy = zb, h.split = VE, h.spread = KC, h.tail = qb, h.take = Gb, h.takeRight = Yb, h.takeRightWhile = jb, h.takeWhile = Zb, h.tap = cC, h.throttle = JC, h.thru = Yl, h.toArray = ym, h.toPairs = km, h.toPairsIn = Im, h.toPath = rS, h.toPlainObject = Cm, h.transform = nE, h.unary = XC, h.union = Kb, h.unionBy = Jb, h.unionWith = Xb, h.uniq = Qb, h.uniqBy = eC, h.uniqWith = tC, h.unset = oE, h.unzip = ad, h.unzipWith = sm, h.update = rE, h.updateWith = iE, h.values = us, h.valuesIn = sE, h.without = nC, h.words = xm, h.wrap = QC, h.xor = oC, h.xorBy = rC, h.xorWith = iC, h.zip = sC, h.zipObject = aC, h.zipObjectDeep = lC, h.zipWith = uC, h.entries = km, h.entriesIn = Im, h.extend = Vm, h.extendWith = eu, vd(h, h), h.add = sS, h.attempt = Lm, h.camelCase = cE, h.capitalize = Am, h.ceil = aS, h.clamp = aE, h.clone = tV, h.cloneDeep = oV, h.cloneDeepWith = rV, h.cloneWith = nV, h.conformsTo = iV, h.deburr = Tm, h.defaultTo = PE, h.divide = lS, h.endsWith = dE, h.eq = so, h.escape = fE, h.escapeRegExp = hE, h.every = $C, h.find = bC, h.findIndex = tm, h.findKey = DV, h.findLast = CC, h.findLastIndex = nm, h.findLastKey = OV, h.floor = uS, h.forEach = lm, h.forEachRight = um, h.forIn = BV, h.forInRight = RV, h.forOwn = PV, h.forOwnRight = FV, h.get = fd, h.gt = sV, h.gte = aV, h.has = HV, h.hasIn = hd, h.head = rm, h.identity = dn, h.includes = IC, h.indexOf = Cb, h.inRange = lE, h.invoke = GV, h.isArguments = mi, h.isArray = ae, h.isArrayBuffer = lV, h.isArrayLike = un, h.isArrayLikeObject = it, h.isBoolean = uV, h.isBuffer = Tr, h.isDate = cV, h.isElement = dV, h.isEmpty = fV, h.isEqual = hV, h.isEqualWith = pV, h.isError = cd, h.isFinite = mV, h.isFunction = sr, h.isInteger = vm, h.isLength = Xl, h.isMap = _m, h.isMatch = wV, h.isMatchWith = vV, h.isNaN = _V, h.isNative = gV, h.isNil = yV, h.isNull = $V, h.isNumber = gm, h.isObject = Ke, h.isObjectLike = et, h.isPlainObject = $a, h.isRegExp = dd, h.isSafeInteger = bV, h.isSet = $m, h.isString = Ql, h.isSymbol = Cn, h.isTypedArray = ls, h.isUndefined = CV, h.isWeakMap = VV, h.isWeakSet = EV, h.join = Ib, h.kebabCase = pE, h.last = Wn, h.lastIndexOf = Ab, h.lowerCase = mE, h.lowerFirst = wE, h.lt = SV, h.lte = kV, h.max = cS, h.maxBy = dS, h.mean = fS, h.meanBy = hS, h.min = pS, h.minBy = mS, h.stubArray = gd, h.stubFalse = $d, h.stubObject = eS, h.stubString = tS, h.stubTrue = nS, h.multiply = wS, h.nth = Tb, h.noConflict = GE, h.noop = _d, h.now = Zl, h.pad = vE, h.padEnd = _E, h.padStart = gE, h.parseInt = $E, h.random = uE, h.reduce = MC, h.reduceRight = NC, h.repeat = yE, h.replace = bE, h.result = QV, h.round = vS, h.runInContext = C, h.sample = OC, h.size = PC, h.snakeCase = CE, h.some = FC, h.sortedIndex = Bb, h.sortedIndexBy = Rb, h.sortedIndexOf = Pb, h.sortedLastIndex = Fb, h.sortedLastIndexBy = Ub, h.sortedLastIndexOf = Wb, h.startCase = EE, h.startsWith = SE, h.subtract = _S, h.sum = gS, h.sumBy = $S, h.template = kE, h.times = oS, h.toFinite = ar, h.toInteger = le, h.toLength = bm, h.toLower = IE, h.toNumber = Hn, h.toSafeInteger = IV, h.toString = Le, h.toUpper = AE, h.trim = TE, h.trimEnd = xE, h.trimStart = LE, h.truncate = ME, h.unescape = NE, h.uniqueId = iS, h.upperCase = DE, h.upperFirst = pd, h.each = lm, h.eachRight = um, h.first = rm, vd(h, function() {
        var t = {};
        return So(h, function(n, i) {
          De.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Bn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Bn(["drop", "take"], function(t, n) {
        we.prototype[t] = function(i) {
          i = i === r ? 1 : pt(le(i), 0);
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
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: ee(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
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
          return pa(i, t, n);
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
      }, So(we.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var _ = this.__wrapped__, $ = l ? [1] : arguments, V = _ instanceof we, D = $[0], O = V || ae(_), R = function(fe) {
            var ge = d.apply(h, Cr([fe], $));
            return l && G ? ge[0] : ge;
          };
          O && i && typeof D == "function" && D.length != 1 && (V = O = !1);
          var G = this.__chain__, J = !!this.__actions__.length, ne = p && !G, ue = V && !J;
          if (!p && O) {
            _ = ue ? _ : new we(this);
            var oe = t.apply(_, $);
            return oe.__actions__.push({ func: Yl, args: [R], thisArg: r }), new Pn(oe, G);
          }
          return ne && ue ? t.apply(this, $) : (oe = this.thru(R), ne ? l ? oe.value()[0] : oe.value() : oe);
        });
      }), Bn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = gl[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(ae(p) ? p : [], d);
          }
          return this[i](function(_) {
            return n.apply(ae(_) ? _ : [], d);
          });
        };
      }), So(we.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          De.call(os, l) || (os[l] = []), os[l].push({ name: n, func: i });
        }
      }), os[Fl(r, S).name] = [{
        name: "wrapper",
        func: r
      }], we.prototype.clone = N$, we.prototype.reverse = D$, we.prototype.value = O$, h.prototype.at = dC, h.prototype.chain = fC, h.prototype.commit = hC, h.prototype.next = pC, h.prototype.plant = wC, h.prototype.reverse = vC, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = _C, h.prototype.first = h.prototype.head, aa && (h.prototype[aa] = mC), h;
    }, es = h$();
    ai ? ((ai.exports = es)._ = es, wc._ = es) : Et._ = es;
  }).call(ya);
})(Be, Be.exports);
const Fk = "/alarms?_s=", Ju = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Uk = async (e, o) => {
  try {
    return (await Dt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Ju
    )).status === 204;
  } catch {
    return !1;
  }
}, kg = async (e, o) => {
  try {
    return (await Dt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Ju
    )).status === 204;
  } catch {
    return !1;
  }
}, Wk = async (e, o) => {
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
}, Hk = async () => {
  try {
    const e = `${Fk}isSituation==true&limit=0`, o = await mr(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, zk = async (e) => {
  try {
    const o = e.join(",id=="), r = await mr(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Ig = async (e) => {
  try {
    const o = await mr(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, qk = async (e) => {
  try {
    const o = await mr(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, Gk = async () => {
  try {
    const e = await mr("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Be.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Yk = async (e, o, r) => {
  try {
    return (await mr.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Ju
    )).status == 204;
  } catch {
    return !1;
  }
}, jk = async (e, o) => {
  try {
    return (await mr.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, Zk = async () => {
  try {
    const e = await mr.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, Kk = window.Pinia.defineStore, wo = Kk("situationsStore", {
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
      const e = await Gk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Hk();
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
        const s = await Ig(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await zk(a);
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
          const a = await qk(s);
          a && (r[s] = Be.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await Zk();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), Jk = window.Vue.openBlock, Xk = window.Vue.createElementBlock, Qk = window.Vue.createElementVNode;
var eI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tI = {}, nI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oI = /* @__PURE__ */ Qk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), rI = [
  oI
];
function iI(e, o) {
  return Jk(), Xk("svg", nI, rI);
}
var Us = /* @__PURE__ */ eI(tI, [["render", iI]]);
var sI = Object.defineProperty, rw = Object.getOwnPropertySymbols, aI = Object.prototype.hasOwnProperty, lI = Object.prototype.propertyIsEnumerable, iw = (e, o, r) => o in e ? sI(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, sw = (e, o) => {
  for (var r in o || (o = {}))
    aI.call(o, r) && iw(e, r, o[r]);
  if (rw)
    for (var r of rw(o))
      lI.call(o, r) && iw(e, r, o[r]);
  return e;
};
const uI = window.Vue.defineComponent, cI = window.Vue.toRaw, Od = window.Vue.h;
var dI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fI = {
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
}, hI = uI({
  props: fI,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = cI(this.icon);
    return this.$slots.default ? Od("span", { class: "feather-icon-container" }, [
      Od(this.$slots.default()[0], sw({
        class: o
      }, r))
    ]) : Od(s, sw({
      class: o
    }, r));
  }
});
var X = /* @__PURE__ */ dI(hI, [["__scopeId", "data-v-52cbf270"]]);
const pI = window.Vue.openBlock, mI = window.Vue.createElementBlock, wI = window.Vue.createElementVNode;
var vI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const _I = {}, gI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, $I = /* @__PURE__ */ wI("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), yI = [
  $I
];
function bI(e, o) {
  return pI(), mI("svg", gI, yI);
}
var Ag = /* @__PURE__ */ vI(_I, [["render", bI]]);
const xt = {
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
function CI(e, o) {
  We(2, arguments);
  var r = wt(e), s = Oo(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function VI(e, o) {
  We(2, arguments);
  var r = wt(e).getTime(), s = Oo(o);
  return new Date(r + s);
}
var EI = {};
function zs() {
  return EI;
}
function aw(e, o) {
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
function lw(e) {
  We(1, arguments);
  var o = wt(e);
  return o.setHours(0, 0, 0, 0), o;
}
function SI(e, o) {
  We(2, arguments);
  var r = wt(e), s = wt(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Tg(e, o) {
  We(2, arguments);
  var r = lw(e), s = lw(o);
  return r.getTime() === s.getTime();
}
function kI(e) {
  return We(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function II(e) {
  if (We(1, arguments), !kI(e) && typeof e != "number")
    return !1;
  var o = wt(e);
  return !isNaN(Number(o));
}
function AI(e, o) {
  We(2, arguments);
  var r = Oo(o);
  return VI(e, -r);
}
var TI = 864e5;
function xI(e) {
  We(1, arguments);
  var o = wt(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / TI) + 1;
}
function Du(e) {
  We(1, arguments);
  var o = 1, r = wt(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function xg(e) {
  We(1, arguments);
  var o = wt(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Du(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Du(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function LI(e) {
  We(1, arguments);
  var o = xg(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Du(r);
  return s;
}
var MI = 6048e5;
function NI(e) {
  We(1, arguments);
  var o = wt(e), r = Du(o).getTime() - LI(o).getTime();
  return Math.round(r / MI) + 1;
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
function Lg(e, o) {
  var r, s, a, u, c, f, m, v;
  We(1, arguments);
  var g = wt(e), y = g.getUTCFullYear(), b = zs(), B = Oo((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = b.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var N = new Date(0);
  N.setUTCFullYear(y + 1, 0, B), N.setUTCHours(0, 0, 0, 0);
  var F = Ou(N, o), M = new Date(0);
  M.setUTCFullYear(y, 0, B), M.setUTCHours(0, 0, 0, 0);
  var S = Ou(M, o);
  return g.getTime() >= F.getTime() ? y + 1 : g.getTime() >= S.getTime() ? y : y - 1;
}
function DI(e, o) {
  var r, s, a, u, c, f, m, v;
  We(1, arguments);
  var g = zs(), y = Oo((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = Lg(e, o), B = new Date(0);
  B.setUTCFullYear(b, 0, y), B.setUTCHours(0, 0, 0, 0);
  var N = Ou(B, o);
  return N;
}
var OI = 6048e5;
function BI(e, o) {
  We(1, arguments);
  var r = wt(e), s = Ou(r, o).getTime() - DI(r, o).getTime();
  return Math.round(s / OI) + 1;
}
function Oe(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var RI = {
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
const xr = RI;
var fs = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, PI = {
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
    var a = Lg(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return Oe(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : Oe(u, o.length);
  },
  R: function(e, o) {
    var r = xg(e);
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
    var a = BI(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, o.length);
  },
  I: function(e, o, r) {
    var s = NI(e);
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
    var s = xI(e);
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
        return cw(u);
      case "XXXX":
      case "XX":
        return Ti(u);
      case "XXXXX":
      case "XXX":
      default:
        return Ti(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return cw(u);
      case "xxxx":
      case "xx":
        return Ti(u);
      case "xxxxx":
      case "xxx":
      default:
        return Ti(u, ":");
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
        return "GMT" + Ti(u, ":");
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
        return "GMT" + Ti(u, ":");
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
function uw(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + Oe(u, 2);
}
function cw(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + Oe(Math.abs(e) / 60, 2);
  }
  return Ti(e, o);
}
function Ti(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = Oe(Math.floor(a / 60), 2), c = Oe(a % 60, 2);
  return s + u + r + c;
}
const FI = PI;
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
}, UI = function(e, o) {
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
}, WI = {
  p: Mg,
  P: UI
};
const HI = WI;
var zI = ["D", "DD"], qI = ["YY", "YYYY"];
function GI(e) {
  return zI.indexOf(e) !== -1;
}
function YI(e) {
  return qI.indexOf(e) !== -1;
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
var jI = {
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
}, ZI = function(e, o, r) {
  var s, a = jI[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const KI = ZI;
function Bd(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var JI = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, XI = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, QI = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, eA = {
  date: Bd({
    formats: JI,
    defaultWidth: "full"
  }),
  time: Bd({
    formats: XI,
    defaultWidth: "full"
  }),
  dateTime: Bd({
    formats: QI,
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
  era: ba({
    values: iA,
    defaultWidth: "wide"
  }),
  quarter: ba({
    values: sA,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ba({
    values: aA,
    defaultWidth: "wide"
  }),
  day: ba({
    values: lA,
    defaultWidth: "wide"
  }),
  dayPeriod: ba({
    values: uA,
    defaultWidth: "wide",
    formattingValues: cA,
    defaultFormattingWidth: "wide"
  })
};
const hA = fA;
function Ca(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? mA(f, function(y) {
      return y.test(c);
    }) : pA(f, function(y) {
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
function pA(e, o) {
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
}, kA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, IA = {
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
  era: Ca({
    matchPatterns: gA,
    defaultMatchWidth: "wide",
    parsePatterns: $A,
    defaultParseWidth: "any"
  }),
  quarter: Ca({
    matchPatterns: yA,
    defaultMatchWidth: "wide",
    parsePatterns: bA,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ca({
    matchPatterns: CA,
    defaultMatchWidth: "wide",
    parsePatterns: VA,
    defaultParseWidth: "any"
  }),
  day: Ca({
    matchPatterns: EA,
    defaultMatchWidth: "wide",
    parsePatterns: SA,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ca({
    matchPatterns: kA,
    defaultMatchWidth: "any",
    parsePatterns: IA,
    defaultParseWidth: "any"
  })
};
const TA = AA;
var xA = {
  code: "en-US",
  formatDistance: KI,
  formatLong: tA,
  formatRelative: rA,
  localize: hA,
  match: TA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Ng = xA;
var LA = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, MA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, NA = /^'([^]*?)'?$/, DA = /''/g, OA = /[a-zA-Z]/;
function BA(e, o, r) {
  var s, a, u, c, f, m, v, g, y, b, B, N, F, M, S, T, x, U;
  We(2, arguments);
  var A = String(o), P = zs(), H = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : P.locale) !== null && s !== void 0 ? s : Ng, K = Oo((u = (c = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (v = r.locale) === null || v === void 0 || (g = v.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : P.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = P.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(K >= 1 && K <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Me = Oo((B = (N = (F = (M = r == null ? void 0 : r.weekStartsOn) !== null && M !== void 0 ? M : r == null || (S = r.locale) === null || S === void 0 || (T = S.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && F !== void 0 ? F : P.weekStartsOn) !== null && N !== void 0 ? N : (x = P.locale) === null || x === void 0 || (U = x.options) === null || U === void 0 ? void 0 : U.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(Me >= 0 && Me <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!H.localize)
    throw new RangeError("locale must contain localize property");
  if (!H.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = wt(e);
  if (!II(he))
    throw new RangeError("Invalid time value");
  var Ae = Df(he), Se = AI(he, Ae), He = {
    firstWeekContainsDate: K,
    weekStartsOn: Me,
    locale: H,
    _originalDate: he
  }, Ge = A.match(MA).map(function($e) {
    var Ze = $e[0];
    if (Ze === "p" || Ze === "P") {
      var Xe = HI[Ze];
      return Xe($e, H.formatLong);
    }
    return $e;
  }).join("").match(LA).map(function($e) {
    if ($e === "''")
      return "'";
    var Ze = $e[0];
    if (Ze === "'")
      return RA($e);
    var Xe = FI[Ze];
    if (Xe)
      return !(r != null && r.useAdditionalWeekYearTokens) && YI($e) && fw($e, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && GI($e) && fw($e, o, String(e)), Xe(Se, $e, H.localize, He);
    if (Ze.match(OA))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ze + "`");
    return $e;
  }).join("");
  return Ge;
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
var hw = 1e3 * 60, Bu = 60 * 24, pw = Bu * 30, mw = Bu * 365;
function Xu(e, o, r) {
  var s, a, u;
  We(2, arguments);
  var c = zs(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : Ng;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = SI(e, o);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var v = Dg(PA(r), {
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
  var N = y.getTime() - g.getTime(), F = N / hw, M = Df(y) - Df(g), S = (N - M) / hw, T = r == null ? void 0 : r.unit, x;
  if (T ? x = String(T) : F < 1 ? x = "second" : F < 60 ? x = "minute" : F < Bu ? x = "hour" : S < pw ? x = "day" : S < mw ? x = "month" : x = "year", x === "second") {
    var U = B(N / 1e3);
    return f.formatDistance("xSeconds", U, v);
  } else if (x === "minute") {
    var A = B(F);
    return f.formatDistance("xMinutes", A, v);
  } else if (x === "hour") {
    var P = B(F / 60);
    return f.formatDistance("xHours", P, v);
  } else if (x === "day") {
    var H = B(S / Bu);
    return f.formatDistance("xDays", H, v);
  } else if (x === "month") {
    var K = B(S / pw);
    return K === 12 && T !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", K, v);
  } else if (x === "year") {
    var Me = B(S / mw);
    return f.formatDistance("xYears", Me, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function FA(e, o, r) {
  We(2, arguments);
  var s = aw(e, r), a = aw(o, r);
  return s.getTime() === a.getTime();
}
function UA(e, o) {
  return We(1, arguments), FA(e, Date.now(), o);
}
function WA(e) {
  return We(1, arguments), Tg(e, Date.now());
}
function HA(e, o) {
  We(2, arguments);
  var r = Oo(o);
  return CI(e, -r);
}
function zA(e) {
  return We(1, arguments), Tg(e, HA(Date.now(), 1));
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
let Lt = Object.freeze, Mt = Object.seal, ks = Object.create, Bg = typeof Reflect < "u" && Reflect, Of = Bg.apply, Bf = Bg.construct;
Lt || (Lt = function(o) {
  return o;
});
Mt || (Mt = function(o) {
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
const Va = ut(Array.prototype.forEach), QA = ut(Array.prototype.lastIndexOf), _w = ut(Array.prototype.pop), hs = ut(Array.prototype.push), eT = ut(Array.prototype.splice), Wr = Array.isArray, Za = ut(String.prototype.toLowerCase), Rd = ut(String.prototype.toString), gw = ut(String.prototype.match), Ea = ut(String.prototype.replace), $w = ut(String.prototype.indexOf), tT = ut(String.prototype.trim), nT = ut(Number.prototype.toString), oT = ut(Boolean.prototype.toString), yw = typeof BigInt > "u" ? null : ut(BigInt.prototype.toString), bw = typeof Symbol > "u" ? null : ut(Symbol.prototype.toString), tn = ut(Object.prototype.hasOwnProperty), Sa = ut(Object.prototype.toString), At = ut(RegExp.prototype.test), wi = rT(TypeError);
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
function ye(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Za;
  if (vw && vw(e, null), !Wr(o))
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
    tn(e, o) || (e[o] = null);
  return e;
}
function en(e) {
  const o = ks(null);
  for (const s of Og(e)) {
    var r = jA(s, 2);
    const a = r[0], u = r[1];
    tn(e, a) && (Wr(u) ? o[a] = iT(u) : u && typeof u == "object" && u.constructor === Object ? o[a] = en(u) : o[a] = u);
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
      return Sa(e);
    case "function":
    case "object": {
      if (e === null)
        return Sa(e);
      const o = e, r = Lo(o, "toString");
      if (typeof r == "function") {
        const s = r(o);
        return typeof s == "string" ? s : Sa(s);
      }
      return Sa(e);
    }
    default:
      return Sa(e);
  }
}
function Lo(e, o) {
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
    return At(e, ""), !0;
  } catch {
    return !1;
  }
}
const Cw = Lt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Pd = Lt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Fd = Lt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lT = Lt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ud = Lt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), uT = Lt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vw = Lt(["#text"]), Ew = Lt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Wd = Lt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Sw = Lt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), tu = Lt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), cT = Mt(/{{[\w\W]*|^[\w\W]*}}/g), dT = Mt(/<%[\w\W]*|^[\w\W]*%>/g), fT = Mt(/\${[\w\W]*/g), hT = Mt(/^data-[\-\w.\u00B7-\uFFFF]+$/), pT = Mt(/^aria-[\-\w]+$/), kw = Mt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), mT = Mt(/^(?:\w+script|data):/i), wT = Mt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), vT = Mt(/^html$/i), _T = Mt(/^[a-z][.\w]*(-[.\w]+)+$/i), Iw = Mt(/<[/\w!]/g), gT = Mt(/<[/\w]/g), $T = Mt(/<\/no(script|embed|frames)/i), yT = Mt(/\/>/i), Ao = {
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
}, Lr = function(o, r, s, a) {
  return tn(o, r) && Wr(o[r]) ? ye(a.base ? en(a.base) : {}, o[r], a.transform) : s;
};
function Rg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : bT();
  const o = (q) => Rg(q);
  if (o.version = "3.4.10", o.removed = [], !e || !e.document || e.document.nodeType !== Ao.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, m = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, y = e.trustedTypes, b = f.prototype, B = Lo(b, "cloneNode"), N = Lo(b, "remove"), F = Lo(b, "nextSibling"), M = Lo(b, "childNodes"), S = Lo(b, "parentNode"), T = Lo(b, "shadowRoot"), x = Lo(b, "attributes"), U = c && c.prototype ? Lo(c.prototype, "nodeType") : null, A = c && c.prototype ? Lo(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let P, H = "", K, Me = !1, he = 0;
  const Ae = function() {
    if (he > 0)
      throw wi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Se = function(w) {
    Ae(), he++;
    try {
      return P.createHTML(w);
    } finally {
      he--;
    }
  }, He = function(w) {
    Ae(), he++;
    try {
      return P.createScriptURL(w);
    } finally {
      he--;
    }
  }, Ge = function() {
    return Me || (K = CT(y, a), Me = !0), K;
  }, $e = r, Ze = $e.implementation, Xe = $e.createNodeIterator, ct = $e.createDocumentFragment, on = $e.getElementsByTagName, _n = s.importNode;
  let Ce = Aw();
  o.isSupported = typeof Og == "function" && typeof S == "function" && Ze && Ze.createHTMLDocument !== void 0;
  const oa = cT, ra = dT, ia = fT, Kn = hT, zt = pT, Mn = mT, dt = wT, Nn = _T;
  let Jn = kw, Ne = null;
  const vo = ye({}, [...Cw, ...Pd, ...Fd, ...Ud, ...Vw]);
  let Fe = null;
  const vt = ye({}, [...Ew, ...Wd, ...Sw, ...tu]);
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
  })), Dn = null, bt = null;
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
  let Po = !0, rn = !0, Ct = !1, Xn = !0, _t = !1, Fo = !0, ft = !1, Kr = !1, Qn = !1, qt = !1, _o = !1, eo = !1, Uo = !0, Wo = !1;
  const Ho = "user-content-";
  let go = !0, $o = !1, gn = {}, Vt = null;
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
  let Jr = null;
  const Xr = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let zo = null;
  const vr = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), qo = "http://www.w3.org/1998/Math/MathML", Go = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml";
  let to = Gt, Yo = !1, _r = null;
  const Fi = ye({}, [qo, Go, Gt], Rd), Qr = Lt(["mi", "mo", "mn", "ms", "mtext"]);
  let yo = ye({}, Qr);
  const ei = Lt(["annotation-xml"]);
  let bo = ye({}, ei);
  const Ui = ye({}, ["title", "style", "font", "a", "script"]);
  let Co = null;
  const Wi = ["application/xhtml+xml", "text/html"], Hi = "text/html";
  let Re = null, no = null;
  const zi = r.createElement("form"), ti = function(w) {
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
    }), Jr = Lr(w, "ADD_DATA_URI_TAGS", Xr, {
      transform: Re,
      base: Xr
    }), Vt = Lr(w, "FORBID_CONTENTS", wr, {
      transform: Re
    }), Dn = Lr(w, "FORBID_TAGS", en({}), {
      transform: Re
    }), bt = Lr(w, "FORBID_ATTR", en({}), {
      transform: Re
    }), gn = tn(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? en(w.USE_PROFILES) : w.USE_PROFILES : !1, Po = w.ALLOW_ARIA_ATTR !== !1, rn = w.ALLOW_DATA_ATTR !== !1, Ct = w.ALLOW_UNKNOWN_PROTOCOLS || !1, Xn = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _t = w.SAFE_FOR_TEMPLATES || !1, Fo = w.SAFE_FOR_XML !== !1, ft = w.WHOLE_DOCUMENT || !1, qt = w.RETURN_DOM || !1, _o = w.RETURN_DOM_FRAGMENT || !1, eo = w.RETURN_TRUSTED_TYPE || !1, Qn = w.FORCE_BODY || !1, Uo = w.SANITIZE_DOM !== !1, Wo = w.SANITIZE_NAMED_PROPS || !1, go = w.KEEP_CONTENT !== !1, $o = w.IN_PLACE || !1, Jn = aT(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : kw, to = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Gt, yo = tn(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? en(w.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, Qr), bo = tn(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? en(w.HTML_INTEGRATION_POINTS) : ye({}, ei);
    const E = tn(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? en(w.CUSTOM_ELEMENT_HANDLING) : ks(null);
    if (Te = ks(null), tn(E, "tagNameCheck") && ti(E.tagNameCheck) && (Te.tagNameCheck = E.tagNameCheck), tn(E, "attributeNameCheck") && ti(E.attributeNameCheck) && (Te.attributeNameCheck = E.attributeNameCheck), tn(E, "allowCustomizedBuiltInElements") && typeof E.allowCustomizedBuiltInElements == "boolean" && (Te.allowCustomizedBuiltInElements = E.allowCustomizedBuiltInElements), Mt(Te), _t && (rn = !1), _o && (qt = !0), gn && (Ne = ye({}, Vw), Fe = ks(null), gn.html === !0 && (ye(Ne, Cw), ye(Fe, Ew)), gn.svg === !0 && (ye(Ne, Pd), ye(Fe, Wd), ye(Fe, tu)), gn.svgFilters === !0 && (ye(Ne, Fd), ye(Fe, Wd), ye(Fe, tu)), gn.mathMl === !0 && (ye(Ne, Ud), ye(Fe, Sw), ye(Fe, tu))), Ot.tagCheck = null, Ot.attributeCheck = null, tn(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Ot.tagCheck = w.ADD_TAGS : Wr(w.ADD_TAGS) && (Ne === vo && (Ne = en(Ne)), ye(Ne, w.ADD_TAGS, Re))), tn(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Ot.attributeCheck = w.ADD_ATTR : Wr(w.ADD_ATTR) && (Fe === vt && (Fe = en(Fe)), ye(Fe, w.ADD_ATTR, Re))), tn(w, "ADD_URI_SAFE_ATTR") && Wr(w.ADD_URI_SAFE_ATTR) && ye(zo, w.ADD_URI_SAFE_ATTR, Re), tn(w, "FORBID_CONTENTS") && Wr(w.FORBID_CONTENTS) && (Vt === wr && (Vt = en(Vt)), ye(Vt, w.FORBID_CONTENTS, Re)), tn(w, "ADD_FORBID_CONTENTS") && Wr(w.ADD_FORBID_CONTENTS) && (Vt === wr && (Vt = en(Vt)), ye(Vt, w.ADD_FORBID_CONTENTS, Re)), go && (Ne["#text"] = !0), ft && ye(Ne, ["html", "head", "body"]), Ne.table && (ye(Ne, ["tbody"]), delete Dn.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw wi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw wi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = P;
      P = w.TRUSTED_TYPES_POLICY;
      try {
        H = Se("");
      } catch (Z) {
        throw P = z, Z;
      }
    } else
      w.TRUSTED_TYPES_POLICY === null ? (P = void 0, H = "") : (P === void 0 && (P = Ge()), P && typeof H == "string" && (H = Se("")));
    (Ce.uponSanitizeElement.length > 0 || Ce.uponSanitizeAttribute.length > 0) && Ne === vo && (Ne = en(Ne)), Ce.uponSanitizeAttribute.length > 0 && Fe === vt && (Fe = en(Fe)), Lt && Lt(w), no = w;
  }, pe = ye({}, [...Pd, ...Fd, ...lT]), Y = ye({}, [...Ud, ...uT]), te = function(w, E, z) {
    return E.namespaceURI === Gt ? w === "svg" : E.namespaceURI === qo ? w === "svg" && (z === "annotation-xml" || yo[z]) : Boolean(pe[w]);
  }, xe = function(w, E, z) {
    return E.namespaceURI === Gt ? w === "math" : E.namespaceURI === Go ? w === "math" && bo[z] : Boolean(Y[w]);
  }, Zo = function(w, E, z) {
    return E.namespaceURI === Go && !bo[z] || E.namespaceURI === qo && !yo[z] ? !1 : !Y[w] && (Ui[w] || !pe[w]);
  }, qi = function(w) {
    let E = S(w);
    (!E || !E.tagName) && (E = {
      namespaceURI: to,
      tagName: "template"
    });
    const z = Za(w.tagName), Z = Za(E.tagName);
    return _r[w.namespaceURI] ? w.namespaceURI === Go ? te(z, E, Z) : w.namespaceURI === qo ? xe(z, E, Z) : w.namespaceURI === Gt ? Zo(z, E, Z) : !!(Co === "application/xhtml+xml" && _r[w.namespaceURI]) : !1;
  }, Bt = function(w) {
    hs(o.removed, {
      element: w
    });
    try {
      S(w).removeChild(w);
    } catch {
      if (N(w), !S(w))
        throw wi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, ni = function(w) {
    const E = M(w);
    if (E) {
      const Z = [];
      Va(E, (re) => {
        hs(Z, re);
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
  }, Yt = function(w, E) {
    try {
      hs(o.removed, {
        attribute: E.getAttributeNode(w),
        from: E
      });
    } catch {
      hs(o.removed, {
        attribute: null,
        from: E
      });
    }
    if (E.removeAttribute(w), w === "is")
      if (qt || _o)
        try {
          Bt(E);
        } catch {
        }
      else
        try {
          E.setAttribute(w, "");
        } catch {
        }
  }, Gi = function(w) {
    const E = x(w);
    if (!!E)
      for (let z = E.length - 1; z >= 0; --z) {
        const Z = E[z], re = Z && Z.name;
        if (!(typeof re != "string" || Fe[Re(re)]))
          try {
            w.removeAttribute(re);
          } catch {
          }
      }
  }, Yi = function(w) {
    const E = [w];
    for (; E.length > 0; ) {
      const z = E.pop();
      (U ? U(z) : z.nodeType) === Ao.element && Gi(z);
      const re = M(z);
      if (re)
        for (let me = re.length - 1; me >= 0; --me)
          E.push(re[me]);
    }
  }, oi = function(w) {
    let E = null, z = null;
    if (Qn)
      w = "<remove></remove>" + w;
    else {
      const me = gw(w, /^[\r\n\t ]+/);
      z = me && me[0];
    }
    Co === "application/xhtml+xml" && to === Gt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const Z = P ? Se(w) : w;
    if (to === Gt)
      try {
        E = new g().parseFromString(Z, Co);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = Ze.createDocument(to, "template", null);
      try {
        E.documentElement.innerHTML = Yo ? H : Z;
      } catch {
      }
    }
    const re = E.body || E.documentElement;
    return w && z && re.insertBefore(r.createTextNode(z), re.childNodes[0] || null), to === Gt ? on.call(E, ft ? "html" : "body")[0] : ft ? E.documentElement : re;
  }, gr = function(w) {
    return Xe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Vo = function(w) {
    return w = Ea(w, oa, " "), w = Ea(w, ra, " "), w = Ea(w, ia, " "), w;
  }, Ko = function(w) {
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
      Z.data = Vo(Z.data), Z = z.nextNode();
    const re = (E = w.querySelectorAll) === null || E === void 0 ? void 0 : E.call(w, "template");
    re && Va(re, (me) => {
      oo(me.content) && Ko(me.content);
    });
  }, Jo = function(w) {
    const E = A ? A(w) : null;
    return typeof E != "string" || Re(E) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== x(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== U(w) || w.childNodes !== M(w);
  }, oo = function(w) {
    if (!U || typeof w != "object" || w === null)
      return !1;
    try {
      return U(w) === Ao.documentFragment;
    } catch {
      return !1;
    }
  }, Eo = function(w) {
    if (!U || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof U(w) == "number";
    } catch {
      return !1;
    }
  };
  function sn(q, w, E) {
    q.length !== 0 && Va(q, (z) => {
      z.call(o, w, E, no);
    });
  }
  const ri = function(w, E) {
    return !!(Fo && w.hasChildNodes() && !Eo(w.firstElementChild) && At(Iw, w.textContent) && At(Iw, w.innerHTML) || Fo && w.namespaceURI === Gt && E === "style" && Eo(w.firstElementChild) || w.nodeType === Ao.processingInstruction || Fo && w.nodeType === Ao.comment && At(gT, w.data));
  }, ii = function(w, E) {
    if (!Dn[E] && yr(E) && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, E) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(E)))
      return !1;
    if (go && !Vt[E]) {
      const z = S(w), Z = M(w);
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
    const E = Re(A ? A(w) : w.nodeName);
    if (sn(Ce.uponSanitizeElement, w, {
      tagName: E,
      allowedTags: Ne
    }), ri(w, E))
      return Bt(w), !0;
    if (Dn[E] || !(Ot.tagCheck instanceof Function && Ot.tagCheck(E)) && !Ne[E])
      return ii(w, E);
    if ((U ? U(w) : w.nodeType) === Ao.element && !qi(w) || (E === "noscript" || E === "noembed" || E === "noframes") && At($T, w.innerHTML))
      return Bt(w), !0;
    if (_t && w.nodeType === Ao.text) {
      const Z = Vo(w.textContent);
      w.textContent !== Z && (hs(o.removed, {
        element: w.cloneNode()
      }), w.textContent = Z);
    }
    return sn(Ce.afterSanitizeElements, w, null), !1;
  }, Xo = function(w, E, z) {
    if (bt[E] || Uo && (E === "id" || E === "name") && (z in r || z in zi))
      return !1;
    const Z = Fe[E] || Ot.attributeCheck instanceof Function && Ot.attributeCheck(E, w);
    if (!(rn && At(Kn, E))) {
      if (!(Po && At(zt, E))) {
        if (Z) {
          if (!zo[E]) {
            if (!At(Jn, Ea(z, dt, ""))) {
              if (!((E === "src" || E === "xlink:href" || E === "href") && w !== "script" && $w(z, "data:") === 0 && Jr[w])) {
                if (!(Ct && !At(Mn, Ea(z, dt, "")))) {
                  if (z)
                    return !1;
                }
              }
            }
          }
        } else if (!(yr(w) && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, w) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(w)) && (Te.attributeNameCheck instanceof RegExp && At(Te.attributeNameCheck, E) || Te.attributeNameCheck instanceof Function && Te.attributeNameCheck(E, w)) || E === "is" && Te.allowCustomizedBuiltInElements && (Te.tagNameCheck instanceof RegExp && At(Te.tagNameCheck, z) || Te.tagNameCheck instanceof Function && Te.tagNameCheck(z))))
          return !1;
      }
    }
    return !0;
  }, ji = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), yr = function(w) {
    return !ji[Za(w)] && At(Nn, w);
  }, Qo = function(w, E, z, Z) {
    if (P && typeof y == "object" && typeof y.getAttributeType == "function" && !z)
      switch (y.getAttributeType(w, E)) {
        case "TrustedHTML":
          return Se(Z);
        case "TrustedScriptURL":
          return He(Z);
      }
    return Z;
  }, pl = function(w, E, z, Z) {
    try {
      z ? w.setAttributeNS(z, E, Z) : w.setAttribute(E, Z), Jo(w) ? Bt(w) : _w(o.removed);
    } catch {
      Yt(E, w);
    }
  }, ml = function(w) {
    sn(Ce.beforeSanitizeAttributes, w, null);
    const E = w.attributes;
    if (!E || Jo(w))
      return;
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Fe,
      forceKeepAttr: void 0
    };
    let Z = E.length;
    const re = Re(w.nodeName);
    for (; Z--; ) {
      const me = E[Z], rt = me.name, Qe = me.namespaceURI, jt = me.value, an = Re(rt), Ki = jt;
      let gt = rt === "value" ? Ki : tT(Ki);
      if (z.attrName = an, z.attrValue = gt, z.keepAttr = !0, z.forceKeepAttr = void 0, sn(Ce.uponSanitizeAttribute, w, z), gt = z.attrValue, Wo && (an === "id" || an === "name") && $w(gt, Ho) !== 0 && (Yt(rt, w), gt = Ho + gt), Fo && At(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, gt)) {
        Yt(rt, w);
        continue;
      }
      if (an === "attributename" && gw(gt, "href")) {
        Yt(rt, w);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          Yt(rt, w);
          continue;
        }
        if (!Xn && At(yT, gt)) {
          Yt(rt, w);
          continue;
        }
        if (_t && (gt = Vo(gt)), !Xo(re, an, gt)) {
          Yt(rt, w);
          continue;
        }
        gt = Qo(re, an, Qe, gt), gt !== Ki && pl(w, rt, Qe, gt);
      }
    }
    sn(Ce.afterSanitizeAttributes, w, null);
  }, si = function(w) {
    let E = null;
    const z = gr(w);
    for (sn(Ce.beforeSanitizeShadowDOM, w, null); E = z.nextNode(); )
      if (sn(Ce.uponSanitizeShadowNode, E, null), $r(E), ml(E), oo(E.content) && si(E.content), (U ? U(E) : E.nodeType) === Ao.element) {
        const re = T(E);
        oo(re) && (Zi(re), si(re));
      }
    sn(Ce.afterSanitizeShadowDOM, w, null);
  }, Zi = function(w) {
    const E = [{
      node: w,
      shadow: null
    }];
    for (; E.length > 0; ) {
      const z = E.pop();
      if (z.shadow) {
        si(z.shadow);
        continue;
      }
      const Z = z.node, me = (U ? U(Z) : Z.nodeType) === Ao.element, rt = M(Z);
      if (rt)
        for (let Qe = rt.length - 1; Qe >= 0; --Qe)
          E.push({
            node: rt[Qe],
            shadow: null
          });
      if (me) {
        const Qe = A ? A(Z) : null;
        if (typeof Qe == "string" && Re(Qe) === "template") {
          const jt = Z.content;
          oo(jt) && E.push({
            node: jt,
            shadow: null
          });
        }
      }
      if (me) {
        const Qe = T(Z);
        oo(Qe) && E.push({
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
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, z = null, Z = null, re = null;
    if (Yo = !q, Yo && (q = "<!-->"), typeof q != "string" && !Eo(q) && (q = sT(q), typeof q != "string"))
      throw wi("dirty is not a string, aborting");
    if (!o.isSupported)
      return q;
    Kr || jo(w), o.removed = [];
    const me = $o && typeof q != "string" && Eo(q);
    if (me) {
      const jt = A ? A(q) : q.nodeName;
      if (typeof jt == "string") {
        const an = Re(jt);
        if (!Ne[an] || Dn[an])
          throw wi("root node is forbidden and cannot be sanitized in-place");
      }
      if (Jo(q))
        throw wi("root node is clobbered and cannot be sanitized in-place");
      try {
        Zi(q);
      } catch (an) {
        throw ni(q), an;
      }
    } else if (Eo(q))
      E = oi("<!---->"), z = E.ownerDocument.importNode(q, !0), z.nodeType === Ao.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? E = z : E.appendChild(z), Zi(z);
    else {
      if (!qt && !_t && !ft && q.indexOf("<") === -1)
        return P && eo ? Se(q) : q;
      if (E = oi(q), !E)
        return qt ? null : eo ? H : "";
    }
    E && Qn && Bt(E.firstChild);
    const rt = gr(me ? q : E);
    try {
      for (; Z = rt.nextNode(); )
        $r(Z), ml(Z), oo(Z.content) && si(Z.content);
    } catch (jt) {
      throw me && ni(q), jt;
    }
    if (me)
      return Va(o.removed, (jt) => {
        jt.element && Yi(jt.element);
      }), _t && Ko(q), q;
    if (qt) {
      if (_t && Ko(E), _o)
        for (re = ct.call(E.ownerDocument); E.firstChild; )
          re.appendChild(E.firstChild);
      else
        re = E;
      return (Fe.shadowroot || Fe.shadowrootmode) && (re = _n.call(s, re, !0)), re;
    }
    let Qe = ft ? E.outerHTML : E.innerHTML;
    return ft && Ne["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && At(vT, E.ownerDocument.doctype.name) && (Qe = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + Qe), _t && (Qe = Vo(Qe)), P && eo ? Se(Qe) : Qe;
  }, o.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    jo(q), Kr = !0;
  }, o.clearConfig = function() {
    no = null, Kr = !1, P = K, H = "";
  }, o.isValidAttribute = function(q, w, E) {
    no || jo({});
    const z = Re(q), Z = Re(w);
    return Xo(z, Z, E);
  }, o.addHook = function(q, w) {
    typeof w == "function" && hs(Ce[q], w);
  }, o.removeHook = function(q, w) {
    if (w !== void 0) {
      const E = QA(Ce[q], w);
      return E === -1 ? void 0 : eT(Ce[q], E, 1)[0];
    }
    return _w(Ce[q]);
  }, o.removeHooks = function(q) {
    Ce[q] = [];
  }, o.removeAllHooks = function() {
    Ce = Aw();
  }, o;
}
var VT = Rg();
const Bo = (e) => {
  let o = "";
  if (e)
    try {
      o = BA(new Date(e), xt.DATE_FORMAT);
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
}, Qu = "/alec", Wg = "/alec/engine/configuration", Hg = "/alec/llm/configuration", ST = "/alec/llm/validate", zg = "/alec/llm/suggestions", kT = "/alec/llm/usage", qg = "/alec/situation", IT = async () => {
  try {
    const e = await Dt.get(`${Wg}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, AT = async (e) => {
  try {
    return (await Dt.post(Wg, e)).status === 200;
  } catch {
    return !1;
  }
}, TT = async () => {
  try {
    const e = await Dt.get(Hg);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, xT = async (e) => {
  try {
    const o = await Dt.post(Hg, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, LT = async (e) => {
  try {
    const o = await Dt.post(ST, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, Gg = async (e) => {
  try {
    const o = await Dt.get(`${zg}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, MT = async (e) => {
  try {
    const o = await Dt.post(
      `${zg}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, NT = async (e = 30) => {
  try {
    const o = await Dt.get(`${kT}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Yg = async (e, o) => {
  try {
    const r = await Dt.post(`${Qu}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == xt.REJECTED.toLowerCase() && r.status === 200 && await kg(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Tw = async (e, o) => {
  try {
    return (await Dt.delete(`${Qu}/situation/alarm/`, {
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
    return (await Dt.put(`${Qu}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, DT = async (e) => {
  try {
    return (await Dt.post(qg, e)).status === 200;
  } catch {
    return !1;
  }
}, OT = async () => {
  try {
    return (await Dt.post(`${qg}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, BT = async () => {
  try {
    return (await Dt.post(`${Qu}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, RT = window.Vue.defineComponent, kn = window.Vue.unref, Hd = window.Vue.normalizeClass, No = window.Vue.createElementVNode, vi = window.Vue.toDisplayString, Mr = window.Vue.openBlock, Nr = window.Vue.createElementBlock, ka = window.Vue.createCommentVNode, xw = window.Vue.createVNode, Rf = window.Vue.createTextVNode, PT = window.Vue.renderList, FT = window.Vue.Fragment, UT = window.Vue.pushScopeId, WT = window.Vue.popScopeId, ih = (e) => (UT("data-v-aab1b2b8"), e = e(), WT(), e), HT = { class: "content" }, zT = { class: "title-row" }, qT = { class: "title" }, GT = ["title"], YT = {
  key: 1,
  class: "accepted"
}, jT = {
  key: 2,
  class: "rejected"
}, ZT = /* @__PURE__ */ ih(() => /* @__PURE__ */ No("span", { class: "info-title" }, " Duration: ", -1)), KT = { key: 0 }, JT = /* @__PURE__ */ ih(() => /* @__PURE__ */ No("span", { class: "info-title" }, " First Event: ", -1)), XT = { class: "description" }, QT = /* @__PURE__ */ ih(() => /* @__PURE__ */ No("hr", null, null, -1)), e2 = {
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
    const r = e, s = xt.ACCEPTED, a = xt.REJECTED, u = new Date().getTime(), c = () => {
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
      return Mr(), Nr("div", {
        onClick: c,
        class: Hd(["card", {
          rejected: r.situationInfo.status == kn(a)
        }])
      }, [
        No("div", {
          class: Hd(["severity-line", [`${(y = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
        }, null, 2),
        No("div", HT, [
          No("div", zT, [
            No("div", qT, "Situation " + vi((b = r.situationInfo) == null ? void 0 : b.id), 1),
            f.value !== "none" ? (Mr(), Nr("span", {
              key: 0,
              class: Hd(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + vi(f.value === "pending" ? "\u2026" : ""), 11, GT)) : ka("", !0),
            r.situationInfo.status == kn(s) ? (Mr(), Nr("div", YT, [
              xw(kn(X), {
                icon: kn(Us),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : ka("", !0),
            r.situationInfo.status == kn(a) ? (Mr(), Nr("div", jT, [
              xw(kn(X), {
                icon: kn(Ag),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : ka("", !0)
          ]),
          No("div", null, [
            ZT,
            Rf(" " + vi(kn(Xu)(
              kn(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? ka("", !0) : (Mr(), Nr("div", KT, [
            JT,
            Rf(vi(kn(Bo)(r.situationInfo.firstEventTime)), 1)
          ])),
          No("div", XT, vi(kn(Ug)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          QT,
          r.situationInfo.relatedAlarms ? (Mr(), Nr("div", e2, [
            t2,
            No("span", n2, vi(r.situationInfo.relatedAlarms.length), 1)
          ])) : ka("", !0),
          (Mr(!0), Nr(FT, null, PT(kn(Be.exports.keys)(
            kn(Be.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (B) => (Mr(), Nr("div", {
            class: "info-title",
            key: B
          }, " - " + vi(B), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Zg = /* @__PURE__ */ Ee(i2, [["__scopeId", "data-v-aab1b2b8"]]), s2 = window.Vue.openBlock, a2 = window.Vue.createElementBlock, l2 = window.Vue.createElementVNode;
var u2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const c2 = {}, d2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, f2 = /* @__PURE__ */ l2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), h2 = [
  f2
];
function p2(e, o) {
  return s2(), a2("svg", d2, h2);
}
var m2 = /* @__PURE__ */ u2(c2, [["render", p2]]);
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
const S2 = window.Vue.openBlock, k2 = window.Vue.createElementBlock, I2 = window.Vue.createElementVNode;
var A2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const T2 = {}, x2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L2 = /* @__PURE__ */ I2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), M2 = [
  L2
];
function N2(e, o) {
  return S2(), k2("svg", x2, M2);
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
const q2 = window.Vue.defineComponent, Dr = window.Vue.unref, nu = window.Vue.normalizeClass, ou = window.Vue.createVNode, G2 = window.Vue.openBlock, Y2 = window.Vue.createElementBlock;
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
      ou(Dr(X), {
        icon: Dr(m2),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      ou(Dr(X), {
        icon: Dr(D2),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      ou(Dr(X), {
        icon: Dr(Jg),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      ou(Dr(X), {
        icon: Dr(E2),
        "aria-hidden": "true",
        class: nu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const K2 = /* @__PURE__ */ Ee(Z2, [["__scopeId", "data-v-54e14a59"]]);
const be = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, J2 = window.Vue.computed, ec = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = J2(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Di = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Oi = function(e) {
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
          this.active = !0, Oi(this.failsafe), this.failsafe = Di(() => {
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
var Gr = /* @__PURE__ */ sx(lx, [["__scopeId", "data-v-18e2a5db"]]);
const ux = window.Vue.openBlock, cx = window.Vue.createElementBlock, dx = window.Vue.createElementVNode;
var fx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hx = {}, px = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, mx = /* @__PURE__ */ dx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), wx = [
  mx
];
function vx(e, o) {
  return ux(), cx("svg", px, wx);
}
var qs = /* @__PURE__ */ fx(hx, [["render", vx]]);
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
const gx = window.Vue.openBlock, $x = window.Vue.createElementBlock, sh = window.Vue.createElementVNode;
var yx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bx = {}, Cx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Vx = /* @__PURE__ */ sh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ex = /* @__PURE__ */ sh("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Sx = /* @__PURE__ */ sh("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), kx = [
  Vx,
  Ex,
  Sx
];
function Ix(e, o) {
  return gx(), $x("svg", Cx, kx);
}
var Ax = /* @__PURE__ */ yx(bx, [["render", Ix]]), Tx = Object.defineProperty, xx = Object.defineProperties, Lx = Object.getOwnPropertyDescriptors, Ow = Object.getOwnPropertySymbols, Mx = Object.prototype.hasOwnProperty, Nx = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? Tx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xg = (e, o) => {
  for (var r in o || (o = {}))
    Mx.call(o, r) && Bw(e, r, o[r]);
  if (Ow)
    for (var r of Ow(o))
      Nx.call(o, r) && Bw(e, r, o[r]);
  return e;
}, Qg = (e, o) => xx(e, Lx(o));
const Gs = window.Vue.defineComponent, ol = window.Vue.resolveComponent, Do = window.Vue.openBlock, As = window.Vue.createElementBlock, Dx = window.Vue.createVNode, Ru = window.Vue.createBlock, Ox = window.Vue.withModifiers, Ws = window.Vue.inject, rl = window.Vue.computed, Bx = window.Vue.normalizeClass, ps = window.Vue.createElementVNode, Pu = window.Vue.toDisplayString, Iu = window.Vue.renderSlot, Ka = window.Vue.createCommentVNode, Rx = window.Vue.withDirectives, Px = window.Vue.vShow, Pf = window.Vue.ref, Rw = window.Vue.toRef, Pw = window.Vue.nextTick, Ff = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ah = window.Vue.provide, Fw = window.Vue.isRef, Fx = window.Vue.onBeforeUnmount;
var ll = (e, o) => {
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
}, Wx = Gs({
  props: Ux,
  components: {
    FeatherIcon: X
  }
}), Hx = ["title"];
function zx(e, o, r, s, a, u) {
  const c = ol("FeatherIcon");
  return Do(), As("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Dx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, Hx);
}
var qx = /* @__PURE__ */ ll(Wx, [["render", zx], ["__scopeId", "data-v-4265058e"]]);
const Gx = Gs({
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
    ActionIcon: qx
  }
});
function Yx(e, o, r, s, a, u) {
  const c = ol("ActionIcon");
  return Do(), Ru(c, {
    onClick: o[0] || (o[0] = Ox((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var jx = /* @__PURE__ */ ll(Gx, [["render", Yx]]);
const Zx = Gs({
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
  const c = ol("FeatherIcon");
  return Do(), Ru(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Jx = /* @__PURE__ */ ll(Zx, [["render", Kx], ["__scopeId", "data-v-0b8faef3"]]);
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
}, eL = Gs({
  emits: Qx,
  props: Xx,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Ws("wrapperOptions", {}), o = Ws("validationErrorMessage", !1), r = rl(() => e.error ? e.error : o && o.value ? o.value : !1);
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
  const c = ol("ClearIcon"), f = ol("ErrorIcon");
  return Do(), As("div", {
    class: Bx(["feather-input-wrapper-container", e.containerCls])
  }, [
    ps("fieldset", tL, [
      ps("legend", null, Pu(e.label), 1)
    ]),
    ps("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Pu(e.label), 9, nL),
    ps("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      ps("div", oL, [
        Iu(e.$slots, "pre", {}, void 0, !0)
      ]),
      Iu(e.$slots, "default", {}, void 0, !0),
      ps("div", rL, [
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
var tc = /* @__PURE__ */ ll(eL, [["render", iL], ["__scopeId", "data-v-4db296db"]]);
const sL = Gs({
  setup() {
    const e = Ws("subTextOptions", {}), o = Ws("validationErrorMessage", !1), r = rl(() => e.error ? e.error : o && o.value ? o.value : "");
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
  return Rx((Do(), As("div", aL, [
    !e.hint && !e.error.length ? (Do(), As("div", lL, "\xA0")) : Ka("", !0),
    e.hint && !e.error.length ? (Do(), As("div", uL, Pu(e.hint), 1)) : Ka("", !0),
    e.error.length > 0 ? (Do(), As("div", cL, Pu(e.error), 1)) : Ka("", !0),
    Iu(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [Px, !e.inline || e.hint || e.error.length]
  ]);
}
var Ys = /* @__PURE__ */ ll(sL, [["render", dL], ["__scopeId", "data-v-8e0ac99e"]]);
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
Gs({
  props: fL,
  setup(e) {
    const o = Ws("featherFormErrors", Pf([])), r = Rw(e, "errorList"), s = rl(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : o.value;
    }), a = Rw(e, "generalError"), u = (g) => {
      document.getElementById(g).focus();
    }, c = (g) => g.replace(/ \*$/, ""), f = Pf(), m = (g) => `${c(g.label)} - ${g.message}`, v = rl(() => (s.value.length && Pw(() => f.value.focus()), e.headingText(s.value)));
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
const js = (e, o, r, s, a) => {
  const u = Ws("featherForm", !1);
  if (s && u && e.value) {
    const c = Pf("");
    ah("validationErrorMessage", c);
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
  ah("subTextOptions", e);
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
  ah("wrapperOptions", e);
}, ru = window.Vue.ref, hL = window.Vue.watch, pL = window.Vue.watchEffect, Uw = window.Vue.computed, zd = window.Vue.provide, e1 = (e, o, r, s, a) => {
  const u = ru([]), c = ru(), f = ru(), m = ru();
  pL(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((T) => T.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let T = u.value.filter((x) => !x.disabled);
      T = T.length ? T : u.value, f.value = T[0], f.value.first = !0;
    }
  }), hL(c, (S, T) => {
    T && (T.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, g = Uw(() => c.value || f.value), y = _x(g, u, v), b = Uw(() => be("feather-radio-group"));
  m.value = b.value;
  const { validate: B } = js(m, e, r, s, a);
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
    validate: B,
    firstElementId: m,
    groupId: b
  };
};
var mL = Object.defineProperty, wL = Object.defineProperties, vL = Object.getOwnPropertyDescriptors, Ww = Object.getOwnPropertySymbols, _L = Object.prototype.hasOwnProperty, gL = Object.prototype.propertyIsEnumerable, Hw = (e, o, r) => o in e ? mL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ms = (e, o) => {
  for (var r in o || (o = {}))
    _L.call(o, r) && Hw(e, r, o[r]);
  if (Ww)
    for (var r of Ww(o))
      gL.call(o, r) && Hw(e, r, o[r]);
  return e;
}, t1 = (e, o) => wL(e, vL(o));
const Yr = window.Vue.defineComponent, Ja = window.Vue.inject, Fu = window.Vue.computed, Xa = window.Vue.ref, Zn = window.Vue.resolveComponent, xn = window.Vue.openBlock, ul = window.Vue.createElementBlock, n1 = window.Vue.normalizeClass, Ro = window.Vue.renderSlot, zr = window.Vue.createBlock, il = window.Vue.createCommentVNode, Uu = window.Vue.createElementVNode, $L = window.Vue.withModifiers, rc = window.Vue.createVNode, o1 = window.Vue.toRef, Uf = window.Vue.mergeProps, pr = window.Vue.withCtx, yL = window.Vue.h, bL = window.Vue.provide;
var jr = (e, o) => {
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
}, VL = Yr({
  props: CL,
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
    FeatherRipple: Gr
  }
}), EL = ["aria-disabled"];
function SL(e, o, r, s, a, u) {
  const c = Zn("FeatherRipple");
  return xn(), ul("div", {
    class: n1(["chip", {
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
  ], 42, EL);
}
var ic = /* @__PURE__ */ jr(VL, [["render", SL], ["__scopeId", "data-v-44d413dc"]]);
const kL = {
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
}, IL = Yr({
  emits: ["delete"],
  props: kL,
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
}), AL = { class: "chip-delete" }, TL = ["aria-label", "aria-describedby"];
function xL(e, o, r, s, a, u) {
  const c = Zn("FeatherIcon");
  return xn(), ul("span", AL, [
    Uu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = $L((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      rc(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, TL)
  ]);
}
var LL = /* @__PURE__ */ jr(IL, [["render", xL], ["__scopeId", "data-v-4bae6cb4"]]);
const ML = Yr({
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
  return xn(), ul("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    Ro(e.$slots, "default", {}, void 0, !0)
  ], 8, NL);
}
var sc = /* @__PURE__ */ jr(ML, [["render", DL], ["__scopeId", "data-v-1a0445b2"]]);
const OL = {}, BL = {
  class: "chip-icon",
  role: "presentation"
};
function RL(e, o) {
  return xn(), ul("span", BL, [
    Ro(e.$slots, "default", {}, void 0, !0)
  ]);
}
var ac = /* @__PURE__ */ jr(OL, [["render", RL], ["__scopeId", "data-v-2230176f"]]);
const zw = {
  delete: "Remove"
}, PL = Yr({
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
    const r = ec(o1(e, "labels"), zw), s = Fu(() => be("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Ms({}, o.attrs);
    return e.disabled && delete u.onClick, t1(Ms({}, r), {
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
    DeleteIcon: LL,
    Label: sc,
    PreIcon: ac
  }
}), FL = ["aria-disabled"];
function UL(e, o, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("DeleteIcon"), v = Zn("Chip");
  return xn(), zr(v, Uf(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: pr(() => [
      Uu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Uu("span", Uf(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (xn(), zr(c, { key: 0 }, {
            default: pr(() => [
              Ro(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : il("", !0),
          rc(f, { id: e.chipTextId }, {
            default: pr(() => [
              Ro(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, FL),
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
var WL = /* @__PURE__ */ jr(PL, [["render", UL], ["__scopeId", "data-v-48b2704a"]]);
const HL = Yr({
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
}), zL = ["aria-disabled"];
function qL(e, o, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("Chip");
  return xn(), zr(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: pr(() => [
      Uu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (xn(), zr(c, { key: 0 }, {
          default: pr(() => [
            Ro(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : il("", !0),
        rc(f, null, {
          default: pr(() => [
            Ro(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, zL)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var GL = /* @__PURE__ */ jr(HL, [["render", qL], ["__scopeId", "data-v-3e0c4eba"]]);
const YL = Yr({
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
function jL(e, o, r, s, a, u) {
  const c = Zn("PreIcon"), f = Zn("Label"), m = Zn("Chip");
  return xn(), zr(m, {
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
    default: pr(() => [
      e.hasIcon ? (xn(), zr(c, { key: 0 }, {
        default: pr(() => [
          Ro(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : il("", !0),
      rc(f, { id: e.labelId }, {
        default: pr(() => [
          Ro(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var ZL = /* @__PURE__ */ jr(YL, [["render", jL], ["__scopeId", "data-v-bbcc2f70"]]);
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
}, qw = Yr({
  props: KL,
  setup() {
    return { format: Ja("chipListFormat", "") };
  },
  render() {
    const e = (o) => yL(o, Ms(Ms({}, this.$props), this.$attrs), Ms({
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
}, XL = Yr({
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
      return t1(Ms({
        attrs: {
          role: "radiogroup"
        }
      }, e1(c, o.emit, e.label, {}, Xa(""))), {
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
  return xn(), ul("div", Uf(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    Ro(e.$slots, "default", {}, void 0, !0)
  ], 16, QL);
}
var tM = /* @__PURE__ */ jr(XL, [["render", eM], ["__scopeId", "data-v-1e06f41d"]]);
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
const lM = /* @__PURE__ */ Ee(aM, [["__scopeId", "data-v-e08880d6"]]), uM = window.Vue.defineComponent, Ia = window.Vue.unref, r1 = window.Vue.createTextVNode, qd = window.Vue.normalizeClass, Gd = window.Vue.withCtx, cM = window.Vue.createVNode, dM = window.Vue.renderList, fM = window.Vue.Fragment, iu = window.Vue.openBlock, hM = window.Vue.createElementBlock, Yd = window.Vue.createBlock, Gw = window.Vue.createCommentVNode, pM = window.Vue.toDisplayString;
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
    const r = e, s = Yw(!1), a = vM(() => Be.exports.keys(Be.exports.groupBy(r.alarms, r.property))), u = Yw(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), c = _M({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((g) => g !== "all"), u.value.includes(v) ? u.value = u.value.filter((g) => g !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return wM(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (v, g) => Ia(a).length > 0 ? (iu(), Yd(Ia(tM), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: qd({ vertical: r.isVertical })
    }, {
      default: Gd(() => [
        cM(Ia(qw), {
          class: qd({ clicked: u.value.includes("all") }),
          onClick: g[0] || (g[0] = (y) => f("all"))
        }, {
          default: Gd(() => [
            mM
          ]),
          _: 1
        }, 8, ["class"]),
        (iu(!0), hM(fM, null, dM(Ia(a), (y) => (iu(), Yd(Ia(qw), {
          class: qd([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: (b) => f(y)
        }, {
          default: Gd(() => [
            e.property == "severity" ? (iu(), Yd(lM, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : Gw("", !0),
            r1(pM(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Gw("", !0);
  }
});
const $M = /* @__PURE__ */ Ee(gM, [["__scopeId", "data-v-f000b5a0"]]);
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
}, SM = window.Vue.watch, kM = window.Vue.onBeforeUnmount, IM = window.Vue.ref, AM = window.Vue.onMounted, TM = (e, o) => {
  const r = IM(!1), s = (c) => {
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
    kM(() => {
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
}, NM = window.Vue.defineComponent, ur = window.Vue.ref, jw = window.Vue.toRef, DM = window.Vue.onMounted, OM = window.Vue.watch, Zw = window.Vue.computed, BM = window.Vue.nextTick, Kw = window.Vue.openBlock, Jw = window.Vue.createElementBlock, Xw = window.Vue.renderSlot, RM = window.Vue.normalizeClass, PM = window.Vue.normalizeStyle, FM = window.Vue.createCommentVNode;
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
    const r = ur(), s = ur(), a = jw(e, "open"), u = jw(e, "noExpand"), c = ur("auto"), f = ur(), m = ur(e.triggerId || be("feather-menu-trigger")), v = ur(be("feather-menu-dropdown")), g = ur(""), y = ur("");
    DM(() => {
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
      b.value = !0, c.value = "auto", BM(() => {
        let { height: P, width: H } = s.value.getBoundingClientRect();
        const K = B(), Me = K.height, he = K.width;
        e.fill && H < A.width ? (c.value = A.width + "px", H = A.width) : c.value = H + "px";
        let Ae = 0;
        Me - A.bottom < P && A.top >= P ? (Ae = A.top - P, e.cover && (Ae += A.height)) : (Ae = A.bottom, e.cover && (Ae -= A.height));
        let Se = e.right ? A.right - H : A.left;
        !e.right && A.right >= H && he - A.left < H && (Se = A.right - H), e.right && A.right <= H && he - A.left > H && (Se = A.left), y.value = `${Se}px`, g.value = `${Ae}px`, b.value = !1;
      });
    }, M = TM(r, (A) => {
      o.emit("outside-click", A);
    }), S = EM(N), T = i1(f, N);
    OM([a, s], ([A, P]) => {
      A && P && N(), M.value = A, S.value = A, T.value = A;
    });
    const x = Zw(() => {
      const A = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return a.value && (A["aria-controls"] = v.value), u.value || (A["aria-expanded"] = a.value ? "true" : "false"), A;
    }), U = Zw(() => ({
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
const iN = window.Vue.openBlock, sN = window.Vue.createElementBlock, lh = window.Vue.createElementVNode;
var aN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lN = {}, uN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cN = /* @__PURE__ */ lh("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), dN = /* @__PURE__ */ lh("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), fN = /* @__PURE__ */ lh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), hN = [
  cN,
  dN,
  fN
];
function pN(e, o) {
  return iN(), sN("svg", uN, hN);
}
var mN = /* @__PURE__ */ aN(lN, [["render", pN]]);
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
var cl = /* @__PURE__ */ gN($N, [["render", VN]]);
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
const EN = window.Vue.defineComponent, SN = window.Vue.openBlock, kN = window.Vue.createElementBlock, IN = window.Vue.normalizeClass, AN = window.Vue.pushScopeId, TN = window.Vue.popScopeId, Wf = window.Vue.createElementVNode;
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
  return SN(), kN("div", {
    class: IN(["switch-container", { checked: e.checked, disabled: e.disabled }]),
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
const uh = window.Vue.defineComponent, _i = window.Vue.h, qN = window.Vue.openBlock, GN = window.Vue.createElementBlock, YN = window.Vue.renderSlot;
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
}, ZN = uh({
  inheritAttrs: !1,
  props: jN,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = _i("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = _i("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = _i("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : _i(Gr);
    if (this.asLi)
      return _i("li", nv(tv({}, this.$attrs), {
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
    const u = _i("a", nv(tv({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return _i("li", {}, [u]);
  }
});
var dl = /* @__PURE__ */ l1(ZN, [["__scopeId", "data-v-7c46b2b3"]]);
uh({
  components: {
    FeatherListItem: dl
  }
});
const KN = {}, JN = { class: "feather-list" };
function XN(e, o) {
  return qN(), GN("ul", JN, [
    YN(e.$slots, "default", {}, void 0, !0)
  ]);
}
var ch = /* @__PURE__ */ l1(KN, [["render", XN], ["__scopeId", "data-v-941a1d50"]]);
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
uh({
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
      (e.keyCode === ce.SPACE || e.keyCode === ce.ENTER) && this.updateValue(), e.keyCode === ce.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: PN, FeatherListItem: dl }
});
var tD = Object.defineProperty, nD = Object.defineProperties, oD = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, rD = Object.prototype.hasOwnProperty, iD = Object.prototype.propertyIsEnumerable, rv = (e, o, r) => o in e ? tD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ln = (e, o) => {
  for (var r in o || (o = {}))
    rD.call(o, r) && rv(e, r, o[r]);
  if (ov)
    for (var r of ov(o))
      iD.call(o, r) && rv(e, r, o[r]);
  return e;
}, sD = (e, o) => nD(e, oD(o));
const Xs = window.Vue.defineComponent, Ie = window.Vue.openBlock, mt = window.Vue.createElementBlock, mn = window.Vue.createElementVNode, mo = window.Vue.toDisplayString, jn = window.Vue.createCommentVNode, lt = window.Vue.resolveComponent, Yn = window.Vue.createBlock, Wt = window.Vue.withCtx, Ns = window.Vue.Fragment, Qa = window.Vue.renderList, wn = window.Vue.createVNode, dh = window.Vue.withModifiers, Mi = window.Vue.normalizeClass, Hf = window.Vue.renderSlot, u1 = window.Vue.createTextVNode, aD = window.Vue.pushScopeId, lD = window.Vue.popScopeId, c1 = window.Vue.reactive, d1 = window.Vue.nextTick, jd = window.Vue.markRaw, Zd = window.Vue.toRef, iv = window.Vue.computed, uD = window.Vue.toRefs, ms = window.Vue.ref, Kd = window.Vue.mergeProps, sv = window.Vue.toHandlers, su = window.Vue.withDirectives, au = window.Vue.vShow;
var lc = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, fh = {
  query: {
    type: String
  }
}, Pi = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cD = Xs({
  mixins: [],
  props: Ln(Ln({
    text: {
      type: String,
      required: !0
    }
  }, lc), fh),
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
function hD(e, o, r, s, a, u) {
  return Ie(), mt("span", null, [
    mn("span", null, mo(e.beginning), 1),
    e.highlighted ? (Ie(), mt("span", dD, mo(e.highlighted), 1)) : jn("", !0),
    e.end ? (Ie(), mt("span", fD, mo(e.end), 1)) : jn("", !0)
  ]);
}
var f1 = /* @__PURE__ */ Pi(cD, [["render", hD], ["__scopeId", "data-v-8abe2492"]]);
const pD = Xs({
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
  }, lc), fh),
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
    FeatherList: ch,
    FeatherListItem: dl,
    Highlighter: f1
  }
}), mD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function wD(e, o, r, s, a, u) {
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
          onClick: dh((y) => e.select(v), ["stop"])
        }, {
          default: Wt(() => [
            wn(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (Ie(), mt("span", mD, mo(e.newLabel), 1)) : jn("", !0)
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
var vD = /* @__PURE__ */ Pi(pD, [["render", wD], ["__scopeId", "data-v-f623434a"]]);
const _D = Xs({
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
  }, lc), fh),
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
    Highlighter: f1
  }
}), gD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, $D = ["aria-multiselectable"], yD = { role: "row" }, bD = ["aria-selected", "onClick"], CD = ["id", "aria-selected"], VD = { key: 1 };
function ED(e, o, r, s, a, u) {
  const c = lt("Highlighter");
  return Ie(), mt("div", gD, [
    mn("table", {
      class: Mi(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      mn("thead", null, [
        mn("tr", yD, [
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
          class: Mi({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: dh((v) => e.select(f), ["stop"])
        }, [
          (Ie(!0), mt(Ns, null, Qa(e.config, (v, g) => (Ie(), mt("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Mi({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            v.prop === e.textProp ? (Ie(), Yn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Ie(), mt("p", VD, mo(f[v.prop]), 1))
          ], 10, CD))), 128))
        ], 10, bD))), 128))
      ])
    ], 10, $D)
  ], 512);
}
var SD = /* @__PURE__ */ Pi(_D, [["render", ED], ["__scopeId", "data-v-58c88fd1"]]);
const kD = Xs({
  components: {
    FeatherList: ch,
    FeatherListItem: dl
  }
});
function ID(e, o, r, s, a, u) {
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
var AD = /* @__PURE__ */ Pi(kD, [["render", ID], ["__scopeId", "data-v-06b752c6"]]);
const TD = Xs({
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
function xD(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("BaseChipPreIcon"), m = lt("BaseChipLabel"), v = lt("Cancel"), g = lt("BaseChip");
  return Ie(), Yn(g, {
    class: Mi(["focus autocomplete-chip", { focused: e.focused }]),
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
          u1(mo(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? jn("", !0) : (Ie(), mt("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = dh((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
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
var LD = /* @__PURE__ */ Pi(TD, [["render", xD], ["__scopeId", "data-v-e0fc6ac0"]]);
const MD = {}, ND = (e) => (aD("data-v-aa720e06"), e = e(), lD(), e), DD = { class: "spinner-container" }, OD = /* @__PURE__ */ ND(() => /* @__PURE__ */ mn("svg", {
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
], -1)), BD = [
  OD
];
function RD(e, o) {
  return Ie(), mt("div", DD, BD);
}
var PD = /* @__PURE__ */ Pi(MD, [["render", RD], ["__scopeId", "data-v-aa720e06"]]), uc = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(uc || {});
const h1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, FD = Ln(Ln(Ln({
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
    default: () => h1
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, lc), Ks), nc), UD = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, WD = (e, o, r, s) => {
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
}, HD = () => {
  const e = c1({
    row: -1
  }), o = (u) => {
    d1(() => {
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
}, zD = (e) => {
  const o = c1({
    row: -1,
    col: -1
  }), r = (c, f) => {
    d1(() => {
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
}, qD = Xs({
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
      return jd(rN);
    },
    minCharIcon() {
      return jd(mN);
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
      r !== void 0 && (Oi(this.typingTimeout), this.typingTimeout = Di(() => {
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
    const r = ec(Zd(e, "labels"), h1);
    Js(e), oc(e);
    let s;
    e.gridConfig ? s = zD(e.gridConfig) : s = HD();
    const a = Zd(e, "id"), u = iv(() => a.value ? a.value : be("feather-autocomplete-input")), { validate: c } = js(u, Zd(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: v, allowNew: g, type: y, minChar: b } = uD(e), B = ms(!1), N = ms(!1), F = ms(!1), M = ms(""), S = ms([]), T = ms(), x = iv(() => T.value), U = () => {
      B.value && !N.value && (M.value && M.value.length >= b.value && o.emit("search", M.value), b.value <= 0 && o.emit("search", M.value || ""), S.value = [], s.reset());
    }, A = WD({
      selectionLimit: f,
      selectionLimitReached: N,
      modelValue: m,
      textProp: v,
      allowNew: g,
      forceCloseResults: F,
      query: M,
      internalResults: S,
      input: x,
      emitSearch: U
    }, s, y.value, o.emit);
    return sD(Ln(Ln({}, r), Zs(o.attrs)), {
      query: M,
      internalResults: S,
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
  const c = lt("FeatherIcon"), f = lt("Chip"), m = lt("InputWrapper"), v = lt("AutocompleteResults"), g = lt("AutocompleteResultsGrid"), y = lt("MenuMessage"), b = lt("Spinner"), B = lt("FeatherMenu"), N = lt("InputSubText");
  return Ie(), mt("div", Kd(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    wn(B, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Mi(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
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
        }, sv(M), { ref: "scroll" }), {
          pre: Wt(() => [
            Hf(e.$slots, "pre", {}, () => [
              wn(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Wt(() => [
            wn(c, {
              icon: e.dropdownIcon,
              class: Mi(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Wt(() => [
            mn("div", {
              class: Mi(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              mn("div", GD, null, 512),
              mn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, mo(e.selectedDescribedByText), 9, YD),
              (Ie(!0), mt(Ns, null, Qa(e.modelValueList, (S, T) => su((Ie(), Yn(f, {
                key: S[e.textProp],
                role: "button",
                id: T === e.activeChipIndex ? e.activeChipId : null,
                focused: T === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (x) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [au, !e.singleSelect]
              ])), 128)),
              mn("textarea", Kd(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, sv(e.inputListeners), { ref: "input" }), null, 16)
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
            mn("span", jD, mo(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : jn("", !0),
        e.showSelectionLimit ? (Ie(), Yn(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Wt(() => [
            wn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            mn("span", ZD, mo(e.selectionLimitLabel), 1)
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
            mn("span", KD, [
              Hf(e.$slots, "min-char", {}, () => [
                u1(mo(e.computedMinCharText), 1)
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
var XD = /* @__PURE__ */ Pi(qD, [["render", JD], ["__scopeId", "data-v-43a7e951"]]);
var QD = Object.defineProperty, eO = Object.defineProperties, tO = Object.getOwnPropertyDescriptors, av = Object.getOwnPropertySymbols, nO = Object.prototype.hasOwnProperty, oO = Object.prototype.propertyIsEnumerable, lv = (e, o, r) => o in e ? QD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Au = (e, o) => {
  for (var r in o || (o = {}))
    nO.call(o, r) && lv(e, r, o[r]);
  if (av)
    for (var r of av(o))
      oO.call(o, r) && lv(e, r, o[r]);
  return e;
}, p1 = (e, o) => eO(e, tO(o));
const m1 = window.Vue.defineComponent, rO = window.Vue.ref, el = window.Vue.computed, iO = window.Vue.reactive, uv = window.Vue.watch, Jd = window.Vue.inject, w1 = window.Vue.resolveComponent, zf = window.Vue.openBlock, v1 = window.Vue.createElementBlock, qr = window.Vue.createElementVNode, sO = window.Vue.createBlock, aO = window.Vue.createCommentVNode, _1 = window.Vue.renderSlot, lO = window.Vue.pushScopeId, uO = window.Vue.popScopeId, Xd = window.Vue.toRef, cv = window.Vue.mergeProps, cO = window.Vue.toDisplayString, dO = window.Vue.createVNode;
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
}, hO = m1({
  props: fO,
  setup(e) {
    const o = rO(), r = () => {
      o.value.focus();
    }, s = el(() => be("feather-radio-button")), a = iO({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = el(() => be("radio-label-id")), c = el(() => a.first || a.checked ? 0 : -1);
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
    FeatherRipple: Gr
  }
}), pO = (e) => (lO("data-v-24790cf0"), e = e(), uO(), e), mO = { class: "layout-container" }, wO = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], vO = { class: "radio hover focus" }, _O = /* @__PURE__ */ pO(() => /* @__PURE__ */ qr("div", {
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
], -1)), gO = ["id"];
function $O(e, o, r, s, a, u) {
  const c = w1("feather-ripple");
  return zf(), v1("div", mO, [
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
      qr("div", vO, [
        _O,
        e.vm.disabled ? aO("", !0) : (zf(), sO(c, {
          key: 0,
          center: ""
        }))
      ]),
      qr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        _1(e.$slots, "default", {}, void 0, !0)
      ], 8, gO)
    ], 40, wO)
  ]);
}
var qf = /* @__PURE__ */ g1(hO, [["render", $O], ["__scopeId", "data-v-24790cf0"]]);
const yO = p1(Au({}, Ks), {
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
    Js(e);
    const r = Xd(e, "error"), s = Xd(e, "modelValue"), a = el(() => be("feather-input-description")), u = el(() => {
      const c = p1(Au({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Au(Au({
      descriptionId: a,
      attrs: u
    }, e1(s, o.emit, e.label, e.schema, Xd(e, "error"))), Zs(o.attrs));
  },
  components: {
    InputSubText: Ys
  }
}), VO = ["for"], EO = ["id"];
function SO(e, o, r, s, a, u) {
  const c = w1("InputSubText");
  return zf(), v1("div", cv(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    qr("label", {
      for: e.groupId,
      class: "group-label"
    }, cO(e.label), 9, VO),
    qr("div", cv(e.attrs, {
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
const kO = window.Vue.defineComponent, IO = window.Vue.renderList, AO = window.Vue.Fragment, dv = window.Vue.openBlock, TO = window.Vue.createElementBlock, xO = window.Vue.toDisplayString, LO = window.Vue.createTextVNode, fv = window.Vue.unref, hv = window.Vue.withCtx, MO = window.Vue.createVNode, NO = window.Vue.createBlock, DO = window.Vue.watch, OO = window.Vue.ref, BO = /* @__PURE__ */ kO({
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
      default: hv(() => [
        (dv(), TO(AO, null, IO(s, (f) => MO(fv(qf), {
          value: f.id,
          key: f.id
        }, {
          default: hv(() => [
            LO(xO(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const RO = /* @__PURE__ */ Ee(BO, [["__scopeId", "data-v-0363302c"]]);
var PO = Object.defineProperty, FO = Object.defineProperties, UO = Object.getOwnPropertyDescriptors, pv = Object.getOwnPropertySymbols, WO = Object.prototype.hasOwnProperty, HO = Object.prototype.propertyIsEnumerable, mv = (e, o, r) => o in e ? PO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Aa = (e, o) => {
  for (var r in o || (o = {}))
    WO.call(o, r) && mv(e, r, o[r]);
  if (pv)
    for (var r of pv(o))
      HO.call(o, r) && mv(e, r, o[r]);
  return e;
}, wv = (e, o) => FO(e, UO(o));
const zO = window.Vue.defineComponent, qO = window.Vue.inject, Ta = window.Vue.h;
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
    }, o = this.asAnchor ? "a" : "button", r = {}, s = Aa({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = Ta(Gr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Ta(o, wv(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ta(Gr, { center: !0 })
      ]);
    }
    const c = Ta("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ta(o, wv(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ve = /* @__PURE__ */ GO(jO, [["__scopeId", "data-v-702d1074"]]);
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
function hB(e, o) {
  return iB(), sB("svg", cB, fB);
}
var pB = /* @__PURE__ */ lB(uB, [["render", hB]]);
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
const VB = window.Vue.defineComponent, To = window.Vue.unref, gi = window.Vue.createVNode, vv = window.Vue.toDisplayString, fr = window.Vue.createElementVNode, b1 = window.Vue.createTextVNode, _v = window.Vue.openBlock, gv = window.Vue.createElementBlock, EB = window.Vue.createCommentVNode, SB = window.Vue.withCtx, kB = window.Vue.vShow, IB = window.Vue.normalizeClass, AB = window.Vue.withDirectives, TB = window.Vue.Fragment, xB = window.Vue.pushScopeId, LB = window.Vue.popScopeId, C1 = (e) => (xB("data-v-d75ae1ee"), e = e(), LB(), e), MB = /* @__PURE__ */ b1(" Filters "), NB = { class: "count" }, DB = { class: "results" }, OB = { class: "total" }, BB = /* @__PURE__ */ b1(" Reset "), RB = /* @__PURE__ */ C1(() => /* @__PURE__ */ fr("div", { class: "title" }, "By Severities:", -1)), PB = /* @__PURE__ */ C1(() => /* @__PURE__ */ fr("div", { class: "title" }, "By Start Date:", -1)), $i = window.Vue.ref, FB = window.Vue.reactive, UB = window.Vue.markRaw, $v = window.Vue.watch, WB = /* @__PURE__ */ VB({
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
      ExpandLess: pB,
      ExpandMore: cl,
      Refresh: y1
    }), a = wo(), u = $i(r.isOpen), c = $i(["all"]), f = $i(1), m = $i(r.list), v = $i(!1), g = $i(0), y = $i(null), b = FB({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), B = () => {
      var P, H;
      r.saveFilters && a.filters && (a.filters.node && (b.nodeSelectedValue = a.filters.node), ((P = a.filters) == null ? void 0 : P.severities) && !((H = a.filters) != null && H.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, x());
    }, N = () => {
      b.nodes = a.nodes, b.results = a.nodes;
    };
    $v(
      () => a.nodes,
      () => {
        N();
      }
    ), $v(r, () => {
      m.value = r.list, B();
    });
    const F = (P) => {
      c.value = P, x();
    }, M = (P) => {
      f.value = P, x();
    }, S = (P) => {
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
          (he) => {
            var Ae;
            return he.nodeLabel === ((Ae = b.nodeSelectedValue) == null ? void 0 : Ae._text);
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
      )), f.value !== 1 && (g.value++, P = ET(
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
    return (P, H) => (_v(), gv(TB, null, [
      r.isOpen ? EB("", !0) : (_v(), gv("div", {
        key: 0,
        class: "btn-filter",
        onClick: A
      }, [
        fr("div", null, [
          gi(To(X), {
            icon: To(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          MB,
          fr("span", NB, vv(g.value), 1)
        ]),
        gi(To(X), {
          icon: u.value ? To(s).ExpandLess : To(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      AB(fr("div", {
        class: IB(["filters", { collapsed: !r.isOpen }])
      }, [
        fr("div", DB, [
          fr("div", OB, "Results: " + vv(To(m).length), 1),
          gi(To(ve), {
            class: "btn-reset",
            onClick: T
          }, {
            default: SB(() => [
              gi(To(X), {
                icon: To(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              BB
            ]),
            _: 1
          })
        ]),
        fr("div", null, [
          gi(To(XD), {
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
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          RB,
          gi($M, {
            alarms: r.list,
            onSelectedOption: F,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          fr("div", null, [
            PB,
            gi(RO, {
              onFilterDateSelected: M,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [kB, u.value]
      ])
    ], 64));
  }
});
const Qs = /* @__PURE__ */ Ee(WB, [["__scopeId", "data-v-d75ae1ee"]]), HB = window.Vue.openBlock, zB = window.Vue.createElementBlock, qB = window.Vue.createElementVNode;
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
var cc = /* @__PURE__ */ GB(YB, [["render", JB]]);
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
const fR = {}, hR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pR = /* @__PURE__ */ cR("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), mR = [
  pR
];
function wR(e, o) {
  return lR(), uR("svg", hR, mR);
}
var vR = /* @__PURE__ */ dR(fR, [["render", wR]]);
const Zr = () => window.VRouter || V0;
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
], -1)), kR = [
  SR
];
function IR(e, o) {
  return _R(), gR("div", ER, kR);
}
var Ds = /* @__PURE__ */ bR(CR, [["render", IR], ["__scopeId", "data-v-2263be39"]]);
const AR = window.Vue.defineComponent, Qd = window.Vue.unref, TR = window.Vue.createVNode, xR = window.Vue.createElementVNode, LR = window.Vue.withCtx, MR = window.Vue.openBlock, NR = window.Vue.createBlock, DR = window.Vue.pushScopeId, OR = window.Vue.popScopeId, BR = (e) => (DR("data-v-ca5ca6e3"), e = e(), OR(), e), RR = /* @__PURE__ */ BR(() => /* @__PURE__ */ xR("span", null, "New Situation", -1)), PR = window.Vue.markRaw, FR = /* @__PURE__ */ AR({
  __name: "NewSituationBtn",
  setup(e) {
    const o = Zr(), r = PR({
      Add: cc
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (MR(), NR(Qd(ve), {
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
const E1 = /* @__PURE__ */ Ee(FR, [["__scopeId", "data-v-ca5ca6e3"]]), UR = "/whoami", WR = async () => {
  try {
    const e = await Dt.get(UR);
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
}, Bi = HR("userStore", {
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
      const e = await IT();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...zR,
        ...r,
        distanceMeasureName: o ? xt.HELLINGER_OPTION : xt.SPACE_DISTANCE_OPTION,
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
}), qR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", GR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", YR = window.Vue.defineComponent, ws = window.Vue.unref, vs = window.Vue.openBlock, _s = window.Vue.createElementBlock, jR = window.Vue.createCommentVNode, S1 = window.Vue.createTextVNode, bv = window.Vue.Fragment, k1 = window.Vue.createElementVNode, ZR = window.Vue.pushScopeId, KR = window.Vue.popScopeId, JR = (e) => (ZR("data-v-ad139137"), e = e(), KR(), e), XR = ["src"], QR = { class: "engine" }, eP = /* @__PURE__ */ S1(" ENGINE "), tP = {
  key: 0,
  class: "type"
}, nP = {
  key: 1,
  class: "type"
}, oP = /* @__PURE__ */ S1(" ENGINE "), rP = /* @__PURE__ */ JR(() => /* @__PURE__ */ k1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Cv = window.Vue.computed, iP = /* @__PURE__ */ YR({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = Zr(), r = Bi(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = Cv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = Cv(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == xt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (vs(), _s("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      ws(a) ? (vs(), _s("img", {
        key: 0,
        src: ws(u) ? ws(GR) : ws(qR),
        class: "icon-type"
      }, null, 8, XR)) : jR("", !0),
      k1("div", QR, [
        ws(a) ? (vs(), _s(bv, { key: 0 }, [
          eP,
          ws(u) ? (vs(), _s("div", tP, "CLUSTERING")) : (vs(), _s("div", nP, "DEEP LEARNING"))
        ], 64)) : (vs(), _s(bv, { key: 1 }, [
          oP,
          rP
        ], 64))
      ])
    ]));
  }
});
const sP = /* @__PURE__ */ Ee(iP, [["__scopeId", "data-v-ad139137"]]);
const aP = {}, lP = window.Vue.openBlock, uP = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const cP = { class: "empty" };
function dP(e, o) {
  return lP(), uP("div", cP, "No results found.");
}
const ea = /* @__PURE__ */ Ee(aP, [["render", dP], ["__scopeId", "data-v-2415ea97"]]), fP = window.Vue.defineComponent, Mo = window.Vue.createElementVNode, xa = window.Vue.unref, yi = window.Vue.createVNode, hP = window.Vue.withCtx, lu = window.Vue.toDisplayString, cr = window.Vue.openBlock, bi = window.Vue.createElementBlock, Vv = window.Vue.createCommentVNode, Ev = window.Vue.createBlock, pP = window.Vue.renderList, mP = window.Vue.Fragment, wP = window.Vue.pushScopeId, vP = window.Vue.popScopeId, I1 = (e) => (wP("data-v-c35fbcc6"), e = e(), vP(), e), _P = { class: "list-main" }, gP = { class: "header" }, $P = /* @__PURE__ */ I1(() => /* @__PURE__ */ Mo("h2", null, "Situation List", -1)), yP = { class: "link-btns" }, bP = /* @__PURE__ */ I1(() => /* @__PURE__ */ Mo("span", null, "View Unassociated Alarms", -1)), CP = { class: "content" }, VP = { class: "left-filters" }, EP = { class: "container" }, SP = { class: "autocomplete" }, kP = { key: 0 }, IP = { key: 1 }, AP = { key: 0 }, TP = { class: "situation-list" }, xP = {
  key: 0,
  class: "footer-pager"
}, LP = window.Vue.reactive, uu = window.Vue.ref, MP = window.Vue.watch, NP = window.Vue.markRaw, DP = /* @__PURE__ */ fP({
  __name: "SituationList",
  setup(e) {
    const o = NP({
      Add: cc,
      View: aR,
      Settings: vR
    }), r = Zr(), s = wo(), a = Bi();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = LP({
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
    MP(
      () => s.situations,
      () => {
        f.value = !1, y(), F(s.situations);
      }
    );
    const b = (S) => {
      m.value = S, c.situations = c.allSituations[m.value];
    }, B = (S) => {
      r.push({
        name: "situationDetail",
        params: {
          id: S
        }
      });
    }, N = () => {
      r.push({
        name: "viewUnassignedAlarms"
      });
    }, F = (S) => {
      g.value = S.length, c.allSituations = Be.exports.chunk(S, u);
      const T = S.map((x) => x.id);
      s.filteredSituations = T, m.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, M = (S) => {
      S.length ? F(S) : c.situations = [];
    };
    return (S, T) => {
      var x;
      return cr(), bi("div", _P, [
        Mo("div", gP, [
          $P,
          Mo("div", yP, [
            yi(xa(ve), {
              class: "view-situation-btn",
              onClick: T[0] || (T[0] = () => N())
            }, {
              default: hP(() => [
                yi(xa(X), {
                  icon: xa(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                bP
              ]),
              _: 1
            }),
            yi(E1),
            yi(sP)
          ])
        ]),
        Mo("div", CP, [
          Mo("div", VP, [
            yi(Qs, {
              list: xa(s).situations,
              onFilteredList: M,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Mo("div", EP, [
            Mo("div", SP, [
              c.situations && c.situations.length ? (cr(), bi("div", kP, " Result: " + lu((x = c.situations) == null ? void 0 : x.length) + " of " + lu(g.value), 1)) : Vv("", !0)
            ]),
            f.value ? (cr(), Ev(xa(Ds), {
              key: 0,
              class: "spinner"
            })) : (cr(), bi("div", IP, [
              c.situations && c.situations.length ? (cr(), bi("div", AP, [
                Mo("div", TP, [
                  (cr(!0), bi(mP, null, pP(c.situations, (U) => (cr(), bi("div", {
                    class: "card",
                    key: U.id
                  }, [
                    yi(Zg, {
                      onClick: () => B(U.id),
                      "situation-info": U
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                g.value > u ? (cr(), bi("div", xP, [
                  Mo("div", null, "Page: " + lu(m.value + 1) + " of " + lu(v.value), 1),
                  yi(K2, {
                    onGoToPage: b,
                    currentPage: m.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Vv("", !0)
              ])) : (cr(), Ev(ea, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const OP = /* @__PURE__ */ Ee(DP, [["__scopeId", "data-v-c35fbcc6"]]);
const cu = window.Vue.ref, BP = window.Vue.inject, RP = window.Vue.computed, PP = window.Vue.onMounted, A1 = {
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
  const o = cu(!1), r = cu(), s = cu(e.controls), a = cu(e.id), u = () => {
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
}, Sv = window.Vue.ref, FP = window.Vue.toRef, UP = window.Vue.watch, kv = window.Vue.provide, x1 = {
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
  UP(r, (N) => {
    m(N);
  });
  const u = (N) => {
    N.preventDefault(), a.value.some((F, M) => F.tab && F.tab.el.contains(N.target) ? (f(M), m(M), !0) : !1);
  }, c = (N) => {
    if (((K) => K.shiftKey || K.ctrlKey || K.metaKey || K.altKey)(N))
      return;
    const M = N.keyCode, S = (K) => {
      K.stopPropagation(), K.preventDefault();
    }, T = a.value.filter((K) => K.tab && !K.tab.disabled), x = a.value.findIndex((K) => K.tab && K.tab.el.contains(document.activeElement));
    let U = x !== -1 ? x : s.value;
    const A = [ce.RIGHT], P = [ce.LEFT], H = [ce.ENTER, ce.SPACE];
    e.vertical && (A.push(ce.DOWN), P.push(ce.UP)), A.indexOf(M) > -1 ? (U++, U >= T.length && (U = 0), S(N), f(a.value.indexOf(T[U]))) : P.indexOf(M) > -1 && (U--, U < 0 && (U = T.length - 1), S(N), f(a.value.indexOf(T[U]))), H.indexOf(M) > -1 && m(U);
  }, f = (N) => {
    a.value.forEach(function(F, M) {
      N === M && F.tab && F.tab.focus();
    });
  }, m = (N) => {
    const F = a.value[N];
    !F || F.tab && F.tab.disabled || (a.value.forEach((M, S) => {
      M.tab && (M.tab.selected = N === S), M.panel && (M.panel.selected = N === S);
    }), s.value = N, o.emit("update:modelValue", N));
  };
  kv("registerTab", (N) => {
    const F = N.index;
    F > -1 && (a.value[F] = { ...a.value[F], tab: N }, a.value = [...a.value], y());
  }), kv("registerPanel", (N) => {
    const F = N.index;
    F > -1 && (a.value[F] = {
      ...a.value[F],
      panel: N
    }, a.value = [...a.value], y());
  });
  const y = () => {
    a.value.forEach(({ tab: N, panel: F }, M) => {
      if (F && N) {
        const S = N.id || be("tab"), T = N.controls || be("panel");
        N.controls = T, N.id = S, F.tab = S, F.id = T;
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
}, du = window.Vue.ref, WP = window.Vue.inject, HP = window.Vue.computed, zP = window.Vue.onMounted, D1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, O1 = (e) => {
  const o = du(!1), r = du(), s = du(e.tab), a = du(e.id), u = WP("registerPanel");
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
}, hh = window.Vue.defineComponent, qP = window.Vue.resolveComponent, ph = window.Vue.openBlock, mh = window.Vue.createElementBlock, tl = window.Vue.createElementVNode, B1 = window.Vue.mergeProps, Wu = window.Vue.renderSlot, GP = window.Vue.createVNode, YP = window.Vue.normalizeStyle, jP = window.Vue.toHandlers, ZP = window.Vue.withDirectives, KP = window.Vue.normalizeProps, JP = window.Vue.guardReactiveProps, XP = window.Vue.vShow;
var wh = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QP = A1, e3 = hh({
  props: QP,
  setup(e) {
    return T1(e);
  },
  components: {
    FeatherRipple: Gr
  }
}), t3 = { role: "presentation" }, n3 = { class: "tab-text" };
function o3(e, o, r, s, a, u) {
  const c = qP("FeatherRipple");
  return ph(), mh("li", t3, [
    tl("button", B1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      tl("span", n3, [
        Wu(e.$slots, "default", {}, void 0, !0)
      ]),
      GP(c)
    ], 16)
  ]);
}
var Os = /* @__PURE__ */ wh(e3, [["render", o3], ["__scopeId", "data-v-e6bb52b6"]]);
const r3 = M1, i3 = L1, s3 = hh({
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
  return ph(), mh("div", a3, [
    tl("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: YP({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    tl("ul", B1(e.attrs, jP(e.listeners)), [
      Wu(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    tl("div", l3, [
      Wu(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var R1 = /* @__PURE__ */ wh(s3, [["render", u3], ["__scopeId", "data-v-27adffb9"]]);
const c3 = D1, d3 = hh({
  props: c3,
  setup(e) {
    return O1(e);
  }
});
function f3(e, o, r, s, a, u) {
  return ZP((ph(), mh("div", KP(JP(e.attrs)), [
    Wu(e.$slots, "default")
  ], 16)), [
    [XP, e.selected]
  ]);
}
var Bs = /* @__PURE__ */ wh(d3, [["render", f3]]);
const h3 = window.Vue.defineComponent, p3 = window.Vue.toDisplayString, m3 = window.Vue.normalizeClass, w3 = window.Vue.openBlock, v3 = window.Vue.createElementBlock, _3 = window.Vue.createCommentVNode, g3 = /* @__PURE__ */ h3({
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
    }, p3(o.severity), 3)) : _3("", !0);
  }
});
const P1 = /* @__PURE__ */ Ee(g3, [["__scopeId", "data-v-83c2cdce"]]), $3 = window.Vue.defineComponent, Iv = window.Vue.toDisplayString, Av = window.Vue.createElementVNode, y3 = window.Vue.openBlock, b3 = window.Vue.createElementBlock;
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
      Av("div", V3, Iv(o.label), 1),
      Av("div", E3, Iv(o.info), 1)
    ]));
  }
});
const ef = /* @__PURE__ */ Ee(S3, [["__scopeId", "data-v-b4afa751"]]), k3 = window.Vue.defineComponent, I3 = window.Vue.unref, A3 = window.Vue.renderList, T3 = window.Vue.Fragment, tf = window.Vue.openBlock, nf = window.Vue.createElementBlock, x3 = window.Vue.toDisplayString, L3 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const M3 = { class: "alarms-list" }, N3 = /* @__PURE__ */ k3({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (tf(), nf("div", M3, [
      (tf(!0), nf(T3, null, A3(I3(Be.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (tf(), nf("div", {
        class: L3(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, x3(a.length), 3))), 128))
    ]));
  }
});
const D3 = /* @__PURE__ */ Ee(N3, [["__scopeId", "data-v-52d63440"]]), O3 = window.Vue.openBlock, B3 = window.Vue.createElementBlock, R3 = window.Vue.createElementVNode;
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
var Hu = /* @__PURE__ */ Z3(K3, [["render", e4]]);
const t4 = window.Vue.defineComponent, uo = window.Vue.unref, of = window.Vue.createVNode, vh = window.Vue.createElementVNode, rf = window.Vue.withCtx, fu = window.Vue.openBlock, sf = window.Vue.createBlock, af = window.Vue.createCommentVNode, n4 = window.Vue.normalizeClass, o4 = window.Vue.createElementBlock, r4 = window.Vue.pushScopeId, i4 = window.Vue.popScopeId, _h = (e) => (r4("data-v-d9c6a479"), e = e(), i4(), e), s4 = /* @__PURE__ */ _h(() => /* @__PURE__ */ vh("span", null, "Acknowledge", -1)), a4 = /* @__PURE__ */ _h(() => /* @__PURE__ */ vh("span", null, "Escalate", -1)), l4 = /* @__PURE__ */ _h(() => /* @__PURE__ */ vh("span", null, "Clear", -1)), u4 = /* @__PURE__ */ t4({
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
      await Uk(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await Yg(
        o.situationId,
        xt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await kg(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (fu(), o4("div", {
      class: n4(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
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
          s4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (fu(), sf(uo(ve), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(uo(xt).ESCALATE))
      }, {
        default: rf(() => [
          of(uo(X), {
            icon: uo(q3),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          a4
        ]),
        _: 1
      })) : af("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (fu(), sf(uo(ve), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(uo(xt).CLEAR))
      }, {
        default: rf(() => [
          of(uo(X), {
            icon: uo(Hu),
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
const F1 = /* @__PURE__ */ Ee(u4, [["__scopeId", "data-v-d9c6a479"]]);
var c4 = Object.defineProperty, d4 = Object.defineProperties, f4 = Object.getOwnPropertyDescriptors, Tv = Object.getOwnPropertySymbols, h4 = Object.prototype.hasOwnProperty, p4 = Object.prototype.propertyIsEnumerable, xv = (e, o, r) => o in e ? c4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Gf = (e, o) => {
  for (var r in o || (o = {}))
    h4.call(o, r) && xv(e, r, o[r]);
  if (Tv)
    for (var r of Tv(o))
      p4.call(o, r) && xv(e, r, o[r]);
  return e;
}, U1 = (e, o) => d4(e, f4(o));
const W1 = window.Vue.defineComponent, m4 = window.Vue.inject, w4 = window.Vue.resolveComponent, lf = window.Vue.openBlock, Lv = window.Vue.createElementBlock, Ts = window.Vue.createElementVNode, v4 = window.Vue.createBlock, Mv = window.Vue.createCommentVNode, _4 = window.Vue.renderSlot, g4 = window.Vue.pushScopeId, $4 = window.Vue.popScopeId, uf = window.Vue.toRef, hu = window.Vue.computed, y4 = window.Vue.ref;
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
      (e.keyCode === ce.SPACE || e.keyCode === ce.ENTER) && this.updateValue(), e.keyCode === ce.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: Gr
  }
}), S4 = (e) => (g4("data-v-a7af27e2"), e = e(), $4(), e), k4 = { class: "layout-container" }, I4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], A4 = { class: "checkbox hover focus" }, T4 = /* @__PURE__ */ S4(() => /* @__PURE__ */ Ts("div", { class: "box" }, [
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
], -1)), x4 = ["id", "for"];
function L4(e, o, r, s, a, u) {
  const c = w4("feather-ripple");
  return lf(), Lv("div", k4, [
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
      Ts("div", A4, [
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
    ], 40, I4)
  ]);
}
var Ni = /* @__PURE__ */ b4(E4, [["render", L4], ["__scopeId", "data-v-a7af27e2"]]);
const M4 = U1(Gf({}, Ks), {
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
    Js(e);
    const r = uf(e, "error"), s = hu(() => be("feather-checkbox-group")), a = hu(() => be("feather-input-description")), u = hu(() => be("feather-input-label")), c = hu(() => {
      const g = JSON.parse(JSON.stringify(o.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), U1(Gf({}, g), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = y4(s.value), { validate: m } = js(f, uf(e, "modelValue"), e.label, e.schema, uf(e, "error"));
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
var z4 = Object.defineProperty, q4 = Object.defineProperties, G4 = Object.getOwnPropertyDescriptors, Nv = Object.getOwnPropertySymbols, Y4 = Object.prototype.hasOwnProperty, j4 = Object.prototype.propertyIsEnumerable, Dv = (e, o, r) => o in e ? z4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, xs = (e, o) => {
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
const n8 = z1(xs(xs({}, nc), Ks), {
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
    Js(e), oc(e);
    const r = cf(e, "id"), s = K4(() => r.value ? r.value : be("feather-textarea-label")), { validate: a } = js(s, cf(e, "modelValue"), e.label, e.schema, cf(e, "error"));
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), z1(xs(xs({}, e), this.listeners), {
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
var zu = /* @__PURE__ */ t8(r8, [["render", a8], ["__scopeId", "data-v-0648df5c"]]);
const l8 = window.Pinia.defineStore, dc = l8("appStore", {
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
}), u8 = window.Vue.defineComponent, Wv = window.Vue.toDisplayString, La = window.Vue.createElementVNode, Ci = window.Vue.unref, gs = window.Vue.openBlock, Hv = window.Vue.createBlock, Ma = window.Vue.createCommentVNode, zv = window.Vue.createVNode, pu = window.Vue.createElementBlock, c8 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const d8 = { class: "row" }, f8 = { class: "label" }, h8 = { class: "action-icons" }, p8 = { class: "icon-btn" }, m8 = {
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
    const o = e, r = dc(), s = qv(!1), a = qv((m = o.memo) == null ? void 0 : m.body);
    _8(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await jk(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Yk(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, g) => (gs(), pu("div", {
      class: c8([o.boxType === "small" ? "box-small" : "box"])
    }, [
      La("div", d8, [
        La("div", f8, Wv(e.label), 1),
        La("div", h8, [
          La("div", p8, [
            s.value ? Ma("", !0) : (gs(), Hv(Ci(X), {
              key: 0,
              icon: Ci(H4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (gs(), pu("div", m8, [
            zv(Ci(X), {
              icon: Ci(Us),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ma("", !0),
          a.value && a.value != "" || s.value ? (gs(), pu("div", w8, [
            zv(Ci(X), {
              icon: Ci(qs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Ma("", !0)
        ])
      ]),
      La("div", null, [
        !s.value && a.value != null ? (gs(), pu("div", v8, Wv(a.value), 1)) : Ma("", !0),
        s.value ? (gs(), Hv(Ci(zu), {
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
const qu = /* @__PURE__ */ Ee(g8, [["__scopeId", "data-v-ee1264b5"]]), $8 = window.Vue.defineComponent, Or = window.Vue.unref, $s = window.Vue.createVNode, Na = window.Vue.toDisplayString, po = window.Vue.createElementVNode, Gv = window.Vue.openBlock, Yv = window.Vue.createElementBlock, jv = window.Vue.createCommentVNode, df = window.Vue.createTextVNode, y8 = window.Vue.pushScopeId, b8 = window.Vue.popScopeId, gh = (e) => (y8("data-v-b59dc239"), e = e(), b8(), e), C8 = {
  key: 0,
  class: "card"
}, V8 = { class: "row" }, E8 = {
  key: 0,
  class: "ack"
}, S8 = /* @__PURE__ */ gh(() => /* @__PURE__ */ po("strong", null, " Duration: ", -1)), k8 = ["innerHTML"], I8 = /* @__PURE__ */ gh(() => /* @__PURE__ */ po("strong", null, "First Event", -1)), A8 = /* @__PURE__ */ gh(() => /* @__PURE__ */ po("strong", null, "Last Event", -1)), T8 = { class: "section memo-boxes" }, Zv = window.Vue.ref, x8 = window.Vue.watch, L8 = /* @__PURE__ */ $8({
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
      const v = await Ig(m);
      v && (a.value = v);
    };
    return (m, v) => {
      var g, y, b, B, N;
      return a.value ? (Gv(), Yv("div", C8, [
        po("div", null, [
          po("div", V8, [
            $s(Or(Ni), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (F) => s.value = F),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            po("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, Na(a.value.nodeLabel) + " - " + Na(a.value.id), 1),
            $s(P1, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Gv(), Yv("div", E8, [
              $s(Or(X), {
                icon: Or(Us),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : jv("", !0)
          ]),
          po("div", null, [
            S8,
            df(" " + Na(Or(Xu)(Or(u), new Date(a.value.firstEventTime))), 1)
          ]),
          po("div", {
            class: "description",
            innerHTML: Or(Fg)(a.value.description || "")
          }, null, 8, k8),
          po("div", null, [
            I8,
            df(" - " + Na(Or(Bo)(a.value.firstEventTime)), 1)
          ]),
          po("div", null, [
            A8,
            df(" - " + Na(Or(Bo)(a.value.lastEventTime)), 1)
          ]),
          po("div", T8, [
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
        $s(F1, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : jv("", !0);
    };
  }
});
const M8 = /* @__PURE__ */ Ee(L8, [["__scopeId", "data-v-b59dc239"]]), N8 = window.Vue.openBlock, D8 = window.Vue.createElementBlock, q1 = window.Vue.createElementVNode;
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
    s.keyCode === ce.ESCAPE && (s.preventDefault(), o.value = !o.value);
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
}, Gu = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, X1 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Z1(() => Gu(o, r)), Y8(() => j1(e, (s) => {
    s ? K1(() => {
      o = J1(r);
    }) : Gu(o, r);
  }, { immediate: !0 }));
}, j8 = (e, o) => {
  let r;
  Z1(() => Gu(r, o.value ? o.value.offsetParent : !1)), j1([e, o], ([s, a]) => {
    s && a ? K1(() => {
      r = J1(a.offsetParent);
    }) : a && Gu(r, a.offsetParent);
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
const $h = window.Vue.defineComponent, nl = window.Vue.ref, Q8 = window.Vue.nextTick, Q1 = window.Vue.openBlock, e0 = window.Vue.createElementBlock, yh = window.Vue.createElementVNode, e5 = window.Vue.renderSlot, t5 = window.Vue.resolveComponent, n5 = window.Vue.normalizeClass, o5 = window.Vue.withModifiers, r5 = window.Vue.createVNode, Xv = window.Vue.toRef, Qv = window.Vue.computed, e_ = window.Vue.watch;
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
}, s5 = $h({
  props: i5,
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
      y && y.focus ? Q8(() => {
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
}), a5 = /* @__PURE__ */ yh("div", { tabindex: "0" }, null, -1), l5 = {
  class: "focus-trap-content",
  ref: "content"
}, u5 = /* @__PURE__ */ yh("div", { tabindex: "0" }, null, -1);
function c5(e, o, r, s, a, u) {
  return Q1(), e0("div", null, [
    a5,
    yh("div", l5, [
      e5(e.$slots, "default")
    ], 512),
    u5
  ]);
}
var n0 = /* @__PURE__ */ t0(s5, [["render", c5]]);
const d5 = $h({
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
}), f5 = ["aria-label"];
function h5(e, o, r, s, a, u) {
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
var o0 = /* @__PURE__ */ t0(d5, [["render", h5], ["__scopeId", "data-v-fc0f3f00"]]);
const r0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, p5 = {
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
$h({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: m5,
  props: p5,
  setup(e, o) {
    const r = ec(Xv(e, "labels"), r0), s = Xv(e, "modelValue"), a = nl(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = Qv(() => !!o.slots.footer), f = Qv(() => be("dialog-header"));
    e.relative ? j8(s, a) : X1(s), Y1(s), e_(G1(s), () => {
      u();
    });
    const m = nl(e.modelValue);
    return e_(m, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), X8({ close: u, hasFooter: c, headerId: f, element: a, shown: m }, r);
  },
  components: {
    FocusTrap: n0,
    DialogClose: o0
  }
});
var w5 = Object.defineProperty, t_ = Object.getOwnPropertySymbols, v5 = Object.prototype.hasOwnProperty, _5 = Object.prototype.propertyIsEnumerable, n_ = (e, o, r) => o in e ? w5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, fc = (e, o) => {
  for (var r in o || (o = {}))
    v5.call(o, r) && n_(e, r, o[r]);
  if (t_)
    for (var r of t_(o))
      _5.call(o, r) && n_(e, r, o[r]);
  return e;
};
const hc = window.Vue.defineComponent, o_ = window.Vue.toRef, r_ = window.Vue.watch, i_ = window.Vue.ref, s_ = window.Vue.resolveComponent, mu = window.Vue.openBlock, a_ = window.Vue.createBlock, g5 = window.Vue.Teleport, l_ = window.Vue.createElementBlock, ff = window.Vue.createVNode, u_ = window.Vue.Transition, hf = window.Vue.withCtx, c_ = window.Vue.createCommentVNode, $5 = window.Vue.withDirectives, y5 = window.Vue.normalizeStyle, b5 = window.Vue.normalizeClass, d_ = window.Vue.createElementVNode, C5 = window.Vue.renderSlot, V5 = window.Vue.vShow;
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
}, k5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, I5 = hc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: k5,
  props: S5,
  setup(e, o) {
    const r = ec(o_(e, "labels"), i0), s = o_(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    X1(s), Y1(s), r_(G1(s), () => {
      a();
    });
    const u = i_(), c = i_(!1);
    return r_(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), fc({ close: a, shown: c, isShown: s, element: u }, r);
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
  return mu(), a_(g5, { to: "body" }, [
    e.modelValue ? (mu(), l_("div", A5, [
      ff(u_, { name: "greyOutShim" }, {
        default: hf(() => [
          e.modelValue ? (mu(), l_("div", T5)) : c_("", !0)
        ]),
        _: 1
      }),
      ff(u_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (m) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (m) => e.shown = !1)
      }, {
        default: hf(() => [
          $5((mu(), a_(f, {
            enable: e.modelValue,
            style: y5({ width: e.width }),
            key: "sect",
            class: b5(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: hf(() => [
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
var s0 = /* @__PURE__ */ E5(I5, [["render", M5], ["__scopeId", "data-v-0a36e1dc"]]);
const N5 = fc({
  label: {
    type: String,
    required: !0
  }
}, A1);
hc({
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Di(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Oi(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return T1(e);
  },
  components: {
    FeatherRipple: Gr
  }
});
const D5 = fc({}, M1), O5 = L1;
hc({
  emits: O5,
  model: x1,
  props: D5,
  setup(e, o) {
    return N1(e, o);
  }
});
const B5 = fc({
  header: {
    type: String
  }
}, D1);
hc({
  name: "DrawerTabContent",
  props: B5,
  setup(e) {
    return O1(e);
  },
  directives: {
    MenuFocusLoop: jM
  }
});
const R5 = window.Vue.defineComponent, a0 = window.Vue.createElementVNode, f_ = window.Vue.createVNode, P5 = window.Vue.renderList, F5 = window.Vue.Fragment, Da = window.Vue.openBlock, pf = window.Vue.createElementBlock, h_ = window.Vue.createBlock, U5 = window.Vue.unref, W5 = window.Vue.withCtx, H5 = window.Vue.pushScopeId, z5 = window.Vue.popScopeId, q5 = (e) => (H5("data-v-37e146e7"), e = e(), z5(), e), G5 = { class: "content" }, Y5 = /* @__PURE__ */ q5(() => /* @__PURE__ */ a0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), j5 = {
  key: 0,
  class: "situation-list"
}, mf = window.Vue.ref, p_ = window.Vue.watch, Z5 = /* @__PURE__ */ R5({
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
    p_(r, () => {
      a.value = r.visible, u();
    }), p_(
      () => s.situations,
      () => {
        u();
      }
    );
    const m = (v) => {
      f.value = v;
    };
    return (v, g) => (Da(), h_(U5(s0), {
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
          f_(Qs, {
            list: c.value,
            isSituation: "",
            onFilteredList: m
          }, null, 8, ["list"]),
          f.value.length ? (Da(), pf("div", j5, [
            (Da(!0), pf(F5, null, P5(f.value, (y) => (Da(), pf("div", {
              class: "card",
              key: y.id
            }, [
              f_(Zg, {
                onClick: (b) => o("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Da(), h_(ea, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const l0 = /* @__PURE__ */ Ee(Z5, [["__scopeId", "data-v-37e146e7"]]), K5 = window.Vue.defineComponent, m_ = window.Vue.normalizeClass, Is = window.Vue.createElementVNode, wu = window.Vue.unref, J5 = window.Vue.createVNode, vu = window.Vue.toDisplayString, X5 = window.Vue.createTextVNode, Q5 = window.Vue.openBlock, eF = window.Vue.createElementBlock, tF = window.Vue.pushScopeId, nF = window.Vue.popScopeId, oF = (e) => (tF("data-v-f3d99277"), e = e(), nF(), e), rF = { class: "alarmInfo" }, iF = { class: "alarm-title" }, sF = /* @__PURE__ */ oF(() => /* @__PURE__ */ Is("strong", null, " Duration: ", -1)), aF = { class: "description" }, lF = /* @__PURE__ */ K5({
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
      Is("div", rF, [
        Is("div", {
          class: m_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        J5(wu(Ni), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Is("div", iF, vu(e.alarm.nodeLabel) + " - " + vu(e.alarm.id), 1)
      ]),
      Is("div", null, [
        sF,
        X5(" " + vu(wu(Xu)(wu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Is("div", aF, vu(wu(Ug)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const bh = /* @__PURE__ */ Ee(lF, [["__scopeId", "data-v-f3d99277"]]), uF = window.Vue.defineComponent, Tu = window.Vue.createElementVNode, ys = window.Vue.unref, cF = window.Vue.toDisplayString, w_ = window.Vue.withCtx, wf = window.Vue.createVNode, dF = window.Vue.renderList, fF = window.Vue.Fragment, Oa = window.Vue.openBlock, vf = window.Vue.createElementBlock, v_ = window.Vue.createBlock, hF = window.Vue.pushScopeId, pF = window.Vue.popScopeId, mF = (e) => (hF("data-v-35547098"), e = e(), pF(), e), wF = { class: "content" }, vF = { class: "header" }, _F = /* @__PURE__ */ mF(() => /* @__PURE__ */ Tu("h4", null, "ADD ALARMS", -1)), gF = {
  key: 0,
  class: "alarms-list"
}, _u = window.Vue.ref, __ = window.Vue.watch, $F = /* @__PURE__ */ uF({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = wo(), a = _u(r.visible), u = _u([]), c = _u(["all"]), f = _u(s.unassignedAlarms);
    __(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), __(
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
    return (b, B) => (Oa(), v_(ys(s0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        B[0] || (B[0] = (N) => a.value = N),
        B[1] || (B[1] = (N) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: w_(() => [
        Tu("div", wF, [
          Tu("div", vF, [
            _F,
            wf(ys(ve), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: w_(() => [
                Tu("span", null, "Add " + cF(ys(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          wf(Qs, {
            list: ys(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (Oa(), vf("div", gF, [
            (Oa(!0), vf(fF, null, dF(f.value, (N) => (Oa(), vf("div", {
              class: "card",
              key: N.id
            }, [
              wf(bh, {
                selected: ys(Be.exports.includes)(ys(u), N.id),
                alarm: N,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Oa(), v_(ea, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const yF = /* @__PURE__ */ Ee($F, [["__scopeId", "data-v-35547098"]]), bF = window.Vue.openBlock, CF = window.Vue.createElementBlock, u0 = window.Vue.createElementVNode;
var VF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EF = {}, SF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kF = /* @__PURE__ */ u0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), IF = /* @__PURE__ */ u0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), AF = [
  kF,
  IF
];
function TF(e, o) {
  return bF(), CF("svg", SF, AF);
}
var g_ = /* @__PURE__ */ VF(EF, [["render", TF]]);
const xF = window.Vue.defineComponent, Tn = window.Vue.createElementVNode, Ft = window.Vue.unref, Xt = window.Vue.createVNode, Ba = window.Vue.withCtx, LF = window.Vue.renderList, $_ = window.Vue.Fragment, Ra = window.Vue.openBlock, gu = window.Vue.createElementBlock, MF = window.Vue.createBlock, NF = window.Vue.pushScopeId, DF = window.Vue.popScopeId, ta = (e) => (NF("data-v-76f75ba2"), e = e(), DF(), e), OF = { class: "container" }, BF = { class: "header" }, RF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("div", { class: "title" }, "Alarms", -1)), PF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Add Alarms", -1)), FF = { class: "alarms-container" }, UF = { class: "filters" }, WF = { class: "list" }, HF = { class: "row actions" }, zF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Clear", -1)), qF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Acknowledge", -1)), GF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Move", -1)), YF = /* @__PURE__ */ ta(() => /* @__PURE__ */ Tn("span", null, "Remove", -1)), jF = { class: "section" }, ZF = {
  key: 0,
  class: "alarm-list"
}, $u = window.Vue.ref, KF = window.Vue.watch, JF = window.Vue.reactive, XF = window.Vue.markRaw, QF = /* @__PURE__ */ xF({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = XF({
      Add: cc,
      Delete: g_,
      MarkComplete: Hu,
      CheckCircle: Us,
      ExitToApp: Yf
    }), s = dc(), a = wo(), u = $u(!1), c = $u(["all"]), f = $u(!1), m = $u(!1), v = JF({
      selectedAlarms: [],
      alarms: o.alarms
    });
    KF(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const g = (x) => {
      v.selectedAlarms.includes(x) ? Be.exports.remove(v.selectedAlarms, (U) => U == x) : v.selectedAlarms.push(x);
    }, y = async (x) => {
      v.selectedAlarms.length ? (await Wk(v.selectedAlarms, x), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, b = () => v.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), B = async () => {
      b() && (await Tw(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, N = async (x) => {
      b() && (await Tw(
        o.situationId,
        v.selectedAlarms
      ) ? await F(x, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, F = async (x, U) => {
      U.length ? await jg(x, U) ? a.getSituation(x) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, M = async (x) => {
      await F(o.situationId, x), m.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, T = (x) => {
      v.alarms = x;
    };
    return (x, U) => (Ra(), gu($_, null, [
      Tn("div", OF, [
        Tn("div", BF, [
          RF,
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
              PF
            ]),
            _: 1
          })
        ]),
        Tn("div", FF, [
          Tn("div", UF, [
            Xt(Qs, {
              list: o.alarms,
              onFilteredList: T,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Tn("div", WF, [
            Tn("div", HF, [
              Xt(Ft(Ni), {
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
                  zF
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
                  qF
                ]),
                _: 1
              }),
              Xt(Ft(ve), { onClick: S }, {
                default: Ba(() => [
                  Xt(Ft(X), {
                    icon: Ft(Yf),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  GF
                ]),
                _: 1
              }),
              Xt(Ft(ve), { onClick: B }, {
                default: Ba(() => [
                  Xt(Ft(X), {
                    icon: Ft(g_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  YF
                ]),
                _: 1
              })
            ]),
            Tn("div", jF, [
              v.alarms.length > 0 ? (Ra(), gu("div", ZF, [
                (Ra(!0), gu($_, null, LF(v.alarms, (A) => (Ra(), gu("div", {
                  key: A.id
                }, [
                  Xt(M8, {
                    alarm: A,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: g
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Ra(), MF(ea, { key: 1 }))
            ])
          ])
        ])
      ]),
      Xt(l0, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: N,
        onDrawerClosed: U[4] || (U[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Xt(yF, {
        visible: m.value,
        onAlarmsSelected: M,
        onDrawerAlarmsClosed: U[5] || (U[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const e6 = /* @__PURE__ */ Ee(QF, [["__scopeId", "data-v-76f75ba2"]]), t6 = window.Vue.defineComponent, co = window.Vue.createVNode, In = window.Vue.unref, _f = window.Vue.normalizeClass, yu = window.Vue.toDisplayString, Pa = window.Vue.openBlock, Fa = window.Vue.createElementBlock, y_ = window.Vue.createCommentVNode, n6 = window.Vue.withCtx, Gn = window.Vue.createElementVNode, o6 = window.Vue.Fragment, r6 = window.Vue.pushScopeId, i6 = window.Vue.popScopeId, s6 = (e) => (r6("data-v-fafb3615"), e = e(), i6(), e), a6 = { class: "section" }, l6 = { class: "action-section" }, u6 = { class: "btn-row" }, c6 = { key: 0 }, d6 = { key: 1 }, f6 = {
  key: 0,
  class: "situation-detail"
}, h6 = { class: "situation-info" }, p6 = { class: "id" }, m6 = ["innerHTML"], w6 = /* @__PURE__ */ s6(() => /* @__PURE__ */ Gn("p", null, null, -1)), v6 = { class: "boxes" }, _6 = { class: "parameters" }, g6 = { class: "section memo-boxes" }, $6 = { key: 0 }, y6 = window.Vue.computed, b_ = window.Vue.ref, b6 = window.Vue.watch, C6 = /* @__PURE__ */ t6({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = dc(), s = wo(), a = xt.REJECTED, u = b_(o.situationInfo.status), c = b_(o.situationInfo);
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
      var y, b, B, N, F, M, S, T, x, U, A, P;
      return Pa(), Fa(o6, null, [
        Gn("div", a6, [
          Gn("div", l6, [
            co(F1, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Gn("div", u6, [
              co(In(ve), {
                class: _f(["btn", { rejected: u.value == In(a) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = (H) => m(In(a)))
              }, {
                default: n6(() => [
                  co(In(X), {
                    icon: In(Ag),
                    "aria-hidden": "true",
                    class: _f(["icon reject", { rejected: u.value == In(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == In(a) ? (Pa(), Fa("span", c6, yu(In(a)), 1)) : (Pa(), Fa("span", d6, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Pa(), Fa("div", f6, [
            Gn("div", {
              class: _f(["severity-line", [`${(b = (y = c.value) == null ? void 0 : y.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            Gn("div", h6, [
              Gn("div", p6, [
                Gn("div", null, " Situation - " + yu((B = c.value) == null ? void 0 : B.id) + " - " + yu(c.value.alarms.length) + " alarm(s) affects " + yu(In(Be.exports.size)(In(Be.exports.groupBy)((N = c.value) == null ? void 0 : N.alarms, "nodeId"))) + " node(s) ", 1),
                co(P1, {
                  severity: (F = c.value) == null ? void 0 : F.severity
                }, null, 8, ["severity"])
              ]),
              Gn("span", {
                innerHTML: In(f),
                "data-test": "situation-description"
              }, null, 8, m6),
              w6,
              Gn("div", v6, [
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
            Gn("div", _6, [
              co(D3, {
                alarms: (M = c.value) == null ? void 0 : M.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : y_("", !0),
          Gn("div", g6, [
            co(qu, {
              id: (S = c.value) == null ? void 0 : S.id,
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
        c.value.alarms && c.value.alarms.length ? (Pa(), Fa("div", $6, [
          co(e6, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : y_("", !0)
      ], 64);
    };
  }
});
const V6 = /* @__PURE__ */ Ee(C6, [["__scopeId", "data-v-fafb3615"]]);
var E6 = Object.defineProperty, S6 = Object.defineProperties, k6 = Object.getOwnPropertyDescriptors, C_ = Object.getOwnPropertySymbols, I6 = Object.prototype.hasOwnProperty, A6 = Object.prototype.propertyIsEnumerable, V_ = (e, o, r) => o in e ? E6(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, jf = (e, o) => {
  for (var r in o || (o = {}))
    I6.call(o, r) && V_(e, r, o[r]);
  if (C_)
    for (var r of C_(o))
      A6.call(o, r) && V_(e, r, o[r]);
  return e;
}, T6 = (e, o) => S6(e, k6(o));
const c0 = window.Vue.defineComponent, xi = window.Vue.resolveComponent, xu = window.Vue.openBlock, E_ = window.Vue.createBlock, Lu = window.Vue.mergeProps, Li = window.Vue.withCtx, d0 = window.Vue.createElementBlock, x6 = window.Vue.Fragment, L6 = window.Vue.renderList, M6 = window.Vue.createTextVNode, N6 = window.Vue.toDisplayString, D6 = window.Vue.computed, S_ = window.Vue.toRef, Ua = window.Vue.createVNode, k_ = window.Vue.toHandlers, O6 = window.Vue.renderSlot, B6 = window.Vue.normalizeClass, R6 = window.Vue.createElementVNode;
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
    FeatherList: ch,
    FeatherListItem: dl
  }
});
function F6(e, o, r, s, a, u) {
  const c = xi("FeatherListItem"), f = xi("FeatherList");
  return xu(), E_(f, Lu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Li(() => [
      (xu(!0), d0(x6, null, L6(e.options, (m, v) => (xu(), E_(c, {
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
        default: Li(() => [
          M6(N6(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var U6 = /* @__PURE__ */ f0(P6, [["render", F6], ["__scopeId", "data-v-eae820da"]]);
const W6 = T6(jf(jf({}, nc), Ks), {
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
    Js(e), oc(e);
    const r = D6(() => be("feather-select-input")), { validate: s } = js(r, S_(e, "modelValue"), e.label, e.schema, S_(e, "error"));
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
      Oi(this.delayTimeout), this.delayTimeout = Di(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: tc,
    InputSubText: Ys,
    FeatherMenu: s1,
    List: U6,
    FeatherIcon: X
  }
});
function q6(e, o, r, s, a, u) {
  const c = xi("FeatherIcon"), f = xi("InputWrapper"), m = xi("List"), v = xi("FeatherMenu"), g = xi("InputSubText");
  return xu(), d0("div", Lu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ua(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Li((y) => [
        Ua(f, Lu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, k_(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Li(() => [
            O6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Li(() => [
            Ua(c, {
              class: B6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Li(() => [
            R6("input", Lu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, k_(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Li(() => [
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
var G6 = /* @__PURE__ */ f0(z6, [["render", q6], ["__scopeId", "data-v-ecb32d90"]]);
const Y6 = window.Vue.openBlock, j6 = window.Vue.createElementBlock, h0 = window.Vue.createElementVNode;
var Z6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const K6 = {}, J6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X6 = /* @__PURE__ */ h0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), Q6 = /* @__PURE__ */ h0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), e7 = [
  X6,
  Q6
];
function t7(e, o) {
  return Y6(), j6("svg", J6, e7);
}
var n7 = /* @__PURE__ */ Z6(K6, [["render", t7]]);
const Mu = window.Vue.openBlock, Zf = window.Vue.createElementBlock, p0 = window.Vue.createElementVNode, o7 = window.Vue.defineComponent, Vi = window.Vue.ref, r7 = window.Vue.provide, I_ = window.Vue.computed, i7 = window.Vue.onUnmounted, A_ = window.Vue.toRef, s7 = window.Vue.resolveComponent, a7 = window.Vue.Fragment, l7 = window.Vue.createBlock, u7 = window.Vue.Teleport, T_ = window.Vue.createVNode, c7 = window.Vue.Transition, d7 = window.Vue.withCtx, f7 = window.Vue.normalizeClass, h7 = window.Vue.normalizeStyle, p7 = window.Vue.toDisplayString, m7 = window.Vue.createCommentVNode, w7 = window.Vue.renderSlot, gf = window.Vue.nextTick;
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
}, g7 = /* @__PURE__ */ p0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), $7 = [
  g7
];
function y7(e, o) {
  return Mu(), Zf("svg", _7, $7);
}
var b7 = /* @__PURE__ */ m0(v7, [["render", y7]]), Tt = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Tt || {}), hr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(hr || {});
const C7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Tt.top), a >= o.height + s && c.push(Tt.bottom);
  const f = [];
  u >= o.width + s && f.push(Tt.right), e.left >= o.width + s && f.push(Tt.left);
  let m = [...f, ...c];
  return (r === Tt.top || r === Tt.bottom) && (m = [...c, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, V7 = (e, o, r, s, a = 28) => {
  if (e === Tt.left || e === Tt.right)
    return hr.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], m = u, v = c + o.width / 2, g = r.width - a, y = r.width / 2;
  return m >= y && v >= y && f.push(hr.center), v >= g && f.push(hr.left), m >= g && f.push(hr.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, E7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Tt.top
  },
  pointerAlignment: {
    type: String,
    default: () => hr.center
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
    const o = Vi(!1), r = Vi(!1), s = be("feather-tooltip-trigger"), a = be("feather-tooltip"), u = "data-feather-tooltip";
    r7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Oi(c), o.value || (c = Di(F, e.enterDelay));
    }, m = () => {
      Oi(c), c = Di(M, e.exitDelay);
    }, v = (Ae) => {
      Ae.keyCode === ce.ESCAPE && (Ae.preventDefault(), M(!0));
    }, g = I_(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: v
    }, b = Vi(document), B = i1(b, () => M(!0));
    i7(() => M(!0));
    const N = () => document.getElementById(a), F = () => {
      r.value = !1, o.value = !0, gf(() => {
        const Ae = N();
        he(Ae), o.value = !1, gf(() => {
          r.value = !0, o.value = !0, B.value = !0;
        });
      });
    }, M = (Ae = !1) => {
      P.value = "", A.value = "", H.value = "", K.value = "", o.value = !1, Ae && (r.value = !1), B.value = !1;
    }, S = A_(e, "placement"), T = A_(e, "pointerAlignment"), x = 8, U = 24, A = Vi(""), P = Vi(""), H = Vi(""), K = Vi(""), Me = I_(() => K.value ? "p-" + K.value : !1), he = (Ae) => {
      const Se = document.querySelector(`[${u}=${s}]`);
      if (!Se) {
        console.log("trigger not found");
        return;
      }
      gf(() => {
        const He = Se.getBoundingClientRect(), Ge = Ae.getBoundingClientRect(), $e = C7(He, Ge, S.value, x), Ze = V7($e, He, Ge, T.value, U);
        H.value = Ze.toString(), K.value = $e.toString();
        let Xe = 0, ct = 0;
        if (($e === Tt.left || $e === Tt.right) && (Xe = He.top + He.height / 2 - Ge.height / 2, $e === Tt.left && (ct = He.left - Ge.width - x), $e === Tt.right && (ct = He.right)), $e === Tt.top || $e === Tt.bottom) {
          Xe = He.top - Ge.height - x, $e === Tt.bottom && (Xe = He.bottom);
          const on = He.left + He.width / 2;
          switch (Ze) {
            case hr.center:
              ct = on - Ge.width / 2;
              break;
            case hr.left:
              ct = on - U;
              break;
            case hr.right:
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
    Pointer: b7
  }
}), k7 = ["id"];
function I7(e, o, r, s, a, u) {
  const c = s7("Pointer");
  return Mu(), Zf(a7, null, [
    (Mu(), l7(u7, { to: "body" }, [
      T_(c7, { css: e.animate }, {
        default: d7(() => [
          e.show ? (Mu(), Zf("div", {
            key: 0,
            class: f7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: h7({ left: e.left, top: e.top })
          }, [
            p0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, p7(e.title), 9, k7),
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
var x_ = /* @__PURE__ */ m0(S7, [["render", I7], ["__scopeId", "data-v-3da6b22e"]]);
const A7 = window.Vue.defineComponent, $f = window.Vue.normalizeStyle, yf = window.Vue.createElementVNode, Wa = window.Vue.unref, L_ = window.Vue.toHandlers, M_ = window.Vue.mergeProps, N_ = window.Vue.withCtx, D_ = window.Vue.createVNode, T7 = window.Vue.renderList, x7 = window.Vue.Fragment, Ha = window.Vue.openBlock, za = window.Vue.createElementBlock, O_ = window.Vue.normalizeClass, B_ = window.Vue.createCommentVNode;
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
    return (u, c) => (Ha(), za("div", L7, [
      yf("div", {
        class: "line-gray",
        style: $f({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      D_(Wa(x_), {
        title: Wa(Bo)(e.alarm.firstEventTime)
      }, {
        default: N_(({ attrs: f, on: m }) => [
          yf("div", M_({ class: "circle" }, f, L_(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Ha(!0), za(x7, null, T7(o.events, (f, m) => (Ha(), za("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[m + 1] ? (Ha(), za("div", {
          key: 0,
          class: O_(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: $f({
            width: s(f.createTime, o.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : B_("", !0),
        D_(Wa(x_), {
          title: Wa(Bo)(e.alarm.firstEventTime)
        }, {
          default: N_(({ attrs: v, on: g }) => [
            o.events[m + 1] ? (Ha(), za("div", M_({ key: 0 }, v, L_(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : B_("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      yf("div", {
        class: O_(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: $f({
          width: s(e.events[e.events.length - 1].createTime, Wa(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const N7 = /* @__PURE__ */ Ee(M7, [["__scopeId", "data-v-6c43a557"]]), D7 = window.Vue.openBlock, O7 = window.Vue.createElementBlock, w0 = window.Vue.createElementVNode;
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
        Kf("div", null, P_(j7(Bo)(a.createTime)) + " - " + P_(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const eU = /* @__PURE__ */ Ee(Q7, [["__scopeId", "data-v-2e087f7b"]]), tU = window.Vue.defineComponent, nU = window.Vue.normalizeClass, An = window.Vue.createElementVNode, bs = window.Vue.toDisplayString, fn = window.Vue.unref, Cs = window.Vue.createVNode, v0 = window.Vue.createTextVNode, oU = window.Vue.renderList, F_ = window.Vue.Fragment, dr = window.Vue.openBlock, Ei = window.Vue.createElementBlock, U_ = window.Vue.createBlock, bu = window.Vue.createCommentVNode, rU = window.Vue.normalizeStyle, iU = window.Vue.pushScopeId, sU = window.Vue.popScopeId, aU = (e) => (iU("data-v-57b5ddda"), e = e(), sU(), e), lU = { class: "section detail" }, uU = { class: "id" }, cU = {
  key: 0,
  class: "section"
}, dU = /* @__PURE__ */ aU(() => /* @__PURE__ */ An("div", { class: "id" }, "Alarms", -1)), fU = { class: "action-btns" }, hU = { class: "zoom" }, pU = /* @__PURE__ */ v0(" Zoom "), mU = { class: "times" }, wU = {
  key: 0,
  class: "timeline-container"
}, vU = { class: "alarm-id" }, _U = {
  key: 0,
  class: "panel"
}, Br = window.Vue.ref, gU = window.Vue.watch, $U = /* @__PURE__ */ tU({
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
    gU(o, () => {
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
    }, S = () => {
      c.value = f.value, B.value = g();
    }, T = (P) => {
      s.value = P;
    }, x = () => {
      s.value = 0;
    };
    return (P, H) => {
      var K, Me;
      return dr(), Ei(F_, null, [
        An("div", lU, [
          An("div", {
            class: nU(["severity-line", [`${(Me = (K = o.situation) == null ? void 0 : K.severity) == null ? void 0 : Me.toLowerCase()}-bg dark`]])
          }, null, 2),
          An("div", null, [
            An("div", uU, "Situation " + bs(o.situation.id), 1),
            An("div", null, " Duration: " + bs(fn(Xu)(m.value, new Date(b.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (dr(), Ei("div", cU, [
          dU,
          An("div", fU, [
            Cs(fn(G6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                H[0] || (H[0] = (he) => u.value = he),
                N
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            An("div", hU, [
              pU,
              An("div", null, [
                Cs(fn(X), {
                  icon: fn(n7),
                  class: "zoom-icon",
                  onClick: F
                }, null, 8, ["icon"]),
                Cs(fn(X), {
                  icon: fn(y1),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                Cs(fn(X), {
                  icon: fn(z7),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (dr(), Ei("div", {
            key: 0,
            class: "alarms",
            style: rU({
              width: f.value + 50 + "px"
            })
          }, [
            An("div", mU, [
              An("div", null, bs(fn(Bo)(b.value)), 1),
              An("div", null, bs(fn(Bo)(m.value)), 1)
            ]),
            e.situation.events ? (dr(), Ei("div", wU, [
              (dr(!0), Ei(F_, null, oU(y.value, (he) => (dr(), Ei("div", {
                class: "timeline",
                key: he.id
              }, [
                An("div", vU, [
                  v0(bs(he.nodeLabel) + " - " + bs(he.id) + " ", 1),
                  s.value === he.id ? (dr(), U_(fn(X), {
                    key: 0,
                    icon: fn(cl),
                    class: "zoom-icon expand",
                    onClick: x
                  }, null, 8, ["icon"])) : (dr(), U_(fn(X), {
                    key: 1,
                    icon: fn(Jg),
                    class: "zoom-icon expand",
                    onClick: () => T(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Cs(N7, {
                  alarm: he,
                  proportion: B.value,
                  "min-start": b.value,
                  events: o.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === he.id ? (dr(), Ei("div", _U, [
                  Cs(eU, {
                    events: o.situation.events[he.id]
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
const yU = /* @__PURE__ */ Ee($U, [["__scopeId", "data-v-57b5ddda"]]), bU = window.Vue.defineComponent, pn = window.Vue.createElementVNode, fo = window.Vue.unref, Ht = window.Vue.createTextVNode, Vs = window.Vue.withCtx, tt = window.Vue.openBlock, CU = window.Vue.createBlock, Cu = window.Vue.createCommentVNode, Rr = window.Vue.createVNode, at = window.Vue.createElementBlock, VU = window.Vue.resolveComponent, Si = window.Vue.toDisplayString, W_ = window.Vue.renderList, H_ = window.Vue.Fragment, EU = window.Vue.pushScopeId, SU = window.Vue.popScopeId, na = (e) => (EU("data-v-8418d0e3"), e = e(), SU(), e), kU = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, IU = { class: "header" }, AU = /* @__PURE__ */ na(() => /* @__PURE__ */ pn("h3", null, "AI Suggestions", -1)), TU = { class: "header-actions" }, xU = /* @__PURE__ */ Ht(" Re-evaluate "), LU = /* @__PURE__ */ Ht(" Refresh "), MU = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, NU = /* @__PURE__ */ na(() => /* @__PURE__ */ pn("span", null, "Loading\u2026", -1)), DU = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, OU = /* @__PURE__ */ na(() => /* @__PURE__ */ pn("span", null, "Requesting a fresh analysis\u2026", -1)), BU = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, RU = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, PU = /* @__PURE__ */ Ht(" The LLM integration is currently disabled. Enable it on the "), FU = /* @__PURE__ */ Ht("configuration page"), UU = /* @__PURE__ */ Ht(" to start generating suggestions for new situations. "), WU = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, HU = /* @__PURE__ */ Ht(" No API key is configured. Add one on the "), zU = /* @__PURE__ */ Ht("configuration page"), qU = /* @__PURE__ */ Ht(" to enable AI suggestions. "), GU = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, YU = /* @__PURE__ */ Ht(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), jU = /* @__PURE__ */ na(() => /* @__PURE__ */ pn("strong", null, "Re-evaluate", -1)), ZU = /* @__PURE__ */ Ht(" above to trigger one now. "), KU = [
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
}, e9 = { class: "failed-msg" }, t9 = /* @__PURE__ */ Ht(" The last LLM request failed: "), n9 = /* @__PURE__ */ Ht(" Retry "), o9 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, r9 = /* @__PURE__ */ Ht(" Could not load suggestions. Please retry. "), i9 = /* @__PURE__ */ Ht("Retry"), s9 = {
  key: 6,
  "data-test": "ai-ready"
}, a9 = {
  key: 0,
  class: "meta"
}, l9 = /* @__PURE__ */ Ht(" Generated by "), u9 = { class: "section" }, c9 = /* @__PURE__ */ na(() => /* @__PURE__ */ pn("h4", null, "Probable root causes", -1)), d9 = {
  key: 0,
  "data-test": "ai-root-causes"
}, f9 = {
  key: 1,
  class: "empty"
}, h9 = { class: "section" }, p9 = /* @__PURE__ */ na(() => /* @__PURE__ */ pn("h4", null, "Possible resolutions", -1)), m9 = {
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
    const o = e, r = Bi(), s = Ef("loading"), a = Ef(null), u = Ef(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const T = await Gg(o.situationId);
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
      const T = await MT(o.situationId);
      if (T === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = T, s.value = T.status, y();
    };
    _9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await b(), y();
    }), v9(() => g());
    const F = Vf(() => {
      var T;
      return (T = a.value) != null && T.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), M = Vf(() => {
      const T = r.llmConfig;
      return !T || !T.enabled ? "disabled" : T.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = Vf(
      () => {
        var T, x;
        return ((T = r.llmConfig) == null ? void 0 : T.enabled) === !0 && ((x = r.llmConfig) == null ? void 0 : x.apiKeyPresent) === !0;
      }
    );
    return (T, x) => {
      var A;
      const U = VU("router-link");
      return tt(), at("div", kU, [
        pn("div", IU, [
          AU,
          pn("div", TU, [
            fo(S) ? (tt(), CU(fo(ve), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: N
            }, {
              default: Vs(() => [
                xU
              ]),
              _: 1
            }, 8, ["disabled"])) : Cu("", !0),
            Rr(fo(ve), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: B
            }, {
              default: Vs(() => [
                LU
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (tt(), at("div", MU, [
          Rr(fo(Ds)),
          NU
        ])) : s.value === "reanalyzing" ? (tt(), at("div", DU, [
          Rr(fo(Ds)),
          OU
        ])) : s.value === "absent" ? (tt(), at("div", BU, [
          fo(M) === "disabled" ? (tt(), at("span", RU, [
            PU,
            Rr(U, { to: "/settings" }, {
              default: Vs(() => [
                FU
              ]),
              _: 1
            }),
            UU
          ])) : fo(M) === "no-key" ? (tt(), at("span", WU, [
            HU,
            Rr(U, { to: "/settings" }, {
              default: Vs(() => [
                zU
              ]),
              _: 1
            }),
            qU
          ])) : (tt(), at("span", GU, KU)),
          u.value ? (tt(), at("div", JU, Si(u.value), 1)) : Cu("", !0)
        ])) : s.value === "pending" ? (tt(), at("div", XU, [
          Rr(fo(Ds)),
          pn("span", null, " Analyzing alarms with the LLM\u2026 requested at " + Si(fo(F)) + ". ", 1)
        ])) : s.value === "failed" ? (tt(), at("div", QU, [
          pn("div", e9, [
            t9,
            pn("code", null, Si(((A = a.value) == null ? void 0 : A.error) || "unknown error"), 1)
          ]),
          Rr(fo(ve), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: B
          }, {
            default: Vs(() => [
              n9
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (tt(), at("div", o9, [
          r9,
          Rr(fo(ve), {
            secondary: "",
            onClick: B
          }, {
            default: Vs(() => [
              i9
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (tt(), at("div", s9, [
          a.value.completedAt ? (tt(), at("div", a9, [
            l9,
            pn("strong", null, Si(a.value.model), 1),
            Ht(" at " + Si(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Cu("", !0),
          pn("div", u9, [
            c9,
            a.value.rootCauses.length ? (tt(), at("ol", d9, [
              (tt(!0), at(H_, null, W_(a.value.rootCauses, (P, H) => (tt(), at("li", {
                key: `cause-${H}`
              }, Si(P), 1))), 128))
            ])) : (tt(), at("div", f9, "No root causes returned."))
          ]),
          pn("div", h9, [
            p9,
            a.value.resolutions.length ? (tt(), at("ol", m9, [
              (tt(!0), at(H_, null, W_(a.value.resolutions, (P, H) => (tt(), at("li", {
                key: `res-${H}`
              }, Si(P), 1))), 128))
            ])) : (tt(), at("div", w9, "No resolutions returned."))
          ])
        ])) : Cu("", !0)
      ]);
    };
  }
});
const $9 = /* @__PURE__ */ Ee(g9, [["__scopeId", "data-v-8418d0e3"]]), y9 = window.Vue.openBlock, b9 = window.Vue.createElementBlock, C9 = window.Vue.createElementVNode;
var V9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const E9 = {}, S9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, k9 = /* @__PURE__ */ C9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), I9 = [
  k9
];
function A9(e, o) {
  return y9(), b9("svg", S9, I9);
}
var Rs = /* @__PURE__ */ V9(E9, [["render", A9]]);
const _0 = window.Vue.defineComponent, Sf = window.Vue.ref, T9 = window.Vue.toRef, kf = window.Vue.inject, z_ = window.Vue.watch, x9 = window.Vue.nextTick, q_ = window.Vue.openBlock, G_ = window.Vue.createElementBlock, If = window.Vue.createElementVNode, L9 = window.Vue.normalizeClass, Y_ = window.Vue.renderSlot, j_ = window.Vue.createCommentVNode, Af = window.Vue.provide;
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
    const r = Sf(), s = Sf(!1), a = Sf(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = T9(e, "modelValue"), f = kf("queueSnackbar", !1), m = kf("unqueueSnackbar", !1), v = kf("nextSnackbar", () => {
    }), g = (F, M) => {
      let S, T, x = M;
      const U = () => {
        !S || (Oi(S), S = 0, x -= Date.now() - T);
      }, A = () => {
        S || (T = Date.now(), S = Di(F, x));
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
    return z_(c, (F) => {
      F ? x9(() => {
        f === !1 ? a.value = F : f(u, a);
      }) : m === !1 ? a.value = F : m(u);
    }, { immediate: !0 }), z_(a, (F) => {
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
    If("div", {
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
      If("div", R9, [
        e.contentShow ? (q_(), G_("div", P9, [
          Y_(e.$slots, "default", {}, void 0, !0)
        ])) : j_("", !0)
      ]),
      If("div", F9, [
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
const H9 = window.Vue.defineComponent, Je = window.Vue.unref, Ut = window.Vue.createVNode, al = window.Vue.createElementVNode, hn = window.Vue.withCtx, ki = window.Vue.openBlock, Tf = window.Vue.createBlock, Z_ = window.Vue.createCommentVNode, fl = window.Vue.createTextVNode, Vu = window.Vue.createElementBlock, K_ = window.Vue.toDisplayString, z9 = window.Vue.pushScopeId, q9 = window.Vue.popScopeId, Ch = (e) => (z9("data-v-9209a241"), e = e(), q9(), e), G9 = { id: "cont" }, Y9 = { class: "btns-navigation" }, j9 = /* @__PURE__ */ Ch(() => /* @__PURE__ */ al("span", null, "Situation List", -1)), Z9 = /* @__PURE__ */ Ch(() => /* @__PURE__ */ al("span", null, "Show Previous Situation ", -1)), K9 = /* @__PURE__ */ Ch(() => /* @__PURE__ */ al("span", null, "Show Next Situation", -1)), J9 = { key: 1 }, X9 = {
  key: 0,
  class: "detail"
}, Q9 = /* @__PURE__ */ fl("Details"), eW = /* @__PURE__ */ fl("Metrics"), tW = /* @__PURE__ */ fl("AI Suggestions"), nW = {
  key: 1,
  class: "noSituation"
}, oW = /* @__PURE__ */ fl("dismiss"), Ii = window.Vue.ref, J_ = window.Vue.watch, rW = window.Vue.onMounted, iW = window.VueRouter.useRoute, sW = /* @__PURE__ */ H9({
  __name: "SituationDetail",
  setup(e) {
    const o = Zr(), r = iW(), s = parseInt(r.params.id), a = Ii(s), u = wo(), c = dc(), f = Ii(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const m = Ii(), v = Ii(), g = Ii(!0), y = Ii(
      u.filteredSituations.findIndex((M) => M === a.value)
    ), b = Ii(!1);
    J_(
      () => u.situationDetail,
      () => {
        m.value = u.situationDetail, g.value = !1, u.getUnassignedAlarms();
      }
    ), rW(() => {
      var S;
      const M = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = M - 90;
    });
    const B = () => {
      o.push({
        name: "situations"
      });
    }, N = (M) => {
      const S = y.value, T = u.filteredSituations[S + M];
      o.push({
        name: "situationDetail",
        params: {
          id: T
        }
      });
    };
    J_(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((M) => M == a.value);
    }), c.$subscribe((M, S) => {
      b.value = S.showError;
    });
    const F = (M) => {
      f.value = M || 0;
    };
    return (M, S) => (ki(), Vu("div", G9, [
      al("div", Y9, [
        Ut(Je(ve), {
          primary: "",
          onClick: S[0] || (S[0] = () => B())
        }, {
          default: hn(() => [
            Ut(Je(X), {
              icon: Je(Rs),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            j9
          ]),
          _: 1
        }),
        al("div", null, [
          Ut(Je(ve), {
            disabled: !Je(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => N(-1))
          }, {
            default: hn(() => [
              Ut(Je(X), {
                icon: Je(Rs),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              Z9
            ]),
            _: 1
          }, 8, ["disabled"]),
          Ut(Je(ve), {
            disabled: !Je(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => N(1))
          }, {
            default: hn(() => [
              K9,
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
      g.value ? (ki(), Tf(Je(Ds), {
        key: 0,
        class: "spinner"
      })) : (ki(), Vu("div", J9, [
        m.value ? (ki(), Vu("div", X9, [
          Ut(Je(R1), { "onUpdate:modelValue": F }, {
            tabs: hn(() => [
              Ut(Je(Os), null, {
                default: hn(() => [
                  Q9
                ]),
                _: 1
              }),
              Ut(Je(Os), null, {
                default: hn(() => [
                  eW
                ]),
                _: 1
              }),
              Ut(Je(Os), { "data-test": "ai-suggestions-tab" }, {
                default: hn(() => [
                  tW
                ]),
                _: 1
              })
            ]),
            default: hn(() => [
              Ut(Je(Bs), { class: "panel" }, {
                default: hn(() => [
                  Ut(V6, { "situation-info": m.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Ut(Je(Bs), { class: "panel" }, {
                default: hn(() => [
                  v.value && f.value == 1 ? (ki(), Tf(yU, {
                    key: 0,
                    situation: m.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Z_("", !0)
                ]),
                _: 1
              }),
              Ut(Je(Bs), { class: "panel" }, {
                default: hn(() => [
                  f.value == 2 ? (ki(), Tf($9, {
                    key: 0,
                    "situation-id": m.value.id
                  }, null, 8, ["situation-id"])) : Z_("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (ki(), Vu("div", nW, " Error. The situation " + K_(Je(s)) + " does not exist. ", 1))
      ])),
      Ut(Je(pc), {
        modelValue: b.value,
        "onUpdate:modelValue": S[4] || (S[4] = (T) => b.value = T),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: hn(() => [
          Ut(Je(ve), {
            onClick: S[3] || (S[3] = (T) => b.value = !1),
            text: ""
          }, {
            default: hn(() => [
              oW
            ]),
            _: 1
          })
        ]),
        default: hn(() => [
          fl(K_(Je(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const aW = /* @__PURE__ */ Ee(sW, [["__scopeId", "data-v-9209a241"]]), lW = window.Vue.defineComponent, kt = window.Vue.unref, zn = window.Vue.createVNode, nn = window.Vue.createElementVNode, Es = window.Vue.withCtx, Ss = window.Vue.openBlock, qa = window.Vue.createElementBlock, uW = window.Vue.createCommentVNode, cW = window.Vue.toDisplayString, Vh = window.Vue.createTextVNode, dW = window.Vue.normalizeClass, fW = window.Vue.renderList, hW = window.Vue.Fragment, pW = window.Vue.createBlock, mW = window.Vue.pushScopeId, wW = window.Vue.popScopeId, hl = (e) => (mW("data-v-00de2cfc"), e = e(), wW(), e), vW = { class: "container" }, _W = /* @__PURE__ */ hl(() => /* @__PURE__ */ nn("span", null, "Situation List", -1)), gW = /* @__PURE__ */ hl(() => /* @__PURE__ */ nn("h2", null, "New Situation", -1)), $W = { class: "form" }, yW = { class: "fields" }, bW = {
  key: 0,
  class: "errorList"
}, CW = { class: "footer" }, VW = /* @__PURE__ */ hl(() => /* @__PURE__ */ nn("span", null, "Clear", -1)), EW = /* @__PURE__ */ hl(() => /* @__PURE__ */ nn("span", null, "Add Situation", -1)), SW = { class: "alarm-column" }, kW = { class: "header-alarms" }, IW = /* @__PURE__ */ hl(() => /* @__PURE__ */ nn("h3", null, "Add Unassociated Alarms", -1)), AW = /* @__PURE__ */ Vh(" Total Alarms Added: "), TW = { class: "total" }, xW = { class: "list" }, LW = { class: "filters" }, MW = {
  key: 0,
  class: "alarms"
}, NW = /* @__PURE__ */ Vh(" Error on creating new situation :( "), DW = /* @__PURE__ */ Vh("dismiss"), Pr = window.Vue.ref, OW = window.Vue.watch, BW = /* @__PURE__ */ lW({
  __name: "AddSituation",
  setup(e) {
    const o = Zr(), r = wo(), s = Pr(), a = Pr(""), u = Pr(), c = Pr(""), f = Pr([]), m = Pr(!1), v = Pr(), g = Pr(r.unassignedAlarms);
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
      m.value = !1, Be.exports.includes(f.value, S) ? Be.exports.remove(f.value, (T) => T === S) : f.value.push(S);
    }, B = () => {
      const S = "This field should not be empty";
      let T = !0;
      return s.value || (a.value = S, T = !1), u.value || (c.value = S, T = !1), f.value.length < 2 && (m.value = !0, T = !1), T;
    }, N = async () => {
      if (B()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await DT(S) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, F = () => {
      s.value = "", u.value = "", f.value = [], g.value = r.unassignedAlarms;
    }, M = (S) => {
      g.value = S;
    };
    return (S, T) => (Ss(), qa("div", vW, [
      zn(kt(ve), {
        primary: "",
        onClick: T[0] || (T[0] = () => y()),
        class: "back-btn"
      }, {
        default: Es(() => [
          zn(kt(X), {
            icon: kt(Rs),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          _W
        ]),
        _: 1
      }),
      gW,
      nn("div", $W, [
        nn("div", yW, [
          zn(kt(zu), {
            modelValue: s.value,
            "onUpdate:modelValue": T[1] || (T[1] = (x) => s.value = x),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          zn(kt(zu), {
            modelValue: u.value,
            "onUpdate:modelValue": T[2] || (T[2] = (x) => u.value = x),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          m.value ? (Ss(), qa("div", bW, " You must add at least 2 alarms. ")) : uW("", !0),
          nn("div", CW, [
            zn(kt(ve), {
              class: "btn",
              onClick: F
            }, {
              default: Es(() => [
                zn(kt(X), {
                  icon: kt(qs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                VW
              ]),
              _: 1
            }),
            zn(kt(ve), {
              class: "btn-add",
              onClick: N
            }, {
              default: Es(() => [
                zn(kt(X), {
                  icon: kt(cc),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                EW
              ]),
              _: 1
            })
          ])
        ]),
        nn("div", SW, [
          nn("div", kW, [
            IW,
            nn("div", null, [
              nn("div", {
                class: dW(["totalAlarms", { errorList: m.value }])
              }, [
                AW,
                nn("span", TW, cW(kt(f).length), 1)
              ], 2)
            ])
          ]),
          nn("div", xW, [
            nn("div", LW, [
              zn(Qs, {
                list: kt(r).unassignedAlarms,
                onFilteredList: M,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            g.value.length ? (Ss(), qa("div", MW, [
              (Ss(!0), qa(hW, null, fW(g.value, (x) => (Ss(), qa("div", {
                key: x.id,
                class: "alarm-card"
              }, [
                zn(bh, {
                  selected: kt(Be.exports.includes)(kt(f), x.id),
                  alarm: x,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ss(), pW(ea, { key: 1 }))
          ])
        ])
      ]),
      zn(kt(pc), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (x) => v.value = x),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Es(() => [
          zn(kt(ve), {
            onClick: T[3] || (T[3] = (x) => v.value = !1),
            text: ""
          }, {
            default: Es(() => [
              DW
            ]),
            _: 1
          })
        ]),
        default: Es(() => [
          NW
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const RW = /* @__PURE__ */ Ee(BW, [["__scopeId", "data-v-00de2cfc"]]), PW = window.Vue.defineComponent, FW = window.Vue.createElementVNode, UW = window.Vue.createTextVNode, WW = window.Vue.unref, HW = window.Vue.withCtx, zW = window.Vue.createVNode, qW = window.Vue.Fragment, GW = window.Vue.openBlock, YW = window.Vue.createElementBlock, jW = window.Vue.pushScopeId, ZW = window.Vue.popScopeId, KW = (e) => (jW("data-v-bcb7dcc6"), e = e(), ZW(), e), JW = /* @__PURE__ */ KW(() => /* @__PURE__ */ FW("div", { class: "main" }, "Something bad is happening...", -1)), XW = /* @__PURE__ */ UW(" Reload "), QW = /* @__PURE__ */ PW({
  __name: "ErrorPage",
  setup(e) {
    const o = Zr(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (GW(), YW(qW, null, [
      JW,
      zW(WW(ve), {
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
const eH = /* @__PURE__ */ Ee(QW, [["__scopeId", "data-v-bcb7dcc6"]]), tH = window.Vue.defineComponent, Qt = window.Vue.unref, ho = window.Vue.createVNode, Hr = window.Vue.createElementVNode, Ga = window.Vue.withCtx, Ai = window.Vue.openBlock, X_ = window.Vue.createBlock, nH = window.Vue.renderList, oH = window.Vue.Fragment, Ya = window.Vue.createElementBlock, rH = window.Vue.toDisplayString, g0 = window.Vue.createTextVNode, iH = window.Vue.pushScopeId, sH = window.Vue.popScopeId, Eh = (e) => (iH("data-v-fbf68b2e"), e = e(), sH(), e), aH = { class: "container" }, lH = { class: "nav-btns" }, uH = /* @__PURE__ */ Eh(() => /* @__PURE__ */ Hr("span", null, "Situation List", -1)), cH = /* @__PURE__ */ Eh(() => /* @__PURE__ */ Hr("h2", null, "List Unassociated Alarms", -1)), dH = { class: "content" }, fH = { class: "filters" }, hH = { class: "list" }, pH = { class: "action-btns" }, mH = /* @__PURE__ */ Eh(() => /* @__PURE__ */ Hr("span", null, "Move", -1)), wH = { key: 1 }, vH = {
  key: 0,
  class: "alarms"
}, _H = /* @__PURE__ */ g0("dismiss"), Fr = window.Vue.ref, gH = window.Vue.watch, $H = window.Vue.markRaw, yH = /* @__PURE__ */ tH({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = $H({
      ArrowBack: Rs,
      ExitToApp: Yf
    }), r = Zr(), s = wo();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Fr([]), u = Fr([]), c = Fr(!1), f = Fr(!1), m = Fr(""), v = Fr(!1), g = Fr(!1), y = Fr(!0);
    gH(
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
      await jg(T, u.value) ? s.getUnassignedAlarms() : (v.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, F = () => {
      r.push({
        name: "situations"
      });
    }, M = () => {
      u.value.length ? f.value = !0 : (v.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    }, S = (T) => {
      a.value = T;
    };
    return (T, x) => (Ai(), Ya("div", aH, [
      Hr("div", lH, [
        ho(Qt(ve), {
          primary: "",
          onClick: x[0] || (x[0] = () => F())
        }, {
          default: Ga(() => [
            ho(Qt(X), {
              icon: Qt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            uH
          ]),
          _: 1
        }),
        ho(E1)
      ]),
      cH,
      Hr("div", dH, [
        Hr("div", fH, [
          ho(Qs, {
            list: Qt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Hr("div", hH, [
          Hr("div", pH, [
            ho(Qt(Ni), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                x[1] || (x[1] = (U) => c.value = U),
                B
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            ho(Qt(ve), { onClick: M }, {
              default: Ga(() => [
                ho(Qt(X), {
                  icon: Qt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                mH
              ]),
              _: 1
            })
          ]),
          y.value ? (Ai(), X_(Qt(Ds), {
            key: 0,
            class: "spinner"
          })) : (Ai(), Ya("div", wH, [
            Qt(a).length ? (Ai(), Ya("div", vH, [
              (Ai(!0), Ya(oH, null, nH(Qt(a), (U) => (Ai(), Ya("div", {
                key: U.id,
                class: "card"
              }, [
                ho(bh, {
                  selected: Qt(Be.exports.includes)(Qt(u), U.id),
                  alarm: U,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Ai(), X_(ea, { key: 1 }))
          ]))
        ])
      ]),
      ho(l0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: N,
        onDrawerClosed: x[2] || (x[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      ho(Qt(pc), {
        modelValue: v.value,
        "onUpdate:modelValue": x[4] || (x[4] = (U) => v.value = U),
        right: "",
        error: g.value,
        timeout: 6e3
      }, {
        button: Ga(() => [
          ho(Qt(ve), {
            onClick: x[3] || (x[3] = (U) => v.value = !1),
            text: ""
          }, {
            default: Ga(() => [
              _H
            ]),
            _: 1
          })
        ]),
        default: Ga(() => [
          g0(rH(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const bH = /* @__PURE__ */ Ee(yH, [["__scopeId", "data-v-fbf68b2e"]]), CH = window.Vue.defineComponent, xf = window.Vue.unref, VH = window.Vue.createVNode, EH = window.Vue.createElementVNode, SH = window.Vue.withCtx, kH = window.Vue.openBlock, IH = window.Vue.createBlock, AH = window.Vue.pushScopeId, TH = window.Vue.popScopeId, xH = (e) => (AH("data-v-17251e76"), e = e(), TH(), e), LH = /* @__PURE__ */ xH(() => /* @__PURE__ */ EH("span", null, "Situation List", -1)), MH = window.Vue.markRaw, NH = /* @__PURE__ */ CH({
  __name: "SituationListBtn",
  setup(e) {
    const o = Zr(), r = MH({
      ArrowBack: Rs
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (kH(), IH(xf(ve), {
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
const DH = /* @__PURE__ */ Ee(NH, [["__scopeId", "data-v-17251e76"]]);
var OH = Object.defineProperty, BH = Object.defineProperties, RH = Object.getOwnPropertyDescriptors, Q_ = Object.getOwnPropertySymbols, PH = Object.prototype.hasOwnProperty, FH = Object.prototype.propertyIsEnumerable, eg = (e, o, r) => o in e ? OH(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ls = (e, o) => {
  for (var r in o || (o = {}))
    PH.call(o, r) && eg(e, r, o[r]);
  if (Q_)
    for (var r of Q_(o))
      FH.call(o, r) && eg(e, r, o[r]);
  return e;
}, UH = (e, o) => BH(e, RH(o));
const WH = window.Vue.defineComponent, tg = window.Vue.toRef, HH = window.Vue.computed, zH = window.Vue.ref, ng = window.Vue.resolveComponent, og = window.Vue.openBlock, rg = window.Vue.createElementBlock, ig = window.Vue.mergeProps, sg = window.Vue.createVNode, qH = window.Vue.normalizeClass, Eu = window.Vue.withCtx, ag = window.Vue.renderSlot, GH = window.Vue.createElementVNode, YH = window.Vue.toHandlers, jH = window.Vue.toDisplayString, ZH = window.Vue.createCommentVNode, KH = Ls(Ls({
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
}, nc), Ks), JH = {
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
    Js(e), oc(e);
    const r = tg(e, "id"), s = HH(() => r.value ? r.value : be("feather-input-label")), a = zH(), { validate: u } = js(s, a, e.label, e.schema, tg(e, "error"));
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), UH(Ls(Ls({}, e), this.listeners), {
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
      pre: Eu(() => [
        ag(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Eu(() => [
        ag(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Eu(() => [
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
      right: Eu(() => [
        e.maxlength ? (og(), rg("div", tz, jH(e.charCount), 1)) : ZH("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var xo = /* @__PURE__ */ XH(QH, [["render", nz], ["__scopeId", "data-v-bf37b0d6"]]);
const oz = window.Vue.openBlock, rz = window.Vue.createElementBlock, Sh = window.Vue.createElementVNode;
var iz = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const sz = {}, az = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, lz = /* @__PURE__ */ Sh("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), uz = /* @__PURE__ */ Sh("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), cz = /* @__PURE__ */ Sh("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), dz = [
  lz,
  uz,
  cz
];
function fz(e, o) {
  return oz(), rz("svg", az, dz);
}
var hz = /* @__PURE__ */ iz(sz, [["render", fz]]);
const pz = window.Vue.openBlock, mz = window.Vue.createElementBlock, $0 = window.Vue.createElementVNode;
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
  return pz(), mz("svg", _z, yz);
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
}, Sz = window.Vue.defineComponent, se = window.Vue.createVNode, I = window.Vue.createElementVNode, Q = window.Vue.createTextVNode, W = window.Vue.unref, nt = window.Vue.withCtx, qe = window.Vue.openBlock, ot = window.Vue.createElementBlock, It = window.Vue.createCommentVNode, je = window.Vue.toDisplayString, ja = window.Vue.Fragment, Lf = window.Vue.createBlock, lg = window.Vue.renderList, kz = window.Vue.normalizeClass, Iz = window.Vue.pushScopeId, Az = window.Vue.popScopeId, _e = (e) => (Iz("data-v-857b932d"), e = e(), Az(), e), Tz = { class: "container" }, xz = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), Lz = /* @__PURE__ */ Q("Correlation Engine"), Mz = /* @__PURE__ */ Q("LLM Root Cause Analysis"), Nz = /* @__PURE__ */ Q("LLM Setup"), Dz = { class: "section" }, Oz = { class: "title-row" }, Bz = { class: "title" }, Rz = /* @__PURE__ */ Q(" Choose the correlation engine that ALEC will use (see "), Pz = ["href"], Fz = /* @__PURE__ */ Q(" for more information): "), Uz = ["aria-expanded"], Wz = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, Hz = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("ul", null, [
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
], -1)), zz = [
  Hz
], qz = /* @__PURE__ */ Q("Clustering"), Gz = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "hellinger" }, [
  /* @__PURE__ */ I("strong", null, "Hellinger distance")
], -1)), Yz = /* @__PURE__ */ Q(" LLM Based "), jz = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), Zz = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, Kz = { class: "title-row" }, Jz = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "title" }, "Correlation variables", -1)), Xz = ["aria-expanded"], Qz = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, eq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Alpha (\u03B1)", -1)), tq = /* @__PURE__ */ Q(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), nq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Beta (\u03B2)", -1)), oq = /* @__PURE__ */ Q(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), rq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("code", null, "[0, 1]", -1)), iq = /* @__PURE__ */ Q(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), sq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Epsilon (\u03B5)", -1)), aq = /* @__PURE__ */ Q(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), lq = { "data-test": "help-hellinger-w" }, uq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Hellinger w", -1)), cq = /* @__PURE__ */ Q(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), dq = { "data-test": "help-hellinger-bias" }, fq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "Hellinger bias", -1)), hq = /* @__PURE__ */ Q(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), pq = { class: "variables" }, mq = {
  class: "section",
  "data-test": "llm-section"
}, wq = { class: "title-row" }, vq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "title" }, "LLM Root Cause Analysis", -1)), _q = ["aria-expanded"], gq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-help" }, [
  /* @__PURE__ */ Q(" ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM), shown on each situation's "),
  /* @__PURE__ */ I("em", null, "AI Suggestions"),
  /* @__PURE__ */ Q(" tab. It uses the LLM configured on the "),
  /* @__PURE__ */ I("em", null, "LLM Setup"),
  /* @__PURE__ */ Q(" tab. ")
], -1)), $q = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, yq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("p", { class: "help-intro" }, [
  /* @__PURE__ */ Q(" When enabled, ALEC sends each new situation's alarms to the configured LLM and shows up to three probable root causes and resolutions on the situation's "),
  /* @__PURE__ */ I("em", null, "AI Suggestions"),
  /* @__PURE__ */ Q(" tab. ")
], -1)), bq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("ul", null, [
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
], -1)), Cq = [
  yq,
  bq
], Vq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "LLM Enabled Root Cause Analysis", -1)), Eq = /* @__PURE__ */ Q(" Automatically AI Evaluate new situations "), Sq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, kq = /* @__PURE__ */ Q(" No valid LLM is configured. Go to the "), Iq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("strong", null, "LLM Setup", -1)), Aq = /* @__PURE__ */ Q(" tab and set an endpoint, model and API key first. "), Tq = [
  kq,
  Iq,
  Aq
], xq = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, Lq = { class: "llm-prompt-header" }, Mq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-prompt-label" }, "System prompt", -1)), Nq = ["disabled"], Dq = /* @__PURE__ */ Q(" Reset to default "), Oq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), Bq = {
  class: "section",
  "data-test": "llm-setup-section"
}, Rq = { class: "title-row" }, Pq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "title" }, "LLM Setup", -1)), Fq = ["aria-expanded"], Uq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-help" }, " Configure the LLM connection shared by ALEC's LLM features (root cause analysis and, later, LLM-based clustering). ALEC works with any OpenAI-compatible, API-enabled LLM \u2014 commercial or locally hosted \u2014 and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), Wq = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-setup-help-popover"
}, Hq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("ul", null, [
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
], -1)), zq = [
  Hq
], qq = { class: "llm-field-block" }, Gq = { class: "llm-field-header" }, Yq = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), jq = { class: "llm-field-actions" }, Zq = ["disabled"], Kq = /* @__PURE__ */ Q(" Reset to default "), Jq = ["disabled"], Xq = /* @__PURE__ */ Q(" Set as default "), Qq = { class: "llm-combo" }, eG = ["aria-expanded"], tG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, nG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("li", { class: "llm-combo-hint" }, "Common providers \u2014 or type your own", -1)), oG = ["onClick"], rG = { class: "llm-combo-item-main" }, iG = { class: "llm-combo-item-sub" }, sG = { class: "llm-field-block" }, aG = { class: "llm-field-header" }, lG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-field-label" }, "Model", -1)), uG = { class: "llm-field-actions" }, cG = ["disabled"], dG = /* @__PURE__ */ Q(" Reset to default "), fG = ["disabled"], hG = /* @__PURE__ */ Q(" Set as default "), pG = { class: "llm-combo" }, mG = ["aria-expanded"], wG = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, vG = { class: "llm-combo-hint" }, _G = ["onClick"], gG = { class: "llm-combo-item-main" }, $G = {
  key: 1,
  class: "llm-combo-hint"
}, yG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", {
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
], -1)), bG = { class: "llm-key-row" }, CG = /* @__PURE__ */ Q(" Clear Key "), VG = { class: "llm-validate-row" }, EG = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, SG = {
  key: 1,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, kG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), IG = {
  key: 2,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, AG = {
  class: "llm-field-block llm-limits",
  "data-test": "llm-token-limits"
}, TG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", { class: "llm-field-label" }, "Token budget (0 = no limit)", -1)), xG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("div", { class: "llm-prompt-help" }, " Caps total LLM tokens ALEC may consume. When a limit is reached, ALEC stops sending LLM requests until the day/month resets and warns on the main page. ", -1)), LG = { class: "variables" }, MG = {
  key: 3,
  class: "llm-usage",
  "data-test": "llm-usage"
}, NG = { class: "usage-summary" }, DG = { class: "usage-label" }, OG = ["title"], BG = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, RG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Input", -1)), PG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Output", -1)), FG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Cache read", -1)), UG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Cache create", -1)), WG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Calls", -1)), HG = { class: "muted" }, zG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("dt", null, "Cache hit", -1)), qG = { class: "action-row" }, GG = /* @__PURE__ */ Q(" Close All Open Situations "), YG = /* @__PURE__ */ Q(" Re-Evaluate All Open Alarms "), jG = /* @__PURE__ */ _e(() => /* @__PURE__ */ I("span", null, "Save Changes", -1)), ZG = /* @__PURE__ */ Q("dismiss"), qn = window.Vue.computed, KG = window.Vue.markRaw, JG = window.Vue.onMounted, XG = window.Vue.onUnmounted, Ve = window.Vue.ref, QG = /* @__PURE__ */ Sz({
  __name: "AccountSettings",
  setup(e) {
    var eo, Uo, Wo, Ho, go, $o, gn, Vt, wr, Jr, Xr, zo, vr, qo, Go, Gt, to, Yo, _r, Fi, Qr, yo, ei, bo, Ui, Co, Wi, Hi, Re, no, zi, ti, jo;
    const o = (pe) => pe >= 1e6 ? (pe / 1e6).toFixed(1) + "M" : pe >= 1e3 ? (pe / 1e3).toFixed(1) + "K" : String(pe), r = KG({
      MarkComplete: Hu,
      Help: hz,
      Restore: Cz,
      ExpandMore: cl
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Bi(), u = Ve(((eo = a.engineInfo) == null ? void 0 : eo.engineName) || xt.ENGINE_DBSCAN), c = Ve(
      a.engineInfo ? a.engineInfo.distanceMeasureName === xt.HELLINGER_OPTION : !0
    ), f = Ve((Wo = (Uo = a.engineInfo) == null ? void 0 : Uo.alpha) != null ? Wo : s.alpha), m = Ve((go = (Ho = a.engineInfo) == null ? void 0 : Ho.beta) != null ? go : s.beta), v = Ve((gn = ($o = a.engineInfo) == null ? void 0 : $o.epsilon) != null ? gn : s.epsilon), g = Ve(
      (wr = (Vt = a.engineInfo) == null ? void 0 : Vt.hellingerW) != null ? wr : s.hellingerW
    ), y = Ve(
      (Xr = (Jr = a.engineInfo) == null ? void 0 : Jr.hellingerBias) != null ? Xr : s.hellingerBias
    ), b = qn(() => u.value === xt.ENGINE_DBSCAN), B = qn(() => b.value && c.value), N = Ve((vr = (zo = a.llmConfig) == null ? void 0 : zo.enabled) != null ? vr : !1), F = Ve((Go = (qo = a.llmConfig) == null ? void 0 : qo.autoEvaluate) != null ? Go : !0), M = Ve((to = (Gt = a.llmConfig) == null ? void 0 : Gt.baseUrl) != null ? to : ""), S = Ve((_r = (Yo = a.llmConfig) == null ? void 0 : Yo.model) != null ? _r : ""), T = Ve((Qr = (Fi = a.llmConfig) == null ? void 0 : Fi.defaultBaseUrl) != null ? Qr : ""), x = Ve((ei = (yo = a.llmConfig) == null ? void 0 : yo.defaultModel) != null ? ei : ""), U = Ve((Ui = (bo = a.llmConfig) == null ? void 0 : bo.dailyTokenLimit) != null ? Ui : 0), A = Ve((Wi = (Co = a.llmConfig) == null ? void 0 : Co.monthlyTokenLimit) != null ? Wi : 0), P = Ve((Re = (Hi = a.llmConfig) == null ? void 0 : Hi.systemPrompt) != null ? Re : ""), H = Ve((zi = (no = a.llmConfig) == null ? void 0 : no.defaultSystemPrompt) != null ? zi : ""), K = qn(
      () => H.value.length > 0 && P.value.trim() !== H.value.trim()
    ), Me = () => {
      P.value = H.value;
    }, he = qn(
      () => T.value.trim().length > 0 && M.value.trim() !== T.value.trim()
    ), Ae = qn(
      () => x.value.trim().length > 0 && S.value.trim() !== x.value.trim()
    ), Se = qn(
      () => M.value.trim().length > 0 && M.value.trim() !== T.value.trim()
    ), He = qn(
      () => S.value.trim().length > 0 && S.value.trim() !== x.value.trim()
    ), Ge = () => {
      M.value = T.value;
    }, $e = () => {
      S.value = x.value;
    }, Ze = () => {
      T.value = M.value.trim();
    }, Xe = () => {
      x.value = S.value.trim();
    }, ct = Vz(), on = Ve(!1), _n = Ve(!1), Ce = qn(() => Ez(M.value)), oa = qn(() => b0(M.value)), ra = (pe) => {
      M.value = pe, on.value = !1;
    }, ia = (pe) => {
      S.value = pe, _n.value = !1;
    }, Kn = (pe) => {
      const Y = pe.target;
      (!Y || !Y.closest(".llm-combo")) && (on.value = !1, _n.value = !1);
    }, zt = Ve(""), Mn = Ve((jo = (ti = a.llmConfig) == null ? void 0 : ti.apiKeyPresent) != null ? jo : !1), dt = Ve(!1), Nn = Ve(!1), Jn = Ve(null), Ne = qn(
      () => zt.value.trim().length === 0 && (!Mn.value || dt.value)
    ), vo = async () => {
      Jn.value = null, Nn.value = !0;
      try {
        const pe = {
          enabled: N.value,
          autoEvaluate: F.value,
          baseUrl: M.value.trim(),
          model: S.value.trim()
        }, Y = zt.value.trim();
        Y.length > 0 && (pe.apiKey = Y), Jn.value = await LT(pe);
      } finally {
        Nn.value = !1;
      }
    }, Fe = qn(
      () => (!Mn.value || dt.value) && zt.value.trim().length === 0
    ), vt = qn(
      () => Fe.value || M.value.trim().length === 0 || S.value.trim().length === 0
    ), Te = () => {
      zt.value = "", dt.value = !0, Mn.value = !1, N.value = !1;
    }, Dn = Ve(!1), bt = Ve(!1), Ot = Ve(!1), Po = Ve(!1), rn = Ve(!1), Ct = Ve(!1), Xn = Ve(""), _t = Ve(!1);
    JG(async () => {
      var pe, Y;
      if (document.addEventListener("mousedown", Kn), a.llmConfig === null) {
        const te = await a.getLLMConfig();
        te && (N.value = te.enabled, F.value = te.autoEvaluate, M.value = te.baseUrl || "", S.value = te.model || "", T.value = te.defaultBaseUrl || "", x.value = te.defaultModel || "", U.value = (pe = te.dailyTokenLimit) != null ? pe : 0, A.value = (Y = te.monthlyTokenLimit) != null ? Y : 0, H.value = te.defaultSystemPrompt || "", P.value = te.systemPrompt || te.defaultSystemPrompt || "", Mn.value = te.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), XG(() => {
      document.removeEventListener("mousedown", Kn);
    });
    const Fo = () => {
      f.value = s.alpha, m.value = s.beta, v.value = s.epsilon, g.value = s.hellingerW, y.value = s.hellingerBias;
    }, ft = (pe, Y) => {
      Xn.value = pe, Ct.value = Y, rn.value = !0;
    }, Kr = () => {
      if (dt.value)
        return {
          enabled: !1,
          autoEvaluate: F.value,
          baseUrl: M.value.trim(),
          model: S.value.trim(),
          defaultBaseUrl: T.value.trim(),
          defaultModel: x.value.trim(),
          systemPrompt: P.value,
          dailyTokenLimit: Math.max(0, Number(U.value) || 0),
          monthlyTokenLimit: Math.max(0, Number(A.value) || 0),
          clearApiKey: !0
        };
      const pe = zt.value.trim(), Y = {
        enabled: N.value,
        autoEvaluate: F.value,
        baseUrl: M.value.trim(),
        model: S.value.trim(),
        defaultBaseUrl: T.value.trim(),
        defaultModel: x.value.trim(),
        systemPrompt: P.value,
        dailyTokenLimit: Math.max(0, Number(U.value) || 0),
        monthlyTokenLimit: Math.max(0, Number(A.value) || 0)
      };
      return pe.length > 0 && (Y.apiKey = pe), Y;
    }, Qn = async () => {
      var qi, Bt, ni, Yt, Gi, Yi, oi, gr, Vo, Ko, Jo, oo, Eo, sn, ri, ii, $r, Xo, ji, yr, Qo;
      const pe = N.value && !dt.value, Y = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        M.value
      );
      if (pe && !Y && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${M.value.trim()}, model ${S.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

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
      ), Zo = await a.setLLMConfig(Kr());
      Zo && (zt.value = "", dt.value = !1, Mn.value = (Bt = (qi = a.llmConfig) == null ? void 0 : qi.apiKeyPresent) != null ? Bt : !1, N.value = (Yt = (ni = a.llmConfig) == null ? void 0 : ni.enabled) != null ? Yt : !1, F.value = (Yi = (Gi = a.llmConfig) == null ? void 0 : Gi.autoEvaluate) != null ? Yi : !0, M.value = (gr = (oi = a.llmConfig) == null ? void 0 : oi.baseUrl) != null ? gr : "", S.value = (Ko = (Vo = a.llmConfig) == null ? void 0 : Vo.model) != null ? Ko : "", T.value = (oo = (Jo = a.llmConfig) == null ? void 0 : Jo.defaultBaseUrl) != null ? oo : "", x.value = (sn = (Eo = a.llmConfig) == null ? void 0 : Eo.defaultModel) != null ? sn : "", U.value = (ii = (ri = a.llmConfig) == null ? void 0 : ri.dailyTokenLimit) != null ? ii : 0, A.value = (Xo = ($r = a.llmConfig) == null ? void 0 : $r.monthlyTokenLimit) != null ? Xo : 0, (ji = a.llmConfig) != null && ji.defaultSystemPrompt && (H.value = a.llmConfig.defaultSystemPrompt), P.value = (Qo = (yr = a.llmConfig) == null ? void 0 : yr.systemPrompt) != null ? Qo : P.value, a.getLLMUsage(30)), xe && Zo ? (a.getEngineInfo(), ft("The settings were saved!", !1)) : ft(
        xe && !Zo ? "Engine settings saved, but LLM configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, qt = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const pe = await OT();
      ft(
        pe ? "All open situations were closed." : "Failed to close situations.",
        !pe
      );
    }, _o = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const pe = await BT();
      ft(
        pe ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !pe
      );
    };
    return (pe, Y) => (qe(), ot(ja, null, [
      se(DH),
      I("div", Tz, [
        xz,
        se(W(R1), { "data-test": "config-tabs" }, {
          tabs: nt(() => [
            se(W(Os), { "data-test": "tab-engine" }, {
              default: nt(() => [
                Lz
              ]),
              _: 1
            }),
            se(W(Os), { "data-test": "tab-llm" }, {
              default: nt(() => [
                Mz
              ]),
              _: 1
            }),
            se(W(Os), { "data-test": "tab-llm-setup" }, {
              default: nt(() => [
                Nz
              ]),
              _: 1
            })
          ]),
          default: nt(() => [
            se(W(Bs), { class: "config-panel" }, {
              default: nt(() => [
                I("div", Dz, [
                  I("div", Oz, [
                    I("div", Bz, [
                      Rz,
                      I("a", {
                        target: "_blank",
                        href: W(xt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, Pz),
                      Fz
                    ]),
                    I("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": bt.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: Y[0] || (Y[0] = (te) => bt.value = !bt.value)
                    }, [
                      se(W(X), {
                        icon: W(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Uz)
                  ]),
                  bt.value ? (qe(), ot("div", Wz, zz)) : It("", !0),
                  se(W($1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": Y[2] || (Y[2] = (te) => u.value = te),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: nt(() => [
                      se(W(qf), {
                        class: "radio-item",
                        value: W(xt).ENGINE_DBSCAN
                      }, {
                        default: nt(() => [
                          qz
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      se(W(Ni), {
                        modelValue: c.value,
                        "onUpdate:modelValue": Y[1] || (Y[1] = (te) => c.value = te),
                        disabled: !W(b),
                        class: "checkbox"
                      }, {
                        default: nt(() => [
                          Gz
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      se(W(qf), {
                        class: "radio-item",
                        value: W(xt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: nt(() => [
                          Yz
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      jz
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                W(b) ? (qe(), ot("div", Zz, [
                  I("div", Kz, [
                    Jz,
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
                    ], 8, Xz),
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
                  Dn.value ? (qe(), ot("div", Qz, [
                    I("ul", null, [
                      I("li", null, [
                        eq,
                        tq,
                        I("em", null, "Default: " + je(s.alpha), 1)
                      ]),
                      I("li", null, [
                        nq,
                        oq,
                        rq,
                        iq,
                        I("em", null, "Default: " + je(s.beta), 1)
                      ]),
                      I("li", null, [
                        sq,
                        aq,
                        I("em", null, "Default: " + je(s.epsilon), 1)
                      ]),
                      W(B) ? (qe(), ot(ja, { key: 0 }, [
                        I("li", lq, [
                          uq,
                          cq,
                          I("em", null, "Default: " + je(s.hellingerW), 1)
                        ]),
                        I("li", dq, [
                          fq,
                          hq,
                          I("em", null, "Default: " + je(s.hellingerBias), 1)
                        ])
                      ], 64)) : It("", !0)
                    ])
                  ])) : It("", !0),
                  I("div", pq, [
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
                    }, null, 8, ["modelValue"])) : It("", !0),
                    W(B) ? (qe(), Lf(W(xo), {
                      key: 1,
                      modelValue: y.value,
                      "onUpdate:modelValue": Y[8] || (Y[8] = (te) => y.value = te),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : It("", !0)
                  ])
                ])) : It("", !0)
              ]),
              _: 1
            }),
            se(W(Bs), { class: "config-panel" }, {
              default: nt(() => [
                I("div", mq, [
                  I("div", wq, [
                    vq,
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
                    ], 8, _q)
                  ]),
                  gq,
                  Ot.value ? (qe(), ot("div", $q, Cq)) : It("", !0),
                  se(W(Ni), {
                    modelValue: N.value,
                    "onUpdate:modelValue": Y[10] || (Y[10] = (te) => N.value = te),
                    disabled: W(vt),
                    class: "checkbox",
                    "data-test": "llm-enabled"
                  }, {
                    default: nt(() => [
                      Vq
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"]),
                  se(W(Ni), {
                    modelValue: F.value,
                    "onUpdate:modelValue": Y[11] || (Y[11] = (te) => F.value = te),
                    disabled: !N.value,
                    class: "checkbox sub-checkbox",
                    "data-test": "llm-auto-evaluate"
                  }, {
                    default: nt(() => [
                      Eq
                    ]),
                    _: 1
                  }, 8, ["modelValue", "disabled"]),
                  W(vt) ? (qe(), ot("div", Sq, Tq)) : It("", !0),
                  I("div", xq, [
                    I("div", Lq, [
                      Mq,
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
                        Dq
                      ], 8, Nq)
                    ]),
                    Oq,
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
                  I("div", Bq, [
                    I("div", Rq, [
                      Pq,
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
                      ], 8, Fq)
                    ]),
                    Uq,
                    Po.value ? (qe(), ot("div", Wq, zq)) : It("", !0),
                    I("div", qq, [
                      I("div", Gq, [
                        Yq,
                        I("div", jq, [
                          I("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(he),
                            "data-test": "llm-base-url-reset",
                            onClick: Ge
                          }, [
                            se(W(X), {
                              icon: W(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Kq
                          ], 8, Zq),
                          I("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !W(Se),
                            "data-test": "llm-base-url-set-default",
                            onClick: Ze
                          }, [
                            se(W(X), {
                              icon: W(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Xq
                          ], 8, Jq)
                        ])
                      ]),
                      I("div", Qq, [
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
                        ], 8, eG),
                        on.value ? (qe(), ot("ul", tG, [
                          nG,
                          (qe(!0), ot(ja, null, lg(W(ct), (xe) => (qe(), ot("li", {
                            key: xe.baseUrl,
                            class: "llm-combo-item",
                            onClick: (Zo) => ra(xe.baseUrl)
                          }, [
                            I("span", rG, je(xe.name), 1),
                            I("span", iG, [
                              I("code", null, je(xe.baseUrl), 1),
                              Q(" \xB7 " + je(xe.keyHint), 1)
                            ])
                          ], 8, oG))), 128))
                        ])) : It("", !0)
                      ])
                    ]),
                    I("div", sG, [
                      I("div", aG, [
                        lG,
                        I("div", uG, [
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
                            dG
                          ], 8, cG),
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
                            hG
                          ], 8, fG)
                        ])
                      ]),
                      I("div", pG, [
                        se(W(xo), {
                          modelValue: S.value,
                          "onUpdate:modelValue": Y[16] || (Y[16] = (xe) => S.value = xe),
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
                        ], 8, mG),
                        _n.value ? (qe(), ot("ul", wG, [
                          W(Ce).length ? (qe(), ot(ja, { key: 0 }, [
                            I("li", vG, " Suggested for " + je((te = W(oa)) == null ? void 0 : te.name) + " \u2014 or type your own ", 1),
                            (qe(!0), ot(ja, null, lg(W(Ce), (xe) => (qe(), ot("li", {
                              key: xe.id,
                              class: "llm-combo-item",
                              onClick: (Zo) => ia(xe.id)
                            }, [
                              I("span", gG, [
                                I("code", null, je(xe.id), 1)
                              ])
                            ], 8, _G))), 128))
                          ], 64)) : (qe(), ot("li", $G, " No preset models for this endpoint \u2014 type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : It("", !0)
                      ])
                    ]),
                    yG,
                    I("div", bG, [
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
                          CG
                        ]),
                        _: 1
                      })) : It("", !0)
                    ]),
                    I("div", VG, [
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
                      W(Ne) ? (qe(), ot("span", EG, " Enter an API key to validate. ")) : Jn.value ? (qe(), ot("span", {
                        key: 1,
                        class: kz(["llm-validate-result", Jn.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        se(W(X), {
                          icon: Jn.value.ok ? W(r).MarkComplete : W(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        Q(" " + je(Jn.value.message), 1)
                      ], 2)) : It("", !0)
                    ]),
                    Mn.value && !dt.value ? (qe(), ot("div", SG, [
                      se(W(X), {
                        icon: W(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      kG
                    ])) : It("", !0),
                    dt.value ? (qe(), ot("div", IG, " Stored API key will be removed on save. ")) : It("", !0),
                    I("div", AG, [
                      TG,
                      xG,
                      I("div", LG, [
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
                    W(a).llmUsage ? (qe(), ot("div", MG, [
                      I("div", NG, [
                        I("span", DG, "Last " + je(W(a).llmUsage.daysWindow) + " days:", 1),
                        I("span", {
                          class: "usage-tokens",
                          title: `${W(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, je(o(W(a).llmUsage.totalTokens)) + " tokens ", 9, OG),
                        I("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: Y[21] || (Y[21] = (xe) => _t.value = !_t.value),
                          "data-test": "llm-usage-toggle"
                        }, je(_t.value ? "hide details" : "show details"), 1)
                      ]),
                      _t.value ? (qe(), ot("dl", BG, [
                        I("div", null, [
                          RG,
                          I("dd", null, je(o(W(a).llmUsage.inputTokens)), 1)
                        ]),
                        I("div", null, [
                          PG,
                          I("dd", null, je(o(W(a).llmUsage.outputTokens)), 1)
                        ]),
                        I("div", null, [
                          FG,
                          I("dd", null, je(o(W(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        I("div", null, [
                          UG,
                          I("dd", null, je(o(W(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        I("div", null, [
                          WG,
                          I("dd", null, [
                            Q(je(W(a).llmUsage.calls) + " ", 1),
                            I("span", HG, "(" + je(W(a).llmUsage.successfulCalls) + " ok / " + je(W(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        I("div", null, [
                          zG,
                          I("dd", null, je((W(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : It("", !0)
                    ])) : It("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        I("div", qG, [
          se(W(ve), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: qt
          }, {
            default: nt(() => [
              GG
            ]),
            _: 1
          }),
          se(W(ve), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: _o
          }, {
            default: nt(() => [
              YG
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
              jG
            ]),
            _: 1
          })
        ]),
        se(W(pc), {
          modelValue: rn.value,
          "onUpdate:modelValue": Y[23] || (Y[23] = (te) => rn.value = te),
          right: "",
          error: Ct.value,
          timeout: 6e3
        }, {
          button: nt(() => [
            se(W(ve), {
              onClick: Y[22] || (Y[22] = (te) => rn.value = !1),
              text: ""
            }, {
              default: nt(() => [
                ZG
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
const eY = /* @__PURE__ */ Ee(QG, [["__scopeId", "data-v-857b932d"]]), tY = window.VueRouter.createRouter, nY = window.VueRouter.createWebHistory, oY = async () => {
  const e = Bi();
  e.userId || await e.getUserRole();
}, C0 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || V0;
      await Bi().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => oY(),
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
      await Bi().getEngineInfo();
    },
    component: eY
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
const V0 = tY({
  history: nY(),
  routes: C0
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = LS;
