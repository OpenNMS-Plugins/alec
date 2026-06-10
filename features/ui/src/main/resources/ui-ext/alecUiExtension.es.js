const de = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
}, ES = {}, IS = window.Vue.resolveComponent, AS = window.Vue.createVNode, xS = window.Vue.openBlock, LS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const TS = { class: "main" };
function BS(e, o) {
  const r = IS("router-view");
  return xS(), LS("div", TS, [
    AS(r)
  ]);
}
const MS = /* @__PURE__ */ de(ES, [["render", BS], ["__scopeId", "data-v-5d32d140"]]), DS = window.Vue.defineComponent, NS = window.Vue.openBlock, OS = window.Vue.createBlock, PS = /* @__PURE__ */ DS({
  __name: "App",
  setup(e) {
    return (o, r) => (NS(), OS(MS));
  }
});
var Ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function RS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qm = { exports: {} }, Nd = { exports: {} }, e_ = function(o, r) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return o.apply(r, a);
  };
}, FS = e_, Od = Object.prototype.toString, Pd = function(e) {
  return function(o) {
    var r = Od.call(o);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function ur(e) {
  return e = e.toLowerCase(), function(r) {
    return Pd(r) === e;
  };
}
function Rd(e) {
  return Array.isArray(e);
}
function gl(e) {
  return typeof e > "u";
}
function US(e) {
  return e !== null && !gl(e) && e.constructor !== null && !gl(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var t_ = ur("ArrayBuffer");
function WS(e) {
  var o;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? o = ArrayBuffer.isView(e) : o = e && e.buffer && t_(e.buffer), o;
}
function qS(e) {
  return typeof e == "string";
}
function HS(e) {
  return typeof e == "number";
}
function n_(e) {
  return e !== null && typeof e == "object";
}
function dl(e) {
  if (Pd(e) !== "object")
    return !1;
  var o = Object.getPrototypeOf(e);
  return o === null || o === Object.prototype;
}
var zS = ur("Date"), YS = ur("File"), GS = ur("Blob"), jS = ur("FileList");
function Fd(e) {
  return Od.call(e) === "[object Function]";
}
function ZS(e) {
  return n_(e) && Fd(e.pipe);
}
function KS(e) {
  var o = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Od.call(e) === o || Fd(e.toString) && e.toString() === o);
}
var JS = ur("URLSearchParams");
function XS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function QS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Ud(e, o) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Rd(e))
      for (var r = 0, i = e.length; r < i; r++)
        o.call(null, e[r], r, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && o.call(null, e[a], a, e);
}
function yd() {
  var e = {};
  function o(a, u) {
    dl(e[u]) && dl(a) ? e[u] = yd(e[u], a) : dl(a) ? e[u] = yd({}, a) : Rd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var r = 0, i = arguments.length; r < i; r++)
    Ud(arguments[r], o);
  return e;
}
function ek(e, o, r) {
  return Ud(o, function(a, u) {
    r && typeof a == "function" ? e[u] = FS(a, r) : e[u] = a;
  }), e;
}
function tk(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function nk(e, o, r, i) {
  e.prototype = Object.create(o.prototype, i), e.prototype.constructor = e, r && Object.assign(e.prototype, r);
}
function ok(e, o, r) {
  var i, a, u, c = {};
  o = o || {};
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      u = i[a], c[u] || (o[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!r || r(e, o)) && e !== Object.prototype);
  return o;
}
function rk(e, o, r) {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= o.length;
  var i = e.indexOf(o, r);
  return i !== -1 && i === r;
}
function sk(e) {
  if (!e)
    return null;
  var o = e.length;
  if (gl(o))
    return null;
  for (var r = new Array(o); o-- > 0; )
    r[o] = e[o];
  return r;
}
var ik = function(e) {
  return function(o) {
    return e && o instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), nt = {
  isArray: Rd,
  isArrayBuffer: t_,
  isBuffer: US,
  isFormData: KS,
  isArrayBufferView: WS,
  isString: qS,
  isNumber: HS,
  isObject: n_,
  isPlainObject: dl,
  isUndefined: gl,
  isDate: zS,
  isFile: YS,
  isBlob: GS,
  isFunction: Fd,
  isStream: ZS,
  isURLSearchParams: JS,
  isStandardBrowserEnv: QS,
  forEach: Ud,
  merge: yd,
  extend: ek,
  trim: XS,
  stripBOM: tk,
  inherits: nk,
  toFlatObject: ok,
  kindOf: Pd,
  kindOfTest: ur,
  endsWith: rk,
  toArray: sk,
  isTypedArray: ik,
  isFileList: jS
}, Wr = nt;
function Rp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var o_ = function(o, r, i) {
  if (!r)
    return o;
  var a;
  if (i)
    a = i(r);
  else if (Wr.isURLSearchParams(r))
    a = r.toString();
  else {
    var u = [];
    Wr.forEach(r, function(w, v) {
      w === null || typeof w > "u" || (Wr.isArray(w) ? v = v + "[]" : w = [w], Wr.forEach(w, function($) {
        Wr.isDate($) ? $ = $.toISOString() : Wr.isObject($) && ($ = JSON.stringify($)), u.push(Rp(v) + "=" + Rp($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = o.indexOf("#");
    c !== -1 && (o = o.slice(0, c)), o += (o.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return o;
}, ak = nt;
function Tl() {
  this.handlers = [];
}
Tl.prototype.use = function(o, r, i) {
  return this.handlers.push({
    fulfilled: o,
    rejected: r,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
Tl.prototype.eject = function(o) {
  this.handlers[o] && (this.handlers[o] = null);
};
Tl.prototype.forEach = function(o) {
  ak.forEach(this.handlers, function(i) {
    i !== null && o(i);
  });
};
var lk = Tl, uk = nt, ck = function(o, r) {
  uk.forEach(o, function(a, u) {
    u !== r && u.toUpperCase() === r.toUpperCase() && (o[r] = a, delete o[u]);
  });
}, r_ = nt;
function hs(e, o, r, i, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", o && (this.code = o), r && (this.config = r), i && (this.request = i), a && (this.response = a);
}
r_.inherits(hs, Error, {
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
var s_ = hs.prototype, i_ = {};
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
  i_[e] = { value: e };
});
Object.defineProperties(hs, i_);
Object.defineProperty(s_, "isAxiosError", { value: !0 });
hs.from = function(e, o, r, i, a, u) {
  var c = Object.create(s_);
  return r_.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), hs.call(c, e.message, o, r, i, a), c.name = e.name, u && Object.assign(c, u), c;
};
var ms = hs, a_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fn = nt;
function dk(e, o) {
  o = o || new FormData();
  var r = [];
  function i(u) {
    return u === null ? "" : fn.isDate(u) ? u.toISOString() : fn.isArrayBuffer(u) || fn.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (fn.isPlainObject(u) || fn.isArray(u)) {
      if (r.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      r.push(u), fn.forEach(u, function(w, v) {
        if (!fn.isUndefined(w)) {
          var _ = c ? c + "." + v : v, $;
          if (w && !c && typeof w == "object") {
            if (fn.endsWith(v, "{}"))
              w = JSON.stringify(w);
            else if (fn.endsWith(v, "[]") && ($ = fn.toArray(w))) {
              $.forEach(function(y) {
                !fn.isUndefined(y) && o.append(_, i(y));
              });
              return;
            }
          }
          a(w, _);
        }
      }), r.pop();
    } else
      o.append(c, i(u));
  }
  return a(e), o;
}
var l_ = dk, fc, Fp;
function fk() {
  if (Fp)
    return fc;
  Fp = 1;
  var e = ms;
  return fc = function(r, i, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? r(a) : i(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, fc;
}
var hc, Up;
function hk() {
  if (Up)
    return hc;
  Up = 1;
  var e = nt;
  return hc = e.isStandardBrowserEnv() ? function() {
    return {
      write: function(i, a, u, c, f, w) {
        var v = [];
        v.push(i + "=" + encodeURIComponent(a)), e.isNumber(u) && v.push("expires=" + new Date(u).toGMTString()), e.isString(c) && v.push("path=" + c), e.isString(f) && v.push("domain=" + f), w === !0 && v.push("secure"), document.cookie = v.join("; ");
      },
      read: function(i) {
        var a = document.cookie.match(new RegExp("(^|;\\s*)(" + i + ")=([^;]*)"));
        return a ? decodeURIComponent(a[3]) : null;
      },
      remove: function(i) {
        this.write(i, "", Date.now() - 864e5);
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
  }(), hc;
}
var pk = function(o) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(o);
}, wk = function(o, r) {
  return r ? o.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : o;
}, vk = pk, mk = wk, u_ = function(o, r) {
  return o && !vk(r) ? mk(o, r) : r;
}, pc, Wp;
function _k() {
  if (Wp)
    return pc;
  Wp = 1;
  var e = nt, o = [
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
  return pc = function(i) {
    var a = {}, u, c, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && o.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, pc;
}
var wc, qp;
function gk() {
  if (qp)
    return wc;
  qp = 1;
  var e = nt;
  return wc = e.isStandardBrowserEnv() ? function() {
    var r = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), a;
    function u(c) {
      var f = c;
      return r && (i.setAttribute("href", f), f = i.href), i.setAttribute("href", f), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
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
  }(), wc;
}
var vc, Hp;
function Bl() {
  if (Hp)
    return vc;
  Hp = 1;
  var e = ms, o = nt;
  function r(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return o.inherits(r, e, {
    __CANCEL__: !0
  }), vc = r, vc;
}
var mc, zp;
function $k() {
  return zp || (zp = 1, mc = function(o) {
    var r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(o);
    return r && r[1] || "";
  }), mc;
}
var _c, Yp;
function Gp() {
  if (Yp)
    return _c;
  Yp = 1;
  var e = nt, o = fk(), r = hk(), i = o_, a = u_, u = _k(), c = gk(), f = a_, w = ms, v = Bl(), _ = $k();
  return _c = function(y) {
    return new Promise(function(B, N) {
      var D = y.data, S = y.headers, A = y.responseType, E;
      function O() {
        y.cancelToken && y.cancelToken.unsubscribe(E), y.signal && y.signal.removeEventListener("abort", E);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var R = y.auth.username || "", F = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(R + ":" + F);
      }
      var z = a(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), i(z, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function ke() {
        if (!!k) {
          var xe = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, ve = !A || A === "text" || A === "json" ? k.responseText : k.response, _e = {
            data: ve,
            status: k.status,
            statusText: k.statusText,
            headers: xe,
            config: y,
            request: k
          };
          o(function(Ne) {
            B(Ne), O();
          }, function(Ne) {
            N(Ne), O();
          }, _e), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = ke : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(ke);
      }, k.onabort = function() {
        !k || (N(new w("Request aborted", w.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        N(new w("Network Error", w.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var ve = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", _e = y.transitional || f;
        y.timeoutErrorMessage && (ve = y.timeoutErrorMessage), N(new w(
          ve,
          _e.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var we = (y.withCredentials || c(z)) && y.xsrfCookieName ? r.read(y.xsrfCookieName) : void 0;
        we && (S[y.xsrfHeaderName] = we);
      }
      "setRequestHeader" in k && e.forEach(S, function(ve, _e) {
        typeof D > "u" && _e.toLowerCase() === "content-type" ? delete S[_e] : k.setRequestHeader(_e, ve);
      }), e.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), A && A !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (E = function(xe) {
        !k || (N(!xe || xe && xe.type ? new v() : xe), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(E), y.signal && (y.signal.aborted ? E() : y.signal.addEventListener("abort", E))), D || (D = null);
      var Ve = _(z);
      if (Ve && ["http", "https", "file"].indexOf(Ve) === -1) {
        N(new w("Unsupported protocol " + Ve + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(D);
    });
  }, _c;
}
var gc, jp;
function yk() {
  return jp || (jp = 1, gc = null), gc;
}
var Ke = nt, Zp = ck, Kp = ms, bk = a_, Vk = l_, Ck = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Jp(e, o) {
  !Ke.isUndefined(e) && Ke.isUndefined(e["Content-Type"]) && (e["Content-Type"] = o);
}
function Sk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = Gp()), e;
}
function kk(e, o, r) {
  if (Ke.isString(e))
    try {
      return (o || JSON.parse)(e), Ke.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (r || JSON.stringify)(e);
}
var Ml = {
  transitional: bk,
  adapter: Sk(),
  transformRequest: [function(o, r) {
    if (Zp(r, "Accept"), Zp(r, "Content-Type"), Ke.isFormData(o) || Ke.isArrayBuffer(o) || Ke.isBuffer(o) || Ke.isStream(o) || Ke.isFile(o) || Ke.isBlob(o))
      return o;
    if (Ke.isArrayBufferView(o))
      return o.buffer;
    if (Ke.isURLSearchParams(o))
      return Jp(r, "application/x-www-form-urlencoded;charset=utf-8"), o.toString();
    var i = Ke.isObject(o), a = r && r["Content-Type"], u;
    if ((u = Ke.isFileList(o)) || i && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return Vk(u ? { "files[]": o } : o, c && new c());
    } else if (i || a === "application/json")
      return Jp(r, "application/json"), kk(o);
    return o;
  }],
  transformResponse: [function(o) {
    var r = this.transitional || Ml.transitional, i = r && r.silentJSONParsing, a = r && r.forcedJSONParsing, u = !i && this.responseType === "json";
    if (u || a && Ke.isString(o) && o.length)
      try {
        return JSON.parse(o);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Kp.from(c, Kp.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    return o;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: yk()
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
Ke.forEach(["delete", "get", "head"], function(o) {
  Ml.headers[o] = {};
});
Ke.forEach(["post", "put", "patch"], function(o) {
  Ml.headers[o] = Ke.merge(Ck);
});
var Wd = Ml, Ek = nt, Ik = Wd, Ak = function(o, r, i) {
  var a = this || Ik;
  return Ek.forEach(i, function(c) {
    o = c.call(a, o, r);
  }), o;
}, $c, Xp;
function c_() {
  return Xp || (Xp = 1, $c = function(o) {
    return !!(o && o.__CANCEL__);
  }), $c;
}
var Qp = nt, yc = Ak, xk = c_(), Lk = Wd, Tk = Bl();
function bc(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Tk();
}
var Bk = function(o) {
  bc(o), o.headers = o.headers || {}, o.data = yc.call(
    o,
    o.data,
    o.headers,
    o.transformRequest
  ), o.headers = Qp.merge(
    o.headers.common || {},
    o.headers[o.method] || {},
    o.headers
  ), Qp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete o.headers[a];
    }
  );
  var r = o.adapter || Lk.adapter;
  return r(o).then(function(a) {
    return bc(o), a.data = yc.call(
      o,
      a.data,
      a.headers,
      o.transformResponse
    ), a;
  }, function(a) {
    return xk(a) || (bc(o), a && a.response && (a.response.data = yc.call(
      o,
      a.response.data,
      a.response.headers,
      o.transformResponse
    ))), Promise.reject(a);
  });
}, Nt = nt, d_ = function(o, r) {
  r = r || {};
  var i = {};
  function a(_, $) {
    return Nt.isPlainObject(_) && Nt.isPlainObject($) ? Nt.merge(_, $) : Nt.isPlainObject($) ? Nt.merge({}, $) : Nt.isArray($) ? $.slice() : $;
  }
  function u(_) {
    if (Nt.isUndefined(r[_])) {
      if (!Nt.isUndefined(o[_]))
        return a(void 0, o[_]);
    } else
      return a(o[_], r[_]);
  }
  function c(_) {
    if (!Nt.isUndefined(r[_]))
      return a(void 0, r[_]);
  }
  function f(_) {
    if (Nt.isUndefined(r[_])) {
      if (!Nt.isUndefined(o[_]))
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
  return Nt.forEach(Object.keys(o).concat(Object.keys(r)), function($) {
    var y = v[$] || u, T = y($);
    Nt.isUndefined(T) && y !== w || (i[$] = T);
  }), i;
}, Vc, ew;
function f_() {
  return ew || (ew = 1, Vc = {
    version: "0.27.2"
  }), Vc;
}
var Mk = f_().version, _o = ms, qd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, o) {
  qd[e] = function(i) {
    return typeof i === e || "a" + (o < 1 ? "n " : " ") + e;
  };
});
var tw = {};
qd.transitional = function(o, r, i) {
  function a(u, c) {
    return "[Axios v" + Mk + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "");
  }
  return function(u, c, f) {
    if (o === !1)
      throw new _o(
        a(c, " has been removed" + (r ? " in " + r : "")),
        _o.ERR_DEPRECATED
      );
    return r && !tw[c] && (tw[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), o ? o(u, c, f) : !0;
  };
};
function Dk(e, o, r) {
  if (typeof e != "object")
    throw new _o("options must be an object", _o.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), a = i.length; a-- > 0; ) {
    var u = i[a], c = o[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new _o("option " + u + " must be " + w, _o.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new _o("Unknown option " + u, _o.ERR_BAD_OPTION);
  }
}
var Nk = {
  assertOptions: Dk,
  validators: qd
}, h_ = nt, Ok = o_, nw = lk, ow = Bk, Dl = d_, Pk = u_, p_ = Nk, qr = p_.validators;
function ps(e) {
  this.defaults = e, this.interceptors = {
    request: new nw(),
    response: new nw()
  };
}
ps.prototype.request = function(o, r) {
  typeof o == "string" ? (r = r || {}, r.url = o) : r = o || {}, r = Dl(this.defaults, r), r.method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = "get";
  var i = r.transitional;
  i !== void 0 && p_.assertOptions(i, {
    silentJSONParsing: qr.transitional(qr.boolean),
    forcedJSONParsing: qr.transitional(qr.boolean),
    clarifyTimeoutError: qr.transitional(qr.boolean)
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
    var w = [ow, void 0];
    for (Array.prototype.unshift.apply(w, a), w = w.concat(c), f = Promise.resolve(r); w.length; )
      f = f.then(w.shift(), w.shift());
    return f;
  }
  for (var v = r; a.length; ) {
    var _ = a.shift(), $ = a.shift();
    try {
      v = _(v);
    } catch (y) {
      $(y);
      break;
    }
  }
  try {
    f = ow(v);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
ps.prototype.getUri = function(o) {
  o = Dl(this.defaults, o);
  var r = Pk(o.baseURL, o.url);
  return Ok(r, o.params, o.paramsSerializer);
};
h_.forEach(["delete", "get", "head", "options"], function(o) {
  ps.prototype[o] = function(r, i) {
    return this.request(Dl(i || {}, {
      method: o,
      url: r,
      data: (i || {}).data
    }));
  };
});
h_.forEach(["post", "put", "patch"], function(o) {
  function r(i) {
    return function(u, c, f) {
      return this.request(Dl(f || {}, {
        method: o,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  ps.prototype[o] = r(), ps.prototype[o + "Form"] = r(!0);
});
var Rk = ps, Cc, rw;
function Fk() {
  if (rw)
    return Cc;
  rw = 1;
  var e = Bl();
  function o(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    var i;
    this.promise = new Promise(function(c) {
      i = c;
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
      a.reason || (a.reason = new e(c), i(a.reason));
    });
  }
  return o.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, o.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, o.prototype.unsubscribe = function(i) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(i);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, o.source = function() {
    var i, a = new o(function(c) {
      i = c;
    });
    return {
      token: a,
      cancel: i
    };
  }, Cc = o, Cc;
}
var Sc, sw;
function Uk() {
  return sw || (sw = 1, Sc = function(o) {
    return function(i) {
      return o.apply(null, i);
    };
  }), Sc;
}
var kc, iw;
function Wk() {
  if (iw)
    return kc;
  iw = 1;
  var e = nt;
  return kc = function(r) {
    return e.isObject(r) && r.isAxiosError === !0;
  }, kc;
}
var aw = nt, qk = e_, fl = Rk, Hk = d_, zk = Wd;
function w_(e) {
  var o = new fl(e), r = qk(fl.prototype.request, o);
  return aw.extend(r, fl.prototype, o), aw.extend(r, o), r.create = function(a) {
    return w_(Hk(e, a));
  }, r;
}
var At = w_(zk);
At.Axios = fl;
At.CanceledError = Bl();
At.CancelToken = Fk();
At.isCancel = c_();
At.VERSION = f_().version;
At.toFormData = l_;
At.AxiosError = ms;
At.Cancel = At.CanceledError;
At.all = function(o) {
  return Promise.all(o);
};
At.spread = Uk();
At.isAxiosError = Wk();
Nd.exports = At;
Nd.exports.default = At;
(function(e) {
  e.exports = Nd.exports;
})(Qm);
const v_ = /* @__PURE__ */ RS(Qm.exports), Gn = v_.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), ot = v_.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var be = { exports: {} };
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
    var r, i = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, T = 4, B = 1, N = 2, D = 1, S = 2, A = 4, E = 8, O = 16, k = 32, R = 64, F = 128, z = 256, ke = 512, we = 30, Ve = "...", xe = 800, ve = 16, _e = 1, oe = 2, Ne = 3, Le = 1 / 0, je = 9007199254740991, ko = 17976931348623157e292, Eo = 0 / 0, Ht = 4294967295, dr = Ht - 1, fr = Ht >>> 1, hr = [
      ["ary", F],
      ["bind", D],
      ["bindKey", S],
      ["curry", E],
      ["curryRight", O],
      ["flip", ke],
      ["partial", k],
      ["partialRight", R],
      ["rearg", z]
    ], xn = "[object Arguments]", Io = "[object Array]", pr = "[object AsyncFunction]", Ao = "[object Boolean]", an = "[object Date]", tu = "[object DOMException]", wr = "[object Error]", vr = "[object Function]", Oi = "[object GeneratorFunction]", mt = "[object Map]", jn = "[object Number]", Pi = "[object Null]", zt = "[object Object]", Ls = "[object Promise]", Ri = "[object Proxy]", Zn = "[object RegExp]", _t = "[object Set]", Kn = "[object String]", xo = "[object Symbol]", Fi = "[object Undefined]", Jn = "[object WeakMap]", Ui = "[object WeakSet]", Xn = "[object ArrayBuffer]", Ln = "[object DataView]", mr = "[object Float32Array]", _r = "[object Float64Array]", gr = "[object Int8Array]", $r = "[object Int16Array]", yr = "[object Int32Array]", br = "[object Uint8Array]", Vr = "[object Uint8ClampedArray]", Cr = "[object Uint16Array]", Sr = "[object Uint32Array]", Wi = /\b__p \+= '';/g, se = /\b(__p \+=) '' \+/g, K = /(__e\(.*?\)|\b__t\)) \+\n'';/g, re = /&(?:amp|lt|gt|quot|#39);/g, Ts = /[&<>"']/g, Bs = RegExp(re.source), qi = RegExp(Ts.source), Hi = /<%-([\s\S]+?)%>/g, zi = /<%([\s\S]+?)%>/g, Ms = /<%=([\s\S]+?)%>/g, Yi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gi = /^\w*$/, ji = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kr = /[\\^$.*+?()[\]{}|]/g, Zi = RegExp(kr.source), Er = /^\s+/, Ki = /\s/, Ji = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Xi = /\{\n\/\* \[wrapped with (.+)\] \*/, l1 = /,? & /, u1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, c1 = /[()=,{}\[\]\/\s]/, d1 = /\\(\\)?/g, f1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hf = /\w*$/, h1 = /^[-+]0x[0-9a-f]+$/i, p1 = /^0b[01]+$/i, w1 = /^\[object .+?Constructor\]$/, v1 = /^0o[0-7]+$/i, m1 = /^(?:0|[1-9]\d*)$/, _1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qi = /($^)/, g1 = /['\n\r\u2028\u2029\\]/g, ea = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", y1 = "\\ufe20-\\ufe2f", b1 = "\\u20d0-\\u20ff", pf = $1 + y1 + b1, wf = "\\u2700-\\u27bf", vf = "a-z\\xdf-\\xf6\\xf8-\\xff", V1 = "\\xac\\xb1\\xd7\\xf7", C1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", S1 = "\\u2000-\\u206f", k1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", mf = "A-Z\\xc0-\\xd6\\xd8-\\xde", _f = "\\ufe0e\\ufe0f", gf = V1 + C1 + S1 + k1, nu = "['\u2019]", E1 = "[" + ea + "]", $f = "[" + gf + "]", ta = "[" + pf + "]", yf = "\\d+", I1 = "[" + wf + "]", bf = "[" + vf + "]", Vf = "[^" + ea + gf + yf + wf + vf + mf + "]", ou = "\\ud83c[\\udffb-\\udfff]", A1 = "(?:" + ta + "|" + ou + ")", Cf = "[^" + ea + "]", ru = "(?:\\ud83c[\\udde6-\\uddff]){2}", su = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ir = "[" + mf + "]", Sf = "\\u200d", kf = "(?:" + bf + "|" + Vf + ")", x1 = "(?:" + Ir + "|" + Vf + ")", Ef = "(?:" + nu + "(?:d|ll|m|re|s|t|ve))?", If = "(?:" + nu + "(?:D|LL|M|RE|S|T|VE))?", Af = A1 + "?", xf = "[" + _f + "]?", L1 = "(?:" + Sf + "(?:" + [Cf, ru, su].join("|") + ")" + xf + Af + ")*", T1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", B1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Lf = xf + Af + L1, M1 = "(?:" + [I1, ru, su].join("|") + ")" + Lf, D1 = "(?:" + [Cf + ta + "?", ta, ru, su, E1].join("|") + ")", N1 = RegExp(nu, "g"), O1 = RegExp(ta, "g"), iu = RegExp(ou + "(?=" + ou + ")|" + D1 + Lf, "g"), P1 = RegExp([
      Ir + "?" + bf + "+" + Ef + "(?=" + [$f, Ir, "$"].join("|") + ")",
      x1 + "+" + If + "(?=" + [$f, Ir + kf, "$"].join("|") + ")",
      Ir + "?" + kf + "+" + Ef,
      Ir + "+" + If,
      B1,
      T1,
      yf,
      M1
    ].join("|"), "g"), R1 = RegExp("[" + Sf + ea + pf + _f + "]"), F1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, U1 = [
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
    ], W1 = -1, Ae = {};
    Ae[mr] = Ae[_r] = Ae[gr] = Ae[$r] = Ae[yr] = Ae[br] = Ae[Vr] = Ae[Cr] = Ae[Sr] = !0, Ae[xn] = Ae[Io] = Ae[Xn] = Ae[Ao] = Ae[Ln] = Ae[an] = Ae[wr] = Ae[vr] = Ae[mt] = Ae[jn] = Ae[zt] = Ae[Zn] = Ae[_t] = Ae[Kn] = Ae[Jn] = !1;
    var Ee = {};
    Ee[xn] = Ee[Io] = Ee[Xn] = Ee[Ln] = Ee[Ao] = Ee[an] = Ee[mr] = Ee[_r] = Ee[gr] = Ee[$r] = Ee[yr] = Ee[mt] = Ee[jn] = Ee[zt] = Ee[Zn] = Ee[_t] = Ee[Kn] = Ee[xo] = Ee[br] = Ee[Vr] = Ee[Cr] = Ee[Sr] = !0, Ee[wr] = Ee[vr] = Ee[Jn] = !1;
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
    }, G1 = parseFloat, j1 = parseInt, Tf = typeof Ks == "object" && Ks && Ks.Object === Object && Ks, Z1 = typeof self == "object" && self && self.Object === Object && self, Je = Tf || Z1 || Function("return this")(), au = o && !o.nodeType && o, Lo = au && !0 && e && !e.nodeType && e, Bf = Lo && Lo.exports === au, lu = Bf && Tf.process, Yt = function() {
      try {
        var b = Lo && Lo.require && Lo.require("util").types;
        return b || lu && lu.binding && lu.binding("util");
      } catch {
      }
    }(), Mf = Yt && Yt.isArrayBuffer, Df = Yt && Yt.isDate, Nf = Yt && Yt.isMap, Of = Yt && Yt.isRegExp, Pf = Yt && Yt.isSet, Rf = Yt && Yt.isTypedArray;
    function xt(b, I, C) {
      switch (C.length) {
        case 0:
          return b.call(I);
        case 1:
          return b.call(I, C[0]);
        case 2:
          return b.call(I, C[0], C[1]);
        case 3:
          return b.call(I, C[0], C[1], C[2]);
      }
      return b.apply(I, C);
    }
    function K1(b, I, C, q) {
      for (var J = -1, fe = b == null ? 0 : b.length; ++J < fe; ) {
        var He = b[J];
        I(q, He, C(He), b);
      }
      return q;
    }
    function Gt(b, I) {
      for (var C = -1, q = b == null ? 0 : b.length; ++C < q && I(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function J1(b, I) {
      for (var C = b == null ? 0 : b.length; C-- && I(b[C], C, b) !== !1; )
        ;
      return b;
    }
    function Ff(b, I) {
      for (var C = -1, q = b == null ? 0 : b.length; ++C < q; )
        if (!I(b[C], C, b))
          return !1;
      return !0;
    }
    function Qn(b, I) {
      for (var C = -1, q = b == null ? 0 : b.length, J = 0, fe = []; ++C < q; ) {
        var He = b[C];
        I(He, C, b) && (fe[J++] = He);
      }
      return fe;
    }
    function na(b, I) {
      var C = b == null ? 0 : b.length;
      return !!C && Ar(b, I, 0) > -1;
    }
    function uu(b, I, C) {
      for (var q = -1, J = b == null ? 0 : b.length; ++q < J; )
        if (C(I, b[q]))
          return !0;
      return !1;
    }
    function Te(b, I) {
      for (var C = -1, q = b == null ? 0 : b.length, J = Array(q); ++C < q; )
        J[C] = I(b[C], C, b);
      return J;
    }
    function eo(b, I) {
      for (var C = -1, q = I.length, J = b.length; ++C < q; )
        b[J + C] = I[C];
      return b;
    }
    function cu(b, I, C, q) {
      var J = -1, fe = b == null ? 0 : b.length;
      for (q && fe && (C = b[++J]); ++J < fe; )
        C = I(C, b[J], J, b);
      return C;
    }
    function X1(b, I, C, q) {
      var J = b == null ? 0 : b.length;
      for (q && J && (C = b[--J]); J--; )
        C = I(C, b[J], J, b);
      return C;
    }
    function du(b, I) {
      for (var C = -1, q = b == null ? 0 : b.length; ++C < q; )
        if (I(b[C], C, b))
          return !0;
      return !1;
    }
    var Q1 = fu("length");
    function e0(b) {
      return b.split("");
    }
    function t0(b) {
      return b.match(u1) || [];
    }
    function Uf(b, I, C) {
      var q;
      return C(b, function(J, fe, He) {
        if (I(J, fe, He))
          return q = fe, !1;
      }), q;
    }
    function oa(b, I, C, q) {
      for (var J = b.length, fe = C + (q ? 1 : -1); q ? fe-- : ++fe < J; )
        if (I(b[fe], fe, b))
          return fe;
      return -1;
    }
    function Ar(b, I, C) {
      return I === I ? h0(b, I, C) : oa(b, Wf, C);
    }
    function n0(b, I, C, q) {
      for (var J = C - 1, fe = b.length; ++J < fe; )
        if (q(b[J], I))
          return J;
      return -1;
    }
    function Wf(b) {
      return b !== b;
    }
    function qf(b, I) {
      var C = b == null ? 0 : b.length;
      return C ? pu(b, I) / C : Eo;
    }
    function fu(b) {
      return function(I) {
        return I == null ? r : I[b];
      };
    }
    function hu(b) {
      return function(I) {
        return b == null ? r : b[I];
      };
    }
    function Hf(b, I, C, q, J) {
      return J(b, function(fe, He, Ce) {
        C = q ? (q = !1, fe) : I(C, fe, He, Ce);
      }), C;
    }
    function o0(b, I) {
      var C = b.length;
      for (b.sort(I); C--; )
        b[C] = b[C].value;
      return b;
    }
    function pu(b, I) {
      for (var C, q = -1, J = b.length; ++q < J; ) {
        var fe = I(b[q]);
        fe !== r && (C = C === r ? fe : C + fe);
      }
      return C;
    }
    function wu(b, I) {
      for (var C = -1, q = Array(b); ++C < b; )
        q[C] = I(C);
      return q;
    }
    function r0(b, I) {
      return Te(I, function(C) {
        return [C, b[C]];
      });
    }
    function zf(b) {
      return b && b.slice(0, Zf(b) + 1).replace(Er, "");
    }
    function Lt(b) {
      return function(I) {
        return b(I);
      };
    }
    function vu(b, I) {
      return Te(I, function(C) {
        return b[C];
      });
    }
    function Ds(b, I) {
      return b.has(I);
    }
    function Yf(b, I) {
      for (var C = -1, q = b.length; ++C < q && Ar(I, b[C], 0) > -1; )
        ;
      return C;
    }
    function Gf(b, I) {
      for (var C = b.length; C-- && Ar(I, b[C], 0) > -1; )
        ;
      return C;
    }
    function s0(b, I) {
      for (var C = b.length, q = 0; C--; )
        b[C] === I && ++q;
      return q;
    }
    var i0 = hu(q1), a0 = hu(H1);
    function l0(b) {
      return "\\" + Y1[b];
    }
    function u0(b, I) {
      return b == null ? r : b[I];
    }
    function xr(b) {
      return R1.test(b);
    }
    function c0(b) {
      return F1.test(b);
    }
    function d0(b) {
      for (var I, C = []; !(I = b.next()).done; )
        C.push(I.value);
      return C;
    }
    function mu(b) {
      var I = -1, C = Array(b.size);
      return b.forEach(function(q, J) {
        C[++I] = [J, q];
      }), C;
    }
    function jf(b, I) {
      return function(C) {
        return b(I(C));
      };
    }
    function to(b, I) {
      for (var C = -1, q = b.length, J = 0, fe = []; ++C < q; ) {
        var He = b[C];
        (He === I || He === _) && (b[C] = _, fe[J++] = C);
      }
      return fe;
    }
    function ra(b) {
      var I = -1, C = Array(b.size);
      return b.forEach(function(q) {
        C[++I] = q;
      }), C;
    }
    function f0(b) {
      var I = -1, C = Array(b.size);
      return b.forEach(function(q) {
        C[++I] = [q, q];
      }), C;
    }
    function h0(b, I, C) {
      for (var q = C - 1, J = b.length; ++q < J; )
        if (b[q] === I)
          return q;
      return -1;
    }
    function p0(b, I, C) {
      for (var q = C + 1; q--; )
        if (b[q] === I)
          return q;
      return q;
    }
    function Lr(b) {
      return xr(b) ? v0(b) : Q1(b);
    }
    function ln(b) {
      return xr(b) ? m0(b) : e0(b);
    }
    function Zf(b) {
      for (var I = b.length; I-- && Ki.test(b.charAt(I)); )
        ;
      return I;
    }
    var w0 = hu(z1);
    function v0(b) {
      for (var I = iu.lastIndex = 0; iu.test(b); )
        ++I;
      return I;
    }
    function m0(b) {
      return b.match(iu) || [];
    }
    function _0(b) {
      return b.match(P1) || [];
    }
    var g0 = function b(I) {
      I = I == null ? Je : Tr.defaults(Je.Object(), I, Tr.pick(Je, U1));
      var C = I.Array, q = I.Date, J = I.Error, fe = I.Function, He = I.Math, Ce = I.Object, _u = I.RegExp, $0 = I.String, jt = I.TypeError, sa = C.prototype, y0 = fe.prototype, Br = Ce.prototype, ia = I["__core-js_shared__"], aa = y0.toString, ge = Br.hasOwnProperty, b0 = 0, Kf = function() {
        var t = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), la = Br.toString, V0 = aa.call(Ce), C0 = Je._, S0 = _u(
        "^" + aa.call(ge).replace(kr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ua = Bf ? I.Buffer : r, no = I.Symbol, ca = I.Uint8Array, Jf = ua ? ua.allocUnsafe : r, da = jf(Ce.getPrototypeOf, Ce), Xf = Ce.create, Qf = Br.propertyIsEnumerable, fa = sa.splice, eh = no ? no.isConcatSpreadable : r, Ns = no ? no.iterator : r, To = no ? no.toStringTag : r, ha = function() {
        try {
          var t = Oo(Ce, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), k0 = I.clearTimeout !== Je.clearTimeout && I.clearTimeout, E0 = q && q.now !== Je.Date.now && q.now, I0 = I.setTimeout !== Je.setTimeout && I.setTimeout, pa = He.ceil, wa = He.floor, gu = Ce.getOwnPropertySymbols, A0 = ua ? ua.isBuffer : r, th = I.isFinite, x0 = sa.join, L0 = jf(Ce.keys, Ce), ze = He.max, rt = He.min, T0 = q.now, B0 = I.parseInt, nh = He.random, M0 = sa.reverse, $u = Oo(I, "DataView"), Os = Oo(I, "Map"), yu = Oo(I, "Promise"), Mr = Oo(I, "Set"), Ps = Oo(I, "WeakMap"), Rs = Oo(Ce, "create"), va = Ps && new Ps(), Dr = {}, D0 = Po($u), N0 = Po(Os), O0 = Po(yu), P0 = Po(Mr), R0 = Po(Ps), ma = no ? no.prototype : r, Fs = ma ? ma.valueOf : r, oh = ma ? ma.toString : r;
      function h(t) {
        if (Oe(t) && !X(t) && !(t instanceof ae)) {
          if (t instanceof Zt)
            return t;
          if (ge.call(t, "__wrapped__"))
            return rp(t);
        }
        return new Zt(t);
      }
      var Nr = function() {
        function t() {
        }
        return function(n) {
          if (!Me(n))
            return {};
          if (Xf)
            return Xf(n);
          t.prototype = n;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function _a() {
      }
      function Zt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = r;
      }
      h.templateSettings = {
        escape: Hi,
        evaluate: zi,
        interpolate: Ms,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = _a.prototype, h.prototype.constructor = h, Zt.prototype = Nr(_a.prototype), Zt.prototype.constructor = Zt;
      function ae(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ht, this.__views__ = [];
      }
      function F0() {
        var t = new ae(this.__wrapped__);
        return t.__actions__ = gt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = gt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = gt(this.__views__), t;
      }
      function U0() {
        if (this.__filtered__) {
          var t = new ae(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function W0() {
        var t = this.__wrapped__.value(), n = this.__dir__, s = X(t), l = n < 0, d = s ? t.length : 0, p = ey(0, d, this.__views__), m = p.start, g = p.end, V = g - m, x = l ? g : m - 1, L = this.__iteratees__, M = L.length, U = 0, H = rt(V, this.__takeCount__);
        if (!s || !l && d == V && H == V)
          return Eh(t, this.__actions__);
        var j = [];
        e:
          for (; V-- && U < H; ) {
            x += n;
            for (var ee = -1, Z = t[x]; ++ee < M; ) {
              var ie = L[ee], ue = ie.iteratee, Mt = ie.type, ft = ue(Z);
              if (Mt == oe)
                Z = ft;
              else if (!ft) {
                if (Mt == _e)
                  continue e;
                break e;
              }
            }
            j[U++] = Z;
          }
        return j;
      }
      ae.prototype = Nr(_a.prototype), ae.prototype.constructor = ae;
      function Bo(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function q0() {
        this.__data__ = Rs ? Rs(null) : {}, this.size = 0;
      }
      function H0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function z0(t) {
        var n = this.__data__;
        if (Rs) {
          var s = n[t];
          return s === w ? r : s;
        }
        return ge.call(n, t) ? n[t] : r;
      }
      function Y0(t) {
        var n = this.__data__;
        return Rs ? n[t] !== r : ge.call(n, t);
      }
      function G0(t, n) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = Rs && n === r ? w : n, this;
      }
      Bo.prototype.clear = q0, Bo.prototype.delete = H0, Bo.prototype.get = z0, Bo.prototype.has = Y0, Bo.prototype.set = G0;
      function Tn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function j0() {
        this.__data__ = [], this.size = 0;
      }
      function Z0(t) {
        var n = this.__data__, s = ga(n, t);
        if (s < 0)
          return !1;
        var l = n.length - 1;
        return s == l ? n.pop() : fa.call(n, s, 1), --this.size, !0;
      }
      function K0(t) {
        var n = this.__data__, s = ga(n, t);
        return s < 0 ? r : n[s][1];
      }
      function J0(t) {
        return ga(this.__data__, t) > -1;
      }
      function X0(t, n) {
        var s = this.__data__, l = ga(s, t);
        return l < 0 ? (++this.size, s.push([t, n])) : s[l][1] = n, this;
      }
      Tn.prototype.clear = j0, Tn.prototype.delete = Z0, Tn.prototype.get = K0, Tn.prototype.has = J0, Tn.prototype.set = X0;
      function Bn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Q0() {
        this.size = 0, this.__data__ = {
          hash: new Bo(),
          map: new (Os || Tn)(),
          string: new Bo()
        };
      }
      function e$(t) {
        var n = La(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function t$(t) {
        return La(this, t).get(t);
      }
      function n$(t) {
        return La(this, t).has(t);
      }
      function o$(t, n) {
        var s = La(this, t), l = s.size;
        return s.set(t, n), this.size += s.size == l ? 0 : 1, this;
      }
      Bn.prototype.clear = Q0, Bn.prototype.delete = e$, Bn.prototype.get = t$, Bn.prototype.has = n$, Bn.prototype.set = o$;
      function Mo(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new Bn(); ++n < s; )
          this.add(t[n]);
      }
      function r$(t) {
        return this.__data__.set(t, w), this;
      }
      function s$(t) {
        return this.__data__.has(t);
      }
      Mo.prototype.add = Mo.prototype.push = r$, Mo.prototype.has = s$;
      function un(t) {
        var n = this.__data__ = new Tn(t);
        this.size = n.size;
      }
      function i$() {
        this.__data__ = new Tn(), this.size = 0;
      }
      function a$(t) {
        var n = this.__data__, s = n.delete(t);
        return this.size = n.size, s;
      }
      function l$(t) {
        return this.__data__.get(t);
      }
      function u$(t) {
        return this.__data__.has(t);
      }
      function c$(t, n) {
        var s = this.__data__;
        if (s instanceof Tn) {
          var l = s.__data__;
          if (!Os || l.length < a - 1)
            return l.push([t, n]), this.size = ++s.size, this;
          s = this.__data__ = new Bn(l);
        }
        return s.set(t, n), this.size = s.size, this;
      }
      un.prototype.clear = i$, un.prototype.delete = a$, un.prototype.get = l$, un.prototype.has = u$, un.prototype.set = c$;
      function rh(t, n) {
        var s = X(t), l = !s && Ro(t), d = !s && !l && ao(t), p = !s && !l && !d && Fr(t), m = s || l || d || p, g = m ? wu(t.length, $0) : [], V = g.length;
        for (var x in t)
          (n || ge.call(t, x)) && !(m && (x == "length" || d && (x == "offset" || x == "parent") || p && (x == "buffer" || x == "byteLength" || x == "byteOffset") || On(x, V))) && g.push(x);
        return g;
      }
      function sh(t) {
        var n = t.length;
        return n ? t[Tu(0, n - 1)] : r;
      }
      function d$(t, n) {
        return Ta(gt(t), Do(n, 0, t.length));
      }
      function f$(t) {
        return Ta(gt(t));
      }
      function bu(t, n, s) {
        (s !== r && !cn(t[n], s) || s === r && !(n in t)) && Mn(t, n, s);
      }
      function Us(t, n, s) {
        var l = t[n];
        (!(ge.call(t, n) && cn(l, s)) || s === r && !(n in t)) && Mn(t, n, s);
      }
      function ga(t, n) {
        for (var s = t.length; s--; )
          if (cn(t[s][0], n))
            return s;
        return -1;
      }
      function h$(t, n, s, l) {
        return oo(t, function(d, p, m) {
          n(l, d, s(d), m);
        }), l;
      }
      function ih(t, n) {
        return t && yn(n, Ze(n), t);
      }
      function p$(t, n) {
        return t && yn(n, yt(n), t);
      }
      function Mn(t, n, s) {
        n == "__proto__" && ha ? ha(t, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[n] = s;
      }
      function Vu(t, n) {
        for (var s = -1, l = n.length, d = C(l), p = t == null; ++s < l; )
          d[s] = p ? r : oc(t, n[s]);
        return d;
      }
      function Do(t, n, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), n !== r && (t = t >= n ? t : n)), t;
      }
      function Kt(t, n, s, l, d, p) {
        var m, g = n & $, V = n & y, x = n & T;
        if (s && (m = d ? s(t, l, d, p) : s(t)), m !== r)
          return m;
        if (!Me(t))
          return t;
        var L = X(t);
        if (L) {
          if (m = ny(t), !g)
            return gt(t, m);
        } else {
          var M = st(t), U = M == vr || M == Oi;
          if (ao(t))
            return xh(t, g);
          if (M == zt || M == xn || U && !d) {
            if (m = V || U ? {} : Zh(t), !g)
              return V ? z$(t, p$(m, t)) : H$(t, ih(m, t));
          } else {
            if (!Ee[M])
              return d ? t : {};
            m = oy(t, M, g);
          }
        }
        p || (p = new un());
        var H = p.get(t);
        if (H)
          return H;
        p.set(t, m), Cp(t) ? t.forEach(function(Z) {
          m.add(Kt(Z, n, s, Z, t, p));
        }) : bp(t) && t.forEach(function(Z, ie) {
          m.set(ie, Kt(Z, n, s, ie, t, p));
        });
        var j = x ? V ? qu : Wu : V ? yt : Ze, ee = L ? r : j(t);
        return Gt(ee || t, function(Z, ie) {
          ee && (ie = Z, Z = t[ie]), Us(m, ie, Kt(Z, n, s, ie, t, p));
        }), m;
      }
      function w$(t) {
        var n = Ze(t);
        return function(s) {
          return ah(s, t, n);
        };
      }
      function ah(t, n, s) {
        var l = s.length;
        if (t == null)
          return !l;
        for (t = Ce(t); l--; ) {
          var d = s[l], p = n[d], m = t[d];
          if (m === r && !(d in t) || !p(m))
            return !1;
        }
        return !0;
      }
      function lh(t, n, s) {
        if (typeof t != "function")
          throw new jt(c);
        return js(function() {
          t.apply(r, s);
        }, n);
      }
      function Ws(t, n, s, l) {
        var d = -1, p = na, m = !0, g = t.length, V = [], x = n.length;
        if (!g)
          return V;
        s && (n = Te(n, Lt(s))), l ? (p = uu, m = !1) : n.length >= a && (p = Ds, m = !1, n = new Mo(n));
        e:
          for (; ++d < g; ) {
            var L = t[d], M = s == null ? L : s(L);
            if (L = l || L !== 0 ? L : 0, m && M === M) {
              for (var U = x; U--; )
                if (n[U] === M)
                  continue e;
              V.push(L);
            } else
              p(n, M, l) || V.push(L);
          }
        return V;
      }
      var oo = Dh($n), uh = Dh(Su, !0);
      function v$(t, n) {
        var s = !0;
        return oo(t, function(l, d, p) {
          return s = !!n(l, d, p), s;
        }), s;
      }
      function $a(t, n, s) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === r ? m === m && !Bt(m) : s(m, g)))
            var g = m, V = p;
        }
        return V;
      }
      function m$(t, n, s, l) {
        var d = t.length;
        for (s = Q(s), s < 0 && (s = -s > d ? 0 : d + s), l = l === r || l > d ? d : Q(l), l < 0 && (l += d), l = s > l ? 0 : kp(l); s < l; )
          t[s++] = n;
        return t;
      }
      function ch(t, n) {
        var s = [];
        return oo(t, function(l, d, p) {
          n(l, d, p) && s.push(l);
        }), s;
      }
      function Xe(t, n, s, l, d) {
        var p = -1, m = t.length;
        for (s || (s = sy), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && s(g) ? n > 1 ? Xe(g, n - 1, s, l, d) : eo(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var Cu = Nh(), dh = Nh(!0);
      function $n(t, n) {
        return t && Cu(t, n, Ze);
      }
      function Su(t, n) {
        return t && dh(t, n, Ze);
      }
      function ya(t, n) {
        return Qn(n, function(s) {
          return Pn(t[s]);
        });
      }
      function No(t, n) {
        n = so(n, t);
        for (var s = 0, l = n.length; t != null && s < l; )
          t = t[bn(n[s++])];
        return s && s == l ? t : r;
      }
      function fh(t, n, s) {
        var l = n(t);
        return X(t) ? l : eo(l, s(t));
      }
      function ct(t) {
        return t == null ? t === r ? Fi : Pi : To && To in Ce(t) ? Q$(t) : fy(t);
      }
      function ku(t, n) {
        return t > n;
      }
      function _$(t, n) {
        return t != null && ge.call(t, n);
      }
      function g$(t, n) {
        return t != null && n in Ce(t);
      }
      function $$(t, n, s) {
        return t >= rt(n, s) && t < ze(n, s);
      }
      function Eu(t, n, s) {
        for (var l = s ? uu : na, d = t[0].length, p = t.length, m = p, g = C(p), V = 1 / 0, x = []; m--; ) {
          var L = t[m];
          m && n && (L = Te(L, Lt(n))), V = rt(L.length, V), g[m] = !s && (n || d >= 120 && L.length >= 120) ? new Mo(m && L) : r;
        }
        L = t[0];
        var M = -1, U = g[0];
        e:
          for (; ++M < d && x.length < V; ) {
            var H = L[M], j = n ? n(H) : H;
            if (H = s || H !== 0 ? H : 0, !(U ? Ds(U, j) : l(x, j, s))) {
              for (m = p; --m; ) {
                var ee = g[m];
                if (!(ee ? Ds(ee, j) : l(t[m], j, s)))
                  continue e;
              }
              U && U.push(j), x.push(H);
            }
          }
        return x;
      }
      function y$(t, n, s, l) {
        return $n(t, function(d, p, m) {
          n(l, s(d), p, m);
        }), l;
      }
      function qs(t, n, s) {
        n = so(n, t), t = Qh(t, n);
        var l = t == null ? t : t[bn(Xt(n))];
        return l == null ? r : xt(l, t, s);
      }
      function hh(t) {
        return Oe(t) && ct(t) == xn;
      }
      function b$(t) {
        return Oe(t) && ct(t) == Xn;
      }
      function V$(t) {
        return Oe(t) && ct(t) == an;
      }
      function Hs(t, n, s, l, d) {
        return t === n ? !0 : t == null || n == null || !Oe(t) && !Oe(n) ? t !== t && n !== n : C$(t, n, s, l, Hs, d);
      }
      function C$(t, n, s, l, d, p) {
        var m = X(t), g = X(n), V = m ? Io : st(t), x = g ? Io : st(n);
        V = V == xn ? zt : V, x = x == xn ? zt : x;
        var L = V == zt, M = x == zt, U = V == x;
        if (U && ao(t)) {
          if (!ao(n))
            return !1;
          m = !0, L = !1;
        }
        if (U && !L)
          return p || (p = new un()), m || Fr(t) ? Yh(t, n, s, l, d, p) : J$(t, n, V, s, l, d, p);
        if (!(s & B)) {
          var H = L && ge.call(t, "__wrapped__"), j = M && ge.call(n, "__wrapped__");
          if (H || j) {
            var ee = H ? t.value() : t, Z = j ? n.value() : n;
            return p || (p = new un()), d(ee, Z, s, l, p);
          }
        }
        return U ? (p || (p = new un()), X$(t, n, s, l, d, p)) : !1;
      }
      function S$(t) {
        return Oe(t) && st(t) == mt;
      }
      function Iu(t, n, s, l) {
        var d = s.length, p = d, m = !l;
        if (t == null)
          return !p;
        for (t = Ce(t); d--; ) {
          var g = s[d];
          if (m && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = s[d];
          var V = g[0], x = t[V], L = g[1];
          if (m && g[2]) {
            if (x === r && !(V in t))
              return !1;
          } else {
            var M = new un();
            if (l)
              var U = l(x, L, V, t, n, M);
            if (!(U === r ? Hs(L, x, B | N, l, M) : U))
              return !1;
          }
        }
        return !0;
      }
      function ph(t) {
        if (!Me(t) || ay(t))
          return !1;
        var n = Pn(t) ? S0 : w1;
        return n.test(Po(t));
      }
      function k$(t) {
        return Oe(t) && ct(t) == Zn;
      }
      function E$(t) {
        return Oe(t) && st(t) == _t;
      }
      function I$(t) {
        return Oe(t) && Pa(t.length) && !!Ae[ct(t)];
      }
      function wh(t) {
        return typeof t == "function" ? t : t == null ? bt : typeof t == "object" ? X(t) ? _h(t[0], t[1]) : mh(t) : Op(t);
      }
      function Au(t) {
        if (!Gs(t))
          return L0(t);
        var n = [];
        for (var s in Ce(t))
          ge.call(t, s) && s != "constructor" && n.push(s);
        return n;
      }
      function A$(t) {
        if (!Me(t))
          return dy(t);
        var n = Gs(t), s = [];
        for (var l in t)
          l == "constructor" && (n || !ge.call(t, l)) || s.push(l);
        return s;
      }
      function xu(t, n) {
        return t < n;
      }
      function vh(t, n) {
        var s = -1, l = $t(t) ? C(t.length) : [];
        return oo(t, function(d, p, m) {
          l[++s] = n(d, p, m);
        }), l;
      }
      function mh(t) {
        var n = zu(t);
        return n.length == 1 && n[0][2] ? Jh(n[0][0], n[0][1]) : function(s) {
          return s === t || Iu(s, t, n);
        };
      }
      function _h(t, n) {
        return Gu(t) && Kh(n) ? Jh(bn(t), n) : function(s) {
          var l = oc(s, t);
          return l === r && l === n ? rc(s, t) : Hs(n, l, B | N);
        };
      }
      function ba(t, n, s, l, d) {
        t !== n && Cu(n, function(p, m) {
          if (d || (d = new un()), Me(p))
            x$(t, n, m, s, ba, l, d);
          else {
            var g = l ? l(Zu(t, m), p, m + "", t, n, d) : r;
            g === r && (g = p), bu(t, m, g);
          }
        }, yt);
      }
      function x$(t, n, s, l, d, p, m) {
        var g = Zu(t, s), V = Zu(n, s), x = m.get(V);
        if (x) {
          bu(t, s, x);
          return;
        }
        var L = p ? p(g, V, s + "", t, n, m) : r, M = L === r;
        if (M) {
          var U = X(V), H = !U && ao(V), j = !U && !H && Fr(V);
          L = V, U || H || j ? X(g) ? L = g : Re(g) ? L = gt(g) : H ? (M = !1, L = xh(V, !0)) : j ? (M = !1, L = Lh(V, !0)) : L = [] : Zs(V) || Ro(V) ? (L = g, Ro(g) ? L = Ep(g) : (!Me(g) || Pn(g)) && (L = Zh(V))) : M = !1;
        }
        M && (m.set(V, L), d(L, V, l, p, m), m.delete(V)), bu(t, s, L);
      }
      function gh(t, n) {
        var s = t.length;
        if (!!s)
          return n += n < 0 ? s : 0, On(n, s) ? t[n] : r;
      }
      function $h(t, n, s) {
        n.length ? n = Te(n, function(p) {
          return X(p) ? function(m) {
            return No(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [bt];
        var l = -1;
        n = Te(n, Lt(G()));
        var d = vh(t, function(p, m, g) {
          var V = Te(n, function(x) {
            return x(p);
          });
          return { criteria: V, index: ++l, value: p };
        });
        return o0(d, function(p, m) {
          return q$(p, m, s);
        });
      }
      function L$(t, n) {
        return yh(t, n, function(s, l) {
          return rc(t, l);
        });
      }
      function yh(t, n, s) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = No(t, m);
          s(g, m) && zs(p, so(m, t), g);
        }
        return p;
      }
      function T$(t) {
        return function(n) {
          return No(n, t);
        };
      }
      function Lu(t, n, s, l) {
        var d = l ? n0 : Ar, p = -1, m = n.length, g = t;
        for (t === n && (n = gt(n)), s && (g = Te(t, Lt(s))); ++p < m; )
          for (var V = 0, x = n[p], L = s ? s(x) : x; (V = d(g, L, V, l)) > -1; )
            g !== t && fa.call(g, V, 1), fa.call(t, V, 1);
        return t;
      }
      function bh(t, n) {
        for (var s = t ? n.length : 0, l = s - 1; s--; ) {
          var d = n[s];
          if (s == l || d !== p) {
            var p = d;
            On(d) ? fa.call(t, d, 1) : Du(t, d);
          }
        }
        return t;
      }
      function Tu(t, n) {
        return t + wa(nh() * (n - t + 1));
      }
      function B$(t, n, s, l) {
        for (var d = -1, p = ze(pa((n - t) / (s || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += s;
        return m;
      }
      function Bu(t, n) {
        var s = "";
        if (!t || n < 1 || n > je)
          return s;
        do
          n % 2 && (s += t), n = wa(n / 2), n && (t += t);
        while (n);
        return s;
      }
      function ne(t, n) {
        return Ku(Xh(t, n, bt), t + "");
      }
      function M$(t) {
        return sh(Ur(t));
      }
      function D$(t, n) {
        var s = Ur(t);
        return Ta(s, Do(n, 0, s.length));
      }
      function zs(t, n, s, l) {
        if (!Me(t))
          return t;
        n = so(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var V = bn(n[d]), x = s;
          if (V === "__proto__" || V === "constructor" || V === "prototype")
            return t;
          if (d != m) {
            var L = g[V];
            x = l ? l(L, V, g) : r, x === r && (x = Me(L) ? L : On(n[d + 1]) ? [] : {});
          }
          Us(g, V, x), g = g[V];
        }
        return t;
      }
      var Vh = va ? function(t, n) {
        return va.set(t, n), t;
      } : bt, N$ = ha ? function(t, n) {
        return ha(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ic(n),
          writable: !0
        });
      } : bt;
      function O$(t) {
        return Ta(Ur(t));
      }
      function Jt(t, n, s) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), s = s > d ? d : s, s < 0 && (s += d), d = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function P$(t, n) {
        var s;
        return oo(t, function(l, d, p) {
          return s = n(l, d, p), !s;
        }), !!s;
      }
      function Va(t, n, s) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= fr) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !Bt(m) && (s ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return Mu(t, n, bt, s);
      }
      function Mu(t, n, s, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = s(n);
        for (var m = n !== n, g = n === null, V = Bt(n), x = n === r; d < p; ) {
          var L = wa((d + p) / 2), M = s(t[L]), U = M !== r, H = M === null, j = M === M, ee = Bt(M);
          if (m)
            var Z = l || j;
          else
            x ? Z = j && (l || U) : g ? Z = j && U && (l || !H) : V ? Z = j && U && !H && (l || !ee) : H || ee ? Z = !1 : Z = l ? M <= n : M < n;
          Z ? d = L + 1 : p = L;
        }
        return rt(p, dr);
      }
      function Ch(t, n) {
        for (var s = -1, l = t.length, d = 0, p = []; ++s < l; ) {
          var m = t[s], g = n ? n(m) : m;
          if (!s || !cn(g, V)) {
            var V = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function Sh(t) {
        return typeof t == "number" ? t : Bt(t) ? Eo : +t;
      }
      function Tt(t) {
        if (typeof t == "string")
          return t;
        if (X(t))
          return Te(t, Tt) + "";
        if (Bt(t))
          return oh ? oh.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function ro(t, n, s) {
        var l = -1, d = na, p = t.length, m = !0, g = [], V = g;
        if (s)
          m = !1, d = uu;
        else if (p >= a) {
          var x = n ? null : Z$(t);
          if (x)
            return ra(x);
          m = !1, d = Ds, V = new Mo();
        } else
          V = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var L = t[l], M = n ? n(L) : L;
            if (L = s || L !== 0 ? L : 0, m && M === M) {
              for (var U = V.length; U--; )
                if (V[U] === M)
                  continue e;
              n && V.push(M), g.push(L);
            } else
              d(V, M, s) || (V !== g && V.push(M), g.push(L));
          }
        return g;
      }
      function Du(t, n) {
        return n = so(n, t), t = Qh(t, n), t == null || delete t[bn(Xt(n))];
      }
      function kh(t, n, s, l) {
        return zs(t, n, s(No(t, n)), l);
      }
      function Ca(t, n, s, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return s ? Jt(t, l ? 0 : p, l ? p + 1 : d) : Jt(t, l ? p + 1 : 0, l ? d : p);
      }
      function Eh(t, n) {
        var s = t;
        return s instanceof ae && (s = s.value()), cu(n, function(l, d) {
          return d.func.apply(d.thisArg, eo([l], d.args));
        }, s);
      }
      function Nu(t, n, s) {
        var l = t.length;
        if (l < 2)
          return l ? ro(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = Ws(p[d] || m, t[g], n, s));
        return ro(Xe(p, 1), n, s);
      }
      function Ih(t, n, s) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : r;
          s(m, t[l], g);
        }
        return m;
      }
      function Ou(t) {
        return Re(t) ? t : [];
      }
      function Pu(t) {
        return typeof t == "function" ? t : bt;
      }
      function so(t, n) {
        return X(t) ? t : Gu(t, n) ? [t] : op(me(t));
      }
      var R$ = ne;
      function io(t, n, s) {
        var l = t.length;
        return s = s === r ? l : s, !n && s >= l ? t : Jt(t, n, s);
      }
      var Ah = k0 || function(t) {
        return Je.clearTimeout(t);
      };
      function xh(t, n) {
        if (n)
          return t.slice();
        var s = t.length, l = Jf ? Jf(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function Ru(t) {
        var n = new t.constructor(t.byteLength);
        return new ca(n).set(new ca(t)), n;
      }
      function F$(t, n) {
        var s = n ? Ru(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function U$(t) {
        var n = new t.constructor(t.source, hf.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function W$(t) {
        return Fs ? Ce(Fs.call(t)) : {};
      }
      function Lh(t, n) {
        var s = n ? Ru(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function Th(t, n) {
        if (t !== n) {
          var s = t !== r, l = t === null, d = t === t, p = Bt(t), m = n !== r, g = n === null, V = n === n, x = Bt(n);
          if (!g && !x && !p && t > n || p && m && V && !g && !x || l && m && V || !s && V || !d)
            return 1;
          if (!l && !p && !x && t < n || x && s && d && !l && !p || g && s && d || !m && d || !V)
            return -1;
        }
        return 0;
      }
      function q$(t, n, s) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = s.length; ++l < m; ) {
          var V = Th(d[l], p[l]);
          if (V) {
            if (l >= g)
              return V;
            var x = s[l];
            return V * (x == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function Bh(t, n, s, l) {
        for (var d = -1, p = t.length, m = s.length, g = -1, V = n.length, x = ze(p - m, 0), L = C(V + x), M = !l; ++g < V; )
          L[g] = n[g];
        for (; ++d < m; )
          (M || d < p) && (L[s[d]] = t[d]);
        for (; x--; )
          L[g++] = t[d++];
        return L;
      }
      function Mh(t, n, s, l) {
        for (var d = -1, p = t.length, m = -1, g = s.length, V = -1, x = n.length, L = ze(p - g, 0), M = C(L + x), U = !l; ++d < L; )
          M[d] = t[d];
        for (var H = d; ++V < x; )
          M[H + V] = n[V];
        for (; ++m < g; )
          (U || d < p) && (M[H + s[m]] = t[d++]);
        return M;
      }
      function gt(t, n) {
        var s = -1, l = t.length;
        for (n || (n = C(l)); ++s < l; )
          n[s] = t[s];
        return n;
      }
      function yn(t, n, s, l) {
        var d = !s;
        s || (s = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var g = n[p], V = l ? l(s[g], t[g], g, s, t) : r;
          V === r && (V = t[g]), d ? Mn(s, g, V) : Us(s, g, V);
        }
        return s;
      }
      function H$(t, n) {
        return yn(t, Yu(t), n);
      }
      function z$(t, n) {
        return yn(t, Gh(t), n);
      }
      function Sa(t, n) {
        return function(s, l) {
          var d = X(s) ? K1 : h$, p = n ? n() : {};
          return d(s, t, G(l, 2), p);
        };
      }
      function Or(t) {
        return ne(function(n, s) {
          var l = -1, d = s.length, p = d > 1 ? s[d - 1] : r, m = d > 2 ? s[2] : r;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : r, m && dt(s[0], s[1], m) && (p = d < 3 ? r : p, d = 1), n = Ce(n); ++l < d; ) {
            var g = s[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function Dh(t, n) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!$t(s))
            return t(s, l);
          for (var d = s.length, p = n ? d : -1, m = Ce(s); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return s;
        };
      }
      function Nh(t) {
        return function(n, s, l) {
          for (var d = -1, p = Ce(n), m = l(n), g = m.length; g--; ) {
            var V = m[t ? g : ++d];
            if (s(p[V], V, p) === !1)
              break;
          }
          return n;
        };
      }
      function Y$(t, n, s) {
        var l = n & D, d = Ys(t);
        function p() {
          var m = this && this !== Je && this instanceof p ? d : t;
          return m.apply(l ? s : this, arguments);
        }
        return p;
      }
      function Oh(t) {
        return function(n) {
          n = me(n);
          var s = xr(n) ? ln(n) : r, l = s ? s[0] : n.charAt(0), d = s ? io(s, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function Pr(t) {
        return function(n) {
          return cu(Dp(Mp(n).replace(N1, "")), t, "");
        };
      }
      function Ys(t) {
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
          var s = Nr(t.prototype), l = t.apply(s, n);
          return Me(l) ? l : s;
        };
      }
      function G$(t, n, s) {
        var l = Ys(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, V = Rr(d); g--; )
            m[g] = arguments[g];
          var x = p < 3 && m[0] !== V && m[p - 1] !== V ? [] : to(m, V);
          if (p -= x.length, p < s)
            return Wh(
              t,
              n,
              ka,
              d.placeholder,
              r,
              m,
              x,
              r,
              r,
              s - p
            );
          var L = this && this !== Je && this instanceof d ? l : t;
          return xt(L, this, m);
        }
        return d;
      }
      function Ph(t) {
        return function(n, s, l) {
          var d = Ce(n);
          if (!$t(n)) {
            var p = G(s, 3);
            n = Ze(n), s = function(g) {
              return p(d[g], g, d);
            };
          }
          var m = t(n, s, l);
          return m > -1 ? d[p ? n[m] : m] : r;
        };
      }
      function Rh(t) {
        return Nn(function(n) {
          var s = n.length, l = s, d = Zt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new jt(c);
            if (d && !m && xa(p) == "wrapper")
              var m = new Zt([], !0);
          }
          for (l = m ? l : s; ++l < s; ) {
            p = n[l];
            var g = xa(p), V = g == "wrapper" ? Hu(p) : r;
            V && ju(V[0]) && V[1] == (F | E | k | z) && !V[4].length && V[9] == 1 ? m = m[xa(V[0])].apply(m, V[3]) : m = p.length == 1 && ju(p) ? m[g]() : m.thru(p);
          }
          return function() {
            var x = arguments, L = x[0];
            if (m && x.length == 1 && X(L))
              return m.plant(L).value();
            for (var M = 0, U = s ? n[M].apply(this, x) : L; ++M < s; )
              U = n[M].call(this, U);
            return U;
          };
        });
      }
      function ka(t, n, s, l, d, p, m, g, V, x) {
        var L = n & F, M = n & D, U = n & S, H = n & (E | O), j = n & ke, ee = U ? r : Ys(t);
        function Z() {
          for (var ie = arguments.length, ue = C(ie), Mt = ie; Mt--; )
            ue[Mt] = arguments[Mt];
          if (H)
            var ft = Rr(Z), Dt = s0(ue, ft);
          if (l && (ue = Bh(ue, l, d, H)), p && (ue = Mh(ue, p, m, H)), ie -= Dt, H && ie < x) {
            var Fe = to(ue, ft);
            return Wh(
              t,
              n,
              ka,
              Z.placeholder,
              s,
              ue,
              Fe,
              g,
              V,
              x - ie
            );
          }
          var dn = M ? s : this, Fn = U ? dn[t] : t;
          return ie = ue.length, g ? ue = hy(ue, g) : j && ie > 1 && ue.reverse(), L && V < ie && (ue.length = V), this && this !== Je && this instanceof Z && (Fn = ee || Ys(Fn)), Fn.apply(dn, ue);
        }
        return Z;
      }
      function Fh(t, n) {
        return function(s, l) {
          return y$(s, t, n(l), {});
        };
      }
      function Ea(t, n) {
        return function(s, l) {
          var d;
          if (s === r && l === r)
            return n;
          if (s !== r && (d = s), l !== r) {
            if (d === r)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = Tt(s), l = Tt(l)) : (s = Sh(s), l = Sh(l)), d = t(s, l);
          }
          return d;
        };
      }
      function Fu(t) {
        return Nn(function(n) {
          return n = Te(n, Lt(G())), ne(function(s) {
            var l = this;
            return t(n, function(d) {
              return xt(d, l, s);
            });
          });
        });
      }
      function Ia(t, n) {
        n = n === r ? " " : Tt(n);
        var s = n.length;
        if (s < 2)
          return s ? Bu(n, t) : n;
        var l = Bu(n, pa(t / Lr(n)));
        return xr(n) ? io(ln(l), 0, t).join("") : l.slice(0, t);
      }
      function j$(t, n, s, l) {
        var d = n & D, p = Ys(t);
        function m() {
          for (var g = -1, V = arguments.length, x = -1, L = l.length, M = C(L + V), U = this && this !== Je && this instanceof m ? p : t; ++x < L; )
            M[x] = l[x];
          for (; V--; )
            M[x++] = arguments[++g];
          return xt(U, d ? s : this, M);
        }
        return m;
      }
      function Uh(t) {
        return function(n, s, l) {
          return l && typeof l != "number" && dt(n, s, l) && (s = l = r), n = Rn(n), s === r ? (s = n, n = 0) : s = Rn(s), l = l === r ? n < s ? 1 : -1 : Rn(l), B$(n, s, l, t);
        };
      }
      function Aa(t) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = Qt(n), s = Qt(s)), t(n, s);
        };
      }
      function Wh(t, n, s, l, d, p, m, g, V, x) {
        var L = n & E, M = L ? m : r, U = L ? r : m, H = L ? p : r, j = L ? r : p;
        n |= L ? k : R, n &= ~(L ? R : k), n & A || (n &= ~(D | S));
        var ee = [
          t,
          n,
          d,
          H,
          M,
          j,
          U,
          g,
          V,
          x
        ], Z = s.apply(r, ee);
        return ju(t) && ep(Z, ee), Z.placeholder = l, tp(Z, t, n);
      }
      function Uu(t) {
        var n = He[t];
        return function(s, l) {
          if (s = Qt(s), l = l == null ? 0 : rt(Q(l), 292), l && th(s)) {
            var d = (me(s) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (me(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(s);
        };
      }
      var Z$ = Mr && 1 / ra(new Mr([, -0]))[1] == Le ? function(t) {
        return new Mr(t);
      } : uc;
      function qh(t) {
        return function(n) {
          var s = st(n);
          return s == mt ? mu(n) : s == _t ? f0(n) : r0(n, t(n));
        };
      }
      function Dn(t, n, s, l, d, p, m, g) {
        var V = n & S;
        if (!V && typeof t != "function")
          throw new jt(c);
        var x = l ? l.length : 0;
        if (x || (n &= ~(k | R), l = d = r), m = m === r ? m : ze(Q(m), 0), g = g === r ? g : Q(g), x -= d ? d.length : 0, n & R) {
          var L = l, M = d;
          l = d = r;
        }
        var U = V ? r : Hu(t), H = [
          t,
          n,
          s,
          l,
          d,
          L,
          M,
          p,
          m,
          g
        ];
        if (U && cy(H, U), t = H[0], n = H[1], s = H[2], l = H[3], d = H[4], g = H[9] = H[9] === r ? V ? 0 : t.length : ze(H[9] - x, 0), !g && n & (E | O) && (n &= ~(E | O)), !n || n == D)
          var j = Y$(t, n, s);
        else
          n == E || n == O ? j = G$(t, n, g) : (n == k || n == (D | k)) && !d.length ? j = j$(t, n, s, l) : j = ka.apply(r, H);
        var ee = U ? Vh : ep;
        return tp(ee(j, H), t, n);
      }
      function Hh(t, n, s, l) {
        return t === r || cn(t, Br[s]) && !ge.call(l, s) ? n : t;
      }
      function zh(t, n, s, l, d, p) {
        return Me(t) && Me(n) && (p.set(n, t), ba(t, n, r, zh, p), p.delete(n)), t;
      }
      function K$(t) {
        return Zs(t) ? r : t;
      }
      function Yh(t, n, s, l, d, p) {
        var m = s & B, g = t.length, V = n.length;
        if (g != V && !(m && V > g))
          return !1;
        var x = p.get(t), L = p.get(n);
        if (x && L)
          return x == n && L == t;
        var M = -1, U = !0, H = s & N ? new Mo() : r;
        for (p.set(t, n), p.set(n, t); ++M < g; ) {
          var j = t[M], ee = n[M];
          if (l)
            var Z = m ? l(ee, j, M, n, t, p) : l(j, ee, M, t, n, p);
          if (Z !== r) {
            if (Z)
              continue;
            U = !1;
            break;
          }
          if (H) {
            if (!du(n, function(ie, ue) {
              if (!Ds(H, ue) && (j === ie || d(j, ie, s, l, p)))
                return H.push(ue);
            })) {
              U = !1;
              break;
            }
          } else if (!(j === ee || d(j, ee, s, l, p))) {
            U = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), U;
      }
      function J$(t, n, s, l, d, p, m) {
        switch (s) {
          case Ln:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Xn:
            return !(t.byteLength != n.byteLength || !p(new ca(t), new ca(n)));
          case Ao:
          case an:
          case jn:
            return cn(+t, +n);
          case wr:
            return t.name == n.name && t.message == n.message;
          case Zn:
          case Kn:
            return t == n + "";
          case mt:
            var g = mu;
          case _t:
            var V = l & B;
            if (g || (g = ra), t.size != n.size && !V)
              return !1;
            var x = m.get(t);
            if (x)
              return x == n;
            l |= N, m.set(t, n);
            var L = Yh(g(t), g(n), l, d, p, m);
            return m.delete(t), L;
          case xo:
            if (Fs)
              return Fs.call(t) == Fs.call(n);
        }
        return !1;
      }
      function X$(t, n, s, l, d, p) {
        var m = s & B, g = Wu(t), V = g.length, x = Wu(n), L = x.length;
        if (V != L && !m)
          return !1;
        for (var M = V; M--; ) {
          var U = g[M];
          if (!(m ? U in n : ge.call(n, U)))
            return !1;
        }
        var H = p.get(t), j = p.get(n);
        if (H && j)
          return H == n && j == t;
        var ee = !0;
        p.set(t, n), p.set(n, t);
        for (var Z = m; ++M < V; ) {
          U = g[M];
          var ie = t[U], ue = n[U];
          if (l)
            var Mt = m ? l(ue, ie, U, n, t, p) : l(ie, ue, U, t, n, p);
          if (!(Mt === r ? ie === ue || d(ie, ue, s, l, p) : Mt)) {
            ee = !1;
            break;
          }
          Z || (Z = U == "constructor");
        }
        if (ee && !Z) {
          var ft = t.constructor, Dt = n.constructor;
          ft != Dt && "constructor" in t && "constructor" in n && !(typeof ft == "function" && ft instanceof ft && typeof Dt == "function" && Dt instanceof Dt) && (ee = !1);
        }
        return p.delete(t), p.delete(n), ee;
      }
      function Nn(t) {
        return Ku(Xh(t, r, ap), t + "");
      }
      function Wu(t) {
        return fh(t, Ze, Yu);
      }
      function qu(t) {
        return fh(t, yt, Gh);
      }
      var Hu = va ? function(t) {
        return va.get(t);
      } : uc;
      function xa(t) {
        for (var n = t.name + "", s = Dr[n], l = ge.call(Dr, n) ? s.length : 0; l--; ) {
          var d = s[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function Rr(t) {
        var n = ge.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function G() {
        var t = h.iteratee || ac;
        return t = t === ac ? wh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function La(t, n) {
        var s = t.__data__;
        return iy(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function zu(t) {
        for (var n = Ze(t), s = n.length; s--; ) {
          var l = n[s], d = t[l];
          n[s] = [l, d, Kh(d)];
        }
        return n;
      }
      function Oo(t, n) {
        var s = u0(t, n);
        return ph(s) ? s : r;
      }
      function Q$(t) {
        var n = ge.call(t, To), s = t[To];
        try {
          t[To] = r;
          var l = !0;
        } catch {
        }
        var d = la.call(t);
        return l && (n ? t[To] = s : delete t[To]), d;
      }
      var Yu = gu ? function(t) {
        return t == null ? [] : (t = Ce(t), Qn(gu(t), function(n) {
          return Qf.call(t, n);
        }));
      } : cc, Gh = gu ? function(t) {
        for (var n = []; t; )
          eo(n, Yu(t)), t = da(t);
        return n;
      } : cc, st = ct;
      ($u && st(new $u(new ArrayBuffer(1))) != Ln || Os && st(new Os()) != mt || yu && st(yu.resolve()) != Ls || Mr && st(new Mr()) != _t || Ps && st(new Ps()) != Jn) && (st = function(t) {
        var n = ct(t), s = n == zt ? t.constructor : r, l = s ? Po(s) : "";
        if (l)
          switch (l) {
            case D0:
              return Ln;
            case N0:
              return mt;
            case O0:
              return Ls;
            case P0:
              return _t;
            case R0:
              return Jn;
          }
        return n;
      });
      function ey(t, n, s) {
        for (var l = -1, d = s.length; ++l < d; ) {
          var p = s[l], m = p.size;
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
              t = ze(t, n - m);
              break;
          }
        }
        return { start: t, end: n };
      }
      function ty(t) {
        var n = t.match(Xi);
        return n ? n[1].split(l1) : [];
      }
      function jh(t, n, s) {
        n = so(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = bn(n[l]);
          if (!(p = t != null && s(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Pa(d) && On(m, d) && (X(t) || Ro(t)));
      }
      function ny(t) {
        var n = t.length, s = new t.constructor(n);
        return n && typeof t[0] == "string" && ge.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function Zh(t) {
        return typeof t.constructor == "function" && !Gs(t) ? Nr(da(t)) : {};
      }
      function oy(t, n, s) {
        var l = t.constructor;
        switch (n) {
          case Xn:
            return Ru(t);
          case Ao:
          case an:
            return new l(+t);
          case Ln:
            return F$(t, s);
          case mr:
          case _r:
          case gr:
          case $r:
          case yr:
          case br:
          case Vr:
          case Cr:
          case Sr:
            return Lh(t, s);
          case mt:
            return new l();
          case jn:
          case Kn:
            return new l(t);
          case Zn:
            return U$(t);
          case _t:
            return new l();
          case xo:
            return W$(t);
        }
      }
      function ry(t, n) {
        var s = n.length;
        if (!s)
          return t;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), t.replace(Ji, `{
/* [wrapped with ` + n + `] */
`);
      }
      function sy(t) {
        return X(t) || Ro(t) || !!(eh && t && t[eh]);
      }
      function On(t, n) {
        var s = typeof t;
        return n = n == null ? je : n, !!n && (s == "number" || s != "symbol" && m1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function dt(t, n, s) {
        if (!Me(s))
          return !1;
        var l = typeof n;
        return (l == "number" ? $t(s) && On(n, s.length) : l == "string" && n in s) ? cn(s[n], t) : !1;
      }
      function Gu(t, n) {
        if (X(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || Bt(t) ? !0 : Gi.test(t) || !Yi.test(t) || n != null && t in Ce(n);
      }
      function iy(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function ju(t) {
        var n = xa(t), s = h[n];
        if (typeof s != "function" || !(n in ae.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = Hu(s);
        return !!l && t === l[0];
      }
      function ay(t) {
        return !!Kf && Kf in t;
      }
      var ly = ia ? Pn : dc;
      function Gs(t) {
        var n = t && t.constructor, s = typeof n == "function" && n.prototype || Br;
        return t === s;
      }
      function Kh(t) {
        return t === t && !Me(t);
      }
      function Jh(t, n) {
        return function(s) {
          return s == null ? !1 : s[t] === n && (n !== r || t in Ce(s));
        };
      }
      function uy(t) {
        var n = Na(t, function(l) {
          return s.size === v && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function cy(t, n) {
        var s = t[1], l = n[1], d = s | l, p = d < (D | S | F), m = l == F && s == E || l == F && s == z && t[7].length <= n[8] || l == (F | z) && n[7].length <= n[8] && s == E;
        if (!(p || m))
          return t;
        l & D && (t[2] = n[2], d |= s & D ? 0 : A);
        var g = n[3];
        if (g) {
          var V = t[3];
          t[3] = V ? Bh(V, g, n[4]) : g, t[4] = V ? to(t[3], _) : n[4];
        }
        return g = n[5], g && (V = t[5], t[5] = V ? Mh(V, g, n[6]) : g, t[6] = V ? to(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & F && (t[8] = t[8] == null ? n[8] : rt(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function dy(t) {
        var n = [];
        if (t != null)
          for (var s in Ce(t))
            n.push(s);
        return n;
      }
      function fy(t) {
        return la.call(t);
      }
      function Xh(t, n, s) {
        return n = ze(n === r ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = ze(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = s(m), xt(t, this, g);
        };
      }
      function Qh(t, n) {
        return n.length < 2 ? t : No(t, Jt(n, 0, -1));
      }
      function hy(t, n) {
        for (var s = t.length, l = rt(n.length, s), d = gt(t); l--; ) {
          var p = n[l];
          t[l] = On(p, s) ? d[p] : r;
        }
        return t;
      }
      function Zu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var ep = np(Vh), js = I0 || function(t, n) {
        return Je.setTimeout(t, n);
      }, Ku = np(N$);
      function tp(t, n, s) {
        var l = n + "";
        return Ku(t, ry(l, py(ty(l), s)));
      }
      function np(t) {
        var n = 0, s = 0;
        return function() {
          var l = T0(), d = ve - (l - s);
          if (s = l, d > 0) {
            if (++n >= xe)
              return arguments[0];
          } else
            n = 0;
          return t.apply(r, arguments);
        };
      }
      function Ta(t, n) {
        var s = -1, l = t.length, d = l - 1;
        for (n = n === r ? l : n; ++s < n; ) {
          var p = Tu(s, d), m = t[p];
          t[p] = t[s], t[s] = m;
        }
        return t.length = n, t;
      }
      var op = uy(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(ji, function(s, l, d, p) {
          n.push(d ? p.replace(d1, "$1") : l || s);
        }), n;
      });
      function bn(t) {
        if (typeof t == "string" || Bt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -Le ? "-0" : n;
      }
      function Po(t) {
        if (t != null) {
          try {
            return aa.call(t);
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
        return Gt(hr, function(s) {
          var l = "_." + s[0];
          n & s[1] && !na(t, l) && t.push(l);
        }), t.sort();
      }
      function rp(t) {
        if (t instanceof ae)
          return t.clone();
        var n = new Zt(t.__wrapped__, t.__chain__);
        return n.__actions__ = gt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function wy(t, n, s) {
        (s ? dt(t, n, s) : n === r) ? n = 1 : n = ze(Q(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(pa(l / n)); d < l; )
          m[p++] = Jt(t, d, d += n);
        return m;
      }
      function vy(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = 0, d = []; ++n < s; ) {
          var p = t[n];
          p && (d[l++] = p);
        }
        return d;
      }
      function my() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var n = C(t - 1), s = arguments[0], l = t; l--; )
          n[l - 1] = arguments[l];
        return eo(X(s) ? gt(s) : [s], Xe(n, 1));
      }
      var _y = ne(function(t, n) {
        return Re(t) ? Ws(t, Xe(n, 1, Re, !0)) : [];
      }), gy = ne(function(t, n) {
        var s = Xt(n);
        return Re(s) && (s = r), Re(t) ? Ws(t, Xe(n, 1, Re, !0), G(s, 2)) : [];
      }), $y = ne(function(t, n) {
        var s = Xt(n);
        return Re(s) && (s = r), Re(t) ? Ws(t, Xe(n, 1, Re, !0), r, s) : [];
      });
      function yy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : Q(n), Jt(t, n < 0 ? 0 : n, l)) : [];
      }
      function by(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : Q(n), n = l - n, Jt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Vy(t, n) {
        return t && t.length ? Ca(t, G(n, 3), !0, !0) : [];
      }
      function Cy(t, n) {
        return t && t.length ? Ca(t, G(n, 3), !0) : [];
      }
      function Sy(t, n, s, l) {
        var d = t == null ? 0 : t.length;
        return d ? (s && typeof s != "number" && dt(t, n, s) && (s = 0, l = d), m$(t, n, s, l)) : [];
      }
      function sp(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : Q(s);
        return d < 0 && (d = ze(l + d, 0)), oa(t, G(n, 3), d);
      }
      function ip(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return s !== r && (d = Q(s), d = s < 0 ? ze(l + d, 0) : rt(d, l - 1)), oa(t, G(n, 3), d, !0);
      }
      function ap(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xe(t, 1) : [];
      }
      function ky(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xe(t, Le) : [];
      }
      function Ey(t, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n = n === r ? 1 : Q(n), Xe(t, n)) : [];
      }
      function Iy(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = {}; ++n < s; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function lp(t) {
        return t && t.length ? t[0] : r;
      }
      function Ay(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : Q(s);
        return d < 0 && (d = ze(l + d, 0)), Ar(t, n, d);
      }
      function xy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Jt(t, 0, -1) : [];
      }
      var Ly = ne(function(t) {
        var n = Te(t, Ou);
        return n.length && n[0] === t[0] ? Eu(n) : [];
      }), Ty = ne(function(t) {
        var n = Xt(t), s = Te(t, Ou);
        return n === Xt(s) ? n = r : s.pop(), s.length && s[0] === t[0] ? Eu(s, G(n, 2)) : [];
      }), By = ne(function(t) {
        var n = Xt(t), s = Te(t, Ou);
        return n = typeof n == "function" ? n : r, n && s.pop(), s.length && s[0] === t[0] ? Eu(s, r, n) : [];
      });
      function My(t, n) {
        return t == null ? "" : x0.call(t, n);
      }
      function Xt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : r;
      }
      function Dy(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return s !== r && (d = Q(s), d = d < 0 ? ze(l + d, 0) : rt(d, l - 1)), n === n ? p0(t, n, d) : oa(t, Wf, d, !0);
      }
      function Ny(t, n) {
        return t && t.length ? gh(t, Q(n)) : r;
      }
      var Oy = ne(up);
      function up(t, n) {
        return t && t.length && n && n.length ? Lu(t, n) : t;
      }
      function Py(t, n, s) {
        return t && t.length && n && n.length ? Lu(t, n, G(s, 2)) : t;
      }
      function Ry(t, n, s) {
        return t && t.length && n && n.length ? Lu(t, n, r, s) : t;
      }
      var Fy = Nn(function(t, n) {
        var s = t == null ? 0 : t.length, l = Vu(t, n);
        return bh(t, Te(n, function(d) {
          return On(d, s) ? +d : d;
        }).sort(Th)), l;
      });
      function Uy(t, n) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, d = [], p = t.length;
        for (n = G(n, 3); ++l < p; ) {
          var m = t[l];
          n(m, l, t) && (s.push(m), d.push(l));
        }
        return bh(t, d), s;
      }
      function Ju(t) {
        return t == null ? t : M0.call(t);
      }
      function Wy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && dt(t, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : Q(n), s = s === r ? l : Q(s)), Jt(t, n, s)) : [];
      }
      function qy(t, n) {
        return Va(t, n);
      }
      function Hy(t, n, s) {
        return Mu(t, n, G(s, 2));
      }
      function zy(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Va(t, n);
          if (l < s && cn(t[l], n))
            return l;
        }
        return -1;
      }
      function Yy(t, n) {
        return Va(t, n, !0);
      }
      function Gy(t, n, s) {
        return Mu(t, n, G(s, 2), !0);
      }
      function jy(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = Va(t, n, !0) - 1;
          if (cn(t[l], n))
            return l;
        }
        return -1;
      }
      function Zy(t) {
        return t && t.length ? Ch(t) : [];
      }
      function Ky(t, n) {
        return t && t.length ? Ch(t, G(n, 2)) : [];
      }
      function Jy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Jt(t, 1, n) : [];
      }
      function Xy(t, n, s) {
        return t && t.length ? (n = s || n === r ? 1 : Q(n), Jt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Qy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === r ? 1 : Q(n), n = l - n, Jt(t, n < 0 ? 0 : n, l)) : [];
      }
      function eb(t, n) {
        return t && t.length ? Ca(t, G(n, 3), !1, !0) : [];
      }
      function tb(t, n) {
        return t && t.length ? Ca(t, G(n, 3)) : [];
      }
      var nb = ne(function(t) {
        return ro(Xe(t, 1, Re, !0));
      }), ob = ne(function(t) {
        var n = Xt(t);
        return Re(n) && (n = r), ro(Xe(t, 1, Re, !0), G(n, 2));
      }), rb = ne(function(t) {
        var n = Xt(t);
        return n = typeof n == "function" ? n : r, ro(Xe(t, 1, Re, !0), r, n);
      });
      function sb(t) {
        return t && t.length ? ro(t) : [];
      }
      function ib(t, n) {
        return t && t.length ? ro(t, G(n, 2)) : [];
      }
      function ab(t, n) {
        return n = typeof n == "function" ? n : r, t && t.length ? ro(t, r, n) : [];
      }
      function Xu(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = Qn(t, function(s) {
          if (Re(s))
            return n = ze(s.length, n), !0;
        }), wu(n, function(s) {
          return Te(t, fu(s));
        });
      }
      function cp(t, n) {
        if (!(t && t.length))
          return [];
        var s = Xu(t);
        return n == null ? s : Te(s, function(l) {
          return xt(n, r, l);
        });
      }
      var lb = ne(function(t, n) {
        return Re(t) ? Ws(t, n) : [];
      }), ub = ne(function(t) {
        return Nu(Qn(t, Re));
      }), cb = ne(function(t) {
        var n = Xt(t);
        return Re(n) && (n = r), Nu(Qn(t, Re), G(n, 2));
      }), db = ne(function(t) {
        var n = Xt(t);
        return n = typeof n == "function" ? n : r, Nu(Qn(t, Re), r, n);
      }), fb = ne(Xu);
      function hb(t, n) {
        return Ih(t || [], n || [], Us);
      }
      function pb(t, n) {
        return Ih(t || [], n || [], zs);
      }
      var wb = ne(function(t) {
        var n = t.length, s = n > 1 ? t[n - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, cp(t, s);
      });
      function dp(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function vb(t, n) {
        return n(t), t;
      }
      function Ba(t, n) {
        return n(t);
      }
      var mb = Nn(function(t) {
        var n = t.length, s = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return Vu(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ae) || !On(s) ? this.thru(d) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: Ba,
          args: [d],
          thisArg: r
        }), new Zt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(r), p;
        }));
      });
      function _b() {
        return dp(this);
      }
      function gb() {
        return new Zt(this.value(), this.__chain__);
      }
      function $b() {
        this.__values__ === r && (this.__values__ = Sp(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? r : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function yb() {
        return this;
      }
      function bb(t) {
        for (var n, s = this; s instanceof _a; ) {
          var l = rp(s);
          l.__index__ = 0, l.__values__ = r, n ? d.__wrapped__ = l : n = l;
          var d = l;
          s = s.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function Vb() {
        var t = this.__wrapped__;
        if (t instanceof ae) {
          var n = t;
          return this.__actions__.length && (n = new ae(this)), n = n.reverse(), n.__actions__.push({
            func: Ba,
            args: [Ju],
            thisArg: r
          }), new Zt(n, this.__chain__);
        }
        return this.thru(Ju);
      }
      function Cb() {
        return Eh(this.__wrapped__, this.__actions__);
      }
      var Sb = Sa(function(t, n, s) {
        ge.call(t, s) ? ++t[s] : Mn(t, s, 1);
      });
      function kb(t, n, s) {
        var l = X(t) ? Ff : v$;
        return s && dt(t, n, s) && (n = r), l(t, G(n, 3));
      }
      function Eb(t, n) {
        var s = X(t) ? Qn : ch;
        return s(t, G(n, 3));
      }
      var Ib = Ph(sp), Ab = Ph(ip);
      function xb(t, n) {
        return Xe(Ma(t, n), 1);
      }
      function Lb(t, n) {
        return Xe(Ma(t, n), Le);
      }
      function Tb(t, n, s) {
        return s = s === r ? 1 : Q(s), Xe(Ma(t, n), s);
      }
      function fp(t, n) {
        var s = X(t) ? Gt : oo;
        return s(t, G(n, 3));
      }
      function hp(t, n) {
        var s = X(t) ? J1 : uh;
        return s(t, G(n, 3));
      }
      var Bb = Sa(function(t, n, s) {
        ge.call(t, s) ? t[s].push(n) : Mn(t, s, [n]);
      });
      function Mb(t, n, s, l) {
        t = $t(t) ? t : Ur(t), s = s && !l ? Q(s) : 0;
        var d = t.length;
        return s < 0 && (s = ze(d + s, 0)), Ra(t) ? s <= d && t.indexOf(n, s) > -1 : !!d && Ar(t, n, s) > -1;
      }
      var Db = ne(function(t, n, s) {
        var l = -1, d = typeof n == "function", p = $t(t) ? C(t.length) : [];
        return oo(t, function(m) {
          p[++l] = d ? xt(n, m, s) : qs(m, n, s);
        }), p;
      }), Nb = Sa(function(t, n, s) {
        Mn(t, s, n);
      });
      function Ma(t, n) {
        var s = X(t) ? Te : vh;
        return s(t, G(n, 3));
      }
      function Ob(t, n, s, l) {
        return t == null ? [] : (X(n) || (n = n == null ? [] : [n]), s = l ? r : s, X(s) || (s = s == null ? [] : [s]), $h(t, n, s));
      }
      var Pb = Sa(function(t, n, s) {
        t[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function Rb(t, n, s) {
        var l = X(t) ? cu : Hf, d = arguments.length < 3;
        return l(t, G(n, 4), s, d, oo);
      }
      function Fb(t, n, s) {
        var l = X(t) ? X1 : Hf, d = arguments.length < 3;
        return l(t, G(n, 4), s, d, uh);
      }
      function Ub(t, n) {
        var s = X(t) ? Qn : ch;
        return s(t, Oa(G(n, 3)));
      }
      function Wb(t) {
        var n = X(t) ? sh : M$;
        return n(t);
      }
      function qb(t, n, s) {
        (s ? dt(t, n, s) : n === r) ? n = 1 : n = Q(n);
        var l = X(t) ? d$ : D$;
        return l(t, n);
      }
      function Hb(t) {
        var n = X(t) ? f$ : O$;
        return n(t);
      }
      function zb(t) {
        if (t == null)
          return 0;
        if ($t(t))
          return Ra(t) ? Lr(t) : t.length;
        var n = st(t);
        return n == mt || n == _t ? t.size : Au(t).length;
      }
      function Yb(t, n, s) {
        var l = X(t) ? du : P$;
        return s && dt(t, n, s) && (n = r), l(t, G(n, 3));
      }
      var Gb = ne(function(t, n) {
        if (t == null)
          return [];
        var s = n.length;
        return s > 1 && dt(t, n[0], n[1]) ? n = [] : s > 2 && dt(n[0], n[1], n[2]) && (n = [n[0]]), $h(t, Xe(n, 1), []);
      }), Da = E0 || function() {
        return Je.Date.now();
      };
      function jb(t, n) {
        if (typeof n != "function")
          throw new jt(c);
        return t = Q(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function pp(t, n, s) {
        return n = s ? r : n, n = t && n == null ? t.length : n, Dn(t, F, r, r, r, r, n);
      }
      function wp(t, n) {
        var s;
        if (typeof n != "function")
          throw new jt(c);
        return t = Q(t), function() {
          return --t > 0 && (s = n.apply(this, arguments)), t <= 1 && (n = r), s;
        };
      }
      var Qu = ne(function(t, n, s) {
        var l = D;
        if (s.length) {
          var d = to(s, Rr(Qu));
          l |= k;
        }
        return Dn(t, l, n, s, d);
      }), vp = ne(function(t, n, s) {
        var l = D | S;
        if (s.length) {
          var d = to(s, Rr(vp));
          l |= k;
        }
        return Dn(n, l, t, s, d);
      });
      function mp(t, n, s) {
        n = s ? r : n;
        var l = Dn(t, E, r, r, r, r, r, n);
        return l.placeholder = mp.placeholder, l;
      }
      function _p(t, n, s) {
        n = s ? r : n;
        var l = Dn(t, O, r, r, r, r, r, n);
        return l.placeholder = _p.placeholder, l;
      }
      function gp(t, n, s) {
        var l, d, p, m, g, V, x = 0, L = !1, M = !1, U = !0;
        if (typeof t != "function")
          throw new jt(c);
        n = Qt(n) || 0, Me(s) && (L = !!s.leading, M = "maxWait" in s, p = M ? ze(Qt(s.maxWait) || 0, n) : p, U = "trailing" in s ? !!s.trailing : U);
        function H(Fe) {
          var dn = l, Fn = d;
          return l = d = r, x = Fe, m = t.apply(Fn, dn), m;
        }
        function j(Fe) {
          return x = Fe, g = js(ie, n), L ? H(Fe) : m;
        }
        function ee(Fe) {
          var dn = Fe - V, Fn = Fe - x, Pp = n - dn;
          return M ? rt(Pp, p - Fn) : Pp;
        }
        function Z(Fe) {
          var dn = Fe - V, Fn = Fe - x;
          return V === r || dn >= n || dn < 0 || M && Fn >= p;
        }
        function ie() {
          var Fe = Da();
          if (Z(Fe))
            return ue(Fe);
          g = js(ie, ee(Fe));
        }
        function ue(Fe) {
          return g = r, U && l ? H(Fe) : (l = d = r, m);
        }
        function Mt() {
          g !== r && Ah(g), x = 0, l = V = d = g = r;
        }
        function ft() {
          return g === r ? m : ue(Da());
        }
        function Dt() {
          var Fe = Da(), dn = Z(Fe);
          if (l = arguments, d = this, V = Fe, dn) {
            if (g === r)
              return j(V);
            if (M)
              return Ah(g), g = js(ie, n), H(V);
          }
          return g === r && (g = js(ie, n)), m;
        }
        return Dt.cancel = Mt, Dt.flush = ft, Dt;
      }
      var Zb = ne(function(t, n) {
        return lh(t, 1, n);
      }), Kb = ne(function(t, n, s) {
        return lh(t, Qt(n) || 0, s);
      });
      function Jb(t) {
        return Dn(t, ke);
      }
      function Na(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new jt(c);
        var s = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = s.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return s.cache = p.set(d, m) || p, m;
        };
        return s.cache = new (Na.Cache || Bn)(), s;
      }
      Na.Cache = Bn;
      function Oa(t) {
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
      function Xb(t) {
        return wp(2, t);
      }
      var Qb = R$(function(t, n) {
        n = n.length == 1 && X(n[0]) ? Te(n[0], Lt(G())) : Te(Xe(n, 1), Lt(G()));
        var s = n.length;
        return ne(function(l) {
          for (var d = -1, p = rt(l.length, s); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return xt(t, this, l);
        });
      }), ec = ne(function(t, n) {
        var s = to(n, Rr(ec));
        return Dn(t, k, r, n, s);
      }), $p = ne(function(t, n) {
        var s = to(n, Rr($p));
        return Dn(t, R, r, n, s);
      }), eV = Nn(function(t, n) {
        return Dn(t, z, r, r, r, n);
      });
      function tV(t, n) {
        if (typeof t != "function")
          throw new jt(c);
        return n = n === r ? n : Q(n), ne(t, n);
      }
      function nV(t, n) {
        if (typeof t != "function")
          throw new jt(c);
        return n = n == null ? 0 : ze(Q(n), 0), ne(function(s) {
          var l = s[n], d = io(s, 0, n);
          return l && eo(d, l), xt(t, this, d);
        });
      }
      function oV(t, n, s) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new jt(c);
        return Me(s) && (l = "leading" in s ? !!s.leading : l, d = "trailing" in s ? !!s.trailing : d), gp(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function rV(t) {
        return pp(t, 1);
      }
      function sV(t, n) {
        return ec(Pu(n), t);
      }
      function iV() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return X(t) ? t : [t];
      }
      function aV(t) {
        return Kt(t, T);
      }
      function lV(t, n) {
        return n = typeof n == "function" ? n : r, Kt(t, T, n);
      }
      function uV(t) {
        return Kt(t, $ | T);
      }
      function cV(t, n) {
        return n = typeof n == "function" ? n : r, Kt(t, $ | T, n);
      }
      function dV(t, n) {
        return n == null || ah(t, n, Ze(n));
      }
      function cn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var fV = Aa(ku), hV = Aa(function(t, n) {
        return t >= n;
      }), Ro = hh(function() {
        return arguments;
      }()) ? hh : function(t) {
        return Oe(t) && ge.call(t, "callee") && !Qf.call(t, "callee");
      }, X = C.isArray, pV = Mf ? Lt(Mf) : b$;
      function $t(t) {
        return t != null && Pa(t.length) && !Pn(t);
      }
      function Re(t) {
        return Oe(t) && $t(t);
      }
      function wV(t) {
        return t === !0 || t === !1 || Oe(t) && ct(t) == Ao;
      }
      var ao = A0 || dc, vV = Df ? Lt(Df) : V$;
      function mV(t) {
        return Oe(t) && t.nodeType === 1 && !Zs(t);
      }
      function _V(t) {
        if (t == null)
          return !0;
        if ($t(t) && (X(t) || typeof t == "string" || typeof t.splice == "function" || ao(t) || Fr(t) || Ro(t)))
          return !t.length;
        var n = st(t);
        if (n == mt || n == _t)
          return !t.size;
        if (Gs(t))
          return !Au(t).length;
        for (var s in t)
          if (ge.call(t, s))
            return !1;
        return !0;
      }
      function gV(t, n) {
        return Hs(t, n);
      }
      function $V(t, n, s) {
        s = typeof s == "function" ? s : r;
        var l = s ? s(t, n) : r;
        return l === r ? Hs(t, n, r, s) : !!l;
      }
      function tc(t) {
        if (!Oe(t))
          return !1;
        var n = ct(t);
        return n == wr || n == tu || typeof t.message == "string" && typeof t.name == "string" && !Zs(t);
      }
      function yV(t) {
        return typeof t == "number" && th(t);
      }
      function Pn(t) {
        if (!Me(t))
          return !1;
        var n = ct(t);
        return n == vr || n == Oi || n == pr || n == Ri;
      }
      function yp(t) {
        return typeof t == "number" && t == Q(t);
      }
      function Pa(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= je;
      }
      function Me(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function Oe(t) {
        return t != null && typeof t == "object";
      }
      var bp = Nf ? Lt(Nf) : S$;
      function bV(t, n) {
        return t === n || Iu(t, n, zu(n));
      }
      function VV(t, n, s) {
        return s = typeof s == "function" ? s : r, Iu(t, n, zu(n), s);
      }
      function CV(t) {
        return Vp(t) && t != +t;
      }
      function SV(t) {
        if (ly(t))
          throw new J(u);
        return ph(t);
      }
      function kV(t) {
        return t === null;
      }
      function EV(t) {
        return t == null;
      }
      function Vp(t) {
        return typeof t == "number" || Oe(t) && ct(t) == jn;
      }
      function Zs(t) {
        if (!Oe(t) || ct(t) != zt)
          return !1;
        var n = da(t);
        if (n === null)
          return !0;
        var s = ge.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && aa.call(s) == V0;
      }
      var nc = Of ? Lt(Of) : k$;
      function IV(t) {
        return yp(t) && t >= -je && t <= je;
      }
      var Cp = Pf ? Lt(Pf) : E$;
      function Ra(t) {
        return typeof t == "string" || !X(t) && Oe(t) && ct(t) == Kn;
      }
      function Bt(t) {
        return typeof t == "symbol" || Oe(t) && ct(t) == xo;
      }
      var Fr = Rf ? Lt(Rf) : I$;
      function AV(t) {
        return t === r;
      }
      function xV(t) {
        return Oe(t) && st(t) == Jn;
      }
      function LV(t) {
        return Oe(t) && ct(t) == Ui;
      }
      var TV = Aa(xu), BV = Aa(function(t, n) {
        return t <= n;
      });
      function Sp(t) {
        if (!t)
          return [];
        if ($t(t))
          return Ra(t) ? ln(t) : gt(t);
        if (Ns && t[Ns])
          return d0(t[Ns]());
        var n = st(t), s = n == mt ? mu : n == _t ? ra : Ur;
        return s(t);
      }
      function Rn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = Qt(t), t === Le || t === -Le) {
          var n = t < 0 ? -1 : 1;
          return n * ko;
        }
        return t === t ? t : 0;
      }
      function Q(t) {
        var n = Rn(t), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function kp(t) {
        return t ? Do(Q(t), 0, Ht) : 0;
      }
      function Qt(t) {
        if (typeof t == "number")
          return t;
        if (Bt(t))
          return Eo;
        if (Me(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Me(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = zf(t);
        var s = p1.test(t);
        return s || v1.test(t) ? j1(t.slice(2), s ? 2 : 8) : h1.test(t) ? Eo : +t;
      }
      function Ep(t) {
        return yn(t, yt(t));
      }
      function MV(t) {
        return t ? Do(Q(t), -je, je) : t === 0 ? t : 0;
      }
      function me(t) {
        return t == null ? "" : Tt(t);
      }
      var DV = Or(function(t, n) {
        if (Gs(n) || $t(n)) {
          yn(n, Ze(n), t);
          return;
        }
        for (var s in n)
          ge.call(n, s) && Us(t, s, n[s]);
      }), Ip = Or(function(t, n) {
        yn(n, yt(n), t);
      }), Fa = Or(function(t, n, s, l) {
        yn(n, yt(n), t, l);
      }), NV = Or(function(t, n, s, l) {
        yn(n, Ze(n), t, l);
      }), OV = Nn(Vu);
      function PV(t, n) {
        var s = Nr(t);
        return n == null ? s : ih(s, n);
      }
      var RV = ne(function(t, n) {
        t = Ce(t);
        var s = -1, l = n.length, d = l > 2 ? n[2] : r;
        for (d && dt(n[0], n[1], d) && (l = 1); ++s < l; )
          for (var p = n[s], m = yt(p), g = -1, V = m.length; ++g < V; ) {
            var x = m[g], L = t[x];
            (L === r || cn(L, Br[x]) && !ge.call(t, x)) && (t[x] = p[x]);
          }
        return t;
      }), FV = ne(function(t) {
        return t.push(r, zh), xt(Ap, r, t);
      });
      function UV(t, n) {
        return Uf(t, G(n, 3), $n);
      }
      function WV(t, n) {
        return Uf(t, G(n, 3), Su);
      }
      function qV(t, n) {
        return t == null ? t : Cu(t, G(n, 3), yt);
      }
      function HV(t, n) {
        return t == null ? t : dh(t, G(n, 3), yt);
      }
      function zV(t, n) {
        return t && $n(t, G(n, 3));
      }
      function YV(t, n) {
        return t && Su(t, G(n, 3));
      }
      function GV(t) {
        return t == null ? [] : ya(t, Ze(t));
      }
      function jV(t) {
        return t == null ? [] : ya(t, yt(t));
      }
      function oc(t, n, s) {
        var l = t == null ? r : No(t, n);
        return l === r ? s : l;
      }
      function ZV(t, n) {
        return t != null && jh(t, n, _$);
      }
      function rc(t, n) {
        return t != null && jh(t, n, g$);
      }
      var KV = Fh(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = la.call(n)), t[n] = s;
      }, ic(bt)), JV = Fh(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = la.call(n)), ge.call(t, n) ? t[n].push(s) : t[n] = [s];
      }, G), XV = ne(qs);
      function Ze(t) {
        return $t(t) ? rh(t) : Au(t);
      }
      function yt(t) {
        return $t(t) ? rh(t, !0) : A$(t);
      }
      function QV(t, n) {
        var s = {};
        return n = G(n, 3), $n(t, function(l, d, p) {
          Mn(s, n(l, d, p), l);
        }), s;
      }
      function eC(t, n) {
        var s = {};
        return n = G(n, 3), $n(t, function(l, d, p) {
          Mn(s, d, n(l, d, p));
        }), s;
      }
      var tC = Or(function(t, n, s) {
        ba(t, n, s);
      }), Ap = Or(function(t, n, s, l) {
        ba(t, n, s, l);
      }), nC = Nn(function(t, n) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        n = Te(n, function(p) {
          return p = so(p, t), l || (l = p.length > 1), p;
        }), yn(t, qu(t), s), l && (s = Kt(s, $ | y | T, K$));
        for (var d = n.length; d--; )
          Du(s, n[d]);
        return s;
      });
      function oC(t, n) {
        return xp(t, Oa(G(n)));
      }
      var rC = Nn(function(t, n) {
        return t == null ? {} : L$(t, n);
      });
      function xp(t, n) {
        if (t == null)
          return {};
        var s = Te(qu(t), function(l) {
          return [l];
        });
        return n = G(n), yh(t, s, function(l, d) {
          return n(l, d[0]);
        });
      }
      function sC(t, n, s) {
        n = so(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = r); ++l < d; ) {
          var p = t == null ? r : t[bn(n[l])];
          p === r && (l = d, p = s), t = Pn(p) ? p.call(t) : p;
        }
        return t;
      }
      function iC(t, n, s) {
        return t == null ? t : zs(t, n, s);
      }
      function aC(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : zs(t, n, s, l);
      }
      var Lp = qh(Ze), Tp = qh(yt);
      function lC(t, n, s) {
        var l = X(t), d = l || ao(t) || Fr(t);
        if (n = G(n, 4), s == null) {
          var p = t && t.constructor;
          d ? s = l ? new p() : [] : Me(t) ? s = Pn(p) ? Nr(da(t)) : {} : s = {};
        }
        return (d ? Gt : $n)(t, function(m, g, V) {
          return n(s, m, g, V);
        }), s;
      }
      function uC(t, n) {
        return t == null ? !0 : Du(t, n);
      }
      function cC(t, n, s) {
        return t == null ? t : kh(t, n, Pu(s));
      }
      function dC(t, n, s, l) {
        return l = typeof l == "function" ? l : r, t == null ? t : kh(t, n, Pu(s), l);
      }
      function Ur(t) {
        return t == null ? [] : vu(t, Ze(t));
      }
      function fC(t) {
        return t == null ? [] : vu(t, yt(t));
      }
      function hC(t, n, s) {
        return s === r && (s = n, n = r), s !== r && (s = Qt(s), s = s === s ? s : 0), n !== r && (n = Qt(n), n = n === n ? n : 0), Do(Qt(t), n, s);
      }
      function pC(t, n, s) {
        return n = Rn(n), s === r ? (s = n, n = 0) : s = Rn(s), t = Qt(t), $$(t, n, s);
      }
      function wC(t, n, s) {
        if (s && typeof s != "boolean" && dt(t, n, s) && (n = s = r), s === r && (typeof n == "boolean" ? (s = n, n = r) : typeof t == "boolean" && (s = t, t = r)), t === r && n === r ? (t = 0, n = 1) : (t = Rn(t), n === r ? (n = t, t = 0) : n = Rn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (s || t % 1 || n % 1) {
          var d = nh();
          return rt(t + d * (n - t + G1("1e-" + ((d + "").length - 1))), n);
        }
        return Tu(t, n);
      }
      var vC = Pr(function(t, n, s) {
        return n = n.toLowerCase(), t + (s ? Bp(n) : n);
      });
      function Bp(t) {
        return sc(me(t).toLowerCase());
      }
      function Mp(t) {
        return t = me(t), t && t.replace(_1, i0).replace(O1, "");
      }
      function mC(t, n, s) {
        t = me(t), n = Tt(n);
        var l = t.length;
        s = s === r ? l : Do(Q(s), 0, l);
        var d = s;
        return s -= n.length, s >= 0 && t.slice(s, d) == n;
      }
      function _C(t) {
        return t = me(t), t && qi.test(t) ? t.replace(Ts, a0) : t;
      }
      function gC(t) {
        return t = me(t), t && Zi.test(t) ? t.replace(kr, "\\$&") : t;
      }
      var $C = Pr(function(t, n, s) {
        return t + (s ? "-" : "") + n.toLowerCase();
      }), yC = Pr(function(t, n, s) {
        return t + (s ? " " : "") + n.toLowerCase();
      }), bC = Oh("toLowerCase");
      function VC(t, n, s) {
        t = me(t), n = Q(n);
        var l = n ? Lr(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return Ia(wa(d), s) + t + Ia(pa(d), s);
      }
      function CC(t, n, s) {
        t = me(t), n = Q(n);
        var l = n ? Lr(t) : 0;
        return n && l < n ? t + Ia(n - l, s) : t;
      }
      function SC(t, n, s) {
        t = me(t), n = Q(n);
        var l = n ? Lr(t) : 0;
        return n && l < n ? Ia(n - l, s) + t : t;
      }
      function kC(t, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), B0(me(t).replace(Er, ""), n || 0);
      }
      function EC(t, n, s) {
        return (s ? dt(t, n, s) : n === r) ? n = 1 : n = Q(n), Bu(me(t), n);
      }
      function IC() {
        var t = arguments, n = me(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var AC = Pr(function(t, n, s) {
        return t + (s ? "_" : "") + n.toLowerCase();
      });
      function xC(t, n, s) {
        return s && typeof s != "number" && dt(t, n, s) && (n = s = r), s = s === r ? Ht : s >>> 0, s ? (t = me(t), t && (typeof n == "string" || n != null && !nc(n)) && (n = Tt(n), !n && xr(t)) ? io(ln(t), 0, s) : t.split(n, s)) : [];
      }
      var LC = Pr(function(t, n, s) {
        return t + (s ? " " : "") + sc(n);
      });
      function TC(t, n, s) {
        return t = me(t), s = s == null ? 0 : Do(Q(s), 0, t.length), n = Tt(n), t.slice(s, s + n.length) == n;
      }
      function BC(t, n, s) {
        var l = h.templateSettings;
        s && dt(t, n, s) && (n = r), t = me(t), n = Fa({}, n, l, Hh);
        var d = Fa({}, n.imports, l.imports, Hh), p = Ze(d), m = vu(d, p), g, V, x = 0, L = n.interpolate || Qi, M = "__p += '", U = _u(
          (n.escape || Qi).source + "|" + L.source + "|" + (L === Ms ? f1 : Qi).source + "|" + (n.evaluate || Qi).source + "|$",
          "g"
        ), H = "//# sourceURL=" + (ge.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++W1 + "]") + `
`;
        t.replace(U, function(Z, ie, ue, Mt, ft, Dt) {
          return ue || (ue = Mt), M += t.slice(x, Dt).replace(g1, l0), ie && (g = !0, M += `' +
__e(` + ie + `) +
'`), ft && (V = !0, M += `';
` + ft + `;
__p += '`), ue && (M += `' +
((__t = (` + ue + `)) == null ? '' : __t) +
'`), x = Dt + Z.length, Z;
        }), M += `';
`;
        var j = ge.call(n, "variable") && n.variable;
        if (!j)
          M = `with (obj) {
` + M + `
}
`;
        else if (c1.test(j))
          throw new J(f);
        M = (V ? M.replace(Wi, "") : M).replace(se, "$1").replace(K, "$1;"), M = "function(" + (j || "obj") + `) {
` + (j ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (V ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + M + `return __p
}`;
        var ee = Np(function() {
          return fe(p, H + "return " + M).apply(r, m);
        });
        if (ee.source = M, tc(ee))
          throw ee;
        return ee;
      }
      function MC(t) {
        return me(t).toLowerCase();
      }
      function DC(t) {
        return me(t).toUpperCase();
      }
      function NC(t, n, s) {
        if (t = me(t), t && (s || n === r))
          return zf(t);
        if (!t || !(n = Tt(n)))
          return t;
        var l = ln(t), d = ln(n), p = Yf(l, d), m = Gf(l, d) + 1;
        return io(l, p, m).join("");
      }
      function OC(t, n, s) {
        if (t = me(t), t && (s || n === r))
          return t.slice(0, Zf(t) + 1);
        if (!t || !(n = Tt(n)))
          return t;
        var l = ln(t), d = Gf(l, ln(n)) + 1;
        return io(l, 0, d).join("");
      }
      function PC(t, n, s) {
        if (t = me(t), t && (s || n === r))
          return t.replace(Er, "");
        if (!t || !(n = Tt(n)))
          return t;
        var l = ln(t), d = Yf(l, ln(n));
        return io(l, d).join("");
      }
      function RC(t, n) {
        var s = we, l = Ve;
        if (Me(n)) {
          var d = "separator" in n ? n.separator : d;
          s = "length" in n ? Q(n.length) : s, l = "omission" in n ? Tt(n.omission) : l;
        }
        t = me(t);
        var p = t.length;
        if (xr(t)) {
          var m = ln(t);
          p = m.length;
        }
        if (s >= p)
          return t;
        var g = s - Lr(l);
        if (g < 1)
          return l;
        var V = m ? io(m, 0, g).join("") : t.slice(0, g);
        if (d === r)
          return V + l;
        if (m && (g += V.length - g), nc(d)) {
          if (t.slice(g).search(d)) {
            var x, L = V;
            for (d.global || (d = _u(d.source, me(hf.exec(d)) + "g")), d.lastIndex = 0; x = d.exec(L); )
              var M = x.index;
            V = V.slice(0, M === r ? g : M);
          }
        } else if (t.indexOf(Tt(d), g) != g) {
          var U = V.lastIndexOf(d);
          U > -1 && (V = V.slice(0, U));
        }
        return V + l;
      }
      function FC(t) {
        return t = me(t), t && Bs.test(t) ? t.replace(re, w0) : t;
      }
      var UC = Pr(function(t, n, s) {
        return t + (s ? " " : "") + n.toUpperCase();
      }), sc = Oh("toUpperCase");
      function Dp(t, n, s) {
        return t = me(t), n = s ? r : n, n === r ? c0(t) ? _0(t) : t0(t) : t.match(n) || [];
      }
      var Np = ne(function(t, n) {
        try {
          return xt(t, r, n);
        } catch (s) {
          return tc(s) ? s : new J(s);
        }
      }), WC = Nn(function(t, n) {
        return Gt(n, function(s) {
          s = bn(s), Mn(t, s, Qu(t[s], t));
        }), t;
      });
      function qC(t) {
        var n = t == null ? 0 : t.length, s = G();
        return t = n ? Te(t, function(l) {
          if (typeof l[1] != "function")
            throw new jt(c);
          return [s(l[0]), l[1]];
        }) : [], ne(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (xt(p[0], this, l))
              return xt(p[1], this, l);
          }
        });
      }
      function HC(t) {
        return w$(Kt(t, $));
      }
      function ic(t) {
        return function() {
          return t;
        };
      }
      function zC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var YC = Rh(), GC = Rh(!0);
      function bt(t) {
        return t;
      }
      function ac(t) {
        return wh(typeof t == "function" ? t : Kt(t, $));
      }
      function jC(t) {
        return mh(Kt(t, $));
      }
      function ZC(t, n) {
        return _h(t, Kt(n, $));
      }
      var KC = ne(function(t, n) {
        return function(s) {
          return qs(s, t, n);
        };
      }), JC = ne(function(t, n) {
        return function(s) {
          return qs(t, s, n);
        };
      });
      function lc(t, n, s) {
        var l = Ze(n), d = ya(n, l);
        s == null && !(Me(n) && (d.length || !l.length)) && (s = n, n = t, t = this, d = ya(n, Ze(n)));
        var p = !(Me(s) && "chain" in s) || !!s.chain, m = Pn(t);
        return Gt(d, function(g) {
          var V = n[g];
          t[g] = V, m && (t.prototype[g] = function() {
            var x = this.__chain__;
            if (p || x) {
              var L = t(this.__wrapped__), M = L.__actions__ = gt(this.__actions__);
              return M.push({ func: V, args: arguments, thisArg: t }), L.__chain__ = x, L;
            }
            return V.apply(t, eo([this.value()], arguments));
          });
        }), t;
      }
      function XC() {
        return Je._ === this && (Je._ = C0), this;
      }
      function uc() {
      }
      function QC(t) {
        return t = Q(t), ne(function(n) {
          return gh(n, t);
        });
      }
      var eS = Fu(Te), tS = Fu(Ff), nS = Fu(du);
      function Op(t) {
        return Gu(t) ? fu(bn(t)) : T$(t);
      }
      function oS(t) {
        return function(n) {
          return t == null ? r : No(t, n);
        };
      }
      var rS = Uh(), sS = Uh(!0);
      function cc() {
        return [];
      }
      function dc() {
        return !1;
      }
      function iS() {
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
        var s = Ht, l = rt(t, Ht);
        n = G(n), t -= Ht;
        for (var d = wu(l, n); ++s < t; )
          n(s);
        return d;
      }
      function cS(t) {
        return X(t) ? Te(t, bn) : Bt(t) ? [t] : gt(op(me(t)));
      }
      function dS(t) {
        var n = ++b0;
        return me(t) + n;
      }
      var fS = Ea(function(t, n) {
        return t + n;
      }, 0), hS = Uu("ceil"), pS = Ea(function(t, n) {
        return t / n;
      }, 1), wS = Uu("floor");
      function vS(t) {
        return t && t.length ? $a(t, bt, ku) : r;
      }
      function mS(t, n) {
        return t && t.length ? $a(t, G(n, 2), ku) : r;
      }
      function _S(t) {
        return qf(t, bt);
      }
      function gS(t, n) {
        return qf(t, G(n, 2));
      }
      function $S(t) {
        return t && t.length ? $a(t, bt, xu) : r;
      }
      function yS(t, n) {
        return t && t.length ? $a(t, G(n, 2), xu) : r;
      }
      var bS = Ea(function(t, n) {
        return t * n;
      }, 1), VS = Uu("round"), CS = Ea(function(t, n) {
        return t - n;
      }, 0);
      function SS(t) {
        return t && t.length ? pu(t, bt) : 0;
      }
      function kS(t, n) {
        return t && t.length ? pu(t, G(n, 2)) : 0;
      }
      return h.after = jb, h.ary = pp, h.assign = DV, h.assignIn = Ip, h.assignInWith = Fa, h.assignWith = NV, h.at = OV, h.before = wp, h.bind = Qu, h.bindAll = WC, h.bindKey = vp, h.castArray = iV, h.chain = dp, h.chunk = wy, h.compact = vy, h.concat = my, h.cond = qC, h.conforms = HC, h.constant = ic, h.countBy = Sb, h.create = PV, h.curry = mp, h.curryRight = _p, h.debounce = gp, h.defaults = RV, h.defaultsDeep = FV, h.defer = Zb, h.delay = Kb, h.difference = _y, h.differenceBy = gy, h.differenceWith = $y, h.drop = yy, h.dropRight = by, h.dropRightWhile = Vy, h.dropWhile = Cy, h.fill = Sy, h.filter = Eb, h.flatMap = xb, h.flatMapDeep = Lb, h.flatMapDepth = Tb, h.flatten = ap, h.flattenDeep = ky, h.flattenDepth = Ey, h.flip = Jb, h.flow = YC, h.flowRight = GC, h.fromPairs = Iy, h.functions = GV, h.functionsIn = jV, h.groupBy = Bb, h.initial = xy, h.intersection = Ly, h.intersectionBy = Ty, h.intersectionWith = By, h.invert = KV, h.invertBy = JV, h.invokeMap = Db, h.iteratee = ac, h.keyBy = Nb, h.keys = Ze, h.keysIn = yt, h.map = Ma, h.mapKeys = QV, h.mapValues = eC, h.matches = jC, h.matchesProperty = ZC, h.memoize = Na, h.merge = tC, h.mergeWith = Ap, h.method = KC, h.methodOf = JC, h.mixin = lc, h.negate = Oa, h.nthArg = QC, h.omit = nC, h.omitBy = oC, h.once = Xb, h.orderBy = Ob, h.over = eS, h.overArgs = Qb, h.overEvery = tS, h.overSome = nS, h.partial = ec, h.partialRight = $p, h.partition = Pb, h.pick = rC, h.pickBy = xp, h.property = Op, h.propertyOf = oS, h.pull = Oy, h.pullAll = up, h.pullAllBy = Py, h.pullAllWith = Ry, h.pullAt = Fy, h.range = rS, h.rangeRight = sS, h.rearg = eV, h.reject = Ub, h.remove = Uy, h.rest = tV, h.reverse = Ju, h.sampleSize = qb, h.set = iC, h.setWith = aC, h.shuffle = Hb, h.slice = Wy, h.sortBy = Gb, h.sortedUniq = Zy, h.sortedUniqBy = Ky, h.split = xC, h.spread = nV, h.tail = Jy, h.take = Xy, h.takeRight = Qy, h.takeRightWhile = eb, h.takeWhile = tb, h.tap = vb, h.throttle = oV, h.thru = Ba, h.toArray = Sp, h.toPairs = Lp, h.toPairsIn = Tp, h.toPath = cS, h.toPlainObject = Ep, h.transform = lC, h.unary = rV, h.union = nb, h.unionBy = ob, h.unionWith = rb, h.uniq = sb, h.uniqBy = ib, h.uniqWith = ab, h.unset = uC, h.unzip = Xu, h.unzipWith = cp, h.update = cC, h.updateWith = dC, h.values = Ur, h.valuesIn = fC, h.without = lb, h.words = Dp, h.wrap = sV, h.xor = ub, h.xorBy = cb, h.xorWith = db, h.zip = fb, h.zipObject = hb, h.zipObjectDeep = pb, h.zipWith = wb, h.entries = Lp, h.entriesIn = Tp, h.extend = Ip, h.extendWith = Fa, lc(h, h), h.add = fS, h.attempt = Np, h.camelCase = vC, h.capitalize = Bp, h.ceil = hS, h.clamp = hC, h.clone = aV, h.cloneDeep = uV, h.cloneDeepWith = cV, h.cloneWith = lV, h.conformsTo = dV, h.deburr = Mp, h.defaultTo = zC, h.divide = pS, h.endsWith = mC, h.eq = cn, h.escape = _C, h.escapeRegExp = gC, h.every = kb, h.find = Ib, h.findIndex = sp, h.findKey = UV, h.findLast = Ab, h.findLastIndex = ip, h.findLastKey = WV, h.floor = wS, h.forEach = fp, h.forEachRight = hp, h.forIn = qV, h.forInRight = HV, h.forOwn = zV, h.forOwnRight = YV, h.get = oc, h.gt = fV, h.gte = hV, h.has = ZV, h.hasIn = rc, h.head = lp, h.identity = bt, h.includes = Mb, h.indexOf = Ay, h.inRange = pC, h.invoke = XV, h.isArguments = Ro, h.isArray = X, h.isArrayBuffer = pV, h.isArrayLike = $t, h.isArrayLikeObject = Re, h.isBoolean = wV, h.isBuffer = ao, h.isDate = vV, h.isElement = mV, h.isEmpty = _V, h.isEqual = gV, h.isEqualWith = $V, h.isError = tc, h.isFinite = yV, h.isFunction = Pn, h.isInteger = yp, h.isLength = Pa, h.isMap = bp, h.isMatch = bV, h.isMatchWith = VV, h.isNaN = CV, h.isNative = SV, h.isNil = EV, h.isNull = kV, h.isNumber = Vp, h.isObject = Me, h.isObjectLike = Oe, h.isPlainObject = Zs, h.isRegExp = nc, h.isSafeInteger = IV, h.isSet = Cp, h.isString = Ra, h.isSymbol = Bt, h.isTypedArray = Fr, h.isUndefined = AV, h.isWeakMap = xV, h.isWeakSet = LV, h.join = My, h.kebabCase = $C, h.last = Xt, h.lastIndexOf = Dy, h.lowerCase = yC, h.lowerFirst = bC, h.lt = TV, h.lte = BV, h.max = vS, h.maxBy = mS, h.mean = _S, h.meanBy = gS, h.min = $S, h.minBy = yS, h.stubArray = cc, h.stubFalse = dc, h.stubObject = iS, h.stubString = aS, h.stubTrue = lS, h.multiply = bS, h.nth = Ny, h.noConflict = XC, h.noop = uc, h.now = Da, h.pad = VC, h.padEnd = CC, h.padStart = SC, h.parseInt = kC, h.random = wC, h.reduce = Rb, h.reduceRight = Fb, h.repeat = EC, h.replace = IC, h.result = sC, h.round = VS, h.runInContext = b, h.sample = Wb, h.size = zb, h.snakeCase = AC, h.some = Yb, h.sortedIndex = qy, h.sortedIndexBy = Hy, h.sortedIndexOf = zy, h.sortedLastIndex = Yy, h.sortedLastIndexBy = Gy, h.sortedLastIndexOf = jy, h.startCase = LC, h.startsWith = TC, h.subtract = CS, h.sum = SS, h.sumBy = kS, h.template = BC, h.times = uS, h.toFinite = Rn, h.toInteger = Q, h.toLength = kp, h.toLower = MC, h.toNumber = Qt, h.toSafeInteger = MV, h.toString = me, h.toUpper = DC, h.trim = NC, h.trimEnd = OC, h.trimStart = PC, h.truncate = RC, h.unescape = FC, h.uniqueId = dS, h.upperCase = UC, h.upperFirst = sc, h.each = fp, h.eachRight = hp, h.first = lp, lc(h, function() {
        var t = {};
        return $n(h, function(n, s) {
          ge.call(h.prototype, s) || (t[s] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = i, Gt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), Gt(["drop", "take"], function(t, n) {
        ae.prototype[t] = function(s) {
          s = s === r ? 1 : ze(Q(s), 0);
          var l = this.__filtered__ && !n ? new ae(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = rt(s, l.__takeCount__) : l.__views__.push({
            size: rt(s, Ht),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ae.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), Gt(["filter", "map", "takeWhile"], function(t, n) {
        var s = n + 1, l = s == _e || s == Ne;
        ae.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: G(d, 3),
            type: s
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), Gt(["head", "last"], function(t, n) {
        var s = "take" + (n ? "Right" : "");
        ae.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), Gt(["initial", "tail"], function(t, n) {
        var s = "drop" + (n ? "" : "Right");
        ae.prototype[t] = function() {
          return this.__filtered__ ? new ae(this) : this[s](1);
        };
      }), ae.prototype.compact = function() {
        return this.filter(bt);
      }, ae.prototype.find = function(t) {
        return this.filter(t).head();
      }, ae.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ae.prototype.invokeMap = ne(function(t, n) {
        return typeof t == "function" ? new ae(this) : this.map(function(s) {
          return qs(s, t, n);
        });
      }), ae.prototype.reject = function(t) {
        return this.filter(Oa(G(t)));
      }, ae.prototype.slice = function(t, n) {
        t = Q(t);
        var s = this;
        return s.__filtered__ && (t > 0 || n < 0) ? new ae(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), n !== r && (n = Q(n), s = n < 0 ? s.dropRight(-n) : s.take(n - t)), s);
      }, ae.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ae.prototype.toArray = function() {
        return this.take(Ht);
      }, $n(ae.prototype, function(t, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, V = m instanceof ae, x = g[0], L = V || X(m), M = function(ie) {
            var ue = d.apply(h, eo([ie], g));
            return l && U ? ue[0] : ue;
          };
          L && s && typeof x == "function" && x.length != 1 && (V = L = !1);
          var U = this.__chain__, H = !!this.__actions__.length, j = p && !U, ee = V && !H;
          if (!p && L) {
            m = ee ? m : new ae(this);
            var Z = t.apply(m, g);
            return Z.__actions__.push({ func: Ba, args: [M], thisArg: r }), new Zt(Z, U);
          }
          return j && ee ? t.apply(this, g) : (Z = this.thru(M), j ? l ? Z.value()[0] : Z.value() : Z);
        });
      }), Gt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = sa[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
        h.prototype[t] = function() {
          var d = arguments;
          if (l && !this.__chain__) {
            var p = this.value();
            return n.apply(X(p) ? p : [], d);
          }
          return this[s](function(m) {
            return n.apply(X(m) ? m : [], d);
          });
        };
      }), $n(ae.prototype, function(t, n) {
        var s = h[n];
        if (s) {
          var l = s.name + "";
          ge.call(Dr, l) || (Dr[l] = []), Dr[l].push({ name: n, func: s });
        }
      }), Dr[ka(r, S).name] = [{
        name: "wrapper",
        func: r
      }], ae.prototype.clone = F0, ae.prototype.reverse = U0, ae.prototype.value = W0, h.prototype.at = mb, h.prototype.chain = _b, h.prototype.commit = gb, h.prototype.next = $b, h.prototype.plant = bb, h.prototype.reverse = Vb, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = Cb, h.prototype.first = h.prototype.head, Ns && (h.prototype[Ns] = yb), h;
    }, Tr = g0();
    Lo ? ((Lo.exports = Tr)._ = Tr, au._ = Tr) : Je._ = Tr;
  }).call(Ks);
})(be, be.exports);
const Yk = "/alarms?_s=", Nl = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Gk = async (e, o) => {
  try {
    return (await ot.put(
      `/alarms/${e}?ack=${o}`,
      {
        body: `alarm=${e}`
      },
      Nl
    )).status === 204;
  } catch {
    return !1;
  }
}, m_ = async (e, o) => {
  try {
    return (await ot.put(
      `/alarms/${e}?${o}=true`,
      {
        body: `alarm=${e}`
      },
      Nl
    )).status === 204;
  } catch {
    return !1;
  }
}, jk = async (e, o) => {
  try {
    const r = e.join(",alarm.id==");
    return (await Gn.put(
      `alarms?_s=alarm.id==${r}&${o}=true`,
      null,
      Nl
    )).status == 204;
  } catch {
    return !1;
  }
}, Zk = async () => {
  try {
    const e = `${Yk}isSituation==true&limit=0`, o = await Gn(e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, Kk = async (e) => {
  try {
    const o = e.join(",id=="), r = await Gn(`/alarms?_s=id==${o}&limit==0`);
    return r.status === 200 ? r.data.alarm : !1;
  } catch {
    return !1;
  }
}, __ = async (e) => {
  try {
    const o = await Gn(`/alarms/${e}`);
    return o.status === 200 ? o.data : null;
  } catch {
    return null;
  }
}, Jk = async (e) => {
  try {
    const o = await Gn(`/events?_s=alarm.id==${e}`);
    return o.status === 200 ? o.data.event : null;
  } catch {
    return null;
  }
}, Xk = async () => {
  try {
    const e = await Gn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => be.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Qk = async (e, o, r) => {
  try {
    return (await Gn.put(
      `/alarms/${e}/${o}`,
      `body=${r}`,
      Nl
    )).status == 204;
  } catch {
    return !1;
  }
}, eE = async (e, o) => {
  try {
    return (await Gn.delete(`/alarms/${e}/${o}`)).status == 204;
  } catch {
    return !1;
  }
}, tE = async () => {
  try {
    const e = await Gn.get(
      "alarms?_s=isInSituation==false;isSituation==false&limit==0"
    );
    return e.status === 200 ? e.data.alarm : !1;
  } catch {
    return !1;
  }
}, nE = window.Pinia.defineStore, gn = nE("situationsStore", {
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
        const o = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = o.map((u) => u.id);
        const r = be.exports.groupBy(o, "status"), a = [
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
        const i = await __(e);
        if (i) {
          const a = (o = i.relatedAlarms) == null ? void 0 : o.map((f) => f.id), c = await Kk(a);
          i.status = (r = i.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : r.value, i.alarms = be.exports.sortBy(c, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(e, o) {
      const r = {};
      await Promise.all(
        o.map(async (i) => {
          const a = await Jk(i);
          a && (r[i] = be.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = r);
    },
    async getUnassignedAlarms() {
      const e = await tE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), oE = window.Vue.openBlock, rE = window.Vue.createElementBlock, sE = window.Vue.createElementVNode;
var iE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const aE = {}, lE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uE = /* @__PURE__ */ sE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), cE = [
  uE
];
function dE(e, o) {
  return oE(), rE("svg", lE, cE);
}
var ws = /* @__PURE__ */ iE(aE, [["render", dE]]);
var fE = Object.defineProperty, lw = Object.getOwnPropertySymbols, hE = Object.prototype.hasOwnProperty, pE = Object.prototype.propertyIsEnumerable, uw = (e, o, r) => o in e ? fE(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, cw = (e, o) => {
  for (var r in o || (o = {}))
    hE.call(o, r) && uw(e, r, o[r]);
  if (lw)
    for (var r of lw(o))
      pE.call(o, r) && uw(e, r, o[r]);
  return e;
};
const wE = window.Vue.defineComponent, vE = window.Vue.toRaw, Ec = window.Vue.h;
var mE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
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
    const e = this.$attrs, o = e.class ? e.class.split(" ").reduce((a, u) => (a[u] = !0, a), {}) : {}, r = {};
    o["feather-icon"] = !0, this.flex && (o["feather-icon-flex"] = !0), this.title ? (r["aria-label"] = this.title, r["aria-hidden"] = "false") : r["aria-hidden"] = "true", r.focusable = "false", r.role = "img";
    let i = vE(this.icon);
    return this.$slots.default ? Ec("span", { class: "feather-icon-container" }, [
      Ec(this.$slots.default()[0], cw({
        class: o
      }, r))
    ]) : Ec(i, cw({
      class: o
    }, r));
  }
});
var Y = /* @__PURE__ */ mE(gE, [["__scopeId", "data-v-52cbf270"]]);
const $E = window.Vue.openBlock, yE = window.Vue.createElementBlock, bE = window.Vue.createElementVNode;
var VE = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const CE = {}, SE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kE = /* @__PURE__ */ bE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), EE = [
  kE
];
function IE(e, o) {
  return $E(), yE("svg", SE, EE);
}
var g_ = /* @__PURE__ */ VE(CE, [["render", IE]]);
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
  var o = Number(e);
  return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
}
function Ie(e, o) {
  if (o.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + o.length + " present");
}
function Ge(e) {
  Ie(1, arguments);
  var o = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && o === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || o === "[object Number]" ? new Date(e) : ((typeof e == "string" || o === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function AE(e, o) {
  Ie(2, arguments);
  var r = Ge(e), i = En(o);
  return isNaN(i) ? new Date(NaN) : (i && r.setDate(r.getDate() + i), r);
}
function xE(e, o) {
  Ie(2, arguments);
  var r = Ge(e).getTime(), i = En(o);
  return new Date(r + i);
}
var LE = {};
function _s() {
  return LE;
}
function dw(e, o) {
  var r, i, a, u, c, f, w, v;
  Ie(1, arguments);
  var _ = _s(), $ = En((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && i !== void 0 ? i : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ge(e), T = y.getDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setDate(y.getDate() - B), y.setHours(0, 0, 0, 0), y;
}
function bd(e) {
  var o = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return o.setUTCFullYear(e.getFullYear()), e.getTime() - o.getTime();
}
function fw(e) {
  Ie(1, arguments);
  var o = Ge(e);
  return o.setHours(0, 0, 0, 0), o;
}
function TE(e, o) {
  Ie(2, arguments);
  var r = Ge(e), i = Ge(o), a = r.getTime() - i.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function $_(e, o) {
  Ie(2, arguments);
  var r = fw(e), i = fw(o);
  return r.getTime() === i.getTime();
}
function BE(e) {
  return Ie(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ME(e) {
  if (Ie(1, arguments), !BE(e) && typeof e != "number")
    return !1;
  var o = Ge(e);
  return !isNaN(Number(o));
}
function DE(e, o) {
  Ie(2, arguments);
  var r = En(o);
  return xE(e, -r);
}
var NE = 864e5;
function OE(e) {
  Ie(1, arguments);
  var o = Ge(e), r = o.getTime();
  o.setUTCMonth(0, 1), o.setUTCHours(0, 0, 0, 0);
  var i = o.getTime(), a = r - i;
  return Math.floor(a / NE) + 1;
}
function $l(e) {
  Ie(1, arguments);
  var o = 1, r = Ge(e), i = r.getUTCDay(), a = (i < o ? 7 : 0) + i - o;
  return r.setUTCDate(r.getUTCDate() - a), r.setUTCHours(0, 0, 0, 0), r;
}
function y_(e) {
  Ie(1, arguments);
  var o = Ge(e), r = o.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(r + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = $l(i), u = new Date(0);
  u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = $l(u);
  return o.getTime() >= a.getTime() ? r + 1 : o.getTime() >= c.getTime() ? r : r - 1;
}
function PE(e) {
  Ie(1, arguments);
  var o = y_(e), r = new Date(0);
  r.setUTCFullYear(o, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var i = $l(r);
  return i;
}
var RE = 6048e5;
function FE(e) {
  Ie(1, arguments);
  var o = Ge(e), r = $l(o).getTime() - PE(o).getTime();
  return Math.round(r / RE) + 1;
}
function yl(e, o) {
  var r, i, a, u, c, f, w, v;
  Ie(1, arguments);
  var _ = _s(), $ = En((r = (i = (a = (u = o == null ? void 0 : o.weekStartsOn) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && i !== void 0 ? i : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = Ge(e), T = y.getUTCDay(), B = (T < $ ? 7 : 0) + T - $;
  return y.setUTCDate(y.getUTCDate() - B), y.setUTCHours(0, 0, 0, 0), y;
}
function b_(e, o) {
  var r, i, a, u, c, f, w, v;
  Ie(1, arguments);
  var _ = Ge(e), $ = _.getUTCFullYear(), y = _s(), T = En((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && i !== void 0 ? i : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1);
  if (!(T >= 1 && T <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var B = new Date(0);
  B.setUTCFullYear($ + 1, 0, T), B.setUTCHours(0, 0, 0, 0);
  var N = yl(B, o), D = new Date(0);
  D.setUTCFullYear($, 0, T), D.setUTCHours(0, 0, 0, 0);
  var S = yl(D, o);
  return _.getTime() >= N.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function UE(e, o) {
  var r, i, a, u, c, f, w, v;
  Ie(1, arguments);
  var _ = _s(), $ = En((r = (i = (a = (u = o == null ? void 0 : o.firstWeekContainsDate) !== null && u !== void 0 ? u : o == null || (c = o.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && i !== void 0 ? i : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && r !== void 0 ? r : 1), y = b_(e, o), T = new Date(0);
  T.setUTCFullYear(y, 0, $), T.setUTCHours(0, 0, 0, 0);
  var B = yl(T, o);
  return B;
}
var WE = 6048e5;
function qE(e, o) {
  Ie(1, arguments);
  var r = Ge(e), i = yl(r, o).getTime() - UE(r, o).getTime();
  return Math.round(i / WE) + 1;
}
function ye(e, o) {
  for (var r = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < o; )
    i = "0" + i;
  return r + i;
}
var HE = {
  y: function(e, o) {
    var r = e.getUTCFullYear(), i = r > 0 ? r : 1 - r;
    return ye(o === "yy" ? i % 100 : i, o.length);
  },
  M: function(e, o) {
    var r = e.getUTCMonth();
    return o === "M" ? String(r + 1) : ye(r + 1, 2);
  },
  d: function(e, o) {
    return ye(e.getUTCDate(), o.length);
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
    return ye(e.getUTCHours() % 12 || 12, o.length);
  },
  H: function(e, o) {
    return ye(e.getUTCHours(), o.length);
  },
  m: function(e, o) {
    return ye(e.getUTCMinutes(), o.length);
  },
  s: function(e, o) {
    return ye(e.getUTCSeconds(), o.length);
  },
  S: function(e, o) {
    var r = o.length, i = e.getUTCMilliseconds(), a = Math.floor(i * Math.pow(10, r - 3));
    return ye(a, o.length);
  }
};
const lo = HE;
var Hr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, zE = {
  G: function(e, o, r) {
    var i = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (o) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(i, {
          width: "wide"
        });
    }
  },
  y: function(e, o, r) {
    if (o === "yo") {
      var i = e.getUTCFullYear(), a = i > 0 ? i : 1 - i;
      return r.ordinalNumber(a, {
        unit: "year"
      });
    }
    return lo.y(e, o);
  },
  Y: function(e, o, r, i) {
    var a = b_(e, i), u = a > 0 ? a : 1 - a;
    if (o === "YY") {
      var c = u % 100;
      return ye(c, 2);
    }
    return o === "Yo" ? r.ordinalNumber(u, {
      unit: "year"
    }) : ye(u, o.length);
  },
  R: function(e, o) {
    var r = y_(e);
    return ye(r, o.length);
  },
  u: function(e, o) {
    var r = e.getUTCFullYear();
    return ye(r, o.length);
  },
  Q: function(e, o, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "Q":
        return String(i);
      case "QQ":
        return ye(i, 2);
      case "Qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, o, r) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (o) {
      case "q":
        return String(i);
      case "qq":
        return ye(i, 2);
      case "qo":
        return r.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, o, r) {
    var i = e.getUTCMonth();
    switch (o) {
      case "M":
      case "MM":
        return lo.M(e, o);
      case "Mo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, o, r) {
    var i = e.getUTCMonth();
    switch (o) {
      case "L":
        return String(i + 1);
      case "LL":
        return ye(i + 1, 2);
      case "Lo":
        return r.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, o, r, i) {
    var a = qE(e, i);
    return o === "wo" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ye(a, o.length);
  },
  I: function(e, o, r) {
    var i = FE(e);
    return o === "Io" ? r.ordinalNumber(i, {
      unit: "week"
    }) : ye(i, o.length);
  },
  d: function(e, o, r) {
    return o === "do" ? r.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : lo.d(e, o);
  },
  D: function(e, o, r) {
    var i = OE(e);
    return o === "Do" ? r.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : ye(i, o.length);
  },
  E: function(e, o, r) {
    var i = e.getUTCDay();
    switch (o) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, o, r, i) {
    var a = e.getUTCDay(), u = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "e":
        return String(u);
      case "ee":
        return ye(u, 2);
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
  c: function(e, o, r, i) {
    var a = e.getUTCDay(), u = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (o) {
      case "c":
        return String(u);
      case "cc":
        return ye(u, o.length);
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
    var i = e.getUTCDay(), a = i === 0 ? 7 : i;
    switch (o) {
      case "i":
        return String(a);
      case "ii":
        return ye(a, o.length);
      case "io":
        return r.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return r.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, o, r) {
    var i = e.getUTCHours(), a = i / 12 >= 1 ? "pm" : "am";
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
    var i = e.getUTCHours(), a;
    switch (i === 12 ? a = Hr.noon : i === 0 ? a = Hr.midnight : a = i / 12 >= 1 ? "pm" : "am", o) {
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
    var i = e.getUTCHours(), a;
    switch (i >= 17 ? a = Hr.evening : i >= 12 ? a = Hr.afternoon : i >= 4 ? a = Hr.morning : a = Hr.night, o) {
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
      var i = e.getUTCHours() % 12;
      return i === 0 && (i = 12), r.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return lo.h(e, o);
  },
  H: function(e, o, r) {
    return o === "Ho" ? r.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : lo.H(e, o);
  },
  K: function(e, o, r) {
    var i = e.getUTCHours() % 12;
    return o === "Ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : ye(i, o.length);
  },
  k: function(e, o, r) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), o === "ko" ? r.ordinalNumber(i, {
      unit: "hour"
    }) : ye(i, o.length);
  },
  m: function(e, o, r) {
    return o === "mo" ? r.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : lo.m(e, o);
  },
  s: function(e, o, r) {
    return o === "so" ? r.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : lo.s(e, o);
  },
  S: function(e, o) {
    return lo.S(e, o);
  },
  X: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (o) {
      case "X":
        return pw(u);
      case "XXXX":
      case "XX":
        return tr(u);
      case "XXXXX":
      case "XXX":
      default:
        return tr(u, ":");
    }
  },
  x: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "x":
        return pw(u);
      case "xxxx":
      case "xx":
        return tr(u);
      case "xxxxx":
      case "xxx":
      default:
        return tr(u, ":");
    }
  },
  O: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + hw(u, ":");
      case "OOOO":
      default:
        return "GMT" + tr(u, ":");
    }
  },
  z: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (o) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + hw(u, ":");
      case "zzzz":
      default:
        return "GMT" + tr(u, ":");
    }
  },
  t: function(e, o, r, i) {
    var a = i._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return ye(u, o.length);
  },
  T: function(e, o, r, i) {
    var a = i._originalDate || e, u = a.getTime();
    return ye(u, o.length);
  }
};
function hw(e, o) {
  var r = e > 0 ? "-" : "+", i = Math.abs(e), a = Math.floor(i / 60), u = i % 60;
  if (u === 0)
    return r + String(a);
  var c = o || "";
  return r + String(a) + c + ye(u, 2);
}
function pw(e, o) {
  if (e % 60 === 0) {
    var r = e > 0 ? "-" : "+";
    return r + ye(Math.abs(e) / 60, 2);
  }
  return tr(e, o);
}
function tr(e, o) {
  var r = o || "", i = e > 0 ? "-" : "+", a = Math.abs(e), u = ye(Math.floor(a / 60), 2), c = ye(a % 60, 2);
  return i + u + r + c;
}
const YE = zE;
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
}, V_ = function(e, o) {
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
}, GE = function(e, o) {
  var r = e.match(/(P+)(p+)?/) || [], i = r[1], a = r[2];
  if (!a)
    return ww(e, o);
  var u;
  switch (i) {
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
  return u.replace("{{date}}", ww(i, o)).replace("{{time}}", V_(a, o));
}, jE = {
  p: V_,
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
}, t2 = function(e, o, r) {
  var i, a = e2[e];
  return typeof a == "string" ? i = a : o === 1 ? i = a.one : i = a.other.replace("{{count}}", o.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + i : i + " ago" : i;
};
const n2 = t2;
function Ic(e) {
  return function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = o.width ? String(o.width) : e.defaultWidth, i = e.formats[r] || e.formats[e.defaultWidth];
    return i;
  };
}
var o2 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, r2 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, s2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, i2 = {
  date: Ic({
    formats: o2,
    defaultWidth: "full"
  }),
  time: Ic({
    formats: r2,
    defaultWidth: "full"
  }),
  dateTime: Ic({
    formats: s2,
    defaultWidth: "full"
  })
};
const a2 = i2;
var l2 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, u2 = function(e, o, r, i) {
  return l2[e];
};
const c2 = u2;
function Js(e) {
  return function(o, r) {
    var i = r != null && r.context ? String(r.context) : "standalone", a;
    if (i === "formatting" && e.formattingValues) {
      var u = e.defaultFormattingWidth || e.defaultWidth, c = r != null && r.width ? String(r.width) : u;
      a = e.formattingValues[c] || e.formattingValues[u];
    } else {
      var f = e.defaultWidth, w = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[w] || e.values[f];
    }
    var v = e.argumentCallback ? e.argumentCallback(o) : o;
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
}, m2 = function(e, o) {
  var r = Number(e), i = r % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, _2 = {
  ordinalNumber: m2,
  era: Js({
    values: d2,
    defaultWidth: "wide"
  }),
  quarter: Js({
    values: f2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: Js({
    values: h2,
    defaultWidth: "wide"
  }),
  day: Js({
    values: p2,
    defaultWidth: "wide"
  }),
  dayPeriod: Js({
    values: w2,
    defaultWidth: "wide",
    formattingValues: v2,
    defaultFormattingWidth: "wide"
  })
};
const g2 = _2;
function Xs(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.width, a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], u = o.match(a);
    if (!u)
      return null;
    var c = u[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? y2(f, function($) {
      return $.test(c);
    }) : $2(f, function($) {
      return $.test(c);
    }), v;
    v = e.valueCallback ? e.valueCallback(w) : w, v = r.valueCallback ? r.valueCallback(v) : v;
    var _ = o.slice(c.length);
    return {
      value: v,
      rest: _
    };
  };
}
function $2(e, o) {
  for (var r in e)
    if (e.hasOwnProperty(r) && o(e[r]))
      return r;
}
function y2(e, o) {
  for (var r = 0; r < e.length; r++)
    if (o(e[r]))
      return r;
}
function b2(e) {
  return function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.match(e.matchPattern);
    if (!i)
      return null;
    var a = i[0], u = o.match(e.parsePattern);
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
}, A2 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, x2 = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, L2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, T2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, B2 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, M2 = {
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
}, D2 = {
  ordinalNumber: b2({
    matchPattern: V2,
    parsePattern: C2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Xs({
    matchPatterns: S2,
    defaultMatchWidth: "wide",
    parsePatterns: k2,
    defaultParseWidth: "any"
  }),
  quarter: Xs({
    matchPatterns: E2,
    defaultMatchWidth: "wide",
    parsePatterns: I2,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Xs({
    matchPatterns: A2,
    defaultMatchWidth: "wide",
    parsePatterns: x2,
    defaultParseWidth: "any"
  }),
  day: Xs({
    matchPatterns: L2,
    defaultMatchWidth: "wide",
    parsePatterns: T2,
    defaultParseWidth: "any"
  }),
  dayPeriod: Xs({
    matchPatterns: B2,
    defaultMatchWidth: "any",
    parsePatterns: M2,
    defaultParseWidth: "any"
  })
};
const N2 = D2;
var O2 = {
  code: "en-US",
  formatDistance: n2,
  formatLong: a2,
  formatRelative: c2,
  localize: g2,
  match: N2,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const C_ = O2;
var P2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, R2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, F2 = /^'([^]*?)'?$/, U2 = /''/g, W2 = /[a-zA-Z]/;
function q2(e, o, r) {
  var i, a, u, c, f, w, v, _, $, y, T, B, N, D, S, A, E, O;
  Ie(2, arguments);
  var k = String(o), R = _s(), F = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : R.locale) !== null && i !== void 0 ? i : C_, z = En((u = (c = (f = (w = r == null ? void 0 : r.firstWeekContainsDate) !== null && w !== void 0 ? w : r == null || (v = r.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : R.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = R.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var ke = En((T = (B = (N = (D = r == null ? void 0 : r.weekStartsOn) !== null && D !== void 0 ? D : r == null || (S = r.locale) === null || S === void 0 || (A = S.options) === null || A === void 0 ? void 0 : A.weekStartsOn) !== null && N !== void 0 ? N : R.weekStartsOn) !== null && B !== void 0 ? B : (E = R.locale) === null || E === void 0 || (O = E.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && T !== void 0 ? T : 0);
  if (!(ke >= 0 && ke <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!F.localize)
    throw new RangeError("locale must contain localize property");
  if (!F.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var we = Ge(e);
  if (!ME(we))
    throw new RangeError("Invalid time value");
  var Ve = bd(we), xe = DE(we, Ve), ve = {
    firstWeekContainsDate: z,
    weekStartsOn: ke,
    locale: F,
    _originalDate: we
  }, _e = k.match(R2).map(function(oe) {
    var Ne = oe[0];
    if (Ne === "p" || Ne === "P") {
      var Le = ZE[Ne];
      return Le(oe, F.formatLong);
    }
    return oe;
  }).join("").match(P2).map(function(oe) {
    if (oe === "''")
      return "'";
    var Ne = oe[0];
    if (Ne === "'")
      return H2(oe);
    var Le = YE[Ne];
    if (Le)
      return !(r != null && r.useAdditionalWeekYearTokens) && QE(oe) && vw(oe, o, String(e)), !(r != null && r.useAdditionalDayOfYearTokens) && XE(oe) && vw(oe, o, String(e)), Le(xe, oe, F.localize, ve);
    if (Ne.match(W2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ne + "`");
    return oe;
  }).join("");
  return _e;
}
function H2(e) {
  var o = e.match(F2);
  return o ? o[1].replace(U2, "'") : e;
}
function S_(e, o) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var r in o)
    Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
  return e;
}
function z2(e) {
  return S_({}, e);
}
var mw = 1e3 * 60, bl = 60 * 24, _w = bl * 30, gw = bl * 365;
function Ol(e, o, r) {
  var i, a, u;
  Ie(2, arguments);
  var c = _s(), f = (i = (a = r == null ? void 0 : r.locale) !== null && a !== void 0 ? a : c.locale) !== null && i !== void 0 ? i : C_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = TE(e, o);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = S_(z2(r), {
    addSuffix: Boolean(r == null ? void 0 : r.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = Ge(o), $ = Ge(e)) : (_ = Ge(e), $ = Ge(o));
  var y = String((u = r == null ? void 0 : r.roundingMethod) !== null && u !== void 0 ? u : "round"), T;
  if (y === "floor")
    T = Math.floor;
  else if (y === "ceil")
    T = Math.ceil;
  else if (y === "round")
    T = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var B = $.getTime() - _.getTime(), N = B / mw, D = bd($) - bd(_), S = (B - D) / mw, A = r == null ? void 0 : r.unit, E;
  if (A ? E = String(A) : N < 1 ? E = "second" : N < 60 ? E = "minute" : N < bl ? E = "hour" : S < _w ? E = "day" : S < gw ? E = "month" : E = "year", E === "second") {
    var O = T(B / 1e3);
    return f.formatDistance("xSeconds", O, v);
  } else if (E === "minute") {
    var k = T(N);
    return f.formatDistance("xMinutes", k, v);
  } else if (E === "hour") {
    var R = T(N / 60);
    return f.formatDistance("xHours", R, v);
  } else if (E === "day") {
    var F = T(S / bl);
    return f.formatDistance("xDays", F, v);
  } else if (E === "month") {
    var z = T(S / _w);
    return z === 12 && A !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", z, v);
  } else if (E === "year") {
    var ke = T(S / gw);
    return f.formatDistance("xYears", ke, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function Y2(e, o, r) {
  Ie(2, arguments);
  var i = dw(e, r), a = dw(o, r);
  return i.getTime() === a.getTime();
}
function G2(e, o) {
  return Ie(1, arguments), Y2(e, Date.now(), o);
}
function j2(e) {
  return Ie(1, arguments), $_(e, Date.now());
}
function Z2(e, o) {
  Ie(2, arguments);
  var r = En(o);
  return AE(e, -r);
}
function K2(e) {
  return Ie(1, arguments), $_(e, Z2(Date.now(), 1));
}
const In = (e) => {
  let o = "";
  if (e)
    try {
      o = q2(new Date(e), tt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return o;
}, k_ = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), E_ = (e, o) => {
  const r = k_(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), i = r.length > o ? "..." : "";
  return r.substring(0, o) + i;
}, J2 = (e, o) => {
  let r = o;
  switch (e) {
    case 2:
      r = r.filter(
        (i) => j2(i.firstEventTime)
      );
      break;
    case 3:
      r = r.filter(
        (i) => K2(i.firstEventTime)
      );
      break;
    case 4:
      r = r.filter(
        (i) => G2(i.firstEventTime)
      );
      break;
  }
  return r;
}, Pl = "/alec", I_ = "/alec/engine/configuration", A_ = "/alec/llm/configuration", X2 = "/alec/llm/validate", x_ = "/alec/llm/suggestions", Q2 = "/alec/llm/usage", L_ = "/alec/situation", eI = async () => {
  try {
    const e = await ot.get(`${I_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, tI = async (e) => {
  try {
    return (await ot.post(I_, e)).status === 200;
  } catch {
    return !1;
  }
}, nI = async () => {
  try {
    const e = await ot.get(A_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, oI = async (e) => {
  try {
    const o = await ot.post(A_, e);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, rI = async (e) => {
  try {
    const o = await ot.post(X2, e);
    return o.status === 200 ? o.data : { ok: !1, message: `Unexpected response (HTTP ${o.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, T_ = async (e) => {
  try {
    const o = await ot.get(`${x_}/${e}`);
    return o.status === 200 ? o.data : o.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, sI = async (e) => {
  try {
    const o = await ot.post(
      `${x_}/${e}/reanalyze`
    );
    return o.status === 202 || o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, iI = async (e = 30) => {
  try {
    const o = await ot.get(`${Q2}?days=${e}`);
    return o.status === 200 ? o.data : !1;
  } catch {
    return !1;
  }
}, B_ = async (e, o) => {
  try {
    const r = await ot.post(`${Pl}/situation/${o}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return o == tt.REJECTED.toLowerCase() && r.status === 200 && await m_(e, "clear"), r.status === 200;
  } catch {
    return !1;
  }
}, $w = async (e, o) => {
  try {
    return (await ot.delete(`${Pl}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: o
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, M_ = async (e, o) => {
  try {
    return (await ot.put(`${Pl}/situation/alarm/`, {
      situationId: e,
      alarmIdList: o
    })).status === 200;
  } catch {
    return !1;
  }
}, aI = async (e) => {
  try {
    return (await ot.post(L_, e)).status === 200;
  } catch {
    return !1;
  }
}, lI = async () => {
  try {
    return (await ot.post(`${L_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, uI = async () => {
  try {
    return (await ot.post(`${Pl}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, cI = window.Vue.defineComponent, Ot = window.Vue.unref, Ac = window.Vue.normalizeClass, Sn = window.Vue.createElementVNode, Fo = window.Vue.toDisplayString, uo = window.Vue.openBlock, co = window.Vue.createElementBlock, Qs = window.Vue.createCommentVNode, yw = window.Vue.createVNode, Vd = window.Vue.createTextVNode, dI = window.Vue.renderList, fI = window.Vue.Fragment, hI = window.Vue.pushScopeId, pI = window.Vue.popScopeId, Hd = (e) => (hI("data-v-2682849b"), e = e(), pI(), e), wI = { class: "content" }, vI = { class: "title-row" }, mI = { class: "title" }, _I = ["title"], gI = {
  key: 1,
  class: "accepted"
}, $I = {
  key: 2,
  class: "rejected"
}, yI = /* @__PURE__ */ Hd(() => /* @__PURE__ */ Sn("span", { class: "info-title" }, " Duration: ", -1)), bI = { key: 0 }, VI = /* @__PURE__ */ Hd(() => /* @__PURE__ */ Sn("span", { class: "info-title" }, " First Event: ", -1)), CI = { class: "description" }, SI = /* @__PURE__ */ Hd(() => /* @__PURE__ */ Sn("hr", null, null, -1)), kI = {
  key: 1,
  class: "count-info"
}, EI = /* @__PURE__ */ Vd(" Alarms: "), II = { class: "info-title" }, AI = window.Vue.onMounted, xI = window.Vue.ref, LI = /* @__PURE__ */ cI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: o }) {
    const r = e, i = tt.ACCEPTED, a = tt.REJECTED, u = new Date().getTime(), c = () => {
      var w;
      o("situation-selected", (w = r.situationInfo) == null ? void 0 : w.id);
    }, f = xI("none");
    return AI(async () => {
      var v;
      if (((v = r.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const w = await T_(r.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return uo(), co("div", {
        onClick: c,
        class: Ac(["card", {
          rejected: r.situationInfo.status == Ot(a)
        }])
      }, [
        Sn("div", {
          class: Ac(["severity-line", [`${($ = (_ = r.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        Sn("div", wI, [
          Sn("div", vI, [
            Sn("div", mI, "Situation " + Fo((y = r.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (uo(), co("span", {
              key: 0,
              class: Ac(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Fo(f.value === "pending" ? "\u2026" : ""), 11, _I)) : Qs("", !0),
            r.situationInfo.status == Ot(i) ? (uo(), co("div", gI, [
              yw(Ot(Y), {
                icon: Ot(ws),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : Qs("", !0),
            r.situationInfo.status == Ot(a) ? (uo(), co("div", $I, [
              yw(Ot(Y), {
                icon: Ot(g_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : Qs("", !0)
          ]),
          Sn("div", null, [
            yI,
            Vd(" " + Fo(Ot(Ol)(
              Ot(u),
              new Date(r.situationInfo.firstEventTime)
            )), 1)
          ]),
          r.small ? Qs("", !0) : (uo(), co("div", bI, [
            VI,
            Vd(Fo(Ot(In)(r.situationInfo.firstEventTime)), 1)
          ])),
          Sn("div", CI, Fo(Ot(E_)(r.situationInfo.description, r.small ? 100 : 230)), 1),
          SI,
          r.situationInfo.relatedAlarms ? (uo(), co("div", kI, [
            EI,
            Sn("span", II, Fo(r.situationInfo.relatedAlarms.length), 1)
          ])) : Qs("", !0),
          (uo(!0), co(fI, null, dI(Ot(be.exports.keys)(
            Ot(be.exports.groupBy)(r.situationInfo.relatedAlarms, "nodeLabel")
          ), (T) => (uo(), co("div", {
            class: "info-title",
            key: T
          }, " - " + Fo(T), 1))), 128))
        ])
      ], 2);
    };
  }
});
const D_ = /* @__PURE__ */ de(LI, [["__scopeId", "data-v-2682849b"]]), TI = window.Vue.openBlock, BI = window.Vue.createElementBlock, MI = window.Vue.createElementVNode;
var DI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const NI = {}, OI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PI = /* @__PURE__ */ MI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), RI = [
  PI
];
function FI(e, o) {
  return TI(), BI("svg", OI, RI);
}
var UI = /* @__PURE__ */ DI(NI, [["render", FI]]);
const WI = window.Vue.openBlock, qI = window.Vue.createElementBlock, N_ = window.Vue.createElementVNode;
var HI = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const zI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GI = /* @__PURE__ */ N_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), jI = /* @__PURE__ */ N_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), ZI = [
  GI,
  jI
];
function KI(e, o) {
  return WI(), qI("svg", YI, ZI);
}
var JI = /* @__PURE__ */ HI(zI, [["render", KI]]);
const XI = window.Vue.openBlock, QI = window.Vue.createElementBlock, eA = window.Vue.createElementVNode;
var tA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const nA = {}, oA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, rA = /* @__PURE__ */ eA("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), sA = [
  rA
];
function iA(e, o) {
  return XI(), QI("svg", oA, sA);
}
var aA = /* @__PURE__ */ tA(nA, [["render", iA]]);
const lA = window.Vue.openBlock, uA = window.Vue.createElementBlock, cA = window.Vue.createElementVNode;
var dA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const fA = {}, hA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, pA = /* @__PURE__ */ cA("path", { d: "M9.29,17.3a1,1,0,0,0,1.41,0L16,12,10.7,6.7A1,1,0,1,0,9.29,8.11L13.17,12,9.29,15.89A1,1,0,0,0,9.29,17.3Z" }, null, -1), wA = [
  pA
];
function vA(e, o) {
  return lA(), uA("svg", hA, wA);
}
var O_ = /* @__PURE__ */ dA(fA, [["render", vA]]);
const mA = window.Vue.defineComponent, fo = window.Vue.unref, Ua = window.Vue.normalizeClass, Wa = window.Vue.createVNode, _A = window.Vue.openBlock, gA = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const $A = { class: "paginator" }, yA = /* @__PURE__ */ mA({
  __name: "SimplePagination",
  props: {
    totalPages: null,
    currentPage: null
  },
  emits: ["go-to-page"],
  setup(e, { emit: o }) {
    const r = e, i = (a) => {
      a >= 0 && a <= r.totalPages - 1 && o("go-to-page", a);
    };
    return (a, u) => (_A(), gA("div", $A, [
      Wa(fo(Y), {
        icon: fo(UI),
        "aria-hidden": "true",
        class: Ua(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => i(0))
      }, null, 8, ["icon", "class"]),
      Wa(fo(Y), {
        icon: fo(aA),
        "aria-hidden": "true",
        class: Ua(["icon nav", { disable: r.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => i(r.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Wa(fo(Y), {
        icon: fo(O_),
        "aria-hidden": "true",
        class: Ua(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => i(r.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Wa(fo(Y), {
        icon: fo(JI),
        "aria-hidden": "true",
        class: Ua(["icon nav", { disable: r.currentPage == r.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => i(r.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const bA = /* @__PURE__ */ de(yA, [["__scopeId", "data-v-40758818"]]);
const ce = function(e) {
  e = e || "feather";
  const o = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), o].join("-");
}, VA = window.Vue.computed, Rl = (e, o) => {
  const r = {};
  return Object.keys(o).forEach((i) => {
    r[`${i}Label`] = VA(() => e.value[i] ? e.value[i] : o[i]);
  }), r;
};
const ir = function(e, o) {
  return window ? window.setTimeout(e, o) : setTimeout(e, o);
}, ar = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var CA = Object.defineProperty, SA = Object.defineProperties, kA = Object.getOwnPropertyDescriptors, bw = Object.getOwnPropertySymbols, EA = Object.prototype.hasOwnProperty, IA = Object.prototype.propertyIsEnumerable, Vw = (e, o, r) => o in e ? CA(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Cw = (e, o) => {
  for (var r in o || (o = {}))
    EA.call(o, r) && Vw(e, r, o[r]);
  if (bw)
    for (var r of bw(o))
      IA.call(o, r) && Vw(e, r, o[r]);
  return e;
}, AA = (e, o) => SA(e, kA(o));
const xA = window.Vue.defineComponent, LA = window.Vue.h;
var TA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const BA = {
  center: {
    type: Boolean,
    default: !1
  }
}, MA = xA({
  props: BA,
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
        const { clientWidth: o, clientHeight: r } = this.parent, i = Math.round(Math.max(o, r));
        let a = {
          top: "0px",
          left: "0px"
        };
        if (!this.center) {
          const u = this.parent.getBoundingClientRect(), c = e.pageY, f = e.pageX;
          a = {
            top: `${c - u.top - i / 2 - document.documentElement.scrollTop}px`,
            left: `${f - u.left - i / 2 - document.documentElement.scrollLeft}px`
          };
        }
        this.styles = AA(Cw({}, a), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, ar(this.failsafe), this.failsafe = ir(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return LA("div", {
        style: Cw({}, this.styles),
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
var bo = /* @__PURE__ */ TA(MA, [["__scopeId", "data-v-18e2a5db"]]);
const DA = window.Vue.openBlock, NA = window.Vue.createElementBlock, OA = window.Vue.createElementVNode;
var PA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const RA = {}, FA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, UA = /* @__PURE__ */ OA("path", { d: "M19,17.55,13.43,12,19,6.4A1,1,0,1,0,17.58,5L12,10.58,6.42,5A1,1,0,0,0,5,6.42L10.6,12,5,17.6A1,1,0,0,0,5,19a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.3L12,13.41,17.6,19a1,1,0,0,0,.71.29A1,1,0,0,0,19,19,1,1,0,0,0,19,17.55Z" }, null, -1), WA = [
  UA
];
function qA(e, o) {
  return DA(), NA("svg", FA, WA);
}
var gs = /* @__PURE__ */ PA(RA, [["render", qA]]);
const Sw = window.Vue.computed, HA = (e, o, r) => {
  const i = Sw(() => o.value.filter((u) => !u.disabled)), a = Sw(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? r(i.value[i.value.length - 1]) : r(i.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === i.value.length - 1 ? r(i.value[0]) : r(i.value[a.value + 1]));
    }
  };
};
const zA = window.Vue.openBlock, YA = window.Vue.createElementBlock, zd = window.Vue.createElementVNode;
var GA = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const jA = {}, ZA = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, KA = /* @__PURE__ */ zd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), JA = /* @__PURE__ */ zd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), XA = /* @__PURE__ */ zd("rect", {
  x: "11",
  y: "15",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), QA = [
  KA,
  JA,
  XA
];
function ex(e, o) {
  return zA(), YA("svg", ZA, QA);
}
var tx = /* @__PURE__ */ GA(jA, [["render", ex]]), nx = Object.defineProperty, ox = Object.defineProperties, rx = Object.getOwnPropertyDescriptors, kw = Object.getOwnPropertySymbols, sx = Object.prototype.hasOwnProperty, ix = Object.prototype.propertyIsEnumerable, Ew = (e, o, r) => o in e ? nx(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, P_ = (e, o) => {
  for (var r in o || (o = {}))
    sx.call(o, r) && Ew(e, r, o[r]);
  if (kw)
    for (var r of kw(o))
      ix.call(o, r) && Ew(e, r, o[r]);
  return e;
}, R_ = (e, o) => ox(e, rx(o));
const $s = window.Vue.defineComponent, Ei = window.Vue.resolveComponent, kn = window.Vue.openBlock, ss = window.Vue.createElementBlock, ax = window.Vue.createVNode, Vl = window.Vue.createBlock, lx = window.Vue.withModifiers, vs = window.Vue.inject, Ii = window.Vue.computed, ux = window.Vue.normalizeClass, zr = window.Vue.createElementVNode, Cl = window.Vue.toDisplayString, hl = window.Vue.renderSlot, $i = window.Vue.createCommentVNode, cx = window.Vue.withDirectives, dx = window.Vue.vShow, Cd = window.Vue.ref, Iw = window.Vue.toRef, Aw = window.Vue.nextTick, Sd = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Yd = window.Vue.provide, xw = window.Vue.isRef, fx = window.Vue.onBeforeUnmount;
var Ti = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const hx = {
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: Object,
    required: !0
  }
}, px = $s({
  props: hx,
  components: {
    FeatherIcon: Y
  }
}), wx = ["title"];
function vx(e, o, r, i, a, u) {
  const c = Ei("FeatherIcon");
  return kn(), ss("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    ax(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, wx);
}
var mx = /* @__PURE__ */ Ti(px, [["render", vx], ["__scopeId", "data-v-4265058e"]]);
const _x = $s({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return gs;
    }
  },
  components: {
    ActionIcon: mx
  }
});
function gx(e, o, r, i, a, u) {
  const c = Ei("ActionIcon");
  return kn(), Vl(c, {
    onClick: o[0] || (o[0] = lx((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var $x = /* @__PURE__ */ Ti(_x, [["render", gx]]);
const yx = $s({
  computed: {
    errorIcon() {
      return tx;
    }
  },
  components: {
    FeatherIcon: Y
  }
});
function bx(e, o, r, i, a, u) {
  const c = Ei("FeatherIcon");
  return kn(), Vl(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var Vx = /* @__PURE__ */ Ti(yx, [["render", bx], ["__scopeId", "data-v-0b8faef3"]]);
const Cx = {
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
}, Sx = {
  clear: () => !0,
  "wrapper-click": (e) => !0
}, kx = $s({
  emits: Sx,
  props: Cx,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = vs("wrapperOptions", {}), o = vs("validationErrorMessage", !1), r = Ii(() => e.error ? e.error : o && o.value ? o.value : !1);
    return R_(P_({}, e), { error: r });
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
        const i = this.$el.querySelector(".prefix");
        this.prefixWidth = i ? i.offsetWidth : 0;
      };
      this.prefixObserver = new MutationObserver(r), this.prefixObserver.observe(e, o), r();
    }
  },
  unmounted() {
    this.prefixObserver && this.prefixObserver.disconnect();
  },
  components: {
    ClearIcon: $x,
    ErrorIcon: Vx
  }
}), Ex = {
  "aria-hidden": "true",
  class: "feather-input-border"
}, Ix = ["for"], Ax = { class: "prefix" }, xx = { class: "post" };
function Lx(e, o, r, i, a, u) {
  const c = Ei("ClearIcon"), f = Ei("ErrorIcon");
  return kn(), ss("div", {
    class: ux(["feather-input-wrapper-container", e.containerCls])
  }, [
    zr("fieldset", Ex, [
      zr("legend", null, Cl(e.label), 1)
    ]),
    zr("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, Cl(e.label), 9, Ix),
    zr("div", {
      class: "feather-input-wrapper",
      onClick: o[1] || (o[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      zr("div", Ax, [
        hl(e.$slots, "pre", {}, void 0, !0)
      ]),
      hl(e.$slots, "default", {}, void 0, !0),
      zr("div", xx, [
        e.showClear && e.computedClearText ? (kn(), Vl(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: o[0] || (o[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : $i("", !0),
        e.error ? (kn(), Vl(f, { key: 1 })) : $i("", !0),
        hl(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Fl = /* @__PURE__ */ Ti(kx, [["render", Lx], ["__scopeId", "data-v-4db296db"]]);
const Tx = $s({
  setup() {
    const e = vs("subTextOptions", {}), o = vs("validationErrorMessage", !1), r = Ii(() => e.error ? e.error : o && o.value ? o.value : "");
    return R_(P_({}, e), { error: r });
  }
}), Bx = { class: "feather-input-sub-text" }, Mx = {
  key: 0,
  class: "feather-input-spacer"
}, Dx = {
  key: 1,
  class: "feather-input-hint",
  "data-ref-id": "feather-form-element-hint"
}, Nx = {
  key: 2,
  class: "feather-input-error",
  "data-ref-id": "feather-form-element-error",
  "aria-live": "assertive"
};
function Ox(e, o, r, i, a, u) {
  return cx((kn(), ss("div", Bx, [
    !e.hint && !e.error.length ? (kn(), ss("div", Mx, "\xA0")) : $i("", !0),
    e.hint && !e.error.length ? (kn(), ss("div", Dx, Cl(e.hint), 1)) : $i("", !0),
    e.error.length > 0 ? (kn(), ss("div", Nx, Cl(e.error), 1)) : $i("", !0),
    hl(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [dx, !e.inline || e.hint || e.error.length]
  ]);
}
var ys = /* @__PURE__ */ Ti(Tx, [["render", Ox], ["__scopeId", "data-v-8e0ac99e"]]);
const Px = {
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
$s({
  props: Px,
  setup(e) {
    const o = vs("featherFormErrors", Cd([])), r = Iw(e, "errorList"), i = Ii(() => {
      var _;
      return (_ = r.value) != null && _.length ? r.value : o.value;
    }), a = Iw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = Cd(), w = (_) => `${c(_.label)} - ${_.message}`, v = Ii(() => (i.value.length && Aw(() => f.value.focus()), e.headingText(i.value)));
    return Sd(a, (_) => {
      _.length && Aw(() => f.value.focus());
    }), {
      errors: i,
      errorsHeading: v,
      heading: f,
      focusElement: u,
      mainError: a,
      getFullMessage: w
    };
  }
});
const bs = (e, o, r, i, a) => {
  const u = vs("featherForm", !1);
  if (i && u && e.value) {
    const c = Cd("");
    Yd("validationErrorMessage", c);
    const f = () => {
      if (a && xw(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: r
        };
      try {
        return i.validateSync(o.value), c.value = "", { success: !0 };
      } catch (_) {
        const $ = _;
        return c.value = $.errors[0], {
          success: !1,
          message: $.errors[0],
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
    return a && xw(a) && Sd(a, () => {
      u.runValidation();
    }), Sd(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), fx(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, Vs = (e) => ({
  inherittedAttrs: Ii(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), Cs = {
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
}, Ss = (e) => {
  Yd("subTextOptions", e);
}, Ul = {
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
}, Wl = (e) => {
  Yd("wrapperOptions", e);
}, qa = window.Vue.ref, Rx = window.Vue.watch, Fx = window.Vue.watchEffect, Lw = window.Vue.computed, xc = window.Vue.provide, F_ = (e, o, r, i, a) => {
  const u = qa([]), c = qa(), f = qa(), w = qa();
  Fx(() => {
    if (!u.value.length)
      return;
    const S = u.value.map((A) => A.value);
    if (e.value !== void 0 && e.value !== null && (c.value = u.value[S.indexOf(e.value)]), !c.value && u.value.length) {
      let A = u.value.filter((E) => !E.disabled);
      A = A.length ? A : u.value, f.value = A[0], f.value.first = !0;
    }
  }), Rx(c, (S, A) => {
    A && (A.checked = !1), S && (S.checked = !0);
  });
  const v = (S) => {
    S && S.disabled || (f.value && (f.value.first = !1), c.value !== S && (o("update:modelValue", S.value), c.value = S, S.focus()));
  }, _ = Lw(() => c.value || f.value), $ = HA(_, u, v), y = Lw(() => ce("feather-radio-group"));
  w.value = y.value;
  const { validate: T } = bs(w, e, r, i, a);
  return xc("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), xc("select", v), xc("blur", (S) => {
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
var Ux = Object.defineProperty, Wx = Object.defineProperties, qx = Object.getOwnPropertyDescriptors, Tw = Object.getOwnPropertySymbols, Hx = Object.prototype.hasOwnProperty, zx = Object.prototype.propertyIsEnumerable, Bw = (e, o, r) => o in e ? Ux(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, us = (e, o) => {
  for (var r in o || (o = {}))
    Hx.call(o, r) && Bw(e, r, o[r]);
  if (Tw)
    for (var r of Tw(o))
      zx.call(o, r) && Bw(e, r, o[r]);
  return e;
}, U_ = (e, o) => Wx(e, qx(o));
const Vo = window.Vue.defineComponent, yi = window.Vue.inject, Sl = window.Vue.computed, bi = window.Vue.ref, sn = window.Vue.resolveComponent, Wt = window.Vue.openBlock, Bi = window.Vue.createElementBlock, W_ = window.Vue.normalizeClass, An = window.Vue.renderSlot, $o = window.Vue.createBlock, Ai = window.Vue.createCommentVNode, kl = window.Vue.createElementVNode, Yx = window.Vue.withModifiers, ql = window.Vue.createVNode, q_ = window.Vue.toRef, kd = window.Vue.mergeProps, Yn = window.Vue.withCtx, Gx = window.Vue.h, jx = window.Vue.provide;
var Co = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Zx = {
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
}, Kx = Vo({
  props: Zx,
  setup(e) {
    const o = yi("isCondensed", null), r = Sl(() => o || e.condensed), i = bi(!1);
    return {
      focused: i,
      handleFocus: () => {
        i.value = !0;
      },
      handleBlur: () => {
        i.value = !1;
      },
      isCondensed: r
    };
  },
  components: {
    FeatherRipple: bo
  }
}), Jx = ["aria-disabled"];
function Xx(e, o, r, i, a, u) {
  const c = sn("FeatherRipple");
  return Wt(), Bi("div", {
    class: W_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: o[0] || (o[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: o[1] || (o[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    An(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (Wt(), $o(c, { key: 0 })) : Ai("", !0)
  ], 42, Jx);
}
var Hl = /* @__PURE__ */ Co(Kx, [["render", Xx], ["__scopeId", "data-v-44d413dc"]]);
const Qx = {
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
}, eL = Vo({
  emits: ["delete"],
  props: Qx,
  setup(e, o) {
    return {
      handleDelete: () => {
        e.disabled || o.emit("delete");
      },
      icon: gs
    };
  },
  components: {
    FeatherIcon: Y
  }
}), tL = { class: "chip-delete" }, nL = ["aria-label", "aria-describedby"];
function oL(e, o, r, i, a, u) {
  const c = sn("FeatherIcon");
  return Wt(), Bi("span", tL, [
    kl("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: o[0] || (o[0] = Yx((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      ql(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, nL)
  ]);
}
var rL = /* @__PURE__ */ Co(eL, [["render", oL], ["__scopeId", "data-v-4bae6cb4"]]);
const sL = Vo({
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
}), iL = ["title"];
function aL(e, o, r, i, a, u) {
  return Wt(), Bi("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    An(e.$slots, "default", {}, void 0, !0)
  ], 8, iL);
}
var zl = /* @__PURE__ */ Co(sL, [["render", aL], ["__scopeId", "data-v-1a0445b2"]]);
const lL = {}, uL = {
  class: "chip-icon",
  role: "presentation"
};
function cL(e, o) {
  return Wt(), Bi("span", uL, [
    An(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Yl = /* @__PURE__ */ Co(lL, [["render", cL], ["__scopeId", "data-v-2230176f"]]);
const Mw = {
  delete: "Remove"
}, dL = Vo({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Mw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, o) {
    const r = Rl(q_(e, "labels"), Mw), i = Sl(() => ce("chip-text")), a = () => {
      e.disabled || o.emit("click");
    }, u = us({}, o.attrs);
    return e.disabled && delete u.onClick, U_(us({}, r), {
      chipTextId: i,
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
    Chip: Hl,
    DeleteIcon: rL,
    Label: zl,
    PreIcon: Yl
  }
}), fL = ["aria-disabled"];
function hL(e, o, r, i, a, u) {
  const c = sn("PreIcon"), f = sn("Label"), w = sn("DeleteIcon"), v = sn("Chip");
  return Wt(), $o(v, kd(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Yn(() => [
      kl("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        kl("span", kd(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (Wt(), $o(c, { key: 0 }, {
            default: Yn(() => [
              An(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Ai("", !0),
          ql(f, { id: e.chipTextId }, {
            default: Yn(() => [
              An(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, fL),
      e.canDelete ? (Wt(), $o(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: o[0] || (o[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Ai("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var pL = /* @__PURE__ */ Co(dL, [["render", hL], ["__scopeId", "data-v-48b2704a"]]);
const wL = Vo({
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
    Chip: Hl,
    Label: zl,
    PreIcon: Yl
  }
}), vL = ["aria-disabled"];
function mL(e, o, r, i, a, u) {
  const c = sn("PreIcon"), f = sn("Label"), w = sn("Chip");
  return Wt(), $o(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Yn(() => [
      kl("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (Wt(), $o(c, { key: 0 }, {
          default: Yn(() => [
            An(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Ai("", !0),
        ql(f, null, {
          default: Yn(() => [
            An(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, vL)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var _L = /* @__PURE__ */ Co(wL, [["render", mL], ["__scopeId", "data-v-3e0c4eba"]]);
const gL = Vo({
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
    const o = bi(!1), r = bi(!1), i = Sl(() => ce("chip-label-id")), a = Sl(() => o.value || r.value ? 0 : -1), u = bi(), c = () => {
      u.value.$el.focus();
    }, f = yi("register", (y) => {
    }), w = yi("blur", (y) => {
    }), v = yi("select", (y) => {
    }), _ = {
      first: o,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: r
    };
    return f(_), {
      labelId: i,
      tabindex: a,
      first: o,
      blur: w,
      click: () => {
        v(_);
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
    Chip: Hl,
    Label: zl,
    PreIcon: Yl
  }
});
function $L(e, o, r, i, a, u) {
  const c = sn("PreIcon"), f = sn("Label"), w = sn("Chip");
  return Wt(), $o(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: W_(["focus hover", { selected: e.checked }]),
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
    default: Yn(() => [
      e.hasIcon ? (Wt(), $o(c, { key: 0 }, {
        default: Yn(() => [
          An(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Ai("", !0),
      ql(f, { id: e.labelId }, {
        default: Yn(() => [
          An(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var yL = /* @__PURE__ */ Co(gL, [["render", $L], ["__scopeId", "data-v-bbcc2f70"]]);
const bL = {
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
}, Dw = Vo({
  props: bL,
  setup() {
    return { format: yi("chipListFormat", "") };
  },
  render() {
    const e = (o) => Gx(o, us(us({}, this.$props), this.$attrs), us({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(pL) : this.format === "radio" ? e(yL) : e(_L);
  }
}), VL = {
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
}, CL = Vo({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: VL,
  setup(e, o) {
    const r = e.mode === "list" ? "grid" : e.mode;
    jx("chipListFormat", r);
    const i = r === "single";
    if (r === "radio") {
      const c = q_(e, "modelValue");
      return U_(us({
        attrs: {
          role: "radiogroup"
        }
      }, F_(c, o.emit, e.label, {}, bi(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), SL = ["aria-label"];
function kL(e, o, r, i, a, u) {
  return Wt(), Bi("div", kd(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: o[0] || (o[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    An(e.$slots, "default", {}, void 0, !0)
  ], 16, SL);
}
var EL = /* @__PURE__ */ Co(CL, [["render", kL], ["__scopeId", "data-v-1e06f41d"]]);
const IL = window.Vue.defineComponent, AL = window.Vue.normalizeClass, xL = window.Vue.openBlock, LL = window.Vue.createElementBlock, TL = window.Vue.createCommentVNode, BL = /* @__PURE__ */ IL({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (xL(), LL("span", {
      key: 0,
      class: AL(["circle", [`${o.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : TL("", !0);
  }
});
const ML = /* @__PURE__ */ de(BL, [["__scopeId", "data-v-e08880d6"]]), DL = window.Vue.defineComponent, ei = window.Vue.unref, H_ = window.Vue.createTextVNode, Lc = window.Vue.normalizeClass, Tc = window.Vue.withCtx, NL = window.Vue.createVNode, OL = window.Vue.renderList, PL = window.Vue.Fragment, Ha = window.Vue.openBlock, RL = window.Vue.createElementBlock, Bc = window.Vue.createBlock, Nw = window.Vue.createCommentVNode, FL = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UL = /* @__PURE__ */ H_(" ALL "), Ow = window.Vue.ref, WL = window.Vue.watch, qL = window.Vue.computed, HL = window.Vue.reactive, zL = /* @__PURE__ */ DL({
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
    const r = e, i = Ow(!1), a = qL(() => be.exports.keys(be.exports.groupBy(r.alarms, r.property))), u = Ow(
      (w = r.preSelected) != null && w.length ? r.preSelected : ["all"]
    ), c = HL({
      alarms: r.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), o("selected-option", u.value);
    };
    return WL(r, () => {
      var v;
      u.value = (v = r.preSelected) != null && v.length ? r.preSelected : ["all"], c.alarms = r.alarms, i.value = !1;
    }), (v, _) => ei(a).length > 0 ? (Ha(), Bc(ei(EL), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Lc({ vertical: r.isVertical })
    }, {
      default: Tc(() => [
        NL(ei(Dw), {
          class: Lc({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: Tc(() => [
            UL
          ]),
          _: 1
        }, 8, ["class"]),
        (Ha(!0), RL(PL, null, OL(ei(a), ($) => (Ha(), Bc(ei(Dw), {
          class: Lc([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: Tc(() => [
            e.property == "severity" ? (Ha(), Bc(ML, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : Nw("", !0),
            H_(FL($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Nw("", !0);
  }
});
const YL = /* @__PURE__ */ de(zL, [["__scopeId", "data-v-d83b0f85"]]);
const GL = window.Vue.watch, jL = window.Vue.onBeforeUnmount, ZL = window.Vue.ref, KL = window.Vue.onMounted, JL = (e) => {
  const o = ZL(!1);
  let r = !1;
  const i = (c) => {
    e(c), r = !1;
  };
  function a(c) {
    r || (requestAnimationFrame(() => i(c)), r = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", a);
  };
  return KL(() => {
    const c = GL(o, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    jL(() => {
      c(), u();
    });
  }), o;
}, XL = window.Vue.watch, QL = window.Vue.onBeforeUnmount, eT = window.Vue.ref, tT = window.Vue.onMounted, nT = (e, o) => {
  const r = eT(!1), i = (c) => {
    c.target === window && o(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || o(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", i));
  };
  return tT(() => {
    const c = XL(r, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", i)) : u();
    }, {
      immediate: !0
    });
    QL(() => {
      c(), u();
    });
  }), r;
}, oT = window.Vue.watch, rT = window.Vue.onBeforeUnmount, sT = window.Vue.ref, z_ = (e, o) => {
  const r = sT(!1);
  let i = !1;
  const a = (w) => {
    o(w), i = !1;
  };
  function u(w) {
    i || (requestAnimationFrame(() => a(w)), i = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = oT([e, r], ([w, v], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), v && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return rT(() => {
    f(), c();
  }), r;
}, iT = window.Vue.defineComponent, Un = window.Vue.ref, Pw = window.Vue.toRef, aT = window.Vue.onMounted, lT = window.Vue.watch, Rw = window.Vue.computed, uT = window.Vue.nextTick, Fw = window.Vue.openBlock, Uw = window.Vue.createElementBlock, Ww = window.Vue.renderSlot, cT = window.Vue.normalizeClass, dT = window.Vue.normalizeStyle, fT = window.Vue.createCommentVNode;
var hT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
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
}, vT = iT({
  emits: wT,
  props: pT,
  setup(e, o) {
    const r = Un(), i = Un(), a = Pw(e, "open"), u = Pw(e, "noExpand"), c = Un("auto"), f = Un(), w = Un(e.triggerId || ce("feather-menu-trigger")), v = Un(ce("feather-menu-dropdown")), _ = Un(""), $ = Un("");
    aT(() => {
      f.value = window;
    });
    const y = Un(!1), T = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), B = () => {
      if (!i.value)
        return;
      const k = r.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", uT(() => {
        let { height: R, width: F } = i.value.getBoundingClientRect();
        const z = T(), ke = z.height, we = z.width;
        e.fill && F < k.width ? (c.value = k.width + "px", F = k.width) : c.value = F + "px";
        let Ve = 0;
        ke - k.bottom < R && k.top >= R ? (Ve = k.top - R, e.cover && (Ve += k.height)) : (Ve = k.bottom, e.cover && (Ve -= k.height));
        let xe = e.right ? k.right - F : k.left;
        !e.right && k.right >= F && we - k.left < F && (xe = k.right - F), e.right && k.right <= F && we - k.left > F && (xe = k.left), $.value = `${xe}px`, _.value = `${Ve}px`, y.value = !1;
      });
    }, D = nT(r, (k) => {
      o.emit("outside-click", k);
    }), S = JL(B), A = z_(f, B);
    lT([a, i], ([k, R]) => {
      k && R && B(), D.value = k, S.value = k, A.value = k;
    });
    const E = Rw(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = v.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), O = Rw(() => ({
      click: (k) => {
        o.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: E,
      triggerListeners: O,
      menuId: v,
      menu: i,
      menuWidth: c,
      root: r,
      calculatePosition: B,
      calculating: y
    };
  }
}), mT = ["data-ref-id"], _T = ["data-ref-id", "id"];
function gT(e, o, r, i, a, u) {
  return Fw(), Uw("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Ww(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Fw(), Uw("div", {
      key: 0,
      class: cT(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: dT({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Ww(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, _T)) : fT("", !0)
  ], 8, mT);
}
var Y_ = /* @__PURE__ */ hT(vT, [["render", gT], ["__scopeId", "data-v-f75af406"]]), $T = {
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
const yT = window.Vue.openBlock, bT = window.Vue.createElementBlock, VT = window.Vue.createElementVNode;
var CT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ST = {}, kT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ET = /* @__PURE__ */ VT("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), IT = [
  ET
];
function AT(e, o) {
  return yT(), bT("svg", kT, IT);
}
var xT = /* @__PURE__ */ CT(ST, [["render", AT]]);
const LT = window.Vue.openBlock, TT = window.Vue.createElementBlock, Gd = window.Vue.createElementVNode;
var BT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const MT = {}, DT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NT = /* @__PURE__ */ Gd("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), OT = /* @__PURE__ */ Gd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), PT = /* @__PURE__ */ Gd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), RT = [
  NT,
  OT,
  PT
];
function FT(e, o) {
  return LT(), TT("svg", DT, RT);
}
var UT = /* @__PURE__ */ BT(MT, [["render", FT]]);
const WT = window.Vue.openBlock, qT = window.Vue.createElementBlock, HT = window.Vue.createElementVNode;
var zT = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const YT = {}, GT = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jT = /* @__PURE__ */ HT("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ZT = [
  jT
];
function KT(e, o) {
  return WT(), qT("svg", GT, ZT);
}
var Gl = /* @__PURE__ */ zT(YT, [["render", KT]]);
const xi = function(e, o) {
  if (!e || !o)
    return;
  let r = e.getBoundingClientRect().height;
  const i = getComputedStyle(e);
  r += parseInt(i.getPropertyValue("margin-top"), 10), r += parseInt(i.getPropertyValue("margin-bottom"), 10), o.scrollTop = e.offsetTop - o.getBoundingClientRect().height + r;
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
const JT = window.Vue.defineComponent, XT = window.Vue.openBlock, QT = window.Vue.createElementBlock, eB = window.Vue.normalizeClass, tB = window.Vue.pushScopeId, nB = window.Vue.popScopeId, Ed = window.Vue.createElementVNode;
var oB = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const rB = {
  disabled: {
    type: Boolean,
    default: !1
  },
  checked: {
    type: Boolean,
    default: !1
  }
}, sB = {
  click: (e) => !0
}, iB = JT({
  emits: sB,
  props: rB,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), G_ = (e) => (tB("data-v-07e020f5"), e = e(), nB(), e), aB = /* @__PURE__ */ G_(() => /* @__PURE__ */ Ed("div", { class: "track" }, null, -1)), lB = /* @__PURE__ */ G_(() => /* @__PURE__ */ Ed("div", { class: "switcher" }, [
  /* @__PURE__ */ Ed("div", { class: "switch-circle" })
], -1)), uB = [
  aB,
  lB
];
function cB(e, o, r, i, a, u) {
  return XT(), QT("div", {
    class: eB(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: o[0] || (o[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, uB, 2);
}
var dB = /* @__PURE__ */ oB(iB, [["render", cB], ["__scopeId", "data-v-07e020f5"]]), fB = Object.defineProperty, hB = Object.defineProperties, pB = Object.getOwnPropertyDescriptors, qw = Object.getOwnPropertySymbols, wB = Object.prototype.hasOwnProperty, vB = Object.prototype.propertyIsEnumerable, Hw = (e, o, r) => o in e ? fB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, zw = (e, o) => {
  for (var r in o || (o = {}))
    wB.call(o, r) && Hw(e, r, o[r]);
  if (qw)
    for (var r of qw(o))
      vB.call(o, r) && Hw(e, r, o[r]);
  return e;
}, Yw = (e, o) => hB(e, pB(o));
const jd = window.Vue.defineComponent, Uo = window.Vue.h, mB = window.Vue.openBlock, _B = window.Vue.createElementBlock, gB = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var j_ = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const $B = {
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
}, yB = jd({
  inheritAttrs: !1,
  props: $B,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Uo("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const r = Uo("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = Uo("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Uo(bo);
    if (this.asLi)
      return Uo("li", Yw(zw({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, r, i, a]);
    const u = Uo("a", Yw(zw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, r, i, a]);
    return Uo("li", {}, [u]);
  }
});
var Mi = /* @__PURE__ */ j_(yB, [["__scopeId", "data-v-7c46b2b3"]]);
jd({
  components: {
    FeatherListItem: Mi
  }
});
const bB = {}, VB = { class: "feather-list" };
function CB(e, o) {
  return mB(), _B("ul", VB, [
    gB(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Zd = /* @__PURE__ */ j_(bB, [["render", CB], ["__scopeId", "data-v-941a1d50"]]);
const SB = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  keydown: (e) => !0
}, kB = {
  disabled: {
    type: Boolean,
    default: !1
  },
  modelValue: {
    type: Boolean,
    default: !1
  }
};
jd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: SB,
  props: kB,
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
      (e.keyCode === te.SPACE || e.keyCode === te.ENTER) && this.updateValue(), e.keyCode === te.SPACE && e.preventDefault(), this.$emit("keydown", e);
    }
  },
  components: { SwitchRender: dB, FeatherListItem: Mi }
});
var EB = Object.defineProperty, IB = Object.defineProperties, AB = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, xB = Object.prototype.hasOwnProperty, LB = Object.prototype.propertyIsEnumerable, jw = (e, o, r) => o in e ? EB(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, qt = (e, o) => {
  for (var r in o || (o = {}))
    xB.call(o, r) && jw(e, r, o[r]);
  if (Gw)
    for (var r of Gw(o))
      LB.call(o, r) && jw(e, r, o[r]);
  return e;
}, TB = (e, o) => IB(e, AB(o));
const ks = window.Vue.defineComponent, he = window.Vue.openBlock, Ye = window.Vue.createElementBlock, Et = window.Vue.createElementVNode, _n = window.Vue.toDisplayString, rn = window.Vue.createCommentVNode, qe = window.Vue.resolveComponent, on = window.Vue.createBlock, lt = window.Vue.withCtx, cs = window.Vue.Fragment, Vi = window.Vue.renderList, It = window.Vue.createVNode, Kd = window.Vue.withModifiers, rr = window.Vue.normalizeClass, Id = window.Vue.renderSlot, Z_ = window.Vue.createTextVNode, BB = window.Vue.pushScopeId, MB = window.Vue.popScopeId, K_ = window.Vue.reactive, J_ = window.Vue.nextTick, Mc = window.Vue.markRaw, Dc = window.Vue.toRef, Zw = window.Vue.computed, DB = window.Vue.toRefs, Yr = window.Vue.ref, Nc = window.Vue.mergeProps, Kw = window.Vue.toHandlers, za = window.Vue.withDirectives, Ya = window.Vue.vShow;
var jl = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Jd = {
  query: {
    type: String
  }
}, cr = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const NB = ks({
  mixins: [],
  props: qt(qt({
    text: {
      type: String,
      required: !0
    }
  }, jl), Jd),
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
}), OB = {
  key: 0,
  class: "highlight"
}, PB = { key: 1 };
function RB(e, o, r, i, a, u) {
  return he(), Ye("span", null, [
    Et("span", null, _n(e.beginning), 1),
    e.highlighted ? (he(), Ye("span", OB, _n(e.highlighted), 1)) : rn("", !0),
    e.end ? (he(), Ye("span", PB, _n(e.end), 1)) : rn("", !0)
  ]);
}
var X_ = /* @__PURE__ */ cr(NB, [["render", RB], ["__scopeId", "data-v-8abe2492"]]);
const FB = ks({
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
  }, jl), Jd),
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
      return o && o.length ? o.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    FeatherList: Zd,
    FeatherListItem: Mi,
    Highlighter: X_
  }
}), UB = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function WB(e, o, r, i, a, u) {
  const c = qe("Highlighter"), f = qe("FeatherListItem"), w = qe("FeatherList");
  return he(), on(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: lt(() => [
      (he(!0), Ye(cs, null, Vi(e.items, (v, _) => (he(), Ye(cs, {
        key: v[e.textProp]
      }, [
        It(f, {
          "as-li": "",
          id: e.getId(_),
          tabindex: "-1",
          role: "option",
          class: "result-item hover",
          "aria-selected": e.isSelected(v),
          highlighted: e.isActive(_),
          selected: e.isSelected(v),
          onClick: Kd(($) => e.select(v), ["stop"])
        }, {
          default: lt(() => [
            It(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (he(), Ye("span", UB, _n(e.newLabel), 1)) : rn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (he(), Ye("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : rn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var qB = /* @__PURE__ */ cr(FB, [["render", WB], ["__scopeId", "data-v-f623434a"]]);
const HB = ks({
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
  }, jl), Jd),
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
      return this.value && this.value.length ? o.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    Highlighter: X_
  }
}), zB = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, YB = ["aria-multiselectable"], GB = { role: "row" }, jB = ["aria-selected", "onClick"], ZB = ["id", "aria-selected"], KB = { key: 1 };
function JB(e, o, r, i, a, u) {
  const c = qe("Highlighter");
  return he(), Ye("div", zB, [
    Et("table", {
      class: rr(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      Et("thead", null, [
        Et("tr", GB, [
          (he(!0), Ye(cs, null, Vi(e.config, (f) => (he(), Ye("th", {
            key: f.title
          }, _n(f.title), 1))), 128))
        ])
      ]),
      Et("tbody", null, [
        (he(!0), Ye(cs, null, Vi(e.items, (f, w) => (he(), Ye("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: rr({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: Kd((v) => e.select(f), ["stop"])
        }, [
          (he(!0), Ye(cs, null, Vi(e.config, (v, _) => (he(), Ye("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: rr({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (he(), on(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (he(), Ye("p", KB, _n(f[v.prop]), 1))
          ], 10, ZB))), 128))
        ], 10, jB))), 128))
      ])
    ], 10, YB)
  ], 512);
}
var XB = /* @__PURE__ */ cr(HB, [["render", JB], ["__scopeId", "data-v-58c88fd1"]]);
const QB = ks({
  components: {
    FeatherList: Zd,
    FeatherListItem: Mi
  }
});
function e4(e, o, r, i, a, u) {
  const c = qe("FeatherListItem"), f = qe("FeatherList");
  return he(), on(f, { class: "result-list" }, {
    default: lt(() => [
      It(c, { "as-li": "" }, {
        default: lt(() => [
          Id(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var t4 = /* @__PURE__ */ cr(QB, [["render", e4], ["__scopeId", "data-v-06b752c6"]]);
const n4 = ks({
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
    FeatherIcon: Y,
    Cancel: gs,
    BaseChip: Hl,
    BaseChipLabel: zl,
    BaseChipPreIcon: Yl
  }
});
function o4(e, o, r, i, a, u) {
  const c = qe("FeatherIcon"), f = qe("BaseChipPreIcon"), w = qe("BaseChipLabel"), v = qe("Cancel"), _ = qe("BaseChip");
  return he(), on(_, {
    class: rr(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: lt(() => [
      e.showPreIcon ? (he(), on(f, { key: 0 }, {
        default: lt(() => {
          var $, y;
          return [
            It(c, {
              icon: ($ = e.pre) == null ? void 0 : $.icon,
              title: (y = e.pre) == null ? void 0 : y.title
            }, null, 8, ["icon", "title"])
          ];
        }),
        _: 1
      })) : rn("", !0),
      It(w, null, {
        default: lt(() => [
          Z_(_n(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? rn("", !0) : (he(), Ye("span", {
        key: 1,
        class: "chip-delete",
        onClick: o[0] || (o[0] = Kd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
      }, [
        It(c, {
          class: "delete-icon",
          flex: "",
          title: e.removeLabel
        }, {
          default: lt(() => [
            It(v)
          ]),
          _: 1
        }, 8, ["title"])
      ]))
    ]),
    _: 1
  }, 8, ["class", "disabled"]);
}
var r4 = /* @__PURE__ */ cr(n4, [["render", o4], ["__scopeId", "data-v-e0fc6ac0"]]);
const s4 = {}, i4 = (e) => (BB("data-v-aa720e06"), e = e(), MB(), e), a4 = { class: "spinner-container" }, l4 = /* @__PURE__ */ i4(() => /* @__PURE__ */ Et("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ Et("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), u4 = [
  l4
];
function c4(e, o) {
  return he(), Ye("div", a4, u4);
}
var d4 = /* @__PURE__ */ cr(s4, [["render", c4], ["__scopeId", "data-v-aa720e06"]]), Zl = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Zl || {});
const Q_ = {
  noResults: "No results found",
  minChar: "Enter ${min} characters to search",
  clear: "Clear value",
  selectionLimit: "Selection limit reached",
  new: "New",
  remove: "Remove"
}, f4 = qt(qt(qt({
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
    validator: (e) => !!Zl[e]
  },
  labels: {
    type: Object,
    default: () => Q_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, jl), Cs), Ul), h4 = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, p4 = (e, o, r, i) => {
  if (r.toLowerCase() === Zl.multi) {
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
        i("update:modelValue", w), c(w);
      },
      removeItem(f) {
        const w = u.value.findIndex((v) => {
          if (f[e.textProp.value] === v[e.textProp.value])
            return !0;
        });
        debugger;
        if (w > -1) {
          const v = u.value.slice(0);
          v.splice(w, 1), i("update:modelValue", v), c(v), e.input.value.focus();
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
      o.active.row = -1, e.forceCloseResults.value = !0, u && u._new && e.allowNew ? i("new", u._new) : i("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (o.active.row > -1) {
        const u = e.internalResults.value[o.active.row];
        u && u._new && e.allowNew ? i("new", u._new) : i("update:modelValue", u);
      }
    }
  };
}, w4 = () => {
  const e = K_({
    row: -1
  }), o = (u) => {
    J_(() => {
      e.row = u;
    });
  }, r = (u, c) => {
    if (u.keyCode === te.DOWN) {
      if (u.preventDefault(), e.row === -1)
        i(), o(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        i(), o(f + 1);
      }
      return !0;
    }
    if (u.keyCode === te.UP) {
      if (u.preventDefault(), e.row === 0)
        i();
      else if (e.row > 0) {
        const f = e.row;
        i(), o(f - 1);
      }
      return !0;
    }
    return !1;
  }, i = () => {
    e.row = -1;
  };
  return { reset: i, handleKeyPress: r, active: e, first: () => {
    e.row = 0;
  } };
}, v4 = (e) => {
  const o = K_({
    row: -1,
    col: -1
  }), r = (c, f) => {
    J_(() => {
      o.col = f, o.row = c;
    });
  }, i = (c, f) => {
    if (c.keyCode === te.DOWN) {
      if (c.preventDefault(), o.row === -1)
        a(), r(0, 0);
      else if (o.row + 1 <= f.length - 1) {
        const w = o.row, v = o.col;
        a(), r(w + 1, v);
      }
      return !0;
    }
    if (c.keyCode === te.UP) {
      if (c.preventDefault(), o.row === 0)
        a();
      else if (o.row > 0) {
        const w = o.row, v = o.col;
        a(), r(w - 1, v);
      }
      return !0;
    }
    if (c.keyCode === te.RIGHT && o.row !== -1) {
      if (c.preventDefault(), o.col + 1 <= e.length - 1) {
        const w = o.col, v = o.row;
        a(), r(v, w + 1);
      } else if (o.col <= e.length - 1 && o.row + 1 <= f.length - 1) {
        const w = o.row;
        a(), r(w + 1, 0);
      }
      return !0;
    }
    if (c.keyCode === te.LEFT && o.row !== -1) {
      if (c.preventDefault(), o.col === 0 && o.row === 0)
        return !0;
      if (o.col === 0 && o.row > 0) {
        const w = o.row;
        a(), r(w - 1, e.length - 1);
      } else if (o.col > 0) {
        const w = o.col, v = o.row;
        a(), r(v, w - 1);
      }
      return !0;
    }
    if (c.keyCode === te.END && o.row !== -1) {
      c.preventDefault();
      const w = o.row;
      return a(), r(c.ctrlKey ? f.length - 1 : w, e.length - 1), !0;
    }
    if (c.keyCode === te.HOME && o.row !== -1) {
      c.preventDefault();
      const w = o.row;
      return a(), r(c.ctrlKey ? 0 : w, 0), !0;
    }
    return !1;
  }, a = () => {
    o.row = -1, o.col = -1;
  };
  return { reset: a, handleKeyPress: i, active: o, first: () => {
    a(), r(0, 0);
  } };
}, m4 = ks({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: h4,
  props: f4,
  data() {
    return {
      typingTimeout: -1,
      activeChipIndex: -1,
      activeChipId: ""
    };
  },
  computed: {
    singleSelect() {
      return this.type !== Zl.multi;
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
      return Mc(xT);
    },
    minCharIcon() {
      return Mc(UT);
    },
    dropdownIcon() {
      return Mc(Gl);
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
      return this.activeChipId = ce("active-chip"), this.activeChipId;
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
      r !== void 0 && (ar(this.typingTimeout), this.typingTimeout = ir(() => {
        this.query = r, this.emitSearch();
      }, 250));
    },
    handleInputKeyDown(e) {
      const o = () => {
        this.activeChipIndex = -1;
      }, r = () => {
        this.resetResultIndex();
      };
      if (e.keyCode === te.ENTER && e.preventDefault(), this.internalResults && this.internalResults.length && this.handleResultNavigation(e, this.internalResults)) {
        o(), this.forceCloseResults = !1;
        return;
      }
      if (e.keyCode === te.ENTER && this.activeChipIndex > -1) {
        e.preventDefault();
        const i = this.modelValue;
        this.removeFromValue(i[this.activeChipIndex]), o();
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
        this.forceCloseResults = !0, r(), o();
        return;
      }
      if (!this.query && this.modelValue && this.modelValue.length) {
        const i = this.modelValue;
        e.keyCode === te.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (r(), this.activeChipIndex = i.length - 1) : this.activeChipIndex - 1 >= 0 && (r(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === te.RIGHT && (e.preventDefault(), this.activeChipIndex === i.length - 1 ? (r(), this.activeChipIndex = -1) : this.activeChipIndex < i.length - 1 && this.activeChipIndex > -1 && (r(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === te.DELETE || e.keyCode === te.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(i[this.activeChipIndex]), r(), o());
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
    const r = Rl(Dc(e, "labels"), Q_);
    Ss(e), Wl(e);
    let i;
    e.gridConfig ? i = v4(e.gridConfig) : i = w4();
    const a = Dc(e, "id"), u = Zw(() => a.value ? a.value : ce("feather-autocomplete-input")), { validate: c } = bs(u, Dc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = DB(e), T = Yr(!1), B = Yr(!1), N = Yr(!1), D = Yr(""), S = Yr([]), A = Yr(), E = Zw(() => A.value), O = () => {
      T.value && !B.value && (D.value && D.value.length >= y.value && o.emit("search", D.value), y.value <= 0 && o.emit("search", D.value || ""), S.value = [], i.reset());
    }, k = p4({
      selectionLimit: f,
      selectionLimitReached: B,
      modelValue: w,
      textProp: v,
      allowNew: _,
      forceCloseResults: N,
      query: D,
      internalResults: S,
      input: E,
      emitSearch: O
    }, i, $.value, o.emit);
    return TB(qt(qt({}, r), Vs(o.attrs)), {
      query: D,
      internalResults: S,
      selectionLimitReached: B,
      forceCloseResults: N,
      hasFocus: T,
      strategy: k,
      emitSearch: O,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
      inputId: u,
      input: A,
      incomingId: a,
      inputRef: E,
      validate: c
    });
  },
  mounted() {
    this.adjustTextArea();
  },
  components: {
    InputWrapper: Fl,
    InputSubText: ys,
    AutocompleteResults: qB,
    AutocompleteResultsGrid: XB,
    Chip: r4,
    MenuMessage: t4,
    FeatherIcon: Y,
    FeatherMenu: Y_,
    Spinner: d4
  }
}), _4 = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, g4 = ["id"], $4 = { "data-ref-id": "feather-autocomplete-no-results" }, y4 = { "data-ref-id": "feather-autocomplete-selection-limit" }, b4 = { "data-ref-id": "feather-autocomplete-min-char" };
function V4(e, o, r, i, a, u) {
  const c = qe("FeatherIcon"), f = qe("Chip"), w = qe("InputWrapper"), v = qe("AutocompleteResults"), _ = qe("AutocompleteResultsGrid"), $ = qe("MenuMessage"), y = qe("Spinner"), T = qe("FeatherMenu"), B = qe("InputSubText");
  return he(), Ye("div", Nc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    It(T, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: rr(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: lt(({ attrs: N, on: D }) => [
        It(w, Nc(qt(qt({}, N), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Kw(D), { ref: "scroll" }), {
          pre: lt(() => [
            Id(e.$slots, "pre", {}, () => [
              It(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: lt(() => [
            It(c, {
              icon: e.dropdownIcon,
              class: rr(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: lt(() => [
            Et("div", {
              class: rr(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              Et("div", _4, null, 512),
              Et("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, _n(e.selectedDescribedByText), 9, g4),
              (he(!0), Ye(cs, null, Vi(e.modelValueList, (S, A) => za((he(), on(f, {
                key: S[e.textProp],
                role: "button",
                id: A === e.activeChipIndex ? e.activeChipId : null,
                focused: A === e.activeChipIndex,
                disabled: e.disabled,
                text: S[e.textProp],
                "remove-label": e.removeLabel,
                pre: e.getPre(S),
                onDelete: (E) => e.removeFromValue(S)
              }, null, 8, ["id", "focused", "disabled", "text", "remove-label", "pre", "onDelete"])), [
                [Ya, !e.singleSelect]
              ])), 128)),
              Et("textarea", Nc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Kw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: lt(() => [
        e.gridConfig ? rn("", !0) : za((he(), on(v, {
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
          [Ya, e.showResults]
        ]),
        e.gridConfig ? za((he(), on(_, {
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
          [Ya, e.showResults]
        ]) : rn("", !0),
        e.showNoResults ? (he(), on($, { key: 2 }, {
          default: lt(() => [
            Et("span", $4, _n(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : rn("", !0),
        e.showSelectionLimit ? (he(), on($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: lt(() => [
            It(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Et("span", y4, _n(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : rn("", !0),
        e.minChar ? za((he(), on($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: lt(() => [
            It(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Et("span", b4, [
              Id(e.$slots, "min-char", {}, () => [
                Z_(_n(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Ya, e.showMinCharWarning]
        ]) : rn("", !0),
        e.showLoading ? (he(), on(y, { key: 5 })) : rn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    It(B, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var C4 = /* @__PURE__ */ cr(m4, [["render", V4], ["__scopeId", "data-v-43a7e951"]]);
var S4 = Object.defineProperty, k4 = Object.defineProperties, E4 = Object.getOwnPropertyDescriptors, Jw = Object.getOwnPropertySymbols, I4 = Object.prototype.hasOwnProperty, A4 = Object.prototype.propertyIsEnumerable, Xw = (e, o, r) => o in e ? S4(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, pl = (e, o) => {
  for (var r in o || (o = {}))
    I4.call(o, r) && Xw(e, r, o[r]);
  if (Jw)
    for (var r of Jw(o))
      A4.call(o, r) && Xw(e, r, o[r]);
  return e;
}, eg = (e, o) => k4(e, E4(o));
const tg = window.Vue.defineComponent, x4 = window.Vue.ref, Ci = window.Vue.computed, L4 = window.Vue.reactive, Qw = window.Vue.watch, Oc = window.Vue.inject, ng = window.Vue.resolveComponent, Ad = window.Vue.openBlock, og = window.Vue.createElementBlock, yo = window.Vue.createElementVNode, T4 = window.Vue.createBlock, B4 = window.Vue.createCommentVNode, rg = window.Vue.renderSlot, M4 = window.Vue.pushScopeId, D4 = window.Vue.popScopeId, Pc = window.Vue.toRef, ev = window.Vue.mergeProps, N4 = window.Vue.toDisplayString, O4 = window.Vue.createVNode;
var sg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const P4 = {
  value: {
    type: [String, Number, Boolean, Array, Object, Date, Function],
    required: !0
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, R4 = tg({
  props: P4,
  setup(e) {
    const o = x4(), r = () => {
      o.value.focus();
    }, i = Ci(() => ce("feather-radio-button")), a = L4({
      first: !1,
      focus: r,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), u = Ci(() => ce("radio-label-id")), c = Ci(() => a.first || a.checked ? 0 : -1);
    Qw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Qw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = Oc("register", ($) => {
    }), w = Oc("blur", ($) => {
    }), v = Oc("select", ($) => {
    });
    return f(a), {
      labelId: u,
      tabindex: c,
      vm: a,
      blur: w,
      click: () => {
        v(a);
      },
      input: o,
      id: i
    };
  },
  components: {
    FeatherRipple: bo
  }
}), F4 = (e) => (M4("data-v-24790cf0"), e = e(), D4(), e), U4 = { class: "layout-container" }, W4 = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], q4 = { class: "radio hover focus" }, H4 = /* @__PURE__ */ F4(() => /* @__PURE__ */ yo("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ yo("svg", { class: "dot" }, [
    /* @__PURE__ */ yo("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), z4 = ["id"];
function Y4(e, o, r, i, a, u) {
  const c = ng("feather-ripple");
  return Ad(), og("div", U4, [
    yo("div", {
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
      yo("div", q4, [
        H4,
        e.vm.disabled ? B4("", !0) : (Ad(), T4(c, {
          key: 0,
          center: ""
        }))
      ]),
      yo("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        rg(e.$slots, "default", {}, void 0, !0)
      ], 8, z4)
    ], 40, W4)
  ]);
}
var xd = /* @__PURE__ */ sg(R4, [["render", Y4], ["__scopeId", "data-v-24790cf0"]]);
const G4 = eg(pl({}, Cs), {
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
}), j4 = {
  "update:modelValue": (e) => !0,
  blur: (e) => !0
}, Z4 = tg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: G4,
  emits: j4,
  setup(e, o) {
    Ss(e);
    const r = Pc(e, "error"), i = Pc(e, "modelValue"), a = Ci(() => ce("feather-input-description")), u = Ci(() => {
      const c = eg(pl({}, o.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!r.value), c;
    });
    return pl(pl({
      descriptionId: a,
      attrs: u
    }, F_(i, o.emit, e.label, e.schema, Pc(e, "error"))), Vs(o.attrs));
  },
  components: {
    InputSubText: ys
  }
}), K4 = ["for"], J4 = ["id"];
function X4(e, o, r, i, a, u) {
  const c = ng("InputSubText");
  return Ad(), og("div", ev(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    yo("label", {
      for: e.groupId,
      class: "group-label"
    }, N4(e.label), 9, K4),
    yo("div", ev(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: o[0] || (o[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      rg(e.$slots, "default", {}, void 0, !0)
    ], 16, J4),
    O4(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var ig = /* @__PURE__ */ sg(Z4, [["render", X4], ["__scopeId", "data-v-6775aeb9"]]);
const Q4 = window.Vue.defineComponent, eM = window.Vue.renderList, tM = window.Vue.Fragment, tv = window.Vue.openBlock, nM = window.Vue.createElementBlock, oM = window.Vue.toDisplayString, rM = window.Vue.createTextVNode, nv = window.Vue.unref, ov = window.Vue.withCtx, sM = window.Vue.createVNode, iM = window.Vue.createBlock, aM = window.Vue.watch, lM = window.Vue.ref, uM = /* @__PURE__ */ Q4({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: o }) {
    const r = e, i = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], a = lM(r.preSelected || i[0].id);
    return aM(r, () => {
      r.preSelected && (a.value = r.preSelected);
    }), (u, c) => (tv(), iM(nv(ig), {
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
      default: ov(() => [
        (tv(), nM(tM, null, eM(i, (f) => sM(nv(xd), {
          value: f.id,
          key: f.id
        }, {
          default: ov(() => [
            rM(oM(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const cM = /* @__PURE__ */ de(uM, [["__scopeId", "data-v-0363302c"]]);
var dM = Object.defineProperty, fM = Object.defineProperties, hM = Object.getOwnPropertyDescriptors, rv = Object.getOwnPropertySymbols, pM = Object.prototype.hasOwnProperty, wM = Object.prototype.propertyIsEnumerable, sv = (e, o, r) => o in e ? dM(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ti = (e, o) => {
  for (var r in o || (o = {}))
    pM.call(o, r) && sv(e, r, o[r]);
  if (rv)
    for (var r of rv(o))
      wM.call(o, r) && sv(e, r, o[r]);
  return e;
}, iv = (e, o) => fM(e, hM(o));
const vM = window.Vue.defineComponent, mM = window.Vue.inject, ni = window.Vue.h;
var _M = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const gM = {
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
}, $M = vM({
  inheritAttrs: !1,
  props: gM,
  setup() {
    return { hasTooltip: mM("feather-has-tooltip", !1) };
  },
  render() {
    const e = () => {
      let f = "";
      this.primary && (f = "btn-primary"), this.secondary && (f = "btn-secondary"), (this.text || this.icon) && (f = "btn-text");
      const w = ["btn", "hover", "focus", f];
      return this.icon && (w.push("btn-icon"), w.push("btn-icon-table")), this.onColor && w.push("on-color"), w;
    }, o = this.asAnchor ? "a" : "button", r = {}, i = ti({}, this.$attrs);
    r.attrs = i || {}, this.asAnchor ? r.attrs.role = "button" : r.attrs.type = r.attrs.type || "button", this.disabled && (r.attrs["aria-disabled"] = "true"), r.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    r.class = [this.$attrs.class].concat(a), this.$slots.icon && r.class.push("has-icon");
    let u = ni(bo);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return r.attrs["aria-label"] = f, this.hasTooltip || (r.attrs.title = f), ni(o, iv(ti(ti({}, r.attrs), r.on), { class: r.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : ni(bo, { center: !0 })
      ]);
    }
    const c = ni("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return ni(o, iv(ti(ti({}, r.attrs), r.on), { class: r.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var le = /* @__PURE__ */ _M($M, [["__scopeId", "data-v-702d1074"]]);
const yM = window.Vue.openBlock, bM = window.Vue.createElementBlock, VM = window.Vue.createElementVNode;
var CM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const SM = {}, kM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EM = /* @__PURE__ */ VM("path", { d: "M14,21H10a1,1,0,0,1-1-1V14.34L2.21,5.61A1,1,0,0,1,3,4H21a1,1,0,0,1,.79,1.61L15,14.34V20A1,1,0,0,1,14,21Zm-3-2h2V13.66L19,6H5l6,7.66Z" }, null, -1), IM = [
  EM
];
function AM(e, o) {
  return yM(), bM("svg", kM, IM);
}
var xM = /* @__PURE__ */ CM(SM, [["render", AM]]);
const LM = window.Vue.openBlock, TM = window.Vue.createElementBlock, BM = window.Vue.createElementVNode;
var MM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const DM = {}, NM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, OM = /* @__PURE__ */ BM("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), PM = [
  OM
];
function RM(e, o) {
  return LM(), TM("svg", NM, PM);
}
var FM = /* @__PURE__ */ MM(DM, [["render", RM]]);
const UM = window.Vue.openBlock, WM = window.Vue.createElementBlock, qM = window.Vue.createElementVNode;
var HM = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const zM = {}, YM = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GM = /* @__PURE__ */ qM("path", { d: "M17.65,6.35A8,8,0,0,0,11.16,4,8,8,0,0,0,12,20a8,8,0,0,0,7.53-5.32.5.5,0,0,0-.47-.68H18a.5.5,0,0,0-.46.31A6,6,0,1,1,12,6a5.92,5.92,0,0,1,4.23,1.78l-2.37,2.37a.5.5,0,0,0,.35.85H20V5.21a.5.5,0,0,0-.85-.36Z" }, null, -1), jM = [
  GM
];
function ZM(e, o) {
  return UM(), WM("svg", YM, jM);
}
var ag = /* @__PURE__ */ HM(zM, [["render", ZM]]);
const KM = window.Vue.defineComponent, Vn = window.Vue.unref, Wo = window.Vue.createVNode, av = window.Vue.toDisplayString, Hn = window.Vue.createElementVNode, lg = window.Vue.createTextVNode, lv = window.Vue.openBlock, uv = window.Vue.createElementBlock, JM = window.Vue.createCommentVNode, XM = window.Vue.withCtx, QM = window.Vue.vShow, eD = window.Vue.normalizeClass, tD = window.Vue.withDirectives, nD = window.Vue.Fragment, oD = window.Vue.pushScopeId, rD = window.Vue.popScopeId, ug = (e) => (oD("data-v-b1dc2670"), e = e(), rD(), e), sD = /* @__PURE__ */ lg(" Filters "), iD = { class: "count" }, aD = { class: "results" }, lD = { class: "total" }, uD = /* @__PURE__ */ lg(" Reset "), cD = /* @__PURE__ */ ug(() => /* @__PURE__ */ Hn("div", { class: "title" }, "By Severities:", -1)), dD = /* @__PURE__ */ ug(() => /* @__PURE__ */ Hn("div", { class: "title" }, "By Start Date:", -1)), qo = window.Vue.ref, fD = window.Vue.reactive, hD = window.Vue.markRaw, cv = window.Vue.watch, pD = /* @__PURE__ */ KM({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: o }) {
    const r = e, i = hD({
      FilterAlt: xM,
      ExpandLess: FM,
      ExpandMore: Gl,
      Refresh: ag
    }), a = gn(), u = qo(r.isOpen), c = qo(["all"]), f = qo(1), w = qo(r.list), v = qo(!1), _ = qo(0), $ = qo(null), y = fD({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), T = () => {
      var R, F;
      r.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((R = a.filters) == null ? void 0 : R.severities) && !((F = a.filters) != null && F.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, E());
    }, B = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    cv(
      () => a.nodes,
      () => {
        B();
      }
    ), cv(r, () => {
      w.value = r.list, T();
    });
    const N = (R) => {
      c.value = R, E();
    }, D = (R) => {
      f.value = R, E();
    }, S = (R) => {
      if (!R)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((F) => F.label.toLowerCase().indexOf(R) > -1).map((F) => ({
        _text: F.label,
        id: F.id
      })), v.value = !1;
    }, A = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, o("filtered-list", r.list), r.isOpen || (u.value = !1), r.saveFilters && (a.filters = null), w.value = r.list;
    }, E = () => {
      _.value = 0;
      let R = r.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, r.isSituation ? R = R.map((F) => {
        if (F.relatedAlarms.filter(
          (we) => {
            var Ve;
            return we.nodeLabel === ((Ve = y.nodeSelectedValue) == null ? void 0 : Ve._text);
          }
        ).length > 0)
          return F;
      }).filter((F) => F) : R = R.filter(
        (F) => {
          var z;
          return F.nodeLabel === ((z = y.nodeSelectedValue) == null ? void 0 : z._text);
        }
      )), c.value.includes("all") || (_.value++, R = R.filter(
        (F) => c.value.includes(F.severity)
      )), f.value !== 1 && (_.value++, R = J2(
        f.value,
        R
      )), w.value = R, r.saveFilters && O(), o("filtered-list", R);
    }, O = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, k = () => {
      u.value = !u.value;
    };
    return (R, F) => (lv(), uv(nD, null, [
      r.isOpen ? JM("", !0) : (lv(), uv("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        Hn("div", null, [
          Wo(Vn(Y), {
            icon: Vn(i).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          sD,
          Hn("span", iD, av(_.value), 1)
        ]),
        Wo(Vn(Y), {
          icon: u.value ? Vn(i).ExpandLess : Vn(i).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      tD(Hn("div", {
        class: eD(["filters", { collapsed: !r.isOpen }])
      }, [
        Hn("div", aD, [
          Hn("div", lD, "Results: " + av(Vn(w).length), 1),
          Wo(Vn(le), {
            class: "btn-reset",
            onClick: A
          }, {
            default: XM(() => [
              Wo(Vn(Y), {
                icon: Vn(i).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              uD
            ]),
            _: 1
          })
        ]),
        Hn("div", null, [
          Wo(Vn(C4), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              F[0] || (F[0] = (z) => y.nodeSelectedValue = z),
              E
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          cD,
          Wo(YL, {
            alarms: r.list,
            onSelectedOption: N,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          Hn("div", null, [
            dD,
            Wo(cM, {
              onFilterDateSelected: D,
              "pre-selected": f.value
            }, null, 8, ["pre-selected"])
          ])
        ])
      ], 2), [
        [QM, u.value]
      ])
    ], 64));
  }
});
const Es = /* @__PURE__ */ de(pD, [["__scopeId", "data-v-b1dc2670"]]), wD = window.Vue.openBlock, vD = window.Vue.createElementBlock, mD = window.Vue.createElementVNode;
var _D = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const gD = {}, $D = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, yD = /* @__PURE__ */ mD("path", { d: "M18,13H13v5a1,1,0,0,1-1,1h0a1,1,0,0,1-1-1V13H6a1,1,0,0,1-1-1H5a1,1,0,0,1,1-1h5V6a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1v5h5a1,1,0,0,1,1,1h0A1,1,0,0,1,18,13Z" }, null, -1), bD = [
  yD
];
function VD(e, o) {
  return wD(), vD("svg", $D, bD);
}
var Kl = /* @__PURE__ */ _D(gD, [["render", VD]]);
const CD = window.Vue.openBlock, SD = window.Vue.createElementBlock, cg = window.Vue.createElementVNode;
var kD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ED = {}, ID = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, AD = /* @__PURE__ */ cg("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), xD = /* @__PURE__ */ cg("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), LD = [
  AD,
  xD
];
function TD(e, o) {
  return CD(), SD("svg", ID, LD);
}
var BD = /* @__PURE__ */ kD(ED, [["render", TD]]);
const MD = window.Vue.openBlock, DD = window.Vue.createElementBlock, ND = window.Vue.createElementVNode;
var OD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const PD = {}, RD = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, FD = /* @__PURE__ */ ND("path", { d: "M19.45,13a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.48.48,0,0,0,.12-.64l-2-3.46A.5.5,0,0,0,19.24,5a.47.47,0,0,0-.17,0l-2.5,1a7.31,7.31,0,0,0-1.69-1L14.5,2.42A.49.49,0,0,0,14,2H10a.49.49,0,0,0-.49.42L9.13,5.07a7.53,7.53,0,0,0-1.7,1l-2.49-1L4.76,5a.5.5,0,0,0-.44.25l-2,3.46a.49.49,0,0,0,.12.64L4.55,11a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L2.44,14.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.45.25.47.47,0,0,0,.17,0l2.49-1a7.17,7.17,0,0,0,1.7,1l.38,2.65A.49.49,0,0,0,10,22h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.5,1a.57.57,0,0,0,.18,0,.5.5,0,0,0,.43-.25l2-3.46a.48.48,0,0,0-.12-.64Zm-2-1.71a5.34,5.34,0,0,1,.05.73c0,.21,0,.43-.05.73l-.15,1.13.9.7,1.08.84-.7,1.21-1.28-.51-1-.42-.9.68a5.86,5.86,0,0,1-1.25.73l-1.07.43-.16,1.13L12.7,20H11.3l-.19-1.35L11,17.52l-1.06-.43a6,6,0,0,1-1.24-.71l-.91-.7-1.06.43-1.27.51-.7-1.21,1.08-.84.89-.7-.14-1.13c0-.31,0-.54,0-.74s0-.43,0-.73l.14-1.13-.89-.7L4.71,8.6l.7-1.21,1.27.51,1,.42.9-.68a6.16,6.16,0,0,1,1.26-.73l1.06-.43.16-1.13L11.3,4h1.39l.19,1.35L13,6.48l1.07.43a5.67,5.67,0,0,1,1.23.71l.91.7,1.06-.43,1.28-.51.7,1.21-1.07.85-.9.7Zm-5.4,3.57A2.88,2.88,0,1,1,15,12,2.9,2.9,0,0,1,12.07,14.84Z" }, null, -1), UD = [
  FD
];
function WD(e, o) {
  return MD(), DD("svg", RD, UD);
}
var qD = /* @__PURE__ */ OD(PD, [["render", WD]]);
const So = () => window.VRouter || a1;
const HD = window.Vue.openBlock, zD = window.Vue.createElementBlock, YD = window.Vue.pushScopeId, GD = window.Vue.popScopeId, dv = window.Vue.createElementVNode;
var jD = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const ZD = {}, KD = (e) => (YD("data-v-2263be39"), e = e(), GD(), e), JD = { class: "spinner-container" }, XD = /* @__PURE__ */ KD(() => /* @__PURE__ */ dv("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ dv("circle", {
    class: "path",
    fill: "none",
    "stroke-width": "6",
    "stroke-linecap": "round",
    cx: "33",
    cy: "33",
    r: "30"
  })
], -1)), QD = [
  XD
];
function eN(e, o) {
  return HD(), zD("div", JD, QD);
}
var ds = /* @__PURE__ */ jD(ZD, [["render", eN], ["__scopeId", "data-v-2263be39"]]);
const tN = window.Vue.defineComponent, Rc = window.Vue.unref, nN = window.Vue.createVNode, oN = window.Vue.createElementVNode, rN = window.Vue.withCtx, sN = window.Vue.openBlock, iN = window.Vue.createBlock, aN = window.Vue.pushScopeId, lN = window.Vue.popScopeId, uN = (e) => (aN("data-v-fba500de"), e = e(), lN(), e), cN = /* @__PURE__ */ uN(() => /* @__PURE__ */ oN("span", null, "New Situation", -1)), dN = window.Vue.markRaw, fN = /* @__PURE__ */ tN({
  __name: "NewSituationBtn",
  setup(e) {
    const o = So(), r = dN({
      Add: Kl
    }), i = () => {
      o.push({
        name: "addSituation"
      });
    };
    return (a, u) => (sN(), iN(Rc(le), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: rN(() => [
        nN(Rc(Y), {
          icon: Rc(r).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        cN
      ]),
      _: 1
    }));
  }
});
const dg = /* @__PURE__ */ de(fN, [["__scopeId", "data-v-fba500de"]]), hN = "/whoami", pN = async () => {
  try {
    const e = await ot.get(hN);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, wN = window.Pinia.defineStore, vN = {
  alpha: 145,
  beta: 0.55,
  epsilon: 150,
  hellingerW: 4851.28,
  hellingerBias: -1986
}, lr = wN("userStore", {
  state: () => ({
    isAdmin: !1,
    userId: null,
    engineInfo: null,
    llmConfig: null,
    llmUsage: null
  }),
  actions: {
    async getUserRole() {
      const e = await pN();
      return e && (this.isAdmin = e.roles.includes("ROLE_ADMIN"), this.userId = e.id), e;
    },
    async getEngineInfo() {
      const e = await eI();
      e && (this.engineInfo = e);
    },
    async setEngineInfo(e, o, r) {
      const i = {
        ...vN,
        ...r,
        distanceMeasureName: o ? tt.HELLINGER_OPTION : tt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return o || (i.hellingerW = null, i.hellingerBias = null), await tI(i) ? (this.engineInfo = i, !0) : !1;
    },
    async getLLMConfig() {
      const e = await nI();
      return e && (this.llmConfig = e), e;
    },
    async setLLMConfig(e) {
      const o = await oI(e);
      return o ? (this.llmConfig = o, !0) : !1;
    },
    async getLLMUsage(e = 30) {
      const o = await iI(e);
      return o && (this.llmUsage = o), o;
    }
  }
}), mN = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", _N = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", gN = window.Vue.defineComponent, Gr = window.Vue.unref, jr = window.Vue.openBlock, Zr = window.Vue.createElementBlock, $N = window.Vue.createCommentVNode, fg = window.Vue.createTextVNode, fv = window.Vue.Fragment, hg = window.Vue.createElementVNode, yN = window.Vue.pushScopeId, bN = window.Vue.popScopeId, VN = (e) => (yN("data-v-b87e4e5c"), e = e(), bN(), e), CN = ["src"], SN = { class: "engine" }, kN = /* @__PURE__ */ fg(" ENGINE "), EN = {
  key: 0,
  class: "type"
}, IN = {
  key: 1,
  class: "type"
}, AN = /* @__PURE__ */ fg(" ENGINE "), xN = /* @__PURE__ */ VN(() => /* @__PURE__ */ hg("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), hv = window.Vue.computed, LN = /* @__PURE__ */ gN({
  __name: "ConfigurationInfo",
  setup(e) {
    const o = So(), r = lr(), i = () => {
      o.push({
        name: "settings"
      });
    }, a = hv(() => {
      var c;
      return !!((c = r.engineInfo) != null && c.engineName);
    }), u = hv(
      () => {
        var c;
        return ((c = r.engineInfo) == null ? void 0 : c.engineName) == tt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (jr(), Zr("div", {
      class: "info-engine",
      onClick: i,
      "data-test": "configuration-info"
    }, [
      Gr(a) ? (jr(), Zr("img", {
        key: 0,
        src: Gr(u) ? Gr(_N) : Gr(mN),
        class: "icon-type"
      }, null, 8, CN)) : $N("", !0),
      hg("div", SN, [
        Gr(a) ? (jr(), Zr(fv, { key: 0 }, [
          kN,
          Gr(u) ? (jr(), Zr("div", EN, "CLUSTERING")) : (jr(), Zr("div", IN, "DEEP LEARNING"))
        ], 64)) : (jr(), Zr(fv, { key: 1 }, [
          AN,
          xN
        ], 64))
      ])
    ]));
  }
});
const TN = /* @__PURE__ */ de(LN, [["__scopeId", "data-v-b87e4e5c"]]);
const BN = {}, MN = window.Vue.openBlock, DN = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const NN = { class: "empty" };
function ON(e, o) {
  return MN(), DN("div", NN, "No results found.");
}
const Is = /* @__PURE__ */ de(BN, [["render", ON], ["__scopeId", "data-v-725433ac"]]), PN = window.Vue.defineComponent, Cn = window.Vue.createElementVNode, oi = window.Vue.unref, Ho = window.Vue.createVNode, RN = window.Vue.withCtx, Ga = window.Vue.toDisplayString, Wn = window.Vue.openBlock, zo = window.Vue.createElementBlock, pv = window.Vue.createCommentVNode, wv = window.Vue.createBlock, FN = window.Vue.renderList, UN = window.Vue.Fragment, WN = window.Vue.pushScopeId, qN = window.Vue.popScopeId, pg = (e) => (WN("data-v-2675e2f8"), e = e(), qN(), e), HN = { class: "list-main" }, zN = { class: "header" }, YN = /* @__PURE__ */ pg(() => /* @__PURE__ */ Cn("h2", null, "Situation List", -1)), GN = { class: "link-btns" }, jN = /* @__PURE__ */ pg(() => /* @__PURE__ */ Cn("span", null, "View Unassociated Alarms", -1)), ZN = { class: "content" }, KN = { class: "left-filters" }, JN = { class: "container" }, XN = { class: "autocomplete" }, QN = { key: 0 }, e3 = { key: 1 }, t3 = { key: 0 }, n3 = { class: "situation-list" }, o3 = {
  key: 0,
  class: "footer-pager"
}, r3 = window.Vue.reactive, ja = window.Vue.ref, s3 = window.Vue.watch, i3 = window.Vue.markRaw, a3 = /* @__PURE__ */ PN({
  __name: "SituationList",
  setup(e) {
    const o = i3({
      Add: Kl,
      View: BD,
      Settings: qD
    }), r = So(), i = gn(), a = lr();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = r3({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = ja(!0), w = ja(0), v = ja(1), _ = ja(0), $ = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    s3(
      () => i.situations,
      () => {
        f.value = !1, $(), N(i.situations);
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
    }, N = (S) => {
      _.value = S.length, c.allSituations = be.exports.chunk(S, u);
      const A = S.map((E) => E.id);
      i.filteredSituations = A, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, D = (S) => {
      S.length ? N(S) : c.situations = [];
    };
    return (S, A) => {
      var E;
      return Wn(), zo("div", HN, [
        Cn("div", zN, [
          YN,
          Cn("div", GN, [
            Ho(oi(le), {
              class: "view-situation-btn",
              onClick: A[0] || (A[0] = () => B())
            }, {
              default: RN(() => [
                Ho(oi(Y), {
                  icon: oi(o).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                jN
              ]),
              _: 1
            }),
            Ho(dg),
            Ho(TN)
          ])
        ]),
        Cn("div", ZN, [
          Cn("div", KN, [
            Ho(Es, {
              list: oi(i).situations,
              onFilteredList: D,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Cn("div", JN, [
            Cn("div", XN, [
              c.situations && c.situations.length ? (Wn(), zo("div", QN, " Result: " + Ga((E = c.situations) == null ? void 0 : E.length) + " of " + Ga(_.value), 1)) : pv("", !0)
            ]),
            f.value ? (Wn(), wv(oi(ds), {
              key: 0,
              class: "spinner"
            })) : (Wn(), zo("div", e3, [
              c.situations && c.situations.length ? (Wn(), zo("div", t3, [
                Cn("div", n3, [
                  (Wn(!0), zo(UN, null, FN(c.situations, (O) => (Wn(), zo("div", {
                    class: "card",
                    key: O.id
                  }, [
                    Ho(D_, {
                      onClick: () => T(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (Wn(), zo("div", o3, [
                  Cn("div", null, "Page: " + Ga(w.value + 1) + " of " + Ga(v.value), 1),
                  Ho(bA, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : pv("", !0)
              ])) : (Wn(), wv(Is, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const l3 = /* @__PURE__ */ de(a3, [["__scopeId", "data-v-2675e2f8"]]);
const Za = window.Vue.ref, u3 = window.Vue.inject, c3 = window.Vue.computed, d3 = window.Vue.onMounted, wg = {
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
}, vg = (e) => {
  const o = Za(!1), r = Za(), i = Za(e.controls), a = Za(e.id), u = () => {
    r.value && r.value.focus();
  }, c = u3("registerTab");
  d3(() => {
    if (r.value && c) {
      const w = r.value.parentElement, v = w && w.parentElement ? w.parentElement : void 0, _ = Array.from(v ? v.children : []).filter((y) => y.querySelectorAll("[role=tab]").length), $ = w ? _.indexOf(w) : -1;
      c({
        el: r.value,
        focus: u,
        disabled: e.disabled,
        selected: o,
        id: a,
        controls: i,
        index: $
      });
    }
  });
  const f = c3(() => ({
    role: "tab",
    ref: "tab",
    tabindex: o.value ? 0 : -1,
    id: a.value,
    "aria-selected": o.value,
    "aria-controls": i.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: o,
    attrs: f,
    tab: r
  };
}, vv = window.Vue.ref, f3 = window.Vue.toRef, h3 = window.Vue.watch, mv = window.Vue.provide, mg = {
  prop: "modelValue",
  event: "update:modelValue"
}, _g = {
  "update:modelValue": (e) => !0
}, gg = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, $g = (e, o) => {
  const r = f3(e, "modelValue"), i = vv(e.modelValue), a = vv([]);
  h3(r, (B) => {
    w(B);
  });
  const u = (B) => {
    B.preventDefault(), a.value.some((N, D) => N.tab && N.tab.el.contains(B.target) ? (f(D), w(D), !0) : !1);
  }, c = (B) => {
    if (((z) => z.shiftKey || z.ctrlKey || z.metaKey || z.altKey)(B))
      return;
    const D = B.keyCode, S = (z) => {
      z.stopPropagation(), z.preventDefault();
    }, A = a.value.filter((z) => z.tab && !z.tab.disabled), E = a.value.findIndex((z) => z.tab && z.tab.el.contains(document.activeElement));
    let O = E !== -1 ? E : i.value;
    const k = [te.RIGHT], R = [te.LEFT], F = [te.ENTER, te.SPACE];
    e.vertical && (k.push(te.DOWN), R.push(te.UP)), k.indexOf(D) > -1 ? (O++, O >= A.length && (O = 0), S(B), f(a.value.indexOf(A[O]))) : R.indexOf(D) > -1 && (O--, O < 0 && (O = A.length - 1), S(B), f(a.value.indexOf(A[O]))), F.indexOf(D) > -1 && w(O);
  }, f = (B) => {
    a.value.forEach(function(N, D) {
      B === D && N.tab && N.tab.focus();
    });
  }, w = (B) => {
    const N = a.value[B];
    !N || N.tab && N.tab.disabled || (a.value.forEach((D, S) => {
      D.tab && (D.tab.selected = B === S), D.panel && (D.panel.selected = B === S);
    }), i.value = B, o.emit("update:modelValue", B));
  };
  mv("registerTab", (B) => {
    const N = B.index;
    N > -1 && (a.value[N] = { ...a.value[N], tab: B }, a.value = [...a.value], $());
  }), mv("registerPanel", (B) => {
    const N = B.index;
    N > -1 && (a.value[N] = {
      ...a.value[N],
      panel: B
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: B, panel: N }, D) => {
      if (N && B) {
        const S = B.id || ce("tab"), A = B.controls || ce("panel");
        B.controls = A, B.id = S, N.tab = S, N.id = A;
      }
      D === i.value && (N && (N.selected = !0), B && (B.selected = !0));
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
    selected: i,
    pairs: a
  };
}, Ka = window.Vue.ref, p3 = window.Vue.inject, w3 = window.Vue.computed, v3 = window.Vue.onMounted, yg = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, bg = (e) => {
  const o = Ka(!1), r = Ka(), i = Ka(e.tab), a = Ka(e.id), u = p3("registerPanel");
  v3(() => {
    if (u) {
      const f = r.value, w = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: o,
        id: a,
        tab: i,
        el: r.value,
        index: v
      });
    }
  });
  const c = w3(() => ({
    role: "tabpanel",
    id: a.value,
    ref: "panel",
    tabindex: "0",
    "aria-expanded": o.value,
    "aria-labelledby": i.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: o,
    attrs: c,
    panel: r
  };
}, Xd = window.Vue.defineComponent, m3 = window.Vue.resolveComponent, Qd = window.Vue.openBlock, ef = window.Vue.createElementBlock, Si = window.Vue.createElementVNode, Vg = window.Vue.mergeProps, El = window.Vue.renderSlot, _3 = window.Vue.createVNode, g3 = window.Vue.normalizeStyle, $3 = window.Vue.toHandlers, y3 = window.Vue.withDirectives, b3 = window.Vue.normalizeProps, V3 = window.Vue.guardReactiveProps, C3 = window.Vue.vShow;
var tf = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const S3 = wg, k3 = Xd({
  props: S3,
  setup(e) {
    return vg(e);
  },
  components: {
    FeatherRipple: bo
  }
}), E3 = { role: "presentation" }, I3 = { class: "tab-text" };
function A3(e, o, r, i, a, u) {
  const c = m3("FeatherRipple");
  return Qd(), ef("li", E3, [
    Si("button", Vg(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      Si("span", I3, [
        El(e.$slots, "default", {}, void 0, !0)
      ]),
      _3(c)
    ], 16)
  ]);
}
var Fc = /* @__PURE__ */ tf(k3, [["render", A3], ["__scopeId", "data-v-e6bb52b6"]]);
const x3 = gg, L3 = _g, T3 = Xd({
  model: mg,
  emits: L3,
  props: x3,
  setup(e, o) {
    return $g(e, o);
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
        const e = this.$el.getBoundingClientRect(), o = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), r = o.left - e.left, i = o.height - 2;
        this.width = `${o.width}px`, this.transform = `translateX(${r}px) translateY(${i}px)`;
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
}), B3 = { class: "feather-tab-container" }, M3 = { class: "tab-panels" };
function D3(e, o, r, i, a, u) {
  return Qd(), ef("div", B3, [
    Si("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: g3({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    Si("ul", Vg(e.attrs, $3(e.listeners)), [
      El(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    Si("div", M3, [
      El(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var N3 = /* @__PURE__ */ tf(T3, [["render", D3], ["__scopeId", "data-v-27adffb9"]]);
const O3 = yg, P3 = Xd({
  props: O3,
  setup(e) {
    return bg(e);
  }
});
function R3(e, o, r, i, a, u) {
  return y3((Qd(), ef("div", b3(V3(e.attrs)), [
    El(e.$slots, "default")
  ], 16)), [
    [C3, e.selected]
  ]);
}
var Uc = /* @__PURE__ */ tf(P3, [["render", R3]]);
const F3 = window.Vue.defineComponent, U3 = window.Vue.toDisplayString, W3 = window.Vue.normalizeClass, q3 = window.Vue.openBlock, H3 = window.Vue.createElementBlock, z3 = window.Vue.createCommentVNode, Y3 = /* @__PURE__ */ F3({
  __name: "SeverityStatus",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const o = e;
    return (r, i) => o != null && o.severity ? (q3(), H3("span", {
      key: 0,
      class: W3(["severity-status", [`${o.severity.toLowerCase()}-color`]])
    }, U3(o.severity), 3)) : z3("", !0);
  }
});
const Cg = /* @__PURE__ */ de(Y3, [["__scopeId", "data-v-83c2cdce"]]), G3 = window.Vue.defineComponent, _v = window.Vue.toDisplayString, gv = window.Vue.createElementVNode, j3 = window.Vue.openBlock, Z3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const K3 = { class: "box" }, J3 = { class: "label" }, X3 = { class: "date" }, Q3 = /* @__PURE__ */ G3({
  __name: "InformationBox",
  props: {
    label: null,
    info: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (j3(), Z3("div", K3, [
      gv("div", J3, _v(o.label), 1),
      gv("div", X3, _v(o.info), 1)
    ]));
  }
});
const Wc = /* @__PURE__ */ de(Q3, [["__scopeId", "data-v-b4afa751"]]), eO = window.Vue.defineComponent, tO = window.Vue.unref, nO = window.Vue.renderList, oO = window.Vue.Fragment, qc = window.Vue.openBlock, Hc = window.Vue.createElementBlock, rO = window.Vue.toDisplayString, sO = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const iO = { class: "alarms-list" }, aO = /* @__PURE__ */ eO({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (qc(), Hc("div", iO, [
      (qc(!0), Hc(oO, null, nO(tO(be.exports.groupBy)(o == null ? void 0 : o.alarms, "severity"), (a, u) => (qc(), Hc("div", {
        class: sO(["alarm-count", [`${u.toString().toLowerCase()}-color`, o.size]]),
        key: u
      }, rO(a.length), 3))), 128))
    ]));
  }
});
const lO = /* @__PURE__ */ de(aO, [["__scopeId", "data-v-52d63440"]]), uO = window.Vue.openBlock, cO = window.Vue.createElementBlock, dO = window.Vue.createElementVNode;
var fO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const hO = {}, pO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, wO = /* @__PURE__ */ dO("path", { d: "M17.71,10.71,12,5,6.29,10.71A1,1,0,0,0,7.7,12.12L11,8.83V18a1,1,0,0,0,2,0V8.83l3.29,3.29a1,1,0,0,0,1.42,0A1,1,0,0,0,17.71,10.71Z" }, null, -1), vO = [
  wO
];
function mO(e, o) {
  return uO(), cO("svg", pO, vO);
}
var _O = /* @__PURE__ */ fO(hO, [["render", mO]]);
const gO = window.Vue.openBlock, $O = window.Vue.createElementBlock, yO = window.Vue.createStaticVNode;
var bO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const VO = {}, CO = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, SO = /* @__PURE__ */ yO('<rect x="6" y="9" width="9" height="2" rx="1"></rect><rect x="6" y="5" width="9" height="2" rx="1"></rect><path d="M6,14H6a1,1,0,0,0,1,1h6V13H7A1,1,0,0,0,6,14Z"></path><rect x="6" y="17" width="8" height="2" rx="1"></rect><path d="M22.72,11.28a1,1,0,0,0-1.36,0L18.43,14.2l-.5.49-.5-.49-.79-.91a1,1,0,0,0-1.36,0A1,1,0,0,0,15,14a1,1,0,0,0,.28.67l1.94,2.07a1,1,0,0,0,1.42,0l4.08-4.08A.92.92,0,0,0,23,12,.94.94,0,0,0,22.72,11.28Z"></path><path d="M17,21H4V3H17v7l1,1,1-1V3a2,2,0,0,0-2-2H4A2,2,0,0,0,2,3V21a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V19H17Z"></path>', 6), kO = [
  SO
];
function EO(e, o) {
  return gO(), $O("svg", CO, kO);
}
var Il = /* @__PURE__ */ bO(VO, [["render", EO]]);
const IO = window.Vue.defineComponent, hn = window.Vue.unref, zc = window.Vue.createVNode, nf = window.Vue.createElementVNode, Yc = window.Vue.withCtx, Ja = window.Vue.openBlock, Gc = window.Vue.createBlock, jc = window.Vue.createCommentVNode, AO = window.Vue.normalizeClass, xO = window.Vue.createElementBlock, LO = window.Vue.pushScopeId, TO = window.Vue.popScopeId, of = (e) => (LO("data-v-e073070b"), e = e(), TO(), e), BO = /* @__PURE__ */ of(() => /* @__PURE__ */ nf("span", null, "Acknowledge", -1)), MO = /* @__PURE__ */ of(() => /* @__PURE__ */ nf("span", null, "Escalate", -1)), DO = /* @__PURE__ */ of(() => /* @__PURE__ */ nf("span", null, "Clear", -1)), NO = /* @__PURE__ */ IO({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const o = e, r = gn(), i = async (u) => {
      await Gk(o.alarm.id, u) && r.getSituation(o.situationId), o.isSituation && await B_(
        o.situationId,
        tt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await m_(o.alarm.id, u) && r.getSituation(o.situationId);
    };
    return (u, c) => (Ja(), xO("div", {
      class: AO(["action-btns-group", o.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? jc("", !0) : (Ja(), Gc(hn(le), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => i(!0))
      }, {
        default: Yc(() => [
          zc(hn(Y), {
            icon: hn(ws),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          BO
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Ja(), Gc(hn(le), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(hn(tt).ESCALATE))
      }, {
        default: Yc(() => [
          zc(hn(Y), {
            icon: hn(_O),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          MO
        ]),
        _: 1
      })) : jc("", !0),
      o.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Ja(), Gc(hn(le), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(hn(tt).CLEAR))
      }, {
        default: Yc(() => [
          zc(hn(Y), {
            icon: hn(Il),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          DO
        ]),
        _: 1
      })) : jc("", !0)
    ], 2));
  }
});
const Sg = /* @__PURE__ */ de(NO, [["__scopeId", "data-v-e073070b"]]);
var OO = Object.defineProperty, PO = Object.defineProperties, RO = Object.getOwnPropertyDescriptors, $v = Object.getOwnPropertySymbols, FO = Object.prototype.hasOwnProperty, UO = Object.prototype.propertyIsEnumerable, yv = (e, o, r) => o in e ? OO(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Ld = (e, o) => {
  for (var r in o || (o = {}))
    FO.call(o, r) && yv(e, r, o[r]);
  if ($v)
    for (var r of $v(o))
      UO.call(o, r) && yv(e, r, o[r]);
  return e;
}, kg = (e, o) => PO(e, RO(o));
const Eg = window.Vue.defineComponent, WO = window.Vue.inject, qO = window.Vue.resolveComponent, Zc = window.Vue.openBlock, bv = window.Vue.createElementBlock, is = window.Vue.createElementVNode, HO = window.Vue.createBlock, Vv = window.Vue.createCommentVNode, zO = window.Vue.renderSlot, YO = window.Vue.pushScopeId, GO = window.Vue.popScopeId, Kc = window.Vue.toRef, Xa = window.Vue.computed, jO = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var ZO = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const KO = {
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
}, JO = {
  "update:modelValue": (e) => !0,
  click: (e) => !0,
  indeterminate: (e) => !0
}, XO = Eg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: JO,
  props: KO,
  mounted() {
    this.registerCheckbox && this.registerCheckbox(this.inputId);
  },
  setup() {
    return {
      registerCheckbox: WO("registerCheckbox", (o) => {
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
      (e.keyCode === te.SPACE || e.keyCode === te.ENTER) && this.updateValue(), e.keyCode === te.SPACE && e.preventDefault();
    }
  },
  components: {
    FeatherRipple: bo
  }
}), QO = (e) => (YO("data-v-a7af27e2"), e = e(), GO(), e), eP = { class: "layout-container" }, tP = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], nP = { class: "checkbox hover focus" }, oP = /* @__PURE__ */ QO(() => /* @__PURE__ */ is("div", { class: "box" }, [
  /* @__PURE__ */ is("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ is("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ is("div", { class: "indeterminate" })
], -1)), rP = ["id", "for"];
function sP(e, o, r, i, a, u) {
  const c = qO("feather-ripple");
  return Zc(), bv("div", eP, [
    is("div", {
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
      is("div", nP, [
        oP,
        e.disabled ? Vv("", !0) : (Zc(), HO(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? Vv("", !0) : (Zc(), bv("label", {
        key: 0,
        "data-ref-id": "feather-checkbox-label",
        id: e.labelId,
        for: e.inputId
      }, [
        zO(e.$slots, "default", {}, void 0, !0)
      ], 8, rP))
    ], 40, tP)
  ]);
}
var sr = /* @__PURE__ */ ZO(XO, [["render", sP], ["__scopeId", "data-v-a7af27e2"]]);
const iP = kg(Ld({}, Cs), {
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
Eg({
  props: iP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, o) {
    Ss(e);
    const r = Kc(e, "error"), i = Xa(() => ce("feather-checkbox-group")), a = Xa(() => ce("feather-input-description")), u = Xa(() => ce("feather-input-label")), c = Xa(() => {
      const _ = JSON.parse(JSON.stringify(o.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!r.value), kg(Ld({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = jO(i.value), { validate: w } = bs(f, Kc(e, "modelValue"), e.label, e.schema, Kc(e, "error"));
    return Ld({
      groupId: i,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === i.value && (f.value = _);
      }
    }, Vs(o.attrs));
  },
  components: {
    InputSubText: ys
  }
});
const aP = window.Vue.openBlock, lP = window.Vue.createElementBlock, Ig = window.Vue.createElementVNode;
var uP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const cP = {}, dP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fP = /* @__PURE__ */ Ig("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), hP = /* @__PURE__ */ Ig("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), pP = [
  fP,
  hP
];
function wP(e, o) {
  return aP(), lP("svg", dP, pP);
}
var vP = /* @__PURE__ */ uP(cP, [["render", wP]]);
var mP = Object.defineProperty, _P = Object.defineProperties, gP = Object.getOwnPropertyDescriptors, Cv = Object.getOwnPropertySymbols, $P = Object.prototype.hasOwnProperty, yP = Object.prototype.propertyIsEnumerable, Sv = (e, o, r) => o in e ? mP(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, as = (e, o) => {
  for (var r in o || (o = {}))
    $P.call(o, r) && Sv(e, r, o[r]);
  if (Cv)
    for (var r of Cv(o))
      yP.call(o, r) && Sv(e, r, o[r]);
  return e;
}, Ag = (e, o) => _P(e, gP(o));
const bP = window.Vue.defineComponent, Jc = window.Vue.toRef, VP = window.Vue.computed, kv = window.Vue.resolveComponent, Ev = window.Vue.openBlock, Iv = window.Vue.createElementBlock, Av = window.Vue.mergeProps, xv = window.Vue.createVNode, CP = window.Vue.normalizeClass, Lv = window.Vue.withCtx, SP = window.Vue.createElementVNode, kP = window.Vue.toDisplayString, EP = window.Vue.createCommentVNode;
var IP = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const AP = Ag(as(as({}, Ul), Cs), {
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
}), xP = {
  "update:modelValue": (e) => !0
}, LP = bP({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: xP,
  props: AP,
  setup(e, o) {
    Ss(e), Wl(e);
    const r = Jc(e, "id"), i = VP(() => r.value ? r.value : ce("feather-textarea-label")), { validate: a } = bs(i, Jc(e, "modelValue"), e.label, e.schema, Jc(e, "error"));
    return as({
      inputId: i,
      incomingId: r,
      validate: a
    }, Vs(o.attrs));
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
      const e = as({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Ag(as(as({}, e), this.listeners), {
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
    InputSubText: ys,
    InputWrapper: Fl
  }
}), TP = ["maxlength"], BP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function MP(e, o, r, i, a, u) {
  const c = kv("InputWrapper"), f = kv("InputSubText");
  return Ev(), Iv("div", Av(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    xv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: CP(["feather-textarea-content", e.contentCls])
    }, {
      default: Lv(() => [
        SP("textarea", Av(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, TP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    xv(f, { id: e.descriptionId }, {
      right: Lv(() => [
        e.maxlength ? (Ev(), Iv("div", BP, kP(e.charCount), 1)) : EP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Al = /* @__PURE__ */ IP(LP, [["render", MP], ["__scopeId", "data-v-0648df5c"]]);
const DP = window.Pinia.defineStore, Jl = DP("appStore", {
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
}), NP = window.Vue.defineComponent, Tv = window.Vue.toDisplayString, ri = window.Vue.createElementVNode, Yo = window.Vue.unref, Kr = window.Vue.openBlock, Bv = window.Vue.createBlock, si = window.Vue.createCommentVNode, Mv = window.Vue.createVNode, Qa = window.Vue.createElementBlock, OP = window.Vue.normalizeClass;
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
}, zP = window.Vue.watch, Dv = window.Vue.ref, YP = /* @__PURE__ */ NP({
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
    const o = e, r = Jl(), i = Dv(!1), a = Dv((w = o.memo) == null ? void 0 : w.body);
    zP(o, () => {
      var v;
      a.value = (v = o.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const u = () => {
      i.value = !i.value;
    }, c = async () => {
      i.value = !1, await eE(o.id, o.type) ? a.value = "" : r.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, a.value && a.value !== "" && (await Qk(o.id, o.type, a.value) || r.showErrorMsg("Error on saving memo :("));
    };
    return (v, _) => (Kr(), Qa("div", {
      class: OP([o.boxType === "small" ? "box-small" : "box"])
    }, [
      ri("div", PP, [
        ri("div", RP, Tv(e.label), 1),
        ri("div", FP, [
          ri("div", UP, [
            i.value ? si("", !0) : (Kr(), Bv(Yo(Y), {
              key: 0,
              icon: Yo(vP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          i.value ? (Kr(), Qa("div", WP, [
            Mv(Yo(Y), {
              icon: Yo(ws),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : si("", !0),
          a.value && a.value != "" || i.value ? (Kr(), Qa("div", qP, [
            Mv(Yo(Y), {
              icon: Yo(gs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : si("", !0)
        ])
      ]),
      ri("div", null, [
        !i.value && a.value != null ? (Kr(), Qa("div", HP, Tv(a.value), 1)) : si("", !0),
        i.value ? (Kr(), Bv(Yo(Al), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : si("", !0)
      ])
    ], 2));
  }
});
const xl = /* @__PURE__ */ de(YP, [["__scopeId", "data-v-3f44e250"]]), GP = window.Vue.defineComponent, Go = window.Vue.unref, Jr = window.Vue.createVNode, ii = window.Vue.toDisplayString, mn = window.Vue.createElementVNode, Nv = window.Vue.openBlock, Ov = window.Vue.createElementBlock, Pv = window.Vue.createCommentVNode, Xc = window.Vue.createTextVNode, jP = window.Vue.pushScopeId, ZP = window.Vue.popScopeId, rf = (e) => (jP("data-v-02d1e7f0"), e = e(), ZP(), e), KP = {
  key: 0,
  class: "card"
}, JP = { class: "row" }, XP = {
  key: 0,
  class: "ack"
}, QP = /* @__PURE__ */ rf(() => /* @__PURE__ */ mn("strong", null, " Duration: ", -1)), eR = ["innerHTML"], tR = /* @__PURE__ */ rf(() => /* @__PURE__ */ mn("strong", null, "First Event", -1)), nR = /* @__PURE__ */ rf(() => /* @__PURE__ */ mn("strong", null, "Last Event", -1)), oR = { class: "section memo-boxes" }, Rv = window.Vue.ref, rR = window.Vue.watch, sR = /* @__PURE__ */ GP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: o }) {
    const r = e, i = Rv(!1), a = Rv(r.alarm), u = new Date().getTime();
    rR(r, () => {
      a.value = r.alarm, i.value = r.selectAll, r.selectAll && o("alarm-selected", r.alarm.id);
    });
    const c = () => {
      o("alarm-selected", r.alarm.id);
    }, f = async (w) => {
      const v = await __(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, T, B;
      return a.value ? (Nv(), Ov("div", KP, [
        mn("div", null, [
          mn("div", JP, [
            Jr(Go(sr), {
              modelValue: i.value,
              "onUpdate:modelValue": [
                v[0] || (v[0] = (N) => i.value = N),
                c
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            mn("div", {
              class: "title",
              onClick: v[1] || (v[1] = () => {
                i.value = !i.value, c();
              })
            }, ii(a.value.nodeLabel) + " - " + ii(a.value.id), 1),
            Jr(Cg, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Nv(), Ov("div", XP, [
              Jr(Go(Y), {
                icon: Go(ws),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Pv("", !0)
          ]),
          mn("div", null, [
            QP,
            Xc(" " + ii(Go(Ol)(Go(u), new Date(a.value.firstEventTime))), 1)
          ]),
          mn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, eR),
          mn("div", null, [
            tR,
            Xc(" - " + ii(Go(In)(a.value.firstEventTime)), 1)
          ]),
          mn("div", null, [
            nR,
            Xc(" - " + ii(Go(In)(a.value.lastEventTime)), 1)
          ]),
          mn("div", oR, [
            Jr(xl, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Jr(xl, {
              id: (T = a.value) == null ? void 0 : T.id,
              boxType: "small",
              situationId: r.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (B = a.value) == null ? void 0 : B.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Jr(Sg, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": r.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Pv("", !0);
    };
  }
});
const iR = /* @__PURE__ */ de(sR, [["__scopeId", "data-v-02d1e7f0"]]), aR = window.Vue.openBlock, lR = window.Vue.createElementBlock, xg = window.Vue.createElementVNode;
var uR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const cR = {}, dR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fR = /* @__PURE__ */ xg("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), hR = /* @__PURE__ */ xg("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), pR = [
  fR,
  hR
];
function wR(e, o) {
  return aR(), lR("svg", dR, pR);
}
var Td = /* @__PURE__ */ uR(cR, [["render", wR]]);
const vR = window.Vue.watch, mR = window.Vue.ref, _R = window.Vue.onBeforeUnmount, Lg = (e) => {
  const o = mR(!1), r = (i) => {
    i.keyCode === te.ESCAPE && (i.preventDefault(), o.value = !o.value);
  };
  return vR(e, (i) => {
    i ? document.addEventListener("keydown", r) : typeof document < "u" && document.removeEventListener("keydown", r);
  }, { immediate: !0 }), _R(() => {
    document.removeEventListener("keydown", r);
  }), o;
}, gR = window.Vue.watch, Tg = (e) => {
  let o;
  gR(e, (r) => {
    r ? o = document.activeElement : setTimeout(() => {
      o && o.focus && o.focus(), o = void 0;
    }, 0);
  });
}, Bg = window.Vue.watch, Mg = window.Vue.onBeforeUnmount, Dg = window.Vue.nextTick, $R = window.Vue.onMounted, Ng = (e) => {
  if (e === !1)
    return "hidden";
  const o = e.style.overflow;
  return e.style.overflow = "hidden", o;
}, Ll = (e, o) => {
  e !== void 0 && o !== !1 && (o.style.overflow = e);
}, Og = (e) => {
  let o;
  const r = typeof document < "u" ? document.body : !1;
  Mg(() => Ll(o, r)), $R(() => Bg(e, (i) => {
    i ? Dg(() => {
      o = Ng(r);
    }) : Ll(o, r);
  }, { immediate: !0 }));
}, yR = (e, o) => {
  let r;
  Mg(() => Ll(r, o.value ? o.value.offsetParent : !1)), Bg([e, o], ([i, a]) => {
    i && a ? Dg(() => {
      r = Ng(a.offsetParent);
    }) : a && Ll(r, a.offsetParent);
  }, {
    immediate: !0
  });
};
var bR = Object.defineProperty, Fv = Object.getOwnPropertySymbols, VR = Object.prototype.hasOwnProperty, CR = Object.prototype.propertyIsEnumerable, Uv = (e, o, r) => o in e ? bR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, SR = (e, o) => {
  for (var r in o || (o = {}))
    VR.call(o, r) && Uv(e, r, o[r]);
  if (Fv)
    for (var r of Fv(o))
      CR.call(o, r) && Uv(e, r, o[r]);
  return e;
};
const sf = window.Vue.defineComponent, ki = window.Vue.ref, kR = window.Vue.nextTick, Pg = window.Vue.openBlock, Rg = window.Vue.createElementBlock, af = window.Vue.createElementVNode, ER = window.Vue.renderSlot, IR = window.Vue.resolveComponent, AR = window.Vue.normalizeClass, xR = window.Vue.withModifiers, LR = window.Vue.createVNode, Wv = window.Vue.toRef, qv = window.Vue.computed, Hv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Fg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const TR = {
  enable: {
    type: Boolean,
    required: !0
  }
}, BR = sf({
  props: TR,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = ki(), o = ki(!1), r = (_, $) => {
      let y = _.compareDocumentPosition($);
      if (y === 2)
        return "before";
      if (y === 4)
        return "after";
      if (y === 10 || y === 12)
        return "parent";
    }, i = (_) => {
      for (var $ = 0; $ < _.childNodes.length; $++) {
        var y = _.childNodes[$];
        if (u(y) || i(y))
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
      $ && $.focus ? kR(() => {
        $.focus();
      }) : i(_);
    }, w = ki();
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
                i(e.value);
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
      focusFirstDescendant: i,
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
}), MR = /* @__PURE__ */ af("div", { tabindex: "0" }, null, -1), DR = {
  class: "focus-trap-content",
  ref: "content"
}, NR = /* @__PURE__ */ af("div", { tabindex: "0" }, null, -1);
function OR(e, o, r, i, a, u) {
  return Pg(), Rg("div", null, [
    MR,
    af("div", DR, [
      ER(e.$slots, "default")
    ], 512),
    NR
  ]);
}
var Ug = /* @__PURE__ */ Fg(BR, [["render", OR]]);
const PR = sf({
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
    icon: () => gs
  },
  components: {
    FeatherIcon: Y
  }
}), RR = ["aria-label"];
function FR(e, o, r, i, a, u) {
  const c = IR("FeatherIcon");
  return Pg(), Rg("a", {
    href: "#",
    class: AR(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: o[0] || (o[0] = xR((f) => e.$emit("close"), ["prevent"]))
  }, [
    LR(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, RR);
}
var Wg = /* @__PURE__ */ Fg(PR, [["render", FR], ["__scopeId", "data-v-fc0f3f00"]]);
const qg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, UR = {
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
    default: () => qg,
    validator: (e) => !!e.title
  }
}, WR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
sf({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: WR,
  props: UR,
  setup(e, o) {
    const r = Rl(Wv(e, "labels"), qg), i = Wv(e, "modelValue"), a = ki(), u = () => {
      o.emit("update:modelValue", !1);
    }, c = qv(() => !!o.slots.footer), f = qv(() => ce("dialog-header"));
    e.relative ? yR(i, a) : Og(i), Tg(i), Hv(Lg(i), () => {
      u();
    });
    const w = ki(e.modelValue);
    return Hv(w, (v) => {
      v ? o.emit("shown") : o.emit("hidden");
    }), SR({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, r);
  },
  components: {
    FocusTrap: Ug,
    DialogClose: Wg
  }
});
var qR = Object.defineProperty, zv = Object.getOwnPropertySymbols, HR = Object.prototype.hasOwnProperty, zR = Object.prototype.propertyIsEnumerable, Yv = (e, o, r) => o in e ? qR(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Xl = (e, o) => {
  for (var r in o || (o = {}))
    HR.call(o, r) && Yv(e, r, o[r]);
  if (zv)
    for (var r of zv(o))
      zR.call(o, r) && Yv(e, r, o[r]);
  return e;
};
const Ql = window.Vue.defineComponent, Gv = window.Vue.toRef, jv = window.Vue.watch, Zv = window.Vue.ref, Kv = window.Vue.resolveComponent, el = window.Vue.openBlock, Jv = window.Vue.createBlock, YR = window.Vue.Teleport, Xv = window.Vue.createElementBlock, Qc = window.Vue.createVNode, Qv = window.Vue.Transition, ed = window.Vue.withCtx, em = window.Vue.createCommentVNode, GR = window.Vue.withDirectives, jR = window.Vue.normalizeStyle, ZR = window.Vue.normalizeClass, tm = window.Vue.createElementVNode, KR = window.Vue.renderSlot, JR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var XR = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const Hg = {
  title: "REQUIRED",
  close: "Close Dialog"
}, QR = {
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
    default: () => Hg,
    validator: (e) => !!e.title
  }
}, e8 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, t8 = Ql({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: e8,
  props: QR,
  setup(e, o) {
    const r = Rl(Gv(e, "labels"), Hg), i = Gv(e, "modelValue"), a = () => {
      o.emit("update:modelValue", !1);
    };
    Og(i), Tg(i), jv(Lg(i), () => {
      a();
    });
    const u = Zv(), c = Zv(!1);
    return jv(c, (f) => {
      f ? o.emit("shown") : o.emit("hidden");
    }), Xl({ close: a, shown: c, isShown: i, element: u }, r);
  },
  components: {
    DialogClose: Wg,
    FocusTrap: Ug
  }
}), n8 = {
  key: 0,
  class: "drawer-container feather-styles"
}, o8 = {
  key: 0,
  class: "greyedOut"
}, r8 = ["aria-label"], s8 = { class: "slot" };
function i8(e, o, r, i, a, u) {
  const c = Kv("dialog-close"), f = Kv("focus-trap");
  return el(), Jv(YR, { to: "body" }, [
    e.modelValue ? (el(), Xv("div", n8, [
      Qc(Qv, { name: "greyOutShim" }, {
        default: ed(() => [
          e.modelValue ? (el(), Xv("div", o8)) : em("", !0)
        ]),
        _: 1
      }),
      Qc(Qv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: o[0] || (o[0] = (w) => e.shown = !0),
        onAfterLeave: o[1] || (o[1] = (w) => e.shown = !1)
      }, {
        default: ed(() => [
          GR((el(), Jv(f, {
            enable: e.modelValue,
            style: jR({ width: e.width }),
            key: "sect",
            class: ZR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: ed(() => [
              tm("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                tm("div", s8, [
                  KR(e.$slots, "default", {}, void 0, !0)
                ]),
                Qc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, r8)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [JR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : em("", !0)
  ]);
}
var zg = /* @__PURE__ */ XR(t8, [["render", i8], ["__scopeId", "data-v-0a36e1dc"]]);
const a8 = Xl({
  label: {
    type: String,
    required: !0
  }
}, wg);
Ql({
  name: "DrawerTab",
  props: a8,
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = ir(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      ar(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return vg(e);
  },
  components: {
    FeatherRipple: bo
  }
});
const l8 = Xl({}, gg), u8 = _g;
Ql({
  emits: u8,
  model: mg,
  props: l8,
  setup(e, o) {
    return $g(e, o);
  }
});
const c8 = Xl({
  header: {
    type: String
  }
}, yg);
Ql({
  name: "DrawerTabContent",
  props: c8,
  setup(e) {
    return bg(e);
  },
  directives: {
    MenuFocusLoop: $T
  }
});
const d8 = window.Vue.defineComponent, Yg = window.Vue.createElementVNode, nm = window.Vue.createVNode, f8 = window.Vue.renderList, h8 = window.Vue.Fragment, ai = window.Vue.openBlock, td = window.Vue.createElementBlock, om = window.Vue.createBlock, p8 = window.Vue.unref, w8 = window.Vue.withCtx, v8 = window.Vue.pushScopeId, m8 = window.Vue.popScopeId, _8 = (e) => (v8("data-v-c7c65659"), e = e(), m8(), e), g8 = { class: "content" }, $8 = /* @__PURE__ */ _8(() => /* @__PURE__ */ Yg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), y8 = {
  key: 0,
  class: "situation-list"
}, nd = window.Vue.ref, rm = window.Vue.watch, b8 = /* @__PURE__ */ d8({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: o }) {
    const r = e, i = gn(), a = nd(r.visible), u = () => {
      let v = i.situations;
      r.situationId !== 0 && (v = i.situations.filter(
        (_) => _.id != r.situationId
      )), c.value = v, f.value = v;
    }, c = nd(i.situations), f = nd(i.situations);
    rm(r, () => {
      a.value = r.visible, u();
    }), rm(
      () => i.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (ai(), om(p8(zg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => o("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: w8(() => [
        Yg("div", g8, [
          $8,
          nm(Es, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (ai(), td("div", y8, [
            (ai(!0), td(h8, null, f8(f.value, ($) => (ai(), td("div", {
              class: "card",
              key: $.id
            }, [
              nm(D_, {
                onClick: (y) => o("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (ai(), om(Is, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Gg = /* @__PURE__ */ de(b8, [["__scopeId", "data-v-c7c65659"]]), V8 = window.Vue.defineComponent, sm = window.Vue.normalizeClass, rs = window.Vue.createElementVNode, tl = window.Vue.unref, C8 = window.Vue.createVNode, nl = window.Vue.toDisplayString, S8 = window.Vue.createTextVNode, k8 = window.Vue.openBlock, E8 = window.Vue.createElementBlock, I8 = window.Vue.pushScopeId, A8 = window.Vue.popScopeId, x8 = (e) => (I8("data-v-e1e9b696"), e = e(), A8(), e), L8 = { class: "alarmInfo" }, T8 = { class: "alarm-title" }, B8 = /* @__PURE__ */ x8(() => /* @__PURE__ */ rs("strong", null, " Duration: ", -1)), M8 = { class: "description" }, D8 = /* @__PURE__ */ V8({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: o }) {
    const r = e, i = new Date().getTime();
    return (a, u) => (k8(), E8("div", {
      class: sm(["alarm", { selected: r.selected }])
    }, [
      rs("div", L8, [
        rs("div", {
          class: sm(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        C8(tl(sr), {
          modelValue: r.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => o("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        rs("div", T8, nl(e.alarm.nodeLabel) + " - " + nl(e.alarm.id), 1)
      ]),
      rs("div", null, [
        B8,
        S8(" " + nl(tl(Ol)(tl(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      rs("div", M8, nl(tl(E_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const lf = /* @__PURE__ */ de(D8, [["__scopeId", "data-v-e1e9b696"]]), N8 = window.Vue.defineComponent, wl = window.Vue.createElementVNode, Xr = window.Vue.unref, O8 = window.Vue.toDisplayString, im = window.Vue.withCtx, od = window.Vue.createVNode, P8 = window.Vue.renderList, R8 = window.Vue.Fragment, li = window.Vue.openBlock, rd = window.Vue.createElementBlock, am = window.Vue.createBlock, F8 = window.Vue.pushScopeId, U8 = window.Vue.popScopeId, W8 = (e) => (F8("data-v-4bc80d4b"), e = e(), U8(), e), q8 = { class: "content" }, H8 = { class: "header" }, z8 = /* @__PURE__ */ W8(() => /* @__PURE__ */ wl("h4", null, "ADD ALARMS", -1)), Y8 = {
  key: 0,
  class: "alarms-list"
}, ol = window.Vue.ref, lm = window.Vue.watch, G8 = /* @__PURE__ */ N8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: o }) {
    const r = e, i = gn(), a = ol(r.visible), u = ol([]), c = ol(["all"]), f = ol(i.unassignedAlarms);
    lm(r, () => {
      a.value = r.visible, u.value = [], f.value = i.unassignedAlarms;
    }), lm(
      () => i.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      be.exports.includes(u.value, y) ? be.exports.remove(u.value, (T) => T === y) : u.value.push(y);
    }, v = () => {
      o("alarms-selected", u.value);
    }, _ = () => {
      let y = i.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (T) => c.value.includes(T.severity)
      )), f.value = y;
    }, $ = (y) => {
      f.value = y;
    };
    return (y, T) => (li(), am(Xr(zg), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        T[0] || (T[0] = (B) => a.value = B),
        T[1] || (T[1] = (B) => o("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: im(() => [
        wl("div", q8, [
          wl("div", H8, [
            z8,
            od(Xr(le), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: im(() => [
                wl("span", null, "Add " + O8(Xr(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          od(Es, {
            list: Xr(i).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (li(), rd("div", Y8, [
            (li(!0), rd(R8, null, P8(f.value, (B) => (li(), rd("div", {
              class: "card",
              key: B.id
            }, [
              od(lf, {
                selected: Xr(be.exports.includes)(Xr(u), B.id),
                alarm: B,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (li(), am(Is, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const j8 = /* @__PURE__ */ de(G8, [["__scopeId", "data-v-4bc80d4b"]]), Z8 = window.Vue.openBlock, K8 = window.Vue.createElementBlock, jg = window.Vue.createElementVNode;
var J8 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const X8 = {}, Q8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e5 = /* @__PURE__ */ jg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), t5 = /* @__PURE__ */ jg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), n5 = [
  e5,
  t5
];
function o5(e, o) {
  return Z8(), K8("svg", Q8, n5);
}
var um = /* @__PURE__ */ J8(X8, [["render", o5]]);
const r5 = window.Vue.defineComponent, Ut = window.Vue.createElementVNode, it = window.Vue.unref, ht = window.Vue.createVNode, ui = window.Vue.withCtx, s5 = window.Vue.renderList, cm = window.Vue.Fragment, ci = window.Vue.openBlock, rl = window.Vue.createElementBlock, i5 = window.Vue.createBlock, a5 = window.Vue.pushScopeId, l5 = window.Vue.popScopeId, As = (e) => (a5("data-v-524b0835"), e = e(), l5(), e), u5 = { class: "container" }, c5 = { class: "header" }, d5 = /* @__PURE__ */ As(() => /* @__PURE__ */ Ut("div", { class: "title" }, "Alarms", -1)), f5 = /* @__PURE__ */ As(() => /* @__PURE__ */ Ut("span", null, "Add Alarms", -1)), h5 = { class: "alarms-container" }, p5 = { class: "filters" }, w5 = { class: "list" }, v5 = { class: "row actions" }, m5 = /* @__PURE__ */ As(() => /* @__PURE__ */ Ut("span", null, "Clear", -1)), _5 = /* @__PURE__ */ As(() => /* @__PURE__ */ Ut("span", null, "Acknowledge", -1)), g5 = /* @__PURE__ */ As(() => /* @__PURE__ */ Ut("span", null, "Move", -1)), $5 = /* @__PURE__ */ As(() => /* @__PURE__ */ Ut("span", null, "Remove", -1)), y5 = { class: "section" }, b5 = {
  key: 0,
  class: "alarm-list"
}, sl = window.Vue.ref, V5 = window.Vue.watch, C5 = window.Vue.reactive, S5 = window.Vue.markRaw, k5 = /* @__PURE__ */ r5({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const o = e, r = S5({
      Add: Kl,
      Delete: um,
      MarkComplete: Il,
      CheckCircle: ws,
      ExitToApp: Td
    }), i = Jl(), a = gn(), u = sl(!1), c = sl(["all"]), f = sl(!1), w = sl(!1), v = C5({
      selectedAlarms: [],
      alarms: o.alarms
    });
    V5(o, () => {
      c.value = ["all"], v.alarms = o.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (E) => {
      v.selectedAlarms.includes(E) ? be.exports.remove(v.selectedAlarms, (O) => O == E) : v.selectedAlarms.push(E);
    }, $ = async (E) => {
      v.selectedAlarms.length ? (await jk(v.selectedAlarms, E), a.getSituation(o.situationId), v.selectedAlarms = [], u.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === o.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), T = async () => {
      y() && (await $w(
        o.situationId,
        v.selectedAlarms
      ) ? a.getSituation(o.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, B = async (E) => {
      y() && (await $w(
        o.situationId,
        v.selectedAlarms
      ) ? await N(E, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, N = async (E, O) => {
      O.length ? await M_(E, O) ? a.getSituation(E) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, D = async (E) => {
      await N(o.situationId, E), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    }, A = (E) => {
      v.alarms = E;
    };
    return (E, O) => (ci(), rl(cm, null, [
      Ut("div", u5, [
        Ut("div", c5, [
          d5,
          ht(it(le), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (k) => w.value = !0)
          }, {
            default: ui(() => [
              ht(it(Y), {
                icon: it(r).Add,
                "aria-hidden": "true",
                class: "icon add"
              }, null, 8, ["icon"]),
              f5
            ]),
            _: 1
          })
        ]),
        Ut("div", h5, [
          Ut("div", p5, [
            ht(Es, {
              list: o.alarms,
              onFilteredList: A,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Ut("div", w5, [
            Ut("div", v5, [
              ht(it(sr), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              ht(it(le), {
                onClick: O[2] || (O[2] = () => $("clear"))
              }, {
                default: ui(() => [
                  ht(it(Y), {
                    icon: it(Il),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  m5
                ]),
                _: 1
              }),
              ht(it(le), {
                onClick: O[3] || (O[3] = () => $("ack"))
              }, {
                default: ui(() => [
                  ht(it(Y), {
                    icon: it(ws),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  _5
                ]),
                _: 1
              }),
              ht(it(le), { onClick: S }, {
                default: ui(() => [
                  ht(it(Y), {
                    icon: it(Td),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  g5
                ]),
                _: 1
              }),
              ht(it(le), { onClick: T }, {
                default: ui(() => [
                  ht(it(Y), {
                    icon: it(um),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  $5
                ]),
                _: 1
              })
            ]),
            Ut("div", y5, [
              v.alarms.length > 0 ? (ci(), rl("div", b5, [
                (ci(!0), rl(cm, null, s5(v.alarms, (k) => (ci(), rl("div", {
                  key: k.id
                }, [
                  ht(iR, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": o.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (ci(), i5(Is, { key: 1 }))
            ])
          ])
        ])
      ]),
      ht(Gg, {
        situationId: o.situationId,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: O[4] || (O[4] = () => f.value = !1)
      }, null, 8, ["situationId", "visible"]),
      ht(j8, {
        visible: w.value,
        onAlarmsSelected: D,
        onDrawerAlarmsClosed: O[5] || (O[5] = () => w.value = !1)
      }, null, 8, ["visible"])
    ], 64));
  }
});
const E5 = /* @__PURE__ */ de(k5, [["__scopeId", "data-v-524b0835"]]), I5 = window.Vue.defineComponent, pn = window.Vue.createVNode, Pt = window.Vue.unref, sd = window.Vue.normalizeClass, il = window.Vue.toDisplayString, di = window.Vue.openBlock, fi = window.Vue.createElementBlock, dm = window.Vue.createCommentVNode, A5 = window.Vue.withCtx, nn = window.Vue.createElementVNode, x5 = window.Vue.Fragment, L5 = window.Vue.pushScopeId, T5 = window.Vue.popScopeId, B5 = (e) => (L5("data-v-e980d1e2"), e = e(), T5(), e), M5 = { class: "section" }, D5 = { class: "action-section" }, N5 = { class: "btn-row" }, O5 = { key: 0 }, P5 = { key: 1 }, R5 = {
  key: 0,
  class: "situation-detail"
}, F5 = { class: "situation-info" }, U5 = { class: "id" }, W5 = ["innerHTML"], q5 = /* @__PURE__ */ B5(() => /* @__PURE__ */ nn("p", null, null, -1)), H5 = { class: "boxes" }, z5 = { class: "parameters" }, Y5 = { class: "section memo-boxes" }, G5 = { key: 0 }, j5 = window.Vue.computed, fm = window.Vue.ref, Z5 = window.Vue.watch, K5 = /* @__PURE__ */ I5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const o = e, r = Jl(), i = gn(), a = tt.REJECTED, u = fm(o.situationInfo.status), c = fm(o.situationInfo);
    Z5(o, () => {
      u.value = o.situationInfo.status || "", c.value = o.situationInfo;
    });
    const f = j5(
      () => {
        var v;
        return k_(((v = c.value) == null ? void 0 : v.description) || "");
      }
    ), w = async (v) => {
      var $;
      await B_(
        ($ = o.situationInfo) == null ? void 0 : $.id,
        v.toLowerCase()
      ) ? (u.value = v, i.getSituation(o.situationInfo.id)) : r.showErrorMsg("Error on rejecting the situation");
    };
    return (v, _) => {
      var $, y, T, B, N, D, S, A, E, O, k, R;
      return di(), fi(x5, null, [
        nn("div", M5, [
          nn("div", D5, [
            pn(Sg, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": o.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            nn("div", N5, [
              pn(Pt(le), {
                class: sd(["btn", { rejected: u.value == Pt(a) }]),
                "data-test": "btn-reject",
                onClick: _[0] || (_[0] = (F) => w(Pt(a)))
              }, {
                default: A5(() => [
                  pn(Pt(Y), {
                    icon: Pt(g_),
                    "aria-hidden": "true",
                    class: sd(["icon reject", { rejected: u.value == Pt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Pt(a) ? (di(), fi("span", O5, il(Pt(a)), 1)) : (di(), fi("span", P5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (di(), fi("div", R5, [
            nn("div", {
              class: sd(["severity-line", [`${(y = ($ = c.value) == null ? void 0 : $.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            nn("div", F5, [
              nn("div", U5, [
                nn("div", null, " Situation - " + il((T = c.value) == null ? void 0 : T.id) + " - " + il(c.value.alarms.length) + " alarm(s) affects " + il(Pt(be.exports.size)(Pt(be.exports.groupBy)((B = c.value) == null ? void 0 : B.alarms, "nodeId"))) + " node(s) ", 1),
                pn(Cg, {
                  severity: (N = c.value) == null ? void 0 : N.severity
                }, null, 8, ["severity"])
              ]),
              nn("span", {
                innerHTML: Pt(f),
                "data-test": "situation-description"
              }, null, 8, W5),
              q5,
              nn("div", H5, [
                pn(Wc, {
                  label: "First Event",
                  info: Pt(In)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                pn(Wc, {
                  label: "Last Event",
                  info: Pt(In)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                pn(Wc, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            nn("div", z5, [
              pn(lO, {
                alarms: (D = c.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : dm("", !0),
          nn("div", Y5, [
            pn(xl, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (A = c.value) == null ? void 0 : A.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (E = c.value) == null ? void 0 : E.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            pn(xl, {
              id: (O = c.value) == null ? void 0 : O.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (R = c.value) == null ? void 0 : R.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (di(), fi("div", G5, [
          pn(E5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : dm("", !0)
      ], 64);
    };
  }
});
const J5 = /* @__PURE__ */ de(K5, [["__scopeId", "data-v-e980d1e2"]]);
var X5 = Object.defineProperty, Q5 = Object.defineProperties, e6 = Object.getOwnPropertyDescriptors, hm = Object.getOwnPropertySymbols, t6 = Object.prototype.hasOwnProperty, n6 = Object.prototype.propertyIsEnumerable, pm = (e, o, r) => o in e ? X5(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, Bd = (e, o) => {
  for (var r in o || (o = {}))
    t6.call(o, r) && pm(e, r, o[r]);
  if (hm)
    for (var r of hm(o))
      n6.call(o, r) && pm(e, r, o[r]);
  return e;
}, o6 = (e, o) => Q5(e, e6(o));
const Zg = window.Vue.defineComponent, nr = window.Vue.resolveComponent, vl = window.Vue.openBlock, wm = window.Vue.createBlock, ml = window.Vue.mergeProps, or = window.Vue.withCtx, Kg = window.Vue.createElementBlock, r6 = window.Vue.Fragment, s6 = window.Vue.renderList, i6 = window.Vue.createTextVNode, a6 = window.Vue.toDisplayString, l6 = window.Vue.computed, vm = window.Vue.toRef, hi = window.Vue.createVNode, mm = window.Vue.toHandlers, u6 = window.Vue.renderSlot, c6 = window.Vue.normalizeClass, d6 = window.Vue.createElementVNode;
var Jg = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const f6 = Zg({
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
    FeatherList: Zd,
    FeatherListItem: Mi
  }
});
function h6(e, o, r, i, a, u) {
  const c = nr("FeatherListItem"), f = nr("FeatherList");
  return vl(), wm(f, ml(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: or(() => [
      (vl(!0), Kg(r6, null, s6(e.options, (w, v) => (vl(), wm(c, {
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
        default: or(() => [
          i6(a6(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var p6 = /* @__PURE__ */ Jg(f6, [["render", h6], ["__scopeId", "data-v-eae820da"]]);
const w6 = o6(Bd(Bd({}, Ul), Cs), {
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
}, m6 = Zg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: v6,
  props: w6,
  setup(e, o) {
    Ss(e), Wl(e);
    const r = l6(() => ce("feather-select-input")), { validate: i } = bs(r, vm(e, "modelValue"), e.label, e.schema, vm(e, "error"));
    return Bd({
      inputId: r,
      validate: i
    }, Vs(o.attrs));
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
        const e = this.internalValue, o = this.options.filter((r) => r[this.textProp] === e[this.textProp]);
        if (o && o.length)
          return this.options.indexOf(o[0]);
      }
      return -1;
    },
    icon: () => Gl
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
        const o = String.fromCharCode(e.keyCode);
        this.charsSoFar += o, this.searchAfterDelay();
      }
    },
    searchAfterDelay() {
      ar(this.delayTimeout), this.delayTimeout = ir(() => {
        const e = this.options.filter((o) => o[this.textProp] && o[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Fl,
    InputSubText: ys,
    FeatherMenu: Y_,
    List: p6,
    FeatherIcon: Y
  }
});
function _6(e, o, r, i, a, u) {
  const c = nr("FeatherIcon"), f = nr("InputWrapper"), w = nr("List"), v = nr("FeatherMenu"), _ = nr("InputSubText");
  return vl(), Kg("div", ml(e.inherittedAttrs, { class: "feather-select-container" }), [
    hi(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: or(($) => [
        hi(f, ml({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, mm($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: or(() => [
            u6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: or(() => [
            hi(c, {
              class: c6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: or(() => [
            d6("input", ml(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, mm(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: or(() => [
        hi(w, {
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
    hi(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var g6 = /* @__PURE__ */ Jg(m6, [["render", _6], ["__scopeId", "data-v-ecb32d90"]]);
const $6 = window.Vue.openBlock, y6 = window.Vue.createElementBlock, Xg = window.Vue.createElementVNode;
var b6 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const V6 = {}, C6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S6 = /* @__PURE__ */ Xg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), k6 = /* @__PURE__ */ Xg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), E6 = [
  S6,
  k6
];
function I6(e, o) {
  return $6(), y6("svg", C6, E6);
}
var A6 = /* @__PURE__ */ b6(V6, [["render", I6]]);
const _l = window.Vue.openBlock, Md = window.Vue.createElementBlock, Qg = window.Vue.createElementVNode, x6 = window.Vue.defineComponent, jo = window.Vue.ref, L6 = window.Vue.provide, _m = window.Vue.computed, T6 = window.Vue.onUnmounted, gm = window.Vue.toRef, B6 = window.Vue.resolveComponent, M6 = window.Vue.Fragment, D6 = window.Vue.createBlock, N6 = window.Vue.Teleport, $m = window.Vue.createVNode, O6 = window.Vue.Transition, P6 = window.Vue.withCtx, R6 = window.Vue.normalizeClass, F6 = window.Vue.normalizeStyle, U6 = window.Vue.toDisplayString, W6 = window.Vue.createCommentVNode, q6 = window.Vue.renderSlot, id = window.Vue.nextTick;
var e1 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const H6 = {}, z6 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Y6 = /* @__PURE__ */ Qg("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), G6 = [
  Y6
];
function j6(e, o) {
  return _l(), Md("svg", z6, G6);
}
var Z6 = /* @__PURE__ */ e1(H6, [["render", j6]]), et = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(et || {}), zn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(zn || {});
const K6 = (e, o, r, i = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= o.height + i && c.push(et.top), a >= o.height + i && c.push(et.bottom);
  const f = [];
  u >= o.width + i && f.push(et.right), e.left >= o.width + i && f.push(et.left);
  let w = [...f, ...c];
  return (r === et.top || r === et.bottom) && (w = [...c, ...f]), w.indexOf(r) > -1 ? r : w.length ? w[0] : r;
}, J6 = (e, o, r, i, a = 28) => {
  if (e === et.left || e === et.right)
    return zn.center;
  const u = o.left + o.width / 2, c = window.innerWidth - o.right, f = [], w = u, v = c + o.width / 2, _ = r.width - a, $ = r.width / 2;
  return w >= $ && v >= $ && f.push(zn.center), v >= _ && f.push(zn.left), w >= _ && f.push(zn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
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
    default: () => zn.center
  },
  enterDelay: {
    type: Number,
    default: 400
  },
  exitDelay: {
    type: Number,
    default: 400
  }
}, Q6 = x6({
  props: X6,
  setup(e) {
    const o = jo(!1), r = jo(!1), i = ce("feather-tooltip-trigger"), a = ce("feather-tooltip"), u = "data-feather-tooltip";
    L6("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      ar(c), o.value || (c = ir(N, e.enterDelay));
    }, w = () => {
      ar(c), c = ir(D, e.exitDelay);
    }, v = (Ve) => {
      Ve.keyCode === te.ESCAPE && (Ve.preventDefault(), D(!0));
    }, _ = _m(() => ({
      [u]: i,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = jo(document), T = z_(y, () => D(!0));
    T6(() => D(!0));
    const B = () => document.getElementById(a), N = () => {
      r.value = !1, o.value = !0, id(() => {
        const Ve = B();
        we(Ve), o.value = !1, id(() => {
          r.value = !0, o.value = !0, T.value = !0;
        });
      });
    }, D = (Ve = !1) => {
      R.value = "", k.value = "", F.value = "", z.value = "", o.value = !1, Ve && (r.value = !1), T.value = !1;
    }, S = gm(e, "placement"), A = gm(e, "pointerAlignment"), E = 8, O = 24, k = jo(""), R = jo(""), F = jo(""), z = jo(""), ke = _m(() => z.value ? "p-" + z.value : !1), we = (Ve) => {
      const xe = document.querySelector(`[${u}=${i}]`);
      if (!xe) {
        console.log("trigger not found");
        return;
      }
      id(() => {
        const ve = xe.getBoundingClientRect(), _e = Ve.getBoundingClientRect(), oe = K6(ve, _e, S.value, E), Ne = J6(oe, ve, _e, A.value, O);
        F.value = Ne.toString(), z.value = oe.toString();
        let Le = 0, je = 0;
        if ((oe === et.left || oe === et.right) && (Le = ve.top + ve.height / 2 - _e.height / 2, oe === et.left && (je = ve.left - _e.width - E), oe === et.right && (je = ve.right)), oe === et.top || oe === et.bottom) {
          Le = ve.top - _e.height - E, oe === et.bottom && (Le = ve.bottom);
          const ko = ve.left + ve.width / 2;
          switch (Ne) {
            case zn.center:
              je = ko - _e.width / 2;
              break;
            case zn.left:
              je = ko - O;
              break;
            case zn.right:
              je = ko - _e.width + O;
              break;
          }
        }
        k.value = Le.toString() + "px", R.value = je.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: o,
      animate: r,
      alignmentClass: F,
      placementClass: ke,
      top: k,
      left: R,
      tooltipID: a
    };
  },
  components: {
    Pointer: Z6
  }
}), e7 = ["id"];
function t7(e, o, r, i, a, u) {
  const c = B6("Pointer");
  return _l(), Md(M6, null, [
    (_l(), D6(N6, { to: "body" }, [
      $m(O6, { css: e.animate }, {
        default: P6(() => [
          e.show ? (_l(), Md("div", {
            key: 0,
            class: R6(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: F6({ left: e.left, top: e.top })
          }, [
            Qg("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, U6(e.title), 9, e7),
            $m(c, { class: "tooltip-pointer" })
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
var ym = /* @__PURE__ */ e1(Q6, [["render", t7], ["__scopeId", "data-v-3da6b22e"]]);
const n7 = window.Vue.defineComponent, ad = window.Vue.normalizeStyle, ld = window.Vue.createElementVNode, pi = window.Vue.unref, bm = window.Vue.toHandlers, Vm = window.Vue.mergeProps, Cm = window.Vue.withCtx, Sm = window.Vue.createVNode, o7 = window.Vue.renderList, r7 = window.Vue.Fragment, wi = window.Vue.openBlock, vi = window.Vue.createElementBlock, km = window.Vue.normalizeClass, Em = window.Vue.createCommentVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const s7 = { class: "row" }, i7 = /* @__PURE__ */ n7({
  __name: "Timeline",
  props: {
    alarm: null,
    proportion: null,
    minStart: null,
    events: null
  },
  setup(e) {
    const o = e, r = new Date().getTime(), i = (u, c) => u ? (Number(c) - Number(u)) * o.proportion : 0, a = (u) => u ? (Number(u) - Number(o.minStart)) * o.proportion : 0;
    return (u, c) => (wi(), vi("div", s7, [
      ld("div", {
        class: "line-gray",
        style: ad({
          width: a(o.events[0].createTime) + "px"
        })
      }, null, 4),
      Sm(pi(ym), {
        title: pi(In)(e.alarm.firstEventTime)
      }, {
        default: Cm(({ attrs: f, on: w }) => [
          ld("div", Vm({ class: "circle" }, f, bm(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (wi(!0), vi(r7, null, o7(o.events, (f, w) => (wi(), vi("div", {
        class: "event-trim",
        key: f.id
      }, [
        o.events[w + 1] ? (wi(), vi("div", {
          key: 0,
          class: km(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: ad({
            width: i(f.createTime, o.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : Em("", !0),
        Sm(pi(ym), {
          title: pi(In)(e.alarm.firstEventTime)
        }, {
          default: Cm(({ attrs: v, on: _ }) => [
            o.events[w + 1] ? (wi(), vi("div", Vm({ key: 0 }, v, bm(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : Em("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      ld("div", {
        class: km(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: ad({
          width: i(e.events[e.events.length - 1].createTime, pi(r)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const a7 = /* @__PURE__ */ de(i7, [["__scopeId", "data-v-3341d12d"]]), l7 = window.Vue.openBlock, u7 = window.Vue.createElementBlock, t1 = window.Vue.createElementVNode;
var c7 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const d7 = {}, f7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, h7 = /* @__PURE__ */ t1("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), p7 = /* @__PURE__ */ t1("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), w7 = [
  h7,
  p7
];
function v7(e, o) {
  return l7(), u7("svg", f7, w7);
}
var m7 = /* @__PURE__ */ c7(d7, [["render", v7]]);
const _7 = window.Vue.defineComponent, Dd = window.Vue.createElementVNode, g7 = window.Vue.renderList, Im = window.Vue.Fragment, ud = window.Vue.openBlock, cd = window.Vue.createElementBlock, $7 = window.Vue.normalizeClass, y7 = window.Vue.unref, Am = window.Vue.toDisplayString, b7 = window.Vue.pushScopeId, V7 = window.Vue.popScopeId, C7 = (e) => (b7("data-v-2e087f7b"), e = e(), V7(), e), S7 = /* @__PURE__ */ C7(() => /* @__PURE__ */ Dd("strong", null, "Events:", -1)), k7 = /* @__PURE__ */ _7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const o = e;
    return (r, i) => (ud(), cd(Im, null, [
      S7,
      (ud(!0), cd(Im, null, g7(o.events, (a) => (ud(), cd("div", {
        class: "event-description",
        key: a.id
      }, [
        Dd("div", {
          class: $7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Dd("div", null, Am(y7(In)(a.createTime)) + " - " + Am(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const E7 = /* @__PURE__ */ de(k7, [["__scopeId", "data-v-2e087f7b"]]), I7 = window.Vue.defineComponent, A7 = window.Vue.normalizeClass, Ft = window.Vue.createElementVNode, Qr = window.Vue.toDisplayString, Vt = window.Vue.unref, es = window.Vue.createVNode, n1 = window.Vue.createTextVNode, x7 = window.Vue.renderList, xm = window.Vue.Fragment, qn = window.Vue.openBlock, Zo = window.Vue.createElementBlock, Lm = window.Vue.createBlock, al = window.Vue.createCommentVNode, L7 = window.Vue.normalizeStyle, T7 = window.Vue.pushScopeId, B7 = window.Vue.popScopeId, M7 = (e) => (T7("data-v-01717d0d"), e = e(), B7(), e), D7 = { class: "section detail" }, N7 = { class: "id" }, O7 = {
  key: 0,
  class: "section"
}, P7 = /* @__PURE__ */ M7(() => /* @__PURE__ */ Ft("div", { class: "id" }, "Alarms", -1)), R7 = { class: "action-btns" }, F7 = { class: "zoom" }, U7 = /* @__PURE__ */ n1(" Zoom "), W7 = { class: "times" }, q7 = {
  key: 0,
  class: "timeline-container"
}, H7 = { class: "alarm-id" }, z7 = {
  key: 0,
  class: "panel"
}, ho = window.Vue.ref, Y7 = window.Vue.watch, G7 = /* @__PURE__ */ I7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, k;
    const o = e, r = gn(), i = ho(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = ho(a[0]), c = ho(o.width), f = ho(o.width), w = ho(new Date().getTime()), v = () => {
      var R, F;
      if (!o.situation.events) {
        const z = (F = (R = o.situation) == null ? void 0 : R.alarms) == null ? void 0 : F.map((ke) => ke.id);
        r.getEvents(o.situation.id, z);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = ho(o.situation.alarms), y = ho(
      ((k = be.exports.minBy((O = o.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), T = ho(_());
    Y7(o, () => {
      var R, F;
      y.value = ((F = be.exports.minBy((R = o.situation) == null ? void 0 : R.alarms, "firstEventTime")) == null ? void 0 : F.firstEventTime) || new Date().getTime(), v(), c.value = f.value, T.value = _(), $.value = o.situation.alarms, u.value = a[0];
    });
    const B = (R) => {
      if ((R == null ? void 0 : R.id) === 1 && ($.value = o.situation.alarms), (R == null ? void 0 : R.id) === 2) {
        const F = be.exports.groupBy($.value, "severity"), z = [
          ...F.CRITICAL || [],
          ...F.MAJOR || [],
          ...F.MINOR || [],
          ...F.WARNING || [],
          ...F.NORMAL || [],
          ...F.CLEARED || [],
          ...F.INDETERMINATE || []
        ];
        $.value = z.filter((ke) => ke);
      }
      if ((R == null ? void 0 : R.id) === 3) {
        const F = be.exports.reverse(
          be.exports.sortBy(
            o.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        $.value = F;
      }
    }, N = () => {
      c.value += 100, T.value = _();
    }, D = () => {
      c.value -= 100, T.value = _();
    }, S = () => {
      c.value = f.value, T.value = _();
    }, A = (R) => {
      i.value = R;
    }, E = () => {
      i.value = 0;
    };
    return (R, F) => {
      var z, ke;
      return qn(), Zo(xm, null, [
        Ft("div", D7, [
          Ft("div", {
            class: A7(["severity-line", [`${(ke = (z = o.situation) == null ? void 0 : z.severity) == null ? void 0 : ke.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ft("div", null, [
            Ft("div", N7, "Situation " + Qr(o.situation.id), 1),
            Ft("div", null, " Duration: " + Qr(Vt(Ol)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (qn(), Zo("div", O7, [
          P7,
          Ft("div", R7, [
            es(Vt(g6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                F[0] || (F[0] = (we) => u.value = we),
                B
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ft("div", F7, [
              U7,
              Ft("div", null, [
                es(Vt(Y), {
                  icon: Vt(A6),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"]),
                es(Vt(Y), {
                  icon: Vt(ag),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                es(Vt(Y), {
                  icon: Vt(m7),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (qn(), Zo("div", {
            key: 0,
            class: "alarms",
            style: L7({
              width: f.value + 50 + "px"
            })
          }, [
            Ft("div", W7, [
              Ft("div", null, Qr(Vt(In)(y.value)), 1),
              Ft("div", null, Qr(Vt(In)(w.value)), 1)
            ]),
            e.situation.events ? (qn(), Zo("div", q7, [
              (qn(!0), Zo(xm, null, x7($.value, (we) => (qn(), Zo("div", {
                class: "timeline",
                key: we.id
              }, [
                Ft("div", H7, [
                  n1(Qr(we.nodeLabel) + " - " + Qr(we.id) + " ", 1),
                  i.value === we.id ? (qn(), Lm(Vt(Y), {
                    key: 0,
                    icon: Vt(Gl),
                    class: "zoom-icon expand",
                    onClick: E
                  }, null, 8, ["icon"])) : (qn(), Lm(Vt(Y), {
                    key: 1,
                    icon: Vt(O_),
                    class: "zoom-icon expand",
                    onClick: () => A(we.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                es(a7, {
                  alarm: we,
                  proportion: T.value,
                  "min-start": y.value,
                  events: o.situation.events[we.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === we.id ? (qn(), Zo("div", z7, [
                  es(E7, {
                    events: o.situation.events[we.id]
                  }, null, 8, ["events"])
                ])) : al("", !0)
              ]))), 128))
            ])) : al("", !0)
          ], 4)) : al("", !0)
        ])) : al("", !0)
      ], 64);
    };
  }
});
const j7 = /* @__PURE__ */ de(G7, [["__scopeId", "data-v-01717d0d"]]), Z7 = window.Vue.defineComponent, kt = window.Vue.createElementVNode, wn = window.Vue.unref, ut = window.Vue.createTextVNode, ts = window.Vue.withCtx, Pe = window.Vue.openBlock, K7 = window.Vue.createBlock, ll = window.Vue.createCommentVNode, po = window.Vue.createVNode, Ue = window.Vue.createElementBlock, J7 = window.Vue.resolveComponent, Ko = window.Vue.toDisplayString, Tm = window.Vue.renderList, Bm = window.Vue.Fragment, X7 = window.Vue.pushScopeId, Q7 = window.Vue.popScopeId, xs = (e) => (X7("data-v-3e9f0cbf"), e = e(), Q7(), e), e9 = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, t9 = { class: "header" }, n9 = /* @__PURE__ */ xs(() => /* @__PURE__ */ kt("h3", null, "AI Suggestions", -1)), o9 = { class: "header-actions" }, r9 = /* @__PURE__ */ ut(" Re-evaluate "), s9 = /* @__PURE__ */ ut(" Refresh "), i9 = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, a9 = /* @__PURE__ */ xs(() => /* @__PURE__ */ kt("span", null, "Loading\u2026", -1)), l9 = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, u9 = /* @__PURE__ */ xs(() => /* @__PURE__ */ kt("span", null, "Requesting a fresh analysis\u2026", -1)), c9 = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, d9 = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, f9 = /* @__PURE__ */ ut(" The LLM integration is currently disabled. Enable it on the "), h9 = /* @__PURE__ */ ut("configuration page"), p9 = /* @__PURE__ */ ut(" to start generating suggestions for new situations. "), w9 = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, v9 = /* @__PURE__ */ ut(" No API key is configured. Add one on the "), m9 = /* @__PURE__ */ ut("configuration page"), _9 = /* @__PURE__ */ ut(" to enable AI suggestions. "), g9 = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, $9 = /* @__PURE__ */ ut(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), y9 = /* @__PURE__ */ xs(() => /* @__PURE__ */ kt("strong", null, "Re-evaluate", -1)), b9 = /* @__PURE__ */ ut(" above to trigger one now. "), V9 = [
  $9,
  y9,
  b9
], C9 = {
  key: 3,
  class: "reanalyze-error",
  "data-test": "ai-reanalyze-error"
}, S9 = {
  key: 3,
  class: "state-row",
  "data-test": "ai-pending"
}, k9 = {
  key: 4,
  class: "state-row failed",
  "data-test": "ai-failed"
}, E9 = { class: "failed-msg" }, I9 = /* @__PURE__ */ ut(" The last LLM request failed: "), A9 = /* @__PURE__ */ ut(" Retry "), x9 = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, L9 = /* @__PURE__ */ ut(" Could not load suggestions. Please retry. "), T9 = /* @__PURE__ */ ut("Retry"), B9 = {
  key: 6,
  "data-test": "ai-ready"
}, M9 = {
  key: 0,
  class: "meta"
}, D9 = /* @__PURE__ */ ut(" Generated by "), N9 = { class: "section" }, O9 = /* @__PURE__ */ xs(() => /* @__PURE__ */ kt("h4", null, "Probable root causes", -1)), P9 = {
  key: 0,
  "data-test": "ai-root-causes"
}, R9 = {
  key: 1,
  class: "empty"
}, F9 = { class: "section" }, U9 = /* @__PURE__ */ xs(() => /* @__PURE__ */ kt("h4", null, "Possible resolutions", -1)), W9 = {
  key: 0,
  "data-test": "ai-resolutions"
}, q9 = {
  key: 1,
  class: "empty"
}, dd = window.Vue.computed, H9 = window.Vue.onBeforeUnmount, z9 = window.Vue.onMounted, fd = window.Vue.ref, Y9 = /* @__PURE__ */ Z7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const o = e, r = lr(), i = fd("loading"), a = fd(null), u = fd(null), c = 5e3, f = 5 * 60 * 1e3;
    let w = null, v = 0;
    const _ = () => {
      w !== null && (clearInterval(w), w = null);
    }, $ = () => {
      i.value === "pending" && w === null && (v = Date.now(), w = setInterval(async () => {
        if (Date.now() - v > f) {
          _();
          return;
        }
        await y(), i.value !== "pending" && _();
      }, c));
    }, y = async () => {
      const A = await T_(o.situationId);
      if (A === !1) {
        i.value = "error";
        return;
      }
      if (A === null) {
        i.value = "absent", a.value = null;
        return;
      }
      a.value = A, i.value = A.status;
    }, T = async () => {
      i.value = "loading", _(), await y(), $();
    }, B = async () => {
      u.value = null, i.value = "reanalyzing", _();
      const A = await sI(o.situationId);
      if (A === !1) {
        i.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await r.getLLMConfig();
        return;
      }
      a.value = A, i.value = A.status, $();
    };
    z9(async () => {
      r.llmConfig === null && await r.getLLMConfig(), await y(), $();
    }), H9(() => _());
    const N = dd(() => {
      var A;
      return (A = a.value) != null && A.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), D = dd(() => {
      const A = r.llmConfig;
      return !A || !A.enabled ? "disabled" : A.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = dd(
      () => {
        var A, E;
        return ((A = r.llmConfig) == null ? void 0 : A.enabled) === !0 && ((E = r.llmConfig) == null ? void 0 : E.apiKeyPresent) === !0;
      }
    );
    return (A, E) => {
      var k;
      const O = J7("router-link");
      return Pe(), Ue("div", e9, [
        kt("div", t9, [
          n9,
          kt("div", o9, [
            wn(S) ? (Pe(), K7(wn(le), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: i.value === "reanalyzing" || i.value === "pending",
              onClick: B
            }, {
              default: ts(() => [
                r9
              ]),
              _: 1
            }, 8, ["disabled"])) : ll("", !0),
            po(wn(le), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: T
            }, {
              default: ts(() => [
                s9
              ]),
              _: 1
            })
          ])
        ]),
        i.value === "loading" ? (Pe(), Ue("div", i9, [
          po(wn(ds)),
          a9
        ])) : i.value === "reanalyzing" ? (Pe(), Ue("div", l9, [
          po(wn(ds)),
          u9
        ])) : i.value === "absent" ? (Pe(), Ue("div", c9, [
          wn(D) === "disabled" ? (Pe(), Ue("span", d9, [
            f9,
            po(O, { to: "/settings" }, {
              default: ts(() => [
                h9
              ]),
              _: 1
            }),
            p9
          ])) : wn(D) === "no-key" ? (Pe(), Ue("span", w9, [
            v9,
            po(O, { to: "/settings" }, {
              default: ts(() => [
                m9
              ]),
              _: 1
            }),
            _9
          ])) : (Pe(), Ue("span", g9, V9)),
          u.value ? (Pe(), Ue("div", C9, Ko(u.value), 1)) : ll("", !0)
        ])) : i.value === "pending" ? (Pe(), Ue("div", S9, [
          po(wn(ds)),
          kt("span", null, " Analyzing alarms with the LLM\u2026 requested at " + Ko(wn(N)) + ". ", 1)
        ])) : i.value === "failed" ? (Pe(), Ue("div", k9, [
          kt("div", E9, [
            I9,
            kt("code", null, Ko(((k = a.value) == null ? void 0 : k.error) || "unknown error"), 1)
          ]),
          po(wn(le), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: T
          }, {
            default: ts(() => [
              A9
            ]),
            _: 1
          })
        ])) : i.value === "error" ? (Pe(), Ue("div", x9, [
          L9,
          po(wn(le), {
            secondary: "",
            onClick: T
          }, {
            default: ts(() => [
              T9
            ]),
            _: 1
          })
        ])) : i.value === "ready" && a.value ? (Pe(), Ue("div", B9, [
          a.value.completedAt ? (Pe(), Ue("div", M9, [
            D9,
            kt("strong", null, Ko(a.value.model), 1),
            ut(" at " + Ko(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : ll("", !0),
          kt("div", N9, [
            O9,
            a.value.rootCauses.length ? (Pe(), Ue("ol", P9, [
              (Pe(!0), Ue(Bm, null, Tm(a.value.rootCauses, (R, F) => (Pe(), Ue("li", {
                key: `cause-${F}`
              }, Ko(R), 1))), 128))
            ])) : (Pe(), Ue("div", R9, "No root causes returned."))
          ]),
          kt("div", F9, [
            U9,
            a.value.resolutions.length ? (Pe(), Ue("ol", W9, [
              (Pe(!0), Ue(Bm, null, Tm(a.value.resolutions, (R, F) => (Pe(), Ue("li", {
                key: `res-${F}`
              }, Ko(R), 1))), 128))
            ])) : (Pe(), Ue("div", q9, "No resolutions returned."))
          ])
        ])) : ll("", !0)
      ]);
    };
  }
});
const G9 = /* @__PURE__ */ de(Y9, [["__scopeId", "data-v-3e9f0cbf"]]), j9 = window.Vue.openBlock, Z9 = window.Vue.createElementBlock, K9 = window.Vue.createElementVNode;
var J9 = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const X9 = {}, Q9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, eF = /* @__PURE__ */ K9("path", { d: "M18,11H8.83l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L5,12l5.71,5.71a1,1,0,1,0,1.41-1.41L8.83,13H18a1,1,0,0,0,0-2Z" }, null, -1), tF = [
  eF
];
function nF(e, o) {
  return j9(), Z9("svg", Q9, tF);
}
var fs = /* @__PURE__ */ J9(X9, [["render", nF]]);
const o1 = window.Vue.defineComponent, hd = window.Vue.ref, oF = window.Vue.toRef, pd = window.Vue.inject, Mm = window.Vue.watch, rF = window.Vue.nextTick, Dm = window.Vue.openBlock, Nm = window.Vue.createElementBlock, wd = window.Vue.createElementVNode, sF = window.Vue.normalizeClass, Om = window.Vue.renderSlot, Pm = window.Vue.createCommentVNode, vd = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var iF = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const aF = {
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
}, lF = {
  "update:modelValue": (e) => !0,
  closed: () => !0
}, uF = o1({
  emits: lF,
  props: aF,
  setup(e, o) {
    const r = hd(), i = hd(!1), a = hd(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = oF(e, "modelValue"), f = pd("queueSnackbar", !1), w = pd("unqueueSnackbar", !1), v = pd("nextSnackbar", () => {
    }), _ = (N, D) => {
      let S, A, E = D;
      const O = () => {
        !S || (ar(S), S = 0, E -= Date.now() - A);
      }, k = () => {
        S || (A = Date.now(), S = ir(N, E));
      };
      return k(), { pause: O, resume: k };
    }, $ = () => {
      i.value = !1, o.emit("closed"), v && v();
    }, y = (N) => {
      N.keyCode === te.ESCAPE && (a.value = !1);
    }, T = () => {
      r.value.pause();
    }, B = () => {
      a.value && r.value.resume();
    };
    return Mm(c, (N) => {
      N ? rF(() => {
        f === !1 ? a.value = N : f(u, a);
      }) : w === !1 ? a.value = N : w(u);
    }, { immediate: !0 }), Mm(a, (N) => {
      N ? (i.value = !0, r.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (o.emit("update:modelValue", !1), T());
    }), {
      hideTimeout: r,
      contentShow: i,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: $,
      keyPressed: y,
      stopTimer: T,
      resumeTimer: B
    };
  }
}), cF = {
  key: 0,
  class: "feather-snackbar-wrapper"
}, dF = {
  class: "content-wrapper",
  role: "status",
  "aria-live": "polite"
}, fF = {
  key: 0,
  class: "content",
  "data-ref-id": "feather-snackbar-content"
}, hF = {
  class: "button",
  "data-ref-id": "feather-snackbar-button"
};
function pF(e, o, r, i, a, u) {
  return e.modelValue || e.contentShow ? (Dm(), Nm("div", cF, [
    wd("div", {
      class: sF(["feather-snackbar", {
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
      wd("div", dF, [
        e.contentShow ? (Dm(), Nm("div", fF, [
          Om(e.$slots, "default", {}, void 0, !0)
        ])) : Pm("", !0)
      ]),
      wd("div", hF, [
        Om(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Pm("", !0);
}
var eu = /* @__PURE__ */ iF(uF, [["render", pF], ["__scopeId", "data-v-5cf64a62"]]);
const wF = {
  target: {
    type: String,
    default: "body"
  },
  relative: {
    type: Boolean,
    default: !1
  }
};
o1({
  props: wF,
  setup() {
    let e, o = [];
    const r = () => {
      e && (e.val.value = !0);
    }, i = (c, f) => {
      const w = { id: c, val: f };
      e ? o.push(w) : (e = w, r());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : o = o.filter((f) => f.id != c);
    }, u = () => {
      o.length ? (e = o.shift(), r()) : e = void 0;
    };
    return vd("queueSnackbar", i), vd("unqueueSnackbar", a), vd("nextSnackbar", u), {
      curr: e,
      queue: o,
      showSnackbar: r,
      queueSnackbar: i,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const vF = window.Vue.defineComponent, De = window.Vue.unref, at = window.Vue.createVNode, Li = window.Vue.createElementVNode, Ct = window.Vue.withCtx, Jo = window.Vue.openBlock, md = window.Vue.createBlock, Rm = window.Vue.createCommentVNode, Di = window.Vue.createTextVNode, ul = window.Vue.createElementBlock, Fm = window.Vue.toDisplayString, mF = window.Vue.pushScopeId, _F = window.Vue.popScopeId, uf = (e) => (mF("data-v-a5b2d880"), e = e(), _F(), e), gF = { id: "cont" }, $F = { class: "btns-navigation" }, yF = /* @__PURE__ */ uf(() => /* @__PURE__ */ Li("span", null, "Situation List", -1)), bF = /* @__PURE__ */ uf(() => /* @__PURE__ */ Li("span", null, "Show Previous Situation ", -1)), VF = /* @__PURE__ */ uf(() => /* @__PURE__ */ Li("span", null, "Show Next Situation", -1)), CF = { key: 1 }, SF = {
  key: 0,
  class: "detail"
}, kF = /* @__PURE__ */ Di("Details"), EF = /* @__PURE__ */ Di("Metrics"), IF = /* @__PURE__ */ Di("AI Suggestions"), AF = {
  key: 1,
  class: "noSituation"
}, xF = /* @__PURE__ */ Di("dismiss"), Xo = window.Vue.ref, Um = window.Vue.watch, LF = window.Vue.onMounted, TF = window.VueRouter.useRoute, BF = /* @__PURE__ */ vF({
  __name: "SituationDetail",
  setup(e) {
    const o = So(), r = TF(), i = parseInt(r.params.id), a = Xo(i), u = gn(), c = Jl(), f = Xo(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Xo(), v = Xo(), _ = Xo(!0), $ = Xo(
      u.filteredSituations.findIndex((D) => D === a.value)
    ), y = Xo(!1);
    Um(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), LF(() => {
      var S;
      const D = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = D - 90;
    });
    const T = () => {
      o.push({
        name: "situations"
      });
    }, B = (D) => {
      const S = $.value, A = u.filteredSituations[S + D];
      o.push({
        name: "situationDetail",
        params: {
          id: A
        }
      });
    };
    Um(r, () => {
      a.value = parseInt(r.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((D) => D == a.value);
    }), c.$subscribe((D, S) => {
      y.value = S.showError;
    });
    const N = (D) => {
      f.value = D || 0;
    };
    return (D, S) => (Jo(), ul("div", gF, [
      Li("div", $F, [
        at(De(le), {
          primary: "",
          onClick: S[0] || (S[0] = () => T())
        }, {
          default: Ct(() => [
            at(De(Y), {
              icon: De(fs),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            yF
          ]),
          _: 1
        }),
        Li("div", null, [
          at(De(le), {
            disabled: !De(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => B(-1))
          }, {
            default: Ct(() => [
              at(De(Y), {
                icon: De(fs),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              bF
            ]),
            _: 1
          }, 8, ["disabled"]),
          at(De(le), {
            disabled: !De(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => B(1))
          }, {
            default: Ct(() => [
              VF,
              at(De(Y), {
                icon: De(fs),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (Jo(), md(De(ds), {
        key: 0,
        class: "spinner"
      })) : (Jo(), ul("div", CF, [
        w.value ? (Jo(), ul("div", SF, [
          at(De(N3), { "onUpdate:modelValue": N }, {
            tabs: Ct(() => [
              at(De(Fc), null, {
                default: Ct(() => [
                  kF
                ]),
                _: 1
              }),
              at(De(Fc), null, {
                default: Ct(() => [
                  EF
                ]),
                _: 1
              }),
              at(De(Fc), { "data-test": "ai-suggestions-tab" }, {
                default: Ct(() => [
                  IF
                ]),
                _: 1
              })
            ]),
            default: Ct(() => [
              at(De(Uc), { class: "panel" }, {
                default: Ct(() => [
                  at(J5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              at(De(Uc), { class: "panel" }, {
                default: Ct(() => [
                  v.value && f.value == 1 ? (Jo(), md(j7, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Rm("", !0)
                ]),
                _: 1
              }),
              at(De(Uc), { class: "panel" }, {
                default: Ct(() => [
                  f.value == 2 ? (Jo(), md(G9, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : Rm("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Jo(), ul("div", AF, " Error. The situation " + Fm(De(i)) + " does not exist. ", 1))
      ])),
      at(De(eu), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (A) => y.value = A),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Ct(() => [
          at(De(le), {
            onClick: S[3] || (S[3] = (A) => y.value = !1),
            text: ""
          }, {
            default: Ct(() => [
              xF
            ]),
            _: 1
          })
        ]),
        default: Ct(() => [
          Di(Fm(De(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const MF = /* @__PURE__ */ de(BF, [["__scopeId", "data-v-a5b2d880"]]), DF = window.Vue.defineComponent, Qe = window.Vue.unref, en = window.Vue.createVNode, vt = window.Vue.createElementVNode, ns = window.Vue.withCtx, os = window.Vue.openBlock, mi = window.Vue.createElementBlock, NF = window.Vue.createCommentVNode, OF = window.Vue.toDisplayString, cf = window.Vue.createTextVNode, PF = window.Vue.normalizeClass, RF = window.Vue.renderList, FF = window.Vue.Fragment, UF = window.Vue.createBlock, WF = window.Vue.pushScopeId, qF = window.Vue.popScopeId, Ni = (e) => (WF("data-v-1a57a9f3"), e = e(), qF(), e), HF = { class: "container" }, zF = /* @__PURE__ */ Ni(() => /* @__PURE__ */ vt("span", null, "Situation List", -1)), YF = /* @__PURE__ */ Ni(() => /* @__PURE__ */ vt("h2", null, "New Situation", -1)), GF = { class: "form" }, jF = { class: "fields" }, ZF = {
  key: 0,
  class: "errorList"
}, KF = { class: "footer" }, JF = /* @__PURE__ */ Ni(() => /* @__PURE__ */ vt("span", null, "Clear", -1)), XF = /* @__PURE__ */ Ni(() => /* @__PURE__ */ vt("span", null, "Add Situation", -1)), QF = { class: "alarm-column" }, eU = { class: "header-alarms" }, tU = /* @__PURE__ */ Ni(() => /* @__PURE__ */ vt("h3", null, "Add Unassociated Alarms", -1)), nU = /* @__PURE__ */ cf(" Total Alarms Added: "), oU = { class: "total" }, rU = { class: "list" }, sU = { class: "filters" }, iU = {
  key: 0,
  class: "alarms"
}, aU = /* @__PURE__ */ cf(" Error on creating new situation :( "), lU = /* @__PURE__ */ cf("dismiss"), wo = window.Vue.ref, uU = window.Vue.watch, cU = /* @__PURE__ */ DF({
  __name: "AddSituation",
  setup(e) {
    const o = So(), r = gn(), i = wo(), a = wo(""), u = wo(), c = wo(""), f = wo([]), w = wo(!1), v = wo(), _ = wo(r.unassignedAlarms);
    _.value.length || r.getUnassignedAlarms(), uU(
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
      w.value = !1, be.exports.includes(f.value, S) ? be.exports.remove(f.value, (A) => A === S) : f.value.push(S);
    }, T = () => {
      const S = "This field should not be empty";
      let A = !0;
      return i.value || (a.value = S, A = !1), u.value || (c.value = S, A = !1), f.value.length < 2 && (w.value = !0, A = !1), A;
    }, B = async () => {
      if (T()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: i.value
        };
        await aI(S) ? o.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, N = () => {
      i.value = "", u.value = "", f.value = [], _.value = r.unassignedAlarms;
    }, D = (S) => {
      _.value = S;
    };
    return (S, A) => (os(), mi("div", HF, [
      en(Qe(le), {
        primary: "",
        onClick: A[0] || (A[0] = () => $()),
        class: "back-btn"
      }, {
        default: ns(() => [
          en(Qe(Y), {
            icon: Qe(fs),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          zF
        ]),
        _: 1
      }),
      YF,
      vt("div", GF, [
        vt("div", jF, [
          en(Qe(Al), {
            modelValue: i.value,
            "onUpdate:modelValue": A[1] || (A[1] = (E) => i.value = E),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          en(Qe(Al), {
            modelValue: u.value,
            "onUpdate:modelValue": A[2] || (A[2] = (E) => u.value = E),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (os(), mi("div", ZF, " You must add at least 2 alarms. ")) : NF("", !0),
          vt("div", KF, [
            en(Qe(le), {
              class: "btn",
              onClick: N
            }, {
              default: ns(() => [
                en(Qe(Y), {
                  icon: Qe(gs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                JF
              ]),
              _: 1
            }),
            en(Qe(le), {
              class: "btn-add",
              onClick: B
            }, {
              default: ns(() => [
                en(Qe(Y), {
                  icon: Qe(Kl),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                XF
              ]),
              _: 1
            })
          ])
        ]),
        vt("div", QF, [
          vt("div", eU, [
            tU,
            vt("div", null, [
              vt("div", {
                class: PF(["totalAlarms", { errorList: w.value }])
              }, [
                nU,
                vt("span", oU, OF(Qe(f).length), 1)
              ], 2)
            ])
          ]),
          vt("div", rU, [
            vt("div", sU, [
              en(Es, {
                list: Qe(r).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (os(), mi("div", iU, [
              (os(!0), mi(FF, null, RF(_.value, (E) => (os(), mi("div", {
                key: E.id,
                class: "alarm-card"
              }, [
                en(lf, {
                  selected: Qe(be.exports.includes)(Qe(f), E.id),
                  alarm: E,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (os(), UF(Is, { key: 1 }))
          ])
        ])
      ]),
      en(Qe(eu), {
        modelValue: v.value,
        "onUpdate:modelValue": A[4] || (A[4] = (E) => v.value = E),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: ns(() => [
          en(Qe(le), {
            onClick: A[3] || (A[3] = (E) => v.value = !1),
            text: ""
          }, {
            default: ns(() => [
              lU
            ]),
            _: 1
          })
        ]),
        default: ns(() => [
          aU
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const dU = /* @__PURE__ */ de(cU, [["__scopeId", "data-v-1a57a9f3"]]), fU = window.Vue.defineComponent, hU = window.Vue.createElementVNode, pU = window.Vue.createTextVNode, wU = window.Vue.unref, vU = window.Vue.withCtx, mU = window.Vue.createVNode, _U = window.Vue.Fragment, gU = window.Vue.openBlock, $U = window.Vue.createElementBlock, yU = window.Vue.pushScopeId, bU = window.Vue.popScopeId, VU = (e) => (yU("data-v-bcb7dcc6"), e = e(), bU(), e), CU = /* @__PURE__ */ VU(() => /* @__PURE__ */ hU("div", { class: "main" }, "Something bad is happening...", -1)), SU = /* @__PURE__ */ pU(" Reload "), kU = /* @__PURE__ */ fU({
  __name: "ErrorPage",
  setup(e) {
    const o = So(), r = () => {
      o.push({ name: "situations" });
    };
    return (i, a) => (gU(), $U(_U, null, [
      CU,
      mU(wU(le), {
        primary: "",
        onClick: r
      }, {
        default: vU(() => [
          SU
        ]),
        _: 1
      })
    ], 64));
  }
});
const EU = /* @__PURE__ */ de(kU, [["__scopeId", "data-v-bcb7dcc6"]]), IU = window.Vue.defineComponent, pt = window.Vue.unref, vn = window.Vue.createVNode, go = window.Vue.createElementVNode, _i = window.Vue.withCtx, Qo = window.Vue.openBlock, Wm = window.Vue.createBlock, AU = window.Vue.renderList, xU = window.Vue.Fragment, gi = window.Vue.createElementBlock, LU = window.Vue.toDisplayString, r1 = window.Vue.createTextVNode, TU = window.Vue.pushScopeId, BU = window.Vue.popScopeId, df = (e) => (TU("data-v-6078e4ad"), e = e(), BU(), e), MU = { class: "container" }, DU = { class: "nav-btns" }, NU = /* @__PURE__ */ df(() => /* @__PURE__ */ go("span", null, "Situation List", -1)), OU = /* @__PURE__ */ df(() => /* @__PURE__ */ go("h2", null, "List Unassociated Alarms", -1)), PU = { class: "content" }, RU = { class: "filters" }, FU = { class: "list" }, UU = { class: "action-btns" }, WU = /* @__PURE__ */ df(() => /* @__PURE__ */ go("span", null, "Move", -1)), qU = { key: 1 }, HU = {
  key: 0,
  class: "alarms"
}, zU = /* @__PURE__ */ r1("dismiss"), vo = window.Vue.ref, YU = window.Vue.watch, GU = window.Vue.markRaw, jU = /* @__PURE__ */ IU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const o = GU({
      ArrowBack: fs,
      ExitToApp: Td
    }), r = So(), i = gn();
    i.getUnassignedAlarms(), i.getSituations(), i.nodes.length || i.getNodes();
    const a = vo([]), u = vo([]), c = vo(!1), f = vo(!1), w = vo(""), v = vo(!1), _ = vo(!1), $ = vo(!0);
    YU(
      () => i.unassignedAlarms,
      () => {
        a.value = i.unassignedAlarms, $.value = !1;
      }
    );
    const y = (A) => {
      be.exports.includes(u.value, A) ? be.exports.remove(u.value, (E) => E === A) : u.value.push(A);
    }, T = () => {
      c.value ? u.value = a.value.map((A) => A.id) : u.value = [];
    }, B = async (A) => {
      await M_(A, u.value) ? i.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, N = () => {
      r.push({
        name: "situations"
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (A) => {
      a.value = A;
    };
    return (A, E) => (Qo(), gi("div", MU, [
      go("div", DU, [
        vn(pt(le), {
          primary: "",
          onClick: E[0] || (E[0] = () => N())
        }, {
          default: _i(() => [
            vn(pt(Y), {
              icon: pt(o).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NU
          ]),
          _: 1
        }),
        vn(dg)
      ]),
      OU,
      go("div", PU, [
        go("div", RU, [
          vn(Es, {
            list: pt(i).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        go("div", FU, [
          go("div", UU, [
            vn(pt(sr), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                E[1] || (E[1] = (O) => c.value = O),
                T
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            vn(pt(le), { onClick: D }, {
              default: _i(() => [
                vn(pt(Y), {
                  icon: pt(o).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                WU
              ]),
              _: 1
            })
          ]),
          $.value ? (Qo(), Wm(pt(ds), {
            key: 0,
            class: "spinner"
          })) : (Qo(), gi("div", qU, [
            pt(a).length ? (Qo(), gi("div", HU, [
              (Qo(!0), gi(xU, null, AU(pt(a), (O) => (Qo(), gi("div", {
                key: O.id,
                class: "card"
              }, [
                vn(lf, {
                  selected: pt(be.exports.includes)(pt(u), O.id),
                  alarm: O,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Qo(), Wm(Is, { key: 1 }))
          ]))
        ])
      ]),
      vn(Gg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: B,
        onDrawerClosed: E[2] || (E[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      vn(pt(eu), {
        modelValue: v.value,
        "onUpdate:modelValue": E[4] || (E[4] = (O) => v.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: _i(() => [
          vn(pt(le), {
            onClick: E[3] || (E[3] = (O) => v.value = !1),
            text: ""
          }, {
            default: _i(() => [
              zU
            ]),
            _: 1
          })
        ]),
        default: _i(() => [
          r1(LU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const ZU = /* @__PURE__ */ de(jU, [["__scopeId", "data-v-6078e4ad"]]), KU = window.Vue.defineComponent, _d = window.Vue.unref, JU = window.Vue.createVNode, XU = window.Vue.createElementVNode, QU = window.Vue.withCtx, eW = window.Vue.openBlock, tW = window.Vue.createBlock, nW = window.Vue.pushScopeId, oW = window.Vue.popScopeId, rW = (e) => (nW("data-v-17251e76"), e = e(), oW(), e), sW = /* @__PURE__ */ rW(() => /* @__PURE__ */ XU("span", null, "Situation List", -1)), iW = window.Vue.markRaw, aW = /* @__PURE__ */ KU({
  __name: "SituationListBtn",
  setup(e) {
    const o = So(), r = iW({
      ArrowBack: fs
    }), i = () => {
      o.push({
        name: "situations"
      });
    };
    return (a, u) => (eW(), tW(_d(le), {
      primary: "",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: QU(() => [
        JU(_d(Y), {
          icon: _d(r).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        sW
      ]),
      _: 1
    }));
  }
});
const lW = /* @__PURE__ */ de(aW, [["__scopeId", "data-v-17251e76"]]);
var uW = Object.defineProperty, cW = Object.defineProperties, dW = Object.getOwnPropertyDescriptors, qm = Object.getOwnPropertySymbols, fW = Object.prototype.hasOwnProperty, hW = Object.prototype.propertyIsEnumerable, Hm = (e, o, r) => o in e ? uW(e, o, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[o] = r, ls = (e, o) => {
  for (var r in o || (o = {}))
    fW.call(o, r) && Hm(e, r, o[r]);
  if (qm)
    for (var r of qm(o))
      hW.call(o, r) && Hm(e, r, o[r]);
  return e;
}, pW = (e, o) => cW(e, dW(o));
const wW = window.Vue.defineComponent, zm = window.Vue.toRef, vW = window.Vue.computed, mW = window.Vue.ref, Ym = window.Vue.resolveComponent, Gm = window.Vue.openBlock, jm = window.Vue.createElementBlock, Zm = window.Vue.mergeProps, Km = window.Vue.createVNode, _W = window.Vue.normalizeClass, cl = window.Vue.withCtx, Jm = window.Vue.renderSlot, gW = window.Vue.createElementVNode, $W = window.Vue.toHandlers, yW = window.Vue.toDisplayString, bW = window.Vue.createCommentVNode, VW = ls(ls({
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
}, Ul), Cs), CW = {
  "update:modelValue": (e) => !0
};
var SW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const kW = wW({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: CW,
  props: VW,
  setup(e, o) {
    Ss(e), Wl(e);
    const r = zm(e, "id"), i = vW(() => r.value ? r.value : ce("feather-input-label")), a = mW(), { validate: u } = bs(i, a, e.label, e.schema, zm(e, "error"));
    return ls({
      inputId: i,
      internalValue: a,
      validate: u
    }, Vs(o.attrs));
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
      const e = ls({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), pW(ls(ls({}, e), this.listeners), {
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
    InputSubText: ys,
    InputWrapper: Fl
  }
}), EW = ["maxlength"], IW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function AW(e, o, r, i, a, u) {
  const c = Ym("InputWrapper"), f = Ym("InputSubText");
  return Gm(), jm("div", Zm(e.inherittedAttrs, { class: "feather-input-container" }), [
    Km(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: _W(["feather-input-content", e.contentCls])
    }, {
      pre: cl(() => [
        Jm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: cl(() => [
        Jm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: cl(() => [
        gW("input", Zm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, $W(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, EW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Km(f, { id: e.descriptionId }, {
      right: cl(() => [
        e.maxlength ? (Gm(), jm("div", IW, yW(e.charCount), 1)) : bW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var mo = /* @__PURE__ */ SW(kW, [["render", AW], ["__scopeId", "data-v-bf37b0d6"]]);
const xW = window.Vue.openBlock, LW = window.Vue.createElementBlock, ff = window.Vue.createElementVNode;
var TW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const BW = {}, MW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DW = /* @__PURE__ */ ff("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), NW = /* @__PURE__ */ ff("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), OW = /* @__PURE__ */ ff("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), PW = [
  DW,
  NW,
  OW
];
function RW(e, o) {
  return xW(), LW("svg", MW, PW);
}
var FW = /* @__PURE__ */ TW(BW, [["render", RW]]);
const UW = window.Vue.openBlock, WW = window.Vue.createElementBlock, s1 = window.Vue.createElementVNode;
var qW = (e, o) => {
  const r = e.__vccOpts || e;
  for (const [i, a] of o)
    r[i] = a;
  return r;
};
const HW = {}, zW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YW = /* @__PURE__ */ s1("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), GW = /* @__PURE__ */ s1("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), jW = [
  YW,
  GW
];
function ZW(e, o) {
  return UW(), WW("svg", zW, jW);
}
var KW = /* @__PURE__ */ qW(HW, [["render", ZW]]);
const JW = window.Vue.defineComponent, $e = window.Vue.createVNode, P = window.Vue.createElementVNode, W = window.Vue.unref, pe = window.Vue.createTextVNode, St = window.Vue.withCtx, wt = window.Vue.openBlock, tn = window.Vue.createElementBlock, Rt = window.Vue.createCommentVNode, gd = window.Vue.createBlock, We = window.Vue.toDisplayString, XW = window.Vue.normalizeClass, Xm = window.Vue.Fragment, QW = window.Vue.createStaticVNode, eq = window.Vue.pushScopeId, tq = window.Vue.popScopeId, Se = (e) => (eq("data-v-f9b0cbe4"), e = e(), tq(), e), nq = { class: "container" }, oq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), rq = { class: "section" }, sq = { class: "title" }, iq = /* @__PURE__ */ pe(" Choose the correlation engine that ALEC will use (see "), aq = ["href"], lq = /* @__PURE__ */ pe(" for more information): "), uq = /* @__PURE__ */ pe("Clustering"), cq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", { class: "hellinger" }, [
  /* @__PURE__ */ P("strong", null, "Hellinger distance")
], -1)), dq = /* @__PURE__ */ pe(" LLM Based "), fq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), hq = {
  class: "section",
  "data-test": "llm-section"
}, pq = { class: "title-row" }, wq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", { class: "title" }, "LLM Root Cause Analysis", -1)), vq = ["aria-expanded"], mq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", { class: "llm-help" }, [
  /* @__PURE__ */ pe(" When a new situation is created, ALEC asks a large language model to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. ALEC talks to any OpenAI-compatible API \u2014 the defaults below use Anthropic's Claude API directly ("),
  /* @__PURE__ */ P("code", null, "https://api.anthropic.com/v1/"),
  /* @__PURE__ */ pe(", model "),
  /* @__PURE__ */ P("code", null, "claude-sonnet-4-6"),
  /* @__PURE__ */ pe("). The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ")
], -1)), _q = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, gq = /* @__PURE__ */ QW('<p class="help-intro" data-v-f9b0cbe4> ALEC works with any service that speaks the OpenAI-compatible <code data-v-f9b0cbe4>/chat/completions</code> API. The two setups below are the ones most people use: a hosted provider (Claude, the shipped default) or a model running locally on your own hardware (LM Studio). The endpoint, model and API key are stored on the OpenNMS server and apply to every user of the plugin. </p><div class="help-scenario" data-v-f9b0cbe4><strong data-v-f9b0cbe4>Option A \u2014 Claude via Anthropic (hosted, the default)</strong><p data-v-f9b0cbe4> ALEC ships pointed at <a href="https://www.anthropic.com/api" target="_blank" rel="noopener noreferrer" data-v-f9b0cbe4>Anthropic&#39;s Claude API</a>. The <em data-v-f9b0cbe4>Reset to default</em> links next to Endpoint and Model restore this exact configuration. </p><ol data-v-f9b0cbe4><li data-v-f9b0cbe4> Create an Anthropic account at <a href="https://console.anthropic.com/" target="_blank" rel="noopener noreferrer" data-v-f9b0cbe4>console.anthropic.com</a>, generate an API key (it starts with <code data-v-f9b0cbe4>sk-ant-</code>), and add a payment method. </li><li data-v-f9b0cbe4> Leave <em data-v-f9b0cbe4>Endpoint</em> at <code data-v-f9b0cbe4>https://api.anthropic.com/v1/</code> (ALEC appends <code data-v-f9b0cbe4>/chat/completions</code>). </li><li data-v-f9b0cbe4> Leave <em data-v-f9b0cbe4>Model</em> at <code data-v-f9b0cbe4>claude-sonnet-4-6</code> \u2014 Anthropic&#39;s native model id (dashes, no vendor prefix). The dotted, <code data-v-f9b0cbe4>anthropic/claude-sonnet-4.6</code> form is an OpenRouter spelling and is rejected by <code data-v-f9b0cbe4>api.anthropic.com</code>. </li><li data-v-f9b0cbe4> Paste the key below, click <em data-v-f9b0cbe4>Validate key</em>, then <em data-v-f9b0cbe4>Save Changes</em>. The key is stored on the OpenNMS server and is never returned to the browser. Using a hosted provider bills your account per token \u2014 see <em data-v-f9b0cbe4>Cost</em> below. </li></ol><p class="help-note" data-v-f9b0cbe4> Prefer a different provider? Set the Endpoint to its base URL and use a matching key \u2014 an <a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer" data-v-f9b0cbe4>OpenRouter</a> key (<code data-v-f9b0cbe4>sk-or-</code>) for <code data-v-f9b0cbe4>https://openrouter.ai/api/v1</code> with a model like <code data-v-f9b0cbe4>anthropic/claude-sonnet-4.6</code>, or an OpenAI key for <code data-v-f9b0cbe4>https://api.openai.com/v1</code> with <code data-v-f9b0cbe4>gpt-4o</code>. </p></div><hr class="help-divider" data-v-f9b0cbe4><div class="help-scenario" data-v-f9b0cbe4><strong data-v-f9b0cbe4>Option B \u2014 LM Studio (local, free, private)</strong><p data-v-f9b0cbe4> Running the model on your own hardware means no data leaves your network and there are no provider charges. <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer" data-v-f9b0cbe4>LM Studio</a>, <a href="https://ollama.com/" target="_blank" rel="noopener noreferrer" data-v-f9b0cbe4>Ollama</a> and vLLM all expose the same OpenAI-compatible API. </p><ol data-v-f9b0cbe4><li data-v-f9b0cbe4> In LM Studio, open the <em data-v-f9b0cbe4>Developer</em> tab, load a model that supports <em data-v-f9b0cbe4>tool/function calling</em> (for example a recent Llama, Qwen, or Gemma instruct model), and toggle the server to <em data-v-f9b0cbe4>Running</em>. </li><li data-v-f9b0cbe4> Set <em data-v-f9b0cbe4>Endpoint</em> to the base URL the server reports \u2014 for LM Studio that is <code data-v-f9b0cbe4>http://127.0.0.1:1234/v1</code>. The OpenNMS server must be able to reach that host and port: if OpenNMS runs on a different machine, use the model host&#39;s LAN address instead of <code data-v-f9b0cbe4>127.0.0.1</code> and enable <em data-v-f9b0cbe4>Serve on Local Network</em> in LM Studio. </li><li data-v-f9b0cbe4> Set <em data-v-f9b0cbe4>Model</em> to the server&#39;s model identifier (copy it from the loaded-model list), for example <code data-v-f9b0cbe4>google/gemma-4-e4b</code>. </li><li data-v-f9b0cbe4> Local servers ignore the API key but the field must be non-empty \u2014 paste any placeholder such as <code data-v-f9b0cbe4>sk-local</code>. Click <em data-v-f9b0cbe4>Validate key</em>, then <em data-v-f9b0cbe4>Save Changes</em>. </li></ol></div><hr class="help-divider" data-v-f9b0cbe4><strong data-v-f9b0cbe4>Requirements &amp; troubleshooting</strong><ul data-v-f9b0cbe4><li data-v-f9b0cbe4><strong data-v-f9b0cbe4>Tool calling is required.</strong> ALEC forces the model to answer by calling a single <code data-v-f9b0cbe4>report_suggestions</code> function. A model without function-calling support fails validation with <em data-v-f9b0cbe4>model did not call report_suggestions</em> \u2014 pick a different model. </li><li data-v-f9b0cbe4><strong data-v-f9b0cbe4>Reasoning models need room.</strong> Models that &quot;think&quot; before answering (Gemma, DeepSeek-R1, the o-series) spend output tokens on reasoning first. ALEC requests a generous output budget, but on a local server also make sure the model&#39;s <em data-v-f9b0cbe4>context length</em> is large enough (a small context can cut the model off before it emits the tool call). If validation passes but situations report <em data-v-f9b0cbe4>model did not call report_suggestions</em>, raise the context window or choose a less verbose model. </li><li data-v-f9b0cbe4><strong data-v-f9b0cbe4>Cost.</strong> Hosted providers bill per token \u2014 a single situation is typically a few hundred to a few thousand tokens. Local models are free. Track 30-day usage in the panel below after you save. </li></ul>', 7), $q = [
  gq
], yq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("strong", null, "LLM Enabled Root Cause Analysis", -1)), bq = /* @__PURE__ */ pe(" Automatically AI Evaluate new situations "), Vq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", { class: "caption-inline" }, " When off, new situations are not analyzed automatically \u2014 click Re-evaluate on the AI Suggestions tab to trigger an analysis on demand. ", -1)), Cq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, Sq = { class: "llm-field-block" }, kq = { class: "llm-field-header" }, Eq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("span", { class: "llm-field-label" }, "Endpoint (OpenAI-compatible base URL)", -1)), Iq = ["disabled"], Aq = /* @__PURE__ */ pe(" Reset to default "), xq = { class: "llm-field-block" }, Lq = { class: "llm-field-header" }, Tq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("span", { class: "llm-field-label" }, "Model", -1)), Bq = ["disabled"], Mq = /* @__PURE__ */ pe(" Reset to default "), Dq = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, Nq = { class: "llm-prompt-header" }, Oq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("span", { class: "llm-prompt-label" }, "System prompt", -1)), Pq = ["disabled"], Rq = /* @__PURE__ */ pe(" Reset to default "), Fq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. The situation's alarms are appended automatically \u2014 don't paste alarm data here. ", -1)), Uq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ pe(" Your API key must come from the same provider as the Endpoint above \u2014 an Anthropic key ("),
  /* @__PURE__ */ P("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ pe(") for "),
  /* @__PURE__ */ P("code", null, "api.anthropic.com"),
  /* @__PURE__ */ pe(" (the default), an OpenRouter key ("),
  /* @__PURE__ */ P("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ pe(") for "),
  /* @__PURE__ */ P("code", null, "openrouter.ai"),
  /* @__PURE__ */ pe(", or an OpenAI key for "),
  /* @__PURE__ */ P("code", null, "api.openai.com"),
  /* @__PURE__ */ pe(". ")
], -1)), Wq = { class: "llm-key-row" }, qq = /* @__PURE__ */ pe(" Clear Key "), Hq = { class: "llm-validate-row" }, zq = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, Yq = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, Gq = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), jq = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, Zq = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, Kq = { class: "usage-summary" }, Jq = { class: "usage-label" }, Xq = ["title"], Qq = ["title"], eH = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, tH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("dt", null, "Input", -1)), nH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("dt", null, "Output", -1)), oH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("dt", null, "Cache read", -1)), rH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("dt", null, "Cache create", -1)), sH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("dt", null, "Calls", -1)), iH = { class: "muted" }, aH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("dt", null, "Cache hit", -1)), lH = { class: "pricing-note" }, uH = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, cH = { class: "title-row" }, dH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("div", { class: "title" }, "Correlation variables", -1)), fH = ["aria-expanded"], hH = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, pH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("strong", null, "Alpha (\u03B1)", -1)), wH = /* @__PURE__ */ pe(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), vH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("strong", null, "Beta (\u03B2)", -1)), mH = /* @__PURE__ */ pe(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), _H = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("code", null, "[0, 1]", -1)), gH = /* @__PURE__ */ pe(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), $H = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("strong", null, "Epsilon (\u03B5)", -1)), yH = /* @__PURE__ */ pe(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), bH = { "data-test": "help-hellinger-w" }, VH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("strong", null, "Hellinger w", -1)), CH = /* @__PURE__ */ pe(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), SH = { "data-test": "help-hellinger-bias" }, kH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("strong", null, "Hellinger bias", -1)), EH = /* @__PURE__ */ pe(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), IH = { class: "variables" }, AH = { class: "action-row" }, xH = /* @__PURE__ */ pe(" Close All Open Situations "), LH = /* @__PURE__ */ pe(" Re-Evaluate All Open Alarms "), TH = /* @__PURE__ */ Se(() => /* @__PURE__ */ P("span", null, "Save Changes", -1)), BH = /* @__PURE__ */ pe("dismiss"), er = window.Vue.computed, MH = window.Vue.markRaw, DH = window.Vue.onMounted, Be = window.Vue.ref, NH = /* @__PURE__ */ JW({
  __name: "AccountSettings",
  setup(e) {
    var mt, jn, Pi, zt, Ls, Ri, Zn, _t, Kn, xo, Fi, Jn, Ui, Xn, Ln, mr, _r, gr, $r, yr, br, Vr, Cr, Sr, Wi;
    const o = (se) => se >= 1e6 ? (se / 1e6).toFixed(1) + "M" : se >= 1e3 ? (se / 1e3).toFixed(1) + "K" : String(se), r = (se) => se < 0.01 ? "~$0.00" : "~$" + se.toFixed(2), i = MH({
      MarkComplete: Il,
      Help: FW,
      Restore: KW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = lr(), c = Be(((mt = u.engineInfo) == null ? void 0 : mt.engineName) || tt.ENGINE_DBSCAN), f = Be(
      u.engineInfo ? u.engineInfo.distanceMeasureName === tt.HELLINGER_OPTION : !0
    ), w = Be((Pi = (jn = u.engineInfo) == null ? void 0 : jn.alpha) != null ? Pi : a.alpha), v = Be((Ls = (zt = u.engineInfo) == null ? void 0 : zt.beta) != null ? Ls : a.beta), _ = Be((Zn = (Ri = u.engineInfo) == null ? void 0 : Ri.epsilon) != null ? Zn : a.epsilon), $ = Be(
      (Kn = (_t = u.engineInfo) == null ? void 0 : _t.hellingerW) != null ? Kn : a.hellingerW
    ), y = Be(
      (Fi = (xo = u.engineInfo) == null ? void 0 : xo.hellingerBias) != null ? Fi : a.hellingerBias
    ), T = er(() => c.value === tt.ENGINE_DBSCAN), B = er(() => T.value && f.value), N = Be((Ui = (Jn = u.llmConfig) == null ? void 0 : Jn.enabled) != null ? Ui : !1), D = Be((Ln = (Xn = u.llmConfig) == null ? void 0 : Xn.autoEvaluate) != null ? Ln : !0), S = "https://api.anthropic.com/v1/", A = "claude-sonnet-4-6", E = Be((_r = (mr = u.llmConfig) == null ? void 0 : mr.baseUrl) != null ? _r : S), O = Be(($r = (gr = u.llmConfig) == null ? void 0 : gr.model) != null ? $r : A), k = Be((br = (yr = u.llmConfig) == null ? void 0 : yr.systemPrompt) != null ? br : ""), R = Be((Cr = (Vr = u.llmConfig) == null ? void 0 : Vr.defaultSystemPrompt) != null ? Cr : ""), F = er(
      () => R.value.length > 0 && k.value.trim() !== R.value.trim()
    ), z = () => {
      k.value = R.value;
    }, ke = er(
      () => E.value.trim() !== S
    ), we = er(
      () => O.value.trim() !== A
    ), Ve = () => {
      E.value = S;
    }, xe = () => {
      O.value = A;
    }, ve = Be(""), _e = Be((Wi = (Sr = u.llmConfig) == null ? void 0 : Sr.apiKeyPresent) != null ? Wi : !1), oe = Be(!1), Ne = Be(!1), Le = Be(null), je = er(
      () => ve.value.trim().length === 0 && (!_e.value || oe.value)
    ), ko = async () => {
      Le.value = null, Ne.value = !0;
      try {
        const se = {
          enabled: N.value,
          autoEvaluate: D.value,
          baseUrl: E.value.trim(),
          model: O.value.trim()
        }, K = ve.value.trim();
        K.length > 0 && (se.apiKey = K), Le.value = await rI(se);
      } finally {
        Ne.value = !1;
      }
    }, Eo = er(
      () => (!_e.value || oe.value) && ve.value.trim().length === 0
    ), Ht = () => {
      ve.value = "", oe.value = !0, _e.value = !1, N.value = !1;
    }, dr = Be(!1), fr = Be(!1), hr = Be(!1), xn = Be(!1), Io = Be(""), pr = Be(!1);
    DH(async () => {
      if (u.llmConfig === null) {
        const se = await u.getLLMConfig();
        se && (N.value = se.enabled, D.value = se.autoEvaluate, E.value = se.baseUrl || S, O.value = se.model || A, R.value = se.defaultSystemPrompt || "", k.value = se.systemPrompt || se.defaultSystemPrompt || "", _e.value = se.apiKeyPresent);
      }
      await u.getLLMUsage(30);
    });
    const Ao = () => {
      w.value = a.alpha, v.value = a.beta, _.value = a.epsilon, $.value = a.hellingerW, y.value = a.hellingerBias;
    }, an = (se, K) => {
      Io.value = se, xn.value = K, hr.value = !0;
    }, tu = () => {
      if (oe.value)
        return {
          enabled: !1,
          autoEvaluate: D.value,
          baseUrl: E.value.trim(),
          model: O.value.trim(),
          systemPrompt: k.value,
          clearApiKey: !0
        };
      const se = ve.value.trim(), K = {
        enabled: N.value,
        autoEvaluate: D.value,
        baseUrl: E.value.trim(),
        model: O.value.trim(),
        systemPrompt: k.value
      };
      return se.length > 0 && (K.apiKey = se), K;
    }, wr = async () => {
      var qi, Hi, zi, Ms, Yi, Gi, ji, kr, Zi, Er, Ki, Ji, Xi;
      const se = N.value && !oe.value, K = /\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])/i.test(
        E.value
      );
      if (se && !K && !window.confirm(
        `LLM Root Cause Analysis is enabled.

ALEC will send each new situation to the configured LLM endpoint (${E.value.trim()}, model ${O.value.trim()}). This calls a third-party provider with your API key and may incur usage charges billed by that provider. You are responsible for any costs on the associated account.

Continue and save?`
      ))
        return;
      const re = {
        alpha: Number(w.value),
        beta: Number(v.value),
        epsilon: Number(_.value)
      };
      f.value && (re.hellingerW = Number($.value), re.hellingerBias = Number(y.value));
      const Ts = await u.setEngineInfo(
        c.value,
        f.value,
        re
      ), Bs = await u.setLLMConfig(tu());
      Bs && (ve.value = "", oe.value = !1, _e.value = (Hi = (qi = u.llmConfig) == null ? void 0 : qi.apiKeyPresent) != null ? Hi : !1, N.value = (Ms = (zi = u.llmConfig) == null ? void 0 : zi.enabled) != null ? Ms : !1, D.value = (Gi = (Yi = u.llmConfig) == null ? void 0 : Yi.autoEvaluate) != null ? Gi : !0, E.value = (kr = (ji = u.llmConfig) == null ? void 0 : ji.baseUrl) != null ? kr : S, O.value = (Er = (Zi = u.llmConfig) == null ? void 0 : Zi.model) != null ? Er : A, (Ki = u.llmConfig) != null && Ki.defaultSystemPrompt && (R.value = u.llmConfig.defaultSystemPrompt), k.value = (Xi = (Ji = u.llmConfig) == null ? void 0 : Ji.systemPrompt) != null ? Xi : k.value, u.getLLMUsage(30)), Ts && Bs ? (u.getEngineInfo(), an("The settings were saved!", !1)) : an(
        Ts && !Bs ? "Engine settings saved, but LLM configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, vr = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const se = await lI();
      an(
        se ? "All open situations were closed." : "Failed to close situations.",
        !se
      );
    }, Oi = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const se = await uI();
      an(
        se ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !se
      );
    };
    return (se, K) => (wt(), tn(Xm, null, [
      $e(lW),
      P("div", nq, [
        oq,
        P("div", rq, [
          P("div", sq, [
            iq,
            P("a", {
              target: "_blank",
              href: W(tt).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, aq),
            lq
          ]),
          $e(W(ig), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": K[1] || (K[1] = (re) => c.value = re),
            label: "",
            hideLabel: ""
          }, {
            default: St(() => [
              $e(W(xd), {
                class: "radio-item",
                value: W(tt).ENGINE_DBSCAN
              }, {
                default: St(() => [
                  uq
                ]),
                _: 1
              }, 8, ["value"]),
              $e(W(sr), {
                modelValue: f.value,
                "onUpdate:modelValue": K[0] || (K[0] = (re) => f.value = re),
                disabled: !W(T),
                class: "checkbox"
              }, {
                default: St(() => [
                  cq
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              $e(W(xd), {
                class: "radio-item",
                value: W(tt).ENGINE_LLM,
                disabled: "",
                "data-test": "engine-llm"
              }, {
                default: St(() => [
                  dq
                ]),
                _: 1
              }, 8, ["value"]),
              fq
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        P("div", hq, [
          P("div", pq, [
            wq,
            P("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": fr.value,
              "aria-label": "How to get an API key",
              "data-test": "llm-key-help",
              onClick: K[2] || (K[2] = (re) => fr.value = !fr.value)
            }, [
              $e(W(Y), {
                icon: W(i).Help
              }, null, 8, ["icon"])
            ], 8, vq)
          ]),
          mq,
          fr.value ? (wt(), tn("div", _q, $q)) : Rt("", !0),
          $e(W(sr), {
            modelValue: N.value,
            "onUpdate:modelValue": K[3] || (K[3] = (re) => N.value = re),
            disabled: W(Eo),
            class: "checkbox",
            "data-test": "llm-enabled"
          }, {
            default: St(() => [
              yq
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          $e(W(sr), {
            modelValue: D.value,
            "onUpdate:modelValue": K[4] || (K[4] = (re) => D.value = re),
            disabled: !N.value,
            class: "checkbox sub-checkbox",
            "data-test": "llm-auto-evaluate"
          }, {
            default: St(() => [
              bq,
              Vq
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          W(Eo) ? (wt(), tn("div", Cq, " Enter an API key to enable. ")) : Rt("", !0),
          P("div", Sq, [
            P("div", kq, [
              Eq,
              P("button", {
                type: "button",
                class: "llm-prompt-reset",
                disabled: !W(ke),
                "data-test": "llm-base-url-reset",
                onClick: Ve
              }, [
                $e(W(Y), {
                  icon: W(i).Restore,
                  class: "reset-inline-icon"
                }, null, 8, ["icon"]),
                Aq
              ], 8, Iq)
            ]),
            $e(W(mo), {
              modelValue: E.value,
              "onUpdate:modelValue": K[5] || (K[5] = (re) => E.value = re),
              label: "Endpoint (OpenAI-compatible base URL)",
              hideLabel: "",
              "data-test": "llm-base-url",
              class: "llm-text-input"
            }, null, 8, ["modelValue"])
          ]),
          P("div", xq, [
            P("div", Lq, [
              Tq,
              P("button", {
                type: "button",
                class: "llm-prompt-reset",
                disabled: !W(we),
                "data-test": "llm-model-reset",
                onClick: xe
              }, [
                $e(W(Y), {
                  icon: W(i).Restore,
                  class: "reset-inline-icon"
                }, null, 8, ["icon"]),
                Mq
              ], 8, Bq)
            ]),
            $e(W(mo), {
              modelValue: O.value,
              "onUpdate:modelValue": K[6] || (K[6] = (re) => O.value = re),
              label: "Model",
              hideLabel: "",
              "data-test": "llm-model",
              class: "llm-text-input"
            }, null, 8, ["modelValue"])
          ]),
          P("div", Dq, [
            P("div", Nq, [
              Oq,
              P("button", {
                type: "button",
                class: "llm-prompt-reset",
                disabled: !W(F),
                "data-test": "llm-prompt-reset",
                onClick: z
              }, [
                $e(W(Y), {
                  icon: W(i).Restore,
                  class: "reset-inline-icon"
                }, null, 8, ["icon"]),
                Rq
              ], 8, Pq)
            ]),
            Fq,
            $e(W(Al), {
              modelValue: k.value,
              "onUpdate:modelValue": K[7] || (K[7] = (re) => k.value = re),
              label: "System prompt",
              hideLabel: "",
              rows: "12",
              "data-test": "llm-system-prompt",
              class: "llm-prompt-textarea"
            }, null, 8, ["modelValue"])
          ]),
          Uq,
          P("div", Wq, [
            $e(W(mo), {
              modelValue: ve.value,
              "onUpdate:modelValue": K[8] || (K[8] = (re) => ve.value = re),
              type: "password",
              autocomplete: "new-password",
              label: _e.value && !oe.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
              "data-test": "llm-api-key",
              class: "llm-key-input"
            }, null, 8, ["modelValue", "label"]),
            _e.value && !oe.value ? (wt(), gd(W(le), {
              key: 0,
              secondary: "",
              "data-test": "llm-clear-key",
              onClick: Ht
            }, {
              default: St(() => [
                qq
              ]),
              _: 1
            })) : Rt("", !0)
          ]),
          P("div", Hq, [
            $e(W(le), {
              secondary: "",
              disabled: Ne.value || W(je),
              "data-test": "llm-validate-btn",
              onClick: ko
            }, {
              default: St(() => [
                pe(We(Ne.value ? "Validating\u2026" : "Validate key"), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            W(je) ? (wt(), tn("span", zq, " Enter an API key to validate. ")) : Le.value ? (wt(), tn("span", {
              key: 1,
              class: XW(["llm-validate-result", Le.value.ok ? "is-ok" : "is-error"]),
              "data-test": "llm-validate-result"
            }, [
              $e(W(Y), {
                icon: Le.value.ok ? W(i).MarkComplete : W(i).Help,
                class: "result-icon"
              }, null, 8, ["icon"]),
              pe(" " + We(Le.value.message), 1)
            ], 2)) : Rt("", !0)
          ]),
          _e.value && !oe.value ? (wt(), tn("div", Yq, [
            $e(W(Y), {
              icon: W(i).MarkComplete,
              class: "saved-icon"
            }, null, 8, ["icon"]),
            Gq
          ])) : Rt("", !0),
          oe.value ? (wt(), tn("div", jq, " Stored API key will be removed on save. ")) : Rt("", !0),
          W(u).llmUsage ? (wt(), tn("div", Zq, [
            P("div", Kq, [
              P("span", Jq, "Last " + We(W(u).llmUsage.daysWindow) + " days:", 1),
              P("span", {
                class: "usage-tokens",
                title: `${W(u).llmUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "llm-usage-tokens"
              }, We(o(W(u).llmUsage.totalTokens)) + " tokens ", 9, Xq),
              P("span", {
                class: "usage-cost",
                title: W(u).llmUsage.pricingNote,
                "data-test": "llm-usage-cost"
              }, " (" + We(r(W(u).llmUsage.estimatedCostUsd)) + ") ", 9, Qq),
              P("button", {
                type: "button",
                class: "usage-toggle",
                onClick: K[9] || (K[9] = (re) => pr.value = !pr.value),
                "data-test": "llm-usage-toggle"
              }, We(pr.value ? "hide details" : "show details"), 1)
            ]),
            pr.value ? (wt(), tn("dl", eH, [
              P("div", null, [
                tH,
                P("dd", null, We(o(W(u).llmUsage.inputTokens)), 1)
              ]),
              P("div", null, [
                nH,
                P("dd", null, We(o(W(u).llmUsage.outputTokens)), 1)
              ]),
              P("div", null, [
                oH,
                P("dd", null, We(o(W(u).llmUsage.cacheReadInputTokens)), 1)
              ]),
              P("div", null, [
                rH,
                P("dd", null, We(o(W(u).llmUsage.cacheCreationInputTokens)), 1)
              ]),
              P("div", null, [
                sH,
                P("dd", null, [
                  pe(We(W(u).llmUsage.calls) + " ", 1),
                  P("span", iH, "(" + We(W(u).llmUsage.successfulCalls) + " ok / " + We(W(u).llmUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              P("div", null, [
                aH,
                P("dd", null, We((W(u).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              P("div", lH, We(W(u).llmUsage.pricingNote), 1)
            ])) : Rt("", !0)
          ])) : Rt("", !0)
        ]),
        W(T) ? (wt(), tn("div", uH, [
          P("div", cH, [
            dH,
            P("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": dr.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: K[10] || (K[10] = (re) => dr.value = !dr.value)
            }, [
              $e(W(Y), {
                icon: W(i).Help
              }, null, 8, ["icon"])
            ], 8, fH),
            P("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: Ao
            }, [
              $e(W(Y), {
                icon: W(i).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          dr.value ? (wt(), tn("div", hH, [
            P("ul", null, [
              P("li", null, [
                pH,
                wH,
                P("em", null, "Default: " + We(a.alpha), 1)
              ]),
              P("li", null, [
                vH,
                mH,
                _H,
                gH,
                P("em", null, "Default: " + We(a.beta), 1)
              ]),
              P("li", null, [
                $H,
                yH,
                P("em", null, "Default: " + We(a.epsilon), 1)
              ]),
              W(B) ? (wt(), tn(Xm, { key: 0 }, [
                P("li", bH, [
                  VH,
                  CH,
                  P("em", null, "Default: " + We(a.hellingerW), 1)
                ]),
                P("li", SH, [
                  kH,
                  EH,
                  P("em", null, "Default: " + We(a.hellingerBias), 1)
                ])
              ], 64)) : Rt("", !0)
            ])
          ])) : Rt("", !0),
          P("div", IH, [
            $e(W(mo), {
              modelValue: w.value,
              "onUpdate:modelValue": K[11] || (K[11] = (re) => w.value = re),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            $e(W(mo), {
              modelValue: v.value,
              "onUpdate:modelValue": K[12] || (K[12] = (re) => v.value = re),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            $e(W(mo), {
              modelValue: _.value,
              "onUpdate:modelValue": K[13] || (K[13] = (re) => _.value = re),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            W(B) ? (wt(), gd(W(mo), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": K[14] || (K[14] = (re) => $.value = re),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Rt("", !0),
            W(B) ? (wt(), gd(W(mo), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": K[15] || (K[15] = (re) => y.value = re),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Rt("", !0)
          ])
        ])) : Rt("", !0),
        P("div", AH, [
          $e(W(le), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: vr
          }, {
            default: St(() => [
              xH
            ]),
            _: 1
          }),
          $e(W(le), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Oi
          }, {
            default: St(() => [
              LH
            ]),
            _: 1
          }),
          $e(W(le), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: wr
          }, {
            default: St(() => [
              $e(W(Y), {
                icon: W(i).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              TH
            ]),
            _: 1
          })
        ]),
        $e(W(eu), {
          modelValue: hr.value,
          "onUpdate:modelValue": K[17] || (K[17] = (re) => hr.value = re),
          right: "",
          error: xn.value,
          timeout: 6e3
        }, {
          button: St(() => [
            $e(W(le), {
              onClick: K[16] || (K[16] = (re) => hr.value = !1),
              text: ""
            }, {
              default: St(() => [
                BH
              ]),
              _: 1
            })
          ]),
          default: St(() => [
            pe(We(Io.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const OH = /* @__PURE__ */ de(NH, [["__scopeId", "data-v-f9b0cbe4"]]), PH = window.VueRouter.createRouter, RH = window.VueRouter.createWebHistory, FH = async () => {
  const e = lr();
  e.userId || await e.getUserRole();
}, i1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const o = window.VRouter || a1;
      await lr().getUserRole(), o.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => FH(),
    component: l3
  },
  {
    path: "/situations/:id",
    name: "situationDetail",
    component: MF
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
      await lr().getEngineInfo();
    },
    component: OH
  }
], $d = window.VRouter;
if ($d) {
  const e = "Plugin-alecUiExtension", o = $d.hasRoute(e) ? e : "Plugin";
  for (const r of i1) {
    const { path: i, name: a, component: u, beforeEnter: c } = r;
    $d.addRoute(o, {
      path: i.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const a1 = PH({
  history: RH(),
  routes: i1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = PS;
