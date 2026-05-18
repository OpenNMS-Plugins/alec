const de = (e, r) => {
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
const NS = /* @__PURE__ */ de(ES, [["render", DS], ["__scopeId", "data-v-5d32d140"]]), LS = window.Vue.defineComponent, MS = window.Vue.openBlock, OS = window.Vue.createBlock, PS = /* @__PURE__ */ LS({
  __name: "App",
  setup(e) {
    return (r, o) => (MS(), OS(NS));
  }
});
var Ii = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function RS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mm = { exports: {} }, vd = { exports: {} }, Om = function(r, o) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return r.apply(o, a);
  };
}, FS = Om, md = Object.prototype.toString, _d = function(e) {
  return function(r) {
    var o = md.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function Qr(e) {
  return e = e.toLowerCase(), function(o) {
    return _d(o) === e;
  };
}
function gd(e) {
  return Array.isArray(e);
}
function Wa(e) {
  return typeof e > "u";
}
function US(e) {
  return e !== null && !Wa(e) && e.constructor !== null && !Wa(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Pm = Qr("ArrayBuffer");
function WS(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Pm(e.buffer), r;
}
function qS(e) {
  return typeof e == "string";
}
function HS(e) {
  return typeof e == "number";
}
function Rm(e) {
  return e !== null && typeof e == "object";
}
function Na(e) {
  if (_d(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var zS = Qr("Date"), YS = Qr("File"), GS = Qr("Blob"), jS = Qr("FileList");
function $d(e) {
  return md.call(e) === "[object Function]";
}
function ZS(e) {
  return Rm(e) && $d(e.pipe);
}
function KS(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || md.call(e) === r || $d(e.toString) && e.toString() === r);
}
var JS = Qr("URLSearchParams");
function XS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function QS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function yd(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), gd(e))
      for (var o = 0, s = e.length; o < s; o++)
        r.call(null, e[o], o, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.call(null, e[a], a, e);
}
function ed() {
  var e = {};
  function r(a, u) {
    Na(e[u]) && Na(a) ? e[u] = ed(e[u], a) : Na(a) ? e[u] = ed({}, a) : gd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var o = 0, s = arguments.length; o < s; o++)
    yd(arguments[o], r);
  return e;
}
function ek(e, r, o) {
  return yd(r, function(a, u) {
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
  if (Wa(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var sk = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), tt = {
  isArray: gd,
  isArrayBuffer: Pm,
  isBuffer: US,
  isFormData: KS,
  isArrayBufferView: WS,
  isString: qS,
  isNumber: HS,
  isObject: Rm,
  isPlainObject: Na,
  isUndefined: Wa,
  isDate: zS,
  isFile: YS,
  isBlob: GS,
  isFunction: $d,
  isStream: ZS,
  isURLSearchParams: JS,
  isStandardBrowserEnv: QS,
  forEach: yd,
  merge: ed,
  extend: ek,
  trim: XS,
  stripBOM: tk,
  inherits: nk,
  toFlatObject: rk,
  kindOf: _d,
  kindOfTest: Qr,
  endsWith: ok,
  toArray: ik,
  isTypedArray: sk,
  isFileList: jS
}, mo = tt;
function bp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Fm = function(r, o, s) {
  if (!o)
    return r;
  var a;
  if (s)
    a = s(o);
  else if (mo.isURLSearchParams(o))
    a = o.toString();
  else {
    var u = [];
    mo.forEach(o, function(w, v) {
      w === null || typeof w > "u" || (mo.isArray(w) ? v = v + "[]" : w = [w], mo.forEach(w, function($) {
        mo.isDate($) ? $ = $.toISOString() : mo.isObject($) && ($ = JSON.stringify($)), u.push(bp(v) + "=" + bp($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = r.indexOf("#");
    c !== -1 && (r = r.slice(0, c)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}, ak = tt;
function el() {
  this.handlers = [];
}
el.prototype.use = function(r, o, s) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: s ? s.synchronous : !1,
    runWhen: s ? s.runWhen : null
  }), this.handlers.length - 1;
};
el.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
el.prototype.forEach = function(r) {
  ak.forEach(this.handlers, function(s) {
    s !== null && r(s);
  });
};
var lk = el, uk = tt, ck = function(r, o) {
  uk.forEach(r, function(a, u) {
    u !== o && u.toUpperCase() === o.toUpperCase() && (r[o] = a, delete r[u]);
  });
}, Um = tt;
function qo(e, r, o, s, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), s && (this.request = s), a && (this.response = a);
}
Um.inherits(qo, Error, {
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
var Wm = qo.prototype, qm = {};
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
  qm[e] = { value: e };
});
Object.defineProperties(qo, qm);
Object.defineProperty(Wm, "isAxiosError", { value: !0 });
qo.from = function(e, r, o, s, a, u) {
  var c = Object.create(Wm);
  return Um.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), qo.call(c, e.message, r, o, s, a), c.name = e.name, u && Object.assign(c, u), c;
};
var jo = qo, Hm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, un = tt;
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
var zm = dk, Hu, Vp;
function fk() {
  if (Vp)
    return Hu;
  Vp = 1;
  var e = jo;
  return Hu = function(o, s, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? o(a) : s(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, Hu;
}
var zu, Cp;
function hk() {
  if (Cp)
    return zu;
  Cp = 1;
  var e = tt;
  return zu = e.isStandardBrowserEnv() ? function() {
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
  }(), zu;
}
var pk = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, wk = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, vk = pk, mk = wk, Ym = function(r, o) {
  return r && !vk(o) ? mk(r, o) : o;
}, Yu, Sp;
function _k() {
  if (Sp)
    return Yu;
  Sp = 1;
  var e = tt, r = [
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
  return Yu = function(s) {
    var a = {}, u, c, f;
    return s && e.forEach(s.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && r.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, Yu;
}
var Gu, kp;
function gk() {
  if (kp)
    return Gu;
  kp = 1;
  var e = tt;
  return Gu = e.isStandardBrowserEnv() ? function() {
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
  }(), Gu;
}
var ju, Ep;
function tl() {
  if (Ep)
    return ju;
  Ep = 1;
  var e = jo, r = tt;
  function o(s) {
    e.call(this, s == null ? "canceled" : s, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), ju = o, ju;
}
var Zu, Ip;
function $k() {
  return Ip || (Ip = 1, Zu = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), Zu;
}
var Ku, xp;
function Ap() {
  if (xp)
    return Ku;
  xp = 1;
  var e = tt, r = fk(), o = hk(), s = Fm, a = Ym, u = _k(), c = gk(), f = Hm, w = jo, v = tl(), _ = $k();
  return Ku = function(y) {
    return new Promise(function(D, M) {
      var L = y.data, S = y.headers, k = y.responseType, x;
      function R() {
        y.cancelToken && y.cancelToken.unsubscribe(x), y.signal && y.signal.removeEventListener("abort", x);
      }
      e.isFormData(L) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var I = new XMLHttpRequest();
      if (y.auth) {
        var P = y.auth.username || "", O = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(P + ":" + O);
      }
      var H = a(y.baseURL, y.url);
      I.open(y.method.toUpperCase(), s(H, y.params, y.paramsSerializer), !0), I.timeout = y.timeout;
      function $e() {
        if (!!I) {
          var ge = "getAllResponseHeaders" in I ? u(I.getAllResponseHeaders()) : null, Ee = !k || k === "text" || k === "json" ? I.responseText : I.response, Ae = {
            data: Ee,
            status: I.status,
            statusText: I.statusText,
            headers: ge,
            config: y,
            request: I
          };
          r(function(Fe) {
            D(Fe), R();
          }, function(Fe) {
            M(Fe), R();
          }, Ae), I = null;
        }
      }
      if ("onloadend" in I ? I.onloadend = $e : I.onreadystatechange = function() {
        !I || I.readyState !== 4 || I.status === 0 && !(I.responseURL && I.responseURL.indexOf("file:") === 0) || setTimeout($e);
      }, I.onabort = function() {
        !I || (M(new w("Request aborted", w.ECONNABORTED, y, I)), I = null);
      }, I.onerror = function() {
        M(new w("Network Error", w.ERR_NETWORK, y, I, I)), I = null;
      }, I.ontimeout = function() {
        var Ee = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Ae = y.transitional || f;
        y.timeoutErrorMessage && (Ee = y.timeoutErrorMessage), M(new w(
          Ee,
          Ae.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          I
        )), I = null;
      }, e.isStandardBrowserEnv()) {
        var le = (y.withCredentials || c(H)) && y.xsrfCookieName ? o.read(y.xsrfCookieName) : void 0;
        le && (S[y.xsrfHeaderName] = le);
      }
      "setRequestHeader" in I && e.forEach(S, function(Ee, Ae) {
        typeof L > "u" && Ae.toLowerCase() === "content-type" ? delete S[Ae] : I.setRequestHeader(Ae, Ee);
      }), e.isUndefined(y.withCredentials) || (I.withCredentials = !!y.withCredentials), k && k !== "json" && (I.responseType = y.responseType), typeof y.onDownloadProgress == "function" && I.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && I.upload && I.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (x = function(ge) {
        !I || (M(!ge || ge && ge.type ? new v() : ge), I.abort(), I = null);
      }, y.cancelToken && y.cancelToken.subscribe(x), y.signal && (y.signal.aborted ? x() : y.signal.addEventListener("abort", x))), L || (L = null);
      var ye = _(H);
      if (ye && ["http", "https", "file"].indexOf(ye) === -1) {
        M(new w("Unsupported protocol " + ye + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      I.send(L);
    });
  }, Ku;
}
var Ju, Bp;
function yk() {
  return Bp || (Bp = 1, Ju = null), Ju;
}
var je = tt, Tp = ck, Dp = jo, bk = Hm, Vk = zm, Ck = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Np(e, r) {
  !je.isUndefined(e) && je.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function Sk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Ap()), e;
}
function kk(e, r, o) {
  if (je.isString(e))
    try {
      return (r || JSON.parse)(e), je.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (o || JSON.stringify)(e);
}
var nl = {
  transitional: bk,
  adapter: Sk(),
  transformRequest: [function(r, o) {
    if (Tp(o, "Accept"), Tp(o, "Content-Type"), je.isFormData(r) || je.isArrayBuffer(r) || je.isBuffer(r) || je.isStream(r) || je.isFile(r) || je.isBlob(r))
      return r;
    if (je.isArrayBufferView(r))
      return r.buffer;
    if (je.isURLSearchParams(r))
      return Np(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var s = je.isObject(r), a = o && o["Content-Type"], u;
    if ((u = je.isFileList(r)) || s && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return Vk(u ? { "files[]": r } : r, c && new c());
    } else if (s || a === "application/json")
      return Np(o, "application/json"), kk(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || nl.transitional, s = o && o.silentJSONParsing, a = o && o.forcedJSONParsing, u = !s && this.responseType === "json";
    if (u || a && je.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Dp.from(c, Dp.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
je.forEach(["delete", "get", "head"], function(r) {
  nl.headers[r] = {};
});
je.forEach(["post", "put", "patch"], function(r) {
  nl.headers[r] = je.merge(Ck);
});
var bd = nl, Ek = tt, Ik = bd, xk = function(r, o, s) {
  var a = this || Ik;
  return Ek.forEach(s, function(c) {
    r = c.call(a, r, o);
  }), r;
}, Xu, Lp;
function Gm() {
  return Lp || (Lp = 1, Xu = function(r) {
    return !!(r && r.__CANCEL__);
  }), Xu;
}
var Mp = tt, Qu = xk, Ak = Gm(), Bk = bd, Tk = tl();
function ec(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tk();
}
var Dk = function(r) {
  ec(r), r.headers = r.headers || {}, r.data = Qu.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Mp.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Mp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete r.headers[a];
    }
  );
  var o = r.adapter || Bk.adapter;
  return o(r).then(function(a) {
    return ec(r), a.data = Qu.call(
      r,
      a.data,
      a.headers,
      r.transformResponse
    ), a;
  }, function(a) {
    return Ak(a) || (ec(r), a && a.response && (a.response.data = Qu.call(
      r,
      a.response.data,
      a.response.headers,
      r.transformResponse
    ))), Promise.reject(a);
  });
}, Dt = tt, jm = function(r, o) {
  o = o || {};
  var s = {};
  function a(_, $) {
    return Dt.isPlainObject(_) && Dt.isPlainObject($) ? Dt.merge(_, $) : Dt.isPlainObject($) ? Dt.merge({}, $) : Dt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (Dt.isUndefined(o[_])) {
      if (!Dt.isUndefined(r[_]))
        return a(void 0, r[_]);
    } else
      return a(r[_], o[_]);
  }
  function c(_) {
    if (!Dt.isUndefined(o[_]))
      return a(void 0, o[_]);
  }
  function f(_) {
    if (Dt.isUndefined(o[_])) {
      if (!Dt.isUndefined(r[_]))
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
  return Dt.forEach(Object.keys(r).concat(Object.keys(o)), function($) {
    var y = v[$] || u, T = y($);
    Dt.isUndefined(T) && y !== w || (s[$] = T);
  }), s;
}, tc, Op;
function Zm() {
  return Op || (Op = 1, tc = {
    version: "0.27.2"
  }), tc;
}
var Nk = Zm().version, fr = jo, Vd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Vd[e] = function(s) {
    return typeof s === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Pp = {};
Vd.transitional = function(r, o, s) {
  function a(u, c) {
    return "[Axios v" + Nk + "] Transitional option '" + u + "'" + c + (s ? ". " + s : "");
  }
  return function(u, c, f) {
    if (r === !1)
      throw new fr(
        a(c, " has been removed" + (o ? " in " + o : "")),
        fr.ERR_DEPRECATED
      );
    return o && !Pp[c] && (Pp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(u, c, f) : !0;
  };
};
function Lk(e, r, o) {
  if (typeof e != "object")
    throw new fr("options must be an object", fr.ERR_BAD_OPTION_VALUE);
  for (var s = Object.keys(e), a = s.length; a-- > 0; ) {
    var u = s[a], c = r[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new fr("option " + u + " must be " + w, fr.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new fr("Unknown option " + u, fr.ERR_BAD_OPTION);
  }
}
var Mk = {
  assertOptions: Lk,
  validators: Vd
}, Km = tt, Ok = Fm, Rp = lk, Fp = Dk, rl = jm, Pk = Ym, Jm = Mk, _o = Jm.validators;
function Ho(e) {
  this.defaults = e, this.interceptors = {
    request: new Rp(),
    response: new Rp()
  };
}
Ho.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = rl(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var s = o.transitional;
  s !== void 0 && Jm.assertOptions(s, {
    silentJSONParsing: _o.transitional(_o.boolean),
    forcedJSONParsing: _o.transitional(_o.boolean),
    clarifyTimeoutError: _o.transitional(_o.boolean)
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
    var w = [Fp, void 0];
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
    f = Fp(v);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
Ho.prototype.getUri = function(r) {
  r = rl(this.defaults, r);
  var o = Pk(r.baseURL, r.url);
  return Ok(o, r.params, r.paramsSerializer);
};
Km.forEach(["delete", "get", "head", "options"], function(r) {
  Ho.prototype[r] = function(o, s) {
    return this.request(rl(s || {}, {
      method: r,
      url: o,
      data: (s || {}).data
    }));
  };
});
Km.forEach(["post", "put", "patch"], function(r) {
  function o(s) {
    return function(u, c, f) {
      return this.request(rl(f || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  Ho.prototype[r] = o(), Ho.prototype[r + "Form"] = o(!0);
});
var Rk = Ho, nc, Up;
function Fk() {
  if (Up)
    return nc;
  Up = 1;
  var e = tl();
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
  }, nc = r, nc;
}
var rc, Wp;
function Uk() {
  return Wp || (Wp = 1, rc = function(r) {
    return function(s) {
      return r.apply(null, s);
    };
  }), rc;
}
var oc, qp;
function Wk() {
  if (qp)
    return oc;
  qp = 1;
  var e = tt;
  return oc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, oc;
}
var Hp = tt, qk = Om, La = Rk, Hk = jm, zk = bd;
function Xm(e) {
  var r = new La(e), o = qk(La.prototype.request, r);
  return Hp.extend(o, La.prototype, r), Hp.extend(o, r), o.create = function(a) {
    return Xm(Hk(e, a));
  }, o;
}
var St = Xm(zk);
St.Axios = La;
St.CanceledError = tl();
St.CancelToken = Fk();
St.isCancel = Gm();
St.VERSION = Zm().version;
St.toFormData = zm;
St.AxiosError = jo;
St.Cancel = St.CanceledError;
St.all = function(r) {
  return Promise.all(r);
};
St.spread = Uk();
St.isAxiosError = Wk();
vd.exports = St;
vd.exports.default = St;
(function(e) {
  e.exports = vd.exports;
})(Mm);
const Qm = /* @__PURE__ */ RS(Mm.exports), Hn = Qm.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), lt = Qm.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var _e = { exports: {} };
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
    var o, s = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, D = 1, M = 2, L = 1, S = 2, k = 4, x = 8, R = 16, I = 32, P = 64, O = 128, H = 256, $e = 512, le = 30, ye = "...", ge = 800, Ee = 16, Ae = 1, we = 2, Fe = 3, Oe = 1 / 0, Ye = 9007199254740991, zn = 17976931348623157e292, $r = 0 / 0, kt = 4294967295, ws = kt - 1, vs = kt >>> 1, ms = [
      ["ary", O],
      ["bind", L],
      ["bindKey", S],
      ["curry", x],
      ["curryRight", R],
      ["flip", $e],
      ["partial", I],
      ["partialRight", P],
      ["rearg", H]
    ], In = "[object Arguments]", yr = "[object Array]", _s = "[object AsyncFunction]", Yn = "[object Boolean]", Gn = "[object Date]", gs = "[object DOMException]", br = "[object Error]", ue = "[object Function]", te = "[object GeneratorFunction]", ne = "[object Map]", jn = "[object Number]", $s = "[object Null]", Ut = "[object Object]", li = "[object Promise]", zg = "[object Proxy]", ui = "[object RegExp]", rn = "[object Set]", ci = "[object String]", ys = "[object Symbol]", Yg = "[object Undefined]", di = "[object WeakMap]", Gg = "[object WeakSet]", fi = "[object ArrayBuffer]", to = "[object DataView]", Vl = "[object Float32Array]", Cl = "[object Float64Array]", Sl = "[object Int8Array]", kl = "[object Int16Array]", El = "[object Int32Array]", Il = "[object Uint8Array]", xl = "[object Uint8ClampedArray]", Al = "[object Uint16Array]", Bl = "[object Uint32Array]", jg = /\b__p \+= '';/g, Zg = /\b(__p \+=) '' \+/g, Kg = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Yd = /&(?:amp|lt|gt|quot|#39);/g, Gd = /[&<>"']/g, Jg = RegExp(Yd.source), Xg = RegExp(Gd.source), Qg = /<%-([\s\S]+?)%>/g, e1 = /<%([\s\S]+?)%>/g, jd = /<%=([\s\S]+?)%>/g, t1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n1 = /^\w*$/, r1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Tl = /[\\^$.*+?()[\]{}|]/g, o1 = RegExp(Tl.source), Dl = /^\s+/, i1 = /\s/, s1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, a1 = /\{\n\/\* \[wrapped with (.+)\] \*/, l1 = /,? & /, u1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, c1 = /[()=,{}\[\]\/\s]/, d1 = /\\(\\)?/g, f1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Zd = /\w*$/, h1 = /^[-+]0x[0-9a-f]+$/i, p1 = /^0b[01]+$/i, w1 = /^\[object .+?Constructor\]$/, v1 = /^0o[0-7]+$/i, m1 = /^(?:0|[1-9]\d*)$/, _1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, bs = /($^)/, g1 = /['\n\r\u2028\u2029\\]/g, Vs = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", y1 = "\\ufe20-\\ufe2f", b1 = "\\u20d0-\\u20ff", Kd = $1 + y1 + b1, Jd = "\\u2700-\\u27bf", Xd = "a-z\\xdf-\\xf6\\xf8-\\xff", V1 = "\\xac\\xb1\\xd7\\xf7", C1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", S1 = "\\u2000-\\u206f", k1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Qd = "A-Z\\xc0-\\xd6\\xd8-\\xde", ef = "\\ufe0e\\ufe0f", tf = V1 + C1 + S1 + k1, Nl = "['\u2019]", E1 = "[" + Vs + "]", nf = "[" + tf + "]", Cs = "[" + Kd + "]", rf = "\\d+", I1 = "[" + Jd + "]", of = "[" + Xd + "]", sf = "[^" + Vs + tf + rf + Jd + Xd + Qd + "]", Ll = "\\ud83c[\\udffb-\\udfff]", x1 = "(?:" + Cs + "|" + Ll + ")", af = "[^" + Vs + "]", Ml = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ol = "[\\ud800-\\udbff][\\udc00-\\udfff]", no = "[" + Qd + "]", lf = "\\u200d", uf = "(?:" + of + "|" + sf + ")", A1 = "(?:" + no + "|" + sf + ")", cf = "(?:" + Nl + "(?:d|ll|m|re|s|t|ve))?", df = "(?:" + Nl + "(?:D|LL|M|RE|S|T|VE))?", ff = x1 + "?", hf = "[" + ef + "]?", B1 = "(?:" + lf + "(?:" + [af, Ml, Ol].join("|") + ")" + hf + ff + ")*", T1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", D1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", pf = hf + ff + B1, N1 = "(?:" + [I1, Ml, Ol].join("|") + ")" + pf, L1 = "(?:" + [af + Cs + "?", Cs, Ml, Ol, E1].join("|") + ")", M1 = RegExp(Nl, "g"), O1 = RegExp(Cs, "g"), Pl = RegExp(Ll + "(?=" + Ll + ")|" + L1 + pf, "g"), P1 = RegExp([
      no + "?" + of + "+" + cf + "(?=" + [nf, no, "$"].join("|") + ")",
      A1 + "+" + df + "(?=" + [nf, no + uf, "$"].join("|") + ")",
      no + "?" + uf + "+" + cf,
      no + "+" + df,
      D1,
      T1,
      rf,
      N1
    ].join("|"), "g"), R1 = RegExp("[" + lf + Vs + Kd + ef + "]"), F1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, U1 = [
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
    Se[Vl] = Se[Cl] = Se[Sl] = Se[kl] = Se[El] = Se[Il] = Se[xl] = Se[Al] = Se[Bl] = !0, Se[In] = Se[yr] = Se[fi] = Se[Yn] = Se[to] = Se[Gn] = Se[br] = Se[ue] = Se[ne] = Se[jn] = Se[Ut] = Se[ui] = Se[rn] = Se[ci] = Se[di] = !1;
    var Ve = {};
    Ve[In] = Ve[yr] = Ve[fi] = Ve[to] = Ve[Yn] = Ve[Gn] = Ve[Vl] = Ve[Cl] = Ve[Sl] = Ve[kl] = Ve[El] = Ve[ne] = Ve[jn] = Ve[Ut] = Ve[ui] = Ve[rn] = Ve[ci] = Ve[ys] = Ve[Il] = Ve[xl] = Ve[Al] = Ve[Bl] = !0, Ve[br] = Ve[ue] = Ve[di] = !1;
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
    }, G1 = parseFloat, j1 = parseInt, wf = typeof Ii == "object" && Ii && Ii.Object === Object && Ii, Z1 = typeof self == "object" && self && self.Object === Object && self, Ze = wf || Z1 || Function("return this")(), Rl = r && !r.nodeType && r, Vr = Rl && !0 && e && !e.nodeType && e, vf = Vr && Vr.exports === Rl, Fl = vf && wf.process, Wt = function() {
      try {
        var b = Vr && Vr.require && Vr.require("util").types;
        return b || Fl && Fl.binding && Fl.binding("util");
      } catch {
      }
    }(), mf = Wt && Wt.isArrayBuffer, _f = Wt && Wt.isDate, gf = Wt && Wt.isMap, $f = Wt && Wt.isRegExp, yf = Wt && Wt.isSet, bf = Wt && Wt.isTypedArray;
    function Et(b, E, C) {
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
    function qt(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U && E(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function J1(b, E) {
      for (var C = b == null ? 0 : b.length; C-- && E(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function Vf(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U; )
        if (!E(b[C], C, b))
          return !1;
      return !0;
    }
    function Zn(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length, K = 0, fe = []; ++C < U; ) {
        var Ue = b[C];
        E(Ue, C, b) && (fe[K++] = Ue);
      }
      return fe;
    }
    function Ss(b, E) {
      var C = b == null ? 0 : b.length;
      return !!C && ro(b, E, 0) > -1;
    }
    function Ul(b, E, C) {
      for (var U = -1, K = b == null ? 0 : b.length; ++U < K; )
        if (C(E, b[U]))
          return !0;
      return !1;
    }
    function ke(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length, K = Array(U); ++C < U; )
        K[C] = E(b[C], C, b);
      return K;
    }
    function Kn(b, E) {
      for (var C = -1, U = E.length, K = b.length; ++C < U; )
        b[K + C] = E[C];
      return b;
    }
    function Wl(b, E, C, U) {
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
    function ql(b, E) {
      for (var C = -1, U = b == null ? 0 : b.length; ++C < U; )
        if (E(b[C], C, b))
          return !0;
      return !1;
    }
    var Q1 = Hl("length");
    function e0(b) {
      return b.split("");
    }
    function t0(b) {
      return b.match(u1) || [];
    }
    function Cf(b, E, C) {
      var U;
      return C(b, function(K, fe, Ue) {
        if (E(K, fe, Ue))
          return U = fe, !1;
      }), U;
    }
    function ks(b, E, C, U) {
      for (var K = b.length, fe = C + (U ? 1 : -1); U ? fe-- : ++fe < K; )
        if (E(b[fe], fe, b))
          return fe;
      return -1;
    }
    function ro(b, E, C) {
      return E === E ? h0(b, E, C) : ks(b, Sf, C);
    }
    function n0(b, E, C, U) {
      for (var K = C - 1, fe = b.length; ++K < fe; )
        if (U(b[K], E))
          return K;
      return -1;
    }
    function Sf(b) {
      return b !== b;
    }
    function kf(b, E) {
      var C = b == null ? 0 : b.length;
      return C ? Yl(b, E) / C : $r;
    }
    function Hl(b) {
      return function(E) {
        return E == null ? o : E[b];
      };
    }
    function zl(b) {
      return function(E) {
        return b == null ? o : b[E];
      };
    }
    function Ef(b, E, C, U, K) {
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
    function Yl(b, E) {
      for (var C, U = -1, K = b.length; ++U < K; ) {
        var fe = E(b[U]);
        fe !== o && (C = C === o ? fe : C + fe);
      }
      return C;
    }
    function Gl(b, E) {
      for (var C = -1, U = Array(b); ++C < b; )
        U[C] = E(C);
      return U;
    }
    function o0(b, E) {
      return ke(E, function(C) {
        return [C, b[C]];
      });
    }
    function If(b) {
      return b && b.slice(0, Tf(b) + 1).replace(Dl, "");
    }
    function It(b) {
      return function(E) {
        return b(E);
      };
    }
    function jl(b, E) {
      return ke(E, function(C) {
        return b[C];
      });
    }
    function hi(b, E) {
      return b.has(E);
    }
    function xf(b, E) {
      for (var C = -1, U = b.length; ++C < U && ro(E, b[C], 0) > -1; )
        ;
      return C;
    }
    function Af(b, E) {
      for (var C = b.length; C-- && ro(E, b[C], 0) > -1; )
        ;
      return C;
    }
    function i0(b, E) {
      for (var C = b.length, U = 0; C--; )
        b[C] === E && ++U;
      return U;
    }
    var s0 = zl(q1), a0 = zl(H1);
    function l0(b) {
      return "\\" + Y1[b];
    }
    function u0(b, E) {
      return b == null ? o : b[E];
    }
    function oo(b) {
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
    function Zl(b) {
      var E = -1, C = Array(b.size);
      return b.forEach(function(U, K) {
        C[++E] = [K, U];
      }), C;
    }
    function Bf(b, E) {
      return function(C) {
        return b(E(C));
      };
    }
    function Jn(b, E) {
      for (var C = -1, U = b.length, K = 0, fe = []; ++C < U; ) {
        var Ue = b[C];
        (Ue === E || Ue === _) && (b[C] = _, fe[K++] = C);
      }
      return fe;
    }
    function Es(b) {
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
    function io(b) {
      return oo(b) ? v0(b) : Q1(b);
    }
    function on(b) {
      return oo(b) ? m0(b) : e0(b);
    }
    function Tf(b) {
      for (var E = b.length; E-- && i1.test(b.charAt(E)); )
        ;
      return E;
    }
    var w0 = zl(z1);
    function v0(b) {
      for (var E = Pl.lastIndex = 0; Pl.test(b); )
        ++E;
      return E;
    }
    function m0(b) {
      return b.match(Pl) || [];
    }
    function _0(b) {
      return b.match(P1) || [];
    }
    var g0 = function b(E) {
      E = E == null ? Ze : so.defaults(Ze.Object(), E, so.pick(Ze, U1));
      var C = E.Array, U = E.Date, K = E.Error, fe = E.Function, Ue = E.Math, be = E.Object, Kl = E.RegExp, $0 = E.String, Ht = E.TypeError, Is = C.prototype, y0 = fe.prototype, ao = be.prototype, xs = E["__core-js_shared__"], As = y0.toString, ve = ao.hasOwnProperty, b0 = 0, Df = function() {
        var t = /[^.]+$/.exec(xs && xs.keys && xs.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Bs = ao.toString, V0 = As.call(be), C0 = Ze._, S0 = Kl(
        "^" + As.call(ve).replace(Tl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ts = vf ? E.Buffer : o, Xn = E.Symbol, Ds = E.Uint8Array, Nf = Ts ? Ts.allocUnsafe : o, Ns = Bf(be.getPrototypeOf, be), Lf = be.create, Mf = ao.propertyIsEnumerable, Ls = Is.splice, Of = Xn ? Xn.isConcatSpreadable : o, pi = Xn ? Xn.iterator : o, Cr = Xn ? Xn.toStringTag : o, Ms = function() {
        try {
          var t = xr(be, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), k0 = E.clearTimeout !== Ze.clearTimeout && E.clearTimeout, E0 = U && U.now !== Ze.Date.now && U.now, I0 = E.setTimeout !== Ze.setTimeout && E.setTimeout, Os = Ue.ceil, Ps = Ue.floor, Jl = be.getOwnPropertySymbols, x0 = Ts ? Ts.isBuffer : o, Pf = E.isFinite, A0 = Is.join, B0 = Bf(be.keys, be), We = Ue.max, nt = Ue.min, T0 = U.now, D0 = E.parseInt, Rf = Ue.random, N0 = Is.reverse, Xl = xr(E, "DataView"), wi = xr(E, "Map"), Ql = xr(E, "Promise"), lo = xr(E, "Set"), vi = xr(E, "WeakMap"), mi = xr(be, "create"), Rs = vi && new vi(), uo = {}, L0 = Ar(Xl), M0 = Ar(wi), O0 = Ar(Ql), P0 = Ar(lo), R0 = Ar(vi), Fs = Xn ? Xn.prototype : o, _i = Fs ? Fs.valueOf : o, Ff = Fs ? Fs.toString : o;
      function h(t) {
        if (Be(t) && !J(t) && !(t instanceof ie)) {
          if (t instanceof zt)
            return t;
          if (ve.call(t, "__wrapped__"))
            return Uh(t);
        }
        return new zt(t);
      }
      var co = function() {
        function t() {
        }
        return function(n) {
          if (!Ie(n))
            return {};
          if (Lf)
            return Lf(n);
          t.prototype = n;
          var i = new t();
          return t.prototype = o, i;
        };
      }();
      function Us() {
      }
      function zt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: Qg,
        evaluate: e1,
        interpolate: jd,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = Us.prototype, h.prototype.constructor = h, zt.prototype = co(Us.prototype), zt.prototype.constructor = zt;
      function ie(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = kt, this.__views__ = [];
      }
      function F0() {
        var t = new ie(this.__wrapped__);
        return t.__actions__ = vt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = vt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = vt(this.__views__), t;
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
        var t = this.__wrapped__.value(), n = this.__dir__, i = J(t), l = n < 0, d = i ? t.length : 0, p = ey(0, d, this.__views__), m = p.start, g = p.end, V = g - m, A = l ? g : m - 1, B = this.__iteratees__, N = B.length, F = 0, q = nt(V, this.__takeCount__);
        if (!i || !l && d == V && q == V)
          return ch(t, this.__actions__);
        var G = [];
        e:
          for (; V-- && F < q; ) {
            A += n;
            for (var Q = -1, j = t[A]; ++Q < N; ) {
              var oe = B[Q], se = oe.iteratee, Bt = oe.type, ft = se(j);
              if (Bt == we)
                j = ft;
              else if (!ft) {
                if (Bt == Ae)
                  continue e;
                break e;
              }
            }
            G[F++] = j;
          }
        return G;
      }
      ie.prototype = co(Us.prototype), ie.prototype.constructor = ie;
      function Sr(t) {
        var n = -1, i = t == null ? 0 : t.length;
        for (this.clear(); ++n < i; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function q0() {
        this.__data__ = mi ? mi(null) : {}, this.size = 0;
      }
      function H0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function z0(t) {
        var n = this.__data__;
        if (mi) {
          var i = n[t];
          return i === w ? o : i;
        }
        return ve.call(n, t) ? n[t] : o;
      }
      function Y0(t) {
        var n = this.__data__;
        return mi ? n[t] !== o : ve.call(n, t);
      }
      function G0(t, n) {
        var i = this.__data__;
        return this.size += this.has(t) ? 0 : 1, i[t] = mi && n === o ? w : n, this;
      }
      Sr.prototype.clear = q0, Sr.prototype.delete = H0, Sr.prototype.get = z0, Sr.prototype.has = Y0, Sr.prototype.set = G0;
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
        var n = this.__data__, i = Ws(n, t);
        if (i < 0)
          return !1;
        var l = n.length - 1;
        return i == l ? n.pop() : Ls.call(n, i, 1), --this.size, !0;
      }
      function K0(t) {
        var n = this.__data__, i = Ws(n, t);
        return i < 0 ? o : n[i][1];
      }
      function J0(t) {
        return Ws(this.__data__, t) > -1;
      }
      function X0(t, n) {
        var i = this.__data__, l = Ws(i, t);
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
          hash: new Sr(),
          map: new (wi || xn)(),
          string: new Sr()
        };
      }
      function e$(t) {
        var n = ea(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function t$(t) {
        return ea(this, t).get(t);
      }
      function n$(t) {
        return ea(this, t).has(t);
      }
      function r$(t, n) {
        var i = ea(this, t), l = i.size;
        return i.set(t, n), this.size += i.size == l ? 0 : 1, this;
      }
      An.prototype.clear = Q0, An.prototype.delete = e$, An.prototype.get = t$, An.prototype.has = n$, An.prototype.set = r$;
      function kr(t) {
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
      kr.prototype.add = kr.prototype.push = o$, kr.prototype.has = i$;
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
          if (!wi || l.length < a - 1)
            return l.push([t, n]), this.size = ++i.size, this;
          i = this.__data__ = new An(l);
        }
        return i.set(t, n), this.size = i.size, this;
      }
      sn.prototype.clear = s$, sn.prototype.delete = a$, sn.prototype.get = l$, sn.prototype.has = u$, sn.prototype.set = c$;
      function Uf(t, n) {
        var i = J(t), l = !i && Br(t), d = !i && !l && rr(t), p = !i && !l && !d && wo(t), m = i || l || d || p, g = m ? Gl(t.length, $0) : [], V = g.length;
        for (var A in t)
          (n || ve.call(t, A)) && !(m && (A == "length" || d && (A == "offset" || A == "parent") || p && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Nn(A, V))) && g.push(A);
        return g;
      }
      function Wf(t) {
        var n = t.length;
        return n ? t[cu(0, n - 1)] : o;
      }
      function d$(t, n) {
        return ta(vt(t), Er(n, 0, t.length));
      }
      function f$(t) {
        return ta(vt(t));
      }
      function eu(t, n, i) {
        (i !== o && !an(t[n], i) || i === o && !(n in t)) && Bn(t, n, i);
      }
      function gi(t, n, i) {
        var l = t[n];
        (!(ve.call(t, n) && an(l, i)) || i === o && !(n in t)) && Bn(t, n, i);
      }
      function Ws(t, n) {
        for (var i = t.length; i--; )
          if (an(t[i][0], n))
            return i;
        return -1;
      }
      function h$(t, n, i, l) {
        return Qn(t, function(d, p, m) {
          n(l, d, i(d), m);
        }), l;
      }
      function qf(t, n) {
        return t && _n(n, Ge(n), t);
      }
      function p$(t, n) {
        return t && _n(n, _t(n), t);
      }
      function Bn(t, n, i) {
        n == "__proto__" && Ms ? Ms(t, n, {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        }) : t[n] = i;
      }
      function tu(t, n) {
        for (var i = -1, l = n.length, d = C(l), p = t == null; ++i < l; )
          d[i] = p ? o : Lu(t, n[i]);
        return d;
      }
      function Er(t, n, i) {
        return t === t && (i !== o && (t = t <= i ? t : i), n !== o && (t = t >= n ? t : n)), t;
      }
      function Yt(t, n, i, l, d, p) {
        var m, g = n & $, V = n & y, A = n & T;
        if (i && (m = d ? i(t, l, d, p) : i(t)), m !== o)
          return m;
        if (!Ie(t))
          return t;
        var B = J(t);
        if (B) {
          if (m = ny(t), !g)
            return vt(t, m);
        } else {
          var N = rt(t), F = N == ue || N == te;
          if (rr(t))
            return hh(t, g);
          if (N == Ut || N == In || F && !d) {
            if (m = V || F ? {} : Th(t), !g)
              return V ? z$(t, p$(m, t)) : H$(t, qf(m, t));
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
        p.set(t, m), ap(t) ? t.forEach(function(j) {
          m.add(Yt(j, n, i, j, t, p));
        }) : ip(t) && t.forEach(function(j, oe) {
          m.set(oe, Yt(j, n, i, oe, t, p));
        });
        var G = A ? V ? yu : $u : V ? _t : Ge, Q = B ? o : G(t);
        return qt(Q || t, function(j, oe) {
          Q && (oe = j, j = t[oe]), gi(m, oe, Yt(j, n, i, oe, t, p));
        }), m;
      }
      function w$(t) {
        var n = Ge(t);
        return function(i) {
          return Hf(i, t, n);
        };
      }
      function Hf(t, n, i) {
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
      function zf(t, n, i) {
        if (typeof t != "function")
          throw new Ht(c);
        return ki(function() {
          t.apply(o, i);
        }, n);
      }
      function $i(t, n, i, l) {
        var d = -1, p = Ss, m = !0, g = t.length, V = [], A = n.length;
        if (!g)
          return V;
        i && (n = ke(n, It(i))), l ? (p = Ul, m = !1) : n.length >= a && (p = hi, m = !1, n = new kr(n));
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
      var Qn = _h(mn), Yf = _h(ru, !0);
      function v$(t, n) {
        var i = !0;
        return Qn(t, function(l, d, p) {
          return i = !!n(l, d, p), i;
        }), i;
      }
      function qs(t, n, i) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === o ? m === m && !At(m) : i(m, g)))
            var g = m, V = p;
        }
        return V;
      }
      function m$(t, n, i, l) {
        var d = t.length;
        for (i = X(i), i < 0 && (i = -i > d ? 0 : d + i), l = l === o || l > d ? d : X(l), l < 0 && (l += d), l = i > l ? 0 : up(l); i < l; )
          t[i++] = n;
        return t;
      }
      function Gf(t, n) {
        var i = [];
        return Qn(t, function(l, d, p) {
          n(l, d, p) && i.push(l);
        }), i;
      }
      function Ke(t, n, i, l, d) {
        var p = -1, m = t.length;
        for (i || (i = iy), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && i(g) ? n > 1 ? Ke(g, n - 1, i, l, d) : Kn(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var nu = gh(), jf = gh(!0);
      function mn(t, n) {
        return t && nu(t, n, Ge);
      }
      function ru(t, n) {
        return t && jf(t, n, Ge);
      }
      function Hs(t, n) {
        return Zn(n, function(i) {
          return Ln(t[i]);
        });
      }
      function Ir(t, n) {
        n = tr(n, t);
        for (var i = 0, l = n.length; t != null && i < l; )
          t = t[gn(n[i++])];
        return i && i == l ? t : o;
      }
      function Zf(t, n, i) {
        var l = n(t);
        return J(t) ? l : Kn(l, i(t));
      }
      function ct(t) {
        return t == null ? t === o ? Yg : $s : Cr && Cr in be(t) ? Q$(t) : fy(t);
      }
      function ou(t, n) {
        return t > n;
      }
      function _$(t, n) {
        return t != null && ve.call(t, n);
      }
      function g$(t, n) {
        return t != null && n in be(t);
      }
      function $$(t, n, i) {
        return t >= nt(n, i) && t < We(n, i);
      }
      function iu(t, n, i) {
        for (var l = i ? Ul : Ss, d = t[0].length, p = t.length, m = p, g = C(p), V = 1 / 0, A = []; m--; ) {
          var B = t[m];
          m && n && (B = ke(B, It(n))), V = nt(B.length, V), g[m] = !i && (n || d >= 120 && B.length >= 120) ? new kr(m && B) : o;
        }
        B = t[0];
        var N = -1, F = g[0];
        e:
          for (; ++N < d && A.length < V; ) {
            var q = B[N], G = n ? n(q) : q;
            if (q = i || q !== 0 ? q : 0, !(F ? hi(F, G) : l(A, G, i))) {
              for (m = p; --m; ) {
                var Q = g[m];
                if (!(Q ? hi(Q, G) : l(t[m], G, i)))
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
      function yi(t, n, i) {
        n = tr(n, t), t = Mh(t, n);
        var l = t == null ? t : t[gn(jt(n))];
        return l == null ? o : Et(l, t, i);
      }
      function Kf(t) {
        return Be(t) && ct(t) == In;
      }
      function b$(t) {
        return Be(t) && ct(t) == fi;
      }
      function V$(t) {
        return Be(t) && ct(t) == Gn;
      }
      function bi(t, n, i, l, d) {
        return t === n ? !0 : t == null || n == null || !Be(t) && !Be(n) ? t !== t && n !== n : C$(t, n, i, l, bi, d);
      }
      function C$(t, n, i, l, d, p) {
        var m = J(t), g = J(n), V = m ? yr : rt(t), A = g ? yr : rt(n);
        V = V == In ? Ut : V, A = A == In ? Ut : A;
        var B = V == Ut, N = A == Ut, F = V == A;
        if (F && rr(t)) {
          if (!rr(n))
            return !1;
          m = !0, B = !1;
        }
        if (F && !B)
          return p || (p = new sn()), m || wo(t) ? xh(t, n, i, l, d, p) : J$(t, n, V, i, l, d, p);
        if (!(i & D)) {
          var q = B && ve.call(t, "__wrapped__"), G = N && ve.call(n, "__wrapped__");
          if (q || G) {
            var Q = q ? t.value() : t, j = G ? n.value() : n;
            return p || (p = new sn()), d(Q, j, i, l, p);
          }
        }
        return F ? (p || (p = new sn()), X$(t, n, i, l, d, p)) : !1;
      }
      function S$(t) {
        return Be(t) && rt(t) == ne;
      }
      function su(t, n, i, l) {
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
            if (!(F === o ? bi(B, A, D | M, l, N) : F))
              return !1;
          }
        }
        return !0;
      }
      function Jf(t) {
        if (!Ie(t) || ay(t))
          return !1;
        var n = Ln(t) ? S0 : w1;
        return n.test(Ar(t));
      }
      function k$(t) {
        return Be(t) && ct(t) == ui;
      }
      function E$(t) {
        return Be(t) && rt(t) == rn;
      }
      function I$(t) {
        return Be(t) && aa(t.length) && !!Se[ct(t)];
      }
      function Xf(t) {
        return typeof t == "function" ? t : t == null ? gt : typeof t == "object" ? J(t) ? th(t[0], t[1]) : eh(t) : $p(t);
      }
      function au(t) {
        if (!Si(t))
          return B0(t);
        var n = [];
        for (var i in be(t))
          ve.call(t, i) && i != "constructor" && n.push(i);
        return n;
      }
      function x$(t) {
        if (!Ie(t))
          return dy(t);
        var n = Si(t), i = [];
        for (var l in t)
          l == "constructor" && (n || !ve.call(t, l)) || i.push(l);
        return i;
      }
      function lu(t, n) {
        return t < n;
      }
      function Qf(t, n) {
        var i = -1, l = mt(t) ? C(t.length) : [];
        return Qn(t, function(d, p, m) {
          l[++i] = n(d, p, m);
        }), l;
      }
      function eh(t) {
        var n = Vu(t);
        return n.length == 1 && n[0][2] ? Nh(n[0][0], n[0][1]) : function(i) {
          return i === t || su(i, t, n);
        };
      }
      function th(t, n) {
        return Su(t) && Dh(n) ? Nh(gn(t), n) : function(i) {
          var l = Lu(i, t);
          return l === o && l === n ? Mu(i, t) : bi(n, l, D | M);
        };
      }
      function zs(t, n, i, l, d) {
        t !== n && nu(n, function(p, m) {
          if (d || (d = new sn()), Ie(p))
            A$(t, n, m, i, zs, l, d);
          else {
            var g = l ? l(Eu(t, m), p, m + "", t, n, d) : o;
            g === o && (g = p), eu(t, m, g);
          }
        }, _t);
      }
      function A$(t, n, i, l, d, p, m) {
        var g = Eu(t, i), V = Eu(n, i), A = m.get(V);
        if (A) {
          eu(t, i, A);
          return;
        }
        var B = p ? p(g, V, i + "", t, n, m) : o, N = B === o;
        if (N) {
          var F = J(V), q = !F && rr(V), G = !F && !q && wo(V);
          B = V, F || q || G ? J(g) ? B = g : De(g) ? B = vt(g) : q ? (N = !1, B = hh(V, !0)) : G ? (N = !1, B = ph(V, !0)) : B = [] : Ei(V) || Br(V) ? (B = g, Br(g) ? B = cp(g) : (!Ie(g) || Ln(g)) && (B = Th(V))) : N = !1;
        }
        N && (m.set(V, B), d(B, V, l, p, m), m.delete(V)), eu(t, i, B);
      }
      function nh(t, n) {
        var i = t.length;
        if (!!i)
          return n += n < 0 ? i : 0, Nn(n, i) ? t[n] : o;
      }
      function rh(t, n, i) {
        n.length ? n = ke(n, function(p) {
          return J(p) ? function(m) {
            return Ir(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [gt];
        var l = -1;
        n = ke(n, It(Y()));
        var d = Qf(t, function(p, m, g) {
          var V = ke(n, function(A) {
            return A(p);
          });
          return { criteria: V, index: ++l, value: p };
        });
        return r0(d, function(p, m) {
          return q$(p, m, i);
        });
      }
      function B$(t, n) {
        return oh(t, n, function(i, l) {
          return Mu(t, l);
        });
      }
      function oh(t, n, i) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = Ir(t, m);
          i(g, m) && Vi(p, tr(m, t), g);
        }
        return p;
      }
      function T$(t) {
        return function(n) {
          return Ir(n, t);
        };
      }
      function uu(t, n, i, l) {
        var d = l ? n0 : ro, p = -1, m = n.length, g = t;
        for (t === n && (n = vt(n)), i && (g = ke(t, It(i))); ++p < m; )
          for (var V = 0, A = n[p], B = i ? i(A) : A; (V = d(g, B, V, l)) > -1; )
            g !== t && Ls.call(g, V, 1), Ls.call(t, V, 1);
        return t;
      }
      function ih(t, n) {
        for (var i = t ? n.length : 0, l = i - 1; i--; ) {
          var d = n[i];
          if (i == l || d !== p) {
            var p = d;
            Nn(d) ? Ls.call(t, d, 1) : hu(t, d);
          }
        }
        return t;
      }
      function cu(t, n) {
        return t + Ps(Rf() * (n - t + 1));
      }
      function D$(t, n, i, l) {
        for (var d = -1, p = We(Os((n - t) / (i || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += i;
        return m;
      }
      function du(t, n) {
        var i = "";
        if (!t || n < 1 || n > Ye)
          return i;
        do
          n % 2 && (i += t), n = Ps(n / 2), n && (t += t);
        while (n);
        return i;
      }
      function re(t, n) {
        return Iu(Lh(t, n, gt), t + "");
      }
      function N$(t) {
        return Wf(vo(t));
      }
      function L$(t, n) {
        var i = vo(t);
        return ta(i, Er(n, 0, i.length));
      }
      function Vi(t, n, i, l) {
        if (!Ie(t))
          return t;
        n = tr(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var V = gn(n[d]), A = i;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != m) {
            var B = g[V];
            A = l ? l(B, V, g) : o, A === o && (A = Ie(B) ? B : Nn(n[d + 1]) ? [] : {});
          }
          gi(g, V, A), g = g[V];
        }
        return t;
      }
      var sh = Rs ? function(t, n) {
        return Rs.set(t, n), t;
      } : gt, M$ = Ms ? function(t, n) {
        return Ms(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Pu(n),
          writable: !0
        });
      } : gt;
      function O$(t) {
        return ta(vo(t));
      }
      function Gt(t, n, i) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), i = i > d ? d : i, i < 0 && (i += d), d = n > i ? 0 : i - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function P$(t, n) {
        var i;
        return Qn(t, function(l, d, p) {
          return i = n(l, d, p), !i;
        }), !!i;
      }
      function Ys(t, n, i) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= vs) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !At(m) && (i ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return fu(t, n, gt, i);
      }
      function fu(t, n, i, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = i(n);
        for (var m = n !== n, g = n === null, V = At(n), A = n === o; d < p; ) {
          var B = Ps((d + p) / 2), N = i(t[B]), F = N !== o, q = N === null, G = N === N, Q = At(N);
          if (m)
            var j = l || G;
          else
            A ? j = G && (l || F) : g ? j = G && F && (l || !q) : V ? j = G && F && !q && (l || !Q) : q || Q ? j = !1 : j = l ? N <= n : N < n;
          j ? d = B + 1 : p = B;
        }
        return nt(p, ws);
      }
      function ah(t, n) {
        for (var i = -1, l = t.length, d = 0, p = []; ++i < l; ) {
          var m = t[i], g = n ? n(m) : m;
          if (!i || !an(g, V)) {
            var V = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function lh(t) {
        return typeof t == "number" ? t : At(t) ? $r : +t;
      }
      function xt(t) {
        if (typeof t == "string")
          return t;
        if (J(t))
          return ke(t, xt) + "";
        if (At(t))
          return Ff ? Ff.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Oe ? "-0" : n;
      }
      function er(t, n, i) {
        var l = -1, d = Ss, p = t.length, m = !0, g = [], V = g;
        if (i)
          m = !1, d = Ul;
        else if (p >= a) {
          var A = n ? null : Z$(t);
          if (A)
            return Es(A);
          m = !1, d = hi, V = new kr();
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
      function hu(t, n) {
        return n = tr(n, t), t = Mh(t, n), t == null || delete t[gn(jt(n))];
      }
      function uh(t, n, i, l) {
        return Vi(t, n, i(Ir(t, n)), l);
      }
      function Gs(t, n, i, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return i ? Gt(t, l ? 0 : p, l ? p + 1 : d) : Gt(t, l ? p + 1 : 0, l ? d : p);
      }
      function ch(t, n) {
        var i = t;
        return i instanceof ie && (i = i.value()), Wl(n, function(l, d) {
          return d.func.apply(d.thisArg, Kn([l], d.args));
        }, i);
      }
      function pu(t, n, i) {
        var l = t.length;
        if (l < 2)
          return l ? er(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = $i(p[d] || m, t[g], n, i));
        return er(Ke(p, 1), n, i);
      }
      function dh(t, n, i) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : o;
          i(m, t[l], g);
        }
        return m;
      }
      function wu(t) {
        return De(t) ? t : [];
      }
      function vu(t) {
        return typeof t == "function" ? t : gt;
      }
      function tr(t, n) {
        return J(t) ? t : Su(t, n) ? [t] : Fh(pe(t));
      }
      var R$ = re;
      function nr(t, n, i) {
        var l = t.length;
        return i = i === o ? l : i, !n && i >= l ? t : Gt(t, n, i);
      }
      var fh = k0 || function(t) {
        return Ze.clearTimeout(t);
      };
      function hh(t, n) {
        if (n)
          return t.slice();
        var i = t.length, l = Nf ? Nf(i) : new t.constructor(i);
        return t.copy(l), l;
      }
      function mu(t) {
        var n = new t.constructor(t.byteLength);
        return new Ds(n).set(new Ds(t)), n;
      }
      function F$(t, n) {
        var i = n ? mu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.byteLength);
      }
      function U$(t) {
        var n = new t.constructor(t.source, Zd.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function W$(t) {
        return _i ? be(_i.call(t)) : {};
      }
      function ph(t, n) {
        var i = n ? mu(t.buffer) : t.buffer;
        return new t.constructor(i, t.byteOffset, t.length);
      }
      function wh(t, n) {
        if (t !== n) {
          var i = t !== o, l = t === null, d = t === t, p = At(t), m = n !== o, g = n === null, V = n === n, A = At(n);
          if (!g && !A && !p && t > n || p && m && V && !g && !A || l && m && V || !i && V || !d)
            return 1;
          if (!l && !p && !A && t < n || A && i && d && !l && !p || g && i && d || !m && d || !V)
            return -1;
        }
        return 0;
      }
      function q$(t, n, i) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = i.length; ++l < m; ) {
          var V = wh(d[l], p[l]);
          if (V) {
            if (l >= g)
              return V;
            var A = i[l];
            return V * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function vh(t, n, i, l) {
        for (var d = -1, p = t.length, m = i.length, g = -1, V = n.length, A = We(p - m, 0), B = C(V + A), N = !l; ++g < V; )
          B[g] = n[g];
        for (; ++d < m; )
          (N || d < p) && (B[i[d]] = t[d]);
        for (; A--; )
          B[g++] = t[d++];
        return B;
      }
      function mh(t, n, i, l) {
        for (var d = -1, p = t.length, m = -1, g = i.length, V = -1, A = n.length, B = We(p - g, 0), N = C(B + A), F = !l; ++d < B; )
          N[d] = t[d];
        for (var q = d; ++V < A; )
          N[q + V] = n[V];
        for (; ++m < g; )
          (F || d < p) && (N[q + i[m]] = t[d++]);
        return N;
      }
      function vt(t, n) {
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
          V === o && (V = t[g]), d ? Bn(i, g, V) : gi(i, g, V);
        }
        return i;
      }
      function H$(t, n) {
        return _n(t, Cu(t), n);
      }
      function z$(t, n) {
        return _n(t, Ah(t), n);
      }
      function js(t, n) {
        return function(i, l) {
          var d = J(i) ? K1 : h$, p = n ? n() : {};
          return d(i, t, Y(l, 2), p);
        };
      }
      function fo(t) {
        return re(function(n, i) {
          var l = -1, d = i.length, p = d > 1 ? i[d - 1] : o, m = d > 2 ? i[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : o, m && dt(i[0], i[1], m) && (p = d < 3 ? o : p, d = 1), n = be(n); ++l < d; ) {
            var g = i[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function _h(t, n) {
        return function(i, l) {
          if (i == null)
            return i;
          if (!mt(i))
            return t(i, l);
          for (var d = i.length, p = n ? d : -1, m = be(i); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return i;
        };
      }
      function gh(t) {
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
        var l = n & L, d = Ci(t);
        function p() {
          var m = this && this !== Ze && this instanceof p ? d : t;
          return m.apply(l ? i : this, arguments);
        }
        return p;
      }
      function $h(t) {
        return function(n) {
          n = pe(n);
          var i = oo(n) ? on(n) : o, l = i ? i[0] : n.charAt(0), d = i ? nr(i, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function ho(t) {
        return function(n) {
          return Wl(_p(mp(n).replace(M1, "")), t, "");
        };
      }
      function Ci(t) {
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
          var i = co(t.prototype), l = t.apply(i, n);
          return Ie(l) ? l : i;
        };
      }
      function G$(t, n, i) {
        var l = Ci(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, V = po(d); g--; )
            m[g] = arguments[g];
          var A = p < 3 && m[0] !== V && m[p - 1] !== V ? [] : Jn(m, V);
          if (p -= A.length, p < i)
            return Sh(
              t,
              n,
              Zs,
              d.placeholder,
              o,
              m,
              A,
              o,
              o,
              i - p
            );
          var B = this && this !== Ze && this instanceof d ? l : t;
          return Et(B, this, m);
        }
        return d;
      }
      function yh(t) {
        return function(n, i, l) {
          var d = be(n);
          if (!mt(n)) {
            var p = Y(i, 3);
            n = Ge(n), i = function(g) {
              return p(d[g], g, d);
            };
          }
          var m = t(n, i, l);
          return m > -1 ? d[p ? n[m] : m] : o;
        };
      }
      function bh(t) {
        return Dn(function(n) {
          var i = n.length, l = i, d = zt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Ht(c);
            if (d && !m && Qs(p) == "wrapper")
              var m = new zt([], !0);
          }
          for (l = m ? l : i; ++l < i; ) {
            p = n[l];
            var g = Qs(p), V = g == "wrapper" ? bu(p) : o;
            V && ku(V[0]) && V[1] == (O | x | I | H) && !V[4].length && V[9] == 1 ? m = m[Qs(V[0])].apply(m, V[3]) : m = p.length == 1 && ku(p) ? m[g]() : m.thru(p);
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
      function Zs(t, n, i, l, d, p, m, g, V, A) {
        var B = n & O, N = n & L, F = n & S, q = n & (x | R), G = n & $e, Q = F ? o : Ci(t);
        function j() {
          for (var oe = arguments.length, se = C(oe), Bt = oe; Bt--; )
            se[Bt] = arguments[Bt];
          if (q)
            var ft = po(j), Tt = i0(se, ft);
          if (l && (se = vh(se, l, d, q)), p && (se = mh(se, p, m, q)), oe -= Tt, q && oe < A) {
            var Ne = Jn(se, ft);
            return Sh(
              t,
              n,
              Zs,
              j.placeholder,
              i,
              se,
              Ne,
              g,
              V,
              A - oe
            );
          }
          var ln = N ? i : this, On = F ? ln[t] : t;
          return oe = se.length, g ? se = hy(se, g) : G && oe > 1 && se.reverse(), B && V < oe && (se.length = V), this && this !== Ze && this instanceof j && (On = Q || Ci(On)), On.apply(ln, se);
        }
        return j;
      }
      function Vh(t, n) {
        return function(i, l) {
          return y$(i, t, n(l), {});
        };
      }
      function Ks(t, n) {
        return function(i, l) {
          var d;
          if (i === o && l === o)
            return n;
          if (i !== o && (d = i), l !== o) {
            if (d === o)
              return l;
            typeof i == "string" || typeof l == "string" ? (i = xt(i), l = xt(l)) : (i = lh(i), l = lh(l)), d = t(i, l);
          }
          return d;
        };
      }
      function _u(t) {
        return Dn(function(n) {
          return n = ke(n, It(Y())), re(function(i) {
            var l = this;
            return t(n, function(d) {
              return Et(d, l, i);
            });
          });
        });
      }
      function Js(t, n) {
        n = n === o ? " " : xt(n);
        var i = n.length;
        if (i < 2)
          return i ? du(n, t) : n;
        var l = du(n, Os(t / io(n)));
        return oo(n) ? nr(on(l), 0, t).join("") : l.slice(0, t);
      }
      function j$(t, n, i, l) {
        var d = n & L, p = Ci(t);
        function m() {
          for (var g = -1, V = arguments.length, A = -1, B = l.length, N = C(B + V), F = this && this !== Ze && this instanceof m ? p : t; ++A < B; )
            N[A] = l[A];
          for (; V--; )
            N[A++] = arguments[++g];
          return Et(F, d ? i : this, N);
        }
        return m;
      }
      function Ch(t) {
        return function(n, i, l) {
          return l && typeof l != "number" && dt(n, i, l) && (i = l = o), n = Mn(n), i === o ? (i = n, n = 0) : i = Mn(i), l = l === o ? n < i ? 1 : -1 : Mn(l), D$(n, i, l, t);
        };
      }
      function Xs(t) {
        return function(n, i) {
          return typeof n == "string" && typeof i == "string" || (n = Zt(n), i = Zt(i)), t(n, i);
        };
      }
      function Sh(t, n, i, l, d, p, m, g, V, A) {
        var B = n & x, N = B ? m : o, F = B ? o : m, q = B ? p : o, G = B ? o : p;
        n |= B ? I : P, n &= ~(B ? P : I), n & k || (n &= ~(L | S));
        var Q = [
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
        ], j = i.apply(o, Q);
        return ku(t) && Oh(j, Q), j.placeholder = l, Ph(j, t, n);
      }
      function gu(t) {
        var n = Ue[t];
        return function(i, l) {
          if (i = Zt(i), l = l == null ? 0 : nt(X(l), 292), l && Pf(i)) {
            var d = (pe(i) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (pe(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(i);
        };
      }
      var Z$ = lo && 1 / Es(new lo([, -0]))[1] == Oe ? function(t) {
        return new lo(t);
      } : Uu;
      function kh(t) {
        return function(n) {
          var i = rt(n);
          return i == ne ? Zl(n) : i == rn ? f0(n) : o0(n, t(n));
        };
      }
      function Tn(t, n, i, l, d, p, m, g) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new Ht(c);
        var A = l ? l.length : 0;
        if (A || (n &= ~(I | P), l = d = o), m = m === o ? m : We(X(m), 0), g = g === o ? g : X(g), A -= d ? d.length : 0, n & P) {
          var B = l, N = d;
          l = d = o;
        }
        var F = V ? o : bu(t), q = [
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
        if (F && cy(q, F), t = q[0], n = q[1], i = q[2], l = q[3], d = q[4], g = q[9] = q[9] === o ? V ? 0 : t.length : We(q[9] - A, 0), !g && n & (x | R) && (n &= ~(x | R)), !n || n == L)
          var G = Y$(t, n, i);
        else
          n == x || n == R ? G = G$(t, n, g) : (n == I || n == (L | I)) && !d.length ? G = j$(t, n, i, l) : G = Zs.apply(o, q);
        var Q = F ? sh : Oh;
        return Ph(Q(G, q), t, n);
      }
      function Eh(t, n, i, l) {
        return t === o || an(t, ao[i]) && !ve.call(l, i) ? n : t;
      }
      function Ih(t, n, i, l, d, p) {
        return Ie(t) && Ie(n) && (p.set(n, t), zs(t, n, o, Ih, p), p.delete(n)), t;
      }
      function K$(t) {
        return Ei(t) ? o : t;
      }
      function xh(t, n, i, l, d, p) {
        var m = i & D, g = t.length, V = n.length;
        if (g != V && !(m && V > g))
          return !1;
        var A = p.get(t), B = p.get(n);
        if (A && B)
          return A == n && B == t;
        var N = -1, F = !0, q = i & M ? new kr() : o;
        for (p.set(t, n), p.set(n, t); ++N < g; ) {
          var G = t[N], Q = n[N];
          if (l)
            var j = m ? l(Q, G, N, n, t, p) : l(G, Q, N, t, n, p);
          if (j !== o) {
            if (j)
              continue;
            F = !1;
            break;
          }
          if (q) {
            if (!ql(n, function(oe, se) {
              if (!hi(q, se) && (G === oe || d(G, oe, i, l, p)))
                return q.push(se);
            })) {
              F = !1;
              break;
            }
          } else if (!(G === Q || d(G, Q, i, l, p))) {
            F = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), F;
      }
      function J$(t, n, i, l, d, p, m) {
        switch (i) {
          case to:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case fi:
            return !(t.byteLength != n.byteLength || !p(new Ds(t), new Ds(n)));
          case Yn:
          case Gn:
          case jn:
            return an(+t, +n);
          case br:
            return t.name == n.name && t.message == n.message;
          case ui:
          case ci:
            return t == n + "";
          case ne:
            var g = Zl;
          case rn:
            var V = l & D;
            if (g || (g = Es), t.size != n.size && !V)
              return !1;
            var A = m.get(t);
            if (A)
              return A == n;
            l |= M, m.set(t, n);
            var B = xh(g(t), g(n), l, d, p, m);
            return m.delete(t), B;
          case ys:
            if (_i)
              return _i.call(t) == _i.call(n);
        }
        return !1;
      }
      function X$(t, n, i, l, d, p) {
        var m = i & D, g = $u(t), V = g.length, A = $u(n), B = A.length;
        if (V != B && !m)
          return !1;
        for (var N = V; N--; ) {
          var F = g[N];
          if (!(m ? F in n : ve.call(n, F)))
            return !1;
        }
        var q = p.get(t), G = p.get(n);
        if (q && G)
          return q == n && G == t;
        var Q = !0;
        p.set(t, n), p.set(n, t);
        for (var j = m; ++N < V; ) {
          F = g[N];
          var oe = t[F], se = n[F];
          if (l)
            var Bt = m ? l(se, oe, F, n, t, p) : l(oe, se, F, t, n, p);
          if (!(Bt === o ? oe === se || d(oe, se, i, l, p) : Bt)) {
            Q = !1;
            break;
          }
          j || (j = F == "constructor");
        }
        if (Q && !j) {
          var ft = t.constructor, Tt = n.constructor;
          ft != Tt && "constructor" in t && "constructor" in n && !(typeof ft == "function" && ft instanceof ft && typeof Tt == "function" && Tt instanceof Tt) && (Q = !1);
        }
        return p.delete(t), p.delete(n), Q;
      }
      function Dn(t) {
        return Iu(Lh(t, o, Hh), t + "");
      }
      function $u(t) {
        return Zf(t, Ge, Cu);
      }
      function yu(t) {
        return Zf(t, _t, Ah);
      }
      var bu = Rs ? function(t) {
        return Rs.get(t);
      } : Uu;
      function Qs(t) {
        for (var n = t.name + "", i = uo[n], l = ve.call(uo, n) ? i.length : 0; l--; ) {
          var d = i[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function po(t) {
        var n = ve.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function Y() {
        var t = h.iteratee || Ru;
        return t = t === Ru ? Xf : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function ea(t, n) {
        var i = t.__data__;
        return sy(n) ? i[typeof n == "string" ? "string" : "hash"] : i.map;
      }
      function Vu(t) {
        for (var n = Ge(t), i = n.length; i--; ) {
          var l = n[i], d = t[l];
          n[i] = [l, d, Dh(d)];
        }
        return n;
      }
      function xr(t, n) {
        var i = u0(t, n);
        return Jf(i) ? i : o;
      }
      function Q$(t) {
        var n = ve.call(t, Cr), i = t[Cr];
        try {
          t[Cr] = o;
          var l = !0;
        } catch {
        }
        var d = Bs.call(t);
        return l && (n ? t[Cr] = i : delete t[Cr]), d;
      }
      var Cu = Jl ? function(t) {
        return t == null ? [] : (t = be(t), Zn(Jl(t), function(n) {
          return Mf.call(t, n);
        }));
      } : Wu, Ah = Jl ? function(t) {
        for (var n = []; t; )
          Kn(n, Cu(t)), t = Ns(t);
        return n;
      } : Wu, rt = ct;
      (Xl && rt(new Xl(new ArrayBuffer(1))) != to || wi && rt(new wi()) != ne || Ql && rt(Ql.resolve()) != li || lo && rt(new lo()) != rn || vi && rt(new vi()) != di) && (rt = function(t) {
        var n = ct(t), i = n == Ut ? t.constructor : o, l = i ? Ar(i) : "";
        if (l)
          switch (l) {
            case L0:
              return to;
            case M0:
              return ne;
            case O0:
              return li;
            case P0:
              return rn;
            case R0:
              return di;
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
              n = nt(n, t + m);
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
      function Bh(t, n, i) {
        n = tr(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = gn(n[l]);
          if (!(p = t != null && i(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && aa(d) && Nn(m, d) && (J(t) || Br(t)));
      }
      function ny(t) {
        var n = t.length, i = new t.constructor(n);
        return n && typeof t[0] == "string" && ve.call(t, "index") && (i.index = t.index, i.input = t.input), i;
      }
      function Th(t) {
        return typeof t.constructor == "function" && !Si(t) ? co(Ns(t)) : {};
      }
      function ry(t, n, i) {
        var l = t.constructor;
        switch (n) {
          case fi:
            return mu(t);
          case Yn:
          case Gn:
            return new l(+t);
          case to:
            return F$(t, i);
          case Vl:
          case Cl:
          case Sl:
          case kl:
          case El:
          case Il:
          case xl:
          case Al:
          case Bl:
            return ph(t, i);
          case ne:
            return new l();
          case jn:
          case ci:
            return new l(t);
          case ui:
            return U$(t);
          case rn:
            return new l();
          case ys:
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
        return J(t) || Br(t) || !!(Of && t && t[Of]);
      }
      function Nn(t, n) {
        var i = typeof t;
        return n = n == null ? Ye : n, !!n && (i == "number" || i != "symbol" && m1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function dt(t, n, i) {
        if (!Ie(i))
          return !1;
        var l = typeof n;
        return (l == "number" ? mt(i) && Nn(n, i.length) : l == "string" && n in i) ? an(i[n], t) : !1;
      }
      function Su(t, n) {
        if (J(t))
          return !1;
        var i = typeof t;
        return i == "number" || i == "symbol" || i == "boolean" || t == null || At(t) ? !0 : n1.test(t) || !t1.test(t) || n != null && t in be(n);
      }
      function sy(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function ku(t) {
        var n = Qs(t), i = h[n];
        if (typeof i != "function" || !(n in ie.prototype))
          return !1;
        if (t === i)
          return !0;
        var l = bu(i);
        return !!l && t === l[0];
      }
      function ay(t) {
        return !!Df && Df in t;
      }
      var ly = xs ? Ln : qu;
      function Si(t) {
        var n = t && t.constructor, i = typeof n == "function" && n.prototype || ao;
        return t === i;
      }
      function Dh(t) {
        return t === t && !Ie(t);
      }
      function Nh(t, n) {
        return function(i) {
          return i == null ? !1 : i[t] === n && (n !== o || t in be(i));
        };
      }
      function uy(t) {
        var n = ia(t, function(l) {
          return i.size === v && i.clear(), l;
        }), i = n.cache;
        return n;
      }
      function cy(t, n) {
        var i = t[1], l = n[1], d = i | l, p = d < (L | S | O), m = l == O && i == x || l == O && i == H && t[7].length <= n[8] || l == (O | H) && n[7].length <= n[8] && i == x;
        if (!(p || m))
          return t;
        l & L && (t[2] = n[2], d |= i & L ? 0 : k);
        var g = n[3];
        if (g) {
          var V = t[3];
          t[3] = V ? vh(V, g, n[4]) : g, t[4] = V ? Jn(t[3], _) : n[4];
        }
        return g = n[5], g && (V = t[5], t[5] = V ? mh(V, g, n[6]) : g, t[6] = V ? Jn(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & O && (t[8] = t[8] == null ? n[8] : nt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function dy(t) {
        var n = [];
        if (t != null)
          for (var i in be(t))
            n.push(i);
        return n;
      }
      function fy(t) {
        return Bs.call(t);
      }
      function Lh(t, n, i) {
        return n = We(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = We(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = i(m), Et(t, this, g);
        };
      }
      function Mh(t, n) {
        return n.length < 2 ? t : Ir(t, Gt(n, 0, -1));
      }
      function hy(t, n) {
        for (var i = t.length, l = nt(n.length, i), d = vt(t); l--; ) {
          var p = n[l];
          t[l] = Nn(p, i) ? d[p] : o;
        }
        return t;
      }
      function Eu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Oh = Rh(sh), ki = I0 || function(t, n) {
        return Ze.setTimeout(t, n);
      }, Iu = Rh(M$);
      function Ph(t, n, i) {
        var l = n + "";
        return Iu(t, oy(l, py(ty(l), i)));
      }
      function Rh(t) {
        var n = 0, i = 0;
        return function() {
          var l = T0(), d = Ee - (l - i);
          if (i = l, d > 0) {
            if (++n >= ge)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function ta(t, n) {
        var i = -1, l = t.length, d = l - 1;
        for (n = n === o ? l : n; ++i < n; ) {
          var p = cu(i, d), m = t[p];
          t[p] = t[i], t[i] = m;
        }
        return t.length = n, t;
      }
      var Fh = uy(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(r1, function(i, l, d, p) {
          n.push(d ? p.replace(d1, "$1") : l || i);
        }), n;
      });
      function gn(t) {
        if (typeof t == "string" || At(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Oe ? "-0" : n;
      }
      function Ar(t) {
        if (t != null) {
          try {
            return As.call(t);
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
        return qt(ms, function(i) {
          var l = "_." + i[0];
          n & i[1] && !Ss(t, l) && t.push(l);
        }), t.sort();
      }
      function Uh(t) {
        if (t instanceof ie)
          return t.clone();
        var n = new zt(t.__wrapped__, t.__chain__);
        return n.__actions__ = vt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function wy(t, n, i) {
        (i ? dt(t, n, i) : n === o) ? n = 1 : n = We(X(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(Os(l / n)); d < l; )
          m[p++] = Gt(t, d, d += n);
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
        return Kn(J(i) ? vt(i) : [i], Ke(n, 1));
      }
      var _y = re(function(t, n) {
        return De(t) ? $i(t, Ke(n, 1, De, !0)) : [];
      }), gy = re(function(t, n) {
        var i = jt(n);
        return De(i) && (i = o), De(t) ? $i(t, Ke(n, 1, De, !0), Y(i, 2)) : [];
      }), $y = re(function(t, n) {
        var i = jt(n);
        return De(i) && (i = o), De(t) ? $i(t, Ke(n, 1, De, !0), o, i) : [];
      });
      function yy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : X(n), Gt(t, n < 0 ? 0 : n, l)) : [];
      }
      function by(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : X(n), n = l - n, Gt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Vy(t, n) {
        return t && t.length ? Gs(t, Y(n, 3), !0, !0) : [];
      }
      function Cy(t, n) {
        return t && t.length ? Gs(t, Y(n, 3), !0) : [];
      }
      function Sy(t, n, i, l) {
        var d = t == null ? 0 : t.length;
        return d ? (i && typeof i != "number" && dt(t, n, i) && (i = 0, l = d), m$(t, n, i, l)) : [];
      }
      function Wh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = We(l + d, 0)), ks(t, Y(n, 3), d);
      }
      function qh(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return i !== o && (d = X(i), d = i < 0 ? We(l + d, 0) : nt(d, l - 1)), ks(t, Y(n, 3), d, !0);
      }
      function Hh(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ke(t, 1) : [];
      }
      function ky(t) {
        var n = t == null ? 0 : t.length;
        return n ? Ke(t, Oe) : [];
      }
      function Ey(t, n) {
        var i = t == null ? 0 : t.length;
        return i ? (n = n === o ? 1 : X(n), Ke(t, n)) : [];
      }
      function Iy(t) {
        for (var n = -1, i = t == null ? 0 : t.length, l = {}; ++n < i; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function zh(t) {
        return t && t.length ? t[0] : o;
      }
      function xy(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = i == null ? 0 : X(i);
        return d < 0 && (d = We(l + d, 0)), ro(t, n, d);
      }
      function Ay(t) {
        var n = t == null ? 0 : t.length;
        return n ? Gt(t, 0, -1) : [];
      }
      var By = re(function(t) {
        var n = ke(t, wu);
        return n.length && n[0] === t[0] ? iu(n) : [];
      }), Ty = re(function(t) {
        var n = jt(t), i = ke(t, wu);
        return n === jt(i) ? n = o : i.pop(), i.length && i[0] === t[0] ? iu(i, Y(n, 2)) : [];
      }), Dy = re(function(t) {
        var n = jt(t), i = ke(t, wu);
        return n = typeof n == "function" ? n : o, n && i.pop(), i.length && i[0] === t[0] ? iu(i, o, n) : [];
      });
      function Ny(t, n) {
        return t == null ? "" : A0.call(t, n);
      }
      function jt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function Ly(t, n, i) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return i !== o && (d = X(i), d = d < 0 ? We(l + d, 0) : nt(d, l - 1)), n === n ? p0(t, n, d) : ks(t, Sf, d, !0);
      }
      function My(t, n) {
        return t && t.length ? nh(t, X(n)) : o;
      }
      var Oy = re(Yh);
      function Yh(t, n) {
        return t && t.length && n && n.length ? uu(t, n) : t;
      }
      function Py(t, n, i) {
        return t && t.length && n && n.length ? uu(t, n, Y(i, 2)) : t;
      }
      function Ry(t, n, i) {
        return t && t.length && n && n.length ? uu(t, n, o, i) : t;
      }
      var Fy = Dn(function(t, n) {
        var i = t == null ? 0 : t.length, l = tu(t, n);
        return ih(t, ke(n, function(d) {
          return Nn(d, i) ? +d : d;
        }).sort(wh)), l;
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
        return ih(t, d), i;
      }
      function xu(t) {
        return t == null ? t : N0.call(t);
      }
      function Wy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (i && typeof i != "number" && dt(t, n, i) ? (n = 0, i = l) : (n = n == null ? 0 : X(n), i = i === o ? l : X(i)), Gt(t, n, i)) : [];
      }
      function qy(t, n) {
        return Ys(t, n);
      }
      function Hy(t, n, i) {
        return fu(t, n, Y(i, 2));
      }
      function zy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Ys(t, n);
          if (l < i && an(t[l], n))
            return l;
        }
        return -1;
      }
      function Yy(t, n) {
        return Ys(t, n, !0);
      }
      function Gy(t, n, i) {
        return fu(t, n, Y(i, 2), !0);
      }
      function jy(t, n) {
        var i = t == null ? 0 : t.length;
        if (i) {
          var l = Ys(t, n, !0) - 1;
          if (an(t[l], n))
            return l;
        }
        return -1;
      }
      function Zy(t) {
        return t && t.length ? ah(t) : [];
      }
      function Ky(t, n) {
        return t && t.length ? ah(t, Y(n, 2)) : [];
      }
      function Jy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Gt(t, 1, n) : [];
      }
      function Xy(t, n, i) {
        return t && t.length ? (n = i || n === o ? 1 : X(n), Gt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Qy(t, n, i) {
        var l = t == null ? 0 : t.length;
        return l ? (n = i || n === o ? 1 : X(n), n = l - n, Gt(t, n < 0 ? 0 : n, l)) : [];
      }
      function eb(t, n) {
        return t && t.length ? Gs(t, Y(n, 3), !1, !0) : [];
      }
      function tb(t, n) {
        return t && t.length ? Gs(t, Y(n, 3)) : [];
      }
      var nb = re(function(t) {
        return er(Ke(t, 1, De, !0));
      }), rb = re(function(t) {
        var n = jt(t);
        return De(n) && (n = o), er(Ke(t, 1, De, !0), Y(n, 2));
      }), ob = re(function(t) {
        var n = jt(t);
        return n = typeof n == "function" ? n : o, er(Ke(t, 1, De, !0), o, n);
      });
      function ib(t) {
        return t && t.length ? er(t) : [];
      }
      function sb(t, n) {
        return t && t.length ? er(t, Y(n, 2)) : [];
      }
      function ab(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? er(t, o, n) : [];
      }
      function Au(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Zn(t, function(i) {
          if (De(i))
            return n = We(i.length, n), !0;
        }), Gl(n, function(i) {
          return ke(t, Hl(i));
        });
      }
      function Gh(t, n) {
        if (!(t && t.length))
          return [];
        var i = Au(t);
        return n == null ? i : ke(i, function(l) {
          return Et(n, o, l);
        });
      }
      var lb = re(function(t, n) {
        return De(t) ? $i(t, n) : [];
      }), ub = re(function(t) {
        return pu(Zn(t, De));
      }), cb = re(function(t) {
        var n = jt(t);
        return De(n) && (n = o), pu(Zn(t, De), Y(n, 2));
      }), db = re(function(t) {
        var n = jt(t);
        return n = typeof n == "function" ? n : o, pu(Zn(t, De), o, n);
      }), fb = re(Au);
      function hb(t, n) {
        return dh(t || [], n || [], gi);
      }
      function pb(t, n) {
        return dh(t || [], n || [], Vi);
      }
      var wb = re(function(t) {
        var n = t.length, i = n > 1 ? t[n - 1] : o;
        return i = typeof i == "function" ? (t.pop(), i) : o, Gh(t, i);
      });
      function jh(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function vb(t, n) {
        return n(t), t;
      }
      function na(t, n) {
        return n(t);
      }
      var mb = Dn(function(t) {
        var n = t.length, i = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return tu(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ie) || !Nn(i) ? this.thru(d) : (l = l.slice(i, +i + (n ? 1 : 0)), l.__actions__.push({
          func: na,
          args: [d],
          thisArg: o
        }), new zt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function _b() {
        return jh(this);
      }
      function gb() {
        return new zt(this.value(), this.__chain__);
      }
      function $b() {
        this.__values__ === o && (this.__values__ = lp(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function yb() {
        return this;
      }
      function bb(t) {
        for (var n, i = this; i instanceof Us; ) {
          var l = Uh(i);
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
            func: na,
            args: [xu],
            thisArg: o
          }), new zt(n, this.__chain__);
        }
        return this.thru(xu);
      }
      function Cb() {
        return ch(this.__wrapped__, this.__actions__);
      }
      var Sb = js(function(t, n, i) {
        ve.call(t, i) ? ++t[i] : Bn(t, i, 1);
      });
      function kb(t, n, i) {
        var l = J(t) ? Vf : v$;
        return i && dt(t, n, i) && (n = o), l(t, Y(n, 3));
      }
      function Eb(t, n) {
        var i = J(t) ? Zn : Gf;
        return i(t, Y(n, 3));
      }
      var Ib = yh(Wh), xb = yh(qh);
      function Ab(t, n) {
        return Ke(ra(t, n), 1);
      }
      function Bb(t, n) {
        return Ke(ra(t, n), Oe);
      }
      function Tb(t, n, i) {
        return i = i === o ? 1 : X(i), Ke(ra(t, n), i);
      }
      function Zh(t, n) {
        var i = J(t) ? qt : Qn;
        return i(t, Y(n, 3));
      }
      function Kh(t, n) {
        var i = J(t) ? J1 : Yf;
        return i(t, Y(n, 3));
      }
      var Db = js(function(t, n, i) {
        ve.call(t, i) ? t[i].push(n) : Bn(t, i, [n]);
      });
      function Nb(t, n, i, l) {
        t = mt(t) ? t : vo(t), i = i && !l ? X(i) : 0;
        var d = t.length;
        return i < 0 && (i = We(d + i, 0)), la(t) ? i <= d && t.indexOf(n, i) > -1 : !!d && ro(t, n, i) > -1;
      }
      var Lb = re(function(t, n, i) {
        var l = -1, d = typeof n == "function", p = mt(t) ? C(t.length) : [];
        return Qn(t, function(m) {
          p[++l] = d ? Et(n, m, i) : yi(m, n, i);
        }), p;
      }), Mb = js(function(t, n, i) {
        Bn(t, i, n);
      });
      function ra(t, n) {
        var i = J(t) ? ke : Qf;
        return i(t, Y(n, 3));
      }
      function Ob(t, n, i, l) {
        return t == null ? [] : (J(n) || (n = n == null ? [] : [n]), i = l ? o : i, J(i) || (i = i == null ? [] : [i]), rh(t, n, i));
      }
      var Pb = js(function(t, n, i) {
        t[i ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Rb(t, n, i) {
        var l = J(t) ? Wl : Ef, d = arguments.length < 3;
        return l(t, Y(n, 4), i, d, Qn);
      }
      function Fb(t, n, i) {
        var l = J(t) ? X1 : Ef, d = arguments.length < 3;
        return l(t, Y(n, 4), i, d, Yf);
      }
      function Ub(t, n) {
        var i = J(t) ? Zn : Gf;
        return i(t, sa(Y(n, 3)));
      }
      function Wb(t) {
        var n = J(t) ? Wf : N$;
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
        if (mt(t))
          return la(t) ? io(t) : t.length;
        var n = rt(t);
        return n == ne || n == rn ? t.size : au(t).length;
      }
      function Yb(t, n, i) {
        var l = J(t) ? ql : P$;
        return i && dt(t, n, i) && (n = o), l(t, Y(n, 3));
      }
      var Gb = re(function(t, n) {
        if (t == null)
          return [];
        var i = n.length;
        return i > 1 && dt(t, n[0], n[1]) ? n = [] : i > 2 && dt(n[0], n[1], n[2]) && (n = [n[0]]), rh(t, Ke(n, 1), []);
      }), oa = E0 || function() {
        return Ze.Date.now();
      };
      function jb(t, n) {
        if (typeof n != "function")
          throw new Ht(c);
        return t = X(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function Jh(t, n, i) {
        return n = i ? o : n, n = t && n == null ? t.length : n, Tn(t, O, o, o, o, o, n);
      }
      function Xh(t, n) {
        var i;
        if (typeof n != "function")
          throw new Ht(c);
        return t = X(t), function() {
          return --t > 0 && (i = n.apply(this, arguments)), t <= 1 && (n = o), i;
        };
      }
      var Bu = re(function(t, n, i) {
        var l = L;
        if (i.length) {
          var d = Jn(i, po(Bu));
          l |= I;
        }
        return Tn(t, l, n, i, d);
      }), Qh = re(function(t, n, i) {
        var l = L | S;
        if (i.length) {
          var d = Jn(i, po(Qh));
          l |= I;
        }
        return Tn(n, l, t, i, d);
      });
      function ep(t, n, i) {
        n = i ? o : n;
        var l = Tn(t, x, o, o, o, o, o, n);
        return l.placeholder = ep.placeholder, l;
      }
      function tp(t, n, i) {
        n = i ? o : n;
        var l = Tn(t, R, o, o, o, o, o, n);
        return l.placeholder = tp.placeholder, l;
      }
      function np(t, n, i) {
        var l, d, p, m, g, V, A = 0, B = !1, N = !1, F = !0;
        if (typeof t != "function")
          throw new Ht(c);
        n = Zt(n) || 0, Ie(i) && (B = !!i.leading, N = "maxWait" in i, p = N ? We(Zt(i.maxWait) || 0, n) : p, F = "trailing" in i ? !!i.trailing : F);
        function q(Ne) {
          var ln = l, On = d;
          return l = d = o, A = Ne, m = t.apply(On, ln), m;
        }
        function G(Ne) {
          return A = Ne, g = ki(oe, n), B ? q(Ne) : m;
        }
        function Q(Ne) {
          var ln = Ne - V, On = Ne - A, yp = n - ln;
          return N ? nt(yp, p - On) : yp;
        }
        function j(Ne) {
          var ln = Ne - V, On = Ne - A;
          return V === o || ln >= n || ln < 0 || N && On >= p;
        }
        function oe() {
          var Ne = oa();
          if (j(Ne))
            return se(Ne);
          g = ki(oe, Q(Ne));
        }
        function se(Ne) {
          return g = o, F && l ? q(Ne) : (l = d = o, m);
        }
        function Bt() {
          g !== o && fh(g), A = 0, l = V = d = g = o;
        }
        function ft() {
          return g === o ? m : se(oa());
        }
        function Tt() {
          var Ne = oa(), ln = j(Ne);
          if (l = arguments, d = this, V = Ne, ln) {
            if (g === o)
              return G(V);
            if (N)
              return fh(g), g = ki(oe, n), q(V);
          }
          return g === o && (g = ki(oe, n)), m;
        }
        return Tt.cancel = Bt, Tt.flush = ft, Tt;
      }
      var Zb = re(function(t, n) {
        return zf(t, 1, n);
      }), Kb = re(function(t, n, i) {
        return zf(t, Zt(n) || 0, i);
      });
      function Jb(t) {
        return Tn(t, $e);
      }
      function ia(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Ht(c);
        var i = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = i.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return i.cache = p.set(d, m) || p, m;
        };
        return i.cache = new (ia.Cache || An)(), i;
      }
      ia.Cache = An;
      function sa(t) {
        if (typeof t != "function")
          throw new Ht(c);
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
        return Xh(2, t);
      }
      var Qb = R$(function(t, n) {
        n = n.length == 1 && J(n[0]) ? ke(n[0], It(Y())) : ke(Ke(n, 1), It(Y()));
        var i = n.length;
        return re(function(l) {
          for (var d = -1, p = nt(l.length, i); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return Et(t, this, l);
        });
      }), Tu = re(function(t, n) {
        var i = Jn(n, po(Tu));
        return Tn(t, I, o, n, i);
      }), rp = re(function(t, n) {
        var i = Jn(n, po(rp));
        return Tn(t, P, o, n, i);
      }), eV = Dn(function(t, n) {
        return Tn(t, H, o, o, o, n);
      });
      function tV(t, n) {
        if (typeof t != "function")
          throw new Ht(c);
        return n = n === o ? n : X(n), re(t, n);
      }
      function nV(t, n) {
        if (typeof t != "function")
          throw new Ht(c);
        return n = n == null ? 0 : We(X(n), 0), re(function(i) {
          var l = i[n], d = nr(i, 0, n);
          return l && Kn(d, l), Et(t, this, d);
        });
      }
      function rV(t, n, i) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Ht(c);
        return Ie(i) && (l = "leading" in i ? !!i.leading : l, d = "trailing" in i ? !!i.trailing : d), np(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function oV(t) {
        return Jh(t, 1);
      }
      function iV(t, n) {
        return Tu(vu(n), t);
      }
      function sV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return J(t) ? t : [t];
      }
      function aV(t) {
        return Yt(t, T);
      }
      function lV(t, n) {
        return n = typeof n == "function" ? n : o, Yt(t, T, n);
      }
      function uV(t) {
        return Yt(t, $ | T);
      }
      function cV(t, n) {
        return n = typeof n == "function" ? n : o, Yt(t, $ | T, n);
      }
      function dV(t, n) {
        return n == null || Hf(t, n, Ge(n));
      }
      function an(t, n) {
        return t === n || t !== t && n !== n;
      }
      var fV = Xs(ou), hV = Xs(function(t, n) {
        return t >= n;
      }), Br = Kf(function() {
        return arguments;
      }()) ? Kf : function(t) {
        return Be(t) && ve.call(t, "callee") && !Mf.call(t, "callee");
      }, J = C.isArray, pV = mf ? It(mf) : b$;
      function mt(t) {
        return t != null && aa(t.length) && !Ln(t);
      }
      function De(t) {
        return Be(t) && mt(t);
      }
      function wV(t) {
        return t === !0 || t === !1 || Be(t) && ct(t) == Yn;
      }
      var rr = x0 || qu, vV = _f ? It(_f) : V$;
      function mV(t) {
        return Be(t) && t.nodeType === 1 && !Ei(t);
      }
      function _V(t) {
        if (t == null)
          return !0;
        if (mt(t) && (J(t) || typeof t == "string" || typeof t.splice == "function" || rr(t) || wo(t) || Br(t)))
          return !t.length;
        var n = rt(t);
        if (n == ne || n == rn)
          return !t.size;
        if (Si(t))
          return !au(t).length;
        for (var i in t)
          if (ve.call(t, i))
            return !1;
        return !0;
      }
      function gV(t, n) {
        return bi(t, n);
      }
      function $V(t, n, i) {
        i = typeof i == "function" ? i : o;
        var l = i ? i(t, n) : o;
        return l === o ? bi(t, n, o, i) : !!l;
      }
      function Du(t) {
        if (!Be(t))
          return !1;
        var n = ct(t);
        return n == br || n == gs || typeof t.message == "string" && typeof t.name == "string" && !Ei(t);
      }
      function yV(t) {
        return typeof t == "number" && Pf(t);
      }
      function Ln(t) {
        if (!Ie(t))
          return !1;
        var n = ct(t);
        return n == ue || n == te || n == _s || n == zg;
      }
      function op(t) {
        return typeof t == "number" && t == X(t);
      }
      function aa(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ye;
      }
      function Ie(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Be(t) {
        return t != null && typeof t == "object";
      }
      var ip = gf ? It(gf) : S$;
      function bV(t, n) {
        return t === n || su(t, n, Vu(n));
      }
      function VV(t, n, i) {
        return i = typeof i == "function" ? i : o, su(t, n, Vu(n), i);
      }
      function CV(t) {
        return sp(t) && t != +t;
      }
      function SV(t) {
        if (ly(t))
          throw new K(u);
        return Jf(t);
      }
      function kV(t) {
        return t === null;
      }
      function EV(t) {
        return t == null;
      }
      function sp(t) {
        return typeof t == "number" || Be(t) && ct(t) == jn;
      }
      function Ei(t) {
        if (!Be(t) || ct(t) != Ut)
          return !1;
        var n = Ns(t);
        if (n === null)
          return !0;
        var i = ve.call(n, "constructor") && n.constructor;
        return typeof i == "function" && i instanceof i && As.call(i) == V0;
      }
      var Nu = $f ? It($f) : k$;
      function IV(t) {
        return op(t) && t >= -Ye && t <= Ye;
      }
      var ap = yf ? It(yf) : E$;
      function la(t) {
        return typeof t == "string" || !J(t) && Be(t) && ct(t) == ci;
      }
      function At(t) {
        return typeof t == "symbol" || Be(t) && ct(t) == ys;
      }
      var wo = bf ? It(bf) : I$;
      function xV(t) {
        return t === o;
      }
      function AV(t) {
        return Be(t) && rt(t) == di;
      }
      function BV(t) {
        return Be(t) && ct(t) == Gg;
      }
      var TV = Xs(lu), DV = Xs(function(t, n) {
        return t <= n;
      });
      function lp(t) {
        if (!t)
          return [];
        if (mt(t))
          return la(t) ? on(t) : vt(t);
        if (pi && t[pi])
          return d0(t[pi]());
        var n = rt(t), i = n == ne ? Zl : n == rn ? Es : vo;
        return i(t);
      }
      function Mn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Zt(t), t === Oe || t === -Oe) {
          var n = t < 0 ? -1 : 1;
          return n * zn;
        }
        return t === t ? t : 0;
      }
      function X(t) {
        var n = Mn(t), i = n % 1;
        return n === n ? i ? n - i : n : 0;
      }
      function up(t) {
        return t ? Er(X(t), 0, kt) : 0;
      }
      function Zt(t) {
        if (typeof t == "number")
          return t;
        if (At(t))
          return $r;
        if (Ie(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Ie(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = If(t);
        var i = p1.test(t);
        return i || v1.test(t) ? j1(t.slice(2), i ? 2 : 8) : h1.test(t) ? $r : +t;
      }
      function cp(t) {
        return _n(t, _t(t));
      }
      function NV(t) {
        return t ? Er(X(t), -Ye, Ye) : t === 0 ? t : 0;
      }
      function pe(t) {
        return t == null ? "" : xt(t);
      }
      var LV = fo(function(t, n) {
        if (Si(n) || mt(n)) {
          _n(n, Ge(n), t);
          return;
        }
        for (var i in n)
          ve.call(n, i) && gi(t, i, n[i]);
      }), dp = fo(function(t, n) {
        _n(n, _t(n), t);
      }), ua = fo(function(t, n, i, l) {
        _n(n, _t(n), t, l);
      }), MV = fo(function(t, n, i, l) {
        _n(n, Ge(n), t, l);
      }), OV = Dn(tu);
      function PV(t, n) {
        var i = co(t);
        return n == null ? i : qf(i, n);
      }
      var RV = re(function(t, n) {
        t = be(t);
        var i = -1, l = n.length, d = l > 2 ? n[2] : o;
        for (d && dt(n[0], n[1], d) && (l = 1); ++i < l; )
          for (var p = n[i], m = _t(p), g = -1, V = m.length; ++g < V; ) {
            var A = m[g], B = t[A];
            (B === o || an(B, ao[A]) && !ve.call(t, A)) && (t[A] = p[A]);
          }
        return t;
      }), FV = re(function(t) {
        return t.push(o, Ih), Et(fp, o, t);
      });
      function UV(t, n) {
        return Cf(t, Y(n, 3), mn);
      }
      function WV(t, n) {
        return Cf(t, Y(n, 3), ru);
      }
      function qV(t, n) {
        return t == null ? t : nu(t, Y(n, 3), _t);
      }
      function HV(t, n) {
        return t == null ? t : jf(t, Y(n, 3), _t);
      }
      function zV(t, n) {
        return t && mn(t, Y(n, 3));
      }
      function YV(t, n) {
        return t && ru(t, Y(n, 3));
      }
      function GV(t) {
        return t == null ? [] : Hs(t, Ge(t));
      }
      function jV(t) {
        return t == null ? [] : Hs(t, _t(t));
      }
      function Lu(t, n, i) {
        var l = t == null ? o : Ir(t, n);
        return l === o ? i : l;
      }
      function ZV(t, n) {
        return t != null && Bh(t, n, _$);
      }
      function Mu(t, n) {
        return t != null && Bh(t, n, g$);
      }
      var KV = Vh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Bs.call(n)), t[n] = i;
      }, Pu(gt)), JV = Vh(function(t, n, i) {
        n != null && typeof n.toString != "function" && (n = Bs.call(n)), ve.call(t, n) ? t[n].push(i) : t[n] = [i];
      }, Y), XV = re(yi);
      function Ge(t) {
        return mt(t) ? Uf(t) : au(t);
      }
      function _t(t) {
        return mt(t) ? Uf(t, !0) : x$(t);
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
      var tC = fo(function(t, n, i) {
        zs(t, n, i);
      }), fp = fo(function(t, n, i, l) {
        zs(t, n, i, l);
      }), nC = Dn(function(t, n) {
        var i = {};
        if (t == null)
          return i;
        var l = !1;
        n = ke(n, function(p) {
          return p = tr(p, t), l || (l = p.length > 1), p;
        }), _n(t, yu(t), i), l && (i = Yt(i, $ | y | T, K$));
        for (var d = n.length; d--; )
          hu(i, n[d]);
        return i;
      });
      function rC(t, n) {
        return hp(t, sa(Y(n)));
      }
      var oC = Dn(function(t, n) {
        return t == null ? {} : B$(t, n);
      });
      function hp(t, n) {
        if (t == null)
          return {};
        var i = ke(yu(t), function(l) {
          return [l];
        });
        return n = Y(n), oh(t, i, function(l, d) {
          return n(l, d[0]);
        });
      }
      function iC(t, n, i) {
        n = tr(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = o); ++l < d; ) {
          var p = t == null ? o : t[gn(n[l])];
          p === o && (l = d, p = i), t = Ln(p) ? p.call(t) : p;
        }
        return t;
      }
      function sC(t, n, i) {
        return t == null ? t : Vi(t, n, i);
      }
      function aC(t, n, i, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Vi(t, n, i, l);
      }
      var pp = kh(Ge), wp = kh(_t);
      function lC(t, n, i) {
        var l = J(t), d = l || rr(t) || wo(t);
        if (n = Y(n, 4), i == null) {
          var p = t && t.constructor;
          d ? i = l ? new p() : [] : Ie(t) ? i = Ln(p) ? co(Ns(t)) : {} : i = {};
        }
        return (d ? qt : mn)(t, function(m, g, V) {
          return n(i, m, g, V);
        }), i;
      }
      function uC(t, n) {
        return t == null ? !0 : hu(t, n);
      }
      function cC(t, n, i) {
        return t == null ? t : uh(t, n, vu(i));
      }
      function dC(t, n, i, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : uh(t, n, vu(i), l);
      }
      function vo(t) {
        return t == null ? [] : jl(t, Ge(t));
      }
      function fC(t) {
        return t == null ? [] : jl(t, _t(t));
      }
      function hC(t, n, i) {
        return i === o && (i = n, n = o), i !== o && (i = Zt(i), i = i === i ? i : 0), n !== o && (n = Zt(n), n = n === n ? n : 0), Er(Zt(t), n, i);
      }
      function pC(t, n, i) {
        return n = Mn(n), i === o ? (i = n, n = 0) : i = Mn(i), t = Zt(t), $$(t, n, i);
      }
      function wC(t, n, i) {
        if (i && typeof i != "boolean" && dt(t, n, i) && (n = i = o), i === o && (typeof n == "boolean" ? (i = n, n = o) : typeof t == "boolean" && (i = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = Mn(t), n === o ? (n = t, t = 0) : n = Mn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (i || t % 1 || n % 1) {
          var d = Rf();
          return nt(t + d * (n - t + G1("1e-" + ((d + "").length - 1))), n);
        }
        return cu(t, n);
      }
      var vC = ho(function(t, n, i) {
        return n = n.toLowerCase(), t + (i ? vp(n) : n);
      });
      function vp(t) {
        return Ou(pe(t).toLowerCase());
      }
      function mp(t) {
        return t = pe(t), t && t.replace(_1, s0).replace(O1, "");
      }
      function mC(t, n, i) {
        t = pe(t), n = xt(n);
        var l = t.length;
        i = i === o ? l : Er(X(i), 0, l);
        var d = i;
        return i -= n.length, i >= 0 && t.slice(i, d) == n;
      }
      function _C(t) {
        return t = pe(t), t && Xg.test(t) ? t.replace(Gd, a0) : t;
      }
      function gC(t) {
        return t = pe(t), t && o1.test(t) ? t.replace(Tl, "\\$&") : t;
      }
      var $C = ho(function(t, n, i) {
        return t + (i ? "-" : "") + n.toLowerCase();
      }), yC = ho(function(t, n, i) {
        return t + (i ? " " : "") + n.toLowerCase();
      }), bC = $h("toLowerCase");
      function VC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? io(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Js(Ps(d), i) + t + Js(Os(d), i);
      }
      function CC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? io(t) : 0;
        return n && l < n ? t + Js(n - l, i) : t;
      }
      function SC(t, n, i) {
        t = pe(t), n = X(n);
        var l = n ? io(t) : 0;
        return n && l < n ? Js(n - l, i) + t : t;
      }
      function kC(t, n, i) {
        return i || n == null ? n = 0 : n && (n = +n), D0(pe(t).replace(Dl, ""), n || 0);
      }
      function EC(t, n, i) {
        return (i ? dt(t, n, i) : n === o) ? n = 1 : n = X(n), du(pe(t), n);
      }
      function IC() {
        var t = arguments, n = pe(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var xC = ho(function(t, n, i) {
        return t + (i ? "_" : "") + n.toLowerCase();
      });
      function AC(t, n, i) {
        return i && typeof i != "number" && dt(t, n, i) && (n = i = o), i = i === o ? kt : i >>> 0, i ? (t = pe(t), t && (typeof n == "string" || n != null && !Nu(n)) && (n = xt(n), !n && oo(t)) ? nr(on(t), 0, i) : t.split(n, i)) : [];
      }
      var BC = ho(function(t, n, i) {
        return t + (i ? " " : "") + Ou(n);
      });
      function TC(t, n, i) {
        return t = pe(t), i = i == null ? 0 : Er(X(i), 0, t.length), n = xt(n), t.slice(i, i + n.length) == n;
      }
      function DC(t, n, i) {
        var l = h.templateSettings;
        i && dt(t, n, i) && (n = o), t = pe(t), n = ua({}, n, l, Eh);
        var d = ua({}, n.imports, l.imports, Eh), p = Ge(d), m = jl(d, p), g, V, A = 0, B = n.interpolate || bs, N = "__p += '", F = Kl(
          (n.escape || bs).source + "|" + B.source + "|" + (B === jd ? f1 : bs).source + "|" + (n.evaluate || bs).source + "|$",
          "g"
        ), q = "//# sourceURL=" + (ve.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++W1 + "]") + `
`;
        t.replace(F, function(j, oe, se, Bt, ft, Tt) {
          return se || (se = Bt), N += t.slice(A, Tt).replace(g1, l0), oe && (g = !0, N += `' +
__e(` + oe + `) +
'`), ft && (V = !0, N += `';
` + ft + `;
__p += '`), se && (N += `' +
((__t = (` + se + `)) == null ? '' : __t) +
'`), A = Tt + j.length, j;
        }), N += `';
`;
        var G = ve.call(n, "variable") && n.variable;
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
        var Q = gp(function() {
          return fe(p, q + "return " + N).apply(o, m);
        });
        if (Q.source = N, Du(Q))
          throw Q;
        return Q;
      }
      function NC(t) {
        return pe(t).toLowerCase();
      }
      function LC(t) {
        return pe(t).toUpperCase();
      }
      function MC(t, n, i) {
        if (t = pe(t), t && (i || n === o))
          return If(t);
        if (!t || !(n = xt(n)))
          return t;
        var l = on(t), d = on(n), p = xf(l, d), m = Af(l, d) + 1;
        return nr(l, p, m).join("");
      }
      function OC(t, n, i) {
        if (t = pe(t), t && (i || n === o))
          return t.slice(0, Tf(t) + 1);
        if (!t || !(n = xt(n)))
          return t;
        var l = on(t), d = Af(l, on(n)) + 1;
        return nr(l, 0, d).join("");
      }
      function PC(t, n, i) {
        if (t = pe(t), t && (i || n === o))
          return t.replace(Dl, "");
        if (!t || !(n = xt(n)))
          return t;
        var l = on(t), d = xf(l, on(n));
        return nr(l, d).join("");
      }
      function RC(t, n) {
        var i = le, l = ye;
        if (Ie(n)) {
          var d = "separator" in n ? n.separator : d;
          i = "length" in n ? X(n.length) : i, l = "omission" in n ? xt(n.omission) : l;
        }
        t = pe(t);
        var p = t.length;
        if (oo(t)) {
          var m = on(t);
          p = m.length;
        }
        if (i >= p)
          return t;
        var g = i - io(l);
        if (g < 1)
          return l;
        var V = m ? nr(m, 0, g).join("") : t.slice(0, g);
        if (d === o)
          return V + l;
        if (m && (g += V.length - g), Nu(d)) {
          if (t.slice(g).search(d)) {
            var A, B = V;
            for (d.global || (d = Kl(d.source, pe(Zd.exec(d)) + "g")), d.lastIndex = 0; A = d.exec(B); )
              var N = A.index;
            V = V.slice(0, N === o ? g : N);
          }
        } else if (t.indexOf(xt(d), g) != g) {
          var F = V.lastIndexOf(d);
          F > -1 && (V = V.slice(0, F));
        }
        return V + l;
      }
      function FC(t) {
        return t = pe(t), t && Jg.test(t) ? t.replace(Yd, w0) : t;
      }
      var UC = ho(function(t, n, i) {
        return t + (i ? " " : "") + n.toUpperCase();
      }), Ou = $h("toUpperCase");
      function _p(t, n, i) {
        return t = pe(t), n = i ? o : n, n === o ? c0(t) ? _0(t) : t0(t) : t.match(n) || [];
      }
      var gp = re(function(t, n) {
        try {
          return Et(t, o, n);
        } catch (i) {
          return Du(i) ? i : new K(i);
        }
      }), WC = Dn(function(t, n) {
        return qt(n, function(i) {
          i = gn(i), Bn(t, i, Bu(t[i], t));
        }), t;
      });
      function qC(t) {
        var n = t == null ? 0 : t.length, i = Y();
        return t = n ? ke(t, function(l) {
          if (typeof l[1] != "function")
            throw new Ht(c);
          return [i(l[0]), l[1]];
        }) : [], re(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (Et(p[0], this, l))
              return Et(p[1], this, l);
          }
        });
      }
      function HC(t) {
        return w$(Yt(t, $));
      }
      function Pu(t) {
        return function() {
          return t;
        };
      }
      function zC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var YC = bh(), GC = bh(!0);
      function gt(t) {
        return t;
      }
      function Ru(t) {
        return Xf(typeof t == "function" ? t : Yt(t, $));
      }
      function jC(t) {
        return eh(Yt(t, $));
      }
      function ZC(t, n) {
        return th(t, Yt(n, $));
      }
      var KC = re(function(t, n) {
        return function(i) {
          return yi(i, t, n);
        };
      }), JC = re(function(t, n) {
        return function(i) {
          return yi(t, i, n);
        };
      });
      function Fu(t, n, i) {
        var l = Ge(n), d = Hs(n, l);
        i == null && !(Ie(n) && (d.length || !l.length)) && (i = n, n = t, t = this, d = Hs(n, Ge(n)));
        var p = !(Ie(i) && "chain" in i) || !!i.chain, m = Ln(t);
        return qt(d, function(g) {
          var V = n[g];
          t[g] = V, m && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (p || A) {
              var B = t(this.__wrapped__), N = B.__actions__ = vt(this.__actions__);
              return N.push({ func: V, args: arguments, thisArg: t }), B.__chain__ = A, B;
            }
            return V.apply(t, Kn([this.value()], arguments));
          });
        }), t;
      }
      function XC() {
        return Ze._ === this && (Ze._ = C0), this;
      }
      function Uu() {
      }
      function QC(t) {
        return t = X(t), re(function(n) {
          return nh(n, t);
        });
      }
      var eS = _u(ke), tS = _u(Vf), nS = _u(ql);
      function $p(t) {
        return Su(t) ? Hl(gn(t)) : T$(t);
      }
      function rS(t) {
        return function(n) {
          return t == null ? o : Ir(t, n);
        };
      }
      var oS = Ch(), iS = Ch(!0);
      function Wu() {
        return [];
      }
      function qu() {
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
        var i = kt, l = nt(t, kt);
        n = Y(n), t -= kt;
        for (var d = Gl(l, n); ++i < t; )
          n(i);
        return d;
      }
      function cS(t) {
        return J(t) ? ke(t, gn) : At(t) ? [t] : vt(Fh(pe(t)));
      }
      function dS(t) {
        var n = ++b0;
        return pe(t) + n;
      }
      var fS = Ks(function(t, n) {
        return t + n;
      }, 0), hS = gu("ceil"), pS = Ks(function(t, n) {
        return t / n;
      }, 1), wS = gu("floor");
      function vS(t) {
        return t && t.length ? qs(t, gt, ou) : o;
      }
      function mS(t, n) {
        return t && t.length ? qs(t, Y(n, 2), ou) : o;
      }
      function _S(t) {
        return kf(t, gt);
      }
      function gS(t, n) {
        return kf(t, Y(n, 2));
      }
      function $S(t) {
        return t && t.length ? qs(t, gt, lu) : o;
      }
      function yS(t, n) {
        return t && t.length ? qs(t, Y(n, 2), lu) : o;
      }
      var bS = Ks(function(t, n) {
        return t * n;
      }, 1), VS = gu("round"), CS = Ks(function(t, n) {
        return t - n;
      }, 0);
      function SS(t) {
        return t && t.length ? Yl(t, gt) : 0;
      }
      function kS(t, n) {
        return t && t.length ? Yl(t, Y(n, 2)) : 0;
      }
      return h.after = jb, h.ary = Jh, h.assign = LV, h.assignIn = dp, h.assignInWith = ua, h.assignWith = MV, h.at = OV, h.before = Xh, h.bind = Bu, h.bindAll = WC, h.bindKey = Qh, h.castArray = sV, h.chain = jh, h.chunk = wy, h.compact = vy, h.concat = my, h.cond = qC, h.conforms = HC, h.constant = Pu, h.countBy = Sb, h.create = PV, h.curry = ep, h.curryRight = tp, h.debounce = np, h.defaults = RV, h.defaultsDeep = FV, h.defer = Zb, h.delay = Kb, h.difference = _y, h.differenceBy = gy, h.differenceWith = $y, h.drop = yy, h.dropRight = by, h.dropRightWhile = Vy, h.dropWhile = Cy, h.fill = Sy, h.filter = Eb, h.flatMap = Ab, h.flatMapDeep = Bb, h.flatMapDepth = Tb, h.flatten = Hh, h.flattenDeep = ky, h.flattenDepth = Ey, h.flip = Jb, h.flow = YC, h.flowRight = GC, h.fromPairs = Iy, h.functions = GV, h.functionsIn = jV, h.groupBy = Db, h.initial = Ay, h.intersection = By, h.intersectionBy = Ty, h.intersectionWith = Dy, h.invert = KV, h.invertBy = JV, h.invokeMap = Lb, h.iteratee = Ru, h.keyBy = Mb, h.keys = Ge, h.keysIn = _t, h.map = ra, h.mapKeys = QV, h.mapValues = eC, h.matches = jC, h.matchesProperty = ZC, h.memoize = ia, h.merge = tC, h.mergeWith = fp, h.method = KC, h.methodOf = JC, h.mixin = Fu, h.negate = sa, h.nthArg = QC, h.omit = nC, h.omitBy = rC, h.once = Xb, h.orderBy = Ob, h.over = eS, h.overArgs = Qb, h.overEvery = tS, h.overSome = nS, h.partial = Tu, h.partialRight = rp, h.partition = Pb, h.pick = oC, h.pickBy = hp, h.property = $p, h.propertyOf = rS, h.pull = Oy, h.pullAll = Yh, h.pullAllBy = Py, h.pullAllWith = Ry, h.pullAt = Fy, h.range = oS, h.rangeRight = iS, h.rearg = eV, h.reject = Ub, h.remove = Uy, h.rest = tV, h.reverse = xu, h.sampleSize = qb, h.set = sC, h.setWith = aC, h.shuffle = Hb, h.slice = Wy, h.sortBy = Gb, h.sortedUniq = Zy, h.sortedUniqBy = Ky, h.split = AC, h.spread = nV, h.tail = Jy, h.take = Xy, h.takeRight = Qy, h.takeRightWhile = eb, h.takeWhile = tb, h.tap = vb, h.throttle = rV, h.thru = na, h.toArray = lp, h.toPairs = pp, h.toPairsIn = wp, h.toPath = cS, h.toPlainObject = cp, h.transform = lC, h.unary = oV, h.union = nb, h.unionBy = rb, h.unionWith = ob, h.uniq = ib, h.uniqBy = sb, h.uniqWith = ab, h.unset = uC, h.unzip = Au, h.unzipWith = Gh, h.update = cC, h.updateWith = dC, h.values = vo, h.valuesIn = fC, h.without = lb, h.words = _p, h.wrap = iV, h.xor = ub, h.xorBy = cb, h.xorWith = db, h.zip = fb, h.zipObject = hb, h.zipObjectDeep = pb, h.zipWith = wb, h.entries = pp, h.entriesIn = wp, h.extend = dp, h.extendWith = ua, Fu(h, h), h.add = fS, h.attempt = gp, h.camelCase = vC, h.capitalize = vp, h.ceil = hS, h.clamp = hC, h.clone = aV, h.cloneDeep = uV, h.cloneDeepWith = cV, h.cloneWith = lV, h.conformsTo = dV, h.deburr = mp, h.defaultTo = zC, h.divide = pS, h.endsWith = mC, h.eq = an, h.escape = _C, h.escapeRegExp = gC, h.every = kb, h.find = Ib, h.findIndex = Wh, h.findKey = UV, h.findLast = xb, h.findLastIndex = qh, h.findLastKey = WV, h.floor = wS, h.forEach = Zh, h.forEachRight = Kh, h.forIn = qV, h.forInRight = HV, h.forOwn = zV, h.forOwnRight = YV, h.get = Lu, h.gt = fV, h.gte = hV, h.has = ZV, h.hasIn = Mu, h.head = zh, h.identity = gt, h.includes = Nb, h.indexOf = xy, h.inRange = pC, h.invoke = XV, h.isArguments = Br, h.isArray = J, h.isArrayBuffer = pV, h.isArrayLike = mt, h.isArrayLikeObject = De, h.isBoolean = wV, h.isBuffer = rr, h.isDate = vV, h.isElement = mV, h.isEmpty = _V, h.isEqual = gV, h.isEqualWith = $V, h.isError = Du, h.isFinite = yV, h.isFunction = Ln, h.isInteger = op, h.isLength = aa, h.isMap = ip, h.isMatch = bV, h.isMatchWith = VV, h.isNaN = CV, h.isNative = SV, h.isNil = EV, h.isNull = kV, h.isNumber = sp, h.isObject = Ie, h.isObjectLike = Be, h.isPlainObject = Ei, h.isRegExp = Nu, h.isSafeInteger = IV, h.isSet = ap, h.isString = la, h.isSymbol = At, h.isTypedArray = wo, h.isUndefined = xV, h.isWeakMap = AV, h.isWeakSet = BV, h.join = Ny, h.kebabCase = $C, h.last = jt, h.lastIndexOf = Ly, h.lowerCase = yC, h.lowerFirst = bC, h.lt = TV, h.lte = DV, h.max = vS, h.maxBy = mS, h.mean = _S, h.meanBy = gS, h.min = $S, h.minBy = yS, h.stubArray = Wu, h.stubFalse = qu, h.stubObject = sS, h.stubString = aS, h.stubTrue = lS, h.multiply = bS, h.nth = My, h.noConflict = XC, h.noop = Uu, h.now = oa, h.pad = VC, h.padEnd = CC, h.padStart = SC, h.parseInt = kC, h.random = wC, h.reduce = Rb, h.reduceRight = Fb, h.repeat = EC, h.replace = IC, h.result = iC, h.round = VS, h.runInContext = b, h.sample = Wb, h.size = zb, h.snakeCase = xC, h.some = Yb, h.sortedIndex = qy, h.sortedIndexBy = Hy, h.sortedIndexOf = zy, h.sortedLastIndex = Yy, h.sortedLastIndexBy = Gy, h.sortedLastIndexOf = jy, h.startCase = BC, h.startsWith = TC, h.subtract = CS, h.sum = SS, h.sumBy = kS, h.template = DC, h.times = uS, h.toFinite = Mn, h.toInteger = X, h.toLength = up, h.toLower = NC, h.toNumber = Zt, h.toSafeInteger = NV, h.toString = pe, h.toUpper = LC, h.trim = MC, h.trimEnd = OC, h.trimStart = PC, h.truncate = RC, h.unescape = FC, h.uniqueId = dS, h.upperCase = UC, h.upperFirst = Ou, h.each = Zh, h.eachRight = Kh, h.first = zh, Fu(h, function() {
        var t = {};
        return mn(h, function(n, i) {
          ve.call(h.prototype, i) || (t[i] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = s, qt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), qt(["drop", "take"], function(t, n) {
        ie.prototype[t] = function(i) {
          i = i === o ? 1 : We(X(i), 0);
          var l = this.__filtered__ && !n ? new ie(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = nt(i, l.__takeCount__) : l.__views__.push({
            size: nt(i, kt),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ie.prototype[t + "Right"] = function(i) {
          return this.reverse()[t](i).reverse();
        };
      }), qt(["filter", "map", "takeWhile"], function(t, n) {
        var i = n + 1, l = i == Ae || i == Fe;
        ie.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: Y(d, 3),
            type: i
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), qt(["head", "last"], function(t, n) {
        var i = "take" + (n ? "Right" : "");
        ie.prototype[t] = function() {
          return this[i](1).value()[0];
        };
      }), qt(["initial", "tail"], function(t, n) {
        var i = "drop" + (n ? "" : "Right");
        ie.prototype[t] = function() {
          return this.__filtered__ ? new ie(this) : this[i](1);
        };
      }), ie.prototype.compact = function() {
        return this.filter(gt);
      }, ie.prototype.find = function(t) {
        return this.filter(t).head();
      }, ie.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ie.prototype.invokeMap = re(function(t, n) {
        return typeof t == "function" ? new ie(this) : this.map(function(i) {
          return yi(i, t, n);
        });
      }), ie.prototype.reject = function(t) {
        return this.filter(sa(Y(t)));
      }, ie.prototype.slice = function(t, n) {
        t = X(t);
        var i = this;
        return i.__filtered__ && (t > 0 || n < 0) ? new ie(i) : (t < 0 ? i = i.takeRight(-t) : t && (i = i.drop(t)), n !== o && (n = X(n), i = n < 0 ? i.dropRight(-n) : i.take(n - t)), i);
      }, ie.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ie.prototype.toArray = function() {
        return this.take(kt);
      }, mn(ie.prototype, function(t, n) {
        var i = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, V = m instanceof ie, A = g[0], B = V || J(m), N = function(oe) {
            var se = d.apply(h, Kn([oe], g));
            return l && F ? se[0] : se;
          };
          B && i && typeof A == "function" && A.length != 1 && (V = B = !1);
          var F = this.__chain__, q = !!this.__actions__.length, G = p && !F, Q = V && !q;
          if (!p && B) {
            m = Q ? m : new ie(this);
            var j = t.apply(m, g);
            return j.__actions__.push({ func: na, args: [N], thisArg: o }), new zt(j, F);
          }
          return G && Q ? t.apply(this, g) : (j = this.thru(N), G ? l ? j.value()[0] : j.value() : j);
        });
      }), qt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Is[t], i = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
          ve.call(uo, l) || (uo[l] = []), uo[l].push({ name: n, func: i });
        }
      }), uo[Zs(o, S).name] = [{
        name: "wrapper",
        func: o
      }], ie.prototype.clone = F0, ie.prototype.reverse = U0, ie.prototype.value = W0, h.prototype.at = mb, h.prototype.chain = _b, h.prototype.commit = gb, h.prototype.next = $b, h.prototype.plant = bb, h.prototype.reverse = Vb, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Cb, h.prototype.first = h.prototype.head, pi && (h.prototype[pi] = yb), h;
    }, so = g0();
    Vr ? ((Vr.exports = so)._ = so, Rl._ = so) : Ze._ = so;
  }).call(Ii);
})(_e, _e.exports);
const Yk = "/alarms?_s=", ol = {
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
      ol
    )).status === 204;
  } catch {
    return !1;
  }
}, e_ = async (e, r) => {
  try {
    return (await lt.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      ol
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
      ol
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
}, t_ = async (e) => {
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
    return e.status === 200 ? e.data.node.map((s) => _e.exports.pick(s, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Qk = async (e, r, o) => {
  try {
    return (await Hn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      ol
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
        const o = _e.exports.groupBy(r, "status"), a = [
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
        const s = await t_(e);
        if (s) {
          const a = (r = s.relatedAlarms) == null ? void 0 : r.map((f) => f.id), c = await Kk(a);
          s.status = (o = s.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : o.value, s.alarms = _e.exports.sortBy(c, ["id"]), this.situationDetail = s;
        }
      }
    },
    async getEvents(e, r) {
      const o = {};
      await Promise.all(
        r.map(async (s) => {
          const a = await Jk(s);
          a && (o[s] = _e.exports.reverse(a));
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
var zo = /* @__PURE__ */ sE(aE, [["render", dE]]);
var fE = Object.defineProperty, zp = Object.getOwnPropertySymbols, hE = Object.prototype.hasOwnProperty, pE = Object.prototype.propertyIsEnumerable, Yp = (e, r, o) => r in e ? fE(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Gp = (e, r) => {
  for (var o in r || (r = {}))
    hE.call(r, o) && Yp(e, o, r[o]);
  if (zp)
    for (var o of zp(r))
      pE.call(r, o) && Yp(e, o, r[o]);
  return e;
};
const wE = window.Vue.defineComponent, vE = window.Vue.toRaw, ic = window.Vue.h;
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
    return this.$slots.default ? ic("span", { class: "feather-icon-container" }, [
      ic(this.$slots.default()[0], Gp({
        class: r
      }, o))
    ]) : ic(s, Gp({
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
var n_ = /* @__PURE__ */ VE(CE, [["render", IE]]);
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
function Zo() {
  return BE;
}
function jp(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Zo(), $ = Sn((o = (s = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = ze(e), T = y.getDay(), D = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - D), y.setHours(0, 0, 0, 0), y;
}
function td(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function Zp(e) {
  Ce(1, arguments);
  var r = ze(e);
  return r.setHours(0, 0, 0, 0), r;
}
function TE(e, r) {
  Ce(2, arguments);
  var o = ze(e), s = ze(r), a = o.getTime() - s.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function r_(e, r) {
  Ce(2, arguments);
  var o = Zp(e), s = Zp(r);
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
function qa(e) {
  Ce(1, arguments);
  var r = 1, o = ze(e), s = o.getUTCDay(), a = (s < r ? 7 : 0) + s - r;
  return o.setUTCDate(o.getUTCDate() - a), o.setUTCHours(0, 0, 0, 0), o;
}
function o_(e) {
  Ce(1, arguments);
  var r = ze(e), o = r.getUTCFullYear(), s = new Date(0);
  s.setUTCFullYear(o + 1, 0, 4), s.setUTCHours(0, 0, 0, 0);
  var a = qa(s), u = new Date(0);
  u.setUTCFullYear(o, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = qa(u);
  return r.getTime() >= a.getTime() ? o + 1 : r.getTime() >= c.getTime() ? o : o - 1;
}
function PE(e) {
  Ce(1, arguments);
  var r = o_(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var s = qa(o);
  return s;
}
var RE = 6048e5;
function FE(e) {
  Ce(1, arguments);
  var r = ze(e), o = qa(r).getTime() - PE(r).getTime();
  return Math.round(o / RE) + 1;
}
function Ha(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Zo(), $ = Sn((o = (s = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = ze(e), T = y.getUTCDay(), D = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - D), y.setUTCHours(0, 0, 0, 0), y;
}
function i_(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = ze(e), $ = _.getUTCFullYear(), y = Zo(), T = Sn((o = (s = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var D = new Date(0);
  D.setUTCFullYear($ + 1, 0, T), D.setUTCHours(0, 0, 0, 0);
  var M = Ha(D, r), L = new Date(0);
  L.setUTCFullYear($, 0, T), L.setUTCHours(0, 0, 0, 0);
  var S = Ha(L, r);
  return _.getTime() >= M.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function UE(e, r) {
  var o, s, a, u, c, f, w, v;
  Ce(1, arguments);
  var _ = Zo(), $ = Sn((o = (s = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && s !== void 0 ? s : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), y = i_(e, r), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var D = Ha(T, r);
  return D;
}
var WE = 6048e5;
function qE(e, r) {
  Ce(1, arguments);
  var o = ze(e), s = Ha(o, r).getTime() - UE(o, r).getTime();
  return Math.round(s / WE) + 1;
}
function me(e, r) {
  for (var o = e < 0 ? "-" : "", s = Math.abs(e).toString(); s.length < r; )
    s = "0" + s;
  return o + s;
}
var HE = {
  y: function(e, r) {
    var o = e.getUTCFullYear(), s = o > 0 ? o : 1 - o;
    return me(r === "yy" ? s % 100 : s, r.length);
  },
  M: function(e, r) {
    var o = e.getUTCMonth();
    return r === "M" ? String(o + 1) : me(o + 1, 2);
  },
  d: function(e, r) {
    return me(e.getUTCDate(), r.length);
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
    return me(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function(e, r) {
    return me(e.getUTCHours(), r.length);
  },
  m: function(e, r) {
    return me(e.getUTCMinutes(), r.length);
  },
  s: function(e, r) {
    return me(e.getUTCSeconds(), r.length);
  },
  S: function(e, r) {
    var o = r.length, s = e.getUTCMilliseconds(), a = Math.floor(s * Math.pow(10, o - 3));
    return me(a, r.length);
  }
};
const or = HE;
var go = {
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
    return or.y(e, r);
  },
  Y: function(e, r, o, s) {
    var a = i_(e, s), u = a > 0 ? a : 1 - a;
    if (r === "YY") {
      var c = u % 100;
      return me(c, 2);
    }
    return r === "Yo" ? o.ordinalNumber(u, {
      unit: "year"
    }) : me(u, r.length);
  },
  R: function(e, r) {
    var o = o_(e);
    return me(o, r.length);
  },
  u: function(e, r) {
    var o = e.getUTCFullYear();
    return me(o, r.length);
  },
  Q: function(e, r, o) {
    var s = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(s);
      case "QQ":
        return me(s, 2);
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
        return me(s, 2);
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
        return or.M(e, r);
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
        return me(s + 1, 2);
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
    }) : me(a, r.length);
  },
  I: function(e, r, o) {
    var s = FE(e);
    return r === "Io" ? o.ordinalNumber(s, {
      unit: "week"
    }) : me(s, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : or.d(e, r);
  },
  D: function(e, r, o) {
    var s = OE(e);
    return r === "Do" ? o.ordinalNumber(s, {
      unit: "dayOfYear"
    }) : me(s, r.length);
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
        return me(u, 2);
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
        return me(u, r.length);
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
        return me(a, r.length);
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
    switch (s === 12 ? a = go.noon : s === 0 ? a = go.midnight : a = s / 12 >= 1 ? "pm" : "am", r) {
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
    switch (s >= 17 ? a = go.evening : s >= 12 ? a = go.afternoon : s >= 4 ? a = go.morning : a = go.night, r) {
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
    return or.h(e, r);
  },
  H: function(e, r, o) {
    return r === "Ho" ? o.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : or.H(e, r);
  },
  K: function(e, r, o) {
    var s = e.getUTCHours() % 12;
    return r === "Ko" ? o.ordinalNumber(s, {
      unit: "hour"
    }) : me(s, r.length);
  },
  k: function(e, r, o) {
    var s = e.getUTCHours();
    return s === 0 && (s = 24), r === "ko" ? o.ordinalNumber(s, {
      unit: "hour"
    }) : me(s, r.length);
  },
  m: function(e, r, o) {
    return r === "mo" ? o.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : or.m(e, r);
  },
  s: function(e, r, o) {
    return r === "so" ? o.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : or.s(e, r);
  },
  S: function(e, r) {
    return or.S(e, r);
  },
  X: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (r) {
      case "X":
        return Jp(u);
      case "XXXX":
      case "XX":
        return Yr(u);
      case "XXXXX":
      case "XXX":
      default:
        return Yr(u, ":");
    }
  },
  x: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "x":
        return Jp(u);
      case "xxxx":
      case "xx":
        return Yr(u);
      case "xxxxx":
      case "xxx":
      default:
        return Yr(u, ":");
    }
  },
  O: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Kp(u, ":");
      case "OOOO":
      default:
        return "GMT" + Yr(u, ":");
    }
  },
  z: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Kp(u, ":");
      case "zzzz":
      default:
        return "GMT" + Yr(u, ":");
    }
  },
  t: function(e, r, o, s) {
    var a = s._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return me(u, r.length);
  },
  T: function(e, r, o, s) {
    var a = s._originalDate || e, u = a.getTime();
    return me(u, r.length);
  }
};
function Kp(e, r) {
  var o = e > 0 ? "-" : "+", s = Math.abs(e), a = Math.floor(s / 60), u = s % 60;
  if (u === 0)
    return o + String(a);
  var c = r || "";
  return o + String(a) + c + me(u, 2);
}
function Jp(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + me(Math.abs(e) / 60, 2);
  }
  return Yr(e, r);
}
function Yr(e, r) {
  var o = r || "", s = e > 0 ? "-" : "+", a = Math.abs(e), u = me(Math.floor(a / 60), 2), c = me(a % 60, 2);
  return s + u + o + c;
}
const YE = zE;
var Xp = function(e, r) {
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
}, s_ = function(e, r) {
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
    return Xp(e, r);
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
  return u.replace("{{date}}", Xp(s, r)).replace("{{time}}", s_(a, r));
}, jE = {
  p: s_,
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
function Qp(e, r, o) {
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
function sc(e) {
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
  date: sc({
    formats: r2,
    defaultWidth: "full"
  }),
  time: sc({
    formats: o2,
    defaultWidth: "full"
  }),
  dateTime: sc({
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
function xi(e) {
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
  era: xi({
    values: d2,
    defaultWidth: "wide"
  }),
  quarter: xi({
    values: f2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: xi({
    values: h2,
    defaultWidth: "wide"
  }),
  day: xi({
    values: p2,
    defaultWidth: "wide"
  }),
  dayPeriod: xi({
    values: w2,
    defaultWidth: "wide",
    formattingValues: v2,
    defaultFormattingWidth: "wide"
  })
};
const g2 = _2;
function Ai(e) {
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
  era: Ai({
    matchPatterns: S2,
    defaultMatchWidth: "wide",
    parsePatterns: k2,
    defaultParseWidth: "any"
  }),
  quarter: Ai({
    matchPatterns: E2,
    defaultMatchWidth: "wide",
    parsePatterns: I2,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Ai({
    matchPatterns: x2,
    defaultMatchWidth: "wide",
    parsePatterns: A2,
    defaultParseWidth: "any"
  }),
  day: Ai({
    matchPatterns: B2,
    defaultMatchWidth: "wide",
    parsePatterns: T2,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ai({
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
const a_ = O2;
var P2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, R2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, F2 = /^'([^]*?)'?$/, U2 = /''/g, W2 = /[a-zA-Z]/;
function q2(e, r, o) {
  var s, a, u, c, f, w, v, _, $, y, T, D, M, L, S, k, x, R;
  Ce(2, arguments);
  var I = String(r), P = Zo(), O = (s = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : P.locale) !== null && s !== void 0 ? s : a_, H = Sn((u = (c = (f = (w = o == null ? void 0 : o.firstWeekContainsDate) !== null && w !== void 0 ? w : o == null || (v = o.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : P.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = P.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(H >= 1 && H <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var $e = Sn((T = (D = (M = (L = o == null ? void 0 : o.weekStartsOn) !== null && L !== void 0 ? L : o == null || (S = o.locale) === null || S === void 0 || (k = S.options) === null || k === void 0 ? void 0 : k.weekStartsOn) !== null && M !== void 0 ? M : P.weekStartsOn) !== null && D !== void 0 ? D : (x = P.locale) === null || x === void 0 || (R = x.options) === null || R === void 0 ? void 0 : R.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!($e >= 0 && $e <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!O.localize)
    throw new RangeError("locale must contain localize property");
  if (!O.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var le = ze(e);
  if (!NE(le))
    throw new RangeError("Invalid time value");
  var ye = td(le), ge = LE(le, ye), Ee = {
    firstWeekContainsDate: H,
    weekStartsOn: $e,
    locale: O,
    _originalDate: le
  }, Ae = I.match(R2).map(function(we) {
    var Fe = we[0];
    if (Fe === "p" || Fe === "P") {
      var Oe = ZE[Fe];
      return Oe(we, O.formatLong);
    }
    return we;
  }).join("").match(P2).map(function(we) {
    if (we === "''")
      return "'";
    var Fe = we[0];
    if (Fe === "'")
      return H2(we);
    var Oe = YE[Fe];
    if (Oe)
      return !(o != null && o.useAdditionalWeekYearTokens) && QE(we) && Qp(we, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && XE(we) && Qp(we, r, String(e)), Oe(ge, we, O.localize, Ee);
    if (Fe.match(W2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Fe + "`");
    return we;
  }).join("");
  return Ae;
}
function H2(e) {
  var r = e.match(F2);
  return r ? r[1].replace(U2, "'") : e;
}
function l_(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function z2(e) {
  return l_({}, e);
}
var ew = 1e3 * 60, za = 60 * 24, tw = za * 30, nw = za * 365;
function il(e, r, o) {
  var s, a, u;
  Ce(2, arguments);
  var c = Zo(), f = (s = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : c.locale) !== null && s !== void 0 ? s : a_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = TE(e, r);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = l_(z2(o), {
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
  var D = $.getTime() - _.getTime(), M = D / ew, L = td($) - td(_), S = (D - L) / ew, k = o == null ? void 0 : o.unit, x;
  if (k ? x = String(k) : M < 1 ? x = "second" : M < 60 ? x = "minute" : M < za ? x = "hour" : S < tw ? x = "day" : S < nw ? x = "month" : x = "year", x === "second") {
    var R = T(D / 1e3);
    return f.formatDistance("xSeconds", R, v);
  } else if (x === "minute") {
    var I = T(M);
    return f.formatDistance("xMinutes", I, v);
  } else if (x === "hour") {
    var P = T(M / 60);
    return f.formatDistance("xHours", P, v);
  } else if (x === "day") {
    var O = T(S / za);
    return f.formatDistance("xDays", O, v);
  } else if (x === "month") {
    var H = T(S / tw);
    return H === 12 && k !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", H, v);
  } else if (x === "year") {
    var $e = T(S / nw);
    return f.formatDistance("xYears", $e, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function Y2(e, r, o) {
  Ce(2, arguments);
  var s = jp(e, o), a = jp(r, o);
  return s.getTime() === a.getTime();
}
function G2(e, r) {
  return Ce(1, arguments), Y2(e, Date.now(), r);
}
function j2(e) {
  return Ce(1, arguments), r_(e, Date.now());
}
function Z2(e, r) {
  Ce(2, arguments);
  var o = Sn(r);
  return xE(e, -o);
}
function K2(e) {
  return Ce(1, arguments), r_(e, Z2(Date.now(), 1));
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
}, u_ = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), c_ = (e, r) => {
  const o = u_(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), s = o.length > r ? "..." : "";
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
}, sl = "/alec", d_ = "/alec/engine/configuration", f_ = "/alec/claude/configuration", h_ = "/alec/claude/suggestions", X2 = "/alec/claude/usage", p_ = "/alec/situation", Q2 = async () => {
  try {
    const e = await lt.get(`${d_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, eI = async (e) => {
  try {
    return (await lt.post(d_, e)).status === 200;
  } catch {
    return !1;
  }
}, tI = async () => {
  try {
    const e = await lt.get(f_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, nI = async (e) => {
  try {
    const r = await lt.post(f_, e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, w_ = async (e) => {
  try {
    const r = await lt.get(`${h_}/${e}`);
    return r.status === 200 ? r.data : r.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, rI = async (e) => {
  try {
    const r = await lt.post(
      `${h_}/${e}/reanalyze`
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
}, v_ = async (e, r) => {
  try {
    const o = await lt.post(`${sl}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return r == et.REJECTED.toLowerCase() && o.status === 200 && await e_(e, "clear"), o.status === 200;
  } catch {
    return !1;
  }
}, rw = async (e, r) => {
  try {
    return (await lt.delete(`${sl}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, m_ = async (e, r) => {
  try {
    return (await lt.put(`${sl}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, iI = async (e) => {
  try {
    return (await lt.post(p_, e)).status === 200;
  } catch {
    return !1;
  }
}, sI = async () => {
  try {
    return (await lt.post(`${p_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, aI = async () => {
  try {
    return (await lt.post(`${sl}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, lI = window.Vue.defineComponent, Nt = window.Vue.unref, ac = window.Vue.normalizeClass, Vn = window.Vue.createElementVNode, Tr = window.Vue.toDisplayString, ir = window.Vue.openBlock, sr = window.Vue.createElementBlock, Bi = window.Vue.createCommentVNode, ow = window.Vue.createVNode, nd = window.Vue.createTextVNode, uI = window.Vue.renderList, cI = window.Vue.Fragment, dI = window.Vue.pushScopeId, fI = window.Vue.popScopeId, Cd = (e) => (dI("data-v-2ed3bdb3"), e = e(), fI(), e), hI = { class: "content" }, pI = { class: "title-row" }, wI = { class: "title" }, vI = ["title"], mI = {
  key: 1,
  class: "accepted"
}, _I = {
  key: 2,
  class: "rejected"
}, gI = /* @__PURE__ */ Cd(() => /* @__PURE__ */ Vn("span", { class: "info-title" }, " Duration: ", -1)), $I = { key: 0 }, yI = /* @__PURE__ */ Cd(() => /* @__PURE__ */ Vn("span", { class: "info-title" }, " First Event: ", -1)), bI = { class: "description" }, VI = /* @__PURE__ */ Cd(() => /* @__PURE__ */ Vn("hr", null, null, -1)), CI = {
  key: 1,
  class: "count-info"
}, SI = /* @__PURE__ */ nd(" Alarms: "), kI = { class: "info-title" }, EI = window.Vue.onMounted, II = window.Vue.ref, xI = /* @__PURE__ */ lI({
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
      const w = await w_(o.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return ir(), sr("div", {
        onClick: c,
        class: ac(["card", {
          rejected: o.situationInfo.status == Nt(a)
        }])
      }, [
        Vn("div", {
          class: ac(["severity-line", [`${($ = (_ = o.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        Vn("div", hI, [
          Vn("div", pI, [
            Vn("div", wI, "Situation " + Tr((y = o.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (ir(), sr("span", {
              key: 0,
              class: ac(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Tr(f.value === "pending" ? "\u2026" : ""), 11, vI)) : Bi("", !0),
            o.situationInfo.status == Nt(s) ? (ir(), sr("div", mI, [
              ow(Nt(Z), {
                icon: Nt(zo),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Bi("", !0),
            o.situationInfo.status == Nt(a) ? (ir(), sr("div", _I, [
              ow(Nt(Z), {
                icon: Nt(n_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Bi("", !0)
          ]),
          Vn("div", null, [
            gI,
            nd(" " + Tr(Nt(il)(
              Nt(u),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? Bi("", !0) : (ir(), sr("div", $I, [
            yI,
            nd(Tr(Nt(kn)(o.situationInfo.firstEventTime)), 1)
          ])),
          Vn("div", bI, Tr(Nt(c_)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          VI,
          o.situationInfo.relatedAlarms ? (ir(), sr("div", CI, [
            SI,
            Vn("span", kI, Tr(o.situationInfo.relatedAlarms.length), 1)
          ])) : Bi("", !0),
          (ir(!0), sr(cI, null, uI(Nt(_e.exports.keys)(
            Nt(_e.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (T) => (ir(), sr("div", {
            class: "info-title",
            key: T
          }, " - " + Tr(T), 1))), 128))
        ])
      ], 2);
    };
  }
});
const __ = /* @__PURE__ */ de(xI, [["__scopeId", "data-v-2ed3bdb3"]]), AI = window.Vue.openBlock, BI = window.Vue.createElementBlock, TI = window.Vue.createElementVNode;
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
const FI = window.Vue.openBlock, UI = window.Vue.createElementBlock, g_ = window.Vue.createElementVNode;
var WI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const qI = {}, HI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, zI = /* @__PURE__ */ g_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), YI = /* @__PURE__ */ g_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), GI = [
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
var $_ = /* @__PURE__ */ ux(cx, [["render", px]]);
const wx = window.Vue.defineComponent, ar = window.Vue.unref, ca = window.Vue.normalizeClass, da = window.Vue.createVNode, vx = window.Vue.openBlock, mx = window.Vue.createElementBlock;
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
      da(ar(Z), {
        icon: ar(RI),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => s(0))
      }, null, 8, ["icon", "class"]),
      da(ar(Z), {
        icon: ar(ix),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => s(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      da(ar(Z), {
        icon: ar($_),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => s(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      da(ar(Z), {
        icon: ar(ZI),
        "aria-hidden": "true",
        class: ca(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => s(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const $x = /* @__PURE__ */ de(gx, [["__scopeId", "data-v-40758818"]]);
const ce = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, yx = window.Vue.computed, al = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((s) => {
    o[`${s}Label`] = yx(() => e.value[s] ? e.value[s] : r[s]);
  }), o;
};
const Kr = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, Jr = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var bx = Object.defineProperty, Vx = Object.defineProperties, Cx = Object.getOwnPropertyDescriptors, iw = Object.getOwnPropertySymbols, Sx = Object.prototype.hasOwnProperty, kx = Object.prototype.propertyIsEnumerable, sw = (e, r, o) => r in e ? bx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, aw = (e, r) => {
  for (var o in r || (r = {}))
    Sx.call(r, o) && sw(e, o, r[o]);
  if (iw)
    for (var o of iw(r))
      kx.call(r, o) && sw(e, o, r[o]);
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
        this.styles = Ex(aw({}, a), {
          height: `${s}px`,
          width: `${s}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, Jr(this.failsafe), this.failsafe = Kr(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return xx("div", {
        style: aw({}, this.styles),
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
var vr = /* @__PURE__ */ Ax(Tx, [["__scopeId", "data-v-18e2a5db"]]);
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
var Ko = /* @__PURE__ */ Mx(Ox, [["render", Ux]]);
const lw = window.Vue.computed, Wx = (e, r, o) => {
  const s = lw(() => r.value.filter((u) => !u.disabled)), a = lw(() => e.value ? s.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? o(s.value[s.value.length - 1]) : o(s.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === s.value.length - 1 ? o(s.value[0]) : o(s.value[a.value + 1]));
    }
  };
};
const qx = window.Vue.openBlock, Hx = window.Vue.createElementBlock, Sd = window.Vue.createElementVNode;
var zx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Yx = {}, Gx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jx = /* @__PURE__ */ Sd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Zx = /* @__PURE__ */ Sd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Kx = /* @__PURE__ */ Sd("rect", {
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
var Qx = /* @__PURE__ */ zx(Yx, [["render", Xx]]), eA = Object.defineProperty, tA = Object.defineProperties, nA = Object.getOwnPropertyDescriptors, uw = Object.getOwnPropertySymbols, rA = Object.prototype.hasOwnProperty, oA = Object.prototype.propertyIsEnumerable, cw = (e, r, o) => r in e ? eA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, y_ = (e, r) => {
  for (var o in r || (r = {}))
    rA.call(r, o) && cw(e, o, r[o]);
  if (uw)
    for (var o of uw(r))
      oA.call(r, o) && cw(e, o, r[o]);
  return e;
}, b_ = (e, r) => tA(e, nA(r));
const Jo = window.Vue.defineComponent, is = window.Vue.resolveComponent, Cn = window.Vue.openBlock, Lo = window.Vue.createElementBlock, iA = window.Vue.createVNode, Ya = window.Vue.createBlock, sA = window.Vue.withModifiers, Yo = window.Vue.inject, ss = window.Vue.computed, aA = window.Vue.normalizeClass, $o = window.Vue.createElementVNode, Ga = window.Vue.toDisplayString, Ma = window.Vue.renderSlot, Xi = window.Vue.createCommentVNode, lA = window.Vue.withDirectives, uA = window.Vue.vShow, rd = window.Vue.ref, dw = window.Vue.toRef, fw = window.Vue.nextTick, od = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const kd = window.Vue.provide, hw = window.Vue.isRef, cA = window.Vue.onBeforeUnmount;
var cs = (e, r) => {
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
}, fA = Jo({
  props: dA,
  components: {
    FeatherIcon: Z
  }
}), hA = ["title"];
function pA(e, r, o, s, a, u) {
  const c = is("FeatherIcon");
  return Cn(), Lo("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    iA(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, hA);
}
var wA = /* @__PURE__ */ cs(fA, [["render", pA], ["__scopeId", "data-v-4265058e"]]);
const vA = Jo({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return Ko;
    }
  },
  components: {
    ActionIcon: wA
  }
});
function mA(e, r, o, s, a, u) {
  const c = is("ActionIcon");
  return Cn(), Ya(c, {
    onClick: r[0] || (r[0] = sA((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var _A = /* @__PURE__ */ cs(vA, [["render", mA]]);
const gA = Jo({
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
  const c = is("FeatherIcon");
  return Cn(), Ya(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var yA = /* @__PURE__ */ cs(gA, [["render", $A], ["__scopeId", "data-v-0b8faef3"]]);
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
}, CA = Jo({
  emits: VA,
  props: bA,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = Yo("wrapperOptions", {}), r = Yo("validationErrorMessage", !1), o = ss(() => e.error ? e.error : r && r.value ? r.value : !1);
    return b_(y_({}, e), { error: o });
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
  const c = is("ClearIcon"), f = is("ErrorIcon");
  return Cn(), Lo("div", {
    class: aA(["feather-input-wrapper-container", e.containerCls])
  }, [
    $o("fieldset", SA, [
      $o("legend", null, Ga(e.label), 1)
    ]),
    $o("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Ga(e.label), 9, kA),
    $o("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      $o("div", EA, [
        Ma(e.$slots, "pre", {}, void 0, !0)
      ]),
      Ma(e.$slots, "default", {}, void 0, !0),
      $o("div", IA, [
        e.showClear && e.computedClearText ? (Cn(), Ya(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : Xi("", !0),
        e.error ? (Cn(), Ya(f, { key: 1 })) : Xi("", !0),
        Ma(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var ll = /* @__PURE__ */ cs(CA, [["render", xA], ["__scopeId", "data-v-4db296db"]]);
const AA = Jo({
  setup() {
    const e = Yo("subTextOptions", {}), r = Yo("validationErrorMessage", !1), o = ss(() => e.error ? e.error : r && r.value ? r.value : "");
    return b_(y_({}, e), { error: o });
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
  return lA((Cn(), Lo("div", BA, [
    !e.hint && !e.error.length ? (Cn(), Lo("div", TA, "\xA0")) : Xi("", !0),
    e.hint && !e.error.length ? (Cn(), Lo("div", DA, Ga(e.hint), 1)) : Xi("", !0),
    e.error.length > 0 ? (Cn(), Lo("div", NA, Ga(e.error), 1)) : Xi("", !0),
    Ma(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [uA, !e.inline || e.hint || e.error.length]
  ]);
}
var Xo = /* @__PURE__ */ cs(AA, [["render", LA], ["__scopeId", "data-v-8e0ac99e"]]);
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
Jo({
  props: MA,
  setup(e) {
    const r = Yo("featherFormErrors", rd([])), o = dw(e, "errorList"), s = ss(() => {
      var _;
      return (_ = o.value) != null && _.length ? o.value : r.value;
    }), a = dw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = rd(), w = (_) => `${c(_.label)} - ${_.message}`, v = ss(() => (s.value.length && fw(() => f.value.focus()), e.headingText(s.value)));
    return od(a, (_) => {
      _.length && fw(() => f.value.focus());
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
const Qo = (e, r, o, s, a) => {
  const u = Yo("featherForm", !1);
  if (s && u && e.value) {
    const c = rd("");
    kd("validationErrorMessage", c);
    const f = () => {
      if (a && hw(a) && a.value)
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
    return a && hw(a) && od(a, () => {
      u.runValidation();
    }), od(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), cA(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, ei = (e) => ({
  inherittedAttrs: ss(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), ti = {
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
}, ni = (e) => {
  kd("subTextOptions", e);
}, ul = {
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
}, cl = (e) => {
  kd("wrapperOptions", e);
}, fa = window.Vue.ref, OA = window.Vue.watch, PA = window.Vue.watchEffect, pw = window.Vue.computed, lc = window.Vue.provide, V_ = (e, r, o, s, a) => {
  const u = fa([]), c = fa(), f = fa(), w = fa();
  PA(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((k) => k.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let k = u.value.filter((x) => !x.disabled);
      k = k.length ? k : u.value, f.value = k[0], f.value.first = !0;
    }
  }), OA(c, (S, k) => {
    k && (k.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (r("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = pw(() => c.value || f.value), $ = Wx(_, u, v), y = pw(() => ce("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = Qo(w, e, o, s, a);
  return lc("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), lc("select", v), lc("blur", (S) => {
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
var RA = Object.defineProperty, FA = Object.defineProperties, UA = Object.getOwnPropertyDescriptors, ww = Object.getOwnPropertySymbols, WA = Object.prototype.hasOwnProperty, qA = Object.prototype.propertyIsEnumerable, vw = (e, r, o) => r in e ? RA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Ro = (e, r) => {
  for (var o in r || (r = {}))
    WA.call(r, o) && vw(e, o, r[o]);
  if (ww)
    for (var o of ww(r))
      qA.call(r, o) && vw(e, o, r[o]);
  return e;
}, C_ = (e, r) => FA(e, UA(r));
const mr = window.Vue.defineComponent, Qi = window.Vue.inject, ja = window.Vue.computed, es = window.Vue.ref, nn = window.Vue.resolveComponent, Rt = window.Vue.openBlock, ds = window.Vue.createElementBlock, S_ = window.Vue.normalizeClass, En = window.Vue.renderSlot, pr = window.Vue.createBlock, as = window.Vue.createCommentVNode, Za = window.Vue.createElementVNode, HA = window.Vue.withModifiers, dl = window.Vue.createVNode, k_ = window.Vue.toRef, id = window.Vue.mergeProps, qn = window.Vue.withCtx, zA = window.Vue.h, YA = window.Vue.provide;
var _r = (e, r) => {
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
}, jA = mr({
  props: GA,
  setup(e) {
    const r = Qi("isCondensed", null), o = ja(() => r || e.condensed), s = es(!1);
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
    FeatherRipple: vr
  }
}), ZA = ["aria-disabled"];
function KA(e, r, o, s, a, u) {
  const c = nn("FeatherRipple");
  return Rt(), ds("div", {
    class: S_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    En(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Rt(), pr(c, { key: 0 })) : as("", !0)
  ], 42, ZA);
}
var fl = /* @__PURE__ */ _r(jA, [["render", KA], ["__scopeId", "data-v-44d413dc"]]);
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
}, XA = mr({
  emits: ["delete"],
  props: JA,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: Ko
    };
  },
  components: {
    FeatherIcon: Z
  }
}), QA = { class: "chip-delete" }, eB = ["aria-label", "aria-describedby"];
function tB(e, r, o, s, a, u) {
  const c = nn("FeatherIcon");
  return Rt(), ds("span", QA, [
    Za("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = HA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      dl(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, eB)
  ]);
}
var nB = /* @__PURE__ */ _r(XA, [["render", tB], ["__scopeId", "data-v-4bae6cb4"]]);
const rB = mr({
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
  return Rt(), ds("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    En(e.$slots, "default", {}, void 0, !0)
  ], 8, oB);
}
var hl = /* @__PURE__ */ _r(rB, [["render", iB], ["__scopeId", "data-v-1a0445b2"]]);
const sB = {}, aB = {
  class: "chip-icon",
  role: "presentation"
};
function lB(e, r) {
  return Rt(), ds("span", aB, [
    En(e.$slots, "default", {}, void 0, !0)
  ]);
}
var pl = /* @__PURE__ */ _r(sB, [["render", lB], ["__scopeId", "data-v-2230176f"]]);
const mw = {
  delete: "Remove"
}, uB = mr({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => mw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = al(k_(e, "labels"), mw), s = ja(() => ce("chip-text")), a = () => {
      e.disabled || r.emit("click");
    }, u = Ro({}, r.attrs);
    return e.disabled && delete u.onClick, C_(Ro({}, o), {
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
    Chip: fl,
    DeleteIcon: nB,
    Label: hl,
    PreIcon: pl
  }
}), cB = ["aria-disabled"];
function dB(e, r, o, s, a, u) {
  const c = nn("PreIcon"), f = nn("Label"), w = nn("DeleteIcon"), v = nn("Chip");
  return Rt(), pr(v, id(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: qn(() => [
      Za("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        Za("span", id(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Rt(), pr(c, { key: 0 }, {
            default: qn(() => [
              En(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : as("", !0),
          dl(f, { id: e.chipTextId }, {
            default: qn(() => [
              En(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, cB),
      e.canDelete ? (Rt(), pr(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : as("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var fB = /* @__PURE__ */ _r(uB, [["render", dB], ["__scopeId", "data-v-48b2704a"]]);
const hB = mr({
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
    Chip: fl,
    Label: hl,
    PreIcon: pl
  }
}), pB = ["aria-disabled"];
function wB(e, r, o, s, a, u) {
  const c = nn("PreIcon"), f = nn("Label"), w = nn("Chip");
  return Rt(), pr(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: qn(() => [
      Za("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Rt(), pr(c, { key: 0 }, {
          default: qn(() => [
            En(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : as("", !0),
        dl(f, null, {
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
var vB = /* @__PURE__ */ _r(hB, [["render", wB], ["__scopeId", "data-v-3e0c4eba"]]);
const mB = mr({
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
    const r = es(!1), o = es(!1), s = ja(() => ce("chip-label-id")), a = ja(() => r.value || o.value ? 0 : -1), u = es(), c = () => {
      u.value.$el.focus();
    }, f = Qi("register", (y) => {
    }), w = Qi("blur", (y) => {
    }), v = Qi("select", (y) => {
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
    Chip: fl,
    Label: hl,
    PreIcon: pl
  }
});
function _B(e, r, o, s, a, u) {
  const c = nn("PreIcon"), f = nn("Label"), w = nn("Chip");
  return Rt(), pr(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: S_(["focus hover", { selected: e.checked }]),
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
      e.hasIcon ? (Rt(), pr(c, { key: 0 }, {
        default: qn(() => [
          En(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : as("", !0),
      dl(f, { id: e.labelId }, {
        default: qn(() => [
          En(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var gB = /* @__PURE__ */ _r(mB, [["render", _B], ["__scopeId", "data-v-bbcc2f70"]]);
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
}, _w = mr({
  props: $B,
  setup() {
    return { format: Qi("chipListFormat", "") };
  },
  render() {
    const e = (r) => zA(r, Ro(Ro({}, this.$props), this.$attrs), Ro({
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
}, bB = mr({
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
      const c = k_(e, "modelValue");
      return C_(Ro({
        attrs: {
          role: "radiogroup"
        }
      }, V_(c, r.emit, e.label, {}, es(""))), {
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
  return Rt(), ds("div", id(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    En(e.$slots, "default", {}, void 0, !0)
  ], 16, VB);
}
var SB = /* @__PURE__ */ _r(bB, [["render", CB], ["__scopeId", "data-v-1e06f41d"]]);
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
const TB = /* @__PURE__ */ de(BB, [["__scopeId", "data-v-e08880d6"]]), DB = window.Vue.defineComponent, Ti = window.Vue.unref, E_ = window.Vue.createTextVNode, uc = window.Vue.normalizeClass, cc = window.Vue.withCtx, NB = window.Vue.createVNode, LB = window.Vue.renderList, MB = window.Vue.Fragment, ha = window.Vue.openBlock, OB = window.Vue.createElementBlock, dc = window.Vue.createBlock, gw = window.Vue.createCommentVNode, PB = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const RB = /* @__PURE__ */ E_(" ALL "), $w = window.Vue.ref, FB = window.Vue.watch, UB = window.Vue.computed, WB = window.Vue.reactive, qB = /* @__PURE__ */ DB({
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
    const o = e, s = $w(!1), a = UB(() => _e.exports.keys(_e.exports.groupBy(o.alarms, o.property))), u = $w(
      (w = o.preSelected) != null && w.length ? o.preSelected : ["all"]
    ), c = WB({
      alarms: o.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), r("selected-option", u.value);
    };
    return FB(o, () => {
      var v;
      u.value = (v = o.preSelected) != null && v.length ? o.preSelected : ["all"], c.alarms = o.alarms, s.value = !1;
    }), (v, _) => Ti(a).length > 0 ? (ha(), dc(Ti(SB), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: uc({ vertical: o.isVertical })
    }, {
      default: cc(() => [
        NB(Ti(_w), {
          class: uc({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: cc(() => [
            RB
          ]),
          _: 1
        }, 8, ["class"]),
        (ha(!0), OB(MB, null, LB(Ti(a), ($) => (ha(), dc(Ti(_w), {
          class: uc([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: cc(() => [
            e.property == "severity" ? (ha(), dc(TB, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : gw("", !0),
            E_(PB($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : gw("", !0);
  }
});
const HB = /* @__PURE__ */ de(qB, [["__scopeId", "data-v-d83b0f85"]]);
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
}, tT = window.Vue.watch, nT = window.Vue.onBeforeUnmount, rT = window.Vue.ref, I_ = (e, r) => {
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
}, oT = window.Vue.defineComponent, Pn = window.Vue.ref, yw = window.Vue.toRef, iT = window.Vue.onMounted, sT = window.Vue.watch, bw = window.Vue.computed, aT = window.Vue.nextTick, Vw = window.Vue.openBlock, Cw = window.Vue.createElementBlock, Sw = window.Vue.renderSlot, lT = window.Vue.normalizeClass, uT = window.Vue.normalizeStyle, cT = window.Vue.createCommentVNode;
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
    const o = Pn(), s = Pn(), a = yw(e, "open"), u = yw(e, "noExpand"), c = Pn("auto"), f = Pn(), w = Pn(e.triggerId || ce("feather-menu-trigger")), v = Pn(ce("feather-menu-dropdown")), _ = Pn(""), $ = Pn("");
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
      const I = o.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", aT(() => {
        let { height: P, width: O } = s.value.getBoundingClientRect();
        const H = T(), $e = H.height, le = H.width;
        e.fill && O < I.width ? (c.value = I.width + "px", O = I.width) : c.value = O + "px";
        let ye = 0;
        $e - I.bottom < P && I.top >= P ? (ye = I.top - P, e.cover && (ye += I.height)) : (ye = I.bottom, e.cover && (ye -= I.height));
        let ge = e.right ? I.right - O : I.left;
        !e.right && I.right >= O && le - I.left < O && (ge = I.right - O), e.right && I.right <= O && le - I.left > O && (ge = I.left), $.value = `${ge}px`, _.value = `${ye}px`, y.value = !1;
      });
    }, L = eT(o, (I) => {
      r.emit("outside-click", I);
    }), S = ZB(D), k = I_(f, D);
    sT([a, s], ([I, P]) => {
      I && P && D(), L.value = I, S.value = I, k.value = I;
    });
    const x = bw(() => {
      const I = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (I["aria-controls"] = v.value), u.value || (I["aria-expanded"] = a.value ? "true" : "false"), I;
    }), R = bw(() => ({
      click: (I) => {
        r.emit("trigger-click", I);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: x,
      triggerListeners: R,
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
  return Vw(), Cw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Sw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Vw(), Cw("div", {
      key: 0,
      class: lT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: uT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Sw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, vT)) : cT("", !0)
  ], 8, wT);
}
var x_ = /* @__PURE__ */ dT(pT, [["render", mT], ["__scopeId", "data-v-f75af406"]]), _T = {
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
const xT = window.Vue.openBlock, AT = window.Vue.createElementBlock, Ed = window.Vue.createElementVNode;
var BT = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const TT = {}, DT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NT = /* @__PURE__ */ Ed("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), LT = /* @__PURE__ */ Ed("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), MT = /* @__PURE__ */ Ed("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), OT = [
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
var wl = /* @__PURE__ */ qT(HT, [["render", jT]]);
const ls = function(e, r) {
  if (!e || !r)
    return;
  let o = e.getBoundingClientRect().height;
  const s = getComputedStyle(e);
  o += parseInt(s.getPropertyValue("margin-top"), 10), o += parseInt(s.getPropertyValue("margin-bottom"), 10), r.scrollTop = e.offsetTop - r.getBoundingClientRect().height + o;
};
const ee = {
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
const ZT = window.Vue.defineComponent, KT = window.Vue.openBlock, JT = window.Vue.createElementBlock, XT = window.Vue.normalizeClass, QT = window.Vue.pushScopeId, eD = window.Vue.popScopeId, sd = window.Vue.createElementVNode;
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
}), A_ = (e) => (QT("data-v-07e020f5"), e = e(), eD(), e), iD = /* @__PURE__ */ A_(() => /* @__PURE__ */ sd("div", { class: "track" }, null, -1)), sD = /* @__PURE__ */ A_(() => /* @__PURE__ */ sd("div", { class: "switcher" }, [
  /* @__PURE__ */ sd("div", { class: "switch-circle" })
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
var uD = /* @__PURE__ */ tD(oD, [["render", lD], ["__scopeId", "data-v-07e020f5"]]), cD = Object.defineProperty, dD = Object.defineProperties, fD = Object.getOwnPropertyDescriptors, kw = Object.getOwnPropertySymbols, hD = Object.prototype.hasOwnProperty, pD = Object.prototype.propertyIsEnumerable, Ew = (e, r, o) => r in e ? cD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Iw = (e, r) => {
  for (var o in r || (r = {}))
    hD.call(r, o) && Ew(e, o, r[o]);
  if (kw)
    for (var o of kw(r))
      pD.call(r, o) && Ew(e, o, r[o]);
  return e;
}, xw = (e, r) => dD(e, fD(r));
const Id = window.Vue.defineComponent, Dr = window.Vue.h, wD = window.Vue.openBlock, vD = window.Vue.createElementBlock, mD = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var B_ = (e, r) => {
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
}, gD = Id({
  inheritAttrs: !1,
  props: _D,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Dr("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = Dr("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let s;
    this.$slots.post && (s = Dr("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Dr(vr);
    if (this.asLi)
      return Dr("li", xw(Iw({}, this.$attrs), {
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
    const u = Dr("a", xw(Iw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, s, a]);
    return Dr("li", {}, [u]);
  }
});
var fs = /* @__PURE__ */ B_(gD, [["__scopeId", "data-v-7c46b2b3"]]);
Id({
  components: {
    FeatherListItem: fs
  }
});
const $D = {}, yD = { class: "feather-list" };
function bD(e, r) {
  return wD(), vD("ul", yD, [
    mD(e.$slots, "default", {}, void 0, !0)
  ]);
}
var xd = /* @__PURE__ */ B_($D, [["render", bD], ["__scopeId", "data-v-941a1d50"]]);
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
Id({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: VD,
  props: CD,
  computed: {
    labelId() {
      return ce("switch-label");
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
      (e.keyCode === ee.SPACE || e.keyCode === ee.ENTER) && this.updateValue(), e.keyCode === ee.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: uD, FeatherListItem: fs }
});
var SD = Object.defineProperty, kD = Object.defineProperties, ED = Object.getOwnPropertyDescriptors, Aw = Object.getOwnPropertySymbols, ID = Object.prototype.hasOwnProperty, xD = Object.prototype.propertyIsEnumerable, Bw = (e, r, o) => r in e ? SD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Ft = (e, r) => {
  for (var o in r || (r = {}))
    ID.call(r, o) && Bw(e, o, r[o]);
  if (Aw)
    for (var o of Aw(r))
      xD.call(r, o) && Bw(e, o, r[o]);
  return e;
}, AD = (e, r) => kD(e, ED(r));
const ri = window.Vue.defineComponent, he = window.Vue.openBlock, He = window.Vue.createElementBlock, Vt = window.Vue.createElementVNode, wn = window.Vue.toDisplayString, tn = window.Vue.createCommentVNode, Re = window.Vue.resolveComponent, en = window.Vue.createBlock, st = window.Vue.withCtx, Fo = window.Vue.Fragment, ts = window.Vue.renderList, Ct = window.Vue.createVNode, Ad = window.Vue.withModifiers, Zr = window.Vue.normalizeClass, ad = window.Vue.renderSlot, T_ = window.Vue.createTextVNode, BD = window.Vue.pushScopeId, TD = window.Vue.popScopeId, D_ = window.Vue.reactive, N_ = window.Vue.nextTick, fc = window.Vue.markRaw, hc = window.Vue.toRef, Tw = window.Vue.computed, DD = window.Vue.toRefs, yo = window.Vue.ref, pc = window.Vue.mergeProps, Dw = window.Vue.toHandlers, pa = window.Vue.withDirectives, wa = window.Vue.vShow;
var vl = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Bd = {
  query: {
    type: String
  }
}, eo = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const ND = ri({
  mixins: [],
  props: Ft(Ft({
    text: {
      type: String,
      required: !0
    }
  }, vl), Bd),
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
    Vt("span", null, wn(e.beginning), 1),
    e.highlighted ? (he(), He("span", LD, wn(e.highlighted), 1)) : tn("", !0),
    e.end ? (he(), He("span", MD, wn(e.end), 1)) : tn("", !0)
  ]);
}
var L_ = /* @__PURE__ */ eo(ND, [["render", OD], ["__scopeId", "data-v-8abe2492"]]);
const PD = ri({
  emits: ["select", "deselect"],
  props: Ft(Ft({
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
  }, vl), Bd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        ls(r, o.$el);
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
    FeatherList: xd,
    FeatherListItem: fs,
    Highlighter: L_
  }
}), RD = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function FD(e, r, o, s, a, u) {
  const c = Re("Highlighter"), f = Re("FeatherListItem"), w = Re("FeatherList");
  return he(), en(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: st(() => [
      (he(!0), He(Fo, null, ts(e.items, (v, _) => (he(), He(Fo, {
        key: v[e.textProp]
      }, [
        Ct(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(_),
          selected: e.isSelected(v),
          onClick: Ad(($) => e.select(v), ["stop"])
        }, {
          default: st(() => [
            Ct(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (he(), He("span", RD, wn(e.newLabel), 1)) : tn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (he(), He("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : tn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var UD = /* @__PURE__ */ eo(PD, [["render", FD], ["__scopeId", "data-v-f623434a"]]);
const WD = ri({
  emits: ["select"],
  props: Ft(Ft({
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
  }, vl), Bd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        ls(r, o);
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
    Highlighter: L_
  }
}), qD = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, HD = ["aria-multiselectable"], zD = { role: "row" }, YD = ["aria-selected", "onClick"], GD = ["id", "aria-selected"], jD = { key: 1 };
function ZD(e, r, o, s, a, u) {
  const c = Re("Highlighter");
  return he(), He("div", qD, [
    Vt("table", {
      class: Zr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      Vt("thead", null, [
        Vt("tr", zD, [
          (he(!0), He(Fo, null, ts(e.config, (f) => (he(), He("th", {
            key: f.title
          }, wn(f.title), 1))), 128))
        ])
      ]),
      Vt("tbody", null, [
        (he(!0), He(Fo, null, ts(e.items, (f, w) => (he(), He("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: Zr({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: Ad((v) => e.select(f), ["stop"])
        }, [
          (he(!0), He(Fo, null, ts(e.config, (v, _) => (he(), He("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: Zr({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (he(), en(c, {
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
var KD = /* @__PURE__ */ eo(WD, [["render", ZD], ["__scopeId", "data-v-58c88fd1"]]);
const JD = ri({
  components: {
    FeatherList: xd,
    FeatherListItem: fs
  }
});
function XD(e, r, o, s, a, u) {
  const c = Re("FeatherListItem"), f = Re("FeatherList");
  return he(), en(f, { class: "result-list" }, {
    default: st(() => [
      Ct(c, { "as-li": "" }, {
        default: st(() => [
          ad(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var QD = /* @__PURE__ */ eo(JD, [["render", XD], ["__scopeId", "data-v-06b752c6"]]);
const eN = ri({
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
    Cancel: Ko,
    BaseChip: fl,
    BaseChipLabel: hl,
    BaseChipPreIcon: pl
  }
});
function tN(e, r, o, s, a, u) {
  const c = Re("FeatherIcon"), f = Re("BaseChipPreIcon"), w = Re("BaseChipLabel"), v = Re("Cancel"), _ = Re("BaseChip");
  return he(), en(_, {
    class: Zr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: st(() => [
      e.showPreIcon ? (he(), en(f, { key: 0 }, {
        default: st(() => {
          var $, y;
          return [
            Ct(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : tn("", !0),
      Ct(w, null, {
        default: st(() => [
          T_(wn(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? tn("", !0) : (he(), He("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = Ad((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        Ct(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: st(() => [
            Ct(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var nN = /* @__PURE__ */ eo(eN, [["render", tN], ["__scopeId", "data-v-e0fc6ac0"]]);
const rN = {}, oN = (e) => (BD("data-v-aa720e06"), e = e(), TD(), e), iN = { class: "spinner-container" }, sN = /* @__PURE__ */ oN(() => /* @__PURE__ */ Vt("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Vt("circle", {
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
var uN = /* @__PURE__ */ eo(rN, [["render", lN], ["__scopeId", "data-v-aa720e06"]]), ml = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(ml || {});
const M_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, cN = Ft(Ft(Ft({
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
    validator: (e) => !!ml[e]
  },
  labels: {
    type: Object,
    default: () => M_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, vl), ti), ul), dN = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, fN = (e, r, o, s) => {
  if (o.toLowerCase() === ml.multi) {
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
  const e = D_({
    row: -1
  }), r = (u) => {
    N_(() => {
      e.row = u;
    });
  }, o = (u, c) => {
    if (u.keyCode === ee.DOWN) {
      if (u.preventDefault(), e.row === -1)
        s(), r(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        s(), r(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ee.UP) {
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
  const r = D_({
    row: -1,
    col: -1
  }), o = (c, f) => {
    N_(() => {
      r.col = f, r.row = c;
    });
  }, s = (c, f) => {
    if (c.keyCode === ee.DOWN) {
      if (c.preventDefault(), r.row === -1)
        a(), o(0, 0);
      else if (r.row + 1 <= f.length - 1) {
        const w = r.row, v = r.col;
        a(), o(w + 1, v);
      }
      return !0;
    }
    if (c.keyCode === ee.UP) {
      if (c.preventDefault(), r.row === 0)
        a();
      else if (r.row > 0) {
        const w = r.row, v = r.col;
        a(), o(w - 1, v);
      }
      return !0;
    }
    if (c.keyCode === ee.RIGHT && r.row !== -1) {
      if (c.preventDefault(), r.col + 1 <= e.length - 1) {
        const w = r.col, v = r.row;
        a(), o(v, w + 1);
      } else if (r.col <= e.length - 1 && r.row + 1 <= f.length - 1) {
        const w = r.row;
        a(), o(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === ee.LEFT && r.row !== -1) {
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
    if (c.keyCode === ee.END && r.row !== -1) {
      c.preventDefault();
      const w = r.row;
      return a(), o(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === ee.HOME && r.row !== -1) {
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
}, wN = ri({
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
      return this.type !== ml.multi;
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
      return ce("result-item");
    },
    minCharWarningId() {
      return ce("min-char-warning");
    },
    subTextId() {
      return ce("feather-autocomplete-description");
    },
    resultsId() {
      return ce("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return ce("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return fc(IT);
    },
    minCharIcon() {
      return fc(RT);
    },
    dropdownIcon() {
      return fc(wl);
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
        ls(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          ls(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = ce("active-chip"), this.activeChipId;
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
      o !== void 0 && (Jr(this.typingTimeout), this.typingTimeout = Kr(() => {
        this.query = o, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const r = () => {
        this.activeChipIndex = -1;
      }, o = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === ee.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        r(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === ee.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const s = this.modelValue;
        this.removeFromValue(s[this.activeChipIndex]), r();
        return;
      }
      if (e.keyCode === ee.ENTER && this.active.row > -1) {
        e.preventDefault(), this.selectItem(this.internalResults[this.active.row]);
        return;
      }
      if ((e.keyCode === ee.ENTER || e.keyCode === ee.SPACE || e.keyCode === ee.DOWN) && this.activeChipIndex == -1 && !this.showMenu) {
        e.preventDefault(), this.emitSearch();
        return;
      }
      if (e.keyCode === ee.ESCAPE) {
        this.forceCloseResults = !0, o(), r();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const s = this.modelValue;
        e.keyCode === ee.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (o(), this.activeChipIndex = s.length - 1) : this.activeChipIndex - 1 >= 0 && (o(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ee.RIGHT && (e.preventDefault(), this.activeChipIndex === s.length - 1 ? (o(), this.activeChipIndex = -1) : this.activeChipIndex < s.length - 1 && this.activeChipIndex > -1 && (o(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ee.DELETE || e.keyCode === ee.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(s[this.activeChipIndex]), o(), r());
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
    const o = al(hc(e, "labels"), M_);
    ni(e), cl(e);
    let s;
    e.gridConfig ? s = pN(e.gridConfig) : s = hN();
    const a = hc(e, "id"), u = Tw(() => a.value ? a.value : ce("feather-autocomplete-input")), { validate: c } = Qo(u, hc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = DD(e), T = yo(!1), D = yo(!1), M = yo(!1), L = yo(""), S = yo([]), k = yo(), x = Tw(() => k.value), R = () => {
      T.value && !D.value && (L.value && L.value.length >= y.value && r.emit("search", L.value), y.value <= 0 && r.emit("search", L.value || ""), S.value = [], s.reset());
    }, I = fN({
      selectionLimit: f,
      selectionLimitReached: D,
      modelValue: w,
      textProp: v,
      allowNew: _,
      forceCloseResults: M,
      query: L,
      internalResults: S,
      input: x,
      emitSearch: R
    }, s, $.value, r.emit);
    return AD(Ft(Ft({}, o), ei(r.attrs)), {
      query: L,
      internalResults: S,
      selectionLimitReached: D,
      forceCloseResults: M,
      hasFocus: T,
      strategy: I,
      emitSearch: R,
      active: s.active,
      handleResultNavigation: s.handleKeyPress,
      resetResultIndex: s.reset,
      selectFirst: s.first,
      inputId: u,
      input: k,
      incomingId: a,
      inputRef: x,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: ll,
    InputSubText: Xo,
    AutocompleteResults: UD,
    AutocompleteResultsGrid: KD,
    Chip: nN,
    MenuMessage: QD,
    FeatherIcon: Z,
    FeatherMenu: x_,
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
  const c = Re("FeatherIcon"), f = Re("Chip"), w = Re("InputWrapper"), v = Re("AutocompleteResults"), _ = Re("AutocompleteResultsGrid"), $ = Re("MenuMessage"), y = Re("Spinner"), T = Re("FeatherMenu"), D = Re("InputSubText");
  return he(), He("div", pc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    Ct(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: Zr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: st(({ attrs: M, on: L }) => [
        Ct(w, pc(Ft(Ft({}, M), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Dw(L), { ref: "scroll" }), {
          pre: st(() => [
            ad(e.$slots, "pre", {}, () => [
              Ct(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: st(() => [
            Ct(c, {
              icon: e.dropdownIcon,
              class: Zr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: st(() => [
            Vt("div", {
              class: Zr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              Vt("div", vN, null, 512),
              Vt("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, wn(e.selectedDescribedByText), 9, mN),
              (he(!0), He(Fo, null, ts(e.modelValueList, (S, k) => pa((he(), en(f, {
                key: S[e.textProp],
                role: "button",
                id: k === e.activeChipIndex ? e.activeChipId : null,
                focused: k === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (x) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [wa, !e.singleSelect]
              ])), 128)),
              Vt("textarea", pc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Dw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: st(() => [
        e.gridConfig ? tn("", !0) : pa((he(), en(v, {
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
          [wa, e.showResults]
        ]),
        e.gridConfig ? pa((he(), en(_, {
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
          [wa, e.showResults]
        ]) : tn("", !0),
        e.showNoResults ? (he(), en($, { key: 2 }, {
          default: st(() => [
            Vt("span", _N, wn(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : tn("", !0),
        e.showSelectionLimit ? (he(), en($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: st(() => [
            Ct(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Vt("span", gN, wn(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : tn("", !0),
        e.minChar ? pa((he(), en($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: st(() => [
            Ct(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Vt("span", $N, [
              ad(e.$slots, "min-char", {}, () => [
                T_(wn(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [wa, e.showMinCharWarning]
        ]) : tn("", !0),
        e.showLoading ? (he(), en(y, { key: 5 })) : tn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    Ct(D, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var bN = /* @__PURE__ */ eo(wN, [["render", yN], ["__scopeId", "data-v-43a7e951"]]);
var VN = Object.defineProperty, CN = Object.defineProperties, SN = Object.getOwnPropertyDescriptors, Nw = Object.getOwnPropertySymbols, kN = Object.prototype.hasOwnProperty, EN = Object.prototype.propertyIsEnumerable, Lw = (e, r, o) => r in e ? VN(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Oa = (e, r) => {
  for (var o in r || (r = {}))
    kN.call(r, o) && Lw(e, o, r[o]);
  if (Nw)
    for (var o of Nw(r))
      EN.call(r, o) && Lw(e, o, r[o]);
  return e;
}, O_ = (e, r) => CN(e, SN(r));
const P_ = window.Vue.defineComponent, IN = window.Vue.ref, ns = window.Vue.computed, xN = window.Vue.reactive, Mw = window.Vue.watch, wc = window.Vue.inject, R_ = window.Vue.resolveComponent, ld = window.Vue.openBlock, F_ = window.Vue.createElementBlock, wr = window.Vue.createElementVNode, AN = window.Vue.createBlock, BN = window.Vue.createCommentVNode, U_ = window.Vue.renderSlot, TN = window.Vue.pushScopeId, DN = window.Vue.popScopeId, vc = window.Vue.toRef, Ow = window.Vue.mergeProps, NN = window.Vue.toDisplayString, LN = window.Vue.createVNode;
var W_ = (e, r) => {
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
}, ON = P_({
  props: MN,
  setup(e) {
    const r = IN(), o = () => {
      r.value.focus();
    }, s = ns(() => ce("feather-radio-button")), a = xN({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: s.value
    }), u = ns(() => ce("radio-label-id")), c = ns(() => a.first || a.checked ? 0 : -1);
    Mw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Mw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = wc("register", ($) => {
    }), w = wc("blur", ($) => {
    }), v = wc("select", ($) => {
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
    FeatherRipple: vr
  }
}), PN = (e) => (TN("data-v-24790cf0"), e = e(), DN(), e), RN = { class: "layout-container" }, FN = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], UN = { class: "radio hover focus" }, WN = /* @__PURE__ */ PN(() => /* @__PURE__ */ wr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ wr("svg", { class: "dot" }, [
    /* @__PURE__ */ wr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), qN = ["id"];
function HN(e, r, o, s, a, u) {
  const c = R_("feather-ripple");
  return ld(), F_("div", RN, [
    wr("div", {
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
      wr("div", UN, [
        WN,
        e.vm.disabled ? BN("", !0) : (ld(), AN(c, {
          key: 0,
          center: ""
        }))
      ]),
      wr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        U_(e.$slots, "default", {}, void 0, !0)
      ], 8, qN)
    ], 40, FN)
  ]);
}
var ud = /* @__PURE__ */ W_(ON, [["render", HN], ["__scopeId", "data-v-24790cf0"]]);
const zN = O_(Oa({}, ti), {
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
}, GN = P_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: zN,
  emits: YN,
  setup(e, r) {
    ni(e);
    const o = vc(e, "error"), s = vc(e, "modelValue"), a = ns(() => ce("feather-input-description")), u = ns(() => {
      const c = O_(Oa({}, r.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!o.value), c;
    });
    return Oa(Oa({
      descriptionId: a,
      attrs: u
    }, V_(s, r.emit, e.label, e.schema, vc(e, "error"))), ei(r.attrs));
  },
  components: {
    InputSubText: Xo
  }
}), jN = ["for"], ZN = ["id"];
function KN(e, r, o, s, a, u) {
  const c = R_("InputSubText");
  return ld(), F_("div", Ow(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    wr("label", {
      for: e.groupId,
      class: "group-label"
    }, NN(e.label), 9, jN),
    wr("div", Ow(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      U_(e.$slots, "default", {}, void 0, !0)
    ], 16, ZN),
    LN(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var q_ = /* @__PURE__ */ W_(GN, [["render", KN], ["__scopeId", "data-v-6775aeb9"]]);
const JN = window.Vue.defineComponent, XN = window.Vue.renderList, QN = window.Vue.Fragment, Pw = window.Vue.openBlock, eL = window.Vue.createElementBlock, tL = window.Vue.toDisplayString, nL = window.Vue.createTextVNode, Rw = window.Vue.unref, Fw = window.Vue.withCtx, rL = window.Vue.createVNode, oL = window.Vue.createBlock, iL = window.Vue.watch, sL = window.Vue.ref, aL = /* @__PURE__ */ JN({
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
    }), (u, c) => (Pw(), oL(Rw(q_), {
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
      default: Fw(() => [
        (Pw(), eL(QN, null, XN(s, (f) => rL(Rw(ud), {
          value: f.id,
          key: f.id
        }, {
          default: Fw(() => [
            nL(tL(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const lL = /* @__PURE__ */ de(aL, [["__scopeId", "data-v-0363302c"]]);
var uL = Object.defineProperty, cL = Object.defineProperties, dL = Object.getOwnPropertyDescriptors, Uw = Object.getOwnPropertySymbols, fL = Object.prototype.hasOwnProperty, hL = Object.prototype.propertyIsEnumerable, Ww = (e, r, o) => r in e ? uL(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Di = (e, r) => {
  for (var o in r || (r = {}))
    fL.call(r, o) && Ww(e, o, r[o]);
  if (Uw)
    for (var o of Uw(r))
      hL.call(r, o) && Ww(e, o, r[o]);
  return e;
}, qw = (e, r) => cL(e, dL(r));
const pL = window.Vue.defineComponent, wL = window.Vue.inject, Ni = window.Vue.h;
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
    }, r = this.asAnchor ? "a" : "button", o = {}, s = Di({}, this.$attrs);
    o.attrs = s || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    o.class = [this.$attrs.class].concat(a), this.$slots.icon && o.class.push("has-icon");
    let u = Ni(vr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), Ni(r, qw(Di(Di({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : Ni(vr, { center: !0 })
      ]);
    }
    const c = Ni("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return Ni(r, qw(Di(Di({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var ae = /* @__PURE__ */ vL(_L, [["__scopeId", "data-v-702d1074"]]);
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
var H_ = /* @__PURE__ */ WL(qL, [["render", GL]]);
const jL = window.Vue.defineComponent, $n = window.Vue.unref, Nr = window.Vue.createVNode, Hw = window.Vue.toDisplayString, Un = window.Vue.createElementVNode, z_ = window.Vue.createTextVNode, zw = window.Vue.openBlock, Yw = window.Vue.createElementBlock, ZL = window.Vue.createCommentVNode, KL = window.Vue.withCtx, JL = window.Vue.vShow, XL = window.Vue.normalizeClass, QL = window.Vue.withDirectives, e3 = window.Vue.Fragment, t3 = window.Vue.pushScopeId, n3 = window.Vue.popScopeId, Y_ = (e) => (t3("data-v-b1dc2670"), e = e(), n3(), e), r3 = /* @__PURE__ */ z_(" Filters "), o3 = { class: "count" }, i3 = { class: "results" }, s3 = { class: "total" }, a3 = /* @__PURE__ */ z_(" Reset "), l3 = /* @__PURE__ */ Y_(() => /* @__PURE__ */ Un("div", { class: "title" }, "By Severities:", -1)), u3 = /* @__PURE__ */ Y_(() => /* @__PURE__ */ Un("div", { class: "title" }, "By Start Date:", -1)), Lr = window.Vue.ref, c3 = window.Vue.reactive, d3 = window.Vue.markRaw, Gw = window.Vue.watch, f3 = /* @__PURE__ */ jL({
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
      ExpandMore: wl,
      Refresh: H_
    }), a = vn(), u = Lr(o.isOpen), c = Lr(["all"]), f = Lr(1), w = Lr(o.list), v = Lr(!1), _ = Lr(0), $ = Lr(null), y = c3({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var P, O;
      o.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((P = a.filters) == null ? void 0 : P.severities) && !((O = a.filters) != null && O.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, x());
    }, D = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    Gw(
      () => a.nodes,
      () => {
        D();
      }
    ), Gw(o, () => {
      w.value = o.list, T();
    });
    const M = (P) => {
      c.value = P, x();
    }, L = (P) => {
      f.value = P, x();
    }, S = (P) => {
      if (!P)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((O) => O.label.toLowerCase().indexOf(P) > -1).map((O) => ({
        _text: O.label,
        id: O.id
      })), v.value = !1;
    }, k = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, r("filtered-list", o.list), o.isOpen || (u.value = !1), o.saveFilters && (a.filters = null), w.value = o.list;
    }, x = () => {
      _.value = 0;
      let P = o.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, o.isSituation ? P = P.map((O) => {
        if (O.relatedAlarms.filter(
          (le) => {
            var ye;
            return le.nodeLabel === ((ye = y.nodeSelectedValue) == null ? void 0 : ye._text);
          }
        ).length > 0)
          return O;
      }).filter((O) => O) : P = P.filter(
        (O) => {
          var H;
          return O.nodeLabel === ((H = y.nodeSelectedValue) == null ? void 0 : H._text);
        }
      )), c.value.includes("all") || (_.value++, P = P.filter(
        (O) => c.value.includes(O.severity)
      )), f.value !== 1 && (_.value++, P = J2(
        f.value,
        P
      )), w.value = P, o.saveFilters && R(), r("filtered-list", P);
    }, R = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, I = () => {
      u.value = !u.value;
    };
    return (P, O) => (zw(), Yw(e3, null, [
      o.isOpen ? ZL("", !0) : (zw(), Yw("div", {
        key: 0,
        class: "btn-filter",
        onClick: I
      }, [
        Un("div", null, [
          Nr($n(Z), {
            icon: $n(s).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          r3,
          Un("span", o3, Hw(_.value), 1)
        ]),
        Nr($n(Z), {
          icon: u.value ? $n(s).ExpandLess : $n(s).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      QL(Un("div", {
        class: XL(["filters", { collapsed: !o.isOpen }])
      }, [
        Un("div", i3, [
          Un("div", s3, "Results: " + Hw($n(w).length), 1),
          Nr($n(ae), {
            class: "btn-reset",
            onClick: k
          }, {
            default: KL(() => [
              Nr($n(Z), {
                icon: $n(s).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              a3
            ]),
            _: 1
          })
        ]),
        Un("div", null, [
          Nr($n(bN), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              O[0] || (O[0] = (H) => y.nodeSelectedValue = H),
              x
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          l3,
          Nr(HB, {
            alarms: o.list,
            onSelectedOption: M,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Un("div", null, [
            u3,
            Nr(lL, {
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
const oi = /* @__PURE__ */ de(f3, [["__scopeId", "data-v-b1dc2670"]]), h3 = window.Vue.openBlock, p3 = window.Vue.createElementBlock, w3 = window.Vue.createElementVNode;
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
var _l = /* @__PURE__ */ v3(m3, [["render", y3]]);
const b3 = window.Vue.openBlock, V3 = window.Vue.createElementBlock, G_ = window.Vue.createElementVNode;
var C3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const S3 = {}, k3 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, E3 = /* @__PURE__ */ G_("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), I3 = /* @__PURE__ */ G_("circle", {
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
const gr = () => window.VRouter || Hg;
const W3 = window.Vue.openBlock, q3 = window.Vue.createElementBlock, H3 = window.Vue.pushScopeId, z3 = window.Vue.popScopeId, jw = window.Vue.createElementVNode;
var Y3 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const G3 = {}, j3 = (e) => (H3("data-v-2263be39"), e = e(), z3(), e), Z3 = { class: "spinner-container" }, K3 = /* @__PURE__ */ j3(() => /* @__PURE__ */ jw("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ jw("circle", {
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
var Uo = /* @__PURE__ */ Y3(G3, [["render", X3], ["__scopeId", "data-v-2263be39"]]);
const Q3 = window.Vue.defineComponent, mc = window.Vue.unref, e4 = window.Vue.createVNode, t4 = window.Vue.createElementVNode, n4 = window.Vue.withCtx, r4 = window.Vue.openBlock, o4 = window.Vue.createBlock, i4 = window.Vue.pushScopeId, s4 = window.Vue.popScopeId, a4 = (e) => (i4("data-v-fba500de"), e = e(), s4(), e), l4 = /* @__PURE__ */ a4(() => /* @__PURE__ */ t4("span", null, "New Situation", -1)), u4 = window.Vue.markRaw, c4 = /* @__PURE__ */ Q3({
  __name: "NewSituationBtn",
  setup(e) {
    const r = gr(), o = u4({
      Add: _l
    }), s = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (a, u) => (r4(), o4(mc(ae), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: n4(() => [
        e4(mc(Z), {
          icon: mc(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        l4
      ]),
      _: 1
    }));
  }
});
const j_ = /* @__PURE__ */ de(c4, [["__scopeId", "data-v-fba500de"]]), d4 = "/whoami", f4 = async () => {
  try {
    const e = await lt.get(d4);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, h4 = window.Pinia.defineStore, p4 = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, Xr = h4("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    claudeConfig: null,
    claudeUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await f4();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await Q2();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, r, o) {
      const s = {
        ...p4,
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
}), w4 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", v4 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", m4 = window.Vue.defineComponent, bo = window.Vue.unref, Vo = window.Vue.openBlock, Co = window.Vue.createElementBlock, _4 = window.Vue.createCommentVNode, Z_ = window.Vue.createTextVNode, Zw = window.Vue.Fragment, K_ = window.Vue.createElementVNode, g4 = window.Vue.pushScopeId, $4 = window.Vue.popScopeId, y4 = (e) => (g4("data-v-b87e4e5c"), e = e(), $4(), e), b4 = ["src"], V4 = { class: "engine" }, C4 = /* @__PURE__ */ Z_(" ENGINE "), S4 = {
  key: 0,
  class: "type"
}, k4 = {
  key: 1,
  class: "type"
}, E4 = /* @__PURE__ */ Z_(" ENGINE "), I4 = /* @__PURE__ */ y4(() => /* @__PURE__ */ K_("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), Kw = window.Vue.computed, x4 = /* @__PURE__ */ m4({
  __name: "ConfigurationInfo",
  setup(e) {
    const r = gr(), o = Xr(), s = () => {
      r.push({
        name: "settings"
      });
    }, a = Kw(() => {
      var c;
      return !!((c = o.engineInfo) != null && c.engineName);
    }), u = Kw(
      () => {
        var c;
        return ((c = o.engineInfo) == null ? void 0 : c.engineName) == et.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (Vo(), Co("div", {
      class: "info-engine",
      onClick: s,
      "data-test": "configuration-info"
    }, [
      bo(a) ? (Vo(), Co("img", {
        key: 0,
        src: bo(u) ? bo(v4) : bo(w4),
        class: "icon-type"
      }, null, 8, b4)) : _4("", !0),
      K_("div", V4, [
        bo(a) ? (Vo(), Co(Zw, { key: 0 }, [
          C4,
          bo(u) ? (Vo(), Co("div", S4, "CLUSTERING")) : (Vo(), Co("div", k4, "DEEP LEARNING"))
        ], 64)) : (Vo(), Co(Zw, { key: 1 }, [
          E4,
          I4
        ], 64))
      ])
    ]));
  }
});
const A4 = /* @__PURE__ */ de(x4, [["__scopeId", "data-v-b87e4e5c"]]);
const B4 = {}, T4 = window.Vue.openBlock, D4 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const N4 = { class: "empty" };
function L4(e, r) {
  return T4(), D4("div", N4, "No results found.");
}
const ii = /* @__PURE__ */ de(B4, [["render", L4], ["__scopeId", "data-v-725433ac"]]), M4 = window.Vue.defineComponent, bn = window.Vue.createElementVNode, Li = window.Vue.unref, Mr = window.Vue.createVNode, O4 = window.Vue.withCtx, va = window.Vue.toDisplayString, Rn = window.Vue.openBlock, Or = window.Vue.createElementBlock, Jw = window.Vue.createCommentVNode, Xw = window.Vue.createBlock, P4 = window.Vue.renderList, R4 = window.Vue.Fragment, F4 = window.Vue.pushScopeId, U4 = window.Vue.popScopeId, J_ = (e) => (F4("data-v-2675e2f8"), e = e(), U4(), e), W4 = { class: "list-main" }, q4 = { class: "header" }, H4 = /* @__PURE__ */ J_(() => /* @__PURE__ */ bn("h2", null, "Situation List", -1)), z4 = { class: "link-btns" }, Y4 = /* @__PURE__ */ J_(() => /* @__PURE__ */ bn("span", null, "View Unassociated Alarms", -1)), G4 = { class: "content" }, j4 = { class: "left-filters" }, Z4 = { class: "container" }, K4 = { class: "autocomplete" }, J4 = { key: 0 }, X4 = { key: 1 }, Q4 = { key: 0 }, eM = { class: "situation-list" }, tM = {
  key: 0,
  class: "footer-pager"
}, nM = window.Vue.reactive, ma = window.Vue.ref, rM = window.Vue.watch, oM = window.Vue.markRaw, iM = /* @__PURE__ */ M4({
  __name: "SituationList",
  setup(e) {
    const r = oM({
      Add: _l,
      View: B3,
      Settings: U3
    }), o = gr(), s = vn(), a = Xr();
    s.getSituations(), s.getNodes(), s.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = nM({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = ma(!0), w = ma(0), v = ma(1), _ = ma(0), $ = () => {
      c.nodes = s.nodes, c.results = s.nodes;
    };
    rM(
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
      _.value = S.length, c.allSituations = _e.exports.chunk(S, u);
      const k = S.map((x) => x.id);
      s.filteredSituations = k, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, L = (S) => {
      S.length ? M(S) : c.situations = [];
    };
    return (S, k) => {
      var x;
      return Rn(), Or("div", W4, [
        bn("div", q4, [
          H4,
          bn("div", z4, [
            Mr(Li(ae), {
              class: "view-situation-btn",
              onClick: k[0] || (k[0] = () => D())
            }, {
              default: O4(() => [
                Mr(Li(Z), {
                  icon: Li(r).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                Y4
              ]),
              _: 1
            }),
            Mr(j_),
            Mr(A4)
          ])
        ]),
        bn("div", G4, [
          bn("div", j4, [
            Mr(oi, {
              list: Li(s).situations,
              onFilteredList: L,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          bn("div", Z4, [
            bn("div", K4, [
              c.situations && c.situations.length ? (Rn(), Or("div", J4, " Result: " + va((x = c.situations) == null ? void 0 : x.length) + " of " + va(_.value), 1)) : Jw("", !0)
            ]),
            f.value ? (Rn(), Xw(Li(Uo), {
              key: 0,
              class: "spinner"
            })) : (Rn(), Or("div", X4, [
              c.situations && c.situations.length ? (Rn(), Or("div", Q4, [
                bn("div", eM, [
                  (Rn(!0), Or(R4, null, P4(c.situations, (R) => (Rn(), Or("div", {
                    class: "card",
                    key: R.id
                  }, [
                    Mr(__, {
                      onClick: () => T(R.id),
                      "situation-info": R
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Rn(), Or("div", tM, [
                  bn("div", null, "Page: " + va(w.value + 1) + " of " + va(v.value), 1),
                  Mr($x, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : Jw("", !0)
              ])) : (Rn(), Xw(ii, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const sM = /* @__PURE__ */ de(iM, [["__scopeId", "data-v-2675e2f8"]]);
const _a = window.Vue.ref, aM = window.Vue.inject, lM = window.Vue.computed, uM = window.Vue.onMounted, X_ = {
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
}, Q_ = (e) => {
  const r = _a(!1), o = _a(), s = _a(e.controls), a = _a(e.id), u = () => {
    o.value && o.value.focus();
  }, c = aM("registerTab");
  uM(() => {
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
  const f = lM(() => ({
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
}, Qw = window.Vue.ref, cM = window.Vue.toRef, dM = window.Vue.watch, ev = window.Vue.provide, eg = {
  prop: "modelValue",
  event: "update:modelValue"
}, tg = {
  "update:modelValue": (e) => !0
}, ng = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, rg = (e, r) => {
  const o = cM(e, "modelValue"), s = Qw(e.modelValue), a = Qw([]);
  dM(o, (D) => {
    w(D);
  });
  const u = (D) => {
    D.preventDefault(), a.value.some((M, L) => M.tab && M.tab.el.contains(D.target) ? (f(L), w(L), !0) : !1);
  }, c = (D) => {
    if (((H) => H.shiftKey || H.ctrlKey || H.metaKey || H.altKey)(D))
      return;
    const L = D.keyCode, S = (H) => {
      H.stopPropagation(), H.preventDefault();
    }, k = a.value.filter((H) => H.tab && !H.tab.disabled), x = a.value.findIndex((H) => H.tab && H.tab.el.contains(document.activeElement));
    let R = x !== -1 ? x : s.value;
    const I = [ee.RIGHT], P = [ee.LEFT], O = [ee.ENTER, ee.SPACE];
    e.vertical && (I.push(ee.DOWN), P.push(ee.UP)), I.indexOf(L) > -1 ? (R++, R >= k.length && (R = 0), S(D), f(a.value.indexOf(k[R]))) : P.indexOf(L) > -1 && (R--, R < 0 && (R = k.length - 1), S(D), f(a.value.indexOf(k[R]))), O.indexOf(L) > -1 && w(R);
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
  ev("registerTab", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = { ...a.value[M], tab: D }, a.value = [...a.value], $());
  }), ev("registerPanel", (D) => {
    const M = D.index;
    M > -1 && (a.value[M] = {
      ...a.value[M],
      panel: D
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: D, panel: M }, L) => {
      if (M && D) {
        const S = D.id || ce("tab"), k = D.controls || ce("panel");
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
}, ga = window.Vue.ref, fM = window.Vue.inject, hM = window.Vue.computed, pM = window.Vue.onMounted, og = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, ig = (e) => {
  const r = ga(!1), o = ga(), s = ga(e.tab), a = ga(e.id), u = fM("registerPanel");
  pM(() => {
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
  const c = hM(() => ({
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
}, Td = window.Vue.defineComponent, wM = window.Vue.resolveComponent, Dd = window.Vue.openBlock, Nd = window.Vue.createElementBlock, rs = window.Vue.createElementVNode, sg = window.Vue.mergeProps, Ka = window.Vue.renderSlot, vM = window.Vue.createVNode, mM = window.Vue.normalizeStyle, _M = window.Vue.toHandlers, gM = window.Vue.withDirectives, $M = window.Vue.normalizeProps, yM = window.Vue.guardReactiveProps, bM = window.Vue.vShow;
var Ld = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const VM = X_, CM = Td({
  props: VM,
  setup(e) {
    return Q_(e);
  },
  components: {
    FeatherRipple: vr
  }
}), SM = { role: "presentation" }, kM = { class: "tab-text" };
function EM(e, r, o, s, a, u) {
  const c = wM("FeatherRipple");
  return Dd(), Nd("li", SM, [
    rs("button", sg(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      rs("span", kM, [
        Ka(e.$slots, "default", {}, void 0, !0)
      ]),
      vM(c)
    ], 16)
  ]);
}
var _c = /* @__PURE__ */ Ld(CM, [["render", EM], ["__scopeId", "data-v-e6bb52b6"]]);
const IM = ng, xM = tg, AM = Td({
  model: eg,
  emits: xM,
  props: IM,
  setup(e, r) {
    return rg(e, r);
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
}), BM = { class: "feather-tab-container" }, TM = { class: "tab-panels" };
function DM(e, r, o, s, a, u) {
  return Dd(), Nd("div", BM, [
    rs("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: mM({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    rs("ul", sg(e.attrs, _M(e.listeners)), [
      Ka(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    rs("div", TM, [
      Ka(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var NM = /* @__PURE__ */ Ld(AM, [["render", DM], ["__scopeId", "data-v-27adffb9"]]);
const LM = og, MM = Td({
  props: LM,
  setup(e) {
    return ig(e);
  }
});
function OM(e, r, o, s, a, u) {
  return gM((Dd(), Nd("div", $M(yM(e.attrs)), [
    Ka(e.$slots, "default")
  ], 16)), [
    [bM, e.selected]
  ]);
}
var gc = /* @__PURE__ */ Ld(MM, [["render", OM]]);
const PM = window.Vue.defineComponent, RM = window.Vue.toDisplayString, FM = window.Vue.normalizeClass, UM = window.Vue.openBlock, WM = window.Vue.createElementBlock, qM = window.Vue.createCommentVNode, HM = /* @__PURE__ */ PM({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, s) => r != null && r.severity ? (UM(), WM("span", {
      key: 0,
      class: FM(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, RM(r.severity), 3)) : qM("", !0);
  }
});
const ag = /* @__PURE__ */ de(HM, [["__scopeId", "data-v-83c2cdce"]]), zM = window.Vue.defineComponent, tv = window.Vue.toDisplayString, nv = window.Vue.createElementVNode, YM = window.Vue.openBlock, GM = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const jM = { class: "box" }, ZM = { class: "label" }, KM = { class: "date" }, JM = /* @__PURE__ */ zM({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (YM(), GM("div", jM, [
      nv("div", ZM, tv(r.label), 1),
      nv("div", KM, tv(r.info), 1)
    ]));
  }
});
const $c = /* @__PURE__ */ de(JM, [["__scopeId", "data-v-b4afa751"]]), XM = window.Vue.defineComponent, QM = window.Vue.unref, eO = window.Vue.renderList, tO = window.Vue.Fragment, yc = window.Vue.openBlock, bc = window.Vue.createElementBlock, nO = window.Vue.toDisplayString, rO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const oO = { class: "alarms-list" }, iO = /* @__PURE__ */ XM({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (yc(), bc("div", oO, [
      (yc(!0), bc(tO, null, eO(QM(_e.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (a, u) => (yc(), bc("div", {
        class: rO(["alarm-count", [`${u.toString().toLowerCase()}-color`, r.size]]),
        key: u
      }, nO(a.length), 3))), 128))
    ]));
  }
});
const sO = /* @__PURE__ */ de(iO, [["__scopeId", "data-v-52d63440"]]), aO = window.Vue.openBlock, lO = window.Vue.createElementBlock, uO = window.Vue.createElementVNode;
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
var Ja = /* @__PURE__ */ $O(yO, [["render", SO]]);
const kO = window.Vue.defineComponent, cn = window.Vue.unref, Vc = window.Vue.createVNode, Md = window.Vue.createElementVNode, Cc = window.Vue.withCtx, $a = window.Vue.openBlock, Sc = window.Vue.createBlock, kc = window.Vue.createCommentVNode, EO = window.Vue.normalizeClass, IO = window.Vue.createElementBlock, xO = window.Vue.pushScopeId, AO = window.Vue.popScopeId, Od = (e) => (xO("data-v-e073070b"), e = e(), AO(), e), BO = /* @__PURE__ */ Od(() => /* @__PURE__ */ Md("span", null, "Acknowledge", -1)), TO = /* @__PURE__ */ Od(() => /* @__PURE__ */ Md("span", null, "Escalate", -1)), DO = /* @__PURE__ */ Od(() => /* @__PURE__ */ Md("span", null, "Clear", -1)), NO = /* @__PURE__ */ kO({
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
      await Gk(r.alarm.id, u) && o.getSituation(r.situationId), r.isSituation && await v_(
        r.situationId,
        et.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await e_(r.alarm.id, u) && o.getSituation(r.situationId);
    };
    return (u, c) => ($a(), IO("div", {
      class: EO(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? kc("", !0) : ($a(), Sc(cn(ae), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => s(!0))
      }, {
        default: Cc(() => [
          Vc(cn(Z), {
            icon: cn(zo),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          BO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? ($a(), Sc(cn(ae), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(cn(et).ESCALATE))
      }, {
        default: Cc(() => [
          Vc(cn(Z), {
            icon: cn(vO),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          TO
        ]),
        _: 1
      })) : kc("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? ($a(), Sc(cn(ae), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(cn(et).CLEAR))
      }, {
        default: Cc(() => [
          Vc(cn(Z), {
            icon: cn(Ja),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          DO
        ]),
        _: 1
      })) : kc("", !0)
    ], 2));
  }
});
const lg = /* @__PURE__ */ de(NO, [["__scopeId", "data-v-e073070b"]]);
var LO = Object.defineProperty, MO = Object.defineProperties, OO = Object.getOwnPropertyDescriptors, rv = Object.getOwnPropertySymbols, PO = Object.prototype.hasOwnProperty, RO = Object.prototype.propertyIsEnumerable, ov = (e, r, o) => r in e ? LO(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, cd = (e, r) => {
  for (var o in r || (r = {}))
    PO.call(r, o) && ov(e, o, r[o]);
  if (rv)
    for (var o of rv(r))
      RO.call(r, o) && ov(e, o, r[o]);
  return e;
}, ug = (e, r) => MO(e, OO(r));
const cg = window.Vue.defineComponent, FO = window.Vue.inject, UO = window.Vue.resolveComponent, Ec = window.Vue.openBlock, iv = window.Vue.createElementBlock, Mo = window.Vue.createElementVNode, WO = window.Vue.createBlock, sv = window.Vue.createCommentVNode, qO = window.Vue.renderSlot, HO = window.Vue.pushScopeId, zO = window.Vue.popScopeId, Ic = window.Vue.toRef, ya = window.Vue.computed, YO = window.Vue.ref;
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
}, KO = cg({
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
      return this.label && this.label.length ? void 0 : ce("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : ce("checkbox-label");
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
      (e.keyCode === ee.SPACE || e.keyCode === ee.ENTER) && this.updateValue(), e.keyCode === ee.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: vr
  }
}), JO = (e) => (HO("data-v-a7af27e2"), e = e(), zO(), e), XO = { class: "layout-container" }, QO = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], eP = { class: "checkbox hover focus" }, tP = /* @__PURE__ */ JO(() => /* @__PURE__ */ Mo("div", { class: "box" }, [
  /* @__PURE__ */ Mo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Mo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Mo("div", { class: "indeterminate" })
], -1)), nP = ["id", "for"];
function rP(e, r, o, s, a, u) {
  const c = UO("feather-ripple");
  return Ec(), iv("div", XO, [
    Mo("div", {
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
      Mo("div", eP, [
        tP,
        e.disabled ? sv("", !0) : (Ec(), WO(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? sv("", !0) : (Ec(), iv("label", {
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
var Go = /* @__PURE__ */ GO(KO, [["render", rP], ["__scopeId", "data-v-a7af27e2"]]);
const oP = ug(cd({}, ti), {
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
cg({
  props: oP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    ni(e);
    const o = Ic(e, "error"), s = ya(() => ce("feather-checkbox-group")), a = ya(() => ce("feather-input-description")), u = ya(() => ce("feather-input-label")), c = ya(() => {
      const _ = JSON.parse(JSON.stringify(r.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!o.value), ug(cd({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = YO(s.value), { validate: w } = Qo(f, Ic(e, "modelValue"), e.label, e.schema, Ic(e, "error"));
    return cd({
      groupId: s,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === s.value && (f.value = _);
      }
    }, ei(r.attrs));
  },
  components: {
    InputSubText: Xo
  }
});
const iP = window.Vue.openBlock, sP = window.Vue.createElementBlock, dg = window.Vue.createElementVNode;
var aP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const lP = {}, uP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cP = /* @__PURE__ */ dg("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), dP = /* @__PURE__ */ dg("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), fP = [
  cP,
  dP
];
function hP(e, r) {
  return iP(), sP("svg", uP, fP);
}
var pP = /* @__PURE__ */ aP(lP, [["render", hP]]);
var wP = Object.defineProperty, vP = Object.defineProperties, mP = Object.getOwnPropertyDescriptors, av = Object.getOwnPropertySymbols, _P = Object.prototype.hasOwnProperty, gP = Object.prototype.propertyIsEnumerable, lv = (e, r, o) => r in e ? wP(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Oo = (e, r) => {
  for (var o in r || (r = {}))
    _P.call(r, o) && lv(e, o, r[o]);
  if (av)
    for (var o of av(r))
      gP.call(r, o) && lv(e, o, r[o]);
  return e;
}, fg = (e, r) => vP(e, mP(r));
const $P = window.Vue.defineComponent, xc = window.Vue.toRef, yP = window.Vue.computed, uv = window.Vue.resolveComponent, cv = window.Vue.openBlock, dv = window.Vue.createElementBlock, fv = window.Vue.mergeProps, hv = window.Vue.createVNode, bP = window.Vue.normalizeClass, pv = window.Vue.withCtx, VP = window.Vue.createElementVNode, CP = window.Vue.toDisplayString, SP = window.Vue.createCommentVNode;
var kP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const EP = fg(Oo(Oo({}, ul), ti), {
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
    ni(e), cl(e);
    const o = xc(e, "id"), s = yP(() => o.value ? o.value : ce("feather-textarea-label")), { validate: a } = Qo(s, xc(e, "modelValue"), e.label, e.schema, xc(e, "error"));
    return Oo({
      inputId: s,
      incomingId: o,
      validate: a
    }, ei(r.attrs));
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
      return ce("feather-textarea-description");
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
      const e = Oo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), fg(Oo(Oo({}, e), this.listeners), {
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
    InputSubText: Xo,
    InputWrapper: ll
  }
}), AP = ["maxlength"], BP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function TP(e, r, o, s, a, u) {
  const c = uv("InputWrapper"), f = uv("InputSubText");
  return cv(), dv("div", fv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    hv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: bP(["feather-textarea-content", e.contentCls])
    }, {
      default: pv(() => [
        VP("textarea", fv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, AP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    hv(f, { id: e.descriptionId }, {
      right: pv(() => [
        e.maxlength ? (cv(), dv("div", BP, CP(e.charCount), 1)) : SP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var dd = /* @__PURE__ */ kP(xP, [["render", TP], ["__scopeId", "data-v-0648df5c"]]);
const DP = window.Pinia.defineStore, gl = DP("appStore", {
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
}), NP = window.Vue.defineComponent, wv = window.Vue.toDisplayString, Mi = window.Vue.createElementVNode, Pr = window.Vue.unref, So = window.Vue.openBlock, vv = window.Vue.createBlock, Oi = window.Vue.createCommentVNode, mv = window.Vue.createVNode, ba = window.Vue.createElementBlock, LP = window.Vue.normalizeClass;
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
}, qP = window.Vue.watch, _v = window.Vue.ref, HP = /* @__PURE__ */ NP({
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
    const r = e, o = gl(), s = _v(!1), a = _v((w = r.memo) == null ? void 0 : w.body);
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
    return (v, _) => (So(), ba("div", {
      class: LP([r.boxType === "small" ? "box-small" : "box"])
    }, [
      Mi("div", MP, [
        Mi("div", OP, wv(e.label), 1),
        Mi("div", PP, [
          Mi("div", RP, [
            s.value ? Oi("", !0) : (So(), vv(Pr(Z), {
              key: 0,
              icon: Pr(pP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          s.value ? (So(), ba("div", FP, [
            mv(Pr(Z), {
              icon: Pr(zo),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Oi("", !0),
          a.value && a.value != "" || s.value ? (So(), ba("div", UP, [
            mv(Pr(Z), {
              icon: Pr(Ko),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Oi("", !0)
        ])
      ]),
      Mi("div", null, [
        !s.value && a.value != null ? (So(), ba("div", WP, wv(a.value), 1)) : Oi("", !0),
        s.value ? (So(), vv(Pr(dd), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Oi("", !0)
      ])
    ], 2));
  }
});
const Xa = /* @__PURE__ */ de(HP, [["__scopeId", "data-v-3f44e250"]]), zP = window.Vue.defineComponent, Rr = window.Vue.unref, ko = window.Vue.createVNode, Pi = window.Vue.toDisplayString, pn = window.Vue.createElementVNode, gv = window.Vue.openBlock, $v = window.Vue.createElementBlock, yv = window.Vue.createCommentVNode, Ac = window.Vue.createTextVNode, YP = window.Vue.pushScopeId, GP = window.Vue.popScopeId, Pd = (e) => (YP("data-v-02d1e7f0"), e = e(), GP(), e), jP = {
  key: 0,
  class: "card"
}, ZP = { class: "row" }, KP = {
  key: 0,
  class: "ack"
}, JP = /* @__PURE__ */ Pd(() => /* @__PURE__ */ pn("strong", null, " Duration: ", -1)), XP = ["innerHTML"], QP = /* @__PURE__ */ Pd(() => /* @__PURE__ */ pn("strong", null, "First Event", -1)), eR = /* @__PURE__ */ Pd(() => /* @__PURE__ */ pn("strong", null, "Last Event", -1)), tR = { class: "section memo-boxes" }, bv = window.Vue.ref, nR = window.Vue.watch, rR = /* @__PURE__ */ zP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, s = bv(!1), a = bv(o.alarm), u = new Date().getTime();
    nR(o, () => {
      a.value = o.alarm, s.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const c = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (w) => {
      const v = await t_(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, T, D;
      return a.value ? (gv(), $v("div", jP, [
        pn("div", null, [
          pn("div", ZP, [
            ko(Rr(Go), {
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
            }, Pi(a.value.nodeLabel) + " - " + Pi(a.value.id), 1),
            ko(ag, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (gv(), $v("div", KP, [
              ko(Rr(Z), {
                icon: Rr(zo),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : yv("", !0)
          ]),
          pn("div", null, [
            JP,
            Ac(" " + Pi(Rr(il)(Rr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          pn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, XP),
          pn("div", null, [
            QP,
            Ac(" - " + Pi(Rr(kn)(a.value.firstEventTime)), 1)
          ]),
          pn("div", null, [
            eR,
            Ac(" - " + Pi(Rr(kn)(a.value.lastEventTime)), 1)
          ]),
          pn("div", tR, [
            ko(Xa, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            ko(Xa, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (D = a.value) == null ? void 0 : D.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        ko(lg, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : yv("", !0);
    };
  }
});
const oR = /* @__PURE__ */ de(rR, [["__scopeId", "data-v-02d1e7f0"]]), iR = window.Vue.openBlock, sR = window.Vue.createElementBlock, hg = window.Vue.createElementVNode;
var aR = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const lR = {}, uR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, cR = /* @__PURE__ */ hg("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), dR = /* @__PURE__ */ hg("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), fR = [
  cR,
  dR
];
function hR(e, r) {
  return iR(), sR("svg", uR, fR);
}
var fd = /* @__PURE__ */ aR(lR, [["render", hR]]);
const pR = window.Vue.watch, wR = window.Vue.ref, vR = window.Vue.onBeforeUnmount, pg = (e) => {
  const r = wR(!1), o = (s) => {
    s.keyCode === ee.ESCAPE && (s.preventDefault(), r.value = !r.value);
  };
  return pR(e, (s) => {
    s ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), vR(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, mR = window.Vue.watch, wg = (e) => {
  let r;
  mR(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, vg = window.Vue.watch, mg = window.Vue.onBeforeUnmount, _g = window.Vue.nextTick, _R = window.Vue.onMounted, gg = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, Qa = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, $g = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  mg(() => Qa(r, o)), _R(() => vg(e, (s) => {
    s ? _g(() => {
      r = gg(o);
    }) : Qa(r, o);
  }, { immediate: !0 }));
}, gR = (e, r) => {
  let o;
  mg(() => Qa(o, r.value ? r.value.offsetParent : !1)), vg([e, r], ([s, a]) => {
    s && a ? _g(() => {
      o = gg(a.offsetParent);
    }) : a && Qa(o, a.offsetParent);
  }, {
    immediate: !0
  });
};
var $R = Object.defineProperty, Vv = Object.getOwnPropertySymbols, yR = Object.prototype.hasOwnProperty, bR = Object.prototype.propertyIsEnumerable, Cv = (e, r, o) => r in e ? $R(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, VR = (e, r) => {
  for (var o in r || (r = {}))
    yR.call(r, o) && Cv(e, o, r[o]);
  if (Vv)
    for (var o of Vv(r))
      bR.call(r, o) && Cv(e, o, r[o]);
  return e;
};
const Rd = window.Vue.defineComponent, os = window.Vue.ref, CR = window.Vue.nextTick, yg = window.Vue.openBlock, bg = window.Vue.createElementBlock, Fd = window.Vue.createElementVNode, SR = window.Vue.renderSlot, kR = window.Vue.resolveComponent, ER = window.Vue.normalizeClass, IR = window.Vue.withModifiers, xR = window.Vue.createVNode, Sv = window.Vue.toRef, kv = window.Vue.computed, Ev = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Vg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const AR = {
  enable: {
    type: Boolean,
    required: !0
  }
}, BR = Rd({
  props: AR,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = os(), r = os(!1), o = (_, $) => {
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
      $ && $.focus ? CR(() => {
        $.focus();
      }) : s(_);
    }, w = os();
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
}), TR = /* @__PURE__ */ Fd("div", { tabindex: "0" }, null, -1), DR = {
  class: "focus-trap-content",
  ref: "content"
}, NR = /* @__PURE__ */ Fd("div", { tabindex: "0" }, null, -1);
function LR(e, r, o, s, a, u) {
  return yg(), bg("div", null, [
    TR,
    Fd("div", DR, [
      SR(e.$slots, "default")
    ], 512),
    NR
  ]);
}
var Cg = /* @__PURE__ */ Vg(BR, [["render", LR]]);
const MR = Rd({
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
    icon: () => Ko
  },
  components: {
    FeatherIcon: Z
  }
}), OR = ["aria-label"];
function PR(e, r, o, s, a, u) {
  const c = kR("FeatherIcon");
  return yg(), bg("a", {
    href: "#",
    class: ER(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = IR((f) => e.$emit("close"), ["prevent"]))
  }, [
    xR(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, OR);
}
var Sg = /* @__PURE__ */ Vg(MR, [["render", PR], ["__scopeId", "data-v-fc0f3f00"]]);
const kg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, RR = {
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
    default: () => kg,
    validator: (e) => !!e.title
  }
}, FR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
Rd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: FR,
  props: RR,
  setup(e, r) {
    const o = al(Sv(e, "labels"), kg), s = Sv(e, "modelValue"), a = os(), u = () => {
      r.emit("update:modelValue", !1);
    }, c = kv(() => !!r.slots.footer), f = kv(() => ce("dialog-header"));
    e.relative ? gR(s, a) : $g(s), wg(s), Ev(pg(s), () => {
      u();
    });
    const w = os(e.modelValue);
    return Ev(w, (v) => {
      v ? r.emit("shown") : r.emit("hidden");
    }), VR({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, o);
  },
  components: {
    FocusTrap: Cg,
    DialogClose: Sg
  }
});
var UR = Object.defineProperty, Iv = Object.getOwnPropertySymbols, WR = Object.prototype.hasOwnProperty, qR = Object.prototype.propertyIsEnumerable, xv = (e, r, o) => r in e ? UR(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, $l = (e, r) => {
  for (var o in r || (r = {}))
    WR.call(r, o) && xv(e, o, r[o]);
  if (Iv)
    for (var o of Iv(r))
      qR.call(r, o) && xv(e, o, r[o]);
  return e;
};
const yl = window.Vue.defineComponent, Av = window.Vue.toRef, Bv = window.Vue.watch, Tv = window.Vue.ref, Dv = window.Vue.resolveComponent, Va = window.Vue.openBlock, Nv = window.Vue.createBlock, HR = window.Vue.Teleport, Lv = window.Vue.createElementBlock, Bc = window.Vue.createVNode, Mv = window.Vue.Transition, Tc = window.Vue.withCtx, Ov = window.Vue.createCommentVNode, zR = window.Vue.withDirectives, YR = window.Vue.normalizeStyle, GR = window.Vue.normalizeClass, Pv = window.Vue.createElementVNode, jR = window.Vue.renderSlot, ZR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var KR = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const Eg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, JR = {
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
    default: () => Eg,
    validator: (e) => !!e.title
  }
}, XR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, QR = yl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: XR,
  props: JR,
  setup(e, r) {
    const o = al(Av(e, "labels"), Eg), s = Av(e, "modelValue"), a = () => {
      r.emit("update:modelValue", !1);
    };
    $g(s), wg(s), Bv(pg(s), () => {
      a();
    });
    const u = Tv(), c = Tv(!1);
    return Bv(c, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), $l({ close: a, shown: c, isShown: s, element: u }, o);
  },
  components: {
    DialogClose: Sg,
    FocusTrap: Cg
  }
}), e8 = {
  key: 0,
  class: "drawer-container feather-styles"
}, t8 = {
  key: 0,
  class: "greyedOut"
}, n8 = ["aria-label"], r8 = { class: "slot" };
function o8(e, r, o, s, a, u) {
  const c = Dv("dialog-close"), f = Dv("focus-trap");
  return Va(), Nv(HR, { to: "body" }, [
    e.modelValue ? (Va(), Lv("div", e8, [
      Bc(Mv, { name: "greyOutShim" }, {
        default: Tc(() => [
          e.modelValue ? (Va(), Lv("div", t8)) : Ov("", !0)
        ]),
        _: 1
      }),
      Bc(Mv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (w) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (w) => e.shown = !1)
      }, {
        default: Tc(() => [
          zR((Va(), Nv(f, {
            enable: e.modelValue,
            style: YR({ width: e.width }),
            key: "sect",
            class: GR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Tc(() => [
              Pv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Pv("div", r8, [
                  jR(e.$slots, "default", {}, void 0, !0)
                ]),
                Bc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, n8)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [ZR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Ov("", !0)
  ]);
}
var Ig = /* @__PURE__ */ KR(QR, [["render", o8], ["__scopeId", "data-v-0a36e1dc"]]);
const i8 = $l({
  label: {
    type: String,
    required: !0
  }
}, X_);
yl({
  name: "DrawerTab",
  props: i8,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = Kr(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      Jr(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return Q_(e);
  },
  components: {
    FeatherRipple: vr
  }
});
const s8 = $l({}, ng), a8 = tg;
yl({
  emits: a8,
  model: eg,
  props: s8,
  setup(e, r) {
    return rg(e, r);
  }
});
const l8 = $l({
  header: {
    type: String
  }
}, og);
yl({
  name: "DrawerTabContent",
  props: l8,
  setup(e) {
    return ig(e);
  },
  directives: {
    MenuFocusLoop: _T
  }
});
const u8 = window.Vue.defineComponent, xg = window.Vue.createElementVNode, Rv = window.Vue.createVNode, c8 = window.Vue.renderList, d8 = window.Vue.Fragment, Ri = window.Vue.openBlock, Dc = window.Vue.createElementBlock, Fv = window.Vue.createBlock, f8 = window.Vue.unref, h8 = window.Vue.withCtx, p8 = window.Vue.pushScopeId, w8 = window.Vue.popScopeId, v8 = (e) => (p8("data-v-c7c65659"), e = e(), w8(), e), m8 = { class: "content" }, _8 = /* @__PURE__ */ v8(() => /* @__PURE__ */ xg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), g8 = {
  key: 0,
  class: "situation-list"
}, Nc = window.Vue.ref, Uv = window.Vue.watch, $8 = /* @__PURE__ */ u8({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, s = vn(), a = Nc(o.visible), u = () => {
      let v = s.situations;
      o.situationId !== 0 && (v = s.situations.filter(
        (_) => _.id != o.situationId
      )), c.value = v, f.value = v;
    }, c = Nc(s.situations), f = Nc(s.situations);
    Uv(o, () => {
      a.value = o.visible, u();
    }), Uv(
      () => s.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (Ri(), Fv(f8(Ig), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: h8(() => [
        xg("div", m8, [
          _8,
          Rv(oi, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Ri(), Dc("div", g8, [
            (Ri(!0), Dc(d8, null, c8(f.value, ($) => (Ri(), Dc("div", {
              class: "card",
              key: $.id
            }, [
              Rv(__, {
                onClick: (y) => r("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Ri(), Fv(ii, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Ag = /* @__PURE__ */ de($8, [["__scopeId", "data-v-c7c65659"]]), y8 = window.Vue.defineComponent, Wv = window.Vue.normalizeClass, No = window.Vue.createElementVNode, Ca = window.Vue.unref, b8 = window.Vue.createVNode, Sa = window.Vue.toDisplayString, V8 = window.Vue.createTextVNode, C8 = window.Vue.openBlock, S8 = window.Vue.createElementBlock, k8 = window.Vue.pushScopeId, E8 = window.Vue.popScopeId, I8 = (e) => (k8("data-v-e1e9b696"), e = e(), E8(), e), x8 = { class: "alarmInfo" }, A8 = { class: "alarm-title" }, B8 = /* @__PURE__ */ I8(() => /* @__PURE__ */ No("strong", null, " Duration: ", -1)), T8 = { class: "description" }, D8 = /* @__PURE__ */ y8({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, s = new Date().getTime();
    return (a, u) => (C8(), S8("div", {
      class: Wv(["alarm", { selected: o.selected }])
    }, [
      No("div", x8, [
        No("div", {
          class: Wv(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        b8(Ca(Go), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        No("div", A8, Sa(e.alarm.nodeLabel) + " - " + Sa(e.alarm.id), 1)
      ]),
      No("div", null, [
        B8,
        V8(" " + Sa(Ca(il)(Ca(s), new Date(e.alarm.firstEventTime))), 1)
      ]),
      No("div", T8, Sa(Ca(c_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const Ud = /* @__PURE__ */ de(D8, [["__scopeId", "data-v-e1e9b696"]]), N8 = window.Vue.defineComponent, Pa = window.Vue.createElementVNode, Eo = window.Vue.unref, L8 = window.Vue.toDisplayString, qv = window.Vue.withCtx, Lc = window.Vue.createVNode, M8 = window.Vue.renderList, O8 = window.Vue.Fragment, Fi = window.Vue.openBlock, Mc = window.Vue.createElementBlock, Hv = window.Vue.createBlock, P8 = window.Vue.pushScopeId, R8 = window.Vue.popScopeId, F8 = (e) => (P8("data-v-4bc80d4b"), e = e(), R8(), e), U8 = { class: "content" }, W8 = { class: "header" }, q8 = /* @__PURE__ */ F8(() => /* @__PURE__ */ Pa("h4", null, "ADD ALARMS", -1)), H8 = {
  key: 0,
  class: "alarms-list"
}, ka = window.Vue.ref, zv = window.Vue.watch, z8 = /* @__PURE__ */ N8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: r }) {
    const o = e, s = vn(), a = ka(o.visible), u = ka([]), c = ka(["all"]), f = ka(s.unassignedAlarms);
    zv(o, () => {
      a.value = o.visible, u.value = [], f.value = s.unassignedAlarms;
    }), zv(
      () => s.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      _e.exports.includes(u.value, y) ? _e.exports.remove(u.value, (T) => T === y) : u.value.push(y);
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
    return (y, T) => (Fi(), Hv(Eo(Ig), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (D) => a.value = D),
        T[1] || (T[1] = (D) => r("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: qv(() => [
        Pa("div", U8, [
          Pa("div", W8, [
            q8,
            Lc(Eo(ae), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: qv(() => [
                Pa("span", null, "Add " + L8(Eo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Lc(oi, {
            list: Eo(s).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (Fi(), Mc("div", H8, [
            (Fi(!0), Mc(O8, null, M8(f.value, (D) => (Fi(), Mc("div", {
              class: "card",
              key: D.id
            }, [
              Lc(Ud, {
                selected: Eo(_e.exports.includes)(Eo(u), D.id),
                alarm: D,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (Fi(), Hv(ii, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Y8 = /* @__PURE__ */ de(z8, [["__scopeId", "data-v-4bc80d4b"]]), G8 = window.Vue.openBlock, j8 = window.Vue.createElementBlock, Bg = window.Vue.createElementVNode;
var Z8 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const K8 = {}, J8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, X8 = /* @__PURE__ */ Bg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), Q8 = /* @__PURE__ */ Bg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), e5 = [
  X8,
  Q8
];
function t5(e, r) {
  return G8(), j8("svg", J8, e5);
}
var Yv = /* @__PURE__ */ Z8(K8, [["render", t5]]);
const n5 = window.Vue.defineComponent, Pt = window.Vue.createElementVNode, ot = window.Vue.unref, ht = window.Vue.createVNode, Ui = window.Vue.withCtx, r5 = window.Vue.renderList, Gv = window.Vue.Fragment, Wi = window.Vue.openBlock, Ea = window.Vue.createElementBlock, o5 = window.Vue.createBlock, i5 = window.Vue.pushScopeId, s5 = window.Vue.popScopeId, si = (e) => (i5("data-v-524b0835"), e = e(), s5(), e), a5 = { class: "container" }, l5 = { class: "header" }, u5 = /* @__PURE__ */ si(() => /* @__PURE__ */ Pt("div", { class: "title" }, "Alarms", -1)), c5 = /* @__PURE__ */ si(() => /* @__PURE__ */ Pt("span", null, "Add Alarms", -1)), d5 = { class: "alarms-container" }, f5 = { class: "filters" }, h5 = { class: "list" }, p5 = { class: "row actions" }, w5 = /* @__PURE__ */ si(() => /* @__PURE__ */ Pt("span", null, "Clear", -1)), v5 = /* @__PURE__ */ si(() => /* @__PURE__ */ Pt("span", null, "Acknowledge", -1)), m5 = /* @__PURE__ */ si(() => /* @__PURE__ */ Pt("span", null, "Move", -1)), _5 = /* @__PURE__ */ si(() => /* @__PURE__ */ Pt("span", null, "Remove", -1)), g5 = { class: "section" }, $5 = {
  key: 0,
  class: "alarm-list"
}, Ia = window.Vue.ref, y5 = window.Vue.watch, b5 = window.Vue.reactive, V5 = window.Vue.markRaw, C5 = /* @__PURE__ */ n5({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = V5({
      Add: _l,
      Delete: Yv,
      MarkComplete: Ja,
      CheckCircle: zo,
      ExitToApp: fd
    }), s = gl(), a = vn(), u = Ia(!1), c = Ia(["all"]), f = Ia(!1), w = Ia(!1), v = b5({
      selectedAlarms: [],
      alarms: r.alarms
    });
    y5(r, () => {
      c.value = ["all"], v.alarms = r.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (x) => {
      v.selectedAlarms.includes(x) ? _e.exports.remove(v.selectedAlarms, (R) => R == x) : v.selectedAlarms.push(x);
    }, $ = async (x) => {
      v.selectedAlarms.length ? (await jk(v.selectedAlarms, x), a.getSituation(r.situationId), v.selectedAlarms = [], u.value = !1) : s.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === r.alarms.length ? (s.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (s.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await rw(
        r.situationId,
        v.selectedAlarms
      ) ? a.getSituation(r.situationId) : s.showErrorMsg("Error on removing alarms :("));
    }, D = async (x) => {
      y() && (await rw(
        r.situationId,
        v.selectedAlarms
      ) ? await M(x, v.selectedAlarms) : s.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, M = async (x, R) => {
      R.length ? await m_(x, R) ? a.getSituation(x) : s.showErrorMsg("Error on moving the alarms :(") : s.showErrorMsg("You need to select the alarms");
    }, L = async (x) => {
      await M(r.situationId, x), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : s.showErrorMsg("You need to choose at least one alarm!");
    }, k = (x) => {
      v.alarms = x;
    };
    return (x, R) => (Wi(), Ea(Gv, null, [
      Pt("div", a5, [
        Pt("div", l5, [
          u5,
          ht(ot(ae), {
            class: "add-alarms-btn",
            onClick: R[0] || (R[0] = (I) => w.value = !0)
          }, {
            default: Ui(() => [
              ht(ot(Z), {
                icon: ot(o).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              c5
            ]),
            _: 1
          })
        ]),
        Pt("div", d5, [
          Pt("div", f5, [
            ht(oi, {
              list: r.alarms,
              onFilteredList: k,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Pt("div", h5, [
            Pt("div", p5, [
              ht(ot(Go), {
                modelValue: u.value,
                "onUpdate:modelValue": R[1] || (R[1] = (I) => u.value = I),
                label: "selected"
              }, null, 8, ["modelValue"]),
              ht(ot(ae), {
                onClick: R[2] || (R[2] = () => $("clear"))
              }, {
                default: Ui(() => [
                  ht(ot(Z), {
                    icon: ot(Ja),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  w5
                ]),
                _: 1
              }),
              ht(ot(ae), {
                onClick: R[3] || (R[3] = () => $("ack"))
              }, {
                default: Ui(() => [
                  ht(ot(Z), {
                    icon: ot(zo),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  v5
                ]),
                _: 1
              }),
              ht(ot(ae), { onClick: S }, {
                default: Ui(() => [
                  ht(ot(Z), {
                    icon: ot(fd),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  m5
                ]),
                _: 1
              }),
              ht(ot(ae), { onClick: T }, {
                default: Ui(() => [
                  ht(ot(Z), {
                    icon: ot(Yv),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  _5
                ]),
                _: 1
              })
            ]),
            Pt("div", g5, [
              v.alarms.length > 0 ? (Wi(), Ea("div", $5, [
                (Wi(!0), Ea(Gv, null, r5(v.alarms, (I) => (Wi(), Ea("div", {
                  key: I.id
                }, [
                  ht(oR, {
                    alarm: I,
                    selectAll: u.value,
                    "situation-id": r.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (Wi(), o5(ii, { key: 1 }))
            ])
          ])
        ])
      ]),
      ht(Ag, {
        situationId: r.situationId,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: R[4] || (R[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      ht(Y8, {
        visible: w.value,
        onAlarmsSelected: L,
        onDrawerAlarmsClosed: R[5] || (R[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const S5 = /* @__PURE__ */ de(C5, [["__scopeId", "data-v-524b0835"]]), k5 = window.Vue.defineComponent, dn = window.Vue.createVNode, Lt = window.Vue.unref, Oc = window.Vue.normalizeClass, xa = window.Vue.toDisplayString, qi = window.Vue.openBlock, Hi = window.Vue.createElementBlock, jv = window.Vue.createCommentVNode, E5 = window.Vue.withCtx, Qt = window.Vue.createElementVNode, I5 = window.Vue.Fragment, x5 = window.Vue.pushScopeId, A5 = window.Vue.popScopeId, B5 = (e) => (x5("data-v-e980d1e2"), e = e(), A5(), e), T5 = { class: "section" }, D5 = { class: "action-section" }, N5 = { class: "btn-row" }, L5 = { key: 0 }, M5 = { key: 1 }, O5 = {
  key: 0,
  class: "situation-detail"
}, P5 = { class: "situation-info" }, R5 = { class: "id" }, F5 = ["innerHTML"], U5 = /* @__PURE__ */ B5(() => /* @__PURE__ */ Qt("p", null, null, -1)), W5 = { class: "boxes" }, q5 = { class: "parameters" }, H5 = { class: "section memo-boxes" }, z5 = { key: 0 }, Y5 = window.Vue.computed, Zv = window.Vue.ref, G5 = window.Vue.watch, j5 = /* @__PURE__ */ k5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = gl(), s = vn(), a = et.REJECTED, u = Zv(r.situationInfo.status), c = Zv(r.situationInfo);
    G5(r, () => {
      u.value = r.situationInfo.status || "", c.value = r.situationInfo;
    });
    const f = Y5(
      () => {
        var v;
        return u_(((v = c.value) == null ? void 0 : v.description) || "");
      }
    ), w = async (v) => {
      var $;
      await v_(
        ($ = r.situationInfo) == null ? void 0 : $.id,
        v.toLowerCase()
      ) ? (u.value = v, s.getSituation(r.situationInfo.id)) : o.showErrorMsg("Error on rejecting the situation");
    };
    return (v, _) => {
      var $, y, T, D, M, L, S, k, x, R, I, P;
      return qi(), Hi(I5, null, [
        Qt("div", T5, [
          Qt("div", D5, [
            dn(lg, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            Qt("div", N5, [
              dn(Lt(ae), {
                class: Oc(["btn", { rejected: u.value == Lt(a) }]),
                "data-test": "btn-reject",
                onClick: _[0] || (_[0] = (O) => w(Lt(a)))
              }, {
                default: E5(() => [
                  dn(Lt(Z), {
                    icon: Lt(n_),
                    "aria-hidden": "true",
                    class: Oc(["icon reject", { rejected: u.value == Lt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Lt(a) ? (qi(), Hi("span", L5, xa(Lt(a)), 1)) : (qi(), Hi("span", M5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (qi(), Hi("div", O5, [
            Qt("div", {
              class: Oc(["severity-line", [`${(y = ($ = c.value) == null ? void 0 : $.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            Qt("div", P5, [
              Qt("div", R5, [
                Qt("div", null, " Situation - " + xa((T = c.value) == null ? void 0 : T.id) + " - " + xa(c.value.alarms.length) + " alarm(s) affects " + xa(Lt(_e.exports.size)(Lt(_e.exports.groupBy)((D = c.value) == null ? void 0 : D.alarms, "nodeId"))) + " node(s) ", 1),
                dn(ag, {
                  severity: (M = c.value) == null ? void 0 : M.severity
                }, null, 8, ["severity"])
              ]),
              Qt("span", {
                innerHTML: Lt(f),
                "data-test": "situation-description"
              }, null, 8, F5),
              U5,
              Qt("div", W5, [
                dn($c, {
                  label: "First Event",
                  info: Lt(kn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                dn($c, {
                  label: "Last Event",
                  info: Lt(kn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                dn($c, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            Qt("div", q5, [
              dn(sO, {
                alarms: (L = c.value) == null ? void 0 : L.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : jv("", !0),
          Qt("div", H5, [
            dn(Xa, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (x = c.value) == null ? void 0 : x.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            dn(Xa, {
              id: (R = c.value) == null ? void 0 : R.id,
              situationId: (I = c.value) == null ? void 0 : I.id,
              label: "Journal Memo",
              type: "journal",
              memo: (P = c.value) == null ? void 0 : P.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (qi(), Hi("div", z5, [
          dn(S5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : jv("", !0)
      ], 64);
    };
  }
});
const Z5 = /* @__PURE__ */ de(j5, [["__scopeId", "data-v-e980d1e2"]]);
var K5 = Object.defineProperty, J5 = Object.defineProperties, X5 = Object.getOwnPropertyDescriptors, Kv = Object.getOwnPropertySymbols, Q5 = Object.prototype.hasOwnProperty, e7 = Object.prototype.propertyIsEnumerable, Jv = (e, r, o) => r in e ? K5(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, hd = (e, r) => {
  for (var o in r || (r = {}))
    Q5.call(r, o) && Jv(e, o, r[o]);
  if (Kv)
    for (var o of Kv(r))
      e7.call(r, o) && Jv(e, o, r[o]);
  return e;
}, t7 = (e, r) => J5(e, X5(r));
const Tg = window.Vue.defineComponent, Gr = window.Vue.resolveComponent, Ra = window.Vue.openBlock, Xv = window.Vue.createBlock, Fa = window.Vue.mergeProps, jr = window.Vue.withCtx, Dg = window.Vue.createElementBlock, n7 = window.Vue.Fragment, r7 = window.Vue.renderList, o7 = window.Vue.createTextVNode, i7 = window.Vue.toDisplayString, s7 = window.Vue.computed, Qv = window.Vue.toRef, zi = window.Vue.createVNode, em = window.Vue.toHandlers, a7 = window.Vue.renderSlot, l7 = window.Vue.normalizeClass, u7 = window.Vue.createElementVNode;
var Ng = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const c7 = Tg({
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
      return ce("feather-select-active");
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
        ls(r, this.$refs.list.$el);
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
    FeatherList: xd,
    FeatherListItem: fs
  }
});
function d7(e, r, o, s, a, u) {
  const c = Gr("FeatherListItem"), f = Gr("FeatherList");
  return Ra(), Xv(f, Fa(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: jr(() => [
      (Ra(!0), Dg(n7, null, r7(e.options, (w, v) => (Ra(), Xv(c, {
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
        default: jr(() => [
          o7(i7(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var f7 = /* @__PURE__ */ Ng(c7, [["render", d7], ["__scopeId", "data-v-eae820da"]]);
const h7 = t7(hd(hd({}, ul), ti), {
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
}), p7 = {
  "update:modelValue": (e) => !0
}, w7 = Tg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: p7,
  props: h7,
  setup(e, r) {
    ni(e), cl(e);
    const o = s7(() => ce("feather-select-input")), { validate: s } = Qo(o, Qv(e, "modelValue"), e.label, e.schema, Qv(e, "error"));
    return hd({
      inputId: o,
      validate: s
    }, ei(r.attrs));
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
      return ce("feather-select-description");
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
    icon: () => wl
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
      if (e.keyCode === ee.ENTER)
        e.preventDefault(), this.showMenu = !this.showMenu, this.showMenu || this.$nextTick(() => {
          this.$refs.input.focus();
        });
      else if (e.keyCode === ee.ESCAPE)
        this.closeMenu(), e.stopPropagation();
      else if (e.keyCode === ee.DOWN)
        e.preventDefault(), this.activeIndex + 1 < this.options.length && this.select(this.options[this.activeIndex + 1]), this.showMenu = !0;
      else if (e.keyCode === ee.UP)
        e.preventDefault(), this.activeIndex - 1 >= 0 && this.select(this.options[this.activeIndex - 1]), this.showMenu = !0;
      else if (e.keyCode === ee.HOME)
        e.preventDefault(), this.select(this.options[0]), this.showMenu = !0;
      else if (e.keyCode === ee.END)
        e.preventDefault(), this.select(this.options[this.options.length - 1]), this.showMenu = !0;
      else if (this.showMenu) {
        const r = String.fromCharCode(e.keyCode);
        this.charsSoFar += r, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      Jr(this.delayTimeout), this.delayTimeout = Kr(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: ll,
    InputSubText: Xo,
    FeatherMenu: x_,
    List: f7,
    FeatherIcon: Z
  }
});
function v7(e, r, o, s, a, u) {
  const c = Gr("FeatherIcon"), f = Gr("InputWrapper"), w = Gr("List"), v = Gr("FeatherMenu"), _ = Gr("InputSubText");
  return Ra(), Dg("div", Fa(e.inherittedAttrs, { class: "feather-select-container" }), [
    zi(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: jr(($) => [
        zi(f, Fa({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, em($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: jr(() => [
            a7(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: jr(() => [
            zi(c, {
              class: l7(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: jr(() => [
            u7("input", Fa(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, em(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: jr(() => [
        zi(w, {
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
    zi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var m7 = /* @__PURE__ */ Ng(w7, [["render", v7], ["__scopeId", "data-v-ecb32d90"]]);
const _7 = window.Vue.openBlock, g7 = window.Vue.createElementBlock, Lg = window.Vue.createElementVNode;
var $7 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const y7 = {}, b7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, V7 = /* @__PURE__ */ Lg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), C7 = /* @__PURE__ */ Lg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), S7 = [
  V7,
  C7
];
function k7(e, r) {
  return _7(), g7("svg", b7, S7);
}
var E7 = /* @__PURE__ */ $7(y7, [["render", k7]]);
const Ua = window.Vue.openBlock, pd = window.Vue.createElementBlock, Mg = window.Vue.createElementVNode, I7 = window.Vue.defineComponent, Fr = window.Vue.ref, x7 = window.Vue.provide, tm = window.Vue.computed, A7 = window.Vue.onUnmounted, nm = window.Vue.toRef, B7 = window.Vue.resolveComponent, T7 = window.Vue.Fragment, D7 = window.Vue.createBlock, N7 = window.Vue.Teleport, rm = window.Vue.createVNode, L7 = window.Vue.Transition, M7 = window.Vue.withCtx, O7 = window.Vue.normalizeClass, P7 = window.Vue.normalizeStyle, R7 = window.Vue.toDisplayString, F7 = window.Vue.createCommentVNode, U7 = window.Vue.renderSlot, Pc = window.Vue.nextTick;
var Og = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const W7 = {}, q7 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, H7 = /* @__PURE__ */ Mg("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), z7 = [
  H7
];
function Y7(e, r) {
  return Ua(), pd("svg", q7, z7);
}
var G7 = /* @__PURE__ */ Og(W7, [["render", Y7]]), Qe = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(Qe || {}), Wn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Wn || {});
const j7 = (e, r, o, s = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= r.height + s && c.push(Qe.top), a >= r.height + s && c.push(Qe.bottom);
  const f = [];
  u >= r.width + s && f.push(Qe.right), e.left >= r.width + s && f.push(Qe.left);
  let w = [...f, ...c];
  return (o === Qe.top || o === Qe.bottom) && (w = [...c, ...f]), w.indexOf(o) > -1 ? o : w.length ? w[0] : o;
}, Z7 = (e, r, o, s, a = 28) => {
  if (e === Qe.left || e === Qe.right)
    return Wn.center;
  const u = r.left + r.width / 2, c = window.innerWidth - r.right, f = [], w = u, v = c + r.width / 2, _ = o.width - a, $ = o.width / 2;
  return w >= $ && v >= $ && f.push(Wn.center), v >= _ && f.push(Wn.left), w >= _ && f.push(Wn.right), f.indexOf(s) > -1 ? s : f.length ? f[0] : s;
}, K7 = {
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
}, J7 = I7({
  props: K7,
  setup(e) {
    const r = Fr(!1), o = Fr(!1), s = ce("feather-tooltip-trigger"), a = ce("feather-tooltip"), u = "data-feather-tooltip";
    x7("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      Jr(c), r.value || (c = Kr(M, e.enterDelay));
    }, w = () => {
      Jr(c), c = Kr(L, e.exitDelay);
    }, v = (ye) => {
      ye.keyCode === ee.ESCAPE && (ye.preventDefault(), L(!0));
    }, _ = tm(() => ({
      [u]: s,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = Fr(document), T = I_(y, () => L(!0));
    A7(() => L(!0));
    const D = () => document.getElementById(a), M = () => {
      o.value = !1, r.value = !0, Pc(() => {
        const ye = D();
        le(ye), r.value = !1, Pc(() => {
          o.value = !0, r.value = !0, T.value = !0;
        });
      });
    }, L = (ye = !1) => {
      P.value = "", I.value = "", O.value = "", H.value = "", r.value = !1, ye && (o.value = !1), T.value = !1;
    }, S = nm(e, "placement"), k = nm(e, "pointerAlignment"), x = 8, R = 24, I = Fr(""), P = Fr(""), O = Fr(""), H = Fr(""), $e = tm(() => H.value ? "p-" + H.value : !1), le = (ye) => {
      const ge = document.querySelector(`[${u}=${s}]`);
      if (!ge) {
        console.log("trigger not found");
        return;
      }
      Pc(() => {
        const Ee = ge.getBoundingClientRect(), Ae = ye.getBoundingClientRect(), we = j7(Ee, Ae, S.value, x), Fe = Z7(we, Ee, Ae, k.value, R);
        O.value = Fe.toString(), H.value = we.toString();
        let Oe = 0, Ye = 0;
        if ((we === Qe.left || we === Qe.right) && (Oe = Ee.top + Ee.height / 2 - Ae.height / 2, we === Qe.left && (Ye = Ee.left - Ae.width - x), we === Qe.right && (Ye = Ee.right)), we === Qe.top || we === Qe.bottom) {
          Oe = Ee.top - Ae.height - x, we === Qe.bottom && (Oe = Ee.bottom);
          const zn = Ee.left + Ee.width / 2;
          switch (Fe) {
            case Wn.center:
              Ye = zn - Ae.width / 2;
              break;
            case Wn.left:
              Ye = zn - R;
              break;
            case Wn.right:
              Ye = zn - Ae.width + R;
              break;
          }
        }
        I.value = Oe.toString() + "px", P.value = Ye.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: r,
      animate: o,
      alignmentClass: O,
      placementClass: $e,
      top: I,
      left: P,
      tooltipID: a
    };
  },
  components: {
    Pointer: G7
  }
}), X7 = ["id"];
function Q7(e, r, o, s, a, u) {
  const c = B7("Pointer");
  return Ua(), pd(T7, null, [
    (Ua(), D7(N7, { to: "body" }, [
      rm(L7, { css: e.animate }, {
        default: M7(() => [
          e.show ? (Ua(), pd("div", {
            key: 0,
            class: O7(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: P7({ left: e.left, top: e.top })
          }, [
            Mg("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, R7(e.title), 9, X7),
            rm(c, { class: "tooltip-pointer" })
          ], 6)) : F7("", !0)
        ]),
        _: 1
      }, 8, ["css"])
    ])),
    U7(e.$slots, "default", {
      attrs: e.attrs,
      on: e.listeners
    }, void 0, !0)
  ], 64);
}
var om = /* @__PURE__ */ Og(J7, [["render", Q7], ["__scopeId", "data-v-3da6b22e"]]);
const e6 = window.Vue.defineComponent, Rc = window.Vue.normalizeStyle, Fc = window.Vue.createElementVNode, Yi = window.Vue.unref, im = window.Vue.toHandlers, sm = window.Vue.mergeProps, am = window.Vue.withCtx, lm = window.Vue.createVNode, t6 = window.Vue.renderList, n6 = window.Vue.Fragment, Gi = window.Vue.openBlock, ji = window.Vue.createElementBlock, um = window.Vue.normalizeClass, cm = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const r6 = { class: "row" }, o6 = /* @__PURE__ */ e6({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const r = e, o = new Date().getTime(), s = (u, c) => u ? (Number(c) - Number(u)) * r.proportion : 0, a = (u) => u ? (Number(u) - Number(r.minStart)) * r.proportion : 0;
    return (u, c) => (Gi(), ji("div", r6, [
      Fc("div", {
        class: "line-gray",
        style: Rc({
          width: a(r.events[0].createTime) + "px"
        })
      }, null, 4),
      lm(Yi(om), {
        title: Yi(kn)(e.alarm.firstEventTime)
      }, {
        default: am(({ attrs: f, on: w }) => [
          Fc("div", sm({ class: "circle" }, f, im(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (Gi(!0), ji(n6, null, t6(r.events, (f, w) => (Gi(), ji("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[w + 1] ? (Gi(), ji("div", {
          key: 0,
          class: um(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: Rc({
            width: s(f.createTime, r.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : cm("", !0),
        lm(Yi(om), {
          title: Yi(kn)(e.alarm.firstEventTime)
        }, {
          default: am(({ attrs: v, on: _ }) => [
            r.events[w + 1] ? (Gi(), ji("div", sm({ key: 0 }, v, im(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : cm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      Fc("div", {
        class: um(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: Rc({
          width: s(e.events[e.events.length - 1].createTime, Yi(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const i6 = /* @__PURE__ */ de(o6, [["__scopeId", "data-v-3341d12d"]]), s6 = window.Vue.openBlock, a6 = window.Vue.createElementBlock, Pg = window.Vue.createElementVNode;
var l6 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const u6 = {}, c6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, d6 = /* @__PURE__ */ Pg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), f6 = /* @__PURE__ */ Pg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), h6 = [
  d6,
  f6
];
function p6(e, r) {
  return s6(), a6("svg", c6, h6);
}
var w6 = /* @__PURE__ */ l6(u6, [["render", p6]]);
const v6 = window.Vue.defineComponent, wd = window.Vue.createElementVNode, m6 = window.Vue.renderList, dm = window.Vue.Fragment, Uc = window.Vue.openBlock, Wc = window.Vue.createElementBlock, _6 = window.Vue.normalizeClass, g6 = window.Vue.unref, fm = window.Vue.toDisplayString, $6 = window.Vue.pushScopeId, y6 = window.Vue.popScopeId, b6 = (e) => ($6("data-v-2e087f7b"), e = e(), y6(), e), V6 = /* @__PURE__ */ b6(() => /* @__PURE__ */ wd("strong", null, "Events:", -1)), C6 = /* @__PURE__ */ v6({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, s) => (Uc(), Wc(dm, null, [
      V6,
      (Uc(!0), Wc(dm, null, m6(r.events, (a) => (Uc(), Wc("div", {
        class: "event-description",
        key: a.id
      }, [
        wd("div", {
          class: _6(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        wd("div", null, fm(g6(kn)(a.createTime)) + " - " + fm(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const S6 = /* @__PURE__ */ de(C6, [["__scopeId", "data-v-2e087f7b"]]), k6 = window.Vue.defineComponent, E6 = window.Vue.normalizeClass, Ot = window.Vue.createElementVNode, Io = window.Vue.toDisplayString, $t = window.Vue.unref, xo = window.Vue.createVNode, Rg = window.Vue.createTextVNode, I6 = window.Vue.renderList, hm = window.Vue.Fragment, Fn = window.Vue.openBlock, Ur = window.Vue.createElementBlock, pm = window.Vue.createBlock, Aa = window.Vue.createCommentVNode, x6 = window.Vue.normalizeStyle, A6 = window.Vue.pushScopeId, B6 = window.Vue.popScopeId, T6 = (e) => (A6("data-v-01717d0d"), e = e(), B6(), e), D6 = { class: "section detail" }, N6 = { class: "id" }, L6 = {
  key: 0,
  class: "section"
}, M6 = /* @__PURE__ */ T6(() => /* @__PURE__ */ Ot("div", { class: "id" }, "Alarms", -1)), O6 = { class: "action-btns" }, P6 = { class: "zoom" }, R6 = /* @__PURE__ */ Rg(" Zoom "), F6 = { class: "times" }, U6 = {
  key: 0,
  class: "timeline-container"
}, W6 = { class: "alarm-id" }, q6 = {
  key: 0,
  class: "panel"
}, lr = window.Vue.ref, H6 = window.Vue.watch, z6 = /* @__PURE__ */ k6({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var R, I;
    const r = e, o = vn(), s = lr(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = lr(a[0]), c = lr(r.width), f = lr(r.width), w = lr(new Date().getTime()), v = () => {
      var P, O;
      if (!r.situation.events) {
        const H = (O = (P = r.situation) == null ? void 0 : P.alarms) == null ? void 0 : O.map(($e) => $e.id);
        o.getEvents(r.situation.id, H);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = lr(r.situation.alarms), y = lr(
      ((I = _e.exports.minBy((R = r.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : I.firstEventTime) || new Date().getTime()
    ), T = lr(_());
    H6(r, () => {
      var P, O;
      y.value = ((O = _e.exports.minBy((P = r.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : O.firstEventTime) || new Date().getTime(), v(), c.value = f.value, T.value = _(), $.value = r.situation.alarms, u.value = a[0];
    });
    const D = (P) => {
      if ((P == null ? void 0 : P.id) === 1 && ($.value = r.situation.alarms), (P == null ? void 0 : P.id) === 2) {
        const O = _e.exports.groupBy($.value, "severity"), H = [
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
      if ((P == null ? void 0 : P.id) === 3) {
        const O = _e.exports.reverse(
          _e.exports.sortBy(
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
    }, k = (P) => {
      s.value = P;
    }, x = () => {
      s.value = 0;
    };
    return (P, O) => {
      var H, $e;
      return Fn(), Ur(hm, null, [
        Ot("div", D6, [
          Ot("div", {
            class: E6(["severity-line", [`${($e = (H = r.situation) == null ? void 0 : H.severity) == null ? void 0 : $e.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ot("div", null, [
            Ot("div", N6, "Situation " + Io(r.situation.id), 1),
            Ot("div", null, " Duration: " + Io($t(il)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Fn(), Ur("div", L6, [
          M6,
          Ot("div", O6, [
            xo($t(m7), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                O[0] || (O[0] = (le) => u.value = le),
                D
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ot("div", P6, [
              R6,
              Ot("div", null, [
                xo($t(Z), {
                  icon: $t(E7),
                  class: "zoom-icon",
                  onClick: M
                }, null, 8, ["icon"]),
                xo($t(Z), {
                  icon: $t(H_),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                xo($t(Z), {
                  icon: $t(w6),
                  class: "zoom-icon",
                  onClick: L
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Fn(), Ur("div", {
            key: 0,
            class: "alarms",
            style: x6({
              width: f.value + 50 + "px"
            })
          }, [
            Ot("div", F6, [
              Ot("div", null, Io($t(kn)(y.value)), 1),
              Ot("div", null, Io($t(kn)(w.value)), 1)
            ]),
            e.situation.events ? (Fn(), Ur("div", U6, [
              (Fn(!0), Ur(hm, null, I6($.value, (le) => (Fn(), Ur("div", {
                class: "timeline",
                key: le.id
              }, [
                Ot("div", W6, [
                  Rg(Io(le.nodeLabel) + " - " + Io(le.id) + " ", 1),
                  s.value === le.id ? (Fn(), pm($t(Z), {
                    key: 0,
                    icon: $t(wl),
                    class: "zoom-icon expand",
                    onClick: x
                  }, null, 8, ["icon"])) : (Fn(), pm($t(Z), {
                    key: 1,
                    icon: $t($_),
                    class: "zoom-icon expand",
                    onClick: () => k(le.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                xo(i6, {
                  alarm: le,
                  proportion: T.value,
                  "min-start": y.value,
                  events: r.situation.events[le.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                s.value === le.id ? (Fn(), Ur("div", q6, [
                  xo(S6, {
                    events: r.situation.events[le.id]
                  }, null, 8, ["events"])
                ])) : Aa("", !0)
              ]))), 128))
            ])) : Aa("", !0)
          ], 4)) : Aa("", !0)
        ])) : Aa("", !0)
      ], 64);
    };
  }
});
const Y6 = /* @__PURE__ */ de(z6, [["__scopeId", "data-v-01717d0d"]]), G6 = window.Vue.defineComponent, bt = window.Vue.createElementVNode, fn = window.Vue.unref, ut = window.Vue.createTextVNode, Ao = window.Vue.withCtx, Te = window.Vue.openBlock, j6 = window.Vue.createBlock, Ba = window.Vue.createCommentVNode, ur = window.Vue.createVNode, Le = window.Vue.createElementBlock, Z6 = window.Vue.resolveComponent, Wr = window.Vue.toDisplayString, wm = window.Vue.renderList, vm = window.Vue.Fragment, K6 = window.Vue.pushScopeId, J6 = window.Vue.popScopeId, ai = (e) => (K6("data-v-8f1d9e34"), e = e(), J6(), e), X6 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, Q6 = { class: "header" }, eF = /* @__PURE__ */ ai(() => /* @__PURE__ */ bt("h3", null, "AI Suggestions", -1)), tF = { class: "header-actions" }, nF = /* @__PURE__ */ ut(" Re-evaluate "), rF = /* @__PURE__ */ ut(" Refresh "), oF = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, iF = /* @__PURE__ */ ai(() => /* @__PURE__ */ bt("span", null, "Loading\u2026", -1)), sF = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, aF = /* @__PURE__ */ ai(() => /* @__PURE__ */ bt("span", null, "Requesting a fresh analysis\u2026", -1)), lF = {
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
}, _F = /* @__PURE__ */ ut(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), gF = /* @__PURE__ */ ai(() => /* @__PURE__ */ bt("strong", null, "Re-evaluate", -1)), $F = /* @__PURE__ */ ut(" above to trigger one now. "), yF = [
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
}, DF = /* @__PURE__ */ ut(" Generated by "), NF = { class: "section" }, LF = /* @__PURE__ */ ai(() => /* @__PURE__ */ bt("h4", null, "Probable root causes", -1)), MF = {
  key: 0,
  "data-test": "ai-root-causes"
}, OF = {
  key: 1,
  class: "empty"
}, PF = { class: "section" }, RF = /* @__PURE__ */ ai(() => /* @__PURE__ */ bt("h4", null, "Possible resolutions", -1)), FF = {
  key: 0,
  "data-test": "ai-resolutions"
}, UF = {
  key: 1,
  class: "empty"
}, qc = window.Vue.computed, WF = window.Vue.onBeforeUnmount, qF = window.Vue.onMounted, Hc = window.Vue.ref, HF = /* @__PURE__ */ G6({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const r = e, o = Xr(), s = Hc("loading"), a = Hc(null), u = Hc(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const k = await w_(r.situationId);
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
    const M = qc(() => {
      var k;
      return (k = a.value) != null && k.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), L = qc(() => {
      const k = o.claudeConfig;
      return !k || !k.enabled ? "disabled" : k.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = qc(
      () => {
        var k, x;
        return ((k = o.claudeConfig) == null ? void 0 : k.enabled) === !0 && ((x = o.claudeConfig) == null ? void 0 : x.apiKeyPresent) === !0;
      }
    );
    return (k, x) => {
      var I;
      const R = Z6("router-link");
      return Te(), Le("div", X6, [
        bt("div", Q6, [
          eF,
          bt("div", tF, [
            fn(S) ? (Te(), j6(fn(ae), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: s.value === "reanalyzing" || s.value === "pending",
              onClick: D
            }, {
              default: Ao(() => [
                nF
              ]),
              _: 1
            }, 8, ["disabled"])) : Ba("", !0),
            ur(fn(ae), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: T
            }, {
              default: Ao(() => [
                rF
              ]),
              _: 1
            })
          ])
        ]),
        s.value === "loading" ? (Te(), Le("div", oF, [
          ur(fn(Uo)),
          iF
        ])) : s.value === "reanalyzing" ? (Te(), Le("div", sF, [
          ur(fn(Uo)),
          aF
        ])) : s.value === "absent" ? (Te(), Le("div", lF, [
          fn(L) === "disabled" ? (Te(), Le("span", uF, [
            cF,
            ur(R, { to: "/settings" }, {
              default: Ao(() => [
                dF
              ]),
              _: 1
            }),
            fF
          ])) : fn(L) === "no-key" ? (Te(), Le("span", hF, [
            pF,
            ur(R, { to: "/settings" }, {
              default: Ao(() => [
                wF
              ]),
              _: 1
            }),
            vF
          ])) : (Te(), Le("span", mF, yF)),
          u.value ? (Te(), Le("div", bF, Wr(u.value), 1)) : Ba("", !0)
        ])) : s.value === "pending" ? (Te(), Le("div", VF, [
          ur(fn(Uo)),
          bt("span", null, " Analyzing alarms with Claude\u2026 requested at " + Wr(fn(M)) + ". ", 1)
        ])) : s.value === "failed" ? (Te(), Le("div", CF, [
          bt("div", SF, [
            kF,
            bt("code", null, Wr(((I = a.value) == null ? void 0 : I.error) || "unknown error"), 1)
          ]),
          ur(fn(ae), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: T
          }, {
            default: Ao(() => [
              EF
            ]),
            _: 1
          })
        ])) : s.value === "error" ? (Te(), Le("div", IF, [
          xF,
          ur(fn(ae), {
            secondary: "",
            onClick: T
          }, {
            default: Ao(() => [
              AF
            ]),
            _: 1
          })
        ])) : s.value === "ready" && a.value ? (Te(), Le("div", BF, [
          a.value.completedAt ? (Te(), Le("div", TF, [
            DF,
            bt("strong", null, Wr(a.value.model), 1),
            ut(" at " + Wr(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : Ba("", !0),
          bt("div", NF, [
            LF,
            a.value.rootCauses.length ? (Te(), Le("ol", MF, [
              (Te(!0), Le(vm, null, wm(a.value.rootCauses, (P, O) => (Te(), Le("li", {
                key: `cause-${O}`
              }, Wr(P), 1))), 128))
            ])) : (Te(), Le("div", OF, "No root causes returned."))
          ]),
          bt("div", PF, [
            RF,
            a.value.resolutions.length ? (Te(), Le("ol", FF, [
              (Te(!0), Le(vm, null, wm(a.value.resolutions, (P, O) => (Te(), Le("li", {
                key: `res-${O}`
              }, Wr(P), 1))), 128))
            ])) : (Te(), Le("div", UF, "No resolutions returned."))
          ])
        ])) : Ba("", !0)
      ]);
    };
  }
});
const zF = /* @__PURE__ */ de(HF, [["__scopeId", "data-v-8f1d9e34"]]), YF = window.Vue.openBlock, GF = window.Vue.createElementBlock, jF = window.Vue.createElementVNode;
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
var Wo = /* @__PURE__ */ ZF(KF, [["render", e9]]);
const Fg = window.Vue.defineComponent, zc = window.Vue.ref, t9 = window.Vue.toRef, Yc = window.Vue.inject, mm = window.Vue.watch, n9 = window.Vue.nextTick, _m = window.Vue.openBlock, gm = window.Vue.createElementBlock, Gc = window.Vue.createElementVNode, r9 = window.Vue.normalizeClass, $m = window.Vue.renderSlot, ym = window.Vue.createCommentVNode, jc = window.Vue.provide;
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
}, a9 = Fg({
  emits: s9,
  props: i9,
  setup(e, r) {
    const o = zc(), s = zc(!1), a = zc(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = t9(e, "modelValue"), f = Yc("queueSnackbar", !1), w = Yc("unqueueSnackbar", !1), v = Yc("nextSnackbar", () => {
    }), _ = (M, L) => {
      let S, k, x = L;
      const R = () => {
        !S || (Jr(S), S = 0, x -= Date.now() - k);
      }, I = () => {
        S || (k = Date.now(), S = Kr(M, x));
      };
      return I(), { pause: R, resume: I };
    }, $ = () => {
      s.value = !1, r.emit("closed"), v && v();
    }, y = (M) => {
      M.keyCode === ee.ESCAPE && (a.value = !1);
    }, T = () => {
      o.value.pause();
    }, D = () => {
      a.value && o.value.resume();
    };
    return mm(c, (M) => {
      M ? n9(() => {
        f === !1 ? a.value = M : f(u, a);
      }) : w === !1 ? a.value = M : w(u);
    }, { immediate: !0 }), mm(a, (M) => {
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
  return e.modelValue || e.contentShow ? (_m(), gm("div", l9, [
    Gc("div", {
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
      Gc("div", u9, [
        e.contentShow ? (_m(), gm("div", c9, [
          $m(e.$slots, "default", {}, void 0, !0)
        ])) : ym("", !0)
      ]),
      Gc("div", d9, [
        $m(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : ym("", !0);
}
var bl = /* @__PURE__ */ o9(a9, [["render", f9], ["__scopeId", "data-v-5cf64a62"]]);
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
Fg({
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
    return jc("queueSnackbar", s), jc("unqueueSnackbar", a), jc("nextSnackbar", u), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: s,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const p9 = window.Vue.defineComponent, xe = window.Vue.unref, it = window.Vue.createVNode, us = window.Vue.createElementVNode, yt = window.Vue.withCtx, qr = window.Vue.openBlock, Zc = window.Vue.createBlock, bm = window.Vue.createCommentVNode, hs = window.Vue.createTextVNode, Ta = window.Vue.createElementBlock, Vm = window.Vue.toDisplayString, w9 = window.Vue.pushScopeId, v9 = window.Vue.popScopeId, Wd = (e) => (w9("data-v-a5b2d880"), e = e(), v9(), e), m9 = { id: "cont" }, _9 = { class: "btns-navigation" }, g9 = /* @__PURE__ */ Wd(() => /* @__PURE__ */ us("span", null, "Situation List", -1)), $9 = /* @__PURE__ */ Wd(() => /* @__PURE__ */ us("span", null, "Show Previous Situation ", -1)), y9 = /* @__PURE__ */ Wd(() => /* @__PURE__ */ us("span", null, "Show Next Situation", -1)), b9 = { key: 1 }, V9 = {
  key: 0,
  class: "detail"
}, C9 = /* @__PURE__ */ hs("Details"), S9 = /* @__PURE__ */ hs("Metrics"), k9 = /* @__PURE__ */ hs("AI Suggestions"), E9 = {
  key: 1,
  class: "noSituation"
}, I9 = /* @__PURE__ */ hs("dismiss"), Hr = window.Vue.ref, Cm = window.Vue.watch, x9 = window.Vue.onMounted, A9 = window.VueRouter.useRoute, B9 = /* @__PURE__ */ p9({
  __name: "SituationDetail",
  setup(e) {
    const r = gr(), o = A9(), s = parseInt(o.params.id), a = Hr(s), u = vn(), c = gl(), f = Hr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Hr(), v = Hr(), _ = Hr(!0), $ = Hr(
      u.filteredSituations.findIndex((L) => L === a.value)
    ), y = Hr(!1);
    Cm(
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
    Cm(o, () => {
      a.value = parseInt(o.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((L) => L == a.value);
    }), c.$subscribe((L, S) => {
      y.value = S.showError;
    });
    const M = (L) => {
      f.value = L || 0;
    };
    return (L, S) => (qr(), Ta("div", m9, [
      us("div", _9, [
        it(xe(ae), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: yt(() => [
            it(xe(Z), {
              icon: xe(Wo),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            g9
          ]),
          _: 1
        }),
        us("div", null, [
          it(xe(ae), {
            disabled: !xe(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => D(-1))
          }, {
            default: yt(() => [
              it(xe(Z), {
                icon: xe(Wo),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              $9
            ]),
            _: 1
          }, 8, ["disabled"]),
          it(xe(ae), {
            disabled: !xe(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => D(1))
          }, {
            default: yt(() => [
              y9,
              it(xe(Z), {
                icon: xe(Wo),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (qr(), Zc(xe(Uo), {
        key: 0,
        class: "spinner"
      })) : (qr(), Ta("div", b9, [
        w.value ? (qr(), Ta("div", V9, [
          it(xe(NM), { "onUpdate:modelValue": M }, {
            tabs: yt(() => [
              it(xe(_c), null, {
                default: yt(() => [
                  C9
                ]),
                _: 1
              }),
              it(xe(_c), null, {
                default: yt(() => [
                  S9
                ]),
                _: 1
              }),
              it(xe(_c), { "data-test": "ai-suggestions-tab" }, {
                default: yt(() => [
                  k9
                ]),
                _: 1
              })
            ]),
            default: yt(() => [
              it(xe(gc), { class: "panel" }, {
                default: yt(() => [
                  it(Z5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              it(xe(gc), { class: "panel" }, {
                default: yt(() => [
                  v.value && f.value == 1 ? (qr(), Zc(Y6, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : bm("", !0)
                ]),
                _: 1
              }),
              it(xe(gc), { class: "panel" }, {
                default: yt(() => [
                  f.value == 2 ? (qr(), Zc(zF, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : bm("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (qr(), Ta("div", E9, " Error. The situation " + Vm(xe(s)) + " does not exist. ", 1))
      ])),
      it(xe(bl), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (k) => y.value = k),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: yt(() => [
          it(xe(ae), {
            onClick: S[3] || (S[3] = (k) => y.value = !1),
            text: ""
          }, {
            default: yt(() => [
              I9
            ]),
            _: 1
          })
        ]),
        default: yt(() => [
          hs(Vm(xe(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const T9 = /* @__PURE__ */ de(B9, [["__scopeId", "data-v-a5b2d880"]]), D9 = window.Vue.defineComponent, Je = window.Vue.unref, Kt = window.Vue.createVNode, wt = window.Vue.createElementVNode, Bo = window.Vue.withCtx, To = window.Vue.openBlock, Zi = window.Vue.createElementBlock, N9 = window.Vue.createCommentVNode, L9 = window.Vue.toDisplayString, qd = window.Vue.createTextVNode, M9 = window.Vue.normalizeClass, O9 = window.Vue.renderList, P9 = window.Vue.Fragment, R9 = window.Vue.createBlock, F9 = window.Vue.pushScopeId, U9 = window.Vue.popScopeId, ps = (e) => (F9("data-v-1a57a9f3"), e = e(), U9(), e), W9 = { class: "container" }, q9 = /* @__PURE__ */ ps(() => /* @__PURE__ */ wt("span", null, "Situation List", -1)), H9 = /* @__PURE__ */ ps(() => /* @__PURE__ */ wt("h2", null, "New Situation", -1)), z9 = { class: "form" }, Y9 = { class: "fields" }, G9 = {
  key: 0,
  class: "errorList"
}, j9 = { class: "footer" }, Z9 = /* @__PURE__ */ ps(() => /* @__PURE__ */ wt("span", null, "Clear", -1)), K9 = /* @__PURE__ */ ps(() => /* @__PURE__ */ wt("span", null, "Add Situation", -1)), J9 = { class: "alarm-column" }, X9 = { class: "header-alarms" }, Q9 = /* @__PURE__ */ ps(() => /* @__PURE__ */ wt("h3", null, "Add Unassociated Alarms", -1)), eU = /* @__PURE__ */ qd(" Total Alarms Added: "), tU = { class: "total" }, nU = { class: "list" }, rU = { class: "filters" }, oU = {
  key: 0,
  class: "alarms"
}, iU = /* @__PURE__ */ qd(" Error on creating new situation :( "), sU = /* @__PURE__ */ qd("dismiss"), cr = window.Vue.ref, aU = window.Vue.watch, lU = /* @__PURE__ */ D9({
  __name: "AddSituation",
  setup(e) {
    const r = gr(), o = vn(), s = cr(), a = cr(""), u = cr(), c = cr(""), f = cr([]), w = cr(!1), v = cr(), _ = cr(o.unassignedAlarms);
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
      w.value = !1, _e.exports.includes(f.value, S) ? _e.exports.remove(f.value, (k) => k === S) : f.value.push(S);
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
    return (S, k) => (To(), Zi("div", W9, [
      Kt(Je(ae), {
        primary: "",
        onClick: k[0] || (k[0] = () => $()),
        class: "back-btn"
      }, {
        default: Bo(() => [
          Kt(Je(Z), {
            icon: Je(Wo),
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
          Kt(Je(dd), {
            modelValue: s.value,
            "onUpdate:modelValue": k[1] || (k[1] = (x) => s.value = x),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          Kt(Je(dd), {
            modelValue: u.value,
            "onUpdate:modelValue": k[2] || (k[2] = (x) => u.value = x),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (To(), Zi("div", G9, " You must add at least 2 alarms. ")) : N9("", !0),
          wt("div", j9, [
            Kt(Je(ae), {
              class: "btn",
              onClick: M
            }, {
              default: Bo(() => [
                Kt(Je(Z), {
                  icon: Je(Ko),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                Z9
              ]),
              _: 1
            }),
            Kt(Je(ae), {
              class: "btn-add",
              onClick: D
            }, {
              default: Bo(() => [
                Kt(Je(Z), {
                  icon: Je(_l),
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
                wt("span", tU, L9(Je(f).length), 1)
              ], 2)
            ])
          ]),
          wt("div", nU, [
            wt("div", rU, [
              Kt(oi, {
                list: Je(o).unassignedAlarms,
                onFilteredList: L,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (To(), Zi("div", oU, [
              (To(!0), Zi(P9, null, O9(_.value, (x) => (To(), Zi("div", {
                key: x.id,
                class: "alarm-card"
              }, [
                Kt(Ud, {
                  selected: Je(_e.exports.includes)(Je(f), x.id),
                  alarm: x,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (To(), R9(ii, { key: 1 }))
          ])
        ])
      ]),
      Kt(Je(bl), {
        modelValue: v.value,
        "onUpdate:modelValue": k[4] || (k[4] = (x) => v.value = x),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Bo(() => [
          Kt(Je(ae), {
            onClick: k[3] || (k[3] = (x) => v.value = !1),
            text: ""
          }, {
            default: Bo(() => [
              sU
            ]),
            _: 1
          })
        ]),
        default: Bo(() => [
          iU
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const uU = /* @__PURE__ */ de(lU, [["__scopeId", "data-v-1a57a9f3"]]), cU = window.Vue.defineComponent, dU = window.Vue.createElementVNode, fU = window.Vue.createTextVNode, hU = window.Vue.unref, pU = window.Vue.withCtx, wU = window.Vue.createVNode, vU = window.Vue.Fragment, mU = window.Vue.openBlock, _U = window.Vue.createElementBlock, gU = window.Vue.pushScopeId, $U = window.Vue.popScopeId, yU = (e) => (gU("data-v-bcb7dcc6"), e = e(), $U(), e), bU = /* @__PURE__ */ yU(() => /* @__PURE__ */ dU("div", { class: "main" }, "Something bad is happening...", -1)), VU = /* @__PURE__ */ fU(" Reload "), CU = /* @__PURE__ */ cU({
  __name: "ErrorPage",
  setup(e) {
    const r = gr(), o = () => {
      r.push({ name: "situations" });
    };
    return (s, a) => (mU(), _U(vU, null, [
      bU,
      wU(hU(ae), {
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
const SU = /* @__PURE__ */ de(CU, [["__scopeId", "data-v-bcb7dcc6"]]), kU = window.Vue.defineComponent, pt = window.Vue.unref, hn = window.Vue.createVNode, hr = window.Vue.createElementVNode, Ki = window.Vue.withCtx, zr = window.Vue.openBlock, Sm = window.Vue.createBlock, EU = window.Vue.renderList, IU = window.Vue.Fragment, Ji = window.Vue.createElementBlock, xU = window.Vue.toDisplayString, Ug = window.Vue.createTextVNode, AU = window.Vue.pushScopeId, BU = window.Vue.popScopeId, Hd = (e) => (AU("data-v-6078e4ad"), e = e(), BU(), e), TU = { class: "container" }, DU = { class: "nav-btns" }, NU = /* @__PURE__ */ Hd(() => /* @__PURE__ */ hr("span", null, "Situation List", -1)), LU = /* @__PURE__ */ Hd(() => /* @__PURE__ */ hr("h2", null, "List Unassociated Alarms", -1)), MU = { class: "content" }, OU = { class: "filters" }, PU = { class: "list" }, RU = { class: "action-btns" }, FU = /* @__PURE__ */ Hd(() => /* @__PURE__ */ hr("span", null, "Move", -1)), UU = { key: 1 }, WU = {
  key: 0,
  class: "alarms"
}, qU = /* @__PURE__ */ Ug("dismiss"), dr = window.Vue.ref, HU = window.Vue.watch, zU = window.Vue.markRaw, YU = /* @__PURE__ */ kU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = zU({
      ArrowBack: Wo,
      ExitToApp: fd
    }), o = gr(), s = vn();
    s.getUnassignedAlarms(), s.getSituations(), s.nodes.length || s.getNodes();
    const a = dr([]), u = dr([]), c = dr(!1), f = dr(!1), w = dr(""), v = dr(!1), _ = dr(!1), $ = dr(!0);
    HU(
      () => s.unassignedAlarms,
      () => {
        a.value = s.unassignedAlarms, $.value = !1;
      }
    );
    const y = (k) => {
      _e.exports.includes(u.value, k) ? _e.exports.remove(u.value, (x) => x === k) : u.value.push(k);
    }, T = () => {
      c.value ? u.value = a.value.map((k) => k.id) : u.value = [];
    }, D = async (k) => {
      await m_(k, u.value) ? s.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, M = () => {
      o.push({
        name: "situations"
      });
    }, L = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (k) => {
      a.value = k;
    };
    return (k, x) => (zr(), Ji("div", TU, [
      hr("div", DU, [
        hn(pt(ae), {
          primary: "",
          onClick: x[0] || (x[0] = () => M())
        }, {
          default: Ki(() => [
            hn(pt(Z), {
              icon: pt(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NU
          ]),
          _: 1
        }),
        hn(j_)
      ]),
      LU,
      hr("div", MU, [
        hr("div", OU, [
          hn(oi, {
            list: pt(s).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        hr("div", PU, [
          hr("div", RU, [
            hn(pt(Go), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                x[1] || (x[1] = (R) => c.value = R),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            hn(pt(ae), { onClick: L }, {
              default: Ki(() => [
                hn(pt(Z), {
                  icon: pt(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                FU
              ]),
              _: 1
            })
          ]),
          $.value ? (zr(), Sm(pt(Uo), {
            key: 0,
            class: "spinner"
          })) : (zr(), Ji("div", UU, [
            pt(a).length ? (zr(), Ji("div", WU, [
              (zr(!0), Ji(IU, null, EU(pt(a), (R) => (zr(), Ji("div", {
                key: R.id,
                class: "card"
              }, [
                hn(Ud, {
                  selected: pt(_e.exports.includes)(pt(u), R.id),
                  alarm: R,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (zr(), Sm(ii, { key: 1 }))
          ]))
        ])
      ]),
      hn(Ag, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: D,
        onDrawerClosed: x[2] || (x[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      hn(pt(bl), {
        modelValue: v.value,
        "onUpdate:modelValue": x[4] || (x[4] = (R) => v.value = R),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: Ki(() => [
          hn(pt(ae), {
            onClick: x[3] || (x[3] = (R) => v.value = !1),
            text: ""
          }, {
            default: Ki(() => [
              qU
            ]),
            _: 1
          })
        ]),
        default: Ki(() => [
          Ug(xU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const GU = /* @__PURE__ */ de(YU, [["__scopeId", "data-v-6078e4ad"]]), jU = window.Vue.defineComponent, Kc = window.Vue.unref, ZU = window.Vue.createVNode, KU = window.Vue.createElementVNode, JU = window.Vue.withCtx, XU = window.Vue.openBlock, QU = window.Vue.createBlock, eW = window.Vue.pushScopeId, tW = window.Vue.popScopeId, nW = (e) => (eW("data-v-17251e76"), e = e(), tW(), e), rW = /* @__PURE__ */ nW(() => /* @__PURE__ */ KU("span", null, "Situation List", -1)), oW = window.Vue.markRaw, iW = /* @__PURE__ */ jU({
  __name: "SituationListBtn",
  setup(e) {
    const r = gr(), o = oW({
      ArrowBack: Wo
    }), s = () => {
      r.push({
        name: "situations"
      });
    };
    return (a, u) => (XU(), QU(Kc(ae), {
      primary: "",
      onClick: u[0] || (u[0] = () => s())
    }, {
      default: JU(() => [
        ZU(Kc(Z), {
          icon: Kc(o).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        rW
      ]),
      _: 1
    }));
  }
});
const sW = /* @__PURE__ */ de(iW, [["__scopeId", "data-v-17251e76"]]);
var aW = Object.defineProperty, lW = Object.defineProperties, uW = Object.getOwnPropertyDescriptors, km = Object.getOwnPropertySymbols, cW = Object.prototype.hasOwnProperty, dW = Object.prototype.propertyIsEnumerable, Em = (e, r, o) => r in e ? aW(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Po = (e, r) => {
  for (var o in r || (r = {}))
    cW.call(r, o) && Em(e, o, r[o]);
  if (km)
    for (var o of km(r))
      dW.call(r, o) && Em(e, o, r[o]);
  return e;
}, fW = (e, r) => lW(e, uW(r));
const hW = window.Vue.defineComponent, Im = window.Vue.toRef, pW = window.Vue.computed, wW = window.Vue.ref, xm = window.Vue.resolveComponent, Am = window.Vue.openBlock, Bm = window.Vue.createElementBlock, Tm = window.Vue.mergeProps, Dm = window.Vue.createVNode, vW = window.Vue.normalizeClass, Da = window.Vue.withCtx, Nm = window.Vue.renderSlot, mW = window.Vue.createElementVNode, _W = window.Vue.toHandlers, gW = window.Vue.toDisplayString, $W = window.Vue.createCommentVNode, yW = Po(Po({
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
}, ul), ti), bW = {
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
    ni(e), cl(e);
    const o = Im(e, "id"), s = pW(() => o.value ? o.value : ce("feather-input-label")), a = wW(), { validate: u } = Qo(s, a, e.label, e.schema, Im(e, "error"));
    return Po({
      inputId: s,
      internalValue: a,
      validate: u
    }, ei(r.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return ce("feather-input-description");
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
      const e = Po({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), fW(Po(Po({}, e), this.listeners), {
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
    InputSubText: Xo,
    InputWrapper: ll
  }
}), SW = ["maxlength"], kW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function EW(e, r, o, s, a, u) {
  const c = xm("InputWrapper"), f = xm("InputSubText");
  return Am(), Bm("div", Tm(e.inherittedAttrs, { class: "feather-input-container" }), [
    Dm(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: vW(["feather-input-content", e.contentCls])
    }, {
      pre: Da(() => [
        Nm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: Da(() => [
        Nm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: Da(() => [
        mW("input", Tm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, _W(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, SW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Dm(f, { id: e.descriptionId }, {
      right: Da(() => [
        e.maxlength ? (Am(), Bm("div", kW, gW(e.charCount), 1)) : $W("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Do = /* @__PURE__ */ VW(CW, [["render", EW], ["__scopeId", "data-v-bf37b0d6"]]);
const IW = window.Vue.openBlock, xW = window.Vue.createElementBlock, zd = window.Vue.createElementVNode;
var AW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const BW = {}, TW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DW = /* @__PURE__ */ zd("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), NW = /* @__PURE__ */ zd("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), LW = /* @__PURE__ */ zd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), MW = [
  DW,
  NW,
  LW
];
function OW(e, r) {
  return IW(), xW("svg", TW, MW);
}
var PW = /* @__PURE__ */ AW(BW, [["render", OW]]);
const RW = window.Vue.openBlock, FW = window.Vue.createElementBlock, Wg = window.Vue.createElementVNode;
var UW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [s, a] of r)
    o[s] = a;
  return o;
};
const WW = {}, qW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, HW = /* @__PURE__ */ Wg("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), zW = /* @__PURE__ */ Wg("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), YW = [
  HW,
  zW
];
function GW(e, r) {
  return RW(), FW("svg", qW, YW);
}
var jW = /* @__PURE__ */ UW(WW, [["render", GW]]);
const ZW = window.Vue.defineComponent, Pe = window.Vue.createVNode, W = window.Vue.createElementVNode, z = window.Vue.unref, at = window.Vue.createTextVNode, Jt = window.Vue.withCtx, Mt = window.Vue.openBlock, yn = window.Vue.createElementBlock, Xt = window.Vue.createCommentVNode, Jc = window.Vue.createBlock, qe = window.Vue.toDisplayString, Lm = window.Vue.Fragment, KW = window.Vue.createStaticVNode, JW = window.Vue.pushScopeId, XW = window.Vue.popScopeId, Me = (e) => (JW("data-v-4b49dbf7"), e = e(), XW(), e), QW = { class: "container" }, eq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), tq = { class: "section" }, nq = { class: "title" }, rq = /* @__PURE__ */ at(" Choose the correlation engine that ALEC will use (see "), oq = ["href"], iq = /* @__PURE__ */ at(" for more information): "), sq = /* @__PURE__ */ at("Clustering"), aq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("div", { class: "hellinger" }, [
  /* @__PURE__ */ W("strong", null, "Hellinger distance")
], -1)), lq = /* @__PURE__ */ at(" LLM Based "), uq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), cq = {
  class: "section",
  "data-test": "claude-section"
}, dq = { class: "title-row" }, fq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("div", { class: "title" }, "Claude Root Cause Analysis", -1)), hq = ["aria-expanded"], pq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("div", { class: "claude-help" }, " When a new situation is created, ALEC will ask Claude to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. The API key is stored on the OpenNMS server and applies to all users of this plugin. ", -1)), wq = {
  key: 0,
  class: "help-popover",
  "data-test": "claude-key-help-popover"
}, vq = /* @__PURE__ */ KW('<strong data-v-4b49dbf7>How to get an Anthropic API key:</strong><ol data-v-4b49dbf7><li data-v-4b49dbf7> Go to <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" data-v-4b49dbf7>console.anthropic.com</a> and sign in (or create an account). </li><li data-v-4b49dbf7> Add a payment method under <em data-v-4b49dbf7>Billing \u2192 Add payment method</em>. Anthropic requires this before any API key can be created. </li><li data-v-4b49dbf7> Open <em data-v-4b49dbf7>API Keys</em> in the left sidebar and click <em data-v-4b49dbf7>Create Key</em>. Give it a descriptive name (e.g. <code data-v-4b49dbf7>alec-claude-suggestions</code>) so you can revoke it later without affecting other integrations. </li><li data-v-4b49dbf7><strong data-v-4b49dbf7>Copy the key immediately</strong> \u2014 it starts with <code data-v-4b49dbf7>sk-ant-\u2026</code> and Anthropic only shows it once. </li><li data-v-4b49dbf7> Paste it into the field below and click <em data-v-4b49dbf7>Save Changes</em>. The key is stored on the OpenNMS server; it is never returned to the browser after saving. </li></ol><p class="pricing-hint" data-v-4b49dbf7> Pricing for the Sonnet 4.6 model that ALEC uses: $3 / $15 per million input / output tokens (cache reads cheaper). A single situation analysis is typically a few hundred tokens \u2014 fractions of a cent. Track 30-day usage in the panel below after you save. </p>', 3), mq = [
  vq
], _q = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("strong", null, "Claude Enabled Root Cause Analysis", -1)), gq = {
  key: 1,
  class: "caption",
  "data-test": "claude-no-key-hint"
}, $q = { class: "claude-key-row" }, yq = /* @__PURE__ */ at(" Clear Key "), bq = {
  key: 2,
  class: "claude-key-saved",
  "data-test": "claude-key-saved"
}, Vq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), Cq = {
  key: 3,
  class: "caption",
  "data-test": "claude-cleared-hint"
}, Sq = {
  key: 4,
  class: "claude-usage",
  "data-test": "claude-usage"
}, kq = { class: "usage-summary" }, Eq = { class: "usage-label" }, Iq = ["title"], xq = ["title"], Aq = {
  key: 0,
  class: "usage-details",
  "data-test": "claude-usage-details"
}, Bq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("dt", null, "Input", -1)), Tq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("dt", null, "Output", -1)), Dq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("dt", null, "Cache read", -1)), Nq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("dt", null, "Cache create", -1)), Lq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("dt", null, "Calls", -1)), Mq = { class: "muted" }, Oq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("dt", null, "Cache hit", -1)), Pq = { class: "pricing-note" }, Rq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, Fq = { class: "title-row" }, Uq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("div", { class: "title" }, "Correlation variables", -1)), Wq = ["aria-expanded"], qq = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, Hq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("strong", null, "Alpha (\u03B1)", -1)), zq = /* @__PURE__ */ at(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), Yq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("strong", null, "Beta (\u03B2)", -1)), Gq = /* @__PURE__ */ at(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), jq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("code", null, "[0, 1]", -1)), Zq = /* @__PURE__ */ at(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), Kq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("strong", null, "Epsilon (\u03B5)", -1)), Jq = /* @__PURE__ */ at(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), Xq = { "data-test": "help-hellinger-w" }, Qq = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("strong", null, "Hellinger w", -1)), eH = /* @__PURE__ */ at(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), tH = { "data-test": "help-hellinger-bias" }, nH = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("strong", null, "Hellinger bias", -1)), rH = /* @__PURE__ */ at(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), oH = { class: "variables" }, iH = { class: "action-row" }, sH = /* @__PURE__ */ at(" Close All Open Situations "), aH = /* @__PURE__ */ at(" Re-Evaluate All Open Alarms "), lH = /* @__PURE__ */ Me(() => /* @__PURE__ */ W("span", null, "Save Changes", -1)), uH = /* @__PURE__ */ at("dismiss"), Xc = window.Vue.computed, cH = window.Vue.markRaw, dH = window.Vue.onMounted, Xe = window.Vue.ref, fH = /* @__PURE__ */ ZW({
  __name: "AccountSettings",
  setup(e) {
    var Oe, Ye, zn, $r, kt, ws, vs, ms, In, yr, _s, Yn, Gn, gs, br;
    const r = (ue) => ue >= 1e6 ? (ue / 1e6).toFixed(1) + "M" : ue >= 1e3 ? (ue / 1e3).toFixed(1) + "K" : String(ue), o = (ue) => ue < 0.01 ? "~$0.00" : "~$" + ue.toFixed(2), s = cH({
      MarkComplete: Ja,
      Help: PW,
      Restore: jW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = Xr(), c = Xe(((Oe = u.engineInfo) == null ? void 0 : Oe.engineName) || et.ENGINE_DBSCAN), f = Xe(
      u.engineInfo ? u.engineInfo.distanceMeasureName === et.HELLINGER_OPTION : !0
    ), w = Xe((zn = (Ye = u.engineInfo) == null ? void 0 : Ye.alpha) != null ? zn : a.alpha), v = Xe((kt = ($r = u.engineInfo) == null ? void 0 : $r.beta) != null ? kt : a.beta), _ = Xe((vs = (ws = u.engineInfo) == null ? void 0 : ws.epsilon) != null ? vs : a.epsilon), $ = Xe(
      (In = (ms = u.engineInfo) == null ? void 0 : ms.hellingerW) != null ? In : a.hellingerW
    ), y = Xe(
      (_s = (yr = u.engineInfo) == null ? void 0 : yr.hellingerBias) != null ? _s : a.hellingerBias
    ), T = Xc(() => c.value === et.ENGINE_DBSCAN), D = Xc(() => T.value && f.value), M = Xe((Gn = (Yn = u.claudeConfig) == null ? void 0 : Yn.enabled) != null ? Gn : !1), L = Xe(""), S = Xe((br = (gs = u.claudeConfig) == null ? void 0 : gs.apiKeyPresent) != null ? br : !1), k = Xe(!1), x = Xc(
      () => (!S.value || k.value) && L.value.trim().length === 0
    ), R = () => {
      L.value = "", k.value = !0, S.value = !1, M.value = !1;
    }, I = Xe(!1), P = Xe(!1), O = Xe(!1), H = Xe(!1), $e = Xe(""), le = Xe(!1);
    dH(async () => {
      if (u.claudeConfig === null) {
        const ue = await u.getClaudeConfig();
        ue && (M.value = ue.enabled, S.value = ue.apiKeyPresent);
      }
      await u.getClaudeUsage(30);
    });
    const ye = () => {
      w.value = a.alpha, v.value = a.beta, _.value = a.epsilon, $.value = a.hellingerW, y.value = a.hellingerBias;
    }, ge = (ue, te) => {
      $e.value = ue, H.value = te, O.value = !0;
    }, Ee = () => {
      if (k.value)
        return { enabled: !1, clearApiKey: !0 };
      const ue = L.value.trim(), te = { enabled: M.value };
      return ue.length > 0 && (te.apiKey = ue), te;
    }, Ae = async () => {
      var jn, $s, Ut, li;
      const ue = {
        alpha: Number(w.value),
        beta: Number(v.value),
        epsilon: Number(_.value)
      };
      f.value && (ue.hellingerW = Number($.value), ue.hellingerBias = Number(y.value));
      const te = await u.setEngineInfo(
        c.value,
        f.value,
        ue
      ), ne = await u.setClaudeConfig(Ee());
      ne && (L.value = "", k.value = !1, S.value = ($s = (jn = u.claudeConfig) == null ? void 0 : jn.apiKeyPresent) != null ? $s : !1, M.value = (li = (Ut = u.claudeConfig) == null ? void 0 : Ut.enabled) != null ? li : !1, u.getClaudeUsage(30)), te && ne ? (u.getEngineInfo(), ge("The settings were saved!", !1)) : ge(
        te && !ne ? "Engine settings saved, but Claude configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, we = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const ue = await sI();
      ge(
        ue ? "All open situations were closed." : "Failed to close situations.",
        !ue
      );
    }, Fe = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const ue = await aI();
      ge(
        ue ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !ue
      );
    };
    return (ue, te) => (Mt(), yn(Lm, null, [
      Pe(sW),
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
          Pe(z(q_), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": te[1] || (te[1] = (ne) => c.value = ne),
            label: "",
            hideLabel: ""
          }, {
            default: Jt(() => [
              Pe(z(ud), {
                class: "radio-item",
                value: z(et).ENGINE_DBSCAN
              }, {
                default: Jt(() => [
                  sq
                ]),
                _: 1
              }, 8, ["value"]),
              Pe(z(Go), {
                modelValue: f.value,
                "onUpdate:modelValue": te[0] || (te[0] = (ne) => f.value = ne),
                disabled: !z(T),
                class: "checkbox"
              }, {
                default: Jt(() => [
                  aq
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Pe(z(ud), {
                class: "radio-item",
                value: z(et).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: Jt(() => [
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
              "aria-expanded": P.value,
              "aria-label": "How to get an Anthropic API key",
              "data-test": "claude-key-help",
              onClick: te[2] || (te[2] = (ne) => P.value = !P.value)
            }, [
              Pe(z(Z), {
                icon: z(s).Help
              }, null, 8, ["icon"])
            ], 8, hq)
          ]),
          pq,
          P.value ? (Mt(), yn("div", wq, mq)) : Xt("", !0),
          Pe(z(Go), {
            modelValue: M.value,
            "onUpdate:modelValue": te[3] || (te[3] = (ne) => M.value = ne),
            disabled: z(x),
            class: "checkbox",
            "data-test": "claude-enabled"
          }, {
            default: Jt(() => [
              _q
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          z(x) ? (Mt(), yn("div", gq, " Enter an API key to enable. ")) : Xt("", !0),
          W("div", $q, [
            Pe(z(Do), {
              modelValue: L.value,
              "onUpdate:modelValue": te[4] || (te[4] = (ne) => L.value = ne),
              type: "password",
              autocomplete: "new-password",
              label: S.value && !k.value ? "Anthropic API key \u2014 saved (paste a new key to replace)" : "Anthropic API key",
              "data-test": "claude-api-key",
              class: "claude-key-input"
            }, null, 8, ["modelValue", "label"]),
            S.value && !k.value ? (Mt(), Jc(z(ae), {
              key: 0,
              secondary: "",
              "data-test": "claude-clear-key",
              onClick: R
            }, {
              default: Jt(() => [
                yq
              ]),
              _: 1
            })) : Xt("", !0)
          ]),
          S.value && !k.value ? (Mt(), yn("div", bq, [
            Pe(z(Z), {
              icon: z(s).MarkComplete,
              class: "saved-icon"
            }, null, 8, ["icon"]),
            Vq
          ])) : Xt("", !0),
          k.value ? (Mt(), yn("div", Cq, " Stored API key will be removed on save. ")) : Xt("", !0),
          z(u).claudeUsage ? (Mt(), yn("div", Sq, [
            W("div", kq, [
              W("span", Eq, "Last " + qe(z(u).claudeUsage.daysWindow) + " days:", 1),
              W("span", {
                class: "usage-tokens",
                title: `${z(u).claudeUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "claude-usage-tokens"
              }, qe(r(z(u).claudeUsage.totalTokens)) + " tokens ", 9, Iq),
              W("span", {
                class: "usage-cost",
                title: z(u).claudeUsage.pricingNote,
                "data-test": "claude-usage-cost"
              }, " (" + qe(o(z(u).claudeUsage.estimatedCostUsd)) + ") ", 9, xq),
              W("button", {
                type: "button",
                class: "usage-toggle",
                onClick: te[5] || (te[5] = (ne) => le.value = !le.value),
                "data-test": "claude-usage-toggle"
              }, qe(le.value ? "hide details" : "show details"), 1)
            ]),
            le.value ? (Mt(), yn("dl", Aq, [
              W("div", null, [
                Bq,
                W("dd", null, qe(r(z(u).claudeUsage.inputTokens)), 1)
              ]),
              W("div", null, [
                Tq,
                W("dd", null, qe(r(z(u).claudeUsage.outputTokens)), 1)
              ]),
              W("div", null, [
                Dq,
                W("dd", null, qe(r(z(u).claudeUsage.cacheReadInputTokens)), 1)
              ]),
              W("div", null, [
                Nq,
                W("dd", null, qe(r(z(u).claudeUsage.cacheCreationInputTokens)), 1)
              ]),
              W("div", null, [
                Lq,
                W("dd", null, [
                  at(qe(z(u).claudeUsage.calls) + " ", 1),
                  W("span", Mq, "(" + qe(z(u).claudeUsage.successfulCalls) + " ok / " + qe(z(u).claudeUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              W("div", null, [
                Oq,
                W("dd", null, qe((z(u).claudeUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              W("div", Pq, qe(z(u).claudeUsage.pricingNote), 1)
            ])) : Xt("", !0)
          ])) : Xt("", !0)
        ]),
        z(T) ? (Mt(), yn("div", Rq, [
          W("div", Fq, [
            Uq,
            W("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": I.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: te[6] || (te[6] = (ne) => I.value = !I.value)
            }, [
              Pe(z(Z), {
                icon: z(s).Help
              }, null, 8, ["icon"])
            ], 8, Wq),
            W("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: ye
            }, [
              Pe(z(Z), {
                icon: z(s).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          I.value ? (Mt(), yn("div", qq, [
            W("ul", null, [
              W("li", null, [
                Hq,
                zq,
                W("em", null, "Default: " + qe(a.alpha), 1)
              ]),
              W("li", null, [
                Yq,
                Gq,
                jq,
                Zq,
                W("em", null, "Default: " + qe(a.beta), 1)
              ]),
              W("li", null, [
                Kq,
                Jq,
                W("em", null, "Default: " + qe(a.epsilon), 1)
              ]),
              z(D) ? (Mt(), yn(Lm, { key: 0 }, [
                W("li", Xq, [
                  Qq,
                  eH,
                  W("em", null, "Default: " + qe(a.hellingerW), 1)
                ]),
                W("li", tH, [
                  nH,
                  rH,
                  W("em", null, "Default: " + qe(a.hellingerBias), 1)
                ])
              ], 64)) : Xt("", !0)
            ])
          ])) : Xt("", !0),
          W("div", oH, [
            Pe(z(Do), {
              modelValue: w.value,
              "onUpdate:modelValue": te[7] || (te[7] = (ne) => w.value = ne),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Pe(z(Do), {
              modelValue: v.value,
              "onUpdate:modelValue": te[8] || (te[8] = (ne) => v.value = ne),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Pe(z(Do), {
              modelValue: _.value,
              "onUpdate:modelValue": te[9] || (te[9] = (ne) => _.value = ne),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            z(D) ? (Mt(), Jc(z(Do), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": te[10] || (te[10] = (ne) => $.value = ne),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Xt("", !0),
            z(D) ? (Mt(), Jc(z(Do), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": te[11] || (te[11] = (ne) => y.value = ne),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Xt("", !0)
          ])
        ])) : Xt("", !0),
        W("div", iH, [
          Pe(z(ae), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: we
          }, {
            default: Jt(() => [
              sH
            ]),
            _: 1
          }),
          Pe(z(ae), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Fe
          }, {
            default: Jt(() => [
              aH
            ]),
            _: 1
          }),
          Pe(z(ae), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Ae
          }, {
            default: Jt(() => [
              Pe(z(Z), {
                icon: z(s).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              lH
            ]),
            _: 1
          })
        ]),
        Pe(z(bl), {
          modelValue: O.value,
          "onUpdate:modelValue": te[13] || (te[13] = (ne) => O.value = ne),
          right: "",
          error: H.value,
          timeout: 6e3
        }, {
          button: Jt(() => [
            Pe(z(ae), {
              onClick: te[12] || (te[12] = (ne) => O.value = !1),
              text: ""
            }, {
              default: Jt(() => [
                uH
              ]),
              _: 1
            })
          ]),
          default: Jt(() => [
            at(qe($e.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const hH = /* @__PURE__ */ de(fH, [["__scopeId", "data-v-4b49dbf7"]]), pH = window.VueRouter.createRouter, wH = window.VueRouter.createWebHistory, vH = async () => {
  const e = Xr();
  e.userId || await e.getUserRole();
}, qg = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || Hg;
      await Xr().getUserRole(), r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => vH(),
    component: sM
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
      await Xr().getEngineInfo();
    },
    component: hH
  }
], Qc = window.VRouter;
if (Qc) {
  const e = "Plugin-alecUiExtension", r = Qc.hasRoute(e) ? e : "Plugin";
  for (const o of qg) {
    const { path: s, name: a, component: u, beforeEnter: c } = o;
    Qc.addRoute(r, {
      path: s.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const Hg = pH({
  history: wH(),
  routes: qg
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = PS;
