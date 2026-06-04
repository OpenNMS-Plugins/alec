const he = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
}, ES = {}, IS = window.Vue.resolveComponent, xS = window.Vue.createVNode, AS = window.Vue.openBlock, TS = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const BS = { class: "main" };
function LS(e, r) {
  const o = IS("router-view");
  return AS(), TS("div", BS, [
    xS(o)
  ]);
}
const MS = /* @__PURE__ */ he(ES, [["render", LS], ["__scopeId", "data-v-5d32d140"]]), DS = window.Vue.defineComponent, NS = window.Vue.openBlock, OS = window.Vue.createBlock, PS = /* @__PURE__ */ DS({
  __name: "App",
  setup(e) {
    return (r, o) => (NS(), OS(MS));
  }
});
var Ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function RS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zm = { exports: {} }, Bd = { exports: {} }, Km = function(r, o) {
  return function() {
    for (var a = new Array(arguments.length), u = 0; u < a.length; u++)
      a[u] = arguments[u];
    return r.apply(o, a);
  };
}, FS = Km, Ld = Object.prototype.toString, Md = function(e) {
  return function(r) {
    var o = Ld.call(r);
    return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function lo(e) {
  return e = e.toLowerCase(), function(o) {
    return Md(o) === e;
  };
}
function Dd(e) {
  return Array.isArray(e);
}
function fl(e) {
  return typeof e > "u";
}
function US(e) {
  return e !== null && !fl(e) && e.constructor !== null && !fl(e.constructor) && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
}
var Jm = lo("ArrayBuffer");
function WS(e) {
  var r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && Jm(e.buffer), r;
}
function qS(e) {
  return typeof e == "string";
}
function HS(e) {
  return typeof e == "number";
}
function Xm(e) {
  return e !== null && typeof e == "object";
}
function ol(e) {
  if (Md(e) !== "object")
    return !1;
  var r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
var zS = lo("Date"), YS = lo("File"), GS = lo("Blob"), jS = lo("FileList");
function Nd(e) {
  return Ld.call(e) === "[object Function]";
}
function ZS(e) {
  return Xm(e) && Nd(e.pipe);
}
function KS(e) {
  var r = "[object FormData]";
  return e && (typeof FormData == "function" && e instanceof FormData || Ld.call(e) === r || Nd(e.toString) && e.toString() === r);
}
var JS = lo("URLSearchParams");
function XS(e) {
  return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
}
function QS() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function Od(e, r) {
  if (!(e === null || typeof e > "u"))
    if (typeof e != "object" && (e = [e]), Dd(e))
      for (var o = 0, i = e.length; o < i; o++)
        r.call(null, e[o], o, e);
    else
      for (var a in e)
        Object.prototype.hasOwnProperty.call(e, a) && r.call(null, e[a], a, e);
}
function md() {
  var e = {};
  function r(a, u) {
    ol(e[u]) && ol(a) ? e[u] = md(e[u], a) : ol(a) ? e[u] = md({}, a) : Dd(a) ? e[u] = a.slice() : e[u] = a;
  }
  for (var o = 0, i = arguments.length; o < i; o++)
    Od(arguments[o], r);
  return e;
}
function ek(e, r, o) {
  return Od(r, function(a, u) {
    o && typeof a == "function" ? e[u] = FS(a, o) : e[u] = a;
  }), e;
}
function tk(e) {
  return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e;
}
function nk(e, r, o, i) {
  e.prototype = Object.create(r.prototype, i), e.prototype.constructor = e, o && Object.assign(e.prototype, o);
}
function rk(e, r, o) {
  var i, a, u, c = {};
  r = r || {};
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      u = i[a], c[u] || (r[u] = e[u], c[u] = !0);
    e = Object.getPrototypeOf(e);
  } while (e && (!o || o(e, r)) && e !== Object.prototype);
  return r;
}
function ok(e, r, o) {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= r.length;
  var i = e.indexOf(r, o);
  return i !== -1 && i === o;
}
function sk(e) {
  if (!e)
    return null;
  var r = e.length;
  if (fl(r))
    return null;
  for (var o = new Array(r); r-- > 0; )
    o[r] = e[r];
  return o;
}
var ik = function(e) {
  return function(r) {
    return e && r instanceof e;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), nt = {
  isArray: Dd,
  isArrayBuffer: Jm,
  isBuffer: US,
  isFormData: KS,
  isArrayBufferView: WS,
  isString: qS,
  isNumber: HS,
  isObject: Xm,
  isPlainObject: ol,
  isUndefined: fl,
  isDate: zS,
  isFile: YS,
  isBlob: GS,
  isFunction: Nd,
  isStream: ZS,
  isURLSearchParams: JS,
  isStandardBrowserEnv: QS,
  forEach: Od,
  merge: md,
  extend: ek,
  trim: XS,
  stripBOM: tk,
  inherits: nk,
  toFlatObject: rk,
  kindOf: Md,
  kindOfTest: lo,
  endsWith: ok,
  toArray: sk,
  isTypedArray: ik,
  isFileList: jS
}, Lo = nt;
function Dp(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Qm = function(r, o, i) {
  if (!o)
    return r;
  var a;
  if (i)
    a = i(o);
  else if (Lo.isURLSearchParams(o))
    a = o.toString();
  else {
    var u = [];
    Lo.forEach(o, function(w, v) {
      w === null || typeof w > "u" || (Lo.isArray(w) ? v = v + "[]" : w = [w], Lo.forEach(w, function($) {
        Lo.isDate($) ? $ = $.toISOString() : Lo.isObject($) && ($ = JSON.stringify($)), u.push(Dp(v) + "=" + Dp($));
      }));
    }), a = u.join("&");
  }
  if (a) {
    var c = r.indexOf("#");
    c !== -1 && (r = r.slice(0, c)), r += (r.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return r;
}, ak = nt;
function Sl() {
  this.handlers = [];
}
Sl.prototype.use = function(r, o, i) {
  return this.handlers.push({
    fulfilled: r,
    rejected: o,
    synchronous: i ? i.synchronous : !1,
    runWhen: i ? i.runWhen : null
  }), this.handlers.length - 1;
};
Sl.prototype.eject = function(r) {
  this.handlers[r] && (this.handlers[r] = null);
};
Sl.prototype.forEach = function(r) {
  ak.forEach(this.handlers, function(i) {
    i !== null && r(i);
  });
};
var lk = Sl, uk = nt, ck = function(r, o) {
  uk.forEach(r, function(a, u) {
    u !== o && u.toUpperCase() === o.toUpperCase() && (r[o] = a, delete r[u]);
  });
}, e_ = nt;
function os(e, r, o, i, a) {
  Error.call(this), this.message = e, this.name = "AxiosError", r && (this.code = r), o && (this.config = o), i && (this.request = i), a && (this.response = a);
}
e_.inherits(os, Error, {
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
var t_ = os.prototype, n_ = {};
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
  n_[e] = { value: e };
});
Object.defineProperties(os, n_);
Object.defineProperty(t_, "isAxiosError", { value: !0 });
os.from = function(e, r, o, i, a, u) {
  var c = Object.create(t_);
  return e_.toFlatObject(e, c, function(w) {
    return w !== Error.prototype;
  }), os.call(c, e.message, r, o, i, a), c.name = e.name, u && Object.assign(c, u), c;
};
var ls = os, r_ = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fn = nt;
function dk(e, r) {
  r = r || new FormData();
  var o = [];
  function i(u) {
    return u === null ? "" : fn.isDate(u) ? u.toISOString() : fn.isArrayBuffer(u) || fn.isTypedArray(u) ? typeof Blob == "function" ? new Blob([u]) : Buffer.from(u) : u;
  }
  function a(u, c) {
    if (fn.isPlainObject(u) || fn.isArray(u)) {
      if (o.indexOf(u) !== -1)
        throw Error("Circular reference detected in " + c);
      o.push(u), fn.forEach(u, function(w, v) {
        if (!fn.isUndefined(w)) {
          var _ = c ? c + "." + v : v, $;
          if (w && !c && typeof w == "object") {
            if (fn.endsWith(v, "{}"))
              w = JSON.stringify(w);
            else if (fn.endsWith(v, "[]") && ($ = fn.toArray(w))) {
              $.forEach(function(y) {
                !fn.isUndefined(y) && r.append(_, i(y));
              });
              return;
            }
          }
          a(w, _);
        }
      }), o.pop();
    } else
      r.append(c, i(u));
  }
  return a(e), r;
}
var o_ = dk, lc, Np;
function fk() {
  if (Np)
    return lc;
  Np = 1;
  var e = ls;
  return lc = function(o, i, a) {
    var u = a.config.validateStatus;
    !a.status || !u || u(a.status) ? o(a) : i(new e(
      "Request failed with status code " + a.status,
      [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4],
      a.config,
      a.request,
      a
    ));
  }, lc;
}
var uc, Op;
function hk() {
  if (Op)
    return uc;
  Op = 1;
  var e = nt;
  return uc = e.isStandardBrowserEnv() ? function() {
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
  }(), uc;
}
var pk = function(r) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r);
}, wk = function(r, o) {
  return o ? r.replace(/\/+$/, "") + "/" + o.replace(/^\/+/, "") : r;
}, vk = pk, mk = wk, s_ = function(r, o) {
  return r && !vk(o) ? mk(r, o) : o;
}, cc, Pp;
function _k() {
  if (Pp)
    return cc;
  Pp = 1;
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
  return cc = function(i) {
    var a = {}, u, c, f;
    return i && e.forEach(i.split(`
`), function(v) {
      if (f = v.indexOf(":"), u = e.trim(v.substr(0, f)).toLowerCase(), c = e.trim(v.substr(f + 1)), u) {
        if (a[u] && r.indexOf(u) >= 0)
          return;
        u === "set-cookie" ? a[u] = (a[u] ? a[u] : []).concat([c]) : a[u] = a[u] ? a[u] + ", " + c : c;
      }
    }), a;
  }, cc;
}
var dc, Rp;
function gk() {
  if (Rp)
    return dc;
  Rp = 1;
  var e = nt;
  return dc = e.isStandardBrowserEnv() ? function() {
    var o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), a;
    function u(c) {
      var f = c;
      return o && (i.setAttribute("href", f), f = i.href), i.setAttribute("href", f), {
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
  }(), dc;
}
var fc, Fp;
function kl() {
  if (Fp)
    return fc;
  Fp = 1;
  var e = ls, r = nt;
  function o(i) {
    e.call(this, i == null ? "canceled" : i, e.ERR_CANCELED), this.name = "CanceledError";
  }
  return r.inherits(o, e, {
    __CANCEL__: !0
  }), fc = o, fc;
}
var hc, Up;
function $k() {
  return Up || (Up = 1, hc = function(r) {
    var o = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return o && o[1] || "";
  }), hc;
}
var pc, Wp;
function qp() {
  if (Wp)
    return pc;
  Wp = 1;
  var e = nt, r = fk(), o = hk(), i = Qm, a = s_, u = _k(), c = gk(), f = r_, w = ls, v = kl(), _ = $k();
  return pc = function(y) {
    return new Promise(function(L, N) {
      var D = y.data, S = y.headers, x = y.responseType, I;
      function O() {
        y.cancelToken && y.cancelToken.unsubscribe(I), y.signal && y.signal.removeEventListener("abort", I);
      }
      e.isFormData(D) && e.isStandardBrowserEnv() && delete S["Content-Type"];
      var k = new XMLHttpRequest();
      if (y.auth) {
        var P = y.auth.username || "", R = y.auth.password ? unescape(encodeURIComponent(y.auth.password)) : "";
        S.Authorization = "Basic " + btoa(P + ":" + R);
      }
      var z = a(y.baseURL, y.url);
      k.open(y.method.toUpperCase(), i(z, y.params, y.paramsSerializer), !0), k.timeout = y.timeout;
      function de() {
        if (!!k) {
          var Ve = "getAllResponseHeaders" in k ? u(k.getAllResponseHeaders()) : null, ye = !x || x === "text" || x === "json" ? k.responseText : k.response, Be = {
            data: ye,
            status: k.status,
            statusText: k.statusText,
            headers: Ve,
            config: y,
            request: k
          };
          r(function(Ue) {
            L(Ue), O();
          }, function(Ue) {
            N(Ue), O();
          }, Be), k = null;
        }
      }
      if ("onloadend" in k ? k.onloadend = de : k.onreadystatechange = function() {
        !k || k.readyState !== 4 || k.status === 0 && !(k.responseURL && k.responseURL.indexOf("file:") === 0) || setTimeout(de);
      }, k.onabort = function() {
        !k || (N(new w("Request aborted", w.ECONNABORTED, y, k)), k = null);
      }, k.onerror = function() {
        N(new w("Network Error", w.ERR_NETWORK, y, k, k)), k = null;
      }, k.ontimeout = function() {
        var ye = y.timeout ? "timeout of " + y.timeout + "ms exceeded" : "timeout exceeded", Be = y.transitional || f;
        y.timeoutErrorMessage && (ye = y.timeoutErrorMessage), N(new w(
          ye,
          Be.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED,
          y,
          k
        )), k = null;
      }, e.isStandardBrowserEnv()) {
        var se = (y.withCredentials || c(z)) && y.xsrfCookieName ? o.read(y.xsrfCookieName) : void 0;
        se && (S[y.xsrfHeaderName] = se);
      }
      "setRequestHeader" in k && e.forEach(S, function(ye, Be) {
        typeof D > "u" && Be.toLowerCase() === "content-type" ? delete S[Be] : k.setRequestHeader(Be, ye);
      }), e.isUndefined(y.withCredentials) || (k.withCredentials = !!y.withCredentials), x && x !== "json" && (k.responseType = y.responseType), typeof y.onDownloadProgress == "function" && k.addEventListener("progress", y.onDownloadProgress), typeof y.onUploadProgress == "function" && k.upload && k.upload.addEventListener("progress", y.onUploadProgress), (y.cancelToken || y.signal) && (I = function(Ve) {
        !k || (N(!Ve || Ve && Ve.type ? new v() : Ve), k.abort(), k = null);
      }, y.cancelToken && y.cancelToken.subscribe(I), y.signal && (y.signal.aborted ? I() : y.signal.addEventListener("abort", I))), D || (D = null);
      var ue = _(z);
      if (ue && ["http", "https", "file"].indexOf(ue) === -1) {
        N(new w("Unsupported protocol " + ue + ":", w.ERR_BAD_REQUEST, y));
        return;
      }
      k.send(D);
    });
  }, pc;
}
var wc, Hp;
function yk() {
  return Hp || (Hp = 1, wc = null), wc;
}
var Ke = nt, zp = ck, Yp = ls, Vk = r_, bk = o_, Ck = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Gp(e, r) {
  !Ke.isUndefined(e) && Ke.isUndefined(e["Content-Type"]) && (e["Content-Type"] = r);
}
function Sk() {
  var e;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (e = qp()), e;
}
function kk(e, r, o) {
  if (Ke.isString(e))
    try {
      return (r || JSON.parse)(e), Ke.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (o || JSON.stringify)(e);
}
var El = {
  transitional: Vk,
  adapter: Sk(),
  transformRequest: [function(r, o) {
    if (zp(o, "Accept"), zp(o, "Content-Type"), Ke.isFormData(r) || Ke.isArrayBuffer(r) || Ke.isBuffer(r) || Ke.isStream(r) || Ke.isFile(r) || Ke.isBlob(r))
      return r;
    if (Ke.isArrayBufferView(r))
      return r.buffer;
    if (Ke.isURLSearchParams(r))
      return Gp(o, "application/x-www-form-urlencoded;charset=utf-8"), r.toString();
    var i = Ke.isObject(r), a = o && o["Content-Type"], u;
    if ((u = Ke.isFileList(r)) || i && a === "multipart/form-data") {
      var c = this.env && this.env.FormData;
      return bk(u ? { "files[]": r } : r, c && new c());
    } else if (i || a === "application/json")
      return Gp(o, "application/json"), kk(r);
    return r;
  }],
  transformResponse: [function(r) {
    var o = this.transitional || El.transitional, i = o && o.silentJSONParsing, a = o && o.forcedJSONParsing, u = !i && this.responseType === "json";
    if (u || a && Ke.isString(r) && r.length)
      try {
        return JSON.parse(r);
      } catch (c) {
        if (u)
          throw c.name === "SyntaxError" ? Yp.from(c, Yp.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
Ke.forEach(["delete", "get", "head"], function(r) {
  El.headers[r] = {};
});
Ke.forEach(["post", "put", "patch"], function(r) {
  El.headers[r] = Ke.merge(Ck);
});
var Pd = El, Ek = nt, Ik = Pd, xk = function(r, o, i) {
  var a = this || Ik;
  return Ek.forEach(i, function(c) {
    r = c.call(a, r, o);
  }), r;
}, vc, jp;
function i_() {
  return jp || (jp = 1, vc = function(r) {
    return !!(r && r.__CANCEL__);
  }), vc;
}
var Zp = nt, mc = xk, Ak = i_(), Tk = Pd, Bk = kl();
function _c(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Bk();
}
var Lk = function(r) {
  _c(r), r.headers = r.headers || {}, r.data = mc.call(
    r,
    r.data,
    r.headers,
    r.transformRequest
  ), r.headers = Zp.merge(
    r.headers.common || {},
    r.headers[r.method] || {},
    r.headers
  ), Zp.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function(a) {
      delete r.headers[a];
    }
  );
  var o = r.adapter || Tk.adapter;
  return o(r).then(function(a) {
    return _c(r), a.data = mc.call(
      r,
      a.data,
      a.headers,
      r.transformResponse
    ), a;
  }, function(a) {
    return Ak(a) || (_c(r), a && a.response && (a.response.data = mc.call(
      r,
      a.response.data,
      a.response.headers,
      r.transformResponse
    ))), Promise.reject(a);
  });
}, Ot = nt, a_ = function(r, o) {
  o = o || {};
  var i = {};
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
    var y = v[$] || u, B = y($);
    Ot.isUndefined(B) && y !== w || (i[$] = B);
  }), i;
}, gc, Kp;
function l_() {
  return Kp || (Kp = 1, gc = {
    version: "0.27.2"
  }), gc;
}
var Mk = l_().version, _r = ls, Rd = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, r) {
  Rd[e] = function(i) {
    return typeof i === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
var Jp = {};
Rd.transitional = function(r, o, i) {
  function a(u, c) {
    return "[Axios v" + Mk + "] Transitional option '" + u + "'" + c + (i ? ". " + i : "");
  }
  return function(u, c, f) {
    if (r === !1)
      throw new _r(
        a(c, " has been removed" + (o ? " in " + o : "")),
        _r.ERR_DEPRECATED
      );
    return o && !Jp[c] && (Jp[c] = !0, console.warn(
      a(
        c,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), r ? r(u, c, f) : !0;
  };
};
function Dk(e, r, o) {
  if (typeof e != "object")
    throw new _r("options must be an object", _r.ERR_BAD_OPTION_VALUE);
  for (var i = Object.keys(e), a = i.length; a-- > 0; ) {
    var u = i[a], c = r[u];
    if (c) {
      var f = e[u], w = f === void 0 || c(f, u, e);
      if (w !== !0)
        throw new _r("option " + u + " must be " + w, _r.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new _r("Unknown option " + u, _r.ERR_BAD_OPTION);
  }
}
var Nk = {
  assertOptions: Dk,
  validators: Rd
}, u_ = nt, Ok = Qm, Xp = lk, Qp = Lk, Il = a_, Pk = s_, c_ = Nk, Mo = c_.validators;
function ss(e) {
  this.defaults = e, this.interceptors = {
    request: new Xp(),
    response: new Xp()
  };
}
ss.prototype.request = function(r, o) {
  typeof r == "string" ? (o = o || {}, o.url = r) : o = r || {}, o = Il(this.defaults, o), o.method ? o.method = o.method.toLowerCase() : this.defaults.method ? o.method = this.defaults.method.toLowerCase() : o.method = "get";
  var i = o.transitional;
  i !== void 0 && c_.assertOptions(i, {
    silentJSONParsing: Mo.transitional(Mo.boolean),
    forcedJSONParsing: Mo.transitional(Mo.boolean),
    clarifyTimeoutError: Mo.transitional(Mo.boolean)
  }, !1);
  var a = [], u = !0;
  this.interceptors.request.forEach(function(B) {
    typeof B.runWhen == "function" && B.runWhen(o) === !1 || (u = u && B.synchronous, a.unshift(B.fulfilled, B.rejected));
  });
  var c = [];
  this.interceptors.response.forEach(function(B) {
    c.push(B.fulfilled, B.rejected);
  });
  var f;
  if (!u) {
    var w = [Qp, void 0];
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
    f = Qp(v);
  } catch (y) {
    return Promise.reject(y);
  }
  for (; c.length; )
    f = f.then(c.shift(), c.shift());
  return f;
};
ss.prototype.getUri = function(r) {
  r = Il(this.defaults, r);
  var o = Pk(r.baseURL, r.url);
  return Ok(o, r.params, r.paramsSerializer);
};
u_.forEach(["delete", "get", "head", "options"], function(r) {
  ss.prototype[r] = function(o, i) {
    return this.request(Il(i || {}, {
      method: r,
      url: o,
      data: (i || {}).data
    }));
  };
});
u_.forEach(["post", "put", "patch"], function(r) {
  function o(i) {
    return function(u, c, f) {
      return this.request(Il(f || {}, {
        method: r,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: u,
        data: c
      }));
    };
  }
  ss.prototype[r] = o(), ss.prototype[r + "Form"] = o(!0);
});
var Rk = ss, $c, ew;
function Fk() {
  if (ew)
    return $c;
  ew = 1;
  var e = kl();
  function r(o) {
    if (typeof o != "function")
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
    }, o(function(c) {
      a.reason || (a.reason = new e(c), i(a.reason));
    });
  }
  return r.prototype.throwIfRequested = function() {
    if (this.reason)
      throw this.reason;
  }, r.prototype.subscribe = function(i) {
    if (this.reason) {
      i(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(i) : this._listeners = [i];
  }, r.prototype.unsubscribe = function(i) {
    if (!!this._listeners) {
      var a = this._listeners.indexOf(i);
      a !== -1 && this._listeners.splice(a, 1);
    }
  }, r.source = function() {
    var i, a = new r(function(c) {
      i = c;
    });
    return {
      token: a,
      cancel: i
    };
  }, $c = r, $c;
}
var yc, tw;
function Uk() {
  return tw || (tw = 1, yc = function(r) {
    return function(i) {
      return r.apply(null, i);
    };
  }), yc;
}
var Vc, nw;
function Wk() {
  if (nw)
    return Vc;
  nw = 1;
  var e = nt;
  return Vc = function(o) {
    return e.isObject(o) && o.isAxiosError === !0;
  }, Vc;
}
var rw = nt, qk = Km, sl = Rk, Hk = a_, zk = Pd;
function d_(e) {
  var r = new sl(e), o = qk(sl.prototype.request, r);
  return rw.extend(o, sl.prototype, r), rw.extend(o, r), o.create = function(a) {
    return d_(Hk(e, a));
  }, o;
}
var xt = d_(zk);
xt.Axios = sl;
xt.CanceledError = kl();
xt.CancelToken = Fk();
xt.isCancel = i_();
xt.VERSION = l_().version;
xt.toFormData = o_;
xt.AxiosError = ls;
xt.Cancel = xt.CanceledError;
xt.all = function(r) {
  return Promise.all(r);
};
xt.spread = Uk();
xt.isAxiosError = Wk();
Bd.exports = xt;
Bd.exports.default = xt;
(function(e) {
  e.exports = Bd.exports;
})(Zm);
const f_ = /* @__PURE__ */ RS(Zm.exports), jn = f_.create({
  baseURL: "/opennms/api/v2".toString() || "/opennms/api/v2",
  withCredentials: !0
}), rt = f_.create({
  baseURL: "/opennms/rest".toString() || "/opennms/rest",
  withCredentials: !0
});
var $e = { exports: {} };
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
    var o, i = "4.17.21", a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", c = "Expected a function", f = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", v = 500, _ = "__lodash_placeholder__", $ = 1, y = 2, B = 4, L = 1, N = 2, D = 1, S = 2, x = 4, I = 8, O = 16, k = 32, P = 64, R = 128, z = 256, de = 512, se = 30, ue = "...", Ve = 800, ye = 16, Be = 1, me = 2, Ue = 3, He = 1 / 0, We = 9007199254740991, $n = 17976931348623157e292, Tn = 0 / 0, At = 4294967295, Ai = At - 1, co = At >>> 1, jl = [
      ["ary", R],
      ["bind", D],
      ["bindKey", S],
      ["curry", I],
      ["curryRight", O],
      ["flip", de],
      ["partial", k],
      ["partialRight", P],
      ["rearg", z]
    ], zt = "[object Arguments]", fo = "[object Array]", Zl = "[object AsyncFunction]", kr = "[object Boolean]", Er = "[object Date]", Ti = "[object DOMException]", Ir = "[object Error]", xr = "[object Function]", Vs = "[object GeneratorFunction]", mt = "[object Map]", Zn = "[object Number]", Bi = "[object Null]", Yt = "[object Object]", bs = "[object Promise]", Li = "[object Proxy]", Kn = "[object RegExp]", _t = "[object Set]", Jn = "[object String]", Ar = "[object Symbol]", Mi = "[object Undefined]", Xn = "[object WeakMap]", Di = "[object WeakSet]", Qn = "[object ArrayBuffer]", Bn = "[object DataView]", ho = "[object Float32Array]", po = "[object Float64Array]", wo = "[object Int8Array]", vo = "[object Int16Array]", mo = "[object Int32Array]", _o = "[object Uint8Array]", Q = "[object Uint8ClampedArray]", G = "[object Uint16Array]", re = "[object Uint32Array]", Ni = /\b__p \+= '';/g, Oi = /\b(__p \+=) '' \+/g, Pi = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Cs = /&(?:amp|lt|gt|quot|#39);/g, Ss = /[&<>"']/g, Ri = RegExp(Cs.source), Fi = RegExp(Ss.source), Ui = /<%-([\s\S]+?)%>/g, Wi = /<%([\s\S]+?)%>/g, ks = /<%=([\s\S]+?)%>/g, qi = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Hi = /^\w*$/, zi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Kl = /[\\^$.*+?()[\]{}|]/g, o1 = RegExp(Kl.source), Jl = /^\s+/, s1 = /\s/, i1 = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, a1 = /\{\n\/\* \[wrapped with (.+)\] \*/, l1 = /,? & /, u1 = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, c1 = /[()=,{}\[\]\/\s]/, d1 = /\\(\\)?/g, f1 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, uf = /\w*$/, h1 = /^[-+]0x[0-9a-f]+$/i, p1 = /^0b[01]+$/i, w1 = /^\[object .+?Constructor\]$/, v1 = /^0o[0-7]+$/i, m1 = /^(?:0|[1-9]\d*)$/, _1 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Yi = /($^)/, g1 = /['\n\r\u2028\u2029\\]/g, Gi = "\\ud800-\\udfff", $1 = "\\u0300-\\u036f", y1 = "\\ufe20-\\ufe2f", V1 = "\\u20d0-\\u20ff", cf = $1 + y1 + V1, df = "\\u2700-\\u27bf", ff = "a-z\\xdf-\\xf6\\xf8-\\xff", b1 = "\\xac\\xb1\\xd7\\xf7", C1 = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", S1 = "\\u2000-\\u206f", k1 = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", hf = "A-Z\\xc0-\\xd6\\xd8-\\xde", pf = "\\ufe0e\\ufe0f", wf = b1 + C1 + S1 + k1, Xl = "['\u2019]", E1 = "[" + Gi + "]", vf = "[" + wf + "]", ji = "[" + cf + "]", mf = "\\d+", I1 = "[" + df + "]", _f = "[" + ff + "]", gf = "[^" + Gi + wf + mf + df + ff + hf + "]", Ql = "\\ud83c[\\udffb-\\udfff]", x1 = "(?:" + ji + "|" + Ql + ")", $f = "[^" + Gi + "]", eu = "(?:\\ud83c[\\udde6-\\uddff]){2}", tu = "[\\ud800-\\udbff][\\udc00-\\udfff]", go = "[" + hf + "]", yf = "\\u200d", Vf = "(?:" + _f + "|" + gf + ")", A1 = "(?:" + go + "|" + gf + ")", bf = "(?:" + Xl + "(?:d|ll|m|re|s|t|ve))?", Cf = "(?:" + Xl + "(?:D|LL|M|RE|S|T|VE))?", Sf = x1 + "?", kf = "[" + pf + "]?", T1 = "(?:" + yf + "(?:" + [$f, eu, tu].join("|") + ")" + kf + Sf + ")*", B1 = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", L1 = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ef = kf + Sf + T1, M1 = "(?:" + [I1, eu, tu].join("|") + ")" + Ef, D1 = "(?:" + [$f + ji + "?", ji, eu, tu, E1].join("|") + ")", N1 = RegExp(Xl, "g"), O1 = RegExp(ji, "g"), nu = RegExp(Ql + "(?=" + Ql + ")|" + D1 + Ef, "g"), P1 = RegExp([
      go + "?" + _f + "+" + bf + "(?=" + [vf, go, "$"].join("|") + ")",
      A1 + "+" + Cf + "(?=" + [vf, go + Vf, "$"].join("|") + ")",
      go + "?" + Vf + "+" + bf,
      go + "+" + Cf,
      L1,
      B1,
      mf,
      M1
    ].join("|"), "g"), R1 = RegExp("[" + yf + Gi + cf + pf + "]"), F1 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, U1 = [
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
    ], W1 = -1, Ie = {};
    Ie[ho] = Ie[po] = Ie[wo] = Ie[vo] = Ie[mo] = Ie[_o] = Ie[Q] = Ie[G] = Ie[re] = !0, Ie[zt] = Ie[fo] = Ie[Qn] = Ie[kr] = Ie[Bn] = Ie[Er] = Ie[Ir] = Ie[xr] = Ie[mt] = Ie[Zn] = Ie[Yt] = Ie[Kn] = Ie[_t] = Ie[Jn] = Ie[Xn] = !1;
    var Se = {};
    Se[zt] = Se[fo] = Se[Qn] = Se[Bn] = Se[kr] = Se[Er] = Se[ho] = Se[po] = Se[wo] = Se[vo] = Se[mo] = Se[mt] = Se[Zn] = Se[Yt] = Se[Kn] = Se[_t] = Se[Jn] = Se[Ar] = Se[_o] = Se[Q] = Se[G] = Se[re] = !0, Se[Ir] = Se[xr] = Se[Xn] = !1;
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
    }, G1 = parseFloat, j1 = parseInt, If = typeof Ws == "object" && Ws && Ws.Object === Object && Ws, Z1 = typeof self == "object" && self && self.Object === Object && self, Je = If || Z1 || Function("return this")(), ru = r && !r.nodeType && r, Tr = ru && !0 && e && !e.nodeType && e, xf = Tr && Tr.exports === ru, ou = xf && If.process, Gt = function() {
      try {
        var V = Tr && Tr.require && Tr.require("util").types;
        return V || ou && ou.binding && ou.binding("util");
      } catch {
      }
    }(), Af = Gt && Gt.isArrayBuffer, Tf = Gt && Gt.isDate, Bf = Gt && Gt.isMap, Lf = Gt && Gt.isRegExp, Mf = Gt && Gt.isSet, Df = Gt && Gt.isTypedArray;
    function Tt(V, E, C) {
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
        var ze = V[J];
        E(W, ze, C(ze), V);
      }
      return W;
    }
    function jt(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length; ++C < W && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function J1(V, E) {
      for (var C = V == null ? 0 : V.length; C-- && E(V[C], C, V) !== !1; )
        ;
      return V;
    }
    function Nf(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length; ++C < W; )
        if (!E(V[C], C, V))
          return !1;
      return !0;
    }
    function er(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length, J = 0, pe = []; ++C < W; ) {
        var ze = V[C];
        E(ze, C, V) && (pe[J++] = ze);
      }
      return pe;
    }
    function Zi(V, E) {
      var C = V == null ? 0 : V.length;
      return !!C && $o(V, E, 0) > -1;
    }
    function su(V, E, C) {
      for (var W = -1, J = V == null ? 0 : V.length; ++W < J; )
        if (C(E, V[W]))
          return !0;
      return !1;
    }
    function Ae(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length, J = Array(W); ++C < W; )
        J[C] = E(V[C], C, V);
      return J;
    }
    function tr(V, E) {
      for (var C = -1, W = E.length, J = V.length; ++C < W; )
        V[J + C] = E[C];
      return V;
    }
    function iu(V, E, C, W) {
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
    function au(V, E) {
      for (var C = -1, W = V == null ? 0 : V.length; ++C < W; )
        if (E(V[C], C, V))
          return !0;
      return !1;
    }
    var Q1 = lu("length");
    function e0(V) {
      return V.split("");
    }
    function t0(V) {
      return V.match(u1) || [];
    }
    function Of(V, E, C) {
      var W;
      return C(V, function(J, pe, ze) {
        if (E(J, pe, ze))
          return W = pe, !1;
      }), W;
    }
    function Ki(V, E, C, W) {
      for (var J = V.length, pe = C + (W ? 1 : -1); W ? pe-- : ++pe < J; )
        if (E(V[pe], pe, V))
          return pe;
      return -1;
    }
    function $o(V, E, C) {
      return E === E ? h0(V, E, C) : Ki(V, Pf, C);
    }
    function n0(V, E, C, W) {
      for (var J = C - 1, pe = V.length; ++J < pe; )
        if (W(V[J], E))
          return J;
      return -1;
    }
    function Pf(V) {
      return V !== V;
    }
    function Rf(V, E) {
      var C = V == null ? 0 : V.length;
      return C ? cu(V, E) / C : Tn;
    }
    function lu(V) {
      return function(E) {
        return E == null ? o : E[V];
      };
    }
    function uu(V) {
      return function(E) {
        return V == null ? o : V[E];
      };
    }
    function Ff(V, E, C, W, J) {
      return J(V, function(pe, ze, be) {
        C = W ? (W = !1, pe) : E(C, pe, ze, be);
      }), C;
    }
    function r0(V, E) {
      var C = V.length;
      for (V.sort(E); C--; )
        V[C] = V[C].value;
      return V;
    }
    function cu(V, E) {
      for (var C, W = -1, J = V.length; ++W < J; ) {
        var pe = E(V[W]);
        pe !== o && (C = C === o ? pe : C + pe);
      }
      return C;
    }
    function du(V, E) {
      for (var C = -1, W = Array(V); ++C < V; )
        W[C] = E(C);
      return W;
    }
    function o0(V, E) {
      return Ae(E, function(C) {
        return [C, V[C]];
      });
    }
    function Uf(V) {
      return V && V.slice(0, zf(V) + 1).replace(Jl, "");
    }
    function Bt(V) {
      return function(E) {
        return V(E);
      };
    }
    function fu(V, E) {
      return Ae(E, function(C) {
        return V[C];
      });
    }
    function Es(V, E) {
      return V.has(E);
    }
    function Wf(V, E) {
      for (var C = -1, W = V.length; ++C < W && $o(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function qf(V, E) {
      for (var C = V.length; C-- && $o(E, V[C], 0) > -1; )
        ;
      return C;
    }
    function s0(V, E) {
      for (var C = V.length, W = 0; C--; )
        V[C] === E && ++W;
      return W;
    }
    var i0 = uu(q1), a0 = uu(H1);
    function l0(V) {
      return "\\" + Y1[V];
    }
    function u0(V, E) {
      return V == null ? o : V[E];
    }
    function yo(V) {
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
    function hu(V) {
      var E = -1, C = Array(V.size);
      return V.forEach(function(W, J) {
        C[++E] = [J, W];
      }), C;
    }
    function Hf(V, E) {
      return function(C) {
        return V(E(C));
      };
    }
    function nr(V, E) {
      for (var C = -1, W = V.length, J = 0, pe = []; ++C < W; ) {
        var ze = V[C];
        (ze === E || ze === _) && (V[C] = _, pe[J++] = C);
      }
      return pe;
    }
    function Ji(V) {
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
    function Vo(V) {
      return yo(V) ? v0(V) : Q1(V);
    }
    function ln(V) {
      return yo(V) ? m0(V) : e0(V);
    }
    function zf(V) {
      for (var E = V.length; E-- && s1.test(V.charAt(E)); )
        ;
      return E;
    }
    var w0 = uu(z1);
    function v0(V) {
      for (var E = nu.lastIndex = 0; nu.test(V); )
        ++E;
      return E;
    }
    function m0(V) {
      return V.match(nu) || [];
    }
    function _0(V) {
      return V.match(P1) || [];
    }
    var g0 = function V(E) {
      E = E == null ? Je : bo.defaults(Je.Object(), E, bo.pick(Je, U1));
      var C = E.Array, W = E.Date, J = E.Error, pe = E.Function, ze = E.Math, be = E.Object, pu = E.RegExp, $0 = E.String, Zt = E.TypeError, Xi = C.prototype, y0 = pe.prototype, Co = be.prototype, Qi = E["__core-js_shared__"], ea = y0.toString, _e = Co.hasOwnProperty, V0 = 0, Yf = function() {
        var t = /[^.]+$/.exec(Qi && Qi.keys && Qi.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), ta = Co.toString, b0 = ea.call(be), C0 = Je._, S0 = pu(
        "^" + ea.call(_e).replace(Kl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), na = xf ? E.Buffer : o, rr = E.Symbol, ra = E.Uint8Array, Gf = na ? na.allocUnsafe : o, oa = Hf(be.getPrototypeOf, be), jf = be.create, Zf = Co.propertyIsEnumerable, sa = Xi.splice, Kf = rr ? rr.isConcatSpreadable : o, Is = rr ? rr.iterator : o, Br = rr ? rr.toStringTag : o, ia = function() {
        try {
          var t = Or(be, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), k0 = E.clearTimeout !== Je.clearTimeout && E.clearTimeout, E0 = W && W.now !== Je.Date.now && W.now, I0 = E.setTimeout !== Je.setTimeout && E.setTimeout, aa = ze.ceil, la = ze.floor, wu = be.getOwnPropertySymbols, x0 = na ? na.isBuffer : o, Jf = E.isFinite, A0 = Xi.join, T0 = Hf(be.keys, be), Ye = ze.max, ot = ze.min, B0 = W.now, L0 = E.parseInt, Xf = ze.random, M0 = Xi.reverse, vu = Or(E, "DataView"), xs = Or(E, "Map"), mu = Or(E, "Promise"), So = Or(E, "Set"), As = Or(E, "WeakMap"), Ts = Or(be, "create"), ua = As && new As(), ko = {}, D0 = Pr(vu), N0 = Pr(xs), O0 = Pr(mu), P0 = Pr(So), R0 = Pr(As), ca = rr ? rr.prototype : o, Bs = ca ? ca.valueOf : o, Qf = ca ? ca.toString : o;
      function h(t) {
        if (De(t) && !X(t) && !(t instanceof ae)) {
          if (t instanceof Kt)
            return t;
          if (_e.call(t, "__wrapped__"))
            return ep(t);
        }
        return new Kt(t);
      }
      var Eo = function() {
        function t() {
        }
        return function(n) {
          if (!Le(n))
            return {};
          if (jf)
            return jf(n);
          t.prototype = n;
          var s = new t();
          return t.prototype = o, s;
        };
      }();
      function da() {
      }
      function Kt(t, n) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = o;
      }
      h.templateSettings = {
        escape: Ui,
        evaluate: Wi,
        interpolate: ks,
        variable: "",
        imports: {
          _: h
        }
      }, h.prototype = da.prototype, h.prototype.constructor = h, Kt.prototype = Eo(da.prototype), Kt.prototype.constructor = Kt;
      function ae(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = At, this.__views__ = [];
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
        var t = this.__wrapped__.value(), n = this.__dir__, s = X(t), l = n < 0, d = s ? t.length : 0, p = ey(0, d, this.__views__), m = p.start, g = p.end, b = g - m, A = l ? g : m - 1, T = this.__iteratees__, M = T.length, U = 0, H = ot(b, this.__takeCount__);
        if (!s || !l && d == b && H == b)
          return bh(t, this.__actions__);
        var Z = [];
        e:
          for (; b-- && U < H; ) {
            A += n;
            for (var te = -1, K = t[A]; ++te < M; ) {
              var ie = T[te], ce = ie.iteratee, Dt = ie.type, ft = ce(K);
              if (Dt == me)
                K = ft;
              else if (!ft) {
                if (Dt == Be)
                  continue e;
                break e;
              }
            }
            Z[U++] = K;
          }
        return Z;
      }
      ae.prototype = Eo(da.prototype), ae.prototype.constructor = ae;
      function Lr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function q0() {
        this.__data__ = Ts ? Ts(null) : {}, this.size = 0;
      }
      function H0(t) {
        var n = this.has(t) && delete this.__data__[t];
        return this.size -= n ? 1 : 0, n;
      }
      function z0(t) {
        var n = this.__data__;
        if (Ts) {
          var s = n[t];
          return s === w ? o : s;
        }
        return _e.call(n, t) ? n[t] : o;
      }
      function Y0(t) {
        var n = this.__data__;
        return Ts ? n[t] !== o : _e.call(n, t);
      }
      function G0(t, n) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = Ts && n === o ? w : n, this;
      }
      Lr.prototype.clear = q0, Lr.prototype.delete = H0, Lr.prototype.get = z0, Lr.prototype.has = Y0, Lr.prototype.set = G0;
      function Ln(t) {
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
        var n = this.__data__, s = fa(n, t);
        if (s < 0)
          return !1;
        var l = n.length - 1;
        return s == l ? n.pop() : sa.call(n, s, 1), --this.size, !0;
      }
      function K0(t) {
        var n = this.__data__, s = fa(n, t);
        return s < 0 ? o : n[s][1];
      }
      function J0(t) {
        return fa(this.__data__, t) > -1;
      }
      function X0(t, n) {
        var s = this.__data__, l = fa(s, t);
        return l < 0 ? (++this.size, s.push([t, n])) : s[l][1] = n, this;
      }
      Ln.prototype.clear = j0, Ln.prototype.delete = Z0, Ln.prototype.get = K0, Ln.prototype.has = J0, Ln.prototype.set = X0;
      function Mn(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++n < s; ) {
          var l = t[n];
          this.set(l[0], l[1]);
        }
      }
      function Q0() {
        this.size = 0, this.__data__ = {
          hash: new Lr(),
          map: new (xs || Ln)(),
          string: new Lr()
        };
      }
      function e$(t) {
        var n = Ca(this, t).delete(t);
        return this.size -= n ? 1 : 0, n;
      }
      function t$(t) {
        return Ca(this, t).get(t);
      }
      function n$(t) {
        return Ca(this, t).has(t);
      }
      function r$(t, n) {
        var s = Ca(this, t), l = s.size;
        return s.set(t, n), this.size += s.size == l ? 0 : 1, this;
      }
      Mn.prototype.clear = Q0, Mn.prototype.delete = e$, Mn.prototype.get = t$, Mn.prototype.has = n$, Mn.prototype.set = r$;
      function Mr(t) {
        var n = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new Mn(); ++n < s; )
          this.add(t[n]);
      }
      function o$(t) {
        return this.__data__.set(t, w), this;
      }
      function s$(t) {
        return this.__data__.has(t);
      }
      Mr.prototype.add = Mr.prototype.push = o$, Mr.prototype.has = s$;
      function un(t) {
        var n = this.__data__ = new Ln(t);
        this.size = n.size;
      }
      function i$() {
        this.__data__ = new Ln(), this.size = 0;
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
        if (s instanceof Ln) {
          var l = s.__data__;
          if (!xs || l.length < a - 1)
            return l.push([t, n]), this.size = ++s.size, this;
          s = this.__data__ = new Mn(l);
        }
        return s.set(t, n), this.size = s.size, this;
      }
      un.prototype.clear = i$, un.prototype.delete = a$, un.prototype.get = l$, un.prototype.has = u$, un.prototype.set = c$;
      function eh(t, n) {
        var s = X(t), l = !s && Rr(t), d = !s && !l && lr(t), p = !s && !l && !d && To(t), m = s || l || d || p, g = m ? du(t.length, $0) : [], b = g.length;
        for (var A in t)
          (n || _e.call(t, A)) && !(m && (A == "length" || d && (A == "offset" || A == "parent") || p && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Pn(A, b))) && g.push(A);
        return g;
      }
      function th(t) {
        var n = t.length;
        return n ? t[Iu(0, n - 1)] : o;
      }
      function d$(t, n) {
        return Sa(gt(t), Dr(n, 0, t.length));
      }
      function f$(t) {
        return Sa(gt(t));
      }
      function _u(t, n, s) {
        (s !== o && !cn(t[n], s) || s === o && !(n in t)) && Dn(t, n, s);
      }
      function Ls(t, n, s) {
        var l = t[n];
        (!(_e.call(t, n) && cn(l, s)) || s === o && !(n in t)) && Dn(t, n, s);
      }
      function fa(t, n) {
        for (var s = t.length; s--; )
          if (cn(t[s][0], n))
            return s;
        return -1;
      }
      function h$(t, n, s, l) {
        return or(t, function(d, p, m) {
          n(l, d, s(d), m);
        }), l;
      }
      function nh(t, n) {
        return t && Vn(n, Ze(n), t);
      }
      function p$(t, n) {
        return t && Vn(n, yt(n), t);
      }
      function Dn(t, n, s) {
        n == "__proto__" && ia ? ia(t, n, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[n] = s;
      }
      function gu(t, n) {
        for (var s = -1, l = n.length, d = C(l), p = t == null; ++s < l; )
          d[s] = p ? o : Qu(t, n[s]);
        return d;
      }
      function Dr(t, n, s) {
        return t === t && (s !== o && (t = t <= s ? t : s), n !== o && (t = t >= n ? t : n)), t;
      }
      function Jt(t, n, s, l, d, p) {
        var m, g = n & $, b = n & y, A = n & B;
        if (s && (m = d ? s(t, l, d, p) : s(t)), m !== o)
          return m;
        if (!Le(t))
          return t;
        var T = X(t);
        if (T) {
          if (m = ny(t), !g)
            return gt(t, m);
        } else {
          var M = st(t), U = M == xr || M == Vs;
          if (lr(t))
            return kh(t, g);
          if (M == Yt || M == zt || U && !d) {
            if (m = b || U ? {} : zh(t), !g)
              return b ? z$(t, p$(m, t)) : H$(t, nh(m, t));
          } else {
            if (!Se[M])
              return d ? t : {};
            m = ry(t, M, g);
          }
        }
        p || (p = new un());
        var H = p.get(t);
        if (H)
          return H;
        p.set(t, m), $p(t) ? t.forEach(function(K) {
          m.add(Jt(K, n, s, K, t, p));
        }) : _p(t) && t.forEach(function(K, ie) {
          m.set(ie, Jt(K, n, s, ie, t, p));
        });
        var Z = A ? b ? Ru : Pu : b ? yt : Ze, te = T ? o : Z(t);
        return jt(te || t, function(K, ie) {
          te && (ie = K, K = t[ie]), Ls(m, ie, Jt(K, n, s, ie, t, p));
        }), m;
      }
      function w$(t) {
        var n = Ze(t);
        return function(s) {
          return rh(s, t, n);
        };
      }
      function rh(t, n, s) {
        var l = s.length;
        if (t == null)
          return !l;
        for (t = be(t); l--; ) {
          var d = s[l], p = n[d], m = t[d];
          if (m === o && !(d in t) || !p(m))
            return !1;
        }
        return !0;
      }
      function oh(t, n, s) {
        if (typeof t != "function")
          throw new Zt(c);
        return Fs(function() {
          t.apply(o, s);
        }, n);
      }
      function Ms(t, n, s, l) {
        var d = -1, p = Zi, m = !0, g = t.length, b = [], A = n.length;
        if (!g)
          return b;
        s && (n = Ae(n, Bt(s))), l ? (p = su, m = !1) : n.length >= a && (p = Es, m = !1, n = new Mr(n));
        e:
          for (; ++d < g; ) {
            var T = t[d], M = s == null ? T : s(T);
            if (T = l || T !== 0 ? T : 0, m && M === M) {
              for (var U = A; U--; )
                if (n[U] === M)
                  continue e;
              b.push(T);
            } else
              p(n, M, l) || b.push(T);
          }
        return b;
      }
      var or = Th(yn), sh = Th(yu, !0);
      function v$(t, n) {
        var s = !0;
        return or(t, function(l, d, p) {
          return s = !!n(l, d, p), s;
        }), s;
      }
      function ha(t, n, s) {
        for (var l = -1, d = t.length; ++l < d; ) {
          var p = t[l], m = n(p);
          if (m != null && (g === o ? m === m && !Mt(m) : s(m, g)))
            var g = m, b = p;
        }
        return b;
      }
      function m$(t, n, s, l) {
        var d = t.length;
        for (s = ee(s), s < 0 && (s = -s > d ? 0 : d + s), l = l === o || l > d ? d : ee(l), l < 0 && (l += d), l = s > l ? 0 : Vp(l); s < l; )
          t[s++] = n;
        return t;
      }
      function ih(t, n) {
        var s = [];
        return or(t, function(l, d, p) {
          n(l, d, p) && s.push(l);
        }), s;
      }
      function Xe(t, n, s, l, d) {
        var p = -1, m = t.length;
        for (s || (s = sy), d || (d = []); ++p < m; ) {
          var g = t[p];
          n > 0 && s(g) ? n > 1 ? Xe(g, n - 1, s, l, d) : tr(d, g) : l || (d[d.length] = g);
        }
        return d;
      }
      var $u = Bh(), ah = Bh(!0);
      function yn(t, n) {
        return t && $u(t, n, Ze);
      }
      function yu(t, n) {
        return t && ah(t, n, Ze);
      }
      function pa(t, n) {
        return er(n, function(s) {
          return Rn(t[s]);
        });
      }
      function Nr(t, n) {
        n = ir(n, t);
        for (var s = 0, l = n.length; t != null && s < l; )
          t = t[bn(n[s++])];
        return s && s == l ? t : o;
      }
      function lh(t, n, s) {
        var l = n(t);
        return X(t) ? l : tr(l, s(t));
      }
      function ct(t) {
        return t == null ? t === o ? Mi : Bi : Br && Br in be(t) ? Q$(t) : fy(t);
      }
      function Vu(t, n) {
        return t > n;
      }
      function _$(t, n) {
        return t != null && _e.call(t, n);
      }
      function g$(t, n) {
        return t != null && n in be(t);
      }
      function $$(t, n, s) {
        return t >= ot(n, s) && t < Ye(n, s);
      }
      function bu(t, n, s) {
        for (var l = s ? su : Zi, d = t[0].length, p = t.length, m = p, g = C(p), b = 1 / 0, A = []; m--; ) {
          var T = t[m];
          m && n && (T = Ae(T, Bt(n))), b = ot(T.length, b), g[m] = !s && (n || d >= 120 && T.length >= 120) ? new Mr(m && T) : o;
        }
        T = t[0];
        var M = -1, U = g[0];
        e:
          for (; ++M < d && A.length < b; ) {
            var H = T[M], Z = n ? n(H) : H;
            if (H = s || H !== 0 ? H : 0, !(U ? Es(U, Z) : l(A, Z, s))) {
              for (m = p; --m; ) {
                var te = g[m];
                if (!(te ? Es(te, Z) : l(t[m], Z, s)))
                  continue e;
              }
              U && U.push(Z), A.push(H);
            }
          }
        return A;
      }
      function y$(t, n, s, l) {
        return yn(t, function(d, p, m) {
          n(l, s(d), p, m);
        }), l;
      }
      function Ds(t, n, s) {
        n = ir(n, t), t = Zh(t, n);
        var l = t == null ? t : t[bn(Qt(n))];
        return l == null ? o : Tt(l, t, s);
      }
      function uh(t) {
        return De(t) && ct(t) == zt;
      }
      function V$(t) {
        return De(t) && ct(t) == Qn;
      }
      function b$(t) {
        return De(t) && ct(t) == Er;
      }
      function Ns(t, n, s, l, d) {
        return t === n ? !0 : t == null || n == null || !De(t) && !De(n) ? t !== t && n !== n : C$(t, n, s, l, Ns, d);
      }
      function C$(t, n, s, l, d, p) {
        var m = X(t), g = X(n), b = m ? fo : st(t), A = g ? fo : st(n);
        b = b == zt ? Yt : b, A = A == zt ? Yt : A;
        var T = b == Yt, M = A == Yt, U = b == A;
        if (U && lr(t)) {
          if (!lr(n))
            return !1;
          m = !0, T = !1;
        }
        if (U && !T)
          return p || (p = new un()), m || To(t) ? Wh(t, n, s, l, d, p) : J$(t, n, b, s, l, d, p);
        if (!(s & L)) {
          var H = T && _e.call(t, "__wrapped__"), Z = M && _e.call(n, "__wrapped__");
          if (H || Z) {
            var te = H ? t.value() : t, K = Z ? n.value() : n;
            return p || (p = new un()), d(te, K, s, l, p);
          }
        }
        return U ? (p || (p = new un()), X$(t, n, s, l, d, p)) : !1;
      }
      function S$(t) {
        return De(t) && st(t) == mt;
      }
      function Cu(t, n, s, l) {
        var d = s.length, p = d, m = !l;
        if (t == null)
          return !p;
        for (t = be(t); d--; ) {
          var g = s[d];
          if (m && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++d < p; ) {
          g = s[d];
          var b = g[0], A = t[b], T = g[1];
          if (m && g[2]) {
            if (A === o && !(b in t))
              return !1;
          } else {
            var M = new un();
            if (l)
              var U = l(A, T, b, t, n, M);
            if (!(U === o ? Ns(T, A, L | N, l, M) : U))
              return !1;
          }
        }
        return !0;
      }
      function ch(t) {
        if (!Le(t) || ay(t))
          return !1;
        var n = Rn(t) ? S0 : w1;
        return n.test(Pr(t));
      }
      function k$(t) {
        return De(t) && ct(t) == Kn;
      }
      function E$(t) {
        return De(t) && st(t) == _t;
      }
      function I$(t) {
        return De(t) && Ta(t.length) && !!Ie[ct(t)];
      }
      function dh(t) {
        return typeof t == "function" ? t : t == null ? Vt : typeof t == "object" ? X(t) ? ph(t[0], t[1]) : hh(t) : Lp(t);
      }
      function Su(t) {
        if (!Rs(t))
          return T0(t);
        var n = [];
        for (var s in be(t))
          _e.call(t, s) && s != "constructor" && n.push(s);
        return n;
      }
      function x$(t) {
        if (!Le(t))
          return dy(t);
        var n = Rs(t), s = [];
        for (var l in t)
          l == "constructor" && (n || !_e.call(t, l)) || s.push(l);
        return s;
      }
      function ku(t, n) {
        return t < n;
      }
      function fh(t, n) {
        var s = -1, l = $t(t) ? C(t.length) : [];
        return or(t, function(d, p, m) {
          l[++s] = n(d, p, m);
        }), l;
      }
      function hh(t) {
        var n = Uu(t);
        return n.length == 1 && n[0][2] ? Gh(n[0][0], n[0][1]) : function(s) {
          return s === t || Cu(s, t, n);
        };
      }
      function ph(t, n) {
        return qu(t) && Yh(n) ? Gh(bn(t), n) : function(s) {
          var l = Qu(s, t);
          return l === o && l === n ? ec(s, t) : Ns(n, l, L | N);
        };
      }
      function wa(t, n, s, l, d) {
        t !== n && $u(n, function(p, m) {
          if (d || (d = new un()), Le(p))
            A$(t, n, m, s, wa, l, d);
          else {
            var g = l ? l(zu(t, m), p, m + "", t, n, d) : o;
            g === o && (g = p), _u(t, m, g);
          }
        }, yt);
      }
      function A$(t, n, s, l, d, p, m) {
        var g = zu(t, s), b = zu(n, s), A = m.get(b);
        if (A) {
          _u(t, s, A);
          return;
        }
        var T = p ? p(g, b, s + "", t, n, m) : o, M = T === o;
        if (M) {
          var U = X(b), H = !U && lr(b), Z = !U && !H && To(b);
          T = b, U || H || Z ? X(g) ? T = g : Oe(g) ? T = gt(g) : H ? (M = !1, T = kh(b, !0)) : Z ? (M = !1, T = Eh(b, !0)) : T = [] : Us(b) || Rr(b) ? (T = g, Rr(g) ? T = bp(g) : (!Le(g) || Rn(g)) && (T = zh(b))) : M = !1;
        }
        M && (m.set(b, T), d(T, b, l, p, m), m.delete(b)), _u(t, s, T);
      }
      function wh(t, n) {
        var s = t.length;
        if (!!s)
          return n += n < 0 ? s : 0, Pn(n, s) ? t[n] : o;
      }
      function vh(t, n, s) {
        n.length ? n = Ae(n, function(p) {
          return X(p) ? function(m) {
            return Nr(m, p.length === 1 ? p[0] : p);
          } : p;
        }) : n = [Vt];
        var l = -1;
        n = Ae(n, Bt(j()));
        var d = fh(t, function(p, m, g) {
          var b = Ae(n, function(A) {
            return A(p);
          });
          return { criteria: b, index: ++l, value: p };
        });
        return r0(d, function(p, m) {
          return q$(p, m, s);
        });
      }
      function T$(t, n) {
        return mh(t, n, function(s, l) {
          return ec(t, l);
        });
      }
      function mh(t, n, s) {
        for (var l = -1, d = n.length, p = {}; ++l < d; ) {
          var m = n[l], g = Nr(t, m);
          s(g, m) && Os(p, ir(m, t), g);
        }
        return p;
      }
      function B$(t) {
        return function(n) {
          return Nr(n, t);
        };
      }
      function Eu(t, n, s, l) {
        var d = l ? n0 : $o, p = -1, m = n.length, g = t;
        for (t === n && (n = gt(n)), s && (g = Ae(t, Bt(s))); ++p < m; )
          for (var b = 0, A = n[p], T = s ? s(A) : A; (b = d(g, T, b, l)) > -1; )
            g !== t && sa.call(g, b, 1), sa.call(t, b, 1);
        return t;
      }
      function _h(t, n) {
        for (var s = t ? n.length : 0, l = s - 1; s--; ) {
          var d = n[s];
          if (s == l || d !== p) {
            var p = d;
            Pn(d) ? sa.call(t, d, 1) : Tu(t, d);
          }
        }
        return t;
      }
      function Iu(t, n) {
        return t + la(Xf() * (n - t + 1));
      }
      function L$(t, n, s, l) {
        for (var d = -1, p = Ye(aa((n - t) / (s || 1)), 0), m = C(p); p--; )
          m[l ? p : ++d] = t, t += s;
        return m;
      }
      function xu(t, n) {
        var s = "";
        if (!t || n < 1 || n > We)
          return s;
        do
          n % 2 && (s += t), n = la(n / 2), n && (t += t);
        while (n);
        return s;
      }
      function oe(t, n) {
        return Yu(jh(t, n, Vt), t + "");
      }
      function M$(t) {
        return th(Bo(t));
      }
      function D$(t, n) {
        var s = Bo(t);
        return Sa(s, Dr(n, 0, s.length));
      }
      function Os(t, n, s, l) {
        if (!Le(t))
          return t;
        n = ir(n, t);
        for (var d = -1, p = n.length, m = p - 1, g = t; g != null && ++d < p; ) {
          var b = bn(n[d]), A = s;
          if (b === "__proto__" || b === "constructor" || b === "prototype")
            return t;
          if (d != m) {
            var T = g[b];
            A = l ? l(T, b, g) : o, A === o && (A = Le(T) ? T : Pn(n[d + 1]) ? [] : {});
          }
          Ls(g, b, A), g = g[b];
        }
        return t;
      }
      var gh = ua ? function(t, n) {
        return ua.set(t, n), t;
      } : Vt, N$ = ia ? function(t, n) {
        return ia(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: nc(n),
          writable: !0
        });
      } : Vt;
      function O$(t) {
        return Sa(Bo(t));
      }
      function Xt(t, n, s) {
        var l = -1, d = t.length;
        n < 0 && (n = -n > d ? 0 : d + n), s = s > d ? d : s, s < 0 && (s += d), d = n > s ? 0 : s - n >>> 0, n >>>= 0;
        for (var p = C(d); ++l < d; )
          p[l] = t[l + n];
        return p;
      }
      function P$(t, n) {
        var s;
        return or(t, function(l, d, p) {
          return s = n(l, d, p), !s;
        }), !!s;
      }
      function va(t, n, s) {
        var l = 0, d = t == null ? l : t.length;
        if (typeof n == "number" && n === n && d <= co) {
          for (; l < d; ) {
            var p = l + d >>> 1, m = t[p];
            m !== null && !Mt(m) && (s ? m <= n : m < n) ? l = p + 1 : d = p;
          }
          return d;
        }
        return Au(t, n, Vt, s);
      }
      function Au(t, n, s, l) {
        var d = 0, p = t == null ? 0 : t.length;
        if (p === 0)
          return 0;
        n = s(n);
        for (var m = n !== n, g = n === null, b = Mt(n), A = n === o; d < p; ) {
          var T = la((d + p) / 2), M = s(t[T]), U = M !== o, H = M === null, Z = M === M, te = Mt(M);
          if (m)
            var K = l || Z;
          else
            A ? K = Z && (l || U) : g ? K = Z && U && (l || !H) : b ? K = Z && U && !H && (l || !te) : H || te ? K = !1 : K = l ? M <= n : M < n;
          K ? d = T + 1 : p = T;
        }
        return ot(p, Ai);
      }
      function $h(t, n) {
        for (var s = -1, l = t.length, d = 0, p = []; ++s < l; ) {
          var m = t[s], g = n ? n(m) : m;
          if (!s || !cn(g, b)) {
            var b = g;
            p[d++] = m === 0 ? 0 : m;
          }
        }
        return p;
      }
      function yh(t) {
        return typeof t == "number" ? t : Mt(t) ? Tn : +t;
      }
      function Lt(t) {
        if (typeof t == "string")
          return t;
        if (X(t))
          return Ae(t, Lt) + "";
        if (Mt(t))
          return Qf ? Qf.call(t) : "";
        var n = t + "";
        return n == "0" && 1 / t == -He ? "-0" : n;
      }
      function sr(t, n, s) {
        var l = -1, d = Zi, p = t.length, m = !0, g = [], b = g;
        if (s)
          m = !1, d = su;
        else if (p >= a) {
          var A = n ? null : Z$(t);
          if (A)
            return Ji(A);
          m = !1, d = Es, b = new Mr();
        } else
          b = n ? [] : g;
        e:
          for (; ++l < p; ) {
            var T = t[l], M = n ? n(T) : T;
            if (T = s || T !== 0 ? T : 0, m && M === M) {
              for (var U = b.length; U--; )
                if (b[U] === M)
                  continue e;
              n && b.push(M), g.push(T);
            } else
              d(b, M, s) || (b !== g && b.push(M), g.push(T));
          }
        return g;
      }
      function Tu(t, n) {
        return n = ir(n, t), t = Zh(t, n), t == null || delete t[bn(Qt(n))];
      }
      function Vh(t, n, s, l) {
        return Os(t, n, s(Nr(t, n)), l);
      }
      function ma(t, n, s, l) {
        for (var d = t.length, p = l ? d : -1; (l ? p-- : ++p < d) && n(t[p], p, t); )
          ;
        return s ? Xt(t, l ? 0 : p, l ? p + 1 : d) : Xt(t, l ? p + 1 : 0, l ? d : p);
      }
      function bh(t, n) {
        var s = t;
        return s instanceof ae && (s = s.value()), iu(n, function(l, d) {
          return d.func.apply(d.thisArg, tr([l], d.args));
        }, s);
      }
      function Bu(t, n, s) {
        var l = t.length;
        if (l < 2)
          return l ? sr(t[0]) : [];
        for (var d = -1, p = C(l); ++d < l; )
          for (var m = t[d], g = -1; ++g < l; )
            g != d && (p[d] = Ms(p[d] || m, t[g], n, s));
        return sr(Xe(p, 1), n, s);
      }
      function Ch(t, n, s) {
        for (var l = -1, d = t.length, p = n.length, m = {}; ++l < d; ) {
          var g = l < p ? n[l] : o;
          s(m, t[l], g);
        }
        return m;
      }
      function Lu(t) {
        return Oe(t) ? t : [];
      }
      function Mu(t) {
        return typeof t == "function" ? t : Vt;
      }
      function ir(t, n) {
        return X(t) ? t : qu(t, n) ? [t] : Qh(ve(t));
      }
      var R$ = oe;
      function ar(t, n, s) {
        var l = t.length;
        return s = s === o ? l : s, !n && s >= l ? t : Xt(t, n, s);
      }
      var Sh = k0 || function(t) {
        return Je.clearTimeout(t);
      };
      function kh(t, n) {
        if (n)
          return t.slice();
        var s = t.length, l = Gf ? Gf(s) : new t.constructor(s);
        return t.copy(l), l;
      }
      function Du(t) {
        var n = new t.constructor(t.byteLength);
        return new ra(n).set(new ra(t)), n;
      }
      function F$(t, n) {
        var s = n ? Du(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function U$(t) {
        var n = new t.constructor(t.source, uf.exec(t));
        return n.lastIndex = t.lastIndex, n;
      }
      function W$(t) {
        return Bs ? be(Bs.call(t)) : {};
      }
      function Eh(t, n) {
        var s = n ? Du(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function Ih(t, n) {
        if (t !== n) {
          var s = t !== o, l = t === null, d = t === t, p = Mt(t), m = n !== o, g = n === null, b = n === n, A = Mt(n);
          if (!g && !A && !p && t > n || p && m && b && !g && !A || l && m && b || !s && b || !d)
            return 1;
          if (!l && !p && !A && t < n || A && s && d && !l && !p || g && s && d || !m && d || !b)
            return -1;
        }
        return 0;
      }
      function q$(t, n, s) {
        for (var l = -1, d = t.criteria, p = n.criteria, m = d.length, g = s.length; ++l < m; ) {
          var b = Ih(d[l], p[l]);
          if (b) {
            if (l >= g)
              return b;
            var A = s[l];
            return b * (A == "desc" ? -1 : 1);
          }
        }
        return t.index - n.index;
      }
      function xh(t, n, s, l) {
        for (var d = -1, p = t.length, m = s.length, g = -1, b = n.length, A = Ye(p - m, 0), T = C(b + A), M = !l; ++g < b; )
          T[g] = n[g];
        for (; ++d < m; )
          (M || d < p) && (T[s[d]] = t[d]);
        for (; A--; )
          T[g++] = t[d++];
        return T;
      }
      function Ah(t, n, s, l) {
        for (var d = -1, p = t.length, m = -1, g = s.length, b = -1, A = n.length, T = Ye(p - g, 0), M = C(T + A), U = !l; ++d < T; )
          M[d] = t[d];
        for (var H = d; ++b < A; )
          M[H + b] = n[b];
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
      function Vn(t, n, s, l) {
        var d = !s;
        s || (s = {});
        for (var p = -1, m = n.length; ++p < m; ) {
          var g = n[p], b = l ? l(s[g], t[g], g, s, t) : o;
          b === o && (b = t[g]), d ? Dn(s, g, b) : Ls(s, g, b);
        }
        return s;
      }
      function H$(t, n) {
        return Vn(t, Wu(t), n);
      }
      function z$(t, n) {
        return Vn(t, qh(t), n);
      }
      function _a(t, n) {
        return function(s, l) {
          var d = X(s) ? K1 : h$, p = n ? n() : {};
          return d(s, t, j(l, 2), p);
        };
      }
      function Io(t) {
        return oe(function(n, s) {
          var l = -1, d = s.length, p = d > 1 ? s[d - 1] : o, m = d > 2 ? s[2] : o;
          for (p = t.length > 3 && typeof p == "function" ? (d--, p) : o, m && dt(s[0], s[1], m) && (p = d < 3 ? o : p, d = 1), n = be(n); ++l < d; ) {
            var g = s[l];
            g && t(n, g, l, p);
          }
          return n;
        });
      }
      function Th(t, n) {
        return function(s, l) {
          if (s == null)
            return s;
          if (!$t(s))
            return t(s, l);
          for (var d = s.length, p = n ? d : -1, m = be(s); (n ? p-- : ++p < d) && l(m[p], p, m) !== !1; )
            ;
          return s;
        };
      }
      function Bh(t) {
        return function(n, s, l) {
          for (var d = -1, p = be(n), m = l(n), g = m.length; g--; ) {
            var b = m[t ? g : ++d];
            if (s(p[b], b, p) === !1)
              break;
          }
          return n;
        };
      }
      function Y$(t, n, s) {
        var l = n & D, d = Ps(t);
        function p() {
          var m = this && this !== Je && this instanceof p ? d : t;
          return m.apply(l ? s : this, arguments);
        }
        return p;
      }
      function Lh(t) {
        return function(n) {
          n = ve(n);
          var s = yo(n) ? ln(n) : o, l = s ? s[0] : n.charAt(0), d = s ? ar(s, 1).join("") : n.slice(1);
          return l[t]() + d;
        };
      }
      function xo(t) {
        return function(n) {
          return iu(Tp(Ap(n).replace(N1, "")), t, "");
        };
      }
      function Ps(t) {
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
          var s = Eo(t.prototype), l = t.apply(s, n);
          return Le(l) ? l : s;
        };
      }
      function G$(t, n, s) {
        var l = Ps(t);
        function d() {
          for (var p = arguments.length, m = C(p), g = p, b = Ao(d); g--; )
            m[g] = arguments[g];
          var A = p < 3 && m[0] !== b && m[p - 1] !== b ? [] : nr(m, b);
          if (p -= A.length, p < s)
            return Ph(
              t,
              n,
              ga,
              d.placeholder,
              o,
              m,
              A,
              o,
              o,
              s - p
            );
          var T = this && this !== Je && this instanceof d ? l : t;
          return Tt(T, this, m);
        }
        return d;
      }
      function Mh(t) {
        return function(n, s, l) {
          var d = be(n);
          if (!$t(n)) {
            var p = j(s, 3);
            n = Ze(n), s = function(g) {
              return p(d[g], g, d);
            };
          }
          var m = t(n, s, l);
          return m > -1 ? d[p ? n[m] : m] : o;
        };
      }
      function Dh(t) {
        return On(function(n) {
          var s = n.length, l = s, d = Kt.prototype.thru;
          for (t && n.reverse(); l--; ) {
            var p = n[l];
            if (typeof p != "function")
              throw new Zt(c);
            if (d && !m && ba(p) == "wrapper")
              var m = new Kt([], !0);
          }
          for (l = m ? l : s; ++l < s; ) {
            p = n[l];
            var g = ba(p), b = g == "wrapper" ? Fu(p) : o;
            b && Hu(b[0]) && b[1] == (R | I | k | z) && !b[4].length && b[9] == 1 ? m = m[ba(b[0])].apply(m, b[3]) : m = p.length == 1 && Hu(p) ? m[g]() : m.thru(p);
          }
          return function() {
            var A = arguments, T = A[0];
            if (m && A.length == 1 && X(T))
              return m.plant(T).value();
            for (var M = 0, U = s ? n[M].apply(this, A) : T; ++M < s; )
              U = n[M].call(this, U);
            return U;
          };
        });
      }
      function ga(t, n, s, l, d, p, m, g, b, A) {
        var T = n & R, M = n & D, U = n & S, H = n & (I | O), Z = n & de, te = U ? o : Ps(t);
        function K() {
          for (var ie = arguments.length, ce = C(ie), Dt = ie; Dt--; )
            ce[Dt] = arguments[Dt];
          if (H)
            var ft = Ao(K), Nt = s0(ce, ft);
          if (l && (ce = xh(ce, l, d, H)), p && (ce = Ah(ce, p, m, H)), ie -= Nt, H && ie < A) {
            var Pe = nr(ce, ft);
            return Ph(
              t,
              n,
              ga,
              K.placeholder,
              s,
              ce,
              Pe,
              g,
              b,
              A - ie
            );
          }
          var dn = M ? s : this, Un = U ? dn[t] : t;
          return ie = ce.length, g ? ce = hy(ce, g) : Z && ie > 1 && ce.reverse(), T && b < ie && (ce.length = b), this && this !== Je && this instanceof K && (Un = te || Ps(Un)), Un.apply(dn, ce);
        }
        return K;
      }
      function Nh(t, n) {
        return function(s, l) {
          return y$(s, t, n(l), {});
        };
      }
      function $a(t, n) {
        return function(s, l) {
          var d;
          if (s === o && l === o)
            return n;
          if (s !== o && (d = s), l !== o) {
            if (d === o)
              return l;
            typeof s == "string" || typeof l == "string" ? (s = Lt(s), l = Lt(l)) : (s = yh(s), l = yh(l)), d = t(s, l);
          }
          return d;
        };
      }
      function Nu(t) {
        return On(function(n) {
          return n = Ae(n, Bt(j())), oe(function(s) {
            var l = this;
            return t(n, function(d) {
              return Tt(d, l, s);
            });
          });
        });
      }
      function ya(t, n) {
        n = n === o ? " " : Lt(n);
        var s = n.length;
        if (s < 2)
          return s ? xu(n, t) : n;
        var l = xu(n, aa(t / Vo(n)));
        return yo(n) ? ar(ln(l), 0, t).join("") : l.slice(0, t);
      }
      function j$(t, n, s, l) {
        var d = n & D, p = Ps(t);
        function m() {
          for (var g = -1, b = arguments.length, A = -1, T = l.length, M = C(T + b), U = this && this !== Je && this instanceof m ? p : t; ++A < T; )
            M[A] = l[A];
          for (; b--; )
            M[A++] = arguments[++g];
          return Tt(U, d ? s : this, M);
        }
        return m;
      }
      function Oh(t) {
        return function(n, s, l) {
          return l && typeof l != "number" && dt(n, s, l) && (s = l = o), n = Fn(n), s === o ? (s = n, n = 0) : s = Fn(s), l = l === o ? n < s ? 1 : -1 : Fn(l), L$(n, s, l, t);
        };
      }
      function Va(t) {
        return function(n, s) {
          return typeof n == "string" && typeof s == "string" || (n = en(n), s = en(s)), t(n, s);
        };
      }
      function Ph(t, n, s, l, d, p, m, g, b, A) {
        var T = n & I, M = T ? m : o, U = T ? o : m, H = T ? p : o, Z = T ? o : p;
        n |= T ? k : P, n &= ~(T ? P : k), n & x || (n &= ~(D | S));
        var te = [
          t,
          n,
          d,
          H,
          M,
          Z,
          U,
          g,
          b,
          A
        ], K = s.apply(o, te);
        return Hu(t) && Kh(K, te), K.placeholder = l, Jh(K, t, n);
      }
      function Ou(t) {
        var n = ze[t];
        return function(s, l) {
          if (s = en(s), l = l == null ? 0 : ot(ee(l), 292), l && Jf(s)) {
            var d = (ve(s) + "e").split("e"), p = n(d[0] + "e" + (+d[1] + l));
            return d = (ve(p) + "e").split("e"), +(d[0] + "e" + (+d[1] - l));
          }
          return n(s);
        };
      }
      var Z$ = So && 1 / Ji(new So([, -0]))[1] == He ? function(t) {
        return new So(t);
      } : sc;
      function Rh(t) {
        return function(n) {
          var s = st(n);
          return s == mt ? hu(n) : s == _t ? f0(n) : o0(n, t(n));
        };
      }
      function Nn(t, n, s, l, d, p, m, g) {
        var b = n & S;
        if (!b && typeof t != "function")
          throw new Zt(c);
        var A = l ? l.length : 0;
        if (A || (n &= ~(k | P), l = d = o), m = m === o ? m : Ye(ee(m), 0), g = g === o ? g : ee(g), A -= d ? d.length : 0, n & P) {
          var T = l, M = d;
          l = d = o;
        }
        var U = b ? o : Fu(t), H = [
          t,
          n,
          s,
          l,
          d,
          T,
          M,
          p,
          m,
          g
        ];
        if (U && cy(H, U), t = H[0], n = H[1], s = H[2], l = H[3], d = H[4], g = H[9] = H[9] === o ? b ? 0 : t.length : Ye(H[9] - A, 0), !g && n & (I | O) && (n &= ~(I | O)), !n || n == D)
          var Z = Y$(t, n, s);
        else
          n == I || n == O ? Z = G$(t, n, g) : (n == k || n == (D | k)) && !d.length ? Z = j$(t, n, s, l) : Z = ga.apply(o, H);
        var te = U ? gh : Kh;
        return Jh(te(Z, H), t, n);
      }
      function Fh(t, n, s, l) {
        return t === o || cn(t, Co[s]) && !_e.call(l, s) ? n : t;
      }
      function Uh(t, n, s, l, d, p) {
        return Le(t) && Le(n) && (p.set(n, t), wa(t, n, o, Uh, p), p.delete(n)), t;
      }
      function K$(t) {
        return Us(t) ? o : t;
      }
      function Wh(t, n, s, l, d, p) {
        var m = s & L, g = t.length, b = n.length;
        if (g != b && !(m && b > g))
          return !1;
        var A = p.get(t), T = p.get(n);
        if (A && T)
          return A == n && T == t;
        var M = -1, U = !0, H = s & N ? new Mr() : o;
        for (p.set(t, n), p.set(n, t); ++M < g; ) {
          var Z = t[M], te = n[M];
          if (l)
            var K = m ? l(te, Z, M, n, t, p) : l(Z, te, M, t, n, p);
          if (K !== o) {
            if (K)
              continue;
            U = !1;
            break;
          }
          if (H) {
            if (!au(n, function(ie, ce) {
              if (!Es(H, ce) && (Z === ie || d(Z, ie, s, l, p)))
                return H.push(ce);
            })) {
              U = !1;
              break;
            }
          } else if (!(Z === te || d(Z, te, s, l, p))) {
            U = !1;
            break;
          }
        }
        return p.delete(t), p.delete(n), U;
      }
      function J$(t, n, s, l, d, p, m) {
        switch (s) {
          case Bn:
            if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
              return !1;
            t = t.buffer, n = n.buffer;
          case Qn:
            return !(t.byteLength != n.byteLength || !p(new ra(t), new ra(n)));
          case kr:
          case Er:
          case Zn:
            return cn(+t, +n);
          case Ir:
            return t.name == n.name && t.message == n.message;
          case Kn:
          case Jn:
            return t == n + "";
          case mt:
            var g = hu;
          case _t:
            var b = l & L;
            if (g || (g = Ji), t.size != n.size && !b)
              return !1;
            var A = m.get(t);
            if (A)
              return A == n;
            l |= N, m.set(t, n);
            var T = Wh(g(t), g(n), l, d, p, m);
            return m.delete(t), T;
          case Ar:
            if (Bs)
              return Bs.call(t) == Bs.call(n);
        }
        return !1;
      }
      function X$(t, n, s, l, d, p) {
        var m = s & L, g = Pu(t), b = g.length, A = Pu(n), T = A.length;
        if (b != T && !m)
          return !1;
        for (var M = b; M--; ) {
          var U = g[M];
          if (!(m ? U in n : _e.call(n, U)))
            return !1;
        }
        var H = p.get(t), Z = p.get(n);
        if (H && Z)
          return H == n && Z == t;
        var te = !0;
        p.set(t, n), p.set(n, t);
        for (var K = m; ++M < b; ) {
          U = g[M];
          var ie = t[U], ce = n[U];
          if (l)
            var Dt = m ? l(ce, ie, U, n, t, p) : l(ie, ce, U, t, n, p);
          if (!(Dt === o ? ie === ce || d(ie, ce, s, l, p) : Dt)) {
            te = !1;
            break;
          }
          K || (K = U == "constructor");
        }
        if (te && !K) {
          var ft = t.constructor, Nt = n.constructor;
          ft != Nt && "constructor" in t && "constructor" in n && !(typeof ft == "function" && ft instanceof ft && typeof Nt == "function" && Nt instanceof Nt) && (te = !1);
        }
        return p.delete(t), p.delete(n), te;
      }
      function On(t) {
        return Yu(jh(t, o, rp), t + "");
      }
      function Pu(t) {
        return lh(t, Ze, Wu);
      }
      function Ru(t) {
        return lh(t, yt, qh);
      }
      var Fu = ua ? function(t) {
        return ua.get(t);
      } : sc;
      function ba(t) {
        for (var n = t.name + "", s = ko[n], l = _e.call(ko, n) ? s.length : 0; l--; ) {
          var d = s[l], p = d.func;
          if (p == null || p == t)
            return d.name;
        }
        return n;
      }
      function Ao(t) {
        var n = _e.call(h, "placeholder") ? h : t;
        return n.placeholder;
      }
      function j() {
        var t = h.iteratee || rc;
        return t = t === rc ? dh : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function Ca(t, n) {
        var s = t.__data__;
        return iy(n) ? s[typeof n == "string" ? "string" : "hash"] : s.map;
      }
      function Uu(t) {
        for (var n = Ze(t), s = n.length; s--; ) {
          var l = n[s], d = t[l];
          n[s] = [l, d, Yh(d)];
        }
        return n;
      }
      function Or(t, n) {
        var s = u0(t, n);
        return ch(s) ? s : o;
      }
      function Q$(t) {
        var n = _e.call(t, Br), s = t[Br];
        try {
          t[Br] = o;
          var l = !0;
        } catch {
        }
        var d = ta.call(t);
        return l && (n ? t[Br] = s : delete t[Br]), d;
      }
      var Wu = wu ? function(t) {
        return t == null ? [] : (t = be(t), er(wu(t), function(n) {
          return Zf.call(t, n);
        }));
      } : ic, qh = wu ? function(t) {
        for (var n = []; t; )
          tr(n, Wu(t)), t = oa(t);
        return n;
      } : ic, st = ct;
      (vu && st(new vu(new ArrayBuffer(1))) != Bn || xs && st(new xs()) != mt || mu && st(mu.resolve()) != bs || So && st(new So()) != _t || As && st(new As()) != Xn) && (st = function(t) {
        var n = ct(t), s = n == Yt ? t.constructor : o, l = s ? Pr(s) : "";
        if (l)
          switch (l) {
            case D0:
              return Bn;
            case N0:
              return mt;
            case O0:
              return bs;
            case P0:
              return _t;
            case R0:
              return Xn;
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
              n = ot(n, t + m);
              break;
            case "takeRight":
              t = Ye(t, n - m);
              break;
          }
        }
        return { start: t, end: n };
      }
      function ty(t) {
        var n = t.match(a1);
        return n ? n[1].split(l1) : [];
      }
      function Hh(t, n, s) {
        n = ir(n, t);
        for (var l = -1, d = n.length, p = !1; ++l < d; ) {
          var m = bn(n[l]);
          if (!(p = t != null && s(t, m)))
            break;
          t = t[m];
        }
        return p || ++l != d ? p : (d = t == null ? 0 : t.length, !!d && Ta(d) && Pn(m, d) && (X(t) || Rr(t)));
      }
      function ny(t) {
        var n = t.length, s = new t.constructor(n);
        return n && typeof t[0] == "string" && _e.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function zh(t) {
        return typeof t.constructor == "function" && !Rs(t) ? Eo(oa(t)) : {};
      }
      function ry(t, n, s) {
        var l = t.constructor;
        switch (n) {
          case Qn:
            return Du(t);
          case kr:
          case Er:
            return new l(+t);
          case Bn:
            return F$(t, s);
          case ho:
          case po:
          case wo:
          case vo:
          case mo:
          case _o:
          case Q:
          case G:
          case re:
            return Eh(t, s);
          case mt:
            return new l();
          case Zn:
          case Jn:
            return new l(t);
          case Kn:
            return U$(t);
          case _t:
            return new l();
          case Ar:
            return W$(t);
        }
      }
      function oy(t, n) {
        var s = n.length;
        if (!s)
          return t;
        var l = s - 1;
        return n[l] = (s > 1 ? "& " : "") + n[l], n = n.join(s > 2 ? ", " : " "), t.replace(i1, `{
/* [wrapped with ` + n + `] */
`);
      }
      function sy(t) {
        return X(t) || Rr(t) || !!(Kf && t && t[Kf]);
      }
      function Pn(t, n) {
        var s = typeof t;
        return n = n == null ? We : n, !!n && (s == "number" || s != "symbol" && m1.test(t)) && t > -1 && t % 1 == 0 && t < n;
      }
      function dt(t, n, s) {
        if (!Le(s))
          return !1;
        var l = typeof n;
        return (l == "number" ? $t(s) && Pn(n, s.length) : l == "string" && n in s) ? cn(s[n], t) : !1;
      }
      function qu(t, n) {
        if (X(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || Mt(t) ? !0 : Hi.test(t) || !qi.test(t) || n != null && t in be(n);
      }
      function iy(t) {
        var n = typeof t;
        return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
      }
      function Hu(t) {
        var n = ba(t), s = h[n];
        if (typeof s != "function" || !(n in ae.prototype))
          return !1;
        if (t === s)
          return !0;
        var l = Fu(s);
        return !!l && t === l[0];
      }
      function ay(t) {
        return !!Yf && Yf in t;
      }
      var ly = Qi ? Rn : ac;
      function Rs(t) {
        var n = t && t.constructor, s = typeof n == "function" && n.prototype || Co;
        return t === s;
      }
      function Yh(t) {
        return t === t && !Le(t);
      }
      function Gh(t, n) {
        return function(s) {
          return s == null ? !1 : s[t] === n && (n !== o || t in be(s));
        };
      }
      function uy(t) {
        var n = xa(t, function(l) {
          return s.size === v && s.clear(), l;
        }), s = n.cache;
        return n;
      }
      function cy(t, n) {
        var s = t[1], l = n[1], d = s | l, p = d < (D | S | R), m = l == R && s == I || l == R && s == z && t[7].length <= n[8] || l == (R | z) && n[7].length <= n[8] && s == I;
        if (!(p || m))
          return t;
        l & D && (t[2] = n[2], d |= s & D ? 0 : x);
        var g = n[3];
        if (g) {
          var b = t[3];
          t[3] = b ? xh(b, g, n[4]) : g, t[4] = b ? nr(t[3], _) : n[4];
        }
        return g = n[5], g && (b = t[5], t[5] = b ? Ah(b, g, n[6]) : g, t[6] = b ? nr(t[5], _) : n[6]), g = n[7], g && (t[7] = g), l & R && (t[8] = t[8] == null ? n[8] : ot(t[8], n[8])), t[9] == null && (t[9] = n[9]), t[0] = n[0], t[1] = d, t;
      }
      function dy(t) {
        var n = [];
        if (t != null)
          for (var s in be(t))
            n.push(s);
        return n;
      }
      function fy(t) {
        return ta.call(t);
      }
      function jh(t, n, s) {
        return n = Ye(n === o ? t.length - 1 : n, 0), function() {
          for (var l = arguments, d = -1, p = Ye(l.length - n, 0), m = C(p); ++d < p; )
            m[d] = l[n + d];
          d = -1;
          for (var g = C(n + 1); ++d < n; )
            g[d] = l[d];
          return g[n] = s(m), Tt(t, this, g);
        };
      }
      function Zh(t, n) {
        return n.length < 2 ? t : Nr(t, Xt(n, 0, -1));
      }
      function hy(t, n) {
        for (var s = t.length, l = ot(n.length, s), d = gt(t); l--; ) {
          var p = n[l];
          t[l] = Pn(p, s) ? d[p] : o;
        }
        return t;
      }
      function zu(t, n) {
        if (!(n === "constructor" && typeof t[n] == "function") && n != "__proto__")
          return t[n];
      }
      var Kh = Xh(gh), Fs = I0 || function(t, n) {
        return Je.setTimeout(t, n);
      }, Yu = Xh(N$);
      function Jh(t, n, s) {
        var l = n + "";
        return Yu(t, oy(l, py(ty(l), s)));
      }
      function Xh(t) {
        var n = 0, s = 0;
        return function() {
          var l = B0(), d = ye - (l - s);
          if (s = l, d > 0) {
            if (++n >= Ve)
              return arguments[0];
          } else
            n = 0;
          return t.apply(o, arguments);
        };
      }
      function Sa(t, n) {
        var s = -1, l = t.length, d = l - 1;
        for (n = n === o ? l : n; ++s < n; ) {
          var p = Iu(s, d), m = t[p];
          t[p] = t[s], t[s] = m;
        }
        return t.length = n, t;
      }
      var Qh = uy(function(t) {
        var n = [];
        return t.charCodeAt(0) === 46 && n.push(""), t.replace(zi, function(s, l, d, p) {
          n.push(d ? p.replace(d1, "$1") : l || s);
        }), n;
      });
      function bn(t) {
        if (typeof t == "string" || Mt(t))
          return t;
        var n = t + "";
        return n == "0" && 1 / t == -He ? "-0" : n;
      }
      function Pr(t) {
        if (t != null) {
          try {
            return ea.call(t);
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
        return jt(jl, function(s) {
          var l = "_." + s[0];
          n & s[1] && !Zi(t, l) && t.push(l);
        }), t.sort();
      }
      function ep(t) {
        if (t instanceof ae)
          return t.clone();
        var n = new Kt(t.__wrapped__, t.__chain__);
        return n.__actions__ = gt(t.__actions__), n.__index__ = t.__index__, n.__values__ = t.__values__, n;
      }
      function wy(t, n, s) {
        (s ? dt(t, n, s) : n === o) ? n = 1 : n = Ye(ee(n), 0);
        var l = t == null ? 0 : t.length;
        if (!l || n < 1)
          return [];
        for (var d = 0, p = 0, m = C(aa(l / n)); d < l; )
          m[p++] = Xt(t, d, d += n);
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
        return tr(X(s) ? gt(s) : [s], Xe(n, 1));
      }
      var _y = oe(function(t, n) {
        return Oe(t) ? Ms(t, Xe(n, 1, Oe, !0)) : [];
      }), gy = oe(function(t, n) {
        var s = Qt(n);
        return Oe(s) && (s = o), Oe(t) ? Ms(t, Xe(n, 1, Oe, !0), j(s, 2)) : [];
      }), $y = oe(function(t, n) {
        var s = Qt(n);
        return Oe(s) && (s = o), Oe(t) ? Ms(t, Xe(n, 1, Oe, !0), o, s) : [];
      });
      function yy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === o ? 1 : ee(n), Xt(t, n < 0 ? 0 : n, l)) : [];
      }
      function Vy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === o ? 1 : ee(n), n = l - n, Xt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function by(t, n) {
        return t && t.length ? ma(t, j(n, 3), !0, !0) : [];
      }
      function Cy(t, n) {
        return t && t.length ? ma(t, j(n, 3), !0) : [];
      }
      function Sy(t, n, s, l) {
        var d = t == null ? 0 : t.length;
        return d ? (s && typeof s != "number" && dt(t, n, s) && (s = 0, l = d), m$(t, n, s, l)) : [];
      }
      function tp(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : ee(s);
        return d < 0 && (d = Ye(l + d, 0)), Ki(t, j(n, 3), d);
      }
      function np(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l - 1;
        return s !== o && (d = ee(s), d = s < 0 ? Ye(l + d, 0) : ot(d, l - 1)), Ki(t, j(n, 3), d, !0);
      }
      function rp(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xe(t, 1) : [];
      }
      function ky(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xe(t, He) : [];
      }
      function Ey(t, n) {
        var s = t == null ? 0 : t.length;
        return s ? (n = n === o ? 1 : ee(n), Xe(t, n)) : [];
      }
      function Iy(t) {
        for (var n = -1, s = t == null ? 0 : t.length, l = {}; ++n < s; ) {
          var d = t[n];
          l[d[0]] = d[1];
        }
        return l;
      }
      function op(t) {
        return t && t.length ? t[0] : o;
      }
      function xy(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = s == null ? 0 : ee(s);
        return d < 0 && (d = Ye(l + d, 0)), $o(t, n, d);
      }
      function Ay(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xt(t, 0, -1) : [];
      }
      var Ty = oe(function(t) {
        var n = Ae(t, Lu);
        return n.length && n[0] === t[0] ? bu(n) : [];
      }), By = oe(function(t) {
        var n = Qt(t), s = Ae(t, Lu);
        return n === Qt(s) ? n = o : s.pop(), s.length && s[0] === t[0] ? bu(s, j(n, 2)) : [];
      }), Ly = oe(function(t) {
        var n = Qt(t), s = Ae(t, Lu);
        return n = typeof n == "function" ? n : o, n && s.pop(), s.length && s[0] === t[0] ? bu(s, o, n) : [];
      });
      function My(t, n) {
        return t == null ? "" : A0.call(t, n);
      }
      function Qt(t) {
        var n = t == null ? 0 : t.length;
        return n ? t[n - 1] : o;
      }
      function Dy(t, n, s) {
        var l = t == null ? 0 : t.length;
        if (!l)
          return -1;
        var d = l;
        return s !== o && (d = ee(s), d = d < 0 ? Ye(l + d, 0) : ot(d, l - 1)), n === n ? p0(t, n, d) : Ki(t, Pf, d, !0);
      }
      function Ny(t, n) {
        return t && t.length ? wh(t, ee(n)) : o;
      }
      var Oy = oe(sp);
      function sp(t, n) {
        return t && t.length && n && n.length ? Eu(t, n) : t;
      }
      function Py(t, n, s) {
        return t && t.length && n && n.length ? Eu(t, n, j(s, 2)) : t;
      }
      function Ry(t, n, s) {
        return t && t.length && n && n.length ? Eu(t, n, o, s) : t;
      }
      var Fy = On(function(t, n) {
        var s = t == null ? 0 : t.length, l = gu(t, n);
        return _h(t, Ae(n, function(d) {
          return Pn(d, s) ? +d : d;
        }).sort(Ih)), l;
      });
      function Uy(t, n) {
        var s = [];
        if (!(t && t.length))
          return s;
        var l = -1, d = [], p = t.length;
        for (n = j(n, 3); ++l < p; ) {
          var m = t[l];
          n(m, l, t) && (s.push(m), d.push(l));
        }
        return _h(t, d), s;
      }
      function Gu(t) {
        return t == null ? t : M0.call(t);
      }
      function Wy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && dt(t, n, s) ? (n = 0, s = l) : (n = n == null ? 0 : ee(n), s = s === o ? l : ee(s)), Xt(t, n, s)) : [];
      }
      function qy(t, n) {
        return va(t, n);
      }
      function Hy(t, n, s) {
        return Au(t, n, j(s, 2));
      }
      function zy(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = va(t, n);
          if (l < s && cn(t[l], n))
            return l;
        }
        return -1;
      }
      function Yy(t, n) {
        return va(t, n, !0);
      }
      function Gy(t, n, s) {
        return Au(t, n, j(s, 2), !0);
      }
      function jy(t, n) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var l = va(t, n, !0) - 1;
          if (cn(t[l], n))
            return l;
        }
        return -1;
      }
      function Zy(t) {
        return t && t.length ? $h(t) : [];
      }
      function Ky(t, n) {
        return t && t.length ? $h(t, j(n, 2)) : [];
      }
      function Jy(t) {
        var n = t == null ? 0 : t.length;
        return n ? Xt(t, 1, n) : [];
      }
      function Xy(t, n, s) {
        return t && t.length ? (n = s || n === o ? 1 : ee(n), Xt(t, 0, n < 0 ? 0 : n)) : [];
      }
      function Qy(t, n, s) {
        var l = t == null ? 0 : t.length;
        return l ? (n = s || n === o ? 1 : ee(n), n = l - n, Xt(t, n < 0 ? 0 : n, l)) : [];
      }
      function eV(t, n) {
        return t && t.length ? ma(t, j(n, 3), !1, !0) : [];
      }
      function tV(t, n) {
        return t && t.length ? ma(t, j(n, 3)) : [];
      }
      var nV = oe(function(t) {
        return sr(Xe(t, 1, Oe, !0));
      }), rV = oe(function(t) {
        var n = Qt(t);
        return Oe(n) && (n = o), sr(Xe(t, 1, Oe, !0), j(n, 2));
      }), oV = oe(function(t) {
        var n = Qt(t);
        return n = typeof n == "function" ? n : o, sr(Xe(t, 1, Oe, !0), o, n);
      });
      function sV(t) {
        return t && t.length ? sr(t) : [];
      }
      function iV(t, n) {
        return t && t.length ? sr(t, j(n, 2)) : [];
      }
      function aV(t, n) {
        return n = typeof n == "function" ? n : o, t && t.length ? sr(t, o, n) : [];
      }
      function ju(t) {
        if (!(t && t.length))
          return [];
        var n = 0;
        return t = er(t, function(s) {
          if (Oe(s))
            return n = Ye(s.length, n), !0;
        }), du(n, function(s) {
          return Ae(t, lu(s));
        });
      }
      function ip(t, n) {
        if (!(t && t.length))
          return [];
        var s = ju(t);
        return n == null ? s : Ae(s, function(l) {
          return Tt(n, o, l);
        });
      }
      var lV = oe(function(t, n) {
        return Oe(t) ? Ms(t, n) : [];
      }), uV = oe(function(t) {
        return Bu(er(t, Oe));
      }), cV = oe(function(t) {
        var n = Qt(t);
        return Oe(n) && (n = o), Bu(er(t, Oe), j(n, 2));
      }), dV = oe(function(t) {
        var n = Qt(t);
        return n = typeof n == "function" ? n : o, Bu(er(t, Oe), o, n);
      }), fV = oe(ju);
      function hV(t, n) {
        return Ch(t || [], n || [], Ls);
      }
      function pV(t, n) {
        return Ch(t || [], n || [], Os);
      }
      var wV = oe(function(t) {
        var n = t.length, s = n > 1 ? t[n - 1] : o;
        return s = typeof s == "function" ? (t.pop(), s) : o, ip(t, s);
      });
      function ap(t) {
        var n = h(t);
        return n.__chain__ = !0, n;
      }
      function vV(t, n) {
        return n(t), t;
      }
      function ka(t, n) {
        return n(t);
      }
      var mV = On(function(t) {
        var n = t.length, s = n ? t[0] : 0, l = this.__wrapped__, d = function(p) {
          return gu(p, t);
        };
        return n > 1 || this.__actions__.length || !(l instanceof ae) || !Pn(s) ? this.thru(d) : (l = l.slice(s, +s + (n ? 1 : 0)), l.__actions__.push({
          func: ka,
          args: [d],
          thisArg: o
        }), new Kt(l, this.__chain__).thru(function(p) {
          return n && !p.length && p.push(o), p;
        }));
      });
      function _V() {
        return ap(this);
      }
      function gV() {
        return new Kt(this.value(), this.__chain__);
      }
      function $V() {
        this.__values__ === o && (this.__values__ = yp(this.value()));
        var t = this.__index__ >= this.__values__.length, n = t ? o : this.__values__[this.__index__++];
        return { done: t, value: n };
      }
      function yV() {
        return this;
      }
      function VV(t) {
        for (var n, s = this; s instanceof da; ) {
          var l = ep(s);
          l.__index__ = 0, l.__values__ = o, n ? d.__wrapped__ = l : n = l;
          var d = l;
          s = s.__wrapped__;
        }
        return d.__wrapped__ = t, n;
      }
      function bV() {
        var t = this.__wrapped__;
        if (t instanceof ae) {
          var n = t;
          return this.__actions__.length && (n = new ae(this)), n = n.reverse(), n.__actions__.push({
            func: ka,
            args: [Gu],
            thisArg: o
          }), new Kt(n, this.__chain__);
        }
        return this.thru(Gu);
      }
      function CV() {
        return bh(this.__wrapped__, this.__actions__);
      }
      var SV = _a(function(t, n, s) {
        _e.call(t, s) ? ++t[s] : Dn(t, s, 1);
      });
      function kV(t, n, s) {
        var l = X(t) ? Nf : v$;
        return s && dt(t, n, s) && (n = o), l(t, j(n, 3));
      }
      function EV(t, n) {
        var s = X(t) ? er : ih;
        return s(t, j(n, 3));
      }
      var IV = Mh(tp), xV = Mh(np);
      function AV(t, n) {
        return Xe(Ea(t, n), 1);
      }
      function TV(t, n) {
        return Xe(Ea(t, n), He);
      }
      function BV(t, n, s) {
        return s = s === o ? 1 : ee(s), Xe(Ea(t, n), s);
      }
      function lp(t, n) {
        var s = X(t) ? jt : or;
        return s(t, j(n, 3));
      }
      function up(t, n) {
        var s = X(t) ? J1 : sh;
        return s(t, j(n, 3));
      }
      var LV = _a(function(t, n, s) {
        _e.call(t, s) ? t[s].push(n) : Dn(t, s, [n]);
      });
      function MV(t, n, s, l) {
        t = $t(t) ? t : Bo(t), s = s && !l ? ee(s) : 0;
        var d = t.length;
        return s < 0 && (s = Ye(d + s, 0)), Ba(t) ? s <= d && t.indexOf(n, s) > -1 : !!d && $o(t, n, s) > -1;
      }
      var DV = oe(function(t, n, s) {
        var l = -1, d = typeof n == "function", p = $t(t) ? C(t.length) : [];
        return or(t, function(m) {
          p[++l] = d ? Tt(n, m, s) : Ds(m, n, s);
        }), p;
      }), NV = _a(function(t, n, s) {
        Dn(t, s, n);
      });
      function Ea(t, n) {
        var s = X(t) ? Ae : fh;
        return s(t, j(n, 3));
      }
      function OV(t, n, s, l) {
        return t == null ? [] : (X(n) || (n = n == null ? [] : [n]), s = l ? o : s, X(s) || (s = s == null ? [] : [s]), vh(t, n, s));
      }
      var PV = _a(function(t, n, s) {
        t[s ? 0 : 1].push(n);
      }, function() {
        return [[], []];
      });
      function RV(t, n, s) {
        var l = X(t) ? iu : Ff, d = arguments.length < 3;
        return l(t, j(n, 4), s, d, or);
      }
      function FV(t, n, s) {
        var l = X(t) ? X1 : Ff, d = arguments.length < 3;
        return l(t, j(n, 4), s, d, sh);
      }
      function UV(t, n) {
        var s = X(t) ? er : ih;
        return s(t, Aa(j(n, 3)));
      }
      function WV(t) {
        var n = X(t) ? th : M$;
        return n(t);
      }
      function qV(t, n, s) {
        (s ? dt(t, n, s) : n === o) ? n = 1 : n = ee(n);
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
        if ($t(t))
          return Ba(t) ? Vo(t) : t.length;
        var n = st(t);
        return n == mt || n == _t ? t.size : Su(t).length;
      }
      function YV(t, n, s) {
        var l = X(t) ? au : P$;
        return s && dt(t, n, s) && (n = o), l(t, j(n, 3));
      }
      var GV = oe(function(t, n) {
        if (t == null)
          return [];
        var s = n.length;
        return s > 1 && dt(t, n[0], n[1]) ? n = [] : s > 2 && dt(n[0], n[1], n[2]) && (n = [n[0]]), vh(t, Xe(n, 1), []);
      }), Ia = E0 || function() {
        return Je.Date.now();
      };
      function jV(t, n) {
        if (typeof n != "function")
          throw new Zt(c);
        return t = ee(t), function() {
          if (--t < 1)
            return n.apply(this, arguments);
        };
      }
      function cp(t, n, s) {
        return n = s ? o : n, n = t && n == null ? t.length : n, Nn(t, R, o, o, o, o, n);
      }
      function dp(t, n) {
        var s;
        if (typeof n != "function")
          throw new Zt(c);
        return t = ee(t), function() {
          return --t > 0 && (s = n.apply(this, arguments)), t <= 1 && (n = o), s;
        };
      }
      var Zu = oe(function(t, n, s) {
        var l = D;
        if (s.length) {
          var d = nr(s, Ao(Zu));
          l |= k;
        }
        return Nn(t, l, n, s, d);
      }), fp = oe(function(t, n, s) {
        var l = D | S;
        if (s.length) {
          var d = nr(s, Ao(fp));
          l |= k;
        }
        return Nn(n, l, t, s, d);
      });
      function hp(t, n, s) {
        n = s ? o : n;
        var l = Nn(t, I, o, o, o, o, o, n);
        return l.placeholder = hp.placeholder, l;
      }
      function pp(t, n, s) {
        n = s ? o : n;
        var l = Nn(t, O, o, o, o, o, o, n);
        return l.placeholder = pp.placeholder, l;
      }
      function wp(t, n, s) {
        var l, d, p, m, g, b, A = 0, T = !1, M = !1, U = !0;
        if (typeof t != "function")
          throw new Zt(c);
        n = en(n) || 0, Le(s) && (T = !!s.leading, M = "maxWait" in s, p = M ? Ye(en(s.maxWait) || 0, n) : p, U = "trailing" in s ? !!s.trailing : U);
        function H(Pe) {
          var dn = l, Un = d;
          return l = d = o, A = Pe, m = t.apply(Un, dn), m;
        }
        function Z(Pe) {
          return A = Pe, g = Fs(ie, n), T ? H(Pe) : m;
        }
        function te(Pe) {
          var dn = Pe - b, Un = Pe - A, Mp = n - dn;
          return M ? ot(Mp, p - Un) : Mp;
        }
        function K(Pe) {
          var dn = Pe - b, Un = Pe - A;
          return b === o || dn >= n || dn < 0 || M && Un >= p;
        }
        function ie() {
          var Pe = Ia();
          if (K(Pe))
            return ce(Pe);
          g = Fs(ie, te(Pe));
        }
        function ce(Pe) {
          return g = o, U && l ? H(Pe) : (l = d = o, m);
        }
        function Dt() {
          g !== o && Sh(g), A = 0, l = b = d = g = o;
        }
        function ft() {
          return g === o ? m : ce(Ia());
        }
        function Nt() {
          var Pe = Ia(), dn = K(Pe);
          if (l = arguments, d = this, b = Pe, dn) {
            if (g === o)
              return Z(b);
            if (M)
              return Sh(g), g = Fs(ie, n), H(b);
          }
          return g === o && (g = Fs(ie, n)), m;
        }
        return Nt.cancel = Dt, Nt.flush = ft, Nt;
      }
      var ZV = oe(function(t, n) {
        return oh(t, 1, n);
      }), KV = oe(function(t, n, s) {
        return oh(t, en(n) || 0, s);
      });
      function JV(t) {
        return Nn(t, de);
      }
      function xa(t, n) {
        if (typeof t != "function" || n != null && typeof n != "function")
          throw new Zt(c);
        var s = function() {
          var l = arguments, d = n ? n.apply(this, l) : l[0], p = s.cache;
          if (p.has(d))
            return p.get(d);
          var m = t.apply(this, l);
          return s.cache = p.set(d, m) || p, m;
        };
        return s.cache = new (xa.Cache || Mn)(), s;
      }
      xa.Cache = Mn;
      function Aa(t) {
        if (typeof t != "function")
          throw new Zt(c);
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
        return dp(2, t);
      }
      var QV = R$(function(t, n) {
        n = n.length == 1 && X(n[0]) ? Ae(n[0], Bt(j())) : Ae(Xe(n, 1), Bt(j()));
        var s = n.length;
        return oe(function(l) {
          for (var d = -1, p = ot(l.length, s); ++d < p; )
            l[d] = n[d].call(this, l[d]);
          return Tt(t, this, l);
        });
      }), Ku = oe(function(t, n) {
        var s = nr(n, Ao(Ku));
        return Nn(t, k, o, n, s);
      }), vp = oe(function(t, n) {
        var s = nr(n, Ao(vp));
        return Nn(t, P, o, n, s);
      }), eb = On(function(t, n) {
        return Nn(t, z, o, o, o, n);
      });
      function tb(t, n) {
        if (typeof t != "function")
          throw new Zt(c);
        return n = n === o ? n : ee(n), oe(t, n);
      }
      function nb(t, n) {
        if (typeof t != "function")
          throw new Zt(c);
        return n = n == null ? 0 : Ye(ee(n), 0), oe(function(s) {
          var l = s[n], d = ar(s, 0, n);
          return l && tr(d, l), Tt(t, this, d);
        });
      }
      function rb(t, n, s) {
        var l = !0, d = !0;
        if (typeof t != "function")
          throw new Zt(c);
        return Le(s) && (l = "leading" in s ? !!s.leading : l, d = "trailing" in s ? !!s.trailing : d), wp(t, n, {
          leading: l,
          maxWait: n,
          trailing: d
        });
      }
      function ob(t) {
        return cp(t, 1);
      }
      function sb(t, n) {
        return Ku(Mu(n), t);
      }
      function ib() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return X(t) ? t : [t];
      }
      function ab(t) {
        return Jt(t, B);
      }
      function lb(t, n) {
        return n = typeof n == "function" ? n : o, Jt(t, B, n);
      }
      function ub(t) {
        return Jt(t, $ | B);
      }
      function cb(t, n) {
        return n = typeof n == "function" ? n : o, Jt(t, $ | B, n);
      }
      function db(t, n) {
        return n == null || rh(t, n, Ze(n));
      }
      function cn(t, n) {
        return t === n || t !== t && n !== n;
      }
      var fb = Va(Vu), hb = Va(function(t, n) {
        return t >= n;
      }), Rr = uh(function() {
        return arguments;
      }()) ? uh : function(t) {
        return De(t) && _e.call(t, "callee") && !Zf.call(t, "callee");
      }, X = C.isArray, pb = Af ? Bt(Af) : V$;
      function $t(t) {
        return t != null && Ta(t.length) && !Rn(t);
      }
      function Oe(t) {
        return De(t) && $t(t);
      }
      function wb(t) {
        return t === !0 || t === !1 || De(t) && ct(t) == kr;
      }
      var lr = x0 || ac, vb = Tf ? Bt(Tf) : b$;
      function mb(t) {
        return De(t) && t.nodeType === 1 && !Us(t);
      }
      function _b(t) {
        if (t == null)
          return !0;
        if ($t(t) && (X(t) || typeof t == "string" || typeof t.splice == "function" || lr(t) || To(t) || Rr(t)))
          return !t.length;
        var n = st(t);
        if (n == mt || n == _t)
          return !t.size;
        if (Rs(t))
          return !Su(t).length;
        for (var s in t)
          if (_e.call(t, s))
            return !1;
        return !0;
      }
      function gb(t, n) {
        return Ns(t, n);
      }
      function $b(t, n, s) {
        s = typeof s == "function" ? s : o;
        var l = s ? s(t, n) : o;
        return l === o ? Ns(t, n, o, s) : !!l;
      }
      function Ju(t) {
        if (!De(t))
          return !1;
        var n = ct(t);
        return n == Ir || n == Ti || typeof t.message == "string" && typeof t.name == "string" && !Us(t);
      }
      function yb(t) {
        return typeof t == "number" && Jf(t);
      }
      function Rn(t) {
        if (!Le(t))
          return !1;
        var n = ct(t);
        return n == xr || n == Vs || n == Zl || n == Li;
      }
      function mp(t) {
        return typeof t == "number" && t == ee(t);
      }
      function Ta(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= We;
      }
      function Le(t) {
        var n = typeof t;
        return t != null && (n == "object" || n == "function");
      }
      function De(t) {
        return t != null && typeof t == "object";
      }
      var _p = Bf ? Bt(Bf) : S$;
      function Vb(t, n) {
        return t === n || Cu(t, n, Uu(n));
      }
      function bb(t, n, s) {
        return s = typeof s == "function" ? s : o, Cu(t, n, Uu(n), s);
      }
      function Cb(t) {
        return gp(t) && t != +t;
      }
      function Sb(t) {
        if (ly(t))
          throw new J(u);
        return ch(t);
      }
      function kb(t) {
        return t === null;
      }
      function Eb(t) {
        return t == null;
      }
      function gp(t) {
        return typeof t == "number" || De(t) && ct(t) == Zn;
      }
      function Us(t) {
        if (!De(t) || ct(t) != Yt)
          return !1;
        var n = oa(t);
        if (n === null)
          return !0;
        var s = _e.call(n, "constructor") && n.constructor;
        return typeof s == "function" && s instanceof s && ea.call(s) == b0;
      }
      var Xu = Lf ? Bt(Lf) : k$;
      function Ib(t) {
        return mp(t) && t >= -We && t <= We;
      }
      var $p = Mf ? Bt(Mf) : E$;
      function Ba(t) {
        return typeof t == "string" || !X(t) && De(t) && ct(t) == Jn;
      }
      function Mt(t) {
        return typeof t == "symbol" || De(t) && ct(t) == Ar;
      }
      var To = Df ? Bt(Df) : I$;
      function xb(t) {
        return t === o;
      }
      function Ab(t) {
        return De(t) && st(t) == Xn;
      }
      function Tb(t) {
        return De(t) && ct(t) == Di;
      }
      var Bb = Va(ku), Lb = Va(function(t, n) {
        return t <= n;
      });
      function yp(t) {
        if (!t)
          return [];
        if ($t(t))
          return Ba(t) ? ln(t) : gt(t);
        if (Is && t[Is])
          return d0(t[Is]());
        var n = st(t), s = n == mt ? hu : n == _t ? Ji : Bo;
        return s(t);
      }
      function Fn(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = en(t), t === He || t === -He) {
          var n = t < 0 ? -1 : 1;
          return n * $n;
        }
        return t === t ? t : 0;
      }
      function ee(t) {
        var n = Fn(t), s = n % 1;
        return n === n ? s ? n - s : n : 0;
      }
      function Vp(t) {
        return t ? Dr(ee(t), 0, At) : 0;
      }
      function en(t) {
        if (typeof t == "number")
          return t;
        if (Mt(t))
          return Tn;
        if (Le(t)) {
          var n = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = Le(n) ? n + "" : n;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Uf(t);
        var s = p1.test(t);
        return s || v1.test(t) ? j1(t.slice(2), s ? 2 : 8) : h1.test(t) ? Tn : +t;
      }
      function bp(t) {
        return Vn(t, yt(t));
      }
      function Mb(t) {
        return t ? Dr(ee(t), -We, We) : t === 0 ? t : 0;
      }
      function ve(t) {
        return t == null ? "" : Lt(t);
      }
      var Db = Io(function(t, n) {
        if (Rs(n) || $t(n)) {
          Vn(n, Ze(n), t);
          return;
        }
        for (var s in n)
          _e.call(n, s) && Ls(t, s, n[s]);
      }), Cp = Io(function(t, n) {
        Vn(n, yt(n), t);
      }), La = Io(function(t, n, s, l) {
        Vn(n, yt(n), t, l);
      }), Nb = Io(function(t, n, s, l) {
        Vn(n, Ze(n), t, l);
      }), Ob = On(gu);
      function Pb(t, n) {
        var s = Eo(t);
        return n == null ? s : nh(s, n);
      }
      var Rb = oe(function(t, n) {
        t = be(t);
        var s = -1, l = n.length, d = l > 2 ? n[2] : o;
        for (d && dt(n[0], n[1], d) && (l = 1); ++s < l; )
          for (var p = n[s], m = yt(p), g = -1, b = m.length; ++g < b; ) {
            var A = m[g], T = t[A];
            (T === o || cn(T, Co[A]) && !_e.call(t, A)) && (t[A] = p[A]);
          }
        return t;
      }), Fb = oe(function(t) {
        return t.push(o, Uh), Tt(Sp, o, t);
      });
      function Ub(t, n) {
        return Of(t, j(n, 3), yn);
      }
      function Wb(t, n) {
        return Of(t, j(n, 3), yu);
      }
      function qb(t, n) {
        return t == null ? t : $u(t, j(n, 3), yt);
      }
      function Hb(t, n) {
        return t == null ? t : ah(t, j(n, 3), yt);
      }
      function zb(t, n) {
        return t && yn(t, j(n, 3));
      }
      function Yb(t, n) {
        return t && yu(t, j(n, 3));
      }
      function Gb(t) {
        return t == null ? [] : pa(t, Ze(t));
      }
      function jb(t) {
        return t == null ? [] : pa(t, yt(t));
      }
      function Qu(t, n, s) {
        var l = t == null ? o : Nr(t, n);
        return l === o ? s : l;
      }
      function Zb(t, n) {
        return t != null && Hh(t, n, _$);
      }
      function ec(t, n) {
        return t != null && Hh(t, n, g$);
      }
      var Kb = Nh(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = ta.call(n)), t[n] = s;
      }, nc(Vt)), Jb = Nh(function(t, n, s) {
        n != null && typeof n.toString != "function" && (n = ta.call(n)), _e.call(t, n) ? t[n].push(s) : t[n] = [s];
      }, j), Xb = oe(Ds);
      function Ze(t) {
        return $t(t) ? eh(t) : Su(t);
      }
      function yt(t) {
        return $t(t) ? eh(t, !0) : x$(t);
      }
      function Qb(t, n) {
        var s = {};
        return n = j(n, 3), yn(t, function(l, d, p) {
          Dn(s, n(l, d, p), l);
        }), s;
      }
      function eC(t, n) {
        var s = {};
        return n = j(n, 3), yn(t, function(l, d, p) {
          Dn(s, d, n(l, d, p));
        }), s;
      }
      var tC = Io(function(t, n, s) {
        wa(t, n, s);
      }), Sp = Io(function(t, n, s, l) {
        wa(t, n, s, l);
      }), nC = On(function(t, n) {
        var s = {};
        if (t == null)
          return s;
        var l = !1;
        n = Ae(n, function(p) {
          return p = ir(p, t), l || (l = p.length > 1), p;
        }), Vn(t, Ru(t), s), l && (s = Jt(s, $ | y | B, K$));
        for (var d = n.length; d--; )
          Tu(s, n[d]);
        return s;
      });
      function rC(t, n) {
        return kp(t, Aa(j(n)));
      }
      var oC = On(function(t, n) {
        return t == null ? {} : T$(t, n);
      });
      function kp(t, n) {
        if (t == null)
          return {};
        var s = Ae(Ru(t), function(l) {
          return [l];
        });
        return n = j(n), mh(t, s, function(l, d) {
          return n(l, d[0]);
        });
      }
      function sC(t, n, s) {
        n = ir(n, t);
        var l = -1, d = n.length;
        for (d || (d = 1, t = o); ++l < d; ) {
          var p = t == null ? o : t[bn(n[l])];
          p === o && (l = d, p = s), t = Rn(p) ? p.call(t) : p;
        }
        return t;
      }
      function iC(t, n, s) {
        return t == null ? t : Os(t, n, s);
      }
      function aC(t, n, s, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Os(t, n, s, l);
      }
      var Ep = Rh(Ze), Ip = Rh(yt);
      function lC(t, n, s) {
        var l = X(t), d = l || lr(t) || To(t);
        if (n = j(n, 4), s == null) {
          var p = t && t.constructor;
          d ? s = l ? new p() : [] : Le(t) ? s = Rn(p) ? Eo(oa(t)) : {} : s = {};
        }
        return (d ? jt : yn)(t, function(m, g, b) {
          return n(s, m, g, b);
        }), s;
      }
      function uC(t, n) {
        return t == null ? !0 : Tu(t, n);
      }
      function cC(t, n, s) {
        return t == null ? t : Vh(t, n, Mu(s));
      }
      function dC(t, n, s, l) {
        return l = typeof l == "function" ? l : o, t == null ? t : Vh(t, n, Mu(s), l);
      }
      function Bo(t) {
        return t == null ? [] : fu(t, Ze(t));
      }
      function fC(t) {
        return t == null ? [] : fu(t, yt(t));
      }
      function hC(t, n, s) {
        return s === o && (s = n, n = o), s !== o && (s = en(s), s = s === s ? s : 0), n !== o && (n = en(n), n = n === n ? n : 0), Dr(en(t), n, s);
      }
      function pC(t, n, s) {
        return n = Fn(n), s === o ? (s = n, n = 0) : s = Fn(s), t = en(t), $$(t, n, s);
      }
      function wC(t, n, s) {
        if (s && typeof s != "boolean" && dt(t, n, s) && (n = s = o), s === o && (typeof n == "boolean" ? (s = n, n = o) : typeof t == "boolean" && (s = t, t = o)), t === o && n === o ? (t = 0, n = 1) : (t = Fn(t), n === o ? (n = t, t = 0) : n = Fn(n)), t > n) {
          var l = t;
          t = n, n = l;
        }
        if (s || t % 1 || n % 1) {
          var d = Xf();
          return ot(t + d * (n - t + G1("1e-" + ((d + "").length - 1))), n);
        }
        return Iu(t, n);
      }
      var vC = xo(function(t, n, s) {
        return n = n.toLowerCase(), t + (s ? xp(n) : n);
      });
      function xp(t) {
        return tc(ve(t).toLowerCase());
      }
      function Ap(t) {
        return t = ve(t), t && t.replace(_1, i0).replace(O1, "");
      }
      function mC(t, n, s) {
        t = ve(t), n = Lt(n);
        var l = t.length;
        s = s === o ? l : Dr(ee(s), 0, l);
        var d = s;
        return s -= n.length, s >= 0 && t.slice(s, d) == n;
      }
      function _C(t) {
        return t = ve(t), t && Fi.test(t) ? t.replace(Ss, a0) : t;
      }
      function gC(t) {
        return t = ve(t), t && o1.test(t) ? t.replace(Kl, "\\$&") : t;
      }
      var $C = xo(function(t, n, s) {
        return t + (s ? "-" : "") + n.toLowerCase();
      }), yC = xo(function(t, n, s) {
        return t + (s ? " " : "") + n.toLowerCase();
      }), VC = Lh("toLowerCase");
      function bC(t, n, s) {
        t = ve(t), n = ee(n);
        var l = n ? Vo(t) : 0;
        if (!n || l >= n)
          return t;
        var d = (n - l) / 2;
        return ya(la(d), s) + t + ya(aa(d), s);
      }
      function CC(t, n, s) {
        t = ve(t), n = ee(n);
        var l = n ? Vo(t) : 0;
        return n && l < n ? t + ya(n - l, s) : t;
      }
      function SC(t, n, s) {
        t = ve(t), n = ee(n);
        var l = n ? Vo(t) : 0;
        return n && l < n ? ya(n - l, s) + t : t;
      }
      function kC(t, n, s) {
        return s || n == null ? n = 0 : n && (n = +n), L0(ve(t).replace(Jl, ""), n || 0);
      }
      function EC(t, n, s) {
        return (s ? dt(t, n, s) : n === o) ? n = 1 : n = ee(n), xu(ve(t), n);
      }
      function IC() {
        var t = arguments, n = ve(t[0]);
        return t.length < 3 ? n : n.replace(t[1], t[2]);
      }
      var xC = xo(function(t, n, s) {
        return t + (s ? "_" : "") + n.toLowerCase();
      });
      function AC(t, n, s) {
        return s && typeof s != "number" && dt(t, n, s) && (n = s = o), s = s === o ? At : s >>> 0, s ? (t = ve(t), t && (typeof n == "string" || n != null && !Xu(n)) && (n = Lt(n), !n && yo(t)) ? ar(ln(t), 0, s) : t.split(n, s)) : [];
      }
      var TC = xo(function(t, n, s) {
        return t + (s ? " " : "") + tc(n);
      });
      function BC(t, n, s) {
        return t = ve(t), s = s == null ? 0 : Dr(ee(s), 0, t.length), n = Lt(n), t.slice(s, s + n.length) == n;
      }
      function LC(t, n, s) {
        var l = h.templateSettings;
        s && dt(t, n, s) && (n = o), t = ve(t), n = La({}, n, l, Fh);
        var d = La({}, n.imports, l.imports, Fh), p = Ze(d), m = fu(d, p), g, b, A = 0, T = n.interpolate || Yi, M = "__p += '", U = pu(
          (n.escape || Yi).source + "|" + T.source + "|" + (T === ks ? f1 : Yi).source + "|" + (n.evaluate || Yi).source + "|$",
          "g"
        ), H = "//# sourceURL=" + (_e.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++W1 + "]") + `
`;
        t.replace(U, function(K, ie, ce, Dt, ft, Nt) {
          return ce || (ce = Dt), M += t.slice(A, Nt).replace(g1, l0), ie && (g = !0, M += `' +
__e(` + ie + `) +
'`), ft && (b = !0, M += `';
` + ft + `;
__p += '`), ce && (M += `' +
((__t = (` + ce + `)) == null ? '' : __t) +
'`), A = Nt + K.length, K;
        }), M += `';
`;
        var Z = _e.call(n, "variable") && n.variable;
        if (!Z)
          M = `with (obj) {
` + M + `
}
`;
        else if (c1.test(Z))
          throw new J(f);
        M = (b ? M.replace(Ni, "") : M).replace(Oi, "$1").replace(Pi, "$1;"), M = "function(" + (Z || "obj") + `) {
` + (Z ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (b ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + M + `return __p
}`;
        var te = Bp(function() {
          return pe(p, H + "return " + M).apply(o, m);
        });
        if (te.source = M, Ju(te))
          throw te;
        return te;
      }
      function MC(t) {
        return ve(t).toLowerCase();
      }
      function DC(t) {
        return ve(t).toUpperCase();
      }
      function NC(t, n, s) {
        if (t = ve(t), t && (s || n === o))
          return Uf(t);
        if (!t || !(n = Lt(n)))
          return t;
        var l = ln(t), d = ln(n), p = Wf(l, d), m = qf(l, d) + 1;
        return ar(l, p, m).join("");
      }
      function OC(t, n, s) {
        if (t = ve(t), t && (s || n === o))
          return t.slice(0, zf(t) + 1);
        if (!t || !(n = Lt(n)))
          return t;
        var l = ln(t), d = qf(l, ln(n)) + 1;
        return ar(l, 0, d).join("");
      }
      function PC(t, n, s) {
        if (t = ve(t), t && (s || n === o))
          return t.replace(Jl, "");
        if (!t || !(n = Lt(n)))
          return t;
        var l = ln(t), d = Wf(l, ln(n));
        return ar(l, d).join("");
      }
      function RC(t, n) {
        var s = se, l = ue;
        if (Le(n)) {
          var d = "separator" in n ? n.separator : d;
          s = "length" in n ? ee(n.length) : s, l = "omission" in n ? Lt(n.omission) : l;
        }
        t = ve(t);
        var p = t.length;
        if (yo(t)) {
          var m = ln(t);
          p = m.length;
        }
        if (s >= p)
          return t;
        var g = s - Vo(l);
        if (g < 1)
          return l;
        var b = m ? ar(m, 0, g).join("") : t.slice(0, g);
        if (d === o)
          return b + l;
        if (m && (g += b.length - g), Xu(d)) {
          if (t.slice(g).search(d)) {
            var A, T = b;
            for (d.global || (d = pu(d.source, ve(uf.exec(d)) + "g")), d.lastIndex = 0; A = d.exec(T); )
              var M = A.index;
            b = b.slice(0, M === o ? g : M);
          }
        } else if (t.indexOf(Lt(d), g) != g) {
          var U = b.lastIndexOf(d);
          U > -1 && (b = b.slice(0, U));
        }
        return b + l;
      }
      function FC(t) {
        return t = ve(t), t && Ri.test(t) ? t.replace(Cs, w0) : t;
      }
      var UC = xo(function(t, n, s) {
        return t + (s ? " " : "") + n.toUpperCase();
      }), tc = Lh("toUpperCase");
      function Tp(t, n, s) {
        return t = ve(t), n = s ? o : n, n === o ? c0(t) ? _0(t) : t0(t) : t.match(n) || [];
      }
      var Bp = oe(function(t, n) {
        try {
          return Tt(t, o, n);
        } catch (s) {
          return Ju(s) ? s : new J(s);
        }
      }), WC = On(function(t, n) {
        return jt(n, function(s) {
          s = bn(s), Dn(t, s, Zu(t[s], t));
        }), t;
      });
      function qC(t) {
        var n = t == null ? 0 : t.length, s = j();
        return t = n ? Ae(t, function(l) {
          if (typeof l[1] != "function")
            throw new Zt(c);
          return [s(l[0]), l[1]];
        }) : [], oe(function(l) {
          for (var d = -1; ++d < n; ) {
            var p = t[d];
            if (Tt(p[0], this, l))
              return Tt(p[1], this, l);
          }
        });
      }
      function HC(t) {
        return w$(Jt(t, $));
      }
      function nc(t) {
        return function() {
          return t;
        };
      }
      function zC(t, n) {
        return t == null || t !== t ? n : t;
      }
      var YC = Dh(), GC = Dh(!0);
      function Vt(t) {
        return t;
      }
      function rc(t) {
        return dh(typeof t == "function" ? t : Jt(t, $));
      }
      function jC(t) {
        return hh(Jt(t, $));
      }
      function ZC(t, n) {
        return ph(t, Jt(n, $));
      }
      var KC = oe(function(t, n) {
        return function(s) {
          return Ds(s, t, n);
        };
      }), JC = oe(function(t, n) {
        return function(s) {
          return Ds(t, s, n);
        };
      });
      function oc(t, n, s) {
        var l = Ze(n), d = pa(n, l);
        s == null && !(Le(n) && (d.length || !l.length)) && (s = n, n = t, t = this, d = pa(n, Ze(n)));
        var p = !(Le(s) && "chain" in s) || !!s.chain, m = Rn(t);
        return jt(d, function(g) {
          var b = n[g];
          t[g] = b, m && (t.prototype[g] = function() {
            var A = this.__chain__;
            if (p || A) {
              var T = t(this.__wrapped__), M = T.__actions__ = gt(this.__actions__);
              return M.push({ func: b, args: arguments, thisArg: t }), T.__chain__ = A, T;
            }
            return b.apply(t, tr([this.value()], arguments));
          });
        }), t;
      }
      function XC() {
        return Je._ === this && (Je._ = C0), this;
      }
      function sc() {
      }
      function QC(t) {
        return t = ee(t), oe(function(n) {
          return wh(n, t);
        });
      }
      var eS = Nu(Ae), tS = Nu(Nf), nS = Nu(au);
      function Lp(t) {
        return qu(t) ? lu(bn(t)) : B$(t);
      }
      function rS(t) {
        return function(n) {
          return t == null ? o : Nr(t, n);
        };
      }
      var oS = Oh(), sS = Oh(!0);
      function ic() {
        return [];
      }
      function ac() {
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
        if (t = ee(t), t < 1 || t > We)
          return [];
        var s = At, l = ot(t, At);
        n = j(n), t -= At;
        for (var d = du(l, n); ++s < t; )
          n(s);
        return d;
      }
      function cS(t) {
        return X(t) ? Ae(t, bn) : Mt(t) ? [t] : gt(Qh(ve(t)));
      }
      function dS(t) {
        var n = ++V0;
        return ve(t) + n;
      }
      var fS = $a(function(t, n) {
        return t + n;
      }, 0), hS = Ou("ceil"), pS = $a(function(t, n) {
        return t / n;
      }, 1), wS = Ou("floor");
      function vS(t) {
        return t && t.length ? ha(t, Vt, Vu) : o;
      }
      function mS(t, n) {
        return t && t.length ? ha(t, j(n, 2), Vu) : o;
      }
      function _S(t) {
        return Rf(t, Vt);
      }
      function gS(t, n) {
        return Rf(t, j(n, 2));
      }
      function $S(t) {
        return t && t.length ? ha(t, Vt, ku) : o;
      }
      function yS(t, n) {
        return t && t.length ? ha(t, j(n, 2), ku) : o;
      }
      var VS = $a(function(t, n) {
        return t * n;
      }, 1), bS = Ou("round"), CS = $a(function(t, n) {
        return t - n;
      }, 0);
      function SS(t) {
        return t && t.length ? cu(t, Vt) : 0;
      }
      function kS(t, n) {
        return t && t.length ? cu(t, j(n, 2)) : 0;
      }
      return h.after = jV, h.ary = cp, h.assign = Db, h.assignIn = Cp, h.assignInWith = La, h.assignWith = Nb, h.at = Ob, h.before = dp, h.bind = Zu, h.bindAll = WC, h.bindKey = fp, h.castArray = ib, h.chain = ap, h.chunk = wy, h.compact = vy, h.concat = my, h.cond = qC, h.conforms = HC, h.constant = nc, h.countBy = SV, h.create = Pb, h.curry = hp, h.curryRight = pp, h.debounce = wp, h.defaults = Rb, h.defaultsDeep = Fb, h.defer = ZV, h.delay = KV, h.difference = _y, h.differenceBy = gy, h.differenceWith = $y, h.drop = yy, h.dropRight = Vy, h.dropRightWhile = by, h.dropWhile = Cy, h.fill = Sy, h.filter = EV, h.flatMap = AV, h.flatMapDeep = TV, h.flatMapDepth = BV, h.flatten = rp, h.flattenDeep = ky, h.flattenDepth = Ey, h.flip = JV, h.flow = YC, h.flowRight = GC, h.fromPairs = Iy, h.functions = Gb, h.functionsIn = jb, h.groupBy = LV, h.initial = Ay, h.intersection = Ty, h.intersectionBy = By, h.intersectionWith = Ly, h.invert = Kb, h.invertBy = Jb, h.invokeMap = DV, h.iteratee = rc, h.keyBy = NV, h.keys = Ze, h.keysIn = yt, h.map = Ea, h.mapKeys = Qb, h.mapValues = eC, h.matches = jC, h.matchesProperty = ZC, h.memoize = xa, h.merge = tC, h.mergeWith = Sp, h.method = KC, h.methodOf = JC, h.mixin = oc, h.negate = Aa, h.nthArg = QC, h.omit = nC, h.omitBy = rC, h.once = XV, h.orderBy = OV, h.over = eS, h.overArgs = QV, h.overEvery = tS, h.overSome = nS, h.partial = Ku, h.partialRight = vp, h.partition = PV, h.pick = oC, h.pickBy = kp, h.property = Lp, h.propertyOf = rS, h.pull = Oy, h.pullAll = sp, h.pullAllBy = Py, h.pullAllWith = Ry, h.pullAt = Fy, h.range = oS, h.rangeRight = sS, h.rearg = eb, h.reject = UV, h.remove = Uy, h.rest = tb, h.reverse = Gu, h.sampleSize = qV, h.set = iC, h.setWith = aC, h.shuffle = HV, h.slice = Wy, h.sortBy = GV, h.sortedUniq = Zy, h.sortedUniqBy = Ky, h.split = AC, h.spread = nb, h.tail = Jy, h.take = Xy, h.takeRight = Qy, h.takeRightWhile = eV, h.takeWhile = tV, h.tap = vV, h.throttle = rb, h.thru = ka, h.toArray = yp, h.toPairs = Ep, h.toPairsIn = Ip, h.toPath = cS, h.toPlainObject = bp, h.transform = lC, h.unary = ob, h.union = nV, h.unionBy = rV, h.unionWith = oV, h.uniq = sV, h.uniqBy = iV, h.uniqWith = aV, h.unset = uC, h.unzip = ju, h.unzipWith = ip, h.update = cC, h.updateWith = dC, h.values = Bo, h.valuesIn = fC, h.without = lV, h.words = Tp, h.wrap = sb, h.xor = uV, h.xorBy = cV, h.xorWith = dV, h.zip = fV, h.zipObject = hV, h.zipObjectDeep = pV, h.zipWith = wV, h.entries = Ep, h.entriesIn = Ip, h.extend = Cp, h.extendWith = La, oc(h, h), h.add = fS, h.attempt = Bp, h.camelCase = vC, h.capitalize = xp, h.ceil = hS, h.clamp = hC, h.clone = ab, h.cloneDeep = ub, h.cloneDeepWith = cb, h.cloneWith = lb, h.conformsTo = db, h.deburr = Ap, h.defaultTo = zC, h.divide = pS, h.endsWith = mC, h.eq = cn, h.escape = _C, h.escapeRegExp = gC, h.every = kV, h.find = IV, h.findIndex = tp, h.findKey = Ub, h.findLast = xV, h.findLastIndex = np, h.findLastKey = Wb, h.floor = wS, h.forEach = lp, h.forEachRight = up, h.forIn = qb, h.forInRight = Hb, h.forOwn = zb, h.forOwnRight = Yb, h.get = Qu, h.gt = fb, h.gte = hb, h.has = Zb, h.hasIn = ec, h.head = op, h.identity = Vt, h.includes = MV, h.indexOf = xy, h.inRange = pC, h.invoke = Xb, h.isArguments = Rr, h.isArray = X, h.isArrayBuffer = pb, h.isArrayLike = $t, h.isArrayLikeObject = Oe, h.isBoolean = wb, h.isBuffer = lr, h.isDate = vb, h.isElement = mb, h.isEmpty = _b, h.isEqual = gb, h.isEqualWith = $b, h.isError = Ju, h.isFinite = yb, h.isFunction = Rn, h.isInteger = mp, h.isLength = Ta, h.isMap = _p, h.isMatch = Vb, h.isMatchWith = bb, h.isNaN = Cb, h.isNative = Sb, h.isNil = Eb, h.isNull = kb, h.isNumber = gp, h.isObject = Le, h.isObjectLike = De, h.isPlainObject = Us, h.isRegExp = Xu, h.isSafeInteger = Ib, h.isSet = $p, h.isString = Ba, h.isSymbol = Mt, h.isTypedArray = To, h.isUndefined = xb, h.isWeakMap = Ab, h.isWeakSet = Tb, h.join = My, h.kebabCase = $C, h.last = Qt, h.lastIndexOf = Dy, h.lowerCase = yC, h.lowerFirst = VC, h.lt = Bb, h.lte = Lb, h.max = vS, h.maxBy = mS, h.mean = _S, h.meanBy = gS, h.min = $S, h.minBy = yS, h.stubArray = ic, h.stubFalse = ac, h.stubObject = iS, h.stubString = aS, h.stubTrue = lS, h.multiply = VS, h.nth = Ny, h.noConflict = XC, h.noop = sc, h.now = Ia, h.pad = bC, h.padEnd = CC, h.padStart = SC, h.parseInt = kC, h.random = wC, h.reduce = RV, h.reduceRight = FV, h.repeat = EC, h.replace = IC, h.result = sC, h.round = bS, h.runInContext = V, h.sample = WV, h.size = zV, h.snakeCase = xC, h.some = YV, h.sortedIndex = qy, h.sortedIndexBy = Hy, h.sortedIndexOf = zy, h.sortedLastIndex = Yy, h.sortedLastIndexBy = Gy, h.sortedLastIndexOf = jy, h.startCase = TC, h.startsWith = BC, h.subtract = CS, h.sum = SS, h.sumBy = kS, h.template = LC, h.times = uS, h.toFinite = Fn, h.toInteger = ee, h.toLength = Vp, h.toLower = MC, h.toNumber = en, h.toSafeInteger = Mb, h.toString = ve, h.toUpper = DC, h.trim = NC, h.trimEnd = OC, h.trimStart = PC, h.truncate = RC, h.unescape = FC, h.uniqueId = dS, h.upperCase = UC, h.upperFirst = tc, h.each = lp, h.eachRight = up, h.first = op, oc(h, function() {
        var t = {};
        return yn(h, function(n, s) {
          _e.call(h.prototype, s) || (t[s] = n);
        }), t;
      }(), { chain: !1 }), h.VERSION = i, jt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        h[t].placeholder = h;
      }), jt(["drop", "take"], function(t, n) {
        ae.prototype[t] = function(s) {
          s = s === o ? 1 : Ye(ee(s), 0);
          var l = this.__filtered__ && !n ? new ae(this) : this.clone();
          return l.__filtered__ ? l.__takeCount__ = ot(s, l.__takeCount__) : l.__views__.push({
            size: ot(s, At),
            type: t + (l.__dir__ < 0 ? "Right" : "")
          }), l;
        }, ae.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), jt(["filter", "map", "takeWhile"], function(t, n) {
        var s = n + 1, l = s == Be || s == Ue;
        ae.prototype[t] = function(d) {
          var p = this.clone();
          return p.__iteratees__.push({
            iteratee: j(d, 3),
            type: s
          }), p.__filtered__ = p.__filtered__ || l, p;
        };
      }), jt(["head", "last"], function(t, n) {
        var s = "take" + (n ? "Right" : "");
        ae.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), jt(["initial", "tail"], function(t, n) {
        var s = "drop" + (n ? "" : "Right");
        ae.prototype[t] = function() {
          return this.__filtered__ ? new ae(this) : this[s](1);
        };
      }), ae.prototype.compact = function() {
        return this.filter(Vt);
      }, ae.prototype.find = function(t) {
        return this.filter(t).head();
      }, ae.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, ae.prototype.invokeMap = oe(function(t, n) {
        return typeof t == "function" ? new ae(this) : this.map(function(s) {
          return Ds(s, t, n);
        });
      }), ae.prototype.reject = function(t) {
        return this.filter(Aa(j(t)));
      }, ae.prototype.slice = function(t, n) {
        t = ee(t);
        var s = this;
        return s.__filtered__ && (t > 0 || n < 0) ? new ae(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), n !== o && (n = ee(n), s = n < 0 ? s.dropRight(-n) : s.take(n - t)), s);
      }, ae.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, ae.prototype.toArray = function() {
        return this.take(At);
      }, yn(ae.prototype, function(t, n) {
        var s = /^(?:filter|find|map|reject)|While$/.test(n), l = /^(?:head|last)$/.test(n), d = h[l ? "take" + (n == "last" ? "Right" : "") : n], p = l || /^find/.test(n);
        !d || (h.prototype[n] = function() {
          var m = this.__wrapped__, g = l ? [1] : arguments, b = m instanceof ae, A = g[0], T = b || X(m), M = function(ie) {
            var ce = d.apply(h, tr([ie], g));
            return l && U ? ce[0] : ce;
          };
          T && s && typeof A == "function" && A.length != 1 && (b = T = !1);
          var U = this.__chain__, H = !!this.__actions__.length, Z = p && !U, te = b && !H;
          if (!p && T) {
            m = te ? m : new ae(this);
            var K = t.apply(m, g);
            return K.__actions__.push({ func: ka, args: [M], thisArg: o }), new Kt(K, U);
          }
          return Z && te ? t.apply(this, g) : (K = this.thru(M), Z ? l ? K.value()[0] : K.value() : K);
        });
      }), jt(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var n = Xi[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", l = /^(?:pop|shift)$/.test(t);
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
      }), yn(ae.prototype, function(t, n) {
        var s = h[n];
        if (s) {
          var l = s.name + "";
          _e.call(ko, l) || (ko[l] = []), ko[l].push({ name: n, func: s });
        }
      }), ko[ga(o, S).name] = [{
        name: "wrapper",
        func: o
      }], ae.prototype.clone = F0, ae.prototype.reverse = U0, ae.prototype.value = W0, h.prototype.at = mV, h.prototype.chain = _V, h.prototype.commit = gV, h.prototype.next = $V, h.prototype.plant = VV, h.prototype.reverse = bV, h.prototype.toJSON = h.prototype.valueOf = h.prototype.value = CV, h.prototype.first = h.prototype.head, Is && (h.prototype[Is] = yV), h;
    }, bo = g0();
    Tr ? ((Tr.exports = bo)._ = bo, ru._ = bo) : Je._ = bo;
  }).call(Ws);
})($e, $e.exports);
const Yk = "/alarms?_s=", xl = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
}, Gk = async (e, r) => {
  try {
    return (await rt.put(
      `/alarms/${e}?ack=${r}`,
      {
        body: `alarm=${e}`
      },
      xl
    )).status === 204;
  } catch {
    return !1;
  }
}, h_ = async (e, r) => {
  try {
    return (await rt.put(
      `/alarms/${e}?${r}=true`,
      {
        body: `alarm=${e}`
      },
      xl
    )).status === 204;
  } catch {
    return !1;
  }
}, jk = async (e, r) => {
  try {
    const o = e.join(",alarm.id==");
    return (await jn.put(
      `alarms?_s=alarm.id==${o}&${r}=true`,
      null,
      xl
    )).status == 204;
  } catch {
    return !1;
  }
}, Zk = async () => {
  try {
    const e = `${Yk}isSituation==true&limit=0`, r = await jn(e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, Kk = async (e) => {
  try {
    const r = e.join(",id=="), o = await jn(`/alarms?_s=id==${r}&limit==0`);
    return o.status === 200 ? o.data.alarm : !1;
  } catch {
    return !1;
  }
}, p_ = async (e) => {
  try {
    const r = await jn(`/alarms/${e}`);
    return r.status === 200 ? r.data : null;
  } catch {
    return null;
  }
}, Jk = async (e) => {
  try {
    const r = await jn(`/events?_s=alarm.id==${e}`);
    return r.status === 200 ? r.data.event : null;
  } catch {
    return null;
  }
}, Xk = async () => {
  try {
    const e = await jn("/nodes?limit=0");
    return e.status === 200 ? e.data.node.map((i) => $e.exports.pick(i, ["id", "label"])) : !1;
  } catch {
    return !1;
  }
}, Qk = async (e, r, o) => {
  try {
    return (await jn.put(
      `/alarms/${e}/${r}`,
      `body=${o}`,
      xl
    )).status == 204;
  } catch {
    return !1;
  }
}, eE = async (e, r) => {
  try {
    return (await jn.delete(`/alarms/${e}/${r}`)).status == 204;
  } catch {
    return !1;
  }
}, tE = async () => {
  try {
    const e = await jn.get(
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
        const r = e.alarm.map((u) => {
          var c;
          return u.status = (c = u.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : c.value, u;
        });
        this.filteredSituations = r.map((u) => u.id);
        const o = $e.exports.groupBy(r, "status"), a = [
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
        const i = await p_(e);
        if (i) {
          const a = (r = i.relatedAlarms) == null ? void 0 : r.map((f) => f.id), c = await Kk(a);
          i.status = (o = i.parameters.filter(
            (f) => f.name == "situationStatus"
          )[0]) == null ? void 0 : o.value, i.alarms = $e.exports.sortBy(c, ["id"]), this.situationDetail = i;
        }
      }
    },
    async getEvents(e, r) {
      const o = {};
      await Promise.all(
        r.map(async (i) => {
          const a = await Jk(i);
          a && (o[i] = $e.exports.reverse(a));
        })
      ), this.situationDetail && (this.situationDetail.events = o);
    },
    async getUnassignedAlarms() {
      const e = await tE();
      e ? this.unassignedAlarms = e : this.unassignedAlarms = [];
    }
  }
}), rE = window.Vue.openBlock, oE = window.Vue.createElementBlock, sE = window.Vue.createElementVNode;
var iE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const aE = {}, lE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, uE = /* @__PURE__ */ sE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM15.36,8.64l-4.95,4.95-2.3-2.3a1,1,0,0,0-1.41,0h0a1,1,0,0,0,0,1.41l3,3a1,1,0,0,0,1.41,0l5.66-5.66a1,1,0,0,0,0-1.41h0A1,1,0,0,0,15.36,8.64Z" }, null, -1), cE = [
  uE
];
function dE(e, r) {
  return rE(), oE("svg", lE, cE);
}
var is = /* @__PURE__ */ iE(aE, [["render", dE]]);
var fE = Object.defineProperty, ow = Object.getOwnPropertySymbols, hE = Object.prototype.hasOwnProperty, pE = Object.prototype.propertyIsEnumerable, sw = (e, r, o) => r in e ? fE(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, iw = (e, r) => {
  for (var o in r || (r = {}))
    hE.call(r, o) && sw(e, o, r[o]);
  if (ow)
    for (var o of ow(r))
      pE.call(r, o) && sw(e, o, r[o]);
  return e;
};
const wE = window.Vue.defineComponent, vE = window.Vue.toRaw, bc = window.Vue.h;
var mE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
    let i = vE(this.icon);
    return this.$slots.default ? bc("span", { class: "feather-icon-container" }, [
      bc(this.$slots.default()[0], iw({
        class: r
      }, o))
    ]) : bc(i, iw({
      class: r
    }, o));
  }
});
var Y = /* @__PURE__ */ mE(gE, [["__scopeId", "data-v-52cbf270"]]);
const $E = window.Vue.openBlock, yE = window.Vue.createElementBlock, VE = window.Vue.createElementVNode;
var bE = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const CE = {}, SE = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, kE = /* @__PURE__ */ VE("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.59,8,12,10.59,9.41,8A1,1,0,0,0,8,8H8A1,1,0,0,0,8,9.41L10.59,12,8,14.59A1,1,0,0,0,8,16H8a1,1,0,0,0,1.41,0L12,13.41,14.59,16A1,1,0,0,0,16,16h0a1,1,0,0,0,0-1.41L13.41,12,16,9.41A1,1,0,0,0,16,8h0A1,1,0,0,0,14.59,8Z" }, null, -1), EE = [
  kE
];
function IE(e, r) {
  return $E(), yE("svg", SE, EE);
}
var w_ = /* @__PURE__ */ bE(CE, [["render", IE]]);
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
function In(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var r = Number(e);
  return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
}
function Ee(e, r) {
  if (r.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + r.length + " present");
}
function je(e) {
  Ee(1, arguments);
  var r = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && r === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || r === "[object Number]" ? new Date(e) : ((typeof e == "string" || r === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function xE(e, r) {
  Ee(2, arguments);
  var o = je(e), i = In(r);
  return isNaN(i) ? new Date(NaN) : (i && o.setDate(o.getDate() + i), o);
}
function AE(e, r) {
  Ee(2, arguments);
  var o = je(e).getTime(), i = In(r);
  return new Date(o + i);
}
var TE = {};
function us() {
  return TE;
}
function aw(e, r) {
  var o, i, a, u, c, f, w, v;
  Ee(1, arguments);
  var _ = us(), $ = In((o = (i = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && i !== void 0 ? i : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = je(e), B = y.getDay(), L = (B < $ ? 7 : 0) + B - $;
  return y.setDate(y.getDate() - L), y.setHours(0, 0, 0, 0), y;
}
function _d(e) {
  var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return r.setUTCFullYear(e.getFullYear()), e.getTime() - r.getTime();
}
function lw(e) {
  Ee(1, arguments);
  var r = je(e);
  return r.setHours(0, 0, 0, 0), r;
}
function BE(e, r) {
  Ee(2, arguments);
  var o = je(e), i = je(r), a = o.getTime() - i.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function v_(e, r) {
  Ee(2, arguments);
  var o = lw(e), i = lw(r);
  return o.getTime() === i.getTime();
}
function LE(e) {
  return Ee(1, arguments), e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function ME(e) {
  if (Ee(1, arguments), !LE(e) && typeof e != "number")
    return !1;
  var r = je(e);
  return !isNaN(Number(r));
}
function DE(e, r) {
  Ee(2, arguments);
  var o = In(r);
  return AE(e, -o);
}
var NE = 864e5;
function OE(e) {
  Ee(1, arguments);
  var r = je(e), o = r.getTime();
  r.setUTCMonth(0, 1), r.setUTCHours(0, 0, 0, 0);
  var i = r.getTime(), a = o - i;
  return Math.floor(a / NE) + 1;
}
function hl(e) {
  Ee(1, arguments);
  var r = 1, o = je(e), i = o.getUTCDay(), a = (i < r ? 7 : 0) + i - r;
  return o.setUTCDate(o.getUTCDate() - a), o.setUTCHours(0, 0, 0, 0), o;
}
function m_(e) {
  Ee(1, arguments);
  var r = je(e), o = r.getUTCFullYear(), i = new Date(0);
  i.setUTCFullYear(o + 1, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var a = hl(i), u = new Date(0);
  u.setUTCFullYear(o, 0, 4), u.setUTCHours(0, 0, 0, 0);
  var c = hl(u);
  return r.getTime() >= a.getTime() ? o + 1 : r.getTime() >= c.getTime() ? o : o - 1;
}
function PE(e) {
  Ee(1, arguments);
  var r = m_(e), o = new Date(0);
  o.setUTCFullYear(r, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = hl(o);
  return i;
}
var RE = 6048e5;
function FE(e) {
  Ee(1, arguments);
  var r = je(e), o = hl(r).getTime() - PE(r).getTime();
  return Math.round(o / RE) + 1;
}
function pl(e, r) {
  var o, i, a, u, c, f, w, v;
  Ee(1, arguments);
  var _ = us(), $ = In((o = (i = (a = (u = r == null ? void 0 : r.weekStartsOn) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.weekStartsOn) !== null && a !== void 0 ? a : _.weekStartsOn) !== null && i !== void 0 ? i : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.weekStartsOn) !== null && o !== void 0 ? o : 0);
  if (!($ >= 0 && $ <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = je(e), B = y.getUTCDay(), L = (B < $ ? 7 : 0) + B - $;
  return y.setUTCDate(y.getUTCDate() - L), y.setUTCHours(0, 0, 0, 0), y;
}
function __(e, r) {
  var o, i, a, u, c, f, w, v;
  Ee(1, arguments);
  var _ = je(e), $ = _.getUTCFullYear(), y = us(), B = In((o = (i = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : y.firstWeekContainsDate) !== null && i !== void 0 ? i : (w = y.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(B >= 1 && B <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var L = new Date(0);
  L.setUTCFullYear($ + 1, 0, B), L.setUTCHours(0, 0, 0, 0);
  var N = pl(L, r), D = new Date(0);
  D.setUTCFullYear($, 0, B), D.setUTCHours(0, 0, 0, 0);
  var S = pl(D, r);
  return _.getTime() >= N.getTime() ? $ + 1 : _.getTime() >= S.getTime() ? $ : $ - 1;
}
function UE(e, r) {
  var o, i, a, u, c, f, w, v;
  Ee(1, arguments);
  var _ = us(), $ = In((o = (i = (a = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (c = r.locale) === null || c === void 0 || (f = c.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && a !== void 0 ? a : _.firstWeekContainsDate) !== null && i !== void 0 ? i : (w = _.locale) === null || w === void 0 || (v = w.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1), y = __(e, r), B = new Date(0);
  B.setUTCFullYear(y, 0, $), B.setUTCHours(0, 0, 0, 0);
  var L = pl(B, r);
  return L;
}
var WE = 6048e5;
function qE(e, r) {
  Ee(1, arguments);
  var o = je(e), i = pl(o, r).getTime() - UE(o, r).getTime();
  return Math.round(i / WE) + 1;
}
function ge(e, r) {
  for (var o = e < 0 ? "-" : "", i = Math.abs(e).toString(); i.length < r; )
    i = "0" + i;
  return o + i;
}
var HE = {
  y: function(e, r) {
    var o = e.getUTCFullYear(), i = o > 0 ? o : 1 - o;
    return ge(r === "yy" ? i % 100 : i, r.length);
  },
  M: function(e, r) {
    var o = e.getUTCMonth();
    return r === "M" ? String(o + 1) : ge(o + 1, 2);
  },
  d: function(e, r) {
    return ge(e.getUTCDate(), r.length);
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
    return ge(e.getUTCHours() % 12 || 12, r.length);
  },
  H: function(e, r) {
    return ge(e.getUTCHours(), r.length);
  },
  m: function(e, r) {
    return ge(e.getUTCMinutes(), r.length);
  },
  s: function(e, r) {
    return ge(e.getUTCSeconds(), r.length);
  },
  S: function(e, r) {
    var o = r.length, i = e.getUTCMilliseconds(), a = Math.floor(i * Math.pow(10, o - 3));
    return ge(a, r.length);
  }
};
const ur = HE;
var Do = {
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
    var i = e.getUTCFullYear() > 0 ? 1 : 0;
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(i, {
          width: "abbreviated"
        });
      case "GGGGG":
        return o.era(i, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return o.era(i, {
          width: "wide"
        });
    }
  },
  y: function(e, r, o) {
    if (r === "yo") {
      var i = e.getUTCFullYear(), a = i > 0 ? i : 1 - i;
      return o.ordinalNumber(a, {
        unit: "year"
      });
    }
    return ur.y(e, r);
  },
  Y: function(e, r, o, i) {
    var a = __(e, i), u = a > 0 ? a : 1 - a;
    if (r === "YY") {
      var c = u % 100;
      return ge(c, 2);
    }
    return r === "Yo" ? o.ordinalNumber(u, {
      unit: "year"
    }) : ge(u, r.length);
  },
  R: function(e, r) {
    var o = m_(e);
    return ge(o, r.length);
  },
  u: function(e, r) {
    var o = e.getUTCFullYear();
    return ge(o, r.length);
  },
  Q: function(e, r, o) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "Q":
        return String(i);
      case "QQ":
        return ge(i, 2);
      case "Qo":
        return o.ordinalNumber(i, {
          unit: "quarter"
        });
      case "QQQ":
        return o.quarter(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(i, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function(e, r, o) {
    var i = Math.ceil((e.getUTCMonth() + 1) / 3);
    switch (r) {
      case "q":
        return String(i);
      case "qq":
        return ge(i, 2);
      case "qo":
        return o.ordinalNumber(i, {
          unit: "quarter"
        });
      case "qqq":
        return o.quarter(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(i, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function(e, r, o) {
    var i = e.getUTCMonth();
    switch (r) {
      case "M":
      case "MM":
        return ur.M(e, r);
      case "Mo":
        return o.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "MMM":
        return o.month(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return o.month(i, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function(e, r, o) {
    var i = e.getUTCMonth();
    switch (r) {
      case "L":
        return String(i + 1);
      case "LL":
        return ge(i + 1, 2);
      case "Lo":
        return o.ordinalNumber(i + 1, {
          unit: "month"
        });
      case "LLL":
        return o.month(i, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return o.month(i, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function(e, r, o, i) {
    var a = qE(e, i);
    return r === "wo" ? o.ordinalNumber(a, {
      unit: "week"
    }) : ge(a, r.length);
  },
  I: function(e, r, o) {
    var i = FE(e);
    return r === "Io" ? o.ordinalNumber(i, {
      unit: "week"
    }) : ge(i, r.length);
  },
  d: function(e, r, o) {
    return r === "do" ? o.ordinalNumber(e.getUTCDate(), {
      unit: "date"
    }) : ur.d(e, r);
  },
  D: function(e, r, o) {
    var i = OE(e);
    return r === "Do" ? o.ordinalNumber(i, {
      unit: "dayOfYear"
    }) : ge(i, r.length);
  },
  E: function(e, r, o) {
    var i = e.getUTCDay();
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return o.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(i, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return o.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function(e, r, o, i) {
    var a = e.getUTCDay(), u = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "e":
        return String(u);
      case "ee":
        return ge(u, 2);
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
  c: function(e, r, o, i) {
    var a = e.getUTCDay(), u = (a - i.weekStartsOn + 8) % 7 || 7;
    switch (r) {
      case "c":
        return String(u);
      case "cc":
        return ge(u, r.length);
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
    var i = e.getUTCDay(), a = i === 0 ? 7 : i;
    switch (r) {
      case "i":
        return String(a);
      case "ii":
        return ge(a, r.length);
      case "io":
        return o.ordinalNumber(a, {
          unit: "day"
        });
      case "iii":
        return o.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return o.day(i, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return o.day(i, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return o.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function(e, r, o) {
    var i = e.getUTCHours(), a = i / 12 >= 1 ? "pm" : "am";
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
    var i = e.getUTCHours(), a;
    switch (i === 12 ? a = Do.noon : i === 0 ? a = Do.midnight : a = i / 12 >= 1 ? "pm" : "am", r) {
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
    var i = e.getUTCHours(), a;
    switch (i >= 17 ? a = Do.evening : i >= 12 ? a = Do.afternoon : i >= 4 ? a = Do.morning : a = Do.night, r) {
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
      var i = e.getUTCHours() % 12;
      return i === 0 && (i = 12), o.ordinalNumber(i, {
        unit: "hour"
      });
    }
    return ur.h(e, r);
  },
  H: function(e, r, o) {
    return r === "Ho" ? o.ordinalNumber(e.getUTCHours(), {
      unit: "hour"
    }) : ur.H(e, r);
  },
  K: function(e, r, o) {
    var i = e.getUTCHours() % 12;
    return r === "Ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : ge(i, r.length);
  },
  k: function(e, r, o) {
    var i = e.getUTCHours();
    return i === 0 && (i = 24), r === "ko" ? o.ordinalNumber(i, {
      unit: "hour"
    }) : ge(i, r.length);
  },
  m: function(e, r, o) {
    return r === "mo" ? o.ordinalNumber(e.getUTCMinutes(), {
      unit: "minute"
    }) : ur.m(e, r);
  },
  s: function(e, r, o) {
    return r === "so" ? o.ordinalNumber(e.getUTCSeconds(), {
      unit: "second"
    }) : ur.s(e, r);
  },
  S: function(e, r) {
    return ur.S(e, r);
  },
  X: function(e, r, o, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    if (u === 0)
      return "Z";
    switch (r) {
      case "X":
        return cw(u);
      case "XXXX":
      case "XX":
        return eo(u);
      case "XXXXX":
      case "XXX":
      default:
        return eo(u, ":");
    }
  },
  x: function(e, r, o, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "x":
        return cw(u);
      case "xxxx":
      case "xx":
        return eo(u);
      case "xxxxx":
      case "xxx":
      default:
        return eo(u, ":");
    }
  },
  O: function(e, r, o, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + uw(u, ":");
      case "OOOO":
      default:
        return "GMT" + eo(u, ":");
    }
  },
  z: function(e, r, o, i) {
    var a = i._originalDate || e, u = a.getTimezoneOffset();
    switch (r) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + uw(u, ":");
      case "zzzz":
      default:
        return "GMT" + eo(u, ":");
    }
  },
  t: function(e, r, o, i) {
    var a = i._originalDate || e, u = Math.floor(a.getTime() / 1e3);
    return ge(u, r.length);
  },
  T: function(e, r, o, i) {
    var a = i._originalDate || e, u = a.getTime();
    return ge(u, r.length);
  }
};
function uw(e, r) {
  var o = e > 0 ? "-" : "+", i = Math.abs(e), a = Math.floor(i / 60), u = i % 60;
  if (u === 0)
    return o + String(a);
  var c = r || "";
  return o + String(a) + c + ge(u, 2);
}
function cw(e, r) {
  if (e % 60 === 0) {
    var o = e > 0 ? "-" : "+";
    return o + ge(Math.abs(e) / 60, 2);
  }
  return eo(e, r);
}
function eo(e, r) {
  var o = r || "", i = e > 0 ? "-" : "+", a = Math.abs(e), u = ge(Math.floor(a / 60), 2), c = ge(a % 60, 2);
  return i + u + o + c;
}
const YE = zE;
var dw = function(e, r) {
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
}, g_ = function(e, r) {
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
  var o = e.match(/(P+)(p+)?/) || [], i = o[1], a = o[2];
  if (!a)
    return dw(e, r);
  var u;
  switch (i) {
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
  return u.replace("{{date}}", dw(i, r)).replace("{{time}}", g_(a, r));
}, jE = {
  p: g_,
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
function fw(e, r, o) {
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
  var i, a = e2[e];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), o != null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + i : i + " ago" : i;
};
const n2 = t2;
function Cc(e) {
  return function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.width ? String(r.width) : e.defaultWidth, i = e.formats[o] || e.formats[e.defaultWidth];
    return i;
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
}, s2 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, i2 = {
  date: Cc({
    formats: r2,
    defaultWidth: "full"
  }),
  time: Cc({
    formats: o2,
    defaultWidth: "full"
  }),
  dateTime: Cc({
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
}, u2 = function(e, r, o, i) {
  return l2[e];
};
const c2 = u2;
function qs(e) {
  return function(r, o) {
    var i = o != null && o.context ? String(o.context) : "standalone", a;
    if (i === "formatting" && e.formattingValues) {
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
  var o = Number(e), i = o % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
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
  era: qs({
    values: d2,
    defaultWidth: "wide"
  }),
  quarter: qs({
    values: f2,
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1;
    }
  }),
  month: qs({
    values: h2,
    defaultWidth: "wide"
  }),
  day: qs({
    values: p2,
    defaultWidth: "wide"
  }),
  dayPeriod: qs({
    values: w2,
    defaultWidth: "wide",
    formattingValues: v2,
    defaultFormattingWidth: "wide"
  })
};
const g2 = _2;
function Hs(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = o.width, a = i && e.matchPatterns[i] || e.matchPatterns[e.defaultMatchWidth], u = r.match(a);
    if (!u)
      return null;
    var c = u[0], f = i && e.parsePatterns[i] || e.parsePatterns[e.defaultParseWidth], w = Array.isArray(f) ? y2(f, function($) {
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
function V2(e) {
  return function(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = r.match(e.matchPattern);
    if (!i)
      return null;
    var a = i[0], u = r.match(e.parsePattern);
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
var b2 = /^(\d+)(th|st|nd|rd)?/i, C2 = /\d+/i, S2 = {
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
}, T2 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, B2 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, L2 = {
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
  ordinalNumber: V2({
    matchPattern: b2,
    parsePattern: C2,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: Hs({
    matchPatterns: S2,
    defaultMatchWidth: "wide",
    parsePatterns: k2,
    defaultParseWidth: "any"
  }),
  quarter: Hs({
    matchPatterns: E2,
    defaultMatchWidth: "wide",
    parsePatterns: I2,
    defaultParseWidth: "any",
    valueCallback: function(e) {
      return e + 1;
    }
  }),
  month: Hs({
    matchPatterns: x2,
    defaultMatchWidth: "wide",
    parsePatterns: A2,
    defaultParseWidth: "any"
  }),
  day: Hs({
    matchPatterns: T2,
    defaultMatchWidth: "wide",
    parsePatterns: B2,
    defaultParseWidth: "any"
  }),
  dayPeriod: Hs({
    matchPatterns: L2,
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
const $_ = O2;
var P2 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, R2 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, F2 = /^'([^]*?)'?$/, U2 = /''/g, W2 = /[a-zA-Z]/;
function q2(e, r, o) {
  var i, a, u, c, f, w, v, _, $, y, B, L, N, D, S, x, I, O;
  Ee(2, arguments);
  var k = String(r), P = us(), R = (i = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : P.locale) !== null && i !== void 0 ? i : $_, z = In((u = (c = (f = (w = o == null ? void 0 : o.firstWeekContainsDate) !== null && w !== void 0 ? w : o == null || (v = o.locale) === null || v === void 0 || (_ = v.options) === null || _ === void 0 ? void 0 : _.firstWeekContainsDate) !== null && f !== void 0 ? f : P.firstWeekContainsDate) !== null && c !== void 0 ? c : ($ = P.locale) === null || $ === void 0 || (y = $.options) === null || y === void 0 ? void 0 : y.firstWeekContainsDate) !== null && u !== void 0 ? u : 1);
  if (!(z >= 1 && z <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var de = In((B = (L = (N = (D = o == null ? void 0 : o.weekStartsOn) !== null && D !== void 0 ? D : o == null || (S = o.locale) === null || S === void 0 || (x = S.options) === null || x === void 0 ? void 0 : x.weekStartsOn) !== null && N !== void 0 ? N : P.weekStartsOn) !== null && L !== void 0 ? L : (I = P.locale) === null || I === void 0 || (O = I.options) === null || O === void 0 ? void 0 : O.weekStartsOn) !== null && B !== void 0 ? B : 0);
  if (!(de >= 0 && de <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!R.localize)
    throw new RangeError("locale must contain localize property");
  if (!R.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var se = je(e);
  if (!ME(se))
    throw new RangeError("Invalid time value");
  var ue = _d(se), Ve = DE(se, ue), ye = {
    firstWeekContainsDate: z,
    weekStartsOn: de,
    locale: R,
    _originalDate: se
  }, Be = k.match(R2).map(function(me) {
    var Ue = me[0];
    if (Ue === "p" || Ue === "P") {
      var He = ZE[Ue];
      return He(me, R.formatLong);
    }
    return me;
  }).join("").match(P2).map(function(me) {
    if (me === "''")
      return "'";
    var Ue = me[0];
    if (Ue === "'")
      return H2(me);
    var He = YE[Ue];
    if (He)
      return !(o != null && o.useAdditionalWeekYearTokens) && QE(me) && fw(me, r, String(e)), !(o != null && o.useAdditionalDayOfYearTokens) && XE(me) && fw(me, r, String(e)), He(Ve, me, R.localize, ye);
    if (Ue.match(W2))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + Ue + "`");
    return me;
  }).join("");
  return Be;
}
function H2(e) {
  var r = e.match(F2);
  return r ? r[1].replace(U2, "'") : e;
}
function y_(e, r) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var o in r)
    Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
  return e;
}
function z2(e) {
  return y_({}, e);
}
var hw = 1e3 * 60, wl = 60 * 24, pw = wl * 30, ww = wl * 365;
function Al(e, r, o) {
  var i, a, u;
  Ee(2, arguments);
  var c = us(), f = (i = (a = o == null ? void 0 : o.locale) !== null && a !== void 0 ? a : c.locale) !== null && i !== void 0 ? i : $_;
  if (!f.formatDistance)
    throw new RangeError("locale must contain localize.formatDistance property");
  var w = BE(e, r);
  if (isNaN(w))
    throw new RangeError("Invalid time value");
  var v = y_(z2(o), {
    addSuffix: Boolean(o == null ? void 0 : o.addSuffix),
    comparison: w
  }), _, $;
  w > 0 ? (_ = je(r), $ = je(e)) : (_ = je(e), $ = je(r));
  var y = String((u = o == null ? void 0 : o.roundingMethod) !== null && u !== void 0 ? u : "round"), B;
  if (y === "floor")
    B = Math.floor;
  else if (y === "ceil")
    B = Math.ceil;
  else if (y === "round")
    B = Math.round;
  else
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  var L = $.getTime() - _.getTime(), N = L / hw, D = _d($) - _d(_), S = (L - D) / hw, x = o == null ? void 0 : o.unit, I;
  if (x ? I = String(x) : N < 1 ? I = "second" : N < 60 ? I = "minute" : N < wl ? I = "hour" : S < pw ? I = "day" : S < ww ? I = "month" : I = "year", I === "second") {
    var O = B(L / 1e3);
    return f.formatDistance("xSeconds", O, v);
  } else if (I === "minute") {
    var k = B(N);
    return f.formatDistance("xMinutes", k, v);
  } else if (I === "hour") {
    var P = B(N / 60);
    return f.formatDistance("xHours", P, v);
  } else if (I === "day") {
    var R = B(S / wl);
    return f.formatDistance("xDays", R, v);
  } else if (I === "month") {
    var z = B(S / pw);
    return z === 12 && x !== "month" ? f.formatDistance("xYears", 1, v) : f.formatDistance("xMonths", z, v);
  } else if (I === "year") {
    var de = B(S / ww);
    return f.formatDistance("xYears", de, v);
  }
  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}
function Y2(e, r, o) {
  Ee(2, arguments);
  var i = aw(e, o), a = aw(r, o);
  return i.getTime() === a.getTime();
}
function G2(e, r) {
  return Ee(1, arguments), Y2(e, Date.now(), r);
}
function j2(e) {
  return Ee(1, arguments), v_(e, Date.now());
}
function Z2(e, r) {
  Ee(2, arguments);
  var o = In(r);
  return xE(e, -o);
}
function K2(e) {
  return Ee(1, arguments), v_(e, Z2(Date.now(), 1));
}
const xn = (e) => {
  let r = "";
  if (e)
    try {
      r = q2(new Date(e), tt.DATE_FORMAT);
    } catch {
      console.log("error date", e);
    }
  return r;
}, V_ = (e) => e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'"), b_ = (e, r) => {
  const o = V_(e).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(), i = o.length > r ? "..." : "";
  return o.substring(0, r) + i;
}, J2 = (e, r) => {
  let o = r;
  switch (e) {
    case 2:
      o = o.filter(
        (i) => j2(i.firstEventTime)
      );
      break;
    case 3:
      o = o.filter(
        (i) => K2(i.firstEventTime)
      );
      break;
    case 4:
      o = o.filter(
        (i) => G2(i.firstEventTime)
      );
      break;
  }
  return o;
}, Tl = "/alec", C_ = "/alec/engine/configuration", S_ = "/alec/llm/configuration", X2 = "/alec/llm/validate", k_ = "/alec/llm/suggestions", Q2 = "/alec/llm/usage", E_ = "/alec/situation", eI = async () => {
  try {
    const e = await rt.get(`${C_}`);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, tI = async (e) => {
  try {
    return (await rt.post(C_, e)).status === 200;
  } catch {
    return !1;
  }
}, nI = async () => {
  try {
    const e = await rt.get(S_);
    return e.status === 200 ? e.data : !1;
  } catch {
    return !1;
  }
}, rI = async (e) => {
  try {
    const r = await rt.post(S_, e);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, oI = async (e) => {
  try {
    const r = await rt.post(X2, e);
    return r.status === 200 ? r.data : { ok: !1, message: `Unexpected response (HTTP ${r.status}).` };
  } catch {
    return { ok: !1, message: "Could not reach the server to validate." };
  }
}, I_ = async (e) => {
  try {
    const r = await rt.get(`${k_}/${e}`);
    return r.status === 200 ? r.data : r.status === 204 ? null : !1;
  } catch {
    return !1;
  }
}, sI = async (e) => {
  try {
    const r = await rt.post(
      `${k_}/${e}/reanalyze`
    );
    return r.status === 202 || r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, iI = async (e = 30) => {
  try {
    const r = await rt.get(`${Q2}?days=${e}`);
    return r.status === 200 ? r.data : !1;
  } catch {
    return !1;
  }
}, x_ = async (e, r) => {
  try {
    const o = await rt.post(`${Tl}/situation/${r}/${e}`, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    return r == tt.REJECTED.toLowerCase() && o.status === 200 && await h_(e, "clear"), o.status === 200;
  } catch {
    return !1;
  }
}, vw = async (e, r) => {
  try {
    return (await rt.delete(`${Tl}/situation/alarm/`, {
      data: {
        situationId: e,
        alarmIdList: r
      }
    })).status === 200;
  } catch {
    return !1;
  }
}, A_ = async (e, r) => {
  try {
    return (await rt.put(`${Tl}/situation/alarm/`, {
      situationId: e,
      alarmIdList: r
    })).status === 200;
  } catch {
    return !1;
  }
}, aI = async (e) => {
  try {
    return (await rt.post(E_, e)).status === 200;
  } catch {
    return !1;
  }
}, lI = async () => {
  try {
    return (await rt.post(`${E_}/close-all`)).status === 200;
  } catch {
    return !1;
  }
}, uI = async () => {
  try {
    return (await rt.post(`${Tl}/engine/reevaluate`)).status === 200;
  } catch {
    return !1;
  }
}, cI = window.Vue.defineComponent, Pt = window.Vue.unref, Sc = window.Vue.normalizeClass, kn = window.Vue.createElementVNode, Fr = window.Vue.toDisplayString, cr = window.Vue.openBlock, dr = window.Vue.createElementBlock, zs = window.Vue.createCommentVNode, mw = window.Vue.createVNode, gd = window.Vue.createTextVNode, dI = window.Vue.renderList, fI = window.Vue.Fragment, hI = window.Vue.pushScopeId, pI = window.Vue.popScopeId, Fd = (e) => (hI("data-v-2682849b"), e = e(), pI(), e), wI = { class: "content" }, vI = { class: "title-row" }, mI = { class: "title" }, _I = ["title"], gI = {
  key: 1,
  class: "accepted"
}, $I = {
  key: 2,
  class: "rejected"
}, yI = /* @__PURE__ */ Fd(() => /* @__PURE__ */ kn("span", { class: "info-title" }, " Duration: ", -1)), VI = { key: 0 }, bI = /* @__PURE__ */ Fd(() => /* @__PURE__ */ kn("span", { class: "info-title" }, " First Event: ", -1)), CI = { class: "description" }, SI = /* @__PURE__ */ Fd(() => /* @__PURE__ */ kn("hr", null, null, -1)), kI = {
  key: 1,
  class: "count-info"
}, EI = /* @__PURE__ */ gd(" Alarms: "), II = { class: "info-title" }, xI = window.Vue.onMounted, AI = window.Vue.ref, TI = /* @__PURE__ */ cI({
  __name: "SituationCard",
  props: {
    situationInfo: null,
    small: { type: Boolean }
  },
  emits: ["situation-selected"],
  setup(e, { emit: r }) {
    const o = e, i = tt.ACCEPTED, a = tt.REJECTED, u = new Date().getTime(), c = () => {
      var w;
      r("situation-selected", (w = o.situationInfo) == null ? void 0 : w.id);
    }, f = AI("none");
    return xI(async () => {
      var v;
      if (((v = o.situationInfo) == null ? void 0 : v.id) === void 0)
        return;
      const w = await I_(o.situationInfo.id);
      w && w.status && (f.value = w.status);
    }), (w, v) => {
      var _, $, y;
      return cr(), dr("div", {
        onClick: c,
        class: Sc(["card", {
          rejected: o.situationInfo.status == Pt(a)
        }])
      }, [
        kn("div", {
          class: Sc(["severity-line", [`${($ = (_ = o.situationInfo) == null ? void 0 : _.severity) == null ? void 0 : $.toLowerCase()}-bg dark`]])
        }, null, 2),
        kn("div", wI, [
          kn("div", vI, [
            kn("div", mI, "Situation " + Fr((y = o.situationInfo) == null ? void 0 : y.id), 1),
            f.value !== "none" ? (cr(), dr("span", {
              key: 0,
              class: Sc(["ai-badge", f.value]),
              title: f.value === "pending" ? "AI analysis in progress" : f.value === "ready" ? "AI suggestions available" : "Last AI request failed",
              "data-test": "ai-badge"
            }, " AI" + Fr(f.value === "pending" ? "\u2026" : ""), 11, _I)) : zs("", !0),
            o.situationInfo.status == Pt(i) ? (cr(), dr("div", gI, [
              mw(Pt(Y), {
                icon: Pt(is),
                "aria-hidden": "true",
                class: "icon accepted"
              }, null, 8, ["icon"])
            ])) : zs("", !0),
            o.situationInfo.status == Pt(a) ? (cr(), dr("div", $I, [
              mw(Pt(Y), {
                icon: Pt(w_),
                "aria-hidden": "true",
                class: "icon rejected"
              }, null, 8, ["icon"])
            ])) : zs("", !0)
          ]),
          kn("div", null, [
            yI,
            gd(" " + Fr(Pt(Al)(
              Pt(u),
              new Date(o.situationInfo.firstEventTime)
            )), 1)
          ]),
          o.small ? zs("", !0) : (cr(), dr("div", VI, [
            bI,
            gd(Fr(Pt(xn)(o.situationInfo.firstEventTime)), 1)
          ])),
          kn("div", CI, Fr(Pt(b_)(o.situationInfo.description, o.small ? 100 : 230)), 1),
          SI,
          o.situationInfo.relatedAlarms ? (cr(), dr("div", kI, [
            EI,
            kn("span", II, Fr(o.situationInfo.relatedAlarms.length), 1)
          ])) : zs("", !0),
          (cr(!0), dr(fI, null, dI(Pt($e.exports.keys)(
            Pt($e.exports.groupBy)(o.situationInfo.relatedAlarms, "nodeLabel")
          ), (B) => (cr(), dr("div", {
            class: "info-title",
            key: B
          }, " - " + Fr(B), 1))), 128))
        ])
      ], 2);
    };
  }
});
const T_ = /* @__PURE__ */ he(TI, [["__scopeId", "data-v-2682849b"]]), BI = window.Vue.openBlock, LI = window.Vue.createElementBlock, MI = window.Vue.createElementVNode;
var DI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const NI = {}, OI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, PI = /* @__PURE__ */ MI("path", { d: "M17.7,15.89,13.82,12l3.89-3.89A1,1,0,1,0,16.3,6.7L11,12l5.3,5.3a1,1,0,1,0,1.4-1.4ZM7,6A1,1,0,0,1,8,7V17a1,1,0,0,1-2,0V7A1,1,0,0,1,7,6Z" }, null, -1), RI = [
  PI
];
function FI(e, r) {
  return BI(), LI("svg", OI, RI);
}
var UI = /* @__PURE__ */ DI(NI, [["render", FI]]);
const WI = window.Vue.openBlock, qI = window.Vue.createElementBlock, B_ = window.Vue.createElementVNode;
var HI = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const zI = {}, YI = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, GI = /* @__PURE__ */ B_("path", { d: "M6.29,6.71a1,1,0,0,0,0,1.4L10.18,12,6.29,15.89A1,1,0,0,0,7.7,17.3L13,12,7.7,6.71A1,1,0,0,0,6.29,6.71Z" }, null, -1), jI = /* @__PURE__ */ B_("path", { d: "M17,6a1,1,0,0,0-1,1V17a1,1,0,0,0,2,0V7A1,1,0,0,0,17,6Z" }, null, -1), ZI = [
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
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const nx = {}, rx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ox = /* @__PURE__ */ ex("path", { d: "M14.71,6.7a1,1,0,0,0-1.41,0L8,12l5.3,5.3a1,1,0,0,0,1.41-1.41L10.83,12l3.88-3.89A1,1,0,0,0,14.71,6.7Z" }, null, -1), sx = [
  ox
];
function ix(e, r) {
  return XI(), QI("svg", rx, sx);
}
var ax = /* @__PURE__ */ tx(nx, [["render", ix]]);
const lx = window.Vue.openBlock, ux = window.Vue.createElementBlock, cx = window.Vue.createElementVNode;
var dx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
var L_ = /* @__PURE__ */ dx(fx, [["render", vx]]);
const mx = window.Vue.defineComponent, fr = window.Vue.unref, Ma = window.Vue.normalizeClass, Da = window.Vue.createVNode, _x = window.Vue.openBlock, gx = window.Vue.createElementBlock;
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
    const o = e, i = (a) => {
      a >= 0 && a <= o.totalPages - 1 && r("go-to-page", a);
    };
    return (a, u) => (_x(), gx("div", $x, [
      Da(fr(Y), {
        icon: fr(UI),
        "aria-hidden": "true",
        class: Ma(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[0] || (u[0] = (c) => i(0))
      }, null, 8, ["icon", "class"]),
      Da(fr(Y), {
        icon: fr(ax),
        "aria-hidden": "true",
        class: Ma(["icon nav", { disable: o.currentPage == 0 }]),
        onClick: u[1] || (u[1] = (c) => i(o.currentPage - 1))
      }, null, 8, ["icon", "class"]),
      Da(fr(Y), {
        icon: fr(L_),
        "aria-hidden": "true",
        class: Ma(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[2] || (u[2] = (c) => i(o.currentPage + 1))
      }, null, 8, ["icon", "class"]),
      Da(fr(Y), {
        icon: fr(JI),
        "aria-hidden": "true",
        class: Ma(["icon nav", { disable: o.currentPage == o.totalPages - 1 }]),
        onClick: u[3] || (u[3] = (c) => i(o.totalPages - 1))
      }, null, 8, ["icon", "class"])
    ]));
  }
});
const Vx = /* @__PURE__ */ he(yx, [["__scopeId", "data-v-40758818"]]);
const fe = function(e) {
  e = e || "feather";
  const r = Math.floor(Math.random() * 1e9);
  return [e.replace(/\s+/g, "-"), Date.now(), r].join("-");
}, bx = window.Vue.computed, Bl = (e, r) => {
  const o = {};
  return Object.keys(r).forEach((i) => {
    o[`${i}Label`] = bx(() => e.value[i] ? e.value[i] : r[i]);
  }), o;
};
const so = function(e, r) {
  return window ? window.setTimeout(e, r) : setTimeout(e, r);
}, io = function(e) {
  return window ? window.clearTimeout(e) : clearTimeout(e);
};
var Cx = Object.defineProperty, Sx = Object.defineProperties, kx = Object.getOwnPropertyDescriptors, _w = Object.getOwnPropertySymbols, Ex = Object.prototype.hasOwnProperty, Ix = Object.prototype.propertyIsEnumerable, gw = (e, r, o) => r in e ? Cx(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, $w = (e, r) => {
  for (var o in r || (r = {}))
    Ex.call(r, o) && gw(e, o, r[o]);
  if (_w)
    for (var o of _w(r))
      Ix.call(r, o) && gw(e, o, r[o]);
  return e;
}, xx = (e, r) => Sx(e, kx(r));
const Ax = window.Vue.defineComponent, Tx = window.Vue.h;
var Bx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
        const { clientWidth: r, clientHeight: o } = this.parent, i = Math.round(Math.max(r, o));
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
        this.styles = xx($w({}, a), {
          height: `${i}px`,
          width: `${i}px`
        }), this.pressed = !0, requestAnimationFrame(() => {
          this.active = !0, io(this.failsafe), this.failsafe = so(() => {
            this.pressed = !1, this.active = !1;
          }, 380 + 100 + 20);
        });
      });
    }
  },
  render() {
    if (this.pressed !== !1)
      return Tx("div", {
        style: $w({}, this.styles),
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
var Vr = /* @__PURE__ */ Bx(Mx, [["__scopeId", "data-v-18e2a5db"]]);
const Dx = window.Vue.openBlock, Nx = window.Vue.createElementBlock, Ox = window.Vue.createElementVNode;
var Px = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
var cs = /* @__PURE__ */ Px(Rx, [["render", qx]]);
const yw = window.Vue.computed, Hx = (e, r, o) => {
  const i = yw(() => r.value.filter((u) => !u.disabled)), a = yw(() => e.value ? i.value.indexOf(e.value) : -1);
  return {
    selectPrevious() {
      e.value && e.value.disabled || (a.value === 0 ? o(i.value[i.value.length - 1]) : o(i.value[a.value - 1]));
    },
    selectNext() {
      e.value && e.value.disabled || (a.value === i.value.length - 1 ? o(i.value[0]) : o(i.value[a.value + 1]));
    }
  };
};
const zx = window.Vue.openBlock, Yx = window.Vue.createElementBlock, Ud = window.Vue.createElementVNode;
var Gx = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const jx = {}, Zx = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Kx = /* @__PURE__ */ Ud("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), Jx = /* @__PURE__ */ Ud("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "7",
  rx: "1"
}, null, -1), Xx = /* @__PURE__ */ Ud("rect", {
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
var tA = /* @__PURE__ */ Gx(jx, [["render", eA]]), nA = Object.defineProperty, rA = Object.defineProperties, oA = Object.getOwnPropertyDescriptors, Vw = Object.getOwnPropertySymbols, sA = Object.prototype.hasOwnProperty, iA = Object.prototype.propertyIsEnumerable, bw = (e, r, o) => r in e ? nA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, M_ = (e, r) => {
  for (var o in r || (r = {}))
    sA.call(r, o) && bw(e, o, r[o]);
  if (Vw)
    for (var o of Vw(r))
      iA.call(r, o) && bw(e, o, r[o]);
  return e;
}, D_ = (e, r) => rA(e, oA(r));
const ds = window.Vue.defineComponent, $i = window.Vue.resolveComponent, En = window.Vue.openBlock, Ko = window.Vue.createElementBlock, aA = window.Vue.createVNode, vl = window.Vue.createBlock, lA = window.Vue.withModifiers, as = window.Vue.inject, yi = window.Vue.computed, uA = window.Vue.normalizeClass, No = window.Vue.createElementVNode, ml = window.Vue.toDisplayString, il = window.Vue.renderSlot, hi = window.Vue.createCommentVNode, cA = window.Vue.withDirectives, dA = window.Vue.vShow, $d = window.Vue.ref, Cw = window.Vue.toRef, Sw = window.Vue.nextTick, yd = window.Vue.watch;
window.Vue.createTextVNode;
window.Vue.Fragment;
window.Vue.renderList;
const Wd = window.Vue.provide, kw = window.Vue.isRef, fA = window.Vue.onBeforeUnmount;
var Si = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, pA = ds({
  props: hA,
  components: {
    FeatherIcon: Y
  }
}), wA = ["title"];
function vA(e, r, o, i, a, u) {
  const c = $i("FeatherIcon");
  return En(), Ko("a", {
    title: e.title,
    class: "action-icon hide-when-disabled",
    href: "#"
  }, [
    aA(c, { icon: e.icon }, null, 8, ["icon"])
  ], 8, wA);
}
var mA = /* @__PURE__ */ Si(pA, [["render", vA], ["__scopeId", "data-v-4265058e"]]);
const _A = ds({
  emits: ["clear"],
  props: {
    clear: {
      type: String,
      default: ""
    }
  },
  computed: {
    clearIcon() {
      return cs;
    }
  },
  components: {
    ActionIcon: mA
  }
});
function gA(e, r, o, i, a, u) {
  const c = $i("ActionIcon");
  return En(), vl(c, {
    onClick: r[0] || (r[0] = lA((f) => e.$emit("clear"), ["stop", "prevent"])),
    title: e.clear,
    icon: e.clearIcon,
    "data-ref-id": "feather-form-element-clear"
  }, null, 8, ["title", "icon"]);
}
var $A = /* @__PURE__ */ Si(_A, [["render", gA]]);
const yA = ds({
  computed: {
    errorIcon() {
      return tA;
    }
  },
  components: {
    FeatherIcon: Y
  }
});
function VA(e, r, o, i, a, u) {
  const c = $i("FeatherIcon");
  return En(), vl(c, {
    icon: e.errorIcon,
    class: "error-icon hide-when-disabled",
    "data-ref-id": "error-icon"
  }, null, 8, ["icon"]);
}
var bA = /* @__PURE__ */ Si(yA, [["render", VA], ["__scopeId", "data-v-0b8faef3"]]);
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
}, kA = ds({
  emits: SA,
  props: CA,
  data() {
    return {
      prefixWidth: 0,
      prefixObserver: void 0
    };
  },
  setup() {
    const e = as("wrapperOptions", {}), r = as("validationErrorMessage", !1), o = yi(() => e.error ? e.error : r && r.value ? r.value : !1);
    return D_(M_({}, e), { error: o });
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
        const i = this.$el.querySelector(".prefix");
        this.prefixWidth = i ? i.offsetWidth : 0;
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
function TA(e, r, o, i, a, u) {
  const c = $i("ClearIcon"), f = $i("ErrorIcon");
  return En(), Ko("div", {
    class: uA(["feather-input-wrapper-container", e.containerCls])
  }, [
    No("fieldset", EA, [
      No("legend", null, ml(e.label), 1)
    ]),
    No("label", {
      class: "feather-input-label",
      for: e.inputId,
      "data-ref-id": "feather-form-element-label"
    }, ml(e.label), 9, IA),
    No("div", {
      class: "feather-input-wrapper",
      onClick: r[1] || (r[1] = (...w) => e.handleWrapperClick && e.handleWrapperClick(...w))
    }, [
      No("div", xA, [
        il(e.$slots, "pre", {}, void 0, !0)
      ]),
      il(e.$slots, "default", {}, void 0, !0),
      No("div", AA, [
        e.showClear && e.computedClearText ? (En(), vl(c, {
          key: 0,
          clear: e.computedClearText,
          onClear: r[0] || (r[0] = (w) => e.$emit("clear"))
        }, null, 8, ["clear"])) : hi("", !0),
        e.error ? (En(), vl(f, { key: 1 })) : hi("", !0),
        il(e.$slots, "post", {}, void 0, !0)
      ])
    ])
  ], 2);
}
var Ll = /* @__PURE__ */ Si(kA, [["render", TA], ["__scopeId", "data-v-4db296db"]]);
const BA = ds({
  setup() {
    const e = as("subTextOptions", {}), r = as("validationErrorMessage", !1), o = yi(() => e.error ? e.error : r && r.value ? r.value : "");
    return D_(M_({}, e), { error: o });
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
function OA(e, r, o, i, a, u) {
  return cA((En(), Ko("div", LA, [
    !e.hint && !e.error.length ? (En(), Ko("div", MA, "\xA0")) : hi("", !0),
    e.hint && !e.error.length ? (En(), Ko("div", DA, ml(e.hint), 1)) : hi("", !0),
    e.error.length > 0 ? (En(), Ko("div", NA, ml(e.error), 1)) : hi("", !0),
    il(e.$slots, "right", {}, void 0, !0)
  ], 512)), [
    [dA, !e.inline || e.hint || e.error.length]
  ]);
}
var fs = /* @__PURE__ */ Si(BA, [["render", OA], ["__scopeId", "data-v-8e0ac99e"]]);
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
ds({
  props: PA,
  setup(e) {
    const r = as("featherFormErrors", $d([])), o = Cw(e, "errorList"), i = yi(() => {
      var _;
      return (_ = o.value) != null && _.length ? o.value : r.value;
    }), a = Cw(e, "generalError"), u = (_) => {
      document.getElementById(_).focus();
    }, c = (_) => _.replace(/ \*$/, ""), f = $d(), w = (_) => `${c(_.label)} - ${_.message}`, v = yi(() => (i.value.length && Sw(() => f.value.focus()), e.headingText(i.value)));
    return yd(a, (_) => {
      _.length && Sw(() => f.value.focus());
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
const hs = (e, r, o, i, a) => {
  const u = as("featherForm", !1);
  if (i && u && e.value) {
    const c = $d("");
    Wd("validationErrorMessage", c);
    const f = () => {
      if (a && kw(a) && a.value)
        return c.value = a.value, {
          success: !1,
          message: a.value,
          inputId: e.value,
          label: o
        };
      try {
        return i.validateSync(r.value), c.value = "", { success: !0 };
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
    return a && kw(a) && yd(a, () => {
      u.runValidation();
    }), yd(e, (_, $) => {
      _ && u && u.register(_, v), $ && u && u.deregister($);
    }, { immediate: !0 }), fA(() => {
      u.deregister(e.value, !0);
    }), { validate: f };
  }
  return { validate: () => !0 };
}, ps = (e) => ({
  inherittedAttrs: yi(() => ({
    class: e.class,
    "data-ref-id": e["data-ref-id"]
  }))
}), ws = {
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
}, vs = (e) => {
  Wd("subTextOptions", e);
}, Ml = {
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
}, Dl = (e) => {
  Wd("wrapperOptions", e);
}, Na = window.Vue.ref, RA = window.Vue.watch, FA = window.Vue.watchEffect, Ew = window.Vue.computed, kc = window.Vue.provide, N_ = (e, r, o, i, a) => {
  const u = Na([]), c = Na(), f = Na(), w = Na();
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
  }, _ = Ew(() => c.value || f.value), $ = Hx(_, u, v), y = Ew(() => fe("feather-radio-group"));
  w.value = y.value;
  const { validate: B } = hs(w, e, o, i, a);
  return kc("register", (S) => {
    u.value = [...u.value, S], w.value === y.value && (w.value = S.id);
  }), kc("select", v), kc("blur", (S) => {
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
    validate: B,
    firstElementId: w,
    groupId: y
  };
};
var UA = Object.defineProperty, WA = Object.defineProperties, qA = Object.getOwnPropertyDescriptors, Iw = Object.getOwnPropertySymbols, HA = Object.prototype.hasOwnProperty, zA = Object.prototype.propertyIsEnumerable, xw = (e, r, o) => r in e ? UA(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, es = (e, r) => {
  for (var o in r || (r = {}))
    HA.call(r, o) && xw(e, o, r[o]);
  if (Iw)
    for (var o of Iw(r))
      zA.call(r, o) && xw(e, o, r[o]);
  return e;
}, O_ = (e, r) => WA(e, qA(r));
const br = window.Vue.defineComponent, pi = window.Vue.inject, _l = window.Vue.computed, wi = window.Vue.ref, an = window.Vue.resolveComponent, qt = window.Vue.openBlock, ki = window.Vue.createElementBlock, P_ = window.Vue.normalizeClass, An = window.Vue.renderSlot, $r = window.Vue.createBlock, Vi = window.Vue.createCommentVNode, gl = window.Vue.createElementVNode, YA = window.Vue.withModifiers, Nl = window.Vue.createVNode, R_ = window.Vue.toRef, Vd = window.Vue.mergeProps, Gn = window.Vue.withCtx, GA = window.Vue.h, jA = window.Vue.provide;
var Cr = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, KA = br({
  props: ZA,
  setup(e) {
    const r = pi("isCondensed", null), o = _l(() => r || e.condensed), i = wi(!1);
    return {
      focused: i,
      handleFocus: () => {
        i.value = !0;
      },
      handleBlur: () => {
        i.value = !1;
      },
      isCondensed: o
    };
  },
  components: {
    FeatherRipple: Vr
  }
}), JA = ["aria-disabled"];
function XA(e, r, o, i, a, u) {
  const c = an("FeatherRipple");
  return qt(), ki("div", {
    class: P_(["chip", {
      condensed: e.isCondensed,
      disabled: e.disabled,
      focused: e.focused
    }]),
    onFocusin: r[0] || (r[0] = (f) => e.clickable ? e.handleFocus : null),
    onFocusout: r[1] || (r[1] = (f) => e.clickable ? e.handleBlur : null),
    "aria-disabled": e.disabled
  }, [
    An(e.$slots, "default", {}, void 0, !0),
    e.clickable ? (qt(), $r(c, { key: 0 })) : Vi("", !0)
  ], 42, JA);
}
var Ol = /* @__PURE__ */ Cr(KA, [["render", XA], ["__scopeId", "data-v-44d413dc"]]);
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
}, eT = br({
  emits: ["delete"],
  props: QA,
  setup(e, r) {
    return {
      handleDelete: () => {
        e.disabled || r.emit("delete");
      },
      icon: cs
    };
  },
  components: {
    FeatherIcon: Y
  }
}), tT = { class: "chip-delete" }, nT = ["aria-label", "aria-describedby"];
function rT(e, r, o, i, a, u) {
  const c = an("FeatherIcon");
  return qt(), ki("span", tT, [
    gl("a", {
      href: "#",
      class: "delete-icon",
      role: "button",
      onClick: r[0] || (r[0] = YA((...f) => e.handleDelete && e.handleDelete(...f), ["stop", "prevent"])),
      "aria-label": e.label,
      "aria-describedby": e.textId
    }, [
      Nl(c, {
        icon: e.icon,
        flex: ""
      }, null, 8, ["icon"])
    ], 8, nT)
  ]);
}
var oT = /* @__PURE__ */ Cr(eT, [["render", rT], ["__scopeId", "data-v-4bae6cb4"]]);
const sT = br({
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
}), iT = ["title"];
function aT(e, r, o, i, a, u) {
  return qt(), ki("span", {
    class: "label",
    title: e.titleText,
    ref: "container"
  }, [
    An(e.$slots, "default", {}, void 0, !0)
  ], 8, iT);
}
var Pl = /* @__PURE__ */ Cr(sT, [["render", aT], ["__scopeId", "data-v-1a0445b2"]]);
const lT = {}, uT = {
  class: "chip-icon",
  role: "presentation"
};
function cT(e, r) {
  return qt(), ki("span", uT, [
    An(e.$slots, "default", {}, void 0, !0)
  ]);
}
var Rl = /* @__PURE__ */ Cr(lT, [["render", cT], ["__scopeId", "data-v-2230176f"]]);
const Aw = {
  delete: "Remove"
}, dT = br({
  inheritAttrs: !1,
  props: {
    disabled: {
      type: Boolean,
      default: !1
    },
    labels: {
      type: Object,
      default: () => Aw
    },
    condensed: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, r) {
    const o = Bl(R_(e, "labels"), Aw), i = _l(() => fe("chip-text")), a = () => {
      e.disabled || r.emit("click");
    }, u = es({}, r.attrs);
    return e.disabled && delete u.onClick, O_(es({}, o), {
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
      return this.$slots.icon && this.$slots.icon().findIndex((r) => r.children && r.children.length !== 0 || typeof r.type == "object") !== -1;
    }
  },
  components: {
    Chip: Ol,
    DeleteIcon: oT,
    Label: Pl,
    PreIcon: Rl
  }
}), fT = ["aria-disabled"];
function hT(e, r, o, i, a, u) {
  const c = an("PreIcon"), f = an("Label"), w = an("DeleteIcon"), v = an("Chip");
  return qt(), $r(v, Vd(e.attrs, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: { hover: e.canClick, focus: e.canClick || e.canDelete },
    role: "row",
    clickable: e.canClick
  }), {
    default: Gn(() => [
      gl("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        gl("span", Vd(e.chipTextAttrs, { class: "chip-label-button" }), [
          e.hasIcon ? (qt(), $r(c, { key: 0 }, {
            default: Gn(() => [
              An(e.$slots, "icon", {}, void 0, !0)
            ]),
            _: 3
          })) : Vi("", !0),
          Nl(f, { id: e.chipTextId }, {
            default: Gn(() => [
              An(e.$slots, "default", {}, void 0, !0)
            ]),
            _: 3
          }, 8, ["id"])
        ], 16)
      ], 8, fT),
      e.canDelete ? (qt(), $r(w, {
        key: 0,
        disabled: e.disabled,
        "text-id": e.chipTextId,
        label: e.deleteLabel,
        role: "gridcell",
        onDelete: r[0] || (r[0] = (_) => e.$emit("delete"))
      }, null, 8, ["disabled", "text-id", "label"])) : Vi("", !0)
    ]),
    _: 3
  }, 16, ["disabled", "condensed", "class", "clickable"]);
}
var pT = /* @__PURE__ */ Cr(dT, [["render", hT], ["__scopeId", "data-v-48b2704a"]]);
const wT = br({
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
    Chip: Ol,
    Label: Pl,
    PreIcon: Rl
  }
}), vT = ["aria-disabled"];
function mT(e, r, o, i, a, u) {
  const c = an("PreIcon"), f = an("Label"), w = an("Chip");
  return qt(), $r(w, {
    role: "row",
    disabled: e.disabled,
    condensed: e.condensed,
    clickable: !1
  }, {
    default: Gn(() => [
      gl("span", {
        role: "gridcell",
        "aria-disabled": e.disabled
      }, [
        e.hasIcon ? (qt(), $r(c, { key: 0 }, {
          default: Gn(() => [
            An(e.$slots, "icon", {}, void 0, !0)
          ]),
          _: 3
        })) : Vi("", !0),
        Nl(f, null, {
          default: Gn(() => [
            An(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ], 8, vT)
    ]),
    _: 3
  }, 8, ["disabled", "condensed"]);
}
var _T = /* @__PURE__ */ Cr(wT, [["render", mT], ["__scopeId", "data-v-3e0c4eba"]]);
const gT = br({
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
    const r = wi(!1), o = wi(!1), i = _l(() => fe("chip-label-id")), a = _l(() => r.value || o.value ? 0 : -1), u = wi(), c = () => {
      u.value.$el.focus();
    }, f = pi("register", (y) => {
    }), w = pi("blur", (y) => {
    }), v = pi("select", (y) => {
    }), _ = {
      first: r,
      focus: c,
      disabled: e.disabled,
      value: e.value,
      checked: o
    };
    return f(_), {
      labelId: i,
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
    Chip: Ol,
    Label: Pl,
    PreIcon: Rl
  }
});
function $T(e, r, o, i, a, u) {
  const c = an("PreIcon"), f = an("Label"), w = an("Chip");
  return qt(), $r(w, {
    disabled: e.disabled,
    condensed: e.condensed,
    class: P_(["focus hover", { selected: e.checked }]),
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
    default: Gn(() => [
      e.hasIcon ? (qt(), $r(c, { key: 0 }, {
        default: Gn(() => [
          An(e.$slots, "icon", {}, void 0, !0)
        ]),
        _: 3
      })) : Vi("", !0),
      Nl(f, { id: e.labelId }, {
        default: Gn(() => [
          An(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["id"])
    ]),
    _: 3
  }, 8, ["disabled", "condensed", "class", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex", "onClick", "allow-click", "onBlur"]);
}
var yT = /* @__PURE__ */ Cr(gT, [["render", $T], ["__scopeId", "data-v-bbcc2f70"]]);
const VT = {
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
}, Tw = br({
  props: VT,
  setup() {
    return { format: pi("chipListFormat", "") };
  },
  render() {
    const e = (r) => GA(r, es(es({}, this.$props), this.$attrs), es({
      default: this.$slots.default
    }, this.$slots.icon && { icon: this.$slots.icon }));
    return this.format === "grid" ? e(pT) : this.format === "radio" ? e(yT) : e(_T);
  }
}), bT = {
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
}, CT = br({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: bT,
  setup(e, r) {
    const o = e.mode === "list" ? "grid" : e.mode;
    jA("chipListFormat", o);
    const i = o === "single";
    if (o === "radio") {
      const c = R_(e, "modelValue");
      return O_(es({
        attrs: {
          role: "radiogroup"
        }
      }, N_(c, r.emit, e.label, {}, wi(""))), {
        single: i
      });
    }
    return { attrs: {
      role: "grid"
    }, keydown: () => {
    }, single: i };
  }
}), ST = ["aria-label"];
function kT(e, r, o, i, a, u) {
  return qt(), ki("div", Vd(e.attrs, {
    "data-ref-id": "feather-chip-list",
    "aria-label": e.label,
    class: ["chip-list", { condensed: e.condensed, single: e.single }],
    onKeydown: r[0] || (r[0] = (...c) => e.keydown && e.keydown(...c))
  }), [
    An(e.$slots, "default", {}, void 0, !0)
  ], 16, ST);
}
var ET = /* @__PURE__ */ Cr(CT, [["render", kT], ["__scopeId", "data-v-1e06f41d"]]);
const IT = window.Vue.defineComponent, xT = window.Vue.normalizeClass, AT = window.Vue.openBlock, TT = window.Vue.createElementBlock, BT = window.Vue.createCommentVNode, LT = /* @__PURE__ */ IT({
  __name: "StatusColor",
  props: {
    severity: {
      required: !1,
      type: String
    }
  },
  setup(e) {
    const r = e;
    return (o, i) => r != null && r.severity ? (AT(), TT("span", {
      key: 0,
      class: xT(["circle", [`${r.severity.toLowerCase()}-bg dark`]])
    }, null, 2)) : BT("", !0);
  }
});
const MT = /* @__PURE__ */ he(LT, [["__scopeId", "data-v-e08880d6"]]), DT = window.Vue.defineComponent, Ys = window.Vue.unref, F_ = window.Vue.createTextVNode, Ec = window.Vue.normalizeClass, Ic = window.Vue.withCtx, NT = window.Vue.createVNode, OT = window.Vue.renderList, PT = window.Vue.Fragment, Oa = window.Vue.openBlock, RT = window.Vue.createElementBlock, xc = window.Vue.createBlock, Bw = window.Vue.createCommentVNode, FT = window.Vue.toDisplayString;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const UT = /* @__PURE__ */ F_(" ALL "), Lw = window.Vue.ref, WT = window.Vue.watch, qT = window.Vue.computed, HT = window.Vue.reactive, zT = /* @__PURE__ */ DT({
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
    const o = e, i = Lw(!1), a = qT(() => $e.exports.keys($e.exports.groupBy(o.alarms, o.property))), u = Lw(
      (w = o.preSelected) != null && w.length ? o.preSelected : ["all"]
    ), c = HT({
      alarms: o.alarms
    }), f = (v) => {
      u.value = u.value.filter((_) => _ !== "all"), u.value.includes(v) ? u.value = u.value.filter((_) => _ !== v) : u.value.push(v), (v === "all" || u.value.length === 0) && (u.value = ["all"]), r("selected-option", u.value);
    };
    return WT(o, () => {
      var v;
      u.value = (v = o.preSelected) != null && v.length ? o.preSelected : ["all"], c.alarms = o.alarms, i.value = !1;
    }), (v, _) => Ys(a).length > 0 ? (Oa(), xc(Ys(ET), {
      key: u.value.toString(),
      condensed: "",
      label: "",
      class: Ec({ vertical: o.isVertical })
    }, {
      default: Ic(() => [
        NT(Ys(Tw), {
          class: Ec({ clicked: u.value.includes("all") }),
          onClick: _[0] || (_[0] = ($) => f("all"))
        }, {
          default: Ic(() => [
            UT
          ]),
          _: 1
        }, 8, ["class"]),
        (Oa(!0), RT(PT, null, OT(Ys(a), ($) => (Oa(), xc(Ys(Tw), {
          class: Ec([
            { clicked: u.value.includes($) },
            `${$ == null ? void 0 : $.toLowerCase()}-bg`
          ]),
          key: $,
          onClick: (y) => f($)
        }, {
          default: Ic(() => [
            e.property == "severity" ? (Oa(), xc(MT, {
              key: 0,
              severity: $
            }, null, 8, ["severity"])) : Bw("", !0),
            F_(FT($), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))), 128))
      ]),
      _: 1
    }, 8, ["class"])) : Bw("", !0);
  }
});
const YT = /* @__PURE__ */ he(zT, [["__scopeId", "data-v-d83b0f85"]]);
const GT = window.Vue.watch, jT = window.Vue.onBeforeUnmount, ZT = window.Vue.ref, KT = window.Vue.onMounted, JT = (e) => {
  const r = ZT(!1);
  let o = !1;
  const i = (c) => {
    e(c), o = !1;
  };
  function a(c) {
    o || (requestAnimationFrame(() => i(c)), o = !0);
  }
  const u = () => {
    window && window.removeEventListener("resize", a);
  };
  return KT(() => {
    const c = GT(r, (f) => {
      window && f ? window.addEventListener("resize", a) : u();
    }, {
      immediate: !0
    });
    jT(() => {
      c(), u();
    });
  }), r;
}, XT = window.Vue.watch, QT = window.Vue.onBeforeUnmount, eB = window.Vue.ref, tB = window.Vue.onMounted, nB = (e, r) => {
  const o = eB(!1), i = (c) => {
    c.target === window && r(c);
  }, a = (c) => {
    let f = [];
    Array.isArray(e.value) ? f = e.value : f = [e.value], f.some((v) => v && v.contains(c.target)) || r(c);
  }, u = () => {
    document && window && (document.removeEventListener("click", a, !0), document.removeEventListener("focus", a, !0), window.removeEventListener("blur", i));
  };
  return tB(() => {
    const c = XT(o, (f) => {
      document && window && f ? (document.addEventListener("click", a, !0), document.addEventListener("focus", a, !0), window.addEventListener("blur", i)) : u();
    }, {
      immediate: !0
    });
    QT(() => {
      c(), u();
    });
  }), o;
}, rB = window.Vue.watch, oB = window.Vue.onBeforeUnmount, sB = window.Vue.ref, U_ = (e, r) => {
  const o = sB(!1);
  let i = !1;
  const a = (w) => {
    r(w), i = !1;
  };
  function u(w) {
    i || (requestAnimationFrame(() => a(w)), i = !0);
  }
  const c = () => {
    e.value && e.value.removeEventListener("scroll", u, !0);
  }, f = rB([e, o], ([w, v], _) => {
    _ && _.length && _[0] && _[0].removeEventListener("scroll", u, !0), v && w ? w.addEventListener("scroll", u, !0) : c();
  }, {
    immediate: !0
  });
  return oB(() => {
    f(), c();
  }), o;
}, iB = window.Vue.defineComponent, Wn = window.Vue.ref, Mw = window.Vue.toRef, aB = window.Vue.onMounted, lB = window.Vue.watch, Dw = window.Vue.computed, uB = window.Vue.nextTick, Nw = window.Vue.openBlock, Ow = window.Vue.createElementBlock, Pw = window.Vue.renderSlot, cB = window.Vue.normalizeClass, dB = window.Vue.normalizeStyle, fB = window.Vue.createCommentVNode;
var hB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const pB = {
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
}, wB = {
  "trigger-click": (e) => !0,
  "outside-click": (e) => !0
}, vB = iB({
  emits: wB,
  props: pB,
  setup(e, r) {
    const o = Wn(), i = Wn(), a = Mw(e, "open"), u = Mw(e, "noExpand"), c = Wn("auto"), f = Wn(), w = Wn(e.triggerId || fe("feather-menu-trigger")), v = Wn(fe("feather-menu-dropdown")), _ = Wn(""), $ = Wn("");
    aB(() => {
      f.value = window;
    });
    const y = Wn(!1), B = () => ({
      height: f.value.innerHeight,
      width: f.value.innerWidth,
      left: 0,
      top: 0
    }), L = () => {
      if (!i.value)
        return;
      const k = o.value.getBoundingClientRect();
      y.value = !0, c.value = "auto", uB(() => {
        let { height: P, width: R } = i.value.getBoundingClientRect();
        const z = B(), de = z.height, se = z.width;
        e.fill && R < k.width ? (c.value = k.width + "px", R = k.width) : c.value = R + "px";
        let ue = 0;
        de - k.bottom < P && k.top >= P ? (ue = k.top - P, e.cover && (ue += k.height)) : (ue = k.bottom, e.cover && (ue -= k.height));
        let Ve = e.right ? k.right - R : k.left;
        !e.right && k.right >= R && se - k.left < R && (Ve = k.right - R), e.right && k.right <= R && se - k.left > R && (Ve = k.left), $.value = `${Ve}px`, _.value = `${ue}px`, y.value = !1;
      });
    }, D = nB(o, (k) => {
      r.emit("outside-click", k);
    }), S = JT(L), x = U_(f, L);
    lB([a, i], ([k, P]) => {
      k && P && L(), D.value = k, S.value = k, x.value = k;
    });
    const I = Dw(() => {
      const k = {
        id: w.value,
        "aria-haspopup": "true"
      };
      return a.value && (k["aria-controls"] = v.value), u.value || (k["aria-expanded"] = a.value ? "true" : "false"), k;
    }), O = Dw(() => ({
      click: (k) => {
        r.emit("trigger-click", k);
      }
    }));
    return {
      positionTop: _,
      positionLeft: $,
      triggerId: w,
      triggerAttrs: I,
      triggerListeners: O,
      menuId: v,
      menu: i,
      menuWidth: c,
      root: o,
      calculatePosition: L,
      calculating: y
    };
  }
}), mB = ["data-ref-id"], _B = ["data-ref-id", "id"];
function gB(e, r, o, i, a, u) {
  return Nw(), Ow("div", {
    class: "feather-menu",
    "data-ref-id": e.dataRefId,
    ref: "root"
  }, [
    Pw(e.$slots, "trigger", {
      attrs: e.triggerAttrs,
      on: e.triggerListeners
    }, void 0, !0),
    e.open ? (Nw(), Ow("div", {
      key: 0,
      class: cB(["feather-menu-dropdown", { hidden: e.calculating }]),
      "data-ref-id": e.dataRefId + "-dropdown",
      ref: "menu",
      id: e.menuId,
      style: dB({ left: e.positionLeft, top: e.positionTop, width: e.menuWidth })
    }, [
      Pw(e.$slots, "default", { labelId: e.triggerId }, void 0, !0)
    ], 14, _B)) : fB("", !0)
  ], 8, mB);
}
var W_ = /* @__PURE__ */ hB(vB, [["render", gB], ["__scopeId", "data-v-f75af406"]]), $B = {
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
const yB = window.Vue.openBlock, VB = window.Vue.createElementBlock, bB = window.Vue.createElementVNode;
var CB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const SB = {}, kB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, EB = /* @__PURE__ */ bB("path", { d: "M20.71,19.29l-6-6A6.48,6.48,0,0,0,10.86,3.14,6.5,6.5,0,0,0,7.58,15.71a6.43,6.43,0,0,0,5.74-1l6,6a1,1,0,0,0,1.42,0A1,1,0,0,0,20.71,19.29ZM9.5,14A4.5,4.5,0,1,1,14,9.5,4.49,4.49,0,0,1,9.5,14Z" }, null, -1), IB = [
  EB
];
function xB(e, r) {
  return yB(), VB("svg", kB, IB);
}
var AB = /* @__PURE__ */ CB(SB, [["render", xB]]);
const TB = window.Vue.openBlock, BB = window.Vue.createElementBlock, qd = window.Vue.createElementVNode;
var LB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const MB = {}, DB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, NB = /* @__PURE__ */ qd("path", { d: "M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" }, null, -1), OB = /* @__PURE__ */ qd("rect", {
  x: "11",
  y: "7",
  width: "2",
  height: "2",
  rx: "0.65"
}, null, -1), PB = /* @__PURE__ */ qd("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), RB = [
  NB,
  OB,
  PB
];
function FB(e, r) {
  return TB(), BB("svg", DB, RB);
}
var UB = /* @__PURE__ */ LB(MB, [["render", FB]]);
const WB = window.Vue.openBlock, qB = window.Vue.createElementBlock, HB = window.Vue.createElementVNode;
var zB = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const YB = {}, GB = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, jB = /* @__PURE__ */ HB("path", { d: "M6.7,9.29a1,1,0,0,0,0,1.41L12,16l5.3-5.3a1,1,0,0,0-1.41-1.41L12,13.17,8.11,9.29A1,1,0,0,0,6.7,9.29Z" }, null, -1), ZB = [
  jB
];
function KB(e, r) {
  return WB(), qB("svg", GB, ZB);
}
var Fl = /* @__PURE__ */ zB(YB, [["render", KB]]);
const bi = function(e, r) {
  if (!e || !r)
    return;
  let o = e.getBoundingClientRect().height;
  const i = getComputedStyle(e);
  o += parseInt(i.getPropertyValue("margin-top"), 10), o += parseInt(i.getPropertyValue("margin-bottom"), 10), r.scrollTop = e.offsetTop - r.getBoundingClientRect().height + o;
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
const JB = window.Vue.defineComponent, XB = window.Vue.openBlock, QB = window.Vue.createElementBlock, eL = window.Vue.normalizeClass, tL = window.Vue.pushScopeId, nL = window.Vue.popScopeId, bd = window.Vue.createElementVNode;
var rL = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, sL = {
  click: (e) => !0
}, iL = JB({
  emits: sL,
  props: oL,
  methods: {
    handleClick(e) {
      this.disabled || this.$emit("click", e);
    }
  }
}), q_ = (e) => (tL("data-v-07e020f5"), e = e(), nL(), e), aL = /* @__PURE__ */ q_(() => /* @__PURE__ */ bd("div", { class: "track" }, null, -1)), lL = /* @__PURE__ */ q_(() => /* @__PURE__ */ bd("div", { class: "switcher" }, [
  /* @__PURE__ */ bd("div", { class: "switch-circle" })
], -1)), uL = [
  aL,
  lL
];
function cL(e, r, o, i, a, u) {
  return XB(), QB("div", {
    class: eL(["switch-container", { checked: e.checked, disabled: e.disabled }]),
    onClick: r[0] || (r[0] = (...c) => e.handleClick && e.handleClick(...c))
  }, uL, 2);
}
var dL = /* @__PURE__ */ rL(iL, [["render", cL], ["__scopeId", "data-v-07e020f5"]]), fL = Object.defineProperty, hL = Object.defineProperties, pL = Object.getOwnPropertyDescriptors, Rw = Object.getOwnPropertySymbols, wL = Object.prototype.hasOwnProperty, vL = Object.prototype.propertyIsEnumerable, Fw = (e, r, o) => r in e ? fL(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Uw = (e, r) => {
  for (var o in r || (r = {}))
    wL.call(r, o) && Fw(e, o, r[o]);
  if (Rw)
    for (var o of Rw(r))
      vL.call(r, o) && Fw(e, o, r[o]);
  return e;
}, Ww = (e, r) => hL(e, pL(r));
const Hd = window.Vue.defineComponent, Ur = window.Vue.h, mL = window.Vue.openBlock, _L = window.Vue.createElementBlock, gL = window.Vue.renderSlot;
window.Vue.resolveComponent;
window.Vue.createBlock;
window.Vue.withCtx;
window.Vue.pushScopeId;
window.Vue.popScopeId;
window.Vue.createElementVNode;
window.Vue.createVNode;
var H_ = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, yL = Hd({
  inheritAttrs: !1,
  props: $L,
  render() {
    let e;
    this.$slots.icon && this.$slots.icon().findIndex((c) => c.children && c.children.length !== 0 || c.type && c.type.render) !== -1 && (e = Ur("span", { class: ["feather-list-item-icon"] }, {
      default: this.$slots.icon
    }));
    const o = Ur("span", { class: ["feather-list-item-text"] }, { default: this.$slots.default });
    let i;
    this.$slots.post && (i = Ur("span", { class: "feather-list-item-post" }, this.$slots.post()));
    const a = this.disabled ? void 0 : Ur(Vr);
    if (this.asLi)
      return Ur("li", Ww(Uw({}, this.$attrs), {
        class: [
          "feather-list-item hover focus",
          {
            selected: this.selected,
            highlighted: this.highlighted,
            disabled: this.disabled
          },
          this.$attrs.class || ""
        ]
      }), [e, o, i, a]);
    const u = Ur("a", Ww(Uw({}, this.$attrs), {
      class: [
        "feather-list-item focus hover",
        {
          selected: this.selected,
          disabled: this.disabled
        },
        this.$attrs.class || ""
      ]
    }), [e, o, i, a]);
    return Ur("li", {}, [u]);
  }
});
var Ei = /* @__PURE__ */ H_(yL, [["__scopeId", "data-v-7c46b2b3"]]);
Hd({
  components: {
    FeatherListItem: Ei
  }
});
const VL = {}, bL = { class: "feather-list" };
function CL(e, r) {
  return mL(), _L("ul", bL, [
    gL(e.$slots, "default", {}, void 0, !0)
  ]);
}
var zd = /* @__PURE__ */ H_(VL, [["render", CL], ["__scopeId", "data-v-941a1d50"]]);
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
Hd({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: SL,
  props: kL,
  computed: {
    labelId() {
      return fe("switch-label");
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
  components: { SwitchRender: dL, FeatherListItem: Ei }
});
var EL = Object.defineProperty, IL = Object.defineProperties, xL = Object.getOwnPropertyDescriptors, qw = Object.getOwnPropertySymbols, AL = Object.prototype.hasOwnProperty, TL = Object.prototype.propertyIsEnumerable, Hw = (e, r, o) => r in e ? EL(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Ht = (e, r) => {
  for (var o in r || (r = {}))
    AL.call(r, o) && Hw(e, o, r[o]);
  if (qw)
    for (var o of qw(r))
      TL.call(r, o) && Hw(e, o, r[o]);
  return e;
}, BL = (e, r) => IL(e, xL(r));
const ms = window.Vue.defineComponent, we = window.Vue.openBlock, Ge = window.Vue.createElementBlock, Et = window.Vue.createElementVNode, _n = window.Vue.toDisplayString, sn = window.Vue.createCommentVNode, qe = window.Vue.resolveComponent, on = window.Vue.createBlock, lt = window.Vue.withCtx, ts = window.Vue.Fragment, vi = window.Vue.renderList, It = window.Vue.createVNode, Yd = window.Vue.withModifiers, ro = window.Vue.normalizeClass, Cd = window.Vue.renderSlot, z_ = window.Vue.createTextVNode, LL = window.Vue.pushScopeId, ML = window.Vue.popScopeId, Y_ = window.Vue.reactive, G_ = window.Vue.nextTick, Ac = window.Vue.markRaw, Tc = window.Vue.toRef, zw = window.Vue.computed, DL = window.Vue.toRefs, Oo = window.Vue.ref, Bc = window.Vue.mergeProps, Yw = window.Vue.toHandlers, Pa = window.Vue.withDirectives, Ra = window.Vue.vShow;
var Ul = {
  highlight: {
    type: String,
    default: "off",
    validator(e) {
      return ["off", "ignore-case"].indexOf(e) !== -1;
    }
  }
}, Gd = {
  query: {
    type: String
  }
}, uo = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const NL = ms({
  mixins: [],
  props: Ht(Ht({
    text: {
      type: String,
      required: !0
    }
  }, Ul), Gd),
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
function RL(e, r, o, i, a, u) {
  return we(), Ge("span", null, [
    Et("span", null, _n(e.beginning), 1),
    e.highlighted ? (we(), Ge("span", OL, _n(e.highlighted), 1)) : sn("", !0),
    e.end ? (we(), Ge("span", PL, _n(e.end), 1)) : sn("", !0)
  ]);
}
var j_ = /* @__PURE__ */ uo(NL, [["render", RL], ["__scopeId", "data-v-8abe2492"]]);
const FL = ms({
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
  }, Ul), Gd),
  watch: {
    activeIndex(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("li"))[e], o = this.$refs.list;
        bi(r, o.$el);
      });
    }
  },
  methods: {
    isSelected(e) {
      const r = this.value;
      return r && r.length ? r.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    FeatherList: zd,
    FeatherListItem: Ei,
    Highlighter: j_
  }
}), UL = {
  key: 0,
  class: "autocomplete-item-new-label"
};
function WL(e, r, o, i, a, u) {
  const c = qe("Highlighter"), f = qe("FeatherListItem"), w = qe("FeatherList");
  return we(), on(w, {
    class: "feather-autocomplete-results-list",
    tabindex: "-1",
    "aria-hidden": "false",
    role: "listbox",
    "aria-multiselectable": e.single ? "false" : "true",
    ref: "list"
  }, {
    default: lt(() => [
      (we(!0), Ge(ts, null, vi(e.items, (v, _) => (we(), Ge(ts, {
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
          onClick: Yd(($) => e.select(v), ["stop"])
        }, {
          default: lt(() => [
            It(c, {
              highlight: e.highlight,
              query: e.query,
              text: v[e.textProp]
            }, null, 8, ["highlight", "query", "text"]),
            v._new ? (we(), Ge("span", UL, _n(e.newLabel), 1)) : sn("", !0)
          ]),
          _: 2
        }, 1032, ["id", "aria-selected", "highlighted", "selected", "onClick"]),
        e.items.length !== 1 && v._new ? (we(), Ge("li", {
          role: "presentation",
          key: v[e.textProp] + "hr",
          class: "hr"
        })) : sn("", !0)
      ], 64))), 128))
    ]),
    _: 1
  }, 8, ["aria-multiselectable"]);
}
var qL = /* @__PURE__ */ uo(FL, [["render", WL], ["__scopeId", "data-v-f623434a"]]);
const HL = ms({
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
  }, Ul), Gd),
  watch: {
    activeRow(e) {
      e > -1 && this.$nextTick(() => {
        const r = Array.prototype.slice.call(this.$el.querySelectorAll("tr"))[e + 1], o = this.$refs.grid;
        bi(r, o);
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
      return this.value && this.value.length ? r.some((i) => i[this.textProp] === e[this.textProp]) : this.value[this.textProp] === e[this.textProp];
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
    Highlighter: j_
  }
}), zL = {
  class: "feather-autocomplete-results-grid",
  ref: "grid"
}, YL = ["aria-multiselectable"], GL = { role: "row" }, jL = ["aria-selected", "onClick"], ZL = ["id", "aria-selected"], KL = { key: 1 };
function JL(e, r, o, i, a, u) {
  const c = qe("Highlighter");
  return we(), Ge("div", zL, [
    Et("table", {
      class: ro(["feather-autocomplete-results-grid-container", e.cls]),
      tabindex: "-1",
      "aria-hidden": "false",
      role: "grid",
      "aria-multiselectable": e.single ? "false" : "true"
    }, [
      Et("thead", null, [
        Et("tr", GL, [
          (we(!0), Ge(ts, null, vi(e.config, (f) => (we(), Ge("th", {
            key: f.title
          }, _n(f.title), 1))), 128))
        ])
      ]),
      Et("tbody", null, [
        (we(!0), Ge(ts, null, vi(e.items, (f, w) => (we(), Ge("tr", {
          role: "row",
          key: f[e.textProp],
          "aria-selected": e.isSelected(f),
          class: ro({ focus: e.isActive(w), selected: e.isSelected(f) }),
          onClick: Yd((v) => e.select(f), ["stop"])
        }, [
          (we(!0), Ge(ts, null, vi(e.config, (v, _) => (we(), Ge("td", {
            key: f[e.textProp] + v.prop,
            id: e.getId(w, _),
            "aria-selected": e.isSelected(f),
            class: ro({ "focus-cell": e.isActiveCell(w, _) })
          }, [
            v.prop === e.textProp ? (we(), on(c, {
              key: 0,
              highlight: e.highlight,
              query: e.query,
              text: f[v.prop]
            }, null, 8, ["highlight", "query", "text"])) : (we(), Ge("p", KL, _n(f[v.prop]), 1))
          ], 10, ZL))), 128))
        ], 10, jL))), 128))
      ])
    ], 10, YL)
  ], 512);
}
var XL = /* @__PURE__ */ uo(HL, [["render", JL], ["__scopeId", "data-v-58c88fd1"]]);
const QL = ms({
  components: {
    FeatherList: zd,
    FeatherListItem: Ei
  }
});
function eM(e, r, o, i, a, u) {
  const c = qe("FeatherListItem"), f = qe("FeatherList");
  return we(), on(f, { class: "result-list" }, {
    default: lt(() => [
      It(c, { "as-li": "" }, {
        default: lt(() => [
          Cd(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ]),
    _: 3
  });
}
var tM = /* @__PURE__ */ uo(QL, [["render", eM], ["__scopeId", "data-v-06b752c6"]]);
const nM = ms({
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
    Cancel: cs,
    BaseChip: Ol,
    BaseChipLabel: Pl,
    BaseChipPreIcon: Rl
  }
});
function rM(e, r, o, i, a, u) {
  const c = qe("FeatherIcon"), f = qe("BaseChipPreIcon"), w = qe("BaseChipLabel"), v = qe("Cancel"), _ = qe("BaseChip");
  return we(), on(_, {
    class: ro(["focus autocomplete-chip", { focused: e.focused }]),
    condensed: "",
    disabled: e.disabled
  }, {
    default: lt(() => [
      e.showPreIcon ? (we(), on(f, { key: 0 }, {
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
      })) : sn("", !0),
      It(w, null, {
        default: lt(() => [
          z_(_n(e.text), 1)
        ]),
        _: 1
      }),
      e.disabled ? sn("", !0) : (we(), Ge("span", {
        key: 1,
        class: "chip-delete",
        onClick: r[0] || (r[0] = Yd((...$) => e.handleClick && e.handleClick(...$), ["stop"]))
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
var oM = /* @__PURE__ */ uo(nM, [["render", rM], ["__scopeId", "data-v-e0fc6ac0"]]);
const sM = {}, iM = (e) => (LL("data-v-aa720e06"), e = e(), ML(), e), aM = { class: "spinner-container" }, lM = /* @__PURE__ */ iM(() => /* @__PURE__ */ Et("svg", {
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
], -1)), uM = [
  lM
];
function cM(e, r) {
  return we(), Ge("div", aM, uM);
}
var dM = /* @__PURE__ */ uo(sM, [["render", cM], ["__scopeId", "data-v-aa720e06"]]), Wl = /* @__PURE__ */ ((e) => (e.multi = "multi", e.single = "single", e))(Wl || {});
const Z_ = {
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
    validator: (e) => !!Wl[e]
  },
  labels: {
    type: Object,
    default: () => Z_
  },
  gridConfig: {
    type: Array
  },
  schema: {
    type: Object,
    required: !1
  }
}, Ul), ws), Ml), hM = {
  "update:modelValue": (e) => !0,
  new: (e) => !0,
  search: (e) => !0
}, pM = (e, r, o, i) => {
  if (o.toLowerCase() === Wl.multi) {
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
      r.active.row = -1, e.forceCloseResults.value = !0, u && u._new && e.allowNew ? i("new", u._new) : i("update:modelValue", u);
    },
    removeItem() {
    },
    clickedItem() {
      e.forceCloseResults.value = !0;
    },
    handleInputBlur() {
      if (r.active.row > -1) {
        const u = e.internalResults.value[r.active.row];
        u && u._new && e.allowNew ? i("new", u._new) : i("update:modelValue", u);
      }
    }
  };
}, wM = () => {
  const e = Y_({
    row: -1
  }), r = (u) => {
    G_(() => {
      e.row = u;
    });
  }, o = (u, c) => {
    if (u.keyCode === ne.DOWN) {
      if (u.preventDefault(), e.row === -1)
        i(), r(0);
      else if (e.row + 1 <= c.length - 1) {
        const f = e.row;
        i(), r(f + 1);
      }
      return !0;
    }
    if (u.keyCode === ne.UP) {
      if (u.preventDefault(), e.row === 0)
        i();
      else if (e.row > 0) {
        const f = e.row;
        i(), r(f - 1);
      }
      return !0;
    }
    return !1;
  }, i = () => {
    e.row = -1;
  };
  return { reset: i, handleKeyPress: o, active: e, first: () => {
    e.row = 0;
  } };
}, vM = (e) => {
  const r = Y_({
    row: -1,
    col: -1
  }), o = (c, f) => {
    G_(() => {
      r.col = f, r.row = c;
    });
  }, i = (c, f) => {
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
  return { reset: a, handleKeyPress: i, active: r, first: () => {
    a(), o(0, 0);
  } };
}, mM = ms({
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
      return this.type !== Wl.multi;
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
      return fe("result-item");
    },
    minCharWarningId() {
      return fe("min-char-warning");
    },
    subTextId() {
      return fe("feather-autocomplete-description");
    },
    resultsId() {
      return fe("feather-autocomplete-input-results");
    },
    selectedDescriptionId() {
      return fe("feather-autocomplete-input-selected");
    },
    searchIcon() {
      return Ac(AB);
    },
    minCharIcon() {
      return Ac(UB);
    },
    dropdownIcon() {
      return Ac(Fl);
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
        bi(this.$el.querySelector(`#${this.activeChipId}`), this.scrollContainer);
      });
    },
    query(e) {
      !this.inputRef || e !== this.inputRef.value && (this.inputRef.value = e);
    },
    modelValue: {
      handler(e, r) {
        e && r && e.length > r.length && this.scrollContainer && this.$nextTick(() => {
          bi(this.inputRef, this.scrollContainer);
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
      return this.activeChipId = fe("active-chip"), this.activeChipId;
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
      o !== void 0 && (io(this.typingTimeout), this.typingTimeout = so(() => {
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
        const i = this.modelValue;
        this.removeFromValue(i[this.activeChipIndex]), r();
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
        const i = this.modelValue;
        e.keyCode === ne.LEFT && (e.preventDefault(), this.activeChipIndex === -1 ? (o(), this.activeChipIndex = i.length - 1) : this.activeChipIndex - 1 >= 0 && (o(), this.activeChipIndex = this.activeChipIndex - 1)), e.keyCode === ne.RIGHT && (e.preventDefault(), this.activeChipIndex === i.length - 1 ? (o(), this.activeChipIndex = -1) : this.activeChipIndex < i.length - 1 && this.activeChipIndex > -1 && (o(), this.activeChipIndex = this.activeChipIndex + 1)), (e.keyCode === ne.DELETE || e.keyCode === ne.BACKSPACE) && this.activeChipIndex !== -1 && (this.removeFromValue(i[this.activeChipIndex]), o(), r());
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
    const o = Bl(Tc(e, "labels"), Z_);
    vs(e), Dl(e);
    let i;
    e.gridConfig ? i = vM(e.gridConfig) : i = wM();
    const a = Tc(e, "id"), u = zw(() => a.value ? a.value : fe("feather-autocomplete-input")), { validate: c } = hs(u, Tc(e, "modelValue"), e.label, e.schema), { selectionLimit: f, modelValue: w, textProp: v, allowNew: _, type: $, minChar: y } = DL(e), B = Oo(!1), L = Oo(!1), N = Oo(!1), D = Oo(""), S = Oo([]), x = Oo(), I = zw(() => x.value), O = () => {
      B.value && !L.value && (D.value && D.value.length >= y.value && r.emit("search", D.value), y.value <= 0 && r.emit("search", D.value || ""), S.value = [], i.reset());
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
      emitSearch: O
    }, i, $.value, r.emit);
    return BL(Ht(Ht({}, o), ps(r.attrs)), {
      query: D,
      internalResults: S,
      selectionLimitReached: L,
      forceCloseResults: N,
      hasFocus: B,
      strategy: k,
      emitSearch: O,
      active: i.active,
      handleResultNavigation: i.handleKeyPress,
      resetResultIndex: i.reset,
      selectFirst: i.first,
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
    InputWrapper: Ll,
    InputSubText: fs,
    AutocompleteResults: qL,
    AutocompleteResultsGrid: XL,
    Chip: oM,
    MenuMessage: tM,
    FeatherIcon: Y,
    FeatherMenu: W_,
    Spinner: dM
  }
}), _M = {
  class: "alert",
  role: "alert",
  "aria-live": "polite",
  "aria-atomic": "true",
  ref: "alert"
}, gM = ["id"], $M = { "data-ref-id": "feather-autocomplete-no-results" }, yM = { "data-ref-id": "feather-autocomplete-selection-limit" }, VM = { "data-ref-id": "feather-autocomplete-min-char" };
function bM(e, r, o, i, a, u) {
  const c = qe("FeatherIcon"), f = qe("Chip"), w = qe("InputWrapper"), v = qe("AutocompleteResults"), _ = qe("AutocompleteResultsGrid"), $ = qe("MenuMessage"), y = qe("Spinner"), B = qe("FeatherMenu"), L = qe("InputSubText");
  return we(), Ge("div", Bc(e.inherittedAttrs, { class: "feather-autocomplete-container" }), [
    It(B, {
      fill: "",
      "no-expand": "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: ro(["feather-autocomplete-menu-container", { grid: e.gridConfig }]),
      "data-ref-id": "feather-autocomplete-menu-container",
      ref: "menu"
    }, {
      trigger: lt(({ attrs: N, on: D }) => [
        It(w, Bc(Ht(Ht({}, N), e.comboxBoxAttrs), {
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "clear-text": e.clearLabel,
          showClear: e.singleSelect && e.hasValue,
          onClear: e.handleClear
        }, Yw(D), { ref: "scroll" }), {
          pre: lt(() => [
            Cd(e.$slots, "pre", {}, () => [
              It(c, { icon: e.searchIcon }, null, 8, ["icon"])
            ], !0)
          ]),
          post: lt(() => [
            It(c, {
              icon: e.dropdownIcon,
              class: ro(["feather-autocomplete-dropdown-icon", { rotate: e.showMenu }]),
              onClick: e.handleDropdownIconClick
            }, null, 8, ["icon", "class", "onClick"])
          ]),
          default: lt(() => [
            Et("div", {
              class: ro(["feather-autocomplete-content", { disabled: e.disabled }])
            }, [
              Et("div", _M, null, 512),
              Et("div", {
                class: "description",
                id: e.selectedDescriptionId,
                "data-ref-id": "feather-autocomplete-input-selected"
              }, _n(e.selectedDescribedByText), 9, gM),
              (we(!0), Ge(ts, null, vi(e.modelValueList, (S, x) => Pa((we(), on(f, {
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
                [Ra, !e.singleSelect]
              ])), 128)),
              Et("textarea", Bc(e.inputAttrs, {
                class: ["feather-autocomplete-input", { error: e.error }],
                "data-ref-id": "feather-autocomplete-input"
              }, Yw(e.inputListeners), { ref: "input" }), null, 16)
            ], 2)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "clear-text", "showClear", "onClear"])
      ]),
      default: lt(() => [
        e.gridConfig ? sn("", !0) : Pa((we(), on(v, {
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
          [Ra, e.showResults]
        ]),
        e.gridConfig ? Pa((we(), on(_, {
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
          [Ra, e.showResults]
        ]) : sn("", !0),
        e.showNoResults ? (we(), on($, { key: 2 }, {
          default: lt(() => [
            Et("span", $M, _n(e.noResultsLabel), 1)
          ]),
          _: 1
        })) : sn("", !0),
        e.showSelectionLimit ? (we(), on($, {
          key: 3,
          class: "selection-limit-warning"
        }, {
          default: lt(() => [
            It(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Et("span", yM, _n(e.selectionLimitLabel), 1)
          ]),
          _: 1
        })) : sn("", !0),
        e.minChar ? Pa((we(), on($, {
          key: 4,
          class: "min-char-warning",
          id: e.minCharWarningId
        }, {
          default: lt(() => [
            It(c, { icon: e.minCharIcon }, null, 8, ["icon"]),
            Et("span", VM, [
              Cd(e.$slots, "min-char", {}, () => [
                z_(_n(e.computedMinCharText), 1)
              ], !0)
            ])
          ]),
          _: 3
        }, 8, ["id"])), [
          [Ra, e.showMinCharWarning]
        ]) : sn("", !0),
        e.showLoading ? (we(), on(y, { key: 5 })) : sn("", !0)
      ]),
      _: 3
    }, 8, ["open", "onOutsideClick", "onTriggerClick", "class"]),
    It(L, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var CM = /* @__PURE__ */ uo(mM, [["render", bM], ["__scopeId", "data-v-43a7e951"]]);
var SM = Object.defineProperty, kM = Object.defineProperties, EM = Object.getOwnPropertyDescriptors, Gw = Object.getOwnPropertySymbols, IM = Object.prototype.hasOwnProperty, xM = Object.prototype.propertyIsEnumerable, jw = (e, r, o) => r in e ? SM(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, al = (e, r) => {
  for (var o in r || (r = {}))
    IM.call(r, o) && jw(e, o, r[o]);
  if (Gw)
    for (var o of Gw(r))
      xM.call(r, o) && jw(e, o, r[o]);
  return e;
}, K_ = (e, r) => kM(e, EM(r));
const J_ = window.Vue.defineComponent, AM = window.Vue.ref, mi = window.Vue.computed, TM = window.Vue.reactive, Zw = window.Vue.watch, Lc = window.Vue.inject, X_ = window.Vue.resolveComponent, Sd = window.Vue.openBlock, Q_ = window.Vue.createElementBlock, yr = window.Vue.createElementVNode, BM = window.Vue.createBlock, LM = window.Vue.createCommentVNode, eg = window.Vue.renderSlot, MM = window.Vue.pushScopeId, DM = window.Vue.popScopeId, Mc = window.Vue.toRef, Kw = window.Vue.mergeProps, NM = window.Vue.toDisplayString, OM = window.Vue.createVNode;
var tg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, RM = J_({
  props: PM,
  setup(e) {
    const r = AM(), o = () => {
      r.value.focus();
    }, i = mi(() => fe("feather-radio-button")), a = TM({
      first: !1,
      focus: o,
      disabled: e.disabled,
      value: e.value,
      checked: !1,
      id: i.value
    }), u = mi(() => fe("radio-label-id")), c = mi(() => a.first || a.checked ? 0 : -1);
    Zw(() => e.disabled, ($) => {
      a.disabled = $;
    }, { immediate: !0 }), Zw(() => e.value, ($) => {
      a.value = $;
    }, { immediate: !0 });
    const f = Lc("register", ($) => {
    }), w = Lc("blur", ($) => {
    }), v = Lc("select", ($) => {
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
      id: i
    };
  },
  components: {
    FeatherRipple: Vr
  }
}), FM = (e) => (MM("data-v-24790cf0"), e = e(), DM(), e), UM = { class: "layout-container" }, WM = ["id", "aria-checked", "aria-disabled", "aria-labelledby", "tabindex"], qM = { class: "radio hover focus" }, HM = /* @__PURE__ */ FM(() => /* @__PURE__ */ yr("div", {
  class: "icon",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ yr("svg", { class: "dot" }, [
    /* @__PURE__ */ yr("circle", {
      cx: "50%",
      cy: "50%",
      r: "0.3125rem",
      stroke: "black",
      "stroke-width": "0"
    })
  ])
], -1)), zM = ["id"];
function YM(e, r, o, i, a, u) {
  const c = X_("feather-ripple");
  return Sd(), Q_("div", UM, [
    yr("div", {
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
      yr("div", qM, [
        HM,
        e.vm.disabled ? LM("", !0) : (Sd(), BM(c, {
          key: 0,
          center: ""
        }))
      ]),
      yr("span", {
        class: "label",
        "data-ref-id": "feather-radio-label",
        id: e.labelId
      }, [
        eg(e.$slots, "default", {}, void 0, !0)
      ], 8, zM)
    ], 40, WM)
  ]);
}
var kd = /* @__PURE__ */ tg(RM, [["render", YM], ["__scopeId", "data-v-24790cf0"]]);
const GM = K_(al({}, ws), {
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
}, ZM = J_({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  props: GM,
  emits: jM,
  setup(e, r) {
    vs(e);
    const o = Mc(e, "error"), i = Mc(e, "modelValue"), a = mi(() => fe("feather-input-description")), u = mi(() => {
      const c = K_(al({}, r.attrs), {
        class: "",
        "aria-describedby": a.value
      });
      return c["aria-invalid"] || (c["aria-invalid"] = !!o.value), c;
    });
    return al(al({
      descriptionId: a,
      attrs: u
    }, N_(i, r.emit, e.label, e.schema, Mc(e, "error"))), ps(r.attrs));
  },
  components: {
    InputSubText: fs
  }
}), KM = ["for"], JM = ["id"];
function XM(e, r, o, i, a, u) {
  const c = X_("InputSubText");
  return Sd(), Q_("div", Kw(e.inherittedAttrs, {
    class: ["feather-radio-group-container", { vertical: e.vertical }]
  }), [
    yr("label", {
      for: e.groupId,
      class: "group-label"
    }, NM(e.label), 9, KM),
    yr("div", Kw(e.attrs, {
      class: "feather-radio-group",
      "data-ref-id": "feather-radio-group",
      role: "radiogroup",
      id: e.groupId,
      onKeydown: r[0] || (r[0] = (...f) => e.keydown && e.keydown(...f))
    }), [
      eg(e.$slots, "default", {}, void 0, !0)
    ], 16, JM),
    OM(c, { id: e.descriptionId }, null, 8, ["id"])
  ], 16);
}
var ng = /* @__PURE__ */ tg(ZM, [["render", XM], ["__scopeId", "data-v-6775aeb9"]]);
const QM = window.Vue.defineComponent, eD = window.Vue.renderList, tD = window.Vue.Fragment, Jw = window.Vue.openBlock, nD = window.Vue.createElementBlock, rD = window.Vue.toDisplayString, oD = window.Vue.createTextVNode, Xw = window.Vue.unref, Qw = window.Vue.withCtx, sD = window.Vue.createVNode, iD = window.Vue.createBlock, aD = window.Vue.watch, lD = window.Vue.ref, uD = /* @__PURE__ */ QM({
  __name: "FilterByDate",
  props: {
    preSelected: null
  },
  emits: ["filter-date-selected"],
  setup(e, { emit: r }) {
    const o = e, i = [
      { id: 1, name: "No filter" },
      { id: 2, name: "Today" },
      { id: 3, name: "Yesterday" },
      { id: 4, name: "This week" }
    ], a = lD(o.preSelected || i[0].id);
    return aD(o, () => {
      o.preSelected && (a.value = o.preSelected);
    }), (u, c) => (Jw(), iD(Xw(ng), {
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
      default: Qw(() => [
        (Jw(), nD(tD, null, eD(i, (f) => sD(Xw(kd), {
          value: f.id,
          key: f.id
        }, {
          default: Qw(() => [
            oD(rD(f.name), 1)
          ]),
          _: 2
        }, 1032, ["value"])), 64))
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const cD = /* @__PURE__ */ he(uD, [["__scopeId", "data-v-0363302c"]]);
var dD = Object.defineProperty, fD = Object.defineProperties, hD = Object.getOwnPropertyDescriptors, ev = Object.getOwnPropertySymbols, pD = Object.prototype.hasOwnProperty, wD = Object.prototype.propertyIsEnumerable, tv = (e, r, o) => r in e ? dD(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Gs = (e, r) => {
  for (var o in r || (r = {}))
    pD.call(r, o) && tv(e, o, r[o]);
  if (ev)
    for (var o of ev(r))
      wD.call(r, o) && tv(e, o, r[o]);
  return e;
}, nv = (e, r) => fD(e, hD(r));
const vD = window.Vue.defineComponent, mD = window.Vue.inject, js = window.Vue.h;
var _D = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
    }, r = this.asAnchor ? "a" : "button", o = {}, i = Gs({}, this.$attrs);
    o.attrs = i || {}, this.asAnchor ? o.attrs.role = "button" : o.attrs.type = o.attrs.type || "button", this.disabled && (o.attrs["aria-disabled"] = "true"), o.on = {
      onClick: (f) => {
        this.disabled ? (this.asAnchor && f.preventDefault(), this.$emit("disabled-click", f)) : this.$emit("click", f);
      }
    };
    const a = e();
    o.class = [this.$attrs.class].concat(a), this.$slots.icon && o.class.push("has-icon");
    let u = js(Vr);
    if (this.disabled && (u = void 0), this.icon && this.$slots.default) {
      const f = this.icon;
      return o.attrs["aria-label"] = f, this.hasTooltip || (o.attrs.title = f), js(r, nv(Gs(Gs({}, o.attrs), o.on), { class: o.class }), [
        this.$slots.default(),
        this.disabled ? void 0 : js(Vr, { center: !0 })
      ]);
    }
    const c = js("span", { class: ["btn-content"] }, [
      this.$slots.default ? this.$slots.default() : ""
    ]);
    return js(r, nv(Gs(Gs({}, o.attrs), o.on), { class: o.class }), [
      this.$slots.icon ? this.$slots.icon() : void 0,
      c,
      u
    ]);
  }
});
var le = /* @__PURE__ */ _D($D, [["__scopeId", "data-v-702d1074"]]);
const yD = window.Vue.openBlock, VD = window.Vue.createElementBlock, bD = window.Vue.createElementVNode;
var CD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
const TD = window.Vue.openBlock, BD = window.Vue.createElementBlock, LD = window.Vue.createElementVNode;
var MD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const DD = {}, ND = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, OD = /* @__PURE__ */ LD("path", { d: "M17.3,14.71a1,1,0,0,0,0-1.41L12,8,6.7,13.3a1,1,0,1,0,1.41,1.41L12,10.83l3.89,3.88A1,1,0,0,0,17.3,14.71Z" }, null, -1), PD = [
  OD
];
function RD(e, r) {
  return TD(), BD("svg", ND, PD);
}
var FD = /* @__PURE__ */ MD(DD, [["render", RD]]);
const UD = window.Vue.openBlock, WD = window.Vue.createElementBlock, qD = window.Vue.createElementVNode;
var HD = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
var rg = /* @__PURE__ */ HD(zD, [["render", ZD]]);
const KD = window.Vue.defineComponent, Cn = window.Vue.unref, Wr = window.Vue.createVNode, rv = window.Vue.toDisplayString, zn = window.Vue.createElementVNode, og = window.Vue.createTextVNode, ov = window.Vue.openBlock, sv = window.Vue.createElementBlock, JD = window.Vue.createCommentVNode, XD = window.Vue.withCtx, QD = window.Vue.vShow, eN = window.Vue.normalizeClass, tN = window.Vue.withDirectives, nN = window.Vue.Fragment, rN = window.Vue.pushScopeId, oN = window.Vue.popScopeId, sg = (e) => (rN("data-v-b1dc2670"), e = e(), oN(), e), sN = /* @__PURE__ */ og(" Filters "), iN = { class: "count" }, aN = { class: "results" }, lN = { class: "total" }, uN = /* @__PURE__ */ og(" Reset "), cN = /* @__PURE__ */ sg(() => /* @__PURE__ */ zn("div", { class: "title" }, "By Severities:", -1)), dN = /* @__PURE__ */ sg(() => /* @__PURE__ */ zn("div", { class: "title" }, "By Start Date:", -1)), qr = window.Vue.ref, fN = window.Vue.reactive, hN = window.Vue.markRaw, iv = window.Vue.watch, pN = /* @__PURE__ */ KD({
  __name: "CommonFilters",
  props: {
    list: null,
    isSituation: { type: Boolean },
    isOpen: { type: Boolean },
    saveFilters: { type: Boolean }
  },
  emits: ["filtered-list"],
  setup(e, { emit: r }) {
    const o = e, i = hN({
      FilterAlt: AD,
      ExpandLess: FD,
      ExpandMore: Fl,
      Refresh: rg
    }), a = gn(), u = qr(o.isOpen), c = qr(["all"]), f = qr(1), w = qr(o.list), v = qr(!1), _ = qr(0), $ = qr(null), y = fN({
      nodes: a.nodes,
      results: a.nodes,
      nodeSelectedValue: void 0
    }), B = () => {
      var P, R;
      o.saveFilters && a.filters && (a.filters.node && (y.nodeSelectedValue = a.filters.node), ((P = a.filters) == null ? void 0 : P.severities) && !((R = a.filters) != null && R.severities.includes("all")) && (c.value = a.filters.severities), f.value = a.filters.timeStart, a.filters = null, I());
    }, L = () => {
      y.nodes = a.nodes, y.results = a.nodes;
    };
    iv(
      () => a.nodes,
      () => {
        L();
      }
    ), iv(o, () => {
      w.value = o.list, B();
    });
    const N = (P) => {
      c.value = P, I();
    }, D = (P) => {
      f.value = P, I();
    }, S = (P) => {
      if (!P)
        return y.nodeSelectedValue = void 0, [];
      v.value = !0, y.results = y.nodes.filter((R) => R.label.toLowerCase().indexOf(P) > -1).map((R) => ({
        _text: R.label,
        id: R.id
      })), v.value = !1;
    }, x = () => {
      c.value = ["all"], f.value = 1, y.nodeSelectedValue = void 0, _.value = 0, r("filtered-list", o.list), o.isOpen || (u.value = !1), o.saveFilters && (a.filters = null), w.value = o.list;
    }, I = () => {
      _.value = 0;
      let P = o.list;
      y.nodeSelectedValue && y.nodeSelectedValue._text && (_.value++, o.isSituation ? P = P.map((R) => {
        if (R.relatedAlarms.filter(
          (se) => {
            var ue;
            return se.nodeLabel === ((ue = y.nodeSelectedValue) == null ? void 0 : ue._text);
          }
        ).length > 0)
          return R;
      }).filter((R) => R) : P = P.filter(
        (R) => {
          var z;
          return R.nodeLabel === ((z = y.nodeSelectedValue) == null ? void 0 : z._text);
        }
      )), c.value.includes("all") || (_.value++, P = P.filter(
        (R) => c.value.includes(R.severity)
      )), f.value !== 1 && (_.value++, P = J2(
        f.value,
        P
      )), w.value = P, o.saveFilters && O(), r("filtered-list", P);
    }, O = () => {
      a.filters = {
        node: y.nodeSelectedValue,
        severities: c.value,
        timeStart: f.value
      };
    }, k = () => {
      u.value = !u.value;
    };
    return (P, R) => (ov(), sv(nN, null, [
      o.isOpen ? JD("", !0) : (ov(), sv("div", {
        key: 0,
        class: "btn-filter",
        onClick: k
      }, [
        zn("div", null, [
          Wr(Cn(Y), {
            icon: Cn(i).FilterAlt,
            class: "icon"
          }, null, 8, ["icon"]),
          sN,
          zn("span", iN, rv(_.value), 1)
        ]),
        Wr(Cn(Y), {
          icon: u.value ? Cn(i).ExpandLess : Cn(i).ExpandMore,
          class: "icon"
        }, null, 8, ["icon"])
      ])),
      tN(zn("div", {
        class: eN(["filters", { collapsed: !o.isOpen }])
      }, [
        zn("div", aN, [
          zn("div", lN, "Results: " + rv(Cn(w).length), 1),
          Wr(Cn(le), {
            class: "btn-reset",
            onClick: x
          }, {
            default: XD(() => [
              Wr(Cn(Y), {
                icon: Cn(i).Refresh,
                class: "icon"
              }, null, 8, ["icon"]),
              uN
            ]),
            _: 1
          })
        ]),
        zn("div", null, [
          Wr(Cn(CM), {
            ref_key: "autocomplete",
            ref: $,
            label: "Search by node",
            loading: v.value,
            modelValue: y.nodeSelectedValue,
            "onUpdate:modelValue": [
              R[0] || (R[0] = (z) => y.nodeSelectedValue = z),
              I
            ],
            results: y.results,
            type: "single",
            onSearch: S
          }, null, 8, ["loading", "modelValue", "results"]),
          cN,
          Wr(YT, {
            alarms: o.list,
            onSelectedOption: N,
            property: "severity",
            "pre-selected": c.value
          }, null, 8, ["alarms", "pre-selected"]),
          zn("div", null, [
            dN,
            Wr(cD, {
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
const _s = /* @__PURE__ */ he(pN, [["__scopeId", "data-v-b1dc2670"]]), wN = window.Vue.openBlock, vN = window.Vue.createElementBlock, mN = window.Vue.createElementVNode;
var _N = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
var ql = /* @__PURE__ */ _N(gN, [["render", bN]]);
const CN = window.Vue.openBlock, SN = window.Vue.createElementBlock, ig = window.Vue.createElementVNode;
var kN = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const EN = {}, IN = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, xN = /* @__PURE__ */ ig("path", { d: "M22.93,11.63A11.79,11.79,0,0,0,12,4,11.79,11.79,0,0,0,1.07,11.63a1,1,0,0,0,0,.74A11.79,11.79,0,0,0,12,20a11.79,11.79,0,0,0,10.93-7.63A1,1,0,0,0,22.93,11.63ZM12,18a9.77,9.77,0,0,1-8.92-6A9.77,9.77,0,0,1,12,6a9.77,9.77,0,0,1,8.92,6A9.77,9.77,0,0,1,12,18Z" }, null, -1), AN = /* @__PURE__ */ ig("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}, null, -1), TN = [
  xN,
  AN
];
function BN(e, r) {
  return CN(), SN("svg", IN, TN);
}
var LN = /* @__PURE__ */ kN(EN, [["render", BN]]);
const MN = window.Vue.openBlock, DN = window.Vue.createElementBlock, NN = window.Vue.createElementVNode;
var ON = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
const Sr = () => window.VRouter || r1;
const HN = window.Vue.openBlock, zN = window.Vue.createElementBlock, YN = window.Vue.pushScopeId, GN = window.Vue.popScopeId, av = window.Vue.createElementVNode;
var jN = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const ZN = {}, KN = (e) => (YN("data-v-2263be39"), e = e(), GN(), e), JN = { class: "spinner-container" }, XN = /* @__PURE__ */ KN(() => /* @__PURE__ */ av("svg", {
  class: "spinner",
  viewBox: "0 0 66 66",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ av("circle", {
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
var ns = /* @__PURE__ */ jN(ZN, [["render", e3], ["__scopeId", "data-v-2263be39"]]);
const t3 = window.Vue.defineComponent, Dc = window.Vue.unref, n3 = window.Vue.createVNode, r3 = window.Vue.createElementVNode, o3 = window.Vue.withCtx, s3 = window.Vue.openBlock, i3 = window.Vue.createBlock, a3 = window.Vue.pushScopeId, l3 = window.Vue.popScopeId, u3 = (e) => (a3("data-v-fba500de"), e = e(), l3(), e), c3 = /* @__PURE__ */ u3(() => /* @__PURE__ */ r3("span", null, "New Situation", -1)), d3 = window.Vue.markRaw, f3 = /* @__PURE__ */ t3({
  __name: "NewSituationBtn",
  setup(e) {
    const r = Sr(), o = d3({
      Add: ql
    }), i = () => {
      r.push({
        name: "addSituation"
      });
    };
    return (a, u) => (s3(), i3(Dc(le), {
      class: "new-situation-btn",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: o3(() => [
        n3(Dc(Y), {
          icon: Dc(o).Add,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        c3
      ]),
      _: 1
    }));
  }
});
const ag = /* @__PURE__ */ he(f3, [["__scopeId", "data-v-fba500de"]]), h3 = "/whoami", p3 = async () => {
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
}, ao = w3("userStore", {
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
      const i = {
        ...v3,
        ...o,
        distanceMeasureName: r ? tt.HELLINGER_OPTION : tt.SPACE_DISTANCE_OPTION,
        engineName: e
      };
      return r || (i.hellingerW = null, i.hellingerBias = null), await tI(i) ? (this.engineInfo = i, !0) : !1;
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
      const r = await iI(e);
      return r && (this.llmUsage = r), r;
    }
  }
}), m3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjIiLz4KICA8cGF0aCBkPSJNOC43LDYuMjg1MkEyLjk2NjUsMi45NjY1LDAsMCwwLDksNSwzLDMsMCwxLDAsNiw4YTIuOTYsMi45NiwwLDAsMCwxLjI4NTItLjMwMDhMMTAsMTAuNDE0MVYxM2gyVjkuNTg1OVpNNiw2QTEsMSwwLDEsMSw3LDUsMS4wMDA5LDEuMDAwOSwwLDAsMSw2LDZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+CiAgPHBhdGggZD0iTTE5LDVhMywzLDAsMSwwLTQsMi44MTU0VjEzaDJWNy44MTU5QTIuOTk1NywyLjk5NTcsMCwwLDAsMTksNVpNMTYsNmExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsMTYsNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMjYsMmEzLjAwMzMsMy4wMDMzLDAsMCwwLTMsMywyLjk2NjUsMi45NjY1LDAsMCwwLC4zLDEuMjg1MkwyMCw5LjU4NTlWMTNoMlYxMC40MTQxbDIuNzE0OC0yLjcxNDlBMi45NiwyLjk2LDAsMCwwLDI2LDhhMywzLDAsMCwwLDAtNlptMCw0YTEsMSwwLDEsMSwxLTFBMS4wMDA5LDEuMDAwOSwwLDAsMSwyNiw2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0xMiwxOUgxMHYyLjU4NTlMNy4yODU0LDI0LjMwMDhBMi45NjA5LDIuOTYwOSwwLDAsMCw2LDI0YTMsMywwLDEsMCwzLDMsMi45NjY1LDIuOTY2NSwwLDAsMC0uMy0xLjI4NTJMMTIsMjIuNDE0MVpNNiwyOGExLDEsMCwxLDEsMS0xQTEuMDAwOSwxLjAwMDksMCwwLDEsNiwyOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz4KICA8cGF0aCBkPSJNMTcsMjQuMTg0MVYxOUgxNXY1LjE4NDFhMywzLDAsMSwwLDIsMFpNMTYsMjhhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDE2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxwYXRoIGQ9Ik0yNiwyNGEyLjk2MDksMi45NjA5LDAsMCwwLTEuMjg1NC4zMDA4TDIyLDIxLjU4NTlWMTlIMjB2My40MTQxbDMuMywzLjMwMDdBMi45NjY1LDIuOTY2NSwwLDAsMCwyMywyN2EzLDMsMCwxLDAsMy0zWm0wLDRhMSwxLDAsMSwxLDEtMUExLjAwMDksMS4wMDA5LDAsMCwxLDI2LDI4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIvPgogIDxyZWN0IGlkPSJfVHJhbnNwYXJlbnRfUmVjdGFuZ2xlXyIgZGF0YS1uYW1lPSImbHQ7VHJhbnNwYXJlbnQgUmVjdGFuZ2xlJmd0OyIgY2xhc3M9ImNscy0xIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz4KPC9zdmc+Cg==", _3 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJpY29uIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IG5vbmU7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGQ9Ik0xNiw3YTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwxNiw3Wm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwxNiwzWiIvPgogIDxwYXRoIGQ9Ik0xMSwzMGEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsMTEsMzBabTAtNGExLDEsMCwxLDAsMSwxQTEuMDAxLDEuMDAxLDAsMCwwLDExLDI2WiIvPgogIDxwYXRoIGQ9Ik03LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSw3LDExWk03LDdBMSwxLDAsMSwwLDgsOCwxLjAwMSwxLjAwMSwwLDAsMCw3LDdaIi8+CiAgPHBhdGggZD0iTTIxLDMwYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyMSwzMFptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjEsMjZaIi8+CiAgPHBhdGggZD0iTTI1LDExYTMsMywwLDEsMSwzLTNBMy4wMDMzLDMuMDAzMywwLDAsMSwyNSwxMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsMjUsN1oiLz4KICA8cGF0aCBkPSJNNCwyMWEzLDMsMCwxLDEsMy0zQTMuMDAzMywzLjAwMzMsMCwwLDEsNCwyMVptMC00YTEsMSwwLDEsMCwxLDFBMS4wMDEsMS4wMDEsMCwwLDAsNCwxN1oiLz4KICA8cGF0aCBkPSJNMjgsMjFhMywzLDAsMSwxLDMtM0EzLjAwMzMsMy4wMDMzLDAsMCwxLDI4LDIxWm0wLTRhMSwxLDAsMSwwLDEsMUExLjAwMSwxLjAwMSwwLDAsMCwyOCwxN1oiLz4KICA8cGF0aCBkPSJNMTYsMjJhNiw2LDAsMSwxLDYtNkE2LjAwNjksNi4wMDY5LDAsMCwxLDE2LDIyWm0wLTEwYTQsNCwwLDEsMCw0LDRBNC4wMDQ1LDQuMDA0NSwwLDAsMCwxNiwxMloiLz4KICA8cmVjdCBpZD0iX1RyYW5zcGFyZW50X1JlY3RhbmdsZV8iIGRhdGEtbmFtZT0iJmx0O1RyYW5zcGFyZW50IFJlY3RhbmdsZSZndDsiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+Cjwvc3ZnPgo=", g3 = window.Vue.defineComponent, Po = window.Vue.unref, Ro = window.Vue.openBlock, Fo = window.Vue.createElementBlock, $3 = window.Vue.createCommentVNode, lg = window.Vue.createTextVNode, lv = window.Vue.Fragment, ug = window.Vue.createElementVNode, y3 = window.Vue.pushScopeId, V3 = window.Vue.popScopeId, b3 = (e) => (y3("data-v-b87e4e5c"), e = e(), V3(), e), C3 = ["src"], S3 = { class: "engine" }, k3 = /* @__PURE__ */ lg(" ENGINE "), E3 = {
  key: 0,
  class: "type"
}, I3 = {
  key: 1,
  class: "type"
}, x3 = /* @__PURE__ */ lg(" ENGINE "), A3 = /* @__PURE__ */ b3(() => /* @__PURE__ */ ug("div", {
  class: "type not-set",
  "data-test": "configuration-not-set"
}, "CONFIGURE", -1)), uv = window.Vue.computed, T3 = /* @__PURE__ */ g3({
  __name: "ConfigurationInfo",
  setup(e) {
    const r = Sr(), o = ao(), i = () => {
      r.push({
        name: "settings"
      });
    }, a = uv(() => {
      var c;
      return !!((c = o.engineInfo) != null && c.engineName);
    }), u = uv(
      () => {
        var c;
        return ((c = o.engineInfo) == null ? void 0 : c.engineName) == tt.ENGINE_DBSCAN;
      }
    );
    return (c, f) => (Ro(), Fo("div", {
      class: "info-engine",
      onClick: i,
      "data-test": "configuration-info"
    }, [
      Po(a) ? (Ro(), Fo("img", {
        key: 0,
        src: Po(u) ? Po(_3) : Po(m3),
        class: "icon-type"
      }, null, 8, C3)) : $3("", !0),
      ug("div", S3, [
        Po(a) ? (Ro(), Fo(lv, { key: 0 }, [
          k3,
          Po(u) ? (Ro(), Fo("div", E3, "CLUSTERING")) : (Ro(), Fo("div", I3, "DEEP LEARNING"))
        ], 64)) : (Ro(), Fo(lv, { key: 1 }, [
          x3,
          A3
        ], 64))
      ])
    ]));
  }
});
const B3 = /* @__PURE__ */ he(T3, [["__scopeId", "data-v-b87e4e5c"]]);
const L3 = {}, M3 = window.Vue.openBlock, D3 = window.Vue.createElementBlock;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const N3 = { class: "empty" };
function O3(e, r) {
  return M3(), D3("div", N3, "No results found.");
}
const gs = /* @__PURE__ */ he(L3, [["render", O3], ["__scopeId", "data-v-725433ac"]]), P3 = window.Vue.defineComponent, Sn = window.Vue.createElementVNode, Zs = window.Vue.unref, Hr = window.Vue.createVNode, R3 = window.Vue.withCtx, Fa = window.Vue.toDisplayString, qn = window.Vue.openBlock, zr = window.Vue.createElementBlock, cv = window.Vue.createCommentVNode, dv = window.Vue.createBlock, F3 = window.Vue.renderList, U3 = window.Vue.Fragment, W3 = window.Vue.pushScopeId, q3 = window.Vue.popScopeId, cg = (e) => (W3("data-v-2675e2f8"), e = e(), q3(), e), H3 = { class: "list-main" }, z3 = { class: "header" }, Y3 = /* @__PURE__ */ cg(() => /* @__PURE__ */ Sn("h2", null, "Situation List", -1)), G3 = { class: "link-btns" }, j3 = /* @__PURE__ */ cg(() => /* @__PURE__ */ Sn("span", null, "View Unassociated Alarms", -1)), Z3 = { class: "content" }, K3 = { class: "left-filters" }, J3 = { class: "container" }, X3 = { class: "autocomplete" }, Q3 = { key: 0 }, eO = { key: 1 }, tO = { key: 0 }, nO = { class: "situation-list" }, rO = {
  key: 0,
  class: "footer-pager"
}, oO = window.Vue.reactive, Ua = window.Vue.ref, sO = window.Vue.watch, iO = window.Vue.markRaw, aO = /* @__PURE__ */ P3({
  __name: "SituationList",
  setup(e) {
    const r = iO({
      Add: ql,
      View: LN,
      Settings: qN
    }), o = Sr(), i = gn(), a = ao();
    i.getSituations(), i.getNodes(), i.getUnassignedAlarms(), a.getEngineInfo();
    const u = 9, c = oO({
      situations: [],
      selectedSituationIndex: 0,
      situationSelected: null,
      nodes: [],
      results: [],
      nodeSelectedValue: void 0,
      allSituations: []
    }), f = Ua(!0), w = Ua(0), v = Ua(1), _ = Ua(0), $ = () => {
      c.nodes = i.nodes, c.results = i.nodes;
    };
    sO(
      () => i.situations,
      () => {
        f.value = !1, $(), N(i.situations);
      }
    );
    const y = (S) => {
      w.value = S, c.situations = c.allSituations[w.value];
    }, B = (S) => {
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
      _.value = S.length, c.allSituations = $e.exports.chunk(S, u);
      const x = S.map((I) => I.id);
      i.filteredSituations = x, w.value = 0, c.situations = c.allSituations[0], v.value = c.allSituations.length;
    }, D = (S) => {
      S.length ? N(S) : c.situations = [];
    };
    return (S, x) => {
      var I;
      return qn(), zr("div", H3, [
        Sn("div", z3, [
          Y3,
          Sn("div", G3, [
            Hr(Zs(le), {
              class: "view-situation-btn",
              onClick: x[0] || (x[0] = () => L())
            }, {
              default: R3(() => [
                Hr(Zs(Y), {
                  icon: Zs(r).View,
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                j3
              ]),
              _: 1
            }),
            Hr(ag),
            Hr(B3)
          ])
        ]),
        Sn("div", Z3, [
          Sn("div", K3, [
            Hr(_s, {
              list: Zs(i).situations,
              onFilteredList: D,
              isOpen: "",
              isSituation: "",
              saveFilters: ""
            }, null, 8, ["list"])
          ]),
          Sn("div", J3, [
            Sn("div", X3, [
              c.situations && c.situations.length ? (qn(), zr("div", Q3, " Result: " + Fa((I = c.situations) == null ? void 0 : I.length) + " of " + Fa(_.value), 1)) : cv("", !0)
            ]),
            f.value ? (qn(), dv(Zs(ns), {
              key: 0,
              class: "spinner"
            })) : (qn(), zr("div", eO, [
              c.situations && c.situations.length ? (qn(), zr("div", tO, [
                Sn("div", nO, [
                  (qn(!0), zr(U3, null, F3(c.situations, (O) => (qn(), zr("div", {
                    class: "card",
                    key: O.id
                  }, [
                    Hr(T_, {
                      onClick: () => B(O.id),
                      "situation-info": O
                    }, null, 8, ["onClick", "situation-info"])
                  ]))), 128))
                ]),
                _.value > u ? (qn(), zr("div", rO, [
                  Sn("div", null, "Page: " + Fa(w.value + 1) + " of " + Fa(v.value), 1),
                  Hr(Vx, {
                    onGoToPage: y,
                    currentPage: w.value,
                    totalPages: v.value
                  }, null, 8, ["currentPage", "totalPages"])
                ])) : cv("", !0)
              ])) : (qn(), dv(gs, { key: 1 }))
            ]))
          ])
        ])
      ]);
    };
  }
});
const lO = /* @__PURE__ */ he(aO, [["__scopeId", "data-v-2675e2f8"]]);
const Wa = window.Vue.ref, uO = window.Vue.inject, cO = window.Vue.computed, dO = window.Vue.onMounted, dg = {
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
}, fg = (e) => {
  const r = Wa(!1), o = Wa(), i = Wa(e.controls), a = Wa(e.id), u = () => {
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
        controls: i,
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
    "aria-controls": i.value,
    "aria-disabled": e.disabled,
    "data-ref-id": "feather-tab"
  }));
  return {
    selected: r,
    attrs: f,
    tab: o
  };
}, fv = window.Vue.ref, fO = window.Vue.toRef, hO = window.Vue.watch, hv = window.Vue.provide, hg = {
  prop: "modelValue",
  event: "update:modelValue"
}, pg = {
  "update:modelValue": (e) => !0
}, wg = {
  modelValue: {
    type: Number,
    default: 0
  },
  vertical: {
    type: Boolean,
    default: !0
  }
}, vg = (e, r) => {
  const o = fO(e, "modelValue"), i = fv(e.modelValue), a = fv([]);
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
    let O = I !== -1 ? I : i.value;
    const k = [ne.RIGHT], P = [ne.LEFT], R = [ne.ENTER, ne.SPACE];
    e.vertical && (k.push(ne.DOWN), P.push(ne.UP)), k.indexOf(D) > -1 ? (O++, O >= x.length && (O = 0), S(L), f(a.value.indexOf(x[O]))) : P.indexOf(D) > -1 && (O--, O < 0 && (O = x.length - 1), S(L), f(a.value.indexOf(x[O]))), R.indexOf(D) > -1 && w(O);
  }, f = (L) => {
    a.value.forEach(function(N, D) {
      L === D && N.tab && N.tab.focus();
    });
  }, w = (L) => {
    const N = a.value[L];
    !N || N.tab && N.tab.disabled || (a.value.forEach((D, S) => {
      D.tab && (D.tab.selected = L === S), D.panel && (D.panel.selected = L === S);
    }), i.value = L, r.emit("update:modelValue", L));
  };
  hv("registerTab", (L) => {
    const N = L.index;
    N > -1 && (a.value[N] = { ...a.value[N], tab: L }, a.value = [...a.value], $());
  }), hv("registerPanel", (L) => {
    const N = L.index;
    N > -1 && (a.value[N] = {
      ...a.value[N],
      panel: L
    }, a.value = [...a.value], $());
  });
  const $ = () => {
    a.value.forEach(({ tab: L, panel: N }, D) => {
      if (N && L) {
        const S = L.id || fe("tab"), x = L.controls || fe("panel");
        L.controls = x, L.id = S, N.tab = S, N.id = x;
      }
      D === i.value && (N && (N.selected = !0), L && (L.selected = !0));
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
}, qa = window.Vue.ref, pO = window.Vue.inject, wO = window.Vue.computed, vO = window.Vue.onMounted, mg = {
  id: {
    type: String
  },
  tab: {
    type: String
  }
}, _g = (e) => {
  const r = qa(!1), o = qa(), i = qa(e.tab), a = qa(e.id), u = pO("registerPanel");
  vO(() => {
    if (u) {
      const f = o.value, w = f && f.parentElement ? f.parentElement : void 0, v = f ? Array.from(w ? w.children : []).indexOf(f) : -1;
      u({
        selected: r,
        id: a,
        tab: i,
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
    "aria-labelledby": i.value,
    "data-ref-id": "feather-tab-panel"
  }));
  return {
    selected: r,
    attrs: c,
    panel: o
  };
}, jd = window.Vue.defineComponent, mO = window.Vue.resolveComponent, Zd = window.Vue.openBlock, Kd = window.Vue.createElementBlock, _i = window.Vue.createElementVNode, gg = window.Vue.mergeProps, $l = window.Vue.renderSlot, _O = window.Vue.createVNode, gO = window.Vue.normalizeStyle, $O = window.Vue.toHandlers, yO = window.Vue.withDirectives, VO = window.Vue.normalizeProps, bO = window.Vue.guardReactiveProps, CO = window.Vue.vShow;
var Jd = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const SO = dg, kO = jd({
  props: SO,
  setup(e) {
    return fg(e);
  },
  components: {
    FeatherRipple: Vr
  }
}), EO = { role: "presentation" }, IO = { class: "tab-text" };
function xO(e, r, o, i, a, u) {
  const c = mO("FeatherRipple");
  return Zd(), Kd("li", EO, [
    _i("button", gg(e.attrs, {
      class: ["tab hover focus", { disabled: e.disabled, selected: e.selected }]
    }), [
      _i("span", IO, [
        $l(e.$slots, "default", {}, void 0, !0)
      ]),
      _O(c)
    ], 16)
  ]);
}
var Nc = /* @__PURE__ */ Jd(kO, [["render", xO], ["__scopeId", "data-v-e6bb52b6"]]);
const AO = wg, TO = pg, BO = jd({
  model: hg,
  emits: TO,
  props: AO,
  setup(e, r) {
    return vg(e, r);
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
        const e = this.$el.getBoundingClientRect(), r = this.$el.querySelector("[aria-selected='true']").getBoundingClientRect(), o = r.left - e.left, i = r.height - 2;
        this.width = `${r.width}px`, this.transform = `translateX(${o}px) translateY(${i}px)`;
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
function DO(e, r, o, i, a, u) {
  return Zd(), Kd("div", LO, [
    _i("div", {
      ref: "slider",
      class: "feather-tab-slider",
      style: gO({
        transform: e.transform,
        "transition-duration": e.duration,
        width: e.width
      })
    }, null, 4),
    _i("ul", gg(e.attrs, $O(e.listeners)), [
      $l(e.$slots, "tabs", {}, void 0, !0)
    ], 16),
    _i("div", MO, [
      $l(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
var NO = /* @__PURE__ */ Jd(BO, [["render", DO], ["__scopeId", "data-v-27adffb9"]]);
const OO = mg, PO = jd({
  props: OO,
  setup(e) {
    return _g(e);
  }
});
function RO(e, r, o, i, a, u) {
  return yO((Zd(), Kd("div", VO(bO(e.attrs)), [
    $l(e.$slots, "default")
  ], 16)), [
    [CO, e.selected]
  ]);
}
var Oc = /* @__PURE__ */ Jd(PO, [["render", RO]]);
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
    return (o, i) => r != null && r.severity ? (qO(), HO("span", {
      key: 0,
      class: WO(["severity-status", [`${r.severity.toLowerCase()}-color`]])
    }, UO(r.severity), 3)) : zO("", !0);
  }
});
const $g = /* @__PURE__ */ he(YO, [["__scopeId", "data-v-83c2cdce"]]), GO = window.Vue.defineComponent, pv = window.Vue.toDisplayString, wv = window.Vue.createElementVNode, jO = window.Vue.openBlock, ZO = window.Vue.createElementBlock;
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
    return (o, i) => (jO(), ZO("div", KO, [
      wv("div", JO, pv(r.label), 1),
      wv("div", XO, pv(r.info), 1)
    ]));
  }
});
const Pc = /* @__PURE__ */ he(QO, [["__scopeId", "data-v-b4afa751"]]), e4 = window.Vue.defineComponent, t4 = window.Vue.unref, n4 = window.Vue.renderList, r4 = window.Vue.Fragment, Rc = window.Vue.openBlock, Fc = window.Vue.createElementBlock, o4 = window.Vue.toDisplayString, s4 = window.Vue.normalizeClass;
window.Vue.pushScopeId;
window.Vue.popScopeId;
const i4 = { class: "alarms-list" }, a4 = /* @__PURE__ */ e4({
  __name: "AlarmsCountBySeverity",
  props: {
    alarms: null,
    size: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (Rc(), Fc("div", i4, [
      (Rc(!0), Fc(r4, null, n4(t4($e.exports.groupBy)(r == null ? void 0 : r.alarms, "severity"), (a, u) => (Rc(), Fc("div", {
        class: s4(["alarm-count", [`${u.toString().toLowerCase()}-color`, r.size]]),
        key: u
      }, o4(a.length), 3))), 128))
    ]));
  }
});
const l4 = /* @__PURE__ */ he(a4, [["__scopeId", "data-v-52d63440"]]), u4 = window.Vue.openBlock, c4 = window.Vue.createElementBlock, d4 = window.Vue.createElementVNode;
var f4 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
  for (const [i, a] of r)
    o[i] = a;
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
var yl = /* @__PURE__ */ V4(b4, [["render", E4]]);
const I4 = window.Vue.defineComponent, hn = window.Vue.unref, Uc = window.Vue.createVNode, Xd = window.Vue.createElementVNode, Wc = window.Vue.withCtx, Ha = window.Vue.openBlock, qc = window.Vue.createBlock, Hc = window.Vue.createCommentVNode, x4 = window.Vue.normalizeClass, A4 = window.Vue.createElementBlock, T4 = window.Vue.pushScopeId, B4 = window.Vue.popScopeId, Qd = (e) => (T4("data-v-e073070b"), e = e(), B4(), e), L4 = /* @__PURE__ */ Qd(() => /* @__PURE__ */ Xd("span", null, "Acknowledge", -1)), M4 = /* @__PURE__ */ Qd(() => /* @__PURE__ */ Xd("span", null, "Escalate", -1)), D4 = /* @__PURE__ */ Qd(() => /* @__PURE__ */ Xd("span", null, "Clear", -1)), N4 = /* @__PURE__ */ I4({
  __name: "AlarmActionBtns",
  props: {
    alarm: null,
    direction: null,
    showClear: { type: Boolean },
    isSituation: { type: Boolean },
    situationId: null
  },
  setup(e) {
    const r = e, o = gn(), i = async (u) => {
      await Gk(r.alarm.id, u) && o.getSituation(r.situationId), r.isSituation && await x_(
        r.situationId,
        tt.ACCEPTED.toLowerCase()
      );
    }, a = async (u) => {
      await h_(r.alarm.id, u) && o.getSituation(r.situationId);
    };
    return (u, c) => (Ha(), A4("div", {
      class: x4(["action-btns-group", r.direction === "horizontal" ? "horizontal" : "vertical"])
    }, [
      e.alarm.ackTime ? Hc("", !0) : (Ha(), qc(hn(le), {
        key: 0,
        class: "acction-btn",
        onClick: c[0] || (c[0] = () => i(!0))
      }, {
        default: Wc(() => [
          Uc(hn(Y), {
            icon: hn(is),
            "aria-hidden": "true",
            class: "icon ack"
          }, null, 8, ["icon"]),
          L4
        ]),
        _: 1
      })),
      e.alarm.severity != "CRITICAL" ? (Ha(), qc(hn(le), {
        key: 1,
        class: "acction-btn",
        onClick: c[1] || (c[1] = () => a(hn(tt).ESCALATE))
      }, {
        default: Wc(() => [
          Uc(hn(Y), {
            icon: hn(_4),
            "aria-hidden": "true",
            class: "icon escalate"
          }, null, 8, ["icon"]),
          M4
        ]),
        _: 1
      })) : Hc("", !0),
      r.showClear && e.alarm.severity != "NORMAL" && e.alarm.severity != "CLEARED" ? (Ha(), qc(hn(le), {
        key: 2,
        class: "acction-btn",
        onClick: c[2] || (c[2] = () => a(hn(tt).CLEAR))
      }, {
        default: Wc(() => [
          Uc(hn(Y), {
            icon: hn(yl),
            "aria-hidden": "true",
            class: "icon clear"
          }, null, 8, ["icon"]),
          D4
        ]),
        _: 1
      })) : Hc("", !0)
    ], 2));
  }
});
const yg = /* @__PURE__ */ he(N4, [["__scopeId", "data-v-e073070b"]]);
var O4 = Object.defineProperty, P4 = Object.defineProperties, R4 = Object.getOwnPropertyDescriptors, vv = Object.getOwnPropertySymbols, F4 = Object.prototype.hasOwnProperty, U4 = Object.prototype.propertyIsEnumerable, mv = (e, r, o) => r in e ? O4(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Ed = (e, r) => {
  for (var o in r || (r = {}))
    F4.call(r, o) && mv(e, o, r[o]);
  if (vv)
    for (var o of vv(r))
      U4.call(r, o) && mv(e, o, r[o]);
  return e;
}, Vg = (e, r) => P4(e, R4(r));
const bg = window.Vue.defineComponent, W4 = window.Vue.inject, q4 = window.Vue.resolveComponent, zc = window.Vue.openBlock, _v = window.Vue.createElementBlock, Jo = window.Vue.createElementVNode, H4 = window.Vue.createBlock, gv = window.Vue.createCommentVNode, z4 = window.Vue.renderSlot, Y4 = window.Vue.pushScopeId, G4 = window.Vue.popScopeId, Yc = window.Vue.toRef, za = window.Vue.computed, j4 = window.Vue.ref;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.createVNode;
var Z4 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, X4 = bg({
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
      return this.label && this.label.length ? void 0 : fe("checkbox");
    },
    labelId() {
      return this.label && this.label.length ? void 0 : fe("checkbox-label");
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
    FeatherRipple: Vr
  }
}), Q4 = (e) => (Y4("data-v-a7af27e2"), e = e(), G4(), e), eP = { class: "layout-container" }, tP = ["aria-checked", "aria-disabled", "aria-labelledby", "aria-label", "id", "tabindex"], nP = { class: "checkbox hover focus" }, rP = /* @__PURE__ */ Q4(() => /* @__PURE__ */ Jo("div", { class: "box" }, [
  /* @__PURE__ */ Jo("svg", {
    class: "checkmark",
    role: "presentation",
    focusable: "false",
    viewBox: "0 0 24 24"
  }, [
    /* @__PURE__ */ Jo("path", {
      class: "path",
      fill: "none",
      d: "M1.73,12.91 8.1,19.28 22.79,4.59"
    })
  ]),
  /* @__PURE__ */ Jo("div", { class: "indeterminate" })
], -1)), oP = ["id", "for"];
function sP(e, r, o, i, a, u) {
  const c = q4("feather-ripple");
  return zc(), _v("div", eP, [
    Jo("div", {
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
      Jo("div", nP, [
        rP,
        e.disabled ? gv("", !0) : (zc(), H4(c, {
          key: 0,
          center: ""
        }))
      ]),
      e.label ? gv("", !0) : (zc(), _v("label", {
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
var oo = /* @__PURE__ */ Z4(X4, [["render", sP], ["__scopeId", "data-v-a7af27e2"]]);
const iP = Vg(Ed({}, ws), {
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
bg({
  props: iP,
  provide() {
    return {
      registerCheckbox: this.registerCheckbox
    };
  },
  setup(e, r) {
    vs(e);
    const o = Yc(e, "error"), i = za(() => fe("feather-checkbox-group")), a = za(() => fe("feather-input-description")), u = za(() => fe("feather-input-label")), c = za(() => {
      const _ = JSON.parse(JSON.stringify(r.attrs));
      return _["aria-invalid"] || (_["aria-invalid"] = !!o.value), Vg(Ed({}, _), {
        class: "",
        "aria-describedby": a.value
      });
    }), f = j4(i.value), { validate: w } = hs(f, Yc(e, "modelValue"), e.label, e.schema, Yc(e, "error"));
    return Ed({
      groupId: i,
      inputId: f,
      descriptionId: a,
      labelId: u,
      attrs: c,
      validate: w,
      registerCheckbox: (_) => {
        _ && f.value === i.value && (f.value = _);
      }
    }, ps(r.attrs));
  },
  components: {
    InputSubText: fs
  }
});
const aP = window.Vue.openBlock, lP = window.Vue.createElementBlock, Cg = window.Vue.createElementVNode;
var uP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const cP = {}, dP = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fP = /* @__PURE__ */ Cg("path", { d: "M20.71,5.63,18.37,3.29A1,1,0,0,0,17.66,3a1,1,0,0,0-.7.29l-1,1L19.75,8l1-1A1,1,0,0,0,20.71,5.63Z" }, null, -1), hP = /* @__PURE__ */ Cg("path", { d: "M3.59,16.66A2,2,0,0,0,3,18.08V21H5.92a2,2,0,0,0,1.42-.59L18.88,8.88,15.12,5.12ZM5.92,19H5v-.92L14.06,9,15.12,8l.92.92Z" }, null, -1), pP = [
  fP,
  hP
];
function wP(e, r) {
  return aP(), lP("svg", dP, pP);
}
var vP = /* @__PURE__ */ uP(cP, [["render", wP]]);
var mP = Object.defineProperty, _P = Object.defineProperties, gP = Object.getOwnPropertyDescriptors, $v = Object.getOwnPropertySymbols, $P = Object.prototype.hasOwnProperty, yP = Object.prototype.propertyIsEnumerable, yv = (e, r, o) => r in e ? mP(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Xo = (e, r) => {
  for (var o in r || (r = {}))
    $P.call(r, o) && yv(e, o, r[o]);
  if ($v)
    for (var o of $v(r))
      yP.call(r, o) && yv(e, o, r[o]);
  return e;
}, Sg = (e, r) => _P(e, gP(r));
const VP = window.Vue.defineComponent, Gc = window.Vue.toRef, bP = window.Vue.computed, Vv = window.Vue.resolveComponent, bv = window.Vue.openBlock, Cv = window.Vue.createElementBlock, Sv = window.Vue.mergeProps, kv = window.Vue.createVNode, CP = window.Vue.normalizeClass, Ev = window.Vue.withCtx, SP = window.Vue.createElementVNode, kP = window.Vue.toDisplayString, EP = window.Vue.createCommentVNode;
var IP = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const xP = Sg(Xo(Xo({}, Ml), ws), {
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
}, TP = VP({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: AP,
  props: xP,
  setup(e, r) {
    vs(e), Dl(e);
    const o = Gc(e, "id"), i = bP(() => o.value ? o.value : fe("feather-textarea-label")), { validate: a } = hs(i, Gc(e, "modelValue"), e.label, e.schema, Gc(e, "error"));
    return Xo({
      inputId: i,
      incomingId: o,
      validate: a
    }, ps(r.attrs));
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
      return fe("feather-textarea-description");
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
      const e = Xo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), Sg(Xo(Xo({}, e), this.listeners), {
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
    InputSubText: fs,
    InputWrapper: Ll
  }
}), BP = ["maxlength"], LP = {
  key: 0,
  class: "feather-textarea-count",
  "data-ref-id": "feather-form-element-count"
};
function MP(e, r, o, i, a, u) {
  const c = Vv("InputWrapper"), f = Vv("InputSubText");
  return bv(), Cv("div", Sv(e.inherittedAttrs, { class: "feather-textarea-container" }), [
    kv(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: CP(["feather-textarea-content", e.contentCls])
    }, {
      default: Ev(() => [
        SP("textarea", Sv(e.attrs, {
          class: ["feather-textarea", { error: e.error }],
          "data-ref-id": "feather-textarea-input",
          maxlength: e.maxlength > 0 ? e.maxlength : void 0,
          ref: "input"
        }), null, 16, BP)
      ]),
      _: 1
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    kv(f, { id: e.descriptionId }, {
      right: Ev(() => [
        e.maxlength ? (bv(), Cv("div", LP, kP(e.charCount), 1)) : EP("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var Vl = /* @__PURE__ */ IP(TP, [["render", MP], ["__scopeId", "data-v-0648df5c"]]);
const DP = window.Pinia.defineStore, Hl = DP("appStore", {
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
}), NP = window.Vue.defineComponent, Iv = window.Vue.toDisplayString, Ks = window.Vue.createElementVNode, Yr = window.Vue.unref, Uo = window.Vue.openBlock, xv = window.Vue.createBlock, Js = window.Vue.createCommentVNode, Av = window.Vue.createVNode, Ya = window.Vue.createElementBlock, OP = window.Vue.normalizeClass;
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
}, zP = window.Vue.watch, Tv = window.Vue.ref, YP = /* @__PURE__ */ NP({
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
    const r = e, o = Hl(), i = Tv(!1), a = Tv((w = r.memo) == null ? void 0 : w.body);
    zP(r, () => {
      var v;
      a.value = (v = r.memo) == null ? void 0 : v.body, i.value = !1;
    });
    const u = () => {
      i.value = !i.value;
    }, c = async () => {
      i.value = !1, await eE(r.id, r.type) ? a.value = "" : o.showErrorMsg("Error on removing memo :(");
    }, f = async () => {
      i.value = !1, a.value && a.value !== "" && (await Qk(r.id, r.type, a.value) || o.showErrorMsg("Error on saving memo :("));
    };
    return (v, _) => (Uo(), Ya("div", {
      class: OP([r.boxType === "small" ? "box-small" : "box"])
    }, [
      Ks("div", PP, [
        Ks("div", RP, Iv(e.label), 1),
        Ks("div", FP, [
          Ks("div", UP, [
            i.value ? Js("", !0) : (Uo(), xv(Yr(Y), {
              key: 0,
              icon: Yr(vP),
              "aria-hidden": "true",
              class: "icon edit",
              onClick: u
            }, null, 8, ["icon"]))
          ]),
          i.value ? (Uo(), Ya("div", WP, [
            Av(Yr(Y), {
              icon: Yr(is),
              "aria-hidden": "true",
              class: "icon save",
              onClick: f
            }, null, 8, ["icon"])
          ])) : Js("", !0),
          a.value && a.value != "" || i.value ? (Uo(), Ya("div", qP, [
            Av(Yr(Y), {
              icon: Yr(cs),
              "aria-hidden": "true",
              class: "icon cancel",
              onClick: c
            }, null, 8, ["icon"])
          ])) : Js("", !0)
        ])
      ]),
      Ks("div", null, [
        !i.value && a.value != null ? (Uo(), Ya("div", HP, Iv(a.value), 1)) : Js("", !0),
        i.value ? (Uo(), xv(Yr(Vl), {
          key: 1,
          class: "textarea",
          modelValue: a.value,
          "onUpdate:modelValue": _[0] || (_[0] = ($) => a.value = $),
          rows: "2",
          label: "",
          hideLabel: ""
        }, null, 8, ["modelValue"])) : Js("", !0)
      ])
    ], 2));
  }
});
const bl = /* @__PURE__ */ he(YP, [["__scopeId", "data-v-3f44e250"]]), GP = window.Vue.defineComponent, Gr = window.Vue.unref, Wo = window.Vue.createVNode, Xs = window.Vue.toDisplayString, mn = window.Vue.createElementVNode, Bv = window.Vue.openBlock, Lv = window.Vue.createElementBlock, Mv = window.Vue.createCommentVNode, jc = window.Vue.createTextVNode, jP = window.Vue.pushScopeId, ZP = window.Vue.popScopeId, ef = (e) => (jP("data-v-02d1e7f0"), e = e(), ZP(), e), KP = {
  key: 0,
  class: "card"
}, JP = { class: "row" }, XP = {
  key: 0,
  class: "ack"
}, QP = /* @__PURE__ */ ef(() => /* @__PURE__ */ mn("strong", null, " Duration: ", -1)), eR = ["innerHTML"], tR = /* @__PURE__ */ ef(() => /* @__PURE__ */ mn("strong", null, "First Event", -1)), nR = /* @__PURE__ */ ef(() => /* @__PURE__ */ mn("strong", null, "Last Event", -1)), rR = { class: "section memo-boxes" }, Dv = window.Vue.ref, oR = window.Vue.watch, sR = /* @__PURE__ */ GP({
  __name: "AlarmDetail",
  props: {
    alarm: null,
    selectAll: { type: Boolean },
    situationId: null
  },
  emits: ["alarm-selected"],
  setup(e, { emit: r }) {
    const o = e, i = Dv(!1), a = Dv(o.alarm), u = new Date().getTime();
    oR(o, () => {
      a.value = o.alarm, i.value = o.selectAll, o.selectAll && r("alarm-selected", o.alarm.id);
    });
    const c = () => {
      r("alarm-selected", o.alarm.id);
    }, f = async (w) => {
      const v = await p_(w);
      v && (a.value = v);
    };
    return (w, v) => {
      var _, $, y, B, L;
      return a.value ? (Bv(), Lv("div", KP, [
        mn("div", null, [
          mn("div", JP, [
            Wo(Gr(oo), {
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
            }, Xs(a.value.nodeLabel) + " - " + Xs(a.value.id), 1),
            Wo($g, {
              severity: (_ = a.value) == null ? void 0 : _.severity
            }, null, 8, ["severity"]),
            a.value.ackTime ? (Bv(), Lv("div", XP, [
              Wo(Gr(Y), {
                icon: Gr(is),
                "aria-hidden": "true",
                class: "icon-ack"
              }, null, 8, ["icon"])
            ])) : Mv("", !0)
          ]),
          mn("div", null, [
            QP,
            jc(" " + Xs(Gr(Al)(Gr(u), new Date(a.value.firstEventTime))), 1)
          ]),
          mn("div", {
            class: "description",
            innerHTML: a.value.description
          }, null, 8, eR),
          mn("div", null, [
            tR,
            jc(" - " + Xs(Gr(xn)(a.value.firstEventTime)), 1)
          ]),
          mn("div", null, [
            nR,
            jc(" - " + Xs(Gr(xn)(a.value.lastEventTime)), 1)
          ]),
          mn("div", rR, [
            Wo(bl, {
              id: ($ = a.value) == null ? void 0 : $.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Sticky Memo",
              type: "memo",
              memo: (y = a.value) == null ? void 0 : y.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            Wo(bl, {
              id: (B = a.value) == null ? void 0 : B.id,
              boxType: "small",
              situationId: o.situationId,
              label: "Journal Memo",
              type: "journal",
              memo: (L = a.value) == null ? void 0 : L.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        Wo(yg, {
          alarm: a.value,
          direction: "vertical",
          "situation-id": o.situationId,
          onActionClicked: f
        }, null, 8, ["alarm", "situation-id"])
      ])) : Mv("", !0);
    };
  }
});
const iR = /* @__PURE__ */ he(sR, [["__scopeId", "data-v-02d1e7f0"]]), aR = window.Vue.openBlock, lR = window.Vue.createElementBlock, kg = window.Vue.createElementVNode;
var uR = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const cR = {}, dR = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, fR = /* @__PURE__ */ kg("path", { d: "M19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V5A2,2,0,0,0,19,3Z" }, null, -1), hR = /* @__PURE__ */ kg("path", { d: "M3,12a1,1,0,0,0,1,1h9.17l-2.34,2.34a1,1,0,0,0,1.41,1.42L17,12,12.24,7.24a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L13.17,11H4A1,1,0,0,0,3,12Z" }, null, -1), pR = [
  fR,
  hR
];
function wR(e, r) {
  return aR(), lR("svg", dR, pR);
}
var Id = /* @__PURE__ */ uR(cR, [["render", wR]]);
const vR = window.Vue.watch, mR = window.Vue.ref, _R = window.Vue.onBeforeUnmount, Eg = (e) => {
  const r = mR(!1), o = (i) => {
    i.keyCode === ne.ESCAPE && (i.preventDefault(), r.value = !r.value);
  };
  return vR(e, (i) => {
    i ? document.addEventListener("keydown", o) : typeof document < "u" && document.removeEventListener("keydown", o);
  }, { immediate: !0 }), _R(() => {
    document.removeEventListener("keydown", o);
  }), r;
}, gR = window.Vue.watch, Ig = (e) => {
  let r;
  gR(e, (o) => {
    o ? r = document.activeElement : setTimeout(() => {
      r && r.focus && r.focus(), r = void 0;
    }, 0);
  });
}, xg = window.Vue.watch, Ag = window.Vue.onBeforeUnmount, Tg = window.Vue.nextTick, $R = window.Vue.onMounted, Bg = (e) => {
  if (e === !1)
    return "hidden";
  const r = e.style.overflow;
  return e.style.overflow = "hidden", r;
}, Cl = (e, r) => {
  e !== void 0 && r !== !1 && (r.style.overflow = e);
}, Lg = (e) => {
  let r;
  const o = typeof document < "u" ? document.body : !1;
  Ag(() => Cl(r, o)), $R(() => xg(e, (i) => {
    i ? Tg(() => {
      r = Bg(o);
    }) : Cl(r, o);
  }, { immediate: !0 }));
}, yR = (e, r) => {
  let o;
  Ag(() => Cl(o, r.value ? r.value.offsetParent : !1)), xg([e, r], ([i, a]) => {
    i && a ? Tg(() => {
      o = Bg(a.offsetParent);
    }) : a && Cl(o, a.offsetParent);
  }, {
    immediate: !0
  });
};
var VR = Object.defineProperty, Nv = Object.getOwnPropertySymbols, bR = Object.prototype.hasOwnProperty, CR = Object.prototype.propertyIsEnumerable, Ov = (e, r, o) => r in e ? VR(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, SR = (e, r) => {
  for (var o in r || (r = {}))
    bR.call(r, o) && Ov(e, o, r[o]);
  if (Nv)
    for (var o of Nv(r))
      CR.call(r, o) && Ov(e, o, r[o]);
  return e;
};
const tf = window.Vue.defineComponent, gi = window.Vue.ref, kR = window.Vue.nextTick, Mg = window.Vue.openBlock, Dg = window.Vue.createElementBlock, nf = window.Vue.createElementVNode, ER = window.Vue.renderSlot, IR = window.Vue.resolveComponent, xR = window.Vue.normalizeClass, AR = window.Vue.withModifiers, TR = window.Vue.createVNode, Pv = window.Vue.toRef, Rv = window.Vue.computed, Fv = window.Vue.watch;
window.Vue.createBlock;
window.Vue.Teleport;
window.Vue.withDirectives;
window.Vue.Transition;
window.Vue.withCtx;
window.Vue.vShow;
window.Vue.toDisplayString;
window.Vue.createCommentVNode;
var Ng = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const BR = {
  enable: {
    type: Boolean,
    required: !0
  }
}, LR = tf({
  props: BR,
  data() {
    return {
      rendered: !1
    };
  },
  setup() {
    const e = gi(), r = gi(!1), o = (_, $) => {
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
          const B = _;
          return B.type !== "hidden" && B.type !== "file";
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
    }, w = gi();
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
      ignoreUtilFocusChanges: r,
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
}), MR = /* @__PURE__ */ nf("div", { tabindex: "0" }, null, -1), DR = {
  class: "focus-trap-content",
  ref: "content"
}, NR = /* @__PURE__ */ nf("div", { tabindex: "0" }, null, -1);
function OR(e, r, o, i, a, u) {
  return Mg(), Dg("div", null, [
    MR,
    nf("div", DR, [
      ER(e.$slots, "default")
    ], 512),
    NR
  ]);
}
var Og = /* @__PURE__ */ Ng(LR, [["render", OR]]);
const PR = tf({
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
    icon: () => cs
  },
  components: {
    FeatherIcon: Y
  }
}), RR = ["aria-label"];
function FR(e, r, o, i, a, u) {
  const c = IR("FeatherIcon");
  return Mg(), Dg("a", {
    href: "#",
    class: xR(["closeButton", { small: e.small }]),
    "data-ref-id": "dialog-close",
    "aria-label": e.closeText,
    onClick: r[0] || (r[0] = AR((f) => e.$emit("close"), ["prevent"]))
  }, [
    TR(c, {
      "aria-hidden": "true",
      focusable: "false",
      class: "fill",
      icon: e.icon
    }, null, 8, ["icon"])
  ], 10, RR);
}
var Pg = /* @__PURE__ */ Ng(PR, [["render", FR], ["__scopeId", "data-v-fc0f3f00"]]);
const Rg = {
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
    default: () => Rg,
    validator: (e) => !!e.title
  }
}, WR = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
};
tf({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: WR,
  props: UR,
  setup(e, r) {
    const o = Bl(Pv(e, "labels"), Rg), i = Pv(e, "modelValue"), a = gi(), u = () => {
      r.emit("update:modelValue", !1);
    }, c = Rv(() => !!r.slots.footer), f = Rv(() => fe("dialog-header"));
    e.relative ? yR(i, a) : Lg(i), Ig(i), Fv(Eg(i), () => {
      u();
    });
    const w = gi(e.modelValue);
    return Fv(w, (v) => {
      v ? r.emit("shown") : r.emit("hidden");
    }), SR({ close: u, hasFooter: c, headerId: f, element: a, shown: w }, o);
  },
  components: {
    FocusTrap: Og,
    DialogClose: Pg
  }
});
var qR = Object.defineProperty, Uv = Object.getOwnPropertySymbols, HR = Object.prototype.hasOwnProperty, zR = Object.prototype.propertyIsEnumerable, Wv = (e, r, o) => r in e ? qR(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, zl = (e, r) => {
  for (var o in r || (r = {}))
    HR.call(r, o) && Wv(e, o, r[o]);
  if (Uv)
    for (var o of Uv(r))
      zR.call(r, o) && Wv(e, o, r[o]);
  return e;
};
const Yl = window.Vue.defineComponent, qv = window.Vue.toRef, Hv = window.Vue.watch, zv = window.Vue.ref, Yv = window.Vue.resolveComponent, Ga = window.Vue.openBlock, Gv = window.Vue.createBlock, YR = window.Vue.Teleport, jv = window.Vue.createElementBlock, Zc = window.Vue.createVNode, Zv = window.Vue.Transition, Kc = window.Vue.withCtx, Kv = window.Vue.createCommentVNode, GR = window.Vue.withDirectives, jR = window.Vue.normalizeStyle, ZR = window.Vue.normalizeClass, Jv = window.Vue.createElementVNode, KR = window.Vue.renderSlot, JR = window.Vue.vShow;
window.Vue.mergeProps;
window.Vue.toDisplayString;
window.Vue.toHandlers;
window.Vue.resolveDirective;
window.Vue.createTextVNode;
window.Vue.pushScopeId;
window.Vue.popScopeId;
var XR = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const Fg = {
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
    default: () => Fg,
    validator: (e) => !!e.title
  }
}, e8 = {
  "update:modelValue": (e) => !0,
  shown: () => !0,
  hidden: () => !0
}, t8 = Yl({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: e8,
  props: QR,
  setup(e, r) {
    const o = Bl(qv(e, "labels"), Fg), i = qv(e, "modelValue"), a = () => {
      r.emit("update:modelValue", !1);
    };
    Lg(i), Ig(i), Hv(Eg(i), () => {
      a();
    });
    const u = zv(), c = zv(!1);
    return Hv(c, (f) => {
      f ? r.emit("shown") : r.emit("hidden");
    }), zl({ close: a, shown: c, isShown: i, element: u }, o);
  },
  components: {
    DialogClose: Pg,
    FocusTrap: Og
  }
}), n8 = {
  key: 0,
  class: "drawer-container feather-styles"
}, r8 = {
  key: 0,
  class: "greyedOut"
}, o8 = ["aria-label"], s8 = { class: "slot" };
function i8(e, r, o, i, a, u) {
  const c = Yv("dialog-close"), f = Yv("focus-trap");
  return Ga(), Gv(YR, { to: "body" }, [
    e.modelValue ? (Ga(), jv("div", n8, [
      Zc(Zv, { name: "greyOutShim" }, {
        default: Kc(() => [
          e.modelValue ? (Ga(), jv("div", r8)) : Kv("", !0)
        ]),
        _: 1
      }),
      Zc(Zv, {
        name: e.left ? "drawer-left" : "drawer",
        onAfterEnter: r[0] || (r[0] = (w) => e.shown = !0),
        onAfterLeave: r[1] || (r[1] = (w) => e.shown = !1)
      }, {
        default: Kc(() => [
          GR((Ga(), Gv(f, {
            enable: e.modelValue,
            style: jR({ width: e.width }),
            key: "sect",
            class: ZR(["content", { left: e.left }]),
            ref: "element"
          }, {
            default: Kc(() => [
              Jv("div", {
                "aria-label": e.titleLabel,
                ref: "drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-ref-id": "feather-drawer",
                tabindex: "-1",
                "first-focus": ""
              }, [
                Jv("div", s8, [
                  KR(e.$slots, "default", {}, void 0, !0)
                ]),
                Zc(c, {
                  "close-text": e.closeLabel,
                  onClose: e.close
                }, null, 8, ["close-text", "onClose"])
              ], 8, o8)
            ]),
            _: 3
          }, 8, ["enable", "style", "class"])), [
            [JR, e.modelValue]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ])) : Kv("", !0)
  ]);
}
var Ug = /* @__PURE__ */ XR(t8, [["render", i8], ["__scopeId", "data-v-0a36e1dc"]]);
const a8 = zl({
  label: {
    type: String,
    required: !0
  }
}, dg);
Yl({
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
      !this.showLabelTimeout && !this.selected && !this.showLabel && (this.showLabelTimeout = so(() => {
        this.showLabel = !0;
      }, 1e3));
    },
    mouseLeave() {
      io(this.showLabelTimeout), this.showLabelTimeout = 0, this.showLabel = !1;
    }
  },
  setup(e) {
    return fg(e);
  },
  components: {
    FeatherRipple: Vr
  }
});
const l8 = zl({}, wg), u8 = pg;
Yl({
  emits: u8,
  model: hg,
  props: l8,
  setup(e, r) {
    return vg(e, r);
  }
});
const c8 = zl({
  header: {
    type: String
  }
}, mg);
Yl({
  name: "DrawerTabContent",
  props: c8,
  setup(e) {
    return _g(e);
  },
  directives: {
    MenuFocusLoop: $B
  }
});
const d8 = window.Vue.defineComponent, Wg = window.Vue.createElementVNode, Xv = window.Vue.createVNode, f8 = window.Vue.renderList, h8 = window.Vue.Fragment, Qs = window.Vue.openBlock, Jc = window.Vue.createElementBlock, Qv = window.Vue.createBlock, p8 = window.Vue.unref, w8 = window.Vue.withCtx, v8 = window.Vue.pushScopeId, m8 = window.Vue.popScopeId, _8 = (e) => (v8("data-v-c7c65659"), e = e(), m8(), e), g8 = { class: "content" }, $8 = /* @__PURE__ */ _8(() => /* @__PURE__ */ Wg("h4", { class: "title" }, "CHOOSE THE SITUATION:", -1)), y8 = {
  key: 0,
  class: "situation-list"
}, Xc = window.Vue.ref, em = window.Vue.watch, V8 = /* @__PURE__ */ d8({
  __name: "DrawerSituations",
  props: {
    situationId: null,
    visible: { type: Boolean }
  },
  emits: ["situation-selected", "drawer-closed"],
  setup(e, { emit: r }) {
    const o = e, i = gn(), a = Xc(o.visible), u = () => {
      let v = i.situations;
      o.situationId !== 0 && (v = i.situations.filter(
        (_) => _.id != o.situationId
      )), c.value = v, f.value = v;
    }, c = Xc(i.situations), f = Xc(i.situations);
    em(o, () => {
      a.value = o.visible, u();
    }), em(
      () => i.situations,
      () => {
        u();
      }
    );
    const w = (v) => {
      f.value = v;
    };
    return (v, _) => (Qs(), Qv(p8(Ug), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        _[0] || (_[0] = ($) => a.value = $),
        _[1] || (_[1] = ($) => r("drawer-closed"))
      ],
      labels: { close: "close", title: "Situations" }
    }, {
      default: w8(() => [
        Wg("div", g8, [
          $8,
          Xv(_s, {
            list: c.value,
            isSituation: "",
            onFilteredList: w
          }, null, 8, ["list"]),
          f.value.length ? (Qs(), Jc("div", y8, [
            (Qs(!0), Jc(h8, null, f8(f.value, ($) => (Qs(), Jc("div", {
              class: "card",
              key: $.id
            }, [
              Xv(T_, {
                onClick: (y) => r("situation-selected", $.id),
                "situation-info": $,
                small: ""
              }, null, 8, ["onClick", "situation-info"])
            ]))), 128))
          ])) : (Qs(), Qv(gs, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const qg = /* @__PURE__ */ he(V8, [["__scopeId", "data-v-c7c65659"]]), b8 = window.Vue.defineComponent, tm = window.Vue.normalizeClass, Zo = window.Vue.createElementVNode, ja = window.Vue.unref, C8 = window.Vue.createVNode, Za = window.Vue.toDisplayString, S8 = window.Vue.createTextVNode, k8 = window.Vue.openBlock, E8 = window.Vue.createElementBlock, I8 = window.Vue.pushScopeId, x8 = window.Vue.popScopeId, A8 = (e) => (I8("data-v-e1e9b696"), e = e(), x8(), e), T8 = { class: "alarmInfo" }, B8 = { class: "alarm-title" }, L8 = /* @__PURE__ */ A8(() => /* @__PURE__ */ Zo("strong", null, " Duration: ", -1)), M8 = { class: "description" }, D8 = /* @__PURE__ */ b8({
  __name: "UnassignedAlarmCard",
  props: {
    alarm: null,
    selected: { type: Boolean }
  },
  emits: ["selected-alarm"],
  setup(e, { emit: r }) {
    const o = e, i = new Date().getTime();
    return (a, u) => (k8(), E8("div", {
      class: tm(["alarm", { selected: o.selected }])
    }, [
      Zo("div", T8, [
        Zo("div", {
          class: tm(["triangle", [`${e.alarm.severity.toLowerCase()}`]])
        }, null, 2),
        C8(ja(oo), {
          modelValue: o.selected,
          label: "selected",
          "onUpdate:modelValue": u[0] || (u[0] = (c) => r("selected-alarm", e.alarm.id))
        }, null, 8, ["modelValue"]),
        Zo("div", B8, Za(e.alarm.nodeLabel) + " - " + Za(e.alarm.id), 1)
      ]),
      Zo("div", null, [
        L8,
        S8(" " + Za(ja(Al)(ja(i), new Date(e.alarm.firstEventTime))), 1)
      ]),
      Zo("div", M8, Za(ja(b_)(e.alarm.description, 120)), 1)
    ], 2));
  }
});
const rf = /* @__PURE__ */ he(D8, [["__scopeId", "data-v-e1e9b696"]]), N8 = window.Vue.defineComponent, ll = window.Vue.createElementVNode, qo = window.Vue.unref, O8 = window.Vue.toDisplayString, nm = window.Vue.withCtx, Qc = window.Vue.createVNode, P8 = window.Vue.renderList, R8 = window.Vue.Fragment, ei = window.Vue.openBlock, ed = window.Vue.createElementBlock, rm = window.Vue.createBlock, F8 = window.Vue.pushScopeId, U8 = window.Vue.popScopeId, W8 = (e) => (F8("data-v-4bc80d4b"), e = e(), U8(), e), q8 = { class: "content" }, H8 = { class: "header" }, z8 = /* @__PURE__ */ W8(() => /* @__PURE__ */ ll("h4", null, "ADD ALARMS", -1)), Y8 = {
  key: 0,
  class: "alarms-list"
}, Ka = window.Vue.ref, om = window.Vue.watch, G8 = /* @__PURE__ */ N8({
  __name: "DrawerAlarms",
  props: {
    visible: { type: Boolean }
  },
  emits: ["alarms-selected", "drawer-alarms-closed"],
  setup(e, { emit: r }) {
    const o = e, i = gn(), a = Ka(o.visible), u = Ka([]), c = Ka(["all"]), f = Ka(i.unassignedAlarms);
    om(o, () => {
      a.value = o.visible, u.value = [], f.value = i.unassignedAlarms;
    }), om(
      () => i.unassignedAlarms,
      () => {
        _();
      }
    );
    const w = (y) => {
      $e.exports.includes(u.value, y) ? $e.exports.remove(u.value, (B) => B === y) : u.value.push(y);
    }, v = () => {
      r("alarms-selected", u.value);
    }, _ = () => {
      let y = i.unassignedAlarms;
      c.value.includes("all") || (y = y.filter(
        (B) => c.value.includes(B.severity)
      )), f.value = y;
    }, $ = (y) => {
      f.value = y;
    };
    return (y, B) => (ei(), rm(qo(Ug), {
      modelValue: a.value,
      "onUpdate:modelValue": [
        B[0] || (B[0] = (L) => a.value = L),
        B[1] || (B[1] = (L) => r("drawer-alarms-closed"))
      ],
      labels: { title: "Alarms" }
    }, {
      default: nm(() => [
        ll("div", q8, [
          ll("div", H8, [
            z8,
            Qc(qo(le), {
              class: "add-alarms-btn",
              onClick: v
            }, {
              default: nm(() => [
                ll("span", null, "Add " + O8(qo(u).length) + " Alarms", 1)
              ]),
              _: 1
            })
          ]),
          Qc(_s, {
            list: qo(i).unassignedAlarms,
            onFilteredList: $
          }, null, 8, ["list"]),
          f.value.length ? (ei(), ed("div", Y8, [
            (ei(!0), ed(R8, null, P8(f.value, (L) => (ei(), ed("div", {
              class: "card",
              key: L.id
            }, [
              Qc(rf, {
                selected: qo($e.exports.includes)(qo(u), L.id),
                alarm: L,
                onSelectedAlarm: w
              }, null, 8, ["selected", "alarm"])
            ]))), 128))
          ])) : (ei(), rm(gs, { key: 1 }))
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const j8 = /* @__PURE__ */ he(G8, [["__scopeId", "data-v-4bc80d4b"]]), Z8 = window.Vue.openBlock, K8 = window.Vue.createElementBlock, Hg = window.Vue.createElementVNode;
var J8 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const X8 = {}, Q8 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, e5 = /* @__PURE__ */ Hg("path", { d: "M6,19a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V7H6ZM8,9h8V19H8Z" }, null, -1), t5 = /* @__PURE__ */ Hg("path", { d: "M17.5,4H16L15,3H9L8,4H6.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h11a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,17.5,4Z" }, null, -1), n5 = [
  e5,
  t5
];
function r5(e, r) {
  return Z8(), K8("svg", Q8, n5);
}
var sm = /* @__PURE__ */ J8(X8, [["render", r5]]);
const o5 = window.Vue.defineComponent, Wt = window.Vue.createElementVNode, it = window.Vue.unref, ht = window.Vue.createVNode, ti = window.Vue.withCtx, s5 = window.Vue.renderList, im = window.Vue.Fragment, ni = window.Vue.openBlock, Ja = window.Vue.createElementBlock, i5 = window.Vue.createBlock, a5 = window.Vue.pushScopeId, l5 = window.Vue.popScopeId, $s = (e) => (a5("data-v-524b0835"), e = e(), l5(), e), u5 = { class: "container" }, c5 = { class: "header" }, d5 = /* @__PURE__ */ $s(() => /* @__PURE__ */ Wt("div", { class: "title" }, "Alarms", -1)), f5 = /* @__PURE__ */ $s(() => /* @__PURE__ */ Wt("span", null, "Add Alarms", -1)), h5 = { class: "alarms-container" }, p5 = { class: "filters" }, w5 = { class: "list" }, v5 = { class: "row actions" }, m5 = /* @__PURE__ */ $s(() => /* @__PURE__ */ Wt("span", null, "Clear", -1)), _5 = /* @__PURE__ */ $s(() => /* @__PURE__ */ Wt("span", null, "Acknowledge", -1)), g5 = /* @__PURE__ */ $s(() => /* @__PURE__ */ Wt("span", null, "Move", -1)), $5 = /* @__PURE__ */ $s(() => /* @__PURE__ */ Wt("span", null, "Remove", -1)), y5 = { class: "section" }, V5 = {
  key: 0,
  class: "alarm-list"
}, Xa = window.Vue.ref, b5 = window.Vue.watch, C5 = window.Vue.reactive, S5 = window.Vue.markRaw, k5 = /* @__PURE__ */ o5({
  __name: "AlarmsListContainer",
  props: {
    alarms: null,
    situationId: null
  },
  setup(e) {
    const r = e, o = S5({
      Add: ql,
      Delete: sm,
      MarkComplete: yl,
      CheckCircle: is,
      ExitToApp: Id
    }), i = Hl(), a = gn(), u = Xa(!1), c = Xa(["all"]), f = Xa(!1), w = Xa(!1), v = C5({
      selectedAlarms: [],
      alarms: r.alarms
    });
    b5(r, () => {
      c.value = ["all"], v.alarms = r.alarms, v.selectedAlarms = [], u.value = !1;
    });
    const _ = (I) => {
      v.selectedAlarms.includes(I) ? $e.exports.remove(v.selectedAlarms, (O) => O == I) : v.selectedAlarms.push(I);
    }, $ = async (I) => {
      v.selectedAlarms.length ? (await jk(v.selectedAlarms, I), a.getSituation(r.situationId), v.selectedAlarms = [], u.value = !1) : i.showErrorMsg("You need to choose at least one alarm!");
    }, y = () => v.selectedAlarms.length === r.alarms.length ? (i.showErrorMsg("You cannnot remove all alarms from the situation"), !1) : v.selectedAlarms.length ? !0 : (i.showErrorMsg("You need to choose at least one alarm!"), !1), B = async () => {
      y() && (await vw(
        r.situationId,
        v.selectedAlarms
      ) ? a.getSituation(r.situationId) : i.showErrorMsg("Error on removing alarms :("));
    }, L = async (I) => {
      y() && (await vw(
        r.situationId,
        v.selectedAlarms
      ) ? await N(I, v.selectedAlarms) : i.showErrorMsg("Error on moving the alarms :(")), f.value = !1;
    }, N = async (I, O) => {
      O.length ? await A_(I, O) ? a.getSituation(I) : i.showErrorMsg("Error on moving the alarms :(") : i.showErrorMsg("You need to select the alarms");
    }, D = async (I) => {
      await N(r.situationId, I), w.value = !1;
    }, S = () => {
      v.selectedAlarms.length ? f.value = !0 : i.showErrorMsg("You need to choose at least one alarm!");
    }, x = (I) => {
      v.alarms = I;
    };
    return (I, O) => (ni(), Ja(im, null, [
      Wt("div", u5, [
        Wt("div", c5, [
          d5,
          ht(it(le), {
            class: "add-alarms-btn",
            onClick: O[0] || (O[0] = (k) => w.value = !0)
          }, {
            default: ti(() => [
              ht(it(Y), {
                icon: it(o).Add,
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
            ht(_s, {
              list: r.alarms,
              onFilteredList: x,
              isOpen: ""
            }, null, 8, ["list"])
          ]),
          Wt("div", w5, [
            Wt("div", v5, [
              ht(it(oo), {
                modelValue: u.value,
                "onUpdate:modelValue": O[1] || (O[1] = (k) => u.value = k),
                label: "selected"
              }, null, 8, ["modelValue"]),
              ht(it(le), {
                onClick: O[2] || (O[2] = () => $("clear"))
              }, {
                default: ti(() => [
                  ht(it(Y), {
                    icon: it(yl),
                    class: "icon clear"
                  }, null, 8, ["icon"]),
                  m5
                ]),
                _: 1
              }),
              ht(it(le), {
                onClick: O[3] || (O[3] = () => $("ack"))
              }, {
                default: ti(() => [
                  ht(it(Y), {
                    icon: it(is),
                    class: "icon ack"
                  }, null, 8, ["icon"]),
                  _5
                ]),
                _: 1
              }),
              ht(it(le), { onClick: S }, {
                default: ti(() => [
                  ht(it(Y), {
                    icon: it(Id),
                    class: "icon move"
                  }, null, 8, ["icon"]),
                  g5
                ]),
                _: 1
              }),
              ht(it(le), { onClick: B }, {
                default: ti(() => [
                  ht(it(Y), {
                    icon: it(sm),
                    class: "icon remove"
                  }, null, 8, ["icon"]),
                  $5
                ]),
                _: 1
              })
            ]),
            Wt("div", y5, [
              v.alarms.length > 0 ? (ni(), Ja("div", V5, [
                (ni(!0), Ja(im, null, s5(v.alarms, (k) => (ni(), Ja("div", {
                  key: k.id
                }, [
                  ht(iR, {
                    alarm: k,
                    selectAll: u.value,
                    "situation-id": r.situationId,
                    onAlarmSelected: _
                  }, null, 8, ["alarm", "selectAll", "situation-id"])
                ]))), 128))
              ])) : (ni(), i5(gs, { key: 1 }))
            ])
          ])
        ])
      ]),
      ht(qg, {
        situationId: r.situationId,
        visible: f.value,
        onSituationSelected: L,
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
const E5 = /* @__PURE__ */ he(k5, [["__scopeId", "data-v-524b0835"]]), I5 = window.Vue.defineComponent, pn = window.Vue.createVNode, Rt = window.Vue.unref, td = window.Vue.normalizeClass, Qa = window.Vue.toDisplayString, ri = window.Vue.openBlock, oi = window.Vue.createElementBlock, am = window.Vue.createCommentVNode, x5 = window.Vue.withCtx, rn = window.Vue.createElementVNode, A5 = window.Vue.Fragment, T5 = window.Vue.pushScopeId, B5 = window.Vue.popScopeId, L5 = (e) => (T5("data-v-e980d1e2"), e = e(), B5(), e), M5 = { class: "section" }, D5 = { class: "action-section" }, N5 = { class: "btn-row" }, O5 = { key: 0 }, P5 = { key: 1 }, R5 = {
  key: 0,
  class: "situation-detail"
}, F5 = { class: "situation-info" }, U5 = { class: "id" }, W5 = ["innerHTML"], q5 = /* @__PURE__ */ L5(() => /* @__PURE__ */ rn("p", null, null, -1)), H5 = { class: "boxes" }, z5 = { class: "parameters" }, Y5 = { class: "section memo-boxes" }, G5 = { key: 0 }, j5 = window.Vue.computed, lm = window.Vue.ref, Z5 = window.Vue.watch, K5 = /* @__PURE__ */ I5({
  __name: "SituationDetailTab",
  props: {
    situationInfo: null
  },
  setup(e) {
    const r = e, o = Hl(), i = gn(), a = tt.REJECTED, u = lm(r.situationInfo.status), c = lm(r.situationInfo);
    Z5(r, () => {
      u.value = r.situationInfo.status || "", c.value = r.situationInfo;
    });
    const f = j5(
      () => {
        var v;
        return V_(((v = c.value) == null ? void 0 : v.description) || "");
      }
    ), w = async (v) => {
      var $;
      await x_(
        ($ = r.situationInfo) == null ? void 0 : $.id,
        v.toLowerCase()
      ) ? (u.value = v, i.getSituation(r.situationInfo.id)) : o.showErrorMsg("Error on rejecting the situation");
    };
    return (v, _) => {
      var $, y, B, L, N, D, S, x, I, O, k, P;
      return ri(), oi(A5, null, [
        rn("div", M5, [
          rn("div", D5, [
            pn(yg, {
              alarm: c.value,
              direction: "horizontal",
              showClear: "",
              isSituation: "",
              "situation-id": r.situationInfo.id
            }, null, 8, ["alarm", "situation-id"]),
            rn("div", N5, [
              pn(Rt(le), {
                class: td(["btn", { rejected: u.value == Rt(a) }]),
                "data-test": "btn-reject",
                onClick: _[0] || (_[0] = (R) => w(Rt(a)))
              }, {
                default: x5(() => [
                  pn(Rt(Y), {
                    icon: Rt(w_),
                    "aria-hidden": "true",
                    class: td(["icon reject", { rejected: u.value == Rt(a) }])
                  }, null, 8, ["icon", "class"]),
                  u.value == Rt(a) ? (ri(), oi("span", O5, Qa(Rt(a)), 1)) : (ri(), oi("span", P5, " REJECT"))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ]),
          c.value ? (ri(), oi("div", R5, [
            rn("div", {
              class: td(["severity-line", [`${(y = ($ = c.value) == null ? void 0 : $.severity) == null ? void 0 : y.toLowerCase()}-bg dark`]])
            }, null, 2),
            rn("div", F5, [
              rn("div", U5, [
                rn("div", null, " Situation - " + Qa((B = c.value) == null ? void 0 : B.id) + " - " + Qa(c.value.alarms.length) + " alarm(s) affects " + Qa(Rt($e.exports.size)(Rt($e.exports.groupBy)((L = c.value) == null ? void 0 : L.alarms, "nodeId"))) + " node(s) ", 1),
                pn($g, {
                  severity: (N = c.value) == null ? void 0 : N.severity
                }, null, 8, ["severity"])
              ]),
              rn("span", {
                innerHTML: Rt(f),
                "data-test": "situation-description"
              }, null, 8, W5),
              q5,
              rn("div", H5, [
                pn(Pc, {
                  label: "First Event",
                  info: Rt(xn)(c.value.firstEventTime)
                }, null, 8, ["info"]),
                pn(Pc, {
                  label: "Last Event",
                  info: Rt(xn)(c.value.lastEventTime)
                }, null, 8, ["info"]),
                pn(Pc, {
                  label: "Reduction Key",
                  info: c.value.reductionKey
                }, null, 8, ["info"])
              ])
            ]),
            rn("div", z5, [
              pn(l4, {
                alarms: (D = c.value) == null ? void 0 : D.alarms,
                size: "large"
              }, null, 8, ["alarms"])
            ])
          ])) : am("", !0),
          rn("div", Y5, [
            pn(bl, {
              id: (S = c.value) == null ? void 0 : S.id,
              situationId: (x = c.value) == null ? void 0 : x.id,
              label: "Sticky Memo",
              type: "memo",
              memo: (I = c.value) == null ? void 0 : I.stickyMemo
            }, null, 8, ["id", "situationId", "memo"]),
            pn(bl, {
              id: (O = c.value) == null ? void 0 : O.id,
              situationId: (k = c.value) == null ? void 0 : k.id,
              label: "Journal Memo",
              type: "journal",
              memo: (P = c.value) == null ? void 0 : P.reductionKeyMemo
            }, null, 8, ["id", "situationId", "memo"])
          ])
        ]),
        c.value.alarms && c.value.alarms.length ? (ri(), oi("div", G5, [
          pn(E5, {
            alarms: c.value.alarms,
            "situation-id": c.value.id
          }, null, 8, ["alarms", "situation-id"])
        ])) : am("", !0)
      ], 64);
    };
  }
});
const J5 = /* @__PURE__ */ he(K5, [["__scopeId", "data-v-e980d1e2"]]);
var X5 = Object.defineProperty, Q5 = Object.defineProperties, e6 = Object.getOwnPropertyDescriptors, um = Object.getOwnPropertySymbols, t6 = Object.prototype.hasOwnProperty, n6 = Object.prototype.propertyIsEnumerable, cm = (e, r, o) => r in e ? X5(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, xd = (e, r) => {
  for (var o in r || (r = {}))
    t6.call(r, o) && cm(e, o, r[o]);
  if (um)
    for (var o of um(r))
      n6.call(r, o) && cm(e, o, r[o]);
  return e;
}, r6 = (e, r) => Q5(e, e6(r));
const zg = window.Vue.defineComponent, to = window.Vue.resolveComponent, ul = window.Vue.openBlock, dm = window.Vue.createBlock, cl = window.Vue.mergeProps, no = window.Vue.withCtx, Yg = window.Vue.createElementBlock, o6 = window.Vue.Fragment, s6 = window.Vue.renderList, i6 = window.Vue.createTextVNode, a6 = window.Vue.toDisplayString, l6 = window.Vue.computed, fm = window.Vue.toRef, si = window.Vue.createVNode, hm = window.Vue.toHandlers, u6 = window.Vue.renderSlot, c6 = window.Vue.normalizeClass, d6 = window.Vue.createElementVNode;
var Gg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const f6 = zg({
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
      return fe("feather-select-active");
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
        bi(r, this.$refs.list.$el);
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
    FeatherList: zd,
    FeatherListItem: Ei
  }
});
function h6(e, r, o, i, a, u) {
  const c = to("FeatherListItem"), f = to("FeatherList");
  return ul(), dm(f, cl(e.listAttrs, {
    ref: "list",
    class: "feather-select-options-list"
  }), {
    default: no(() => [
      (ul(!0), Yg(o6, null, s6(e.options, (w, v) => (ul(), dm(c, {
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
        default: no(() => [
          i6(a6(w[e.textProp]), 1)
        ]),
        _: 2
      }, 1032, ["id", "aria-selected", "selected", "onClick"]))), 128))
    ]),
    _: 1
  }, 16);
}
var p6 = /* @__PURE__ */ Gg(f6, [["render", h6], ["__scopeId", "data-v-eae820da"]]);
const w6 = r6(xd(xd({}, Ml), ws), {
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
}, m6 = zg({
  model: {
    prop: "modelValue",
    event: "update:modelValue"
  },
  emits: v6,
  props: w6,
  setup(e, r) {
    vs(e), Dl(e);
    const o = l6(() => fe("feather-select-input")), { validate: i } = hs(o, fm(e, "modelValue"), e.label, e.schema, fm(e, "error"));
    return xd({
      inputId: o,
      validate: i
    }, ps(r.attrs));
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
      return fe("feather-select-description");
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
    icon: () => Fl
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
      io(this.delayTimeout), this.delayTimeout = so(() => {
        const e = this.options.filter((r) => r[this.textProp] && r[this.textProp].toLowerCase().indexOf(this.charsSoFar.toLowerCase()) === 0);
        e && e.length && this.select(e[0]), this.charsSoFar = "";
      }, 250);
    }
  },
  components: {
    InputWrapper: Ll,
    InputSubText: fs,
    FeatherMenu: W_,
    List: p6,
    FeatherIcon: Y
  }
});
function _6(e, r, o, i, a, u) {
  const c = to("FeatherIcon"), f = to("InputWrapper"), w = to("List"), v = to("FeatherMenu"), _ = to("InputSubText");
  return ul(), Yg("div", cl(e.inherittedAttrs, { class: "feather-select-container" }), [
    si(v, {
      "no-expand": "",
      fill: "",
      open: e.showMenu,
      onOutsideClick: e.handleOutsideClick,
      onTriggerClick: e.handleTriggerClick,
      class: "feather-select-menu-container",
      "data-ref-id": "feather-select-menu-container"
    }, {
      trigger: no(($) => [
        si(f, cl({
          for: e.inputId,
          raised: e.raised,
          focused: e.hasFocus,
          "show-clear": e.showClear,
          onClear: e.handleClear
        }, $.attrs, hm($.on), {
          class: ["feather-select-wrapper", { focused: e.hasFocus }]
        }), {
          pre: no(() => [
            u6(e.$slots, "pre", {}, void 0, !0)
          ]),
          post: no(() => [
            si(c, {
              class: c6(["feather-select-icon", { rotate: e.showMenu }]),
              icon: e.icon
            }, null, 8, ["class", "icon"])
          ]),
          default: no(() => [
            d6("input", cl(e.inputAttrs, {
              class: "feather-select-input",
              "data-ref-id": "feather-select-input"
            }, hm(e.inputListeners), { ref: "input" }), null, 16)
          ]),
          _: 2
        }, 1040, ["for", "raised", "focused", "show-clear", "onClear", "class"])
      ]),
      default: no(() => [
        si(w, {
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
    si(_, { id: e.subTextId }, null, 8, ["id"])
  ], 16);
}
var g6 = /* @__PURE__ */ Gg(m6, [["render", _6], ["__scopeId", "data-v-ecb32d90"]]);
const $6 = window.Vue.openBlock, y6 = window.Vue.createElementBlock, jg = window.Vue.createElementVNode;
var V6 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const b6 = {}, C6 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, S6 = /* @__PURE__ */ jg("path", { d: "M16,11H13V8a1,1,0,0,0-2,0v3H8a1,1,0,0,0,0,2h3v3a1,1,0,0,0,2,0V13h3a1,1,0,0,0,0-2Z" }, null, -1), k6 = /* @__PURE__ */ jg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), E6 = [
  S6,
  k6
];
function I6(e, r) {
  return $6(), y6("svg", C6, E6);
}
var x6 = /* @__PURE__ */ V6(b6, [["render", I6]]);
const dl = window.Vue.openBlock, Ad = window.Vue.createElementBlock, Zg = window.Vue.createElementVNode, A6 = window.Vue.defineComponent, jr = window.Vue.ref, T6 = window.Vue.provide, pm = window.Vue.computed, B6 = window.Vue.onUnmounted, wm = window.Vue.toRef, L6 = window.Vue.resolveComponent, M6 = window.Vue.Fragment, D6 = window.Vue.createBlock, N6 = window.Vue.Teleport, vm = window.Vue.createVNode, O6 = window.Vue.Transition, P6 = window.Vue.withCtx, R6 = window.Vue.normalizeClass, F6 = window.Vue.normalizeStyle, U6 = window.Vue.toDisplayString, W6 = window.Vue.createCommentVNode, q6 = window.Vue.renderSlot, nd = window.Vue.nextTick;
var Kg = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const H6 = {}, z6 = {
  width: "32",
  height: "9",
  viewBox: "0 0 32 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Y6 = /* @__PURE__ */ Zg("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.01471 2.17157C7.26457 1.42143 6.24715 1 5.18629 1H0.5C0.223858 1 0 0.776142 0 0.5V0.5C0 0.223858 0.223858 0 0.5 0H31.5C31.7761 0 32 0.223858 32 0.5V0.5C32 0.776142 31.7761 1 31.5 1H27.1274C26.0666 1 25.0492 1.42143 24.299 2.17157L18.9853 7.4853C17.4232 9.04739 14.8905 9.04739 13.3284 7.48529L8.01471 2.17157Z",
  fill: "var(--feather-high-visibility-on-surface)"
}, null, -1), G6 = [
  Y6
];
function j6(e, r) {
  return dl(), Ad("svg", z6, G6);
}
var Z6 = /* @__PURE__ */ Kg(H6, [["render", j6]]), et = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e.left = "left", e.right = "right", e))(et || {}), Yn = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Yn || {});
const K6 = (e, r, o, i = 9) => {
  const a = window.innerHeight - e.bottom, u = window.innerWidth - e.right, c = [];
  e.top >= r.height + i && c.push(et.top), a >= r.height + i && c.push(et.bottom);
  const f = [];
  u >= r.width + i && f.push(et.right), e.left >= r.width + i && f.push(et.left);
  let w = [...f, ...c];
  return (o === et.top || o === et.bottom) && (w = [...c, ...f]), w.indexOf(o) > -1 ? o : w.length ? w[0] : o;
}, J6 = (e, r, o, i, a = 28) => {
  if (e === et.left || e === et.right)
    return Yn.center;
  const u = r.left + r.width / 2, c = window.innerWidth - r.right, f = [], w = u, v = c + r.width / 2, _ = o.width - a, $ = o.width / 2;
  return w >= $ && v >= $ && f.push(Yn.center), v >= _ && f.push(Yn.left), w >= _ && f.push(Yn.right), f.indexOf(i) > -1 ? i : f.length ? f[0] : i;
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
    default: () => Yn.center
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
    const r = jr(!1), o = jr(!1), i = fe("feather-tooltip-trigger"), a = fe("feather-tooltip"), u = "data-feather-tooltip";
    T6("feather-has-tooltip", !0);
    let c = 0;
    const f = () => {
      io(c), r.value || (c = so(N, e.enterDelay));
    }, w = () => {
      io(c), c = so(D, e.exitDelay);
    }, v = (ue) => {
      ue.keyCode === ne.ESCAPE && (ue.preventDefault(), D(!0));
    }, _ = pm(() => ({
      [u]: i,
      "aria-describedby": a
    })), $ = {
      mouseenter: f,
      mouseleave: w,
      focus: f,
      blur: w,
      keydown: v
    }, y = jr(document), B = U_(y, () => D(!0));
    B6(() => D(!0));
    const L = () => document.getElementById(a), N = () => {
      o.value = !1, r.value = !0, nd(() => {
        const ue = L();
        se(ue), r.value = !1, nd(() => {
          o.value = !0, r.value = !0, B.value = !0;
        });
      });
    }, D = (ue = !1) => {
      P.value = "", k.value = "", R.value = "", z.value = "", r.value = !1, ue && (o.value = !1), B.value = !1;
    }, S = wm(e, "placement"), x = wm(e, "pointerAlignment"), I = 8, O = 24, k = jr(""), P = jr(""), R = jr(""), z = jr(""), de = pm(() => z.value ? "p-" + z.value : !1), se = (ue) => {
      const Ve = document.querySelector(`[${u}=${i}]`);
      if (!Ve) {
        console.log("trigger not found");
        return;
      }
      nd(() => {
        const ye = Ve.getBoundingClientRect(), Be = ue.getBoundingClientRect(), me = K6(ye, Be, S.value, I), Ue = J6(me, ye, Be, x.value, O);
        R.value = Ue.toString(), z.value = me.toString();
        let He = 0, We = 0;
        if ((me === et.left || me === et.right) && (He = ye.top + ye.height / 2 - Be.height / 2, me === et.left && (We = ye.left - Be.width - I), me === et.right && (We = ye.right)), me === et.top || me === et.bottom) {
          He = ye.top - Be.height - I, me === et.bottom && (He = ye.bottom);
          const $n = ye.left + ye.width / 2;
          switch (Ue) {
            case Yn.center:
              We = $n - Be.width / 2;
              break;
            case Yn.left:
              We = $n - O;
              break;
            case Yn.right:
              We = $n - Be.width + O;
              break;
          }
        }
        k.value = He.toString() + "px", P.value = We.toString() + "px";
      });
    };
    return {
      attrs: _,
      listeners: $,
      show: r,
      animate: o,
      alignmentClass: R,
      placementClass: de,
      top: k,
      left: P,
      tooltipID: a
    };
  },
  components: {
    Pointer: Z6
  }
}), e7 = ["id"];
function t7(e, r, o, i, a, u) {
  const c = L6("Pointer");
  return dl(), Ad(M6, null, [
    (dl(), D6(N6, { to: "body" }, [
      vm(O6, { css: e.animate }, {
        default: P6(() => [
          e.show ? (dl(), Ad("div", {
            key: 0,
            class: R6(["feather-tooltip-container", [e.alignmentClass, e.placementClass]]),
            ref: "tooltip",
            style: F6({ left: e.left, top: e.top })
          }, [
            Zg("div", {
              class: "tooltip",
              role: "tooltip",
              id: e.tooltipID
            }, U6(e.title), 9, e7),
            vm(c, { class: "tooltip-pointer" })
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
var mm = /* @__PURE__ */ Kg(Q6, [["render", t7], ["__scopeId", "data-v-3da6b22e"]]);
const n7 = window.Vue.defineComponent, rd = window.Vue.normalizeStyle, od = window.Vue.createElementVNode, ii = window.Vue.unref, _m = window.Vue.toHandlers, gm = window.Vue.mergeProps, $m = window.Vue.withCtx, ym = window.Vue.createVNode, r7 = window.Vue.renderList, o7 = window.Vue.Fragment, ai = window.Vue.openBlock, li = window.Vue.createElementBlock, Vm = window.Vue.normalizeClass, bm = window.Vue.createCommentVNode;
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
    const r = e, o = new Date().getTime(), i = (u, c) => u ? (Number(c) - Number(u)) * r.proportion : 0, a = (u) => u ? (Number(u) - Number(r.minStart)) * r.proportion : 0;
    return (u, c) => (ai(), li("div", s7, [
      od("div", {
        class: "line-gray",
        style: rd({
          width: a(r.events[0].createTime) + "px"
        })
      }, null, 4),
      ym(ii(mm), {
        title: ii(xn)(e.alarm.firstEventTime)
      }, {
        default: $m(({ attrs: f, on: w }) => [
          od("div", gm({ class: "circle" }, f, _m(w), {
            class: [`${e.alarm.severity.toLowerCase()}-bg dark`]
          }), null, 16)
        ]),
        _: 1
      }, 8, ["title"]),
      (ai(!0), li(o7, null, r7(r.events, (f, w) => (ai(), li("div", {
        class: "event-trim",
        key: f.id
      }, [
        r.events[w + 1] ? (ai(), li("div", {
          key: 0,
          class: Vm(["line", [`${f.severity.toLowerCase()}-bg dark`]]),
          style: rd({
            width: i(f.createTime, r.events[w + 1].createTime) + "px"
          })
        }, null, 6)) : bm("", !0),
        ym(ii(mm), {
          title: ii(xn)(e.alarm.firstEventTime)
        }, {
          default: $m(({ attrs: v, on: _ }) => [
            r.events[w + 1] ? (ai(), li("div", gm({ key: 0 }, v, _m(_), {
              class: ["event", [`${f.severity.toLowerCase()}-bg dark`]]
            }), null, 16)) : bm("", !0)
          ]),
          _: 2
        }, 1032, ["title"])
      ]))), 128)),
      od("div", {
        class: Vm(["line", [`${e.events[e.events.length - 1].severity.toLowerCase()}-bg dark`]]),
        style: rd({
          width: i(e.events[e.events.length - 1].createTime, ii(o)) + "px"
        })
      }, null, 6)
    ]));
  }
});
const a7 = /* @__PURE__ */ he(i7, [["__scopeId", "data-v-3341d12d"]]), l7 = window.Vue.openBlock, u7 = window.Vue.createElementBlock, Jg = window.Vue.createElementVNode;
var c7 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const d7 = {}, f7 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, h7 = /* @__PURE__ */ Jg("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), p7 = /* @__PURE__ */ Jg("path", { d: "M16,11H8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z" }, null, -1), w7 = [
  h7,
  p7
];
function v7(e, r) {
  return l7(), u7("svg", f7, w7);
}
var m7 = /* @__PURE__ */ c7(d7, [["render", v7]]);
const _7 = window.Vue.defineComponent, Td = window.Vue.createElementVNode, g7 = window.Vue.renderList, Cm = window.Vue.Fragment, sd = window.Vue.openBlock, id = window.Vue.createElementBlock, $7 = window.Vue.normalizeClass, y7 = window.Vue.unref, Sm = window.Vue.toDisplayString, V7 = window.Vue.pushScopeId, b7 = window.Vue.popScopeId, C7 = (e) => (V7("data-v-2e087f7b"), e = e(), b7(), e), S7 = /* @__PURE__ */ C7(() => /* @__PURE__ */ Td("strong", null, "Events:", -1)), k7 = /* @__PURE__ */ _7({
  __name: "EventsList",
  props: {
    events: null
  },
  setup(e) {
    const r = e;
    return (o, i) => (sd(), id(Cm, null, [
      S7,
      (sd(!0), id(Cm, null, g7(r.events, (a) => (sd(), id("div", {
        class: "event-description",
        key: a.id
      }, [
        Td("div", {
          class: $7(["mark", [`${a.severity.toLowerCase()}-bg dark`]])
        }, null, 2),
        Td("div", null, Sm(y7(xn)(a.createTime)) + " - " + Sm(a.source), 1)
      ]))), 128))
    ], 64));
  }
});
const E7 = /* @__PURE__ */ he(k7, [["__scopeId", "data-v-2e087f7b"]]), I7 = window.Vue.defineComponent, x7 = window.Vue.normalizeClass, Ut = window.Vue.createElementVNode, Ho = window.Vue.toDisplayString, bt = window.Vue.unref, zo = window.Vue.createVNode, Xg = window.Vue.createTextVNode, A7 = window.Vue.renderList, km = window.Vue.Fragment, Hn = window.Vue.openBlock, Zr = window.Vue.createElementBlock, Em = window.Vue.createBlock, el = window.Vue.createCommentVNode, T7 = window.Vue.normalizeStyle, B7 = window.Vue.pushScopeId, L7 = window.Vue.popScopeId, M7 = (e) => (B7("data-v-01717d0d"), e = e(), L7(), e), D7 = { class: "section detail" }, N7 = { class: "id" }, O7 = {
  key: 0,
  class: "section"
}, P7 = /* @__PURE__ */ M7(() => /* @__PURE__ */ Ut("div", { class: "id" }, "Alarms", -1)), R7 = { class: "action-btns" }, F7 = { class: "zoom" }, U7 = /* @__PURE__ */ Xg(" Zoom "), W7 = { class: "times" }, q7 = {
  key: 0,
  class: "timeline-container"
}, H7 = { class: "alarm-id" }, z7 = {
  key: 0,
  class: "panel"
}, hr = window.Vue.ref, Y7 = window.Vue.watch, G7 = /* @__PURE__ */ I7({
  __name: "SituationMetricsTab",
  props: {
    situation: null,
    width: null
  },
  setup(e) {
    var O, k;
    const r = e, o = gn(), i = hr(0), a = [
      { id: 1, name: "Creation Time" },
      { id: 2, name: "Severity" },
      { id: 3, name: "Duration" }
    ], u = hr(a[0]), c = hr(r.width), f = hr(r.width), w = hr(new Date().getTime()), v = () => {
      var P, R;
      if (!r.situation.events) {
        const z = (R = (P = r.situation) == null ? void 0 : P.alarms) == null ? void 0 : R.map((de) => de.id);
        o.getEvents(r.situation.id, z);
      }
    };
    v();
    const _ = () => (w.value = new Date().getTime(), c.value / (Number(w.value) - Number(y.value))), $ = hr(r.situation.alarms), y = hr(
      ((k = $e.exports.minBy((O = r.situation) == null ? void 0 : O.alarms, "firstEventTime")) == null ? void 0 : k.firstEventTime) || new Date().getTime()
    ), B = hr(_());
    Y7(r, () => {
      var P, R;
      y.value = ((R = $e.exports.minBy((P = r.situation) == null ? void 0 : P.alarms, "firstEventTime")) == null ? void 0 : R.firstEventTime) || new Date().getTime(), v(), c.value = f.value, B.value = _(), $.value = r.situation.alarms, u.value = a[0];
    });
    const L = (P) => {
      if ((P == null ? void 0 : P.id) === 1 && ($.value = r.situation.alarms), (P == null ? void 0 : P.id) === 2) {
        const R = $e.exports.groupBy($.value, "severity"), z = [
          ...R.CRITICAL || [],
          ...R.MAJOR || [],
          ...R.MINOR || [],
          ...R.WARNING || [],
          ...R.NORMAL || [],
          ...R.CLEARED || [],
          ...R.INDETERMINATE || []
        ];
        $.value = z.filter((de) => de);
      }
      if ((P == null ? void 0 : P.id) === 3) {
        const R = $e.exports.reverse(
          $e.exports.sortBy(
            r.situation.alarms,
            (z) => Number(z.lastEventTime) - Number(z.firstEventTime)
          )
        );
        $.value = R;
      }
    }, N = () => {
      c.value += 100, B.value = _();
    }, D = () => {
      c.value -= 100, B.value = _();
    }, S = () => {
      c.value = f.value, B.value = _();
    }, x = (P) => {
      i.value = P;
    }, I = () => {
      i.value = 0;
    };
    return (P, R) => {
      var z, de;
      return Hn(), Zr(km, null, [
        Ut("div", D7, [
          Ut("div", {
            class: x7(["severity-line", [`${(de = (z = r.situation) == null ? void 0 : z.severity) == null ? void 0 : de.toLowerCase()}-bg dark`]])
          }, null, 2),
          Ut("div", null, [
            Ut("div", N7, "Situation " + Ho(r.situation.id), 1),
            Ut("div", null, " Duration: " + Ho(bt(Al)(w.value, new Date(y.value))), 1)
          ])
        ]),
        $.value && $.value.length > 0 ? (Hn(), Zr("div", O7, [
          P7,
          Ut("div", R7, [
            zo(bt(g6), {
              class: "select",
              label: "Sort by:",
              options: a,
              modelValue: u.value,
              "onUpdate:modelValue": [
                R[0] || (R[0] = (se) => u.value = se),
                L
              ],
              "text-prop": "name",
              "data-test": "select-sort"
            }, null, 8, ["modelValue"]),
            Ut("div", F7, [
              U7,
              Ut("div", null, [
                zo(bt(Y), {
                  icon: bt(x6),
                  class: "zoom-icon",
                  onClick: N
                }, null, 8, ["icon"]),
                zo(bt(Y), {
                  icon: bt(rg),
                  class: "zoom-icon",
                  onClick: S
                }, null, 8, ["icon"]),
                zo(bt(Y), {
                  icon: bt(m7),
                  class: "zoom-icon",
                  onClick: D
                }, null, 8, ["icon"])
              ])
            ])
          ]),
          f.value ? (Hn(), Zr("div", {
            key: 0,
            class: "alarms",
            style: T7({
              width: f.value + 50 + "px"
            })
          }, [
            Ut("div", W7, [
              Ut("div", null, Ho(bt(xn)(y.value)), 1),
              Ut("div", null, Ho(bt(xn)(w.value)), 1)
            ]),
            e.situation.events ? (Hn(), Zr("div", q7, [
              (Hn(!0), Zr(km, null, A7($.value, (se) => (Hn(), Zr("div", {
                class: "timeline",
                key: se.id
              }, [
                Ut("div", H7, [
                  Xg(Ho(se.nodeLabel) + " - " + Ho(se.id) + " ", 1),
                  i.value === se.id ? (Hn(), Em(bt(Y), {
                    key: 0,
                    icon: bt(Fl),
                    class: "zoom-icon expand",
                    onClick: I
                  }, null, 8, ["icon"])) : (Hn(), Em(bt(Y), {
                    key: 1,
                    icon: bt(L_),
                    class: "zoom-icon expand",
                    onClick: () => x(se.id)
                  }, null, 8, ["icon", "onClick"]))
                ]),
                zo(a7, {
                  alarm: se,
                  proportion: B.value,
                  "min-start": y.value,
                  events: r.situation.events[se.id]
                }, null, 8, ["alarm", "proportion", "min-start", "events"]),
                i.value === se.id ? (Hn(), Zr("div", z7, [
                  zo(E7, {
                    events: r.situation.events[se.id]
                  }, null, 8, ["events"])
                ])) : el("", !0)
              ]))), 128))
            ])) : el("", !0)
          ], 4)) : el("", !0)
        ])) : el("", !0)
      ], 64);
    };
  }
});
const j7 = /* @__PURE__ */ he(G7, [["__scopeId", "data-v-01717d0d"]]), Z7 = window.Vue.defineComponent, kt = window.Vue.createElementVNode, wn = window.Vue.unref, ut = window.Vue.createTextVNode, Yo = window.Vue.withCtx, Ne = window.Vue.openBlock, K7 = window.Vue.createBlock, tl = window.Vue.createCommentVNode, pr = window.Vue.createVNode, Re = window.Vue.createElementBlock, J7 = window.Vue.resolveComponent, Kr = window.Vue.toDisplayString, Im = window.Vue.renderList, xm = window.Vue.Fragment, X7 = window.Vue.pushScopeId, Q7 = window.Vue.popScopeId, ys = (e) => (X7("data-v-3e9f0cbf"), e = e(), Q7(), e), eF = {
  class: "ai-panel",
  "data-test": "ai-suggestions-panel"
}, tF = { class: "header" }, nF = /* @__PURE__ */ ys(() => /* @__PURE__ */ kt("h3", null, "AI Suggestions", -1)), rF = { class: "header-actions" }, oF = /* @__PURE__ */ ut(" Re-evaluate "), sF = /* @__PURE__ */ ut(" Refresh "), iF = {
  key: 0,
  class: "state-row",
  "data-test": "ai-loading"
}, aF = /* @__PURE__ */ ys(() => /* @__PURE__ */ kt("span", null, "Loading\u2026", -1)), lF = {
  key: 1,
  class: "state-row",
  "data-test": "ai-reanalyzing"
}, uF = /* @__PURE__ */ ys(() => /* @__PURE__ */ kt("span", null, "Requesting a fresh analysis\u2026", -1)), cF = {
  key: 2,
  class: "state-row",
  "data-test": "ai-absent"
}, dF = {
  key: 0,
  "data-test": "ai-absent-disabled"
}, fF = /* @__PURE__ */ ut(" The LLM integration is currently disabled. Enable it on the "), hF = /* @__PURE__ */ ut("configuration page"), pF = /* @__PURE__ */ ut(" to start generating suggestions for new situations. "), wF = {
  key: 1,
  "data-test": "ai-absent-no-key"
}, vF = /* @__PURE__ */ ut(" No API key is configured. Add one on the "), mF = /* @__PURE__ */ ut("configuration page"), _F = /* @__PURE__ */ ut(" to enable AI suggestions. "), gF = {
  key: 2,
  "data-test": "ai-absent-not-yet-run"
}, $F = /* @__PURE__ */ ut(" No analysis has run for this situation yet. New situations are analyzed automatically \u2014 click "), yF = /* @__PURE__ */ ys(() => /* @__PURE__ */ kt("strong", null, "Re-evaluate", -1)), VF = /* @__PURE__ */ ut(" above to trigger one now. "), bF = [
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
}, EF = { class: "failed-msg" }, IF = /* @__PURE__ */ ut(" The last LLM request failed: "), xF = /* @__PURE__ */ ut(" Retry "), AF = {
  key: 5,
  class: "state-row",
  "data-test": "ai-error"
}, TF = /* @__PURE__ */ ut(" Could not load suggestions. Please retry. "), BF = /* @__PURE__ */ ut("Retry"), LF = {
  key: 6,
  "data-test": "ai-ready"
}, MF = {
  key: 0,
  class: "meta"
}, DF = /* @__PURE__ */ ut(" Generated by "), NF = { class: "section" }, OF = /* @__PURE__ */ ys(() => /* @__PURE__ */ kt("h4", null, "Probable root causes", -1)), PF = {
  key: 0,
  "data-test": "ai-root-causes"
}, RF = {
  key: 1,
  class: "empty"
}, FF = { class: "section" }, UF = /* @__PURE__ */ ys(() => /* @__PURE__ */ kt("h4", null, "Possible resolutions", -1)), WF = {
  key: 0,
  "data-test": "ai-resolutions"
}, qF = {
  key: 1,
  class: "empty"
}, ad = window.Vue.computed, HF = window.Vue.onBeforeUnmount, zF = window.Vue.onMounted, ld = window.Vue.ref, YF = /* @__PURE__ */ Z7({
  __name: "AISuggestionsTab",
  props: {
    situationId: null
  },
  setup(e) {
    const r = e, o = ao(), i = ld("loading"), a = ld(null), u = ld(null), c = 5e3, f = 5 * 60 * 1e3;
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
      const x = await I_(r.situationId);
      if (x === !1) {
        i.value = "error";
        return;
      }
      if (x === null) {
        i.value = "absent", a.value = null;
        return;
      }
      a.value = x, i.value = x.status;
    }, B = async () => {
      i.value = "loading", _(), await y(), $();
    }, L = async () => {
      u.value = null, i.value = "reanalyzing", _();
      const x = await sI(r.situationId);
      if (x === !1) {
        i.value = "absent", u.value = "Could not start a new analysis. Make sure LLM is enabled on the configuration page and an API key is saved.", await o.getLLMConfig();
        return;
      }
      a.value = x, i.value = x.status, $();
    };
    zF(async () => {
      o.llmConfig === null && await o.getLLMConfig(), await y(), $();
    }), HF(() => _());
    const N = ad(() => {
      var x;
      return (x = a.value) != null && x.requestedAt ? new Date(a.value.requestedAt).toLocaleString() : "";
    }), D = ad(() => {
      const x = o.llmConfig;
      return !x || !x.enabled ? "disabled" : x.apiKeyPresent ? "not-yet-run" : "no-key";
    }), S = ad(
      () => {
        var x, I;
        return ((x = o.llmConfig) == null ? void 0 : x.enabled) === !0 && ((I = o.llmConfig) == null ? void 0 : I.apiKeyPresent) === !0;
      }
    );
    return (x, I) => {
      var k;
      const O = J7("router-link");
      return Ne(), Re("div", eF, [
        kt("div", tF, [
          nF,
          kt("div", rF, [
            wn(S) ? (Ne(), K7(wn(le), {
              key: 0,
              primary: "",
              "data-test": "ai-reanalyze",
              disabled: i.value === "reanalyzing" || i.value === "pending",
              onClick: L
            }, {
              default: Yo(() => [
                oF
              ]),
              _: 1
            }, 8, ["disabled"])) : tl("", !0),
            pr(wn(le), {
              secondary: "",
              "data-test": "ai-refresh",
              onClick: B
            }, {
              default: Yo(() => [
                sF
              ]),
              _: 1
            })
          ])
        ]),
        i.value === "loading" ? (Ne(), Re("div", iF, [
          pr(wn(ns)),
          aF
        ])) : i.value === "reanalyzing" ? (Ne(), Re("div", lF, [
          pr(wn(ns)),
          uF
        ])) : i.value === "absent" ? (Ne(), Re("div", cF, [
          wn(D) === "disabled" ? (Ne(), Re("span", dF, [
            fF,
            pr(O, { to: "/settings" }, {
              default: Yo(() => [
                hF
              ]),
              _: 1
            }),
            pF
          ])) : wn(D) === "no-key" ? (Ne(), Re("span", wF, [
            vF,
            pr(O, { to: "/settings" }, {
              default: Yo(() => [
                mF
              ]),
              _: 1
            }),
            _F
          ])) : (Ne(), Re("span", gF, bF)),
          u.value ? (Ne(), Re("div", CF, Kr(u.value), 1)) : tl("", !0)
        ])) : i.value === "pending" ? (Ne(), Re("div", SF, [
          pr(wn(ns)),
          kt("span", null, " Analyzing alarms with the LLM\u2026 requested at " + Kr(wn(N)) + ". ", 1)
        ])) : i.value === "failed" ? (Ne(), Re("div", kF, [
          kt("div", EF, [
            IF,
            kt("code", null, Kr(((k = a.value) == null ? void 0 : k.error) || "unknown error"), 1)
          ]),
          pr(wn(le), {
            secondary: "",
            "data-test": "ai-retry",
            onClick: B
          }, {
            default: Yo(() => [
              xF
            ]),
            _: 1
          })
        ])) : i.value === "error" ? (Ne(), Re("div", AF, [
          TF,
          pr(wn(le), {
            secondary: "",
            onClick: B
          }, {
            default: Yo(() => [
              BF
            ]),
            _: 1
          })
        ])) : i.value === "ready" && a.value ? (Ne(), Re("div", LF, [
          a.value.completedAt ? (Ne(), Re("div", MF, [
            DF,
            kt("strong", null, Kr(a.value.model), 1),
            ut(" at " + Kr(new Date(a.value.completedAt).toLocaleString()) + ". Treat as hypotheses, not facts. ", 1)
          ])) : tl("", !0),
          kt("div", NF, [
            OF,
            a.value.rootCauses.length ? (Ne(), Re("ol", PF, [
              (Ne(!0), Re(xm, null, Im(a.value.rootCauses, (P, R) => (Ne(), Re("li", {
                key: `cause-${R}`
              }, Kr(P), 1))), 128))
            ])) : (Ne(), Re("div", RF, "No root causes returned."))
          ]),
          kt("div", FF, [
            UF,
            a.value.resolutions.length ? (Ne(), Re("ol", WF, [
              (Ne(!0), Re(xm, null, Im(a.value.resolutions, (P, R) => (Ne(), Re("li", {
                key: `res-${R}`
              }, Kr(P), 1))), 128))
            ])) : (Ne(), Re("div", qF, "No resolutions returned."))
          ])
        ])) : tl("", !0)
      ]);
    };
  }
});
const GF = /* @__PURE__ */ he(YF, [["__scopeId", "data-v-3e9f0cbf"]]), jF = window.Vue.openBlock, ZF = window.Vue.createElementBlock, KF = window.Vue.createElementVNode;
var JF = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
var rs = /* @__PURE__ */ JF(XF, [["render", n9]]);
const Qg = window.Vue.defineComponent, ud = window.Vue.ref, r9 = window.Vue.toRef, cd = window.Vue.inject, Am = window.Vue.watch, o9 = window.Vue.nextTick, Tm = window.Vue.openBlock, Bm = window.Vue.createElementBlock, dd = window.Vue.createElementVNode, s9 = window.Vue.normalizeClass, Lm = window.Vue.renderSlot, Mm = window.Vue.createCommentVNode, fd = window.Vue.provide;
window.Vue.createBlock;
window.Vue.Teleport;
var i9 = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
}, u9 = Qg({
  emits: l9,
  props: a9,
  setup(e, r) {
    const o = ud(), i = ud(!1), a = ud(!1), u = Date.now() + Math.floor(Math.random() * 1e3), c = r9(e, "modelValue"), f = cd("queueSnackbar", !1), w = cd("unqueueSnackbar", !1), v = cd("nextSnackbar", () => {
    }), _ = (N, D) => {
      let S, x, I = D;
      const O = () => {
        !S || (io(S), S = 0, I -= Date.now() - x);
      }, k = () => {
        S || (x = Date.now(), S = so(N, I));
      };
      return k(), { pause: O, resume: k };
    }, $ = () => {
      i.value = !1, r.emit("closed"), v && v();
    }, y = (N) => {
      N.keyCode === ne.ESCAPE && (a.value = !1);
    }, B = () => {
      o.value.pause();
    }, L = () => {
      a.value && o.value.resume();
    };
    return Am(c, (N) => {
      N ? o9(() => {
        f === !1 ? a.value = N : f(u, a);
      }) : w === !1 ? a.value = N : w(u);
    }, { immediate: !0 }), Am(a, (N) => {
      N ? (i.value = !0, o.value = _(() => {
        a.value = !1;
      }, e.timeout)) : (r.emit("update:modelValue", !1), B());
    }), {
      hideTimeout: o,
      contentShow: i,
      internalValue: a,
      id: u,
      incomingValue: c,
      closed: $,
      keyPressed: y,
      stopTimer: B,
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
function p9(e, r, o, i, a, u) {
  return e.modelValue || e.contentShow ? (Tm(), Bm("div", c9, [
    dd("div", {
      class: s9(["feather-snackbar", {
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
      dd("div", d9, [
        e.contentShow ? (Tm(), Bm("div", f9, [
          Lm(e.$slots, "default", {}, void 0, !0)
        ])) : Mm("", !0)
      ]),
      dd("div", h9, [
        Lm(e.$slots, "button", {}, void 0, !0)
      ])
    ], 34)
  ])) : Mm("", !0);
}
var Gl = /* @__PURE__ */ i9(u9, [["render", p9], ["__scopeId", "data-v-5cf64a62"]]);
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
Qg({
  props: w9,
  setup() {
    let e, r = [];
    const o = () => {
      e && (e.val.value = !0);
    }, i = (c, f) => {
      const w = { id: c, val: f };
      e ? r.push(w) : (e = w, o());
    }, a = (c) => {
      (e == null ? void 0 : e.id) === c ? e.val.value = !1 : r = r.filter((f) => f.id != c);
    }, u = () => {
      r.length ? (e = r.shift(), o()) : e = void 0;
    };
    return fd("queueSnackbar", i), fd("unqueueSnackbar", a), fd("nextSnackbar", u), {
      curr: e,
      queue: r,
      showSnackbar: o,
      queueSnackbar: i,
      shiftItem: u,
      unqueueSnackbar: a
    };
  }
});
const v9 = window.Vue.defineComponent, Me = window.Vue.unref, at = window.Vue.createVNode, Ci = window.Vue.createElementVNode, Ct = window.Vue.withCtx, Jr = window.Vue.openBlock, hd = window.Vue.createBlock, Dm = window.Vue.createCommentVNode, Ii = window.Vue.createTextVNode, nl = window.Vue.createElementBlock, Nm = window.Vue.toDisplayString, m9 = window.Vue.pushScopeId, _9 = window.Vue.popScopeId, of = (e) => (m9("data-v-a5b2d880"), e = e(), _9(), e), g9 = { id: "cont" }, $9 = { class: "btns-navigation" }, y9 = /* @__PURE__ */ of(() => /* @__PURE__ */ Ci("span", null, "Situation List", -1)), V9 = /* @__PURE__ */ of(() => /* @__PURE__ */ Ci("span", null, "Show Previous Situation ", -1)), b9 = /* @__PURE__ */ of(() => /* @__PURE__ */ Ci("span", null, "Show Next Situation", -1)), C9 = { key: 1 }, S9 = {
  key: 0,
  class: "detail"
}, k9 = /* @__PURE__ */ Ii("Details"), E9 = /* @__PURE__ */ Ii("Metrics"), I9 = /* @__PURE__ */ Ii("AI Suggestions"), x9 = {
  key: 1,
  class: "noSituation"
}, A9 = /* @__PURE__ */ Ii("dismiss"), Xr = window.Vue.ref, Om = window.Vue.watch, T9 = window.Vue.onMounted, B9 = window.VueRouter.useRoute, L9 = /* @__PURE__ */ v9({
  __name: "SituationDetail",
  setup(e) {
    const r = Sr(), o = B9(), i = parseInt(o.params.id), a = Xr(i), u = gn(), c = Hl(), f = Xr(0);
    u.getSituation(a.value), u.getUnassignedAlarms(), u.situations.length || (u.getSituations(), u.getNodes());
    const w = Xr(), v = Xr(), _ = Xr(!0), $ = Xr(
      u.filteredSituations.findIndex((D) => D === a.value)
    ), y = Xr(!1);
    Om(
      () => u.situationDetail,
      () => {
        w.value = u.situationDetail, _.value = !1, u.getUnassignedAlarms();
      }
    ), T9(() => {
      var S;
      const D = ((S = document.getElementById("cont")) == null ? void 0 : S.getBoundingClientRect().width) || 1200;
      v.value = D - 90;
    });
    const B = () => {
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
    Om(o, () => {
      a.value = parseInt(o.params.id), u.getSituation(a.value), $.value = u.filteredSituations.findIndex((D) => D == a.value);
    }), c.$subscribe((D, S) => {
      y.value = S.showError;
    });
    const N = (D) => {
      f.value = D || 0;
    };
    return (D, S) => (Jr(), nl("div", g9, [
      Ci("div", $9, [
        at(Me(le), {
          primary: "",
          onClick: S[0] || (S[0] = () => B())
        }, {
          default: Ct(() => [
            at(Me(Y), {
              icon: Me(rs),
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            y9
          ]),
          _: 1
        }),
        Ci("div", null, [
          at(Me(le), {
            disabled: !Me(u).filteredSituations[$.value - 1],
            primary: "",
            onClick: S[1] || (S[1] = () => L(-1))
          }, {
            default: Ct(() => [
              at(Me(Y), {
                icon: Me(rs),
                "aria-hidden": "true",
                class: "icon"
              }, null, 8, ["icon"]),
              V9
            ]),
            _: 1
          }, 8, ["disabled"]),
          at(Me(le), {
            disabled: !Me(u).filteredSituations[$.value + 1],
            primary: "",
            onClick: S[2] || (S[2] = () => L(1))
          }, {
            default: Ct(() => [
              b9,
              at(Me(Y), {
                icon: Me(rs),
                "aria-hidden": "true",
                class: "icon next"
              }, null, 8, ["icon"])
            ]),
            _: 1
          }, 8, ["disabled"])
        ])
      ]),
      _.value ? (Jr(), hd(Me(ns), {
        key: 0,
        class: "spinner"
      })) : (Jr(), nl("div", C9, [
        w.value ? (Jr(), nl("div", S9, [
          at(Me(NO), { "onUpdate:modelValue": N }, {
            tabs: Ct(() => [
              at(Me(Nc), null, {
                default: Ct(() => [
                  k9
                ]),
                _: 1
              }),
              at(Me(Nc), null, {
                default: Ct(() => [
                  E9
                ]),
                _: 1
              }),
              at(Me(Nc), { "data-test": "ai-suggestions-tab" }, {
                default: Ct(() => [
                  I9
                ]),
                _: 1
              })
            ]),
            default: Ct(() => [
              at(Me(Oc), { class: "panel" }, {
                default: Ct(() => [
                  at(J5, { "situation-info": w.value }, null, 8, ["situation-info"])
                ]),
                _: 1
              }),
              at(Me(Oc), { class: "panel" }, {
                default: Ct(() => [
                  v.value && f.value == 1 ? (Jr(), hd(j7, {
                    key: 0,
                    situation: w.value,
                    width: v.value
                  }, null, 8, ["situation", "width"])) : Dm("", !0)
                ]),
                _: 1
              }),
              at(Me(Oc), { class: "panel" }, {
                default: Ct(() => [
                  f.value == 2 ? (Jr(), hd(GF, {
                    key: 0,
                    "situation-id": w.value.id
                  }, null, 8, ["situation-id"])) : Dm("", !0)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : (Jr(), nl("div", x9, " Error. The situation " + Nm(Me(i)) + " does not exist. ", 1))
      ])),
      at(Me(Gl), {
        modelValue: y.value,
        "onUpdate:modelValue": S[4] || (S[4] = (x) => y.value = x),
        right: "",
        error: "",
        timeout: 9e3
      }, {
        button: Ct(() => [
          at(Me(le), {
            onClick: S[3] || (S[3] = (x) => y.value = !1),
            text: ""
          }, {
            default: Ct(() => [
              A9
            ]),
            _: 1
          })
        ]),
        default: Ct(() => [
          Ii(Nm(Me(c).errorMessage) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const M9 = /* @__PURE__ */ he(L9, [["__scopeId", "data-v-a5b2d880"]]), D9 = window.Vue.defineComponent, Qe = window.Vue.unref, tn = window.Vue.createVNode, vt = window.Vue.createElementVNode, Go = window.Vue.withCtx, jo = window.Vue.openBlock, ui = window.Vue.createElementBlock, N9 = window.Vue.createCommentVNode, O9 = window.Vue.toDisplayString, sf = window.Vue.createTextVNode, P9 = window.Vue.normalizeClass, R9 = window.Vue.renderList, F9 = window.Vue.Fragment, U9 = window.Vue.createBlock, W9 = window.Vue.pushScopeId, q9 = window.Vue.popScopeId, xi = (e) => (W9("data-v-1a57a9f3"), e = e(), q9(), e), H9 = { class: "container" }, z9 = /* @__PURE__ */ xi(() => /* @__PURE__ */ vt("span", null, "Situation List", -1)), Y9 = /* @__PURE__ */ xi(() => /* @__PURE__ */ vt("h2", null, "New Situation", -1)), G9 = { class: "form" }, j9 = { class: "fields" }, Z9 = {
  key: 0,
  class: "errorList"
}, K9 = { class: "footer" }, J9 = /* @__PURE__ */ xi(() => /* @__PURE__ */ vt("span", null, "Clear", -1)), X9 = /* @__PURE__ */ xi(() => /* @__PURE__ */ vt("span", null, "Add Situation", -1)), Q9 = { class: "alarm-column" }, eU = { class: "header-alarms" }, tU = /* @__PURE__ */ xi(() => /* @__PURE__ */ vt("h3", null, "Add Unassociated Alarms", -1)), nU = /* @__PURE__ */ sf(" Total Alarms Added: "), rU = { class: "total" }, oU = { class: "list" }, sU = { class: "filters" }, iU = {
  key: 0,
  class: "alarms"
}, aU = /* @__PURE__ */ sf(" Error on creating new situation :( "), lU = /* @__PURE__ */ sf("dismiss"), wr = window.Vue.ref, uU = window.Vue.watch, cU = /* @__PURE__ */ D9({
  __name: "AddSituation",
  setup(e) {
    const r = Sr(), o = gn(), i = wr(), a = wr(""), u = wr(), c = wr(""), f = wr([]), w = wr(!1), v = wr(), _ = wr(o.unassignedAlarms);
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
      w.value = !1, $e.exports.includes(f.value, S) ? $e.exports.remove(f.value, (x) => x === S) : f.value.push(S);
    }, B = () => {
      const S = "This field should not be empty";
      let x = !0;
      return i.value || (a.value = S, x = !1), u.value || (c.value = S, x = !1), f.value.length < 2 && (w.value = !0, x = !1), x;
    }, L = async () => {
      if (B()) {
        const S = {
          alarmIdList: f.value,
          diagnosticText: u.value,
          description: i.value
        };
        await aI(S) ? r.push({
          name: "situations"
        }) : v.value = !0;
      }
    }, N = () => {
      i.value = "", u.value = "", f.value = [], _.value = o.unassignedAlarms;
    }, D = (S) => {
      _.value = S;
    };
    return (S, x) => (jo(), ui("div", H9, [
      tn(Qe(le), {
        primary: "",
        onClick: x[0] || (x[0] = () => $()),
        class: "back-btn"
      }, {
        default: Go(() => [
          tn(Qe(Y), {
            icon: Qe(rs),
            "aria-hidden": "true",
            class: "icon"
          }, null, 8, ["icon"]),
          z9
        ]),
        _: 1
      }),
      Y9,
      vt("div", G9, [
        vt("div", j9, [
          tn(Qe(Vl), {
            modelValue: i.value,
            "onUpdate:modelValue": x[1] || (x[1] = (I) => i.value = I),
            label: "Description",
            rows: "5",
            error: a.value
          }, null, 8, ["modelValue", "error"]),
          tn(Qe(Vl), {
            modelValue: u.value,
            "onUpdate:modelValue": x[2] || (x[2] = (I) => u.value = I),
            label: "Diagnostic Text",
            rows: "5",
            error: c.value
          }, null, 8, ["modelValue", "error"]),
          w.value ? (jo(), ui("div", Z9, " You must add at least 2 alarms. ")) : N9("", !0),
          vt("div", K9, [
            tn(Qe(le), {
              class: "btn",
              onClick: N
            }, {
              default: Go(() => [
                tn(Qe(Y), {
                  icon: Qe(cs),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                J9
              ]),
              _: 1
            }),
            tn(Qe(le), {
              class: "btn-add",
              onClick: L
            }, {
              default: Go(() => [
                tn(Qe(Y), {
                  icon: Qe(ql),
                  "aria-hidden": "true",
                  class: "icon"
                }, null, 8, ["icon"]),
                X9
              ]),
              _: 1
            })
          ])
        ]),
        vt("div", Q9, [
          vt("div", eU, [
            tU,
            vt("div", null, [
              vt("div", {
                class: P9(["totalAlarms", { errorList: w.value }])
              }, [
                nU,
                vt("span", rU, O9(Qe(f).length), 1)
              ], 2)
            ])
          ]),
          vt("div", oU, [
            vt("div", sU, [
              tn(_s, {
                list: Qe(o).unassignedAlarms,
                onFilteredList: D,
                isOpen: ""
              }, null, 8, ["list"])
            ]),
            _.value.length ? (jo(), ui("div", iU, [
              (jo(!0), ui(F9, null, R9(_.value, (I) => (jo(), ui("div", {
                key: I.id,
                class: "alarm-card"
              }, [
                tn(rf, {
                  selected: Qe($e.exports.includes)(Qe(f), I.id),
                  alarm: I,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (jo(), U9(gs, { key: 1 }))
          ])
        ])
      ]),
      tn(Qe(Gl), {
        modelValue: v.value,
        "onUpdate:modelValue": x[4] || (x[4] = (I) => v.value = I),
        right: "",
        error: "",
        timeout: 6e3
      }, {
        button: Go(() => [
          tn(Qe(le), {
            onClick: x[3] || (x[3] = (I) => v.value = !1),
            text: ""
          }, {
            default: Go(() => [
              lU
            ]),
            _: 1
          })
        ]),
        default: Go(() => [
          aU
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]));
  }
});
const dU = /* @__PURE__ */ he(cU, [["__scopeId", "data-v-1a57a9f3"]]), fU = window.Vue.defineComponent, hU = window.Vue.createElementVNode, pU = window.Vue.createTextVNode, wU = window.Vue.unref, vU = window.Vue.withCtx, mU = window.Vue.createVNode, _U = window.Vue.Fragment, gU = window.Vue.openBlock, $U = window.Vue.createElementBlock, yU = window.Vue.pushScopeId, VU = window.Vue.popScopeId, bU = (e) => (yU("data-v-bcb7dcc6"), e = e(), VU(), e), CU = /* @__PURE__ */ bU(() => /* @__PURE__ */ hU("div", { class: "main" }, "Something bad is happening...", -1)), SU = /* @__PURE__ */ pU(" Reload "), kU = /* @__PURE__ */ fU({
  __name: "ErrorPage",
  setup(e) {
    const r = Sr(), o = () => {
      r.push({ name: "situations" });
    };
    return (i, a) => (gU(), $U(_U, null, [
      CU,
      mU(wU(le), {
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
const EU = /* @__PURE__ */ he(kU, [["__scopeId", "data-v-bcb7dcc6"]]), IU = window.Vue.defineComponent, pt = window.Vue.unref, vn = window.Vue.createVNode, gr = window.Vue.createElementVNode, ci = window.Vue.withCtx, Qr = window.Vue.openBlock, Pm = window.Vue.createBlock, xU = window.Vue.renderList, AU = window.Vue.Fragment, di = window.Vue.createElementBlock, TU = window.Vue.toDisplayString, e1 = window.Vue.createTextVNode, BU = window.Vue.pushScopeId, LU = window.Vue.popScopeId, af = (e) => (BU("data-v-6078e4ad"), e = e(), LU(), e), MU = { class: "container" }, DU = { class: "nav-btns" }, NU = /* @__PURE__ */ af(() => /* @__PURE__ */ gr("span", null, "Situation List", -1)), OU = /* @__PURE__ */ af(() => /* @__PURE__ */ gr("h2", null, "List Unassociated Alarms", -1)), PU = { class: "content" }, RU = { class: "filters" }, FU = { class: "list" }, UU = { class: "action-btns" }, WU = /* @__PURE__ */ af(() => /* @__PURE__ */ gr("span", null, "Move", -1)), qU = { key: 1 }, HU = {
  key: 0,
  class: "alarms"
}, zU = /* @__PURE__ */ e1("dismiss"), vr = window.Vue.ref, YU = window.Vue.watch, GU = window.Vue.markRaw, jU = /* @__PURE__ */ IU({
  __name: "ViewUnassignedAlarms",
  setup(e) {
    const r = GU({
      ArrowBack: rs,
      ExitToApp: Id
    }), o = Sr(), i = gn();
    i.getUnassignedAlarms(), i.getSituations(), i.nodes.length || i.getNodes();
    const a = vr([]), u = vr([]), c = vr(!1), f = vr(!1), w = vr(""), v = vr(!1), _ = vr(!1), $ = vr(!0);
    YU(
      () => i.unassignedAlarms,
      () => {
        a.value = i.unassignedAlarms, $.value = !1;
      }
    );
    const y = (x) => {
      $e.exports.includes(u.value, x) ? $e.exports.remove(u.value, (I) => I === x) : u.value.push(x);
    }, B = () => {
      c.value ? u.value = a.value.map((x) => x.id) : u.value = [];
    }, L = async (x) => {
      await A_(x, u.value) ? i.getUnassignedAlarms() : (v.value = !0, _.value = !0, w.value = "Error on moving the alarms :("), f.value = !1;
    }, N = () => {
      o.push({
        name: "situations"
      });
    }, D = () => {
      u.value.length ? f.value = !0 : (v.value = !0, _.value = !1, w.value = "You need to choose at least one alarm!");
    }, S = (x) => {
      a.value = x;
    };
    return (x, I) => (Qr(), di("div", MU, [
      gr("div", DU, [
        vn(pt(le), {
          primary: "",
          onClick: I[0] || (I[0] = () => N())
        }, {
          default: ci(() => [
            vn(pt(Y), {
              icon: pt(r).ArrowBack,
              "aria-hidden": "true",
              class: "icon"
            }, null, 8, ["icon"]),
            NU
          ]),
          _: 1
        }),
        vn(ag)
      ]),
      OU,
      gr("div", PU, [
        gr("div", RU, [
          vn(_s, {
            list: pt(i).unassignedAlarms,
            onFilteredList: S,
            isOpen: ""
          }, null, 8, ["list"])
        ]),
        gr("div", FU, [
          gr("div", UU, [
            vn(pt(oo), {
              modelValue: c.value,
              "onUpdate:modelValue": [
                I[1] || (I[1] = (O) => c.value = O),
                B
              ],
              label: "selected"
            }, null, 8, ["modelValue"]),
            vn(pt(le), { onClick: D }, {
              default: ci(() => [
                vn(pt(Y), {
                  icon: pt(r).ExitToApp,
                  class: "icon move"
                }, null, 8, ["icon"]),
                WU
              ]),
              _: 1
            })
          ]),
          $.value ? (Qr(), Pm(pt(ns), {
            key: 0,
            class: "spinner"
          })) : (Qr(), di("div", qU, [
            pt(a).length ? (Qr(), di("div", HU, [
              (Qr(!0), di(AU, null, xU(pt(a), (O) => (Qr(), di("div", {
                key: O.id,
                class: "card"
              }, [
                vn(rf, {
                  selected: pt($e.exports.includes)(pt(u), O.id),
                  alarm: O,
                  onSelectedAlarm: y
                }, null, 8, ["selected", "alarm"])
              ]))), 128))
            ])) : (Qr(), Pm(gs, { key: 1 }))
          ]))
        ])
      ]),
      vn(qg, {
        situationId: 0,
        visible: f.value,
        onSituationSelected: L,
        onDrawerClosed: I[2] || (I[2] = () => f.value = !1)
      }, null, 8, ["visible"]),
      vn(pt(Gl), {
        modelValue: v.value,
        "onUpdate:modelValue": I[4] || (I[4] = (O) => v.value = O),
        right: "",
        error: _.value,
        timeout: 6e3
      }, {
        button: ci(() => [
          vn(pt(le), {
            onClick: I[3] || (I[3] = (O) => v.value = !1),
            text: ""
          }, {
            default: ci(() => [
              zU
            ]),
            _: 1
          })
        ]),
        default: ci(() => [
          e1(TU(w.value) + " ", 1)
        ]),
        _: 1
      }, 8, ["modelValue", "error"])
    ]));
  }
});
const ZU = /* @__PURE__ */ he(jU, [["__scopeId", "data-v-6078e4ad"]]), KU = window.Vue.defineComponent, pd = window.Vue.unref, JU = window.Vue.createVNode, XU = window.Vue.createElementVNode, QU = window.Vue.withCtx, eW = window.Vue.openBlock, tW = window.Vue.createBlock, nW = window.Vue.pushScopeId, rW = window.Vue.popScopeId, oW = (e) => (nW("data-v-17251e76"), e = e(), rW(), e), sW = /* @__PURE__ */ oW(() => /* @__PURE__ */ XU("span", null, "Situation List", -1)), iW = window.Vue.markRaw, aW = /* @__PURE__ */ KU({
  __name: "SituationListBtn",
  setup(e) {
    const r = Sr(), o = iW({
      ArrowBack: rs
    }), i = () => {
      r.push({
        name: "situations"
      });
    };
    return (a, u) => (eW(), tW(pd(le), {
      primary: "",
      onClick: u[0] || (u[0] = () => i())
    }, {
      default: QU(() => [
        JU(pd(Y), {
          icon: pd(o).ArrowBack,
          "aria-hidden": "true",
          class: "icon"
        }, null, 8, ["icon"]),
        sW
      ]),
      _: 1
    }));
  }
});
const lW = /* @__PURE__ */ he(aW, [["__scopeId", "data-v-17251e76"]]);
var uW = Object.defineProperty, cW = Object.defineProperties, dW = Object.getOwnPropertyDescriptors, Rm = Object.getOwnPropertySymbols, fW = Object.prototype.hasOwnProperty, hW = Object.prototype.propertyIsEnumerable, Fm = (e, r, o) => r in e ? uW(e, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[r] = o, Qo = (e, r) => {
  for (var o in r || (r = {}))
    fW.call(r, o) && Fm(e, o, r[o]);
  if (Rm)
    for (var o of Rm(r))
      hW.call(r, o) && Fm(e, o, r[o]);
  return e;
}, pW = (e, r) => cW(e, dW(r));
const wW = window.Vue.defineComponent, Um = window.Vue.toRef, vW = window.Vue.computed, mW = window.Vue.ref, Wm = window.Vue.resolveComponent, qm = window.Vue.openBlock, Hm = window.Vue.createElementBlock, zm = window.Vue.mergeProps, Ym = window.Vue.createVNode, _W = window.Vue.normalizeClass, rl = window.Vue.withCtx, Gm = window.Vue.renderSlot, gW = window.Vue.createElementVNode, $W = window.Vue.toHandlers, yW = window.Vue.toDisplayString, VW = window.Vue.createCommentVNode, bW = Qo(Qo({
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
}, Ml), ws), CW = {
  "update:modelValue": (e) => !0
};
var SW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
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
    vs(e), Dl(e);
    const o = Um(e, "id"), i = vW(() => o.value ? o.value : fe("feather-input-label")), a = mW(), { validate: u } = hs(i, a, e.label, e.schema, Um(e, "error"));
    return Qo({
      inputId: i,
      internalValue: a,
      validate: u
    }, ps(r.attrs));
  },
  data() {
    return {
      focused: !1
    };
  },
  computed: {
    descriptionId() {
      return fe("feather-input-description");
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
      const e = Qo({}, this.$attrs);
      return delete e.placeholder, e["aria-invalid"] || (e["aria-invalid"] = !!this.error), pW(Qo(Qo({}, e), this.listeners), {
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
    InputSubText: fs,
    InputWrapper: Ll
  }
}), EW = ["maxlength"], IW = {
  key: 0,
  class: "feather-input-count",
  "data-ref-id": "feather-form-element-count"
};
function xW(e, r, o, i, a, u) {
  const c = Wm("InputWrapper"), f = Wm("InputSubText");
  return qm(), Hm("div", zm(e.inherittedAttrs, { class: "feather-input-container" }), [
    Ym(c, {
      for: e.inputId,
      raised: e.isRaised,
      focused: e.focused,
      "show-clear": e.showClear,
      onWrapperClick: e.handleWrapperClick,
      onClear: e.handleClear,
      class: _W(["feather-input-content", e.contentCls])
    }, {
      pre: rl(() => [
        Gm(e.$slots, "pre", {}, void 0, !0)
      ]),
      post: rl(() => [
        Gm(e.$slots, "post", {}, void 0, !0)
      ]),
      default: rl(() => [
        gW("input", zm(e.attrs, {
          class: "feather-input",
          ref: "input"
        }, $W(e.listeners), {
          "data-ref-id": "feather-input",
          maxlength: e.maxlength > 0 ? e.maxlength : "false"
        }), null, 16, EW)
      ]),
      _: 3
    }, 8, ["for", "raised", "focused", "show-clear", "onWrapperClick", "onClear", "class"]),
    Ym(f, { id: e.descriptionId }, {
      right: rl(() => [
        e.maxlength ? (qm(), Hm("div", IW, yW(e.charCount), 1)) : VW("", !0)
      ]),
      _: 1
    }, 8, ["id"])
  ], 16);
}
var mr = /* @__PURE__ */ SW(kW, [["render", xW], ["__scopeId", "data-v-bf37b0d6"]]);
const AW = window.Vue.openBlock, TW = window.Vue.createElementBlock, lf = window.Vue.createElementVNode;
var BW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const LW = {}, MW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, DW = /* @__PURE__ */ lf("path", { d: "M12.61,6A4,4,0,0,0,8,9.41a.51.51,0,0,0,.5.59h.9c.34,0,.55-.15.59-.37a2,2,0,0,1,4,.51c-.13,1.73-2.63,1.7-3,4.28a.52.52,0,0,0,.5.58h1a.48.48,0,0,0,.48-.39c.35-2,3.33-2.3,2.93-5.1A4.08,4.08,0,0,0,12.61,6Z" }, null, -1), NW = /* @__PURE__ */ lf("rect", {
  x: "11",
  y: "16",
  width: "2",
  height: "2",
  rx: "0.5"
}, null, -1), OW = /* @__PURE__ */ lf("path", { d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" }, null, -1), PW = [
  DW,
  NW,
  OW
];
function RW(e, r) {
  return AW(), TW("svg", MW, PW);
}
var FW = /* @__PURE__ */ BW(LW, [["render", RW]]);
const UW = window.Vue.openBlock, WW = window.Vue.createElementBlock, t1 = window.Vue.createElementVNode;
var qW = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [i, a] of r)
    o[i] = a;
  return o;
};
const HW = {}, zW = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, YW = /* @__PURE__ */ t1("path", { d: "M13.26,3A9,9,0,0,0,4,12H2.21a.49.49,0,0,0-.35.85L5,16l3.14-3.16A.5.5,0,0,0,7.79,12H6a7,7,0,0,1,7.07-7A7.09,7.09,0,0,1,20,11.87,7,7,0,0,1,13,19a6.9,6.9,0,0,1-4.28-1.48,1,1,0,0,0-1.24,1.57A8.86,8.86,0,0,0,13,21a9,9,0,0,0,.26-18Z" }, null, -1), GW = /* @__PURE__ */ t1("path", { d: "M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,.46.84l3,2A1,1,0,0,0,15,16a1,1,0,0,0,.84-.46,1,1,0,0,0-.3-1.39L13,12.49V9A1,1,0,0,0,12,8Z" }, null, -1), jW = [
  YW,
  GW
];
function ZW(e, r) {
  return UW(), WW("svg", zW, jW);
}
var KW = /* @__PURE__ */ qW(HW, [["render", ZW]]);
const JW = window.Vue.defineComponent, Ce = window.Vue.createVNode, F = window.Vue.createElementVNode, q = window.Vue.unref, ke = window.Vue.createTextVNode, St = window.Vue.withCtx, wt = window.Vue.openBlock, nn = window.Vue.createElementBlock, Ft = window.Vue.createCommentVNode, wd = window.Vue.createBlock, Fe = window.Vue.toDisplayString, XW = window.Vue.normalizeClass, jm = window.Vue.Fragment, QW = window.Vue.createStaticVNode, eq = window.Vue.pushScopeId, tq = window.Vue.popScopeId, xe = (e) => (eq("data-v-edac1a1e"), e = e(), tq(), e), nq = { class: "container" }, rq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("h3", { "data-test": "page-title" }, "Correlation Engine Configuration Page", -1)), oq = { class: "section" }, sq = { class: "title" }, iq = /* @__PURE__ */ ke(" Choose the correlation engine that ALEC will use (see "), aq = ["href"], lq = /* @__PURE__ */ ke(" for more information): "), uq = /* @__PURE__ */ ke("Clustering"), cq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", { class: "hellinger" }, [
  /* @__PURE__ */ F("strong", null, "Hellinger distance")
], -1)), dq = /* @__PURE__ */ ke(" LLM Based "), fq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", {
  class: "caption",
  "data-test": "engine-llm-caption"
}, "Coming soon", -1)), hq = {
  class: "section",
  "data-test": "llm-section"
}, pq = { class: "title-row" }, wq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", { class: "title" }, "LLM Root Cause Analysis", -1)), vq = ["aria-expanded"], mq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", { class: "llm-help" }, " When a new situation is created, ALEC asks a large language model to suggest up to 3 probable root causes and 3 possible resolutions based on the clustered alarms. Suggestions appear on the situation detail page. ALEC talks to any OpenAI-compatible API \u2014 the defaults below use OpenRouter (which can route to Claude, GPT, Gemini and others). The endpoint, model and API key are stored on the OpenNMS server and apply to all users of this plugin. ", -1)), _q = {
  key: 0,
  class: "help-popover",
  "data-test": "llm-key-help-popover"
}, gq = /* @__PURE__ */ QW('<strong data-v-edac1a1e>How to get an API key:</strong><ol data-v-edac1a1e><li data-v-edac1a1e> Pick a provider that exposes an OpenAI-compatible <code data-v-edac1a1e>/chat/completions</code> endpoint \u2014 <a href="https://openrouter.ai/" target="_blank" rel="noopener noreferrer" data-v-edac1a1e>OpenRouter</a> (the default, one key for many models), OpenAI, or Anthropic&#39;s compatibility endpoint. </li><li data-v-edac1a1e> Create an API key in that provider&#39;s dashboard and add a payment method if it requires one. </li><li data-v-edac1a1e> Set <em data-v-edac1a1e>Endpoint</em> to the provider&#39;s base URL (ALEC appends <code data-v-edac1a1e>/chat/completions</code>) and <em data-v-edac1a1e>Model</em> to a model the provider offers, e.g. <code data-v-edac1a1e>anthropic/claude-sonnet-4.6</code> or <code data-v-edac1a1e>openai/gpt-4o</code>. </li><li data-v-edac1a1e> Paste the key into the field below and click <em data-v-edac1a1e>Save Changes</em>. The key is stored on the OpenNMS server; it is never returned to the browser after saving. </li></ol><p class="pricing-hint" data-v-edac1a1e> Cost depends on the provider and model you choose. A single situation analysis is typically a few hundred tokens. Track 30-day usage in the panel below after you save. </p>', 3), $q = [
  gq
], yq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("strong", null, "LLM Enabled Root Cause Analysis", -1)), Vq = /* @__PURE__ */ ke(" Automatically AI Evaluate new situations "), bq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", { class: "caption-inline" }, " When off, new situations are not analyzed automatically \u2014 click Re-evaluate on the AI Suggestions tab to trigger an analysis on demand. ", -1)), Cq = {
  key: 1,
  class: "caption",
  "data-test": "llm-no-key-hint"
}, Sq = {
  class: "llm-prompt-block",
  "data-test": "llm-prompt-block"
}, kq = { class: "llm-prompt-header" }, Eq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("span", { class: "llm-prompt-label" }, "System prompt", -1)), Iq = ["disabled"], xq = /* @__PURE__ */ ke(" Reset to default "), Aq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", { class: "llm-prompt-help" }, " Instructions sent to the model for every analysis. Customize it to add site-specific context (your topology, naming conventions, escalation policy, vendors in use). Leave it as the default, or clear it to fall back to the default. The situation's alarms are appended automatically \u2014 don't paste alarm data here. ", -1)), Tq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", {
  class: "llm-key-match-hint",
  "data-test": "llm-key-match-hint"
}, [
  /* @__PURE__ */ ke(" Your API key must come from the same provider as the Endpoint above \u2014 an OpenRouter key ("),
  /* @__PURE__ */ F("code", null, "sk-or-\u2026"),
  /* @__PURE__ */ ke(") for "),
  /* @__PURE__ */ F("code", null, "openrouter.ai"),
  /* @__PURE__ */ ke(", an Anthropic key ("),
  /* @__PURE__ */ F("code", null, "sk-ant-\u2026"),
  /* @__PURE__ */ ke(") for "),
  /* @__PURE__ */ F("code", null, "api.anthropic.com"),
  /* @__PURE__ */ ke(", an OpenAI key for "),
  /* @__PURE__ */ F("code", null, "api.openai.com"),
  /* @__PURE__ */ ke(". ")
], -1)), Bq = { class: "llm-key-row" }, Lq = /* @__PURE__ */ ke(" Clear Key "), Mq = { class: "llm-validate-row" }, Dq = {
  key: 0,
  class: "caption",
  "data-test": "llm-validate-hint"
}, Nq = {
  key: 2,
  class: "llm-key-saved",
  "data-test": "llm-key-saved"
}, Oq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("span", null, " API key on file. The stored key is never sent back to the browser \u2014 leave the field blank to keep it, or paste a new one to replace it. ", -1)), Pq = {
  key: 3,
  class: "caption",
  "data-test": "llm-cleared-hint"
}, Rq = {
  key: 4,
  class: "llm-usage",
  "data-test": "llm-usage"
}, Fq = { class: "usage-summary" }, Uq = { class: "usage-label" }, Wq = ["title"], qq = ["title"], Hq = {
  key: 0,
  class: "usage-details",
  "data-test": "llm-usage-details"
}, zq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("dt", null, "Input", -1)), Yq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("dt", null, "Output", -1)), Gq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("dt", null, "Cache read", -1)), jq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("dt", null, "Cache create", -1)), Zq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("dt", null, "Calls", -1)), Kq = { class: "muted" }, Jq = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("dt", null, "Cache hit", -1)), Xq = { class: "pricing-note" }, Qq = {
  key: 0,
  class: "section",
  "data-test": "variables-section"
}, eH = { class: "title-row" }, tH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("div", { class: "title" }, "Correlation variables", -1)), nH = ["aria-expanded"], rH = {
  key: 0,
  class: "help-popover",
  "data-test": "variables-help-popover"
}, oH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("strong", null, "Alpha (\u03B1)", -1)), sH = /* @__PURE__ */ ke(" \u2014 overall scaling of inter-alarm distance. Higher \u03B1 \u2192 more conservative clustering (fewer clusters). "), iH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("strong", null, "Beta (\u03B2)", -1)), aH = /* @__PURE__ */ ke(" \u2014 weight between time (\u03B2) and topology (1\u2212\u03B2), in "), lH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("code", null, "[0, 1]", -1)), uH = /* @__PURE__ */ ke(". Higher \u03B2 emphasises time proximity; lower \u03B2 emphasises topology. "), cH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("strong", null, "Epsilon (\u03B5)", -1)), dH = /* @__PURE__ */ ke(" \u2014 DBScan radius. Higher \u03B5 clusters more aggressively; lower \u03B5 produces smaller, tighter clusters. "), fH = { "data-test": "help-hellinger-w" }, hH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("strong", null, "Hellinger w", -1)), pH = /* @__PURE__ */ ke(" \u2014 variance scaling coefficient used by the Hellinger distance measure. Larger values flatten the distribution comparison. "), wH = { "data-test": "help-hellinger-bias" }, vH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("strong", null, "Hellinger bias", -1)), mH = /* @__PURE__ */ ke(" \u2014 additive offset applied inside the Hellinger distance. Tunes the baseline separation between alarms. "), _H = { class: "variables" }, gH = { class: "action-row" }, $H = /* @__PURE__ */ ke(" Close All Open Situations "), yH = /* @__PURE__ */ ke(" Re-Evaluate All Open Alarms "), VH = /* @__PURE__ */ xe(() => /* @__PURE__ */ F("span", null, "Save Changes", -1)), bH = /* @__PURE__ */ ke("dismiss"), fi = window.Vue.computed, CH = window.Vue.markRaw, SH = window.Vue.onMounted, Te = window.Vue.ref, kH = /* @__PURE__ */ JW({
  __name: "AccountSettings",
  setup(e) {
    var Ti, Ir, xr, Vs, mt, Zn, Bi, Yt, bs, Li, Kn, _t, Jn, Ar, Mi, Xn, Di, Qn, Bn, ho, po, wo, vo, mo, _o;
    const r = (Q) => Q >= 1e6 ? (Q / 1e6).toFixed(1) + "M" : Q >= 1e3 ? (Q / 1e3).toFixed(1) + "K" : String(Q), o = (Q) => Q < 0.01 ? "~$0.00" : "~$" + Q.toFixed(2), i = CH({
      MarkComplete: yl,
      Help: FW,
      Restore: KW
    }), a = {
      alpha: 145,
      beta: 0.55,
      epsilon: 150,
      hellingerW: 4851.28,
      hellingerBias: -1986
    }, u = ao(), c = Te(((Ti = u.engineInfo) == null ? void 0 : Ti.engineName) || tt.ENGINE_DBSCAN), f = Te(
      u.engineInfo ? u.engineInfo.distanceMeasureName === tt.HELLINGER_OPTION : !0
    ), w = Te((xr = (Ir = u.engineInfo) == null ? void 0 : Ir.alpha) != null ? xr : a.alpha), v = Te((mt = (Vs = u.engineInfo) == null ? void 0 : Vs.beta) != null ? mt : a.beta), _ = Te((Bi = (Zn = u.engineInfo) == null ? void 0 : Zn.epsilon) != null ? Bi : a.epsilon), $ = Te(
      (bs = (Yt = u.engineInfo) == null ? void 0 : Yt.hellingerW) != null ? bs : a.hellingerW
    ), y = Te(
      (Kn = (Li = u.engineInfo) == null ? void 0 : Li.hellingerBias) != null ? Kn : a.hellingerBias
    ), B = fi(() => c.value === tt.ENGINE_DBSCAN), L = fi(() => B.value && f.value), N = Te((Jn = (_t = u.llmConfig) == null ? void 0 : _t.enabled) != null ? Jn : !1), D = Te((Mi = (Ar = u.llmConfig) == null ? void 0 : Ar.autoEvaluate) != null ? Mi : !0), S = "https://openrouter.ai/api/v1", x = "anthropic/claude-sonnet-4.6", I = Te((Di = (Xn = u.llmConfig) == null ? void 0 : Xn.baseUrl) != null ? Di : S), O = Te((Bn = (Qn = u.llmConfig) == null ? void 0 : Qn.model) != null ? Bn : x), k = Te((po = (ho = u.llmConfig) == null ? void 0 : ho.systemPrompt) != null ? po : ""), P = Te((vo = (wo = u.llmConfig) == null ? void 0 : wo.defaultSystemPrompt) != null ? vo : ""), R = fi(
      () => P.value.length > 0 && k.value.trim() !== P.value.trim()
    ), z = () => {
      k.value = P.value;
    }, de = Te(""), se = Te((_o = (mo = u.llmConfig) == null ? void 0 : mo.apiKeyPresent) != null ? _o : !1), ue = Te(!1), Ve = Te(!1), ye = Te(null), Be = fi(
      () => de.value.trim().length === 0 && (!se.value || ue.value)
    ), me = async () => {
      ye.value = null, Ve.value = !0;
      try {
        const Q = {
          enabled: N.value,
          autoEvaluate: D.value,
          baseUrl: I.value.trim(),
          model: O.value.trim()
        }, G = de.value.trim();
        G.length > 0 && (Q.apiKey = G), ye.value = await oI(Q);
      } finally {
        Ve.value = !1;
      }
    }, Ue = fi(
      () => (!se.value || ue.value) && de.value.trim().length === 0
    ), He = () => {
      de.value = "", ue.value = !0, se.value = !1, N.value = !1;
    }, We = Te(!1), $n = Te(!1), Tn = Te(!1), At = Te(!1), Ai = Te(""), co = Te(!1);
    SH(async () => {
      if (u.llmConfig === null) {
        const Q = await u.getLLMConfig();
        Q && (N.value = Q.enabled, D.value = Q.autoEvaluate, I.value = Q.baseUrl || S, O.value = Q.model || x, P.value = Q.defaultSystemPrompt || "", k.value = Q.systemPrompt || Q.defaultSystemPrompt || "", se.value = Q.apiKeyPresent);
      }
      await u.getLLMUsage(30);
    });
    const jl = () => {
      w.value = a.alpha, v.value = a.beta, _.value = a.epsilon, $.value = a.hellingerW, y.value = a.hellingerBias;
    }, zt = (Q, G) => {
      Ai.value = Q, At.value = G, Tn.value = !0;
    }, fo = () => {
      if (ue.value)
        return {
          enabled: !1,
          autoEvaluate: D.value,
          baseUrl: I.value.trim(),
          model: O.value.trim(),
          systemPrompt: k.value,
          clearApiKey: !0
        };
      const Q = de.value.trim(), G = {
        enabled: N.value,
        autoEvaluate: D.value,
        baseUrl: I.value.trim(),
        model: O.value.trim(),
        systemPrompt: k.value
      };
      return Q.length > 0 && (G.apiKey = Q), G;
    }, Zl = async () => {
      var Ni, Oi, Pi, Cs, Ss, Ri, Fi, Ui, Wi, ks, qi, Hi, zi;
      const Q = {
        alpha: Number(w.value),
        beta: Number(v.value),
        epsilon: Number(_.value)
      };
      f.value && (Q.hellingerW = Number($.value), Q.hellingerBias = Number(y.value));
      const G = await u.setEngineInfo(
        c.value,
        f.value,
        Q
      ), re = await u.setLLMConfig(fo());
      re && (de.value = "", ue.value = !1, se.value = (Oi = (Ni = u.llmConfig) == null ? void 0 : Ni.apiKeyPresent) != null ? Oi : !1, N.value = (Cs = (Pi = u.llmConfig) == null ? void 0 : Pi.enabled) != null ? Cs : !1, D.value = (Ri = (Ss = u.llmConfig) == null ? void 0 : Ss.autoEvaluate) != null ? Ri : !0, I.value = (Ui = (Fi = u.llmConfig) == null ? void 0 : Fi.baseUrl) != null ? Ui : S, O.value = (ks = (Wi = u.llmConfig) == null ? void 0 : Wi.model) != null ? ks : x, (qi = u.llmConfig) != null && qi.defaultSystemPrompt && (P.value = u.llmConfig.defaultSystemPrompt), k.value = (zi = (Hi = u.llmConfig) == null ? void 0 : Hi.systemPrompt) != null ? zi : k.value, u.getLLMUsage(30)), G && re ? (u.getEngineInfo(), zt("The settings were saved!", !1)) : zt(
        G && !re ? "Engine settings saved, but LLM configuration could not be saved (an API key is required to enable the integration)." : "Error on saving the settings",
        !0
      );
    }, kr = async () => {
      if (!window.confirm(
        "Close all open situations? This marks every non-rejected, non-accepted situation as REJECTED. Cannot be undone."
      ))
        return;
      const Q = await lI();
      zt(
        Q ? "All open situations were closed." : "Failed to close situations.",
        !Q
      );
    }, Er = async () => {
      if (!window.confirm(
        "Re-evaluate all open alarms with the current correlation variables? The engine will pause and re-process active alarms."
      ))
        return;
      const Q = await uI();
      zt(
        Q ? "Engine re-initialized. Alarms are being re-evaluated." : "Failed to re-evaluate alarms.",
        !Q
      );
    };
    return (Q, G) => (wt(), nn(jm, null, [
      Ce(lW),
      F("div", nq, [
        rq,
        F("div", oq, [
          F("div", sq, [
            iq,
            F("a", {
              target: "_blank",
              href: q(tt).URL_DOCUMENTATION
            }, "Correlation Engines documentation", 8, aq),
            lq
          ]),
          Ce(q(ng), {
            vertical: "",
            modelValue: c.value,
            "onUpdate:modelValue": G[1] || (G[1] = (re) => c.value = re),
            label: "",
            hideLabel: ""
          }, {
            default: St(() => [
              Ce(q(kd), {
                class: "radio-item",
                value: q(tt).ENGINE_DBSCAN
              }, {
                default: St(() => [
                  uq
                ]),
                _: 1
              }, 8, ["value"]),
              Ce(q(oo), {
                modelValue: f.value,
                "onUpdate:modelValue": G[0] || (G[0] = (re) => f.value = re),
                disabled: !q(B),
                class: "checkbox"
              }, {
                default: St(() => [
                  cq
                ]),
                _: 1
              }, 8, ["modelValue", "disabled"]),
              Ce(q(kd), {
                class: "radio-item",
                value: q(tt).ENGINE_LLM,
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
        F("div", hq, [
          F("div", pq, [
            wq,
            F("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": $n.value,
              "aria-label": "How to get an API key",
              "data-test": "llm-key-help",
              onClick: G[2] || (G[2] = (re) => $n.value = !$n.value)
            }, [
              Ce(q(Y), {
                icon: q(i).Help
              }, null, 8, ["icon"])
            ], 8, vq)
          ]),
          mq,
          $n.value ? (wt(), nn("div", _q, $q)) : Ft("", !0),
          Ce(q(oo), {
            modelValue: N.value,
            "onUpdate:modelValue": G[3] || (G[3] = (re) => N.value = re),
            disabled: q(Ue),
            class: "checkbox",
            "data-test": "llm-enabled"
          }, {
            default: St(() => [
              yq
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          Ce(q(oo), {
            modelValue: D.value,
            "onUpdate:modelValue": G[4] || (G[4] = (re) => D.value = re),
            disabled: !N.value,
            class: "checkbox sub-checkbox",
            "data-test": "llm-auto-evaluate"
          }, {
            default: St(() => [
              Vq,
              bq
            ]),
            _: 1
          }, 8, ["modelValue", "disabled"]),
          q(Ue) ? (wt(), nn("div", Cq, " Enter an API key to enable. ")) : Ft("", !0),
          Ce(q(mr), {
            modelValue: I.value,
            "onUpdate:modelValue": G[5] || (G[5] = (re) => I.value = re),
            label: "Endpoint (OpenAI-compatible base URL)",
            "data-test": "llm-base-url",
            class: "llm-text-input"
          }, null, 8, ["modelValue"]),
          Ce(q(mr), {
            modelValue: O.value,
            "onUpdate:modelValue": G[6] || (G[6] = (re) => O.value = re),
            label: "Model",
            "data-test": "llm-model",
            class: "llm-text-input"
          }, null, 8, ["modelValue"]),
          F("div", Sq, [
            F("div", kq, [
              Eq,
              F("button", {
                type: "button",
                class: "llm-prompt-reset",
                disabled: !q(R),
                "data-test": "llm-prompt-reset",
                onClick: z
              }, [
                Ce(q(Y), {
                  icon: q(i).Restore,
                  class: "reset-inline-icon"
                }, null, 8, ["icon"]),
                xq
              ], 8, Iq)
            ]),
            Aq,
            Ce(q(Vl), {
              modelValue: k.value,
              "onUpdate:modelValue": G[7] || (G[7] = (re) => k.value = re),
              label: "System prompt",
              hideLabel: "",
              rows: "12",
              "data-test": "llm-system-prompt",
              class: "llm-prompt-textarea"
            }, null, 8, ["modelValue"])
          ]),
          Tq,
          F("div", Bq, [
            Ce(q(mr), {
              modelValue: de.value,
              "onUpdate:modelValue": G[8] || (G[8] = (re) => de.value = re),
              type: "password",
              autocomplete: "new-password",
              label: se.value && !ue.value ? "API key \u2014 saved (paste a new key to replace)" : "API key",
              "data-test": "llm-api-key",
              class: "llm-key-input"
            }, null, 8, ["modelValue", "label"]),
            se.value && !ue.value ? (wt(), wd(q(le), {
              key: 0,
              secondary: "",
              "data-test": "llm-clear-key",
              onClick: He
            }, {
              default: St(() => [
                Lq
              ]),
              _: 1
            })) : Ft("", !0)
          ]),
          F("div", Mq, [
            Ce(q(le), {
              secondary: "",
              disabled: Ve.value || q(Be),
              "data-test": "llm-validate-btn",
              onClick: me
            }, {
              default: St(() => [
                ke(Fe(Ve.value ? "Validating\u2026" : "Validate key"), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            q(Be) ? (wt(), nn("span", Dq, " Enter an API key to validate. ")) : ye.value ? (wt(), nn("span", {
              key: 1,
              class: XW(["llm-validate-result", ye.value.ok ? "is-ok" : "is-error"]),
              "data-test": "llm-validate-result"
            }, [
              Ce(q(Y), {
                icon: ye.value.ok ? q(i).MarkComplete : q(i).Help,
                class: "result-icon"
              }, null, 8, ["icon"]),
              ke(" " + Fe(ye.value.message), 1)
            ], 2)) : Ft("", !0)
          ]),
          se.value && !ue.value ? (wt(), nn("div", Nq, [
            Ce(q(Y), {
              icon: q(i).MarkComplete,
              class: "saved-icon"
            }, null, 8, ["icon"]),
            Oq
          ])) : Ft("", !0),
          ue.value ? (wt(), nn("div", Pq, " Stored API key will be removed on save. ")) : Ft("", !0),
          q(u).llmUsage ? (wt(), nn("div", Rq, [
            F("div", Fq, [
              F("span", Uq, "Last " + Fe(q(u).llmUsage.daysWindow) + " days:", 1),
              F("span", {
                class: "usage-tokens",
                title: `${q(u).llmUsage.totalTokens.toLocaleString()} tokens`,
                "data-test": "llm-usage-tokens"
              }, Fe(r(q(u).llmUsage.totalTokens)) + " tokens ", 9, Wq),
              F("span", {
                class: "usage-cost",
                title: q(u).llmUsage.pricingNote,
                "data-test": "llm-usage-cost"
              }, " (" + Fe(o(q(u).llmUsage.estimatedCostUsd)) + ") ", 9, qq),
              F("button", {
                type: "button",
                class: "usage-toggle",
                onClick: G[9] || (G[9] = (re) => co.value = !co.value),
                "data-test": "llm-usage-toggle"
              }, Fe(co.value ? "hide details" : "show details"), 1)
            ]),
            co.value ? (wt(), nn("dl", Hq, [
              F("div", null, [
                zq,
                F("dd", null, Fe(r(q(u).llmUsage.inputTokens)), 1)
              ]),
              F("div", null, [
                Yq,
                F("dd", null, Fe(r(q(u).llmUsage.outputTokens)), 1)
              ]),
              F("div", null, [
                Gq,
                F("dd", null, Fe(r(q(u).llmUsage.cacheReadInputTokens)), 1)
              ]),
              F("div", null, [
                jq,
                F("dd", null, Fe(r(q(u).llmUsage.cacheCreationInputTokens)), 1)
              ]),
              F("div", null, [
                Zq,
                F("dd", null, [
                  ke(Fe(q(u).llmUsage.calls) + " ", 1),
                  F("span", Kq, "(" + Fe(q(u).llmUsage.successfulCalls) + " ok / " + Fe(q(u).llmUsage.failedCalls) + " failed)", 1)
                ])
              ]),
              F("div", null, [
                Jq,
                F("dd", null, Fe((q(u).llmUsage.cacheHitRatio * 100).toFixed(0)) + "%", 1)
              ]),
              F("div", Xq, Fe(q(u).llmUsage.pricingNote), 1)
            ])) : Ft("", !0)
          ])) : Ft("", !0)
        ]),
        q(B) ? (wt(), nn("div", Qq, [
          F("div", eH, [
            tH,
            F("button", {
              type: "button",
              class: "icon-btn help-icon",
              "aria-expanded": We.value,
              "aria-label": "Show help for correlation variables",
              "data-test": "variables-help",
              onClick: G[10] || (G[10] = (re) => We.value = !We.value)
            }, [
              Ce(q(Y), {
                icon: q(i).Help
              }, null, 8, ["icon"])
            ], 8, nH),
            F("button", {
              type: "button",
              class: "icon-btn reset-icon",
              "aria-label": "Reset correlation variables to defaults",
              "data-test": "variables-reset",
              onClick: jl
            }, [
              Ce(q(Y), {
                icon: q(i).Restore
              }, null, 8, ["icon"])
            ])
          ]),
          We.value ? (wt(), nn("div", rH, [
            F("ul", null, [
              F("li", null, [
                oH,
                sH,
                F("em", null, "Default: " + Fe(a.alpha), 1)
              ]),
              F("li", null, [
                iH,
                aH,
                lH,
                uH,
                F("em", null, "Default: " + Fe(a.beta), 1)
              ]),
              F("li", null, [
                cH,
                dH,
                F("em", null, "Default: " + Fe(a.epsilon), 1)
              ]),
              q(L) ? (wt(), nn(jm, { key: 0 }, [
                F("li", fH, [
                  hH,
                  pH,
                  F("em", null, "Default: " + Fe(a.hellingerW), 1)
                ]),
                F("li", wH, [
                  vH,
                  mH,
                  F("em", null, "Default: " + Fe(a.hellingerBias), 1)
                ])
              ], 64)) : Ft("", !0)
            ])
          ])) : Ft("", !0),
          F("div", _H, [
            Ce(q(mr), {
              modelValue: w.value,
              "onUpdate:modelValue": G[11] || (G[11] = (re) => w.value = re),
              type: "number",
              label: "Alpha",
              "data-test": "variable-alpha"
            }, null, 8, ["modelValue"]),
            Ce(q(mr), {
              modelValue: v.value,
              "onUpdate:modelValue": G[12] || (G[12] = (re) => v.value = re),
              type: "number",
              label: "Beta",
              "data-test": "variable-beta"
            }, null, 8, ["modelValue"]),
            Ce(q(mr), {
              modelValue: _.value,
              "onUpdate:modelValue": G[13] || (G[13] = (re) => _.value = re),
              type: "number",
              label: "Epsilon",
              "data-test": "variable-epsilon"
            }, null, 8, ["modelValue"]),
            q(L) ? (wt(), wd(q(mr), {
              key: 0,
              modelValue: $.value,
              "onUpdate:modelValue": G[14] || (G[14] = (re) => $.value = re),
              type: "number",
              label: "Hellinger w",
              "data-test": "variable-hellinger-w"
            }, null, 8, ["modelValue"])) : Ft("", !0),
            q(L) ? (wt(), wd(q(mr), {
              key: 1,
              modelValue: y.value,
              "onUpdate:modelValue": G[15] || (G[15] = (re) => y.value = re),
              type: "number",
              label: "Hellinger bias",
              "data-test": "variable-hellinger-bias"
            }, null, 8, ["modelValue"])) : Ft("", !0)
          ])
        ])) : Ft("", !0),
        F("div", gH, [
          Ce(q(le), {
            secondary: "",
            "data-test": "close-all-btn",
            onClick: kr
          }, {
            default: St(() => [
              $H
            ]),
            _: 1
          }),
          Ce(q(le), {
            secondary: "",
            "data-test": "reevaluate-btn",
            onClick: Er
          }, {
            default: St(() => [
              yH
            ]),
            _: 1
          }),
          Ce(q(le), {
            primary: "",
            class: "save-btn",
            "data-test": "save-btn",
            onClick: Zl
          }, {
            default: St(() => [
              Ce(q(Y), {
                icon: q(i).MarkComplete,
                class: "icon"
              }, null, 8, ["icon"]),
              VH
            ]),
            _: 1
          })
        ]),
        Ce(q(Gl), {
          modelValue: Tn.value,
          "onUpdate:modelValue": G[17] || (G[17] = (re) => Tn.value = re),
          right: "",
          error: At.value,
          timeout: 6e3
        }, {
          button: St(() => [
            Ce(q(le), {
              onClick: G[16] || (G[16] = (re) => Tn.value = !1),
              text: ""
            }, {
              default: St(() => [
                bH
              ]),
              _: 1
            })
          ]),
          default: St(() => [
            ke(Fe(Ai.value) + " ", 1)
          ]),
          _: 1
        }, 8, ["modelValue", "error"])
      ])
    ], 64));
  }
});
const EH = /* @__PURE__ */ he(kH, [["__scopeId", "data-v-edac1a1e"]]), IH = window.VueRouter.createRouter, xH = window.VueRouter.createWebHistory, AH = async () => {
  const e = ao();
  e.userId || await e.getUserRole();
}, n1 = [
  {
    path: "/",
    name: "home",
    beforeEnter: async (e) => {
      const r = window.VRouter || r1;
      await ao().getUserRole(), r.push({ name: "situations", params: e.params });
    },
    component: {}
  },
  {
    path: "/situations",
    name: "situations",
    beforeEnter: () => AH(),
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
      await ao().getEngineInfo();
    },
    component: EH
  }
], vd = window.VRouter;
if (vd) {
  const e = "Plugin-alecUiExtension", r = vd.hasRoute(e) ? e : "Plugin";
  for (const o of n1) {
    const { path: i, name: a, component: u, beforeEnter: c } = o;
    vd.addRoute(r, {
      path: i.slice(1),
      name: a,
      component: u,
      beforeEnter: c
    });
  }
}
const r1 = IH({
  history: xH(),
  routes: n1
});
window.Vue.createApp;
window.Pinia.createPinia;
window.alecUiExtension = PS;
