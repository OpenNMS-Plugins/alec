const ce = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, sS = {}, aS = window.Vue.resolveComponent, lS = window.Vue.createVNode, uS = window.Vue.openBlock, cS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const dS = { class: "main" };
function fS(e, o) {
  const r = aS("router-view");
  return uS(), cS("div", dS, [
    lS(r)
  ]);
}
const hS = /* @__PURE__ */ ce(sS, [["render", fS], ["__scopeId", "data-v-5d32d140"]]), pS = window.Vue.defineComponent, wS = window.Vue.openBlock, vS = window.Vue.createBlock, mS = /* @__PURE__ */ pS({
  __name: "App",
  setup(e) {
    return (o, r) => (wS(), vS(hS));
  }
});
var wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _S(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gm = { exports: {} }, Jc = { exports: {} }, $m = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, gS = $m, Xc = Object.prototype.toString, Qc = function(e) {
  return function(o) {
    var r = Xc.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Fr(e) {
  return e = e.toLowerCase(), function(r) {
    return Qc(r) === e;
  };
}
function ed(e) {
  return Array.isArray(e);
}
function Ea(e) {
  return typeof e > "u";
}
function $S(e) {
  return e !== null && !Ea(e) && e.constructor !== null && !Ea(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var ym = Fr("ArrayBuffer");
function yS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && ym(e.buffer), o;
}
function VS(e) {
  return typeof e == "string";
}
function bS(e) {
  return typeof e == "number";
}
function Vm(e) {
  return e !== null && typeof e == "object";
}
function _a(e) {
  if (Qc(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var CS = Fr("Date"), SS = Fr("File"), ES = Fr("Blob"), IS = Fr("FileList");
function td(e) {
  return Xc.call(e) === "[object Function]";
}
function kS(e) {
  return Vm(e) && td(e.pipe);
}
function xS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Xc.call(e) === o || td(e.toString) && e.toString() === o);
}
var AS = Fr("URLSearchParams");
function BS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function TS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function nd(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), ed(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Lc() {
  var e = {};
  function o(a, u) {
    _a(e[u]) && _a(a) ? e[u] = Lc(e[u], a) : _a(a) ? e[u] = Lc({}, a) : ed(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    nd(arguments[r], o);
  return e;
}
function DS(e, o, r) {
  return nd(o, function(a, u) {
    r && typeof a == "function" ? e[u] = gS(a, r) : e[u] = a;
  }), e;
}
function NS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function LS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function MS(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function OS(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function PS(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Ea(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var RS = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), Ke = {
  isArray: ed,
  isArrayBuffer: ym,
  isBuffer: $S,
  isFormData: xS,
  isArrayBufferView: yS,
  isString: VS,
  isNumber: bS,
  isObject: Vm,
  isPlainObject: _a,
  isUndefined: Ea,
  isDate: CS,
  isFile: SS,
  isBlob: ES,
  isFunction: td,
  isStream: kS,
  isURLSearchParams: AS,
  isStandardBrowserEnv: TS,
  forEach: nd,
  merge: Lc,
  extend: DS,
  trim: BS,
  stripBOM: NS,
  inherits: LS,
  toFlatObject: MS,
  kindOf: Qc,
  kindOfTest: Fr,
  endsWith: OS,
  toArray: PS,
  isTypedArray: RS,
  isFileList: IS
}, ro = Ke;
function ip(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var bm = function(o, r, s) {
  if (!r)
    return o;
  var a;
  if (s)
    a = s(r);
  else if (ro.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    ro.forEach(r, function(w, m) {
      w === null || typeof w > "u" || (ro.isArray(w) ? m = m + "[]" : w = [w], ro.forEach(w, function($) {
        ro.isDate($) ? $ = $.toISOString() : ro.isObject($) && ($ = JSON.stringify($)), u.push(ip(m) + "=" + ip($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, FS = Ke;
function Pa() {
  this.handlers = [];
}
Pa.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Pa.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Pa.prototype.forEach = function(o) {
  FS.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var US = Pa, WS = Ke, qS = function(o, r) {
  WS.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, Cm = Ke;
function xo(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
Cm.inherits(xo, Error, {
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
var Sm = xo.prototype, Em = {};
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
  Em[e] = { value: e };
});
Object.defineProperties(xo, Em);
Object.defineProperty(Sm, "isAxiosError", { value: !0 });
xo.from = function(e, o, r, s, a, u) {
  var c = Object.create(Sm);
  return Cm.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), xo.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Lo = xo, Im = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, tn = Ke;
function HS(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : tn.isDate(u) ? u.toISOString() : tn.isArrayBuffer(u) || tn.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (tn.isPlainObject(u) || tn.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), tn.forEach(u, function(w, m) {
        if (!tn.isUndefined(w)) {
          var _ = c ? c + "." + m : m, $;
          if (w && !c && typeof w == "object") {
            if (tn.endsWith(m, "{}"))
              w = JSON.stringify(w);
            else if (tn.endsWith(m, "[]") && ($ = tn.toArray(w))) {
              $.forEach(function(y) {
                !tn.isUndefined(y) && o.append(_, s(y));
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
var km = HS, xu, sp;
function zS() {
  if (sp)
    return xu;
  sp = 1;
  var e = Lo;
  return xu = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, xu;
}
var Au, ap;
function YS() {
  if (ap)
    return Au;
  ap = 1;
  var e = Ke;
  return Au = e.isStandardBrowserEnv() ? function() {
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
  }(), Au;
}
var GS = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, jS = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, ZS = GS, KS = jS, xm = function(o, r) {
  return o && !ZS(r) ? KS(o, r) : r;
}, Bu, lp;
function JS() {
  if (lp)
    return Bu;
  lp = 1;
  var e = Ke, o = [
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
  return Bu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(m) {
      if (f = m.indexOf(":"), u = e.trim(m.substr(0, f)).toLowerCase(), c = e.trim(m.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Bu;
}
var Tu, up;
function XS() {
  if (up)
    return Tu;
  up = 1;
  var e = Ke;
  return Tu = e.isStandardBrowserEnv() ? function() {
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
  }(), Tu;
}
var Du, cp;
function Ra() {
  if (cp)
    return Du;
  cp = 1;
  var e = Lo, o = Ke;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Du = r, Du;
}
var Nu, dp;
function QS() {
  return dp || (dp = 1, Nu = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Nu;
}
var Lu, fp;
function hp() {
  if (fp)
    return Lu;
  fp = 1;
  var e = Ke, o = zS(), r = YS(), s = bm, a = xm, u = JS(), c = XS(), f = Im, w = Lo, m = Ra(), _ = QS();
  return Lu = function(y) {
    return new Promise(function(B, M) {
      var N = y.data, S = y.headers, L = y.responseType, k;
      function O() {
        y.cancelToken && y.cancelToken.unsubscribe(k), y.signal && y.signal.removeEventListener("abort", k);
      }
      e.isFormData(N) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var I = new XMLHttpRequest();
      if (y.auth) {
        var F = y.auth.username || "", P = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(F + ":" + P);
      }
      var W = a(y.baseURL, y.url);
      I.open(y.method.toUpperCase(), s(W, y.params, y.paramsSerializer), !0), I.timeout = y.timeout;
      function $e() {
        if (!!I) {
          var Se = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, Ee = !L || L === "text" || L === "json" ? I.responseText : I.response, ke = {
            data: Ee,
            status: I.status,
            statusText: I.statusText,
            headers: Se,
            config: y,
            request: I
          };
          o(function(Ne) {
            B(Ne), O();
          }, function(Ne) {
            M(Ne), O();
          }, ke), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = $e : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout($e);
      }, I.onabort = function() {
        !I || (M(new w("Request aborted", w.ECONNABORTED, y, I)), I = null);
      }, I.onerror = function() {
        M(new w("Network Error", w.ERR_NETWORK, y, I, I)), I = null;
      }, I.ontimeout = function() {
        var Ee = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", ke = y.transitional || f;
        y.timeoutErrorMessage && (Ee = y.timeoutErrorMessage), M(new w(
          Ee,
          ke.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var de = (y.withCredentials || c(W)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        de && (S[y.xsrfHeaderName] = de);
      }
      "setRequestHeader" in I && e.forEach(S, function(Ee, ke) {
        typeof N > "u" && ke.toLowerCase() === "content-type" ? delete S[ke] : I.setRequestHeader(ke, Ee);
      }), e.isUndefined(y.withCredentials) || (I.withCredentials = !!y.withCredentials), L && L !== "json" && (I.responseType = y.responseType), typeof y.onDownloadProgress == "function" && I.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (k = function(Se) {
        !I || (M(!Se || Se && Se.type ? new m() : Se), I.abort(), I = null);
      }, y.cancelToken && y.cancelToken.subscribe(k), y.signal && (y.signal.aborted ? k() : y.signal.addEventListener("abort", k))), N || (N = null);
      var me = _(W);
      if (me && ["http", "https", "file"].indexOf(me) === -1) {
        M(new w("Unsupported protocol " + me + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      I.send(N);
    });
  }, Lu;
}
var Mu, pp;
function eE() {
  return pp || (pp = 1, Mu = null), Mu;
}
var He = Ke, wp = qS, vp = Lo, tE = Im, nE = km, rE = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function mp(e, o) {
  !He.isUndefined(e) && He.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function oE() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = hp()), e;
}
function iE(e, o, r) {
  if (He.isString(e))
    try {
      return (o || JSON.parse)(e), He.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Fa = {
  transitional: tE,
  adapter: oE(),
  transformRequest: [function(o, r) {
    if (wp(r, "Accept"), wp(r, "Content-Type"), He.isFormData(o) || He.isArrayBuffer(o) || He.isBuffer(o) || He.isStream(o) || He.isFile(o) || He.isBlob(o))
      return o;
    if (He.isArrayBufferView(o))
      return o.buffer;
    if (He.isURLSearchParams(o))
      return mp(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = He.isObject(o), a = r && r["Content-Type"], u;
    if ((u = He.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return nE(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return mp(r, "application/json"), iE(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Fa.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && He.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? vp.from(c, vp.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: eE()
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
He.forEach(["delete", "get", "head"], function(o) {
  Fa.headers[o] = {};
});
He.forEach(["post", "put", "patch"], function(o) {
  Fa.headers[o] = He.merge(rE);
});
var rd = Fa, sE = Ke, aE = rd, lE = function(o, r, s) {
  var a = this || aE;
  return sE.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Ou, _p;
function Am() {
  return _p || (_p = 1, Ou = function(o) {
    return !!(o && o.__CANCEL__);
  }), Ou;
}
var gp = Ke, Pu = lE, uE = Am(), cE = rd, dE = Ra();
function Ru(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new dE();
}
var fE = function(o) {
  Ru(o), o.headers = o.headers || {}, o.data = Pu.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = gp.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), gp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || cE.adapter;
  return r(o).then(function(a) {
    return Ru(o), a.data = Pu.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return uE(a) || (Ru(o), a && a.response && (a.response.data = Pu.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, It = Ke, Bm = function(o, r) {
  r = r || {};
  var s = {};
  function a(_, $) {
    return It.isPlainObject(_) && It.isPlainObject($) ? It.merge(_, $) : It.isPlainObject($) ? It.merge({}, $) : It.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (It.isUndefined(r[_])) {
      if (!It.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!It.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (It.isUndefined(r[_])) {
      if (!It.isUndefined(o[_]))
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
  return It.forEach(Object.keys(o).concat(Object.keys(r)), function($) {
    var y = m[$] || u, T = y($);
    It.isUndefined(T) && y !== w || (s[$] = T);
  }), s;
}, Fu, $p;
function Tm() {
  return $p || ($p = 1, Fu = {
    version: "0.27.2"
  }), Fu;
}
var hE = Tm().version, er = Lo, od = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  od[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var yp = {};
od.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + hE + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new er(
        a(c, " has been removed" + (r ? " in " + r : "")),
        er.ERR_DEPRECATED
      );
    return r && !yp[c] && (yp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function pE(e, o, r) {
  if (typeof e != "object")
    throw new er("options must be an object", er.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new er("option " + u + " must be " + w, er.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new er("Unknown option " + u, er.ERR_BAD_OPTION);
  }
}
var wE = {
  assertOptions: pE,
  validators: od
}, Dm = Ke, vE = bm, Vp = US, bp = fE, Ua = Bm, mE = xm, Nm = wE, oo = Nm.validators;
function Ao(e) {
  this.defaults = e, this.interceptors = {
    request: new Vp(),
    response: new Vp()
  };
}
Ao.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Ua(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && Nm.assertOptions(s, {
    silentJSONParsing: oo.transitional(oo.boolean),
    forcedJSONParsing: oo.transitional(oo.boolean),
    clarifyTimeoutError: oo.transitional(oo.boolean)
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
    var w = [bp, void 0];
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
    f = bp(m);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
Ao.prototype.getUri = function(o) {
  o = Ua(this.defaults, o);
  var r = mE(o.baseURL, o.url);
  return vE(r, o.params, o.paramsSerializer);
};
Dm.forEach(["delete", "get", "head", "options"], function(o) {
  Ao.prototype[o] = function(r, s) {
    return this.request(Ua(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Dm.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Ua(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Ao.prototype[o] = r(), Ao.prototype[o + "Form"] = r(!0);
});
var _E = Ao, Uu, Cp;
function gE() {
  if (Cp)
    return Uu;
  Cp = 1;
  var e = Ra();
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
  }, Uu = o, Uu;
}
var Wu, Sp;
function $E() {
  return Sp || (Sp = 1, Wu = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Wu;
}
var qu, Ep;
function yE() {
  if (Ep)
    return qu;
  Ep = 1;
  var e = Ke;
  return qu = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, qu;
}
var Ip = Ke, VE = $m, ga = _E, bE = Bm, CE = rd;
function Lm(e) {
  var o = new ga(e), r = VE(ga.prototype.request, o);
  return Ip.extend(r, ga.prototype, o), Ip.extend(r, o), r.create = function(a) {
    return Lm(bE(e, a));
  }, r;
}
var _t = Lm(CE);
_t.Axios = ga;
_t.CanceledError = Ra();
_t.CancelToken = gE();
_t.isCancel = Am();
_t.VERSION = Tm().version;
_t.toFormData = km;
_t.AxiosError = Lo;
_t.Cancel = _t.CanceledError;
_t.all = function(o) {
  return Promise.all(o);
};
_t.spread = $E();
_t.isAxiosError = yE();
Jc.exports = _t;
Jc.exports.default = _t;
(function(e) {
  e.exports = Jc.exports;
})(gm);
const Mm = /* @__PURE__ */ _S(gm.exports), On = Mm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Dt = Mm.create({
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", m = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, B = 1, M = 2, N = 1, S = 2, L = 4, k = 8, O = 16, I = 32, F = 64, P = 128, W = 256, $e = 512, de = 30, me = "...", Se = 800, Ee = 16, ke = 1, fe = 2, Ne = 3, Le = 1 / 0, Ue = 9007199254740991, Pn = 17976931348623157e292, lr = 0 / 0, $t = 4294967295, es = $t - 1, ts = $t >>> 1, ns = [
      ["ary", P],
      ["bind", N],
      ["bindKey", S],
      ["curry", k],
      ["curryRight", O],
      ["flip", $e],
      ["partial", I],
      ["partialRight", F],
      ["rearg", W]
    ], gn = "[object Arguments]", ur = "[object Array]", rs = "[object AsyncFunction]", be = "[object Boolean]", ee = "[object Date]", _e = "[object DOMException]", cr = "[object Error]", dr = "[object Function]", jo = "[object GeneratorFunction]", ut = "[object Map]", Zo = "[object Number]", bg = "[object Null]", $n = "[object Object]", kd = "[object Promise]", Cg = "[object Proxy]", Ko = "[object RegExp]", Kt = "[object Set]", Jo = "[object String]", os = "[object Symbol]", Sg = "[object Undefined]", Xo = "[object WeakMap]", Eg = "[object WeakSet]", Qo = "[object ArrayBuffer]", Wr = "[object DataView]", ll = "[object Float32Array]", ul = "[object Float64Array]", cl = "[object Int8Array]", dl = "[object Int16Array]", fl = "[object Int32Array]", hl = "[object Uint8Array]", pl = "[object Uint8ClampedArray]", wl = "[object Uint16Array]", vl = "[object Uint32Array]", Ig = /\b__p \+= '';/g, kg = /\b(__p \+=) '' \+/g, xg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, xd = /&(?:amp|lt|gt|quot|#39);/g, Ad = /[&<>"']/g, Ag = RegExp(xd.source), Bg = RegExp(Ad.source), Tg = /<%-([\s\S]+?)%>/g, Dg = /<%([\s\S]+?)%>/g, Bd = /<%=([\s\S]+?)%>/g, Ng = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lg = /^\w*$/, Mg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ml = /[\\^$.*+?()[\]{}|]/g, Og = RegExp(ml.source), _l = /^\s+/, Pg = /\s/, Rg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fg = /\{\n\/\* \[wrapped with (.+)\] \*/, Ug = /,? & /, Wg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, qg = /[()=,{}\[\]\/\s]/, Hg = /\\(\\)?/g, zg = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Td = /\w*$/, Yg = /^[-+]0x[0-9a-f]+$/i, Gg = /^0b[01]+$/i, jg = /^\[object .+?Constructor\]$/, Zg = /^0o[0-7]+$/i, Kg = /^(?:0|[1-9]\d*)$/, Jg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, is = /($^)/, Xg = /['\n\r\u2028\u2029\\]/g, ss = "\\ud800-\\udfff", Qg = "\\u0300-\\u036f", e1 = "\\ufe20-\\ufe2f", t1 = "\\u20d0-\\u20ff", Dd = Qg + e1 + t1, Nd = "\\u2700-\\u27bf", Ld = "a-z\\xdf-\\xf6\\xf8-\\xff", n1 = "\\xac\\xb1\\xd7\\xf7", r1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", o1 = "\\u2000-\\u206f", i1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Md = "A-Z\\xc0-\\xd6\\xd8-\\xde", Od = "\\ufe0e\\ufe0f", Pd = n1 + r1 + o1 + i1, gl = "['\u2019]", s1 = "[" + ss + "]", Rd = "[" + Pd + "]", as = "[" + Dd + "]", Fd = "\\d+", a1 = "[" + Nd + "]", Ud = "[" + Ld + "]", Wd = "[^" + ss + Pd + Fd + Nd + Ld + Md + "]", $l = "\\ud83c[\\udffb-\\udfff]", l1 = "(?:" + as + "|" + $l + ")", qd = "[^" + ss + "]", yl = "(?:\\ud83c[\\udde6-\\uddff]){2}", Vl = "[\\ud800-\\udbff][\\udc00-\\udfff]", qr = "[" + Md + "]", Hd = "\\u200d", zd = "(?:" + Ud + "|" + Wd + ")", u1 = "(?:" + qr + "|" + Wd + ")", Yd = "(?:" + gl + "(?:d|ll|m|re|s|t|ve))?", Gd = "(?:" + gl + "(?:D|LL|M|RE|S|T|VE))?", jd = l1 + "?", Zd = "[" + Od + "]?", c1 = "(?:" + Hd + "(?:" + [qd, yl, Vl].join("|") + ")" + Zd + jd + ")*", d1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", f1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Kd = Zd + jd + c1, h1 = "(?:" + [a1, yl, Vl].join("|") + ")" + Kd, p1 = "(?:" + [qd + as + "?", as, yl, Vl, s1].join("|") + ")", w1 = RegExp(gl, "g"), v1 = RegExp(as, "g"), bl = RegExp($l + "(?=" + $l + ")|" + p1 + Kd, "g"), m1 = RegExp([
      qr + "?" + Ud + "+" + Yd + "(?=" + [Rd, qr, "$"].join("|") + ")",
      u1 + "+" + Gd + "(?=" + [Rd, qr + zd, "$"].join("|") + ")",
      qr + "?" + zd + "+" + Yd,
      qr + "+" + Gd,
      f1,
      d1,
      Fd,
      h1
    ].join("|"), "g"), _1 = RegExp("[" + Hd + ss + Dd + Od + "]"), g1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $1 = [
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
    ], y1 = -1, Ce = {};
    Ce[ll] = Ce[ul] = Ce[cl] = Ce[dl] = Ce[fl] = Ce[hl] = Ce[pl] = Ce[wl] = Ce[vl] = !0, Ce[gn] = Ce[ur] = Ce[Qo] = Ce[be] = Ce[Wr] = Ce[ee] = Ce[cr] = Ce[dr] = Ce[ut] = Ce[Zo] = Ce[$n] = Ce[Ko] = Ce[Kt] = Ce[Jo] = Ce[Xo] = !1;
    var ye = {};
    ye[gn] = ye[ur] = ye[Qo] = ye[Wr] = ye[be] = ye[ee] = ye[ll] = ye[ul] = ye[cl] = ye[dl] = ye[fl] = ye[ut] = ye[Zo] = ye[$n] = ye[Ko] = ye[Kt] = ye[Jo] = ye[os] = ye[hl] = ye[pl] = ye[wl] = ye[vl] = !0, ye[cr] = ye[dr] = ye[Xo] = !1;
    var V1 = {
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
    }, b1 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, C1 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, S1 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, E1 = parseFloat, I1 = parseInt, Jd = typeof wi == "object" && wi && wi.Object === Object && wi, k1 = typeof self == "object" && self && self.Object === Object && self, Ye = Jd || k1 || Function("return this")(), Cl = o && !o.nodeType && o, fr = Cl && !0 && e && !e.nodeType && e, Xd = fr && fr.exports === Cl, Sl = Xd && Jd.process, Nt = function() {
      try {
        var V = fr && fr.require && fr.require("util").types;
        return V || Sl && Sl.binding && Sl.binding("util");
      } catch {
      }
    }(), Qd = Nt && Nt.isArrayBuffer, ef = Nt && Nt.isDate, tf = Nt && Nt.isMap, nf = Nt && Nt.isRegExp, rf = Nt && Nt.isSet, of = Nt && Nt.isTypedArray;
    function yt(V, E, C) {
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
    function x1(V, E, C, U) {
      for (var j = -1, ae = V == null ? 0 : V.length; ++j < ae; ) {
        var Oe = V[j];
        E(U, Oe, C(Oe), V);
      }
      return U;
    }
    function Lt(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function A1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function sf(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function Rn(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = 0, ae = []; ++C < U; ) {
        var Oe = V[C];
        E(Oe, C, V) && (ae[j++] = Oe);
      }
      return ae;
    }
    function ls(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && Hr(V, E, 0) > -1;
    }
    function El(V, E, C) {
      for (var U = -1, j = V == null ? 0 : V.length; ++U < j; )
        if (C(E, V[U]))
          return !0;
      return !1;
    }
    function Ie(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length, j = Array(U); ++C < U; )
        j[C] = E(V[C], C, V);
      return j;
    }
    function Fn(V, E) {
      for (var C = -1, U = E.length, j = V.length; ++C < U; )
        V[j + C] = E[C];
      return V;
    }
    function Il(V, E, C, U) {
      var j = -1, ae = V == null ? 0 : V.length;
      for (U && ae && (C = V[++j]); ++j < ae; )
        C = E(C, V[j], j, V);
      return C;
    }
    function B1(V, E, C, U) {
      var j = V == null ? 0 : V.length;
      for (U && j && (C = V[--j]); j--; )
        C = E(C, V[j], j, V);
      return C;
    }
    function kl(V, E) {
      for (var C = -1, U = V == null ? 0 : V.length; ++C < U; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var T1 = xl("length");
    function D1(V) {
      return V.split("");
    }
    function N1(V) {
      return V.match(Wg) || [];
    }
    function af(V, E, C) {
      var U;
      return C(V, function(j, ae, Oe) {
        if (E(j, ae, Oe))
          return U = ae, !1;
      }), U;
    }
    function us(V, E, C, U) {
      for (var j = V.length, ae = C + (U ? 1 : -1); U ? ae-- : ++ae < j; )
        if (E(V[ae], ae, V))
          return ae;
      return -1;
    }
    function Hr(V, E, C) {
      return E === E ? Y1(V, E, C) : us(V, lf, C);
    }
    function L1(V, E, C, U) {
      for (var j = C - 1, ae = V.length; ++j < ae; )
        if (U(V[j], E))
          return j;
      return -1;
    }
    function lf(V) {
      return V !== V;
    }
    function uf(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? Bl(V, E) / C : lr;
    }
    function xl(V) {
      return function(E) {
        return E == null ? r : E[V];
      };
    }
    function Al(V) {
      return function(E) {
        return V == null ? r : V[E];
      };
    }
    function cf(V, E, C, U, j) {
      return j(V, function(ae, Oe, ge) {
        C = U ? (U = !1, ae) : E(C, ae, Oe, ge);
      }), C;
    }
    function M1(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function Bl(V, E) {
      for (var C, U = -1, j = V.length; ++U < j; ) {
        var ae = E(V[U]);
        ae !== r && (C = C === r ? ae : C + ae);
      }
      return C;
    }
    function Tl(V, E) {
      for (var C = -1, U = Array(V); ++C < V; )
        U[C] = E(C);
      return U;
    }
    function O1(V, E) {
      return Ie(E, function(C) {
        return [C, V[C]];
      });
    }
    function df(V) {
      return V && V.slice(0, wf(V) + 1).replace(_l, "");
    }
    function Vt(V) {
      return function(E) {
        return V(E);
      };
    }
    function Dl(V, E) {
      return Ie(E, function(C) {
        return V[C];
      });
    }
    function ei(V, E) {
      return V.has(E);
    }
    function ff(V, E) {
      for (var C = -1, U = V.length; ++C < U && Hr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function hf(V, E) {
      for (var C = V.length; C-- && Hr(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function P1(V, E) {
      for (var C = V.length, U = 0; C--; )
        V[C] === E && ++U;
      return U;
    }
    var R1 = Al(V1), F1 = Al(b1);
    function U1(V) {
      return "\\" + S1[V];
    }
    function W1(V, E) {
      return V == null ? r : V[E];
    }
    function zr(V) {
      return _1.test(V);
    }
    function q1(V) {
      return g1.test(V);
    }
    function H1(V) {
      for (var E, C = []; !(E = V.next()).done; )
        C.push(E.value);
      return C;
    }
    function Nl(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U, j) {
        C[++E] = [j, U];
      }), C;
    }
    function pf(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function Un(V, E) {
      for (var C = -1, U = V.length, j = 0, ae = []; ++C < U; ) {
        var Oe = V[C];
        (Oe === E || Oe === _) && (V[C] = _, ae[j++] = C);
      }
      return ae;
    }
    function cs(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function z1(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function Y1(V, E, C) {
      for (var U = C - 1, j = V.length; ++U < j; )
        if (V[U] === E)
          return U;
      return -1;
    }
    function G1(V, E, C) {
      for (var U = C + 1; U--; )
        if (V[U] === E)
          return U;
      return U;
    }
    function Yr(V) {
      return zr(V) ? Z1(V) : T1(V);
    }
    function Jt(V) {
      return zr(V) ? K1(V) : D1(V);
    }
    function wf(V) {
      for (var E = V.length; E-- && Pg.test(V.charAt(E)); )
        ;
      return E;
    }
    var j1 = Al(C1);
    function Z1(V) {
      for (var E = bl.lastIndex = 0; bl.test(V); )
        ++E;
      return E;
    }
    function K1(V) {
      return V.match(bl) || [];
    }
    function J1(V) {
      return V.match(m1) || [];
    }
    var X1 = function V(E) {
      E = E == null ? Ye : Gr.defaults(Ye.Object(), E, Gr.pick(Ye, $1));
      var C = E.Array, U = E.Date, j = E.Error, ae = E.Function, Oe = E.Math, ge = E.Object, Ll = E.RegExp, Q1 = E.String, Mt = E.TypeError, ds = C.prototype, e0 = ae.prototype, jr = ge.prototype, fs = E["__core-js_shared__"], hs = e0.toString, pe = jr.hasOwnProperty, t0 = 0, vf = function() {
        var t = /[^.]+$/.exec(fs && fs.keys && fs.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), ps = jr.toString, n0 = hs.call(ge), r0 = Ye._, o0 = Ll(
        "^" + hs.call(pe).replace(ml, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ws = Xd ? E.Buffer : r, Wn = E.Symbol, vs = E.Uint8Array, mf = ws ? ws.allocUnsafe : r, ms = pf(ge.getPrototypeOf, ge), _f = ge.create, gf = jr.propertyIsEnumerable, _s = ds.splice, $f = Wn ? Wn.isConcatSpreadable : r, ti = Wn ? Wn.iterator : r, hr = Wn ? Wn.toStringTag : r, gs = function() {
        try {
          var t = _r(ge, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), i0 = E.clearTimeout !== Ye.clearTimeout && E.clearTimeout, s0 = U && U.now !== Ye.Date.now && U.now, a0 = E.setTimeout !== Ye.setTimeout && E.setTimeout, $s = Oe.ceil, ys = Oe.floor, Ml = ge.getOwnPropertySymbols, l0 = ws ? ws.isBuffer : r, yf = E.isFinite, u0 = ds.join, c0 = pf(ge.keys, ge), Pe = Oe.max, Je = Oe.min, d0 = U.now, f0 = E.parseInt, Vf = Oe.random, h0 = ds.reverse, Ol = _r(E, "DataView"), ni = _r(E, "Map"), Pl = _r(E, "Promise"), Zr = _r(E, "Set"), ri = _r(E, "WeakMap"), oi = _r(ge, "create"), Vs = ri && new ri(), Kr = {}, p0 = gr(Ol), w0 = gr(ni), v0 = gr(Pl), m0 = gr(Zr), _0 = gr(ri), bs = Wn ? Wn.prototype : r, ii = bs ? bs.valueOf : r, bf = bs ? bs.toString : r;
      function h(t) {
        if (Ae(t) && !Z(t) && !(t instanceof re)) {
          if (t instanceof Ot)
            return t;
          if (pe.call(t, "__wrapped__"))
            return Ch(t);
        }
        return new Ot(t);
      }
      var Jr = function() {
        function t() {
        }
        return function(n) {
          if (!xe(n))
            return {};
          if (_f)
            return _f(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Cs() {
      }
      function Ot(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: Tg,
        evaluate: Dg,
        interpolate: Bd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Cs.prototype, h.prototype.constructor = h, Ot.prototype = Jr(Cs.prototype), Ot.prototype.constructor = Ot;
      function re(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $t, this.__views__ = [];
      }
      function g0() {
        var t = new re(this.__wrapped__);
        return t.__actions__ = ct(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = ct(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = ct(this.__views__), t;
      }
      function $0() {
        if (this.__filtered__) {
          var t = new re(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function y0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = Z(t), l = n < 0, d = i ? t.length : 0, p = D$(0, d, this.__views__), v = p.start, g = p.end, b = g - v, x = l ? g : v - 1, A = this.__iteratees__, D = A.length, R = 0, q = Je(b, this.__takeCount__);
        if (!i || !l && d == b && q == b)
          return Gf(t, this.__actions__);
        var z = [];
        e:
          for (; b-- && R < q; ) {
            x += n;
            for (var J = -1, Y = t[x]; ++J < D; ) {
              var te = A[J], oe = te.iteratee, St = te.type, rt = oe(Y);
              if (St == fe)
                Y = rt;
              else if (!rt) {
                if (St == ke)
                  continue e;
                break e;
              }
            }
            z[R++] = Y;
          }
        return z;
      }
      re.prototype = Jr(Cs.prototype), re.prototype.constructor = re;
      function pr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function V0() {
        this.__data__ = oi ? oi(null) : {}, this.size = 0;
      }
      function b0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function C0(t) {
        var n = this.__data__;
        if (oi) {
          var i = n[t];
          return i === w ? r : i;
        }
        return pe.call(n, t) ? n[t] : r;
      }
      function S0(t) {
        var n = this.__data__;
        return oi ? n[t] !== r : pe.call(n, t);
      }
      function E0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = oi && n === r ? w : n, this;
      }
      pr.prototype.clear = V0, pr.prototype.delete = b0, pr.prototype.get = C0, pr.prototype.has = S0, pr.prototype.set = E0;
      function yn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function I0() {
        this.__data__ = [], this.size = 0;
      }
      function k0(t) {
        var n = this.__data__, i = Ss(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : _s.call(n, i, 1), --this.size, !0;
      }
      function x0(t) {
        var n = this.__data__, i = Ss(n, t);
        return i < 0 ? r : n[i][1];
      }
      function A0(t) {
        return Ss(this.__data__, t) > -1;
      }
      function B0(t, n) {
        var i = this.__data__, l = Ss(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      yn.prototype.clear = I0, yn.prototype.delete = k0, yn.prototype.get = x0, yn.prototype.has = A0, yn.prototype.set = B0;
      function Vn(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function T0() {
        this.size = 0, this.__data__ = {
          hash: new pr(),
          map: new (ni || yn)(),
          string: new pr()
        };
      }
      function D0(t) {
        var n = Os(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function N0(t) {
        return Os(this, t).get(t);
      }
      function L0(t) {
        return Os(this, t).has(t);
      }
      function M0(t, n) {
        var i = Os(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      Vn.prototype.clear = T0, Vn.prototype.delete = D0, Vn.prototype.get = N0, Vn.prototype.has = L0, Vn.prototype.set = M0;
      function wr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Vn(); ++n < i; )
          this.add(t[n]);
      }
      function O0(t) {
        return this.__data__.set(t, w), this;
      }
      function P0(t) {
        return this.__data__.has(t);
      }
      wr.prototype.add = wr.prototype.push = O0, wr.prototype.has = P0;
      function Xt(t) {
        var n = this.__data__ = new yn(t);
        this.size = n.size;
      }
      function R0() {
        this.__data__ = new yn(), this.size = 0;
      }
      function F0(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function U0(t) {
        return this.__data__.get(t);
      }
      function W0(t) {
        return this.__data__.has(t);
      }
      function q0(t, n) {
        var i = this.__data__;
        if (i instanceof yn) {
          var l = i.__data__;
          if (!ni || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new Vn(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      Xt.prototype.clear = R0, Xt.prototype.delete = F0, Xt.prototype.get = U0, Xt.prototype.has = W0, Xt.prototype.set = q0;
      function Cf(t, n) {
        var i = Z(t), l = !i && $r(t), d = !i && !l && Gn(t), p = !i && !l && !d && to(t), v = i || l || d || p, g = v ? Tl(t.length, Q1) : [], b = g.length;
        for (var x in t)
          (n || pe.call(t, x)) && !(v && (x == "length" || d && (x == "offset" || x == "parent") || p && (x == "buffer" || x == "byteLength" || x == "byteOffset") || En(x, b))) && g.push(x);
        return g;
      }
      function Sf(t) {
        var n = t.length;
        return n ? t[Zl(0, n - 1)] : r;
      }
      function H0(t, n) {
        return Ps(ct(t), vr(n, 0, t.length));
      }
      function z0(t) {
        return Ps(ct(t));
      }
      function Rl(t, n, i) {
        (i !== r && !Qt(t[n], i) || i === r && !(n in t)) && bn(t, n, i);
      }
      function si(t, n, i) {
        var l = t[n];
        (!(pe.call(t, n) && Qt(l, i)) || i === r && !(n in t)) && bn(t, n, i);
      }
      function Ss(t, n) {
        for (var i = t.length; i--; )
          if (Qt(t[i][0], n))
            return i;
        return -1;
      }
      function Y0(t, n, i, l) {
        return qn(t, function(d, p, v) {
          n(l, d, i(d), v);
        }), l;
      }
      function Ef(t, n) {
        return t && cn(n, We(n), t);
      }
      function G0(t, n) {
        return t && cn(n, ft(n), t);
      }
      function bn(t, n, i) {
        n == "__proto__" && gs ? gs(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Fl(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? r : $u(t, n[i]);
        return d;
      }
      function vr(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function Pt(t, n, i, l, d, p) {
        var v, g = n & $, b = n & y, x = n & T;
        if (i && (v = d ? i(t, l, d, p) : i(t)), v !== r)
          return v;
        if (!xe(t))
          return t;
        var A = Z(t);
        if (A) {
          if (v = L$(t), !g)
            return ct(t, v);
        } else {
          var D = Xe(t), R = D == dr || D == jo;
          if (Gn(t))
            return Kf(t, g);
          if (D == $n || D == gn || R && !d) {
            if (v = b || R ? {} : wh(t), !g)
              return b ? C$(t, G0(v, t)) : b$(t, Ef(v, t));
          } else {
            if (!ye[D])
              return d ? t : {};
            v = M$(t, D, g);
          }
        }
        p || (p = new Xt());
        var q = p.get(t);
        if (q)
          return q;
        p.set(t, v), Hh(t) ? t.forEach(function(Y) {
          v.add(Pt(Y, n, i, Y, t, p));
        }) : Wh(t) && t.forEach(function(Y, te) {
          v.set(te, Pt(Y, n, i, te, t, p));
        });
        var z = x ? b ? su : iu : b ? ft : We, J = A ? r : z(t);
        return Lt(J || t, function(Y, te) {
          J && (te = Y, Y = t[te]), si(v, te, Pt(Y, n, i, te, t, p));
        }), v;
      }
      function j0(t) {
        var n = We(t);
        return function(i) {
          return If(i, t, n);
        };
      }
      function If(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = ge(t); l--; ) {
          var d = i[l], p = n[d], v = t[d];
          if (v === r && !(d in t) || !p(v))
            return !1;
        }
        return !0;
      }
      function kf(t, n, i) {
        if (typeof t != "function")
          throw new Mt(c);
        return hi(function() {
          t.apply(r, i);
        }, n);
      }
      function ai(t, n, i, l) {
        var d = -1, p = ls, v = !0, g = t.length, b = [], x = n.length;
        if (!g)
          return b;
        i && (n = Ie(n, Vt(i))), l ? (p = El, v = !1) : n.length >= a && (p = ei, v = !1, n = new wr(n));
        e:
          for (; ++d < g; ) {
            var A = t[d], D = i == null ? A : i(A);
            if (A = l || A !== 0 ? A : 0, v && D === D) {
              for (var R = x; R--; )
                if (n[R] === D)
                  continue e;
              b.push(A);
            } else
              p(n, D, l) || b.push(A);
          }
        return b;
      }
      var qn = th(un), xf = th(Wl, !0);
      function Z0(t, n) {
        var i = !0;
        return qn(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function Es(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], v = n(p);
          if (v != null && (g === r ? v === v && !Ct(v) : i(v, g)))
            var g = v, b = p;
        }
        return b;
      }
      function K0(t, n, i, l) {
        var d = t.length;
        for (i = K(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : K(l), l < 0 && (l += d), l = i > l ? 0 : Yh(l); i < l; )
          t[i++] = n;
        return t;
      }
      function Af(t, n) {
        var i = [];
        return qn(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function Ge(t, n, i, l, d) {
        var p = -1, v = t.length;
        for (i || (i = P$), d || (d = []); ++p < v; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? Ge(g, n - 1, i, l, d) : Fn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var Ul = nh(), Bf = nh(!0);
      function un(t, n) {
        return t && Ul(t, n, We);
      }
      function Wl(t, n) {
        return t && Bf(t, n, We);
      }
      function Is(t, n) {
        return Rn(n, function(i) {
          return In(t[i]);
        });
      }
      function mr(t, n) {
        n = zn(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[dn(n[i++])];
        return i && i == l ? t : r;
      }
      function Tf(t, n, i) {
        var l = n(t);
        return Z(t) ? l : Fn(l, i(t));
      }
      function tt(t) {
        return t == null ? t === r ? Sg : bg : hr && hr in ge(t) ? T$(t) : z$(t);
      }
      function ql(t, n) {
        return t > n;
      }
      function J0(t, n) {
        return t != null && pe.call(t, n);
      }
      function X0(t, n) {
        return t != null && n in ge(t);
      }
      function Q0(t, n, i) {
        return t >= Je(n, i) && t < Pe(n, i);
      }
      function Hl(t, n, i) {
        for (var l = i ? El : ls, d = t[0].length, p = t.length, v = p, g = C(p), b = 1 / 0, x = []; v--; ) {
          var A = t[v];
          v && n && (A = Ie(A, Vt(n))), b = Je(A.length, b), g[v] = !i && (n || d >= 120 && A.length >= 120) ? new wr(v && A) : r;
        }
        A = t[0];
        var D = -1, R = g[0];
        e:
          for (; ++D < d && x.length < b; ) {
            var q = A[D], z = n ? n(q) : q;
            if (q = i || q !== 0 ? q : 0, !(R ? ei(R, z) : l(x, z, i))) {
              for (v = p; --v; ) {
                var J = g[v];
                if (!(J ? ei(J, z) : l(t[v], z, i)))
                  continue e;
              }
              R && R.push(z), x.push(q);
            }
          }
        return x;
      }
      function e$(t, n, i, l) {
        return un(t, function(d, p, v) {
          n(l, i(d), p, v);
        }), l;
      }
      function li(t, n, i) {
        n = zn(n, t), t = gh(t, n);
        var l = t == null ? t : t[dn(Ft(n))];
        return l == null ? r : yt(l, t, i);
      }
      function Df(t) {
        return Ae(t) && tt(t) == gn;
      }
      function t$(t) {
        return Ae(t) && tt(t) == Qo;
      }
      function n$(t) {
        return Ae(t) && tt(t) == ee;
      }
      function ui(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Ae(t) && !Ae(n) ? t !== t && n !== n : r$(t, n, i, l, ui, d);
      }
      function r$(t, n, i, l, d, p) {
        var v = Z(t), g = Z(n), b = v ? ur : Xe(t), x = g ? ur : Xe(n);
        b = b == gn ? $n : b, x = x == gn ? $n : x;
        var A = b == $n, D = x == $n, R = b == x;
        if (R && Gn(t)) {
          if (!Gn(n))
            return !1;
          v = !0, A = !1;
        }
        if (R && !A)
          return p || (p = new Xt()), v || to(t) ? fh(t, n, i, l, d, p) : A$(t, n, b, i, l, d, p);
        if (!(i & B)) {
          var q = A && pe.call(t, "__wrapped__"), z = D && pe.call(n, "__wrapped__");
          if (q || z) {
            var J = q ? t.value() : t, Y = z ? n.value() : n;
            return p || (p = new Xt()), d(J, Y, i, l, p);
          }
        }
        return R ? (p || (p = new Xt()), B$(t, n, i, l, d, p)) : !1;
      }
      function o$(t) {
        return Ae(t) && Xe(t) == ut;
      }
      function zl(t, n, i, l) {
        var d = i.length, p = d, v = !l;
        if (t == null)
          return !p;
        for (t = ge(t); d--; ) {
          var g = i[d];
          if (v && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = i[d];
          var b = g[0], x = t[b], A = g[1];
          if (v && g[2]) {
            if (x === r && !(b in t))
              return !1;
          } else {
            var D = new Xt();
            if (l)
              var R = l(x, A, b, t, n, D);
            if (!(R === r ? ui(A, x, B | M, l, D) : R))
              return !1;
          }
        }
        return !0;
      }
      function Nf(t) {
        if (!xe(t) || F$(t))
          return !1;
        var n = In(t) ? o0 : jg;
        return n.test(gr(t));
      }
      function i$(t) {
        return Ae(t) && tt(t) == Ko;
      }
      function s$(t) {
        return Ae(t) && Xe(t) == Kt;
      }
      function a$(t) {
        return Ae(t) && Hs(t.length) && !!Ce[tt(t)];
      }
      function Lf(t) {
        return typeof t == "function" ? t : t == null ? ht : typeof t == "object" ? Z(t) ? Pf(t[0], t[1]) : Of(t) : rp(t);
      }
      function Yl(t) {
        if (!fi(t))
          return c0(t);
        var n = [];
        for (var i in ge(t))
          pe.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function l$(t) {
        if (!xe(t))
          return H$(t);
        var n = fi(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !pe.call(t, l)) || i.push(l);
        return i;
      }
      function Gl(t, n) {
        return t < n;
      }
      function Mf(t, n) {
        var i = -1, l = dt(t) ? C(t.length) : [];
        return qn(t, function(d, p, v) {
          l[++i] = n(d, p, v);
        }), l;
      }
      function Of(t) {
        var n = lu(t);
        return n.length == 1 && n[0][2] ? mh(n[0][0], n[0][1]) : function(i) {
          return i === t || zl(i, t, n);
        };
      }
      function Pf(t, n) {
        return cu(t) && vh(n) ? mh(dn(t), n) : function(i) {
          var l = $u(i, t);
          return l === r && l === n ? yu(i, t) : ui(n, l, B | M);
        };
      }
      function ks(t, n, i, l, d) {
        t !== n && Ul(n, function(p, v) {
          if (d || (d = new Xt()), xe(p))
            u$(t, n, v, i, ks, l, d);
          else {
            var g = l ? l(fu(t, v), p, v + "", t, n, d) : r;
            g === r && (g = p), Rl(t, v, g);
          }
        }, ft);
      }
      function u$(t, n, i, l, d, p, v) {
        var g = fu(t, i), b = fu(n, i), x = v.get(b);
        if (x) {
          Rl(t, i, x);
          return;
        }
        var A = p ? p(g, b, i + "", t, n, v) : r, D = A === r;
        if (D) {
          var R = Z(b), q = !R && Gn(b), z = !R && !q && to(b);
          A = b, R || q || z ? Z(g) ? A = g : Be(g) ? A = ct(g) : q ? (D = !1, A = Kf(b, !0)) : z ? (D = !1, A = Jf(b, !0)) : A = [] : pi(b) || $r(b) ? (A = g, $r(g) ? A = Gh(g) : (!xe(g) || In(g)) && (A = wh(b))) : D = !1;
        }
        D && (v.set(b, A), d(A, b, l, p, v), v.delete(b)), Rl(t, i, A);
      }
      function Rf(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, En(n, i) ? t[n] : r;
      }
      function Ff(t, n, i) {
        n.length ? n = Ie(n, function(p) {
          return Z(p) ? function(v) {
            return mr(v, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [ht];
        var l = -1;
        n = Ie(n, Vt(H()));
        var d = Mf(t, function(p, v, g) {
          var b = Ie(n, function(x) {
            return x(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return M1(d, function(p, v) {
          return V$(p, v, i);
        });
      }
      function c$(t, n) {
        return Uf(t, n, function(i, l) {
          return yu(t, l);
        });
      }
      function Uf(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var v = n[l], g = mr(t, v);
          i(g, v) && ci(p, zn(v, t), g);
        }
        return p;
      }
      function d$(t) {
        return function(n) {
          return mr(n, t);
        };
      }
      function jl(t, n, i, l) {
        var d = l ? L1 : Hr, p = -1, v = n.length, g = t;
        for (t === n && (n = ct(n)), i && (g = Ie(t, Vt(i))); ++p < v; )
          for (var b = 0, x = n[p], A = i ? i(x) : x; (b = d(g, A, b, l)) > -1; )
            g !== t && _s.call(g, b, 1), _s.call(t, b, 1);
        return t;
      }
      function Wf(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            En(d) ? _s.call(t, d, 1) : Xl(t, d);
          }
        }
        return t;
      }
      function Zl(t, n) {
        return t + ys(Vf() * (n - t + 1));
      }
      function f$(t, n, i, l) {
        for (var d = -1, p = Pe($s((n - t) / (i || 1)), 0), v = C(p); p--; )
          v[l ? p : ++d] = t, t += i;
        return v;
      }
      function Kl(t, n) {
        var i = "";
        if (!t || n < 1 || n > Ue)
          return i;
        do
          n % 2 && (i += t), n = ys(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function Q(t, n) {
        return hu(_h(t, n, ht), t + "");
      }
      function h$(t) {
        return Sf(no(t));
      }
      function p$(t, n) {
        var i = no(t);
        return Ps(i, vr(n, 0, i.length));
      }
      function ci(t, n, i, l) {
        if (!xe(t))
          return t;
        n = zn(n, t);
        for (var d = -1, p = n.length, v = p - 1, g = t; g != null && ++d < p; ) {
          var b = dn(n[d]), x = i;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != v) {
            var A = g[b];
            x = l ? l(A, b, g) : r, x === r && (x = xe(A) ? A : En(n[d + 1]) ? [] : {});
          }
          si(g, b, x), g = g[b];
        }
        return t;
      }
      var qf = Vs ? function(t, n) {
        return Vs.set(t, n), t;
      } : ht, w$ = gs ? function(t, n) {
        return gs(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: bu(n),
          writable: !0
        });
      } : ht;
      function v$(t) {
        return Ps(no(t));
      }
      function Rt(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function m$(t, n) {
        var i;
        return qn(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function xs(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= ts) {
          for (; l < d; ) {
            var p = l + d >>> 1, v = t[p];
            v !== null && !Ct(v) && (i ? v <= n : v < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return Jl(t, n, ht, i);
      }
      function Jl(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var v = n !== n, g = n === null, b = Ct(n), x = n === r; d < p; ) {
          var A = ys((d + p) / 2), D = i(t[A]), R = D !== r, q = D === null, z = D === D, J = Ct(D);
          if (v)
            var Y = l || z;
          else
            x ? Y = z && (l || R) : g ? Y = z && R && (l || !q) : b ? Y = z && R && !q && (l || !J) : q || J ? Y = !1 : Y = l ? D <= n : D < n;
          Y ? d = A + 1 : p = A;
        }
        return Je(p, es);
      }
      function Hf(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var v = t[i], g = n ? n(v) : v;
          if (!i || !Qt(g, b)) {
            var b = g;
            p[d++] = v === 0 ? 0 : v;
          }
        }
        return p;
      }
      function zf(t) {
        return typeof t == "number" ? t : Ct(t) ? lr : +t;
      }
      function bt(t) {
        if (typeof t == "string")
          return t;
        if (Z(t))
          return Ie(t, bt) + "";
        if (Ct(t))
          return bf ? bf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function Hn(t, n, i) {
        var l = -1, d = ls, p = t.length, v = !0, g = [], b = g;
        if (i)
          v = !1, d = El;
        else if (p >= a) {
          var x = n ? null : k$(t);
          if (x)
            return cs(x);
          v = !1, d = ei, b = new wr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var A = t[l], D = n ? n(A) : A;
            if (A = i || A !== 0 ? A : 0, v && D === D) {
              for (var R = b.length; R--; )
                if (b[R] === D)
                  continue e;
              n && b.push(D), g.push(A);
            } else
              d(b, D, i) || (b !== g && b.push(D), g.push(A));
          }
        return g;
      }
      function Xl(t, n) {
        return n = zn(n, t), t = gh(t, n), t == null || delete t[dn(Ft(n))];
      }
      function Yf(t, n, i, l) {
        return ci(t, n, i(mr(t, n)), l);
      }
      function As(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Rt(t, l ? 0 : p, l ? p + 1 : d) : Rt(t, l ? p + 1 : 0, l ? d : p);
      }
      function Gf(t, n) {
        var i = t;
        return i instanceof re && (i = i.value()), Il(n, function(l, d) {
          return d.func.apply(d.thisArg, Fn([l], d.args));
        }, i);
      }
      function Ql(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Hn(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var v = t[d], g = -1; ++g < l; )
            g != d && (p[d] = ai(p[d] || v, t[g], n, i));
        return Hn(Ge(p, 1), n, i);
      }
      function jf(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, v = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          i(v, t[l], g);
        }
        return v;
      }
      function eu(t) {
        return Be(t) ? t : [];
      }
      function tu(t) {
        return typeof t == "function" ? t : ht;
      }
      function zn(t, n) {
        return Z(t) ? t : cu(t, n) ? [t] : bh(he(t));
      }
      var _$ = Q;
      function Yn(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Rt(t, n, i);
      }
      var Zf = i0 || function(t) {
        return Ye.clearTimeout(t);
      };
      function Kf(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = mf ? mf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function nu(t) {
        var n = new t.constructor(t.byteLength);
        return new vs(n).set(new vs(t)), n;
      }
      function g$(t, n) {
        var i = n ? nu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function $$(t) {
        var n = new t.constructor(t.source, Td.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function y$(t) {
        return ii ? ge(ii.call(t)) : {};
      }
      function Jf(t, n) {
        var i = n ? nu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Xf(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, p = Ct(t), v = n !== r, g = n === null, b = n === n, x = Ct(n);
          if (!g && !x && !p && t > n || p && v && b && !g && !x || l && v && b || !i && b || !d)
            return 1;
          if (!l && !p && !x && t < n || x && i && d && !l && !p || g && i && d || !v && d || !b)
            return -1;
        }
        return 0;
      }
      function V$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, v = d.length, g = i.length; ++l < v; ) {
          var b = Xf(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var x = i[l];
            return b * (x == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Qf(t, n, i, l) {
        for (var d = -1, p = t.length, v = i.length, g = -1, b = n.length, x = Pe(p - v, 0), A = C(b + x), D = !l; ++g < b; )
          A[g] = n[g];
        for (; ++d < v; )
          (D || d < p) && (A[i[d]] = t[d]);
        for (; x--; )
          A[g++] = t[d++];
        return A;
      }
      function eh(t, n, i, l) {
        for (var d = -1, p = t.length, v = -1, g = i.length, b = -1, x = n.length, A = Pe(p - g, 0), D = C(A + x), R = !l; ++d < A; )
          D[d] = t[d];
        for (var q = d; ++b < x; )
          D[q + b] = n[b];
        for (; ++v < g; )
          (R || d < p) && (D[q + i[v]] = t[d++]);
        return D;
      }
      function ct(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function cn(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, v = n.length; ++p < v; ) {
          var g = n[p], b = l ? l(i[g], t[g], g, i, t) : r;
          b === r && (b = t[g]), d ? bn(i, g, b) : si(i, g, b);
        }
        return i;
      }
      function b$(t, n) {
        return cn(t, uu(t), n);
      }
      function C$(t, n) {
        return cn(t, hh(t), n);
      }
      function Bs(t, n) {
        return function(i, l) {
          var d = Z(i) ? x1 : Y0, p = n ? n() : {};
          return d(i, t, H(l, 2), p);
        };
      }
      function Xr(t) {
        return Q(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : r, v = d > 2 ? i[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, v && nt(i[0], i[1], v) && (p = d < 3 ? r : p, d = 1), n = ge(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function th(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!dt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, v = ge(i); (n ? p-- : ++p < d) && l(v[p], p, v) !== !1; )
            ;
          return i;
        };
      }
      function nh(t) {
        return function(n, i, l) {
          for (var d = -1, p = ge(n), v = l(n), g = v.length; g--; ) {
            var b = v[t ? g : ++d];
            if (i(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function S$(t, n, i) {
        var l = n & N, d = di(t);
        function p() {
          var v = this && this !== Ye && this instanceof p ? d : t;
          return v.apply(l ? i : this, arguments);
        }
        return p;
      }
      function rh(t) {
        return function(n) {
          n = he(n);
          var i = zr(n) ? Jt(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Yn(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Qr(t) {
        return function(n) {
          return Il(tp(ep(n).replace(w1, "")), t, "");
        };
      }
      function di(t) {
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
          var i = Jr(t.prototype), l = t.apply(i, n);
          return xe(l) ? l : i;
        };
      }
      function E$(t, n, i) {
        var l = di(t);
        function d() {
          for (var p = arguments.length, v = C(p), g = p, b = eo(d); g--; )
            v[g] = arguments[g];
          var x = p < 3 && v[0] !== b && v[p - 1] !== b ? [] : Un(v, b);
          if (p -= x.length, p < i)
            return lh(
              t,
              n,
              Ts,
              d.placeholder,
              r,
              v,
              x,
              r,
              r,
              i - p
            );
          var A = this && this !== Ye && this instanceof d ? l : t;
          return yt(A, this, v);
        }
        return d;
      }
      function oh(t) {
        return function(n, i, l) {
          var d = ge(n);
          if (!dt(n)) {
            var p = H(i, 3);
            n = We(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var v = t(n, i, l);
          return v > -1 ? d[p ? n[v] : v] : r;
        };
      }
      function ih(t) {
        return Sn(function(n) {
          var i = n.length, l = i, d = Ot.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Mt(c);
            if (d && !v && Ms(p) == "wrapper")
              var v = new Ot([], !0);
          }
          for (l = v ? l : i; ++l < i; ) {
            p = n[l];
            var g = Ms(p), b = g == "wrapper" ? au(p) : r;
            b && du(b[0]) && b[1] == (P | k | I | W) && !b[4].length && b[9] == 1 ? v = v[Ms(b[0])].apply(v, b[3]) : v = p.length == 1 && du(p) ? v[g]() : v.thru(p);
          }
          return function() {
            var x = arguments, A = x[0];
            if (v && x.length == 1 && Z(A))
              return v.plant(A).value();
            for (var D = 0, R = i ? n[D].apply(this, x) : A; ++D < i; )
              R = n[D].call(this, R);
            return R;
          };
        });
      }
      function Ts(t, n, i, l, d, p, v, g, b, x) {
        var A = n & P, D = n & N, R = n & S, q = n & (k | O), z = n & $e, J = R ? r : di(t);
        function Y() {
          for (var te = arguments.length, oe = C(te), St = te; St--; )
            oe[St] = arguments[St];
          if (q)
            var rt = eo(Y), Et = P1(oe, rt);
          if (l && (oe = Qf(oe, l, d, q)), p && (oe = eh(oe, p, v, q)), te -= Et, q && te < x) {
            var Te = Un(oe, rt);
            return lh(
              t,
              n,
              Ts,
              Y.placeholder,
              i,
              oe,
              Te,
              g,
              b,
              x - te
            );
          }
          var en = D ? i : this, xn = R ? en[t] : t;
          return te = oe.length, g ? oe = Y$(oe, g) : z && te > 1 && oe.reverse(), A && b < te && (oe.length = b), this && this !== Ye && this instanceof Y && (xn = J || di(xn)), xn.apply(en, oe);
        }
        return Y;
      }
      function sh(t, n) {
        return function(i, l) {
          return e$(i, t, n(l), {});
        };
      }
      function Ds(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = bt(i), l = bt(l)) : (i = zf(i), l = zf(l)), d = t(i, l);
          }
          return d;
        };
      }
      function ru(t) {
        return Sn(function(n) {
          return n = Ie(n, Vt(H())), Q(function(i) {
            var l = this;
            return t(n, function(d) {
              return yt(d, l, i);
            });
          });
        });
      }
      function Ns(t, n) {
        n = n === r ? " " : bt(n);
        var i = n.length;
        if (i < 2)
          return i ? Kl(n, t) : n;
        var l = Kl(n, $s(t / Yr(n)));
        return zr(n) ? Yn(Jt(l), 0, t).join("") : l.slice(0, t);
      }
      function I$(t, n, i, l) {
        var d = n & N, p = di(t);
        function v() {
          for (var g = -1, b = arguments.length, x = -1, A = l.length, D = C(A + b), R = this && this !== Ye && this instanceof v ? p : t; ++x < A; )
            D[x] = l[x];
          for (; b--; )
            D[x++] = arguments[++g];
          return yt(R, d ? i : this, D);
        }
        return v;
      }
      function ah(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && nt(n, i, l) && (i = l = r), n = kn(n), i === r ? (i = n, n = 0) : i = kn(i), l = l === r ? n < i ? 1 : -1 : kn(l), f$(n, i, l, t);
        };
      }
      function Ls(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Ut(n), i = Ut(i)), t(n, i);
        };
      }
      function lh(t, n, i, l, d, p, v, g, b, x) {
        var A = n & k, D = A ? v : r, R = A ? r : v, q = A ? p : r, z = A ? r : p;
        n |= A ? I : F, n &= ~(A ? F : I), n & L || (n &= ~(N | S));
        var J = [
          t,
          n,
          d,
          q,
          D,
          z,
          R,
          g,
          b,
          x
        ], Y = i.apply(r, J);
        return du(t) && $h(Y, J), Y.placeholder = l, yh(Y, t, n);
      }
      function ou(t) {
        var n = Oe[t];
        return function(i, l) {
          if (i = Ut(i), l = l == null ? 0 : Je(K(l), 292), l && yf(i)) {
            var d = (he(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (he(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var k$ = Zr && 1 / cs(new Zr([, -0]))[1] == Le ? function(t) {
        return new Zr(t);
      } : Eu;
      function uh(t) {
        return function(n) {
          var i = Xe(n);
          return i == ut ? Nl(n) : i == Kt ? z1(n) : O1(n, t(n));
        };
      }
      function Cn(t, n, i, l, d, p, v, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new Mt(c);
        var x = l ? l.length : 0;
        if (x || (n &= ~(I | F), l = d = r), v = v === r ? v : Pe(K(v), 0), g = g === r ? g : K(g), x -= d ? d.length : 0, n & F) {
          var A = l, D = d;
          l = d = r;
        }
        var R = b ? r : au(t), q = [
          t,
          n,
          i,
          l,
          d,
          A,
          D,
          p,
          v,
          g
        ];
        if (R && q$(q, R), t = q[0], n = q[1], i = q[2], l = q[3], d = q[4], g = q[9] = q[9] === r ? b ? 0 : t.length : Pe(q[9] - x, 0), !g && n & (k | O) && (n &= ~(k | O)), !n || n == N)
          var z = S$(t, n, i);
        else
          n == k || n == O ? z = E$(t, n, g) : (n == I || n == (N | I)) && !d.length ? z = I$(t, n, i, l) : z = Ts.apply(r, q);
        var J = R ? qf : $h;
        return yh(J(z, q), t, n);
      }
      function ch(t, n, i, l) {
        return t === r || Qt(t, jr[i]) && !pe.call(l, i) ? n : t;
      }
      function dh(t, n, i, l, d, p) {
        return xe(t) && xe(n) && (p.set(n, t), ks(t, n, r, dh, p), p.delete(n)), t;
      }
      function x$(t) {
        return pi(t) ? r : t;
      }
      function fh(t, n, i, l, d, p) {
        var v = i & B, g = t.length, b = n.length;
        if (g != b && !(v && b > g))
          return !1;
        var x = p.get(t), A = p.get(n);
        if (x && A)
          return x == n && A == t;
        var D = -1, R = !0, q = i & M ? new wr() : r;
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
          if (q) {
            if (!kl(n, function(te, oe) {
              if (!ei(q, oe) && (z === te || d(z, te, i, l, p)))
                return q.push(oe);
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
      function A$(t, n, i, l, d, p, v) {
        switch (i) {
          case Wr:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Qo:
            return !(t.byteLength != n.byteLength || !p(new vs(t), new vs(n)));
          case be:
          case ee:
          case Zo:
            return Qt(+t, +n);
          case cr:
            return t.name == n.name && t.message == n.message;
          case Ko:
          case Jo:
            return t == n + "";
          case ut:
            var g = Nl;
          case Kt:
            var b = l & B;
            if (g || (g = cs), t.size != n.size && !b)
              return !1;
            var x = v.get(t);
            if (x)
              return x == n;
            l |= M, v.set(t, n);
            var A = fh(g(t), g(n), l, d, p, v);
            return v.delete(t), A;
          case os:
            if (ii)
              return ii.call(t) == ii.call(n);
        }
        return !1;
      }
      function B$(t, n, i, l, d, p) {
        var v = i & B, g = iu(t), b = g.length, x = iu(n), A = x.length;
        if (b != A && !v)
          return !1;
        for (var D = b; D--; ) {
          var R = g[D];
          if (!(v ? R in n : pe.call(n, R)))
            return !1;
        }
        var q = p.get(t), z = p.get(n);
        if (q && z)
          return q == n && z == t;
        var J = !0;
        p.set(t, n), p.set(n, t);
        for (var Y = v; ++D < b; ) {
          R = g[D];
          var te = t[R], oe = n[R];
          if (l)
            var St = v ? l(oe, te, R, n, t, p) : l(te, oe, R, t, n, p);
          if (!(St === r ? te === oe || d(te, oe, i, l, p) : St)) {
            J = !1;
            break;
          }
          Y || (Y = R == "constructor");
        }
        if (J && !Y) {
          var rt = t.constructor, Et = n.constructor;
          rt != Et && "constructor" in t && "constructor" in n && !(typeof rt == "function" && rt instanceof rt && typeof Et == "function" && Et instanceof Et) && (J = !1);
        }
        return p.delete(t), p.delete(n), J;
      }
      function Sn(t) {
        return hu(_h(t, r, Ih), t + "");
      }
      function iu(t) {
        return Tf(t, We, uu);
      }
      function su(t) {
        return Tf(t, ft, hh);
      }
      var au = Vs ? function(t) {
        return Vs.get(t);
      } : Eu;
      function Ms(t) {
        for (var n = t.name + "", i = Kr[n], l = pe.call(Kr, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function eo(t) {
        var n = pe.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function H() {
        var t = h.iteratee || Cu;
        return t = t === Cu ? Lf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Os(t, n) {
        var i = t.__data__;
        return R$(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function lu(t) {
        for (var n = We(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, vh(d)];
        }
        return n;
      }
      function _r(t, n) {
        var i = W1(t, n);
        return Nf(i) ? i : r;
      }
      function T$(t) {
        var n = pe.call(t, hr), i = t[hr];
        try {
          t[hr] = r;
          var l = !0;
        } catch {
        }
        var d = ps.call(t);
        return l && (n ? t[hr] = i : delete t[hr]), d;
      }
      var uu = Ml ? function(t) {
        return t == null ? [] : (t = ge(t), Rn(Ml(t), function(n) {
          return gf.call(t, n);
        }));
      } : Iu, hh = Ml ? function(t) {
        for (var n = []; t; )
          Fn(n, uu(t)), t = ms(t);
        return n;
      } : Iu, Xe = tt;
      (Ol && Xe(new Ol(new ArrayBuffer(1))) != Wr || ni && Xe(new ni()) != ut || Pl && Xe(Pl.resolve()) != kd || Zr && Xe(new Zr()) != Kt || ri && Xe(new ri()) != Xo) && (Xe = function(t) {
        var n = tt(t), i = n == $n ? t.constructor : r, l = i ? gr(i) : "";
        if (l)
          switch (l) {
            case p0:
              return Wr;
            case w0:
              return ut;
            case v0:
              return kd;
            case m0:
              return Kt;
            case _0:
              return Xo;
          }
        return n;
      });
      function D$(t, n, i) {
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
              n = Je(n, t + v);
              break;
            case "takeRight":
              t = Pe(t, n - v);
              break;
          }
        }
        return { start: t, end: n };
      }
      function N$(t) {
        var n = t.match(Fg);
        return n ? n[1].split(Ug) : [];
      }
      function ph(t, n, i) {
        n = zn(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var v = dn(n[l]);
          if (!(p = t != null && i(t, v)))
            break;
          t = t[v];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Hs(d) && En(v, d) && (Z(t) || $r(t)));
      }
      function L$(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && pe.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function wh(t) {
        return typeof t.constructor == "function" && !fi(t) ? Jr(ms(t)) : {};
      }
      function M$(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case Qo:
            return nu(t);
          case be:
          case ee:
            return new l(+t);
          case Wr:
            return g$(t, i);
          case ll:
          case ul:
          case cl:
          case dl:
          case fl:
          case hl:
          case pl:
          case wl:
          case vl:
            return Jf(t, i);
          case ut:
            return new l();
          case Zo:
          case Jo:
            return new l(t);
          case Ko:
            return $$(t);
          case Kt:
            return new l();
          case os:
            return y$(t);
        }
      }
      function O$(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(Rg, `{
/* [wrapped with ` + n + `] */
`);
      }
      function P$(t) {
        return Z(t) || $r(t) || !!($f && t && t[$f]);
      }
      function En(t, n) {
        var i = typeof t;
        return n = n == null ? Ue : n, !!n && (i == "number" || i != "symbol" && Kg.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function nt(t, n, i) {
        if (!xe(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? dt(i) && En(n, i.length) : l == "string" && n in i) ? Qt(i[n], t) : !1;
      }
      function cu(t, n) {
        if (Z(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Ct(t) ? !0 : Lg.test(t) || !Ng.test(t) || n != null && t in ge(n);
      }
      function R$(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function du(t) {
        var n = Ms(t), i = h[n];
        if (typeof i != "function" || !(n in re.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = au(i);
        return !!l && t === l[0];
      }
      function F$(t) {
        return !!vf && vf in t;
      }
      var U$ = fs ? In : ku;
      function fi(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || jr;
        return t === i;
      }
      function vh(t) {
        return t === t && !xe(t);
      }
      function mh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in ge(i));
        };
      }
      function W$(t) {
        var n = Ws(t, function(l) {
          return i.size === m && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function q$(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (N | S | P), v = l == P && i == k || l == P && i == W && t[7].length <= n[8] || l == (P | W) && n[7].length <= n[8] && i == k;
        if (!(p || v))
          return t;
        l & N && (t[2] = n[2], d |= i & N ? 0 : L);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? Qf(b, g, n[4]) : g, t[4] = b ? Un(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? eh(b, g, n[6]) : g, t[6] = b ? Un(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & P && (t[8] = t[8] == null ? n[8] : Je(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function H$(t) {
        var n = [];
        if (t != null)
          for (var i in ge(t))
            n.push(i);
        return n;
      }
      function z$(t) {
        return ps.call(t);
      }
      function _h(t, n, i) {
        return n = Pe(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = Pe(l.length - n, 0), v = C(p); ++d < p; )
            v[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(v), yt(t, this, g);
        };
      }
      function gh(t, n) {
        return n.length < 2 ? t : mr(t, Rt(n, 0, -1));
      }
      function Y$(t, n) {
        for (var i = t.length, l = Je(n.length, i), d = ct(t); l--; ) {
          var p = n[l];
          t[l] = En(p, i) ? d[p] : r;
        }
        return t;
      }
      function fu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var $h = Vh(qf), hi = a0 || function(t, n) {
        return Ye.setTimeout(t, n);
      }, hu = Vh(w$);
      function yh(t, n, i) {
        var l = n + "";
        return hu(t, O$(l, G$(N$(l), i)));
      }
      function Vh(t) {
        var n = 0, i = 0;
        return function() {
          var l = d0(), d = Ee - (l - i);
          if (i = l, d > 0) {
            if (++n >= Se)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Ps(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var p = Zl(i, d), v = t[p];
          t[p] = t[i], t[i] = v;
        }
        return t.length = n, t;
      }
      var bh = W$(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(Mg, function(i, l, d, p) {
          n.push(d ? p.replace(Hg, "$1") : l || i);
        }), n;
      });
      function dn(t) {
        if (typeof t == "string" || Ct(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function gr(t) {
        if (t != null) {
          try {
            return hs.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function G$(t, n) {
        return Lt(ns, function(i) {
          var l = "_." + i[0];
          n & i[1] && !ls(t, l) && t.push(l);
        }), t.sort();
      }
      function Ch(t) {
        if (t instanceof re)
          return t.clone();
        var n = new Ot(t.__wrapped__, t.__chain__);
        return n.__actions__ = ct(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function j$(t, n, i) {
        (i ? nt(t, n, i) : n === r) ? n = 1 : n = Pe(K(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, v = C($s(l / n)); d < l; )
          v[p++] = Rt(t, d, d += n);
        return v;
      }
      function Z$(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function K$() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return Fn(Z(i) ? ct(i) : [i], Ge(n, 1));
      }
      var J$ = Q(function(t, n) {
        return Be(t) ? ai(t, Ge(n, 1, Be, !0)) : [];
      }), X$ = Q(function(t, n) {
        var i = Ft(n);
        return Be(i) && (i = r), Be(t) ? ai(t, Ge(n, 1, Be, !0), H(i, 2)) : [];
      }), Q$ = Q(function(t, n) {
        var i = Ft(n);
        return Be(i) && (i = r), Be(t) ? ai(t, Ge(n, 1, Be, !0), r, i) : [];
      });
      function ey(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), Rt(t, n < 0 ? 0 : n, l)) : [];
      }
      function ty(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), n = l - n, Rt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function ny(t, n) {
        return t && t.length ? As(t, H(n, 3), !0, !0) : [];
      }
      function ry(t, n) {
        return t && t.length ? As(t, H(n, 3), !0) : [];
      }
      function oy(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && nt(t, n, i) && (i = 0, l = d), K0(t, n, i, l)) : [];
      }
      function Sh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : K(i);
        return d < 0 && (d = Pe(l + d, 0)), us(t, H(n, 3), d);
      }
      function Eh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = K(i), d = i < 0 ? Pe(l + d, 0) : Je(d, l - 1)), us(t, H(n, 3), d, !0);
      }
      function Ih(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ge(t, 1) : [];
      }
      function iy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ge(t, Le) : [];
      }
      function sy(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : K(n), Ge(t, n)) : [];
      }
      function ay(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function kh(t) {
        return t && t.length ? t[0] : r;
      }
      function ly(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : K(i);
        return d < 0 && (d = Pe(l + d, 0)), Hr(t, n, d);
      }
      function uy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Rt(t, 0, -1) : [];
      }
      var cy = Q(function(t) {
        var n = Ie(t, eu);
        return n.length && n[0] === t[0] ? Hl(n) : [];
      }), dy = Q(function(t) {
        var n = Ft(t), i = Ie(t, eu);
        return n === Ft(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Hl(i, H(n, 2)) : [];
      }), fy = Q(function(t) {
        var n = Ft(t), i = Ie(t, eu);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Hl(i, r, n) : [];
      });
      function hy(t, n) {
        return t == null ? "" : u0.call(t, n);
      }
      function Ft(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function py(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = K(i), d = d < 0 ? Pe(l + d, 0) : Je(d, l - 1)), n === n ? G1(t, n, d) : us(t, lf, d, !0);
      }
      function wy(t, n) {
        return t && t.length ? Rf(t, K(n)) : r;
      }
      var vy = Q(xh);
      function xh(t, n) {
        return t && t.length && n && n.length ? jl(t, n) : t;
      }
      function my(t, n, i) {
        return t && t.length && n && n.length ? jl(t, n, H(i, 2)) : t;
      }
      function _y(t, n, i) {
        return t && t.length && n && n.length ? jl(t, n, r, i) : t;
      }
      var gy = Sn(function(t, n) {
        var i = t == null ? 0 : t.length, l = Fl(t, n);
        return Wf(t, Ie(n, function(d) {
          return En(d, i) ? +d : d;
        }).sort(Xf)), l;
      });
      function $y(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = H(n, 3); ++l < p; ) {
          var v = t[l];
          n(v, l, t) && (i.push(v), d.push(l));
        }
        return Wf(t, d), i;
      }
      function pu(t) {
        return t == null ? t : h0.call(t);
      }
      function yy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && nt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : K(n), i = i === r ? l : K(i)), Rt(t, n, i)) : [];
      }
      function Vy(t, n) {
        return xs(t, n);
      }
      function by(t, n, i) {
        return Jl(t, n, H(i, 2));
      }
      function Cy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = xs(t, n);
          if (l < i && Qt(t[l], n))
            return l;
        }
        return -1;
      }
      function Sy(t, n) {
        return xs(t, n, !0);
      }
      function Ey(t, n, i) {
        return Jl(t, n, H(i, 2), !0);
      }
      function Iy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = xs(t, n, !0) - 1;
          if (Qt(t[l], n))
            return l;
        }
        return -1;
      }
      function ky(t) {
        return t && t.length ? Hf(t) : [];
      }
      function xy(t, n) {
        return t && t.length ? Hf(t, H(n, 2)) : [];
      }
      function Ay(t) {
        var n = t == null ? 0 : t.length;
        return n ? Rt(t, 1, n) : [];
      }
      function By(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : K(n), Rt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Ty(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : K(n), n = l - n, Rt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Dy(t, n) {
        return t && t.length ? As(t, H(n, 3), !1, !0) : [];
      }
      function Ny(t, n) {
        return t && t.length ? As(t, H(n, 3)) : [];
      }
      var Ly = Q(function(t) {
        return Hn(Ge(t, 1, Be, !0));
      }), My = Q(function(t) {
        var n = Ft(t);
        return Be(n) && (n = r), Hn(Ge(t, 1, Be, !0), H(n, 2));
      }), Oy = Q(function(t) {
        var n = Ft(t);
        return n = typeof n == "function" ? n : r, Hn(Ge(t, 1, Be, !0), r, n);
      });
      function Py(t) {
        return t && t.length ? Hn(t) : [];
      }
      function Ry(t, n) {
        return t && t.length ? Hn(t, H(n, 2)) : [];
      }
      function Fy(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Hn(t, r, n) : [];
      }
      function wu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Rn(t, function(i) {
          if (Be(i))
            return n = Pe(i.length, n), !0;
        }), Tl(n, function(i) {
          return Ie(t, xl(i));
        });
      }
      function Ah(t, n) {
        if (!(t && t.length))
          return [];
        var i = wu(t);
        return n == null ? i : Ie(i, function(l) {
          return yt(n, r, l);
        });
      }
      var Uy = Q(function(t, n) {
        return Be(t) ? ai(t, n) : [];
      }), Wy = Q(function(t) {
        return Ql(Rn(t, Be));
      }), qy = Q(function(t) {
        var n = Ft(t);
        return Be(n) && (n = r), Ql(Rn(t, Be), H(n, 2));
      }), Hy = Q(function(t) {
        var n = Ft(t);
        return n = typeof n == "function" ? n : r, Ql(Rn(t, Be), r, n);
      }), zy = Q(wu);
      function Yy(t, n) {
        return jf(t || [], n || [], si);
      }
      function Gy(t, n) {
        return jf(t || [], n || [], ci);
      }
      var jy = Q(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, Ah(t, i);
      });
      function Bh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function Zy(t, n) {
        return n(t), t;
      }
      function Rs(t, n) {
        return n(t);
      }
      var Ky = Sn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Fl(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof re) || !En(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Rs,
          args: [d],
          thisArg: r
        }), new Ot(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function Jy() {
        return Bh(this);
      }
      function Xy() {
        return new Ot(this.value(), this.__chain__);
      }
      function Qy() {
        this.__values__ === r && (this.__values__ = zh(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function eV() {
        return this;
      }
      function tV(t) {
        for (var n, i = this; i instanceof Cs; ) {
          var l = Ch(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function nV() {
        var t = this.__wrapped__;
        if (t instanceof re) {
          var n = t;
          return this.__actions__.length && (n = new re(this)), n = n.reverse(), n.__actions__.push({
            func: Rs,
            args: [pu],
            thisArg: r
          }), new Ot(n, this.__chain__);
        }
        return this.thru(pu);
      }
      function rV() {
        return Gf(this.__wrapped__, this.__actions__);
      }
      var oV = Bs(function(t, n, i) {
        pe.call(t, i) ? ++t[i] : bn(t, i, 1);
      });
      function iV(t, n, i) {
        var l = Z(t) ? sf : Z0;
        return i && nt(t, n, i) && (n = r), l(t, H(n, 3));
      }
      function sV(t, n) {
        var i = Z(t) ? Rn : Af;
        return i(t, H(n, 3));
      }
      var aV = oh(Sh), lV = oh(Eh);
      function uV(t, n) {
        return Ge(Fs(t, n), 1);
      }
      function cV(t, n) {
        return Ge(Fs(t, n), Le);
      }
      function dV(t, n, i) {
        return i = i === r ? 1 : K(i), Ge(Fs(t, n), i);
      }
      function Th(t, n) {
        var i = Z(t) ? Lt : qn;
        return i(t, H(n, 3));
      }
      function Dh(t, n) {
        var i = Z(t) ? A1 : xf;
        return i(t, H(n, 3));
      }
      var fV = Bs(function(t, n, i) {
        pe.call(t, i) ? t[i].push(n) : bn(t, i, [n]);
      });
      function hV(t, n, i, l) {
        t = dt(t) ? t : no(t), i = i && !l ? K(i) : 0;
        var d = t.length;
        return i < 0 && (i = Pe(d + i, 0)), zs(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Hr(t, n, i) > -1;
      }
      var pV = Q(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = dt(t) ? C(t.length) : [];
        return qn(t, function(v) {
          p[++l] = d ? yt(n, v, i) : li(v, n, i);
        }), p;
      }), wV = Bs(function(t, n, i) {
        bn(t, i, n);
      });
      function Fs(t, n) {
        var i = Z(t) ? Ie : Mf;
        return i(t, H(n, 3));
      }
      function vV(t, n, i, l) {
        return t == null ? [] : (Z(n) || (n = n == null ? [] : [n]), i = l ? r : i, Z(i) || (i = i == null ? [] : [i]), Ff(t, n, i));
      }
      var mV = Bs(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function _V(t, n, i) {
        var l = Z(t) ? Il : cf, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, qn);
      }
      function gV(t, n, i) {
        var l = Z(t) ? B1 : cf, d = arguments.length < 3;
        return l(t, H(n, 4), i, d, xf);
      }
      function $V(t, n) {
        var i = Z(t) ? Rn : Af;
        return i(t, qs(H(n, 3)));
      }
      function yV(t) {
        var n = Z(t) ? Sf : h$;
        return n(t);
      }
      function VV(t, n, i) {
        (i ? nt(t, n, i) : n === r) ? n = 1 : n = K(n);
        var l = Z(t) ? H0 : p$;
        return l(t, n);
      }
      function bV(t) {
        var n = Z(t) ? z0 : v$;
        return n(t);
      }
      function CV(t) {
        if (t == null)
          return 0;
        if (dt(t))
          return zs(t) ? Yr(t) : t.length;
        var n = Xe(t);
        return n == ut || n == Kt ? t.size : Yl(t).length;
      }
      function SV(t, n, i) {
        var l = Z(t) ? kl : m$;
        return i && nt(t, n, i) && (n = r), l(t, H(n, 3));
      }
      var EV = Q(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && nt(t, n[0], n[1]) ? n = [] : i > 2 && nt(n[0], n[1], n[2]) && (n = [n[0]]), Ff(t, Ge(n, 1), []);
      }), Us = s0 || function() {
        return Ye.Date.now();
      };
      function IV(t, n) {
        if (typeof n != "function")
          throw new Mt(c);
        return t = K(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Nh(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, Cn(t, P, r, r, r, r, n);
      }
      function Lh(t, n) {
        var i;
        if (typeof n != "function")
          throw new Mt(c);
        return t = K(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var vu = Q(function(t, n, i) {
        var l = N;
        if (i.length) {
          var d = Un(i, eo(vu));
          l |= I;
        }
        return Cn(t, l, n, i, d);
      }), Mh = Q(function(t, n, i) {
        var l = N | S;
        if (i.length) {
          var d = Un(i, eo(Mh));
          l |= I;
        }
        return Cn(n, l, t, i, d);
      });
      function Oh(t, n, i) {
        n = i ? r : n;
        var l = Cn(t, k, r, r, r, r, r, n);
        return l.placeholder = Oh.placeholder, l;
      }
      function Ph(t, n, i) {
        n = i ? r : n;
        var l = Cn(t, O, r, r, r, r, r, n);
        return l.placeholder = Ph.placeholder, l;
      }
      function Rh(t, n, i) {
        var l, d, p, v, g, b, x = 0, A = !1, D = !1, R = !0;
        if (typeof t != "function")
          throw new Mt(c);
        n = Ut(n) || 0, xe(i) && (A = !!i.leading, D = "maxWait" in i, p = D ? Pe(Ut(i.maxWait) || 0, n) : p, R = "trailing" in i ? !!i.trailing : R);
        function q(Te) {
          var en = l, xn = d;
          return l = d = r, x = Te, v = t.apply(xn, en), v;
        }
        function z(Te) {
          return x = Te, g = hi(te, n), A ? q(Te) : v;
        }
        function J(Te) {
          var en = Te - b, xn = Te - x, op = n - en;
          return D ? Je(op, p - xn) : op;
        }
        function Y(Te) {
          var en = Te - b, xn = Te - x;
          return b === r || en >= n || en < 0 || D && xn >= p;
        }
        function te() {
          var Te = Us();
          if (Y(Te))
            return oe(Te);
          g = hi(te, J(Te));
        }
        function oe(Te) {
          return g = r, R && l ? q(Te) : (l = d = r, v);
        }
        function St() {
          g !== r && Zf(g), x = 0, l = b = d = g = r;
        }
        function rt() {
          return g === r ? v : oe(Us());
        }
        function Et() {
          var Te = Us(), en = Y(Te);
          if (l = arguments, d = this, b = Te, en) {
            if (g === r)
              return z(b);
            if (D)
              return Zf(g), g = hi(te, n), q(b);
          }
          return g === r && (g = hi(te, n)), v;
        }
        return Et.cancel = St, Et.flush = rt, Et;
      }
      var kV = Q(function(t, n) {
        return kf(t, 1, n);
      }), xV = Q(function(t, n, i) {
        return kf(t, Ut(n) || 0, i);
      });
      function AV(t) {
        return Cn(t, $e);
      }
      function Ws(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Mt(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var v = t.apply(this, l);
          return i.cache = p.set(d, v) || p, v;
        };
        return i.cache = new (Ws.Cache || Vn)(), i;
      }
      Ws.Cache = Vn;
      function qs(t) {
        if (typeof t != "function")
          throw new Mt(c);
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
      function BV(t) {
        return Lh(2, t);
      }
      var TV = _$(function(t, n) {
        n = n.length == 1 && Z(n[0]) ? Ie(n[0], Vt(H())) : Ie(Ge(n, 1), Vt(H()));
        var i = n.length;
        return Q(function(l) {
          for (var d = -1, p = Je(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return yt(t, this, l);
        });
      }), mu = Q(function(t, n) {
        var i = Un(n, eo(mu));
        return Cn(t, I, r, n, i);
      }), Fh = Q(function(t, n) {
        var i = Un(n, eo(Fh));
        return Cn(t, F, r, n, i);
      }), DV = Sn(function(t, n) {
        return Cn(t, W, r, r, r, n);
      });
      function NV(t, n) {
        if (typeof t != "function")
          throw new Mt(c);
        return n = n === r ? n : K(n), Q(t, n);
      }
      function LV(t, n) {
        if (typeof t != "function")
          throw new Mt(c);
        return n = n == null ? 0 : Pe(K(n), 0), Q(function(i) {
          var l = i[n], d = Yn(i, 0, n);
          return l && Fn(d, l), yt(t, this, d);
        });
      }
      function MV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Mt(c);
        return xe(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), Rh(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function OV(t) {
        return Nh(t, 1);
      }
      function PV(t, n) {
        return mu(tu(n), t);
      }
      function RV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return Z(t) ? t : [t];
      }
      function FV(t) {
        return Pt(t, T);
      }
      function UV(t, n) {
        return n = typeof n == "function" ? n : r, Pt(t, T, n);
      }
      function WV(t) {
        return Pt(t, $ | T);
      }
      function qV(t, n) {
        return n = typeof n == "function" ? n : r, Pt(t, $ | T, n);
      }
      function HV(t, n) {
        return n == null || If(t, n, We(n));
      }
      function Qt(t, n) {
        return t === n || t !== t && n !== n;
      }
      var zV = Ls(ql), YV = Ls(function(t, n) {
        return t >= n;
      }), $r = Df(function() {
        return arguments;
      }()) ? Df : function(t) {
        return Ae(t) && pe.call(t, "callee") && !gf.call(t, "callee");
      }, Z = C.isArray, GV = Qd ? Vt(Qd) : t$;
      function dt(t) {
        return t != null && Hs(t.length) && !In(t);
      }
      function Be(t) {
        return Ae(t) && dt(t);
      }
      function jV(t) {
        return t === !0 || t === !1 || Ae(t) && tt(t) == be;
      }
      var Gn = l0 || ku, ZV = ef ? Vt(ef) : n$;
      function KV(t) {
        return Ae(t) && t.nodeType === 1 && !pi(t);
      }
      function JV(t) {
        if (t == null)
          return !0;
        if (dt(t) && (Z(t) || typeof t == "string" || typeof t.splice == "function" || Gn(t) || to(t) || $r(t)))
          return !t.length;
        var n = Xe(t);
        if (n == ut || n == Kt)
          return !t.size;
        if (fi(t))
          return !Yl(t).length;
        for (var i in t)
          if (pe.call(t, i))
            return !1;
        return !0;
      }
      function XV(t, n) {
        return ui(t, n);
      }
      function QV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? ui(t, n, r, i) : !!l;
      }
      function _u(t) {
        if (!Ae(t))
          return !1;
        var n = tt(t);
        return n == cr || n == _e || typeof t.message == "string" && typeof t.name == "string" && !pi(t);
      }
      function eb(t) {
        return typeof t == "number" && yf(t);
      }
      function In(t) {
        if (!xe(t))
          return !1;
        var n = tt(t);
        return n == dr || n == jo || n == rs || n == Cg;
      }
      function Uh(t) {
        return typeof t == "number" && t == K(t);
      }
      function Hs(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ue;
      }
      function xe(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Ae(t) {
        return t != null && typeof t == "object";
      }
      var Wh = tf ? Vt(tf) : o$;
      function tb(t, n) {
        return t === n || zl(t, n, lu(n));
      }
      function nb(t, n, i) {
        return i = typeof i == "function" ? i : r, zl(t, n, lu(n), i);
      }
      function rb(t) {
        return qh(t) && t != +t;
      }
      function ob(t) {
        if (U$(t))
          throw new j(u);
        return Nf(t);
      }
      function ib(t) {
        return t === null;
      }
      function sb(t) {
        return t == null;
      }
      function qh(t) {
        return typeof t == "number" || Ae(t) && tt(t) == Zo;
      }
      function pi(t) {
        if (!Ae(t) || tt(t) != $n)
          return !1;
        var n = ms(t);
        if (n === null)
          return !0;
        var i = pe.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && hs.call(i) == n0;
      }
      var gu = nf ? Vt(nf) : i$;
      function ab(t) {
        return Uh(t) && t >= -Ue && t <= Ue;
      }
      var Hh = rf ? Vt(rf) : s$;
      function zs(t) {
        return typeof t == "string" || !Z(t) && Ae(t) && tt(t) == Jo;
      }
      function Ct(t) {
        return typeof t == "symbol" || Ae(t) && tt(t) == os;
      }
      var to = of ? Vt(of) : a$;
      function lb(t) {
        return t === r;
      }
      function ub(t) {
        return Ae(t) && Xe(t) == Xo;
      }
      function cb(t) {
        return Ae(t) && tt(t) == Eg;
      }
      var db = Ls(Gl), fb = Ls(function(t, n) {
        return t <= n;
      });
      function zh(t) {
        if (!t)
          return [];
        if (dt(t))
          return zs(t) ? Jt(t) : ct(t);
        if (ti && t[ti])
          return H1(t[ti]());
        var n = Xe(t), i = n == ut ? Nl : n == Kt ? cs : no;
        return i(t);
      }
      function kn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Ut(t), t === Le || t === -Le) {
          var n = t < 0 ? -1 : 1;
          return n * Pn;
        }
        return t === t ? t : 0;
      }
      function K(t) {
        var n = kn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Yh(t) {
        return t ? vr(K(t), 0, $t) : 0;
      }
      function Ut(t) {
        if (typeof t == "number")
          return t;
        if (Ct(t))
          return lr;
        if (xe(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = xe(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = df(t);
        var i = Gg.test(t);
        return i || Zg.test(t) ? I1(t.slice(2), i ? 2 : 8) : Yg.test(t) ? lr : +t;
      }
      function Gh(t) {
        return cn(t, ft(t));
      }
      function hb(t) {
        return t ? vr(K(t), -Ue, Ue) : t === 0 ? t : 0;
      }
      function he(t) {
        return t == null ? "" : bt(t);
      }
      var pb = Xr(function(t, n) {
        if (fi(n) || dt(n)) {
          cn(n, We(n), t);
          return;
        }
        for (var i in n)
          pe.call(n, i) && si(t, i, n[i]);
      }), jh = Xr(function(t, n) {
        cn(n, ft(n), t);
      }), Ys = Xr(function(t, n, i, l) {
        cn(n, ft(n), t, l);
      }), wb = Xr(function(t, n, i, l) {
        cn(n, We(n), t, l);
      }), vb = Sn(Fl);
      function mb(t, n) {
        var i = Jr(t);
        return n == null ? i : Ef(i, n);
      }
      var _b = Q(function(t, n) {
        t = ge(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && nt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], v = ft(p), g = -1, b = v.length; ++g < b; ) {
            var x = v[g], A = t[x];
            (A === r || Qt(A, jr[x]) && !pe.call(t, x)) && (t[x] = p[x]);
          }
        return t;
      }), gb = Q(function(t) {
        return t.push(r, dh), yt(Zh, r, t);
      });
      function $b(t, n) {
        return af(t, H(n, 3), un);
      }
      function yb(t, n) {
        return af(t, H(n, 3), Wl);
      }
      function Vb(t, n) {
        return t == null ? t : Ul(t, H(n, 3), ft);
      }
      function bb(t, n) {
        return t == null ? t : Bf(t, H(n, 3), ft);
      }
      function Cb(t, n) {
        return t && un(t, H(n, 3));
      }
      function Sb(t, n) {
        return t && Wl(t, H(n, 3));
      }
      function Eb(t) {
        return t == null ? [] : Is(t, We(t));
      }
      function Ib(t) {
        return t == null ? [] : Is(t, ft(t));
      }
      function $u(t, n, i) {
        var l = t == null ? r : mr(t, n);
        return l === r ? i : l;
      }
      function kb(t, n) {
        return t != null && ph(t, n, J0);
      }
      function yu(t, n) {
        return t != null && ph(t, n, X0);
      }
      var xb = sh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = ps.call(n)), t[n] = i;
      }, bu(ht)), Ab = sh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = ps.call(n)), pe.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, H), Bb = Q(li);
      function We(t) {
        return dt(t) ? Cf(t) : Yl(t);
      }
      function ft(t) {
        return dt(t) ? Cf(t, !0) : l$(t);
      }
      function Tb(t, n) {
        var i = {};
        return n = H(n, 3), un(t, function(l, d, p) {
          bn(i, n(l, d, p), l);
        }), i;
      }
      function Db(t, n) {
        var i = {};
        return n = H(n, 3), un(t, function(l, d, p) {
          bn(i, d, n(l, d, p));
        }), i;
      }
      var Nb = Xr(function(t, n, i) {
        ks(t, n, i);
      }), Zh = Xr(function(t, n, i, l) {
        ks(t, n, i, l);
      }), Lb = Sn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ie(n, function(p) {
          return p = zn(p, t), l || (l = p.length > 1), p;
        }), cn(t, su(t), i), l && (i = Pt(i, $ | y | T, x$));
        for (var d = n.length; d--; )
          Xl(i, n[d]);
        return i;
      });
      function Mb(t, n) {
        return Kh(t, qs(H(n)));
      }
      var Ob = Sn(function(t, n) {
        return t == null ? {} : c$(t, n);
      });
      function Kh(t, n) {
        if (t == null)
          return {};
        var i = Ie(su(t), function(l) {
          return [l];
        });
        return n = H(n), Uf(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function Pb(t, n, i) {
        n = zn(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[dn(n[l])];
          p === r && (l = d, p = i), t = In(p) ? p.call(t) : p;
        }
        return t;
      }
      function Rb(t, n, i) {
        return t == null ? t : ci(t, n, i);
      }
      function Fb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : ci(t, n, i, l);
      }
      var Jh = uh(We), Xh = uh(ft);
      function Ub(t, n, i) {
        var l = Z(t), d = l || Gn(t) || to(t);
        if (n = H(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : xe(t) ? i = In(p) ? Jr(ms(t)) : {} : i = {};
        }
        return (d ? Lt : un)(t, function(v, g, b) {
          return n(i, v, g, b);
        }), i;
      }
      function Wb(t, n) {
        return t == null ? !0 : Xl(t, n);
      }
      function qb(t, n, i) {
        return t == null ? t : Yf(t, n, tu(i));
      }
      function Hb(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Yf(t, n, tu(i), l);
      }
      function no(t) {
        return t == null ? [] : Dl(t, We(t));
      }
      function zb(t) {
        return t == null ? [] : Dl(t, ft(t));
      }
      function Yb(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = Ut(i), i = i === i ? i : 0), n !== r && (n = Ut(n), n = n === n ? n : 0), vr(Ut(t), n, i);
      }
      function Gb(t, n, i) {
        return n = kn(n), i === r ? (i = n, n = 0) : i = kn(i), t = Ut(t), Q0(t, n, i);
      }
      function jb(t, n, i) {
        if (i && typeof i != "boolean" && nt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = kn(t), n === r ? (n = t, t = 0) : n = kn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Vf();
          return Je(t + d * (n - t + E1("1e-" + ((d + "").length - 1))), n);
        }
        return Zl(t, n);
      }
      var Zb = Qr(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Qh(n) : n);
      });
      function Qh(t) {
        return Vu(he(t).toLowerCase());
      }
      function ep(t) {
        return t = he(t), t && t.replace(Jg, R1).replace(v1, "");
      }
      function Kb(t, n, i) {
        t = he(t), n = bt(n);
        var l = t.length;
        i = i === r ? l : vr(K(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function Jb(t) {
        return t = he(t), t && Bg.test(t) ? t.replace(Ad, F1) : t;
      }
      function Xb(t) {
        return t = he(t), t && Og.test(t) ? t.replace(ml, "\\$&") : t;
      }
      var Qb = Qr(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), eC = Qr(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), tC = rh("toLowerCase");
      function nC(t, n, i) {
        t = he(t), n = K(n);
        var l = n ? Yr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Ns(ys(d), i) + t + Ns($s(d), i);
      }
      function rC(t, n, i) {
        t = he(t), n = K(n);
        var l = n ? Yr(t) : 0;
        return n && l < n ? t + Ns(n - l, i) : t;
      }
      function oC(t, n, i) {
        t = he(t), n = K(n);
        var l = n ? Yr(t) : 0;
        return n && l < n ? Ns(n - l, i) + t : t;
      }
      function iC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), f0(he(t).replace(_l, ""), n || 0);
      }
      function sC(t, n, i) {
        return (i ? nt(t, n, i) : n === r) ? n = 1 : n = K(n), Kl(he(t), n);
      }
      function aC() {
        var t = arguments, n = he(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var lC = Qr(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function uC(t, n, i) {
        return i && typeof i != "number" && nt(t, n, i) && (n = i = r), i = i === r ? $t : i >>> 0, i ? (t = he(t), t && (typeof n == "string" || n != null && !gu(n)) && (n = bt(n), !n && zr(t)) ? Yn(Jt(t), 0, i) : t.split(n, i)) : [];
      }
      var cC = Qr(function(t, n, i) {
        return t + (i ? " " : "") + Vu(n);
      });
      function dC(t, n, i) {
        return t = he(t), i = i == null ? 0 : vr(K(i), 0, t.length), n = bt(n), t.slice(i, i + n.length) == n;
      }
      function fC(t, n, i) {
        var l = h.templateSettings;
        i && nt(t, n, i) && (n = r), t = he(t), n = Ys({}, n, l, ch);
        var d = Ys({}, n.imports, l.imports, ch), p = We(d), v = Dl(d, p), g, b, x = 0, A = n.interpolate || is, D = "__p += '", R = Ll(
          (n.escape || is).source + "|" + A.source + "|" + (A === Bd ? zg : is).source + "|" + (n.evaluate || is).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (pe.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++y1 + "]") + `
`;
        t.replace(R, function(Y, te, oe, St, rt, Et) {
          return oe || (oe = St), D += t.slice(x, Et).replace(Xg, U1), te && (g = !0, D += `' +
__e(` + te + `) +
'`), rt && (b = !0, D += `';
` + rt + `;
__p += '`), oe && (D += `' +
((__t = (` + oe + `)) == null ? '' : __t) +
'`), x = Et + Y.length, Y;
        }), D += `';
`;
        var z = pe.call(n, "variable") && n.variable;
        if (!z)
          D = `with (obj) {
` + D + `
}
`;
        else if (qg.test(z))
          throw new j(f);
        D = (b ? D.replace(Ig, "") : D).replace(kg, "$1").replace(xg, "$1;"), D = "function(" + (z || "obj") + `) {
` + (z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + D + `return __p
}`;
        var J = np(function() {
          return ae(p, q + "return " + D).apply(r, v);
        });
        if (J.source = D, _u(J))
          throw J;
        return J;
      }
      function hC(t) {
        return he(t).toLowerCase();
      }
      function pC(t) {
        return he(t).toUpperCase();
      }
      function wC(t, n, i) {
        if (t = he(t), t && (i || n === r))
          return df(t);
        if (!t || !(n = bt(n)))
          return t;
        var l = Jt(t), d = Jt(n), p = ff(l, d), v = hf(l, d) + 1;
        return Yn(l, p, v).join("");
      }
      function vC(t, n, i) {
        if (t = he(t), t && (i || n === r))
          return t.slice(0, wf(t) + 1);
        if (!t || !(n = bt(n)))
          return t;
        var l = Jt(t), d = hf(l, Jt(n)) + 1;
        return Yn(l, 0, d).join("");
      }
      function mC(t, n, i) {
        if (t = he(t), t && (i || n === r))
          return t.replace(_l, "");
        if (!t || !(n = bt(n)))
          return t;
        var l = Jt(t), d = ff(l, Jt(n));
        return Yn(l, d).join("");
      }
      function _C(t, n) {
        var i = de, l = me;
        if (xe(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? K(n.length) : i, l = "omission" in n ? bt(n.omission) : l;
        }
        t = he(t);
        var p = t.length;
        if (zr(t)) {
          var v = Jt(t);
          p = v.length;
        }
        if (i >= p)
          return t;
        var g = i - Yr(l);
        if (g < 1)
          return l;
        var b = v ? Yn(v, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return b + l;
        if (v && (g += b.length - g), gu(d)) {
          if (t.slice(g).search(d)) {
            var x, A = b;
            for (d.global || (d = Ll(d.source, he(Td.exec(d)) + "g")), d.lastIndex = 0; x = d.exec(A); )
              var D = x.index;
            b = b.slice(0, D === r ? g : D);
          }
        } else if (t.indexOf(bt(d), g) != g) {
          var R = b.lastIndexOf(d);
          R > -1 && (b = b.slice(0, R));
        }
        return b + l;
      }
      function gC(t) {
        return t = he(t), t && Ag.test(t) ? t.replace(xd, j1) : t;
      }
      var $C = Qr(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), Vu = rh("toUpperCase");
      function tp(t, n, i) {
        return t = he(t), n = i ? r : n, n === r ? q1(t) ? J1(t) : N1(t) : t.match(n) || [];
      }
      var np = Q(function(t, n) {
        try {
          return yt(t, r, n);
        } catch (i) {
          return _u(i) ? i : new j(i);
        }
      }), yC = Sn(function(t, n) {
        return Lt(n, function(i) {
          i = dn(i), bn(t, i, vu(t[i], t));
        }), t;
      });
      function VC(t) {
        var n = t == null ? 0 : t.length, i = H();
        return t = n ? Ie(t, function(l) {
          if (typeof l[1] != "function")
            throw new Mt(c);
          return [i(l[0]), l[1]];
        }) : [], Q(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (yt(p[0], this, l))
              return yt(p[1], this, l);
          }
        });
      }
      function bC(t) {
        return j0(Pt(t, $));
      }
      function bu(t) {
        return function() {
          return t;
        };
      }
      function CC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var SC = ih(), EC = ih(!0);
      function ht(t) {
        return t;
      }
      function Cu(t) {
        return Lf(typeof t == "function" ? t : Pt(t, $));
      }
      function IC(t) {
        return Of(Pt(t, $));
      }
      function kC(t, n) {
        return Pf(t, Pt(n, $));
      }
      var xC = Q(function(t, n) {
        return function(i) {
          return li(i, t, n);
        };
      }), AC = Q(function(t, n) {
        return function(i) {
          return li(t, i, n);
        };
      });
      function Su(t, n, i) {
        var l = We(n), d = Is(n, l);
        i == null && !(xe(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Is(n, We(n)));
        var p = !(xe(i) && "chain" in i) || !!i.chain, v = In(t);
        return Lt(d, function(g) {
          var b = n[g];
          t[g] = b, v && (t.prototype[g] = function() {
            var x = this.__chain__;
            if (p || x) {
              var A = t(this.__wrapped__), D = A.__actions__ = ct(this.__actions__);
              return D.push({ func: b, args: arguments, thisArg: t }), A.__chain__ = x, A;
            }
            return b.apply(t, Fn([this.value()], arguments));
          });
        }), t;
      }
      function BC() {
        return Ye._ === this && (Ye._ = r0), this;
      }
      function Eu() {
      }
      function TC(t) {
        return t = K(t), Q(function(n) {
          return Rf(n, t);
        });
      }
      var DC = ru(Ie), NC = ru(sf), LC = ru(kl);
      function rp(t) {
        return cu(t) ? xl(dn(t)) : d$(t);
      }
      function MC(t) {
        return function(n) {
          return t == null ? r : mr(t, n);
        };
      }
      var OC = ah(), PC = ah(!0);
      function Iu() {
        return [];
      }
      function ku() {
        return !1;
      }
      function RC() {
        return {};
      }
      function FC() {
        return "";
      }
      function UC() {
        return !0;
      }
      function WC(t, n) {
        if (t = K(t), t < 1 || t > Ue)
          return [];
        var i = $t, l = Je(t, $t);
        n = H(n), t -= $t;
        for (var d = Tl(l, n); ++i < t; )
          n(i);
        return d;
      }
      function qC(t) {
        return Z(t) ? Ie(t, dn) : Ct(t) ? [t] : ct(bh(he(t)));
      }
      function HC(t) {
        var n = ++t0;
        return he(t) + n;
      }
      var zC = Ds(function(t, n) {
        return t + n;
      }, 0), YC = ou("ceil"), GC = Ds(function(t, n) {
        return t / n;
      }, 1), jC = ou("floor");
      function ZC(t) {
        return t && t.length ? Es(t, ht, ql) : r;
      }
      function KC(t, n) {
        return t && t.length ? Es(t, H(n, 2), ql) : r;
      }
      function JC(t) {
        return uf(t, ht);
      }
      function XC(t, n) {
        return uf(t, H(n, 2));
      }
      function QC(t) {
        return t && t.length ? Es(t, ht, Gl) : r;
      }
      function eS(t, n) {
        return t && t.length ? Es(t, H(n, 2), Gl) : r;
      }
      var tS = Ds(function(t, n) {
        return t * n;
      }, 1), nS = ou("round"), rS = Ds(function(t, n) {
        return t - n;
      }, 0);
      function oS(t) {
        return t && t.length ? Bl(t, ht) : 0;
      }
      function iS(t, n) {
        return t && t.length ? Bl(t, H(n, 2)) : 0;
      }
      return h.after = IV, h.ary = Nh, h.assign = pb, h.assignIn = jh, h.assignInWith = Ys, h.assignWith = wb, h.at = vb, h.before = Lh, h.bind = vu, h.bindAll = yC, h.bindKey = Mh, h.castArray = RV, h.chain = Bh, h.chunk = j$, h.compact = Z$, h.concat = K$, h.cond = VC, h.conforms = bC, h.constant = bu, h.countBy = oV, h.create = mb, h.curry = Oh, h.curryRight = Ph, h.debounce = Rh, h.defaults = _b, h.defaultsDeep = gb, h.defer = kV, h.delay = xV, h.difference = J$, h.differenceBy = X$, h.differenceWith = Q$, h.drop = ey, h.dropRight = ty, h.dropRightWhile = ny, h.dropWhile = ry, h.fill = oy, h.filter = sV, h.flatMap = uV, h.flatMapDeep = cV, h.flatMapDepth = dV, h.flatten = Ih, h.flattenDeep = iy, h.flattenDepth = sy, h.flip = AV, h.flow = SC, h.flowRight = EC, h.fromPairs = ay, h.functions = Eb, h.functionsIn = Ib, h.groupBy = fV, h.initial = uy, h.intersection = cy, h.intersectionBy = dy, h.intersectionWith = fy, h.invert = xb, h.invertBy = Ab, h.invokeMap = pV, h.iteratee = Cu, h.keyBy = wV, h.keys = We, h.keysIn = ft, h.map = Fs, h.mapKeys = Tb, h.mapValues = Db, h.matches = IC, h.matchesProperty = kC, h.memoize = Ws, h.merge = Nb, h.mergeWith = Zh, h.method = xC, h.methodOf = AC, h.mixin = Su, h.negate = qs, h.nthArg = TC, h.omit = Lb, h.omitBy = Mb, h.once = BV, h.orderBy = vV, h.over = DC, h.overArgs = TV, h.overEvery = NC, h.overSome = LC, h.partial = mu, h.partialRight = Fh, h.partition = mV, h.pick = Ob, h.pickBy = Kh, h.property = rp, h.propertyOf = MC, h.pull = vy, h.pullAll = xh, h.pullAllBy = my, h.pullAllWith = _y, h.pullAt = gy, h.range = OC, h.rangeRight = PC, h.rearg = DV, h.reject = $V, h.remove = $y, h.rest = NV, h.reverse = pu, h.sampleSize = VV, h.set = Rb, h.setWith = Fb, h.shuffle = bV, h.slice = yy, h.sortBy = EV, h.sortedUniq = ky, h.sortedUniqBy = xy, h.split = uC, h.spread = LV, h.tail = Ay, h.take = By, h.takeRight = Ty, h.takeRightWhile = Dy, h.takeWhile = Ny, h.tap = Zy, h.throttle = MV, h.thru = Rs, h.toArray = zh, h.toPairs = Jh, h.toPairsIn = Xh, h.toPath = qC, h.toPlainObject = Gh, h.transform = Ub, h.unary = OV, h.union = Ly, h.unionBy = My, h.unionWith = Oy, h.uniq = Py, h.uniqBy = Ry, h.uniqWith = Fy, h.unset = Wb, h.unzip = wu, h.unzipWith = Ah, h.update = qb, h.updateWith = Hb, h.values = no, h.valuesIn = zb, h.without = Uy, h.words = tp, h.wrap = PV, h.xor = Wy, h.xorBy = qy, h.xorWith = Hy, h.zip = zy, h.zipObject = Yy, h.zipObjectDeep = Gy, h.zipWith = jy, h.entries = Jh, h.entriesIn = Xh, h.extend = jh, h.extendWith = Ys, Su(h, h), h.add = zC, h.attempt = np, h.camelCase = Zb, h.capitalize = Qh, h.ceil = YC, h.clamp = Yb, h.clone = FV, h.cloneDeep = WV, h.cloneDeepWith = qV, h.cloneWith = UV, h.conformsTo = HV, h.deburr = ep, h.defaultTo = CC, h.divide = GC, h.endsWith = Kb, h.eq = Qt, h.escape = Jb, h.escapeRegExp = Xb, h.every = iV, h.find = aV, h.findIndex = Sh, h.findKey = $b, h.findLast = lV, h.findLastIndex = Eh, h.findLastKey = yb, h.floor = jC, h.forEach = Th, h.forEachRight = Dh, h.forIn = Vb, h.forInRight = bb, h.forOwn = Cb, h.forOwnRight = Sb, h.get = $u, h.gt = zV, h.gte = YV, h.has = kb, h.hasIn = yu, h.head = kh, h.identity = ht, h.includes = hV, h.indexOf = ly, h.inRange = Gb, h.invoke = Bb, h.isArguments = $r, h.isArray = Z, h.isArrayBuffer = GV, h.isArrayLike = dt, h.isArrayLikeObject = Be, h.isBoolean = jV, h.isBuffer = Gn, h.isDate = ZV, h.isElement = KV, h.isEmpty = JV, h.isEqual = XV, h.isEqualWith = QV, h.isError = _u, h.isFinite = eb, h.isFunction = In, h.isInteger = Uh, h.isLength = Hs, h.isMap = Wh, h.isMatch = tb, h.isMatchWith = nb, h.isNaN = rb, h.isNative = ob, h.isNil = sb, h.isNull = ib, h.isNumber = qh, h.isObject = xe, h.isObjectLike = Ae, h.isPlainObject = pi, h.isRegExp = gu, h.isSafeInteger = ab, h.isSet = Hh, h.isString = zs, h.isSymbol = Ct, h.isTypedArray = to, h.isUndefined = lb, h.isWeakMap = ub, h.isWeakSet = cb, h.join = hy, h.kebabCase = Qb, h.last = Ft, h.lastIndexOf = py, h.lowerCase = eC, h.lowerFirst = tC, h.lt = db, h.lte = fb, h.max = ZC, h.maxBy = KC, h.mean = JC, h.meanBy = XC, h.min = QC, h.minBy = eS, h.stubArray = Iu, h.stubFalse = ku, h.stubObject = RC, h.stubString = FC, h.stubTrue = UC, h.multiply = tS, h.nth = wy, h.noConflict = BC, h.noop = Eu, h.now = Us, h.pad = nC, h.padEnd = rC, h.padStart = oC, h.parseInt = iC, h.random = jb, h.reduce = _V, h.reduceRight = gV, h.repeat = sC, h.replace = aC, h.result = Pb, h.round = nS, h.runInContext = V, h.sample = yV, h.size = CV, h.snakeCase = lC, h.some = SV, h.sortedIndex = Vy, h.sortedIndexBy = by, h.sortedIndexOf = Cy, h.sortedLastIndex = Sy, h.sortedLastIndexBy = Ey, h.sortedLastIndexOf = Iy, h.startCase = cC, h.startsWith = dC, h.subtract = rS, h.sum = oS, h.sumBy = iS, h.template = fC, h.times = WC, h.toFinite = kn, h.toInteger = K, h.toLength = Yh, h.toLower = hC, h.toNumber = Ut, h.toSafeInteger = hb, h.toString = he, h.toUpper = pC, h.trim = wC, h.trimEnd = vC, h.trimStart = mC, h.truncate = _C, h.unescape = gC, h.uniqueId = HC, h.upperCase = $C, h.upperFirst = Vu, h.each = Th, h.eachRight = Dh, h.first = kh, Su(h, function() {
        var t = {};
        return un(h, function(n, i) {
          pe.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, Lt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Lt(["drop", "take"], function(t, n) {
        re.prototype[t] = function(i) {
          i = i === r ? 1 : Pe(K(i), 0);
          var l = this.__filtered__ && !n ? new re(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Je(i, l.__takeCount__) : l.__views__.push({
            size: Je(i, $t),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, re.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Lt(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == ke || i == Ne;
        re.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: H(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Lt(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        re.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Lt(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        re.prototype[t] = function() {
          return this.__filtered__ ? new re(this) : this[i](1);
        };
      }), re.prototype.compact = function() {
        return this.filter(ht);
      }, re.prototype.find = function(t) {
        return this.filter(t).head();
      }, re.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, re.prototype.invokeMap = Q(function(t, n) {
        return typeof t == "function" ? new re(this) : this.map(function(i) {
          return li(i, t, n);
        });
      }), re.prototype.reject = function(t) {
        return this.filter(qs(H(t)));
      }, re.prototype.slice = function(t, n) {
        t = K(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new re(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = K(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, re.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, re.prototype.toArray = function() {
        return this.take($t);
      }, un(re.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var v = this.__wrapped__, g = l ? [1] : arguments, b = v instanceof re, x = g[0], A = b || Z(v), D = function(te) {
            var oe = d.apply(h, Fn([te], g));
            return l && R ? oe[0] : oe;
          };
          A && i && typeof x == "function" && x.length != 1 && (b = A = !1);
          var R = this.__chain__, q = !!this.__actions__.length, z = p && !R, J = b && !q;
          if (!p && A) {
            v = J ? v : new re(this);
            var Y = t.apply(v, g);
            return Y.__actions__.push({ func: Rs, args: [D], thisArg: r }), new Ot(Y, R);
          }
          return z && J ? t.apply(this, g) : (Y = this.thru(D), z ? l ? Y.value()[0] : Y.value() : Y);
        });
      }), Lt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = ds[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), un(re.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          pe.call(Kr, l) || (Kr[l] = []), Kr[l].push({ name: n, func: i });
        }
      }), Kr[Ts(r, S).name] = [{
        name: "wrapper",
        func: r
      }], re.prototype.clone = g0, re.prototype.reverse = $0, re.prototype.value = y0, h.prototype.at = Ky, h.prototype.chain = Jy, h.prototype.commit = Xy, h.prototype.next = Qy, h.prototype.plant = tV, h.prototype.reverse = nV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = rV, h.prototype.first = h.prototype.head, ti && (h.prototype[ti] = eV), h;
    }, Gr = X1();
    fr ? ((fr.exports = Gr)._ = Gr, Cl._ = Gr) : Ye._ = Gr;
  }).call(wi);
})(ve, ve.exports);
const SE = "/alarms?_s=", Wa = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, EE = async (e, o) => {
  try {
    return (await Dt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Wa
    )).status === 204;
  } catch {
    return !1;
  }
}, Om = async (e, o) => {
  try {
    return (await Dt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Wa
    )).status === 204;
  } catch {
    return !1;
  }
}, IE = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await On.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Wa
    )).status == 204;
  } catch {
    return !1;
  }
}, kE = async () => {
  try {
    const e = `${SE}isSituation==true&limit=0`, o = await On(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, xE = async (e) => {
  try {
    const o = e.join(",id=="), r = await On(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Pm = async (e) => {
  try {
    const o = await On(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, AE = async (e) => {
  try {
    const o = await On(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, BE = async () => {
  try {
    const e = await On("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => ve.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, TE = async (e, o, r) => {
  try {
    return (await On.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Wa
    )).status == 204;
  } catch {
    return !1;
  }
}, DE = async (e, o) => {
  try {
    return (await On.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, NE = async () => {
  try {
    const e = await On.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, LE = window.Pinia.defineStore, ln = LE("situationsStore", {
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
      const e = await BE();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await kE();
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
        const s = await Pm(e);
        if (s) {
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await xE(a);
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
          const a = await AE(s);
          a && (r[s] = ve.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await NE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), ME = window.Vue.openBlock, OE = window.Vue.createElementBlock, PE = window.Vue.createElementVNode;
var RE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const FE = {}, UE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, WE = /* @__PURE__ */ PE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), qE = [
  WE
];
function HE(e, o) {
  return ME(), OE("svg", UE, qE);
}
var Bo = /* @__PURE__ */ RE(FE, [["render", HE]]);
var zE = Object.defineProperty, kp = Object.getOwnPropertySymbols, YE = Object.prototype.hasOwnProperty, GE = Object.prototype.propertyIsEnumerable, xp = (e, o, r) => o in e ? zE(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ap = (e, o) => {
  for (var r in o || (o = {}))
    YE.call(o, r) && xp(e, r, o[r]);
  if (kp)
    for (var r of kp(o))
      GE.call(o, r) && xp(e, r, o[r]);
  return e;
};
const jE = window.Vue.defineComponent, ZE = window.Vue.toRaw, Hu = window.Vue.h;
var KE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const JE = {
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
}, XE = jE({
  props: JE,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = ZE(this.icon);
    return this.$slots.default ? Hu("span", { class: "feather-icon-container" }, [
      Hu(this.$slots.default()[0], Ap({
        class: o
      }, r))
    ]) : Hu(s, Ap({
      class: o
    }, r));
  }
});
var G = /* @__PURE__ */ KE(XE, [["__scopeId", "data-v-52cbf270"]]);
const QE = window.Vue.openBlock, e2 = window.Vue.createElementBlock, t2 = window.Vue.createElementVNode;
var n2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const r2 = {}, o2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, i2 = /* @__PURE__ */ t2("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), s2 = [
  i2
];
function a2(e, o) {
  return QE(), e2("svg", o2, s2);
}
var Rm = /* @__PURE__ */ n2(r2, [["render", a2]]);
const ze = {
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
function vn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ve(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Fe(e) {
  Ve(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function l2(e, o) {
  Ve(2, arguments);
  var r = Fe(e), s = vn(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function u2(e, o) {
  Ve(2, arguments);
  var r = Fe(e).getTime(), s = vn(o);
  return new Date(r + s);
}
var c2 = {};
function Mo() {
  return c2;
}
function Bp(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = Mo(), $ = vn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Fe(e), T = y.getDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - B), y.setHours(0, 0, 0, 0), y;
}
function Mc(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function Tp(e) {
  Ve(1, arguments);
  var o = Fe(e);
  return o.setHours(0, 0, 0, 0), o;
}
function d2(e, o) {
  Ve(2, arguments);
  var r = Fe(e), s = Fe(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Fm(e, o) {
  Ve(2, arguments);
  var r = Tp(e), s = Tp(o);
  return r.getTime() === s.getTime();
}
function f2(e) {
  return Ve(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function h2(e) {
  if (Ve(1, arguments), !f2(e) && typeof e != "number")
    return !1;
  var o = Fe(e);
  return !isNaN(Number(o));
}
function p2(e, o) {
  Ve(2, arguments);
  var r = vn(o);
  return u2(e, -r);
}
var w2 = 864e5;
function v2(e) {
  Ve(1, arguments);
  var o = Fe(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / w2) + 1;
}
function Ia(e) {
  Ve(1, arguments);
  var o = 1, r = Fe(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Um(e) {
  Ve(1, arguments);
  var o = Fe(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Ia(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ia(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function m2(e) {
  Ve(1, arguments);
  var o = Um(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Ia(r);
  return s;
}
var _2 = 6048e5;
function g2(e) {
  Ve(1, arguments);
  var o = Fe(e), r = Ia(o).getTime() - m2(o).getTime();
  return Math.round(r / _2) + 1;
}
function ka(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = Mo(), $ = vn((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Fe(e), T = y.getUTCDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - B), y.setUTCHours(0, 0, 0, 0), y;
}
function Wm(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = Fe(e), $ = _.getUTCFullYear(), y = Mo(), T = vn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = new Date(0);
  B.setUTCFullYear($ + 1, 0, T), B.setUTCHours(0, 0, 0, 0);
  var M = ka(B, o), N = new Date(0);
  N.setUTCFullYear($, 0, T), N.setUTCHours(0, 0, 0, 0);
  var S = ka(N, o);
  return _.getTime() >= M.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function $2(e, o) {
  var r, s, a, u, c, f, w, m;
  Ve(1, arguments);
  var _ = Mo(), $ = vn((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (m = w.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = Wm(e, o), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var B = ka(T, o);
  return B;
}
var y2 = 6048e5;
function V2(e, o) {
  Ve(1, arguments);
  var r = Fe(e), s = ka(r, o).getTime() - $2(r, o).getTime();
  return Math.round(s / y2) + 1;
}
function we(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var b2 = {
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
const jn = b2;
var io = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, C2 = {
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
    return jn.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = Wm(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return we(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : we(u, o.length);
  },
  R: function(e, o) {
    var r = Um(e);
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
        return jn.M(e, o);
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
    var a = V2(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : we(a, o.length);
  },
  I: function(e, o, r) {
    var s = g2(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : we(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : jn.d(e, o);
  },
  D: function(e, o, r) {
    var s = v2(e);
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
    switch (s === 12 ? a = io.noon : s === 0 ? a = io.midnight : a = s / 12 >= 1 ? "pm" : "am", o) {
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
    switch (s >= 17 ? a = io.evening : s >= 12 ? a = io.afternoon : s >= 4 ? a = io.morning : a = io.night, o) {
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
    return jn.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : jn.H(e, o);
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
    }) : jn.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : jn.s(e, o);
  },
  S: function(e, o) {
    return jn.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return Np(u);
      case "XXXX":
      case "XX":
        return Nr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Nr(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return Np(u);
      case "xxxx":
      case "xx":
        return Nr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Nr(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Dp(u, ":");
      case "OOOO":
      default:
        return "GMT" + Nr(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Dp(u, ":");
      case "zzzz":
      default:
        return "GMT" + Nr(u, ":");
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
function Dp(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + we(u, 2);
}
function Np(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + we(Math.abs(e) / 60, 2);
  }
  return Nr(e, o);
}
function Nr(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = we(Math.floor(a / 60), 2), c = we(a % 60, 2);
  return s + u + r + c;
}
const S2 = C2;
var Lp = function(e, o) {
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
}, qm = function(e, o) {
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
}, E2 = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return Lp(e, o);
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
  return u.replace("{{date}}", Lp(s, o)).replace("{{time}}", qm(a, o));
}, I2 = {
  p: qm,
  P: E2
};
const k2 = I2;
var x2 = ["D", "DD"], A2 = ["YY", "YYYY"];
function B2(e) {
  return x2.indexOf(e) !== -1;
}
function T2(e) {
  return A2.indexOf(e) !== -1;
}
function Mp(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var D2 = {
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
}, N2 = function(e, o, r) {
  var s, a = D2[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const L2 = N2;
function zu(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var M2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, O2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, P2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, R2 = {
  date: zu({
    formats: M2,
    defaultWidth: "full"
  }),
  time: zu({
    formats: O2,
    defaultWidth: "full"
  }),
  dateTime: zu({
    formats: P2,
    defaultWidth: "full"
  })
};
const F2 = R2;
var U2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, W2 = function(e, o, r, s) {
  return U2[e];
};
const q2 = W2;
function vi(e) {
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
var H2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, z2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Y2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, G2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, j2 = {
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
}, Z2 = {
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
}, K2 = function(e, o) {
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
}, J2 = {
  ordinalNumber: K2,
  era: vi({
    values: H2,
    defaultWidth: "wide"
  }),
  quarter: vi({
    values: z2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: vi({
    values: Y2,
    defaultWidth: "wide"
  }),
  day: vi({
    values: G2,
    defaultWidth: "wide"
  }),
  dayPeriod: vi({
    values: j2,
    defaultWidth: "wide",
    formattingValues: Z2,
    defaultFormattingWidth: "wide"
  })
};
const X2 = J2;
function mi(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? eI(f, function($) {
      return $.test(c);
    }) : Q2(f, function($) {
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
function Q2(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function eI(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function tI(e) {
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
var nI = /^(\d+)(th|st|nd|rd)?/i, rI = /\d+/i, oI = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, iI = {
  any: [/^b/i, /^(a|c)/i]
}, sI = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, aI = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lI = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, uI = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, cI = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, dI = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, fI = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, hI = {
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
}, pI = {
  ordinalNumber: tI({
    matchPattern: nI,
    parsePattern: rI,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: mi({
    matchPatterns: oI,
    defaultMatchWidth: "wide",
    parsePatterns: iI,
    defaultParseWidth: "any"
  }),
  quarter: mi({
    matchPatterns: sI,
    defaultMatchWidth: "wide",
    parsePatterns: aI,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: mi({
    matchPatterns: lI,
    defaultMatchWidth: "wide",
    parsePatterns: uI,
    defaultParseWidth: "any"
  }),
  day: mi({
    matchPatterns: cI,
    defaultMatchWidth: "wide",
    parsePatterns: dI,
    defaultParseWidth: "any"
  }),
  dayPeriod: mi({
    matchPatterns: fI,
    defaultMatchWidth: "any",
    parsePatterns: hI,
    defaultParseWidth: "any"
  })
};
const wI = pI;
var vI = {
  code: "en-US",
  formatDistance: L2,
  formatLong: F2,
  formatRelative: q2,
  localize: X2,
  match: wI,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Hm = vI;
var mI = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _I = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, gI = /^'([^]*?)'?$/, $I = /''/g, yI = /[a-zA-Z]/;
function VI(e, o, r) {
  var s, a, u, c, f, w, m, _, $, y, T, B, M, N, S, L, k, O;
  Ve(2, arguments);
  var I = String(o), F = Mo(), P = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : F.locale) !== null && s !== void 0 ? s : Hm, W = vn((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (m = r.locale) === null || m === void 0 || (_ = m.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : F.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = F.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(W >= 1 && W <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $e = vn((T = (B = (M = (N = r == null ? void 0 : r.weekStartsOn) !== null && N !== void 0 ? N : r == null || (S = r.locale) === null || S === void 0 || (L = S.options) === null || L === void 0 ? void 0 : L.weekStartsOn) !== null && M !== void 0 ? M : F.weekStartsOn) !== null && B !== void 0 ? B : (k = F.locale) === null || k === void 0 || (O = k.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!($e >= 0 && $e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!P.localize)
    throw new RangeError("locale must contain localize property");
  if (!P.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = Fe(e);
  if (!h2(de))
    throw new RangeError("Invalid time value");
  var me = Mc(de), Se = p2(de, me), Ee = {
    firstWeekContainsDate: W,
    weekStartsOn: $e,
    locale: P,
    _originalDate: de
  }, ke = I.match(_I).map(function(fe) {
    var Ne = fe[0];
    if (Ne === "p" || Ne === "P") {
      var Le = k2[Ne];
      return Le(fe, P.formatLong);
    }
    return fe;
  }).join("").match(mI).map(function(fe) {
    if (fe === "''")
      return "'";
    var Ne = fe[0];
    if (Ne === "'")
      return bI(fe);
    var Le = S2[Ne];
    if (Le)
      return !(r != null && r.useAdditionalWeekYearTokens) && T2(fe) && Mp(fe, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && B2(fe) && Mp(fe, o, String(e)), Le(Se, fe, P.localize, Ee);
    if (Ne.match(yI))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ne + "`");
    return fe;
  }).join("");
  return ke;
}
function bI(e) {
  var o = e.match(gI);
  return o ? o[1].replace($I, "'") : e;
}
function zm(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function CI(e) {
  return zm({}, e);
}
var Op = 1e3 * 60, xa = 60 * 24, Pp = xa * 30, Rp = xa * 365;
function qa(e, o, r) {
  var s, a, u;
  Ve(2, arguments);
  var c = Mo(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : Hm;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = d2(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var m = zm(CI(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = Fe(o), $ = Fe(e)) : (_ = Fe(e), $ = Fe(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if (y === "floor")
    T = Math.floor;
  else if (y === "ceil")
    T = Math.ceil;
  else if (y === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var B = $.getTime() - _.getTime(), M = B / Op, N = Mc($) - Mc(_), S = (B - N) / Op, L = r == null ? void 0 : r.unit, k;
  if (L ? k = String(L) : M < 1 ? k = "second" : M < 60 ? k = "minute" : M < xa ? k = "hour" : S < Pp ? k = "day" : S < Rp ? k = "month" : k = "year", k === "second") {
    var O = T(B / 1e3);
    return f.formatDistance("xSeconds", O, m);
  } else if (k === "minute") {
    var I = T(M);
    return f.formatDistance("xMinutes", I, m);
  } else if (k === "hour") {
    var F = T(M / 60);
    return f.formatDistance("xHours", F, m);
  } else if (k === "day") {
    var P = T(S / xa);
    return f.formatDistance("xDays", P, m);
  } else if (k === "month") {
    var W = T(S / Pp);
    return W === 12 && L !== "month" ? f.formatDistance("xYears", 1, m) : f.formatDistance("xMonths", W, m);
  } else if (k === "year") {
    var $e = T(S / Rp);
    return f.formatDistance("xYears", $e, m);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function SI(e, o, r) {
  Ve(2, arguments);
  var s = Bp(e, r), a = Bp(o, r);
  return s.getTime() === a.getTime();
}
function EI(e, o) {
  return Ve(1, arguments), SI(e, Date.now(), o);
}
function II(e) {
  return Ve(1, arguments), Fm(e, Date.now());
}
function kI(e, o) {
  Ve(2, arguments);
  var r = vn(o);
  return l2(e, -r);
}
function xI(e) {
  return Ve(1, arguments), Fm(e, kI(Date.now(), 1));
}
const mn = (e) => {
  let o = "";
  if (e)
    try {
      o = VI(new Date(e), ze.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Ym = (e, o) => {
  const s = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), a = s.length > o ? "..." : "";
  return s.substring(0, o) + a;
}, AI = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => II(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => xI(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => EI(s.firstEventTime)
      );
      break;
  }
  return r;
}, BI = window.Vue.defineComponent, kt = window.Vue.unref, Fp = window.Vue.normalizeClass, pn = window.Vue.createElementVNode, so = window.Vue.toDisplayString, Up = window.Vue.createVNode, yr = window.Vue.openBlock, Vr = window.Vue.createElementBlock, Gs = window.Vue.createCommentVNode, Oc = window.Vue.createTextVNode, TI = window.Vue.renderList, DI = window.Vue.Fragment, NI = window.Vue.pushScopeId, LI = window.Vue.popScopeId, id = (e) => (NI("data-v-fb22b492"), e = e(), LI(), e), MI = { class: "content" }, OI = { class: "title-row" }, PI = { class: "title" }, RI = {
  key: 0,
  class: "accepted"
}, FI = {
  key: 1,
  class: "rejected"
}, UI = /* @__PURE__ */ id(() => /* @__PURE__ */ pn("span", { class: "info-title" }, " Duration: ", -1)), WI = { key: 0 }, qI = /* @__PURE__ */ id(() => /* @__PURE__ */ pn("span", { class: "info-title" }, " First Event: ", -1)), HI = { class: "description" }, zI = /* @__PURE__ */ id(() => /* @__PURE__ */ pn("hr", null, null, -1)), YI = {
  key: 1,
  class: "count-info"
}, GI = /* @__PURE__ */ Oc(" Alarms: "), jI = { class: "info-title" }, ZI = /* @__PURE__ */ BI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, s = ze.ACCEPTED, a = ze.REJECTED, u = new Date().getTime(), c = () => {
      var f;
      o("situation-selected", (f = r.situationInfo) == null ? void 0 : f.id);
    };
    return (f, w) => {
      var m, _, $;
      return yr(), Vr("div", {
        onClick: c,
        class: Fp(["card", {
          rejected: r.situationInfo.status == kt(a)
        }])
      }, [
        pn("div", {
          class: Fp(["severity-line", [`${(_ = (m = r.situationInfo) == null ? void 0 : m.severity) == null ? void 0 : _.toLowerCase()}-bg dark`]])
        }, null, 2),
        pn("div", MI, [
          pn("div", OI, [
            pn("div", PI, "Situation " + so(($ = r.situationInfo) == null ? void 0 : $.id), 1),
            r.situationInfo.status == kt(s) ? (yr(), Vr("div", RI, [
              Up(kt(G), {
                icon: kt(Bo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Gs("", !0),
            r.situationInfo.status == kt(a) ? (yr(), Vr("div", FI, [
              Up(kt(G), {
                icon: kt(Rm),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Gs("", !0)
          ]),
          pn("div", null, [
            UI,
            Oc(" " + so(kt(qa)(
              kt(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Gs("", !0) : (yr(), Vr("div", WI, [
            qI,
            Oc(so(kt(mn)(r.situationInfo.firstEventTime)), 1)
          ])),
          pn("div", HI, so(kt(Ym)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          zI,
          r.situationInfo.relatedAlarms ? (yr(), Vr("div", YI, [
            GI,
            pn("span", jI, so(r.situationInfo.relatedAlarms.length), 1)
          ])) : Gs("", !0),
          (yr(!0), Vr(DI, null, TI(kt(ve.exports.keys)(
            kt(ve.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (y) => (yr(), Vr("div", {
            class: "info-title",
            key: y
          }, " - " + so(y), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Gm = /* @__PURE__ */ ce(ZI, [["__scopeId", "data-v-fb22b492"]]), KI = window.Vue.openBlock, JI = window.Vue.createElementBlock, XI = window.Vue.createElementVNode;
var QI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ek = {}, tk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nk = /* @__PURE__ */ XI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), rk = [
  nk
];
function ok(e, o) {
  return KI(), JI("svg", tk, rk);
}
var ik = /* @__PURE__ */ QI(ek, [["render", ok]]);
const sk = window.Vue.openBlock, ak = window.Vue.createElementBlock, jm = window.Vue.createElementVNode;
var lk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uk = {}, ck = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dk = /* @__PURE__ */ jm("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), fk = /* @__PURE__ */ jm("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), hk = [
  dk,
  fk
];
function pk(e, o) {
  return sk(), ak("svg", ck, hk);
}
var wk = /* @__PURE__ */ lk(uk, [["render", pk]]);
const vk = window.Vue.openBlock, mk = window.Vue.createElementBlock, _k = window.Vue.createElementVNode;
var gk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $k = {}, yk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Vk = /* @__PURE__ */ _k("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), bk = [
  Vk
];
function Ck(e, o) {
  return vk(), mk("svg", yk, bk);
}
var Sk = /* @__PURE__ */ gk($k, [["render", Ck]]);
const Ek = window.Vue.openBlock, Ik = window.Vue.createElementBlock, kk = window.Vue.createElementVNode;
var xk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Ak = {}, Bk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Tk = /* @__PURE__ */ kk("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), Dk = [
  Tk
];
function Nk(e, o) {
  return Ek(), Ik("svg", Bk, Dk);
}
var Zm = /* @__PURE__ */ xk(Ak, [["render", Nk]]);
const Lk = window.Vue.defineComponent, Zn = window.Vue.unref, js = window.Vue.normalizeClass, Zs = window.Vue.createVNode, Mk = window.Vue.openBlock, Ok = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const Pk = { class: "paginator" }, Rk = /* @__PURE__ */ Lk({
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
    return (a, u) => (Mk(), Ok("div", Pk, [
      Zs(Zn(G), {
        icon: Zn(ik),
        "aria-hidden": "true",
        class: js(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      Zs(Zn(G), {
        icon: Zn(Sk),
        "aria-hidden": "true",
        class: js(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Zs(Zn(G), {
        icon: Zn(Zm),
        "aria-hidden": "true",
        class: js(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Zs(Zn(G), {
        icon: Zn(wk),
        "aria-hidden": "true",
        class: js(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Fk = /* @__PURE__ */ ce(Rk, [["__scopeId", "data-v-40758818"]]);
const se = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, Uk = window.Vue.computed, Ha = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = Uk(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Pr = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Rr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Wk = Object.defineProperty, qk = Object.defineProperties, Hk = Object.getOwnPropertyDescriptors, Wp = Object.getOwnPropertySymbols, zk = Object.prototype.hasOwnProperty, Yk = Object.prototype.propertyIsEnumerable, qp = (e, o, r) => o in e ? Wk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Hp = (e, o) => {
  for (var r in o || (o = {}))
    zk.call(o, r) && qp(e, r, o[r]);
  if (Wp)
    for (var r of Wp(o))
      Yk.call(o, r) && qp(e, r, o[r]);
  return e;
}, Gk = (e, o) => qk(e, Hk(o));
const jk = window.Vue.defineComponent, Zk = window.Vue.h;
var Kk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Jk = {
  center: {
    type: Boolean,
    default: !1
  }
}, Xk = jk({
  props: Jk,
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
        this.styles = Gk(Hp({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Rr(this.failsafe), this.failsafe = Pr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Zk("div", {
        style: Hp({}, this.styles),
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
var or = /* @__PURE__ */ Kk(Xk, [["__scopeId", "data-v-18e2a5db"]]);
const Qk = window.Vue.openBlock, ex = window.Vue.createElementBlock, tx = window.Vue.createElementVNode;
var nx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const rx = {}, ox = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ix = /* @__PURE__ */ tx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), sx = [
  ix
];
function ax(e, o) {
  return Qk(), ex("svg", ox, sx);
}
var Oo = /* @__PURE__ */ nx(rx, [["render", ax]]);
const zp = window.Vue.computed, lx = (e, o, r) => {
  const s = zp(() => o.value.filter((u) => !u.disabled)), a = zp(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(s.value[s.value.length - 1]) : r(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? r(s.value[0]) : r(s.value[a.value + 1]));
    }
  };
};
const ux = window.Vue.openBlock, cx = window.Vue.createElementBlock, sd = window.Vue.createElementVNode;
var dx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fx = {}, hx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, px = /* @__PURE__ */ sd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), wx = /* @__PURE__ */ sd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), vx = /* @__PURE__ */ sd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), mx = [
  px,
  wx,
  vx
];
function _x(e, o) {
  return ux(), cx("svg", hx, mx);
}
var gx = /* @__PURE__ */ dx(fx, [["render", _x]]), $x = Object.defineProperty, yx = Object.defineProperties, Vx = Object.getOwnPropertyDescriptors, Yp = Object.getOwnPropertySymbols, bx = Object.prototype.hasOwnProperty, Cx = Object.prototype.propertyIsEnumerable, Gp = (e, o, r) => o in e ? $x(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Km = (e, o) => {
  for (var r in o || (o = {}))
    bx.call(o, r) && Gp(e, r, o[r]);
  if (Yp)
    for (var r of Yp(o))
      Cx.call(o, r) && Gp(e, r, o[r]);
  return e;
}, Jm = (e, o) => yx(e, Vx(o));
const Po = window.Vue.defineComponent, zi = window.Vue.resolveComponent, wn = window.Vue.openBlock, Vo = window.Vue.createElementBlock, Sx = window.Vue.createVNode, Aa = window.Vue.createBlock, Ex = window.Vue.withModifiers, To = window.Vue.inject, Yi = window.Vue.computed, Ix = window.Vue.normalizeClass, ao = window.Vue.createElementVNode, Ba = window.Vue.toDisplayString, $a = window.Vue.renderSlot, Pi = window.Vue.createCommentVNode, kx = window.Vue.withDirectives, xx = window.Vue.vShow, Pc = window.Vue.ref, jp = window.Vue.toRef, Zp = window.Vue.nextTick, Rc = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const ad = window.Vue.provide, Kp = window.Vue.isRef, Ax = window.Vue.onBeforeUnmount;
var Ki = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Bx = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, Tx = Po({
  props: Bx,
  components: {
    FeatherIcon: G
  }
}), Dx = ["title"];
function Nx(e, o, r, s, a, u) {
  const c = zi("FeatherIcon");
  return wn(), Vo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Sx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, Dx);
}
var Lx = /* @__PURE__ */ Ki(Tx, [["render", Nx], ["__scopeId", "data-v-4265058e"]]);
const Mx = Po({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Oo;
    }
  },
  components: {
    ActionIcon: Lx
  }
});
function Ox(e, o, r, s, a, u) {
  const c = zi("ActionIcon");
  return wn(), Aa(c, {
    onClick: o[0] || (o[0] = Ex((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Px = /* @__PURE__ */ Ki(Mx, [["render", Ox]]);
const Rx = Po({
  computed: {
    errorIcon() {
      return gx;
    }
  },
  components: {
    FeatherIcon: G
  }
});
function Fx(e, o, r, s, a, u) {
  const c = zi("FeatherIcon");
  return wn(), Aa(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Ux = /* @__PURE__ */ Ki(Rx, [["render", Fx], ["__scopeId", "data-v-0b8faef3"]]);
const Wx = {
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
}, qx = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, Hx = Po({
  emits: qx,
  props: Wx,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = To("wrapperOptions", {}), o = To("validationErrorMessage", !1), r = Yi(() => e.error ? e.error : o && o.value ? o.value : !1);
    return Jm(Km({}, e), { error: r });
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
    ClearIcon: Px,
    ErrorIcon: Ux
  }
}), zx = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Yx = ["for"], Gx = { class: "prefix" }, jx = { class: "post" };
function Zx(e, o, r, s, a, u) {
  const c = zi("ClearIcon"), f = zi("ErrorIcon");
  return wn(), Vo("div", {
    class: Ix(["feather-input-wrapper-container", e.containerCls])
  }, [
    ao("fieldset", zx, [
      ao("legend", null, Ba(e.label), 1)
    ]),
    ao("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ba(e.label), 9, Yx),
    ao("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      ao("div", Gx, [
        $a(e.$slots, "pre", {}, void 0, !0)
      ]),
      $a(e.$slots, "default", {}, void 0, !0),
      ao("div", jx, [
        e.showClear && e.computedClearText ? (wn(), Aa(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Pi("", !0),
        e.error ? (wn(), Aa(f, { key: 1 })) : Pi("", !0),
        $a(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var za = /* @__PURE__ */ Ki(Hx, [["render", Zx], ["__scopeId", "data-v-4db296db"]]);
const Kx = Po({
  setup() {
    const e = To("subTextOptions", {}), o = To("validationErrorMessage", !1), r = Yi(() => e.error ? e.error : o && o.value ? o.value : "");
    return Jm(Km({}, e), { error: r });
  }
}), Jx = { class: "feather-input-sub-text" }, Xx = {
  key: 0,
  class: "feather-input-spacer"
}, Qx = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, eA = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function tA(e, o, r, s, a, u) {
  return kx((wn(), Vo("div", Jx, [
    !e.hint && !e.error.length ? (wn(), Vo("div", Xx, "\xA0")) : Pi("", !0),
    e.hint && !e.error.length ? (wn(), Vo("div", Qx, Ba(e.hint), 1)) : Pi("", !0),
    e.error.length > 0 ? (wn(), Vo("div", eA, Ba(e.error), 1)) : Pi("", !0),
    $a(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [xx, !e.inline || e.hint || e.error.length]
  ]);
}
var Ro = /* @__PURE__ */ Ki(Kx, [["render", tA], ["__scopeId", "data-v-8e0ac99e"]]);
const nA = {
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
Po({
  props: nA,
  setup(e) {
    const o = To("featherFormErrors", Pc([])), r = jp(e, "errorList"), s = Yi(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = jp(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = Pc(), w = (_) => `${c(_.label)} - ${_.message}`, m = Yi(() => (s.value.length && Zp(() => f.value.focus()), e.headingText(s.value)));
    return Rc(a, (_) => {
      _.length && Zp(() => f.value.focus());
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
const Fo = (e, o, r, s, a) => {
  const u = To("featherForm", !1);
  if (s && u && e.value) {
    const c = Pc("");
    ad("validationErrorMessage", c);
    const f = () => {
      if (a && Kp(a) && a.value)
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
    return a && Kp(a) && Rc(a, () => {
      u.runValidation();
    }), Rc(e, (_, $) => {
      _ && u && u.register(_, m), $ && u && u.deregister($);
    }, { immediate: !0 }), Ax(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Uo = (e) => ({
  inherittedAttrs: Yi(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Wo = {
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
}, qo = (e) => {
  ad("subTextOptions", e);
}, Ya = {
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
}, Ga = (e) => {
  ad("wrapperOptions", e);
}, Ks = window.Vue.ref, rA = window.Vue.watch, oA = window.Vue.watchEffect, Jp = window.Vue.computed, Yu = window.Vue.provide, Xm = (e, o, r, s, a) => {
  const u = Ks([]), c = Ks(), f = Ks(), w = Ks();
  oA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((L) => L.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let L = u.value.filter((k) => !k.disabled);
      L = L.length ? L : u.value, f.value = L[0], f.value.first = !0;
    }
  }), rA(c, (S, L) => {
    L && (L.checked = !1), S && (S.checked = !0);
  });
  const m = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = Jp(() => c.value || f.value), $ = lx(_, u, m), y = Jp(() => se("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = Fo(w, e, r, s, a);
  return Yu("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), Yu("select", m), Yu("blur", (S) => {
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
var iA = Object.defineProperty, sA = Object.defineProperties, aA = Object.getOwnPropertyDescriptors, Xp = Object.getOwnPropertySymbols, lA = Object.prototype.hasOwnProperty, uA = Object.prototype.propertyIsEnumerable, Qp = (e, o, r) => o in e ? iA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Eo = (e, o) => {
  for (var r in o || (o = {}))
    lA.call(o, r) && Qp(e, r, o[r]);
  if (Xp)
    for (var r of Xp(o))
      uA.call(o, r) && Qp(e, r, o[r]);
  return e;
}, Qm = (e, o) => sA(e, aA(o));
const ir = window.Vue.defineComponent, Ri = window.Vue.inject, Ta = window.Vue.computed, Fi = window.Vue.ref, Zt = window.Vue.resolveComponent, Bt = window.Vue.openBlock, Ji = window.Vue.createElementBlock, e_ = window.Vue.normalizeClass, _n = window.Vue.renderSlot, nr = window.Vue.createBlock, Gi = window.Vue.createCommentVNode, Da = window.Vue.createElementVNode, cA = window.Vue.withModifiers, ja = window.Vue.createVNode, t_ = window.Vue.toRef, Fc = window.Vue.mergeProps, Mn = window.Vue.withCtx, dA = window.Vue.h, fA = window.Vue.provide;
var sr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hA = {
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
}, pA = ir({
  props: hA,
  setup(e) {
    const o = Ri("isCondensed", null), r = Ta(() => o || e.condensed), s = Fi(!1);
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
    FeatherRipple: or
  }
}), wA = ["aria-disabled"];
function vA(e, o, r, s, a, u) {
  const c = Zt("FeatherRipple");
  return Bt(), Ji("div", {
    class: e_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    _n(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Bt(), nr(c, { key: 0 })) : Gi("", !0)
  ], 42, wA);
}
var Za = /* @__PURE__ */ sr(pA, [["render", vA], ["__scopeId", "data-v-44d413dc"]]);
const mA = {
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
}, _A = ir({
  emits: ["delete"],
  props: mA,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: Oo
    };
  },
  components: {
    FeatherIcon: G
  }
}), gA = { class: "chip-delete" }, $A = ["aria-label", "aria-describedby"];
function yA(e, o, r, s, a, u) {
  const c = Zt("FeatherIcon");
  return Bt(), Ji("span", gA, [
    Da("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = cA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      ja(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, $A)
  ]);
}
var VA = /* @__PURE__ */ sr(_A, [["render", yA], ["__scopeId", "data-v-4bae6cb4"]]);
const bA = ir({
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
}), CA = ["title"];
function SA(e, o, r, s, a, u) {
  return Bt(), Ji("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    _n(e.$slots, "default", {}, void 0, !0)
  ], 8, CA);
}
var Ka = /* @__PURE__ */ sr(bA, [["render", SA], ["__scopeId", "data-v-1a0445b2"]]);
const EA = {}, IA = {
  class: "chip-icon",
  role: "presentation"
};
function kA(e, o) {
  return Bt(), Ji("span", IA, [
    _n(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ja = /* @__PURE__ */ sr(EA, [["render", kA], ["__scopeId", "data-v-2230176f"]]);
const ew = {
  delete: "Remove"
}, xA = ir({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => ew
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Ha(t_(e, "labels"), ew), s = Ta(() => se("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = Eo({}, o.attrs);
    return e.disabled && delete u.onClick, Qm(Eo({}, r), {
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
    Chip: Za,
    DeleteIcon: VA,
    Label: Ka,
    PreIcon: Ja
  }
}), AA = ["aria-disabled"];
function BA(e, o, r, s, a, u) {
  const c = Zt("PreIcon"), f = Zt("Label"), w = Zt("DeleteIcon"), m = Zt("Chip");
  return Bt(), nr(m, Fc(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Mn(() => [
      Da("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Da("span", Fc(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Bt(), nr(c, { key: 0 }, {
            default: Mn(() => [
              _n(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Gi("", !0),
          ja(f, { id: e.chipTextId }, {
            default: Mn(() => [
              _n(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, AA),
      e.canDelete ? (Bt(), nr(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Gi("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var TA = /* @__PURE__ */ sr(xA, [["render", BA], ["__scopeId", "data-v-48b2704a"]]);
const DA = ir({
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
    Chip: Za,
    Label: Ka,
    PreIcon: Ja
  }
}), NA = ["aria-disabled"];
function LA(e, o, r, s, a, u) {
  const c = Zt("PreIcon"), f = Zt("Label"), w = Zt("Chip");
  return Bt(), nr(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Mn(() => [
      Da("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Bt(), nr(c, { key: 0 }, {
          default: Mn(() => [
            _n(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Gi("", !0),
        ja(f, null, {
          default: Mn(() => [
            _n(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, NA)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var MA = /* @__PURE__ */ sr(DA, [["render", LA], ["__scopeId", "data-v-3e0c4eba"]]);
const OA = ir({
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
    const o = Fi(!1), r = Fi(!1), s = Ta(() => se("chip-label-id")), a = Ta(() => o.value || r.value ? 0 : -1), u = Fi(), c = () => {
      u.value.$el.focus();
    }, f = Ri("register", (y) => {
    }), w = Ri("blur", (y) => {
    }), m = Ri("select", (y) => {
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
    Chip: Za,
    Label: Ka,
    PreIcon: Ja
  }
});
function PA(e, o, r, s, a, u) {
  const c = Zt("PreIcon"), f = Zt("Label"), w = Zt("Chip");
  return Bt(), nr(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: e_(["focus hover", { selected: e.checked }]),
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
    default: Mn(() => [
      e.hasIcon ? (Bt(), nr(c, { key: 0 }, {
        default: Mn(() => [
          _n(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Gi("", !0),
      ja(f, { id: e.labelId }, {
        default: Mn(() => [
          _n(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var RA = /* @__PURE__ */ sr(OA, [["render", PA], ["__scopeId", "data-v-bbcc2f70"]]);
const FA = {
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
}, tw = ir({
  props: FA,
  setup() {
    return { format: Ri("chipListFormat", "") };
  },
  render() {
    const e = (o) => dA(o, Eo(Eo({}, this.$props), this.$attrs), Eo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(TA) : this.format === "radio" ? e(RA) : e(MA);
  }
}), UA = {
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
}, WA = ir({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: UA,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    fA("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = t_(e, "modelValue");
      return Qm(Eo({
        attrs: {
          role: "radiogroup"
        }
      }, Xm(c, o.emit, e.label, {}, Fi(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), qA = ["aria-label"];
function HA(e, o, r, s, a, u) {
  return Bt(), Ji("div", Fc(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    _n(e.$slots, "default", {}, void 0, !0)
  ], 16, qA);
}
var zA = /* @__PURE__ */ sr(WA, [["render", HA], ["__scopeId", "data-v-1e06f41d"]]);
const YA = window.Vue.defineComponent, GA = window.Vue.normalizeClass, jA = window.Vue.openBlock, ZA = window.Vue.createElementBlock, KA = window.Vue.createCommentVNode, JA = /* @__PURE__ */ YA({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (jA(), ZA("span", {
      key: 0,
      class: GA(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : KA("", !0);
  }
});
const XA = /* @__PURE__ */ ce(JA, [["__scopeId", "data-v-e08880d6"]]), QA = window.Vue.defineComponent, _i = window.Vue.unref, n_ = window.Vue.createTextVNode, Gu = window.Vue.normalizeClass, ju = window.Vue.withCtx, eB = window.Vue.createVNode, tB = window.Vue.renderList, nB = window.Vue.Fragment, Js = window.Vue.openBlock, rB = window.Vue.createElementBlock, Zu = window.Vue.createBlock, nw = window.Vue.createCommentVNode, oB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const iB = /* @__PURE__ */ n_(" ALL "), rw = window.Vue.ref, sB = window.Vue.watch, aB = window.Vue.computed, lB = window.Vue.reactive, uB = /* @__PURE__ */ QA({
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
    const r = e, s = rw(!1), a = aB(() => ve.exports.keys(ve.exports.groupBy(r.alarms, r.property))), u = rw(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = lB({
      alarms: r.alarms
    }), f = (m) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(m) ? u.value = u.value.filter((_) => _ !== m) : u.value.push(m), (m === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return sB(r, () => {
      var m;
      u.value = (m = r.preSelected) != null && m.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (m, _) => _i(a).length > 0 ? (Js(), Zu(_i(zA), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Gu({ vertical: r.isVertical })
    }, {
      default: ju(() => [
        eB(_i(tw), {
          class: Gu({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: ju(() => [
            iB
          ]),
          _: 1
        }, 8, ["class"]),
        (Js(!0), rB(nB, null, tB(_i(a), ($) => (Js(), Zu(_i(tw), {
          class: Gu([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: ju(() => [
            e.property == "severity" ? (Js(), Zu(XA, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : nw("", !0),
            n_(oB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : nw("", !0);
  }
});
const cB = /* @__PURE__ */ ce(uB, [["__scopeId", "data-v-d83b0f85"]]);
const dB = window.Vue.watch, fB = window.Vue.onBeforeUnmount, hB = window.Vue.ref, pB = window.Vue.onMounted, wB = (e) => {
  const o = hB(!1);
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
  return pB(() => {
    const c = dB(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    fB(() => {
      c(), u();
    });
  }), o;
}, vB = window.Vue.watch, mB = window.Vue.onBeforeUnmount, _B = window.Vue.ref, gB = window.Vue.onMounted, $B = (e, o) => {
  const r = _B(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((m) => m && m.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return gB(() => {
    const c = vB(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    mB(() => {
      c(), u();
    });
  }), r;
}, yB = window.Vue.watch, VB = window.Vue.onBeforeUnmount, bB = window.Vue.ref, r_ = (e, o) => {
  const r = bB(!1);
  let s = !1;
  const a = (w) => {
    o(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = yB([e, r], ([w, m], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), m && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return VB(() => {
    f(), c();
  }), r;
}, CB = window.Vue.defineComponent, An = window.Vue.ref, ow = window.Vue.toRef, SB = window.Vue.onMounted, EB = window.Vue.watch, iw = window.Vue.computed, IB = window.Vue.nextTick, sw = window.Vue.openBlock, aw = window.Vue.createElementBlock, lw = window.Vue.renderSlot, kB = window.Vue.normalizeClass, xB = window.Vue.normalizeStyle, AB = window.Vue.createCommentVNode;
var BB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const TB = {
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
}, DB = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, NB = CB({
  emits: DB,
  props: TB,
  setup(e, o) {
    const r = An(), s = An(), a = ow(e, "open"), u = ow(e, "noExpand"), c = An("auto"), f = An(), w = An(e.triggerId || se("feather-menu-trigger")), m = An(se("feather-menu-dropdown")), _ = An(""), $ = An("");
    SB(() => {
      f.value = window;
    });
    const y = An(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), B = () => {
      if (!s.value)
        return;
      const I = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", IB(() => {
        let { height: F, width: P } = s.value.getBoundingClientRect();
        const W = T(), $e = W.height, de = W.width;
        e.fill && P < I.width ? (c.value = I.width + "px", P = I.width) : c.value = P + "px";
        let me = 0;
        $e - I.bottom < F && I.top >= F ? (me = I.top - F, e.cover && (me += I.height)) : (me = I.bottom, e.cover && (me -= I.height));
        let Se = e.right ? I.right - P : I.left;
        !e.right && I.right >= P && de - I.left < P && (Se = I.right - P), e.right && I.right <= P && de - I.left > P && (Se = I.left), $.value = `${Se}px`, _.value = `${me}px`, y.value = !1;
      });
    }, N = $B(r, (I) => {
      o.emit("outside-click", I);
    }), S = wB(B), L = r_(f, B);
    EB([a, s], ([I, F]) => {
      I && F && B(), N.value = I, S.value = I, L.value = I;
    });
    const k = iw(() => {
      const I = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = m.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), O = iw(() => ({
      click: (I) => {
        o.emit("trigger-click", I);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: k,
      triggerListeners: O,
      menuId: m,
      menu: s,
      menuWidth: c,
      root: r,
      calculatePosition: B,
      calculating: y
    };
  }
}), LB = ["data-ref-id"], MB = ["data-ref-id", "id"];
function OB(e, o, r, s, a, u) {
  return sw(), aw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    lw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (sw(), aw("div", {
      key: 0,
      class: kB(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: xB({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      lw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, MB)) : AB("", !0)
  ], 8, LB);
}
var o_ = /* @__PURE__ */ BB(NB, [["render", OB], ["__scopeId", "data-v-f75af406"]]), PB = {
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
const RB = window.Vue.openBlock, FB = window.Vue.createElementBlock, UB = window.Vue.createElementVNode;
var WB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qB = {}, HB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zB = /* @__PURE__ */ UB("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), YB = [
  zB
];
function GB(e, o) {
  return RB(), FB("svg", HB, YB);
}
var jB = /* @__PURE__ */ WB(qB, [["render", GB]]);
const ZB = window.Vue.openBlock, KB = window.Vue.createElementBlock, ld = window.Vue.createElementVNode;
var JB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const XB = {}, QB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eT = /* @__PURE__ */ ld("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), tT = /* @__PURE__ */ ld("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), nT = /* @__PURE__ */ ld("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), rT = [
  eT,
  tT,
  nT
];
function oT(e, o) {
  return ZB(), KB("svg", QB, rT);
}
var iT = /* @__PURE__ */ JB(XB, [["render", oT]]);
const sT = window.Vue.openBlock, aT = window.Vue.createElementBlock, lT = window.Vue.createElementVNode;
var uT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cT = {}, dT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fT = /* @__PURE__ */ lT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), hT = [
  fT
];
function pT(e, o) {
  return sT(), aT("svg", dT, hT);
}
var Xa = /* @__PURE__ */ uT(cT, [["render", pT]]);
const ji = function(e, o) {
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
const wT = window.Vue.defineComponent, vT = window.Vue.openBlock, mT = window.Vue.createElementBlock, _T = window.Vue.normalizeClass, gT = window.Vue.pushScopeId, $T = window.Vue.popScopeId, Uc = window.Vue.createElementVNode;
var yT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const VT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, bT = {
  click: (e) => !0
}, CT = wT({
  emits: bT,
  props: VT,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), i_ = (e) => (gT("data-v-07e020f5"), e = e(), $T(), e), ST = /* @__PURE__ */ i_(() => /* @__PURE__ */ Uc("div", { class: "track" }, null, -1)), ET = /* @__PURE__ */ i_(() => /* @__PURE__ */ Uc("div", { class: "switcher" }, [
  /* @__PURE__ */ Uc("div", { class: "switch-circle" })
], -1)), IT = [
  ST,
  ET
];
function kT(e, o, r, s, a, u) {
  return vT(), mT("div", {
    class: _T(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, IT, 2);
}
var xT = /* @__PURE__ */ yT(CT, [["render", kT], ["__scopeId", "data-v-07e020f5"]]), AT = Object.defineProperty, BT = Object.defineProperties, TT = Object.getOwnPropertyDescriptors, uw = Object.getOwnPropertySymbols, DT = Object.prototype.hasOwnProperty, NT = Object.prototype.propertyIsEnumerable, cw = (e, o, r) => o in e ? AT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, dw = (e, o) => {
  for (var r in o || (o = {}))
    DT.call(o, r) && cw(e, r, o[r]);
  if (uw)
    for (var r of uw(o))
      NT.call(o, r) && cw(e, r, o[r]);
  return e;
}, fw = (e, o) => BT(e, TT(o));
const ud = window.Vue.defineComponent, br = window.Vue.h, LT = window.Vue.openBlock, MT = window.Vue.createElementBlock, OT = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var s_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const PT = {
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
}, RT = ud({
  inheritAttrs: !1,
  props: PT,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = br("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = br("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = br("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : br(or);
    if (this.asLi)
      return br("li", fw(dw({}, this.$attrs), {
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
    const u = br("a", fw(dw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return br("li", {}, [u]);
  }
});
var Xi = /* @__PURE__ */ s_(RT, [["__scopeId", "data-v-7c46b2b3"]]);
ud({
  components: {
    FeatherListItem: Xi
  }
});
const FT = {}, UT = { class: "feather-list" };
function WT(e, o) {
  return LT(), MT("ul", UT, [
    OT(e.$slots, "default", {}, void 0, !0)
  ]);
}
var cd = /* @__PURE__ */ s_(FT, [["render", WT], ["__scopeId", "data-v-941a1d50"]]);
const qT = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, HT = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
ud({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: qT,
  props: HT,
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
      (e.keyCode === X.SPACE || e.keyCode === X.ENTER) && this.updateValue(), e.keyCode === X.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: xT, FeatherListItem: Xi }
});
var zT = Object.defineProperty, YT = Object.defineProperties, GT = Object.getOwnPropertyDescriptors, hw = Object.getOwnPropertySymbols, jT = Object.prototype.hasOwnProperty, ZT = Object.prototype.propertyIsEnumerable, pw = (e, o, r) => o in e ? zT(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Tt = (e, o) => {
  for (var r in o || (o = {}))
    jT.call(o, r) && pw(e, r, o[r]);
  if (hw)
    for (var r of hw(o))
      ZT.call(o, r) && pw(e, r, o[r]);
  return e;
}, KT = (e, o) => YT(e, GT(o));
const Ho = window.Vue.defineComponent, le = window.Vue.openBlock, Re = window.Vue.createElementBlock, vt = window.Vue.createElementVNode, an = window.Vue.toDisplayString, jt = window.Vue.createCommentVNode, Me = window.Vue.resolveComponent, Gt = window.Vue.createBlock, et = window.Vue.withCtx, Io = window.Vue.Fragment, Ui = window.Vue.renderList, mt = window.Vue.createVNode, dd = window.Vue.withModifiers, Or = window.Vue.normalizeClass, Wc = window.Vue.renderSlot, a_ = window.Vue.createTextVNode, JT = window.Vue.pushScopeId, XT = window.Vue.popScopeId, l_ = window.Vue.reactive, u_ = window.Vue.nextTick, Ku = window.Vue.markRaw, Ju = window.Vue.toRef, ww = window.Vue.computed, QT = window.Vue.toRefs, lo = window.Vue.ref, Xu = window.Vue.mergeProps, vw = window.Vue.toHandlers, Xs = window.Vue.withDirectives, Qs = window.Vue.vShow;
var Qa = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, fd = {
  query: {
    type: String
  }
}, Ur = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const eD = Ho({
  mixins: [],
  props: Tt(Tt({
    text: {
      type: String,
      required: !0
    }
  }, Qa), fd),
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
}), tD = {
  key: 0,
  class: "highlight"
}, nD = { key: 1 };
function rD(e, o, r, s, a, u) {
  return le(), Re("span", null, [
    vt("span", null, an(e.beginning), 1),
    e.highlighted ? (le(), Re("span", tD, an(e.highlighted), 1)) : jt("", !0),
    e.end ? (le(), Re("span", nD, an(e.end), 1)) : jt("", !0)
  ]);
}
var c_ = /* @__PURE__ */ Ur(eD, [["render", rD], ["__scopeId", "data-v-8abe2492"]]);
const oD = Ho({
  emits: ["select", "deselect"],
  props: Tt(Tt({
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
  }, Qa), fd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        ji(o, r.$el);
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
    FeatherList: cd,
    FeatherListItem: Xi,
    Highlighter: c_
  }
}), iD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function sD(e, o, r, s, a, u) {
  const c = Me("Highlighter"), f = Me("FeatherListItem"), w = Me("FeatherList");
  return le(), Gt(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: et(() => [
      (le(!0), Re(Io, null, Ui(e.items, (m, _) => (le(), Re(Io, {
        key: m[e.textProp]
      }, [
        mt(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(m),
          highlighted: e.isActive(_),
          selected: e.isSelected(m),
          onClick: dd(($) => e.select(m), ["stop"])
        }, {
          default: et(() => [
            mt(c, {
              highlight: e.highlight,
              query: e.query,
              text: m[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            m._new ? (le(), Re("span", iD, an(e.newLabel), 1)) : jt("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && m._new ? (le(), Re("li", {
          role: "presentation",
          key: m[e.textProp] + "hr",
          class: "hr"
        })) : jt("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var aD = /* @__PURE__ */ Ur(oD, [["render", sD], ["__scopeId", "data-v-f623434a"]]);
const lD = Ho({
  emits: ["select"],
  props: Tt(Tt({
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
  }, Qa), fd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        ji(o, r);
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
    Highlighter: c_
  }
}), uD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, cD = ["aria-multiselectable"], dD = { role: "row" }, fD = ["aria-selected", "onClick"], hD = ["id", "aria-selected"], pD = { key: 1 };
function wD(e, o, r, s, a, u) {
  const c = Me("Highlighter");
  return le(), Re("div", uD, [
    vt("table", {
      class: Or(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      vt("thead", null, [
        vt("tr", dD, [
          (le(!0), Re(Io, null, Ui(e.config, (f) => (le(), Re("th", {
            key: f.title
          }, an(f.title), 1))), 128))
        ])
      ]),
      vt("tbody", null, [
        (le(!0), Re(Io, null, Ui(e.items, (f, w) => (le(), Re("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Or({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: dd((m) => e.select(f), ["stop"])
        }, [
          (le(!0), Re(Io, null, Ui(e.config, (m, _) => (le(), Re("td", {
            key: f[e.textProp] + m.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Or({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            m.prop === e.textProp ? (le(), Gt(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[m.prop]
            }, null, 8, ["highlight", "query", "text"])) : (le(), Re("p", pD, an(f[m.prop]), 1))
          ], 10, hD))), 128))
        ], 10, fD))), 128))
      ])
    ], 10, cD)
  ], 512);
}
var vD = /* @__PURE__ */ Ur(lD, [["render", wD], ["__scopeId", "data-v-58c88fd1"]]);
const mD = Ho({
  components: {
    FeatherList: cd,
    FeatherListItem: Xi
  }
});
function _D(e, o, r, s, a, u) {
  const c = Me("FeatherListItem"), f = Me("FeatherList");
  return le(), Gt(f, { class: "result-list" }, {
    default: et(() => [
      mt(c, { "as-li": "" }, {
        default: et(() => [
          Wc(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var gD = /* @__PURE__ */ Ur(mD, [["render", _D], ["__scopeId", "data-v-06b752c6"]]);
const $D = Ho({
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
    Cancel: Oo,
    BaseChip: Za,
    BaseChipLabel: Ka,
    BaseChipPreIcon: Ja
  }
});
function yD(e, o, r, s, a, u) {
  const c = Me("FeatherIcon"), f = Me("BaseChipPreIcon"), w = Me("BaseChipLabel"), m = Me("Cancel"), _ = Me("BaseChip");
  return le(), Gt(_, {
    class: Or(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: et(() => [
      e.showPreIcon ? (le(), Gt(f, { key: 0 }, {
        default: et(() => {
          var $, y;
          return [
            mt(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : jt("", !0),
      mt(w, null, {
        default: et(() => [
          a_(an(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? jt("", !0) : (le(), Re("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = dd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        mt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: et(() => [
            mt(m)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var VD = /* @__PURE__ */ Ur($D, [["render", yD], ["__scopeId", "data-v-e0fc6ac0"]]);
const bD = {}, CD = (e) => (JT("data-v-aa720e06"), e = e(), XT(), e), SD = { class: "spinner-container" }, ED = /* @__PURE__ */ CD(() => /* @__PURE__ */ vt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vt("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), ID = [
  ED
];
function kD(e, o) {
  return le(), Re("div", SD, ID);
}
var xD = /* @__PURE__ */ Ur(bD, [["render", kD], ["__scopeId", "data-v-aa720e06"]]), el = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(el || {});
const d_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, AD = Tt(Tt(Tt({
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
    validator: (e) => !!el[e]
  },
  labels: {
    type: Object,
    default: () => d_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Qa), Wo), Ya), BD = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, TD = (e, o, r, s) => {
  if (r.toLowerCase() === el.multi) {
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
}, DD = () => {
  const e = l_({
    row: -1
  }), o = (u) => {
    u_(() => {
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
}, ND = (e) => {
  const o = l_({
    row: -1,
    col: -1
  }), r = (c, f) => {
    u_(() => {
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
}, LD = Ho({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: BD,
  props: AD,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== el.multi;
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
      return Ku(jB);
    },
    minCharIcon() {
      return Ku(iT);
    },
    dropdownIcon() {
      return Ku(Xa);
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
        ji(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ji(this.inputRef, this.scrollContainer);
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
      r !== void 0 && (Rr(this.typingTimeout), this.typingTimeout = Pr(() => {
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
    const r = Ha(Ju(e, "labels"), d_);
    qo(e), Ga(e);
    let s;
    e.gridConfig ? s = ND(e.gridConfig) : s = DD();
    const a = Ju(e, "id"), u = ww(() => a.value ? a.value : se("feather-autocomplete-input")), { validate: c } = Fo(u, Ju(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: m, allowNew: _, type: $, minChar: y } = QT(e), T = lo(!1), B = lo(!1), M = lo(!1), N = lo(""), S = lo([]), L = lo(), k = ww(() => L.value), O = () => {
      T.value && !B.value && (N.value && N.value.length >= y.value && o.emit("search", N.value), y.value <= 0 && o.emit("search", N.value || ""), S.value = [], s.reset());
    }, I = TD({
      selectionLimit: f,
      selectionLimitReached: B,
      modelValue: w,
      textProp: m,
      allowNew: _,
      forceCloseResults: M,
      query: N,
      internalResults: S,
      input: k,
      emitSearch: O
    }, s, $.value, o.emit);
    return KT(Tt(Tt({}, r), Uo(o.attrs)), {
      query: N,
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
      input: L,
      incomingId: a,
      inputRef: k,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: za,
    InputSubText: Ro,
    AutocompleteResults: aD,
    AutocompleteResultsGrid: vD,
    Chip: VD,
    MenuMessage: gD,
    FeatherIcon: G,
    FeatherMenu: o_,
    Spinner: xD
  }
}), MD = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, OD = ["id"], PD = { "data-ref-id": "feather-autocomplete-no-results" }, RD = { "data-ref-id": "feather-autocomplete-selection-limit" }, FD = { "data-ref-id": "feather-autocomplete-min-char" };
function UD(e, o, r, s, a, u) {
  const c = Me("FeatherIcon"), f = Me("Chip"), w = Me("InputWrapper"), m = Me("AutocompleteResults"), _ = Me("AutocompleteResultsGrid"), $ = Me("MenuMessage"), y = Me("Spinner"), T = Me("FeatherMenu"), B = Me("InputSubText");
  return le(), Re("div", Xu(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    mt(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Or(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: et(({ attrs: M, on: N }) => [
        mt(w, Xu(Tt(Tt({}, M), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, vw(N), { ref: "scroll" }), {
          pre: et(() => [
            Wc(e.$slots, "pre", {}, () => [
              mt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: et(() => [
            mt(c, {
              icon: e.dropdownIcon,
              class: Or(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: et(() => [
            vt("div", {
              class: Or(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              vt("div", MD, null, 512),
              vt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, an(e.selectedDescribedByText), 9, OD),
              (le(!0), Re(Io, null, Ui(e.modelValueList, (S, L) => Xs((le(), Gt(f, {
                key: S[e.textProp],
                role: "button",
                id: L === e.activeChipIndex ? e.activeChipId : null,
                focused: L === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (k) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Qs, !e.singleSelect]
              ])), 128)),
              vt("textarea", Xu(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, vw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: et(() => [
        e.gridConfig ? jt("", !0) : Xs((le(), Gt(m, {
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
          [Qs, e.showResults]
        ]),
        e.gridConfig ? Xs((le(), Gt(_, {
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
          [Qs, e.showResults]
        ]) : jt("", !0),
        e.showNoResults ? (le(), Gt($, { key: 2 }, {
          default: et(() => [
            vt("span", PD, an(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : jt("", !0),
        e.showSelectionLimit ? (le(), Gt($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: et(() => [
            mt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            vt("span", RD, an(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : jt("", !0),
        e.minChar ? Xs((le(), Gt($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: et(() => [
            mt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            vt("span", FD, [
              Wc(e.$slots, "min-char", {}, () => [
                a_(an(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Qs, e.showMinCharWarning]
        ]) : jt("", !0),
        e.showLoading ? (le(), Gt(y, { key: 5 })) : jt("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    mt(B, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var WD = /* @__PURE__ */ Ur(LD, [["render", UD], ["__scopeId", "data-v-43a7e951"]]);
var qD = Object.defineProperty, HD = Object.defineProperties, zD = Object.getOwnPropertyDescriptors, mw = Object.getOwnPropertySymbols, YD = Object.prototype.hasOwnProperty, GD = Object.prototype.propertyIsEnumerable, _w = (e, o, r) => o in e ? qD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ya = (e, o) => {
  for (var r in o || (o = {}))
    YD.call(o, r) && _w(e, r, o[r]);
  if (mw)
    for (var r of mw(o))
      GD.call(o, r) && _w(e, r, o[r]);
  return e;
}, f_ = (e, o) => HD(e, zD(o));
const h_ = window.Vue.defineComponent, jD = window.Vue.ref, Wi = window.Vue.computed, ZD = window.Vue.reactive, gw = window.Vue.watch, Qu = window.Vue.inject, p_ = window.Vue.resolveComponent, qc = window.Vue.openBlock, w_ = window.Vue.createElementBlock, rr = window.Vue.createElementVNode, KD = window.Vue.createBlock, JD = window.Vue.createCommentVNode, v_ = window.Vue.renderSlot, XD = window.Vue.pushScopeId, QD = window.Vue.popScopeId, ec = window.Vue.toRef, $w = window.Vue.mergeProps, eN = window.Vue.toDisplayString, tN = window.Vue.createVNode;
var m_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nN = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, rN = h_({
  props: nN,
  setup(e) {
    const o = jD(), r = () => {
      o.value.focus();
    }, s = Wi(() => se("feather-radio-button")), a = ZD({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = Wi(() => se("radio-label-id")), c = Wi(() => a.first || a.checked ? 0 : -1);
    gw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), gw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = Qu("register", ($) => {
    }), w = Qu("blur", ($) => {
    }), m = Qu("select", ($) => {
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
    FeatherRipple: or
  }
}), oN = (e) => (XD("data-v-24790cf0"), e = e(), QD(), e), iN = { class: "layout-container" }, sN = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], aN = { class: "radio hover focus" }, lN = /* @__PURE__ */ oN(() => /* @__PURE__ */ rr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ rr("svg", { class: "dot" }, [
    /* @__PURE__ */ rr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), uN = ["id"];
function cN(e, o, r, s, a, u) {
  const c = p_("feather-ripple");
  return qc(), w_("div", iN, [
    rr("div", {
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
      rr("div", aN, [
        lN,
        e.vm.disabled ? JD("", !0) : (qc(), KD(c, {
          key: 0,
          center: ""
        }))
      ]),
      rr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        v_(e.$slots, "default", {}, void 0, !0)
      ], 8, uN)
    ], 40, sN)
  ]);
}
var Hc = /* @__PURE__ */ m_(rN, [["render", cN], ["__scopeId", "data-v-24790cf0"]]);
const dN = f_(ya({}, Wo), {
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
}), fN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, hN = h_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: dN,
  emits: fN,
  setup(e, o) {
    qo(e);
    const r = ec(e, "error"), s = ec(e, "modelValue"), a = Wi(() => se("feather-input-description")), u = Wi(() => {
      const c = f_(ya({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return ya(ya({
      descriptionId: a,
      attrs: u
    }, Xm(s, o.emit, e.label, e.schema, ec(e, "error"))), Uo(o.attrs));
  },
  components: {
    InputSubText: Ro
  }
}), pN = ["for"], wN = ["id"];
function vN(e, o, r, s, a, u) {
  const c = p_("InputSubText");
  return qc(), w_("div", $w(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    rr("label", {
      for: e.groupId,
      class: "group-label"
    }, eN(e.label), 9, pN),
    rr("div", $w(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      v_(e.$slots, "default", {}, void 0, !0)
    ], 16, wN),
    tN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var __ = /* @__PURE__ */ m_(hN, [["render", vN], ["__scopeId", "data-v-6775aeb9"]]);
const mN = window.Vue.defineComponent, _N = window.Vue.renderList, gN = window.Vue.Fragment, yw = window.Vue.openBlock, $N = window.Vue.createElementBlock, yN = window.Vue.toDisplayString, VN = window.Vue.createTextVNode, Vw = window.Vue.unref, bw = window.Vue.withCtx, bN = window.Vue.createVNode, CN = window.Vue.createBlock, SN = window.Vue.watch, EN = window.Vue.ref, IN = /* @__PURE__ */ mN({
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
    ], a = EN(r.preSelected || s[0].id);
    return SN(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (yw(), CN(Vw(__), {
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
      default: bw(() => [
        (yw(), $N(gN, null, _N(s, (f) => bN(Vw(Hc), {
          value: f.id,
          key: f.id
        }, {
          default: bw(() => [
            VN(yN(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const kN = /* @__PURE__ */ ce(IN, [["__scopeId", "data-v-0363302c"]]);
var xN = Object.defineProperty, AN = Object.defineProperties, BN = Object.getOwnPropertyDescriptors, Cw = Object.getOwnPropertySymbols, TN = Object.prototype.hasOwnProperty, DN = Object.prototype.propertyIsEnumerable, Sw = (e, o, r) => o in e ? xN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, gi = (e, o) => {
  for (var r in o || (o = {}))
    TN.call(o, r) && Sw(e, r, o[r]);
  if (Cw)
    for (var r of Cw(o))
      DN.call(o, r) && Sw(e, r, o[r]);
  return e;
}, Ew = (e, o) => AN(e, BN(o));
const NN = window.Vue.defineComponent, LN = window.Vue.inject, $i = window.Vue.h;
var MN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ON = {
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
}, PN = NN({
  inheritAttrs: !1,
  props: ON,
  setup() {
    return { hasTooltip: LN("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, s = gi({}, this.$attrs);
    r.attrs = s || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = $i(or);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), $i(o, Ew(gi(gi({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : $i(or, { center: !0 })
      ]);
    }
    const c = $i("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return $i(o, Ew(gi(gi({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ue = /* @__PURE__ */ MN(PN, [["__scopeId", "data-v-702d1074"]]);
const RN = window.Vue.openBlock, FN = window.Vue.createElementBlock, UN = window.Vue.createElementVNode;
var WN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const qN = {}, HN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zN = /* @__PURE__ */ UN("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), YN = [
  zN
];
function GN(e, o) {
  return RN(), FN("svg", HN, YN);
}
var jN = /* @__PURE__ */ WN(qN, [["render", GN]]);
const ZN = window.Vue.openBlock, KN = window.Vue.createElementBlock, JN = window.Vue.createElementVNode;
var XN = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const QN = {}, eL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, tL = /* @__PURE__ */ JN("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), nL = [
  tL
];
function rL(e, o) {
  return ZN(), KN("svg", eL, nL);
}
var oL = /* @__PURE__ */ XN(QN, [["render", rL]]);
const iL = window.Vue.openBlock, sL = window.Vue.createElementBlock, aL = window.Vue.createElementVNode;
var lL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const uL = {}, cL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, dL = /* @__PURE__ */ aL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), fL = [
  dL
];
function hL(e, o) {
  return iL(), sL("svg", cL, fL);
}
var g_ = /* @__PURE__ */ lL(uL, [["render", hL]]);
const pL = window.Vue.defineComponent, fn = window.Vue.unref, Cr = window.Vue.createVNode, Iw = window.Vue.toDisplayString, Nn = window.Vue.createElementVNode, $_ = window.Vue.createTextVNode, kw = window.Vue.openBlock, xw = window.Vue.createElementBlock, wL = window.Vue.createCommentVNode, vL = window.Vue.withCtx, mL = window.Vue.vShow, _L = window.Vue.normalizeClass, gL = window.Vue.withDirectives, $L = window.Vue.Fragment, yL = window.Vue.pushScopeId, VL = window.Vue.popScopeId, y_ = (e) => (yL("data-v-b1dc2670"), e = e(), VL(), e), bL = /* @__PURE__ */ $_(" Filters "), CL = { class: "count" }, SL = { class: "results" }, EL = { class: "total" }, IL = /* @__PURE__ */ $_(" Reset "), kL = /* @__PURE__ */ y_(() => /* @__PURE__ */ Nn("div", { class: "title" }, "By Severities:", -1)), xL = /* @__PURE__ */ y_(() => /* @__PURE__ */ Nn("div", { class: "title" }, "By Start Date:", -1)), Sr = window.Vue.ref, AL = window.Vue.reactive, BL = window.Vue.markRaw, Aw = window.Vue.watch, TL = /* @__PURE__ */ pL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = BL({
      FilterAlt: jN,
      ExpandLess: oL,
      ExpandMore: Xa,
      Refresh: g_
    }), a = ln(), u = Sr(r.isOpen), c = Sr(["all"]), f = Sr(1), w = Sr(r.list), m = Sr(!1), _ = Sr(0), $ = Sr(null), y = AL({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var F, P;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((F = a.filters) == null ? void 0 : F.severities) && !((P = a.filters) != null && P.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, k());
    }, B = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Aw(
      () => a.nodes,
      () => {
        B();
      }
    ), Aw(r, () => {
      w.value = r.list, T();
    });
    const M = (F) => {
      c.value = F, k();
    }, N = (F) => {
      f.value = F, k();
    }, S = (F) => {
      if (!F)
        return y.nodeSelectedValue = void 0, [];
      m.value = !0, y.results = y.nodes.filter((P) => P.label.toLowerCase().indexOf(F) > -1).map((P) => ({
        _text: P.label,
        id: P.id
      })), m.value = !1;
    }, L = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), w.value = r.list;
    }, k = () => {
      _.value = 0;
      let F = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, r.isSituation ? F = F.map((P) => {
        if (P.relatedAlarms.filter(
          (de) => {
            var me;
            return de.nodeLabel === ((me = y.nodeSelectedValue) == null ? void 0 : me._text);
          }
        ).length > 0)
          return P;
      }).filter((P) => P) : F = F.filter(
        (P) => {
          var W;
          return P.nodeLabel === ((W = y.nodeSelectedValue) == null ? void 0 : W._text);
        }
      )), c.value.includes("all") || (_.value++, F = F.filter(
        (P) => c.value.includes(P.severity)
      )), f.value !== 1 && (_.value++, F = AI(
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
    return (F, P) => (kw(), xw($L, null, [
      r.isOpen ? wL("", !0) : (kw(), xw("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        Nn("div", null, [
          Cr(fn(G), {
            icon: fn(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          bL,
          Nn("span", CL, Iw(_.value), 1)
        ]),
        Cr(fn(G), {
          icon: u.value ? fn(s).ExpandLess : fn(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      gL(Nn("div", {
        class: _L(["filters", { collapsed: !r.isOpen }])
      }, [
        Nn("div", SL, [
          Nn("div", EL, "Results: " + Iw(fn(w).length), 1),
          Cr(fn(ue), {
            class: "btn-reset",
            onClick: L
          }, {
            default: vL(() => [
              Cr(fn(G), {
                icon: fn(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              IL
            ]),
            _: 1
          })
        ]),
        Nn("div", null, [
          Cr(fn(WD), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: m.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              P[0] || (P[0] = (W) => y.nodeSelectedValue = W),
              k
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          kL,
          Cr(cB, {
            alarms: r.list,
            onSelectedOption: M,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Nn("div", null, [
            xL,
            Cr(kN, {
              onFilterDateSelected: N,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [mL, u.value]
      ])
    ], 64));
  }
});
const zo = /* @__PURE__ */ ce(TL, [["__scopeId", "data-v-b1dc2670"]]), DL = window.Vue.openBlock, NL = window.Vue.createElementBlock, LL = window.Vue.createElementVNode;
var ML = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const OL = {}, PL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, RL = /* @__PURE__ */ LL("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), FL = [
  RL
];
function UL(e, o) {
  return DL(), NL("svg", PL, FL);
}
var tl = /* @__PURE__ */ ML(OL, [["render", UL]]);
const WL = window.Vue.openBlock, qL = window.Vue.createElementBlock, V_ = window.Vue.createElementVNode;
var HL = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const zL = {}, YL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GL = /* @__PURE__ */ V_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), jL = /* @__PURE__ */ V_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), ZL = [
  GL,
  jL
];
function KL(e, o) {
  return WL(), qL("svg", YL, ZL);
}
var JL = /* @__PURE__ */ HL(zL, [["render", KL]]);
const XL = window.Vue.openBlock, QL = window.Vue.createElementBlock, eM = window.Vue.createElementVNode;
var tM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nM = {}, rM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oM = /* @__PURE__ */ eM("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), iM = [
  oM
];
function sM(e, o) {
  return XL(), QL("svg", rM, iM);
}
var aM = /* @__PURE__ */ tM(nM, [["render", sM]]);
const ar = () => window.VRouter || Vg;
const lM = window.Vue.openBlock, uM = window.Vue.createElementBlock, cM = window.Vue.pushScopeId, dM = window.Vue.popScopeId, Bw = window.Vue.createElementVNode;
var fM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hM = {}, pM = (e) => (cM("data-v-2263be39"), e = e(), dM(), e), wM = { class: "spinner-container" }, vM = /* @__PURE__ */ pM(() => /* @__PURE__ */ Bw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Bw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), mM = [
  vM
];
function _M(e, o) {
  return lM(), uM("div", wM, mM);
}
var hd = /* @__PURE__ */ fM(hM, [["render", _M], ["__scopeId", "data-v-2263be39"]]);
const gM = window.Vue.defineComponent, tc = window.Vue.unref, $M = window.Vue.createVNode, yM = window.Vue.createElementVNode, VM = window.Vue.withCtx, bM = window.Vue.openBlock, CM = window.Vue.createBlock, SM = window.Vue.pushScopeId, EM = window.Vue.popScopeId, IM = (e) => (SM("data-v-fba500de"), e = e(), EM(), e), kM = /* @__PURE__ */ IM(() => /* @__PURE__ */ yM("span", null, "New Situation", -1)), xM = window.Vue.markRaw, AM = /* @__PURE__ */ gM({
  __name: "NewSituationBtn",
  setup(e) {
    const o = ar(), r = xM({
      Add: tl
    }), s = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (bM(), CM(tc(ue), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: VM(() => [
        $M(tc(G), {
          icon: tc(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        kM
      ]),
      _: 1
    }));
  }
});
const b_ = /* @__PURE__ */ ce(AM, [["__scopeId", "data-v-fba500de"]]), BM = "/whoami", TM = async () => {
  try {
    const e = await Dt.get(BM);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, nl = "/alec", C_ = "/alec/engine/configuration", S_ = "/alec/claude/configuration", E_ = "/alec/situation", DM = async () => {
  try {
    const e = await Dt.get(`${C_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, NM = async (e) => {
  try {
    return (await Dt.post(C_, e)).status === 200;
  } catch {
    return !1;
  }
}, LM = async () => {
  try {
    const e = await Dt.get(S_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, MM = async (e) => {
  try {
    const o = await Dt.post(S_, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, I_ = async (e, o) => {
  try {
    const r = await Dt.post(`${nl}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == ze.REJECTED.toLowerCase() && r.status === 200 && await Om(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Tw = async (e, o) => {
  try {
    return (await Dt.delete(`${nl}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, k_ = async (e, o) => {
  try {
    return (await Dt.put(`${nl}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, OM = async (e) => {
  try {
    return (await Dt.post(E_, e)).status === 200;
  } catch {
    return !1;
  }
}, PM = async () => {
  try {
    return (await Dt.post(`${E_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, RM = async () => {
  try {
    return (await Dt.post(`${nl}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, FM = window.Pinia.defineStore, UM = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Do = FM("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    claudeConfig: null
  }),
  actions: {
    async getUserRole() {
      const e = await TM();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await DM();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...UM,
        ...r,
        distanceMeasureName: o ? ze.HELLINGER_OPTION : ze.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await NM(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getClaudeConfig() {
      const e = await LM();
      return e && (this.claudeConfig = e), e;
    },
    async setClaudeConfig(e) {
      const o = await MM(e);
      return o ? (this.claudeConfig = o, !0) : !1;
    }
  }
}), WM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", qM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", HM = window.Vue.defineComponent, ea = window.Vue.unref, Dw = window.Vue.createElementVNode, nc = window.Vue.openBlock, rc = window.Vue.createElementBlock, zM = window.Vue.createCommentVNode, YM = window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const GM = {
  key: 0,
  class: "info-engine"
}, jM = ["src"], ZM = /* @__PURE__ */ YM(" ENGINE "), KM = {
  key: 0,
  class: "type"
}, JM = {
  key: 1,
  class: "type"
}, XM = window.Vue.watch, QM = window.Vue.ref, e3 = /* @__PURE__ */ HM({
  __name: "ConfigurationInfo",
  setup(e) {
    var u;
    const o = ar(), r = Do(), s = () => {
      o.push({
        name: "settings"
      });
    }, a = QM(
      ((u = r.engineInfo) == null ? void 0 : u.engineName) == ze.ENGINE_DBSCAN
    );
    return XM(
      () => r.engineInfo,
      () => {
        var c;
        a.value = ((c = r.engineInfo) == null ? void 0 : c.engineName) == ze.ENGINE_DBSCAN;
      }
    ), (c, f) => ea(r).engineInfo && ea(r).engineInfo.engineName ? (nc(), rc("div", GM, [
      Dw("img", {
        src: a.value ? ea(qM) : ea(WM),
        class: "icon-type"
      }, null, 8, jM),
      Dw("div", {
        class: "engine",
        onClick: s
      }, [
        ZM,
        a.value ? (nc(), rc("div", KM, "CLUSTERING")) : (nc(), rc("div", JM, "DEEP LEARNING"))
      ])
    ])) : zM("", !0);
  }
});
const t3 = /* @__PURE__ */ ce(e3, [["__scopeId", "data-v-9a6c1414"]]);
const n3 = {}, r3 = window.Vue.openBlock, o3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const i3 = { class: "empty" };
function s3(e, o) {
  return r3(), o3("div", i3, "No results found.");
}
const Yo = /* @__PURE__ */ ce(n3, [["render", s3], ["__scopeId", "data-v-725433ac"]]), a3 = window.Vue.defineComponent, hn = window.Vue.createElementVNode, yi = window.Vue.unref, Er = window.Vue.createVNode, l3 = window.Vue.withCtx, ta = window.Vue.toDisplayString, Bn = window.Vue.openBlock, Ir = window.Vue.createElementBlock, Nw = window.Vue.createCommentVNode, Lw = window.Vue.createBlock, u3 = window.Vue.renderList, c3 = window.Vue.Fragment, d3 = window.Vue.pushScopeId, f3 = window.Vue.popScopeId, x_ = (e) => (d3("data-v-2675e2f8"), e = e(), f3(), e), h3 = { class: "list-main" }, p3 = { class: "header" }, w3 = /* @__PURE__ */ x_(() => /* @__PURE__ */ hn("h2", null, "Situation List", -1)), v3 = { class: "link-btns" }, m3 = /* @__PURE__ */ x_(() => /* @__PURE__ */ hn("span", null, "View Unassociated Alarms", -1)), _3 = { class: "content" }, g3 = { class: "left-filters" }, $3 = { class: "container" }, y3 = { class: "autocomplete" }, V3 = { key: 0 }, b3 = { key: 1 }, C3 = { key: 0 }, S3 = { class: "situation-list" }, E3 = {
  key: 0,
  class: "footer-pager"
}, I3 = window.Vue.reactive, na = window.Vue.ref, k3 = window.Vue.watch, x3 = window.Vue.markRaw, A3 = /* @__PURE__ */ a3({
  __name: "SituationList",
  setup(e) {
    const o = x3({
      Add: tl,
      View: JL,
      Settings: aM
    }), r = ar(), s = ln(), a = Do();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = I3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = na(!0), w = na(0), m = na(1), _ = na(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    k3(
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
      const L = S.map((k) => k.id);
      s.filteredSituations = L, w.value = 0, c.situations = c.allSituations[0], m.value = c.allSituations.length;
    }, N = (S) => {
      S.length ? M(S) : c.situations = [];
    };
    return (S, L) => {
      var k;
      return Bn(), Ir("div", h3, [
        hn("div", p3, [
          w3,
          hn("div", v3, [
            Er(yi(ue), {
              class: "view-situation-btn",
              onClick: L[0] || (L[0] = () => B())
            }, {
              default: l3(() => [
                Er(yi(G), {
                  icon: yi(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                m3
              ]),
              _: 1
            }),
            Er(b_),
            Er(t3)
          ])
        ]),
        hn("div", _3, [
          hn("div", g3, [
            Er(zo, {
              list: yi(s).situations,
              onFilteredList: N,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          hn("div", $3, [
            hn("div", y3, [
              c.situations && c.situations.length ? (Bn(), Ir("div", V3, " Result: " + ta((k = c.situations) == null ? void 0 : k.length) + " of " + ta(_.value), 1)) : Nw("", !0)
            ]),
            f.value ? (Bn(), Lw(yi(hd), {
              key: 0,
              class: "spinner"
            })) : (Bn(), Ir("div", b3, [
              c.situations && c.situations.length ? (Bn(), Ir("div", C3, [
                hn("div", S3, [
                  (Bn(!0), Ir(c3, null, u3(c.situations, (O) => (Bn(), Ir("div", {
                    class: "card",
                    key: O.id
                  }, [
                    Er(Gm, {
                      onClick: () => T(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Bn(), Ir("div", E3, [
                  hn("div", null, "Page: " + ta(w.value + 1) + " of " + ta(m.value), 1),
                  Er(Fk, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: m.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Nw("", !0)
              ])) : (Bn(), Lw(Yo, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const B3 = /* @__PURE__ */ ce(A3, [["__scopeId", "data-v-2675e2f8"]]);
const ra = window.Vue.ref, T3 = window.Vue.inject, D3 = window.Vue.computed, N3 = window.Vue.onMounted, A_ = {
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
}, B_ = (e) => {
  const o = ra(!1), r = ra(), s = ra(e.controls), a = ra(e.id), u = () => {
    r.value && r.value.focus();
  }, c = T3("registerTab");
  N3(() => {
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
  const f = D3(() => ({
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
}, Mw = window.Vue.ref, L3 = window.Vue.toRef, M3 = window.Vue.watch, Ow = window.Vue.provide, T_ = {
  prop: "modelValue",
  event: "update:modelValue"
}, D_ = {
  "update:modelValue": (e) => !0
}, N_ = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, L_ = (e, o) => {
  const r = L3(e, "modelValue"), s = Mw(e.modelValue), a = Mw([]);
  M3(r, (B) => {
    w(B);
  });
  const u = (B) => {
    B.preventDefault(), a.value.some((M, N) => M.tab && M.tab.el.contains(B.target) ? (f(N), w(N), !0) : !1);
  }, c = (B) => {
    if (((W) => W.shiftKey || W.ctrlKey || W.metaKey || W.altKey)(B))
      return;
    const N = B.keyCode, S = (W) => {
      W.stopPropagation(), W.preventDefault();
    }, L = a.value.filter((W) => W.tab && !W.tab.disabled), k = a.value.findIndex((W) => W.tab && W.tab.el.contains(document.activeElement));
    let O = k !== -1 ? k : s.value;
    const I = [X.RIGHT], F = [X.LEFT], P = [X.ENTER, X.SPACE];
    e.vertical && (I.push(X.DOWN), F.push(X.UP)), I.indexOf(N) > -1 ? (O++, O >= L.length && (O = 0), S(B), f(a.value.indexOf(L[O]))) : F.indexOf(N) > -1 && (O--, O < 0 && (O = L.length - 1), S(B), f(a.value.indexOf(L[O]))), P.indexOf(N) > -1 && w(O);
  }, f = (B) => {
    a.value.forEach(function(M, N) {
      B === N && M.tab && M.tab.focus();
    });
  }, w = (B) => {
    const M = a.value[B];
    !M || M.tab && M.tab.disabled || (a.value.forEach((N, S) => {
      N.tab && (N.tab.selected = B === S), N.panel && (N.panel.selected = B === S);
    }), s.value = B, o.emit("update:modelValue", B));
  };
  Ow("registerTab", (B) => {
    const M = B.index;
    M > -1 && (a.value[M] = { ...a.value[M], tab: B }, a.value = [...a.value], $());
  }), Ow("registerPanel", (B) => {
    const M = B.index;
    M > -1 && (a.value[M] = {
      ...a.value[M],
      panel: B
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: B, panel: M }, N) => {
      if (M && B) {
        const S = B.id || se("tab"), L = B.controls || se("panel");
        B.controls = L, B.id = S, M.tab = S, M.id = L;
      }
      N === s.value && (M && (M.selected = !0), B && (B.selected = !0));
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
}, oa = window.Vue.ref, O3 = window.Vue.inject, P3 = window.Vue.computed, R3 = window.Vue.onMounted, M_ = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, O_ = (e) => {
  const o = oa(!1), r = oa(), s = oa(e.tab), a = oa(e.id), u = O3("registerPanel");
  R3(() => {
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
  const c = P3(() => ({
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
}, pd = window.Vue.defineComponent, F3 = window.Vue.resolveComponent, wd = window.Vue.openBlock, vd = window.Vue.createElementBlock, qi = window.Vue.createElementVNode, P_ = window.Vue.mergeProps, Na = window.Vue.renderSlot, U3 = window.Vue.createVNode, W3 = window.Vue.normalizeStyle, q3 = window.Vue.toHandlers, H3 = window.Vue.withDirectives, z3 = window.Vue.normalizeProps, Y3 = window.Vue.guardReactiveProps, G3 = window.Vue.vShow;
var md = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const j3 = A_, Z3 = pd({
  props: j3,
  setup(e) {
    return B_(e);
  },
  components: {
    FeatherRipple: or
  }
}), K3 = { role: "presentation" }, J3 = { class: "tab-text" };
function X3(e, o, r, s, a, u) {
  const c = F3("FeatherRipple");
  return wd(), vd("li", K3, [
    qi("button", P_(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      qi("span", J3, [
        Na(e.$slots, "default", {}, void 0, !0)
      ]),
      U3(c)
    ], 16)
  ]);
}
var Pw = /* @__PURE__ */ md(Z3, [["render", X3], ["__scopeId", "data-v-e6bb52b6"]]);
const Q3 = N_, eO = D_, tO = pd({
  model: T_,
  emits: eO,
  props: Q3,
  setup(e, o) {
    return L_(e, o);
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
}), nO = { class: "feather-tab-container" }, rO = { class: "tab-panels" };
function oO(e, o, r, s, a, u) {
  return wd(), vd("div", nO, [
    qi("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: W3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    qi("ul", P_(e.attrs, q3(e.listeners)), [
      Na(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    qi("div", rO, [
      Na(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var iO = /* @__PURE__ */ md(tO, [["render", oO], ["__scopeId", "data-v-27adffb9"]]);
const sO = M_, aO = pd({
  props: sO,
  setup(e) {
    return O_(e);
  }
});
function lO(e, o, r, s, a, u) {
  return H3((wd(), vd("div", z3(Y3(e.attrs)), [
    Na(e.$slots, "default")
  ], 16)), [
    [G3, e.selected]
  ]);
}
var Rw = /* @__PURE__ */ md(aO, [["render", lO]]);
const uO = window.Vue.defineComponent, cO = window.Vue.toDisplayString, dO = window.Vue.normalizeClass, fO = window.Vue.openBlock, hO = window.Vue.createElementBlock, pO = window.Vue.createCommentVNode, wO = /* @__PURE__ */ uO({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (fO(), hO("span", {
      key: 0,
      class: dO(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, cO(o.severity), 3)) : pO("", !0);
  }
});
const R_ = /* @__PURE__ */ ce(wO, [["__scopeId", "data-v-83c2cdce"]]), vO = window.Vue.defineComponent, Fw = window.Vue.toDisplayString, Uw = window.Vue.createElementVNode, mO = window.Vue.openBlock, _O = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const gO = { class: "box" }, $O = { class: "label" }, yO = { class: "date" }, VO = /* @__PURE__ */ vO({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (mO(), _O("div", gO, [
      Uw("div", $O, Fw(o.label), 1),
      Uw("div", yO, Fw(o.info), 1)
    ]));
  }
});
const oc = /* @__PURE__ */ ce(VO, [["__scopeId", "data-v-b4afa751"]]), bO = window.Vue.defineComponent, CO = window.Vue.unref, SO = window.Vue.renderList, EO = window.Vue.Fragment, ic = window.Vue.openBlock, sc = window.Vue.createElementBlock, IO = window.Vue.toDisplayString, kO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const xO = { class: "alarms-list" }, AO = /* @__PURE__ */ bO({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (ic(), sc("div", xO, [
      (ic(!0), sc(EO, null, SO(CO(ve.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (ic(), sc("div", {
        class: kO(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, IO(a.length), 3))), 128))
    ]));
  }
});
const BO = /* @__PURE__ */ ce(AO, [["__scopeId", "data-v-52d63440"]]), TO = window.Vue.openBlock, DO = window.Vue.createElementBlock, NO = window.Vue.createElementVNode;
var LO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const MO = {}, OO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PO = /* @__PURE__ */ NO("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), RO = [
  PO
];
function FO(e, o) {
  return TO(), DO("svg", OO, RO);
}
var UO = /* @__PURE__ */ LO(MO, [["render", FO]]);
const WO = window.Vue.openBlock, qO = window.Vue.createElementBlock, HO = window.Vue.createStaticVNode;
var zO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const YO = {}, GO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jO = /* @__PURE__ */ HO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), ZO = [
  jO
];
function KO(e, o) {
  return WO(), qO("svg", GO, ZO);
}
var La = /* @__PURE__ */ zO(YO, [["render", KO]]);
const JO = window.Vue.defineComponent, nn = window.Vue.unref, ac = window.Vue.createVNode, _d = window.Vue.createElementVNode, lc = window.Vue.withCtx, ia = window.Vue.openBlock, uc = window.Vue.createBlock, cc = window.Vue.createCommentVNode, XO = window.Vue.normalizeClass, QO = window.Vue.createElementBlock, e4 = window.Vue.pushScopeId, t4 = window.Vue.popScopeId, gd = (e) => (e4("data-v-e073070b"), e = e(), t4(), e), n4 = /* @__PURE__ */ gd(() => /* @__PURE__ */ _d("span", null, "Acknowledge", -1)), r4 = /* @__PURE__ */ gd(() => /* @__PURE__ */ _d("span", null, "Escalate", -1)), o4 = /* @__PURE__ */ gd(() => /* @__PURE__ */ _d("span", null, "Clear", -1)), i4 = /* @__PURE__ */ JO({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = ln(), s = async (u) => {
      await EE(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await I_(
        o.situationId,
        ze.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await Om(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (ia(), QO("div", {
      class: XO(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? cc("", !0) : (ia(), uc(nn(ue), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: lc(() => [
          ac(nn(G), {
            icon: nn(Bo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          n4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (ia(), uc(nn(ue), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(nn(ze).ESCALATE))
      }, {
        default: lc(() => [
          ac(nn(G), {
            icon: nn(UO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          r4
        ]),
        _: 1
      })) : cc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (ia(), uc(nn(ue), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(nn(ze).CLEAR))
      }, {
        default: lc(() => [
          ac(nn(G), {
            icon: nn(La),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          o4
        ]),
        _: 1
      })) : cc("", !0)
    ], 2));
  }
});
const F_ = /* @__PURE__ */ ce(i4, [["__scopeId", "data-v-e073070b"]]);
var s4 = Object.defineProperty, a4 = Object.defineProperties, l4 = Object.getOwnPropertyDescriptors, Ww = Object.getOwnPropertySymbols, u4 = Object.prototype.hasOwnProperty, c4 = Object.prototype.propertyIsEnumerable, qw = (e, o, r) => o in e ? s4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, zc = (e, o) => {
  for (var r in o || (o = {}))
    u4.call(o, r) && qw(e, r, o[r]);
  if (Ww)
    for (var r of Ww(o))
      c4.call(o, r) && qw(e, r, o[r]);
  return e;
}, U_ = (e, o) => a4(e, l4(o));
const W_ = window.Vue.defineComponent, d4 = window.Vue.inject, f4 = window.Vue.resolveComponent, dc = window.Vue.openBlock, Hw = window.Vue.createElementBlock, bo = window.Vue.createElementVNode, h4 = window.Vue.createBlock, zw = window.Vue.createCommentVNode, p4 = window.Vue.renderSlot, w4 = window.Vue.pushScopeId, v4 = window.Vue.popScopeId, fc = window.Vue.toRef, sa = window.Vue.computed, m4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var _4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const g4 = {
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
}, $4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, y4 = W_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: $4,
  props: g4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: d4("registerCheckbox", (o) => {
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
      (e.keyCode === X.SPACE || e.keyCode === X.ENTER) && this.updateValue(), e.keyCode === X.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: or
  }
}), V4 = (e) => (w4("data-v-a7af27e2"), e = e(), v4(), e), b4 = { class: "layout-container" }, C4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], S4 = { class: "checkbox hover focus" }, E4 = /* @__PURE__ */ V4(() => /* @__PURE__ */ bo("div", { class: "box" }, [
  /* @__PURE__ */ bo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ bo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ bo("div", { class: "indeterminate" })
], -1)), I4 = ["id", "for"];
function k4(e, o, r, s, a, u) {
  const c = f4("feather-ripple");
  return dc(), Hw("div", b4, [
    bo("div", {
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
      bo("div", S4, [
        E4,
        e.disabled ? zw("", !0) : (dc(), h4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? zw("", !0) : (dc(), Hw("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        p4(e.$slots, "default", {}, void 0, !0)
      ], 8, I4))
    ], 40, C4)
  ]);
}
var No = /* @__PURE__ */ _4(y4, [["render", k4], ["__scopeId", "data-v-a7af27e2"]]);
const x4 = U_(zc({}, Wo), {
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
W_({
  props: x4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    qo(e);
    const r = fc(e, "error"), s = sa(() => se("feather-checkbox-group")), a = sa(() => se("feather-input-description")), u = sa(() => se("feather-input-label")), c = sa(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), U_(zc({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = m4(s.value), { validate: w } = Fo(f, fc(e, "modelValue"), e.label, e.schema, fc(e, "error"));
    return zc({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, Uo(o.attrs));
  },
  components: {
    InputSubText: Ro
  }
});
const A4 = window.Vue.openBlock, B4 = window.Vue.createElementBlock, q_ = window.Vue.createElementVNode;
var T4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const D4 = {}, N4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L4 = /* @__PURE__ */ q_("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), M4 = /* @__PURE__ */ q_("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), O4 = [
  L4,
  M4
];
function P4(e, o) {
  return A4(), B4("svg", N4, O4);
}
var R4 = /* @__PURE__ */ T4(D4, [["render", P4]]);
var F4 = Object.defineProperty, U4 = Object.defineProperties, W4 = Object.getOwnPropertyDescriptors, Yw = Object.getOwnPropertySymbols, q4 = Object.prototype.hasOwnProperty, H4 = Object.prototype.propertyIsEnumerable, Gw = (e, o, r) => o in e ? F4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Co = (e, o) => {
  for (var r in o || (o = {}))
    q4.call(o, r) && Gw(e, r, o[r]);
  if (Yw)
    for (var r of Yw(o))
      H4.call(o, r) && Gw(e, r, o[r]);
  return e;
}, H_ = (e, o) => U4(e, W4(o));
const z4 = window.Vue.defineComponent, hc = window.Vue.toRef, Y4 = window.Vue.computed, jw = window.Vue.resolveComponent, Zw = window.Vue.openBlock, Kw = window.Vue.createElementBlock, Jw = window.Vue.mergeProps, Xw = window.Vue.createVNode, G4 = window.Vue.normalizeClass, Qw = window.Vue.withCtx, j4 = window.Vue.createElementVNode, Z4 = window.Vue.toDisplayString, K4 = window.Vue.createCommentVNode;
var J4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const X4 = H_(Co(Co({}, Ya), Wo), {
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
}), Q4 = {
  "update:modelValue": (e) => !0
}, eP = z4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: Q4,
  props: X4,
  setup(e, o) {
    qo(e), Ga(e);
    const r = hc(e, "id"), s = Y4(() => r.value ? r.value : se("feather-textarea-label")), { validate: a } = Fo(s, hc(e, "modelValue"), e.label, e.schema, hc(e, "error"));
    return Co({
      inputId: s,
      incomingId: r,
      validate: a
    }, Uo(o.attrs));
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
      const e = Co({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), H_(Co(Co({}, e), this.listeners), {
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
    InputSubText: Ro,
    InputWrapper: za
  }
}), tP = ["maxlength"], nP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function rP(e, o, r, s, a, u) {
  const c = jw("InputWrapper"), f = jw("InputSubText");
  return Zw(), Kw("div", Jw(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    Xw(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: G4(["feather-textarea-content", e.contentCls])
    }, {
      default: Qw(() => [
        j4("textarea", Jw(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, tP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Xw(f, { id: e.descriptionId }, {
      right: Qw(() => [
        e.maxlength ? (Zw(), Kw("div", nP, Z4(e.charCount), 1)) : K4("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Yc = /* @__PURE__ */ J4(eP, [["render", rP], ["__scopeId", "data-v-0648df5c"]]);
const oP = window.Pinia.defineStore, rl = oP("appStore", {
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
}), iP = window.Vue.defineComponent, ev = window.Vue.toDisplayString, Vi = window.Vue.createElementVNode, kr = window.Vue.unref, uo = window.Vue.openBlock, tv = window.Vue.createBlock, bi = window.Vue.createCommentVNode, nv = window.Vue.createVNode, aa = window.Vue.createElementBlock, sP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const aP = { class: "row" }, lP = { class: "label" }, uP = { class: "action-icons" }, cP = { class: "icon-btn" }, dP = {
  key: 0,
  class: "icon-btn"
}, fP = {
  key: 1,
  class: "icon-btn"
}, hP = {
  key: 0,
  class: "text"
}, pP = window.Vue.watch, rv = window.Vue.ref, wP = /* @__PURE__ */ iP({
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
    const o = e, r = rl(), s = rv(!1), a = rv((w = o.memo) == null ? void 0 : w.body);
    pP(o, () => {
      var m;
      a.value = (m = o.memo) == null ? void 0 : m.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await DE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await TE(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (m, _) => (uo(), aa("div", {
      class: sP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      Vi("div", aP, [
        Vi("div", lP, ev(e.label), 1),
        Vi("div", uP, [
          Vi("div", cP, [
            s.value ? bi("", !0) : (uo(), tv(kr(G), {
              key: 0,
              icon: kr(R4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (uo(), aa("div", dP, [
            nv(kr(G), {
              icon: kr(Bo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : bi("", !0),
          a.value && a.value != "" || s.value ? (uo(), aa("div", fP, [
            nv(kr(G), {
              icon: kr(Oo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : bi("", !0)
        ])
      ]),
      Vi("div", null, [
        !s.value && a.value != null ? (uo(), aa("div", hP, ev(a.value), 1)) : bi("", !0),
        s.value ? (uo(), tv(kr(Yc), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : bi("", !0)
      ])
    ], 2));
  }
});
const Ma = /* @__PURE__ */ ce(wP, [["__scopeId", "data-v-3f44e250"]]), vP = window.Vue.defineComponent, xr = window.Vue.unref, co = window.Vue.createVNode, Ci = window.Vue.toDisplayString, sn = window.Vue.createElementVNode, ov = window.Vue.openBlock, iv = window.Vue.createElementBlock, sv = window.Vue.createCommentVNode, pc = window.Vue.createTextVNode, mP = window.Vue.pushScopeId, _P = window.Vue.popScopeId, $d = (e) => (mP("data-v-02d1e7f0"), e = e(), _P(), e), gP = {
  key: 0,
  class: "card"
}, $P = { class: "row" }, yP = {
  key: 0,
  class: "ack"
}, VP = /* @__PURE__ */ $d(() => /* @__PURE__ */ sn("strong", null, " Duration: ", -1)), bP = ["innerHTML"], CP = /* @__PURE__ */ $d(() => /* @__PURE__ */ sn("strong", null, "First Event", -1)), SP = /* @__PURE__ */ $d(() => /* @__PURE__ */ sn("strong", null, "Last Event", -1)), EP = { class: "section memo-boxes" }, av = window.Vue.ref, IP = window.Vue.watch, kP = /* @__PURE__ */ vP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = av(!1), a = av(r.alarm), u = new Date().getTime();
    IP(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const m = await Pm(w);
      m && (a.value = m);
    };
    return (w, m) => {
      var _, $, y, T, B;
      return a.value ? (ov(), iv("div", gP, [
        sn("div", null, [
          sn("div", $P, [
            co(xr(No), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                m[0] || (m[0] = (M) => s.value = M),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            sn("div", {
              class: "title",
              onClick: m[1] || (m[1] = () => {
                s.value = !s.value, c();
              })
            }, Ci(a.value.nodeLabel) + " - " + Ci(a.value.id), 1),
            co(R_, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (ov(), iv("div", yP, [
              co(xr(G), {
                icon: xr(Bo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : sv("", !0)
          ]),
          sn("div", null, [
            VP,
            pc(" " + Ci(xr(qa)(xr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          sn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, bP),
          sn("div", null, [
            CP,
            pc(" - " + Ci(xr(mn)(a.value.firstEventTime)), 1)
          ]),
          sn("div", null, [
            SP,
            pc(" - " + Ci(xr(mn)(a.value.lastEventTime)), 1)
          ]),
          sn("div", EP, [
            co(Ma, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            co(Ma, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (B = a.value) == null ? void 0 : B.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        co(F_, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : sv("", !0);
    };
  }
});
const xP = /* @__PURE__ */ ce(kP, [["__scopeId", "data-v-02d1e7f0"]]), AP = window.Vue.openBlock, BP = window.Vue.createElementBlock, z_ = window.Vue.createElementVNode;
var TP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DP = {}, NP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LP = /* @__PURE__ */ z_("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), MP = /* @__PURE__ */ z_("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), OP = [
  LP,
  MP
];
function PP(e, o) {
  return AP(), BP("svg", NP, OP);
}
var Gc = /* @__PURE__ */ TP(DP, [["render", PP]]);
const RP = window.Vue.watch, FP = window.Vue.ref, UP = window.Vue.onBeforeUnmount, Y_ = (e) => {
  const o = FP(!1), r = (s) => {
    s.keyCode === X.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return RP(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), UP(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, WP = window.Vue.watch, G_ = (e) => {
  let o;
  WP(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, j_ = window.Vue.watch, Z_ = window.Vue.onBeforeUnmount, K_ = window.Vue.nextTick, qP = window.Vue.onMounted, J_ = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Oa = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, X_ = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Z_(() => Oa(o, r)), qP(() => j_(e, (s) => {
    s ? K_(() => {
      o = J_(r);
    }) : Oa(o, r);
  }, { immediate: !0 }));
}, HP = (e, o) => {
  let r;
  Z_(() => Oa(r, o.value ? o.value.offsetParent : !1)), j_([e, o], ([s, a]) => {
    s && a ? K_(() => {
      r = J_(a.offsetParent);
    }) : a && Oa(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var zP = Object.defineProperty, lv = Object.getOwnPropertySymbols, YP = Object.prototype.hasOwnProperty, GP = Object.prototype.propertyIsEnumerable, uv = (e, o, r) => o in e ? zP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, jP = (e, o) => {
  for (var r in o || (o = {}))
    YP.call(o, r) && uv(e, r, o[r]);
  if (lv)
    for (var r of lv(o))
      GP.call(o, r) && uv(e, r, o[r]);
  return e;
};
const yd = window.Vue.defineComponent, Hi = window.Vue.ref, ZP = window.Vue.nextTick, Q_ = window.Vue.openBlock, eg = window.Vue.createElementBlock, Vd = window.Vue.createElementVNode, KP = window.Vue.renderSlot, JP = window.Vue.resolveComponent, XP = window.Vue.normalizeClass, QP = window.Vue.withModifiers, eR = window.Vue.createVNode, cv = window.Vue.toRef, dv = window.Vue.computed, fv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var tg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tR = {
  enable: {
    type: Boolean,
    required: !0
  }
}, nR = yd({
  props: tR,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = Hi(), o = Hi(!1), r = (_, $) => {
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
      $ && $.focus ? ZP(() => {
        $.focus();
      }) : s(_);
    }, w = Hi();
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
}), rR = /* @__PURE__ */ Vd("div", { tabindex: "0" }, null, -1), oR = {
  class: "focus-trap-content",
  ref: "content"
}, iR = /* @__PURE__ */ Vd("div", { tabindex: "0" }, null, -1);
function sR(e, o, r, s, a, u) {
  return Q_(), eg("div", null, [
    rR,
    Vd("div", oR, [
      KP(e.$slots, "default")
    ], 512),
    iR
  ]);
}
var ng = /* @__PURE__ */ tg(nR, [["render", sR]]);
const aR = yd({
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
    icon: () => Oo
  },
  components: {
    FeatherIcon: G
  }
}), lR = ["aria-label"];
function uR(e, o, r, s, a, u) {
  const c = JP("FeatherIcon");
  return Q_(), eg("a", {
    href: "#",
    class: XP(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = QP((f) => e.$emit("close"), ["prevent"]))
  }, [
    eR(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, lR);
}
var rg = /* @__PURE__ */ tg(aR, [["render", uR], ["__scopeId", "data-v-fc0f3f00"]]);
const og = {
  title: "REQUIRED",
  close: "Close Dialog"
}, cR = {
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
    default: () => og,
    validator: (e) => !!e.title
  }
}, dR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
yd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: dR,
  props: cR,
  setup(e, o) {
    const r = Ha(cv(e, "labels"), og), s = cv(e, "modelValue"), a = Hi(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = dv(() => !!o.slots.footer), f = dv(() => se("dialog-header"));
    e.relative ? HP(s, a) : X_(s), G_(s), fv(Y_(s), () => {
      u();
    });
    const w = Hi(e.modelValue);
    return fv(w, (m) => {
      m ? o.emit("shown") : o.emit("hidden");
    }), jP({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: ng,
    DialogClose: rg
  }
});
var fR = Object.defineProperty, hv = Object.getOwnPropertySymbols, hR = Object.prototype.hasOwnProperty, pR = Object.prototype.propertyIsEnumerable, pv = (e, o, r) => o in e ? fR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ol = (e, o) => {
  for (var r in o || (o = {}))
    hR.call(o, r) && pv(e, r, o[r]);
  if (hv)
    for (var r of hv(o))
      pR.call(o, r) && pv(e, r, o[r]);
  return e;
};
const il = window.Vue.defineComponent, wv = window.Vue.toRef, vv = window.Vue.watch, mv = window.Vue.ref, _v = window.Vue.resolveComponent, la = window.Vue.openBlock, gv = window.Vue.createBlock, wR = window.Vue.Teleport, $v = window.Vue.createElementBlock, wc = window.Vue.createVNode, yv = window.Vue.Transition, vc = window.Vue.withCtx, Vv = window.Vue.createCommentVNode, vR = window.Vue.withDirectives, mR = window.Vue.normalizeStyle, _R = window.Vue.normalizeClass, bv = window.Vue.createElementVNode, gR = window.Vue.renderSlot, $R = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var yR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ig = {
  title: "REQUIRED",
  close: "Close Dialog"
}, VR = {
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
    default: () => ig,
    validator: (e) => !!e.title
  }
}, bR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, CR = il({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: bR,
  props: VR,
  setup(e, o) {
    const r = Ha(wv(e, "labels"), ig), s = wv(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    X_(s), G_(s), vv(Y_(s), () => {
      a();
    });
    const u = mv(), c = mv(!1);
    return vv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), ol({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: rg,
    FocusTrap: ng
  }
}), SR = {
  key: 0,
  class: "drawer-container feather-styles"
}, ER = {
  key: 0,
  class: "greyedOut"
}, IR = ["aria-label"], kR = { class: "slot" };
function xR(e, o, r, s, a, u) {
  const c = _v("dialog-close"), f = _v("focus-trap");
  return la(), gv(wR, { to: "body" }, [
    e.modelValue ? (la(), $v("div", SR, [
      wc(yv, { name: "greyOutShim" }, {
        default: vc(() => [
          e.modelValue ? (la(), $v("div", ER)) : Vv("", !0)
        ]),
        _: 1
      }),
      wc(yv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: vc(() => [
          vR((la(), gv(f, {
            enable: e.modelValue,
            style: mR({ width: e.width }),
            key: "sect",
            class: _R(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: vc(() => [
              bv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                bv("div", kR, [
                  gR(e.$slots, "default", {}, void 0, !0)
                ]),
                wc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, IR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [$R, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Vv("", !0)
  ]);
}
var sg = /* @__PURE__ */ yR(CR, [["render", xR], ["__scopeId", "data-v-0a36e1dc"]]);
const AR = ol({
  label: {
    type: String,
    required: !0
  }
}, A_);
il({
  name: "DrawerTab",
  props: AR,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Pr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Rr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return B_(e);
  },
  components: {
    FeatherRipple: or
  }
});
const BR = ol({}, N_), TR = D_;
il({
  emits: TR,
  model: T_,
  props: BR,
  setup(e, o) {
    return L_(e, o);
  }
});
const DR = ol({
  header: {
    type: String
  }
}, M_);
il({
  name: "DrawerTabContent",
  props: DR,
  setup(e) {
    return O_(e);
  },
  directives: {
    MenuFocusLoop: PB
  }
});
const NR = window.Vue.defineComponent, ag = window.Vue.createElementVNode, Cv = window.Vue.createVNode, LR = window.Vue.renderList, MR = window.Vue.Fragment, Si = window.Vue.openBlock, mc = window.Vue.createElementBlock, Sv = window.Vue.createBlock, OR = window.Vue.unref, PR = window.Vue.withCtx, RR = window.Vue.pushScopeId, FR = window.Vue.popScopeId, UR = (e) => (RR("data-v-c7c65659"), e = e(), FR(), e), WR = { class: "content" }, qR = /* @__PURE__ */ UR(() => /* @__PURE__ */ ag("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), HR = {
  key: 0,
  class: "situation-list"
}, _c = window.Vue.ref, Ev = window.Vue.watch, zR = /* @__PURE__ */ NR({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = ln(), a = _c(r.visible), u = () => {
      let m = s.situations;
      r.situationId !== 0 && (m = s.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = m, f.value = m;
    }, c = _c(s.situations), f = _c(s.situations);
    Ev(r, () => {
      a.value = r.visible, u();
    }), Ev(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (m) => {
      f.value = m;
    };
    return (m, _) => (Si(), Sv(OR(sg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: PR(() => [
        ag("div", WR, [
          qR,
          Cv(zo, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Si(), mc("div", HR, [
            (Si(!0), mc(MR, null, LR(f.value, ($) => (Si(), mc("div", {
              class: "card",
              key: $.id
            }, [
              Cv(Gm, {
                onClick: (y) => o("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Si(), Sv(Yo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const lg = /* @__PURE__ */ ce(zR, [["__scopeId", "data-v-c7c65659"]]), YR = window.Vue.defineComponent, Iv = window.Vue.normalizeClass, yo = window.Vue.createElementVNode, ua = window.Vue.unref, GR = window.Vue.createVNode, ca = window.Vue.toDisplayString, jR = window.Vue.createTextVNode, ZR = window.Vue.openBlock, KR = window.Vue.createElementBlock, JR = window.Vue.pushScopeId, XR = window.Vue.popScopeId, QR = (e) => (JR("data-v-e1e9b696"), e = e(), XR(), e), e8 = { class: "alarmInfo" }, t8 = { class: "alarm-title" }, n8 = /* @__PURE__ */ QR(() => /* @__PURE__ */ yo("strong", null, " Duration: ", -1)), r8 = { class: "description" }, o8 = /* @__PURE__ */ YR({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (ZR(), KR("div", {
      class: Iv(["alarm", { selected: r.selected }])
    }, [
      yo("div", e8, [
        yo("div", {
          class: Iv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        GR(ua(No), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        yo("div", t8, ca(e.alarm.nodeLabel) + " - " + ca(e.alarm.id), 1)
      ]),
      yo("div", null, [
        n8,
        jR(" " + ca(ua(qa)(ua(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      yo("div", r8, ca(ua(Ym)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const bd = /* @__PURE__ */ ce(o8, [["__scopeId", "data-v-e1e9b696"]]), i8 = window.Vue.defineComponent, Va = window.Vue.createElementVNode, fo = window.Vue.unref, s8 = window.Vue.toDisplayString, kv = window.Vue.withCtx, gc = window.Vue.createVNode, a8 = window.Vue.renderList, l8 = window.Vue.Fragment, Ei = window.Vue.openBlock, $c = window.Vue.createElementBlock, xv = window.Vue.createBlock, u8 = window.Vue.pushScopeId, c8 = window.Vue.popScopeId, d8 = (e) => (u8("data-v-4bc80d4b"), e = e(), c8(), e), f8 = { class: "content" }, h8 = { class: "header" }, p8 = /* @__PURE__ */ d8(() => /* @__PURE__ */ Va("h4", null, "ADD ALARMS", -1)), w8 = {
  key: 0,
  class: "alarms-list"
}, da = window.Vue.ref, Av = window.Vue.watch, v8 = /* @__PURE__ */ i8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = ln(), a = da(r.visible), u = da([]), c = da(["all"]), f = da(s.unassignedAlarms);
    Av(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Av(
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
    return (y, T) => (Ei(), xv(fo(sg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (B) => a.value = B),
        T[1] || (T[1] = (B) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: kv(() => [
        Va("div", f8, [
          Va("div", h8, [
            p8,
            gc(fo(ue), {
              class: "add-alarms-btn",
              onClick: m
            }, {
              default: kv(() => [
                Va("span", null, "Add " + s8(fo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          gc(zo, {
            list: fo(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (Ei(), $c("div", w8, [
            (Ei(!0), $c(l8, null, a8(f.value, (B) => (Ei(), $c("div", {
              class: "card",
              key: B.id
            }, [
              gc(bd, {
                selected: fo(ve.exports.includes)(fo(u), B.id),
                alarm: B,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Ei(), xv(Yo, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const m8 = /* @__PURE__ */ ce(v8, [["__scopeId", "data-v-4bc80d4b"]]), _8 = window.Vue.openBlock, g8 = window.Vue.createElementBlock, ug = window.Vue.createElementVNode;
var $8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const y8 = {}, V8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, b8 = /* @__PURE__ */ ug("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), C8 = /* @__PURE__ */ ug("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), S8 = [
  b8,
  C8
];
function E8(e, o) {
  return _8(), g8("svg", V8, S8);
}
var Bv = /* @__PURE__ */ $8(y8, [["render", E8]]);
const I8 = window.Vue.defineComponent, At = window.Vue.createElementVNode, Qe = window.Vue.unref, ot = window.Vue.createVNode, Ii = window.Vue.withCtx, k8 = window.Vue.renderList, Tv = window.Vue.Fragment, ki = window.Vue.openBlock, fa = window.Vue.createElementBlock, x8 = window.Vue.createBlock, A8 = window.Vue.pushScopeId, B8 = window.Vue.popScopeId, Go = (e) => (A8("data-v-524b0835"), e = e(), B8(), e), T8 = { class: "container" }, D8 = { class: "header" }, N8 = /* @__PURE__ */ Go(() => /* @__PURE__ */ At("div", { class: "title" }, "Alarms", -1)), L8 = /* @__PURE__ */ Go(() => /* @__PURE__ */ At("span", null, "Add Alarms", -1)), M8 = { class: "alarms-container" }, O8 = { class: "filters" }, P8 = { class: "list" }, R8 = { class: "row actions" }, F8 = /* @__PURE__ */ Go(() => /* @__PURE__ */ At("span", null, "Clear", -1)), U8 = /* @__PURE__ */ Go(() => /* @__PURE__ */ At("span", null, "Acknowledge", -1)), W8 = /* @__PURE__ */ Go(() => /* @__PURE__ */ At("span", null, "Move", -1)), q8 = /* @__PURE__ */ Go(() => /* @__PURE__ */ At("span", null, "Remove", -1)), H8 = { class: "section" }, z8 = {
  key: 0,
  class: "alarm-list"
}, ha = window.Vue.ref, Y8 = window.Vue.watch, G8 = window.Vue.reactive, j8 = window.Vue.markRaw, Z8 = /* @__PURE__ */ I8({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = j8({
      Add: tl,
      Delete: Bv,
      MarkComplete: La,
      CheckCircle: Bo,
      ExitToApp: Gc
    }), s = rl(), a = ln(), u = ha(!1), c = ha(["all"]), f = ha(!1), w = ha(!1), m = G8({
      selectedAlarms: [],
      alarms: o.alarms
    });
    Y8(o, () => {
      c.value = ["all"], m.alarms = o.alarms, m.selectedAlarms = [], u.value = !1;
    });
    const _ = (k) => {
      m.selectedAlarms.includes(k) ? ve.exports.remove(m.selectedAlarms, (O) => O == k) : m.selectedAlarms.push(k);
    }, $ = async (k) => {
      m.selectedAlarms.length ? (await IE(m.selectedAlarms, k), a.getSituation(o.situationId), m.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => m.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : m.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await Tw(
        o.situationId,
        m.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, B = async (k) => {
      y() && (await Tw(
        o.situationId,
        m.selectedAlarms
      ) ? await M(k, m.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, M = async (k, O) => {
      O.length ? await k_(k, O) ? a.getSituation(k) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, N = async (k) => {
      await M(o.situationId, k), w.value = !1;
    }, S = () => {
      m.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, L = (k) => {
      m.alarms = k;
    };
    return (k, O) => (ki(), fa(Tv, null, [
      At("div", T8, [
        At("div", D8, [
          N8,
          ot(Qe(ue), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (I) => w.value = !0)
          }, {
            default: Ii(() => [
              ot(Qe(G), {
                icon: Qe(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              L8
            ]),
            _: 1
          })
        ]),
        At("div", M8, [
          At("div", O8, [
            ot(zo, {
              list: o.alarms,
              onFilteredList: L,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          At("div", P8, [
            At("div", R8, [
              ot(Qe(No), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              ot(Qe(ue), {
                onClick: O[2] || (O[2] = () => $("clear"))
              }, {
                default: Ii(() => [
                  ot(Qe(G), {
                    icon: Qe(La),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  F8
                ]),
                _: 1
              }),
              ot(Qe(ue), {
                onClick: O[3] || (O[3] = () => $("ack"))
              }, {
                default: Ii(() => [
                  ot(Qe(G), {
                    icon: Qe(Bo),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  U8
                ]),
                _: 1
              }),
              ot(Qe(ue), { onClick: S }, {
                default: Ii(() => [
                  ot(Qe(G), {
                    icon: Qe(Gc),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  W8
                ]),
                _: 1
              }),
              ot(Qe(ue), { onClick: T }, {
                default: Ii(() => [
                  ot(Qe(G), {
                    icon: Qe(Bv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  q8
                ]),
                _: 1
              })
            ]),
            At("div", H8, [
              m.alarms.length > 0 ? (ki(), fa("div", z8, [
                (ki(!0), fa(Tv, null, k8(m.alarms, (I) => (ki(), fa("div", {
                  key: I.id
                }, [
                  ot(xP, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (ki(), x8(Yo, { key: 1 }))
            ])
          ])
        ])
      ]),
      ot(lg, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      ot(m8, {
        visible: w.value,
        onAlarmsSelected: N,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const K8 = /* @__PURE__ */ ce(Z8, [["__scopeId", "data-v-524b0835"]]), J8 = window.Vue.defineComponent, rn = window.Vue.createVNode, Wt = window.Vue.unref, yc = window.Vue.normalizeClass, pa = window.Vue.toDisplayString, xi = window.Vue.openBlock, Ai = window.Vue.createElementBlock, Dv = window.Vue.createCommentVNode, X8 = window.Vue.withCtx, Yt = window.Vue.createElementVNode, Q8 = window.Vue.Fragment, e5 = window.Vue.pushScopeId, t5 = window.Vue.popScopeId, n5 = (e) => (e5("data-v-eab7334d"), e = e(), t5(), e), r5 = { class: "section" }, o5 = { class: "action-section" }, i5 = { class: "btn-row" }, s5 = { key: 0 }, a5 = { key: 1 }, l5 = {
  key: 0,
  class: "situation-detail"
}, u5 = { class: "situation-info" }, c5 = { class: "id" }, d5 = ["innerHTML"], f5 = /* @__PURE__ */ n5(() => /* @__PURE__ */ Yt("p", null, null, -1)), h5 = { class: "boxes" }, p5 = { class: "parameters" }, w5 = { class: "section memo-boxes" }, v5 = { key: 0 }, Nv = window.Vue.ref, m5 = window.Vue.watch, _5 = /* @__PURE__ */ J8({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = rl(), s = ln(), a = ze.REJECTED, u = Nv(o.situationInfo.status), c = Nv(o.situationInfo);
    m5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = async (w) => {
      var _;
      await I_(
        (_ = o.situationInfo) == null ? void 0 : _.id,
        w.toLowerCase()
      ) ? (u.value = w, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (w, m) => {
      var _, $, y, T, B, M, N, S, L, k, O, I;
      return xi(), Ai(Q8, null, [
        Yt("div", r5, [
          Yt("div", o5, [
            rn(F_, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Yt("div", i5, [
              rn(Wt(ue), {
                class: yc(["btn", { rejected: u.value == Wt(a) }]),
                "data-test": "btn-reject",
                onClick: m[0] || (m[0] = (F) => f(Wt(a)))
              }, {
                default: X8(() => [
                  rn(Wt(G), {
                    icon: Wt(Rm),
                    "aria-hidden": "true",
                    class: yc(["icon reject", { rejected: u.value == Wt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Wt(a) ? (xi(), Ai("span", s5, pa(Wt(a)), 1)) : (xi(), Ai("span", a5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (xi(), Ai("div", l5, [
            Yt("div", {
              class: yc(["severity-line", [`${($ = (_ = c.value) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
            }, null, 2),
            Yt("div", u5, [
              Yt("div", c5, [
                Yt("div", null, " Situation - " + pa((y = c.value) == null ? void 0 : y.id) + " - " + pa(c.value.alarms.length) + " alarm(s) affects " + pa(Wt(ve.exports.size)(Wt(ve.exports.groupBy)((T = c.value) == null ? void 0 : T.alarms, "nodeId"))) + " node(s) ", 1),
                rn(R_, {
                  severity: (B = c.value) == null ? void 0 : B.severity
                }, null, 8, ["severity"])
              ]),
              Yt("span", {
                innerHTML: c.value.description
              }, null, 8, d5),
              f5,
              Yt("div", h5, [
                rn(oc, {
                  label: "First Event",
                  info: Wt(mn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                rn(oc, {
                  label: "Last Event",
                  info: Wt(mn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                rn(oc, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Yt("div", p5, [
              rn(BO, {
                alarms: (M = c.value) == null ? void 0 : M.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Dv("", !0),
          Yt("div", w5, [
            rn(Ma, {
              id: (N = c.value) == null ? void 0 : N.id,
              situationId: (S = c.value) == null ? void 0 : S.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (L = c.value) == null ? void 0 : L.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            rn(Ma, {
              id: (k = c.value) == null ? void 0 : k.id,
              situationId: (O = c.value) == null ? void 0 : O.id,
              label: "Journal Memo",
              type: "journal",
              memo: (I = c.value) == null ? void 0 : I.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (xi(), Ai("div", v5, [
          rn(K8, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Dv("", !0)
      ], 64);
    };
  }
});
const g5 = /* @__PURE__ */ ce(_5, [["__scopeId", "data-v-eab7334d"]]);
var $5 = Object.defineProperty, y5 = Object.defineProperties, V5 = Object.getOwnPropertyDescriptors, Lv = Object.getOwnPropertySymbols, b5 = Object.prototype.hasOwnProperty, C5 = Object.prototype.propertyIsEnumerable, Mv = (e, o, r) => o in e ? $5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, jc = (e, o) => {
  for (var r in o || (o = {}))
    b5.call(o, r) && Mv(e, r, o[r]);
  if (Lv)
    for (var r of Lv(o))
      C5.call(o, r) && Mv(e, r, o[r]);
  return e;
}, S5 = (e, o) => y5(e, V5(o));
const cg = window.Vue.defineComponent, Lr = window.Vue.resolveComponent, ba = window.Vue.openBlock, Ov = window.Vue.createBlock, Ca = window.Vue.mergeProps, Mr = window.Vue.withCtx, dg = window.Vue.createElementBlock, E5 = window.Vue.Fragment, I5 = window.Vue.renderList, k5 = window.Vue.createTextVNode, x5 = window.Vue.toDisplayString, A5 = window.Vue.computed, Pv = window.Vue.toRef, Bi = window.Vue.createVNode, Rv = window.Vue.toHandlers, B5 = window.Vue.renderSlot, T5 = window.Vue.normalizeClass, D5 = window.Vue.createElementVNode;
var fg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const N5 = cg({
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
        ji(o, this.$refs.list.$el);
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
    FeatherList: cd,
    FeatherListItem: Xi
  }
});
function L5(e, o, r, s, a, u) {
  const c = Lr("FeatherListItem"), f = Lr("FeatherList");
  return ba(), Ov(f, Ca(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Mr(() => [
      (ba(!0), dg(E5, null, I5(e.options, (w, m) => (ba(), Ov(c, {
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
        default: Mr(() => [
          k5(x5(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var M5 = /* @__PURE__ */ fg(N5, [["render", L5], ["__scopeId", "data-v-eae820da"]]);
const O5 = S5(jc(jc({}, Ya), Wo), {
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
}), P5 = {
  "update:modelValue": (e) => !0
}, R5 = cg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: P5,
  props: O5,
  setup(e, o) {
    qo(e), Ga(e);
    const r = A5(() => se("feather-select-input")), { validate: s } = Fo(r, Pv(e, "modelValue"), e.label, e.schema, Pv(e, "error"));
    return jc({
      inputId: r,
      validate: s
    }, Uo(o.attrs));
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
    icon: () => Xa
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
      Rr(this.delayTimeout), this.delayTimeout = Pr(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: za,
    InputSubText: Ro,
    FeatherMenu: o_,
    List: M5,
    FeatherIcon: G
  }
});
function F5(e, o, r, s, a, u) {
  const c = Lr("FeatherIcon"), f = Lr("InputWrapper"), w = Lr("List"), m = Lr("FeatherMenu"), _ = Lr("InputSubText");
  return ba(), dg("div", Ca(e.inherittedAttrs, { class: "feather-select-container" }), [
    Bi(m, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Mr(($) => [
        Bi(f, Ca({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, Rv($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Mr(() => [
            B5(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Mr(() => [
            Bi(c, {
              class: T5(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Mr(() => [
            D5("input", Ca(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, Rv(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Mr(() => [
        Bi(w, {
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
    Bi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var U5 = /* @__PURE__ */ fg(R5, [["render", F5], ["__scopeId", "data-v-ecb32d90"]]);
const W5 = window.Vue.openBlock, q5 = window.Vue.createElementBlock, hg = window.Vue.createElementVNode;
var H5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const z5 = {}, Y5 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, G5 = /* @__PURE__ */ hg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), j5 = /* @__PURE__ */ hg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Z5 = [
  G5,
  j5
];
function K5(e, o) {
  return W5(), q5("svg", Y5, Z5);
}
var J5 = /* @__PURE__ */ H5(z5, [["render", K5]]);
const Sa = window.Vue.openBlock, Zc = window.Vue.createElementBlock, pg = window.Vue.createElementVNode, X5 = window.Vue.defineComponent, Ar = window.Vue.ref, Q5 = window.Vue.provide, Fv = window.Vue.computed, e7 = window.Vue.onUnmounted, Uv = window.Vue.toRef, t7 = window.Vue.resolveComponent, n7 = window.Vue.Fragment, r7 = window.Vue.createBlock, o7 = window.Vue.Teleport, Wv = window.Vue.createVNode, i7 = window.Vue.Transition, s7 = window.Vue.withCtx, a7 = window.Vue.normalizeClass, l7 = window.Vue.normalizeStyle, u7 = window.Vue.toDisplayString, c7 = window.Vue.createCommentVNode, d7 = window.Vue.renderSlot, Vc = window.Vue.nextTick;
var wg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const f7 = {}, h7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, p7 = /* @__PURE__ */ pg("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), w7 = [
  p7
];
function v7(e, o) {
  return Sa(), Zc("svg", h7, w7);
}
var m7 = /* @__PURE__ */ wg(f7, [["render", v7]]), Ze = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Ze || {}), Ln = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ln || {});
const _7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(Ze.top), a >= o.height + s && c.push(Ze.bottom);
  const f = [];
  u >= o.width + s && f.push(Ze.right), e.left >= o.width + s && f.push(Ze.left);
  let w = [...f, ...c];
  return (r === Ze.top || r === Ze.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, g7 = (e, o, r, s, a = 28) => {
  if (e === Ze.left || e === Ze.right)
    return Ln.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, m = c + o.width / 2, _ = r.width - a, $ = r.width / 2;
  return w >= $ && m >= $ && f.push(Ln.center), m >= _ && f.push(Ln.left), w >= _ && f.push(Ln.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, $7 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Ze.top
  },
  pointerAlignment: {
    type: String,
    default: () => Ln.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, y7 = X5({
  props: $7,
  setup(e) {
    const o = Ar(!1), r = Ar(!1), s = se("feather-tooltip-trigger"), a = se("feather-tooltip"), u = "data-feather-tooltip";
    Q5("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Rr(c), o.value || (c = Pr(M, e.enterDelay));
    }, w = () => {
      Rr(c), c = Pr(N, e.exitDelay);
    }, m = (me) => {
      me.keyCode === X.ESCAPE && (me.preventDefault(), N(!0));
    }, _ = Fv(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: m
    }, y = Ar(document), T = r_(y, () => N(!0));
    e7(() => N(!0));
    const B = () => document.getElementById(a), M = () => {
      r.value = !1, o.value = !0, Vc(() => {
        const me = B();
        de(me), o.value = !1, Vc(() => {
          r.value = !0, o.value = !0, T.value = !0;
        });
      });
    }, N = (me = !1) => {
      F.value = "", I.value = "", P.value = "", W.value = "", o.value = !1, me && (r.value = !1), T.value = !1;
    }, S = Uv(e, "placement"), L = Uv(e, "pointerAlignment"), k = 8, O = 24, I = Ar(""), F = Ar(""), P = Ar(""), W = Ar(""), $e = Fv(() => W.value ? "p-" + W.value : !1), de = (me) => {
      const Se = document.querySelector(`[${u}=${s}]`);
      if (!Se) {
        console.log("trigger not found");
        return;
      }
      Vc(() => {
        const Ee = Se.getBoundingClientRect(), ke = me.getBoundingClientRect(), fe = _7(Ee, ke, S.value, k), Ne = g7(fe, Ee, ke, L.value, O);
        P.value = Ne.toString(), W.value = fe.toString();
        let Le = 0, Ue = 0;
        if ((fe === Ze.left || fe === Ze.right) && (Le = Ee.top + Ee.height / 2 - ke.height / 2, fe === Ze.left && (Ue = Ee.left - ke.width - k), fe === Ze.right && (Ue = Ee.right)), fe === Ze.top || fe === Ze.bottom) {
          Le = Ee.top - ke.height - k, fe === Ze.bottom && (Le = Ee.bottom);
          const Pn = Ee.left + Ee.width / 2;
          switch (Ne) {
            case Ln.center:
              Ue = Pn - ke.width / 2;
              break;
            case Ln.left:
              Ue = Pn - O;
              break;
            case Ln.right:
              Ue = Pn - ke.width + O;
              break;
          }
        }
        I.value = Le.toString() + "px", F.value = Ue.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: o,
      animate: r,
      alignmentClass: P,
      placementClass: $e,
      top: I,
      left: F,
      tooltipID: a
    };
  },
  components: {
    Pointer: m7
  }
}), V7 = ["id"];
function b7(e, o, r, s, a, u) {
  const c = t7("Pointer");
  return Sa(), Zc(n7, null, [
    (Sa(), r7(o7, { to: "body" }, [
      Wv(i7, { css: e.animate }, {
        default: s7(() => [
          e.show ? (Sa(), Zc("div", {
            key: 0,
            class: a7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: l7({ left: e.left, top: e.top })
          }, [
            pg("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, u7(e.title), 9, V7),
            Wv(c, { class: "tooltip-pointer" })
          ], 6)) : c7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    d7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var qv = /* @__PURE__ */ wg(y7, [["render", b7], ["__scopeId", "data-v-3da6b22e"]]);
const C7 = window.Vue.defineComponent, bc = window.Vue.normalizeStyle, Cc = window.Vue.createElementVNode, Ti = window.Vue.unref, Hv = window.Vue.toHandlers, zv = window.Vue.mergeProps, Yv = window.Vue.withCtx, Gv = window.Vue.createVNode, S7 = window.Vue.renderList, E7 = window.Vue.Fragment, Di = window.Vue.openBlock, Ni = window.Vue.createElementBlock, jv = window.Vue.normalizeClass, Zv = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const I7 = { class: "row" }, k7 = /* @__PURE__ */ C7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Di(), Ni("div", I7, [
      Cc("div", {
        class: "line-gray",
        style: bc({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Gv(Ti(qv), {
        title: Ti(mn)(e.alarm.firstEventTime)
      }, {
        default: Yv(({ attrs: f, on: w }) => [
          Cc("div", zv({ class: "circle" }, f, Hv(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Di(!0), Ni(E7, null, S7(o.events, (f, w) => (Di(), Ni("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (Di(), Ni("div", {
          key: 0,
          class: jv(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: bc({
            width: s(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Zv("", !0),
        Gv(Ti(qv), {
          title: Ti(mn)(e.alarm.firstEventTime)
        }, {
          default: Yv(({ attrs: m, on: _ }) => [
            o.events[w + 1] ? (Di(), Ni("div", zv({ key: 0 }, m, Hv(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Zv("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Cc("div", {
        class: jv(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: bc({
          width: s(e.events[e.events.length - 1].createTime, Ti(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const x7 = /* @__PURE__ */ ce(k7, [["__scopeId", "data-v-3341d12d"]]), A7 = window.Vue.openBlock, B7 = window.Vue.createElementBlock, vg = window.Vue.createElementVNode;
var T7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const D7 = {}, N7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, L7 = /* @__PURE__ */ vg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), M7 = /* @__PURE__ */ vg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), O7 = [
  L7,
  M7
];
function P7(e, o) {
  return A7(), B7("svg", N7, O7);
}
var R7 = /* @__PURE__ */ T7(D7, [["render", P7]]);
const F7 = window.Vue.defineComponent, Kc = window.Vue.createElementVNode, U7 = window.Vue.renderList, Kv = window.Vue.Fragment, Sc = window.Vue.openBlock, Ec = window.Vue.createElementBlock, W7 = window.Vue.normalizeClass, q7 = window.Vue.unref, Jv = window.Vue.toDisplayString, H7 = window.Vue.pushScopeId, z7 = window.Vue.popScopeId, Y7 = (e) => (H7("data-v-2e087f7b"), e = e(), z7(), e), G7 = /* @__PURE__ */ Y7(() => /* @__PURE__ */ Kc("strong", null, "Events:", -1)), j7 = /* @__PURE__ */ F7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Sc(), Ec(Kv, null, [
      G7,
      (Sc(!0), Ec(Kv, null, U7(o.events, (a) => (Sc(), Ec("div", {
        class: "event-description",
        key: a.id
      }, [
        Kc("div", {
          class: W7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Kc("div", null, Jv(q7(mn)(a.createTime)) + " - " + Jv(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const Z7 = /* @__PURE__ */ ce(j7, [["__scopeId", "data-v-2e087f7b"]]), K7 = window.Vue.defineComponent, J7 = window.Vue.normalizeClass, xt = window.Vue.createElementVNode, ho = window.Vue.toDisplayString, pt = window.Vue.unref, po = window.Vue.createVNode, mg = window.Vue.createTextVNode, X7 = window.Vue.renderList, Xv = window.Vue.Fragment, Tn = window.Vue.openBlock, Br = window.Vue.createElementBlock, Qv = window.Vue.createBlock, wa = window.Vue.createCommentVNode, Q7 = window.Vue.normalizeStyle, e6 = window.Vue.pushScopeId, t6 = window.Vue.popScopeId, n6 = (e) => (e6("data-v-01717d0d"), e = e(), t6(), e), r6 = { class: "section detail" }, o6 = { class: "id" }, i6 = {
  key: 0,
  class: "section"
}, s6 = /* @__PURE__ */ n6(() => /* @__PURE__ */ xt("div", { class: "id" }, "Alarms", -1)), a6 = { class: "action-btns" }, l6 = { class: "zoom" }, u6 = /* @__PURE__ */ mg(" Zoom "), c6 = { class: "times" }, d6 = {
  key: 0,
  class: "timeline-container"
}, f6 = { class: "alarm-id" }, h6 = {
  key: 0,
  class: "panel"
}, Kn = window.Vue.ref, p6 = window.Vue.watch, w6 = /* @__PURE__ */ K7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, I;
    const o = e, r = ln(), s = Kn(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Kn(a[0]), c = Kn(o.width), f = Kn(o.width), w = Kn(new Date().getTime()), m = () => {
      var F, P;
      if (!o.situation.events) {
        const W = (P = (F = o.situation) == null ? void 0 : F.alarms) == null ? void 0 : P.map(($e) => $e.id);
        r.getEvents(o.situation.id, W);
      }
    };
    m();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = Kn(o.situation.alarms), y = Kn(
      ((I = ve.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), T = Kn(_());
    p6(o, () => {
      var F, P;
      y.value = ((P = ve.exports.minBy((F = o.situation) == null ? void 0 : F.alarms, "firstEventTime")) == null ? void 0 : P.firstEventTime) || new Date().getTime(), m(), c.value = f.value, T.value = _(), $.value = o.situation.alarms, u.value = a[0];
    });
    const B = (F) => {
      if ((F == null ? void 0 : F.id) === 1 && ($.value = o.situation.alarms), (F == null ? void 0 : F.id) === 2) {
        const P = ve.exports.groupBy($.value, "severity"), W = [
          ...P.CRITICAL || [],
          ...P.MAJOR || [],
          ...P.MINOR || [],
          ...P.WARNING || [],
          ...P.NORMAL || [],
          ...P.CLEARED || [],
          ...P.INDETERMINATE || []
        ];
        $.value = W.filter(($e) => $e);
      }
      if ((F == null ? void 0 : F.id) === 3) {
        const P = ve.exports.reverse(
          ve.exports.sortBy(
            o.situation.alarms,
            (W) => Number(W.lastEventTime) - Number(W.firstEventTime)
          )
        );
        $.value = P;
      }
    }, M = () => {
      c.value += 100, T.value = _();
    }, N = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, L = (F) => {
      s.value = F;
    }, k = () => {
      s.value = 0;
    };
    return (F, P) => {
      var W, $e;
      return Tn(), Br(Xv, null, [
        xt("div", r6, [
          xt("div", {
            class: J7(["severity-line", [`${($e = (W = o.situation) == null ? void 0 : W.severity) == null ? void 0 : $e.toLowerCase()}-bg dark`]])
          }, null, 2),
          xt("div", null, [
            xt("div", o6, "Situation " + ho(o.situation.id), 1),
            xt("div", null, " Duration: " + ho(pt(qa)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Tn(), Br("div", i6, [
          s6,
          xt("div", a6, [
            po(pt(U5), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                P[0] || (P[0] = (de) => u.value = de),
                B
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            xt("div", l6, [
              u6,
              xt("div", null, [
                po(pt(G), {
                  icon: pt(J5),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                po(pt(G), {
                  icon: pt(g_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                po(pt(G), {
                  icon: pt(R7),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Tn(), Br("div", {
            key: 0,
            class: "alarms",
            style: Q7({
              width: f.value + 50 + "px"
            })
          }, [
            xt("div", c6, [
              xt("div", null, ho(pt(mn)(y.value)), 1),
              xt("div", null, ho(pt(mn)(w.value)), 1)
            ]),
            e.situation.events ? (Tn(), Br("div", d6, [
              (Tn(!0), Br(Xv, null, X7($.value, (de) => (Tn(), Br("div", {
                class: "timeline",
                key: de.id
              }, [
                xt("div", f6, [
                  mg(ho(de.nodeLabel) + " - " + ho(de.id) + " ", 1),
                  s.value === de.id ? (Tn(), Qv(pt(G), {
                    key: 0,
                    icon: pt(Xa),
                    class: "zoom-icon expand",
                    onClick: k
                  }, null, 8, ["icon"])) : (Tn(), Qv(pt(G), {
                    key: 1,
                    icon: pt(Zm),
                    class: "zoom-icon expand",
                    onClick: () => L(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                po(x7, {
                  alarm: de,
                  proportion: T.value,
                  "min-start": y.value,
                  events: o.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === de.id ? (Tn(), Br("div", h6, [
                  po(Z7, {
                    events: o.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : wa("", !0)
              ]))), 128))
            ])) : wa("", !0)
          ], 4)) : wa("", !0)
        ])) : wa("", !0)
      ], 64);
    };
  }
});
const v6 = /* @__PURE__ */ ce(w6, [["__scopeId", "data-v-01717d0d"]]), m6 = window.Vue.openBlock, _6 = window.Vue.createElementBlock, g6 = window.Vue.createElementVNode;
var $6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const y6 = {}, V6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, b6 = /* @__PURE__ */ g6("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), C6 = [
  b6
];
function S6(e, o) {
  return m6(), _6("svg", V6, C6);
}
var ko = /* @__PURE__ */ $6(y6, [["render", S6]]);
const _g = window.Vue.defineComponent, Ic = window.Vue.ref, E6 = window.Vue.toRef, kc = window.Vue.inject, em = window.Vue.watch, I6 = window.Vue.nextTick, tm = window.Vue.openBlock, nm = window.Vue.createElementBlock, xc = window.Vue.createElementVNode, k6 = window.Vue.normalizeClass, rm = window.Vue.renderSlot, om = window.Vue.createCommentVNode, Ac = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var x6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const A6 = {
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
}, B6 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, T6 = _g({
  emits: B6,
  props: A6,
  setup(e, o) {
    const r = Ic(), s = Ic(!1), a = Ic(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = E6(e, "modelValue"), f = kc("queueSnackbar", !1), w = kc("unqueueSnackbar", !1), m = kc("nextSnackbar", () => {
    }), _ = (M, N) => {
      let S, L, k = N;
      const O = () => {
        !S || (Rr(S), S = 0, k -= Date.now() - L);
      }, I = () => {
        S || (L = Date.now(), S = Pr(M, k));
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
    return em(c, (M) => {
      M ? I6(() => {
        f === !1 ? a.value = M : f(u, a);
      }) : w === !1 ? a.value = M : w(u);
    }, { immediate: !0 }), em(a, (M) => {
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
}), D6 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, N6 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, L6 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, M6 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function O6(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (tm(), nm("div", D6, [
    xc("div", {
      class: k6(["feather-snackbar", {
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
      xc("div", N6, [
        e.contentShow ? (tm(), nm("div", L6, [
          rm(e.$slots, "default", {}, void 0, !0)
        ])) : om("", !0)
      ]),
      xc("div", M6, [
        rm(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : om("", !0);
}
var sl = /* @__PURE__ */ x6(T6, [["render", O6], ["__scopeId", "data-v-5cf64a62"]]);
const P6 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
_g({
  props: P6,
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
    return Ac("queueSnackbar", s), Ac("unqueueSnackbar", a), Ac("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const R6 = window.Vue.defineComponent, De = window.Vue.unref, wt = window.Vue.createVNode, Zi = window.Vue.createElementVNode, qt = window.Vue.withCtx, wo = window.Vue.openBlock, im = window.Vue.createBlock, F6 = window.Vue.createCommentVNode, al = window.Vue.createTextVNode, va = window.Vue.createElementBlock, sm = window.Vue.toDisplayString, U6 = window.Vue.pushScopeId, W6 = window.Vue.popScopeId, Cd = (e) => (U6("data-v-1f2913d3"), e = e(), W6(), e), q6 = { id: "cont" }, H6 = { class: "btns-navigation" }, z6 = /* @__PURE__ */ Cd(() => /* @__PURE__ */ Zi("span", null, "Situation List", -1)), Y6 = /* @__PURE__ */ Cd(() => /* @__PURE__ */ Zi("span", null, "Show Previous Situation ", -1)), G6 = /* @__PURE__ */ Cd(() => /* @__PURE__ */ Zi("span", null, "Show Next Situation", -1)), j6 = { key: 1 }, Z6 = {
  key: 0,
  class: "detail"
}, K6 = /* @__PURE__ */ al("Details"), J6 = /* @__PURE__ */ al("Metrics"), X6 = {
  key: 1,
  class: "noSituation"
}, Q6 = /* @__PURE__ */ al("dismiss"), Tr = window.Vue.ref, am = window.Vue.watch, eF = window.Vue.onMounted, tF = window.VueRouter.useRoute, nF = /* @__PURE__ */ R6({
  __name: "SituationDetail",
  setup(e) {
    const o = ar(), r = tF(), s = parseInt(r.params.id), a = Tr(s), u = ln(), c = rl(), f = Tr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Tr(), m = Tr(), _ = Tr(!0), $ = Tr(
      u.filteredSituations.findIndex((N) => N === a.value)
    ), y = Tr(!1);
    am(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), eF(() => {
      var S;
      const N = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      m.value = N - 90;
    });
    const T = () => {
      o.push({
        name: "situations"
      });
    }, B = (N) => {
      const S = $.value, L = u.filteredSituations[S + N];
      o.push({
        name: "situationDetail",
        params: {
          id: L
        }
      });
    };
    am(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((N) => N == a.value);
    }), c.$subscribe((N, S) => {
      y.value = S.showError;
    });
    const M = (N) => {
      f.value = N || 0;
    };
    return (N, S) => (wo(), va("div", q6, [
      Zi("div", H6, [
        wt(De(ue), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: qt(() => [
            wt(De(G), {
              icon: De(ko),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            z6
          ]),
          _: 1
        }),
        Zi("div", null, [
          wt(De(ue), {
            disabled: !De(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => B(-1))
          }, {
            default: qt(() => [
              wt(De(G), {
                icon: De(ko),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              Y6
            ]),
            _: 1
          }, 8, ["disabled"]),
          wt(De(ue), {
            disabled: !De(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => B(1))
          }, {
            default: qt(() => [
              G6,
              wt(De(G), {
                icon: De(ko),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (wo(), im(De(hd), {
        key: 0,
        class: "spinner"
      })) : (wo(), va("div", j6, [
        w.value ? (wo(), va("div", Z6, [
          wt(De(iO), { "onUpdate:modelValue": M }, {
            tabs: qt(() => [
              wt(De(Pw), null, {
                default: qt(() => [
                  K6
                ]),
                _: 1
              }),
              wt(De(Pw), null, {
                default: qt(() => [
                  J6
                ]),
                _: 1
              })
            ]),
            default: qt(() => [
              wt(De(Rw), { class: "panel" }, {
                default: qt(() => [
                  wt(g5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              wt(De(Rw), { class: "panel" }, {
                default: qt(() => [
                  m.value && f.value == 1 ? (wo(), im(v6, {
                    key: 0,
                    situation: w.value,
                    width: m.value
                  }, null, 8, ["situation", "width"])) : F6("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (wo(), va("div", X6, " Error. The situation " + sm(De(s)) + " does not exist. ", 1))
      ])),
      wt(De(sl), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (L) => y.value = L),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: qt(() => [
          wt(De(ue), {
            onClick: S[3] || (S[3] = (L) => y.value = !1),
            text: ""
          }, {
            default: qt(() => [
              Q6
            ]),
            _: 1
          })
        ]),
        default: qt(() => [
          al(sm(De(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const rF = /* @__PURE__ */ ce(nF, [["__scopeId", "data-v-1f2913d3"]]), oF = window.Vue.defineComponent, je = window.Vue.unref, Ht = window.Vue.createVNode, at = window.Vue.createElementVNode, vo = window.Vue.withCtx, mo = window.Vue.openBlock, Li = window.Vue.createElementBlock, iF = window.Vue.createCommentVNode, sF = window.Vue.toDisplayString, Sd = window.Vue.createTextVNode, aF = window.Vue.normalizeClass, lF = window.Vue.renderList, uF = window.Vue.Fragment, cF = window.Vue.createBlock, dF = window.Vue.pushScopeId, fF = window.Vue.popScopeId, Qi = (e) => (dF("data-v-1a57a9f3"), e = e(), fF(), e), hF = { class: "container" }, pF = /* @__PURE__ */ Qi(() => /* @__PURE__ */ at("span", null, "Situation List", -1)), wF = /* @__PURE__ */ Qi(() => /* @__PURE__ */ at("h2", null, "New Situation", -1)), vF = { class: "form" }, mF = { class: "fields" }, _F = {
  key: 0,
  class: "errorList"
}, gF = { class: "footer" }, $F = /* @__PURE__ */ Qi(() => /* @__PURE__ */ at("span", null, "Clear", -1)), yF = /* @__PURE__ */ Qi(() => /* @__PURE__ */ at("span", null, "Add Situation", -1)), VF = { class: "alarm-column" }, bF = { class: "header-alarms" }, CF = /* @__PURE__ */ Qi(() => /* @__PURE__ */ at("h3", null, "Add Unassociated Alarms", -1)), SF = /* @__PURE__ */ Sd(" Total Alarms Added: "), EF = { class: "total" }, IF = { class: "list" }, kF = { class: "filters" }, xF = {
  key: 0,
  class: "alarms"
}, AF = /* @__PURE__ */ Sd(" Error on creating new situation :( "), BF = /* @__PURE__ */ Sd("dismiss"), Jn = window.Vue.ref, TF = window.Vue.watch, DF = /* @__PURE__ */ oF({
  __name: "AddSituation",
  setup(e) {
    const o = ar(), r = ln(), s = Jn(), a = Jn(""), u = Jn(), c = Jn(""), f = Jn([]), w = Jn(!1), m = Jn(), _ = Jn(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), TF(
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
      w.value = !1, ve.exports.includes(f.value, S) ? ve.exports.remove(f.value, (L) => L === S) : f.value.push(S);
    }, T = () => {
      const S = "This field should not be empty";
      let L = !0;
      return s.value || (a.value = S, L = !1), u.value || (c.value = S, L = !1), f.value.length < 2 && (w.value = !0, L = !1), L;
    }, B = async () => {
      if (T()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await OM(S) ? o.push({
          name: "situations"
        }) : m.value = !0;
      }
    }, M = () => {
      s.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, N = (S) => {
      _.value = S;
    };
    return (S, L) => (mo(), Li("div", hF, [
      Ht(je(ue), {
        primary: "",
        onClick: L[0] || (L[0] = () => $()),
        class: "back-btn"
      }, {
        default: vo(() => [
          Ht(je(G), {
            icon: je(ko),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          pF
        ]),
        _: 1
      }),
      wF,
      at("div", vF, [
        at("div", mF, [
          Ht(je(Yc), {
            modelValue: s.value,
            "onUpdate:modelValue": L[1] || (L[1] = (k) => s.value = k),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Ht(je(Yc), {
            modelValue: u.value,
            "onUpdate:modelValue": L[2] || (L[2] = (k) => u.value = k),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (mo(), Li("div", _F, " You must add at least 2 alarms. ")) : iF("", !0),
          at("div", gF, [
            Ht(je(ue), {
              class: "btn",
              onClick: M
            }, {
              default: vo(() => [
                Ht(je(G), {
                  icon: je(Oo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                $F
              ]),
              _: 1
            }),
            Ht(je(ue), {
              class: "btn-add",
              onClick: B
            }, {
              default: vo(() => [
                Ht(je(G), {
                  icon: je(tl),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                yF
              ]),
              _: 1
            })
          ])
        ]),
        at("div", VF, [
          at("div", bF, [
            CF,
            at("div", null, [
              at("div", {
                class: aF(["totalAlarms", { errorList: w.value }])
              }, [
                SF,
                at("span", EF, sF(je(f).length), 1)
              ], 2)
            ])
          ]),
          at("div", IF, [
            at("div", kF, [
              Ht(zo, {
                list: je(r).unassignedAlarms,
                onFilteredList: N,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (mo(), Li("div", xF, [
              (mo(!0), Li(uF, null, lF(_.value, (k) => (mo(), Li("div", {
                key: k.id,
                class: "alarm-card"
              }, [
                Ht(bd, {
                  selected: je(ve.exports.includes)(je(f), k.id),
                  alarm: k,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (mo(), cF(Yo, { key: 1 }))
          ])
        ])
      ]),
      Ht(je(sl), {
        modelValue: m.value,
        "onUpdate:modelValue": L[4] || (L[4] = (k) => m.value = k),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: vo(() => [
          Ht(je(ue), {
            onClick: L[3] || (L[3] = (k) => m.value = !1),
            text: ""
          }, {
            default: vo(() => [
              BF
            ]),
            _: 1
          })
        ]),
        default: vo(() => [
          AF
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const NF = /* @__PURE__ */ ce(DF, [["__scopeId", "data-v-1a57a9f3"]]), LF = window.Vue.defineComponent, MF = window.Vue.createElementVNode, OF = window.Vue.createTextVNode, PF = window.Vue.unref, RF = window.Vue.withCtx, FF = window.Vue.createVNode, UF = window.Vue.Fragment, WF = window.Vue.openBlock, qF = window.Vue.createElementBlock, HF = window.Vue.pushScopeId, zF = window.Vue.popScopeId, YF = (e) => (HF("data-v-bcb7dcc6"), e = e(), zF(), e), GF = /* @__PURE__ */ YF(() => /* @__PURE__ */ MF("div", { class: "main" }, "Something bad is happening...", -1)), jF = /* @__PURE__ */ OF(" Reload "), ZF = /* @__PURE__ */ LF({
  __name: "ErrorPage",
  setup(e) {
    const o = ar(), r = () => {
      o.push({ name: "situations" });
    };
    return (s, a) => (WF(), qF(UF, null, [
      GF,
      FF(PF(ue), {
        primary: "",
        onClick: r
      }, {
        default: RF(() => [
          jF
        ]),
        _: 1
      })
    ], 64));
  }
});
const KF = /* @__PURE__ */ ce(ZF, [["__scopeId", "data-v-bcb7dcc6"]]), JF = window.Vue.defineComponent, it = window.Vue.unref, on = window.Vue.createVNode, tr = window.Vue.createElementVNode, Mi = window.Vue.withCtx, Dr = window.Vue.openBlock, lm = window.Vue.createBlock, XF = window.Vue.renderList, QF = window.Vue.Fragment, Oi = window.Vue.createElementBlock, e9 = window.Vue.toDisplayString, gg = window.Vue.createTextVNode, t9 = window.Vue.pushScopeId, n9 = window.Vue.popScopeId, Ed = (e) => (t9("data-v-6078e4ad"), e = e(), n9(), e), r9 = { class: "container" }, o9 = { class: "nav-btns" }, i9 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ tr("span", null, "Situation List", -1)), s9 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ tr("h2", null, "List Unassociated Alarms", -1)), a9 = { class: "content" }, l9 = { class: "filters" }, u9 = { class: "list" }, c9 = { class: "action-btns" }, d9 = /* @__PURE__ */ Ed(() => /* @__PURE__ */ tr("span", null, "Move", -1)), f9 = { key: 1 }, h9 = {
  key: 0,
  class: "alarms"
}, p9 = /* @__PURE__ */ gg("dismiss"), Xn = window.Vue.ref, w9 = window.Vue.watch, v9 = window.Vue.markRaw, m9 = /* @__PURE__ */ JF({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = v9({
      ArrowBack: ko,
      ExitToApp: Gc
    }), r = ar(), s = ln();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Xn([]), u = Xn([]), c = Xn(!1), f = Xn(!1), w = Xn(""), m = Xn(!1), _ = Xn(!1), $ = Xn(!0);
    w9(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (L) => {
      ve.exports.includes(u.value, L) ? ve.exports.remove(u.value, (k) => k === L) : u.value.push(L);
    }, T = () => {
      c.value ? u.value = a.value.map((L) => L.id) : u.value = [];
    }, B = async (L) => {
      await k_(L, u.value) ? s.getUnassignedAlarms() : (m.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, M = () => {
      r.push({
        name: "situations"
      });
    }, N = () => {
      u.value.length ? f.value = !0 : (m.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (L) => {
      a.value = L;
    };
    return (L, k) => (Dr(), Oi("div", r9, [
      tr("div", o9, [
        on(it(ue), {
          primary: "",
          onClick: k[0] || (k[0] = () => M())
        }, {
          default: Mi(() => [
            on(it(G), {
              icon: it(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            i9
          ]),
          _: 1
        }),
        on(b_)
      ]),
      s9,
      tr("div", a9, [
        tr("div", l9, [
          on(zo, {
            list: it(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        tr("div", u9, [
          tr("div", c9, [
            on(it(No), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                k[1] || (k[1] = (O) => c.value = O),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            on(it(ue), { onClick: N }, {
              default: Mi(() => [
                on(it(G), {
                  icon: it(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                d9
              ]),
              _: 1
            })
          ]),
          $.value ? (Dr(), lm(it(hd), {
            key: 0,
            class: "spinner"
          })) : (Dr(), Oi("div", f9, [
            it(a).length ? (Dr(), Oi("div", h9, [
              (Dr(!0), Oi(QF, null, XF(it(a), (O) => (Dr(), Oi("div", {
                key: O.id,
                class: "card"
              }, [
                on(bd, {
                  selected: it(ve.exports.includes)(it(u), O.id),
                  alarm: O,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Dr(), lm(Yo, { key: 1 }))
          ]))
        ])
      ]),
      on(lg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: k[2] || (k[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      on(it(sl), {
        modelValue: m.value,
        "onUpdate:modelValue": k[4] || (k[4] = (O) => m.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: Mi(() => [
          on(it(ue), {
            onClick: k[3] || (k[3] = (O) => m.value = !1),
            text: ""
          }, {
            default: Mi(() => [
              p9
            ]),
            _: 1
          })
        ]),
        default: Mi(() => [
          gg(e9(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const _9 = /* @__PURE__ */ ce(m9, [["__scopeId", "data-v-6078e4ad"]]), g9 = window.Vue.defineComponent, Bc = window.Vue.unref, $9 = window.Vue.createVNode, y9 = window.Vue.createElementVNode, V9 = window.Vue.withCtx, b9 = window.Vue.openBlock, C9 = window.Vue.createBlock, S9 = window.Vue.pushScopeId, E9 = window.Vue.popScopeId, I9 = (e) => (S9("data-v-17251e76"), e = e(), E9(), e), k9 = /* @__PURE__ */ I9(() => /* @__PURE__ */ y9("span", null, "Situation List", -1)), x9 = window.Vue.markRaw, A9 = /* @__PURE__ */ g9({
  __name: "SituationListBtn",
  setup(e) {
    const o = ar(), r = x9({
      ArrowBack: ko
    }), s = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (b9(), C9(Bc(ue), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: V9(() => [
        $9(Bc(G), {
          icon: Bc(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        k9
      ]),
      _: 1
    }));
  }
});
const B9 = /* @__PURE__ */ ce(A9, [["__scopeId", "data-v-17251e76"]]);
var T9 = Object.defineProperty, D9 = Object.defineProperties, N9 = Object.getOwnPropertyDescriptors, um = Object.getOwnPropertySymbols, L9 = Object.prototype.hasOwnProperty, M9 = Object.prototype.propertyIsEnumerable, cm = (e, o, r) => o in e ? T9(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, So = (e, o) => {
  for (var r in o || (o = {}))
    L9.call(o, r) && cm(e, r, o[r]);
  if (um)
    for (var r of um(o))
      M9.call(o, r) && cm(e, r, o[r]);
  return e;
}, O9 = (e, o) => D9(e, N9(o));
const P9 = window.Vue.defineComponent, dm = window.Vue.toRef, R9 = window.Vue.computed, F9 = window.Vue.ref, fm = window.Vue.resolveComponent, hm = window.Vue.openBlock, pm = window.Vue.createElementBlock, wm = window.Vue.mergeProps, vm = window.Vue.createVNode, U9 = window.Vue.normalizeClass, ma = window.Vue.withCtx, mm = window.Vue.renderSlot, W9 = window.Vue.createElementVNode, q9 = window.Vue.toHandlers, H9 = window.Vue.toDisplayString, z9 = window.Vue.createCommentVNode, Y9 = So(So({
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
}, Ya), Wo), G9 = {
  "update:modelValue": (e) => !0
};
var j9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Z9 = P9({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: G9,
  props: Y9,
  setup(e, o) {
    qo(e), Ga(e);
    const r = dm(e, "id"), s = R9(() => r.value ? r.value : se("feather-input-label")), a = F9(), { validate: u } = Fo(s, a, e.label, e.schema, dm(e, "error"));
    return So({
      inputId: s,
      internalValue: a,
      validate: u
    }, Uo(o.attrs));
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
      const e = So({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), O9(So(So({}, e), this.listeners), {
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
    InputSubText: Ro,
    InputWrapper: za
  }
}), K9 = ["maxlength"], J9 = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function X9(e, o, r, s, a, u) {
  const c = fm("InputWrapper"), f = fm("InputSubText");
  return hm(), pm("div", wm(e.inherittedAttrs, { class: "feather-input-container" }), [
    vm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: U9(["feather-input-content", e.contentCls])
    }, {
      pre: ma(() => [
        mm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: ma(() => [
        mm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: ma(() => [
        W9("input", wm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, q9(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, K9)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    vm(f, { id: e.descriptionId }, {
      right: ma(() => [
        e.maxlength ? (hm(), pm("div", J9, H9(e.charCount), 1)) : z9("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var _o = /* @__PURE__ */ j9(Z9, [["render", X9], ["__scopeId", "data-v-bf37b0d6"]]);
const Q9 = window.Vue.openBlock, eU = window.Vue.createElementBlock, Id = window.Vue.createElementVNode;
var tU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const nU = {}, rU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oU = /* @__PURE__ */ Id("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), iU = /* @__PURE__ */ Id("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), sU = /* @__PURE__ */ Id("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), aU = [
  oU,
  iU,
  sU
];
function lU(e, o) {
  return Q9(), eU("svg", rU, aU);
}
var uU = /* @__PURE__ */ tU(nU, [["render", lU]]);
const cU = window.Vue.openBlock, dU = window.Vue.createElementBlock, $g = window.Vue.createElementVNode;
var fU = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hU = {}, pU = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wU = /* @__PURE__ */ $g("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), vU = /* @__PURE__ */ $g("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), mU = [
  wU,
  vU
];
function _U(e, o) {
  return cU(), dU("svg", pU, mU);
}
var gU = /* @__PURE__ */ fU(hU, [["render", _U]]);
const $U = window.Vue.defineComponent, qe = window.Vue.createVNode, ne = window.Vue.createElementVNode, ie = window.Vue.unref, lt = window.Vue.createTextVNode, zt = window.Vue.withCtx, Dn = window.Vue.openBlock, go = window.Vue.createElementBlock, Qn = window.Vue.createCommentVNode, Tc = window.Vue.createBlock, $o = window.Vue.toDisplayString, _m = window.Vue.Fragment, yU = window.Vue.pushScopeId, VU = window.Vue.popScopeId, gt = (e) => (yU("data-v-bc4d9956"), e = e(), VU(), e), bU = { class: "container" }, CU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), SU = { class: "section" }, EU = { class: "title" }, IU = /* @__PURE__ */ lt(" Choose the correlation engine that ALEC will use (see "), kU = ["href"], xU = /* @__PURE__ */ lt(" for more information): "), AU = /* @__PURE__ */ lt("Clustering"), BU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("div", { class: "hellinger" }, [
  /* @__PURE__ */ ne("strong", null, "Hellinger distance")
], -1)), TU = /* @__PURE__ */ lt(" LLM Based "), DU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), NU = {
  class: "section",
  "data-test": "claude-section"
}, LU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("div", { class: "title" }, "Claude Root Cause Analysis", -1)), MU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("div", { class: "claude-help" }, " When a new situation is created, ALEC will ask Claude to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. The API key is stored on the OpenNMS server and applies to all users of this plugin. ", -1)), OU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("strong", null, "Claude Enabled Root Cause Analysis", -1)), PU = {
  key: 0,
  class: "caption",
  "data-test": "claude-no-key-hint"
}, RU = { class: "claude-key-row" }, FU = /* @__PURE__ */ lt(" Clear Key "), UU = {
  key: 1,
  class: "caption",
  "data-test": "claude-cleared-hint"
}, WU = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, qU = { class: "title-row" }, HU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("div", { class: "title" }, "Correlation variables", -1)), zU = ["aria-expanded"], YU = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, GU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("strong", null, "Alpha (\u03B1)", -1)), jU = /* @__PURE__ */ lt(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), ZU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("strong", null, "Beta (\u03B2)", -1)), KU = /* @__PURE__ */ lt(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), JU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("code", null, "[0, 1]", -1)), XU = /* @__PURE__ */ lt(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), QU = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("strong", null, "Epsilon (\u03B5)", -1)), eW = /* @__PURE__ */ lt(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), tW = { "data-test": "help-hellinger-w" }, nW = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("strong", null, "Hellinger w", -1)), rW = /* @__PURE__ */ lt(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), oW = { "data-test": "help-hellinger-bias" }, iW = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("strong", null, "Hellinger bias", -1)), sW = /* @__PURE__ */ lt(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), aW = { class: "variables" }, lW = { class: "action-row" }, uW = /* @__PURE__ */ lt(" Close All Open Situations "), cW = /* @__PURE__ */ lt(" Re-Evaluate All Open Alarms "), dW = /* @__PURE__ */ gt(() => /* @__PURE__ */ ne("span", null, "Save Changes", -1)), fW = /* @__PURE__ */ lt("dismiss"), Dc = window.Vue.computed, hW = window.Vue.markRaw, pW = window.Vue.onMounted, st = window.Vue.ref, wW = /* @__PURE__ */ $U({
  __name: "AccountSettings",
  setup(e) {
    var Ee, ke, fe, Ne, Le, Ue, Pn, lr, $t, es, ts, ns, gn, ur, rs;
    const o = hW({
      MarkComplete: La,
      Help: uU,
      Restore: gU
    }), r = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, s = Do(), a = st(((Ee = s.engineInfo) == null ? void 0 : Ee.engineName) || ze.ENGINE_DBSCAN), u = st(
      s.engineInfo ? s.engineInfo.distanceMeasureName === ze.HELLINGER_OPTION : !0
    ), c = st((fe = (ke = s.engineInfo) == null ? void 0 : ke.alpha) != null ? fe : r.alpha), f = st((Le = (Ne = s.engineInfo) == null ? void 0 : Ne.beta) != null ? Le : r.beta), w = st((Pn = (Ue = s.engineInfo) == null ? void 0 : Ue.epsilon) != null ? Pn : r.epsilon), m = st(
      ($t = (lr = s.engineInfo) == null ? void 0 : lr.hellingerW) != null ? $t : r.hellingerW
    ), _ = st(
      (ts = (es = s.engineInfo) == null ? void 0 : es.hellingerBias) != null ? ts : r.hellingerBias
    ), $ = Dc(() => a.value === ze.ENGINE_DBSCAN), y = Dc(() => $.value && u.value), T = st((gn = (ns = s.claudeConfig) == null ? void 0 : ns.enabled) != null ? gn : !1), B = st(""), M = st((rs = (ur = s.claudeConfig) == null ? void 0 : ur.apiKeyPresent) != null ? rs : !1), N = st(!1), S = Dc(
      () => (!M.value || N.value) && B.value.trim().length === 0
    ), L = () => {
      B.value = "", N.value = !0, M.value = !1, T.value = !1;
    }, k = st(!1), O = st(!1), I = st(!1), F = st("");
    pW(async () => {
      if (s.claudeConfig === null) {
        const be = await s.getClaudeConfig();
        be && (T.value = be.enabled, M.value = be.apiKeyPresent);
      }
    });
    const P = () => {
      c.value = r.alpha, f.value = r.beta, w.value = r.epsilon, m.value = r.hellingerW, _.value = r.hellingerBias;
    }, W = (be, ee) => {
      F.value = be, I.value = ee, O.value = !0;
    }, $e = () => {
      if (N.value)
        return { enabled: !1, clearApiKey: !0 };
      const be = B.value.trim(), ee = { enabled: T.value };
      return be.length > 0 && (ee.apiKey = be), ee;
    }, de = async () => {
      var cr, dr, jo, ut;
      const be = {
        alpha: Number(c.value),
        beta: Number(f.value),
        epsilon: Number(w.value)
      };
      u.value && (be.hellingerW = Number(m.value), be.hellingerBias = Number(_.value));
      const ee = await s.setEngineInfo(
        a.value,
        u.value,
        be
      ), _e = await s.setClaudeConfig($e());
      _e && (B.value = "", N.value = !1, M.value = (dr = (cr = s.claudeConfig) == null ? void 0 : cr.apiKeyPresent) != null ? dr : !1, T.value = (ut = (jo = s.claudeConfig) == null ? void 0 : jo.enabled) != null ? ut : !1), ee && _e ? (s.getEngineInfo(), W("The settings were saved!", !1)) : W(
        ee && !_e ? "Engine settings saved, but Claude configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, me = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const be = await PM();
      W(
        be ? "All open situations were closed." : "Failed to close situations.",
        !be
      );
    }, Se = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const be = await RM();
      W(
        be ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !be
      );
    };
    return (be, ee) => (Dn(), go(_m, null, [
      qe(B9),
      ne("div", bU, [
        CU,
        ne("div", SU, [
          ne("div", EU, [
            IU,
            ne("a", {
              target: "_blank",
              href: ie(ze).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, kU),
            xU
          ]),
          qe(ie(__), {
            vertical: "",
            modelValue: a.value,
            "onUpdate:modelValue": ee[1] || (ee[1] = (_e) => a.value = _e),
            label: "",
            hideLabel: ""
          }, {
            default: zt(() => [
              qe(ie(Hc), {
                class: "radio-item",
                value: ie(ze).ENGINE_DBSCAN
              }, {
                default: zt(() => [
                  AU
                ]),
                _: 1
              }, 8, ["value"]),
              qe(ie(No), {
                modelValue: u.value,
                "onUpdate:modelValue": ee[0] || (ee[0] = (_e) => u.value = _e),
                disabled: !ie($),
                class: "checkbox"
              }, {
                default: zt(() => [
                  BU
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              qe(ie(Hc), {
                class: "radio-item",
                value: ie(ze).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: zt(() => [
                  TU
                ]),
                _: 1
              }, 8, ["value"]),
              DU
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        ne("div", NU, [
          LU,
          MU,
          qe(ie(No), {
            modelValue: T.value,
            "onUpdate:modelValue": ee[2] || (ee[2] = (_e) => T.value = _e),
            disabled: ie(S),
            class: "checkbox",
            "data-test": "claude-enabled"
          }, {
            default: zt(() => [
              OU
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          ie(S) ? (Dn(), go("div", PU, " Enter an API key to enable. ")) : Qn("", !0),
          ne("div", RU, [
            qe(ie(_o), {
              modelValue: B.value,
              "onUpdate:modelValue": ee[3] || (ee[3] = (_e) => B.value = _e),
              type: "password",
              autocomplete: "new-password",
              label: M.value && !N.value ? "Replace API key (leave blank to keep stored key)" : "Anthropic API key",
              "data-test": "claude-api-key",
              class: "claude-key-input"
            }, null, 8, ["modelValue", "label"]),
            M.value && !N.value ? (Dn(), Tc(ie(ue), {
              key: 0,
              secondary: "",
              "data-test": "claude-clear-key",
              onClick: L
            }, {
              default: zt(() => [
                FU
              ]),
              _: 1
            })) : Qn("", !0)
          ]),
          N.value ? (Dn(), go("div", UU, " Stored API key will be removed on save. ")) : Qn("", !0)
        ]),
        ie($) ? (Dn(), go("div", WU, [
          ne("div", qU, [
            HU,
            ne("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": k.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: ee[4] || (ee[4] = (_e) => k.value = !k.value)
            }, [
              qe(ie(G), {
                icon: ie(o).Help
              }, null, 8, ["icon"])
            ], 8, zU),
            ne("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: P
            }, [
              qe(ie(G), {
                icon: ie(o).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          k.value ? (Dn(), go("div", YU, [
            ne("ul", null, [
              ne("li", null, [
                GU,
                jU,
                ne("em", null, "Default: " + $o(r.alpha), 1)
              ]),
              ne("li", null, [
                ZU,
                KU,
                JU,
                XU,
                ne("em", null, "Default: " + $o(r.beta), 1)
              ]),
              ne("li", null, [
                QU,
                eW,
                ne("em", null, "Default: " + $o(r.epsilon), 1)
              ]),
              ie(y) ? (Dn(), go(_m, { key: 0 }, [
                ne("li", tW, [
                  nW,
                  rW,
                  ne("em", null, "Default: " + $o(r.hellingerW), 1)
                ]),
                ne("li", oW, [
                  iW,
                  sW,
                  ne("em", null, "Default: " + $o(r.hellingerBias), 1)
                ])
              ], 64)) : Qn("", !0)
            ])
          ])) : Qn("", !0),
          ne("div", aW, [
            qe(ie(_o), {
              modelValue: c.value,
              "onUpdate:modelValue": ee[5] || (ee[5] = (_e) => c.value = _e),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            qe(ie(_o), {
              modelValue: f.value,
              "onUpdate:modelValue": ee[6] || (ee[6] = (_e) => f.value = _e),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            qe(ie(_o), {
              modelValue: w.value,
              "onUpdate:modelValue": ee[7] || (ee[7] = (_e) => w.value = _e),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            ie(y) ? (Dn(), Tc(ie(_o), {
              key: 0,
              modelValue: m.value,
              "onUpdate:modelValue": ee[8] || (ee[8] = (_e) => m.value = _e),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Qn("", !0),
            ie(y) ? (Dn(), Tc(ie(_o), {
              key: 1,
              modelValue: _.value,
              "onUpdate:modelValue": ee[9] || (ee[9] = (_e) => _.value = _e),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Qn("", !0)
          ])
        ])) : Qn("", !0),
        ne("div", lW, [
          qe(ie(ue), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: me
          }, {
            default: zt(() => [
              uW
            ]),
            _: 1
          }),
          qe(ie(ue), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Se
          }, {
            default: zt(() => [
              cW
            ]),
            _: 1
          }),
          qe(ie(ue), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: de
          }, {
            default: zt(() => [
              qe(ie(G), {
                icon: ie(o).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              dW
            ]),
            _: 1
          })
        ]),
        qe(ie(sl), {
          modelValue: O.value,
          "onUpdate:modelValue": ee[11] || (ee[11] = (_e) => O.value = _e),
          right: "",
          error: I.value,
          timeout: 6e3
        }, {
          button: zt(() => [
            qe(ie(ue), {
              onClick: ee[10] || (ee[10] = (_e) => O.value = !1),
              text: ""
            }, {
              default: zt(() => [
                fW
              ]),
              _: 1
            })
          ]),
          default: zt(() => [
            lt($o(F.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const vW = /* @__PURE__ */ ce(wW, [["__scopeId", "data-v-bc4d9956"]]), mW = window.VueRouter.createRouter, _W = window.VueRouter.createWebHistory, gW = async () => {
  const e = Do();
  e.userId || await e.getUserRole();
}, yg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || Vg;
      await Do().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => gW(),
    component: B3
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: rF
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: NF
  },
  {
    path: "/error",
    name: "error",
    component: KF
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: _9
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await Do().getEngineInfo();
    },
    component: vW
  }
], Nc = window.VRouter;
if (Nc) {
  const e = "Plugin-alecUiExtension", o = Nc.hasRoute(e) ? e : "Plugin";
  for (const r of yg) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Nc.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const Vg = mW({
  history: _W(),
  routes: yg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = mS;
