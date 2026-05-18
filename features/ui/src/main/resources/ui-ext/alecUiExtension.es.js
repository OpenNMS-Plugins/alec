const ce = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
}, ES = {}, IS = window.Vue.resolveComponent, xS = window.Vue.createVNode, AS = window.Vue.openBlock, BS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TS = { class: "main" };
function DS(e, r) {
  const o = IS("router-view");
  return AS(), BS("div", TS, [
    xS(o)
  ]);
}
const NS = /* @__PURE__ */ ce(ES, [["render", DS], ["__scopeId", "data-v-5d32d140"]]), LS = window.Vue.defineComponent, MS = window.Vue.openBlock, OS = window.Vue.createBlock, PS = /* @__PURE__ */ LS({
  __name: "App",
  setup(e) {
    return (r, o) => (MS(), OS(NS));
  }
});
var Ai = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function RS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Om = { exports: {} }, md = { exports: {} }, Pm = function(r, o) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return r.apply(o, a);
  };
}, FS = Pm, _d = Object.prototype.toString, gd = function(e) {
  return function(r) {
    var o = _d.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function ro(e) {
  return e = e.toLowerCase(), function(o) {
    return gd(o) === e;
  };
}
function $d(e) {
  return Array.isArray(e);
}
function qa(e) {
  return typeof e > "u";
}
function US(e) {
  return e !== null && !qa(e) && e.constructor !== null && !qa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Rm = ro("ArrayBuffer");
function WS(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Rm(e.buffer), r;
}
function qS(e) {
  return typeof e == "string";
}
function HS(e) {
  return typeof e == "number";
}
function Fm(e) {
  return e !== null && typeof e == "object";
}
function La(e) {
  if (gd(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var zS = ro("Date"), YS = ro("File"), GS = ro("Blob"), jS = ro("FileList");
function yd(e) {
  return _d.call(e) === "[object Function]";
}
function ZS(e) {
  return Fm(e) && yd(e.pipe);
}
function KS(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || _d.call(e) === r || yd(e.toString) && e.toString() === r);
}
var JS = ro("URLSearchParams");
function XS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function QS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function bd(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), $d(e))
      for (var o = 0, s = e.length; o < s; o++)
        r.call(null, e[o], o, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.call(null, e[a], a, e);
}
function td() {
  var e = {};
  function r(a, u) {
    La(e[u]) && La(a) ? e[u] = td(e[u], a) : La(a) ? e[u] = td({}, a) : $d(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var o = 0, s = arguments.length; o < s; o++)
    bd(arguments[o], r);
  return e;
}
function ek(e, r, o) {
  return bd(r, function(a, u) {
    o && typeof a == "function" ? e[u] = FS(a, o) : e[u] = a;
  }), e;
}
function tk(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function nk(e, r, o, s) {
  e.prototype = Object.create(r.prototype, s), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function rk(e, r, o) {
  var s, a, u, c = {};
  r = r || {};
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      u = s[a], c[u] || (r[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function ok(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var s = e.indexOf(r, o);
  return s !== -1 && s === o;
}
function ik(e) {
  if (!e)
    return null;
  var r = e.length;
  if (qa(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var sk = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), nt = {
  isArray: $d,
  isArrayBuffer: Rm,
  isBuffer: US,
  isFormData: KS,
  isArrayBufferView: WS,
  isString: qS,
  isNumber: HS,
  isObject: Fm,
  isPlainObject: La,
  isUndefined: qa,
  isDate: zS,
  isFile: YS,
  isBlob: GS,
  isFunction: yd,
  isStream: ZS,
  isURLSearchParams: JS,
  isStandardBrowserEnv: QS,
  forEach: bd,
  merge: td,
  extend: ek,
  trim: XS,
  stripBOM: tk,
  inherits: nk,
  toFlatObject: rk,
  kindOf: gd,
  kindOfTest: ro,
  endsWith: ok,
  toArray: ik,
  isTypedArray: sk,
  isFileList: jS
}, yo = nt;
function Vp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Um = function(r, o, s) {
  if (!o)
    return r;
  var a;
  if (s)
    a = s(o);
  else if (yo.isURLSearchParams(o))
    a = o.toString();
  else {
    var u = [];
    yo.forEach(o, function(w, v) {
      w === null || typeof w > "u" || (yo.isArray(w) ? v = v + "[]" : w = [w], yo.forEach(w, function($) {
        yo.isDate($) ? $ = $.toISOString() : yo.isObject($) && ($ = JSON.stringify($)), u.push(Vp(v) + "=" + Vp($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = r.indexOf("#");
    c !== -1 && (r = r.slice(0, c)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}, ak = nt;
function tl() {
  this.handlers = [];
}
tl.prototype.use = function(r, o, s) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
tl.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
tl.prototype.forEach = function(r) {
  ak.forEach(this.handlers, function(s) {
    s !== null && r(s);
  });
};
var lk = tl, uk = nt, ck = function(r, o) {
  uk.forEach(r, function(a, u) {
    u !== o && u.toUpperCase() === o.toUpperCase() && (r[o] = a, delete r[u]);
  });
}, Wm = nt;
function Go(e, r, o, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), s && (this.request = s), a && (this.response = a);
}
Wm.inherits(Go, Error, {
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
var qm = Go.prototype, Hm = {};
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
  Hm[e] = { value: e };
});
Object.defineProperties(Go, Hm);
Object.defineProperty(qm, "isAxiosError", { value: !0 });
Go.from = function(e, r, o, s, a, u) {
  var c = Object.create(qm);
  return Wm.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), Go.call(c, e.message, r, o, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var Jo = Go, zm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, un = nt;
function dk(e, r) {
  r = r || new FormData();
  var o = [];
  function s(u) {
    return u === null ? "" : un.isDate(u) ? u.toISOString() : un.isArrayBuffer(u) || un.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (un.isPlainObject(u) || un.isArray(u)) {
      if (o.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      o.push(u), un.forEach(u, function(w, v) {
        if (!un.isUndefined(w)) {
          var _ = c ? c + "." + v : v, $;
          if (w && !c && typeof w == "object") {
            if (un.endsWith(v, "{}"))
              w = JSON.stringify(w);
            else if (un.endsWith(v, "[]") && ($ = un.toArray(w))) {
              $.forEach(function(y) {
                !un.isUndefined(y) && r.append(_, s(y));
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
var Ym = dk, zu, Cp;
function fk() {
  if (Cp)
    return zu;
  Cp = 1;
  var e = Jo;
  return zu = function(o, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? o(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, zu;
}
var Yu, Sp;
function hk() {
  if (Sp)
    return Yu;
  Sp = 1;
  var e = nt;
  return Yu = e.isStandardBrowserEnv() ? function() {
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
  }(), Yu;
}
var pk = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, wk = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, vk = pk, mk = wk, Gm = function(r, o) {
  return r && !vk(o) ? mk(r, o) : o;
}, Gu, kp;
function _k() {
  if (kp)
    return Gu;
  kp = 1;
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
  return Gu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && r.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Gu;
}
var ju, Ep;
function gk() {
  if (Ep)
    return ju;
  Ep = 1;
  var e = nt;
  return ju = e.isStandardBrowserEnv() ? function() {
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
  }(), ju;
}
var Zu, Ip;
function nl() {
  if (Ip)
    return Zu;
  Ip = 1;
  var e = Jo, r = nt;
  function o(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), Zu = o, Zu;
}
var Ku, xp;
function $k() {
  return xp || (xp = 1, Ku = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), Ku;
}
var Ju, Ap;
function Bp() {
  if (Ap)
    return Ju;
  Ap = 1;
  var e = nt, r = fk(), o = hk(), s = Um, a = Gm, u = _k(), c = gk(), f = zm, w = Jo, v = nl(), _ = $k();
  return Ju = function(y) {
    return new Promise(function(D, M) {
      var L = y.data, S = y.headers, k = y.responseType, I;
      function P() {
        y.cancelToken && y.cancelToken.unsubscribe(I), y.signal && y.signal.removeEventListener("abort", I);
      }
      e.isFormData(L) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var x = new XMLHttpRequest();
      if (y.auth) {
        var R = y.auth.username || "", O = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(R + ":" + O);
      }
      var H = a(y.baseURL, y.url);
      x.open(y.method.toUpperCase(), s(H, y.params, y.paramsSerializer), !0), x.timeout = y.timeout;
      function $e() {
        if (!!x) {
          var ke = "getAllResponseHeaders" in x ? u(x.getAllResponseHeaders()) : null, ye = !k || k === "text" || k === "json" ? x.responseText : x.response, Ae = {
            data: ye,
            status: x.status,
            statusText: x.statusText,
            headers: ke,
            config: y,
            request: x
          };
          r(function(Re) {
            D(Re), P();
          }, function(Re) {
            M(Re), P();
          }, Ae), x = null;
        }
      }
      if ("onloadend" in x ? x.onloadend = $e : x.onreadystatechange = function() {
        !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout($e);
      }, x.onabort = function() {
        !x || (M(new w("Request aborted", w.ECONNABORTED, y, x)), x = null);
      }, x.onerror = function() {
        M(new w("Network Error", w.ERR_NETWORK, y, x, x)), x = null;
      }, x.ontimeout = function() {
        var ye = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ae = y.transitional || f;
        y.timeoutErrorMessage && (ye = y.timeoutErrorMessage), M(new w(
          ye,
          Ae.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          x
        )), x = null;
      }, e.isStandardBrowserEnv()) {
        var de = (y.withCredentials || c(H)) && y.xsrfCookieName ? o.read(y.xsrfCookieName) : void 0;
        de && (S[y.xsrfHeaderName] = de);
      }
      "setRequestHeader" in x && e.forEach(S, function(ye, Ae) {
        typeof L > "u" && Ae.toLowerCase() === "content-type" ? delete S[Ae] : x.setRequestHeader(Ae, ye);
      }), e.isUndefined(y.withCredentials) || (x.withCredentials = !!y.withCredentials), k && k !== "json" && (x.responseType = y.responseType), typeof y.onDownloadProgress == "function" && x.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && x.upload && x.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (I = function(ke) {
        !x || (M(!ke || ke && ke.type ? new v() : ke), x.abort(), x = null);
      }, y.cancelToken && y.cancelToken.subscribe(I), y.signal && (y.signal.aborted ? I() : y.signal.addEventListener("abort", I))), L || (L = null);
      var pe = _(H);
      if (pe && ["http", "https", "file"].indexOf(pe) === -1) {
        M(new w("Unsupported protocol " + pe + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      x.send(L);
    });
  }, Ju;
}
var Xu, Tp;
function yk() {
  return Tp || (Tp = 1, Xu = null), Xu;
}
var Ze = nt, Dp = ck, Np = Jo, bk = zm, Vk = Ym, Ck = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Lp(e, r) {
  !Ze.isUndefined(e) && Ze.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function Sk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Bp()), e;
}
function kk(e, r, o) {
  if (Ze.isString(e))
    try {
      return (r || JSON.parse)(e), Ze.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (o || JSON.stringify)(e);
}
var rl = {
  transitional: bk,
  adapter: Sk(),
  transformRequest: [function(r, o) {
    if (Dp(o, "Accept"), Dp(o, "Content-Type"), Ze.isFormData(r) || Ze.isArrayBuffer(r) || Ze.isBuffer(r) || Ze.isStream(r) || Ze.isFile(r) || Ze.isBlob(r))
      return r;
    if (Ze.isArrayBufferView(r))
      return r.buffer;
    if (Ze.isURLSearchParams(r))
      return Lp(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var s = Ze.isObject(r), a = o && o["Content-Type"], u;
    if ((u = Ze.isFileList(r)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return Vk(u ? { "files[]": r } : r, c && new c());
    } else if (s || a === "application/json")
      return Lp(o, "application/json"), kk(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || rl.transitional, s = o && o.silentJSONParsing, a = o && o.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && Ze.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Np.from(c, Np.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return r;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: yk()
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
Ze.forEach(["delete", "get", "head"], function(r) {
  rl.headers[r] = {};
});
Ze.forEach(["post", "put", "patch"], function(r) {
  rl.headers[r] = Ze.merge(Ck);
});
var Vd = rl, Ek = nt, Ik = Vd, xk = function(r, o, s) {
  var a = this || Ik;
  return Ek.forEach(s, function(c) {
    r = c.call(a, r, o);
  }), r;
}, Qu, Mp;
function jm() {
  return Mp || (Mp = 1, Qu = function(r) {
    return !!(r && r.__CANCEL__);
  }), Qu;
}
var Op = nt, ec = xk, Ak = jm(), Bk = Vd, Tk = nl();
function tc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tk();
}
var Dk = function(r) {
  tc(r), r.headers = r.headers || {}, r.data = ec.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Op.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Op.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete r.headers[a];
    }
  );
  var o = r.adapter || Bk.adapter;
  return o(r).then(function(a) {
    return tc(r), a.data = ec.call(
      r,
      a.data,
      a.headers,
      r.transformResponse
    ), a;
  }, function(a) {
    return Ak(a) || (tc(r), a && a.response && (a.response.data = ec.call(
      r,
      a.response.data,
      a.response.headers,
      r.transformResponse
    ))), Promise.reject(a);
  });
}, Lt = nt, Zm = function(r, o) {
  o = o || {};
  var s = {};
  function a(_, $) {
    return Lt.isPlainObject(_) && Lt.isPlainObject($) ? Lt.merge(_, $) : Lt.isPlainObject($) ? Lt.merge({}, $) : Lt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (Lt.isUndefined(o[_])) {
      if (!Lt.isUndefined(r[_]))
        return a(void 0, r[_]);
    } else
      return a(r[_], o[_]);
  }
  function c(_) {
    if (!Lt.isUndefined(o[_]))
      return a(void 0, o[_]);
  }
  function f(_) {
    if (Lt.isUndefined(o[_])) {
      if (!Lt.isUndefined(r[_]))
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
  return Lt.forEach(Object.keys(r).concat(Object.keys(o)), function($) {
    var y = v[$] || u, T = y($);
    Lt.isUndefined(T) && y !== w || (s[$] = T);
  }), s;
}, nc, Pp;
function Km() {
  return Pp || (Pp = 1, nc = {
    version: "0.27.2"
  }), nc;
}
var Nk = Km().version, hr = Jo, Cd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Cd[e] = function(s) {
    return typeof s === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Rp = {};
Cd.transitional = function(r, o, s) {
  function a(u, c) {
    return "[Axios v" + Nk + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (r === !1)
      throw new hr(
        a(c, " has been removed" + (o ? " in " + o : "")),
        hr.ERR_DEPRECATED
      );
    return o && !Rp[c] && (Rp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(u, c, f) : !0;
  };
};
function Lk(e, r, o) {
  if (typeof e != "object")
    throw new hr("options must be an object", hr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = r[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new hr("option " + u + " must be " + w, hr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new hr("Unknown option " + u, hr.ERR_BAD_OPTION);
  }
}
var Mk = {
  assertOptions: Lk,
  validators: Cd
}, Jm = nt, Ok = Um, Fp = lk, Up = Dk, ol = Zm, Pk = Gm, Xm = Mk, bo = Xm.validators;
function jo(e) {
  this.defaults = e, this.interceptors = {
    request: new Fp(),
    response: new Fp()
  };
}
jo.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = ol(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var s = o.transitional;
  s !== void 0 && Xm.assertOptions(s, {
    silentJSONParsing: bo.transitional(bo.boolean),
    forcedJSONParsing: bo.transitional(bo.boolean),
    clarifyTimeoutError: bo.transitional(bo.boolean)
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
    var w = [Up, void 0];
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
    f = Up(v);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
jo.prototype.getUri = function(r) {
  r = ol(this.defaults, r);
  var o = Pk(r.baseURL, r.url);
  return Ok(o, r.params, r.paramsSerializer);
};
Jm.forEach(["delete", "get", "head", "options"], function(r) {
  jo.prototype[r] = function(o, s) {
    return this.request(ol(s || {}, {
      method: r,
      url: o,
      data: (s || {}).data
    }));
  };
});
Jm.forEach(["post", "put", "patch"], function(r) {
  function o(s) {
    return function(u, c, f) {
      return this.request(ol(f || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  jo.prototype[r] = o(), jo.prototype[r + "Form"] = o(!0);
});
var Rk = jo, rc, Wp;
function Fk() {
  if (Wp)
    return rc;
  Wp = 1;
  var e = nl();
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
  }, rc = r, rc;
}
var oc, qp;
function Uk() {
  return qp || (qp = 1, oc = function(r) {
    return function(s) {
      return r.apply(null, s);
    };
  }), oc;
}
var ic, Hp;
function Wk() {
  if (Hp)
    return ic;
  Hp = 1;
  var e = nt;
  return ic = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, ic;
}
var zp = nt, qk = Pm, Ma = Rk, Hk = Zm, zk = Vd;
function Qm(e) {
  var r = new Ma(e), o = qk(Ma.prototype.request, r);
  return zp.extend(o, Ma.prototype, r), zp.extend(o, r), o.create = function(a) {
    return Qm(Hk(e, a));
  }, o;
}
var Et = Qm(zk);
Et.Axios = Ma;
Et.CanceledError = nl();
Et.CancelToken = Fk();
Et.isCancel = jm();
Et.VERSION = Km().version;
Et.toFormData = Ym;
Et.AxiosError = Jo;
Et.Cancel = Et.CanceledError;
Et.all = function(r) {
  return Promise.all(r);
};
Et.spread = Uk();
Et.isAxiosError = Wk();
md.exports = Et;
md.exports.default = Et;
(function(e) {
  e.exports = md.exports;
})(Om);
const e_ = /* @__PURE__ */ RS(Om.exports), Hn = e_.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), lt = e_.create({
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
    var o, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, D = 1, M = 2, L = 1, S = 2, k = 4, I = 8, P = 16, x = 32, R = 64, O = 128, H = 256, $e = 512, de = 30, pe = "...", ke = 800, ye = 16, Ae = 1, ve = 2, Re = 3, Fe = 1 / 0, Ye = 9007199254740991, zn = 17976931348623157e292, yr = 0 / 0, It = 4294967295, ms = It - 1, _s = It >>> 1, gs = [
      ["ary", O],
      ["bind", L],
      ["bindKey", S],
      ["curry", I],
      ["curryRight", P],
      ["flip", $e],
      ["partial", x],
      ["partialRight", R],
      ["rearg", H]
    ], In = "[object Arguments]", br = "[object Array]", $s = "[object AsyncFunction]", Yn = "[object Boolean]", Gn = "[object Date]", ys = "[object DOMException]", Vr = "[object Error]", Cr = "[object Function]", di = "[object GeneratorFunction]", vt = "[object Map]", se = "[object Number]", Q = "[object Null]", ne = "[object Object]", fi = "[object Promise]", bs = "[object Proxy]", jn = "[object RegExp]", mt = "[object Set]", Zn = "[object String]", Sr = "[object Symbol]", Yg = "[object Undefined]", hi = "[object WeakMap]", Gg = "[object WeakSet]", pi = "[object ArrayBuffer]", io = "[object DataView]", Cl = "[object Float32Array]", Sl = "[object Float64Array]", kl = "[object Int8Array]", El = "[object Int16Array]", Il = "[object Int32Array]", xl = "[object Uint8Array]", Al = "[object Uint8ClampedArray]", Bl = "[object Uint16Array]", Tl = "[object Uint32Array]", jg = /\b__p \+= '';/g, Zg = /\b(__p \+=) '' \+/g, Kg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Gd = /&(?:amp|lt|gt|quot|#39);/g, jd = /[&<>"']/g, Jg = RegExp(Gd.source), Xg = RegExp(jd.source), Qg = /<%-([\s\S]+?)%>/g, e1 = /<%([\s\S]+?)%>/g, Zd = /<%=([\s\S]+?)%>/g, t1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n1 = /^\w*$/, r1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dl = /[\\^$.*+?()[\]{}|]/g, o1 = RegExp(Dl.source), Nl = /^\s+/, i1 = /\s/, s1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, a1 = /\{\n\/\* \[wrapped with (.+)\] \*/, l1 = /,? & /, u1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, c1 = /[()=,{}\[\]\/\s]/, d1 = /\\(\\)?/g, f1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Kd = /\w*$/, h1 = /^[-+]0x[0-9a-f]+$/i, p1 = /^0b[01]+$/i, w1 = /^\[object .+?Constructor\]$/, v1 = /^0o[0-7]+$/i, m1 = /^(?:0|[1-9]\d*)$/, _1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Vs = /($^)/, g1 = /['\n\r\u2028\u2029\\]/g, Cs = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", y1 = "\\ufe20-\\ufe2f", b1 = "\\u20d0-\\u20ff", Jd = $1 + y1 + b1, Xd = "\\u2700-\\u27bf", Qd = "a-z\\xdf-\\xf6\\xf8-\\xff", V1 = "\\xac\\xb1\\xd7\\xf7", C1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", S1 = "\\u2000-\\u206f", k1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ef = "A-Z\\xc0-\\xd6\\xd8-\\xde", tf = "\\ufe0e\\ufe0f", nf = V1 + C1 + S1 + k1, Ll = "['\u2019]", E1 = "[" + Cs + "]", rf = "[" + nf + "]", Ss = "[" + Jd + "]", of = "\\d+", I1 = "[" + Xd + "]", sf = "[" + Qd + "]", af = "[^" + Cs + nf + of + Xd + Qd + ef + "]", Ml = "\\ud83c[\\udffb-\\udfff]", x1 = "(?:" + Ss + "|" + Ml + ")", lf = "[^" + Cs + "]", Ol = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pl = "[\\ud800-\\udbff][\\udc00-\\udfff]", so = "[" + ef + "]", uf = "\\u200d", cf = "(?:" + sf + "|" + af + ")", A1 = "(?:" + so + "|" + af + ")", df = "(?:" + Ll + "(?:d|ll|m|re|s|t|ve))?", ff = "(?:" + Ll + "(?:D|LL|M|RE|S|T|VE))?", hf = x1 + "?", pf = "[" + tf + "]?", B1 = "(?:" + uf + "(?:" + [lf, Ol, Pl].join("|") + ")" + pf + hf + ")*", T1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", D1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wf = pf + hf + B1, N1 = "(?:" + [I1, Ol, Pl].join("|") + ")" + wf, L1 = "(?:" + [lf + Ss + "?", Ss, Ol, Pl, E1].join("|") + ")", M1 = RegExp(Ll, "g"), O1 = RegExp(Ss, "g"), Rl = RegExp(Ml + "(?=" + Ml + ")|" + L1 + wf, "g"), P1 = RegExp([
      so + "?" + sf + "+" + df + "(?=" + [rf, so, "$"].join("|") + ")",
      A1 + "+" + ff + "(?=" + [rf, so + cf, "$"].join("|") + ")",
      so + "?" + cf + "+" + df,
      so + "+" + ff,
      D1,
      T1,
      of,
      N1
    ].join("|"), "g"), R1 = RegExp("[" + uf + Cs + Jd + tf + "]"), F1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, U1 = [
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
    ], W1 = -1, Se = {};
    Se[Cl] = Se[Sl] = Se[kl] = Se[El] = Se[Il] = Se[xl] = Se[Al] = Se[Bl] = Se[Tl] = !0, Se[In] = Se[br] = Se[pi] = Se[Yn] = Se[io] = Se[Gn] = Se[Vr] = Se[Cr] = Se[vt] = Se[se] = Se[ne] = Se[jn] = Se[mt] = Se[Zn] = Se[hi] = !1;
    var Ve = {};
    Ve[In] = Ve[br] = Ve[pi] = Ve[io] = Ve[Yn] = Ve[Gn] = Ve[Cl] = Ve[Sl] = Ve[kl] = Ve[El] = Ve[Il] = Ve[vt] = Ve[se] = Ve[ne] = Ve[jn] = Ve[mt] = Ve[Zn] = Ve[Sr] = Ve[xl] = Ve[Al] = Ve[Bl] = Ve[Tl] = !0, Ve[Vr] = Ve[Cr] = Ve[hi] = !1;
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
    }, G1 = parseFloat, j1 = parseInt, vf = typeof Ai == "object" && Ai && Ai.Object === Object && Ai, Z1 = typeof self == "object" && self && self.Object === Object && self, Ke = vf || Z1 || Function("return this")(), Fl = r && !r.nodeType && r, kr = Fl && !0 && e && !e.nodeType && e, mf = kr && kr.exports === Fl, Ul = mf && vf.process, Ht = function() {
      try {
        var b = kr && kr.require && kr.require("util").types;
        return b || Ul && Ul.binding && Ul.binding("util");
      } catch {
      }
    }(), _f = Ht && Ht.isArrayBuffer, gf = Ht && Ht.isDate, $f = Ht && Ht.isMap, yf = Ht && Ht.isRegExp, bf = Ht && Ht.isSet, Vf = Ht && Ht.isTypedArray;
    function xt(b, E, C) {
      switch (C.length) {
        case 0:
          return b.call(E);
        case 1:
          return b.call(E, C[0]);
        case 2:
          return b.call(E, C[0], C[1]);
        case 3:
          return b.call(E, C[0], C[1], C[2]);
      }
      return b.apply(E, C);
    }
    function K1(b, E, C, U) {
      for (var K = -1, fe = b == null ? 0 : b.length; ++K < fe; ) {
        var Ue = b[K];
        E(U, Ue, C(Ue), b);
      }
      return U;
    }
    function zt(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U && E(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function J1(b, E) {
      for (var C = b == null ? 0 : b.length; C-- && E(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function Cf(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U; )
        if (!E(b[C], C, b))
          return !1;
      return !0;
    }
    function Kn(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length, K = 0, fe = []; ++C < U; ) {
        var Ue = b[C];
        E(Ue, C, b) && (fe[K++] = Ue);
      }
      return fe;
    }
    function ks(b, E) {
      var C = b == null ? 0 : b.length;
      return !!C && ao(b, E, 0) > -1;
    }
    function Wl(b, E, C) {
      for (var U = -1, K = b == null ? 0 : b.length; ++U < K; )
        if (C(E, b[U]))
          return !0;
      return !1;
    }
    function Ee(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length, K = Array(U); ++C < U; )
        K[C] = E(b[C], C, b);
      return K;
    }
    function Jn(b, E) {
      for (var C = -1, U = E.length, K = b.length; ++C < U; )
        b[K + C] = E[C];
      return b;
    }
    function ql(b, E, C, U) {
      var K = -1, fe = b == null ? 0 : b.length;
      for (U && fe && (C = b[++K]); ++K < fe; )
        C = E(C, b[K], K, b);
      return C;
    }
    function X1(b, E, C, U) {
      var K = b == null ? 0 : b.length;
      for (U && K && (C = b[--K]); K--; )
        C = E(C, b[K], K, b);
      return C;
    }
    function Hl(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U; )
        if (E(b[C], C, b))
          return !0;
      return !1;
    }
    var Q1 = zl("length");
    function e0(b) {
      return b.split("");
    }
    function t0(b) {
      return b.match(u1) || [];
    }
    function Sf(b, E, C) {
      var U;
      return C(b, function(K, fe, Ue) {
        if (E(K, fe, Ue))
          return U = fe, !1;
      }), U;
    }
    function Es(b, E, C, U) {
      for (var K = b.length, fe = C + (U ? 1 : -1); U ? fe-- : ++fe < K; )
        if (E(b[fe], fe, b))
          return fe;
      return -1;
    }
    function ao(b, E, C) {
      return E === E ? h0(b, E, C) : Es(b, kf, C);
    }
    function n0(b, E, C, U) {
      for (var K = C - 1, fe = b.length; ++K < fe; )
        if (U(b[K], E))
          return K;
      return -1;
    }
    function kf(b) {
      return b !== b;
    }
    function Ef(b, E) {
      var C = b == null ? 0 : b.length;
      return C ? Gl(b, E) / C : yr;
    }
    function zl(b) {
      return function(E) {
        return E == null ? o : E[b];
      };
    }
    function Yl(b) {
      return function(E) {
        return b == null ? o : b[E];
      };
    }
    function If(b, E, C, U, K) {
      return K(b, function(fe, Ue, be) {
        C = U ? (U = !1, fe) : E(C, fe, Ue, be);
      }), C;
    }
    function r0(b, E) {
      var C = b.length;
      for (b.sort(E); C--; )
        b[C] = b[C].value;
      return b;
    }
    function Gl(b, E) {
      for (var C, U = -1, K = b.length; ++U < K; ) {
        var fe = E(b[U]);
        fe !== o && (C = C === o ? fe : C + fe);
      }
      return C;
    }
    function jl(b, E) {
      for (var C = -1, U = Array(b); ++C < b; )
        U[C] = E(C);
      return U;
    }
    function o0(b, E) {
      return Ee(E, function(C) {
        return [C, b[C]];
      });
    }
    function xf(b) {
      return b && b.slice(0, Df(b) + 1).replace(Nl, "");
    }
    function At(b) {
      return function(E) {
        return b(E);
      };
    }
    function Zl(b, E) {
      return Ee(E, function(C) {
        return b[C];
      });
    }
    function wi(b, E) {
      return b.has(E);
    }
    function Af(b, E) {
      for (var C = -1, U = b.length; ++C < U && ao(E, b[C], 0) > -1; )
        ;
      return C;
    }
    function Bf(b, E) {
      for (var C = b.length; C-- && ao(E, b[C], 0) > -1; )
        ;
      return C;
    }
    function i0(b, E) {
      for (var C = b.length, U = 0; C--; )
        b[C] === E && ++U;
      return U;
    }
    var s0 = Yl(q1), a0 = Yl(H1);
    function l0(b) {
      return "\\" + Y1[b];
    }
    function u0(b, E) {
      return b == null ? o : b[E];
    }
    function lo(b) {
      return R1.test(b);
    }
    function c0(b) {
      return F1.test(b);
    }
    function d0(b) {
      for (var E, C = []; !(E = b.next()).done; )
        C.push(E.value);
      return C;
    }
    function Kl(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U, K) {
        C[++E] = [K, U];
      }), C;
    }
    function Tf(b, E) {
      return function(C) {
        return b(E(C));
      };
    }
    function Xn(b, E) {
      for (var C = -1, U = b.length, K = 0, fe = []; ++C < U; ) {
        var Ue = b[C];
        (Ue === E || Ue === _) && (b[C] = _, fe[K++] = C);
      }
      return fe;
    }
    function Is(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U) {
        C[++E] = U;
      }), C;
    }
    function f0(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U) {
        C[++E] = [U, U];
      }), C;
    }
    function h0(b, E, C) {
      for (var U = C - 1, K = b.length; ++U < K; )
        if (b[U] === E)
          return U;
      return -1;
    }
    function p0(b, E, C) {
      for (var U = C + 1; U--; )
        if (b[U] === E)
          return U;
      return U;
    }
    function uo(b) {
      return lo(b) ? v0(b) : Q1(b);
    }
    function on(b) {
      return lo(b) ? m0(b) : e0(b);
    }
    function Df(b) {
      for (var E = b.length; E-- && i1.test(b.charAt(E)); )
        ;
      return E;
    }
    var w0 = Yl(z1);
    function v0(b) {
      for (var E = Rl.lastIndex = 0; Rl.test(b); )
        ++E;
      return E;
    }
    function m0(b) {
      return b.match(Rl) || [];
    }
    function _0(b) {
      return b.match(P1) || [];
    }
    var g0 = function b(E) {
      E = E == null ? Ke : co.defaults(Ke.Object(), E, co.pick(Ke, U1));
      var C = E.Array, U = E.Date, K = E.Error, fe = E.Function, Ue = E.Math, be = E.Object, Jl = E.RegExp, $0 = E.String, Yt = E.TypeError, xs = C.prototype, y0 = fe.prototype, fo = be.prototype, As = E["__core-js_shared__"], Bs = y0.toString, me = fo.hasOwnProperty, b0 = 0, Nf = function() {
        var t = /[^.]+$/.exec(As && As.keys && As.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Ts = fo.toString, V0 = Bs.call(be), C0 = Ke._, S0 = Jl(
        "^" + Bs.call(me).replace(Dl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ds = mf ? E.Buffer : o, Qn = E.Symbol, Ns = E.Uint8Array, Lf = Ds ? Ds.allocUnsafe : o, Ls = Tf(be.getPrototypeOf, be), Mf = be.create, Of = fo.propertyIsEnumerable, Ms = xs.splice, Pf = Qn ? Qn.isConcatSpreadable : o, vi = Qn ? Qn.iterator : o, Er = Qn ? Qn.toStringTag : o, Os = function() {
        try {
          var t = Tr(be, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), k0 = E.clearTimeout !== Ke.clearTimeout && E.clearTimeout, E0 = U && U.now !== Ke.Date.now && U.now, I0 = E.setTimeout !== Ke.setTimeout && E.setTimeout, Ps = Ue.ceil, Rs = Ue.floor, Xl = be.getOwnPropertySymbols, x0 = Ds ? Ds.isBuffer : o, Rf = E.isFinite, A0 = xs.join, B0 = Tf(be.keys, be), We = Ue.max, rt = Ue.min, T0 = U.now, D0 = E.parseInt, Ff = Ue.random, N0 = xs.reverse, Ql = Tr(E, "DataView"), mi = Tr(E, "Map"), eu = Tr(E, "Promise"), ho = Tr(E, "Set"), _i = Tr(E, "WeakMap"), gi = Tr(be, "create"), Fs = _i && new _i(), po = {}, L0 = Dr(Ql), M0 = Dr(mi), O0 = Dr(eu), P0 = Dr(ho), R0 = Dr(_i), Us = Qn ? Qn.prototype : o, $i = Us ? Us.valueOf : o, Uf = Us ? Us.toString : o;
      function h(t) {
        if (Be(t) && !J(t) && !(t instanceof ie)) {
          if (t instanceof Gt)
            return t;
          if (me.call(t, "__wrapped__"))
            return Wh(t);
        }
        return new Gt(t);
      }
      var wo = function() {
        function t() {
        }
        return function(n) {
          if (!Ie(n))
            return {};
          if (Mf)
            return Mf(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = o, i;
        };
      }();
      function Ws() {
      }
      function Gt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: Qg,
        evaluate: e1,
        interpolate: Zd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Ws.prototype, h.prototype.constructor = h, Gt.prototype = wo(Ws.prototype), Gt.prototype.constructor = Gt;
      function ie(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = It, this.__views__ = [];
      }
      function F0() {
        var t = new ie(this.__wrapped__);
        return t.__actions__ = _t(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = _t(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = _t(this.__views__), t;
      }
      function U0() {
        if (this.__filtered__) {
          var t = new ie(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function W0() {
        var t = this.__wrapped__.value(), n = this.__dir__, i = J(t), l = n < 0, d = i ? t.length : 0, p = ey(0, d, this.__views__), m = p.start, g = p.end, V = g - m, A = l ? g : m - 1, B = this.__iteratees__, N = B.length, F = 0, q = rt(V, this.__takeCount__);
        if (!i || !l && d == V && q == V)
          return dh(t, this.__actions__);
        var G = [];
        e:
          for (; V-- && F < q; ) {
            A += n;
            for (var ee = -1, j = t[A]; ++ee < N; ) {
              var oe = B[ee], ae = oe.iteratee, Dt = oe.type, ft = ae(j);
              if (Dt == ve)
                j = ft;
              else if (!ft) {
                if (Dt == Ae)
                  continue e;
                break e;
              }
            }
            G[F++] = j;
          }
        return G;
      }
      ie.prototype = wo(Ws.prototype), ie.prototype.constructor = ie;
      function Ir(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function q0() {
        this.__data__ = gi ? gi(null) : {}, this.size = 0;
      }
      function H0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function z0(t) {
        var n = this.__data__;
        if (gi) {
          var i = n[t];
          return i === w ? o : i;
        }
        return me.call(n, t) ? n[t] : o;
      }
      function Y0(t) {
        var n = this.__data__;
        return gi ? n[t] !== o : me.call(n, t);
      }
      function G0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = gi && n === o ? w : n, this;
      }
      Ir.prototype.clear = q0, Ir.prototype.delete = H0, Ir.prototype.get = z0, Ir.prototype.has = Y0, Ir.prototype.set = G0;
      function xn(t) {
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
        var n = this.__data__, i = qs(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Ms.call(n, i, 1), --this.size, !0;
      }
      function K0(t) {
        var n = this.__data__, i = qs(n, t);
        return i < 0 ? o : n[i][1];
      }
      function J0(t) {
        return qs(this.__data__, t) > -1;
      }
      function X0(t, n) {
        var i = this.__data__, l = qs(i, t);
        return l < 0 ? (++this.size, i.push([t, n])) : i[l][1] = n, this;
      }
      xn.prototype.clear = j0, xn.prototype.delete = Z0, xn.prototype.get = K0, xn.prototype.has = J0, xn.prototype.set = X0;
      function An(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Q0() {
        this.size = 0, this.__data__ = {
          hash: new Ir(),
          map: new (mi || xn)(),
          string: new Ir()
        };
      }
      function e$(t) {
        var n = ta(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function t$(t) {
        return ta(this, t).get(t);
      }
      function n$(t) {
        return ta(this, t).has(t);
      }
      function r$(t, n) {
        var i = ta(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      An.prototype.clear = Q0, An.prototype.delete = e$, An.prototype.get = t$, An.prototype.has = n$, An.prototype.set = r$;
      function xr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.__data__ = new An(); ++n < i; )
          this.add(t[n]);
      }
      function o$(t) {
        return this.__data__.set(t, w), this;
      }
      function i$(t) {
        return this.__data__.has(t);
      }
      xr.prototype.add = xr.prototype.push = o$, xr.prototype.has = i$;
      function sn(t) {
        var n = this.__data__ = new xn(t);
        this.size = n.size;
      }
      function s$() {
        this.__data__ = new xn(), this.size = 0;
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
        if (i instanceof xn) {
          var l = i.__data__;
          if (!mi || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new An(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      sn.prototype.clear = s$, sn.prototype.delete = a$, sn.prototype.get = l$, sn.prototype.has = u$, sn.prototype.set = c$;
      function Wf(t, n) {
        var i = J(t), l = !i && Nr(t), d = !i && !l && or(t), p = !i && !l && !d && go(t), m = i || l || d || p, g = m ? jl(t.length, $0) : [], V = g.length;
        for (var A in t)
          (n || me.call(t, A)) && !(m && (A == "length" || d && (A == "offset" || A == "parent") || p && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Nn(A, V))) && g.push(A);
        return g;
      }
      function qf(t) {
        var n = t.length;
        return n ? t[du(0, n - 1)] : o;
      }
      function d$(t, n) {
        return na(_t(t), Ar(n, 0, t.length));
      }
      function f$(t) {
        return na(_t(t));
      }
      function tu(t, n, i) {
        (i !== o && !an(t[n], i) || i === o && !(n in t)) && Bn(t, n, i);
      }
      function yi(t, n, i) {
        var l = t[n];
        (!(me.call(t, n) && an(l, i)) || i === o && !(n in t)) && Bn(t, n, i);
      }
      function qs(t, n) {
        for (var i = t.length; i--; )
          if (an(t[i][0], n))
            return i;
        return -1;
      }
      function h$(t, n, i, l) {
        return er(t, function(d, p, m) {
          n(l, d, i(d), m);
        }), l;
      }
      function Hf(t, n) {
        return t && _n(n, Ge(n), t);
      }
      function p$(t, n) {
        return t && _n(n, $t(n), t);
      }
      function Bn(t, n, i) {
        n == "__proto__" && Os ? Os(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function nu(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? o : Mu(t, n[i]);
        return d;
      }
      function Ar(t, n, i) {
        return t === t && (i !== o && (t = t <= i ? t : i), n !== o && (t = t >= n ? t : n)), t;
      }
      function jt(t, n, i, l, d, p) {
        var m, g = n & $, V = n & y, A = n & T;
        if (i && (m = d ? i(t, l, d, p) : i(t)), m !== o)
          return m;
        if (!Ie(t))
          return t;
        var B = J(t);
        if (B) {
          if (m = ny(t), !g)
            return _t(t, m);
        } else {
          var N = ot(t), F = N == Cr || N == di;
          if (or(t))
            return ph(t, g);
          if (N == ne || N == In || F && !d) {
            if (m = V || F ? {} : Dh(t), !g)
              return V ? z$(t, p$(m, t)) : H$(t, Hf(m, t));
          } else {
            if (!Ve[N])
              return d ? t : {};
            m = ry(t, N, g);
          }
        }
        p || (p = new sn());
        var q = p.get(t);
        if (q)
          return q;
        p.set(t, m), lp(t) ? t.forEach(function(j) {
          m.add(jt(j, n, i, j, t, p));
        }) : sp(t) && t.forEach(function(j, oe) {
          m.set(oe, jt(j, n, i, oe, t, p));
        });
        var G = A ? V ? bu : yu : V ? $t : Ge, ee = B ? o : G(t);
        return zt(ee || t, function(j, oe) {
          ee && (oe = j, j = t[oe]), yi(m, oe, jt(j, n, i, oe, t, p));
        }), m;
      }
      function w$(t) {
        var n = Ge(t);
        return function(i) {
          return zf(i, t, n);
        };
      }
      function zf(t, n, i) {
        var l = i.length;
        if (t == null)
          return !l;
        for (t = be(t); l--; ) {
          var d = i[l], p = n[d], m = t[d];
          if (m === o && !(d in t) || !p(m))
            return !1;
        }
        return !0;
      }
      function Yf(t, n, i) {
        if (typeof t != "function")
          throw new Yt(c);
        return Ii(function() {
          t.apply(o, i);
        }, n);
      }
      function bi(t, n, i, l) {
        var d = -1, p = ks, m = !0, g = t.length, V = [], A = n.length;
        if (!g)
          return V;
        i && (n = Ee(n, At(i))), l ? (p = Wl, m = !1) : n.length >= a && (p = wi, m = !1, n = new xr(n));
        e:
          for (; ++d < g; ) {
            var B = t[d], N = i == null ? B : i(B);
            if (B = l || B !== 0 ? B : 0, m && N === N) {
              for (var F = A; F--; )
                if (n[F] === N)
                  continue e;
              V.push(B);
            } else
              p(n, N, l) || V.push(B);
          }
        return V;
      }
      var er = gh(mn), Gf = gh(ou, !0);
      function v$(t, n) {
        var i = !0;
        return er(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function Hs(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === o ? m === m && !Tt(m) : i(m, g)))
            var g = m, V = p;
        }
        return V;
      }
      function m$(t, n, i, l) {
        var d = t.length;
        for (i = X(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === o || l > d ? d : X(l), l < 0 && (l += d), l = i > l ? 0 : cp(l); i < l; )
          t[i++] = n;
        return t;
      }
      function jf(t, n) {
        var i = [];
        return er(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function Je(t, n, i, l, d) {
        var p = -1, m = t.length;
        for (i || (i = iy), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? Je(g, n - 1, i, l, d) : Jn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var ru = $h(), Zf = $h(!0);
      function mn(t, n) {
        return t && ru(t, n, Ge);
      }
      function ou(t, n) {
        return t && Zf(t, n, Ge);
      }
      function zs(t, n) {
        return Kn(n, function(i) {
          return Ln(t[i]);
        });
      }
      function Br(t, n) {
        n = nr(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[gn(n[i++])];
        return i && i == l ? t : o;
      }
      function Kf(t, n, i) {
        var l = n(t);
        return J(t) ? l : Jn(l, i(t));
      }
      function ct(t) {
        return t == null ? t === o ? Yg : Q : Er && Er in be(t) ? Q$(t) : fy(t);
      }
      function iu(t, n) {
        return t > n;
      }
      function _$(t, n) {
        return t != null && me.call(t, n);
      }
      function g$(t, n) {
        return t != null && n in be(t);
      }
      function $$(t, n, i) {
        return t >= rt(n, i) && t < We(n, i);
      }
      function su(t, n, i) {
        for (var l = i ? Wl : ks, d = t[0].length, p = t.length, m = p, g = C(p), V = 1 / 0, A = []; m--; ) {
          var B = t[m];
          m && n && (B = Ee(B, At(n))), V = rt(B.length, V), g[m] = !i && (n || d >= 120 && B.length >= 120) ? new xr(m && B) : o;
        }
        B = t[0];
        var N = -1, F = g[0];
        e:
          for (; ++N < d && A.length < V; ) {
            var q = B[N], G = n ? n(q) : q;
            if (q = i || q !== 0 ? q : 0, !(F ? wi(F, G) : l(A, G, i))) {
              for (m = p; --m; ) {
                var ee = g[m];
                if (!(ee ? wi(ee, G) : l(t[m], G, i)))
                  continue e;
              }
              F && F.push(G), A.push(q);
            }
          }
        return A;
      }
      function y$(t, n, i, l) {
        return mn(t, function(d, p, m) {
          n(l, i(d), p, m);
        }), l;
      }
      function Vi(t, n, i) {
        n = nr(n, t), t = Oh(t, n);
        var l = t == null ? t : t[gn(Kt(n))];
        return l == null ? o : xt(l, t, i);
      }
      function Jf(t) {
        return Be(t) && ct(t) == In;
      }
      function b$(t) {
        return Be(t) && ct(t) == pi;
      }
      function V$(t) {
        return Be(t) && ct(t) == Gn;
      }
      function Ci(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Be(t) && !Be(n) ? t !== t && n !== n : C$(t, n, i, l, Ci, d);
      }
      function C$(t, n, i, l, d, p) {
        var m = J(t), g = J(n), V = m ? br : ot(t), A = g ? br : ot(n);
        V = V == In ? ne : V, A = A == In ? ne : A;
        var B = V == ne, N = A == ne, F = V == A;
        if (F && or(t)) {
          if (!or(n))
            return !1;
          m = !0, B = !1;
        }
        if (F && !B)
          return p || (p = new sn()), m || go(t) ? Ah(t, n, i, l, d, p) : J$(t, n, V, i, l, d, p);
        if (!(i & D)) {
          var q = B && me.call(t, "__wrapped__"), G = N && me.call(n, "__wrapped__");
          if (q || G) {
            var ee = q ? t.value() : t, j = G ? n.value() : n;
            return p || (p = new sn()), d(ee, j, i, l, p);
          }
        }
        return F ? (p || (p = new sn()), X$(t, n, i, l, d, p)) : !1;
      }
      function S$(t) {
        return Be(t) && ot(t) == vt;
      }
      function au(t, n, i, l) {
        var d = i.length, p = d, m = !l;
        if (t == null)
          return !p;
        for (t = be(t); d--; ) {
          var g = i[d];
          if (m && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = i[d];
          var V = g[0], A = t[V], B = g[1];
          if (m && g[2]) {
            if (A === o && !(V in t))
              return !1;
          } else {
            var N = new sn();
            if (l)
              var F = l(A, B, V, t, n, N);
            if (!(F === o ? Ci(B, A, D | M, l, N) : F))
              return !1;
          }
        }
        return !0;
      }
      function Xf(t) {
        if (!Ie(t) || ay(t))
          return !1;
        var n = Ln(t) ? S0 : w1;
        return n.test(Dr(t));
      }
      function k$(t) {
        return Be(t) && ct(t) == jn;
      }
      function E$(t) {
        return Be(t) && ot(t) == mt;
      }
      function I$(t) {
        return Be(t) && la(t.length) && !!Se[ct(t)];
      }
      function Qf(t) {
        return typeof t == "function" ? t : t == null ? yt : typeof t == "object" ? J(t) ? nh(t[0], t[1]) : th(t) : yp(t);
      }
      function lu(t) {
        if (!Ei(t))
          return B0(t);
        var n = [];
        for (var i in be(t))
          me.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function x$(t) {
        if (!Ie(t))
          return dy(t);
        var n = Ei(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !me.call(t, l)) || i.push(l);
        return i;
      }
      function uu(t, n) {
        return t < n;
      }
      function eh(t, n) {
        var i = -1, l = gt(t) ? C(t.length) : [];
        return er(t, function(d, p, m) {
          l[++i] = n(d, p, m);
        }), l;
      }
      function th(t) {
        var n = Cu(t);
        return n.length == 1 && n[0][2] ? Lh(n[0][0], n[0][1]) : function(i) {
          return i === t || au(i, t, n);
        };
      }
      function nh(t, n) {
        return ku(t) && Nh(n) ? Lh(gn(t), n) : function(i) {
          var l = Mu(i, t);
          return l === o && l === n ? Ou(i, t) : Ci(n, l, D | M);
        };
      }
      function Ys(t, n, i, l, d) {
        t !== n && ru(n, function(p, m) {
          if (d || (d = new sn()), Ie(p))
            A$(t, n, m, i, Ys, l, d);
          else {
            var g = l ? l(Iu(t, m), p, m + "", t, n, d) : o;
            g === o && (g = p), tu(t, m, g);
          }
        }, $t);
      }
      function A$(t, n, i, l, d, p, m) {
        var g = Iu(t, i), V = Iu(n, i), A = m.get(V);
        if (A) {
          tu(t, i, A);
          return;
        }
        var B = p ? p(g, V, i + "", t, n, m) : o, N = B === o;
        if (N) {
          var F = J(V), q = !F && or(V), G = !F && !q && go(V);
          B = V, F || q || G ? J(g) ? B = g : Ne(g) ? B = _t(g) : q ? (N = !1, B = ph(V, !0)) : G ? (N = !1, B = wh(V, !0)) : B = [] : xi(V) || Nr(V) ? (B = g, Nr(g) ? B = dp(g) : (!Ie(g) || Ln(g)) && (B = Dh(V))) : N = !1;
        }
        N && (m.set(V, B), d(B, V, l, p, m), m.delete(V)), tu(t, i, B);
      }
      function rh(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, Nn(n, i) ? t[n] : o;
      }
      function oh(t, n, i) {
        n.length ? n = Ee(n, function(p) {
          return J(p) ? function(m) {
            return Br(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [yt];
        var l = -1;
        n = Ee(n, At(Y()));
        var d = eh(t, function(p, m, g) {
          var V = Ee(n, function(A) {
            return A(p);
          });
          return { criteria: V, index: ++l, value: p };
        });
        return r0(d, function(p, m) {
          return q$(p, m, i);
        });
      }
      function B$(t, n) {
        return ih(t, n, function(i, l) {
          return Ou(t, l);
        });
      }
      function ih(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = Br(t, m);
          i(g, m) && Si(p, nr(m, t), g);
        }
        return p;
      }
      function T$(t) {
        return function(n) {
          return Br(n, t);
        };
      }
      function cu(t, n, i, l) {
        var d = l ? n0 : ao, p = -1, m = n.length, g = t;
        for (t === n && (n = _t(n)), i && (g = Ee(t, At(i))); ++p < m; )
          for (var V = 0, A = n[p], B = i ? i(A) : A; (V = d(g, B, V, l)) > -1; )
            g !== t && Ms.call(g, V, 1), Ms.call(t, V, 1);
        return t;
      }
      function sh(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            Nn(d) ? Ms.call(t, d, 1) : pu(t, d);
          }
        }
        return t;
      }
      function du(t, n) {
        return t + Rs(Ff() * (n - t + 1));
      }
      function D$(t, n, i, l) {
        for (var d = -1, p = We(Ps((n - t) / (i || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += i;
        return m;
      }
      function fu(t, n) {
        var i = "";
        if (!t || n < 1 || n > Ye)
          return i;
        do
          n % 2 && (i += t), n = Rs(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function re(t, n) {
        return xu(Mh(t, n, yt), t + "");
      }
      function N$(t) {
        return qf($o(t));
      }
      function L$(t, n) {
        var i = $o(t);
        return na(i, Ar(n, 0, i.length));
      }
      function Si(t, n, i, l) {
        if (!Ie(t))
          return t;
        n = nr(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var V = gn(n[d]), A = i;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != m) {
            var B = g[V];
            A = l ? l(B, V, g) : o, A === o && (A = Ie(B) ? B : Nn(n[d + 1]) ? [] : {});
          }
          yi(g, V, A), g = g[V];
        }
        return t;
      }
      var ah = Fs ? function(t, n) {
        return Fs.set(t, n), t;
      } : yt, M$ = Os ? function(t, n) {
        return Os(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Ru(n),
          writable: !0
        });
      } : yt;
      function O$(t) {
        return na($o(t));
      }
      function Zt(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function P$(t, n) {
        var i;
        return er(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function Gs(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= _s) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !Tt(m) && (i ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return hu(t, n, yt, i);
      }
      function hu(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, g = n === null, V = Tt(n), A = n === o; d < p; ) {
          var B = Rs((d + p) / 2), N = i(t[B]), F = N !== o, q = N === null, G = N === N, ee = Tt(N);
          if (m)
            var j = l || G;
          else
            A ? j = G && (l || F) : g ? j = G && F && (l || !q) : V ? j = G && F && !q && (l || !ee) : q || ee ? j = !1 : j = l ? N <= n : N < n;
          j ? d = B + 1 : p = B;
        }
        return rt(p, ms);
      }
      function lh(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var m = t[i], g = n ? n(m) : m;
          if (!i || !an(g, V)) {
            var V = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function uh(t) {
        return typeof t == "number" ? t : Tt(t) ? yr : +t;
      }
      function Bt(t) {
        if (typeof t == "string")
          return t;
        if (J(t))
          return Ee(t, Bt) + "";
        if (Tt(t))
          return Uf ? Uf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Fe ? "-0" : n;
      }
      function tr(t, n, i) {
        var l = -1, d = ks, p = t.length, m = !0, g = [], V = g;
        if (i)
          m = !1, d = Wl;
        else if (p >= a) {
          var A = n ? null : Z$(t);
          if (A)
            return Is(A);
          m = !1, d = wi, V = new xr();
        } else
          V = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var B = t[l], N = n ? n(B) : B;
            if (B = i || B !== 0 ? B : 0, m && N === N) {
              for (var F = V.length; F--; )
                if (V[F] === N)
                  continue e;
              n && V.push(N), g.push(B);
            } else
              d(V, N, i) || (V !== g && V.push(N), g.push(B));
          }
        return g;
      }
      function pu(t, n) {
        return n = nr(n, t), t = Oh(t, n), t == null || delete t[gn(Kt(n))];
      }
      function ch(t, n, i, l) {
        return Si(t, n, i(Br(t, n)), l);
      }
      function js(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Zt(t, l ? 0 : p, l ? p + 1 : d) : Zt(t, l ? p + 1 : 0, l ? d : p);
      }
      function dh(t, n) {
        var i = t;
        return i instanceof ie && (i = i.value()), ql(n, function(l, d) {
          return d.func.apply(d.thisArg, Jn([l], d.args));
        }, i);
      }
      function wu(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? tr(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = bi(p[d] || m, t[g], n, i));
        return tr(Je(p, 1), n, i);
      }
      function fh(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : o;
          i(m, t[l], g);
        }
        return m;
      }
      function vu(t) {
        return Ne(t) ? t : [];
      }
      function mu(t) {
        return typeof t == "function" ? t : yt;
      }
      function nr(t, n) {
        return J(t) ? t : ku(t, n) ? [t] : Uh(we(t));
      }
      var R$ = re;
      function rr(t, n, i) {
        var l = t.length;
        return i = i === o ? l : i, !n && i >= l ? t : Zt(t, n, i);
      }
      var hh = k0 || function(t) {
        return Ke.clearTimeout(t);
      };
      function ph(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Lf ? Lf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function _u(t) {
        var n = new t.constructor(t.byteLength);
        return new Ns(n).set(new Ns(t)), n;
      }
      function F$(t, n) {
        var i = n ? _u(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function U$(t) {
        var n = new t.constructor(t.source, Kd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function W$(t) {
        return $i ? be($i.call(t)) : {};
      }
      function wh(t, n) {
        var i = n ? _u(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function vh(t, n) {
        if (t !== n) {
          var i = t !== o, l = t === null, d = t === t, p = Tt(t), m = n !== o, g = n === null, V = n === n, A = Tt(n);
          if (!g && !A && !p && t > n || p && m && V && !g && !A || l && m && V || !i && V || !d)
            return 1;
          if (!l && !p && !A && t < n || A && i && d && !l && !p || g && i && d || !m && d || !V)
            return -1;
        }
        return 0;
      }
      function q$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = i.length; ++l < m; ) {
          var V = vh(d[l], p[l]);
          if (V) {
            if (l >= g)
              return V;
            var A = i[l];
            return V * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function mh(t, n, i, l) {
        for (var d = -1, p = t.length, m = i.length, g = -1, V = n.length, A = We(p - m, 0), B = C(V + A), N = !l; ++g < V; )
          B[g] = n[g];
        for (; ++d < m; )
          (N || d < p) && (B[i[d]] = t[d]);
        for (; A--; )
          B[g++] = t[d++];
        return B;
      }
      function _h(t, n, i, l) {
        for (var d = -1, p = t.length, m = -1, g = i.length, V = -1, A = n.length, B = We(p - g, 0), N = C(B + A), F = !l; ++d < B; )
          N[d] = t[d];
        for (var q = d; ++V < A; )
          N[q + V] = n[V];
        for (; ++m < g; )
          (F || d < p) && (N[q + i[m]] = t[d++]);
        return N;
      }
      function _t(t, n) {
        var i = -1, l = t.length;
        for (n || (n = C(l)); ++i < l; )
          n[i] = t[i];
        return n;
      }
      function _n(t, n, i, l) {
        var d = !i;
        i || (i = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var g = n[p], V = l ? l(i[g], t[g], g, i, t) : o;
          V === o && (V = t[g]), d ? Bn(i, g, V) : yi(i, g, V);
        }
        return i;
      }
      function H$(t, n) {
        return _n(t, Su(t), n);
      }
      function z$(t, n) {
        return _n(t, Bh(t), n);
      }
      function Zs(t, n) {
        return function(i, l) {
          var d = J(i) ? K1 : h$, p = n ? n() : {};
          return d(i, t, Y(l, 2), p);
        };
      }
      function vo(t) {
        return re(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : o, m = d > 2 ? i[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : o, m && dt(i[0], i[1], m) && (p = d < 3 ? o : p, d = 1), n = be(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function gh(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!gt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, m = be(i); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function $h(t) {
        return function(n, i, l) {
          for (var d = -1, p = be(n), m = l(n), g = m.length; g--; ) {
            var V = m[t ? g : ++d];
            if (i(p[V], V, p) === !1)
              break;
          }
          return n;
        };
      }
      function Y$(t, n, i) {
        var l = n & L, d = ki(t);
        function p() {
          var m = this && this !== Ke && this instanceof p ? d : t;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function yh(t) {
        return function(n) {
          n = we(n);
          var i = lo(n) ? on(n) : o, l = i ? i[0] : n.charAt(0), d = i ? rr(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function mo(t) {
        return function(n) {
          return ql(gp(_p(n).replace(M1, "")), t, "");
        };
      }
      function ki(t) {
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
          var i = wo(t.prototype), l = t.apply(i, n);
          return Ie(l) ? l : i;
        };
      }
      function G$(t, n, i) {
        var l = ki(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, V = _o(d); g--; )
            m[g] = arguments[g];
          var A = p < 3 && m[0] !== V && m[p - 1] !== V ? [] : Xn(m, V);
          if (p -= A.length, p < i)
            return kh(
              t,
              n,
              Ks,
              d.placeholder,
              o,
              m,
              A,
              o,
              o,
              i - p
            );
          var B = this && this !== Ke && this instanceof d ? l : t;
          return xt(B, this, m);
        }
        return d;
      }
      function bh(t) {
        return function(n, i, l) {
          var d = be(n);
          if (!gt(n)) {
            var p = Y(i, 3);
            n = Ge(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var m = t(n, i, l);
          return m > -1 ? d[p ? n[m] : m] : o;
        };
      }
      function Vh(t) {
        return Dn(function(n) {
          var i = n.length, l = i, d = Gt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Yt(c);
            if (d && !m && ea(p) == "wrapper")
              var m = new Gt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var g = ea(p), V = g == "wrapper" ? Vu(p) : o;
            V && Eu(V[0]) && V[1] == (O | I | x | H) && !V[4].length && V[9] == 1 ? m = m[ea(V[0])].apply(m, V[3]) : m = p.length == 1 && Eu(p) ? m[g]() : m.thru(p);
          }
          return function() {
            var A = arguments, B = A[0];
            if (m && A.length == 1 && J(B))
              return m.plant(B).value();
            for (var N = 0, F = i ? n[N].apply(this, A) : B; ++N < i; )
              F = n[N].call(this, F);
            return F;
          };
        });
      }
      function Ks(t, n, i, l, d, p, m, g, V, A) {
        var B = n & O, N = n & L, F = n & S, q = n & (I | P), G = n & $e, ee = F ? o : ki(t);
        function j() {
          for (var oe = arguments.length, ae = C(oe), Dt = oe; Dt--; )
            ae[Dt] = arguments[Dt];
          if (q)
            var ft = _o(j), Nt = i0(ae, ft);
          if (l && (ae = mh(ae, l, d, q)), p && (ae = _h(ae, p, m, q)), oe -= Nt, q && oe < A) {
            var Le = Xn(ae, ft);
            return kh(
              t,
              n,
              Ks,
              j.placeholder,
              i,
              ae,
              Le,
              g,
              V,
              A - oe
            );
          }
          var ln = N ? i : this, On = F ? ln[t] : t;
          return oe = ae.length, g ? ae = hy(ae, g) : G && oe > 1 && ae.reverse(), B && V < oe && (ae.length = V), this && this !== Ke && this instanceof j && (On = ee || ki(On)), On.apply(ln, ae);
        }
        return j;
      }
      function Ch(t, n) {
        return function(i, l) {
          return y$(i, t, n(l), {});
        };
      }
      function Js(t, n) {
        return function(i, l) {
          var d;
          if (i === o && l === o)
            return n;
          if (i !== o && (d = i), l !== o) {
            if (d === o)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = Bt(i), l = Bt(l)) : (i = uh(i), l = uh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function gu(t) {
        return Dn(function(n) {
          return n = Ee(n, At(Y())), re(function(i) {
            var l = this;
            return t(n, function(d) {
              return xt(d, l, i);
            });
          });
        });
      }
      function Xs(t, n) {
        n = n === o ? " " : Bt(n);
        var i = n.length;
        if (i < 2)
          return i ? fu(n, t) : n;
        var l = fu(n, Ps(t / uo(n)));
        return lo(n) ? rr(on(l), 0, t).join("") : l.slice(0, t);
      }
      function j$(t, n, i, l) {
        var d = n & L, p = ki(t);
        function m() {
          for (var g = -1, V = arguments.length, A = -1, B = l.length, N = C(B + V), F = this && this !== Ke && this instanceof m ? p : t; ++A < B; )
            N[A] = l[A];
          for (; V--; )
            N[A++] = arguments[++g];
          return xt(F, d ? i : this, N);
        }
        return m;
      }
      function Sh(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && dt(n, i, l) && (i = l = o), n = Mn(n), i === o ? (i = n, n = 0) : i = Mn(i), l = l === o ? n < i ? 1 : -1 : Mn(l), D$(n, i, l, t);
        };
      }
      function Qs(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Jt(n), i = Jt(i)), t(n, i);
        };
      }
      function kh(t, n, i, l, d, p, m, g, V, A) {
        var B = n & I, N = B ? m : o, F = B ? o : m, q = B ? p : o, G = B ? o : p;
        n |= B ? x : R, n &= ~(B ? R : x), n & k || (n &= ~(L | S));
        var ee = [
          t,
          n,
          d,
          q,
          N,
          G,
          F,
          g,
          V,
          A
        ], j = i.apply(o, ee);
        return Eu(t) && Ph(j, ee), j.placeholder = l, Rh(j, t, n);
      }
      function $u(t) {
        var n = Ue[t];
        return function(i, l) {
          if (i = Jt(i), l = l == null ? 0 : rt(X(l), 292), l && Rf(i)) {
            var d = (we(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (we(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Z$ = ho && 1 / Is(new ho([, -0]))[1] == Fe ? function(t) {
        return new ho(t);
      } : Wu;
      function Eh(t) {
        return function(n) {
          var i = ot(n);
          return i == vt ? Kl(n) : i == mt ? f0(n) : o0(n, t(n));
        };
      }
      function Tn(t, n, i, l, d, p, m, g) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new Yt(c);
        var A = l ? l.length : 0;
        if (A || (n &= ~(x | R), l = d = o), m = m === o ? m : We(X(m), 0), g = g === o ? g : X(g), A -= d ? d.length : 0, n & R) {
          var B = l, N = d;
          l = d = o;
        }
        var F = V ? o : Vu(t), q = [
          t,
          n,
          i,
          l,
          d,
          B,
          N,
          p,
          m,
          g
        ];
        if (F && cy(q, F), t = q[0], n = q[1], i = q[2], l = q[3], d = q[4], g = q[9] = q[9] === o ? V ? 0 : t.length : We(q[9] - A, 0), !g && n & (I | P) && (n &= ~(I | P)), !n || n == L)
          var G = Y$(t, n, i);
        else
          n == I || n == P ? G = G$(t, n, g) : (n == x || n == (L | x)) && !d.length ? G = j$(t, n, i, l) : G = Ks.apply(o, q);
        var ee = F ? ah : Ph;
        return Rh(ee(G, q), t, n);
      }
      function Ih(t, n, i, l) {
        return t === o || an(t, fo[i]) && !me.call(l, i) ? n : t;
      }
      function xh(t, n, i, l, d, p) {
        return Ie(t) && Ie(n) && (p.set(n, t), Ys(t, n, o, xh, p), p.delete(n)), t;
      }
      function K$(t) {
        return xi(t) ? o : t;
      }
      function Ah(t, n, i, l, d, p) {
        var m = i & D, g = t.length, V = n.length;
        if (g != V && !(m && V > g))
          return !1;
        var A = p.get(t), B = p.get(n);
        if (A && B)
          return A == n && B == t;
        var N = -1, F = !0, q = i & M ? new xr() : o;
        for (p.set(t, n), p.set(n, t); ++N < g; ) {
          var G = t[N], ee = n[N];
          if (l)
            var j = m ? l(ee, G, N, n, t, p) : l(G, ee, N, t, n, p);
          if (j !== o) {
            if (j)
              continue;
            F = !1;
            break;
          }
          if (q) {
            if (!Hl(n, function(oe, ae) {
              if (!wi(q, ae) && (G === oe || d(G, oe, i, l, p)))
                return q.push(ae);
            })) {
              F = !1;
              break;
            }
          } else if (!(G === ee || d(G, ee, i, l, p))) {
            F = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), F;
      }
      function J$(t, n, i, l, d, p, m) {
        switch (i) {
          case io:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case pi:
            return !(t.byteLength != n.byteLength || !p(new Ns(t), new Ns(n)));
          case Yn:
          case Gn:
          case se:
            return an(+t, +n);
          case Vr:
            return t.name == n.name && t.message == n.message;
          case jn:
          case Zn:
            return t == n + "";
          case vt:
            var g = Kl;
          case mt:
            var V = l & D;
            if (g || (g = Is), t.size != n.size && !V)
              return !1;
            var A = m.get(t);
            if (A)
              return A == n;
            l |= M, m.set(t, n);
            var B = Ah(g(t), g(n), l, d, p, m);
            return m.delete(t), B;
          case Sr:
            if ($i)
              return $i.call(t) == $i.call(n);
        }
        return !1;
      }
      function X$(t, n, i, l, d, p) {
        var m = i & D, g = yu(t), V = g.length, A = yu(n), B = A.length;
        if (V != B && !m)
          return !1;
        for (var N = V; N--; ) {
          var F = g[N];
          if (!(m ? F in n : me.call(n, F)))
            return !1;
        }
        var q = p.get(t), G = p.get(n);
        if (q && G)
          return q == n && G == t;
        var ee = !0;
        p.set(t, n), p.set(n, t);
        for (var j = m; ++N < V; ) {
          F = g[N];
          var oe = t[F], ae = n[F];
          if (l)
            var Dt = m ? l(ae, oe, F, n, t, p) : l(oe, ae, F, t, n, p);
          if (!(Dt === o ? oe === ae || d(oe, ae, i, l, p) : Dt)) {
            ee = !1;
            break;
          }
          j || (j = F == "constructor");
        }
        if (ee && !j) {
          var ft = t.constructor, Nt = n.constructor;
          ft != Nt && "constructor" in t && "constructor" in n && !(typeof ft == "function" && ft instanceof ft && typeof Nt == "function" && Nt instanceof Nt) && (ee = !1);
        }
        return p.delete(t), p.delete(n), ee;
      }
      function Dn(t) {
        return xu(Mh(t, o, zh), t + "");
      }
      function yu(t) {
        return Kf(t, Ge, Su);
      }
      function bu(t) {
        return Kf(t, $t, Bh);
      }
      var Vu = Fs ? function(t) {
        return Fs.get(t);
      } : Wu;
      function ea(t) {
        for (var n = t.name + "", i = po[n], l = me.call(po, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function _o(t) {
        var n = me.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function Y() {
        var t = h.iteratee || Fu;
        return t = t === Fu ? Qf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function ta(t, n) {
        var i = t.__data__;
        return sy(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function Cu(t) {
        for (var n = Ge(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Nh(d)];
        }
        return n;
      }
      function Tr(t, n) {
        var i = u0(t, n);
        return Xf(i) ? i : o;
      }
      function Q$(t) {
        var n = me.call(t, Er), i = t[Er];
        try {
          t[Er] = o;
          var l = !0;
        } catch {
        }
        var d = Ts.call(t);
        return l && (n ? t[Er] = i : delete t[Er]), d;
      }
      var Su = Xl ? function(t) {
        return t == null ? [] : (t = be(t), Kn(Xl(t), function(n) {
          return Of.call(t, n);
        }));
      } : qu, Bh = Xl ? function(t) {
        for (var n = []; t; )
          Jn(n, Su(t)), t = Ls(t);
        return n;
      } : qu, ot = ct;
      (Ql && ot(new Ql(new ArrayBuffer(1))) != io || mi && ot(new mi()) != vt || eu && ot(eu.resolve()) != fi || ho && ot(new ho()) != mt || _i && ot(new _i()) != hi) && (ot = function(t) {
        var n = ct(t), i = n == ne ? t.constructor : o, l = i ? Dr(i) : "";
        if (l)
          switch (l) {
            case L0:
              return io;
            case M0:
              return vt;
            case O0:
              return fi;
            case P0:
              return mt;
            case R0:
              return hi;
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
              n = rt(n, t + m);
              break;
            case "takeRight":
              t = We(t, n - m);
              break;
          }
        }
        return { start: t, end: n };
      }
      function ty(t) {
        var n = t.match(a1);
        return n ? n[1].split(l1) : [];
      }
      function Th(t, n, i) {
        n = nr(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = gn(n[l]);
          if (!(p = t != null && i(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && la(d) && Nn(m, d) && (J(t) || Nr(t)));
      }
      function ny(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && me.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function Dh(t) {
        return typeof t.constructor == "function" && !Ei(t) ? wo(Ls(t)) : {};
      }
      function ry(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case pi:
            return _u(t);
          case Yn:
          case Gn:
            return new l(+t);
          case io:
            return F$(t, i);
          case Cl:
          case Sl:
          case kl:
          case El:
          case Il:
          case xl:
          case Al:
          case Bl:
          case Tl:
            return wh(t, i);
          case vt:
            return new l();
          case se:
          case Zn:
            return new l(t);
          case jn:
            return U$(t);
          case mt:
            return new l();
          case Sr:
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
        return J(t) || Nr(t) || !!(Pf && t && t[Pf]);
      }
      function Nn(t, n) {
        var i = typeof t;
        return n = n == null ? Ye : n, !!n && (i == "number" || i != "symbol" && m1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function dt(t, n, i) {
        if (!Ie(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? gt(i) && Nn(n, i.length) : l == "string" && n in i) ? an(i[n], t) : !1;
      }
      function ku(t, n) {
        if (J(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || Tt(t) ? !0 : n1.test(t) || !t1.test(t) || n != null && t in be(n);
      }
      function sy(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Eu(t) {
        var n = ea(t), i = h[n];
        if (typeof i != "function" || !(n in ie.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = Vu(i);
        return !!l && t === l[0];
      }
      function ay(t) {
        return !!Nf && Nf in t;
      }
      var ly = As ? Ln : Hu;
      function Ei(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || fo;
        return t === i;
      }
      function Nh(t) {
        return t === t && !Ie(t);
      }
      function Lh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== o || t in be(i));
        };
      }
      function uy(t) {
        var n = sa(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function cy(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (L | S | O), m = l == O && i == I || l == O && i == H && t[7].length <= n[8] || l == (O | H) && n[7].length <= n[8] && i == I;
        if (!(p || m))
          return t;
        l & L && (t[2] = n[2], d |= i & L ? 0 : k);
        var g = n[3];
        if (g) {
          var V = t[3];
          t[3] = V ? mh(V, g, n[4]) : g, t[4] = V ? Xn(t[3], _) : n[4];
        }
        return g = n[5], g && (V = t[5], t[5] = V ? _h(V, g, n[6]) : g, t[6] = V ? Xn(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & O && (t[8] = t[8] == null ? n[8] : rt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function dy(t) {
        var n = [];
        if (t != null)
          for (var i in be(t))
            n.push(i);
        return n;
      }
      function fy(t) {
        return Ts.call(t);
      }
      function Mh(t, n, i) {
        return n = We(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = We(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(m), xt(t, this, g);
        };
      }
      function Oh(t, n) {
        return n.length < 2 ? t : Br(t, Zt(n, 0, -1));
      }
      function hy(t, n) {
        for (var i = t.length, l = rt(n.length, i), d = _t(t); l--; ) {
          var p = n[l];
          t[l] = Nn(p, i) ? d[p] : o;
        }
        return t;
      }
      function Iu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Ph = Fh(ah), Ii = I0 || function(t, n) {
        return Ke.setTimeout(t, n);
      }, xu = Fh(M$);
      function Rh(t, n, i) {
        var l = n + "";
        return xu(t, oy(l, py(ty(l), i)));
      }
      function Fh(t) {
        var n = 0, i = 0;
        return function() {
          var l = T0(), d = ye - (l - i);
          if (i = l, d > 0) {
            if (++n >= ke)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function na(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === o ? l : n; ++i < n; ) {
          var p = du(i, d), m = t[p];
          t[p] = t[i], t[i] = m;
        }
        return t.length = n, t;
      }
      var Uh = uy(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(r1, function(i, l, d, p) {
          n.push(d ? p.replace(d1, "$1") : l || i);
        }), n;
      });
      function gn(t) {
        if (typeof t == "string" || Tt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Fe ? "-0" : n;
      }
      function Dr(t) {
        if (t != null) {
          try {
            return Bs.call(t);
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
        return zt(gs, function(i) {
          var l = "_." + i[0];
          n & i[1] && !ks(t, l) && t.push(l);
        }), t.sort();
      }
      function Wh(t) {
        if (t instanceof ie)
          return t.clone();
        var n = new Gt(t.__wrapped__, t.__chain__);
        return n.__actions__ = _t(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function wy(t, n, i) {
        (i ? dt(t, n, i) : n === o) ? n = 1 : n = We(X(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(Ps(l / n)); d < l; )
          m[p++] = Zt(t, d, d += n);
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
        return Jn(J(i) ? _t(i) : [i], Je(n, 1));
      }
      var _y = re(function(t, n) {
        return Ne(t) ? bi(t, Je(n, 1, Ne, !0)) : [];
      }), gy = re(function(t, n) {
        var i = Kt(n);
        return Ne(i) && (i = o), Ne(t) ? bi(t, Je(n, 1, Ne, !0), Y(i, 2)) : [];
      }), $y = re(function(t, n) {
        var i = Kt(n);
        return Ne(i) && (i = o), Ne(t) ? bi(t, Je(n, 1, Ne, !0), o, i) : [];
      });
      function yy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : X(n), Zt(t, n < 0 ? 0 : n, l)) : [];
      }
      function by(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : X(n), n = l - n, Zt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Vy(t, n) {
        return t && t.length ? js(t, Y(n, 3), !0, !0) : [];
      }
      function Cy(t, n) {
        return t && t.length ? js(t, Y(n, 3), !0) : [];
      }
      function Sy(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && dt(t, n, i) && (i = 0, l = d), m$(t, n, i, l)) : [];
      }
      function qh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = We(l + d, 0)), Es(t, Y(n, 3), d);
      }
      function Hh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== o && (d = X(i), d = i < 0 ? We(l + d, 0) : rt(d, l - 1)), Es(t, Y(n, 3), d, !0);
      }
      function zh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Je(t, 1) : [];
      }
      function ky(t) {
        var n = t == null ? 0 : t.length;
        return n ? Je(t, Fe) : [];
      }
      function Ey(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === o ? 1 : X(n), Je(t, n)) : [];
      }
      function Iy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function Yh(t) {
        return t && t.length ? t[0] : o;
      }
      function xy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = We(l + d, 0)), ao(t, n, d);
      }
      function Ay(t) {
        var n = t == null ? 0 : t.length;
        return n ? Zt(t, 0, -1) : [];
      }
      var By = re(function(t) {
        var n = Ee(t, vu);
        return n.length && n[0] === t[0] ? su(n) : [];
      }), Ty = re(function(t) {
        var n = Kt(t), i = Ee(t, vu);
        return n === Kt(i) ? n = o : i.pop(), i.length && i[0] === t[0] ? su(i, Y(n, 2)) : [];
      }), Dy = re(function(t) {
        var n = Kt(t), i = Ee(t, vu);
        return n = typeof n == "function" ? n : o, n && i.pop(), i.length && i[0] === t[0] ? su(i, o, n) : [];
      });
      function Ny(t, n) {
        return t == null ? "" : A0.call(t, n);
      }
      function Kt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function Ly(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== o && (d = X(i), d = d < 0 ? We(l + d, 0) : rt(d, l - 1)), n === n ? p0(t, n, d) : Es(t, kf, d, !0);
      }
      function My(t, n) {
        return t && t.length ? rh(t, X(n)) : o;
      }
      var Oy = re(Gh);
      function Gh(t, n) {
        return t && t.length && n && n.length ? cu(t, n) : t;
      }
      function Py(t, n, i) {
        return t && t.length && n && n.length ? cu(t, n, Y(i, 2)) : t;
      }
      function Ry(t, n, i) {
        return t && t.length && n && n.length ? cu(t, n, o, i) : t;
      }
      var Fy = Dn(function(t, n) {
        var i = t == null ? 0 : t.length, l = nu(t, n);
        return sh(t, Ee(n, function(d) {
          return Nn(d, i) ? +d : d;
        }).sort(vh)), l;
      });
      function Uy(t, n) {
        var i = [];
        if (!(t && t.length))
          return i;
        var l = -1, d = [], p = t.length;
        for (n = Y(n, 3); ++l < p; ) {
          var m = t[l];
          n(m, l, t) && (i.push(m), d.push(l));
        }
        return sh(t, d), i;
      }
      function Au(t) {
        return t == null ? t : N0.call(t);
      }
      function Wy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && dt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === o ? l : X(i)), Zt(t, n, i)) : [];
      }
      function qy(t, n) {
        return Gs(t, n);
      }
      function Hy(t, n, i) {
        return hu(t, n, Y(i, 2));
      }
      function zy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Gs(t, n);
          if (l < i && an(t[l], n))
            return l;
        }
        return -1;
      }
      function Yy(t, n) {
        return Gs(t, n, !0);
      }
      function Gy(t, n, i) {
        return hu(t, n, Y(i, 2), !0);
      }
      function jy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Gs(t, n, !0) - 1;
          if (an(t[l], n))
            return l;
        }
        return -1;
      }
      function Zy(t) {
        return t && t.length ? lh(t) : [];
      }
      function Ky(t, n) {
        return t && t.length ? lh(t, Y(n, 2)) : [];
      }
      function Jy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Zt(t, 1, n) : [];
      }
      function Xy(t, n, i) {
        return t && t.length ? (n = i || n === o ? 1 : X(n), Zt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Qy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : X(n), n = l - n, Zt(t, n < 0 ? 0 : n, l)) : [];
      }
      function eb(t, n) {
        return t && t.length ? js(t, Y(n, 3), !1, !0) : [];
      }
      function tb(t, n) {
        return t && t.length ? js(t, Y(n, 3)) : [];
      }
      var nb = re(function(t) {
        return tr(Je(t, 1, Ne, !0));
      }), rb = re(function(t) {
        var n = Kt(t);
        return Ne(n) && (n = o), tr(Je(t, 1, Ne, !0), Y(n, 2));
      }), ob = re(function(t) {
        var n = Kt(t);
        return n = typeof n == "function" ? n : o, tr(Je(t, 1, Ne, !0), o, n);
      });
      function ib(t) {
        return t && t.length ? tr(t) : [];
      }
      function sb(t, n) {
        return t && t.length ? tr(t, Y(n, 2)) : [];
      }
      function ab(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? tr(t, o, n) : [];
      }
      function Bu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Kn(t, function(i) {
          if (Ne(i))
            return n = We(i.length, n), !0;
        }), jl(n, function(i) {
          return Ee(t, zl(i));
        });
      }
      function jh(t, n) {
        if (!(t && t.length))
          return [];
        var i = Bu(t);
        return n == null ? i : Ee(i, function(l) {
          return xt(n, o, l);
        });
      }
      var lb = re(function(t, n) {
        return Ne(t) ? bi(t, n) : [];
      }), ub = re(function(t) {
        return wu(Kn(t, Ne));
      }), cb = re(function(t) {
        var n = Kt(t);
        return Ne(n) && (n = o), wu(Kn(t, Ne), Y(n, 2));
      }), db = re(function(t) {
        var n = Kt(t);
        return n = typeof n == "function" ? n : o, wu(Kn(t, Ne), o, n);
      }), fb = re(Bu);
      function hb(t, n) {
        return fh(t || [], n || [], yi);
      }
      function pb(t, n) {
        return fh(t || [], n || [], Si);
      }
      var wb = re(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : o;
        return i = typeof i == "function" ? (t.pop(), i) : o, jh(t, i);
      });
      function Zh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function vb(t, n) {
        return n(t), t;
      }
      function ra(t, n) {
        return n(t);
      }
      var mb = Dn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return nu(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ie) || !Nn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: ra,
          args: [d],
          thisArg: o
        }), new Gt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function _b() {
        return Zh(this);
      }
      function gb() {
        return new Gt(this.value(), this.__chain__);
      }
      function $b() {
        this.__values__ === o && (this.__values__ = up(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function yb() {
        return this;
      }
      function bb(t) {
        for (var n, i = this; i instanceof Ws; ) {
          var l = Wh(i);
          l.__index__ = 0, l.__values__ = o, n ? d.__wrapped__ = l : n = l;
          var d = l;
          i = i.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function Vb() {
        var t = this.__wrapped__;
        if (t instanceof ie) {
          var n = t;
          return this.__actions__.length && (n = new ie(this)), n = n.reverse(), n.__actions__.push({
            func: ra,
            args: [Au],
            thisArg: o
          }), new Gt(n, this.__chain__);
        }
        return this.thru(Au);
      }
      function Cb() {
        return dh(this.__wrapped__, this.__actions__);
      }
      var Sb = Zs(function(t, n, i) {
        me.call(t, i) ? ++t[i] : Bn(t, i, 1);
      });
      function kb(t, n, i) {
        var l = J(t) ? Cf : v$;
        return i && dt(t, n, i) && (n = o), l(t, Y(n, 3));
      }
      function Eb(t, n) {
        var i = J(t) ? Kn : jf;
        return i(t, Y(n, 3));
      }
      var Ib = bh(qh), xb = bh(Hh);
      function Ab(t, n) {
        return Je(oa(t, n), 1);
      }
      function Bb(t, n) {
        return Je(oa(t, n), Fe);
      }
      function Tb(t, n, i) {
        return i = i === o ? 1 : X(i), Je(oa(t, n), i);
      }
      function Kh(t, n) {
        var i = J(t) ? zt : er;
        return i(t, Y(n, 3));
      }
      function Jh(t, n) {
        var i = J(t) ? J1 : Gf;
        return i(t, Y(n, 3));
      }
      var Db = Zs(function(t, n, i) {
        me.call(t, i) ? t[i].push(n) : Bn(t, i, [n]);
      });
      function Nb(t, n, i, l) {
        t = gt(t) ? t : $o(t), i = i && !l ? X(i) : 0;
        var d = t.length;
        return i < 0 && (i = We(d + i, 0)), ua(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && ao(t, n, i) > -1;
      }
      var Lb = re(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = gt(t) ? C(t.length) : [];
        return er(t, function(m) {
          p[++l] = d ? xt(n, m, i) : Vi(m, n, i);
        }), p;
      }), Mb = Zs(function(t, n, i) {
        Bn(t, i, n);
      });
      function oa(t, n) {
        var i = J(t) ? Ee : eh;
        return i(t, Y(n, 3));
      }
      function Ob(t, n, i, l) {
        return t == null ? [] : (J(n) || (n = n == null ? [] : [n]), i = l ? o : i, J(i) || (i = i == null ? [] : [i]), oh(t, n, i));
      }
      var Pb = Zs(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Rb(t, n, i) {
        var l = J(t) ? ql : If, d = arguments.length < 3;
        return l(t, Y(n, 4), i, d, er);
      }
      function Fb(t, n, i) {
        var l = J(t) ? X1 : If, d = arguments.length < 3;
        return l(t, Y(n, 4), i, d, Gf);
      }
      function Ub(t, n) {
        var i = J(t) ? Kn : jf;
        return i(t, aa(Y(n, 3)));
      }
      function Wb(t) {
        var n = J(t) ? qf : N$;
        return n(t);
      }
      function qb(t, n, i) {
        (i ? dt(t, n, i) : n === o) ? n = 1 : n = X(n);
        var l = J(t) ? d$ : L$;
        return l(t, n);
      }
      function Hb(t) {
        var n = J(t) ? f$ : O$;
        return n(t);
      }
      function zb(t) {
        if (t == null)
          return 0;
        if (gt(t))
          return ua(t) ? uo(t) : t.length;
        var n = ot(t);
        return n == vt || n == mt ? t.size : lu(t).length;
      }
      function Yb(t, n, i) {
        var l = J(t) ? Hl : P$;
        return i && dt(t, n, i) && (n = o), l(t, Y(n, 3));
      }
      var Gb = re(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && dt(t, n[0], n[1]) ? n = [] : i > 2 && dt(n[0], n[1], n[2]) && (n = [n[0]]), oh(t, Je(n, 1), []);
      }), ia = E0 || function() {
        return Ke.Date.now();
      };
      function jb(t, n) {
        if (typeof n != "function")
          throw new Yt(c);
        return t = X(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Xh(t, n, i) {
        return n = i ? o : n, n = t && n == null ? t.length : n, Tn(t, O, o, o, o, o, n);
      }
      function Qh(t, n) {
        var i;
        if (typeof n != "function")
          throw new Yt(c);
        return t = X(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = o), i;
        };
      }
      var Tu = re(function(t, n, i) {
        var l = L;
        if (i.length) {
          var d = Xn(i, _o(Tu));
          l |= x;
        }
        return Tn(t, l, n, i, d);
      }), ep = re(function(t, n, i) {
        var l = L | S;
        if (i.length) {
          var d = Xn(i, _o(ep));
          l |= x;
        }
        return Tn(n, l, t, i, d);
      });
      function tp(t, n, i) {
        n = i ? o : n;
        var l = Tn(t, I, o, o, o, o, o, n);
        return l.placeholder = tp.placeholder, l;
      }
      function np(t, n, i) {
        n = i ? o : n;
        var l = Tn(t, P, o, o, o, o, o, n);
        return l.placeholder = np.placeholder, l;
      }
      function rp(t, n, i) {
        var l, d, p, m, g, V, A = 0, B = !1, N = !1, F = !0;
        if (typeof t != "function")
          throw new Yt(c);
        n = Jt(n) || 0, Ie(i) && (B = !!i.leading, N = "maxWait" in i, p = N ? We(Jt(i.maxWait) || 0, n) : p, F = "trailing" in i ? !!i.trailing : F);
        function q(Le) {
          var ln = l, On = d;
          return l = d = o, A = Le, m = t.apply(On, ln), m;
        }
        function G(Le) {
          return A = Le, g = Ii(oe, n), B ? q(Le) : m;
        }
        function ee(Le) {
          var ln = Le - V, On = Le - A, bp = n - ln;
          return N ? rt(bp, p - On) : bp;
        }
        function j(Le) {
          var ln = Le - V, On = Le - A;
          return V === o || ln >= n || ln < 0 || N && On >= p;
        }
        function oe() {
          var Le = ia();
          if (j(Le))
            return ae(Le);
          g = Ii(oe, ee(Le));
        }
        function ae(Le) {
          return g = o, F && l ? q(Le) : (l = d = o, m);
        }
        function Dt() {
          g !== o && hh(g), A = 0, l = V = d = g = o;
        }
        function ft() {
          return g === o ? m : ae(ia());
        }
        function Nt() {
          var Le = ia(), ln = j(Le);
          if (l = arguments, d = this, V = Le, ln) {
            if (g === o)
              return G(V);
            if (N)
              return hh(g), g = Ii(oe, n), q(V);
          }
          return g === o && (g = Ii(oe, n)), m;
        }
        return Nt.cancel = Dt, Nt.flush = ft, Nt;
      }
      var Zb = re(function(t, n) {
        return Yf(t, 1, n);
      }), Kb = re(function(t, n, i) {
        return Yf(t, Jt(n) || 0, i);
      });
      function Jb(t) {
        return Tn(t, $e);
      }
      function sa(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Yt(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return i.cache = p.set(d, m) || p, m;
        };
        return i.cache = new (sa.Cache || An)(), i;
      }
      sa.Cache = An;
      function aa(t) {
        if (typeof t != "function")
          throw new Yt(c);
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
      function Xb(t) {
        return Qh(2, t);
      }
      var Qb = R$(function(t, n) {
        n = n.length == 1 && J(n[0]) ? Ee(n[0], At(Y())) : Ee(Je(n, 1), At(Y()));
        var i = n.length;
        return re(function(l) {
          for (var d = -1, p = rt(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return xt(t, this, l);
        });
      }), Du = re(function(t, n) {
        var i = Xn(n, _o(Du));
        return Tn(t, x, o, n, i);
      }), op = re(function(t, n) {
        var i = Xn(n, _o(op));
        return Tn(t, R, o, n, i);
      }), eV = Dn(function(t, n) {
        return Tn(t, H, o, o, o, n);
      });
      function tV(t, n) {
        if (typeof t != "function")
          throw new Yt(c);
        return n = n === o ? n : X(n), re(t, n);
      }
      function nV(t, n) {
        if (typeof t != "function")
          throw new Yt(c);
        return n = n == null ? 0 : We(X(n), 0), re(function(i) {
          var l = i[n], d = rr(i, 0, n);
          return l && Jn(d, l), xt(t, this, d);
        });
      }
      function rV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Yt(c);
        return Ie(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), rp(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function oV(t) {
        return Xh(t, 1);
      }
      function iV(t, n) {
        return Du(mu(n), t);
      }
      function sV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return J(t) ? t : [t];
      }
      function aV(t) {
        return jt(t, T);
      }
      function lV(t, n) {
        return n = typeof n == "function" ? n : o, jt(t, T, n);
      }
      function uV(t) {
        return jt(t, $ | T);
      }
      function cV(t, n) {
        return n = typeof n == "function" ? n : o, jt(t, $ | T, n);
      }
      function dV(t, n) {
        return n == null || zf(t, n, Ge(n));
      }
      function an(t, n) {
        return t === n || t !== t && n !== n;
      }
      var fV = Qs(iu), hV = Qs(function(t, n) {
        return t >= n;
      }), Nr = Jf(function() {
        return arguments;
      }()) ? Jf : function(t) {
        return Be(t) && me.call(t, "callee") && !Of.call(t, "callee");
      }, J = C.isArray, pV = _f ? At(_f) : b$;
      function gt(t) {
        return t != null && la(t.length) && !Ln(t);
      }
      function Ne(t) {
        return Be(t) && gt(t);
      }
      function wV(t) {
        return t === !0 || t === !1 || Be(t) && ct(t) == Yn;
      }
      var or = x0 || Hu, vV = gf ? At(gf) : V$;
      function mV(t) {
        return Be(t) && t.nodeType === 1 && !xi(t);
      }
      function _V(t) {
        if (t == null)
          return !0;
        if (gt(t) && (J(t) || typeof t == "string" || typeof t.splice == "function" || or(t) || go(t) || Nr(t)))
          return !t.length;
        var n = ot(t);
        if (n == vt || n == mt)
          return !t.size;
        if (Ei(t))
          return !lu(t).length;
        for (var i in t)
          if (me.call(t, i))
            return !1;
        return !0;
      }
      function gV(t, n) {
        return Ci(t, n);
      }
      function $V(t, n, i) {
        i = typeof i == "function" ? i : o;
        var l = i ? i(t, n) : o;
        return l === o ? Ci(t, n, o, i) : !!l;
      }
      function Nu(t) {
        if (!Be(t))
          return !1;
        var n = ct(t);
        return n == Vr || n == ys || typeof t.message == "string" && typeof t.name == "string" && !xi(t);
      }
      function yV(t) {
        return typeof t == "number" && Rf(t);
      }
      function Ln(t) {
        if (!Ie(t))
          return !1;
        var n = ct(t);
        return n == Cr || n == di || n == $s || n == bs;
      }
      function ip(t) {
        return typeof t == "number" && t == X(t);
      }
      function la(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ye;
      }
      function Ie(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Be(t) {
        return t != null && typeof t == "object";
      }
      var sp = $f ? At($f) : S$;
      function bV(t, n) {
        return t === n || au(t, n, Cu(n));
      }
      function VV(t, n, i) {
        return i = typeof i == "function" ? i : o, au(t, n, Cu(n), i);
      }
      function CV(t) {
        return ap(t) && t != +t;
      }
      function SV(t) {
        if (ly(t))
          throw new K(u);
        return Xf(t);
      }
      function kV(t) {
        return t === null;
      }
      function EV(t) {
        return t == null;
      }
      function ap(t) {
        return typeof t == "number" || Be(t) && ct(t) == se;
      }
      function xi(t) {
        if (!Be(t) || ct(t) != ne)
          return !1;
        var n = Ls(t);
        if (n === null)
          return !0;
        var i = me.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && Bs.call(i) == V0;
      }
      var Lu = yf ? At(yf) : k$;
      function IV(t) {
        return ip(t) && t >= -Ye && t <= Ye;
      }
      var lp = bf ? At(bf) : E$;
      function ua(t) {
        return typeof t == "string" || !J(t) && Be(t) && ct(t) == Zn;
      }
      function Tt(t) {
        return typeof t == "symbol" || Be(t) && ct(t) == Sr;
      }
      var go = Vf ? At(Vf) : I$;
      function xV(t) {
        return t === o;
      }
      function AV(t) {
        return Be(t) && ot(t) == hi;
      }
      function BV(t) {
        return Be(t) && ct(t) == Gg;
      }
      var TV = Qs(uu), DV = Qs(function(t, n) {
        return t <= n;
      });
      function up(t) {
        if (!t)
          return [];
        if (gt(t))
          return ua(t) ? on(t) : _t(t);
        if (vi && t[vi])
          return d0(t[vi]());
        var n = ot(t), i = n == vt ? Kl : n == mt ? Is : $o;
        return i(t);
      }
      function Mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Jt(t), t === Fe || t === -Fe) {
          var n = t < 0 ? -1 : 1;
          return n * zn;
        }
        return t === t ? t : 0;
      }
      function X(t) {
        var n = Mn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function cp(t) {
        return t ? Ar(X(t), 0, It) : 0;
      }
      function Jt(t) {
        if (typeof t == "number")
          return t;
        if (Tt(t))
          return yr;
        if (Ie(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ie(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = xf(t);
        var i = p1.test(t);
        return i || v1.test(t) ? j1(t.slice(2), i ? 2 : 8) : h1.test(t) ? yr : +t;
      }
      function dp(t) {
        return _n(t, $t(t));
      }
      function NV(t) {
        return t ? Ar(X(t), -Ye, Ye) : t === 0 ? t : 0;
      }
      function we(t) {
        return t == null ? "" : Bt(t);
      }
      var LV = vo(function(t, n) {
        if (Ei(n) || gt(n)) {
          _n(n, Ge(n), t);
          return;
        }
        for (var i in n)
          me.call(n, i) && yi(t, i, n[i]);
      }), fp = vo(function(t, n) {
        _n(n, $t(n), t);
      }), ca = vo(function(t, n, i, l) {
        _n(n, $t(n), t, l);
      }), MV = vo(function(t, n, i, l) {
        _n(n, Ge(n), t, l);
      }), OV = Dn(nu);
      function PV(t, n) {
        var i = wo(t);
        return n == null ? i : Hf(i, n);
      }
      var RV = re(function(t, n) {
        t = be(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : o;
        for (d && dt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], m = $t(p), g = -1, V = m.length; ++g < V; ) {
            var A = m[g], B = t[A];
            (B === o || an(B, fo[A]) && !me.call(t, A)) && (t[A] = p[A]);
          }
        return t;
      }), FV = re(function(t) {
        return t.push(o, xh), xt(hp, o, t);
      });
      function UV(t, n) {
        return Sf(t, Y(n, 3), mn);
      }
      function WV(t, n) {
        return Sf(t, Y(n, 3), ou);
      }
      function qV(t, n) {
        return t == null ? t : ru(t, Y(n, 3), $t);
      }
      function HV(t, n) {
        return t == null ? t : Zf(t, Y(n, 3), $t);
      }
      function zV(t, n) {
        return t && mn(t, Y(n, 3));
      }
      function YV(t, n) {
        return t && ou(t, Y(n, 3));
      }
      function GV(t) {
        return t == null ? [] : zs(t, Ge(t));
      }
      function jV(t) {
        return t == null ? [] : zs(t, $t(t));
      }
      function Mu(t, n, i) {
        var l = t == null ? o : Br(t, n);
        return l === o ? i : l;
      }
      function ZV(t, n) {
        return t != null && Th(t, n, _$);
      }
      function Ou(t, n) {
        return t != null && Th(t, n, g$);
      }
      var KV = Ch(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Ts.call(n)), t[n] = i;
      }, Ru(yt)), JV = Ch(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Ts.call(n)), me.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, Y), XV = re(Vi);
      function Ge(t) {
        return gt(t) ? Wf(t) : lu(t);
      }
      function $t(t) {
        return gt(t) ? Wf(t, !0) : x$(t);
      }
      function QV(t, n) {
        var i = {};
        return n = Y(n, 3), mn(t, function(l, d, p) {
          Bn(i, n(l, d, p), l);
        }), i;
      }
      function eC(t, n) {
        var i = {};
        return n = Y(n, 3), mn(t, function(l, d, p) {
          Bn(i, d, n(l, d, p));
        }), i;
      }
      var tC = vo(function(t, n, i) {
        Ys(t, n, i);
      }), hp = vo(function(t, n, i, l) {
        Ys(t, n, i, l);
      }), nC = Dn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = Ee(n, function(p) {
          return p = nr(p, t), l || (l = p.length > 1), p;
        }), _n(t, bu(t), i), l && (i = jt(i, $ | y | T, K$));
        for (var d = n.length; d--; )
          pu(i, n[d]);
        return i;
      });
      function rC(t, n) {
        return pp(t, aa(Y(n)));
      }
      var oC = Dn(function(t, n) {
        return t == null ? {} : B$(t, n);
      });
      function pp(t, n) {
        if (t == null)
          return {};
        var i = Ee(bu(t), function(l) {
          return [l];
        });
        return n = Y(n), ih(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function iC(t, n, i) {
        n = nr(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = o); ++l < d; ) {
          var p = t == null ? o : t[gn(n[l])];
          p === o && (l = d, p = i), t = Ln(p) ? p.call(t) : p;
        }
        return t;
      }
      function sC(t, n, i) {
        return t == null ? t : Si(t, n, i);
      }
      function aC(t, n, i, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Si(t, n, i, l);
      }
      var wp = Eh(Ge), vp = Eh($t);
      function lC(t, n, i) {
        var l = J(t), d = l || or(t) || go(t);
        if (n = Y(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : Ie(t) ? i = Ln(p) ? wo(Ls(t)) : {} : i = {};
        }
        return (d ? zt : mn)(t, function(m, g, V) {
          return n(i, m, g, V);
        }), i;
      }
      function uC(t, n) {
        return t == null ? !0 : pu(t, n);
      }
      function cC(t, n, i) {
        return t == null ? t : ch(t, n, mu(i));
      }
      function dC(t, n, i, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : ch(t, n, mu(i), l);
      }
      function $o(t) {
        return t == null ? [] : Zl(t, Ge(t));
      }
      function fC(t) {
        return t == null ? [] : Zl(t, $t(t));
      }
      function hC(t, n, i) {
        return i === o && (i = n, n = o), i !== o && (i = Jt(i), i = i === i ? i : 0), n !== o && (n = Jt(n), n = n === n ? n : 0), Ar(Jt(t), n, i);
      }
      function pC(t, n, i) {
        return n = Mn(n), i === o ? (i = n, n = 0) : i = Mn(i), t = Jt(t), $$(t, n, i);
      }
      function wC(t, n, i) {
        if (i && typeof i != "boolean" && dt(t, n, i) && (n = i = o), i === o && (typeof n == "boolean" ? (i = n, n = o) : typeof t == "boolean" && (i = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = Mn(t), n === o ? (n = t, t = 0) : n = Mn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Ff();
          return rt(t + d * (n - t + G1("1e-" + ((d + "").length - 1))), n);
        }
        return du(t, n);
      }
      var vC = mo(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? mp(n) : n);
      });
      function mp(t) {
        return Pu(we(t).toLowerCase());
      }
      function _p(t) {
        return t = we(t), t && t.replace(_1, s0).replace(O1, "");
      }
      function mC(t, n, i) {
        t = we(t), n = Bt(n);
        var l = t.length;
        i = i === o ? l : Ar(X(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function _C(t) {
        return t = we(t), t && Xg.test(t) ? t.replace(jd, a0) : t;
      }
      function gC(t) {
        return t = we(t), t && o1.test(t) ? t.replace(Dl, "\\$&") : t;
      }
      var $C = mo(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), yC = mo(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), bC = yh("toLowerCase");
      function VC(t, n, i) {
        t = we(t), n = X(n);
        var l = n ? uo(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Xs(Rs(d), i) + t + Xs(Ps(d), i);
      }
      function CC(t, n, i) {
        t = we(t), n = X(n);
        var l = n ? uo(t) : 0;
        return n && l < n ? t + Xs(n - l, i) : t;
      }
      function SC(t, n, i) {
        t = we(t), n = X(n);
        var l = n ? uo(t) : 0;
        return n && l < n ? Xs(n - l, i) + t : t;
      }
      function kC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), D0(we(t).replace(Nl, ""), n || 0);
      }
      function EC(t, n, i) {
        return (i ? dt(t, n, i) : n === o) ? n = 1 : n = X(n), fu(we(t), n);
      }
      function IC() {
        var t = arguments, n = we(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var xC = mo(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function AC(t, n, i) {
        return i && typeof i != "number" && dt(t, n, i) && (n = i = o), i = i === o ? It : i >>> 0, i ? (t = we(t), t && (typeof n == "string" || n != null && !Lu(n)) && (n = Bt(n), !n && lo(t)) ? rr(on(t), 0, i) : t.split(n, i)) : [];
      }
      var BC = mo(function(t, n, i) {
        return t + (i ? " " : "") + Pu(n);
      });
      function TC(t, n, i) {
        return t = we(t), i = i == null ? 0 : Ar(X(i), 0, t.length), n = Bt(n), t.slice(i, i + n.length) == n;
      }
      function DC(t, n, i) {
        var l = h.templateSettings;
        i && dt(t, n, i) && (n = o), t = we(t), n = ca({}, n, l, Ih);
        var d = ca({}, n.imports, l.imports, Ih), p = Ge(d), m = Zl(d, p), g, V, A = 0, B = n.interpolate || Vs, N = "__p += '", F = Jl(
          (n.escape || Vs).source + "|" + B.source + "|" + (B === Zd ? f1 : Vs).source + "|" + (n.evaluate || Vs).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (me.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++W1 + "]") + `
`;
        t.replace(F, function(j, oe, ae, Dt, ft, Nt) {
          return ae || (ae = Dt), N += t.slice(A, Nt).replace(g1, l0), oe && (g = !0, N += `' +
__e(` + oe + `) +
'`), ft && (V = !0, N += `';
` + ft + `;
__p += '`), ae && (N += `' +
((__t = (` + ae + `)) == null ? '' : __t) +
'`), A = Nt + j.length, j;
        }), N += `';
`;
        var G = me.call(n, "variable") && n.variable;
        if (!G)
          N = `with (obj) {
` + N + `
}
`;
        else if (c1.test(G))
          throw new K(f);
        N = (V ? N.replace(jg, "") : N).replace(Zg, "$1").replace(Kg, "$1;"), N = "function(" + (G || "obj") + `) {
` + (G ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + N + `return __p
}`;
        var ee = $p(function() {
          return fe(p, q + "return " + N).apply(o, m);
        });
        if (ee.source = N, Nu(ee))
          throw ee;
        return ee;
      }
      function NC(t) {
        return we(t).toLowerCase();
      }
      function LC(t) {
        return we(t).toUpperCase();
      }
      function MC(t, n, i) {
        if (t = we(t), t && (i || n === o))
          return xf(t);
        if (!t || !(n = Bt(n)))
          return t;
        var l = on(t), d = on(n), p = Af(l, d), m = Bf(l, d) + 1;
        return rr(l, p, m).join("");
      }
      function OC(t, n, i) {
        if (t = we(t), t && (i || n === o))
          return t.slice(0, Df(t) + 1);
        if (!t || !(n = Bt(n)))
          return t;
        var l = on(t), d = Bf(l, on(n)) + 1;
        return rr(l, 0, d).join("");
      }
      function PC(t, n, i) {
        if (t = we(t), t && (i || n === o))
          return t.replace(Nl, "");
        if (!t || !(n = Bt(n)))
          return t;
        var l = on(t), d = Af(l, on(n));
        return rr(l, d).join("");
      }
      function RC(t, n) {
        var i = de, l = pe;
        if (Ie(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? Bt(n.omission) : l;
        }
        t = we(t);
        var p = t.length;
        if (lo(t)) {
          var m = on(t);
          p = m.length;
        }
        if (i >= p)
          return t;
        var g = i - uo(l);
        if (g < 1)
          return l;
        var V = m ? rr(m, 0, g).join("") : t.slice(0, g);
        if (d === o)
          return V + l;
        if (m && (g += V.length - g), Lu(d)) {
          if (t.slice(g).search(d)) {
            var A, B = V;
            for (d.global || (d = Jl(d.source, we(Kd.exec(d)) + "g")), d.lastIndex = 0; A = d.exec(B); )
              var N = A.index;
            V = V.slice(0, N === o ? g : N);
          }
        } else if (t.indexOf(Bt(d), g) != g) {
          var F = V.lastIndexOf(d);
          F > -1 && (V = V.slice(0, F));
        }
        return V + l;
      }
      function FC(t) {
        return t = we(t), t && Jg.test(t) ? t.replace(Gd, w0) : t;
      }
      var UC = mo(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), Pu = yh("toUpperCase");
      function gp(t, n, i) {
        return t = we(t), n = i ? o : n, n === o ? c0(t) ? _0(t) : t0(t) : t.match(n) || [];
      }
      var $p = re(function(t, n) {
        try {
          return xt(t, o, n);
        } catch (i) {
          return Nu(i) ? i : new K(i);
        }
      }), WC = Dn(function(t, n) {
        return zt(n, function(i) {
          i = gn(i), Bn(t, i, Tu(t[i], t));
        }), t;
      });
      function qC(t) {
        var n = t == null ? 0 : t.length, i = Y();
        return t = n ? Ee(t, function(l) {
          if (typeof l[1] != "function")
            throw new Yt(c);
          return [i(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (xt(p[0], this, l))
              return xt(p[1], this, l);
          }
        });
      }
      function HC(t) {
        return w$(jt(t, $));
      }
      function Ru(t) {
        return function() {
          return t;
        };
      }
      function zC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var YC = Vh(), GC = Vh(!0);
      function yt(t) {
        return t;
      }
      function Fu(t) {
        return Qf(typeof t == "function" ? t : jt(t, $));
      }
      function jC(t) {
        return th(jt(t, $));
      }
      function ZC(t, n) {
        return nh(t, jt(n, $));
      }
      var KC = re(function(t, n) {
        return function(i) {
          return Vi(i, t, n);
        };
      }), JC = re(function(t, n) {
        return function(i) {
          return Vi(t, i, n);
        };
      });
      function Uu(t, n, i) {
        var l = Ge(n), d = zs(n, l);
        i == null && !(Ie(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = zs(n, Ge(n)));
        var p = !(Ie(i) && "chain" in i) || !!i.chain, m = Ln(t);
        return zt(d, function(g) {
          var V = n[g];
          t[g] = V, m && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (p || A) {
              var B = t(this.__wrapped__), N = B.__actions__ = _t(this.__actions__);
              return N.push({ func: V, args: arguments, thisArg: t }), B.__chain__ = A, B;
            }
            return V.apply(t, Jn([this.value()], arguments));
          });
        }), t;
      }
      function XC() {
        return Ke._ === this && (Ke._ = C0), this;
      }
      function Wu() {
      }
      function QC(t) {
        return t = X(t), re(function(n) {
          return rh(n, t);
        });
      }
      var eS = gu(Ee), tS = gu(Cf), nS = gu(Hl);
      function yp(t) {
        return ku(t) ? zl(gn(t)) : T$(t);
      }
      function rS(t) {
        return function(n) {
          return t == null ? o : Br(t, n);
        };
      }
      var oS = Sh(), iS = Sh(!0);
      function qu() {
        return [];
      }
      function Hu() {
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
        if (t = X(t), t < 1 || t > Ye)
          return [];
        var i = It, l = rt(t, It);
        n = Y(n), t -= It;
        for (var d = jl(l, n); ++i < t; )
          n(i);
        return d;
      }
      function cS(t) {
        return J(t) ? Ee(t, gn) : Tt(t) ? [t] : _t(Uh(we(t)));
      }
      function dS(t) {
        var n = ++b0;
        return we(t) + n;
      }
      var fS = Js(function(t, n) {
        return t + n;
      }, 0), hS = $u("ceil"), pS = Js(function(t, n) {
        return t / n;
      }, 1), wS = $u("floor");
      function vS(t) {
        return t && t.length ? Hs(t, yt, iu) : o;
      }
      function mS(t, n) {
        return t && t.length ? Hs(t, Y(n, 2), iu) : o;
      }
      function _S(t) {
        return Ef(t, yt);
      }
      function gS(t, n) {
        return Ef(t, Y(n, 2));
      }
      function $S(t) {
        return t && t.length ? Hs(t, yt, uu) : o;
      }
      function yS(t, n) {
        return t && t.length ? Hs(t, Y(n, 2), uu) : o;
      }
      var bS = Js(function(t, n) {
        return t * n;
      }, 1), VS = $u("round"), CS = Js(function(t, n) {
        return t - n;
      }, 0);
      function SS(t) {
        return t && t.length ? Gl(t, yt) : 0;
      }
      function kS(t, n) {
        return t && t.length ? Gl(t, Y(n, 2)) : 0;
      }
      return h.after = jb, h.ary = Xh, h.assign = LV, h.assignIn = fp, h.assignInWith = ca, h.assignWith = MV, h.at = OV, h.before = Qh, h.bind = Tu, h.bindAll = WC, h.bindKey = ep, h.castArray = sV, h.chain = Zh, h.chunk = wy, h.compact = vy, h.concat = my, h.cond = qC, h.conforms = HC, h.constant = Ru, h.countBy = Sb, h.create = PV, h.curry = tp, h.curryRight = np, h.debounce = rp, h.defaults = RV, h.defaultsDeep = FV, h.defer = Zb, h.delay = Kb, h.difference = _y, h.differenceBy = gy, h.differenceWith = $y, h.drop = yy, h.dropRight = by, h.dropRightWhile = Vy, h.dropWhile = Cy, h.fill = Sy, h.filter = Eb, h.flatMap = Ab, h.flatMapDeep = Bb, h.flatMapDepth = Tb, h.flatten = zh, h.flattenDeep = ky, h.flattenDepth = Ey, h.flip = Jb, h.flow = YC, h.flowRight = GC, h.fromPairs = Iy, h.functions = GV, h.functionsIn = jV, h.groupBy = Db, h.initial = Ay, h.intersection = By, h.intersectionBy = Ty, h.intersectionWith = Dy, h.invert = KV, h.invertBy = JV, h.invokeMap = Lb, h.iteratee = Fu, h.keyBy = Mb, h.keys = Ge, h.keysIn = $t, h.map = oa, h.mapKeys = QV, h.mapValues = eC, h.matches = jC, h.matchesProperty = ZC, h.memoize = sa, h.merge = tC, h.mergeWith = hp, h.method = KC, h.methodOf = JC, h.mixin = Uu, h.negate = aa, h.nthArg = QC, h.omit = nC, h.omitBy = rC, h.once = Xb, h.orderBy = Ob, h.over = eS, h.overArgs = Qb, h.overEvery = tS, h.overSome = nS, h.partial = Du, h.partialRight = op, h.partition = Pb, h.pick = oC, h.pickBy = pp, h.property = yp, h.propertyOf = rS, h.pull = Oy, h.pullAll = Gh, h.pullAllBy = Py, h.pullAllWith = Ry, h.pullAt = Fy, h.range = oS, h.rangeRight = iS, h.rearg = eV, h.reject = Ub, h.remove = Uy, h.rest = tV, h.reverse = Au, h.sampleSize = qb, h.set = sC, h.setWith = aC, h.shuffle = Hb, h.slice = Wy, h.sortBy = Gb, h.sortedUniq = Zy, h.sortedUniqBy = Ky, h.split = AC, h.spread = nV, h.tail = Jy, h.take = Xy, h.takeRight = Qy, h.takeRightWhile = eb, h.takeWhile = tb, h.tap = vb, h.throttle = rV, h.thru = ra, h.toArray = up, h.toPairs = wp, h.toPairsIn = vp, h.toPath = cS, h.toPlainObject = dp, h.transform = lC, h.unary = oV, h.union = nb, h.unionBy = rb, h.unionWith = ob, h.uniq = ib, h.uniqBy = sb, h.uniqWith = ab, h.unset = uC, h.unzip = Bu, h.unzipWith = jh, h.update = cC, h.updateWith = dC, h.values = $o, h.valuesIn = fC, h.without = lb, h.words = gp, h.wrap = iV, h.xor = ub, h.xorBy = cb, h.xorWith = db, h.zip = fb, h.zipObject = hb, h.zipObjectDeep = pb, h.zipWith = wb, h.entries = wp, h.entriesIn = vp, h.extend = fp, h.extendWith = ca, Uu(h, h), h.add = fS, h.attempt = $p, h.camelCase = vC, h.capitalize = mp, h.ceil = hS, h.clamp = hC, h.clone = aV, h.cloneDeep = uV, h.cloneDeepWith = cV, h.cloneWith = lV, h.conformsTo = dV, h.deburr = _p, h.defaultTo = zC, h.divide = pS, h.endsWith = mC, h.eq = an, h.escape = _C, h.escapeRegExp = gC, h.every = kb, h.find = Ib, h.findIndex = qh, h.findKey = UV, h.findLast = xb, h.findLastIndex = Hh, h.findLastKey = WV, h.floor = wS, h.forEach = Kh, h.forEachRight = Jh, h.forIn = qV, h.forInRight = HV, h.forOwn = zV, h.forOwnRight = YV, h.get = Mu, h.gt = fV, h.gte = hV, h.has = ZV, h.hasIn = Ou, h.head = Yh, h.identity = yt, h.includes = Nb, h.indexOf = xy, h.inRange = pC, h.invoke = XV, h.isArguments = Nr, h.isArray = J, h.isArrayBuffer = pV, h.isArrayLike = gt, h.isArrayLikeObject = Ne, h.isBoolean = wV, h.isBuffer = or, h.isDate = vV, h.isElement = mV, h.isEmpty = _V, h.isEqual = gV, h.isEqualWith = $V, h.isError = Nu, h.isFinite = yV, h.isFunction = Ln, h.isInteger = ip, h.isLength = la, h.isMap = sp, h.isMatch = bV, h.isMatchWith = VV, h.isNaN = CV, h.isNative = SV, h.isNil = EV, h.isNull = kV, h.isNumber = ap, h.isObject = Ie, h.isObjectLike = Be, h.isPlainObject = xi, h.isRegExp = Lu, h.isSafeInteger = IV, h.isSet = lp, h.isString = ua, h.isSymbol = Tt, h.isTypedArray = go, h.isUndefined = xV, h.isWeakMap = AV, h.isWeakSet = BV, h.join = Ny, h.kebabCase = $C, h.last = Kt, h.lastIndexOf = Ly, h.lowerCase = yC, h.lowerFirst = bC, h.lt = TV, h.lte = DV, h.max = vS, h.maxBy = mS, h.mean = _S, h.meanBy = gS, h.min = $S, h.minBy = yS, h.stubArray = qu, h.stubFalse = Hu, h.stubObject = sS, h.stubString = aS, h.stubTrue = lS, h.multiply = bS, h.nth = My, h.noConflict = XC, h.noop = Wu, h.now = ia, h.pad = VC, h.padEnd = CC, h.padStart = SC, h.parseInt = kC, h.random = wC, h.reduce = Rb, h.reduceRight = Fb, h.repeat = EC, h.replace = IC, h.result = iC, h.round = VS, h.runInContext = b, h.sample = Wb, h.size = zb, h.snakeCase = xC, h.some = Yb, h.sortedIndex = qy, h.sortedIndexBy = Hy, h.sortedIndexOf = zy, h.sortedLastIndex = Yy, h.sortedLastIndexBy = Gy, h.sortedLastIndexOf = jy, h.startCase = BC, h.startsWith = TC, h.subtract = CS, h.sum = SS, h.sumBy = kS, h.template = DC, h.times = uS, h.toFinite = Mn, h.toInteger = X, h.toLength = cp, h.toLower = NC, h.toNumber = Jt, h.toSafeInteger = NV, h.toString = we, h.toUpper = LC, h.trim = MC, h.trimEnd = OC, h.trimStart = PC, h.truncate = RC, h.unescape = FC, h.uniqueId = dS, h.upperCase = UC, h.upperFirst = Pu, h.each = Kh, h.eachRight = Jh, h.first = Yh, Uu(h, function() {
        var t = {};
        return mn(h, function(n, i) {
          me.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, zt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), zt(["drop", "take"], function(t, n) {
        ie.prototype[t] = function(i) {
          i = i === o ? 1 : We(X(i), 0);
          var l = this.__filtered__ && !n ? new ie(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = rt(i, l.__takeCount__) : l.__views__.push({
            size: rt(i, It),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ie.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), zt(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ae || i == Re;
        ie.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Y(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), zt(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        ie.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), zt(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        ie.prototype[t] = function() {
          return this.__filtered__ ? new ie(this) : this[i](1);
        };
      }), ie.prototype.compact = function() {
        return this.filter(yt);
      }, ie.prototype.find = function(t) {
        return this.filter(t).head();
      }, ie.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ie.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new ie(this) : this.map(function(i) {
          return Vi(i, t, n);
        });
      }), ie.prototype.reject = function(t) {
        return this.filter(aa(Y(t)));
      }, ie.prototype.slice = function(t, n) {
        t = X(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new ie(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== o && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, ie.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ie.prototype.toArray = function() {
        return this.take(It);
      }, mn(ie.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, V = m instanceof ie, A = g[0], B = V || J(m), N = function(oe) {
            var ae = d.apply(h, Jn([oe], g));
            return l && F ? ae[0] : ae;
          };
          B && i && typeof A == "function" && A.length != 1 && (V = B = !1);
          var F = this.__chain__, q = !!this.__actions__.length, G = p && !F, ee = V && !q;
          if (!p && B) {
            m = ee ? m : new ie(this);
            var j = t.apply(m, g);
            return j.__actions__.push({ func: ra, args: [N], thisArg: o }), new Gt(j, F);
          }
          return G && ee ? t.apply(this, g) : (j = this.thru(N), G ? l ? j.value()[0] : j.value() : j);
        });
      }), zt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = xs[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(J(p) ? p : [], d);
          }
          return this[i](function(m) {
            return n.apply(J(m) ? m : [], d);
          });
        };
      }), mn(ie.prototype, function(t, n) {
        var i = h[n];
        if (i) {
          var l = i.name + "";
          me.call(po, l) || (po[l] = []), po[l].push({ name: n, func: i });
        }
      }), po[Ks(o, S).name] = [{
        name: "wrapper",
        func: o
      }], ie.prototype.clone = F0, ie.prototype.reverse = U0, ie.prototype.value = W0, h.prototype.at = mb, h.prototype.chain = _b, h.prototype.commit = gb, h.prototype.next = $b, h.prototype.plant = bb, h.prototype.reverse = Vb, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Cb, h.prototype.first = h.prototype.head, vi && (h.prototype[vi] = yb), h;
    }, co = g0();
    kr ? ((kr.exports = co)._ = co, Fl._ = co) : Ke._ = co;
  }).call(Ai);
})(ge, ge.exports);
const Yk = "/alarms?_s=", il = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Gk = async (e, r) => {
  try {
    return (await lt.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      il
    )).status === 204;
  } catch {
    return !1;
  }
}, t_ = async (e, r) => {
  try {
    return (await lt.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      il
    )).status === 204;
  } catch {
    return !1;
  }
}, jk = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await Hn.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      il
    )).status == 204;
  } catch {
    return !1;
  }
}, Zk = async () => {
  try {
    const e = `${Yk}isSituation==true&limit=0`, r = await Hn(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, Kk = async (e) => {
  try {
    const r = e.join(",id=="), o = await Hn(`/alarms?_s=id==${r}&limit==0`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, n_ = async (e) => {
  try {
    const r = await Hn(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, Jk = async (e) => {
  try {
    const r = await Hn(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, Xk = async () => {
  try {
    const e = await Hn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((s) => ge.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Qk = async (e, r, o) => {
  try {
    return (await Hn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      il
    )).status == 204;
  } catch {
    return !1;
  }
}, eE = async (e, r) => {
  try {
    return (await Hn.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, tE = async () => {
  try {
    const e = await Hn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, nE = window.Pinia.defineStore, vn = nE("situationsStore", {
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
      const e = await Xk();
      e && (this.nodes = e);
    },
    async getSituations() {
      this.situations = [];
      const e = await Zk();
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
        const s = await n_(e);
        if (s) {
          const a = (r = s.relatedAlarms) == null ? void 0 : r.map((f) => f.id), c = await Kk(a);
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
          const a = await Jk(s);
          a && (o[s] = ge.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await tE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), rE = window.Vue.openBlock, oE = window.Vue.createElementBlock, iE = window.Vue.createElementVNode;
var sE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const aE = {}, lE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uE = /* @__PURE__ */ iE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), cE = [
  uE
];
function dE(e, r) {
  return rE(), oE("svg", lE, cE);
}
var Zo = /* @__PURE__ */ sE(aE, [["render", dE]]);
var fE = Object.defineProperty, Yp = Object.getOwnPropertySymbols, hE = Object.prototype.hasOwnProperty, pE = Object.prototype.propertyIsEnumerable, Gp = (e, r, o) => r in e ? fE(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, jp = (e, r) => {
  for (var o in r || (r = {}))
    hE.call(r, o) && Gp(e, o, r[o]);
  if (Yp)
    for (var o of Yp(r))
      pE.call(r, o) && Gp(e, o, r[o]);
  return e;
};
const wE = window.Vue.defineComponent, vE = window.Vue.toRaw, sc = window.Vue.h;
var mE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const _E = {
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
}, gE = wE({
  props: _E,
  render() {
    const e = this.$attrs, r = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, o = {};
    r["feather-icon"] = !0, this.flex && (r["feather-icon-flex"] = !0), this.title ? (o["aria-label"] = this.title, o["aria-hidden"] = "false") : o["aria-hidden"] = "true", o.focusable = "false", o.role = "img";
    let s = vE(this.icon);
    return this.$slots.default ? sc("span", { class: "feather-icon-container" }, [
      sc(this.$slots.default()[0], jp({
        class: r
      }, o))
    ]) : sc(s, jp({
      class: r
    }, o));
  }
});
var Z = /* @__PURE__ */ mE(gE, [["__scopeId", "data-v-52cbf270"]]);
const $E = window.Vue.openBlock, yE = window.Vue.createElementBlock, bE = window.Vue.createElementVNode;
var VE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const CE = {}, SE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kE = /* @__PURE__ */ bE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), EE = [
  kE
];
function IE(e, r) {
  return $E(), yE("svg", SE, EE);
}
var r_ = /* @__PURE__ */ VE(CE, [["render", IE]]);
const et = {
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
function Sn(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var r = Number(e);
  return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
}
function Ce(e, r) {
  if (r.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + r.length + " present");
}
function ze(e) {
  Ce(1, arguments);
  var r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || r === "[object Number]" ? new Date(e) : ((typeof e == "string" || r === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function xE(e, r) {
  Ce(2, arguments);
  var o = ze(e), s = Sn(r);
  return isNaN(s) ? new Date(NaN) : (s && o.setDate(o.getDate() + s), o);
}
function AE(e, r) {
  Ce(2, arguments);
  var o = ze(e).getTime(), s = Sn(r);
  return new Date(o + s);
}
var BE = {};
function Xo() {
  return BE;
}
function Zp(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Xo(), $ = Sn((o = (s = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = ze(e), T = y.getDay(), D = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - D), y.setHours(0, 0, 0, 0), y;
}
function nd(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function Kp(e) {
  Ce(1, arguments);
  var r = ze(e);
  return r.setHours(0, 0, 0, 0), r;
}
function TE(e, r) {
  Ce(2, arguments);
  var o = ze(e), s = ze(r), a = o.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function o_(e, r) {
  Ce(2, arguments);
  var o = Kp(e), s = Kp(r);
  return o.getTime() === s.getTime();
}
function DE(e) {
  return Ce(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function NE(e) {
  if (Ce(1, arguments), !DE(e) && typeof e != "number")
    return !1;
  var r = ze(e);
  return !isNaN(Number(r));
}
function LE(e, r) {
  Ce(2, arguments);
  var o = Sn(r);
  return AE(e, -o);
}
var ME = 864e5;
function OE(e) {
  Ce(1, arguments);
  var r = ze(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var s = r.getTime(), a = o - s;
  return Math.floor(a / ME) + 1;
}
function Ha(e) {
  Ce(1, arguments);
  var r = 1, o = ze(e), s = o.getUTCDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setUTCDate(o.getUTCDate() - a), o.setUTCHours(0, 0, 0, 0), o;
}
function i_(e) {
  Ce(1, arguments);
  var r = ze(e), o = r.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(o + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = Ha(s), u = new Date(0);
  u.setUTCFullYear(o, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = Ha(u);
  return r.getTime() >= a.getTime() ? o + 1 : r.getTime() >= c.getTime() ? o : o - 1;
}
function PE(e) {
  Ce(1, arguments);
  var r = i_(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var s = Ha(o);
  return s;
}
var RE = 6048e5;
function FE(e) {
  Ce(1, arguments);
  var r = ze(e), o = Ha(r).getTime() - PE(r).getTime();
  return Math.round(o / RE) + 1;
}
function za(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Xo(), $ = Sn((o = (s = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = ze(e), T = y.getUTCDay(), D = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - D), y.setUTCHours(0, 0, 0, 0), y;
}
function s_(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = ze(e), $ = _.getUTCFullYear(), y = Xo(), T = Sn((o = (s = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = new Date(0);
  D.setUTCFullYear($ + 1, 0, T), D.setUTCHours(0, 0, 0, 0);
  var M = za(D, r), L = new Date(0);
  L.setUTCFullYear($, 0, T), L.setUTCHours(0, 0, 0, 0);
  var S = za(L, r);
  return _.getTime() >= M.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function UE(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Xo(), $ = Sn((o = (s = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), y = s_(e, r), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var D = za(T, r);
  return D;
}
var WE = 6048e5;
function qE(e, r) {
  Ce(1, arguments);
  var o = ze(e), s = za(o, r).getTime() - UE(o, r).getTime();
  return Math.round(s / WE) + 1;
}
function _e(e, r) {
  for (var o = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < r; )
    s = "0" + s;
  return o + s;
}
var HE = {
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
const ir = HE;
var Vo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zE = {
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
    return ir.y(e, r);
  },
  Y: function(e, r, o, s) {
    var a = s_(e, s), u = a > 0 ? a : 1 - a;
    if (r === "YY") {
      var c = u % 100;
      return _e(c, 2);
    }
    return r === "Yo" ? o.ordinalNumber(u, {
      unit: "year"
    }) : _e(u, r.length);
  },
  R: function(e, r) {
    var o = i_(e);
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
        return ir.M(e, r);
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
    var a = qE(e, s);
    return r === "wo" ? o.ordinalNumber(a, {
      unit: "week"
    }) : _e(a, r.length);
  },
  I: function(e, r, o) {
    var s = FE(e);
    return r === "Io" ? o.ordinalNumber(s, {
      unit: "week"
    }) : _e(s, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : ir.d(e, r);
  },
  D: function(e, r, o) {
    var s = OE(e);
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
    switch (s === 12 ? a = Vo.noon : s === 0 ? a = Vo.midnight : a = s / 12 >= 1 ? "pm" : "am", r) {
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
    switch (s >= 17 ? a = Vo.evening : s >= 12 ? a = Vo.afternoon : s >= 4 ? a = Vo.morning : a = Vo.night, r) {
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
    return ir.h(e, r);
  },
  H: function(e, r, o) {
    return r === "Ho" ? o.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : ir.H(e, r);
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
    }) : ir.m(e, r);
  },
  s: function(e, r, o) {
    return r === "so" ? o.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : ir.s(e, r);
  },
  S: function(e, r) {
    return ir.S(e, r);
  },
  X: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (r) {
      case "X":
        return Xp(u);
      case "XXXX":
      case "XX":
        return Zr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Zr(u, ":");
    }
  },
  x: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "x":
        return Xp(u);
      case "xxxx":
      case "xx":
        return Zr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Zr(u, ":");
    }
  },
  O: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Jp(u, ":");
      case "OOOO":
      default:
        return "GMT" + Zr(u, ":");
    }
  },
  z: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Jp(u, ":");
      case "zzzz":
      default:
        return "GMT" + Zr(u, ":");
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
function Jp(e, r) {
  var o = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return o + String(a);
  var c = r || "";
  return o + String(a) + c + _e(u, 2);
}
function Xp(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + _e(Math.abs(e) / 60, 2);
  }
  return Zr(e, r);
}
function Zr(e, r) {
  var o = r || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = _e(Math.floor(a / 60), 2), c = _e(a % 60, 2);
  return s + u + o + c;
}
const YE = zE;
var Qp = function(e, r) {
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
}, a_ = function(e, r) {
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
}, GE = function(e, r) {
  var o = e.match(/(P+)(p+)?/) || [], s = o[1], a = o[2];
  if (!a)
    return Qp(e, r);
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
  return u.replace("{{date}}", Qp(s, r)).replace("{{time}}", a_(a, r));
}, jE = {
  p: a_,
  P: GE
};
const ZE = jE;
var KE = ["D", "DD"], JE = ["YY", "YYYY"];
function XE(e) {
  return KE.indexOf(e) !== -1;
}
function QE(e) {
  return JE.indexOf(e) !== -1;
}
function ew(e, r, o) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(r, "`) for formatting years to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(r, "`) for formatting days of the month to the input `").concat(o, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var e2 = {
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
}, t2 = function(e, r, o) {
  var s, a = e2[e];
  return typeof a == "string" ? s = a : r === 1 ? s = a.one : s = a.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + s : s + " ago" : s;
};
const n2 = t2;
function ac(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, s = e.formats[o] || e.formats[e.defaultWidth];
    return s;
  };
}
var r2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, o2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, i2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, s2 = {
  date: ac({
    formats: r2,
    defaultWidth: "full"
  }),
  time: ac({
    formats: o2,
    defaultWidth: "full"
  }),
  dateTime: ac({
    formats: i2,
    defaultWidth: "full"
  })
};
const a2 = s2;
var l2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, u2 = function(e, r, o, s) {
  return l2[e];
};
const c2 = u2;
function Bi(e) {
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
var d2 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, f2 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, h2 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, p2 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, w2 = {
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
}, v2 = {
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
}, m2 = function(e, r) {
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
}, _2 = {
  ordinalNumber: m2,
  era: Bi({
    values: d2,
    defaultWidth: "wide"
  }),
  quarter: Bi({
    values: f2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Bi({
    values: h2,
    defaultWidth: "wide"
  }),
  day: Bi({
    values: p2,
    defaultWidth: "wide"
  }),
  dayPeriod: Bi({
    values: w2,
    defaultWidth: "wide",
    formattingValues: v2,
    defaultFormattingWidth: "wide"
  })
};
const g2 = _2;
function Ti(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = o.width, a = s && e.matchPatterns[s] || e.matchPatterns[e.defaultMatchWidth], u = r.match(a);
    if (!u)
      return null;
    var c = u[0], f = s && e.parsePatterns[s] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? y2(f, function($) {
      return $.test(c);
    }) : $2(f, function($) {
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
function $2(e, r) {
  for (var o in e)
    if (e.hasOwnProperty(o) && r(e[o]))
      return o;
}
function y2(e, r) {
  for (var o = 0; o < e.length; o++)
    if (r(e[o]))
      return o;
}
function b2(e) {
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
var V2 = /^(\d+)(th|st|nd|rd)?/i, C2 = /\d+/i, S2 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, k2 = {
  any: [/^b/i, /^(a|c)/i]
}, E2 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, I2 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, x2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, A2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, B2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, T2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, D2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, N2 = {
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
}, L2 = {
  ordinalNumber: b2({
    matchPattern: V2,
    parsePattern: C2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Ti({
    matchPatterns: S2,
    defaultMatchWidth: "wide",
    parsePatterns: k2,
    defaultParseWidth: "any"
  }),
  quarter: Ti({
    matchPatterns: E2,
    defaultMatchWidth: "wide",
    parsePatterns: I2,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ti({
    matchPatterns: x2,
    defaultMatchWidth: "wide",
    parsePatterns: A2,
    defaultParseWidth: "any"
  }),
  day: Ti({
    matchPatterns: B2,
    defaultMatchWidth: "wide",
    parsePatterns: T2,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ti({
    matchPatterns: D2,
    defaultMatchWidth: "any",
    parsePatterns: N2,
    defaultParseWidth: "any"
  })
};
const M2 = L2;
var O2 = {
  code: "en-US",
  formatDistance: n2,
  formatLong: a2,
  formatRelative: c2,
  localize: g2,
  match: M2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const l_ = O2;
var P2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, R2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, F2 = /^'([^]*?)'?$/, U2 = /''/g, W2 = /[a-zA-Z]/;
function q2(e, r, o) {
  var s, a, u, c, f, w, v, _, $, y, T, D, M, L, S, k, I, P;
  Ce(2, arguments);
  var x = String(r), R = Xo(), O = (s = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : R.locale) !== null && s !== void 0 ? s : l_, H = Sn((u = (c = (f = (w = o == null ? void 0 : o.firstWeekContainsDate) !== null && w !== void 0 ? w : o == null || (v = o.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : R.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = R.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $e = Sn((T = (D = (M = (L = o == null ? void 0 : o.weekStartsOn) !== null && L !== void 0 ? L : o == null || (S = o.locale) === null || S === void 0 || (k = S.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && M !== void 0 ? M : R.weekStartsOn) !== null && D !== void 0 ? D : (I = R.locale) === null || I === void 0 || (P = I.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!($e >= 0 && $e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var de = ze(e);
  if (!NE(de))
    throw new RangeError("Invalid time value");
  var pe = nd(de), ke = LE(de, pe), ye = {
    firstWeekContainsDate: H,
    weekStartsOn: $e,
    locale: O,
    _originalDate: de
  }, Ae = x.match(R2).map(function(ve) {
    var Re = ve[0];
    if (Re === "p" || Re === "P") {
      var Fe = ZE[Re];
      return Fe(ve, O.formatLong);
    }
    return ve;
  }).join("").match(P2).map(function(ve) {
    if (ve === "''")
      return "'";
    var Re = ve[0];
    if (Re === "'")
      return H2(ve);
    var Fe = YE[Re];
    if (Fe)
      return !(o != null && o.useAdditionalWeekYearTokens) && QE(ve) && ew(ve, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && XE(ve) && ew(ve, r, String(e)), Fe(ke, ve, O.localize, ye);
    if (Re.match(W2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Re + "`");
    return ve;
  }).join("");
  return Ae;
}
function H2(e) {
  var r = e.match(F2);
  return r ? r[1].replace(U2, "'") : e;
}
function u_(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function z2(e) {
  return u_({}, e);
}
var tw = 1e3 * 60, Ya = 60 * 24, nw = Ya * 30, rw = Ya * 365;
function sl(e, r, o) {
  var s, a, u;
  Ce(2, arguments);
  var c = Xo(), f = (s = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : l_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = TE(e, r);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = u_(z2(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = ze(r), $ = ze(e)) : (_ = ze(e), $ = ze(r));
  var y = String((u = o == null ? void 0 : o.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if (y === "floor")
    T = Math.floor;
  else if (y === "ceil")
    T = Math.ceil;
  else if (y === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var D = $.getTime() - _.getTime(), M = D / tw, L = nd($) - nd(_), S = (D - L) / tw, k = o == null ? void 0 : o.unit, I;
  if (k ? I = String(k) : M < 1 ? I = "second" : M < 60 ? I = "minute" : M < Ya ? I = "hour" : S < nw ? I = "day" : S < rw ? I = "month" : I = "year", I === "second") {
    var P = T(D / 1e3);
    return f.formatDistance("xSeconds", P, v);
  } else if (I === "minute") {
    var x = T(M);
    return f.formatDistance("xMinutes", x, v);
  } else if (I === "hour") {
    var R = T(M / 60);
    return f.formatDistance("xHours", R, v);
  } else if (I === "day") {
    var O = T(S / Ya);
    return f.formatDistance("xDays", O, v);
  } else if (I === "month") {
    var H = T(S / nw);
    return H === 12 && k !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", H, v);
  } else if (I === "year") {
    var $e = T(S / rw);
    return f.formatDistance("xYears", $e, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function Y2(e, r, o) {
  Ce(2, arguments);
  var s = Zp(e, o), a = Zp(r, o);
  return s.getTime() === a.getTime();
}
function G2(e, r) {
  return Ce(1, arguments), Y2(e, Date.now(), r);
}
function j2(e) {
  return Ce(1, arguments), o_(e, Date.now());
}
function Z2(e, r) {
  Ce(2, arguments);
  var o = Sn(r);
  return xE(e, -o);
}
function K2(e) {
  return Ce(1, arguments), o_(e, Z2(Date.now(), 1));
}
const kn = (e) => {
  let r = "";
  if (e)
    try {
      r = q2(new Date(e), et.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, c_ = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), d_ = (e, r) => {
  const o = c_(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = o.length > r ? "..." : "";
  return o.substring(0, r) + s;
}, J2 = (e, r) => {
  let o = r;
  switch (e) {
    case 2:
      o = o.filter(
        (s) => j2(s.firstEventTime)
      );
      break;
    case 3:
      o = o.filter(
        (s) => K2(s.firstEventTime)
      );
      break;
    case 4:
      o = o.filter(
        (s) => G2(s.firstEventTime)
      );
      break;
  }
  return o;
}, al = "/alec", f_ = "/alec/engine/configuration", h_ = "/alec/claude/configuration", p_ = "/alec/claude/suggestions", X2 = "/alec/claude/usage", w_ = "/alec/situation", Q2 = async () => {
  try {
    const e = await lt.get(`${f_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, eI = async (e) => {
  try {
    return (await lt.post(f_, e)).status === 200;
  } catch {
    return !1;
  }
}, tI = async () => {
  try {
    const e = await lt.get(h_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, nI = async (e) => {
  try {
    const r = await lt.post(h_, e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, v_ = async (e) => {
  try {
    const r = await lt.get(`${p_}/${e}`);
    return r.status === 200 ? r.data : r.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, rI = async (e) => {
  try {
    const r = await lt.post(
      `${p_}/${e}/reanalyze`
    );
    return r.status === 202 || r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, oI = async (e = 30) => {
  try {
    const r = await lt.get(`${X2}?days=${e}`);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, m_ = async (e, r) => {
  try {
    const o = await lt.post(`${al}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return r == et.REJECTED.toLowerCase() && o.status === 200 && await t_(e, "clear"), o.status === 200;
  } catch {
    return !1;
  }
}, ow = async (e, r) => {
  try {
    return (await lt.delete(`${al}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, __ = async (e, r) => {
  try {
    return (await lt.put(`${al}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, iI = async (e) => {
  try {
    return (await lt.post(w_, e)).status === 200;
  } catch {
    return !1;
  }
}, sI = async () => {
  try {
    return (await lt.post(`${w_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, aI = async () => {
  try {
    return (await lt.post(`${al}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, lI = window.Vue.defineComponent, Mt = window.Vue.unref, lc = window.Vue.normalizeClass, Vn = window.Vue.createElementVNode, Lr = window.Vue.toDisplayString, sr = window.Vue.openBlock, ar = window.Vue.createElementBlock, Di = window.Vue.createCommentVNode, iw = window.Vue.createVNode, rd = window.Vue.createTextVNode, uI = window.Vue.renderList, cI = window.Vue.Fragment, dI = window.Vue.pushScopeId, fI = window.Vue.popScopeId, Sd = (e) => (dI("data-v-2ed3bdb3"), e = e(), fI(), e), hI = { class: "content" }, pI = { class: "title-row" }, wI = { class: "title" }, vI = ["title"], mI = {
  key: 1,
  class: "accepted"
}, _I = {
  key: 2,
  class: "rejected"
}, gI = /* @__PURE__ */ Sd(() => /* @__PURE__ */ Vn("span", { class: "info-title" }, " Duration: ", -1)), $I = { key: 0 }, yI = /* @__PURE__ */ Sd(() => /* @__PURE__ */ Vn("span", { class: "info-title" }, " First Event: ", -1)), bI = { class: "description" }, VI = /* @__PURE__ */ Sd(() => /* @__PURE__ */ Vn("hr", null, null, -1)), CI = {
  key: 1,
  class: "count-info"
}, SI = /* @__PURE__ */ rd(" Alarms: "), kI = { class: "info-title" }, EI = window.Vue.onMounted, II = window.Vue.ref, xI = /* @__PURE__ */ lI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: r }) {
    const o = e, s = et.ACCEPTED, a = et.REJECTED, u = new Date().getTime(), c = () => {
      var w;
      r("situation-selected", (w = o.situationInfo) == null ? void 0 : w.id);
    }, f = II("none");
    return EI(async () => {
      var v;
      if (((v = o.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const w = await v_(o.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return sr(), ar("div", {
        onClick: c,
        class: lc(["card", {
          rejected: o.situationInfo.status == Mt(a)
        }])
      }, [
        Vn("div", {
          class: lc(["severity-line", [`${($ = (_ = o.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        Vn("div", hI, [
          Vn("div", pI, [
            Vn("div", wI, "Situation " + Lr((y = o.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (sr(), ar("span", {
              key: 0,
              class: lc(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Lr(f.value === "pending" ? "\u2026" : ""), 11, vI)) : Di("", !0),
            o.situationInfo.status == Mt(s) ? (sr(), ar("div", mI, [
              iw(Mt(Z), {
                icon: Mt(Zo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Di("", !0),
            o.situationInfo.status == Mt(a) ? (sr(), ar("div", _I, [
              iw(Mt(Z), {
                icon: Mt(r_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Di("", !0)
          ]),
          Vn("div", null, [
            gI,
            rd(" " + Lr(Mt(sl)(
              Mt(u),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Di("", !0) : (sr(), ar("div", $I, [
            yI,
            rd(Lr(Mt(kn)(o.situationInfo.firstEventTime)), 1)
          ])),
          Vn("div", bI, Lr(Mt(d_)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          VI,
          o.situationInfo.relatedAlarms ? (sr(), ar("div", CI, [
            SI,
            Vn("span", kI, Lr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Di("", !0),
          (sr(!0), ar(cI, null, uI(Mt(ge.exports.keys)(
            Mt(ge.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (T) => (sr(), ar("div", {
            class: "info-title",
            key: T
          }, " - " + Lr(T), 1))), 128))
        ])
      ], 2);
    };
  }
});
const g_ = /* @__PURE__ */ ce(xI, [["__scopeId", "data-v-2ed3bdb3"]]), AI = window.Vue.openBlock, BI = window.Vue.createElementBlock, TI = window.Vue.createElementVNode;
var DI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const NI = {}, LI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, MI = /* @__PURE__ */ TI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), OI = [
  MI
];
function PI(e, r) {
  return AI(), BI("svg", LI, OI);
}
var RI = /* @__PURE__ */ DI(NI, [["render", PI]]);
const FI = window.Vue.openBlock, UI = window.Vue.createElementBlock, $_ = window.Vue.createElementVNode;
var WI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const qI = {}, HI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zI = /* @__PURE__ */ $_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), YI = /* @__PURE__ */ $_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), GI = [
  zI,
  YI
];
function jI(e, r) {
  return FI(), UI("svg", HI, GI);
}
var ZI = /* @__PURE__ */ WI(qI, [["render", jI]]);
const KI = window.Vue.openBlock, JI = window.Vue.createElementBlock, XI = window.Vue.createElementVNode;
var QI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ex = {}, tx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, nx = /* @__PURE__ */ XI("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), rx = [
  nx
];
function ox(e, r) {
  return KI(), JI("svg", tx, rx);
}
var ix = /* @__PURE__ */ QI(ex, [["render", ox]]);
const sx = window.Vue.openBlock, ax = window.Vue.createElementBlock, lx = window.Vue.createElementVNode;
var ux = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const cx = {}, dx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fx = /* @__PURE__ */ lx("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), hx = [
  fx
];
function px(e, r) {
  return sx(), ax("svg", dx, hx);
}
var y_ = /* @__PURE__ */ ux(cx, [["render", px]]);
const wx = window.Vue.defineComponent, lr = window.Vue.unref, da = window.Vue.normalizeClass, fa = window.Vue.createVNode, vx = window.Vue.openBlock, mx = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const _x = { class: "paginator" }, gx = /* @__PURE__ */ wx({
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
    return (a, u) => (vx(), mx("div", _x, [
      fa(lr(Z), {
        icon: lr(RI),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      fa(lr(Z), {
        icon: lr(ix),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      fa(lr(Z), {
        icon: lr(y_),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      fa(lr(Z), {
        icon: lr(ZI),
        "aria-hidden": "true",
        class: da(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const $x = /* @__PURE__ */ ce(gx, [["__scopeId", "data-v-40758818"]]);
const ue = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, yx = window.Vue.computed, ll = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((s) => {
    o[`${s}Label`] = yx(() => e.value[s] ? e.value[s] : r[s]);
  }), o;
};
const eo = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, to = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var bx = Object.defineProperty, Vx = Object.defineProperties, Cx = Object.getOwnPropertyDescriptors, sw = Object.getOwnPropertySymbols, Sx = Object.prototype.hasOwnProperty, kx = Object.prototype.propertyIsEnumerable, aw = (e, r, o) => r in e ? bx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, lw = (e, r) => {
  for (var o in r || (r = {}))
    Sx.call(r, o) && aw(e, o, r[o]);
  if (sw)
    for (var o of sw(r))
      kx.call(r, o) && aw(e, o, r[o]);
  return e;
}, Ex = (e, r) => Vx(e, Cx(r));
const Ix = window.Vue.defineComponent, xx = window.Vue.h;
var Ax = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Bx = {
  center: {
    type: Boolean,
    default: !1
  }
}, Tx = Ix({
  props: Bx,
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
        this.styles = Ex(lw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, to(this.failsafe), this.failsafe = eo(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return xx("div", {
        style: lw({}, this.styles),
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
var mr = /* @__PURE__ */ Ax(Tx, [["__scopeId", "data-v-18e2a5db"]]);
const Dx = window.Vue.openBlock, Nx = window.Vue.createElementBlock, Lx = window.Vue.createElementVNode;
var Mx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Ox = {}, Px = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Rx = /* @__PURE__ */ Lx("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), Fx = [
  Rx
];
function Ux(e, r) {
  return Dx(), Nx("svg", Px, Fx);
}
var Qo = /* @__PURE__ */ Mx(Ox, [["render", Ux]]);
const uw = window.Vue.computed, Wx = (e, r, o) => {
  const s = uw(() => r.value.filter((u) => !u.disabled)), a = uw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? o(s.value[s.value.length - 1]) : o(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? o(s.value[0]) : o(s.value[a.value + 1]));
    }
  };
};
const qx = window.Vue.openBlock, Hx = window.Vue.createElementBlock, kd = window.Vue.createElementVNode;
var zx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Yx = {}, Gx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jx = /* @__PURE__ */ kd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Zx = /* @__PURE__ */ kd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Kx = /* @__PURE__ */ kd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), Jx = [
  jx,
  Zx,
  Kx
];
function Xx(e, r) {
  return qx(), Hx("svg", Gx, Jx);
}
var Qx = /* @__PURE__ */ zx(Yx, [["render", Xx]]), eA = Object.defineProperty, tA = Object.defineProperties, nA = Object.getOwnPropertyDescriptors, cw = Object.getOwnPropertySymbols, rA = Object.prototype.hasOwnProperty, oA = Object.prototype.propertyIsEnumerable, dw = (e, r, o) => r in e ? eA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, b_ = (e, r) => {
  for (var o in r || (r = {}))
    rA.call(r, o) && dw(e, o, r[o]);
  if (cw)
    for (var o of cw(r))
      oA.call(r, o) && dw(e, o, r[o]);
  return e;
}, V_ = (e, r) => tA(e, nA(r));
const ei = window.Vue.defineComponent, as = window.Vue.resolveComponent, Cn = window.Vue.openBlock, Ro = window.Vue.createElementBlock, iA = window.Vue.createVNode, Ga = window.Vue.createBlock, sA = window.Vue.withModifiers, Ko = window.Vue.inject, ls = window.Vue.computed, aA = window.Vue.normalizeClass, Co = window.Vue.createElementVNode, ja = window.Vue.toDisplayString, Oa = window.Vue.renderSlot, es = window.Vue.createCommentVNode, lA = window.Vue.withDirectives, uA = window.Vue.vShow, od = window.Vue.ref, fw = window.Vue.toRef, hw = window.Vue.nextTick, id = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Ed = window.Vue.provide, pw = window.Vue.isRef, cA = window.Vue.onBeforeUnmount;
var fs = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const dA = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, fA = ei({
  props: dA,
  components: {
    FeatherIcon: Z
  }
}), hA = ["title"];
function pA(e, r, o, s, a, u) {
  const c = as("FeatherIcon");
  return Cn(), Ro("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    iA(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, hA);
}
var wA = /* @__PURE__ */ fs(fA, [["render", pA], ["__scopeId", "data-v-4265058e"]]);
const vA = ei({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Qo;
    }
  },
  components: {
    ActionIcon: wA
  }
});
function mA(e, r, o, s, a, u) {
  const c = as("ActionIcon");
  return Cn(), Ga(c, {
    onClick: r[0] || (r[0] = sA((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var _A = /* @__PURE__ */ fs(vA, [["render", mA]]);
const gA = ei({
  computed: {
    errorIcon() {
      return Qx;
    }
  },
  components: {
    FeatherIcon: Z
  }
});
function $A(e, r, o, s, a, u) {
  const c = as("FeatherIcon");
  return Cn(), Ga(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var yA = /* @__PURE__ */ fs(gA, [["render", $A], ["__scopeId", "data-v-0b8faef3"]]);
const bA = {
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
}, VA = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, CA = ei({
  emits: VA,
  props: bA,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Ko("wrapperOptions", {}), r = Ko("validationErrorMessage", !1), o = ls(() => e.error ? e.error : r && r.value ? r.value : !1);
    return V_(b_({}, e), { error: o });
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
    ClearIcon: _A,
    ErrorIcon: yA
  }
}), SA = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, kA = ["for"], EA = { class: "prefix" }, IA = { class: "post" };
function xA(e, r, o, s, a, u) {
  const c = as("ClearIcon"), f = as("ErrorIcon");
  return Cn(), Ro("div", {
    class: aA(["feather-input-wrapper-container", e.containerCls])
  }, [
    Co("fieldset", SA, [
      Co("legend", null, ja(e.label), 1)
    ]),
    Co("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, ja(e.label), 9, kA),
    Co("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      Co("div", EA, [
        Oa(e.$slots, "pre", {}, void 0, !0)
      ]),
      Oa(e.$slots, "default", {}, void 0, !0),
      Co("div", IA, [
        e.showClear && e.computedClearText ? (Cn(), Ga(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : es("", !0),
        e.error ? (Cn(), Ga(f, { key: 1 })) : es("", !0),
        Oa(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var ul = /* @__PURE__ */ fs(CA, [["render", xA], ["__scopeId", "data-v-4db296db"]]);
const AA = ei({
  setup() {
    const e = Ko("subTextOptions", {}), r = Ko("validationErrorMessage", !1), o = ls(() => e.error ? e.error : r && r.value ? r.value : "");
    return V_(b_({}, e), { error: o });
  }
}), BA = { class: "feather-input-sub-text" }, TA = {
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
function LA(e, r, o, s, a, u) {
  return lA((Cn(), Ro("div", BA, [
    !e.hint && !e.error.length ? (Cn(), Ro("div", TA, "\xA0")) : es("", !0),
    e.hint && !e.error.length ? (Cn(), Ro("div", DA, ja(e.hint), 1)) : es("", !0),
    e.error.length > 0 ? (Cn(), Ro("div", NA, ja(e.error), 1)) : es("", !0),
    Oa(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [uA, !e.inline || e.hint || e.error.length]
  ]);
}
var ti = /* @__PURE__ */ fs(AA, [["render", LA], ["__scopeId", "data-v-8e0ac99e"]]);
const MA = {
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
ei({
  props: MA,
  setup(e) {
    const r = Ko("featherFormErrors", od([])), o = fw(e, "errorList"), s = ls(() => {
      var _;
      return (_ = o.value) != null && _.length ? o.value : r.value;
    }), a = fw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = od(), w = (_) => `${c(_.label)} - ${_.message}`, v = ls(() => (s.value.length && hw(() => f.value.focus()), e.headingText(s.value)));
    return id(a, (_) => {
      _.length && hw(() => f.value.focus());
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
const ni = (e, r, o, s, a) => {
  const u = Ko("featherForm", !1);
  if (s && u && e.value) {
    const c = od("");
    Ed("validationErrorMessage", c);
    const f = () => {
      if (a && pw(a) && a.value)
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
    return a && pw(a) && id(a, () => {
      u.runValidation();
    }), id(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), cA(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, ri = (e) => ({
  inherittedAttrs: ls(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), oi = {
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
}, ii = (e) => {
  Ed("subTextOptions", e);
}, cl = {
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
}, dl = (e) => {
  Ed("wrapperOptions", e);
}, ha = window.Vue.ref, OA = window.Vue.watch, PA = window.Vue.watchEffect, ww = window.Vue.computed, uc = window.Vue.provide, C_ = (e, r, o, s, a) => {
  const u = ha([]), c = ha(), f = ha(), w = ha();
  PA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((k) => k.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let k = u.value.filter((I) => !I.disabled);
      k = k.length ? k : u.value, f.value = k[0], f.value.first = !0;
    }
  }), OA(c, (S, k) => {
    k && (k.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (r("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = ww(() => c.value || f.value), $ = Wx(_, u, v), y = ww(() => ue("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = ni(w, e, o, s, a);
  return uc("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), uc("select", v), uc("blur", (S) => {
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
var RA = Object.defineProperty, FA = Object.defineProperties, UA = Object.getOwnPropertyDescriptors, vw = Object.getOwnPropertySymbols, WA = Object.prototype.hasOwnProperty, qA = Object.prototype.propertyIsEnumerable, mw = (e, r, o) => r in e ? RA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, qo = (e, r) => {
  for (var o in r || (r = {}))
    WA.call(r, o) && mw(e, o, r[o]);
  if (vw)
    for (var o of vw(r))
      qA.call(r, o) && mw(e, o, r[o]);
  return e;
}, S_ = (e, r) => FA(e, UA(r));
const _r = window.Vue.defineComponent, ts = window.Vue.inject, Za = window.Vue.computed, ns = window.Vue.ref, rn = window.Vue.resolveComponent, Wt = window.Vue.openBlock, hs = window.Vue.createElementBlock, k_ = window.Vue.normalizeClass, En = window.Vue.renderSlot, wr = window.Vue.createBlock, us = window.Vue.createCommentVNode, Ka = window.Vue.createElementVNode, HA = window.Vue.withModifiers, fl = window.Vue.createVNode, E_ = window.Vue.toRef, sd = window.Vue.mergeProps, qn = window.Vue.withCtx, zA = window.Vue.h, YA = window.Vue.provide;
var gr = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const GA = {
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
}, jA = _r({
  props: GA,
  setup(e) {
    const r = ts("isCondensed", null), o = Za(() => r || e.condensed), s = ns(!1);
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
    FeatherRipple: mr
  }
}), ZA = ["aria-disabled"];
function KA(e, r, o, s, a, u) {
  const c = rn("FeatherRipple");
  return Wt(), hs("div", {
    class: k_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    En(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Wt(), wr(c, { key: 0 })) : us("", !0)
  ], 42, ZA);
}
var hl = /* @__PURE__ */ gr(jA, [["render", KA], ["__scopeId", "data-v-44d413dc"]]);
const JA = {
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
}, XA = _r({
  emits: ["delete"],
  props: JA,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: Qo
    };
  },
  components: {
    FeatherIcon: Z
  }
}), QA = { class: "chip-delete" }, eB = ["aria-label", "aria-describedby"];
function tB(e, r, o, s, a, u) {
  const c = rn("FeatherIcon");
  return Wt(), hs("span", QA, [
    Ka("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = HA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      fl(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, eB)
  ]);
}
var nB = /* @__PURE__ */ gr(XA, [["render", tB], ["__scopeId", "data-v-4bae6cb4"]]);
const rB = _r({
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
}), oB = ["title"];
function iB(e, r, o, s, a, u) {
  return Wt(), hs("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    En(e.$slots, "default", {}, void 0, !0)
  ], 8, oB);
}
var pl = /* @__PURE__ */ gr(rB, [["render", iB], ["__scopeId", "data-v-1a0445b2"]]);
const sB = {}, aB = {
  class: "chip-icon",
  role: "presentation"
};
function lB(e, r) {
  return Wt(), hs("span", aB, [
    En(e.$slots, "default", {}, void 0, !0)
  ]);
}
var wl = /* @__PURE__ */ gr(sB, [["render", lB], ["__scopeId", "data-v-2230176f"]]);
const _w = {
  delete: "Remove"
}, uB = _r({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => _w
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = ll(E_(e, "labels"), _w), s = Za(() => ue("chip-text")), a = () => {
      e.disabled || r.emit("click");
    }, u = qo({}, r.attrs);
    return e.disabled && delete u.onClick, S_(qo({}, o), {
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
    Chip: hl,
    DeleteIcon: nB,
    Label: pl,
    PreIcon: wl
  }
}), cB = ["aria-disabled"];
function dB(e, r, o, s, a, u) {
  const c = rn("PreIcon"), f = rn("Label"), w = rn("DeleteIcon"), v = rn("Chip");
  return Wt(), wr(v, sd(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: qn(() => [
      Ka("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Ka("span", sd(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Wt(), wr(c, { key: 0 }, {
            default: qn(() => [
              En(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : us("", !0),
          fl(f, { id: e.chipTextId }, {
            default: qn(() => [
              En(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, cB),
      e.canDelete ? (Wt(), wr(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : us("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var fB = /* @__PURE__ */ gr(uB, [["render", dB], ["__scopeId", "data-v-48b2704a"]]);
const hB = _r({
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
    Chip: hl,
    Label: pl,
    PreIcon: wl
  }
}), pB = ["aria-disabled"];
function wB(e, r, o, s, a, u) {
  const c = rn("PreIcon"), f = rn("Label"), w = rn("Chip");
  return Wt(), wr(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: qn(() => [
      Ka("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Wt(), wr(c, { key: 0 }, {
          default: qn(() => [
            En(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : us("", !0),
        fl(f, null, {
          default: qn(() => [
            En(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, pB)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var vB = /* @__PURE__ */ gr(hB, [["render", wB], ["__scopeId", "data-v-3e0c4eba"]]);
const mB = _r({
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
    const r = ns(!1), o = ns(!1), s = Za(() => ue("chip-label-id")), a = Za(() => r.value || o.value ? 0 : -1), u = ns(), c = () => {
      u.value.$el.focus();
    }, f = ts("register", (y) => {
    }), w = ts("blur", (y) => {
    }), v = ts("select", (y) => {
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
    Chip: hl,
    Label: pl,
    PreIcon: wl
  }
});
function _B(e, r, o, s, a, u) {
  const c = rn("PreIcon"), f = rn("Label"), w = rn("Chip");
  return Wt(), wr(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: k_(["focus hover", { selected: e.checked }]),
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
    default: qn(() => [
      e.hasIcon ? (Wt(), wr(c, { key: 0 }, {
        default: qn(() => [
          En(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : us("", !0),
      fl(f, { id: e.labelId }, {
        default: qn(() => [
          En(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var gB = /* @__PURE__ */ gr(mB, [["render", _B], ["__scopeId", "data-v-bbcc2f70"]]);
const $B = {
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
}, gw = _r({
  props: $B,
  setup() {
    return { format: ts("chipListFormat", "") };
  },
  render() {
    const e = (r) => zA(r, qo(qo({}, this.$props), this.$attrs), qo({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(fB) : this.format === "radio" ? e(gB) : e(vB);
  }
}), yB = {
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
}, bB = _r({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: yB,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    YA("chipListFormat", o);
    const s = o === "single";
    if (o === "radio") {
      const c = E_(e, "modelValue");
      return S_(qo({
        attrs: {
          role: "radiogroup"
        }
      }, C_(c, r.emit, e.label, {}, ns(""))), {
        single: s
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: s };
  }
}), VB = ["aria-label"];
function CB(e, r, o, s, a, u) {
  return Wt(), hs("div", sd(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    En(e.$slots, "default", {}, void 0, !0)
  ], 16, VB);
}
var SB = /* @__PURE__ */ gr(bB, [["render", CB], ["__scopeId", "data-v-1e06f41d"]]);
const kB = window.Vue.defineComponent, EB = window.Vue.normalizeClass, IB = window.Vue.openBlock, xB = window.Vue.createElementBlock, AB = window.Vue.createCommentVNode, BB = /* @__PURE__ */ kB({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, s) => r != null && r.severity ? (IB(), xB("span", {
      key: 0,
      class: EB(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : AB("", !0);
  }
});
const TB = /* @__PURE__ */ ce(BB, [["__scopeId", "data-v-e08880d6"]]), DB = window.Vue.defineComponent, Ni = window.Vue.unref, I_ = window.Vue.createTextVNode, cc = window.Vue.normalizeClass, dc = window.Vue.withCtx, NB = window.Vue.createVNode, LB = window.Vue.renderList, MB = window.Vue.Fragment, pa = window.Vue.openBlock, OB = window.Vue.createElementBlock, fc = window.Vue.createBlock, $w = window.Vue.createCommentVNode, PB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const RB = /* @__PURE__ */ I_(" ALL "), yw = window.Vue.ref, FB = window.Vue.watch, UB = window.Vue.computed, WB = window.Vue.reactive, qB = /* @__PURE__ */ DB({
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
    const o = e, s = yw(!1), a = UB(() => ge.exports.keys(ge.exports.groupBy(o.alarms, o.property))), u = yw(
      (w = o.preSelected) != null && w.length ? o.preSelected : ["all"]
    ), c = WB({
      alarms: o.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), r("selected-option", u.value);
    };
    return FB(o, () => {
      var v;
      u.value = (v = o.preSelected) != null && v.length ? o.preSelected : ["all"], c.alarms = o.alarms, s.value = !1;
    }), (v, _) => Ni(a).length > 0 ? (pa(), fc(Ni(SB), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: cc({ vertical: o.isVertical })
    }, {
      default: dc(() => [
        NB(Ni(gw), {
          class: cc({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: dc(() => [
            RB
          ]),
          _: 1
        }, 8, ["class"]),
        (pa(!0), OB(MB, null, LB(Ni(a), ($) => (pa(), fc(Ni(gw), {
          class: cc([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: dc(() => [
            e.property == "severity" ? (pa(), fc(TB, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : $w("", !0),
            I_(PB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : $w("", !0);
  }
});
const HB = /* @__PURE__ */ ce(qB, [["__scopeId", "data-v-d83b0f85"]]);
const zB = window.Vue.watch, YB = window.Vue.onBeforeUnmount, GB = window.Vue.ref, jB = window.Vue.onMounted, ZB = (e) => {
  const r = GB(!1);
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
  return jB(() => {
    const c = zB(r, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    YB(() => {
      c(), u();
    });
  }), r;
}, KB = window.Vue.watch, JB = window.Vue.onBeforeUnmount, XB = window.Vue.ref, QB = window.Vue.onMounted, eT = (e, r) => {
  const o = XB(!1), s = (c) => {
    c.target === window && r(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || r(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", s));
  };
  return QB(() => {
    const c = KB(o, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", s)) : u();
    }, {
      immediate: !0
    });
    JB(() => {
      c(), u();
    });
  }), o;
}, tT = window.Vue.watch, nT = window.Vue.onBeforeUnmount, rT = window.Vue.ref, x_ = (e, r) => {
  const o = rT(!1);
  let s = !1;
  const a = (w) => {
    r(w), s = !1;
  };
  function u(w) {
    s || (requestAnimationFrame(() => a(w)), s = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = tT([e, o], ([w, v], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), v && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return nT(() => {
    f(), c();
  }), o;
}, oT = window.Vue.defineComponent, Pn = window.Vue.ref, bw = window.Vue.toRef, iT = window.Vue.onMounted, sT = window.Vue.watch, Vw = window.Vue.computed, aT = window.Vue.nextTick, Cw = window.Vue.openBlock, Sw = window.Vue.createElementBlock, kw = window.Vue.renderSlot, lT = window.Vue.normalizeClass, uT = window.Vue.normalizeStyle, cT = window.Vue.createCommentVNode;
var dT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const fT = {
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
}, hT = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, pT = oT({
  emits: hT,
  props: fT,
  setup(e, r) {
    const o = Pn(), s = Pn(), a = bw(e, "open"), u = bw(e, "noExpand"), c = Pn("auto"), f = Pn(), w = Pn(e.triggerId || ue("feather-menu-trigger")), v = Pn(ue("feather-menu-dropdown")), _ = Pn(""), $ = Pn("");
    iT(() => {
      f.value = window;
    });
    const y = Pn(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), D = () => {
      if (!s.value)
        return;
      const x = o.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", aT(() => {
        let { height: R, width: O } = s.value.getBoundingClientRect();
        const H = T(), $e = H.height, de = H.width;
        e.fill && O < x.width ? (c.value = x.width + "px", O = x.width) : c.value = O + "px";
        let pe = 0;
        $e - x.bottom < R && x.top >= R ? (pe = x.top - R, e.cover && (pe += x.height)) : (pe = x.bottom, e.cover && (pe -= x.height));
        let ke = e.right ? x.right - O : x.left;
        !e.right && x.right >= O && de - x.left < O && (ke = x.right - O), e.right && x.right <= O && de - x.left > O && (ke = x.left), $.value = `${ke}px`, _.value = `${pe}px`, y.value = !1;
      });
    }, L = eT(o, (x) => {
      r.emit("outside-click", x);
    }), S = ZB(D), k = x_(f, D);
    sT([a, s], ([x, R]) => {
      x && R && D(), L.value = x, S.value = x, k.value = x;
    });
    const I = Vw(() => {
      const x = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (x["aria-controls"] = v.value), u.value || (x["aria-expanded"] = a.value ? "true" : "false"), x;
    }), P = Vw(() => ({
      click: (x) => {
        r.emit("trigger-click", x);
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
      calculatePosition: D,
      calculating: y
    };
  }
}), wT = ["data-ref-id"], vT = ["data-ref-id", "id"];
function mT(e, r, o, s, a, u) {
  return Cw(), Sw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    kw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Cw(), Sw("div", {
      key: 0,
      class: lT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: uT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      kw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, vT)) : cT("", !0)
  ], 8, wT);
}
var A_ = /* @__PURE__ */ dT(pT, [["render", mT], ["__scopeId", "data-v-f75af406"]]), _T = {
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
const gT = window.Vue.openBlock, $T = window.Vue.createElementBlock, yT = window.Vue.createElementVNode;
var bT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const VT = {}, CT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ST = /* @__PURE__ */ yT("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), kT = [
  ST
];
function ET(e, r) {
  return gT(), $T("svg", CT, kT);
}
var IT = /* @__PURE__ */ bT(VT, [["render", ET]]);
const xT = window.Vue.openBlock, AT = window.Vue.createElementBlock, Id = window.Vue.createElementVNode;
var BT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const TT = {}, DT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NT = /* @__PURE__ */ Id("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), LT = /* @__PURE__ */ Id("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), MT = /* @__PURE__ */ Id("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), OT = [
  NT,
  LT,
  MT
];
function PT(e, r) {
  return xT(), AT("svg", DT, OT);
}
var RT = /* @__PURE__ */ BT(TT, [["render", PT]]);
const FT = window.Vue.openBlock, UT = window.Vue.createElementBlock, WT = window.Vue.createElementVNode;
var qT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const HT = {}, zT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YT = /* @__PURE__ */ WT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), GT = [
  YT
];
function jT(e, r) {
  return FT(), UT("svg", zT, GT);
}
var vl = /* @__PURE__ */ qT(HT, [["render", jT]]);
const cs = function(e, r) {
  if (!e || !r)
    return;
  let o = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  o += parseInt(s.getPropertyValue("margin-top"), 10), o += parseInt(s.getPropertyValue("margin-bottom"), 10), r.scrollTop = e.offsetTop - r.getBoundingClientRect().height + o;
};
const te = {
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
const ZT = window.Vue.defineComponent, KT = window.Vue.openBlock, JT = window.Vue.createElementBlock, XT = window.Vue.normalizeClass, QT = window.Vue.pushScopeId, eD = window.Vue.popScopeId, ad = window.Vue.createElementVNode;
var tD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const nD = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, rD = {
  click: (e) => !0
}, oD = ZT({
  emits: rD,
  props: nD,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), B_ = (e) => (QT("data-v-07e020f5"), e = e(), eD(), e), iD = /* @__PURE__ */ B_(() => /* @__PURE__ */ ad("div", { class: "track" }, null, -1)), sD = /* @__PURE__ */ B_(() => /* @__PURE__ */ ad("div", { class: "switcher" }, [
  /* @__PURE__ */ ad("div", { class: "switch-circle" })
], -1)), aD = [
  iD,
  sD
];
function lD(e, r, o, s, a, u) {
  return KT(), JT("div", {
    class: XT(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, aD, 2);
}
var uD = /* @__PURE__ */ tD(oD, [["render", lD], ["__scopeId", "data-v-07e020f5"]]), cD = Object.defineProperty, dD = Object.defineProperties, fD = Object.getOwnPropertyDescriptors, Ew = Object.getOwnPropertySymbols, hD = Object.prototype.hasOwnProperty, pD = Object.prototype.propertyIsEnumerable, Iw = (e, r, o) => r in e ? cD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, xw = (e, r) => {
  for (var o in r || (r = {}))
    hD.call(r, o) && Iw(e, o, r[o]);
  if (Ew)
    for (var o of Ew(r))
      pD.call(r, o) && Iw(e, o, r[o]);
  return e;
}, Aw = (e, r) => dD(e, fD(r));
const xd = window.Vue.defineComponent, Mr = window.Vue.h, wD = window.Vue.openBlock, vD = window.Vue.createElementBlock, mD = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var T_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const _D = {
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
}, gD = xd({
  inheritAttrs: !1,
  props: _D,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Mr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = Mr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Mr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Mr(mr);
    if (this.asLi)
      return Mr("li", Aw(xw({}, this.$attrs), {
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
    const u = Mr("a", Aw(xw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, s, a]);
    return Mr("li", {}, [u]);
  }
});
var ps = /* @__PURE__ */ T_(gD, [["__scopeId", "data-v-7c46b2b3"]]);
xd({
  components: {
    FeatherListItem: ps
  }
});
const $D = {}, yD = { class: "feather-list" };
function bD(e, r) {
  return wD(), vD("ul", yD, [
    mD(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Ad = /* @__PURE__ */ T_($D, [["render", bD], ["__scopeId", "data-v-941a1d50"]]);
const VD = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, CD = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
xd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: VD,
  props: CD,
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
      (e.keyCode === te.SPACE || e.keyCode === te.ENTER) && this.updateValue(), e.keyCode === te.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: uD, FeatherListItem: ps }
});
var SD = Object.defineProperty, kD = Object.defineProperties, ED = Object.getOwnPropertyDescriptors, Bw = Object.getOwnPropertySymbols, ID = Object.prototype.hasOwnProperty, xD = Object.prototype.propertyIsEnumerable, Tw = (e, r, o) => r in e ? SD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, qt = (e, r) => {
  for (var o in r || (r = {}))
    ID.call(r, o) && Tw(e, o, r[o]);
  if (Bw)
    for (var o of Bw(r))
      xD.call(r, o) && Tw(e, o, r[o]);
  return e;
}, AD = (e, r) => kD(e, ED(r));
const si = window.Vue.defineComponent, he = window.Vue.openBlock, He = window.Vue.createElementBlock, St = window.Vue.createElementVNode, wn = window.Vue.toDisplayString, nn = window.Vue.createCommentVNode, Pe = window.Vue.resolveComponent, tn = window.Vue.createBlock, at = window.Vue.withCtx, Ho = window.Vue.Fragment, rs = window.Vue.renderList, kt = window.Vue.createVNode, Bd = window.Vue.withModifiers, Xr = window.Vue.normalizeClass, ld = window.Vue.renderSlot, D_ = window.Vue.createTextVNode, BD = window.Vue.pushScopeId, TD = window.Vue.popScopeId, N_ = window.Vue.reactive, L_ = window.Vue.nextTick, hc = window.Vue.markRaw, pc = window.Vue.toRef, Dw = window.Vue.computed, DD = window.Vue.toRefs, So = window.Vue.ref, wc = window.Vue.mergeProps, Nw = window.Vue.toHandlers, wa = window.Vue.withDirectives, va = window.Vue.vShow;
var ml = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Td = {
  query: {
    type: String
  }
}, oo = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ND = si({
  mixins: [],
  props: qt(qt({
    text: {
      type: String,
      required: !0
    }
  }, ml), Td),
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
}), LD = {
  key: 0,
  class: "highlight"
}, MD = { key: 1 };
function OD(e, r, o, s, a, u) {
  return he(), He("span", null, [
    St("span", null, wn(e.beginning), 1),
    e.highlighted ? (he(), He("span", LD, wn(e.highlighted), 1)) : nn("", !0),
    e.end ? (he(), He("span", MD, wn(e.end), 1)) : nn("", !0)
  ]);
}
var M_ = /* @__PURE__ */ oo(ND, [["render", OD], ["__scopeId", "data-v-8abe2492"]]);
const PD = si({
  emits: ["select", "deselect"],
  props: qt(qt({
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
  }, ml), Td),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        cs(r, o.$el);
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
    FeatherList: Ad,
    FeatherListItem: ps,
    Highlighter: M_
  }
}), RD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function FD(e, r, o, s, a, u) {
  const c = Pe("Highlighter"), f = Pe("FeatherListItem"), w = Pe("FeatherList");
  return he(), tn(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: at(() => [
      (he(!0), He(Ho, null, rs(e.items, (v, _) => (he(), He(Ho, {
        key: v[e.textProp]
      }, [
        kt(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(_),
          selected: e.isSelected(v),
          onClick: Bd(($) => e.select(v), ["stop"])
        }, {
          default: at(() => [
            kt(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (he(), He("span", RD, wn(e.newLabel), 1)) : nn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (he(), He("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : nn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var UD = /* @__PURE__ */ oo(PD, [["render", FD], ["__scopeId", "data-v-f623434a"]]);
const WD = si({
  emits: ["select"],
  props: qt(qt({
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
  }, ml), Td),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        cs(r, o);
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
    Highlighter: M_
  }
}), qD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, HD = ["aria-multiselectable"], zD = { role: "row" }, YD = ["aria-selected", "onClick"], GD = ["id", "aria-selected"], jD = { key: 1 };
function ZD(e, r, o, s, a, u) {
  const c = Pe("Highlighter");
  return he(), He("div", qD, [
    St("table", {
      class: Xr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      St("thead", null, [
        St("tr", zD, [
          (he(!0), He(Ho, null, rs(e.config, (f) => (he(), He("th", {
            key: f.title
          }, wn(f.title), 1))), 128))
        ])
      ]),
      St("tbody", null, [
        (he(!0), He(Ho, null, rs(e.items, (f, w) => (he(), He("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Xr({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: Bd((v) => e.select(f), ["stop"])
        }, [
          (he(!0), He(Ho, null, rs(e.config, (v, _) => (he(), He("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Xr({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (he(), tn(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (he(), He("p", jD, wn(f[v.prop]), 1))
          ], 10, GD))), 128))
        ], 10, YD))), 128))
      ])
    ], 10, HD)
  ], 512);
}
var KD = /* @__PURE__ */ oo(WD, [["render", ZD], ["__scopeId", "data-v-58c88fd1"]]);
const JD = si({
  components: {
    FeatherList: Ad,
    FeatherListItem: ps
  }
});
function XD(e, r, o, s, a, u) {
  const c = Pe("FeatherListItem"), f = Pe("FeatherList");
  return he(), tn(f, { class: "result-list" }, {
    default: at(() => [
      kt(c, { "as-li": "" }, {
        default: at(() => [
          ld(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var QD = /* @__PURE__ */ oo(JD, [["render", XD], ["__scopeId", "data-v-06b752c6"]]);
const eN = si({
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
    FeatherIcon: Z,
    Cancel: Qo,
    BaseChip: hl,
    BaseChipLabel: pl,
    BaseChipPreIcon: wl
  }
});
function tN(e, r, o, s, a, u) {
  const c = Pe("FeatherIcon"), f = Pe("BaseChipPreIcon"), w = Pe("BaseChipLabel"), v = Pe("Cancel"), _ = Pe("BaseChip");
  return he(), tn(_, {
    class: Xr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: at(() => [
      e.showPreIcon ? (he(), tn(f, { key: 0 }, {
        default: at(() => {
          var $, y;
          return [
            kt(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : nn("", !0),
      kt(w, null, {
        default: at(() => [
          D_(wn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? nn("", !0) : (he(), He("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = Bd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        kt(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: at(() => [
            kt(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var nN = /* @__PURE__ */ oo(eN, [["render", tN], ["__scopeId", "data-v-e0fc6ac0"]]);
const rN = {}, oN = (e) => (BD("data-v-aa720e06"), e = e(), TD(), e), iN = { class: "spinner-container" }, sN = /* @__PURE__ */ oN(() => /* @__PURE__ */ St("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ St("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), aN = [
  sN
];
function lN(e, r) {
  return he(), He("div", iN, aN);
}
var uN = /* @__PURE__ */ oo(rN, [["render", lN], ["__scopeId", "data-v-aa720e06"]]), _l = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(_l || {});
const O_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, cN = qt(qt(qt({
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
    validator: (e) => !!_l[e]
  },
  labels: {
    type: Object,
    default: () => O_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, ml), oi), cl), dN = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, fN = (e, r, o, s) => {
  if (o.toLowerCase() === _l.multi) {
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
}, hN = () => {
  const e = N_({
    row: -1
  }), r = (u) => {
    L_(() => {
      e.row = u;
    });
  }, o = (u, c) => {
    if (u.keyCode === te.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), r(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), r(f + 1);
      }
      return !0;
    }
    if (u.keyCode === te.UP) {
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
}, pN = (e) => {
  const r = N_({
    row: -1,
    col: -1
  }), o = (c, f) => {
    L_(() => {
      r.col = f, r.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === te.DOWN) {
      if (c.preventDefault(), r.row === -1)
        a(), o(0, 0);
      else if (r.row + 1 <= f.length - 1) {
        const w = r.row, v = r.col;
        a(), o(w + 1, v);
      }
      return !0;
    }
    if (c.keyCode === te.UP) {
      if (c.preventDefault(), r.row === 0)
        a();
      else if (r.row > 0) {
        const w = r.row, v = r.col;
        a(), o(w - 1, v);
      }
      return !0;
    }
    if (c.keyCode === te.RIGHT && r.row !== -1) {
      if (c.preventDefault(), r.col + 1 <= e.length - 1) {
        const w = r.col, v = r.row;
        a(), o(v, w + 1);
      } else if (r.col <= e.length - 1 && r.row + 1 <= f.length - 1) {
        const w = r.row;
        a(), o(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === te.LEFT && r.row !== -1) {
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
    if (c.keyCode === te.END && r.row !== -1) {
      c.preventDefault();
      const w = r.row;
      return a(), o(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === te.HOME && r.row !== -1) {
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
}, wN = si({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: dN,
  props: cN,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== _l.multi;
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
      return hc(IT);
    },
    minCharIcon() {
      return hc(RT);
    },
    dropdownIcon() {
      return hc(vl);
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
        cs(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          cs(this.inputRef, this.scrollContainer);
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
      o !== void 0 && (to(this.typingTimeout), this.typingTimeout = eo(() => {
        this.query = o, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const r = () => {
        this.activeChipIndex = -1;
      }, o = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === te.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        r(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === te.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), r();
        return;
      }
      if (e.keyCode === te.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === te.ENTER || e.keyCode === te.SPACE || e.keyCode === te.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === te.ESCAPE) {
        this.forceCloseResults = !0, o(), r();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === te.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (o(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (o(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === te.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (o(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (o(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === te.DELETE || e.keyCode === te.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), o(), r());
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
    const o = ll(pc(e, "labels"), O_);
    ii(e), dl(e);
    let s;
    e.gridConfig ? s = pN(e.gridConfig) : s = hN();
    const a = pc(e, "id"), u = Dw(() => a.value ? a.value : ue("feather-autocomplete-input")), { validate: c } = ni(u, pc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = DD(e), T = So(!1), D = So(!1), M = So(!1), L = So(""), S = So([]), k = So(), I = Dw(() => k.value), P = () => {
      T.value && !D.value && (L.value && L.value.length >= y.value && r.emit("search", L.value), y.value <= 0 && r.emit("search", L.value || ""), S.value = [], s.reset());
    }, x = fN({
      selectionLimit: f,
      selectionLimitReached: D,
      modelValue: w,
      textProp: v,
      allowNew: _,
      forceCloseResults: M,
      query: L,
      internalResults: S,
      input: I,
      emitSearch: P
    }, s, $.value, r.emit);
    return AD(qt(qt({}, o), ri(r.attrs)), {
      query: L,
      internalResults: S,
      selectionLimitReached: D,
      forceCloseResults: M,
      hasFocus: T,
      strategy: x,
      emitSearch: P,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: k,
      incomingId: a,
      inputRef: I,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: ul,
    InputSubText: ti,
    AutocompleteResults: UD,
    AutocompleteResultsGrid: KD,
    Chip: nN,
    MenuMessage: QD,
    FeatherIcon: Z,
    FeatherMenu: A_,
    Spinner: uN
  }
}), vN = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, mN = ["id"], _N = { "data-ref-id": "feather-autocomplete-no-results" }, gN = { "data-ref-id": "feather-autocomplete-selection-limit" }, $N = { "data-ref-id": "feather-autocomplete-min-char" };
function yN(e, r, o, s, a, u) {
  const c = Pe("FeatherIcon"), f = Pe("Chip"), w = Pe("InputWrapper"), v = Pe("AutocompleteResults"), _ = Pe("AutocompleteResultsGrid"), $ = Pe("MenuMessage"), y = Pe("Spinner"), T = Pe("FeatherMenu"), D = Pe("InputSubText");
  return he(), He("div", wc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    kt(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Xr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: at(({ attrs: M, on: L }) => [
        kt(w, wc(qt(qt({}, M), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Nw(L), { ref: "scroll" }), {
          pre: at(() => [
            ld(e.$slots, "pre", {}, () => [
              kt(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: at(() => [
            kt(c, {
              icon: e.dropdownIcon,
              class: Xr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: at(() => [
            St("div", {
              class: Xr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              St("div", vN, null, 512),
              St("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, wn(e.selectedDescribedByText), 9, mN),
              (he(!0), He(Ho, null, rs(e.modelValueList, (S, k) => wa((he(), tn(f, {
                key: S[e.textProp],
                role: "button",
                id: k === e.activeChipIndex ? e.activeChipId : null,
                focused: k === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (I) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [va, !e.singleSelect]
              ])), 128)),
              St("textarea", wc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Nw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: at(() => [
        e.gridConfig ? nn("", !0) : wa((he(), tn(v, {
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
          [va, e.showResults]
        ]),
        e.gridConfig ? wa((he(), tn(_, {
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
          [va, e.showResults]
        ]) : nn("", !0),
        e.showNoResults ? (he(), tn($, { key: 2 }, {
          default: at(() => [
            St("span", _N, wn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : nn("", !0),
        e.showSelectionLimit ? (he(), tn($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: at(() => [
            kt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            St("span", gN, wn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : nn("", !0),
        e.minChar ? wa((he(), tn($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: at(() => [
            kt(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            St("span", $N, [
              ld(e.$slots, "min-char", {}, () => [
                D_(wn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [va, e.showMinCharWarning]
        ]) : nn("", !0),
        e.showLoading ? (he(), tn(y, { key: 5 })) : nn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    kt(D, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var bN = /* @__PURE__ */ oo(wN, [["render", yN], ["__scopeId", "data-v-43a7e951"]]);
var VN = Object.defineProperty, CN = Object.defineProperties, SN = Object.getOwnPropertyDescriptors, Lw = Object.getOwnPropertySymbols, kN = Object.prototype.hasOwnProperty, EN = Object.prototype.propertyIsEnumerable, Mw = (e, r, o) => r in e ? VN(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Pa = (e, r) => {
  for (var o in r || (r = {}))
    kN.call(r, o) && Mw(e, o, r[o]);
  if (Lw)
    for (var o of Lw(r))
      EN.call(r, o) && Mw(e, o, r[o]);
  return e;
}, P_ = (e, r) => CN(e, SN(r));
const R_ = window.Vue.defineComponent, IN = window.Vue.ref, os = window.Vue.computed, xN = window.Vue.reactive, Ow = window.Vue.watch, vc = window.Vue.inject, F_ = window.Vue.resolveComponent, ud = window.Vue.openBlock, U_ = window.Vue.createElementBlock, vr = window.Vue.createElementVNode, AN = window.Vue.createBlock, BN = window.Vue.createCommentVNode, W_ = window.Vue.renderSlot, TN = window.Vue.pushScopeId, DN = window.Vue.popScopeId, mc = window.Vue.toRef, Pw = window.Vue.mergeProps, NN = window.Vue.toDisplayString, LN = window.Vue.createVNode;
var q_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const MN = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, ON = R_({
  props: MN,
  setup(e) {
    const r = IN(), o = () => {
      r.value.focus();
    }, s = os(() => ue("feather-radio-button")), a = xN({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = os(() => ue("radio-label-id")), c = os(() => a.first || a.checked ? 0 : -1);
    Ow(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Ow(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = vc("register", ($) => {
    }), w = vc("blur", ($) => {
    }), v = vc("select", ($) => {
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
    FeatherRipple: mr
  }
}), PN = (e) => (TN("data-v-24790cf0"), e = e(), DN(), e), RN = { class: "layout-container" }, FN = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], UN = { class: "radio hover focus" }, WN = /* @__PURE__ */ PN(() => /* @__PURE__ */ vr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ vr("svg", { class: "dot" }, [
    /* @__PURE__ */ vr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), qN = ["id"];
function HN(e, r, o, s, a, u) {
  const c = F_("feather-ripple");
  return ud(), U_("div", RN, [
    vr("div", {
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
      vr("div", UN, [
        WN,
        e.vm.disabled ? BN("", !0) : (ud(), AN(c, {
          key: 0,
          center: ""
        }))
      ]),
      vr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        W_(e.$slots, "default", {}, void 0, !0)
      ], 8, qN)
    ], 40, FN)
  ]);
}
var cd = /* @__PURE__ */ q_(ON, [["render", HN], ["__scopeId", "data-v-24790cf0"]]);
const zN = P_(Pa({}, oi), {
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
}), YN = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, GN = R_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: zN,
  emits: YN,
  setup(e, r) {
    ii(e);
    const o = mc(e, "error"), s = mc(e, "modelValue"), a = os(() => ue("feather-input-description")), u = os(() => {
      const c = P_(Pa({}, r.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!o.value), c;
    });
    return Pa(Pa({
      descriptionId: a,
      attrs: u
    }, C_(s, r.emit, e.label, e.schema, mc(e, "error"))), ri(r.attrs));
  },
  components: {
    InputSubText: ti
  }
}), jN = ["for"], ZN = ["id"];
function KN(e, r, o, s, a, u) {
  const c = F_("InputSubText");
  return ud(), U_("div", Pw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    vr("label", {
      for: e.groupId,
      class: "group-label"
    }, NN(e.label), 9, jN),
    vr("div", Pw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      W_(e.$slots, "default", {}, void 0, !0)
    ], 16, ZN),
    LN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var H_ = /* @__PURE__ */ q_(GN, [["render", KN], ["__scopeId", "data-v-6775aeb9"]]);
const JN = window.Vue.defineComponent, XN = window.Vue.renderList, QN = window.Vue.Fragment, Rw = window.Vue.openBlock, eL = window.Vue.createElementBlock, tL = window.Vue.toDisplayString, nL = window.Vue.createTextVNode, Fw = window.Vue.unref, Uw = window.Vue.withCtx, rL = window.Vue.createVNode, oL = window.Vue.createBlock, iL = window.Vue.watch, sL = window.Vue.ref, aL = /* @__PURE__ */ JN({
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
    ], a = sL(o.preSelected || s[0].id);
    return iL(o, () => {
      o.preSelected && (a.value = o.preSelected);
    }), (u, c) => (Rw(), oL(Fw(H_), {
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
      default: Uw(() => [
        (Rw(), eL(QN, null, XN(s, (f) => rL(Fw(cd), {
          value: f.id,
          key: f.id
        }, {
          default: Uw(() => [
            nL(tL(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const lL = /* @__PURE__ */ ce(aL, [["__scopeId", "data-v-0363302c"]]);
var uL = Object.defineProperty, cL = Object.defineProperties, dL = Object.getOwnPropertyDescriptors, Ww = Object.getOwnPropertySymbols, fL = Object.prototype.hasOwnProperty, hL = Object.prototype.propertyIsEnumerable, qw = (e, r, o) => r in e ? uL(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Li = (e, r) => {
  for (var o in r || (r = {}))
    fL.call(r, o) && qw(e, o, r[o]);
  if (Ww)
    for (var o of Ww(r))
      hL.call(r, o) && qw(e, o, r[o]);
  return e;
}, Hw = (e, r) => cL(e, dL(r));
const pL = window.Vue.defineComponent, wL = window.Vue.inject, Mi = window.Vue.h;
var vL = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const mL = {
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
}, _L = pL({
  inheritAttrs: !1,
  props: mL,
  setup() {
    return { hasTooltip: wL("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, r = this.asAnchor ? "a" : "button", o = {}, s = Li({}, this.$attrs);
    o.attrs = s || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    o.class = [this.$attrs.class].concat(a), this.$slots.icon && o.class.push("has-icon");
    let u = Mi(mr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), Mi(r, Hw(Li(Li({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Mi(mr, { center: !0 })
      ]);
    }
    const c = Mi("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Mi(r, Hw(Li(Li({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var le = /* @__PURE__ */ vL(_L, [["__scopeId", "data-v-702d1074"]]);
const gL = window.Vue.openBlock, $L = window.Vue.createElementBlock, yL = window.Vue.createElementVNode;
var bL = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const VL = {}, CL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SL = /* @__PURE__ */ yL("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), kL = [
  SL
];
function EL(e, r) {
  return gL(), $L("svg", CL, kL);
}
var IL = /* @__PURE__ */ bL(VL, [["render", EL]]);
const xL = window.Vue.openBlock, AL = window.Vue.createElementBlock, BL = window.Vue.createElementVNode;
var TL = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const DL = {}, NL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, LL = /* @__PURE__ */ BL("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), ML = [
  LL
];
function OL(e, r) {
  return xL(), AL("svg", NL, ML);
}
var PL = /* @__PURE__ */ TL(DL, [["render", OL]]);
const RL = window.Vue.openBlock, FL = window.Vue.createElementBlock, UL = window.Vue.createElementVNode;
var WL = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const qL = {}, HL = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zL = /* @__PURE__ */ UL("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), YL = [
  zL
];
function GL(e, r) {
  return RL(), FL("svg", HL, YL);
}
var z_ = /* @__PURE__ */ WL(qL, [["render", GL]]);
const jL = window.Vue.defineComponent, $n = window.Vue.unref, Or = window.Vue.createVNode, zw = window.Vue.toDisplayString, Un = window.Vue.createElementVNode, Y_ = window.Vue.createTextVNode, Yw = window.Vue.openBlock, Gw = window.Vue.createElementBlock, ZL = window.Vue.createCommentVNode, KL = window.Vue.withCtx, JL = window.Vue.vShow, XL = window.Vue.normalizeClass, QL = window.Vue.withDirectives, e3 = window.Vue.Fragment, t3 = window.Vue.pushScopeId, n3 = window.Vue.popScopeId, G_ = (e) => (t3("data-v-b1dc2670"), e = e(), n3(), e), r3 = /* @__PURE__ */ Y_(" Filters "), o3 = { class: "count" }, i3 = { class: "results" }, s3 = { class: "total" }, a3 = /* @__PURE__ */ Y_(" Reset "), l3 = /* @__PURE__ */ G_(() => /* @__PURE__ */ Un("div", { class: "title" }, "By Severities:", -1)), u3 = /* @__PURE__ */ G_(() => /* @__PURE__ */ Un("div", { class: "title" }, "By Start Date:", -1)), Pr = window.Vue.ref, c3 = window.Vue.reactive, d3 = window.Vue.markRaw, jw = window.Vue.watch, f3 = /* @__PURE__ */ jL({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: r }) {
    const o = e, s = d3({
      FilterAlt: IL,
      ExpandLess: PL,
      ExpandMore: vl,
      Refresh: z_
    }), a = vn(), u = Pr(o.isOpen), c = Pr(["all"]), f = Pr(1), w = Pr(o.list), v = Pr(!1), _ = Pr(0), $ = Pr(null), y = c3({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var R, O;
      o.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((R = a.filters) == null ? void 0 : R.severities) && !((O = a.filters) != null && O.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, I());
    }, D = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    jw(
      () => a.nodes,
      () => {
        D();
      }
    ), jw(o, () => {
      w.value = o.list, T();
    });
    const M = (R) => {
      c.value = R, I();
    }, L = (R) => {
      f.value = R, I();
    }, S = (R) => {
      if (!R)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((O) => O.label.toLowerCase().indexOf(R) > -1).map((O) => ({
        _text: O.label,
        id: O.id
      })), v.value = !1;
    }, k = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, r("filtered-list", o.list), o.isOpen || (u.value = !1), o.saveFilters && (a.filters = null), w.value = o.list;
    }, I = () => {
      _.value = 0;
      let R = o.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, o.isSituation ? R = R.map((O) => {
        if (O.relatedAlarms.filter(
          (de) => {
            var pe;
            return de.nodeLabel === ((pe = y.nodeSelectedValue) == null ? void 0 : pe._text);
          }
        ).length > 0)
          return O;
      }).filter((O) => O) : R = R.filter(
        (O) => {
          var H;
          return O.nodeLabel === ((H = y.nodeSelectedValue) == null ? void 0 : H._text);
        }
      )), c.value.includes("all") || (_.value++, R = R.filter(
        (O) => c.value.includes(O.severity)
      )), f.value !== 1 && (_.value++, R = J2(
        f.value,
        R
      )), w.value = R, o.saveFilters && P(), r("filtered-list", R);
    }, P = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, x = () => {
      u.value = !u.value;
    };
    return (R, O) => (Yw(), Gw(e3, null, [
      o.isOpen ? ZL("", !0) : (Yw(), Gw("div", {
        key: 0,
        class: "btn-filter",
        onClick: x
      }, [
        Un("div", null, [
          Or($n(Z), {
            icon: $n(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          r3,
          Un("span", o3, zw(_.value), 1)
        ]),
        Or($n(Z), {
          icon: u.value ? $n(s).ExpandLess : $n(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      QL(Un("div", {
        class: XL(["filters", { collapsed: !o.isOpen }])
      }, [
        Un("div", i3, [
          Un("div", s3, "Results: " + zw($n(w).length), 1),
          Or($n(le), {
            class: "btn-reset",
            onClick: k
          }, {
            default: KL(() => [
              Or($n(Z), {
                icon: $n(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              a3
            ]),
            _: 1
          })
        ]),
        Un("div", null, [
          Or($n(bN), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              O[0] || (O[0] = (H) => y.nodeSelectedValue = H),
              I
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          l3,
          Or(HB, {
            alarms: o.list,
            onSelectedOption: M,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Un("div", null, [
            u3,
            Or(lL, {
              onFilterDateSelected: L,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [JL, u.value]
      ])
    ], 64));
  }
});
const ai = /* @__PURE__ */ ce(f3, [["__scopeId", "data-v-b1dc2670"]]), h3 = window.Vue.openBlock, p3 = window.Vue.createElementBlock, w3 = window.Vue.createElementVNode;
var v3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const m3 = {}, _3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, g3 = /* @__PURE__ */ w3("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), $3 = [
  g3
];
function y3(e, r) {
  return h3(), p3("svg", _3, $3);
}
var gl = /* @__PURE__ */ v3(m3, [["render", y3]]);
const b3 = window.Vue.openBlock, V3 = window.Vue.createElementBlock, j_ = window.Vue.createElementVNode;
var C3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const S3 = {}, k3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, E3 = /* @__PURE__ */ j_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), I3 = /* @__PURE__ */ j_("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), x3 = [
  E3,
  I3
];
function A3(e, r) {
  return b3(), V3("svg", k3, x3);
}
var B3 = /* @__PURE__ */ C3(S3, [["render", A3]]);
const T3 = window.Vue.openBlock, D3 = window.Vue.createElementBlock, N3 = window.Vue.createElementVNode;
var L3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const M3 = {}, O3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, P3 = /* @__PURE__ */ N3("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), R3 = [
  P3
];
function F3(e, r) {
  return T3(), D3("svg", O3, R3);
}
var U3 = /* @__PURE__ */ L3(M3, [["render", F3]]);
const $r = () => window.VRouter || zg;
const W3 = window.Vue.openBlock, q3 = window.Vue.createElementBlock, H3 = window.Vue.pushScopeId, z3 = window.Vue.popScopeId, Zw = window.Vue.createElementVNode;
var Y3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const G3 = {}, j3 = (e) => (H3("data-v-2263be39"), e = e(), z3(), e), Z3 = { class: "spinner-container" }, K3 = /* @__PURE__ */ j3(() => /* @__PURE__ */ Zw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Zw("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), J3 = [
  K3
];
function X3(e, r) {
  return W3(), q3("div", Z3, J3);
}
var zo = /* @__PURE__ */ Y3(G3, [["render", X3], ["__scopeId", "data-v-2263be39"]]);
const Q3 = window.Vue.defineComponent, _c = window.Vue.unref, eM = window.Vue.createVNode, tM = window.Vue.createElementVNode, nM = window.Vue.withCtx, rM = window.Vue.openBlock, oM = window.Vue.createBlock, iM = window.Vue.pushScopeId, sM = window.Vue.popScopeId, aM = (e) => (iM("data-v-fba500de"), e = e(), sM(), e), lM = /* @__PURE__ */ aM(() => /* @__PURE__ */ tM("span", null, "New Situation", -1)), uM = window.Vue.markRaw, cM = /* @__PURE__ */ Q3({
  __name: "NewSituationBtn",
  setup(e) {
    const r = $r(), o = uM({
      Add: gl
    }), s = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (a, u) => (rM(), oM(_c(le), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: nM(() => [
        eM(_c(Z), {
          icon: _c(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        lM
      ]),
      _: 1
    }));
  }
});
const Z_ = /* @__PURE__ */ ce(cM, [["__scopeId", "data-v-fba500de"]]), dM = "/whoami", fM = async () => {
  try {
    const e = await lt.get(dM);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, hM = window.Pinia.defineStore, pM = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, no = hM("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    claudeConfig: null,
    claudeUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await fM();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await Q2();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, r, o) {
      const s = {
        ...pM,
        ...o,
        distanceMeasureName: r ? et.HELLINGER_OPTION : et.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return r || (s.hellingerW = null, s.hellingerBias = null), await eI(s) ? (this.engineInfo = s, !0) : !1;
    },
    async getClaudeConfig() {
      const e = await tI();
      return e && (this.claudeConfig = e), e;
    },
    async setClaudeConfig(e) {
      const r = await nI(e);
      return r ? (this.claudeConfig = r, !0) : !1;
    },
    async getClaudeUsage(e = 30) {
      const r = await oI(e);
      return r && (this.claudeUsage = r), r;
    }
  }
}), wM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", vM = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", mM = window.Vue.defineComponent, ko = window.Vue.unref, Eo = window.Vue.openBlock, Io = window.Vue.createElementBlock, _M = window.Vue.createCommentVNode, K_ = window.Vue.createTextVNode, Kw = window.Vue.Fragment, J_ = window.Vue.createElementVNode, gM = window.Vue.pushScopeId, $M = window.Vue.popScopeId, yM = (e) => (gM("data-v-b87e4e5c"), e = e(), $M(), e), bM = ["src"], VM = { class: "engine" }, CM = /* @__PURE__ */ K_(" ENGINE "), SM = {
  key: 0,
  class: "type"
}, kM = {
  key: 1,
  class: "type"
}, EM = /* @__PURE__ */ K_(" ENGINE "), IM = /* @__PURE__ */ yM(() => /* @__PURE__ */ J_("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Jw = window.Vue.computed, xM = /* @__PURE__ */ mM({
  __name: "ConfigurationInfo",
  setup(e) {
    const r = $r(), o = no(), s = () => {
      r.push({
        name: "settings"
      });
    }, a = Jw(() => {
      var c;
      return !!((c = o.engineInfo) != null && c.engineName);
    }), u = Jw(
      () => {
        var c;
        return ((c = o.engineInfo) == null ? void 0 : c.engineName) == et.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (Eo(), Io("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      ko(a) ? (Eo(), Io("img", {
        key: 0,
        src: ko(u) ? ko(vM) : ko(wM),
        class: "icon-type"
      }, null, 8, bM)) : _M("", !0),
      J_("div", VM, [
        ko(a) ? (Eo(), Io(Kw, { key: 0 }, [
          CM,
          ko(u) ? (Eo(), Io("div", SM, "CLUSTERING")) : (Eo(), Io("div", kM, "DEEP LEARNING"))
        ], 64)) : (Eo(), Io(Kw, { key: 1 }, [
          EM,
          IM
        ], 64))
      ])
    ]));
  }
});
const AM = /* @__PURE__ */ ce(xM, [["__scopeId", "data-v-b87e4e5c"]]);
const BM = {}, TM = window.Vue.openBlock, DM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NM = { class: "empty" };
function LM(e, r) {
  return TM(), DM("div", NM, "No results found.");
}
const li = /* @__PURE__ */ ce(BM, [["render", LM], ["__scopeId", "data-v-725433ac"]]), MM = window.Vue.defineComponent, bn = window.Vue.createElementVNode, Oi = window.Vue.unref, Rr = window.Vue.createVNode, OM = window.Vue.withCtx, ma = window.Vue.toDisplayString, Rn = window.Vue.openBlock, Fr = window.Vue.createElementBlock, Xw = window.Vue.createCommentVNode, Qw = window.Vue.createBlock, PM = window.Vue.renderList, RM = window.Vue.Fragment, FM = window.Vue.pushScopeId, UM = window.Vue.popScopeId, X_ = (e) => (FM("data-v-2675e2f8"), e = e(), UM(), e), WM = { class: "list-main" }, qM = { class: "header" }, HM = /* @__PURE__ */ X_(() => /* @__PURE__ */ bn("h2", null, "Situation List", -1)), zM = { class: "link-btns" }, YM = /* @__PURE__ */ X_(() => /* @__PURE__ */ bn("span", null, "View Unassociated Alarms", -1)), GM = { class: "content" }, jM = { class: "left-filters" }, ZM = { class: "container" }, KM = { class: "autocomplete" }, JM = { key: 0 }, XM = { key: 1 }, QM = { key: 0 }, e4 = { class: "situation-list" }, t4 = {
  key: 0,
  class: "footer-pager"
}, n4 = window.Vue.reactive, _a = window.Vue.ref, r4 = window.Vue.watch, o4 = window.Vue.markRaw, i4 = /* @__PURE__ */ MM({
  __name: "SituationList",
  setup(e) {
    const r = o4({
      Add: gl,
      View: B3,
      Settings: U3
    }), o = $r(), s = vn(), a = no();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = n4({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = _a(!0), w = _a(0), v = _a(1), _ = _a(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    r4(
      () => s.situations,
      () => {
        f.value = !1, $(), M(s.situations);
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
    }, D = () => {
      o.push({
        name: "viewUnassignedAlarms"
      });
    }, M = (S) => {
      _.value = S.length, c.allSituations = ge.exports.chunk(S, u);
      const k = S.map((I) => I.id);
      s.filteredSituations = k, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, L = (S) => {
      S.length ? M(S) : c.situations = [];
    };
    return (S, k) => {
      var I;
      return Rn(), Fr("div", WM, [
        bn("div", qM, [
          HM,
          bn("div", zM, [
            Rr(Oi(le), {
              class: "view-situation-btn",
              onClick: k[0] || (k[0] = () => D())
            }, {
              default: OM(() => [
                Rr(Oi(Z), {
                  icon: Oi(r).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                YM
              ]),
              _: 1
            }),
            Rr(Z_),
            Rr(AM)
          ])
        ]),
        bn("div", GM, [
          bn("div", jM, [
            Rr(ai, {
              list: Oi(s).situations,
              onFilteredList: L,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          bn("div", ZM, [
            bn("div", KM, [
              c.situations && c.situations.length ? (Rn(), Fr("div", JM, " Result: " + ma((I = c.situations) == null ? void 0 : I.length) + " of " + ma(_.value), 1)) : Xw("", !0)
            ]),
            f.value ? (Rn(), Qw(Oi(zo), {
              key: 0,
              class: "spinner"
            })) : (Rn(), Fr("div", XM, [
              c.situations && c.situations.length ? (Rn(), Fr("div", QM, [
                bn("div", e4, [
                  (Rn(!0), Fr(RM, null, PM(c.situations, (P) => (Rn(), Fr("div", {
                    class: "card",
                    key: P.id
                  }, [
                    Rr(g_, {
                      onClick: () => T(P.id),
                      "situation-info": P
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Rn(), Fr("div", t4, [
                  bn("div", null, "Page: " + ma(w.value + 1) + " of " + ma(v.value), 1),
                  Rr($x, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Xw("", !0)
              ])) : (Rn(), Qw(li, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const s4 = /* @__PURE__ */ ce(i4, [["__scopeId", "data-v-2675e2f8"]]);
const ga = window.Vue.ref, a4 = window.Vue.inject, l4 = window.Vue.computed, u4 = window.Vue.onMounted, Q_ = {
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
}, eg = (e) => {
  const r = ga(!1), o = ga(), s = ga(e.controls), a = ga(e.id), u = () => {
    o.value && o.value.focus();
  }, c = a4("registerTab");
  u4(() => {
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
  const f = l4(() => ({
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
}, ev = window.Vue.ref, c4 = window.Vue.toRef, d4 = window.Vue.watch, tv = window.Vue.provide, tg = {
  prop: "modelValue",
  event: "update:modelValue"
}, ng = {
  "update:modelValue": (e) => !0
}, rg = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, og = (e, r) => {
  const o = c4(e, "modelValue"), s = ev(e.modelValue), a = ev([]);
  d4(o, (D) => {
    w(D);
  });
  const u = (D) => {
    D.preventDefault(), a.value.some((M, L) => M.tab && M.tab.el.contains(D.target) ? (f(L), w(L), !0) : !1);
  }, c = (D) => {
    if (((H) => H.shiftKey || H.ctrlKey || H.metaKey || H.altKey)(D))
      return;
    const L = D.keyCode, S = (H) => {
      H.stopPropagation(), H.preventDefault();
    }, k = a.value.filter((H) => H.tab && !H.tab.disabled), I = a.value.findIndex((H) => H.tab && H.tab.el.contains(document.activeElement));
    let P = I !== -1 ? I : s.value;
    const x = [te.RIGHT], R = [te.LEFT], O = [te.ENTER, te.SPACE];
    e.vertical && (x.push(te.DOWN), R.push(te.UP)), x.indexOf(L) > -1 ? (P++, P >= k.length && (P = 0), S(D), f(a.value.indexOf(k[P]))) : R.indexOf(L) > -1 && (P--, P < 0 && (P = k.length - 1), S(D), f(a.value.indexOf(k[P]))), O.indexOf(L) > -1 && w(P);
  }, f = (D) => {
    a.value.forEach(function(M, L) {
      D === L && M.tab && M.tab.focus();
    });
  }, w = (D) => {
    const M = a.value[D];
    !M || M.tab && M.tab.disabled || (a.value.forEach((L, S) => {
      L.tab && (L.tab.selected = D === S), L.panel && (L.panel.selected = D === S);
    }), s.value = D, r.emit("update:modelValue", D));
  };
  tv("registerTab", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = { ...a.value[M], tab: D }, a.value = [...a.value], $());
  }), tv("registerPanel", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = {
      ...a.value[M],
      panel: D
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: D, panel: M }, L) => {
      if (M && D) {
        const S = D.id || ue("tab"), k = D.controls || ue("panel");
        D.controls = k, D.id = S, M.tab = S, M.id = k;
      }
      L === s.value && (M && (M.selected = !0), D && (D.selected = !0));
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
}, $a = window.Vue.ref, f4 = window.Vue.inject, h4 = window.Vue.computed, p4 = window.Vue.onMounted, ig = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, sg = (e) => {
  const r = $a(!1), o = $a(), s = $a(e.tab), a = $a(e.id), u = f4("registerPanel");
  p4(() => {
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
  const c = h4(() => ({
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
}, Dd = window.Vue.defineComponent, w4 = window.Vue.resolveComponent, Nd = window.Vue.openBlock, Ld = window.Vue.createElementBlock, is = window.Vue.createElementVNode, ag = window.Vue.mergeProps, Ja = window.Vue.renderSlot, v4 = window.Vue.createVNode, m4 = window.Vue.normalizeStyle, _4 = window.Vue.toHandlers, g4 = window.Vue.withDirectives, $4 = window.Vue.normalizeProps, y4 = window.Vue.guardReactiveProps, b4 = window.Vue.vShow;
var Md = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const V4 = Q_, C4 = Dd({
  props: V4,
  setup(e) {
    return eg(e);
  },
  components: {
    FeatherRipple: mr
  }
}), S4 = { role: "presentation" }, k4 = { class: "tab-text" };
function E4(e, r, o, s, a, u) {
  const c = w4("FeatherRipple");
  return Nd(), Ld("li", S4, [
    is("button", ag(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      is("span", k4, [
        Ja(e.$slots, "default", {}, void 0, !0)
      ]),
      v4(c)
    ], 16)
  ]);
}
var gc = /* @__PURE__ */ Md(C4, [["render", E4], ["__scopeId", "data-v-e6bb52b6"]]);
const I4 = rg, x4 = ng, A4 = Dd({
  model: tg,
  emits: x4,
  props: I4,
  setup(e, r) {
    return og(e, r);
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
}), B4 = { class: "feather-tab-container" }, T4 = { class: "tab-panels" };
function D4(e, r, o, s, a, u) {
  return Nd(), Ld("div", B4, [
    is("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: m4({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    is("ul", ag(e.attrs, _4(e.listeners)), [
      Ja(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    is("div", T4, [
      Ja(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var N4 = /* @__PURE__ */ Md(A4, [["render", D4], ["__scopeId", "data-v-27adffb9"]]);
const L4 = ig, M4 = Dd({
  props: L4,
  setup(e) {
    return sg(e);
  }
});
function O4(e, r, o, s, a, u) {
  return g4((Nd(), Ld("div", $4(y4(e.attrs)), [
    Ja(e.$slots, "default")
  ], 16)), [
    [b4, e.selected]
  ]);
}
var $c = /* @__PURE__ */ Md(M4, [["render", O4]]);
const P4 = window.Vue.defineComponent, R4 = window.Vue.toDisplayString, F4 = window.Vue.normalizeClass, U4 = window.Vue.openBlock, W4 = window.Vue.createElementBlock, q4 = window.Vue.createCommentVNode, H4 = /* @__PURE__ */ P4({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, s) => r != null && r.severity ? (U4(), W4("span", {
      key: 0,
      class: F4(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, R4(r.severity), 3)) : q4("", !0);
  }
});
const lg = /* @__PURE__ */ ce(H4, [["__scopeId", "data-v-83c2cdce"]]), z4 = window.Vue.defineComponent, nv = window.Vue.toDisplayString, rv = window.Vue.createElementVNode, Y4 = window.Vue.openBlock, G4 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const j4 = { class: "box" }, Z4 = { class: "label" }, K4 = { class: "date" }, J4 = /* @__PURE__ */ z4({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (Y4(), G4("div", j4, [
      rv("div", Z4, nv(r.label), 1),
      rv("div", K4, nv(r.info), 1)
    ]));
  }
});
const yc = /* @__PURE__ */ ce(J4, [["__scopeId", "data-v-b4afa751"]]), X4 = window.Vue.defineComponent, Q4 = window.Vue.unref, eO = window.Vue.renderList, tO = window.Vue.Fragment, bc = window.Vue.openBlock, Vc = window.Vue.createElementBlock, nO = window.Vue.toDisplayString, rO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oO = { class: "alarms-list" }, iO = /* @__PURE__ */ X4({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (bc(), Vc("div", oO, [
      (bc(!0), Vc(tO, null, eO(Q4(ge.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (a, u) => (bc(), Vc("div", {
        class: rO(["alarm-count", [`${u.toString().toLowerCase()}-color`, r.size]]),
        key: u
      }, nO(a.length), 3))), 128))
    ]));
  }
});
const sO = /* @__PURE__ */ ce(iO, [["__scopeId", "data-v-52d63440"]]), aO = window.Vue.openBlock, lO = window.Vue.createElementBlock, uO = window.Vue.createElementVNode;
var cO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const dO = {}, fO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, hO = /* @__PURE__ */ uO("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), pO = [
  hO
];
function wO(e, r) {
  return aO(), lO("svg", fO, pO);
}
var vO = /* @__PURE__ */ cO(dO, [["render", wO]]);
const mO = window.Vue.openBlock, _O = window.Vue.createElementBlock, gO = window.Vue.createStaticVNode;
var $O = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const yO = {}, bO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, VO = /* @__PURE__ */ gO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), CO = [
  VO
];
function SO(e, r) {
  return mO(), _O("svg", bO, CO);
}
var Xa = /* @__PURE__ */ $O(yO, [["render", SO]]);
const kO = window.Vue.defineComponent, cn = window.Vue.unref, Cc = window.Vue.createVNode, Od = window.Vue.createElementVNode, Sc = window.Vue.withCtx, ya = window.Vue.openBlock, kc = window.Vue.createBlock, Ec = window.Vue.createCommentVNode, EO = window.Vue.normalizeClass, IO = window.Vue.createElementBlock, xO = window.Vue.pushScopeId, AO = window.Vue.popScopeId, Pd = (e) => (xO("data-v-e073070b"), e = e(), AO(), e), BO = /* @__PURE__ */ Pd(() => /* @__PURE__ */ Od("span", null, "Acknowledge", -1)), TO = /* @__PURE__ */ Pd(() => /* @__PURE__ */ Od("span", null, "Escalate", -1)), DO = /* @__PURE__ */ Pd(() => /* @__PURE__ */ Od("span", null, "Clear", -1)), NO = /* @__PURE__ */ kO({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const r = e, o = vn(), s = async (u) => {
      await Gk(r.alarm.id, u) && o.getSituation(r.situationId), r.isSituation && await m_(
        r.situationId,
        et.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await t_(r.alarm.id, u) && o.getSituation(r.situationId);
    };
    return (u, c) => (ya(), IO("div", {
      class: EO(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Ec("", !0) : (ya(), kc(cn(le), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Sc(() => [
          Cc(cn(Z), {
            icon: cn(Zo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          BO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (ya(), kc(cn(le), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(cn(et).ESCALATE))
      }, {
        default: Sc(() => [
          Cc(cn(Z), {
            icon: cn(vO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          TO
        ]),
        _: 1
      })) : Ec("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (ya(), kc(cn(le), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(cn(et).CLEAR))
      }, {
        default: Sc(() => [
          Cc(cn(Z), {
            icon: cn(Xa),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          DO
        ]),
        _: 1
      })) : Ec("", !0)
    ], 2));
  }
});
const ug = /* @__PURE__ */ ce(NO, [["__scopeId", "data-v-e073070b"]]);
var LO = Object.defineProperty, MO = Object.defineProperties, OO = Object.getOwnPropertyDescriptors, ov = Object.getOwnPropertySymbols, PO = Object.prototype.hasOwnProperty, RO = Object.prototype.propertyIsEnumerable, iv = (e, r, o) => r in e ? LO(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, dd = (e, r) => {
  for (var o in r || (r = {}))
    PO.call(r, o) && iv(e, o, r[o]);
  if (ov)
    for (var o of ov(r))
      RO.call(r, o) && iv(e, o, r[o]);
  return e;
}, cg = (e, r) => MO(e, OO(r));
const dg = window.Vue.defineComponent, FO = window.Vue.inject, UO = window.Vue.resolveComponent, Ic = window.Vue.openBlock, sv = window.Vue.createElementBlock, Fo = window.Vue.createElementVNode, WO = window.Vue.createBlock, av = window.Vue.createCommentVNode, qO = window.Vue.renderSlot, HO = window.Vue.pushScopeId, zO = window.Vue.popScopeId, xc = window.Vue.toRef, ba = window.Vue.computed, YO = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var GO = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const jO = {
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
}, ZO = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, KO = dg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: ZO,
  props: jO,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: FO("registerCheckbox", (r) => {
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
      (e.keyCode === te.SPACE || e.keyCode === te.ENTER) && this.updateValue(), e.keyCode === te.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: mr
  }
}), JO = (e) => (HO("data-v-a7af27e2"), e = e(), zO(), e), XO = { class: "layout-container" }, QO = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], eP = { class: "checkbox hover focus" }, tP = /* @__PURE__ */ JO(() => /* @__PURE__ */ Fo("div", { class: "box" }, [
  /* @__PURE__ */ Fo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Fo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Fo("div", { class: "indeterminate" })
], -1)), nP = ["id", "for"];
function rP(e, r, o, s, a, u) {
  const c = UO("feather-ripple");
  return Ic(), sv("div", XO, [
    Fo("div", {
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
      Fo("div", eP, [
        tP,
        e.disabled ? av("", !0) : (Ic(), WO(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? av("", !0) : (Ic(), sv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        qO(e.$slots, "default", {}, void 0, !0)
      ], 8, nP))
    ], 40, QO)
  ]);
}
var Qr = /* @__PURE__ */ GO(KO, [["render", rP], ["__scopeId", "data-v-a7af27e2"]]);
const oP = cg(dd({}, oi), {
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
dg({
  props: oP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    ii(e);
    const o = xc(e, "error"), s = ba(() => ue("feather-checkbox-group")), a = ba(() => ue("feather-input-description")), u = ba(() => ue("feather-input-label")), c = ba(() => {
      const _ = JSON.parse(JSON.stringify(r.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!o.value), cg(dd({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = YO(s.value), { validate: w } = ni(f, xc(e, "modelValue"), e.label, e.schema, xc(e, "error"));
    return dd({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, ri(r.attrs));
  },
  components: {
    InputSubText: ti
  }
});
const iP = window.Vue.openBlock, sP = window.Vue.createElementBlock, fg = window.Vue.createElementVNode;
var aP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const lP = {}, uP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cP = /* @__PURE__ */ fg("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), dP = /* @__PURE__ */ fg("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), fP = [
  cP,
  dP
];
function hP(e, r) {
  return iP(), sP("svg", uP, fP);
}
var pP = /* @__PURE__ */ aP(lP, [["render", hP]]);
var wP = Object.defineProperty, vP = Object.defineProperties, mP = Object.getOwnPropertyDescriptors, lv = Object.getOwnPropertySymbols, _P = Object.prototype.hasOwnProperty, gP = Object.prototype.propertyIsEnumerable, uv = (e, r, o) => r in e ? wP(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Uo = (e, r) => {
  for (var o in r || (r = {}))
    _P.call(r, o) && uv(e, o, r[o]);
  if (lv)
    for (var o of lv(r))
      gP.call(r, o) && uv(e, o, r[o]);
  return e;
}, hg = (e, r) => vP(e, mP(r));
const $P = window.Vue.defineComponent, Ac = window.Vue.toRef, yP = window.Vue.computed, cv = window.Vue.resolveComponent, dv = window.Vue.openBlock, fv = window.Vue.createElementBlock, hv = window.Vue.mergeProps, pv = window.Vue.createVNode, bP = window.Vue.normalizeClass, wv = window.Vue.withCtx, VP = window.Vue.createElementVNode, CP = window.Vue.toDisplayString, SP = window.Vue.createCommentVNode;
var kP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const EP = hg(Uo(Uo({}, cl), oi), {
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
}, xP = $P({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: IP,
  props: EP,
  setup(e, r) {
    ii(e), dl(e);
    const o = Ac(e, "id"), s = yP(() => o.value ? o.value : ue("feather-textarea-label")), { validate: a } = ni(s, Ac(e, "modelValue"), e.label, e.schema, Ac(e, "error"));
    return Uo({
      inputId: s,
      incomingId: o,
      validate: a
    }, ri(r.attrs));
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
      const e = Uo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), hg(Uo(Uo({}, e), this.listeners), {
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
    InputSubText: ti,
    InputWrapper: ul
  }
}), AP = ["maxlength"], BP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function TP(e, r, o, s, a, u) {
  const c = cv("InputWrapper"), f = cv("InputSubText");
  return dv(), fv("div", hv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    pv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: bP(["feather-textarea-content", e.contentCls])
    }, {
      default: wv(() => [
        VP("textarea", hv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, AP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    pv(f, { id: e.descriptionId }, {
      right: wv(() => [
        e.maxlength ? (dv(), fv("div", BP, CP(e.charCount), 1)) : SP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var fd = /* @__PURE__ */ kP(xP, [["render", TP], ["__scopeId", "data-v-0648df5c"]]);
const DP = window.Pinia.defineStore, $l = DP("appStore", {
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
}), NP = window.Vue.defineComponent, vv = window.Vue.toDisplayString, Pi = window.Vue.createElementVNode, Ur = window.Vue.unref, xo = window.Vue.openBlock, mv = window.Vue.createBlock, Ri = window.Vue.createCommentVNode, _v = window.Vue.createVNode, Va = window.Vue.createElementBlock, LP = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const MP = { class: "row" }, OP = { class: "label" }, PP = { class: "action-icons" }, RP = { class: "icon-btn" }, FP = {
  key: 0,
  class: "icon-btn"
}, UP = {
  key: 1,
  class: "icon-btn"
}, WP = {
  key: 0,
  class: "text"
}, qP = window.Vue.watch, gv = window.Vue.ref, HP = /* @__PURE__ */ NP({
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
    const r = e, o = $l(), s = gv(!1), a = gv((w = r.memo) == null ? void 0 : w.body);
    qP(r, () => {
      var v;
      a.value = (v = r.memo) == null ? void 0 : v.body, s.value = !1;
    });
    const u = () => {
      s.value = !s.value;
    }, c = async () => {
      s.value = !1, await eE(r.id, r.type) ? a.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      s.value = !1, a.value && a.value !== "" && (await Qk(r.id, r.type, a.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (v, _) => (xo(), Va("div", {
      class: LP([r.boxType === "small" ? "box-small" : "box"])
    }, [
      Pi("div", MP, [
        Pi("div", OP, vv(e.label), 1),
        Pi("div", PP, [
          Pi("div", RP, [
            s.value ? Ri("", !0) : (xo(), mv(Ur(Z), {
              key: 0,
              icon: Ur(pP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (xo(), Va("div", FP, [
            _v(Ur(Z), {
              icon: Ur(Zo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Ri("", !0),
          a.value && a.value != "" || s.value ? (xo(), Va("div", UP, [
            _v(Ur(Z), {
              icon: Ur(Qo),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Ri("", !0)
        ])
      ]),
      Pi("div", null, [
        !s.value && a.value != null ? (xo(), Va("div", WP, vv(a.value), 1)) : Ri("", !0),
        s.value ? (xo(), mv(Ur(fd), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Ri("", !0)
      ])
    ], 2));
  }
});
const Qa = /* @__PURE__ */ ce(HP, [["__scopeId", "data-v-3f44e250"]]), zP = window.Vue.defineComponent, Wr = window.Vue.unref, Ao = window.Vue.createVNode, Fi = window.Vue.toDisplayString, pn = window.Vue.createElementVNode, $v = window.Vue.openBlock, yv = window.Vue.createElementBlock, bv = window.Vue.createCommentVNode, Bc = window.Vue.createTextVNode, YP = window.Vue.pushScopeId, GP = window.Vue.popScopeId, Rd = (e) => (YP("data-v-02d1e7f0"), e = e(), GP(), e), jP = {
  key: 0,
  class: "card"
}, ZP = { class: "row" }, KP = {
  key: 0,
  class: "ack"
}, JP = /* @__PURE__ */ Rd(() => /* @__PURE__ */ pn("strong", null, " Duration: ", -1)), XP = ["innerHTML"], QP = /* @__PURE__ */ Rd(() => /* @__PURE__ */ pn("strong", null, "First Event", -1)), e8 = /* @__PURE__ */ Rd(() => /* @__PURE__ */ pn("strong", null, "Last Event", -1)), t8 = { class: "section memo-boxes" }, Vv = window.Vue.ref, n8 = window.Vue.watch, r8 = /* @__PURE__ */ zP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, s = Vv(!1), a = Vv(o.alarm), u = new Date().getTime();
    n8(o, () => {
      a.value = o.alarm, s.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const c = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (w) => {
      const v = await n_(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, T, D;
      return a.value ? ($v(), yv("div", jP, [
        pn("div", null, [
          pn("div", ZP, [
            Ao(Wr(Qr), {
              modelValue: s.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (M) => s.value = M),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            pn("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                s.value = !s.value, c();
              })
            }, Fi(a.value.nodeLabel) + " - " + Fi(a.value.id), 1),
            Ao(lg, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? ($v(), yv("div", KP, [
              Ao(Wr(Z), {
                icon: Wr(Zo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : bv("", !0)
          ]),
          pn("div", null, [
            JP,
            Bc(" " + Fi(Wr(sl)(Wr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          pn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, XP),
          pn("div", null, [
            QP,
            Bc(" - " + Fi(Wr(kn)(a.value.firstEventTime)), 1)
          ]),
          pn("div", null, [
            e8,
            Bc(" - " + Fi(Wr(kn)(a.value.lastEventTime)), 1)
          ]),
          pn("div", t8, [
            Ao(Qa, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Ao(Qa, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (D = a.value) == null ? void 0 : D.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Ao(ug, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : bv("", !0);
    };
  }
});
const o8 = /* @__PURE__ */ ce(r8, [["__scopeId", "data-v-02d1e7f0"]]), i8 = window.Vue.openBlock, s8 = window.Vue.createElementBlock, pg = window.Vue.createElementVNode;
var a8 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const l8 = {}, u8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, c8 = /* @__PURE__ */ pg("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), d8 = /* @__PURE__ */ pg("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), f8 = [
  c8,
  d8
];
function h8(e, r) {
  return i8(), s8("svg", u8, f8);
}
var hd = /* @__PURE__ */ a8(l8, [["render", h8]]);
const p8 = window.Vue.watch, w8 = window.Vue.ref, v8 = window.Vue.onBeforeUnmount, wg = (e) => {
  const r = w8(!1), o = (s) => {
    s.keyCode === te.ESCAPE && (s.preventDefault(), r.value = !r.value);
  };
  return p8(e, (s) => {
    s ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), v8(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, m8 = window.Vue.watch, vg = (e) => {
  let r;
  m8(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, mg = window.Vue.watch, _g = window.Vue.onBeforeUnmount, gg = window.Vue.nextTick, _8 = window.Vue.onMounted, $g = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, el = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, yg = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  _g(() => el(r, o)), _8(() => mg(e, (s) => {
    s ? gg(() => {
      r = $g(o);
    }) : el(r, o);
  }, { immediate: !0 }));
}, g8 = (e, r) => {
  let o;
  _g(() => el(o, r.value ? r.value.offsetParent : !1)), mg([e, r], ([s, a]) => {
    s && a ? gg(() => {
      o = $g(a.offsetParent);
    }) : a && el(o, a.offsetParent);
  }, {
    immediate: !0
  });
};
var $8 = Object.defineProperty, Cv = Object.getOwnPropertySymbols, y8 = Object.prototype.hasOwnProperty, b8 = Object.prototype.propertyIsEnumerable, Sv = (e, r, o) => r in e ? $8(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, V8 = (e, r) => {
  for (var o in r || (r = {}))
    y8.call(r, o) && Sv(e, o, r[o]);
  if (Cv)
    for (var o of Cv(r))
      b8.call(r, o) && Sv(e, o, r[o]);
  return e;
};
const Fd = window.Vue.defineComponent, ss = window.Vue.ref, C8 = window.Vue.nextTick, bg = window.Vue.openBlock, Vg = window.Vue.createElementBlock, Ud = window.Vue.createElementVNode, S8 = window.Vue.renderSlot, k8 = window.Vue.resolveComponent, E8 = window.Vue.normalizeClass, I8 = window.Vue.withModifiers, x8 = window.Vue.createVNode, kv = window.Vue.toRef, Ev = window.Vue.computed, Iv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Cg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const A8 = {
  enable: {
    type: Boolean,
    required: !0
  }
}, B8 = Fd({
  props: A8,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = ss(), r = ss(!1), o = (_, $) => {
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
      $ && $.focus ? C8(() => {
        $.focus();
      }) : s(_);
    }, w = ss();
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
}), T8 = /* @__PURE__ */ Ud("div", { tabindex: "0" }, null, -1), D8 = {
  class: "focus-trap-content",
  ref: "content"
}, N8 = /* @__PURE__ */ Ud("div", { tabindex: "0" }, null, -1);
function L8(e, r, o, s, a, u) {
  return bg(), Vg("div", null, [
    T8,
    Ud("div", D8, [
      S8(e.$slots, "default")
    ], 512),
    N8
  ]);
}
var Sg = /* @__PURE__ */ Cg(B8, [["render", L8]]);
const M8 = Fd({
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
    icon: () => Qo
  },
  components: {
    FeatherIcon: Z
  }
}), O8 = ["aria-label"];
function P8(e, r, o, s, a, u) {
  const c = k8("FeatherIcon");
  return bg(), Vg("a", {
    href: "#",
    class: E8(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = I8((f) => e.$emit("close"), ["prevent"]))
  }, [
    x8(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, O8);
}
var kg = /* @__PURE__ */ Cg(M8, [["render", P8], ["__scopeId", "data-v-fc0f3f00"]]);
const Eg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, R8 = {
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
    default: () => Eg,
    validator: (e) => !!e.title
  }
}, F8 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Fd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: F8,
  props: R8,
  setup(e, r) {
    const o = ll(kv(e, "labels"), Eg), s = kv(e, "modelValue"), a = ss(), u = () => {
      r.emit("update:modelValue", !1);
    }, c = Ev(() => !!r.slots.footer), f = Ev(() => ue("dialog-header"));
    e.relative ? g8(s, a) : yg(s), vg(s), Iv(wg(s), () => {
      u();
    });
    const w = ss(e.modelValue);
    return Iv(w, (v) => {
      v ? r.emit("shown") : r.emit("hidden");
    }), V8({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, o);
  },
  components: {
    FocusTrap: Sg,
    DialogClose: kg
  }
});
var U8 = Object.defineProperty, xv = Object.getOwnPropertySymbols, W8 = Object.prototype.hasOwnProperty, q8 = Object.prototype.propertyIsEnumerable, Av = (e, r, o) => r in e ? U8(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, yl = (e, r) => {
  for (var o in r || (r = {}))
    W8.call(r, o) && Av(e, o, r[o]);
  if (xv)
    for (var o of xv(r))
      q8.call(r, o) && Av(e, o, r[o]);
  return e;
};
const bl = window.Vue.defineComponent, Bv = window.Vue.toRef, Tv = window.Vue.watch, Dv = window.Vue.ref, Nv = window.Vue.resolveComponent, Ca = window.Vue.openBlock, Lv = window.Vue.createBlock, H8 = window.Vue.Teleport, Mv = window.Vue.createElementBlock, Tc = window.Vue.createVNode, Ov = window.Vue.Transition, Dc = window.Vue.withCtx, Pv = window.Vue.createCommentVNode, z8 = window.Vue.withDirectives, Y8 = window.Vue.normalizeStyle, G8 = window.Vue.normalizeClass, Rv = window.Vue.createElementVNode, j8 = window.Vue.renderSlot, Z8 = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var K8 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Ig = {
  title: "REQUIRED",
  close: "Close Dialog"
}, J8 = {
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
    default: () => Ig,
    validator: (e) => !!e.title
  }
}, X8 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, Q8 = bl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: X8,
  props: J8,
  setup(e, r) {
    const o = ll(Bv(e, "labels"), Ig), s = Bv(e, "modelValue"), a = () => {
      r.emit("update:modelValue", !1);
    };
    yg(s), vg(s), Tv(wg(s), () => {
      a();
    });
    const u = Dv(), c = Dv(!1);
    return Tv(c, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), yl({ close: a, shown: c, isShown: s, element: u }, o);
  },
  components: {
    DialogClose: kg,
    FocusTrap: Sg
  }
}), eR = {
  key: 0,
  class: "drawer-container feather-styles"
}, tR = {
  key: 0,
  class: "greyedOut"
}, nR = ["aria-label"], rR = { class: "slot" };
function oR(e, r, o, s, a, u) {
  const c = Nv("dialog-close"), f = Nv("focus-trap");
  return Ca(), Lv(H8, { to: "body" }, [
    e.modelValue ? (Ca(), Mv("div", eR, [
      Tc(Ov, { name: "greyOutShim" }, {
        default: Dc(() => [
          e.modelValue ? (Ca(), Mv("div", tR)) : Pv("", !0)
        ]),
        _: 1
      }),
      Tc(Ov, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (w) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (w) => e.shown = !1)
      }, {
        default: Dc(() => [
          z8((Ca(), Lv(f, {
            enable: e.modelValue,
            style: Y8({ width: e.width }),
            key: "sect",
            class: G8(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Dc(() => [
              Rv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Rv("div", rR, [
                  j8(e.$slots, "default", {}, void 0, !0)
                ]),
                Tc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, nR)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [Z8, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Pv("", !0)
  ]);
}
var xg = /* @__PURE__ */ K8(Q8, [["render", oR], ["__scopeId", "data-v-0a36e1dc"]]);
const iR = yl({
  label: {
    type: String,
    required: !0
  }
}, Q_);
bl({
  name: "DrawerTab",
  props: iR,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = eo(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      to(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return eg(e);
  },
  components: {
    FeatherRipple: mr
  }
});
const sR = yl({}, rg), aR = ng;
bl({
  emits: aR,
  model: tg,
  props: sR,
  setup(e, r) {
    return og(e, r);
  }
});
const lR = yl({
  header: {
    type: String
  }
}, ig);
bl({
  name: "DrawerTabContent",
  props: lR,
  setup(e) {
    return sg(e);
  },
  directives: {
    MenuFocusLoop: _T
  }
});
const uR = window.Vue.defineComponent, Ag = window.Vue.createElementVNode, Fv = window.Vue.createVNode, cR = window.Vue.renderList, dR = window.Vue.Fragment, Ui = window.Vue.openBlock, Nc = window.Vue.createElementBlock, Uv = window.Vue.createBlock, fR = window.Vue.unref, hR = window.Vue.withCtx, pR = window.Vue.pushScopeId, wR = window.Vue.popScopeId, vR = (e) => (pR("data-v-c7c65659"), e = e(), wR(), e), mR = { class: "content" }, _R = /* @__PURE__ */ vR(() => /* @__PURE__ */ Ag("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), gR = {
  key: 0,
  class: "situation-list"
}, Lc = window.Vue.ref, Wv = window.Vue.watch, $R = /* @__PURE__ */ uR({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, s = vn(), a = Lc(o.visible), u = () => {
      let v = s.situations;
      o.situationId !== 0 && (v = s.situations.filter(
        (_) => _.id != o.situationId
      )), c.value = v, f.value = v;
    }, c = Lc(s.situations), f = Lc(s.situations);
    Wv(o, () => {
      a.value = o.visible, u();
    }), Wv(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (Ui(), Uv(fR(xg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: hR(() => [
        Ag("div", mR, [
          _R,
          Fv(ai, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Ui(), Nc("div", gR, [
            (Ui(!0), Nc(dR, null, cR(f.value, ($) => (Ui(), Nc("div", {
              class: "card",
              key: $.id
            }, [
              Fv(g_, {
                onClick: (y) => r("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Ui(), Uv(li, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Bg = /* @__PURE__ */ ce($R, [["__scopeId", "data-v-c7c65659"]]), yR = window.Vue.defineComponent, qv = window.Vue.normalizeClass, Po = window.Vue.createElementVNode, Sa = window.Vue.unref, bR = window.Vue.createVNode, ka = window.Vue.toDisplayString, VR = window.Vue.createTextVNode, CR = window.Vue.openBlock, SR = window.Vue.createElementBlock, kR = window.Vue.pushScopeId, ER = window.Vue.popScopeId, IR = (e) => (kR("data-v-e1e9b696"), e = e(), ER(), e), xR = { class: "alarmInfo" }, AR = { class: "alarm-title" }, BR = /* @__PURE__ */ IR(() => /* @__PURE__ */ Po("strong", null, " Duration: ", -1)), TR = { class: "description" }, DR = /* @__PURE__ */ yR({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, s = new Date().getTime();
    return (a, u) => (CR(), SR("div", {
      class: qv(["alarm", { selected: o.selected }])
    }, [
      Po("div", xR, [
        Po("div", {
          class: qv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        bR(Sa(Qr), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Po("div", AR, ka(e.alarm.nodeLabel) + " - " + ka(e.alarm.id), 1)
      ]),
      Po("div", null, [
        BR,
        VR(" " + ka(Sa(sl)(Sa(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Po("div", TR, ka(Sa(d_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Wd = /* @__PURE__ */ ce(DR, [["__scopeId", "data-v-e1e9b696"]]), NR = window.Vue.defineComponent, Ra = window.Vue.createElementVNode, Bo = window.Vue.unref, LR = window.Vue.toDisplayString, Hv = window.Vue.withCtx, Mc = window.Vue.createVNode, MR = window.Vue.renderList, OR = window.Vue.Fragment, Wi = window.Vue.openBlock, Oc = window.Vue.createElementBlock, zv = window.Vue.createBlock, PR = window.Vue.pushScopeId, RR = window.Vue.popScopeId, FR = (e) => (PR("data-v-4bc80d4b"), e = e(), RR(), e), UR = { class: "content" }, WR = { class: "header" }, qR = /* @__PURE__ */ FR(() => /* @__PURE__ */ Ra("h4", null, "ADD ALARMS", -1)), HR = {
  key: 0,
  class: "alarms-list"
}, Ea = window.Vue.ref, Yv = window.Vue.watch, zR = /* @__PURE__ */ NR({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: r }) {
    const o = e, s = vn(), a = Ea(o.visible), u = Ea([]), c = Ea(["all"]), f = Ea(s.unassignedAlarms);
    Yv(o, () => {
      a.value = o.visible, u.value = [], f.value = s.unassignedAlarms;
    }), Yv(
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
    return (y, T) => (Wi(), zv(Bo(xg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (D) => a.value = D),
        T[1] || (T[1] = (D) => r("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: Hv(() => [
        Ra("div", UR, [
          Ra("div", WR, [
            qR,
            Mc(Bo(le), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: Hv(() => [
                Ra("span", null, "Add " + LR(Bo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Mc(ai, {
            list: Bo(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (Wi(), Oc("div", HR, [
            (Wi(!0), Oc(OR, null, MR(f.value, (D) => (Wi(), Oc("div", {
              class: "card",
              key: D.id
            }, [
              Mc(Wd, {
                selected: Bo(ge.exports.includes)(Bo(u), D.id),
                alarm: D,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Wi(), zv(li, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const YR = /* @__PURE__ */ ce(zR, [["__scopeId", "data-v-4bc80d4b"]]), GR = window.Vue.openBlock, jR = window.Vue.createElementBlock, Tg = window.Vue.createElementVNode;
var ZR = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const KR = {}, JR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XR = /* @__PURE__ */ Tg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), QR = /* @__PURE__ */ Tg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), e5 = [
  XR,
  QR
];
function t5(e, r) {
  return GR(), jR("svg", JR, e5);
}
var Gv = /* @__PURE__ */ ZR(KR, [["render", t5]]);
const n5 = window.Vue.defineComponent, Ut = window.Vue.createElementVNode, it = window.Vue.unref, ht = window.Vue.createVNode, qi = window.Vue.withCtx, r5 = window.Vue.renderList, jv = window.Vue.Fragment, Hi = window.Vue.openBlock, Ia = window.Vue.createElementBlock, o5 = window.Vue.createBlock, i5 = window.Vue.pushScopeId, s5 = window.Vue.popScopeId, ui = (e) => (i5("data-v-524b0835"), e = e(), s5(), e), a5 = { class: "container" }, l5 = { class: "header" }, u5 = /* @__PURE__ */ ui(() => /* @__PURE__ */ Ut("div", { class: "title" }, "Alarms", -1)), c5 = /* @__PURE__ */ ui(() => /* @__PURE__ */ Ut("span", null, "Add Alarms", -1)), d5 = { class: "alarms-container" }, f5 = { class: "filters" }, h5 = { class: "list" }, p5 = { class: "row actions" }, w5 = /* @__PURE__ */ ui(() => /* @__PURE__ */ Ut("span", null, "Clear", -1)), v5 = /* @__PURE__ */ ui(() => /* @__PURE__ */ Ut("span", null, "Acknowledge", -1)), m5 = /* @__PURE__ */ ui(() => /* @__PURE__ */ Ut("span", null, "Move", -1)), _5 = /* @__PURE__ */ ui(() => /* @__PURE__ */ Ut("span", null, "Remove", -1)), g5 = { class: "section" }, $5 = {
  key: 0,
  class: "alarm-list"
}, xa = window.Vue.ref, y5 = window.Vue.watch, b5 = window.Vue.reactive, V5 = window.Vue.markRaw, C5 = /* @__PURE__ */ n5({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = V5({
      Add: gl,
      Delete: Gv,
      MarkComplete: Xa,
      CheckCircle: Zo,
      ExitToApp: hd
    }), s = $l(), a = vn(), u = xa(!1), c = xa(["all"]), f = xa(!1), w = xa(!1), v = b5({
      selectedAlarms: [],
      alarms: r.alarms
    });
    y5(r, () => {
      c.value = ["all"], v.alarms = r.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (I) => {
      v.selectedAlarms.includes(I) ? ge.exports.remove(v.selectedAlarms, (P) => P == I) : v.selectedAlarms.push(I);
    }, $ = async (I) => {
      v.selectedAlarms.length ? (await jk(v.selectedAlarms, I), a.getSituation(r.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === r.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await ow(
        r.situationId,
        v.selectedAlarms
      ) ? a.getSituation(r.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, D = async (I) => {
      y() && (await ow(
        r.situationId,
        v.selectedAlarms
      ) ? await M(I, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, M = async (I, P) => {
      P.length ? await __(I, P) ? a.getSituation(I) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, L = async (I) => {
      await M(r.situationId, I), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, k = (I) => {
      v.alarms = I;
    };
    return (I, P) => (Hi(), Ia(jv, null, [
      Ut("div", a5, [
        Ut("div", l5, [
          u5,
          ht(it(le), {
            class: "add-alarms-btn",
            onClick: P[0] || (P[0] = (x) => w.value = !0)
          }, {
            default: qi(() => [
              ht(it(Z), {
                icon: it(o).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              c5
            ]),
            _: 1
          })
        ]),
        Ut("div", d5, [
          Ut("div", f5, [
            ht(ai, {
              list: r.alarms,
              onFilteredList: k,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Ut("div", h5, [
            Ut("div", p5, [
              ht(it(Qr), {
                modelValue: u.value,
                "onUpdate:modelValue": P[1] || (P[1] = (x) => u.value = x),
                label: "selected"
              }, null, 8, ["modelValue"]),
              ht(it(le), {
                onClick: P[2] || (P[2] = () => $("clear"))
              }, {
                default: qi(() => [
                  ht(it(Z), {
                    icon: it(Xa),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  w5
                ]),
                _: 1
              }),
              ht(it(le), {
                onClick: P[3] || (P[3] = () => $("ack"))
              }, {
                default: qi(() => [
                  ht(it(Z), {
                    icon: it(Zo),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  v5
                ]),
                _: 1
              }),
              ht(it(le), { onClick: S }, {
                default: qi(() => [
                  ht(it(Z), {
                    icon: it(hd),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  m5
                ]),
                _: 1
              }),
              ht(it(le), { onClick: T }, {
                default: qi(() => [
                  ht(it(Z), {
                    icon: it(Gv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  _5
                ]),
                _: 1
              })
            ]),
            Ut("div", g5, [
              v.alarms.length > 0 ? (Hi(), Ia("div", $5, [
                (Hi(!0), Ia(jv, null, r5(v.alarms, (x) => (Hi(), Ia("div", {
                  key: x.id
                }, [
                  ht(o8, {
                    alarm: x,
                    selectAll: u.value,
                    "situation-id": r.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Hi(), o5(li, { key: 1 }))
            ])
          ])
        ])
      ]),
      ht(Bg, {
        situationId: r.situationId,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: P[4] || (P[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      ht(YR, {
        visible: w.value,
        onAlarmsSelected: L,
        onDrawerAlarmsClosed: P[5] || (P[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const S5 = /* @__PURE__ */ ce(C5, [["__scopeId", "data-v-524b0835"]]), k5 = window.Vue.defineComponent, dn = window.Vue.createVNode, Ot = window.Vue.unref, Pc = window.Vue.normalizeClass, Aa = window.Vue.toDisplayString, zi = window.Vue.openBlock, Yi = window.Vue.createElementBlock, Zv = window.Vue.createCommentVNode, E5 = window.Vue.withCtx, en = window.Vue.createElementVNode, I5 = window.Vue.Fragment, x5 = window.Vue.pushScopeId, A5 = window.Vue.popScopeId, B5 = (e) => (x5("data-v-e980d1e2"), e = e(), A5(), e), T5 = { class: "section" }, D5 = { class: "action-section" }, N5 = { class: "btn-row" }, L5 = { key: 0 }, M5 = { key: 1 }, O5 = {
  key: 0,
  class: "situation-detail"
}, P5 = { class: "situation-info" }, R5 = { class: "id" }, F5 = ["innerHTML"], U5 = /* @__PURE__ */ B5(() => /* @__PURE__ */ en("p", null, null, -1)), W5 = { class: "boxes" }, q5 = { class: "parameters" }, H5 = { class: "section memo-boxes" }, z5 = { key: 0 }, Y5 = window.Vue.computed, Kv = window.Vue.ref, G5 = window.Vue.watch, j5 = /* @__PURE__ */ k5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = $l(), s = vn(), a = et.REJECTED, u = Kv(r.situationInfo.status), c = Kv(r.situationInfo);
    G5(r, () => {
      u.value = r.situationInfo.status || "", c.value = r.situationInfo;
    });
    const f = Y5(
      () => {
        var v;
        return c_(((v = c.value) == null ? void 0 : v.description) || "");
      }
    ), w = async (v) => {
      var $;
      await m_(
        ($ = r.situationInfo) == null ? void 0 : $.id,
        v.toLowerCase()
      ) ? (u.value = v, s.getSituation(r.situationInfo.id)) : o.showErrorMsg("Error on rejecting the situation");
    };
    return (v, _) => {
      var $, y, T, D, M, L, S, k, I, P, x, R;
      return zi(), Yi(I5, null, [
        en("div", T5, [
          en("div", D5, [
            dn(ug, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            en("div", N5, [
              dn(Ot(le), {
                class: Pc(["btn", { rejected: u.value == Ot(a) }]),
                "data-test": "btn-reject",
                onClick: _[0] || (_[0] = (O) => w(Ot(a)))
              }, {
                default: E5(() => [
                  dn(Ot(Z), {
                    icon: Ot(r_),
                    "aria-hidden": "true",
                    class: Pc(["icon reject", { rejected: u.value == Ot(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Ot(a) ? (zi(), Yi("span", L5, Aa(Ot(a)), 1)) : (zi(), Yi("span", M5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (zi(), Yi("div", O5, [
            en("div", {
              class: Pc(["severity-line", [`${(y = ($ = c.value) == null ? void 0 : $.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            en("div", P5, [
              en("div", R5, [
                en("div", null, " Situation - " + Aa((T = c.value) == null ? void 0 : T.id) + " - " + Aa(c.value.alarms.length) + " alarm(s) affects " + Aa(Ot(ge.exports.size)(Ot(ge.exports.groupBy)((D = c.value) == null ? void 0 : D.alarms, "nodeId"))) + " node(s) ", 1),
                dn(lg, {
                  severity: (M = c.value) == null ? void 0 : M.severity
                }, null, 8, ["severity"])
              ]),
              en("span", {
                innerHTML: Ot(f),
                "data-test": "situation-description"
              }, null, 8, F5),
              U5,
              en("div", W5, [
                dn(yc, {
                  label: "First Event",
                  info: Ot(kn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                dn(yc, {
                  label: "Last Event",
                  info: Ot(kn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                dn(yc, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            en("div", q5, [
              dn(sO, {
                alarms: (L = c.value) == null ? void 0 : L.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : Zv("", !0),
          en("div", H5, [
            dn(Qa, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (I = c.value) == null ? void 0 : I.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            dn(Qa, {
              id: (P = c.value) == null ? void 0 : P.id,
              situationId: (x = c.value) == null ? void 0 : x.id,
              label: "Journal Memo",
              type: "journal",
              memo: (R = c.value) == null ? void 0 : R.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (zi(), Yi("div", z5, [
          dn(S5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : Zv("", !0)
      ], 64);
    };
  }
});
const Z5 = /* @__PURE__ */ ce(j5, [["__scopeId", "data-v-e980d1e2"]]);
var K5 = Object.defineProperty, J5 = Object.defineProperties, X5 = Object.getOwnPropertyDescriptors, Jv = Object.getOwnPropertySymbols, Q5 = Object.prototype.hasOwnProperty, e6 = Object.prototype.propertyIsEnumerable, Xv = (e, r, o) => r in e ? K5(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, pd = (e, r) => {
  for (var o in r || (r = {}))
    Q5.call(r, o) && Xv(e, o, r[o]);
  if (Jv)
    for (var o of Jv(r))
      e6.call(r, o) && Xv(e, o, r[o]);
  return e;
}, t6 = (e, r) => J5(e, X5(r));
const Dg = window.Vue.defineComponent, Kr = window.Vue.resolveComponent, Fa = window.Vue.openBlock, Qv = window.Vue.createBlock, Ua = window.Vue.mergeProps, Jr = window.Vue.withCtx, Ng = window.Vue.createElementBlock, n6 = window.Vue.Fragment, r6 = window.Vue.renderList, o6 = window.Vue.createTextVNode, i6 = window.Vue.toDisplayString, s6 = window.Vue.computed, em = window.Vue.toRef, Gi = window.Vue.createVNode, tm = window.Vue.toHandlers, a6 = window.Vue.renderSlot, l6 = window.Vue.normalizeClass, u6 = window.Vue.createElementVNode;
var Lg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const c6 = Dg({
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
        cs(r, this.$refs.list.$el);
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
    FeatherList: Ad,
    FeatherListItem: ps
  }
});
function d6(e, r, o, s, a, u) {
  const c = Kr("FeatherListItem"), f = Kr("FeatherList");
  return Fa(), Qv(f, Ua(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: Jr(() => [
      (Fa(!0), Ng(n6, null, r6(e.options, (w, v) => (Fa(), Qv(c, {
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
        default: Jr(() => [
          o6(i6(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var f6 = /* @__PURE__ */ Lg(c6, [["render", d6], ["__scopeId", "data-v-eae820da"]]);
const h6 = t6(pd(pd({}, cl), oi), {
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
}), p6 = {
  "update:modelValue": (e) => !0
}, w6 = Dg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: p6,
  props: h6,
  setup(e, r) {
    ii(e), dl(e);
    const o = s6(() => ue("feather-select-input")), { validate: s } = ni(o, em(e, "modelValue"), e.label, e.schema, em(e, "error"));
    return pd({
      inputId: o,
      validate: s
    }, ri(r.attrs));
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
    icon: () => vl
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
      if (e.keyCode === te.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === te.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === te.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === te.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === te.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === te.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const r = String.fromCharCode(e.keyCode);
        this.charsSoFar += r, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      to(this.delayTimeout), this.delayTimeout = eo(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: ul,
    InputSubText: ti,
    FeatherMenu: A_,
    List: f6,
    FeatherIcon: Z
  }
});
function v6(e, r, o, s, a, u) {
  const c = Kr("FeatherIcon"), f = Kr("InputWrapper"), w = Kr("List"), v = Kr("FeatherMenu"), _ = Kr("InputSubText");
  return Fa(), Ng("div", Ua(e.inherittedAttrs, { class: "feather-select-container" }), [
    Gi(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: Jr(($) => [
        Gi(f, Ua({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, tm($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: Jr(() => [
            a6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: Jr(() => [
            Gi(c, {
              class: l6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: Jr(() => [
            u6("input", Ua(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, tm(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: Jr(() => [
        Gi(w, {
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
    Gi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var m6 = /* @__PURE__ */ Lg(w6, [["render", v6], ["__scopeId", "data-v-ecb32d90"]]);
const _6 = window.Vue.openBlock, g6 = window.Vue.createElementBlock, Mg = window.Vue.createElementVNode;
var $6 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const y6 = {}, b6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, V6 = /* @__PURE__ */ Mg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), C6 = /* @__PURE__ */ Mg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), S6 = [
  V6,
  C6
];
function k6(e, r) {
  return _6(), g6("svg", b6, S6);
}
var E6 = /* @__PURE__ */ $6(y6, [["render", k6]]);
const Wa = window.Vue.openBlock, wd = window.Vue.createElementBlock, Og = window.Vue.createElementVNode, I6 = window.Vue.defineComponent, qr = window.Vue.ref, x6 = window.Vue.provide, nm = window.Vue.computed, A6 = window.Vue.onUnmounted, rm = window.Vue.toRef, B6 = window.Vue.resolveComponent, T6 = window.Vue.Fragment, D6 = window.Vue.createBlock, N6 = window.Vue.Teleport, om = window.Vue.createVNode, L6 = window.Vue.Transition, M6 = window.Vue.withCtx, O6 = window.Vue.normalizeClass, P6 = window.Vue.normalizeStyle, R6 = window.Vue.toDisplayString, F6 = window.Vue.createCommentVNode, U6 = window.Vue.renderSlot, Rc = window.Vue.nextTick;
var Pg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const W6 = {}, q6 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, H6 = /* @__PURE__ */ Og("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), z6 = [
  H6
];
function Y6(e, r) {
  return Wa(), wd("svg", q6, z6);
}
var G6 = /* @__PURE__ */ Pg(W6, [["render", Y6]]), Qe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Qe || {}), Wn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Wn || {});
const j6 = (e, r, o, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= r.height + s && c.push(Qe.top), a >= r.height + s && c.push(Qe.bottom);
  const f = [];
  u >= r.width + s && f.push(Qe.right), e.left >= r.width + s && f.push(Qe.left);
  let w = [...f, ...c];
  return (o === Qe.top || o === Qe.bottom) && (w = [...c, ...f]), w.indexOf(o) > -1 ? o : w.length ? w[0] : o;
}, Z6 = (e, r, o, s, a = 28) => {
  if (e === Qe.left || e === Qe.right)
    return Wn.center;
  const u = r.left + r.width / 2, c = window.innerWidth - r.right, f = [], w = u, v = c + r.width / 2, _ = o.width - a, $ = o.width / 2;
  return w >= $ && v >= $ && f.push(Wn.center), v >= _ && f.push(Wn.left), w >= _ && f.push(Wn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, K6 = {
  title: {
    type: String,
    required: !0
  },
  placement: {
    type: String,
    default: () => Qe.top
  },
  pointerAlignment: {
    type: String,
    default: () => Wn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, J6 = I6({
  props: K6,
  setup(e) {
    const r = qr(!1), o = qr(!1), s = ue("feather-tooltip-trigger"), a = ue("feather-tooltip"), u = "data-feather-tooltip";
    x6("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      to(c), r.value || (c = eo(M, e.enterDelay));
    }, w = () => {
      to(c), c = eo(L, e.exitDelay);
    }, v = (pe) => {
      pe.keyCode === te.ESCAPE && (pe.preventDefault(), L(!0));
    }, _ = nm(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = qr(document), T = x_(y, () => L(!0));
    A6(() => L(!0));
    const D = () => document.getElementById(a), M = () => {
      o.value = !1, r.value = !0, Rc(() => {
        const pe = D();
        de(pe), r.value = !1, Rc(() => {
          o.value = !0, r.value = !0, T.value = !0;
        });
      });
    }, L = (pe = !1) => {
      R.value = "", x.value = "", O.value = "", H.value = "", r.value = !1, pe && (o.value = !1), T.value = !1;
    }, S = rm(e, "placement"), k = rm(e, "pointerAlignment"), I = 8, P = 24, x = qr(""), R = qr(""), O = qr(""), H = qr(""), $e = nm(() => H.value ? "p-" + H.value : !1), de = (pe) => {
      const ke = document.querySelector(`[${u}=${s}]`);
      if (!ke) {
        console.log("trigger not found");
        return;
      }
      Rc(() => {
        const ye = ke.getBoundingClientRect(), Ae = pe.getBoundingClientRect(), ve = j6(ye, Ae, S.value, I), Re = Z6(ve, ye, Ae, k.value, P);
        O.value = Re.toString(), H.value = ve.toString();
        let Fe = 0, Ye = 0;
        if ((ve === Qe.left || ve === Qe.right) && (Fe = ye.top + ye.height / 2 - Ae.height / 2, ve === Qe.left && (Ye = ye.left - Ae.width - I), ve === Qe.right && (Ye = ye.right)), ve === Qe.top || ve === Qe.bottom) {
          Fe = ye.top - Ae.height - I, ve === Qe.bottom && (Fe = ye.bottom);
          const zn = ye.left + ye.width / 2;
          switch (Re) {
            case Wn.center:
              Ye = zn - Ae.width / 2;
              break;
            case Wn.left:
              Ye = zn - P;
              break;
            case Wn.right:
              Ye = zn - Ae.width + P;
              break;
          }
        }
        x.value = Fe.toString() + "px", R.value = Ye.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: r,
      animate: o,
      alignmentClass: O,
      placementClass: $e,
      top: x,
      left: R,
      tooltipID: a
    };
  },
  components: {
    Pointer: G6
  }
}), X6 = ["id"];
function Q6(e, r, o, s, a, u) {
  const c = B6("Pointer");
  return Wa(), wd(T6, null, [
    (Wa(), D6(N6, { to: "body" }, [
      om(L6, { css: e.animate }, {
        default: M6(() => [
          e.show ? (Wa(), wd("div", {
            key: 0,
            class: O6(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: P6({ left: e.left, top: e.top })
          }, [
            Og("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, R6(e.title), 9, X6),
            om(c, { class: "tooltip-pointer" })
          ], 6)) : F6("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    U6(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var im = /* @__PURE__ */ Pg(J6, [["render", Q6], ["__scopeId", "data-v-3da6b22e"]]);
const e7 = window.Vue.defineComponent, Fc = window.Vue.normalizeStyle, Uc = window.Vue.createElementVNode, ji = window.Vue.unref, sm = window.Vue.toHandlers, am = window.Vue.mergeProps, lm = window.Vue.withCtx, um = window.Vue.createVNode, t7 = window.Vue.renderList, n7 = window.Vue.Fragment, Zi = window.Vue.openBlock, Ki = window.Vue.createElementBlock, cm = window.Vue.normalizeClass, dm = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const r7 = { class: "row" }, o7 = /* @__PURE__ */ e7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * r.proportion : 0, a = (u) => u ? (Number(u) - Number(r.minStart)) * r.proportion : 0;
    return (u, c) => (Zi(), Ki("div", r7, [
      Uc("div", {
        class: "line-gray",
        style: Fc({
          width: a(r.events[0].createTime) + "px"
        })
      }, null, 4),
      um(ji(im), {
        title: ji(kn)(e.alarm.firstEventTime)
      }, {
        default: lm(({ attrs: f, on: w }) => [
          Uc("div", am({ class: "circle" }, f, sm(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Zi(!0), Ki(n7, null, t7(r.events, (f, w) => (Zi(), Ki("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[w + 1] ? (Zi(), Ki("div", {
          key: 0,
          class: cm(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Fc({
            width: s(f.createTime, r.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : dm("", !0),
        um(ji(im), {
          title: ji(kn)(e.alarm.firstEventTime)
        }, {
          default: lm(({ attrs: v, on: _ }) => [
            r.events[w + 1] ? (Zi(), Ki("div", am({ key: 0 }, v, sm(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : dm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Uc("div", {
        class: cm(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Fc({
          width: s(e.events[e.events.length - 1].createTime, ji(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const i7 = /* @__PURE__ */ ce(o7, [["__scopeId", "data-v-3341d12d"]]), s7 = window.Vue.openBlock, a7 = window.Vue.createElementBlock, Rg = window.Vue.createElementVNode;
var l7 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const u7 = {}, c7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, d7 = /* @__PURE__ */ Rg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), f7 = /* @__PURE__ */ Rg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), h7 = [
  d7,
  f7
];
function p7(e, r) {
  return s7(), a7("svg", c7, h7);
}
var w7 = /* @__PURE__ */ l7(u7, [["render", p7]]);
const v7 = window.Vue.defineComponent, vd = window.Vue.createElementVNode, m7 = window.Vue.renderList, fm = window.Vue.Fragment, Wc = window.Vue.openBlock, qc = window.Vue.createElementBlock, _7 = window.Vue.normalizeClass, g7 = window.Vue.unref, hm = window.Vue.toDisplayString, $7 = window.Vue.pushScopeId, y7 = window.Vue.popScopeId, b7 = (e) => ($7("data-v-2e087f7b"), e = e(), y7(), e), V7 = /* @__PURE__ */ b7(() => /* @__PURE__ */ vd("strong", null, "Events:", -1)), C7 = /* @__PURE__ */ v7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (Wc(), qc(fm, null, [
      V7,
      (Wc(!0), qc(fm, null, m7(r.events, (a) => (Wc(), qc("div", {
        class: "event-description",
        key: a.id
      }, [
        vd("div", {
          class: _7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        vd("div", null, hm(g7(kn)(a.createTime)) + " - " + hm(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const S7 = /* @__PURE__ */ ce(C7, [["__scopeId", "data-v-2e087f7b"]]), k7 = window.Vue.defineComponent, E7 = window.Vue.normalizeClass, Ft = window.Vue.createElementVNode, To = window.Vue.toDisplayString, bt = window.Vue.unref, Do = window.Vue.createVNode, Fg = window.Vue.createTextVNode, I7 = window.Vue.renderList, pm = window.Vue.Fragment, Fn = window.Vue.openBlock, Hr = window.Vue.createElementBlock, wm = window.Vue.createBlock, Ba = window.Vue.createCommentVNode, x7 = window.Vue.normalizeStyle, A7 = window.Vue.pushScopeId, B7 = window.Vue.popScopeId, T7 = (e) => (A7("data-v-01717d0d"), e = e(), B7(), e), D7 = { class: "section detail" }, N7 = { class: "id" }, L7 = {
  key: 0,
  class: "section"
}, M7 = /* @__PURE__ */ T7(() => /* @__PURE__ */ Ft("div", { class: "id" }, "Alarms", -1)), O7 = { class: "action-btns" }, P7 = { class: "zoom" }, R7 = /* @__PURE__ */ Fg(" Zoom "), F7 = { class: "times" }, U7 = {
  key: 0,
  class: "timeline-container"
}, W7 = { class: "alarm-id" }, q7 = {
  key: 0,
  class: "panel"
}, ur = window.Vue.ref, H7 = window.Vue.watch, z7 = /* @__PURE__ */ k7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var P, x;
    const r = e, o = vn(), s = ur(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = ur(a[0]), c = ur(r.width), f = ur(r.width), w = ur(new Date().getTime()), v = () => {
      var R, O;
      if (!r.situation.events) {
        const H = (O = (R = r.situation) == null ? void 0 : R.alarms) == null ? void 0 : O.map(($e) => $e.id);
        o.getEvents(r.situation.id, H);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = ur(r.situation.alarms), y = ur(
      ((x = ge.exports.minBy((P = r.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : x.firstEventTime) || new Date().getTime()
    ), T = ur(_());
    H7(r, () => {
      var R, O;
      y.value = ((O = ge.exports.minBy((R = r.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || new Date().getTime(), v(), c.value = f.value, T.value = _(), $.value = r.situation.alarms, u.value = a[0];
    });
    const D = (R) => {
      if ((R == null ? void 0 : R.id) === 1 && ($.value = r.situation.alarms), (R == null ? void 0 : R.id) === 2) {
        const O = ge.exports.groupBy($.value, "severity"), H = [
          ...O.CRITICAL || [],
          ...O.MAJOR || [],
          ...O.MINOR || [],
          ...O.WARNING || [],
          ...O.NORMAL || [],
          ...O.CLEARED || [],
          ...O.INDETERMINATE || []
        ];
        $.value = H.filter(($e) => $e);
      }
      if ((R == null ? void 0 : R.id) === 3) {
        const O = ge.exports.reverse(
          ge.exports.sortBy(
            r.situation.alarms,
            (H) => Number(H.lastEventTime) - Number(H.firstEventTime)
          )
        );
        $.value = O;
      }
    }, M = () => {
      c.value += 100, T.value = _();
    }, L = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, k = (R) => {
      s.value = R;
    }, I = () => {
      s.value = 0;
    };
    return (R, O) => {
      var H, $e;
      return Fn(), Hr(pm, null, [
        Ft("div", D7, [
          Ft("div", {
            class: E7(["severity-line", [`${($e = (H = r.situation) == null ? void 0 : H.severity) == null ? void 0 : $e.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ft("div", null, [
            Ft("div", N7, "Situation " + To(r.situation.id), 1),
            Ft("div", null, " Duration: " + To(bt(sl)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Fn(), Hr("div", L7, [
          M7,
          Ft("div", O7, [
            Do(bt(m6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                O[0] || (O[0] = (de) => u.value = de),
                D
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ft("div", P7, [
              R7,
              Ft("div", null, [
                Do(bt(Z), {
                  icon: bt(E6),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                Do(bt(Z), {
                  icon: bt(z_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                Do(bt(Z), {
                  icon: bt(w7),
                  class: "zoom-icon",
                  onClick: L
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Fn(), Hr("div", {
            key: 0,
            class: "alarms",
            style: x7({
              width: f.value + 50 + "px"
            })
          }, [
            Ft("div", F7, [
              Ft("div", null, To(bt(kn)(y.value)), 1),
              Ft("div", null, To(bt(kn)(w.value)), 1)
            ]),
            e.situation.events ? (Fn(), Hr("div", U7, [
              (Fn(!0), Hr(pm, null, I7($.value, (de) => (Fn(), Hr("div", {
                class: "timeline",
                key: de.id
              }, [
                Ft("div", W7, [
                  Fg(To(de.nodeLabel) + " - " + To(de.id) + " ", 1),
                  s.value === de.id ? (Fn(), wm(bt(Z), {
                    key: 0,
                    icon: bt(vl),
                    class: "zoom-icon expand",
                    onClick: I
                  }, null, 8, ["icon"])) : (Fn(), wm(bt(Z), {
                    key: 1,
                    icon: bt(y_),
                    class: "zoom-icon expand",
                    onClick: () => k(de.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                Do(i7, {
                  alarm: de,
                  proportion: T.value,
                  "min-start": y.value,
                  events: r.situation.events[de.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === de.id ? (Fn(), Hr("div", q7, [
                  Do(S7, {
                    events: r.situation.events[de.id]
                  }, null, 8, ["events"])
                ])) : Ba("", !0)
              ]))), 128))
            ])) : Ba("", !0)
          ], 4)) : Ba("", !0)
        ])) : Ba("", !0)
      ], 64);
    };
  }
});
const Y7 = /* @__PURE__ */ ce(z7, [["__scopeId", "data-v-01717d0d"]]), G7 = window.Vue.defineComponent, Ct = window.Vue.createElementVNode, fn = window.Vue.unref, ut = window.Vue.createTextVNode, No = window.Vue.withCtx, Te = window.Vue.openBlock, j7 = window.Vue.createBlock, Ta = window.Vue.createCommentVNode, cr = window.Vue.createVNode, Me = window.Vue.createElementBlock, Z7 = window.Vue.resolveComponent, zr = window.Vue.toDisplayString, vm = window.Vue.renderList, mm = window.Vue.Fragment, K7 = window.Vue.pushScopeId, J7 = window.Vue.popScopeId, ci = (e) => (K7("data-v-8f1d9e34"), e = e(), J7(), e), X7 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, Q7 = { class: "header" }, eF = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ct("h3", null, "AI Suggestions", -1)), tF = { class: "header-actions" }, nF = /* @__PURE__ */ ut(" Re-evaluate "), rF = /* @__PURE__ */ ut(" Refresh "), oF = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, iF = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ct("span", null, "Loading\u2026", -1)), sF = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, aF = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ct("span", null, "Requesting a fresh analysis\u2026", -1)), lF = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, uF = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, cF = /* @__PURE__ */ ut(" The Claude integration is currently disabled. Enable it on the "), dF = /* @__PURE__ */ ut("configuration page"), fF = /* @__PURE__ */ ut(" to start generating suggestions for new situations. "), hF = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, pF = /* @__PURE__ */ ut(" No Anthropic API key is configured. Add one on the "), wF = /* @__PURE__ */ ut("configuration page"), vF = /* @__PURE__ */ ut(" to enable AI suggestions. "), mF = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, _F = /* @__PURE__ */ ut(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), gF = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ct("strong", null, "Re-evaluate", -1)), $F = /* @__PURE__ */ ut(" above to trigger one now. "), yF = [
  _F,
  gF,
  $F
], bF = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, VF = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, CF = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, SF = { class: "failed-msg" }, kF = /* @__PURE__ */ ut(" The last Claude request failed: "), EF = /* @__PURE__ */ ut(" Retry "), IF = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, xF = /* @__PURE__ */ ut(" Could not load suggestions. Please retry. "), AF = /* @__PURE__ */ ut("Retry"), BF = {
  key: 6,
  "data-test": "ai-ready"
}, TF = {
  key: 0,
  class: "meta"
}, DF = /* @__PURE__ */ ut(" Generated by "), NF = { class: "section" }, LF = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ct("h4", null, "Probable root causes", -1)), MF = {
  key: 0,
  "data-test": "ai-root-causes"
}, OF = {
  key: 1,
  class: "empty"
}, PF = { class: "section" }, RF = /* @__PURE__ */ ci(() => /* @__PURE__ */ Ct("h4", null, "Possible resolutions", -1)), FF = {
  key: 0,
  "data-test": "ai-resolutions"
}, UF = {
  key: 1,
  class: "empty"
}, Hc = window.Vue.computed, WF = window.Vue.onBeforeUnmount, qF = window.Vue.onMounted, zc = window.Vue.ref, HF = /* @__PURE__ */ G7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const r = e, o = no(), s = zc("loading"), a = zc(null), u = zc(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const k = await v_(r.situationId);
      if (k === !1) {
        s.value = "error";
        return;
      }
      if (k === null) {
        s.value = "absent", a.value = null;
        return;
      }
      a.value = k, s.value = k.status;
    }, T = async () => {
      s.value = "loading", _(), await y(), $();
    }, D = async () => {
      u.value = null, s.value = "reanalyzing", _();
      const k = await rI(r.situationId);
      if (k === !1) {
        s.value = "absent", u.value = "Could not start a new analysis. Make sure Claude is enabled on the configuration page and an API key is saved.", await o.getClaudeConfig();
        return;
      }
      a.value = k, s.value = k.status, $();
    };
    qF(async () => {
      o.claudeConfig === null && await o.getClaudeConfig(), await y(), $();
    }), WF(() => _());
    const M = Hc(() => {
      var k;
      return (k = a.value) != null && k.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), L = Hc(() => {
      const k = o.claudeConfig;
      return !k || !k.enabled ? "disabled" : k.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = Hc(
      () => {
        var k, I;
        return ((k = o.claudeConfig) == null ? void 0 : k.enabled) === !0 && ((I = o.claudeConfig) == null ? void 0 : I.apiKeyPresent) === !0;
      }
    );
    return (k, I) => {
      var x;
      const P = Z7("router-link");
      return Te(), Me("div", X7, [
        Ct("div", Q7, [
          eF,
          Ct("div", tF, [
            fn(S) ? (Te(), j7(fn(le), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: D
            }, {
              default: No(() => [
                nF
              ]),
              _: 1
            }, 8, ["disabled"])) : Ta("", !0),
            cr(fn(le), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: T
            }, {
              default: No(() => [
                rF
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (Te(), Me("div", oF, [
          cr(fn(zo)),
          iF
        ])) : s.value === "reanalyzing" ? (Te(), Me("div", sF, [
          cr(fn(zo)),
          aF
        ])) : s.value === "absent" ? (Te(), Me("div", lF, [
          fn(L) === "disabled" ? (Te(), Me("span", uF, [
            cF,
            cr(P, { to: "/settings" }, {
              default: No(() => [
                dF
              ]),
              _: 1
            }),
            fF
          ])) : fn(L) === "no-key" ? (Te(), Me("span", hF, [
            pF,
            cr(P, { to: "/settings" }, {
              default: No(() => [
                wF
              ]),
              _: 1
            }),
            vF
          ])) : (Te(), Me("span", mF, yF)),
          u.value ? (Te(), Me("div", bF, zr(u.value), 1)) : Ta("", !0)
        ])) : s.value === "pending" ? (Te(), Me("div", VF, [
          cr(fn(zo)),
          Ct("span", null, " Analyzing alarms with Claude\u2026 requested at " + zr(fn(M)) + ". ", 1)
        ])) : s.value === "failed" ? (Te(), Me("div", CF, [
          Ct("div", SF, [
            kF,
            Ct("code", null, zr(((x = a.value) == null ? void 0 : x.error) || "unknown error"), 1)
          ]),
          cr(fn(le), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: T
          }, {
            default: No(() => [
              EF
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (Te(), Me("div", IF, [
          xF,
          cr(fn(le), {
            secondary: "",
            onClick: T
          }, {
            default: No(() => [
              AF
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (Te(), Me("div", BF, [
          a.value.completedAt ? (Te(), Me("div", TF, [
            DF,
            Ct("strong", null, zr(a.value.model), 1),
            ut(" at " + zr(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Ta("", !0),
          Ct("div", NF, [
            LF,
            a.value.rootCauses.length ? (Te(), Me("ol", MF, [
              (Te(!0), Me(mm, null, vm(a.value.rootCauses, (R, O) => (Te(), Me("li", {
                key: `cause-${O}`
              }, zr(R), 1))), 128))
            ])) : (Te(), Me("div", OF, "No root causes returned."))
          ]),
          Ct("div", PF, [
            RF,
            a.value.resolutions.length ? (Te(), Me("ol", FF, [
              (Te(!0), Me(mm, null, vm(a.value.resolutions, (R, O) => (Te(), Me("li", {
                key: `res-${O}`
              }, zr(R), 1))), 128))
            ])) : (Te(), Me("div", UF, "No resolutions returned."))
          ])
        ])) : Ta("", !0)
      ]);
    };
  }
});
const zF = /* @__PURE__ */ ce(HF, [["__scopeId", "data-v-8f1d9e34"]]), YF = window.Vue.openBlock, GF = window.Vue.createElementBlock, jF = window.Vue.createElementVNode;
var ZF = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const KF = {}, JF = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, XF = /* @__PURE__ */ jF("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), QF = [
  XF
];
function e9(e, r) {
  return YF(), GF("svg", JF, QF);
}
var Yo = /* @__PURE__ */ ZF(KF, [["render", e9]]);
const Ug = window.Vue.defineComponent, Yc = window.Vue.ref, t9 = window.Vue.toRef, Gc = window.Vue.inject, _m = window.Vue.watch, n9 = window.Vue.nextTick, gm = window.Vue.openBlock, $m = window.Vue.createElementBlock, jc = window.Vue.createElementVNode, r9 = window.Vue.normalizeClass, ym = window.Vue.renderSlot, bm = window.Vue.createCommentVNode, Zc = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var o9 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const i9 = {
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
}, s9 = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, a9 = Ug({
  emits: s9,
  props: i9,
  setup(e, r) {
    const o = Yc(), s = Yc(!1), a = Yc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = t9(e, "modelValue"), f = Gc("queueSnackbar", !1), w = Gc("unqueueSnackbar", !1), v = Gc("nextSnackbar", () => {
    }), _ = (M, L) => {
      let S, k, I = L;
      const P = () => {
        !S || (to(S), S = 0, I -= Date.now() - k);
      }, x = () => {
        S || (k = Date.now(), S = eo(M, I));
      };
      return x(), { pause: P, resume: x };
    }, $ = () => {
      s.value = !1, r.emit("closed"), v && v();
    }, y = (M) => {
      M.keyCode === te.ESCAPE && (a.value = !1);
    }, T = () => {
      o.value.pause();
    }, D = () => {
      a.value && o.value.resume();
    };
    return _m(c, (M) => {
      M ? n9(() => {
        f === !1 ? a.value = M : f(u, a);
      }) : w === !1 ? a.value = M : w(u);
    }, { immediate: !0 }), _m(a, (M) => {
      M ? (s.value = !0, o.value = _(() => {
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
      resumeTimer: D
    };
  }
}), l9 = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, u9 = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, c9 = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, d9 = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function f9(e, r, o, s, a, u) {
  return e.modelValue || e.contentShow ? (gm(), $m("div", l9, [
    jc("div", {
      class: r9(["feather-snackbar", {
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
      jc("div", u9, [
        e.contentShow ? (gm(), $m("div", c9, [
          ym(e.$slots, "default", {}, void 0, !0)
        ])) : bm("", !0)
      ]),
      jc("div", d9, [
        ym(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : bm("", !0);
}
var Vl = /* @__PURE__ */ o9(a9, [["render", f9], ["__scopeId", "data-v-5cf64a62"]]);
const h9 = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
Ug({
  props: h9,
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
    return Zc("queueSnackbar", s), Zc("unqueueSnackbar", a), Zc("nextSnackbar", u), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const p9 = window.Vue.defineComponent, xe = window.Vue.unref, st = window.Vue.createVNode, ds = window.Vue.createElementVNode, Vt = window.Vue.withCtx, Yr = window.Vue.openBlock, Kc = window.Vue.createBlock, Vm = window.Vue.createCommentVNode, ws = window.Vue.createTextVNode, Da = window.Vue.createElementBlock, Cm = window.Vue.toDisplayString, w9 = window.Vue.pushScopeId, v9 = window.Vue.popScopeId, qd = (e) => (w9("data-v-a5b2d880"), e = e(), v9(), e), m9 = { id: "cont" }, _9 = { class: "btns-navigation" }, g9 = /* @__PURE__ */ qd(() => /* @__PURE__ */ ds("span", null, "Situation List", -1)), $9 = /* @__PURE__ */ qd(() => /* @__PURE__ */ ds("span", null, "Show Previous Situation ", -1)), y9 = /* @__PURE__ */ qd(() => /* @__PURE__ */ ds("span", null, "Show Next Situation", -1)), b9 = { key: 1 }, V9 = {
  key: 0,
  class: "detail"
}, C9 = /* @__PURE__ */ ws("Details"), S9 = /* @__PURE__ */ ws("Metrics"), k9 = /* @__PURE__ */ ws("AI Suggestions"), E9 = {
  key: 1,
  class: "noSituation"
}, I9 = /* @__PURE__ */ ws("dismiss"), Gr = window.Vue.ref, Sm = window.Vue.watch, x9 = window.Vue.onMounted, A9 = window.VueRouter.useRoute, B9 = /* @__PURE__ */ p9({
  __name: "SituationDetail",
  setup(e) {
    const r = $r(), o = A9(), s = parseInt(o.params.id), a = Gr(s), u = vn(), c = $l(), f = Gr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Gr(), v = Gr(), _ = Gr(!0), $ = Gr(
      u.filteredSituations.findIndex((L) => L === a.value)
    ), y = Gr(!1);
    Sm(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), x9(() => {
      var S;
      const L = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = L - 90;
    });
    const T = () => {
      r.push({
        name: "situations"
      });
    }, D = (L) => {
      const S = $.value, k = u.filteredSituations[S + L];
      r.push({
        name: "situationDetail",
        params: {
          id: k
        }
      });
    };
    Sm(o, () => {
      a.value = parseInt(o.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((L) => L == a.value);
    }), c.$subscribe((L, S) => {
      y.value = S.showError;
    });
    const M = (L) => {
      f.value = L || 0;
    };
    return (L, S) => (Yr(), Da("div", m9, [
      ds("div", _9, [
        st(xe(le), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: Vt(() => [
            st(xe(Z), {
              icon: xe(Yo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            g9
          ]),
          _: 1
        }),
        ds("div", null, [
          st(xe(le), {
            disabled: !xe(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => D(-1))
          }, {
            default: Vt(() => [
              st(xe(Z), {
                icon: xe(Yo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              $9
            ]),
            _: 1
          }, 8, ["disabled"]),
          st(xe(le), {
            disabled: !xe(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => D(1))
          }, {
            default: Vt(() => [
              y9,
              st(xe(Z), {
                icon: xe(Yo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (Yr(), Kc(xe(zo), {
        key: 0,
        class: "spinner"
      })) : (Yr(), Da("div", b9, [
        w.value ? (Yr(), Da("div", V9, [
          st(xe(N4), { "onUpdate:modelValue": M }, {
            tabs: Vt(() => [
              st(xe(gc), null, {
                default: Vt(() => [
                  C9
                ]),
                _: 1
              }),
              st(xe(gc), null, {
                default: Vt(() => [
                  S9
                ]),
                _: 1
              }),
              st(xe(gc), { "data-test": "ai-suggestions-tab" }, {
                default: Vt(() => [
                  k9
                ]),
                _: 1
              })
            ]),
            default: Vt(() => [
              st(xe($c), { class: "panel" }, {
                default: Vt(() => [
                  st(Z5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              st(xe($c), { class: "panel" }, {
                default: Vt(() => [
                  v.value && f.value == 1 ? (Yr(), Kc(Y7, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Vm("", !0)
                ]),
                _: 1
              }),
              st(xe($c), { class: "panel" }, {
                default: Vt(() => [
                  f.value == 2 ? (Yr(), Kc(zF, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : Vm("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Yr(), Da("div", E9, " Error. The situation " + Cm(xe(s)) + " does not exist. ", 1))
      ])),
      st(xe(Vl), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (k) => y.value = k),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Vt(() => [
          st(xe(le), {
            onClick: S[3] || (S[3] = (k) => y.value = !1),
            text: ""
          }, {
            default: Vt(() => [
              I9
            ]),
            _: 1
          })
        ]),
        default: Vt(() => [
          ws(Cm(xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const T9 = /* @__PURE__ */ ce(B9, [["__scopeId", "data-v-a5b2d880"]]), D9 = window.Vue.defineComponent, Xe = window.Vue.unref, Xt = window.Vue.createVNode, wt = window.Vue.createElementVNode, Lo = window.Vue.withCtx, Mo = window.Vue.openBlock, Ji = window.Vue.createElementBlock, N9 = window.Vue.createCommentVNode, L9 = window.Vue.toDisplayString, Hd = window.Vue.createTextVNode, M9 = window.Vue.normalizeClass, O9 = window.Vue.renderList, P9 = window.Vue.Fragment, R9 = window.Vue.createBlock, F9 = window.Vue.pushScopeId, U9 = window.Vue.popScopeId, vs = (e) => (F9("data-v-1a57a9f3"), e = e(), U9(), e), W9 = { class: "container" }, q9 = /* @__PURE__ */ vs(() => /* @__PURE__ */ wt("span", null, "Situation List", -1)), H9 = /* @__PURE__ */ vs(() => /* @__PURE__ */ wt("h2", null, "New Situation", -1)), z9 = { class: "form" }, Y9 = { class: "fields" }, G9 = {
  key: 0,
  class: "errorList"
}, j9 = { class: "footer" }, Z9 = /* @__PURE__ */ vs(() => /* @__PURE__ */ wt("span", null, "Clear", -1)), K9 = /* @__PURE__ */ vs(() => /* @__PURE__ */ wt("span", null, "Add Situation", -1)), J9 = { class: "alarm-column" }, X9 = { class: "header-alarms" }, Q9 = /* @__PURE__ */ vs(() => /* @__PURE__ */ wt("h3", null, "Add Unassociated Alarms", -1)), eU = /* @__PURE__ */ Hd(" Total Alarms Added: "), tU = { class: "total" }, nU = { class: "list" }, rU = { class: "filters" }, oU = {
  key: 0,
  class: "alarms"
}, iU = /* @__PURE__ */ Hd(" Error on creating new situation :( "), sU = /* @__PURE__ */ Hd("dismiss"), dr = window.Vue.ref, aU = window.Vue.watch, lU = /* @__PURE__ */ D9({
  __name: "AddSituation",
  setup(e) {
    const r = $r(), o = vn(), s = dr(), a = dr(""), u = dr(), c = dr(""), f = dr([]), w = dr(!1), v = dr(), _ = dr(o.unassignedAlarms);
    _.value.length || o.getUnassignedAlarms(), aU(
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
      w.value = !1, ge.exports.includes(f.value, S) ? ge.exports.remove(f.value, (k) => k === S) : f.value.push(S);
    }, T = () => {
      const S = "This field should not be empty";
      let k = !0;
      return s.value || (a.value = S, k = !1), u.value || (c.value = S, k = !1), f.value.length < 2 && (w.value = !0, k = !1), k;
    }, D = async () => {
      if (T()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: s.value
        };
        await iI(S) ? r.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, M = () => {
      s.value = "", u.value = "", f.value = [], _.value = o.unassignedAlarms;
    }, L = (S) => {
      _.value = S;
    };
    return (S, k) => (Mo(), Ji("div", W9, [
      Xt(Xe(le), {
        primary: "",
        onClick: k[0] || (k[0] = () => $()),
        class: "back-btn"
      }, {
        default: Lo(() => [
          Xt(Xe(Z), {
            icon: Xe(Yo),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          q9
        ]),
        _: 1
      }),
      H9,
      wt("div", z9, [
        wt("div", Y9, [
          Xt(Xe(fd), {
            modelValue: s.value,
            "onUpdate:modelValue": k[1] || (k[1] = (I) => s.value = I),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Xt(Xe(fd), {
            modelValue: u.value,
            "onUpdate:modelValue": k[2] || (k[2] = (I) => u.value = I),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (Mo(), Ji("div", G9, " You must add at least 2 alarms. ")) : N9("", !0),
          wt("div", j9, [
            Xt(Xe(le), {
              class: "btn",
              onClick: M
            }, {
              default: Lo(() => [
                Xt(Xe(Z), {
                  icon: Xe(Qo),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                Z9
              ]),
              _: 1
            }),
            Xt(Xe(le), {
              class: "btn-add",
              onClick: D
            }, {
              default: Lo(() => [
                Xt(Xe(Z), {
                  icon: Xe(gl),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                K9
              ]),
              _: 1
            })
          ])
        ]),
        wt("div", J9, [
          wt("div", X9, [
            Q9,
            wt("div", null, [
              wt("div", {
                class: M9(["totalAlarms", { errorList: w.value }])
              }, [
                eU,
                wt("span", tU, L9(Xe(f).length), 1)
              ], 2)
            ])
          ]),
          wt("div", nU, [
            wt("div", rU, [
              Xt(ai, {
                list: Xe(o).unassignedAlarms,
                onFilteredList: L,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (Mo(), Ji("div", oU, [
              (Mo(!0), Ji(P9, null, O9(_.value, (I) => (Mo(), Ji("div", {
                key: I.id,
                class: "alarm-card"
              }, [
                Xt(Wd, {
                  selected: Xe(ge.exports.includes)(Xe(f), I.id),
                  alarm: I,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Mo(), R9(li, { key: 1 }))
          ])
        ])
      ]),
      Xt(Xe(Vl), {
        modelValue: v.value,
        "onUpdate:modelValue": k[4] || (k[4] = (I) => v.value = I),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Lo(() => [
          Xt(Xe(le), {
            onClick: k[3] || (k[3] = (I) => v.value = !1),
            text: ""
          }, {
            default: Lo(() => [
              sU
            ]),
            _: 1
          })
        ]),
        default: Lo(() => [
          iU
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const uU = /* @__PURE__ */ ce(lU, [["__scopeId", "data-v-1a57a9f3"]]), cU = window.Vue.defineComponent, dU = window.Vue.createElementVNode, fU = window.Vue.createTextVNode, hU = window.Vue.unref, pU = window.Vue.withCtx, wU = window.Vue.createVNode, vU = window.Vue.Fragment, mU = window.Vue.openBlock, _U = window.Vue.createElementBlock, gU = window.Vue.pushScopeId, $U = window.Vue.popScopeId, yU = (e) => (gU("data-v-bcb7dcc6"), e = e(), $U(), e), bU = /* @__PURE__ */ yU(() => /* @__PURE__ */ dU("div", { class: "main" }, "Something bad is happening...", -1)), VU = /* @__PURE__ */ fU(" Reload "), CU = /* @__PURE__ */ cU({
  __name: "ErrorPage",
  setup(e) {
    const r = $r(), o = () => {
      r.push({ name: "situations" });
    };
    return (s, a) => (mU(), _U(vU, null, [
      bU,
      wU(hU(le), {
        primary: "",
        onClick: o
      }, {
        default: pU(() => [
          VU
        ]),
        _: 1
      })
    ], 64));
  }
});
const SU = /* @__PURE__ */ ce(CU, [["__scopeId", "data-v-bcb7dcc6"]]), kU = window.Vue.defineComponent, pt = window.Vue.unref, hn = window.Vue.createVNode, pr = window.Vue.createElementVNode, Xi = window.Vue.withCtx, jr = window.Vue.openBlock, km = window.Vue.createBlock, EU = window.Vue.renderList, IU = window.Vue.Fragment, Qi = window.Vue.createElementBlock, xU = window.Vue.toDisplayString, Wg = window.Vue.createTextVNode, AU = window.Vue.pushScopeId, BU = window.Vue.popScopeId, zd = (e) => (AU("data-v-6078e4ad"), e = e(), BU(), e), TU = { class: "container" }, DU = { class: "nav-btns" }, NU = /* @__PURE__ */ zd(() => /* @__PURE__ */ pr("span", null, "Situation List", -1)), LU = /* @__PURE__ */ zd(() => /* @__PURE__ */ pr("h2", null, "List Unassociated Alarms", -1)), MU = { class: "content" }, OU = { class: "filters" }, PU = { class: "list" }, RU = { class: "action-btns" }, FU = /* @__PURE__ */ zd(() => /* @__PURE__ */ pr("span", null, "Move", -1)), UU = { key: 1 }, WU = {
  key: 0,
  class: "alarms"
}, qU = /* @__PURE__ */ Wg("dismiss"), fr = window.Vue.ref, HU = window.Vue.watch, zU = window.Vue.markRaw, YU = /* @__PURE__ */ kU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = zU({
      ArrowBack: Yo,
      ExitToApp: hd
    }), o = $r(), s = vn();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = fr([]), u = fr([]), c = fr(!1), f = fr(!1), w = fr(""), v = fr(!1), _ = fr(!1), $ = fr(!0);
    HU(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (k) => {
      ge.exports.includes(u.value, k) ? ge.exports.remove(u.value, (I) => I === k) : u.value.push(k);
    }, T = () => {
      c.value ? u.value = a.value.map((k) => k.id) : u.value = [];
    }, D = async (k) => {
      await __(k, u.value) ? s.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, M = () => {
      o.push({
        name: "situations"
      });
    }, L = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (k) => {
      a.value = k;
    };
    return (k, I) => (jr(), Qi("div", TU, [
      pr("div", DU, [
        hn(pt(le), {
          primary: "",
          onClick: I[0] || (I[0] = () => M())
        }, {
          default: Xi(() => [
            hn(pt(Z), {
              icon: pt(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NU
          ]),
          _: 1
        }),
        hn(Z_)
      ]),
      LU,
      pr("div", MU, [
        pr("div", OU, [
          hn(ai, {
            list: pt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        pr("div", PU, [
          pr("div", RU, [
            hn(pt(Qr), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                I[1] || (I[1] = (P) => c.value = P),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            hn(pt(le), { onClick: L }, {
              default: Xi(() => [
                hn(pt(Z), {
                  icon: pt(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                FU
              ]),
              _: 1
            })
          ]),
          $.value ? (jr(), km(pt(zo), {
            key: 0,
            class: "spinner"
          })) : (jr(), Qi("div", UU, [
            pt(a).length ? (jr(), Qi("div", WU, [
              (jr(!0), Qi(IU, null, EU(pt(a), (P) => (jr(), Qi("div", {
                key: P.id,
                class: "card"
              }, [
                hn(Wd, {
                  selected: pt(ge.exports.includes)(pt(u), P.id),
                  alarm: P,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (jr(), km(li, { key: 1 }))
          ]))
        ])
      ]),
      hn(Bg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: I[2] || (I[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      hn(pt(Vl), {
        modelValue: v.value,
        "onUpdate:modelValue": I[4] || (I[4] = (P) => v.value = P),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: Xi(() => [
          hn(pt(le), {
            onClick: I[3] || (I[3] = (P) => v.value = !1),
            text: ""
          }, {
            default: Xi(() => [
              qU
            ]),
            _: 1
          })
        ]),
        default: Xi(() => [
          Wg(xU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const GU = /* @__PURE__ */ ce(YU, [["__scopeId", "data-v-6078e4ad"]]), jU = window.Vue.defineComponent, Jc = window.Vue.unref, ZU = window.Vue.createVNode, KU = window.Vue.createElementVNode, JU = window.Vue.withCtx, XU = window.Vue.openBlock, QU = window.Vue.createBlock, eW = window.Vue.pushScopeId, tW = window.Vue.popScopeId, nW = (e) => (eW("data-v-17251e76"), e = e(), tW(), e), rW = /* @__PURE__ */ nW(() => /* @__PURE__ */ KU("span", null, "Situation List", -1)), oW = window.Vue.markRaw, iW = /* @__PURE__ */ jU({
  __name: "SituationListBtn",
  setup(e) {
    const r = $r(), o = oW({
      ArrowBack: Yo
    }), s = () => {
      r.push({
        name: "situations"
      });
    };
    return (a, u) => (XU(), QU(Jc(le), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: JU(() => [
        ZU(Jc(Z), {
          icon: Jc(o).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        rW
      ]),
      _: 1
    }));
  }
});
const sW = /* @__PURE__ */ ce(iW, [["__scopeId", "data-v-17251e76"]]);
var aW = Object.defineProperty, lW = Object.defineProperties, uW = Object.getOwnPropertyDescriptors, Em = Object.getOwnPropertySymbols, cW = Object.prototype.hasOwnProperty, dW = Object.prototype.propertyIsEnumerable, Im = (e, r, o) => r in e ? aW(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Wo = (e, r) => {
  for (var o in r || (r = {}))
    cW.call(r, o) && Im(e, o, r[o]);
  if (Em)
    for (var o of Em(r))
      dW.call(r, o) && Im(e, o, r[o]);
  return e;
}, fW = (e, r) => lW(e, uW(r));
const hW = window.Vue.defineComponent, xm = window.Vue.toRef, pW = window.Vue.computed, wW = window.Vue.ref, Am = window.Vue.resolveComponent, Bm = window.Vue.openBlock, Tm = window.Vue.createElementBlock, Dm = window.Vue.mergeProps, Nm = window.Vue.createVNode, vW = window.Vue.normalizeClass, Na = window.Vue.withCtx, Lm = window.Vue.renderSlot, mW = window.Vue.createElementVNode, _W = window.Vue.toHandlers, gW = window.Vue.toDisplayString, $W = window.Vue.createCommentVNode, yW = Wo(Wo({
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
}, cl), oi), bW = {
  "update:modelValue": (e) => !0
};
var VW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const CW = hW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: bW,
  props: yW,
  setup(e, r) {
    ii(e), dl(e);
    const o = xm(e, "id"), s = pW(() => o.value ? o.value : ue("feather-input-label")), a = wW(), { validate: u } = ni(s, a, e.label, e.schema, xm(e, "error"));
    return Wo({
      inputId: s,
      internalValue: a,
      validate: u
    }, ri(r.attrs));
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
      const e = Wo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), fW(Wo(Wo({}, e), this.listeners), {
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
    InputSubText: ti,
    InputWrapper: ul
  }
}), SW = ["maxlength"], kW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function EW(e, r, o, s, a, u) {
  const c = Am("InputWrapper"), f = Am("InputSubText");
  return Bm(), Tm("div", Dm(e.inherittedAttrs, { class: "feather-input-container" }), [
    Nm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: vW(["feather-input-content", e.contentCls])
    }, {
      pre: Na(() => [
        Lm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Na(() => [
        Lm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Na(() => [
        mW("input", Dm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, _W(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, SW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Nm(f, { id: e.descriptionId }, {
      right: Na(() => [
        e.maxlength ? (Bm(), Tm("div", kW, gW(e.charCount), 1)) : $W("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Oo = /* @__PURE__ */ VW(CW, [["render", EW], ["__scopeId", "data-v-bf37b0d6"]]);
const IW = window.Vue.openBlock, xW = window.Vue.createElementBlock, Yd = window.Vue.createElementVNode;
var AW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const BW = {}, TW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DW = /* @__PURE__ */ Yd("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), NW = /* @__PURE__ */ Yd("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), LW = /* @__PURE__ */ Yd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), MW = [
  DW,
  NW,
  LW
];
function OW(e, r) {
  return IW(), xW("svg", TW, MW);
}
var PW = /* @__PURE__ */ AW(BW, [["render", OW]]);
const RW = window.Vue.openBlock, FW = window.Vue.createElementBlock, qg = window.Vue.createElementVNode;
var UW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const WW = {}, qW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HW = /* @__PURE__ */ qg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), zW = /* @__PURE__ */ qg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), YW = [
  HW,
  zW
];
function GW(e, r) {
  return RW(), FW("svg", qW, YW);
}
var jW = /* @__PURE__ */ UW(WW, [["render", GW]]);
const ZW = window.Vue.defineComponent, Oe = window.Vue.createVNode, W = window.Vue.createElementVNode, z = window.Vue.unref, tt = window.Vue.createTextVNode, Pt = window.Vue.withCtx, Rt = window.Vue.openBlock, yn = window.Vue.createElementBlock, Qt = window.Vue.createCommentVNode, Xc = window.Vue.createBlock, qe = window.Vue.toDisplayString, Mm = window.Vue.Fragment, KW = window.Vue.createStaticVNode, JW = window.Vue.pushScopeId, XW = window.Vue.popScopeId, De = (e) => (JW("data-v-048cdb69"), e = e(), XW(), e), QW = { class: "container" }, eq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), tq = { class: "section" }, nq = { class: "title" }, rq = /* @__PURE__ */ tt(" Choose the correlation engine that ALEC will use (see "), oq = ["href"], iq = /* @__PURE__ */ tt(" for more information): "), sq = /* @__PURE__ */ tt("Clustering"), aq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("div", { class: "hellinger" }, [
  /* @__PURE__ */ W("strong", null, "Hellinger distance")
], -1)), lq = /* @__PURE__ */ tt(" LLM Based "), uq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), cq = {
  class: "section",
  "data-test": "claude-section"
}, dq = { class: "title-row" }, fq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("div", { class: "title" }, "Claude Root Cause Analysis", -1)), hq = ["aria-expanded"], pq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("div", { class: "claude-help" }, " When a new situation is created, ALEC will ask Claude to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. The API key is stored on the OpenNMS server and applies to all users of this plugin. ", -1)), wq = {
  key: 0,
  class: "help-popover",
  "data-test": "claude-key-help-popover"
}, vq = /* @__PURE__ */ KW('<strong data-v-048cdb69>How to get an Anthropic API key:</strong><ol data-v-048cdb69><li data-v-048cdb69> Go to <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" data-v-048cdb69>console.anthropic.com</a> and sign in (or create an account). </li><li data-v-048cdb69> Add a payment method under <em data-v-048cdb69>Billing \u2192 Add payment method</em>. Anthropic requires this before any API key can be created. </li><li data-v-048cdb69> Open <em data-v-048cdb69>API Keys</em> in the left sidebar and click <em data-v-048cdb69>Create Key</em>. Give it a descriptive name (e.g. <code data-v-048cdb69>alec-claude-suggestions</code>) so you can revoke it later without affecting other integrations. </li><li data-v-048cdb69><strong data-v-048cdb69>Copy the key immediately</strong> \u2014 it starts with <code data-v-048cdb69>sk-ant-\u2026</code> and Anthropic only shows it once. </li><li data-v-048cdb69> Paste it into the field below and click <em data-v-048cdb69>Save Changes</em>. The key is stored on the OpenNMS server; it is never returned to the browser after saving. </li></ol><p class="pricing-hint" data-v-048cdb69> Pricing for the Sonnet 4.6 model that ALEC uses: $3 / $15 per million input / output tokens (cache reads cheaper). A single situation analysis is typically a few hundred tokens \u2014 fractions of a cent. Track 30-day usage in the panel below after you save. </p>', 3), mq = [
  vq
], _q = /* @__PURE__ */ De(() => /* @__PURE__ */ W("strong", null, "Claude Enabled Root Cause Analysis", -1)), gq = /* @__PURE__ */ tt(" Automatically AI Evaluate new situations "), $q = /* @__PURE__ */ De(() => /* @__PURE__ */ W("div", { class: "caption-inline" }, " When off, new situations are not analyzed automatically \u2014 click Re-evaluate on the AI Suggestions tab to trigger an analysis on demand. ", -1)), yq = {
  key: 1,
  class: "caption",
  "data-test": "claude-no-key-hint"
}, bq = { class: "claude-key-row" }, Vq = /* @__PURE__ */ tt(" Clear Key "), Cq = {
  key: 2,
  class: "claude-key-saved",
  "data-test": "claude-key-saved"
}, Sq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), kq = {
  key: 3,
  class: "caption",
  "data-test": "claude-cleared-hint"
}, Eq = {
  key: 4,
  class: "claude-usage",
  "data-test": "claude-usage"
}, Iq = { class: "usage-summary" }, xq = { class: "usage-label" }, Aq = ["title"], Bq = ["title"], Tq = {
  key: 0,
  class: "usage-details",
  "data-test": "claude-usage-details"
}, Dq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("dt", null, "Input", -1)), Nq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("dt", null, "Output", -1)), Lq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("dt", null, "Cache read", -1)), Mq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("dt", null, "Cache create", -1)), Oq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("dt", null, "Calls", -1)), Pq = { class: "muted" }, Rq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("dt", null, "Cache hit", -1)), Fq = { class: "pricing-note" }, Uq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, Wq = { class: "title-row" }, qq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("div", { class: "title" }, "Correlation variables", -1)), Hq = ["aria-expanded"], zq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, Yq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("strong", null, "Alpha (\u03B1)", -1)), Gq = /* @__PURE__ */ tt(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), jq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("strong", null, "Beta (\u03B2)", -1)), Zq = /* @__PURE__ */ tt(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), Kq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("code", null, "[0, 1]", -1)), Jq = /* @__PURE__ */ tt(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), Xq = /* @__PURE__ */ De(() => /* @__PURE__ */ W("strong", null, "Epsilon (\u03B5)", -1)), Qq = /* @__PURE__ */ tt(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), eH = { "data-test": "help-hellinger-w" }, tH = /* @__PURE__ */ De(() => /* @__PURE__ */ W("strong", null, "Hellinger w", -1)), nH = /* @__PURE__ */ tt(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), rH = { "data-test": "help-hellinger-bias" }, oH = /* @__PURE__ */ De(() => /* @__PURE__ */ W("strong", null, "Hellinger bias", -1)), iH = /* @__PURE__ */ tt(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), sH = { class: "variables" }, aH = { class: "action-row" }, lH = /* @__PURE__ */ tt(" Close All Open Situations "), uH = /* @__PURE__ */ tt(" Re-Evaluate All Open Alarms "), cH = /* @__PURE__ */ De(() => /* @__PURE__ */ W("span", null, "Save Changes", -1)), dH = /* @__PURE__ */ tt("dismiss"), Qc = window.Vue.computed, fH = window.Vue.markRaw, hH = window.Vue.onMounted, je = window.Vue.ref, pH = /* @__PURE__ */ ZW({
  __name: "AccountSettings",
  setup(e) {
    var Ye, zn, yr, It, ms, _s, gs, In, br, $s, Yn, Gn, ys, Vr, Cr, di, vt;
    const r = (se) => se >= 1e6 ? (se / 1e6).toFixed(1) + "M" : se >= 1e3 ? (se / 1e3).toFixed(1) + "K" : String(se), o = (se) => se < 0.01 ? "~$0.00" : "~$" + se.toFixed(2), s = fH({
      MarkComplete: Xa,
      Help: PW,
      Restore: jW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = no(), c = je(((Ye = u.engineInfo) == null ? void 0 : Ye.engineName) || et.ENGINE_DBSCAN), f = je(
      u.engineInfo ? u.engineInfo.distanceMeasureName === et.HELLINGER_OPTION : !0
    ), w = je((yr = (zn = u.engineInfo) == null ? void 0 : zn.alpha) != null ? yr : a.alpha), v = je((ms = (It = u.engineInfo) == null ? void 0 : It.beta) != null ? ms : a.beta), _ = je((gs = (_s = u.engineInfo) == null ? void 0 : _s.epsilon) != null ? gs : a.epsilon), $ = je(
      (br = (In = u.engineInfo) == null ? void 0 : In.hellingerW) != null ? br : a.hellingerW
    ), y = je(
      (Yn = ($s = u.engineInfo) == null ? void 0 : $s.hellingerBias) != null ? Yn : a.hellingerBias
    ), T = Qc(() => c.value === et.ENGINE_DBSCAN), D = Qc(() => T.value && f.value), M = je((ys = (Gn = u.claudeConfig) == null ? void 0 : Gn.enabled) != null ? ys : !1), L = je((Cr = (Vr = u.claudeConfig) == null ? void 0 : Vr.autoEvaluate) != null ? Cr : !0), S = je(""), k = je((vt = (di = u.claudeConfig) == null ? void 0 : di.apiKeyPresent) != null ? vt : !1), I = je(!1), P = Qc(
      () => (!k.value || I.value) && S.value.trim().length === 0
    ), x = () => {
      S.value = "", I.value = !0, k.value = !1, M.value = !1;
    }, R = je(!1), O = je(!1), H = je(!1), $e = je(!1), de = je(""), pe = je(!1);
    hH(async () => {
      if (u.claudeConfig === null) {
        const se = await u.getClaudeConfig();
        se && (M.value = se.enabled, L.value = se.autoEvaluate, k.value = se.apiKeyPresent);
      }
      await u.getClaudeUsage(30);
    });
    const ke = () => {
      w.value = a.alpha, v.value = a.beta, _.value = a.epsilon, $.value = a.hellingerW, y.value = a.hellingerBias;
    }, ye = (se, Q) => {
      de.value = se, $e.value = Q, H.value = !0;
    }, Ae = () => {
      if (I.value)
        return {
          enabled: !1,
          autoEvaluate: L.value,
          clearApiKey: !0
        };
      const se = S.value.trim(), Q = {
        enabled: M.value,
        autoEvaluate: L.value
      };
      return se.length > 0 && (Q.apiKey = se), Q;
    }, ve = async () => {
      var fi, bs, jn, mt, Zn, Sr;
      const se = {
        alpha: Number(w.value),
        beta: Number(v.value),
        epsilon: Number(_.value)
      };
      f.value && (se.hellingerW = Number($.value), se.hellingerBias = Number(y.value));
      const Q = await u.setEngineInfo(
        c.value,
        f.value,
        se
      ), ne = await u.setClaudeConfig(Ae());
      ne && (S.value = "", I.value = !1, k.value = (bs = (fi = u.claudeConfig) == null ? void 0 : fi.apiKeyPresent) != null ? bs : !1, M.value = (mt = (jn = u.claudeConfig) == null ? void 0 : jn.enabled) != null ? mt : !1, L.value = (Sr = (Zn = u.claudeConfig) == null ? void 0 : Zn.autoEvaluate) != null ? Sr : !0, u.getClaudeUsage(30)), Q && ne ? (u.getEngineInfo(), ye("The settings were saved!", !1)) : ye(
        Q && !ne ? "Engine settings saved, but Claude configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, Re = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const se = await sI();
      ye(
        se ? "All open situations were closed." : "Failed to close situations.",
        !se
      );
    }, Fe = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const se = await aI();
      ye(
        se ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !se
      );
    };
    return (se, Q) => (Rt(), yn(Mm, null, [
      Oe(sW),
      W("div", QW, [
        eq,
        W("div", tq, [
          W("div", nq, [
            rq,
            W("a", {
              target: "_blank",
              href: z(et).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, oq),
            iq
          ]),
          Oe(z(H_), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": Q[1] || (Q[1] = (ne) => c.value = ne),
            label: "",
            hideLabel: ""
          }, {
            default: Pt(() => [
              Oe(z(cd), {
                class: "radio-item",
                value: z(et).ENGINE_DBSCAN
              }, {
                default: Pt(() => [
                  sq
                ]),
                _: 1
              }, 8, ["value"]),
              Oe(z(Qr), {
                modelValue: f.value,
                "onUpdate:modelValue": Q[0] || (Q[0] = (ne) => f.value = ne),
                disabled: !z(T),
                class: "checkbox"
              }, {
                default: Pt(() => [
                  aq
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Oe(z(cd), {
                class: "radio-item",
                value: z(et).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: Pt(() => [
                  lq
                ]),
                _: 1
              }, 8, ["value"]),
              uq
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        W("div", cq, [
          W("div", dq, [
            fq,
            W("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": O.value,
              "aria-label": "How to get an Anthropic API key",
              "data-test": "claude-key-help",
              onClick: Q[2] || (Q[2] = (ne) => O.value = !O.value)
            }, [
              Oe(z(Z), {
                icon: z(s).Help
              }, null, 8, ["icon"])
            ], 8, hq)
          ]),
          pq,
          O.value ? (Rt(), yn("div", wq, mq)) : Qt("", !0),
          Oe(z(Qr), {
            modelValue: M.value,
            "onUpdate:modelValue": Q[3] || (Q[3] = (ne) => M.value = ne),
            disabled: z(P),
            class: "checkbox",
            "data-test": "claude-enabled"
          }, {
            default: Pt(() => [
              _q
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          Oe(z(Qr), {
            modelValue: L.value,
            "onUpdate:modelValue": Q[4] || (Q[4] = (ne) => L.value = ne),
            disabled: !M.value,
            class: "checkbox sub-checkbox",
            "data-test": "claude-auto-evaluate"
          }, {
            default: Pt(() => [
              gq,
              $q
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          z(P) ? (Rt(), yn("div", yq, " Enter an API key to enable. ")) : Qt("", !0),
          W("div", bq, [
            Oe(z(Oo), {
              modelValue: S.value,
              "onUpdate:modelValue": Q[5] || (Q[5] = (ne) => S.value = ne),
              type: "password",
              autocomplete: "new-password",
              label: k.value && !I.value ? "Anthropic API key \u2014 saved (paste a new key to replace)" : "Anthropic API key",
              "data-test": "claude-api-key",
              class: "claude-key-input"
            }, null, 8, ["modelValue", "label"]),
            k.value && !I.value ? (Rt(), Xc(z(le), {
              key: 0,
              secondary: "",
              "data-test": "claude-clear-key",
              onClick: x
            }, {
              default: Pt(() => [
                Vq
              ]),
              _: 1
            })) : Qt("", !0)
          ]),
          k.value && !I.value ? (Rt(), yn("div", Cq, [
            Oe(z(Z), {
              icon: z(s).MarkComplete,
              class: "saved-icon"
            }, null, 8, ["icon"]),
            Sq
          ])) : Qt("", !0),
          I.value ? (Rt(), yn("div", kq, " Stored API key will be removed on save. ")) : Qt("", !0),
          z(u).claudeUsage ? (Rt(), yn("div", Eq, [
            W("div", Iq, [
              W("span", xq, "Last " + qe(z(u).claudeUsage.daysWindow) + " days:", 1),
              W("span", {
                class: "usage-tokens",
                title: `${z(u).claudeUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "claude-usage-tokens"
              }, qe(r(z(u).claudeUsage.totalTokens)) + " tokens ", 9, Aq),
              W("span", {
                class: "usage-cost",
                title: z(u).claudeUsage.pricingNote,
                "data-test": "claude-usage-cost"
              }, " (" + qe(o(z(u).claudeUsage.estimatedCostUsd)) + ") ", 9, Bq),
              W("button", {
                type: "button",
                class: "usage-toggle",
                onClick: Q[6] || (Q[6] = (ne) => pe.value = !pe.value),
                "data-test": "claude-usage-toggle"
              }, qe(pe.value ? "hide details" : "show details"), 1)
            ]),
            pe.value ? (Rt(), yn("dl", Tq, [
              W("div", null, [
                Dq,
                W("dd", null, qe(r(z(u).claudeUsage.inputTokens)), 1)
              ]),
              W("div", null, [
                Nq,
                W("dd", null, qe(r(z(u).claudeUsage.outputTokens)), 1)
              ]),
              W("div", null, [
                Lq,
                W("dd", null, qe(r(z(u).claudeUsage.cacheReadInputTokens)), 1)
              ]),
              W("div", null, [
                Mq,
                W("dd", null, qe(r(z(u).claudeUsage.cacheCreationInputTokens)), 1)
              ]),
              W("div", null, [
                Oq,
                W("dd", null, [
                  tt(qe(z(u).claudeUsage.calls) + " ", 1),
                  W("span", Pq, "(" + qe(z(u).claudeUsage.successfulCalls) + " ok / " + qe(z(u).claudeUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              W("div", null, [
                Rq,
                W("dd", null, qe((z(u).claudeUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              W("div", Fq, qe(z(u).claudeUsage.pricingNote), 1)
            ])) : Qt("", !0)
          ])) : Qt("", !0)
        ]),
        z(T) ? (Rt(), yn("div", Uq, [
          W("div", Wq, [
            qq,
            W("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": R.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: Q[7] || (Q[7] = (ne) => R.value = !R.value)
            }, [
              Oe(z(Z), {
                icon: z(s).Help
              }, null, 8, ["icon"])
            ], 8, Hq),
            W("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: ke
            }, [
              Oe(z(Z), {
                icon: z(s).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          R.value ? (Rt(), yn("div", zq, [
            W("ul", null, [
              W("li", null, [
                Yq,
                Gq,
                W("em", null, "Default: " + qe(a.alpha), 1)
              ]),
              W("li", null, [
                jq,
                Zq,
                Kq,
                Jq,
                W("em", null, "Default: " + qe(a.beta), 1)
              ]),
              W("li", null, [
                Xq,
                Qq,
                W("em", null, "Default: " + qe(a.epsilon), 1)
              ]),
              z(D) ? (Rt(), yn(Mm, { key: 0 }, [
                W("li", eH, [
                  tH,
                  nH,
                  W("em", null, "Default: " + qe(a.hellingerW), 1)
                ]),
                W("li", rH, [
                  oH,
                  iH,
                  W("em", null, "Default: " + qe(a.hellingerBias), 1)
                ])
              ], 64)) : Qt("", !0)
            ])
          ])) : Qt("", !0),
          W("div", sH, [
            Oe(z(Oo), {
              modelValue: w.value,
              "onUpdate:modelValue": Q[8] || (Q[8] = (ne) => w.value = ne),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Oe(z(Oo), {
              modelValue: v.value,
              "onUpdate:modelValue": Q[9] || (Q[9] = (ne) => v.value = ne),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Oe(z(Oo), {
              modelValue: _.value,
              "onUpdate:modelValue": Q[10] || (Q[10] = (ne) => _.value = ne),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            z(D) ? (Rt(), Xc(z(Oo), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": Q[11] || (Q[11] = (ne) => $.value = ne),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Qt("", !0),
            z(D) ? (Rt(), Xc(z(Oo), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": Q[12] || (Q[12] = (ne) => y.value = ne),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Qt("", !0)
          ])
        ])) : Qt("", !0),
        W("div", aH, [
          Oe(z(le), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: Re
          }, {
            default: Pt(() => [
              lH
            ]),
            _: 1
          }),
          Oe(z(le), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Fe
          }, {
            default: Pt(() => [
              uH
            ]),
            _: 1
          }),
          Oe(z(le), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: ve
          }, {
            default: Pt(() => [
              Oe(z(Z), {
                icon: z(s).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              cH
            ]),
            _: 1
          })
        ]),
        Oe(z(Vl), {
          modelValue: H.value,
          "onUpdate:modelValue": Q[14] || (Q[14] = (ne) => H.value = ne),
          right: "",
          error: $e.value,
          timeout: 6e3
        }, {
          button: Pt(() => [
            Oe(z(le), {
              onClick: Q[13] || (Q[13] = (ne) => H.value = !1),
              text: ""
            }, {
              default: Pt(() => [
                dH
              ]),
              _: 1
            })
          ]),
          default: Pt(() => [
            tt(qe(de.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const wH = /* @__PURE__ */ ce(pH, [["__scopeId", "data-v-048cdb69"]]), vH = window.VueRouter.createRouter, mH = window.VueRouter.createWebHistory, _H = async () => {
  const e = no();
  e.userId || await e.getUserRole();
}, Hg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || zg;
      await no().getUserRole(), r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => _H(),
    component: s4
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: T9
  },
  {
    path: "/situations/add",
    name: "addSituation",
    component: uU
  },
  {
    path: "/error",
    name: "error",
    component: SU
  },
  {
    path: "/situations/view-unassigned-alarms",
    name: "viewUnassignedAlarms",
    component: GU
  },
  {
    path: "/settings",
    name: "settings",
    beforeEnter: async () => {
      await no().getEngineInfo();
    },
    component: wH
  }
], ed = window.VRouter;
if (ed) {
  const e = "Plugin-alecUiExtension", r = ed.hasRoute(e) ? e : "Plugin";
  for (const o of Hg) {
    const { path: s, name: a, component: u, beforeEnter: c } = o;
    ed.addRoute(r, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const zg = vH({
  history: mH(),
  routes: Hg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = PS;
