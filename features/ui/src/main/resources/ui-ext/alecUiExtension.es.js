const Ve = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
}, CS = {}, VS = window.Vue.resolveComponent, ES = window.Vue.createVNode, SS = window.Vue.openBlock, IS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const kS = { class: "main" };
function AS(e, o) {
  const r = VS("router-view");
  return SS(), IS("div", kS, [
    ES(r)
  ]);
}
const TS = /* @__PURE__ */ Ve(CS, [["render", AS], ["__scopeId", "data-v-5d32d140"]]), xS = window.Vue.defineComponent, LS = window.Vue.openBlock, MS = window.Vue.createBlock, DS = /* @__PURE__ */ xS({
  __name: "App",
  setup(e) {
    return (o, r) => (LS(), MS(TS));
  }
});
var ya = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function NS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pg = { exports: {} }, tp = { exports: {} }, hg = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, OS = hg, np = Object.prototype.toString, op = function(e) {
  return function(o) {
    var r = np.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Bi(e) {
  return e = e.toLowerCase(), function(r) {
    return op(r) === e;
  };
}
function rp(e) {
  return Array.isArray(e);
}
function Bu(e) {
  return typeof e > "u";
}
function BS(e) {
  return e !== null && !Bu(e) && e.constructor !== null && !Bu(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var mg = Bi("ArrayBuffer");
function RS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && mg(e.buffer), o;
}
function PS(e) {
  return typeof e == "string";
}
function FS(e) {
  return typeof e == "number";
}
function wg(e) {
  return e !== null && typeof e == "object";
}
function Au(e) {
  if (op(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var US = Bi("Date"), WS = Bi("File"), HS = Bi("Blob"), zS = Bi("FileList");
function ip(e) {
  return np.call(e) === "[object Function]";
}
function qS(e) {
  return wg(e) && ip(e.pipe);
}
function GS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || np.call(e) === o || ip(e.toString) && e.toString() === o);
}
var YS = Bi("URLSearchParams");
function jS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function ZS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function sp(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), rp(e))
      for (var r = 0, s = e.length; r < s; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function Rf() {
  var e = {};
  function o(a, u) {
    Au(e[u]) && Au(a) ? e[u] = Rf(e[u], a) : Au(a) ? e[u] = Rf({}, a) : rp(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, s = arguments.length; r < s; r++)
    sp(arguments[r], o);
  return e;
}
function KS(e, o, r) {
  return sp(o, function(a, u) {
    r && typeof a == "function" ? e[u] = OS(a, r) : e[u] = a;
  }), e;
}
function JS(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function XS(e, o, r, s) {
  e.prototype = Object.create(o.prototype, s), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function QS(e, o, r) {
  var s, a, u, c = {};
  o = o || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function eI(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var s = e.indexOf(o, r);
  return s !== -1 && s === r;
}
function tI(e) {
  if (!e)
    return null;
  var o = e.length;
  if (Bu(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var nI = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), xt = {
  isArray: rp,
  isArrayBuffer: mg,
  isBuffer: BS,
  isFormData: GS,
  isArrayBufferView: RS,
  isString: PS,
  isNumber: FS,
  isObject: wg,
  isPlainObject: Au,
  isUndefined: Bu,
  isDate: US,
  isFile: WS,
  isBlob: HS,
  isFunction: ip,
  isStream: qS,
  isURLSearchParams: YS,
  isStandardBrowserEnv: ZS,
  forEach: sp,
  merge: Rf,
  extend: KS,
  trim: jS,
  stripBOM: JS,
  inherits: XS,
  toFlatObject: QS,
  kindOf: op,
  kindOfTest: Bi,
  endsWith: eI,
  toArray: tI,
  isTypedArray: nI,
  isFileList: zS
}, ss = xt;
function Pm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var vg = function(o, r, s) {
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
        ss.isDate(y) ? y = y.toISOString() : ss.isObject(y) && (y = JSON.stringify(y)), u.push(Pm(v) + "=" + Pm(y));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, oI = xt;
function Ku() {
  this.handlers = [];
}
Ku.prototype.use = function(o, r, s) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
Ku.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Ku.prototype.forEach = function(o) {
  oI.forEach(this.handlers, function(s) {
    s !== null && o(s);
  });
};
var rI = Ku, iI = xt, sI = function(o, r) {
  iI.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, _g = xt;
function Ms(e, o, r, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), s && (this.request = s), a && (this.response = a);
}
_g.inherits(Ms, Error, {
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
var gg = Ms.prototype, $g = {};
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
Object.defineProperties(Ms, $g);
Object.defineProperty(gg, "isAxiosError", { value: !0 });
Ms.from = function(e, o, r, s, a, u) {
  var c = Object.create(gg);
  return _g.toFlatObject(e, c, function(m) {
    return m !== Error.prototype;
  }), Ms.call(c, e.message, o, r, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Bs = Ms, yg = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, so = xt;
function aI(e, o) {
  o = o || new FormData();
  var r = [];
  function s(u) {
    return u === null ? "" : so.isDate(u) ? u.toISOString() : so.isArrayBuffer(u) || so.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (so.isPlainObject(u) || so.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), so.forEach(u, function(m, v) {
        if (!so.isUndefined(m)) {
          var g = c ? c + "." + v : v, y;
          if (m && !c && typeof m == "object") {
            if (so.endsWith(v, "{}"))
              m = JSON.stringify(m);
            else if (so.endsWith(v, "[]") && (y = so.toArray(m))) {
              y.forEach(function(b) {
                !so.isUndefined(b) && o.append(g, s(b));
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
var bg = aI, Ed, Fm;
function lI() {
  if (Fm)
    return Ed;
  Fm = 1;
  var e = Bs;
  return Ed = function(r, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Ed;
}
var Sd, Um;
function uI() {
  if (Um)
    return Sd;
  Um = 1;
  var e = xt;
  return Sd = e.isStandardBrowserEnv() ? function() {
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
  }(), Sd;
}
var cI = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, dI = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, fI = cI, pI = dI, Cg = function(o, r) {
  return o && !fI(r) ? pI(o, r) : r;
}, Id, Wm;
function hI() {
  if (Wm)
    return Id;
  Wm = 1;
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
  return Id = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Id;
}
var kd, Hm;
function mI() {
  if (Hm)
    return kd;
  Hm = 1;
  var e = xt;
  return kd = e.isStandardBrowserEnv() ? function() {
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
  }(), kd;
}
var Ad, zm;
function Ju() {
  if (zm)
    return Ad;
  zm = 1;
  var e = Bs, o = xt;
  function r(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), Ad = r, Ad;
}
var Td, qm;
function wI() {
  return qm || (qm = 1, Td = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), Td;
}
var xd, Gm;
function Ym() {
  if (Gm)
    return xd;
  Gm = 1;
  var e = xt, o = lI(), r = uI(), s = vg, a = Cg, u = hI(), c = mI(), f = yg, m = Bs, v = Ju(), g = wI();
  return xd = function(b) {
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
      var Z = a(b.baseURL, b.url);
      k.open(b.method.toUpperCase(), s(Z, b.params, b.paramsSerializer), !0), k.timeout = b.timeout;
      function Le() {
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
      if ("onloadend" in k ? k.onloadend = Le : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(Le);
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
        var he = (b.withCredentials || c(Z)) && b.xsrfCookieName ? r.read(b.xsrfCookieName) : void 0;
        he && (S[b.xsrfHeaderName] = he);
      }
      "setRequestHeader" in k && e.forEach(S, function(We, ze) {
        typeof B > "u" && ze.toLowerCase() === "content-type" ? delete S[ze] : k.setRequestHeader(ze, We);
      }), e.isUndefined(b.withCredentials) || (k.withCredentials = !!b.withCredentials), A && A !== "json" && (k.responseType = b.responseType), typeof b.onDownloadProgress == "function" && k.addEventListener("progress", b.onDownloadProgress), typeof b.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", b.onUploadProgress), (b.cancelToken || b.signal) && (T = function(Ee) {
        !k || (R(!Ee || Ee && Ee.type ? new v() : Ee), k.abort(), k = null);
      }, b.cancelToken && b.cancelToken.subscribe(T), b.signal && (b.signal.aborted ? T() : b.signal.addEventListener("abort", T))), B || (B = null);
      var ke = g(Z);
      if (ke && ["http", "https", "file"].indexOf(ke) === -1) {
        R(new m("Unsupported protocol " + ke + ":", m.ERR_BAD_REQUEST, b));
        return;
      }
      k.send(B);
    });
  }, xd;
}
var Ld, jm;
function vI() {
  return jm || (jm = 1, Ld = null), Ld;
}
var gt = xt, Zm = sI, Km = Bs, _I = yg, gI = bg, $I = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Jm(e, o) {
  !gt.isUndefined(e) && gt.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function yI() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Ym()), e;
}
function bI(e, o, r) {
  if (gt.isString(e))
    try {
      return (o || JSON.parse)(e), gt.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(e);
}
var Xu = {
  transitional: _I,
  adapter: yI(),
  transformRequest: [function(o, r) {
    if (Zm(r, "Accept"), Zm(r, "Content-Type"), gt.isFormData(o) || gt.isArrayBuffer(o) || gt.isBuffer(o) || gt.isStream(o) || gt.isFile(o) || gt.isBlob(o))
      return o;
    if (gt.isArrayBufferView(o))
      return o.buffer;
    if (gt.isURLSearchParams(o))
      return Jm(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var s = gt.isObject(o), a = r && r["Content-Type"], u;
    if ((u = gt.isFileList(o)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return gI(u ? { "files[]": o } : o, c && new c());
    } else if (s || a === "application/json")
      return Jm(r, "application/json"), bI(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Xu.transitional, s = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && gt.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Km.from(c, Km.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: vI()
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
gt.forEach(["delete", "get", "head"], function(o) {
  Xu.headers[o] = {};
});
gt.forEach(["post", "put", "patch"], function(o) {
  Xu.headers[o] = gt.merge($I);
});
var ap = Xu, CI = xt, VI = ap, EI = function(o, r, s) {
  var a = this || VI;
  return CI.forEach(s, function(c) {
    o = c.call(a, o, r);
  }), o;
}, Md, Xm;
function Vg() {
  return Xm || (Xm = 1, Md = function(o) {
    return !!(o && o.__CANCEL__);
  }), Md;
}
var Qm = xt, Dd = EI, SI = Vg(), II = ap, kI = Ju();
function Nd(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new kI();
}
var AI = function(o) {
  Nd(o), o.headers = o.headers || {}, o.data = Dd.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = Qm.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), Qm.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || II.adapter;
  return r(o).then(function(a) {
    return Nd(o), a.data = Dd.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return SI(a) || (Nd(o), a && a.response && (a.response.data = Dd.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, Sn = xt, Eg = function(o, r) {
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
    var b = v[y] || u, N = b(y);
    Sn.isUndefined(N) && b !== m || (s[y] = N);
  }), s;
}, Od, ew;
function Sg() {
  return ew || (ew = 1, Od = {
    version: "0.27.2"
  }), Od;
}
var TI = Sg().version, Rr = Bs, lp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  lp[e] = function(s) {
    return typeof s === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var tw = {};
lp.transitional = function(o, r, s) {
  function a(u, c) {
    return "[Axios v" + TI + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new Rr(
        a(c, " has been removed" + (r ? " in " + r : "")),
        Rr.ERR_DEPRECATED
      );
    return r && !tw[c] && (tw[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function xI(e, o, r) {
  if (typeof e != "object")
    throw new Rr("options must be an object", Rr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = o[u];
    if (c) {
      var f = e[u], m = f === void 0 || c(f, u, e);
      if (m !== !0)
        throw new Rr("option " + u + " must be " + m, Rr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Rr("Unknown option " + u, Rr.ERR_BAD_OPTION);
  }
}
var LI = {
  assertOptions: xI,
  validators: lp
}, Ig = xt, MI = vg, nw = rI, ow = AI, Qu = Eg, DI = Cg, kg = LI, as = kg.validators;
function Ds(e) {
  this.defaults = e, this.interceptors = {
    request: new nw(),
    response: new nw()
  };
}
Ds.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Qu(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var s = r.transitional;
  s !== void 0 && kg.assertOptions(s, {
    silentJSONParsing: as.transitional(as.boolean),
    forcedJSONParsing: as.transitional(as.boolean),
    clarifyTimeoutError: as.transitional(as.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(N) {
    typeof N.runWhen == "function" && N.runWhen(r) === !1 || (u = u && N.synchronous, a.unshift(N.fulfilled, N.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(N) {
    c.push(N.fulfilled, N.rejected);
  });
  var f;
  if (!u) {
    var m = [ow, void 0];
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
    f = ow(v);
  } catch (b) {
    return Promise.reject(b);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
Ds.prototype.getUri = function(o) {
  o = Qu(this.defaults, o);
  var r = DI(o.baseURL, o.url);
  return MI(r, o.params, o.paramsSerializer);
};
Ig.forEach(["delete", "get", "head", "options"], function(o) {
  Ds.prototype[o] = function(r, s) {
    return this.request(Qu(s || {}, {
      method: o,
      url: r,
      data: (s || {}).data
    }));
  };
});
Ig.forEach(["post", "put", "patch"], function(o) {
  function r(s) {
    return function(u, c, f) {
      return this.request(Qu(f || {}, {
        method: o,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Ds.prototype[o] = r(), Ds.prototype[o + "Form"] = r(!0);
});
var NI = Ds, Bd, rw;
function OI() {
  if (rw)
    return Bd;
  rw = 1;
  var e = Ju();
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
  }, Bd = o, Bd;
}
var Rd, iw;
function BI() {
  return iw || (iw = 1, Rd = function(o) {
    return function(s) {
      return o.apply(null, s);
    };
  }), Rd;
}
var Pd, sw;
function RI() {
  if (sw)
    return Pd;
  sw = 1;
  var e = xt;
  return Pd = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, Pd;
}
var aw = xt, PI = hg, Tu = NI, FI = Eg, UI = ap;
function Ag(e) {
  var o = new Tu(e), r = PI(Tu.prototype.request, o);
  return aw.extend(r, Tu.prototype, o), aw.extend(r, o), r.create = function(a) {
    return Ag(FI(e, a));
  }, r;
}
var wn = Ag(UI);
wn.Axios = Tu;
wn.CanceledError = Ju();
wn.CancelToken = OI();
wn.isCancel = Vg();
wn.VERSION = Sg().version;
wn.toFormData = bg;
wn.AxiosError = Bs;
wn.Cancel = wn.CanceledError;
wn.all = function(o) {
  return Promise.all(o);
};
wn.spread = BI();
wn.isAxiosError = RI();
tp.exports = wn;
tp.exports.default = wn;
(function(e) {
  e.exports = tp.exports;
})(pg);
const Tg = /* @__PURE__ */ NS(pg.exports), or = Tg.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), Lt = Tg.create({
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
    var r, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", v = 500, g = "__lodash_placeholder__", y = 1, b = 2, N = 4, O = 1, R = 2, B = 1, S = 2, A = 4, T = 8, P = 16, k = 32, U = 64, W = 128, Z = 256, Le = 512, he = 30, ke = "...", Ee = 800, We = 16, ze = 1, ge = 2, Ze = 3, Qe = 1 / 0, qe = 9007199254740991, tn = 17976931348623157e292, Lo = 0 / 0, $e = 4294967295, Js = $e - 1, Xs = $e >>> 1, Pi = [
      ["ary", W],
      ["bind", B],
      ["bindKey", S],
      ["curry", T],
      ["curryRight", P],
      ["flip", Le],
      ["partial", k],
      ["partialRight", U],
      ["rearg", Z]
    ], $t = "[object Arguments]", zt = "[object Array]", nn = "[object AsyncFunction]", vn = "[object Boolean]", on = "[object Date]", Yr = "[object DOMException]", Me = "[object Error]", Mo = "[object Function]", Re = "[object GeneratorFunction]", Mt = "[object Map]", be = "[object Number]", Mn = "[object Null]", yt = "[object Object]", Dt = "[object Promise]", jr = "[object Proxy]", Dn = "[object RegExp]", ct = "[object Set]", mo = "[object String]", dt = "[object Symbol]", Do = "[object Undefined]", qt = "[object WeakMap]", Zr = "[object WeakSet]", Jn = "[object ArrayBuffer]", _n = "[object DataView]", wo = "[object Float32Array]", gn = "[object Float64Array]", Xn = "[object Int8Array]", Qn = "[object Int16Array]", No = "[object Int32Array]", Oo = "[object Uint8Array]", Bo = "[object Uint8ClampedArray]", vo = "[object Uint16Array]", _o = "[object Uint32Array]", eo = /\b__p \+= '';/g, Gt = /\b(__p \+=) '' \+/g, rr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ir = /&(?:amp|lt|gt|quot|#39);/g, sr = /[&<>"']/g, ar = RegExp(ir.source), Kr = RegExp(sr.source), Ro = /<%-([\s\S]+?)%>/g, Po = /<%([\s\S]+?)%>/g, Nt = /<%=([\s\S]+?)%>/g, to = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lr = /^\w*$/, ur = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cr = /[\\^$.*+?()[\]{}|]/g, Jr = RegExp(cr.source), go = /^\s+/, Xr = /\s/, dr = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Fi = /\{\n\/\* \[wrapped with (.+)\] \*/, oe = /,? & /, J = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, De = /[()=,{}\[\]\/\s]/, Q = /\\(\\)?/g, rn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Qr = /\w*$/, ei = /^[-+]0x[0-9a-f]+$/i, fr = /^0b[01]+$/i, ti = /^\[object .+?Constructor\]$/, ni = /^0o[0-7]+$/i, Ui = /^(?:0|[1-9]\d*)$/, Wi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Fo = /($^)/, Hi = /['\n\r\u2028\u2029\\]/g, Ot = "\\ud800-\\udfff", oi = "\\u0300-\\u036f", Nn = "\\ufe20-\\ufe2f", zi = "\\u20d0-\\u20ff", ri = oi + Nn + zi, pr = "\\u2700-\\u27bf", hr = "a-z\\xdf-\\xf6\\xf8-\\xff", Uo = "\\xac\\xb1\\xd7\\xf7", Qs = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", qi = "\\u2000-\\u206f", mr = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", wr = "A-Z\\xc0-\\xd6\\xd8-\\xde", On = "\\ufe0e\\ufe0f", wl = Uo + Qs + qi + mr, ea = "['\u2019]", vl = "[" + Ot + "]", ta = "[" + wl + "]", Gi = "[" + ri + "]", na = "\\d+", _c = "[" + pr + "]", _l = "[" + hr + "]", oa = "[^" + Ot + wl + na + pr + hr + wr + "]", vr = "\\ud83c[\\udffb-\\udfff]", ra = "(?:" + Gi + "|" + vr + ")", q = "[^" + Ot + "]", w = "(?:\\ud83c[\\udde6-\\uddff]){2}", E = "[\\ud800-\\udbff][\\udc00-\\udfff]", H = "[" + wr + "]", j = "\\u200d", ae = "(?:" + _l + "|" + oa + ")", ve = "(?:" + H + "|" + oa + ")", nt = "(?:" + ea + "(?:d|ll|m|re|s|t|ve))?", Ke = "(?:" + ea + "(?:D|LL|M|RE|S|T|VE))?", Yt = ra + "?", sn = "[" + On + "]?", ia = "(?:" + j + "(?:" + [q, w, E].join("|") + ")" + sn + Yt + ")*", bt = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", A0 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", xp = sn + Yt + ia, T0 = "(?:" + [_c, w, E].join("|") + ")" + xp, x0 = "(?:" + [q + Gi + "?", Gi, w, E, vl].join("|") + ")", L0 = RegExp(ea, "g"), M0 = RegExp(Gi, "g"), gc = RegExp(vr + "(?=" + vr + ")|" + x0 + xp, "g"), D0 = RegExp([
      H + "?" + _l + "+" + nt + "(?=" + [ta, H, "$"].join("|") + ")",
      ve + "+" + Ke + "(?=" + [ta, H + ae, "$"].join("|") + ")",
      H + "?" + ae + "+" + nt,
      H + "+" + Ke,
      A0,
      bt,
      na,
      T0
    ].join("|"), "g"), N0 = RegExp("[" + j + Ot + ri + On + "]"), O0 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, B0 = [
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
    ], R0 = -1, He = {};
    He[wo] = He[gn] = He[Xn] = He[Qn] = He[No] = He[Oo] = He[Bo] = He[vo] = He[_o] = !0, He[$t] = He[zt] = He[Jn] = He[vn] = He[_n] = He[on] = He[Me] = He[Mo] = He[Mt] = He[be] = He[yt] = He[Dn] = He[ct] = He[mo] = He[qt] = !1;
    var Fe = {};
    Fe[$t] = Fe[zt] = Fe[Jn] = Fe[_n] = Fe[vn] = Fe[on] = Fe[wo] = Fe[gn] = Fe[Xn] = Fe[Qn] = Fe[No] = Fe[Mt] = Fe[be] = Fe[yt] = Fe[Dn] = Fe[ct] = Fe[mo] = Fe[dt] = Fe[Oo] = Fe[Bo] = Fe[vo] = Fe[_o] = !0, Fe[Me] = Fe[Mo] = Fe[qt] = !1;
    var P0 = {
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
    }, F0 = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, U0 = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, W0 = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, H0 = parseFloat, z0 = parseInt, Lp = typeof ya == "object" && ya && ya.Object === Object && ya, q0 = typeof self == "object" && self && self.Object === Object && self, Ct = Lp || q0 || Function("return this")(), $c = o && !o.nodeType && o, ii = $c && !0 && e && !e.nodeType && e, Mp = ii && ii.exports === $c, yc = Mp && Lp.process, Bn = function() {
      try {
        var C = ii && ii.require && ii.require("util").types;
        return C || yc && yc.binding && yc.binding("util");
      } catch {
      }
    }(), Dp = Bn && Bn.isArrayBuffer, Np = Bn && Bn.isDate, Op = Bn && Bn.isMap, Bp = Bn && Bn.isRegExp, Rp = Bn && Bn.isSet, Pp = Bn && Bn.isTypedArray;
    function $n(C, x, I) {
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
    function G0(C, x, I, Y) {
      for (var ie = -1, Se = C == null ? 0 : C.length; ++ie < Se; ) {
        var ft = C[ie];
        x(Y, ft, I(ft), C);
      }
      return Y;
    }
    function Rn(C, x) {
      for (var I = -1, Y = C == null ? 0 : C.length; ++I < Y && x(C[I], I, C) !== !1; )
        ;
      return C;
    }
    function Y0(C, x) {
      for (var I = C == null ? 0 : C.length; I-- && x(C[I], I, C) !== !1; )
        ;
      return C;
    }
    function Fp(C, x) {
      for (var I = -1, Y = C == null ? 0 : C.length; ++I < Y; )
        if (!x(C[I], I, C))
          return !1;
      return !0;
    }
    function _r(C, x) {
      for (var I = -1, Y = C == null ? 0 : C.length, ie = 0, Se = []; ++I < Y; ) {
        var ft = C[I];
        x(ft, I, C) && (Se[ie++] = ft);
      }
      return Se;
    }
    function gl(C, x) {
      var I = C == null ? 0 : C.length;
      return !!I && Yi(C, x, 0) > -1;
    }
    function bc(C, x, I) {
      for (var Y = -1, ie = C == null ? 0 : C.length; ++Y < ie; )
        if (I(x, C[Y]))
          return !0;
      return !1;
    }
    function Ge(C, x) {
      for (var I = -1, Y = C == null ? 0 : C.length, ie = Array(Y); ++I < Y; )
        ie[I] = x(C[I], I, C);
      return ie;
    }
    function gr(C, x) {
      for (var I = -1, Y = x.length, ie = C.length; ++I < Y; )
        C[ie + I] = x[I];
      return C;
    }
    function Cc(C, x, I, Y) {
      var ie = -1, Se = C == null ? 0 : C.length;
      for (Y && Se && (I = C[++ie]); ++ie < Se; )
        I = x(I, C[ie], ie, C);
      return I;
    }
    function j0(C, x, I, Y) {
      var ie = C == null ? 0 : C.length;
      for (Y && ie && (I = C[--ie]); ie--; )
        I = x(I, C[ie], ie, C);
      return I;
    }
    function Vc(C, x) {
      for (var I = -1, Y = C == null ? 0 : C.length; ++I < Y; )
        if (x(C[I], I, C))
          return !0;
      return !1;
    }
    var Z0 = Ec("length");
    function K0(C) {
      return C.split("");
    }
    function J0(C) {
      return C.match(J) || [];
    }
    function Up(C, x, I) {
      var Y;
      return I(C, function(ie, Se, ft) {
        if (x(ie, Se, ft))
          return Y = Se, !1;
      }), Y;
    }
    function $l(C, x, I, Y) {
      for (var ie = C.length, Se = I + (Y ? 1 : -1); Y ? Se-- : ++Se < ie; )
        if (x(C[Se], Se, C))
          return Se;
      return -1;
    }
    function Yi(C, x, I) {
      return x === x ? u$(C, x, I) : $l(C, Wp, I);
    }
    function X0(C, x, I, Y) {
      for (var ie = I - 1, Se = C.length; ++ie < Se; )
        if (Y(C[ie], x))
          return ie;
      return -1;
    }
    function Wp(C) {
      return C !== C;
    }
    function Hp(C, x) {
      var I = C == null ? 0 : C.length;
      return I ? Ic(C, x) / I : Lo;
    }
    function Ec(C) {
      return function(x) {
        return x == null ? r : x[C];
      };
    }
    function Sc(C) {
      return function(x) {
        return C == null ? r : C[x];
      };
    }
    function zp(C, x, I, Y, ie) {
      return ie(C, function(Se, ft, Pe) {
        I = Y ? (Y = !1, Se) : x(I, Se, ft, Pe);
      }), I;
    }
    function Q0(C, x) {
      var I = C.length;
      for (C.sort(x); I--; )
        C[I] = C[I].value;
      return C;
    }
    function Ic(C, x) {
      for (var I, Y = -1, ie = C.length; ++Y < ie; ) {
        var Se = x(C[Y]);
        Se !== r && (I = I === r ? Se : I + Se);
      }
      return I;
    }
    function kc(C, x) {
      for (var I = -1, Y = Array(C); ++I < C; )
        Y[I] = x(I);
      return Y;
    }
    function e$(C, x) {
      return Ge(x, function(I) {
        return [I, C[I]];
      });
    }
    function qp(C) {
      return C && C.slice(0, Zp(C) + 1).replace(go, "");
    }
    function yn(C) {
      return function(x) {
        return C(x);
      };
    }
    function Ac(C, x) {
      return Ge(x, function(I) {
        return C[I];
      });
    }
    function sa(C, x) {
      return C.has(x);
    }
    function Gp(C, x) {
      for (var I = -1, Y = C.length; ++I < Y && Yi(x, C[I], 0) > -1; )
        ;
      return I;
    }
    function Yp(C, x) {
      for (var I = C.length; I-- && Yi(x, C[I], 0) > -1; )
        ;
      return I;
    }
    function t$(C, x) {
      for (var I = C.length, Y = 0; I--; )
        C[I] === x && ++Y;
      return Y;
    }
    var n$ = Sc(P0), o$ = Sc(F0);
    function r$(C) {
      return "\\" + W0[C];
    }
    function i$(C, x) {
      return C == null ? r : C[x];
    }
    function ji(C) {
      return N0.test(C);
    }
    function s$(C) {
      return O0.test(C);
    }
    function a$(C) {
      for (var x, I = []; !(x = C.next()).done; )
        I.push(x.value);
      return I;
    }
    function Tc(C) {
      var x = -1, I = Array(C.size);
      return C.forEach(function(Y, ie) {
        I[++x] = [ie, Y];
      }), I;
    }
    function jp(C, x) {
      return function(I) {
        return C(x(I));
      };
    }
    function $r(C, x) {
      for (var I = -1, Y = C.length, ie = 0, Se = []; ++I < Y; ) {
        var ft = C[I];
        (ft === x || ft === g) && (C[I] = g, Se[ie++] = I);
      }
      return Se;
    }
    function yl(C) {
      var x = -1, I = Array(C.size);
      return C.forEach(function(Y) {
        I[++x] = Y;
      }), I;
    }
    function l$(C) {
      var x = -1, I = Array(C.size);
      return C.forEach(function(Y) {
        I[++x] = [Y, Y];
      }), I;
    }
    function u$(C, x, I) {
      for (var Y = I - 1, ie = C.length; ++Y < ie; )
        if (C[Y] === x)
          return Y;
      return -1;
    }
    function c$(C, x, I) {
      for (var Y = I + 1; Y--; )
        if (C[Y] === x)
          return Y;
      return Y;
    }
    function Zi(C) {
      return ji(C) ? f$(C) : Z0(C);
    }
    function no(C) {
      return ji(C) ? p$(C) : K0(C);
    }
    function Zp(C) {
      for (var x = C.length; x-- && Xr.test(C.charAt(x)); )
        ;
      return x;
    }
    var d$ = Sc(U0);
    function f$(C) {
      for (var x = gc.lastIndex = 0; gc.test(C); )
        ++x;
      return x;
    }
    function p$(C) {
      return C.match(gc) || [];
    }
    function h$(C) {
      return C.match(D0) || [];
    }
    var m$ = function C(x) {
      x = x == null ? Ct : Ki.defaults(Ct.Object(), x, Ki.pick(Ct, B0));
      var I = x.Array, Y = x.Date, ie = x.Error, Se = x.Function, ft = x.Math, Pe = x.Object, xc = x.RegExp, w$ = x.String, Pn = x.TypeError, bl = I.prototype, v$ = Se.prototype, Ji = Pe.prototype, Cl = x["__core-js_shared__"], Vl = v$.toString, Ne = Ji.hasOwnProperty, _$ = 0, Kp = function() {
        var t = /[^.]+$/.exec(Cl && Cl.keys && Cl.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), El = Ji.toString, g$ = Vl.call(Pe), $$ = Ct._, y$ = xc(
        "^" + Vl.call(Ne).replace(cr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Sl = Mp ? x.Buffer : r, yr = x.Symbol, Il = x.Uint8Array, Jp = Sl ? Sl.allocUnsafe : r, kl = jp(Pe.getPrototypeOf, Pe), Xp = Pe.create, Qp = Ji.propertyIsEnumerable, Al = bl.splice, eh = yr ? yr.isConcatSpreadable : r, aa = yr ? yr.iterator : r, si = yr ? yr.toStringTag : r, Tl = function() {
        try {
          var t = di(Pe, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), b$ = x.clearTimeout !== Ct.clearTimeout && x.clearTimeout, C$ = Y && Y.now !== Ct.Date.now && Y.now, V$ = x.setTimeout !== Ct.setTimeout && x.setTimeout, xl = ft.ceil, Ll = ft.floor, Lc = Pe.getOwnPropertySymbols, E$ = Sl ? Sl.isBuffer : r, th = x.isFinite, S$ = bl.join, I$ = jp(Pe.keys, Pe), pt = ft.max, Bt = ft.min, k$ = Y.now, A$ = x.parseInt, nh = ft.random, T$ = bl.reverse, Mc = di(x, "DataView"), la = di(x, "Map"), Dc = di(x, "Promise"), Xi = di(x, "Set"), ua = di(x, "WeakMap"), ca = di(Pe, "create"), Ml = ua && new ua(), Qi = {}, x$ = fi(Mc), L$ = fi(la), M$ = fi(Dc), D$ = fi(Xi), N$ = fi(ua), Dl = yr ? yr.prototype : r, da = Dl ? Dl.valueOf : r, oh = Dl ? Dl.toString : r;
      function p(t) {
        if (et(t) && !se(t) && !(t instanceof me)) {
          if (t instanceof Fn)
            return t;
          if (Ne.call(t, "__wrapped__"))
            return rm(t);
        }
        return new Fn(t);
      }
      var es = function() {
        function t() {
        }
        return function(n) {
          if (!Je(n))
            return {};
          if (Xp)
            return Xp(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = r, i;
        };
      }();
      function Nl() {
      }
      function Fn(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      p.templateSettings = {
        escape: Ro,
        evaluate: Po,
        interpolate: Nt,
        variable: "",
        imports: {
          _: p
        }
      }, p.prototype = Nl.prototype, p.prototype.constructor = p, Fn.prototype = es(Nl.prototype), Fn.prototype.constructor = Fn;
      function me(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $e, this.__views__ = [];
      }
      function O$() {
        var t = new me(this.__wrapped__);
        return t.__actions__ = an(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = an(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = an(this.__views__), t;
      }
      function B$() {
        if (this.__filtered__) {
          var t = new me(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function R$() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = se(t), l = n < 0, d = i ? t.length : 0, h = Ky(0, d, this.__views__), _ = h.start, $ = h.end, V = $ - _, M = l ? $ : _ - 1, D = this.__iteratees__, F = D.length, G = 0, K = Bt(V, this.__takeCount__);
        if (!i || !l && d == V && K == V)
          return Ih(t, this.__actions__);
        var te = [];
        e:
          for (; V-- && G < K; ) {
            M += n;
            for (var ue = -1, ne = t[M]; ++ue < F; ) {
              var pe = D[ue], _e = pe.iteratee, Vn = pe.type, Kt = _e(ne);
              if (Vn == ge)
                ne = Kt;
              else if (!Kt) {
                if (Vn == ze)
                  continue e;
                break e;
              }
            }
            te[G++] = ne;
          }
        return te;
      }
      me.prototype = es(Nl.prototype), me.prototype.constructor = me;
      function ai(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function P$() {
        this.__data__ = ca ? ca(null) : {}, this.size = 0;
      }
      function F$(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function U$(t) {
        var n = this.__data__;
        if (ca) {
          var i = n[t];
          return i === m ? r : i;
        }
        return Ne.call(n, t) ? n[t] : r;
      }
      function W$(t) {
        var n = this.__data__;
        return ca ? n[t] !== r : Ne.call(n, t);
      }
      function H$(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = ca && n === r ? m : n, this;
      }
      ai.prototype.clear = P$, ai.prototype.delete = F$, ai.prototype.get = U$, ai.prototype.has = W$, ai.prototype.set = H$;
      function Wo(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function z$() {
        this.__data__ = [], this.size = 0;
      }
      function q$(t) {
        var n = this.__data__, i = Ol(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Al.call(n, i, 1), --this.size, !0;
      }
      function G$(t) {
        var n = this.__data__, i = Ol(n, t);
        return i < 0 ? r : n[i][1];
      }
      function Y$(t) {
        return Ol(this.__data__, t) > -1;
      }
      function j$(t, n) {
        var i = this.__data__, l = Ol(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      Wo.prototype.clear = z$, Wo.prototype.delete = q$, Wo.prototype.get = G$, Wo.prototype.has = Y$, Wo.prototype.set = j$;
      function Ho(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Z$() {
        this.size = 0, this.__data__ = {
          hash: new ai(),
          map: new (la || Wo)(),
          string: new ai()
        };
      }
      function K$(t) {
        var n = jl(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function J$(t) {
        return jl(this, t).get(t);
      }
      function X$(t) {
        return jl(this, t).has(t);
      }
      function Q$(t, n) {
        var i = jl(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      Ho.prototype.clear = Z$, Ho.prototype.delete = K$, Ho.prototype.get = J$, Ho.prototype.has = X$, Ho.prototype.set = Q$;
      function li(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new Ho(); ++n < i; )
          this.add(t[n]);
      }
      function ey(t) {
        return this.__data__.set(t, m), this;
      }
      function ty(t) {
        return this.__data__.has(t);
      }
      li.prototype.add = li.prototype.push = ey, li.prototype.has = ty;
      function oo(t) {
        var n = this.__data__ = new Wo(t);
        this.size = n.size;
      }
      function ny() {
        this.__data__ = new Wo(), this.size = 0;
      }
      function oy(t) {
        var n = this.__data__, i = n.delete(t);
        return this.size = n.size, i;
      }
      function ry(t) {
        return this.__data__.get(t);
      }
      function iy(t) {
        return this.__data__.has(t);
      }
      function sy(t, n) {
        var i = this.__data__;
        if (i instanceof Wo) {
          var l = i.__data__;
          if (!la || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new Ho(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      oo.prototype.clear = ny, oo.prototype.delete = oy, oo.prototype.get = ry, oo.prototype.has = iy, oo.prototype.set = sy;
      function rh(t, n) {
        var i = se(t), l = !i && pi(t), d = !i && !l && Sr(t), h = !i && !l && !d && rs(t), _ = i || l || d || h, $ = _ ? kc(t.length, w$) : [], V = $.length;
        for (var M in t)
          (n || Ne.call(t, M)) && !(_ && (M == "length" || d && (M == "offset" || M == "parent") || h && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Yo(M, V))) && $.push(M);
        return $;
      }
      function ih(t) {
        var n = t.length;
        return n ? t[qc(0, n - 1)] : r;
      }
      function ay(t, n) {
        return Zl(an(t), ui(n, 0, t.length));
      }
      function ly(t) {
        return Zl(an(t));
      }
      function Nc(t, n, i) {
        (i !== r && !ro(t[n], i) || i === r && !(n in t)) && zo(t, n, i);
      }
      function fa(t, n, i) {
        var l = t[n];
        (!(Ne.call(t, n) && ro(l, i)) || i === r && !(n in t)) && zo(t, n, i);
      }
      function Ol(t, n) {
        for (var i = t.length; i--; )
          if (ro(t[i][0], n))
            return i;
        return -1;
      }
      function uy(t, n, i, l) {
        return br(t, function(d, h, _) {
          n(l, d, i(d), _);
        }), l;
      }
      function sh(t, n) {
        return t && yo(n, vt(n), t);
      }
      function cy(t, n) {
        return t && yo(n, un(n), t);
      }
      function zo(t, n, i) {
        n == "__proto__" && Tl ? Tl(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function Oc(t, n) {
        for (var i = -1, l = n.length, d = I(l), h = t == null; ++i < l; )
          d[i] = h ? r : wd(t, n[i]);
        return d;
      }
      function ui(t, n, i) {
        return t === t && (i !== r && (t = t <= i ? t : i), n !== r && (t = t >= n ? t : n)), t;
      }
      function Un(t, n, i, l, d, h) {
        var _, $ = n & y, V = n & b, M = n & N;
        if (i && (_ = d ? i(t, l, d, h) : i(t)), _ !== r)
          return _;
        if (!Je(t))
          return t;
        var D = se(t);
        if (D) {
          if (_ = Xy(t), !$)
            return an(t, _);
        } else {
          var F = Rt(t), G = F == Mo || F == Re;
          if (Sr(t))
            return Th(t, $);
          if (F == yt || F == $t || G && !d) {
            if (_ = V || G ? {} : Zh(t), !$)
              return V ? Uy(t, cy(_, t)) : Fy(t, sh(_, t));
          } else {
            if (!Fe[F])
              return d ? t : {};
            _ = Qy(t, F, $);
          }
        }
        h || (h = new oo());
        var K = h.get(t);
        if (K)
          return K;
        h.set(t, _), Vm(t) ? t.forEach(function(ne) {
          _.add(Un(ne, n, i, ne, t, h));
        }) : bm(t) && t.forEach(function(ne, pe) {
          _.set(pe, Un(ne, n, i, pe, t, h));
        });
        var te = M ? V ? nd : td : V ? un : vt, ue = D ? r : te(t);
        return Rn(ue || t, function(ne, pe) {
          ue && (pe = ne, ne = t[pe]), fa(_, pe, Un(ne, n, i, pe, t, h));
        }), _;
      }
      function dy(t) {
        var n = vt(t);
        return function(i) {
          return ah(i, t, n);
        };
      }
      function ah(t, n, i) {
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
      function lh(t, n, i) {
        if (typeof t != "function")
          throw new Pn(c);
        return ga(function() {
          t.apply(r, i);
        }, n);
      }
      function pa(t, n, i, l) {
        var d = -1, h = gl, _ = !0, $ = t.length, V = [], M = n.length;
        if (!$)
          return V;
        i && (n = Ge(n, yn(i))), l ? (h = bc, _ = !1) : n.length >= a && (h = sa, _ = !1, n = new li(n));
        e:
          for (; ++d < $; ) {
            var D = t[d], F = i == null ? D : i(D);
            if (D = l || D !== 0 ? D : 0, _ && F === F) {
              for (var G = M; G--; )
                if (n[G] === F)
                  continue e;
              V.push(D);
            } else
              h(n, F, l) || V.push(D);
          }
        return V;
      }
      var br = Nh($o), uh = Nh(Rc, !0);
      function fy(t, n) {
        var i = !0;
        return br(t, function(l, d, h) {
          return i = !!n(l, d, h), i;
        }), i;
      }
      function Bl(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var h = t[l], _ = n(h);
          if (_ != null && ($ === r ? _ === _ && !Cn(_) : i(_, $)))
            var $ = _, V = h;
        }
        return V;
      }
      function py(t, n, i, l) {
        var d = t.length;
        for (i = le(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === r || l > d ? d : le(l), l < 0 && (l += d), l = i > l ? 0 : Sm(l); i < l; )
          t[i++] = n;
        return t;
      }
      function ch(t, n) {
        var i = [];
        return br(t, function(l, d, h) {
          n(l, d, h) && i.push(l);
        }), i;
      }
      function Vt(t, n, i, l, d) {
        var h = -1, _ = t.length;
        for (i || (i = tb), d || (d = []); ++h < _; ) {
          var $ = t[h];
          n > 0 && i($) ? n > 1 ? Vt($, n - 1, i, l, d) : gr(d, $) : l || (d[d.length] = $);
        }
        return d;
      }
      var Bc = Oh(), dh = Oh(!0);
      function $o(t, n) {
        return t && Bc(t, n, vt);
      }
      function Rc(t, n) {
        return t && dh(t, n, vt);
      }
      function Rl(t, n) {
        return _r(n, function(i) {
          return jo(t[i]);
        });
      }
      function ci(t, n) {
        n = Vr(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[bo(n[i++])];
        return i && i == l ? t : r;
      }
      function fh(t, n, i) {
        var l = n(t);
        return se(t) ? l : gr(l, i(t));
      }
      function jt(t) {
        return t == null ? t === r ? Do : Mn : si && si in Pe(t) ? Zy(t) : lb(t);
      }
      function Pc(t, n) {
        return t > n;
      }
      function hy(t, n) {
        return t != null && Ne.call(t, n);
      }
      function my(t, n) {
        return t != null && n in Pe(t);
      }
      function wy(t, n, i) {
        return t >= Bt(n, i) && t < pt(n, i);
      }
      function Fc(t, n, i) {
        for (var l = i ? bc : gl, d = t[0].length, h = t.length, _ = h, $ = I(h), V = 1 / 0, M = []; _--; ) {
          var D = t[_];
          _ && n && (D = Ge(D, yn(n))), V = Bt(D.length, V), $[_] = !i && (n || d >= 120 && D.length >= 120) ? new li(_ && D) : r;
        }
        D = t[0];
        var F = -1, G = $[0];
        e:
          for (; ++F < d && M.length < V; ) {
            var K = D[F], te = n ? n(K) : K;
            if (K = i || K !== 0 ? K : 0, !(G ? sa(G, te) : l(M, te, i))) {
              for (_ = h; --_; ) {
                var ue = $[_];
                if (!(ue ? sa(ue, te) : l(t[_], te, i)))
                  continue e;
              }
              G && G.push(te), M.push(K);
            }
          }
        return M;
      }
      function vy(t, n, i, l) {
        return $o(t, function(d, h, _) {
          n(l, i(d), h, _);
        }), l;
      }
      function ha(t, n, i) {
        n = Vr(n, t), t = Qh(t, n);
        var l = t == null ? t : t[bo(Hn(n))];
        return l == null ? r : $n(l, t, i);
      }
      function ph(t) {
        return et(t) && jt(t) == $t;
      }
      function _y(t) {
        return et(t) && jt(t) == Jn;
      }
      function gy(t) {
        return et(t) && jt(t) == on;
      }
      function ma(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !et(t) && !et(n) ? t !== t && n !== n : $y(t, n, i, l, ma, d);
      }
      function $y(t, n, i, l, d, h) {
        var _ = se(t), $ = se(n), V = _ ? zt : Rt(t), M = $ ? zt : Rt(n);
        V = V == $t ? yt : V, M = M == $t ? yt : M;
        var D = V == yt, F = M == yt, G = V == M;
        if (G && Sr(t)) {
          if (!Sr(n))
            return !1;
          _ = !0, D = !1;
        }
        if (G && !D)
          return h || (h = new oo()), _ || rs(t) ? Gh(t, n, i, l, d, h) : Yy(t, n, V, i, l, d, h);
        if (!(i & O)) {
          var K = D && Ne.call(t, "__wrapped__"), te = F && Ne.call(n, "__wrapped__");
          if (K || te) {
            var ue = K ? t.value() : t, ne = te ? n.value() : n;
            return h || (h = new oo()), d(ue, ne, i, l, h);
          }
        }
        return G ? (h || (h = new oo()), jy(t, n, i, l, d, h)) : !1;
      }
      function yy(t) {
        return et(t) && Rt(t) == Mt;
      }
      function Uc(t, n, i, l) {
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
          var V = $[0], M = t[V], D = $[1];
          if (_ && $[2]) {
            if (M === r && !(V in t))
              return !1;
          } else {
            var F = new oo();
            if (l)
              var G = l(M, D, V, t, n, F);
            if (!(G === r ? ma(D, M, O | R, l, F) : G))
              return !1;
          }
        }
        return !0;
      }
      function hh(t) {
        if (!Je(t) || ob(t))
          return !1;
        var n = jo(t) ? y$ : ti;
        return n.test(fi(t));
      }
      function by(t) {
        return et(t) && jt(t) == Dn;
      }
      function Cy(t) {
        return et(t) && Rt(t) == ct;
      }
      function Vy(t) {
        return et(t) && tu(t.length) && !!He[jt(t)];
      }
      function mh(t) {
        return typeof t == "function" ? t : t == null ? cn : typeof t == "object" ? se(t) ? _h(t[0], t[1]) : vh(t) : Bm(t);
      }
      function Wc(t) {
        if (!_a(t))
          return I$(t);
        var n = [];
        for (var i in Pe(t))
          Ne.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function Ey(t) {
        if (!Je(t))
          return ab(t);
        var n = _a(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !Ne.call(t, l)) || i.push(l);
        return i;
      }
      function Hc(t, n) {
        return t < n;
      }
      function wh(t, n) {
        var i = -1, l = ln(t) ? I(t.length) : [];
        return br(t, function(d, h, _) {
          l[++i] = n(d, h, _);
        }), l;
      }
      function vh(t) {
        var n = rd(t);
        return n.length == 1 && n[0][2] ? Jh(n[0][0], n[0][1]) : function(i) {
          return i === t || Uc(i, t, n);
        };
      }
      function _h(t, n) {
        return sd(t) && Kh(n) ? Jh(bo(t), n) : function(i) {
          var l = wd(i, t);
          return l === r && l === n ? vd(i, t) : ma(n, l, O | R);
        };
      }
      function Pl(t, n, i, l, d) {
        t !== n && Bc(n, function(h, _) {
          if (d || (d = new oo()), Je(h))
            Sy(t, n, _, i, Pl, l, d);
          else {
            var $ = l ? l(ld(t, _), h, _ + "", t, n, d) : r;
            $ === r && ($ = h), Nc(t, _, $);
          }
        }, un);
      }
      function Sy(t, n, i, l, d, h, _) {
        var $ = ld(t, i), V = ld(n, i), M = _.get(V);
        if (M) {
          Nc(t, i, M);
          return;
        }
        var D = h ? h($, V, i + "", t, n, _) : r, F = D === r;
        if (F) {
          var G = se(V), K = !G && Sr(V), te = !G && !K && rs(V);
          D = V, G || K || te ? se($) ? D = $ : ot($) ? D = an($) : K ? (F = !1, D = Th(V, !0)) : te ? (F = !1, D = xh(V, !0)) : D = [] : $a(V) || pi(V) ? (D = $, pi($) ? D = Im($) : (!Je($) || jo($)) && (D = Zh(V))) : F = !1;
        }
        F && (_.set(V, D), d(D, V, l, h, _), _.delete(V)), Nc(t, i, D);
      }
      function gh(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, Yo(n, i) ? t[n] : r;
      }
      function $h(t, n, i) {
        n.length ? n = Ge(n, function(h) {
          return se(h) ? function(_) {
            return ci(_, h.length === 1 ? h[0] : h);
          } : h;
        }) : n = [cn];
        var l = -1;
        n = Ge(n, yn(ee()));
        var d = wh(t, function(h, _, $) {
          var V = Ge(n, function(M) {
            return M(h);
          });
          return { criteria: V, index: ++l, value: h };
        });
        return Q0(d, function(h, _) {
          return Py(h, _, i);
        });
      }
      function Iy(t, n) {
        return yh(t, n, function(i, l) {
          return vd(t, l);
        });
      }
      function yh(t, n, i) {
        for (var l = -1, d = n.length, h = {}; ++l < d; ) {
          var _ = n[l], $ = ci(t, _);
          i($, _) && wa(h, Vr(_, t), $);
        }
        return h;
      }
      function ky(t) {
        return function(n) {
          return ci(n, t);
        };
      }
      function zc(t, n, i, l) {
        var d = l ? X0 : Yi, h = -1, _ = n.length, $ = t;
        for (t === n && (n = an(n)), i && ($ = Ge(t, yn(i))); ++h < _; )
          for (var V = 0, M = n[h], D = i ? i(M) : M; (V = d($, D, V, l)) > -1; )
            $ !== t && Al.call($, V, 1), Al.call(t, V, 1);
        return t;
      }
      function bh(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== h) {
            var h = d;
            Yo(d) ? Al.call(t, d, 1) : jc(t, d);
          }
        }
        return t;
      }
      function qc(t, n) {
        return t + Ll(nh() * (n - t + 1));
      }
      function Ay(t, n, i, l) {
        for (var d = -1, h = pt(xl((n - t) / (i || 1)), 0), _ = I(h); h--; )
          _[l ? h : ++d] = t, t += i;
        return _;
      }
      function Gc(t, n) {
        var i = "";
        if (!t || n < 1 || n > qe)
          return i;
        do
          n % 2 && (i += t), n = Ll(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function de(t, n) {
        return ud(Xh(t, n, cn), t + "");
      }
      function Ty(t) {
        return ih(is(t));
      }
      function xy(t, n) {
        var i = is(t);
        return Zl(i, ui(n, 0, i.length));
      }
      function wa(t, n, i, l) {
        if (!Je(t))
          return t;
        n = Vr(n, t);
        for (var d = -1, h = n.length, _ = h - 1, $ = t; $ != null && ++d < h; ) {
          var V = bo(n[d]), M = i;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != _) {
            var D = $[V];
            M = l ? l(D, V, $) : r, M === r && (M = Je(D) ? D : Yo(n[d + 1]) ? [] : {});
          }
          fa($, V, M), $ = $[V];
        }
        return t;
      }
      var Ch = Ml ? function(t, n) {
        return Ml.set(t, n), t;
      } : cn, Ly = Tl ? function(t, n) {
        return Tl(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: gd(n),
          writable: !0
        });
      } : cn;
      function My(t) {
        return Zl(is(t));
      }
      function Wn(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var h = I(d); ++l < d; )
          h[l] = t[l + n];
        return h;
      }
      function Dy(t, n) {
        var i;
        return br(t, function(l, d, h) {
          return i = n(l, d, h), !i;
        }), !!i;
      }
      function Fl(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= Xs) {
          for (; l < d; ) {
            var h = l + d >>> 1, _ = t[h];
            _ !== null && !Cn(_) && (i ? _ <= n : _ < n) ? l = h + 1 : d = h;
          }
          return d;
        }
        return Yc(t, n, cn, i);
      }
      function Yc(t, n, i, l) {
        var d = 0, h = t == null ? 0 : t.length;
        if (h === 0)
          return 0;
        n = i(n);
        for (var _ = n !== n, $ = n === null, V = Cn(n), M = n === r; d < h; ) {
          var D = Ll((d + h) / 2), F = i(t[D]), G = F !== r, K = F === null, te = F === F, ue = Cn(F);
          if (_)
            var ne = l || te;
          else
            M ? ne = te && (l || G) : $ ? ne = te && G && (l || !K) : V ? ne = te && G && !K && (l || !ue) : K || ue ? ne = !1 : ne = l ? F <= n : F < n;
          ne ? d = D + 1 : h = D;
        }
        return Bt(h, Js);
      }
      function Vh(t, n) {
        for (var i = -1, l = t.length, d = 0, h = []; ++i < l; ) {
          var _ = t[i], $ = n ? n(_) : _;
          if (!i || !ro($, V)) {
            var V = $;
            h[d++] = _ === 0 ? 0 : _;
          }
        }
        return h;
      }
      function Eh(t) {
        return typeof t == "number" ? t : Cn(t) ? Lo : +t;
      }
      function bn(t) {
        if (typeof t == "string")
          return t;
        if (se(t))
          return Ge(t, bn) + "";
        if (Cn(t))
          return oh ? oh.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Qe ? "-0" : n;
      }
      function Cr(t, n, i) {
        var l = -1, d = gl, h = t.length, _ = !0, $ = [], V = $;
        if (i)
          _ = !1, d = bc;
        else if (h >= a) {
          var M = n ? null : qy(t);
          if (M)
            return yl(M);
          _ = !1, d = sa, V = new li();
        } else
          V = n ? [] : $;
        e:
          for (; ++l < h; ) {
            var D = t[l], F = n ? n(D) : D;
            if (D = i || D !== 0 ? D : 0, _ && F === F) {
              for (var G = V.length; G--; )
                if (V[G] === F)
                  continue e;
              n && V.push(F), $.push(D);
            } else
              d(V, F, i) || (V !== $ && V.push(F), $.push(D));
          }
        return $;
      }
      function jc(t, n) {
        return n = Vr(n, t), t = Qh(t, n), t == null || delete t[bo(Hn(n))];
      }
      function Sh(t, n, i, l) {
        return wa(t, n, i(ci(t, n)), l);
      }
      function Ul(t, n, i, l) {
        for (var d = t.length, h = l ? d : -1; (l ? h-- : ++h < d) && n(t[h], h, t); )
          ;
        return i ? Wn(t, l ? 0 : h, l ? h + 1 : d) : Wn(t, l ? h + 1 : 0, l ? d : h);
      }
      function Ih(t, n) {
        var i = t;
        return i instanceof me && (i = i.value()), Cc(n, function(l, d) {
          return d.func.apply(d.thisArg, gr([l], d.args));
        }, i);
      }
      function Zc(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? Cr(t[0]) : [];
        for (var d = -1, h = I(l); ++d < l; )
          for (var _ = t[d], $ = -1; ++$ < l; )
            $ != d && (h[d] = pa(h[d] || _, t[$], n, i));
        return Cr(Vt(h, 1), n, i);
      }
      function kh(t, n, i) {
        for (var l = -1, d = t.length, h = n.length, _ = {}; ++l < d; ) {
          var $ = l < h ? n[l] : r;
          i(_, t[l], $);
        }
        return _;
      }
      function Kc(t) {
        return ot(t) ? t : [];
      }
      function Jc(t) {
        return typeof t == "function" ? t : cn;
      }
      function Vr(t, n) {
        return se(t) ? t : sd(t, n) ? [t] : om(Ae(t));
      }
      var Ny = de;
      function Er(t, n, i) {
        var l = t.length;
        return i = i === r ? l : i, !n && i >= l ? t : Wn(t, n, i);
      }
      var Ah = b$ || function(t) {
        return Ct.clearTimeout(t);
      };
      function Th(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Jp ? Jp(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function Xc(t) {
        var n = new t.constructor(t.byteLength);
        return new Il(n).set(new Il(t)), n;
      }
      function Oy(t, n) {
        var i = n ? Xc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function By(t) {
        var n = new t.constructor(t.source, Qr.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function Ry(t) {
        return da ? Pe(da.call(t)) : {};
      }
      function xh(t, n) {
        var i = n ? Xc(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function Lh(t, n) {
        if (t !== n) {
          var i = t !== r, l = t === null, d = t === t, h = Cn(t), _ = n !== r, $ = n === null, V = n === n, M = Cn(n);
          if (!$ && !M && !h && t > n || h && _ && V && !$ && !M || l && _ && V || !i && V || !d)
            return 1;
          if (!l && !h && !M && t < n || M && i && d && !l && !h || $ && i && d || !_ && d || !V)
            return -1;
        }
        return 0;
      }
      function Py(t, n, i) {
        for (var l = -1, d = t.criteria, h = n.criteria, _ = d.length, $ = i.length; ++l < _; ) {
          var V = Lh(d[l], h[l]);
          if (V) {
            if (l >= $)
              return V;
            var M = i[l];
            return V * (M == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Mh(t, n, i, l) {
        for (var d = -1, h = t.length, _ = i.length, $ = -1, V = n.length, M = pt(h - _, 0), D = I(V + M), F = !l; ++$ < V; )
          D[$] = n[$];
        for (; ++d < _; )
          (F || d < h) && (D[i[d]] = t[d]);
        for (; M--; )
          D[$++] = t[d++];
        return D;
      }
      function Dh(t, n, i, l) {
        for (var d = -1, h = t.length, _ = -1, $ = i.length, V = -1, M = n.length, D = pt(h - $, 0), F = I(D + M), G = !l; ++d < D; )
          F[d] = t[d];
        for (var K = d; ++V < M; )
          F[K + V] = n[V];
        for (; ++_ < $; )
          (G || d < h) && (F[K + i[_]] = t[d++]);
        return F;
      }
      function an(t, n) {
        var i = -1, l = t.length;
        for (n || (n = I(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function yo(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var h = -1, _ = n.length; ++h < _; ) {
          var $ = n[h], V = l ? l(i[$], t[$], $, i, t) : r;
          V === r && (V = t[$]), d ? zo(i, $, V) : fa(i, $, V);
        }
        return i;
      }
      function Fy(t, n) {
        return yo(t, id(t), n);
      }
      function Uy(t, n) {
        return yo(t, Yh(t), n);
      }
      function Wl(t, n) {
        return function(i, l) {
          var d = se(i) ? G0 : uy, h = n ? n() : {};
          return d(i, t, ee(l, 2), h);
        };
      }
      function ts(t) {
        return de(function(n, i) {
          var l = -1, d = i.length, h = d > 1 ? i[d - 1] : r, _ = d > 2 ? i[2] : r;
          for (h = t.length > 3 && typeof h == "function" ? (d--, h) : r, _ && Zt(i[0], i[1], _) && (h = d < 3 ? r : h, d = 1), n = Pe(n); ++l < d; ) {
            var $ = i[l];
            $ && t(n, $, l, h);
          }
          return n;
        });
      }
      function Nh(t, n) {
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
      function Oh(t) {
        return function(n, i, l) {
          for (var d = -1, h = Pe(n), _ = l(n), $ = _.length; $--; ) {
            var V = _[t ? $ : ++d];
            if (i(h[V], V, h) === !1)
              break;
          }
          return n;
        };
      }
      function Wy(t, n, i) {
        var l = n & B, d = va(t);
        function h() {
          var _ = this && this !== Ct && this instanceof h ? d : t;
          return _.apply(l ? i : this, arguments);
        }
        return h;
      }
      function Bh(t) {
        return function(n) {
          n = Ae(n);
          var i = ji(n) ? no(n) : r, l = i ? i[0] : n.charAt(0), d = i ? Er(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function ns(t) {
        return function(n) {
          return Cc(Nm(Dm(n).replace(L0, "")), t, "");
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
          var i = es(t.prototype), l = t.apply(i, n);
          return Je(l) ? l : i;
        };
      }
      function Hy(t, n, i) {
        var l = va(t);
        function d() {
          for (var h = arguments.length, _ = I(h), $ = h, V = os(d); $--; )
            _[$] = arguments[$];
          var M = h < 3 && _[0] !== V && _[h - 1] !== V ? [] : $r(_, V);
          if (h -= M.length, h < i)
            return Wh(
              t,
              n,
              Hl,
              d.placeholder,
              r,
              _,
              M,
              r,
              r,
              i - h
            );
          var D = this && this !== Ct && this instanceof d ? l : t;
          return $n(D, this, _);
        }
        return d;
      }
      function Rh(t) {
        return function(n, i, l) {
          var d = Pe(n);
          if (!ln(n)) {
            var h = ee(i, 3);
            n = vt(n), i = function($) {
              return h(d[$], $, d);
            };
          }
          var _ = t(n, i, l);
          return _ > -1 ? d[h ? n[_] : _] : r;
        };
      }
      function Ph(t) {
        return Go(function(n) {
          var i = n.length, l = i, d = Fn.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var h = n[l];
            if (typeof h != "function")
              throw new Pn(c);
            if (d && !_ && Yl(h) == "wrapper")
              var _ = new Fn([], !0);
          }
          for (l = _ ? l : i; ++l < i; ) {
            h = n[l];
            var $ = Yl(h), V = $ == "wrapper" ? od(h) : r;
            V && ad(V[0]) && V[1] == (W | T | k | Z) && !V[4].length && V[9] == 1 ? _ = _[Yl(V[0])].apply(_, V[3]) : _ = h.length == 1 && ad(h) ? _[$]() : _.thru(h);
          }
          return function() {
            var M = arguments, D = M[0];
            if (_ && M.length == 1 && se(D))
              return _.plant(D).value();
            for (var F = 0, G = i ? n[F].apply(this, M) : D; ++F < i; )
              G = n[F].call(this, G);
            return G;
          };
        });
      }
      function Hl(t, n, i, l, d, h, _, $, V, M) {
        var D = n & W, F = n & B, G = n & S, K = n & (T | P), te = n & Le, ue = G ? r : va(t);
        function ne() {
          for (var pe = arguments.length, _e = I(pe), Vn = pe; Vn--; )
            _e[Vn] = arguments[Vn];
          if (K)
            var Kt = os(ne), En = t$(_e, Kt);
          if (l && (_e = Mh(_e, l, d, K)), h && (_e = Dh(_e, h, _, K)), pe -= En, K && pe < M) {
            var rt = $r(_e, Kt);
            return Wh(
              t,
              n,
              Hl,
              ne.placeholder,
              i,
              _e,
              rt,
              $,
              V,
              M - pe
            );
          }
          var io = F ? i : this, Ko = G ? io[t] : t;
          return pe = _e.length, $ ? _e = ub(_e, $) : te && pe > 1 && _e.reverse(), D && V < pe && (_e.length = V), this && this !== Ct && this instanceof ne && (Ko = ue || va(Ko)), Ko.apply(io, _e);
        }
        return ne;
      }
      function Fh(t, n) {
        return function(i, l) {
          return vy(i, t, n(l), {});
        };
      }
      function zl(t, n) {
        return function(i, l) {
          var d;
          if (i === r && l === r)
            return n;
          if (i !== r && (d = i), l !== r) {
            if (d === r)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = bn(i), l = bn(l)) : (i = Eh(i), l = Eh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function Qc(t) {
        return Go(function(n) {
          return n = Ge(n, yn(ee())), de(function(i) {
            var l = this;
            return t(n, function(d) {
              return $n(d, l, i);
            });
          });
        });
      }
      function ql(t, n) {
        n = n === r ? " " : bn(n);
        var i = n.length;
        if (i < 2)
          return i ? Gc(n, t) : n;
        var l = Gc(n, xl(t / Zi(n)));
        return ji(n) ? Er(no(l), 0, t).join("") : l.slice(0, t);
      }
      function zy(t, n, i, l) {
        var d = n & B, h = va(t);
        function _() {
          for (var $ = -1, V = arguments.length, M = -1, D = l.length, F = I(D + V), G = this && this !== Ct && this instanceof _ ? h : t; ++M < D; )
            F[M] = l[M];
          for (; V--; )
            F[M++] = arguments[++$];
          return $n(G, d ? i : this, F);
        }
        return _;
      }
      function Uh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && Zt(n, i, l) && (i = l = r), n = Zo(n), i === r ? (i = n, n = 0) : i = Zo(i), l = l === r ? n < i ? 1 : -1 : Zo(l), Ay(n, i, l, t);
        };
      }
      function Gl(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = zn(n), i = zn(i)), t(n, i);
        };
      }
      function Wh(t, n, i, l, d, h, _, $, V, M) {
        var D = n & T, F = D ? _ : r, G = D ? r : _, K = D ? h : r, te = D ? r : h;
        n |= D ? k : U, n &= ~(D ? U : k), n & A || (n &= ~(B | S));
        var ue = [
          t,
          n,
          d,
          K,
          F,
          te,
          G,
          $,
          V,
          M
        ], ne = i.apply(r, ue);
        return ad(t) && em(ne, ue), ne.placeholder = l, tm(ne, t, n);
      }
      function ed(t) {
        var n = ft[t];
        return function(i, l) {
          if (i = zn(i), l = l == null ? 0 : Bt(le(l), 292), l && th(i)) {
            var d = (Ae(i) + "e").split("e"), h = n(d[0] + "e" + (+d[1] + l));
            return d = (Ae(h) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var qy = Xi && 1 / yl(new Xi([, -0]))[1] == Qe ? function(t) {
        return new Xi(t);
      } : bd;
      function Hh(t) {
        return function(n) {
          var i = Rt(n);
          return i == Mt ? Tc(n) : i == ct ? l$(n) : e$(n, t(n));
        };
      }
      function qo(t, n, i, l, d, h, _, $) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new Pn(c);
        var M = l ? l.length : 0;
        if (M || (n &= ~(k | U), l = d = r), _ = _ === r ? _ : pt(le(_), 0), $ = $ === r ? $ : le($), M -= d ? d.length : 0, n & U) {
          var D = l, F = d;
          l = d = r;
        }
        var G = V ? r : od(t), K = [
          t,
          n,
          i,
          l,
          d,
          D,
          F,
          h,
          _,
          $
        ];
        if (G && sb(K, G), t = K[0], n = K[1], i = K[2], l = K[3], d = K[4], $ = K[9] = K[9] === r ? V ? 0 : t.length : pt(K[9] - M, 0), !$ && n & (T | P) && (n &= ~(T | P)), !n || n == B)
          var te = Wy(t, n, i);
        else
          n == T || n == P ? te = Hy(t, n, $) : (n == k || n == (B | k)) && !d.length ? te = zy(t, n, i, l) : te = Hl.apply(r, K);
        var ue = G ? Ch : em;
        return tm(ue(te, K), t, n);
      }
      function zh(t, n, i, l) {
        return t === r || ro(t, Ji[i]) && !Ne.call(l, i) ? n : t;
      }
      function qh(t, n, i, l, d, h) {
        return Je(t) && Je(n) && (h.set(n, t), Pl(t, n, r, qh, h), h.delete(n)), t;
      }
      function Gy(t) {
        return $a(t) ? r : t;
      }
      function Gh(t, n, i, l, d, h) {
        var _ = i & O, $ = t.length, V = n.length;
        if ($ != V && !(_ && V > $))
          return !1;
        var M = h.get(t), D = h.get(n);
        if (M && D)
          return M == n && D == t;
        var F = -1, G = !0, K = i & R ? new li() : r;
        for (h.set(t, n), h.set(n, t); ++F < $; ) {
          var te = t[F], ue = n[F];
          if (l)
            var ne = _ ? l(ue, te, F, n, t, h) : l(te, ue, F, t, n, h);
          if (ne !== r) {
            if (ne)
              continue;
            G = !1;
            break;
          }
          if (K) {
            if (!Vc(n, function(pe, _e) {
              if (!sa(K, _e) && (te === pe || d(te, pe, i, l, h)))
                return K.push(_e);
            })) {
              G = !1;
              break;
            }
          } else if (!(te === ue || d(te, ue, i, l, h))) {
            G = !1;
            break;
          }
        }
        return h.delete(t), h.delete(n), G;
      }
      function Yy(t, n, i, l, d, h, _) {
        switch (i) {
          case _n:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Jn:
            return !(t.byteLength != n.byteLength || !h(new Il(t), new Il(n)));
          case vn:
          case on:
          case be:
            return ro(+t, +n);
          case Me:
            return t.name == n.name && t.message == n.message;
          case Dn:
          case mo:
            return t == n + "";
          case Mt:
            var $ = Tc;
          case ct:
            var V = l & O;
            if ($ || ($ = yl), t.size != n.size && !V)
              return !1;
            var M = _.get(t);
            if (M)
              return M == n;
            l |= R, _.set(t, n);
            var D = Gh($(t), $(n), l, d, h, _);
            return _.delete(t), D;
          case dt:
            if (da)
              return da.call(t) == da.call(n);
        }
        return !1;
      }
      function jy(t, n, i, l, d, h) {
        var _ = i & O, $ = td(t), V = $.length, M = td(n), D = M.length;
        if (V != D && !_)
          return !1;
        for (var F = V; F--; ) {
          var G = $[F];
          if (!(_ ? G in n : Ne.call(n, G)))
            return !1;
        }
        var K = h.get(t), te = h.get(n);
        if (K && te)
          return K == n && te == t;
        var ue = !0;
        h.set(t, n), h.set(n, t);
        for (var ne = _; ++F < V; ) {
          G = $[F];
          var pe = t[G], _e = n[G];
          if (l)
            var Vn = _ ? l(_e, pe, G, n, t, h) : l(pe, _e, G, t, n, h);
          if (!(Vn === r ? pe === _e || d(pe, _e, i, l, h) : Vn)) {
            ue = !1;
            break;
          }
          ne || (ne = G == "constructor");
        }
        if (ue && !ne) {
          var Kt = t.constructor, En = n.constructor;
          Kt != En && "constructor" in t && "constructor" in n && !(typeof Kt == "function" && Kt instanceof Kt && typeof En == "function" && En instanceof En) && (ue = !1);
        }
        return h.delete(t), h.delete(n), ue;
      }
      function Go(t) {
        return ud(Xh(t, r, am), t + "");
      }
      function td(t) {
        return fh(t, vt, id);
      }
      function nd(t) {
        return fh(t, un, Yh);
      }
      var od = Ml ? function(t) {
        return Ml.get(t);
      } : bd;
      function Yl(t) {
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
      function ee() {
        var t = p.iteratee || $d;
        return t = t === $d ? mh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function jl(t, n) {
        var i = t.__data__;
        return nb(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function rd(t) {
        for (var n = vt(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Kh(d)];
        }
        return n;
      }
      function di(t, n) {
        var i = i$(t, n);
        return hh(i) ? i : r;
      }
      function Zy(t) {
        var n = Ne.call(t, si), i = t[si];
        try {
          t[si] = r;
          var l = !0;
        } catch {
        }
        var d = El.call(t);
        return l && (n ? t[si] = i : delete t[si]), d;
      }
      var id = Lc ? function(t) {
        return t == null ? [] : (t = Pe(t), _r(Lc(t), function(n) {
          return Qp.call(t, n);
        }));
      } : Cd, Yh = Lc ? function(t) {
        for (var n = []; t; )
          gr(n, id(t)), t = kl(t);
        return n;
      } : Cd, Rt = jt;
      (Mc && Rt(new Mc(new ArrayBuffer(1))) != _n || la && Rt(new la()) != Mt || Dc && Rt(Dc.resolve()) != Dt || Xi && Rt(new Xi()) != ct || ua && Rt(new ua()) != qt) && (Rt = function(t) {
        var n = jt(t), i = n == yt ? t.constructor : r, l = i ? fi(i) : "";
        if (l)
          switch (l) {
            case x$:
              return _n;
            case L$:
              return Mt;
            case M$:
              return Dt;
            case D$:
              return ct;
            case N$:
              return qt;
          }
        return n;
      });
      function Ky(t, n, i) {
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
              n = Bt(n, t + _);
              break;
            case "takeRight":
              t = pt(t, n - _);
              break;
          }
        }
        return { start: t, end: n };
      }
      function Jy(t) {
        var n = t.match(Fi);
        return n ? n[1].split(oe) : [];
      }
      function jh(t, n, i) {
        n = Vr(n, t);
        for (var l = -1, d = n.length, h = !1; ++l < d; ) {
          var _ = bo(n[l]);
          if (!(h = t != null && i(t, _)))
            break;
          t = t[_];
        }
        return h || ++l != d ? h : (d = t == null ? 0 : t.length, !!d && tu(d) && Yo(_, d) && (se(t) || pi(t)));
      }
      function Xy(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && Ne.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function Zh(t) {
        return typeof t.constructor == "function" && !_a(t) ? es(kl(t)) : {};
      }
      function Qy(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case Jn:
            return Xc(t);
          case vn:
          case on:
            return new l(+t);
          case _n:
            return Oy(t, i);
          case wo:
          case gn:
          case Xn:
          case Qn:
          case No:
          case Oo:
          case Bo:
          case vo:
          case _o:
            return xh(t, i);
          case Mt:
            return new l();
          case be:
          case mo:
            return new l(t);
          case Dn:
            return By(t);
          case ct:
            return new l();
          case dt:
            return Ry(t);
        }
      }
      function eb(t, n) {
        var i = n.length;
        if (!i)
          return t;
        var l = i - 1;
        return n[l] = (i > 1 ? "& " : "") + n[l], n = n.join(i > 2 ? ", " : " "), t.replace(dr, `{
/* [wrapped with ` + n + `] */
`);
      }
      function tb(t) {
        return se(t) || pi(t) || !!(eh && t && t[eh]);
      }
      function Yo(t, n) {
        var i = typeof t;
        return n = n == null ? qe : n, !!n && (i == "number" || i != "symbol" && Ui.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function Zt(t, n, i) {
        if (!Je(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? ln(i) && Yo(n, i.length) : l == "string" && n in i) ? ro(i[n], t) : !1;
      }
      function sd(t, n) {
        if (se(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Cn(t) ? !0 : lr.test(t) || !to.test(t) || n != null && t in Pe(n);
      }
      function nb(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function ad(t) {
        var n = Yl(t), i = p[n];
        if (typeof i != "function" || !(n in me.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = od(i);
        return !!l && t === l[0];
      }
      function ob(t) {
        return !!Kp && Kp in t;
      }
      var rb = Cl ? jo : Vd;
      function _a(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || Ji;
        return t === i;
      }
      function Kh(t) {
        return t === t && !Je(t);
      }
      function Jh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== r || t in Pe(i));
        };
      }
      function ib(t) {
        var n = Ql(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function sb(t, n) {
        var i = t[1], l = n[1], d = i | l, h = d < (B | S | W), _ = l == W && i == T || l == W && i == Z && t[7].length <= n[8] || l == (W | Z) && n[7].length <= n[8] && i == T;
        if (!(h || _))
          return t;
        l & B && (t[2] = n[2], d |= i & B ? 0 : A);
        var $ = n[3];
        if ($) {
          var V = t[3];
          t[3] = V ? Mh(V, $, n[4]) : $, t[4] = V ? $r(t[3], g) : n[4];
        }
        return $ = n[5], $ && (V = t[5], t[5] = V ? Dh(V, $, n[6]) : $, t[6] = V ? $r(t[5], g) : n[6]), $ = n[7], $ && (t[7] = $), l & W && (t[8] = t[8] == null ? n[8] : Bt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function ab(t) {
        var n = [];
        if (t != null)
          for (var i in Pe(t))
            n.push(i);
        return n;
      }
      function lb(t) {
        return El.call(t);
      }
      function Xh(t, n, i) {
        return n = pt(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, h = pt(l.length - n, 0), _ = I(h); ++d < h; )
            _[d] = l[n + d];
          d = -1;
          for (var $ = I(n + 1); ++d < n; )
            $[d] = l[d];
          return $[n] = i(_), $n(t, this, $);
        };
      }
      function Qh(t, n) {
        return n.length < 2 ? t : ci(t, Wn(n, 0, -1));
      }
      function ub(t, n) {
        for (var i = t.length, l = Bt(n.length, i), d = an(t); l--; ) {
          var h = n[l];
          t[l] = Yo(h, i) ? d[h] : r;
        }
        return t;
      }
      function ld(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var em = nm(Ch), ga = V$ || function(t, n) {
        return Ct.setTimeout(t, n);
      }, ud = nm(Ly);
      function tm(t, n, i) {
        var l = n + "";
        return ud(t, eb(l, cb(Jy(l), i)));
      }
      function nm(t) {
        var n = 0, i = 0;
        return function() {
          var l = k$(), d = We - (l - i);
          if (i = l, d > 0) {
            if (++n >= Ee)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Zl(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++i < n; ) {
          var h = qc(i, d), _ = t[h];
          t[h] = t[i], t[i] = _;
        }
        return t.length = n, t;
      }
      var om = ib(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(ur, function(i, l, d, h) {
          n.push(d ? h.replace(Q, "$1") : l || i);
        }), n;
      });
      function bo(t) {
        if (typeof t == "string" || Cn(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Qe ? "-0" : n;
      }
      function fi(t) {
        if (t != null) {
          try {
            return Vl.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function cb(t, n) {
        return Rn(Pi, function(i) {
          var l = "_." + i[0];
          n & i[1] && !gl(t, l) && t.push(l);
        }), t.sort();
      }
      function rm(t) {
        if (t instanceof me)
          return t.clone();
        var n = new Fn(t.__wrapped__, t.__chain__);
        return n.__actions__ = an(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function db(t, n, i) {
        (i ? Zt(t, n, i) : n === r) ? n = 1 : n = pt(le(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, h = 0, _ = I(xl(l / n)); d < l; )
          _[h++] = Wn(t, d, d += n);
        return _;
      }
      function fb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = 0, d = []; ++n < i; ) {
          var h = t[n];
          h && (d[l++] = h);
        }
        return d;
      }
      function pb() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = I(t - 1), i = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return gr(se(i) ? an(i) : [i], Vt(n, 1));
      }
      var hb = de(function(t, n) {
        return ot(t) ? pa(t, Vt(n, 1, ot, !0)) : [];
      }), mb = de(function(t, n) {
        var i = Hn(n);
        return ot(i) && (i = r), ot(t) ? pa(t, Vt(n, 1, ot, !0), ee(i, 2)) : [];
      }), wb = de(function(t, n) {
        var i = Hn(n);
        return ot(i) && (i = r), ot(t) ? pa(t, Vt(n, 1, ot, !0), r, i) : [];
      });
      function vb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), Wn(t, n < 0 ? 0 : n, l)) : [];
      }
      function _b(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), n = l - n, Wn(t, 0, n < 0 ? 0 : n)) : [];
      }
      function gb(t, n) {
        return t && t.length ? Ul(t, ee(n, 3), !0, !0) : [];
      }
      function $b(t, n) {
        return t && t.length ? Ul(t, ee(n, 3), !0) : [];
      }
      function yb(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && Zt(t, n, i) && (i = 0, l = d), py(t, n, i, l)) : [];
      }
      function im(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = pt(l + d, 0)), $l(t, ee(n, 3), d);
      }
      function sm(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== r && (d = le(i), d = i < 0 ? pt(l + d, 0) : Bt(d, l - 1)), $l(t, ee(n, 3), d, !0);
      }
      function am(t) {
        var n = t == null ? 0 : t.length;
        return n ? Vt(t, 1) : [];
      }
      function bb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Vt(t, Qe) : [];
      }
      function Cb(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === r ? 1 : le(n), Vt(t, n)) : [];
      }
      function Vb(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function lm(t) {
        return t && t.length ? t[0] : r;
      }
      function Eb(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : le(i);
        return d < 0 && (d = pt(l + d, 0)), Yi(t, n, d);
      }
      function Sb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Wn(t, 0, -1) : [];
      }
      var Ib = de(function(t) {
        var n = Ge(t, Kc);
        return n.length && n[0] === t[0] ? Fc(n) : [];
      }), kb = de(function(t) {
        var n = Hn(t), i = Ge(t, Kc);
        return n === Hn(i) ? n = r : i.pop(), i.length && i[0] === t[0] ? Fc(i, ee(n, 2)) : [];
      }), Ab = de(function(t) {
        var n = Hn(t), i = Ge(t, Kc);
        return n = typeof n == "function" ? n : r, n && i.pop(), i.length && i[0] === t[0] ? Fc(i, r, n) : [];
      });
      function Tb(t, n) {
        return t == null ? "" : S$.call(t, n);
      }
      function Hn(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function xb(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== r && (d = le(i), d = d < 0 ? pt(l + d, 0) : Bt(d, l - 1)), n === n ? c$(t, n, d) : $l(t, Wp, d, !0);
      }
      function Lb(t, n) {
        return t && t.length ? gh(t, le(n)) : r;
      }
      var Mb = de(um);
      function um(t, n) {
        return t && t.length && n && n.length ? zc(t, n) : t;
      }
      function Db(t, n, i) {
        return t && t.length && n && n.length ? zc(t, n, ee(i, 2)) : t;
      }
      function Nb(t, n, i) {
        return t && t.length && n && n.length ? zc(t, n, r, i) : t;
      }
      var Ob = Go(function(t, n) {
        var i = t == null ? 0 : t.length, l = Oc(t, n);
        return bh(t, Ge(n, function(d) {
          return Yo(d, i) ? +d : d;
        }).sort(Lh)), l;
      });
      function Bb(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], h = t.length;
        for (n = ee(n, 3); ++l < h; ) {
          var _ = t[l];
          n(_, l, t) && (i.push(_), d.push(l));
        }
        return bh(t, d), i;
      }
      function cd(t) {
        return t == null ? t : T$.call(t);
      }
      function Rb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && Zt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : le(n), i = i === r ? l : le(i)), Wn(t, n, i)) : [];
      }
      function Pb(t, n) {
        return Fl(t, n);
      }
      function Fb(t, n, i) {
        return Yc(t, n, ee(i, 2));
      }
      function Ub(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Fl(t, n);
          if (l < i && ro(t[l], n))
            return l;
        }
        return -1;
      }
      function Wb(t, n) {
        return Fl(t, n, !0);
      }
      function Hb(t, n, i) {
        return Yc(t, n, ee(i, 2), !0);
      }
      function zb(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Fl(t, n, !0) - 1;
          if (ro(t[l], n))
            return l;
        }
        return -1;
      }
      function qb(t) {
        return t && t.length ? Vh(t) : [];
      }
      function Gb(t, n) {
        return t && t.length ? Vh(t, ee(n, 2)) : [];
      }
      function Yb(t) {
        var n = t == null ? 0 : t.length;
        return n ? Wn(t, 1, n) : [];
      }
      function jb(t, n, i) {
        return t && t.length ? (n = i || n === r ? 1 : le(n), Wn(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Zb(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === r ? 1 : le(n), n = l - n, Wn(t, n < 0 ? 0 : n, l)) : [];
      }
      function Kb(t, n) {
        return t && t.length ? Ul(t, ee(n, 3), !1, !0) : [];
      }
      function Jb(t, n) {
        return t && t.length ? Ul(t, ee(n, 3)) : [];
      }
      var Xb = de(function(t) {
        return Cr(Vt(t, 1, ot, !0));
      }), Qb = de(function(t) {
        var n = Hn(t);
        return ot(n) && (n = r), Cr(Vt(t, 1, ot, !0), ee(n, 2));
      }), eC = de(function(t) {
        var n = Hn(t);
        return n = typeof n == "function" ? n : r, Cr(Vt(t, 1, ot, !0), r, n);
      });
      function tC(t) {
        return t && t.length ? Cr(t) : [];
      }
      function nC(t, n) {
        return t && t.length ? Cr(t, ee(n, 2)) : [];
      }
      function oC(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? Cr(t, r, n) : [];
      }
      function dd(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = _r(t, function(i) {
          if (ot(i))
            return n = pt(i.length, n), !0;
        }), kc(n, function(i) {
          return Ge(t, Ec(i));
        });
      }
      function cm(t, n) {
        if (!(t && t.length))
          return [];
        var i = dd(t);
        return n == null ? i : Ge(i, function(l) {
          return $n(n, r, l);
        });
      }
      var rC = de(function(t, n) {
        return ot(t) ? pa(t, n) : [];
      }), iC = de(function(t) {
        return Zc(_r(t, ot));
      }), sC = de(function(t) {
        var n = Hn(t);
        return ot(n) && (n = r), Zc(_r(t, ot), ee(n, 2));
      }), aC = de(function(t) {
        var n = Hn(t);
        return n = typeof n == "function" ? n : r, Zc(_r(t, ot), r, n);
      }), lC = de(dd);
      function uC(t, n) {
        return kh(t || [], n || [], fa);
      }
      function cC(t, n) {
        return kh(t || [], n || [], wa);
      }
      var dC = de(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : r;
        return i = typeof i == "function" ? (t.pop(), i) : r, cm(t, i);
      });
      function dm(t) {
        var n = p(t);
        return n.__chain__ = !0, n;
      }
      function fC(t, n) {
        return n(t), t;
      }
      function Kl(t, n) {
        return n(t);
      }
      var pC = Go(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(h) {
          return Oc(h, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof me) || !Yo(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: Kl,
          args: [d],
          thisArg: r
        }), new Fn(l, this.__chain__).thru(function(h) {
          return n && !h.length && h.push(r), h;
        }));
      });
      function hC() {
        return dm(this);
      }
      function mC() {
        return new Fn(this.value(), this.__chain__);
      }
      function wC() {
        this.__values__ === r && (this.__values__ = Em(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function vC() {
        return this;
      }
      function _C(t) {
        for (var n, i = this; i instanceof Nl; ) {
          var l = rm(i);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function gC() {
        var t = this.__wrapped__;
        if (t instanceof me) {
          var n = t;
          return this.__actions__.length && (n = new me(this)), n = n.reverse(), n.__actions__.push({
            func: Kl,
            args: [cd],
            thisArg: r
          }), new Fn(n, this.__chain__);
        }
        return this.thru(cd);
      }
      function $C() {
        return Ih(this.__wrapped__, this.__actions__);
      }
      var yC = Wl(function(t, n, i) {
        Ne.call(t, i) ? ++t[i] : zo(t, i, 1);
      });
      function bC(t, n, i) {
        var l = se(t) ? Fp : fy;
        return i && Zt(t, n, i) && (n = r), l(t, ee(n, 3));
      }
      function CC(t, n) {
        var i = se(t) ? _r : ch;
        return i(t, ee(n, 3));
      }
      var VC = Rh(im), EC = Rh(sm);
      function SC(t, n) {
        return Vt(Jl(t, n), 1);
      }
      function IC(t, n) {
        return Vt(Jl(t, n), Qe);
      }
      function kC(t, n, i) {
        return i = i === r ? 1 : le(i), Vt(Jl(t, n), i);
      }
      function fm(t, n) {
        var i = se(t) ? Rn : br;
        return i(t, ee(n, 3));
      }
      function pm(t, n) {
        var i = se(t) ? Y0 : uh;
        return i(t, ee(n, 3));
      }
      var AC = Wl(function(t, n, i) {
        Ne.call(t, i) ? t[i].push(n) : zo(t, i, [n]);
      });
      function TC(t, n, i, l) {
        t = ln(t) ? t : is(t), i = i && !l ? le(i) : 0;
        var d = t.length;
        return i < 0 && (i = pt(d + i, 0)), nu(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && Yi(t, n, i) > -1;
      }
      var xC = de(function(t, n, i) {
        var l = -1, d = typeof n == "function", h = ln(t) ? I(t.length) : [];
        return br(t, function(_) {
          h[++l] = d ? $n(n, _, i) : ha(_, n, i);
        }), h;
      }), LC = Wl(function(t, n, i) {
        zo(t, i, n);
      });
      function Jl(t, n) {
        var i = se(t) ? Ge : wh;
        return i(t, ee(n, 3));
      }
      function MC(t, n, i, l) {
        return t == null ? [] : (se(n) || (n = n == null ? [] : [n]), i = l ? r : i, se(i) || (i = i == null ? [] : [i]), $h(t, n, i));
      }
      var DC = Wl(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function NC(t, n, i) {
        var l = se(t) ? Cc : zp, d = arguments.length < 3;
        return l(t, ee(n, 4), i, d, br);
      }
      function OC(t, n, i) {
        var l = se(t) ? j0 : zp, d = arguments.length < 3;
        return l(t, ee(n, 4), i, d, uh);
      }
      function BC(t, n) {
        var i = se(t) ? _r : ch;
        return i(t, eu(ee(n, 3)));
      }
      function RC(t) {
        var n = se(t) ? ih : Ty;
        return n(t);
      }
      function PC(t, n, i) {
        (i ? Zt(t, n, i) : n === r) ? n = 1 : n = le(n);
        var l = se(t) ? ay : xy;
        return l(t, n);
      }
      function FC(t) {
        var n = se(t) ? ly : My;
        return n(t);
      }
      function UC(t) {
        if (t == null)
          return 0;
        if (ln(t))
          return nu(t) ? Zi(t) : t.length;
        var n = Rt(t);
        return n == Mt || n == ct ? t.size : Wc(t).length;
      }
      function WC(t, n, i) {
        var l = se(t) ? Vc : Dy;
        return i && Zt(t, n, i) && (n = r), l(t, ee(n, 3));
      }
      var HC = de(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && Zt(t, n[0], n[1]) ? n = [] : i > 2 && Zt(n[0], n[1], n[2]) && (n = [n[0]]), $h(t, Vt(n, 1), []);
      }), Xl = C$ || function() {
        return Ct.Date.now();
      };
      function zC(t, n) {
        if (typeof n != "function")
          throw new Pn(c);
        return t = le(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function hm(t, n, i) {
        return n = i ? r : n, n = t && n == null ? t.length : n, qo(t, W, r, r, r, r, n);
      }
      function mm(t, n) {
        var i;
        if (typeof n != "function")
          throw new Pn(c);
        return t = le(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = r), i;
        };
      }
      var fd = de(function(t, n, i) {
        var l = B;
        if (i.length) {
          var d = $r(i, os(fd));
          l |= k;
        }
        return qo(t, l, n, i, d);
      }), wm = de(function(t, n, i) {
        var l = B | S;
        if (i.length) {
          var d = $r(i, os(wm));
          l |= k;
        }
        return qo(n, l, t, i, d);
      });
      function vm(t, n, i) {
        n = i ? r : n;
        var l = qo(t, T, r, r, r, r, r, n);
        return l.placeholder = vm.placeholder, l;
      }
      function _m(t, n, i) {
        n = i ? r : n;
        var l = qo(t, P, r, r, r, r, r, n);
        return l.placeholder = _m.placeholder, l;
      }
      function gm(t, n, i) {
        var l, d, h, _, $, V, M = 0, D = !1, F = !1, G = !0;
        if (typeof t != "function")
          throw new Pn(c);
        n = zn(n) || 0, Je(i) && (D = !!i.leading, F = "maxWait" in i, h = F ? pt(zn(i.maxWait) || 0, n) : h, G = "trailing" in i ? !!i.trailing : G);
        function K(rt) {
          var io = l, Ko = d;
          return l = d = r, M = rt, _ = t.apply(Ko, io), _;
        }
        function te(rt) {
          return M = rt, $ = ga(pe, n), D ? K(rt) : _;
        }
        function ue(rt) {
          var io = rt - V, Ko = rt - M, Rm = n - io;
          return F ? Bt(Rm, h - Ko) : Rm;
        }
        function ne(rt) {
          var io = rt - V, Ko = rt - M;
          return V === r || io >= n || io < 0 || F && Ko >= h;
        }
        function pe() {
          var rt = Xl();
          if (ne(rt))
            return _e(rt);
          $ = ga(pe, ue(rt));
        }
        function _e(rt) {
          return $ = r, G && l ? K(rt) : (l = d = r, _);
        }
        function Vn() {
          $ !== r && Ah($), M = 0, l = V = d = $ = r;
        }
        function Kt() {
          return $ === r ? _ : _e(Xl());
        }
        function En() {
          var rt = Xl(), io = ne(rt);
          if (l = arguments, d = this, V = rt, io) {
            if ($ === r)
              return te(V);
            if (F)
              return Ah($), $ = ga(pe, n), K(V);
          }
          return $ === r && ($ = ga(pe, n)), _;
        }
        return En.cancel = Vn, En.flush = Kt, En;
      }
      var qC = de(function(t, n) {
        return lh(t, 1, n);
      }), GC = de(function(t, n, i) {
        return lh(t, zn(n) || 0, i);
      });
      function YC(t) {
        return qo(t, Le);
      }
      function Ql(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Pn(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], h = i.cache;
          if (h.has(d))
            return h.get(d);
          var _ = t.apply(this, l);
          return i.cache = h.set(d, _) || h, _;
        };
        return i.cache = new (Ql.Cache || Ho)(), i;
      }
      Ql.Cache = Ho;
      function eu(t) {
        if (typeof t != "function")
          throw new Pn(c);
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
      function jC(t) {
        return mm(2, t);
      }
      var ZC = Ny(function(t, n) {
        n = n.length == 1 && se(n[0]) ? Ge(n[0], yn(ee())) : Ge(Vt(n, 1), yn(ee()));
        var i = n.length;
        return de(function(l) {
          for (var d = -1, h = Bt(l.length, i); ++d < h; )
            l[d] = n[d].call(this, l[d]);
          return $n(t, this, l);
        });
      }), pd = de(function(t, n) {
        var i = $r(n, os(pd));
        return qo(t, k, r, n, i);
      }), $m = de(function(t, n) {
        var i = $r(n, os($m));
        return qo(t, U, r, n, i);
      }), KC = Go(function(t, n) {
        return qo(t, Z, r, r, r, n);
      });
      function JC(t, n) {
        if (typeof t != "function")
          throw new Pn(c);
        return n = n === r ? n : le(n), de(t, n);
      }
      function XC(t, n) {
        if (typeof t != "function")
          throw new Pn(c);
        return n = n == null ? 0 : pt(le(n), 0), de(function(i) {
          var l = i[n], d = Er(i, 0, n);
          return l && gr(d, l), $n(t, this, d);
        });
      }
      function QC(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Pn(c);
        return Je(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), gm(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function eV(t) {
        return hm(t, 1);
      }
      function tV(t, n) {
        return pd(Jc(n), t);
      }
      function nV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return se(t) ? t : [t];
      }
      function oV(t) {
        return Un(t, N);
      }
      function rV(t, n) {
        return n = typeof n == "function" ? n : r, Un(t, N, n);
      }
      function iV(t) {
        return Un(t, y | N);
      }
      function sV(t, n) {
        return n = typeof n == "function" ? n : r, Un(t, y | N, n);
      }
      function aV(t, n) {
        return n == null || ah(t, n, vt(n));
      }
      function ro(t, n) {
        return t === n || t !== t && n !== n;
      }
      var lV = Gl(Pc), uV = Gl(function(t, n) {
        return t >= n;
      }), pi = ph(function() {
        return arguments;
      }()) ? ph : function(t) {
        return et(t) && Ne.call(t, "callee") && !Qp.call(t, "callee");
      }, se = I.isArray, cV = Dp ? yn(Dp) : _y;
      function ln(t) {
        return t != null && tu(t.length) && !jo(t);
      }
      function ot(t) {
        return et(t) && ln(t);
      }
      function dV(t) {
        return t === !0 || t === !1 || et(t) && jt(t) == vn;
      }
      var Sr = E$ || Vd, fV = Np ? yn(Np) : gy;
      function pV(t) {
        return et(t) && t.nodeType === 1 && !$a(t);
      }
      function hV(t) {
        if (t == null)
          return !0;
        if (ln(t) && (se(t) || typeof t == "string" || typeof t.splice == "function" || Sr(t) || rs(t) || pi(t)))
          return !t.length;
        var n = Rt(t);
        if (n == Mt || n == ct)
          return !t.size;
        if (_a(t))
          return !Wc(t).length;
        for (var i in t)
          if (Ne.call(t, i))
            return !1;
        return !0;
      }
      function mV(t, n) {
        return ma(t, n);
      }
      function wV(t, n, i) {
        i = typeof i == "function" ? i : r;
        var l = i ? i(t, n) : r;
        return l === r ? ma(t, n, r, i) : !!l;
      }
      function hd(t) {
        if (!et(t))
          return !1;
        var n = jt(t);
        return n == Me || n == Yr || typeof t.message == "string" && typeof t.name == "string" && !$a(t);
      }
      function vV(t) {
        return typeof t == "number" && th(t);
      }
      function jo(t) {
        if (!Je(t))
          return !1;
        var n = jt(t);
        return n == Mo || n == Re || n == nn || n == jr;
      }
      function ym(t) {
        return typeof t == "number" && t == le(t);
      }
      function tu(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= qe;
      }
      function Je(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function et(t) {
        return t != null && typeof t == "object";
      }
      var bm = Op ? yn(Op) : yy;
      function _V(t, n) {
        return t === n || Uc(t, n, rd(n));
      }
      function gV(t, n, i) {
        return i = typeof i == "function" ? i : r, Uc(t, n, rd(n), i);
      }
      function $V(t) {
        return Cm(t) && t != +t;
      }
      function yV(t) {
        if (rb(t))
          throw new ie(u);
        return hh(t);
      }
      function bV(t) {
        return t === null;
      }
      function CV(t) {
        return t == null;
      }
      function Cm(t) {
        return typeof t == "number" || et(t) && jt(t) == be;
      }
      function $a(t) {
        if (!et(t) || jt(t) != yt)
          return !1;
        var n = kl(t);
        if (n === null)
          return !0;
        var i = Ne.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Vl.call(i) == g$;
      }
      var md = Bp ? yn(Bp) : by;
      function VV(t) {
        return ym(t) && t >= -qe && t <= qe;
      }
      var Vm = Rp ? yn(Rp) : Cy;
      function nu(t) {
        return typeof t == "string" || !se(t) && et(t) && jt(t) == mo;
      }
      function Cn(t) {
        return typeof t == "symbol" || et(t) && jt(t) == dt;
      }
      var rs = Pp ? yn(Pp) : Vy;
      function EV(t) {
        return t === r;
      }
      function SV(t) {
        return et(t) && Rt(t) == qt;
      }
      function IV(t) {
        return et(t) && jt(t) == Zr;
      }
      var kV = Gl(Hc), AV = Gl(function(t, n) {
        return t <= n;
      });
      function Em(t) {
        if (!t)
          return [];
        if (ln(t))
          return nu(t) ? no(t) : an(t);
        if (aa && t[aa])
          return a$(t[aa]());
        var n = Rt(t), i = n == Mt ? Tc : n == ct ? yl : is;
        return i(t);
      }
      function Zo(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = zn(t), t === Qe || t === -Qe) {
          var n = t < 0 ? -1 : 1;
          return n * tn;
        }
        return t === t ? t : 0;
      }
      function le(t) {
        var n = Zo(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function Sm(t) {
        return t ? ui(le(t), 0, $e) : 0;
      }
      function zn(t) {
        if (typeof t == "number")
          return t;
        if (Cn(t))
          return Lo;
        if (Je(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Je(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = qp(t);
        var i = fr.test(t);
        return i || ni.test(t) ? z0(t.slice(2), i ? 2 : 8) : ei.test(t) ? Lo : +t;
      }
      function Im(t) {
        return yo(t, un(t));
      }
      function TV(t) {
        return t ? ui(le(t), -qe, qe) : t === 0 ? t : 0;
      }
      function Ae(t) {
        return t == null ? "" : bn(t);
      }
      var xV = ts(function(t, n) {
        if (_a(n) || ln(n)) {
          yo(n, vt(n), t);
          return;
        }
        for (var i in n)
          Ne.call(n, i) && fa(t, i, n[i]);
      }), km = ts(function(t, n) {
        yo(n, un(n), t);
      }), ou = ts(function(t, n, i, l) {
        yo(n, un(n), t, l);
      }), LV = ts(function(t, n, i, l) {
        yo(n, vt(n), t, l);
      }), MV = Go(Oc);
      function DV(t, n) {
        var i = es(t);
        return n == null ? i : sh(i, n);
      }
      var NV = de(function(t, n) {
        t = Pe(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && Zt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var h = n[i], _ = un(h), $ = -1, V = _.length; ++$ < V; ) {
            var M = _[$], D = t[M];
            (D === r || ro(D, Ji[M]) && !Ne.call(t, M)) && (t[M] = h[M]);
          }
        return t;
      }), OV = de(function(t) {
        return t.push(r, qh), $n(Am, r, t);
      });
      function BV(t, n) {
        return Up(t, ee(n, 3), $o);
      }
      function RV(t, n) {
        return Up(t, ee(n, 3), Rc);
      }
      function PV(t, n) {
        return t == null ? t : Bc(t, ee(n, 3), un);
      }
      function FV(t, n) {
        return t == null ? t : dh(t, ee(n, 3), un);
      }
      function UV(t, n) {
        return t && $o(t, ee(n, 3));
      }
      function WV(t, n) {
        return t && Rc(t, ee(n, 3));
      }
      function HV(t) {
        return t == null ? [] : Rl(t, vt(t));
      }
      function zV(t) {
        return t == null ? [] : Rl(t, un(t));
      }
      function wd(t, n, i) {
        var l = t == null ? r : ci(t, n);
        return l === r ? i : l;
      }
      function qV(t, n) {
        return t != null && jh(t, n, hy);
      }
      function vd(t, n) {
        return t != null && jh(t, n, my);
      }
      var GV = Fh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = El.call(n)), t[n] = i;
      }, gd(cn)), YV = Fh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = El.call(n)), Ne.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, ee), jV = de(ha);
      function vt(t) {
        return ln(t) ? rh(t) : Wc(t);
      }
      function un(t) {
        return ln(t) ? rh(t, !0) : Ey(t);
      }
      function ZV(t, n) {
        var i = {};
        return n = ee(n, 3), $o(t, function(l, d, h) {
          zo(i, n(l, d, h), l);
        }), i;
      }
      function KV(t, n) {
        var i = {};
        return n = ee(n, 3), $o(t, function(l, d, h) {
          zo(i, d, n(l, d, h));
        }), i;
      }
      var JV = ts(function(t, n, i) {
        Pl(t, n, i);
      }), Am = ts(function(t, n, i, l) {
        Pl(t, n, i, l);
      }), XV = Go(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ge(n, function(h) {
          return h = Vr(h, t), l || (l = h.length > 1), h;
        }), yo(t, nd(t), i), l && (i = Un(i, y | b | N, Gy));
        for (var d = n.length; d--; )
          jc(i, n[d]);
        return i;
      });
      function QV(t, n) {
        return Tm(t, eu(ee(n)));
      }
      var eE = Go(function(t, n) {
        return t == null ? {} : Iy(t, n);
      });
      function Tm(t, n) {
        if (t == null)
          return {};
        var i = Ge(nd(t), function(l) {
          return [l];
        });
        return n = ee(n), yh(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function tE(t, n, i) {
        n = Vr(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var h = t == null ? r : t[bo(n[l])];
          h === r && (l = d, h = i), t = jo(h) ? h.call(t) : h;
        }
        return t;
      }
      function nE(t, n, i) {
        return t == null ? t : wa(t, n, i);
      }
      function oE(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : wa(t, n, i, l);
      }
      var xm = Hh(vt), Lm = Hh(un);
      function rE(t, n, i) {
        var l = se(t), d = l || Sr(t) || rs(t);
        if (n = ee(n, 4), i == null) {
          var h = t && t.constructor;
          d ? i = l ? new h() : [] : Je(t) ? i = jo(h) ? es(kl(t)) : {} : i = {};
        }
        return (d ? Rn : $o)(t, function(_, $, V) {
          return n(i, _, $, V);
        }), i;
      }
      function iE(t, n) {
        return t == null ? !0 : jc(t, n);
      }
      function sE(t, n, i) {
        return t == null ? t : Sh(t, n, Jc(i));
      }
      function aE(t, n, i, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : Sh(t, n, Jc(i), l);
      }
      function is(t) {
        return t == null ? [] : Ac(t, vt(t));
      }
      function lE(t) {
        return t == null ? [] : Ac(t, un(t));
      }
      function uE(t, n, i) {
        return i === r && (i = n, n = r), i !== r && (i = zn(i), i = i === i ? i : 0), n !== r && (n = zn(n), n = n === n ? n : 0), ui(zn(t), n, i);
      }
      function cE(t, n, i) {
        return n = Zo(n), i === r ? (i = n, n = 0) : i = Zo(i), t = zn(t), wy(t, n, i);
      }
      function dE(t, n, i) {
        if (i && typeof i != "boolean" && Zt(t, n, i) && (n = i = r), i === r && (typeof n == "boolean" ? (i = n, n = r) : typeof t == "boolean" && (i = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Zo(t), n === r ? (n = t, t = 0) : n = Zo(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = nh();
          return Bt(t + d * (n - t + H0("1e-" + ((d + "").length - 1))), n);
        }
        return qc(t, n);
      }
      var fE = ns(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? Mm(n) : n);
      });
      function Mm(t) {
        return _d(Ae(t).toLowerCase());
      }
      function Dm(t) {
        return t = Ae(t), t && t.replace(Wi, n$).replace(M0, "");
      }
      function pE(t, n, i) {
        t = Ae(t), n = bn(n);
        var l = t.length;
        i = i === r ? l : ui(le(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function hE(t) {
        return t = Ae(t), t && Kr.test(t) ? t.replace(sr, o$) : t;
      }
      function mE(t) {
        return t = Ae(t), t && Jr.test(t) ? t.replace(cr, "\\$&") : t;
      }
      var wE = ns(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), vE = ns(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), _E = Bh("toLowerCase");
      function gE(t, n, i) {
        t = Ae(t), n = le(n);
        var l = n ? Zi(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return ql(Ll(d), i) + t + ql(xl(d), i);
      }
      function $E(t, n, i) {
        t = Ae(t), n = le(n);
        var l = n ? Zi(t) : 0;
        return n && l < n ? t + ql(n - l, i) : t;
      }
      function yE(t, n, i) {
        t = Ae(t), n = le(n);
        var l = n ? Zi(t) : 0;
        return n && l < n ? ql(n - l, i) + t : t;
      }
      function bE(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), A$(Ae(t).replace(go, ""), n || 0);
      }
      function CE(t, n, i) {
        return (i ? Zt(t, n, i) : n === r) ? n = 1 : n = le(n), Gc(Ae(t), n);
      }
      function VE() {
        var t = arguments, n = Ae(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var EE = ns(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function SE(t, n, i) {
        return i && typeof i != "number" && Zt(t, n, i) && (n = i = r), i = i === r ? $e : i >>> 0, i ? (t = Ae(t), t && (typeof n == "string" || n != null && !md(n)) && (n = bn(n), !n && ji(t)) ? Er(no(t), 0, i) : t.split(n, i)) : [];
      }
      var IE = ns(function(t, n, i) {
        return t + (i ? " " : "") + _d(n);
      });
      function kE(t, n, i) {
        return t = Ae(t), i = i == null ? 0 : ui(le(i), 0, t.length), n = bn(n), t.slice(i, i + n.length) == n;
      }
      function AE(t, n, i) {
        var l = p.templateSettings;
        i && Zt(t, n, i) && (n = r), t = Ae(t), n = ou({}, n, l, zh);
        var d = ou({}, n.imports, l.imports, zh), h = vt(d), _ = Ac(d, h), $, V, M = 0, D = n.interpolate || Fo, F = "__p += '", G = xc(
          (n.escape || Fo).source + "|" + D.source + "|" + (D === Nt ? rn : Fo).source + "|" + (n.evaluate || Fo).source + "|$",
          "g"
        ), K = "//# sourceURL=" + (Ne.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++R0 + "]") + `
`;
        t.replace(G, function(ne, pe, _e, Vn, Kt, En) {
          return _e || (_e = Vn), F += t.slice(M, En).replace(Hi, r$), pe && ($ = !0, F += `' +
__e(` + pe + `) +
'`), Kt && (V = !0, F += `';
` + Kt + `;
__p += '`), _e && (F += `' +
((__t = (` + _e + `)) == null ? '' : __t) +
'`), M = En + ne.length, ne;
        }), F += `';
`;
        var te = Ne.call(n, "variable") && n.variable;
        if (!te)
          F = `with (obj) {
` + F + `
}
`;
        else if (De.test(te))
          throw new ie(f);
        F = (V ? F.replace(eo, "") : F).replace(Gt, "$1").replace(rr, "$1;"), F = "function(" + (te || "obj") + `) {
` + (te ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + ($ ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + F + `return __p
}`;
        var ue = Om(function() {
          return Se(h, K + "return " + F).apply(r, _);
        });
        if (ue.source = F, hd(ue))
          throw ue;
        return ue;
      }
      function TE(t) {
        return Ae(t).toLowerCase();
      }
      function xE(t) {
        return Ae(t).toUpperCase();
      }
      function LE(t, n, i) {
        if (t = Ae(t), t && (i || n === r))
          return qp(t);
        if (!t || !(n = bn(n)))
          return t;
        var l = no(t), d = no(n), h = Gp(l, d), _ = Yp(l, d) + 1;
        return Er(l, h, _).join("");
      }
      function ME(t, n, i) {
        if (t = Ae(t), t && (i || n === r))
          return t.slice(0, Zp(t) + 1);
        if (!t || !(n = bn(n)))
          return t;
        var l = no(t), d = Yp(l, no(n)) + 1;
        return Er(l, 0, d).join("");
      }
      function DE(t, n, i) {
        if (t = Ae(t), t && (i || n === r))
          return t.replace(go, "");
        if (!t || !(n = bn(n)))
          return t;
        var l = no(t), d = Gp(l, no(n));
        return Er(l, d).join("");
      }
      function NE(t, n) {
        var i = he, l = ke;
        if (Je(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? le(n.length) : i, l = "omission" in n ? bn(n.omission) : l;
        }
        t = Ae(t);
        var h = t.length;
        if (ji(t)) {
          var _ = no(t);
          h = _.length;
        }
        if (i >= h)
          return t;
        var $ = i - Zi(l);
        if ($ < 1)
          return l;
        var V = _ ? Er(_, 0, $).join("") : t.slice(0, $);
        if (d === r)
          return V + l;
        if (_ && ($ += V.length - $), md(d)) {
          if (t.slice($).search(d)) {
            var M, D = V;
            for (d.global || (d = xc(d.source, Ae(Qr.exec(d)) + "g")), d.lastIndex = 0; M = d.exec(D); )
              var F = M.index;
            V = V.slice(0, F === r ? $ : F);
          }
        } else if (t.indexOf(bn(d), $) != $) {
          var G = V.lastIndexOf(d);
          G > -1 && (V = V.slice(0, G));
        }
        return V + l;
      }
      function OE(t) {
        return t = Ae(t), t && ar.test(t) ? t.replace(ir, d$) : t;
      }
      var BE = ns(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), _d = Bh("toUpperCase");
      function Nm(t, n, i) {
        return t = Ae(t), n = i ? r : n, n === r ? s$(t) ? h$(t) : J0(t) : t.match(n) || [];
      }
      var Om = de(function(t, n) {
        try {
          return $n(t, r, n);
        } catch (i) {
          return hd(i) ? i : new ie(i);
        }
      }), RE = Go(function(t, n) {
        return Rn(n, function(i) {
          i = bo(i), zo(t, i, fd(t[i], t));
        }), t;
      });
      function PE(t) {
        var n = t == null ? 0 : t.length, i = ee();
        return t = n ? Ge(t, function(l) {
          if (typeof l[1] != "function")
            throw new Pn(c);
          return [i(l[0]), l[1]];
        }) : [], de(function(l) {
          for (var d = -1; ++d < n; ) {
            var h = t[d];
            if ($n(h[0], this, l))
              return $n(h[1], this, l);
          }
        });
      }
      function FE(t) {
        return dy(Un(t, y));
      }
      function gd(t) {
        return function() {
          return t;
        };
      }
      function UE(t, n) {
        return t == null || t !== t ? n : t;
      }
      var WE = Ph(), HE = Ph(!0);
      function cn(t) {
        return t;
      }
      function $d(t) {
        return mh(typeof t == "function" ? t : Un(t, y));
      }
      function zE(t) {
        return vh(Un(t, y));
      }
      function qE(t, n) {
        return _h(t, Un(n, y));
      }
      var GE = de(function(t, n) {
        return function(i) {
          return ha(i, t, n);
        };
      }), YE = de(function(t, n) {
        return function(i) {
          return ha(t, i, n);
        };
      });
      function yd(t, n, i) {
        var l = vt(n), d = Rl(n, l);
        i == null && !(Je(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Rl(n, vt(n)));
        var h = !(Je(i) && "chain" in i) || !!i.chain, _ = jo(t);
        return Rn(d, function($) {
          var V = n[$];
          t[$] = V, _ && (t.prototype[$] = function() {
            var M = this.__chain__;
            if (h || M) {
              var D = t(this.__wrapped__), F = D.__actions__ = an(this.__actions__);
              return F.push({ func: V, args: arguments, thisArg: t }), D.__chain__ = M, D;
            }
            return V.apply(t, gr([this.value()], arguments));
          });
        }), t;
      }
      function jE() {
        return Ct._ === this && (Ct._ = $$), this;
      }
      function bd() {
      }
      function ZE(t) {
        return t = le(t), de(function(n) {
          return gh(n, t);
        });
      }
      var KE = Qc(Ge), JE = Qc(Fp), XE = Qc(Vc);
      function Bm(t) {
        return sd(t) ? Ec(bo(t)) : ky(t);
      }
      function QE(t) {
        return function(n) {
          return t == null ? r : ci(t, n);
        };
      }
      var eS = Uh(), tS = Uh(!0);
      function Cd() {
        return [];
      }
      function Vd() {
        return !1;
      }
      function nS() {
        return {};
      }
      function oS() {
        return "";
      }
      function rS() {
        return !0;
      }
      function iS(t, n) {
        if (t = le(t), t < 1 || t > qe)
          return [];
        var i = $e, l = Bt(t, $e);
        n = ee(n), t -= $e;
        for (var d = kc(l, n); ++i < t; )
          n(i);
        return d;
      }
      function sS(t) {
        return se(t) ? Ge(t, bo) : Cn(t) ? [t] : an(om(Ae(t)));
      }
      function aS(t) {
        var n = ++_$;
        return Ae(t) + n;
      }
      var lS = zl(function(t, n) {
        return t + n;
      }, 0), uS = ed("ceil"), cS = zl(function(t, n) {
        return t / n;
      }, 1), dS = ed("floor");
      function fS(t) {
        return t && t.length ? Bl(t, cn, Pc) : r;
      }
      function pS(t, n) {
        return t && t.length ? Bl(t, ee(n, 2), Pc) : r;
      }
      function hS(t) {
        return Hp(t, cn);
      }
      function mS(t, n) {
        return Hp(t, ee(n, 2));
      }
      function wS(t) {
        return t && t.length ? Bl(t, cn, Hc) : r;
      }
      function vS(t, n) {
        return t && t.length ? Bl(t, ee(n, 2), Hc) : r;
      }
      var _S = zl(function(t, n) {
        return t * n;
      }, 1), gS = ed("round"), $S = zl(function(t, n) {
        return t - n;
      }, 0);
      function yS(t) {
        return t && t.length ? Ic(t, cn) : 0;
      }
      function bS(t, n) {
        return t && t.length ? Ic(t, ee(n, 2)) : 0;
      }
      return p.after = zC, p.ary = hm, p.assign = xV, p.assignIn = km, p.assignInWith = ou, p.assignWith = LV, p.at = MV, p.before = mm, p.bind = fd, p.bindAll = RE, p.bindKey = wm, p.castArray = nV, p.chain = dm, p.chunk = db, p.compact = fb, p.concat = pb, p.cond = PE, p.conforms = FE, p.constant = gd, p.countBy = yC, p.create = DV, p.curry = vm, p.curryRight = _m, p.debounce = gm, p.defaults = NV, p.defaultsDeep = OV, p.defer = qC, p.delay = GC, p.difference = hb, p.differenceBy = mb, p.differenceWith = wb, p.drop = vb, p.dropRight = _b, p.dropRightWhile = gb, p.dropWhile = $b, p.fill = yb, p.filter = CC, p.flatMap = SC, p.flatMapDeep = IC, p.flatMapDepth = kC, p.flatten = am, p.flattenDeep = bb, p.flattenDepth = Cb, p.flip = YC, p.flow = WE, p.flowRight = HE, p.fromPairs = Vb, p.functions = HV, p.functionsIn = zV, p.groupBy = AC, p.initial = Sb, p.intersection = Ib, p.intersectionBy = kb, p.intersectionWith = Ab, p.invert = GV, p.invertBy = YV, p.invokeMap = xC, p.iteratee = $d, p.keyBy = LC, p.keys = vt, p.keysIn = un, p.map = Jl, p.mapKeys = ZV, p.mapValues = KV, p.matches = zE, p.matchesProperty = qE, p.memoize = Ql, p.merge = JV, p.mergeWith = Am, p.method = GE, p.methodOf = YE, p.mixin = yd, p.negate = eu, p.nthArg = ZE, p.omit = XV, p.omitBy = QV, p.once = jC, p.orderBy = MC, p.over = KE, p.overArgs = ZC, p.overEvery = JE, p.overSome = XE, p.partial = pd, p.partialRight = $m, p.partition = DC, p.pick = eE, p.pickBy = Tm, p.property = Bm, p.propertyOf = QE, p.pull = Mb, p.pullAll = um, p.pullAllBy = Db, p.pullAllWith = Nb, p.pullAt = Ob, p.range = eS, p.rangeRight = tS, p.rearg = KC, p.reject = BC, p.remove = Bb, p.rest = JC, p.reverse = cd, p.sampleSize = PC, p.set = nE, p.setWith = oE, p.shuffle = FC, p.slice = Rb, p.sortBy = HC, p.sortedUniq = qb, p.sortedUniqBy = Gb, p.split = SE, p.spread = XC, p.tail = Yb, p.take = jb, p.takeRight = Zb, p.takeRightWhile = Kb, p.takeWhile = Jb, p.tap = fC, p.throttle = QC, p.thru = Kl, p.toArray = Em, p.toPairs = xm, p.toPairsIn = Lm, p.toPath = sS, p.toPlainObject = Im, p.transform = rE, p.unary = eV, p.union = Xb, p.unionBy = Qb, p.unionWith = eC, p.uniq = tC, p.uniqBy = nC, p.uniqWith = oC, p.unset = iE, p.unzip = dd, p.unzipWith = cm, p.update = sE, p.updateWith = aE, p.values = is, p.valuesIn = lE, p.without = rC, p.words = Nm, p.wrap = tV, p.xor = iC, p.xorBy = sC, p.xorWith = aC, p.zip = lC, p.zipObject = uC, p.zipObjectDeep = cC, p.zipWith = dC, p.entries = xm, p.entriesIn = Lm, p.extend = km, p.extendWith = ou, yd(p, p), p.add = lS, p.attempt = Om, p.camelCase = fE, p.capitalize = Mm, p.ceil = uS, p.clamp = uE, p.clone = oV, p.cloneDeep = iV, p.cloneDeepWith = sV, p.cloneWith = rV, p.conformsTo = aV, p.deburr = Dm, p.defaultTo = UE, p.divide = cS, p.endsWith = pE, p.eq = ro, p.escape = hE, p.escapeRegExp = mE, p.every = bC, p.find = VC, p.findIndex = im, p.findKey = BV, p.findLast = EC, p.findLastIndex = sm, p.findLastKey = RV, p.floor = dS, p.forEach = fm, p.forEachRight = pm, p.forIn = PV, p.forInRight = FV, p.forOwn = UV, p.forOwnRight = WV, p.get = wd, p.gt = lV, p.gte = uV, p.has = qV, p.hasIn = vd, p.head = lm, p.identity = cn, p.includes = TC, p.indexOf = Eb, p.inRange = cE, p.invoke = jV, p.isArguments = pi, p.isArray = se, p.isArrayBuffer = cV, p.isArrayLike = ln, p.isArrayLikeObject = ot, p.isBoolean = dV, p.isBuffer = Sr, p.isDate = fV, p.isElement = pV, p.isEmpty = hV, p.isEqual = mV, p.isEqualWith = wV, p.isError = hd, p.isFinite = vV, p.isFunction = jo, p.isInteger = ym, p.isLength = tu, p.isMap = bm, p.isMatch = _V, p.isMatchWith = gV, p.isNaN = $V, p.isNative = yV, p.isNil = CV, p.isNull = bV, p.isNumber = Cm, p.isObject = Je, p.isObjectLike = et, p.isPlainObject = $a, p.isRegExp = md, p.isSafeInteger = VV, p.isSet = Vm, p.isString = nu, p.isSymbol = Cn, p.isTypedArray = rs, p.isUndefined = EV, p.isWeakMap = SV, p.isWeakSet = IV, p.join = Tb, p.kebabCase = wE, p.last = Hn, p.lastIndexOf = xb, p.lowerCase = vE, p.lowerFirst = _E, p.lt = kV, p.lte = AV, p.max = fS, p.maxBy = pS, p.mean = hS, p.meanBy = mS, p.min = wS, p.minBy = vS, p.stubArray = Cd, p.stubFalse = Vd, p.stubObject = nS, p.stubString = oS, p.stubTrue = rS, p.multiply = _S, p.nth = Lb, p.noConflict = jE, p.noop = bd, p.now = Xl, p.pad = gE, p.padEnd = $E, p.padStart = yE, p.parseInt = bE, p.random = dE, p.reduce = NC, p.reduceRight = OC, p.repeat = CE, p.replace = VE, p.result = tE, p.round = gS, p.runInContext = C, p.sample = RC, p.size = UC, p.snakeCase = EE, p.some = WC, p.sortedIndex = Pb, p.sortedIndexBy = Fb, p.sortedIndexOf = Ub, p.sortedLastIndex = Wb, p.sortedLastIndexBy = Hb, p.sortedLastIndexOf = zb, p.startCase = IE, p.startsWith = kE, p.subtract = $S, p.sum = yS, p.sumBy = bS, p.template = AE, p.times = iS, p.toFinite = Zo, p.toInteger = le, p.toLength = Sm, p.toLower = TE, p.toNumber = zn, p.toSafeInteger = TV, p.toString = Ae, p.toUpper = xE, p.trim = LE, p.trimEnd = ME, p.trimStart = DE, p.truncate = NE, p.unescape = OE, p.uniqueId = aS, p.upperCase = BE, p.upperFirst = _d, p.each = fm, p.eachRight = pm, p.first = lm, yd(p, function() {
        var t = {};
        return $o(p, function(n, i) {
          Ne.call(p.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), p.VERSION = s, Rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        p[t].placeholder = p;
      }), Rn(["drop", "take"], function(t, n) {
        me.prototype[t] = function(i) {
          i = i === r ? 1 : pt(le(i), 0);
          var l = this.__filtered__ && !n ? new me(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = Bt(i, l.__takeCount__) : l.__views__.push({
            size: Bt(i, $e),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, me.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), Rn(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == ze || i == Ze;
        me.prototype[t] = function(d) {
          var h = this.clone();
          return h.__iteratees__.push({
            iteratee: ee(d, 3),
            type: i
          }), h.__filtered__ = h.__filtered__ || l, h;
        };
      }), Rn(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        me.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), Rn(["initial", "tail"], function(t, n) {
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
      }, me.prototype.invokeMap = de(function(t, n) {
        return typeof t == "function" ? new me(this) : this.map(function(i) {
          return ha(i, t, n);
        });
      }), me.prototype.reject = function(t) {
        return this.filter(eu(ee(t)));
      }, me.prototype.slice = function(t, n) {
        t = le(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new me(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== r && (n = le(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, me.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, me.prototype.toArray = function() {
        return this.take($e);
      }, $o(me.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = p[l ? "take" + (n == "last" ? "Right" : "") : n], h = l || /^find/.test(n);
        !d || (p.prototype[n] = function() {
          var _ = this.__wrapped__, $ = l ? [1] : arguments, V = _ instanceof me, M = $[0], D = V || se(_), F = function(pe) {
            var _e = d.apply(p, gr([pe], $));
            return l && G ? _e[0] : _e;
          };
          D && i && typeof M == "function" && M.length != 1 && (V = D = !1);
          var G = this.__chain__, K = !!this.__actions__.length, te = h && !G, ue = V && !K;
          if (!h && D) {
            _ = ue ? _ : new me(this);
            var ne = t.apply(_, $);
            return ne.__actions__.push({ func: Kl, args: [F], thisArg: r }), new Fn(ne, G);
          }
          return te && ue ? t.apply(this, $) : (ne = this.thru(F), te ? l ? ne.value()[0] : ne.value() : ne);
        });
      }), Rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = bl[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), $o(me.prototype, function(t, n) {
        var i = p[n];
        if (i) {
          var l = i.name + "";
          Ne.call(Qi, l) || (Qi[l] = []), Qi[l].push({ name: n, func: i });
        }
      }), Qi[Hl(r, S).name] = [{
        name: "wrapper",
        func: r
      }], me.prototype.clone = O$, me.prototype.reverse = B$, me.prototype.value = R$, p.prototype.at = pC, p.prototype.chain = hC, p.prototype.commit = mC, p.prototype.next = wC, p.prototype.plant = _C, p.prototype.reverse = gC, p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = $C, p.prototype.first = p.prototype.head, aa && (p.prototype[aa] = vC), p;
    }, Ki = m$();
    ii ? ((ii.exports = Ki)._ = Ki, $c._ = Ki) : Ct._ = Ki;
  }).call(ya);
})(Be, Be.exports);
const WI = "/alarms?_s=", ec = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, HI = async (e, o) => {
  try {
    return (await Lt.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      ec
    )).status === 204;
  } catch {
    return !1;
  }
}, xg = async (e, o) => {
  try {
    return (await Lt.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      ec
    )).status === 204;
  } catch {
    return !1;
  }
}, zI = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await or.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      ec
    )).status == 204;
  } catch {
    return !1;
  }
}, qI = async () => {
  try {
    const e = `${WI}isSituation==true&limit=0`, o = await or(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, GI = async (e) => {
  try {
    const o = e.join(",id=="), r = await or(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, Lg = async (e) => {
  try {
    const o = await or(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, YI = async (e) => {
  try {
    const o = await or(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, jI = async () => {
  try {
    const e = await or("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => Be.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, ZI = async (e, o, r) => {
  try {
    return (await or.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      ec
    )).status == 204;
  } catch {
    return !1;
  }
}, KI = async (e, o) => {
  try {
    return (await or.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, JI = async () => {
  try {
    const e = await or.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, XI = window.Pinia.defineStore, ho = XI("situationsStore", {
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
      const e = await jI();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await qI();
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
          const a = (o = s.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await GI(a);
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
          const a = await YI(s);
          a && (r[s] = Be.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await JI();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), QI = window.Vue.openBlock, ek = window.Vue.createElementBlock, tk = window.Vue.createElementVNode;
var nk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ok = {}, rk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ik = /* @__PURE__ */ tk("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), sk = [
  ik
];
function ak(e, o) {
  return QI(), ek("svg", rk, sk);
}
var Ns = /* @__PURE__ */ nk(ok, [["render", ak]]);
var lk = Object.defineProperty, lw = Object.getOwnPropertySymbols, uk = Object.prototype.hasOwnProperty, ck = Object.prototype.propertyIsEnumerable, uw = (e, o, r) => o in e ? lk(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, cw = (e, o) => {
  for (var r in o || (o = {}))
    uk.call(o, r) && uw(e, r, o[r]);
  if (lw)
    for (var r of lw(o))
      ck.call(o, r) && uw(e, r, o[r]);
  return e;
};
const dk = window.Vue.defineComponent, fk = window.Vue.toRaw, Fd = window.Vue.h;
var pk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hk = {
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
}, mk = dk({
  props: hk,
  render() {
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let s = fk(this.icon);
    return this.$slots.default ? Fd("span", { class: "feather-icon-container" }, [
      Fd(this.$slots.default()[0], cw({
        class: o
      }, r))
    ]) : Fd(s, cw({
      class: o
    }, r));
  }
});
var X = /* @__PURE__ */ pk(mk, [["__scopeId", "data-v-52cbf270"]]);
const wk = window.Vue.openBlock, vk = window.Vue.createElementBlock, _k = window.Vue.createElementVNode;
var gk = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const $k = {}, yk = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, bk = /* @__PURE__ */ _k("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), Ck = [
  bk
];
function Vk(e, o) {
  return wk(), vk("svg", yk, Ck);
}
var Mg = /* @__PURE__ */ gk($k, [["render", Vk]]);
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
function Ao(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ue(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function wt(e) {
  Ue(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ek(e, o) {
  Ue(2, arguments);
  var r = wt(e), s = Ao(o);
  return isNaN(s) ? new Date(NaN) : (s && r.setDate(r.getDate() + s), r);
}
function Sk(e, o) {
  Ue(2, arguments);
  var r = wt(e).getTime(), s = Ao(o);
  return new Date(r + s);
}
var Ik = {};
function Rs() {
  return Ik;
}
function dw(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = Rs(), y = Ao((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = wt(e), N = b.getDay(), O = (N < y ? 7 : 0) + N - y;
  return b.setDate(b.getDate() - O), b.setHours(0, 0, 0, 0), b;
}
function Pf(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function fw(e) {
  Ue(1, arguments);
  var o = wt(e);
  return o.setHours(0, 0, 0, 0), o;
}
function kk(e, o) {
  Ue(2, arguments);
  var r = wt(e), s = wt(o), a = r.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function Dg(e, o) {
  Ue(2, arguments);
  var r = fw(e), s = fw(o);
  return r.getTime() === s.getTime();
}
function Ak(e) {
  return Ue(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Tk(e) {
  if (Ue(1, arguments), !Ak(e) && typeof e != "number")
    return !1;
  var o = wt(e);
  return !isNaN(Number(o));
}
function xk(e, o) {
  Ue(2, arguments);
  var r = Ao(o);
  return Sk(e, -r);
}
var Lk = 864e5;
function Mk(e) {
  Ue(1, arguments);
  var o = wt(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var s = o.getTime(), a = r - s;
  return Math.floor(a / Lk) + 1;
}
function Ru(e) {
  Ue(1, arguments);
  var o = 1, r = wt(e), s = r.getUTCDay(), a = (s < o ? 7 : 0) + s - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function Ng(e) {
  Ue(1, arguments);
  var o = wt(e), r = o.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(r + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Ru(s), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ru(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function Dk(e) {
  Ue(1, arguments);
  var o = Ng(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var s = Ru(r);
  return s;
}
var Nk = 6048e5;
function Ok(e) {
  Ue(1, arguments);
  var o = wt(e), r = Ru(o).getTime() - Dk(o).getTime();
  return Math.round(r / Nk) + 1;
}
function Pu(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = Rs(), y = Ao((r = (s = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : g.weekStartsOn) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(y >= 0 && y <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var b = wt(e), N = b.getUTCDay(), O = (N < y ? 7 : 0) + N - y;
  return b.setUTCDate(b.getUTCDate() - O), b.setUTCHours(0, 0, 0, 0), b;
}
function Og(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = wt(e), y = g.getUTCFullYear(), b = Rs(), N = Ao((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : b.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = b.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(N >= 1 && N <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = new Date(0);
  O.setUTCFullYear(y + 1, 0, N), O.setUTCHours(0, 0, 0, 0);
  var R = Pu(O, o), B = new Date(0);
  B.setUTCFullYear(y, 0, N), B.setUTCHours(0, 0, 0, 0);
  var S = Pu(B, o);
  return g.getTime() >= R.getTime() ? y + 1 : g.getTime() >= S.getTime() ? y : y - 1;
}
function Bk(e, o) {
  var r, s, a, u, c, f, m, v;
  Ue(1, arguments);
  var g = Rs(), y = Ao((r = (s = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : g.firstWeekContainsDate) !== null && s !== void 0 ? s : (m = g.locale) === null || m === void 0 || (v = m.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), b = Og(e, o), N = new Date(0);
  N.setUTCFullYear(b, 0, y), N.setUTCHours(0, 0, 0, 0);
  var O = Pu(N, o);
  return O;
}
var Rk = 6048e5;
function Pk(e, o) {
  Ue(1, arguments);
  var r = wt(e), s = Pu(r, o).getTime() - Bk(r, o).getTime();
  return Math.round(s / Rk) + 1;
}
function Oe(e, o) {
  for (var r = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < o; )
    s = "0" + s;
  return r + s;
}
var Fk = {
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
const Ir = Fk;
var ls = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Uk = {
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
    return Ir.y(e, o);
  },
  Y: function(e, o, r, s) {
    var a = Og(e, s), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return Oe(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : Oe(u, o.length);
  },
  R: function(e, o) {
    var r = Ng(e);
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
        return Ir.M(e, o);
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
    var a = Pk(e, s);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : Oe(a, o.length);
  },
  I: function(e, o, r) {
    var s = Ok(e);
    return o === "Io" ? r.ordinalNumber(s, {
      unit: "week"
    }) : Oe(s, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : Ir.d(e, o);
  },
  D: function(e, o, r) {
    var s = Mk(e);
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
    return Ir.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : Ir.H(e, o);
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
    }) : Ir.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : Ir.s(e, o);
  },
  S: function(e, o) {
    return Ir.S(e, o);
  },
  X: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return hw(u);
      case "XXXX":
      case "XX":
        return Ai(u);
      case "XXXXX":
      case "XXX":
      default:
        return Ai(u, ":");
    }
  },
  x: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return hw(u);
      case "xxxx":
      case "xx":
        return Ai(u);
      case "xxxxx":
      case "xxx":
      default:
        return Ai(u, ":");
    }
  },
  O: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + pw(u, ":");
      case "OOOO":
      default:
        return "GMT" + Ai(u, ":");
    }
  },
  z: function(e, o, r, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + pw(u, ":");
      case "zzzz":
      default:
        return "GMT" + Ai(u, ":");
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
function pw(e, o) {
  var r = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + Oe(u, 2);
}
function hw(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + Oe(Math.abs(e) / 60, 2);
  }
  return Ai(e, o);
}
function Ai(e, o) {
  var r = o || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = Oe(Math.floor(a / 60), 2), c = Oe(a % 60, 2);
  return s + u + r + c;
}
const Wk = Uk;
var mw = function(e, o) {
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
}, Bg = function(e, o) {
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
}, Hk = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], s = r[1], a = r[2];
  if (!a)
    return mw(e, o);
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
  return u.replace("{{date}}", mw(s, o)).replace("{{time}}", Bg(a, o));
}, zk = {
  p: Bg,
  P: Hk
};
const qk = zk;
var Gk = ["D", "DD"], Yk = ["YY", "YYYY"];
function jk(e) {
  return Gk.indexOf(e) !== -1;
}
function Zk(e) {
  return Yk.indexOf(e) !== -1;
}
function ww(e, o, r) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(o, "`) for formatting years to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(o, "`) for formatting days of the month to the input `").concat(r, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Kk = {
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
}, Jk = function(e, o, r) {
  var s, a = Kk[e];
  return typeof a == "string" ? s = a : o === 1 ? s = a.one : s = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + s : s + " ago" : s;
};
const Xk = Jk;
function Ud(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, s = e.formats[r] || e.formats[e.defaultWidth];
    return s;
  };
}
var Qk = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, eA = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, tA = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nA = {
  date: Ud({
    formats: Qk,
    defaultWidth: "full"
  }),
  time: Ud({
    formats: eA,
    defaultWidth: "full"
  }),
  dateTime: Ud({
    formats: tA,
    defaultWidth: "full"
  })
};
const oA = nA;
var rA = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, iA = function(e, o, r, s) {
  return rA[e];
};
const sA = iA;
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
var aA = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, lA = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, uA = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, cA = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, dA = {
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
}, fA = {
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
}, pA = function(e, o) {
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
}, hA = {
  ordinalNumber: pA,
  era: ba({
    values: aA,
    defaultWidth: "wide"
  }),
  quarter: ba({
    values: lA,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: ba({
    values: uA,
    defaultWidth: "wide"
  }),
  day: ba({
    values: cA,
    defaultWidth: "wide"
  }),
  dayPeriod: ba({
    values: dA,
    defaultWidth: "wide",
    formattingValues: fA,
    defaultFormattingWidth: "wide"
  })
};
const mA = hA;
function Ca(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = r.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], m = Array.isArray(f) ? vA(f, function(y) {
      return y.test(c);
    }) : wA(f, function(y) {
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
function wA(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function vA(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function _A(e) {
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
var gA = /^(\d+)(th|st|nd|rd)?/i, $A = /\d+/i, yA = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, bA = {
  any: [/^b/i, /^(a|c)/i]
}, CA = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, VA = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, EA = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, SA = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, IA = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, kA = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, AA = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, TA = {
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
}, xA = {
  ordinalNumber: _A({
    matchPattern: gA,
    parsePattern: $A,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Ca({
    matchPatterns: yA,
    defaultMatchWidth: "wide",
    parsePatterns: bA,
    defaultParseWidth: "any"
  }),
  quarter: Ca({
    matchPatterns: CA,
    defaultMatchWidth: "wide",
    parsePatterns: VA,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ca({
    matchPatterns: EA,
    defaultMatchWidth: "wide",
    parsePatterns: SA,
    defaultParseWidth: "any"
  }),
  day: Ca({
    matchPatterns: IA,
    defaultMatchWidth: "wide",
    parsePatterns: kA,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ca({
    matchPatterns: AA,
    defaultMatchWidth: "any",
    parsePatterns: TA,
    defaultParseWidth: "any"
  })
};
const LA = xA;
var MA = {
  code: "en-US",
  formatDistance: Xk,
  formatLong: oA,
  formatRelative: sA,
  localize: mA,
  match: LA,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const Rg = MA;
var DA = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, NA = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, OA = /^'([^]*?)'?$/, BA = /''/g, RA = /[a-zA-Z]/;
function PA(e, o, r) {
  var s, a, u, c, f, m, v, g, y, b, N, O, R, B, S, A, T, P;
  Ue(2, arguments);
  var k = String(o), U = Rs(), W = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : U.locale) !== null && s !== void 0 ? s : Rg, Z = Ao((u = (c = (f = (m = r == null ? void 0 : r.firstWeekContainsDate) !== null && m !== void 0 ? m : r == null || (v = r.locale) === null || v === void 0 || (g = v.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && f !== void 0 ? f : U.firstWeekContainsDate) !== null && c !== void 0 ? c : (y = U.locale) === null || y === void 0 || (b = y.options) === null || b === void 0 ? void 0 : b.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(Z >= 1 && Z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var Le = Ao((N = (O = (R = (B = r == null ? void 0 : r.weekStartsOn) !== null && B !== void 0 ? B : r == null || (S = r.locale) === null || S === void 0 || (A = S.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && R !== void 0 ? R : U.weekStartsOn) !== null && O !== void 0 ? O : (T = U.locale) === null || T === void 0 || (P = T.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && N !== void 0 ? N : 0);
  if (!(Le >= 0 && Le <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!W.localize)
    throw new RangeError("locale must contain localize property");
  if (!W.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var he = wt(e);
  if (!Tk(he))
    throw new RangeError("Invalid time value");
  var ke = Pf(he), Ee = xk(he, ke), We = {
    firstWeekContainsDate: Z,
    weekStartsOn: Le,
    locale: W,
    _originalDate: he
  }, ze = k.match(NA).map(function(ge) {
    var Ze = ge[0];
    if (Ze === "p" || Ze === "P") {
      var Qe = qk[Ze];
      return Qe(ge, W.formatLong);
    }
    return ge;
  }).join("").match(DA).map(function(ge) {
    if (ge === "''")
      return "'";
    var Ze = ge[0];
    if (Ze === "'")
      return FA(ge);
    var Qe = Wk[Ze];
    if (Qe)
      return !(r != null && r.useAdditionalWeekYearTokens) && Zk(ge) && ww(ge, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && jk(ge) && ww(ge, o, String(e)), Qe(Ee, ge, W.localize, We);
    if (Ze.match(RA))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ze + "`");
    return ge;
  }).join("");
  return ze;
}
function FA(e) {
  var o = e.match(OA);
  return o ? o[1].replace(BA, "'") : e;
}
function Pg(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function UA(e) {
  return Pg({}, e);
}
var vw = 1e3 * 60, Fu = 60 * 24, _w = Fu * 30, gw = Fu * 365;
function tc(e, o, r) {
  var s, a, u;
  Ue(2, arguments);
  var c = Rs(), f = (s = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : Rg;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var m = kk(e, o);
  if (isNaN(m))
    throw new RangeError("Invalid time value");
  var v = Pg(UA(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: m
  }), g, y;
  m > 0 ? (g = wt(o), y = wt(e)) : (g = wt(e), y = wt(o));
  var b = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), N;
  if (b === "floor")
    N = Math.floor;
  else if (b === "ceil")
    N = Math.ceil;
  else if (b === "round")
    N = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var O = y.getTime() - g.getTime(), R = O / vw, B = Pf(y) - Pf(g), S = (O - B) / vw, A = r == null ? void 0 : r.unit, T;
  if (A ? T = String(A) : R < 1 ? T = "second" : R < 60 ? T = "minute" : R < Fu ? T = "hour" : S < _w ? T = "day" : S < gw ? T = "month" : T = "year", T === "second") {
    var P = N(O / 1e3);
    return f.formatDistance("xSeconds", P, v);
  } else if (T === "minute") {
    var k = N(R);
    return f.formatDistance("xMinutes", k, v);
  } else if (T === "hour") {
    var U = N(R / 60);
    return f.formatDistance("xHours", U, v);
  } else if (T === "day") {
    var W = N(S / Fu);
    return f.formatDistance("xDays", W, v);
  } else if (T === "month") {
    var Z = N(S / _w);
    return Z === 12 && A !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", Z, v);
  } else if (T === "year") {
    var Le = N(S / gw);
    return f.formatDistance("xYears", Le, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function WA(e, o, r) {
  Ue(2, arguments);
  var s = dw(e, r), a = dw(o, r);
  return s.getTime() === a.getTime();
}
function HA(e, o) {
  return Ue(1, arguments), WA(e, Date.now(), o);
}
function zA(e) {
  return Ue(1, arguments), Dg(e, Date.now());
}
function qA(e, o) {
  Ue(2, arguments);
  var r = Ao(o);
  return Ek(e, -r);
}
function GA(e) {
  return Ue(1, arguments), Dg(e, qA(Date.now(), 1));
}
/*! @license DOMPurify 3.4.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.11/LICENSE */
function $w(e, o) {
  (o == null || o > e.length) && (o = e.length);
  for (var r = 0, s = Array(o); r < o; r++)
    s[r] = e[r];
  return s;
}
function YA(e) {
  if (Array.isArray(e))
    return e;
}
function jA(e, o) {
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
function ZA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KA(e, o) {
  return YA(e) || jA(e, o) || JA(e, o) || ZA();
}
function JA(e, o) {
  if (e) {
    if (typeof e == "string")
      return $w(e, o);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? $w(e, o) : void 0;
  }
}
const Fg = Object.entries, yw = Object.setPrototypeOf, XA = Object.isFrozen, QA = Object.getPrototypeOf, eT = Object.getOwnPropertyDescriptor;
let At = Object.freeze, Tt = Object.seal, Cs = Object.create, Ug = typeof Reflect < "u" && Reflect, Ff = Ug.apply, Uf = Ug.construct;
At || (At = function(o) {
  return o;
});
Tt || (Tt = function(o) {
  return o;
});
Ff || (Ff = function(o, r) {
  for (var s = arguments.length, a = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
    a[u - 2] = arguments[u];
  return o.apply(r, a);
});
Uf || (Uf = function(o) {
  for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    s[a - 1] = arguments[a];
  return new o(...s);
});
const Va = ut(Array.prototype.forEach), tT = ut(Array.prototype.lastIndexOf), bw = ut(Array.prototype.pop), us = ut(Array.prototype.push), nT = ut(Array.prototype.splice), Pr = Array.isArray, Za = ut(String.prototype.toLowerCase), Wd = ut(String.prototype.toString), Cw = ut(String.prototype.match), Ea = ut(String.prototype.replace), Vw = ut(String.prototype.indexOf), oT = ut(String.prototype.trim), rT = ut(Number.prototype.toString), iT = ut(Boolean.prototype.toString), Ew = typeof BigInt > "u" ? null : ut(BigInt.prototype.toString), Sw = typeof Symbol > "u" ? null : ut(Symbol.prototype.toString), _t = ut(Object.prototype.hasOwnProperty), Sa = ut(Object.prototype.toString), St = ut(RegExp.prototype.test), hi = sT(TypeError);
function ut(e) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var r = arguments.length, s = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
      s[a - 1] = arguments[a];
    return Ff(e, o, s);
  };
}
function sT(e) {
  return function() {
    for (var o = arguments.length, r = new Array(o), s = 0; s < o; s++)
      r[s] = arguments[s];
    return Uf(e, r);
  };
}
function ye(e, o) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Za;
  if (yw && yw(e, null), !Pr(o))
    return e;
  let s = o.length;
  for (; s--; ) {
    let a = o[s];
    if (typeof a == "string") {
      const u = r(a);
      u !== a && (XA(o) || (o[s] = u), a = u);
    }
    e[a] = !0;
  }
  return e;
}
function aT(e) {
  for (let o = 0; o < e.length; o++)
    _t(e, o) || (e[o] = null);
  return e;
}
function Qt(e) {
  const o = Cs(null);
  for (const s of Fg(e)) {
    var r = KA(s, 2);
    const a = r[0], u = r[1];
    _t(e, a) && (Pr(u) ? o[a] = aT(u) : u && typeof u == "object" && u.constructor === Object ? o[a] = Qt(u) : o[a] = u);
  }
  return o;
}
function lT(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return rT(e);
    case "boolean":
      return iT(e);
    case "bigint":
      return Ew ? Ew(e) : "0";
    case "symbol":
      return Sw ? Sw(e) : "Symbol()";
    case "undefined":
      return Sa(e);
    case "function":
    case "object": {
      if (e === null)
        return Sa(e);
      const o = e, r = Eo(o, "toString");
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
function Eo(e, o) {
  for (; e !== null; ) {
    const s = eT(e, o);
    if (s) {
      if (s.get)
        return ut(s.get);
      if (typeof s.value == "function")
        return ut(s.value);
    }
    e = QA(e);
  }
  function r() {
    return null;
  }
  return r;
}
function uT(e) {
  try {
    return St(e, ""), !0;
  } catch {
    return !1;
  }
}
const Iw = At(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Hd = At(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), zd = At(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cT = At(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), qd = At(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dT = At(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), kw = At(["#text"]), Aw = At(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), Gd = At(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Tw = At(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), ru = At(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), fT = Tt(/{{[\w\W]*|^[\w\W]*}}/g), pT = Tt(/<%[\w\W]*|^[\w\W]*%>/g), hT = Tt(/\${[\w\W]*/g), mT = Tt(/^data-[\-\w.\u00B7-\uFFFF]+$/), wT = Tt(/^aria-[\-\w]+$/), xw = Tt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
), vT = Tt(/^(?:\w+script|data):/i), _T = Tt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
), gT = Tt(/^html$/i), $T = Tt(/^[a-z][.\w]*(-[.\w]+)+$/i), Lw = Tt(/<[/\w!]/g), yT = Tt(/<[/\w]/g), bT = Tt(/<\/no(script|embed|frames)/i), CT = Tt(/\/>/i), Co = {
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
}, VT = function() {
  return typeof window > "u" ? null : window;
}, ET = function(o, r) {
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
}, Mw = function() {
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
}, kr = function(o, r, s, a) {
  return _t(o, r) && Pr(o[r]) ? ye(a.base ? Qt(a.base) : {}, o[r], a.transform) : s;
};
function Wg() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : VT();
  const o = (q) => Wg(q);
  if (o.version = "3.4.11", o.removed = [], !e || !e.document || e.document.nodeType !== Co.document || !e.Element)
    return o.isSupported = !1, o;
  let r = e.document;
  const s = r, a = s.currentScript;
  e.DocumentFragment;
  const u = e.HTMLTemplateElement, c = e.Node, f = e.Element, m = e.NodeFilter, v = e.NamedNodeMap;
  v === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const g = e.DOMParser, y = e.trustedTypes, b = f.prototype, N = Eo(b, "cloneNode"), O = Eo(b, "remove"), R = Eo(b, "nextSibling"), B = Eo(b, "childNodes"), S = Eo(b, "parentNode"), A = Eo(b, "shadowRoot"), T = Eo(b, "attributes"), P = c && c.prototype ? Eo(c.prototype, "nodeType") : null, k = c && c.prototype ? Eo(c.prototype, "nodeName") : null;
  if (typeof u == "function") {
    const q = r.createElement("template");
    q.content && q.content.ownerDocument && (r = q.content.ownerDocument);
  }
  let U, W = "", Z, Le = !1, he = 0;
  const ke = function() {
    if (he > 0)
      throw hi('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, Ee = function(w) {
    ke(), he++;
    try {
      return U.createHTML(w);
    } finally {
      he--;
    }
  }, We = function(w) {
    ke(), he++;
    try {
      return U.createScriptURL(w);
    } finally {
      he--;
    }
  }, ze = function() {
    return Le || (Z = ET(y, a), Le = !0), Z;
  }, ge = r, Ze = ge.implementation, Qe = ge.createNodeIterator, qe = ge.createDocumentFragment, tn = ge.getElementsByTagName, Lo = s.importNode;
  let $e = Mw();
  o.isSupported = typeof Fg == "function" && typeof S == "function" && Ze && Ze.createHTMLDocument !== void 0;
  const Js = fT, Xs = pT, Pi = hT, $t = mT, zt = wT, nn = vT, vn = _T, on = $T;
  let Yr = xw, Me = null;
  const Mo = ye({}, [...Iw, ...Hd, ...zd, ...qd, ...kw]);
  let Re = null;
  const Mt = ye({}, [...Aw, ...Gd, ...Tw, ...ru]);
  let be = Object.seal(Cs(null, {
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
  })), Mn = null, yt = null;
  const Dt = Object.seal(Cs(null, {
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
  let jr = !0, Dn = !0, ct = !1, mo = !0, dt = !1, Do = !0, qt = !1, Zr = !1, Jn = null, _n = null, wo = !1, gn = !1, Xn = !1, Qn = !1, No = !0, Oo = !1;
  const Bo = "user-content-";
  let vo = !0, _o = !1, eo = {}, Gt = null;
  const rr = ye({}, [
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
  let ir = null;
  const sr = ye({}, ["audio", "video", "img", "source", "image", "track"]);
  let ar = null;
  const Kr = ye({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ro = "http://www.w3.org/1998/Math/MathML", Po = "http://www.w3.org/2000/svg", Nt = "http://www.w3.org/1999/xhtml";
  let to = Nt, lr = !1, ur = null;
  const cr = ye({}, [Ro, Po, Nt], Wd), Jr = At(["mi", "mo", "mn", "ms", "mtext"]);
  let go = ye({}, Jr);
  const Xr = At(["annotation-xml"]);
  let dr = ye({}, Xr);
  const Fi = ye({}, ["title", "style", "font", "a", "script"]);
  let oe = null;
  const J = ["application/xhtml+xml", "text/html"], De = "text/html";
  let Q = null, rn = null;
  const Qr = r.createElement("form"), ei = function(w) {
    return w instanceof RegExp || w instanceof Function;
  }, fr = function() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (rn && rn === w)
      return;
    (!w || typeof w != "object") && (w = {}), w = Qt(w), oe = J.indexOf(w.PARSER_MEDIA_TYPE) === -1 ? De : w.PARSER_MEDIA_TYPE, Q = oe === "application/xhtml+xml" ? Wd : Za, Me = kr(w, "ALLOWED_TAGS", Mo, {
      transform: Q
    }), Re = kr(w, "ALLOWED_ATTR", Mt, {
      transform: Q
    }), ur = kr(w, "ALLOWED_NAMESPACES", cr, {
      transform: Wd
    }), ar = kr(w, "ADD_URI_SAFE_ATTR", Kr, {
      transform: Q,
      base: Kr
    }), ir = kr(w, "ADD_DATA_URI_TAGS", sr, {
      transform: Q,
      base: sr
    }), Gt = kr(w, "FORBID_CONTENTS", rr, {
      transform: Q
    }), Mn = kr(w, "FORBID_TAGS", Qt({}), {
      transform: Q
    }), yt = kr(w, "FORBID_ATTR", Qt({}), {
      transform: Q
    }), eo = _t(w, "USE_PROFILES") ? w.USE_PROFILES && typeof w.USE_PROFILES == "object" ? Qt(w.USE_PROFILES) : w.USE_PROFILES : !1, jr = w.ALLOW_ARIA_ATTR !== !1, Dn = w.ALLOW_DATA_ATTR !== !1, ct = w.ALLOW_UNKNOWN_PROTOCOLS || !1, mo = w.ALLOW_SELF_CLOSE_IN_ATTR !== !1, dt = w.SAFE_FOR_TEMPLATES || !1, Do = w.SAFE_FOR_XML !== !1, qt = w.WHOLE_DOCUMENT || !1, gn = w.RETURN_DOM || !1, Xn = w.RETURN_DOM_FRAGMENT || !1, Qn = w.RETURN_TRUSTED_TYPE || !1, wo = w.FORCE_BODY || !1, No = w.SANITIZE_DOM !== !1, Oo = w.SANITIZE_NAMED_PROPS || !1, vo = w.KEEP_CONTENT !== !1, _o = w.IN_PLACE || !1, Yr = uT(w.ALLOWED_URI_REGEXP) ? w.ALLOWED_URI_REGEXP : xw, to = typeof w.NAMESPACE == "string" ? w.NAMESPACE : Nt, go = _t(w, "MATHML_TEXT_INTEGRATION_POINTS") && w.MATHML_TEXT_INTEGRATION_POINTS && typeof w.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Qt(w.MATHML_TEXT_INTEGRATION_POINTS) : ye({}, Jr), dr = _t(w, "HTML_INTEGRATION_POINTS") && w.HTML_INTEGRATION_POINTS && typeof w.HTML_INTEGRATION_POINTS == "object" ? Qt(w.HTML_INTEGRATION_POINTS) : ye({}, Xr);
    const E = _t(w, "CUSTOM_ELEMENT_HANDLING") && w.CUSTOM_ELEMENT_HANDLING && typeof w.CUSTOM_ELEMENT_HANDLING == "object" ? Qt(w.CUSTOM_ELEMENT_HANDLING) : Cs(null);
    if (be = Cs(null), _t(E, "tagNameCheck") && ei(E.tagNameCheck) && (be.tagNameCheck = E.tagNameCheck), _t(E, "attributeNameCheck") && ei(E.attributeNameCheck) && (be.attributeNameCheck = E.attributeNameCheck), _t(E, "allowCustomizedBuiltInElements") && typeof E.allowCustomizedBuiltInElements == "boolean" && (be.allowCustomizedBuiltInElements = E.allowCustomizedBuiltInElements), Tt(be), dt && (Dn = !1), Xn && (gn = !0), eo && (Me = ye({}, kw), Re = Cs(null), eo.html === !0 && (ye(Me, Iw), ye(Re, Aw)), eo.svg === !0 && (ye(Me, Hd), ye(Re, Gd), ye(Re, ru)), eo.svgFilters === !0 && (ye(Me, zd), ye(Re, Gd), ye(Re, ru)), eo.mathMl === !0 && (ye(Me, qd), ye(Re, Tw), ye(Re, ru))), Dt.tagCheck = null, Dt.attributeCheck = null, _t(w, "ADD_TAGS") && (typeof w.ADD_TAGS == "function" ? Dt.tagCheck = w.ADD_TAGS : Pr(w.ADD_TAGS) && (Me === Mo && (Me = Qt(Me)), ye(Me, w.ADD_TAGS, Q))), _t(w, "ADD_ATTR") && (typeof w.ADD_ATTR == "function" ? Dt.attributeCheck = w.ADD_ATTR : Pr(w.ADD_ATTR) && (Re === Mt && (Re = Qt(Re)), ye(Re, w.ADD_ATTR, Q))), _t(w, "ADD_URI_SAFE_ATTR") && Pr(w.ADD_URI_SAFE_ATTR) && ye(ar, w.ADD_URI_SAFE_ATTR, Q), _t(w, "FORBID_CONTENTS") && Pr(w.FORBID_CONTENTS) && (Gt === rr && (Gt = Qt(Gt)), ye(Gt, w.FORBID_CONTENTS, Q)), _t(w, "ADD_FORBID_CONTENTS") && Pr(w.ADD_FORBID_CONTENTS) && (Gt === rr && (Gt = Qt(Gt)), ye(Gt, w.ADD_FORBID_CONTENTS, Q)), vo && (Me["#text"] = !0), qt && ye(Me, ["html", "head", "body"]), Me.table && (ye(Me, ["tbody"]), delete Mn.tbody), w.TRUSTED_TYPES_POLICY) {
      if (typeof w.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw hi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof w.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw hi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const H = U;
      U = w.TRUSTED_TYPES_POLICY;
      try {
        W = Ee("");
      } catch (j) {
        throw U = H, j;
      }
    } else
      w.TRUSTED_TYPES_POLICY === null ? (U = void 0, W = "") : (U === void 0 && (U = ze()), U && typeof W == "string" && (W = Ee("")));
    At && At(w), rn = w;
  }, ti = ye({}, [...Hd, ...zd, ...cT]), ni = ye({}, [...qd, ...dT]), Ui = function(w, E, H) {
    return E.namespaceURI === Nt ? w === "svg" : E.namespaceURI === Ro ? w === "svg" && (H === "annotation-xml" || go[H]) : Boolean(ti[w]);
  }, Wi = function(w, E, H) {
    return E.namespaceURI === Nt ? w === "math" : E.namespaceURI === Po ? w === "math" && dr[H] : Boolean(ni[w]);
  }, Fo = function(w, E, H) {
    return E.namespaceURI === Po && !dr[H] || E.namespaceURI === Ro && !go[H] ? !1 : !ni[w] && (Fi[w] || !ti[w]);
  }, Hi = function(w) {
    let E = S(w);
    (!E || !E.tagName) && (E = {
      namespaceURI: to,
      tagName: "template"
    });
    const H = Za(w.tagName), j = Za(E.tagName);
    return ur[w.namespaceURI] ? w.namespaceURI === Po ? Ui(H, E, j) : w.namespaceURI === Ro ? Wi(H, E, j) : w.namespaceURI === Nt ? Fo(H, E, j) : !!(oe === "application/xhtml+xml" && ur[w.namespaceURI]) : !1;
  }, Ot = function(w) {
    us(o.removed, {
      element: w
    });
    try {
      S(w).removeChild(w);
    } catch {
      if (O(w), !S(w))
        throw hi("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, oi = function(w) {
    const E = B(w);
    if (E) {
      const j = [];
      Va(E, (ae) => {
        us(j, ae);
      }), Va(j, (ae) => {
        try {
          O(ae);
        } catch {
        }
      });
    }
    const H = T(w);
    if (H)
      for (let j = H.length - 1; j >= 0; --j) {
        const ae = H[j], ve = ae && ae.name;
        if (typeof ve == "string")
          try {
            w.removeAttribute(ve);
          } catch {
          }
      }
  }, Nn = function(w, E) {
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
      if (gn || Xn)
        try {
          Ot(E);
        } catch {
        }
      else
        try {
          E.setAttribute(w, "");
        } catch {
        }
  }, zi = function(w) {
    const E = T(w);
    if (!!E)
      for (let H = E.length - 1; H >= 0; --H) {
        const j = E[H], ae = j && j.name;
        if (!(typeof ae != "string" || Re[Q(ae)]))
          try {
            w.removeAttribute(ae);
          } catch {
          }
      }
  }, ri = function(w) {
    const E = [w];
    for (; E.length > 0; ) {
      const H = E.pop();
      (P ? P(H) : H.nodeType) === Co.element && zi(H);
      const ae = B(H);
      if (ae)
        for (let ve = ae.length - 1; ve >= 0; --ve)
          E.push(ae[ve]);
    }
  }, pr = function(w) {
    let E = null, H = null;
    if (wo)
      w = "<remove></remove>" + w;
    else {
      const ve = Cw(w, /^[\r\n\t ]+/);
      H = ve && ve[0];
    }
    oe === "application/xhtml+xml" && to === Nt && (w = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + w + "</body></html>");
    const j = U ? Ee(w) : w;
    if (to === Nt)
      try {
        E = new g().parseFromString(j, oe);
      } catch {
      }
    if (!E || !E.documentElement) {
      E = Ze.createDocument(to, "template", null);
      try {
        E.documentElement.innerHTML = lr ? W : j;
      } catch {
      }
    }
    const ae = E.body || E.documentElement;
    return w && H && ae.insertBefore(r.createTextNode(H), ae.childNodes[0] || null), to === Nt ? tn.call(E, qt ? "html" : "body")[0] : qt ? E.documentElement : ae;
  }, hr = function(w) {
    return Qe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Uo = function(w) {
    return w = Ea(w, Js, " "), w = Ea(w, Xs, " "), w = Ea(w, Pi, " "), w;
  }, Qs = function(w) {
    var E;
    w.normalize();
    const H = Qe.call(
      w.ownerDocument || w,
      w,
      m.SHOW_TEXT | m.SHOW_COMMENT | m.SHOW_CDATA_SECTION | m.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let j = H.nextNode();
    for (; j; )
      j.data = Uo(j.data), j = H.nextNode();
    const ae = (E = w.querySelectorAll) === null || E === void 0 ? void 0 : E.call(w, "template");
    ae && Va(ae, (ve) => {
      mr(ve.content) && Qs(ve.content);
    });
  }, qi = function(w) {
    const E = k ? k(w) : null;
    return typeof E != "string" || Q(E) !== "form" ? !1 : typeof w.nodeName != "string" || typeof w.textContent != "string" || typeof w.removeChild != "function" || w.attributes !== T(w) || typeof w.removeAttribute != "function" || typeof w.setAttribute != "function" || typeof w.namespaceURI != "string" || typeof w.insertBefore != "function" || typeof w.hasChildNodes != "function" || w.nodeType !== P(w) || w.childNodes !== B(w);
  }, mr = function(w) {
    if (!P || typeof w != "object" || w === null)
      return !1;
    try {
      return P(w) === Co.documentFragment;
    } catch {
      return !1;
    }
  }, wr = function(w) {
    if (!P || typeof w != "object" || w === null)
      return !1;
    try {
      return typeof P(w) == "number";
    } catch {
      return !1;
    }
  };
  function On(q, w, E) {
    q.length !== 0 && Va(q, (H) => {
      H.call(o, w, E, rn);
    });
  }
  const wl = function(w, E) {
    return !!(Do && w.hasChildNodes() && !wr(w.firstElementChild) && St(Lw, w.textContent) && St(Lw, w.innerHTML) || Do && w.namespaceURI === Nt && E === "style" && wr(w.firstElementChild) || w.nodeType === Co.processingInstruction || Do && w.nodeType === Co.comment && St(yT, w.data));
  }, ea = function(w, E) {
    if (!Mn[E] && na(E) && (be.tagNameCheck instanceof RegExp && St(be.tagNameCheck, E) || be.tagNameCheck instanceof Function && be.tagNameCheck(E)))
      return !1;
    if (vo && !Gt[E]) {
      const H = S(w), j = B(w);
      if (j && H) {
        const ae = j.length;
        for (let ve = ae - 1; ve >= 0; --ve) {
          const nt = _o ? j[ve] : N(j[ve], !0);
          H.insertBefore(nt, R(w));
        }
      }
    }
    return Ot(w), !0;
  }, vl = function(w) {
    if (On($e.beforeSanitizeElements, w, null), qi(w))
      return Ot(w), !0;
    const E = Q(k ? k(w) : w.nodeName);
    if (On($e.uponSanitizeElement, w, {
      tagName: E,
      allowedTags: Me
    }), wl(w, E))
      return Ot(w), !0;
    if (Mn[E] || !(Dt.tagCheck instanceof Function && Dt.tagCheck(E)) && !Me[E])
      return ea(w, E);
    if ((P ? P(w) : w.nodeType) === Co.element && !Hi(w) || (E === "noscript" || E === "noembed" || E === "noframes") && St(bT, w.innerHTML))
      return Ot(w), !0;
    if (dt && w.nodeType === Co.text) {
      const j = Uo(w.textContent);
      w.textContent !== j && (us(o.removed, {
        element: w.cloneNode()
      }), w.textContent = j);
    }
    return On($e.afterSanitizeElements, w, null), !1;
  }, ta = function(w, E, H) {
    if (yt[E] || No && (E === "id" || E === "name") && (H in r || H in Qr))
      return !1;
    const j = Re[E] || Dt.attributeCheck instanceof Function && Dt.attributeCheck(E, w);
    if (!(Dn && St($t, E))) {
      if (!(jr && St(zt, E))) {
        if (j) {
          if (!ar[E]) {
            if (!St(Yr, Ea(H, vn, ""))) {
              if (!((E === "src" || E === "xlink:href" || E === "href") && w !== "script" && Vw(H, "data:") === 0 && ir[w])) {
                if (!(ct && !St(nn, Ea(H, vn, "")))) {
                  if (H)
                    return !1;
                }
              }
            }
          }
        } else if (!(na(w) && (be.tagNameCheck instanceof RegExp && St(be.tagNameCheck, w) || be.tagNameCheck instanceof Function && be.tagNameCheck(w)) && (be.attributeNameCheck instanceof RegExp && St(be.attributeNameCheck, E) || be.attributeNameCheck instanceof Function && be.attributeNameCheck(E, w)) || E === "is" && be.allowCustomizedBuiltInElements && (be.tagNameCheck instanceof RegExp && St(be.tagNameCheck, H) || be.tagNameCheck instanceof Function && be.tagNameCheck(H))))
          return !1;
      }
    }
    return !0;
  }, Gi = ye({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), na = function(w) {
    return !Gi[Za(w)] && St(on, w);
  }, _c = function(w, E, H, j) {
    if (U && typeof y == "object" && typeof y.getAttributeType == "function" && !H)
      switch (y.getAttributeType(w, E)) {
        case "TrustedHTML":
          return Ee(j);
        case "TrustedScriptURL":
          return We(j);
      }
    return j;
  }, _l = function(w, E, H, j) {
    try {
      H ? w.setAttributeNS(H, E, j) : w.setAttribute(E, j), qi(w) ? Ot(w) : bw(o.removed);
    } catch {
      Nn(E, w);
    }
  }, oa = function(w) {
    On($e.beforeSanitizeAttributes, w, null);
    const E = w.attributes;
    if (!E || qi(w))
      return;
    const H = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let j = E.length;
    const ae = Q(w.nodeName);
    for (; j--; ) {
      const ve = E[j], nt = ve.name, Ke = ve.namespaceURI, Yt = ve.value, sn = Q(nt), ia = Yt;
      let bt = nt === "value" ? ia : oT(ia);
      if (H.attrName = sn, H.attrValue = bt, H.keepAttr = !0, H.forceKeepAttr = void 0, On($e.uponSanitizeAttribute, w, H), bt = H.attrValue, Oo && (sn === "id" || sn === "name") && Vw(bt, Bo) !== 0 && (Nn(nt, w), bt = Bo + bt), Do && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, bt)) {
        Nn(nt, w);
        continue;
      }
      if (sn === "attributename" && Cw(bt, "href")) {
        Nn(nt, w);
        continue;
      }
      if (!H.forceKeepAttr) {
        if (!H.keepAttr) {
          Nn(nt, w);
          continue;
        }
        if (!mo && St(CT, bt)) {
          Nn(nt, w);
          continue;
        }
        if (dt && (bt = Uo(bt)), !ta(ae, sn, bt)) {
          Nn(nt, w);
          continue;
        }
        bt = _c(ae, sn, Ke, bt), bt !== ia && _l(w, nt, Ke, bt);
      }
    }
    On($e.afterSanitizeAttributes, w, null);
  }, vr = function(w) {
    let E = null;
    const H = hr(w);
    for (On($e.beforeSanitizeShadowDOM, w, null); E = H.nextNode(); )
      if (On($e.uponSanitizeShadowNode, E, null), vl(E), oa(E), mr(E.content) && vr(E.content), (P ? P(E) : E.nodeType) === Co.element) {
        const ae = A(E);
        mr(ae) && (ra(ae), vr(ae));
      }
    On($e.afterSanitizeShadowDOM, w, null);
  }, ra = function(w) {
    const E = [{
      node: w,
      shadow: null
    }];
    for (; E.length > 0; ) {
      const H = E.pop();
      if (H.shadow) {
        vr(H.shadow);
        continue;
      }
      const j = H.node, ve = (P ? P(j) : j.nodeType) === Co.element, nt = B(j);
      if (nt)
        for (let Ke = nt.length - 1; Ke >= 0; --Ke)
          E.push({
            node: nt[Ke],
            shadow: null
          });
      if (ve) {
        const Ke = k ? k(j) : null;
        if (typeof Ke == "string" && Q(Ke) === "template") {
          const Yt = j.content;
          mr(Yt) && E.push({
            node: Yt,
            shadow: null
          });
        }
      }
      if (ve) {
        const Ke = A(j);
        mr(Ke) && E.push({
          node: null,
          shadow: Ke
        }, {
          node: Ke,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(q) {
    let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = null, H = null, j = null, ae = null;
    if (lr = !q, lr && (q = "<!-->"), typeof q != "string" && !wr(q) && (q = lT(q), typeof q != "string"))
      throw hi("dirty is not a string, aborting");
    if (!o.isSupported)
      return q;
    Zr ? (Me = Jn, Re = _n) : fr(w), ($e.uponSanitizeElement.length > 0 || $e.uponSanitizeAttribute.length > 0) && (Me = Qt(Me)), $e.uponSanitizeAttribute.length > 0 && (Re = Qt(Re)), o.removed = [];
    const ve = _o && typeof q != "string" && wr(q);
    if (ve) {
      const Yt = k ? k(q) : q.nodeName;
      if (typeof Yt == "string") {
        const sn = Q(Yt);
        if (!Me[sn] || Mn[sn])
          throw hi("root node is forbidden and cannot be sanitized in-place");
      }
      if (qi(q))
        throw hi("root node is clobbered and cannot be sanitized in-place");
      try {
        ra(q);
      } catch (sn) {
        throw oi(q), sn;
      }
    } else if (wr(q))
      E = pr("<!---->"), H = E.ownerDocument.importNode(q, !0), H.nodeType === Co.element && H.nodeName === "BODY" || H.nodeName === "HTML" ? E = H : E.appendChild(H), ra(H);
    else {
      if (!gn && !dt && !qt && q.indexOf("<") === -1)
        return U && Qn ? Ee(q) : q;
      if (E = pr(q), !E)
        return gn ? null : Qn ? W : "";
    }
    E && wo && Ot(E.firstChild);
    const nt = hr(ve ? q : E);
    try {
      for (; j = nt.nextNode(); )
        vl(j), oa(j), mr(j.content) && vr(j.content);
    } catch (Yt) {
      throw ve && oi(q), Yt;
    }
    if (ve)
      return Va(o.removed, (Yt) => {
        Yt.element && ri(Yt.element);
      }), dt && Qs(q), q;
    if (gn) {
      if (dt && Qs(E), Xn)
        for (ae = qe.call(E.ownerDocument); E.firstChild; )
          ae.appendChild(E.firstChild);
      else
        ae = E;
      return (Re.shadowroot || Re.shadowrootmode) && (ae = Lo.call(s, ae, !0)), ae;
    }
    let Ke = qt ? E.outerHTML : E.innerHTML;
    return qt && Me["!doctype"] && E.ownerDocument && E.ownerDocument.doctype && E.ownerDocument.doctype.name && St(gT, E.ownerDocument.doctype.name) && (Ke = "<!DOCTYPE " + E.ownerDocument.doctype.name + `>
` + Ke), dt && (Ke = Uo(Ke)), U && Qn ? Ee(Ke) : Ke;
  }, o.setConfig = function() {
    let q = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fr(q), Zr = !0, Jn = Me, _n = Re;
  }, o.clearConfig = function() {
    rn = null, Zr = !1, Jn = null, _n = null, U = Z, W = "";
  }, o.isValidAttribute = function(q, w, E) {
    rn || fr({});
    const H = Q(q), j = Q(w);
    return ta(H, j, E);
  }, o.addHook = function(q, w) {
    typeof w == "function" && (!_t($e, q) || us($e[q], w));
  }, o.removeHook = function(q, w) {
    if (!!_t($e, q)) {
      if (w !== void 0) {
        const E = tT($e[q], w);
        return E === -1 ? void 0 : nT($e[q], E, 1)[0];
      }
      return bw($e[q]);
    }
  }, o.removeHooks = function(q) {
    !_t($e, q) || ($e[q] = []);
  }, o.removeAllHooks = function() {
    $e = Mw();
  }, o;
}
var ST = Wg();
const To = (e) => {
  let o = "";
  if (e)
    try {
      o = PA(new Date(e), kt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, Hg = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), zg = (e) => ST.sanitize(e), qg = (e, o) => {
  const r = Hg(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = r.length > o ? "..." : "";
  return r.substring(0, o) + s;
}, IT = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (s) => zA(s.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (s) => GA(s.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (s) => HA(s.firstEventTime)
      );
      break;
  }
  return r;
}, nc = "/alec", Gg = "/alec/engine/configuration", Yg = "/alec/llm/configuration", kT = "/alec/llm/validate", jg = "/alec/llm/suggestions", AT = "/alec/llm/usage", Zg = "/alec/situation", TT = async () => {
  try {
    const e = await Lt.get(`${Gg}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, xT = async (e) => {
  try {
    return (await Lt.post(Gg, e)).status === 200;
  } catch {
    return !1;
  }
}, LT = async () => {
  try {
    const e = await Lt.get(Yg);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, MT = async (e) => {
  try {
    const o = await Lt.post(Yg, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, DT = async (e) => {
  try {
    const o = await Lt.post(kT, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, Kg = async (e) => {
  try {
    const o = await Lt.get(`${jg}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, NT = async (e) => {
  try {
    const o = await Lt.post(
      `${jg}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, OT = async (e = 30) => {
  try {
    const o = await Lt.get(`${AT}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Jg = async (e, o) => {
  try {
    const r = await Lt.post(`${nc}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == kt.REJECTED.toLowerCase() && r.status === 200 && await xg(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, Dw = async (e, o) => {
  try {
    return (await Lt.delete(`${nc}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, Xg = async (e, o) => {
  try {
    return (await Lt.put(`${nc}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, BT = async (e) => {
  try {
    return (await Lt.post(Zg, e)).status === 200;
  } catch {
    return !1;
  }
}, RT = async () => {
  try {
    return (await Lt.post(`${Zg}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, PT = async () => {
  try {
    return (await Lt.post(`${nc}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, FT = window.Vue.defineComponent, In = window.Vue.unref, Yd = window.Vue.normalizeClass, Io = window.Vue.createElementVNode, mi = window.Vue.toDisplayString, Ar = window.Vue.openBlock, Tr = window.Vue.createElementBlock, Ia = window.Vue.createCommentVNode, Nw = window.Vue.createVNode, Wf = window.Vue.createTextVNode, UT = window.Vue.renderList, WT = window.Vue.Fragment, HT = window.Vue.pushScopeId, zT = window.Vue.popScopeId, up = (e) => (HT("data-v-aab1b2b8"), e = e(), zT(), e), qT = { class: "content" }, GT = { class: "title-row" }, YT = { class: "title" }, jT = ["title"], ZT = {
  key: 1,
  class: "accepted"
}, KT = {
  key: 2,
  class: "rejected"
}, JT = /* @__PURE__ */ up(() => /* @__PURE__ */ Io("span", { class: "info-title" }, " Duration: ", -1)), XT = { key: 0 }, QT = /* @__PURE__ */ up(() => /* @__PURE__ */ Io("span", { class: "info-title" }, " First Event: ", -1)), e2 = { class: "description" }, t2 = /* @__PURE__ */ up(() => /* @__PURE__ */ Io("hr", null, null, -1)), n2 = {
  key: 1,
  class: "count-info"
}, o2 = /* @__PURE__ */ Wf(" Alarms: "), r2 = { class: "info-title" }, i2 = window.Vue.onMounted, s2 = window.Vue.ref, a2 = /* @__PURE__ */ FT({
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
    }, f = s2("none");
    return i2(async () => {
      var v;
      if (((v = r.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const m = await Kg(r.situationInfo.id);
      m && m.status && (f.value = m.status);
    }), (m, v) => {
      var g, y, b;
      return Ar(), Tr("div", {
        onClick: c,
        class: Yd(["card", {
          rejected: r.situationInfo.status == In(a)
        }])
      }, [
        Io("div", {
          class: Yd(["severity-line", [`${(y = (g = r.situationInfo) == null ? void 0 : g.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
        }, null, 2),
        Io("div", qT, [
          Io("div", GT, [
            Io("div", YT, "Situation " + mi((b = r.situationInfo) == null ? void 0 : b.id), 1),
            f.value !== "none" ? (Ar(), Tr("span", {
              key: 0,
              class: Yd(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + mi(f.value === "pending" ? "\u2026" : ""), 11, jT)) : Ia("", !0),
            r.situationInfo.status == In(s) ? (Ar(), Tr("div", ZT, [
              Nw(In(X), {
                icon: In(Ns),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Ia("", !0),
            r.situationInfo.status == In(a) ? (Ar(), Tr("div", KT, [
              Nw(In(X), {
                icon: In(Mg),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Ia("", !0)
          ]),
          Io("div", null, [
            JT,
            Wf(" " + mi(In(tc)(
              In(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Ia("", !0) : (Ar(), Tr("div", XT, [
            QT,
            Wf(mi(In(To)(r.situationInfo.firstEventTime)), 1)
          ])),
          Io("div", e2, mi(In(qg)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          t2,
          r.situationInfo.relatedAlarms ? (Ar(), Tr("div", n2, [
            o2,
            Io("span", r2, mi(r.situationInfo.relatedAlarms.length), 1)
          ])) : Ia("", !0),
          (Ar(!0), Tr(WT, null, UT(In(Be.exports.keys)(
            In(Be.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (N) => (Ar(), Tr("div", {
            class: "info-title",
            key: N
          }, " - " + mi(N), 1))), 128))
        ])
      ], 2);
    };
  }
});
const Qg = /* @__PURE__ */ Ve(a2, [["__scopeId", "data-v-aab1b2b8"]]), l2 = window.Vue.openBlock, u2 = window.Vue.createElementBlock, c2 = window.Vue.createElementVNode;
var d2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const f2 = {}, p2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, h2 = /* @__PURE__ */ c2("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), m2 = [
  h2
];
function w2(e, o) {
  return l2(), u2("svg", p2, m2);
}
var v2 = /* @__PURE__ */ d2(f2, [["render", w2]]);
const _2 = window.Vue.openBlock, g2 = window.Vue.createElementBlock, e1 = window.Vue.createElementVNode;
var $2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const y2 = {}, b2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, C2 = /* @__PURE__ */ e1("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), V2 = /* @__PURE__ */ e1("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), E2 = [
  C2,
  V2
];
function S2(e, o) {
  return _2(), g2("svg", b2, E2);
}
var I2 = /* @__PURE__ */ $2(y2, [["render", S2]]);
const k2 = window.Vue.openBlock, A2 = window.Vue.createElementBlock, T2 = window.Vue.createElementVNode;
var x2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const L2 = {}, M2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, D2 = /* @__PURE__ */ T2("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), N2 = [
  D2
];
function O2(e, o) {
  return k2(), A2("svg", M2, N2);
}
var B2 = /* @__PURE__ */ x2(L2, [["render", O2]]);
const R2 = window.Vue.openBlock, P2 = window.Vue.createElementBlock, F2 = window.Vue.createElementVNode;
var U2 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const W2 = {}, H2 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, z2 = /* @__PURE__ */ F2("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), q2 = [
  z2
];
function G2(e, o) {
  return R2(), P2("svg", H2, q2);
}
var t1 = /* @__PURE__ */ U2(W2, [["render", G2]]);
const Y2 = window.Vue.defineComponent, xr = window.Vue.unref, iu = window.Vue.normalizeClass, su = window.Vue.createVNode, j2 = window.Vue.openBlock, Z2 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const K2 = { class: "paginator" }, J2 = /* @__PURE__ */ Y2({
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
    return (a, u) => (j2(), Z2("div", K2, [
      su(xr(X), {
        icon: xr(v2),
        "aria-hidden": "true",
        class: iu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      su(xr(X), {
        icon: xr(B2),
        "aria-hidden": "true",
        class: iu(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      su(xr(X), {
        icon: xr(t1),
        "aria-hidden": "true",
        class: iu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      su(xr(X), {
        icon: xr(I2),
        "aria-hidden": "true",
        class: iu(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const X2 = /* @__PURE__ */ Ve(J2, [["__scopeId", "data-v-54e14a59"]]);
const Ce = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, Q2 = window.Vue.computed, oc = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((s) => {
    r[`${s}Label`] = Q2(() => e.value[s] ? e.value[s] : o[s]);
  }), r;
};
const Di = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, Ni = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var ex = Object.defineProperty, tx = Object.defineProperties, nx = Object.getOwnPropertyDescriptors, Ow = Object.getOwnPropertySymbols, ox = Object.prototype.hasOwnProperty, rx = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? ex(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Rw = (e, o) => {
  for (var r in o || (o = {}))
    ox.call(o, r) && Bw(e, r, o[r]);
  if (Ow)
    for (var r of Ow(o))
      rx.call(o, r) && Bw(e, r, o[r]);
  return e;
}, ix = (e, o) => tx(e, nx(o));
const sx = window.Vue.defineComponent, ax = window.Vue.h;
var lx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ux = {
  center: {
    type: Boolean,
    default: !1
  }
}, cx = sx({
  props: ux,
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
        this.styles = ix(Rw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Ni(this.failsafe), this.failsafe = Di(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return ax("div", {
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
var Hr = /* @__PURE__ */ lx(cx, [["__scopeId", "data-v-18e2a5db"]]);
const dx = window.Vue.openBlock, fx = window.Vue.createElementBlock, px = window.Vue.createElementVNode;
var hx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const mx = {}, wx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, vx = /* @__PURE__ */ px("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), _x = [
  vx
];
function gx(e, o) {
  return dx(), fx("svg", wx, _x);
}
var Ps = /* @__PURE__ */ hx(mx, [["render", gx]]);
const Pw = window.Vue.computed, $x = (e, o, r) => {
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
const yx = window.Vue.openBlock, bx = window.Vue.createElementBlock, cp = window.Vue.createElementVNode;
var Cx = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Vx = {}, Ex = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Sx = /* @__PURE__ */ cp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Ix = /* @__PURE__ */ cp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), kx = /* @__PURE__ */ cp("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Ax = [
  Sx,
  Ix,
  kx
];
function Tx(e, o) {
  return yx(), bx("svg", Ex, Ax);
}
var xx = /* @__PURE__ */ Cx(Vx, [["render", Tx]]), Lx = Object.defineProperty, Mx = Object.defineProperties, Dx = Object.getOwnPropertyDescriptors, Fw = Object.getOwnPropertySymbols, Nx = Object.prototype.hasOwnProperty, Ox = Object.prototype.propertyIsEnumerable, Uw = (e, o, r) => o in e ? Lx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, n1 = (e, o) => {
  for (var r in o || (o = {}))
    Nx.call(o, r) && Uw(e, r, o[r]);
  if (Fw)
    for (var r of Fw(o))
      Ox.call(o, r) && Uw(e, r, o[r]);
  return e;
}, o1 = (e, o) => Mx(e, Dx(o));
const Fs = window.Vue.defineComponent, il = window.Vue.resolveComponent, ko = window.Vue.openBlock, Es = window.Vue.createElementBlock, Bx = window.Vue.createVNode, Uu = window.Vue.createBlock, Rx = window.Vue.withModifiers, Os = window.Vue.inject, sl = window.Vue.computed, Px = window.Vue.normalizeClass, cs = window.Vue.createElementVNode, Wu = window.Vue.toDisplayString, xu = window.Vue.renderSlot, Ka = window.Vue.createCommentVNode, Fx = window.Vue.withDirectives, Ux = window.Vue.vShow, Hf = window.Vue.ref, Ww = window.Vue.toRef, Hw = window.Vue.nextTick, zf = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const dp = window.Vue.provide, zw = window.Vue.isRef, Wx = window.Vue.onBeforeUnmount;
var cl = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const Hx = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, zx = Fs({
  props: Hx,
  components: {
    FeatherIcon: X
  }
}), qx = ["title"];
function Gx(e, o, r, s, a, u) {
  const c = il("FeatherIcon");
  return ko(), Es("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    Bx(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, qx);
}
var Yx = /* @__PURE__ */ cl(zx, [["render", Gx], ["__scopeId", "data-v-4265058e"]]);
const jx = Fs({
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
    ActionIcon: Yx
  }
});
function Zx(e, o, r, s, a, u) {
  const c = il("ActionIcon");
  return ko(), Uu(c, {
    onClick: o[0] || (o[0] = Rx((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var Kx = /* @__PURE__ */ cl(jx, [["render", Zx]]);
const Jx = Fs({
  computed: {
    errorIcon() {
      return xx;
    }
  },
  components: {
    FeatherIcon: X
  }
});
function Xx(e, o, r, s, a, u) {
  const c = il("FeatherIcon");
  return ko(), Uu(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Qx = /* @__PURE__ */ cl(Jx, [["render", Xx], ["__scopeId", "data-v-0b8faef3"]]);
const eL = {
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
}, tL = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, nL = Fs({
  emits: tL,
  props: eL,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Os("wrapperOptions", {}), o = Os("validationErrorMessage", !1), r = sl(() => e.error ? e.error : o && o.value ? o.value : !1);
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
    ClearIcon: Kx,
    ErrorIcon: Qx
  }
}), oL = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, rL = ["for"], iL = { class: "prefix" }, sL = { class: "post" };
function aL(e, o, r, s, a, u) {
  const c = il("ClearIcon"), f = il("ErrorIcon");
  return ko(), Es("div", {
    class: Px(["feather-input-wrapper-container", e.containerCls])
  }, [
    cs("fieldset", oL, [
      cs("legend", null, Wu(e.label), 1)
    ]),
    cs("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Wu(e.label), 9, rL),
    cs("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...m) => e.handleWrapperClick && e.handleWrapperClick(...m))
    }, [
      cs("div", iL, [
        xu(e.$slots, "pre", {}, void 0, !0)
      ]),
      xu(e.$slots, "default", {}, void 0, !0),
      cs("div", sL, [
        e.showClear && e.computedClearText ? (ko(), Uu(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (m) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Ka("", !0),
        e.error ? (ko(), Uu(f, { key: 1 })) : Ka("", !0),
        xu(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var rc = /* @__PURE__ */ cl(nL, [["render", aL], ["__scopeId", "data-v-4db296db"]]);
const lL = Fs({
  setup() {
    const e = Os("subTextOptions", {}), o = Os("validationErrorMessage", !1), r = sl(() => e.error ? e.error : o && o.value ? o.value : "");
    return o1(n1({}, e), { error: r });
  }
}), uL = { class: "feather-input-sub-text" }, cL = {
  key: 0,
  class: "feather-input-spacer"
}, dL = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, fL = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function pL(e, o, r, s, a, u) {
  return Fx((ko(), Es("div", uL, [
    !e.hint && !e.error.length ? (ko(), Es("div", cL, "\xA0")) : Ka("", !0),
    e.hint && !e.error.length ? (ko(), Es("div", dL, Wu(e.hint), 1)) : Ka("", !0),
    e.error.length > 0 ? (ko(), Es("div", fL, Wu(e.error), 1)) : Ka("", !0),
    xu(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [Ux, !e.inline || e.hint || e.error.length]
  ]);
}
var Us = /* @__PURE__ */ cl(lL, [["render", pL], ["__scopeId", "data-v-8e0ac99e"]]);
const hL = {
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
  props: hL,
  setup(e) {
    const o = Os("featherFormErrors", Hf([])), r = Ww(e, "errorList"), s = sl(() => {
      var g;
      return (g = r.value) != null && g.length ? r.value : o.value;
    }), a = Ww(e, "generalError"), u = (g) => {
      document.getElementById(g).focus();
    }, c = (g) => g.replace(/ \*$/, ""), f = Hf(), m = (g) => `${c(g.label)} - ${g.message}`, v = sl(() => (s.value.length && Hw(() => f.value.focus()), e.headingText(s.value)));
    return zf(a, (g) => {
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
const Ws = (e, o, r, s, a) => {
  const u = Os("featherForm", !1);
  if (s && u && e.value) {
    const c = Hf("");
    dp("validationErrorMessage", c);
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
    return a && zw(a) && zf(a, () => {
      u.runValidation();
    }), zf(e, (g, y) => {
      g && u && u.register(g, v), y && u && u.deregister(y);
    }, { immediate: !0 }), Wx(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Hs = (e) => ({
  inherittedAttrs: sl(() => ({
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
  dp("subTextOptions", e);
}, ic = {
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
}, sc = (e) => {
  dp("wrapperOptions", e);
}, au = window.Vue.ref, mL = window.Vue.watch, wL = window.Vue.watchEffect, qw = window.Vue.computed, jd = window.Vue.provide, r1 = (e, o, r, s, a) => {
  const u = au([]), c = au(), f = au(), m = au();
  wL(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((A) => A.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let A = u.value.filter((T) => !T.disabled);
      A = A.length ? A : u.value, f.value = A[0], f.value.first = !0;
    }
  }), mL(c, (S, A) => {
    A && (A.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, g = qw(() => c.value || f.value), y = $x(g, u, v), b = qw(() => Ce("feather-radio-group"));
  m.value = b.value;
  const { validate: N } = Ws(m, e, r, s, a);
  return jd("register", (S) => {
    u.value = [...u.value, S], m.value === b.value && (m.value = S.id);
  }), jd("select", v), jd("blur", (S) => {
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
    validate: N,
    firstElementId: m,
    groupId: b
  };
};
var vL = Object.defineProperty, _L = Object.defineProperties, gL = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, $L = Object.prototype.hasOwnProperty, yL = Object.prototype.propertyIsEnumerable, Yw = (e, o, r) => o in e ? vL(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, As = (e, o) => {
  for (var r in o || (o = {}))
    $L.call(o, r) && Yw(e, r, o[r]);
  if (Gw)
    for (var r of Gw(o))
      yL.call(o, r) && Yw(e, r, o[r]);
  return e;
}, i1 = (e, o) => _L(e, gL(o));
const zr = window.Vue.defineComponent, Ja = window.Vue.inject, Hu = window.Vue.computed, Xa = window.Vue.ref, Kn = window.Vue.resolveComponent, xn = window.Vue.openBlock, dl = window.Vue.createElementBlock, s1 = window.Vue.normalizeClass, xo = window.Vue.renderSlot, Ur = window.Vue.createBlock, al = window.Vue.createCommentVNode, zu = window.Vue.createElementVNode, bL = window.Vue.withModifiers, ac = window.Vue.createVNode, a1 = window.Vue.toRef, qf = window.Vue.mergeProps, nr = window.Vue.withCtx, CL = window.Vue.h, VL = window.Vue.provide;
var qr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const EL = {
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
}, SL = zr({
  props: EL,
  setup(e) {
    const o = Ja("isCondensed", null), r = Hu(() => o || e.condensed), s = Xa(!1);
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
    FeatherRipple: Hr
  }
}), IL = ["aria-disabled"];
function kL(e, o, r, s, a, u) {
  const c = Kn("FeatherRipple");
  return xn(), dl("div", {
    class: s1(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    xo(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (xn(), Ur(c, { key: 0 })) : al("", !0)
  ], 42, IL);
}
var lc = /* @__PURE__ */ qr(SL, [["render", kL], ["__scopeId", "data-v-44d413dc"]]);
const AL = {
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
}, TL = zr({
  emits: ["delete"],
  props: AL,
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
}), xL = { class: "chip-delete" }, LL = ["aria-label", "aria-describedby"];
function ML(e, o, r, s, a, u) {
  const c = Kn("FeatherIcon");
  return xn(), dl("span", xL, [
    zu("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = bL((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      ac(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, LL)
  ]);
}
var DL = /* @__PURE__ */ qr(TL, [["render", ML], ["__scopeId", "data-v-4bae6cb4"]]);
const NL = zr({
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
}), OL = ["title"];
function BL(e, o, r, s, a, u) {
  return xn(), dl("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    xo(e.$slots, "default", {}, void 0, !0)
  ], 8, OL);
}
var uc = /* @__PURE__ */ qr(NL, [["render", BL], ["__scopeId", "data-v-1a0445b2"]]);
const RL = {}, PL = {
  class: "chip-icon",
  role: "presentation"
};
function FL(e, o) {
  return xn(), dl("span", PL, [
    xo(e.$slots, "default", {}, void 0, !0)
  ]);
}
var cc = /* @__PURE__ */ qr(RL, [["render", FL], ["__scopeId", "data-v-2230176f"]]);
const jw = {
  delete: "Remove"
}, UL = zr({
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
    const r = oc(a1(e, "labels"), jw), s = Hu(() => Ce("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = As({}, o.attrs);
    return e.disabled && delete u.onClick, i1(As({}, r), {
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
    Chip: lc,
    DeleteIcon: DL,
    Label: uc,
    PreIcon: cc
  }
}), WL = ["aria-disabled"];
function HL(e, o, r, s, a, u) {
  const c = Kn("PreIcon"), f = Kn("Label"), m = Kn("DeleteIcon"), v = Kn("Chip");
  return xn(), Ur(v, qf(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: nr(() => [
      zu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        zu("span", qf(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (xn(), Ur(c, { key: 0 }, {
            default: nr(() => [
              xo(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : al("", !0),
          ac(f, { id: e.chipTextId }, {
            default: nr(() => [
              xo(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, WL),
      e.canDelete ? (xn(), Ur(m, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (g) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : al("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var zL = /* @__PURE__ */ qr(UL, [["render", HL], ["__scopeId", "data-v-48b2704a"]]);
const qL = zr({
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
    Chip: lc,
    Label: uc,
    PreIcon: cc
  }
}), GL = ["aria-disabled"];
function YL(e, o, r, s, a, u) {
  const c = Kn("PreIcon"), f = Kn("Label"), m = Kn("Chip");
  return xn(), Ur(m, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: nr(() => [
      zu("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (xn(), Ur(c, { key: 0 }, {
          default: nr(() => [
            xo(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : al("", !0),
        ac(f, null, {
          default: nr(() => [
            xo(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, GL)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var jL = /* @__PURE__ */ qr(qL, [["render", YL], ["__scopeId", "data-v-3e0c4eba"]]);
const ZL = zr({
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
    const o = Xa(!1), r = Xa(!1), s = Hu(() => Ce("chip-label-id")), a = Hu(() => o.value || r.value ? 0 : -1), u = Xa(), c = () => {
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
    Chip: lc,
    Label: uc,
    PreIcon: cc
  }
});
function KL(e, o, r, s, a, u) {
  const c = Kn("PreIcon"), f = Kn("Label"), m = Kn("Chip");
  return xn(), Ur(m, {
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
    default: nr(() => [
      e.hasIcon ? (xn(), Ur(c, { key: 0 }, {
        default: nr(() => [
          xo(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : al("", !0),
      ac(f, { id: e.labelId }, {
        default: nr(() => [
          xo(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var JL = /* @__PURE__ */ qr(ZL, [["render", KL], ["__scopeId", "data-v-bbcc2f70"]]);
const XL = {
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
}, Zw = zr({
  props: XL,
  setup() {
    return { format: Ja("chipListFormat", "") };
  },
  render() {
    const e = (o) => CL(o, As(As({}, this.$props), this.$attrs), As({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(zL) : this.format === "radio" ? e(JL) : e(jL);
  }
}), QL = {
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
}, eM = zr({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: QL,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    VL("chipListFormat", r);
    const s = r === "single";
    if (r === "radio") {
      const c = a1(e, "modelValue");
      return i1(As({
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
}), tM = ["aria-label"];
function nM(e, o, r, s, a, u) {
  return xn(), dl("div", qf(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    xo(e.$slots, "default", {}, void 0, !0)
  ], 16, tM);
}
var oM = /* @__PURE__ */ qr(eM, [["render", nM], ["__scopeId", "data-v-1e06f41d"]]);
const rM = window.Vue.defineComponent, iM = window.Vue.normalizeClass, sM = window.Vue.openBlock, aM = window.Vue.createElementBlock, lM = window.Vue.createCommentVNode, uM = /* @__PURE__ */ rM({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (sM(), aM("span", {
      key: 0,
      class: iM(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : lM("", !0);
  }
});
const cM = /* @__PURE__ */ Ve(uM, [["__scopeId", "data-v-e08880d6"]]), dM = window.Vue.defineComponent, ka = window.Vue.unref, l1 = window.Vue.createTextVNode, Zd = window.Vue.normalizeClass, Kd = window.Vue.withCtx, fM = window.Vue.createVNode, pM = window.Vue.renderList, hM = window.Vue.Fragment, lu = window.Vue.openBlock, mM = window.Vue.createElementBlock, Jd = window.Vue.createBlock, Kw = window.Vue.createCommentVNode, wM = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const vM = /* @__PURE__ */ l1(" ALL "), Jw = window.Vue.ref, _M = window.Vue.watch, gM = window.Vue.computed, $M = window.Vue.reactive, yM = /* @__PURE__ */ dM({
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
    const r = e, s = Jw(!1), a = gM(() => Be.exports.keys(Be.exports.groupBy(r.alarms, r.property))), u = Jw(
      (m = r.preSelected) != null && m.length ? r.preSelected : ["all"]
    ), c = $M({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((g) => g !== "all"), u.value.includes(v) ? u.value = u.value.filter((g) => g !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return _M(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, s.value = !1;
    }), (v, g) => ka(a).length > 0 ? (lu(), Jd(ka(oM), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Zd({ vertical: r.isVertical })
    }, {
      default: Kd(() => [
        fM(ka(Zw), {
          class: Zd({ clicked: u.value.includes("all") }),
          onClick: g[0] || (g[0] = (y) => f("all"))
        }, {
          default: Kd(() => [
            vM
          ]),
          _: 1
        }, 8, ["class"]),
        (lu(!0), mM(hM, null, pM(ka(a), (y) => (lu(), Jd(ka(Zw), {
          class: Zd([
            { clicked: u.value.includes(y) },
            `${y == null ? void 0 : y.toLowerCase()}-bg`
          ]),
          key: y,
          onClick: (b) => f(y)
        }, {
          default: Kd(() => [
            e.property == "severity" ? (lu(), Jd(cM, {
              key: 0,
              severity: y
            }, null, 8, ["severity"])) : Kw("", !0),
            l1(wM(y), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Kw("", !0);
  }
});
const bM = /* @__PURE__ */ Ve(yM, [["__scopeId", "data-v-f000b5a0"]]);
const CM = window.Vue.watch, VM = window.Vue.onBeforeUnmount, EM = window.Vue.ref, SM = window.Vue.onMounted, IM = (e) => {
  const o = EM(!1);
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
  return SM(() => {
    const c = CM(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    VM(() => {
      c(), u();
    });
  }), o;
}, kM = window.Vue.watch, AM = window.Vue.onBeforeUnmount, TM = window.Vue.ref, xM = window.Vue.onMounted, LM = (e, o) => {
  const r = TM(!1), s = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return xM(() => {
    const c = kM(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    AM(() => {
      c(), u();
    });
  }), r;
}, MM = window.Vue.watch, DM = window.Vue.onBeforeUnmount, NM = window.Vue.ref, u1 = (e, o) => {
  const r = NM(!1);
  let s = !1;
  const a = (m) => {
    o(m), s = !1;
  };
  function u(m) {
    s || (requestAnimationFrame(() => a(m)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = MM([e, r], ([m, v], g) => {
    g && g.length && g[0] && g[0].removeEventListener("scroll", u, !0), v && m ? m.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return DM(() => {
    f(), c();
  }), r;
}, OM = window.Vue.defineComponent, Jo = window.Vue.ref, Xw = window.Vue.toRef, BM = window.Vue.onMounted, RM = window.Vue.watch, Qw = window.Vue.computed, PM = window.Vue.nextTick, ev = window.Vue.openBlock, tv = window.Vue.createElementBlock, nv = window.Vue.renderSlot, FM = window.Vue.normalizeClass, UM = window.Vue.normalizeStyle, WM = window.Vue.createCommentVNode;
var HM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const zM = {
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
}, qM = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, GM = OM({
  emits: qM,
  props: zM,
  setup(e, o) {
    const r = Jo(), s = Jo(), a = Xw(e, "open"), u = Xw(e, "noExpand"), c = Jo("auto"), f = Jo(), m = Jo(e.triggerId || Ce("feather-menu-trigger")), v = Jo(Ce("feather-menu-dropdown")), g = Jo(""), y = Jo("");
    BM(() => {
      f.value = window;
    });
    const b = Jo(!1), N = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), O = () => {
      if (!s.value)
        return;
      const k = r.value.getBoundingClientRect();
      b.value = !0, c.value = "auto", PM(() => {
        let { height: U, width: W } = s.value.getBoundingClientRect();
        const Z = N(), Le = Z.height, he = Z.width;
        e.fill && W < k.width ? (c.value = k.width + "px", W = k.width) : c.value = W + "px";
        let ke = 0;
        Le - k.bottom < U && k.top >= U ? (ke = k.top - U, e.cover && (ke += k.height)) : (ke = k.bottom, e.cover && (ke -= k.height));
        let Ee = e.right ? k.right - W : k.left;
        !e.right && k.right >= W && he - k.left < W && (Ee = k.right - W), e.right && k.right <= W && he - k.left > W && (Ee = k.left), y.value = `${Ee}px`, g.value = `${ke}px`, b.value = !1;
      });
    }, B = LM(r, (k) => {
      o.emit("outside-click", k);
    }), S = IM(O), A = u1(f, O);
    RM([a, s], ([k, U]) => {
      k && U && O(), B.value = k, S.value = k, A.value = k;
    });
    const T = Qw(() => {
      const k = {
        id: m.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = v.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), P = Qw(() => ({
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
}), YM = ["data-ref-id"], jM = ["data-ref-id", "id"];
function ZM(e, o, r, s, a, u) {
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
      class: FM(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: UM({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      nv(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, jM)) : WM("", !0)
  ], 8, YM);
}
var c1 = /* @__PURE__ */ HM(GM, [["render", ZM], ["__scopeId", "data-v-f75af406"]]), KM = {
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
const JM = window.Vue.openBlock, XM = window.Vue.createElementBlock, QM = window.Vue.createElementVNode;
var eD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tD = {}, nD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oD = /* @__PURE__ */ QM("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), rD = [
  oD
];
function iD(e, o) {
  return JM(), XM("svg", nD, rD);
}
var sD = /* @__PURE__ */ eD(tD, [["render", iD]]);
const aD = window.Vue.openBlock, lD = window.Vue.createElementBlock, fp = window.Vue.createElementVNode;
var uD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const cD = {}, dD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fD = /* @__PURE__ */ fp("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), pD = /* @__PURE__ */ fp("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), hD = /* @__PURE__ */ fp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), mD = [
  fD,
  pD,
  hD
];
function wD(e, o) {
  return aD(), lD("svg", dD, mD);
}
var vD = /* @__PURE__ */ uD(cD, [["render", wD]]);
const _D = window.Vue.openBlock, gD = window.Vue.createElementBlock, $D = window.Vue.createElementVNode;
var yD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const bD = {}, CD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VD = /* @__PURE__ */ $D("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ED = [
  VD
];
function SD(e, o) {
  return _D(), gD("svg", CD, ED);
}
var fl = /* @__PURE__ */ yD(bD, [["render", SD]]);
const ll = function(e, o) {
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
const ID = window.Vue.defineComponent, kD = window.Vue.openBlock, AD = window.Vue.createElementBlock, TD = window.Vue.normalizeClass, xD = window.Vue.pushScopeId, LD = window.Vue.popScopeId, Gf = window.Vue.createElementVNode;
var MD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const DD = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, ND = {
  click: (e) => !0
}, OD = ID({
  emits: ND,
  props: DD,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), d1 = (e) => (xD("data-v-07e020f5"), e = e(), LD(), e), BD = /* @__PURE__ */ d1(() => /* @__PURE__ */ Gf("div", { class: "track" }, null, -1)), RD = /* @__PURE__ */ d1(() => /* @__PURE__ */ Gf("div", { class: "switcher" }, [
  /* @__PURE__ */ Gf("div", { class: "switch-circle" })
], -1)), PD = [
  BD,
  RD
];
function FD(e, o, r, s, a, u) {
  return kD(), AD("div", {
    class: TD(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, PD, 2);
}
var UD = /* @__PURE__ */ MD(OD, [["render", FD], ["__scopeId", "data-v-07e020f5"]]), WD = Object.defineProperty, HD = Object.defineProperties, zD = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, qD = Object.prototype.hasOwnProperty, GD = Object.prototype.propertyIsEnumerable, rv = (e, o, r) => o in e ? WD(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, iv = (e, o) => {
  for (var r in o || (o = {}))
    qD.call(o, r) && rv(e, r, o[r]);
  if (ov)
    for (var r of ov(o))
      GD.call(o, r) && rv(e, r, o[r]);
  return e;
}, sv = (e, o) => HD(e, zD(o));
const pp = window.Vue.defineComponent, wi = window.Vue.h, YD = window.Vue.openBlock, jD = window.Vue.createElementBlock, ZD = window.Vue.renderSlot;
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
const KD = {
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
}, JD = pp({
  inheritAttrs: !1,
  props: KD,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = wi("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = wi("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = wi("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : wi(Hr);
    if (this.asLi)
      return wi("li", sv(iv({}, this.$attrs), {
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
    const u = wi("a", sv(iv({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, s, a]);
    return wi("li", {}, [u]);
  }
});
var pl = /* @__PURE__ */ f1(JD, [["__scopeId", "data-v-7c46b2b3"]]);
pp({
  components: {
    FeatherListItem: pl
  }
});
const XD = {}, QD = { class: "feather-list" };
function eN(e, o) {
  return YD(), jD("ul", QD, [
    ZD(e.$slots, "default", {}, void 0, !0)
  ]);
}
var hp = /* @__PURE__ */ f1(XD, [["render", eN], ["__scopeId", "data-v-941a1d50"]]);
const tN = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, nN = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
pp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: tN,
  props: nN,
  computed: {
    labelId() {
      return Ce("switch-label");
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
  components: { SwitchRender: UD, FeatherListItem: pl }
});
var oN = Object.defineProperty, rN = Object.defineProperties, iN = Object.getOwnPropertyDescriptors, av = Object.getOwnPropertySymbols, sN = Object.prototype.hasOwnProperty, aN = Object.prototype.propertyIsEnumerable, lv = (e, o, r) => o in e ? oN(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ln = (e, o) => {
  for (var r in o || (o = {}))
    sN.call(o, r) && lv(e, r, o[r]);
  if (av)
    for (var r of av(o))
      aN.call(o, r) && lv(e, r, o[r]);
  return e;
}, lN = (e, o) => rN(e, iN(o));
const Gs = window.Vue.defineComponent, Ie = window.Vue.openBlock, ht = window.Vue.createElementBlock, hn = window.Vue.createElementVNode, po = window.Vue.toDisplayString, Zn = window.Vue.createCommentVNode, lt = window.Vue.resolveComponent, jn = window.Vue.createBlock, Wt = window.Vue.withCtx, Ts = window.Vue.Fragment, Qa = window.Vue.renderList, mn = window.Vue.createVNode, mp = window.Vue.withModifiers, Li = window.Vue.normalizeClass, Yf = window.Vue.renderSlot, p1 = window.Vue.createTextVNode, uN = window.Vue.pushScopeId, cN = window.Vue.popScopeId, h1 = window.Vue.reactive, m1 = window.Vue.nextTick, Xd = window.Vue.markRaw, Qd = window.Vue.toRef, uv = window.Vue.computed, dN = window.Vue.toRefs, ds = window.Vue.ref, ef = window.Vue.mergeProps, cv = window.Vue.toHandlers, uu = window.Vue.withDirectives, cu = window.Vue.vShow;
var dc = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, wp = {
  query: {
    type: String
  }
}, Ri = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const fN = Gs({
  mixins: [],
  props: Ln(Ln({
    text: {
      type: String,
      required: !0
    }
  }, dc), wp),
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
}), pN = {
  key: 0,
  class: "highlight"
}, hN = { key: 1 };
function mN(e, o, r, s, a, u) {
  return Ie(), ht("span", null, [
    hn("span", null, po(e.beginning), 1),
    e.highlighted ? (Ie(), ht("span", pN, po(e.highlighted), 1)) : Zn("", !0),
    e.end ? (Ie(), ht("span", hN, po(e.end), 1)) : Zn("", !0)
  ]);
}
var w1 = /* @__PURE__ */ Ri(fN, [["render", mN], ["__scopeId", "data-v-8abe2492"]]);
const wN = Gs({
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
  }, dc), wp),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], r = this.$refs.list;
        ll(o, r.$el);
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
    FeatherList: hp,
    FeatherListItem: pl,
    Highlighter: w1
  }
}), vN = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function _N(e, o, r, s, a, u) {
  const c = lt("Highlighter"), f = lt("FeatherListItem"), m = lt("FeatherList");
  return Ie(), jn(m, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: Wt(() => [
      (Ie(!0), ht(Ts, null, Qa(e.items, (v, g) => (Ie(), ht(Ts, {
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
          onClick: mp((y) => e.select(v), ["stop"])
        }, {
          default: Wt(() => [
            mn(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (Ie(), ht("span", vN, po(e.newLabel), 1)) : Zn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (Ie(), ht("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : Zn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var gN = /* @__PURE__ */ Ri(wN, [["render", _N], ["__scopeId", "data-v-f623434a"]]);
const $N = Gs({
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
  }, dc), wp),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const o = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], r = this.$refs.grid;
        ll(o, r);
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
}), yN = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, bN = ["aria-multiselectable"], CN = { role: "row" }, VN = ["aria-selected", "onClick"], EN = ["id", "aria-selected"], SN = { key: 1 };
function IN(e, o, r, s, a, u) {
  const c = lt("Highlighter");
  return Ie(), ht("div", yN, [
    hn("table", {
      class: Li(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      hn("thead", null, [
        hn("tr", CN, [
          (Ie(!0), ht(Ts, null, Qa(e.config, (f) => (Ie(), ht("th", {
            key: f.title
          }, po(f.title), 1))), 128))
        ])
      ]),
      hn("tbody", null, [
        (Ie(!0), ht(Ts, null, Qa(e.items, (f, m) => (Ie(), ht("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Li({ focus: e.isActive(m), selected: e.isSelected(f) }),
          onClick: mp((v) => e.select(f), ["stop"])
        }, [
          (Ie(!0), ht(Ts, null, Qa(e.config, (v, g) => (Ie(), ht("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(m, g),
            "aria-selected": e.isSelected(f),
            class: Li({ "focus-cell": e.isActiveCell(m, g) })
          }, [
            v.prop === e.textProp ? (Ie(), jn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (Ie(), ht("p", SN, po(f[v.prop]), 1))
          ], 10, EN))), 128))
        ], 10, VN))), 128))
      ])
    ], 10, bN)
  ], 512);
}
var kN = /* @__PURE__ */ Ri($N, [["render", IN], ["__scopeId", "data-v-58c88fd1"]]);
const AN = Gs({
  components: {
    FeatherList: hp,
    FeatherListItem: pl
  }
});
function TN(e, o, r, s, a, u) {
  const c = lt("FeatherListItem"), f = lt("FeatherList");
  return Ie(), jn(f, { class: "result-list" }, {
    default: Wt(() => [
      mn(c, { "as-li": "" }, {
        default: Wt(() => [
          Yf(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var xN = /* @__PURE__ */ Ri(AN, [["render", TN], ["__scopeId", "data-v-06b752c6"]]);
const LN = Gs({
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
    BaseChip: lc,
    BaseChipLabel: uc,
    BaseChipPreIcon: cc
  }
});
function MN(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("BaseChipPreIcon"), m = lt("BaseChipLabel"), v = lt("Cancel"), g = lt("BaseChip");
  return Ie(), jn(g, {
    class: Li(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: Wt(() => [
      e.showPreIcon ? (Ie(), jn(f, { key: 0 }, {
        default: Wt(() => {
          var y, b;
          return [
            mn(c, {
              icon: (y = e.pre) == null ? void 0 : y.icon,
              title: (b = e.pre) == null ? void 0 : b.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : Zn("", !0),
      mn(m, null, {
        default: Wt(() => [
          p1(po(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? Zn("", !0) : (Ie(), ht("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = mp((...y) => e.handleClick && e.handleClick(...y), ["stop"]))
      }, [
        mn(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: Wt(() => [
            mn(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var DN = /* @__PURE__ */ Ri(LN, [["render", MN], ["__scopeId", "data-v-e0fc6ac0"]]);
const NN = {}, ON = (e) => (uN("data-v-aa720e06"), e = e(), cN(), e), BN = { class: "spinner-container" }, RN = /* @__PURE__ */ ON(() => /* @__PURE__ */ hn("svg", {
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
], -1)), PN = [
  RN
];
function FN(e, o) {
  return Ie(), ht("div", BN, PN);
}
var UN = /* @__PURE__ */ Ri(NN, [["render", FN], ["__scopeId", "data-v-aa720e06"]]), fc = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(fc || {});
const v1 = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, WN = Ln(Ln(Ln({
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
    validator: (e) => !!fc[e]
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
}, dc), zs), ic), HN = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, zN = (e, o, r, s) => {
  if (r.toLowerCase() === fc.multi) {
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
}, qN = () => {
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
}, GN = (e) => {
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
}, YN = Gs({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: HN,
  props: WN,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== fc.multi;
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
      return Ce("result-item");
    },
    minCharWarningId() {
      return Ce("min-char-warning");
    },
    subTextId() {
      return Ce("feather-autocomplete-description");
    },
    resultsId() {
      return Ce("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return Ce("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Xd(sD);
    },
    minCharIcon() {
      return Xd(vD);
    },
    dropdownIcon() {
      return Xd(fl);
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
        ll(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, o) {
        e && o && e.length > o.length && this.scrollContainer && this.$nextTick(() => {
          ll(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = Ce("active-chip"), this.activeChipId;
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
      r !== void 0 && (Ni(this.typingTimeout), this.typingTimeout = Di(() => {
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
    const r = oc(Qd(e, "labels"), v1);
    qs(e), sc(e);
    let s;
    e.gridConfig ? s = GN(e.gridConfig) : s = qN();
    const a = Qd(e, "id"), u = uv(() => a.value ? a.value : Ce("feather-autocomplete-input")), { validate: c } = Ws(u, Qd(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: m, textProp: v, allowNew: g, type: y, minChar: b } = dN(e), N = ds(!1), O = ds(!1), R = ds(!1), B = ds(""), S = ds([]), A = ds(), T = uv(() => A.value), P = () => {
      N.value && !O.value && (B.value && B.value.length >= b.value && o.emit("search", B.value), b.value <= 0 && o.emit("search", B.value || ""), S.value = [], s.reset());
    }, k = zN({
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
    return lN(Ln(Ln({}, r), Hs(o.attrs)), {
      query: B,
      internalResults: S,
      selectionLimitReached: O,
      forceCloseResults: R,
      hasFocus: N,
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
    InputWrapper: rc,
    InputSubText: Us,
    AutocompleteResults: gN,
    AutocompleteResultsGrid: kN,
    Chip: DN,
    MenuMessage: xN,
    FeatherIcon: X,
    FeatherMenu: c1,
    Spinner: UN
  }
}), jN = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, ZN = ["id"], KN = { "data-ref-id": "feather-autocomplete-no-results" }, JN = { "data-ref-id": "feather-autocomplete-selection-limit" }, XN = { "data-ref-id": "feather-autocomplete-min-char" };
function QN(e, o, r, s, a, u) {
  const c = lt("FeatherIcon"), f = lt("Chip"), m = lt("InputWrapper"), v = lt("AutocompleteResults"), g = lt("AutocompleteResultsGrid"), y = lt("MenuMessage"), b = lt("Spinner"), N = lt("FeatherMenu"), O = lt("InputSubText");
  return Ie(), ht("div", ef(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    mn(N, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Li(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: Wt(({ attrs: R, on: B }) => [
        mn(m, ef(Ln(Ln({}, R), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, cv(B), { ref: "scroll" }), {
          pre: Wt(() => [
            Yf(e.$slots, "pre", {}, () => [
              mn(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: Wt(() => [
            mn(c, {
              icon: e.dropdownIcon,
              class: Li(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: Wt(() => [
            hn("div", {
              class: Li(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              hn("div", jN, null, 512),
              hn("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, po(e.selectedDescribedByText), 9, ZN),
              (Ie(!0), ht(Ts, null, Qa(e.modelValueList, (S, A) => uu((Ie(), jn(f, {
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
                [cu, !e.singleSelect]
              ])), 128)),
              hn("textarea", ef(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, cv(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: Wt(() => [
        e.gridConfig ? Zn("", !0) : uu((Ie(), jn(v, {
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
          [cu, e.showResults]
        ]),
        e.gridConfig ? uu((Ie(), jn(g, {
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
          [cu, e.showResults]
        ]) : Zn("", !0),
        e.showNoResults ? (Ie(), jn(y, { key: 2 }, {
          default: Wt(() => [
            hn("span", KN, po(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : Zn("", !0),
        e.showSelectionLimit ? (Ie(), jn(y, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: Wt(() => [
            mn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            hn("span", JN, po(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : Zn("", !0),
        e.minChar ? uu((Ie(), jn(y, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: Wt(() => [
            mn(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            hn("span", XN, [
              Yf(e.$slots, "min-char", {}, () => [
                p1(po(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [cu, e.showMinCharWarning]
        ]) : Zn("", !0),
        e.showLoading ? (Ie(), jn(b, { key: 5 })) : Zn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    mn(O, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var eO = /* @__PURE__ */ Ri(YN, [["render", QN], ["__scopeId", "data-v-43a7e951"]]);
var tO = Object.defineProperty, nO = Object.defineProperties, oO = Object.getOwnPropertyDescriptors, dv = Object.getOwnPropertySymbols, rO = Object.prototype.hasOwnProperty, iO = Object.prototype.propertyIsEnumerable, fv = (e, o, r) => o in e ? tO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Lu = (e, o) => {
  for (var r in o || (o = {}))
    rO.call(o, r) && fv(e, r, o[r]);
  if (dv)
    for (var r of dv(o))
      iO.call(o, r) && fv(e, r, o[r]);
  return e;
}, _1 = (e, o) => nO(e, oO(o));
const g1 = window.Vue.defineComponent, sO = window.Vue.ref, el = window.Vue.computed, aO = window.Vue.reactive, pv = window.Vue.watch, tf = window.Vue.inject, $1 = window.Vue.resolveComponent, jf = window.Vue.openBlock, y1 = window.Vue.createElementBlock, Wr = window.Vue.createElementVNode, lO = window.Vue.createBlock, uO = window.Vue.createCommentVNode, b1 = window.Vue.renderSlot, cO = window.Vue.pushScopeId, dO = window.Vue.popScopeId, nf = window.Vue.toRef, hv = window.Vue.mergeProps, fO = window.Vue.toDisplayString, pO = window.Vue.createVNode;
var C1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hO = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, mO = g1({
  props: hO,
  setup(e) {
    const o = sO(), r = () => {
      o.value.focus();
    }, s = el(() => Ce("feather-radio-button")), a = aO({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = el(() => Ce("radio-label-id")), c = el(() => a.first || a.checked ? 0 : -1);
    pv(() => e.disabled, (y) => {
      a.disabled = y;
    }, { immediate: !0 }), pv(() => e.value, (y) => {
      a.value = y;
    }, { immediate: !0 });
    const f = tf("register", (y) => {
    }), m = tf("blur", (y) => {
    }), v = tf("select", (y) => {
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
    FeatherRipple: Hr
  }
}), wO = (e) => (cO("data-v-24790cf0"), e = e(), dO(), e), vO = { class: "layout-container" }, _O = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], gO = { class: "radio hover focus" }, $O = /* @__PURE__ */ wO(() => /* @__PURE__ */ Wr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ Wr("svg", { class: "dot" }, [
    /* @__PURE__ */ Wr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), yO = ["id"];
function bO(e, o, r, s, a, u) {
  const c = $1("feather-ripple");
  return jf(), y1("div", vO, [
    Wr("div", {
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
      Wr("div", gO, [
        $O,
        e.vm.disabled ? uO("", !0) : (jf(), lO(c, {
          key: 0,
          center: ""
        }))
      ]),
      Wr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        b1(e.$slots, "default", {}, void 0, !0)
      ], 8, yO)
    ], 40, _O)
  ]);
}
var Zf = /* @__PURE__ */ C1(mO, [["render", bO], ["__scopeId", "data-v-24790cf0"]]);
const CO = _1(Lu({}, zs), {
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
}), VO = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, EO = g1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: CO,
  emits: VO,
  setup(e, o) {
    qs(e);
    const r = nf(e, "error"), s = nf(e, "modelValue"), a = el(() => Ce("feather-input-description")), u = el(() => {
      const c = _1(Lu({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return Lu(Lu({
      descriptionId: a,
      attrs: u
    }, r1(s, o.emit, e.label, e.schema, nf(e, "error"))), Hs(o.attrs));
  },
  components: {
    InputSubText: Us
  }
}), SO = ["for"], IO = ["id"];
function kO(e, o, r, s, a, u) {
  const c = $1("InputSubText");
  return jf(), y1("div", hv(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    Wr("label", {
      for: e.groupId,
      class: "group-label"
    }, fO(e.label), 9, SO),
    Wr("div", hv(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      b1(e.$slots, "default", {}, void 0, !0)
    ], 16, IO),
    pO(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var V1 = /* @__PURE__ */ C1(EO, [["render", kO], ["__scopeId", "data-v-6775aeb9"]]);
const AO = window.Vue.defineComponent, TO = window.Vue.renderList, xO = window.Vue.Fragment, mv = window.Vue.openBlock, LO = window.Vue.createElementBlock, MO = window.Vue.toDisplayString, DO = window.Vue.createTextVNode, wv = window.Vue.unref, vv = window.Vue.withCtx, NO = window.Vue.createVNode, OO = window.Vue.createBlock, BO = window.Vue.watch, RO = window.Vue.ref, PO = /* @__PURE__ */ AO({
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
    ], a = RO(r.preSelected || s[0].id);
    return BO(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (mv(), OO(wv(V1), {
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
        (mv(), LO(xO, null, TO(s, (f) => NO(wv(Zf), {
          value: f.id,
          key: f.id
        }, {
          default: vv(() => [
            DO(MO(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const FO = /* @__PURE__ */ Ve(PO, [["__scopeId", "data-v-0363302c"]]);
var UO = Object.defineProperty, WO = Object.defineProperties, HO = Object.getOwnPropertyDescriptors, _v = Object.getOwnPropertySymbols, zO = Object.prototype.hasOwnProperty, qO = Object.prototype.propertyIsEnumerable, gv = (e, o, r) => o in e ? UO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Aa = (e, o) => {
  for (var r in o || (o = {}))
    zO.call(o, r) && gv(e, r, o[r]);
  if (_v)
    for (var r of _v(o))
      qO.call(o, r) && gv(e, r, o[r]);
  return e;
}, $v = (e, o) => WO(e, HO(o));
const GO = window.Vue.defineComponent, YO = window.Vue.inject, Ta = window.Vue.h;
var jO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZO = {
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
}, KO = GO({
  inheritAttrs: !1,
  props: ZO,
  setup() {
    return { hasTooltip: YO("feather-has-tooltip", !1) };
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
    let u = Ta(Hr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), Ta(o, $v(Aa(Aa({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ta(Hr, { center: !0 })
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
var we = /* @__PURE__ */ jO(KO, [["__scopeId", "data-v-702d1074"]]);
const JO = window.Vue.openBlock, XO = window.Vue.createElementBlock, QO = window.Vue.createElementVNode;
var eB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tB = {}, nB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, oB = /* @__PURE__ */ QO("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), rB = [
  oB
];
function iB(e, o) {
  return JO(), XO("svg", nB, rB);
}
var sB = /* @__PURE__ */ eB(tB, [["render", iB]]);
const aB = window.Vue.openBlock, lB = window.Vue.createElementBlock, uB = window.Vue.createElementVNode;
var cB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const dB = {}, fB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pB = /* @__PURE__ */ uB("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), hB = [
  pB
];
function mB(e, o) {
  return aB(), lB("svg", fB, hB);
}
var wB = /* @__PURE__ */ cB(dB, [["render", mB]]);
const vB = window.Vue.openBlock, _B = window.Vue.createElementBlock, gB = window.Vue.createElementVNode;
var $B = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const yB = {}, bB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, CB = /* @__PURE__ */ gB("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), VB = [
  CB
];
function EB(e, o) {
  return vB(), _B("svg", bB, VB);
}
var E1 = /* @__PURE__ */ $B(yB, [["render", EB]]);
const SB = window.Vue.defineComponent, Vo = window.Vue.unref, vi = window.Vue.createVNode, yv = window.Vue.toDisplayString, er = window.Vue.createElementVNode, S1 = window.Vue.createTextVNode, bv = window.Vue.openBlock, Cv = window.Vue.createElementBlock, IB = window.Vue.createCommentVNode, kB = window.Vue.withCtx, AB = window.Vue.vShow, TB = window.Vue.normalizeClass, xB = window.Vue.withDirectives, LB = window.Vue.Fragment, MB = window.Vue.pushScopeId, DB = window.Vue.popScopeId, I1 = (e) => (MB("data-v-d75ae1ee"), e = e(), DB(), e), NB = /* @__PURE__ */ S1(" Filters "), OB = { class: "count" }, BB = { class: "results" }, RB = { class: "total" }, PB = /* @__PURE__ */ S1(" Reset "), FB = /* @__PURE__ */ I1(() => /* @__PURE__ */ er("div", { class: "title" }, "By Severities:", -1)), UB = /* @__PURE__ */ I1(() => /* @__PURE__ */ er("div", { class: "title" }, "By Start Date:", -1)), _i = window.Vue.ref, WB = window.Vue.reactive, HB = window.Vue.markRaw, Vv = window.Vue.watch, zB = /* @__PURE__ */ SB({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, s = HB({
      FilterAlt: sB,
      ExpandLess: wB,
      ExpandMore: fl,
      Refresh: E1
    }), a = ho(), u = _i(r.isOpen), c = _i(["all"]), f = _i(1), m = _i(r.list), v = _i(!1), g = _i(0), y = _i(null), b = WB({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), N = () => {
      var U, W;
      r.saveFilters && a.filters && (a.filters.node && (b.nodeSelectedValue = a.filters.node), ((U = a.filters) == null ? void 0 : U.severities) && !((W = a.filters) != null && W.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, T());
    }, O = () => {
      b.nodes = a.nodes, b.results = a.nodes;
    };
    Vv(
      () => a.nodes,
      () => {
        O();
      }
    ), Vv(r, () => {
      m.value = r.list, N();
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
          (he) => {
            var ke;
            return he.nodeLabel === ((ke = b.nodeSelectedValue) == null ? void 0 : ke._text);
          }
        ).length > 0)
          return W;
      }).filter((W) => W) : U = U.filter(
        (W) => {
          var Z;
          return W.nodeLabel === ((Z = b.nodeSelectedValue) == null ? void 0 : Z._text);
        }
      )), c.value.includes("all") || (g.value++, U = U.filter(
        (W) => c.value.includes(W.severity)
      )), f.value !== 1 && (g.value++, U = IT(
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
    return (U, W) => (bv(), Cv(LB, null, [
      r.isOpen ? IB("", !0) : (bv(), Cv("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        er("div", null, [
          vi(Vo(X), {
            icon: Vo(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          NB,
          er("span", OB, yv(g.value), 1)
        ]),
        vi(Vo(X), {
          icon: u.value ? Vo(s).ExpandLess : Vo(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      xB(er("div", {
        class: TB(["filters", { collapsed: !r.isOpen }])
      }, [
        er("div", BB, [
          er("div", RB, "Results: " + yv(Vo(m).length), 1),
          vi(Vo(we), {
            class: "btn-reset",
            onClick: A
          }, {
            default: kB(() => [
              vi(Vo(X), {
                icon: Vo(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              PB
            ]),
            _: 1
          })
        ]),
        er("div", null, [
          vi(Vo(eO), {
            ref_key: "autocomplete",
            ref: y,
            label: "Search by node",
            loading: v.value,
            modelValue: b.nodeSelectedValue,
            "onUpdate:modelValue": [
              W[0] || (W[0] = (Z) => b.nodeSelectedValue = Z),
              T
            ],
            results: b.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          FB,
          vi(bM, {
            alarms: r.list,
            onSelectedOption: R,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          er("div", null, [
            UB,
            vi(FO, {
              onFilterDateSelected: B,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [AB, u.value]
      ])
    ], 64));
  }
});
const Ys = /* @__PURE__ */ Ve(zB, [["__scopeId", "data-v-d75ae1ee"]]), qB = window.Vue.openBlock, GB = window.Vue.createElementBlock, YB = window.Vue.createElementVNode;
var jB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ZB = {}, KB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, JB = /* @__PURE__ */ YB("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), XB = [
  JB
];
function QB(e, o) {
  return qB(), GB("svg", KB, XB);
}
var pc = /* @__PURE__ */ jB(ZB, [["render", QB]]);
const eR = window.Vue.openBlock, tR = window.Vue.createElementBlock, k1 = window.Vue.createElementVNode;
var nR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const oR = {}, rR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, iR = /* @__PURE__ */ k1("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), sR = /* @__PURE__ */ k1("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), aR = [
  iR,
  sR
];
function lR(e, o) {
  return eR(), tR("svg", rR, aR);
}
var uR = /* @__PURE__ */ nR(oR, [["render", lR]]);
const cR = window.Vue.openBlock, dR = window.Vue.createElementBlock, fR = window.Vue.createElementVNode;
var pR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const hR = {}, mR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wR = /* @__PURE__ */ fR("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), vR = [
  wR
];
function _R(e, o) {
  return cR(), dR("svg", mR, vR);
}
var gR = /* @__PURE__ */ pR(hR, [["render", _R]]);
const Gr = () => window.VRouter || k0, gi = "alec-", mt = {
  home: `${gi}home`,
  situations: `${gi}situations`,
  situationDetail: `${gi}situationDetail`,
  addSituation: `${gi}addSituation`,
  error: `${gi}error`,
  viewUnassignedAlarms: `${gi}viewUnassignedAlarms`,
  settings: `${gi}settings`
};
const $R = window.Vue.openBlock, yR = window.Vue.createElementBlock, bR = window.Vue.pushScopeId, CR = window.Vue.popScopeId, Ev = window.Vue.createElementVNode;
var VR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const ER = {}, SR = (e) => (bR("data-v-2263be39"), e = e(), CR(), e), IR = { class: "spinner-container" }, kR = /* @__PURE__ */ SR(() => /* @__PURE__ */ Ev("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Ev("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), AR = [
  kR
];
function TR(e, o) {
  return $R(), yR("div", IR, AR);
}
var xs = /* @__PURE__ */ VR(ER, [["render", TR], ["__scopeId", "data-v-2263be39"]]);
const xR = window.Vue.defineComponent, of = window.Vue.unref, LR = window.Vue.createVNode, MR = window.Vue.createElementVNode, DR = window.Vue.withCtx, NR = window.Vue.openBlock, OR = window.Vue.createBlock, BR = window.Vue.pushScopeId, RR = window.Vue.popScopeId, PR = (e) => (BR("data-v-6d6d8faa"), e = e(), RR(), e), FR = /* @__PURE__ */ PR(() => /* @__PURE__ */ MR("span", null, "New Situation", -1)), UR = window.Vue.markRaw, WR = /* @__PURE__ */ xR({
  __name: "NewSituationBtn",
  setup(e) {
    const o = Gr(), r = UR({
      Add: pc
    }), s = () => {
      o.push({
        name: mt.addSituation
      });
    };
    return (a, u) => (NR(), OR(of(we), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: DR(() => [
        LR(of(X), {
          icon: of(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        FR
      ]),
      _: 1
    }));
  }
});
const A1 = /* @__PURE__ */ Ve(WR, [["__scopeId", "data-v-6d6d8faa"]]), HR = "/whoami", zR = async () => {
  try {
    const e = await Lt.get(HR);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, qR = window.Pinia.defineStore, GR = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Oi = qR("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await zR();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await TT();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const s = {
        ...GR,
        ...r,
        distanceMeasureName: o ? kt.HELLINGER_OPTION : kt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (s.hellingerW = null, s.hellingerBias = null), await xT(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getLLMConfig() {
      const e = await LT();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const o = await MT(e);
      return o ? (this.llmConfig = o, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const o = await OT(e);
      return o && (this.llmUsage = o), o;
    }
  }
}), YR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", jR = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", ZR = window.Vue.defineComponent, fs = window.Vue.unref, ps = window.Vue.openBlock, hs = window.Vue.createElementBlock, KR = window.Vue.createCommentVNode, T1 = window.Vue.createTextVNode, Sv = window.Vue.Fragment, x1 = window.Vue.createElementVNode, JR = window.Vue.pushScopeId, XR = window.Vue.popScopeId, QR = (e) => (JR("data-v-7d676165"), e = e(), XR(), e), eP = ["src"], tP = { class: "engine" }, nP = /* @__PURE__ */ T1(" ENGINE "), oP = {
  key: 0,
  class: "type"
}, rP = {
  key: 1,
  class: "type"
}, iP = /* @__PURE__ */ T1(" ENGINE "), sP = /* @__PURE__ */ QR(() => /* @__PURE__ */ x1("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Iv = window.Vue.computed, aP = /* @__PURE__ */ ZR({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = Gr(), r = Oi(), s = () => {
      o.push({
        name: mt.settings
      });
    }, a = Iv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = Iv(
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
        src: fs(u) ? fs(jR) : fs(YR),
        class: "icon-type"
      }, null, 8, eP)) : KR("", !0),
      x1("div", tP, [
        fs(a) ? (ps(), hs(Sv, { key: 0 }, [
          nP,
          fs(u) ? (ps(), hs("div", oP, "CLUSTERING")) : (ps(), hs("div", rP, "DEEP LEARNING"))
        ], 64)) : (ps(), hs(Sv, { key: 1 }, [
          iP,
          sP
        ], 64))
      ])
    ]));
  }
});
const lP = /* @__PURE__ */ Ve(aP, [["__scopeId", "data-v-7d676165"]]);
const uP = {}, cP = window.Vue.openBlock, dP = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const fP = { class: "empty" };
function pP(e, o) {
  return cP(), dP("div", fP, "No results found.");
}
const js = /* @__PURE__ */ Ve(uP, [["render", pP], ["__scopeId", "data-v-2415ea97"]]), hP = window.Vue.defineComponent, So = window.Vue.createElementVNode, xa = window.Vue.unref, $i = window.Vue.createVNode, mP = window.Vue.withCtx, du = window.Vue.toDisplayString, Xo = window.Vue.openBlock, yi = window.Vue.createElementBlock, kv = window.Vue.createCommentVNode, Av = window.Vue.createBlock, wP = window.Vue.renderList, vP = window.Vue.Fragment, _P = window.Vue.pushScopeId, gP = window.Vue.popScopeId, L1 = (e) => (_P("data-v-8a617929"), e = e(), gP(), e), $P = { class: "list-main" }, yP = { class: "header" }, bP = /* @__PURE__ */ L1(() => /* @__PURE__ */ So("h2", null, "Situation List", -1)), CP = { class: "link-btns" }, VP = /* @__PURE__ */ L1(() => /* @__PURE__ */ So("span", null, "View Unassociated Alarms", -1)), EP = { class: "content" }, SP = { class: "left-filters" }, IP = { class: "container" }, kP = { class: "autocomplete" }, AP = { key: 0 }, TP = { key: 1 }, xP = { key: 0 }, LP = { class: "situation-list" }, MP = {
  key: 0,
  class: "footer-pager"
}, DP = window.Vue.reactive, fu = window.Vue.ref, NP = window.Vue.watch, OP = window.Vue.markRaw, BP = /* @__PURE__ */ hP({
  __name: "SituationList",
  setup(e) {
    const o = OP({
      Add: pc,
      View: uR,
      Settings: gR
    }), r = Gr(), s = ho(), a = Oi();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = DP({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = fu(!0), m = fu(0), v = fu(1), g = fu(0), y = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    NP(
      () => s.situations,
      () => {
        f.value = !1, y(), R(s.situations);
      }
    );
    const b = (S) => {
      m.value = S, c.situations = c.allSituations[m.value];
    }, N = (S) => {
      r.push({
        name: mt.situationDetail,
        params: {
          id: S
        }
      });
    }, O = () => {
      r.push({
        name: mt.viewUnassignedAlarms
      });
    }, R = (S) => {
      g.value = S.length, c.allSituations = Be.exports.chunk(S, u);
      const A = S.map((T) => T.id);
      s.filteredSituations = A, m.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, B = (S) => {
      S.length ? R(S) : c.situations = [];
    };
    return (S, A) => {
      var T;
      return Xo(), yi("div", $P, [
        So("div", yP, [
          bP,
          So("div", CP, [
            $i(xa(we), {
              class: "view-situation-btn",
              onClick: A[0] || (A[0] = () => O())
            }, {
              default: mP(() => [
                $i(xa(X), {
                  icon: xa(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                VP
              ]),
              _: 1
            }),
            $i(A1),
            $i(lP)
          ])
        ]),
        So("div", EP, [
          So("div", SP, [
            $i(Ys, {
              list: xa(s).situations,
              onFilteredList: B,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          So("div", IP, [
            So("div", kP, [
              c.situations && c.situations.length ? (Xo(), yi("div", AP, " Result: " + du((T = c.situations) == null ? void 0 : T.length) + " of " + du(g.value), 1)) : kv("", !0)
            ]),
            f.value ? (Xo(), Av(xa(xs), {
              key: 0,
              class: "spinner"
            })) : (Xo(), yi("div", TP, [
              c.situations && c.situations.length ? (Xo(), yi("div", xP, [
                So("div", LP, [
                  (Xo(!0), yi(vP, null, wP(c.situations, (P) => (Xo(), yi("div", {
                    class: "card",
                    key: P.id
                  }, [
                    $i(Qg, {
                      onClick: () => N(P.id),
                      "situation-info": P
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                g.value > u ? (Xo(), yi("div", MP, [
                  So("div", null, "Page: " + du(m.value + 1) + " of " + du(v.value), 1),
                  $i(X2, {
                    onGoToPage: b,
                    currentPage: m.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : kv("", !0)
              ])) : (Xo(), Av(js, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const RP = /* @__PURE__ */ Ve(BP, [["__scopeId", "data-v-8a617929"]]);
const pu = window.Vue.ref, PP = window.Vue.inject, FP = window.Vue.computed, UP = window.Vue.onMounted, M1 = {
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
}, D1 = (e) => {
  const o = pu(!1), r = pu(), s = pu(e.controls), a = pu(e.id), u = () => {
    r.value && r.value.focus();
  }, c = PP("registerTab");
  UP(() => {
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
  const f = FP(() => ({
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
}, Tv = window.Vue.ref, WP = window.Vue.toRef, HP = window.Vue.watch, xv = window.Vue.provide, N1 = {
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
  const r = WP(e, "modelValue"), s = Tv(e.modelValue), a = Tv([]);
  HP(r, (O) => {
    m(O);
  });
  const u = (O) => {
    O.preventDefault(), a.value.some((R, B) => R.tab && R.tab.el.contains(O.target) ? (f(B), m(B), !0) : !1);
  }, c = (O) => {
    if (((Z) => Z.shiftKey || Z.ctrlKey || Z.metaKey || Z.altKey)(O))
      return;
    const B = O.keyCode, S = (Z) => {
      Z.stopPropagation(), Z.preventDefault();
    }, A = a.value.filter((Z) => Z.tab && !Z.tab.disabled), T = a.value.findIndex((Z) => Z.tab && Z.tab.el.contains(document.activeElement));
    let P = T !== -1 ? T : s.value;
    const k = [ce.RIGHT], U = [ce.LEFT], W = [ce.ENTER, ce.SPACE];
    e.vertical && (k.push(ce.DOWN), U.push(ce.UP)), k.indexOf(B) > -1 ? (P++, P >= A.length && (P = 0), S(O), f(a.value.indexOf(A[P]))) : U.indexOf(B) > -1 && (P--, P < 0 && (P = A.length - 1), S(O), f(a.value.indexOf(A[P]))), W.indexOf(B) > -1 && m(P);
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
  xv("registerTab", (O) => {
    const R = O.index;
    R > -1 && (a.value[R] = { ...a.value[R], tab: O }, a.value = [...a.value], y());
  }), xv("registerPanel", (O) => {
    const R = O.index;
    R > -1 && (a.value[R] = {
      ...a.value[R],
      panel: O
    }, a.value = [...a.value], y());
  });
  const y = () => {
    a.value.forEach(({ tab: O, panel: R }, B) => {
      if (R && O) {
        const S = O.id || Ce("tab"), A = O.controls || Ce("panel");
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
}, hu = window.Vue.ref, zP = window.Vue.inject, qP = window.Vue.computed, GP = window.Vue.onMounted, P1 = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, F1 = (e) => {
  const o = hu(!1), r = hu(), s = hu(e.tab), a = hu(e.id), u = zP("registerPanel");
  GP(() => {
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
  const c = qP(() => ({
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
}, vp = window.Vue.defineComponent, YP = window.Vue.resolveComponent, _p = window.Vue.openBlock, gp = window.Vue.createElementBlock, tl = window.Vue.createElementVNode, U1 = window.Vue.mergeProps, qu = window.Vue.renderSlot, jP = window.Vue.createVNode, ZP = window.Vue.normalizeStyle, KP = window.Vue.toHandlers, JP = window.Vue.withDirectives, XP = window.Vue.normalizeProps, QP = window.Vue.guardReactiveProps, e3 = window.Vue.vShow;
var $p = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const t3 = M1, n3 = vp({
  props: t3,
  setup(e) {
    return D1(e);
  },
  components: {
    FeatherRipple: Hr
  }
}), o3 = { role: "presentation" }, r3 = { class: "tab-text" };
function i3(e, o, r, s, a, u) {
  const c = YP("FeatherRipple");
  return _p(), gp("li", o3, [
    tl("button", U1(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      tl("span", r3, [
        qu(e.$slots, "default", {}, void 0, !0)
      ]),
      jP(c)
    ], 16)
  ]);
}
var nl = /* @__PURE__ */ $p(n3, [["render", i3], ["__scopeId", "data-v-e6bb52b6"]]);
const s3 = B1, a3 = O1, l3 = vp({
  model: N1,
  emits: a3,
  props: s3,
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
}), u3 = { class: "feather-tab-container" }, c3 = { class: "tab-panels" };
function d3(e, o, r, s, a, u) {
  return _p(), gp("div", u3, [
    tl("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: ZP({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    tl("ul", U1(e.attrs, KP(e.listeners)), [
      qu(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    tl("div", c3, [
      qu(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var W1 = /* @__PURE__ */ $p(l3, [["render", d3], ["__scopeId", "data-v-27adffb9"]]);
const f3 = P1, p3 = vp({
  props: f3,
  setup(e) {
    return F1(e);
  }
});
function h3(e, o, r, s, a, u) {
  return JP((_p(), gp("div", XP(QP(e.attrs)), [
    qu(e.$slots, "default")
  ], 16)), [
    [e3, e.selected]
  ]);
}
var ol = /* @__PURE__ */ $p(p3, [["render", h3]]);
const m3 = window.Vue.defineComponent, w3 = window.Vue.toDisplayString, v3 = window.Vue.normalizeClass, _3 = window.Vue.openBlock, g3 = window.Vue.createElementBlock, $3 = window.Vue.createCommentVNode, y3 = /* @__PURE__ */ m3({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, s) => o != null && o.severity ? (_3(), g3("span", {
      key: 0,
      class: v3(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, w3(o.severity), 3)) : $3("", !0);
  }
});
const H1 = /* @__PURE__ */ Ve(y3, [["__scopeId", "data-v-83c2cdce"]]), b3 = window.Vue.defineComponent, Lv = window.Vue.toDisplayString, Mv = window.Vue.createElementVNode, C3 = window.Vue.openBlock, V3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const E3 = { class: "box" }, S3 = { class: "label" }, I3 = { class: "date" }, k3 = /* @__PURE__ */ b3({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (C3(), V3("div", E3, [
      Mv("div", S3, Lv(o.label), 1),
      Mv("div", I3, Lv(o.info), 1)
    ]));
  }
});
const rf = /* @__PURE__ */ Ve(k3, [["__scopeId", "data-v-b4afa751"]]), A3 = window.Vue.defineComponent, T3 = window.Vue.unref, x3 = window.Vue.renderList, L3 = window.Vue.Fragment, sf = window.Vue.openBlock, af = window.Vue.createElementBlock, M3 = window.Vue.toDisplayString, D3 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const N3 = { class: "alarms-list" }, O3 = /* @__PURE__ */ A3({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (sf(), af("div", N3, [
      (sf(!0), af(L3, null, x3(T3(Be.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (sf(), af("div", {
        class: D3(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, M3(a.length), 3))), 128))
    ]));
  }
});
const B3 = /* @__PURE__ */ Ve(O3, [["__scopeId", "data-v-52d63440"]]), R3 = window.Vue.openBlock, P3 = window.Vue.createElementBlock, F3 = window.Vue.createElementVNode;
var U3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const W3 = {}, H3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, z3 = /* @__PURE__ */ F3("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), q3 = [
  z3
];
function G3(e, o) {
  return R3(), P3("svg", H3, q3);
}
var Y3 = /* @__PURE__ */ U3(W3, [["render", G3]]);
const j3 = window.Vue.openBlock, Z3 = window.Vue.createElementBlock, K3 = window.Vue.createStaticVNode;
var J3 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const X3 = {}, Q3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e4 = /* @__PURE__ */ K3('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), t4 = [
  e4
];
function n4(e, o) {
  return j3(), Z3("svg", Q3, t4);
}
var Gu = /* @__PURE__ */ J3(X3, [["render", n4]]);
const o4 = window.Vue.defineComponent, ao = window.Vue.unref, lf = window.Vue.createVNode, yp = window.Vue.createElementVNode, uf = window.Vue.withCtx, mu = window.Vue.openBlock, cf = window.Vue.createBlock, df = window.Vue.createCommentVNode, r4 = window.Vue.normalizeClass, i4 = window.Vue.createElementBlock, s4 = window.Vue.pushScopeId, a4 = window.Vue.popScopeId, bp = (e) => (s4("data-v-d9c6a479"), e = e(), a4(), e), l4 = /* @__PURE__ */ bp(() => /* @__PURE__ */ yp("span", null, "Acknowledge", -1)), u4 = /* @__PURE__ */ bp(() => /* @__PURE__ */ yp("span", null, "Escalate", -1)), c4 = /* @__PURE__ */ bp(() => /* @__PURE__ */ yp("span", null, "Clear", -1)), d4 = /* @__PURE__ */ o4({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = ho(), s = async (u) => {
      await HI(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await Jg(
        o.situationId,
        kt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await xg(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (mu(), i4("div", {
      class: r4(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? df("", !0) : (mu(), cf(ao(we), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: uf(() => [
          lf(ao(X), {
            icon: ao(Ns),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          l4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (mu(), cf(ao(we), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(ao(kt).ESCALATE))
      }, {
        default: uf(() => [
          lf(ao(X), {
            icon: ao(Y3),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          u4
        ]),
        _: 1
      })) : df("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (mu(), cf(ao(we), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(ao(kt).CLEAR))
      }, {
        default: uf(() => [
          lf(ao(X), {
            icon: ao(Gu),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          c4
        ]),
        _: 1
      })) : df("", !0)
    ], 2));
  }
});
const z1 = /* @__PURE__ */ Ve(d4, [["__scopeId", "data-v-d9c6a479"]]);
var f4 = Object.defineProperty, p4 = Object.defineProperties, h4 = Object.getOwnPropertyDescriptors, Dv = Object.getOwnPropertySymbols, m4 = Object.prototype.hasOwnProperty, w4 = Object.prototype.propertyIsEnumerable, Nv = (e, o, r) => o in e ? f4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Kf = (e, o) => {
  for (var r in o || (o = {}))
    m4.call(o, r) && Nv(e, r, o[r]);
  if (Dv)
    for (var r of Dv(o))
      w4.call(o, r) && Nv(e, r, o[r]);
  return e;
}, q1 = (e, o) => p4(e, h4(o));
const G1 = window.Vue.defineComponent, v4 = window.Vue.inject, _4 = window.Vue.resolveComponent, ff = window.Vue.openBlock, Ov = window.Vue.createElementBlock, Ss = window.Vue.createElementVNode, g4 = window.Vue.createBlock, Bv = window.Vue.createCommentVNode, $4 = window.Vue.renderSlot, y4 = window.Vue.pushScopeId, b4 = window.Vue.popScopeId, pf = window.Vue.toRef, wu = window.Vue.computed, C4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var V4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const E4 = {
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
}, S4 = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, I4 = G1({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: S4,
  props: E4,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: v4("registerCheckbox", (o) => {
      })
    };
  },
  computed: {
    inputId() {
      return this.label && this.label.length ? void 0 : Ce("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : Ce("checkbox-label");
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
    FeatherRipple: Hr
  }
}), k4 = (e) => (y4("data-v-a7af27e2"), e = e(), b4(), e), A4 = { class: "layout-container" }, T4 = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], x4 = { class: "checkbox hover focus" }, L4 = /* @__PURE__ */ k4(() => /* @__PURE__ */ Ss("div", { class: "box" }, [
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
], -1)), M4 = ["id", "for"];
function D4(e, o, r, s, a, u) {
  const c = _4("feather-ripple");
  return ff(), Ov("div", A4, [
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
      Ss("div", x4, [
        L4,
        e.disabled ? Bv("", !0) : (ff(), g4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Bv("", !0) : (ff(), Ov("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        $4(e.$slots, "default", {}, void 0, !0)
      ], 8, M4))
    ], 40, T4)
  ]);
}
var Mi = /* @__PURE__ */ V4(I4, [["render", D4], ["__scopeId", "data-v-a7af27e2"]]);
const N4 = q1(Kf({}, zs), {
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
  props: N4,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    qs(e);
    const r = pf(e, "error"), s = wu(() => Ce("feather-checkbox-group")), a = wu(() => Ce("feather-input-description")), u = wu(() => Ce("feather-input-label")), c = wu(() => {
      const g = JSON.parse(JSON.stringify(o.attrs));
      return g["aria-invalid"] || (g["aria-invalid"] = !!r.value), q1(Kf({}, g), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = C4(s.value), { validate: m } = Ws(f, pf(e, "modelValue"), e.label, e.schema, pf(e, "error"));
    return Kf({
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
const O4 = window.Vue.openBlock, B4 = window.Vue.createElementBlock, Y1 = window.Vue.createElementVNode;
var R4 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const P4 = {}, F4 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, U4 = /* @__PURE__ */ Y1("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), W4 = /* @__PURE__ */ Y1("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), H4 = [
  U4,
  W4
];
function z4(e, o) {
  return O4(), B4("svg", F4, H4);
}
var q4 = /* @__PURE__ */ R4(P4, [["render", z4]]);
var G4 = Object.defineProperty, Y4 = Object.defineProperties, j4 = Object.getOwnPropertyDescriptors, Rv = Object.getOwnPropertySymbols, Z4 = Object.prototype.hasOwnProperty, K4 = Object.prototype.propertyIsEnumerable, Pv = (e, o, r) => o in e ? G4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Is = (e, o) => {
  for (var r in o || (o = {}))
    Z4.call(o, r) && Pv(e, r, o[r]);
  if (Rv)
    for (var r of Rv(o))
      K4.call(o, r) && Pv(e, r, o[r]);
  return e;
}, j1 = (e, o) => Y4(e, j4(o));
const J4 = window.Vue.defineComponent, hf = window.Vue.toRef, X4 = window.Vue.computed, Fv = window.Vue.resolveComponent, Uv = window.Vue.openBlock, Wv = window.Vue.createElementBlock, Hv = window.Vue.mergeProps, zv = window.Vue.createVNode, Q4 = window.Vue.normalizeClass, qv = window.Vue.withCtx, e8 = window.Vue.createElementVNode, t8 = window.Vue.toDisplayString, n8 = window.Vue.createCommentVNode;
var o8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const r8 = j1(Is(Is({}, ic), zs), {
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
}), i8 = {
  "update:modelValue": (e) => !0
}, s8 = J4({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: i8,
  props: r8,
  setup(e, o) {
    qs(e), sc(e);
    const r = hf(e, "id"), s = X4(() => r.value ? r.value : Ce("feather-textarea-label")), { validate: a } = Ws(s, hf(e, "modelValue"), e.label, e.schema, hf(e, "error"));
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
      return Ce("feather-textarea-description");
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), j1(Is(Is({}, e), this.listeners), {
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
    InputWrapper: rc
  }
}), a8 = ["maxlength"], l8 = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function u8(e, o, r, s, a, u) {
  const c = Fv("InputWrapper"), f = Fv("InputSubText");
  return Uv(), Wv("div", Hv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    zv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: Q4(["feather-textarea-content", e.contentCls])
    }, {
      default: qv(() => [
        e8("textarea", Hv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, a8)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    zv(f, { id: e.descriptionId }, {
      right: qv(() => [
        e.maxlength ? (Uv(), Wv("div", l8, t8(e.charCount), 1)) : n8("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Yu = /* @__PURE__ */ o8(s8, [["render", u8], ["__scopeId", "data-v-0648df5c"]]);
const c8 = window.Pinia.defineStore, hc = c8("appStore", {
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
}), d8 = window.Vue.defineComponent, Gv = window.Vue.toDisplayString, La = window.Vue.createElementVNode, bi = window.Vue.unref, ms = window.Vue.openBlock, Yv = window.Vue.createBlock, Ma = window.Vue.createCommentVNode, jv = window.Vue.createVNode, vu = window.Vue.createElementBlock, f8 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const p8 = { class: "row" }, h8 = { class: "label" }, m8 = { class: "action-icons" }, w8 = { class: "icon-btn" }, v8 = {
  key: 0,
  class: "icon-btn"
}, _8 = {
  key: 1,
  class: "icon-btn"
}, g8 = {
  key: 0,
  class: "text"
}, $8 = window.Vue.watch, Zv = window.Vue.ref, y8 = /* @__PURE__ */ d8({
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
    const o = e, r = hc(), s = Zv(!1), a = Zv((m = o.memo) == null ? void 0 : m.body);
    $8(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await KI(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await ZI(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, g) => (ms(), vu("div", {
      class: f8([o.boxType === "small" ? "box-small" : "box"])
    }, [
      La("div", p8, [
        La("div", h8, Gv(e.label), 1),
        La("div", m8, [
          La("div", w8, [
            s.value ? Ma("", !0) : (ms(), Yv(bi(X), {
              key: 0,
              icon: bi(q4),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (ms(), vu("div", v8, [
            jv(bi(X), {
              icon: bi(Ns),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ma("", !0),
          a.value && a.value != "" || s.value ? (ms(), vu("div", _8, [
            jv(bi(X), {
              icon: bi(Ps),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Ma("", !0)
        ])
      ]),
      La("div", null, [
        !s.value && a.value != null ? (ms(), vu("div", g8, Gv(a.value), 1)) : Ma("", !0),
        s.value ? (ms(), Yv(bi(Yu), {
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
const ju = /* @__PURE__ */ Ve(y8, [["__scopeId", "data-v-ee1264b5"]]), b8 = window.Vue.defineComponent, Lr = window.Vue.unref, ws = window.Vue.createVNode, Da = window.Vue.toDisplayString, fo = window.Vue.createElementVNode, Kv = window.Vue.openBlock, Jv = window.Vue.createElementBlock, Xv = window.Vue.createCommentVNode, mf = window.Vue.createTextVNode, C8 = window.Vue.pushScopeId, V8 = window.Vue.popScopeId, Cp = (e) => (C8("data-v-b59dc239"), e = e(), V8(), e), E8 = {
  key: 0,
  class: "card"
}, S8 = { class: "row" }, I8 = {
  key: 0,
  class: "ack"
}, k8 = /* @__PURE__ */ Cp(() => /* @__PURE__ */ fo("strong", null, " Duration: ", -1)), A8 = ["innerHTML"], T8 = /* @__PURE__ */ Cp(() => /* @__PURE__ */ fo("strong", null, "First Event", -1)), x8 = /* @__PURE__ */ Cp(() => /* @__PURE__ */ fo("strong", null, "Last Event", -1)), L8 = { class: "section memo-boxes" }, Qv = window.Vue.ref, M8 = window.Vue.watch, D8 = /* @__PURE__ */ b8({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, s = Qv(!1), a = Qv(r.alarm), u = new Date().getTime();
    M8(r, () => {
      a.value = r.alarm, s.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (m) => {
      const v = await Lg(m);
      v && (a.value = v);
    };
    return (m, v) => {
      var g, y, b, N, O;
      return a.value ? (Kv(), Jv("div", E8, [
        fo("div", null, [
          fo("div", S8, [
            ws(Lr(Mi), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (R) => s.value = R),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            fo("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, Da(a.value.nodeLabel) + " - " + Da(a.value.id), 1),
            ws(H1, {
              severity: (g = a.value) == null ? void 0 : g.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Kv(), Jv("div", I8, [
              ws(Lr(X), {
                icon: Lr(Ns),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Xv("", !0)
          ]),
          fo("div", null, [
            k8,
            mf(" " + Da(Lr(tc)(Lr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          fo("div", {
            class: "description",
            innerHTML: Lr(zg)(a.value.description || "")
          }, null, 8, A8),
          fo("div", null, [
            T8,
            mf(" - " + Da(Lr(To)(a.value.firstEventTime)), 1)
          ]),
          fo("div", null, [
            x8,
            mf(" - " + Da(Lr(To)(a.value.lastEventTime)), 1)
          ]),
          fo("div", L8, [
            ws(ju, {
              id: (y = a.value) == null ? void 0 : y.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (b = a.value) == null ? void 0 : b.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ws(ju, {
              id: (N = a.value) == null ? void 0 : N.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (O = a.value) == null ? void 0 : O.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ws(z1, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Xv("", !0);
    };
  }
});
const N8 = /* @__PURE__ */ Ve(D8, [["__scopeId", "data-v-b59dc239"]]), O8 = window.Vue.openBlock, B8 = window.Vue.createElementBlock, Z1 = window.Vue.createElementVNode;
var R8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const P8 = {}, F8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, U8 = /* @__PURE__ */ Z1("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), W8 = /* @__PURE__ */ Z1("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), H8 = [
  U8,
  W8
];
function z8(e, o) {
  return O8(), B8("svg", F8, H8);
}
var Jf = /* @__PURE__ */ R8(P8, [["render", z8]]);
const q8 = window.Vue.watch, G8 = window.Vue.ref, Y8 = window.Vue.onBeforeUnmount, K1 = (e) => {
  const o = G8(!1), r = (s) => {
    s.keyCode === ce.ESCAPE && (s.preventDefault(), o.value = !o.value);
  };
  return q8(e, (s) => {
    s ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), Y8(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, j8 = window.Vue.watch, J1 = (e) => {
  let o;
  j8(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, X1 = window.Vue.watch, Q1 = window.Vue.onBeforeUnmount, e0 = window.Vue.nextTick, Z8 = window.Vue.onMounted, t0 = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Zu = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, n0 = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Q1(() => Zu(o, r)), Z8(() => X1(e, (s) => {
    s ? e0(() => {
      o = t0(r);
    }) : Zu(o, r);
  }, { immediate: !0 }));
}, K8 = (e, o) => {
  let r;
  Q1(() => Zu(r, o.value ? o.value.offsetParent : !1)), X1([e, o], ([s, a]) => {
    s && a ? e0(() => {
      r = t0(a.offsetParent);
    }) : a && Zu(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var J8 = Object.defineProperty, e_ = Object.getOwnPropertySymbols, X8 = Object.prototype.hasOwnProperty, Q8 = Object.prototype.propertyIsEnumerable, t_ = (e, o, r) => o in e ? J8(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, e5 = (e, o) => {
  for (var r in o || (o = {}))
    X8.call(o, r) && t_(e, r, o[r]);
  if (e_)
    for (var r of e_(o))
      Q8.call(o, r) && t_(e, r, o[r]);
  return e;
};
const Vp = window.Vue.defineComponent, rl = window.Vue.ref, t5 = window.Vue.nextTick, o0 = window.Vue.openBlock, r0 = window.Vue.createElementBlock, Ep = window.Vue.createElementVNode, n5 = window.Vue.renderSlot, o5 = window.Vue.resolveComponent, r5 = window.Vue.normalizeClass, i5 = window.Vue.withModifiers, s5 = window.Vue.createVNode, n_ = window.Vue.toRef, o_ = window.Vue.computed, r_ = window.Vue.watch;
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
const a5 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, l5 = Vp({
  props: a5,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = rl(), o = rl(!1), r = (g, y) => {
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
          const N = g;
          return N.type !== "hidden" && N.type !== "file";
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
      y && y.focus ? t5(() => {
        y.focus();
      }) : s(g);
    }, m = rl();
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
}), u5 = /* @__PURE__ */ Ep("div", { tabindex: "0" }, null, -1), c5 = {
  class: "focus-trap-content",
  ref: "content"
}, d5 = /* @__PURE__ */ Ep("div", { tabindex: "0" }, null, -1);
function f5(e, o, r, s, a, u) {
  return o0(), r0("div", null, [
    u5,
    Ep("div", c5, [
      n5(e.$slots, "default")
    ], 512),
    d5
  ]);
}
var s0 = /* @__PURE__ */ i0(l5, [["render", f5]]);
const p5 = Vp({
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
}), h5 = ["aria-label"];
function m5(e, o, r, s, a, u) {
  const c = o5("FeatherIcon");
  return o0(), r0("a", {
    href: "#",
    class: r5(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = i5((f) => e.$emit("close"), ["prevent"]))
  }, [
    s5(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, h5);
}
var a0 = /* @__PURE__ */ i0(p5, [["render", m5], ["__scopeId", "data-v-fc0f3f00"]]);
const l0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, w5 = {
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
}, v5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Vp({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: v5,
  props: w5,
  setup(e, o) {
    const r = oc(n_(e, "labels"), l0), s = n_(e, "modelValue"), a = rl(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = o_(() => !!o.slots.footer), f = o_(() => Ce("dialog-header"));
    e.relative ? K8(s, a) : n0(s), J1(s), r_(K1(s), () => {
      u();
    });
    const m = rl(e.modelValue);
    return r_(m, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), e5({ close: u, hasFooter: c, headerId: f, element: a, shown: m }, r);
  },
  components: {
    FocusTrap: s0,
    DialogClose: a0
  }
});
var _5 = Object.defineProperty, i_ = Object.getOwnPropertySymbols, g5 = Object.prototype.hasOwnProperty, $5 = Object.prototype.propertyIsEnumerable, s_ = (e, o, r) => o in e ? _5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, mc = (e, o) => {
  for (var r in o || (o = {}))
    g5.call(o, r) && s_(e, r, o[r]);
  if (i_)
    for (var r of i_(o))
      $5.call(o, r) && s_(e, r, o[r]);
  return e;
};
const wc = window.Vue.defineComponent, a_ = window.Vue.toRef, l_ = window.Vue.watch, u_ = window.Vue.ref, c_ = window.Vue.resolveComponent, _u = window.Vue.openBlock, d_ = window.Vue.createBlock, y5 = window.Vue.Teleport, f_ = window.Vue.createElementBlock, wf = window.Vue.createVNode, p_ = window.Vue.Transition, vf = window.Vue.withCtx, h_ = window.Vue.createCommentVNode, b5 = window.Vue.withDirectives, C5 = window.Vue.normalizeStyle, V5 = window.Vue.normalizeClass, m_ = window.Vue.createElementVNode, E5 = window.Vue.renderSlot, S5 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var I5 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const u0 = {
  title: "REQUIRED",
  close: "Close Dialog"
}, k5 = {
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
}, A5 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, T5 = wc({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: A5,
  props: k5,
  setup(e, o) {
    const r = oc(a_(e, "labels"), u0), s = a_(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    n0(s), J1(s), l_(K1(s), () => {
      a();
    });
    const u = u_(), c = u_(!1);
    return l_(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), mc({ close: a, shown: c, isShown: s, element: u }, r);
  },
  components: {
    DialogClose: a0,
    FocusTrap: s0
  }
}), x5 = {
  key: 0,
  class: "drawer-container feather-styles"
}, L5 = {
  key: 0,
  class: "greyedOut"
}, M5 = ["aria-label"], D5 = { class: "slot" };
function N5(e, o, r, s, a, u) {
  const c = c_("dialog-close"), f = c_("focus-trap");
  return _u(), d_(y5, { to: "body" }, [
    e.modelValue ? (_u(), f_("div", x5, [
      wf(p_, { name: "greyOutShim" }, {
        default: vf(() => [
          e.modelValue ? (_u(), f_("div", L5)) : h_("", !0)
        ]),
        _: 1
      }),
      wf(p_, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (m) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (m) => e.shown = !1)
      }, {
        default: vf(() => [
          b5((_u(), d_(f, {
            enable: e.modelValue,
            style: C5({ width: e.width }),
            key: "sect",
            class: V5(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: vf(() => [
              m_("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                m_("div", D5, [
                  E5(e.$slots, "default", {}, void 0, !0)
                ]),
                wf(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, M5)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [S5, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : h_("", !0)
  ]);
}
var c0 = /* @__PURE__ */ I5(T5, [["render", N5], ["__scopeId", "data-v-0a36e1dc"]]);
const O5 = mc({
  label: {
    type: String,
    required: !0
  }
}, M1);
wc({
  name: "DrawerTab",
  props: O5,
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
      Ni(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return D1(e);
  },
  components: {
    FeatherRipple: Hr
  }
});
const B5 = mc({}, B1), R5 = O1;
wc({
  emits: R5,
  model: N1,
  props: B5,
  setup(e, o) {
    return R1(e, o);
  }
});
const P5 = mc({
  header: {
    type: String
  }
}, P1);
wc({
  name: "DrawerTabContent",
  props: P5,
  setup(e) {
    return F1(e);
  },
  directives: {
    MenuFocusLoop: KM
  }
});
const F5 = window.Vue.defineComponent, d0 = window.Vue.createElementVNode, w_ = window.Vue.createVNode, U5 = window.Vue.renderList, W5 = window.Vue.Fragment, Na = window.Vue.openBlock, _f = window.Vue.createElementBlock, v_ = window.Vue.createBlock, H5 = window.Vue.unref, z5 = window.Vue.withCtx, q5 = window.Vue.pushScopeId, G5 = window.Vue.popScopeId, Y5 = (e) => (q5("data-v-37e146e7"), e = e(), G5(), e), j5 = { class: "content" }, Z5 = /* @__PURE__ */ Y5(() => /* @__PURE__ */ d0("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), K5 = {
  key: 0,
  class: "situation-list"
}, gf = window.Vue.ref, __ = window.Vue.watch, J5 = /* @__PURE__ */ F5({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, s = ho(), a = gf(r.visible), u = () => {
      let v = s.situations;
      r.situationId !== 0 && (v = s.situations.filter(
        (g) => g.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = gf(s.situations), f = gf(s.situations);
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
    return (v, g) => (Na(), v_(H5(c0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        g[0] || (g[0] = (y) => a.value = y),
        g[1] || (g[1] = (y) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: z5(() => [
        d0("div", j5, [
          Z5,
          w_(Ys, {
            list: c.value,
            isSituation: "",
            onFilteredList: m
          }, null, 8, ["list"]),
          f.value.length ? (Na(), _f("div", K5, [
            (Na(!0), _f(W5, null, U5(f.value, (y) => (Na(), _f("div", {
              class: "card",
              key: y.id
            }, [
              w_(Qg, {
                onClick: (b) => o("situation-selected", y.id),
                "situation-info": y,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Na(), v_(js, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const f0 = /* @__PURE__ */ Ve(J5, [["__scopeId", "data-v-37e146e7"]]), X5 = window.Vue.defineComponent, g_ = window.Vue.normalizeClass, Vs = window.Vue.createElementVNode, gu = window.Vue.unref, Q5 = window.Vue.createVNode, $u = window.Vue.toDisplayString, eF = window.Vue.createTextVNode, tF = window.Vue.openBlock, nF = window.Vue.createElementBlock, oF = window.Vue.pushScopeId, rF = window.Vue.popScopeId, iF = (e) => (oF("data-v-f3d99277"), e = e(), rF(), e), sF = { class: "alarmInfo" }, aF = { class: "alarm-title" }, lF = /* @__PURE__ */ iF(() => /* @__PURE__ */ Vs("strong", null, " Duration: ", -1)), uF = { class: "description" }, cF = /* @__PURE__ */ X5({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, s = new Date().getTime();
    return (a, u) => (tF(), nF("div", {
      class: g_(["alarm", { selected: r.selected }])
    }, [
      Vs("div", sF, [
        Vs("div", {
          class: g_(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        Q5(gu(Mi), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Vs("div", aF, $u(e.alarm.nodeLabel) + " - " + $u(e.alarm.id), 1)
      ]),
      Vs("div", null, [
        lF,
        eF(" " + $u(gu(tc)(gu(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Vs("div", uF, $u(gu(qg)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Sp = /* @__PURE__ */ Ve(cF, [["__scopeId", "data-v-f3d99277"]]), dF = window.Vue.defineComponent, Mu = window.Vue.createElementVNode, vs = window.Vue.unref, fF = window.Vue.toDisplayString, $_ = window.Vue.withCtx, $f = window.Vue.createVNode, pF = window.Vue.renderList, hF = window.Vue.Fragment, Oa = window.Vue.openBlock, yf = window.Vue.createElementBlock, y_ = window.Vue.createBlock, mF = window.Vue.pushScopeId, wF = window.Vue.popScopeId, vF = (e) => (mF("data-v-35547098"), e = e(), wF(), e), _F = { class: "content" }, gF = { class: "header" }, $F = /* @__PURE__ */ vF(() => /* @__PURE__ */ Mu("h4", null, "ADD ALARMS", -1)), yF = {
  key: 0,
  class: "alarms-list"
}, yu = window.Vue.ref, b_ = window.Vue.watch, bF = /* @__PURE__ */ dF({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, s = ho(), a = yu(r.visible), u = yu([]), c = yu(["all"]), f = yu(s.unassignedAlarms);
    b_(r, () => {
      a.value = r.visible, u.value = [], f.value = s.unassignedAlarms;
    }), b_(
      () => s.unassignedAlarms,
      () => {
        g();
      }
    );
    const m = (b) => {
      Be.exports.includes(u.value, b) ? Be.exports.remove(u.value, (N) => N === b) : u.value.push(b);
    }, v = () => {
      o("alarms-selected", u.value);
    }, g = () => {
      let b = s.unassignedAlarms;
      c.value.includes("all") || (b = b.filter(
        (N) => c.value.includes(N.severity)
      )), f.value = b;
    }, y = (b) => {
      f.value = b;
    };
    return (b, N) => (Oa(), y_(vs(c0), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        N[0] || (N[0] = (O) => a.value = O),
        N[1] || (N[1] = (O) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: $_(() => [
        Mu("div", _F, [
          Mu("div", gF, [
            $F,
            $f(vs(we), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: $_(() => [
                Mu("span", null, "Add " + fF(vs(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          $f(Ys, {
            list: vs(s).unassignedAlarms,
            onFilteredList: y
          }, null, 8, ["list"]),
          f.value.length ? (Oa(), yf("div", yF, [
            (Oa(!0), yf(hF, null, pF(f.value, (O) => (Oa(), yf("div", {
              class: "card",
              key: O.id
            }, [
              $f(Sp, {
                selected: vs(Be.exports.includes)(vs(u), O.id),
                alarm: O,
                onSelectedAlarm: m
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Oa(), y_(js, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const CF = /* @__PURE__ */ Ve(bF, [["__scopeId", "data-v-35547098"]]), VF = window.Vue.openBlock, EF = window.Vue.createElementBlock, p0 = window.Vue.createElementVNode;
var SF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const IF = {}, kF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AF = /* @__PURE__ */ p0("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), TF = /* @__PURE__ */ p0("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), xF = [
  AF,
  TF
];
function LF(e, o) {
  return VF(), EF("svg", kF, xF);
}
var C_ = /* @__PURE__ */ SF(IF, [["render", LF]]);
const MF = window.Vue.defineComponent, Tn = window.Vue.createElementVNode, Pt = window.Vue.unref, Jt = window.Vue.createVNode, Ba = window.Vue.withCtx, DF = window.Vue.renderList, V_ = window.Vue.Fragment, Ra = window.Vue.openBlock, bu = window.Vue.createElementBlock, NF = window.Vue.createBlock, OF = window.Vue.pushScopeId, BF = window.Vue.popScopeId, Zs = (e) => (OF("data-v-76f75ba2"), e = e(), BF(), e), RF = { class: "container" }, PF = { class: "header" }, FF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ Tn("div", { class: "title" }, "Alarms", -1)), UF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ Tn("span", null, "Add Alarms", -1)), WF = { class: "alarms-container" }, HF = { class: "filters" }, zF = { class: "list" }, qF = { class: "row actions" }, GF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ Tn("span", null, "Clear", -1)), YF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ Tn("span", null, "Acknowledge", -1)), jF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ Tn("span", null, "Move", -1)), ZF = /* @__PURE__ */ Zs(() => /* @__PURE__ */ Tn("span", null, "Remove", -1)), KF = { class: "section" }, JF = {
  key: 0,
  class: "alarm-list"
}, Cu = window.Vue.ref, XF = window.Vue.watch, QF = window.Vue.reactive, e6 = window.Vue.markRaw, t6 = /* @__PURE__ */ MF({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = e6({
      Add: pc,
      Delete: C_,
      MarkComplete: Gu,
      CheckCircle: Ns,
      ExitToApp: Jf
    }), s = hc(), a = ho(), u = Cu(!1), c = Cu(["all"]), f = Cu(!1), m = Cu(!1), v = QF({
      selectedAlarms: [],
      alarms: o.alarms
    });
    XF(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const g = (T) => {
      v.selectedAlarms.includes(T) ? Be.exports.remove(v.selectedAlarms, (P) => P == T) : v.selectedAlarms.push(T);
    }, y = async (T) => {
      v.selectedAlarms.length ? (await zI(v.selectedAlarms, T), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, b = () => v.selectedAlarms.length === o.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), N = async () => {
      b() && (await Dw(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, O = async (T) => {
      b() && (await Dw(
        o.situationId,
        v.selectedAlarms
      ) ? await R(T, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, R = async (T, P) => {
      P.length ? await Xg(T, P) ? a.getSituation(T) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, B = async (T) => {
      await R(o.situationId, T), m.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, A = (T) => {
      v.alarms = T;
    };
    return (T, P) => (Ra(), bu(V_, null, [
      Tn("div", RF, [
        Tn("div", PF, [
          FF,
          Jt(Pt(we), {
            class: "add-alarms-btn",
            onClick: P[0] || (P[0] = (k) => m.value = !0)
          }, {
            default: Ba(() => [
              Jt(Pt(X), {
                icon: Pt(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              UF
            ]),
            _: 1
          })
        ]),
        Tn("div", WF, [
          Tn("div", HF, [
            Jt(Ys, {
              list: o.alarms,
              onFilteredList: A,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Tn("div", zF, [
            Tn("div", qF, [
              Jt(Pt(Mi), {
                modelValue: u.value,
                "onUpdate:modelValue": P[1] || (P[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              Jt(Pt(we), {
                onClick: P[2] || (P[2] = () => y("clear"))
              }, {
                default: Ba(() => [
                  Jt(Pt(X), {
                    icon: Pt(Gu),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  GF
                ]),
                _: 1
              }),
              Jt(Pt(we), {
                onClick: P[3] || (P[3] = () => y("ack"))
              }, {
                default: Ba(() => [
                  Jt(Pt(X), {
                    icon: Pt(Ns),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  YF
                ]),
                _: 1
              }),
              Jt(Pt(we), { onClick: S }, {
                default: Ba(() => [
                  Jt(Pt(X), {
                    icon: Pt(Jf),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  jF
                ]),
                _: 1
              }),
              Jt(Pt(we), { onClick: N }, {
                default: Ba(() => [
                  Jt(Pt(X), {
                    icon: Pt(C_),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  ZF
                ]),
                _: 1
              })
            ]),
            Tn("div", KF, [
              v.alarms.length > 0 ? (Ra(), bu("div", JF, [
                (Ra(!0), bu(V_, null, DF(v.alarms, (k) => (Ra(), bu("div", {
                  key: k.id
                }, [
                  Jt(N8, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: g
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Ra(), NF(js, { key: 1 }))
            ])
          ])
        ])
      ]),
      Jt(f0, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: P[4] || (P[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      Jt(CF, {
        visible: m.value,
        onAlarmsSelected: B,
        onDrawerAlarmsClosed: P[5] || (P[5] = () => m.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const n6 = /* @__PURE__ */ Ve(t6, [["__scopeId", "data-v-76f75ba2"]]), o6 = window.Vue.defineComponent, lo = window.Vue.createVNode, kn = window.Vue.unref, bf = window.Vue.normalizeClass, Vu = window.Vue.toDisplayString, Pa = window.Vue.openBlock, Fa = window.Vue.createElementBlock, E_ = window.Vue.createCommentVNode, r6 = window.Vue.withCtx, Yn = window.Vue.createElementVNode, i6 = window.Vue.Fragment, s6 = window.Vue.pushScopeId, a6 = window.Vue.popScopeId, l6 = (e) => (s6("data-v-fafb3615"), e = e(), a6(), e), u6 = { class: "section" }, c6 = { class: "action-section" }, d6 = { class: "btn-row" }, f6 = { key: 0 }, p6 = { key: 1 }, h6 = {
  key: 0,
  class: "situation-detail"
}, m6 = { class: "situation-info" }, w6 = { class: "id" }, v6 = ["innerHTML"], _6 = /* @__PURE__ */ l6(() => /* @__PURE__ */ Yn("p", null, null, -1)), g6 = { class: "boxes" }, $6 = { class: "parameters" }, y6 = { class: "section memo-boxes" }, b6 = { key: 0 }, C6 = window.Vue.computed, S_ = window.Vue.ref, V6 = window.Vue.watch, E6 = /* @__PURE__ */ o6({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = hc(), s = ho(), a = kt.REJECTED, u = S_(o.situationInfo.status), c = S_(o.situationInfo);
    V6(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = C6(
      () => {
        var v;
        return zg(Hg(((v = c.value) == null ? void 0 : v.description) || ""));
      }
    ), m = async (v) => {
      var y;
      await Jg(
        (y = o.situationInfo) == null ? void 0 : y.id,
        v.toLowerCase()
      ) ? (u.value = v, s.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, g) => {
      var y, b, N, O, R, B, S, A, T, P, k, U;
      return Pa(), Fa(i6, null, [
        Yn("div", u6, [
          Yn("div", c6, [
            lo(z1, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Yn("div", d6, [
              lo(kn(we), {
                class: bf(["btn", { rejected: u.value == kn(a) }]),
                "data-test": "btn-reject",
                onClick: g[0] || (g[0] = (W) => m(kn(a)))
              }, {
                default: r6(() => [
                  lo(kn(X), {
                    icon: kn(Mg),
                    "aria-hidden": "true",
                    class: bf(["icon reject", { rejected: u.value == kn(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == kn(a) ? (Pa(), Fa("span", f6, Vu(kn(a)), 1)) : (Pa(), Fa("span", p6, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (Pa(), Fa("div", h6, [
            Yn("div", {
              class: bf(["severity-line", [`${(b = (y = c.value) == null ? void 0 : y.severity) == null ? void 0 : b.toLowerCase()}-bg dark`]])
            }, null, 2),
            Yn("div", m6, [
              Yn("div", w6, [
                Yn("div", null, " Situation - " + Vu((N = c.value) == null ? void 0 : N.id) + " - " + Vu(c.value.alarms.length) + " alarm(s) affects " + Vu(kn(Be.exports.size)(kn(Be.exports.groupBy)((O = c.value) == null ? void 0 : O.alarms, "nodeId"))) + " node(s) ", 1),
                lo(H1, {
                  severity: (R = c.value) == null ? void 0 : R.severity
                }, null, 8, ["severity"])
              ]),
              Yn("span", {
                innerHTML: kn(f),
                "data-test": "situation-description"
              }, null, 8, v6),
              _6,
              Yn("div", g6, [
                lo(rf, {
                  label: "First Event",
                  info: kn(To)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                lo(rf, {
                  label: "Last Event",
                  info: kn(To)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                lo(rf, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Yn("div", $6, [
              lo(B3, {
                alarms: (B = c.value) == null ? void 0 : B.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : E_("", !0),
          Yn("div", y6, [
            lo(ju, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (A = c.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (T = c.value) == null ? void 0 : T.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            lo(ju, {
              id: (P = c.value) == null ? void 0 : P.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (U = c.value) == null ? void 0 : U.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (Pa(), Fa("div", b6, [
          lo(n6, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : E_("", !0)
      ], 64);
    };
  }
});
const S6 = /* @__PURE__ */ Ve(E6, [["__scopeId", "data-v-fafb3615"]]);
var I6 = Object.defineProperty, k6 = Object.defineProperties, A6 = Object.getOwnPropertyDescriptors, I_ = Object.getOwnPropertySymbols, T6 = Object.prototype.hasOwnProperty, x6 = Object.prototype.propertyIsEnumerable, k_ = (e, o, r) => o in e ? I6(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xf = (e, o) => {
  for (var r in o || (o = {}))
    T6.call(o, r) && k_(e, r, o[r]);
  if (I_)
    for (var r of I_(o))
      x6.call(o, r) && k_(e, r, o[r]);
  return e;
}, L6 = (e, o) => k6(e, A6(o));
const h0 = window.Vue.defineComponent, Ti = window.Vue.resolveComponent, Du = window.Vue.openBlock, A_ = window.Vue.createBlock, Nu = window.Vue.mergeProps, xi = window.Vue.withCtx, m0 = window.Vue.createElementBlock, M6 = window.Vue.Fragment, D6 = window.Vue.renderList, N6 = window.Vue.createTextVNode, O6 = window.Vue.toDisplayString, B6 = window.Vue.computed, T_ = window.Vue.toRef, Ua = window.Vue.createVNode, x_ = window.Vue.toHandlers, R6 = window.Vue.renderSlot, P6 = window.Vue.normalizeClass, F6 = window.Vue.createElementVNode;
var w0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const U6 = h0({
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
      return Ce("feather-select-active");
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
        ll(o, this.$refs.list.$el);
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
    FeatherList: hp,
    FeatherListItem: pl
  }
});
function W6(e, o, r, s, a, u) {
  const c = Ti("FeatherListItem"), f = Ti("FeatherList");
  return Du(), A_(f, Nu(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: xi(() => [
      (Du(!0), m0(M6, null, D6(e.options, (m, v) => (Du(), A_(c, {
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
        default: xi(() => [
          N6(O6(m[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var H6 = /* @__PURE__ */ w0(U6, [["render", W6], ["__scopeId", "data-v-eae820da"]]);
const z6 = L6(Xf(Xf({}, ic), zs), {
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
}), q6 = {
  "update:modelValue": (e) => !0
}, G6 = h0({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: q6,
  props: z6,
  setup(e, o) {
    qs(e), sc(e);
    const r = B6(() => Ce("feather-select-input")), { validate: s } = Ws(r, T_(e, "modelValue"), e.label, e.schema, T_(e, "error"));
    return Xf({
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
      return Ce("feather-select-description");
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
    icon: () => fl
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
      Ni(this.delayTimeout), this.delayTimeout = Di(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: rc,
    InputSubText: Us,
    FeatherMenu: c1,
    List: H6,
    FeatherIcon: X
  }
});
function Y6(e, o, r, s, a, u) {
  const c = Ti("FeatherIcon"), f = Ti("InputWrapper"), m = Ti("List"), v = Ti("FeatherMenu"), g = Ti("InputSubText");
  return Du(), m0("div", Nu(e.inherittedAttrs, { class: "feather-select-container" }), [
    Ua(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: xi((y) => [
        Ua(f, Nu({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, y.attrs, x_(y.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: xi(() => [
            R6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: xi(() => [
            Ua(c, {
              class: P6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: xi(() => [
            F6("input", Nu(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, x_(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: xi(() => [
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
var j6 = /* @__PURE__ */ w0(G6, [["render", Y6], ["__scopeId", "data-v-ecb32d90"]]);
const Z6 = window.Vue.openBlock, K6 = window.Vue.createElementBlock, v0 = window.Vue.createElementVNode;
var J6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const X6 = {}, Q6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e7 = /* @__PURE__ */ v0("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), t7 = /* @__PURE__ */ v0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), n7 = [
  e7,
  t7
];
function o7(e, o) {
  return Z6(), K6("svg", Q6, n7);
}
var r7 = /* @__PURE__ */ J6(X6, [["render", o7]]);
const Ou = window.Vue.openBlock, Qf = window.Vue.createElementBlock, _0 = window.Vue.createElementVNode, i7 = window.Vue.defineComponent, Ci = window.Vue.ref, s7 = window.Vue.provide, L_ = window.Vue.computed, a7 = window.Vue.onUnmounted, M_ = window.Vue.toRef, l7 = window.Vue.resolveComponent, u7 = window.Vue.Fragment, c7 = window.Vue.createBlock, d7 = window.Vue.Teleport, D_ = window.Vue.createVNode, f7 = window.Vue.Transition, p7 = window.Vue.withCtx, h7 = window.Vue.normalizeClass, m7 = window.Vue.normalizeStyle, w7 = window.Vue.toDisplayString, v7 = window.Vue.createCommentVNode, _7 = window.Vue.renderSlot, Cf = window.Vue.nextTick;
var g0 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const g7 = {}, $7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, y7 = /* @__PURE__ */ _0("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), b7 = [
  y7
];
function C7(e, o) {
  return Ou(), Qf("svg", $7, b7);
}
var V7 = /* @__PURE__ */ g0(g7, [["render", C7]]), It = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(It || {}), tr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(tr || {});
const E7 = (e, o, r, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + s && c.push(It.top), a >= o.height + s && c.push(It.bottom);
  const f = [];
  u >= o.width + s && f.push(It.right), e.left >= o.width + s && f.push(It.left);
  let m = [...f, ...c];
  return (r === It.top || r === It.bottom) && (m = [...c, ...f]), m.indexOf(r) > -1 ? r : m.length ? m[0] : r;
}, S7 = (e, o, r, s, a = 28) => {
  if (e === It.left || e === It.right)
    return tr.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], m = u, v = c + o.width / 2, g = r.width - a, y = r.width / 2;
  return m >= y && v >= y && f.push(tr.center), v >= g && f.push(tr.left), m >= g && f.push(tr.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, I7 = {
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
    default: () => tr.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, k7 = i7({
  props: I7,
  setup(e) {
    const o = Ci(!1), r = Ci(!1), s = Ce("feather-tooltip-trigger"), a = Ce("feather-tooltip"), u = "data-feather-tooltip";
    s7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Ni(c), o.value || (c = Di(R, e.enterDelay));
    }, m = () => {
      Ni(c), c = Di(B, e.exitDelay);
    }, v = (ke) => {
      ke.keyCode === ce.ESCAPE && (ke.preventDefault(), B(!0));
    }, g = L_(() => ({
      [u]: s,
      "aria-describedby": a
    })), y = {
      mouseenter: f,
      mouseleave: m,
      focus: f,
      blur: m,
      keydown: v
    }, b = Ci(document), N = u1(b, () => B(!0));
    a7(() => B(!0));
    const O = () => document.getElementById(a), R = () => {
      r.value = !1, o.value = !0, Cf(() => {
        const ke = O();
        he(ke), o.value = !1, Cf(() => {
          r.value = !0, o.value = !0, N.value = !0;
        });
      });
    }, B = (ke = !1) => {
      U.value = "", k.value = "", W.value = "", Z.value = "", o.value = !1, ke && (r.value = !1), N.value = !1;
    }, S = M_(e, "placement"), A = M_(e, "pointerAlignment"), T = 8, P = 24, k = Ci(""), U = Ci(""), W = Ci(""), Z = Ci(""), Le = L_(() => Z.value ? "p-" + Z.value : !1), he = (ke) => {
      const Ee = document.querySelector(`[${u}=${s}]`);
      if (!Ee) {
        console.log("trigger not found");
        return;
      }
      Cf(() => {
        const We = Ee.getBoundingClientRect(), ze = ke.getBoundingClientRect(), ge = E7(We, ze, S.value, T), Ze = S7(ge, We, ze, A.value, P);
        W.value = Ze.toString(), Z.value = ge.toString();
        let Qe = 0, qe = 0;
        if ((ge === It.left || ge === It.right) && (Qe = We.top + We.height / 2 - ze.height / 2, ge === It.left && (qe = We.left - ze.width - T), ge === It.right && (qe = We.right)), ge === It.top || ge === It.bottom) {
          Qe = We.top - ze.height - T, ge === It.bottom && (Qe = We.bottom);
          const tn = We.left + We.width / 2;
          switch (Ze) {
            case tr.center:
              qe = tn - ze.width / 2;
              break;
            case tr.left:
              qe = tn - P;
              break;
            case tr.right:
              qe = tn - ze.width + P;
              break;
          }
        }
        k.value = Qe.toString() + "px", U.value = qe.toString() + "px";
      });
    };
    return {
      attrs: g,
      listeners: y,
      show: o,
      animate: r,
      alignmentClass: W,
      placementClass: Le,
      top: k,
      left: U,
      tooltipID: a
    };
  },
  components: {
    Pointer: V7
  }
}), A7 = ["id"];
function T7(e, o, r, s, a, u) {
  const c = l7("Pointer");
  return Ou(), Qf(u7, null, [
    (Ou(), c7(d7, { to: "body" }, [
      D_(f7, { css: e.animate }, {
        default: p7(() => [
          e.show ? (Ou(), Qf("div", {
            key: 0,
            class: h7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: m7({ left: e.left, top: e.top })
          }, [
            _0("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, w7(e.title), 9, A7),
            D_(c, { class: "tooltip-pointer" })
          ], 6)) : v7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    _7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var N_ = /* @__PURE__ */ g0(k7, [["render", T7], ["__scopeId", "data-v-3da6b22e"]]);
const x7 = window.Vue.defineComponent, Vf = window.Vue.normalizeStyle, Ef = window.Vue.createElementVNode, Wa = window.Vue.unref, O_ = window.Vue.toHandlers, B_ = window.Vue.mergeProps, R_ = window.Vue.withCtx, P_ = window.Vue.createVNode, L7 = window.Vue.renderList, M7 = window.Vue.Fragment, Ha = window.Vue.openBlock, za = window.Vue.createElementBlock, F_ = window.Vue.normalizeClass, U_ = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const D7 = { class: "row" }, N7 = /* @__PURE__ */ x7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (Ha(), za("div", D7, [
      Ef("div", {
        class: "line-gray",
        style: Vf({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      P_(Wa(N_), {
        title: Wa(To)(e.alarm.firstEventTime)
      }, {
        default: R_(({ attrs: f, on: m }) => [
          Ef("div", B_({ class: "circle" }, f, O_(m), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Ha(!0), za(M7, null, L7(o.events, (f, m) => (Ha(), za("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[m + 1] ? (Ha(), za("div", {
          key: 0,
          class: F_(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Vf({
            width: s(f.createTime, o.events[m + 1].createTime) + "px"
          })
        }, null, 6)) : U_("", !0),
        P_(Wa(N_), {
          title: Wa(To)(e.alarm.firstEventTime)
        }, {
          default: R_(({ attrs: v, on: g }) => [
            o.events[m + 1] ? (Ha(), za("div", B_({ key: 0 }, v, O_(g), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : U_("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Ef("div", {
        class: F_(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Vf({
          width: s(e.events[e.events.length - 1].createTime, Wa(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const O7 = /* @__PURE__ */ Ve(N7, [["__scopeId", "data-v-6c43a557"]]), B7 = window.Vue.openBlock, R7 = window.Vue.createElementBlock, $0 = window.Vue.createElementVNode;
var P7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const F7 = {}, U7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, W7 = /* @__PURE__ */ $0("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), H7 = /* @__PURE__ */ $0("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), z7 = [
  W7,
  H7
];
function q7(e, o) {
  return B7(), R7("svg", U7, z7);
}
var G7 = /* @__PURE__ */ P7(F7, [["render", q7]]);
const Y7 = window.Vue.defineComponent, ep = window.Vue.createElementVNode, j7 = window.Vue.renderList, W_ = window.Vue.Fragment, Sf = window.Vue.openBlock, If = window.Vue.createElementBlock, Z7 = window.Vue.normalizeClass, K7 = window.Vue.unref, H_ = window.Vue.toDisplayString, J7 = window.Vue.pushScopeId, X7 = window.Vue.popScopeId, Q7 = (e) => (J7("data-v-2e087f7b"), e = e(), X7(), e), eU = /* @__PURE__ */ Q7(() => /* @__PURE__ */ ep("strong", null, "Events:", -1)), tU = /* @__PURE__ */ Y7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, s) => (Sf(), If(W_, null, [
      eU,
      (Sf(!0), If(W_, null, j7(o.events, (a) => (Sf(), If("div", {
        class: "event-description",
        key: a.id
      }, [
        ep("div", {
          class: Z7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        ep("div", null, H_(K7(To)(a.createTime)) + " - " + H_(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const nU = /* @__PURE__ */ Ve(tU, [["__scopeId", "data-v-2e087f7b"]]), oU = window.Vue.defineComponent, rU = window.Vue.normalizeClass, An = window.Vue.createElementVNode, _s = window.Vue.toDisplayString, dn = window.Vue.unref, gs = window.Vue.createVNode, y0 = window.Vue.createTextVNode, iU = window.Vue.renderList, z_ = window.Vue.Fragment, Qo = window.Vue.openBlock, Vi = window.Vue.createElementBlock, q_ = window.Vue.createBlock, Eu = window.Vue.createCommentVNode, sU = window.Vue.normalizeStyle, aU = window.Vue.pushScopeId, lU = window.Vue.popScopeId, uU = (e) => (aU("data-v-57b5ddda"), e = e(), lU(), e), cU = { class: "section detail" }, dU = { class: "id" }, fU = {
  key: 0,
  class: "section"
}, pU = /* @__PURE__ */ uU(() => /* @__PURE__ */ An("div", { class: "id" }, "Alarms", -1)), hU = { class: "action-btns" }, mU = { class: "zoom" }, wU = /* @__PURE__ */ y0(" Zoom "), vU = { class: "times" }, _U = {
  key: 0,
  class: "timeline-container"
}, gU = { class: "alarm-id" }, $U = {
  key: 0,
  class: "panel"
}, Mr = window.Vue.ref, yU = window.Vue.watch, bU = /* @__PURE__ */ oU({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var P, k;
    const o = e, r = ho(), s = Mr(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = Mr(a[0]), c = Mr(o.width), f = Mr(o.width), m = Mr(new Date().getTime()), v = () => {
      var U, W;
      if (!o.situation.events) {
        const Z = (W = (U = o.situation) == null ? void 0 : U.alarms) == null ? void 0 : W.map((Le) => Le.id);
        r.getEvents(o.situation.id, Z);
      }
    };
    v();
    const g = () => (m.value = new Date().getTime(), c.value / (Number(m.value) - Number(b.value))), y = Mr(o.situation.alarms), b = Mr(
      ((k = Be.exports.minBy((P = o.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), N = Mr(g());
    yU(o, () => {
      var U, W;
      b.value = ((W = Be.exports.minBy((U = o.situation) == null ? void 0 : U.alarms, "firstEventTime")) == null ? void 0 : W.firstEventTime) || new Date().getTime(), v(), c.value = f.value, N.value = g(), y.value = o.situation.alarms, u.value = a[0];
    });
    const O = (U) => {
      if ((U == null ? void 0 : U.id) === 1 && (y.value = o.situation.alarms), (U == null ? void 0 : U.id) === 2) {
        const W = Be.exports.groupBy(y.value, "severity"), Z = [
          ...W.CRITICAL || [],
          ...W.MAJOR || [],
          ...W.MINOR || [],
          ...W.WARNING || [],
          ...W.NORMAL || [],
          ...W.CLEARED || [],
          ...W.INDETERMINATE || []
        ];
        y.value = Z.filter((Le) => Le);
      }
      if ((U == null ? void 0 : U.id) === 3) {
        const W = Be.exports.reverse(
          Be.exports.sortBy(
            o.situation.alarms,
            (Z) => Number(Z.lastEventTime) - Number(Z.firstEventTime)
          )
        );
        y.value = W;
      }
    }, R = () => {
      c.value += 100, N.value = g();
    }, B = () => {
      c.value -= 100, N.value = g();
    }, S = () => {
      c.value = f.value, N.value = g();
    }, A = (U) => {
      s.value = U;
    }, T = () => {
      s.value = 0;
    };
    return (U, W) => {
      var Z, Le;
      return Qo(), Vi(z_, null, [
        An("div", cU, [
          An("div", {
            class: rU(["severity-line", [`${(Le = (Z = o.situation) == null ? void 0 : Z.severity) == null ? void 0 : Le.toLowerCase()}-bg dark`]])
          }, null, 2),
          An("div", null, [
            An("div", dU, "Situation " + _s(o.situation.id), 1),
            An("div", null, " Duration: " + _s(dn(tc)(m.value, new Date(b.value))), 1)
          ])
        ]),
        y.value && y.value.length > 0 ? (Qo(), Vi("div", fU, [
          pU,
          An("div", hU, [
            gs(dn(j6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                W[0] || (W[0] = (he) => u.value = he),
                O
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            An("div", mU, [
              wU,
              An("div", null, [
                gs(dn(X), {
                  icon: dn(r7),
                  class: "zoom-icon",
                  onClick: R
                }, null, 8, ["icon"]),
                gs(dn(X), {
                  icon: dn(E1),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                gs(dn(X), {
                  icon: dn(G7),
                  class: "zoom-icon",
                  onClick: B
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Qo(), Vi("div", {
            key: 0,
            class: "alarms",
            style: sU({
              width: f.value + 50 + "px"
            })
          }, [
            An("div", vU, [
              An("div", null, _s(dn(To)(b.value)), 1),
              An("div", null, _s(dn(To)(m.value)), 1)
            ]),
            e.situation.events ? (Qo(), Vi("div", _U, [
              (Qo(!0), Vi(z_, null, iU(y.value, (he) => (Qo(), Vi("div", {
                class: "timeline",
                key: he.id
              }, [
                An("div", gU, [
                  y0(_s(he.nodeLabel) + " - " + _s(he.id) + " ", 1),
                  s.value === he.id ? (Qo(), q_(dn(X), {
                    key: 0,
                    icon: dn(fl),
                    class: "zoom-icon expand",
                    onClick: T
                  }, null, 8, ["icon"])) : (Qo(), q_(dn(X), {
                    key: 1,
                    icon: dn(t1),
                    class: "zoom-icon expand",
                    onClick: () => A(he.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                gs(O7, {
                  alarm: he,
                  proportion: N.value,
                  "min-start": b.value,
                  events: o.situation.events[he.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === he.id ? (Qo(), Vi("div", $U, [
                  gs(nU, {
                    events: o.situation.events[he.id]
                  }, null, 8, ["events"])
                ])) : Eu("", !0)
              ]))), 128))
            ])) : Eu("", !0)
          ], 4)) : Eu("", !0)
        ])) : Eu("", !0)
      ], 64);
    };
  }
});
const CU = /* @__PURE__ */ Ve(bU, [["__scopeId", "data-v-57b5ddda"]]), VU = window.Vue.defineComponent, pn = window.Vue.createElementVNode, uo = window.Vue.unref, Ht = window.Vue.createTextVNode, $s = window.Vue.withCtx, tt = window.Vue.openBlock, EU = window.Vue.createBlock, Su = window.Vue.createCommentVNode, Dr = window.Vue.createVNode, it = window.Vue.createElementBlock, SU = window.Vue.resolveComponent, Ei = window.Vue.toDisplayString, G_ = window.Vue.renderList, Y_ = window.Vue.Fragment, IU = window.Vue.pushScopeId, kU = window.Vue.popScopeId, Ks = (e) => (IU("data-v-8418d0e3"), e = e(), kU(), e), AU = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, TU = { class: "header" }, xU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("h3", null, "AI Suggestions", -1)), LU = { class: "header-actions" }, MU = /* @__PURE__ */ Ht(" Re-evaluate "), DU = /* @__PURE__ */ Ht(" Refresh "), NU = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, OU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("span", null, "Loading\u2026", -1)), BU = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, RU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("span", null, "Requesting a fresh analysis\u2026", -1)), PU = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, FU = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, UU = /* @__PURE__ */ Ht(" The LLM integration is currently disabled. Enable it on the "), WU = /* @__PURE__ */ Ht("configuration page"), HU = /* @__PURE__ */ Ht(" to start generating suggestions for new situations. "), zU = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, qU = /* @__PURE__ */ Ht(" No API key is configured. Add one on the "), GU = /* @__PURE__ */ Ht("configuration page"), YU = /* @__PURE__ */ Ht(" to enable AI suggestions. "), jU = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, ZU = /* @__PURE__ */ Ht(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), KU = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("strong", null, "Re-evaluate", -1)), JU = /* @__PURE__ */ Ht(" above to trigger one now. "), XU = [
  ZU,
  KU,
  JU
], QU = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, e9 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, t9 = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, n9 = { class: "failed-msg" }, o9 = /* @__PURE__ */ Ht(" The last LLM request failed: "), r9 = /* @__PURE__ */ Ht(" Retry "), i9 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, s9 = /* @__PURE__ */ Ht(" Could not load suggestions. Please retry. "), a9 = /* @__PURE__ */ Ht("Retry"), l9 = {
  key: 6,
  "data-test": "ai-ready"
}, u9 = {
  key: 0,
  class: "meta"
}, c9 = /* @__PURE__ */ Ht(" Generated by "), d9 = { class: "section" }, f9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("h4", null, "Probable root causes", -1)), p9 = {
  key: 0,
  "data-test": "ai-root-causes"
}, h9 = {
  key: 1,
  class: "empty"
}, m9 = { class: "section" }, w9 = /* @__PURE__ */ Ks(() => /* @__PURE__ */ pn("h4", null, "Possible resolutions", -1)), v9 = {
  key: 0,
  "data-test": "ai-resolutions"
}, _9 = {
  key: 1,
  class: "empty"
}, kf = window.Vue.computed, g9 = window.Vue.onBeforeUnmount, $9 = window.Vue.onMounted, Af = window.Vue.ref, y9 = /* @__PURE__ */ VU({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = Oi(), s = Af("loading"), a = Af(null), u = Af(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const A = await Kg(o.situationId);
      if (A === !1) {
        s.value = "error";
        return;
      }
      if (A === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = A, s.value = A.status;
    }, N = async () => {
      s.value = "loading", g(), await b(), y();
    }, O = async () => {
      u.value = null, s.value = "reanalyzing", g();
      const A = await NT(o.situationId);
      if (A === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = A, s.value = A.status, y();
    };
    $9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await b(), y();
    }), g9(() => g());
    const R = kf(() => {
      var A;
      return (A = a.value) != null && A.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), B = kf(() => {
      const A = r.llmConfig;
      return !A || !A.enabled ? "disabled" : A.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = kf(
      () => {
        var A, T;
        return ((A = r.llmConfig) == null ? void 0 : A.enabled) === !0 && ((T = r.llmConfig) == null ? void 0 : T.apiKeyPresent) === !0;
      }
    );
    return (A, T) => {
      var k;
      const P = SU("router-link");
      return tt(), it("div", AU, [
        pn("div", TU, [
          xU,
          pn("div", LU, [
            uo(S) ? (tt(), EU(uo(we), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: O
            }, {
              default: $s(() => [
                MU
              ]),
              _: 1
            }, 8, ["disabled"])) : Su("", !0),
            Dr(uo(we), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: N
            }, {
              default: $s(() => [
                DU
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (tt(), it("div", NU, [
          Dr(uo(xs)),
          OU
        ])) : s.value === "reanalyzing" ? (tt(), it("div", BU, [
          Dr(uo(xs)),
          RU
        ])) : s.value === "absent" ? (tt(), it("div", PU, [
          uo(B) === "disabled" ? (tt(), it("span", FU, [
            UU,
            Dr(P, { to: "/settings" }, {
              default: $s(() => [
                WU
              ]),
              _: 1
            }),
            HU
          ])) : uo(B) === "no-key" ? (tt(), it("span", zU, [
            qU,
            Dr(P, { to: "/settings" }, {
              default: $s(() => [
                GU
              ]),
              _: 1
            }),
            YU
          ])) : (tt(), it("span", jU, XU)),
          u.value ? (tt(), it("div", QU, Ei(u.value), 1)) : Su("", !0)
        ])) : s.value === "pending" ? (tt(), it("div", e9, [
          Dr(uo(xs)),
          pn("span", null, " Analyzing alarms with the LLM\u2026 requested at " + Ei(uo(R)) + ". ", 1)
        ])) : s.value === "failed" ? (tt(), it("div", t9, [
          pn("div", n9, [
            o9,
            pn("code", null, Ei(((k = a.value) == null ? void 0 : k.error) || "unknown error"), 1)
          ]),
          Dr(uo(we), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: N
          }, {
            default: $s(() => [
              r9
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (tt(), it("div", i9, [
          s9,
          Dr(uo(we), {
            secondary: "",
            onClick: N
          }, {
            default: $s(() => [
              a9
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (tt(), it("div", l9, [
          a.value.completedAt ? (tt(), it("div", u9, [
            c9,
            pn("strong", null, Ei(a.value.model), 1),
            Ht(" at " + Ei(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Su("", !0),
          pn("div", d9, [
            f9,
            a.value.rootCauses.length ? (tt(), it("ol", p9, [
              (tt(!0), it(Y_, null, G_(a.value.rootCauses, (U, W) => (tt(), it("li", {
                key: `cause-${W}`
              }, Ei(U), 1))), 128))
            ])) : (tt(), it("div", h9, "No root causes returned."))
          ]),
          pn("div", m9, [
            w9,
            a.value.resolutions.length ? (tt(), it("ol", v9, [
              (tt(!0), it(Y_, null, G_(a.value.resolutions, (U, W) => (tt(), it("li", {
                key: `res-${W}`
              }, Ei(U), 1))), 128))
            ])) : (tt(), it("div", _9, "No resolutions returned."))
          ])
        ])) : Su("", !0)
      ]);
    };
  }
});
const b9 = /* @__PURE__ */ Ve(y9, [["__scopeId", "data-v-8418d0e3"]]), C9 = window.Vue.openBlock, V9 = window.Vue.createElementBlock, E9 = window.Vue.createElementVNode;
var S9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const I9 = {}, k9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, A9 = /* @__PURE__ */ E9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), T9 = [
  A9
];
function x9(e, o) {
  return C9(), V9("svg", k9, T9);
}
var Ls = /* @__PURE__ */ S9(I9, [["render", x9]]);
const b0 = window.Vue.defineComponent, Tf = window.Vue.ref, L9 = window.Vue.toRef, xf = window.Vue.inject, j_ = window.Vue.watch, M9 = window.Vue.nextTick, Z_ = window.Vue.openBlock, K_ = window.Vue.createElementBlock, Lf = window.Vue.createElementVNode, D9 = window.Vue.normalizeClass, J_ = window.Vue.renderSlot, X_ = window.Vue.createCommentVNode, Mf = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var N9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const O9 = {
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
}, B9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, R9 = b0({
  emits: B9,
  props: O9,
  setup(e, o) {
    const r = Tf(), s = Tf(!1), a = Tf(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = L9(e, "modelValue"), f = xf("queueSnackbar", !1), m = xf("unqueueSnackbar", !1), v = xf("nextSnackbar", () => {
    }), g = (R, B) => {
      let S, A, T = B;
      const P = () => {
        !S || (Ni(S), S = 0, T -= Date.now() - A);
      }, k = () => {
        S || (A = Date.now(), S = Di(R, T));
      };
      return k(), { pause: P, resume: k };
    }, y = () => {
      s.value = !1, o.emit("closed"), v && v();
    }, b = (R) => {
      R.keyCode === ce.ESCAPE && (a.value = !1);
    }, N = () => {
      r.value.pause();
    }, O = () => {
      a.value && r.value.resume();
    };
    return j_(c, (R) => {
      R ? M9(() => {
        f === !1 ? a.value = R : f(u, a);
      }) : m === !1 ? a.value = R : m(u);
    }, { immediate: !0 }), j_(a, (R) => {
      R ? (s.value = !0, r.value = g(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), N());
    }), {
      hideTimeout: r,
      contentShow: s,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: y,
      keyPressed: b,
      stopTimer: N,
      resumeTimer: O
    };
  }
}), P9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, F9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, U9 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, W9 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function H9(e, o, r, s, a, u) {
  return e.modelValue || e.contentShow ? (Z_(), K_("div", P9, [
    Lf("div", {
      class: D9(["feather-snackbar", {
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
      Lf("div", F9, [
        e.contentShow ? (Z_(), K_("div", U9, [
          J_(e.$slots, "default", {}, void 0, !0)
        ])) : X_("", !0)
      ]),
      Lf("div", W9, [
        J_(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : X_("", !0);
}
var vc = /* @__PURE__ */ N9(R9, [["render", H9], ["__scopeId", "data-v-5cf64a62"]]);
const z9 = {
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
  props: z9,
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
    return Mf("queueSnackbar", s), Mf("unqueueSnackbar", a), Mf("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const q9 = window.Vue.defineComponent, Xe = window.Vue.unref, Ft = window.Vue.createVNode, ul = window.Vue.createElementVNode, fn = window.Vue.withCtx, Si = window.Vue.openBlock, Df = window.Vue.createBlock, Q_ = window.Vue.createCommentVNode, hl = window.Vue.createTextVNode, Iu = window.Vue.createElementBlock, eg = window.Vue.toDisplayString, G9 = window.Vue.pushScopeId, Y9 = window.Vue.popScopeId, Ip = (e) => (G9("data-v-28366268"), e = e(), Y9(), e), j9 = { id: "cont" }, Z9 = { class: "btns-navigation" }, K9 = /* @__PURE__ */ Ip(() => /* @__PURE__ */ ul("span", null, "Situation List", -1)), J9 = /* @__PURE__ */ Ip(() => /* @__PURE__ */ ul("span", null, "Show Previous Situation ", -1)), X9 = /* @__PURE__ */ Ip(() => /* @__PURE__ */ ul("span", null, "Show Next Situation", -1)), Q9 = { key: 1 }, eW = {
  key: 0,
  class: "detail"
}, tW = /* @__PURE__ */ hl("Details"), nW = /* @__PURE__ */ hl("Metrics"), oW = /* @__PURE__ */ hl("AI Suggestions"), rW = {
  key: 1,
  class: "noSituation"
}, iW = /* @__PURE__ */ hl("dismiss"), Ii = window.Vue.ref, tg = window.Vue.watch, sW = window.Vue.onMounted, aW = window.VueRouter.useRoute, lW = /* @__PURE__ */ q9({
  __name: "SituationDetail",
  setup(e) {
    const o = Gr(), r = aW(), s = parseInt(r.params.id), a = Ii(s), u = ho(), c = hc(), f = Ii(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const m = Ii(), v = Ii(), g = Ii(!0), y = Ii(
      u.filteredSituations.findIndex((B) => B === a.value)
    ), b = Ii(!1);
    tg(
      () => u.situationDetail,
      () => {
        m.value = u.situationDetail, g.value = !1, u.getUnassignedAlarms();
      }
    ), sW(() => {
      var S;
      const B = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = B - 90;
    });
    const N = () => {
      o.push({
        name: mt.situations
      });
    }, O = (B) => {
      const S = y.value, A = u.filteredSituations[S + B];
      o.push({
        name: mt.situationDetail,
        params: {
          id: A
        }
      });
    };
    tg(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), y.value = u.filteredSituations.findIndex((B) => B == a.value);
    }), c.$subscribe((B, S) => {
      b.value = S.showError;
    });
    const R = (B) => {
      f.value = B || 0;
    };
    return (B, S) => (Si(), Iu("div", j9, [
      ul("div", Z9, [
        Ft(Xe(we), {
          primary: "",
          onClick: S[0] || (S[0] = () => N())
        }, {
          default: fn(() => [
            Ft(Xe(X), {
              icon: Xe(Ls),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            K9
          ]),
          _: 1
        }),
        ul("div", null, [
          Ft(Xe(we), {
            disabled: !Xe(u).filteredSituations[y.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => O(-1))
          }, {
            default: fn(() => [
              Ft(Xe(X), {
                icon: Xe(Ls),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              J9
            ]),
            _: 1
          }, 8, ["disabled"]),
          Ft(Xe(we), {
            disabled: !Xe(u).filteredSituations[y.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => O(1))
          }, {
            default: fn(() => [
              X9,
              Ft(Xe(X), {
                icon: Xe(Ls),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      g.value ? (Si(), Df(Xe(xs), {
        key: 0,
        class: "spinner"
      })) : (Si(), Iu("div", Q9, [
        m.value ? (Si(), Iu("div", eW, [
          Ft(Xe(W1), { "onUpdate:modelValue": R }, {
            tabs: fn(() => [
              Ft(Xe(nl), null, {
                default: fn(() => [
                  tW
                ]),
                _: 1
              }),
              Ft(Xe(nl), null, {
                default: fn(() => [
                  nW
                ]),
                _: 1
              }),
              Ft(Xe(nl), { "data-test": "ai-suggestions-tab" }, {
                default: fn(() => [
                  oW
                ]),
                _: 1
              })
            ]),
            default: fn(() => [
              Ft(Xe(ol), { class: "panel" }, {
                default: fn(() => [
                  Ft(S6, { "situation-info": m.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              Ft(Xe(ol), { class: "panel" }, {
                default: fn(() => [
                  v.value && f.value == 1 ? (Si(), Df(CU, {
                    key: 0,
                    situation: m.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Q_("", !0)
                ]),
                _: 1
              }),
              Ft(Xe(ol), { class: "panel" }, {
                default: fn(() => [
                  f.value == 2 ? (Si(), Df(b9, {
                    key: m.value.id,
                    "situation-id": m.value.id
                  }, null, 8, ["situation-id"])) : Q_("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Si(), Iu("div", rW, " Error. The situation " + eg(Xe(s)) + " does not exist. ", 1))
      ])),
      Ft(Xe(vc), {
        modelValue: b.value,
        "onUpdate:modelValue": S[4] || (S[4] = (A) => b.value = A),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: fn(() => [
          Ft(Xe(we), {
            onClick: S[3] || (S[3] = (A) => b.value = !1),
            text: ""
          }, {
            default: fn(() => [
              iW
            ]),
            _: 1
          })
        ]),
        default: fn(() => [
          hl(eg(Xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const uW = /* @__PURE__ */ Ve(lW, [["__scopeId", "data-v-28366268"]]), cW = window.Vue.defineComponent, Et = window.Vue.unref, qn = window.Vue.createVNode, en = window.Vue.createElementVNode, ys = window.Vue.withCtx, bs = window.Vue.openBlock, qa = window.Vue.createElementBlock, dW = window.Vue.createCommentVNode, fW = window.Vue.toDisplayString, kp = window.Vue.createTextVNode, pW = window.Vue.normalizeClass, hW = window.Vue.renderList, mW = window.Vue.Fragment, wW = window.Vue.createBlock, vW = window.Vue.pushScopeId, _W = window.Vue.popScopeId, ml = (e) => (vW("data-v-e9ff4c5b"), e = e(), _W(), e), gW = { class: "container" }, $W = /* @__PURE__ */ ml(() => /* @__PURE__ */ en("span", null, "Situation List", -1)), yW = /* @__PURE__ */ ml(() => /* @__PURE__ */ en("h2", null, "New Situation", -1)), bW = { class: "form" }, CW = { class: "fields" }, VW = {
  key: 0,
  class: "errorList"
}, EW = { class: "footer" }, SW = /* @__PURE__ */ ml(() => /* @__PURE__ */ en("span", null, "Clear", -1)), IW = /* @__PURE__ */ ml(() => /* @__PURE__ */ en("span", null, "Add Situation", -1)), kW = { class: "alarm-column" }, AW = { class: "header-alarms" }, TW = /* @__PURE__ */ ml(() => /* @__PURE__ */ en("h3", null, "Add Unassociated Alarms", -1)), xW = /* @__PURE__ */ kp(" Total Alarms Added: "), LW = { class: "total" }, MW = { class: "list" }, DW = { class: "filters" }, NW = {
  key: 0,
  class: "alarms"
}, OW = /* @__PURE__ */ kp(" Error on creating new situation :( "), BW = /* @__PURE__ */ kp("dismiss"), Nr = window.Vue.ref, RW = window.Vue.watch, PW = /* @__PURE__ */ cW({
  __name: "AddSituation",
  setup(e) {
    const o = Gr(), r = ho(), s = Nr(), a = Nr(""), u = Nr(), c = Nr(""), f = Nr([]), m = Nr(!1), v = Nr(), g = Nr(r.unassignedAlarms);
    g.value.length || r.getUnassignedAlarms(), RW(
      () => r.unassignedAlarms,
      () => {
        g.value = r.unassignedAlarms;
      }
    );
    const y = () => {
      o.push({
        name: mt.situations
      });
    }, b = (S) => {
      m.value = !1, Be.exports.includes(f.value, S) ? Be.exports.remove(f.value, (A) => A === S) : f.value.push(S);
    }, N = () => {
      const S = "This field should not be empty";
      let A = !0;
      return s.value || (a.value = S, A = !1), u.value || (c.value = S, A = !1), f.value.length < 2 && (m.value = !0, A = !1), A;
    }, O = async () => {
      if (N()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await BT(S) ? o.push({
          name: mt.situations
        }) : v.value = !0;
      }
    }, R = () => {
      s.value = "", u.value = "", f.value = [], g.value = r.unassignedAlarms;
    }, B = (S) => {
      g.value = S;
    };
    return (S, A) => (bs(), qa("div", gW, [
      qn(Et(we), {
        primary: "",
        onClick: A[0] || (A[0] = () => y()),
        class: "back-btn"
      }, {
        default: ys(() => [
          qn(Et(X), {
            icon: Et(Ls),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          $W
        ]),
        _: 1
      }),
      yW,
      en("div", bW, [
        en("div", CW, [
          qn(Et(Yu), {
            modelValue: s.value,
            "onUpdate:modelValue": A[1] || (A[1] = (T) => s.value = T),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          qn(Et(Yu), {
            modelValue: u.value,
            "onUpdate:modelValue": A[2] || (A[2] = (T) => u.value = T),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          m.value ? (bs(), qa("div", VW, " You must add at least 2 alarms. ")) : dW("", !0),
          en("div", EW, [
            qn(Et(we), {
              class: "btn",
              onClick: R
            }, {
              default: ys(() => [
                qn(Et(X), {
                  icon: Et(Ps),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                SW
              ]),
              _: 1
            }),
            qn(Et(we), {
              class: "btn-add",
              onClick: O
            }, {
              default: ys(() => [
                qn(Et(X), {
                  icon: Et(pc),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                IW
              ]),
              _: 1
            })
          ])
        ]),
        en("div", kW, [
          en("div", AW, [
            TW,
            en("div", null, [
              en("div", {
                class: pW(["totalAlarms", { errorList: m.value }])
              }, [
                xW,
                en("span", LW, fW(Et(f).length), 1)
              ], 2)
            ])
          ]),
          en("div", MW, [
            en("div", DW, [
              qn(Ys, {
                list: Et(r).unassignedAlarms,
                onFilteredList: B,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            g.value.length ? (bs(), qa("div", NW, [
              (bs(!0), qa(mW, null, hW(g.value, (T) => (bs(), qa("div", {
                key: T.id,
                class: "alarm-card"
              }, [
                qn(Sp, {
                  selected: Et(Be.exports.includes)(Et(f), T.id),
                  alarm: T,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (bs(), wW(js, { key: 1 }))
          ])
        ])
      ]),
      qn(Et(vc), {
        modelValue: v.value,
        "onUpdate:modelValue": A[4] || (A[4] = (T) => v.value = T),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: ys(() => [
          qn(Et(we), {
            onClick: A[3] || (A[3] = (T) => v.value = !1),
            text: ""
          }, {
            default: ys(() => [
              BW
            ]),
            _: 1
          })
        ]),
        default: ys(() => [
          OW
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const FW = /* @__PURE__ */ Ve(PW, [["__scopeId", "data-v-e9ff4c5b"]]), UW = window.Vue.defineComponent, WW = window.Vue.createElementVNode, HW = window.Vue.createTextVNode, zW = window.Vue.unref, qW = window.Vue.withCtx, GW = window.Vue.createVNode, YW = window.Vue.Fragment, jW = window.Vue.openBlock, ZW = window.Vue.createElementBlock, KW = window.Vue.pushScopeId, JW = window.Vue.popScopeId, XW = (e) => (KW("data-v-7c52e38b"), e = e(), JW(), e), QW = /* @__PURE__ */ XW(() => /* @__PURE__ */ WW("div", { class: "main" }, "Something bad is happening...", -1)), eH = /* @__PURE__ */ HW(" Reload "), tH = /* @__PURE__ */ UW({
  __name: "ErrorPage",
  setup(e) {
    const o = Gr(), r = () => {
      o.push({ name: mt.situations });
    };
    return (s, a) => (jW(), ZW(YW, null, [
      QW,
      GW(zW(we), {
        primary: "",
        onClick: r
      }, {
        default: qW(() => [
          eH
        ]),
        _: 1
      })
    ], 64));
  }
});
const nH = /* @__PURE__ */ Ve(tH, [["__scopeId", "data-v-7c52e38b"]]), oH = window.Vue.defineComponent, Xt = window.Vue.unref, co = window.Vue.createVNode, Fr = window.Vue.createElementVNode, Ga = window.Vue.withCtx, ki = window.Vue.openBlock, ng = window.Vue.createBlock, rH = window.Vue.renderList, iH = window.Vue.Fragment, Ya = window.Vue.createElementBlock, sH = window.Vue.toDisplayString, C0 = window.Vue.createTextVNode, aH = window.Vue.pushScopeId, lH = window.Vue.popScopeId, Ap = (e) => (aH("data-v-543c4501"), e = e(), lH(), e), uH = { class: "container" }, cH = { class: "nav-btns" }, dH = /* @__PURE__ */ Ap(() => /* @__PURE__ */ Fr("span", null, "Situation List", -1)), fH = /* @__PURE__ */ Ap(() => /* @__PURE__ */ Fr("h2", null, "List Unassociated Alarms", -1)), pH = { class: "content" }, hH = { class: "filters" }, mH = { class: "list" }, wH = { class: "action-btns" }, vH = /* @__PURE__ */ Ap(() => /* @__PURE__ */ Fr("span", null, "Move", -1)), _H = { key: 1 }, gH = {
  key: 0,
  class: "alarms"
}, $H = /* @__PURE__ */ C0("dismiss"), Or = window.Vue.ref, yH = window.Vue.watch, bH = window.Vue.markRaw, CH = /* @__PURE__ */ oH({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = bH({
      ArrowBack: Ls,
      ExitToApp: Jf
    }), r = Gr(), s = ho();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = Or([]), u = Or([]), c = Or(!1), f = Or(!1), m = Or(""), v = Or(!1), g = Or(!1), y = Or(!0);
    yH(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, y.value = !1;
      }
    );
    const b = (A) => {
      Be.exports.includes(u.value, A) ? Be.exports.remove(u.value, (T) => T === A) : u.value.push(A);
    }, N = () => {
      c.value ? u.value = a.value.map((A) => A.id) : u.value = [];
    }, O = async (A) => {
      await Xg(A, u.value) ? s.getUnassignedAlarms() : (v.value = !0, g.value = !0, m.value = "Error on moving the alarms :("), f.value = !1;
    }, R = () => {
      r.push({
        name: mt.situations
      });
    }, B = () => {
      u.value.length ? f.value = !0 : (v.value = !0, g.value = !1, m.value = "You need to choose at least one alarm!");
    }, S = (A) => {
      a.value = A;
    };
    return (A, T) => (ki(), Ya("div", uH, [
      Fr("div", cH, [
        co(Xt(we), {
          primary: "",
          onClick: T[0] || (T[0] = () => R())
        }, {
          default: Ga(() => [
            co(Xt(X), {
              icon: Xt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            dH
          ]),
          _: 1
        }),
        co(A1)
      ]),
      fH,
      Fr("div", pH, [
        Fr("div", hH, [
          co(Ys, {
            list: Xt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        Fr("div", mH, [
          Fr("div", wH, [
            co(Xt(Mi), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                T[1] || (T[1] = (P) => c.value = P),
                N
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            co(Xt(we), { onClick: B }, {
              default: Ga(() => [
                co(Xt(X), {
                  icon: Xt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                vH
              ]),
              _: 1
            })
          ]),
          y.value ? (ki(), ng(Xt(xs), {
            key: 0,
            class: "spinner"
          })) : (ki(), Ya("div", _H, [
            Xt(a).length ? (ki(), Ya("div", gH, [
              (ki(!0), Ya(iH, null, rH(Xt(a), (P) => (ki(), Ya("div", {
                key: P.id,
                class: "card"
              }, [
                co(Sp, {
                  selected: Xt(Be.exports.includes)(Xt(u), P.id),
                  alarm: P,
                  onSelectedAlarm: b
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (ki(), ng(js, { key: 1 }))
          ]))
        ])
      ]),
      co(f0, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: O,
        onDrawerClosed: T[2] || (T[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      co(Xt(vc), {
        modelValue: v.value,
        "onUpdate:modelValue": T[4] || (T[4] = (P) => v.value = P),
        right: "",
        error: g.value,
        timeout: 6e3
      }, {
        button: Ga(() => [
          co(Xt(we), {
            onClick: T[3] || (T[3] = (P) => v.value = !1),
            text: ""
          }, {
            default: Ga(() => [
              $H
            ]),
            _: 1
          })
        ]),
        default: Ga(() => [
          C0(sH(m.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const VH = /* @__PURE__ */ Ve(CH, [["__scopeId", "data-v-543c4501"]]), EH = window.Vue.defineComponent, Nf = window.Vue.unref, SH = window.Vue.createVNode, IH = window.Vue.createElementVNode, kH = window.Vue.withCtx, AH = window.Vue.openBlock, TH = window.Vue.createBlock, xH = window.Vue.pushScopeId, LH = window.Vue.popScopeId, MH = (e) => (xH("data-v-b6e7f46c"), e = e(), LH(), e), DH = /* @__PURE__ */ MH(() => /* @__PURE__ */ IH("span", null, "Situation List", -1)), NH = window.Vue.markRaw, OH = /* @__PURE__ */ EH({
  __name: "SituationListBtn",
  setup(e) {
    const o = Gr(), r = NH({
      ArrowBack: Ls
    }), s = () => {
      o.push({
        name: mt.situations
      });
    };
    return (a, u) => (AH(), TH(Nf(we), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: kH(() => [
        SH(Nf(X), {
          icon: Nf(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        DH
      ]),
      _: 1
    }));
  }
});
const BH = /* @__PURE__ */ Ve(OH, [["__scopeId", "data-v-b6e7f46c"]]);
var RH = Object.defineProperty, PH = Object.defineProperties, FH = Object.getOwnPropertyDescriptors, og = Object.getOwnPropertySymbols, UH = Object.prototype.hasOwnProperty, WH = Object.prototype.propertyIsEnumerable, rg = (e, o, r) => o in e ? RH(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ks = (e, o) => {
  for (var r in o || (o = {}))
    UH.call(o, r) && rg(e, r, o[r]);
  if (og)
    for (var r of og(o))
      WH.call(o, r) && rg(e, r, o[r]);
  return e;
}, HH = (e, o) => PH(e, FH(o));
const zH = window.Vue.defineComponent, ig = window.Vue.toRef, qH = window.Vue.computed, GH = window.Vue.ref, sg = window.Vue.resolveComponent, ag = window.Vue.openBlock, lg = window.Vue.createElementBlock, ug = window.Vue.mergeProps, cg = window.Vue.createVNode, YH = window.Vue.normalizeClass, ku = window.Vue.withCtx, dg = window.Vue.renderSlot, jH = window.Vue.createElementVNode, ZH = window.Vue.toHandlers, KH = window.Vue.toDisplayString, JH = window.Vue.createCommentVNode, XH = ks(ks({
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
}, ic), zs), QH = {
  "update:modelValue": (e) => !0
};
var ez = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const tz = zH({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: QH,
  props: XH,
  setup(e, o) {
    qs(e), sc(e);
    const r = ig(e, "id"), s = qH(() => r.value ? r.value : Ce("feather-input-label")), a = GH(), { validate: u } = Ws(s, a, e.label, e.schema, ig(e, "error"));
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
      return Ce("feather-input-description");
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
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), HH(ks(ks({}, e), this.listeners), {
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
    InputWrapper: rc
  }
}), nz = ["maxlength"], oz = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function rz(e, o, r, s, a, u) {
  const c = sg("InputWrapper"), f = sg("InputSubText");
  return ag(), lg("div", ug(e.inherittedAttrs, { class: "feather-input-container" }), [
    cg(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: YH(["feather-input-content", e.contentCls])
    }, {
      pre: ku(() => [
        dg(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: ku(() => [
        dg(e.$slots, "post", {}, void 0, !0)
      ]),
      default: ku(() => [
        jH("input", ug(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, ZH(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, nz)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    cg(f, { id: e.descriptionId }, {
      right: ku(() => [
        e.maxlength ? (ag(), lg("div", oz, KH(e.charCount), 1)) : JH("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Br = /* @__PURE__ */ ez(tz, [["render", rz], ["__scopeId", "data-v-bf37b0d6"]]);
const iz = window.Vue.openBlock, sz = window.Vue.createElementBlock, Tp = window.Vue.createElementVNode;
var az = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const lz = {}, uz = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cz = /* @__PURE__ */ Tp("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), dz = /* @__PURE__ */ Tp("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), fz = /* @__PURE__ */ Tp("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), pz = [
  cz,
  dz,
  fz
];
function hz(e, o) {
  return iz(), sz("svg", uz, pz);
}
var mz = /* @__PURE__ */ az(lz, [["render", hz]]);
const wz = window.Vue.openBlock, vz = window.Vue.createElementBlock, V0 = window.Vue.createElementVNode;
var _z = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [s, a] of o)
    r[s] = a;
  return r;
};
const gz = {}, $z = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yz = /* @__PURE__ */ V0("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), bz = /* @__PURE__ */ V0("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), Cz = [
  yz,
  bz
];
function Vz(e, o) {
  return wz(), vz("svg", $z, Cz);
}
var Ez = /* @__PURE__ */ _z(gz, [["render", Vz]]);
const E0 = [
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
], S0 = (e) => {
  const o = (e || "").toLowerCase();
  if (!!o)
    return E0.find((r) => r.matches.some((s) => o.includes(s)));
}, Sz = () => E0, Iz = (e) => {
  var o, r;
  return (r = (o = S0(e)) == null ? void 0 : o.models) != null ? r : [];
}, kz = window.Vue.defineComponent, fe = window.Vue.createVNode, L = window.Vue.createElementVNode, re = window.Vue.createTextVNode, z = window.Vue.unref, at = window.Vue.withCtx, Ye = window.Vue.openBlock, st = window.Vue.createElementBlock, Ut = window.Vue.createCommentVNode, je = window.Vue.toDisplayString, ja = window.Vue.Fragment, Of = window.Vue.createBlock, fg = window.Vue.renderList, Az = window.Vue.normalizeClass, Tz = window.Vue.pushScopeId, xz = window.Vue.popScopeId, xe = (e) => (Tz("data-v-44b4fabb"), e = e(), xz(), e), Lz = { class: "container" }, Mz = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("h3", { "data-test": "page-title" }, "ALEC Configuration", -1)), Dz = /* @__PURE__ */ re("Correlation Engine"), Nz = /* @__PURE__ */ re("LLM Root Cause Analysis"), Oz = { class: "section" }, Bz = { class: "title-row" }, Rz = { class: "title" }, Pz = /* @__PURE__ */ re(" Choose the correlation engine that ALEC will use (see "), Fz = ["href"], Uz = /* @__PURE__ */ re(" for more information): "), Wz = ["aria-expanded"], Hz = {
  key: 0,
  class: "help-popover",
  "data-test": "engine-help-popover"
}, zz = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "Clustering"),
    /* @__PURE__ */ re(" \u2014 the default engine. It runs the DBSCAN algorithm over recent alarms and groups them into a situation when they are close in both time and network topology. Tune how aggressively it groups with the Correlation variables below. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "Hellinger distance"),
    /* @__PURE__ */ re(" \u2014 an optional, more refined way for the Clustering engine to measure how far apart two alarms are. Rather than a plain time/topology distance, it compares the statistical distribution of each alarm's surroundings, which helps separate unrelated alarms that merely happen to occur close together. Enable it with the checkbox; it adds two extra tuning variables (Hellinger w and bias). Only the Clustering engine supports it. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ L("strong", null, "LLM Based"),
    /* @__PURE__ */ re(" \u2014 a future engine that would let a large language model drive correlation itself (coming soon). This is separate from "),
    /* @__PURE__ */ L("em", null, "LLM Root Cause Analysis"),
    /* @__PURE__ */ re(" on the other tab, which explains the situations the Clustering engine already builds. ")
  ])
], -1)), qz = [
  zz
], Gz = /* @__PURE__ */ re("Clustering"), Yz = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", { class: "hellinger" }, [
  /* @__PURE__ */ L("strong", null, "Hellinger distance")
], -1)), jz = /* @__PURE__ */ re(" LLM Based "), Zz = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), Kz = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, Jz = { class: "title-row" }, Xz = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", { class: "title" }, "Correlation variables", -1)), Qz = ["aria-expanded"], eq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, tq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("strong", null, "Alpha (\u03B1)", -1)), nq = /* @__PURE__ */ re(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), oq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("strong", null, "Beta (\u03B2)", -1)), rq = /* @__PURE__ */ re(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), iq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("code", null, "[0, 1]", -1)), sq = /* @__PURE__ */ re(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), aq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("strong", null, "Epsilon (\u03B5)", -1)), lq = /* @__PURE__ */ re(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), uq = { "data-test": "help-hellinger-w" }, cq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("strong", null, "Hellinger w", -1)), dq = /* @__PURE__ */ re(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), fq = { "data-test": "help-hellinger-bias" }, pq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("strong", null, "Hellinger bias", -1)), hq = /* @__PURE__ */ re(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), mq = { class: "variables" }, wq = {
  class: "section",
  "data-test": "llm-section"
}, vq = { class: "title-row" }, _q = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", { class: "title" }, "LLM Root Cause Analysis", -1)), gq = ["aria-expanded"], $q = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", { class: "llm-help" }, " ALEC can automatically or manually request root cause analysis and a suggested resolution strategy from a large language model (LLM). It works with any OpenAI-compatible, API-enabled LLM \u2014 commercial or locally hosted \u2014 and does not endorse any particular model. The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), yq = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, bq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("p", { class: "help-intro" }, [
  /* @__PURE__ */ re(" ALEC sends each new situation to the model you configure and shows the suggested root causes and resolutions on the situation's "),
  /* @__PURE__ */ L("em", null, "AI Suggestions"),
  /* @__PURE__ */ re(" tab. ")
], -1)), Cq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("ul", null, [
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ re(" Works with any service that exposes an OpenAI-compatible "),
    /* @__PURE__ */ L("code", null, "/chat/completions"),
    /* @__PURE__ */ re(" API \u2014 a hosted provider (OpenAI, Anthropic, OpenRouter, \u2026) or a local server (LM Studio, Ollama, \u2026). The Endpoint and Model "),
    /* @__PURE__ */ L("em", null, "\u25BE"),
    /* @__PURE__ */ re(" menus list common choices. ")
  ]),
  /* @__PURE__ */ L("li", null, [
    /* @__PURE__ */ re(" The model must support "),
    /* @__PURE__ */ L("em", null, "tool/function calling"),
    /* @__PURE__ */ re(". Use "),
    /* @__PURE__ */ L("em", null, "Validate key"),
    /* @__PURE__ */ re(" to confirm the endpoint, model and key work before saving. ")
  ]),
  /* @__PURE__ */ L("li", null, " The API key is stored on the OpenNMS server and never shown again. Hosted providers bill per token; local models are free. ")
], -1)), Vq = [
  bq,
  Cq
], Eq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("strong", null, "LLM Enabled Root Cause Analysis", -1)), Sq = /* @__PURE__ */ re(" Automatically AI Evaluate new situations "), Iq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, kq = { class: "llm-field-block" }, Aq = { class: "llm-field-header" }, Tq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), xq = { class: "llm-field-actions" }, Lq = ["disabled"], Mq = /* @__PURE__ */ re(" Reset to default "), Dq = ["disabled"], Nq = /* @__PURE__ */ re(" Set as default "), Oq = { class: "llm-combo" }, Bq = ["aria-expanded"], Rq = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-base-url-menu"
}, Pq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("li", { class: "llm-combo-hint" }, "Common providers \u2014 or type your own", -1)), Fq = ["onClick"], Uq = { class: "llm-combo-item-main" }, Wq = { class: "llm-combo-item-sub" }, Hq = { class: "llm-field-block" }, zq = { class: "llm-field-header" }, qq = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("span", { class: "llm-field-label" }, "Model", -1)), Gq = { class: "llm-field-actions" }, Yq = ["disabled"], jq = /* @__PURE__ */ re(" Reset to default "), Zq = ["disabled"], Kq = /* @__PURE__ */ re(" Set as default "), Jq = { class: "llm-combo" }, Xq = ["aria-expanded"], Qq = {
  key: 0,
  class: "llm-combo-menu",
  "data-test": "llm-model-menu"
}, eG = { class: "llm-combo-hint" }, tG = ["onClick"], nG = { class: "llm-combo-item-main" }, oG = {
  key: 1,
  class: "llm-combo-hint"
}, rG = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, iG = { class: "llm-prompt-header" }, sG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("span", { class: "llm-prompt-label" }, "System prompt", -1)), aG = ["disabled"], lG = /* @__PURE__ */ re(" Reset to default "), uG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. ", -1)), cG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ re(" Your API key must come from the same provider as the Endpoint above \u2014 an Anthropic key ("),
  /* @__PURE__ */ L("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ re(") for "),
  /* @__PURE__ */ L("code", null, "api.anthropic.com"),
  /* @__PURE__ */ re(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ L("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ re(") for "),
  /* @__PURE__ */ L("code", null, "openrouter.ai"),
  /* @__PURE__ */ re(", or an OpenAI key for "),
  /* @__PURE__ */ L("code", null, "api.openai.com"),
  /* @__PURE__ */ re(". ")
], -1)), dG = { class: "llm-key-row" }, fG = /* @__PURE__ */ re(" Clear Key "), pG = { class: "llm-validate-row" }, hG = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, mG = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, wG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), vG = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, _G = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, gG = { class: "usage-summary" }, $G = { class: "usage-label" }, yG = ["title"], bG = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, CG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("dt", null, "Input", -1)), VG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("dt", null, "Output", -1)), EG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("dt", null, "Cache read", -1)), SG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("dt", null, "Cache create", -1)), IG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("dt", null, "Calls", -1)), kG = { class: "muted" }, AG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("dt", null, "Cache hit", -1)), TG = { class: "action-row" }, xG = /* @__PURE__ */ re(" Close All Open Situations "), LG = /* @__PURE__ */ re(" Re-Evaluate All Open Alarms "), MG = /* @__PURE__ */ xe(() => /* @__PURE__ */ L("span", null, "Save Changes", -1)), DG = /* @__PURE__ */ re("dismiss"), Gn = window.Vue.computed, NG = window.Vue.markRaw, OG = window.Vue.onMounted, BG = window.Vue.onUnmounted, Te = window.Vue.ref, RG = /* @__PURE__ */ kz({
  __name: "AccountSettings",
  setup(e) {
    var _n, wo, gn, Xn, Qn, No, Oo, Bo, vo, _o, eo, Gt, rr, ir, sr, ar, Kr, Ro, Po, Nt, to, lr, ur, cr, Jr, go, Xr, dr, Fi;
    const o = (oe) => oe >= 1e6 ? (oe / 1e6).toFixed(1) + "M" : oe >= 1e3 ? (oe / 1e3).toFixed(1) + "K" : String(oe), r = NG({
      MarkComplete: Gu,
      Help: mz,
      Restore: Ez,
      ExpandMore: fl
    }), s = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, a = Oi(), u = Te(((_n = a.engineInfo) == null ? void 0 : _n.engineName) || kt.ENGINE_DBSCAN), c = Te(
      a.engineInfo ? a.engineInfo.distanceMeasureName === kt.HELLINGER_OPTION : !0
    ), f = Te((gn = (wo = a.engineInfo) == null ? void 0 : wo.alpha) != null ? gn : s.alpha), m = Te((Qn = (Xn = a.engineInfo) == null ? void 0 : Xn.beta) != null ? Qn : s.beta), v = Te((Oo = (No = a.engineInfo) == null ? void 0 : No.epsilon) != null ? Oo : s.epsilon), g = Te(
      (vo = (Bo = a.engineInfo) == null ? void 0 : Bo.hellingerW) != null ? vo : s.hellingerW
    ), y = Te(
      (eo = (_o = a.engineInfo) == null ? void 0 : _o.hellingerBias) != null ? eo : s.hellingerBias
    ), b = Gn(() => u.value === kt.ENGINE_DBSCAN), N = Gn(() => b.value && c.value), O = Te(a.llmConfig !== null), R = Te((rr = (Gt = a.llmConfig) == null ? void 0 : Gt.enabled) != null ? rr : !1), B = Te((sr = (ir = a.llmConfig) == null ? void 0 : ir.autoEvaluate) != null ? sr : !0), S = Te((Kr = (ar = a.llmConfig) == null ? void 0 : ar.baseUrl) != null ? Kr : ""), A = Te((Po = (Ro = a.llmConfig) == null ? void 0 : Ro.model) != null ? Po : ""), T = Te((to = (Nt = a.llmConfig) == null ? void 0 : Nt.defaultBaseUrl) != null ? to : ""), P = Te((ur = (lr = a.llmConfig) == null ? void 0 : lr.defaultModel) != null ? ur : ""), k = Te((Jr = (cr = a.llmConfig) == null ? void 0 : cr.systemPrompt) != null ? Jr : ""), U = Te((Xr = (go = a.llmConfig) == null ? void 0 : go.defaultSystemPrompt) != null ? Xr : ""), W = Gn(
      () => U.value.length > 0 && k.value.trim() !== U.value.trim()
    ), Z = () => {
      k.value = U.value;
    }, Le = Gn(
      () => T.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), he = Gn(
      () => P.value.trim().length > 0 && A.value.trim() !== P.value.trim()
    ), ke = Gn(
      () => S.value.trim().length > 0 && S.value.trim() !== T.value.trim()
    ), Ee = Gn(
      () => A.value.trim().length > 0 && A.value.trim() !== P.value.trim()
    ), We = () => {
      S.value = T.value;
    }, ze = () => {
      A.value = P.value;
    }, ge = () => {
      T.value = S.value.trim();
    }, Ze = () => {
      P.value = A.value.trim();
    }, Qe = Sz(), qe = Te(!1), tn = Te(!1), Lo = Gn(() => Iz(S.value)), $e = Gn(() => S0(S.value)), Js = (oe) => {
      S.value = oe, qe.value = !1;
    }, Xs = (oe) => {
      A.value = oe, tn.value = !1;
    }, Pi = (oe) => {
      const J = oe.target;
      (!J || !J.closest(".llm-combo")) && (qe.value = !1, tn.value = !1);
    }, $t = Te(""), zt = Te((Fi = (dr = a.llmConfig) == null ? void 0 : dr.apiKeyPresent) != null ? Fi : !1), nn = Te(!1), vn = Te(!1), on = Te(null), Yr = Gn(
      () => $t.value.trim().length === 0 && (!zt.value || nn.value)
    ), Me = async () => {
      on.value = null, vn.value = !0;
      try {
        const oe = {
          enabled: R.value,
          autoEvaluate: B.value,
          baseUrl: S.value.trim(),
          model: A.value.trim()
        }, J = $t.value.trim();
        J.length > 0 && (oe.apiKey = J), on.value = await DT(oe);
      } finally {
        vn.value = !1;
      }
    }, Mo = Gn(
      () => (!zt.value || nn.value) && $t.value.trim().length === 0
    ), Re = Gn(
      () => Mo.value || S.value.trim().length === 0 || A.value.trim().length === 0
    ), Mt = () => {
      $t.value = "", nn.value = !0, zt.value = !1, R.value = !1;
    }, be = Te(!1), Mn = Te(!1), yt = Te(!1), Dt = Te(!1), jr = Te(!1), Dn = Te(""), ct = Te(!1);
    OG(async () => {
      if (document.addEventListener("mousedown", Pi), a.llmConfig === null) {
        const oe = await a.getLLMConfig();
        oe && (O.value = !0, R.value = oe.enabled, B.value = oe.autoEvaluate, S.value = oe.baseUrl || "", A.value = oe.model || "", T.value = oe.defaultBaseUrl || "", P.value = oe.defaultModel || "", U.value = oe.defaultSystemPrompt || "", k.value = oe.systemPrompt || oe.defaultSystemPrompt || "", zt.value = oe.apiKeyPresent);
      }
      await a.getLLMUsage(30);
    }), BG(() => {
      document.removeEventListener("mousedown", Pi);
    });
    const mo = () => {
      f.value = s.alpha, m.value = s.beta, v.value = s.epsilon, g.value = s.hellingerW, y.value = s.hellingerBias;
    }, dt = (oe, J) => {
      Dn.value = oe, jr.value = J, Dt.value = !0;
    }, Do = () => {
      if (nn.value)
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
      const oe = $t.value.trim(), J = {
        enabled: R.value,
        autoEvaluate: B.value,
        baseUrl: S.value.trim(),
        model: A.value.trim(),
        defaultBaseUrl: T.value.trim(),
        defaultModel: P.value.trim(),
        systemPrompt: k.value
      };
      return oe.length > 0 && (J.apiKey = oe), J;
    }, qt = async () => {
      var Qr, ei, fr, ti, ni, Ui, Wi, Fo, Hi, Ot, oi, Nn, zi, ri, pr, hr, Uo;
      const oe = R.value && !nn.value, J = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        S.value
      );
      if (oe && !J && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${S.value.trim()}, model ${A.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const De = {
        alpha: Number(f.value),
        beta: Number(m.value),
        epsilon: Number(v.value)
      };
      c.value && (De.hellingerW = Number(g.value), De.hellingerBias = Number(y.value));
      const Q = await a.setEngineInfo(
        u.value,
        c.value,
        De
      ), rn = O.value ? await a.setLLMConfig(Do()) : !0;
      O.value && rn && ($t.value = "", nn.value = !1, zt.value = (ei = (Qr = a.llmConfig) == null ? void 0 : Qr.apiKeyPresent) != null ? ei : !1, R.value = (ti = (fr = a.llmConfig) == null ? void 0 : fr.enabled) != null ? ti : !1, B.value = (Ui = (ni = a.llmConfig) == null ? void 0 : ni.autoEvaluate) != null ? Ui : !0, S.value = (Fo = (Wi = a.llmConfig) == null ? void 0 : Wi.baseUrl) != null ? Fo : "", A.value = (Ot = (Hi = a.llmConfig) == null ? void 0 : Hi.model) != null ? Ot : "", T.value = (Nn = (oi = a.llmConfig) == null ? void 0 : oi.defaultBaseUrl) != null ? Nn : "", P.value = (ri = (zi = a.llmConfig) == null ? void 0 : zi.defaultModel) != null ? ri : "", (pr = a.llmConfig) != null && pr.defaultSystemPrompt && (U.value = a.llmConfig.defaultSystemPrompt), k.value = (Uo = (hr = a.llmConfig) == null ? void 0 : hr.systemPrompt) != null ? Uo : k.value, a.getLLMUsage(30)), Q && rn ? (a.getEngineInfo(), dt("The settings were saved!", !1)) : dt(
        Q && !rn ? "Engine settings saved, but the LLM configuration was rejected \u2014 enabling the integration requires an endpoint URL, a model and an API key." : "Error on saving the settings",
        !0
      );
    }, Zr = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const oe = await RT();
      dt(
        oe ? "All open situations were closed." : "Failed to close situations.",
        !oe
      );
    }, Jn = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const oe = await PT();
      dt(
        oe ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !oe
      );
    };
    return (oe, J) => (Ye(), st(ja, null, [
      fe(BH),
      L("div", Lz, [
        Mz,
        fe(z(W1), { "data-test": "config-tabs" }, {
          tabs: at(() => [
            fe(z(nl), { "data-test": "tab-engine" }, {
              default: at(() => [
                Dz
              ]),
              _: 1
            }),
            fe(z(nl), { "data-test": "tab-llm" }, {
              default: at(() => [
                Nz
              ]),
              _: 1
            })
          ]),
          default: at(() => [
            fe(z(ol), { class: "config-panel" }, {
              default: at(() => [
                L("div", Oz, [
                  L("div", Bz, [
                    L("div", Rz, [
                      Pz,
                      L("a", {
                        target: "_blank",
                        href: z(kt).URL_DOCUMENTATION
                      }, "Correlation Engines documentation", 8, Fz),
                      Uz
                    ]),
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": Mn.value,
                      "aria-label": "About the correlation engines and Hellinger distance",
                      "data-test": "engine-help",
                      onClick: J[0] || (J[0] = (De) => Mn.value = !Mn.value)
                    }, [
                      fe(z(X), {
                        icon: z(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Wz)
                  ]),
                  Mn.value ? (Ye(), st("div", Hz, qz)) : Ut("", !0),
                  fe(z(V1), {
                    vertical: "",
                    modelValue: u.value,
                    "onUpdate:modelValue": J[2] || (J[2] = (De) => u.value = De),
                    label: "",
                    hideLabel: ""
                  }, {
                    default: at(() => [
                      fe(z(Zf), {
                        class: "radio-item",
                        value: z(kt).ENGINE_DBSCAN
                      }, {
                        default: at(() => [
                          Gz
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      fe(z(Mi), {
                        modelValue: c.value,
                        "onUpdate:modelValue": J[1] || (J[1] = (De) => c.value = De),
                        disabled: !z(b),
                        class: "checkbox"
                      }, {
                        default: at(() => [
                          Yz
                        ]),
                        _: 1
                      }, 8, ["modelValue", "disabled"]),
                      fe(z(Zf), {
                        class: "radio-item",
                        value: z(kt).ENGINE_LLM,
                        disabled: "",
                        "data-test": "engine-llm"
                      }, {
                        default: at(() => [
                          jz
                        ]),
                        _: 1
                      }, 8, ["value"]),
                      Zz
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                z(b) ? (Ye(), st("div", Kz, [
                  L("div", Jz, [
                    Xz,
                    L("button", {
                      type: "button",
                      class: "icon-btn help-icon",
                      "aria-expanded": be.value,
                      "aria-label": "Show help for correlation variables",
                      "data-test": "variables-help",
                      onClick: J[3] || (J[3] = (De) => be.value = !be.value)
                    }, [
                      fe(z(X), {
                        icon: z(r).Help
                      }, null, 8, ["icon"])
                    ], 8, Qz),
                    L("button", {
                      type: "button",
                      class: "icon-btn reset-icon",
                      "aria-label": "Reset correlation variables to defaults",
                      "data-test": "variables-reset",
                      onClick: mo
                    }, [
                      fe(z(X), {
                        icon: z(r).Restore
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  be.value ? (Ye(), st("div", eq, [
                    L("ul", null, [
                      L("li", null, [
                        tq,
                        nq,
                        L("em", null, "Default: " + je(s.alpha), 1)
                      ]),
                      L("li", null, [
                        oq,
                        rq,
                        iq,
                        sq,
                        L("em", null, "Default: " + je(s.beta), 1)
                      ]),
                      L("li", null, [
                        aq,
                        lq,
                        L("em", null, "Default: " + je(s.epsilon), 1)
                      ]),
                      z(N) ? (Ye(), st(ja, { key: 0 }, [
                        L("li", uq, [
                          cq,
                          dq,
                          L("em", null, "Default: " + je(s.hellingerW), 1)
                        ]),
                        L("li", fq, [
                          pq,
                          hq,
                          L("em", null, "Default: " + je(s.hellingerBias), 1)
                        ])
                      ], 64)) : Ut("", !0)
                    ])
                  ])) : Ut("", !0),
                  L("div", mq, [
                    fe(z(Br), {
                      modelValue: f.value,
                      "onUpdate:modelValue": J[4] || (J[4] = (De) => f.value = De),
                      type: "number",
                      label: "Alpha",
                      "data-test": "variable-alpha"
                    }, null, 8, ["modelValue"]),
                    fe(z(Br), {
                      modelValue: m.value,
                      "onUpdate:modelValue": J[5] || (J[5] = (De) => m.value = De),
                      type: "number",
                      label: "Beta",
                      "data-test": "variable-beta"
                    }, null, 8, ["modelValue"]),
                    fe(z(Br), {
                      modelValue: v.value,
                      "onUpdate:modelValue": J[6] || (J[6] = (De) => v.value = De),
                      type: "number",
                      label: "Epsilon",
                      "data-test": "variable-epsilon"
                    }, null, 8, ["modelValue"]),
                    z(N) ? (Ye(), Of(z(Br), {
                      key: 0,
                      modelValue: g.value,
                      "onUpdate:modelValue": J[7] || (J[7] = (De) => g.value = De),
                      type: "number",
                      label: "Hellinger w",
                      "data-test": "variable-hellinger-w"
                    }, null, 8, ["modelValue"])) : Ut("", !0),
                    z(N) ? (Ye(), Of(z(Br), {
                      key: 1,
                      modelValue: y.value,
                      "onUpdate:modelValue": J[8] || (J[8] = (De) => y.value = De),
                      type: "number",
                      label: "Hellinger bias",
                      "data-test": "variable-hellinger-bias"
                    }, null, 8, ["modelValue"])) : Ut("", !0)
                  ])
                ])) : Ut("", !0)
              ]),
              _: 1
            }),
            fe(z(ol), { class: "config-panel" }, {
              default: at(() => {
                var De;
                return [
                  L("div", wq, [
                    L("div", vq, [
                      _q,
                      L("button", {
                        type: "button",
                        class: "icon-btn help-icon",
                        "aria-expanded": yt.value,
                        "aria-label": "How to get an API key",
                        "data-test": "llm-key-help",
                        onClick: J[9] || (J[9] = (Q) => yt.value = !yt.value)
                      }, [
                        fe(z(X), {
                          icon: z(r).Help
                        }, null, 8, ["icon"])
                      ], 8, gq)
                    ]),
                    $q,
                    yt.value ? (Ye(), st("div", yq, Vq)) : Ut("", !0),
                    fe(z(Mi), {
                      modelValue: R.value,
                      "onUpdate:modelValue": J[10] || (J[10] = (Q) => R.value = Q),
                      disabled: z(Re) && !R.value,
                      class: "checkbox",
                      "data-test": "llm-enabled"
                    }, {
                      default: at(() => [
                        Eq
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    fe(z(Mi), {
                      modelValue: B.value,
                      "onUpdate:modelValue": J[11] || (J[11] = (Q) => B.value = Q),
                      disabled: !R.value,
                      class: "checkbox sub-checkbox",
                      "data-test": "llm-auto-evaluate"
                    }, {
                      default: at(() => [
                        Sq
                      ]),
                      _: 1
                    }, 8, ["modelValue", "disabled"]),
                    z(Re) ? (Ye(), st("div", Iq, " Enter an endpoint, model and API key to enable. ")) : Ut("", !0),
                    L("div", kq, [
                      L("div", Aq, [
                        Tq,
                        L("div", xq, [
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(Le),
                            "data-test": "llm-base-url-reset",
                            onClick: We
                          }, [
                            fe(z(X), {
                              icon: z(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Mq
                          ], 8, Lq),
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(ke),
                            "data-test": "llm-base-url-set-default",
                            onClick: ge
                          }, [
                            fe(z(X), {
                              icon: z(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Nq
                          ], 8, Dq)
                        ])
                      ]),
                      L("div", Oq, [
                        fe(z(Br), {
                          modelValue: S.value,
                          "onUpdate:modelValue": J[12] || (J[12] = (Q) => S.value = Q),
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
                          onClick: J[13] || (J[13] = (Q) => qe.value = !qe.value)
                        }, [
                          fe(z(X), {
                            icon: z(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, Bq),
                        qe.value ? (Ye(), st("ul", Rq, [
                          Pq,
                          (Ye(!0), st(ja, null, fg(z(Qe), (Q) => (Ye(), st("li", {
                            key: Q.baseUrl,
                            class: "llm-combo-item",
                            onClick: (rn) => Js(Q.baseUrl)
                          }, [
                            L("span", Uq, je(Q.name), 1),
                            L("span", Wq, [
                              L("code", null, je(Q.baseUrl), 1),
                              re(" \xB7 " + je(Q.keyHint), 1)
                            ])
                          ], 8, Fq))), 128))
                        ])) : Ut("", !0)
                      ])
                    ]),
                    L("div", Hq, [
                      L("div", zq, [
                        qq,
                        L("div", Gq, [
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(he),
                            "data-test": "llm-model-reset",
                            onClick: ze
                          }, [
                            fe(z(X), {
                              icon: z(r).Restore,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            jq
                          ], 8, Yq),
                          L("button", {
                            type: "button",
                            class: "llm-prompt-reset",
                            disabled: !z(Ee),
                            "data-test": "llm-model-set-default",
                            onClick: Ze
                          }, [
                            fe(z(X), {
                              icon: z(r).MarkComplete,
                              class: "reset-inline-icon"
                            }, null, 8, ["icon"]),
                            Kq
                          ], 8, Zq)
                        ])
                      ]),
                      L("div", Jq, [
                        fe(z(Br), {
                          modelValue: A.value,
                          "onUpdate:modelValue": J[14] || (J[14] = (Q) => A.value = Q),
                          label: "Model",
                          hideLabel: "",
                          "data-test": "llm-model",
                          class: "llm-combo-input"
                        }, null, 8, ["modelValue"]),
                        L("button", {
                          type: "button",
                          class: "llm-combo-toggle",
                          "aria-expanded": tn.value,
                          "aria-label": "Show model suggestions",
                          "data-test": "llm-model-suggest",
                          onClick: J[15] || (J[15] = (Q) => tn.value = !tn.value)
                        }, [
                          fe(z(X), {
                            icon: z(r).ExpandMore
                          }, null, 8, ["icon"])
                        ], 8, Xq),
                        tn.value ? (Ye(), st("ul", Qq, [
                          z(Lo).length ? (Ye(), st(ja, { key: 0 }, [
                            L("li", eG, " Suggested for " + je((De = z($e)) == null ? void 0 : De.name) + " \u2014 or type your own ", 1),
                            (Ye(!0), st(ja, null, fg(z(Lo), (Q) => (Ye(), st("li", {
                              key: Q.id,
                              class: "llm-combo-item",
                              onClick: (rn) => Xs(Q.id)
                            }, [
                              L("span", nG, [
                                L("code", null, je(Q.id), 1)
                              ])
                            ], 8, tG))), 128))
                          ], 64)) : (Ye(), st("li", oG, " No preset models for this endpoint \u2014 type your model id. For a local server (LM Studio, Ollama) copy it from the server's loaded-model list. "))
                        ])) : Ut("", !0)
                      ])
                    ]),
                    L("div", rG, [
                      L("div", iG, [
                        sG,
                        L("button", {
                          type: "button",
                          class: "llm-prompt-reset",
                          disabled: !z(W),
                          "data-test": "llm-prompt-reset",
                          onClick: Z
                        }, [
                          fe(z(X), {
                            icon: z(r).Restore,
                            class: "reset-inline-icon"
                          }, null, 8, ["icon"]),
                          lG
                        ], 8, aG)
                      ]),
                      uG,
                      fe(z(Yu), {
                        modelValue: k.value,
                        "onUpdate:modelValue": J[16] || (J[16] = (Q) => k.value = Q),
                        label: "System prompt",
                        hideLabel: "",
                        rows: "12",
                        "data-test": "llm-system-prompt",
                        class: "llm-prompt-textarea"
                      }, null, 8, ["modelValue"])
                    ]),
                    cG,
                    L("div", dG, [
                      fe(z(Br), {
                        modelValue: $t.value,
                        "onUpdate:modelValue": J[17] || (J[17] = (Q) => $t.value = Q),
                        type: "password",
                        autocomplete: "new-password",
                        label: zt.value && !nn.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
                        "data-test": "llm-api-key",
                        class: "llm-key-input"
                      }, null, 8, ["modelValue", "label"]),
                      zt.value && !nn.value ? (Ye(), Of(z(we), {
                        key: 0,
                        secondary: "",
                        "data-test": "llm-clear-key",
                        onClick: Mt
                      }, {
                        default: at(() => [
                          fG
                        ]),
                        _: 1
                      })) : Ut("", !0)
                    ]),
                    L("div", pG, [
                      fe(z(we), {
                        secondary: "",
                        disabled: vn.value || z(Yr),
                        "data-test": "llm-validate-btn",
                        onClick: Me
                      }, {
                        default: at(() => [
                          re(je(vn.value ? "Validating\u2026" : "Validate key"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      z(Yr) ? (Ye(), st("span", hG, " Enter an API key to validate. ")) : on.value ? (Ye(), st("span", {
                        key: 1,
                        class: Az(["llm-validate-result", on.value.ok ? "is-ok" : "is-error"]),
                        "data-test": "llm-validate-result"
                      }, [
                        fe(z(X), {
                          icon: on.value.ok ? z(r).MarkComplete : z(r).Help,
                          class: "result-icon"
                        }, null, 8, ["icon"]),
                        re(" " + je(on.value.message), 1)
                      ], 2)) : Ut("", !0)
                    ]),
                    zt.value && !nn.value ? (Ye(), st("div", mG, [
                      fe(z(X), {
                        icon: z(r).MarkComplete,
                        class: "saved-icon"
                      }, null, 8, ["icon"]),
                      wG
                    ])) : Ut("", !0),
                    nn.value ? (Ye(), st("div", vG, " Stored API key will be removed on save. ")) : Ut("", !0),
                    z(a).llmUsage ? (Ye(), st("div", _G, [
                      L("div", gG, [
                        L("span", $G, "Last " + je(z(a).llmUsage.daysWindow) + " days:", 1),
                        L("span", {
                          class: "usage-tokens",
                          title: `${z(a).llmUsage.totalTokens.toLocaleString()} tokens`,
                          "data-test": "llm-usage-tokens"
                        }, je(o(z(a).llmUsage.totalTokens)) + " tokens ", 9, yG),
                        L("button", {
                          type: "button",
                          class: "usage-toggle",
                          onClick: J[18] || (J[18] = (Q) => ct.value = !ct.value),
                          "data-test": "llm-usage-toggle"
                        }, je(ct.value ? "hide details" : "show details"), 1)
                      ]),
                      ct.value ? (Ye(), st("dl", bG, [
                        L("div", null, [
                          CG,
                          L("dd", null, je(o(z(a).llmUsage.inputTokens)), 1)
                        ]),
                        L("div", null, [
                          VG,
                          L("dd", null, je(o(z(a).llmUsage.outputTokens)), 1)
                        ]),
                        L("div", null, [
                          EG,
                          L("dd", null, je(o(z(a).llmUsage.cacheReadInputTokens)), 1)
                        ]),
                        L("div", null, [
                          SG,
                          L("dd", null, je(o(z(a).llmUsage.cacheCreationInputTokens)), 1)
                        ]),
                        L("div", null, [
                          IG,
                          L("dd", null, [
                            re(je(z(a).llmUsage.calls) + " ", 1),
                            L("span", kG, "(" + je(z(a).llmUsage.successfulCalls) + " ok / " + je(z(a).llmUsage.failedCalls) + " failed)", 1)
                          ])
                        ]),
                        L("div", null, [
                          AG,
                          L("dd", null, je((z(a).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
                        ])
                      ])) : Ut("", !0)
                    ])) : Ut("", !0)
                  ])
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        }),
        L("div", TG, [
          fe(z(we), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Zr
          }, {
            default: at(() => [
              xG
            ]),
            _: 1
          }),
          fe(z(we), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Jn
          }, {
            default: at(() => [
              LG
            ]),
            _: 1
          }),
          fe(z(we), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: qt
          }, {
            default: at(() => [
              fe(z(X), {
                icon: z(r).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              MG
            ]),
            _: 1
          })
        ]),
        fe(z(vc), {
          modelValue: Dt.value,
          "onUpdate:modelValue": J[20] || (J[20] = (De) => Dt.value = De),
          right: "",
          error: jr.value,
          timeout: 6e3
        }, {
          button: at(() => [
            fe(z(we), {
              onClick: J[19] || (J[19] = (De) => Dt.value = !1),
              text: ""
            }, {
              default: at(() => [
                DG
              ]),
              _: 1
            })
          ]),
          default: at(() => [
            re(je(Dn.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const PG = /* @__PURE__ */ Ve(RG, [["__scopeId", "data-v-44b4fabb"]]), FG = window.VueRouter.createRouter, UG = window.VueRouter.createWebHistory, WG = async () => {
  const e = Oi();
  e.userId || await e.getUserRole();
}, I0 = [
  {
    path: "/",
    name: mt.home,
    beforeEnter: async (e) => {
      const o = window.VRouter || k0;
      await Oi().getUserRole(), o.push({ name: mt.situations, params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: mt.situations,
    beforeEnter: () => WG(),
    component: RP
  },
  {
    path: "/situations/:id",
    name: mt.situationDetail,
    component: uW
  },
  {
    path: "/situations/add",
    name: mt.addSituation,
    component: FW
  },
  {
    path: "/error",
    name: mt.error,
    component: nH
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: mt.viewUnassignedAlarms,
    component: VH
  },
  {
    path: "/settings",
    name: mt.settings,
    beforeEnter: async () => {
      await Oi().getEngineInfo();
    },
    component: PG
  }
], Bf = window.VRouter;
if (Bf) {
  const e = "Plugin-alecUiExtension", o = Bf.hasRoute(e) ? e : "Plugin";
  for (const r of I0) {
    const { path: s, name: a, component: u, beforeEnter: c } = r;
    Bf.addRoute(o, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const k0 = FG({
  history: UG(),
  routes: I0
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = DS;
